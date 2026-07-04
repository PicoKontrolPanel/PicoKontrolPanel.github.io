var zg=Object.defineProperty;var Bg=(o,a,c)=>a in o?zg(o,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[a]=c;var ce=(o,a,c)=>Bg(o,typeof a!="symbol"?a+"":a,c);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const h of u)if(h.type==="childList")for(const p of h.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function c(u){const h={};return u.integrity&&(h.integrity=u.integrity),u.referrerPolicy&&(h.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?h.credentials="include":u.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(u){if(u.ep)return;u.ep=!0;const h=c(u);fetch(u.href,h)}})();function Fp(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Wu={exports:{}},Ii={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xh;function Lg(){if(Xh)return Ii;Xh=1;var o=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function c(s,u,h){var p=null;if(h!==void 0&&(p=""+h),u.key!==void 0&&(p=""+u.key),"key"in u){h={};for(var g in u)g!=="key"&&(h[g]=u[g])}else h=u;return u=h.ref,{$$typeof:o,type:s,key:p,ref:u!==void 0?u:null,props:h}}return Ii.Fragment=a,Ii.jsx=c,Ii.jsxs=c,Ii}var Kh;function Ug(){return Kh||(Kh=1,Wu.exports=Lg()),Wu.exports}var f=Ug(),Ju={exports:{}},ye={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh;function Hg(){if(Fh)return ye;Fh=1;var o=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),j=Symbol.iterator;function F(E){return E===null||typeof E!="object"?null:(E=j&&E[j]||E["@@iterator"],typeof E=="function"?E:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ne=Object.assign,G={};function $(E,L,Z){this.props=E,this.context=L,this.refs=G,this.updater=Z||P}$.prototype.isReactComponent={},$.prototype.setState=function(E,L){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,L,"setState")},$.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function le(){}le.prototype=$.prototype;function fe(E,L,Z){this.props=E,this.context=L,this.refs=G,this.updater=Z||P}var se=fe.prototype=new le;se.constructor=fe,ne(se,$.prototype),se.isPureReactComponent=!0;var de=Array.isArray;function Ne(){}var ee={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function xe(E,L,Z){var D=Z.ref;return{$$typeof:o,type:E,key:L,ref:D!==void 0?D:null,props:Z}}function be(E,L){return xe(E.type,L,E.props)}function ve(E){return typeof E=="object"&&E!==null&&E.$$typeof===o}function ae(E){var L={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(Z){return L[Z]})}var Pe=/\/+/g;function Ae(E,L){return typeof E=="object"&&E!==null&&E.key!=null?ae(""+E.key):L.toString(36)}function Qe(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(Ne,Ne):(E.status="pending",E.then(function(L){E.status==="pending"&&(E.status="fulfilled",E.value=L)},function(L){E.status==="pending"&&(E.status="rejected",E.reason=L)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function z(E,L,Z,D,X){var K=typeof E;(K==="undefined"||K==="boolean")&&(E=null);var I=!1;if(E===null)I=!0;else switch(K){case"bigint":case"string":case"number":I=!0;break;case"object":switch(E.$$typeof){case o:case a:I=!0;break;case x:return I=E._init,z(I(E._payload),L,Z,D,X)}}if(I)return X=X(E),I=D===""?"."+Ae(E,0):D,de(X)?(Z="",I!=null&&(Z=I.replace(Pe,"$&/")+"/"),z(X,L,Z,"",function(Vt){return Vt})):X!=null&&(ve(X)&&(X=be(X,Z+(X.key==null||E&&E.key===X.key?"":(""+X.key).replace(Pe,"$&/")+"/")+I)),L.push(X)),1;I=0;var Ue=D===""?".":D+":";if(de(E))for(var Ce=0;Ce<E.length;Ce++)D=E[Ce],K=Ue+Ae(D,Ce),I+=z(D,L,Z,K,X);else if(Ce=F(E),typeof Ce=="function")for(E=Ce.call(E),Ce=0;!(D=E.next()).done;)D=D.value,K=Ue+Ae(D,Ce++),I+=z(D,L,Z,K,X);else if(K==="object"){if(typeof E.then=="function")return z(Qe(E),L,Z,D,X);throw L=String(E),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return I}function Q(E,L,Z){if(E==null)return E;var D=[],X=0;return z(E,D,"","",function(K){return L.call(Z,K,X++)}),D}function ue(E){if(E._status===-1){var L=E._result;L=L(),L.then(function(Z){(E._status===0||E._status===-1)&&(E._status=1,E._result=Z)},function(Z){(E._status===0||E._status===-1)&&(E._status=2,E._result=Z)}),E._status===-1&&(E._status=0,E._result=L)}if(E._status===1)return E._result.default;throw E._result}var Se=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},Ee={map:Q,forEach:function(E,L,Z){Q(E,function(){L.apply(this,arguments)},Z)},count:function(E){var L=0;return Q(E,function(){L++}),L},toArray:function(E){return Q(E,function(L){return L})||[]},only:function(E){if(!ve(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return ye.Activity=N,ye.Children=Ee,ye.Component=$,ye.Fragment=c,ye.Profiler=u,ye.PureComponent=fe,ye.StrictMode=s,ye.Suspense=v,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,ye.__COMPILER_RUNTIME={__proto__:null,c:function(E){return ee.H.useMemoCache(E)}},ye.cache=function(E){return function(){return E.apply(null,arguments)}},ye.cacheSignal=function(){return null},ye.cloneElement=function(E,L,Z){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var D=ne({},E.props),X=E.key;if(L!=null)for(K in L.key!==void 0&&(X=""+L.key),L)!W.call(L,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&L.ref===void 0||(D[K]=L[K]);var K=arguments.length-2;if(K===1)D.children=Z;else if(1<K){for(var I=Array(K),Ue=0;Ue<K;Ue++)I[Ue]=arguments[Ue+2];D.children=I}return xe(E.type,X,D)},ye.createContext=function(E){return E={$$typeof:p,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:h,_context:E},E},ye.createElement=function(E,L,Z){var D,X={},K=null;if(L!=null)for(D in L.key!==void 0&&(K=""+L.key),L)W.call(L,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(X[D]=L[D]);var I=arguments.length-2;if(I===1)X.children=Z;else if(1<I){for(var Ue=Array(I),Ce=0;Ce<I;Ce++)Ue[Ce]=arguments[Ce+2];X.children=Ue}if(E&&E.defaultProps)for(D in I=E.defaultProps,I)X[D]===void 0&&(X[D]=I[D]);return xe(E,K,X)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(E){return{$$typeof:g,render:E}},ye.isValidElement=ve,ye.lazy=function(E){return{$$typeof:x,_payload:{_status:-1,_result:E},_init:ue}},ye.memo=function(E,L){return{$$typeof:y,type:E,compare:L===void 0?null:L}},ye.startTransition=function(E){var L=ee.T,Z={};ee.T=Z;try{var D=E(),X=ee.S;X!==null&&X(Z,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(Ne,Se)}catch(K){Se(K)}finally{L!==null&&Z.types!==null&&(L.types=Z.types),ee.T=L}},ye.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},ye.use=function(E){return ee.H.use(E)},ye.useActionState=function(E,L,Z){return ee.H.useActionState(E,L,Z)},ye.useCallback=function(E,L){return ee.H.useCallback(E,L)},ye.useContext=function(E){return ee.H.useContext(E)},ye.useDebugValue=function(){},ye.useDeferredValue=function(E,L){return ee.H.useDeferredValue(E,L)},ye.useEffect=function(E,L){return ee.H.useEffect(E,L)},ye.useEffectEvent=function(E){return ee.H.useEffectEvent(E)},ye.useId=function(){return ee.H.useId()},ye.useImperativeHandle=function(E,L,Z){return ee.H.useImperativeHandle(E,L,Z)},ye.useInsertionEffect=function(E,L){return ee.H.useInsertionEffect(E,L)},ye.useLayoutEffect=function(E,L){return ee.H.useLayoutEffect(E,L)},ye.useMemo=function(E,L){return ee.H.useMemo(E,L)},ye.useOptimistic=function(E,L){return ee.H.useOptimistic(E,L)},ye.useReducer=function(E,L,Z){return ee.H.useReducer(E,L,Z)},ye.useRef=function(E){return ee.H.useRef(E)},ye.useState=function(E){return ee.H.useState(E)},ye.useSyncExternalStore=function(E,L,Z){return ee.H.useSyncExternalStore(E,L,Z)},ye.useTransition=function(){return ee.H.useTransition()},ye.version="19.2.7",ye}var Ph;function Rf(){return Ph||(Ph=1,Ju.exports=Hg()),Ju.exports}var U=Rf();const Wi=Fp(U);var ef={exports:{}},Xi={},tf={exports:{}},nf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh;function Gg(){return Qh||(Qh=1,(function(o){function a(z,Q){var ue=z.length;z.push(Q);e:for(;0<ue;){var Se=ue-1>>>1,Ee=z[Se];if(0<u(Ee,Q))z[Se]=Q,z[ue]=Ee,ue=Se;else break e}}function c(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var Q=z[0],ue=z.pop();if(ue!==Q){z[0]=ue;e:for(var Se=0,Ee=z.length,E=Ee>>>1;Se<E;){var L=2*(Se+1)-1,Z=z[L],D=L+1,X=z[D];if(0>u(Z,ue))D<Ee&&0>u(X,Z)?(z[Se]=X,z[D]=ue,Se=D):(z[Se]=Z,z[L]=ue,Se=L);else if(D<Ee&&0>u(X,ue))z[Se]=X,z[D]=ue,Se=D;else break e}}return Q}function u(z,Q){var ue=z.sortIndex-Q.sortIndex;return ue!==0?ue:z.id-Q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;o.unstable_now=function(){return h.now()}}else{var p=Date,g=p.now();o.unstable_now=function(){return p.now()-g}}var v=[],y=[],x=1,N=null,j=3,F=!1,P=!1,ne=!1,G=!1,$=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,fe=typeof setImmediate<"u"?setImmediate:null;function se(z){for(var Q=c(y);Q!==null;){if(Q.callback===null)s(y);else if(Q.startTime<=z)s(y),Q.sortIndex=Q.expirationTime,a(v,Q);else break;Q=c(y)}}function de(z){if(ne=!1,se(z),!P)if(c(v)!==null)P=!0,Ne||(Ne=!0,ae());else{var Q=c(y);Q!==null&&Qe(de,Q.startTime-z)}}var Ne=!1,ee=-1,W=5,xe=-1;function be(){return G?!0:!(o.unstable_now()-xe<W)}function ve(){if(G=!1,Ne){var z=o.unstable_now();xe=z;var Q=!0;try{e:{P=!1,ne&&(ne=!1,le(ee),ee=-1),F=!0;var ue=j;try{t:{for(se(z),N=c(v);N!==null&&!(N.expirationTime>z&&be());){var Se=N.callback;if(typeof Se=="function"){N.callback=null,j=N.priorityLevel;var Ee=Se(N.expirationTime<=z);if(z=o.unstable_now(),typeof Ee=="function"){N.callback=Ee,se(z),Q=!0;break t}N===c(v)&&s(v),se(z)}else s(v);N=c(v)}if(N!==null)Q=!0;else{var E=c(y);E!==null&&Qe(de,E.startTime-z),Q=!1}}break e}finally{N=null,j=ue,F=!1}Q=void 0}}finally{Q?ae():Ne=!1}}}var ae;if(typeof fe=="function")ae=function(){fe(ve)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,Ae=Pe.port2;Pe.port1.onmessage=ve,ae=function(){Ae.postMessage(null)}}else ae=function(){$(ve,0)};function Qe(z,Q){ee=$(function(){z(o.unstable_now())},Q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return j},o.unstable_next=function(z){switch(j){case 1:case 2:case 3:var Q=3;break;default:Q=j}var ue=j;j=Q;try{return z()}finally{j=ue}},o.unstable_requestPaint=function(){G=!0},o.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ue=j;j=z;try{return Q()}finally{j=ue}},o.unstable_scheduleCallback=function(z,Q,ue){var Se=o.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?Se+ue:Se):ue=Se,z){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=ue+Ee,z={id:x++,callback:Q,priorityLevel:z,startTime:ue,expirationTime:Ee,sortIndex:-1},ue>Se?(z.sortIndex=ue,a(y,z),c(v)===null&&z===c(y)&&(ne?(le(ee),ee=-1):ne=!0,Qe(de,ue-Se))):(z.sortIndex=Ee,a(v,z),P||F||(P=!0,Ne||(Ne=!0,ae()))),z},o.unstable_shouldYield=be,o.unstable_wrapCallback=function(z){var Q=j;return function(){var ue=j;j=Q;try{return z.apply(this,arguments)}finally{j=ue}}}})(nf)),nf}var Zh;function Vg(){return Zh||(Zh=1,tf.exports=Gg()),tf.exports}var rf={exports:{}},Gt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh;function Yg(){if(Wh)return Gt;Wh=1;var o=Rf();function a(v){var y="https://react.dev/errors/"+v;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)y+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+v+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var s={d:{f:c,r:function(){throw Error(a(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},u=Symbol.for("react.portal");function h(v,y,x){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:N==null?null:""+N,children:v,containerInfo:y,implementation:x}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(v,y){if(v==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Gt.createPortal=function(v,y){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(a(299));return h(v,y,null,x)},Gt.flushSync=function(v){var y=p.T,x=s.p;try{if(p.T=null,s.p=2,v)return v()}finally{p.T=y,s.p=x,s.d.f()}},Gt.preconnect=function(v,y){typeof v=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(v,y))},Gt.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Gt.preinit=function(v,y){if(typeof v=="string"&&y&&typeof y.as=="string"){var x=y.as,N=g(x,y.crossOrigin),j=typeof y.integrity=="string"?y.integrity:void 0,F=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;x==="style"?s.d.S(v,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:N,integrity:j,fetchPriority:F}):x==="script"&&s.d.X(v,{crossOrigin:N,integrity:j,fetchPriority:F,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Gt.preinitModule=function(v,y){if(typeof v=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var x=g(y.as,y.crossOrigin);s.d.M(v,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(v)},Gt.preload=function(v,y){if(typeof v=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var x=y.as,N=g(x,y.crossOrigin);s.d.L(v,x,{crossOrigin:N,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Gt.preloadModule=function(v,y){if(typeof v=="string")if(y){var x=g(y.as,y.crossOrigin);s.d.m(v,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(v)},Gt.requestFormReset=function(v){s.d.r(v)},Gt.unstable_batchedUpdates=function(v,y){return v(y)},Gt.useFormState=function(v,y,x){return p.H.useFormState(v,y,x)},Gt.useFormStatus=function(){return p.H.useHostTransitionStatus()},Gt.version="19.2.7",Gt}var Jh;function qg(){if(Jh)return rf.exports;Jh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(a){console.error(a)}}return o(),rf.exports=Yg(),rf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ep;function $g(){if(ep)return Xi;ep=1;var o=Vg(),a=Rf(),c=qg();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(h(e)!==e)throw Error(s(188))}function y(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return v(l),e;if(i===r)return v(l),t;i=i.sibling}throw Error(s(188))}if(n.return!==r.return)n=l,r=i;else{for(var m=!1,_=l.child;_;){if(_===n){m=!0,n=l,r=i;break}if(_===r){m=!0,r=l,n=i;break}_=_.sibling}if(!m){for(_=i.child;_;){if(_===n){m=!0,n=i,r=l;break}if(_===r){m=!0,r=i,n=l;break}_=_.sibling}if(!m)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,j=Symbol.for("react.element"),F=Symbol.for("react.transitional.element"),P=Symbol.for("react.portal"),ne=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),le=Symbol.for("react.consumer"),fe=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),Ne=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),xe=Symbol.for("react.activity"),be=Symbol.for("react.memo_cache_sentinel"),ve=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=ve&&e[ve]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Symbol.for("react.client.reference");function Ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Pe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ne:return"Fragment";case $:return"Profiler";case G:return"StrictMode";case de:return"Suspense";case Ne:return"SuspenseList";case xe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case P:return"Portal";case fe:return e.displayName||"Context";case le:return(e._context.displayName||"Context")+".Consumer";case se:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return t=e.displayName||null,t!==null?t:Ae(e.type)||"Memo";case W:t=e._payload,e=e._init;try{return Ae(e(t))}catch{}}return null}var Qe=Array.isArray,z=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},Se=[],Ee=-1;function E(e){return{current:e}}function L(e){0>Ee||(e.current=Se[Ee],Se[Ee]=null,Ee--)}function Z(e,t){Ee++,Se[Ee]=e.current,e.current=t}var D=E(null),X=E(null),K=E(null),I=E(null);function Ue(e,t){switch(Z(K,t),Z(X,e),Z(D,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ph(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ph(t),e=_h(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(D),Z(D,e)}function Ce(){L(D),L(X),L(K)}function Vt(e){e.memoizedState!==null&&Z(I,e);var t=D.current,n=_h(t,e.type);t!==n&&(Z(X,e),Z(D,n))}function Xn(e){X.current===e&&(L(D),L(X)),I.current===e&&(L(I),Vi._currentValue=ue)}var ge,gt;function wt(e){if(ge===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ge=t&&t[1]||"",gt=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ge+e+gt}var De=!1;function Et(e,t){if(!e||De)return"";De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(B){var O=B}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(B){O=B}e.call(Y.prototype)}}else{try{throw Error()}catch(B){O=B}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(B){if(B&&O&&typeof B.stack=="string")return[B.stack,O.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=r.DetermineComponentFrameRoot(),m=i[0],_=i[1];if(m&&_){var w=m.split(`
`),M=_.split(`
`);for(l=r=0;r<w.length&&!w[r].includes("DetermineComponentFrameRoot");)r++;for(;l<M.length&&!M[l].includes("DetermineComponentFrameRoot");)l++;if(r===w.length||l===M.length)for(r=w.length-1,l=M.length-1;1<=r&&0<=l&&w[r]!==M[l];)l--;for(;1<=r&&0<=l;r--,l--)if(w[r]!==M[l]){if(r!==1||l!==1)do if(r--,l--,0>l||w[r]!==M[l]){var H=`
`+w[r].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=r&&0<=l);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?wt(n):""}function Bn(e,t){switch(e.tag){case 26:case 27:case 5:return wt(e.type);case 16:return wt("Lazy");case 13:return e.child!==t&&t!==null?wt("Suspense Fallback"):wt("Suspense");case 19:return wt("SuspenseList");case 0:case 15:return Et(e.type,!1);case 11:return Et(e.type.render,!1);case 1:return Et(e.type,!0);case 31:return wt("Activity");default:return""}}function zt(e){try{var t="",n=null;do t+=Bn(e,n),n=e,e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Mr=Object.prototype.hasOwnProperty,jr=o.unstable_scheduleCallback,gn=o.unstable_cancelCallback,Kl=o.unstable_shouldYield,Ar=o.unstable_requestPaint,bt=o.unstable_now,fl=o.unstable_getCurrentPriorityLevel,dl=o.unstable_ImmediatePriority,Xa=o.unstable_UserBlockingPriority,ml=o.unstable_NormalPriority,Kt=o.unstable_LowPriority,tn=o.unstable_IdlePriority,Kn=o.log,Fl=o.unstable_setDisableYieldValue,hl=null,yt=null;function nn(e){if(typeof Kn=="function"&&Fl(e),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(hl,e)}catch{}}var Nt=Math.clz32?Math.clz32:Cr,Dr=Math.log,Or=Math.LN2;function Cr(e){return e>>>=0,e===0?32:31-(Dr(e)/Or|0)|0}var Fn=256,Yt=262144,Ke=4194304;function Rt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ft(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var l=0,i=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var _=r&134217727;return _!==0?(r=_&~i,r!==0?l=Rt(r):(m&=_,m!==0?l=Rt(m):n||(n=_&~e,n!==0&&(l=Rt(n))))):(_=r&~i,_!==0?l=Rt(_):m!==0?l=Rt(m):n||(n=r&~e,n!==0&&(l=Rt(n)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:l}function Bt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Uo(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ka(){var e=Ke;return Ke<<=1,(Ke&62914560)===0&&(Ke=4194304),e}function Pn(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ir(e,t,n,r,l,i){var m=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var _=e.entanglements,w=e.expirationTimes,M=e.hiddenUpdates;for(n=m&~n;0<n;){var H=31-Nt(n),Y=1<<H;_[H]=0,w[H]=-1;var O=M[H];if(O!==null)for(M[H]=null,H=0;H<O.length;H++){var B=O[H];B!==null&&(B.lane&=-536870913)}n&=~Y}r!==0&&ls(e,r,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(m&~t))}function ls(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Nt(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Pl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}function as(e,t){var n=t&-t;return n=(n&42)!==0?1:zr(n),(n&(e.suspendedLanes|t))!==0?0:n}function zr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function bn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function dt(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Hh(e.type))}function Fa(e,t){var n=Q.p;try{return Q.p=e,t()}finally{Q.p=n}}var rn=Math.random().toString(36).slice(2),st="__reactFiber$"+rn,ot="__reactProps$"+rn,Tt="__reactContainer$"+rn,Ln="__reactEvents$"+rn,_l="__reactListeners$"+rn,Un="__reactHandles$"+rn,sr="__reactResources$"+rn,Hn="__reactMarker$"+rn;function Gn(e){delete e[st],delete e[ot],delete e[Ln],delete e[_l],delete e[Un]}function Qn(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Tt]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wh(e);e!==null;){if(n=e[st])return n;e=wh(e)}return t}e=n,n=e.parentNode}return null}function qt(e){if(e=e[st]||e[Tt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Vn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Ft(e){var t=e[sr];return t||(t=e[sr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ze(e){e[Hn]=!0}var or=new Set,Pa={};function ln(e,t){an(e,t),an(e+"Capture",t)}function an(e,t){for(Pa[e]=t,e=0;e<t.length;e++)or.add(t[e])}var he=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ql={},is={};function Ho(e){return Mr.call(is,e)?!0:Mr.call(Ql,e)?!1:he.test(e)?is[e]=!0:(Ql[e]=!0,!1)}function Zl(e,t,n){if(Ho(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Wl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function $t(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+r)}}function vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sn(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qa(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(m){n=""+m,i.call(this,m)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(m){n=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lt(e){if(!e._valueTracker){var t=sn(e)?"checked":"value";e._valueTracker=Qa(e,t,""+e[t])}}function ss(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=sn(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var os=/[\n"\\]/g;function Ut(e){return e.replace(os,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function q(e,t,n,r,l,i,m,_){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+vt(t)):e.value!==""+vt(t)&&(e.value=""+vt(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?Za(e,m,vt(t)):n!=null?Za(e,m,vt(n)):r!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.name=""+vt(_):e.removeAttribute("name")}function cs(e,t,n,r,l,i,m,_){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Lt(e);return}n=n!=null?""+vt(n):"",t=t!=null?""+vt(t):n,_||t===e.value||(e.value=t),e.defaultValue=t}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=_?e.checked:!!r,e.defaultChecked=!!r,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),Lt(e)}function Za(e,t,n){t==="number"&&Jl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function yn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Wa(e,t,n){if(t!=null&&(t=""+vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+vt(n):""}function gl(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(Qe(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n==null&&(n=""),t=n}n=vt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==""&&r!==null&&(e.value=r),Lt(e)}function et(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var us=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Br(e,t,n){var r=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,n):typeof n!="number"||n===0||us.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ea(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var l in t)r=t[l],t.hasOwnProperty(l)&&n[l]!==r&&Br(e,l,r)}else for(var i in t)t.hasOwnProperty(i)&&Br(e,i,t[i])}function Ja(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fs=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Lr(e){return fs.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function tt(){}var cr=null;function ei(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ur=null,vn=null;function ds(e){var t=qt(e);if(t&&(e=t.stateNode)){var n=e[ot]||null;e:switch(e=t.stateNode,t.type){case"input":if(q(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ut(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=r[ot]||null;if(!l)throw Error(s(90));q(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&ss(r)}break e;case"textarea":Wa(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&yn(e,!!n.multiple,t,!1)}}}var ta=!1;function bl(e,t,n){if(ta)return e(t,n);ta=!0;try{var r=e(t);return r}finally{if(ta=!1,(Ur!==null||vn!==null)&&(to(),Ur&&(t=Ur,e=vn,vn=Ur=null,ds(t),e)))for(t=0;t<e.length;t++)ds(e[t])}}function Zn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ot]||null;if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ti=!1;if(xn)try{var yl={};Object.defineProperty(yl,"passive",{get:function(){ti=!0}}),window.addEventListener("test",yl,yl),window.removeEventListener("test",yl,yl)}catch{ti=!1}var Wn=null,Sn=null,lt=null;function ni(){if(lt)return lt;var e,t=Sn,n=t.length,r,l="value"in Wn?Wn.value:Wn.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var m=n-e;for(r=1;r<=m&&t[n-r]===l[i-r];r++);return lt=l.slice(e,1<r?1-r:void 0)}function Jn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vl(){return!0}function ri(){return!1}function Mt(e){function t(n,r,l,i,m){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=m,this.currentTarget=null;for(var _ in e)e.hasOwnProperty(_)&&(n=e[_],this[_]=n?n(i):i[_]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?vl:ri,this.isPropagationStopped=ri,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),t}var ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},na=Mt(ur),xl=N({},ur,{view:0,detail:0}),ms=Mt(xl),ra,Sl,wl,El=N({},xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:la,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wl&&(wl&&e.type==="mousemove"?(ra=e.screenX-wl.screenX,Sl=e.screenY-wl.screenY):Sl=ra=0,wl=e),ra)},movementY:function(e){return"movementY"in e?e.movementY:Sl}}),li=Mt(El),hs=N({},El,{dataTransfer:0}),Go=Mt(hs),Vo=N({},xl,{relatedTarget:0}),ai=Mt(Vo),Yo=N({},ur,{animationName:0,elapsedTime:0,pseudoElement:0}),qo=Mt(Yo),$o=N({},ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Io=Mt($o),Xo=N({},ur,{data:0}),ps=Mt(Xo),Ko={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kl={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fo={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Po(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fo[e])?!!t[e]:!1}function la(){return Po}var Qo=N({},xl,{key:function(e){if(e.key){var t=Ko[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Jn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kl[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:la,charCode:function(e){return e.type==="keypress"?Jn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_s=Mt(Qo),Zo=N({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gs=Mt(Zo),bs=N({},xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:la}),Wo=Mt(bs),Jo=N({},ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),ec=Mt(Jo),tc=N({},El,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nc=Mt(tc),rc=N({},ur,{newState:0,oldState:0}),ii=Mt(rc),wn=[9,13,27,32],aa=xn&&"CompositionEvent"in window,Nl=null;xn&&"documentMode"in document&&(Nl=document.documentMode);var lc=xn&&"TextEvent"in window&&!Nl,ys=xn&&(!aa||Nl&&8<Nl&&11>=Nl),Hr=" ",Rl=!1;function si(e,t){switch(e){case"keyup":return wn.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ia(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fr=!1;function ac(e,t){switch(e){case"compositionend":return ia(t);case"keypress":return t.which!==32?null:(Rl=!0,Hr);case"textInput":return e=t.data,e===Hr&&Rl?null:e;default:return null}}function ic(e,t){if(fr)return e==="compositionend"||!aa&&si(e,t)?(e=ni(),lt=Sn=Wn=null,fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ys&&t.locale!=="ko"?null:t.data;default:return null}}var d={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function b(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!d[e.type]:t==="textarea"}function S(e,t,n,r){Ur?vn?vn.push(r):vn=[r]:Ur=r,t=oo(t,"onChange"),0<t.length&&(n=new na("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var C=null,A=null;function re(e){ch(e,0)}function _e(e){var t=Vn(e);if(ss(t))return e}function nt(e,t){if(e==="change")return t}var qe=!1;if(xn){var Ht;if(xn){var er="oninput"in document;if(!er){var Ge=document.createElement("div");Ge.setAttribute("oninput","return;"),er=typeof Ge.oninput=="function"}Ht=er}else Ht=!1;qe=Ht&&(!document.documentMode||9<document.documentMode)}function tr(){C&&(C.detachEvent("onpropertychange",sa),A=C=null)}function sa(e){if(e.propertyName==="value"&&_e(A)){var t=[];S(t,A,e,ei(e)),bl(re,t)}}function Tl(e,t,n){e==="focusin"?(tr(),C=t,A=n,C.attachEvent("onpropertychange",sa)):e==="focusout"&&tr()}function Gr(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _e(A)}function oi(e,t){if(e==="click")return _e(t)}function ci(e,t){if(e==="input"||e==="change")return _e(t)}function ui(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:ui;function Yn(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Mr.call(t,l)||!jt(e[l],t[l]))return!1}return!0}function vs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fi(e,t){var n=vs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vs(n)}}function zf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Jl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jl(e.document)}return t}function sc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var h_=xn&&"documentMode"in document&&11>=document.documentMode,oa=null,oc=null,di=null,cc=!1;function Lf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cc||oa==null||oa!==Jl(r)||(r=oa,"selectionStart"in r&&sc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),di&&Yn(di,r)||(di=r,r=oo(oc,"onSelect"),0<r.length&&(t=new na("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=oa)))}function Ml(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ca={animationend:Ml("Animation","AnimationEnd"),animationiteration:Ml("Animation","AnimationIteration"),animationstart:Ml("Animation","AnimationStart"),transitionrun:Ml("Transition","TransitionRun"),transitionstart:Ml("Transition","TransitionStart"),transitioncancel:Ml("Transition","TransitionCancel"),transitionend:Ml("Transition","TransitionEnd")},uc={},Uf={};xn&&(Uf=document.createElement("div").style,"AnimationEvent"in window||(delete ca.animationend.animation,delete ca.animationiteration.animation,delete ca.animationstart.animation),"TransitionEvent"in window||delete ca.transitionend.transition);function jl(e){if(uc[e])return uc[e];if(!ca[e])return e;var t=ca[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Uf)return uc[e]=t[n];return e}var Hf=jl("animationend"),Gf=jl("animationiteration"),Vf=jl("animationstart"),p_=jl("transitionrun"),__=jl("transitionstart"),g_=jl("transitioncancel"),Yf=jl("transitionend"),qf=new Map,fc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fc.push("scrollEnd");function qn(e,t){qf.set(e,t),ln(t,[e])}var xs=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},En=[],ua=0,dc=0;function Ss(){for(var e=ua,t=dc=ua=0;t<e;){var n=En[t];En[t++]=null;var r=En[t];En[t++]=null;var l=En[t];En[t++]=null;var i=En[t];if(En[t++]=null,r!==null&&l!==null){var m=r.pending;m===null?l.next=l:(l.next=m.next,m.next=l),r.pending=l}i!==0&&$f(n,l,i)}}function ws(e,t,n,r){En[ua++]=e,En[ua++]=t,En[ua++]=n,En[ua++]=r,dc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function mc(e,t,n,r){return ws(e,t,n,r),Es(e)}function Al(e,t){return ws(e,null,null,t),Es(e)}function $f(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var l=!1,i=e.return;i!==null;)i.childLanes|=n,r=i.alternate,r!==null&&(r.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-Nt(n),e=i.hiddenUpdates,r=e[l],r===null?e[l]=[t]:r.push(t),t.lane=n|536870912),i):null}function Es(e){if(50<Ci)throw Ci=0,Su=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fa={};function b_(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(e,t,n,r){return new b_(e,t,n,r)}function hc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dr(e,t){var n=e.alternate;return n===null?(n=on(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function If(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ks(e,t,n,r,l,i){var m=0;if(r=e,typeof e=="function")hc(e)&&(m=1);else if(typeof e=="string")m=wg(e,n,D.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case xe:return e=on(31,n,t,l),e.elementType=xe,e.lanes=i,e;case ne:return Dl(n.children,l,i,t);case G:m=8,l|=24;break;case $:return e=on(12,n,t,l|2),e.elementType=$,e.lanes=i,e;case de:return e=on(13,n,t,l),e.elementType=de,e.lanes=i,e;case Ne:return e=on(19,n,t,l),e.elementType=Ne,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fe:m=10;break e;case le:m=9;break e;case se:m=11;break e;case ee:m=14;break e;case W:m=16,r=null;break e}m=29,n=Error(s(130,e===null?"null":typeof e,"")),r=null}return t=on(m,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Dl(e,t,n,r){return e=on(7,e,r,t),e.lanes=n,e}function pc(e,t,n){return e=on(6,e,null,t),e.lanes=n,e}function Xf(e){var t=on(18,null,null,0);return t.stateNode=e,t}function _c(e,t,n){return t=on(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Kf=new WeakMap;function kn(e,t){if(typeof e=="object"&&e!==null){var n=Kf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:zt(t)},Kf.set(e,t),t)}return{value:e,source:t,stack:zt(t)}}var da=[],ma=0,Ns=null,mi=0,Nn=[],Rn=0,Vr=null,nr=1,rr="";function mr(e,t){da[ma++]=mi,da[ma++]=Ns,Ns=e,mi=t}function Ff(e,t,n){Nn[Rn++]=nr,Nn[Rn++]=rr,Nn[Rn++]=Vr,Vr=e;var r=nr;e=rr;var l=32-Nt(r)-1;r&=~(1<<l),n+=1;var i=32-Nt(t)+l;if(30<i){var m=l-l%5;i=(r&(1<<m)-1).toString(32),r>>=m,l-=m,nr=1<<32-Nt(t)+l|n<<l|r,rr=i+e}else nr=1<<i|n<<l|r,rr=e}function gc(e){e.return!==null&&(mr(e,1),Ff(e,1,0))}function bc(e){for(;e===Ns;)Ns=da[--ma],da[ma]=null,mi=da[--ma],da[ma]=null;for(;e===Vr;)Vr=Nn[--Rn],Nn[Rn]=null,rr=Nn[--Rn],Nn[Rn]=null,nr=Nn[--Rn],Nn[Rn]=null}function Pf(e,t){Nn[Rn++]=nr,Nn[Rn++]=rr,Nn[Rn++]=Vr,nr=t.id,rr=t.overflow,Vr=e}var At=null,We=null,Oe=!1,Yr=null,Tn=!1,yc=Error(s(519));function qr(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw hi(kn(t,e)),yc}function Qf(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[st]=e,t[ot]=r,n){case"dialog":Te("cancel",t),Te("close",t);break;case"iframe":case"object":case"embed":Te("load",t);break;case"video":case"audio":for(n=0;n<Bi.length;n++)Te(Bi[n],t);break;case"source":Te("error",t);break;case"img":case"image":case"link":Te("error",t),Te("load",t);break;case"details":Te("toggle",t);break;case"input":Te("invalid",t),cs(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Te("invalid",t);break;case"textarea":Te("invalid",t),gl(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||r.suppressHydrationWarning===!0||mh(t.textContent,n)?(r.popover!=null&&(Te("beforetoggle",t),Te("toggle",t)),r.onScroll!=null&&Te("scroll",t),r.onScrollEnd!=null&&Te("scrollend",t),r.onClick!=null&&(t.onclick=tt),t=!0):t=!1,t||qr(e,!0)}function Zf(e){for(At=e.return;At;)switch(At.tag){case 5:case 31:case 13:Tn=!1;return;case 27:case 3:Tn=!0;return;default:At=At.return}}function ha(e){if(e!==At)return!1;if(!Oe)return Zf(e),Oe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Lu(e.type,e.memoizedProps)),n=!n),n&&We&&qr(e),Zf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));We=Sh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));We=Sh(e)}else t===27?(t=We,rl(e.type)?(e=Yu,Yu=null,We=e):We=t):We=At?jn(e.stateNode.nextSibling):null;return!0}function Ol(){We=At=null,Oe=!1}function vc(){var e=Yr;return e!==null&&(Jt===null?Jt=e:Jt.push.apply(Jt,e),Yr=null),e}function hi(e){Yr===null?Yr=[e]:Yr.push(e)}var xc=E(null),Cl=null,hr=null;function $r(e,t,n){Z(xc,t._currentValue),t._currentValue=n}function pr(e){e._currentValue=xc.current,L(xc)}function Sc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function wc(e,t,n,r){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var m=l.child;i=i.firstContext;e:for(;i!==null;){var _=i;i=l;for(var w=0;w<t.length;w++)if(_.context===t[w]){i.lanes|=n,_=i.alternate,_!==null&&(_.lanes|=n),Sc(i.return,n,e),r||(m=null);break e}i=_.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(s(341));m.lanes|=n,i=m.alternate,i!==null&&(i.lanes|=n),Sc(m,n,e),m=null}else m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===e){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function pa(e,t,n,r){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var _=l.type;jt(l.pendingProps.value,m.value)||(e!==null?e.push(_):e=[_])}}else if(l===I.current){if(m=l.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Vi):e=[Vi])}l=l.return}e!==null&&wc(t,e,n,r),t.flags|=262144}function Rs(e){for(e=e.firstContext;e!==null;){if(!jt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function zl(e){Cl=e,hr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dt(e){return Wf(Cl,e)}function Ts(e,t){return Cl===null&&zl(e),Wf(e,t)}function Wf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},hr===null){if(e===null)throw Error(s(308));hr=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else hr=hr.next=t;return n}var y_=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},v_=o.unstable_scheduleCallback,x_=o.unstable_NormalPriority,mt={$$typeof:fe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ec(){return{controller:new y_,data:new Map,refCount:0}}function pi(e){e.refCount--,e.refCount===0&&v_(x_,function(){e.controller.abort()})}var _i=null,kc=0,_a=0,ga=null;function S_(e,t){if(_i===null){var n=_i=[];kc=0,_a=Tu(),ga={status:"pending",value:void 0,then:function(r){n.push(r)}}}return kc++,t.then(Jf,Jf),t}function Jf(){if(--kc===0&&_i!==null){ga!==null&&(ga.status="fulfilled");var e=_i;_i=null,_a=0,ga=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function w_(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(r.status="rejected",r.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),r}var ed=z.S;z.S=function(e,t){Lm=bt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&S_(e,t),ed!==null&&ed(e,t)};var Bl=E(null);function Nc(){var e=Bl.current;return e!==null?e:Fe.pooledCache}function Ms(e,t){t===null?Z(Bl,Bl.current):Z(Bl,t.pool)}function td(){var e=Nc();return e===null?null:{parent:mt._currentValue,pool:e}}var ba=Error(s(460)),Rc=Error(s(474)),js=Error(s(542)),As={then:function(){}};function nd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function rd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(tt,tt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ad(e),e;default:if(typeof t.status=="string")t.then(tt,tt);else{if(e=Fe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=r}},function(r){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ad(e),e}throw Ul=t,ba}}function Ll(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ul=n,ba):n}}var Ul=null;function ld(){if(Ul===null)throw Error(s(459));var e=Ul;return Ul=null,e}function ad(e){if(e===ba||e===js)throw Error(s(483))}var ya=null,gi=0;function Ds(e){var t=gi;return gi+=1,ya===null&&(ya=[]),rd(ya,e,t)}function bi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Os(e,t){throw t.$$typeof===j?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function id(e){function t(R,k){if(e){var T=R.deletions;T===null?(R.deletions=[k],R.flags|=16):T.push(k)}}function n(R,k){if(!e)return null;for(;k!==null;)t(R,k),k=k.sibling;return null}function r(R){for(var k=new Map;R!==null;)R.key!==null?k.set(R.key,R):k.set(R.index,R),R=R.sibling;return k}function l(R,k){return R=dr(R,k),R.index=0,R.sibling=null,R}function i(R,k,T){return R.index=T,e?(T=R.alternate,T!==null?(T=T.index,T<k?(R.flags|=67108866,k):T):(R.flags|=67108866,k)):(R.flags|=1048576,k)}function m(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function _(R,k,T,V){return k===null||k.tag!==6?(k=pc(T,R.mode,V),k.return=R,k):(k=l(k,T),k.return=R,k)}function w(R,k,T,V){var me=T.type;return me===ne?H(R,k,T.props.children,V,T.key):k!==null&&(k.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===W&&Ll(me)===k.type)?(k=l(k,T.props),bi(k,T),k.return=R,k):(k=ks(T.type,T.key,T.props,null,R.mode,V),bi(k,T),k.return=R,k)}function M(R,k,T,V){return k===null||k.tag!==4||k.stateNode.containerInfo!==T.containerInfo||k.stateNode.implementation!==T.implementation?(k=_c(T,R.mode,V),k.return=R,k):(k=l(k,T.children||[]),k.return=R,k)}function H(R,k,T,V,me){return k===null||k.tag!==7?(k=Dl(T,R.mode,V,me),k.return=R,k):(k=l(k,T),k.return=R,k)}function Y(R,k,T){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=pc(""+k,R.mode,T),k.return=R,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case F:return T=ks(k.type,k.key,k.props,null,R.mode,T),bi(T,k),T.return=R,T;case P:return k=_c(k,R.mode,T),k.return=R,k;case W:return k=Ll(k),Y(R,k,T)}if(Qe(k)||ae(k))return k=Dl(k,R.mode,T,null),k.return=R,k;if(typeof k.then=="function")return Y(R,Ds(k),T);if(k.$$typeof===fe)return Y(R,Ts(R,k),T);Os(R,k)}return null}function O(R,k,T,V){var me=k!==null?k.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return me!==null?null:_(R,k,""+T,V);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case F:return T.key===me?w(R,k,T,V):null;case P:return T.key===me?M(R,k,T,V):null;case W:return T=Ll(T),O(R,k,T,V)}if(Qe(T)||ae(T))return me!==null?null:H(R,k,T,V,null);if(typeof T.then=="function")return O(R,k,Ds(T),V);if(T.$$typeof===fe)return O(R,k,Ts(R,T),V);Os(R,T)}return null}function B(R,k,T,V,me){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return R=R.get(T)||null,_(k,R,""+V,me);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case F:return R=R.get(V.key===null?T:V.key)||null,w(k,R,V,me);case P:return R=R.get(V.key===null?T:V.key)||null,M(k,R,V,me);case W:return V=Ll(V),B(R,k,T,V,me)}if(Qe(V)||ae(V))return R=R.get(T)||null,H(k,R,V,me,null);if(typeof V.then=="function")return B(R,k,T,Ds(V),me);if(V.$$typeof===fe)return B(R,k,T,Ts(k,V),me);Os(k,V)}return null}function ie(R,k,T,V){for(var me=null,Be=null,oe=k,ke=k=0,je=null;oe!==null&&ke<T.length;ke++){oe.index>ke?(je=oe,oe=null):je=oe.sibling;var Le=O(R,oe,T[ke],V);if(Le===null){oe===null&&(oe=je);break}e&&oe&&Le.alternate===null&&t(R,oe),k=i(Le,k,ke),Be===null?me=Le:Be.sibling=Le,Be=Le,oe=je}if(ke===T.length)return n(R,oe),Oe&&mr(R,ke),me;if(oe===null){for(;ke<T.length;ke++)oe=Y(R,T[ke],V),oe!==null&&(k=i(oe,k,ke),Be===null?me=oe:Be.sibling=oe,Be=oe);return Oe&&mr(R,ke),me}for(oe=r(oe);ke<T.length;ke++)je=B(oe,R,ke,T[ke],V),je!==null&&(e&&je.alternate!==null&&oe.delete(je.key===null?ke:je.key),k=i(je,k,ke),Be===null?me=je:Be.sibling=je,Be=je);return e&&oe.forEach(function(ol){return t(R,ol)}),Oe&&mr(R,ke),me}function pe(R,k,T,V){if(T==null)throw Error(s(151));for(var me=null,Be=null,oe=k,ke=k=0,je=null,Le=T.next();oe!==null&&!Le.done;ke++,Le=T.next()){oe.index>ke?(je=oe,oe=null):je=oe.sibling;var ol=O(R,oe,Le.value,V);if(ol===null){oe===null&&(oe=je);break}e&&oe&&ol.alternate===null&&t(R,oe),k=i(ol,k,ke),Be===null?me=ol:Be.sibling=ol,Be=ol,oe=je}if(Le.done)return n(R,oe),Oe&&mr(R,ke),me;if(oe===null){for(;!Le.done;ke++,Le=T.next())Le=Y(R,Le.value,V),Le!==null&&(k=i(Le,k,ke),Be===null?me=Le:Be.sibling=Le,Be=Le);return Oe&&mr(R,ke),me}for(oe=r(oe);!Le.done;ke++,Le=T.next())Le=B(oe,R,ke,Le.value,V),Le!==null&&(e&&Le.alternate!==null&&oe.delete(Le.key===null?ke:Le.key),k=i(Le,k,ke),Be===null?me=Le:Be.sibling=Le,Be=Le);return e&&oe.forEach(function(Cg){return t(R,Cg)}),Oe&&mr(R,ke),me}function Xe(R,k,T,V){if(typeof T=="object"&&T!==null&&T.type===ne&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case F:e:{for(var me=T.key;k!==null;){if(k.key===me){if(me=T.type,me===ne){if(k.tag===7){n(R,k.sibling),V=l(k,T.props.children),V.return=R,R=V;break e}}else if(k.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===W&&Ll(me)===k.type){n(R,k.sibling),V=l(k,T.props),bi(V,T),V.return=R,R=V;break e}n(R,k);break}else t(R,k);k=k.sibling}T.type===ne?(V=Dl(T.props.children,R.mode,V,T.key),V.return=R,R=V):(V=ks(T.type,T.key,T.props,null,R.mode,V),bi(V,T),V.return=R,R=V)}return m(R);case P:e:{for(me=T.key;k!==null;){if(k.key===me)if(k.tag===4&&k.stateNode.containerInfo===T.containerInfo&&k.stateNode.implementation===T.implementation){n(R,k.sibling),V=l(k,T.children||[]),V.return=R,R=V;break e}else{n(R,k);break}else t(R,k);k=k.sibling}V=_c(T,R.mode,V),V.return=R,R=V}return m(R);case W:return T=Ll(T),Xe(R,k,T,V)}if(Qe(T))return ie(R,k,T,V);if(ae(T)){if(me=ae(T),typeof me!="function")throw Error(s(150));return T=me.call(T),pe(R,k,T,V)}if(typeof T.then=="function")return Xe(R,k,Ds(T),V);if(T.$$typeof===fe)return Xe(R,k,Ts(R,T),V);Os(R,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,k!==null&&k.tag===6?(n(R,k.sibling),V=l(k,T),V.return=R,R=V):(n(R,k),V=pc(T,R.mode,V),V.return=R,R=V),m(R)):n(R,k)}return function(R,k,T,V){try{gi=0;var me=Xe(R,k,T,V);return ya=null,me}catch(oe){if(oe===ba||oe===js)throw oe;var Be=on(29,oe,null,R.mode);return Be.lanes=V,Be.return=R,Be}finally{}}}var Hl=id(!0),sd=id(!1),Ir=!1;function Tc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Kr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(He&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,t=Es(e),$f(e,null,n),t}return ws(e,r,t,n),Es(e)}function yi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pl(e,n)}}function jc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=m:i=i.next=m,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ac=!1;function vi(){if(Ac){var e=ga;if(e!==null)throw e}}function xi(e,t,n,r){Ac=!1;var l=e.updateQueue;Ir=!1;var i=l.firstBaseUpdate,m=l.lastBaseUpdate,_=l.shared.pending;if(_!==null){l.shared.pending=null;var w=_,M=w.next;w.next=null,m===null?i=M:m.next=M,m=w;var H=e.alternate;H!==null&&(H=H.updateQueue,_=H.lastBaseUpdate,_!==m&&(_===null?H.firstBaseUpdate=M:_.next=M,H.lastBaseUpdate=w))}if(i!==null){var Y=l.baseState;m=0,H=M=w=null,_=i;do{var O=_.lane&-536870913,B=O!==_.lane;if(B?(Me&O)===O:(r&O)===O){O!==0&&O===_a&&(Ac=!0),H!==null&&(H=H.next={lane:0,tag:_.tag,payload:_.payload,callback:null,next:null});e:{var ie=e,pe=_;O=t;var Xe=n;switch(pe.tag){case 1:if(ie=pe.payload,typeof ie=="function"){Y=ie.call(Xe,Y,O);break e}Y=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=pe.payload,O=typeof ie=="function"?ie.call(Xe,Y,O):ie,O==null)break e;Y=N({},Y,O);break e;case 2:Ir=!0}}O=_.callback,O!==null&&(e.flags|=64,B&&(e.flags|=8192),B=l.callbacks,B===null?l.callbacks=[O]:B.push(O))}else B={lane:O,tag:_.tag,payload:_.payload,callback:_.callback,next:null},H===null?(M=H=B,w=Y):H=H.next=B,m|=O;if(_=_.next,_===null){if(_=l.shared.pending,_===null)break;B=_,_=B.next,B.next=null,l.lastBaseUpdate=B,l.shared.pending=null}}while(!0);H===null&&(w=Y),l.baseState=w,l.firstBaseUpdate=M,l.lastBaseUpdate=H,i===null&&(l.shared.lanes=0),Wr|=m,e.lanes=m,e.memoizedState=Y}}function od(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function cd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)od(n[e],t)}var va=E(null),Cs=E(0);function ud(e,t){e=Er,Z(Cs,e),Z(va,t),Er=e|t.baseLanes}function Dc(){Z(Cs,Er),Z(va,va.current)}function Oc(){Er=Cs.current,L(va),L(Cs)}var cn=E(null),Mn=null;function Fr(e){var t=e.alternate;Z(ct,ct.current&1),Z(cn,e),Mn===null&&(t===null||va.current!==null||t.memoizedState!==null)&&(Mn=e)}function Cc(e){Z(ct,ct.current),Z(cn,e),Mn===null&&(Mn=e)}function fd(e){e.tag===22?(Z(ct,ct.current),Z(cn,e),Mn===null&&(Mn=e)):Pr()}function Pr(){Z(ct,ct.current),Z(cn,cn.current)}function un(e){L(cn),Mn===e&&(Mn=null),L(ct)}var ct=E(0);function zs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Gu(n)||Vu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _r=0,we=null,$e=null,ht=null,Bs=!1,xa=!1,Gl=!1,Ls=0,Si=0,Sa=null,E_=0;function at(){throw Error(s(321))}function zc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jt(e[n],t[n]))return!1;return!0}function Bc(e,t,n,r,l,i){return _r=i,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=e===null||e.memoizedState===null?Fd:Zc,Gl=!1,i=n(r,l),Gl=!1,xa&&(i=md(t,n,r,l)),dd(e),i}function dd(e){z.H=ki;var t=$e!==null&&$e.next!==null;if(_r=0,ht=$e=we=null,Bs=!1,Si=0,Sa=null,t)throw Error(s(300));e===null||pt||(e=e.dependencies,e!==null&&Rs(e)&&(pt=!0))}function md(e,t,n,r){we=e;var l=0;do{if(xa&&(Sa=null),Si=0,xa=!1,25<=l)throw Error(s(301));if(l+=1,ht=$e=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}z.H=Pd,i=t(n,r)}while(xa);return i}function k_(){var e=z.H,t=e.useState()[0];return t=typeof t.then=="function"?wi(t):t,e=e.useState()[0],($e!==null?$e.memoizedState:null)!==e&&(we.flags|=1024),t}function Lc(){var e=Ls!==0;return Ls=0,e}function Uc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Hc(e){if(Bs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Bs=!1}_r=0,ht=$e=we=null,xa=!1,Si=Ls=0,Sa=null}function It(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?we.memoizedState=ht=e:ht=ht.next=e,ht}function ut(){if($e===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=ht===null?we.memoizedState:ht.next;if(t!==null)ht=t,$e=e;else{if(e===null)throw we.alternate===null?Error(s(467)):Error(s(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},ht===null?we.memoizedState=ht=e:ht=ht.next=e}return ht}function Us(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wi(e){var t=Si;return Si+=1,Sa===null&&(Sa=[]),e=rd(Sa,e,t),t=we,(ht===null?t.memoizedState:ht.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?Fd:Zc),e}function Hs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return wi(e);if(e.$$typeof===fe)return Dt(e)}throw Error(s(438,String(e)))}function Gc(e){var t=null,n=we.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=we.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Us(),we.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=be;return t.index++,n}function gr(e,t){return typeof t=="function"?t(e):t}function Gs(e){var t=ut();return Vc(t,$e,e)}function Vc(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var l=e.baseQueue,i=r.pending;if(i!==null){if(l!==null){var m=l.next;l.next=i.next,i.next=m}t.baseQueue=l=i,r.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var _=m=null,w=null,M=t,H=!1;do{var Y=M.lane&-536870913;if(Y!==M.lane?(Me&Y)===Y:(_r&Y)===Y){var O=M.revertLane;if(O===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),Y===_a&&(H=!0);else if((_r&O)===O){M=M.next,O===_a&&(H=!0);continue}else Y={lane:0,revertLane:M.revertLane,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},w===null?(_=w=Y,m=i):w=w.next=Y,we.lanes|=O,Wr|=O;Y=M.action,Gl&&n(i,Y),i=M.hasEagerState?M.eagerState:n(i,Y)}else O={lane:Y,revertLane:M.revertLane,gesture:M.gesture,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},w===null?(_=w=O,m=i):w=w.next=O,we.lanes|=Y,Wr|=Y;M=M.next}while(M!==null&&M!==t);if(w===null?m=i:w.next=_,!jt(i,e.memoizedState)&&(pt=!0,H&&(n=ga,n!==null)))throw n;e.memoizedState=i,e.baseState=m,e.baseQueue=w,r.lastRenderedState=i}return l===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Yc(e){var t=ut(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var m=l=l.next;do i=e(i,m.action),m=m.next;while(m!==l);jt(i,t.memoizedState)||(pt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function hd(e,t,n){var r=we,l=ut(),i=Oe;if(i){if(n===void 0)throw Error(s(407));n=n()}else n=t();var m=!jt(($e||l).memoizedState,n);if(m&&(l.memoizedState=n,pt=!0),l=l.queue,Ic(gd.bind(null,r,l,e),[e]),l.getSnapshot!==t||m||ht!==null&&ht.memoizedState.tag&1){if(r.flags|=2048,wa(9,{destroy:void 0},_d.bind(null,r,l,n,t),null),Fe===null)throw Error(s(349));i||(_r&127)!==0||pd(r,t,n)}return n}function pd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=we.updateQueue,t===null?(t=Us(),we.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _d(e,t,n,r){t.value=n,t.getSnapshot=r,bd(t)&&yd(e)}function gd(e,t,n){return n(function(){bd(t)&&yd(e)})}function bd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jt(e,n)}catch{return!0}}function yd(e){var t=Al(e,2);t!==null&&en(t,e,2)}function qc(e){var t=It();if(typeof e=="function"){var n=e;if(e=n(),Gl){nn(!0);try{n()}finally{nn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gr,lastRenderedState:e},t}function vd(e,t,n,r){return e.baseState=n,Vc(e,$e,typeof r=="function"?r:gr)}function N_(e,t,n,r,l){if(qs(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){i.listeners.push(m)}};z.T!==null?n(!0):i.isTransition=!1,r(i),n=t.pending,n===null?(i.next=t.pending=i,xd(t,i)):(i.next=n.next,t.pending=n.next=i)}}function xd(e,t){var n=t.action,r=t.payload,l=e.state;if(t.isTransition){var i=z.T,m={};z.T=m;try{var _=n(l,r),w=z.S;w!==null&&w(m,_),Sd(e,t,_)}catch(M){$c(e,t,M)}finally{i!==null&&m.types!==null&&(i.types=m.types),z.T=i}}else try{i=n(l,r),Sd(e,t,i)}catch(M){$c(e,t,M)}}function Sd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){wd(e,t,r)},function(r){return $c(e,t,r)}):wd(e,t,n)}function wd(e,t,n){t.status="fulfilled",t.value=n,Ed(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,xd(e,n)))}function $c(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=n,Ed(t),t=t.next;while(t!==r)}e.action=null}function Ed(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function kd(e,t){return t}function Nd(e,t){if(Oe){var n=Fe.formState;if(n!==null){e:{var r=we;if(Oe){if(We){t:{for(var l=We,i=Tn;l.nodeType!==8;){if(!i){l=null;break t}if(l=jn(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){We=jn(l.nextSibling),r=l.data==="F!";break e}}qr(r)}r=!1}r&&(t=n[0])}}return n=It(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kd,lastRenderedState:t},n.queue=r,n=Id.bind(null,we,r),r.dispatch=n,r=qc(!1),i=Qc.bind(null,we,!1,r.queue),r=It(),l={state:t,dispatch:null,action:e,pending:null},r.queue=l,n=N_.bind(null,we,l,i,n),l.dispatch=n,r.memoizedState=e,[t,n,!1]}function Rd(e){var t=ut();return Td(t,$e,e)}function Td(e,t,n){if(t=Vc(e,t,kd)[0],e=Gs(gr)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=wi(t)}catch(m){throw m===ba?js:m}else r=t;t=ut();var l=t.queue,i=l.dispatch;return n!==t.memoizedState&&(we.flags|=2048,wa(9,{destroy:void 0},R_.bind(null,l,n),null)),[r,i,e]}function R_(e,t){e.action=t}function Md(e){var t=ut(),n=$e;if(n!==null)return Td(t,n,e);ut(),t=t.memoizedState,n=ut();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function wa(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=we.updateQueue,t===null&&(t=Us(),we.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function jd(){return ut().memoizedState}function Vs(e,t,n,r){var l=It();we.flags|=e,l.memoizedState=wa(1|t,{destroy:void 0},n,r===void 0?null:r)}function Ys(e,t,n,r){var l=ut();r=r===void 0?null:r;var i=l.memoizedState.inst;$e!==null&&r!==null&&zc(r,$e.memoizedState.deps)?l.memoizedState=wa(t,i,n,r):(we.flags|=e,l.memoizedState=wa(1|t,i,n,r))}function Ad(e,t){Vs(8390656,8,e,t)}function Ic(e,t){Ys(2048,8,e,t)}function T_(e){we.flags|=4;var t=we.updateQueue;if(t===null)t=Us(),we.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Dd(e){var t=ut().memoizedState;return T_({ref:t,nextImpl:e}),function(){if((He&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Od(e,t){return Ys(4,2,e,t)}function Cd(e,t){return Ys(4,4,e,t)}function zd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bd(e,t,n){n=n!=null?n.concat([e]):null,Ys(4,4,zd.bind(null,t,e),n)}function Xc(){}function Ld(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&zc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ud(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&zc(t,r[1]))return r[0];if(r=e(),Gl){nn(!0);try{e()}finally{nn(!1)}}return n.memoizedState=[r,t],r}function Kc(e,t,n){return n===void 0||(_r&1073741824)!==0&&(Me&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Hm(),we.lanes|=e,Wr|=e,n)}function Hd(e,t,n,r){return jt(n,t)?n:va.current!==null?(e=Kc(e,n,r),jt(e,t)||(pt=!0),e):(_r&42)===0||(_r&1073741824)!==0&&(Me&261930)===0?(pt=!0,e.memoizedState=n):(e=Hm(),we.lanes|=e,Wr|=e,t)}function Gd(e,t,n,r,l){var i=Q.p;Q.p=i!==0&&8>i?i:8;var m=z.T,_={};z.T=_,Qc(e,!1,t,n);try{var w=l(),M=z.S;if(M!==null&&M(_,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var H=w_(w,r);Ei(e,t,H,mn(e))}else Ei(e,t,r,mn(e))}catch(Y){Ei(e,t,{then:function(){},status:"rejected",reason:Y},mn())}finally{Q.p=i,m!==null&&_.types!==null&&(m.types=_.types),z.T=m}}function M_(){}function Fc(e,t,n,r){if(e.tag!==5)throw Error(s(476));var l=Vd(e).queue;Gd(e,l,t,ue,n===null?M_:function(){return Yd(e),n(r)})}function Vd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gr,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gr,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Yd(e){var t=Vd(e);t.next===null&&(t=e.alternate.memoizedState),Ei(e,t.next.queue,{},mn())}function Pc(){return Dt(Vi)}function qd(){return ut().memoizedState}function $d(){return ut().memoizedState}function j_(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=mn();e=Xr(n);var r=Kr(t,e,n);r!==null&&(en(r,t,n),yi(r,t,n)),t={cache:Ec()},e.payload=t;return}t=t.return}}function A_(e,t,n){var r=mn();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},qs(e)?Xd(t,n):(n=mc(e,t,n,r),n!==null&&(en(n,e,r),Kd(n,t,r)))}function Id(e,t,n){var r=mn();Ei(e,t,n,r)}function Ei(e,t,n,r){var l={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(qs(e))Xd(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var m=t.lastRenderedState,_=i(m,n);if(l.hasEagerState=!0,l.eagerState=_,jt(_,m))return ws(e,t,l,0),Fe===null&&Ss(),!1}catch{}finally{}if(n=mc(e,t,l,r),n!==null)return en(n,e,r),Kd(n,t,r),!0}return!1}function Qc(e,t,n,r){if(r={lane:2,revertLane:Tu(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},qs(e)){if(t)throw Error(s(479))}else t=mc(e,n,r,2),t!==null&&en(t,e,2)}function qs(e){var t=e.alternate;return e===we||t!==null&&t===we}function Xd(e,t){xa=Bs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Kd(e,t,n){if((n&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pl(e,n)}}var ki={readContext:Dt,use:Hs,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useLayoutEffect:at,useInsertionEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useSyncExternalStore:at,useId:at,useHostTransitionStatus:at,useFormState:at,useActionState:at,useOptimistic:at,useMemoCache:at,useCacheRefresh:at};ki.useEffectEvent=at;var Fd={readContext:Dt,use:Hs,useCallback:function(e,t){return It().memoizedState=[e,t===void 0?null:t],e},useContext:Dt,useEffect:Ad,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Vs(4194308,4,zd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vs(4194308,4,e,t)},useInsertionEffect:function(e,t){Vs(4,2,e,t)},useMemo:function(e,t){var n=It();t=t===void 0?null:t;var r=e();if(Gl){nn(!0);try{e()}finally{nn(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=It();if(n!==void 0){var l=n(t);if(Gl){nn(!0);try{n(t)}finally{nn(!1)}}}else l=t;return r.memoizedState=r.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},r.queue=e,e=e.dispatch=A_.bind(null,we,e),[r.memoizedState,e]},useRef:function(e){var t=It();return e={current:e},t.memoizedState=e},useState:function(e){e=qc(e);var t=e.queue,n=Id.bind(null,we,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Xc,useDeferredValue:function(e,t){var n=It();return Kc(n,e,t)},useTransition:function(){var e=qc(!1);return e=Gd.bind(null,we,e.queue,!0,!1),It().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=we,l=It();if(Oe){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Fe===null)throw Error(s(349));(Me&127)!==0||pd(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Ad(gd.bind(null,r,i,e),[e]),r.flags|=2048,wa(9,{destroy:void 0},_d.bind(null,r,i,n,t),null),n},useId:function(){var e=It(),t=Fe.identifierPrefix;if(Oe){var n=rr,r=nr;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Ls++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=E_++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Pc,useFormState:Nd,useActionState:Nd,useOptimistic:function(e){var t=It();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Qc.bind(null,we,!0,n),n.dispatch=t,[e,t]},useMemoCache:Gc,useCacheRefresh:function(){return It().memoizedState=j_.bind(null,we)},useEffectEvent:function(e){var t=It(),n={impl:e};return t.memoizedState=n,function(){if((He&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Zc={readContext:Dt,use:Hs,useCallback:Ld,useContext:Dt,useEffect:Ic,useImperativeHandle:Bd,useInsertionEffect:Od,useLayoutEffect:Cd,useMemo:Ud,useReducer:Gs,useRef:jd,useState:function(){return Gs(gr)},useDebugValue:Xc,useDeferredValue:function(e,t){var n=ut();return Hd(n,$e.memoizedState,e,t)},useTransition:function(){var e=Gs(gr)[0],t=ut().memoizedState;return[typeof e=="boolean"?e:wi(e),t]},useSyncExternalStore:hd,useId:qd,useHostTransitionStatus:Pc,useFormState:Rd,useActionState:Rd,useOptimistic:function(e,t){var n=ut();return vd(n,$e,e,t)},useMemoCache:Gc,useCacheRefresh:$d};Zc.useEffectEvent=Dd;var Pd={readContext:Dt,use:Hs,useCallback:Ld,useContext:Dt,useEffect:Ic,useImperativeHandle:Bd,useInsertionEffect:Od,useLayoutEffect:Cd,useMemo:Ud,useReducer:Yc,useRef:jd,useState:function(){return Yc(gr)},useDebugValue:Xc,useDeferredValue:function(e,t){var n=ut();return $e===null?Kc(n,e,t):Hd(n,$e.memoizedState,e,t)},useTransition:function(){var e=Yc(gr)[0],t=ut().memoizedState;return[typeof e=="boolean"?e:wi(e),t]},useSyncExternalStore:hd,useId:qd,useHostTransitionStatus:Pc,useFormState:Md,useActionState:Md,useOptimistic:function(e,t){var n=ut();return $e!==null?vd(n,$e,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Gc,useCacheRefresh:$d};Pd.useEffectEvent=Dd;function Wc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:N({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Jc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=mn(),l=Xr(r);l.payload=t,n!=null&&(l.callback=n),t=Kr(e,l,r),t!==null&&(en(t,e,r),yi(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=mn(),l=Xr(r);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Kr(e,l,r),t!==null&&(en(t,e,r),yi(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mn(),r=Xr(n);r.tag=2,t!=null&&(r.callback=t),t=Kr(e,r,n),t!==null&&(en(t,e,n),yi(t,e,n))}};function Qd(e,t,n,r,l,i,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,m):t.prototype&&t.prototype.isPureReactComponent?!Yn(n,r)||!Yn(l,i):!0}function Zd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Jc.enqueueReplaceState(t,t.state,null)}function Vl(e,t){var n=t;if("ref"in t){n={};for(var r in t)r!=="ref"&&(n[r]=t[r])}if(e=e.defaultProps){n===t&&(n=N({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function Wd(e){xs(e)}function Jd(e){console.error(e)}function em(e){xs(e)}function $s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function tm(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function eu(e,t,n){return n=Xr(n),n.tag=3,n.payload={element:null},n.callback=function(){$s(e,t)},n}function nm(e){return e=Xr(e),e.tag=3,e}function rm(e,t,n,r){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=r.value;e.payload=function(){return l(i)},e.callback=function(){tm(t,n,r)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){tm(t,n,r),typeof l!="function"&&(Jr===null?Jr=new Set([this]):Jr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})})}function D_(e,t,n,r,l){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=n.alternate,t!==null&&pa(t,n,l,!0),n=cn.current,n!==null){switch(n.tag){case 31:case 13:return Mn===null?no():n.alternate===null&&it===0&&(it=3),n.flags&=-257,n.flags|=65536,n.lanes=l,r===As?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),ku(e,r,l)),!1;case 22:return n.flags|=65536,r===As?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),ku(e,r,l)),!1}throw Error(s(435,n.tag))}return ku(e,r,l),no(),!1}if(Oe)return t=cn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,r!==yc&&(e=Error(s(422),{cause:r}),hi(kn(e,n)))):(r!==yc&&(t=Error(s(423),{cause:r}),hi(kn(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,r=kn(r,n),l=eu(e.stateNode,r,l),jc(e,l),it!==4&&(it=2)),!1;var i=Error(s(520),{cause:r});if(i=kn(i,n),Oi===null?Oi=[i]:Oi.push(i),it!==4&&(it=2),t===null)return!0;r=kn(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=eu(n.stateNode,r,e),jc(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Jr===null||!Jr.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=nm(l),rm(l,e,n,r),jc(n,l),!1}n=n.return}while(n!==null);return!1}var tu=Error(s(461)),pt=!1;function Ot(e,t,n,r){t.child=e===null?sd(t,null,n,r):Hl(t,e.child,n,r)}function lm(e,t,n,r,l){n=n.render;var i=t.ref;if("ref"in r){var m={};for(var _ in r)_!=="ref"&&(m[_]=r[_])}else m=r;return zl(t),r=Bc(e,t,n,m,i,l),_=Lc(),e!==null&&!pt?(Uc(e,t,l),br(e,t,l)):(Oe&&_&&gc(t),t.flags|=1,Ot(e,t,r,l),t.child)}function am(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!hc(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,im(e,t,i,r,l)):(e=ks(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!cu(e,l)){var m=i.memoizedProps;if(n=n.compare,n=n!==null?n:Yn,n(m,r)&&e.ref===t.ref)return br(e,t,l)}return t.flags|=1,e=dr(i,r),e.ref=t.ref,e.return=t,t.child=e}function im(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Yn(i,r)&&e.ref===t.ref)if(pt=!1,t.pendingProps=r=i,cu(e,l))(e.flags&131072)!==0&&(pt=!0);else return t.lanes=e.lanes,br(e,t,l)}return nu(e,t,n,r,l)}function sm(e,t,n,r){var l=r.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(r=t.child=e.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~i}else r=0,t.child=null;return om(e,t,i,n,r)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ms(t,i!==null?i.cachePool:null),i!==null?ud(t,i):Dc(),fd(t);else return r=t.lanes=536870912,om(e,t,i!==null?i.baseLanes|n:n,n,r)}else i!==null?(Ms(t,i.cachePool),ud(t,i),Pr(),t.memoizedState=null):(e!==null&&Ms(t,null),Dc(),Pr());return Ot(e,t,l,n),t.child}function Ni(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function om(e,t,n,r,l){var i=Nc();return i=i===null?null:{parent:mt._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Ms(t,null),Dc(),fd(t),e!==null&&pa(e,t,r,!0),t.childLanes=l,null}function Is(e,t){return t=Ks({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function cm(e,t,n){return Hl(t,e.child,null,n),e=Is(t,t.pendingProps),e.flags|=2,un(t),t.memoizedState=null,e}function O_(e,t,n){var r=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Oe){if(r.mode==="hidden")return e=Is(t,r),t.lanes=536870912,Ni(null,e);if(Cc(t),(e=We)?(e=xh(e,Tn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Vr!==null?{id:nr,overflow:rr}:null,retryLane:536870912,hydrationErrors:null},n=Xf(e),n.return=t,t.child=n,At=t,We=null)):e=null,e===null)throw qr(t);return t.lanes=536870912,null}return Is(t,r)}var i=e.memoizedState;if(i!==null){var m=i.dehydrated;if(Cc(t),l)if(t.flags&256)t.flags&=-257,t=cm(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(pt||pa(e,t,n,!1),l=(n&e.childLanes)!==0,pt||l){if(r=Fe,r!==null&&(m=as(r,n),m!==0&&m!==i.retryLane))throw i.retryLane=m,Al(e,m),en(r,e,m),tu;no(),t=cm(e,t,n)}else e=i.treeContext,We=jn(m.nextSibling),At=t,Oe=!0,Yr=null,Tn=!1,e!==null&&Pf(t,e),t=Is(t,r),t.flags|=4096;return t}return e=dr(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Xs(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function nu(e,t,n,r,l){return zl(t),n=Bc(e,t,n,r,void 0,l),r=Lc(),e!==null&&!pt?(Uc(e,t,l),br(e,t,l)):(Oe&&r&&gc(t),t.flags|=1,Ot(e,t,n,l),t.child)}function um(e,t,n,r,l,i){return zl(t),t.updateQueue=null,n=md(t,r,n,l),dd(e),r=Lc(),e!==null&&!pt?(Uc(e,t,i),br(e,t,i)):(Oe&&r&&gc(t),t.flags|=1,Ot(e,t,n,i),t.child)}function fm(e,t,n,r,l){if(zl(t),t.stateNode===null){var i=fa,m=n.contextType;typeof m=="object"&&m!==null&&(i=Dt(m)),i=new n(r,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Jc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=r,i.state=t.memoizedState,i.refs={},Tc(t),m=n.contextType,i.context=typeof m=="object"&&m!==null?Dt(m):fa,i.state=t.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(Wc(t,n,m,r),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(m=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),m!==i.state&&Jc.enqueueReplaceState(i,i.state,null),xi(t,r,i,l),vi(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){i=t.stateNode;var _=t.memoizedProps,w=Vl(n,_);i.props=w;var M=i.context,H=n.contextType;m=fa,typeof H=="object"&&H!==null&&(m=Dt(H));var Y=n.getDerivedStateFromProps;H=typeof Y=="function"||typeof i.getSnapshotBeforeUpdate=="function",_=t.pendingProps!==_,H||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(_||M!==m)&&Zd(t,i,r,m),Ir=!1;var O=t.memoizedState;i.state=O,xi(t,r,i,l),vi(),M=t.memoizedState,_||O!==M||Ir?(typeof Y=="function"&&(Wc(t,n,Y,r),M=t.memoizedState),(w=Ir||Qd(t,n,w,r,O,M,m))?(H||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=M),i.props=r,i.state=M,i.context=m,r=w):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Mc(e,t),m=t.memoizedProps,H=Vl(n,m),i.props=H,Y=t.pendingProps,O=i.context,M=n.contextType,w=fa,typeof M=="object"&&M!==null&&(w=Dt(M)),_=n.getDerivedStateFromProps,(M=typeof _=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(m!==Y||O!==w)&&Zd(t,i,r,w),Ir=!1,O=t.memoizedState,i.state=O,xi(t,r,i,l),vi();var B=t.memoizedState;m!==Y||O!==B||Ir||e!==null&&e.dependencies!==null&&Rs(e.dependencies)?(typeof _=="function"&&(Wc(t,n,_,r),B=t.memoizedState),(H=Ir||Qd(t,n,H,r,O,B,w)||e!==null&&e.dependencies!==null&&Rs(e.dependencies))?(M||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,B,w),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,B,w)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||m===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=B),i.props=r,i.state=B,i.context=w,r=H):(typeof i.componentDidUpdate!="function"||m===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),r=!1)}return i=r,Xs(e,t),r=(t.flags&128)!==0,i||r?(i=t.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&r?(t.child=Hl(t,e.child,null,l),t.child=Hl(t,null,n,l)):Ot(e,t,n,l),t.memoizedState=i.state,e=t.child):e=br(e,t,l),e}function dm(e,t,n,r){return Ol(),t.flags|=256,Ot(e,t,n,r),t.child}var ru={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lu(e){return{baseLanes:e,cachePool:td()}}function au(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=dn),e}function mm(e,t,n){var r=t.pendingProps,l=!1,i=(t.flags&128)!==0,m;if((m=i)||(m=e!==null&&e.memoizedState===null?!1:(ct.current&2)!==0),m&&(l=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(Oe){if(l?Fr(t):Pr(),(e=We)?(e=xh(e,Tn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Vr!==null?{id:nr,overflow:rr}:null,retryLane:536870912,hydrationErrors:null},n=Xf(e),n.return=t,t.child=n,At=t,We=null)):e=null,e===null)throw qr(t);return Vu(e)?t.lanes=32:t.lanes=536870912,null}var _=r.children;return r=r.fallback,l?(Pr(),l=t.mode,_=Ks({mode:"hidden",children:_},l),r=Dl(r,l,n,null),_.return=t,r.return=t,_.sibling=r,t.child=_,r=t.child,r.memoizedState=lu(n),r.childLanes=au(e,m,n),t.memoizedState=ru,Ni(null,r)):(Fr(t),iu(t,_))}var w=e.memoizedState;if(w!==null&&(_=w.dehydrated,_!==null)){if(i)t.flags&256?(Fr(t),t.flags&=-257,t=su(e,t,n)):t.memoizedState!==null?(Pr(),t.child=e.child,t.flags|=128,t=null):(Pr(),_=r.fallback,l=t.mode,r=Ks({mode:"visible",children:r.children},l),_=Dl(_,l,n,null),_.flags|=2,r.return=t,_.return=t,r.sibling=_,t.child=r,Hl(t,e.child,null,n),r=t.child,r.memoizedState=lu(n),r.childLanes=au(e,m,n),t.memoizedState=ru,t=Ni(null,r));else if(Fr(t),Vu(_)){if(m=_.nextSibling&&_.nextSibling.dataset,m)var M=m.dgst;m=M,r=Error(s(419)),r.stack="",r.digest=m,hi({value:r,source:null,stack:null}),t=su(e,t,n)}else if(pt||pa(e,t,n,!1),m=(n&e.childLanes)!==0,pt||m){if(m=Fe,m!==null&&(r=as(m,n),r!==0&&r!==w.retryLane))throw w.retryLane=r,Al(e,r),en(m,e,r),tu;Gu(_)||no(),t=su(e,t,n)}else Gu(_)?(t.flags|=192,t.child=e.child,t=null):(e=w.treeContext,We=jn(_.nextSibling),At=t,Oe=!0,Yr=null,Tn=!1,e!==null&&Pf(t,e),t=iu(t,r.children),t.flags|=4096);return t}return l?(Pr(),_=r.fallback,l=t.mode,w=e.child,M=w.sibling,r=dr(w,{mode:"hidden",children:r.children}),r.subtreeFlags=w.subtreeFlags&65011712,M!==null?_=dr(M,_):(_=Dl(_,l,n,null),_.flags|=2),_.return=t,r.return=t,r.sibling=_,t.child=r,Ni(null,r),r=t.child,_=e.child.memoizedState,_===null?_=lu(n):(l=_.cachePool,l!==null?(w=mt._currentValue,l=l.parent!==w?{parent:w,pool:w}:l):l=td(),_={baseLanes:_.baseLanes|n,cachePool:l}),r.memoizedState=_,r.childLanes=au(e,m,n),t.memoizedState=ru,Ni(e.child,r)):(Fr(t),n=e.child,e=n.sibling,n=dr(n,{mode:"visible",children:r.children}),n.return=t,n.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=n,t.memoizedState=null,n)}function iu(e,t){return t=Ks({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ks(e,t){return e=on(22,e,null,t),e.lanes=0,e}function su(e,t,n){return Hl(t,e.child,null,n),e=iu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Sc(e.return,t,n)}function ou(e,t,n,r,l,i){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l,treeForkCount:i}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=r,m.tail=n,m.tailMode=l,m.treeForkCount=i)}function pm(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;r=r.children;var m=ct.current,_=(m&2)!==0;if(_?(m=m&1|2,t.flags|=128):m&=1,Z(ct,m),Ot(e,t,r,n),r=Oe?mi:0,!_&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hm(e,n,t);else if(e.tag===19)hm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&zs(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ou(t,!1,l,n,i,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&zs(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ou(t,!0,n,null,i,r);break;case"together":ou(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function br(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wr|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(pa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=dr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Rs(e)))}function C_(e,t,n){switch(t.tag){case 3:Ue(t,t.stateNode.containerInfo),$r(t,mt,e.memoizedState.cache),Ol();break;case 27:case 5:Vt(t);break;case 4:Ue(t,t.stateNode.containerInfo);break;case 10:$r(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Cc(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(Fr(t),t.flags|=128,null):(n&t.child.childLanes)!==0?mm(e,t,n):(Fr(t),e=br(e,t,n),e!==null?e.sibling:null);Fr(t);break;case 19:var l=(e.flags&128)!==0;if(r=(n&t.childLanes)!==0,r||(pa(e,t,n,!1),r=(n&t.childLanes)!==0),l){if(r)return pm(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Z(ct,ct.current),r)break;return null;case 22:return t.lanes=0,sm(e,t,n,t.pendingProps);case 24:$r(t,mt,e.memoizedState.cache)}return br(e,t,n)}function _m(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)pt=!0;else{if(!cu(e,n)&&(t.flags&128)===0)return pt=!1,C_(e,t,n);pt=(e.flags&131072)!==0}else pt=!1,Oe&&(t.flags&1048576)!==0&&Ff(t,mi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=Ll(t.elementType),t.type=e,typeof e=="function")hc(e)?(r=Vl(e,r),t.tag=1,t=fm(null,t,e,r,n)):(t.tag=0,t=nu(null,t,e,r,n));else{if(e!=null){var l=e.$$typeof;if(l===se){t.tag=11,t=lm(null,t,e,r,n);break e}else if(l===ee){t.tag=14,t=am(null,t,e,r,n);break e}}throw t=Ae(e)||e,Error(s(306,t,""))}}return t;case 0:return nu(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,l=Vl(r,t.pendingProps),fm(e,t,r,l,n);case 3:e:{if(Ue(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var i=t.memoizedState;l=i.element,Mc(e,t),xi(t,r,null,n);var m=t.memoizedState;if(r=m.cache,$r(t,mt,r),r!==i.cache&&wc(t,[mt],n,!0),vi(),r=m.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=dm(e,t,r,n);break e}else if(r!==l){l=kn(Error(s(424)),t),hi(l),t=dm(e,t,r,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(We=jn(e.firstChild),At=t,Oe=!0,Yr=null,Tn=!0,n=sd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ol(),r===l){t=br(e,t,n);break e}Ot(e,t,r,n)}t=t.child}return t;case 26:return Xs(e,t),e===null?(n=Rh(t.type,null,t.pendingProps,null))?t.memoizedState=n:Oe||(n=t.type,e=t.pendingProps,r=co(K.current).createElement(n),r[st]=t,r[ot]=e,Ct(r,n,e),Ze(r),t.stateNode=r):t.memoizedState=Rh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Vt(t),e===null&&Oe&&(r=t.stateNode=Eh(t.type,t.pendingProps,K.current),At=t,Tn=!0,l=We,rl(t.type)?(Yu=l,We=jn(r.firstChild)):We=l),Ot(e,t,t.pendingProps.children,n),Xs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Oe&&((l=r=We)&&(r=ug(r,t.type,t.pendingProps,Tn),r!==null?(t.stateNode=r,At=t,We=jn(r.firstChild),Tn=!1,l=!0):l=!1),l||qr(t)),Vt(t),l=t.type,i=t.pendingProps,m=e!==null?e.memoizedProps:null,r=i.children,Lu(l,i)?r=null:m!==null&&Lu(l,m)&&(t.flags|=32),t.memoizedState!==null&&(l=Bc(e,t,k_,null,null,n),Vi._currentValue=l),Xs(e,t),Ot(e,t,r,n),t.child;case 6:return e===null&&Oe&&((e=n=We)&&(n=fg(n,t.pendingProps,Tn),n!==null?(t.stateNode=n,At=t,We=null,e=!0):e=!1),e||qr(t)),null;case 13:return mm(e,t,n);case 4:return Ue(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hl(t,null,r,n):Ot(e,t,r,n),t.child;case 11:return lm(e,t,t.type,t.pendingProps,n);case 7:return Ot(e,t,t.pendingProps,n),t.child;case 8:return Ot(e,t,t.pendingProps.children,n),t.child;case 12:return Ot(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,$r(t,t.type,r.value),Ot(e,t,r.children,n),t.child;case 9:return l=t.type._context,r=t.pendingProps.children,zl(t),l=Dt(l),r=r(l),t.flags|=1,Ot(e,t,r,n),t.child;case 14:return am(e,t,t.type,t.pendingProps,n);case 15:return im(e,t,t.type,t.pendingProps,n);case 19:return pm(e,t,n);case 31:return O_(e,t,n);case 22:return sm(e,t,n,t.pendingProps);case 24:return zl(t),r=Dt(mt),e===null?(l=Nc(),l===null&&(l=Fe,i=Ec(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),t.memoizedState={parent:r,cache:l},Tc(t),$r(t,mt,l)):((e.lanes&n)!==0&&(Mc(e,t),xi(t,null,null,n),vi()),l=e.memoizedState,i=t.memoizedState,l.parent!==r?(l={parent:r,cache:r},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),$r(t,mt,r)):(r=i.cache,$r(t,mt,r),r!==l.cache&&wc(t,[mt],n,!0))),Ot(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function yr(e){e.flags|=4}function uu(e,t,n,r,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(qm())e.flags|=8192;else throw Ul=As,Rc}else e.flags&=-16777217}function gm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Dh(t))if(qm())e.flags|=8192;else throw Ul=As,Rc}function Fs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ka():536870912,e.lanes|=t,Ra|=t)}function Ri(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&65011712,r|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function z_(e,t,n){var r=t.pendingProps;switch(bc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(t),null;case 1:return Je(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),pr(mt),Ce(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ha(t)?yr(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,vc())),Je(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(yr(t),i!==null?(Je(t),gm(t,i)):(Je(t),uu(t,l,null,r,n))):i?i!==e.memoizedState?(yr(t),Je(t),gm(t,i)):(Je(t),t.flags&=-16777217):(e=e.memoizedProps,e!==r&&yr(t),Je(t),uu(t,l,e,r,n)),null;case 27:if(Xn(t),n=K.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&yr(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Je(t),null}e=D.current,ha(t)?Qf(t):(e=Eh(l,r,n),t.stateNode=e,yr(t))}return Je(t),null;case 5:if(Xn(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&yr(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Je(t),null}if(i=D.current,ha(t))Qf(t);else{var m=co(K.current);switch(i){case 1:i=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=m.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof r.is=="string"?m.createElement("select",{is:r.is}):m.createElement("select"),r.multiple?i.multiple=!0:r.size&&(i.size=r.size);break;default:i=typeof r.is=="string"?m.createElement(l,{is:r.is}):m.createElement(l)}}i[st]=t,i[ot]=r;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)i.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=i;e:switch(Ct(i,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&yr(t)}}return Je(t),uu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&yr(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(e=K.current,ha(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,l=At,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}e[st]=t,e=!!(e.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||mh(e.nodeValue,n)),e||qr(t,!0)}else e=co(e).createTextNode(r),e[st]=t,t.stateNode=e}return Je(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=ha(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[st]=t}else Ol(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Je(t),e=!1}else n=vc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(un(t),t):(un(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Je(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=ha(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[st]=t}else Ol(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Je(t),l=!1}else l=vc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(un(t),t):(un(t),null)}return un(t),(t.flags&128)!==0?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==l&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Fs(t,t.updateQueue),Je(t),null);case 4:return Ce(),e===null&&Du(t.stateNode.containerInfo),Je(t),null;case 10:return pr(t.type),Je(t),null;case 19:if(L(ct),r=t.memoizedState,r===null)return Je(t),null;if(l=(t.flags&128)!==0,i=r.rendering,i===null)if(l)Ri(r,!1);else{if(it!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=zs(e),i!==null){for(t.flags|=128,Ri(r,!1),e=i.updateQueue,t.updateQueue=e,Fs(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)If(n,e),n=n.sibling;return Z(ct,ct.current&1|2),Oe&&mr(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&bt()>Js&&(t.flags|=128,l=!0,Ri(r,!1),t.lanes=4194304)}else{if(!l)if(e=zs(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Fs(t,e),Ri(r,!0),r.tail===null&&r.tailMode==="hidden"&&!i.alternate&&!Oe)return Je(t),null}else 2*bt()-r.renderingStartTime>Js&&n!==536870912&&(t.flags|=128,l=!0,Ri(r,!1),t.lanes=4194304);r.isBackwards?(i.sibling=t.child,t.child=i):(e=r.last,e!==null?e.sibling=i:t.child=i,r.last=i)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=bt(),e.sibling=null,n=ct.current,Z(ct,l?n&1|2:n&1),Oe&&mr(t,r.treeForkCount),e):(Je(t),null);case 22:case 23:return un(t),Oc(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(n&536870912)!==0&&(t.flags&128)===0&&(Je(t),t.subtreeFlags&6&&(t.flags|=8192)):Je(t),n=t.updateQueue,n!==null&&Fs(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&L(Bl),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),pr(mt),Je(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function B_(e,t){switch(bc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pr(mt),Ce(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Xn(t),null;case 31:if(t.memoizedState!==null){if(un(t),t.alternate===null)throw Error(s(340));Ol()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(un(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Ol()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(ct),null;case 4:return Ce(),null;case 10:return pr(t.type),null;case 22:case 23:return un(t),Oc(),e!==null&&L(Bl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return pr(mt),null;case 25:return null;default:return null}}function bm(e,t){switch(bc(t),t.tag){case 3:pr(mt),Ce();break;case 26:case 27:case 5:Xn(t);break;case 4:Ce();break;case 31:t.memoizedState!==null&&un(t);break;case 13:un(t);break;case 19:L(ct);break;case 10:pr(t.type);break;case 22:case 23:un(t),Oc(),e!==null&&L(Bl);break;case 24:pr(mt)}}function Ti(e,t){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var l=r.next;n=l;do{if((n.tag&e)===e){r=void 0;var i=n.create,m=n.inst;r=i(),m.destroy=r}n=n.next}while(n!==l)}}catch(_){Ye(t,t.return,_)}}function Qr(e,t,n){try{var r=t.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var i=l.next;r=i;do{if((r.tag&e)===e){var m=r.inst,_=m.destroy;if(_!==void 0){m.destroy=void 0,l=t;var w=n,M=_;try{M()}catch(H){Ye(l,w,H)}}}r=r.next}while(r!==i)}}catch(H){Ye(t,t.return,H)}}function ym(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{cd(t,n)}catch(r){Ye(e,e.return,r)}}}function vm(e,t,n){n.props=Vl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){Ye(e,t,r)}}function Mi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n=="function"?e.refCleanup=n(r):n.current=r}}catch(l){Ye(e,t,l)}}function lr(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(l){Ye(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Ye(e,t,l)}else n.current=null}function xm(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(l){Ye(e,e.return,l)}}function fu(e,t,n){try{var r=e.stateNode;lg(r,e.type,n,t),r[ot]=t}catch(l){Ye(e,e.return,l)}}function Sm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&rl(e.type)||e.tag===4}function du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&rl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=tt));else if(r!==4&&(r===27&&rl(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(mu(e,t,n),e=e.sibling;e!==null;)mu(e,t,n),e=e.sibling}function Ps(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&rl(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ps(e,t,n),e=e.sibling;e!==null;)Ps(e,t,n),e=e.sibling}function wm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Ct(t,r,n),t[st]=e,t[ot]=n}catch(i){Ye(e,e.return,i)}}var vr=!1,_t=!1,hu=!1,Em=typeof WeakSet=="function"?WeakSet:Set,kt=null;function L_(e,t){if(e=e.containerInfo,zu=go,e=Bf(e),sc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var m=0,_=-1,w=-1,M=0,H=0,Y=e,O=null;t:for(;;){for(var B;Y!==n||l!==0&&Y.nodeType!==3||(_=m+l),Y!==i||r!==0&&Y.nodeType!==3||(w=m+r),Y.nodeType===3&&(m+=Y.nodeValue.length),(B=Y.firstChild)!==null;)O=Y,Y=B;for(;;){if(Y===e)break t;if(O===n&&++M===l&&(_=m),O===i&&++H===r&&(w=m),(B=Y.nextSibling)!==null)break;Y=O,O=Y.parentNode}Y=B}n=_===-1||w===-1?null:{start:_,end:w}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bu={focusedElem:e,selectionRange:n},go=!1,kt=t;kt!==null;)if(t=kt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,kt=e;else for(;kt!==null;){switch(t=kt,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,l=i.memoizedProps,i=i.memoizedState,r=n.stateNode;try{var ie=Vl(n.type,l);e=r.getSnapshotBeforeUpdate(ie,i),r.__reactInternalSnapshotBeforeUpdate=e}catch(pe){Ye(n,n.return,pe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Hu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,kt=e;break}kt=t.return}}function km(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sr(e,n),r&4&&Ti(5,n);break;case 1:if(Sr(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(m){Ye(n,n.return,m)}else{var l=Vl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Ye(n,n.return,m)}}r&64&&ym(n),r&512&&Mi(n,n.return);break;case 3:if(Sr(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{cd(e,t)}catch(m){Ye(n,n.return,m)}}break;case 27:t===null&&r&4&&wm(n);case 26:case 5:Sr(e,n),t===null&&r&4&&xm(n),r&512&&Mi(n,n.return);break;case 12:Sr(e,n);break;case 31:Sr(e,n),r&4&&Tm(e,n);break;case 13:Sr(e,n),r&4&&Mm(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=X_.bind(null,n),dg(e,n))));break;case 22:if(r=n.memoizedState!==null||vr,!r){t=t!==null&&t.memoizedState!==null||_t,l=vr;var i=_t;vr=r,(_t=t)&&!i?wr(e,n,(n.subtreeFlags&8772)!==0):Sr(e,n),vr=l,_t=i}break;case 30:break;default:Sr(e,n)}}function Nm(e){var t=e.alternate;t!==null&&(e.alternate=null,Nm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Gn(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rt=null,Qt=!1;function xr(e,t,n){for(n=n.child;n!==null;)Rm(e,t,n),n=n.sibling}function Rm(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(hl,n)}catch{}switch(n.tag){case 26:_t||lr(n,t),xr(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:_t||lr(n,t);var r=rt,l=Qt;rl(n.type)&&(rt=n.stateNode,Qt=!1),xr(e,t,n),Ui(n.stateNode),rt=r,Qt=l;break;case 5:_t||lr(n,t);case 6:if(r=rt,l=Qt,rt=null,xr(e,t,n),rt=r,Qt=l,rt!==null)if(Qt)try{(rt.nodeType===9?rt.body:rt.nodeName==="HTML"?rt.ownerDocument.body:rt).removeChild(n.stateNode)}catch(i){Ye(n,t,i)}else try{rt.removeChild(n.stateNode)}catch(i){Ye(n,t,i)}break;case 18:rt!==null&&(Qt?(e=rt,yh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),za(e)):yh(rt,n.stateNode));break;case 4:r=rt,l=Qt,rt=n.stateNode.containerInfo,Qt=!0,xr(e,t,n),rt=r,Qt=l;break;case 0:case 11:case 14:case 15:Qr(2,n,t),_t||Qr(4,n,t),xr(e,t,n);break;case 1:_t||(lr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"&&vm(n,t,r)),xr(e,t,n);break;case 21:xr(e,t,n);break;case 22:_t=(r=_t)||n.memoizedState!==null,xr(e,t,n),_t=r;break;default:xr(e,t,n)}}function Tm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{za(e)}catch(n){Ye(t,t.return,n)}}}function Mm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{za(e)}catch(n){Ye(t,t.return,n)}}function U_(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Em),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Em),t;default:throw Error(s(435,e.tag))}}function Qs(e,t){var n=U_(e);t.forEach(function(r){if(!n.has(r)){n.add(r);var l=K_.bind(null,e,r);r.then(l,l)}})}function Zt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r],i=e,m=t,_=m;e:for(;_!==null;){switch(_.tag){case 27:if(rl(_.type)){rt=_.stateNode,Qt=!1;break e}break;case 5:rt=_.stateNode,Qt=!1;break e;case 3:case 4:rt=_.stateNode.containerInfo,Qt=!0;break e}_=_.return}if(rt===null)throw Error(s(160));Rm(i,m,l),rt=null,Qt=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)jm(t,e),t=t.sibling}var $n=null;function jm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Zt(t,e),Wt(e),r&4&&(Qr(3,e,e.return),Ti(3,e),Qr(5,e,e.return));break;case 1:Zt(t,e),Wt(e),r&512&&(_t||n===null||lr(n,n.return)),r&64&&vr&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var l=$n;if(Zt(t,e),Wt(e),r&512&&(_t||n===null||lr(n,n.return)),r&4){var i=n!==null?n.memoizedState:null;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){e:{r=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(r){case"title":i=l.getElementsByTagName("title")[0],(!i||i[Hn]||i[st]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(r),l.head.insertBefore(i,l.querySelector("head > title"))),Ct(i,r,n),i[st]=e,Ze(i),r=i;break e;case"link":var m=jh("link","href",l).get(r+(n.href||""));if(m){for(var _=0;_<m.length;_++)if(i=m[_],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(_,1);break t}}i=l.createElement(r),Ct(i,r,n),l.head.appendChild(i);break;case"meta":if(m=jh("meta","content",l).get(r+(n.content||""))){for(_=0;_<m.length;_++)if(i=m[_],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(_,1);break t}}i=l.createElement(r),Ct(i,r,n),l.head.appendChild(i);break;default:throw Error(s(468,r))}i[st]=e,Ze(i),r=i}e.stateNode=r}else Ah(l,e.type,e.stateNode);else e.stateNode=Mh(l,r,e.memoizedProps);else i!==r?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,r===null?Ah(l,e.type,e.stateNode):Mh(l,r,e.memoizedProps)):r===null&&e.stateNode!==null&&fu(e,e.memoizedProps,n.memoizedProps)}break;case 27:Zt(t,e),Wt(e),r&512&&(_t||n===null||lr(n,n.return)),n!==null&&r&4&&fu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Zt(t,e),Wt(e),r&512&&(_t||n===null||lr(n,n.return)),e.flags&32){l=e.stateNode;try{et(l,"")}catch(ie){Ye(e,e.return,ie)}}r&4&&e.stateNode!=null&&(l=e.memoizedProps,fu(e,l,n!==null?n.memoizedProps:l)),r&1024&&(hu=!0);break;case 6:if(Zt(t,e),Wt(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(ie){Ye(e,e.return,ie)}}break;case 3:if(mo=null,l=$n,$n=uo(t.containerInfo),Zt(t,e),$n=l,Wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{za(t.containerInfo)}catch(ie){Ye(e,e.return,ie)}hu&&(hu=!1,Am(e));break;case 4:r=$n,$n=uo(e.stateNode.containerInfo),Zt(t,e),Wt(e),$n=r;break;case 12:Zt(t,e),Wt(e);break;case 31:Zt(t,e),Wt(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Qs(e,r)));break;case 13:Zt(t,e),Wt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ws=bt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Qs(e,r)));break;case 22:l=e.memoizedState!==null;var w=n!==null&&n.memoizedState!==null,M=vr,H=_t;if(vr=M||l,_t=H||w,Zt(t,e),_t=H,vr=M,Wt(e),r&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||w||vr||_t||Yl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){w=n=t;try{if(i=w.stateNode,l)m=i.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{_=w.stateNode;var Y=w.memoizedProps.style,O=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;_.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(ie){Ye(w,w.return,ie)}}}else if(t.tag===6){if(n===null){w=t;try{w.stateNode.nodeValue=l?"":w.memoizedProps}catch(ie){Ye(w,w.return,ie)}}}else if(t.tag===18){if(n===null){w=t;try{var B=w.stateNode;l?vh(B,!0):vh(w.stateNode,!1)}catch(ie){Ye(w,w.return,ie)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Qs(e,n))));break;case 19:Zt(t,e),Wt(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Qs(e,r)));break;case 30:break;case 21:break;default:Zt(t,e),Wt(e)}}function Wt(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Sm(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var l=n.stateNode,i=du(e);Ps(e,i,l);break;case 5:var m=n.stateNode;n.flags&32&&(et(m,""),n.flags&=-33);var _=du(e);Ps(e,_,m);break;case 3:case 4:var w=n.stateNode.containerInfo,M=du(e);mu(e,M,w);break;default:throw Error(s(161))}}catch(H){Ye(e,e.return,H)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Am(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Am(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sr(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)km(e,t.alternate,t),t=t.sibling}function Yl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Qr(4,t,t.return),Yl(t);break;case 1:lr(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&vm(t,t.return,n),Yl(t);break;case 27:Ui(t.stateNode);case 26:case 5:lr(t,t.return),Yl(t);break;case 22:t.memoizedState===null&&Yl(t);break;case 30:Yl(t);break;default:Yl(t)}e=e.sibling}}function wr(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,l=e,i=t,m=i.flags;switch(i.tag){case 0:case 11:case 15:wr(l,i,n),Ti(4,i);break;case 1:if(wr(l,i,n),r=i,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(M){Ye(r,r.return,M)}if(r=i,l=r.updateQueue,l!==null){var _=r.stateNode;try{var w=l.shared.hiddenCallbacks;if(w!==null)for(l.shared.hiddenCallbacks=null,l=0;l<w.length;l++)od(w[l],_)}catch(M){Ye(r,r.return,M)}}n&&m&64&&ym(i),Mi(i,i.return);break;case 27:wm(i);case 26:case 5:wr(l,i,n),n&&r===null&&m&4&&xm(i),Mi(i,i.return);break;case 12:wr(l,i,n);break;case 31:wr(l,i,n),n&&m&4&&Tm(l,i);break;case 13:wr(l,i,n),n&&m&4&&Mm(l,i);break;case 22:i.memoizedState===null&&wr(l,i,n),Mi(i,i.return);break;case 30:break;default:wr(l,i,n)}t=t.sibling}}function pu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&pi(n))}function _u(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pi(e))}function In(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dm(e,t,n,r),t=t.sibling}function Dm(e,t,n,r){var l=t.flags;switch(t.tag){case 0:case 11:case 15:In(e,t,n,r),l&2048&&Ti(9,t);break;case 1:In(e,t,n,r);break;case 3:In(e,t,n,r),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pi(e)));break;case 12:if(l&2048){In(e,t,n,r),e=t.stateNode;try{var i=t.memoizedProps,m=i.id,_=i.onPostCommit;typeof _=="function"&&_(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Ye(t,t.return,w)}}else In(e,t,n,r);break;case 31:In(e,t,n,r);break;case 13:In(e,t,n,r);break;case 23:break;case 22:i=t.stateNode,m=t.alternate,t.memoizedState!==null?i._visibility&2?In(e,t,n,r):ji(e,t):i._visibility&2?In(e,t,n,r):(i._visibility|=2,Ea(e,t,n,r,(t.subtreeFlags&10256)!==0||!1)),l&2048&&pu(m,t);break;case 24:In(e,t,n,r),l&2048&&_u(t.alternate,t);break;default:In(e,t,n,r)}}function Ea(e,t,n,r,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,m=t,_=n,w=r,M=m.flags;switch(m.tag){case 0:case 11:case 15:Ea(i,m,_,w,l),Ti(8,m);break;case 23:break;case 22:var H=m.stateNode;m.memoizedState!==null?H._visibility&2?Ea(i,m,_,w,l):ji(i,m):(H._visibility|=2,Ea(i,m,_,w,l)),l&&M&2048&&pu(m.alternate,m);break;case 24:Ea(i,m,_,w,l),l&&M&2048&&_u(m.alternate,m);break;default:Ea(i,m,_,w,l)}t=t.sibling}}function ji(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,l=r.flags;switch(r.tag){case 22:ji(n,r),l&2048&&pu(r.alternate,r);break;case 24:ji(n,r),l&2048&&_u(r.alternate,r);break;default:ji(n,r)}t=t.sibling}}var Ai=8192;function ka(e,t,n){if(e.subtreeFlags&Ai)for(e=e.child;e!==null;)Om(e,t,n),e=e.sibling}function Om(e,t,n){switch(e.tag){case 26:ka(e,t,n),e.flags&Ai&&e.memoizedState!==null&&Eg(n,$n,e.memoizedState,e.memoizedProps);break;case 5:ka(e,t,n);break;case 3:case 4:var r=$n;$n=uo(e.stateNode.containerInfo),ka(e,t,n),$n=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ai,Ai=16777216,ka(e,t,n),Ai=r):ka(e,t,n));break;default:ka(e,t,n)}}function Cm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Di(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];kt=r,Bm(r,e)}Cm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zm(e),e=e.sibling}function zm(e){switch(e.tag){case 0:case 11:case 15:Di(e),e.flags&2048&&Qr(9,e,e.return);break;case 3:Di(e);break;case 12:Di(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Zs(e)):Di(e);break;default:Di(e)}}function Zs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];kt=r,Bm(r,e)}Cm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Qr(8,t,t.return),Zs(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Zs(t));break;default:Zs(t)}e=e.sibling}}function Bm(e,t){for(;kt!==null;){var n=kt;switch(n.tag){case 0:case 11:case 15:Qr(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:pi(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,kt=r;else e:for(n=e;kt!==null;){r=kt;var l=r.sibling,i=r.return;if(Nm(r),r===n){kt=null;break e}if(l!==null){l.return=i,kt=l;break e}kt=i}}}var H_={getCacheForType:function(e){var t=Dt(mt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Dt(mt).controller.signal}},G_=typeof WeakMap=="function"?WeakMap:Map,He=0,Fe=null,Re=null,Me=0,Ve=0,fn=null,Zr=!1,Na=!1,gu=!1,Er=0,it=0,Wr=0,ql=0,bu=0,dn=0,Ra=0,Oi=null,Jt=null,yu=!1,Ws=0,Lm=0,Js=1/0,eo=null,Jr=null,xt=0,el=null,Ta=null,kr=0,vu=0,xu=null,Um=null,Ci=0,Su=null;function mn(){return(He&2)!==0&&Me!==0?Me&-Me:z.T!==null?Tu():dt()}function Hm(){if(dn===0)if((Me&536870912)===0||Oe){var e=Yt;Yt<<=1,(Yt&3932160)===0&&(Yt=262144),dn=e}else dn=536870912;return e=cn.current,e!==null&&(e.flags|=32),dn}function en(e,t,n){(e===Fe&&(Ve===2||Ve===9)||e.cancelPendingCommit!==null)&&(Ma(e,0),tl(e,Me,dn,!1)),pl(e,n),((He&2)===0||e!==Fe)&&(e===Fe&&((He&2)===0&&(ql|=n),it===4&&tl(e,Me,dn,!1)),ar(e))}function Gm(e,t,n){if((He&6)!==0)throw Error(s(327));var r=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Bt(e,t),l=r?q_(e,t):Eu(e,t,!0),i=r;do{if(l===0){Na&&!r&&tl(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!V_(n)){l=Eu(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var _=e;l=Oi;var w=_.current.memoizedState.isDehydrated;if(w&&(Ma(_,m).flags|=256),m=Eu(_,m,!1),m!==2){if(gu&&!w){_.errorRecoveryDisabledLanes|=i,ql|=i,l=4;break e}i=Jt,Jt=l,i!==null&&(Jt===null?Jt=i:Jt.push.apply(Jt,i))}l=m}if(i=!1,l!==2)continue}}if(l===1){Ma(e,0),tl(e,t,0,!0);break}e:{switch(r=e,i=l,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:tl(r,t,dn,!Zr);break e;case 2:Jt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=Ws+300-bt(),10<l)){if(tl(r,t,dn,!Zr),ft(r,0,!0)!==0)break e;kr=t,r.timeoutHandle=gh(Vm.bind(null,r,n,Jt,eo,yu,t,dn,ql,Ra,Zr,i,"Throttled",-0,0),l);break e}Vm(r,n,Jt,eo,yu,t,dn,ql,Ra,Zr,i,null,-0,0)}}break}while(!0);ar(e)}function Vm(e,t,n,r,l,i,m,_,w,M,H,Y,O,B){if(e.timeoutHandle=-1,Y=t.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:tt},Om(t,i,Y);var ie=(i&62914560)===i?Ws-bt():(i&4194048)===i?Lm-bt():0;if(ie=kg(Y,ie),ie!==null){kr=i,e.cancelPendingCommit=ie(Pm.bind(null,e,t,i,n,r,l,m,_,w,H,Y,null,O,B)),tl(e,i,m,!M);return}}Pm(e,t,i,n,r,l,m,_,w)}function V_(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!jt(i(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tl(e,t,n,r){t&=~bu,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var l=t;0<l;){var i=31-Nt(l),m=1<<i;r[i]=-1,l&=~m}n!==0&&ls(e,n,t)}function to(){return(He&6)===0?(zi(0),!1):!0}function wu(){if(Re!==null){if(Ve===0)var e=Re.return;else e=Re,hr=Cl=null,Hc(e),ya=null,gi=0,e=Re;for(;e!==null;)bm(e.alternate,e),e=e.return;Re=null}}function Ma(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,sg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),kr=0,wu(),Fe=e,Re=n=dr(e.current,null),Me=t,Ve=0,fn=null,Zr=!1,Na=Bt(e,t),gu=!1,Ra=dn=bu=ql=Wr=it=0,Jt=Oi=null,yu=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var l=31-Nt(r),i=1<<l;t|=e[l],r&=~i}return Er=t,Ss(),n}function Ym(e,t){we=null,z.H=ki,t===ba||t===js?(t=ld(),Ve=3):t===Rc?(t=ld(),Ve=4):Ve=t===tu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,fn=t,Re===null&&(it=1,$s(e,kn(t,e.current)))}function qm(){var e=cn.current;return e===null?!0:(Me&4194048)===Me?Mn===null:(Me&62914560)===Me||(Me&536870912)!==0?e===Mn:!1}function $m(){var e=z.H;return z.H=ki,e===null?ki:e}function Im(){var e=z.A;return z.A=H_,e}function no(){it=4,Zr||(Me&4194048)!==Me&&cn.current!==null||(Na=!0),(Wr&134217727)===0&&(ql&134217727)===0||Fe===null||tl(Fe,Me,dn,!1)}function Eu(e,t,n){var r=He;He|=2;var l=$m(),i=Im();(Fe!==e||Me!==t)&&(eo=null,Ma(e,t)),t=!1;var m=it;e:do try{if(Ve!==0&&Re!==null){var _=Re,w=fn;switch(Ve){case 8:wu(),m=6;break e;case 3:case 2:case 9:case 6:cn.current===null&&(t=!0);var M=Ve;if(Ve=0,fn=null,ja(e,_,w,M),n&&Na){m=0;break e}break;default:M=Ve,Ve=0,fn=null,ja(e,_,w,M)}}Y_(),m=it;break}catch(H){Ym(e,H)}while(!0);return t&&e.shellSuspendCounter++,hr=Cl=null,He=r,z.H=l,z.A=i,Re===null&&(Fe=null,Me=0,Ss()),m}function Y_(){for(;Re!==null;)Xm(Re)}function q_(e,t){var n=He;He|=2;var r=$m(),l=Im();Fe!==e||Me!==t?(eo=null,Js=bt()+500,Ma(e,t)):Na=Bt(e,t);e:do try{if(Ve!==0&&Re!==null){t=Re;var i=fn;t:switch(Ve){case 1:Ve=0,fn=null,ja(e,t,i,1);break;case 2:case 9:if(nd(i)){Ve=0,fn=null,Km(t);break}t=function(){Ve!==2&&Ve!==9||Fe!==e||(Ve=7),ar(e)},i.then(t,t);break e;case 3:Ve=7;break e;case 4:Ve=5;break e;case 7:nd(i)?(Ve=0,fn=null,Km(t)):(Ve=0,fn=null,ja(e,t,i,7));break;case 5:var m=null;switch(Re.tag){case 26:m=Re.memoizedState;case 5:case 27:var _=Re;if(m?Dh(m):_.stateNode.complete){Ve=0,fn=null;var w=_.sibling;if(w!==null)Re=w;else{var M=_.return;M!==null?(Re=M,ro(M)):Re=null}break t}}Ve=0,fn=null,ja(e,t,i,5);break;case 6:Ve=0,fn=null,ja(e,t,i,6);break;case 8:wu(),it=6;break e;default:throw Error(s(462))}}$_();break}catch(H){Ym(e,H)}while(!0);return hr=Cl=null,z.H=r,z.A=l,He=n,Re!==null?0:(Fe=null,Me=0,Ss(),it)}function $_(){for(;Re!==null&&!Kl();)Xm(Re)}function Xm(e){var t=_m(e.alternate,e,Er);e.memoizedProps=e.pendingProps,t===null?ro(e):Re=t}function Km(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=um(n,t,t.pendingProps,t.type,void 0,Me);break;case 11:t=um(n,t,t.pendingProps,t.type.render,t.ref,Me);break;case 5:Hc(t);default:bm(n,t),t=Re=If(t,Er),t=_m(n,t,Er)}e.memoizedProps=e.pendingProps,t===null?ro(e):Re=t}function ja(e,t,n,r){hr=Cl=null,Hc(t),ya=null,gi=0;var l=t.return;try{if(D_(e,l,t,n,Me)){it=1,$s(e,kn(n,e.current)),Re=null;return}}catch(i){if(l!==null)throw Re=l,i;it=1,$s(e,kn(n,e.current)),Re=null;return}t.flags&32768?(Oe||r===1?e=!0:Na||(Me&536870912)!==0?e=!1:(Zr=e=!0,(r===2||r===9||r===3||r===6)&&(r=cn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Fm(t,e)):ro(t)}function ro(e){var t=e;do{if((t.flags&32768)!==0){Fm(t,Zr);return}e=t.return;var n=z_(t.alternate,t,Er);if(n!==null){Re=n;return}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);it===0&&(it=5)}function Fm(e,t){do{var n=B_(e.alternate,e);if(n!==null){n.flags&=32767,Re=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Re=e;return}Re=e=n}while(e!==null);it=6,Re=null}function Pm(e,t,n,r,l,i,m,_,w){e.cancelPendingCommit=null;do lo();while(xt!==0);if((He&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=dc,ir(e,n,i,m,_,w),e===Fe&&(Re=Fe=null,Me=0),Ta=t,el=e,kr=n,vu=i,xu=l,Um=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,F_(ml,function(){return eh(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,l=Q.p,Q.p=2,m=He,He|=4;try{L_(e,t,n)}finally{He=m,Q.p=l,z.T=r}}xt=1,Qm(),Zm(),Wm()}}function Qm(){if(xt===1){xt=0;var e=el,t=Ta,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=z.T,z.T=null;var r=Q.p;Q.p=2;var l=He;He|=4;try{jm(t,e);var i=Bu,m=Bf(e.containerInfo),_=i.focusedElem,w=i.selectionRange;if(m!==_&&_&&_.ownerDocument&&zf(_.ownerDocument.documentElement,_)){if(w!==null&&sc(_)){var M=w.start,H=w.end;if(H===void 0&&(H=M),"selectionStart"in _)_.selectionStart=M,_.selectionEnd=Math.min(H,_.value.length);else{var Y=_.ownerDocument||document,O=Y&&Y.defaultView||window;if(O.getSelection){var B=O.getSelection(),ie=_.textContent.length,pe=Math.min(w.start,ie),Xe=w.end===void 0?pe:Math.min(w.end,ie);!B.extend&&pe>Xe&&(m=Xe,Xe=pe,pe=m);var R=fi(_,pe),k=fi(_,Xe);if(R&&k&&(B.rangeCount!==1||B.anchorNode!==R.node||B.anchorOffset!==R.offset||B.focusNode!==k.node||B.focusOffset!==k.offset)){var T=Y.createRange();T.setStart(R.node,R.offset),B.removeAllRanges(),pe>Xe?(B.addRange(T),B.extend(k.node,k.offset)):(T.setEnd(k.node,k.offset),B.addRange(T))}}}}for(Y=[],B=_;B=B.parentNode;)B.nodeType===1&&Y.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof _.focus=="function"&&_.focus(),_=0;_<Y.length;_++){var V=Y[_];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}go=!!zu,Bu=zu=null}finally{He=l,Q.p=r,z.T=n}}e.current=t,xt=2}}function Zm(){if(xt===2){xt=0;var e=el,t=Ta,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=z.T,z.T=null;var r=Q.p;Q.p=2;var l=He;He|=4;try{km(e,t.alternate,t)}finally{He=l,Q.p=r,z.T=n}}xt=3}}function Wm(){if(xt===4||xt===3){xt=0,Ar();var e=el,t=Ta,n=kr,r=Um;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?xt=5:(xt=0,Ta=el=null,Jm(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Jr=null),bn(n),t=t.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(hl,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=z.T,l=Q.p,Q.p=2,z.T=null;try{for(var i=e.onRecoverableError,m=0;m<r.length;m++){var _=r[m];i(_.value,{componentStack:_.stack})}}finally{z.T=t,Q.p=l}}(kr&3)!==0&&lo(),ar(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===Su?Ci++:(Ci=0,Su=e):Ci=0,zi(0)}}function Jm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,pi(t)))}function lo(){return Qm(),Zm(),Wm(),eh()}function eh(){if(xt!==5)return!1;var e=el,t=vu;vu=0;var n=bn(kr),r=z.T,l=Q.p;try{Q.p=32>n?32:n,z.T=null,n=xu,xu=null;var i=el,m=kr;if(xt=0,Ta=el=null,kr=0,(He&6)!==0)throw Error(s(331));var _=He;if(He|=4,zm(i.current),Dm(i,i.current,m,n),He=_,zi(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(hl,i)}catch{}return!0}finally{Q.p=l,z.T=r,Jm(e,t)}}function th(e,t,n){t=kn(n,t),t=eu(e.stateNode,t,2),e=Kr(e,t,2),e!==null&&(pl(e,2),ar(e))}function Ye(e,t,n){if(e.tag===3)th(e,e,n);else for(;t!==null;){if(t.tag===3){th(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jr===null||!Jr.has(r))){e=kn(n,e),n=nm(2),r=Kr(t,n,2),r!==null&&(rm(n,r,t,e),pl(r,2),ar(r));break}}t=t.return}}function ku(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new G_;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(gu=!0,l.add(n),e=I_.bind(null,e,t,n),t.then(e,e))}function I_(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Fe===e&&(Me&n)===n&&(it===4||it===3&&(Me&62914560)===Me&&300>bt()-Ws?(He&2)===0&&Ma(e,0):bu|=n,Ra===Me&&(Ra=0)),ar(e)}function nh(e,t){t===0&&(t=Ka()),e=Al(e,t),e!==null&&(pl(e,t),ar(e))}function X_(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),nh(e,n)}function K_(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),nh(e,n)}function F_(e,t){return jr(e,t)}var ao=null,Aa=null,Nu=!1,io=!1,Ru=!1,nl=0;function ar(e){e!==Aa&&e.next===null&&(Aa===null?ao=Aa=e:Aa=Aa.next=e),io=!0,Nu||(Nu=!0,Q_())}function zi(e,t){if(!Ru&&io){Ru=!0;do for(var n=!1,r=ao;r!==null;){if(e!==0){var l=r.pendingLanes;if(l===0)var i=0;else{var m=r.suspendedLanes,_=r.pingedLanes;i=(1<<31-Nt(42|e)+1)-1,i&=l&~(m&~_),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,ih(r,i))}else i=Me,i=ft(r,r===Fe?i:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(i&3)===0||Bt(r,i)||(n=!0,ih(r,i));r=r.next}while(n);Ru=!1}}function P_(){rh()}function rh(){io=Nu=!1;var e=0;nl!==0&&ig()&&(e=nl);for(var t=bt(),n=null,r=ao;r!==null;){var l=r.next,i=lh(r,t);i===0?(r.next=null,n===null?ao=l:n.next=l,l===null&&(Aa=n)):(n=r,(e!==0||(i&3)!==0)&&(io=!0)),r=l}xt!==0&&xt!==5||zi(e),nl!==0&&(nl=0)}function lh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var m=31-Nt(i),_=1<<m,w=l[m];w===-1?((_&n)===0||(_&r)!==0)&&(l[m]=Uo(_,t)):w<=t&&(e.expiredLanes|=_),i&=~_}if(t=Fe,n=Me,n=ft(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Ve===2||Ve===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&gn(r),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Bt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&gn(r),bn(n)){case 2:case 8:n=Xa;break;case 32:n=ml;break;case 268435456:n=tn;break;default:n=ml}return r=ah.bind(null,e),n=jr(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&gn(r),e.callbackPriority=2,e.callbackNode=null,2}function ah(e,t){if(xt!==0&&xt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(lo()&&e.callbackNode!==n)return null;var r=Me;return r=ft(e,e===Fe?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Gm(e,r,t),lh(e,bt()),e.callbackNode!=null&&e.callbackNode===n?ah.bind(null,e):null)}function ih(e,t){if(lo())return null;Gm(e,t,!0)}function Q_(){og(function(){(He&6)!==0?jr(dl,P_):rh()})}function Tu(){if(nl===0){var e=_a;e===0&&(e=Fn,Fn<<=1,(Fn&261888)===0&&(Fn=256)),nl=e}return nl}function sh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Lr(""+e)}function oh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Z_(e,t,n,r,l){if(t==="submit"&&n&&n.stateNode===l){var i=sh((l[ot]||null).action),m=r.submitter;m&&(t=(t=m[ot]||null)?sh(t.formAction):m.getAttribute("formAction"),t!==null&&(i=t,m=null));var _=new na("action","action",null,r,l);e.push({event:_,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nl!==0){var w=m?oh(l,m):new FormData(l);Fc(n,{pending:!0,data:w,method:l.method,action:i},null,w)}}else typeof i=="function"&&(_.preventDefault(),w=m?oh(l,m):new FormData(l),Fc(n,{pending:!0,data:w,method:l.method,action:i},i,w))},currentTarget:l}]})}}for(var Mu=0;Mu<fc.length;Mu++){var ju=fc[Mu],W_=ju.toLowerCase(),J_=ju[0].toUpperCase()+ju.slice(1);qn(W_,"on"+J_)}qn(Hf,"onAnimationEnd"),qn(Gf,"onAnimationIteration"),qn(Vf,"onAnimationStart"),qn("dblclick","onDoubleClick"),qn("focusin","onFocus"),qn("focusout","onBlur"),qn(p_,"onTransitionRun"),qn(__,"onTransitionStart"),qn(g_,"onTransitionCancel"),qn(Yf,"onTransitionEnd"),an("onMouseEnter",["mouseout","mouseover"]),an("onMouseLeave",["mouseout","mouseover"]),an("onPointerEnter",["pointerout","pointerover"]),an("onPointerLeave",["pointerout","pointerover"]),ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bi));function ch(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var m=r.length-1;0<=m;m--){var _=r[m],w=_.instance,M=_.currentTarget;if(_=_.listener,w!==i&&l.isPropagationStopped())break e;i=_,l.currentTarget=M;try{i(l)}catch(H){xs(H)}l.currentTarget=null,i=w}else for(m=0;m<r.length;m++){if(_=r[m],w=_.instance,M=_.currentTarget,_=_.listener,w!==i&&l.isPropagationStopped())break e;i=_,l.currentTarget=M;try{i(l)}catch(H){xs(H)}l.currentTarget=null,i=w}}}}function Te(e,t){var n=t[Ln];n===void 0&&(n=t[Ln]=new Set);var r=e+"__bubble";n.has(r)||(uh(t,e,2,!1),n.add(r))}function Au(e,t,n){var r=0;t&&(r|=4),uh(n,e,r,t)}var so="_reactListening"+Math.random().toString(36).slice(2);function Du(e){if(!e[so]){e[so]=!0,or.forEach(function(n){n!=="selectionchange"&&(eg.has(n)||Au(n,!1,e),Au(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[so]||(t[so]=!0,Au("selectionchange",!1,t))}}function uh(e,t,n,r){switch(Hh(t)){case 2:var l=Tg;break;case 8:l=Mg;break;default:l=Ku}n=l.bind(null,t,n,e),l=void 0,!ti||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ou(e,t,n,r,l){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var _=r.stateNode.containerInfo;if(_===l)break;if(m===4)for(m=r.return;m!==null;){var w=m.tag;if((w===3||w===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;_!==null;){if(m=Qn(_),m===null)return;if(w=m.tag,w===5||w===6||w===26||w===27){r=i=m;continue e}_=_.parentNode}}r=r.return}bl(function(){var M=i,H=ei(n),Y=[];e:{var O=qf.get(e);if(O!==void 0){var B=na,ie=e;switch(e){case"keypress":if(Jn(n)===0)break e;case"keydown":case"keyup":B=_s;break;case"focusin":ie="focus",B=ai;break;case"focusout":ie="blur",B=ai;break;case"beforeblur":case"afterblur":B=ai;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=li;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Go;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=Wo;break;case Hf:case Gf:case Vf:B=qo;break;case Yf:B=ec;break;case"scroll":case"scrollend":B=ms;break;case"wheel":B=nc;break;case"copy":case"cut":case"paste":B=Io;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=gs;break;case"toggle":case"beforetoggle":B=ii}var pe=(t&4)!==0,Xe=!pe&&(e==="scroll"||e==="scrollend"),R=pe?O!==null?O+"Capture":null:O;pe=[];for(var k=M,T;k!==null;){var V=k;if(T=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||T===null||R===null||(V=Zn(k,R),V!=null&&pe.push(Li(k,V,T))),Xe)break;k=k.return}0<pe.length&&(O=new B(O,ie,null,n,H),Y.push({event:O,listeners:pe}))}}if((t&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",O&&n!==cr&&(ie=n.relatedTarget||n.fromElement)&&(Qn(ie)||ie[Tt]))break e;if((B||O)&&(O=H.window===H?H:(O=H.ownerDocument)?O.defaultView||O.parentWindow:window,B?(ie=n.relatedTarget||n.toElement,B=M,ie=ie?Qn(ie):null,ie!==null&&(Xe=h(ie),pe=ie.tag,ie!==Xe||pe!==5&&pe!==27&&pe!==6)&&(ie=null)):(B=null,ie=M),B!==ie)){if(pe=li,V="onMouseLeave",R="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(pe=gs,V="onPointerLeave",R="onPointerEnter",k="pointer"),Xe=B==null?O:Vn(B),T=ie==null?O:Vn(ie),O=new pe(V,k+"leave",B,n,H),O.target=Xe,O.relatedTarget=T,V=null,Qn(H)===M&&(pe=new pe(R,k+"enter",ie,n,H),pe.target=T,pe.relatedTarget=Xe,V=pe),Xe=V,B&&ie)t:{for(pe=tg,R=B,k=ie,T=0,V=R;V;V=pe(V))T++;V=0;for(var me=k;me;me=pe(me))V++;for(;0<T-V;)R=pe(R),T--;for(;0<V-T;)k=pe(k),V--;for(;T--;){if(R===k||k!==null&&R===k.alternate){pe=R;break t}R=pe(R),k=pe(k)}pe=null}else pe=null;B!==null&&fh(Y,O,B,pe,!1),ie!==null&&Xe!==null&&fh(Y,Xe,ie,pe,!0)}}e:{if(O=M?Vn(M):window,B=O.nodeName&&O.nodeName.toLowerCase(),B==="select"||B==="input"&&O.type==="file")var Be=nt;else if(b(O))if(qe)Be=ci;else{Be=Gr;var oe=Tl}else B=O.nodeName,!B||B.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?M&&Ja(M.elementType)&&(Be=nt):Be=oi;if(Be&&(Be=Be(e,M))){S(Y,Be,n,H);break e}oe&&oe(e,O,M),e==="focusout"&&M&&O.type==="number"&&M.memoizedProps.value!=null&&Za(O,"number",O.value)}switch(oe=M?Vn(M):window,e){case"focusin":(b(oe)||oe.contentEditable==="true")&&(oa=oe,oc=M,di=null);break;case"focusout":di=oc=oa=null;break;case"mousedown":cc=!0;break;case"contextmenu":case"mouseup":case"dragend":cc=!1,Lf(Y,n,H);break;case"selectionchange":if(h_)break;case"keydown":case"keyup":Lf(Y,n,H)}var ke;if(aa)e:{switch(e){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else fr?si(e,n)&&(je="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(je="onCompositionStart");je&&(ys&&n.locale!=="ko"&&(fr||je!=="onCompositionStart"?je==="onCompositionEnd"&&fr&&(ke=ni()):(Wn=H,Sn="value"in Wn?Wn.value:Wn.textContent,fr=!0)),oe=oo(M,je),0<oe.length&&(je=new ps(je,e,null,n,H),Y.push({event:je,listeners:oe}),ke?je.data=ke:(ke=ia(n),ke!==null&&(je.data=ke)))),(ke=lc?ac(e,n):ic(e,n))&&(je=oo(M,"onBeforeInput"),0<je.length&&(oe=new ps("onBeforeInput","beforeinput",null,n,H),Y.push({event:oe,listeners:je}),oe.data=ke)),Z_(Y,e,M,n,H)}ch(Y,t)})}function Li(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oo(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Zn(e,n),l!=null&&r.unshift(Li(e,l,i)),l=Zn(e,t),l!=null&&r.push(Li(e,l,i))),e.tag===3)return r;e=e.return}return[]}function tg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function fh(e,t,n,r,l){for(var i=t._reactName,m=[];n!==null&&n!==r;){var _=n,w=_.alternate,M=_.stateNode;if(_=_.tag,w!==null&&w===r)break;_!==5&&_!==26&&_!==27||M===null||(w=M,l?(M=Zn(n,i),M!=null&&m.unshift(Li(n,M,w))):l||(M=Zn(n,i),M!=null&&m.push(Li(n,M,w)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var ng=/\r\n?/g,rg=/\u0000|\uFFFD/g;function dh(e){return(typeof e=="string"?e:""+e).replace(ng,`
`).replace(rg,"")}function mh(e,t){return t=dh(t),dh(e)===t}function Ie(e,t,n,r,l,i){switch(n){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||et(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&et(e,""+r);break;case"className":Wl(e,"class",r);break;case"tabIndex":Wl(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Wl(e,n,r);break;case"style":ea(e,r,i);break;case"data":if(t!=="object"){Wl(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=Lr(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Ie(e,t,"name",l.name,l,null),Ie(e,t,"formEncType",l.formEncType,l,null),Ie(e,t,"formMethod",l.formMethod,l,null),Ie(e,t,"formTarget",l.formTarget,l,null)):(Ie(e,t,"encType",l.encType,l,null),Ie(e,t,"method",l.method,l,null),Ie(e,t,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=Lr(""+r),e.setAttribute(n,r);break;case"onClick":r!=null&&(e.onclick=tt);break;case"onScroll":r!=null&&Te("scroll",e);break;case"onScrollEnd":r!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}n=Lr(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":r===!0?e.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Te("beforetoggle",e),Te("toggle",e),Zl(e,"popover",r);break;case"xlinkActuate":$t(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":$t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":$t(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":$t(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":$t(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":$t(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":$t(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":$t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":$t(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Zl(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Pt.get(n)||n,Zl(e,n,r))}}function Cu(e,t,n,r,l,i){switch(n){case"style":ea(e,r,i);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof r=="string"?et(e,r):(typeof r=="number"||typeof r=="bigint")&&et(e,""+r);break;case"onScroll":r!=null&&Te("scroll",e);break;case"onScrollEnd":r!=null&&Te("scrollend",e);break;case"onClick":r!=null&&(e.onclick=tt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Pa.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),i=e[ot]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof r=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,l);break e}n in e?e[n]=r:r===!0?e.setAttribute(n,""):Zl(e,n,r)}}}function Ct(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var r=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var m=n[i];if(m!=null)switch(i){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ie(e,t,i,m,n,null)}}l&&Ie(e,t,"srcSet",n.srcSet,n,null),r&&Ie(e,t,"src",n.src,n,null);return;case"input":Te("invalid",e);var _=i=m=l=null,w=null,M=null;for(r in n)if(n.hasOwnProperty(r)){var H=n[r];if(H!=null)switch(r){case"name":l=H;break;case"type":m=H;break;case"checked":w=H;break;case"defaultChecked":M=H;break;case"value":i=H;break;case"defaultValue":_=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,t));break;default:Ie(e,t,r,H,n,null)}}cs(e,i,_,w,M,m,l,!1);return;case"select":Te("invalid",e),r=m=i=null;for(l in n)if(n.hasOwnProperty(l)&&(_=n[l],_!=null))switch(l){case"value":i=_;break;case"defaultValue":m=_;break;case"multiple":r=_;default:Ie(e,t,l,_,n,null)}t=i,n=m,e.multiple=!!r,t!=null?yn(e,!!r,t,!1):n!=null&&yn(e,!!r,n,!0);return;case"textarea":Te("invalid",e),i=l=r=null;for(m in n)if(n.hasOwnProperty(m)&&(_=n[m],_!=null))switch(m){case"value":r=_;break;case"defaultValue":l=_;break;case"children":i=_;break;case"dangerouslySetInnerHTML":if(_!=null)throw Error(s(91));break;default:Ie(e,t,m,_,n,null)}gl(e,r,l,i);return;case"option":for(w in n)if(n.hasOwnProperty(w)&&(r=n[w],r!=null))switch(w){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ie(e,t,w,r,n,null)}return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(r=0;r<Bi.length;r++)Te(Bi[r],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in n)if(n.hasOwnProperty(M)&&(r=n[M],r!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ie(e,t,M,r,n,null)}return;default:if(Ja(t)){for(H in n)n.hasOwnProperty(H)&&(r=n[H],r!==void 0&&Cu(e,t,H,r,n,void 0));return}}for(_ in n)n.hasOwnProperty(_)&&(r=n[_],r!=null&&Ie(e,t,_,r,n,null))}function lg(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,m=null,_=null,w=null,M=null,H=null;for(B in n){var Y=n[B];if(n.hasOwnProperty(B)&&Y!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":w=Y;default:r.hasOwnProperty(B)||Ie(e,t,B,null,r,Y)}}for(var O in r){var B=r[O];if(Y=n[O],r.hasOwnProperty(O)&&(B!=null||Y!=null))switch(O){case"type":i=B;break;case"name":l=B;break;case"checked":M=B;break;case"defaultChecked":H=B;break;case"value":m=B;break;case"defaultValue":_=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,t));break;default:B!==Y&&Ie(e,t,O,B,r,Y)}}q(e,m,_,w,M,H,i,l);return;case"select":B=m=_=O=null;for(i in n)if(w=n[i],n.hasOwnProperty(i)&&w!=null)switch(i){case"value":break;case"multiple":B=w;default:r.hasOwnProperty(i)||Ie(e,t,i,null,r,w)}for(l in r)if(i=r[l],w=n[l],r.hasOwnProperty(l)&&(i!=null||w!=null))switch(l){case"value":O=i;break;case"defaultValue":_=i;break;case"multiple":m=i;default:i!==w&&Ie(e,t,l,i,r,w)}t=_,n=m,r=B,O!=null?yn(e,!!n,O,!1):!!r!=!!n&&(t!=null?yn(e,!!n,t,!0):yn(e,!!n,n?[]:"",!1));return;case"textarea":B=O=null;for(_ in n)if(l=n[_],n.hasOwnProperty(_)&&l!=null&&!r.hasOwnProperty(_))switch(_){case"value":break;case"children":break;default:Ie(e,t,_,null,r,l)}for(m in r)if(l=r[m],i=n[m],r.hasOwnProperty(m)&&(l!=null||i!=null))switch(m){case"value":O=l;break;case"defaultValue":B=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==i&&Ie(e,t,m,l,r,i)}Wa(e,O,B);return;case"option":for(var ie in n)if(O=n[ie],n.hasOwnProperty(ie)&&O!=null&&!r.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Ie(e,t,ie,null,r,O)}for(w in r)if(O=r[w],B=n[w],r.hasOwnProperty(w)&&O!==B&&(O!=null||B!=null))switch(w){case"selected":e.selected=O&&typeof O!="function"&&typeof O!="symbol";break;default:Ie(e,t,w,O,r,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pe in n)O=n[pe],n.hasOwnProperty(pe)&&O!=null&&!r.hasOwnProperty(pe)&&Ie(e,t,pe,null,r,O);for(M in r)if(O=r[M],B=n[M],r.hasOwnProperty(M)&&O!==B&&(O!=null||B!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(s(137,t));break;default:Ie(e,t,M,O,r,B)}return;default:if(Ja(t)){for(var Xe in n)O=n[Xe],n.hasOwnProperty(Xe)&&O!==void 0&&!r.hasOwnProperty(Xe)&&Cu(e,t,Xe,void 0,r,O);for(H in r)O=r[H],B=n[H],!r.hasOwnProperty(H)||O===B||O===void 0&&B===void 0||Cu(e,t,H,O,r,B);return}}for(var R in n)O=n[R],n.hasOwnProperty(R)&&O!=null&&!r.hasOwnProperty(R)&&Ie(e,t,R,null,r,O);for(Y in r)O=r[Y],B=n[Y],!r.hasOwnProperty(Y)||O===B||O==null&&B==null||Ie(e,t,Y,O,r,B)}function hh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ag(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var l=n[r],i=l.transferSize,m=l.initiatorType,_=l.duration;if(i&&_&&hh(m)){for(m=0,_=l.responseEnd,r+=1;r<n.length;r++){var w=n[r],M=w.startTime;if(M>_)break;var H=w.transferSize,Y=w.initiatorType;H&&hh(Y)&&(w=w.responseEnd,m+=H*(w<_?1:(_-M)/(w-M)))}if(--r,t+=8*(i+m)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zu=null,Bu=null;function co(e){return e.nodeType===9?e:e.ownerDocument}function ph(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _h(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Lu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Uu=null;function ig(){var e=window.event;return e&&e.type==="popstate"?e===Uu?!1:(Uu=e,!0):(Uu=null,!1)}var gh=typeof setTimeout=="function"?setTimeout:void 0,sg=typeof clearTimeout=="function"?clearTimeout:void 0,bh=typeof Promise=="function"?Promise:void 0,og=typeof queueMicrotask=="function"?queueMicrotask:typeof bh<"u"?function(e){return bh.resolve(null).then(e).catch(cg)}:gh;function cg(e){setTimeout(function(){throw e})}function rl(e){return e==="head"}function yh(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(r===0){e.removeChild(l),za(t);return}r--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")r++;else if(n==="html")Ui(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ui(n);for(var i=n.firstChild;i;){var m=i.nextSibling,_=i.nodeName;i[Hn]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=m}}else n==="body"&&Ui(e.ownerDocument.body);n=l}while(n);za(t)}function vh(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=r}while(n)}function Hu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Hu(n),Gn(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function ug(e,t,n,r){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Hn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=jn(e.nextSibling),e===null)break}return null}function fg(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=jn(e.nextSibling),e===null))return null;return e}function xh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=jn(e.nextSibling),e===null))return null;return e}function Gu(e){return e.data==="$?"||e.data==="$~"}function Vu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function dg(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function jn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Yu=null;function Sh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return jn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function wh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Eh(e,t,n){switch(t=co(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Ui(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Gn(e)}var An=new Map,kh=new Set;function uo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Nr=Q.d;Q.d={f:mg,r:hg,D:pg,C:_g,L:gg,m:bg,X:vg,S:yg,M:xg};function mg(){var e=Nr.f(),t=to();return e||t}function hg(e){var t=qt(e);t!==null&&t.tag===5&&t.type==="form"?Yd(t):Nr.r(e)}var Da=typeof document>"u"?null:document;function Nh(e,t,n){var r=Da;if(r&&typeof t=="string"&&t){var l=Ut(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),kh.has(l)||(kh.add(l),e={rel:e,crossOrigin:n,href:t},r.querySelector(l)===null&&(t=r.createElement("link"),Ct(t,"link",e),Ze(t),r.head.appendChild(t)))}}function pg(e){Nr.D(e),Nh("dns-prefetch",e,null)}function _g(e,t){Nr.C(e,t),Nh("preconnect",e,t)}function gg(e,t,n){Nr.L(e,t,n);var r=Da;if(r&&e&&t){var l='link[rel="preload"][as="'+Ut(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Ut(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Ut(n.imageSizes)+'"]')):l+='[href="'+Ut(e)+'"]';var i=l;switch(t){case"style":i=Oa(e);break;case"script":i=Ca(e)}An.has(i)||(e=N({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),An.set(i,e),r.querySelector(l)!==null||t==="style"&&r.querySelector(Hi(i))||t==="script"&&r.querySelector(Gi(i))||(t=r.createElement("link"),Ct(t,"link",e),Ze(t),r.head.appendChild(t)))}}function bg(e,t){Nr.m(e,t);var n=Da;if(n&&e){var r=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Ut(r)+'"][href="'+Ut(e)+'"]',i=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ca(e)}if(!An.has(i)&&(e=N({rel:"modulepreload",href:e},t),An.set(i,e),n.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Gi(i)))return}r=n.createElement("link"),Ct(r,"link",e),Ze(r),n.head.appendChild(r)}}}function yg(e,t,n){Nr.S(e,t,n);var r=Da;if(r&&e){var l=Ft(r).hoistableStyles,i=Oa(e);t=t||"default";var m=l.get(i);if(!m){var _={loading:0,preload:null};if(m=r.querySelector(Hi(i)))_.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},n),(n=An.get(i))&&qu(e,n);var w=m=r.createElement("link");Ze(w),Ct(w,"link",e),w._p=new Promise(function(M,H){w.onload=M,w.onerror=H}),w.addEventListener("load",function(){_.loading|=1}),w.addEventListener("error",function(){_.loading|=2}),_.loading|=4,fo(m,t,r)}m={type:"stylesheet",instance:m,count:1,state:_},l.set(i,m)}}}function vg(e,t){Nr.X(e,t);var n=Da;if(n&&e){var r=Ft(n).hoistableScripts,l=Ca(e),i=r.get(l);i||(i=n.querySelector(Gi(l)),i||(e=N({src:e,async:!0},t),(t=An.get(l))&&$u(e,t),i=n.createElement("script"),Ze(i),Ct(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(l,i))}}function xg(e,t){Nr.M(e,t);var n=Da;if(n&&e){var r=Ft(n).hoistableScripts,l=Ca(e),i=r.get(l);i||(i=n.querySelector(Gi(l)),i||(e=N({src:e,async:!0,type:"module"},t),(t=An.get(l))&&$u(e,t),i=n.createElement("script"),Ze(i),Ct(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(l,i))}}function Rh(e,t,n,r){var l=(l=K.current)?uo(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Oa(n.href),n=Ft(l).hoistableStyles,r=n.get(t),r||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Oa(n.href);var i=Ft(l).hoistableStyles,m=i.get(e);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,m),(i=l.querySelector(Hi(e)))&&!i._p&&(m.instance=i,m.state.loading=5),An.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},An.set(e,n),i||Sg(l,e,n,m.state))),t&&r===null)throw Error(s(528,""));return m}if(t&&r!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ca(n),n=Ft(l).hoistableScripts,r=n.get(t),r||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Oa(e){return'href="'+Ut(e)+'"'}function Hi(e){return'link[rel="stylesheet"]['+e+"]"}function Th(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function Sg(e,t,n,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),Ct(t,"link",n),Ze(t),e.head.appendChild(t))}function Ca(e){return'[src="'+Ut(e)+'"]'}function Gi(e){return"script[async]"+e}function Mh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+Ut(n.href)+'"]');if(r)return t.instance=r,Ze(r),r;var l=N({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Ze(r),Ct(r,"style",l),fo(r,n.precedence,e),t.instance=r;case"stylesheet":l=Oa(n.href);var i=e.querySelector(Hi(l));if(i)return t.state.loading|=4,t.instance=i,Ze(i),i;r=Th(n),(l=An.get(l))&&qu(r,l),i=(e.ownerDocument||e).createElement("link"),Ze(i);var m=i;return m._p=new Promise(function(_,w){m.onload=_,m.onerror=w}),Ct(i,"link",r),t.state.loading|=4,fo(i,n.precedence,e),t.instance=i;case"script":return i=Ca(n.src),(l=e.querySelector(Gi(i)))?(t.instance=l,Ze(l),l):(r=n,(l=An.get(i))&&(r=N({},n),$u(r,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ze(l),Ct(l,"link",r),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,fo(r,n.precedence,e));return t.instance}function fo(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,i=l,m=0;m<r.length;m++){var _=r[m];if(_.dataset.precedence===t)i=_;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function qu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function $u(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var mo=null;function jh(e,t,n){if(mo===null){var r=new Map,l=mo=new Map;l.set(n,r)}else l=mo,r=l.get(n),r||(r=new Map,l.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var i=n[l];if(!(i[Hn]||i[st]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var m=i.getAttribute(t)||"";m=e+m;var _=r.get(m);_?_.push(i):r.set(m,[i])}}return r}function Ah(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function wg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Dh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Eg(e,t,n,r){if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=Oa(r.href),i=t.querySelector(Hi(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ho.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,Ze(i);return}i=t.ownerDocument||t,r=Th(r),(l=An.get(l))&&qu(r,l),i=i.createElement("link"),Ze(i);var m=i;m._p=new Promise(function(_,w){m.onload=_,m.onerror=w}),Ct(i,"link",r),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ho.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Iu=0;function kg(e,t){return e.stylesheets&&e.count===0&&_o(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&_o(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Iu===0&&(Iu=62500*ag());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_o(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Iu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function ho(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_o(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var po=null;function _o(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,po=new Map,t.forEach(Ng,e),po=null,ho.call(e))}function Ng(e,t){if(!(t.state.loading&4)){var n=po.get(e);if(n)var r=n.get(null);else{n=new Map,po.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var m=l[i];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),r=m)}r&&n.set(null,r)}l=t.instance,m=l.getAttribute("data-precedence"),i=n.get(m)||r,i===r&&n.set(null,l),n.set(m,l),this.count++,r=ho.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Vi={$$typeof:fe,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function Rg(e,t,n,r,l,i,m,_,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pn(0),this.hiddenUpdates=Pn(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Oh(e,t,n,r,l,i,m,_,w,M,H,Y){return e=new Rg(e,t,n,m,w,M,H,Y,_),t=1,i===!0&&(t|=24),i=on(3,null,null,t),e.current=i,i.stateNode=e,t=Ec(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:r,isDehydrated:n,cache:t},Tc(i),e}function Ch(e){return e?(e=fa,e):fa}function zh(e,t,n,r,l,i){l=Ch(l),r.context===null?r.context=l:r.pendingContext=l,r=Xr(t),r.payload={element:n},i=i===void 0?null:i,i!==null&&(r.callback=i),n=Kr(e,r,t),n!==null&&(en(n,e,t),yi(n,e,t))}function Bh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xu(e,t){Bh(e,t),(e=e.alternate)&&Bh(e,t)}function Lh(e){if(e.tag===13||e.tag===31){var t=Al(e,67108864);t!==null&&en(t,e,67108864),Xu(e,67108864)}}function Uh(e){if(e.tag===13||e.tag===31){var t=mn();t=zr(t);var n=Al(e,t);n!==null&&en(n,e,t),Xu(e,t)}}var go=!0;function Tg(e,t,n,r){var l=z.T;z.T=null;var i=Q.p;try{Q.p=2,Ku(e,t,n,r)}finally{Q.p=i,z.T=l}}function Mg(e,t,n,r){var l=z.T;z.T=null;var i=Q.p;try{Q.p=8,Ku(e,t,n,r)}finally{Q.p=i,z.T=l}}function Ku(e,t,n,r){if(go){var l=Fu(r);if(l===null)Ou(e,t,r,bo,n),Gh(e,r);else if(Ag(l,e,t,n,r))r.stopPropagation();else if(Gh(e,r),t&4&&-1<jg.indexOf(e)){for(;l!==null;){var i=qt(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var m=Rt(i.pendingLanes);if(m!==0){var _=i;for(_.pendingLanes|=2,_.entangledLanes|=2;m;){var w=1<<31-Nt(m);_.entanglements[1]|=w,m&=~w}ar(i),(He&6)===0&&(Js=bt()+500,zi(0))}}break;case 31:case 13:_=Al(i,2),_!==null&&en(_,i,2),to(),Xu(i,2)}if(i=Fu(r),i===null&&Ou(e,t,r,bo,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Ou(e,t,r,null,n)}}function Fu(e){return e=ei(e),Pu(e)}var bo=null;function Pu(e){if(bo=null,e=Qn(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return bo=e,null}function Hh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fl()){case dl:return 2;case Xa:return 8;case ml:case Kt:return 32;case tn:return 268435456;default:return 32}default:return 32}}var Qu=!1,ll=null,al=null,il=null,Yi=new Map,qi=new Map,sl=[],jg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gh(e,t){switch(e){case"focusin":case"focusout":ll=null;break;case"dragenter":case"dragleave":al=null;break;case"mouseover":case"mouseout":il=null;break;case"pointerover":case"pointerout":Yi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qi.delete(t.pointerId)}}function $i(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=qt(t),t!==null&&Lh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ag(e,t,n,r,l){switch(t){case"focusin":return ll=$i(ll,e,t,n,r,l),!0;case"dragenter":return al=$i(al,e,t,n,r,l),!0;case"mouseover":return il=$i(il,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Yi.set(i,$i(Yi.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,qi.set(i,$i(qi.get(i)||null,e,t,n,r,l)),!0}return!1}function Vh(e){var t=Qn(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,Fa(e.priority,function(){Uh(n)});return}}else if(t===31){if(t=g(n),t!==null){e.blockedOn=t,Fa(e.priority,function(){Uh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fu(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cr=r,n.target.dispatchEvent(r),cr=null}else return t=qt(n),t!==null&&Lh(t),e.blockedOn=n,!1;t.shift()}return!0}function Yh(e,t,n){yo(e)&&n.delete(t)}function Dg(){Qu=!1,ll!==null&&yo(ll)&&(ll=null),al!==null&&yo(al)&&(al=null),il!==null&&yo(il)&&(il=null),Yi.forEach(Yh),qi.forEach(Yh)}function vo(e,t){e.blockedOn===t&&(e.blockedOn=null,Qu||(Qu=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Dg)))}var xo=null;function qh(e){xo!==e&&(xo=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){xo===e&&(xo=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],l=e[t+2];if(typeof r!="function"){if(Pu(r||n)===null)continue;break}var i=qt(n);i!==null&&(e.splice(t,3),t-=3,Fc(i,{pending:!0,data:l,method:n.method,action:r},r,l))}}))}function za(e){function t(w){return vo(w,e)}ll!==null&&vo(ll,e),al!==null&&vo(al,e),il!==null&&vo(il,e),Yi.forEach(t),qi.forEach(t);for(var n=0;n<sl.length;n++){var r=sl[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<sl.length&&(n=sl[0],n.blockedOn===null);)Vh(n),n.blockedOn===null&&sl.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var l=n[r],i=n[r+1],m=l[ot]||null;if(typeof i=="function")m||qh(n);else if(m){var _=null;if(i&&i.hasAttribute("formAction")){if(l=i,m=i[ot]||null)_=m.formAction;else if(Pu(l)!==null)continue}else _=m.action;typeof _=="function"?n[r+1]=_:(n.splice(r,3),r-=3),qh(n)}}}function $h(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(m){return l=m})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Zu(e){this._internalRoot=e}So.prototype.render=Zu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,r=mn();zh(n,r,e,t,null,null)},So.prototype.unmount=Zu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zh(e.current,2,null,e,null,null),to(),t[Tt]=null}};function So(e){this._internalRoot=e}So.prototype.unstable_scheduleHydration=function(e){if(e){var t=dt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sl.length&&t!==0&&t<sl[n].priority;n++);sl.splice(n,0,e),n===0&&Vh(e)}};var Ih=a.version;if(Ih!=="19.2.7")throw Error(s(527,Ih,"19.2.7"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Og={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wo.isDisabled&&wo.supportsFiber)try{hl=wo.inject(Og),yt=wo}catch{}}return Xi.createRoot=function(e,t){if(!u(e))throw Error(s(299));var n=!1,r="",l=Wd,i=Jd,m=em;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=Oh(e,1,!1,null,null,n,r,null,l,i,m,$h),e[Tt]=t.current,Du(e),new Zu(t)},Xi.hydrateRoot=function(e,t,n){if(!u(e))throw Error(s(299));var r=!1,l="",i=Wd,m=Jd,_=em,w=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError),n.formState!==void 0&&(w=n.formState)),t=Oh(e,1,!0,t,n??null,r,l,w,i,m,_,$h),t.context=Ch(null),n=t.current,r=mn(),r=zr(r),l=Xr(r),l.callback=null,Kr(n,l,r),n=r,t.current.lanes=n,pl(t,n),ar(t),e[Tt]=t.current,Du(e),new So(t)},Xi.version="19.2.7",Xi}var tp;function Ig(){if(tp)return ef.exports;tp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(a){console.error(a)}}return o(),ef.exports=$g(),ef.exports}var Xg=Ig();const Kg=Fp(Xg),np=o=>{let a;const c=new Set,s=(y,x)=>{const N=typeof y=="function"?y(a):y;if(!Object.is(N,a)){const j=a;a=x??(typeof N!="object"||N===null)?N:Object.assign({},a,N),c.forEach(F=>F(a,j))}},u=()=>a,g={setState:s,getState:u,getInitialState:()=>v,subscribe:y=>(c.add(y),()=>c.delete(y))},v=a=o(s,u,g);return g},Fg=(o=>o?np(o):np),Pg=o=>o;function Qg(o,a=Pg){const c=Wi.useSyncExternalStore(o.subscribe,Wi.useCallback(()=>a(o.getState()),[o,a]),Wi.useCallback(()=>a(o.getInitialState()),[o,a]));return Wi.useDebugValue(c),c}const rp=o=>{const a=Fg(o),c=s=>Qg(a,s);return Object.assign(c,a),c},Zg=(o=>o?rp(o):rp);function Wg(){const o=new Uint8Array(16);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(o);else for(let c=0;c<o.length;c+=1)o[c]=Math.floor(Math.random()*256);let a="";for(const c of o)a+=c.toString(16).padStart(2,"0");return a}const Tf="pkp.user",Mf="pkp.savedDevices",jf="pkp.ideDrafts",Af="pkp.ideSettings",ts="Prototype Version 0.6.7";function Co(o){try{const a=localStorage.getItem(o);return a?JSON.parse(a):null}catch{return null}}function zo(o,a){try{localStorage.setItem(o,JSON.stringify(a))}catch{}}function Jg(){const o=Co(Tf);return o&&typeof o.username=="string"&&typeof o.userID=="string"?o:null}function lf(o){zo(Tf,o)}function Df(){return Co(Mf)??[]}function ns(o){zo(Mf,o)}function eb(){ns([])}function tb(){try{localStorage.removeItem(Tf),localStorage.removeItem(Mf),localStorage.removeItem(jf),localStorage.removeItem(Af)}catch{}}function af(){var o;return((o=Co(jf))==null?void 0:o.filter(a=>a.path&&typeof a.content=="string"))??[]}function sf(o){zo(jf,o)}function lp(){const o=Co(Af)??{};return{clearTerminalOnRun:!!o.clearTerminalOnRun,simplifiedErrors:o.simplifiedErrors!==!1}}function nb(o){zo(Af,o)}function of(o){const a=Df(),c=a.findIndex(s=>s.deviceID===o.deviceID);return c>=0?a[c]=o:a.push(o),ns(a),a}function rb(o){const a=Df().filter(c=>c.deviceID!==o);return ns(a),a}const yf="b8e06067-62ad-41ba-9231-206ae80ab551",lb="f897177b-aee8-4767-8ecc-cc694fd5fce0",ab="f897177b-aee8-4767-8ecc-cc694fd5fce1",cf=20,ib=12,sb=new TextEncoder,ob=new TextDecoder;function cb(o){return new Promise(a=>setTimeout(a,o))}function Bo(){return typeof navigator<"u"&&"bluetooth"in navigator}function vf(o){return o?o.startsWith("PicoW-")?o.slice(6):o:"Pico"}async function ub(){if(!Bo())throw new Error("Web Bluetooth er ikke tilgængelig i denne browser.");return navigator.bluetooth.requestDevice({filters:[{services:[yf]},{namePrefix:"PicoW-"}],optionalServices:[yf]})}async function Pp(){if(!Bo()||!navigator.bluetooth.getDevices)return[];try{return await navigator.bluetooth.getDevices()}catch{return[]}}class fb{constructor(){ce(this,"device",null);ce(this,"writeChar",null);ce(this,"notifyChar",null);ce(this,"buffer","");ce(this,"writeQueue",Promise.resolve());ce(this,"disconnectNotified",!1);ce(this,"onLine",()=>{});ce(this,"onDisconnect",()=>{});ce(this,"handleNotification",a=>{const c=a.target;if(!(c!=null&&c.value))return;this.buffer+=ob.decode(c.value.buffer);let s=this.buffer.indexOf(`
`);for(;s>=0;){const u=this.buffer.slice(0,s).trim();this.buffer=this.buffer.slice(s+1),u&&this.onLine(u),s=this.buffer.indexOf(`
`)}});ce(this,"handleDisconnected",()=>{var a;this.disconnectNotified||(this.disconnectNotified=!0,(a=this.device)==null||a.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.writeChar=null,this.notifyChar=null,this.onDisconnect())})}get connected(){var a,c;return!!((c=(a=this.device)==null?void 0:a.gatt)!=null&&c.connected)}async connect(a){var u;this.device&&this.device!==a&&this.device.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.device=a,this.buffer="",this.disconnectNotified=!1,a.removeEventListener("gattserverdisconnected",this.handleDisconnected),a.addEventListener("gattserverdisconnected",this.handleDisconnected);const c=await((u=a.gatt)==null?void 0:u.connect());if(!c)throw new Error("Kunne ikke åbne Bluetooth-forbindelsen.");const s=await c.getPrimaryService(yf);this.writeChar=await s.getCharacteristic(lb),this.notifyChar=await s.getCharacteristic(ab),await this.notifyChar.startNotifications(),this.notifyChar.addEventListener("characteristicvaluechanged",this.handleNotification)}writeLine(a){const c=this.writeQueue.then(()=>this.doWrite(a));return this.writeQueue=c.catch(()=>{}),c}async doWrite(a){if(!this.writeChar)throw new Error("Ingen forbindelse.");const c=sb.encode(`${a}
`),u=this.writeChar.properties.writeWithoutResponse&&typeof this.writeChar.writeValueWithoutResponse=="function"?this.writeChar.writeValueWithoutResponse.bind(this.writeChar):this.writeChar.writeValue.bind(this.writeChar);for(let h=0;h<c.length;h+=cf){const p=c.slice(h,h+cf);await u(p),h+cf<c.length&&await cb(ib)}}disconnect(){var c;const a=this.device;(c=a==null?void 0:a.gatt)!=null&&c.connected?a.gatt.disconnect():this.handleDisconnected()}}class db{constructor(a,c){ce(this,"send");ce(this,"onMessage");ce(this,"inActive",!1);ce(this,"inExpectedTotal",0);ce(this,"inStreamId",0);ce(this,"inParts",new Map);ce(this,"inProgress",null);ce(this,"outPendingLines",null);ce(this,"outWaitingAck",!1);ce(this,"outStreamId",0);ce(this,"outNextStreamId",1);ce(this,"outCache",new Map);ce(this,"outProgress",null);ce(this,"outResolve",null);ce(this,"outReject",null);this.send=a,this.onMessage=c}reset(){this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear(),this.inProgress=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outStreamId=0,this.outCache.clear(),this.outProgress=null,this.outResolve=null,this.outReject=null}handleLine(a){var s;if(a.startsWith("prep,")){const u=a.split(","),h=u.length>=2&&/^\d+$/.test(u[1])?parseInt(u[1],10):null,p=u.length>=3&&/^\d+$/.test(u[2])?parseInt(u[2],10):0;h!==null&&h>0&&(this.inActive=!0,this.inExpectedTotal=h,this.inStreamId=p,this.inParts.clear(),this.send(p>0?`ack:prep,${p}`:"ack:prep"));return}if(a==="ack:prep"||a===`ack:prep,${this.outStreamId}`){this.flushOutbound();return}if(a.startsWith("miss,")){const u=a.split(",");if(u.length>=3&&/^\d+$/.test(u[1])&&/^\d+$/.test(u[2])){const h=parseInt(u[1],10),p=parseInt(u[2],10),g=this.outCache.get(p);h===this.outStreamId&&g&&this.send(g)}return}const c=this.parseNumbered(a);if(c){const{idx:u,payload:h}=c;if(!this.inActive){this.onMessage(h);return}this.inParts.has(u)||(this.inParts.set(u,h),(s=this.inProgress)==null||s.call(this,this.inParts.size,this.inExpectedTotal));let p=0;for(let g=1;g<=this.inExpectedTotal;g+=1)if(!this.inParts.has(g)){p=g;break}if(p>0&&this.inStreamId>0&&u>p&&this.send(`miss,${this.inStreamId},${p}`),this.inParts.size>=this.inExpectedTotal){for(let g=1;g<=this.inExpectedTotal;g+=1){const v=this.inParts.get(g);v!==void 0&&this.onMessage(v)}this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear()}return}this.onMessage(a)}setInboundProgress(a){this.inProgress=a}async sendReliable(a,c){if(this.outPendingLines!==null||this.outWaitingAck)throw new Error("Reliable stream is already sending.");const s=a.length===0?[""]:a;this.outPendingLines=[...s],this.outWaitingAck=!0,this.outProgress=c??null,this.outStreamId=this.outNextStreamId,this.outNextStreamId+=1,this.outCache.clear();const u=new Promise((h,p)=>{this.outResolve=h,this.outReject=p});try{await this.send(`prep,${s.length},${this.outStreamId}`)}catch(h){throw this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null,h}await u}async flushOutbound(){var a,c,s,u;if(!this.outWaitingAck||this.outPendingLines===null){this.outWaitingAck=!1,this.outProgress=null,(a=this.outResolve)==null||a.call(this),this.outResolve=null,this.outReject=null;return}try{const h=this.outPendingLines.length;for(let p=0;p<h;p+=1){const g=this.outPendingLines[p],v=`${p+1}-${g}`;this.outCache.set(p+1,v),await this.send(v),(c=this.outProgress)==null||c.call(this,p+1,h,g)}(s=this.outResolve)==null||s.call(this)}catch(h){(u=this.outReject)==null||u.call(this,h)}finally{this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null}}parseNumbered(a){const c=a.indexOf("-");if(c<=0)return null;const s=a.slice(0,c);if(!/^\d+$/.test(s))return null;const u=parseInt(s,10);return u<1?null:{idx:u,payload:a.slice(c+1)}}}const qa=11,rs=31,mb=2,hb=60,Ga=4,Va=40;function pb(o,a){return Math.max(14,Math.min(56,Math.min(o,a)*.05))}function Qp(o,a,c=qa,s=rs){const u=pb(o,a),h=Math.max(1,o-2*u),p=Math.max(1,a-2*u);return{areaW:o,areaH:a,cols:c,rows:s,margin:u,stepX:h/Math.max(1,c-1),stepY:p/Math.max(1,s-1)}}function Zp(o,a){return a.margin+o/2*a.stepX}function Wp(o,a){const c=a.margin+o/2*a.stepY;return a.areaH-c}function Ji(o,a){return o.centerX2===null||o.centerY2===null||o.spanX===null||o.spanY===null?null:{cx:Zp(o.centerX2,a),cy:Wp(o.centerY2,a),width:o.spanX*a.stepX,height:o.spanY*a.stepY}}function _b(o){const a=[];for(let c=0;c<o.cols;c+=1)for(let s=0;s<o.rows;s+=1)a.push({x:o.margin+c*o.stepX,y:o.areaH-(o.margin+s*o.stepY)});return a}function Ro(o,a,c,s,u){const h=(v,y,x,N)=>{const j=y%2,F=N*2;let P=j,ne=1/0;for(let G=j;G<=F;G+=2){const $=Math.abs(x(G)-v);$<ne&&(ne=$,P=G)}return Math.max(y,Math.min(F-y,P))},p=h(o,c,v=>Zp(v,u),u.cols-1),g=h(a,s,v=>Wp(v,u),u.rows-1);return{centerX2:p,centerY2:g}}const Xl=6e3,gb=15,Ao=[32,64,128,192],bb=Xl*10,yb=3500,vb=8e3,xb=2,Sb=Xl,wb=Xl*8;function uf(o){return new Promise(a=>setTimeout(a,o))}function Ba(o){if(o!=null&&o.aborted)throw new DOMException("BLE file read cancelled","AbortError")}function ap(o){return o instanceof DOMException&&o.name==="AbortError"}function cl(o){return o.replace(/[\r\n,]/g," ").trim()}class Eb{constructor(a={}){ce(this,"transport",new fb);ce(this,"stream");ce(this,"events");ce(this,"waiters",[]);ce(this,"collectingLayout",!1);ce(this,"layoutBuffer",[]);ce(this,"layoutResolve",null);ce(this,"collectingLines",!1);ce(this,"lineBuffer",[]);ce(this,"lineResolve",null);ce(this,"lineReject",null);ce(this,"lineCollectId",0);ce(this,"controlPumpActive",!1);ce(this,"pendingButtons",[]);ce(this,"pendingSliders",new Map);ce(this,"pendingToggles",new Map);ce(this,"expectingDisconnect",!1);ce(this,"disconnectMessage",null);ce(this,"busy",!1);ce(this,"fsCapabilities",null);this.events=a,this.stream=new db(c=>this.transport.writeLine(c),c=>this.onDeviceMessage(c)),this.transport.onLine=c=>this.stream.handleLine(c),this.transport.onDisconnect=()=>this.handleDisconnect()}get device(){return this.transport.device}get deviceName(){var a;return vf((a=this.transport.device)==null?void 0:a.name)}get connected(){return this.transport.connected}setBusy(a){if(this.busy=a,a){this.pendingButtons=[],this.pendingSliders.clear(),this.pendingToggles.clear();return}this.pumpControls()}log(a,c){var s,u;(u=(s=this.events).onLog)==null||u.call(s,a,c)}progress(a,c){var s,u;(u=(s=this.events).onProgress)==null||u.call(s,a,c)}onDeviceMessage(a){var s,u;if(a==="disconnect"||a==="disconnect_private"){const h=a==="disconnect_private"?"Du blev afbrudt, fordi enheden er privat, og andre brugere ikke må forbinde.":"Enheden afbrød forbindelsen.";this.disconnectMessage=h,this.log("warning",h),this.expectingDisconnect=!0,this.transport.disconnect();return}if(this.collectingLines){if(a==="__END__"){const h=this.lineBuffer;this.lineBuffer=[],this.collectingLines=!1,(s=this.lineResolve)==null||s.call(this,h),this.lineResolve=null;return}this.lineBuffer.push(a);return}if(this.collectingLayout){if(a==="__END__"){const h=this.layoutBuffer;this.layoutBuffer=[],this.collectingLayout=!1,(u=this.layoutResolve)==null||u.call(this,h),this.layoutResolve=null;return}!a.startsWith("ACK")&&!a.startsWith("ERR")&&!a.startsWith("#VERSION")?this.layoutBuffer.push(a):a.startsWith("#VERSION")&&this.layoutBuffer.push(a);return}a.startsWith("ERR")?this.log("error",a):a.startsWith("radar,")?this.handleRadarLine(a):a.startsWith("text,")?this.handleTextLine(a):a.startsWith("toggle_state,")?this.handleToggleStateLine(a):a.startsWith("ACK")||a==="LAYOUT_SAVED"||a.startsWith("READY")?this.log("success",a):this.log("info",`rx: ${a}`);const c=this.waiters.findIndex(h=>h.match(a));if(c>=0){const h=this.waiters[c];this.waiters.splice(c,1),clearTimeout(h.timer),h.resolve(a)}}waitFor(a,c,s){return new Promise((u,h)=>{const p=setTimeout(()=>{const g=this.waiters.findIndex(v=>v.timer===p);g>=0&&this.waiters.splice(g,1),h(new Error(`Timeout: ${s}`))},c);this.waiters.push({match:a,resolve:u,reject:h,timer:p})})}async collectLines(a,c,s,u,h){Ba(u);const p=this.lineCollectId+1;this.lineCollectId=p,this.collectingLines=!0,this.lineBuffer=[],this.stream.setInboundProgress(h??null);const g=new Promise((v,y)=>{let x=!1;const N=()=>this.lineCollectId===p,j=()=>{x=!0,N()&&(this.lineReject=null,this.stream.setInboundProgress(null)),u==null||u.removeEventListener("abort",P)},F=$=>{x||(clearTimeout(ne),N()&&(this.collectingLines=!1,this.lineBuffer=[],this.lineResolve=null),j(),y($))},P=()=>{F(new DOMException("BLE file read cancelled","AbortError"))},ne=setTimeout(()=>{N()&&F(new Error(`Timeout: ${s}`))},c);this.lineResolve=v,this.lineReject=F;const G=this.lineResolve;this.lineResolve=$=>{N()&&(clearTimeout(ne),j(),G==null||G($))},u==null||u.addEventListener("abort",P,{once:!0})});return await this.transport.writeLine(a),g}async exchange(a,c,s,u=3){let h;for(let p=1;p<=u;p+=1)try{return await this.transport.writeLine(a),await this.waitFor(c,Xl,s)}catch(g){h=g,this.log("warning",`${s}: forsøg ${p}/${u} mislykkedes`)}throw h instanceof Error?h:new Error(`Failed: ${s}`)}async connect(a){this.expectingDisconnect=!1,this.stream.reset(),this.progress(5,"Forbinder til Bluetooth..."),await this.transport.connect(a)}async runHandshake(a){var fe;await uf(350),this.progress(18,"Klargør forbindelse..."),this.progress(26,"Sender HELLO..."),await this.exchange("HELLO",se=>se==="ACK:HELLO","HELLO"),this.progress(34,"Forbindelse bekræftet"),this.progress(44,"Spørger om ejerskab...");const c=await this.exchange("who_are_you",se=>se==="unowned"||se.startsWith("owned,"),"who_are_you");if(this.progress(56,"Ejerskab modtaget"),c==="unowned")return{kind:"unowned"};const s=c.split(","),u=s[1]??"",h=s[2]!==void 0&&parseInt(s[2],10)||0,p=s[3]!==void 0?parseInt(s[3],10)===1:!0,g=s[4]!==void 0?parseInt(s[4],10)===1:!1,v=s.length>=7,y=v?parseInt(s[5]??"0",10)===1:g,x=((fe=s[v?6:5])==null?void 0:fe.trim())||void 0;await this.exchange("ACK:ownership",se=>se==="READY:permission","ACK:ownership",1),this.progress(66,"Anmoder om adgang...");const N=await this.exchange(`request_permission,${a.userID},${cl(a.username)}`,se=>se.startsWith("perm,"),"request_permission");this.progress(76,"Adgang vurderet");const j=N.split(",").filter(se=>/^\d+$/.test(se)),F=j.length>=1?parseInt(j[0]??"0",10):0,P=j.length>=2?parseInt(j[1]??"0",10):0,ne=j.length>=3?parseInt(j[2]??"0",10):P;if(F===0)return this.expectingDisconnect=!0,this.disconnectMessage="Du kan ikke forbinde, fordi enheden er privat, og andre brugere ikke må forbinde.",{kind:"denied",ownerName:x,canOthersConnect:p};const G=a.userID===u,$=P===1||G,le=ne===1||G;return await this.transport.writeLine("ACK:permission"),{kind:"owned",ownerID:u,ownerName:x,iconID:h,canEdit:$,canEditCode:le,isOwnedByMe:G,canOthersConnect:p,canOthersEdit:g,canOthersEditCode:y}}async create(a,c,s,u,h,p,g){const v=s?1:0,y=s&&u?1:0,x=s&&h?1:0;await this.exchange(`create,${a.userID},${cl(a.username)},${c},${v},${y},${x},${p},${g}`,N=>N==="ACK:create","create")}async updateDeviceSettings(a,c,s,u,h,p,g){const v=c?1:0,y=c&&s?1:0,x=c&&u?1:0;await this.exchange(`settings_update,${a},${v},${y},${x},${h},${p},${cl(g??"")}`,N=>N==="ACK:settings_update","settings_update",3)}async requestLayout(){this.progress(84,"Henter kontrolpanel..."),this.collectingLayout=!0,this.layoutBuffer=[];const a=new Promise((s,u)=>{this.layoutResolve=s;const h=setTimeout(()=>{this.collectingLayout&&(this.collectingLayout=!1,this.layoutResolve=null,u(new Error("Timeout: layout")))},Xl*2),p=this.layoutResolve;this.layoutResolve=g=>{clearTimeout(h),p==null||p(g)}});await this.transport.writeLine("request"),this.progress(92,"Modtager kontrolpanel...");const c=await a;return this.progress(100,"Klar"),c}async saveLayout(a){await this.exchange("update",u=>u==="ACK:update","update",3).catch(()=>{this.log("warning","ACK:update udeblev (fortsætter).")});const c=a.map(u=>{const h=g=>g===null?"n":String(g),p=`update,${u.type},${u.name},${h(u.centerX2)},${h(u.centerY2)},${h(u.spanX)},${h(u.spanY)},${u.rotation}`;return u.type==="slider"?`${p},${u.sliderMin??0},${u.sliderMax??100},${u.sliderRecenter??"none"}`:u.type==="toggle"?`${p},${u.toggleInitial?1:0}`:u.type==="radar"?[p,u.radarMinAngle??0,u.radarMaxAngle??180,u.radarMaxDistance??200,u.radarFadeMs??1200].join(","):p});c.push("__END__");const s=this.waitFor(u=>u==="LAYOUT_SAVED",Xl*2,"LAYOUT_SAVED");await this.stream.sendReliable(c),await s}async listFiles(a="/"){return(await this.collectLines(`fs_list,${cl(a)}`,Xl*3,"fs_list")).filter(s=>s.startsWith("fs_entry,")).map(s=>{const[,u,h,p]=s.split(","),g=u==="file"||u==="dir"?u:"unknown",v=parseInt(p??"",10),y=h||"/";return{name:y.split("/").filter(Boolean).pop()??y,path:y,type:g,...Number.isFinite(v)&&v>=0?{size:v}:{}}})}handleRadarLine(a){var p,g,v;const c=a.split(",");if(c.length<4)return;const s=(p=c[1])==null?void 0:p.trim(),u=parseFloat(c[2]??""),h=parseFloat(c[3]??"");!s||!Number.isFinite(u)||!Number.isFinite(h)||((v=(g=this.events).onRadar)==null||v.call(g,s,u,h),this.log("info",`rx: ${a}`))}handleTextLine(a){var g,v;const c=a.indexOf(","),s=c>=0?a.indexOf(",",c+1):-1;if(c<0||s<0)return;const u=a.slice(c+1,s),h=a.slice(s+1),p=u==null?void 0:u.trim();p&&((v=(g=this.events).onText)==null||v.call(g,p,h),this.log("info",`rx: ${a}`))}handleToggleStateLine(a){var h,p,g;const c=a.split(",");if(c.length<3)return;const s=(h=c[1])==null?void 0:h.trim(),u=parseInt(c[2]??"",10);!s||!Number.isFinite(u)||((g=(p=this.events).onToggleState)==null||g.call(p,s,u===1),this.log("info",`rx: ${a}`))}async readText(a,c,s){c==null||c(4,"Validerer Picoens Bluetooth-filsystem...");const u=await this.getFilesystemCapabilities(s);if(u.streamRead)try{return await this.readTextStream(a,u,c,s)}catch(h){if(s!=null&&s.aborted||ap(h)||!u.pageRead)throw h;this.log("warning",h instanceof Error?`fs_read_stream fejlede; bruger paged read: ${h.message}`:"fs_read_stream fejlede; bruger paged read")}return this.readTextPaged(a,c,s)}async getFilesystemCapabilities(a){if(this.fsCapabilities)return this.fsCapabilities;const c=await this.collectLines("fs_capabilities",Sb,"fs_capabilities",a),s=c.find(x=>x.startsWith("ERR"));if(s)throw new Error(s);const u=c.find(x=>x.startsWith("fs_capabilities,"));if(!u)throw new Error("Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.");const h=u.split(","),p=new Map;for(let x=1;x<h.length-1;x+=2)p.set(h[x],h[x+1]);const g=parseInt(p.get("max_page")??"",10),v=parseInt(p.get("stream_chunk")??"",10),y={version:p.get("version")||void 0,pageRead:p.get("page_read")==="1",maxPageSize:Number.isFinite(g)&&g>0?g:32,streamRead:p.get("stream_read")==="1",streamChunkSize:Number.isFinite(v)&&v>0?v:128};if(!y.pageRead&&!y.streamRead)throw new Error("Picoens Bluetooth-runtime meldte, at file-read ikke er understøttet.");return this.fsCapabilities=y,y}async readTextPaged(a,c,s){const u=await this.getFilesystemCapabilities(s);let h=0,p=kb(u.maxPageSize),g=0,v=null,y="";const x=`Indlæser ${ff(a)}...`;Ba(s),c==null||c(5,x);for(let N=0;N<512;N+=1){Ba(s),g===0&&(c==null||c(7,x));const F=await this.readPageWithRetry(a,g,h,p,s),P=F.lines;h=F.nextPageSizeIndex,p=F.maxPageSizeIndex,Ba(s);const ne=P.find(W=>W.startsWith("ERR"));if(ne)throw new Error(ne);const G=P.find(W=>W.startsWith("fs_page,"));if(!G)throw new Error("ERR: fs_read_page missing data");const[,$,le,fe,se=""]=G.split(",",5);if($!==a)throw new Error("ERR: fs_read_page stale data");const de=parseInt(le??"",10),Ne=parseInt(fe??"",10);if(!Number.isFinite(de)||de!==g||!Number.isFinite(Ne))throw new Error("ERR: fs_read_page invalid data");v=Ne,y+=se,g+=Math.floor(se.length/2);const ee=v>0?8+Math.min(87,Math.round(g/v*87)):95;if(c==null||c(ee,x),g>=v||se.length===0)return c==null||c(100,"Fil indlæst fra Pico"),new TextDecoder().decode(sp(y))}throw new Error("ERR: fs_read_page too many pages")}async readPageWithRetry(a,c,s,u,h){let p,g=Math.min(s,u);for(;g>=0;){const v=Ao[g],y=g===0?xb:1,x=g===0?vb:yb;for(let N=1;N<=y;N+=1){Ba(h);try{return{lines:await this.collectLines(`fs_read_page,${cl(a)},${c},${v}`,x,`fs_read_page ${c}`,h),nextPageSizeIndex:Math.min(g+1,u),maxPageSizeIndex:u}}catch(j){if(h!=null&&h.aborted||ap(j))throw j;if(p=j,N<y||g>0){const P=g>0&&N>=y?Ao[g-1]:v;this.log("warning",`fs_read_page ${c} (${v} bytes) fejlede; prøver ${P} bytes`),await uf(80+N*80)}}}if(g===0)break;u=Math.max(0,g-1),g=u}throw p instanceof Error?p:new Error(`Timeout: fs_read_page ${c}`)}async readTextStream(a,c,s,u){const h=`Indlæser ${ff(a)}...`,p=Math.max(16,Math.min(192,c.streamChunkSize||128));s==null||s(5,h);const g=await this.collectLines(`fs_read_stream,${cl(a)},${p}`,wb,`fs_read_stream ${a}`,u,(ee,W)=>{const xe=8+Math.round(Math.min(ee,W)/Math.max(1,W)*87);s==null||s(Math.min(95,xe),h)});Ba(u);const v=g.find(ee=>ee.startsWith("ERR"));if(v)throw new Error(v);const y=g.find(ee=>ee.startsWith("fs_stream_begin,")),x=g.find(ee=>ee.startsWith("fs_stream_end,"));if(!y||!x)throw new Error("ERR: fs_read_stream missing metadata");const[,N,j]=y.split(",",4),[,F,P,ne]=x.split(",",4),G=parseInt(j??"",10),$=parseInt(P??"",10),le=parseInt(ne??"",10);if(N!==a||F!==a||!Number.isFinite(G)||G!==$||!Number.isFinite(le))throw new Error("ERR: fs_read_stream invalid metadata");let fe=0,se="";for(const ee of g){if(!ee.startsWith("fs_stream_chunk,"))continue;const[,W,xe=""]=ee.split(",",3),be=parseInt(W??"",10);if(!Number.isFinite(be)||be!==fe||xe.length%2!==0)throw new Error("ERR: fs_read_stream invalid chunk");se+=xe,fe+=Math.floor(xe.length/2)}if(fe!==G)throw new Error("ERR: fs_read_stream size mismatch");const de=sp(se);if(ip(de)!==le)throw new Error("ERR: fs_read_stream checksum mismatch");return s==null||s(100,"Fil indlæst fra Pico"),new TextDecoder().decode(de)}async writeText(a,c,s){s==null||s(5,"Klargør BLE-overførsel..."),await this.exchange(`fs_write_begin,${cl(a)}`,x=>x==="ACK:fs_write_begin","fs_write_begin",2),s==null||s(18,"Pico er klar til filen...");const u=new TextEncoder().encode(c),h=[...u].map(x=>x.toString(16).padStart(2,"0")).join(""),p=[];for(let x=0;x<h.length;x+=160)p.push(`fs_write_chunk,${h.slice(x,x+160)}`);p.push("fs_write_end");const g=ip(u),v=this.waitFor(x=>x==="ACK:fs_write_done"||x.startsWith("ACK:fs_write_done,")||x.startsWith("ERR"),bb,"fs_write_done");s==null||s(u.length===0?85:18,u.length===0?"Sender tom fil via Bluetooth...":`Sender 0/${u.length} bytes via Bluetooth...`),await this.stream.sendReliable(p,(x,N,j)=>{if(!j.startsWith("fs_write_chunk,"))return;const F=Math.min(u.length,x*80),P=18+Math.round(x/Math.max(1,N-1)*67);s==null||s(Math.min(85,P),`Sender ${F}/${u.length} bytes via Bluetooth...`)}),s==null||s(90,"Verificerer BLE-fil...");const y=await v;if(y.startsWith("ERR"))throw new Error(y);if(y.startsWith("ACK:fs_write_done,")){const[,x,N]=y.split(",",3),j=parseInt(x??"",10),F=parseInt(N??"",10);if(j!==u.length||F!==g)throw new Error(`ERR: BLE-verificering fejlede for ${ff(a)}.`)}s==null||s(100,"Gemt på Pico")}async deleteFile(a){const c=await this.exchange(`fs_delete,${cl(a)}`,s=>s==="ACK:fs_delete"||s.startsWith("ERR"),"fs_delete",2);if(c.startsWith("ERR"))throw new Error(c)}async restart(){await this.exchange("restart",a=>a==="ACK:restart"||a.startsWith("ERR"),"restart",1).catch(()=>{}),this.expectingDisconnect=!0}enqueueButton(a){this.busy||(this.pendingButtons.push(`button,${a}`),this.pumpControls())}enqueueSlider(a,c){this.busy||(this.pendingSliders.set(a,`slider,${a}:${c}`),this.pumpControls())}enqueueToggle(a,c){this.busy||(this.pendingToggles.set(a,`toggle,${a}:${c?1:0}`),this.pumpControls())}pumpControls(){this.controlPumpActive||this.busy||!this.transport.connected||(this.controlPumpActive=!0,this.drainControls())}async drainControls(){try{for(;!this.busy&&this.transport.connected;){const a=this.nextControlLine();if(!a)break;await this.transport.writeLine(a),this.log("info",`tx: ${a}`),await uf(gb)}}catch(a){this.log("error",a instanceof Error?a.message:"Kunne ikke sende kommando."),this.handleDisconnect()}finally{this.controlPumpActive=!1,!this.busy&&this.transport.connected&&this.hasPendingControls()&&this.pumpControls()}}nextControlLine(){const a=this.pendingButtons.shift();if(a)return a;const c=this.pendingSliders.entries().next();if(!c.done){const[u,h]=c.value;return this.pendingSliders.delete(u),h}const s=this.pendingToggles.entries().next();if(!s.done){const[u,h]=s.value;return this.pendingToggles.delete(u),h}return null}hasPendingControls(){return this.pendingButtons.length>0||this.pendingSliders.size>0||this.pendingToggles.size>0}async disconnect(){if(!this.transport.connected){this.handleDisconnect();return}this.expectingDisconnect=!0;try{await this.exchange("disconnect",a=>a==="ACK:disconnect","disconnect",1)}catch{}this.transport.disconnect()}handleDisconnect(){var c,s,u;for(const h of this.waiters)clearTimeout(h.timer),h.reject(new Error("Forbindelsen blev afbrudt."));this.waiters=[],this.collectingLayout=!1,this.layoutResolve=null,(c=this.lineReject)==null||c.call(this,new Error("Forbindelsen blev afbrudt.")),this.collectingLines=!1,this.lineResolve=null,this.lineReject=null,this.fsCapabilities=null,this.stream.reset();const a=this.disconnectMessage??void 0;this.disconnectMessage=null,(u=(s=this.events).onDisconnect)==null||u.call(s,a)}}function kb(o){let a=0;for(let c=0;c<Ao.length;c+=1)Ao[c]<=o&&(a=c);return a}function ff(o){return o.replace(/\\/g,"/").replace(/^\/+/,"")||o}function ip(o){let a=0;for(const c of o)a=a+c>>>0;return a}function sp(o){const a=new Uint8Array(Math.floor(o.length/2));for(let c=0;c<a.length;c+=1)a[c]=parseInt(o.slice(c*2,c*2+2),16);return a}function op(o){const a=(c,s)=>Number.isFinite(c)?Math.max(mb,Math.min(hb,c)):s;for(const c of o){const s=c.trim();if(s.startsWith("#GRID,")){const u=s.split(","),h=a(parseInt(u[1],10),qa),p=a(parseInt(u[2],10),rs);return{cols:h,rows:p}}}return{cols:qa,rows:rs}}function cp(o){const a=new Map;for(const c of o){const s=c.trim();if(!s||s.startsWith("#VERSION")||s==="__END__")continue;const u=s.split(",");if(u.length<7)continue;const[h,p,g,v,y,x,N,j,F,P,ne]=u;if(h!=="button"&&h!=="slider"&&h!=="toggle"&&h!=="radar"&&h!=="text"||a.has(p))continue;const G=be=>{if(be==="n")return null;const ve=parseInt(be,10);return Number.isNaN(ve)?null:ve},$=parseInt(N,10)||0,le=j!==void 0?parseInt(j,10):0,fe=F!==void 0?parseInt(F,10):100,se=["none","bottom","middle","top"].includes(P??"")?P:"none",de=j!==void 0?parseInt(j,10)===1:!1,Ne=j!==void 0?parseFloat(j):0,ee=F!==void 0?parseFloat(F):180,W=P!==void 0?parseFloat(P):200,xe=ne!==void 0?parseInt(ne,10):1200;a.set(p,{type:h,name:p,centerX2:G(g),centerY2:G(v),spanX:G(y),spanY:G(x),rotation:[0,90,180,270].includes($)?$:0,...h==="slider"?{sliderMin:Number.isFinite(le)?le:0,sliderMax:Number.isFinite(fe)?fe:100,sliderRecenter:se}:{},...h==="toggle"?{toggleInitial:de}:{},...h==="radar"?{radarMinAngle:Number.isFinite(Ne)?Ne:0,radarMaxAngle:Number.isFinite(ee)?ee:180,radarMaxDistance:Number.isFinite(W)&&W>0?W:200,radarFadeMs:Number.isFinite(xe)&&xe>0?xe:1200}:{}})}return[...a.values()]}let te=null,Ki=null,up=0,Rr=!1;function Nb(){return new Date().toLocaleTimeString("da-DK",{hour12:!1})}function fp(o){return new Promise(a=>setTimeout(a,o))}function Rb(o){return Object.fromEntries(o.filter(a=>a.type==="toggle").map(a=>[a.name,!!a.toggleInitial]))}function dp(o,a){const c=Rb(o);for(const s of o)s.type==="toggle"&&a[s.name]!==void 0&&(c[s.name]=a[s.name]);return c}const J=Zg((o,a)=>{function c(u,h){o(p=>({logs:[{level:u,message:h,time:Nb()},...p.logs].slice(0,200)}))}function s(u){Ki&&clearTimeout(Ki),up+=1,o({toast:{message:u,id:up}}),Ki=setTimeout(()=>o({toast:null}),4500)}return te=new Eb({onProgress:(u,h)=>o({progress:{value:u,label:h}}),onLog:(u,h)=>c(u,h),onRadar:(u,h,p)=>{const g=Date.now(),v={id:`${g}-${Math.random().toString(36).slice(2)}`,angle:h,distance:p,createdAt:g};o(y=>{const x=y.layout.find(F=>F.type==="radar"&&F.name===u),N=(x==null?void 0:x.radarFadeMs)??1200,j=y.radarPings[u]??[];return{radarPings:{...y.radarPings,[u]:[...j.filter(F=>g-F.createdAt<=N),v].slice(-80)}}})},onText:(u,h)=>{o(p=>({textValues:{...p.textValues,[u]:h}}))},onToggleState:(u,h)=>{o(p=>({toggleValues:{...p.toggleValues,[u]:h}}))},onDisconnect:u=>{const{screen:h,active:p,picoIdeOrigin:g}=a();if(Rr){Rr=!1;return}if(u&&(c("warning",u),s(u)),h==="control"||h==="connection"||h==="create"||h==="ide"&&g==="control"){const v=p?{deviceID:p.deviceID,deviceName:p.deviceName,deviceIconID:p.iconID,canOthersConnect:p.canOthersConnect,canOthersEdit:p.canOthersEdit,canOthersEditCode:p.canOthersEditCode,isOwnedByMe:p.isOwnedByMe,ownerName:p.ownerName}:null;o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connectionLost:v})}}}),{screen:"splash",splashTarget:null,user:null,savedDevices:[],connecting:null,progress:{value:0,label:""},toast:null,confirmDialog:null,connectionLost:null,active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},logs:[],sideMenuOpen:!1,debuggerOpen:!1,menuPage:null,editMode:!1,dashboardPage:"mine",picoIdeOrigin:"dashboard",init:()=>{const u=Jg(),h=Df();o({user:u,savedDevices:h,splashTarget:u?"dashboard":"intro"})},finishSplash:()=>{const u=a().splashTarget;o({screen:u??"intro"})},createUser:u=>{const h=u.trim();if(!h)return;const p={username:h,userID:Wg()};lf(p),o({user:p,screen:"dashboard"})},findDevice:async()=>{try{const u=await ub();await a().connectToDevice(u)}catch(u){u instanceof Error&&u.name!=="NotFoundError"&&c("error",u.message)}},connectToDevice:async(u,h)=>{var g,v;const p=a().user;if(!(!p||!te)){Rr=!1,o({screen:"connection",connecting:{name:vf(u.name)||(h==null?void 0:h.deviceName)||"Pico",iconID:(h==null?void 0:h.deviceIconID)??0},progress:{value:0,label:"Forbinder..."}});try{await te.connect(u);const y=await te.runHandshake(p),x=u.id,N=vf(u.name)||(h==null?void 0:h.deviceName)||"Pico";if(y.kind==="denied"){const $=`Du kan ikke forbinde, fordi ${((g=y.ownerName)==null?void 0:g.trim())||((v=h==null?void 0:h.ownerName)==null?void 0:v.trim())||"ejeren"} ejer enheden og ikke tillader besøgende at forbinde.`;c("warning",$),s($),o({screen:"dashboard",connecting:null}),await te.disconnect();return}if(y.kind==="unowned"){o({active:{deviceID:x,deviceName:N,iconID:0,canEdit:!0,canEditCode:!0,canOthersConnect:!1,canOthersEdit:!1,canOthersEditCode:!1,isOwnedByMe:!0,ownerName:p.username,gridCols:qa,gridRows:rs},screen:"create"});return}const j={deviceID:x,deviceName:N,deviceIconID:y.iconID,canOthersConnect:y.canOthersConnect,canOthersEdit:y.canOthersEdit,canOthersEditCode:y.canOthersEditCode,isOwnedByMe:y.isOwnedByMe,ownerName:y.isOwnedByMe?p.username:y.ownerName??(h==null?void 0:h.ownerName)};o({savedDevices:of(j)});const F=await te.requestLayout(),P=op(F),ne=cp(F);o({layout:ne,sliderValues:{},toggleValues:dp(ne,a().toggleValues),radarPings:{},textValues:{},active:{deviceID:x,deviceName:N,iconID:y.iconID,canEdit:y.canEdit,canEditCode:y.canEditCode,canOthersConnect:y.canOthersConnect,canOthersEdit:y.canOthersEdit,canOthersEditCode:y.canOthersEditCode,isOwnedByMe:y.isOwnedByMe,ownerName:y.isOwnedByMe?p.username:y.ownerName??(h==null?void 0:h.ownerName),gridCols:P.cols,gridRows:P.rows},screen:"control",connecting:null,connectionLost:null})}catch(y){const x=y instanceof Error?y.message:"Forbindelsen mislykkedes.";c("error",x),s("Forbindelsen mislykkedes."),o({screen:"dashboard",connecting:null}),await te.disconnect().catch(()=>{})}}},finishCreate:async(u,h,p,g,v,y)=>{const{user:x,active:N}=a();if(!(!x||!N||!te))try{te.setBusy(!0),await te.create(x,u,h,p,g,v,y),te.setBusy(!1);const j={deviceID:N.deviceID,deviceName:N.deviceName,deviceIconID:u,canOthersConnect:h,canOthersEdit:h&&p,canOthersEditCode:h&&g,isOwnedByMe:!0,ownerName:x.username};o({savedDevices:of(j)});const F=await te.requestLayout(),P=op(F),ne=cp(F);o({layout:ne,sliderValues:{},toggleValues:dp(ne,a().toggleValues),radarPings:{},textValues:{},active:{...N,iconID:u,canEdit:!0,canEditCode:!0,canOthersConnect:h,canOthersEdit:h&&p,canOthersEditCode:h&&g,ownerName:x.username,gridCols:P.cols,gridRows:P.rows},screen:"control"})}catch(j){te.setBusy(!1);const F=j instanceof Error?j.message:"Oprettelse mislykkedes.";c("error",F),s("Oprettelse mislykkedes."),o({screen:"dashboard"}),await te.disconnect().catch(()=>{})}},saveDeviceSettings:async(u,h,p,g,v,y)=>{const{active:x,user:N}=a();if(!(!x||!te||!x.isOwnedByMe))try{te.setBusy(!0),await te.updateDeviceSettings(u,h,p,g,v,y,N==null?void 0:N.username);const j={...x,iconID:u,canEdit:!0,canEditCode:!0,canOthersConnect:h,canOthersEdit:h&&p,canOthersEditCode:h&&g,ownerName:(N==null?void 0:N.username)??x.ownerName,gridCols:v,gridRows:y},F={deviceID:x.deviceID,deviceName:x.deviceName,deviceIconID:u,canOthersConnect:h,canOthersEdit:h&&p,canOthersEditCode:h&&g,isOwnedByMe:!0,ownerName:(N==null?void 0:N.username)??x.ownerName};o({active:j,savedDevices:of(F)}),s("Enhedsindstillinger gemt.")}catch(j){c("error",j instanceof Error?j.message:"Kunne ikke gemme enhedsindstillinger."),s("Kunne ikke gemme enhedsindstillinger.")}finally{te.setBusy(!1)}},cancelCreate:async()=>{te&&await te.disconnect().catch(()=>{}),o({screen:"dashboard",active:null,connecting:null})},disconnect:async()=>{Rr=!0,te&&await te.disconnect().catch(()=>{}),Rr=!1,o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connectionLost:null})},removeSavedDevice:u=>{o({savedDevices:rb(u)})},clearSavedDevices:()=>{eb(),o({savedDevices:[]}),s("Gemte enheder ryddet.")},resetApplicationData:async()=>{Rr=!0,te!=null&&te.connected&&await te.disconnect().catch(()=>{}),tb(),window.location.reload()},updateUsername:u=>{const h=a().user,p=u.trim();if(!h||!p)return;const g={...h,username:p};lf(g),o(v=>{var x;const y=v.savedDevices.map(N=>N.isOwnedByMe?{...N,ownerName:p}:N);return ns(y),{user:g,active:(x=v.active)!=null&&x.isOwnedByMe?{...v.active,ownerName:p}:v.active,savedDevices:y}}),s("Brugernavn gemt.")},createOwnerPairingCode:()=>{const u=a().user;return u?Tb(u):null},applyOwnerPairingCode:u=>{var p;const h=Mb(u,(p=a().user)==null?void 0:p.username);return h?(lf(h),o(g=>{var y;const v=g.savedDevices.map(x=>x.isOwnedByMe?{...x,ownerName:h.username}:x);return ns(v),{user:h,active:(y=g.active)!=null&&y.isOwnedByMe?{...g.active,ownerName:h.username}:g.active,savedDevices:v}}),s("Ejerkoden er gemt. Denne browser bruger nu samme ejer-GUID."),!0):(s("Ejerkoden kunne ikke læses."),!1)},openPicoIde:()=>{const u=a().screen==="control"&&!!(te!=null&&te.connected),h=a().active;if(u&&h&&!h.isOwnedByMe&&!h.canEditCode){s("Ejeren tillader ikke, at gæster åbner Kodeværkstedet på denne enhed."),c("warning","Kodeværkstedet er blokeret, fordi ejeren ikke tillader gæster at redigere kode."),o({sideMenuOpen:!1});return}o(p=>({screen:"ide",picoIdeOrigin:u?"control":"dashboard",active:u?p.active:null,layout:u?p.layout:[],sliderValues:u?p.sliderValues:{},toggleValues:u?p.toggleValues:{},radarPings:u?p.radarPings:{},textValues:u?p.textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null}))},closePicoIde:()=>{const{picoIdeOrigin:u,active:h}=a();o({screen:u==="control"&&h&&(te!=null&&te.connected)?"control":"dashboard",sideMenuOpen:!1,menuPage:null,picoIdeOrigin:"dashboard"})},isBleConnected:()=>!!(te!=null&&te.connected),bleListFiles:async()=>te!=null&&te.connected?te.listFiles("/"):[],bleReadText:async(u,h,p)=>{if(!(te!=null&&te.connected))throw new Error("Ingen BLE-forbindelse.");return te.readText(u,h,p)},bleWriteText:async(u,h,p)=>{if(!(te!=null&&te.connected))throw new Error("Ingen BLE-forbindelse.");await te.writeText(u,h,p)},bleDeleteFile:async u=>{if(!(te!=null&&te.connected))throw new Error("Ingen BLE-forbindelse.");await te.deleteFile(u)},bleRestart:async()=>{te!=null&&te.connected&&await te.restart()},bleRestartAndReconnect:async(u="control")=>{const{active:h}=a();if(!(te!=null&&te.connected)||!h)return!1;const p={deviceID:h.deviceID,deviceName:h.deviceName,deviceIconID:h.iconID,canOthersConnect:h.canOthersConnect,canOthersEdit:h.canOthersEdit,canOthersEditCode:h.canOthersEditCode,isOwnedByMe:h.isOwnedByMe,ownerName:h.ownerName};Rr=!0,c("info","Genstarter Pico og forsøger automatisk genforbindelse...");try{await te.restart()}catch{}o({progress:{value:15,label:"Venter på Pico genstart..."},connecting:{name:p.deviceName,iconID:p.deviceIconID}});for(let g=0;g<12&&(te!=null&&te.connected);g+=1)await fp(250);te!=null&&te.connected||(Rr=!1);for(let g=1;g<=8;g+=1){await fp(g===1?1200:850);try{const y=(await Pp()).find(x=>x.id===p.deviceID);if(!y){o({progress:{value:Math.min(88,20+g*8),label:"Venter på browser-tilladelse..."}});continue}return o({progress:{value:Math.min(92,24+g*8),label:`Genforbinder (${g}/8)...`}}),await a().connectToDevice(y,p),u==="ide"&&o(x=>({screen:"ide",picoIdeOrigin:"control",active:x.active,layout:x.layout,sliderValues:x.sliderValues,toggleValues:x.toggleValues,radarPings:x.radarPings,textValues:x.textValues,editMode:!1,sideMenuOpen:!1,menuPage:null})),s("Pico genforbundet."),!0}catch(v){c("warning",v instanceof Error?v.message:"Genforbindelse mislykkedes.")}}return s("Kunne ikke genforbinde automatisk. Vælg Picoen igen."),Rr=!1,o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:p}),!1},reconnectLostDevice:async()=>{var h;const u=a().connectionLost;if(u){o({connectionLost:null});try{if((h=navigator.bluetooth)!=null&&h.getDevices){const g=(await navigator.bluetooth.getDevices()).find(v=>v.id===u.deviceID);if(g){await a().connectToDevice(g,u);return}}}catch{}c("info","Genforbind: vælg enheden i browserens liste."),await a().findDevice()}},dismissConnectionLost:()=>o({connectionLost:null}),sendButton:u=>te==null?void 0:te.enqueueButton(u),sendSlider:(u,h)=>{o(p=>({sliderValues:{...p.sliderValues,[u]:h}})),te==null||te.enqueueSlider(u,h)},sendToggle:(u,h)=>{o(p=>({toggleValues:{...p.toggleValues,[u]:h}})),te==null||te.enqueueToggle(u,h)},saveLayout:async u=>{if(te)try{te.setBusy(!0),await te.saveLayout(u),o({layout:u,editMode:!1})}catch(h){c("error",h instanceof Error?h.message:"Kunne ikke gemme layout.")}finally{te.setBusy(!1)}},setEditMode:u=>o({editMode:u,sideMenuOpen:!1,menuPage:null}),setDashboardPage:u=>o({dashboardPage:u}),toggleSideMenu:u=>o(h=>({sideMenuOpen:u??!h.sideMenuOpen})),toggleDebugger:u=>o(h=>({debuggerOpen:u??!h.debuggerOpen,sideMenuOpen:!1,menuPage:null})),openMenuPage:u=>o({menuPage:u,sideMenuOpen:!1}),closeMenuPage:()=>o({menuPage:null}),clearLogs:()=>o({logs:[]}),log:(u,h)=>c(u,h),askConfirm:u=>o({confirmDialog:u}),closeConfirm:()=>o({confirmDialog:null}),showToast:u=>s(u),dismissToast:()=>{Ki&&clearTimeout(Ki),o({toast:null})}}}),xf="PKP-EJER";function Tb(o){var s;const a=o.userID.toLowerCase(),c=((s=a.match(/.{1,4}/g))==null?void 0:s.join("-"))??a;return`${xf}-${c}-${Jp(a)}`}function Mb(o,a="Ejer"){const c=o.trim().toUpperCase().replace(/\s+/g,"-");if(!c.startsWith(`${xf}-`))return null;const s=c.slice(xf.length+1).split("-").filter(Boolean),u=s.pop()??"",h=s.join("").toLowerCase();return!/^[a-f0-9]{32}$/.test(h)||u!==Jp(h)?null:{userID:h,username:a.trim()||"Ejer"}}function Jp(o){let a=2166136261;for(const c of o.toLowerCase())a^=c.charCodeAt(0),a=Math.imul(a,16777619)>>>0;return(a%65536).toString(16).toUpperCase().padStart(4,"0")}const Lo="./",e_=[{id:0,label:"Raspberry Pi"},{id:1,label:"Sumo robot"},{id:2,label:"LED / lys"},{id:3,label:"Lineal + blyant"},{id:4,label:"Bil"},{id:5,label:"Tank"},{id:6,label:"Robotarm"},{id:7,label:"Bi"},{id:8,label:"Palet"},{id:9,label:"Afstandssensor"},{id:10,label:"Søg"},{id:11,label:"Alarm"}];function Ia(o){const a=o>=0&&o<e_.length?o:0;return`${Lo}device-icons/${a}.png`}const jb=`${Lo}art/logo.png`,Ab=`${Lo}art/Teknologiskolen_logo.png`,Db=`${Lo}art/logo_teknologiskolen_white.png`,Ob={menu:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),f.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),f.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),f.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]}),user:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),f.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),settings:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"3"}),f.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),info:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),f.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),help:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),f.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),debugger:f.jsx(f.Fragment,{children:f.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),edit:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),f.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),picoIde:f.jsxs(f.Fragment,{children:[f.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),f.jsx("path",{d:"M8 9l-3 3 3 3"}),f.jsx("path",{d:"M16 9l3 3-3 3"}),f.jsx("line",{x1:"13",y1:"8",x2:"11",y2:"16"})]}),exit:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),f.jsx("polyline",{points:"16 17 21 12 16 7"}),f.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),plus:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),f.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),delete:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),f.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),power:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),f.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),save:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),f.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),f.jsx("polyline",{points:"7 3 7 8 15 8"})]}),upload:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),f.jsx("polyline",{points:"17 8 12 3 7 8"}),f.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),refresh:f.jsxs(f.Fragment,{children:[f.jsx("polyline",{points:"23 4 23 10 17 10"}),f.jsx("polyline",{points:"1 20 1 14 7 14"}),f.jsx("path",{d:"M3.5 9a9 9 0 0 1 14.9-3.4L23 10"}),f.jsx("path",{d:"M20.5 15a9 9 0 0 1-14.9 3.4L1 14"})]}),package:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),f.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),f.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),back:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),f.jsx("polyline",{points:"12 19 5 12 12 5"})]})};function Xt({name:o,size:a=24,className:c}){return f.jsx("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:c,"aria-hidden":"true",children:Ob[o]})}const Cb=1850,zb=450;function Bb(){const o=J(s=>s.splashTarget),a=J(s=>s.finishSplash),c=o?"splash-screen-animation splash-ready":"splash-pending";return U.useEffect(()=>{if(!o)return;const u=window.matchMedia("(prefers-reduced-motion: reduce)").matches?zb:Cb,h=window.setTimeout(a,u);return()=>window.clearTimeout(h)},[a,o]),f.jsxs("div",{className:`screen splash-screen ${c}`,"aria-label":"Teknologiskolen starter",children:[f.jsx("div",{className:"splash-white-cover"}),f.jsx("div",{className:"splash-red-field"}),f.jsx("div",{className:"splash-brand","aria-hidden":"true",children:f.jsx("div",{className:"splash-mark splash-logo-shell",children:f.jsx("img",{className:"splash-logo",src:jb,alt:""})})}),f.jsx("span",{className:"sr-only",children:"Teknologiskolen"})]})}function mp(){const o=J(u=>u.createUser),[a,c]=U.useState(""),s=a.length>0;return f.jsxs("div",{className:"screen intro",children:[f.jsxs("div",{className:"intro-header",children:[f.jsx("span",{className:"intro-header-fill","aria-hidden":"true"}),f.jsx("img",{className:"intro-header-image",src:Ab,alt:"Teknologiskolen"}),f.jsx("span",{className:"intro-header-fill","aria-hidden":"true"})]}),f.jsxs("div",{className:"intro-body",children:[f.jsx("p",{children:"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Find selv på et navn, du vil vises som i appen. Det er ikke et login, og navnet gemmes kun i denne browser."}),f.jsxs("div",{className:`field ${s?"filled":""}`,children:[f.jsx("input",{id:"username",value:a,onChange:u=>c(u.target.value),maxLength:32,autoComplete:"off","aria-label":"Brugernavn"}),f.jsx("label",{htmlFor:"username",children:"Brugernavn"})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!s,onClick:()=>o(a),children:"Fortsæt"})]}),f.jsx("span",{className:"version",children:ts})]})}function Of({title:o,onMenu:a}){return f.jsx("header",{className:"topbar",children:f.jsxs("div",{className:"topbar-inner",children:[f.jsx("h1",{children:o}),f.jsx("button",{className:"iconbtn",type:"button",onClick:a,"aria-label":"Menu",children:f.jsx(Xt,{name:"menu"})})]})})}function St({title:o,onClose:a,children:c,closeVariant:s="plain"}){const u=s==="circle",h=U.useRef(!1);return f.jsx("div",{className:"modal-root",onPointerDown:p=>{h.current=p.target===p.currentTarget},onClick:p=>{p.target===p.currentTarget&&h.current&&a(),h.current=!1},children:f.jsxs("div",{className:"modal",onClick:p=>p.stopPropagation(),children:[f.jsxs("div",{className:"modal-head",children:[f.jsx("h3",{children:o}),f.jsx("button",{className:`iconbtn ${u?"modal-close-circle":""}`,type:"button",onClick:a,"aria-label":"Luk",children:f.jsx(Xt,{name:u?"delete":"close",size:u?30:24})})]}),f.jsx("div",{className:"modal-body",children:c})]})})}function hp(){const o=J(j=>j.savedDevices),a=J(j=>j.toggleSideMenu),c=J(j=>j.findDevice),s=J(j=>j.removeSavedDevice),u=J(j=>j.askConfirm),h=J(j=>j.dashboardPage),p=J(j=>j.setDashboardPage),g=Gb(),[v,y]=U.useState(null),x=Bo(),N=o.filter(j=>h==="mine"?j.isOwnedByMe:!j.isOwnedByMe).sort(Hb);return f.jsxs("div",{className:"screen dashboard-screen",children:[f.jsx(Of,{title:"Hovedmenu",onMenu:()=>a()}),f.jsxs("div",{className:"content dash-content",children:[!x&&f.jsx("div",{className:"notice",children:"Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På Android: brug Chrome."}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:h==="mine"?"active":"",onClick:()=>p("mine"),children:"Mine Enheder"}),f.jsx("button",{type:"button",className:h==="andre"?"active":"",onClick:()=>p("andre"),children:"Andre Enheder"})]}),f.jsx("div",{className:"panel panel-white device-list",children:N.length===0?f.jsx("div",{className:"device-list-empty",children:h==="mine"?"Ingen enheder endnu. Tryk på + for at finde en enhed.":"Ingen andre enheder gemt."}):N.map(j=>f.jsx(Lb,{device:j,disabled:!x,onConnect:()=>g(j),onSettings:()=>y(j)},j.deviceID))})]}),f.jsx("button",{className:"fab",type:"button",onClick:()=>c(),disabled:!x,"aria-label":"Find enhed",children:f.jsx(Xt,{name:"plus",size:30})}),f.jsx("span",{className:"version",children:ts}),v&&f.jsx(St,{title:"Enhedsindstillinger",onClose:()=>y(null),children:f.jsxs("div",{className:"settings-stack",children:[f.jsxs("div",{className:"saved-device-head",children:[f.jsx("img",{src:Ia(v.deviceIconID),alt:""}),f.jsx("strong",{children:v.deviceName})]}),f.jsx(Fi,{label:"Gemte indstillinger",value:"Denne browser"}),f.jsx(Fi,{label:"Ejer",value:Ub(v)}),f.jsx(Fi,{label:"Offentlig",value:v.canOthersConnect?"Ja":"Nej"}),f.jsx(Fi,{label:"Andre må redigere layout",value:v.canOthersEdit?"Ja":"Nej"}),f.jsx(Fi,{label:"Andre må redigere kode",value:v.canOthersEditCode?"Ja":"Nej"}),f.jsx("div",{className:"notice",children:"Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen."}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!x,onClick:()=>{const j=v;y(null),g(j)},children:"Forbind"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>u({title:"Glem enhed",message:`Vil du fjerne ${v.deviceName} fra gemte enheder?`,confirmLabel:"Glem",onConfirm:()=>{s(v.deviceID),y(null)}}),children:"Glem enhed"})]})})]})}function Lb({device:o,disabled:a,onConnect:c,onSettings:s}){return f.jsxs("div",{className:"device-tile-wrap",children:[f.jsxs("button",{className:"device-tile",type:"button",onClick:c,disabled:a,children:[f.jsx("img",{className:"device-tile-icon",src:Ia(o.deviceIconID),alt:""}),f.jsx("span",{className:"device-tile-name",children:o.deviceName})]}),f.jsx("button",{className:"device-tile-del",type:"button",onClick:s,"aria-label":"Enhedsindstillinger",children:f.jsx(Xt,{name:"settings"})})]})}function Fi({label:o,value:a}){return f.jsxs("div",{className:"settings-row",children:[f.jsx("span",{children:o}),f.jsx("strong",{children:a})]})}function Ub(o){var a;return o.isOwnedByMe?"Dig":((a=o.ownerName)==null?void 0:a.trim())||"Anden bruger"}function Hb(o,a){return o.deviceName.localeCompare(a.deviceName,"da",{sensitivity:"base"})}function Gb(){const o=J(s=>s.connectToDevice),a=J(s=>s.findDevice),c=J(s=>s.log);return async s=>{const h=(await Pp()).find(p=>p.id===s.deviceID);h?await o(h,s):(c("info","Genforbind: vælg enheden i browserens liste."),await a())}}function Vb(){const o=J(c=>c.connecting),a=J(c=>c.progress);return f.jsxs("div",{className:"screen connection",children:[f.jsx("div",{className:"device-icon-pick",children:f.jsx("img",{src:Ia((o==null?void 0:o.iconID)??0),alt:""})}),f.jsxs("h2",{style:{margin:0,color:"var(--red)"},children:["Forbinder til ",(o==null?void 0:o.name)??"enhed"]}),f.jsx("div",{className:"spinner"}),f.jsxs("div",{style:{width:"100%"},children:[f.jsx("div",{className:"progress-track",children:f.jsx("div",{className:"progress-fill",style:{width:`${a.value}%`}})}),f.jsx("p",{style:{color:"var(--muted)",fontWeight:600,marginTop:12},children:a.label})]})]})}function t_({selected:o,onSelect:a,onClose:c}){return f.jsx(St,{title:"Vælg Enhedens Ikon",onClose:c,children:f.jsx("div",{className:"icon-grid",children:e_.map(s=>f.jsx("button",{type:"button",className:`icon-tile ${s.id===o?"selected":""}`,onClick:()=>{a(s.id),c()},"aria-label":s.label,children:f.jsx("img",{src:Ia(s.id),alt:""})},s.id))})})}function Yb(){const o=J(se=>se.finishCreate),a=J(se=>se.cancelCreate),[c,s]=U.useState(0),[u,h]=U.useState(!1),[p,g]=U.useState(!1),[v,y]=U.useState(!1),[x,N]=U.useState(!1),[j,F]=U.useState(qa),[P,ne]=U.useState(rs),[G,$]=U.useState(!1),le=se=>Number.isFinite(se)?Math.max(Ga,Math.min(Va,Math.round(se))):qa;async function fe(){$(!0),await o(c,p,p&&v,p&&x,le(j),le(P))}return f.jsxs("div",{className:"screen",children:[f.jsx("header",{className:"topbar",children:f.jsx("h1",{children:"Opret Enhed"})}),f.jsxs("div",{className:"content create-body",children:[f.jsxs("button",{type:"button",className:"device-icon-pick",onClick:()=>h(!0),"aria-label":"Vælg ikon",children:[f.jsx("img",{src:Ia(c),alt:""}),f.jsx("span",{className:"badge",children:f.jsx(Xt,{name:"plus",size:22})})]}),f.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:p?"":"active",onClick:()=>g(!1),children:"Privat"}),f.jsx("button",{type:"button",className:p?"active":"",onClick:()=>g(!0),children:"Offentlig"})]}),p&&f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:v?"":"active",onClick:()=>y(!1),children:"Nej"}),f.jsx("button",{type:"button",className:v?"active":"",onClick:()=>y(!0),children:"Ja"})]}),f.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:x?"":"active",onClick:()=>N(!1),children:"Nej"}),f.jsx("button",{type:"button",className:x?"active":"",onClick:()=>N(!0),children:"Ja"})]})]}),f.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter (kolonner × rækker)"}),f.jsxs("div",{className:"row",style:{width:"100%"},children:[f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"cols",children:"Kolonner"}),f.jsx("input",{id:"cols",type:"number",min:Ga,max:Va,value:Number.isNaN(j)?"":j,onChange:se=>F(parseInt(se.target.value,10)),onBlur:()=>F(le(j))})]}),f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"rows",children:"Rækker"}),f.jsx("input",{id:"rows",type:"number",min:Ga,max:Va,value:Number.isNaN(P)?"":P,onChange:se=>ne(parseInt(se.target.value,10)),onBlur:()=>ne(le(P))})]})]}),f.jsxs("div",{className:"row",style:{marginTop:"auto",width:"100%"},children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>a(),disabled:G,children:"Annuller"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:fe,disabled:G,children:G?"Opretter...":"Opret"})]})]}),u&&f.jsx(t_,{selected:c,onSelect:s,onClose:()=>h(!1)}),f.jsx("span",{className:"version",children:ts})]})}const $a=8;function To(o){return Math.max(5,Math.min(22,o))}function Do(o,a,c){const s=Math.max(1,o.length),u=(a-$a*2)/(s*.58),h=(c-$a*2)*.48;return To(Math.min(u,h))}function qb(o,a,c,s,u){const h=o.trim().split(/\s+/).filter(Boolean),p=Math.max(1,o.replace(/\s+/g,"").length+Math.max(0,h.length-1)*1.6),g=u?To(Math.min(a/4.6,c/4.6,12)):0,v=u?g+$a:$a;if(s){const N=Math.max(1,c-v*2);return{fontSize:To(Math.min(a*.48,N/(p*1.04))),endFontSize:g,centerInset:u?{top:v,bottom:v}:{}}}const y=Math.max(1,a-v*4.2);return{fontSize:To(Math.min(c*.42,y/(p*.58))),endFontSize:g,centerInset:u?{left:v*2.1,right:v*2.1}:{}}}function $b({control:o,rect:a,disabled:c,latestValue:s,toggleValue:u,radarPings:h=[],textValue:p,onButton:g,onSlider:v,onToggle:y}){const x={left:a.cx,top:a.cy,width:a.width,height:a.height};if(o.type==="button")return f.jsx("div",{className:"control",style:x,children:f.jsx("button",{className:"control-button",type:"button",disabled:c,style:{width:"100%",height:"100%",fontSize:Do(o.name,a.width,a.height)},onPointerDown:N=>{c||(N.preventDefault(),g(o.name))},children:o.name})});if(o.type==="toggle"){const N=!!u;return f.jsx("div",{className:"control",style:x,children:f.jsx("button",{className:`control-toggle ${N?"on":""}`,type:"button",disabled:c,"aria-pressed":N,style:{width:"100%",height:"100%",fontSize:Do(o.name,a.width,a.height)},onPointerDown:j=>{c||(j.preventDefault(),y(o.name,!N))},children:f.jsx("span",{children:o.name})})})}return o.type==="radar"?f.jsx("div",{className:"control",style:x,children:f.jsx(r_,{control:o,pings:h,width:a.width,height:a.height})}):o.type==="text"?f.jsx("div",{className:"control",style:x,children:f.jsx(n_,{message:p??o.name,width:a.width,height:a.height})}):f.jsx("div",{className:"control",style:x,children:f.jsx(n0,{control:o,disabled:c,latestValue:s,onSlider:v,width:a.width,height:a.height})})}function Ib(o,a,c){const s=o.trim()||" ",h=s.split(/\s+/).filter(Boolean).reduce((N,j)=>Math.max(N,j.length),1),p=Math.max(1,Math.ceil(s.length/Math.max(1,Math.floor(h*1.9)))),g=Math.max(1,a-$a*3),v=Math.max(1,c-$a*3),y=g/(h*.58),x=v/(p*1.16);return Math.max(7,Math.min(24,y,x))}function n_({message:o,width:a,height:c}){const s=o.trim()||"...";return f.jsx("div",{className:"control-text",style:{width:"100%",height:"100%",fontSize:Ib(s,a,c)},children:f.jsx("span",{children:s})})}function r_({control:o,pings:a,width:c,height:s,preview:u=!1}){const[,h]=U.useState(0),p=Math.max(120,o.radarFadeMs??1200),g=o.radarMinAngle??0,v=o.radarMaxAngle??180,y=_n(g),x=_n(v),N=Math.abs(v-g)>=360||y===x&&g!==v,j=Math.max(1,o.radarMaxDistance??200),F=Date.now(),P=a[a.length-1],ne=o.rotation,G=_n(y+ne),$=_n(x+ne),le=Wb(y,x),fe=((P==null?void 0:P.angle)??le)+ne,se=u?[{id:"preview",angle:le,distance:j*.62,createdAt:F}]:a.filter(z=>F-z.createdAt<=p),de=!N,Ne=Math.max(8,Math.min(12,Math.min(c,s)*.16)),ee=0,W=0,xe=1,be=N?{x:-1.12,y:-1.12,width:2.24,height:2.24}:Fb(G,$),ve=N?"":Xb(ee,W,xe,G,$),ae=bp(g),Pe=bp(v),Ae=de?Qb(G,$,be,c,s,ae,Pe,Ne):null;U.useEffect(()=>{if(u||a.length===0)return;const z=window.setInterval(()=>h(Q=>Q+1),120);return()=>window.clearInterval(z)},[p,a.length,u]);const Qe=Cn(ee,W,xe,fe);return f.jsxs("div",{className:"control-radar",style:{width:"100%",height:"100%"},children:[f.jsxs("svg",{width:c,height:s,viewBox:`${be.x} ${be.y} ${be.width} ${be.height}`,preserveAspectRatio:"none","aria-hidden":"true",children:[N?f.jsx("circle",{className:"radar-sector-fill",cx:ee,cy:W,r:xe}):f.jsx("path",{className:"radar-sector-fill",d:ve}),[.25,.5,.75,1].map(z=>N?f.jsx("circle",{className:"radar-ring",cx:ee,cy:W,r:xe*z},z):f.jsx("path",{className:"radar-ring",d:Kb(ee,W,xe*z,G,$)},z)),!N&&f.jsx(pp,{cx:ee,cy:W,radius:xe,angle:G}),!N&&f.jsx(pp,{cx:ee,cy:W,radius:xe,angle:$}),f.jsx("line",{className:"radar-sweep",x1:ee,y1:W,x2:Qe.x,y2:Qe.y}),se.map(z=>{const Q=u?0:F-z.createdAt,ue=Math.max(0,1-Q/p),Se=Math.max(0,Math.min(j,z.distance)),Ee=Cn(ee,W,xe*(Se/j),z.angle+ne);return f.jsx("circle",{className:"radar-ping",cx:Ee.x,cy:Ee.y,r:Math.max(.025,Math.min(be.width,be.height)*.025),opacity:ue},z.id)})]}),de&&Ae&&f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"radar-angle-label",style:{left:Ae.min.x,top:Ae.min.y,fontSize:Ne},children:ae}),f.jsx("span",{className:"radar-angle-label",style:{left:Ae.max.x,top:Ae.max.y,fontSize:Ne},children:Pe})]})]})}function pp({cx:o,cy:a,radius:c,angle:s}){const u=Cn(o,a,c,s);return f.jsx("line",{className:"radar-boundary",x1:o,y1:a,x2:u.x,y2:u.y})}function Cn(o,a,c,s){const u=(_n(s)-90)*Math.PI/180;return{x:o+Math.cos(u)*c,y:a+Math.sin(u)*c}}function Xb(o,a,c,s,u){const h=Cn(o,a,c,s),p=Cn(o,a,c,u),g=Cf(s,u)>180?1:0;return`M ${o} ${a} L ${h.x} ${h.y} A ${c} ${c} 0 ${g} 1 ${p.x} ${p.y} Z`}function Kb(o,a,c,s,u){const h=Cn(o,a,c,s),p=Cn(o,a,c,u),g=Cf(s,u)>180?1:0;return`M ${h.x} ${h.y} A ${c} ${c} 0 ${g} 1 ${p.x} ${p.y}`}function Cf(o,a){const c=_n(o),s=_n(a),u=s>=c?s-c:360-c+s;return u===0?360:u}function Fb(o,a){const c=[{x:0,y:0},Cn(0,0,1,o),Cn(0,0,1,a)];for(const x of[0,90,180,270])Pb(x,o,a)&&c.push(Cn(0,0,1,x));const s=Math.min(...c.map(x=>x.x)),u=Math.max(...c.map(x=>x.x)),h=Math.min(...c.map(x=>x.y)),p=Math.max(...c.map(x=>x.y)),g=Math.max(.1,u-s),v=Math.max(.1,p-h),y=Math.max(g,v)*.24;return{x:s-y,y:h-y,width:g+y*2,height:v+y*2}}function Pb(o,a,c){const s=_n(a),u=_n(o),h=Cf(a,c),p=_n(u-s);return p>=0&&p<=h}function Qb(o,a,c,s,u,h,p,g){const y=Cn(0,0,1.1,o),x=Cn(0,0,1.1,a);return{min:_p(y,c,s,u,h,g),max:_p(x,c,s,u,p,g)}}function Zb(o,a,c,s){return{x:(o.x-a.x)/a.width*c,y:(o.y-a.y)/a.height*s}}function _p(o,a,c,s,u,h){const p=Zb(o,a,c,s),g=Math.max(10,u.length*h*.62),v=h,y=7;return{x:gp(p.x,g/2+y,Math.max(g/2+y,c-g/2-y)),y:gp(p.y,v/2+y,Math.max(v/2+y,s-v/2-y))}}function gp(o,a,c){return Math.max(a,Math.min(c,o))}function bp(o){return`${Math.round(o)}`}function _n(o){return Number.isFinite(o)?(o%360+360)%360:0}function Wb(o,a){const c=_n(o),s=_n(a),u=s>=c?s-c:360-c+s;return _n(c+u/2)}function Jb(o,a){if(!a)return o;const c=o.trim().split(/\s+/).filter(Boolean);return f.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",lineHeight:1.02,textAlign:"center",gap:"0.42em"},children:c.map((s,u)=>f.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[...s].map((h,p)=>f.jsx("span",{children:h},`${h}-${p}`))},`${s}-${u}`))})}function e0(o){const a={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},c=4;return o===0?{low:{...a,left:c,top:0,bottom:0},high:{...a,right:c,top:0,bottom:0}}:o===180?{low:{...a,right:c,top:0,bottom:0},high:{...a,left:c,top:0,bottom:0}}:o===90?{low:{...a,bottom:c,left:0,right:0},high:{...a,top:c,left:0,right:0}}:{low:{...a,top:c,left:0,right:0},high:{...a,bottom:c,left:0,right:0}}}function t0({name:o,vertical:a,rotation:c,color:s,fontSize:u,endFontSize:h,centerInset:p,lowLabel:g,highLabel:v,showEnds:y}){const x=y?e0(c):null;return f.jsxs("div",{style:{position:"absolute",inset:0,color:s},children:[f.jsx("div",{style:{position:"absolute",inset:0,...p,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:u,textAlign:"center",pointerEvents:"none"},children:Jb(o,a)}),x&&f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{...x.low,fontWeight:800,fontSize:h},children:g}),f.jsx("div",{style:{...x.high,fontWeight:800,fontSize:h},children:v})]})]})}function l_({name:o,rotation:a,width:c,height:s,value:u,showEnds:h=!1,fillColor:p="var(--red)",lowLabel:g="0",highLabel:v="100"}){const y=a===90||a===270,{fontSize:x,endFontSize:N,centerInset:j}=qb(o,c,s,y,h);let F,P;a===0?(F={left:0,top:0,bottom:0,width:`${u}%`},P={left:0,top:0}):a===180?(F={right:0,top:0,bottom:0,width:`${u}%`},P={right:0,top:0}):a===90?(F={left:0,right:0,bottom:0,height:`${u}%`},P={left:0,bottom:0}):(F={left:0,right:0,top:0,height:`${u}%`},P={left:0,top:0});const ne=G=>f.jsx(t0,{name:o,vertical:y,rotation:a,color:G,fontSize:x,endFontSize:N,centerInset:j,lowLabel:g,highLabel:v,showEnds:h});return f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{position:"absolute",left:0,top:0,width:`${c}px`,height:`${s}px`},children:ne("var(--red)")}),f.jsx("div",{style:{position:"absolute",background:p,overflow:"hidden",...F},children:f.jsx("div",{style:{position:"absolute",width:`${c}px`,height:`${s}px`,...P},children:ne("var(--white)")})})]})}function n0({control:o,disabled:a,latestValue:c,onSlider:s,width:u,height:h}){const p=U.useRef(null),g=o.sliderMin??0,v=o.sliderMax??100,[y,x]=U.useState(()=>c===void 0?yp(o.sliderRecenter??"none"):vp(c,g,v)),N=U.useRef(null),j=o.rotation;U.useEffect(()=>{c!==void 0&&(x(vp(c,g,v)),N.current=c)},[c,g,v]);function F($){const le=p.current;if(!le)return 0;const fe=le.getBoundingClientRect();let se;return j===0?se=($.clientX-fe.left)/fe.width:j===180?se=1-($.clientX-fe.left)/fe.width:j===90?se=1-($.clientY-fe.top)/fe.height:se=($.clientY-fe.top)/fe.height,Math.max(0,Math.min(1,se))}function P($){a||ne(F($))}function ne($){const le=Math.round($*100),fe=Math.round(g+(v-g)*$);x(le),fe!==N.current&&(N.current=fe,s(o.name,fe))}function G(){const $=o.sliderRecenter??"none";a||$==="none"||ne(yp($)/100)}return f.jsx("div",{ref:p,className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",touchAction:"none"},onPointerDown:$=>{a||($.preventDefault(),$.currentTarget.setPointerCapture($.pointerId),P($))},onPointerMove:$=>{$.buttons!==0&&P($)},onPointerUp:G,onPointerCancel:G,onLostPointerCapture:G,children:f.jsx(l_,{name:o.name,rotation:j,width:u,height:h,value:y,showEnds:!0,lowLabel:String(g),highLabel:String(v)})})}function yp(o){return o==="bottom"?0:o==="top"?100:o==="middle"?50:0}function vp(o,a,c){return c===a?0:Math.max(0,Math.min(100,Math.round((o-a)/(c-a)*100)))}const r0={button:"Knapper",slider:"Slidere",toggle:"Toggleknapper",radar:"Radar",text:"Tekstfelter"},l0=["button","slider","toggle","radar","text"];function a0({unplaced:o,onAdd:a,onClose:c}){const s=U.useMemo(()=>l0.filter(g=>o.some(v=>v.type===g)),[o]),[u,h]=U.useState(s[0]??"button"),p=o.filter(g=>g.type===u);return U.useEffect(()=>{s.length>0&&!s.includes(u)&&h(s[0])},[s,u]),f.jsxs(St,{title:"Tilføj kontrol",onClose:c,children:[s.length>1&&f.jsx("div",{className:"segmented add-modal-tabs",children:s.map(g=>f.jsx("button",{type:"button",className:u===g?"active":"",onClick:()=>h(g),children:r0[g]},g))}),f.jsx("div",{className:"add-lists",children:s.length===0?f.jsx("div",{className:"device-list-empty",children:"Alle kontroller er allerede placeret."}):p.map(g=>f.jsxs("button",{type:"button",className:"add-entry",onClick:()=>a(g.name),children:[f.jsx("span",{children:g.name}),f.jsx("span",{className:"iconbtn",children:f.jsx(Xt,{name:"plus",size:22})})]},g.name))})]})}function a_(o){const[a,c]=U.useState({w:0,h:0}),s=U.useRef(null),u=U.useRef(null);return U.useLayoutEffect(()=>{var v;const h=o.current;if(s.current===h)return;if((v=u.current)==null||v.disconnect(),u.current=null,s.current=h,!h){c(y=>y.w===0&&y.h===0?y:{w:0,h:0});return}const p=()=>{const y={w:h.clientWidth,h:h.clientHeight};c(x=>x.w===y.w&&x.h===y.h?x:y)};p();const g=new ResizeObserver(p);g.observe(h),u.current=g}),U.useEffect(()=>()=>{var h;(h=u.current)==null||h.disconnect(),u.current=null,s.current=null},[]),a}function Ya(o){return o.centerX2!==null&&o.centerY2!==null&&o.spanX!==null&&o.spanY!==null}const xp=4,Sp=5;function wp(o){if(!Ya(o))return null;const a=o.centerX2/2,c=o.centerY2/2;return{x0:a-o.spanX/2,x1:a+o.spanX/2,y0:c-o.spanY/2,y1:c+o.spanY/2}}function i0(o,a,c=.02){return o.x0<a.x1-c&&a.x0<o.x1-c&&o.y0<a.y1-c&&a.y0<o.y1-c}function Ep(o,a){const c=Ji(o,a);if(!c||o.spanX===null||o.spanY===null)return o;const s=Ro(c.cx,c.cy,o.spanX,o.spanY,a);return{...o,centerX2:s.centerX2,centerY2:s.centerY2}}function kp(o,a){return Math.max(1,Math.min(a.cols-1,o))}function Np(o,a){return Math.max(1,Math.min(a.rows-1,o))}function s0(){const o=J(D=>D.layout),a=J(D=>D.active),c=J(D=>D.saveLayout),s=J(D=>D.setEditMode),u=J(D=>D.askConfirm),h=!!(a!=null&&a.canEdit),[p,g]=U.useState(()=>o.map(D=>({...D}))),[v,y]=U.useState(null),[x,N]=U.useState(!1),[j,F]=U.useState(null),[P,ne]=U.useState(null),[G,$]=U.useState(!1),le=U.useRef(null),fe=a_(le),se=fe.w>0&&fe.h>0,de=Qp(fe.w,fe.h,a==null?void 0:a.gridCols,a==null?void 0:a.gridRows),Ne=U.useMemo(()=>se?_b(de):[],[de,se]),ee=p.filter(Ya),W=p.filter(D=>!Ya(D)),xe=U.useMemo(()=>{const D=new Set;for(let X=0;X<ee.length;X+=1)for(let K=X+1;K<ee.length;K+=1){const I=wp(ee[X]),Ue=wp(ee[K]);I&&Ue&&i0(I,Ue)&&(D.add(ee[X].name),D.add(ee[K].name))}return D},[ee]),be=xe.size>0,ve=p.find(D=>D.name===v)??null,ae=U.useMemo(()=>Rp(p)!==Rp(o),[p,o]),Pe=U.useMemo(()=>{if(!j||!P)return null;const D=p.find(I=>I.name===j);if(!D||D.spanX===null||D.spanY===null)return null;const X=Ro(P.cx,P.cy,D.spanX,D.spanY,de),K=Ji({...D,centerX2:X.centerX2,centerY2:X.centerY2},de);return K?{name:D.name,rect:K}:null},[p,j,P,de]);function Ae(D,X){g(K=>K.map(I=>I.name===D?X(I):I))}function Qe(D,X){D.stopPropagation(),y(X.name);const K=Ji(X,de);K&&(F(X.name),ne({cx:K.cx,cy:K.cy}),D.currentTarget.setPointerCapture(D.pointerId))}function z(D){if(!j)return;const X=le.current;if(!X)return;const K=X.getBoundingClientRect(),I=X.clientWidth/K.width,Ue=X.clientHeight/K.height;ne({cx:Math.max(0,Math.min(X.clientWidth,(D.clientX-K.left)*I)),cy:Math.max(0,Math.min(X.clientHeight,(D.clientY-K.top)*Ue))})}function Q(){if(j&&P){const D=p.find(X=>X.name===j);if(D&&D.spanX!==null&&D.spanY!==null){const X=Ro(P.cx,P.cy,D.spanX,D.spanY,de);Ae(j,K=>({...K,centerX2:X.centerX2,centerY2:X.centerY2}))}}F(null),ne(null)}function ue(D){Ae(D,X=>X.spanX===null||X.spanY===null?{...X,rotation:(X.rotation+270)%360}:Ep({...X,rotation:(X.rotation+270)%360,spanX:kp(X.spanY,de),spanY:Np(X.spanX,de)},de))}function Se(D,X,K){Ae(D,I=>{if(I.spanX===null||I.spanY===null)return I;const Ue=X==="x"?kp(I.spanX+K,de):I.spanX,Ce=X==="y"?Np(I.spanY+K,de):I.spanY;return Ep({...I,spanX:Ue,spanY:Ce},de)})}function Ee(D){Ae(D,X=>({...X,centerX2:null,centerY2:null,spanX:null,spanY:null,rotation:0})),y(null)}function E(D){N(!1);const X=p.find(I=>I.name===D);if(!X)return;const K=Ro(de.areaW/2,de.areaH/2,xp,Sp,de);Ae(D,()=>({...X,spanX:xp,spanY:Sp,rotation:0,centerX2:K.centerX2,centerY2:K.centerY2})),y(D)}async function L(){be||($(!0),await c(p),$(!1))}function Z(){if(!ae){s(!1);return}u({title:"Kassér ændringer",message:"Vil du forlade redigering og kassere dine layout-ændringer?",confirmLabel:"Kassér",onConfirm:()=>s(!1)})}return f.jsxs("div",{className:"edit-view",children:[f.jsx("div",{className:"edit-band edit-toolbar-band",children:ve&&Ya(ve)?f.jsxs("div",{className:"edit-toolbar",onPointerDown:D=>D.stopPropagation(),children:[f.jsx(Pi,{label:"⟲",title:"Roter",onClick:()=>ue(ve.name)}),f.jsx(Pi,{label:"W−",title:"Gør smallere",onClick:()=>Se(ve.name,"x",-1),disabled:ve.spanX===null||ve.spanX<=1}),f.jsx(Pi,{label:"W+",title:"Gør bredere",onClick:()=>Se(ve.name,"x",1),disabled:ve.spanX===null||ve.spanX>=de.cols-1}),f.jsx(Pi,{label:"H−",title:"Gør lavere",onClick:()=>Se(ve.name,"y",-1),disabled:ve.spanY===null||ve.spanY<=1}),f.jsx(Pi,{label:"H+",title:"Gør højere",onClick:()=>Se(ve.name,"y",1),disabled:ve.spanY===null||ve.spanY>=de.rows-1}),f.jsx("button",{className:"iconbtn",style:{color:"var(--red)"},onClick:()=>Ee(ve.name),"aria-label":"Slet",children:f.jsx(Xt,{name:"delete",size:24})})]}):f.jsx("span",{className:"edit-hint",children:"Vælg en kontrol for at redigere"})}),f.jsx("div",{className:"controls-area-wrap",children:f.jsx("div",{className:"controls-area",ref:le,style:{touchAction:"none"},onPointerMove:z,onPointerUp:Q,onPointerDown:()=>y(null),children:se&&f.jsxs(f.Fragment,{children:[f.jsx("svg",{width:de.areaW,height:de.areaH,style:{position:"absolute",inset:0,pointerEvents:"none"},children:Ne.map((D,X)=>f.jsx("circle",{cx:D.x,cy:D.y,r:2.5,fill:"rgba(198,80,78,0.45)"},X))}),Pe&&f.jsx("div",{className:"snap-preview",style:{left:Pe.rect.cx,top:Pe.rect.cy,width:Pe.rect.width,height:Pe.rect.height}}),ee.map(D=>{const X=j===D.name&&P,K=Ji(D,de);if(!K)return null;const I=X?P.cx:K.cx,Ue=X?P.cy:K.cy,Ce={left:I,top:Ue,width:K.width,height:K.height,outline:v===D.name?"3px solid var(--text)":"none",outlineOffset:2};return f.jsx("div",{className:`control ${xe.has(D.name)?"colliding":""}`,style:Ce,onPointerDown:Vt=>Qe(Vt,D),children:D.type==="button"?f.jsx("div",{className:"control-button",style:{width:"100%",height:"100%",display:"grid",placeItems:"center",fontWeight:800,fontSize:Do(D.name,K.width,K.height)},children:D.name}):D.type==="toggle"?f.jsx("div",{className:"control-toggle on",style:{width:"100%",height:"100%",fontSize:Do(D.name,K.width,K.height)},children:f.jsx("span",{children:D.name})}):D.type==="radar"?f.jsx(r_,{control:D,pings:[],width:K.width,height:K.height,preview:!0}):D.type==="text"?f.jsx(n_,{message:D.name,width:K.width,height:K.height}):f.jsx("div",{className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:f.jsx(l_,{name:D.name,rotation:D.rotation,width:K.width,height:K.height,value:50,showEnds:!0,lowLabel:String(D.sliderMin??0),highLabel:String(D.sliderMax??100),fillColor:xe.has(D.name)?"var(--disabled)":"var(--red)"})})},D.name)}),h&&f.jsx("button",{type:"button",className:"fab",style:{width:52,height:52,right:12,bottom:12},onPointerDown:D=>D.stopPropagation(),onClick:()=>N(!0),"aria-label":"Tilføj kontrol",children:f.jsx(Xt,{name:"plus",size:24})}),G&&f.jsx("div",{className:"overlay",children:f.jsx("div",{className:"spinner"})})]})})}),f.jsxs("div",{className:"edit-band edit-actions-band",children:[f.jsx("button",{className:"btn btn-outline",style:{flex:1},type:"button",onClick:Z,disabled:G,children:"Annuller"}),f.jsx("button",{className:"btn btn-primary",style:{flex:1},type:"button",onClick:L,disabled:be||G,children:G?"Gemmer...":"Gem"})]}),x&&f.jsx(a0,{unplaced:W,onAdd:E,onClose:()=>N(!1)})]})}function Rp(o){return JSON.stringify(o.map(a=>({type:a.type,name:a.name,centerX2:a.centerX2,centerY2:a.centerY2,spanX:a.spanX,spanY:a.spanY,rotation:a.rotation})))}function Pi({label:o,title:a,disabled:c,onClick:s}){return f.jsx("button",{type:"button","aria-label":a,title:a,disabled:c,onClick:s,style:{minWidth:38,height:38,borderRadius:12,background:c?"var(--grey)":"var(--red)",color:"var(--white)",fontWeight:800,fontSize:14,padding:"0 8px"},children:o})}function o0(){const o=J(G=>G.layout),a=J(G=>G.editMode),c=J(G=>G.active),s=J(G=>G.sliderValues),u=J(G=>G.toggleValues),h=J(G=>G.radarPings),p=J(G=>G.textValues),g=J(G=>G.toggleSideMenu),v=J(G=>G.sendButton),y=J(G=>G.sendSlider),x=J(G=>G.sendToggle),N=U.useRef(null),j=a_(N),F=Qp(j.w,j.h,c==null?void 0:c.gridCols,c==null?void 0:c.gridRows),P=j.w>0&&j.h>0,ne=o.filter(Ya);return f.jsxs("div",{className:"screen control-screen",children:[f.jsx(Of,{title:"Kontrol Panel",onMenu:()=>g()}),a?f.jsx(s0,{}):f.jsx("div",{className:"controls-area-wrap",children:f.jsx("div",{className:"controls-area",ref:N,children:P?ne.map(G=>{const $=Ji(G,F);return $?f.jsx($b,{control:G,rect:$,disabled:!1,latestValue:G.type==="slider"?s[G.name]:void 0,toggleValue:G.type==="toggle"?u[G.name]:void 0,radarPings:G.type==="radar"?h[G.name]:void 0,textValue:G.type==="text"?p[G.name]:void 0,onButton:v,onSlider:y,onToggle:x},G.name):null}):f.jsx("div",{className:"overlay",children:f.jsx("div",{className:"spinner"})})})})]})}const c0="",Tp="",Mp="",Il="";function Eo(o){return new Promise(a=>setTimeout(a,o))}class u0{constructor(a){this.transport=a}async interrupt(){await this.transport.write(Mp),await Eo(80),await this.transport.write(Mp)}async friendlyRepl(){await this.transport.write(Tp)}async softReset(){await this.transport.write(Il)}async stop(){await this.interrupt(),await this.friendlyRepl().catch(()=>{})}async runFile(a,c){await this.interrupt(),await this.waitForFriendlyPrompt().catch(async()=>{await this.friendlyRepl().catch(()=>{}),await Eo(180)}),c==null||c(),await this.transport.writeLine(`import builtins as _pkp_builtins; exec(_pkp_builtins.open(${JSON.stringify(a)}).read())`)}async sendFriendlyLine(a){await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(a)}async sendProgramInput(a){await this.transport.writeLine(a)}async enterRawRepl(a=2500){if(await this.interrupt(),await Eo(80),await this.transport.write(`\r
`),await Eo(40),!(await this.collectUntil(async()=>{await this.transport.write(c0)},s=>s.includes("raw REPL")||s.includes("raw REPL; CTRL-B to exit"),a)).includes("raw REPL"))throw new Error("Kunne ikke skifte til MicroPython raw REPL.")}async exec(a,c=6e3){await this.enterRawRepl();const s=await this.collectUntil(async()=>{await this.transport.write(a),a.endsWith(`
`)||await this.transport.write(`
`),await this.transport.write(Il)},u=>u.includes(`${Il}${Il}`)||u.includes(`${Il}>`),c);return await this.friendlyRepl().catch(()=>{}),f0(s)}collectUntil(a,c,s){return new Promise((u,h)=>{let p="",g=null;const v=setTimeout(()=>{g==null||g(),h(new Error("Timeout ved USB REPL kommando."))},s);g=this.transport.addDataListener(y=>{p+=y,c(p)&&(clearTimeout(v),g==null||g(),u(p))}),a().catch(y=>{clearTimeout(v),g==null||g(),h(y instanceof Error?y:new Error("USB REPL kommando fejlede."))})})}async waitForFriendlyPrompt(a=1600){await this.collectUntil(async()=>{await this.transport.write(Tp)},c=>/(^|\r?\n)>>> ?$/.test(c),a)}}function f0(o){const a=o.indexOf("OK"),c=o.indexOf(Il,a>=0?a:0),s=c>=0?o.indexOf(Il,c+1):-1;if(a<0||c<0)return{output:o.trim(),error:"",raw:o};const u=o.slice(a+2,c).replace(/^\r?\n/,"").trimEnd(),h=s>=0?o.slice(c+1,s).trim():"";return{output:u,error:h,raw:o}}const d0=[{version:"MicroPython v1.28.0",date:"2026-04-06",stamp:"20260406",tag:"v1.28.0"},{version:"MicroPython v1.27.0",date:"2025-12-09",stamp:"20251209",tag:"v1.27.0"},{version:"MicroPython v1.26.1",date:"2025-09-11",stamp:"20250911",tag:"v1.26.1"},{version:"MicroPython v1.26.0",date:"2025-08-09",stamp:"20250809",tag:"v1.26.0"},{version:"MicroPython v1.25.0",date:"2025-04-15",stamp:"20250415",tag:"v1.25.0"},{version:"MicroPython v1.24.1",date:"2024-11-29",stamp:"20241129",tag:"v1.24.1"},{version:"MicroPython v1.24.0",date:"2024-10-25",stamp:"20241025",tag:"v1.24.0"},{version:"MicroPython v1.23.0",date:"2024-06-02",stamp:"20240602",tag:"v1.23.0"},{version:"MicroPython v1.22.2",date:"2024-02-22",stamp:"20240222",tag:"v1.22.2"},{version:"MicroPython v1.22.1",date:"2024-01-05",stamp:"20240105",tag:"v1.22.1"}],m0=[{board:"Raspberry Pi Pico",firmwareName:"RPI_PICO"},{board:"Raspberry Pi Pico W",firmwareName:"RPI_PICO_W"}],ul=m0.flatMap(({board:o,firmwareName:a})=>d0.map(({version:c,date:s,stamp:u,tag:h})=>{const p=`${a}-${u}-${h}.uf2`;return{board:o,version:c,date:s,fileName:p,url:`https://micropython.org/resources/firmware/${p}`}})),df=512,mf=`import builtins as _pkp_builtins
`;function Tr(o){return JSON.stringify(o)}function h0(o){return`bytes.fromhex(${JSON.stringify([...o].map(a=>a.toString(16).padStart(2,"0")).join(""))})`}function p0(o,a){return`${o==="/"?"":o.replace(/\/$/,"")}/${a}`}class _0{constructor(a){this.repl=a}async list(a="/"){const c=`
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
`,s=await this.repl.exec(c);if(s.error)throw new Error(s.error);return s.output.split(/\r?\n/).map(u=>u.trim()).filter(Boolean).map(u=>{const[h,p,g]=u.split("	"),v=p==="dir"||p==="file"?p:"unknown",y=parseInt(g??"",10);return{name:h,path:p0(a,h),type:v,...Number.isFinite(y)&&y>=0?{size:y}:{}}})}async readText(a){const c=`
import sys
${mf}with _pkp_builtins.open(${Tr(a)}, 'rb') as f:
    while True:
        b = f.read(${df})
        if not b:
            break
        print(b.hex())
`,s=await this.repl.exec(c,1e4);if(s.error)throw new Error(s.error);const u=s.output.replace(/\s+/g,"");return new TextDecoder().decode(g0(u))}async writeText(a,c,s){const u=new TextEncoder().encode(c);if(s==null||s(5,"Klargør fil..."),await this.repl.exec(`${mf}_pkp_builtins.open(${Tr(a)}, 'wb').close()`),u.length===0){s==null||s(100,"Gemt på Pico");return}for(let h=0;h<u.length;h+=df){const p=u.slice(h,h+df),g=`
${mf}with _pkp_builtins.open(${Tr(a)}, 'ab') as f:
    f.write(${h0(p)})
`,v=await this.repl.exec(g,1e4);if(v.error)throw new Error(v.error);const y=Math.min(h+p.length,u.length);s==null||s(10+Math.round(y/u.length*85),`Gemmer ${y}/${u.length} bytes...`)}s==null||s(100,"Gemt på Pico")}async replaceTextSafely(a,c,s,u={}){const h=`${a}.tmp`;if(await this.writeText(h,c,(v,y)=>s==null?void 0:s(Math.min(70,v*.7),y)),s==null||s(78,"Verificerer fil..."),await this.readText(h)!==c)throw await this.delete(h).catch(()=>{}),new Error(`Verificering fejlede for ${a}.`);s==null||s(88,"Udskifter fil...");let g=!!u.createBackup;if(g){const v=await this.readText(a).catch(()=>null);g=v!==null&&v!==c}if(g){const v=await this.nextBackupPath(a).catch(()=>`${a}.backup`);await this.rename(a,v).catch(()=>{})}else await this.delete(a).catch(()=>{});await this.rename(h,a),s==null||s(100,"Installeret på Pico")}async delete(a){const c=await this.repl.exec(`
import os
os.remove(${Tr(a)})
`);if(c.error)throw new Error(c.error)}async nextBackupPath(a){const c=await this.list("/"),s=new Set(c.map(N=>N.path.toLowerCase())),u=a.replace(/\\/g,"/"),h=u.lastIndexOf("/"),p=h>=0?u.slice(0,h+1):"/",g=h>=0?u.slice(h+1):u.replace(/^\/+/,""),v=g.lastIndexOf("."),y=v>0?g.slice(0,v):g,x=v>0?g.slice(v):"";for(let N=1;N<1e3;N+=1){const j=`${p}${y}_backup${N}${x}`;if(!s.has(j.toLowerCase()))return j}return`${p}${y}_backup${Date.now()}${x}`}async rename(a,c){const s=await this.repl.exec(`
import os
os.rename(${Tr(a)}, ${Tr(c)})
`);if(s.error)throw new Error(s.error)}}function g0(o){const a=new Uint8Array(Math.floor(o.length/2));for(let c=0;c<a.length;c+=1)a[c]=parseInt(o.slice(c*2,c*2+2),16);return a}const b0=`import ubluetooth\r
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
`,y0=`from machine import Pin, time_pulse_us\r
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
        return cms`,v0=`import array, time\r
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
`,x0=`import utime as time\r
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
`,S0=`# PicoFly.py\r
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
`,w0=`import machine\r
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
        self.initPCA()`,E0=`from machine import Pin\r
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
`,k0=`from machine import Pin\r
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
`,N0=`from machine import Pin, PWM, ADC\r
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
    print('[STOP] Programmet stoppede. Buzzer, lys og servo er sat sikkert.')`,R0=`from machine import Pin\r
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
`,Ua=[{id:"program:onboard-led",path:"/main.py",label:"NeoPixel lys (main.py)",description:"Startprogram til NeoPixel med tænd/sluk-knapper og lysstyrke-slider.",kind:"program",content:x0},{id:"program:send-text",path:"/main.py",label:"Send tekst (main.py)",description:"Startprogram med kun et tekstfelt, hvor Picoen sender beskeder til kontrolpanelet.",kind:"program",content:k0},{id:"program:tank-control",path:"/main.py",label:"Robotbil med tankstyring (main.py)",description:"Startprogram til robotbil med to motor-slidere.",kind:"program",content:R0},{id:"program:radar-control",path:"/main.py",label:"Radar med afstandssensor (main.py)",description:"Startprogram til radar med servo, afstandssensor og scan-toggle.",kind:"program",content:E0},{id:"program:smart-home",path:"/main.py",label:"SmartHome alarmstation (main.py)",description:"Startprogram til alarmstation med dør-servo, keypad, PIR, vandsensor, buzzer og NeoPixel.",kind:"program",content:N0},{id:"library:ble-peripheral",path:"/BLEPeripheral.py",label:"BLEPeripheral.py",description:"Bluetooth-biblioteket der får Picoen til at tale med appen.",kind:"library",content:b0},{id:"library:pico-robotics",path:"/PicoRobotics.py",label:"PicoRobotics.py",description:"Bibliotek til Kitronik Pico Robotics Board.",kind:"library",content:w0},{id:"library:pico-fly",path:"/PicoFly.py",label:"PicoFly.py",description:"Bibliotek til PicoFly-board med motorer og servoer.",kind:"library",content:S0},{id:"library:hcsr04",path:"/hcsr04.py",label:"hcsr04.py",description:"Bibliotek til HC-SR04 ultralyds-afstandssensor.",kind:"library",content:y0},{id:"library:neopixel",path:"/neopixel.py",label:"neopixel.py",description:"Bibliotek til NeoPixel LED-strips og LED-ringe.",kind:"library",content:v0}],T0=11914;function M0(){return typeof navigator<"u"&&"serial"in navigator&&!!navigator.serial}function j0(){return M0()?{supported:!0,message:"USB-udvikling er tilgængelig i denne browser."}:{supported:!1,message:"USB-udvikling kræver en computer med Chrome, Edge eller Chromebook."}}class A0{constructor(a={}){ce(this,"port",null);ce(this,"reader",null);ce(this,"writer",null);ce(this,"readLoopDone",null);ce(this,"readLoopActive",!1);ce(this,"disconnecting",!1);ce(this,"buffer","");ce(this,"events");ce(this,"dataListeners",new Set);this.events=a}get connected(){return!!this.port&&!!this.writer}get info(){var a;return((a=this.port)==null?void 0:a.getInfo())??null}async requestAndConnect(){if(!navigator.serial)throw new Error("Web Serial er ikke tilgængelig i denne browser.");const a=await navigator.serial.requestPort({filters:[{usbVendorId:T0}]});await this.openPort(a)}async connectKnownPort(a){await this.openPort(a)}async disconnect(){var v,y;const a=this.connected||!!this.port||!!this.reader,c=this.port,s=this.reader,u=this.writer,h=this.readLoopDone,p=s==null?void 0:s.closed.catch(()=>{}),g=u==null?void 0:u.closed.catch(()=>{});this.disconnecting=!0,this.readLoopActive=!1;try{await(s==null?void 0:s.cancel())}catch{}h&&await h.catch(()=>{}),await p;try{s==null||s.releaseLock()}catch{}this.reader===s&&(this.reader=null);try{await(u==null?void 0:u.close()),await g}catch{try{await(u==null?void 0:u.abort("disconnect"))}catch{}}try{u==null||u.releaseLock()}catch{}this.writer===u&&(this.writer=null),c&&await c.close(),this.port===c&&(this.port=null),this.buffer="",this.readLoopDone===h&&(this.readLoopDone=null),this.disconnecting=!1,a&&((y=(v=this.events).onDisconnect)==null||y.call(v))}async write(a){if(!this.writer)throw new Error("Ingen USB-forbindelse.");await this.writer.write(new TextEncoder().encode(a))}async writeLine(a){await this.write(`${a}\r
`)}addDataListener(a){return this.dataListeners.add(a),()=>this.dataListeners.delete(a)}async openPort(a){var s,u,h;if(await this.disconnect().catch(()=>{}),await a.open({baudRate:115200,bufferSize:4096}),this.port=a,this.writer=((s=a.writable)==null?void 0:s.getWriter())??null,!this.writer||!a.readable)throw new Error("USB-porten kunne ikke åbnes til læsning og skrivning.");const c=a.getInfo();(h=(u=this.events).onLog)==null||h.call(u,"success",`USB-forbindelse oprettet (${D0(c)}).`),this.readLoopDone=this.startReadLoop(a)}async startReadLoop(a){var u,h,p;this.readLoopActive=!0;const c=new TextDecoder;this.reader=((u=a.readable)==null?void 0:u.getReader())??null;const s=this.reader;if(s)try{for(;this.readLoopActive;){const{value:g,done:v}=await s.read();if(v)break;g&&this.consumeText(c.decode(g,{stream:!0}))}}catch(g){this.readLoopActive&&((p=(h=this.events).onLog)==null||p.call(h,"error",g instanceof Error?g.message:"USB-læsning stoppede."))}finally{try{s.releaseLock()}catch{}this.reader===s&&(this.reader=null),this.readLoopActive&&!this.disconnecting&&this.port===a&&this.closeAfterUnexpectedReadEnd(a)}}async closeAfterUnexpectedReadEnd(a){var h,p;const c=this.connected||this.port===a;this.disconnecting=!0,this.readLoopActive=!1;const s=this.writer,u=s==null?void 0:s.closed.catch(()=>{});try{await(s==null?void 0:s.close()),await u}catch{try{await(s==null?void 0:s.abort("disconnect"))}catch{}}try{s==null||s.releaseLock()}catch{}this.writer===s&&(this.writer=null);try{await a.close()}catch{}this.port===a&&(this.port=null),this.buffer="",this.readLoopDone=null,this.disconnecting=!1,c&&((p=(h=this.events).onDisconnect)==null||p.call(h))}consumeText(a){var c,s,u,h;(s=(c=this.events).onData)==null||s.call(c,a);for(const p of this.dataListeners)p(a);for(this.buffer+=a;this.buffer.includes(`
`);){const p=this.buffer.indexOf(`
`),g=this.buffer.slice(0,p).replace(/\r$/,"");this.buffer=this.buffer.slice(p+1),(h=(u=this.events).onLine)==null||h.call(u,g)}}}function D0(o){const a=o.usbVendorId!==void 0?`VID ${o.usbVendorId.toString(16).padStart(4,"0")}`:"ukendt VID",c=o.usbProductId!==void 0?`PID ${o.usbProductId.toString(16).padStart(4,"0")}`:"ukendt PID";return`${a}, ${c}`}const i_=15e3,jp=64*1024,Ap=1e5,s_=new URL("/micropython/micropython.mjs",window.location.origin).toString(),O0=new Set(["bluetooth","machine","network","PicoRobotics","rp2","ubluetooth"]);class C0{constructor(){ce(this,"worker",null);ce(this,"pending",null);ce(this,"nextId",0)}send(a,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython-terminalen er optaget. Stop den, eller vent på at kommandoen bliver færdig.",timedOut:!1,unavailable:!1});const s=++this.nextId,u=c.timeoutMs??i_,h=this.ensureWorker();return new Promise(p=>{const g=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython-terminalen stoppede, fordi kommandoen tog for lang tid. Tjek for uendelige løkker.",timedOut:!0,unavailable:!1}),this.restartWorker()},u);this.pending={id:s,timer:g,onOutput:c.onOutput,resolve:p},h.postMessage({type:"run",id:s,code:B0(a),runtimeUrl:s_})})}reset(){this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),this.restartWorker()}dispose(){var a;this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),(a=this.worker)==null||a.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const a=new Worker(new URL(""+new URL("offlineMicroPython.worker-2-QPqck-.js",import.meta.url).href,import.meta.url));return a.onmessage=c=>this.handleMessage(c.data),a.onerror=c=>{this.finish({ok:!1,output:"",error:c.message||"Browser-MicroPython-terminalen fejlede i browser-worker.",timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=a,a}handleMessage(a){var s;const c=this.pending;if(!(!c||a.id!==c.id||a.type==="ready")){if(a.type==="stdout"){(s=c.onOutput)==null||s.call(c,a.text);return}if(a.type==="unavailable"){this.finish({ok:!1,output:"",error:a.error,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:a.ok,output:a.output,error:a.error,timedOut:!1,unavailable:!1})}}finish(a){const c=this.pending;c&&(window.clearTimeout(c.timer),this.pending=null,c.resolve(a))}restartWorker(){var a;(a=this.worker)==null||a.terminate(),this.worker=null}}class z0{constructor(){ce(this,"worker",null);ce(this,"pending",null);ce(this,"nextId",0)}run(a,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython kører allerede kode. Stop den først.",issues:[],timedOut:!1,unavailable:!1});const s=typeof c=="number"?c:c.timeoutMs??i_,u=typeof c=="number"?void 0:c.onOutput,h=typeof c=="number"?void 0:c.signal,p=Sf(a,{allowInput:!0});if(p.some(y=>y.level==="error"))return Promise.resolve({ok:!1,output:"",error:"",issues:p,timedOut:!1,unavailable:!1});const g=++this.nextId,v=this.ensureWorker();return new Promise(y=>{const x=P=>this.finish(P),N=()=>{v.postMessage({type:"stop",id:g}),x({ok:!1,output:"",error:"",issues:p,timedOut:!1,unavailable:!1})},j=window.setTimeout(()=>{x({ok:!1,output:"",error:"Offline MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:p,timedOut:!0,unavailable:!1}),this.restartWorker()},s);if(this.pending={id:g,timer:j,issues:p,onOutput:u,signal:h,abort:N,resolve:y},h!=null&&h.aborted){N();return}h==null||h.addEventListener("abort",N,{once:!0});const F={type:"run",id:g,code:a,runtimeUrl:s_,interactive:!0};v.postMessage(F)})}sendInput(a){const c=this.pending;!c||!this.worker||this.worker.postMessage({type:"stdin",id:c.id,text:a})}stop(){const a=this.pending;!a||!this.worker||(this.worker.postMessage({type:"stop",id:a.id}),this.finish({ok:!1,output:"",error:"Browser-MicroPython blev stoppet.",issues:a.issues,timedOut:!1,unavailable:!1}),this.restartWorker())}dispose(){var a;this.finish({ok:!1,output:"",error:"",issues:[],timedOut:!1,unavailable:!1}),(a=this.worker)==null||a.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const a=new Worker(new URL(""+new URL("offlineMicroPython.worker-2-QPqck-.js",import.meta.url).href,import.meta.url));return a.onmessage=c=>this.handleMessage(c.data),a.onerror=c=>{const s=this.pending;this.finish({ok:!1,output:"",error:c.message||"Offline MicroPython fejlede i browser-worker.",issues:(s==null?void 0:s.issues)??[],timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=a,a}handleMessage(a){var s;const c=this.pending;if(!(!c||a.id!==c.id||a.type==="ready")){if(a.type==="stdout"){(s=c.onOutput)==null||s.call(c,a.text);return}if(a.type==="unavailable"){this.finish({ok:!1,output:"",error:a.error,issues:c.issues,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:a.ok,output:a.output,error:a.error,issues:c.issues,timedOut:!1,unavailable:!1}),this.restartWorker()}}finish(a){var s;const c=this.pending;c&&(window.clearTimeout(c.timer),(s=c.signal)==null||s.removeEventListener("abort",c.abort),this.pending=null,c.resolve(a))}restartWorker(){var a;(a=this.worker)==null||a.terminate(),this.worker=null}}function B0(o){const a=JSON.stringify(o);return["try:",`    __pico_repl_value = eval(${a})`,"    if __pico_repl_value is not None:","        print(repr(__pico_repl_value))","except SyntaxError:",`    exec(${a})`,"finally:","    try:","        del __pico_repl_value","    except Exception:","        pass"].join(`
`)}function Sf(o,a={}){const c=[],s=new Blob([o]).size;s>jp&&c.push({level:"error",text:`Koden er ${s} bytes. Offline MicroPython kører kun små programmer op til ${jp} bytes.`});const u=o.split(/\r?\n/);for(let h=0;h<u.length;h+=1){const p=h+1,g=Oo(u[h]).trim();if(!g)continue;const v=U0(g);v&&O0.has(v)&&c.push({level:"error",line:p,text:`${v} virker kun på Picoen. Forbind en Pico for at køre denne kode.`}),!a.allowInput&&L0(u[h])&&c.push({level:"error",line:p,text:"input() virker kun, når koden kører på Pico via USB. Forbind Pico med USB, gem filen på Picoen, og kør koden derfra."});const y=g.match(/\brange\(\s*(-?\d+)\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\)/);y&&H0(y)>Ap&&c.push({level:"error",line:p,text:`range(...) er for stor til offline kørsel. Brug højst ${Ap} gentagelser.`})}for(const h of G0(u))c.push({level:"warning",text:`Funktionen ${h} ser rekursiv ud. Hvis den ikke stopper, afbryder offline MicroPython efter få sekunder.`});return c}function Oo(o){let a=null;for(let c=0;c<o.length;c+=1){const s=o[c];if((s==='"'||s==="'")&&o[c-1]!=="\\"&&(a=a===s?null:a??s),s==="#"&&!a)return o.slice(0,c)}return o}function L0(o){const a=Oo(o);let c=null;for(let s=0;s<a.length;s+=1){const u=a[s];if((u==='"'||u==="'")&&a[s-1]!=="\\"){c=c===u?null:c??u;continue}if(!c&&!(!Dp(a[s-1])||a.slice(s,s+5)!=="input")&&Dp(a[s+5])&&a.slice(s+5).trimStart().startsWith("("))return!0}return!1}function Dp(o){return!o||!/[A-Za-z0-9_]/.test(o)}function U0(o){const a=o.match(/^import\s+([A-Za-z_]\w*)/);if(a)return a[1];const c=o.match(/^from\s+([A-Za-z_]\w*)\s+import\b/);return(c==null?void 0:c[1])??null}function Op(o){const a=o.match(/^\s*/);return(a==null?void 0:a[0].replace(/\t/g,"    ").length)??0}function H0(o){const a=Number(o[1]),c=o[2]===void 0?void 0:Number(o[2]),s=o[3]===void 0?1:Number(o[3]);if(s===0)return Number.POSITIVE_INFINITY;const p=(c===void 0?a:c)-(c===void 0?0:a);return p>0&&s<0||p<0&&s>0?0:Math.ceil(Math.abs(p/s))}function G0(o){const a=new Set;for(let c=0;c<o.length;c+=1){const s=Oo(o[c]).trim().match(/^def\s+([A-Za-z_]\w*)\s*\(/);if(!s)continue;const u=s[1],h=Op(o[c]);for(let p=c+1;p<o.length;p+=1){if(!o[p].trim())continue;if(Op(o[p])<=h)break;if(new RegExp(`\\b${u}\\s*\\(`).test(Oo(o[p]))){a.add(u);break}}}return[...a]}const V0=/^(for|if|while|def|class|elif|else|try|except|finally|with)\b/;function Y0(o,a){var x;const c=o.trim(),s=a.split(/\r?\n/),u=q0(c),h=u?s[u-1]??"":"",p=$0(s,u),g=c.split(/\r?\n/).filter(Boolean).at(-1)??"";if(/KeyboardInterrupt/.test(g))return{simple:"Programmet blev stoppet.",technical:c,line:u};if(/MemoryError/.test(g))return{simple:`Picoen eller browserens MicroPython løb tør for hukommelse${u?` omkring linje ${u}`:""}.`,technical:c,line:u};if(/RecursionError/.test(g))return{simple:`En funktion kalder sig selv for mange gange${u?` omkring linje ${u}`:""}.`,technical:c,line:u};const v=g.match(/UnboundLocalError:\s+local variable ['"](.+?)['"]/);if(v)return{simple:`Variablen ${v[1]} bruges inde i en funktion, før den har fået en værdi${u?` på linje ${u}`:""}.`,technical:c,line:u};const y=g.match(/NameError:\s+name ['"](.+?)['"] (?:isn't|is not) defined/);if(y)return{simple:F0(h,y[1])?`Teksten ${y[1]} mangler måske citationstegn${u?` på linje ${u}`:""}.`:`Python kender ikke navnet ${y[1]}${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/ZeroDivisionError/.test(g))return{simple:`Kan ikke dividere med 0${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/IndentationError:\s+unexpected indent/.test(g))return{simple:`Der er for meget indrykning${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/IndentationError/.test(g))return{simple:`Mangler indrykning${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/ImportError|ModuleNotFoundError/.test(g)){const N=(x=g.match(/['"](.+?)['"]/))==null?void 0:x[1];return{simple:`Python kan ikke finde modulet${N?` ${N}`:""}.`,technical:c,line:u}}if(/OSError/.test(g))return/ENOENT|No such file|Errno\s+2/.test(g)?{simple:`Python kan ikke finde filen${u?` på linje ${u}`:""}.`,technical:c,line:u}:/EACCES|permission|denied/i.test(g)?{simple:`Python har ikke adgang til filen eller enheden${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Der opstod en fejl med en fil eller en enhed${u?` omkring linje ${u}`:""}.`,technical:c,line:u};if(/SyntaxError/.test(g)){if(/invalid syntax/.test(g)&&p.text.trim().endsWith(","))return{simple:`Linje ${p.line??u} slutter med komma. Tjek om der mangler noget efter kommaet.`,technical:c,line:p.line??u};const N=wf(h,u)??wf(p.text,p.line)??I0(s,u);return N?{simple:`Mangler måske : efter linje ${N.line}.`,technical:c,line:N.line}:u&&p.text.trim().endsWith(":")&&h.trim()&&!/^\s+/.test(h)?{simple:`Mangler måske indrykning på linje ${u}.`,technical:c,line:u}:K0(h)?{simple:`Tekst mangler måske citationstegn${u?` på linje ${u}`:""}.`,technical:c,line:u}:X0(h)?{simple:`Tekst mangler måske et afsluttende citationstegn${u?` på linje ${u}`:""}.`,technical:c,line:u}:P0(h)?{simple:`Mangler måske en afsluttende parentes${u?` på linje ${u}`:""}.`,technical:c,line:u}:Q0(h)?{simple:`Der er måske en parentes for meget${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Python fandt en syntaksfejl${u?` omkring linje ${u}`:""}.`,technical:c,line:u}}return/TypeError/.test(g)?/takes .* positional arguments? but .* given/.test(g)||/function takes/.test(g)?{simple:`En funktion får for mange eller for få værdier${u?` på linje ${u}`:""}.`,technical:c,line:u}:/unsupported operand type/.test(g)?{simple:`To værdier kan ikke bruges sammen på den måde${u?` på linje ${u}`:""}.`,technical:c,line:u}:/not callable/.test(g)?{simple:`Der bliver brugt parenteser efter noget, som ikke er en funktion${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`En værdi har den forkerte type${u?` på linje ${u}`:""}.`,technical:c,line:u}:/IndexError/.test(g)?{simple:`Listen har ikke et element på den plads${u?` på linje ${u}`:""}.`,technical:c,line:u}:/KeyError/.test(g)?{simple:`Ordbogen mangler den nøgle${u?` på linje ${u}`:""}.`,technical:c,line:u}:/AttributeError/.test(g)?{simple:`Den ting har ikke den kommando${u?` på linje ${u}`:""}.`,technical:c,line:u}:/ValueError/.test(g)?/invalid literal for int/.test(g)?{simple:`Teksten kan ikke laves om til et heltal${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Værdien passer ikke her${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Python fandt en fejl${u?` omkring linje ${u}`:""}.`,technical:c,line:u}}function q0(o){var u;const c=(u=[...o.matchAll(/line\s+(\d+)/g)].at(-1))==null?void 0:u[1];if(!c)return;const s=parseInt(c,10);return Number.isFinite(s)&&s>0?s:void 0}function $0(o,a){if(!a)return{text:""};for(let c=a-2;c>=0;c-=1){const s=o[c]??"";if(s.trim())return{line:c+1,text:s}}return{text:""}}function wf(o,a){if(!a)return null;const c=o.trim();return!V0.test(c)||c.endsWith(":")?null:{line:a}}function I0(o,a){const c=a?Math.min(o.length,a):o.length,s=Math.max(0,c-4);for(let u=c-1;u>=s;u-=1){const h=wf(o[u]??"",u+1);if(h)return h}return null}function X0(o){const a=(o.match(/'/g)??[]).length,c=(o.match(/"/g)??[]).length;return a%2===1||c%2===1}function K0(o){var s,u;const c=(u=(s=o.trim().match(/^print\((.+)\)$/))==null?void 0:s[1])==null?void 0:u.trim();return!c||/['"]/.test(c)?!1:/\s/.test(c)&&/[a-zA-ZæøåÆØÅ]/.test(c)}function F0(o,a){const c=o.trim();return!!a&&/[A-Za-zæøåÆØÅ]/.test(a)&&(c.startsWith("print(")||c.includes(`= ${a}`))}function P0(o){return o_(o)>0}function Q0(o){return o_(o)<0}function o_(o){let a=0,c=null;for(let s=0;s<o.length;s+=1){const u=o[s];if((u==='"'||u==="'")&&o[s-1]!=="\\"){c=c===u?null:c??u;continue}c||((u==="("||u==="["||u==="{")&&(a+=1),(u===")"||u==="]"||u==="}")&&(a-=1))}return a}const Ef="/min_kode.py",c_=`print('Hej fra Pico Kontrol Panel')
`,Cp=0,Qi="Backup-filnavne er reserveret til versionshistorik. Vælg et andet navn.";function pn(o,a){return`${o}:${a}`}function Z0(o){return new Promise(a=>window.setTimeout(a,o))}function W0(){const o=J(d=>d.toggleSideMenu),a=J(d=>d.askConfirm),c=J(d=>d.picoIdeOrigin),s=J(d=>d.active),u=J(d=>d.isBleConnected),h=J(d=>d.bleListFiles),p=J(d=>d.bleReadText),g=J(d=>d.bleWriteText),v=J(d=>d.bleDeleteFile),y=J(d=>d.bleRestartAndReconnect),[x,N]=U.useState(!1),[j,F]=U.useState(!1),[P,ne]=U.useState([]),[G,$]=U.useState(!1),[le,fe]=U.useState([]),[se,de]=U.useState(null),[Ne,ee]=U.useState(()=>_f(af())),[W,xe]=U.useState(Ef),[be,ve]=U.useState("local"),[ae,Pe]=U.useState(()=>{var d;return((d=_f(af()).find(b=>b.path===Ef))==null?void 0:d.content)??c_}),[Ae,Qe]=U.useState([]),[z,Q]=U.useState(!1),[ue,Se]=U.useState(""),[Ee,E]=U.useState(""),[L,Z]=U.useState(null),[D,X]=U.useState(!1),[K,I]=U.useState(null),[Ue,Ce]=U.useState(!1),[Vt,Xn]=U.useState({}),[ge,gt]=U.useState(!1),[wt,De]=U.useState(0),[Et,Bn]=U.useState(()=>{var d,b;return((d=ul.find(S=>S.board==="Raspberry Pi Pico W"))==null?void 0:d.board)??((b=ul[0])==null?void 0:b.board)??""}),[zt,Mr]=U.useState(()=>{var d,b;return((d=ul.find(S=>S.board==="Raspberry Pi Pico W"))==null?void 0:d.version)??((b=ul[0])==null?void 0:b.version)??""}),[jr,gn]=U.useState(!1),[Kl,Ar]=U.useState({top:0,left:0}),[bt,fl]=U.useState(!1),[dl,Xa]=U.useState(!1),[ml,Kt]=U.useState(!0),[tn,Kn]=U.useState(""),[Fl,hl]=U.useState([]),[yt,nn]=U.useState(null),[Nt,Dr]=U.useState(!1),[Or,Cr]=U.useState({}),[Fn,Yt]=U.useState({}),[Ke,Rt]=U.useState(null),[ft,Bt]=U.useState(null),[Uo,Ka]=U.useState(""),[Pn,pl]=U.useState(()=>lp().clearTerminalOnRun),[ir,ls]=U.useState(()=>lp().simplifiedErrors),[Pl,as]=U.useState(()=>typeof window<"u"&&window.innerWidth<Cp),zr=U.useRef(null),bn=U.useRef(null),dt=U.useRef(null),Fa=U.useRef(null),rn=U.useRef(null),st=U.useRef(null),ot=U.useRef(null),Tt=U.useRef(!1),Ln=U.useRef(!1),_l=U.useRef(!1),Un=U.useRef(""),sr=U.useRef(null),Hn=U.useRef(null),Gn=U.useRef(null),Qn=U.useRef(null),qt=U.useRef(null),Vn=U.useRef(null),Ft=U.useRef(0),Ze=U.useRef(null),or=U.useRef(null),Pa=U.useRef(null),ln=U.useRef(null),an=j0(),he=c==="control"&&!!s&&u(),Ql=he?(s==null?void 0:s.deviceID)??"ble":null,is=Math.max(1,ae.split(`
`).length),Ho=new Blob([ae]).size,Zl=be==="pico"?"Picoen":"browseren",Wl=U.useMemo(()=>[...new Set(ul.map(d=>d.board))],[]),$t=U.useMemo(()=>ul.filter(d=>d.board===Et),[Et]),vt=ul.find(d=>d.board===Et&&d.version===zt)??$t[0]??ul[0],sn=be==="pico",Qa=sn?bt:dl,Lt=sn&&bt&&x&&!he||!sn&&dl&&!!Gn.current,ss=Nt||Qa&&!Lt,Jl=Lt?"stdin":">>>",os=Lt?sn?"Input til kørende Pico-kode":"Input til kørende Browser-MicroPython":sn?"Pico MicroPython":"Browser-MicroPython",Ut=U.useMemo(()=>{const d=new A0({onData:b=>{Ln.current||!Tt.current||(Un.current=(Un.current+b).slice(-240),/(^|\r?\n)>>> ?$/.test(Un.current)&&Wa())},onLine:b=>{if(Ln.current)return;const S=b.trimEnd();if(_l.current&&S.trim()){q("info",S);return}if(Tt.current&&cs(S)){Wa();return}Tt.current&&S.trim()&&!Za(S)&&!S.includes("raw REPL")&&q("info",S)},onLog:q,onDisconnect:()=>{N(!1),fl(!1),Dr(!1),Tt.current=!1,_l.current=!1,yn(),Un.current="",Lr(),q("warning","USB-forbindelse lukket.")}});return zr.current=d,d},[]);function q(d,b){ne(S=>[...S.slice(-140),{level:d,text:b}])}function cs(d){return d.trim()===">>>"}function Za(d){return d.trimStart().startsWith(">>> import builtins as _pkp_builtins; exec(")}function yn(){sr.current!==null&&(window.clearTimeout(sr.current),sr.current=null)}function Wa(){!Tt.current||sr.current!==null||(sr.current=window.setTimeout(()=>{sr.current=null,Tt.current&&(fl(!1),Tt.current=!1,Un.current="",q("success","Pico-koden er færdig."))},0))}function gl(d,b=ae,S="error"){const C=Y0(d,b);ne(A=>[...A.slice(-140),{level:S,text:C.simple,technical:C.technical}])}function et(d,b,S=be){xe(d),ve(S),Pe(b),Yt(C=>({...C,[pn(S,d)]:b}))}function us(d,b="pico"){xe(d),ve(b),Pe(""),Rt(null),Ar({top:0,left:0})}function Br(d,b=(S=>(S=rn.current)==null?void 0:S.selectionStart)()??d.length){Pe(d),Yt(C=>({...C,[pn(be,W)]:d})),Ka(""),Hr(d,b)}function ea(d,b=be){Yt(S=>{const C=pn(b,d);if(!(C in S))return S;const A={...S};return delete A[C],A})}function Ja(){return Or[W]===ae}function Pt(d,b){Cr(S=>({...S,[d]:b}))}function fs(d,b){Pt(d,b),Yt(S=>({...S,[pn("pico",d)]:b})),be==="pico"&&W===d&&Pe(b)}function Lr(){fe([]),Qe([]),Cr({}),Yt({}),Rt(null),xe(d=>{const b=_f(af());if(b.find(A=>A.path===d))return d;const C=b[0];return ve("local"),Pe(C.content),C.path})}function tt(d){cr(),I({value:100,label:d}),ln.current=window.setTimeout(()=>{ln.current=null,I(null)},900)}function cr(){ln.current!==null&&(window.clearTimeout(ln.current),ln.current=null)}function ei(){return K?f.jsxs("div",{className:"ide-task-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(K.value),children:[f.jsxs("div",{children:[f.jsx("span",{children:K.label}),f.jsxs("strong",{children:[Math.round(K.value),"%"]}),K.cancellable&&f.jsx("button",{className:"ide-task-cancel",type:"button",onClick:Ur,"aria-label":"Stop handling",title:"Stop",children:f.jsx(Xt,{name:"delete",size:18})})]}),f.jsx("b",{"aria-hidden":"true",children:f.jsx("i",{style:{width:`${Math.max(2,Math.min(100,K.value))}%`}})})]}):null}function Ur(){qt.current&&vn("Stopper læsning...",!0,!0)}function vn(d="Stopper læsning...",b=!1,S=!1){var C;cr(),or.current=null,Ft.current+=1,(C=qt.current)==null||C.abort(),qt.current=null,Ze.current=null,de(null),$(!1),I(b?{value:(K==null?void 0:K.value)??0,label:d,cancellable:!1}:null),S&&q("warning","Stopper BLE-læsning efter den aktuelle datapakke.")}function ds(d){var b;if(!(Ze.current===d||or.current===d)){if(or.current=d,Vn.current){Ft.current+=1,(b=qt.current)==null||b.abort(),qt.current=null,Ze.current=null,us(d),de(d),$(!0),cr(),I({value:2,label:`Skifter til ${ze(d)}...`,cancellable:!0});return}ta()}}function ta(){if(Vn.current)return;const d=or.current;if(!d)return;or.current=null;const b=Ft.current+1;Ft.current=b;const S=new AbortController;qt.current=S,Ze.current=d,us(d),de(d),$(!0),cr(),I({value:12,label:`Indlæser ${ze(d)}...`,cancellable:!0});const C=(async()=>{try{const A=await p(d,(re,_e)=>{Ft.current===b&&I({value:re,label:_e,cancellable:!0})},S.signal);if(S.signal.aborted||Ft.current!==b)return;et(d,A,"pico"),Pt(d,A),tt("Fil indlæst")}catch(A){if(Ft.current!==b)return;ty(A)||S.signal.aborted?q("info",`Stoppede læsning af ${ze(d)}.`):(I(null),q("error",A instanceof Error?A.message:"BLE læsning fejlede."))}})();Vn.current=C,C.finally(()=>{if(Vn.current!==C)return;Vn.current=null,qt.current===S&&(qt.current=null),Ze.current===d&&(Ze.current=null),!!or.current||(de(null),$(!1),S.signal.aborted&&I(null)),ta()})}async function bl(d){const b=Ln.current;Ln.current=!0;try{return await d()}finally{Ln.current=b}}U.useEffect(()=>{if(!ml)return;const d=st.current;d&&(d.scrollTop=d.scrollHeight)},[P,ml]),U.useEffect(()=>{nb({clearTerminalOnRun:Pn,simplifiedErrors:ir})},[Pn,ir]),U.useEffect(()=>{var d;$t.some(b=>b.version===zt)||Mr(((d=$t[0])==null?void 0:d.version)??"")},[$t,zt]),U.useEffect(()=>{const d=()=>as(window.innerWidth<Cp);return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),U.useEffect(()=>{const d=()=>{const b=zr.current;bn.current=null,dt.current=null,zr.current=null,b==null||b.disconnect().catch(()=>{})};return window.addEventListener("pagehide",d),()=>{var b,S;cr(),(b=Hn.current)==null||b.dispose(),Hn.current=null,(S=Gn.current)==null||S.dispose(),Gn.current=null,window.removeEventListener("pagehide",d),d()}},[]),U.useEffect(()=>{const d=b=>{!(b.ctrlKey||b.metaKey)||b.key.toLowerCase()!=="s"||(b.preventDefault(),!G&&W.trim()&&!Pl&&!D&&!L&&!z&&ms())};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[be,he,G,x,ae,W,Pl,D,L,z]);function Zn(d,b,S){ee(C=>{const A=sy(C,d,b,S);return sf(A),A})}const xn=fy(le,Ne,Fn,x||he);U.useEffect(()=>{he&&lt()},[he]),U.useEffect(()=>{const d=Pa.current;d&&d!==Ql&&Lr(),Pa.current=Ql},[Ql]);async function ti(){if(an.supported){F(!0);try{await Ut.requestAndConnect();const d=new u0(Ut);bn.current=d,dt.current=new _0(d),N(!0),De(0),await d.interrupt(),await yl(d),q("success","Sendte stop-signal til Pico-terminalen."),await ni(dt.current),await ri(dt.current)}catch(d){q("error",d instanceof Error?d.message:"USB-forbindelse mislykkedes.");try{await Ut.disconnect()}catch(b){q("error",b instanceof Error?`USB-porten kunne ikke lukkes: ${b.message}`:"USB-porten kunne ikke lukkes.");return}De(b=>{const S=b+1;return S>=3&&(q("info","USB-forbindelsen er mislykkedes flere gange. Hvis Picoen er i BOOTSEL eller mangler MicroPython, kan du bruge MicroPython-download."),gt(!0)),S}),N(!1)}finally{F(!1)}}}async function yl(d){const b=await d.exec(`import sys
print(sys.implementation.name)
`,4e3);if(b.error||!b.output.toLowerCase().includes("micropython"))throw new Error("MicroPython blev ikke fundet på Picoen.")}async function Wn(){var d;try{await((d=zr.current)==null?void 0:d.disconnect()),bn.current=null,dt.current=null,N(!1),Lr()}catch(b){q("error",b instanceof Error?`USB-porten kunne ikke lukkes: ${b.message}`:"USB-porten kunne ikke lukkes.")}}async function Sn(d){const b=dt.current;if(b){$(!0),Ln.current=!0;try{await d(b)}catch(S){I(null),q("error",S instanceof Error?S.message:"USB filhandling fejlede.")}finally{Ln.current=!1,$(!1)}}}async function lt(d=!0){if(he){$(!0);try{const b=await h();fe(b),d&&q("success",`Indlæste ${b.length} filer fra Pico via Bluetooth.`)}catch(b){q("error",b instanceof Error?b.message:"BLE filhandling fejlede.")}finally{$(!1)}return}await ni(dt.current,d)}async function ni(d,b=!0){if(d){$(!0);try{const S=await bl(()=>d.list("/"));fe(S),b&&q("success",`Indlæste ${S.length} filer fra Pico.`)}catch(S){q("error",S instanceof Error?S.message:"USB filhandling fejlede.")}finally{$(!1)}}}async function Jn(){if(he){$(!0),I({value:4,label:"Tjekker biblioteker på Pico via Bluetooth..."});try{const d=await vl((b,S)=>I({value:b,label:S}));Qe(d),tt("Fil-tjek færdigt")}catch(d){I(null),q("error",d instanceof Error?d.message:"BLE runtime check fejlede.")}finally{$(!1)}return}await ri(dt.current)}async function vl(d){const b=[],S=Ua.filter(A=>A.kind==="library"&&!$l(A));let C=0;for(const A of Ua){if(A.kind==="program"){b.push({...A,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}if($l(A)){b.push({...A,status:"unknown",detail:"Opdateres via USB"});continue}try{const re=C/Math.max(1,S.length)*100,_e=100/Math.max(1,S.length);q("info",`Tjekker ${A.label} på Pico via Bluetooth...`),d==null||d(Math.min(95,re),`Tjekker ${A.label} på Pico...`);const nt=await p(A.path,(Ht,er)=>{d==null||d(Math.min(95,re+Ht/100*_e),`${A.label}: ${er}`)}),qe=La(nt)===La(A.content);b.push({...A,status:qe?"ok":"outdated",detail:qe?"Matcher appens version":"Kan installeres via Bluetooth"})}catch{b.push({...A,status:"missing",detail:"Mangler på Pico"})}finally{C+=1}}return d==null||d(100,"Fil-tjek færdigt"),b}async function ri(d){if(d){$(!0);try{const b=await bl(()=>Mt(d)),S=b;Qe(S)}catch(b){q("error",b instanceof Error?b.message:"Runtime check fejlede.")}finally{$(!1)}}}async function Mt(d){if(!d)return[];const b=[];for(const S of Ua){if(S.kind==="program"){b.push({...S,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}try{const C=await d.readText(S.path),A=La(C)===La(S.content);b.push({...S,status:A?"ok":"outdated",detail:A?"Matcher appens version":"Matcher ikke appens version"})}catch{b.push({...S,status:"missing",detail:"Mangler på Pico"})}}return b}async function ur(d=W){if(he){ds(d);return}de(d),await Sn(async b=>{I({value:12,label:`Indlæser ${ze(d)}...`});const S=await na(b,d);et(d,S,"pico"),Pt(d,S),tt("Fil indlæst")}),de(null)}async function na(d,b){var S;try{return await d.readText(b)}catch(C){await((S=bn.current)==null?void 0:S.stop().catch(()=>{})),await Z0(120);try{return await d.readText(b)}catch{throw C}}}function xl(){X(!0)}async function ms(){if(be==="pico"){if(!x&&!he){q("error","Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.");return}await Sl();return}ra()}function ra(){if(Ha(W)){q("error",Qi);return}Zn(W,ae,!1),ve("local"),Yt(d=>({...d,[pn("local",W)]:ae})),X(!1),q("success",`Gemte ${ze(W)} lokalt.`)}async function Sl(){if(X(!1),Ha(W))return I(null),q("error",Qi),!1;if(I({value:0,label:"Starter gemning..."}),he){$(!0);try{return await g(W,ae,(b,S)=>I({value:b,label:S})),Pt(W,ae),ve("pico"),Yt(b=>({...b,[pn("pico",W)]:ae})),tt("Gemt på Pico via Bluetooth"),q("success",`Gemte ${ze(W)} på Pico via Bluetooth.`),ko(W)&&(gn(!0),q("warning","main.py er gemt. Genstart Picoen for at køre den nye version.")),await lt(!1),!0}catch(b){return I(null),q("error",b instanceof Error?b.message:"BLE gem fejlede."),!1}finally{$(!1)}}if(!dt.current)return I(null),!1;let d=!1;return await Sn(async b=>{kl(W,"pico")?await b.replaceTextSafely(W,ae,(S,C)=>I({value:S,label:C})):await b.writeText(W,ae,(S,C)=>I({value:S,label:C})),Pt(W,ae),ve("pico"),Yt(S=>({...S,[pn("pico",W)]:ae})),tt("Gemt på Pico via USB"),q("success",`Gemte ${W}.`),await lt(),await Jn(),d=!0}),d}function wl(){El(ze(W),ae),X(!1),q("success",`Downloadede ${ze(W)}.`)}function El(d,b){const S=new Blob([b],{type:"text/plain;charset=utf-8"}),C=URL.createObjectURL(S),A=document.createElement("a");A.href=C,A.download=d,A.click(),URL.revokeObjectURL(C)}async function li(d){$(!0),gn(!1),I({value:10,label:"Genstarter Pico..."});try{await y(d)?(tt("Pico genforbundet"),q("success",d==="control"?"Pico genforbundet. Åbner kontrolpanelet.":"Pico genforbundet til Kodeværkstedet."),d==="ide"&&await lt()):(I(null),q("warning","Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet."))}catch(b){I(null),q("error",b instanceof Error?b.message:"Genstart/genforbindelse mislykkedes.")}finally{$(!1)}}function hs(d){var re;const b=d??{path:W,source:be},S=b.source==="pico"?"Pico":"browser",C=b.source==="pico"?(d==null?void 0:d.versions.length)??((re=kf(le).get(b.path))==null?void 0:re.length)??0:0,A=C>0?` Det sletter også filens versionshistorik (${C} gemte versioner).`:"";Z(null),a({title:"Slet fil",message:`Vil du slette ${ze(b.path)} fra ${S}?${A}`,confirmLabel:"Slet",onConfirm:()=>{Go(b)}})}async function Go(d){const b=d.path,S=d.source,C=b===W&&S===be;if(S==="local"){const _e=Ne.filter(nt=>nt.path!==b);ee(_e),sf(_e),C&&et(b,"","local"),ea(b,"local"),q("warning",`Slettede ${ze(b)} fra browseren.`);return}const A=kf(le).get(b)??[],re=[b,...A.map(_e=>_e.path)];if(he){$(!0);try{for(const nt of re)await v(nt);Cr(nt=>{const qe={...nt};for(const Ht of re)delete qe[Ht];return qe}),C&&et(b,"","pico");for(const nt of re)ea(nt,"pico");const _e=A.length>0?` og ${A.length} gemte versioner`:"";q("warning",`Slettede ${ze(b)}${_e} på Pico via Bluetooth.`),await lt()}catch(_e){q("error",_e instanceof Error?_e.message:"BLE sletning fejlede.")}finally{$(!1)}return}if(!dt.current){q("error","Ingen Pico-forbindelse. Kan ikke slette Pico-filen.");return}await Sn(async _e=>{for(const qe of re)await _e.delete(qe);Cr(qe=>{const Ht={...qe};for(const er of re)delete Ht[er];return Ht});const nt=A.length>0?` og ${A.length} gemte versioner`:"";q("warning",`Slettede ${b}${nt}.`),C&&et(b,"","pico");for(const qe of re)ea(qe,"pico");await lt(),await Jn()})}async function Vo(d){if(!d)return;const b=J0(d.name);if(!b){q("error","Kun .py, .txt, .json og .csv kan importeres.");return}if(Ha(b)){q("error",Qi);return}if(d.size>128*1024){q("error","Filen er for stor til Pico-værkstedet.");return}const S=await d.text();if(be==="local"){Zn(b,S,!0),et(b,S,"local"),q("success",`Importerede ${ze(b)} i browseren.`);return}if(!x&&!he){q("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(he&&$l({path:b})){q("error","BLEPeripheral.py kan ikke importeres over Bluetooth, mens den holder forbindelsen i gang. Brug USB i stedet.");return}if(I({value:0,label:"Uploader fil til Pico..."}),he){$(!0);try{await g(b,S,(A,re)=>I({value:A,label:re})),Pt(b,S),et(b,S,"pico"),tt("Fil uploadet til Pico"),q("success",`Importerede ${ze(b)} på Pico via Bluetooth.`),await lt()}catch(A){I(null),q("error",A instanceof Error?A.message:"Kunne ikke importere filen til Pico.")}finally{$(!1)}return}if(!dt.current){I(null),q("error","Ingen Pico-forbindelse. Kan ikke importere filen til Pico.");return}await Sn(async A=>{kl(b,"pico")?await A.replaceTextSafely(b,S,(re,_e)=>I({value:re,label:_e})):await A.writeText(b,S,(re,_e)=>I({value:re,label:_e})),Pt(b,S),et(b,S,"pico"),tt("Fil uploadet til Pico"),q("success",`Importerede ${ze(b)} på Pico.`),await lt(),await Jn()})}async function ai(){Se(""),Q(!0)}function Yo(){const d=zp(ue);if(!d)return;if(Ha(d)){q("error",Qi);return}const b=be;if(kl(d,b)){q("error",`Der findes allerede en fil med navnet ${ze(d)} i ${b==="pico"?"Pico":"browseren"}.`);return}if(b==="local"){Zn(d,"",!1),et(d,"","local"),Q(!1),q("success",`Oprettede ${ze(d)} i browseren.`);return}qo(d)}async function qo(d){if(!x&&!he){q("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(Q(!1),I({value:0,label:"Opretter fil på Pico..."}),he){$(!0);try{await g(d,"",(b,S)=>I({value:b,label:S})),Pt(d,""),et(d,"","pico"),tt("Fil oprettet på Pico"),q("success",`Oprettede ${ze(d)} på Pico via Bluetooth.`),await lt()}catch(b){I(null),q("error",b instanceof Error?b.message:"Kunne ikke oprette fil på Pico.")}finally{$(!1)}return}if(!dt.current){I(null),q("error","Ingen Pico-forbindelse. Kan ikke oprette Pico-filen.");return}await Sn(async b=>{await b.writeText(d,"",(S,C)=>I({value:S,label:C})),Pt(d,""),et(d,"","pico"),tt("Fil oprettet på Pico"),q("success",`Oprettede ${ze(d)} på Pico.`),await lt()})}function $o(d){d.type==="file"&&(Z(d),E(ey(d.path)))}async function Io(d){if(!L||L.source!=="pico")return;const b=L.path;if(Z(null),I({value:0,label:"Gendanner version..."}),he){$(!0);try{const S=await p(d.path);await g(b,S,(C,A)=>I({value:C,label:A})),Pt(b,S),et(b,S,"pico"),tt("Version gendannet"),await lt(!1)}catch(S){I(null),q("error",S instanceof Error?S.message:"Kunne ikke gendanne versionen.")}finally{$(!1)}return}dt.current&&await Sn(async S=>{await S.replaceTextSafely(b,await S.readText(d.path),(A,re)=>I({value:A,label:re}));const C=await S.readText(b);Pt(b,C),et(b,C,"pico"),tt("Version gendannet"),await lt()})}function Xo(d){a({title:"Slet version",message:`Vil du slette ${ze(d.path)} fra Pico?`,confirmLabel:"Slet",onConfirm:()=>{ps(d)}})}async function ps(d){if(he){$(!0);try{await v(d.path),await lt(!1),Z(b=>b&&{...b,versions:b.versions.filter(S=>S.path!==d.path)})}catch(b){q("error",b instanceof Error?b.message:"Kunne ikke slette versionen.")}finally{$(!1)}return}dt.current&&await Sn(async b=>{await b.delete(d.path),await lt(!1),Z(S=>S&&{...S,versions:S.versions.filter(C=>C.path!==d.path)})})}async function Ko(){if(!L)return;const d=L,b=hf(Ee,Zi(d.path));if(!b||b===d.path)return;if(Ha(b)){q("error",Qi);return}if(kl(b,d.source)){q("error",`Der findes allerede en fil med navnet ${ze(b)}.`);return}const S=d.source==="local",C=d.source==="pico";if(he&&C&&(ko(d.path)||ko(b))){q("error","main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.");return}$(!0);try{if(C)if(he){const A=Or[d.path]??await p(d.path);await g(b,A,(re,_e)=>I({value:re,label:_e})),await v(d.path),Cr(re=>({...qp(re,d.path,b),[b]:A}))}else dt.current&&(await bl(()=>dt.current.rename(d.path,b)),Cr(A=>qp(A,d.path,b)));S&&ee(A=>{const re=A.map(_e=>_e.path===d.path?{..._e,path:b,updatedAt:Date.now()}:_e);return sf(re),re}),W===d.path&&be===d.source&&xe(b),Yt(A=>hy(A,d.source,d.path,b)),Z(null),E(""),q("success",`Omdøbte ${ze(d.path)} til ${ze(b)}.`),C&&await lt()}catch(A){q("error",A instanceof Error?A.message:"Kunne ikke omdøbe filen.")}finally{I(null),$(!1)}}function kl(d,b){return b==="pico"?le.some(S=>S.path===d):Ne.some(S=>S.path===d)}async function Fo(d,b){if(!kl(d,"pico"))return;const S=cy(d,le),C=Or[d]??await p(d);b!==void 0&&La(C)===La(b)||await g(S,C)}function Po(d){if(d.type!=="file"){he&&vn(void 0,!1),xe(d.path),ve(d.source);return}if(he&&$l(d)){q("warning","BLEPeripheral.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.");return}if(d.source==="local"){he&&vn(void 0,!1);const S=Ne.find(C=>C.path===d.path);et(d.path,Fn[pn("local",d.path)]??(S==null?void 0:S.content)??"","local");return}const b=pn("pico",d.path);if(Object.prototype.hasOwnProperty.call(Fn,b)){he&&vn(void 0,!1),et(d.path,Fn[b],"pico");return}if(Object.prototype.hasOwnProperty.call(Or,d.path)){he&&vn(void 0,!1),et(d.path,Or[d.path],"pico");return}ur(d.path)}async function la(){if(!x&&!he){const d=Bp();Qe(d),Xn(Lp(d)),Ce(!0),I(null);return}$(!0),I({value:4,label:he?"Tjekker biblioteker på Pico via Bluetooth...":"Tjekker biblioteker på Pico..."}),q("info",he?"Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...":"Tjekker om Picoens biblioteker er opdaterede før installation...");try{const d=Ae.length>0?Ae:he?await vl((b,S)=>I({value:b,label:S})):await bl(()=>Mt(dt.current));Qe(d),Xn(Lp(d)),Ce(!0),I(null)}catch(d){I(null),q("error",d instanceof Error?d.message:"Fil-tjek før installation fejlede.")}finally{$(!1)}}async function Qo(){if(Ce(!1),he){$(!0);try{const b=(Ae.length>0?Ae:Ua.map(C=>({...C,status:"unknown",detail:"Ikke tjekket"}))).filter(C=>Vt[C.id]&&!$l(C));if(b.length===0){q("info","Ingen filer valgt til installation.");return}let S=null;I({value:0,label:"Starter installation..."});for(const[C,A]of b.entries()){q("info",`Installerer ${A.label} via Bluetooth...`);const re=C/b.length*100,_e=100/b.length;await Fo(A.path,A.content),await g(A.path,A.content,(nt,qe)=>{I({value:Math.min(99,re+nt/100*_e),label:`${A.label}: ${qe}`})}),fs(A.path,A.content),q("success",`Installerede ${A.label}.`),A.kind==="library"&&(S=A),ko(A.path)&&gn(!0)}tt("Installation færdig"),await lt(!1),await Jn(),S&&bs(S)}catch(d){I(null),q("error",d instanceof Error?d.message:"BLE installation fejlede.")}finally{$(!1)}return}await Sn(async d=>{const S=(Ae.length>0?Ae:Ua.map(A=>({...A,status:"unknown",detail:"Ikke tjekket"}))).filter(A=>Vt[A.id]);if(S.length===0){q("info","Ingen filer valgt til installation.");return}let C=null;I({value:0,label:"Starter installation..."});for(const[A,re]of S.entries()){q("info",`Installerer ${re.label}...`);const _e=A/S.length*100,nt=100/S.length;await d.replaceTextSafely(re.path,re.content,(qe,Ht)=>{I({value:Math.min(99,_e+qe/100*nt),label:`${re.label}: ${Ht}`})},{createBackup:!0}),fs(re.path,re.content),q("success",`Installerede ${re.label}.`),re.kind==="library"&&(C=re)}tt("Installation færdig"),await lt(!1),await Jn(),C&&bs(C)})}function _s(){return(Ae.length>0?Ae:Bp()).filter(b=>Vt[b.id])}function Zo(){const d=_s();if(d.length===0){q("info","Ingen filer valgt.");return}for(const b of d)Zn(b.path,b.content,!1);Ce(!1),q("success",`Gemte ${d.length} filer i browseren.`)}function gs(){const d=_s();if(d.length===0){q("info","Ingen filer valgt.");return}d.forEach((b,S)=>{window.setTimeout(()=>{El(ze(b.path),b.content)},S*120)}),Ce(!1),q("success",`Starter download af ${d.length} filer.`)}function bs(d){et(d.path,d.content,"pico"),Pt(d.path,d.content),q("info",`Åbnede ${d.label} i editoren.`)}function Wo(d,b){Xn(S=>{if(d.kind!=="program")return{...S,[d.id]:b};const C={...S};for(const A of Ae)A.kind==="program"&&(C[A.id]=!1);return C[d.id]=b,C})}async function Jo(){if(lc(),he&&be==="pico"){q("warning","Bluetooth holder forbindelsen åben, så koden kan ikke køres direkte her. Gem filen, og genstart Picoen for at køre den.");return}if(be==="local"){await ec();return}const d=bn.current;if(!d){q("error",`${ze(W)} er gemt på Picoen, men der er ingen USB-forbindelse til Pico-terminalen.`);return}if(W.endsWith(".py")){if(!Ja()&&(q("info",`${ze(W)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`),!await Sl())){q("error","Pico-forbindelsen blev afbrudt under gemning.");return}if(G)return;yn(),Un.current="",Kt(!0);try{await d.runFile(W,()=>{yn(),Un.current="",_l.current=!1,fl(!0),Tt.current=!0}),q("success",`Kører ${ze(W)}. Brug Stop for at afbryde.`)}catch(b){fl(!1),Tt.current=!1,yn(),Un.current="",q("error",b instanceof Error?b.message:"Kunne ikke starte koden.")}return}$(!0);try{const b=await d.exec(ae,2e4);b.output.trim()&&q("info",b.output),b.error.trim()&&gl(b.error,ae),!b.output.trim()&&!b.error.trim()&&q("success","Koden kørte uden output.")}catch(b){q("error",b instanceof Error?b.message:"Kunne ikke køre koden.")}finally{$(!1)}}async function ec(){const d=Sf(ae,{allowInput:!0});if(d.some(C=>C.level==="error")){for(const C of d){const A=C.line?`Linje ${C.line}: `:"";q(C.level==="error"?"error":"warning",`${A}${C.text}`)}return}const b=new AbortController;Qn.current=b;const S=new z0;Gn.current=S,$(!0),Xa(!0),Kt(!0),q("info",x?"Starter offline MicroPython for browser-filen.":"Starter offline MicroPython. Forbind Pico med USB for at køre på selve Picoen.");try{const C=[],A=await S.run(ae,{signal:b.signal,onOutput:qe=>{C.push(qe),q("info",qe)}});for(const qe of A.issues){const Ht=qe.line?`Linje ${qe.line}: `:"";q(qe.level==="error"?"error":"warning",`${Ht}${qe.text}`)}const re=[...C,A.output].filter(Boolean).join(`
`).trim(),_e=A.output.trim();!A.error.trim()&&ny(re)?gl(re,ae):(_e&&q("info",_e),A.error.trim()&&gl(A.error,ae,A.unavailable?"warning":"error")),A.ok&&!re&&!A.error.trim()&&q("success","Offline MicroPython kørte uden output.")}finally{Qn.current=null,Gn.current=null,S.dispose(),Xa(!1),$(!1)}}async function tc(){var b,S,C;if(dl){(b=Qn.current)==null||b.abort(),(S=Gn.current)==null||S.stop(),q("warning","Stoppede offline MicroPython."),Kt(!0);return}if(!sn&&Nt){(C=Hn.current)==null||C.reset(),Dr(!1),q("warning","Stoppede Browser-MicroPython-terminalen. Variablerne i browser-terminalen blev nulstillet."),Kt(!0);return}const d=bn.current;if(d)try{await d.stop(),q("warning","Stoppede koden på Pico.")}catch(A){q("error",A instanceof Error?A.message:"Kunne ikke stoppe koden.")}finally{fl(!1),Tt.current=!1,yn(),Un.current="",Kt(!0)}}function nc(){const d=st.current;if(!d)return;const b=d.scrollHeight-d.scrollTop-d.clientHeight<12;Kt(b)}function rc(){ne([]),Kt(!0)}async function ii(){const d=Lt?tn:tn.trimEnd();if(Lt){if(!sn){const C=Gn.current;if(!C){q("warning","Browser-MicroPython kører ikke lige nu."),wn();return}Kn(""),Kt(!0),C.sendInput(d),wn();return}const S=bn.current;if(!S){q("warning","Pico-terminalen er ikke forbundet."),wn();return}Kn(""),Kt(!0);try{await S.sendProgramInput(d)}catch(C){q("error",C instanceof Error?C.message:"Kunne ikke sende input til Pico-koden.")}finally{wn()}return}if(!d.trim())return;if(hl(S=>(S.at(-1)===d?S:[...S,d]).slice(-80)),nn(null),Bt(null),Qa){q("warning",sn?"Tryk Stop, før du skriver i Pico-terminalen.":"Stop offline MicroPython, før du skriver i browser-terminalen."),wn();return}if(!sn){const S=Sf(d);if(S.some(A=>A.level==="error")){for(const A of S){const re=A.line?"Linje "+A.line+": ":"";q(A.level==="error"?"error":"warning",re+A.text)}wn();return}const C=Hn.current??new C0;Hn.current=C,Kn(""),Dr(!0),Kt(!0),q("info",">>> "+d);try{let A=!1;const re=await C.send(d,{timeoutMs:15e3,onOutput:nt=>{A=!0,q("info",nt)}}),_e=re.output.trim();_e&&!A&&q("info",_e),re.error.trim()&&gl(re.error,d,re.unavailable?"warning":"error")}catch(A){q("error",A instanceof Error?A.message:"Browser-MicroPython-terminalen fejlede.")}finally{Dr(!1),wn()}return}if(he){q("warning","Terminalen bruger USB Serial. Bluetooth-forbindelsen kan vise filer, men kan ikke modtage frie terminalkommandoer."),wn();return}const b=bn.current;if(!x||!b){q("warning","Forbind en microcontroller med USB for at skrive i MicroPython-terminalen."),wn();return}Kn(""),Dr(!0),Kt(!0),_l.current=!0,q("info",">>> "+d);try{await b.sendFriendlyLine(d)}catch(S){_l.current=!1,q("error",S instanceof Error?S.message:"Kunne ikke sende kommando til MicroPython REPL.")}finally{Dr(!1),wn()}}function wn(){window.requestAnimationFrame(()=>{const d=ot.current;if(!d||d.disabled)return;d.focus();const b=d.value.length;d.selectionStart=b,d.selectionEnd=b})}function aa(d,b,S){return S.length===0?null:f.jsxs("div",{className:"ide-install-group",children:[f.jsxs("div",{className:"ide-install-group-head",children:[f.jsx("h3",{children:d}),f.jsx("p",{children:b})]}),S.map(C=>{const A=he&&$l(C);return f.jsxs("label",{className:`ide-install-row ${A?"disabled":""}`,children:[f.jsx("input",{type:"checkbox",checked:!!Vt[C.id],disabled:A,onChange:re=>Wo(C,re.target.checked)}),f.jsxs("span",{children:[f.jsxs("strong",{children:[Nl(C),(C.kind==="library"||!x&&!he)&&f.jsx("em",{className:`ide-install-status status-${C.status}`,children:A?"USB":uy(C.status)})]}),f.jsxs("small",{children:[C.description,!x&&!he?` ${C.detail}`:""]})]})]},C.id)})]})}function Nl(d){return d.kind==="program"?d.label.replace(/\s*\(main\.py\)$/i,""):d.label}function lc(){Pn&&ne([]),Kt(!0)}function ys(d,b){const S=d.indexOf(`
`,b);return S===-1?d.length:S}function Hr(d,b){const S=Hp(d,b);if(!S||S.query.length<1){Rt(null);return}const C=S.query.toLowerCase(),A=Up.filter(_e=>_e.label.toLowerCase().startsWith(C)&&!pf(_e,S.query)).slice(0,8),re=Gp(rn.current,S.start);Rt(A.length>0&&re?{items:A,selected:0,start:S.start,end:b,position:re}:null)}function Rl(d,b){const S=Hp(d,b);if(!S||S.query.length<1){Bt(null);return}const C=S.query.toLowerCase(),A=Up.filter(_e=>_e.label.toLowerCase().startsWith(C)&&!pf(_e,S.query)).slice(0,8),re=Gp(ot.current,S.start);Bt(A.length>0&&re?{items:A,selected:0,start:S.start,end:b,position:re}:null)}function si(d){const b=d.value.slice(d.selectionStart,d.selectionEnd);Ka(ly(b)?b:"")}function ia(d=Ke==null?void 0:Ke.items[Ke.selected]){if(!d||!Ke)return;const b=ae.slice(0,Ke.start)+d.insert+ae.slice(Ke.end),S=Ke.start+d.insert.length-(d.insert.endsWith("()")?1:0);Pe(b),Yt(C=>({...C,[pn(be,W)]:b})),Rt(null),window.requestAnimationFrame(()=>{const C=rn.current;C&&(C.focus(),C.selectionStart=S,C.selectionEnd=S,Hr(b,S))})}function fr(d=ft==null?void 0:ft.items[ft.selected]){if(!d||!ft)return;const b=tn.slice(0,ft.start)+d.insert+tn.slice(ft.end),S=ft.start+d.insert.length-(d.insert.endsWith("()")?1:0);Kn(b),Bt(null),window.requestAnimationFrame(()=>{const C=ot.current;C&&(C.focus(),C.selectionStart=S,C.selectionEnd=S,Rl(b,S))})}function ac(d){var er;if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="s"){d.preventDefault(),!G&&W.trim()&&ms();return}if(Ke){if(d.key==="ArrowDown"){d.preventDefault(),Rt(Ge=>Ge&&{...Ge,selected:(Ge.selected+1)%Ge.items.length});return}if(d.key==="ArrowUp"){d.preventDefault(),Rt(Ge=>Ge&&{...Ge,selected:(Ge.selected-1+Ge.items.length)%Ge.items.length});return}if(d.key==="Tab"){d.preventDefault(),ia();return}if(d.key==="Enter"){if(!(Ke.items[Ke.selected]&&pf(Ke.items[Ke.selected],ae.slice(Ke.start,Ke.end)))){d.preventDefault(),ia();return}Rt(null)}if(d.key==="Escape"){d.preventDefault(),Rt(null);return}}if(d.key==="Enter"){d.preventDefault();const Ge=d.currentTarget,tr=Ge.selectionStart,sa=Ge.selectionEnd,Tl=ae.lastIndexOf(`
`,tr-1)+1,Gr=ae.slice(Tl,tr),oi=((er=Gr.match(/^[ \t]*/))==null?void 0:er[0])??"",ci=Gr.trimEnd().endsWith(":")?"    ":"",ui=`
${oi}${ci}`,jt=ae.slice(0,tr)+ui+ae.slice(sa),Yn=tr+ui.length;Br(jt,Yn),window.requestAnimationFrame(()=>{Ge.selectionStart=Yn,Ge.selectionEnd=Yn});return}if(d.key!=="Tab")return;d.preventDefault();const b=d.currentTarget,S=b.selectionStart,C=b.selectionEnd,A="    ";if(d.shiftKey){const Ge=ae.lastIndexOf(`
`,S-1)+1,tr=S===C?ys(ae,S):C,sa=ae.slice(Ge,tr);let Tl=0,Gr=0;const oi=sa.replace(/(^|\n)( {1,4}|\t)/g,(ui,jt,Yn,vs)=>{const fi=Yn.length;return Ge+vs<S&&(Tl+=fi),Gr+=fi,jt});if(Gr===0)return;const ci=ae.slice(0,Ge)+oi+ae.slice(tr);Br(ci,Math.max(Ge,S-Tl)),window.requestAnimationFrame(()=>{b.selectionStart=Math.max(Ge,S-Tl),b.selectionEnd=S===C?b.selectionStart:Math.max(b.selectionStart,C-Gr)});return}if(S===C){const Ge=ae.slice(0,S)+A+ae.slice(C);Br(Ge,S+A.length),window.requestAnimationFrame(()=>{b.selectionStart=S+A.length,b.selectionEnd=S+A.length});return}const re=ae.lastIndexOf(`
`,S-1)+1,nt=ae.slice(re,C).replace(/^/gm,A),qe=nt.split(`
`).length,Ht=ae.slice(0,re)+nt+ae.slice(C);Br(Ht,S+A.length),window.requestAnimationFrame(()=>{b.selectionStart=S+A.length,b.selectionEnd=C+qe*A.length})}function ic(d){if(Lt){d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),ii());return}if(ft){if(d.key==="ArrowDown"){d.preventDefault(),Bt(b=>b&&{...b,selected:(b.selected+1)%b.items.length});return}if(d.key==="ArrowUp"){d.preventDefault(),Bt(b=>b&&{...b,selected:(b.selected-1+b.items.length)%b.items.length});return}if(d.key==="Enter"||d.key==="Tab"){d.preventDefault(),fr();return}if(d.key==="Escape"){d.preventDefault(),Bt(null);return}}if(d.key==="Tab"){d.preventDefault();const b=d.currentTarget,S=b.selectionStart,C=b.selectionEnd,A="    ",re=tn.slice(0,S)+A+tn.slice(C),_e=S+A.length;Kn(re),nn(null),Bt(null),window.requestAnimationFrame(()=>{b.selectionStart=_e,b.selectionEnd=_e});return}if(d.key==="ArrowUp"||d.key==="ArrowDown"){if(!(d.key==="ArrowUp"?d.currentTarget.selectionStart===0&&d.currentTarget.selectionEnd===0:d.currentTarget.selectionStart===tn.length&&d.currentTarget.selectionEnd===tn.length)||Fl.length===0)return;d.preventDefault();const S=d.key==="ArrowUp"?yt===null?Fl.length-1:Math.max(0,yt-1):yt===null||yt+1>=Fl.length?null:yt+1;nn(S);const C=S===null?"":Fl[S]??"";Kn(C),Bt(null),window.requestAnimationFrame(()=>{const A=ot.current;A&&(A.selectionStart=C.length,A.selectionEnd=C.length)});return}d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),ii())}return f.jsxs("div",{className:"screen ide-screen",children:[f.jsx(Of,{title:"Pico Kodeværksted",onMenu:()=>o()}),Pl?f.jsx("div",{className:"ide-size-gate",role:"dialog","aria-modal":"true","aria-labelledby":"ide-size-title",children:f.jsxs("div",{className:"ide-size-gate-panel",children:[f.jsx("h2",{id:"ide-size-title",children:"Brug en bærbar for at bruge Kodeværkstedet"}),f.jsx("p",{children:"Denne skærm er for lille, så du skal åbne Kodeværkstedet på en bærbar eller en større skærm."})]})}):f.jsxs("div",{className:"ide-layout",children:[f.jsxs("section",{className:"ide-panel ide-files-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("h2",{children:"Filer"}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:ai,"aria-label":"Ny fil",title:"Ny fil",children:f.jsx(Xt,{name:"plus",size:20})}),f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>{var d;return(d=Fa.current)==null?void 0:d.click()},"aria-label":"Importer fil",title:"Importer fil",children:f.jsx(Xt,{name:"upload",size:20})}),f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>lt(),disabled:!x&&!he||G,"aria-label":"Opdater filer",title:"Opdater filer",children:f.jsx(Xt,{name:"refresh",size:20})})]})]}),f.jsx("div",{className:"ide-file-list",children:xn.length===0?f.jsx("button",{type:"button",disabled:!0,children:"Ingen filer læst"}):xn.map(d=>{if(d.kind==="separator"){const A=d.id==="pico-files"&&!x&&!he;return f.jsxs(U.Fragment,{children:[f.jsx("div",{className:"ide-file-separator",children:f.jsx("span",{children:d.label})}),A&&f.jsx("div",{className:"ide-file-disconnected",role:"status",children:"Ikke forbundet"})]},d.id)}const b=he&&$l(d),S=Fn[pn(d.source,d.path)],C=S!==void 0&&S!==oy(d,Ne,Or);return f.jsxs("div",{className:`ide-file-row ${W===d.path&&be===d.source?"active":""} ${b?"protected":""}`,children:[f.jsxs("button",{type:"button",onClick:()=>Po(d),disabled:b,title:b?"Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her":void 0,children:[f.jsx("span",{children:d.name}),f.jsxs("small",{title:C?"Ikke gemte ændringer":"Ingen ikke gemte ændringer",children:[d.source==="pico"&&d.versions.length>0&&f.jsx("em",{className:"ide-file-version-count",title:`${d.versions.length} gemte versioner i historikken`,children:d.versions.length}),f.jsx("i",{className:`ide-file-dirty-dot ${C?"dirty":"clean"}`,"aria-hidden":"true"})]})]}),f.jsx("button",{className:"ide-file-actions",type:"button",onClick:()=>$o(d),disabled:d.type!=="file"||G||b,"aria-label":`Filvalg for ${d.name}`,title:b?"Holder Bluetooth-forbindelsen i gang og kan ikke ændres her":"Filvalg",children:f.jsx(Xt,{name:"settings",size:16})})]},`${d.source}:${d.path}`)})})]}),f.jsxs("section",{className:"ide-panel ide-status-panel",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"ide-status-head",children:[f.jsx("h2",{children:he?"Forbundet Pico":"USB udvikling"}),!he&&f.jsx("span",{className:`ide-usb-status ${an.supported?"available":"unavailable"}`,title:an.message,"data-tooltip":an.message,role:"img","aria-label":an.message,tabIndex:0,children:"!"})]}),he&&f.jsxs("p",{children:[(s==null?void 0:s.deviceName)??"Pico"," er forbundet via Bluetooth."]})]}),!he&&f.jsxs("div",{className:"ide-actions",children:[f.jsx("button",{className:"btn btn-primary",type:"button",onClick:x?Wn:ti,disabled:!an.supported||j,children:j?"Forbinder...":x?"Afbryd USB":"Forbind USB"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:la,disabled:he||G,children:"Download"})]}),he&&f.jsxs("div",{className:"ide-actions",children:[f.jsxs("button",{className:"btn btn-primary ide-connection-state",type:"button",disabled:!0,children:[f.jsx(Xt,{name:"power",size:22}),"Bluetooth forbundet"]}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:la,disabled:G,children:"Startprogrammer og biblioteker"})]}),!he&&f.jsx("div",{className:"ide-runtime",children:f.jsx("div",{className:"ide-mini-actions single",children:f.jsx("button",{className:"btn btn-outline ide-disconnect-btn",type:"button",onClick:()=>gt(!0),children:"MicroPython"})})})]}),f.jsxs("section",{className:"ide-panel ide-editor-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("div",{className:"ide-editor-title",children:f.jsxs("h2",{children:[ze(W),f.jsxs("small",{children:[Ho," bytes"]})]})}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:"btn btn-outline",type:"button",onClick:Jo,disabled:G,children:"Kør"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:tc,disabled:!dl&&!(!sn&&Nt)&&(!x||!bt),children:"Stop"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:xl,disabled:G||!W.trim(),children:"Gem"}),f.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>hs(),disabled:G||!W.trim(),children:"Slet"})]})]}),ei(),f.jsxs("div",{className:"ide-editor-wrap",children:[f.jsx("div",{className:"ide-line-numbers","aria-hidden":"true",style:{transform:`translateY(${-Kl.top}px)`},children:Array.from({length:is},(d,b)=>f.jsx("span",{children:b+1},b))}),f.jsx("pre",{className:"ide-highlight","aria-hidden":"true",style:{transform:`translate(${-Kl.left}px, ${-Kl.top}px)`},children:iy(ae,Uo)}),f.jsx("textarea",{ref:rn,className:"ide-editor",value:ae,onChange:d=>Br(d.target.value,d.target.selectionStart),onKeyDown:ac,onKeyUp:d=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||Hr(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>{Hr(d.currentTarget.value,d.currentTarget.selectionStart),si(d.currentTarget)},onSelect:d=>si(d.currentTarget),onScroll:d=>{Ar({top:d.currentTarget.scrollTop,left:d.currentTarget.scrollLeft}),Ke&&Hr(d.currentTarget.value,d.currentTarget.selectionStart)},readOnly:G||!!se,"aria-busy":G||!!se,spellCheck:!1}),Ke&&f.jsx("div",{className:"ide-autocomplete",role:"listbox","aria-label":"Kodeforslag",style:{left:Ke.position.left,top:Ke.position.top},children:Ke.items.map((d,b)=>f.jsx("button",{className:b===Ke.selected?"active":"",type:"button",onMouseDown:S=>{S.preventDefault(),ia(d)},role:"option","aria-selected":b===Ke.selected,children:d.label},d.label))}),se&&f.jsxs("div",{className:"ide-editor-loading",role:"status","aria-live":"polite",children:[f.jsx("span",{className:"spinner","aria-hidden":"true"}),f.jsxs("strong",{children:["Indlæser ",ze(se),"..."]})]})]})]}),f.jsxs("section",{className:"ide-panel ide-terminal-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("h2",{children:"Terminal"}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${ir?"":"active"}`,type:"button",onClick:()=>ls(d=>!d),"aria-label":ir?"Tekniske fejl er slået fra":"Tekniske fejl er slået til","aria-pressed":!ir,title:ir?"Vis originale tekniske fejl":"Viser originale tekniske fejl",children:"Teknisk"}),f.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${Pn?"active":""}`,type:"button",onClick:()=>pl(d=>!d),"aria-pressed":Pn,title:Pn?"Terminalen ryddes, hver gang du trykker Kør":"Terminalen beholder tekst, når du trykker Kør",children:"Ryd ved Kør"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:rc,disabled:P.length===0,children:"Ryd"})]})]}),f.jsxs("div",{className:"ide-terminal","aria-live":"polite",ref:st,onScroll:nc,onClick:()=>{var d;return(d=ot.current)==null?void 0:d.focus()},children:[P.length===0?f.jsx("div",{className:"term-line",children:"Ingen terminaldata endnu."}):P.map((d,b)=>f.jsx("div",{className:`term-line term-${d.level}`,children:d.technical&&!ir?d.technical:d.text},`${b}-${d.text}`)),f.jsxs("form",{className:`ide-terminal-command ${Qa&&!Lt?"locked":""} ${Lt?"stdin":""}`,onSubmit:d=>{d.preventDefault(),ii()},children:[f.jsx("span",{"aria-hidden":"true",children:Jl}),f.jsx("textarea",{ref:ot,value:tn,onChange:d=>{Kn(d.target.value),nn(null),Lt?Bt(null):Rl(d.target.value,d.target.selectionStart)},onKeyDown:ic,onKeyUp:d=>{Lt||["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||Rl(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>{Lt||Rl(d.currentTarget.value,d.currentTarget.selectionStart)},disabled:ss,placeholder:os,"aria-label":Lt?"Input til kørende Pico-kode":"MicroPython-terminalkommando",title:os,rows:Math.max(1,tn.split(`
`).length)})]}),ft&&f.jsx("div",{className:"ide-autocomplete ide-repl-autocomplete",role:"listbox","aria-label":"Terminalforslag",style:{left:ft.position.left,top:ft.position.top},children:ft.items.map((d,b)=>f.jsx("button",{className:b===ft.selected?"active":"",type:"button",onMouseDown:S=>{S.preventDefault(),fr(d)},role:"option","aria-selected":b===ft.selected,children:d.label},d.label))})]})]})]}),f.jsx("input",{ref:Fa,type:"file",accept:".py,.txt,.json,.csv",className:"sr-only",onChange:d=>{var b;Vo((b=d.target.files)==null?void 0:b[0]),d.currentTarget.value=""}}),D&&f.jsx(St,{title:"Gem fil",onClose:()=>X(!1),children:f.jsxs("div",{className:"ide-save-options",children:[f.jsx("button",{className:"btn btn-primary",type:"button",onClick:ra,children:"Gem i browser"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>void Sl(),disabled:!x&&!he||G,children:"Gem på Pico"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:wl,children:"Download til computer"})]})}),Ue&&f.jsx(St,{title:"Startprogrammer og biblioteker",onClose:()=>Ce(!1),children:f.jsxs("div",{className:"ide-install-list",children:[f.jsx("p",{className:"ide-install-note",children:x||he?"Vælg et startprogram og de biblioteker dit projekt bruger. Installer lægger filerne på Picoen.":"Du er ikke forbundet til en Pico. Du kan gemme filerne i browseren eller downloade dem til computeren, men de virker først på Picoen, når de er installeret der."}),f.jsxs("div",{className:"ide-install-grid",children:[aa("Startprogrammer (main.py)","Starter automatisk på Picoen.",Ae.filter(d=>d.kind==="program")),aa("Biblioteker","Ekstra Python-filer som dine programmer kan importere.",Ae.filter(d=>d.kind==="library"))]}),f.jsxs("div",{className:"ide-install-actions",children:[(x||he)&&f.jsx("button",{className:"btn btn-primary",type:"button",onClick:Qo,disabled:G,children:"Installer valgte på Pico"}),f.jsx("button",{className:x||he?"btn btn-outline":"btn btn-primary",type:"button",onClick:Zo,disabled:G,children:"Gem valgte i browser"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:gs,disabled:G,children:"Download valgte"})]})]})}),jr&&f.jsx(St,{title:"main.py er gemt",onClose:()=>gn(!1),children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:"Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter."}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>void li("control"),disabled:G,children:"Genstart og åbn kontrolpanel"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void li("ide"),disabled:G,children:"Genstart og bliv i Kodeværksted"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>gn(!1),disabled:G,children:"Senere"})]})}),ge&&f.jsx(St,{title:"Installer MicroPython",onClose:()=>gt(!1),children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:"Hvis Picoen er helt frisk, skal MicroPython først lægges på den."}),f.jsxs("ol",{className:"micropython-steps",children:[f.jsx("li",{children:"Hold BOOTSEL-knappen nede."}),f.jsx("li",{children:"Sæt Picoen i USB, og slip derefter BOOTSEL."}),f.jsx("li",{children:"Vælg Pico-model og MicroPython-version herunder, og download UF2-filen."}),f.jsxs("li",{children:["Kopier UF2-filen til drevet ",f.jsx("strong",{children:"RPI-RP2"})]})]}),f.jsxs("div",{className:"micropython-selects",children:[f.jsx("label",{htmlFor:"micropython-board",children:"Pico-model"}),f.jsx("select",{id:"micropython-board",value:Et,onChange:d=>Bn(d.target.value),children:Wl.map(d=>f.jsx("option",{value:d,children:d},d))}),f.jsx("label",{htmlFor:"micropython-version",children:"MicroPython-version"}),f.jsx("select",{id:"micropython-version",value:(vt==null?void 0:vt.version)??zt,onChange:d=>Mr(d.target.value),children:$t.map(d=>f.jsxs("option",{value:d.version,children:[d.version," (",d.date,")"]},`${d.board}:${d.version}:${d.date}`))})]}),vt&&f.jsx("a",{className:"btn btn-primary btn-block",href:vt.url,download:vt.fileName,children:"Download UF2"}),f.jsx("a",{className:"btn btn-outline btn-block",href:"https://www.raspberrypi.com/documentation/microcontrollers/micropython.html",target:"_blank",rel:"noreferrer",children:"Se vejledning"})]})}),z&&f.jsx(St,{title:"Ny Python-fil",onClose:()=>Q(!1),children:f.jsxs("form",{className:"ide-new-file-form",onSubmit:d=>{d.preventDefault(),Yo()},children:[f.jsx("label",{htmlFor:"new-pico-file",children:"Filnavn"}),f.jsxs("div",{className:"ide-new-file-row",children:[f.jsx("input",{id:"new-pico-file",value:ue,onChange:d=>Se(d.target.value),autoFocus:!0,placeholder:"test"}),f.jsx("span",{children:".py"})]}),f.jsxs("p",{children:["Skriv kun navnet. Appen tilføjer .py automatisk og opretter filen i ",Zl,"."]}),f.jsx("button",{className:"btn btn-primary",type:"submit",disabled:!zp(ue),children:"Opret"})]})}),L&&f.jsx(St,{title:ze(L.path),onClose:()=>Z(null),children:f.jsxs("div",{className:"ide-file-action-modal",children:[f.jsxs("form",{className:"ide-file-rename-form",onSubmit:d=>{d.preventDefault(),Ko()},children:[f.jsx("label",{htmlFor:"rename-pico-file",children:"Filnavn"}),f.jsxs("div",{className:"ide-new-file-row",children:[f.jsx("input",{id:"rename-pico-file",value:Ee,onChange:d=>E(d.target.value),placeholder:"min_kode"}),f.jsxs("span",{children:[".",Zi(L.path)]})]}),f.jsxs("p",{children:["Skriv kun navnet. Appen beholder filendelsen .",Zi(L.path)," automatisk."]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!hf(Ee,Zi(L.path))||hf(Ee,Zi(L.path))===L.path||G,children:"Gem navn"})]}),f.jsx("div",{className:"ide-file-action-buttons",children:f.jsx("button",{className:"btn btn-outline btn-danger btn-block",type:"button",onClick:()=>hs(L),disabled:G,children:"Slet"})}),f.jsxs("section",{className:"ide-version-history",children:[f.jsx("h4",{children:"Versionshistorik"}),L.source!=="pico"?f.jsx("p",{children:"Versioner gemmes kun for filer på Picoen."}):L.versions.length===0?f.jsx("p",{children:"Versionshistorik: 0 gemte versioner."}):f.jsx("div",{className:"ide-version-list",children:L.versions.map(d=>f.jsxs("div",{className:"ide-version-row",children:[f.jsx("span",{children:ze(d.path)}),f.jsx("small",{children:d.size!==void 0?`${d.size} bytes`:"Gemt på Pico"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>void Io(d),disabled:G,children:"Gendan"}),f.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Xo(d),disabled:G,children:"Slet"})]},d.path))})]})]})})]})}function zp(o){var c;const a=(c=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.replace(/\.py$/i,"").replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"");return a?`/${a}.py`:""}function J0(o){const a=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop(),c=a==null?void 0:a.match(/^(.+)\.(py|txt|json|csv)$/i);if(!c)return"";const s=u_(c[1]);return s?`/${s}.${c[2].toLowerCase()}`:""}function hf(o,a="py"){const c=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop();if(!c)return"";const s=c.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);if(!s)return"";const u=u_(s[1]),h=a.replace(/^\./,"").toLowerCase(),p=(s[2]??(h||"py")).toLowerCase();return u?`/${u}.${p}`:""}function ey(o){return ze(o).replace(/\.(py|txt|json|csv)$/i,"")}function u_(o){return o.replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"")}function Zi(o){var s;const a=ze(o).match(/\.([a-z0-9]+)$/i),c=(s=a==null?void 0:a[1])==null?void 0:s.toLowerCase();return c&&["py","txt","json","csv"].includes(c)?c:"py"}function La(o){return o.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}function Bp(){return Ua.map(o=>({...o,status:"unknown",detail:"Kan gemmes uden Pico. Forbind en Pico for at installere."}))}function Lp(o){const a={};return o.forEach(c=>{a[c.id]=!1}),a}function ze(o){return o.split("/").filter(Boolean).pop()??o}function ko(o){return o.replace(/\\/g,"/").toLowerCase()==="/main.py"}function ty(o){return o instanceof DOMException&&o.name==="AbortError"}function ny(o){return/Traceback \(most recent call last\):/.test(o)||/\b(?:SyntaxError|NameError|TypeError|ValueError|IndentationError|ImportError|ModuleNotFoundError|ZeroDivisionError|IndexError|KeyError|AttributeError):/.test(o)}function $l(o){return ry(o)}function ry(o){return o.path.replace(/\\/g,"/").toLowerCase()==="/bleperipheral.py"}const Up=[...["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"].map(o=>({label:o,insert:`${o}${["for","if","while","def","class","elif","else","try","except","finally","with"].includes(o)?" ":""}`})),...["abs","all","any","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","exec","filter","float","getattr","hasattr","hash","hex","id","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","open","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","zip"].map(o=>({label:`${o}()`,insert:`${o}()`})),{label:"for i in range():",insert:"for i in range():"},{label:"while True:",insert:"while True:"},{label:"if True:",insert:"if True:"},{label:"time",insert:"time"},{label:"time.",insert:"time."},{label:"time.sleep",insert:"time.sleep"},{label:"time.sleep()",insert:"time.sleep()"},{label:"time.sleep_ms()",insert:"time.sleep_ms()"},{label:"time.ticks_ms()",insert:"time.ticks_ms()"},{label:"time.ticks_diff()",insert:"time.ticks_diff()"},{label:"machine",insert:"machine"},{label:"machine.",insert:"machine."},{label:"machine.Pin",insert:"machine.Pin"},{label:"machine.PWM",insert:"machine.PWM"},{label:"machine.ADC",insert:"machine.ADC"},{label:"machine.I2C",insert:"machine.I2C"},{label:"machine.SPI",insert:"machine.SPI"},{label:"machine.reset()",insert:"machine.reset()"},{label:"Pin()",insert:"Pin()"},{label:"PWM()",insert:"PWM()"},{label:"ADC()",insert:"ADC()"},{label:"I2C()",insert:"I2C()"},{label:"SPI()",insert:"SPI()"},{label:"Pin.OUT",insert:"Pin.OUT"},{label:"Pin.IN",insert:"Pin.IN"},{label:"Pin.PULL_UP",insert:"Pin.PULL_UP"},{label:"import time",insert:"import time"},{label:"import machine",insert:"import machine"},{label:"from machine import Pin",insert:"from machine import Pin"},{label:"from machine import Pin, PWM",insert:"from machine import Pin, PWM"},{label:"BLEPeripheral",insert:"BLEPeripheral"},{label:"PicoRobotics",insert:"PicoRobotics"},{label:"NeoPixel",insert:"NeoPixel"},{label:"ValueError",insert:"ValueError"},{label:"TypeError",insert:"TypeError"},{label:"OSError",insert:"OSError"},{label:"Exception",insert:"Exception"}];function Hp(o,a){const s=o.slice(0,a).match(/[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_.]*$/);return!s||s.index===void 0?null:{query:s[0],start:s.index}}function pf(o,a){const c=o.insert.trim();return!/[().]/.test(c)&&c.toLowerCase()===a.toLowerCase()}function ly(o){return/^[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_]*$/.test(o)}function Gp(o,a){if(!o)return null;const c=o.closest(".ide-terminal")??o.parentElement;if(!c)return null;const s=window.getComputedStyle(o),u=document.createElement("div"),h=document.createElement("span"),p=c.getBoundingClientRect(),g=o.getBoundingClientRect();u.style.position="absolute",u.style.visibility="hidden",u.style.pointerEvents="none",u.style.whiteSpace="pre-wrap",u.style.overflowWrap="break-word",u.style.boxSizing=s.boxSizing,u.style.width=`${o.clientWidth}px`,u.style.padding=s.padding,u.style.border=s.border,u.style.font=s.font,u.style.lineHeight=s.lineHeight,u.style.letterSpacing=s.letterSpacing,u.style.tabSize=s.tabSize,u.style.left=`${g.left-p.left-o.scrollLeft}px`,u.style.top=`${g.top-p.top-o.scrollTop}px`,u.textContent=o.value.slice(0,a),h.textContent=o.value.slice(a,a+1)||" ",u.appendChild(h),c.appendChild(u);const v=h.getBoundingClientRect();u.remove();const y=ay(v.left-p.left,8,Math.max(8,c.clientWidth-296)),x=v.bottom-p.top+6,N=x+218>c.clientHeight?Math.max(8,v.top-p.top-218):x;return{left:y,top:N}}function ay(o,a,c){return Math.max(a,Math.min(c,o))}function iy(o,a=""){const c=/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,s=/(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm,u=[];return o.split(/(\r?\n)/).forEach((h,p)=>{if(h===`
`||h===`\r
`){u.push(f.jsx("br",{},`br-${p}`));return}let g=0;[...h.matchAll(s)].forEach((y,x)=>{const N=y.index??0;N>g&&u.push(...Vp(h.slice(g,N),c,`${p}-${x}-plain`,a));const j=y[0],F=j.startsWith("#")?"tok-comment":j.startsWith('"')||j.startsWith("'")?"tok-string":/^\d/.test(j)?"tok-number":"tok-builtin";u.push(...Mo(j,a,`${p}-${x}-token`,F)),g=N+j.length}),g<h.length&&u.push(...Vp(h.slice(g),c,`${p}-tail`,a))}),u.length?u:" "}function Vp(o,a,c,s=""){const u=[];let h=0;const p=new RegExp(a.source,"g");return[...o.matchAll(p)].forEach((g,v)=>{const y=g.index??0;y>h&&u.push(...Mo(o.slice(h,y),s,`${c}-${v}-plain`)),u.push(...Mo(g[0],s,`${c}-${v}-keyword`,"tok-keyword")),h=y+g[0].length}),h<o.length&&u.push(...Mo(o.slice(h),s,`${c}-plain-end`)),u}function Mo(o,a,c,s=""){if(!a)return[f.jsx("span",{className:s||void 0,children:o},c)];const u=[],h=a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),p=new RegExp(`(?<![A-Za-zÆØÅæøå0-9_])(${h})(?![A-Za-zÆØÅæøå0-9_])`,"g");let g=0;return[...o.matchAll(p)].forEach((v,y)=>{const x=v.index??0;x>g&&u.push(f.jsx("span",{className:s||void 0,children:o.slice(g,x)},`${c}-${y}-before`)),u.push(f.jsx("span",{className:`${s} tok-match`.trim(),children:v[0]},`${c}-${y}-match`)),g=x+v[0].length}),g<o.length&&u.push(f.jsx("span",{className:s||void 0,children:o.slice(g)},`${c}-after`)),u.length?u:[f.jsx("span",{className:s||void 0,children:o},c)]}function _f(o){return o.length>0?o:[{path:Ef,content:c_,uploaded:!1,updatedAt:Date.now()}]}function sy(o,a,c,s){const u=o.filter(h=>h.path!==a);return[{path:a,content:c,uploaded:s,updatedAt:Date.now()},...u].sort((h,p)=>p.updatedAt-h.updatedAt)}function oy(o,a,c){var s;return o.source==="pico"?c[o.path]:(s=a.find(u=>u.path===o.path))==null?void 0:s.content}function jo(o){const a=o.replace(/\\/g,"/"),c=a.lastIndexOf("/"),s=c>=0?a.slice(0,c+1):"",h=(c>=0?a.slice(c+1):a).match(/^(.+)_backup(\d+)(\.[^.]+)$/i);return h?{originalPath:`${s}${h[1]}${h[3]}`,index:parseInt(h[2],10)}:null}function Ha(o){return jo(o)!==null}function kf(o){const a=new Map;for(const c of o){const s=jo(c.path);if(!s)continue;const u=a.get(s.originalPath)??[];u.push(c),a.set(s.originalPath,u)}for(const c of a.values())c.sort((s,u)=>{var h,p;return(((h=jo(u.path))==null?void 0:h.index)??0)-(((p=jo(s.path))==null?void 0:p.index)??0)});return a}function cy(o,a){const c=o.replace(/\\/g,"/"),s=c.lastIndexOf("/"),u=s>=0?c.slice(0,s+1):"/",h=s>=0?c.slice(s+1):c.replace(/^\/+/,""),p=h.lastIndexOf("."),g=p>0?h.slice(0,p):h,v=p>0?h.slice(p):"",y=new Set(a.map(x=>x.path.toLowerCase()));for(let x=1;x<1e3;x+=1){const N=`${u}${g}_backup${x}${v}`;if(!y.has(N.toLowerCase()))return N}return`${u}${g}_backup${Date.now()}${v}`}function uy(o){return o==="ok"?"Nyeste":o==="outdated"?"Opdater":o==="missing"?"Mangler":"Ikke tjekket"}function fy(o,a,c,s){const u=new Map,h=kf(o);for(const x of o)Ha(x.path)||u.set(pn("pico",x.path),{kind:"file",name:x.name,path:x.path,type:x.type,size:x.size,source:"pico",uploaded:!0,versions:h.get(x.path)??[]});for(const x of a)u.set(pn("local",x.path),{kind:"file",name:ze(x.path),path:x.path,type:"file",source:"local",uploaded:!1,versions:[]});for(const x of Object.keys(c)){const[N,...j]=x.split(":"),F=j.join(":");if(N!=="local"&&N!=="pico"||!F)continue;const P=u.get(x);if(P){u.set(x,P);continue}u.set(x,{kind:"file",name:ze(F),path:F,type:"file",source:N,uploaded:!1,versions:N==="pico"?h.get(F)??[]:[]})}const p=[...u.values()].sort(my),g=p.filter(x=>x.source==="pico"),v=p.filter(x=>x.source==="local"),y=[];return g.length>0||s?y.push({kind:"separator",id:"pico-files",label:s?"Pico":"Microcontroller"},...g):y.push({kind:"separator",id:"pico-files",label:"Microcontroller"}),v.length>0&&y.push({kind:"separator",id:"browser-files",label:"Browser"},...v),y}const dy=new Map([["main.py",0],["devicesettings.txt",1],["layout.txt",2],["bleperipheral.py",3],["picofly.py",4],["picorobotics.py",5],["neopixel.py",6],["hcsr04.py",7]]);function my(o,a){const c=Yp(o.path),s=Yp(a.path);return c===null&&s===null?o.name.localeCompare(a.name,"da"):c===null?-1:s===null?1:c-s}function Yp(o){var c;const a=(c=o.replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.toLowerCase();return a?dy.get(a)??null:null}function qp(o,a,c){if(!(a in o))return o;const s={...o,[c]:o[a]};return delete s[a],s}function hy(o,a,c,s){const u=`${a}:${c}`;if(!(u in o))return o;const h={...o,[`${a}:${s}`]:o[u]};return delete h[u],h}function py({open:o}){const a=J(le=>le.screen),c=J(le=>le.active),s=J(le=>le.toggleSideMenu),u=J(le=>le.toggleDebugger),h=J(le=>le.setEditMode),p=J(le=>le.openMenuPage),g=J(le=>le.disconnect),v=J(le=>le.openPicoIde),y=J(le=>le.closePicoIde),x=J(le=>le.picoIdeOrigin),N=a==="dashboard",j=a==="control",F=a==="ide",P=j&&!!(c!=null&&c.canEdit),ne=!j||!!(c!=null&&c.isOwnedByMe)||!!(c!=null&&c.canEditCode),G=x==="control",$=x==="control"?"Kontrol Panel":"Hovedmenu";return f.jsxs(f.Fragment,{children:[f.jsx("div",{className:`scrim ${o?"open":"closing"}`,onClick:()=>s(!1)}),f.jsxs("nav",{className:`sidemenu sidemenu-${a} ${o?"open":"closing"}`,"aria-label":"Sidemenu",children:[N&&f.jsxs(f.Fragment,{children:[f.jsx(hn,{label:"Bruger",icon:"user",onClick:()=>p("user-settings")}),f.jsx(hn,{label:"Indstillinger",icon:"settings",onClick:()=>p("application-settings")}),f.jsx(hn,{label:"Kodeværksted",icon:"picoIde",onClick:v,disabled:!ne}),f.jsx(gf,{}),f.jsx(hn,{label:"Om appen",icon:"info",onClick:()=>p("application-about")}),f.jsx(hn,{label:"Hjælp",icon:"help",onClick:()=>p("application-help")}),f.jsx(hn,{label:"Fejlfinding",icon:"debugger",onClick:()=>u(!0)})]}),j&&f.jsxs(f.Fragment,{children:[f.jsx(hn,{label:"Indstillinger",icon:"settings",onClick:()=>p("device-settings")}),f.jsx(hn,{label:"Rediger",icon:"edit",onClick:()=>h(!0),disabled:!P}),f.jsx(hn,{label:"Kodeværksted",icon:"picoIde",onClick:v,disabled:!ne}),f.jsx(gf,{}),f.jsx(hn,{label:"Hjælp",icon:"help",onClick:()=>p("device-help")}),f.jsx(hn,{label:"Fejlfinding",icon:"debugger",onClick:()=>u(!0)})]}),F&&f.jsxs(f.Fragment,{children:[f.jsx(hn,{label:$,icon:"back",onClick:y}),f.jsx(gf,{})]}),f.jsx("div",{className:"spacer"}),(j||F&&G)&&f.jsx(hn,{label:"Forlad",icon:"exit",onClick:()=>g()})]})]})}function hn({label:o,icon:a,disabled:c,onClick:s}){return f.jsxs("button",{className:"iconbtn",type:"button",onClick:s,disabled:c,"aria-label":o,children:[f.jsx(Xt,{name:a}),f.jsx("span",{children:o})]})}function gf(){return f.jsxs("a",{className:"iconbtn sidemenu-link",href:"https://www.teknologiskolen.dk/",target:"_blank",rel:"noreferrer","aria-label":"Teknologiskolen",children:[f.jsx("img",{src:Db,alt:""}),f.jsx("span",{children:"Teknologiskolen"})]})}const _y={error:"term-error",success:"term-success",warning:"term-warning",info:""},$p={error:"[FEJL] ",success:"[SUCCES] ",warning:"[ADVARSEL] ",info:""};function gy(){const o=new Date,a=c=>String(c).padStart(2,"0");return`${a(o.getDate())}-${a(o.getMonth()+1)}-${o.getFullYear()}-${a(o.getHours())}-${a(o.getMinutes())}`}function by(){const o=J(u=>u.logs),a=J(u=>u.clearLogs),c=J(u=>u.toggleDebugger);function s(){const u=[...o].reverse().map(v=>`${v.time} ${$p[v.level]}${v.message}`).join(`
`),h=new Blob([u],{type:"text/plain"}),p=URL.createObjectURL(h),g=document.createElement("a");g.href=p,g.download=`${gy()}.txt`,g.click(),URL.revokeObjectURL(p)}return f.jsxs(St,{title:"Fejlfinding",onClose:()=>c(!1),closeVariant:"circle",children:[f.jsx("div",{className:"terminal",children:o.length===0?f.jsx("div",{className:"term-line",children:"Ingen log endnu."}):o.map((u,h)=>f.jsxs("div",{className:`term-line ${_y[u.level]}`,children:[u.time," ",$p[u.level],u.message]},`${u.time}-${h}`))}),f.jsxs("div",{className:"row",style:{marginTop:14},children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:a,children:"Ryd"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:s,children:"Gem logfil"})]})]})}const f_=4,zn=f_*4+17,Ip=80,yy=20,vy=30660;function xy(o){const a=new TextEncoder().encode(o);if(a.length>76)throw new Error("QR-koden er for lang.");const c=Xp(!1),s=Xp(!1);Sy(c,s);const u=Ey(a),h=Ry(u,yy);return ky(c,s,[...u,...h]),Ny(c,s),c}function Xp(o){return Array.from({length:zn},()=>Array.from({length:zn},()=>o))}function On(o,a,c,s,u,h=!0){o[s][c]=u,h&&(a[s][c]=!0)}function Sy(o,a){bf(o,a,0,0),bf(o,a,zn-7,0),bf(o,a,0,zn-7);for(let c=0;c<zn;c+=1)a[6][c]||On(o,a,c,6,c%2===0),a[c][6]||On(o,a,6,c,c%2===0);wy(o,a,26,26),On(o,a,8,f_*4+9,!0)}function bf(o,a,c,s){for(let u=-1;u<=7;u+=1)for(let h=-1;h<=7;h+=1){const p=c+h,g=s+u;if(p<0||g<0||p>=zn||g>=zn)continue;const v=h>=0&&h<=6&&u>=0&&u<=6&&(h===0||h===6||u===0||u===6||h>=2&&h<=4&&u>=2&&u<=4);On(o,a,p,g,v)}}function wy(o,a,c,s){for(let u=-2;u<=2;u+=1)for(let h=-2;h<=2;h+=1)a[s+u][c+h]||On(o,a,c+h,s+u,Math.max(Math.abs(h),Math.abs(u))!==1)}function Ey(o){const a=[];No(a,4,4),No(a,o.length,8);for(const s of o)No(a,s,8);for(No(a,0,Math.min(4,Ip*8-a.length));a.length%8!==0;)a.push(0);const c=[];for(let s=0;s<a.length;s+=8)c.push(a.slice(s,s+8).reduce((u,h)=>u<<1|h,0));for(let s=236;c.length<Ip;s=s===236?17:236)c.push(s);return c}function No(o,a,c){for(let s=c-1;s>=0;s-=1)o.push(a>>>s&1)}function ky(o,a,c){const s=c.flatMap(p=>Array.from({length:8},(g,v)=>p>>>7-v&1));let u=0,h=!0;for(let p=zn-1;p>=1;p-=2){p===6&&(p-=1);for(let g=0;g<zn;g+=1){const v=h?zn-1-g:g;for(let y=0;y<2;y+=1){const x=p-y;if(a[v][x])continue;const N=u<s.length?s[u]===1:!1;o[v][x]=N!==((x+v)%2===0),u+=1}}h=!h}}function Ny(o,a){const c=s=>(vy>>>s&1)!==0;for(let s=0;s<=5;s+=1)On(o,a,8,s,c(s));On(o,a,8,7,c(6)),On(o,a,8,8,c(7)),On(o,a,7,8,c(8));for(let s=9;s<15;s+=1)On(o,a,14-s,8,c(s));for(let s=0;s<8;s+=1)On(o,a,zn-1-s,8,c(s));for(let s=8;s<15;s+=1)On(o,a,8,zn-15+s,c(s))}const es=new Array(512),Nf=new Array(256);let Kp=!1;function d_(){if(Kp)return;let o=1;for(let a=0;a<255;a+=1)es[a]=o,Nf[o]=a,o<<=1,o&256&&(o^=285);for(let a=255;a<512;a+=1)es[a]=es[a-255];Kp=!0}function m_(o,a){return o===0||a===0?0:es[Nf[o]+Nf[a]]}function Ry(o,a){d_();const c=Ty(a),s=Array.from({length:a},()=>0);for(const u of o){const h=u^s.shift();s.push(0);for(let p=0;p<a;p+=1)s[p]^=m_(c[p],h)}return s}function Ty(o){d_();let a=[1];for(let c=0;c<o;c+=1){const s=Array.from({length:a.length+1},()=>0);for(let u=0;u<a.length;u+=1)s[u]^=m_(a[u],es[c]),s[u+1]^=a[u];a=s}return a.slice(1)}function My(){const o=J(ge=>ge.menuPage),a=J(ge=>ge.closeMenuPage),c=J(ge=>ge.user),s=J(ge=>ge.active),u=J(ge=>ge.layout),h=J(ge=>ge.sliderValues),p=J(ge=>ge.savedDevices),g=J(ge=>ge.updateUsername),v=J(ge=>ge.createOwnerPairingCode),y=J(ge=>ge.applyOwnerPairingCode),x=J(ge=>ge.clearSavedDevices),N=J(ge=>ge.resetApplicationData),j=J(ge=>ge.saveDeviceSettings),F=J(ge=>ge.setEditMode),P=J(ge=>ge.askConfirm),[ne,G]=U.useState((c==null?void 0:c.username)??""),[$,le]=U.useState(!1),[fe,se]=U.useState(""),[de,Ne]=U.useState(""),[ee,W]=U.useState(!1),[xe,be]=U.useState(""),ve=U.useRef(null),[ae,Pe]=U.useState((s==null?void 0:s.iconID)??0),[Ae,Qe]=U.useState(!1),[z,Q]=U.useState((s==null?void 0:s.canOthersConnect)??!1),[ue,Se]=U.useState((s==null?void 0:s.canOthersEdit)??!1),[Ee,E]=U.useState((s==null?void 0:s.canOthersEditCode)??!1),[L,Z]=U.useState((s==null?void 0:s.gridCols)??11),[D,X]=U.useState((s==null?void 0:s.gridRows)??31),[K,I]=U.useState(!1);U.useEffect(()=>{o==="user-settings"&&(G((c==null?void 0:c.username)??""),Ne(""),be(""),W(!1))},[o,c==null?void 0:c.username]),U.useEffect(()=>{o==="device-settings"&&s&&(Pe(s.iconID),Q(s.canOthersConnect),Se(s.canOthersEdit),E(s.canOthersEditCode),Z(s.gridCols),X(s.gridRows))},[s,o]),U.useEffect(()=>{if(!ee)return;let ge=!1,gt=null,wt=0;async function De(){var Bn;const Et=window.BarcodeDetector;if(!Et||!((Bn=navigator.mediaDevices)!=null&&Bn.getUserMedia)){be("Denne browser kan ikke scanne QR-koder. Skriv ejerkoden i stedet."),W(!1);return}try{gt=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const zt=ve.current;if(!zt)return;zt.srcObject=gt,await zt.play();const Mr=new Et({formats:["qr_code"]}),jr=async()=>{var gn;if(!ge){try{const Ar=(gn=(await Mr.detect(zt)).find(bt=>bt.rawValue))==null?void 0:gn.rawValue;if(Ar){Ne(Ar),y(Ar)&&le(!1),W(!1);return}}catch{}wt=window.requestAnimationFrame(jr)}};wt=window.requestAnimationFrame(jr)}catch{be("Kameraet kunne ikke åbnes. Skriv ejerkoden i stedet."),W(!1)}}return De(),()=>{ge=!0,wt&&window.cancelAnimationFrame(wt),gt==null||gt.getTracks().forEach(Et=>Et.stop())}},[y,ee]);const Ue=(ge,gt)=>Number.isFinite(ge)?Math.max(Ga,Math.min(Va,Math.round(ge))):gt,Ce=(c==null?void 0:c.username)??"",Vt=ne.trim(),Xn=Vt.length>0&&Vt!==Ce;if(!o)return null;if(o==="user-settings"){let ge=function(){const De=v();De&&(se(De),Ne(""),le(!0))},gt=function(){y(de)&&(Ne(""),le(!1))};async function wt(){var De;try{await((De=navigator.clipboard)==null?void 0:De.writeText(fe))}catch{}}return f.jsxs(f.Fragment,{children:[f.jsx(St,{title:"Brugerindstillinger",onClose:a,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(Dn,{label:"GUID",value:(c==null?void 0:c.userID)??"Ukendt"}),f.jsxs("div",{className:`field ${ne.trim()?"filled":""}`,children:[f.jsx("input",{id:"settings-username",value:ne,onChange:De=>G(De.target.value),maxLength:24,autoComplete:"off",placeholder:""}),f.jsx("label",{htmlFor:"settings-username",children:"Brugernavn"})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>g(ne),disabled:!Xn,children:"Gem nyt brugernavn"}),f.jsx("div",{className:"notice",children:"Ejerkode bruges, hvis den samme person skal forbinde fra flere browsere eller telefoner."}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:ge,children:"Ejerkode"}),f.jsx("button",{className:"btn btn-outline btn-block btn-danger",type:"button",onClick:()=>P({title:"Start forfra",message:"Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.",confirmLabel:"Slet alt",onConfirm:()=>{N()}}),children:"Slet brugerdata"})]})}),$&&f.jsx(St,{title:"Del ejerkode",onClose:()=>le(!1),children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(Dy,{code:fe}),f.jsx("code",{className:"owner-code-text",children:fe}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void wt(),children:"Kopiér ejerkode"}),f.jsxs("div",{className:`field ${de.trim()?"filled":""}`,children:[f.jsx("input",{id:"settings-owner-code",value:de,onChange:De=>Ne(De.target.value),autoComplete:"off",placeholder:""}),f.jsx("label",{htmlFor:"settings-owner-code",children:"Skriv ejerkode"})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:gt,disabled:!de.trim(),children:"Brug ejerkode i denne browser"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>W(De=>!De),children:ee?"Stop scanning":"Scan QR-kode"}),xe&&f.jsx("div",{className:"notice",children:xe}),ee&&f.jsx("video",{className:"owner-code-video",ref:ve,muted:!0,playsInline:!0})]})})]})}if(o==="application-settings")return f.jsx(St,{title:"Applikationsindstillinger",onClose:a,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(Dn,{label:"Version",value:ts}),f.jsx(Dn,{label:"Bluetooth",value:Bo()?"Tilgængelig":"Ikke tilgængelig"}),f.jsx(Dn,{label:"Gemte enheder",value:String(p.length)}),f.jsx("div",{className:"notice",children:"Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne tilladelsen i browserens site- eller Bluetooth-indstillinger."}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>P({title:"Ryd gemte enheder",message:"Vil du fjerne alle gemte enheder fra denne browser?",confirmLabel:"Ryd",onConfirm:x}),disabled:p.length===0,children:"Ryd gemte enheder"})]})});if(o==="application-about")return f.jsx(St,{title:"Om appen",onClose:a,children:f.jsxs("div",{className:"settings-stack prose",children:[f.jsx("p",{children:"Pico Kontrol Panel er lavet til at bygge og fjernstyre sjove eller seje Raspberry Pi Pico W-projekter."}),f.jsx(Dn,{label:"Udvikler",value:"Christian Bröchner Rasmussen"}),f.jsx(Dn,{label:"Version",value:ts})]})});if(o==="application-help")return f.jsx(St,{title:"Hjælp til applikationen",onClose:a,children:f.jsxs("div",{className:"settings-stack prose help-lesson",children:[f.jsxs("div",{className:"help-lesson-card",children:[f.jsx("strong",{children:"Komplet undervisningsforløb"}),f.jsx("p",{children:"Linket åbner Teknologiskolens guide til Pico Kontrol Panel. Her kan du lære hele arbejdsgangen: browseropsætning, Kodeværkstedet, MicroPython, USB-installation, Bluetooth-forbindelse, kontrolpaneler og trådløs kodeudvikling."})]}),f.jsxs("div",{className:"help-lesson-list","aria-label":"Undervisningsforløbet indeholder",children:[f.jsx("span",{children:"Trin-for-trin opsætning"}),f.jsx("span",{children:"Øvelser til kode og kontrolpanel"}),f.jsx("span",{children:"Projektforslag med Pico W"})]}),f.jsx("p",{className:"help-lesson-destination",children:"Du sendes til materialer.teknologiskolen.dk i en ny fane."}),f.jsx("a",{className:"btn btn-primary btn-block",href:"https://materialer.teknologiskolen.dk/lessons/fjernstyring-af-raspberry-pi-pico-w",target:"_blank",rel:"noreferrer",children:"Åbn komplet undervisningsforløb"})]})});if(o==="device-settings"){const ge=u.filter(De=>De.type==="slider"),gt=!!(s!=null&&s.isOwnedByMe);async function wt(De=!1){if(!s||!gt)return;const Et=Ue(L,s.gridCols),Bn=Ue(D,s.gridRows),zt=jy(u,Et,Bn);if(zt&&!De){P({title:"Gitter kan påvirke layout",message:`Det nuværende layout bruger op til ${zt.requiredCols} kolonner og ${zt.requiredRows} rækker. Det nye gitter er ${Et} × ${Bn}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,confirmLabel:"Gem alligevel",onConfirm:()=>{wt(!0)}});return}I(!0),await j(ae,z,z&&ue,z&&Ee,Et,Bn),Z(Et),X(Bn),I(!1)}return f.jsx(St,{title:"Enhedsindstillinger",onClose:a,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(Dn,{label:"Navn",value:(s==null?void 0:s.deviceName)??"Ukendt"}),f.jsx(Dn,{label:"Ejer",value:Oy(s)}),gt?f.jsxs(f.Fragment,{children:[f.jsx("button",{className:"device-icon-pick settings-icon-pick",type:"button",onClick:()=>Qe(!0),children:f.jsx("img",{src:Ia(ae),alt:""})}),f.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:z?"":"active",onClick:()=>Q(!1),children:"Privat"}),f.jsx("button",{type:"button",className:z?"active":"",onClick:()=>Q(!0),children:"Offentlig"})]}),z&&f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:ue?"":"active",onClick:()=>Se(!1),children:"Nej"}),f.jsx("button",{type:"button",className:ue?"active":"",onClick:()=>Se(!0),children:"Ja"})]}),f.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:Ee?"":"active",onClick:()=>E(!1),children:"Nej"}),f.jsx("button",{type:"button",className:Ee?"active":"",onClick:()=>E(!0),children:"Ja"})]})]}),f.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter"}),f.jsxs("div",{className:"row",children:[f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"device-cols",children:"Kolonner"}),f.jsx("input",{id:"device-cols",type:"number",min:Ga,max:Va,value:Number.isNaN(L)?"":L,onChange:De=>Z(parseInt(De.target.value,10)),onBlur:()=>Z(Ue(L,(s==null?void 0:s.gridCols)??11))})]}),f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"device-rows",children:"Rækker"}),f.jsx("input",{id:"device-rows",type:"number",min:Ga,max:Va,value:Number.isNaN(D)?"":D,onChange:De=>X(parseInt(De.target.value,10)),onBlur:()=>X(Ue(D,(s==null?void 0:s.gridRows)??31))})]})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>wt(),disabled:K,children:K?"Gemmer...":"Gem enhedsindstillinger"})]}):f.jsxs(f.Fragment,{children:[f.jsx(Dn,{label:"Ikon ID",value:String((s==null?void 0:s.iconID)??0)}),f.jsx(Dn,{label:"Redigering",value:s!=null&&s.canEdit?"Tilladt":"Ikke tilladt"}),f.jsx(Dn,{label:"Gitter",value:`${(s==null?void 0:s.gridCols)??0} × ${(s==null?void 0:s.gridRows)??0}`})]}),f.jsx(Dn,{label:"Kontroller",value:String(u.length)}),ge.length>0&&f.jsxs("div",{className:"settings-section",children:[f.jsx("h4",{children:"Slidere"}),ge.map(De=>f.jsxs("div",{className:"slider-meta",children:[f.jsx("strong",{children:De.name}),f.jsxs("span",{children:[De.sliderMin??0," til ",De.sliderMax??100]}),f.jsxs("span",{children:["Retur: ",Ay(De.sliderRecenter??"none")]}),f.jsxs("span",{children:["Seneste værdi: ",h[De.name]??"Ikke brugt"]})]},De.name))]}),Ae&&f.jsx(t_,{selected:ae,onSelect:Pe,onClose:()=>Qe(!1)})]})})}return f.jsx(St,{title:"Hjælp til enheden",onClose:a,children:f.jsxs("div",{className:"settings-stack prose",children:[f.jsx("p",{children:"Knapper sender en kommando med deres navn, når de trykkes."}),f.jsx("p",{children:"Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse."}),f.jsx("p",{children:"Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen."}),(s==null?void 0:s.canEdit)&&f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>F(!0),children:"Rediger layout"})]})})}function jy(o,a,c){let s=0,u=0;for(const h of o)Ya(h)&&(s=Math.max(s,Math.ceil((h.centerX2+h.spanX)/2)+1),u=Math.max(u,Math.ceil((h.centerY2+h.spanY)/2)+1));return a<s||c<u?{requiredCols:s,requiredRows:u}:null}function Ay(o){return o==="bottom"?"bund":o==="middle"?"midte":o==="top"?"top":"ingen"}function Dy({code:o}){const a=U.useMemo(()=>xy(o),[o]),c=a.length;return f.jsxs("svg",{className:"owner-code-qr",viewBox:`0 0 ${c+8} ${c+8}`,role:"img","aria-label":"QR-kode til ejerkode",children:[f.jsx("rect",{width:c+8,height:c+8,fill:"white"}),a.map((s,u)=>s.map((h,p)=>h?f.jsx("rect",{x:p+4,y:u+4,width:"1",height:"1",fill:"currentColor"},`${p}-${u}`):null))]})}function Oy(o){var a;return o?o.isOwnedByMe?"Dig":((a=o.ownerName)==null?void 0:a.trim())||"Anden bruger":"Ukendt"}function Dn({label:o,value:a}){return f.jsxs("div",{className:"settings-row",children:[f.jsx("span",{children:o}),f.jsx("strong",{children:a})]})}function Cy(){const o=J(s=>s.confirmDialog),a=J(s=>s.closeConfirm);if(!o)return null;function c(){o==null||o.onConfirm(),a()}return f.jsx(St,{title:o.title,onClose:a,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:o.message}),f.jsxs("div",{className:"row",children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:a,children:o.cancelLabel??"Annuller"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:c,children:o.confirmLabel??"Fortsæt"})]})]})})}function zy(){const o=J(s=>s.connectionLost),a=J(s=>s.reconnectLostDevice),c=J(s=>s.dismissConnectionLost);return o?f.jsx(St,{title:"Forbindelse afbrudt",onClose:c,children:f.jsxs("div",{className:"settings-stack",children:[f.jsxs("p",{className:"confirm-message",children:["Forbindelsen til ",o.deviceName," blev afbrudt. Tjek at Picoen har strøm og er tæt nok på."]}),f.jsxs("div",{className:"row",children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:c,children:"Luk"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>a(),children:"Genforbind"})]})]})}):null}function By(){const o=J(c=>c.toast),a=J(c=>c.dismissToast);return o?f.jsx("div",{className:"toast",role:"alert",onClick:a,children:o.message},o.id):null}function Ly(){const o=J(g=>g.screen),a=J(g=>g.splashTarget),c=J(g=>g.init),s=J(g=>g.sideMenuOpen),u=J(g=>g.debuggerOpen),[h,p]=U.useState(!1);return U.useEffect(()=>{c()},[c]),U.useEffect(()=>{if(s){p(!0);return}const g=setTimeout(()=>p(!1),140);return()=>clearTimeout(g)},[s]),f.jsxs("div",{className:"app",children:[o==="splash"&&a==="intro"&&f.jsx(mp,{}),o==="splash"&&a==="dashboard"&&f.jsx(hp,{}),o==="splash"&&f.jsx(Bb,{}),o==="intro"&&f.jsx(mp,{}),o==="dashboard"&&f.jsx(hp,{}),o==="connection"&&f.jsx(Vb,{}),o==="create"&&f.jsx(Yb,{}),o==="control"&&f.jsx(o0,{}),o==="ide"&&f.jsx(W0,{}),h&&f.jsx(py,{open:s}),f.jsx(My,{}),f.jsx(zy,{}),f.jsx(Cy,{}),u&&f.jsx(by,{}),f.jsx(By,{})]})}function Uy(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{const o=new URL("sw.js",window.location.href);navigator.serviceWorker.register(o,{scope:"./"}).catch(a=>{console.warn("Service worker registration failed:",a)})})}Uy();Kg.createRoot(document.getElementById("root")).render(f.jsx(Wi.StrictMode,{children:f.jsx(Ly,{})}));
