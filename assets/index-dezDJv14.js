var M2=Object.defineProperty;var j2=(a,l,o)=>l in a?M2(a,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[l]=o;var we=(a,l,o)=>j2(a,typeof l!="symbol"?l+"":l,o);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const g of h.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function o(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(d){if(d.ep)return;d.ep=!0;const h=o(d);fetch(d.href,h)}})();function jh(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Sd={exports:{}},_s={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function N2(){if(pm)return _s;pm=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function o(s,d,h){var g=null;if(h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),"key"in d){h={};for(var m in d)m!=="key"&&(h[m]=d[m])}else h=d;return d=h.ref,{$$typeof:a,type:s,key:g,ref:d!==void 0?d:null,props:h}}return _s.Fragment=l,_s.jsx=o,_s.jsxs=o,_s}var gm;function R2(){return gm||(gm=1,Sd.exports=N2()),Sd.exports}var u=R2(),Ed={exports:{}},Oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function A2(){if(_m)return Oe;_m=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),g=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),E=Symbol.iterator;function D(T){return T===null||typeof T!="object"?null:(T=E&&T[E]||T["@@iterator"],typeof T=="function"?T:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,H={};function P(T,G,le){this.props=T,this.context=G,this.refs=H,this.updater=le||O}P.prototype.isReactComponent={},P.prototype.setState=function(T,G){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,G,"setState")},P.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function B(){}B.prototype=P.prototype;function re(T,G,le){this.props=T,this.context=G,this.refs=H,this.updater=le||O}var q=re.prototype=new B;q.constructor=re,F(q,P.prototype),q.isPureReactComponent=!0;var oe=Array.isArray;function ge(){}var te={H:null,A:null,T:null,S:null},pe=Object.prototype.hasOwnProperty;function ve(T,G,le){var ae=le.ref;return{$$typeof:a,type:T,key:G,ref:ae!==void 0?ae:null,props:le}}function Be(T,G){return ve(T.type,G,T.props)}function ne(T){return typeof T=="object"&&T!==null&&T.$$typeof===a}function Ie(T){var G={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(le){return G[le]})}var xe=/\/+/g;function $e(T,G){return typeof T=="object"&&T!==null&&T.key!=null?Ie(""+T.key):G.toString(36)}function Z(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(ge,ge):(T.status="pending",T.then(function(G){T.status==="pending"&&(T.status="fulfilled",T.value=G)},function(G){T.status==="pending"&&(T.status="rejected",T.reason=G)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function N(T,G,le,ae,ce){var fe=typeof T;(fe==="undefined"||fe==="boolean")&&(T=null);var Te=!1;if(T===null)Te=!0;else switch(fe){case"bigint":case"string":case"number":Te=!0;break;case"object":switch(T.$$typeof){case a:case l:Te=!0;break;case k:return Te=T._init,N(Te(T._payload),G,le,ae,ce)}}if(Te)return ce=ce(T),Te=ae===""?"."+$e(T,0):ae,oe(ce)?(le="",Te!=null&&(le=Te.replace(xe,"$&/")+"/"),N(ce,G,le,"",function(me){return me})):ce!=null&&(ne(ce)&&(ce=Be(ce,le+(ce.key==null||T&&T.key===ce.key?"":(""+ce.key).replace(xe,"$&/")+"/")+Te)),G.push(ce)),1;Te=0;var We=ae===""?".":ae+":";if(oe(T))for(var ze=0;ze<T.length;ze++)ae=T[ze],fe=We+$e(ae,ze),Te+=N(ae,G,le,fe,ce);else if(ze=D(T),typeof ze=="function")for(T=ze.call(T),ze=0;!(ae=T.next()).done;)ae=ae.value,fe=We+$e(ae,ze++),Te+=N(ae,G,le,fe,ce);else if(fe==="object"){if(typeof T.then=="function")return N(Z(T),G,le,ae,ce);throw G=String(T),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return Te}function Q(T,G,le){if(T==null)return T;var ae=[],ce=0;return N(T,ae,"","",function(fe){return G.call(le,fe,ce++)}),ae}function de(T){if(T._status===-1){var G=T._result;G=G(),G.then(function(le){(T._status===0||T._status===-1)&&(T._status=1,T._result=le)},function(le){(T._status===0||T._status===-1)&&(T._status=2,T._result=le)}),T._status===-1&&(T._status=0,T._result=G)}if(T._status===1)return T._result.default;throw T._result}var Re=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},_e={map:Q,forEach:function(T,G,le){Q(T,function(){G.apply(this,arguments)},le)},count:function(T){var G=0;return Q(T,function(){G++}),G},toArray:function(T){return Q(T,function(G){return G})||[]},only:function(T){if(!ne(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return Oe.Activity=x,Oe.Children=_e,Oe.Component=P,Oe.Fragment=o,Oe.Profiler=d,Oe.PureComponent=re,Oe.StrictMode=s,Oe.Suspense=_,Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=te,Oe.__COMPILER_RUNTIME={__proto__:null,c:function(T){return te.H.useMemoCache(T)}},Oe.cache=function(T){return function(){return T.apply(null,arguments)}},Oe.cacheSignal=function(){return null},Oe.cloneElement=function(T,G,le){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var ae=F({},T.props),ce=T.key;if(G!=null)for(fe in G.key!==void 0&&(ce=""+G.key),G)!pe.call(G,fe)||fe==="key"||fe==="__self"||fe==="__source"||fe==="ref"&&G.ref===void 0||(ae[fe]=G[fe]);var fe=arguments.length-2;if(fe===1)ae.children=le;else if(1<fe){for(var Te=Array(fe),We=0;We<fe;We++)Te[We]=arguments[We+2];ae.children=Te}return ve(T.type,ce,ae)},Oe.createContext=function(T){return T={$$typeof:g,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:h,_context:T},T},Oe.createElement=function(T,G,le){var ae,ce={},fe=null;if(G!=null)for(ae in G.key!==void 0&&(fe=""+G.key),G)pe.call(G,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(ce[ae]=G[ae]);var Te=arguments.length-2;if(Te===1)ce.children=le;else if(1<Te){for(var We=Array(Te),ze=0;ze<Te;ze++)We[ze]=arguments[ze+2];ce.children=We}if(T&&T.defaultProps)for(ae in Te=T.defaultProps,Te)ce[ae]===void 0&&(ce[ae]=Te[ae]);return ve(T,fe,ce)},Oe.createRef=function(){return{current:null}},Oe.forwardRef=function(T){return{$$typeof:m,render:T}},Oe.isValidElement=ne,Oe.lazy=function(T){return{$$typeof:k,_payload:{_status:-1,_result:T},_init:de}},Oe.memo=function(T,G){return{$$typeof:b,type:T,compare:G===void 0?null:G}},Oe.startTransition=function(T){var G=te.T,le={};te.T=le;try{var ae=T(),ce=te.S;ce!==null&&ce(le,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(ge,Re)}catch(fe){Re(fe)}finally{G!==null&&le.types!==null&&(G.types=le.types),te.T=G}},Oe.unstable_useCacheRefresh=function(){return te.H.useCacheRefresh()},Oe.use=function(T){return te.H.use(T)},Oe.useActionState=function(T,G,le){return te.H.useActionState(T,G,le)},Oe.useCallback=function(T,G){return te.H.useCallback(T,G)},Oe.useContext=function(T){return te.H.useContext(T)},Oe.useDebugValue=function(){},Oe.useDeferredValue=function(T,G){return te.H.useDeferredValue(T,G)},Oe.useEffect=function(T,G){return te.H.useEffect(T,G)},Oe.useEffectEvent=function(T){return te.H.useEffectEvent(T)},Oe.useId=function(){return te.H.useId()},Oe.useImperativeHandle=function(T,G,le){return te.H.useImperativeHandle(T,G,le)},Oe.useInsertionEffect=function(T,G){return te.H.useInsertionEffect(T,G)},Oe.useLayoutEffect=function(T,G){return te.H.useLayoutEffect(T,G)},Oe.useMemo=function(T,G){return te.H.useMemo(T,G)},Oe.useOptimistic=function(T,G){return te.H.useOptimistic(T,G)},Oe.useReducer=function(T,G,le){return te.H.useReducer(T,G,le)},Oe.useRef=function(T){return te.H.useRef(T)},Oe.useState=function(T){return te.H.useState(T)},Oe.useSyncExternalStore=function(T,G,le){return te.H.useSyncExternalStore(T,G,le)},Oe.useTransition=function(){return te.H.useTransition()},Oe.version="19.2.7",Oe}var vm;function rf(){return vm||(vm=1,Ed.exports=A2()),Ed.exports}var j=rf();const Ts=jh(j);var Td={exports:{}},vs={},Md={exports:{}},jd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function C2(){return bm||(bm=1,(function(a){function l(N,Q){var de=N.length;N.push(Q);e:for(;0<de;){var Re=de-1>>>1,_e=N[Re];if(0<d(_e,Q))N[Re]=Q,N[de]=_e,de=Re;else break e}}function o(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var Q=N[0],de=N.pop();if(de!==Q){N[0]=de;e:for(var Re=0,_e=N.length,T=_e>>>1;Re<T;){var G=2*(Re+1)-1,le=N[G],ae=G+1,ce=N[ae];if(0>d(le,de))ae<_e&&0>d(ce,le)?(N[Re]=ce,N[ae]=de,Re=ae):(N[Re]=le,N[G]=de,Re=G);else if(ae<_e&&0>d(ce,de))N[Re]=ce,N[ae]=de,Re=ae;else break e}}return Q}function d(N,Q){var de=N.sortIndex-Q.sortIndex;return de!==0?de:N.id-Q.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;a.unstable_now=function(){return h.now()}}else{var g=Date,m=g.now();a.unstable_now=function(){return g.now()-m}}var _=[],b=[],k=1,x=null,E=3,D=!1,O=!1,F=!1,H=!1,P=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;function q(N){for(var Q=o(b);Q!==null;){if(Q.callback===null)s(b);else if(Q.startTime<=N)s(b),Q.sortIndex=Q.expirationTime,l(_,Q);else break;Q=o(b)}}function oe(N){if(F=!1,q(N),!O)if(o(_)!==null)O=!0,ge||(ge=!0,Ie());else{var Q=o(b);Q!==null&&Z(oe,Q.startTime-N)}}var ge=!1,te=-1,pe=5,ve=-1;function Be(){return H?!0:!(a.unstable_now()-ve<pe)}function ne(){if(H=!1,ge){var N=a.unstable_now();ve=N;var Q=!0;try{e:{O=!1,F&&(F=!1,B(te),te=-1),D=!0;var de=E;try{t:{for(q(N),x=o(_);x!==null&&!(x.expirationTime>N&&Be());){var Re=x.callback;if(typeof Re=="function"){x.callback=null,E=x.priorityLevel;var _e=Re(x.expirationTime<=N);if(N=a.unstable_now(),typeof _e=="function"){x.callback=_e,q(N),Q=!0;break t}x===o(_)&&s(_),q(N)}else s(_);x=o(_)}if(x!==null)Q=!0;else{var T=o(b);T!==null&&Z(oe,T.startTime-N),Q=!1}}break e}finally{x=null,E=de,D=!1}Q=void 0}}finally{Q?Ie():ge=!1}}}var Ie;if(typeof re=="function")Ie=function(){re(ne)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,$e=xe.port2;xe.port1.onmessage=ne,Ie=function(){$e.postMessage(null)}}else Ie=function(){P(ne,0)};function Z(N,Q){te=P(function(){N(a.unstable_now())},Q)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(N){N.callback=null},a.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pe=0<N?Math.floor(1e3/N):5},a.unstable_getCurrentPriorityLevel=function(){return E},a.unstable_next=function(N){switch(E){case 1:case 2:case 3:var Q=3;break;default:Q=E}var de=E;E=Q;try{return N()}finally{E=de}},a.unstable_requestPaint=function(){H=!0},a.unstable_runWithPriority=function(N,Q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var de=E;E=N;try{return Q()}finally{E=de}},a.unstable_scheduleCallback=function(N,Q,de){var Re=a.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?Re+de:Re):de=Re,N){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=de+_e,N={id:k++,callback:Q,priorityLevel:N,startTime:de,expirationTime:_e,sortIndex:-1},de>Re?(N.sortIndex=de,l(b,N),o(_)===null&&N===o(b)&&(F?(B(te),te=-1):F=!0,Z(oe,de-Re))):(N.sortIndex=_e,l(_,N),O||D||(O=!0,ge||(ge=!0,Ie()))),N},a.unstable_shouldYield=Be,a.unstable_wrapCallback=function(N){var Q=E;return function(){var de=E;E=Q;try{return N.apply(this,arguments)}finally{E=de}}}})(jd)),jd}var ym;function D2(){return ym||(ym=1,Md.exports=C2()),Md.exports}var Nd={exports:{}},ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function O2(){if(wm)return ln;wm=1;var a=rf();function l(_){var b="https://react.dev/errors/"+_;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)b+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+_+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var s={d:{f:o,r:function(){throw Error(l(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(_,b,k){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:x==null?null:""+x,children:_,containerInfo:b,implementation:k}}var g=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(_,b){if(_==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,ln.createPortal=function(_,b){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(l(299));return h(_,b,null,k)},ln.flushSync=function(_){var b=g.T,k=s.p;try{if(g.T=null,s.p=2,_)return _()}finally{g.T=b,s.p=k,s.d.f()}},ln.preconnect=function(_,b){typeof _=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,s.d.C(_,b))},ln.prefetchDNS=function(_){typeof _=="string"&&s.d.D(_)},ln.preinit=function(_,b){if(typeof _=="string"&&b&&typeof b.as=="string"){var k=b.as,x=m(k,b.crossOrigin),E=typeof b.integrity=="string"?b.integrity:void 0,D=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;k==="style"?s.d.S(_,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:x,integrity:E,fetchPriority:D}):k==="script"&&s.d.X(_,{crossOrigin:x,integrity:E,fetchPriority:D,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},ln.preinitModule=function(_,b){if(typeof _=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var k=m(b.as,b.crossOrigin);s.d.M(_,{crossOrigin:k,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&s.d.M(_)},ln.preload=function(_,b){if(typeof _=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var k=b.as,x=m(k,b.crossOrigin);s.d.L(_,k,{crossOrigin:x,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},ln.preloadModule=function(_,b){if(typeof _=="string")if(b){var k=m(b.as,b.crossOrigin);s.d.m(_,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:k,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else s.d.m(_)},ln.requestFormReset=function(_){s.d.r(_)},ln.unstable_batchedUpdates=function(_,b){return _(b)},ln.useFormState=function(_,b,k){return g.H.useFormState(_,b,k)},ln.useFormStatus=function(){return g.H.useHostTransitionStatus()},ln.version="19.2.7",ln}var xm;function Nh(){if(xm)return Nd.exports;xm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),Nd.exports=O2(),Nd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function L2(){if(km)return vs;km=1;var a=D2(),l=rf(),o=Nh();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _(e){if(h(e)!==e)throw Error(s(188))}function b(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var c=i.alternate;if(c===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===c.child){for(c=i.child;c;){if(c===n)return _(i),e;if(c===r)return _(i),t;c=c.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=c;else{for(var p=!1,y=i.child;y;){if(y===n){p=!0,n=i,r=c;break}if(y===r){p=!0,r=i,n=c;break}y=y.sibling}if(!p){for(y=c.child;y;){if(y===n){p=!0,n=c,r=i;break}if(y===r){p=!0,r=c,n=i;break}y=y.sibling}if(!p)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function k(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=k(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,E=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),re=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),ve=Symbol.for("react.activity"),Be=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function Ie(e){return e===null||typeof e!="object"?null:(e=ne&&e[ne]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Symbol.for("react.client.reference");function $e(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===xe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case P:return"Profiler";case H:return"StrictMode";case oe:return"Suspense";case ge:return"SuspenseList";case ve:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case O:return"Portal";case re:return e.displayName||"Context";case B:return(e._context.displayName||"Context")+".Consumer";case q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case te:return t=e.displayName||null,t!==null?t:$e(e.type)||"Memo";case pe:t=e._payload,e=e._init;try{return $e(e(t))}catch{}}return null}var Z=Array.isArray,N=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},Re=[],_e=-1;function T(e){return{current:e}}function G(e){0>_e||(e.current=Re[_e],Re[_e]=null,_e--)}function le(e,t){_e++,Re[_e]=e.current,e.current=t}var ae=T(null),ce=T(null),fe=T(null),Te=T(null);function We(e,t){switch(le(fe,t),le(ce,e),le(ae,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?U1(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=U1(t),e=q1(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(ae),le(ae,e)}function ze(){G(ae),G(ce),G(fe)}function me(e){e.memoizedState!==null&&le(Te,e);var t=ae.current,n=q1(t,e.type);t!==n&&(le(ce,e),le(ae,n))}function je(e){ce.current===e&&(G(ae),G(ce)),Te.current===e&&(G(Te),ms._currentValue=de)}var at,V;function J(e){if(at===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);at=t&&t[1]||"",V=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+at+e+V}var ie=!1;function Ce(e,t){if(!e||ie)return"";ie=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(I){var U=I}Reflect.construct(e,[],K)}else{try{K.call()}catch(I){U=I}e.call(K.prototype)}}else{try{throw Error()}catch(I){U=I}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(I){if(I&&U&&typeof I.stack=="string")return[I.stack,U.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),p=c[0],y=c[1];if(p&&y){var S=p.split(`
`),z=y.split(`
`);for(i=r=0;r<S.length&&!S[r].includes("DetermineComponentFrameRoot");)r++;for(;i<z.length&&!z[i].includes("DetermineComponentFrameRoot");)i++;if(r===S.length||i===z.length)for(r=S.length-1,i=z.length-1;1<=r&&0<=i&&S[r]!==z[i];)i--;for(;1<=r&&0<=i;r--,i--)if(S[r]!==z[i]){if(r!==1||i!==1)do if(r--,i--,0>i||S[r]!==z[i]){var Y=`
`+S[r].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=r&&0<=i);break}}}finally{ie=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?J(n):""}function Pe(e,t){switch(e.tag){case 26:case 27:case 5:return J(e.type);case 16:return J("Lazy");case 13:return e.child!==t&&t!==null?J("Suspense Fallback"):J("Suspense");case 19:return J("SuspenseList");case 0:case 15:return Ce(e.type,!1);case 11:return Ce(e.type.render,!1);case 1:return Ce(e.type,!0);case 31:return J("Activity");default:return""}}function Ve(e){try{var t="",n=null;do t+=Pe(e,n),n=e,e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Me=Object.prototype.hasOwnProperty,De=a.unstable_scheduleCallback,wt=a.unstable_cancelCallback,sn=a.unstable_shouldYield,Pn=a.unstable_requestPaint,ht=a.unstable_now,_r=a.unstable_getCurrentPriorityLevel,sl=a.unstable_ImmediatePriority,fn=a.unstable_UserBlockingPriority,mn=a.unstable_NormalPriority,hn=a.unstable_LowPriority,jn=a.unstable_IdlePriority,di=a.log,sr=a.unstable_setDisableYieldValue,Fn=null,it=null;function vt(e){if(typeof di=="function"&&sr(e),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(Fn,e)}catch{}}var Qe=Math.clz32?Math.clz32:Nn,vr=Math.log,ba=Math.LN2;function Nn(e){return e>>>=0,e===0?32:31-(vr(e)/ba|0)|0}var pn=256,br=262144,Rn=4194304;function Ft(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Gt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,c=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var y=r&134217727;return y!==0?(r=y&~c,r!==0?i=Ft(r):(p&=y,p!==0?i=Ft(p):n||(n=y&~e,n!==0&&(i=Ft(n))))):(y=r&~c,y!==0?i=Ft(y):p!==0?i=Ft(p):n||(n=r&~e,n!==0&&(i=Ft(n)))),i===0?0:t!==0&&t!==i&&(t&c)===0&&(c=i&-i,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:i}function Jt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function en(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ze(){var e=Rn;return Rn<<=1,(Rn&62914560)===0&&(Rn=4194304),e}function ee(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function be(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Je(e,t,n,r,i,c){var p=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var y=e.entanglements,S=e.expirationTimes,z=e.hiddenUpdates;for(n=p&~n;0<n;){var Y=31-Qe(n),K=1<<Y;y[Y]=0,S[Y]=-1;var U=z[Y];if(U!==null)for(z[Y]=null,Y=0;Y<U.length;Y++){var I=U[Y];I!==null&&(I.lane&=-536870913)}n&=~K}r!==0&&on(e,r,0),c!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=c&~(p&~t))}function on(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function gn(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function $t(e,t){var n=t&-t;return n=(n&42)!==0?1:Gn(n),(n&(e.suspendedLanes|t))!==0?0:n}function Gn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function tn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function yr(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:om(e.type))}function ol(e,t){var n=Q.p;try{return Q.p=e,t()}finally{Q.p=n}}var wr=Math.random().toString(36).slice(2),kt="__reactFiber$"+wr,xt="__reactProps$"+wr,ft="__reactContainer$"+wr,ya="__reactEvents$"+wr,xr="__reactListeners$"+wr,fi="__reactHandles$"+wr,wa="__reactResources$"+wr,kr="__reactMarker$"+wr;function cl(e){delete e[kt],delete e[xt],delete e[ya],delete e[xr],delete e[fi]}function An(e){var t=e[kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ft]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$1(e);e!==null;){if(n=e[kt])return n;e=$1(e)}return t}e=n,n=e.parentNode}return null}function or(e){if(e=e[kt]||e[ft]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function nn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function _n(e){var t=e[wa];return t||(t=e[wa]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function bt(e){e[kr]=!0}var $n=new Set,Dr={};function Cn(e,t){vn(e,t),vn(e+"Capture",t)}function vn(e,t){for(Dr[e]=t,e=0;e<t.length;e++)$n.add(t[e])}var mi=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cr={},ul={};function Or(e){return Me.call(ul,e)?!0:Me.call(cr,e)?!1:mi.test(e)?ul[e]=!0:(cr[e]=!0,!1)}function ur(e,t,n){if(Or(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function dr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Yn(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+r)}}function Ht(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $l(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xa(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,c=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(p){n=""+p,c.call(this,p)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(p){n=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Sr(e){if(!e._valueTracker){var t=$l(e)?"checked":"value";e._valueTracker=xa(e,t,""+e[t])}}function Lr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$l(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Se(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var hi=/[\n"\\]/g;function bn(e){return e.replace(hi,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function pi(e,t,n,r,i,c,p,y){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ht(t)):e.value!==""+Ht(t)&&(e.value=""+Ht(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?gi(e,p,Ht(t)):n!=null?gi(e,p,Ht(n)):r!=null&&e.removeAttribute("value"),i==null&&c!=null&&(e.defaultChecked=!!c),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+Ht(y):e.removeAttribute("name")}function Bs(e,t,n,r,i,c,p,y){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){Sr(e);return}n=n!=null?""+Ht(n):"",t=t!=null?""+Ht(t):n,y||t===e.value||(e.value=t),e.defaultValue=t}r=r??i,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=y?e.checked:!!r,e.defaultChecked=!!r,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),Sr(e)}function gi(e,t,n){t==="number"&&Se(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Xn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Br(e,t,n){if(t!=null&&(t=""+Ht(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ht(n):""}function ka(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(Z(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n==null&&(n=""),t=n}n=Ht(t),e.defaultValue=n,r=e.textContent,r===n&&r!==""&&r!==null&&(e.value=r),Sr(e)}function Yt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _i=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yn(e,t,n){var r=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,n):typeof n!="number"||n===0||_i.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function zs(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&yn(e,i,r)}else for(var c in t)t.hasOwnProperty(c)&&yn(e,c,t[c])}function vi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Us=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $(e){return bi.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function fr(){}var yi=null;function wi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Kn=null,zr=null;function xi(e){var t=or(e);if(t&&(e=t.stateNode)){var n=e[xt]||null;e:switch(e=t.stateNode,t.type){case"input":if(pi(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+bn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[xt]||null;if(!i)throw Error(s(90));pi(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Lr(r)}break e;case"textarea":Br(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Xn(e,!!n.multiple,t,!1)}}}var dl=!1;function St(e,t,n){if(dl)return e(t,n);dl=!0;try{var r=e(t);return r}finally{if(dl=!1,(Kn!==null||zr!==null)&&(Uo(),Kn&&(t=Kn,e=zr,zr=Kn=null,xi(t),e)))for(t=0;t<e.length;t++)xi(e[t])}}function fl(e,t){var n=e.stateNode;if(n===null)return null;var r=n[xt]||null;if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ur=!1;if(wn)try{var Yl={};Object.defineProperty(Yl,"passive",{get:function(){Ur=!0}}),window.addEventListener("test",Yl,Yl),window.removeEventListener("test",Yl,Yl)}catch{Ur=!1}var Er=null,ki=null,Xl=null;function qs(){if(Xl)return Xl;var e,t=ki,n=t.length,r,i="value"in Er?Er.value:Er.textContent,c=i.length;for(e=0;e<n&&t[e]===i[e];e++);var p=n-e;for(r=1;r<=p&&t[n-r]===i[c-r];r++);return Xl=i.slice(e,1<r?1-r:void 0)}function Kl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dn(){return!0}function ml(){return!1}function rn(e){function t(n,r,i,c,p){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(n=e[y],this[y]=n?n(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Dn:ml,this.isPropagationStopped=ml,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),t}var Et={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=rn(Et),qr=x({},Et,{view:0,detail:0}),Vt=rn(qr),Hr,Si,Wl,Tr=x({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ma,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wl&&(Wl&&e.type==="mousemove"?(Hr=e.screenX-Wl.screenX,Si=e.screenY-Wl.screenY):Si=Hr=0,Wl=e),Hr)},movementY:function(e){return"movementY"in e?e.movementY:Si}}),Hs=rn(Tr),Vs=x({},Tr,{dataTransfer:0}),Sa=rn(Vs),Ea=x({},qr,{relatedTarget:0}),Ta=rn(Ea),Ei=x({},Et,{animationName:0,elapsedTime:0,pseudoElement:0}),Ec=rn(Ei),Tc=x({},Et,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mc=rn(Tc),Qn=x({},Et,{data:0}),Tt=rn(Qn),Ti={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zl={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Is={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ps(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Is[e])?!!t[e]:!1}function Ma(){return Ps}var jc=x({},qr,{key:function(e){if(e.key){var t=Ti[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Kl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zl[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ma,charCode:function(e){return e.type==="keypress"?Kl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nc=rn(jc),Rc=x({},Tr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mi=rn(Rc),Fs=x({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ma}),ji=rn(Fs),Ac=x({},Et,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gs=rn(Ac),$s=x({},Tr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ys=rn($s),Cc=x({},Et,{newState:0,oldState:0}),Dc=rn(Cc),Xs=[9,13,27,32],Jl=wn&&"CompositionEvent"in window,ea=null;wn&&"documentMode"in document&&(ea=document.documentMode);var Oc=wn&&"TextEvent"in window&&!ea,Ks=wn&&(!Jl||ea&&8<ea&&11>=ea),Qs=" ",Ws=!1;function Zs(e,t){switch(e){case"keyup":return Xs.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Js(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hl=!1;function Lc(e,t){switch(e){case"compositionend":return Js(t);case"keypress":return t.which!==32?null:(Ws=!0,Qs);case"textInput":return e=t.data,e===Qs&&Ws?null:e;default:return null}}function Bc(e,t){if(hl)return e==="compositionend"||!Jl&&Zs(e,t)?(e=qs(),Xl=ki=Er=null,hl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ks&&t.locale!=="ko"?null:t.data;default:return null}}var zc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zc[e.type]:t==="textarea"}function Ni(e,t,n,r){Kn?zr?zr.push(r):zr=[r]:Kn=r,t=Go(t,"onChange"),0<t.length&&(n=new Ql("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var gl=null,ta=null;function eo(e){C1(e,0)}function ja(e){var t=nn(e);if(Lr(t))return e}function to(e,t){if(e==="change")return t}var Ri=!1;if(wn){var Ai;if(wn){var Ci="oninput"in document;if(!Ci){var no=document.createElement("div");no.setAttribute("oninput","return;"),Ci=typeof no.oninput=="function"}Ai=Ci}else Ai=!1;Ri=Ai&&(!document.documentMode||9<document.documentMode)}function ro(){gl&&(gl.detachEvent("onpropertychange",lo),ta=gl=null)}function lo(e){if(e.propertyName==="value"&&ja(ta)){var t=[];Ni(t,ta,e,wi(e)),St(eo,t)}}function Uc(e,t,n){e==="focusin"?(ro(),gl=t,ta=n,gl.attachEvent("onpropertychange",lo)):e==="focusout"&&ro()}function qc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ja(ta)}function Di(e,t){if(e==="click")return ja(t)}function Wn(e,t){if(e==="input"||e==="change")return ja(t)}function ao(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var cn=typeof Object.is=="function"?Object.is:ao;function na(e,t){if(cn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Me.call(t,i)||!cn(e[i],t[i]))return!1}return!0}function Na(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ra(e,t){var n=Na(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Na(n)}}function Oi(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Oi(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Li(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Se(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Se(e.document)}return t}function Mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Bi=wn&&"documentMode"in document&&11>=document.documentMode,Vr=null,zi=null,ra=null,Ui=!1;function f(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ui||Vr==null||Vr!==Se(r)||(r=Vr,"selectionStart"in r&&Mr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ra&&na(ra,r)||(ra=r,r=Go(zi,"onSelect"),0<r.length&&(t=new Ql("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vr)))}function v(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var w={animationend:v("Animation","AnimationEnd"),animationiteration:v("Animation","AnimationIteration"),animationstart:v("Animation","AnimationStart"),transitionrun:v("Transition","TransitionRun"),transitionstart:v("Transition","TransitionStart"),transitioncancel:v("Transition","TransitionCancel"),transitionend:v("Transition","TransitionEnd")},A={},R={};wn&&(R=document.createElement("div").style,"AnimationEvent"in window||(delete w.animationend.animation,delete w.animationiteration.animation,delete w.animationstart.animation),"TransitionEvent"in window||delete w.transitionend.transition);function W(e){if(A[e])return A[e];if(!w[e])return e;var t=w[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in R)return A[e]=t[n];return e}var he=W("animationend"),et=W("animationiteration"),Ae=W("animationstart"),rt=W("transitionrun"),Mt=W("transitionstart"),un=W("transitioncancel"),qe=W("transitionend"),pt=new Map,mr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mr.push("scrollEnd");function Rt(e,t){pt.set(e,t),Cn(t,[e])}var xn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},zt=[],On=0,Aa=0;function Ir(){for(var e=On,t=Aa=On=0;t<e;){var n=zt[t];zt[t++]=null;var r=zt[t];zt[t++]=null;var i=zt[t];zt[t++]=null;var c=zt[t];if(zt[t++]=null,r!==null&&i!==null){var p=r.pending;p===null?i.next=i:(i.next=p.next,p.next=i),r.pending=i}c!==0&&mf(n,i,c)}}function _l(e,t,n,r){zt[On++]=e,zt[On++]=t,zt[On++]=n,zt[On++]=r,Aa|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Pr(e,t,n,r){return _l(e,t,n,r),io(e)}function jr(e,t){return _l(e,null,null,t),io(e)}function mf(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,c=e.return;c!==null;)c.childLanes|=n,r=c.alternate,r!==null&&(r.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(i=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,i&&t!==null&&(i=31-Qe(n),e=c.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),c):null}function io(e){if(50<is)throw is=0,Xu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ca={};function up(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(e,t,n,r){return new up(e,t,n,r)}function Hc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fr(e,t){var n=e.alternate;return n===null?(n=Ln(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function hf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function so(e,t,n,r,i,c){var p=0;if(r=e,typeof e=="function")Hc(e)&&(p=1);else if(typeof e=="string")p=p2(e,n,ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ve:return e=Ln(31,n,t,i),e.elementType=ve,e.lanes=c,e;case F:return la(n.children,i,c,t);case H:p=8,i|=24;break;case P:return e=Ln(12,n,t,i|2),e.elementType=P,e.lanes=c,e;case oe:return e=Ln(13,n,t,i),e.elementType=oe,e.lanes=c,e;case ge:return e=Ln(19,n,t,i),e.elementType=ge,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case re:p=10;break e;case B:p=9;break e;case q:p=11;break e;case te:p=14;break e;case pe:p=16,r=null;break e}p=29,n=Error(s(130,e===null?"null":typeof e,"")),r=null}return t=Ln(p,n,t,i),t.elementType=e,t.type=r,t.lanes=c,t}function la(e,t,n,r){return e=Ln(7,e,r,t),e.lanes=n,e}function Vc(e,t,n){return e=Ln(6,e,null,t),e.lanes=n,e}function pf(e){var t=Ln(18,null,null,0);return t.stateNode=e,t}function Ic(e,t,n){return t=Ln(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var gf=new WeakMap;function Zn(e,t){if(typeof e=="object"&&e!==null){var n=gf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ve(t)},gf.set(e,t),t)}return{value:e,source:t,stack:Ve(t)}}var Da=[],Oa=0,oo=null,qi=0,Jn=[],er=0,vl=null,Nr=1,Rr="";function Gr(e,t){Da[Oa++]=qi,Da[Oa++]=oo,oo=e,qi=t}function _f(e,t,n){Jn[er++]=Nr,Jn[er++]=Rr,Jn[er++]=vl,vl=e;var r=Nr;e=Rr;var i=32-Qe(r)-1;r&=~(1<<i),n+=1;var c=32-Qe(t)+i;if(30<c){var p=i-i%5;c=(r&(1<<p)-1).toString(32),r>>=p,i-=p,Nr=1<<32-Qe(t)+i|n<<i|r,Rr=c+e}else Nr=1<<c|n<<i|r,Rr=e}function Pc(e){e.return!==null&&(Gr(e,1),_f(e,1,0))}function Fc(e){for(;e===oo;)oo=Da[--Oa],Da[Oa]=null,qi=Da[--Oa],Da[Oa]=null;for(;e===vl;)vl=Jn[--er],Jn[er]=null,Rr=Jn[--er],Jn[er]=null,Nr=Jn[--er],Jn[er]=null}function vf(e,t){Jn[er++]=Nr,Jn[er++]=Rr,Jn[er++]=vl,Nr=t.id,Rr=t.overflow,vl=e}var Xt=null,gt=null,Ke=!1,bl=null,tr=!1,Gc=Error(s(519));function yl(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Hi(Zn(t,e)),Gc}function bf(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[kt]=e,t[xt]=r,n){case"dialog":Ge("cancel",t),Ge("close",t);break;case"iframe":case"object":case"embed":Ge("load",t);break;case"video":case"audio":for(n=0;n<os.length;n++)Ge(os[n],t);break;case"source":Ge("error",t);break;case"img":case"image":case"link":Ge("error",t),Ge("load",t);break;case"details":Ge("toggle",t);break;case"input":Ge("invalid",t),Bs(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ge("invalid",t);break;case"textarea":Ge("invalid",t),ka(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||r.suppressHydrationWarning===!0||B1(t.textContent,n)?(r.popover!=null&&(Ge("beforetoggle",t),Ge("toggle",t)),r.onScroll!=null&&Ge("scroll",t),r.onScrollEnd!=null&&Ge("scrollend",t),r.onClick!=null&&(t.onclick=fr),t=!0):t=!1,t||yl(e,!0)}function yf(e){for(Xt=e.return;Xt;)switch(Xt.tag){case 5:case 31:case 13:tr=!1;return;case 27:case 3:tr=!0;return;default:Xt=Xt.return}}function La(e){if(e!==Xt)return!1;if(!Ke)return yf(e),Ke=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||cd(e.type,e.memoizedProps)),n=!n),n&&gt&&yl(e),yf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));gt=G1(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));gt=G1(e)}else t===27?(t=gt,Ol(e.type)?(e=hd,hd=null,gt=e):gt=t):gt=Xt?rr(e.stateNode.nextSibling):null;return!0}function aa(){gt=Xt=null,Ke=!1}function $c(){var e=bl;return e!==null&&(Tn===null?Tn=e:Tn.push.apply(Tn,e),bl=null),e}function Hi(e){bl===null?bl=[e]:bl.push(e)}var Yc=T(null),ia=null,$r=null;function wl(e,t,n){le(Yc,t._currentValue),t._currentValue=n}function Yr(e){e._currentValue=Yc.current,G(Yc)}function Xc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Kc(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var c=i.dependencies;if(c!==null){var p=i.child;c=c.firstContext;e:for(;c!==null;){var y=c;c=i;for(var S=0;S<t.length;S++)if(y.context===t[S]){c.lanes|=n,y=c.alternate,y!==null&&(y.lanes|=n),Xc(c.return,n,e),r||(p=null);break e}c=y.next}}else if(i.tag===18){if(p=i.return,p===null)throw Error(s(341));p.lanes|=n,c=p.alternate,c!==null&&(c.lanes|=n),Xc(p,n,e),p=null}else p=i.child;if(p!==null)p.return=i;else for(p=i;p!==null;){if(p===e){p=null;break}if(i=p.sibling,i!==null){i.return=p.return,p=i;break}p=p.return}i=p}}function Ba(e,t,n,r){e=null;for(var i=t,c=!1;i!==null;){if(!c){if((i.flags&524288)!==0)c=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var p=i.alternate;if(p===null)throw Error(s(387));if(p=p.memoizedProps,p!==null){var y=i.type;cn(i.pendingProps.value,p.value)||(e!==null?e.push(y):e=[y])}}else if(i===Te.current){if(p=i.alternate,p===null)throw Error(s(387));p.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(ms):e=[ms])}i=i.return}e!==null&&Kc(t,e,n,r),t.flags|=262144}function co(e){for(e=e.firstContext;e!==null;){if(!cn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sa(e){ia=e,$r=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Kt(e){return wf(ia,e)}function uo(e,t){return ia===null&&sa(e),wf(e,t)}function wf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},$r===null){if(e===null)throw Error(s(308));$r=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $r=$r.next=t;return n}var dp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},fp=a.unstable_scheduleCallback,mp=a.unstable_NormalPriority,Dt={$$typeof:re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qc(){return{controller:new dp,data:new Map,refCount:0}}function Vi(e){e.refCount--,e.refCount===0&&fp(mp,function(){e.controller.abort()})}var Ii=null,Wc=0,za=0,Ua=null;function hp(e,t){if(Ii===null){var n=Ii=[];Wc=0,za=ed(),Ua={status:"pending",value:void 0,then:function(r){n.push(r)}}}return Wc++,t.then(xf,xf),t}function xf(){if(--Wc===0&&Ii!==null){Ua!==null&&(Ua.status="fulfilled");var e=Ii;Ii=null,za=0,Ua=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function pp(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(r.status="rejected",r.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),r}var kf=N.S;N.S=function(e,t){i1=ht(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&hp(e,t),kf!==null&&kf(e,t)};var oa=T(null);function Zc(){var e=oa.current;return e!==null?e:mt.pooledCache}function fo(e,t){t===null?le(oa,oa.current):le(oa,t.pool)}function Sf(){var e=Zc();return e===null?null:{parent:Dt._currentValue,pool:e}}var qa=Error(s(460)),Jc=Error(s(474)),mo=Error(s(542)),ho={then:function(){}};function Ef(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(fr,fr),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,jf(e),e;default:if(typeof t.status=="string")t.then(fr,fr);else{if(e=mt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=r}},function(r){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,jf(e),e}throw ua=t,qa}}function ca(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ua=n,qa):n}}var ua=null;function Mf(){if(ua===null)throw Error(s(459));var e=ua;return ua=null,e}function jf(e){if(e===qa||e===mo)throw Error(s(483))}var Ha=null,Pi=0;function po(e){var t=Pi;return Pi+=1,Ha===null&&(Ha=[]),Tf(Ha,e,t)}function Fi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function go(e,t){throw t.$$typeof===E?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Nf(e){function t(C,M){if(e){var L=C.deletions;L===null?(C.deletions=[M],C.flags|=16):L.push(M)}}function n(C,M){if(!e)return null;for(;M!==null;)t(C,M),M=M.sibling;return null}function r(C){for(var M=new Map;C!==null;)C.key!==null?M.set(C.key,C):M.set(C.index,C),C=C.sibling;return M}function i(C,M){return C=Fr(C,M),C.index=0,C.sibling=null,C}function c(C,M,L){return C.index=L,e?(L=C.alternate,L!==null?(L=L.index,L<M?(C.flags|=67108866,M):L):(C.flags|=67108866,M)):(C.flags|=1048576,M)}function p(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function y(C,M,L,X){return M===null||M.tag!==6?(M=Vc(L,C.mode,X),M.return=C,M):(M=i(M,L),M.return=C,M)}function S(C,M,L,X){var Ee=L.type;return Ee===F?Y(C,M,L.props.children,X,L.key):M!==null&&(M.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===pe&&ca(Ee)===M.type)?(M=i(M,L.props),Fi(M,L),M.return=C,M):(M=so(L.type,L.key,L.props,null,C.mode,X),Fi(M,L),M.return=C,M)}function z(C,M,L,X){return M===null||M.tag!==4||M.stateNode.containerInfo!==L.containerInfo||M.stateNode.implementation!==L.implementation?(M=Ic(L,C.mode,X),M.return=C,M):(M=i(M,L.children||[]),M.return=C,M)}function Y(C,M,L,X,Ee){return M===null||M.tag!==7?(M=la(L,C.mode,X,Ee),M.return=C,M):(M=i(M,L),M.return=C,M)}function K(C,M,L){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=Vc(""+M,C.mode,L),M.return=C,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case D:return L=so(M.type,M.key,M.props,null,C.mode,L),Fi(L,M),L.return=C,L;case O:return M=Ic(M,C.mode,L),M.return=C,M;case pe:return M=ca(M),K(C,M,L)}if(Z(M)||Ie(M))return M=la(M,C.mode,L,null),M.return=C,M;if(typeof M.then=="function")return K(C,po(M),L);if(M.$$typeof===re)return K(C,uo(C,M),L);go(C,M)}return null}function U(C,M,L,X){var Ee=M!==null?M.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return Ee!==null?null:y(C,M,""+L,X);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case D:return L.key===Ee?S(C,M,L,X):null;case O:return L.key===Ee?z(C,M,L,X):null;case pe:return L=ca(L),U(C,M,L,X)}if(Z(L)||Ie(L))return Ee!==null?null:Y(C,M,L,X,null);if(typeof L.then=="function")return U(C,M,po(L),X);if(L.$$typeof===re)return U(C,M,uo(C,L),X);go(C,L)}return null}function I(C,M,L,X,Ee){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return C=C.get(L)||null,y(M,C,""+X,Ee);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case D:return C=C.get(X.key===null?L:X.key)||null,S(M,C,X,Ee);case O:return C=C.get(X.key===null?L:X.key)||null,z(M,C,X,Ee);case pe:return X=ca(X),I(C,M,L,X,Ee)}if(Z(X)||Ie(X))return C=C.get(L)||null,Y(M,C,X,Ee,null);if(typeof X.then=="function")return I(C,M,L,po(X),Ee);if(X.$$typeof===re)return I(C,M,L,uo(M,X),Ee);go(M,X)}return null}function ye(C,M,L,X){for(var Ee=null,tt=null,ke=M,He=M=0,Xe=null;ke!==null&&He<L.length;He++){ke.index>He?(Xe=ke,ke=null):Xe=ke.sibling;var nt=U(C,ke,L[He],X);if(nt===null){ke===null&&(ke=Xe);break}e&&ke&&nt.alternate===null&&t(C,ke),M=c(nt,M,He),tt===null?Ee=nt:tt.sibling=nt,tt=nt,ke=Xe}if(He===L.length)return n(C,ke),Ke&&Gr(C,He),Ee;if(ke===null){for(;He<L.length;He++)ke=K(C,L[He],X),ke!==null&&(M=c(ke,M,He),tt===null?Ee=ke:tt.sibling=ke,tt=ke);return Ke&&Gr(C,He),Ee}for(ke=r(ke);He<L.length;He++)Xe=I(ke,C,He,L[He],X),Xe!==null&&(e&&Xe.alternate!==null&&ke.delete(Xe.key===null?He:Xe.key),M=c(Xe,M,He),tt===null?Ee=Xe:tt.sibling=Xe,tt=Xe);return e&&ke.forEach(function(ql){return t(C,ql)}),Ke&&Gr(C,He),Ee}function Ne(C,M,L,X){if(L==null)throw Error(s(151));for(var Ee=null,tt=null,ke=M,He=M=0,Xe=null,nt=L.next();ke!==null&&!nt.done;He++,nt=L.next()){ke.index>He?(Xe=ke,ke=null):Xe=ke.sibling;var ql=U(C,ke,nt.value,X);if(ql===null){ke===null&&(ke=Xe);break}e&&ke&&ql.alternate===null&&t(C,ke),M=c(ql,M,He),tt===null?Ee=ql:tt.sibling=ql,tt=ql,ke=Xe}if(nt.done)return n(C,ke),Ke&&Gr(C,He),Ee;if(ke===null){for(;!nt.done;He++,nt=L.next())nt=K(C,nt.value,X),nt!==null&&(M=c(nt,M,He),tt===null?Ee=nt:tt.sibling=nt,tt=nt);return Ke&&Gr(C,He),Ee}for(ke=r(ke);!nt.done;He++,nt=L.next())nt=I(ke,C,He,nt.value,X),nt!==null&&(e&&nt.alternate!==null&&ke.delete(nt.key===null?He:nt.key),M=c(nt,M,He),tt===null?Ee=nt:tt.sibling=nt,tt=nt);return e&&ke.forEach(function(T2){return t(C,T2)}),Ke&&Gr(C,He),Ee}function dt(C,M,L,X){if(typeof L=="object"&&L!==null&&L.type===F&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case D:e:{for(var Ee=L.key;M!==null;){if(M.key===Ee){if(Ee=L.type,Ee===F){if(M.tag===7){n(C,M.sibling),X=i(M,L.props.children),X.return=C,C=X;break e}}else if(M.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===pe&&ca(Ee)===M.type){n(C,M.sibling),X=i(M,L.props),Fi(X,L),X.return=C,C=X;break e}n(C,M);break}else t(C,M);M=M.sibling}L.type===F?(X=la(L.props.children,C.mode,X,L.key),X.return=C,C=X):(X=so(L.type,L.key,L.props,null,C.mode,X),Fi(X,L),X.return=C,C=X)}return p(C);case O:e:{for(Ee=L.key;M!==null;){if(M.key===Ee)if(M.tag===4&&M.stateNode.containerInfo===L.containerInfo&&M.stateNode.implementation===L.implementation){n(C,M.sibling),X=i(M,L.children||[]),X.return=C,C=X;break e}else{n(C,M);break}else t(C,M);M=M.sibling}X=Ic(L,C.mode,X),X.return=C,C=X}return p(C);case pe:return L=ca(L),dt(C,M,L,X)}if(Z(L))return ye(C,M,L,X);if(Ie(L)){if(Ee=Ie(L),typeof Ee!="function")throw Error(s(150));return L=Ee.call(L),Ne(C,M,L,X)}if(typeof L.then=="function")return dt(C,M,po(L),X);if(L.$$typeof===re)return dt(C,M,uo(C,L),X);go(C,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,M!==null&&M.tag===6?(n(C,M.sibling),X=i(M,L),X.return=C,C=X):(n(C,M),X=Vc(L,C.mode,X),X.return=C,C=X),p(C)):n(C,M)}return function(C,M,L,X){try{Pi=0;var Ee=dt(C,M,L,X);return Ha=null,Ee}catch(ke){if(ke===qa||ke===mo)throw ke;var tt=Ln(29,ke,null,C.mode);return tt.lanes=X,tt.return=C,tt}finally{}}}var da=Nf(!0),Rf=Nf(!1),xl=!1;function eu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function kl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sl(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(lt&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=io(e),mf(e,null,n),t}return _l(e,r,t,n),io(e)}function Gi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gn(e,n)}}function nu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?i=c=p:c=c.next=p,n=n.next}while(n!==null);c===null?i=c=t:c=c.next=t}else i=c=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ru=!1;function $i(){if(ru){var e=Ua;if(e!==null)throw e}}function Yi(e,t,n,r){ru=!1;var i=e.updateQueue;xl=!1;var c=i.firstBaseUpdate,p=i.lastBaseUpdate,y=i.shared.pending;if(y!==null){i.shared.pending=null;var S=y,z=S.next;S.next=null,p===null?c=z:p.next=z,p=S;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,y=Y.lastBaseUpdate,y!==p&&(y===null?Y.firstBaseUpdate=z:y.next=z,Y.lastBaseUpdate=S))}if(c!==null){var K=i.baseState;p=0,Y=z=S=null,y=c;do{var U=y.lane&-536870913,I=U!==y.lane;if(I?(Ye&U)===U:(r&U)===U){U!==0&&U===za&&(ru=!0),Y!==null&&(Y=Y.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var ye=e,Ne=y;U=t;var dt=n;switch(Ne.tag){case 1:if(ye=Ne.payload,typeof ye=="function"){K=ye.call(dt,K,U);break e}K=ye;break e;case 3:ye.flags=ye.flags&-65537|128;case 0:if(ye=Ne.payload,U=typeof ye=="function"?ye.call(dt,K,U):ye,U==null)break e;K=x({},K,U);break e;case 2:xl=!0}}U=y.callback,U!==null&&(e.flags|=64,I&&(e.flags|=8192),I=i.callbacks,I===null?i.callbacks=[U]:I.push(U))}else I={lane:U,tag:y.tag,payload:y.payload,callback:y.callback,next:null},Y===null?(z=Y=I,S=K):Y=Y.next=I,p|=U;if(y=y.next,y===null){if(y=i.shared.pending,y===null)break;I=y,y=I.next,I.next=null,i.lastBaseUpdate=I,i.shared.pending=null}}while(!0);Y===null&&(S=K),i.baseState=S,i.firstBaseUpdate=z,i.lastBaseUpdate=Y,c===null&&(i.shared.lanes=0),Nl|=p,e.lanes=p,e.memoizedState=K}}function Af(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Cf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Af(n[e],t)}var Va=T(null),_o=T(0);function Df(e,t){e=nl,le(_o,e),le(Va,t),nl=e|t.baseLanes}function lu(){le(_o,nl),le(Va,Va.current)}function au(){nl=_o.current,G(Va),G(_o)}var Bn=T(null),nr=null;function El(e){var t=e.alternate;le(At,At.current&1),le(Bn,e),nr===null&&(t===null||Va.current!==null||t.memoizedState!==null)&&(nr=e)}function iu(e){le(At,At.current),le(Bn,e),nr===null&&(nr=e)}function Of(e){e.tag===22?(le(At,At.current),le(Bn,e),nr===null&&(nr=e)):Tl()}function Tl(){le(At,At.current),le(Bn,Bn.current)}function zn(e){G(Bn),nr===e&&(nr=null),G(At)}var At=T(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||fd(n)||md(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xr=0,Ue=null,ct=null,Ot=null,bo=!1,Ia=!1,fa=!1,yo=0,Xi=0,Pa=null,gp=0;function jt(){throw Error(s(321))}function su(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!cn(e[n],t[n]))return!1;return!0}function ou(e,t,n,r,i,c){return Xr=c,Ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?_0:ku,fa=!1,c=n(r,i),fa=!1,Ia&&(c=Bf(t,n,r,i)),Lf(e),c}function Lf(e){N.H=Wi;var t=ct!==null&&ct.next!==null;if(Xr=0,Ot=ct=Ue=null,bo=!1,Xi=0,Pa=null,t)throw Error(s(300));e===null||Lt||(e=e.dependencies,e!==null&&co(e)&&(Lt=!0))}function Bf(e,t,n,r){Ue=e;var i=0;do{if(Ia&&(Pa=null),Xi=0,Ia=!1,25<=i)throw Error(s(301));if(i+=1,Ot=ct=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}N.H=v0,c=t(n,r)}while(Ia);return c}function _p(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?Ki(t):t,e=e.useState()[0],(ct!==null?ct.memoizedState:null)!==e&&(Ue.flags|=1024),t}function cu(){var e=yo!==0;return yo=0,e}function uu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function du(e){if(bo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bo=!1}Xr=0,Ot=ct=Ue=null,Ia=!1,Xi=yo=0,Pa=null}function dn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?Ue.memoizedState=Ot=e:Ot=Ot.next=e,Ot}function Ct(){if(ct===null){var e=Ue.alternate;e=e!==null?e.memoizedState:null}else e=ct.next;var t=Ot===null?Ue.memoizedState:Ot.next;if(t!==null)Ot=t,ct=e;else{if(e===null)throw Ue.alternate===null?Error(s(467)):Error(s(310));ct=e,e={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},Ot===null?Ue.memoizedState=Ot=e:Ot=Ot.next=e}return Ot}function wo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ki(e){var t=Xi;return Xi+=1,Pa===null&&(Pa=[]),e=Tf(Pa,e,t),t=Ue,(Ot===null?t.memoizedState:Ot.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?_0:ku),e}function xo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ki(e);if(e.$$typeof===re)return Kt(e)}throw Error(s(438,String(e)))}function fu(e){var t=null,n=Ue.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=Ue.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=wo(),Ue.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=Be;return t.index++,n}function Kr(e,t){return typeof t=="function"?t(e):t}function ko(e){var t=Ct();return mu(t,ct,e)}function mu(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,c=r.pending;if(c!==null){if(i!==null){var p=i.next;i.next=c.next,c.next=p}t.baseQueue=i=c,r.pending=null}if(c=e.baseState,i===null)e.memoizedState=c;else{t=i.next;var y=p=null,S=null,z=t,Y=!1;do{var K=z.lane&-536870913;if(K!==z.lane?(Ye&K)===K:(Xr&K)===K){var U=z.revertLane;if(U===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),K===za&&(Y=!0);else if((Xr&U)===U){z=z.next,U===za&&(Y=!0);continue}else K={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},S===null?(y=S=K,p=c):S=S.next=K,Ue.lanes|=U,Nl|=U;K=z.action,fa&&n(c,K),c=z.hasEagerState?z.eagerState:n(c,K)}else U={lane:K,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},S===null?(y=S=U,p=c):S=S.next=U,Ue.lanes|=K,Nl|=K;z=z.next}while(z!==null&&z!==t);if(S===null?p=c:S.next=y,!cn(c,e.memoizedState)&&(Lt=!0,Y&&(n=Ua,n!==null)))throw n;e.memoizedState=c,e.baseState=p,e.baseQueue=S,r.lastRenderedState=c}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function hu(e){var t=Ct(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,c=t.memoizedState;if(i!==null){n.pending=null;var p=i=i.next;do c=e(c,p.action),p=p.next;while(p!==i);cn(c,t.memoizedState)||(Lt=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,r]}function zf(e,t,n){var r=Ue,i=Ct(),c=Ke;if(c){if(n===void 0)throw Error(s(407));n=n()}else n=t();var p=!cn((ct||i).memoizedState,n);if(p&&(i.memoizedState=n,Lt=!0),i=i.queue,_u(Hf.bind(null,r,i,e),[e]),i.getSnapshot!==t||p||Ot!==null&&Ot.memoizedState.tag&1){if(r.flags|=2048,Fa(9,{destroy:void 0},qf.bind(null,r,i,n,t),null),mt===null)throw Error(s(349));c||(Xr&127)!==0||Uf(r,t,n)}return n}function Uf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ue.updateQueue,t===null?(t=wo(),Ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qf(e,t,n,r){t.value=n,t.getSnapshot=r,Vf(t)&&If(e)}function Hf(e,t,n){return n(function(){Vf(t)&&If(e)})}function Vf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!cn(e,n)}catch{return!0}}function If(e){var t=jr(e,2);t!==null&&Mn(t,e,2)}function pu(e){var t=dn();if(typeof e=="function"){var n=e;if(e=n(),fa){vt(!0);try{n()}finally{vt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kr,lastRenderedState:e},t}function Pf(e,t,n,r){return e.baseState=n,mu(e,ct,typeof r=="function"?r:Kr)}function vp(e,t,n,r,i){if(To(e))throw Error(s(485));if(e=t.action,e!==null){var c={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};N.T!==null?n(!0):c.isTransition=!1,r(c),n=t.pending,n===null?(c.next=t.pending=c,Ff(t,c)):(c.next=n.next,t.pending=n.next=c)}}function Ff(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var c=N.T,p={};N.T=p;try{var y=n(i,r),S=N.S;S!==null&&S(p,y),Gf(e,t,y)}catch(z){gu(e,t,z)}finally{c!==null&&p.types!==null&&(c.types=p.types),N.T=c}}else try{c=n(i,r),Gf(e,t,c)}catch(z){gu(e,t,z)}}function Gf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){$f(e,t,r)},function(r){return gu(e,t,r)}):$f(e,t,n)}function $f(e,t,n){t.status="fulfilled",t.value=n,Yf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ff(e,n)))}function gu(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=n,Yf(t),t=t.next;while(t!==r)}e.action=null}function Yf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Xf(e,t){return t}function Kf(e,t){if(Ke){var n=mt.formState;if(n!==null){e:{var r=Ue;if(Ke){if(gt){t:{for(var i=gt,c=tr;i.nodeType!==8;){if(!c){i=null;break t}if(i=rr(i.nextSibling),i===null){i=null;break t}}c=i.data,i=c==="F!"||c==="F"?i:null}if(i){gt=rr(i.nextSibling),r=i.data==="F!";break e}}yl(r)}r=!1}r&&(t=n[0])}}return n=dn(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xf,lastRenderedState:t},n.queue=r,n=h0.bind(null,Ue,r),r.dispatch=n,r=pu(!1),c=xu.bind(null,Ue,!1,r.queue),r=dn(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=vp.bind(null,Ue,i,c,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Qf(e){var t=Ct();return Wf(t,ct,e)}function Wf(e,t,n){if(t=mu(e,t,Xf)[0],e=ko(Kr)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=Ki(t)}catch(p){throw p===qa?mo:p}else r=t;t=Ct();var i=t.queue,c=i.dispatch;return n!==t.memoizedState&&(Ue.flags|=2048,Fa(9,{destroy:void 0},bp.bind(null,i,n),null)),[r,c,e]}function bp(e,t){e.action=t}function Zf(e){var t=Ct(),n=ct;if(n!==null)return Wf(t,n,e);Ct(),t=t.memoizedState,n=Ct();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Fa(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=Ue.updateQueue,t===null&&(t=wo(),Ue.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Jf(){return Ct().memoizedState}function So(e,t,n,r){var i=dn();Ue.flags|=e,i.memoizedState=Fa(1|t,{destroy:void 0},n,r===void 0?null:r)}function Eo(e,t,n,r){var i=Ct();r=r===void 0?null:r;var c=i.memoizedState.inst;ct!==null&&r!==null&&su(r,ct.memoizedState.deps)?i.memoizedState=Fa(t,c,n,r):(Ue.flags|=e,i.memoizedState=Fa(1|t,c,n,r))}function e0(e,t){So(8390656,8,e,t)}function _u(e,t){Eo(2048,8,e,t)}function yp(e){Ue.flags|=4;var t=Ue.updateQueue;if(t===null)t=wo(),Ue.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function t0(e){var t=Ct().memoizedState;return yp({ref:t,nextImpl:e}),function(){if((lt&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function n0(e,t){return Eo(4,2,e,t)}function r0(e,t){return Eo(4,4,e,t)}function l0(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function a0(e,t,n){n=n!=null?n.concat([e]):null,Eo(4,4,l0.bind(null,t,e),n)}function vu(){}function i0(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&su(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function s0(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&su(t,r[1]))return r[0];if(r=e(),fa){vt(!0);try{e()}finally{vt(!1)}}return n.memoizedState=[r,t],r}function bu(e,t,n){return n===void 0||(Xr&1073741824)!==0&&(Ye&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=o1(),Ue.lanes|=e,Nl|=e,n)}function o0(e,t,n,r){return cn(n,t)?n:Va.current!==null?(e=bu(e,n,r),cn(e,t)||(Lt=!0),e):(Xr&42)===0||(Xr&1073741824)!==0&&(Ye&261930)===0?(Lt=!0,e.memoizedState=n):(e=o1(),Ue.lanes|=e,Nl|=e,t)}function c0(e,t,n,r,i){var c=Q.p;Q.p=c!==0&&8>c?c:8;var p=N.T,y={};N.T=y,xu(e,!1,t,n);try{var S=i(),z=N.S;if(z!==null&&z(y,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var Y=pp(S,r);Qi(e,t,Y,Hn(e))}else Qi(e,t,r,Hn(e))}catch(K){Qi(e,t,{then:function(){},status:"rejected",reason:K},Hn())}finally{Q.p=c,p!==null&&y.types!==null&&(p.types=y.types),N.T=p}}function wp(){}function yu(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=u0(e).queue;c0(e,i,t,de,n===null?wp:function(){return d0(e),n(r)})}function u0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kr,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kr,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function d0(e){var t=u0(e);t.next===null&&(t=e.alternate.memoizedState),Qi(e,t.next.queue,{},Hn())}function wu(){return Kt(ms)}function f0(){return Ct().memoizedState}function m0(){return Ct().memoizedState}function xp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Hn();e=kl(n);var r=Sl(t,e,n);r!==null&&(Mn(r,t,n),Gi(r,t,n)),t={cache:Qc()},e.payload=t;return}t=t.return}}function kp(e,t,n){var r=Hn();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},To(e)?p0(t,n):(n=Pr(e,t,n,r),n!==null&&(Mn(n,e,r),g0(n,t,r)))}function h0(e,t,n){var r=Hn();Qi(e,t,n,r)}function Qi(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(To(e))p0(t,i);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var p=t.lastRenderedState,y=c(p,n);if(i.hasEagerState=!0,i.eagerState=y,cn(y,p))return _l(e,t,i,0),mt===null&&Ir(),!1}catch{}finally{}if(n=Pr(e,t,i,r),n!==null)return Mn(n,e,r),g0(n,t,r),!0}return!1}function xu(e,t,n,r){if(r={lane:2,revertLane:ed(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},To(e)){if(t)throw Error(s(479))}else t=Pr(e,n,r,2),t!==null&&Mn(t,e,2)}function To(e){var t=e.alternate;return e===Ue||t!==null&&t===Ue}function p0(e,t){Ia=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function g0(e,t,n){if((n&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gn(e,n)}}var Wi={readContext:Kt,use:xo,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useLayoutEffect:jt,useInsertionEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useSyncExternalStore:jt,useId:jt,useHostTransitionStatus:jt,useFormState:jt,useActionState:jt,useOptimistic:jt,useMemoCache:jt,useCacheRefresh:jt};Wi.useEffectEvent=jt;var _0={readContext:Kt,use:xo,useCallback:function(e,t){return dn().memoizedState=[e,t===void 0?null:t],e},useContext:Kt,useEffect:e0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,So(4194308,4,l0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return So(4194308,4,e,t)},useInsertionEffect:function(e,t){So(4,2,e,t)},useMemo:function(e,t){var n=dn();t=t===void 0?null:t;var r=e();if(fa){vt(!0);try{e()}finally{vt(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=dn();if(n!==void 0){var i=n(t);if(fa){vt(!0);try{n(t)}finally{vt(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=kp.bind(null,Ue,e),[r.memoizedState,e]},useRef:function(e){var t=dn();return e={current:e},t.memoizedState=e},useState:function(e){e=pu(e);var t=e.queue,n=h0.bind(null,Ue,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vu,useDeferredValue:function(e,t){var n=dn();return bu(n,e,t)},useTransition:function(){var e=pu(!1);return e=c0.bind(null,Ue,e.queue,!0,!1),dn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Ue,i=dn();if(Ke){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),mt===null)throw Error(s(349));(Ye&127)!==0||Uf(r,t,n)}i.memoizedState=n;var c={value:n,getSnapshot:t};return i.queue=c,e0(Hf.bind(null,r,c,e),[e]),r.flags|=2048,Fa(9,{destroy:void 0},qf.bind(null,r,c,n,t),null),n},useId:function(){var e=dn(),t=mt.identifierPrefix;if(Ke){var n=Rr,r=Nr;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,t="_"+t+"R_"+n,n=yo++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=gp++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:wu,useFormState:Kf,useActionState:Kf,useOptimistic:function(e){var t=dn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=xu.bind(null,Ue,!0,n),n.dispatch=t,[e,t]},useMemoCache:fu,useCacheRefresh:function(){return dn().memoizedState=xp.bind(null,Ue)},useEffectEvent:function(e){var t=dn(),n={impl:e};return t.memoizedState=n,function(){if((lt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},ku={readContext:Kt,use:xo,useCallback:i0,useContext:Kt,useEffect:_u,useImperativeHandle:a0,useInsertionEffect:n0,useLayoutEffect:r0,useMemo:s0,useReducer:ko,useRef:Jf,useState:function(){return ko(Kr)},useDebugValue:vu,useDeferredValue:function(e,t){var n=Ct();return o0(n,ct.memoizedState,e,t)},useTransition:function(){var e=ko(Kr)[0],t=Ct().memoizedState;return[typeof e=="boolean"?e:Ki(e),t]},useSyncExternalStore:zf,useId:f0,useHostTransitionStatus:wu,useFormState:Qf,useActionState:Qf,useOptimistic:function(e,t){var n=Ct();return Pf(n,ct,e,t)},useMemoCache:fu,useCacheRefresh:m0};ku.useEffectEvent=t0;var v0={readContext:Kt,use:xo,useCallback:i0,useContext:Kt,useEffect:_u,useImperativeHandle:a0,useInsertionEffect:n0,useLayoutEffect:r0,useMemo:s0,useReducer:hu,useRef:Jf,useState:function(){return hu(Kr)},useDebugValue:vu,useDeferredValue:function(e,t){var n=Ct();return ct===null?bu(n,e,t):o0(n,ct.memoizedState,e,t)},useTransition:function(){var e=hu(Kr)[0],t=Ct().memoizedState;return[typeof e=="boolean"?e:Ki(e),t]},useSyncExternalStore:zf,useId:f0,useHostTransitionStatus:wu,useFormState:Zf,useActionState:Zf,useOptimistic:function(e,t){var n=Ct();return ct!==null?Pf(n,ct,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:fu,useCacheRefresh:m0};v0.useEffectEvent=t0;function Su(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:x({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Eu={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Hn(),i=kl(r);i.payload=t,n!=null&&(i.callback=n),t=Sl(e,i,r),t!==null&&(Mn(t,e,r),Gi(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Hn(),i=kl(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Sl(e,i,r),t!==null&&(Mn(t,e,r),Gi(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Hn(),r=kl(n);r.tag=2,t!=null&&(r.callback=t),t=Sl(e,r,n),t!==null&&(Mn(t,e,n),Gi(t,e,n))}};function b0(e,t,n,r,i,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,c,p):t.prototype&&t.prototype.isPureReactComponent?!na(n,r)||!na(i,c):!0}function y0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Eu.enqueueReplaceState(t,t.state,null)}function ma(e,t){var n=t;if("ref"in t){n={};for(var r in t)r!=="ref"&&(n[r]=t[r])}if(e=e.defaultProps){n===t&&(n=x({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}function w0(e){xn(e)}function x0(e){console.error(e)}function k0(e){xn(e)}function Mo(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function S0(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Tu(e,t,n){return n=kl(n),n.tag=3,n.payload={element:null},n.callback=function(){Mo(e,t)},n}function E0(e){return e=kl(e),e.tag=3,e}function T0(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var c=r.value;e.payload=function(){return i(c)},e.callback=function(){S0(t,n,r)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){S0(t,n,r),typeof i!="function"&&(Rl===null?Rl=new Set([this]):Rl.add(this));var y=r.stack;this.componentDidCatch(r.value,{componentStack:y!==null?y:""})})}function Sp(e,t,n,r,i){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=n.alternate,t!==null&&Ba(t,n,i,!0),n=Bn.current,n!==null){switch(n.tag){case 31:case 13:return nr===null?qo():n.alternate===null&&Nt===0&&(Nt=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===ho?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Wu(e,r,i)),!1;case 22:return n.flags|=65536,r===ho?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Wu(e,r,i)),!1}throw Error(s(435,n.tag))}return Wu(e,r,i),qo(),!1}if(Ke)return t=Bn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Gc&&(e=Error(s(422),{cause:r}),Hi(Zn(e,n)))):(r!==Gc&&(t=Error(s(423),{cause:r}),Hi(Zn(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Zn(r,n),i=Tu(e.stateNode,r,i),nu(e,i),Nt!==4&&(Nt=2)),!1;var c=Error(s(520),{cause:r});if(c=Zn(c,n),as===null?as=[c]:as.push(c),Nt!==4&&(Nt=2),t===null)return!0;r=Zn(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Tu(n.stateNode,r,e),nu(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Rl===null||!Rl.has(c))))return n.flags|=65536,i&=-i,n.lanes|=i,i=E0(i),T0(i,e,n,r),nu(n,i),!1}n=n.return}while(n!==null);return!1}var Mu=Error(s(461)),Lt=!1;function Qt(e,t,n,r){t.child=e===null?Rf(t,null,n,r):da(t,e.child,n,r)}function M0(e,t,n,r,i){n=n.render;var c=t.ref;if("ref"in r){var p={};for(var y in r)y!=="ref"&&(p[y]=r[y])}else p=r;return sa(t),r=ou(e,t,n,p,c,i),y=cu(),e!==null&&!Lt?(uu(e,t,i),Qr(e,t,i)):(Ke&&y&&Pc(t),t.flags|=1,Qt(e,t,r,i),t.child)}function j0(e,t,n,r,i){if(e===null){var c=n.type;return typeof c=="function"&&!Hc(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,N0(e,t,c,r,i)):(e=so(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Lu(e,i)){var p=c.memoizedProps;if(n=n.compare,n=n!==null?n:na,n(p,r)&&e.ref===t.ref)return Qr(e,t,i)}return t.flags|=1,e=Fr(c,r),e.ref=t.ref,e.return=t,t.child=e}function N0(e,t,n,r,i){if(e!==null){var c=e.memoizedProps;if(na(c,r)&&e.ref===t.ref)if(Lt=!1,t.pendingProps=r=c,Lu(e,i))(e.flags&131072)!==0&&(Lt=!0);else return t.lanes=e.lanes,Qr(e,t,i)}return ju(e,t,n,r,i)}function R0(e,t,n,r){var i=r.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~c}else r=0,t.child=null;return A0(e,t,c,n,r)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&fo(t,c!==null?c.cachePool:null),c!==null?Df(t,c):lu(),Of(t);else return r=t.lanes=536870912,A0(e,t,c!==null?c.baseLanes|n:n,n,r)}else c!==null?(fo(t,c.cachePool),Df(t,c),Tl(),t.memoizedState=null):(e!==null&&fo(t,null),lu(),Tl());return Qt(e,t,i,n),t.child}function Zi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function A0(e,t,n,r,i){var c=Zc();return c=c===null?null:{parent:Dt._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&fo(t,null),lu(),Of(t),e!==null&&Ba(e,t,r,!0),t.childLanes=i,null}function jo(e,t){return t=Ro({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function C0(e,t,n){return da(t,e.child,null,n),e=jo(t,t.pendingProps),e.flags|=2,zn(t),t.memoizedState=null,e}function Ep(e,t,n){var r=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ke){if(r.mode==="hidden")return e=jo(t,r),t.lanes=536870912,Zi(null,e);if(iu(t),(e=gt)?(e=F1(e,tr),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:vl!==null?{id:Nr,overflow:Rr}:null,retryLane:536870912,hydrationErrors:null},n=pf(e),n.return=t,t.child=n,Xt=t,gt=null)):e=null,e===null)throw yl(t);return t.lanes=536870912,null}return jo(t,r)}var c=e.memoizedState;if(c!==null){var p=c.dehydrated;if(iu(t),i)if(t.flags&256)t.flags&=-257,t=C0(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Lt||Ba(e,t,n,!1),i=(n&e.childLanes)!==0,Lt||i){if(r=mt,r!==null&&(p=$t(r,n),p!==0&&p!==c.retryLane))throw c.retryLane=p,jr(e,p),Mn(r,e,p),Mu;qo(),t=C0(e,t,n)}else e=c.treeContext,gt=rr(p.nextSibling),Xt=t,Ke=!0,bl=null,tr=!1,e!==null&&vf(t,e),t=jo(t,r),t.flags|=4096;return t}return e=Fr(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function No(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ju(e,t,n,r,i){return sa(t),n=ou(e,t,n,r,void 0,i),r=cu(),e!==null&&!Lt?(uu(e,t,i),Qr(e,t,i)):(Ke&&r&&Pc(t),t.flags|=1,Qt(e,t,n,i),t.child)}function D0(e,t,n,r,i,c){return sa(t),t.updateQueue=null,n=Bf(t,r,n,i),Lf(e),r=cu(),e!==null&&!Lt?(uu(e,t,c),Qr(e,t,c)):(Ke&&r&&Pc(t),t.flags|=1,Qt(e,t,n,c),t.child)}function O0(e,t,n,r,i){if(sa(t),t.stateNode===null){var c=Ca,p=n.contextType;typeof p=="object"&&p!==null&&(c=Kt(p)),c=new n(r,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Eu,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=r,c.state=t.memoizedState,c.refs={},eu(t),p=n.contextType,c.context=typeof p=="object"&&p!==null?Kt(p):Ca,c.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Su(t,n,p,r),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&Eu.enqueueReplaceState(c,c.state,null),Yi(t,r,c,i),$i(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){c=t.stateNode;var y=t.memoizedProps,S=ma(n,y);c.props=S;var z=c.context,Y=n.contextType;p=Ca,typeof Y=="object"&&Y!==null&&(p=Kt(Y));var K=n.getDerivedStateFromProps;Y=typeof K=="function"||typeof c.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,Y||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y||z!==p)&&y0(t,c,r,p),xl=!1;var U=t.memoizedState;c.state=U,Yi(t,r,c,i),$i(),z=t.memoizedState,y||U!==z||xl?(typeof K=="function"&&(Su(t,n,K,r),z=t.memoizedState),(S=xl||b0(t,n,S,r,U,z,p))?(Y||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=z),c.props=r,c.state=z,c.context=p,r=S):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{c=t.stateNode,tu(e,t),p=t.memoizedProps,Y=ma(n,p),c.props=Y,K=t.pendingProps,U=c.context,z=n.contextType,S=Ca,typeof z=="object"&&z!==null&&(S=Kt(z)),y=n.getDerivedStateFromProps,(z=typeof y=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==K||U!==S)&&y0(t,c,r,S),xl=!1,U=t.memoizedState,c.state=U,Yi(t,r,c,i),$i();var I=t.memoizedState;p!==K||U!==I||xl||e!==null&&e.dependencies!==null&&co(e.dependencies)?(typeof y=="function"&&(Su(t,n,y,r),I=t.memoizedState),(Y=xl||b0(t,n,Y,r,U,I,S)||e!==null&&e.dependencies!==null&&co(e.dependencies))?(z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,I,S),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,I,S)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=I),c.props=r,c.state=I,c.context=S,r=Y):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),r=!1)}return c=r,No(e,t),r=(t.flags&128)!==0,c||r?(c=t.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&r?(t.child=da(t,e.child,null,i),t.child=da(t,null,n,i)):Qt(e,t,n,i),t.memoizedState=c.state,e=t.child):e=Qr(e,t,i),e}function L0(e,t,n,r){return aa(),t.flags|=256,Qt(e,t,n,r),t.child}var Nu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ru(e){return{baseLanes:e,cachePool:Sf()}}function Au(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=qn),e}function B0(e,t,n){var r=t.pendingProps,i=!1,c=(t.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(At.current&2)!==0),p&&(i=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ke){if(i?El(t):Tl(),(e=gt)?(e=F1(e,tr),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:vl!==null?{id:Nr,overflow:Rr}:null,retryLane:536870912,hydrationErrors:null},n=pf(e),n.return=t,t.child=n,Xt=t,gt=null)):e=null,e===null)throw yl(t);return md(e)?t.lanes=32:t.lanes=536870912,null}var y=r.children;return r=r.fallback,i?(Tl(),i=t.mode,y=Ro({mode:"hidden",children:y},i),r=la(r,i,n,null),y.return=t,r.return=t,y.sibling=r,t.child=y,r=t.child,r.memoizedState=Ru(n),r.childLanes=Au(e,p,n),t.memoizedState=Nu,Zi(null,r)):(El(t),Cu(t,y))}var S=e.memoizedState;if(S!==null&&(y=S.dehydrated,y!==null)){if(c)t.flags&256?(El(t),t.flags&=-257,t=Du(e,t,n)):t.memoizedState!==null?(Tl(),t.child=e.child,t.flags|=128,t=null):(Tl(),y=r.fallback,i=t.mode,r=Ro({mode:"visible",children:r.children},i),y=la(y,i,n,null),y.flags|=2,r.return=t,y.return=t,r.sibling=y,t.child=r,da(t,e.child,null,n),r=t.child,r.memoizedState=Ru(n),r.childLanes=Au(e,p,n),t.memoizedState=Nu,t=Zi(null,r));else if(El(t),md(y)){if(p=y.nextSibling&&y.nextSibling.dataset,p)var z=p.dgst;p=z,r=Error(s(419)),r.stack="",r.digest=p,Hi({value:r,source:null,stack:null}),t=Du(e,t,n)}else if(Lt||Ba(e,t,n,!1),p=(n&e.childLanes)!==0,Lt||p){if(p=mt,p!==null&&(r=$t(p,n),r!==0&&r!==S.retryLane))throw S.retryLane=r,jr(e,r),Mn(p,e,r),Mu;fd(y)||qo(),t=Du(e,t,n)}else fd(y)?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,gt=rr(y.nextSibling),Xt=t,Ke=!0,bl=null,tr=!1,e!==null&&vf(t,e),t=Cu(t,r.children),t.flags|=4096);return t}return i?(Tl(),y=r.fallback,i=t.mode,S=e.child,z=S.sibling,r=Fr(S,{mode:"hidden",children:r.children}),r.subtreeFlags=S.subtreeFlags&65011712,z!==null?y=Fr(z,y):(y=la(y,i,n,null),y.flags|=2),y.return=t,r.return=t,r.sibling=y,t.child=r,Zi(null,r),r=t.child,y=e.child.memoizedState,y===null?y=Ru(n):(i=y.cachePool,i!==null?(S=Dt._currentValue,i=i.parent!==S?{parent:S,pool:S}:i):i=Sf(),y={baseLanes:y.baseLanes|n,cachePool:i}),r.memoizedState=y,r.childLanes=Au(e,p,n),t.memoizedState=Nu,Zi(e.child,r)):(El(t),n=e.child,e=n.sibling,n=Fr(n,{mode:"visible",children:r.children}),n.return=t,n.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=n,t.memoizedState=null,n)}function Cu(e,t){return t=Ro({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ro(e,t){return e=Ln(22,e,null,t),e.lanes=0,e}function Du(e,t,n){return da(t,e.child,null,n),e=Cu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function z0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xc(e.return,t,n)}function Ou(e,t,n,r,i,c){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:c}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=r,p.tail=n,p.tailMode=i,p.treeForkCount=c)}function U0(e,t,n){var r=t.pendingProps,i=r.revealOrder,c=r.tail;r=r.children;var p=At.current,y=(p&2)!==0;if(y?(p=p&1|2,t.flags|=128):p&=1,le(At,p),Qt(e,t,r,n),r=Ke?qi:0,!y&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&z0(e,n,t);else if(e.tag===19)z0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ou(t,!1,i,n,c,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ou(t,!0,n,null,c,r);break;case"together":Ou(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Qr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ba(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Fr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Fr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Lu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&co(e)))}function Tp(e,t,n){switch(t.tag){case 3:We(t,t.stateNode.containerInfo),wl(t,Dt,e.memoizedState.cache),aa();break;case 27:case 5:me(t);break;case 4:We(t,t.stateNode.containerInfo);break;case 10:wl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,iu(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(El(t),t.flags|=128,null):(n&t.child.childLanes)!==0?B0(e,t,n):(El(t),e=Qr(e,t,n),e!==null?e.sibling:null);El(t);break;case 19:var i=(e.flags&128)!==0;if(r=(n&t.childLanes)!==0,r||(Ba(e,t,n,!1),r=(n&t.childLanes)!==0),i){if(r)return U0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(At,At.current),r)break;return null;case 22:return t.lanes=0,R0(e,t,n,t.pendingProps);case 24:wl(t,Dt,e.memoizedState.cache)}return Qr(e,t,n)}function q0(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Lt=!0;else{if(!Lu(e,n)&&(t.flags&128)===0)return Lt=!1,Tp(e,t,n);Lt=(e.flags&131072)!==0}else Lt=!1,Ke&&(t.flags&1048576)!==0&&_f(t,qi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=ca(t.elementType),t.type=e,typeof e=="function")Hc(e)?(r=ma(e,r),t.tag=1,t=O0(null,t,e,r,n)):(t.tag=0,t=ju(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===q){t.tag=11,t=M0(null,t,e,r,n);break e}else if(i===te){t.tag=14,t=j0(null,t,e,r,n);break e}}throw t=$e(e)||e,Error(s(306,t,""))}}return t;case 0:return ju(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=ma(r,t.pendingProps),O0(e,t,r,i,n);case 3:e:{if(We(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var c=t.memoizedState;i=c.element,tu(e,t),Yi(t,r,null,n);var p=t.memoizedState;if(r=p.cache,wl(t,Dt,r),r!==c.cache&&Kc(t,[Dt],n,!0),$i(),r=p.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=L0(e,t,r,n);break e}else if(r!==i){i=Zn(Error(s(424)),t),Hi(i),t=L0(e,t,r,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(gt=rr(e.firstChild),Xt=t,Ke=!0,bl=null,tr=!0,n=Rf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(aa(),r===i){t=Qr(e,t,n);break e}Qt(e,t,r,n)}t=t.child}return t;case 26:return No(e,t),e===null?(n=Q1(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ke||(n=t.type,e=t.pendingProps,r=$o(fe.current).createElement(n),r[kt]=t,r[xt]=e,Wt(r,n,e),bt(r),t.stateNode=r):t.memoizedState=Q1(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return me(t),e===null&&Ke&&(r=t.stateNode=Y1(t.type,t.pendingProps,fe.current),Xt=t,tr=!0,i=gt,Ol(t.type)?(hd=i,gt=rr(r.firstChild)):gt=i),Qt(e,t,t.pendingProps.children,n),No(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ke&&((i=r=gt)&&(r=n2(r,t.type,t.pendingProps,tr),r!==null?(t.stateNode=r,Xt=t,gt=rr(r.firstChild),tr=!1,i=!0):i=!1),i||yl(t)),me(t),i=t.type,c=t.pendingProps,p=e!==null?e.memoizedProps:null,r=c.children,cd(i,c)?r=null:p!==null&&cd(i,p)&&(t.flags|=32),t.memoizedState!==null&&(i=ou(e,t,_p,null,null,n),ms._currentValue=i),No(e,t),Qt(e,t,r,n),t.child;case 6:return e===null&&Ke&&((e=n=gt)&&(n=r2(n,t.pendingProps,tr),n!==null?(t.stateNode=n,Xt=t,gt=null,e=!0):e=!1),e||yl(t)),null;case 13:return B0(e,t,n);case 4:return We(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=da(t,null,r,n):Qt(e,t,r,n),t.child;case 11:return M0(e,t,t.type,t.pendingProps,n);case 7:return Qt(e,t,t.pendingProps,n),t.child;case 8:return Qt(e,t,t.pendingProps.children,n),t.child;case 12:return Qt(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,wl(t,t.type,r.value),Qt(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,sa(t),i=Kt(i),r=r(i),t.flags|=1,Qt(e,t,r,n),t.child;case 14:return j0(e,t,t.type,t.pendingProps,n);case 15:return N0(e,t,t.type,t.pendingProps,n);case 19:return U0(e,t,n);case 31:return Ep(e,t,n);case 22:return R0(e,t,n,t.pendingProps);case 24:return sa(t),r=Kt(Dt),e===null?(i=Zc(),i===null&&(i=mt,c=Qc(),i.pooledCache=c,c.refCount++,c!==null&&(i.pooledCacheLanes|=n),i=c),t.memoizedState={parent:r,cache:i},eu(t),wl(t,Dt,i)):((e.lanes&n)!==0&&(tu(e,t),Yi(t,null,null,n),$i()),i=e.memoizedState,c=t.memoizedState,i.parent!==r?(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),wl(t,Dt,r)):(r=c.cache,wl(t,Dt,r),r!==i.cache&&Kc(t,[Dt],n,!0))),Qt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Wr(e){e.flags|=4}function Bu(e,t,n,r,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(f1())e.flags|=8192;else throw ua=ho,Jc}else e.flags&=-16777217}function H0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!tm(t))if(f1())e.flags|=8192;else throw ua=ho,Jc}function Ao(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ze():536870912,e.lanes|=t,Xa|=t)}function Ji(e,t){if(!Ke)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function _t(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Mp(e,t,n){var r=t.pendingProps;switch(Fc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(t),null;case 1:return _t(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Yr(Dt),ze(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(La(t)?Wr(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,$c())),_t(t),null;case 26:var i=t.type,c=t.memoizedState;return e===null?(Wr(t),c!==null?(_t(t),H0(t,c)):(_t(t),Bu(t,i,null,r,n))):c?c!==e.memoizedState?(Wr(t),_t(t),H0(t,c)):(_t(t),t.flags&=-16777217):(e=e.memoizedProps,e!==r&&Wr(t),_t(t),Bu(t,i,e,r,n)),null;case 27:if(je(t),n=fe.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Wr(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return _t(t),null}e=ae.current,La(t)?bf(t):(e=Y1(i,r,n),t.stateNode=e,Wr(t))}return _t(t),null;case 5:if(je(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Wr(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return _t(t),null}if(c=ae.current,La(t))bf(t);else{var p=$o(fe.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?p.createElement("select",{is:r.is}):p.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?p.createElement(i,{is:r.is}):p.createElement(i)}}c[kt]=t,c[xt]=r;e:for(p=t.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}t.stateNode=c;e:switch(Wt(c,i,r),i){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Wr(t)}}return _t(t),Bu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Wr(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(e=fe.current,La(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Xt,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[kt]=t,e=!!(e.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||B1(e.nodeValue,n)),e||yl(t,!0)}else e=$o(e).createTextNode(r),e[kt]=t,t.stateNode=e}return _t(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=La(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[kt]=t}else aa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_t(t),e=!1}else n=$c(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(zn(t),t):(zn(t),null);if((t.flags&128)!==0)throw Error(s(558))}return _t(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=La(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[kt]=t}else aa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_t(t),i=!1}else i=$c(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(zn(t),t):(zn(t),null)}return zn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ao(t,t.updateQueue),_t(t),null);case 4:return ze(),e===null&&ld(t.stateNode.containerInfo),_t(t),null;case 10:return Yr(t.type),_t(t),null;case 19:if(G(At),r=t.memoizedState,r===null)return _t(t),null;if(i=(t.flags&128)!==0,c=r.rendering,c===null)if(i)Ji(r,!1);else{if(Nt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=vo(e),c!==null){for(t.flags|=128,Ji(r,!1),e=c.updateQueue,t.updateQueue=e,Ao(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)hf(n,e),n=n.sibling;return le(At,At.current&1|2),Ke&&Gr(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&ht()>Bo&&(t.flags|=128,i=!0,Ji(r,!1),t.lanes=4194304)}else{if(!i)if(e=vo(c),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Ao(t,e),Ji(r,!0),r.tail===null&&r.tailMode==="hidden"&&!c.alternate&&!Ke)return _t(t),null}else 2*ht()-r.renderingStartTime>Bo&&n!==536870912&&(t.flags|=128,i=!0,Ji(r,!1),t.lanes=4194304);r.isBackwards?(c.sibling=t.child,t.child=c):(e=r.last,e!==null?e.sibling=c:t.child=c,r.last=c)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=ht(),e.sibling=null,n=At.current,le(At,i?n&1|2:n&1),Ke&&Gr(t,r.treeForkCount),e):(_t(t),null);case 22:case 23:return zn(t),au(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(n&536870912)!==0&&(t.flags&128)===0&&(_t(t),t.subtreeFlags&6&&(t.flags|=8192)):_t(t),n=t.updateQueue,n!==null&&Ao(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&G(oa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Yr(Dt),_t(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function jp(e,t){switch(Fc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yr(Dt),ze(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return je(t),null;case 31:if(t.memoizedState!==null){if(zn(t),t.alternate===null)throw Error(s(340));aa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(zn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));aa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(At),null;case 4:return ze(),null;case 10:return Yr(t.type),null;case 22:case 23:return zn(t),au(),e!==null&&G(oa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Yr(Dt),null;case 25:return null;default:return null}}function V0(e,t){switch(Fc(t),t.tag){case 3:Yr(Dt),ze();break;case 26:case 27:case 5:je(t);break;case 4:ze();break;case 31:t.memoizedState!==null&&zn(t);break;case 13:zn(t);break;case 19:G(At);break;case 10:Yr(t.type);break;case 22:case 23:zn(t),au(),e!==null&&G(oa);break;case 24:Yr(Dt)}}function es(e,t){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var c=n.create,p=n.inst;r=c(),p.destroy=r}n=n.next}while(n!==i)}}catch(y){ot(t,t.return,y)}}function Ml(e,t,n){try{var r=t.updateQueue,i=r!==null?r.lastEffect:null;if(i!==null){var c=i.next;r=c;do{if((r.tag&e)===e){var p=r.inst,y=p.destroy;if(y!==void 0){p.destroy=void 0,i=t;var S=n,z=y;try{z()}catch(Y){ot(i,S,Y)}}}r=r.next}while(r!==c)}}catch(Y){ot(t,t.return,Y)}}function I0(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Cf(t,n)}catch(r){ot(e,e.return,r)}}}function P0(e,t,n){n.props=ma(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){ot(e,t,r)}}function ts(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n=="function"?e.refCleanup=n(r):n.current=r}}catch(i){ot(e,t,i)}}function Ar(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(i){ot(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){ot(e,t,i)}else n.current=null}function F0(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(i){ot(e,e.return,i)}}function zu(e,t,n){try{var r=e.stateNode;Qp(r,e.type,n,t),r[xt]=t}catch(i){ot(e,e.return,i)}}function G0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ol(e.type)||e.tag===4}function Uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||G0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ol(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fr));else if(r!==4&&(r===27&&Ol(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(qu(e,t,n),e=e.sibling;e!==null;)qu(e,t,n),e=e.sibling}function Co(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Ol(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Co(e,t,n),e=e.sibling;e!==null;)Co(e,t,n),e=e.sibling}function $0(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Wt(t,r,n),t[kt]=e,t[xt]=n}catch(c){ot(e,e.return,c)}}var Zr=!1,Bt=!1,Hu=!1,Y0=typeof WeakSet=="function"?WeakSet:Set,It=null;function Np(e,t){if(e=e.containerInfo,sd=Jo,e=Li(e),Mr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,c=r.focusNode;r=r.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var p=0,y=-1,S=-1,z=0,Y=0,K=e,U=null;t:for(;;){for(var I;K!==n||i!==0&&K.nodeType!==3||(y=p+i),K!==c||r!==0&&K.nodeType!==3||(S=p+r),K.nodeType===3&&(p+=K.nodeValue.length),(I=K.firstChild)!==null;)U=K,K=I;for(;;){if(K===e)break t;if(U===n&&++z===i&&(y=p),U===c&&++Y===r&&(S=p),(I=K.nextSibling)!==null)break;K=U,U=K.parentNode}K=I}n=y===-1||S===-1?null:{start:y,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(od={focusedElem:e,selectionRange:n},Jo=!1,It=t;It!==null;)if(t=It,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,It=e;else for(;It!==null;){switch(t=It,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,i=c.memoizedProps,c=c.memoizedState,r=n.stateNode;try{var ye=ma(n.type,i);e=r.getSnapshotBeforeUpdate(ye,c),r.__reactInternalSnapshotBeforeUpdate=e}catch(Ne){ot(n,n.return,Ne)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)dd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":dd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,It=e;break}It=t.return}}function X0(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:el(e,n),r&4&&es(5,n);break;case 1:if(el(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(p){ot(n,n.return,p)}else{var i=ma(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){ot(n,n.return,p)}}r&64&&I0(n),r&512&&ts(n,n.return);break;case 3:if(el(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Cf(e,t)}catch(p){ot(n,n.return,p)}}break;case 27:t===null&&r&4&&$0(n);case 26:case 5:el(e,n),t===null&&r&4&&F0(n),r&512&&ts(n,n.return);break;case 12:el(e,n);break;case 31:el(e,n),r&4&&W0(e,n);break;case 13:el(e,n),r&4&&Z0(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Up.bind(null,n),l2(e,n))));break;case 22:if(r=n.memoizedState!==null||Zr,!r){t=t!==null&&t.memoizedState!==null||Bt,i=Zr;var c=Bt;Zr=r,(Bt=t)&&!c?tl(e,n,(n.subtreeFlags&8772)!==0):el(e,n),Zr=i,Bt=c}break;case 30:break;default:el(e,n)}}function K0(e){var t=e.alternate;t!==null&&(e.alternate=null,K0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&cl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var yt=null,kn=!1;function Jr(e,t,n){for(n=n.child;n!==null;)Q0(e,t,n),n=n.sibling}function Q0(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(Fn,n)}catch{}switch(n.tag){case 26:Bt||Ar(n,t),Jr(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Bt||Ar(n,t);var r=yt,i=kn;Ol(n.type)&&(yt=n.stateNode,kn=!1),Jr(e,t,n),us(n.stateNode),yt=r,kn=i;break;case 5:Bt||Ar(n,t);case 6:if(r=yt,i=kn,yt=null,Jr(e,t,n),yt=r,kn=i,yt!==null)if(kn)try{(yt.nodeType===9?yt.body:yt.nodeName==="HTML"?yt.ownerDocument.body:yt).removeChild(n.stateNode)}catch(c){ot(n,t,c)}else try{yt.removeChild(n.stateNode)}catch(c){ot(n,t,c)}break;case 18:yt!==null&&(kn?(e=yt,I1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ni(e)):I1(yt,n.stateNode));break;case 4:r=yt,i=kn,yt=n.stateNode.containerInfo,kn=!0,Jr(e,t,n),yt=r,kn=i;break;case 0:case 11:case 14:case 15:Ml(2,n,t),Bt||Ml(4,n,t),Jr(e,t,n);break;case 1:Bt||(Ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"&&P0(n,t,r)),Jr(e,t,n);break;case 21:Jr(e,t,n);break;case 22:Bt=(r=Bt)||n.memoizedState!==null,Jr(e,t,n),Bt=r;break;default:Jr(e,t,n)}}function W0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ni(e)}catch(n){ot(t,t.return,n)}}}function Z0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ni(e)}catch(n){ot(t,t.return,n)}}function Rp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Y0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Y0),t;default:throw Error(s(435,e.tag))}}function Do(e,t){var n=Rp(e);t.forEach(function(r){if(!n.has(r)){n.add(r);var i=qp.bind(null,e,r);r.then(i,i)}})}function Sn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],c=e,p=t,y=p;e:for(;y!==null;){switch(y.tag){case 27:if(Ol(y.type)){yt=y.stateNode,kn=!1;break e}break;case 5:yt=y.stateNode,kn=!1;break e;case 3:case 4:yt=y.stateNode.containerInfo,kn=!0;break e}y=y.return}if(yt===null)throw Error(s(160));Q0(c,p,i),yt=null,kn=!1,c=i.alternate,c!==null&&(c.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)J0(t,e),t=t.sibling}var hr=null;function J0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Sn(t,e),En(e),r&4&&(Ml(3,e,e.return),es(3,e),Ml(5,e,e.return));break;case 1:Sn(t,e),En(e),r&512&&(Bt||n===null||Ar(n,n.return)),r&64&&Zr&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=hr;if(Sn(t,e),En(e),r&512&&(Bt||n===null||Ar(n,n.return)),r&4){var c=n!==null?n.memoizedState:null;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){e:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(r){case"title":c=i.getElementsByTagName("title")[0],(!c||c[kr]||c[kt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=i.createElement(r),i.head.insertBefore(c,i.querySelector("head > title"))),Wt(c,r,n),c[kt]=e,bt(c),r=c;break e;case"link":var p=J1("link","href",i).get(r+(n.href||""));if(p){for(var y=0;y<p.length;y++)if(c=p[y],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(y,1);break t}}c=i.createElement(r),Wt(c,r,n),i.head.appendChild(c);break;case"meta":if(p=J1("meta","content",i).get(r+(n.content||""))){for(y=0;y<p.length;y++)if(c=p[y],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(y,1);break t}}c=i.createElement(r),Wt(c,r,n),i.head.appendChild(c);break;default:throw Error(s(468,r))}c[kt]=e,bt(c),r=c}e.stateNode=r}else em(i,e.type,e.stateNode);else e.stateNode=Z1(i,r,e.memoizedProps);else c!==r?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,r===null?em(i,e.type,e.stateNode):Z1(i,r,e.memoizedProps)):r===null&&e.stateNode!==null&&zu(e,e.memoizedProps,n.memoizedProps)}break;case 27:Sn(t,e),En(e),r&512&&(Bt||n===null||Ar(n,n.return)),n!==null&&r&4&&zu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Sn(t,e),En(e),r&512&&(Bt||n===null||Ar(n,n.return)),e.flags&32){i=e.stateNode;try{Yt(i,"")}catch(ye){ot(e,e.return,ye)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,zu(e,i,n!==null?n.memoizedProps:i)),r&1024&&(Hu=!0);break;case 6:if(Sn(t,e),En(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(ye){ot(e,e.return,ye)}}break;case 3:if(Ko=null,i=hr,hr=Yo(t.containerInfo),Sn(t,e),hr=i,En(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ni(t.containerInfo)}catch(ye){ot(e,e.return,ye)}Hu&&(Hu=!1,e1(e));break;case 4:r=hr,hr=Yo(e.stateNode.containerInfo),Sn(t,e),En(e),hr=r;break;case 12:Sn(t,e),En(e);break;case 31:Sn(t,e),En(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Do(e,r)));break;case 13:Sn(t,e),En(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Lo=ht()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Do(e,r)));break;case 22:i=e.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,z=Zr,Y=Bt;if(Zr=z||i,Bt=Y||S,Sn(t,e),Bt=Y,Zr=z,En(e),r&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||S||Zr||Bt||ha(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){S=n=t;try{if(c=S.stateNode,i)p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{y=S.stateNode;var K=S.memoizedProps.style,U=K!=null&&K.hasOwnProperty("display")?K.display:null;y.style.display=U==null||typeof U=="boolean"?"":(""+U).trim()}}catch(ye){ot(S,S.return,ye)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=i?"":S.memoizedProps}catch(ye){ot(S,S.return,ye)}}}else if(t.tag===18){if(n===null){S=t;try{var I=S.stateNode;i?P1(I,!0):P1(S.stateNode,!1)}catch(ye){ot(S,S.return,ye)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Do(e,n))));break;case 19:Sn(t,e),En(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Do(e,r)));break;case 30:break;case 21:break;default:Sn(t,e),En(e)}}function En(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(G0(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode,c=Uu(e);Co(e,c,i);break;case 5:var p=n.stateNode;n.flags&32&&(Yt(p,""),n.flags&=-33);var y=Uu(e);Co(e,y,p);break;case 3:case 4:var S=n.stateNode.containerInfo,z=Uu(e);qu(e,z,S);break;default:throw Error(s(161))}}catch(Y){ot(e,e.return,Y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function e1(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;e1(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function el(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)X0(e,t.alternate,t),t=t.sibling}function ha(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ml(4,t,t.return),ha(t);break;case 1:Ar(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&P0(t,t.return,n),ha(t);break;case 27:us(t.stateNode);case 26:case 5:Ar(t,t.return),ha(t);break;case 22:t.memoizedState===null&&ha(t);break;case 30:ha(t);break;default:ha(t)}e=e.sibling}}function tl(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,i=e,c=t,p=c.flags;switch(c.tag){case 0:case 11:case 15:tl(i,c,n),es(4,c);break;case 1:if(tl(i,c,n),r=c,i=r.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(z){ot(r,r.return,z)}if(r=c,i=r.updateQueue,i!==null){var y=r.stateNode;try{var S=i.shared.hiddenCallbacks;if(S!==null)for(i.shared.hiddenCallbacks=null,i=0;i<S.length;i++)Af(S[i],y)}catch(z){ot(r,r.return,z)}}n&&p&64&&I0(c),ts(c,c.return);break;case 27:$0(c);case 26:case 5:tl(i,c,n),n&&r===null&&p&4&&F0(c),ts(c,c.return);break;case 12:tl(i,c,n);break;case 31:tl(i,c,n),n&&p&4&&W0(i,c);break;case 13:tl(i,c,n),n&&p&4&&Z0(i,c);break;case 22:c.memoizedState===null&&tl(i,c,n),ts(c,c.return);break;case 30:break;default:tl(i,c,n)}t=t.sibling}}function Vu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Vi(n))}function Iu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vi(e))}function pr(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)t1(e,t,n,r),t=t.sibling}function t1(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:pr(e,t,n,r),i&2048&&es(9,t);break;case 1:pr(e,t,n,r);break;case 3:pr(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vi(e)));break;case 12:if(i&2048){pr(e,t,n,r),e=t.stateNode;try{var c=t.memoizedProps,p=c.id,y=c.onPostCommit;typeof y=="function"&&y(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){ot(t,t.return,S)}}else pr(e,t,n,r);break;case 31:pr(e,t,n,r);break;case 13:pr(e,t,n,r);break;case 23:break;case 22:c=t.stateNode,p=t.alternate,t.memoizedState!==null?c._visibility&2?pr(e,t,n,r):ns(e,t):c._visibility&2?pr(e,t,n,r):(c._visibility|=2,Ga(e,t,n,r,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Vu(p,t);break;case 24:pr(e,t,n,r),i&2048&&Iu(t.alternate,t);break;default:pr(e,t,n,r)}}function Ga(e,t,n,r,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,p=t,y=n,S=r,z=p.flags;switch(p.tag){case 0:case 11:case 15:Ga(c,p,y,S,i),es(8,p);break;case 23:break;case 22:var Y=p.stateNode;p.memoizedState!==null?Y._visibility&2?Ga(c,p,y,S,i):ns(c,p):(Y._visibility|=2,Ga(c,p,y,S,i)),i&&z&2048&&Vu(p.alternate,p);break;case 24:Ga(c,p,y,S,i),i&&z&2048&&Iu(p.alternate,p);break;default:Ga(c,p,y,S,i)}t=t.sibling}}function ns(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:ns(n,r),i&2048&&Vu(r.alternate,r);break;case 24:ns(n,r),i&2048&&Iu(r.alternate,r);break;default:ns(n,r)}t=t.sibling}}var rs=8192;function $a(e,t,n){if(e.subtreeFlags&rs)for(e=e.child;e!==null;)n1(e,t,n),e=e.sibling}function n1(e,t,n){switch(e.tag){case 26:$a(e,t,n),e.flags&rs&&e.memoizedState!==null&&g2(n,hr,e.memoizedState,e.memoizedProps);break;case 5:$a(e,t,n);break;case 3:case 4:var r=hr;hr=Yo(e.stateNode.containerInfo),$a(e,t,n),hr=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=rs,rs=16777216,$a(e,t,n),rs=r):$a(e,t,n));break;default:$a(e,t,n)}}function r1(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ls(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];It=r,a1(r,e)}r1(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)l1(e),e=e.sibling}function l1(e){switch(e.tag){case 0:case 11:case 15:ls(e),e.flags&2048&&Ml(9,e,e.return);break;case 3:ls(e);break;case 12:ls(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Oo(e)):ls(e);break;default:ls(e)}}function Oo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];It=r,a1(r,e)}r1(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ml(8,t,t.return),Oo(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Oo(t));break;default:Oo(t)}e=e.sibling}}function a1(e,t){for(;It!==null;){var n=It;switch(n.tag){case 0:case 11:case 15:Ml(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Vi(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,It=r;else e:for(n=e;It!==null;){r=It;var i=r.sibling,c=r.return;if(K0(r),r===n){It=null;break e}if(i!==null){i.return=c,It=i;break e}It=c}}}var Ap={getCacheForType:function(e){var t=Kt(Dt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Kt(Dt).controller.signal}},Cp=typeof WeakMap=="function"?WeakMap:Map,lt=0,mt=null,Fe=null,Ye=0,st=0,Un=null,jl=!1,Ya=!1,Pu=!1,nl=0,Nt=0,Nl=0,pa=0,Fu=0,qn=0,Xa=0,as=null,Tn=null,Gu=!1,Lo=0,i1=0,Bo=1/0,zo=null,Rl=null,Ut=0,Al=null,Ka=null,rl=0,$u=0,Yu=null,s1=null,is=0,Xu=null;function Hn(){return(lt&2)!==0&&Ye!==0?Ye&-Ye:N.T!==null?ed():yr()}function o1(){if(qn===0)if((Ye&536870912)===0||Ke){var e=br;br<<=1,(br&3932160)===0&&(br=262144),qn=e}else qn=536870912;return e=Bn.current,e!==null&&(e.flags|=32),qn}function Mn(e,t,n){(e===mt&&(st===2||st===9)||e.cancelPendingCommit!==null)&&(Qa(e,0),Cl(e,Ye,qn,!1)),be(e,n),((lt&2)===0||e!==mt)&&(e===mt&&((lt&2)===0&&(pa|=n),Nt===4&&Cl(e,Ye,qn,!1)),Cr(e))}function c1(e,t,n){if((lt&6)!==0)throw Error(s(327));var r=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Jt(e,t),i=r?Lp(e,t):Qu(e,t,!0),c=r;do{if(i===0){Ya&&!r&&Cl(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!Dp(n)){i=Qu(e,t,!1),c=!1;continue}if(i===2){if(c=t,e.errorRecoveryDisabledLanes&c)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var y=e;i=as;var S=y.current.memoizedState.isDehydrated;if(S&&(Qa(y,p).flags|=256),p=Qu(y,p,!1),p!==2){if(Pu&&!S){y.errorRecoveryDisabledLanes|=c,pa|=c,i=4;break e}c=Tn,Tn=i,c!==null&&(Tn===null?Tn=c:Tn.push.apply(Tn,c))}i=p}if(c=!1,i!==2)continue}}if(i===1){Qa(e,0),Cl(e,t,0,!0);break}e:{switch(r=e,c=i,c){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Cl(r,t,qn,!jl);break e;case 2:Tn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=Lo+300-ht(),10<i)){if(Cl(r,t,qn,!jl),Gt(r,0,!0)!==0)break e;rl=t,r.timeoutHandle=H1(u1.bind(null,r,n,Tn,zo,Gu,t,qn,pa,Xa,jl,c,"Throttled",-0,0),i);break e}u1(r,n,Tn,zo,Gu,t,qn,pa,Xa,jl,c,null,-0,0)}}break}while(!0);Cr(e)}function u1(e,t,n,r,i,c,p,y,S,z,Y,K,U,I){if(e.timeoutHandle=-1,K=t.subtreeFlags,K&8192||(K&16785408)===16785408){K={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:fr},n1(t,c,K);var ye=(c&62914560)===c?Lo-ht():(c&4194048)===c?i1-ht():0;if(ye=_2(K,ye),ye!==null){rl=c,e.cancelPendingCommit=ye(v1.bind(null,e,t,c,n,r,i,p,y,S,Y,K,null,U,I)),Cl(e,c,p,!z);return}}v1(e,t,c,n,r,i,p,y,S)}function Dp(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],c=i.getSnapshot;i=i.value;try{if(!cn(c(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cl(e,t,n,r){t&=~Fu,t&=~pa,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var c=31-Qe(i),p=1<<c;r[c]=-1,i&=~p}n!==0&&on(e,n,t)}function Uo(){return(lt&6)===0?(ss(0),!1):!0}function Ku(){if(Fe!==null){if(st===0)var e=Fe.return;else e=Fe,$r=ia=null,du(e),Ha=null,Pi=0,e=Fe;for(;e!==null;)V0(e.alternate,e),e=e.return;Fe=null}}function Qa(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Jp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),rl=0,Ku(),mt=e,Fe=n=Fr(e.current,null),Ye=t,st=0,Un=null,jl=!1,Ya=Jt(e,t),Pu=!1,Xa=qn=Fu=pa=Nl=Nt=0,Tn=as=null,Gu=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Qe(r),c=1<<i;t|=e[i],r&=~c}return nl=t,Ir(),n}function d1(e,t){Ue=null,N.H=Wi,t===qa||t===mo?(t=Mf(),st=3):t===Jc?(t=Mf(),st=4):st=t===Mu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Un=t,Fe===null&&(Nt=1,Mo(e,Zn(t,e.current)))}function f1(){var e=Bn.current;return e===null?!0:(Ye&4194048)===Ye?nr===null:(Ye&62914560)===Ye||(Ye&536870912)!==0?e===nr:!1}function m1(){var e=N.H;return N.H=Wi,e===null?Wi:e}function h1(){var e=N.A;return N.A=Ap,e}function qo(){Nt=4,jl||(Ye&4194048)!==Ye&&Bn.current!==null||(Ya=!0),(Nl&134217727)===0&&(pa&134217727)===0||mt===null||Cl(mt,Ye,qn,!1)}function Qu(e,t,n){var r=lt;lt|=2;var i=m1(),c=h1();(mt!==e||Ye!==t)&&(zo=null,Qa(e,t)),t=!1;var p=Nt;e:do try{if(st!==0&&Fe!==null){var y=Fe,S=Un;switch(st){case 8:Ku(),p=6;break e;case 3:case 2:case 9:case 6:Bn.current===null&&(t=!0);var z=st;if(st=0,Un=null,Wa(e,y,S,z),n&&Ya){p=0;break e}break;default:z=st,st=0,Un=null,Wa(e,y,S,z)}}Op(),p=Nt;break}catch(Y){d1(e,Y)}while(!0);return t&&e.shellSuspendCounter++,$r=ia=null,lt=r,N.H=i,N.A=c,Fe===null&&(mt=null,Ye=0,Ir()),p}function Op(){for(;Fe!==null;)p1(Fe)}function Lp(e,t){var n=lt;lt|=2;var r=m1(),i=h1();mt!==e||Ye!==t?(zo=null,Bo=ht()+500,Qa(e,t)):Ya=Jt(e,t);e:do try{if(st!==0&&Fe!==null){t=Fe;var c=Un;t:switch(st){case 1:st=0,Un=null,Wa(e,t,c,1);break;case 2:case 9:if(Ef(c)){st=0,Un=null,g1(t);break}t=function(){st!==2&&st!==9||mt!==e||(st=7),Cr(e)},c.then(t,t);break e;case 3:st=7;break e;case 4:st=5;break e;case 7:Ef(c)?(st=0,Un=null,g1(t)):(st=0,Un=null,Wa(e,t,c,7));break;case 5:var p=null;switch(Fe.tag){case 26:p=Fe.memoizedState;case 5:case 27:var y=Fe;if(p?tm(p):y.stateNode.complete){st=0,Un=null;var S=y.sibling;if(S!==null)Fe=S;else{var z=y.return;z!==null?(Fe=z,Ho(z)):Fe=null}break t}}st=0,Un=null,Wa(e,t,c,5);break;case 6:st=0,Un=null,Wa(e,t,c,6);break;case 8:Ku(),Nt=6;break e;default:throw Error(s(462))}}Bp();break}catch(Y){d1(e,Y)}while(!0);return $r=ia=null,N.H=r,N.A=i,lt=n,Fe!==null?0:(mt=null,Ye=0,Ir(),Nt)}function Bp(){for(;Fe!==null&&!sn();)p1(Fe)}function p1(e){var t=q0(e.alternate,e,nl);e.memoizedProps=e.pendingProps,t===null?Ho(e):Fe=t}function g1(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=D0(n,t,t.pendingProps,t.type,void 0,Ye);break;case 11:t=D0(n,t,t.pendingProps,t.type.render,t.ref,Ye);break;case 5:du(t);default:V0(n,t),t=Fe=hf(t,nl),t=q0(n,t,nl)}e.memoizedProps=e.pendingProps,t===null?Ho(e):Fe=t}function Wa(e,t,n,r){$r=ia=null,du(t),Ha=null,Pi=0;var i=t.return;try{if(Sp(e,i,t,n,Ye)){Nt=1,Mo(e,Zn(n,e.current)),Fe=null;return}}catch(c){if(i!==null)throw Fe=i,c;Nt=1,Mo(e,Zn(n,e.current)),Fe=null;return}t.flags&32768?(Ke||r===1?e=!0:Ya||(Ye&536870912)!==0?e=!1:(jl=e=!0,(r===2||r===9||r===3||r===6)&&(r=Bn.current,r!==null&&r.tag===13&&(r.flags|=16384))),_1(t,e)):Ho(t)}function Ho(e){var t=e;do{if((t.flags&32768)!==0){_1(t,jl);return}e=t.return;var n=Mp(t.alternate,t,nl);if(n!==null){Fe=n;return}if(t=t.sibling,t!==null){Fe=t;return}Fe=t=e}while(t!==null);Nt===0&&(Nt=5)}function _1(e,t){do{var n=jp(e.alternate,e);if(n!==null){n.flags&=32767,Fe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Fe=e;return}Fe=e=n}while(e!==null);Nt=6,Fe=null}function v1(e,t,n,r,i,c,p,y,S){e.cancelPendingCommit=null;do Vo();while(Ut!==0);if((lt&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(c=t.lanes|t.childLanes,c|=Aa,Je(e,n,c,p,y,S),e===mt&&(Fe=mt=null,Ye=0),Ka=t,Al=e,rl=n,$u=c,Yu=i,s1=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Hp(mn,function(){return k1(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=N.T,N.T=null,i=Q.p,Q.p=2,p=lt,lt|=4;try{Np(e,t,n)}finally{lt=p,Q.p=i,N.T=r}}Ut=1,b1(),y1(),w1()}}function b1(){if(Ut===1){Ut=0;var e=Al,t=Ka,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=N.T,N.T=null;var r=Q.p;Q.p=2;var i=lt;lt|=4;try{J0(t,e);var c=od,p=Li(e.containerInfo),y=c.focusedElem,S=c.selectionRange;if(p!==y&&y&&y.ownerDocument&&Oi(y.ownerDocument.documentElement,y)){if(S!==null&&Mr(y)){var z=S.start,Y=S.end;if(Y===void 0&&(Y=z),"selectionStart"in y)y.selectionStart=z,y.selectionEnd=Math.min(Y,y.value.length);else{var K=y.ownerDocument||document,U=K&&K.defaultView||window;if(U.getSelection){var I=U.getSelection(),ye=y.textContent.length,Ne=Math.min(S.start,ye),dt=S.end===void 0?Ne:Math.min(S.end,ye);!I.extend&&Ne>dt&&(p=dt,dt=Ne,Ne=p);var C=Ra(y,Ne),M=Ra(y,dt);if(C&&M&&(I.rangeCount!==1||I.anchorNode!==C.node||I.anchorOffset!==C.offset||I.focusNode!==M.node||I.focusOffset!==M.offset)){var L=K.createRange();L.setStart(C.node,C.offset),I.removeAllRanges(),Ne>dt?(I.addRange(L),I.extend(M.node,M.offset)):(L.setEnd(M.node,M.offset),I.addRange(L))}}}}for(K=[],I=y;I=I.parentNode;)I.nodeType===1&&K.push({element:I,left:I.scrollLeft,top:I.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<K.length;y++){var X=K[y];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}Jo=!!sd,od=sd=null}finally{lt=i,Q.p=r,N.T=n}}e.current=t,Ut=2}}function y1(){if(Ut===2){Ut=0;var e=Al,t=Ka,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=N.T,N.T=null;var r=Q.p;Q.p=2;var i=lt;lt|=4;try{X0(e,t.alternate,t)}finally{lt=i,Q.p=r,N.T=n}}Ut=3}}function w1(){if(Ut===4||Ut===3){Ut=0,Pn();var e=Al,t=Ka,n=rl,r=s1;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ut=5:(Ut=0,Ka=Al=null,x1(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Rl=null),tn(n),t=t.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(Fn,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=N.T,i=Q.p,Q.p=2,N.T=null;try{for(var c=e.onRecoverableError,p=0;p<r.length;p++){var y=r[p];c(y.value,{componentStack:y.stack})}}finally{N.T=t,Q.p=i}}(rl&3)!==0&&Vo(),Cr(e),i=e.pendingLanes,(n&261930)!==0&&(i&42)!==0?e===Xu?is++:(is=0,Xu=e):is=0,ss(0)}}function x1(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Vi(t)))}function Vo(){return b1(),y1(),w1(),k1()}function k1(){if(Ut!==5)return!1;var e=Al,t=$u;$u=0;var n=tn(rl),r=N.T,i=Q.p;try{Q.p=32>n?32:n,N.T=null,n=Yu,Yu=null;var c=Al,p=rl;if(Ut=0,Ka=Al=null,rl=0,(lt&6)!==0)throw Error(s(331));var y=lt;if(lt|=4,l1(c.current),t1(c,c.current,p,n),lt=y,ss(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(Fn,c)}catch{}return!0}finally{Q.p=i,N.T=r,x1(e,t)}}function S1(e,t,n){t=Zn(n,t),t=Tu(e.stateNode,t,2),e=Sl(e,t,2),e!==null&&(be(e,2),Cr(e))}function ot(e,t,n){if(e.tag===3)S1(e,e,n);else for(;t!==null;){if(t.tag===3){S1(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rl===null||!Rl.has(r))){e=Zn(n,e),n=E0(2),r=Sl(t,n,2),r!==null&&(T0(n,r,t,e),be(r,2),Cr(r));break}}t=t.return}}function Wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Cp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Pu=!0,i.add(n),e=zp.bind(null,e,t,n),t.then(e,e))}function zp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,mt===e&&(Ye&n)===n&&(Nt===4||Nt===3&&(Ye&62914560)===Ye&&300>ht()-Lo?(lt&2)===0&&Qa(e,0):Fu|=n,Xa===Ye&&(Xa=0)),Cr(e)}function E1(e,t){t===0&&(t=Ze()),e=jr(e,t),e!==null&&(be(e,t),Cr(e))}function Up(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),E1(e,n)}function qp(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),E1(e,n)}function Hp(e,t){return De(e,t)}var Io=null,Za=null,Zu=!1,Po=!1,Ju=!1,Dl=0;function Cr(e){e!==Za&&e.next===null&&(Za===null?Io=Za=e:Za=Za.next=e),Po=!0,Zu||(Zu=!0,Ip())}function ss(e,t){if(!Ju&&Po){Ju=!0;do for(var n=!1,r=Io;r!==null;){if(e!==0){var i=r.pendingLanes;if(i===0)var c=0;else{var p=r.suspendedLanes,y=r.pingedLanes;c=(1<<31-Qe(42|e)+1)-1,c&=i&~(p&~y),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,N1(r,c))}else c=Ye,c=Gt(r,r===mt?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Jt(r,c)||(n=!0,N1(r,c));r=r.next}while(n);Ju=!1}}function Vp(){T1()}function T1(){Po=Zu=!1;var e=0;Dl!==0&&Zp()&&(e=Dl);for(var t=ht(),n=null,r=Io;r!==null;){var i=r.next,c=M1(r,t);c===0?(r.next=null,n===null?Io=i:n.next=i,i===null&&(Za=n)):(n=r,(e!==0||(c&3)!==0)&&(Po=!0)),r=i}Ut!==0&&Ut!==5||ss(e),Dl!==0&&(Dl=0)}function M1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var p=31-Qe(c),y=1<<p,S=i[p];S===-1?((y&n)===0||(y&r)!==0)&&(i[p]=en(y,t)):S<=t&&(e.expiredLanes|=y),c&=~y}if(t=mt,n=Ye,n=Gt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(st===2||st===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&wt(r),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Jt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&wt(r),tn(n)){case 2:case 8:n=fn;break;case 32:n=mn;break;case 268435456:n=jn;break;default:n=mn}return r=j1.bind(null,e),n=De(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&wt(r),e.callbackPriority=2,e.callbackNode=null,2}function j1(e,t){if(Ut!==0&&Ut!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Vo()&&e.callbackNode!==n)return null;var r=Ye;return r=Gt(e,e===mt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(c1(e,r,t),M1(e,ht()),e.callbackNode!=null&&e.callbackNode===n?j1.bind(null,e):null)}function N1(e,t){if(Vo())return null;c1(e,t,!0)}function Ip(){e2(function(){(lt&6)!==0?De(sl,Vp):T1()})}function ed(){if(Dl===0){var e=za;e===0&&(e=pn,pn<<=1,(pn&261888)===0&&(pn=256)),Dl=e}return Dl}function R1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$(""+e)}function A1(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Pp(e,t,n,r,i){if(t==="submit"&&n&&n.stateNode===i){var c=R1((i[xt]||null).action),p=r.submitter;p&&(t=(t=p[xt]||null)?R1(t.formAction):p.getAttribute("formAction"),t!==null&&(c=t,p=null));var y=new Ql("action","action",null,r,i);e.push({event:y,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Dl!==0){var S=p?A1(i,p):new FormData(i);yu(n,{pending:!0,data:S,method:i.method,action:c},null,S)}}else typeof c=="function"&&(y.preventDefault(),S=p?A1(i,p):new FormData(i),yu(n,{pending:!0,data:S,method:i.method,action:c},c,S))},currentTarget:i}]})}}for(var td=0;td<mr.length;td++){var nd=mr[td],Fp=nd.toLowerCase(),Gp=nd[0].toUpperCase()+nd.slice(1);Rt(Fp,"on"+Gp)}Rt(he,"onAnimationEnd"),Rt(et,"onAnimationIteration"),Rt(Ae,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(rt,"onTransitionRun"),Rt(Mt,"onTransitionStart"),Rt(un,"onTransitionCancel"),Rt(qe,"onTransitionEnd"),vn("onMouseEnter",["mouseout","mouseover"]),vn("onMouseLeave",["mouseout","mouseover"]),vn("onPointerEnter",["pointerout","pointerover"]),vn("onPointerLeave",["pointerout","pointerover"]),Cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Cn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$p=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(os));function C1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var c=void 0;if(t)for(var p=r.length-1;0<=p;p--){var y=r[p],S=y.instance,z=y.currentTarget;if(y=y.listener,S!==c&&i.isPropagationStopped())break e;c=y,i.currentTarget=z;try{c(i)}catch(Y){xn(Y)}i.currentTarget=null,c=S}else for(p=0;p<r.length;p++){if(y=r[p],S=y.instance,z=y.currentTarget,y=y.listener,S!==c&&i.isPropagationStopped())break e;c=y,i.currentTarget=z;try{c(i)}catch(Y){xn(Y)}i.currentTarget=null,c=S}}}}function Ge(e,t){var n=t[ya];n===void 0&&(n=t[ya]=new Set);var r=e+"__bubble";n.has(r)||(D1(t,e,2,!1),n.add(r))}function rd(e,t,n){var r=0;t&&(r|=4),D1(n,e,r,t)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function ld(e){if(!e[Fo]){e[Fo]=!0,$n.forEach(function(n){n!=="selectionchange"&&($p.has(n)||rd(n,!1,e),rd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fo]||(t[Fo]=!0,rd("selectionchange",!1,t))}}function D1(e,t,n,r){switch(om(t)){case 2:var i=y2;break;case 8:i=w2;break;default:i=bd}n=i.bind(null,t,n,e),i=void 0,!Ur||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ad(e,t,n,r,i){var c=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var p=r.tag;if(p===3||p===4){var y=r.stateNode.containerInfo;if(y===i)break;if(p===4)for(p=r.return;p!==null;){var S=p.tag;if((S===3||S===4)&&p.stateNode.containerInfo===i)return;p=p.return}for(;y!==null;){if(p=An(y),p===null)return;if(S=p.tag,S===5||S===6||S===26||S===27){r=c=p;continue e}y=y.parentNode}}r=r.return}St(function(){var z=c,Y=wi(n),K=[];e:{var U=pt.get(e);if(U!==void 0){var I=Ql,ye=e;switch(e){case"keypress":if(Kl(n)===0)break e;case"keydown":case"keyup":I=Nc;break;case"focusin":ye="focus",I=Ta;break;case"focusout":ye="blur",I=Ta;break;case"beforeblur":case"afterblur":I=Ta;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Hs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=Sa;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=ji;break;case he:case et:case Ae:I=Ec;break;case qe:I=Gs;break;case"scroll":case"scrollend":I=Vt;break;case"wheel":I=Ys;break;case"copy":case"cut":case"paste":I=Mc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Mi;break;case"toggle":case"beforetoggle":I=Dc}var Ne=(t&4)!==0,dt=!Ne&&(e==="scroll"||e==="scrollend"),C=Ne?U!==null?U+"Capture":null:U;Ne=[];for(var M=z,L;M!==null;){var X=M;if(L=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||L===null||C===null||(X=fl(M,C),X!=null&&Ne.push(cs(M,X,L))),dt)break;M=M.return}0<Ne.length&&(U=new I(U,ye,null,n,Y),K.push({event:U,listeners:Ne}))}}if((t&7)===0){e:{if(U=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",U&&n!==yi&&(ye=n.relatedTarget||n.fromElement)&&(An(ye)||ye[ft]))break e;if((I||U)&&(U=Y.window===Y?Y:(U=Y.ownerDocument)?U.defaultView||U.parentWindow:window,I?(ye=n.relatedTarget||n.toElement,I=z,ye=ye?An(ye):null,ye!==null&&(dt=h(ye),Ne=ye.tag,ye!==dt||Ne!==5&&Ne!==27&&Ne!==6)&&(ye=null)):(I=null,ye=z),I!==ye)){if(Ne=Hs,X="onMouseLeave",C="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(Ne=Mi,X="onPointerLeave",C="onPointerEnter",M="pointer"),dt=I==null?U:nn(I),L=ye==null?U:nn(ye),U=new Ne(X,M+"leave",I,n,Y),U.target=dt,U.relatedTarget=L,X=null,An(Y)===z&&(Ne=new Ne(C,M+"enter",ye,n,Y),Ne.target=L,Ne.relatedTarget=dt,X=Ne),dt=X,I&&ye)t:{for(Ne=Yp,C=I,M=ye,L=0,X=C;X;X=Ne(X))L++;X=0;for(var Ee=M;Ee;Ee=Ne(Ee))X++;for(;0<L-X;)C=Ne(C),L--;for(;0<X-L;)M=Ne(M),X--;for(;L--;){if(C===M||M!==null&&C===M.alternate){Ne=C;break t}C=Ne(C),M=Ne(M)}Ne=null}else Ne=null;I!==null&&O1(K,U,I,Ne,!1),ye!==null&&dt!==null&&O1(K,dt,ye,Ne,!0)}}e:{if(U=z?nn(z):window,I=U.nodeName&&U.nodeName.toLowerCase(),I==="select"||I==="input"&&U.type==="file")var tt=to;else if(pl(U))if(Ri)tt=Wn;else{tt=qc;var ke=Uc}else I=U.nodeName,!I||I.toLowerCase()!=="input"||U.type!=="checkbox"&&U.type!=="radio"?z&&vi(z.elementType)&&(tt=to):tt=Di;if(tt&&(tt=tt(e,z))){Ni(K,tt,n,Y);break e}ke&&ke(e,U,z),e==="focusout"&&z&&U.type==="number"&&z.memoizedProps.value!=null&&gi(U,"number",U.value)}switch(ke=z?nn(z):window,e){case"focusin":(pl(ke)||ke.contentEditable==="true")&&(Vr=ke,zi=z,ra=null);break;case"focusout":ra=zi=Vr=null;break;case"mousedown":Ui=!0;break;case"contextmenu":case"mouseup":case"dragend":Ui=!1,f(K,n,Y);break;case"selectionchange":if(Bi)break;case"keydown":case"keyup":f(K,n,Y)}var He;if(Jl)e:{switch(e){case"compositionstart":var Xe="onCompositionStart";break e;case"compositionend":Xe="onCompositionEnd";break e;case"compositionupdate":Xe="onCompositionUpdate";break e}Xe=void 0}else hl?Zs(e,n)&&(Xe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Xe="onCompositionStart");Xe&&(Ks&&n.locale!=="ko"&&(hl||Xe!=="onCompositionStart"?Xe==="onCompositionEnd"&&hl&&(He=qs()):(Er=Y,ki="value"in Er?Er.value:Er.textContent,hl=!0)),ke=Go(z,Xe),0<ke.length&&(Xe=new Tt(Xe,e,null,n,Y),K.push({event:Xe,listeners:ke}),He?Xe.data=He:(He=Js(n),He!==null&&(Xe.data=He)))),(He=Oc?Lc(e,n):Bc(e,n))&&(Xe=Go(z,"onBeforeInput"),0<Xe.length&&(ke=new Tt("onBeforeInput","beforeinput",null,n,Y),K.push({event:ke,listeners:Xe}),ke.data=He)),Pp(K,e,z,n,Y)}C1(K,t)})}function cs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Go(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,c=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||c===null||(i=fl(e,n),i!=null&&r.unshift(cs(e,i,c)),i=fl(e,t),i!=null&&r.push(cs(e,i,c))),e.tag===3)return r;e=e.return}return[]}function Yp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function O1(e,t,n,r,i){for(var c=t._reactName,p=[];n!==null&&n!==r;){var y=n,S=y.alternate,z=y.stateNode;if(y=y.tag,S!==null&&S===r)break;y!==5&&y!==26&&y!==27||z===null||(S=z,i?(z=fl(n,c),z!=null&&p.unshift(cs(n,z,S))):i||(z=fl(n,c),z!=null&&p.push(cs(n,z,S)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var Xp=/\r\n?/g,Kp=/\u0000|\uFFFD/g;function L1(e){return(typeof e=="string"?e:""+e).replace(Xp,`
`).replace(Kp,"")}function B1(e,t){return t=L1(t),L1(e)===t}function ut(e,t,n,r,i,c){switch(n){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||Yt(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&Yt(e,""+r);break;case"className":dr(e,"class",r);break;case"tabIndex":dr(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":dr(e,n,r);break;case"style":zs(e,r,c);break;case"data":if(t!=="object"){dr(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=$(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&ut(e,t,"name",i.name,i,null),ut(e,t,"formEncType",i.formEncType,i,null),ut(e,t,"formMethod",i.formMethod,i,null),ut(e,t,"formTarget",i.formTarget,i,null)):(ut(e,t,"encType",i.encType,i,null),ut(e,t,"method",i.method,i,null),ut(e,t,"target",i.target,i,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=$(""+r),e.setAttribute(n,r);break;case"onClick":r!=null&&(e.onclick=fr);break;case"onScroll":r!=null&&Ge("scroll",e);break;case"onScrollEnd":r!=null&&Ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}n=$(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":r===!0?e.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Ge("beforetoggle",e),Ge("toggle",e),ur(e,"popover",r);break;case"xlinkActuate":Yn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Yn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Yn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Yn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Yn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Yn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Yn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Yn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Yn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ur(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Us.get(n)||n,ur(e,n,r))}}function id(e,t,n,r,i,c){switch(n){case"style":zs(e,r,c);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof r=="string"?Yt(e,r):(typeof r=="number"||typeof r=="bigint")&&Yt(e,""+r);break;case"onScroll":r!=null&&Ge("scroll",e);break;case"onScrollEnd":r!=null&&Ge("scrollend",e);break;case"onClick":r!=null&&(e.onclick=fr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Dr.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),c=e[xt]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,i),typeof r=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break e}n in e?e[n]=r:r===!0?e.setAttribute(n,""):ur(e,n,r)}}}function Wt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ge("error",e),Ge("load",e);var r=!1,i=!1,c;for(c in n)if(n.hasOwnProperty(c)){var p=n[c];if(p!=null)switch(c){case"src":r=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ut(e,t,c,p,n,null)}}i&&ut(e,t,"srcSet",n.srcSet,n,null),r&&ut(e,t,"src",n.src,n,null);return;case"input":Ge("invalid",e);var y=c=p=i=null,S=null,z=null;for(r in n)if(n.hasOwnProperty(r)){var Y=n[r];if(Y!=null)switch(r){case"name":i=Y;break;case"type":p=Y;break;case"checked":S=Y;break;case"defaultChecked":z=Y;break;case"value":c=Y;break;case"defaultValue":y=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,t));break;default:ut(e,t,r,Y,n,null)}}Bs(e,c,y,S,z,p,i,!1);return;case"select":Ge("invalid",e),r=p=c=null;for(i in n)if(n.hasOwnProperty(i)&&(y=n[i],y!=null))switch(i){case"value":c=y;break;case"defaultValue":p=y;break;case"multiple":r=y;default:ut(e,t,i,y,n,null)}t=c,n=p,e.multiple=!!r,t!=null?Xn(e,!!r,t,!1):n!=null&&Xn(e,!!r,n,!0);return;case"textarea":Ge("invalid",e),c=i=r=null;for(p in n)if(n.hasOwnProperty(p)&&(y=n[p],y!=null))switch(p){case"value":r=y;break;case"defaultValue":i=y;break;case"children":c=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(s(91));break;default:ut(e,t,p,y,n,null)}ka(e,r,i,c);return;case"option":for(S in n)if(n.hasOwnProperty(S)&&(r=n[S],r!=null))switch(S){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:ut(e,t,S,r,n,null)}return;case"dialog":Ge("beforetoggle",e),Ge("toggle",e),Ge("cancel",e),Ge("close",e);break;case"iframe":case"object":Ge("load",e);break;case"video":case"audio":for(r=0;r<os.length;r++)Ge(os[r],e);break;case"image":Ge("error",e),Ge("load",e);break;case"details":Ge("toggle",e);break;case"embed":case"source":case"link":Ge("error",e),Ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in n)if(n.hasOwnProperty(z)&&(r=n[z],r!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ut(e,t,z,r,n,null)}return;default:if(vi(t)){for(Y in n)n.hasOwnProperty(Y)&&(r=n[Y],r!==void 0&&id(e,t,Y,r,n,void 0));return}}for(y in n)n.hasOwnProperty(y)&&(r=n[y],r!=null&&ut(e,t,y,r,n,null))}function Qp(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,c=null,p=null,y=null,S=null,z=null,Y=null;for(I in n){var K=n[I];if(n.hasOwnProperty(I)&&K!=null)switch(I){case"checked":break;case"value":break;case"defaultValue":S=K;default:r.hasOwnProperty(I)||ut(e,t,I,null,r,K)}}for(var U in r){var I=r[U];if(K=n[U],r.hasOwnProperty(U)&&(I!=null||K!=null))switch(U){case"type":c=I;break;case"name":i=I;break;case"checked":z=I;break;case"defaultChecked":Y=I;break;case"value":p=I;break;case"defaultValue":y=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(s(137,t));break;default:I!==K&&ut(e,t,U,I,r,K)}}pi(e,p,y,S,z,Y,c,i);return;case"select":I=p=y=U=null;for(c in n)if(S=n[c],n.hasOwnProperty(c)&&S!=null)switch(c){case"value":break;case"multiple":I=S;default:r.hasOwnProperty(c)||ut(e,t,c,null,r,S)}for(i in r)if(c=r[i],S=n[i],r.hasOwnProperty(i)&&(c!=null||S!=null))switch(i){case"value":U=c;break;case"defaultValue":y=c;break;case"multiple":p=c;default:c!==S&&ut(e,t,i,c,r,S)}t=y,n=p,r=I,U!=null?Xn(e,!!n,U,!1):!!r!=!!n&&(t!=null?Xn(e,!!n,t,!0):Xn(e,!!n,n?[]:"",!1));return;case"textarea":I=U=null;for(y in n)if(i=n[y],n.hasOwnProperty(y)&&i!=null&&!r.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:ut(e,t,y,null,r,i)}for(p in r)if(i=r[p],c=n[p],r.hasOwnProperty(p)&&(i!=null||c!=null))switch(p){case"value":U=i;break;case"defaultValue":I=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(s(91));break;default:i!==c&&ut(e,t,p,i,r,c)}Br(e,U,I);return;case"option":for(var ye in n)if(U=n[ye],n.hasOwnProperty(ye)&&U!=null&&!r.hasOwnProperty(ye))switch(ye){case"selected":e.selected=!1;break;default:ut(e,t,ye,null,r,U)}for(S in r)if(U=r[S],I=n[S],r.hasOwnProperty(S)&&U!==I&&(U!=null||I!=null))switch(S){case"selected":e.selected=U&&typeof U!="function"&&typeof U!="symbol";break;default:ut(e,t,S,U,r,I)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ne in n)U=n[Ne],n.hasOwnProperty(Ne)&&U!=null&&!r.hasOwnProperty(Ne)&&ut(e,t,Ne,null,r,U);for(z in r)if(U=r[z],I=n[z],r.hasOwnProperty(z)&&U!==I&&(U!=null||I!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(s(137,t));break;default:ut(e,t,z,U,r,I)}return;default:if(vi(t)){for(var dt in n)U=n[dt],n.hasOwnProperty(dt)&&U!==void 0&&!r.hasOwnProperty(dt)&&id(e,t,dt,void 0,r,U);for(Y in r)U=r[Y],I=n[Y],!r.hasOwnProperty(Y)||U===I||U===void 0&&I===void 0||id(e,t,Y,U,r,I);return}}for(var C in n)U=n[C],n.hasOwnProperty(C)&&U!=null&&!r.hasOwnProperty(C)&&ut(e,t,C,null,r,U);for(K in r)U=r[K],I=n[K],!r.hasOwnProperty(K)||U===I||U==null&&I==null||ut(e,t,K,U,r,I)}function z1(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Wp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var i=n[r],c=i.transferSize,p=i.initiatorType,y=i.duration;if(c&&y&&z1(p)){for(p=0,y=i.responseEnd,r+=1;r<n.length;r++){var S=n[r],z=S.startTime;if(z>y)break;var Y=S.transferSize,K=S.initiatorType;Y&&z1(K)&&(S=S.responseEnd,p+=Y*(S<y?1:(y-z)/(S-z)))}if(--r,t+=8*(c+p)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var sd=null,od=null;function $o(e){return e.nodeType===9?e:e.ownerDocument}function U1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function q1(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function cd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ud=null;function Zp(){var e=window.event;return e&&e.type==="popstate"?e===ud?!1:(ud=e,!0):(ud=null,!1)}var H1=typeof setTimeout=="function"?setTimeout:void 0,Jp=typeof clearTimeout=="function"?clearTimeout:void 0,V1=typeof Promise=="function"?Promise:void 0,e2=typeof queueMicrotask=="function"?queueMicrotask:typeof V1<"u"?function(e){return V1.resolve(null).then(e).catch(t2)}:H1;function t2(e){setTimeout(function(){throw e})}function Ol(e){return e==="head"}function I1(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"||n==="/&"){if(r===0){e.removeChild(i),ni(t);return}r--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")r++;else if(n==="html")us(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,us(n);for(var c=n.firstChild;c;){var p=c.nextSibling,y=c.nodeName;c[kr]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=p}}else n==="body"&&us(e.ownerDocument.body);n=i}while(n);ni(t)}function P1(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=r}while(n)}function dd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":dd(n),cl(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function n2(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[kr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=rr(e.nextSibling),e===null)break}return null}function r2(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=rr(e.nextSibling),e===null))return null;return e}function F1(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=rr(e.nextSibling),e===null))return null;return e}function fd(e){return e.data==="$?"||e.data==="$~"}function md(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function l2(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function rr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var hd=null;function G1(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return rr(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function $1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Y1(e,t,n){switch(t=$o(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function us(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);cl(e)}var lr=new Map,X1=new Set;function Yo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ll=Q.d;Q.d={f:a2,r:i2,D:s2,C:o2,L:c2,m:u2,X:f2,S:d2,M:m2};function a2(){var e=ll.f(),t=Uo();return e||t}function i2(e){var t=or(e);t!==null&&t.tag===5&&t.type==="form"?d0(t):ll.r(e)}var Ja=typeof document>"u"?null:document;function K1(e,t,n){var r=Ja;if(r&&typeof t=="string"&&t){var i=bn(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),X1.has(i)||(X1.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement("link"),Wt(t,"link",e),bt(t),r.head.appendChild(t)))}}function s2(e){ll.D(e),K1("dns-prefetch",e,null)}function o2(e,t){ll.C(e,t),K1("preconnect",e,t)}function c2(e,t,n){ll.L(e,t,n);var r=Ja;if(r&&e&&t){var i='link[rel="preload"][as="'+bn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+bn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+bn(n.imageSizes)+'"]')):i+='[href="'+bn(e)+'"]';var c=i;switch(t){case"style":c=ei(e);break;case"script":c=ti(e)}lr.has(c)||(e=x({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),lr.set(c,e),r.querySelector(i)!==null||t==="style"&&r.querySelector(ds(c))||t==="script"&&r.querySelector(fs(c))||(t=r.createElement("link"),Wt(t,"link",e),bt(t),r.head.appendChild(t)))}}function u2(e,t){ll.m(e,t);var n=Ja;if(n&&e){var r=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+bn(r)+'"][href="'+bn(e)+'"]',c=i;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=ti(e)}if(!lr.has(c)&&(e=x({rel:"modulepreload",href:e},t),lr.set(c,e),n.querySelector(i)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(fs(c)))return}r=n.createElement("link"),Wt(r,"link",e),bt(r),n.head.appendChild(r)}}}function d2(e,t,n){ll.S(e,t,n);var r=Ja;if(r&&e){var i=_n(r).hoistableStyles,c=ei(e);t=t||"default";var p=i.get(c);if(!p){var y={loading:0,preload:null};if(p=r.querySelector(ds(c)))y.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},n),(n=lr.get(c))&&pd(e,n);var S=p=r.createElement("link");bt(S),Wt(S,"link",e),S._p=new Promise(function(z,Y){S.onload=z,S.onerror=Y}),S.addEventListener("load",function(){y.loading|=1}),S.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Xo(p,t,r)}p={type:"stylesheet",instance:p,count:1,state:y},i.set(c,p)}}}function f2(e,t){ll.X(e,t);var n=Ja;if(n&&e){var r=_n(n).hoistableScripts,i=ti(e),c=r.get(i);c||(c=n.querySelector(fs(i)),c||(e=x({src:e,async:!0},t),(t=lr.get(i))&&gd(e,t),c=n.createElement("script"),bt(c),Wt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(i,c))}}function m2(e,t){ll.M(e,t);var n=Ja;if(n&&e){var r=_n(n).hoistableScripts,i=ti(e),c=r.get(i);c||(c=n.querySelector(fs(i)),c||(e=x({src:e,async:!0,type:"module"},t),(t=lr.get(i))&&gd(e,t),c=n.createElement("script"),bt(c),Wt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(i,c))}}function Q1(e,t,n,r){var i=(i=fe.current)?Yo(i):null;if(!i)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ei(n.href),n=_n(i).hoistableStyles,r=n.get(t),r||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ei(n.href);var c=_n(i).hoistableStyles,p=c.get(e);if(p||(i=i.ownerDocument||i,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,p),(c=i.querySelector(ds(e)))&&!c._p&&(p.instance=c,p.state.loading=5),lr.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},lr.set(e,n),c||h2(i,e,n,p.state))),t&&r===null)throw Error(s(528,""));return p}if(t&&r!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ti(n),n=_n(i).hoistableScripts,r=n.get(t),r||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ei(e){return'href="'+bn(e)+'"'}function ds(e){return'link[rel="stylesheet"]['+e+"]"}function W1(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function h2(e,t,n,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),Wt(t,"link",n),bt(t),e.head.appendChild(t))}function ti(e){return'[src="'+bn(e)+'"]'}function fs(e){return"script[async]"+e}function Z1(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+bn(n.href)+'"]');if(r)return t.instance=r,bt(r),r;var i=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),bt(r),Wt(r,"style",i),Xo(r,n.precedence,e),t.instance=r;case"stylesheet":i=ei(n.href);var c=e.querySelector(ds(i));if(c)return t.state.loading|=4,t.instance=c,bt(c),c;r=W1(n),(i=lr.get(i))&&pd(r,i),c=(e.ownerDocument||e).createElement("link"),bt(c);var p=c;return p._p=new Promise(function(y,S){p.onload=y,p.onerror=S}),Wt(c,"link",r),t.state.loading|=4,Xo(c,n.precedence,e),t.instance=c;case"script":return c=ti(n.src),(i=e.querySelector(fs(c)))?(t.instance=i,bt(i),i):(r=n,(i=lr.get(c))&&(r=x({},n),gd(r,i)),e=e.ownerDocument||e,i=e.createElement("script"),bt(i),Wt(i,"link",r),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,Xo(r,n.precedence,e));return t.instance}function Xo(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=r.length?r[r.length-1]:null,c=i,p=0;p<r.length;p++){var y=r[p];if(y.dataset.precedence===t)c=y;else if(c!==i)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function pd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function gd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ko=null;function J1(e,t,n){if(Ko===null){var r=new Map,i=Ko=new Map;i.set(n,r)}else i=Ko,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var c=n[i];if(!(c[kr]||c[kt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(t)||"";p=e+p;var y=r.get(p);y?y.push(c):r.set(p,[c])}}return r}function em(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function p2(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function tm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function g2(e,t,n,r){if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var i=ei(r.href),c=t.querySelector(ds(i));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Qo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,bt(c);return}c=t.ownerDocument||t,r=W1(r),(i=lr.get(i))&&pd(r,i),c=c.createElement("link"),bt(c);var p=c;p._p=new Promise(function(y,S){p.onload=y,p.onerror=S}),Wt(c,"link",r),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Qo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var _d=0;function _2(e,t){return e.stylesheets&&e.count===0&&Zo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Zo(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&_d===0&&(_d=62500*Wp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zo(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>_d?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Qo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wo=null;function Zo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wo=new Map,t.forEach(v2,e),Wo=null,Qo.call(e))}function v2(e,t){if(!(t.state.loading&4)){var n=Wo.get(e);if(n)var r=n.get(null);else{n=new Map,Wo.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<i.length;c++){var p=i[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),r=p)}r&&n.set(null,r)}i=t.instance,p=i.getAttribute("data-precedence"),c=n.get(p)||r,c===r&&n.set(null,i),n.set(p,i),this.count++,r=Qo.bind(this),i.addEventListener("load",r),i.addEventListener("error",r),c?c.parentNode.insertBefore(i,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ms={$$typeof:re,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function b2(e,t,n,r,i,c,p,y,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ee(0),this.hiddenUpdates=ee(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function nm(e,t,n,r,i,c,p,y,S,z,Y,K){return e=new b2(e,t,n,p,S,z,Y,K,y),t=1,c===!0&&(t|=24),c=Ln(3,null,null,t),e.current=c,c.stateNode=e,t=Qc(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:r,isDehydrated:n,cache:t},eu(c),e}function rm(e){return e?(e=Ca,e):Ca}function lm(e,t,n,r,i,c){i=rm(i),r.context===null?r.context=i:r.pendingContext=i,r=kl(t),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Sl(e,r,t),n!==null&&(Mn(n,e,t),Gi(n,e,t))}function am(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vd(e,t){am(e,t),(e=e.alternate)&&am(e,t)}function im(e){if(e.tag===13||e.tag===31){var t=jr(e,67108864);t!==null&&Mn(t,e,67108864),vd(e,67108864)}}function sm(e){if(e.tag===13||e.tag===31){var t=Hn();t=Gn(t);var n=jr(e,t);n!==null&&Mn(n,e,t),vd(e,t)}}var Jo=!0;function y2(e,t,n,r){var i=N.T;N.T=null;var c=Q.p;try{Q.p=2,bd(e,t,n,r)}finally{Q.p=c,N.T=i}}function w2(e,t,n,r){var i=N.T;N.T=null;var c=Q.p;try{Q.p=8,bd(e,t,n,r)}finally{Q.p=c,N.T=i}}function bd(e,t,n,r){if(Jo){var i=yd(r);if(i===null)ad(e,t,r,ec,n),cm(e,r);else if(k2(i,e,t,n,r))r.stopPropagation();else if(cm(e,r),t&4&&-1<x2.indexOf(e)){for(;i!==null;){var c=or(i);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=Ft(c.pendingLanes);if(p!==0){var y=c;for(y.pendingLanes|=2,y.entangledLanes|=2;p;){var S=1<<31-Qe(p);y.entanglements[1]|=S,p&=~S}Cr(c),(lt&6)===0&&(Bo=ht()+500,ss(0))}}break;case 31:case 13:y=jr(c,2),y!==null&&Mn(y,c,2),Uo(),vd(c,2)}if(c=yd(r),c===null&&ad(e,t,r,ec,n),c===i)break;i=c}i!==null&&r.stopPropagation()}else ad(e,t,r,null,n)}}function yd(e){return e=wi(e),wd(e)}var ec=null;function wd(e){if(ec=null,e=An(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=g(t),e!==null)return e;e=null}else if(n===31){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ec=e,null}function om(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_r()){case sl:return 2;case fn:return 8;case mn:case hn:return 32;case jn:return 268435456;default:return 32}default:return 32}}var xd=!1,Ll=null,Bl=null,zl=null,hs=new Map,ps=new Map,Ul=[],x2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cm(e,t){switch(e){case"focusin":case"focusout":Ll=null;break;case"dragenter":case"dragleave":Bl=null;break;case"mouseover":case"mouseout":zl=null;break;case"pointerover":case"pointerout":hs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ps.delete(t.pointerId)}}function gs(e,t,n,r,i,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:c,targetContainers:[i]},t!==null&&(t=or(t),t!==null&&im(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function k2(e,t,n,r,i){switch(t){case"focusin":return Ll=gs(Ll,e,t,n,r,i),!0;case"dragenter":return Bl=gs(Bl,e,t,n,r,i),!0;case"mouseover":return zl=gs(zl,e,t,n,r,i),!0;case"pointerover":var c=i.pointerId;return hs.set(c,gs(hs.get(c)||null,e,t,n,r,i)),!0;case"gotpointercapture":return c=i.pointerId,ps.set(c,gs(ps.get(c)||null,e,t,n,r,i)),!0}return!1}function um(e){var t=An(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=g(n),t!==null){e.blockedOn=t,ol(e.priority,function(){sm(n)});return}}else if(t===31){if(t=m(n),t!==null){e.blockedOn=t,ol(e.priority,function(){sm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yd(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yi=r,n.target.dispatchEvent(r),yi=null}else return t=or(n),t!==null&&im(t),e.blockedOn=n,!1;t.shift()}return!0}function dm(e,t,n){tc(e)&&n.delete(t)}function S2(){xd=!1,Ll!==null&&tc(Ll)&&(Ll=null),Bl!==null&&tc(Bl)&&(Bl=null),zl!==null&&tc(zl)&&(zl=null),hs.forEach(dm),ps.forEach(dm)}function nc(e,t){e.blockedOn===t&&(e.blockedOn=null,xd||(xd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,S2)))}var rc=null;function fm(e){rc!==e&&(rc=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){rc===e&&(rc=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!="function"){if(wd(r||n)===null)continue;break}var c=or(n);c!==null&&(e.splice(t,3),t-=3,yu(c,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function ni(e){function t(S){return nc(S,e)}Ll!==null&&nc(Ll,e),Bl!==null&&nc(Bl,e),zl!==null&&nc(zl,e),hs.forEach(t),ps.forEach(t);for(var n=0;n<Ul.length;n++){var r=Ul[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ul.length&&(n=Ul[0],n.blockedOn===null);)um(n),n.blockedOn===null&&Ul.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],c=n[r+1],p=i[xt]||null;if(typeof c=="function")p||fm(n);else if(p){var y=null;if(c&&c.hasAttribute("formAction")){if(i=c,p=c[xt]||null)y=p.formAction;else if(wd(i)!==null)continue}else y=p.action;typeof y=="function"?n[r+1]=y:(n.splice(r,3),r-=3),fm(n)}}}function mm(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return i=p})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function kd(e){this._internalRoot=e}lc.prototype.render=kd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,r=Hn();lm(n,r,e,t,null,null)},lc.prototype.unmount=kd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lm(e.current,2,null,e,null,null),Uo(),t[ft]=null}};function lc(e){this._internalRoot=e}lc.prototype.unstable_scheduleHydration=function(e){if(e){var t=yr();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ul.length&&t!==0&&t<Ul[n].priority;n++);Ul.splice(n,0,e),n===0&&um(e)}};var hm=l.version;if(hm!=="19.2.7")throw Error(s(527,hm,"19.2.7"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=b(t),e=e!==null?k(e):null,e=e===null?null:e.stateNode,e};var E2={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{Fn=ac.inject(E2),it=ac}catch{}}return vs.createRoot=function(e,t){if(!d(e))throw Error(s(299));var n=!1,r="",i=w0,c=x0,p=k0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError)),t=nm(e,1,!1,null,null,n,r,null,i,c,p,mm),e[ft]=t.current,ld(e),new kd(t)},vs.hydrateRoot=function(e,t,n){if(!d(e))throw Error(s(299));var r=!1,i="",c=w0,p=x0,y=k0,S=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.formState!==void 0&&(S=n.formState)),t=nm(e,1,!0,t,n??null,r,i,S,c,p,y,mm),t.context=rm(null),n=t.current,r=Hn(),r=Gn(r),i=kl(r),i.callback=null,Sl(n,i,r),n=r,t.current.lanes=n,be(t,n),Cr(t),e[ft]=t.current,ld(e),new lc(t)},vs.version="19.2.7",vs}var Sm;function B2(){if(Sm)return Td.exports;Sm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),Td.exports=L2(),Td.exports}var z2=B2();const U2=jh(z2),Em=a=>{let l;const o=new Set,s=(b,k)=>{const x=typeof b=="function"?b(l):b;if(!Object.is(x,l)){const E=l;l=k??(typeof x!="object"||x===null)?x:Object.assign({},l,x),o.forEach(D=>D(l,E))}},d=()=>l,m={setState:s,getState:d,getInitialState:()=>_,subscribe:b=>(o.add(b),()=>o.delete(b))},_=l=a(s,d,m);return m},q2=(a=>a?Em(a):Em),H2=a=>a;function V2(a,l=H2){const o=Ts.useSyncExternalStore(a.subscribe,Ts.useCallback(()=>l(a.getState()),[a,l]),Ts.useCallback(()=>l(a.getInitialState()),[a,l]));return Ts.useDebugValue(o),o}const Tm=a=>{const l=q2(a),o=s=>V2(l,s);return Object.assign(o,l),o},I2=(a=>a?Tm(a):Tm);function P2(){const a=new Uint8Array(16);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(a);else for(let o=0;o<a.length;o+=1)a[o]=Math.floor(Math.random()*256);let l="";for(const o of a)l+=o.toString(16).padStart(2,"0");return l}const lf="pkp.user",af="pkp.savedDevices",sf="pkp.ideDrafts",of="pkp.ideSettings",As="Prototype Version 0.6.7";function wc(a){try{const l=localStorage.getItem(a);return l?JSON.parse(l):null}catch{return null}}function xc(a,l){try{localStorage.setItem(a,JSON.stringify(l))}catch{}}function F2(){const a=wc(lf);return a&&typeof a.username=="string"&&typeof a.userID=="string"?a:null}function Rd(a){xc(lf,a)}function gc(){return G2(wc(af)??[])}function Rh(a,l){return a.deviceID===l.deviceID?!0:!!a.ownerID&&a.ownerID===l.ownerID&&!!a.deviceName&&!!l.deviceName&&a.deviceName.toLowerCase()===l.deviceName.toLowerCase()}function G2(a){const l=[];for(const o of a){const s=l.findIndex(d=>Rh(d,o));s>=0?l[s]=o:l.push(o)}return l}function ii(a){xc(af,a)}function $2(){ii([])}function Y2(){try{localStorage.removeItem(lf),localStorage.removeItem(af),localStorage.removeItem(sf),localStorage.removeItem(of)}catch{}}function ic(){var a;return((a=wc(sf))==null?void 0:a.filter(l=>l.path&&typeof l.content=="string"))??[]}function bs(a){xc(sf,a)}function Mm(){const a=wc(of)??{};return{clearTerminalOnRun:!!a.clearTerminalOnRun,simplifiedErrors:a.simplifiedErrors!==!1}}function X2(a){xc(of,a)}function Ad(a){const l=gc().filter(o=>!Rh(o,a));return l.push(a),ii(l),l}function K2(a){const l=gc().filter(o=>o.deviceID!==a);return ii(l),l}const dc="b8e06067-62ad-41ba-9231-206ae80ab551",Q2="f897177b-aee8-4767-8ecc-cc694fd5fce0",W2="f897177b-aee8-4767-8ecc-cc694fd5fce1",Cd=20,Z2=12,J2=new TextEncoder;function eg(a){return new Promise(l=>setTimeout(l,a))}function kc(){return typeof navigator<"u"&&"bluetooth"in navigator}function Ah(a){return a?a.startsWith("PicoW-")?a.slice(6):a:"Pico"}async function tg(a){if(!kc())throw new Error("Web Bluetooth er ikke tilgængelig i denne browser.");const l=a?[{services:[dc],name:`PicoW-${a}`}]:[{services:[dc]},{namePrefix:"PicoW-"}];return navigator.bluetooth.requestDevice({filters:l,optionalServices:[dc]})}async function Ch(){if(!kc()||!navigator.bluetooth.getDevices)return[];try{return await navigator.bluetooth.getDevices()}catch{return[]}}class ng{constructor(){we(this,"device",null);we(this,"writeChar",null);we(this,"notifyChar",null);we(this,"buffer","");we(this,"decoder",new TextDecoder);we(this,"writeQueue",Promise.resolve());we(this,"disconnectNotified",!1);we(this,"onLine",()=>{});we(this,"onDisconnect",()=>{});we(this,"handleNotification",l=>{const o=l.target;if(!(o!=null&&o.value))return;this.buffer+=this.decoder.decode(o.value.buffer,{stream:!0});let s=this.buffer.indexOf(`
`);for(;s>=0;){const d=this.buffer.slice(0,s).trim();this.buffer=this.buffer.slice(s+1),d&&this.onLine(d),s=this.buffer.indexOf(`
`)}});we(this,"handleDisconnected",()=>{var l;this.disconnectNotified||(this.disconnectNotified=!0,(l=this.device)==null||l.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.writeChar=null,this.notifyChar=null,this.onDisconnect())})}get connected(){var l,o;return!!((o=(l=this.device)==null?void 0:l.gatt)!=null&&o.connected)}async connect(l){var d;this.device&&this.device!==l&&this.device.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.device=l,this.buffer="",this.decoder=new TextDecoder,this.disconnectNotified=!1,l.removeEventListener("gattserverdisconnected",this.handleDisconnected),l.addEventListener("gattserverdisconnected",this.handleDisconnected);const o=await((d=l.gatt)==null?void 0:d.connect());if(!o)throw new Error("Kunne ikke åbne Bluetooth-forbindelsen.");const s=await o.getPrimaryService(dc);this.writeChar=await s.getCharacteristic(Q2),this.notifyChar=await s.getCharacteristic(W2),await this.notifyChar.startNotifications(),this.notifyChar.addEventListener("characteristicvaluechanged",this.handleNotification)}writeLine(l){const o=this.writeQueue.then(()=>this.doWrite(l));return this.writeQueue=o.catch(()=>{}),o}async doWrite(l){if(!this.writeChar)throw new Error("Ingen forbindelse.");const o=J2.encode(`${l}
`),d=this.writeChar.properties.writeWithoutResponse&&typeof this.writeChar.writeValueWithoutResponse=="function"?this.writeChar.writeValueWithoutResponse.bind(this.writeChar):this.writeChar.writeValue.bind(this.writeChar);for(let h=0;h<o.length;h+=Cd){const g=o.slice(h,h+Cd);await d(g),h+Cd<o.length&&await eg(Z2)}}disconnect(){var o;const l=this.device;(o=l==null?void 0:l.gatt)!=null&&o.connected?l.gatt.disconnect():this.handleDisconnected()}}class rg{constructor(l,o){we(this,"send");we(this,"onMessage");we(this,"inActive",!1);we(this,"inExpectedTotal",0);we(this,"inStreamId",0);we(this,"inParts",new Map);we(this,"inProgress",null);we(this,"outPendingLines",null);we(this,"outWaitingAck",!1);we(this,"outStreamId",0);we(this,"outNextStreamId",1);we(this,"outCache",new Map);we(this,"outProgress",null);we(this,"outResolve",null);we(this,"outReject",null);this.send=l,this.onMessage=o}reset(){this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear(),this.inProgress=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outStreamId=0,this.outCache.clear(),this.outProgress=null,this.outResolve=null,this.outReject=null}handleLine(l){var s;if(l.startsWith("prep,")){const d=l.split(","),h=d.length>=2&&/^\d+$/.test(d[1])?parseInt(d[1],10):null,g=d.length>=3&&/^\d+$/.test(d[2])?parseInt(d[2],10):0;h!==null&&h>0&&(this.inActive=!0,this.inExpectedTotal=h,this.inStreamId=g,this.inParts.clear(),this.send(g>0?`ack:prep,${g}`:"ack:prep"));return}if(l==="ack:prep"||l===`ack:prep,${this.outStreamId}`){this.flushOutbound();return}if(l.startsWith("miss,")){const d=l.split(",");if(d.length>=3&&/^\d+$/.test(d[1])&&/^\d+$/.test(d[2])){const h=parseInt(d[1],10),g=parseInt(d[2],10),m=this.outCache.get(g);h===this.outStreamId&&m&&this.send(m)}return}const o=this.parseNumbered(l);if(o){const{idx:d,payload:h}=o;if(!this.inActive){this.onMessage(h);return}this.inParts.has(d)||(this.inParts.set(d,h),(s=this.inProgress)==null||s.call(this,this.inParts.size,this.inExpectedTotal));let g=0;for(let m=1;m<=this.inExpectedTotal;m+=1)if(!this.inParts.has(m)){g=m;break}if(g>0&&this.inStreamId>0&&d>g&&this.send(`miss,${this.inStreamId},${g}`),this.inParts.size>=this.inExpectedTotal){for(let m=1;m<=this.inExpectedTotal;m+=1){const _=this.inParts.get(m);_!==void 0&&this.onMessage(_)}this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear()}return}this.onMessage(l)}setInboundProgress(l){this.inProgress=l}async sendReliable(l,o){if(this.outPendingLines!==null||this.outWaitingAck)throw new Error("Reliable stream is already sending.");const s=l.length===0?[""]:l;this.outPendingLines=[...s],this.outWaitingAck=!0,this.outProgress=o??null,this.outStreamId=this.outNextStreamId,this.outNextStreamId+=1,this.outCache.clear();const d=new Promise((h,g)=>{this.outResolve=h,this.outReject=g});try{await this.send(`prep,${s.length},${this.outStreamId}`)}catch(h){throw this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null,h}await d}async flushOutbound(){var l,o,s,d;if(!this.outWaitingAck||this.outPendingLines===null){this.outWaitingAck=!1,this.outProgress=null,(l=this.outResolve)==null||l.call(this),this.outResolve=null,this.outReject=null;return}try{const h=this.outPendingLines.length;for(let g=0;g<h;g+=1){const m=this.outPendingLines[g],_=`${g+1}-${m}`;this.outCache.set(g+1,_),await this.send(_),(o=this.outProgress)==null||o.call(this,g+1,h,m)}(s=this.outResolve)==null||s.call(this)}catch(h){(d=this.outReject)==null||d.call(this,h)}finally{this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null}}parseNumbered(l){const o=l.indexOf("-");if(o<=0)return null;const s=l.slice(0,o);if(!/^\d+$/.test(s))return null;const d=parseInt(s,10);return d<1?null:{idx:d,payload:l.slice(o+1)}}}const ci=11,Cs=31,lg=2,ag=60,si=4,oi=60;function ig(a,l){return Math.max(14,Math.min(56,Math.min(a,l)*.05))}function Dh(a,l,o=ci,s=Cs){const d=ig(a,l),h=Math.max(1,a-2*d),g=Math.max(1,l-2*d);return{areaW:a,areaH:l,cols:o,rows:s,margin:d,stepX:h/Math.max(1,o-1),stepY:g/Math.max(1,s-1)}}function Oh(a,l){return l.margin+a/2*l.stepX}function Lh(a,l){const o=l.margin+a/2*l.stepY;return l.areaH-o}function Ms(a,l){return a.centerX2===null||a.centerY2===null||a.spanX===null||a.spanY===null?null:{cx:Oh(a.centerX2,l),cy:Lh(a.centerY2,l),width:a.spanX*l.stepX,height:a.spanY*l.stepY}}function sg(a){const l=[];for(let o=0;o<a.cols;o+=1)for(let s=0;s<a.rows;s+=1)l.push({x:a.margin+o*a.stepX,y:a.areaH-(a.margin+s*a.stepY)});return l}function Dd(a,l,o,s,d){const h=(_,b,k,x)=>{const E=b%2,D=x*2;let O=E,F=1/0;for(let H=E;H<=D;H+=2){const P=Math.abs(k(H)-_);P<F&&(F=P,O=H)}return Math.max(b,Math.min(D-b,O))},g=h(a,o,_=>Oh(_,d),d.cols-1),m=h(l,s,_=>Lh(_,d),d.rows-1);return{centerX2:g,centerY2:m}}const _a=6e3,og=15,jm="",_c=[32,64,128,192],cg=_a*10,ug=3500,dg=8e3,fg=2,mg=_a,hg=_a*8;function Od(a){return new Promise(l=>setTimeout(l,a))}function ri(a){if(a!=null&&a.aborted)throw new DOMException("BLE file read cancelled","AbortError")}function pg(a){return a instanceof DOMException&&a.name==="AbortError"}function Hl(a){return a.replace(/[\r\n,]/g," ").trim()}function Nm(a){return a.replace(/[\r\n,]/g,"").trim()}class gg{constructor(l={}){we(this,"transport",new ng);we(this,"stream");we(this,"events");we(this,"waiters",[]);we(this,"collectingLayout",!1);we(this,"layoutBuffer",[]);we(this,"layoutResolve",null);we(this,"collectingLines",!1);we(this,"lineBuffer",[]);we(this,"lineResolve",null);we(this,"lineReject",null);we(this,"lineCollectId",0);we(this,"controlPumpActive",!1);we(this,"pendingButtons",[]);we(this,"pendingSliders",new Map);we(this,"pendingToggles",new Map);we(this,"pendingJoysticks",new Map);we(this,"pendingDpads",[]);we(this,"expectingDisconnect",!1);we(this,"disconnectMessage",null);we(this,"busy",!1);we(this,"fsCapabilities",null);this.events=l,this.stream=new rg(o=>this.transport.writeLine(o),o=>this.onDeviceMessage(o)),this.transport.onLine=o=>this.stream.handleLine(o),this.transport.onDisconnect=()=>this.handleDisconnect()}get device(){return this.transport.device}get deviceName(){var l;return Ah((l=this.transport.device)==null?void 0:l.name)}get connected(){return this.transport.connected}setBusy(l){if(this.busy=l,l){this.pendingButtons=[],this.pendingSliders.clear(),this.pendingToggles.clear(),this.pendingJoysticks.clear(),this.pendingDpads=[];return}this.pumpControls()}log(l,o){var s,d;(d=(s=this.events).onLog)==null||d.call(s,l,o)}progress(l,o){var s,d;(d=(s=this.events).onProgress)==null||d.call(s,l,o)}onDeviceMessage(l){var s,d;if(l==="disconnect"||l==="disconnect_private"){const h=l==="disconnect_private"?"Du blev afbrudt, fordi enheden er privat, og andre brugere ikke må forbinde.":"Enheden afbrød forbindelsen.";this.disconnectMessage=h,this.log("warning",h),this.expectingDisconnect=!0,this.transport.disconnect();return}if(this.collectingLines){if(l==="__END__"){const h=this.lineBuffer;this.lineBuffer=[],this.collectingLines=!1,(s=this.lineResolve)==null||s.call(this,h),this.lineResolve=null;return}this.lineBuffer.push(l);return}if(this.collectingLayout){if(l==="__END__"){const h=this.layoutBuffer;this.layoutBuffer=[],this.collectingLayout=!1,(d=this.layoutResolve)==null||d.call(this,h),this.layoutResolve=null;return}!l.startsWith("ACK")&&!l.startsWith("ERR")&&!l.startsWith("#VERSION")?this.layoutBuffer.push(l):l.startsWith("#VERSION")&&this.layoutBuffer.push(l);return}l.startsWith("ERR")?this.log("error",l):l.startsWith("radar,")?this.handleRadarLine(l):l.startsWith("text,")?this.handleTextLine(l):l.startsWith("toggle_state,")?this.handleToggleStateLine(l):l.startsWith("slider_state,")?this.handleSliderStateLine(l):l.startsWith("plot_clear,")?this.handlePlotClearLine(l):l.startsWith("plot,")?this.handlePlotLine(l):l.startsWith("ACK")||l==="LAYOUT_SAVED"||l.startsWith("READY")?this.log("success",l):this.log("info",`rx: ${l}`);const o=this.waiters.findIndex(h=>h.match(l));if(o>=0){const h=this.waiters[o];this.waiters.splice(o,1),clearTimeout(h.timer),h.resolve(l)}}waitFor(l,o,s){return new Promise((d,h)=>{const g=setTimeout(()=>{const m=this.waiters.findIndex(_=>_.timer===g);m>=0&&this.waiters.splice(m,1),h(new Error(`Timeout: ${s}`))},o);this.waiters.push({match:l,resolve:d,reject:h,timer:g})})}async collectLines(l,o,s,d,h){ri(d);const g=this.lineCollectId+1;this.lineCollectId=g,this.collectingLines=!0,this.lineBuffer=[],this.stream.setInboundProgress(h??null);const m=new Promise((_,b)=>{let k=!1;const x=()=>this.lineCollectId===g,E=()=>{k=!0,x()&&(this.lineReject=null,this.stream.setInboundProgress(null)),d==null||d.removeEventListener("abort",O)},D=P=>{k||(clearTimeout(F),x()&&(this.collectingLines=!1,this.lineBuffer=[],this.lineResolve=null),E(),b(P))},O=()=>{D(new DOMException("BLE file read cancelled","AbortError"))},F=setTimeout(()=>{x()&&D(new Error(`Timeout: ${s}`))},o);this.lineResolve=_,this.lineReject=D;const H=this.lineResolve;this.lineResolve=P=>{x()&&(clearTimeout(F),E(),H==null||H(P))},d==null||d.addEventListener("abort",O,{once:!0})});return await this.transport.writeLine(l),m}async exchange(l,o,s,d=3){let h;for(let g=1;g<=d;g+=1)try{return await this.transport.writeLine(l),await this.waitFor(o,_a,s)}catch(m){h=m,this.log("warning",`${s}: forsøg ${g}/${d} mislykkedes`)}throw h instanceof Error?h:new Error(`Failed: ${s}`)}async connect(l){this.expectingDisconnect=!1,this.stream.reset(),this.progress(5,"Forbinder til Bluetooth..."),await this.transport.connect(l)}async runHandshake(l){var q,oe,ge,te;await Od(350),this.progress(18,"Klargør forbindelse..."),this.progress(26,"Sender HELLO..."),await this.exchange("HELLO",pe=>pe==="ACK:HELLO","HELLO"),this.progress(34,"Forbindelse bekræftet"),this.progress(44,"Spørger om ejerskab...");const o=await this.exchange("who_are_you",pe=>pe==="unowned"||pe.startsWith("unowned,")||pe.startsWith("owned,"),"who_are_you");if(this.progress(56,"Ejerskab modtaget"),o==="unowned"||o.startsWith("unowned,"))return{kind:"unowned",deviceName:((q=o.split(",")[1])==null?void 0:q.trim())||void 0};const s=o.split(","),d=s[1]??"",h=((oe=s[2])==null?void 0:oe.trim())??"",g=s[3]!==void 0?parseInt(s[3],10)===1:!0,m=s[4]!==void 0?parseInt(s[4],10)===1:!1,_=s.length>=7,b=_?parseInt(s[5]??"0",10)===1:m,k=((ge=s[_?6:5])==null?void 0:ge.trim())||void 0,x=((te=s[_?7:6])==null?void 0:te.trim())||void 0;await this.exchange("ACK:ownership",pe=>pe==="READY:permission","ACK:ownership",1),this.progress(66,"Anmoder om adgang...");const E=await this.exchange(`request_permission,${l.userID},${Hl(l.username)}`,pe=>pe.startsWith("perm,"),"request_permission");this.progress(76,"Adgang vurderet");const D=E.split(",").filter(pe=>/^\d+$/.test(pe)),O=D.length>=1?parseInt(D[0]??"0",10):0,F=D.length>=2?parseInt(D[1]??"0",10):0,H=D.length>=3?parseInt(D[2]??"0",10):F;if(O===0)return this.expectingDisconnect=!0,this.disconnectMessage="Du kan ikke forbinde, fordi enheden er privat, og andre brugere ikke må forbinde.",{kind:"denied",ownerName:k,canOthersConnect:g};const P=l.userID===d,B=F===1||P,re=H===1||P;return await this.transport.writeLine("ACK:permission"),{kind:"owned",ownerID:d,ownerName:k,deviceName:x,icon:h,canEdit:B,canEditCode:re,isOwnedByMe:P,canOthersConnect:g,canOthersEdit:m,canOthersEditCode:b}}async create(l,o,s,d,h,g,m){const _=s?1:0,b=s&&d?1:0,k=s&&h?1:0;await this.exchange(`create,${l.userID},${Hl(l.username)},${Nm(o)},${_},${b},${k},${g},${m}`,x=>x==="ACK:create","create")}async updateDeviceSettings(l,o,s,d,h,g,m){const _=o?1:0,b=o&&s?1:0,k=o&&d?1:0;await this.exchange(`settings_update,${Nm(l)},${_},${b},${k},${h},${g},${Hl(m??"")}`,x=>x==="ACK:settings_update","settings_update",3)}async requestLayout(){this.progress(84,"Henter kontrolpanel..."),this.collectingLayout=!0,this.layoutBuffer=[];const l=new Promise((s,d)=>{this.layoutResolve=s;const h=setTimeout(()=>{this.collectingLayout&&(this.collectingLayout=!1,this.layoutResolve=null,d(new Error("Timeout: layout")))},_a*2),g=this.layoutResolve;this.layoutResolve=m=>{clearTimeout(h),g==null||g(m)}});await this.transport.writeLine("request"),this.progress(92,"Modtager kontrolpanel...");const o=await l;return this.progress(100,"Klar"),o}async saveLayout(l){await this.exchange("update",d=>d==="ACK:update","update",3).catch(()=>{this.log("warning","ACK:update udeblev (fortsætter).")});const o=l.map(d=>{const h=m=>m===null?"n":String(m),g=`update,${d.type},${d.name},${h(d.centerX2)},${h(d.centerY2)},${h(d.spanX)},${h(d.spanY)},${d.rotation}`;return d.type==="slider"?`${g},${d.sliderMin??0},${d.sliderMax??100},${d.sliderRecenter??"none"}`:d.type==="toggle"?`${g},${d.toggleInitial?1:0}`:d.type==="radar"?[g,d.radarMinAngle??0,d.radarMaxAngle??180,d.radarMaxDistance??200,d.radarFadeMs??1200].join(","):d.type==="joystick"?[g,d.joystickXMin??-100,d.joystickXMax??100,d.joystickYMin??-100,d.joystickYMax??100,d.joystickXRecenter??"middle",d.joystickYRecenter??"middle"].join(","):d.type==="plot"?[g,d.plotMin??0,d.plotMax??100,d.plotHistory??30,d.plotStyle??"line",d.plotXAxis??"labels",d.plotYAxis??"range",d.plotLabelMaxPercent??24].join(","):g});o.push("__END__");const s=this.waitFor(d=>d==="LAYOUT_SAVED",_a*2,"LAYOUT_SAVED");await this.stream.sendReliable(o),await s}async listFiles(l="/"){return(await this.collectLines(`fs_list,${Hl(l)}`,_a*3,"fs_list")).filter(s=>s.startsWith("fs_entry,")).map(s=>{const[,d,h,g]=s.split(","),m=d==="file"||d==="dir"?d:"unknown",_=parseInt(g??"",10),b=h||"/";return{name:b.split("/").filter(Boolean).pop()??b,path:b,type:m,...Number.isFinite(_)&&_>=0?{size:_}:{}}})}handleRadarLine(l){var g,m,_;const o=l.split(",");if(o.length<4)return;const s=(g=o[1])==null?void 0:g.trim(),d=parseFloat(o[2]??""),h=parseFloat(o[3]??"");!s||!Number.isFinite(d)||!Number.isFinite(h)||((_=(m=this.events).onRadar)==null||_.call(m,s,d,h),this.log("info",`rx: ${l}`))}handleTextLine(l){var _,b;const o=l.indexOf(","),s=o>=0?l.indexOf(",",o+1):-1;if(o<0||s<0)return;const d=l.slice(o+1,s),h=l.slice(s+1),g=d==null?void 0:d.trim();if(!g)return;const m=h.split(jm).join(`
`);(b=(_=this.events).onText)==null||b.call(_,g,m),this.log("info",`rx: ${l}`)}handleToggleStateLine(l){var h,g,m;const o=l.split(",");if(o.length<3)return;const s=(h=o[1])==null?void 0:h.trim(),d=parseInt(o[2]??"",10);!s||!Number.isFinite(d)||((m=(g=this.events).onToggleState)==null||m.call(g,s,d===1),this.log("info",`rx: ${l}`))}handleSliderStateLine(l){var h,g,m;const o=l.split(",");if(o.length<3)return;const s=(h=o[1])==null?void 0:h.trim(),d=parseFloat(o[2]??"");!s||!Number.isFinite(d)||((m=(g=this.events).onSliderState)==null||m.call(g,s,d),this.log("info",`rx: ${l}`))}handlePlotLine(l){var g,m,_;const o=l.split(",");if(o.length<3)return;const s=(g=o[1])==null?void 0:g.trim(),d=parseFloat(o[2]??"");if(!s||!Number.isFinite(d))return;const h=o.slice(3).join(",").split(jm).join(`
`).trim()||void 0;(_=(m=this.events).onPlot)==null||_.call(m,s,d,h),this.log("info",`rx: ${l}`)}handlePlotClearLine(l){var d,h,g;const o=l.split(",");if(o.length<2)return;const s=(d=o[1])==null?void 0:d.trim();s&&((g=(h=this.events).onPlotClear)==null||g.call(h,s),this.log("info",`rx: ${l}`))}async readText(l,o,s){o==null||o(4,"Validerer Picoens Bluetooth-filsystem...");const d=await this.getFilesystemCapabilities(s);return d.pageRead?this.readTextPaged(l,o,s):this.readTextStream(l,d,o,s)}async getFilesystemCapabilities(l){if(this.fsCapabilities)return this.fsCapabilities;const o=await this.collectLines("fs_capabilities",mg,"fs_capabilities",l),s=o.find(k=>k.startsWith("ERR"));if(s)throw new Error(s);const d=o.find(k=>k.startsWith("fs_capabilities,"));if(!d)throw new Error("Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.");const h=d.split(","),g=new Map;for(let k=1;k<h.length-1;k+=2)g.set(h[k],h[k+1]);const m=parseInt(g.get("max_page")??"",10),_=parseInt(g.get("stream_chunk")??"",10),b={version:g.get("version")||void 0,pageRead:g.get("page_read")==="1",maxPageSize:Number.isFinite(m)&&m>0?m:32,streamRead:g.get("stream_read")==="1",streamChunkSize:Number.isFinite(_)&&_>0?_:128};if(!b.pageRead&&!b.streamRead)throw new Error("Picoens Bluetooth-runtime meldte, at file-read ikke er understøttet.");return this.fsCapabilities=b,b}async readTextPaged(l,o,s){const d=await this.getFilesystemCapabilities(s);let h=0,g=_g(d.maxPageSize),m=0,_=null,b="";const k=`Indlæser ${Ld(l)}...`;ri(s),o==null||o(5,k);for(let x=0;x<512;x+=1){ri(s),m===0&&(o==null||o(7,k));const D=await this.readPageWithRetry(l,m,h,g,s),O=D.lines;h=D.nextPageSizeIndex,g=D.maxPageSizeIndex,ri(s);const F=O.find(pe=>pe.startsWith("ERR"));if(F)throw new Error(F);const H=O.find(pe=>pe.startsWith("fs_page,"));if(!H)throw new Error("ERR: fs_read_page missing data");const[,P,B,re,q=""]=H.split(",",5);if(P!==l)throw new Error("ERR: fs_read_page stale data");const oe=parseInt(B??"",10),ge=parseInt(re??"",10);if(!Number.isFinite(oe)||oe!==m||!Number.isFinite(ge))throw new Error("ERR: fs_read_page invalid data");_=ge,b+=q,m+=Math.floor(q.length/2);const te=_>0?8+Math.min(87,Math.round(m/_*87)):95;if(o==null||o(te,k),m>=_||q.length===0)return o==null||o(100,"Fil indlæst fra Pico"),new TextDecoder().decode(Am(b))}throw new Error("ERR: fs_read_page too many pages")}async readPageWithRetry(l,o,s,d,h){let g,m=Math.min(s,d);for(;m>=0;){const _=_c[m],b=m===0?fg:1,k=m===0?dg:ug;for(let x=1;x<=b;x+=1){ri(h);try{return{lines:await this.collectLines(`fs_read_page,${Hl(l)},${o},${_}`,k,`fs_read_page ${o}`,h),nextPageSizeIndex:Math.min(m+1,d),maxPageSizeIndex:d}}catch(E){if(h!=null&&h.aborted||pg(E))throw E;if(g=E,x<b||m>0){const O=m>0&&x>=b?_c[m-1]:_;this.log("warning",`fs_read_page ${o} (${_} bytes) fejlede; prøver ${O} bytes`),await Od(80+x*80)}}}if(m===0)break;d=Math.max(0,m-1),m=d}throw g instanceof Error?g:new Error(`Timeout: fs_read_page ${o}`)}async readTextStream(l,o,s,d){const h=`Indlæser ${Ld(l)}...`,g=Math.max(16,Math.min(192,o.streamChunkSize||128));s==null||s(5,h);const m=await this.collectLines(`fs_read_stream,${Hl(l)},${g}`,hg,`fs_read_stream ${l}`,d,(te,pe)=>{const ve=8+Math.round(Math.min(te,pe)/Math.max(1,pe)*87);s==null||s(Math.min(95,ve),h)});ri(d);const _=m.find(te=>te.startsWith("ERR"));if(_)throw new Error(_);const b=m.find(te=>te.startsWith("fs_stream_begin,")),k=m.find(te=>te.startsWith("fs_stream_end,"));if(!b||!k)throw new Error("ERR: fs_read_stream missing metadata");const[,x,E]=b.split(",",4),[,D,O,F]=k.split(",",4),H=parseInt(E??"",10),P=parseInt(O??"",10),B=parseInt(F??"",10);if(x!==l||D!==l||!Number.isFinite(H)||H!==P||!Number.isFinite(B))throw new Error("ERR: fs_read_stream invalid metadata");let re=0,q="";for(const te of m){if(!te.startsWith("fs_stream_chunk,"))continue;const[,pe,ve=""]=te.split(",",3),Be=parseInt(pe??"",10);if(!Number.isFinite(Be)||Be!==re||ve.length%2!==0)throw new Error("ERR: fs_read_stream invalid chunk");q+=ve,re+=Math.floor(ve.length/2)}if(re!==H)throw new Error("ERR: fs_read_stream size mismatch");const oe=Am(q);if(Rm(oe)!==B)throw new Error("ERR: fs_read_stream checksum mismatch");return s==null||s(100,"Fil indlæst fra Pico"),new TextDecoder().decode(oe)}async writeText(l,o,s){s==null||s(5,"Klargør BLE-overførsel..."),await this.exchange(`fs_write_begin,${Hl(l)}`,k=>k==="ACK:fs_write_begin","fs_write_begin",2),s==null||s(18,"Pico er klar til filen...");const d=new TextEncoder().encode(o),h=[...d].map(k=>k.toString(16).padStart(2,"0")).join(""),g=[];for(let k=0;k<h.length;k+=160)g.push(`fs_write_chunk,${h.slice(k,k+160)}`);g.push("fs_write_end");const m=Rm(d),_=this.waitFor(k=>k==="ACK:fs_write_done"||k.startsWith("ACK:fs_write_done,")||k.startsWith("ERR"),cg,"fs_write_done");s==null||s(d.length===0?85:18,d.length===0?"Sender tom fil via Bluetooth...":`Sender 0/${d.length} bytes via Bluetooth...`),await this.stream.sendReliable(g,(k,x,E)=>{if(!E.startsWith("fs_write_chunk,"))return;const D=Math.min(d.length,k*80),O=18+Math.round(k/Math.max(1,x-1)*67);s==null||s(Math.min(85,O),`Sender ${D}/${d.length} bytes via Bluetooth...`)}),s==null||s(90,"Verificerer BLE-fil...");const b=await _;if(b.startsWith("ERR"))throw new Error(b);if(b.startsWith("ACK:fs_write_done,")){const[,k,x]=b.split(",",3),E=parseInt(k??"",10),D=parseInt(x??"",10);if(E!==d.length||D!==m)throw new Error(`ERR: BLE-verificering fejlede for ${Ld(l)}.`)}s==null||s(100,"Gemt på Pico")}async deleteFile(l){const o=await this.exchange(`fs_delete,${Hl(l)}`,s=>s==="ACK:fs_delete"||s.startsWith("ERR"),"fs_delete",2);if(o.startsWith("ERR"))throw new Error(o)}async restart(){await this.exchange("restart",l=>l==="ACK:restart"||l.startsWith("ERR"),"restart",1).catch(()=>{}),this.expectingDisconnect=!0}enqueueButton(l,o){this.busy||(this.pendingButtons.push(`button,${l}:${o?"down":"up"}`),this.pumpControls())}enqueueSlider(l,o){this.busy||(this.pendingSliders.set(l,`slider,${l}:${o}`),this.pumpControls())}enqueueToggle(l,o){this.busy||(this.pendingToggles.set(l,`toggle,${l}:${o?1:0}`),this.pumpControls())}enqueueJoystick(l,o,s){this.busy||(this.pendingJoysticks.set(l,`joystick,${l}:${Math.round(o)},${Math.round(s)}`),this.pumpControls())}enqueueDpad(l,o,s){this.busy||(this.pendingDpads.push(`dpad,${l}:${o},${s?"down":"up"}`),this.pumpControls())}pumpControls(){this.controlPumpActive||this.busy||!this.transport.connected||(this.controlPumpActive=!0,this.drainControls())}async drainControls(){try{for(;!this.busy&&this.transport.connected;){const l=this.nextControlLine();if(!l)break;await this.transport.writeLine(l),this.log("info",`tx: ${l}`),await Od(og)}}catch(l){this.log("error",l instanceof Error?l.message:"Kunne ikke sende kommando."),this.handleDisconnect()}finally{this.controlPumpActive=!1,!this.busy&&this.transport.connected&&this.hasPendingControls()&&this.pumpControls()}}nextControlLine(){const l=this.pendingButtons.shift();if(l)return l;const o=this.pendingDpads.shift();if(o)return o;const s=this.pendingSliders.entries().next();if(!s.done){const[g,m]=s.value;return this.pendingSliders.delete(g),m}const d=this.pendingToggles.entries().next();if(!d.done){const[g,m]=d.value;return this.pendingToggles.delete(g),m}const h=this.pendingJoysticks.entries().next();if(!h.done){const[g,m]=h.value;return this.pendingJoysticks.delete(g),m}return null}hasPendingControls(){return this.pendingButtons.length>0||this.pendingDpads.length>0||this.pendingSliders.size>0||this.pendingToggles.size>0||this.pendingJoysticks.size>0}async disconnect(){if(!this.transport.connected){this.handleDisconnect();return}this.expectingDisconnect=!0;try{await this.exchange("disconnect",l=>l==="ACK:disconnect","disconnect",1)}catch{}this.transport.disconnect()}handleDisconnect(){var o,s,d;for(const h of this.waiters)clearTimeout(h.timer),h.reject(new Error("Forbindelsen blev afbrudt."));this.waiters=[],this.collectingLayout=!1,this.layoutResolve=null,(o=this.lineReject)==null||o.call(this,new Error("Forbindelsen blev afbrudt.")),this.collectingLines=!1,this.lineResolve=null,this.lineReject=null,this.fsCapabilities=null,this.stream.reset();const l=this.disconnectMessage??void 0;this.disconnectMessage=null,(d=(s=this.events).onDisconnect)==null||d.call(s,l)}}function _g(a){let l=0;for(let o=0;o<_c.length;o+=1)_c[o]<=a&&(l=o);return l}function Ld(a){return a.replace(/\\/g,"/").replace(/^\/+/,"")||a}function Rm(a){let l=0;for(const o of a)l=l+o>>>0;return l}function Am(a){const l=new Uint8Array(Math.floor(a.length/2));for(let o=0;o<l.length;o+=1)l[o]=parseInt(a.slice(o*2,o*2+2),16);return l}function Cm(a){const l=(o,s)=>Number.isFinite(o)?Math.max(lg,Math.min(ag,o)):s;for(const o of a){const s=o.trim();if(s.startsWith("#GRID,")){const d=s.split(","),h=l(parseInt(d[1],10),ci),g=l(parseInt(d[2],10),Cs);return{cols:h,rows:g}}}return{cols:ci,rows:Cs}}function Dm(a){const l=new Map;for(const o of a){const s=o.trim();if(!s||s.startsWith("#VERSION")||s==="__END__")continue;const d=s.split(",");if(d.length<7)continue;const[h,g,m,_,b,k,x,E,D,O,F,H,P,B]=d;if(h!=="button"&&h!=="slider"&&h!=="toggle"&&h!=="radar"&&h!=="text"&&h!=="joystick"&&h!=="dpad"&&h!=="plot"||l.has(g))continue;const re=ae=>{if(ae==="n")return null;const ce=parseInt(ae,10);return Number.isNaN(ce)?null:ce},q=parseInt(x,10)||0,oe=E!==void 0?parseInt(E,10):0,ge=D!==void 0?parseInt(D,10):100,te=["none","bottom","middle","top"].includes(O??"")?O:"none",pe=E!==void 0?parseInt(E,10)===1:!1,ve=E!==void 0?parseFloat(E):0,Be=D!==void 0?parseFloat(D):180,ne=O!==void 0?parseFloat(O):200,Ie=F!==void 0?parseInt(F,10):1200,xe=(ae,ce)=>["none","bottom","middle","top"].includes(ae??"")?ae:ce,$e=E!==void 0?parseInt(E,10):-100,Z=D!==void 0?parseInt(D,10):100,N=O!==void 0?parseInt(O,10):-100,Q=F!==void 0?parseInt(F,10):100,de=E!==void 0?parseFloat(E):0,Re=D!==void 0?parseFloat(D):100,_e=O!==void 0?parseInt(O,10):30,T=F==="bar"?"bar":F==="dot"?"dot":"line",G=(ae,ce)=>["range","labels","none"].includes(ae??"")?ae:ce,le=B!==void 0?parseFloat(B):24;l.set(g,{type:h,name:g,centerX2:re(m),centerY2:re(_),spanX:re(b),spanY:re(k),rotation:[0,90,180,270].includes(q)?q:0,...h==="slider"?{sliderMin:Number.isFinite(oe)?oe:0,sliderMax:Number.isFinite(ge)?ge:100,sliderRecenter:te}:{},...h==="toggle"?{toggleInitial:pe}:{},...h==="radar"?{radarMinAngle:Number.isFinite(ve)?ve:0,radarMaxAngle:Number.isFinite(Be)?Be:180,radarMaxDistance:Number.isFinite(ne)&&ne>0?ne:200,radarFadeMs:Number.isFinite(Ie)&&Ie>0?Ie:1200}:{},...h==="joystick"?{joystickXMin:Number.isFinite($e)?$e:-100,joystickXMax:Number.isFinite(Z)&&Z!==$e?Z:100,joystickYMin:Number.isFinite(N)?N:-100,joystickYMax:Number.isFinite(Q)&&Q!==N?Q:100,joystickXRecenter:xe(H,"middle"),joystickYRecenter:xe(P,"middle")}:{},...h==="plot"?{plotMin:Number.isFinite(de)?de:0,plotMax:Number.isFinite(Re)&&Re!==de?Re:de+100,plotHistory:Number.isFinite(_e)&&_e>1?_e:30,plotStyle:T,plotXAxis:G(H,"labels"),plotYAxis:G(P,"range"),plotLabelMaxPercent:Number.isFinite(le)?Math.max(8,Math.min(45,le)):24}:{}})}return[...l.values()]}const vg=[{slug:"grommet-icons:raspberry",label:"Raspberry Pi",keywords:["raspberry pi","raspberry"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M8.087 0a.67.67 0 0 0-.399.165c-.363-.14-.717-.19-1.032.096c-.486-.063-.643.067-.762.22c-.107-.003-.8-.11-1.117.364c-.798-.095-1.049.47-.763.994c-.163.253-.332.5.048.981c-.134.268-.05.558.267.91c-.084.376.081.641.376.848c-.055.515.472.815.629.922c.06.3.187.584.79.74c.099.447.46.525.811.619c-1.159.673-2.153 1.558-2.146 3.733l-.17.303c-1.328.808-2.524 3.406-.654 5.518c.122.66.326 1.134.508 1.66c.273 2.117 2.054 3.11 2.523 3.227c.688.524 1.422 1.02 2.413 1.369c.935.964 1.946 1.331 3.005 1.331s2.07-.367 3.005-1.331c.992-.348 1.725-.845 2.413-1.37c.47-.117 2.25-1.11 2.523-3.226c.182-.526.386-1 .508-1.66c1.87-2.112.674-4.71-.655-5.518l-.169-.303c.007-2.175-.987-3.06-2.146-3.733c.35-.094.712-.172.812-.619c.602-.156.729-.44.79-.74c.157-.107.683-.407.628-.922c.295-.207.46-.472.376-.848c.318-.352.402-.642.267-.91c.38-.48.212-.728.049-.98c.285-.526.034-1.09-.763-.995c-.318-.474-1.01-.367-1.117-.365c-.12-.152-.277-.282-.763-.22c-.315-.284-.669-.235-1.032-.095A.67.67 0 0 0 16.742 0c-.232-.007-.43.134-.643.202c-.523-.17-.641.061-.898.156c-.569-.12-.742.143-1.015.42l-.32-.007c-.858.506-1.282 1.535-1.452 1.535S11.82 1.277 10.961.771l-.319.006C10.37.501 10.196.238 9.627.358C9.37.263 9.252.031 8.73.202C8.516.134 8.318-.007 8.087 0m.03.609c.436.161.663.37.9.575c.08-.108.202-.188.052-.45c.31.18.544.39.717.625c.191-.122.112-.287.113-.441c.322.262.528.54.778.812c.05-.037.093-.162.132-.358c.768.744 1.852 2.62.279 3.365C9.749 3.633 8.15 2.83 6.38 2.228c2.277 1.174 3.602 2.123 4.327 2.932c-.371 1.49-2.31 1.56-3.019 1.518c.145-.068.266-.15.31-.275c-.179-.127-.81-.013-1.25-.26c.17-.036.249-.069.328-.194c-.416-.132-.864-.248-1.128-.468c.143.002.275.033.46-.095c-.372-.201-.77-.36-1.078-.668c.193-.004.4-.002.46-.073a4.2 4.2 0 0 1-.867-.704c.27.033.382.006.448-.04c-.258-.265-.583-.487-.739-.812c.2.069.383.093.515-.008c-.088-.198-.464-.314-.68-.776c.211.02.436.046.48 0c-.097-.398-.264-.622-.429-.854c.451-.007 1.134.001 1.103-.037l-.279-.285c.44-.118.892.02 1.219.122c.147-.115-.004-.263-.183-.413q.56.076 1.019.255C7.56.945 7.289.799 7.159.65c.578.11.825.263 1.068.417c.177-.169.01-.312-.11-.46m8.594 0c-.12.147-.287.29-.11.46c.244-.155.49-.308 1.068-.418c-.13.148-.401.294-.238.442a4.4 4.4 0 0 1 1.02-.255c-.18.15-.33.298-.184.413c.328-.102.779-.24 1.22-.122l-.28.285c-.03.038.652.03 1.103.037c-.165.232-.331.456-.43.854c.045.046.27.02.48 0c-.215.462-.591.578-.679.776c.132.101.315.077.515.008c-.155.325-.48.547-.738.811c.065.047.178.074.447.041a4.2 4.2 0 0 1-.866.704c.06.07.267.069.46.073c-.31.307-.706.467-1.079.668c.186.128.318.097.46.095c-.264.22-.711.336-1.127.468c.079.125.158.158.327.193c-.44.248-1.071.134-1.249.26c.043.125.164.208.31.276c-.71.041-2.648-.029-3.02-1.518c.726-.81 2.05-1.758 4.328-2.932c-1.772.602-3.37 1.405-4.708 2.509c-1.574-.744-.49-2.62.278-3.365c.04.196.082.32.133.358c.25-.272.455-.55.777-.812c0 .154-.078.32.114.441c.172-.235.406-.446.716-.624c-.15.26-.027.341.053.45c.236-.207.463-.415.899-.576M12.414 6.77c1.359 0 2.492.923 2.494 1.466c.004.68-.994 1.38-2.476 1.398h-.036c-1.482-.018-2.48-.717-2.476-1.398c.003-.543 1.136-1.466 2.494-1.466m-3.813.447h.084q.331 0 .677.059c.777.13-3.72 4.058-3.79 3.182c-.062-2.003 1.278-3.213 3.03-3.241m7.542 0h.084c1.751.028 3.091 1.238 3.03 3.24c-.07.877-4.567-3.05-3.791-3.181q.346-.059.677-.06m-6.825 2.5c.259-.002.521.036.777.122c1.363.458 2.052 2.053 1.54 3.56c-.513 1.509-2.034 2.36-3.398 1.903c-1.363-.458-2.052-2.053-1.54-3.56c.417-1.226 1.498-2.017 2.62-2.025m6.193 0c1.122.008 2.204.8 2.62 2.024c.513 1.508-.176 3.103-1.54 3.56c-1.364.459-2.885-.393-3.398-1.901c-.512-1.508.177-3.103 1.54-3.56c.256-.087.519-.125.778-.123M5.33 11.4c1.062.015.273 5.052-.69 4.624c-1.092-.879-1.444-3.451.582-4.608a.4.4 0 0 1 .082-.014zm14.168 0l.027.002a.4.4 0 0 1 .081.014c2.026 1.157 1.675 3.73.582 4.608c-.963.428-1.752-4.609-.69-4.624m-7.084 3.482a2.8 2.8 0 0 1 1.874.7c.52.47.822 1.14.818 1.811c0 .66-.295 1.313-.8 1.778a2.88 2.88 0 0 1-1.892.739a2.88 2.88 0 0 1-1.892-.739a2.45 2.45 0 0 1-.8-1.778a2.46 2.46 0 0 1 .818-1.81a2.8 2.8 0 0 1 1.874-.7M6.148 16.2c.703-.014 1.568.541 2.268 1.353c.78.94 1.136 2.593.485 3.08c-.617.372-2.115.218-3.178-1.31c-.718-1.282-.624-2.587-.12-2.97q.248-.149.545-.153m12.465 0h.067c.197.004.38.052.546.153c.503.383.597 1.688-.12 2.97c-1.064 1.528-2.562 1.682-3.178 1.31c-.652-.487-.297-2.14.484-3.08c.678-.787 1.51-1.333 2.201-1.353m-6.199 4.504c1.09-.012 2.71.447 2.69 1.032c.017.405-1.312 1.574-2.667 1.516h-.045c-1.356.058-2.685-1.11-2.667-1.516c-.02-.585 1.6-1.044 2.69-1.032"/></svg>'},{slug:"material-symbols:robot",label:"Robot",keywords:["robot"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.413 11.413Q11 10.825 11 10t-.587-1.412T9 8t-1.412.588T7 10t.588 1.413T9 12t1.413-.587m6 0Q17 10.825 17 10t-.587-1.412T15 8t-1.412.588T13 10t.588 1.413T15 12t1.413-.587M9 21v-4h2v4zm4 0v-4h2v4zm-8 0q-.825 0-1.412-.587T3 19V9q0-2.5 1.75-4.25T9 3h6q2.5 0 4.25 1.75T21 9v10q0 .825-.587 1.413T19 21h-2v-4q0-.825-.587-1.412T15 15H9q-.825 0-1.412.588T7 17v4z"/></svg>'},{slug:"material-symbols:robot-outline",label:"Robot Outline",keywords:["robot"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V9q0-2.5 1.75-4.25T9 3h6q2.5 0 4.25 1.75T21 9v10q0 .825-.587 1.413T19 21zm0-2h14V9q0-1.65-1.175-2.825T15 5H9Q7.35 5 6.175 6.175T5 9zm2.588-7.587Q7 10.825 7 10t.588-1.412T9 8t1.413.588T11 10t-.587 1.413T9 12t-1.412-.587m6 0Q13 10.825 13 10t.588-1.412T15 8t1.413.588T17 10t-.587 1.413T15 12t-1.412-.587M7 19v-2q0-.825.588-1.412T9 15h6q.825 0 1.413.588T17 17v2h-2v-2h-2v2h-2v-2H9v2zm-2 0h14z"/></svg>'},{slug:"mdi:robot",label:"Robot",keywords:["robot"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5A2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"/></svg>'},{slug:"mdi:raspberry-pi",label:"Raspberry Pi",keywords:["raspberry pi"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20 8h2v2h-2zM4 5h16a2 2 0 0 1 2 2h-3v2H5v4h3v3h11v1h3a2 2 0 0 1-2 2h-4v1h-2v-1h-3v1H7v-1H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m15 10H9v-5h10v1h3v2h-3zm-6-3v2h2v-2zM5 6v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm5 8h2v2h-2z"/></svg>'},{slug:"mdi:chip",label:"Chip",keywords:["chip"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6 4h12v1h3v2h-3v2h3v2h-3v2h3v2h-3v2h3v2h-3v1H6v-1H3v-2h3v-2H3v-2h3v-2H3V9h3V7H3V5h3zm5 11v3h1v-3zm2 0v3h1v-3zm2 0v3h1v-3z"/></svg>'},{slug:"mingcute:chip-fill",label:"Chip Fill",keywords:["chip"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M15 2a1 1 0 0 1 1 1v1h1a3 3 0 0 1 3 3v1h1a1 1 0 1 1 0 2h-1v4h1a1 1 0 1 1 0 2h-1v1a3 3 0 0 1-3 3h-1v1a1 1 0 1 1-2 0v-1h-4v1a1 1 0 1 1-2 0v-1H7a3 3 0 0 1-3-3v-1H3a1 1 0 1 1 0-2h1v-4H3a1 1 0 0 1 0-2h1V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 2 0v1h4V3a1 1 0 0 1 1-1m-1 6h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2m0 2v4h-4v-4z"/></g></svg>'},{slug:"mingcute:chip-line",label:"Chip Line",keywords:["chip"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M15 2a1 1 0 0 1 1 1v1h1a3 3 0 0 1 3 3v1h1a1 1 0 1 1 0 2h-1v4h1a1 1 0 1 1 0 2h-1v1a3 3 0 0 1-3 3h-1v1a1 1 0 1 1-2 0v-1h-4v1a1 1 0 1 1-2 0v-1H7a3 3 0 0 1-3-3v-1H3a1 1 0 1 1 0-2h1v-4H3a1 1 0 0 1 0-2h1V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 2 0v1h4V3a1 1 0 0 1 1-1m2 4H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1m-3 2a2 2 0 0 1 1.995 1.85L16 10v4a2 2 0 0 1-1.85 1.995L14 16h-4a2 2 0 0 1-1.995-1.85L8 14v-4a2 2 0 0 1 1.85-1.995L10 8zm0 2h-4v4h4z"/></g></svg>'},{slug:"solar:cpu-bold",label:"Cpu Bold",keywords:["cpu"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M9.181 10.181c.053-.053.148-.119.45-.16c.323-.043.761-.044 1.439-.044h1.86c.678 0 1.116.001 1.438.045c.303.04.398.106.45.16c.054.052.12.147.16.45c.044.322.045.76.045 1.438v1.86c0 .678-.001 1.116-.045 1.438c-.04.303-.106.398-.16.45c-.052.054-.147.12-.45.16c-.322.044-.76.045-1.438.045h-1.86c-.678 0-1.116-.001-1.438-.045c-.303-.04-.398-.106-.45-.16c-.054-.052-.12-.147-.16-.45c-.044-.322-.045-.76-.045-1.438v-1.86c0-.678.001-1.116.045-1.438c.04-.303.106-.398.16-.45"/><path fill="currentColor" fill-rule="evenodd" d="M12 3c.385 0 .698.312.698.698v2.79q.764.001 1.395.017V3.698a.698.698 0 0 1 1.395 0v2.79a1 1 0 0 1-.008.108c.936.115 1.585.353 2.078.846s.731 1.142.846 2.078a1 1 0 0 1 .108-.008h2.79a.698.698 0 0 1 0 1.395h-2.807q.017.63.017 1.395h2.79a.698.698 0 0 1 0 1.396h-2.79q-.001.764-.017 1.395h2.807a.698.698 0 0 1 0 1.395h-2.79a1 1 0 0 1-.108-.008c-.115.936-.353 1.585-.846 2.078s-1.142.731-2.078.846q.009.053.008.108v2.79a.698.698 0 0 1-1.395 0v-2.807q-.63.017-1.395.017v2.79a.698.698 0 0 1-1.396 0v-2.79a56 56 0 0 1-1.395-.017v2.807a.698.698 0 0 1-1.395 0v-2.79q0-.056.008-.108c-.936-.115-1.585-.353-2.078-.846s-.731-1.142-.846-2.078a1 1 0 0 1-.108.008h-2.79a.698.698 0 0 1 0-1.395h2.807a56 56 0 0 1-.017-1.395h-2.79a.698.698 0 0 1 0-1.396h2.79q.001-.764.017-1.395H2.698a.698.698 0 0 1 0-1.395h2.79q.056 0 .108.008c.115-.936.353-1.585.846-2.078s1.142-.731 2.078-.846a1 1 0 0 1-.008-.108v-2.79a.698.698 0 0 1 1.395 0v2.807q.63-.017 1.395-.017v-2.79c0-.386.313-.698.698-.698m-.976 5.581c-.619 0-1.152 0-1.578.058c-.458.061-.896.2-1.252.555c-.355.356-.494.794-.555 1.252c-.058.427-.058.96-.058 1.578v1.952c0 .619 0 1.151.058 1.578c.061.458.2.896.555 1.252c.356.355.794.494 1.252.555c.426.058.96.058 1.578.058h1.952c.619 0 1.151 0 1.578-.058c.458-.061.896-.2 1.252-.555c.355-.356.494-.794.555-1.252c.058-.427.058-.96.058-1.578v-1.952c0-.619 0-1.151-.058-1.578c-.061-.458-.2-.896-.555-1.252c-.356-.355-.794-.494-1.252-.555c-.427-.058-.96-.058-1.578-.058z" clip-rule="evenodd"/></svg>'},{slug:"solar:cpu-bold-duotone",label:"Cpu Bold Duotone",keywords:["cpu"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 3c.385 0 .698.312.698.698v2.79q.764.001 1.395.017V3.698a.698.698 0 0 1 1.395 0v2.79a1 1 0 0 1-.008.108c.936.115 1.585.353 2.078.846s.731 1.142.846 2.078a1 1 0 0 1 .108-.008h2.79a.698.698 0 0 1 0 1.395h-2.807q.017.63.017 1.395h2.79a.698.698 0 0 1 0 1.396h-2.79q-.001.764-.017 1.395h2.807a.698.698 0 0 1 0 1.395h-2.79a1 1 0 0 1-.108-.008c-.115.936-.353 1.585-.846 2.078s-1.142.731-2.078.846q.009.053.008.108v2.79a.698.698 0 0 1-1.395 0v-2.807q-.63.017-1.395.017v2.79a.698.698 0 0 1-1.396 0v-2.79a56 56 0 0 1-1.395-.017v2.807a.698.698 0 0 1-1.395 0v-2.79q0-.056.008-.108c-.936-.115-1.585-.353-2.078-.846s-.731-1.142-.846-2.078a1 1 0 0 1-.108.008h-2.79a.698.698 0 0 1 0-1.395h2.807a56 56 0 0 1-.017-1.395h-2.79a.698.698 0 0 1 0-1.396h2.79q.001-.764.017-1.395H2.698a.698.698 0 0 1 0-1.395h2.79q.056 0 .108.008c.115-.936.353-1.585.846-2.078s1.142-.731 2.078-.846a1 1 0 0 1-.008-.108v-2.79a.698.698 0 0 1 1.395 0v2.807q.63-.017 1.395-.017v-2.79c0-.386.313-.698.698-.698m-.976 5.581c-.619 0-1.152 0-1.578.058c-.458.061-.896.2-1.252.555c-.355.356-.494.794-.555 1.252c-.058.427-.058.96-.058 1.578v1.952c0 .619 0 1.151.058 1.578c.061.458.2.896.555 1.252c.356.355.794.494 1.252.555c.426.058.96.058 1.578.058h1.952c.619 0 1.151 0 1.578-.058c.458-.061.896-.2 1.252-.555c.355-.356.494-.794.555-1.252c.058-.427.058-.96.058-1.578v-1.952c0-.619 0-1.151-.058-1.578c-.061-.458-.2-.896-.555-1.252c-.356-.355-.794-.494-1.252-.555c-.427-.058-.96-.058-1.578-.058z" clip-rule="evenodd"/><path fill="currentColor" d="M9.18 10.18c.054-.052.149-.118.451-.159c.323-.043.761-.044 1.439-.044h1.86c.678 0 1.116.001 1.438.044c.303.041.398.107.45.16c.054.053.12.148.16.45c.044.323.045.761.045 1.439v1.86c0 .678-.001 1.116-.045 1.438c-.04.303-.106.398-.16.45c-.052.054-.147.12-.45.16c-.322.044-.76.045-1.438.045h-1.86c-.678 0-1.116-.001-1.439-.045c-.302-.04-.397-.106-.45-.16c-.053-.052-.119-.147-.16-.45c-.043-.322-.044-.76-.044-1.438v-1.86c0-.678.001-1.116.044-1.438c.041-.303.107-.398.16-.451" opacity=".5"/></svg>'},{slug:"solar:cpu-broken",label:"Cpu Broken",keywords:["cpu"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" d="M17 14c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14v-4c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56"/><path d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z"/><path stroke-linecap="round" d="M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2"/></g></svg>'},{slug:"tabler:circuit-bulb",label:"Circuit Bulb",keywords:["circuit"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12h5m10 0h5M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0m1.5-3.5l7 7m0-7l-7 7"/></svg>'},{slug:"tabler:circuit-cell",label:"Circuit Cell",keywords:["circuit"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12h8m4 0h8M10 5v14m4-10v6"/></svg>'},{slug:"ph:head-circuit",label:"Head Circuit",keywords:["circuit"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M192.5 171.47a88.34 88.34 0 0 0 31.5-69.54c-1-45.71-37.61-83.4-83.24-85.8A88 88 0 0 0 48 102l-22.45 43.18c-.09.18-.18.36-.26.54a16 16 0 0 0 7.55 20.62l.25.11L56 176.94V208a16 16 0 0 0 16 16h48a8 8 0 0 0 0-16H72v-36.19a8 8 0 0 0-4.67-7.28L40 152l23.07-44.34A7.9 7.9 0 0 0 64 104a72 72 0 0 1 56-70.21v15.59a24 24 0 1 0 16 0V32c1.3 0 2.6 0 3.9.1A72.26 72.26 0 0 1 203.84 80H184a8 8 0 0 0-6.15 2.88l-25.51 30.62a24.06 24.06 0 1 0 12.28 10.25L187.75 96h19.79q.36 3.12.44 6.3a72.26 72.26 0 0 1-28.78 59.3a8 8 0 0 0-3.14 7.39l8 64a8 8 0 0 0 7.93 7a8 8 0 0 0 1-.06a8 8 0 0 0 6.95-8.93ZM128 80a8 8 0 1 1 8-8a8 8 0 0 1-8 8m16 64a8 8 0 1 1 8-8a8 8 0 0 1-8 8"/></svg>'},{slug:"lucide:microchip",label:"Microchip",keywords:["microchip"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 12h4m-4 5h4M10 7h4m4 5h2m-2 6h2M18 6h2M4 12h2m-2 6h2M4 6h2"/><rect x="6" y="2" rx="2"/></g></svg>'},{slug:"ri:sensor-fill",label:"Sensor Fill",keywords:["sensor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6 8v2h12V8h-3V2h2v4h5v2h-2v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V2h2v6zm7-6v6h-2V2z"/></svg>'},{slug:"ri:sensor-line",label:"Sensor Line",keywords:["sensor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6 8v11h12V8h-3V2h2v4h5v2h-2v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V2h2v6zm7-6v6h-2V2z"/></svg>'},{slug:"material-symbols:door-sensor",label:"Door Sensor",keywords:["sensor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M9 21q-.825 0-1.412-.587T7 19v-2h5q.825 0 1.413-.587T14 15t-.587-1.412T12 13H7V5q0-.825.588-1.412T9 3h6q.825 0 1.413.588T17 5v14q0 .825-.587 1.413T15 21zm-4-5q-.425 0-.712-.288T4 15t.288-.712T5 14h7q.425 0 .713.288T13 15t-.288.713T12 16zm7.713-6.288Q13 9.425 13 9t-.288-.712T12 8t-.712.288T11 9t.288.713T12 10t.713-.288m6.575-1Q19 8.426 19 8V4q0-.425.288-.712T20 3t.713.288T21 4v4q0 .425-.288.713T20 9t-.712-.288"/></svg>'},{slug:"mdi:motor",label:"Motor",keywords:["motor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 4v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"/></svg>'},{slug:"mdi:motor-outline",label:"Motor Outline",keywords:["motor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8 10h8v8h-5l-2-2H7v-5m0-7v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"/></svg>'},{slug:"mdi:motor-off",label:"Motor Off",keywords:["motor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3.78 2.5L21.5 20.22l-1.27 1.28L18 19.27V20h-8l-2-2H5v-3H3v3H1v-8h2v3h2v-3l1.87-1.86L2.5 3.77zM20 9v3h-2V8h-6V6h3V4H7.82l15 15H23V9z"/></svg>'},{slug:"mdi:engine",label:"Engine",keywords:["engine"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 4v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"/></svg>'},{slug:"mdi:engine-outline",label:"Engine Outline",keywords:["engine"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8 10h8v8h-5l-2-2H7v-5m0-7v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"/></svg>'},{slug:"tabler:engine",label:"Engine",keywords:["engine"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10v6m9-11v3m-2-3h4m-9 8H3m3-3h2l2-2h3.382a1 1 0 0 1 .894.553l1.448 2.894a1 1 0 0 0 .894.553H18v-2h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2v-2h-3v2a1 1 0 0 1-1 1h-3.465a1 1 0 0 1-.832-.445L8 16H6z"/></svg>'},{slug:"mdi:car",label:"Car",keywords:["car"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m5 11l1.5-4.5h11L19 11m-1.5 5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-11 0A1.5 1.5 0 0 1 5 14.5A1.5 1.5 0 0 1 6.5 13A1.5 1.5 0 0 1 8 14.5A1.5 1.5 0 0 1 6.5 16M18.92 6c-.2-.58-.76-1-1.42-1h-11c-.66 0-1.22.42-1.42 1L3 12v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8z"/></svg>'},{slug:"mdi:car-outline",label:"Car Outline",keywords:["car"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18.9 6c-.2-.6-.8-1-1.4-1h-11c-.7 0-1.2.4-1.4 1L3 12v8c0 .5.5 1 1 1h1c.6 0 1-.5 1-1v-1h12v1c0 .5.5 1 1 1h1c.5 0 1-.5 1-1v-8zM6.8 7h10.3l1.1 3H5.8zM19 17H5v-5h14zM7.5 13c.8 0 1.5.7 1.5 1.5S8.3 16 7.5 16S6 15.3 6 14.5S6.7 13 7.5 13m9 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5"/></svg>'},{slug:"tabler:car",label:"Car",keywords:["car"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"/><path d="M5 17H3v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0H9m-6-6h15m-6 0V6"/></g></svg>'},{slug:"mdi:tank",label:"Tank",keywords:["tank"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20 12H4v-1h2l1-5h5l1 5h7zm-6.78-5l.4 2H22V7zM22 16a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3M6 16a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1m7 0a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1m7 0a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1"/></svg>'},{slug:"tabler:tank",label:"Tank",keywords:["tank"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 15a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3m4-3l1-5h5l3 5m6-3h-7.8"/></svg>'},{slug:"mingcute:tank-fill",label:"Tank Fill",keywords:["tank"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M7 7a3 3 0 0 1 3-3h1.53a5 5 0 0 1 4.584 3H20a1 1 0 1 1 0 2h-3.418l.285 2h.633a4.5 4.5 0 1 1 0 9h-11a4.5 4.5 0 1 1 0-9H7z"/></g></svg>'},{slug:"mdi:truck",label:"Truck",keywords:["truck"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18 18.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m1.5-9l1.96 2.5H17V9.5m-11 9A1.5 1.5 0 0 1 4.5 17A1.5 1.5 0 0 1 6 15.5A1.5 1.5 0 0 1 7.5 17A1.5 1.5 0 0 1 6 18.5M20 8h-3V4H3c-1.11 0-2 .89-2 2v11h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-5z"/></svg>'},{slug:"mdi:truck-outline",label:"Truck Outline",keywords:["truck"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m1.5-9H17V12h4.46zM6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.11.89-2 2-2h14v4zM3 6v9h.76c.55-.61 1.35-1 2.24-1s1.69.39 2.24 1H15V6z"/></svg>'},{slug:"tabler:truck",label:"Truck",keywords:["truck"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"/><path d="M5 17H3V6a1 1 0 0 1 1-1h9v12m-4 0h6m4 0h2v-6h-8m0-5h5l3 5"/></g></svg>'},{slug:"material-symbols:rocket",label:"Rocket",keywords:["rocket"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 22v-5.925q0-.5.238-.95T4.9 14.4l1.1-.725q.175 2.1.55 3.575t1.175 3.275zm5.225-2q-.875-1.65-1.3-3.5T7.5 12.675q0-3.125 1.238-5.887T12 2.6q2.025 1.425 3.263 4.188t1.237 5.887q0 1.95-.425 3.788T14.775 20zm4.188-7.587Q14 11.825 14 11t-.587-1.412T12 9t-1.412.588T10 11t.588 1.413T12 13t1.413-.587M20 22l-3.725-1.475q.8-1.8 1.175-3.275t.55-3.575l1.1.725q.425.275.663.725t.237.95z"/></svg>'},{slug:"material-symbols:rocket-outline",label:"Rocket Outline",keywords:["rocket"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m6 19.05l1.975-.8q-.25-.725-.462-1.475t-.338-1.5l-1.175.8zM10 18h4q.45-1 .725-2.437T15 12.625q0-2.475-.825-4.687T12 4.525q-1.35 1.2-2.175 3.413T9 12.625q0 1.5.275 2.938T10 18m.588-5.587Q10 11.825 10 11t.588-1.412T12 9t1.413.588T14 11t-.587 1.413T12 13t-1.412-.587M18 19.05v-2.975l-1.175-.8q-.125.75-.337 1.5t-.463 1.475zM12 1.975q2.475 1.8 3.738 4.575T17 13l2.1 1.4q.425.275.663.725t.237.95V22l-4.975-2h-6.05L4 22v-5.925q0-.5.238-.95T4.9 14.4L7 13q0-3.675 1.263-6.45T12 1.975"/></svg>'},{slug:"material-symbols:rocket-outline-rounded",label:"Rocket Outline Rounded",keywords:["rocket"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7.975 18.25q-.25-.725-.462-1.475t-.338-1.5l-1.175.8v2.975zM11.65 4.875q-1.2 1.275-1.925 3.363T9 12.625q0 1.5.275 2.938T10 18h4q.45-1 .725-2.437T15 12.625q0-2.3-.725-4.387T12.35 4.875q-.075-.075-.162-.112T12 4.725t-.187.038t-.163.112M12 13q-.825 0-1.412-.587T10 11t.588-1.412T12 9t1.413.588T14 11t-.587 1.413T12 13m4.025 5.25l1.975.8v-2.975l-1.175-.8q-.125.75-.337 1.5t-.463 1.475M12.775 2.6q2.1 1.8 3.163 4.425T17 13l2.1 1.4q.425.275.663.725t.237.95v4.45q0 .525-.437.825t-.938.1l-3.6-1.45h-6.05l-3.6 1.45q-.5.2-.937-.1T4 20.525v-4.45q0-.5.238-.95T4.9 14.4L7 13q0-3.35 1.063-5.975T11.224 2.6q.175-.125.375-.2t.4-.075t.4.075t.375.2"/></svg>'},{slug:"material-symbols:drone",label:"Drone",keywords:["drone"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q0-1.875 1.025-3.363t2.65-2.162L7.425 12H4V6H1V4h8v2H6v4h1.2L7 8h10l-.2 2H18V6h-3V4h8.025v2h-3v6H16.6l-.25 2.475q1.625.675 2.638 2.163T20 20h-2q0-1.65-1.175-2.825T14 16h-4q-1.65 0-2.825 1.175T6 20z"/></svg>'},{slug:"material-symbols:drone-outline",label:"Drone Outline",keywords:["drone"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q0-1.875 1.025-3.363t2.65-2.162L7.425 12H4V6H1V4h8v2H6v4h1.2L7 8h10l-.2 2H18V6h-3V4h8.025v2h-3v6H16.6l-.25 2.475q1.625.675 2.638 2.163T20 20h-2q0-1.65-1.175-2.825T14 16h-4q-1.65 0-2.825 1.175T6 20zm5.625-6h4.725l.425-4H9.2zm0 0h4.725z"/></svg>'},{slug:"material-symbols:drone-outline-rounded",label:"Drone Outline Rounded",keywords:["drone"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10 16q-1.425 0-2.475.85T6.125 19q-.125.425-.413.713T5 20t-.7-.3t-.2-.7q.275-1.55 1.225-2.75t2.35-1.775L7.425 12H5q-.425 0-.713-.288T4 11V6H2q-.425 0-.712-.288T1 5t.288-.712T2 4h6q.425 0 .713.288T9 5t-.288.713T8 6H6v4h1.2l-.075-.9q-.05-.45.238-.775T8.1 8h7.8q.45 0 .738.325t.237.775l-.075.9H18V6h-2q-.425 0-.712-.288T15 5t.288-.712T16 4h6.025q.425 0 .713.288t.287.712t-.287.713t-.713.287h-2v5q0 .425-.287.713t-.713.287H16.6l-.25 2.475q1.4.575 2.35 1.775T19.925 19q.075.4-.212.7T19 20t-.712-.288t-.413-.712q-.35-1.3-1.412-2.15T14 16zm-.375-2h4.725l.425-4H9.2zm0 0h4.725z"/></svg>'},{slug:"material-symbols:gamepad",label:"Gamepad",keywords:["gamepad"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.5l-3-3V2h6v5.5zm4.5 4.5l-3-3l3-3H22v6zM2 15V9h5.5l3 3l-3 3zm7 7v-5.5l3-3l3 3V22z"/></svg>'},{slug:"material-symbols:gamepad-outline",label:"Gamepad Outline",keywords:["gamepad"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.5l-3-3V2h6v5.5zm4.5 4.5l-3-3l3-3H22v6zM2 15V9h5.5l3 3l-3 3zm7 7v-5.5l3-3l3 3V22zm3-14.35l1-1V4h-2v2.65zM4 13h2.65l1-1l-1-1H4zm7 7h2v-2.65l-1-1l-1 1zm6.35-7H20v-2h-2.65l-1 1z"/></svg>'},{slug:"material-symbols:gamepad-outline-rounded",label:"Gamepad Outline Rounded",keywords:["gamepad"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m11.3 9.8l-2-2q-.15-.15-.225-.337T9 7.075V3q0-.425.288-.712T10 2h4q.425 0 .713.288T15 3v4.075q0 .2-.075.388T14.7 7.8l-2 2q-.15.15-.325.213t-.375.062t-.375-.062T11.3 9.8m2.9 2.9q-.15-.15-.212-.325T13.925 12t.063-.375t.212-.325l2-2q.15-.15.338-.225T16.925 9H21q.425 0 .713.288T22 10v4q0 .425-.288.713T21 15h-4.075q-.2 0-.387-.075T16.2 14.7zM2 14v-4q0-.425.288-.712T3 9h4.075q.2 0 .388.075T7.8 9.3l2 2q.15.15.213.325t.062.375t-.062.375t-.213.325l-2 2q-.15.15-.337.225T7.075 15H3q-.425 0-.712-.288T2 14m7 7v-4.075q0-.2.075-.387T9.3 16.2l2-2q.15-.15.325-.212t.375-.063t.375.063t.325.212l2 2q.15.15.225.338t.075.387V21q0 .425-.288.713T14 22h-4q-.425 0-.712-.288T9 21m3-13.35l1-1V4h-2v2.65zM4 13h2.65l1-1l-1-1H4zm7 7h2v-2.65l-1-1l-1 1zm6.35-7H20v-2h-2.65l-1 1z"/></svg>'},{slug:"material-symbols:joystick",label:"Joystick",keywords:["joystick"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 8.275V7.85q-1.1-.325-1.8-1.237T8.5 4.5q0-1.45 1.025-2.475T12 1t2.475 1.025T15.5 4.5q0 1.2-.7 2.113T13 7.85v.425l7 4.025q.475.275.738.738T21 14.05v1.9q0 .55-.262 1.013T20 17.7l-7 4.025Q12.525 22 12 22t-1-.275L4 17.7q-.475-.275-.737-.737T3 15.95v-1.9q0-.55.263-1.012T4 12.3zM6.8 13l5.2 3l5.2-3l-4.2-2.425V14h-2v-3.425z"/></svg>'},{slug:"material-symbols:joystick-outline",label:"Joystick Outline",keywords:["joystick"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m6.8 13l5.2 3l5.2-3l-4.2-2.425V14h-2v-3.425zM11 8.275V7.85q-1.1-.325-1.8-1.238T8.5 4.5q0-1.45 1.025-2.475T12 1t2.475 1.025T15.5 4.5q0 1.2-.7 2.113T13 7.85v.425l7 4.025q.475.275.738.738T21 14.05v1.9q0 .55-.262 1.013T20 17.7l-7 4.025Q12.525 22 12 22t-1-.275L4 17.7q-.475-.275-.737-.737T3 15.95v-1.9q0-.55.263-1.012T4 12.3zm0 9.45l-6-3.45v1.675L12 20l7-4.05v-1.675l-6 3.45Q12.525 18 12 18t-1-.275m2.063-12.163q.437-.437.437-1.062t-.437-1.062T12 3t-1.062.438T10.5 4.5t.438 1.063T12 6t1.063-.437M12 20"/></svg>'},{slug:"material-symbols:joystick-outline-sharp",label:"Joystick Outline Sharp",keywords:["joystick"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 8.275V7.85q-1.1-.325-1.8-1.237T8.5 4.5q0-1.45 1.025-2.475T12 1t2.475 1.025T15.5 4.5q0 1.2-.7 2.113T13 7.85v.425l8 4.6v4.25l-8 4.6Q12.525 22 12 22t-1-.275l-8-4.6v-4.25zm-6 6v1.675L12 20l7-4.05v-1.675L12 18.3zm8.063-8.712q.437-.438.437-1.063t-.437-1.062T12 3t-1.062.438T10.5 4.5t.438 1.063T12 6t1.063-.437M6.8 13l5.2 3l5.2-3l-4.2-2.425V14h-2v-3.425z"/></svg>'},{slug:"mdi:battery",label:"Battery",keywords:["battery"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16.67 4H15V2H9v2H7.33A1.33 1.33 0 0 0 6 5.33v15.34C6 21.4 6.6 22 7.33 22h9.34A1.33 1.33 0 0 0 18 20.67V5.33C18 4.6 17.4 4 16.67 4"/></svg>'},{slug:"mdi:battery-outline",label:"Battery Outline",keywords:["battery"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16 20H8V6h8m.67-2H15V2H9v2H7.33A1.33 1.33 0 0 0 6 5.33v15.34C6 21.4 6.6 22 7.33 22h9.34A1.33 1.33 0 0 0 18 20.67V5.33C18 4.6 17.4 4 16.67 4"/></svg>'},{slug:"tabler:battery",label:"Battery",keywords:["battery"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 7h11a2 2 0 0 1 2 2v.5a.5.5 0 0 0 .5.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5a.5.5 0 0 0-.5.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2"/></svg>'},{slug:"material-symbols:bolt",label:"Bolt",keywords:["bolt"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m8 22l1-7H4l9-13h2l-1 8h6L10 22z"/></svg>'},{slug:"material-symbols:bolt-outline",label:"Bolt Outline",keywords:["bolt"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m10.55 18.2l5.175-6.2h-4l.725-5.675L7.825 13H11.3zM8 22l1-7H4l9-13h2l-1 8h6L10 22zm3.775-9.75"/></svg>'},{slug:"material-symbols:bolt-outline-rounded",label:"Bolt Outline Rounded",keywords:["bolt"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m10.55 18.2l5.175-6.2h-4l.725-5.675L7.825 13H11.3zM9 15H5.9q-.6 0-.888-.537t.063-1.038l7.475-10.75q.25-.35.65-.487t.825.012t.625.525t.15.8L14 10h3.875q.65 0 .913.575t-.163 1.075L10.4 21.5q-.275.325-.675.425t-.775-.075t-.587-.537t-.163-.788zm2.775-2.75"/></svg>'},{slug:"material-symbols:bluetooth",label:"Bluetooth",keywords:["bluetooth"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 22v-7.6L6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5L11 9.6V2h1l5.7 5.7l-4.3 4.3l4.3 4.3L12 22zm2-12.4l1.9-1.9L13 5.85zm0 8.55l1.9-1.85l-1.9-1.9z"/></svg>'},{slug:"material-symbols:bluetooth-rounded",label:"Bluetooth Rounded",keywords:["bluetooth"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 20.575V14.4l-3.9 3.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275L11 9.6V3.425q0-.45.3-.737T12 2.4q.2 0 .375.075t.325.225L17 7q.15.15.213.325t.062.375t-.062.375T17 8.4L13.4 12l3.6 3.6q.15.15.213.325t.062.375t-.062.375T17 17l-4.3 4.3q-.15.15-.325.225T12 21.6q-.4 0-.7-.288t-.3-.737M13 9.6l1.9-1.9L13 5.85zm0 8.55l1.9-1.85l-1.9-1.9z"/></svg>'},{slug:"mdi:bluetooth",label:"Bluetooth",keywords:["bluetooth"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14.88 16.29L13 18.17v-3.76m0-8.58l1.88 1.88L13 9.58m4.71-1.87L12 2h-1v7.58L6.41 5L5 6.41L10.59 12L5 17.58L6.41 19L11 14.41V22h1l5.71-5.71l-4.3-4.29z"/></svg>'},{slug:"material-symbols:wifi",label:"Wifi",keywords:["wifi"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.225 20.275Q9.5 19.55 9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21t-1.775-.725M6.35 15.35l-2.1-2.15q1.475-1.475 3.463-2.337T12 10t4.288.875t3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725T12 13t-3.1.625t-2.55 1.725M2.1 11.1L0 9q2.3-2.35 5.375-3.675T12 4t6.625 1.325T24 9l-2.1 2.1q-1.925-1.925-4.462-3.012T12 7T6.563 8.088T2.1 11.1"/></svg>'},{slug:"material-symbols:wifi-rounded",label:"Wifi Rounded",keywords:["wifi"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.225 20.275Q9.5 19.55 9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21t-1.775-.725m5.338-9.675q1.687.6 3.062 1.65q.5.375.513.988T18.7 14.3q-.425.425-1.05.438t-1.125-.338q-.95-.65-2.1-1.025T12 13t-2.425.375t-2.1 1.025q-.5.35-1.125.325t-1.05-.45q-.425-.45-.425-1.062t.5-.988q1.375-1.05 3.063-1.638T12 10t3.563.6m2.324-5.575q2.763 1.025 4.963 2.9q.5.425.525 1.05t-.425 1.075q-.425.425-1.05.438t-1.125-.388q-1.8-1.475-4.037-2.287T12 7t-4.737.813T3.225 10.1q-.5.4-1.125.388t-1.05-.438Q.6 9.6.625 8.975t.525-1.05q2.2-1.875 4.963-2.9T12 4t5.888 1.025"/></svg>'},{slug:"material-symbols:wifi-sharp",label:"Wifi Sharp",keywords:["wifi"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m6.35 15.35l-2.1-2.15q1.55-1.55 3.55-2.375T12 10t4.213.838t3.537 2.412l-2.1 2.1q-1.125-1.125-2.588-1.737T12 13t-3.062.613T6.35 15.35M2.1 11.1L0 9q2.375-2.425 5.488-3.713T12 4t6.513 1.288T24 9l-2.1 2.1q-1.975-1.975-4.538-3.037T12 7T6.637 8.063T2.1 11.1M12 21l-3.525-3.55q.7-.7 1.613-1.075T12 16t1.913.375t1.612 1.075z"/></svg>'},{slug:"mdi:antenna",label:"Antenna",keywords:["antenna"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 7.5c.69 0 1.27.23 1.76.7s.74 1.07.74 1.8q0 1.575-1.5 2.28V21h-2v-8.72Q9.5 11.575 9.5 10c0-.73.26-1.33.74-1.8s1.07-.7 1.76-.7m4.69-2.2c1.25 1.25 1.92 2.81 2.01 4.7c0 1.8-.67 3.38-2.01 4.72L15.5 13.5c1-.91 1.5-2.08 1.5-3.5c0-1.33-.5-2.5-1.5-3.5zM6.09 4.08C4.5 5.67 3.7 7.64 3.7 10s.8 4.3 2.39 5.89l-1.17 1.22C3 15.08 2 12.7 2 10s1-5.06 2.92-7.09zm12.99-1.17C21 4.94 22 7.3 22 10c0 2.8-1 5.17-2.92 7.11l-1.17-1.22C19.5 14.3 20.3 12.33 20.3 10s-.8-4.33-2.39-5.92zM7.31 5.3L8.5 6.5C7.5 7.42 7 8.58 7 10c0 1.33.5 2.5 1.5 3.5l-1.19 1.22C5.97 13.38 5.3 11.8 5.3 10s.67-3.36 2.01-4.7"/></svg>'},{slug:"tabler:antenna",label:"Antenna",keywords:["antenna"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 4v8m-4-7.5v7M12 5v16M8 5.5v5M4 6v4m16-2H4"/></svg>'},{slug:"lucide:antenna",label:"Antenna",keywords:["antenna"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12L7 2m0 10l5-10m0 10l5-10m0 10l5-10M4.5 7h15M12 16v6"/></svg>'},{slug:"mdi:led-outline",label:"Led Outline",keywords:["led"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4m0 2a2 2 0 0 1 2 2v5h-4v-5a2 2 0 0 1 2-2"/></svg>'},{slug:"mdi:led-on",label:"Led On",keywords:["led"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 0v4h2V0zm7.3 2.29l-3.06 3l1.4 1.42l3.06-3zm-12.59 0L4.29 3.71l3 3l1.42-1.42zM12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4M2 9v2h4V9zm16 0v2h4V9z"/></svg>'},{slug:"mdi:led-off",label:"Led Off",keywords:["led"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4"/></svg>'},{slug:"tabler:bulb",label:"Bulb",keywords:["bulb"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h1m8-9v1m8 8h1M5.6 5.6l.7.7m12.1-.7l-.7.7M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0-1 3a2 2 0 0 1-4 0a3.5 3.5 0 0 0-1-3m.7 1h4.6"/></svg>'},{slug:"tabler:bulb-filled",label:"Bulb Filled",keywords:["bulb"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 11a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm8-9a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1m9 9a1 1 0 0 1 .117 1.993L21 13h-1a1 1 0 0 1-.117-1.993L20 11zM4.893 4.893a1 1 0 0 1 1.32-.083l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7a1 1 0 0 1 0-1.414m12.8 0a1 1 0 0 1 1.497 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094zM14 18a1 1 0 0 1 1 1a3 3 0 0 1-6 0a1 1 0 0 1 .883-.993L10 18zM12 6a6 6 0 0 1 3.6 10.8a1 1 0 0 1-.471.192L15 17H9a1 1 0 0 1-.6-.2A6 6 0 0 1 12 6"/></svg>'},{slug:"mingcute:bulb-fill",label:"Bulb Fill",keywords:["bulb"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M13 20a1 1 0 0 1 .117 1.993L13 22h-2a1 1 0 0 1-.117-1.993L11 20zM12 2c4.41 0 8 3.543 8 7.933c0 3.006-1.522 5.196-2.78 6.494l-.284.283l-.27.252l-.252.22l-.33.27l-.328.244c-.241.17-.403.419-.55.678l-.205.364c-.238.41-.517.762-1.108.762h-3.786c-.59 0-.87-.351-1.108-.762l-.118-.208c-.172-.312-.348-.63-.637-.834l-.232-.171l-.199-.155l-.227-.188l-.252-.22l-.27-.252l-.285-.283C5.522 15.129 4 12.939 4 9.933C4 5.543 7.59 2 12 2m1.707 4.293a1 1 0 0 0-1.32-.083l-.094.083L10.3 8.286a1.01 1.01 0 0 0-.084 1.333l.084.095L11.586 11l-1.293 1.293a1 1 0 0 0 1.32 1.497l.094-.083l1.993-1.993a1.01 1.01 0 0 0 .084-1.333l-.084-.095L12.414 9l1.293-1.293a1 1 0 0 0 0-1.414"/></g></svg>'},{slug:"ph:x-light",label:"X Light",keywords:["light"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M204.24 195.76a6 6 0 1 1-8.48 8.48L128 136.49l-67.76 67.75a6 6 0 0 1-8.48-8.48L119.51 128L51.76 60.24a6 6 0 0 1 8.48-8.48L128 119.51l67.76-67.75a6 6 0 0 1 8.48 8.48L136.49 128Z"/></svg>'},{slug:"ph:at-light",label:"At Light",keywords:["light"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M128 26a102 102 0 0 0 0 204c21.13 0 43.31-6.35 59.32-17a6 6 0 0 0-6.65-10c-13.9 9.25-34.09 15-52.67 15a90 90 0 1 1 90-90c0 29.58-13.78 34-22 34s-22-4.42-22-34V88a6 6 0 0 0-12 0v9a46 46 0 1 0 4.34 56.32C171.76 166.6 182 174 196 174c21.29 0 34-17.2 34-46A102.12 102.12 0 0 0 128 26m0 136a34 34 0 1 1 34-34a34 34 0 0 1-34 34"/></svg>'},{slug:"ph:pi-light",label:"Pi Light",keywords:["light"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M230 172a34 34 0 0 1-68 0V70H94v130a6 6 0 0 1-12 0V70H72a42 42 0 0 0-42 42a6 6 0 0 1-12 0a54.06 54.06 0 0 1 54-54h152a6 6 0 0 1 0 12h-50v102a22 22 0 0 0 44 0a6 6 0 0 1 12 0"/></svg>'},{slug:"mdi:lamp",label:"Lamp",keywords:["lamp"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8 2h8l4 12H4zm3 13h2v5h5v2H6v-2h5z"/></svg>'},{slug:"mdi:lamp-outline",label:"Lamp Outline",keywords:["lamp"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m14.56 4l2.67 8H6.78l2.66-8zM16 2H8L4 14h16zm-5 13h2v5h5v2H6v-2h5z"/></svg>'},{slug:"solar:lamp-bold",label:"Lamp Bold",keywords:["lamp"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6.667 3.151c-.786.775-1.09 1.948-1.699 4.294l-.084.324c-.828 3.189-1.242 4.783-.49 5.903q.112.168.247.319C5.536 15 7.183 15 10.477 15h.779v6.25h-2.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25V15h.78c1.32 0 2.374 0 3.223-.065l-.003.065v2a.75.75 0 1 0 1.5 0v-2.318c.468-.15.83-.369 1.116-.691q.135-.15.247-.32c.752-1.12.338-2.713-.49-5.902l-.084-.324c-.609-2.346-.913-3.519-1.7-4.294a4 4 0 0 0-.756-.585C15.64 2 14.429 2 12.007 2c-2.424 0-3.635 0-4.583.566a4 4 0 0 0-.757.585"/></svg>'},{slug:"mdi:flash",label:"Flash",keywords:["flash"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>'},{slug:"mdi:flash-outline",label:"Flash Outline",keywords:["flash"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 2h10l-3.5 7H17l-7 13v-8H7zm2 2v8h3v2.66L14 11h-3.76l3.52-7z"/></svg>'},{slug:"mingcute:flash-fill",label:"Flash Fill",keywords:["flash"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M13.232 1.36c.632-.758 1.863-.24 1.763.742L14.289 9H20a1 1 0 0 1 .768 1.64l-10 12c-.632.758-1.863.24-1.763-.742L9.711 15H4a1 1 0 0 1-.768-1.64z"/></g></svg>'},{slug:"mdi:temperature",label:"Temperature",keywords:["temperature"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15 13V5a3 3 0 0 0-6 0v8a5 5 0 1 0 6 0m-3-9a1 1 0 0 1 1 1v3h-2V5a1 1 0 0 1 1-1"/></svg>'},{slug:"solar:temperature-bold",label:"Temperature Bold",keywords:["temperature"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M17.5 16.5a5.5 5.5 0 1 1-8.939-4.293c.264-.211.439-.521.439-.86V5a3 3 0 1 1 6 0v6.348c0 .338.175.648.439.86A5.49 5.49 0 0 1 17.5 16.5M12 4.25a.75.75 0 0 1 .75.75v8.38c0 .437.297.808.658 1.054a2.5 2.5 0 1 1-2.816 0c.36-.246.658-.617.658-1.054V5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>'},{slug:"solar:temperature-bold-duotone",label:"Temperature Bold Duotone",keywords:["temperature"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 16.5a5.5 5.5 0 1 1-8.939-4.293c.264-.211.439-.521.439-.86V5a3 3 0 1 1 6 0v6.348c0 .338.175.648.439.86A5.49 5.49 0 0 1 17.5 16.5" opacity=".5"/><path fill="currentColor" d="M12.75 5a.75.75 0 0 0-1.5 0v8.38c0 .437-.297.808-.658 1.054a2.5 2.5 0 1 0 2.816 0c-.36-.246-.658-.617-.658-1.054z"/></svg>'},{slug:"material-symbols:thermometer",label:"Thermometer",keywords:["thermometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-2.075 0-3.537-1.463T7 16q0-1.2.525-2.238T9 12V6q0-1.25.875-2.125T12 3t2.125.875T15 6v6q.95.725 1.475 1.763T17 16q0 2.075-1.463 3.538T12 21m-1-11h2V6q0-.425-.288-.712T12 5t-.712.288T11 6z"/></svg>'},{slug:"material-symbols:thermometer-outline",label:"Thermometer Outline",keywords:["thermometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-2.075 0-3.537-1.463T7 16q0-1.2.525-2.238T9 12V6q0-1.25.875-2.125T12 3t2.125.875T15 6v6q.95.725 1.475 1.763T17 16q0 2.075-1.463 3.538T12 21m0-2q1.25 0 2.125-.875T15 16q0-.725-.312-1.35T13.8 13.6L13 13V6q0-.425-.288-.712T12 5t-.712.288T11 6v7l-.8.6q-.575.425-.888 1.05T9 16q0 1.25.875 2.125T12 19m0-3"/></svg>'},{slug:"mdi:thermometer",label:"Thermometer",keywords:["thermometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15 13V5a3 3 0 0 0-6 0v8a5 5 0 1 0 6 0m-3-9a1 1 0 0 1 1 1v3h-2V5a1 1 0 0 1 1-1"/></svg>'},{slug:"mdi:gauge",label:"Gauge",keywords:["gauge"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8c0 2.4-1 4.5-2.7 6c-1.4-1.3-3.3-2-5.3-2s-3.8.7-5.3 2C5 16.5 4 14.4 4 12a8 8 0 0 1 8-8m2 1.89c-.38.01-.74.26-.9.65l-1.29 3.23l-.1.23c-.71.13-1.3.6-1.57 1.26c-.41 1.03.09 2.19 1.12 2.6s2.19-.09 2.6-1.12c.26-.66.14-1.42-.29-1.98l.1-.26l1.29-3.21l.01-.03c.2-.51-.05-1.09-.56-1.3c-.13-.05-.26-.07-.41-.07M10 6a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M7 9a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m10 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"/></svg>'},{slug:"tabler:gauge",label:"Gauge",keywords:["gauge"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"/><path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m2.41-1.41L16 8m-9 4a5 5 0 0 1 5-5"/></g></svg>'},{slug:"tabler:gauge-filled",label:"Gauge Filled",keywords:["gauge"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34m-.293 3.953a1 1 0 0 0-1.414 0l-2.59 2.59l-.083.094l-.068.1a2 2 0 0 0-2.547 1.774L10 12l.005.15a2 2 0 1 0 3.917-.701a1 1 0 0 0 .195-.152l2.59-2.59l.083-.094a1 1 0 0 0-.083-1.32M12 6a6 6 0 0 0-6 6a1 1 0 0 0 2 0a4 4 0 0 1 4-4a1 1 0 0 0 0-2"/></svg>'},{slug:"mdi:speedometer",label:"Speedometer",keywords:["speedometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16a3 3 0 0 1-3-3c0-1.12.61-2.1 1.5-2.61l9.71-5.62l-5.53 9.58c-.5.98-1.51 1.65-2.68 1.65m0-13c1.81 0 3.5.5 4.97 1.32l-2.1 1.21C14 5.19 13 5 12 5a8 8 0 0 0-8 8c0 2.21.89 4.21 2.34 5.65h.01c.39.39.39 1.02 0 1.41s-1.03.39-1.42.01A9.97 9.97 0 0 1 2 13A10 10 0 0 1 12 3m10 10c0 2.76-1.12 5.26-2.93 7.07c-.39.38-1.02.38-1.41-.01a.996.996 0 0 1 0-1.41A7.95 7.95 0 0 0 20 13c0-1-.19-2-.54-2.9L20.67 8C21.5 9.5 22 11.18 22 13"/></svg>'},{slug:"ph:speedometer",label:"Speedometer",keywords:["speedometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="m114.34 154.34l96-96a8 8 0 0 1 11.32 11.32l-96 96a8 8 0 0 1-11.32-11.32M128 88a63.9 63.9 0 0 1 20.44 3.33a8 8 0 1 0 5.11-15.16a80 80 0 0 0-105.06 84.71a8 8 0 0 0 7.94 7.12c.29 0 .59 0 .89-.05a8 8 0 0 0 7.07-8.83A65 65 0 0 1 64 152a64.07 64.07 0 0 1 64-64m99.74 13a8 8 0 0 0-14.24 7.3a96.27 96.27 0 0 1 5 75.71l-181.1-.07A96.24 96.24 0 0 1 128 56h.88a95 95 0 0 1 42.82 10.5a8 8 0 1 0 7.3-14.23a112 112 0 0 0-156.66 137A16.07 16.07 0 0 0 37.46 200h181.07a16 16 0 0 0 15.11-10.71a112.35 112.35 0 0 0-5.9-88.3Z"/></svg>'},{slug:"ph:speedometer-bold",label:"Speedometer Bold",keywords:["speedometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="m119.51 143.51l88-88a12 12 0 1 1 17 17l-88 88a12 12 0 1 1-17-17m14.23-43.2a12 12 0 1 0 2.62-23.85A75 75 0 0 0 128 76a76.08 76.08 0 0 0-76 76a12 12 0 0 0 24 0a52.06 52.06 0 0 1 52-52a55 55 0 0 1 5.74.31m101.54 7.5a12 12 0 0 0-22.19 9.19a92.47 92.47 0 0 1 2.58 63H40.34A92.23 92.23 0 0 1 128 60h.84a91.4 91.4 0 0 1 34.2 6.91a12 12 0 0 0 9.14-22.19A116.07 116.07 0 0 0 18.57 190.58A20.09 20.09 0 0 0 37.46 204h181.07a20.06 20.06 0 0 0 18.88-13.38a116.4 116.4 0 0 0-2.13-82.81"/></svg>'},{slug:"material-symbols:radar",label:"Radar",keywords:["radar"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8.1 21.213q-1.825-.788-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22t-3.9-.788M12 20q1.4 0 2.638-.437t2.262-1.238L15.475 16.9q-.725.525-1.612.813T12 18q-2.5 0-4.25-1.75T6 12t1.75-4.25T12 6t4.25 1.75T18 12q0 .975-.3 1.875t-.825 1.625l1.425 1.425q.8-1.025 1.25-2.275T20 12q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-4q.55 0 1.063-.137t.962-.413L12.5 13.925q-.125.05-.25.063T12 14q-.825 0-1.412-.587T10 12t.588-1.412T12 10t1.413.588T14 12q0 .15-.012.288t-.063.262l1.5 1.5q.275-.45.425-.962T16 12q0-1.65-1.175-2.825T12 8T9.175 9.175T8 12t1.175 2.825T12 16"/></svg>'},{slug:"mdi:radar",label:"Radar",keywords:["radar"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m19.07 4.93l-1.41 1.41A8 8 0 0 1 20 12a8 8 0 0 1-8 8a8 8 0 0 1-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12a6 6 0 0 0 6 6a6 6 0 0 0 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12a4 4 0 0 1-4 4a4 4 0 0 1-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.74-.4-1.38-1-1.72V2h-1A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-2.76-1.12-5.26-2.93-7.07"/></svg>'},{slug:"solar:radar-bold",label:"Radar Bold",keywords:["radar"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-8.642-5.07a5.2 5.2 0 0 0-2.232-.107a.75.75 0 0 1-.252-1.478a6.749 6.749 0 1 1-4.519 2.953c.453-.69 1.358-.733 1.92-.279l4.197 3.398a.75.75 0 1 1-.944 1.166L7.49 9.313a5.249 5.249 0 1 0 5.87-2.384" clip-rule="evenodd"/></svg>'},{slug:"mdi:compass",label:"Compass",keywords:["compass"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14.19 14.19L6 18l3.81-8.19L18 6m-6-4A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 8.9a1.1 1.1 0 0 0-1.1 1.1a1.1 1.1 0 0 0 1.1 1.1a1.1 1.1 0 0 0 1.1-1.1a1.1 1.1 0 0 0-1.1-1.1"/></svg>'},{slug:"mdi:compass-outline",label:"Compass Outline",keywords:["compass"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m7 17l3.2-6.8L17 7l-3.2 6.8zm5-5.9a.9.9 0 0 0-.9.9a.9.9 0 0 0 .9.9a.9.9 0 0 0 .9-.9a.9.9 0 0 0-.9-.9M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"/></svg>'},{slug:"solar:compass-bold",label:"Compass Bold",keywords:["compass"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1.956-7.905c-.193.17-.44.268-.932.465c-2.31.924-3.465 1.386-4.124.938a1.5 1.5 0 0 1-.398-.398c-.448-.66.014-1.814.938-4.124c.197-.493.295-.74.465-.933q.065-.073.139-.138c.193-.17.44-.268.932-.465c2.31-.924 3.464-1.386 4.124-.938a1.5 1.5 0 0 1 .398.398c.448.66-.014 1.814-.938 4.124c-.197.493-.295.739-.465.932q-.065.075-.139.139" clip-rule="evenodd"/></svg>'},{slug:"tabler:map-pin",label:"Map Pin",keywords:["map-pin"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0"/><path d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0"/></g></svg>'},{slug:"tabler:map-pin-filled",label:"Map Pin Filled",keywords:["map-pin"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21l-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135l-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6"/></svg>'},{slug:"mingcute:map-pin-fill",label:"Map Pin Fill",keywords:["map-pin"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M7 7a5 5 0 1 1 6 4.9V17a1 1 0 1 1-2 0v-5.1A5 5 0 0 1 7 7m2.489 9.1a1 1 0 0 1-.838 1.14c-1.278.195-2.293.489-2.96.815c-.335.164-.534.313-.637.422l-.021.023c.033.039.09.096.19.169c.28.207.749.435 1.418.644C7.968 19.728 9.863 20 12 20s4.032-.272 5.359-.687c.67-.209 1.138-.437 1.418-.644c.1-.073.157-.13.19-.169l-.021-.023c-.103-.109-.302-.258-.637-.422c-.667-.326-1.682-.62-2.96-.815a1 1 0 1 1 .301-1.977c1.388.21 2.622.547 3.539.996c.457.224.884.5 1.208.842c.33.347.603.82.603 1.399c0 .811-.524 1.4-1.034 1.777c-.53.392-1.233.702-2.01.945c-1.57.49-3.674.778-5.956.778s-4.387-.288-5.955-.778c-.778-.243-1.48-.553-2.01-.945C3.524 19.9 3 19.311 3 18.5c0-.58.273-1.052.603-1.4c.325-.342.751-.617 1.208-.84c.917-.45 2.152-.786 3.538-.997a1 1 0 0 1 1.14.838Z"/></g></svg>'},{slug:"mdi:ruler",label:"Ruler",keywords:["ruler"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m1.39 18.36l1.77-1.76L4.58 18l1.06-1.05l-1.42-1.41l1.42-1.42l2.47 2.48l1.06-1.06l-2.47-2.48l1.41-1.41l1.42 1.41L10.59 12l-1.42-1.41l1.42-1.42l2.47 2.48l1.06-1.06l-2.47-2.48l1.41-1.41l1.41 1.41l1.07-1.06l-1.42-1.41l1.42-1.42L18 6.7l1.07-1.06l-2.47-2.48l1.76-1.77l4.25 4.25L5.64 22.61z"/></svg>'},{slug:"solar:ruler-bold",label:"Ruler Bold",keywords:["ruler"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 15.616c0 .847.682 1.529 2.045 2.892l1.447 1.447C6.855 21.318 7.537 22 8.384 22s1.53-.682 2.893-2.045l8.678-8.678C21.318 9.913 22 9.23 22 8.384s-.682-1.529-2.045-2.892l-1.447-1.447C17.145 2.682 16.463 2 15.616 2c-.754 0-1.376.54-2.464 1.618q.045.033.085.073l1.415 1.415a.75.75 0 1 1-1.061 1.06l-1.414-1.414a1 1 0 0 1-.074-.086L11.03 5.739q.045.033.086.074l2.121 2.121a.75.75 0 1 1-1.06 1.06l-2.122-2.12a1 1 0 0 1-.074-.087L8.91 7.86q.044.033.086.074l1.414 1.414a.75.75 0 0 1-1.06 1.06L7.933 8.996a1 1 0 0 1-.074-.086L6.787 9.98q.046.033.086.074l2.122 2.122a.75.75 0 0 1-1.061 1.06l-2.121-2.121a1 1 0 0 1-.074-.086l-1.073 1.073q.045.032.086.074l1.414 1.414a.75.75 0 0 1-1.06 1.06L3.69 13.238a1 1 0 0 1-.073-.085C2.539 14.24 2 14.862 2 15.616"/></svg>'},{slug:"solar:ruler-bold-duotone",label:"Ruler Bold Duotone",keywords:["ruler"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 15.616c0 .847.682 1.529 2.045 2.892l1.447 1.447C6.855 21.318 7.537 22 8.384 22s1.53-.682 2.893-2.045l8.678-8.678C21.318 9.913 22 9.23 22 8.384s-.682-1.529-2.045-2.892l-1.447-1.447C17.145 2.682 16.463 2 15.616 2c-.754 0-1.376.54-2.464 1.618l-1.05 1.048l-1.072 1.073l-1.05 1.048L8.91 7.86L7.86 8.909L6.788 9.98L5.74 11.03l-1.073 1.073l-1.048 1.049C2.539 14.24 2 14.862 2 15.616" opacity=".5"/><path fill="currentColor" d="M13.238 3.691a1 1 0 0 0-.086-.073l-1.049 1.048q.033.045.074.086l1.414 1.414a.75.75 0 0 0 1.06-1.06zm-2.122 2.122a1 1 0 0 0-.086-.074L9.982 6.787q.033.045.074.086l2.121 2.122a.75.75 0 0 0 1.06-1.061zM8.995 7.934a1 1 0 0 0-.086-.074L7.86 8.908q.033.046.074.087l1.415 1.414a.75.75 0 1 0 1.06-1.06zm-2.121 2.121a1 1 0 0 0-.086-.074L5.739 11.03q.033.045.074.086l2.121 2.121a.75.75 0 1 0 1.061-1.06zm-2.122 2.122a1 1 0 0 0-.086-.075l-1.048 1.05q.033.045.074.085l1.414 1.414a.75.75 0 1 0 1.06-1.06z"/></svg>'},{slug:"material-symbols:settings",label:"Settings",keywords:["settings"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5"/></svg>'},{slug:"material-symbols:settings-outline",label:"Settings Outline",keywords:["settings"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zM11 20h1.975l.35-2.65q.775-.2 1.438-.587t1.212-.938l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.737T17.5 12t-.05-.787t-.175-.738l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.962t-1.438-.588L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.963t1.437.587zm1.05-4.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5M12 12"/></svg>'},{slug:"material-symbols:settings-outline-rounded",label:"Settings Outline Rounded",keywords:["settings"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.825 22q-.675 0-1.162-.45t-.588-1.1L8.85 18.8q-.325-.125-.612-.3t-.563-.375l-1.55.65q-.625.275-1.25.05t-.975-.8l-1.175-2.05q-.35-.575-.2-1.225t.675-1.075l1.325-1Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337l-1.325-1Q2.675 9.9 2.525 9.25t.2-1.225L3.9 5.975q.35-.575.975-.8t1.25.05l1.55.65q.275-.2.575-.375t.6-.3l.225-1.65q.1-.65.588-1.1T10.825 2h2.35q.675 0 1.163.45t.587 1.1l.225 1.65q.325.125.613.3t.562.375l1.55-.65q.625-.275 1.25-.05t.975.8l1.175 2.05q.35.575.2 1.225t-.675 1.075l-1.325 1q.025.175.025.338v.674q0 .163-.05.338l1.325 1q.525.425.675 1.075t-.2 1.225l-1.2 2.05q-.35.575-.975.8t-1.25-.05l-1.5-.65q-.275.2-.575.375t-.6.3l-.225 1.65q-.1.65-.587 1.1t-1.163.45zM11 20h1.975l.35-2.65q.775-.2 1.438-.587t1.212-.938l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.737T17.5 12t-.05-.787t-.175-.738l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.962t-1.438-.588L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.963t1.437.587zm1.05-4.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.487 1.025T8.55 12t1.013 2.475T12.05 15.5M12 12"/></svg>'},{slug:"tabler:tool",label:"Tool",keywords:["tool"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10h3V7L6.5 3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1-3 3l-6-6a6 6 0 0 1-8-8z"/></svg>'},{slug:"mingcute:tool-fill",label:"Tool Fill",keywords:["tool"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M7.527 2.657a7.001 7.001 0 0 1 8.26 9.347l4.599 3.893a3.3 3.3 0 1 1-4.651 4.65l-3.891-4.597a7.001 7.001 0 0 1-9.35-8.26a1.01 1.01 0 0 1 1.72-.432l3.045 3.307l2.297-.845l.847-2.3l-3.309-3.04a1.01 1.01 0 0 1 .433-1.723"/></g></svg>'},{slug:"mingcute:tool-line",label:"Tool Line",keywords:["tool"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M6.798 2.884a7.002 7.002 0 0 1 9.294 8.565l4.394 3.718a3.76 3.76 0 1 1-5.3 5.3l-3.717-4.394a7.002 7.002 0 0 1-8.565-9.295c.358-.894 1.48-1.007 2.063-.373L8.17 9.883l1.446-.288l.29-1.449l-3.48-3.198c-.634-.583-.522-1.706.373-2.064ZM8.805 4.42l2.763 2.54c.322.296.466.738.38 1.165l-.47 2.354a1.25 1.25 0 0 1-.982.981l-2.35.467a1.25 1.25 0 0 1-1.164-.38L4.438 8.785a5.002 5.002 0 0 0 6.804 5.25a1.26 1.26 0 0 1 1.422.355l4.05 4.786a1.76 1.76 0 1 0 2.48-2.48l-4.785-4.05a1.26 1.26 0 0 1-.355-1.422a5 5 0 0 0-5.25-6.804Z"/></g></svg>'},{slug:"mdi:wrench",label:"Wrench",keywords:["wrench"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9c-2-2-5-2.4-7.4-1.3L9 6L6 9L1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4"/></svg>'},{slug:"mdi:wrench-outline",label:"Wrench Outline",keywords:["wrench"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m22.61 19l-9.08-9.09c.93-2.34.47-5.1-1.44-7C9.79.61 6.21.4 3.66 2.26L7.5 6.11L6.08 7.5L2.25 3.69C.39 6.23.6 9.82 2.9 12.11c1.86 1.86 4.57 2.35 6.89 1.48l9.11 9.11c.39.39 1.02.39 1.41 0l2.3-2.3c.39-.4.39-1.01 0-1.4m-3 1.59l-9.46-9.46c-.61.45-1.29.72-2 .82c-1.36.2-2.79-.21-3.83-1.25C3.37 9.76 2.93 8.5 3 7.26l3.09 3.09l4.24-4.24L7.24 3c1.26-.05 2.49.39 3.44 1.33a4.47 4.47 0 0 1 1.24 3.96a4.35 4.35 0 0 1-.88 1.96l9.46 9.45z"/></svg>'},{slug:"ri:wrench-fill",label:"Wrench Fill",keywords:["wrench"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19.249 6.872a1 1 0 0 1 1.645.36a7.001 7.001 0 0 1-8.912 9.037l-4.013 4.013a3 3 0 1 1-4.243-4.243l4.013-4.013a7 7 0 0 1 9.025-8.917a1 1 0 0 1 .36 1.645L14.768 7.11a1.5 1.5 0 0 0 2.121 2.122z"/></svg>'},{slug:"mdi:screwdriver",label:"Screwdriver",keywords:["screwdriver"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18 1.83c-.5 0-1 .17-1.41.58L8 11l1.5 1.5L6 16H4l-2 4l2 2l4-2v-2l3.5-3.5L13 16l8.59-8.59c.62-.91.78-2.04 0-2.82l-2.18-2.18A1.95 1.95 0 0 0 18 1.83M18 4l2 2l-7 7l-2-2z"/></svg>'}],cf="./",fc=vg.map(a=>({slug:a.slug,label:a.label,keywords:a.keywords,svg:a.svg})),bg=Object.fromEntries(fc.map(a=>[a.slug,a.svg])),Gl="grommet-icons:raspberry";function Ds(a){return`data:image/svg+xml,${encodeURIComponent(a)}`}function uf(a){return bg[a]??null}const yg=`${cf}art/logo.png`,wg=`${cf}art/Teknologiskolen_logo.png`,xg=`${cf}art/logo_teknologiskolen_white.png`,kg={menu:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]}),user:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),settings:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),info:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),u.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),help:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),u.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),debugger:u.jsx(u.Fragment,{children:u.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),edit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),u.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),picoIde:u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),u.jsx("path",{d:"M8 9l-3 3 3 3"}),u.jsx("path",{d:"M16 9l3 3-3 3"}),u.jsx("line",{x1:"13",y1:"8",x2:"11",y2:"16"})]}),exit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),plus:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),delete:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),u.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),power:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),u.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),save:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),u.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),u.jsx("polyline",{points:"7 3 7 8 15 8"})]}),upload:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),u.jsx("polyline",{points:"17 8 12 3 7 8"}),u.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),refresh:u.jsxs(u.Fragment,{children:[u.jsx("polyline",{points:"23 4 23 10 17 10"}),u.jsx("polyline",{points:"1 20 1 14 7 14"}),u.jsx("path",{d:"M3.5 9a9 9 0 0 1 14.9-3.4L23 10"}),u.jsx("path",{d:"M20.5 15a9 9 0 0 1-14.9 3.4L1 14"})]}),package:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),u.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),u.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),back:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),u.jsx("polyline",{points:"12 19 5 12 12 5"})]}),chevronLeft:u.jsx("polyline",{points:"15 6 9 12 15 18"}),chevronRight:u.jsx("polyline",{points:"9 6 15 12 9 18"})};function Pt({name:a,size:l=24,className:o}){return u.jsx("svg",{width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:o,"aria-hidden":"true",children:kg[a]})}let ue=null,ys=null,Om=0,al=!1;function Sg(){return new Date().toLocaleTimeString("da-DK",{hour12:!1})}function Lm(a){return new Promise(l=>setTimeout(l,a))}function Bd(a,l){const o=l.userID.toLowerCase();return a.map(s=>{if(!s.ownerID)return s;const d=s.ownerID.toLowerCase()===o;return{...s,isOwnedByMe:d,ownerName:d?l.username:s.ownerName}})}function zd(a,l,o=!1){const s=a.name?Ah(a.name):"";return o&&s?s:l!=null&&l.deviceName?l.deviceName:s||"Pico"}function Eg(a){return Object.fromEntries(a.filter(l=>l.type==="toggle").map(l=>[l.name,!!l.toggleInitial]))}function Bm(a,l){const o=Eg(a);for(const s of a)s.type==="toggle"&&l[s.name]!==void 0&&(o[s.name]=l[s.name]);return o}const se=I2((a,l)=>{function o(m,_){a(b=>({logs:[{level:m,message:_,time:Sg()},...b.logs].slice(0,200)}))}function s(m){ys&&clearTimeout(ys),Om+=1,a({toast:{message:m,id:Om}}),ys=setTimeout(()=>a({toast:null}),4500)}function d(m=null){a({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},plotSeries:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:m})}function h(m){return{deviceID:m.deviceID,deviceName:m.deviceName,ownerID:m.ownerID,deviceIcon:m.icon,canOthersConnect:m.canOthersConnect,canOthersEdit:m.canOthersEdit,canOthersEditCode:m.canOthersEditCode,isOwnedByMe:m.isOwnedByMe,ownerName:m.ownerName}}function g(m){const{screen:_,active:b,picoIdeOrigin:k}=l();if(al){al=!1;return}m&&(o("warning",m),s(m)),(_==="control"||_==="connection"||_==="create"||_==="ide"&&k==="control")&&d(b?h(b):null)}return ue=new gg({onProgress:(m,_)=>a({progress:{value:m,label:_}}),onLog:(m,_)=>o(m,_),onRadar:(m,_,b)=>{const k=Date.now(),x={id:`${k}-${Math.random().toString(36).slice(2)}`,angle:_,distance:b,createdAt:k};a(E=>{const D=E.layout.find(H=>H.type==="radar"&&H.name===m),O=(D==null?void 0:D.radarFadeMs)??1200,F=E.radarPings[m]??[];return{radarPings:{...E.radarPings,[m]:[...F.filter(H=>k-H.createdAt<=O),x].slice(-80)}}})},onText:(m,_)=>{a(b=>({textValues:{...b.textValues,[m]:_}}))},onToggleState:(m,_)=>{a(b=>({toggleValues:{...b.toggleValues,[m]:_}}))},onSliderState:(m,_)=>{a(b=>({sliderValues:{...b.sliderValues,[m]:_}}))},onPlot:(m,_,b)=>{const k=Date.now(),x={id:`${k}-${Math.random().toString(36).slice(2)}`,value:_,createdAt:k,label:b};a(E=>{const D=E.plotSeries[m]??[];return{plotSeries:{...E.plotSeries,[m]:[...D,x].slice(-1e3)}}})},onPlotClear:m=>{a(_=>({plotSeries:{..._.plotSeries,[m]:[]}}))},onDisconnect:m=>g(m)}),{screen:"splash",splashTarget:null,user:null,savedDevices:[],connecting:null,progress:{value:0,label:""},toast:null,confirmDialog:null,connectionLost:null,active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},plotSeries:{},logs:[],sideMenuOpen:!1,debuggerOpen:!1,menuPage:null,editMode:!1,dashboardPage:"mine",picoIdeOrigin:"dashboard",init:()=>{const m=F2(),_=m?Bd(gc(),m):gc();m&&ii(_),a({user:m,savedDevices:_,splashTarget:m?"dashboard":"intro"})},finishSplash:()=>{const m=l().splashTarget;a({screen:m??"intro"})},createUser:m=>{const _=m.trim();if(!_)return;const b={username:_,userID:P2()};Rd(b),a({user:b,screen:"dashboard"})},findDevice:async m=>{try{const _=await tg(m==null?void 0:m.deviceName);await l().connectToDevice(_,m,!0)}catch(_){_ instanceof Error&&_.name!=="NotFoundError"&&o("error",_.message)}},connectToDevice:async(m,_,b,k)=>{var D,O,F;const x=l().user;if(!x||!ue)return!1;al=!1;const E=l().savedDevices.find(H=>H.deviceID===m.id)??_;a({screen:"connection",connecting:{name:zd(m,E,b),icon:(E==null?void 0:E.deviceIcon)??Gl},progress:{value:0,label:"Forbinder..."},sliderValues:{},radarPings:{},textValues:{},plotSeries:{}});try{await ue.connect(m);const H=await ue.runHandshake(x),P=m.id,B=(H.kind==="owned"||H.kind==="unowned")&&((D=H.deviceName)==null?void 0:D.trim())||zd(m,E,b);if(a(te=>te.connecting?{connecting:{...te.connecting,name:B}}:{}),H.kind==="denied"){const pe=`Du kan ikke forbinde, fordi ${((O=H.ownerName)==null?void 0:O.trim())||((F=E==null?void 0:E.ownerName)==null?void 0:F.trim())||"ejeren"} ejer enheden og ikke tillader besøgende at forbinde.`;return o("warning",pe),s(pe),a({screen:"dashboard",connecting:null}),await ue.disconnect(),!0}if(H.kind==="unowned")return a({active:{deviceID:P,deviceName:B,ownerID:x.userID,icon:Gl,canEdit:!0,canEditCode:!0,canOthersConnect:!1,canOthersEdit:!1,canOthersEditCode:!1,isOwnedByMe:!0,ownerName:x.username,gridCols:ci,gridRows:Cs},screen:"create"}),!0;const re={deviceID:P,deviceName:B,ownerID:H.ownerID,deviceIcon:H.icon||(E==null?void 0:E.deviceIcon)||Gl,canOthersConnect:H.canOthersConnect,canOthersEdit:H.canOthersEdit,canOthersEditCode:H.canOthersEditCode,isOwnedByMe:H.isOwnedByMe,ownerName:H.isOwnedByMe?x.username:H.ownerName??(E==null?void 0:E.ownerName)};a({savedDevices:Ad(re)});const q=await ue.requestLayout(),oe=Cm(q),ge=Dm(q);return a({layout:ge,toggleValues:Bm(ge,l().toggleValues),active:{deviceID:P,deviceName:B,ownerID:H.ownerID,icon:H.icon||(E==null?void 0:E.deviceIcon)||Gl,canEdit:H.canEdit,canEditCode:H.canEditCode,canOthersConnect:H.canOthersConnect,canOthersEdit:H.canOthersEdit,canOthersEditCode:H.canOthersEditCode,isOwnedByMe:H.isOwnedByMe,ownerName:H.isOwnedByMe?x.username:H.ownerName??(E==null?void 0:E.ownerName),gridCols:oe.cols,gridRows:oe.rows},screen:"control",connecting:null,connectionLost:null}),!0}catch(H){const P=H instanceof Error?H.message:"Forbindelsen mislykkedes.";return k!=null&&k.silent?o("info",P):(o("error",P),s("Forbindelsen mislykkedes.")),a({screen:"dashboard",connecting:null}),await ue.disconnect().catch(()=>{}),!1}},finishCreate:async(m,_,b,k,x,E)=>{const{user:D,active:O}=l();if(!(!D||!O||!ue))try{ue.setBusy(!0),await ue.create(D,m,_,b,k,x,E),ue.setBusy(!1);const F={deviceID:O.deviceID,deviceName:O.deviceName,ownerID:D.userID,deviceIcon:m,canOthersConnect:_,canOthersEdit:_&&b,canOthersEditCode:_&&k,isOwnedByMe:!0,ownerName:D.username};a({savedDevices:Ad(F)});const H=await ue.requestLayout(),P=Cm(H),B=Dm(H);a({layout:B,toggleValues:Bm(B,l().toggleValues),active:{...O,ownerID:D.userID,icon:m,canEdit:!0,canEditCode:!0,canOthersConnect:_,canOthersEdit:_&&b,canOthersEditCode:_&&k,ownerName:D.username,gridCols:P.cols,gridRows:P.rows},screen:"control"})}catch(F){ue.setBusy(!1);const H=F instanceof Error?F.message:"Oprettelse mislykkedes.";o("error",H),s("Oprettelse mislykkedes."),a({screen:"dashboard"}),await ue.disconnect().catch(()=>{})}},saveDeviceSettings:async(m,_,b,k,x,E)=>{const{active:D,user:O}=l();if(!(!D||!ue||!D.isOwnedByMe))try{ue.setBusy(!0),await ue.updateDeviceSettings(m,_,b,k,x,E,O==null?void 0:O.username);const F={...D,icon:m,canEdit:!0,canEditCode:!0,canOthersConnect:_,canOthersEdit:_&&b,canOthersEditCode:_&&k,ownerName:(O==null?void 0:O.username)??D.ownerName,gridCols:x,gridRows:E},H={deviceID:D.deviceID,deviceName:D.deviceName,ownerID:D.ownerID??(O==null?void 0:O.userID),deviceIcon:m,canOthersConnect:_,canOthersEdit:_&&b,canOthersEditCode:_&&k,isOwnedByMe:!0,ownerName:(O==null?void 0:O.username)??D.ownerName};a({active:F,savedDevices:Ad(H)}),s("Enhedsindstillinger gemt.")}catch(F){o("error",F instanceof Error?F.message:"Kunne ikke gemme enhedsindstillinger."),s("Kunne ikke gemme enhedsindstillinger.")}finally{ue.setBusy(!1)}},cancelCreate:async()=>{ue&&await ue.disconnect().catch(()=>{}),a({screen:"dashboard",active:null,connecting:null})},disconnect:async()=>{al=!0,d(null),ue&&await ue.disconnect().catch(()=>{}),al=!1},removeSavedDevice:m=>{a({savedDevices:K2(m)})},clearSavedDevices:()=>{$2(),a({savedDevices:[]}),s("Gemte enheder ryddet.")},resetApplicationData:async()=>{al=!0,ue!=null&&ue.connected&&await ue.disconnect().catch(()=>{}),Y2(),window.location.reload()},updateUsername:m=>{const _=l().user,b=m.trim();if(!_||!b)return;const k={..._,username:b};Rd(k),a(x=>{var D;const E=Bd(x.savedDevices,k);return ii(E),{user:k,active:(D=x.active)!=null&&D.isOwnedByMe?{...x.active,ownerName:b}:x.active,savedDevices:E}}),s("Brugernavn gemt.")},createOwnerPairingCode:()=>{const m=l().user;return m?Tg(m):null},applyOwnerPairingCode:m=>{var b;const _=Mg(m,(b=l().user)==null?void 0:b.username);return _?(Rd(_),a(k=>{var E,D,O;const x=Bd(k.savedDevices,_);return ii(x),{user:_,active:((D=(E=k.active)==null?void 0:E.ownerID)==null?void 0:D.toLowerCase())===_.userID.toLowerCase()||(O=k.active)!=null&&O.isOwnedByMe?{...k.active,isOwnedByMe:!0,ownerID:_.userID,ownerName:_.username}:k.active,savedDevices:x}}),s("Ejerkoden er gemt. Denne browser bruger nu samme ejer-GUID."),!0):(s("Ejerkoden kunne ikke læses."),!1)},openPicoIde:()=>{const m=l().screen==="control"&&!!(ue!=null&&ue.connected),_=l().active;if(m&&_&&!_.isOwnedByMe&&!_.canEditCode){s("Ejeren tillader ikke, at gæster åbner Kodeværkstedet på denne enhed."),o("warning","Kodeværkstedet er blokeret, fordi ejeren ikke tillader gæster at redigere kode."),a({sideMenuOpen:!1});return}a(b=>({screen:"ide",picoIdeOrigin:m?"control":"dashboard",active:m?b.active:null,layout:m?b.layout:[],sliderValues:m?b.sliderValues:{},toggleValues:m?b.toggleValues:{},radarPings:m?b.radarPings:{},textValues:m?b.textValues:{},plotSeries:m?b.plotSeries:{},editMode:!1,sideMenuOpen:!1,menuPage:null}))},closePicoIde:()=>{const{picoIdeOrigin:m,active:_}=l();a({screen:m==="control"&&_&&(ue!=null&&ue.connected)?"control":"dashboard",sideMenuOpen:!1,menuPage:null,picoIdeOrigin:"dashboard"})},isBleConnected:()=>!!(ue!=null&&ue.connected),bleListFiles:async()=>ue!=null&&ue.connected?ue.listFiles("/"):[],bleReadText:async(m,_,b)=>{if(!(ue!=null&&ue.connected))throw new Error("Ingen BLE-forbindelse.");return ue.readText(m,_,b)},bleWriteText:async(m,_,b)=>{if(!(ue!=null&&ue.connected))throw new Error("Ingen BLE-forbindelse.");await ue.writeText(m,_,b)},bleDeleteFile:async m=>{if(!(ue!=null&&ue.connected))throw new Error("Ingen BLE-forbindelse.");await ue.deleteFile(m)},bleRestart:async()=>{ue!=null&&ue.connected&&await ue.restart()},bleRestartAndReconnect:async(m="control")=>{const{active:_}=l();if(!(ue!=null&&ue.connected)||!_)return!1;const b={deviceID:_.deviceID,deviceName:_.deviceName,ownerID:_.ownerID,deviceIcon:_.icon,canOthersConnect:_.canOthersConnect,canOthersEdit:_.canOthersEdit,canOthersEditCode:_.canOthersEditCode,isOwnedByMe:_.isOwnedByMe,ownerName:_.ownerName};al=!0,o("info","Genstarter Pico og forsøger automatisk genforbindelse...");try{await ue.restart()}catch{}a({progress:{value:15,label:"Venter på Pico genstart..."},connecting:{name:b.deviceName,icon:b.deviceIcon}});for(let k=0;k<12&&(ue!=null&&ue.connected);k+=1)await Lm(250);ue!=null&&ue.connected||(al=!1);for(let k=1;k<=8;k+=1){await Lm(k===1?1200:850);try{const E=(await Ch()).find(O=>O.id===b.deviceID);if(!E){a({progress:{value:Math.min(88,20+k*8),label:"Venter på browser-tilladelse..."}});continue}if(a({progress:{value:Math.min(92,24+k*8),label:`Genforbinder (${k}/8)...`}}),!await l().connectToDevice(E,b,void 0,{silent:!0}))continue;return m==="ide"&&a(O=>({screen:"ide",picoIdeOrigin:"control",active:O.active,layout:O.layout,sliderValues:O.sliderValues,toggleValues:O.toggleValues,radarPings:O.radarPings,textValues:O.textValues,plotSeries:O.plotSeries,editMode:!1,sideMenuOpen:!1,menuPage:null})),s("Pico genforbundet."),!0}catch(x){o("warning",x instanceof Error?x.message:"Genforbindelse mislykkedes.")}}return s("Kunne ikke genforbinde automatisk. Vælg Picoen igen."),al=!1,a({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},plotSeries:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:b}),!1},reconnectLostDevice:async()=>{var _;const m=l().connectionLost;if(m){a({connectionLost:null});try{if((_=navigator.bluetooth)!=null&&_.getDevices){const k=(await navigator.bluetooth.getDevices()).find(x=>x.id===m.deviceID);if(k&&await l().connectToDevice(k,m,void 0,{silent:!0}))return}}catch{}o("info",`Genforbind: åbner enhedsvælger for ${m.deviceName}.`),await l().findDevice(m)}},dismissConnectionLost:()=>a({connectionLost:null}),sendButton:(m,_)=>ue==null?void 0:ue.enqueueButton(m,_),sendSlider:(m,_)=>{a(b=>({sliderValues:{...b.sliderValues,[m]:_}})),ue==null||ue.enqueueSlider(m,_)},sendToggle:(m,_)=>{a(b=>({toggleValues:{...b.toggleValues,[m]:_}})),ue==null||ue.enqueueToggle(m,_)},sendJoystick:(m,_,b)=>ue==null?void 0:ue.enqueueJoystick(m,_,b),sendDpad:(m,_,b)=>ue==null?void 0:ue.enqueueDpad(m,_,b),saveLayout:async m=>{if(ue)try{ue.setBusy(!0),await ue.saveLayout(m),a({layout:m,editMode:!1})}catch(_){o("error",_ instanceof Error?_.message:"Kunne ikke gemme layout.")}finally{ue.setBusy(!1)}},setEditMode:m=>a({editMode:m,sideMenuOpen:!1,menuPage:null}),setDashboardPage:m=>a({dashboardPage:m}),toggleSideMenu:m=>a(_=>({sideMenuOpen:m??!_.sideMenuOpen})),toggleDebugger:m=>a(_=>({debuggerOpen:m??!_.debuggerOpen,sideMenuOpen:!1,menuPage:null})),openMenuPage:m=>a({menuPage:m,sideMenuOpen:!1}),closeMenuPage:()=>a({menuPage:null}),clearLogs:()=>a({logs:[]}),log:(m,_)=>o(m,_),askConfirm:m=>a({confirmDialog:m}),closeConfirm:()=>a({confirmDialog:null}),showToast:m=>s(m),dismissToast:()=>{ys&&clearTimeout(ys),a({toast:null})}}}),Yd="PKP-EJER";function Tg(a){var s;const l=a.userID.toLowerCase(),o=((s=l.match(/.{1,4}/g))==null?void 0:s.join("-"))??l;return`${Yd}-${o}-${Bh(l)}`}function Mg(a,l="Ejer"){const o=a.trim().toUpperCase().replace(/\s+/g,"-");if(!o.startsWith(`${Yd}-`))return null;const s=o.slice(Yd.length+1).split("-").filter(Boolean),d=s.pop()??"",h=s.join("").toLowerCase();return!/^[a-f0-9]{32}$/.test(h)||d!==Bh(h)?null:{userID:h,username:l.trim()||"Ejer"}}function Bh(a){let l=2166136261;for(const o of a.toLowerCase())l^=o.charCodeAt(0),l=Math.imul(l,16777619)>>>0;return(l%65536).toString(16).toUpperCase().padStart(4,"0")}const jg=1850,Ng=450;function Rg(){const a=se(s=>s.splashTarget),l=se(s=>s.finishSplash),o=a?"splash-screen-animation splash-ready":"splash-pending";return j.useEffect(()=>{if(!a)return;const d=window.matchMedia("(prefers-reduced-motion: reduce)").matches?Ng:jg,h=window.setTimeout(l,d);return()=>window.clearTimeout(h)},[l,a]),u.jsxs("div",{className:`screen splash-screen ${o}`,"aria-label":"Teknologiskolen starter",children:[u.jsx("div",{className:"splash-white-cover"}),u.jsx("div",{className:"splash-red-field"}),u.jsx("div",{className:"splash-brand","aria-hidden":"true",children:u.jsx("div",{className:"splash-mark splash-logo-shell",children:u.jsx("img",{className:"splash-logo",src:yg,alt:""})})}),u.jsx("span",{className:"sr-only",children:"Teknologiskolen"})]})}function zm(){const a=se(d=>d.createUser),[l,o]=j.useState(""),s=l.length>0;return u.jsxs("div",{className:"screen intro",children:[u.jsxs("div",{className:"intro-header",children:[u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"}),u.jsx("img",{className:"intro-header-image",src:wg,alt:"Teknologiskolen"}),u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"})]}),u.jsxs("div",{className:"intro-body",children:[u.jsx("p",{children:"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Find selv på et navn, du vil vises som i appen. Det er ikke et login, og navnet gemmes kun i denne browser."}),u.jsxs("div",{className:`field ${s?"filled":""}`,children:[u.jsx("input",{id:"username",value:l,onChange:d=>o(d.target.value),maxLength:32,autoComplete:"off","aria-label":"Brugernavn"}),u.jsx("label",{htmlFor:"username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!s,onClick:()=>a(l),children:"Fortsæt"})]}),u.jsx("span",{className:"version",children:As})]})}function df({title:a,onMenu:l}){return u.jsx("header",{className:"topbar",children:u.jsxs("div",{className:"topbar-inner",children:[u.jsx("h1",{children:a}),u.jsx("button",{className:"iconbtn",type:"button",onClick:l,"aria-label":"Menu",children:u.jsx(Pt,{name:"menu"})})]})})}var zh=Nh();function qt({title:a,onClose:l,children:o,closeVariant:s="plain"}){const d=s==="circle",h=j.useRef(!1);return zh.createPortal(u.jsx("div",{className:"modal-root",onPointerDown:g=>{h.current=g.target===g.currentTarget},onClick:g=>{g.target===g.currentTarget&&h.current&&l(),h.current=!1},children:u.jsxs("div",{className:"modal",onClick:g=>g.stopPropagation(),children:[u.jsxs("div",{className:"modal-head",children:[u.jsx("h3",{children:a}),u.jsx("button",{className:`iconbtn ${d?"modal-close-circle":""}`,type:"button",onClick:l,"aria-label":"Luk",children:u.jsx(Pt,{name:d?"delete":"close",size:d?30:24})})]}),u.jsx("div",{className:"modal-body",children:o})]})}),document.body)}const ff="https://api.iconify.design",Ag=["tabler","lucide","ph","material-symbols","solar","mingcute","ri","mdi"],Uh="pkp.iconcache.";function Cg(a){const[l,...o]=a.split(":");return`${ff}/${l}/${encodeURIComponent(o.join(":"))}.svg`}function qh(a){try{return localStorage.getItem(Uh+a)}catch{return null}}function Hh(a,l){try{localStorage.setItem(Uh+a,l)}catch{}}function Dg(a){return a.replace(/\s(width|height)="[^"]*"/g,"").trim()}async function Vh(a){const l=qh(a);if(l)return l;const[o,...s]=a.split(":"),d=s.join(":");if(!o||!d)return null;try{const h=await fetch(`${ff}/${o}/${encodeURIComponent(d)}.svg`);if(!h.ok)return null;const g=await h.text();return g.startsWith("<svg")?Dg(g):null}catch{return null}}async function Ih(a,l=120){var g;const o=a.trim();if(!o)return{icons:[],total:0};const s=`${ff}/search?query=${encodeURIComponent(o)}&limit=${l}&prefixes=${Ag.join(",")}`,d=await fetch(s);if(!d.ok)throw new Error(`Iconify search failed (${d.status})`);const h=await d.json();return{icons:h.icons??[],total:h.total??((g=h.icons)==null?void 0:g.length)??0}}const Og=["robot","sensor","motor","raspberry pi","led","battery","bluetooth","car","rocket","gamepad","gauge","radar","compass","temperature","wifi","antenna","gear","bolt","lightbulb","joystick","drone","circuit","chip","servo","wheel","magnet","speaker","camera","flask"];function Um(a){const l=[...a];for(let o=l.length-1;o>0;o--){const s=Math.floor(Math.random()*(o+1));[l[o],l[s]]=[l[s],l[o]]}return l}const Lg=8,Bg=20;async function zg(a=120){const l=Um(Og).slice(0,Lg),o=await Promise.all(l.map(g=>Ih(g,Bg).catch(()=>({icons:[],total:0})))),s=new Set,d=[];for(const g of o)for(const m of g.icons)s.has(m)||(s.add(m),d.push(m));const h=Um(d).slice(0,a);return{icons:h,total:h.length}}const Xd=Ds(uf(Gl)??"");function qm(a){if(!a)return Xd;const l=uf(a);if(l)return Ds(l);const o=qh(a);return o?Ds(o):null}function Ls({slug:a,className:l,alt:o=""}){const[s,d]=j.useState(()=>qm(a)??Xd);return j.useEffect(()=>{const h=qm(a);if(h){d(h);return}if(d(Xd),!a||typeof navigator<"u"&&!navigator.onLine)return;let g=!1;return Vh(a).then(m=>{g||!m||(Hh(a,m),d(Ds(m)))}),()=>{g=!0}},[a]),u.jsx("img",{className:l,src:s,alt:o})}function Hm(){const a=se(E=>E.savedDevices),l=se(E=>E.toggleSideMenu),o=se(E=>E.findDevice),s=se(E=>E.removeSavedDevice),d=se(E=>E.askConfirm),h=se(E=>E.dashboardPage),g=se(E=>E.setDashboardPage),m=Vg(),[_,b]=j.useState(null),k=kc(),x=a.filter(E=>h==="mine"?E.isOwnedByMe:!E.isOwnedByMe).sort(Hg);return u.jsxs("div",{className:"screen dashboard-screen",children:[u.jsx(df,{title:"Hovedmenu",onMenu:()=>l()}),u.jsxs("div",{className:"content dash-content",children:[!k&&u.jsx("div",{className:"notice",children:"Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På Android: brug Chrome."}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:h==="mine"?"active":"",onClick:()=>g("mine"),children:"Mine Enheder"}),u.jsx("button",{type:"button",className:h==="andre"?"active":"",onClick:()=>g("andre"),children:"Andre Enheder"})]}),u.jsx("div",{className:"panel panel-white device-list",children:x.length===0?u.jsx("div",{className:"device-list-empty",children:h==="mine"?"Ingen enheder endnu. Tryk på + for at finde en enhed.":"Ingen andre enheder gemt."}):x.map(E=>u.jsx(Ug,{device:E,disabled:!k,onConnect:()=>m(E),onSettings:()=>b(E)},E.deviceID))})]}),u.jsx("button",{className:"fab",type:"button",onClick:()=>o(),disabled:!k,"aria-label":"Find enhed",children:u.jsx(Pt,{name:"plus",size:30})}),u.jsx("span",{className:"version",children:As}),_&&u.jsx(qt,{title:"Enhedsindstillinger",onClose:()=>b(null),children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("div",{className:"saved-device-head",children:[u.jsx(Ls,{slug:_.deviceIcon}),u.jsx("strong",{children:_.deviceName})]}),u.jsx(ws,{label:"Gemte indstillinger",value:"Denne browser"}),u.jsx(ws,{label:"Ejer",value:qg(_)}),u.jsx(ws,{label:"Offentlig",value:_.canOthersConnect?"Ja":"Nej"}),u.jsx(ws,{label:"Andre må redigere layout",value:_.canOthersEdit?"Ja":"Nej"}),u.jsx(ws,{label:"Andre må redigere kode",value:_.canOthersEditCode?"Ja":"Nej"}),u.jsx("div",{className:"notice",children:"Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!k,onClick:()=>{const E=_;b(null),m(E)},children:"Forbind"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>d({title:"Glem enhed",message:`Vil du fjerne ${_.deviceName} fra gemte enheder?`,confirmLabel:"Glem",onConfirm:()=>{s(_.deviceID),b(null)}}),children:"Glem enhed"})]})})]})}function Ug({device:a,disabled:l,onConnect:o,onSettings:s}){return u.jsxs("div",{className:"device-tile-wrap",children:[u.jsxs("button",{className:"device-tile",type:"button",onClick:o,disabled:l,children:[u.jsx(Ls,{className:"device-tile-icon",slug:a.deviceIcon}),u.jsx("span",{className:"device-tile-name",children:a.deviceName})]}),u.jsx("button",{className:"device-tile-del",type:"button",onClick:s,"aria-label":"Enhedsindstillinger",children:u.jsx(Pt,{name:"settings"})})]})}function ws({label:a,value:l}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:a}),u.jsx("strong",{children:l})]})}function qg(a){var l;return a.isOwnedByMe?"Dig":((l=a.ownerName)==null?void 0:l.trim())||"Anden bruger"}function Hg(a,l){return a.deviceName.localeCompare(l.deviceName,"da",{sensitivity:"base"})}function Vg(){const a=se(s=>s.connectToDevice),l=se(s=>s.findDevice),o=se(s=>s.log);return async s=>{const h=(await Ch()).find(g=>g.id===s.deviceID);h&&await a(h,s,void 0,{silent:!0})||(o("info",`Genforbind: åbner enhedsvælger for ${s.deviceName}.`),await l(s))}}function Ig(){const a=se(o=>o.connecting),l=se(o=>o.progress);return u.jsxs("div",{className:"screen connection",children:[u.jsx("div",{className:"device-icon-pick",children:u.jsx(Ls,{slug:a==null?void 0:a.icon})}),u.jsxs("h2",{style:{margin:0,color:"var(--red)"},children:["Forbinder til ",(a==null?void 0:a.name)??"enhed"]}),u.jsx("div",{className:"spinner"}),u.jsxs("div",{style:{width:"100%"},children:[u.jsx("div",{className:"progress-track",children:u.jsx("div",{className:"progress-fill",style:{width:`${l.value}%`}})}),u.jsx("p",{style:{color:"var(--muted)",fontWeight:600,marginTop:12},children:l.label})]})]})}const Vm=24;function Pg(){const[a,l]=j.useState(1),o=j.useRef(null),s=j.useCallback(d=>{var m;if((m=o.current)==null||m.disconnect(),o.current=null,!d)return;const h=()=>{const _=getComputedStyle(d).gridTemplateColumns,b=_&&_!=="none"?_.split(" ").filter(Boolean).length:1;l(k=>k===b?k:Math.max(1,b))};h();const g=new ResizeObserver(h);g.observe(d),o.current=g},[]);return j.useEffect(()=>()=>{var d;return(d=o.current)==null?void 0:d.disconnect()},[]),[a,s]}function Fg(a,l,o){const s=Math.min(Math.max(o,1),l);let d=a-Math.floor(s/2);return d=Math.max(0,Math.min(d,l-s)),Array.from({length:s},(h,g)=>d+g)}function Ph({selected:a,onSelect:l,onClose:o}){const[s,d]=j.useState("library"),[h,g]=Pg(),m=j.useMemo(()=>h*Math.max(1,Math.round(Vm/h)),[h]),[_,b]=j.useState(()=>{const N=a?fc.findIndex(Q=>Q.slug===a):-1;return N>=0?Math.floor(N/Vm):0}),[k,x]=j.useState(""),[E,D]=j.useState([]),[O,F]=j.useState(0),[H,P]=j.useState(!1),[B,re]=j.useState(null),[q,oe]=j.useState(!1),[ge,te]=j.useState(typeof navigator>"u"?!0:navigator.onLine);j.useEffect(()=>{const N=()=>te(navigator.onLine);return window.addEventListener("online",N),window.addEventListener("offline",N),()=>{window.removeEventListener("online",N),window.removeEventListener("offline",N)}},[]);function pe(N){l(N),o(),uf(N)||Vh(N).then(Q=>{Q&&Hh(N,Q)})}async function ve(N){if(!ge){re("Du er offline. Vælg fra «Bibliotek», eller find flere ikoner når du er online.");return}P(!0),re(null),oe(!0);try{const Q=N==="random"?await zg():await Ih(k);D(Q.icons),F(0),Q.icons.length===0&&re("Ingen ikoner fundet. Prøv et andet ord.")}catch{re("Kunne ikke hente ikoner. Tjek din internetforbindelse."),D([])}finally{P(!1)}}const Be=Math.ceil(fc.length/m),ne=j.useMemo(()=>fc.slice(_*m,_*m+m),[_,m]),Ie=Math.ceil(E.length/m),xe=j.useMemo(()=>E.slice(O*m,O*m+m),[E,O,m]),$e=ge&&!H&&!B&&xe.length>0;j.useEffect(()=>{b(N=>Math.min(N,Math.max(0,Be-1)))},[Be]),j.useEffect(()=>{F(N=>Math.min(N,Math.max(0,Ie-1)))},[Ie]);const Z=j.useRef(null);return j.useEffect(()=>{var N;(N=Z.current)==null||N.scrollTo({top:0})},[s,_,O]),u.jsx(qt,{title:"Vælg et ikon",onClose:o,children:u.jsxs("div",{className:"icon-picker",children:[u.jsxs("div",{className:"icon-picker-head",children:[u.jsxs("div",{className:"icon-tabs",role:"tablist",children:[u.jsx("button",{type:"button",role:"tab","aria-selected":s==="library",className:s==="library"?"active":"",onClick:()=>d("library"),children:"Bibliotek"}),u.jsx("button",{type:"button",role:"tab","aria-selected":s==="search",className:s==="search"?"active":"",onClick:()=>d("search"),children:"Søg online"})]}),s==="library"?u.jsx("p",{className:"icon-picker-caption",children:"Tryk på et ikon for at vælge det."}):u.jsxs("form",{className:"icon-search",onSubmit:N=>{N.preventDefault(),ve("query")},children:[u.jsx("input",{type:"search",value:k,placeholder:"Søg (fx robot, bil, sensor)",onChange:N=>x(N.target.value),disabled:!ge,"aria-label":"Søg efter ikon",autoFocus:!0}),u.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!ge||H,children:"Søg"}),u.jsx("button",{type:"button",className:"btn icon-dice",onClick:()=>void ve("random"),disabled:!ge||H,title:"Vis tilfældige ikoner","aria-label":"Vis tilfældige ikoner",children:u.jsx(Pm,{})})]})]}),u.jsxs("div",{className:"icon-picker-body",ref:Z,children:[s==="library"&&u.jsx("div",{className:"icon-grid",ref:g,children:ne.map(N=>u.jsx(Im,{src:Ds(N.svg),label:N.label,selected:N.slug===a,onClick:()=>pe(N.slug)},N.slug))}),s==="search"&&u.jsxs(u.Fragment,{children:[!ge&&u.jsx("p",{className:"icon-hint",children:"Du er offline. Vælg fra «Bibliotek», eller find flere ikoner når du er online."}),ge&&H&&u.jsx("p",{className:"icon-hint",children:"Henter ikoner…"}),ge&&!H&&B&&u.jsx("p",{className:"icon-hint icon-hint-error",children:B}),ge&&!H&&!B&&!q&&u.jsxs("p",{className:"icon-hint",children:["Skriv et ord og tryk ",u.jsx("strong",{children:"Søg"})," - eller tryk"," ",u.jsx("span",{className:"icon-hint-dice","aria-hidden":"true",children:u.jsx(Pm,{})})," ","for tilfældige ikoner."]}),$e&&u.jsx("div",{className:"icon-grid",ref:g,children:xe.map(N=>u.jsx(Im,{src:Cg(N),label:N,selected:N===a,onClick:()=>pe(N)},N))})]})]}),u.jsxs("div",{className:"icon-picker-foot",children:[s==="library"&&u.jsx(Gm,{current:_,total:Be,onGo:b}),s==="search"&&$e&&u.jsx(Gm,{current:O,total:Ie,onGo:F})]})]})})}function Im({src:a,label:l,selected:o,onClick:s}){return u.jsxs("button",{type:"button",className:`icon-tile ${o?"selected":""}`,onClick:s,"aria-label":l,"aria-pressed":o,title:l,children:[u.jsx("img",{src:a,alt:"",loading:"lazy"}),o&&u.jsx("span",{className:"icon-tile-check","aria-hidden":"true",children:"✓"})]})}function Pm(){return u.jsxs("svg",{className:"dice-glyph",viewBox:"0 0 24 24",width:22,height:22,"aria-hidden":"true",fill:"currentColor",children:[u.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"4",ry:"4",fill:"none",stroke:"currentColor",strokeWidth:"2"}),u.jsx("circle",{cx:"8",cy:"8",r:"1.7"}),u.jsx("circle",{cx:"16",cy:"8",r:"1.7"}),u.jsx("circle",{cx:"12",cy:"12",r:"1.7"}),u.jsx("circle",{cx:"8",cy:"16",r:"1.7"}),u.jsx("circle",{cx:"16",cy:"16",r:"1.7"})]})}const Fm=48;function Gm({current:a,total:l,onGo:o}){const s=j.useRef(null),[d,h]=j.useState(7);return j.useLayoutEffect(()=>{const g=s.current;if(!g)return;const m=()=>{const b=g.clientWidth-2*Fm;h(Math.max(1,Math.floor(b/Fm)))};m();const _=new ResizeObserver(m);return _.observe(g),()=>_.disconnect()},[]),l<=1?null:u.jsxs("div",{className:"icon-pager",ref:s,children:[u.jsx("button",{type:"button",className:"icon-pager-arrow",onClick:()=>o(Math.max(0,a-1)),disabled:a===0,"aria-label":"Forrige side",children:u.jsx(Pt,{name:"back",size:20})}),Fg(a,l,d).map(g=>u.jsx("button",{type:"button",className:`icon-pager-num ${g===a?"active":""}`,onClick:()=>o(g),"aria-label":`Side ${g+1}`,"aria-current":g===a?"page":void 0,children:g+1},g)),u.jsx("button",{type:"button",className:"icon-pager-arrow",onClick:()=>o(Math.min(l-1,a+1)),disabled:a===l-1,"aria-label":"Næste side",children:u.jsx(Pt,{name:"back",size:20,className:"flip-x"})})]})}function Gg(){const a=se(q=>q.finishCreate),l=se(q=>q.cancelCreate),[o,s]=j.useState(Gl),[d,h]=j.useState(!1),[g,m]=j.useState(!1),[_,b]=j.useState(!1),[k,x]=j.useState(!1),[E,D]=j.useState(ci),[O,F]=j.useState(Cs),[H,P]=j.useState(!1),B=q=>Number.isFinite(q)?Math.max(si,Math.min(oi,Math.round(q))):ci;async function re(){P(!0),await a(o,g,g&&_,g&&k,B(E),B(O))}return u.jsxs("div",{className:"screen",children:[u.jsx("header",{className:"topbar",children:u.jsx("h1",{children:"Opret Enhed"})}),u.jsxs("div",{className:"content create-body",children:[u.jsxs("button",{type:"button",className:"device-icon-pick",onClick:()=>h(!0),"aria-label":"Vælg ikon",children:[u.jsx(Ls,{slug:o}),u.jsx("span",{className:"badge",children:u.jsx(Pt,{name:"plus",size:22})})]}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:g?"":"active",onClick:()=>m(!1),children:"Privat"}),u.jsx("button",{type:"button",className:g?"active":"",onClick:()=>m(!0),children:"Offentlig"})]}),g&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:_?"":"active",onClick:()=>b(!1),children:"Nej"}),u.jsx("button",{type:"button",className:_?"active":"",onClick:()=>b(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:k?"":"active",onClick:()=>x(!1),children:"Nej"}),u.jsx("button",{type:"button",className:k?"active":"",onClick:()=>x(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter (kolonner × rækker)"}),u.jsxs("div",{className:"row",style:{width:"100%"},children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"cols",children:"Kolonner"}),u.jsx("input",{id:"cols",type:"number",min:si,max:oi,value:Number.isNaN(E)?"":E,onChange:q=>D(parseInt(q.target.value,10)),onBlur:()=>D(B(E))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"rows",children:"Rækker"}),u.jsx("input",{id:"rows",type:"number",min:si,max:oi,value:Number.isNaN(O)?"":O,onChange:q=>F(parseInt(q.target.value,10)),onBlur:()=>F(B(O))})]})]}),u.jsxs("div",{className:"row",style:{marginTop:"auto",width:"100%"},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>l(),disabled:H,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:re,disabled:H,children:H?"Opretter...":"Opret"})]})]}),d&&u.jsx(Ph,{selected:o,onSelect:s,onClose:()=>h(!1)}),u.jsx("span",{className:"version",children:As})]})}const ui=8;function mc(a){return Math.max(5,Math.min(22,a))}function $g(a,l,o){const s=Math.max(1,a.length),d=(l-ui*2)/(s*.58),h=(o-ui*2)*.48;return mc(Math.min(d,h))}function va(a,l,o){switch(o){case 90:return{x:-l,y:a};case 180:return{x:-a,y:-l};case 270:return{x:l,y:-a};default:return{x:a,y:l}}}function vc(a){return(360-a)%360}function Yg(a,l,o,s){const d=s===90||s===270;return $g(a,d?o:l,d?l:o)}function bc({name:a,width:l,height:o,rotation:s}){return u.jsx("span",{style:{display:"inline-block",fontWeight:800,fontSize:Yg(a,l,o,s),transform:s?`rotate(${s}deg)`:void 0,whiteSpace:s===90||s===270?"nowrap":void 0},children:a})}function Xg(a,l,o,s,d){const h=a.trim().split(/\s+/).filter(Boolean),g=Math.max(1,a.replace(/\s+/g,"").length+Math.max(0,h.length-1)*1.6),m=d?mc(Math.min(l/4.6,o/4.6,12)):0,_=d?m+ui:ui;if(s){const x=Math.max(1,o-_*2);return{fontSize:mc(Math.min(l*.48,x/(g*1.04))),endFontSize:m,centerInset:d?{top:_,bottom:_}:{}}}const b=Math.max(1,l-_*4.2);return{fontSize:mc(Math.min(o*.42,b/(g*.58))),endFontSize:m,centerInset:d?{left:_*2.1,right:_*2.1}:{}}}function Kg({control:a,rect:l,disabled:o,orientation:s,latestValue:d,toggleValue:h,radarPings:g=[],textValue:m,plotPoints:_=[],onButton:b,onSlider:k,onToggle:x,onJoystick:E,onDpad:D}){const O=j.useRef(!1),[F,H]=j.useState(!1),P={left:l.cx,top:l.cy,width:l.width,height:l.height};if(a.type==="button"){const B=()=>{o||!O.current||(O.current=!1,H(!1),b(a.name,!1))};return u.jsx("div",{className:"control",style:P,children:u.jsx("button",{className:`control-button ${F?"pressed":""}`,type:"button",disabled:o,style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},onPointerDown:re=>{var q,oe;o||(re.preventDefault(),(oe=(q=re.currentTarget).setPointerCapture)==null||oe.call(q,re.pointerId),O.current=!0,H(!0),b(a.name,!0))},onPointerUp:re=>{var q,oe;re.preventDefault(),(oe=(q=re.currentTarget).releasePointerCapture)==null||oe.call(q,re.pointerId),B()},onPointerCancel:B,onLostPointerCapture:B,children:u.jsx(bc,{name:a.name,width:l.width,height:l.height,rotation:s})})})}if(a.type==="toggle"){const B=!!h;return u.jsx("div",{className:"control",style:P,children:u.jsx("button",{className:`control-toggle ${B?"on":""}`,type:"button",disabled:o,"aria-pressed":B,style:{width:"100%",height:"100%"},onPointerDown:re=>{o||(re.preventDefault(),x(a.name,!B))},children:u.jsx(bc,{name:a.name,width:l.width,height:l.height,rotation:s})})})}return a.type==="radar"?u.jsx("div",{className:"control",style:P,children:u.jsx(Gh,{control:a,pings:g,width:l.width,height:l.height,rotation:s})}):a.type==="text"?u.jsx("div",{className:"control",style:P,children:u.jsx(Fh,{message:m??a.name,width:l.width,height:l.height,rotation:s})}):a.type==="plot"?u.jsx("div",{className:"control",style:P,children:u.jsx(Yh,{control:a,points:_,width:l.width,height:l.height,rotation:s})}):a.type==="joystick"?u.jsx("div",{className:"control",style:P,children:u.jsx(b_,{control:a,disabled:o,orientation:s,onJoystick:E,width:l.width,height:l.height})}):a.type==="dpad"?u.jsx("div",{className:"control",style:P,children:u.jsx(M_,{control:a,disabled:o,orientation:s,onDpad:D})}):u.jsx("div",{className:"control",style:P,children:u.jsx(v_,{control:a,disabled:o,orientation:s,latestValue:d,onSlider:k,width:l.width,height:l.height})})}function Qg(a,l,o){const d=(a.trim()||" ").split(`
`),h=d.reduce((E,D)=>D.split(/\s+/).filter(Boolean).reduce((F,H)=>Math.max(F,H.length),E),1),g=Math.max(1,Math.floor(h*1.9)),m=Math.max(d.length,d.reduce((E,D)=>E+Math.max(1,Math.ceil(Math.max(1,D.trim().length)/g)),0)),_=Math.max(1,l-ui*3),b=Math.max(1,o-ui*3),k=_/(h*.58),x=b/(m*1.16);return Math.max(7,Math.min(24,k,x))}function Fh({message:a,width:l,height:o,rotation:s=0}){const d=a.trim()||"...",h=s===90||s===270,g=Qg(d,h?o:l,h?l:o);return u.jsx("div",{className:"control-text",style:{width:"100%",height:"100%",fontSize:g},children:u.jsx("span",{style:{transform:s?`rotate(${s}deg)`:void 0},children:d})})}function Gh({control:a,pings:l,width:o,height:s,rotation:d=0,preview:h=!1}){const[,g]=j.useState(0),m=Math.max(120,a.radarFadeMs??1200),_=a.radarMinAngle??0,b=a.radarMaxAngle??180,k=an(_),x=an(b),E=Math.abs(b-_)>=360||k===x&&_!==b,D=Math.max(1,a.radarMaxDistance??200),O=Date.now(),F=l[l.length-1],H=d,P=an(k+H),B=an(x+H),re=i_(k,x),q=((F==null?void 0:F.angle)??re)+H,oe=h?[{id:"preview",angle:re,distance:D*.62,createdAt:O}]:l.filter(_e=>O-_e.createdAt<=m),ge=!E,te=Math.max(8,Math.min(12,Math.min(o,s)*.16)),pe=Math.max(7,te*.85),ve=0,Be=0,ne=1,Ie=n_(E,P,B,H,D),xe=E?{x:-1.12,y:-1.12,width:2.24,height:2.24}:r_(P,B,Ie.map(_e=>_e.point)),$e=E?"":Wg(ve,Be,ne,P,B),Z=Km(_),N=Km(b),Q=ge?a_(P,B,xe,o,s,Z,N,te):null,de=Ie.map(_e=>{const T=$h(_e.point,xe,o,s);return{key:_e.key,value:_e.value,x:T.x,y:T.y}});j.useEffect(()=>{if(h||l.length===0)return;const _e=window.setInterval(()=>g(T=>T+1),120);return()=>window.clearInterval(_e)},[m,l.length,h]);const Re=In(ve,Be,ne,q);return u.jsxs("div",{className:"control-radar",style:{width:"100%",height:"100%"},children:[u.jsxs("svg",{width:o,height:s,viewBox:`${xe.x} ${xe.y} ${xe.width} ${xe.height}`,preserveAspectRatio:"none","aria-hidden":"true",children:[E?u.jsx("circle",{className:"radar-sector-fill",cx:ve,cy:Be,r:ne}):u.jsx("path",{className:"radar-sector-fill",d:$e}),[.25,.5,.75,1].map(_e=>E?u.jsx("circle",{className:"radar-ring",cx:ve,cy:Be,r:ne*_e},_e):u.jsx("path",{className:"radar-ring",d:Zg(ve,Be,ne*_e,P,B)},_e)),!E&&u.jsx($m,{cx:ve,cy:Be,radius:ne,angle:P}),!E&&u.jsx($m,{cx:ve,cy:Be,radius:ne,angle:B}),u.jsx("line",{className:"radar-sweep",x1:ve,y1:Be,x2:Re.x,y2:Re.y}),oe.map(_e=>{const T=h?0:O-_e.createdAt,G=Math.max(0,1-T/m),le=Math.max(0,Math.min(D,_e.distance)),ae=In(ve,Be,ne*(le/D),_e.angle+H);return u.jsx("circle",{className:"radar-ping",cx:ae.x,cy:ae.y,r:Math.max(.025,Math.min(xe.width,xe.height)*.025),opacity:G},_e.id)})]}),ge&&Q&&u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"radar-angle-label",style:{left:Q.min.x,top:Q.min.y,fontSize:te},children:Z}),u.jsx("span",{className:"radar-angle-label",style:{left:Q.max.x,top:Q.max.y,fontSize:te},children:N})]}),de.map(_e=>u.jsx("span",{className:"radar-range-label",style:{left:_e.x,top:_e.y,fontSize:pe},children:_e.value},_e.key))]})}function $m({cx:a,cy:l,radius:o,angle:s}){const d=In(a,l,o,s);return u.jsx("line",{className:"radar-boundary",x1:a,y1:l,x2:d.x,y2:d.y})}function In(a,l,o,s){const d=(an(s)-90)*Math.PI/180;return{x:a+Math.cos(d)*o,y:l+Math.sin(d)*o}}function Wg(a,l,o,s,d){const h=In(a,l,o,s),g=In(a,l,o,d),m=Sc(s,d)>180?1:0;return`M ${a} ${l} L ${h.x} ${h.y} A ${o} ${o} 0 ${m} 1 ${g.x} ${g.y} Z`}function Zg(a,l,o,s,d){const h=In(a,l,o,s),g=In(a,l,o,d),m=Sc(s,d)>180?1:0;return`M ${h.x} ${h.y} A ${o} ${o} 0 ${m} 1 ${g.x} ${g.y}`}function Sc(a,l){const o=an(a),s=an(l),d=s>=o?s-o:360-o+s;return d===0?360:d}const sc=[.25,.5,.75,1],Jg=.1,e_=.85,t_=55;function n_(a,l,o,s,d){const h=(_,b,k)=>({key:`${_}-${b}`,value:Math.round(d*b),point:In(0,0,b,k)});if(a){const _=an(180+s);return sc.map(b=>h("full",b,_))}const g=360-Sc(l,o);if(g<t_){const _=an(o+g/2);return sc.map(b=>h("mid",b,_))}const m=(_,b,k)=>{const x=Math.asin(Math.min(e_,Jg/b))*180/Math.PI;return an(_+k*x)};return[...sc.map(_=>h("min",_,m(l,_,-1))),...sc.map(_=>h("max",_,m(o,_,1)))]}function r_(a,l,o=[]){const s=[{x:0,y:0},In(0,0,1,a),In(0,0,1,l),...o];for(const x of[0,90,180,270])l_(x,a,l)&&s.push(In(0,0,1,x));const d=Math.min(...s.map(x=>x.x)),h=Math.max(...s.map(x=>x.x)),g=Math.min(...s.map(x=>x.y)),m=Math.max(...s.map(x=>x.y)),_=Math.max(.1,h-d),b=Math.max(.1,m-g),k=Math.max(_,b)*.24;return{x:d-k,y:g-k,width:_+k*2,height:b+k*2}}function l_(a,l,o){const s=an(l),d=an(a),h=Sc(l,o),g=an(d-s);return g>=0&&g<=h}function a_(a,l,o,s,d,h,g,m){const b=In(0,0,1.1,a),k=In(0,0,1.1,l);return{min:Ym(b,o,s,d,h,m),max:Ym(k,o,s,d,g,m)}}function $h(a,l,o,s){return{x:(a.x-l.x)/l.width*o,y:(a.y-l.y)/l.height*s}}function Ym(a,l,o,s,d,h){const g=$h(a,l,o,s),m=Math.max(10,d.length*h*.62),_=h,b=7;return{x:Xm(g.x,m/2+b,Math.max(m/2+b,o-m/2-b)),y:Xm(g.y,_/2+b,Math.max(_/2+b,s-_/2-b))}}function Xm(a,l,o){return Math.max(l,Math.min(o,a))}function Km(a){return`${Math.round(a)}`}function an(a){return Number.isFinite(a)?(a%360+360)%360:0}function i_(a,l){const o=an(a),s=an(l),d=s>=o?s-o:360-o+s;return an(o+d/2)}function xs(a){return Number.isInteger(a)?String(a):a.toFixed(1)}function Kd(a,l){return Math.max(l,a.length*l*.58)}function Qm(a,l,o){if(Kd(a,l)<=o)return a;const s=Math.max(1,Math.floor(o/Math.max(1,l*.58))-3);return s<=1?a.slice(0,1):`${a.slice(0,s)}...`}function Wm(a,l){return a.label?a.label:l}const s_=3;function js(a){return a.split(`
`).map(l=>l.trim()).slice(0,s_)}function o_(a){const l=a.label?js(a.label)[0]:"";return l||new Date(a.createdAt).toLocaleTimeString("da-DK",{hour:"2-digit",minute:"2-digit"})}function c_({anchorRect:a,timeText:l,valueText:o}){const s=j.useRef(null),[d,h]=j.useState(null);return j.useLayoutEffect(()=>{const g=s.current;if(!g)return;const m=()=>{const{width:_,height:b}=g.getBoundingClientRect(),k=8,x=window.innerWidth,E=window.innerHeight,D=a.top,O=E-a.bottom,H=D>=b+k||D>=O?Math.max(4,a.top-b-k):Math.min(E-b-4,a.bottom+k),P=a.left+a.width/2,B=Math.max(4,Math.min(x-_-4,P-_/2));h({left:B,top:H})};return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[a]),zh.createPortal(u.jsxs("div",{ref:s,className:"plot-tooltip",style:{left:(d==null?void 0:d.left)??a.left,top:(d==null?void 0:d.top)??a.top,visibility:d?"visible":"hidden"},children:[u.jsxs("div",{className:"plot-tooltip-row",children:["Tid ",l]}),u.jsx("div",{className:"plot-tooltip-row",children:o})]}),document.body)}const Ud="pkp:plot-popup-open";let u_=0;const d_=18;function f_(a){if(a<=0)return[];if(a<=5)return Array.from({length:a},(o,s)=>s);const l=new Set([0,a-1]);return l.add(Math.round((a-1)/2)),a>=10&&(l.add(Math.round((a-1)/4)),l.add(Math.round((a-1)*3/4))),[...l].sort((o,s)=>o-s)}function m_(a,l){return a<=0||l==="none"?[]:l==="labels"?Array.from({length:a},(o,s)=>s):a===1?[0]:[0,a-1]}function h_(a,l){const o=Date.now();return Array.from({length:a},(s,d)=>{const h=d/Math.max(1,a-1),g=l==="bar"?.15+.7*Math.abs(Math.sin(h*Math.PI*1.4)):l==="dot"?.5+.35*Math.sin(d*2.3)*Math.cos(d*.7):.5+.4*Math.sin(h*Math.PI*2.2);return{id:`demo-${d}`,value:g,createdAt:o}})}function Yh({control:a,points:l,width:o,height:s,preview:d=!1,rotation:h=0}){const g=h===90||h===270,m=g?s:o,_=g?o:s,b=a.plotMin??0,k=a.plotMax??100,x=k>b?k-b:1,E=Math.max(2,a.plotHistory??30),D=a.plotStyle==="bar"?"bar":a.plotStyle==="dot"?"dot":"line",O=a.plotXAxis??"labels",F=a.plotYAxis??"range",H=Math.max(8,Math.min(45,a.plotLabelMaxPercent??24)),P=d?h_(E,D):l,[B,re]=j.useState(null),q=j.useRef(new Map),[oe,ge]=j.useState(null),[te,pe]=j.useState(null),ve=j.useMemo(()=>u_+=1,[]),Be=j.useMemo(()=>typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches,[]);j.useEffect(()=>{oe!=null&&window.dispatchEvent(new CustomEvent(Ud,{detail:ve}))},[oe,ve]),j.useEffect(()=>{const ee=be=>{be.detail!==ve&&ge(null)};return window.addEventListener(Ud,ee),()=>window.removeEventListener(Ud,ee)},[ve]),j.useLayoutEffect(()=>{if(!oe){pe(null);return}const ee=q.current.get(oe);if(!ee){pe(null);return}const be=()=>pe(ee.getBoundingClientRect());return be(),window.addEventListener("resize",be),window.addEventListener("scroll",be,!0),()=>{window.removeEventListener("resize",be),window.removeEventListener("scroll",be,!0)}},[oe]),j.useEffect(()=>{if(!Be||!oe)return;const ee=()=>ge(null);return window.addEventListener("click",ee),()=>window.removeEventListener("click",ee)},[Be,oe]),j.useEffect(()=>{ge(null)},[B]);function ne(ee){return be=>{be?q.current.set(ee,be):q.current.delete(ee)}}function Ie(ee){return Be?{onClick:be=>{be.stopPropagation(),ge(Je=>Je===ee?null:ee)}}:{onPointerEnter:()=>ge(ee),onPointerLeave:()=>ge(be=>be===ee?null:be)}}const xe=Math.max(1,Math.min(m,_)),$e=Math.max(8,Math.min(13,xe*.14)),Z=Math.max(6,Math.min(10,$e*.72)),N=Math.max(6,Math.min(10,$e*.74)),Q=Math.max(6,Math.min(16,xe*.12)),de=Math.max(3,xe*.035),Re=Math.max(2,xe*.02),_e=Math.max(18,m*(H/100)),T=Math.max(18,_*(H/100)),G=Z*1.15,le=N*1.15,ae=F==="range"?[xs(b),xs(k)]:F==="labels"?P.map(ee=>xs(ee.value)):[],ce=ae.length>0?Math.min(_e,Math.max(...ae.flatMap(ee=>js(ee)).map(ee=>Kd(ee,N)))+4):0,fe=ce>0?Re+ce+de:Q,Te=Q+$e*1.45,We=Math.max(fe+1,m-Q),ze=Math.max(1,We-fe),me=Math.max(1.5,Math.min(3.4,xe*.045)),je=Math.max(me+1,Math.min(xe*.09,me*2)),at=P.length>1?Math.max(me*2,Math.min(14,ze*.045)):0,V=Math.max(1,ze-at*2),J=Math.max(1,Math.min(P.length,E)),ie=P.length>J,Ce=!d;let Pe=P.length;if(ie&&B){const ee=P.findIndex(be=>be.id===B);ee>=0&&(Pe=ee+1)}const Ve=Math.max(0,Pe-J),Me=ie?P.slice(Ve,Pe):P,De=ie&&Ve>0,wt=ie&&Pe<P.length,sn=oe?Me.find(ee=>ee.id===oe):void 0,Pn=()=>{Ve<=0||re(P[Pe-2].id)},ht=()=>{if(Pe>=P.length)return;const ee=Pe;re(ee>=P.length-1?null:P[ee].id)},_r=m_(Me.length,O),fn=_r.map(ee=>Wm(Me[ee],ee===Me.length-1?"nu":`${ee+1}`)).map(ee=>js(ee)),mn=fn.length>0?Math.max(1,...fn.map(ee=>ee.length)):1,hn=O!=="labels"?1/0:D==="bar"?V/Math.max(1,Me.length):V/Math.max(1,Me.length-1);let jn=mn;for(;jn>1&&jn*G>hn;)jn-=1;const di=fn.length>0?Math.min(T,Math.max(...fn.flat().map(ee=>Kd(ee,Z)))+8):0,sr=Math.max(3,Z*.48),Fn=Math.max(4,Z*.6),it=Math.max(sr+Fn+Z,sr+Fn+di+(jn-1)*G),vt=Math.max(1,_-Te-it),Qe=Te+vt,vr=ee=>{const be=Math.max(0,Math.min(1,(ee-b)/x));return Te+(1-be)*vt},ba=ee=>Me.length>1?fe+at+ee/(Me.length-1)*V:fe+ze/2,Nn=Me.length>0?V/Me.length:V,pn=Math.max(1,Nn*.62),br=ee=>Me.length>1?fe+at+ee*Nn+Nn/2:fe+ze/2,Rn=ee=>D==="bar"?br(ee):ba(ee),Ft=Math.max(1.5,xe*.02),Gt=Me.map((ee,be)=>({x:ba(be),y:vr(ee.value)})),Jt=F==="labels"?f_(Me.length):[],en=(ee,be,Je)=>{const on=js(be);return u.jsxs("g",{children:[u.jsx("line",{className:"plot-axis-tick",x1:fe-sr,y1:Je,x2:fe,y2:Je}),on.map((gn,$t)=>{const Gn=Je+($t-(on.length-1)/2)*le;return u.jsx("text",{className:"plot-y-axis-label",x:fe-de,y:Gn,fontSize:N,textAnchor:"end",dominantBaseline:"middle",children:Qm(gn,N,_e)},$t)})]},ee)},Ze=u.jsxs("div",{className:"control-plot",style:{width:"100%",height:"100%"},children:[u.jsxs("svg",{width:m,height:_,viewBox:`0 0 ${m} ${_}`,"aria-hidden":"true",children:[[.25,.5,.75].map(ee=>u.jsx("line",{className:"plot-grid-line",x1:fe,y1:Te+ee*vt,x2:We,y2:Te+ee*vt},ee)),u.jsx("line",{className:"plot-axis-line",x1:fe,y1:Qe,x2:We,y2:Qe}),u.jsx("line",{className:"plot-axis-line",x1:fe,y1:Te,x2:fe,y2:Qe}),F==="range"&&ae.map((ee,be)=>en(`${ee}-${be}`,ee,be===0?Qe:Te)),F==="labels"&&Jt.map(ee=>{const be=Me[ee];return en(`y-${be.id}`,xs(be.value),vr(be.value))}),_r.map(ee=>{const be=Me[ee],Je=Rn(ee),on=Qe+sr+Fn,gn=Wm(be,ee===Me.length-1?"nu":`${ee+1}`),$t=js(gn).slice(0,jn);return u.jsxs("g",{children:[u.jsx("line",{className:"plot-axis-tick",x1:Je,y1:Qe,x2:Je,y2:Qe+sr}),$t.map((Gn,tn)=>{const yr=Je+tn*G;return u.jsx("text",{className:"plot-axis-tick-label",x:yr,y:on,fontSize:Z,textAnchor:"end",dominantBaseline:"middle",transform:`rotate(-90 ${yr} ${on})`,children:Qm(Gn,Z,T)},tn)})]},`x-${be.id}`)}),D==="bar"?Me.map((ee,be)=>{const Je=Me.length>1?fe+at+be*Nn+(Nn-pn)/2:fe+(ze-pn)/2,on=!wt&&be===Me.length-1,gn=ee.value===0,$t=Math.max(0,Qe-vr(ee.value)),Gn=gn?Math.max(3,Ft*2):Math.max(Ft,$t),tn=Qe-Gn,yr=Math.max($t,d_),ol=Qe-yr;return u.jsxs("g",{children:[u.jsx("rect",{className:`plot-bar ${on?"latest":""} ${gn?"zero":""}`,x:Je,y:tn,width:pn,height:Gn}),u.jsx("rect",{ref:ne(ee.id),className:"plot-bar-hit",x:Je,y:ol,width:pn,height:yr,...Ie(ee.id)})]},ee.id)}):u.jsxs(u.Fragment,{children:[D==="line"&&Gt.length>1&&u.jsx("polyline",{className:"plot-line",points:Gt.map(ee=>`${ee.x},${ee.y}`).join(" ")}),Gt.map((ee,be)=>{const Je=Me[be],on=!wt&&be===Gt.length-1;return u.jsxs("g",{children:[u.jsx("circle",{className:`plot-dot ${on?"latest":""}`,cx:ee.x,cy:ee.y,r:on?je:me}),u.jsx("circle",{ref:ne(Je.id),className:"plot-dot-hit",cx:ee.x,cy:ee.y,r:Math.max(je,9),...Ie(Je.id)})]},Je.id)})]})]}),u.jsx("span",{className:"plot-name-label",style:{fontSize:$e,left:fe+6,maxWidth:Math.max(20,m-fe-14-(Ce?68:0))},children:a.name}),Ce&&u.jsxs("div",{className:"plot-page-controls",children:[u.jsx("button",{type:"button",className:"plot-page-btn",disabled:!De,onClick:Pn,"aria-label":`${a.name}: vis ældre data`,children:u.jsx(Pt,{name:"chevronLeft",size:18})}),u.jsx("button",{type:"button",className:"plot-page-btn",disabled:!wt,onClick:ht,"aria-label":`${a.name}: vis nyere data`,children:u.jsx(Pt,{name:"chevronRight",size:18})})]}),sn&&te&&u.jsx(c_,{anchorRect:te,timeText:o_(sn),valueText:`${a.name} ${xs(sn.value)}`})]});return h?u.jsx("div",{style:{width:o,height:s,position:"relative"},children:u.jsx("div",{style:{position:"absolute",left:"50%",top:"50%",width:m,height:_,transform:`translate(-50%, -50%) rotate(${h}deg)`},children:Ze})}):Ze}function p_(a,l){if(!l)return a;const o=a.trim().split(/\s+/).filter(Boolean);return u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",lineHeight:1.02,textAlign:"center",gap:"0.42em"},children:o.map((s,d)=>u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[...s].map((h,g)=>u.jsx("span",{children:h},`${h}-${g}`))},`${s}-${d}`))})}function g_(a){const l={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},o=4;return a===0?{low:{...l,left:o,top:0,bottom:0},high:{...l,right:o,top:0,bottom:0}}:a===180?{low:{...l,right:o,top:0,bottom:0},high:{...l,left:o,top:0,bottom:0}}:a===90?{low:{...l,bottom:o,left:0,right:0},high:{...l,top:o,left:0,right:0}}:{low:{...l,top:o,left:0,right:0},high:{...l,bottom:o,left:0,right:0}}}function __({name:a,vertical:l,rotation:o,color:s,fontSize:d,endFontSize:h,centerInset:g,lowLabel:m,highLabel:_,showEnds:b}){const k=b?g_(o):null;return u.jsxs("div",{style:{position:"absolute",inset:0,color:s},children:[u.jsx("div",{style:{position:"absolute",inset:0,...g,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:d,textAlign:"center",pointerEvents:"none"},children:p_(a,l)}),k&&u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{...k.low,fontWeight:800,fontSize:h},children:m}),u.jsx("div",{style:{...k.high,fontWeight:800,fontSize:h},children:_})]})]})}function Xh({name:a,rotation:l,width:o,height:s,value:d,showEnds:h=!1,fillColor:g="var(--red)",lowLabel:m="0",highLabel:_="100"}){const b=l===90||l===270,{fontSize:k,endFontSize:x,centerInset:E}=Xg(a,o,s,b,h);let D,O;l===0?(D={left:0,top:0,bottom:0,width:`${d}%`},O={left:0,top:0}):l===180?(D={right:0,top:0,bottom:0,width:`${d}%`},O={right:0,top:0}):l===90?(D={left:0,right:0,bottom:0,height:`${d}%`},O={left:0,bottom:0}):(D={left:0,right:0,top:0,height:`${d}%`},O={left:0,top:0});const F=H=>u.jsx(__,{name:a,vertical:b,rotation:l,color:H,fontSize:k,endFontSize:x,centerInset:E,lowLabel:m,highLabel:_,showEnds:h});return u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{position:"absolute",left:0,top:0,width:`${o}px`,height:`${s}px`},children:F("var(--red)")}),u.jsx("div",{style:{position:"absolute",background:g,overflow:"hidden",...D},children:u.jsx("div",{style:{position:"absolute",width:`${o}px`,height:`${s}px`,...O},children:F("var(--white)")})})]})}function v_({control:a,disabled:l,orientation:o,latestValue:s,onSlider:d,width:h,height:g}){const m=j.useRef(null),_=a.sliderMin??0,b=a.sliderMax??100,[k,x]=j.useState(()=>s===void 0?Zm(a.sliderRecenter??"none"):Jm(s,_,b)),E=j.useRef(null),D=o;j.useEffect(()=>{s!==void 0&&(x(Jm(s,_,b)),E.current=s)},[s,_,b]);function O(B){const re=m.current;if(!re)return 0;const q=re.getBoundingClientRect();let oe;return D===0?oe=(B.clientX-q.left)/q.width:D===180?oe=1-(B.clientX-q.left)/q.width:D===90?oe=1-(B.clientY-q.top)/q.height:oe=(B.clientY-q.top)/q.height,Math.max(0,Math.min(1,oe))}function F(B){l||H(O(B))}function H(B){const re=Math.round(B*100),q=Math.round(_+(b-_)*B);x(re),q!==E.current&&(E.current=q,d(a.name,q))}function P(){const B=a.sliderRecenter??"none";l||B==="none"||H(Zm(B)/100)}return u.jsx("div",{ref:m,className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",touchAction:"none"},onPointerDown:B=>{l||(B.preventDefault(),B.currentTarget.setPointerCapture(B.pointerId),F(B))},onPointerMove:B=>{B.buttons!==0&&F(B)},onPointerUp:P,onPointerCancel:P,onLostPointerCapture:P,children:u.jsx(Xh,{name:a.name,rotation:D,width:h,height:g,value:k,showEnds:!0,lowLabel:String(_),highLabel:String(b)})})}function Zm(a){return a==="bottom"?0:a==="top"?100:a==="middle"?50:0}function Jm(a,l,o){return o===l?0:Math.max(0,Math.min(100,Math.round((a-l)/(o-l)*100)))}function eh(a,l,o){return Math.round(l+(o-l)*(a+1)/2)}function th(a,l){return a==="bottom"?l?1:-1:a==="top"?l?-1:1:0}function nh(a){return{nx:th(a.joystickXRecenter,!1),ny:th(a.joystickYRecenter,!0)}}function Kh(a,l){const o=Math.min(a,l),s=Math.max(6,o*.16),d=Math.max(1,o/2-s-2);return{knobRadius:s,reach:d}}function Qh({control:a,width:l,height:o,pos:s,rotation:d=0,dragging:h=!1}){const{knobRadius:g,reach:m}=Kh(l,o),_=Math.max(7,Math.min(14,g*.62)),b=Math.max(7,Math.min(12,Math.min(l,o)*.1)),k=[{key:"xmax",value:a.joystickXMax??100,lx:1,ly:0},{key:"xmin",value:a.joystickXMin??-100,lx:-1,ly:0},{key:"ymax",value:a.joystickYMax??100,lx:0,ly:-1},{key:"ymin",value:a.joystickYMin??-100,lx:0,ly:1}];return u.jsxs("div",{className:"control-joystick",style:{width:"100%",height:"100%",position:"relative"},children:[u.jsx("div",{className:"joystick-oval",style:{position:"absolute",left:"50%",top:"50%",width:m*2,height:m*2,transform:"translate(-50%, -50%)"}}),k.map(x=>{const E=va(x.lx,x.ly,d);return u.jsx("span",{className:"joystick-edge-label",style:{position:"absolute",left:"50%",top:"50%",fontSize:b,transform:`translate(-50%, -50%) translate(${E.x*m}px, ${E.y*m}px) rotate(${d}deg)`},children:x.value},x.key)}),u.jsx("div",{className:"joystick-knob",style:{position:"absolute",left:"50%",top:"50%",width:g*2,height:g*2,fontSize:_,transform:`translate(calc(-50% + ${s.nx*m}px), calc(-50% + ${s.ny*m}px))`,transition:h?"none":"transform 0.12s ease-out"},children:u.jsx("span",{style:{display:"inline-block",transform:d?`rotate(${d}deg)`:void 0,whiteSpace:d===90||d===270?"nowrap":void 0},children:a.name})})]})}function b_({control:a,disabled:l,orientation:o,onJoystick:s,width:d,height:h}){const g=o,m=j.useRef(null),[_,b]=j.useState(()=>{const re=nh(a),q=va(re.nx,re.ny,g);return{nx:q.x,ny:q.y}}),k=j.useRef(!1),x=j.useRef(null),E=a.joystickXMin??-100,D=a.joystickXMax??100,O=a.joystickYMin??-100,F=a.joystickYMax??100;function H(re,q){const oe=va(re,q,vc(g)),ge=eh(oe.x,E,D),te=eh(-oe.y,O,F);(!x.current||x.current.x!==ge||x.current.y!==te)&&(x.current={x:ge,y:te},s(a.name,ge,te))}function P(re){const q=m.current;if(!q)return;const oe=q.getBoundingClientRect(),{reach:ge}=Kh(oe.width,oe.height);let te=(re.clientX-(oe.left+oe.width/2))/ge,pe=(re.clientY-(oe.top+oe.height/2))/ge;const ve=Math.hypot(te,pe);ve>1&&(te/=ve,pe/=ve),b({nx:te,ny:pe}),H(te,pe)}function B(){const re=a.joystickXRecenter??"middle",q=a.joystickYRecenter??"middle";if(re==="none"&&q==="none")return;const oe=va(_.nx,_.ny,vc(g)),ge=nh(a),te={x:re==="none"?oe.x:ge.nx,y:q==="none"?oe.y:ge.ny},pe=va(te.x,te.y,g),ve={nx:pe.x,ny:pe.y};k.current=!1,b(ve),H(ve.nx,ve.ny)}return u.jsx("div",{ref:m,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:re=>{l||(re.preventDefault(),re.currentTarget.setPointerCapture(re.pointerId),k.current=!0,P(re))},onPointerMove:re=>{l||!k.current||re.buttons===0||P(re)},onPointerUp:B,onPointerCancel:B,onLostPointerCapture:B,children:u.jsx(Qh,{control:a,width:d,height:h,pos:_,rotation:g,dragging:k.current})})}const y_=[{direction:"up",rotate:0},{direction:"right",rotate:90},{direction:"down",rotate:180},{direction:"left",rotate:270}],w_="M 34 30 L 34 15 Q 34 8 41 8 L 59 8 Q 66 8 66 15 L 66 30 L 50 46 L 34 30 Z",x_=.1,k_={up:"OP",down:"NED",left:"VENSTRE",right:"HØJRE"},S_={up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]},E_=[{pos:"up",x:50,y:23},{pos:"right",x:78,y:50},{pos:"down",x:50,y:77},{pos:"left",x:22,y:50}];function Qd(a,l){return Math.hypot(a,l)<x_?null:Math.abs(a)>=Math.abs(l)?a>0?"right":"left":l>0?"down":"up"}function T_(a,l){const[o,s]=S_[a],d=va(o,s,vc(l));return Qd(d.x,d.y)??a}function Wh({control:a,active:l=null,rotation:o=0}){return u.jsx("div",{className:"control-dpad",style:{width:"100%",height:"100%"},children:u.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet",children:[y_.map(s=>u.jsx("path",{className:`dpad-arm ${l===s.direction?"active":""}`,transform:`rotate(${s.rotate} 50 50)`,d:w_},s.direction)),E_.map(s=>u.jsx("text",{className:`dpad-label ${l===s.pos?"active":""}`,x:s.x,y:s.y,textAnchor:"middle",dominantBaseline:"central",transform:o?`rotate(${o} ${s.x} ${s.y})`:void 0,children:k_[T_(s.pos,o)]},s.pos))]})})}function M_({control:a,disabled:l,orientation:o,onDpad:s}){const d=j.useRef(null),h=j.useRef(null),g=j.useRef(!1),[m,_]=j.useState(null);function b(D){const O=d.current;if(!O)return{screen:null,logical:null};const F=O.getBoundingClientRect(),H=Math.min(F.width,F.height)/2,P=(D.clientX-(F.left+F.width/2))/H,B=(D.clientY-(F.top+F.height/2))/H,re=Qd(P,B),q=va(P,B,vc(o)),oe=Qd(q.x,q.y);return{screen:re,logical:oe}}function k(D){const O=d.current;if(!O)return!1;const F=O.getBoundingClientRect(),H=(D.clientX-F.left)/F.width,P=(D.clientY-F.top)/F.height;return H>=0&&H<=1&&P>=0&&P<=1}function x(D){D.logical!==h.current&&(h.current&&s(a.name,h.current,!1),h.current=D.logical,D.logical&&s(a.name,D.logical,!0)),_(D.screen)}function E(){g.current=!1,x({screen:null,logical:null})}return u.jsx("div",{ref:d,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:D=>{l||!k(D)||(D.preventDefault(),D.currentTarget.setPointerCapture(D.pointerId),g.current=!0,x(b(D)))},onPointerMove:D=>{l||!g.current||D.buttons===0||x(b(D))},onPointerUp:E,onPointerCancel:E,onLostPointerCapture:E,children:u.jsx(Wh,{control:a,active:m,rotation:o})})}const j_={button:"Knapper",slider:"Slidere",toggle:"Toggleknapper",radar:"Radar",text:"Tekstfelter",joystick:"Joysticks",dpad:"Dpads",plot:"Grafer"},N_=["button","slider","toggle","radar","text","joystick","dpad","plot"];function R_({unplaced:a,onAdd:l,onClose:o}){const s=j.useMemo(()=>N_.filter(m=>a.some(_=>_.type===m)),[a]),[d,h]=j.useState(s[0]??"button"),g=a.filter(m=>m.type===d);return j.useEffect(()=>{s.length>0&&!s.includes(d)&&h(s[0])},[s,d]),u.jsxs(qt,{title:"Tilføj kontrol",onClose:o,children:[s.length>1&&u.jsx("div",{className:"segmented add-modal-tabs",children:s.map(m=>u.jsx("button",{type:"button",className:d===m?"active":"",onClick:()=>h(m),children:j_[m]},m))}),u.jsx("div",{className:"add-lists",children:s.length===0?u.jsx("div",{className:"device-list-empty",children:"Alle kontroller er allerede placeret."}):g.map(m=>u.jsxs("button",{type:"button",className:"add-entry",onClick:()=>l(m.name),children:[u.jsx("span",{children:m.name}),u.jsx("span",{className:"iconbtn",children:u.jsx(Pt,{name:"plus",size:22})})]},m.name))})]})}function Zh(a){const[l,o]=j.useState({w:0,h:0}),s=j.useRef(null),d=j.useRef(null);return j.useLayoutEffect(()=>{var _;const h=a.current;if(s.current===h)return;if((_=d.current)==null||_.disconnect(),d.current=null,s.current=h,!h){o(b=>b.w===0&&b.h===0?b:{w:0,h:0});return}const g=()=>{const b={w:h.clientWidth,h:h.clientHeight};o(k=>k.w===b.w&&k.h===b.h?k:b)};g();const m=new ResizeObserver(g);m.observe(h),d.current=m}),j.useEffect(()=>()=>{var h;(h=d.current)==null||h.disconnect(),d.current=null,s.current=null},[]),l}function Os(a){return a.centerX2!==null&&a.centerY2!==null&&a.spanX!==null&&a.spanY!==null}const A_=4,C_=5;function D_(a){return a==="joystick"||a==="dpad"?{spanX:6,spanY:6}:a==="plot"?{spanX:7,spanY:4}:{spanX:A_,spanY:C_}}function qd(a){if(!Os(a))return null;const l=a.centerX2/2,o=a.centerY2/2;return{x0:l-a.spanX/2,x1:l+a.spanX/2,y0:o-a.spanY/2,y1:o+a.spanY/2}}function Jh(a,l,o=.02){return a.x0<l.x1-o&&l.x0<a.x1-o&&a.y0<l.y1-o&&l.y0<a.y1-o}function O_(a,l,o){const s=(o.cols-1)*2,d=(o.rows-1)*2,h=[];for(let g=l;g<=d-l;g+=2)for(let m=a;m<=s-a;m+=2)h.push({centerX2:m,centerY2:g});return h}function rh(a,l,o,s){const d=O_(a,l,s).filter(h=>{const g={x0:h.centerX2/2-a/2,x1:h.centerX2/2+a/2,y0:h.centerY2/2-l/2,y1:h.centerY2/2+l/2};return!o.some(m=>Jh(g,m))});return d.length===0?null:d[Math.floor(Math.random()*d.length)]}function L_(a,l){return(a-l.margin)/l.stepX}function B_(a,l){return(l.areaH-a-l.margin)/l.stepY}function Hd(a,l,o,s,d,h){if(a.spanX===null||a.spanY===null||a.centerX2===null||a.centerY2===null)return a;if(l==="left"||l==="right"){const b=Math.round(L_(s,h));if(l==="right"){const D=Math.max(o+1,Math.min(h.cols-1,b))-o;return{...a,spanX:D,centerX2:o*2+D}}const k=Math.min(o-1,Math.max(0,b)),x=o-k;return{...a,spanX:x,centerX2:o*2-x}}const g=Math.round(B_(d,h));if(l==="top"){const k=Math.max(o+1,Math.min(h.rows-1,g))-o;return{...a,spanY:k,centerY2:o*2+k}}const m=Math.min(o-1,Math.max(0,g)),_=o-m;return{...a,spanY:_,centerY2:o*2-_}}function z_(){const a=se(V=>V.layout),l=se(V=>V.active),o=se(V=>V.saveLayout),s=se(V=>V.setEditMode),d=se(V=>V.askConfirm),h=!!(l!=null&&l.canEdit),[g,m]=j.useState(()=>a.map(V=>({...V}))),[_,b]=j.useState(null),[k,x]=j.useState(!1),[E,D]=j.useState(null),[O,F]=j.useState(null),[H,P]=j.useState(null),[B,re]=j.useState(!1),[q,oe]=j.useState(!1),ge=j.useRef(null),te=j.useRef(null),pe=j.useRef(null),ve=Zh(te),Be=ve.w>0&&ve.h>0,ne=Dh(ve.w,ve.h,l==null?void 0:l.gridCols,l==null?void 0:l.gridRows),Ie=j.useMemo(()=>Be?sg(ne):[],[ne,Be]),xe=g.filter(Os),$e=g.filter(V=>!Os(V)),Z=j.useMemo(()=>{const V=new Set;for(let J=0;J<xe.length;J+=1)for(let ie=J+1;ie<xe.length;ie+=1){const Ce=qd(xe[J]),Pe=qd(xe[ie]);Ce&&Pe&&Jh(Ce,Pe)&&(V.add(xe[J].name),V.add(xe[ie].name))}return V},[xe]),N=Z.size>0,Q=j.useMemo(()=>lh(g)!==lh(a),[g,a]),de=j.useMemo(()=>{if(!E||!O)return null;const V=g.find(Ce=>Ce.name===E);if(!V||V.spanX===null||V.spanY===null)return null;const J=Dd(O.cx,O.cy,V.spanX,V.spanY,ne),ie=Ms({...V,centerX2:J.centerX2,centerY2:J.centerY2},ne);return ie?{name:V.name,rect:ie}:null},[g,E,O,ne]);function Re(V,J){m(ie=>ie.map(Ce=>Ce.name===V?J(Ce):Ce))}function _e(V){const J=te.current;if(!J)return{x:0,y:0};const ie=J.getBoundingClientRect(),Ce=J.clientWidth/ie.width,Pe=J.clientHeight/ie.height;return{x:Math.max(0,Math.min(J.clientWidth,(V.clientX-ie.left)*Ce)),y:Math.max(0,Math.min(J.clientHeight,(V.clientY-ie.top)*Pe))}}function T(V){var wt;const J=te.current;if(!J)return{cx:0,cy:0};const ie=J.getBoundingClientRect(),Ce=J.clientWidth/ie.width,Pe=J.clientHeight/ie.height,Ve=(wt=ge.current)==null?void 0:wt.getBoundingClientRect(),Me=Ve?Math.max(Ve.left,Math.min(Ve.right,V.clientX)):V.clientX,De=Ve?Math.max(Ve.top,Math.min(Ve.bottom,V.clientY)):V.clientY;return{cx:(Me-ie.left)*Ce,cy:(De-ie.top)*Pe}}function G(V,J){V.stopPropagation(),b(J.name);const ie=Ms(J,ne);ie&&(D(J.name),F({cx:ie.cx,cy:ie.cy}),V.currentTarget.setPointerCapture(V.pointerId))}function le(V){const J=pe.current,ie=te.current;if(!J||!ie||!E)return!1;const Ce=g.find(jn=>jn.name===E),Pe=Ce?Ms(Ce,ne):null;if(!Pe)return!1;const Ve=ie.getBoundingClientRect(),Me=Ve.width/ie.clientWidth,De=Ve.height/ie.clientHeight,wt=Ve.left+V.cx*Me,sn=Ve.top+V.cy*De,Pn=Pe.width*Me/2,ht=Pe.height*De/2,_r=wt-Pn,sl=wt+Pn,fn=sn-ht,mn=sn+ht,hn=J.getBoundingClientRect();return _r<hn.right&&hn.left<sl&&fn<hn.bottom&&hn.top<mn}function ae(V){if(E){const J=T(V);re(le(J)),F(J);return}if(H){const{x:J,y:ie}=_e(V);Re(H.name,Ce=>{if(H.kind==="side")return Hd(Ce,H.side,H.fixedWhole,J,ie,ne);const Pe=Hd(Ce,H.sideX,H.fixedWholeX,J,ie,ne);return Hd(Pe,H.sideY,H.fixedWholeY,J,ie,ne)})}}function ce(){if(E&&O)if(le(O))ze(E);else{const V=g.find(J=>J.name===E);if(V&&V.spanX!==null&&V.spanY!==null){const J=Dd(O.cx,O.cy,V.spanX,V.spanY,ne);Re(E,ie=>({...ie,centerX2:J.centerX2,centerY2:J.centerY2}))}}D(null),F(null),P(null),re(!1)}function fe(V){return{leftWhole:(V.centerX2-V.spanX)/2,rightWhole:(V.centerX2+V.spanX)/2,bottomWhole:(V.centerY2-V.spanY)/2,topWhole:(V.centerY2+V.spanY)/2}}function Te(V,J,ie){if(V.stopPropagation(),J.centerX2===null||J.centerY2===null||J.spanX===null||J.spanY===null)return;const{leftWhole:Ce,rightWhole:Pe,bottomWhole:Ve,topWhole:Me}=fe(J),De=ie==="right"?Ce:ie==="left"?Pe:ie==="top"?Ve:Me;b(J.name),P({kind:"side",name:J.name,side:ie,fixedWhole:De}),V.currentTarget.setPointerCapture(V.pointerId)}function We(V,J,ie,Ce){if(V.stopPropagation(),J.centerX2===null||J.centerY2===null||J.spanX===null||J.spanY===null)return;const{leftWhole:Pe,rightWhole:Ve,bottomWhole:Me,topWhole:De}=fe(J);b(J.name),P({kind:"corner",name:J.name,sideX:ie,sideY:Ce,fixedWholeX:ie==="right"?Pe:Ve,fixedWholeY:Ce==="top"?Me:De}),V.currentTarget.setPointerCapture(V.pointerId)}function ze(V){Re(V,J=>({...J,centerX2:null,centerY2:null,spanX:null,spanY:null,rotation:0})),b(null)}function me(V){x(!1);const J=g.find(wt=>wt.name===V);if(!J)return;const{spanX:ie,spanY:Ce}=D_(J.type),Pe=xe.map(qd).filter(wt=>wt!==null);let Ve=ie,Me=Ce,De=rh(Ve,Me,Pe,ne);for(;!De&&(Ve>2||Me>2);)Ve=Math.max(2,Ve-1),Me=Math.max(2,Me-1),De=rh(Ve,Me,Pe,ne);De||(Ve=ie,Me=Ce,De=Dd(ne.areaW/2,ne.areaH/2,Ve,Me,ne)),Re(V,()=>({...J,spanX:Ve,spanY:Me,rotation:0,centerX2:De.centerX2,centerY2:De.centerY2})),b(V)}async function je(){N||(oe(!0),await o(g),oe(!1))}function at(){if(!Q){s(!1);return}d({title:"Kassér ændringer",message:"Vil du forlade redigering og kassere dine layout-ændringer?",confirmLabel:"Kassér",onConfirm:()=>s(!1)})}return u.jsxs("div",{className:"edit-view",ref:ge,children:[u.jsxs("div",{className:"edit-band edit-toolbar-band",children:[h&&u.jsx("button",{type:"button",className:"btn btn-outline edit-toolbar-btn",onClick:()=>x(!0),"aria-label":"Tilføj kontrol",children:"Tilføj"}),u.jsx("button",{ref:pe,type:"button",className:`btn btn-outline edit-toolbar-btn edit-trash ${B?"over":""} ${E?"dragging":""}`,disabled:!_,onClick:()=>_&&ze(_),"aria-label":"Slet valgt element",title:"Vælg et element, og tryk her for at slette det - eller træk et element hertil",children:"Slet"})]}),u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:`controls-area ${E?"dragging":""}`,ref:te,style:{touchAction:"none"},onPointerMove:ae,onPointerUp:ce,onPointerDown:()=>b(null),children:Be&&u.jsxs(u.Fragment,{children:[u.jsx("svg",{width:ne.areaW,height:ne.areaH,style:{position:"absolute",inset:0,pointerEvents:"none"},children:Ie.map((V,J)=>u.jsx("circle",{cx:V.x,cy:V.y,r:2.5,fill:"rgba(198,80,78,0.45)"},J))}),de&&!B&&u.jsx("div",{className:"snap-preview",style:{left:de.rect.cx,top:de.rect.cy,width:de.rect.width,height:de.rect.height}}),xe.map(V=>{const J=E===V.name&&O,ie=Ms(V,ne);if(!ie)return null;const Ce=J?O.cx:ie.cx,Pe=J?O.cy:ie.cy,Ve=_===V.name,Me={left:Ce,top:Pe,width:ie.width,height:ie.height,outline:Ve?"3px solid var(--text)":"none",outlineOffset:2,zIndex:Ve?2:1};return u.jsxs("div",{className:`control ${Z.has(V.name)?"colliding":""} ${J&&B?"control-deleting":""}`,style:Me,onPointerDown:De=>G(De,V),children:[V.type==="button"?u.jsx("div",{className:"control-button",style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},children:u.jsx(bc,{name:V.name,width:ie.width,height:ie.height,rotation:V.rotation})}):V.type==="toggle"?u.jsx("div",{className:"control-toggle on",style:{width:"100%",height:"100%"},children:u.jsx(bc,{name:V.name,width:ie.width,height:ie.height,rotation:V.rotation})}):V.type==="radar"?u.jsx(Gh,{control:V,pings:[],width:ie.width,height:ie.height,preview:!0}):V.type==="plot"?u.jsx(Yh,{control:V,points:[],width:ie.width,height:ie.height,preview:!0}):V.type==="text"?u.jsx(Fh,{message:V.name,width:ie.width,height:ie.height,rotation:V.rotation}):V.type==="joystick"?u.jsx(Qh,{control:V,width:ie.width,height:ie.height,pos:{nx:0,ny:0}}):V.type==="dpad"?u.jsx(Wh,{control:V}):u.jsx("div",{className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:u.jsx(Xh,{name:V.name,rotation:V.rotation,width:ie.width,height:ie.height,value:50,showEnds:!0,lowLabel:String(V.sliderMin??0),highLabel:String(V.sliderMax??100),fillColor:Z.has(V.name)?"var(--disabled)":"var(--red)"})}),Ve&&u.jsxs(u.Fragment,{children:[u.jsx("button",{type:"button",className:"edit-handle edit-handle-top","aria-label":"Ændr højde foroven",onPointerDown:De=>Te(De,V,"top")}),u.jsx("button",{type:"button",className:"edit-handle edit-handle-bottom","aria-label":"Ændr højde forneden",onPointerDown:De=>Te(De,V,"bottom")}),u.jsx("button",{type:"button",className:"edit-handle edit-handle-left","aria-label":"Ændr bredde til venstre",onPointerDown:De=>Te(De,V,"left")}),u.jsx("button",{type:"button",className:"edit-handle edit-handle-right","aria-label":"Ændr bredde til højre",onPointerDown:De=>Te(De,V,"right")}),u.jsx("button",{type:"button",className:"edit-corner-handle edit-corner-tl","aria-label":"Skalér fra øverste venstre hjørne",onPointerDown:De=>We(De,V,"left","top")}),u.jsx("button",{type:"button",className:"edit-corner-handle edit-corner-tr","aria-label":"Skalér fra øverste højre hjørne",onPointerDown:De=>We(De,V,"right","top")}),u.jsx("button",{type:"button",className:"edit-corner-handle edit-corner-bl","aria-label":"Skalér fra nederste venstre hjørne",onPointerDown:De=>We(De,V,"left","bottom")}),u.jsx("button",{type:"button",className:"edit-corner-handle edit-corner-br","aria-label":"Skalér fra nederste højre hjørne",onPointerDown:De=>We(De,V,"right","bottom")})]})]},V.name)}),q&&u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})]})})}),u.jsxs("div",{className:"edit-band edit-actions-band",children:[u.jsx("button",{className:"btn btn-outline",style:{flex:1},type:"button",onClick:at,disabled:q,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary",style:{flex:1},type:"button",onClick:je,disabled:N||q,children:q?"Gemmer...":"Gem"})]}),k&&u.jsx(R_,{unplaced:$e,onAdd:me,onClose:()=>x(!1)})]})}function lh(a){return JSON.stringify(a.map(l=>({type:l.type,name:l.name,centerX2:l.centerX2,centerY2:l.centerY2,spanX:l.spanX,spanY:l.spanY,rotation:l.rotation})))}const ah=22;function U_(a,l){if(a==null||l==null)return null;const o=Math.abs(a),s=Math.abs(l);return o<ah&&s<ah?null:s>o?l>0?270:90:a>=0?0:180}function q_(){var l,o;if(typeof window>"u")return 0;const a=(o=(l=window.screen)==null?void 0:l.orientation)==null?void 0:o.angle;return typeof a=="number"?(a%360+360)%360:0}function H_(a){const l=(Math.round(a/90)*90%360+360)%360;return l===90||l===180||l===270?l:0}function V_(a=!0){const[l,o]=j.useState(0);return j.useEffect(()=>{var E;if(!a||typeof window>"u"){o(0);return}let s=0,d=!1;const h=()=>{d=!0},g=D=>{if(!d){s!==0&&(s=0,o(0));return}const O=U_(D.beta,D.gamma);if(O==null)return;const F=H_(O-q_());F!==s&&(s=F,o(F))},m=(E=window.screen)==null?void 0:E.orientation;m==null||m.addEventListener("change",h),window.addEventListener("orientationchange",h);let _=!1;const b=()=>{_||(_=!0,window.addEventListener("deviceorientation",g))},k=DeviceOrientationEvent.requestPermission;let x=null;if(typeof k=="function"){const D=()=>{k().then(O=>{O==="granted"&&b()}).catch(()=>{}),x==null||x()};window.addEventListener("pointerdown",D,{once:!0}),x=()=>window.removeEventListener("pointerdown",D)}else b();return()=>{window.removeEventListener("deviceorientation",g),m==null||m.removeEventListener("change",h),window.removeEventListener("orientationchange",h),x==null||x(),o(0)}},[a]),l}function I_(){const a=se(q=>q.layout),l=se(q=>q.editMode),o=se(q=>q.active),s=se(q=>q.sliderValues),d=se(q=>q.toggleValues),h=se(q=>q.radarPings),g=se(q=>q.textValues),m=se(q=>q.plotSeries),_=se(q=>q.toggleSideMenu),b=se(q=>q.sendButton),k=se(q=>q.sendSlider),x=se(q=>q.sendToggle),E=se(q=>q.sendJoystick),D=se(q=>q.sendDpad),O=j.useRef(null),F=Zh(O),H=Dh(F.w,F.h,o==null?void 0:o.gridCols,o==null?void 0:o.gridRows),P=F.w>0&&F.h>0,B=V_(!l),re=a.filter(Os);return u.jsxs("div",{className:"screen control-screen",children:[u.jsx(df,{title:"Pico Kontrol Panel",onMenu:()=>_()}),l?u.jsx(z_,{}):u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:"controls-area",ref:O,onContextMenu:q=>q.preventDefault(),onPointerDown:q=>{q.target===q.currentTarget&&q.preventDefault()},children:P?re.map(q=>{const oe=Ms(q,H);return oe?u.jsx(Kg,{control:q,rect:oe,disabled:!1,orientation:B,latestValue:q.type==="slider"?s[q.name]:void 0,toggleValue:q.type==="toggle"?d[q.name]:void 0,radarPings:q.type==="radar"?h[q.name]:void 0,textValue:q.type==="text"?g[q.name]:void 0,plotPoints:q.type==="plot"?m[q.name]:void 0,onButton:b,onSlider:k,onToggle:x,onJoystick:E,onDpad:D},q.name):null}):u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})})})]})}const P_="",ih="",sh="",ga="";function ks(a){return new Promise(l=>setTimeout(l,a))}class F_{constructor(l){this.transport=l}async interrupt(){await this.transport.write(sh),await ks(80),await this.transport.write(sh)}async friendlyRepl(){await this.transport.write(ih)}async softReset(){await this.transport.write(ga)}async stop(){await this.interrupt(),await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(`try:
    ble.shutdown()
except Exception:
    pass
`).catch(()=>{})}async runFile(l,o){await this.interrupt(),await this.waitForFriendlyPrompt().catch(async()=>{await this.friendlyRepl().catch(()=>{}),await ks(180)}),await ks(120),o==null||o(),await this.transport.writeLine(`import builtins as _pkp_builtins; exec(_pkp_builtins.open(${JSON.stringify(l)}).read())`)}async sendFriendlyLine(l){await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(l)}async sendProgramInput(l){await this.transport.writeLine(l)}async enterRawRepl(l=2500){if(await this.interrupt(),await ks(80),await this.transport.write(`\r
`),await ks(40),!(await this.collectUntil(async()=>{await this.transport.write(P_)},s=>s.includes("raw REPL")||s.includes("raw REPL; CTRL-B to exit"),l)).includes("raw REPL"))throw new Error("Kunne ikke skifte til MicroPython raw REPL.")}async exec(l,o=6e3){await this.enterRawRepl();const s=await this.collectUntil(async()=>{await this.transport.write(l),l.endsWith(`
`)||await this.transport.write(`
`),await this.transport.write(ga)},d=>d.includes(`${ga}${ga}`)||d.includes(`${ga}>`),o);return await this.friendlyRepl().catch(()=>{}),G_(s)}collectUntil(l,o,s){return new Promise((d,h)=>{let g="",m=null;const _=setTimeout(()=>{m==null||m(),h(new Error("Timeout ved USB REPL kommando."))},s);m=this.transport.addDataListener(b=>{g+=b,o(g)&&(clearTimeout(_),m==null||m(),d(g))}),l().catch(b=>{clearTimeout(_),m==null||m(),h(b instanceof Error?b:new Error("USB REPL kommando fejlede."))})})}async waitForFriendlyPrompt(l=1600){await this.collectUntil(async()=>{await this.transport.write(ih)},o=>/(^|\r?\n)>>> ?$/.test(o),l)}}function G_(a){const l=a.indexOf("OK"),o=a.indexOf(ga,l>=0?l:0),s=o>=0?a.indexOf(ga,o+1):-1;if(l<0||o<0)return{output:a.trim(),error:"",raw:a};const d=a.slice(l+2,o).replace(/^\r?\n/,"").trimEnd(),h=s>=0?a.slice(o+1,s).trim():"";return{output:d,error:h,raw:a}}const $_=[{version:"MicroPython v1.28.0",date:"2026-04-06",stamp:"20260406",tag:"v1.28.0"},{version:"MicroPython v1.27.0",date:"2025-12-09",stamp:"20251209",tag:"v1.27.0"},{version:"MicroPython v1.26.1",date:"2025-09-11",stamp:"20250911",tag:"v1.26.1"},{version:"MicroPython v1.26.0",date:"2025-08-09",stamp:"20250809",tag:"v1.26.0"},{version:"MicroPython v1.25.0",date:"2025-04-15",stamp:"20250415",tag:"v1.25.0"},{version:"MicroPython v1.24.1",date:"2024-11-29",stamp:"20241129",tag:"v1.24.1"},{version:"MicroPython v1.24.0",date:"2024-10-25",stamp:"20241025",tag:"v1.24.0"},{version:"MicroPython v1.23.0",date:"2024-06-02",stamp:"20240602",tag:"v1.23.0"},{version:"MicroPython v1.22.2",date:"2024-02-22",stamp:"20240222",tag:"v1.22.2"},{version:"MicroPython v1.22.1",date:"2024-01-05",stamp:"20240105",tag:"v1.22.1"}],Y_=[{board:"Raspberry Pi Pico",firmwareName:"RPI_PICO"},{board:"Raspberry Pi Pico W",firmwareName:"RPI_PICO_W"}],Vl=Y_.flatMap(({board:a,firmwareName:l})=>$_.map(({version:o,date:s,stamp:d,tag:h})=>{const g=`${l}-${d}-${h}.uf2`;return{board:a,version:o,date:s,fileName:g,url:`https://micropython.org/resources/firmware/${g}`}})),Vd=512,Id=`import builtins as _pkp_builtins
`;function il(a){return JSON.stringify(a)}function X_(a){return`bytes.fromhex(${JSON.stringify([...a].map(l=>l.toString(16).padStart(2,"0")).join(""))})`}function K_(a,l){return`${a==="/"?"":a.replace(/\/$/,"")}/${l}`}class Q_{constructor(l){this.repl=l}async list(l="/"){const o=`
import os
base = ${il(l)}
for name in os.listdir(base):
    p = (${il(l)}.rstrip('/') + '/' + name) if ${il(l)} != '/' else '/' + name
    try:
        st = os.stat(p)
        mode = st[0]
        kind = 'dir' if (mode & 0x4000) else 'file'
        size = st[6]
    except Exception:
        kind = 'unknown'
        size = -1
    print(name + '\\t' + kind + '\\t' + str(size))
`,s=await this.repl.exec(o);if(s.error)throw new Error(s.error);return s.output.split(/\r?\n/).map(d=>d.trim()).filter(Boolean).map(d=>{const[h,g,m]=d.split("	"),_=g==="dir"||g==="file"?g:"unknown",b=parseInt(m??"",10);return{name:h,path:K_(l,h),type:_,...Number.isFinite(b)&&b>=0?{size:b}:{}}})}async readText(l){const o=`
import sys
${Id}with _pkp_builtins.open(${il(l)}, 'rb') as f:
    while True:
        b = f.read(${Vd})
        if not b:
            break
        print(b.hex())
`,s=await this.repl.exec(o,1e4);if(s.error)throw new Error(s.error);const d=s.output.replace(/\s+/g,"");return new TextDecoder().decode(W_(d))}async writeText(l,o,s){const d=new TextEncoder().encode(o);if(s==null||s(5,"Klargør fil..."),await this.repl.exec(`${Id}_pkp_builtins.open(${il(l)}, 'wb').close()`),d.length===0){s==null||s(100,"Gemt på Pico");return}for(let h=0;h<d.length;h+=Vd){const g=d.slice(h,h+Vd),m=`
${Id}with _pkp_builtins.open(${il(l)}, 'ab') as f:
    f.write(${X_(g)})
`,_=await this.repl.exec(m,1e4);if(_.error)throw new Error(_.error);const b=Math.min(h+g.length,d.length);s==null||s(10+Math.round(b/d.length*85),`Gemmer ${b}/${d.length} bytes...`)}s==null||s(100,"Gemt på Pico")}async replaceTextSafely(l,o,s,d={}){const h=`${l}.tmp`;if(await this.writeText(h,o,(_,b)=>s==null?void 0:s(Math.min(70,_*.7),b)),s==null||s(78,"Verificerer fil..."),await this.readText(h)!==o)throw await this.delete(h).catch(()=>{}),new Error(`Verificering fejlede for ${l}.`);s==null||s(88,"Udskifter fil...");let m=!!d.createBackup;if(m){const _=await this.readText(l).catch(()=>null);m=_!==null&&_!==o}if(m){const _=await this.nextBackupPath(l).catch(()=>`${l}.backup`);await this.rename(l,_).catch(()=>{})}else await this.delete(l).catch(()=>{});await this.rename(h,l),s==null||s(100,"Installeret på Pico")}async delete(l){const o=await this.repl.exec(`
import os
os.remove(${il(l)})
`);if(o.error)throw new Error(o.error)}async nextBackupPath(l){const o=await this.list("/"),s=new Set(o.map(x=>x.path.toLowerCase())),d=l.replace(/\\/g,"/"),h=d.lastIndexOf("/"),g=h>=0?d.slice(0,h+1):"/",m=h>=0?d.slice(h+1):d.replace(/^\/+/,""),_=m.lastIndexOf("."),b=_>0?m.slice(0,_):m,k=_>0?m.slice(_):"";for(let x=1;x<1e3;x+=1){const E=`${g}${b}_backup${x}${k}`;if(!s.has(E.toLowerCase()))return E}return`${g}${b}_backup${Date.now()}${k}`}async rename(l,o){const s=await this.repl.exec(`
import os
os.rename(${il(l)}, ${il(o)})
`);if(s.error)throw new Error(s.error)}}function W_(a){const l=new Uint8Array(Math.floor(a.length/2));for(let o=0;o<l.length;o+=1)l[o]=parseInt(a.slice(o*2,o*2+2),16);return l}const Z_=`from machine import Pin                    # Giver adgang til pins på Pico W, fx LED'en\r
import utime as time                       # Bruges til tid, pauser og timere\r
import network                             # Bruges til at forbinde Pico W til Wi-Fi\r
import gc                                  # Bruges til at rydde op i hukommelsen\r
\r
try:                                       # Prøv først MicroPython-versionen af requests\r
    import urequests as requests           # urequests henter data fra internettet\r
except ImportError:                        # Hvis urequests ikke findes\r
    import requests                        # Brug den almindelige requests i stedet\r
\r
from PicoBluetooth import PicoBluetooth    # Biblioteket der laver Bluetooth kontrolpanelet\r
\r
WIFI_SSID = "dit-wifi-navn"                # Skift til navnet på dit Wi-Fi (SSID)\r
WIFI_PASSWORD = "dit-wifi-kodeord"         # Skift til kodeordet til dit Wi-Fi\r
\r
DEVICE_NAME = "OdenseVejr"                 # Navnet Pico W viser i Bluetooth-listen\r
\r
BluetoothControls = (                      # Felterne appen viser i kontrolpanelet\r
    ("text", "STATUS"),                    # Viser hvad programmet laver lige nu\r
    ("text", "VEJR_NU"),                   # Viser klokkeslæt og vejrtype\r
    ("text", "TEMPERATUR"),                # Viser temperatur og føles-som temperatur\r
    ("text", "REGN"),                      # Viser regn og luftfugtighed\r
    ("text", "VIND"),                      # Viser vindhastighed og vindretning\r
)\r
\r
LATITUDE = "55.4038"                       # Breddegrad for Odense - skift til din egen by\r
LONGITUDE = "10.4024"                      # Længdegrad for Odense - skift til din egen by\r
\r
OPDATER_HVERT_MS = 60 * 1000               # Hent nyt vejr hvert 60. sekund\r
WIFI_TIMEOUT_MS = 15000                    # Giv op efter 15 sekunder uden Wi-Fi\r
\r
WEATHER_URL = (                            # Her bygger vi adressen til vejr-API'et\r
    "http://api.open-meteo.com/v1/forecast"  # Open-Meteos gratis API-adresse\r
    "?latitude=" + LATITUDE +              # Sender byens breddegrad med i kaldet\r
    "&longitude=" + LONGITUDE +            # Sender byens længdegrad med i kaldet\r
    "&current=temperature_2m,relative_humidity_2m,apparent_temperature,"  # Temperatur, fugtighed, føles-som\r
    "precipitation,weather_code,wind_speed_10m,wind_direction_10m"        # Regn, vejrkode, vind og vindretning\r
    "&timezone=Europe%2FCopenhagen"        # Bed API'et om dansk tid\r
)\r
\r
VEJRKODER = {                              # Open-Meteo sender tal, som vi laver om til tekst\r
    0: "Klar himmel", 1: "Mest klart", 2: "Delvist skyet", 3: "Overskyet",\r
    45: "Taage", 48: "Rimtaage",\r
    51: "Let stoevregn", 53: "Stoevregn", 55: "Kraftig stoevregn",\r
    56: "Let frostregn", 57: "Kraftig frostregn",\r
    61: "Let regn", 63: "Regn", 65: "Kraftig regn",\r
    66: "Let frostregn", 67: "Kraftig frostregn",\r
    71: "Let sne", 73: "Sne", 75: "Kraftig sne", 77: "Snefnug",\r
    80: "Lette byger", 81: "Regnbyger", 82: "Kraftige byger",\r
    85: "Lette snebyger", 86: "Kraftige snebyger",\r
    95: "Torden", 96: "Torden med hagl", 99: "Kraftigt tordenvejr",\r
}\r
\r
\r
led = Pin("LED", Pin.OUT)                  # Gør den indbyggede LED klar til brug\r
led.off()                                  # Sluk LED'en når programmet starter\r
\r
wlan = network.WLAN(network.STA_IF)        # Wi-Fi objekt så Pico W kan forbinde til routeren\r
\r
naeste_vejr_tid = time.ticks_ms()          # Hvornår vi næste gang skal hente vejr (nu)\r
\r
\r
def vis(felt, tekst):\r
    """Send tekst til et felt i appen, og skriv den samme tekst i terminalen."""\r
    ble.send_text(felt, tekst)             # Send teksten til feltet i kontrolpanelet\r
    print(felt + ":")                      # Skriv feltets navn i terminalen\r
    print(tekst)                           # \\n bliver til rigtige linjeskift i terminalen\r
    time.sleep_ms(80)                       # Lille pause, så appen kan nå at modtage beskeden\r
\r
\r
def forbind_wifi():\r
    """Tænd Wi-Fi og vent, indtil Pico W er på nettet (eller giv op)."""\r
    wlan.active(True)                      # Tænd Wi-Fi\r
    if wlan.isconnected():                 # Er vi allerede på nettet?\r
        return                             # Så behøver vi ikke gøre mere\r
\r
    print("Forbinder til Wi-Fi...")        # Skriv i terminalen at Wi-Fi starter\r
    wlan.connect(WIFI_SSID, WIFI_PASSWORD) # Forbind med navn og kode ovenfor\r
\r
    start = time.ticks_ms()                # Husk hvornår vi begyndte at vente\r
    while not wlan.isconnected():          # Bliv ved indtil Wi-Fi er forbundet\r
        if time.ticks_diff(time.ticks_ms(), start) > WIFI_TIMEOUT_MS:  # For lang tid?\r
            raise RuntimeError("Wi-Fi tidsgrænse")  # Giv op med en fejl\r
        time.sleep_ms(250)                 # Vent lidt før vi tjekker igen\r
\r
    print("Wi-Fi forbundet:", wlan.ifconfig()[0])  # Skriv Pico W's IP-adresse\r
\r
\r
def hent_og_vis_vejr():\r
    """Hent vejret fra API'et og vis det i appen og i terminalen."""\r
    svar = None                            # Her gemmer vi API-svaret\r
    try:\r
        vis("STATUS", "Forbinder til Wi-Fi...")  # Fortæl hvad der sker\r
        forbind_wifi()                     # Sørg for at vi er på nettet\r
\r
        gc.collect()                       # Ryd op i hukommelsen før API-kaldet\r
        vis("STATUS", "Henter vejr...")    # Fortæl at vi kalder API'et\r
        svar = requests.get(WEATHER_URL)   # Send HTTP GET til Open-Meteo\r
\r
        if svar.status_code != 200:        # 200 betyder OK\r
            raise RuntimeError("API-fejl: " + str(svar.status_code))\r
\r
        vejr = svar.json()["current"]      # Find delen med aktuelt vejr i svaret\r
\r
        klokkeslet = vejr["time"].split("T")[-1]   # Tag kun tiden efter T, fx 14:15\r
        vejrtekst = VEJRKODER.get(vejr["weather_code"], "Ukendt vejr")  # Tal -> tekst\r
\r
        # Byg fire beskeder med \\n, så hvert felt viser to linjer i appen.\r
        vis("VEJR_NU", "Tid: {}\\nVejr: {}".format(klokkeslet, vejrtekst))\r
        vis("TEMPERATUR", "Temperatur: {} C\\nFoeles som: {} C".format(\r
            vejr["temperature_2m"], vejr["apparent_temperature"]))\r
        vis("REGN", "Regn: {} mm\\nFugtighed: {} %".format(\r
            vejr["precipitation"], vejr["relative_humidity_2m"]))\r
        vis("VIND", "Vind: {} km/h\\nRetning: {} grader".format(\r
            vejr["wind_speed_10m"], vejr["wind_direction_10m"]))\r
\r
        vis("STATUS", "Vejrdata OK")       # Alt gik godt\r
\r
    except Exception as fejl:              # Hvis noget går galt, lander vi her\r
        print("Fejl:", fejl)               # Skriv fejlen i terminalen\r
        vis("STATUS", "Fejl")              # Vis fejlstatus i appen\r
        vis("VEJR_NU", str(fejl))          # Vis selve fejlen i første vejr-felt\r
        vis("TEMPERATUR", "-")             # Ryd de andre felter\r
        vis("REGN", "-")\r
        vis("VIND", "-")\r
\r
    finally:                               # Kører både ved succes og fejl\r
        if svar is not None:               # Fik vi et svar?\r
            svar.close()                   # Luk det, så hukommelsen frigives\r
        gc.collect()                       # Ryd op igen\r
\r
\r
def on_connect():                          # Kører automatisk når Bluetooth forbinder\r
    global naeste_vejr_tid\r
    led.on()                               # Tænd LED'en når nogen forbinder\r
    naeste_vejr_tid = time.ticks_ms()      # Hent vejr med det samme\r
    vis("STATUS", "Forbundet")             # Sig hej til appen\r
\r
\r
def on_disconnect():                       # Kører automatisk når Bluetooth afbryder\r
    led.off()                              # Sluk LED'en når ingen er forbundet\r
\r
\r
ble = PicoBluetooth(                       # Start Bluetooth kontrolpanelet\r
    base_controls=BluetoothControls,       # Fortæl hvilke felter appen skal vise\r
    device_base_name=DEVICE_NAME,          # Fortæl hvad enheden skal hedde\r
    callbacks=globals()                    # Gør on_connect og on_disconnect synlige\r
)\r
\r
\r
while True:                                # Hovedprogrammet kører igen og igen\r
    if ble.connected and time.ticks_diff(time.ticks_ms(), naeste_vejr_tid) >= 0:\r
        hent_og_vis_vejr()                 # Tid til at hente nyt vejr\r
        naeste_vejr_tid = time.ticks_add(time.ticks_ms(), OPDATER_HVERT_MS)  # Planlæg næste gang\r
\r
    time.sleep_ms(100)                     # Lille pause, så Pico W ikke bruger al CPU-tid\r
`,J_=`import ubluetooth\r
import utime as time\r
from micropython import const\r
import struct\r
import os\r
import ubinascii\r
import machine\r
\r
__version__ = '0.8.1'\r
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
\r
# Max UTF-8 bytes for device_base_name; enforced by _validate_device_name.\r
# See "Advertising" in the doc for the 31-byte legacy-adv math this is from.\r
MAX_DEVICE_NAME_BYTES  = 20\r
SLIDER_RECENTER_MODES  = ["none", "bottom", "middle", "top"]\r
PLOT_STYLES            = ["line", "bar", "dot"]\r
PLOT_AXIS_MODES        = ["range", "labels", "none"]\r
\r
# Wire marker standing in for a real "\\n" inside a text-control message\r
# (a literal newline can't travel over the wire). See the doc.\r
TEXT_LINEBREAK = "\\x1e"   # ASCII Record Separator\r
\r
# Cap on buffered device->app telemetry lines before the app is ready (see\r
# _emit_telemetry), so a flood of sends from on_connect can't grow unbounded.\r
MAX_PENDING_TELEMETRY  = 64\r
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
# Extra wire fields per control type, beyond the 5 shared geometry fields, as\r
# (key, default) in wire order; see "Layout streaming" table in the doc. To\r
# add a field: a row here, its parsing branch in _initialize_controls, and\r
# getters in send_<type>/on_<type>.\r
_EXTRA_FIELDS = {\r
    "slider":   (("min", 0), ("max", 100), ("recenter", "none")),\r
    "toggle":   (("initial", 0),),\r
    "radar":    (("minAngle", 0), ("maxAngle", 180), ("maxDistance", 200), ("fadeMs", 1200)),\r
    "joystick": (("xmin", -100), ("xmax", 100), ("ymin", -100), ("ymax", 100),\r
                 ("xrecenter", "middle"), ("yrecenter", "middle")),\r
    "plot":     (("min", 0), ("max", 100), ("history", 30), ("style", "line"),\r
                 ("xAxis", "labels"), ("yAxis", "range"), ("labelMaxPct", 24)),\r
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
        # Fail fast, before touching the radio, on a name too long to advertise.\r
        self._validate_device_name(device_base_name)\r
\r
        # ---- BLE state\r
        self.ble = ubluetooth.BLE()\r
        # Force the radio off first - a previous program's radio/IRQ can outlive it; see the doc.\r
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
        # Icon slug string (e.g. "tabler:robot"), stored/echoed verbatim - never\r
        # cast to int. Empty means unset -> the app uses its default. See "Handshake" in the doc.\r
        self.icon_id = ""\r
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
        # ---- Outbound telemetry readiness (device -> app; see the doc).\r
        # Public (no leading underscore) on purpose: main.py can poll\r
        # ble.ready from the main loop to know it's safe to send without\r
        # going through _pending_telemetry's small pre-handshake buffer -\r
        # see the doc's note on _pending_telemetry / MAX_PENDING_TELEMETRY.\r
        self.ready = False\r
        self._pending_telemetry = []\r
\r
        # ---- Outbound send serialization (see send_with_retry)\r
        self._send_lock = False\r
        self._send_backlog = []\r
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
    def _validate_device_name(self, device_base_name):\r
        name_bytes = len(str(device_base_name).encode())\r
        if name_bytes > MAX_DEVICE_NAME_BYTES:\r
            raise ValueError(\r
                "device_base_name '{}' is {} bytes, but only {} bytes fit in the BLE "\r
                "advertising name (with the 'PicoW-' prefix). Shorten DEVICE_NAME in "\r
                "main.py.".format(device_base_name, name_bytes, MAX_DEVICE_NAME_BYTES))\r
\r
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
                # spec: ('plot', NAME, min, max, history, style, xAxis, yAxis, labelMaxPct)\r
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
                if len(spec) >= 7 and spec[6] in PLOT_AXIS_MODES:\r
                    ctrl["xAxis"] = spec[6]\r
                if len(spec) >= 8 and spec[7] in PLOT_AXIS_MODES:\r
                    ctrl["yAxis"] = spec[7]\r
                if len(spec) >= 9:\r
                    ctrl["labelMaxPct"] = _safe_cast(spec[8], lambda v: max(8, min(45, float(v))), 24)\r
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
                    # Icon slug string, stored verbatim. See __init__.\r
                    self.icon_id = val\r
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
            self.icon_id = ""\r
            self.can_others_connect = 0\r
            self.can_others_edit = 0\r
            self.can_others_edit_code = 0\r
            self.save_settings_to_file("", "", "", 0, 0, 0)\r
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
            self.icon_id = str(icon_id)\r
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
            # Atomic swap (littlefs overwrites atomically; FAT needs remove-then-rename - see doc).\r
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
            # File present but unreadable: fall back in memory, leave the file intact.\r
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
                # Only geometry carries over (_merge_base_with_layout_override); type\r
                # fields always come from this run's BluetoothControls. See "Layout reconciliation" in the doc.\r
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
        self.ready = False\r
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
        self._send_lock = False\r
        self._send_backlog = []\r
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
        """\r
        Send an important protocol message, retrying on failure.\r
\r
        A single message's chunks must all reach the notify characteristic\r
        before the next message's chunks start - otherwise the app's inbound\r
        byte stream splices two messages together into one corrupted line\r
        (see "Reliable stream framing" in the doc). This function is called\r
        both from ordinary code (main.py telemetry, the main loop) and from\r
        inside the BLE IRQ (handshake/reliable-stream replies), and handling\r
        one inbound line can itself call back in here to send a reply while\r
        an earlier call from somewhere else is still mid-transmission (e.g.\r
        paused in one of the chunk_gap_ms sleeps below). The lock+backlog\r
        make that safe: a reentrant call queues its message and returns\r
        immediately instead of writing to the characteristic concurrently,\r
        and whichever call already holds the lock drains the backlog - one\r
        whole message at a time - before it returns.\r
        """\r
        if self._send_lock:\r
            self._send_backlog.append((msg, max_attempts, chunk_size, chunk_gap_ms))\r
            return True\r
\r
        self._send_lock = True\r
        try:\r
            result = self._transmit_with_retry(msg, max_attempts, chunk_size, chunk_gap_ms)\r
            while self._send_backlog:\r
                queued_msg, queued_attempts, queued_chunk_size, queued_gap = self._send_backlog.pop(0)\r
                self._transmit_with_retry(queued_msg, queued_attempts, queued_chunk_size, queued_gap)\r
            return result\r
        finally:\r
            self._send_lock = False\r
\r
    def _transmit_with_retry(self, msg, max_attempts, chunk_size, chunk_gap_ms):\r
        """Actually writes msg to the notify characteristic, chunked, with retries. Only called while _send_lock is held - see send_with_retry."""\r
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
            # First inbound line proves notifications are on; unlocks buffered telemetry (see doc).\r
            if not self.ready:\r
                self.ready = True\r
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
                    self.icon_id,\r
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
            icon_id = icon_id_s  # icon slug string, stored as-is\r
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
            icon_id = parts[1] if parts[1] else self.icon_id\r
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
                # Only geometry is kept (_merge_base_with_layout_override), not what the\r
                # app saved for type fields. See "Layout reconciliation" in the doc.\r
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
        if self.ready:\r
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
    def _encode_plot_label(self, label):\r
        # Same "\\n" -> TEXT_LINEBREAK swap as _encode_text_message, but a plot label\r
        # is a mid-line CSV field (not the last one), so commas get stripped too.\r
        try:\r
            text = str(label)\r
        except:\r
            return ""\r
        text = text.replace("\\r\\n", "\\n").replace("\\r", "\\n").replace(",", " ").strip()\r
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
    def send_slider_state(self, name, value):\r
        """Send current slider state to the app: slider_state,<NAME>,<VALUE>."""\r
        if not self.connected:\r
            return\r
        try:\r
            clean_name = self._protocol_field(name)\r
            slider_value = round(float(value), 2)\r
            self._emit_telemetry(\r
                "slider_state,{},{}\\n".format(clean_name, slider_value),\r
                coalesce_key=("slider_state", clean_name),\r
            )\r
        except Exception as e:\r
            print("send_slider_state failed:", e)\r
\r
    def send_plot(self, name, value, label=None):\r
        """Appends one sample to a plot control's history (never coalesced,\r
        unlike send_text/send_radar/send_toggle_state - see the doc). "\\\\n" in\r
        label becomes a line break in the app's axis label (up to 3 lines)."""\r
        if not self.connected:\r
            return\r
        try:\r
            clean_name = self._protocol_field(name)\r
            line = "plot,{},{}".format(clean_name, round(float(value), 2))\r
            if label is not None:\r
                clean_label = self._encode_plot_label(label)\r
                if clean_label:\r
                    line += "," + clean_label\r
            self._emit_telemetry(line + "\\n")\r
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
`,ev=`from machine import Pin, time_pulse_us\r
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
        return cms`,tv=`import array, time\r
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
`,nv=`from machine import Pin\r
import utime as time\r
from PicoBluetooth import PicoBluetooth\r
import PicoRobotics\r
\r
\r
# Robotbil styret med et D-pad (fire retningsknapper) og en fart-skyder.\r
# D-pad'et sender en retning (op/ned/venstre/hoejre) og om den er trykket ned.\r
# Du kan holde flere retninger ved at trække fingeren mellem knapperne.\r
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.\r
DEVICE_NAME = 'DpadBil'\r
\r
# BluetoothControls bestemmer, hvilke kontroller appen viser.\r
# dpad:   ('dpad', NAVN)  -- fire pileknapper i et felt.\r
# slider: ('slider', NAVN, min, max, recenter)  -- en skyder.\r
BluetoothControls = (\r
    ('dpad', 'KORSEL'),\r
    ('slider', 'FART', 0, 100, 'none'),\r
)\r
\r
\r
# LED'en bruges som en simpel "forbundet"-lampe.\r
led = Pin('LED', Pin.OUT)\r
led.off()\r
\r
# board er motorstyringen fra Kitronik Pico Robotics.\r
board = PicoRobotics.KitronikPicoRobotics()\r
\r
# FART skruer op og ned for farten. Start på fuld fart, så bilen virker med det\r
# samme; træk FART ned i appen for at køre langsommere.\r
speed_percent = 100\r
\r
# held holder styr på, hvilke retninger der er trykket ned lige nu.\r
held = {'up': False, 'down': False, 'left': False, 'right': False}\r
\r
\r
def clamp(value, low, high):\r
    if value < low:\r
        return low\r
    if value > high:\r
        return high\r
    return value\r
\r
\r
def drive_motor(motor, value):\r
    """Kør en motor med et tal fra -100 (bak) til 100 (frem)."""\r
    value = int(clamp(value, -100, 100))\r
    if value > 0:\r
        board.motorOn(motor, 'f', value)\r
    elif value < 0:\r
        board.motorOn(motor, 'r', -value)\r
    else:\r
        board.motorOff(motor)\r
\r
\r
def apply_drive():\r
    """Læg de holdte retninger sammen til frem/tilbage og drej, og kør motorerne."""\r
    throttle = (100 if held['up'] else 0) - (100 if held['down'] else 0)\r
    turn = (100 if held['right'] else 0) - (100 if held['left'] else 0)\r
    left = clamp(throttle + turn, -100, 100) * speed_percent / 100\r
    right = clamp(throttle - turn, -100, 100) * speed_percent / 100\r
    drive_motor(1, left)   # motor 1 = venstre\r
    drive_motor(2, right)  # motor 2 = højre\r
\r
\r
def on_dpad(name, direction, is_down):\r
    """Appen sender en retning og om knappen er trykket (True) eller sluppet (False)."""\r
    if name == 'KORSEL' and direction in held:\r
        held[direction] = is_down\r
        apply_drive()\r
        print('D-pad ->', direction, 'ned' if is_down else 'op')\r
\r
\r
def on_slider(name, value):\r
    """FART-skyderen sætter farten."""\r
    global speed_percent\r
    if name == 'FART':\r
        speed_percent = int(clamp(value, 0, 100))\r
        apply_drive()\r
        print('Fart ->', speed_percent)\r
\r
\r
def on_connect():\r
    # Når appen forbinder, tænder LED'en og sørger for, at bilen starter stille.\r
    led.on()\r
    for key in held:\r
        held[key] = False\r
    board.motorOff(1)\r
    board.motorOff(2)\r
\r
\r
def on_disconnect():\r
    # Når appen afbryder, slukker LED'en, nulstiller retninger og stopper motorerne.\r
    led.off()\r
    for key in held:\r
        held[key] = False\r
    board.motorOff(1)\r
    board.motorOff(2)\r
\r
\r
# callbacks=globals() gør, at PicoBluetooth kan finde on_dpad osv.\r
ble = PicoBluetooth(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())\r
\r
\r
while True:\r
    # BLE-funktionerne styrer bilen. Hold programmet i gang og giv CPU-tid\r
    # til Bluetooth.\r
    time.sleep_ms(100)\r
`,rv=`from machine import Pin                    # Giver adgang til pins på Pico W, fx LED'en\r
import utime as time                       # Bruges til tid, pauser og timere\r
import network                             # Bruges til at forbinde Pico W til Wi-Fi\r
import gc                                  # Bruges til at rydde op i hukommelsen\r
import os                                  # Bruges til at slette den gemte målefil ved nulstilling\r
\r
try:                                       # Prøv først MicroPython-versionen af requests\r
    import urequests as requests           # urequests henter data fra internettet\r
except ImportError:                        # Hvis urequests ikke findes\r
    import requests                        # Brug den almindelige requests i stedet\r
\r
from PicoBluetooth import PicoBluetooth    # Biblioteket der laver Bluetooth kontrolpanelet\r
\r
WIFI_SSID = "dit-wifi-navn"                # Skift til navnet på dit Wi-Fi (SSID)\r
WIFI_PASSWORD = "dit-wifi-kodeord"         # Skift til kodeordet til dit Wi-Fi\r
\r
DEVICE_NAME = "Grafer"                     # Navnet Pico W viser i Bluetooth-listen\r
\r
LATITUDE = "55.4038"                       # Breddegrad for Odense - skift til din egen by\r
LONGITUDE = "10.4024"                      # Længdegrad for Odense - skift til din egen by\r
\r
# Hver graf bestemmer selv, hvor mange punkter den viser AD GANGEN (en "side").\r
# Tallet staar direkte i BluetoothControls nedenfor:\r
# ("plot", NAVN, min, max, antal_punkter, type, x_akse, y_akse).\r
# Vaelg fx 5 til en lille graf eller 20 til en stor graf. Appen viser dette\r
# antal ad gangen og kan bladre bagud gennem ældre målinger med pilene i grafens\r
# hjørne, samtidig med at den bliver ved med at tilføje nye målinger, mens du er\r
# forbundet - der smides altså ikke længere ældre punkter væk, så snart der er\r
# mere end en side.\r
# Vejret hentes uafhængigt af Bluetooth (se hovedloekken nederst) - Picoen\r
# bliver ved med at samle målinger i baggrunden, også når ingen er forbundet,\r
# i takt med OPDATER_HVERT_MS herunder. Der hentes stadig ingen historik fra\r
# Open-Meteo - alt i graferne er noget Picoen faktisk selv har målt/hentet,\r
# mens den kørte.\r
TEMP_MIN = -10                             # Temperaturgrafens akse i grader C - juster efter årstid\r
TEMP_MAX = 35\r
TEMP_PUNKTER = 20                          # Antal punkter i temperaturgrafen\r
REGN_MIN = 0                               # Nedbørsgrafens akse i mm - juster hvis I måler kraftig regn\r
REGN_MAX = 10\r
REGN_PUNKTER = 20                          # Antal punkter i regngrafen\r
\r
BluetoothControls = (                          # Felterne appen viser i kontrolpanelet\r
    ("text", "STATUS"),                        # Viser hvad programmet laver lige nu\r
    ("plot", "TEMPERATUR", TEMP_MIN, TEMP_MAX, TEMP_PUNKTER, "line", "labels", "range"),  # x: tidspunkter, y: temperaturområde\r
    ("plot", "REGN", REGN_MIN, REGN_MAX, REGN_PUNKTER, "bar", "labels", "range"),   # x: tidspunkter, y: nedbørsområde\r
    ("button", "NULSTIL"),                     # Rydder graferne og starter forfra med nye målinger\r
)\r
\r
OPDATER_HVERT_MS = 60 * 1000               # Hent nyt vejr hvert 60. sekund - samme takt som API-eksemplet\r
WIFI_TIMEOUT_MS = 15000                    # Giv op efter 15 sekunder uden Wi-Fi\r
\r
# Hver rigtig måling gemmes også her på Picoen (nyeste sidst), så man kan\r
# forbinde når som helst - selv efter Picoen har kørt helt for sig selv i\r
# timevis - og med det samme se den vejrdata, den har samlet, uden at hente\r
# noget fra Open-Meteo igen. Det er stadig kun Picoens egne, tidligere hentede\r
# målinger, ikke Open-Meteos historik.\r
DATA_FILE = "VejrMaalinger.txt"\r
\r
# Hvor mange målinger Picoen gemmer og gensender ved forbindelse - uafhængigt af\r
# hvor mange punkter hver graf VISER ad gangen. Det er derfor mere end en enkelt\r
# "side", så appen kan bladre bagud i historikken efter en genstart, ikke kun se\r
# den nyeste side. Genopbygningen sker i send_gemt_historik() nedenfor, som\r
# venter til ble.ready er True (håndtrykket er færdigt) før den sender noget -\r
# se kommentaren der for hvorfor. Under en aktiv forbindelse er der ingen\r
# grænse: appen husker selv de nye målinger, du kan bladre igennem. Nye\r
# punkter, mens du er forbundet, gemmes stadig løbende, så den nyeste ende af\r
# historikken er den, der overlever en genstart.\r
GEMTE_MAALINGER_MAKS = 30\r
\r
# Henter kun det aktuelle vejr, ligesom API-eksemplet - ingen historik/time-data.\r
CURRENT_URL = (\r
    "http://api.open-meteo.com/v1/forecast"\r
    "?latitude=" + LATITUDE +\r
    "&longitude=" + LONGITUDE +\r
    "&current=temperature_2m,precipitation"\r
    "&timezone=Europe%2FCopenhagen"\r
)\r
\r
\r
led = Pin("LED", Pin.OUT)                  # Gør den indbyggede LED klar til brug\r
led.off()                                  # Sluk LED'en når programmet starter\r
\r
wlan = network.WLAN(network.STA_IF)        # Wi-Fi objekt så Pico W kan forbinde til routeren\r
\r
naeste_vejr_tid = time.ticks_ms()          # Hvornår vi næste gang skal hente aktuelt vejr\r
\r
historik_gensendt = False                  # Har vi allerede genskabt graferne for den aktuelle forbindelse?\r
\r
# Open-Meteos aktuelle vejr opdateres sjældnere, end vi spørger efter det\r
# (OPDATER_HVERT_MS). Vi husker tidsstemplet fra sidste rigtige måling, så vi\r
# kan se, om et nyt kald bare gentager den samme måling, og springe dubletten\r
# over i stedet for at proppe den samme værdi ind i graferne flere gange.\r
\r
\r
def vis(felt, tekst):\r
    """Send tekst til et felt i appen, og skriv den samme tekst i terminalen."""\r
    ble.send_text(felt, tekst)             # Send teksten til feltet i kontrolpanelet\r
    print(felt + ":")                      # Skriv feltets navn i terminalen\r
    print(tekst)                           # \\n bliver til rigtige linjeskift i terminalen\r
    time.sleep_ms(80)                       # Lille pause, så appen kan nå at modtage beskeden\r
\r
\r
def forbind_wifi():\r
    """Tænd Wi-Fi og vent, indtil Pico W er på nettet (eller giv op)."""\r
    wlan.active(True)                      # Tænd Wi-Fi\r
    if wlan.isconnected():                 # Er vi allerede på nettet?\r
        return                             # Så behøver vi ikke gøre mere\r
\r
    print("Forbinder til Wi-Fi...")        # Skriv i terminalen at Wi-Fi starter\r
    wlan.connect(WIFI_SSID, WIFI_PASSWORD) # Forbind med navn og kode ovenfor\r
\r
    start = time.ticks_ms()                # Husk hvornår vi begyndte at vente\r
    while not wlan.isconnected():          # Bliv ved indtil Wi-Fi er forbundet\r
        if time.ticks_diff(time.ticks_ms(), start) > WIFI_TIMEOUT_MS:  # For lang tid?\r
            raise RuntimeError("Wi-Fi tidsgrænse")  # Giv op med en fejl\r
        time.sleep_ms(250)                 # Vent lidt før vi tjekker igen\r
\r
    print("Wi-Fi forbundet:", wlan.ifconfig()[0])  # Skriv Pico W's IP-adresse\r
\r
\r
def gem_maaling(api_tid, temp, regn):\r
    """Føjer én rigtig måling til DATA_FILE og beholder en lang historik."""\r
    try:\r
        try:\r
            with open(DATA_FILE, "r") as f:\r
                linjer = [l.strip() for l in f.readlines() if l.strip()]\r
        except OSError:\r
            linjer = []                    # Filen findes ikke endnu - start med en tom liste\r
        ny_linje = api_tid + "," + str(temp) + "," + str(regn)\r
        linjer.append(ny_linje)\r
        linjer = linjer[-GEMTE_MAALINGER_MAKS:]  # Behold en lang historik, så appen kan bladre bagud\r
        with open(DATA_FILE, "w") as f:\r
            for linje in linjer:\r
                f.write(linje + "\\n")\r
    except Exception as fejl:\r
        print("Kunne ikke gemme maaling:", fejl)\r
\r
\r
def hent_gemte_maalinger():\r
    """Læser DATA_FILE tilbage som en liste af (temp, regn), ældste først."""\r
    try:\r
        with open(DATA_FILE, "r") as f:\r
            linjer = [l.strip() for l in f.readlines() if l.strip()]\r
    except OSError:\r
        return []                          # Ingen fil endnu (første gang programmet kører)\r
\r
    maalinger = []\r
    for linje in linjer:\r
        try:\r
            dele = linje.split(",")\r
            if len(dele) == 3:\r
                api_tid, temp_s, regn_s = dele\r
            else:\r
                api_tid = ""\r
                temp_s, regn_s = linje.split(",", 1)  # Gammelt filformat uden tidspunkt\r
            maalinger.append((api_tid, float(temp_s), float(regn_s)))\r
        except Exception:\r
            continue                       # Spring en beskadiget linje over i stedet for at fejle helt\r
    return maalinger\r
\r
\r
def seneste_gemte_api_tid():\r
    """Finder tidspunktet for den nyeste gemte maaling, hvis filen kendes."""\r
    maalinger = hent_gemte_maalinger()\r
    if not maalinger:\r
        return None\r
    api_tid = maalinger[-1][0]\r
    return api_tid if api_tid else None\r
\r
\r
def plot_label(api_tid):\r
    """To-linjers label til grafens vandrette akse: første linje er\r
    klokkeslættet, anden linje er datoen uden år (dag/måned). Appen viser op\r
    til 3 linjer pr. label og bryder kun ved "\\n" - ikke automatisk, så det ser\r
    ens ud uanset skærmstørrelse."""\r
    if not api_tid:\r
        return ""\r
\r
    # Open-Meteos tidsstempel ser sådan ud: "2026-07-10T14:15"\r
    dato_og_tid = api_tid.split("T")           # -> ["2026-07-10", "14:15"]\r
    if len(dato_og_tid) < 2:\r
        return dato_og_tid[0]                  # Ser ikke ud som forventet - vis det, vi har\r
\r
    dato = dato_og_tid[0]                      # "2026-07-10"\r
    klokkeslet = dato_og_tid[1]                # "14:15"\r
\r
    aar_maaned_dag = dato.split("-")           # -> ["2026", "07", "10"]\r
    if len(aar_maaned_dag) != 3:\r
        return klokkeslet                      # Ser ikke ud som forventet - vis kun klokkeslettet\r
\r
    maaned = aar_maaned_dag[1]                 # "07"\r
    dag = aar_maaned_dag[2]                    # "10"\r
    dato_uden_aar = dag + "/" + maaned         # "10/07"\r
\r
    return klokkeslet + "\\n" + dato_uden_aar   # To linjer: klokkeslet, så dato\r
\r
\r
sidste_api_tid = seneste_gemte_api_tid()\r
\r
\r
def ryd_gemte_maalinger():\r
    """Sletter DATA_FILE, så NULSTIL også rydder det, der ellers ville blive gensendt ved næste forbindelse."""\r
    try:\r
        os.remove(DATA_FILE)\r
    except OSError:\r
        pass                                # Filen findes ikke - intet at slette\r
\r
\r
def hent_og_vis_vejr():\r
    """Henter det aktuelle vejr og tilføjer ét nyt punkt til hver graf.\r
\r
    Kører i samme takt som API-eksemplet (hvert 60. sekund), og uafhængigt af\r
    om nogen er forbundet over Bluetooth (se hovedloekken nederst). send_plot\r
    og send_text sender kun noget, når en telefon/browser rent faktisk er\r
    forbundet - ellers er de ligeglade - men gem_maaling() gemmer målingen på\r
    Picoen uanset hvad, så den ikke går tabt, selvom ingen ser med lige nu.\r
    """\r
    global sidste_api_tid\r
    svar = None\r
    try:\r
        forbind_wifi()                     # Sørg for at vi er på nettet\r
\r
        gc.collect()                       # Ryd op i hukommelsen før API-kaldet\r
        svar = requests.get(CURRENT_URL)   # Send HTTP GET til Open-Meteo\r
\r
        if svar.status_code != 200:        # 200 betyder OK\r
            raise RuntimeError("API-fejl: " + str(svar.status_code))\r
\r
        vejr = svar.json()["current"]      # Find delen med aktuelt vejr i svaret\r
        api_tid = vejr["time"]             # Open-Meteos eget tidsstempel for målingen\r
        klokkeslet = api_tid.split("T")[-1]  # Tag kun tiden efter T, fx 14:15\r
\r
        if api_tid == sidste_api_tid:      # Samme tidsstempel som sidst = samme måling igen\r
            vis("STATUS", "Uændret siden " + klokkeslet)\r
            return                         # Spring dubletten over - intet nyt at vise i graferne\r
\r
        sidste_api_tid = api_tid\r
        temp = vejr["temperature_2m"]\r
        regn = vejr["precipitation"]\r
\r
        label = plot_label(api_tid)        # To-linjers label: klokkeslet, så dato uden år\r
        ble.send_plot("TEMPERATUR", temp, label)  # Tilføj ét nyt punkt til temperaturgrafen\r
        ble.send_plot("REGN", regn, label)  # Tilføj ét nyt punkt til nedbørsgrafen\r
        gem_maaling(api_tid, temp, regn)   # Gem samme måling på Picoen til efter reboot/reconnect\r
\r
        linje1 = "Opdateret " + klokkeslet\r
        linje2 = "Temp: " + str(temp) + " C"\r
        linje3 = "Regn: " + str(regn) + " mm"\r
        vis("STATUS", linje1 + "\\n" + linje2 + "\\n" + linje3)\r
\r
    except Exception as fejl:              # Hvis noget går galt, lander vi her\r
        print("Fejl:", fejl)               # Skriv fejlen i terminalen\r
        vis("STATUS", "Fejl ved opdatering")  # Vis fejlstatus i appen\r
\r
    finally:                               # Kører både ved succes og fejl\r
        if svar is not None:               # Fik vi et svar?\r
            svar.close()                   # Luk det, så hukommelsen frigives\r
        gc.collect()                       # Ryd op igen\r
\r
\r
def send_gemt_historik():\r
    """\r
    Genskaber graferne fra Picoens egne, tidligere hentede målinger, med det\r
    samme håndtrykket er færdigt - kaldt fra hovedløkken (se nederst), én gang\r
    pr. forbindelse.\r
\r
    Venter med vilje til ble.ready er True (appens håndtryk - HELLO, ejerskab,\r
    tilladelse - er helt færdigt) i stedet for at sende fra on_connect:\r
    on_connect kører i selve Bluetooth-forbindelsesafbrydelsen, før håndtrykket\r
    er færdigt, så alt sendt derfra presses gennem en lille buffer\r
    (MAX_PENDING_TELEMETRY i PicoBluetooth.py) beregnet til nogle få\r
    tilfældige beskeder - ikke en hel gemt historik. Så snart ble.ready er\r
    True, sendes hvert punkt direkte med send_plot, ligesom et almindeligt\r
    løbende punkt fra hent_og_vis_vejr - der er ikke brug for en kø eller at\r
    dele det op over flere ture i hovedløkken.\r
    """\r
    global historik_gensendt\r
\r
    if historik_gensendt or not ble.connected or not ble.ready:\r
        return\r
\r
    for gammel_tid, gammel_temp, gammel_regn in hent_gemte_maalinger():\r
        label = plot_label(gammel_tid)\r
        ble.send_plot("TEMPERATUR", gammel_temp, label)\r
        ble.send_plot("REGN", gammel_regn, label)\r
\r
    historik_gensendt = True\r
    vis("STATUS", "Forbundet")\r
\r
\r
def on_connect():                          # Kører automatisk når Bluetooth forbinder\r
    global naeste_vejr_tid, historik_gensendt\r
    led.on()                               # Tænd LED'en når nogen forbinder\r
    historik_gensendt = False              # send_gemt_historik afventer ble.ready, se ovenfor\r
    naeste_vejr_tid = time.ticks_ms()      # Hent også et friskt vejrpunkt med det samme\r
    vis("STATUS", "Forbundet - genskaber historik...")  # Sig hej til appen\r
\r
\r
def on_disconnect():                       # Kører automatisk når Bluetooth afbryder\r
    led.off()                              # Sluk LED'en når ingen er forbundet\r
\r
\r
def on_button(name, is_down):              # Kører automatisk når en knap trykkes/slippes\r
    global naeste_vejr_tid, sidste_api_tid\r
    if name == "NULSTIL" and is_down:      # Kun når NULSTIL-knappen trykkes ned\r
        ble.send_plot_clear("TEMPERATUR")  # Ryd temperaturgrafen i appen\r
        ble.send_plot_clear("REGN")        # Ryd nedbørsgrafen i appen\r
        ryd_gemte_maalinger()              # Slet de gemte målinger, så de ikke dukker op igen senere\r
        sidste_api_tid = None              # Tillad at vise den nuværende måling igen efter nulstilling\r
        naeste_vejr_tid = time.ticks_ms()  # Hent et nyt rigtigt vejrpunkt med det samme\r
        vis("STATUS", "Nulstillet - henter nyt vejr")\r
\r
\r
ble = PicoBluetooth(                       # Start Bluetooth kontrolpanelet\r
    base_controls=BluetoothControls,       # Fortæl hvilke felter appen skal vise\r
    device_base_name=DEVICE_NAME,          # Fortæl hvad enheden skal hedde\r
    callbacks=globals()                    # Gør on_connect og on_disconnect synlige\r
)\r
\r
\r
while True:                                # Hovedprogrammet kører igen og igen\r
    send_gemt_historik()                   # Genskab graferne, så snart håndtrykket er færdigt (kun én gang)\r
\r
    # Uafhængigt af om nogen er forbundet over Bluetooth: Picoen bliver ved med\r
    # at hente og gemme vejret i baggrunden. send_plot/send_text herinde sender\r
    # kun noget, hvis en telefon/browser rent faktisk er forbundet (se\r
    # PicoBluetooth.py), men gem_maaling() gemmer målingen lokalt uanset hvad.\r
    if time.ticks_diff(time.ticks_ms(), naeste_vejr_tid) >= 0:\r
        hent_og_vis_vejr()                 # Tid til at hente nyt vejr\r
        naeste_vejr_tid = time.ticks_add(time.ticks_ms(), OPDATER_HVERT_MS)  # Planlæg næste gang\r
\r
    time.sleep_ms(100)                     # Lille pause, så Pico W ikke bruger al CPU-tid\r
`,lv=`from machine import Pin\r
import utime as time\r
from PicoBluetooth import PicoBluetooth\r
import PicoRobotics\r
\r
\r
# Robotbil styret med et joystick og en fart-skyder.\r
# Joysticket sender to tal: X (drej) og Y (frem/tilbage), begge -100..100.\r
# Vi blander dem til to motorer, ligesom en rigtig tankstyring.\r
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.\r
DEVICE_NAME = 'JoystickBil'\r
\r
# BluetoothControls bestemmer, hvilke kontroller appen viser.\r
# joystick: ('joystick', NAVN, xmin, xmax, ymin, ymax, x-recenter, y-recenter)\r
#   'middle' betyder, at aksen selv går tilbage til midten (0), når du slipper.\r
# slider:   ('slider', NAVN, min, max, recenter)  -- en skyder.\r
BluetoothControls = (\r
    ('joystick', 'KORSEL', -100, 100, -100, 100, 'middle', 'middle'),\r
    ('slider', 'FART', 0, 100, 'none'),\r
)\r
\r
\r
# LED'en bruges som en simpel "forbundet"-lampe.\r
led = Pin('LED', Pin.OUT)\r
led.off()\r
\r
# board er motorstyringen fra Kitronik Pico Robotics.\r
board = PicoRobotics.KitronikPicoRobotics()\r
\r
# FART skruer op og ned for den maksimale fart. Start på fuld fart, så bilen\r
# virker med det samme; træk FART ned i appen for at køre langsommere.\r
speed_percent = 100\r
\r
# Vi husker joystickets seneste position, så en ny FART slår igennem med det samme.\r
last_x = 0\r
last_y = 0\r
\r
\r
def clamp(value, low, high):\r
    if value < low:\r
        return low\r
    if value > high:\r
        return high\r
    return value\r
\r
\r
def drive_motor(motor, value):\r
    """Kør en motor med et tal fra -100 (bak) til 100 (frem)."""\r
    value = int(clamp(value, -100, 100))\r
    if value > 0:\r
        board.motorOn(motor, 'f', value)\r
    elif value < 0:\r
        board.motorOn(motor, 'r', -value)\r
    else:\r
        board.motorOff(motor)\r
\r
\r
def apply_drive():\r
    """Bland joystick (drej + frem/tilbage) og fart til venstre/højre motor."""\r
    turn = last_x\r
    throttle = last_y\r
    left = clamp(throttle + turn, -100, 100) * speed_percent / 100\r
    right = clamp(throttle - turn, -100, 100) * speed_percent / 100\r
    drive_motor(1, left)   # motor 1 = venstre\r
    drive_motor(2, right)  # motor 2 = højre\r
\r
\r
def on_joystick(name, x, y):\r
    """Appen sender joystickets X (drej) og Y (frem/tilbage)."""\r
    global last_x, last_y\r
    if name == 'KORSEL':\r
        last_x = int(x)\r
        last_y = int(y)\r
        apply_drive()\r
        # Joysticket sender mange gange i sekundet - slet linjen hvis det fylder for meget.\r
        print('Joystick -> x:', last_x, 'y:', last_y)\r
\r
\r
def on_slider(name, value):\r
    """FART-skyderen sætter den maksimale fart."""\r
    global speed_percent\r
    if name == 'FART':\r
        speed_percent = int(clamp(value, 0, 100))\r
        apply_drive()\r
        print('Fart ->', speed_percent)\r
\r
\r
def on_connect():\r
    # Når appen forbinder, tænder LED'en og sørger for, at bilen starter stille.\r
    global last_x, last_y\r
    led.on()\r
    last_x = 0\r
    last_y = 0\r
    board.motorOff(1)\r
    board.motorOff(2)\r
\r
\r
def on_disconnect():\r
    # Når appen afbryder, slukker LED'en og begge motorer stoppes.\r
    global last_x, last_y\r
    led.off()\r
    last_x = 0\r
    last_y = 0\r
    board.motorOff(1)\r
    board.motorOff(2)\r
\r
\r
# callbacks=globals() gør, at PicoBluetooth kan finde on_joystick osv.\r
ble = PicoBluetooth(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())\r
\r
\r
while True:\r
    # BLE-funktionerne styrer bilen. Hold programmet i gang og giv CPU-tid\r
    # til Bluetooth.\r
    time.sleep_ms(100)\r
`,av=`from machine import Pin\r
import utime as time\r
from PicoBluetooth import PicoBluetooth\r
from neopixel import Neopixel\r
\r
\r
# Her vælger du, hvor NeoPixel'en sidder.\r
# Prøv at ændre NEOPIXEL_BEN, hvis din ledning sidder et andet sted.\r
NEOPIXEL_BEN = 0\r
\r
# Vi bruger 1 NeoPixel. Tallet kan ændres, hvis du har en ring eller LED-stribe.\r
ANTAL_NEOPIXELS = 1\r
\r
# Farven er rød, grøn, blå. Her er farven blå.\r
FARVE = (0, 80, 255)\r
\r
neopixels = Neopixel(ANTAL_NEOPIXELS, 0, NEOPIXEL_BEN, "GRB")\r
light_is_on = False\r
\r
# LED'en viser, om appen er forbundet.\r
led = Pin('LED', Pin.OUT)\r
led.off()\r
\r
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.\r
DEVICE_NAME = 'NeoPixel'\r
\r
# Appen viser en knap og en skyder.\r
BluetoothControls = (\r
    ('button', 'TAEND'),\r
    ('slider', 'LYS', 0, 100, 'none'),\r
)\r
\r
\r
def show_light():\r
    if light_is_on:\r
        neopixels.fill(FARVE)\r
    else:\r
        neopixels.clear()\r
    neopixels.show()\r
\r
\r
def on_button(name, is_down):\r
    """Appen kalder funktionen baade naar knappen trykkes ned og slippes."""\r
    global light_is_on\r
\r
    if name == 'TAEND':\r
        # is_down er True, mens knappen holdes nede.\r
        # is_down er False, naar knappen slippes.\r
        light_is_on = is_down\r
        show_light()\r
        if light_is_on:\r
            print('Knappen er nede: lyset er taendt')\r
        else:\r
            print('Knappen er sluppet: lyset er slukket')\r
\r
\r
def on_slider(name, value):\r
    """Kører når skyderen flyttes i appen."""\r
\r
    if name == 'LYS':\r
        # Appen sender 0-100. NeoPixel-biblioteket bruger 1-255.\r
        lysstyrke = int(1 + (int(value) / 100) * 254)\r
\r
        neopixels.brightness(lysstyrke)\r
        show_light()\r
\r
        print('Lysstyrke:', value)\r
\r
\r
def on_connect():\r
    """Tænd LED'en når appen forbinder."""\r
    led.on()\r
\r
\r
def on_disconnect():\r
    """Sluk lyset når appen mister forbindelsen."""\r
    global light_is_on\r
\r
    light_is_on = False\r
    show_light()\r
    led.off()\r
\r
\r
# callbacks=globals() betyder:\r
# "Brug funktionerne ovenfor, når appen sender noget."\r
ble = PicoBluetooth(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())\r
\r
\r
while True:\r
    # Programmet skal blive ved med at køre, så appen kan sende kommandoer.\r
    time.sleep_ms(100)\r
`,iv=`# PicoFly.py
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
`,sv=`import machine\r
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
        self.initPCA()`,ov=`from machine import Pin\r
import utime as time\r
from PicoBluetooth import PicoBluetooth\r
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
# Appen får en kontakt-knap og et radar-display.\r
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.\r
DEVICE_NAME = 'Radar'\r
\r
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
# board styrer servoen, og sensoren måler afstand med HC-SR04.\r
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
    """Reager på kontakt-knapper fra appen."""\r
    global scan_enabled\r
\r
    # SCAN-knappen i appen tænder eller slukker radaren.\r
    if name == 'SCAN':\r
        scan_enabled = bool(value)\r
        ble.send_toggle_state('SCAN', scan_enabled)\r
        print('Scan ->', 'til' if scan_enabled else 'fra')\r
    else:\r
        print('Ukendt kontakt:', name)\r
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
\r
\r
# callbacks=globals() gør, at PicoBluetooth kan finde on_toggle osv.\r
ble = PicoBluetooth(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())\r
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
`,cv=`from machine import Pin
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
`,uv=`from machine import Pin, PWM, ADC\r
from PicoBluetooth import PicoBluetooth\r
from neopixel import Neopixel\r
from PicoFly import get_board\r
import utime as time\r
\r
# ============================================================\r
# Alarmstation med BLE kontrolpanel + servo-doerlaas\r
#\r
# Hardware / benoversigt:\r
#   Fri NeoPixel LED:       GP16\r
#   PIR bevaegelsessensor:  GP15\r
#   Buzzer:                 GP14\r
#   Vandsensor power/VCC:   GP0\r
#   Vandsensor signal/S:    GP26 / ADC0\r
#   Tastatur NeoPixel:      GP17\r
#   Tastatur-kolonner:      GP18, GP19, GP20\r
#   Tastatur-raekker:       GP21, GP22, GP27, GP28\r
#   Servo:                  PicoFly board.servo1\r
#\r
# Servo-vinkler:\r
#   OPEN = 60\r
#   CLOSED = 100\r
# Byt de to tal om, hvis din dor bevaeger sig den forkerte vej.\r
# ============================================================\r
\r
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.\r
DEVICE_NAME = 'AlarmDemo'\r
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
# Dette tastatur laeses drejet i forhold til de trykte taster.\r
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
# En liste-forstaaelse (en kort "lav en liste ved at koere gennem noget andet"-\r
# skrivemaade) - laver ét Pin-objekt per pin-nummer i listen ovenfor.\r
rows = [Pin(pin, Pin.OUT, value=1) for pin in row_pins]\r
columns = [Pin(pin, Pin.IN, Pin.PULL_UP) for pin in column_pins]\r
\r
# ---------------- Tilstand ----------------\r
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
# ---------------- BLE-sikre hjaelpefunktioner ----------------\r
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
            print('BLE tekst-sendefejl:', e)\r
\r
\r
def ble_send_toggle_state(name, value):\r
    if ble_is_connected():\r
        try:\r
            ble.send_toggle_state(name, bool(value))\r
        except Exception as e:\r
            print('BLE kontakt-sendefejl:', e)\r
\r
\r
# ---------------- Hjaelpefunktioner ----------------\r
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
# ---------------- Dor / servo ----------------\r
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
    Bruges naar koden paa tastaturet er rigtig, eller naar doeren aabnes fra\r
    appen. Slaar foerst alarmen fra, og aabner saa doeren.\r
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
        # Det er sikrest at lukke doeren, naar alarmen er tilkoblet.\r
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
# ---------------- Tastatur ----------------\r
\r
def scan_keypad():\r
    # enumerate(rows) giver baade indekset (0, 1, 2...) og selve raekken i\r
    # samme loekke, saa vi kan slaa den trykte tast op i key_names bagefter.\r
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
            authorized_open_door('tastatur')\r
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
# ---------------- BLE-callbacks ----------------\r
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
\r
\r
def on_button(name, is_down):\r
    global code_change_mode, entered_code\r
\r
    # De her knapper skal kun gøre noget, når de trykkes ned.\r
    # Når knappen slippes, stopper funktionen her.\r
    if not is_down:\r
        return\r
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
        send_message('Tast ny kode paa tastatur og tryk OK')\r
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
ble = PicoBluetooth(\r
    base_controls=BluetoothControls,\r
    device_base_name=DEVICE_NAME,\r
    callbacks=globals(),\r
)\r
\r
# ---------------- Hovedloekke ----------------\r
\r
send_message('Alarmstation starter')\r
send_message('PIR varmer op i {} sekunder'.format(PIR_WARMUP_MS // 1000))\r
\r
# Start med doeren laast/lukket.\r
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
        # Vandsensor\r
        if time.ticks_diff(now, next_water_check_ms) >= 0:\r
            latest_water = read_water_sensor(samples=4)\r
            next_water_check_ms = time.ticks_add(now, 700)\r
\r
            if alarm_enabled and latest_water >= water_threshold:\r
                trigger_alarm('Vand opdaget: {}'.format(latest_water))\r
\r
        # Tastatur\r
        key = read_key_event()\r
        if key is not None:\r
            print('Tast:', key)\r
            handle_key(key)\r
\r
        # Luk doeren automatisk, naar tiden er gaaet\r
        if door_open and door_auto_close_at != 0:\r
            if time.ticks_diff(now, door_auto_close_at) >= 0:\r
                close_door('auto')\r
\r
        # Alarmens bip-moenster (skiftevis til og fra, som en rigtig alarm)\r
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
    print('[STOP] Programmet stoppede. Buzzer, lys og servo er sat sikkert.')\r
`,dv=`from machine import Pin\r
import utime as time\r
from PicoBluetooth import PicoBluetooth\r
import PicoRobotics\r
\r
\r
# Simpelt tank-styringsprogram til en robotbil med to motorer.\r
# Hver skyder sender -100..100 og går tilbage til 0, når den slippes.\r
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.\r
DEVICE_NAME = 'TankBil'\r
\r
# BluetoothControls bestemmer, hvilke skydere appen viser.\r
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
# board er motorstyringen fra Kitronik Pico Robotics.\r
board = PicoRobotics.KitronikPicoRobotics()\r
\r
\r
def on_slider(name, value):\r
    """Reager på skydere fra appen."""\r
\r
    # Appen sender skyder-værdien som et tal. Vi bruger minus som baglæns.\r
    value = int(value)\r
\r
    if name == 'VENSTRE MOTOR':\r
        if value > 0:\r
            board.motorOn(1, 'f', value)\r
        elif value < 0:\r
            board.motorOn(1, 'r', -value)\r
        else:\r
            board.motorOff(1)\r
        print('Venstre motor ->', value)\r
    elif name == 'HOJRE MOTOR':\r
        if value > 0:\r
            board.motorOn(2, 'f', value)\r
        elif value < 0:\r
            board.motorOn(2, 'r', -value)\r
        else:\r
            board.motorOff(2)\r
        print('Hojre motor ->', value)\r
    else:\r
        print('Ukendt skyder:', name)\r
\r
\r
def on_connect():\r
    # Når appen forbinder, tænder LED'en og sørger for, at bilen starter stille.\r
    led.on()\r
    board.motorOff(1)\r
    board.motorOff(2)\r
\r
\r
def on_disconnect():\r
    # Når appen afbryder, slukker LED'en og begge motorer stoppes.\r
    led.off()\r
    board.motorOff(1)\r
    board.motorOff(2)\r
\r
\r
# callbacks=globals() gør, at PicoBluetooth kan finde on_slider osv.\r
ble = PicoBluetooth(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())\r
\r
\r
while True:\r
    # BLE-funktionerne styrer bilen. Hold programmet i gang og giv CPU-tid\r
    # til Bluetooth.\r
    time.sleep_ms(100)\r
`,li=[{id:"program:send-text",path:"/main.py",label:"Send tekst (main.py)",description:"Startprogram med kun et tekstfelt, hvor Picoen sender beskeder til kontrolpanelet.",kind:"program",difficulty:"Nem",content:cv},{id:"program:neopixel-led",path:"/main.py",label:"NeoPixel lys (main.py)",description:"Startprogram til NeoPixel med hold-knap og lysstyrke-slider.",kind:"program",difficulty:"Nem",content:av},{id:"program:tank-control",path:"/main.py",label:"Robotbil med tankstyring (main.py)",description:"Startprogram til robotbil med to motor-slidere.",kind:"program",difficulty:"Mellem",content:dv},{id:"program:dpad-control",path:"/main.py",label:"Robotbil med D-pad (main.py)",description:"Startprogram til robotbil styret med fire retningsknapper og fart-slider.",kind:"program",difficulty:"Mellem",content:nv},{id:"program:joystick-control",path:"/main.py",label:"Robotbil med joystick (main.py)",description:"Startprogram til robotbil styret med joystick og fart-slider.",kind:"program",difficulty:"Mellem",content:lv},{id:"program:radar-control",path:"/main.py",label:"Radar med afstandssensor (main.py)",description:"Startprogram til radar med servo, afstandssensor og scan-toggle.",kind:"program",difficulty:"Svær",content:ov},{id:"program:api-weather",path:"/main.py",label:"Vejr fra internettet (main.py)",description:"Startprogram der henter vejr fra et API over Wi-Fi og viser det i tekstfelter. Husk at skrive dit Wi-Fi navn og kodeord ind i main.py.",kind:"program",difficulty:"Svær",content:Z_},{id:"program:graphs",path:"/main.py",label:"Vejrgrafer fra internettet (main.py)",description:"Startprogram der henter vejr fra et API og tegner temperatur og nedbør som grafer over tid. Husk at skrive dit Wi-Fi navn og kodeord ind i main.py.",kind:"program",difficulty:"Svær",content:rv},{id:"program:smart-home",path:"/main.py",label:"SmartHome alarmstation (main.py)",description:"Startprogram til alarmstation med dør-servo, keypad, PIR, vandsensor, buzzer og NeoPixel.",kind:"program",difficulty:"Svær",content:uv},{id:"library:pico-bluetooth",path:"/PicoBluetooth.py",label:"PicoBluetooth.py",description:"Bluetooth-biblioteket der får Picoen til at tale med appen.",kind:"library",content:J_},{id:"library:pico-robotics",path:"/PicoRobotics.py",label:"PicoRobotics.py",description:"Bibliotek til Kitronik Pico Robotics Board.",kind:"library",content:sv},{id:"library:pico-fly",path:"/PicoFly.py",label:"PicoFly.py",description:"Bibliotek til PicoFly-board med motorer og servoer.",kind:"library",content:iv},{id:"library:hcsr04",path:"/hcsr04.py",label:"hcsr04.py",description:"Bibliotek til HC-SR04 ultralyds-afstandssensor.",kind:"library",content:ev},{id:"library:neopixel",path:"/neopixel.py",label:"neopixel.py",description:"Bibliotek til NeoPixel LED-strips og LED-ringe.",kind:"library",content:tv}],fv=11914;function mv(){return typeof navigator<"u"&&"serial"in navigator&&!!navigator.serial}function hv(){return mv()?{supported:!0,message:"USB-udvikling er tilgængelig i denne browser."}:{supported:!1,message:"USB-udvikling kræver en computer med Chrome, Edge eller Chromebook."}}class pv{constructor(l={}){we(this,"port",null);we(this,"reader",null);we(this,"writer",null);we(this,"readLoopDone",null);we(this,"readLoopActive",!1);we(this,"disconnecting",!1);we(this,"buffer","");we(this,"events");we(this,"dataListeners",new Set);this.events=l}get connected(){return!!this.port&&!!this.writer}get info(){var l;return((l=this.port)==null?void 0:l.getInfo())??null}async requestAndConnect(){if(!navigator.serial)throw new Error("Web Serial er ikke tilgængelig i denne browser.");const l=await navigator.serial.requestPort({filters:[{usbVendorId:fv}]});await this.openPort(l)}async connectKnownPort(l){await this.openPort(l)}async disconnect(){var _,b;const l=this.connected||!!this.port||!!this.reader,o=this.port,s=this.reader,d=this.writer,h=this.readLoopDone,g=s==null?void 0:s.closed.catch(()=>{}),m=d==null?void 0:d.closed.catch(()=>{});this.disconnecting=!0,this.readLoopActive=!1;try{await(s==null?void 0:s.cancel())}catch{}h&&await h.catch(()=>{}),await g;try{s==null||s.releaseLock()}catch{}this.reader===s&&(this.reader=null);try{await(d==null?void 0:d.close()),await m}catch{try{await(d==null?void 0:d.abort("disconnect"))}catch{}}try{d==null||d.releaseLock()}catch{}this.writer===d&&(this.writer=null),o&&await o.close(),this.port===o&&(this.port=null),this.buffer="",this.readLoopDone===h&&(this.readLoopDone=null),this.disconnecting=!1,l&&((b=(_=this.events).onDisconnect)==null||b.call(_))}async write(l){if(!this.writer)throw new Error("Ingen USB-forbindelse.");await this.writer.write(new TextEncoder().encode(l))}async writeLine(l){await this.write(`${l}\r
`)}addDataListener(l){return this.dataListeners.add(l),()=>this.dataListeners.delete(l)}async openPort(l){var s,d,h;if(await this.disconnect().catch(()=>{}),await l.open({baudRate:115200,bufferSize:4096}),this.port=l,this.writer=((s=l.writable)==null?void 0:s.getWriter())??null,!this.writer||!l.readable)throw new Error("USB-porten kunne ikke åbnes til læsning og skrivning.");const o=l.getInfo();(h=(d=this.events).onLog)==null||h.call(d,"success",`USB-forbindelse oprettet (${gv(o)}).`),this.readLoopDone=this.startReadLoop(l)}async startReadLoop(l){var d,h,g;this.readLoopActive=!0;const o=new TextDecoder;this.reader=((d=l.readable)==null?void 0:d.getReader())??null;const s=this.reader;if(s)try{for(;this.readLoopActive;){const{value:m,done:_}=await s.read();if(_)break;m&&this.consumeText(o.decode(m,{stream:!0}))}}catch(m){this.readLoopActive&&((g=(h=this.events).onLog)==null||g.call(h,"error",m instanceof Error?m.message:"USB-læsning stoppede."))}finally{try{s.releaseLock()}catch{}this.reader===s&&(this.reader=null),this.readLoopActive&&!this.disconnecting&&this.port===l&&this.closeAfterUnexpectedReadEnd(l)}}async closeAfterUnexpectedReadEnd(l){var h,g;const o=this.connected||this.port===l;this.disconnecting=!0,this.readLoopActive=!1;const s=this.writer,d=s==null?void 0:s.closed.catch(()=>{});try{await(s==null?void 0:s.close()),await d}catch{try{await(s==null?void 0:s.abort("disconnect"))}catch{}}try{s==null||s.releaseLock()}catch{}this.writer===s&&(this.writer=null);try{await l.close()}catch{}this.port===l&&(this.port=null),this.buffer="",this.readLoopDone=null,this.disconnecting=!1,o&&((g=(h=this.events).onDisconnect)==null||g.call(h))}consumeText(l){var o,s,d,h;(s=(o=this.events).onData)==null||s.call(o,l);for(const g of this.dataListeners)g(l);for(this.buffer+=l;this.buffer.includes(`
`);){const g=this.buffer.indexOf(`
`),m=this.buffer.slice(0,g).replace(/\r$/,"");this.buffer=this.buffer.slice(g+1),(h=(d=this.events).onLine)==null||h.call(d,m)}}}function gv(a){const l=a.usbVendorId!==void 0?`VID ${a.usbVendorId.toString(16).padStart(4,"0")}`:"ukendt VID",o=a.usbProductId!==void 0?`PID ${a.usbProductId.toString(16).padStart(4,"0")}`:"ukendt PID";return`${l}, ${o}`}const ep=15e3,oh=64*1024,ch=1e5,tp=new URL("/micropython/micropython.mjs",window.location.origin).toString(),_v=64*1024,uh=8;function np(){return typeof SharedArrayBuffer<"u"&&globalThis.crossOriginIsolated===!0}function vv(){return np()?new SharedArrayBuffer(_v):null}function bv(a,l){const o=new Int32Array(a,0,2),s=new Uint8Array(a),d=a.byteLength-uh,h=new TextEncoder().encode(l+`
`);let g=Atomics.load(o,0);for(const m of h)s[uh+g%d]=m,g+=1;Atomics.store(o,0,g),Atomics.notify(o,0)}const yv=new Set(["bluetooth","machine","network","PicoRobotics","rp2","ubluetooth"]);class wv{constructor(){we(this,"worker",null);we(this,"pending",null);we(this,"nextId",0)}send(l,o={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython-terminalen er optaget. Stop den, eller vent på at kommandoen bliver færdig.",timedOut:!1,unavailable:!1});const s=++this.nextId,d=o.timeoutMs??ep,h=this.ensureWorker();return new Promise(g=>{const m=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython-terminalen stoppede, fordi kommandoen tog for lang tid. Tjek for uendelige løkker.",timedOut:!0,unavailable:!1}),this.restartWorker()},d);this.pending={id:s,timer:m,onOutput:o.onOutput,resolve:g},h.postMessage({type:"run",id:s,code:kv(l),runtimeUrl:tp})})}reset(){this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),this.restartWorker()}dispose(){var l;this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),(l=this.worker)==null||l.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const l=new Worker(new URL(""+new URL("offlineMicroPython.worker-B_-Tbi7X.js",import.meta.url).href,import.meta.url),{type:"module"});return l.onmessage=o=>this.handleMessage(o.data),l.onerror=o=>{this.finish({ok:!1,output:"",error:o.message||"Browser-MicroPython-terminalen fejlede i browser-worker.",timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=l,l}handleMessage(l){var s;const o=this.pending;if(!(!o||l.id!==o.id||l.type==="ready")){if(l.type==="stdout"){(s=o.onOutput)==null||s.call(o,l.text);return}if(l.type!=="stdin-wait"){if(l.type==="unavailable"){this.finish({ok:!1,output:"",error:l.error,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:l.ok,output:l.output,error:l.error,timedOut:!1,unavailable:!1})}}}finish(l){const o=this.pending;o&&(window.clearTimeout(o.timer),this.pending=null,o.resolve(l))}restartWorker(){var l;(l=this.worker)==null||l.terminate(),this.worker=null}}class xv{constructor(){we(this,"worker",null);we(this,"pending",null);we(this,"nextId",0);we(this,"stdinSab",null)}run(l,o={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython kører allerede kode. Stop den først.",issues:[],timedOut:!1,unavailable:!1});const s=typeof o=="number"?o:o.timeoutMs===null?null:o.timeoutMs??ep,d=typeof o=="number"?void 0:o.onOutput,h=typeof o=="number"?void 0:o.onWaitingForInput,g=typeof o=="number"?void 0:o.signal,m=Wd(l,{allowInput:!0});if(m.some(x=>x.level==="error"))return Promise.resolve({ok:!1,output:"",error:"",issues:m,timedOut:!1,unavailable:!1});const _=++this.nextId,b=this.ensureWorker(),k=vv();return this.stdinSab=k,new Promise(x=>{const E=H=>this.finish(H),D=()=>{this.restartWorker(),E({ok:!1,output:"",error:"",issues:m,timedOut:!1,unavailable:!1})},O=s===null?null:window.setTimeout(()=>{E({ok:!1,output:"",error:"Browser-MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:m,timedOut:!0,unavailable:!1}),this.restartWorker()},s);if(this.pending={id:_,timer:O,timeoutMs:s,issues:m,onOutput:d,onWaitingForInput:h,signal:g,abort:D,resolve:x},g!=null&&g.aborted){D();return}g==null||g.addEventListener("abort",D,{once:!0});const F={type:"run",id:_,code:l,runtimeUrl:tp,interactive:!0,sab:k??void 0};b.postMessage(F)})}sendInput(l){const o=this.pending;!o||!this.stdinSab||(this.refreshTimeout(o),bv(this.stdinSab,l))}stop(){const l=this.pending;l&&(this.restartWorker(),this.finish({ok:!1,output:"",error:"Browser-MicroPython blev stoppet.",issues:l.issues,timedOut:!1,unavailable:!1}))}dispose(){var l;this.finish({ok:!1,output:"",error:"",issues:[],timedOut:!1,unavailable:!1}),(l=this.worker)==null||l.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const l=new Worker(new URL(""+new URL("offlineMicroPython.worker-B_-Tbi7X.js",import.meta.url).href,import.meta.url),{type:"module"});return l.onmessage=o=>this.handleMessage(o.data),l.onerror=o=>{const s=this.pending;this.finish({ok:!1,output:"",error:o.message||"Offline MicroPython fejlede i browser-worker.",issues:(s==null?void 0:s.issues)??[],timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=l,l}handleMessage(l){var s,d;const o=this.pending;if(!(!o||l.id!==o.id||l.type==="ready")){if(l.type==="stdout"){this.refreshTimeout(o),(s=o.onOutput)==null||s.call(o,l.text);return}if(l.type==="stdin-wait"){l.waiting&&this.refreshTimeout(o),(d=o.onWaitingForInput)==null||d.call(o,l.waiting);return}if(l.type==="unavailable"){this.finish({ok:!1,output:"",error:l.error,issues:o.issues,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:l.ok,output:l.output,error:l.error,issues:o.issues,timedOut:!1,unavailable:!1}),this.restartWorker()}}finish(l){var s,d;const o=this.pending;o&&(o.timer!==null&&window.clearTimeout(o.timer),(s=o.signal)==null||s.removeEventListener("abort",o.abort),this.pending=null,(d=o.onWaitingForInput)==null||d.call(o,!1),o.resolve(l))}refreshTimeout(l){l.timeoutMs!==null&&(l.timer!==null&&window.clearTimeout(l.timer),l.timer=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:l.issues,timedOut:!0,unavailable:!1}),this.restartWorker()},l.timeoutMs))}restartWorker(){var l;(l=this.worker)==null||l.terminate(),this.worker=null,this.stdinSab=null}}function kv(a){const l=JSON.stringify(a);return["try:",`    __pico_repl_value = eval(${l})`,"    if __pico_repl_value is not None:","        print(repr(__pico_repl_value))","except SyntaxError:",`    exec(${l})`,"finally:","    try:","        del __pico_repl_value","    except Exception:","        pass"].join(`
`)}function Wd(a,l={}){const o=[],s=new Blob([a]).size;s>oh&&o.push({level:"error",text:`Koden er ${s} bytes. Offline MicroPython kører kun små programmer op til ${oh} bytes.`});const d=a.split(/\r?\n/);for(let h=0;h<d.length;h+=1){const g=h+1,m=yc(d[h]).trim();if(!m)continue;const _=Ev(m);_&&yv.has(_)&&o.push({level:"error",line:g,text:`${_} virker kun på Picoen. Forbind en Pico for at køre denne kode.`}),!l.allowInput&&Sv(d[h])&&o.push({level:"error",line:g,text:"input() virker i hele programmer. Skriv programmet i editoren og tryk Kør, eller kør filen på Pico via USB."});const b=m.match(/\brange\(\s*(-?\d+)\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\)/);b&&Tv(b)>ch&&o.push({level:"error",line:g,text:`range(...) er for stor til offline kørsel. Brug højst ${ch} gentagelser.`})}for(const h of Mv(d))o.push({level:"warning",text:`Funktionen ${h} ser rekursiv ud. Hvis den ikke stopper, afbryder offline MicroPython efter få sekunder.`});return o}function yc(a){let l=null;for(let o=0;o<a.length;o+=1){const s=a[o];if((s==='"'||s==="'")&&a[o-1]!=="\\"&&(l=l===s?null:l??s),s==="#"&&!l)return a.slice(0,o)}return a}function Sv(a){const l=yc(a);let o=null;for(let s=0;s<l.length;s+=1){const d=l[s];if((d==='"'||d==="'")&&l[s-1]!=="\\"){o=o===d?null:o??d;continue}if(!o&&!(!dh(l[s-1])||l.slice(s,s+5)!=="input")&&dh(l[s+5])&&l.slice(s+5).trimStart().startsWith("("))return!0}return!1}function dh(a){return!a||!/[A-Za-z0-9_]/.test(a)}function Ev(a){const l=a.match(/^import\s+([A-Za-z_]\w*)/);if(l)return l[1];const o=a.match(/^from\s+([A-Za-z_]\w*)\s+import\b/);return(o==null?void 0:o[1])??null}function fh(a){const l=a.match(/^\s*/);return(l==null?void 0:l[0].replace(/\t/g,"    ").length)??0}function Tv(a){const l=Number(a[1]),o=a[2]===void 0?void 0:Number(a[2]),s=a[3]===void 0?1:Number(a[3]);if(s===0)return Number.POSITIVE_INFINITY;const g=(o===void 0?l:o)-(o===void 0?0:l);return g>0&&s<0||g<0&&s>0?0:Math.ceil(Math.abs(g/s))}function Mv(a){const l=new Set;for(let o=0;o<a.length;o+=1){const s=yc(a[o]).trim().match(/^def\s+([A-Za-z_]\w*)\s*\(/);if(!s)continue;const d=s[1],h=fh(a[o]);for(let g=o+1;g<a.length;g+=1){if(!a[g].trim())continue;if(fh(a[g])<=h)break;if(new RegExp(`\\b${d}\\s*\\(`).test(yc(a[g]))){l.add(d);break}}}return[...l]}const jv=/^(for|if|while|def|class|elif|else|try|except|finally|with)\b/;function Nv(a,l){var k;const o=a.trim(),s=l.split(/\r?\n/),d=Rv(o),h=d?s[d-1]??"":"",g=Av(s,d),m=o.split(/\r?\n/).filter(Boolean).at(-1)??"";if(/KeyboardInterrupt/.test(m))return{simple:"Programmet blev stoppet.",technical:o,line:d};if(/MemoryError/.test(m))return{simple:`Picoen eller browserens MicroPython løb tør for hukommelse${d?` omkring linje ${d}`:""}.`,technical:o,line:d};if(/RecursionError/.test(m))return{simple:`En funktion kalder sig selv for mange gange${d?` omkring linje ${d}`:""}.`,technical:o,line:d};const _=m.match(/UnboundLocalError:\s+local variable ['"](.+?)['"]/);if(_)return{simple:`Variablen ${_[1]} bruges inde i en funktion, før den har fået en værdi${d?` på linje ${d}`:""}.`,technical:o,line:d};const b=m.match(/NameError:\s+name ['"](.+?)['"] (?:isn't|is not) defined/);if(b)return{simple:Lv(h,b[1])?`Teksten ${b[1]} mangler måske citationstegn${d?` på linje ${d}`:""}.`:`Python kender ikke navnet ${b[1]}${d?` på linje ${d}`:""}.`,technical:o,line:d};if(/ZeroDivisionError/.test(m))return{simple:`Kan ikke dividere med 0${d?` på linje ${d}`:""}.`,technical:o,line:d};if(/IndentationError:\s+unexpected indent/.test(m))return{simple:`Der er for meget indrykning${d?` på linje ${d}`:""}.`,technical:o,line:d};if(/IndentationError/.test(m))return{simple:`Mangler indrykning${d?` på linje ${d}`:""}.`,technical:o,line:d};if(/ImportError|ModuleNotFoundError/.test(m)){const x=(k=m.match(/['"](.+?)['"]/))==null?void 0:k[1];return{simple:`Python kan ikke finde modulet${x?` ${x}`:""}.`,technical:o,line:d}}if(/OSError/.test(m))return/ENOENT|No such file|Errno\s+2/.test(m)?{simple:`Python kan ikke finde filen${d?` på linje ${d}`:""}.`,technical:o,line:d}:/EACCES|permission|denied/i.test(m)?{simple:`Python har ikke adgang til filen eller enheden${d?` på linje ${d}`:""}.`,technical:o,line:d}:{simple:`Der opstod en fejl med en fil eller en enhed${d?` omkring linje ${d}`:""}.`,technical:o,line:d};if(/SyntaxError/.test(m)){if(/invalid syntax/.test(m)&&g.text.trim().endsWith(","))return{simple:`Linje ${g.line??d} slutter med komma. Tjek om der mangler noget efter kommaet.`,technical:o,line:g.line??d};const x=Zd(h,d)??Zd(g.text,g.line)??Cv(s,d);return x?{simple:`Mangler måske : efter linje ${x.line}.`,technical:o,line:x.line}:d&&g.text.trim().endsWith(":")&&h.trim()&&!/^\s+/.test(h)?{simple:`Mangler måske indrykning på linje ${d}.`,technical:o,line:d}:Ov(h)?{simple:`Tekst mangler måske citationstegn${d?` på linje ${d}`:""}.`,technical:o,line:d}:Dv(h)?{simple:`Tekst mangler måske et afsluttende citationstegn${d?` på linje ${d}`:""}.`,technical:o,line:d}:Bv(h)?{simple:`Mangler måske en afsluttende parentes${d?` på linje ${d}`:""}.`,technical:o,line:d}:zv(h)?{simple:`Der er måske en parentes for meget${d?` på linje ${d}`:""}.`,technical:o,line:d}:{simple:`Python fandt en syntaksfejl${d?` omkring linje ${d}`:""}.`,technical:o,line:d}}return/TypeError/.test(m)?/takes .* positional arguments? but .* given/.test(m)||/function takes/.test(m)?{simple:`En funktion får for mange eller for få værdier${d?` på linje ${d}`:""}.`,technical:o,line:d}:/unsupported operand type/.test(m)?{simple:`To værdier kan ikke bruges sammen på den måde${d?` på linje ${d}`:""}.`,technical:o,line:d}:/not callable/.test(m)?{simple:`Der bliver brugt parenteser efter noget, som ikke er en funktion${d?` på linje ${d}`:""}.`,technical:o,line:d}:{simple:`En værdi har den forkerte type${d?` på linje ${d}`:""}.`,technical:o,line:d}:/IndexError/.test(m)?{simple:`Listen har ikke et element på den plads${d?` på linje ${d}`:""}.`,technical:o,line:d}:/KeyError/.test(m)?{simple:`Ordbogen mangler den nøgle${d?` på linje ${d}`:""}.`,technical:o,line:d}:/AttributeError/.test(m)?{simple:`Den ting har ikke den kommando${d?` på linje ${d}`:""}.`,technical:o,line:d}:/ValueError/.test(m)?/invalid literal for int/.test(m)?{simple:`Teksten kan ikke laves om til et heltal${d?` på linje ${d}`:""}.`,technical:o,line:d}:{simple:`Værdien passer ikke her${d?` på linje ${d}`:""}.`,technical:o,line:d}:{simple:`Python fandt en fejl${d?` omkring linje ${d}`:""}.`,technical:o,line:d}}function Rv(a){var d;const o=(d=[...a.matchAll(/line\s+(\d+)/g)].at(-1))==null?void 0:d[1];if(!o)return;const s=parseInt(o,10);return Number.isFinite(s)&&s>0?s:void 0}function Av(a,l){if(!l)return{text:""};for(let o=l-2;o>=0;o-=1){const s=a[o]??"";if(s.trim())return{line:o+1,text:s}}return{text:""}}function Zd(a,l){if(!l)return null;const o=a.trim();return!jv.test(o)||o.endsWith(":")?null:{line:l}}function Cv(a,l){const o=l?Math.min(a.length,l):a.length,s=Math.max(0,o-4);for(let d=o-1;d>=s;d-=1){const h=Zd(a[d]??"",d+1);if(h)return h}return null}function Dv(a){const l=(a.match(/'/g)??[]).length,o=(a.match(/"/g)??[]).length;return l%2===1||o%2===1}function Ov(a){var s,d;const o=(d=(s=a.trim().match(/^print\((.+)\)$/))==null?void 0:s[1])==null?void 0:d.trim();return!o||/['"]/.test(o)?!1:/\s/.test(o)&&/[a-zA-ZæøåÆØÅ]/.test(o)}function Lv(a,l){const o=a.trim();return!!l&&/[A-Za-zæøåÆØÅ]/.test(l)&&(o.startsWith("print(")||o.includes(`= ${l}`))}function Bv(a){return rp(a)>0}function zv(a){return rp(a)<0}function rp(a){let l=0,o=null;for(let s=0;s<a.length;s+=1){const d=a[s];if((d==='"'||d==="'")&&a[s-1]!=="\\"){o=o===d?null:o??d;continue}o||((d==="("||d==="["||d==="{")&&(l+=1),(d===")"||d==="]"||d==="}")&&(l-=1))}return l}const Jd="/min_kode.py",lp=`print('Hej fra Pico Kontrol Panel')
`,Uv=500,qv=1200,Ss="Backup-filnavne er reserveret til versionshistorik. Vælg et andet navn.";function Zt(a,l){return`${a}:${l}`}function mh(a){return new Promise(l=>window.setTimeout(l,a))}function Hv(){const a=se(f=>f.toggleSideMenu),l=se(f=>f.askConfirm),o=se(f=>f.picoIdeOrigin),s=se(f=>f.active),d=se(f=>f.isBleConnected),h=se(f=>f.bleListFiles),g=se(f=>f.bleReadText),m=se(f=>f.bleWriteText),_=se(f=>f.bleDeleteFile),b=se(f=>f.bleRestartAndReconnect),k=se(f=>f.progress),[x,E]=j.useState(!1),[D,O]=j.useState(!1),[F,H]=j.useState([]),[P,B]=j.useState(!1),[re,q]=j.useState(!1),[oe,ge]=j.useState([]),[te,pe]=j.useState(null),[ve,Be]=j.useState(()=>cc(ic())),[ne,Ie]=j.useState(Jd),[xe,$e]=j.useState("local"),[Z,N]=j.useState(()=>{var f;return((f=cc(ic()).find(v=>v.path===Jd))==null?void 0:f.content)??lp}),[Q,de]=j.useState([]),[Re,_e]=j.useState(!1),[T,G]=j.useState(""),[le,ae]=j.useState(""),[ce,fe]=j.useState(null),[Te,We]=j.useState(!1),[ze,me]=j.useState(null),[je,at]=j.useState(!1),[V,J]=j.useState({}),[ie,Ce]=j.useState(!1),[Pe,Ve]=j.useState(0),[Me,De]=j.useState(()=>{var f,v;return((f=Vl.find(w=>w.board==="Raspberry Pi Pico W"))==null?void 0:f.board)??((v=Vl[0])==null?void 0:v.board)??""}),[wt,sn]=j.useState(()=>{var f,v;return((f=Vl.find(w=>w.board==="Raspberry Pi Pico W"))==null?void 0:f.version)??((v=Vl[0])==null?void 0:v.version)??""}),[Pn,ht]=j.useState(null),[_r,sl]=j.useState({top:0,left:0}),[fn,mn]=j.useState(!1),[hn,jn]=j.useState(!1),[di,sr]=j.useState(!1),[Fn,it]=j.useState(!0),[vt,Qe]=j.useState(""),[vr,ba]=j.useState([]),[Nn,pn]=j.useState(null),[br,Rn]=j.useState(!1),[Ft,Gt]=j.useState({}),[Jt,en]=j.useState({}),[Ze,ee]=j.useState(null),[be,Je]=j.useState(null),[on,gn]=j.useState(""),[$t,Gn]=j.useState(()=>Mm().clearTerminalOnRun),[tn,yr]=j.useState(()=>Mm().simplifiedErrors),[ol,wr]=j.useState(()=>typeof navigator<"u"?_h(navigator):!1),kt=j.useRef(null),xt=j.useRef(null),ft=j.useRef(null),ya=j.useRef(null),xr=j.useRef(null),fi=j.useRef(null),wa=j.useRef(null),kr=j.useRef(null),cl=j.useRef(null),An=j.useRef(null),or=j.useRef(null),nn=j.useRef(!1),_n=j.useRef(!1),bt=j.useRef(!1),$n=j.useRef(""),Dr=j.useRef(null),Cn=j.useRef(null),vn=j.useRef(null),mi=j.useRef(null),cr=j.useRef(null),ul=j.useRef(null),Or=j.useRef(0),ur=j.useRef(null),dr=j.useRef(null),Yn=j.useRef(null),Ht=j.useRef(null),$l=j.useRef([]),xa=j.useRef([]),Sr=j.useRef(null),Lr=hv(),Se=o==="control"&&!!s&&d(),hi=Se?(s==null?void 0:s.deviceID)??"ble":null,bn=Math.max(1,Z.split(`
`).length),pi=new Blob([Z]).size,Bs=xe==="pico"?"Picoen":"browseren",gi=j.useMemo(()=>[...new Set(Vl.map(f=>f.board))],[]),Xn=j.useMemo(()=>Vl.filter(f=>f.board===Me),[Me]),Br=Vl.find(f=>f.board===Me&&f.version===wt)??Xn[0]??Vl[0],ka=P||!!te||fn||hn,Yt=xe==="pico",_i=Yt?fn:hn,yn=Yt&&fn&&x&&!Se||!Yt&&hn&&!!vn.current&&di,zs=br||_i&&!yn,vi=yn?"stdin":">>>",Us=yn?Yt?"Input til kørende Pico-kode":"Input til kørende Browser-MicroPython":Yt?"Pico MicroPython":"Browser-MicroPython",bi=j.useMemo(()=>{const f=new pv({onData:v=>{_n.current||!nn.current||($n.current=($n.current+v).slice(-240),/(^|\r?\n)>>> ?$/.test($n.current)&&zr())},onLine:v=>{if(_n.current)return;const w=v.trimEnd();if(bt.current&&w.trim()){$("info",w);return}if(nn.current&&yi(w)){zr();return}nn.current&&w.trim()&&!wi(w)&&!w.includes("raw REPL")&&$("info",w)},onLog:$,onDisconnect:()=>{E(!1),mn(!1),Rn(!1),nn.current=!1,bt.current=!1,Kn(),$n.current="",qr(),$("warning","USB-forbindelse lukket.")}});return kt.current=f,f},[]);function $(f,v){H(w=>[...w.slice(-140),{level:f,text:v}])}function fr(f){H(v=>[...v.slice(-140),{level:"info",text:f,variant:"input"}])}function yi(f){return f.trim()===">>>"}function wi(f){return f.trimStart().startsWith(">>> import builtins as _pkp_builtins; exec(")}function Kn(){Dr.current!==null&&(window.clearTimeout(Dr.current),Dr.current=null)}function zr(){!nn.current||Dr.current!==null||(Dr.current=window.setTimeout(()=>{Dr.current=null,nn.current&&(mn(!1),nn.current=!1,$n.current="",$("success","Pico-koden er færdig."),xi())},0))}function xi(){const f=ft.current;f&&Ti(f,!1)}function dl(f,v=Z,w="error"){const A=Nv(f,v);H(R=>[...R.slice(-140),{level:w,text:A.simple,technical:A.technical}])}function St(f,v,w=xe){Ie(f),$e(w),N(v),en(A=>({...A,[Zt(w,f)]:v})),wn()}function fl(f,v="pico"){Ie(f),$e(v),N(""),ee(null),sl({top:0,left:0}),wn()}function wn(){$l.current=[],xa.current=[],Sr.current=null}function Ur(){const f=xr.current;return{content:Z,selectionStart:(f==null?void 0:f.selectionStart)??Z.length,selectionEnd:(f==null?void 0:f.selectionEnd)??(f==null?void 0:f.selectionStart)??Z.length}}function Yl(f){const v=$l.current,w=v.at(-1);(w==null?void 0:w.content)===f.content&&w.selectionStart===f.selectionStart&&w.selectionEnd===f.selectionEnd||(v.push(f),v.length>Uv&&v.shift(),xa.current=[])}function Er(f,v){let w=0;const A=Math.min(f.length,v.length);for(;w<A&&f[w]===v[w];)w+=1;let R=f.length,W=v.length;for(;R>w&&W>w&&f[R-1]===v[W-1];)R-=1,W-=1;const he=f.slice(w,R),et=v.slice(w,W),Ae=et&&!he?"insert":he&&!et?"delete":"replace",rt=et.at(-1)??"";return{kind:Ae,boundaryAfter:Ae==="insert"&&/[\s.,:;()[\]{}'"`+\-*/%=<>!?]/.test(rt)}}function ki(f,v){if(v!=="typing")return Sr.current=null,!0;const w=Date.now(),A=Er(Z,f),R=Sr.current,W=R!==null&&R.path===ne&&R.source===xe&&R.kind===A.kind&&R.kind!=="replace"&&!R.boundaryAfter&&w-R.at<=qv;return Sr.current={path:ne,source:xe,kind:A.kind,at:w,boundaryAfter:A.boundaryAfter},!W}function Xl(f){N(f.content),en(v=>({...v,[Zt(xe,ne)]:f.content})),gn(""),ee(null),window.requestAnimationFrame(()=>{const v=xr.current;v&&(v.focus(),v.selectionStart=Math.min(f.selectionStart,f.content.length),v.selectionEnd=Math.min(f.selectionEnd,f.content.length))})}function qs(){const f=$l.current.pop();return f?(Sr.current=null,xa.current.push(Ur()),Xl(f),!0):!1}function Kl(){const f=xa.current.pop();return f?(Sr.current=null,$l.current.push(Ur()),Xl(f),!0):!1}function Dn(f,v=(W=>(W=xr.current)==null?void 0:W.selectionStart)()??f.length,w=Ur(),A=v,R="programmatic"){w&&f!==Z&&ki(f,R)&&Yl(w),N(f),en(he=>({...he,[Zt(xe,ne)]:f})),gn(""),Ra(f,v),window.requestAnimationFrame(()=>{const he=xr.current;he&&(he.selectionStart=Math.min(v,f.length),he.selectionEnd=Math.min(A,f.length))})}function ml(f,v=xe){en(w=>{const A=Zt(v,f);if(!(A in w))return w;const R={...w};return delete R[A],R})}function rn(){return Ft[ne]===Z}function Et(f,v){Gt(w=>({...w,[f]:v}))}function Ql(f,v){Et(f,v),en(w=>({...w,[Zt("pico",f)]:v})),xe==="pico"&&ne===f&&N(v)}function qr(){ge([]),de([]),Gt({}),en({}),ee(null),Ie(f=>{const v=cc(ic());if(v.find(R=>R.path===f))return f;const A=v[0];return $e("local"),N(A.content),wn(),A.path})}function Vt(f){Hr(),me({value:100,label:f}),Ht.current=window.setTimeout(()=>{Ht.current=null,me(null)},900)}function Hr(){Ht.current!==null&&(window.clearTimeout(Ht.current),Ht.current=null)}function Si(){return ze?u.jsxs("div",{className:"ide-task-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(ze.value),children:[u.jsxs("div",{children:[u.jsx("span",{children:ze.label}),u.jsxs("strong",{children:[Math.round(ze.value),"%"]}),ze.cancellable&&u.jsx("button",{className:"ide-task-cancel",type:"button",onClick:Wl,"aria-label":"Stop handling",title:"Stop",children:u.jsx(Pt,{name:"delete",size:18})})]}),u.jsx("b",{"aria-hidden":"true",children:u.jsx("i",{style:{width:`${Math.max(2,Math.min(100,ze.value))}%`}})})]}):null}function Wl(){cr.current&&Tr("Stopper læsning...",!0,!0)}function Tr(f="Stopper læsning...",v=!1,w=!1){var A;Hr(),dr.current=null,Or.current+=1,(A=cr.current)==null||A.abort(),cr.current=null,ur.current=null,pe(null),B(!1),me(v?{value:(ze==null?void 0:ze.value)??0,label:f,cancellable:!1}:null),w&&$("warning","Stopper BLE-læsning efter den aktuelle datapakke.")}function Hs(f){var v;if(!(ur.current===f||dr.current===f)){if(dr.current=f,ul.current){Or.current+=1,(v=cr.current)==null||v.abort(),cr.current=null,ur.current=null,fl(f),pe(f),B(!0),Hr(),me({value:2,label:`Skifter til ${Le(f)}...`,cancellable:!0});return}Vs()}}function Vs(){if(ul.current)return;const f=dr.current;if(!f)return;dr.current=null;const v=Or.current+1;Or.current=v;const w=new AbortController;cr.current=w,ur.current=f,fl(f),pe(f),B(!0),Hr(),me({value:12,label:`Indlæser ${Le(f)}...`,cancellable:!0});const A=(async()=>{try{const R=await g(f,(W,he)=>{Or.current===v&&me({value:W,label:he,cancellable:!0})},w.signal);if(w.signal.aborted||Or.current!==v)return;St(f,R,"pico"),Et(f,R),Vt("Fil indlæst")}catch(R){if(Or.current!==v)return;Pv(R)||w.signal.aborted?$("info",`Stoppede læsning af ${Le(f)}.`):(me(null),$("error",R instanceof Error?R.message:"BLE læsning fejlede."))}})();ul.current=A,A.finally(()=>{if(ul.current!==A)return;ul.current=null,cr.current===w&&(cr.current=null),ur.current===f&&(ur.current=null),!!dr.current||(pe(null),B(!1),w.signal.aborted&&me(null)),Vs()})}async function Sa(f){const v=_n.current;_n.current=!0;try{return await f()}finally{_n.current=v}}j.useEffect(()=>{if(!Fn)return;const f=cl.current;f&&(f.scrollTop=f.scrollHeight)},[F,Fn]),j.useEffect(()=>{X2({clearTerminalOnRun:$t,simplifiedErrors:tn})},[$t,tn]),j.useEffect(()=>{var f;Xn.some(v=>v.version===wt)||sn(((f=Xn[0])==null?void 0:f.version)??"")},[Xn,wt]),j.useEffect(()=>{wr(_h(navigator))},[]),j.useEffect(()=>{const f=()=>{const v=kt.current;xt.current=null,ft.current=null,kt.current=null,v==null||v.disconnect().catch(()=>{})};return window.addEventListener("pagehide",f),()=>{var v,w;Hr(),(v=Cn.current)==null||v.dispose(),Cn.current=null,(w=vn.current)==null||w.dispose(),vn.current=null,window.removeEventListener("pagehide",f),f()}},[]),j.useEffect(()=>{const f=v=>{!(v.ctrlKey||v.metaKey)||v.key.toLowerCase()!=="s"||(v.preventDefault(),!P&&ne.trim()&&!ol&&!Te&&!ce&&!Re&&Mi())};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[xe,Se,P,x,Z,ne,ol,Te,ce,Re]);function Ea(f,v,w){Be(A=>{const R=Fd(A,f,v,w);return bs(R),R})}function Ta(f,v){Be(w=>{const A=w.find(Ae=>Ae.path===f),W=Jt[Zt("local",f)]??(A==null?void 0:A.content),he=W!==void 0&&Il(W)!==Il(v)?Fd(w,nb(f,hc(w)),W,!1):w,et=Fd(he,f,v,!1);return bs(et),et}),en(w=>({...w,[Zt("local",f)]:v})),xe==="local"&&ne===f&&(N(v),gn(""),ee(null),wn())}const Ei=ab(oe,ve,Jt,x||Se);j.useEffect(()=>{if(!Se)return;const f={cancelled:!1};return(async()=>{for(let v=0;v<6&&!f.cancelled;v+=1)try{const w=await h();if(f.cancelled)return;ge(w),$("success",`Indlæste ${w.length} filer fra Pico via Bluetooth.`);return}catch(w){if(f.cancelled)return;v===5?$("error",w instanceof Error?w.message:"BLE filhandling fejlede."):await mh(1500)}})(),()=>{f.cancelled=!0}},[s,Se]),j.useEffect(()=>{const f=Yn.current;f&&f!==hi&&qr(),Yn.current=hi},[hi]);async function Ec(){if(Lr.supported){O(!0);try{await bi.requestAndConnect();const f=new F_(bi);xt.current=f,ft.current=new Q_(f),E(!0),Ve(0),await f.interrupt(),await Tc(f),$("success","Sendte stop-signal til Pico-terminalen."),await Ti(ft.current),await Ps(ft.current)}catch(f){$("error",f instanceof Error?f.message:"USB-forbindelse mislykkedes.");try{await bi.disconnect()}catch(v){$("error",v instanceof Error?`USB-porten kunne ikke lukkes: ${v.message}`:"USB-porten kunne ikke lukkes.");return}Ve(v=>{const w=v+1;return w>=3&&($("info","USB-forbindelsen er mislykkedes flere gange. Hvis Picoen er i BOOTSEL eller mangler MicroPython, kan du bruge MicroPython-download."),Ce(!0)),w}),E(!1)}finally{O(!1)}}}async function Tc(f){const v=await f.exec(`import sys
print(sys.implementation.name)
`,4e3);if(v.error||!v.output.toLowerCase().includes("micropython"))throw new Error("MicroPython blev ikke fundet på Picoen.")}async function Mc(){var f;try{await((f=kt.current)==null?void 0:f.disconnect()),xt.current=null,ft.current=null,E(!1),qr()}catch(v){$("error",v instanceof Error?`USB-porten kunne ikke lukkes: ${v.message}`:"USB-porten kunne ikke lukkes.")}}async function Qn(f){const v=ft.current;if(v){B(!0),_n.current=!0;try{await f(v)}catch(w){me(null),$("error",w instanceof Error?w.message:"USB filhandling fejlede.")}finally{_n.current=!1,B(!1)}}}async function Tt(f=!0){if(Se){B(!0);try{const v=await h();ge(v),f&&$("success",`Indlæste ${v.length} filer fra Pico via Bluetooth.`)}catch(v){$("error",v instanceof Error?v.message:"BLE filhandling fejlede.")}finally{B(!1)}return}await Ti(ft.current,f)}async function Ti(f,v=!0){if(f){B(!0);try{const w=await Sa(()=>f.list("/"));ge(w),v&&$("success",`Indlæste ${w.length} filer fra Pico.`)}catch(w){$("error",w instanceof Error?w.message:"USB filhandling fejlede.")}finally{B(!1)}}}async function Zl(){if(Se){B(!0),me({value:4,label:"Tjekker biblioteker på Pico via Bluetooth..."});try{const f=await Is((v,w)=>me({value:v,label:w}));de(f),Vt("Fil-tjek færdigt")}catch(f){me(null),$("error",f instanceof Error?f.message:"BLE runtime check fejlede.")}finally{B(!1)}return}await Ps(ft.current)}async function Is(f){const v=[],w=li.filter(R=>R.kind==="library"&&!Pl(R));let A=0;for(const R of li){if(R.kind==="program"){v.push({...R,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}if(Pl(R)){v.push({...R,status:"unknown",detail:"Opdateres via USB"});continue}try{const W=A/Math.max(1,w.length)*100,he=100/Math.max(1,w.length);$("info",`Tjekker ${R.label} på Pico via Bluetooth...`),f==null||f(Math.min(95,W),`Tjekker ${R.label} på Pico...`);const et=await g(R.path,(rt,Mt)=>{f==null||f(Math.min(95,W+rt/100*he),`${R.label}: ${Mt}`)}),Ae=Il(et)===Il(R.content);v.push({...R,status:Ae?"ok":"outdated",detail:Ae?"Matcher appens version":"Kan installeres via Bluetooth"})}catch{v.push({...R,status:"missing",detail:"Mangler på Pico"})}finally{A+=1}}return f==null||f(100,"Fil-tjek færdigt"),v}async function Ps(f){if(f){B(!0);try{const v=await Sa(()=>Ma(f)),w=v;de(w)}catch(v){$("error",v instanceof Error?v.message:"Runtime check fejlede.")}finally{B(!1)}}}async function Ma(f){if(!f)return[];const v=[];for(const w of li){if(w.kind==="program"){v.push({...w,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}try{const A=await f.readText(w.path),R=Il(A)===Il(w.content);v.push({...w,status:R?"ok":"outdated",detail:R?"Matcher appens version":"Matcher ikke appens version"})}catch{v.push({...w,status:"missing",detail:"Mangler på Pico"})}}return v}async function jc(f=ne){if(Se){Hs(f);return}pe(f),await Qn(async v=>{me({value:12,label:`Indlæser ${Le(f)}...`});const w=await Nc(v,f);St(f,w,"pico"),Et(f,w),Vt("Fil indlæst")}),pe(null)}async function Nc(f,v){var w;try{return await f.readText(v)}catch(A){await((w=xt.current)==null?void 0:w.stop().catch(()=>{})),await mh(120);try{return await f.readText(v)}catch{throw A}}}function Rc(){We(!0)}async function Mi(){if(xe==="pico"){if(!x&&!Se){$("error","Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.");return}await ji();return}Fs()}function Fs(){if(Fl(ne)){$("error",Ss);return}Ea(ne,Z,!1),$e("local"),en(f=>({...f,[Zt("local",ne)]:Z})),We(!1),$("success",`Gemte ${Le(ne)} lokalt.`)}async function ji(){if(We(!1),Fl(ne))return me(null),$("error",Ss),!1;if(me({value:0,label:"Starter gemning..."}),Se){B(!0);try{return await m(ne,Z,(v,w)=>me({value:v,label:w})),Et(ne,Z),$e("pico"),en(v=>({...v,[Zt("pico",ne)]:Z})),Vt("Gemt på Pico via Bluetooth"),$("success",`Gemte ${Le(ne)} på Pico via Bluetooth.`),oc(ne)&&(ht("saved"),$("warning","main.py er gemt. Genstart Picoen for at køre den nye version.")),await Tt(!1),!0}catch(v){return me(null),$("error",v instanceof Error?v.message:"BLE gem fejlede."),!1}finally{B(!1)}}if(!ft.current)return me(null),!1;let f=!1;return await Qn(async v=>{pl(ne,"pico")?await v.replaceTextSafely(ne,Z,(w,A)=>me({value:w,label:A})):await v.writeText(ne,Z,(w,A)=>me({value:w,label:A})),Et(ne,Z),$e("pico"),en(w=>({...w,[Zt("pico",ne)]:Z})),Vt("Gemt på Pico via USB"),$("success",`Gemte ${ne}.`),await Tt(),await Zl(),f=!0}),f}function Ac(){Gs(Le(ne),Z),We(!1),$("success",`Downloadede ${Le(ne)}.`)}function Gs(f,v){const w=new Blob([v],{type:"text/plain;charset=utf-8"}),A=URL.createObjectURL(w),R=document.createElement("a");R.href=A,R.download=f,R.click(),URL.revokeObjectURL(A)}async function $s(f){B(!0),f==="ide"&&q(!0),ht(null),me({value:10,label:"Genstarter Pico..."});try{await b(f)?(Vt("Pico genforbundet"),$("success",f==="control"?"Pico genforbundet. Åbner kontrolpanelet.":"Pico genforbundet til Kodeværkstedet.")):(me(null),$("warning","Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet."))}catch(v){me(null),$("error",v instanceof Error?v.message:"Genstart/genforbindelse mislykkedes.")}finally{B(!1),q(!1)}}function Ys(f){var W,he;const v=f??{path:ne,source:xe},w=v.source==="pico"?"Pico":"browser",A=(f==null?void 0:f.versions.length)??(v.source==="pico"?((W=ai(oe).get(v.path))==null?void 0:W.length)??0:((he=ai(hc(ve)).get(v.path))==null?void 0:he.length)??0),R=A>0?` Det sletter også filens versionshistorik (${A} gemte versioner).`:"";fe(null),l({title:"Slet fil",message:`Vil du slette ${Le(v.path)} fra ${w}?${R}`,confirmLabel:"Slet",onConfirm:()=>{ea(v)}})}function Cc(){l({title:"Nulstil enhed",message:"Vil du nulstille Picoens enhedsindstillinger? Det sletter DeviceSettings.txt, så Picoen kan oprettes som en ny enhed igen. Kodefiler og startprogram bliver ikke slettet.",confirmLabel:"Nulstil",onConfirm:()=>{Dc()}})}async function Dc(){if(!ft.current){$("error","Forbind Picoen med USB først.");return}await Qn(async f=>{await f.delete("/DeviceSettings.txt").catch(v=>{const w=v instanceof Error?v.message:"";if(!/ENOENT|No such file|not found/i.test(w))throw v}),Gt(v=>{const w={...v};return delete w["/DeviceSettings.txt"],w}),ml("/DeviceSettings.txt","pico"),$("success","DeviceSettings.txt er nulstillet. Afbryd og forbind Picoen igen, hvis kontrolpanelet allerede var åbent."),await Tt()})}function Xs(f,v,w){const A=Ei.filter(he=>he.kind==="file"&&he.type==="file"),R=A.findIndex(he=>he.path===f&&he.source===v);if(R===-1)return null;const W=he=>!!he&&!(he.path===f&&he.source===v)&&!(he.source===v&&w.has(he.path))&&!(Se&&Pl(he));for(const he of[!0,!1])for(let et=1;et<A.length;et+=1){const Ae=A[R+et];if(W(Ae)&&(!he||Ae.source===v))return Ae;const rt=A[R-et];if(W(rt)&&(!he||rt.source===v))return rt}return null}function Jl(f){if(f){Ni(f);return}const v=cc(ic())[0];St(v.path,Jt[Zt("local",v.path)]??v.content,"local")}async function ea(f){const v=f.path,w=f.source,A=v===ne&&w===xe;if(w==="local"){const Ae=ai(hc(ve)).get(v)??[],rt=new Set([v,...Ae.map(pt=>pt.path)]),Mt=A?Xs(v,w,rt):null,un=ve.filter(pt=>!rt.has(pt.path));Be(un),bs(un);for(const pt of rt)ml(pt,"local");A&&Jl(Mt);const qe=Ae.length>0?` og ${Ae.length} gemte versioner`:"";$("warning",`Slettede ${Le(v)}${qe} fra browseren.`);return}const R=ai(oe).get(v)??[],W=[v,...R.map(Ae=>Ae.path)],he=A?Xs(v,w,new Set(W)):null;if(Se){B(!0);try{for(const rt of W)await _(rt);Gt(rt=>{const Mt={...rt};for(const un of W)delete Mt[un];return Mt});for(const rt of W)ml(rt,"pico");const Ae=R.length>0?` og ${R.length} gemte versioner`:"";$("warning",`Slettede ${Le(v)}${Ae} på Pico via Bluetooth.`),await Tt(),A&&Jl(he)}catch(Ae){$("error",Ae instanceof Error?Ae.message:"BLE sletning fejlede.")}finally{B(!1)}return}if(!ft.current){$("error","Ingen Pico-forbindelse. Kan ikke slette Pico-filen.");return}let et=!1;await Qn(async Ae=>{for(const Mt of W)await Ae.delete(Mt);Gt(Mt=>{const un={...Mt};for(const qe of W)delete un[qe];return un});const rt=R.length>0?` og ${R.length} gemte versioner`:"";$("warning",`Slettede ${v}${rt}.`);for(const Mt of W)ml(Mt,"pico");await Tt(),await Zl(),et=!0}),et&&A&&Jl(he)}async function Oc(f){if(!f)return;const v=Vv(f.name);if(!v){$("error","Kun .py, .txt, .json og .csv kan importeres.");return}if(Fl(v)){$("error",Ss);return}if(f.size>128*1024){$("error","Filen er for stor til Pico-værkstedet.");return}const w=await f.text();if(xe==="local"){Ea(v,w,!0),St(v,w,"local"),$("success",`Importerede ${Le(v)} i browseren.`);return}if(!x&&!Se){$("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(Se&&Pl({path:v})){$("error","PicoBluetooth.py kan ikke importeres over Bluetooth, mens den holder forbindelsen i gang. Brug USB i stedet.");return}if(me({value:0,label:"Uploader fil til Pico..."}),Se){B(!0);try{await m(v,w,(R,W)=>me({value:R,label:W})),Et(v,w),St(v,w,"pico"),Vt("Fil uploadet til Pico"),$("success",`Importerede ${Le(v)} på Pico via Bluetooth.`),await Tt()}catch(R){me(null),$("error",R instanceof Error?R.message:"Kunne ikke importere filen til Pico.")}finally{B(!1)}return}if(!ft.current){me(null),$("error","Ingen Pico-forbindelse. Kan ikke importere filen til Pico.");return}await Qn(async R=>{pl(v,"pico")?await R.replaceTextSafely(v,w,(W,he)=>me({value:W,label:he})):await R.writeText(v,w,(W,he)=>me({value:W,label:he})),Et(v,w),St(v,w,"pico"),Vt("Fil uploadet til Pico"),$("success",`Importerede ${Le(v)} på Pico.`),await Tt(),await Zl()})}async function Ks(){G(""),_e(!0)}function Qs(){const f=hh(T);if(!f)return;if(Fl(f)){$("error",Ss);return}const v=xe;if(pl(f,v)){$("error",`Der findes allerede en fil med navnet ${Le(f)} i ${v==="pico"?"Pico":"browseren"}.`);return}if(v==="local"){Ea(f,"",!1),St(f,"","local"),_e(!1),$("success",`Oprettede ${Le(f)} i browseren.`);return}Ws(f)}async function Ws(f){if(!x&&!Se){$("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(_e(!1),me({value:0,label:"Opretter fil på Pico..."}),Se){B(!0);try{await m(f,"",(v,w)=>me({value:v,label:w})),Et(f,""),St(f,"","pico"),Vt("Fil oprettet på Pico"),$("success",`Oprettede ${Le(f)} på Pico via Bluetooth.`),await Tt()}catch(v){me(null),$("error",v instanceof Error?v.message:"Kunne ikke oprette fil på Pico.")}finally{B(!1)}return}if(!ft.current){me(null),$("error","Ingen Pico-forbindelse. Kan ikke oprette Pico-filen.");return}await Qn(async v=>{await v.writeText(f,"",(w,A)=>me({value:w,label:A})),Et(f,""),St(f,"","pico"),Vt("Fil oprettet på Pico"),$("success",`Oprettede ${Le(f)} på Pico.`),await Tt()})}function Zs(f){f.type==="file"&&(fe(f),ae(Iv(f.path)))}async function Js(f){if(!ce)return;const v=ce.path;if(fe(null),ce.source==="local"){const w=ve.find(A=>A.path===f.path);if(!w){$("error","Kunne ikke finde versionen i browseren.");return}Ta(v,w.content),St(v,w.content,"local"),$("success",`Gendannede ${Le(f.path)} i browseren.`);return}if(me({value:0,label:"Gendanner version..."}),Se){B(!0);try{const w=await g(f.path);await m(v,w,(A,R)=>me({value:A,label:R})),Et(v,w),St(v,w,"pico"),Vt("Version gendannet"),await Tt(!1)}catch(w){me(null),$("error",w instanceof Error?w.message:"Kunne ikke gendanne versionen.")}finally{B(!1)}return}ft.current&&await Qn(async w=>{await w.replaceTextSafely(v,await w.readText(f.path),(R,W)=>me({value:R,label:W}));const A=await w.readText(v);Et(v,A),St(v,A,"pico"),Vt("Version gendannet"),await Tt()})}function hl(f){const v=(ce==null?void 0:ce.source)==="local"?"browseren":"Pico";l({title:"Slet version",message:`Vil du slette ${Le(f.path)} fra ${v}?`,confirmLabel:"Slet",onConfirm:()=>{Lc(f)}})}async function Lc(f){if((ce==null?void 0:ce.source)==="local"){const v=ve.filter(w=>w.path!==f.path);Be(v),bs(v),ml(f.path,"local"),fe(w=>w&&{...w,versions:w.versions.filter(A=>A.path!==f.path)}),$("warning",`Slettede ${Le(f.path)} fra browserens versionshistorik.`);return}if(Se){B(!0);try{await _(f.path),await Tt(!1),fe(v=>v&&{...v,versions:v.versions.filter(w=>w.path!==f.path)})}catch(v){$("error",v instanceof Error?v.message:"Kunne ikke slette versionen.")}finally{B(!1)}return}ft.current&&await Qn(async v=>{await v.delete(f.path),await Tt(!1),fe(w=>w&&{...w,versions:w.versions.filter(A=>A.path!==f.path)})})}async function Bc(){var w;if(!ce)return;const f=ce,v=rb(f.path,A=>pl(A,f.source));if(!v){$("error",`Kunne ikke finde et ledigt filnavn til en kopi af ${Le(f.path)}.`);return}if(f.source==="local"){const A=Jt[Zt("local",f.path)]??((w=ve.find(R=>R.path===f.path))==null?void 0:w.content)??"";Ea(v,A,!1),St(v,A,"local"),fe(null),$("success",`Duplikerede ${Le(f.path)} til ${Le(v)} i browseren.`);return}if(fe(null),me({value:0,label:"Duplikerer fil..."}),Se){B(!0);try{const A=Ft[f.path]??await g(f.path);await m(v,A,(R,W)=>me({value:R,label:W})),Et(v,A),St(v,A,"pico"),Vt("Fil duplikeret"),await Tt(!1),$("success",`Duplikerede ${Le(f.path)} til ${Le(v)} på Pico via Bluetooth.`)}catch(A){me(null),$("error",A instanceof Error?A.message:"Kunne ikke duplikere filen.")}finally{B(!1)}return}if(!ft.current){me(null),$("error","Ingen Pico-forbindelse. Kan ikke duplikere Pico-filen.");return}await Qn(async A=>{const R=await A.readText(f.path);await A.writeText(v,R,(W,he)=>me({value:W,label:he})),Et(v,R),St(v,R,"pico"),Vt("Fil duplikeret"),await Tt(!1),$("success",`Duplikerede ${Le(f.path)} til ${Le(v)} på Pico.`)})}async function zc(){if(!ce)return;const f=ce,v=Pd(le,Es(f.path));if(!v||v===f.path)return;if(Fl(v)){$("error",Ss);return}if(pl(v,f.source)){$("error",`Der findes allerede en fil med navnet ${Le(v)}.`);return}const w=f.source==="local",A=f.source==="pico";if(Se&&A&&(oc(f.path)||oc(v))){$("error","main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.");return}B(!0);try{if(A)if(Se){const R=Ft[f.path]??await g(f.path);await m(v,R,(W,he)=>me({value:W,label:he})),await _(f.path),Gt(W=>({...kh(W,f.path,v),[v]:R}))}else ft.current&&(await Sa(()=>ft.current.rename(f.path,v)),Gt(R=>kh(R,f.path,v)));w&&Be(R=>{const W=R.map(he=>he.path===f.path?{...he,path:v,updatedAt:Date.now()}:he);return bs(W),W}),ne===f.path&&xe===f.source&&Ie(v),en(R=>ob(R,f.source,f.path,v)),fe(null),ae(""),$("success",`Omdøbte ${Le(f.path)} til ${Le(v)}.`),A&&await Tt()}catch(R){$("error",R instanceof Error?R.message:"Kunne ikke omdøbe filen.")}finally{me(null),B(!1)}}function pl(f,v){return v==="pico"?oe.some(w=>w.path===f):ve.some(w=>w.path===f)}function Ni(f){if(f.type!=="file"){Se&&Tr(void 0,!1),Ie(f.path),$e(f.source);return}if(Se&&Pl(f)){$("warning","PicoBluetooth.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.");return}if(f.source==="local"){Se&&Tr(void 0,!1);const w=ve.find(A=>A.path===f.path);St(f.path,Jt[Zt("local",f.path)]??(w==null?void 0:w.content)??"","local");return}const v=Zt("pico",f.path);if(Object.prototype.hasOwnProperty.call(Jt,v)){Se&&Tr(void 0,!1),St(f.path,Jt[v],"pico");return}if(Object.prototype.hasOwnProperty.call(Ft,f.path)){Se&&Tr(void 0,!1),St(f.path,Ft[f.path],"pico");return}jc(f.path)}async function gl(){if(!x&&!Se){const f=ph();de(f),J(gh(f)),at(!0),me(null);return}B(!0),me({value:4,label:Se?"Tjekker biblioteker på Pico via Bluetooth...":"Tjekker biblioteker på Pico..."}),$("info",Se?"Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...":"Tjekker om Picoens biblioteker er opdaterede før installation...");try{const f=Q.length>0?Q:Se?await Is((v,w)=>me({value:v,label:w})):await Sa(()=>Ma(ft.current));de(f),J(gh(f)),at(!0),me(null)}catch(f){me(null),$("error",f instanceof Error?f.message:"Fil-tjek før installation fejlede.")}finally{B(!1)}}async function ta(){if(at(!1),Se){B(!0);try{const v=(Q.length>0?Q:li.map(A=>({...A,status:"unknown",detail:"Ikke tjekket"}))).filter(A=>V[A.id]&&!Pl(A));if(v.length===0){$("info","Ingen filer valgt til installation.");return}let w=null;me({value:0,label:"Starter installation..."});for(const[A,R]of v.entries()){$("info",`Installerer ${R.label} via Bluetooth...`);const W=A/v.length*100,he=100/v.length;await m(R.path,R.content,(et,Ae)=>{me({value:Math.min(99,W+et/100*he),label:`${R.label}: ${Ae}`})}),Ql(R.path,R.content),$("success",`Installerede ${R.label}.`),R.kind==="library"&&(w=R),oc(R.path)&&ht("saved")}Vt("Installation færdig"),await Tt(!1),await Zl(),w&&Ri(w)}catch(f){me(null),$("error",f instanceof Error?f.message:"BLE installation fejlede.")}finally{B(!1)}return}await Qn(async f=>{const w=(Q.length>0?Q:li.map(R=>({...R,status:"unknown",detail:"Ikke tjekket"}))).filter(R=>V[R.id]);if(w.length===0){$("info","Ingen filer valgt til installation.");return}let A=null;me({value:0,label:"Starter installation..."});for(const[R,W]of w.entries()){$("info",`Installerer ${W.label}...`);const he=R/w.length*100,et=100/w.length,Ae=await f.readText(W.path).catch(()=>null);Ae!==null&&Il(Ae)===Il(W.content)?(me({value:Math.min(99,he+et),label:`${W.label}: Allerede nyeste version`}),$("info",`${W.label} findes allerede i samme version.`)):(await f.replaceTextSafely(W.path,W.content,(rt,Mt)=>{me({value:Math.min(99,he+rt/100*et),label:`${W.label}: ${Mt}`})},{createBackup:!0}),$("success",`Installerede ${W.label}.`)),Ql(W.path,W.content),W.kind==="library"&&(A=W)}Vt("Installation færdig"),await Tt(!1),await Zl(),A&&Ri(A)})}function eo(){return(Q.length>0?Q:ph()).filter(v=>V[v.id])}function ja(){const f=eo();if(f.length===0){$("info","Ingen filer valgt.");return}for(const v of f)Ta(v.path,v.content);at(!1),$("success",`Gemte ${f.length} filer i browseren.`)}function to(){const f=eo();if(f.length===0){$("info","Ingen filer valgt.");return}f.forEach((v,w)=>{window.setTimeout(()=>{Gs(Le(v.path),v.content)},w*120)}),at(!1),$("success",`Starter download af ${f.length} filer.`)}function Ri(f){St(f.path,f.content,"pico"),Et(f.path,f.content),$("info",`Åbnede ${f.label} i editoren.`)}function Ai(f,v){J(w=>{if(f.kind!=="program")return{...w,[f.id]:v};const A={...w};for(const R of Q)R.kind==="program"&&(A[R.id]=!1);return A[f.id]=v,A})}async function Ci(){if(na(),Se&&xe==="pico"){$("warning","Bluetooth holder forbindelsen åben, så koden kan ikke køres direkte her. Gem filen, og genstart Picoen for at køre den.");return}if(xe==="local"){await no();return}const f=xt.current;if(!f){$("error",`${Le(ne)} er gemt på Picoen, men der er ingen USB-forbindelse til Pico-terminalen.`);return}if(ne.endsWith(".py")){if(!rn()&&($("info",`${Le(ne)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`),!await ji())){$("error","Pico-forbindelsen blev afbrudt under gemning.");return}if(P)return;Kn(),$n.current="",it(!0);try{await f.runFile(ne,()=>{Kn(),$n.current="",bt.current=!1,mn(!0),nn.current=!0}),$("success",`Kører ${Le(ne)}. Brug Stop for at afbryde.`)}catch(v){mn(!1),nn.current=!1,Kn(),$n.current="",$("error",v instanceof Error?v.message:"Kunne ikke starte koden.")}return}B(!0);try{const v=await f.exec(Z,2e4);v.output.trim()&&$("info",v.output),v.error.trim()&&dl(v.error,Z),!v.output.trim()&&!v.error.trim()&&$("success","Koden kørte uden output.")}catch(v){$("error",v instanceof Error?v.message:"Kunne ikke køre koden.")}finally{B(!1)}}async function no(){const f=Wd(Z,{allowInput:!0});if(f.some(A=>A.level==="error")){for(const A of f){const R=A.line?`Linje ${A.line}: `:"";$(A.level==="error"?"error":"warning",`${R}${A.text}`)}return}/\binput\s*\(/.test(Z)&&!np()&&$("warning","input() i browseren kræver at siden genindlæses. Opdater siden (F5) og prøv igen.");const v=new AbortController;mi.current=v;const w=new xv;vn.current=w,B(!0),jn(!0),sr(!1),it(!0),$("info",x?"Starter Browser-MicroPython for browser-filen.":"Starter Browser-MicroPython. Forbind Pico med USB for at køre på selve Picoen.");try{const A=[],R=await w.run(Z,{timeoutMs:null,signal:v.signal,onOutput:Ae=>{A.push(Ae),$("info",Ae)},onWaitingForInput:sr});for(const Ae of R.issues){const rt=Ae.line?`Linje ${Ae.line}: `:"";$(Ae.level==="error"?"error":"warning",`${rt}${Ae.text}`)}const W=[...A,R.output].filter(Boolean).join(`
`).trim(),he=R.output.trim();!R.error.trim()&&Fv(W)?dl(W,Z):(he&&$("info",he),R.error.trim()&&dl(R.error,Z,R.unavailable?"warning":"error")),R.ok&&!W&&!R.error.trim()&&$("success","Browser-MicroPython kørte uden output.")}finally{mi.current=null,vn.current=null,w.dispose(),jn(!1),sr(!1),B(!1)}}async function ro(){var v,w,A;if(hn){(v=mi.current)==null||v.abort(),(w=vn.current)==null||w.stop(),$("warning","Stoppede Browser-MicroPython."),it(!0);return}if(!Yt&&br){(A=Cn.current)==null||A.reset(),Rn(!1),$("warning","Stoppede Browser-MicroPython-terminalen. Variablerne i browser-terminalen blev nulstillet."),it(!0);return}const f=xt.current;if(f)try{await f.stop(),$("warning","Stoppede koden på Pico.")}catch(R){$("error",R instanceof Error?R.message:"Kunne ikke stoppe koden.")}finally{mn(!1),nn.current=!1,Kn(),$n.current="",it(!0),xi()}}function lo(){const f=cl.current;if(!f)return;const v=f.scrollHeight-f.scrollTop-f.clientHeight<12;it(v)}function Uc(){H([]),it(!0)}function qc(){window.requestAnimationFrame(()=>{const f=cl.current;f&&(f.scrollTop=f.scrollHeight)})}async function Di(){const f=yn?vt:vt.trimEnd();if(yn){if(!Yt){const A=vn.current;if(!A){$("warning","Browser-MicroPython kører ikke lige nu."),Wn();return}Qe(""),it(!0),fr(f),A.sendInput(f),Wn();return}const w=xt.current;if(!w){$("warning","Pico-terminalen er ikke forbundet."),Wn();return}Qe(""),it(!0);try{await w.sendProgramInput(f)}catch(A){$("error",A instanceof Error?A.message:"Kunne ikke sende input til Pico-koden.")}finally{Wn()}return}if(!f.trim())return;if(ba(w=>(w.at(-1)===f?w:[...w,f]).slice(-80)),pn(null),Je(null),_i){$("warning",Yt?"Tryk Stop, før du skriver i Pico-terminalen.":"Stop offline MicroPython, før du skriver i browser-terminalen."),Wn();return}if(!Yt){const w=Wd(f);if(w.some(R=>R.level==="error")){for(const R of w){const W=R.line?"Linje "+R.line+": ":"";$(R.level==="error"?"error":"warning",W+R.text)}Wn();return}const A=Cn.current??new wv;Cn.current=A,Qe(""),Rn(!0),it(!0),$("info",">>> "+f);try{let R=!1;const W=await A.send(f,{timeoutMs:15e3,onOutput:et=>{R=!0,$("info",et)}}),he=W.output.trim();he&&!R&&$("info",he),W.error.trim()&&dl(W.error,f,W.unavailable?"warning":"error")}catch(R){$("error",R instanceof Error?R.message:"Browser-MicroPython-terminalen fejlede.")}finally{Rn(!1),Wn()}return}if(Se){$("warning","Terminalen bruger USB Serial. Bluetooth-forbindelsen kan vise filer, men kan ikke modtage frie terminalkommandoer."),Wn();return}const v=xt.current;if(!x||!v){$("warning","Forbind en microcontroller med USB for at skrive i MicroPython-terminalen."),Wn();return}Qe(""),Rn(!0),it(!0),bt.current=!0,$("info",">>> "+f);try{await v.sendFriendlyLine(f)}catch(w){bt.current=!1,$("error",w instanceof Error?w.message:"Kunne ikke sende kommando til MicroPython REPL.")}finally{Rn(!1),Wn()}}function Wn(){window.requestAnimationFrame(()=>{const f=An.current;if(!f||f.disabled)return;f.focus();const v=f.value.length;f.selectionStart=v,f.selectionEnd=v})}function ao(f,v,w){if(w.length===0)return null;const A=x||Se;return u.jsxs("div",{className:"ide-install-group",children:[u.jsxs("div",{className:"ide-install-group-head",children:[u.jsx("h3",{children:f}),u.jsx("p",{children:v})]}),u.jsx("div",{className:"ide-install-scroll",children:w.map(R=>{const W=Se&&Pl(R);return u.jsxs("label",{className:`ide-install-row ${W?"disabled":""}`,children:[u.jsx("input",{type:"checkbox",checked:!!V[R.id],disabled:W,onChange:he=>Ai(R,he.target.checked)}),u.jsxs("span",{children:[u.jsxs("strong",{children:[cn(R),A&&R.kind==="library"&&u.jsx("em",{className:`ide-install-status status-${R.status}`,children:W?"USB":lb(R.status)})]}),u.jsx("small",{children:R.description})]})]},R.id)})})]})}function cn(f){return f.kind==="program"?f.label.replace(/\s*\(main\.py\)$/i,""):f.label}function na(){$t&&H([]),it(!0)}function Na(f,v){const w=f.indexOf(`
`,v);return w===-1?f.length:w}function Ra(f,v){if(bh(f,v)){ee(null);return}const w=tf(f,v);if(!w||w.query.length<1){ee(null);return}const A=vh(f,v,!0).slice(0,8),R=yh(xr.current,w.start,A.length);A.length>0&&R?(ee({items:A,selected:0,start:w.start,end:v,position:R}),Mr(kr.current,0)):ee(null)}function Oi(f,v){if(bh(f,v)){Je(null);return}const w=tf(f,v);if(!w||w.query.length<1){Je(null);return}const A=vh(f,v,!1).slice(0,8),R=yh(An.current,w.start,A.length);A.length>0&&R?(Je({items:A,selected:0,start:w.start,end:v,position:R}),Mr(or.current,0)):Je(null)}function Li(f){const v=f.value.slice(f.selectionStart,f.selectionEnd);gn(Wv(v)?v:"")}function Mr(f,v){window.requestAnimationFrame(()=>{const w=f==null?void 0:f.querySelector(`[data-autocomplete-index="${v}"]`);w==null||w.scrollIntoView({block:"nearest"})})}function Bi(f=Ze==null?void 0:Ze.items[Ze.selected]){if(!f||!Ze)return;const v=Ur(),w=Z.slice(0,Ze.start)+f.insert+Z.slice(Ze.end),A=Ze.start+f.insert.length-(f.insert.endsWith("()")?1:0);ee(null),Dn(w,A,v),window.requestAnimationFrame(()=>{const R=xr.current;R&&R.focus()})}function Vr(f=be==null?void 0:be.items[be.selected]){if(!f||!be)return;const v=vt.slice(0,be.start)+f.insert+vt.slice(be.end),w=be.start+f.insert.length-(f.insert.endsWith("()")?1:0);Qe(v),Je(null),window.requestAnimationFrame(()=>{const A=An.current;A&&(A.focus(),A.selectionStart=w,A.selectionEnd=w)})}function zi(f){const v=xr.current;if(!v)return!1;const w=v.selectionStart,A=v.selectionEnd,R={content:Z,selectionStart:w,selectionEnd:A},W=Z.lastIndexOf(`
`,w-1)+1,he=A>w&&Z[A-1]===`
`?A-1:A,et=Na(Z,he),Ae=et<Z.length?et+1:et,rt=Z.slice(W,Ae);if(f<0){if(W===0)return!1;const Rt=Z.lastIndexOf(`
`,W-2)+1,xn=Z.slice(Rt,W),zt=Z.slice(0,Rt)+rt+xn+Z.slice(Ae),On=-xn.length;return Dn(zt,w+On,R,A+On),!0}if(Ae>=Z.length)return!1;const Mt=Na(Z,Ae),un=Mt<Z.length?Mt+1:Mt,qe=Z.slice(Ae,un),pt=Z.slice(0,W)+qe+rt+Z.slice(un),mr=qe.length;return Dn(pt,w+mr,R,A+mr),!0}function ra(f){var un;if(ka){(f.key==="Enter"||f.key==="Tab"||(f.ctrlKey||f.metaKey)&&["z","y","s"].includes(f.key.toLowerCase()))&&f.preventDefault();return}if((f.ctrlKey||f.metaKey)&&f.key.toLowerCase()==="z"){f.preventDefault(),(f.shiftKey?Kl():qs())&&ee(null);return}if((f.ctrlKey||f.metaKey)&&f.key.toLowerCase()==="y"){f.preventDefault(),Kl()&&ee(null);return}if((f.ctrlKey||f.metaKey)&&f.key.toLowerCase()==="s"){f.preventDefault(),!P&&ne.trim()&&Mi();return}if(f.altKey&&!f.ctrlKey&&!f.metaKey&&(f.key==="ArrowUp"||f.key==="ArrowDown")){f.preventDefault(),zi(f.key==="ArrowUp"?-1:1)&&ee(null);return}if(Ze){if(f.key==="ArrowDown"){f.preventDefault(),ee(qe=>{if(!qe)return qe;const pt=(qe.selected+1)%qe.items.length;return Mr(kr.current,pt),{...qe,selected:pt}});return}if(f.key==="ArrowUp"){f.preventDefault(),ee(qe=>{if(!qe)return qe;const pt=(qe.selected-1+qe.items.length)%qe.items.length;return Mr(kr.current,pt),{...qe,selected:pt}});return}if(f.key==="Tab"){f.preventDefault(),Bi();return}if(f.key==="Enter"){if(!(Ze.items[Ze.selected]&&ip(Ze.items[Ze.selected],Z.slice(Ze.start,Ze.end)))){f.preventDefault(),Bi();return}ee(null)}if(f.key==="Escape"){f.preventDefault(),ee(null);return}}if(f.key==="Enter"){f.preventDefault();const qe=f.currentTarget,pt=qe.selectionStart,mr=qe.selectionEnd,Rt={content:Z,selectionStart:pt,selectionEnd:mr},xn=Z.lastIndexOf(`
`,pt-1)+1,zt=Z.slice(xn,pt),On=((un=zt.match(/^[ \t]*/))==null?void 0:un[0])??"",Aa=zt.trimEnd().endsWith(":")?"    ":"",Ir=`
${On}${Aa}`,_l=Z.slice(0,pt)+Ir+Z.slice(mr),Pr=pt+Ir.length;Dn(_l,Pr,Rt),window.requestAnimationFrame(()=>{qe.selectionStart=Pr,qe.selectionEnd=Pr});return}if(f.key!=="Tab")return;f.preventDefault();const v=f.currentTarget,w=v.selectionStart,A=v.selectionEnd,R={content:Z,selectionStart:w,selectionEnd:A},W="    ";if(f.shiftKey){const qe=Z.lastIndexOf(`
`,w-1)+1,pt=w===A?Na(Z,w):A,mr=Z.slice(qe,pt);let Rt=0,xn=0;const zt=mr.replace(/(^|\n)( {1,4}|\t)/g,(Aa,Ir,_l,Pr)=>{const jr=_l.length;return qe+Pr<w&&(Rt+=jr),xn+=jr,Ir});if(xn===0)return;const On=Z.slice(0,qe)+zt+Z.slice(pt);Dn(On,Math.max(qe,w-Rt),R,w===A?Math.max(qe,w-Rt):Math.max(qe,A-xn)),window.requestAnimationFrame(()=>{v.selectionStart=Math.max(qe,w-Rt),v.selectionEnd=w===A?v.selectionStart:Math.max(v.selectionStart,A-xn)});return}if(w===A){const qe=Z.slice(0,w)+W+Z.slice(A);Dn(qe,w+W.length,R),window.requestAnimationFrame(()=>{v.selectionStart=w+W.length,v.selectionEnd=w+W.length});return}const he=Z.lastIndexOf(`
`,w-1)+1,Ae=Z.slice(he,A).replace(/^/gm,W),rt=Ae.split(`
`).length,Mt=Z.slice(0,he)+Ae+Z.slice(A);Dn(Mt,w+W.length,R,A+rt*W.length),window.requestAnimationFrame(()=>{v.selectionStart=w+W.length,v.selectionEnd=A+rt*W.length})}function Ui(f){if(yn){f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),Di());return}if(be){if(f.key==="ArrowDown"){f.preventDefault(),Je(v=>{if(!v)return v;const w=(v.selected+1)%v.items.length;return Mr(or.current,w),{...v,selected:w}});return}if(f.key==="ArrowUp"){f.preventDefault(),Je(v=>{if(!v)return v;const w=(v.selected-1+v.items.length)%v.items.length;return Mr(or.current,w),{...v,selected:w}});return}if(f.key==="Enter"||f.key==="Tab"){f.preventDefault(),Vr();return}if(f.key==="Escape"){f.preventDefault(),Je(null);return}}if(f.key==="Tab"){f.preventDefault();const v=f.currentTarget,w=v.selectionStart,A=v.selectionEnd,R="    ",W=vt.slice(0,w)+R+vt.slice(A),he=w+R.length;Qe(W),pn(null),Je(null),window.requestAnimationFrame(()=>{v.selectionStart=he,v.selectionEnd=he});return}if(f.key==="ArrowUp"||f.key==="ArrowDown"){if(!(f.key==="ArrowUp"?f.currentTarget.selectionStart===0&&f.currentTarget.selectionEnd===0:f.currentTarget.selectionStart===vt.length&&f.currentTarget.selectionEnd===vt.length)||vr.length===0)return;f.preventDefault();const w=f.key==="ArrowUp"?Nn===null?vr.length-1:Math.max(0,Nn-1):Nn===null||Nn+1>=vr.length?null:Nn+1;pn(w);const A=w===null?"":vr[w]??"";Qe(A),Je(null),it(!0),window.requestAnimationFrame(()=>{const R=An.current;R&&(R.selectionStart=A.length,R.selectionEnd=A.length,qc())});return}f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),Di())}return u.jsxs("div",{className:"screen ide-screen",children:[u.jsx(df,{title:"Pico Kodeværksted",onMenu:()=>a()}),ol?u.jsx("div",{className:"ide-size-gate",role:"dialog","aria-modal":"true","aria-labelledby":"ide-size-title",children:u.jsxs("div",{className:"ide-size-gate-panel",children:[u.jsx("h2",{id:"ide-size-title",children:"Brug en bærbar for at bruge Kodeværkstedet"}),u.jsx("p",{children:"Denne skærm er for lille, så du skal åbne Kodeværkstedet på en bærbar eller en større skærm."})]})}):u.jsxs("div",{className:"ide-layout",children:[u.jsxs("section",{className:"ide-panel ide-files-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Filer"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:Ks,"aria-label":"Ny fil",title:"Ny fil",children:u.jsx(Pt,{name:"plus",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>{var f;return(f=ya.current)==null?void 0:f.click()},"aria-label":"Importer fil",title:"Importer fil",children:u.jsx(Pt,{name:"upload",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>Tt(),disabled:!x&&!Se||P,"aria-label":"Opdater filer",title:"Opdater filer",children:u.jsx(Pt,{name:"refresh",size:20})})]})]}),u.jsx("div",{className:"ide-file-list",children:Ei.length===0?u.jsx("button",{type:"button",disabled:!0,children:"Ingen filer læst"}):Ei.map(f=>{if(f.kind==="separator"){const R=f.id==="pico-files"&&!x&&!Se;return u.jsxs(j.Fragment,{children:[u.jsx("div",{className:`ide-file-separator ${f.id==="browser-files"?"browser-section":""}`,children:u.jsx("span",{children:f.label})}),R&&u.jsx("div",{className:"ide-file-disconnected",role:"status",children:"Ikke forbundet"})]},f.id)}const v=Se&&Pl(f),w=Jt[Zt(f.source,f.path)],A=w!==void 0&&w!==tb(f,ve,Ft);return u.jsxs("div",{className:`ide-file-row ${ne===f.path&&xe===f.source?"active":""} ${v?"protected":""}`,children:[u.jsxs("button",{type:"button",onClick:()=>Ni(f),disabled:v,title:v?"Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her":void 0,children:[u.jsx("span",{children:f.name}),u.jsxs("small",{title:A?"Ikke gemte ændringer":"Ingen ikke gemte ændringer",children:[f.versions.length>0&&u.jsx("em",{className:"ide-file-version-count",title:`${f.versions.length} gemte versioner i historikken`,children:f.versions.length}),u.jsx("i",{className:`ide-file-dirty-dot ${A?"dirty":"clean"}`,"aria-hidden":"true"})]})]}),u.jsx("button",{className:"ide-file-actions",type:"button",onClick:()=>Zs(f),disabled:f.type!=="file"||P||v,"aria-label":`Filvalg for ${f.name}`,title:v?"Holder Bluetooth-forbindelsen i gang og kan ikke ændres her":"Filvalg",children:u.jsx(Pt,{name:"settings",size:16})})]},`${f.source}:${f.path}`)})})]}),u.jsxs("section",{className:"ide-panel ide-status-panel",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"ide-status-head",children:[u.jsx("h2",{children:Se?"Forbundet Pico":"USB udvikling"}),!Se&&u.jsx("span",{className:`ide-usb-status ${Lr.supported?"available":"unavailable"}`,title:Lr.message,"data-tooltip":Lr.message,role:"img","aria-label":Lr.message,tabIndex:0,children:"!"})]}),Se&&u.jsxs("p",{children:[(s==null?void 0:s.deviceName)??"Pico"," er forbundet via Bluetooth."]})]}),!Se&&u.jsxs("div",{className:"ide-actions",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:x?Mc:Ec,disabled:!Lr.supported||D,children:D?"Forbinder...":x?"Afbryd USB":"Forbind USB"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:gl,disabled:Se||P,children:"Download"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:Cc,disabled:!x||P,children:"Nulstil enhed"})]}),Se&&u.jsxs("div",{className:"ide-actions",children:[u.jsxs("button",{className:"btn btn-primary ide-connection-state",type:"button",disabled:!0,children:[u.jsx(Pt,{name:"power",size:22}),"Bluetooth forbundet"]}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:gl,disabled:P,children:"Startprogrammer og biblioteker"})]}),!Se&&u.jsx("div",{className:"ide-runtime",children:u.jsx("div",{className:"ide-mini-actions single",children:u.jsx("button",{className:"btn btn-outline ide-disconnect-btn",type:"button",onClick:()=>Ce(!0),children:"MicroPython"})})})]}),u.jsxs("section",{className:"ide-panel ide-editor-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("div",{className:"ide-editor-title",children:u.jsxs("h2",{children:[Le(ne),u.jsxs("small",{children:[pi," bytes"]})]})}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Ci,disabled:P,children:"Kør"}),Se&&xe==="pico"?u.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>ht("manual"),disabled:P,children:"Genstart"}):u.jsx("button",{className:"btn btn-outline",type:"button",onClick:ro,disabled:!hn&&!(!Yt&&br)&&(!x||!fn),children:"Stop"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Rc,disabled:P||!ne.trim(),children:"Gem"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Ys(),disabled:P||!ne.trim(),children:"Slet"})]})]}),Si(),u.jsxs("div",{className:"ide-editor-wrap",children:[u.jsx("div",{ref:wa,className:"ide-line-numbers","aria-hidden":"true",style:{transform:`translateY(${-_r.top}px)`},children:Array.from({length:bn},(f,v)=>u.jsx("span",{children:v+1},v))}),u.jsx("pre",{ref:fi,className:"ide-highlight","aria-hidden":"true",style:{transform:`translate(${-_r.left}px, ${-_r.top}px)`},children:eb(Z,on)}),u.jsx("textarea",{ref:xr,className:"ide-editor",value:Z,onChange:f=>Dn(f.target.value,f.target.selectionStart,Ur(),f.target.selectionEnd,"typing"),onKeyDown:ra,onKeyUp:f=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(f.key)||Ra(f.currentTarget.value,f.currentTarget.selectionStart)},onClick:f=>{ee(null),Li(f.currentTarget)},onSelect:f=>Li(f.currentTarget),onScroll:f=>{const{scrollTop:v,scrollLeft:w}=f.currentTarget;wa.current&&(wa.current.style.transform=`translateY(${-v}px)`),fi.current&&(fi.current.style.transform=`translate(${-w}px, ${-v}px)`),sl({top:v,left:w}),Ze&&Ra(f.currentTarget.value,f.currentTarget.selectionStart)},readOnly:ka,"aria-busy":ka,spellCheck:!1}),Ze&&u.jsx("div",{ref:kr,className:`ide-autocomplete placement-${Ze.position.placement}`,role:"listbox","aria-label":"Kodeforslag",style:{left:Ze.position.left,top:Ze.position.top,maxHeight:Ze.position.maxHeight},children:(Ze.position.placement==="above"?Ze.items.map((f,v)=>({item:f,index:v})).reverse():Ze.items.map((f,v)=>({item:f,index:v}))).map(({item:f,index:v})=>u.jsx("button",{className:v===Ze.selected?"active":"",type:"button","data-autocomplete-index":v,onMouseDown:w=>{w.preventDefault(),Bi(f)},role:"option","aria-selected":v===Ze.selected,children:f.label},f.label))}),te&&u.jsxs("div",{className:"ide-editor-loading",role:"status","aria-live":"polite",children:[u.jsx("span",{className:"spinner","aria-hidden":"true"}),u.jsxs("strong",{children:["Indlæser ",Le(te),"..."]})]})]})]}),u.jsxs("section",{className:"ide-panel ide-terminal-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Terminal"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${tn?"":"active"}`,type:"button",onClick:()=>yr(f=>!f),"aria-label":tn?"Tekniske fejl er slået fra":"Tekniske fejl er slået til","aria-pressed":!tn,title:tn?"Vis originale tekniske fejl":"Viser originale tekniske fejl",children:"Teknisk"}),u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${$t?"active":""}`,type:"button",onClick:()=>Gn(f=>!f),"aria-pressed":$t,title:$t?"Terminalen ryddes, hver gang du trykker Kør":"Terminalen beholder tekst, når du trykker Kør",children:"Ryd ved Kør"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Uc,disabled:F.length===0,children:"Ryd"})]})]}),u.jsxs("div",{className:"ide-terminal","aria-live":"polite",ref:cl,onScroll:lo,onClick:()=>{var f;return(f=An.current)==null?void 0:f.focus()},children:[F.length===0?u.jsx("div",{className:"term-line",children:"Ingen terminaldata endnu."}):F.map((f,v)=>u.jsx("div",{className:`term-line ${f.variant==="input"?"term-input-echo":`term-${f.level}`}`,children:f.technical&&!tn?f.technical:f.text},`${v}-${f.text}`)),u.jsxs("form",{className:`ide-terminal-command ${_i&&!yn?"locked":""} ${yn?"stdin":""}`,onSubmit:f=>{f.preventDefault(),Di()},children:[u.jsx("span",{"aria-hidden":"true",children:vi}),u.jsx("textarea",{ref:An,value:vt,onChange:f=>{Qe(f.target.value),pn(null),yn?Je(null):Oi(f.target.value,f.target.selectionStart)},onKeyDown:Ui,onKeyUp:f=>{yn||["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(f.key)||Oi(f.currentTarget.value,f.currentTarget.selectionStart)},onClick:()=>Je(null),disabled:zs,placeholder:Us,"aria-label":yn?"Input til kørende Pico-kode":"MicroPython-terminalkommando",title:Us,rows:Math.max(1,vt.split(`
`).length)})]}),be&&u.jsx("div",{ref:or,className:`ide-autocomplete ide-repl-autocomplete placement-${be.position.placement}`,role:"listbox","aria-label":"Terminalforslag",style:{left:be.position.left,top:be.position.top,maxHeight:be.position.maxHeight},children:(be.position.placement==="above"?be.items.map((f,v)=>({item:f,index:v})).reverse():be.items.map((f,v)=>({item:f,index:v}))).map(({item:f,index:v})=>u.jsx("button",{className:v===be.selected?"active":"",type:"button","data-autocomplete-index":v,onMouseDown:w=>{w.preventDefault(),Vr(f)},role:"option","aria-selected":v===be.selected,children:f.label},f.label))})]})]})]}),re&&u.jsx("div",{className:"ide-restart-overlay",role:"alert","aria-live":"assertive",children:u.jsxs("div",{className:"ide-restart-overlay-panel",children:[u.jsx("div",{className:"spinner"}),u.jsx("p",{children:k.label||"Genstarter Pico..."})]})}),u.jsx("input",{ref:ya,type:"file",accept:".py,.txt,.json,.csv",className:"sr-only",onChange:f=>{var v;Oc((v=f.target.files)==null?void 0:v[0]),f.currentTarget.value=""}}),Te&&u.jsx(qt,{title:"Gem fil",onClose:()=>We(!1),children:u.jsxs("div",{className:"ide-save-options",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>void ji(),disabled:!x&&!Se||P,children:"Gem filen på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Ac,children:"Download filen til computer"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Fs,children:"Gem filen i browseren"})]})}),je&&u.jsx(qt,{title:"Startprogrammer og biblioteker",onClose:()=>at(!1),children:u.jsxs("div",{className:"ide-install-list",children:[u.jsx("p",{className:"ide-install-note",children:x||Se?"Vælg et startprogram og de biblioteker dit projekt bruger. Installer lægger filerne på Picoen.":"Du er ikke forbundet til en Pico. Du kan gemme filerne i browseren eller downloade dem til computeren, men de virker først på Picoen, når de er installeret der."}),u.jsxs("div",{className:"ide-install-grid",children:[ao("Startprogrammer (main.py)","Starter automatisk på Picoen.",Q.filter(f=>f.kind==="program")),ao("Biblioteker","Ekstra Python-filer som dine programmer kan importere.",Q.filter(f=>f.kind==="library"))]}),u.jsxs("div",{className:"ide-install-actions",children:[(x||Se)&&u.jsx("button",{className:"btn btn-primary",type:"button",onClick:ta,disabled:P,children:"Installer på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:to,disabled:P,children:"Download til computer"}),u.jsx("button",{className:x||Se?"btn btn-outline":"btn btn-primary",type:"button",onClick:ja,disabled:P,children:"Gem i browseren"})]})]})}),Pn&&u.jsx(qt,{title:Pn==="saved"?"main.py er gemt":"Genstart Pico",onClose:()=>ht(null),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:Pn==="saved"?"Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter.":"Picoen genstarter og kører main.py forfra. Appen forsøger automatisk at genforbinde bagefter."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>void $s("control"),disabled:P,children:"Genstart og åbn kontrolpanel"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void $s("ide"),disabled:P,children:"Genstart og bliv i Kodeværksted"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>ht(null),disabled:P,children:"Senere"})]})}),ie&&u.jsx(qt,{title:"Installer MicroPython",onClose:()=>Ce(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:"Hvis Picoen er helt frisk, skal MicroPython først lægges på den."}),u.jsxs("ol",{className:"micropython-steps",children:[u.jsx("li",{children:"Hold BOOTSEL-knappen nede."}),u.jsx("li",{children:"Sæt Picoen i USB, og slip derefter BOOTSEL."}),u.jsx("li",{children:"Vælg Pico-model og MicroPython-version herunder, og download UF2-filen."}),u.jsxs("li",{children:["Kopier UF2-filen til drevet ",u.jsx("strong",{children:"RPI-RP2"})]})]}),u.jsxs("div",{className:"micropython-selects",children:[u.jsx("label",{htmlFor:"micropython-board",children:"Pico-model"}),u.jsx("select",{id:"micropython-board",value:Me,onChange:f=>De(f.target.value),children:gi.map(f=>u.jsx("option",{value:f,children:f},f))}),u.jsx("label",{htmlFor:"micropython-version",children:"MicroPython-version"}),u.jsx("select",{id:"micropython-version",value:(Br==null?void 0:Br.version)??wt,onChange:f=>sn(f.target.value),children:Xn.map(f=>u.jsxs("option",{value:f.version,children:[f.version," (",f.date,")"]},`${f.board}:${f.version}:${f.date}`))})]}),Br&&u.jsx("a",{className:"btn btn-primary btn-block",href:Br.url,download:Br.fileName,children:"Download UF2"}),u.jsx("a",{className:"btn btn-outline btn-block",href:"https://www.raspberrypi.com/documentation/microcontrollers/micropython.html",target:"_blank",rel:"noreferrer",children:"Se vejledning"})]})}),Re&&u.jsx(qt,{title:"Ny Python-fil",onClose:()=>_e(!1),children:u.jsxs("form",{className:"ide-new-file-form",onSubmit:f=>{f.preventDefault(),Qs()},children:[u.jsx("label",{htmlFor:"new-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"new-pico-file",value:T,onChange:f=>G(f.target.value),autoFocus:!0,placeholder:"test"}),u.jsx("span",{children:".py"})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen tilføjer .py automatisk og opretter filen i ",Bs,"."]}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:!hh(T),children:"Opret"})]})}),ce&&u.jsx(qt,{title:Le(ce.path),onClose:()=>fe(null),children:u.jsxs("div",{className:"ide-file-action-modal",children:[u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:"Placering"}),u.jsx("strong",{children:ce.source==="pico"?"Pico":"Browser"})]}),u.jsxs("form",{className:"ide-file-rename-form",onSubmit:f=>{f.preventDefault(),zc()},children:[u.jsx("label",{htmlFor:"rename-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"rename-pico-file",value:le,onChange:f=>ae(f.target.value),placeholder:"min_kode"}),u.jsxs("span",{children:[".",Es(ce.path)]})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen beholder filendelsen .",Es(ce.path)," automatisk."]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!Pd(le,Es(ce.path))||Pd(le,Es(ce.path))===ce.path||P,children:"Gem navn"})]}),u.jsxs("div",{className:"ide-file-action-buttons",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void Bc(),disabled:P,children:"Dupliker"}),u.jsx("button",{className:"btn btn-outline btn-danger btn-block",type:"button",onClick:()=>Ys(ce),disabled:P,children:"Slet"})]}),u.jsxs("section",{className:"ide-version-history",children:[u.jsx("h4",{children:"Versionshistorik"}),ce.versions.length===0?u.jsx("p",{children:"Versionshistorik: 0 gemte versioner."}):u.jsx("div",{className:"ide-version-list",children:ce.versions.map(f=>u.jsxs("div",{className:"ide-version-row",children:[u.jsx("span",{children:Le(f.path)}),u.jsx("small",{children:f.size!==void 0?`${f.size} bytes`:"Gemt på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>void Js(f),disabled:P,children:"Gendan"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>hl(f),disabled:P,children:"Slet"})]},f.path))})]})]})})]})}function hh(a){var o;const l=(o=a.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:o.replace(/\.py$/i,"").replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"");return l?`/${l}.py`:""}function Vv(a){const l=a.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop(),o=l==null?void 0:l.match(/^(.+)\.(py|txt|json|csv)$/i);if(!o)return"";const s=ap(o[1]);return s?`/${s}.${o[2].toLowerCase()}`:""}function Pd(a,l="py"){const o=a.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop();if(!o)return"";const s=o.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);if(!s)return"";const d=ap(s[1]),h=l.replace(/^\./,"").toLowerCase(),g=(s[2]??(h||"py")).toLowerCase();return d?`/${d}.${g}`:""}function Iv(a){return Le(a).replace(/\.(py|txt|json|csv)$/i,"")}function ap(a){return a.replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"")}function Es(a){var s;const l=Le(a).match(/\.([a-z0-9]+)$/i),o=(s=l==null?void 0:l[1])==null?void 0:s.toLowerCase();return o&&["py","txt","json","csv"].includes(o)?o:"py"}function Il(a){return a.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}function ph(){return li.map(a=>({...a,status:"unknown",detail:"Kan gemmes uden Pico. Forbind en Pico for at installere."}))}function gh(a){const l={};return a.forEach(o=>{l[o.id]=!1}),l}function Le(a){return a.split("/").filter(Boolean).pop()??a}function oc(a){return a.replace(/\\/g,"/").toLowerCase()==="/main.py"}function _h(a){const l=a.userAgent||"",o=a.platform||"",s=a.maxTouchPoints||0,d=/Android.*Mobile|iPhone|iPod|Windows Phone|Mobile Safari/i.test(l),h=/Macintosh/i.test(o)&&s>1;return d&&!h}function Pv(a){return a instanceof DOMException&&a.name==="AbortError"}function Fv(a){return/Traceback \(most recent call last\):/.test(a)||/\b(?:SyntaxError|NameError|TypeError|ValueError|IndentationError|ImportError|ModuleNotFoundError|ZeroDivisionError|IndexError|KeyError|AttributeError):/.test(a)}function Pl(a){return Gv(a)}function Gv(a){return a.path.replace(/\\/g,"/").toLowerCase()==="/picobluetooth.py"}const ef=[...["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"].map(a=>({label:a,insert:`${a}${["for","if","while","def","class","elif","else","try","except","finally","with"].includes(a)?" ":""}`})),...["abs","all","any","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","exec","filter","float","getattr","hasattr","hash","hex","id","input","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","open","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","zip"].map(a=>({label:`${a}()`,insert:`${a}()`})),{label:"for i in range():",insert:"for i in range():"},{label:"while True:",insert:"while True:"},{label:"if True:",insert:"if True:"},{label:"time",insert:"time"},{label:"time.",insert:"time."},{label:"time.sleep",insert:"time.sleep"},{label:"time.sleep()",insert:"time.sleep()"},{label:"time.sleep_ms()",insert:"time.sleep_ms()"},{label:"time.ticks_ms()",insert:"time.ticks_ms()"},{label:"time.ticks_diff()",insert:"time.ticks_diff()"},{label:"time.sleep_us()",insert:"time.sleep_us()"},{label:"time.ticks_us()",insert:"time.ticks_us()"},{label:"machine",insert:"machine"},{label:"machine.",insert:"machine."},{label:"machine.Pin",insert:"machine.Pin"},{label:"machine.PWM",insert:"machine.PWM"},{label:"machine.ADC",insert:"machine.ADC"},{label:"machine.I2C",insert:"machine.I2C"},{label:"machine.SPI",insert:"machine.SPI"},{label:"machine.Timer",insert:"machine.Timer"},{label:"machine.UART",insert:"machine.UART"},{label:"machine.reset()",insert:"machine.reset()"},{label:"machine.freq()",insert:"machine.freq()"},{label:"Pin()",insert:"Pin()"},{label:"PWM()",insert:"PWM()"},{label:"ADC()",insert:"ADC()"},{label:"I2C()",insert:"I2C()"},{label:"SPI()",insert:"SPI()"},{label:"Timer()",insert:"Timer()"},{label:"UART()",insert:"UART()"},{label:"Pin.OUT",insert:"Pin.OUT"},{label:"Pin.IN",insert:"Pin.IN"},{label:"Pin.PULL_UP",insert:"Pin.PULL_UP"},{label:"Pin.PULL_DOWN",insert:"Pin.PULL_DOWN"},{label:"Pin.IRQ_FALLING",insert:"Pin.IRQ_FALLING"},{label:"Pin.IRQ_RISING",insert:"Pin.IRQ_RISING"},{label:"import time",insert:"import time"},{label:"import utime as time",insert:"import utime as time"},{label:"import machine",insert:"import machine"},{label:"import random",insert:"import random"},{label:"import os",insert:"import os"},{label:"import sys",insert:"import sys"},{label:"from machine import Pin",insert:"from machine import Pin"},{label:"from machine import Pin, PWM",insert:"from machine import Pin, PWM"},{label:"from machine import Pin, PWM, ADC",insert:"from machine import Pin, PWM, ADC"},{label:"PicoBluetooth",insert:"PicoBluetooth"},{label:"PicoRobotics",insert:"PicoRobotics"},{label:"NeoPixel",insert:"NeoPixel"},{label:"HCSR04",insert:"HCSR04"},{label:"ble.send_toggle_state()",insert:"ble.send_toggle_state()"},{label:"ble.send_slider_state()",insert:"ble.send_slider_state()"},{label:"ble.send_radar()",insert:"ble.send_radar()"},{label:"ble.send_text()",insert:"ble.send_text()"},{label:"ble.send_plot()",insert:"ble.send_plot()"},{label:"on_button(name, is_down):",insert:"on_button(name, is_down):"},{label:"on_slider(name, value):",insert:"on_slider(name, value):"},{label:"on_toggle(name, value):",insert:"on_toggle(name, value):"},{label:"on_connect():",insert:"on_connect():"},{label:"on_disconnect():",insert:"on_disconnect():"},{label:"ValueError",insert:"ValueError"},{label:"TypeError",insert:"TypeError"},{label:"OSError",insert:"OSError"},{label:"Exception",insert:"Exception"}];function vh(a,l,o){const s=tf(a,l);if(!s)return[];const d=$v(a,s.start,l),h=s.query.toLowerCase(),g=d.beforeToken.toLowerCase(),m=d.linePrefix.toLowerCase(),_=o?[...ef,...Xv(a)]:ef;return Kv(_).filter(k=>{const x=k.label.toLowerCase(),E=k.insert.toLowerCase();return E===h||x===h||ip(k,s.query)?!1:d.importLine?Yv(k,d)?x.startsWith(m)||E.startsWith(m)||x.startsWith(h)||E.startsWith(h):!1:g.endsWith(".")&&!E.includes(".")?!1:!!(E.startsWith(h)||x.startsWith(h))})}function $v(a,l,o){const s=a.lastIndexOf(`
`,l-1)+1,d=a.slice(s,o),h=a.slice(s,l),g=/^\s*(?:import|from)\s+[\w.,\s]*$/i.test(d),m=/^\s*from\s+\w+(?:\.\w+)*\s+import\s+/i.test(d);return{linePrefix:d,beforeToken:h,importLine:g,fromImportLine:m}}function Yv(a,l){return l.fromImportLine?!a.insert.includes("(")&&!a.insert.startsWith("import "):a.insert.startsWith("import ")||a.insert.startsWith("from ")?!0:/^[A-Za-z_][A-Za-z0-9_]*$/.test(a.insert)}function Xv(a){const l=new Set,o=[/\bdef\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/g,/\bclass\s+([A-Za-z_][A-Za-z0-9_]*)\b/g,/(?:^|[^\w.])([A-Za-z_][A-Za-z0-9_]*)\s*=/g,/\bfor\s+([A-Za-z_][A-Za-z0-9_]*)\s+in\b/g,/\b([A-Za-z_][A-Za-z0-9_]*)\.([A-Za-z_][A-Za-z0-9_]*)\s*\(/g];for(const s of o)for(const d of a.matchAll(s))d[1]&&l.add(d[1]),d[2]&&l.add(d[2]);return[...l].filter(s=>s.length>1&&!Qv.has(s)).sort((s,d)=>s.localeCompare(d,"da")).map(s=>({label:s,insert:s}))}function Kv(a){const l=new Set,o=[];for(const s of a){const d=s.insert.toLowerCase();l.has(d)||(l.add(d),o.push(s))}return o}const Qv=new Set(ef.map(a=>a.insert.replace(/[().: ]+$/g,"")));function tf(a,l){const s=a.slice(0,l).match(/[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_.]*$/);return!s||s.index===void 0?null:{query:s[0],start:s.index}}function bh(a,l){const o=a.lastIndexOf(`
`,Math.max(0,l-1))+1;let s=null,d=null,h=!1;for(let g=0;g<l;g+=1){const m=a[g],_=a.slice(g,g+3);if(d){_===d.repeat(3)&&(d=null,g+=2);continue}if(s){if(h){h=!1;continue}if(m==="\\"){h=!0;continue}m===s&&(s=null),m===`
`&&(s=null);continue}if(m==="#"){const b=a.indexOf(`
`,g),k=b===-1?a.length:b;if(l<=k&&g>=o)return!0;g=k;continue}if(_==='"""'||_==="'''"){d=m,g+=2;continue}(m==='"'||m==="'")&&(s=m)}return s!==null||d!==null}function ip(a,l){const o=a.insert.trim();return!/[().]/.test(o)&&o.toLowerCase()===l.toLowerCase()}function Wv(a){return/^[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_]*$/.test(a)}function yh(a,l,o){if(!a)return null;const s=a.closest(".ide-terminal")??a.parentElement;if(!s)return null;const d=window.getComputedStyle(a),h=document.createElement("div"),g=document.createElement("span"),m=s.getBoundingClientRect(),_=a.getBoundingClientRect();h.style.position="absolute",h.style.visibility="hidden",h.style.pointerEvents="none",h.style.whiteSpace="pre-wrap",h.style.overflowWrap="break-word",h.style.wordBreak=d.wordBreak,h.style.boxSizing=d.boxSizing,h.style.width=`${a.getBoundingClientRect().width}px`,h.style.padding=d.padding,h.style.border=d.border,h.style.font=d.font,h.style.lineHeight=d.lineHeight,h.style.letterSpacing=d.letterSpacing,h.style.tabSize=d.tabSize,h.style.fontVariantLigatures=d.fontVariantLigatures,h.style.scrollbarGutter=d.scrollbarGutter,h.style.left=`${_.left-m.left-a.scrollLeft}px`,h.style.top=`${_.top-m.top-a.scrollTop}px`,h.textContent=a.value.slice(0,l),g.textContent=a.value.slice(l,l+1)||" ",h.appendChild(g),s.appendChild(h);const b=g.getBoundingClientRect();h.remove();const k=34,x=14,E=Math.min(210,Math.max(k+x,o*k+x)),D=Zv(b.left-m.left,8,Math.max(8,s.clientWidth-296)),O=b.top-m.top+s.scrollTop,F=b.bottom-m.top+s.scrollTop+10,H=s.scrollTop+s.clientHeight-F-8,P=O-s.scrollTop-8,B=s.scrollTop+s.clientHeight,re=H>=Math.min(E,k*2)||H>=P?"below":"above",q=Math.max(k+x,Math.min(E,re==="below"?H:P)),oe=re==="below"?Math.min(F,B-q-8):Math.max(s.scrollTop+8,O-q-8);return{left:D,top:oe,maxHeight:q,placement:re}}function Zv(a,l,o){return Math.max(l,Math.min(o,a))}function Jv(a){const l=[];let o=null,s=null,d=!1,h=0,g=0;const m=(_,b)=>{_>h&&l.push({text:a.slice(h,_),isTriple:b}),h=_};for(;g<a.length;){const _=a[g],b=a.slice(g,g+3);if(s){if(b===s.repeat(3)){g+=3,s=null,m(g,!0);continue}g+=1;continue}if(o){d?d=!1:_==="\\"?d=!0:(_===o||_===`
`)&&(o=null),g+=1;continue}if(_==="#"){const k=a.indexOf(`
`,g);g=k===-1?a.length:k;continue}if(b==='"""'||b==="'''"){m(g,!1),s=_,g+=3;continue}(_==='"'||_==="'")&&(o=_),g+=1}return m(a.length,s!==null),l}function eb(a,l=""){const o=/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,s=/(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm,d=[];let h=0;function g(m,_){m.split(/(\r?\n)/).forEach(b=>{if(b===`
`||b===`\r
`){d.push(u.jsx("br",{},`br-${h++}`));return}b!==""&&_(b,`part-${h++}`)})}return Jv(a).forEach(m=>{if(m.isTriple){g(m.text,(_,b)=>{d.push(...Ns(_,l,b,"tok-string"))});return}g(m.text,(_,b)=>{let k=0;[..._.matchAll(s)].forEach((E,D)=>{const O=E.index??0;O>k&&d.push(...wh(_.slice(k,O),o,`${b}-${D}-plain`,l));const F=E[0],H=F.startsWith("#")?"tok-comment":F.startsWith('"')||F.startsWith("'")?"tok-string":/^\d/.test(F)?"tok-number":"tok-builtin";d.push(...Ns(F,l,`${b}-${D}-token`,H)),k=O+F.length}),k<_.length&&d.push(...wh(_.slice(k),o,`${b}-tail`,l))})}),d.length?d:" "}function wh(a,l,o,s=""){const d=[];let h=0;const g=new RegExp(l.source,"g");return[...a.matchAll(g)].forEach((m,_)=>{const b=m.index??0;b>h&&d.push(...Ns(a.slice(h,b),s,`${o}-${_}-plain`)),d.push(...Ns(m[0],s,`${o}-${_}-keyword`,"tok-keyword")),h=b+m[0].length}),h<a.length&&d.push(...Ns(a.slice(h),s,`${o}-plain-end`)),d}function Ns(a,l,o,s=""){if(!l)return[u.jsx("span",{className:s||void 0,children:a},o)];const d=[],h=l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),g=new RegExp(`(?<![A-Za-zÆØÅæøå0-9_])(${h})(?![A-Za-zÆØÅæøå0-9_])`,"g");let m=0;return[...a.matchAll(g)].forEach((_,b)=>{const k=_.index??0;k>m&&d.push(u.jsx("span",{className:s||void 0,children:a.slice(m,k)},`${o}-${b}-before`)),d.push(u.jsx("span",{className:`${s} tok-match`.trim(),children:_[0]},`${o}-${b}-match`)),m=k+_[0].length}),m<a.length&&d.push(u.jsx("span",{className:s||void 0,children:a.slice(m)},`${o}-after`)),d.length?d:[u.jsx("span",{className:s||void 0,children:a},o)]}function cc(a){return a.length>0?a:[{path:Jd,content:lp,uploaded:!1,updatedAt:Date.now()}]}function Fd(a,l,o,s){const d=a.filter(h=>h.path!==l);return[{path:l,content:o,uploaded:s,updatedAt:Date.now()},...d].sort((h,g)=>g.updatedAt-h.updatedAt)}function hc(a){return a.map(l=>({name:Le(l.path),path:l.path,type:"file",size:new Blob([l.content]).size}))}function tb(a,l,o){var s;return a.source==="pico"?o[a.path]:(s=l.find(d=>d.path===a.path))==null?void 0:s.content}function pc(a){const l=a.replace(/\\/g,"/"),o=l.lastIndexOf("/"),s=o>=0?l.slice(0,o+1):"",h=(o>=0?l.slice(o+1):l).match(/^(.+)_backup(\d+)(\.[^.]+)$/i);return h?{originalPath:`${s}${h[1]}${h[3]}`,index:parseInt(h[2],10)}:null}function Fl(a){return pc(a)!==null}function ai(a){const l=new Map;for(const o of a){const s=pc(o.path);if(!s)continue;const d=l.get(s.originalPath)??[];d.push(o),l.set(s.originalPath,d)}for(const o of l.values())o.sort((s,d)=>{var h,g;return(((h=pc(d.path))==null?void 0:h.index)??0)-(((g=pc(s.path))==null?void 0:g.index)??0)});return l}function nb(a,l){const o=a.replace(/\\/g,"/"),s=o.lastIndexOf("/"),d=s>=0?o.slice(0,s+1):"/",h=s>=0?o.slice(s+1):o.replace(/^\/+/,""),g=h.lastIndexOf("."),m=g>0?h.slice(0,g):h,_=g>0?h.slice(g):"",b=new Set(l.map(k=>k.path.toLowerCase()));for(let k=1;k<1e3;k+=1){const x=`${d}${m}_backup${k}${_}`;if(!b.has(x.toLowerCase()))return x}return`${d}${m}_backup${Date.now()}${_}`}function rb(a,l){const o=a.replace(/\\/g,"/"),s=o.lastIndexOf("/"),d=s>=0?o.slice(0,s+1):"/",h=s>=0?o.slice(s+1):o.replace(/^\/+/,""),g=h.lastIndexOf("."),m=g>0?h.slice(0,g):h,_=g>0?h.slice(g):"";for(let b=1;b<1e3;b+=1){const k=b===1?"_kopi":`_kopi${b}`,x=`${d}${m}${k}${_}`;if(!l(x)&&!Fl(x))return x}return`${d}${m}_kopi${Date.now()}${_}`}function lb(a){return a==="ok"?"Nyeste":a==="outdated"?"Opdater":a==="missing"?"Mangler":"Ikke tjekket"}function ab(a,l,o,s){const d=new Map,h=ai(a),g=ai(hc(l));for(const x of a)Fl(x.path)||d.set(Zt("pico",x.path),{kind:"file",name:x.name,path:x.path,type:x.type,size:x.size,source:"pico",uploaded:!0,versions:h.get(x.path)??[]});for(const x of l)Fl(x.path)||d.set(Zt("local",x.path),{kind:"file",name:Le(x.path),path:x.path,type:"file",source:"local",uploaded:!1,versions:g.get(x.path)??[]});for(const x of Object.keys(o)){const[E,...D]=x.split(":"),O=D.join(":");if(E!=="local"&&E!=="pico"||!O)continue;const F=d.get(x);if(F){d.set(x,F);continue}d.set(x,{kind:"file",name:Le(O),path:O,type:"file",source:E,uploaded:!1,versions:E==="pico"?h.get(O)??[]:g.get(O)??[]})}const m=[...d.values()].sort(sb),_=m.filter(x=>x.source==="pico"),b=m.filter(x=>x.source==="local"),k=[];return _.length>0||s?k.push({kind:"separator",id:"pico-files",label:s?"Pico":"Microcontroller"},..._):k.push({kind:"separator",id:"pico-files",label:"Microcontroller"}),b.length>0&&k.push({kind:"separator",id:"browser-files",label:"Browser"},...b),k}const ib=new Map([["main.py",0],["devicesettings.txt",1],["layout.txt",2],["picobluetooth.py",3],["picofly.py",4],["picorobotics.py",5],["neopixel.py",6],["hcsr04.py",7]]);function sb(a,l){const o=xh(a.path),s=xh(l.path);return o===null&&s===null?a.name.localeCompare(l.name,"da"):o===null?-1:s===null?1:o-s}function xh(a){var o;const l=(o=a.replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:o.toLowerCase();return l?ib.get(l)??null:null}function kh(a,l,o){if(!(l in a))return a;const s={...a,[o]:a[l]};return delete s[l],s}function ob(a,l,o,s){const d=`${l}:${o}`;if(!(d in a))return a;const h={...a,[`${l}:${s}`]:a[d]};return delete h[d],h}function cb({open:a}){const l=se(B=>B.screen),o=se(B=>B.active),s=se(B=>B.toggleSideMenu),d=se(B=>B.toggleDebugger),h=se(B=>B.setEditMode),g=se(B=>B.openMenuPage),m=se(B=>B.disconnect),_=se(B=>B.openPicoIde),b=se(B=>B.closePicoIde),k=se(B=>B.picoIdeOrigin),x=l==="dashboard",E=l==="control",D=l==="ide",O=E&&!!(o!=null&&o.canEdit),F=!E||!!(o!=null&&o.isOwnedByMe)||!!(o!=null&&o.canEditCode),H=k==="control",P=k==="control"?"Pico Kontrol Panel":"Hovedmenu";return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:`scrim ${a?"open":"closing"}`,onClick:()=>s(!1)}),u.jsxs("nav",{className:`sidemenu sidemenu-${l} ${a?"open":"closing"}`,"aria-label":"Sidemenu",children:[x&&u.jsxs(u.Fragment,{children:[u.jsx(Vn,{label:"Bruger",icon:"user",onClick:()=>g("user-settings")}),u.jsx(Vn,{label:"Indstillinger",icon:"settings",onClick:()=>g("application-settings")}),u.jsx(Vn,{label:"Kodeværksted",icon:"picoIde",onClick:_,disabled:!F}),u.jsx(Gd,{}),u.jsx(Vn,{label:"Om appen",icon:"info",onClick:()=>g("application-about")}),u.jsx(Vn,{label:"Hjælp",icon:"help",onClick:()=>g("application-help")}),u.jsx(Vn,{label:"Fejlfinding",icon:"debugger",onClick:()=>d(!0)})]}),E&&u.jsxs(u.Fragment,{children:[u.jsx(Vn,{label:"Indstillinger",icon:"settings",onClick:()=>g("device-settings")}),u.jsx(Vn,{label:"Rediger",icon:"edit",onClick:()=>h(!0),disabled:!O}),u.jsx(Vn,{label:"Kodeværksted",icon:"picoIde",onClick:_,disabled:!F}),u.jsx(Gd,{}),u.jsx(Vn,{label:"Hjælp",icon:"help",onClick:()=>g("device-help")}),u.jsx(Vn,{label:"Fejlfinding",icon:"debugger",onClick:()=>d(!0)})]}),D&&u.jsxs(u.Fragment,{children:[u.jsx(Vn,{label:P,icon:"back",onClick:b}),u.jsx(Gd,{})]}),u.jsx("div",{className:"spacer"}),(E||D&&H)&&u.jsx(Vn,{label:"Forlad",icon:"exit",onClick:()=>m()})]})]})}function Vn({label:a,icon:l,disabled:o,onClick:s}){return u.jsxs("button",{className:"iconbtn",type:"button",onClick:s,disabled:o,"aria-label":a,children:[u.jsx(Pt,{name:l}),u.jsx("span",{children:a})]})}function Gd(){return u.jsxs("a",{className:"iconbtn sidemenu-link",href:"https://www.teknologiskolen.dk/",target:"_blank",rel:"noreferrer","aria-label":"Teknologiskolen",children:[u.jsx("img",{src:xg,alt:""}),u.jsx("span",{children:"Teknologiskolen"})]})}const ub={error:"term-error",success:"term-success",warning:"term-warning",info:""},Sh={error:"[FEJL] ",success:"[SUCCES] ",warning:"[ADVARSEL] ",info:""};function db(){const a=new Date,l=o=>String(o).padStart(2,"0");return`${l(a.getDate())}-${l(a.getMonth()+1)}-${a.getFullYear()}-${l(a.getHours())}-${l(a.getMinutes())}`}function fb(){const a=se(d=>d.logs),l=se(d=>d.clearLogs),o=se(d=>d.toggleDebugger);function s(){const d=[...a].reverse().map(_=>`${_.time} ${Sh[_.level]}${_.message}`).join(`
`),h=new Blob([d],{type:"text/plain"}),g=URL.createObjectURL(h),m=document.createElement("a");m.href=g,m.download=`${db()}.txt`,m.click(),URL.revokeObjectURL(g)}return u.jsxs(qt,{title:"Fejlfinding",onClose:()=>o(!1),closeVariant:"circle",children:[u.jsx("div",{className:"terminal",children:a.length===0?u.jsx("div",{className:"term-line",children:"Ingen log endnu."}):a.map((d,h)=>u.jsxs("div",{className:`term-line ${ub[d.level]}`,children:[d.time," ",Sh[d.level],d.message]},`${d.time}-${h}`))}),u.jsxs("div",{className:"row",style:{marginTop:14},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:l,children:"Ryd"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:s,children:"Gem logfil"})]})]})}const sp=4,ir=sp*4+17,Eh=80,mb=20,hb=30660;function pb(a){const l=new TextEncoder().encode(a);if(l.length>76)throw new Error("QR-koden er for lang.");const o=Th(!1),s=Th(!1);gb(o,s);const d=vb(l),h=wb(d,mb);return bb(o,s,[...d,...h]),yb(o,s),o}function Th(a){return Array.from({length:ir},()=>Array.from({length:ir},()=>a))}function ar(a,l,o,s,d,h=!0){a[s][o]=d,h&&(l[s][o]=!0)}function gb(a,l){$d(a,l,0,0),$d(a,l,ir-7,0),$d(a,l,0,ir-7);for(let o=0;o<ir;o+=1)l[6][o]||ar(a,l,o,6,o%2===0),l[o][6]||ar(a,l,6,o,o%2===0);_b(a,l,26,26),ar(a,l,8,sp*4+9,!0)}function $d(a,l,o,s){for(let d=-1;d<=7;d+=1)for(let h=-1;h<=7;h+=1){const g=o+h,m=s+d;if(g<0||m<0||g>=ir||m>=ir)continue;const _=h>=0&&h<=6&&d>=0&&d<=6&&(h===0||h===6||d===0||d===6||h>=2&&h<=4&&d>=2&&d<=4);ar(a,l,g,m,_)}}function _b(a,l,o,s){for(let d=-2;d<=2;d+=1)for(let h=-2;h<=2;h+=1)l[s+d][o+h]||ar(a,l,o+h,s+d,Math.max(Math.abs(h),Math.abs(d))!==1)}function vb(a){const l=[];uc(l,4,4),uc(l,a.length,8);for(const s of a)uc(l,s,8);for(uc(l,0,Math.min(4,Eh*8-l.length));l.length%8!==0;)l.push(0);const o=[];for(let s=0;s<l.length;s+=8)o.push(l.slice(s,s+8).reduce((d,h)=>d<<1|h,0));for(let s=236;o.length<Eh;s=s===236?17:236)o.push(s);return o}function uc(a,l,o){for(let s=o-1;s>=0;s-=1)a.push(l>>>s&1)}function bb(a,l,o){const s=o.flatMap(g=>Array.from({length:8},(m,_)=>g>>>7-_&1));let d=0,h=!0;for(let g=ir-1;g>=1;g-=2){g===6&&(g-=1);for(let m=0;m<ir;m+=1){const _=h?ir-1-m:m;for(let b=0;b<2;b+=1){const k=g-b;if(l[_][k])continue;const x=d<s.length?s[d]===1:!1;a[_][k]=x!==((k+_)%2===0),d+=1}}h=!h}}function yb(a,l){const o=s=>(hb>>>s&1)!==0;for(let s=0;s<=5;s+=1)ar(a,l,8,s,o(s));ar(a,l,8,7,o(6)),ar(a,l,8,8,o(7)),ar(a,l,7,8,o(8));for(let s=9;s<15;s+=1)ar(a,l,14-s,8,o(s));for(let s=0;s<8;s+=1)ar(a,l,ir-1-s,8,o(s));for(let s=8;s<15;s+=1)ar(a,l,8,ir-15+s,o(s))}const Rs=new Array(512),nf=new Array(256);let Mh=!1;function op(){if(Mh)return;let a=1;for(let l=0;l<255;l+=1)Rs[l]=a,nf[a]=l,a<<=1,a&256&&(a^=285);for(let l=255;l<512;l+=1)Rs[l]=Rs[l-255];Mh=!0}function cp(a,l){return a===0||l===0?0:Rs[nf[a]+nf[l]]}function wb(a,l){op();const o=xb(l),s=Array.from({length:l},()=>0);for(const d of a){const h=d^s.shift();s.push(0);for(let g=0;g<l;g+=1)s[g]^=cp(o[g],h)}return s}function xb(a){op();let l=[1];for(let o=0;o<a;o+=1){const s=Array.from({length:l.length+1},()=>0);for(let d=0;d<l.length;d+=1)s[d]^=cp(l[d],Rs[o]),s[d+1]^=l[d];l=s}return l.slice(1)}function kb(){const a=se(je=>je.menuPage),l=se(je=>je.closeMenuPage),o=se(je=>je.user),s=se(je=>je.active),d=se(je=>je.layout),h=se(je=>je.savedDevices),g=se(je=>je.updateUsername),m=se(je=>je.createOwnerPairingCode),_=se(je=>je.applyOwnerPairingCode),b=se(je=>je.clearSavedDevices),k=se(je=>je.resetApplicationData),x=se(je=>je.saveDeviceSettings),E=se(je=>je.setEditMode),D=se(je=>je.askConfirm),[O,F]=j.useState((o==null?void 0:o.username)??""),[H,P]=j.useState(!1),[B,re]=j.useState(""),[q,oe]=j.useState(""),[ge,te]=j.useState(!1),[pe,ve]=j.useState(""),Be=j.useRef(null),[ne,Ie]=j.useState((s==null?void 0:s.icon)??Gl),[xe,$e]=j.useState(!1),[Z,N]=j.useState((s==null?void 0:s.canOthersConnect)??!1),[Q,de]=j.useState((s==null?void 0:s.canOthersEdit)??!1),[Re,_e]=j.useState((s==null?void 0:s.canOthersEditCode)??!1),[T,G]=j.useState((s==null?void 0:s.gridCols)??11),[le,ae]=j.useState((s==null?void 0:s.gridRows)??31),[ce,fe]=j.useState(!1);j.useEffect(()=>{a==="user-settings"&&(F((o==null?void 0:o.username)??""),oe(""),ve(""),te(!1))},[a,o==null?void 0:o.username]),j.useEffect(()=>{a==="device-settings"&&s&&(Ie(s.icon),N(s.canOthersConnect),de(s.canOthersEdit),_e(s.canOthersEditCode),G(s.gridCols),ae(s.gridRows))},[s,a]),j.useEffect(()=>{if(!ge)return;let je=!1,at=null,V=0;async function J(){var Ce;const ie=window.BarcodeDetector;if(!ie||!((Ce=navigator.mediaDevices)!=null&&Ce.getUserMedia)){ve("Denne browser kan ikke scanne QR-koder. Skriv ejerkoden i stedet."),te(!1);return}try{at=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const Pe=Be.current;if(!Pe)return;Pe.srcObject=at,await Pe.play();const Ve=new ie({formats:["qr_code"]}),Me=async()=>{var De;if(!je){try{const sn=(De=(await Ve.detect(Pe)).find(Pn=>Pn.rawValue))==null?void 0:De.rawValue;if(sn){oe(sn),_(sn)&&P(!1),te(!1);return}}catch{}V=window.requestAnimationFrame(Me)}};V=window.requestAnimationFrame(Me)}catch{ve("Kameraet kunne ikke åbnes. Skriv ejerkoden i stedet."),te(!1)}}return J(),()=>{je=!0,V&&window.cancelAnimationFrame(V),at==null||at.getTracks().forEach(ie=>ie.stop())}},[_,ge]);const Te=(je,at)=>Number.isFinite(je)?Math.max(si,Math.min(oi,Math.round(je))):at,We=(o==null?void 0:o.username)??"",ze=O.trim(),me=ze.length>0&&ze!==We;if(!a)return null;if(a==="user-settings"){let je=function(){const J=m();J&&(re(J),oe(""),P(!0))},at=function(){_(q)&&(oe(""),P(!1))};async function V(){var J;try{await((J=navigator.clipboard)==null?void 0:J.writeText(B))}catch{}}return u.jsxs(u.Fragment,{children:[u.jsx(qt,{title:"Brugerindstillinger",onClose:l,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(gr,{label:"GUID",value:(o==null?void 0:o.userID)??"Ukendt"}),u.jsxs("div",{className:`field ${O.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-username",value:O,onChange:J=>F(J.target.value),maxLength:24,autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>g(O),disabled:!me,children:"Gem nyt brugernavn"}),u.jsx("div",{className:"notice",children:"Ejerkode bruges, hvis den samme person skal forbinde fra flere browsere eller telefoner."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:je,children:"Ejerkode"}),u.jsx("button",{className:"btn btn-outline btn-block btn-danger",type:"button",onClick:()=>D({title:"Start forfra",message:"Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.",confirmLabel:"Slet alt",onConfirm:()=>{k()}}),children:"Slet brugerdata"})]})}),H&&u.jsx(qt,{title:"Del ejerkode",onClose:()=>P(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Eb,{code:B}),u.jsx("code",{className:"owner-code-text",children:B}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void V(),children:"Kopiér ejerkode"}),u.jsxs("div",{className:`field ${q.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-owner-code",value:q,onChange:J=>oe(J.target.value),autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-owner-code",children:"Skriv ejerkode"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:at,disabled:!q.trim(),children:"Brug ejerkode i denne browser"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>te(J=>!J),children:ge?"Stop scanning":"Scan QR-kode"}),pe&&u.jsx("div",{className:"notice",children:pe}),ge&&u.jsx("video",{className:"owner-code-video",ref:Be,muted:!0,playsInline:!0})]})})]})}if(a==="application-settings")return u.jsx(qt,{title:"Applikationsindstillinger",onClose:l,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(gr,{label:"Version",value:As}),u.jsx(gr,{label:"Bluetooth",value:kc()?"Tilgængelig":"Ikke tilgængelig"}),u.jsx(gr,{label:"Gemte enheder",value:String(h.length)}),u.jsx("div",{className:"notice",children:"Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne tilladelsen i browserens site- eller Bluetooth-indstillinger."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>D({title:"Ryd gemte enheder",message:"Vil du fjerne alle gemte enheder fra denne browser?",confirmLabel:"Ryd",onConfirm:b}),disabled:h.length===0,children:"Ryd gemte enheder"})]})});if(a==="application-about")return u.jsx(qt,{title:"Om appen",onClose:l,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Pico Kontrol Panel er lavet til at bygge og fjernstyre sjove eller seje Raspberry Pi Pico W-projekter."}),u.jsx(gr,{label:"Udvikler",value:"Christian Bröchner Rasmussen"}),u.jsx(gr,{label:"Version",value:As})]})});if(a==="application-help")return u.jsx(qt,{title:"Hjælp til applikationen",onClose:l,children:u.jsxs("div",{className:"settings-stack prose help-lesson",children:[u.jsxs("div",{className:"help-lesson-card",children:[u.jsx("strong",{children:"Komplet undervisningsforløb"}),u.jsx("p",{children:"Linket åbner Teknologiskolens guide til Pico Kontrol Panel. Her kan du lære hele arbejdsgangen: browseropsætning, Kodeværkstedet, MicroPython, USB-installation, Bluetooth-forbindelse, kontrolpaneler og trådløs kodeudvikling."})]}),u.jsxs("div",{className:"help-lesson-list","aria-label":"Undervisningsforløbet indeholder",children:[u.jsx("span",{children:"Trin-for-trin opsætning"}),u.jsx("span",{children:"Øvelser til kode og kontrolpanel"}),u.jsx("span",{children:"Projektforslag med Pico W"})]}),u.jsx("p",{className:"help-lesson-destination",children:"Du sendes til materialer.teknologiskolen.dk i en ny fane."}),u.jsx("a",{className:"btn btn-primary btn-block",href:"https://materialer.teknologiskolen.dk/lessons/fjernstyring-af-raspberry-pi-pico-w",target:"_blank",rel:"noreferrer",children:"Åbn komplet undervisningsforløb"})]})});if(a==="device-settings"){const je=!!(s!=null&&s.isOwnedByMe);async function at(V=!1){if(!s||!je)return;const J=Te(T,s.gridCols),ie=Te(le,s.gridRows),Ce=Sb(d,J,ie);if(Ce&&!V){D({title:"Gitter kan påvirke layout",message:`Det nuværende layout bruger op til ${Ce.requiredCols} kolonner og ${Ce.requiredRows} rækker. Det nye gitter er ${J} × ${ie}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,confirmLabel:"Gem alligevel",onConfirm:()=>{at(!0)}});return}fe(!0),await x(ne,Z,Z&&Q,Z&&Re,J,ie),G(J),ae(ie),fe(!1),l()}return u.jsxs(qt,{title:"Enhedsindstillinger",onClose:l,children:[u.jsxs("div",{className:"device-settings-modal",children:[u.jsx("div",{className:"device-settings-scroll",children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(gr,{label:"Navn",value:(s==null?void 0:s.deviceName)??"Ukendt"}),u.jsx(gr,{label:"Ejer",value:Tb(s)}),je?u.jsxs(u.Fragment,{children:[u.jsxs("button",{className:"device-icon-pick settings-icon-pick",type:"button",onClick:()=>$e(!0),"aria-label":"Vælg ikon",children:[u.jsx(Ls,{slug:ne}),u.jsx("span",{className:"badge",children:u.jsx(Pt,{name:"plus",size:22})})]}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:Z?"":"active",onClick:()=>N(!1),children:"Privat"}),u.jsx("button",{type:"button",className:Z?"active":"",onClick:()=>N(!0),children:"Offentlig"})]}),Z&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:Q?"":"active",onClick:()=>de(!1),children:"Nej"}),u.jsx("button",{type:"button",className:Q?"active":"",onClick:()=>de(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:Re?"":"active",onClick:()=>_e(!1),children:"Nej"}),u.jsx("button",{type:"button",className:Re?"active":"",onClick:()=>_e(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter"}),u.jsxs("div",{className:"row",children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-cols",children:"Kolonner"}),u.jsx("input",{id:"device-cols",type:"number",min:si,max:oi,value:Number.isNaN(T)?"":T,onChange:V=>G(parseInt(V.target.value,10)),onBlur:()=>G(Te(T,(s==null?void 0:s.gridCols)??11))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-rows",children:"Rækker"}),u.jsx("input",{id:"device-rows",type:"number",min:si,max:oi,value:Number.isNaN(le)?"":le,onChange:V=>ae(parseInt(V.target.value,10)),onBlur:()=>ae(Te(le,(s==null?void 0:s.gridRows)??31))})]})]})]}):u.jsxs(u.Fragment,{children:[u.jsx(gr,{label:"Ikon",value:(s==null?void 0:s.icon)??Gl}),u.jsx(gr,{label:"Redigering",value:s!=null&&s.canEdit?"Tilladt":"Ikke tilladt"}),u.jsx(gr,{label:"Gitter",value:`${(s==null?void 0:s.gridCols)??0} × ${(s==null?void 0:s.gridRows)??0}`})]})]})}),je&&u.jsx("div",{className:"device-settings-foot",children:u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>at(),disabled:ce,children:ce?"Gemmer...":"Gem enhedsindstillinger"})})]}),xe&&u.jsx(Ph,{selected:ne,onSelect:Ie,onClose:()=>$e(!1)})]})}return u.jsx(qt,{title:"Hjælp til enheden",onClose:l,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Knapper sender en kommando med deres navn, når de trykkes."}),u.jsx("p",{children:"Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse."}),u.jsx("p",{children:"Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen."}),(s==null?void 0:s.canEdit)&&u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>E(!0),children:"Rediger layout"})]})})}function Sb(a,l,o){let s=0,d=0;for(const h of a)Os(h)&&(s=Math.max(s,Math.ceil((h.centerX2+h.spanX)/2)+1),d=Math.max(d,Math.ceil((h.centerY2+h.spanY)/2)+1));return l<s||o<d?{requiredCols:s,requiredRows:d}:null}function Eb({code:a}){const l=j.useMemo(()=>pb(a),[a]),o=l.length;return u.jsxs("svg",{className:"owner-code-qr",viewBox:`0 0 ${o+8} ${o+8}`,role:"img","aria-label":"QR-kode til ejerkode",children:[u.jsx("rect",{width:o+8,height:o+8,fill:"white"}),l.map((s,d)=>s.map((h,g)=>h?u.jsx("rect",{x:g+4,y:d+4,width:"1",height:"1",fill:"currentColor"},`${g}-${d}`):null))]})}function Tb(a){var l;return a?a.isOwnedByMe?"Dig":((l=a.ownerName)==null?void 0:l.trim())||"Anden bruger":"Ukendt"}function gr({label:a,value:l}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:a}),u.jsx("strong",{children:l})]})}function Mb(){const a=se(s=>s.confirmDialog),l=se(s=>s.closeConfirm);if(!a)return null;function o(){a==null||a.onConfirm(),l()}return u.jsx(qt,{title:a.title,onClose:l,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:a.message}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:l,children:a.cancelLabel??"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:o,children:a.confirmLabel??"Fortsæt"})]})]})})}function jb(){const a=se(s=>s.connectionLost),l=se(s=>s.reconnectLostDevice),o=se(s=>s.dismissConnectionLost);return a?u.jsx(qt,{title:"Forbindelse afbrudt",onClose:o,children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("p",{className:"confirm-message",children:["Forbindelsen til ",a.deviceName," blev afbrudt. Tjek at Picoen har strøm og er tæt nok på."]}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:o,children:"Luk"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>l(),children:"Genforbind"})]})]})}):null}function Nb(){const a=se(o=>o.toast),l=se(o=>o.dismissToast);return a?u.jsx("div",{className:"toast",role:"alert",onClick:l,children:a.message},a.id):null}function Rb(){const a=se(m=>m.screen),l=se(m=>m.splashTarget),o=se(m=>m.init),s=se(m=>m.sideMenuOpen),d=se(m=>m.debuggerOpen),[h,g]=j.useState(!1);return j.useEffect(()=>{o()},[o]),j.useEffect(()=>{if(s){g(!0);return}const m=setTimeout(()=>g(!1),140);return()=>clearTimeout(m)},[s]),u.jsxs("div",{className:"app",children:[a==="splash"&&l==="intro"&&u.jsx(zm,{}),a==="splash"&&l==="dashboard"&&u.jsx(Hm,{}),a==="splash"&&u.jsx(Rg,{}),a==="intro"&&u.jsx(zm,{}),a==="dashboard"&&u.jsx(Hm,{}),a==="connection"&&u.jsx(Ig,{}),a==="create"&&u.jsx(Gg,{}),a==="control"&&u.jsx(I_,{}),a==="ide"&&u.jsx(Hv,{}),h&&u.jsx(cb,{open:s}),u.jsx(kb,{}),u.jsx(jb,{}),u.jsx(Mb,{}),d&&u.jsx(fb,{}),u.jsx(Nb,{})]})}function Ab(){if(!("serviceWorker"in navigator))return;window.addEventListener("load",()=>{const l=new URL("sw.js",window.location.href);navigator.serviceWorker.register(l,{scope:"./"}).catch(o=>{console.warn("Service worker registration failed:",o)})});let a=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{a||window.crossOriginIsolated||(a=!0,window.location.reload())})}Ab();U2.createRoot(document.getElementById("root")).render(u.jsx(Ts.StrictMode,{children:u.jsx(Rb,{})}));
