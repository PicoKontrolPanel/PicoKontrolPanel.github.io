var j2=Object.defineProperty;var A2=(i,l,o)=>l in i?j2(i,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[l]=o;var be=(i,l,o)=>A2(i,typeof l!="symbol"?l+"":l,o);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))a(u);new MutationObserver(u=>{for(const h of u)if(h.type==="childList")for(const p of h.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function o(u){const h={};return u.integrity&&(h.integrity=u.integrity),u.referrerPolicy&&(h.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?h.credentials="include":u.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function a(u){if(u.ep)return;u.ep=!0;const h=o(u);fetch(u.href,h)}})();function Oh(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Nd={exports:{}},xs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function R2(){if(vm)return xs;vm=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function o(a,u,h){var p=null;if(h!==void 0&&(p=""+h),u.key!==void 0&&(p=""+u.key),"key"in u){h={};for(var f in u)f!=="key"&&(h[f]=u[f])}else h=u;return u=h.ref,{$$typeof:i,type:a,key:p,ref:u!==void 0?u:null,props:h}}return xs.Fragment=l,xs.jsx=o,xs.jsxs=o,xs}var bm;function C2(){return bm||(bm=1,Nd.exports=R2()),Nd.exports}var d=C2(),jd={exports:{}},Pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function D2(){if(ym)return Pe;ym=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),p=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),E=Symbol.iterator;function j(T){return T===null||typeof T!="object"?null:(T=E&&T[E]||T["@@iterator"],typeof T=="function"?T:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,V={};function K(T,J,se){this.props=T,this.context=J,this.refs=V,this.updater=se||B}K.prototype.isReactComponent={},K.prototype.setState=function(T,J){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,J,"setState")},K.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function U(){}U.prototype=K.prototype;function ce(T,J,se){this.props=T,this.context=J,this.refs=V,this.updater=se||B}var Y=ce.prototype=new U;Y.constructor=ce,$(Y,K.prototype),Y.isPureReactComponent=!0;var de=Array.isArray;function _e(){}var M={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function D(T,J,se){var fe=se.ref;return{$$typeof:i,type:T,key:J,ref:fe!==void 0?fe:null,props:se}}function Q(T,J){return D(T.type,J,T.props)}function C(T){return typeof T=="object"&&T!==null&&T.$$typeof===i}function ae(T){var J={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(se){return J[se]})}var le=/\/+/g;function ye(T,J){return typeof T=="object"&&T!==null&&T.key!=null?ae(""+T.key):J.toString(36)}function ee(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(_e,_e):(T.status="pending",T.then(function(J){T.status==="pending"&&(T.status="fulfilled",T.value=J)},function(J){T.status==="pending"&&(T.status="rejected",T.reason=J)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function N(T,J,se,fe,Se){var we=typeof T;(we==="undefined"||we==="boolean")&&(T=null);var Ce=!1;if(T===null)Ce=!0;else switch(we){case"bigint":case"string":case"number":Ce=!0;break;case"object":switch(T.$$typeof){case i:case l:Ce=!0;break;case x:return Ce=T._init,N(Ce(T._payload),J,se,fe,Se)}}if(Ce)return Se=Se(T),Ce=fe===""?"."+ye(T,0):fe,de(Se)?(se="",Ce!=null&&(se=Ce.replace(le,"$&/")+"/"),N(Se,J,se,"",function(gt){return gt})):Se!=null&&(C(Se)&&(Se=Q(Se,se+(Se.key==null||T&&T.key===Se.key?"":(""+Se.key).replace(le,"$&/")+"/")+Ce)),J.push(Se)),1;Ce=0;var tt=fe===""?".":fe+":";if(de(T))for(var Me=0;Me<T.length;Me++)fe=T[Me],we=tt+ye(fe,Me),Ce+=N(fe,J,se,we,Se);else if(Me=j(T),typeof Me=="function")for(T=Me.call(T),Me=0;!(fe=T.next()).done;)fe=fe.value,we=tt+ye(fe,Me++),Ce+=N(fe,J,se,we,Se);else if(we==="object"){if(typeof T.then=="function")return N(ee(T),J,se,fe,Se);throw J=String(T),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Ce}function P(T,J,se){if(T==null)return T;var fe=[],Se=0;return N(T,fe,"","",function(we){return J.call(se,we,Se++)}),fe}function oe(T){if(T._status===-1){var J=T._result;J=J(),J.then(function(se){(T._status===0||T._status===-1)&&(T._status=1,T._result=se)},function(se){(T._status===0||T._status===-1)&&(T._status=2,T._result=se)}),T._status===-1&&(T._status=0,T._result=J)}if(T._status===1)return T._result.default;throw T._result}var ke=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},ve={map:P,forEach:function(T,J,se){P(T,function(){J.apply(this,arguments)},se)},count:function(T){var J=0;return P(T,function(){J++}),J},toArray:function(T){return P(T,function(J){return J})||[]},only:function(T){if(!C(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return Pe.Activity=w,Pe.Children=ve,Pe.Component=K,Pe.Fragment=o,Pe.Profiler=u,Pe.PureComponent=ce,Pe.StrictMode=a,Pe.Suspense=g,Pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=M,Pe.__COMPILER_RUNTIME={__proto__:null,c:function(T){return M.H.useMemoCache(T)}},Pe.cache=function(T){return function(){return T.apply(null,arguments)}},Pe.cacheSignal=function(){return null},Pe.cloneElement=function(T,J,se){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var fe=$({},T.props),Se=T.key;if(J!=null)for(we in J.key!==void 0&&(Se=""+J.key),J)!q.call(J,we)||we==="key"||we==="__self"||we==="__source"||we==="ref"&&J.ref===void 0||(fe[we]=J[we]);var we=arguments.length-2;if(we===1)fe.children=se;else if(1<we){for(var Ce=Array(we),tt=0;tt<we;tt++)Ce[tt]=arguments[tt+2];fe.children=Ce}return D(T.type,Se,fe)},Pe.createContext=function(T){return T={$$typeof:p,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:h,_context:T},T},Pe.createElement=function(T,J,se){var fe,Se={},we=null;if(J!=null)for(fe in J.key!==void 0&&(we=""+J.key),J)q.call(J,fe)&&fe!=="key"&&fe!=="__self"&&fe!=="__source"&&(Se[fe]=J[fe]);var Ce=arguments.length-2;if(Ce===1)Se.children=se;else if(1<Ce){for(var tt=Array(Ce),Me=0;Me<Ce;Me++)tt[Me]=arguments[Me+2];Se.children=tt}if(T&&T.defaultProps)for(fe in Ce=T.defaultProps,Ce)Se[fe]===void 0&&(Se[fe]=Ce[fe]);return D(T,we,Se)},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(T){return{$$typeof:f,render:T}},Pe.isValidElement=C,Pe.lazy=function(T){return{$$typeof:x,_payload:{_status:-1,_result:T},_init:oe}},Pe.memo=function(T,J){return{$$typeof:v,type:T,compare:J===void 0?null:J}},Pe.startTransition=function(T){var J=M.T,se={};M.T=se;try{var fe=T(),Se=M.S;Se!==null&&Se(se,fe),typeof fe=="object"&&fe!==null&&typeof fe.then=="function"&&fe.then(_e,ke)}catch(we){ke(we)}finally{J!==null&&se.types!==null&&(J.types=se.types),M.T=J}},Pe.unstable_useCacheRefresh=function(){return M.H.useCacheRefresh()},Pe.use=function(T){return M.H.use(T)},Pe.useActionState=function(T,J,se){return M.H.useActionState(T,J,se)},Pe.useCallback=function(T,J){return M.H.useCallback(T,J)},Pe.useContext=function(T){return M.H.useContext(T)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(T,J){return M.H.useDeferredValue(T,J)},Pe.useEffect=function(T,J){return M.H.useEffect(T,J)},Pe.useEffectEvent=function(T){return M.H.useEffectEvent(T)},Pe.useId=function(){return M.H.useId()},Pe.useImperativeHandle=function(T,J,se){return M.H.useImperativeHandle(T,J,se)},Pe.useInsertionEffect=function(T,J){return M.H.useInsertionEffect(T,J)},Pe.useLayoutEffect=function(T,J){return M.H.useLayoutEffect(T,J)},Pe.useMemo=function(T,J){return M.H.useMemo(T,J)},Pe.useOptimistic=function(T,J){return M.H.useOptimistic(T,J)},Pe.useReducer=function(T,J,se){return M.H.useReducer(T,J,se)},Pe.useRef=function(T){return M.H.useRef(T)},Pe.useState=function(T){return M.H.useState(T)},Pe.useSyncExternalStore=function(T,J,se){return M.H.useSyncExternalStore(T,J,se)},Pe.useTransition=function(){return M.H.useTransition()},Pe.version="19.2.7",Pe}var wm;function sf(){return wm||(wm=1,jd.exports=D2()),jd.exports}var A=sf();const js=Oh(A);var Ad={exports:{}},ks={},Rd={exports:{}},Cd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function O2(){return xm||(xm=1,(function(i){function l(N,P){var oe=N.length;N.push(P);e:for(;0<oe;){var ke=oe-1>>>1,ve=N[ke];if(0<u(ve,P))N[ke]=P,N[oe]=ve,oe=ke;else break e}}function o(N){return N.length===0?null:N[0]}function a(N){if(N.length===0)return null;var P=N[0],oe=N.pop();if(oe!==P){N[0]=oe;e:for(var ke=0,ve=N.length,T=ve>>>1;ke<T;){var J=2*(ke+1)-1,se=N[J],fe=J+1,Se=N[fe];if(0>u(se,oe))fe<ve&&0>u(Se,se)?(N[ke]=Se,N[fe]=oe,ke=fe):(N[ke]=se,N[J]=oe,ke=J);else if(fe<ve&&0>u(Se,oe))N[ke]=Se,N[fe]=oe,ke=fe;else break e}}return P}function u(N,P){var oe=N.sortIndex-P.sortIndex;return oe!==0?oe:N.id-P.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;i.unstable_now=function(){return h.now()}}else{var p=Date,f=p.now();i.unstable_now=function(){return p.now()-f}}var g=[],v=[],x=1,w=null,E=3,j=!1,B=!1,$=!1,V=!1,K=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;function Y(N){for(var P=o(v);P!==null;){if(P.callback===null)a(v);else if(P.startTime<=N)a(v),P.sortIndex=P.expirationTime,l(g,P);else break;P=o(v)}}function de(N){if($=!1,Y(N),!B)if(o(g)!==null)B=!0,_e||(_e=!0,ae());else{var P=o(v);P!==null&&ee(de,P.startTime-N)}}var _e=!1,M=-1,q=5,D=-1;function Q(){return V?!0:!(i.unstable_now()-D<q)}function C(){if(V=!1,_e){var N=i.unstable_now();D=N;var P=!0;try{e:{B=!1,$&&($=!1,U(M),M=-1),j=!0;var oe=E;try{t:{for(Y(N),w=o(g);w!==null&&!(w.expirationTime>N&&Q());){var ke=w.callback;if(typeof ke=="function"){w.callback=null,E=w.priorityLevel;var ve=ke(w.expirationTime<=N);if(N=i.unstable_now(),typeof ve=="function"){w.callback=ve,Y(N),P=!0;break t}w===o(g)&&a(g),Y(N)}else a(g);w=o(g)}if(w!==null)P=!0;else{var T=o(v);T!==null&&ee(de,T.startTime-N),P=!1}}break e}finally{w=null,E=oe,j=!1}P=void 0}}finally{P?ae():_e=!1}}}var ae;if(typeof ce=="function")ae=function(){ce(C)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ye=le.port2;le.port1.onmessage=C,ae=function(){ye.postMessage(null)}}else ae=function(){K(C,0)};function ee(N,P){M=K(function(){N(i.unstable_now())},P)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(N){N.callback=null},i.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<N?Math.floor(1e3/N):5},i.unstable_getCurrentPriorityLevel=function(){return E},i.unstable_next=function(N){switch(E){case 1:case 2:case 3:var P=3;break;default:P=E}var oe=E;E=P;try{return N()}finally{E=oe}},i.unstable_requestPaint=function(){V=!0},i.unstable_runWithPriority=function(N,P){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var oe=E;E=N;try{return P()}finally{E=oe}},i.unstable_scheduleCallback=function(N,P,oe){var ke=i.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?ke+oe:ke):oe=ke,N){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=oe+ve,N={id:x++,callback:P,priorityLevel:N,startTime:oe,expirationTime:ve,sortIndex:-1},oe>ke?(N.sortIndex=oe,l(v,N),o(g)===null&&N===o(v)&&($?(U(M),M=-1):$=!0,ee(de,oe-ke))):(N.sortIndex=ve,l(g,N),B||j||(B=!0,_e||(_e=!0,ae()))),N},i.unstable_shouldYield=Q,i.unstable_wrapCallback=function(N){var P=E;return function(){var oe=E;E=P;try{return N.apply(this,arguments)}finally{E=oe}}}})(Cd)),Cd}var km;function L2(){return km||(km=1,Rd.exports=O2()),Rd.exports}var Dd={exports:{}},nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em;function B2(){if(Em)return nn;Em=1;var i=sf();function l(g){var v="https://react.dev/errors/"+g;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)v+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+g+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var a={d:{f:o,r:function(){throw Error(l(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},u=Symbol.for("react.portal");function h(g,v,x){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:w==null?null:""+w,children:g,containerInfo:v,implementation:x}}var p=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(g,v){if(g==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,nn.createPortal=function(g,v){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(l(299));return h(g,v,null,x)},nn.flushSync=function(g){var v=p.T,x=a.p;try{if(p.T=null,a.p=2,g)return g()}finally{p.T=v,a.p=x,a.d.f()}},nn.preconnect=function(g,v){typeof g=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,a.d.C(g,v))},nn.prefetchDNS=function(g){typeof g=="string"&&a.d.D(g)},nn.preinit=function(g,v){if(typeof g=="string"&&v&&typeof v.as=="string"){var x=v.as,w=f(x,v.crossOrigin),E=typeof v.integrity=="string"?v.integrity:void 0,j=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;x==="style"?a.d.S(g,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:w,integrity:E,fetchPriority:j}):x==="script"&&a.d.X(g,{crossOrigin:w,integrity:E,fetchPriority:j,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},nn.preinitModule=function(g,v){if(typeof g=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var x=f(v.as,v.crossOrigin);a.d.M(g,{crossOrigin:x,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&a.d.M(g)},nn.preload=function(g,v){if(typeof g=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var x=v.as,w=f(x,v.crossOrigin);a.d.L(g,x,{crossOrigin:w,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},nn.preloadModule=function(g,v){if(typeof g=="string")if(v){var x=f(v.as,v.crossOrigin);a.d.m(g,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:x,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else a.d.m(g)},nn.requestFormReset=function(g){a.d.r(g)},nn.unstable_batchedUpdates=function(g,v){return g(v)},nn.useFormState=function(g,v,x){return p.H.useFormState(g,v,x)},nn.useFormStatus=function(){return p.H.useHostTransitionStatus()},nn.version="19.2.7",nn}var Sm;function Lh(){if(Sm)return Dd.exports;Sm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),Dd.exports=B2(),Dd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm;function z2(){if(Tm)return ks;Tm=1;var i=L2(),l=sf(),o=Lh();function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(h(e)!==e)throw Error(a(188))}function v(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var c=s.alternate;if(c===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===c.child){for(c=s.child;c;){if(c===n)return g(s),e;if(c===r)return g(s),t;c=c.sibling}throw Error(a(188))}if(n.return!==r.return)n=s,r=c;else{for(var _=!1,y=s.child;y;){if(y===n){_=!0,n=s,r=c;break}if(y===r){_=!0,r=s,n=c;break}y=y.sibling}if(!_){for(y=c.child;y;){if(y===n){_=!0,n=c,r=s;break}if(y===r){_=!0,r=c,n=s;break}y=y.sibling}if(!_)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,E=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),ce=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),_e=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),Q=Symbol.for("react.memo_cache_sentinel"),C=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=C&&e[C]||e["@@iterator"],typeof e=="function"?e:null)}var le=Symbol.for("react.client.reference");function ye(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $:return"Fragment";case K:return"Profiler";case V:return"StrictMode";case de:return"Suspense";case _e:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case ce:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case Y:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case M:return t=e.displayName||null,t!==null?t:ye(e.type)||"Memo";case q:t=e._payload,e=e._init;try{return ye(e(t))}catch{}}return null}var ee=Array.isArray,N=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},ke=[],ve=-1;function T(e){return{current:e}}function J(e){0>ve||(e.current=ke[ve],ke[ve]=null,ve--)}function se(e,t){ve++,ke[ve]=e.current,e.current=t}var fe=T(null),Se=T(null),we=T(null),Ce=T(null);function tt(e,t){switch(se(we,t),se(Se,e),se(fe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?P0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=P0(t),e=I0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(fe),se(fe,e)}function Me(){J(fe),J(Se),J(we)}function gt(e){e.memoizedState!==null&&se(Ce,e);var t=fe.current,n=I0(t,e.type);t!==n&&(se(Se,e),se(fe,n))}function je(e){Se.current===e&&(J(fe),J(Se)),Ce.current===e&&(J(Ce),vs._currentValue=oe)}var it,X;function H(e){if(it===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);it=t&&t[1]||"",X=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+it+e+X}var me=!1;function Le(e,t){if(!e||me)return"";me=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var ie=function(){throw Error()};if(Object.defineProperty(ie.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ie,[])}catch(Z){var G=Z}Reflect.construct(e,[],ie)}else{try{ie.call()}catch(Z){G=Z}e.call(ie.prototype)}}else{try{throw Error()}catch(Z){G=Z}(ie=e())&&typeof ie.catch=="function"&&ie.catch(function(){})}}catch(Z){if(Z&&G&&typeof Z.stack=="string")return[Z.stack,G.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),_=c[0],y=c[1];if(_&&y){var S=_.split(`
`),F=y.split(`
`);for(s=r=0;r<S.length&&!S[r].includes("DetermineComponentFrameRoot");)r++;for(;s<F.length&&!F[s].includes("DetermineComponentFrameRoot");)s++;if(r===S.length||s===F.length)for(r=S.length-1,s=F.length-1;1<=r&&0<=s&&S[r]!==F[s];)s--;for(;1<=r&&0<=s;r--,s--)if(S[r]!==F[s]){if(r!==1||s!==1)do if(r--,s--,0>s||S[r]!==F[s]){var te=`
`+S[r].replace(" at new "," at ");return e.displayName&&te.includes("<anonymous>")&&(te=te.replace("<anonymous>",e.displayName)),te}while(1<=r&&0<=s);break}}}finally{me=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?H(n):""}function Ve(e,t){switch(e.tag){case 26:case 27:case 5:return H(e.type);case 16:return H("Lazy");case 13:return e.child!==t&&t!==null?H("Suspense Fallback"):H("Suspense");case 19:return H("SuspenseList");case 0:case 15:return Le(e.type,!1);case 11:return Le(e.type.render,!1);case 1:return Le(e.type,!0);case 31:return H("Activity");default:return""}}function Fe(e){try{var t="",n=null;do t+=Ve(e,n),n=e,e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Be=Object.prototype.hasOwnProperty,qe=i.unstable_scheduleCallback,Ut=i.unstable_cancelCallback,an=i.unstable_shouldYield,Tn=i.unstable_requestPaint,Rt=i.unstable_now,rr=i.unstable_getCurrentPriorityLevel,ol=i.unstable_ImmediatePriority,Mn=i.unstable_UserBlockingPriority,sn=i.unstable_NormalPriority,Gn=i.unstable_LowPriority,Nn=i.unstable_IdlePriority,cl=i.log,jn=i.unstable_setDisableYieldValue,on=null,Vt=null;function cn(e){if(typeof cl=="function"&&jn(e),Vt&&typeof Vt.setStrictMode=="function")try{Vt.setStrictMode(on,e)}catch{}}var ct=Math.clz32?Math.clz32:Gt,ul=Math.log,Ft=Math.LN2;function Gt(e){return e>>>=0,e===0?32:31-(ul(e)/Ft|0)|0}var $t=256,lr=262144,dl=4194304;function un(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pn(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var s=0,c=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var y=r&134217727;return y!==0?(r=y&~c,r!==0?s=un(r):(_&=y,_!==0?s=un(_):n||(n=y&~e,n!==0&&(s=un(n))))):(y=r&~c,y!==0?s=un(y):_!==0?s=un(_):n||(n=r&~e,n!==0&&(s=un(n)))),s===0?0:t!==0&&t!==s&&(t&c)===0&&(c=s&-s,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:s}function ir(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ar(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function An(){var e=dl;return dl<<=1,(dl&62914560)===0&&(dl=4194304),e}function ue(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ae(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nt(e,t,n,r,s,c){var _=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var y=e.entanglements,S=e.expirationTimes,F=e.hiddenUpdates;for(n=_&~n;0<n;){var te=31-ct(n),ie=1<<te;y[te]=0,S[te]=-1;var G=F[te];if(G!==null)for(F[te]=null,te=0;te<G.length;te++){var Z=G[te];Z!==null&&(Z.lane&=-536870913)}n&=~ie}r!==0&&$e(e,r,0),c!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=c&~(_&~t))}function $e(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ct(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ht(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}function rt(e,t){var n=t&-t;return n=(n&42)!==0?1:St(n),(n&(e.suspendedLanes|t))!==0?0:n}function St(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function _r(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Rn(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:dm(e.type))}function sr(e,t){var n=P.p;try{return P.p=e,t()}finally{P.p=n}}var vr=Math.random().toString(36).slice(2),vt="__reactFiber$"+vr,en="__reactProps$"+vr,br="__reactContainer$"+vr,Na="__reactEvents$"+vr,Ri="__reactListeners$"+vr,yr="__reactHandles$"+vr,bt="__reactResources$"+vr,fl="__reactMarker$"+vr;function $n(e){delete e[vt],delete e[en],delete e[Na],delete e[Ri],delete e[yr]}function wr(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[br]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=K0(e);e!==null;){if(n=e[vt])return n;e=K0(e)}return t}e=n,n=e.parentNode}return null}function xr(e){if(e=e[vt]||e[br]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function kr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(a(33))}function or(e){var t=e[bt];return t||(t=e[bt]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function yt(e){e[fl]=!0}var ii=new Set,Cn={};function dn(e,t){Yn(e,t),Yn(e+"Capture",t)}function Yn(e,t){for(Cn[e]=t,e=0;e<t.length;e++)ii.add(t[e])}var cr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Cr={},ml={};function Dr(e){return Be.call(ml,e)?!0:Be.call(Cr,e)?!1:cr.test(e)?ml[e]=!0:(Cr[e]=!0,!1)}function hl(e,t,n){if(Dr(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Dn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function fn(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+r)}}function Ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Or(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pl(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,c=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(_){n=""+_,c.call(this,_)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(_){n=""+_},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ci(e){if(!e._valueTracker){var t=Or(e)?"checked":"value";e._valueTracker=pl(e,t,""+e[t])}}function gl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Or(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Di=/[\n"\\]/g;function qt(e){return e.replace(Di,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Er(e,t,n,r,s,c,_,y){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),t!=null?_==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ct(t)):e.value!==""+Ct(t)&&(e.value=""+Ct(t)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),t!=null?ai(e,_,Ct(t)):n!=null?ai(e,_,Ct(n)):r!=null&&e.removeAttribute("value"),s==null&&c!=null&&(e.defaultChecked=!!c),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+Ct(y):e.removeAttribute("name")}function Ne(e,t,n,r,s,c,_,y){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){Ci(e);return}n=n!=null?""+Ct(n):"",t=t!=null?""+Ct(t):n,y||t===e.value||(e.value=t),e.defaultValue=t}r=r??s,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=y?e.checked:!!r,e.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),Ci(e)}function ai(e,t,n){t==="number"&&Lr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function _l(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ct(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Hs(e,t,n){if(t!=null&&(t=""+Ct(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ct(n):""}function Ps(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(a(92));if(ee(r)){if(1<r.length)throw Error(a(93));r=r[0]}n=r}n==null&&(n=""),t=n}n=Ct(t),e.defaultValue=n,r=e.textContent,r===n&&r!==""&&r!==null&&(e.value=r),Ci(e)}function vl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var si=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Br(e,t,n){var r=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,n):typeof n!="number"||n===0||si.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Oi(e,t,n){if(t!=null&&typeof t!="object")throw Error(a(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var s in t)r=t[s],t.hasOwnProperty(s)&&n[s]!==r&&Br(e,s,r)}else for(var c in t)t.hasOwnProperty(c)&&Br(e,c,t[c])}function gn(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ja=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),On=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Li(e){return On.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ur(){}var Bi=null;function oi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var W=null,bl=null;function Is(e){var t=xr(e);if(t&&(e=t.stateNode)){var n=e[en]||null;e:switch(e=t.stateNode,t.type){case"input":if(Er(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+qt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=r[en]||null;if(!s)throw Error(a(90));Er(r,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&gl(r)}break e;case"textarea":Hs(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&_l(e,!!n.multiple,t,!1)}}}var Aa=!1;function yl(e,t,n){if(Aa)return e(t,n);Aa=!0;try{var r=e(t);return r}finally{if(Aa=!1,(W!==null||bl!==null)&&(Ho(),W&&(t=W,e=bl,bl=W=null,Is(t),e)))for(t=0;t<e.length;t++)Is(e[t])}}function wl(e,t){var n=e.stateNode;if(n===null)return null;var r=n[en]||null;if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(a(231,t,typeof n));return n}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xl=!1;if(Xn)try{var at={};Object.defineProperty(at,"passive",{get:function(){xl=!0}}),window.addEventListener("test",at,at),window.removeEventListener("test",at,at)}catch{xl=!1}var dr=null,kl=null,Sr=null;function Vs(){if(Sr)return Sr;var e,t=kl,n=t.length,r,s="value"in dr?dr.value:dr.textContent,c=s.length;for(e=0;e<n&&t[e]===s[e];e++);var _=n-e;for(r=1;r<=_&&t[n-r]===s[c-r];r++);return Sr=s.slice(e,1<r?1-r:void 0)}function zi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ui(){return!0}function Ra(){return!1}function tn(e){function t(n,r,s,c,_){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=c,this.target=_,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(n=e[y],this[y]=n?n(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ui:Ra,this.isPropagationStopped=Ra,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ui)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ui)},persist:function(){},isPersistent:Ui}),t}var Tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ln=tn(Tr),_n=w({},Tr,{view:0,detail:0}),Tc=tn(_n),Dt,qi,zr,wt=w({},_n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ui,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zr&&(zr&&e.type==="mousemove"?(Dt=e.screenX-zr.screenX,qi=e.screenY-zr.screenY):qi=Dt=0,zr=e),Dt)},movementY:function(e){return"movementY"in e?e.movementY:qi}}),El=tn(wt),Mc=w({},wt,{dataTransfer:0}),Nc=tn(Mc),ci=w({},_n,{relatedTarget:0}),Ca=tn(ci),Fs=w({},Tr,{animationName:0,elapsedTime:0,pseudoElement:0}),Hi=tn(Fs),Sl=w({},Tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gs=tn(Sl),Da=w({},Tr,{data:0}),$s=tn(Da),jc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ac={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xt(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vn[e])?!!t[e]:!1}function ui(){return xt}var Ur=w({},_n,{key:function(e){if(e.key){var t=jc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ac[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ui,charCode:function(e){return e.type==="keypress"?zi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ys=tn(Ur),Xs=w({},wt,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oa=tn(Xs),Rc=w({},_n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ui}),Cc=tn(Rc),Dc=w({},Tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ks=tn(Dc),Qs=w({},wt,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),La=tn(Qs),Oc=w({},Tr,{newState:0,oldState:0}),Ws=tn(Oc),Zs=[9,13,27,32],Pi=Xn&&"CompositionEvent"in window,di=null;Xn&&"documentMode"in document&&(di=document.documentMode);var Lc=Xn&&"TextEvent"in window&&!di,Ba=Xn&&(!Pi||di&&8<di&&11>=di),Ii=" ",Js=!1;function eo(e,t){switch(e){case"keyup":return Zs.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function to(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tl=!1;function Bc(e,t){switch(e){case"compositionend":return to(t);case"keypress":return t.which!==32?null:(Js=!0,Ii);case"textInput":return e=t.data,e===Ii&&Js?null:e;default:return null}}function zc(e,t){if(Tl)return e==="compositionend"||!Pi&&eo(e,t)?(e=Vs(),Sr=kl=dr=null,Tl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ba&&t.locale!=="ko"?null:t.data;default:return null}}var Uc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function no(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Uc[e.type]:t==="textarea"}function ro(e,t,n,r){W?bl?bl.push(r):bl=[r]:W=r,t=Yo(t,"onChange"),0<t.length&&(n=new Ln("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fi=null,Ml=null;function qc(e){L0(e,0)}function Vi(e){var t=kr(e);if(gl(t))return e}function qr(e,t){if(e==="change")return t}var za=!1;if(Xn){var Fi;if(Xn){var Ua="oninput"in document;if(!Ua){var qa=document.createElement("div");qa.setAttribute("oninput","return;"),Ua=typeof qa.oninput=="function"}Fi=Ua}else Fi=!1;za=Fi&&(!document.documentMode||9<document.documentMode)}function lo(){fi&&(fi.detachEvent("onpropertychange",io),Ml=fi=null)}function io(e){if(e.propertyName==="value"&&Vi(Ml)){var t=[];ro(t,Ml,e,oi(e)),yl(qc,t)}}function ao(e,t,n){e==="focusin"?(lo(),fi=t,Ml=n,fi.attachEvent("onpropertychange",io)):e==="focusout"&&lo()}function Hc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vi(Ml)}function Pc(e,t){if(e==="click")return Vi(t)}function Ic(e,t){if(e==="input"||e==="change")return Vi(t)}function Vc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mn=typeof Object.is=="function"?Object.is:Vc;function mi(e,t){if(mn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Be.call(t,s)||!mn(e[s],t[s]))return!1}return!0}function so(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gi(e,t){var n=so(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=so(n)}}function Bn(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bn(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ha(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Lr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lr(e.document)}return t}function Pa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Fc=Xn&&"documentMode"in document&&11>=document.documentMode,Mr=null,hi=null,Nl=null,$i=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$i||Mr==null||Mr!==Lr(r)||(r=Mr,"selectionStart"in r&&Pa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nl&&mi(Nl,r)||(Nl=r,r=Yo(hi,"onSelect"),0<r.length&&(t=new Ln("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mr)))}function fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pr={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionrun:fr("Transition","TransitionRun"),transitionstart:fr("Transition","TransitionStart"),transitioncancel:fr("Transition","TransitionCancel"),transitionend:fr("Transition","TransitionEnd")},Ia={},oo={};Xn&&(oo=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function Ir(e){if(Ia[e])return Ia[e];if(!Pr[e])return e;var t=Pr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in oo)return Ia[e]=t[n];return e}var m=Ir("animationend"),b=Ir("animationiteration"),k=Ir("animationstart"),O=Ir("transitionrun"),z=Ir("transitionstart"),ne=Ir("transitioncancel"),ge=Ir("transitionend"),Ue=new Map,Ee="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ee.push("scrollEnd");function De(e,t){Ue.set(e,t),dn(t,[e])}var lt=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ut=[],He=0,_t=0;function Kn(){for(var e=He,t=_t=He=0;t<e;){var n=ut[t];ut[t++]=null;var r=ut[t];ut[t++]=null;var s=ut[t];ut[t++]=null;var c=ut[t];if(ut[t++]=null,r!==null&&s!==null){var _=r.pending;_===null?s.next=s:(s.next=_.next,_.next=s),r.pending=s}c!==0&&Vr(n,s,c)}}function bn(e,t,n,r){ut[He++]=e,ut[He++]=t,ut[He++]=n,ut[He++]=r,_t|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function zn(e,t,n,r){return bn(e,t,n,r),pi(e)}function yn(e,t){return bn(e,null,null,t),pi(e)}function Vr(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var s=!1,c=e.return;c!==null;)c.childLanes|=n,r=c.alternate,r!==null&&(r.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(s=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,s&&t!==null&&(s=31-ct(n),e=c.hiddenUpdates,r=e[s],r===null?e[s]=[t]:r.push(t),t.lane=n|536870912),c):null}function pi(e){if(50<ds)throw ds=0,Zu=null,Error(a(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mr={};function Va(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(e,t,n,r){return new Va(e,t,n,r)}function Yi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fr(e,t){var n=e.alternate;return n===null?(n=Ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function _f(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function co(e,t,n,r,s,c){var _=0;if(r=e,typeof e=="function")Yi(e)&&(_=1);else if(typeof e=="string")_=_2(e,n,fe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case D:return e=Ht(31,n,t,s),e.elementType=D,e.lanes=c,e;case $:return gi(n.children,s,c,t);case V:_=8,s|=24;break;case K:return e=Ht(12,n,t,s|2),e.elementType=K,e.lanes=c,e;case de:return e=Ht(13,n,t,s),e.elementType=de,e.lanes=c,e;case _e:return e=Ht(19,n,t,s),e.elementType=_e,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ce:_=10;break e;case U:_=9;break e;case Y:_=11;break e;case M:_=14;break e;case q:_=16,r=null;break e}_=29,n=Error(a(130,e===null?"null":typeof e,"")),r=null}return t=Ht(_,n,t,s),t.elementType=e,t.type=r,t.lanes=c,t}function gi(e,t,n,r){return e=Ht(7,e,r,t),e.lanes=n,e}function Gc(e,t,n){return e=Ht(6,e,null,t),e.lanes=n,e}function vf(e){var t=Ht(18,null,null,0);return t.stateNode=e,t}function $c(e,t,n){return t=Ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var bf=new WeakMap;function Qn(e,t){if(typeof e=="object"&&e!==null){var n=bf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Fe(t)},bf.set(e,t),t)}return{value:e,source:t,stack:Fe(t)}}var Xi=[],Ki=0,uo=null,Fa=0,Wn=[],Zn=0,jl=null,Nr=1,jr="";function Gr(e,t){Xi[Ki++]=Fa,Xi[Ki++]=uo,uo=e,Fa=t}function yf(e,t,n){Wn[Zn++]=Nr,Wn[Zn++]=jr,Wn[Zn++]=jl,jl=e;var r=Nr;e=jr;var s=32-ct(r)-1;r&=~(1<<s),n+=1;var c=32-ct(t)+s;if(30<c){var _=s-s%5;c=(r&(1<<_)-1).toString(32),r>>=_,s-=_,Nr=1<<32-ct(t)+s|n<<s|r,jr=c+e}else Nr=1<<c|n<<s|r,jr=e}function Yc(e){e.return!==null&&(Gr(e,1),yf(e,1,0))}function Xc(e){for(;e===uo;)uo=Xi[--Ki],Xi[Ki]=null,Fa=Xi[--Ki],Xi[Ki]=null;for(;e===jl;)jl=Wn[--Zn],Wn[Zn]=null,jr=Wn[--Zn],Wn[Zn]=null,Nr=Wn[--Zn],Wn[Zn]=null}function wf(e,t){Wn[Zn++]=Nr,Wn[Zn++]=jr,Wn[Zn++]=jl,Nr=t.id,jr=t.overflow,jl=e}var Qt=null,kt=null,We=!1,Al=null,Jn=!1,Kc=Error(a(519));function Rl(e){var t=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ga(Qn(t,e)),Kc}function xf(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[vt]=e,t[en]=r,n){case"dialog":Xe("cancel",t),Xe("close",t);break;case"iframe":case"object":case"embed":Xe("load",t);break;case"video":case"audio":for(n=0;n<ms.length;n++)Xe(ms[n],t);break;case"source":Xe("error",t);break;case"img":case"image":case"link":Xe("error",t),Xe("load",t);break;case"details":Xe("toggle",t);break;case"input":Xe("invalid",t),Ne(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Xe("invalid",t);break;case"textarea":Xe("invalid",t),Ps(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||r.suppressHydrationWarning===!0||q0(t.textContent,n)?(r.popover!=null&&(Xe("beforetoggle",t),Xe("toggle",t)),r.onScroll!=null&&Xe("scroll",t),r.onScrollEnd!=null&&Xe("scrollend",t),r.onClick!=null&&(t.onclick=ur),t=!0):t=!1,t||Rl(e,!0)}function kf(e){for(Qt=e.return;Qt;)switch(Qt.tag){case 5:case 31:case 13:Jn=!1;return;case 27:case 3:Jn=!0;return;default:Qt=Qt.return}}function Qi(e){if(e!==Qt)return!1;if(!We)return kf(e),We=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||md(e.type,e.memoizedProps)),n=!n),n&&kt&&Rl(e),kf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));kt=X0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));kt=X0(e)}else t===27?(t=kt,Gl(e.type)?(e=vd,vd=null,kt=e):kt=t):kt=Qt?tr(e.stateNode.nextSibling):null;return!0}function _i(){kt=Qt=null,We=!1}function Qc(){var e=Al;return e!==null&&(En===null?En=e:En.push.apply(En,e),Al=null),e}function Ga(e){Al===null?Al=[e]:Al.push(e)}var Wc=T(null),vi=null,$r=null;function Cl(e,t,n){se(Wc,t._currentValue),t._currentValue=n}function Yr(e){e._currentValue=Wc.current,J(Wc)}function Zc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jc(e,t,n,r){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var c=s.dependencies;if(c!==null){var _=s.child;c=c.firstContext;e:for(;c!==null;){var y=c;c=s;for(var S=0;S<t.length;S++)if(y.context===t[S]){c.lanes|=n,y=c.alternate,y!==null&&(y.lanes|=n),Zc(c.return,n,e),r||(_=null);break e}c=y.next}}else if(s.tag===18){if(_=s.return,_===null)throw Error(a(341));_.lanes|=n,c=_.alternate,c!==null&&(c.lanes|=n),Zc(_,n,e),_=null}else _=s.child;if(_!==null)_.return=s;else for(_=s;_!==null;){if(_===e){_=null;break}if(s=_.sibling,s!==null){s.return=_.return,_=s;break}_=_.return}s=_}}function Wi(e,t,n,r){e=null;for(var s=t,c=!1;s!==null;){if(!c){if((s.flags&524288)!==0)c=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var _=s.alternate;if(_===null)throw Error(a(387));if(_=_.memoizedProps,_!==null){var y=s.type;mn(s.pendingProps.value,_.value)||(e!==null?e.push(y):e=[y])}}else if(s===Ce.current){if(_=s.alternate,_===null)throw Error(a(387));_.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(vs):e=[vs])}s=s.return}e!==null&&Jc(t,e,n,r),t.flags|=262144}function fo(e){for(e=e.firstContext;e!==null;){if(!mn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function bi(e){vi=e,$r=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Wt(e){return Ef(vi,e)}function mo(e,t){return vi===null&&bi(e),Ef(e,t)}function Ef(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},$r===null){if(e===null)throw Error(a(308));$r=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $r=$r.next=t;return n}var mp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},hp=i.unstable_scheduleCallback,pp=i.unstable_NormalPriority,Ot={$$typeof:ce,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function eu(){return{controller:new mp,data:new Map,refCount:0}}function $a(e){e.refCount--,e.refCount===0&&hp(pp,function(){e.controller.abort()})}var Ya=null,tu=0,Zi=0,Ji=null;function gp(e,t){if(Ya===null){var n=Ya=[];tu=0,Zi=ld(),Ji={status:"pending",value:void 0,then:function(r){n.push(r)}}}return tu++,t.then(Sf,Sf),t}function Sf(){if(--tu===0&&Ya!==null){Ji!==null&&(Ji.status="fulfilled");var e=Ya;Ya=null,Zi=0,Ji=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _p(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(r.status="rejected",r.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),r}var Tf=N.S;N.S=function(e,t){c0=Rt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&gp(e,t),Tf!==null&&Tf(e,t)};var yi=T(null);function nu(){var e=yi.current;return e!==null?e:pt.pooledCache}function ho(e,t){t===null?se(yi,yi.current):se(yi,t.pool)}function Mf(){var e=nu();return e===null?null:{parent:Ot._currentValue,pool:e}}var ea=Error(a(460)),ru=Error(a(474)),po=Error(a(542)),go={then:function(){}};function Nf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function jf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ur,ur),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Rf(e),e;default:if(typeof t.status=="string")t.then(ur,ur);else{if(e=pt,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=r}},function(r){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Rf(e),e}throw xi=t,ea}}function wi(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(xi=n,ea):n}}var xi=null;function Af(){if(xi===null)throw Error(a(459));var e=xi;return xi=null,e}function Rf(e){if(e===ea||e===po)throw Error(a(483))}var ta=null,Xa=0;function _o(e){var t=Xa;return Xa+=1,ta===null&&(ta=[]),jf(ta,e,t)}function Ka(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function vo(e,t){throw t.$$typeof===E?Error(a(525)):(e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Cf(e){function t(L,R){if(e){var I=L.deletions;I===null?(L.deletions=[R],L.flags|=16):I.push(R)}}function n(L,R){if(!e)return null;for(;R!==null;)t(L,R),R=R.sibling;return null}function r(L){for(var R=new Map;L!==null;)L.key!==null?R.set(L.key,L):R.set(L.index,L),L=L.sibling;return R}function s(L,R){return L=Fr(L,R),L.index=0,L.sibling=null,L}function c(L,R,I){return L.index=I,e?(I=L.alternate,I!==null?(I=I.index,I<R?(L.flags|=67108866,R):I):(L.flags|=67108866,R)):(L.flags|=1048576,R)}function _(L){return e&&L.alternate===null&&(L.flags|=67108866),L}function y(L,R,I,re){return R===null||R.tag!==6?(R=Gc(I,L.mode,re),R.return=L,R):(R=s(R,I),R.return=L,R)}function S(L,R,I,re){var Re=I.type;return Re===$?te(L,R,I.props.children,re,I.key):R!==null&&(R.elementType===Re||typeof Re=="object"&&Re!==null&&Re.$$typeof===q&&wi(Re)===R.type)?(R=s(R,I.props),Ka(R,I),R.return=L,R):(R=co(I.type,I.key,I.props,null,L.mode,re),Ka(R,I),R.return=L,R)}function F(L,R,I,re){return R===null||R.tag!==4||R.stateNode.containerInfo!==I.containerInfo||R.stateNode.implementation!==I.implementation?(R=$c(I,L.mode,re),R.return=L,R):(R=s(R,I.children||[]),R.return=L,R)}function te(L,R,I,re,Re){return R===null||R.tag!==7?(R=gi(I,L.mode,re,Re),R.return=L,R):(R=s(R,I),R.return=L,R)}function ie(L,R,I){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=Gc(""+R,L.mode,I),R.return=L,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case j:return I=co(R.type,R.key,R.props,null,L.mode,I),Ka(I,R),I.return=L,I;case B:return R=$c(R,L.mode,I),R.return=L,R;case q:return R=wi(R),ie(L,R,I)}if(ee(R)||ae(R))return R=gi(R,L.mode,I,null),R.return=L,R;if(typeof R.then=="function")return ie(L,_o(R),I);if(R.$$typeof===ce)return ie(L,mo(L,R),I);vo(L,R)}return null}function G(L,R,I,re){var Re=R!==null?R.key:null;if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return Re!==null?null:y(L,R,""+I,re);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case j:return I.key===Re?S(L,R,I,re):null;case B:return I.key===Re?F(L,R,I,re):null;case q:return I=wi(I),G(L,R,I,re)}if(ee(I)||ae(I))return Re!==null?null:te(L,R,I,re,null);if(typeof I.then=="function")return G(L,R,_o(I),re);if(I.$$typeof===ce)return G(L,R,mo(L,I),re);vo(L,I)}return null}function Z(L,R,I,re,Re){if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return L=L.get(I)||null,y(R,L,""+re,Re);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case j:return L=L.get(re.key===null?I:re.key)||null,S(R,L,re,Re);case B:return L=L.get(re.key===null?I:re.key)||null,F(R,L,re,Re);case q:return re=wi(re),Z(L,R,I,re,Re)}if(ee(re)||ae(re))return L=L.get(I)||null,te(R,L,re,Re,null);if(typeof re.then=="function")return Z(L,R,I,_o(re),Re);if(re.$$typeof===ce)return Z(L,R,I,mo(R,re),Re);vo(R,re)}return null}function xe(L,R,I,re){for(var Re=null,Ze=null,Te=R,Ge=R=0,Qe=null;Te!==null&&Ge<I.length;Ge++){Te.index>Ge?(Qe=Te,Te=null):Qe=Te.sibling;var Je=G(L,Te,I[Ge],re);if(Je===null){Te===null&&(Te=Qe);break}e&&Te&&Je.alternate===null&&t(L,Te),R=c(Je,R,Ge),Ze===null?Re=Je:Ze.sibling=Je,Ze=Je,Te=Qe}if(Ge===I.length)return n(L,Te),We&&Gr(L,Ge),Re;if(Te===null){for(;Ge<I.length;Ge++)Te=ie(L,I[Ge],re),Te!==null&&(R=c(Te,R,Ge),Ze===null?Re=Te:Ze.sibling=Te,Ze=Te);return We&&Gr(L,Ge),Re}for(Te=r(Te);Ge<I.length;Ge++)Qe=Z(Te,L,Ge,I[Ge],re),Qe!==null&&(e&&Qe.alternate!==null&&Te.delete(Qe.key===null?Ge:Qe.key),R=c(Qe,R,Ge),Ze===null?Re=Qe:Ze.sibling=Qe,Ze=Qe);return e&&Te.forEach(function(Ql){return t(L,Ql)}),We&&Gr(L,Ge),Re}function Oe(L,R,I,re){if(I==null)throw Error(a(151));for(var Re=null,Ze=null,Te=R,Ge=R=0,Qe=null,Je=I.next();Te!==null&&!Je.done;Ge++,Je=I.next()){Te.index>Ge?(Qe=Te,Te=null):Qe=Te.sibling;var Ql=G(L,Te,Je.value,re);if(Ql===null){Te===null&&(Te=Qe);break}e&&Te&&Ql.alternate===null&&t(L,Te),R=c(Ql,R,Ge),Ze===null?Re=Ql:Ze.sibling=Ql,Ze=Ql,Te=Qe}if(Je.done)return n(L,Te),We&&Gr(L,Ge),Re;if(Te===null){for(;!Je.done;Ge++,Je=I.next())Je=ie(L,Je.value,re),Je!==null&&(R=c(Je,R,Ge),Ze===null?Re=Je:Ze.sibling=Je,Ze=Je);return We&&Gr(L,Ge),Re}for(Te=r(Te);!Je.done;Ge++,Je=I.next())Je=Z(Te,L,Ge,Je.value,re),Je!==null&&(e&&Je.alternate!==null&&Te.delete(Je.key===null?Ge:Je.key),R=c(Je,R,Ge),Ze===null?Re=Je:Ze.sibling=Je,Ze=Je);return e&&Te.forEach(function(N2){return t(L,N2)}),We&&Gr(L,Ge),Re}function mt(L,R,I,re){if(typeof I=="object"&&I!==null&&I.type===$&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case j:e:{for(var Re=I.key;R!==null;){if(R.key===Re){if(Re=I.type,Re===$){if(R.tag===7){n(L,R.sibling),re=s(R,I.props.children),re.return=L,L=re;break e}}else if(R.elementType===Re||typeof Re=="object"&&Re!==null&&Re.$$typeof===q&&wi(Re)===R.type){n(L,R.sibling),re=s(R,I.props),Ka(re,I),re.return=L,L=re;break e}n(L,R);break}else t(L,R);R=R.sibling}I.type===$?(re=gi(I.props.children,L.mode,re,I.key),re.return=L,L=re):(re=co(I.type,I.key,I.props,null,L.mode,re),Ka(re,I),re.return=L,L=re)}return _(L);case B:e:{for(Re=I.key;R!==null;){if(R.key===Re)if(R.tag===4&&R.stateNode.containerInfo===I.containerInfo&&R.stateNode.implementation===I.implementation){n(L,R.sibling),re=s(R,I.children||[]),re.return=L,L=re;break e}else{n(L,R);break}else t(L,R);R=R.sibling}re=$c(I,L.mode,re),re.return=L,L=re}return _(L);case q:return I=wi(I),mt(L,R,I,re)}if(ee(I))return xe(L,R,I,re);if(ae(I)){if(Re=ae(I),typeof Re!="function")throw Error(a(150));return I=Re.call(I),Oe(L,R,I,re)}if(typeof I.then=="function")return mt(L,R,_o(I),re);if(I.$$typeof===ce)return mt(L,R,mo(L,I),re);vo(L,I)}return typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint"?(I=""+I,R!==null&&R.tag===6?(n(L,R.sibling),re=s(R,I),re.return=L,L=re):(n(L,R),re=Gc(I,L.mode,re),re.return=L,L=re),_(L)):n(L,R)}return function(L,R,I,re){try{Xa=0;var Re=mt(L,R,I,re);return ta=null,Re}catch(Te){if(Te===ea||Te===po)throw Te;var Ze=Ht(29,Te,null,L.mode);return Ze.lanes=re,Ze.return=L,Ze}finally{}}}var ki=Cf(!0),Df=Cf(!1),Dl=!1;function lu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function iu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ol(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ll(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(et&2)!==0){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,t=pi(e),Vr(e,null,n),t}return bn(e,r,t,n),pi(e)}function Qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ht(e,n)}}function au(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var _={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?s=c=_:c=c.next=_,n=n.next}while(n!==null);c===null?s=c=t:c=c.next=t}else s=c=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var su=!1;function Wa(){if(su){var e=Ji;if(e!==null)throw e}}function Za(e,t,n,r){su=!1;var s=e.updateQueue;Dl=!1;var c=s.firstBaseUpdate,_=s.lastBaseUpdate,y=s.shared.pending;if(y!==null){s.shared.pending=null;var S=y,F=S.next;S.next=null,_===null?c=F:_.next=F,_=S;var te=e.alternate;te!==null&&(te=te.updateQueue,y=te.lastBaseUpdate,y!==_&&(y===null?te.firstBaseUpdate=F:y.next=F,te.lastBaseUpdate=S))}if(c!==null){var ie=s.baseState;_=0,te=F=S=null,y=c;do{var G=y.lane&-536870913,Z=G!==y.lane;if(Z?(Ke&G)===G:(r&G)===G){G!==0&&G===Zi&&(su=!0),te!==null&&(te=te.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var xe=e,Oe=y;G=t;var mt=n;switch(Oe.tag){case 1:if(xe=Oe.payload,typeof xe=="function"){ie=xe.call(mt,ie,G);break e}ie=xe;break e;case 3:xe.flags=xe.flags&-65537|128;case 0:if(xe=Oe.payload,G=typeof xe=="function"?xe.call(mt,ie,G):xe,G==null)break e;ie=w({},ie,G);break e;case 2:Dl=!0}}G=y.callback,G!==null&&(e.flags|=64,Z&&(e.flags|=8192),Z=s.callbacks,Z===null?s.callbacks=[G]:Z.push(G))}else Z={lane:G,tag:y.tag,payload:y.payload,callback:y.callback,next:null},te===null?(F=te=Z,S=ie):te=te.next=Z,_|=G;if(y=y.next,y===null){if(y=s.shared.pending,y===null)break;Z=y,y=Z.next,Z.next=null,s.lastBaseUpdate=Z,s.shared.pending=null}}while(!0);te===null&&(S=ie),s.baseState=S,s.firstBaseUpdate=F,s.lastBaseUpdate=te,c===null&&(s.shared.lanes=0),Hl|=_,e.lanes=_,e.memoizedState=ie}}function Of(e,t){if(typeof e!="function")throw Error(a(191,e));e.call(t)}function Lf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Of(n[e],t)}var na=T(null),bo=T(0);function Bf(e,t){e=nl,se(bo,e),se(na,t),nl=e|t.baseLanes}function ou(){se(bo,nl),se(na,na.current)}function cu(){nl=bo.current,J(na),J(bo)}var Un=T(null),er=null;function Bl(e){var t=e.alternate;se(jt,jt.current&1),se(Un,e),er===null&&(t===null||na.current!==null||t.memoizedState!==null)&&(er=e)}function uu(e){se(jt,jt.current),se(Un,e),er===null&&(er=e)}function zf(e){e.tag===22?(se(jt,jt.current),se(Un,e),er===null&&(er=e)):zl()}function zl(){se(jt,jt.current),se(Un,Un.current)}function qn(e){J(Un),er===e&&(er=null),J(jt)}var jt=T(0);function yo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||gd(n)||_d(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xr=0,Ie=null,dt=null,Lt=null,wo=!1,ra=!1,Ei=!1,xo=0,Ja=0,la=null,vp=0;function Mt(){throw Error(a(321))}function du(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mn(e[n],t[n]))return!1;return!0}function fu(e,t,n,r,s,c){return Xr=c,Ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?y1:Mu,Ei=!1,c=n(r,s),Ei=!1,ra&&(c=qf(t,n,r,s)),Uf(e),c}function Uf(e){N.H=ns;var t=dt!==null&&dt.next!==null;if(Xr=0,Lt=dt=Ie=null,wo=!1,Ja=0,la=null,t)throw Error(a(300));e===null||Bt||(e=e.dependencies,e!==null&&fo(e)&&(Bt=!0))}function qf(e,t,n,r){Ie=e;var s=0;do{if(ra&&(la=null),Ja=0,ra=!1,25<=s)throw Error(a(301));if(s+=1,Lt=dt=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}N.H=w1,c=t(n,r)}while(ra);return c}function bp(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?es(t):t,e=e.useState()[0],(dt!==null?dt.memoizedState:null)!==e&&(Ie.flags|=1024),t}function mu(){var e=xo!==0;return xo=0,e}function hu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function pu(e){if(wo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}wo=!1}Xr=0,Lt=dt=Ie=null,ra=!1,Ja=xo=0,la=null}function hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?Ie.memoizedState=Lt=e:Lt=Lt.next=e,Lt}function At(){if(dt===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=dt.next;var t=Lt===null?Ie.memoizedState:Lt.next;if(t!==null)Lt=t,dt=e;else{if(e===null)throw Ie.alternate===null?Error(a(467)):Error(a(310));dt=e,e={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},Lt===null?Ie.memoizedState=Lt=e:Lt=Lt.next=e}return Lt}function ko(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function es(e){var t=Ja;return Ja+=1,la===null&&(la=[]),e=jf(la,e,t),t=Ie,(Lt===null?t.memoizedState:Lt.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?y1:Mu),e}function Eo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return es(e);if(e.$$typeof===ce)return Wt(e)}throw Error(a(438,String(e)))}function gu(e){var t=null,n=Ie.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=Ie.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ko(),Ie.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=Q;return t.index++,n}function Kr(e,t){return typeof t=="function"?t(e):t}function So(e){var t=At();return _u(t,dt,e)}function _u(e,t,n){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=n;var s=e.baseQueue,c=r.pending;if(c!==null){if(s!==null){var _=s.next;s.next=c.next,c.next=_}t.baseQueue=s=c,r.pending=null}if(c=e.baseState,s===null)e.memoizedState=c;else{t=s.next;var y=_=null,S=null,F=t,te=!1;do{var ie=F.lane&-536870913;if(ie!==F.lane?(Ke&ie)===ie:(Xr&ie)===ie){var G=F.revertLane;if(G===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),ie===Zi&&(te=!0);else if((Xr&G)===G){F=F.next,G===Zi&&(te=!0);continue}else ie={lane:0,revertLane:F.revertLane,gesture:null,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},S===null?(y=S=ie,_=c):S=S.next=ie,Ie.lanes|=G,Hl|=G;ie=F.action,Ei&&n(c,ie),c=F.hasEagerState?F.eagerState:n(c,ie)}else G={lane:ie,revertLane:F.revertLane,gesture:F.gesture,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},S===null?(y=S=G,_=c):S=S.next=G,Ie.lanes|=ie,Hl|=ie;F=F.next}while(F!==null&&F!==t);if(S===null?_=c:S.next=y,!mn(c,e.memoizedState)&&(Bt=!0,te&&(n=Ji,n!==null)))throw n;e.memoizedState=c,e.baseState=_,e.baseQueue=S,r.lastRenderedState=c}return s===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function vu(e){var t=At(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,c=t.memoizedState;if(s!==null){n.pending=null;var _=s=s.next;do c=e(c,_.action),_=_.next;while(_!==s);mn(c,t.memoizedState)||(Bt=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,r]}function Hf(e,t,n){var r=Ie,s=At(),c=We;if(c){if(n===void 0)throw Error(a(407));n=n()}else n=t();var _=!mn((dt||s).memoizedState,n);if(_&&(s.memoizedState=n,Bt=!0),s=s.queue,wu(Vf.bind(null,r,s,e),[e]),s.getSnapshot!==t||_||Lt!==null&&Lt.memoizedState.tag&1){if(r.flags|=2048,ia(9,{destroy:void 0},If.bind(null,r,s,n,t),null),pt===null)throw Error(a(349));c||(Xr&127)!==0||Pf(r,t,n)}return n}function Pf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ie.updateQueue,t===null?(t=ko(),Ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function If(e,t,n,r){t.value=n,t.getSnapshot=r,Ff(t)&&Gf(e)}function Vf(e,t,n){return n(function(){Ff(t)&&Gf(e)})}function Ff(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mn(e,n)}catch{return!0}}function Gf(e){var t=yn(e,2);t!==null&&Sn(t,e,2)}function bu(e){var t=hn();if(typeof e=="function"){var n=e;if(e=n(),Ei){cn(!0);try{n()}finally{cn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kr,lastRenderedState:e},t}function $f(e,t,n,r){return e.baseState=n,_u(e,dt,typeof r=="function"?r:Kr)}function yp(e,t,n,r,s){if(No(e))throw Error(a(485));if(e=t.action,e!==null){var c={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){c.listeners.push(_)}};N.T!==null?n(!0):c.isTransition=!1,r(c),n=t.pending,n===null?(c.next=t.pending=c,Yf(t,c)):(c.next=n.next,t.pending=n.next=c)}}function Yf(e,t){var n=t.action,r=t.payload,s=e.state;if(t.isTransition){var c=N.T,_={};N.T=_;try{var y=n(s,r),S=N.S;S!==null&&S(_,y),Xf(e,t,y)}catch(F){yu(e,t,F)}finally{c!==null&&_.types!==null&&(c.types=_.types),N.T=c}}else try{c=n(s,r),Xf(e,t,c)}catch(F){yu(e,t,F)}}function Xf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){Kf(e,t,r)},function(r){return yu(e,t,r)}):Kf(e,t,n)}function Kf(e,t,n){t.status="fulfilled",t.value=n,Qf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yf(e,n)))}function yu(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=n,Qf(t),t=t.next;while(t!==r)}e.action=null}function Qf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Wf(e,t){return t}function Zf(e,t){if(We){var n=pt.formState;if(n!==null){e:{var r=Ie;if(We){if(kt){t:{for(var s=kt,c=Jn;s.nodeType!==8;){if(!c){s=null;break t}if(s=tr(s.nextSibling),s===null){s=null;break t}}c=s.data,s=c==="F!"||c==="F"?s:null}if(s){kt=tr(s.nextSibling),r=s.data==="F!";break e}}Rl(r)}r=!1}r&&(t=n[0])}}return n=hn(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wf,lastRenderedState:t},n.queue=r,n=_1.bind(null,Ie,r),r.dispatch=n,r=bu(!1),c=Tu.bind(null,Ie,!1,r.queue),r=hn(),s={state:t,dispatch:null,action:e,pending:null},r.queue=s,n=yp.bind(null,Ie,s,c,n),s.dispatch=n,r.memoizedState=e,[t,n,!1]}function Jf(e){var t=At();return e1(t,dt,e)}function e1(e,t,n){if(t=_u(e,t,Wf)[0],e=So(Kr)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=es(t)}catch(_){throw _===ea?po:_}else r=t;t=At();var s=t.queue,c=s.dispatch;return n!==t.memoizedState&&(Ie.flags|=2048,ia(9,{destroy:void 0},wp.bind(null,s,n),null)),[r,c,e]}function wp(e,t){e.action=t}function t1(e){var t=At(),n=dt;if(n!==null)return e1(t,n,e);At(),t=t.memoizedState,n=At();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ia(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=Ie.updateQueue,t===null&&(t=ko(),Ie.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function n1(){return At().memoizedState}function To(e,t,n,r){var s=hn();Ie.flags|=e,s.memoizedState=ia(1|t,{destroy:void 0},n,r===void 0?null:r)}function Mo(e,t,n,r){var s=At();r=r===void 0?null:r;var c=s.memoizedState.inst;dt!==null&&r!==null&&du(r,dt.memoizedState.deps)?s.memoizedState=ia(t,c,n,r):(Ie.flags|=e,s.memoizedState=ia(1|t,c,n,r))}function r1(e,t){To(8390656,8,e,t)}function wu(e,t){Mo(2048,8,e,t)}function xp(e){Ie.flags|=4;var t=Ie.updateQueue;if(t===null)t=ko(),Ie.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function l1(e){var t=At().memoizedState;return xp({ref:t,nextImpl:e}),function(){if((et&2)!==0)throw Error(a(440));return t.impl.apply(void 0,arguments)}}function i1(e,t){return Mo(4,2,e,t)}function a1(e,t){return Mo(4,4,e,t)}function s1(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function o1(e,t,n){n=n!=null?n.concat([e]):null,Mo(4,4,s1.bind(null,t,e),n)}function xu(){}function c1(e,t){var n=At();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&du(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function u1(e,t){var n=At();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&du(t,r[1]))return r[0];if(r=e(),Ei){cn(!0);try{e()}finally{cn(!1)}}return n.memoizedState=[r,t],r}function ku(e,t,n){return n===void 0||(Xr&1073741824)!==0&&(Ke&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=d0(),Ie.lanes|=e,Hl|=e,n)}function d1(e,t,n,r){return mn(n,t)?n:na.current!==null?(e=ku(e,n,r),mn(e,t)||(Bt=!0),e):(Xr&42)===0||(Xr&1073741824)!==0&&(Ke&261930)===0?(Bt=!0,e.memoizedState=n):(e=d0(),Ie.lanes|=e,Hl|=e,t)}function f1(e,t,n,r,s){var c=P.p;P.p=c!==0&&8>c?c:8;var _=N.T,y={};N.T=y,Tu(e,!1,t,n);try{var S=s(),F=N.S;if(F!==null&&F(y,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var te=_p(S,r);ts(e,t,te,In(e))}else ts(e,t,r,In(e))}catch(ie){ts(e,t,{then:function(){},status:"rejected",reason:ie},In())}finally{P.p=c,_!==null&&y.types!==null&&(_.types=y.types),N.T=_}}function kp(){}function Eu(e,t,n,r){if(e.tag!==5)throw Error(a(476));var s=m1(e).queue;f1(e,s,t,oe,n===null?kp:function(){return h1(e),n(r)})}function m1(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kr,lastRenderedState:oe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kr,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function h1(e){var t=m1(e);t.next===null&&(t=e.alternate.memoizedState),ts(e,t.next.queue,{},In())}function Su(){return Wt(vs)}function p1(){return At().memoizedState}function g1(){return At().memoizedState}function Ep(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=In();e=Ol(n);var r=Ll(t,e,n);r!==null&&(Sn(r,t,n),Qa(r,t,n)),t={cache:eu()},e.payload=t;return}t=t.return}}function Sp(e,t,n){var r=In();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},No(e)?v1(t,n):(n=zn(e,t,n,r),n!==null&&(Sn(n,e,r),b1(n,t,r)))}function _1(e,t,n){var r=In();ts(e,t,n,r)}function ts(e,t,n,r){var s={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(No(e))v1(t,s);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var _=t.lastRenderedState,y=c(_,n);if(s.hasEagerState=!0,s.eagerState=y,mn(y,_))return bn(e,t,s,0),pt===null&&Kn(),!1}catch{}finally{}if(n=zn(e,t,s,r),n!==null)return Sn(n,e,r),b1(n,t,r),!0}return!1}function Tu(e,t,n,r){if(r={lane:2,revertLane:ld(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},No(e)){if(t)throw Error(a(479))}else t=zn(e,n,r,2),t!==null&&Sn(t,e,2)}function No(e){var t=e.alternate;return e===Ie||t!==null&&t===Ie}function v1(e,t){ra=wo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function b1(e,t,n){if((n&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ht(e,n)}}var ns={readContext:Wt,use:Eo,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useLayoutEffect:Mt,useInsertionEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useSyncExternalStore:Mt,useId:Mt,useHostTransitionStatus:Mt,useFormState:Mt,useActionState:Mt,useOptimistic:Mt,useMemoCache:Mt,useCacheRefresh:Mt};ns.useEffectEvent=Mt;var y1={readContext:Wt,use:Eo,useCallback:function(e,t){return hn().memoizedState=[e,t===void 0?null:t],e},useContext:Wt,useEffect:r1,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,To(4194308,4,s1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return To(4194308,4,e,t)},useInsertionEffect:function(e,t){To(4,2,e,t)},useMemo:function(e,t){var n=hn();t=t===void 0?null:t;var r=e();if(Ei){cn(!0);try{e()}finally{cn(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=hn();if(n!==void 0){var s=n(t);if(Ei){cn(!0);try{n(t)}finally{cn(!1)}}}else s=t;return r.memoizedState=r.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},r.queue=e,e=e.dispatch=Sp.bind(null,Ie,e),[r.memoizedState,e]},useRef:function(e){var t=hn();return e={current:e},t.memoizedState=e},useState:function(e){e=bu(e);var t=e.queue,n=_1.bind(null,Ie,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xu,useDeferredValue:function(e,t){var n=hn();return ku(n,e,t)},useTransition:function(){var e=bu(!1);return e=f1.bind(null,Ie,e.queue,!0,!1),hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Ie,s=hn();if(We){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),pt===null)throw Error(a(349));(Ke&127)!==0||Pf(r,t,n)}s.memoizedState=n;var c={value:n,getSnapshot:t};return s.queue=c,r1(Vf.bind(null,r,c,e),[e]),r.flags|=2048,ia(9,{destroy:void 0},If.bind(null,r,c,n,t),null),n},useId:function(){var e=hn(),t=pt.identifierPrefix;if(We){var n=jr,r=Nr;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t="_"+t+"R_"+n,n=xo++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=vp++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Su,useFormState:Zf,useActionState:Zf,useOptimistic:function(e){var t=hn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Tu.bind(null,Ie,!0,n),n.dispatch=t,[e,t]},useMemoCache:gu,useCacheRefresh:function(){return hn().memoizedState=Ep.bind(null,Ie)},useEffectEvent:function(e){var t=hn(),n={impl:e};return t.memoizedState=n,function(){if((et&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}},Mu={readContext:Wt,use:Eo,useCallback:c1,useContext:Wt,useEffect:wu,useImperativeHandle:o1,useInsertionEffect:i1,useLayoutEffect:a1,useMemo:u1,useReducer:So,useRef:n1,useState:function(){return So(Kr)},useDebugValue:xu,useDeferredValue:function(e,t){var n=At();return d1(n,dt.memoizedState,e,t)},useTransition:function(){var e=So(Kr)[0],t=At().memoizedState;return[typeof e=="boolean"?e:es(e),t]},useSyncExternalStore:Hf,useId:p1,useHostTransitionStatus:Su,useFormState:Jf,useActionState:Jf,useOptimistic:function(e,t){var n=At();return $f(n,dt,e,t)},useMemoCache:gu,useCacheRefresh:g1};Mu.useEffectEvent=l1;var w1={readContext:Wt,use:Eo,useCallback:c1,useContext:Wt,useEffect:wu,useImperativeHandle:o1,useInsertionEffect:i1,useLayoutEffect:a1,useMemo:u1,useReducer:vu,useRef:n1,useState:function(){return vu(Kr)},useDebugValue:xu,useDeferredValue:function(e,t){var n=At();return dt===null?ku(n,e,t):d1(n,dt.memoizedState,e,t)},useTransition:function(){var e=vu(Kr)[0],t=At().memoizedState;return[typeof e=="boolean"?e:es(e),t]},useSyncExternalStore:Hf,useId:p1,useHostTransitionStatus:Su,useFormState:t1,useActionState:t1,useOptimistic:function(e,t){var n=At();return dt!==null?$f(n,dt,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:gu,useCacheRefresh:g1};w1.useEffectEvent=l1;function Nu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ju={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=In(),s=Ol(r);s.payload=t,n!=null&&(s.callback=n),t=Ll(e,s,r),t!==null&&(Sn(t,e,r),Qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=In(),s=Ol(r);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Ll(e,s,r),t!==null&&(Sn(t,e,r),Qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=In(),r=Ol(n);r.tag=2,t!=null&&(r.callback=t),t=Ll(e,r,n),t!==null&&(Sn(t,e,n),Qa(t,e,n))}};function x1(e,t,n,r,s,c,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,c,_):t.prototype&&t.prototype.isPureReactComponent?!mi(n,r)||!mi(s,c):!0}function k1(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ju.enqueueReplaceState(t,t.state,null)}function Si(e,t){var n=t;if("ref"in t){n={};for(var r in t)r!=="ref"&&(n[r]=t[r])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function E1(e){lt(e)}function S1(e){console.error(e)}function T1(e){lt(e)}function jo(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function M1(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Au(e,t,n){return n=Ol(n),n.tag=3,n.payload={element:null},n.callback=function(){jo(e,t)},n}function N1(e){return e=Ol(e),e.tag=3,e}function j1(e,t,n,r){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var c=r.value;e.payload=function(){return s(c)},e.callback=function(){M1(t,n,r)}}var _=n.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){M1(t,n,r),typeof s!="function"&&(Pl===null?Pl=new Set([this]):Pl.add(this));var y=r.stack;this.componentDidCatch(r.value,{componentStack:y!==null?y:""})})}function Tp(e,t,n,r,s){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=n.alternate,t!==null&&Wi(t,n,s,!0),n=Un.current,n!==null){switch(n.tag){case 31:case 13:return er===null?Po():n.alternate===null&&Nt===0&&(Nt=3),n.flags&=-257,n.flags|=65536,n.lanes=s,r===go?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),td(e,r,s)),!1;case 22:return n.flags|=65536,r===go?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),td(e,r,s)),!1}throw Error(a(435,n.tag))}return td(e,r,s),Po(),!1}if(We)return t=Un.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,r!==Kc&&(e=Error(a(422),{cause:r}),Ga(Qn(e,n)))):(r!==Kc&&(t=Error(a(423),{cause:r}),Ga(Qn(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,r=Qn(r,n),s=Au(e.stateNode,r,s),au(e,s),Nt!==4&&(Nt=2)),!1;var c=Error(a(520),{cause:r});if(c=Qn(c,n),us===null?us=[c]:us.push(c),Nt!==4&&(Nt=2),t===null)return!0;r=Qn(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Au(n.stateNode,r,e),au(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Pl===null||!Pl.has(c))))return n.flags|=65536,s&=-s,n.lanes|=s,s=N1(s),j1(s,e,n,r),au(n,s),!1}n=n.return}while(n!==null);return!1}var Ru=Error(a(461)),Bt=!1;function Zt(e,t,n,r){t.child=e===null?Df(t,null,n,r):ki(t,e.child,n,r)}function A1(e,t,n,r,s){n=n.render;var c=t.ref;if("ref"in r){var _={};for(var y in r)y!=="ref"&&(_[y]=r[y])}else _=r;return bi(t),r=fu(e,t,n,_,c,s),y=mu(),e!==null&&!Bt?(hu(e,t,s),Qr(e,t,s)):(We&&y&&Yc(t),t.flags|=1,Zt(e,t,r,s),t.child)}function R1(e,t,n,r,s){if(e===null){var c=n.type;return typeof c=="function"&&!Yi(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,C1(e,t,c,r,s)):(e=co(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!qu(e,s)){var _=c.memoizedProps;if(n=n.compare,n=n!==null?n:mi,n(_,r)&&e.ref===t.ref)return Qr(e,t,s)}return t.flags|=1,e=Fr(c,r),e.ref=t.ref,e.return=t,t.child=e}function C1(e,t,n,r,s){if(e!==null){var c=e.memoizedProps;if(mi(c,r)&&e.ref===t.ref)if(Bt=!1,t.pendingProps=r=c,qu(e,s))(e.flags&131072)!==0&&(Bt=!0);else return t.lanes=e.lanes,Qr(e,t,s)}return Cu(e,t,n,r,s)}function D1(e,t,n,r){var s=r.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(r=t.child=e.child,s=0;r!==null;)s=s|r.lanes|r.childLanes,r=r.sibling;r=s&~c}else r=0,t.child=null;return O1(e,t,c,n,r)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ho(t,c!==null?c.cachePool:null),c!==null?Bf(t,c):ou(),zf(t);else return r=t.lanes=536870912,O1(e,t,c!==null?c.baseLanes|n:n,n,r)}else c!==null?(ho(t,c.cachePool),Bf(t,c),zl(),t.memoizedState=null):(e!==null&&ho(t,null),ou(),zl());return Zt(e,t,s,n),t.child}function rs(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function O1(e,t,n,r,s){var c=nu();return c=c===null?null:{parent:Ot._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&ho(t,null),ou(),zf(t),e!==null&&Wi(e,t,r,!0),t.childLanes=s,null}function Ao(e,t){return t=Co({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function L1(e,t,n){return ki(t,e.child,null,n),e=Ao(t,t.pendingProps),e.flags|=2,qn(t),t.memoizedState=null,e}function Mp(e,t,n){var r=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(We){if(r.mode==="hidden")return e=Ao(t,r),t.lanes=536870912,rs(null,e);if(uu(t),(e=kt)?(e=Y0(e,Jn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:jl!==null?{id:Nr,overflow:jr}:null,retryLane:536870912,hydrationErrors:null},n=vf(e),n.return=t,t.child=n,Qt=t,kt=null)):e=null,e===null)throw Rl(t);return t.lanes=536870912,null}return Ao(t,r)}var c=e.memoizedState;if(c!==null){var _=c.dehydrated;if(uu(t),s)if(t.flags&256)t.flags&=-257,t=L1(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(a(558));else if(Bt||Wi(e,t,n,!1),s=(n&e.childLanes)!==0,Bt||s){if(r=pt,r!==null&&(_=rt(r,n),_!==0&&_!==c.retryLane))throw c.retryLane=_,yn(e,_),Sn(r,e,_),Ru;Po(),t=L1(e,t,n)}else e=c.treeContext,kt=tr(_.nextSibling),Qt=t,We=!0,Al=null,Jn=!1,e!==null&&wf(t,e),t=Ao(t,r),t.flags|=4096;return t}return e=Fr(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ro(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(a(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Cu(e,t,n,r,s){return bi(t),n=fu(e,t,n,r,void 0,s),r=mu(),e!==null&&!Bt?(hu(e,t,s),Qr(e,t,s)):(We&&r&&Yc(t),t.flags|=1,Zt(e,t,n,s),t.child)}function B1(e,t,n,r,s,c){return bi(t),t.updateQueue=null,n=qf(t,r,n,s),Uf(e),r=mu(),e!==null&&!Bt?(hu(e,t,c),Qr(e,t,c)):(We&&r&&Yc(t),t.flags|=1,Zt(e,t,n,c),t.child)}function z1(e,t,n,r,s){if(bi(t),t.stateNode===null){var c=mr,_=n.contextType;typeof _=="object"&&_!==null&&(c=Wt(_)),c=new n(r,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=ju,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=r,c.state=t.memoizedState,c.refs={},lu(t),_=n.contextType,c.context=typeof _=="object"&&_!==null?Wt(_):mr,c.state=t.memoizedState,_=n.getDerivedStateFromProps,typeof _=="function"&&(Nu(t,n,_,r),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(_=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),_!==c.state&&ju.enqueueReplaceState(c,c.state,null),Za(t,r,c,s),Wa(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){c=t.stateNode;var y=t.memoizedProps,S=Si(n,y);c.props=S;var F=c.context,te=n.contextType;_=mr,typeof te=="object"&&te!==null&&(_=Wt(te));var ie=n.getDerivedStateFromProps;te=typeof ie=="function"||typeof c.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,te||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y||F!==_)&&k1(t,c,r,_),Dl=!1;var G=t.memoizedState;c.state=G,Za(t,r,c,s),Wa(),F=t.memoizedState,y||G!==F||Dl?(typeof ie=="function"&&(Nu(t,n,ie,r),F=t.memoizedState),(S=Dl||x1(t,n,S,r,G,F,_))?(te||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=F),c.props=r,c.state=F,c.context=_,r=S):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{c=t.stateNode,iu(e,t),_=t.memoizedProps,te=Si(n,_),c.props=te,ie=t.pendingProps,G=c.context,F=n.contextType,S=mr,typeof F=="object"&&F!==null&&(S=Wt(F)),y=n.getDerivedStateFromProps,(F=typeof y=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(_!==ie||G!==S)&&k1(t,c,r,S),Dl=!1,G=t.memoizedState,c.state=G,Za(t,r,c,s),Wa();var Z=t.memoizedState;_!==ie||G!==Z||Dl||e!==null&&e.dependencies!==null&&fo(e.dependencies)?(typeof y=="function"&&(Nu(t,n,y,r),Z=t.memoizedState),(te=Dl||x1(t,n,te,r,G,Z,S)||e!==null&&e.dependencies!==null&&fo(e.dependencies))?(F||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,Z,S),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,Z,S)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||_===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=Z),c.props=r,c.state=Z,c.context=S,r=te):(typeof c.componentDidUpdate!="function"||_===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),r=!1)}return c=r,Ro(e,t),r=(t.flags&128)!==0,c||r?(c=t.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&r?(t.child=ki(t,e.child,null,s),t.child=ki(t,null,n,s)):Zt(e,t,n,s),t.memoizedState=c.state,e=t.child):e=Qr(e,t,s),e}function U1(e,t,n,r){return _i(),t.flags|=256,Zt(e,t,n,r),t.child}var Du={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ou(e){return{baseLanes:e,cachePool:Mf()}}function Lu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Pn),e}function q1(e,t,n){var r=t.pendingProps,s=!1,c=(t.flags&128)!==0,_;if((_=c)||(_=e!==null&&e.memoizedState===null?!1:(jt.current&2)!==0),_&&(s=!0,t.flags&=-129),_=(t.flags&32)!==0,t.flags&=-33,e===null){if(We){if(s?Bl(t):zl(),(e=kt)?(e=Y0(e,Jn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:jl!==null?{id:Nr,overflow:jr}:null,retryLane:536870912,hydrationErrors:null},n=vf(e),n.return=t,t.child=n,Qt=t,kt=null)):e=null,e===null)throw Rl(t);return _d(e)?t.lanes=32:t.lanes=536870912,null}var y=r.children;return r=r.fallback,s?(zl(),s=t.mode,y=Co({mode:"hidden",children:y},s),r=gi(r,s,n,null),y.return=t,r.return=t,y.sibling=r,t.child=y,r=t.child,r.memoizedState=Ou(n),r.childLanes=Lu(e,_,n),t.memoizedState=Du,rs(null,r)):(Bl(t),Bu(t,y))}var S=e.memoizedState;if(S!==null&&(y=S.dehydrated,y!==null)){if(c)t.flags&256?(Bl(t),t.flags&=-257,t=zu(e,t,n)):t.memoizedState!==null?(zl(),t.child=e.child,t.flags|=128,t=null):(zl(),y=r.fallback,s=t.mode,r=Co({mode:"visible",children:r.children},s),y=gi(y,s,n,null),y.flags|=2,r.return=t,y.return=t,r.sibling=y,t.child=r,ki(t,e.child,null,n),r=t.child,r.memoizedState=Ou(n),r.childLanes=Lu(e,_,n),t.memoizedState=Du,t=rs(null,r));else if(Bl(t),_d(y)){if(_=y.nextSibling&&y.nextSibling.dataset,_)var F=_.dgst;_=F,r=Error(a(419)),r.stack="",r.digest=_,Ga({value:r,source:null,stack:null}),t=zu(e,t,n)}else if(Bt||Wi(e,t,n,!1),_=(n&e.childLanes)!==0,Bt||_){if(_=pt,_!==null&&(r=rt(_,n),r!==0&&r!==S.retryLane))throw S.retryLane=r,yn(e,r),Sn(_,e,r),Ru;gd(y)||Po(),t=zu(e,t,n)}else gd(y)?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,kt=tr(y.nextSibling),Qt=t,We=!0,Al=null,Jn=!1,e!==null&&wf(t,e),t=Bu(t,r.children),t.flags|=4096);return t}return s?(zl(),y=r.fallback,s=t.mode,S=e.child,F=S.sibling,r=Fr(S,{mode:"hidden",children:r.children}),r.subtreeFlags=S.subtreeFlags&65011712,F!==null?y=Fr(F,y):(y=gi(y,s,n,null),y.flags|=2),y.return=t,r.return=t,r.sibling=y,t.child=r,rs(null,r),r=t.child,y=e.child.memoizedState,y===null?y=Ou(n):(s=y.cachePool,s!==null?(S=Ot._currentValue,s=s.parent!==S?{parent:S,pool:S}:s):s=Mf(),y={baseLanes:y.baseLanes|n,cachePool:s}),r.memoizedState=y,r.childLanes=Lu(e,_,n),t.memoizedState=Du,rs(e.child,r)):(Bl(t),n=e.child,e=n.sibling,n=Fr(n,{mode:"visible",children:r.children}),n.return=t,n.sibling=null,e!==null&&(_=t.deletions,_===null?(t.deletions=[e],t.flags|=16):_.push(e)),t.child=n,t.memoizedState=null,n)}function Bu(e,t){return t=Co({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Co(e,t){return e=Ht(22,e,null,t),e.lanes=0,e}function zu(e,t,n){return ki(t,e.child,null,n),e=Bu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function H1(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zc(e.return,t,n)}function Uu(e,t,n,r,s,c){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s,treeForkCount:c}:(_.isBackwards=t,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=n,_.tailMode=s,_.treeForkCount=c)}function P1(e,t,n){var r=t.pendingProps,s=r.revealOrder,c=r.tail;r=r.children;var _=jt.current,y=(_&2)!==0;if(y?(_=_&1|2,t.flags|=128):_&=1,se(jt,_),Zt(e,t,r,n),r=We?Fa:0,!y&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&H1(e,n,t);else if(e.tag===19)H1(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&yo(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Uu(t,!1,s,n,c,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&yo(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Uu(t,!0,n,null,c,r);break;case"together":Uu(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Qr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Hl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Wi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=Fr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Fr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&fo(e)))}function Np(e,t,n){switch(t.tag){case 3:tt(t,t.stateNode.containerInfo),Cl(t,Ot,e.memoizedState.cache),_i();break;case 27:case 5:gt(t);break;case 4:tt(t,t.stateNode.containerInfo);break;case 10:Cl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,uu(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(Bl(t),t.flags|=128,null):(n&t.child.childLanes)!==0?q1(e,t,n):(Bl(t),e=Qr(e,t,n),e!==null?e.sibling:null);Bl(t);break;case 19:var s=(e.flags&128)!==0;if(r=(n&t.childLanes)!==0,r||(Wi(e,t,n,!1),r=(n&t.childLanes)!==0),s){if(r)return P1(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),se(jt,jt.current),r)break;return null;case 22:return t.lanes=0,D1(e,t,n,t.pendingProps);case 24:Cl(t,Ot,e.memoizedState.cache)}return Qr(e,t,n)}function I1(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Bt=!0;else{if(!qu(e,n)&&(t.flags&128)===0)return Bt=!1,Np(e,t,n);Bt=(e.flags&131072)!==0}else Bt=!1,We&&(t.flags&1048576)!==0&&yf(t,Fa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=wi(t.elementType),t.type=e,typeof e=="function")Yi(e)?(r=Si(e,r),t.tag=1,t=z1(null,t,e,r,n)):(t.tag=0,t=Cu(null,t,e,r,n));else{if(e!=null){var s=e.$$typeof;if(s===Y){t.tag=11,t=A1(null,t,e,r,n);break e}else if(s===M){t.tag=14,t=R1(null,t,e,r,n);break e}}throw t=ye(e)||e,Error(a(306,t,""))}}return t;case 0:return Cu(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,s=Si(r,t.pendingProps),z1(e,t,r,s,n);case 3:e:{if(tt(t,t.stateNode.containerInfo),e===null)throw Error(a(387));r=t.pendingProps;var c=t.memoizedState;s=c.element,iu(e,t),Za(t,r,null,n);var _=t.memoizedState;if(r=_.cache,Cl(t,Ot,r),r!==c.cache&&Jc(t,[Ot],n,!0),Wa(),r=_.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:_.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=U1(e,t,r,n);break e}else if(r!==s){s=Qn(Error(a(424)),t),Ga(s),t=U1(e,t,r,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(kt=tr(e.firstChild),Qt=t,We=!0,Al=null,Jn=!0,n=Df(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(_i(),r===s){t=Qr(e,t,n);break e}Zt(e,t,r,n)}t=t.child}return t;case 26:return Ro(e,t),e===null?(n=J0(t.type,null,t.pendingProps,null))?t.memoizedState=n:We||(n=t.type,e=t.pendingProps,r=Xo(we.current).createElement(n),r[vt]=t,r[en]=e,Jt(r,n,e),yt(r),t.stateNode=r):t.memoizedState=J0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return gt(t),e===null&&We&&(r=t.stateNode=Q0(t.type,t.pendingProps,we.current),Qt=t,Jn=!0,s=kt,Gl(t.type)?(vd=s,kt=tr(r.firstChild)):kt=s),Zt(e,t,t.pendingProps.children,n),Ro(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&We&&((s=r=kt)&&(r=l2(r,t.type,t.pendingProps,Jn),r!==null?(t.stateNode=r,Qt=t,kt=tr(r.firstChild),Jn=!1,s=!0):s=!1),s||Rl(t)),gt(t),s=t.type,c=t.pendingProps,_=e!==null?e.memoizedProps:null,r=c.children,md(s,c)?r=null:_!==null&&md(s,_)&&(t.flags|=32),t.memoizedState!==null&&(s=fu(e,t,bp,null,null,n),vs._currentValue=s),Ro(e,t),Zt(e,t,r,n),t.child;case 6:return e===null&&We&&((e=n=kt)&&(n=i2(n,t.pendingProps,Jn),n!==null?(t.stateNode=n,Qt=t,kt=null,e=!0):e=!1),e||Rl(t)),null;case 13:return q1(e,t,n);case 4:return tt(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ki(t,null,r,n):Zt(e,t,r,n),t.child;case 11:return A1(e,t,t.type,t.pendingProps,n);case 7:return Zt(e,t,t.pendingProps,n),t.child;case 8:return Zt(e,t,t.pendingProps.children,n),t.child;case 12:return Zt(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Cl(t,t.type,r.value),Zt(e,t,r.children,n),t.child;case 9:return s=t.type._context,r=t.pendingProps.children,bi(t),s=Wt(s),r=r(s),t.flags|=1,Zt(e,t,r,n),t.child;case 14:return R1(e,t,t.type,t.pendingProps,n);case 15:return C1(e,t,t.type,t.pendingProps,n);case 19:return P1(e,t,n);case 31:return Mp(e,t,n);case 22:return D1(e,t,n,t.pendingProps);case 24:return bi(t),r=Wt(Ot),e===null?(s=nu(),s===null&&(s=pt,c=eu(),s.pooledCache=c,c.refCount++,c!==null&&(s.pooledCacheLanes|=n),s=c),t.memoizedState={parent:r,cache:s},lu(t),Cl(t,Ot,s)):((e.lanes&n)!==0&&(iu(e,t),Za(t,null,null,n),Wa()),s=e.memoizedState,c=t.memoizedState,s.parent!==r?(s={parent:r,cache:r},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Cl(t,Ot,r)):(r=c.cache,Cl(t,Ot,r),r!==s.cache&&Jc(t,[Ot],n,!0))),Zt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(a(156,t.tag))}function Wr(e){e.flags|=4}function Hu(e,t,n,r,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(p0())e.flags|=8192;else throw xi=go,ru}else e.flags&=-16777217}function V1(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!lm(t))if(p0())e.flags|=8192;else throw xi=go,ru}function Do(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?An():536870912,e.lanes|=t,ca|=t)}function ls(e,t){if(!We)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Et(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&65011712,r|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function jp(e,t,n){var r=t.pendingProps;switch(Xc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(t),null;case 1:return Et(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Yr(Ot),Me(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Qi(t)?Wr(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Qc())),Et(t),null;case 26:var s=t.type,c=t.memoizedState;return e===null?(Wr(t),c!==null?(Et(t),V1(t,c)):(Et(t),Hu(t,s,null,r,n))):c?c!==e.memoizedState?(Wr(t),Et(t),V1(t,c)):(Et(t),t.flags&=-16777217):(e=e.memoizedProps,e!==r&&Wr(t),Et(t),Hu(t,s,e,r,n)),null;case 27:if(je(t),n=we.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Wr(t);else{if(!r){if(t.stateNode===null)throw Error(a(166));return Et(t),null}e=fe.current,Qi(t)?xf(t):(e=Q0(s,r,n),t.stateNode=e,Wr(t))}return Et(t),null;case 5:if(je(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Wr(t);else{if(!r){if(t.stateNode===null)throw Error(a(166));return Et(t),null}if(c=fe.current,Qi(t))xf(t);else{var _=Xo(we.current);switch(c){case 1:c=_.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:c=_.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":c=_.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":c=_.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":c=_.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?_.createElement(s,{is:r.is}):_.createElement(s)}}c[vt]=t,c[en]=r;e:for(_=t.child;_!==null;){if(_.tag===5||_.tag===6)c.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===t)break e;for(;_.sibling===null;){if(_.return===null||_.return===t)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}t.stateNode=c;e:switch(Jt(c,s,r),s){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Wr(t)}}return Et(t),Hu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Wr(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(a(166));if(e=we.current,Qi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,s=Qt,s!==null)switch(s.tag){case 27:case 5:r=s.memoizedProps}e[vt]=t,e=!!(e.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||q0(e.nodeValue,n)),e||Rl(t,!0)}else e=Xo(e).createTextNode(r),e[vt]=t,t.stateNode=e}return Et(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Qi(t),n!==null){if(e===null){if(!r)throw Error(a(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[vt]=t}else _i(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Et(t),e=!1}else n=Qc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(qn(t),t):(qn(t),null);if((t.flags&128)!==0)throw Error(a(558))}return Et(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(a(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(a(317));s[vt]=t}else _i(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Et(t),s=!1}else s=Qc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(qn(t),t):(qn(t),null)}return qn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,s=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(s=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==s&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Do(t,t.updateQueue),Et(t),null);case 4:return Me(),e===null&&od(t.stateNode.containerInfo),Et(t),null;case 10:return Yr(t.type),Et(t),null;case 19:if(J(jt),r=t.memoizedState,r===null)return Et(t),null;if(s=(t.flags&128)!==0,c=r.rendering,c===null)if(s)ls(r,!1);else{if(Nt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=yo(e),c!==null){for(t.flags|=128,ls(r,!1),e=c.updateQueue,t.updateQueue=e,Do(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)_f(n,e),n=n.sibling;return se(jt,jt.current&1|2),We&&Gr(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Rt()>Uo&&(t.flags|=128,s=!0,ls(r,!1),t.lanes=4194304)}else{if(!s)if(e=yo(c),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Do(t,e),ls(r,!0),r.tail===null&&r.tailMode==="hidden"&&!c.alternate&&!We)return Et(t),null}else 2*Rt()-r.renderingStartTime>Uo&&n!==536870912&&(t.flags|=128,s=!0,ls(r,!1),t.lanes=4194304);r.isBackwards?(c.sibling=t.child,t.child=c):(e=r.last,e!==null?e.sibling=c:t.child=c,r.last=c)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Rt(),e.sibling=null,n=jt.current,se(jt,s?n&1|2:n&1),We&&Gr(t,r.treeForkCount),e):(Et(t),null);case 22:case 23:return qn(t),cu(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(n&536870912)!==0&&(t.flags&128)===0&&(Et(t),t.subtreeFlags&6&&(t.flags|=8192)):Et(t),n=t.updateQueue,n!==null&&Do(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&J(yi),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Yr(Ot),Et(t),null;case 25:return null;case 30:return null}throw Error(a(156,t.tag))}function Ap(e,t){switch(Xc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yr(Ot),Me(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return je(t),null;case 31:if(t.memoizedState!==null){if(qn(t),t.alternate===null)throw Error(a(340));_i()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(qn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));_i()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(jt),null;case 4:return Me(),null;case 10:return Yr(t.type),null;case 22:case 23:return qn(t),cu(),e!==null&&J(yi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Yr(Ot),null;case 25:return null;default:return null}}function F1(e,t){switch(Xc(t),t.tag){case 3:Yr(Ot),Me();break;case 26:case 27:case 5:je(t);break;case 4:Me();break;case 31:t.memoizedState!==null&&qn(t);break;case 13:qn(t);break;case 19:J(jt);break;case 10:Yr(t.type);break;case 22:case 23:qn(t),cu(),e!==null&&J(yi);break;case 24:Yr(Ot)}}function is(e,t){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var s=r.next;n=s;do{if((n.tag&e)===e){r=void 0;var c=n.create,_=n.inst;r=c(),_.destroy=r}n=n.next}while(n!==s)}}catch(y){ot(t,t.return,y)}}function Ul(e,t,n){try{var r=t.updateQueue,s=r!==null?r.lastEffect:null;if(s!==null){var c=s.next;r=c;do{if((r.tag&e)===e){var _=r.inst,y=_.destroy;if(y!==void 0){_.destroy=void 0,s=t;var S=n,F=y;try{F()}catch(te){ot(s,S,te)}}}r=r.next}while(r!==c)}}catch(te){ot(t,t.return,te)}}function G1(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Lf(t,n)}catch(r){ot(e,e.return,r)}}}function $1(e,t,n){n.props=Si(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){ot(e,t,r)}}function as(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n=="function"?e.refCleanup=n(r):n.current=r}}catch(s){ot(e,t,s)}}function Ar(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(s){ot(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){ot(e,t,s)}else n.current=null}function Y1(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(s){ot(e,e.return,s)}}function Pu(e,t,n){try{var r=e.stateNode;Zp(r,e.type,n,t),r[en]=t}catch(s){ot(e,e.return,s)}}function X1(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Gl(e.type)||e.tag===4}function Iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||X1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Gl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ur));else if(r!==4&&(r===27&&Gl(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Vu(e,t,n),e=e.sibling;e!==null;)Vu(e,t,n),e=e.sibling}function Oo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Gl(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Oo(e,t,n),e=e.sibling;e!==null;)Oo(e,t,n),e=e.sibling}function K1(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Jt(t,r,n),t[vt]=e,t[en]=n}catch(c){ot(e,e.return,c)}}var Zr=!1,zt=!1,Fu=!1,Q1=typeof WeakSet=="function"?WeakSet:Set,Yt=null;function Rp(e,t){if(e=e.containerInfo,dd=tc,e=Ha(e),Pa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,c=r.focusNode;r=r.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var _=0,y=-1,S=-1,F=0,te=0,ie=e,G=null;t:for(;;){for(var Z;ie!==n||s!==0&&ie.nodeType!==3||(y=_+s),ie!==c||r!==0&&ie.nodeType!==3||(S=_+r),ie.nodeType===3&&(_+=ie.nodeValue.length),(Z=ie.firstChild)!==null;)G=ie,ie=Z;for(;;){if(ie===e)break t;if(G===n&&++F===s&&(y=_),G===c&&++te===r&&(S=_),(Z=ie.nextSibling)!==null)break;ie=G,G=ie.parentNode}ie=Z}n=y===-1||S===-1?null:{start:y,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(fd={focusedElem:e,selectionRange:n},tc=!1,Yt=t;Yt!==null;)if(t=Yt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Yt=e;else for(;Yt!==null;){switch(t=Yt,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,s=c.memoizedProps,c=c.memoizedState,r=n.stateNode;try{var xe=Si(n.type,s);e=r.getSnapshotBeforeUpdate(xe,c),r.__reactInternalSnapshotBeforeUpdate=e}catch(Oe){ot(n,n.return,Oe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)pd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":pd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=t.sibling,e!==null){e.return=t.return,Yt=e;break}Yt=t.return}}function W1(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:el(e,n),r&4&&is(5,n);break;case 1:if(el(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(_){ot(n,n.return,_)}else{var s=Si(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(_){ot(n,n.return,_)}}r&64&&G1(n),r&512&&as(n,n.return);break;case 3:if(el(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Lf(e,t)}catch(_){ot(n,n.return,_)}}break;case 27:t===null&&r&4&&K1(n);case 26:case 5:el(e,n),t===null&&r&4&&Y1(n),r&512&&as(n,n.return);break;case 12:el(e,n);break;case 31:el(e,n),r&4&&e0(e,n);break;case 13:el(e,n),r&4&&t0(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Hp.bind(null,n),a2(e,n))));break;case 22:if(r=n.memoizedState!==null||Zr,!r){t=t!==null&&t.memoizedState!==null||zt,s=Zr;var c=zt;Zr=r,(zt=t)&&!c?tl(e,n,(n.subtreeFlags&8772)!==0):el(e,n),Zr=s,zt=c}break;case 30:break;default:el(e,n)}}function Z1(e){var t=e.alternate;t!==null&&(e.alternate=null,Z1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&$n(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Tt=null,wn=!1;function Jr(e,t,n){for(n=n.child;n!==null;)J1(e,t,n),n=n.sibling}function J1(e,t,n){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(on,n)}catch{}switch(n.tag){case 26:zt||Ar(n,t),Jr(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:zt||Ar(n,t);var r=Tt,s=wn;Gl(n.type)&&(Tt=n.stateNode,wn=!1),Jr(e,t,n),ps(n.stateNode),Tt=r,wn=s;break;case 5:zt||Ar(n,t);case 6:if(r=Tt,s=wn,Tt=null,Jr(e,t,n),Tt=r,wn=s,Tt!==null)if(wn)try{(Tt.nodeType===9?Tt.body:Tt.nodeName==="HTML"?Tt.ownerDocument.body:Tt).removeChild(n.stateNode)}catch(c){ot(n,t,c)}else try{Tt.removeChild(n.stateNode)}catch(c){ot(n,t,c)}break;case 18:Tt!==null&&(wn?(e=Tt,G0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),_a(e)):G0(Tt,n.stateNode));break;case 4:r=Tt,s=wn,Tt=n.stateNode.containerInfo,wn=!0,Jr(e,t,n),Tt=r,wn=s;break;case 0:case 11:case 14:case 15:Ul(2,n,t),zt||Ul(4,n,t),Jr(e,t,n);break;case 1:zt||(Ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"&&$1(n,t,r)),Jr(e,t,n);break;case 21:Jr(e,t,n);break;case 22:zt=(r=zt)||n.memoizedState!==null,Jr(e,t,n),zt=r;break;default:Jr(e,t,n)}}function e0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_a(e)}catch(n){ot(t,t.return,n)}}}function t0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_a(e)}catch(n){ot(t,t.return,n)}}function Cp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Q1),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Q1),t;default:throw Error(a(435,e.tag))}}function Lo(e,t){var n=Cp(e);t.forEach(function(r){if(!n.has(r)){n.add(r);var s=Pp.bind(null,e,r);r.then(s,s)}})}function xn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r],c=e,_=t,y=_;e:for(;y!==null;){switch(y.tag){case 27:if(Gl(y.type)){Tt=y.stateNode,wn=!1;break e}break;case 5:Tt=y.stateNode,wn=!1;break e;case 3:case 4:Tt=y.stateNode.containerInfo,wn=!0;break e}y=y.return}if(Tt===null)throw Error(a(160));J1(c,_,s),Tt=null,wn=!1,c=s.alternate,c!==null&&(c.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)n0(t,e),t=t.sibling}var hr=null;function n0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xn(t,e),kn(e),r&4&&(Ul(3,e,e.return),is(3,e),Ul(5,e,e.return));break;case 1:xn(t,e),kn(e),r&512&&(zt||n===null||Ar(n,n.return)),r&64&&Zr&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var s=hr;if(xn(t,e),kn(e),r&512&&(zt||n===null||Ar(n,n.return)),r&4){var c=n!==null?n.memoizedState:null;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){e:{r=e.type,n=e.memoizedProps,s=s.ownerDocument||s;t:switch(r){case"title":c=s.getElementsByTagName("title")[0],(!c||c[fl]||c[vt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=s.createElement(r),s.head.insertBefore(c,s.querySelector("head > title"))),Jt(c,r,n),c[vt]=e,yt(c),r=c;break e;case"link":var _=nm("link","href",s).get(r+(n.href||""));if(_){for(var y=0;y<_.length;y++)if(c=_[y],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){_.splice(y,1);break t}}c=s.createElement(r),Jt(c,r,n),s.head.appendChild(c);break;case"meta":if(_=nm("meta","content",s).get(r+(n.content||""))){for(y=0;y<_.length;y++)if(c=_[y],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){_.splice(y,1);break t}}c=s.createElement(r),Jt(c,r,n),s.head.appendChild(c);break;default:throw Error(a(468,r))}c[vt]=e,yt(c),r=c}e.stateNode=r}else rm(s,e.type,e.stateNode);else e.stateNode=tm(s,r,e.memoizedProps);else c!==r?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,r===null?rm(s,e.type,e.stateNode):tm(s,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Pu(e,e.memoizedProps,n.memoizedProps)}break;case 27:xn(t,e),kn(e),r&512&&(zt||n===null||Ar(n,n.return)),n!==null&&r&4&&Pu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(xn(t,e),kn(e),r&512&&(zt||n===null||Ar(n,n.return)),e.flags&32){s=e.stateNode;try{vl(s,"")}catch(xe){ot(e,e.return,xe)}}r&4&&e.stateNode!=null&&(s=e.memoizedProps,Pu(e,s,n!==null?n.memoizedProps:s)),r&1024&&(Fu=!0);break;case 6:if(xn(t,e),kn(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(xe){ot(e,e.return,xe)}}break;case 3:if(Wo=null,s=hr,hr=Ko(t.containerInfo),xn(t,e),hr=s,kn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_a(t.containerInfo)}catch(xe){ot(e,e.return,xe)}Fu&&(Fu=!1,r0(e));break;case 4:r=hr,hr=Ko(e.stateNode.containerInfo),xn(t,e),kn(e),hr=r;break;case 12:xn(t,e),kn(e);break;case 31:xn(t,e),kn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Lo(e,r)));break;case 13:xn(t,e),kn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(zo=Rt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Lo(e,r)));break;case 22:s=e.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,F=Zr,te=zt;if(Zr=F||s,zt=te||S,xn(t,e),zt=te,Zr=F,kn(e),r&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||S||Zr||zt||Ti(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){S=n=t;try{if(c=S.stateNode,s)_=c.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{y=S.stateNode;var ie=S.memoizedProps.style,G=ie!=null&&ie.hasOwnProperty("display")?ie.display:null;y.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(xe){ot(S,S.return,xe)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=s?"":S.memoizedProps}catch(xe){ot(S,S.return,xe)}}}else if(t.tag===18){if(n===null){S=t;try{var Z=S.stateNode;s?$0(Z,!0):$0(S.stateNode,!1)}catch(xe){ot(S,S.return,xe)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Lo(e,n))));break;case 19:xn(t,e),kn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Lo(e,r)));break;case 30:break;case 21:break;default:xn(t,e),kn(e)}}function kn(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(X1(r)){n=r;break}r=r.return}if(n==null)throw Error(a(160));switch(n.tag){case 27:var s=n.stateNode,c=Iu(e);Oo(e,c,s);break;case 5:var _=n.stateNode;n.flags&32&&(vl(_,""),n.flags&=-33);var y=Iu(e);Oo(e,y,_);break;case 3:case 4:var S=n.stateNode.containerInfo,F=Iu(e);Vu(e,F,S);break;default:throw Error(a(161))}}catch(te){ot(e,e.return,te)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function r0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;r0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function el(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)W1(e,t.alternate,t),t=t.sibling}function Ti(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ul(4,t,t.return),Ti(t);break;case 1:Ar(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&$1(t,t.return,n),Ti(t);break;case 27:ps(t.stateNode);case 26:case 5:Ar(t,t.return),Ti(t);break;case 22:t.memoizedState===null&&Ti(t);break;case 30:Ti(t);break;default:Ti(t)}e=e.sibling}}function tl(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,s=e,c=t,_=c.flags;switch(c.tag){case 0:case 11:case 15:tl(s,c,n),is(4,c);break;case 1:if(tl(s,c,n),r=c,s=r.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(F){ot(r,r.return,F)}if(r=c,s=r.updateQueue,s!==null){var y=r.stateNode;try{var S=s.shared.hiddenCallbacks;if(S!==null)for(s.shared.hiddenCallbacks=null,s=0;s<S.length;s++)Of(S[s],y)}catch(F){ot(r,r.return,F)}}n&&_&64&&G1(c),as(c,c.return);break;case 27:K1(c);case 26:case 5:tl(s,c,n),n&&r===null&&_&4&&Y1(c),as(c,c.return);break;case 12:tl(s,c,n);break;case 31:tl(s,c,n),n&&_&4&&e0(s,c);break;case 13:tl(s,c,n),n&&_&4&&t0(s,c);break;case 22:c.memoizedState===null&&tl(s,c,n),as(c,c.return);break;case 30:break;default:tl(s,c,n)}t=t.sibling}}function Gu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&$a(n))}function $u(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$a(e))}function pr(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)l0(e,t,n,r),t=t.sibling}function l0(e,t,n,r){var s=t.flags;switch(t.tag){case 0:case 11:case 15:pr(e,t,n,r),s&2048&&is(9,t);break;case 1:pr(e,t,n,r);break;case 3:pr(e,t,n,r),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$a(e)));break;case 12:if(s&2048){pr(e,t,n,r),e=t.stateNode;try{var c=t.memoizedProps,_=c.id,y=c.onPostCommit;typeof y=="function"&&y(_,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){ot(t,t.return,S)}}else pr(e,t,n,r);break;case 31:pr(e,t,n,r);break;case 13:pr(e,t,n,r);break;case 23:break;case 22:c=t.stateNode,_=t.alternate,t.memoizedState!==null?c._visibility&2?pr(e,t,n,r):ss(e,t):c._visibility&2?pr(e,t,n,r):(c._visibility|=2,aa(e,t,n,r,(t.subtreeFlags&10256)!==0||!1)),s&2048&&Gu(_,t);break;case 24:pr(e,t,n,r),s&2048&&$u(t.alternate,t);break;default:pr(e,t,n,r)}}function aa(e,t,n,r,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,_=t,y=n,S=r,F=_.flags;switch(_.tag){case 0:case 11:case 15:aa(c,_,y,S,s),is(8,_);break;case 23:break;case 22:var te=_.stateNode;_.memoizedState!==null?te._visibility&2?aa(c,_,y,S,s):ss(c,_):(te._visibility|=2,aa(c,_,y,S,s)),s&&F&2048&&Gu(_.alternate,_);break;case 24:aa(c,_,y,S,s),s&&F&2048&&$u(_.alternate,_);break;default:aa(c,_,y,S,s)}t=t.sibling}}function ss(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,s=r.flags;switch(r.tag){case 22:ss(n,r),s&2048&&Gu(r.alternate,r);break;case 24:ss(n,r),s&2048&&$u(r.alternate,r);break;default:ss(n,r)}t=t.sibling}}var os=8192;function sa(e,t,n){if(e.subtreeFlags&os)for(e=e.child;e!==null;)i0(e,t,n),e=e.sibling}function i0(e,t,n){switch(e.tag){case 26:sa(e,t,n),e.flags&os&&e.memoizedState!==null&&v2(n,hr,e.memoizedState,e.memoizedProps);break;case 5:sa(e,t,n);break;case 3:case 4:var r=hr;hr=Ko(e.stateNode.containerInfo),sa(e,t,n),hr=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=os,os=16777216,sa(e,t,n),os=r):sa(e,t,n));break;default:sa(e,t,n)}}function a0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function cs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Yt=r,o0(r,e)}a0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)s0(e),e=e.sibling}function s0(e){switch(e.tag){case 0:case 11:case 15:cs(e),e.flags&2048&&Ul(9,e,e.return);break;case 3:cs(e);break;case 12:cs(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Bo(e)):cs(e);break;default:cs(e)}}function Bo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Yt=r,o0(r,e)}a0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ul(8,t,t.return),Bo(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Bo(t));break;default:Bo(t)}e=e.sibling}}function o0(e,t){for(;Yt!==null;){var n=Yt;switch(n.tag){case 0:case 11:case 15:Ul(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:$a(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Yt=r;else e:for(n=e;Yt!==null;){r=Yt;var s=r.sibling,c=r.return;if(Z1(r),r===n){Yt=null;break e}if(s!==null){s.return=c,Yt=s;break e}Yt=c}}}var Dp={getCacheForType:function(e){var t=Wt(Ot),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Wt(Ot).controller.signal}},Op=typeof WeakMap=="function"?WeakMap:Map,et=0,pt=null,Ye=null,Ke=0,st=0,Hn=null,ql=!1,oa=!1,Yu=!1,nl=0,Nt=0,Hl=0,Mi=0,Xu=0,Pn=0,ca=0,us=null,En=null,Ku=!1,zo=0,c0=0,Uo=1/0,qo=null,Pl=null,Pt=0,Il=null,ua=null,rl=0,Qu=0,Wu=null,u0=null,ds=0,Zu=null;function In(){return(et&2)!==0&&Ke!==0?Ke&-Ke:N.T!==null?ld():Rn()}function d0(){if(Pn===0)if((Ke&536870912)===0||We){var e=lr;lr<<=1,(lr&3932160)===0&&(lr=262144),Pn=e}else Pn=536870912;return e=Un.current,e!==null&&(e.flags|=32),Pn}function Sn(e,t,n){(e===pt&&(st===2||st===9)||e.cancelPendingCommit!==null)&&(da(e,0),Vl(e,Ke,Pn,!1)),Ae(e,n),((et&2)===0||e!==pt)&&(e===pt&&((et&2)===0&&(Mi|=n),Nt===4&&Vl(e,Ke,Pn,!1)),Rr(e))}function f0(e,t,n){if((et&6)!==0)throw Error(a(327));var r=!n&&(t&127)===0&&(t&e.expiredLanes)===0||ir(e,t),s=r?zp(e,t):ed(e,t,!0),c=r;do{if(s===0){oa&&!r&&Vl(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!Lp(n)){s=ed(e,t,!1),c=!1;continue}if(s===2){if(c=t,e.errorRecoveryDisabledLanes&c)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){t=_;e:{var y=e;s=us;var S=y.current.memoizedState.isDehydrated;if(S&&(da(y,_).flags|=256),_=ed(y,_,!1),_!==2){if(Yu&&!S){y.errorRecoveryDisabledLanes|=c,Mi|=c,s=4;break e}c=En,En=s,c!==null&&(En===null?En=c:En.push.apply(En,c))}s=_}if(c=!1,s!==2)continue}}if(s===1){da(e,0),Vl(e,t,0,!0);break}e:{switch(r=e,c=s,c){case 0:case 1:throw Error(a(345));case 4:if((t&4194048)!==t)break;case 6:Vl(r,t,Pn,!ql);break e;case 2:En=null;break;case 3:case 5:break;default:throw Error(a(329))}if((t&62914560)===t&&(s=zo+300-Rt(),10<s)){if(Vl(r,t,Pn,!ql),pn(r,0,!0)!==0)break e;rl=t,r.timeoutHandle=V0(m0.bind(null,r,n,En,qo,Ku,t,Pn,Mi,ca,ql,c,"Throttled",-0,0),s);break e}m0(r,n,En,qo,Ku,t,Pn,Mi,ca,ql,c,null,-0,0)}}break}while(!0);Rr(e)}function m0(e,t,n,r,s,c,_,y,S,F,te,ie,G,Z){if(e.timeoutHandle=-1,ie=t.subtreeFlags,ie&8192||(ie&16785408)===16785408){ie={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ur},i0(t,c,ie);var xe=(c&62914560)===c?zo-Rt():(c&4194048)===c?c0-Rt():0;if(xe=b2(ie,xe),xe!==null){rl=c,e.cancelPendingCommit=xe(w0.bind(null,e,t,c,n,r,s,_,y,S,te,ie,null,G,Z)),Vl(e,c,_,!F);return}}w0(e,t,c,n,r,s,_,y,S)}function Lp(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var s=n[r],c=s.getSnapshot;s=s.value;try{if(!mn(c(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vl(e,t,n,r){t&=~Xu,t&=~Mi,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var s=t;0<s;){var c=31-ct(s),_=1<<c;r[c]=-1,s&=~_}n!==0&&$e(e,n,t)}function Ho(){return(et&6)===0?(fs(0),!1):!0}function Ju(){if(Ye!==null){if(st===0)var e=Ye.return;else e=Ye,$r=vi=null,pu(e),ta=null,Xa=0,e=Ye;for(;e!==null;)F1(e.alternate,e),e=e.return;Ye=null}}function da(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,t2(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),rl=0,Ju(),pt=e,Ye=n=Fr(e.current,null),Ke=t,st=0,Hn=null,ql=!1,oa=ir(e,t),Yu=!1,ca=Pn=Xu=Mi=Hl=Nt=0,En=us=null,Ku=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var s=31-ct(r),c=1<<s;t|=e[s],r&=~c}return nl=t,Kn(),n}function h0(e,t){Ie=null,N.H=ns,t===ea||t===po?(t=Af(),st=3):t===ru?(t=Af(),st=4):st=t===Ru?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Hn=t,Ye===null&&(Nt=1,jo(e,Qn(t,e.current)))}function p0(){var e=Un.current;return e===null?!0:(Ke&4194048)===Ke?er===null:(Ke&62914560)===Ke||(Ke&536870912)!==0?e===er:!1}function g0(){var e=N.H;return N.H=ns,e===null?ns:e}function _0(){var e=N.A;return N.A=Dp,e}function Po(){Nt=4,ql||(Ke&4194048)!==Ke&&Un.current!==null||(oa=!0),(Hl&134217727)===0&&(Mi&134217727)===0||pt===null||Vl(pt,Ke,Pn,!1)}function ed(e,t,n){var r=et;et|=2;var s=g0(),c=_0();(pt!==e||Ke!==t)&&(qo=null,da(e,t)),t=!1;var _=Nt;e:do try{if(st!==0&&Ye!==null){var y=Ye,S=Hn;switch(st){case 8:Ju(),_=6;break e;case 3:case 2:case 9:case 6:Un.current===null&&(t=!0);var F=st;if(st=0,Hn=null,fa(e,y,S,F),n&&oa){_=0;break e}break;default:F=st,st=0,Hn=null,fa(e,y,S,F)}}Bp(),_=Nt;break}catch(te){h0(e,te)}while(!0);return t&&e.shellSuspendCounter++,$r=vi=null,et=r,N.H=s,N.A=c,Ye===null&&(pt=null,Ke=0,Kn()),_}function Bp(){for(;Ye!==null;)v0(Ye)}function zp(e,t){var n=et;et|=2;var r=g0(),s=_0();pt!==e||Ke!==t?(qo=null,Uo=Rt()+500,da(e,t)):oa=ir(e,t);e:do try{if(st!==0&&Ye!==null){t=Ye;var c=Hn;t:switch(st){case 1:st=0,Hn=null,fa(e,t,c,1);break;case 2:case 9:if(Nf(c)){st=0,Hn=null,b0(t);break}t=function(){st!==2&&st!==9||pt!==e||(st=7),Rr(e)},c.then(t,t);break e;case 3:st=7;break e;case 4:st=5;break e;case 7:Nf(c)?(st=0,Hn=null,b0(t)):(st=0,Hn=null,fa(e,t,c,7));break;case 5:var _=null;switch(Ye.tag){case 26:_=Ye.memoizedState;case 5:case 27:var y=Ye;if(_?lm(_):y.stateNode.complete){st=0,Hn=null;var S=y.sibling;if(S!==null)Ye=S;else{var F=y.return;F!==null?(Ye=F,Io(F)):Ye=null}break t}}st=0,Hn=null,fa(e,t,c,5);break;case 6:st=0,Hn=null,fa(e,t,c,6);break;case 8:Ju(),Nt=6;break e;default:throw Error(a(462))}}Up();break}catch(te){h0(e,te)}while(!0);return $r=vi=null,N.H=r,N.A=s,et=n,Ye!==null?0:(pt=null,Ke=0,Kn(),Nt)}function Up(){for(;Ye!==null&&!an();)v0(Ye)}function v0(e){var t=I1(e.alternate,e,nl);e.memoizedProps=e.pendingProps,t===null?Io(e):Ye=t}function b0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=B1(n,t,t.pendingProps,t.type,void 0,Ke);break;case 11:t=B1(n,t,t.pendingProps,t.type.render,t.ref,Ke);break;case 5:pu(t);default:F1(n,t),t=Ye=_f(t,nl),t=I1(n,t,nl)}e.memoizedProps=e.pendingProps,t===null?Io(e):Ye=t}function fa(e,t,n,r){$r=vi=null,pu(t),ta=null,Xa=0;var s=t.return;try{if(Tp(e,s,t,n,Ke)){Nt=1,jo(e,Qn(n,e.current)),Ye=null;return}}catch(c){if(s!==null)throw Ye=s,c;Nt=1,jo(e,Qn(n,e.current)),Ye=null;return}t.flags&32768?(We||r===1?e=!0:oa||(Ke&536870912)!==0?e=!1:(ql=e=!0,(r===2||r===9||r===3||r===6)&&(r=Un.current,r!==null&&r.tag===13&&(r.flags|=16384))),y0(t,e)):Io(t)}function Io(e){var t=e;do{if((t.flags&32768)!==0){y0(t,ql);return}e=t.return;var n=jp(t.alternate,t,nl);if(n!==null){Ye=n;return}if(t=t.sibling,t!==null){Ye=t;return}Ye=t=e}while(t!==null);Nt===0&&(Nt=5)}function y0(e,t){do{var n=Ap(e.alternate,e);if(n!==null){n.flags&=32767,Ye=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ye=e;return}Ye=e=n}while(e!==null);Nt=6,Ye=null}function w0(e,t,n,r,s,c,_,y,S){e.cancelPendingCommit=null;do Vo();while(Pt!==0);if((et&6)!==0)throw Error(a(327));if(t!==null){if(t===e.current)throw Error(a(177));if(c=t.lanes|t.childLanes,c|=_t,nt(e,n,c,_,y,S),e===pt&&(Ye=pt=null,Ke=0),ua=t,Il=e,rl=n,Qu=c,Wu=s,u0=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ip(sn,function(){return T0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=N.T,N.T=null,s=P.p,P.p=2,_=et,et|=4;try{Rp(e,t,n)}finally{et=_,P.p=s,N.T=r}}Pt=1,x0(),k0(),E0()}}function x0(){if(Pt===1){Pt=0;var e=Il,t=ua,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=N.T,N.T=null;var r=P.p;P.p=2;var s=et;et|=4;try{n0(t,e);var c=fd,_=Ha(e.containerInfo),y=c.focusedElem,S=c.selectionRange;if(_!==y&&y&&y.ownerDocument&&Bn(y.ownerDocument.documentElement,y)){if(S!==null&&Pa(y)){var F=S.start,te=S.end;if(te===void 0&&(te=F),"selectionStart"in y)y.selectionStart=F,y.selectionEnd=Math.min(te,y.value.length);else{var ie=y.ownerDocument||document,G=ie&&ie.defaultView||window;if(G.getSelection){var Z=G.getSelection(),xe=y.textContent.length,Oe=Math.min(S.start,xe),mt=S.end===void 0?Oe:Math.min(S.end,xe);!Z.extend&&Oe>mt&&(_=mt,mt=Oe,Oe=_);var L=Gi(y,Oe),R=Gi(y,mt);if(L&&R&&(Z.rangeCount!==1||Z.anchorNode!==L.node||Z.anchorOffset!==L.offset||Z.focusNode!==R.node||Z.focusOffset!==R.offset)){var I=ie.createRange();I.setStart(L.node,L.offset),Z.removeAllRanges(),Oe>mt?(Z.addRange(I),Z.extend(R.node,R.offset)):(I.setEnd(R.node,R.offset),Z.addRange(I))}}}}for(ie=[],Z=y;Z=Z.parentNode;)Z.nodeType===1&&ie.push({element:Z,left:Z.scrollLeft,top:Z.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<ie.length;y++){var re=ie[y];re.element.scrollLeft=re.left,re.element.scrollTop=re.top}}tc=!!dd,fd=dd=null}finally{et=s,P.p=r,N.T=n}}e.current=t,Pt=2}}function k0(){if(Pt===2){Pt=0;var e=Il,t=ua,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=N.T,N.T=null;var r=P.p;P.p=2;var s=et;et|=4;try{W1(e,t.alternate,t)}finally{et=s,P.p=r,N.T=n}}Pt=3}}function E0(){if(Pt===4||Pt===3){Pt=0,Tn();var e=Il,t=ua,n=rl,r=u0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Pt=5:(Pt=0,ua=Il=null,S0(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Pl=null),_r(n),t=t.stateNode,Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(on,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=N.T,s=P.p,P.p=2,N.T=null;try{for(var c=e.onRecoverableError,_=0;_<r.length;_++){var y=r[_];c(y.value,{componentStack:y.stack})}}finally{N.T=t,P.p=s}}(rl&3)!==0&&Vo(),Rr(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===Zu?ds++:(ds=0,Zu=e):ds=0,fs(0)}}function S0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,$a(t)))}function Vo(){return x0(),k0(),E0(),T0()}function T0(){if(Pt!==5)return!1;var e=Il,t=Qu;Qu=0;var n=_r(rl),r=N.T,s=P.p;try{P.p=32>n?32:n,N.T=null,n=Wu,Wu=null;var c=Il,_=rl;if(Pt=0,ua=Il=null,rl=0,(et&6)!==0)throw Error(a(331));var y=et;if(et|=4,s0(c.current),l0(c,c.current,_,n),et=y,fs(0,!1),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(on,c)}catch{}return!0}finally{P.p=s,N.T=r,S0(e,t)}}function M0(e,t,n){t=Qn(n,t),t=Au(e.stateNode,t,2),e=Ll(e,t,2),e!==null&&(Ae(e,2),Rr(e))}function ot(e,t,n){if(e.tag===3)M0(e,e,n);else for(;t!==null;){if(t.tag===3){M0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pl===null||!Pl.has(r))){e=Qn(n,e),n=N1(2),r=Ll(t,n,2),r!==null&&(j1(n,r,t,e),Ae(r,2),Rr(r));break}}t=t.return}}function td(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Op;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(Yu=!0,s.add(n),e=qp.bind(null,e,t,n),t.then(e,e))}function qp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,pt===e&&(Ke&n)===n&&(Nt===4||Nt===3&&(Ke&62914560)===Ke&&300>Rt()-zo?(et&2)===0&&da(e,0):Xu|=n,ca===Ke&&(ca=0)),Rr(e)}function N0(e,t){t===0&&(t=An()),e=yn(e,t),e!==null&&(Ae(e,t),Rr(e))}function Hp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),N0(e,n)}function Pp(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(t),N0(e,n)}function Ip(e,t){return qe(e,t)}var Fo=null,ma=null,nd=!1,Go=!1,rd=!1,Fl=0;function Rr(e){e!==ma&&e.next===null&&(ma===null?Fo=ma=e:ma=ma.next=e),Go=!0,nd||(nd=!0,Fp())}function fs(e,t){if(!rd&&Go){rd=!0;do for(var n=!1,r=Fo;r!==null;){if(e!==0){var s=r.pendingLanes;if(s===0)var c=0;else{var _=r.suspendedLanes,y=r.pingedLanes;c=(1<<31-ct(42|e)+1)-1,c&=s&~(_&~y),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,C0(r,c))}else c=Ke,c=pn(r,r===pt?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||ir(r,c)||(n=!0,C0(r,c));r=r.next}while(n);rd=!1}}function Vp(){j0()}function j0(){Go=nd=!1;var e=0;Fl!==0&&e2()&&(e=Fl);for(var t=Rt(),n=null,r=Fo;r!==null;){var s=r.next,c=A0(r,t);c===0?(r.next=null,n===null?Fo=s:n.next=s,s===null&&(ma=n)):(n=r,(e!==0||(c&3)!==0)&&(Go=!0)),r=s}Pt!==0&&Pt!==5||fs(e),Fl!==0&&(Fl=0)}function A0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var _=31-ct(c),y=1<<_,S=s[_];S===-1?((y&n)===0||(y&r)!==0)&&(s[_]=ar(y,t)):S<=t&&(e.expiredLanes|=y),c&=~y}if(t=pt,n=Ke,n=pn(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(st===2||st===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ut(r),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ir(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ut(r),_r(n)){case 2:case 8:n=Mn;break;case 32:n=sn;break;case 268435456:n=Nn;break;default:n=sn}return r=R0.bind(null,e),n=qe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ut(r),e.callbackPriority=2,e.callbackNode=null,2}function R0(e,t){if(Pt!==0&&Pt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Vo()&&e.callbackNode!==n)return null;var r=Ke;return r=pn(e,e===pt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(f0(e,r,t),A0(e,Rt()),e.callbackNode!=null&&e.callbackNode===n?R0.bind(null,e):null)}function C0(e,t){if(Vo())return null;f0(e,t,!0)}function Fp(){n2(function(){(et&6)!==0?qe(ol,Vp):j0()})}function ld(){if(Fl===0){var e=Zi;e===0&&(e=$t,$t<<=1,($t&261888)===0&&($t=256)),Fl=e}return Fl}function D0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Li(""+e)}function O0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Gp(e,t,n,r,s){if(t==="submit"&&n&&n.stateNode===s){var c=D0((s[en]||null).action),_=r.submitter;_&&(t=(t=_[en]||null)?D0(t.formAction):_.getAttribute("formAction"),t!==null&&(c=t,_=null));var y=new Ln("action","action",null,r,s);e.push({event:y,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Fl!==0){var S=_?O0(s,_):new FormData(s);Eu(n,{pending:!0,data:S,method:s.method,action:c},null,S)}}else typeof c=="function"&&(y.preventDefault(),S=_?O0(s,_):new FormData(s),Eu(n,{pending:!0,data:S,method:s.method,action:c},c,S))},currentTarget:s}]})}}for(var id=0;id<Ee.length;id++){var ad=Ee[id],$p=ad.toLowerCase(),Yp=ad[0].toUpperCase()+ad.slice(1);De($p,"on"+Yp)}De(m,"onAnimationEnd"),De(b,"onAnimationIteration"),De(k,"onAnimationStart"),De("dblclick","onDoubleClick"),De("focusin","onFocus"),De("focusout","onBlur"),De(O,"onTransitionRun"),De(z,"onTransitionStart"),De(ne,"onTransitionCancel"),De(ge,"onTransitionEnd"),Yn("onMouseEnter",["mouseout","mouseover"]),Yn("onMouseLeave",["mouseout","mouseover"]),Yn("onPointerEnter",["pointerout","pointerover"]),Yn("onPointerLeave",["pointerout","pointerover"]),dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),dn("onBeforeInput",["compositionend","keypress","textInput","paste"]),dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ms));function L0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var c=void 0;if(t)for(var _=r.length-1;0<=_;_--){var y=r[_],S=y.instance,F=y.currentTarget;if(y=y.listener,S!==c&&s.isPropagationStopped())break e;c=y,s.currentTarget=F;try{c(s)}catch(te){lt(te)}s.currentTarget=null,c=S}else for(_=0;_<r.length;_++){if(y=r[_],S=y.instance,F=y.currentTarget,y=y.listener,S!==c&&s.isPropagationStopped())break e;c=y,s.currentTarget=F;try{c(s)}catch(te){lt(te)}s.currentTarget=null,c=S}}}}function Xe(e,t){var n=t[Na];n===void 0&&(n=t[Na]=new Set);var r=e+"__bubble";n.has(r)||(B0(t,e,2,!1),n.add(r))}function sd(e,t,n){var r=0;t&&(r|=4),B0(n,e,r,t)}var $o="_reactListening"+Math.random().toString(36).slice(2);function od(e){if(!e[$o]){e[$o]=!0,ii.forEach(function(n){n!=="selectionchange"&&(Xp.has(n)||sd(n,!1,e),sd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$o]||(t[$o]=!0,sd("selectionchange",!1,t))}}function B0(e,t,n,r){switch(dm(t)){case 2:var s=x2;break;case 8:s=k2;break;default:s=kd}n=s.bind(null,t,n,e),s=void 0,!xl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function cd(e,t,n,r,s){var c=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var y=r.stateNode.containerInfo;if(y===s)break;if(_===4)for(_=r.return;_!==null;){var S=_.tag;if((S===3||S===4)&&_.stateNode.containerInfo===s)return;_=_.return}for(;y!==null;){if(_=wr(y),_===null)return;if(S=_.tag,S===5||S===6||S===26||S===27){r=c=_;continue e}y=y.parentNode}}r=r.return}yl(function(){var F=c,te=oi(n),ie=[];e:{var G=Ue.get(e);if(G!==void 0){var Z=Ln,xe=e;switch(e){case"keypress":if(zi(n)===0)break e;case"keydown":case"keyup":Z=Ys;break;case"focusin":xe="focus",Z=Ca;break;case"focusout":xe="blur",Z=Ca;break;case"beforeblur":case"afterblur":Z=Ca;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=El;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=Nc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=Cc;break;case m:case b:case k:Z=Hi;break;case ge:Z=Ks;break;case"scroll":case"scrollend":Z=Tc;break;case"wheel":Z=La;break;case"copy":case"cut":case"paste":Z=Gs;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=Oa;break;case"toggle":case"beforetoggle":Z=Ws}var Oe=(t&4)!==0,mt=!Oe&&(e==="scroll"||e==="scrollend"),L=Oe?G!==null?G+"Capture":null:G;Oe=[];for(var R=F,I;R!==null;){var re=R;if(I=re.stateNode,re=re.tag,re!==5&&re!==26&&re!==27||I===null||L===null||(re=wl(R,L),re!=null&&Oe.push(hs(R,re,I))),mt)break;R=R.return}0<Oe.length&&(G=new Z(G,xe,null,n,te),ie.push({event:G,listeners:Oe}))}}if((t&7)===0){e:{if(G=e==="mouseover"||e==="pointerover",Z=e==="mouseout"||e==="pointerout",G&&n!==Bi&&(xe=n.relatedTarget||n.fromElement)&&(wr(xe)||xe[br]))break e;if((Z||G)&&(G=te.window===te?te:(G=te.ownerDocument)?G.defaultView||G.parentWindow:window,Z?(xe=n.relatedTarget||n.toElement,Z=F,xe=xe?wr(xe):null,xe!==null&&(mt=h(xe),Oe=xe.tag,xe!==mt||Oe!==5&&Oe!==27&&Oe!==6)&&(xe=null)):(Z=null,xe=F),Z!==xe)){if(Oe=El,re="onMouseLeave",L="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(Oe=Oa,re="onPointerLeave",L="onPointerEnter",R="pointer"),mt=Z==null?G:kr(Z),I=xe==null?G:kr(xe),G=new Oe(re,R+"leave",Z,n,te),G.target=mt,G.relatedTarget=I,re=null,wr(te)===F&&(Oe=new Oe(L,R+"enter",xe,n,te),Oe.target=I,Oe.relatedTarget=mt,re=Oe),mt=re,Z&&xe)t:{for(Oe=Kp,L=Z,R=xe,I=0,re=L;re;re=Oe(re))I++;re=0;for(var Re=R;Re;Re=Oe(Re))re++;for(;0<I-re;)L=Oe(L),I--;for(;0<re-I;)R=Oe(R),re--;for(;I--;){if(L===R||R!==null&&L===R.alternate){Oe=L;break t}L=Oe(L),R=Oe(R)}Oe=null}else Oe=null;Z!==null&&z0(ie,G,Z,Oe,!1),xe!==null&&mt!==null&&z0(ie,mt,xe,Oe,!0)}}e:{if(G=F?kr(F):window,Z=G.nodeName&&G.nodeName.toLowerCase(),Z==="select"||Z==="input"&&G.type==="file")var Ze=qr;else if(no(G))if(za)Ze=Ic;else{Ze=Hc;var Te=ao}else Z=G.nodeName,!Z||Z.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?F&&gn(F.elementType)&&(Ze=qr):Ze=Pc;if(Ze&&(Ze=Ze(e,F))){ro(ie,Ze,n,te);break e}Te&&Te(e,G,F),e==="focusout"&&F&&G.type==="number"&&F.memoizedProps.value!=null&&ai(G,"number",G.value)}switch(Te=F?kr(F):window,e){case"focusin":(no(Te)||Te.contentEditable==="true")&&(Mr=Te,hi=F,Nl=null);break;case"focusout":Nl=hi=Mr=null;break;case"mousedown":$i=!0;break;case"contextmenu":case"mouseup":case"dragend":$i=!1,Hr(ie,n,te);break;case"selectionchange":if(Fc)break;case"keydown":case"keyup":Hr(ie,n,te)}var Ge;if(Pi)e:{switch(e){case"compositionstart":var Qe="onCompositionStart";break e;case"compositionend":Qe="onCompositionEnd";break e;case"compositionupdate":Qe="onCompositionUpdate";break e}Qe=void 0}else Tl?eo(e,n)&&(Qe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Qe="onCompositionStart");Qe&&(Ba&&n.locale!=="ko"&&(Tl||Qe!=="onCompositionStart"?Qe==="onCompositionEnd"&&Tl&&(Ge=Vs()):(dr=te,kl="value"in dr?dr.value:dr.textContent,Tl=!0)),Te=Yo(F,Qe),0<Te.length&&(Qe=new $s(Qe,e,null,n,te),ie.push({event:Qe,listeners:Te}),Ge?Qe.data=Ge:(Ge=to(n),Ge!==null&&(Qe.data=Ge)))),(Ge=Lc?Bc(e,n):zc(e,n))&&(Qe=Yo(F,"onBeforeInput"),0<Qe.length&&(Te=new $s("onBeforeInput","beforeinput",null,n,te),ie.push({event:Te,listeners:Qe}),Te.data=Ge)),Gp(ie,e,F,n,te)}L0(ie,t)})}function hs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yo(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,c=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||c===null||(s=wl(e,n),s!=null&&r.unshift(hs(e,s,c)),s=wl(e,t),s!=null&&r.push(hs(e,s,c))),e.tag===3)return r;e=e.return}return[]}function Kp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function z0(e,t,n,r,s){for(var c=t._reactName,_=[];n!==null&&n!==r;){var y=n,S=y.alternate,F=y.stateNode;if(y=y.tag,S!==null&&S===r)break;y!==5&&y!==26&&y!==27||F===null||(S=F,s?(F=wl(n,c),F!=null&&_.unshift(hs(n,F,S))):s||(F=wl(n,c),F!=null&&_.push(hs(n,F,S)))),n=n.return}_.length!==0&&e.push({event:t,listeners:_})}var Qp=/\r\n?/g,Wp=/\u0000|\uFFFD/g;function U0(e){return(typeof e=="string"?e:""+e).replace(Qp,`
`).replace(Wp,"")}function q0(e,t){return t=U0(t),U0(e)===t}function ft(e,t,n,r,s,c){switch(n){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||vl(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&vl(e,""+r);break;case"className":Dn(e,"class",r);break;case"tabIndex":Dn(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Dn(e,n,r);break;case"style":Oi(e,r,c);break;case"data":if(t!=="object"){Dn(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=Li(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&ft(e,t,"name",s.name,s,null),ft(e,t,"formEncType",s.formEncType,s,null),ft(e,t,"formMethod",s.formMethod,s,null),ft(e,t,"formTarget",s.formTarget,s,null)):(ft(e,t,"encType",s.encType,s,null),ft(e,t,"method",s.method,s,null),ft(e,t,"target",s.target,s,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=Li(""+r),e.setAttribute(n,r);break;case"onClick":r!=null&&(e.onclick=ur);break;case"onScroll":r!=null&&Xe("scroll",e);break;case"onScrollEnd":r!=null&&Xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(n=r.__html,n!=null){if(s.children!=null)throw Error(a(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}n=Li(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":r===!0?e.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Xe("beforetoggle",e),Xe("toggle",e),hl(e,"popover",r);break;case"xlinkActuate":fn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":fn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":fn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":fn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":fn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":fn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":fn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":fn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":fn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":hl(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=ja.get(n)||n,hl(e,n,r))}}function ud(e,t,n,r,s,c){switch(n){case"style":Oi(e,r,c);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(n=r.__html,n!=null){if(s.children!=null)throw Error(a(60));e.innerHTML=n}}break;case"children":typeof r=="string"?vl(e,r):(typeof r=="number"||typeof r=="bigint")&&vl(e,""+r);break;case"onScroll":r!=null&&Xe("scroll",e);break;case"onScrollEnd":r!=null&&Xe("scrollend",e);break;case"onClick":r!=null&&(e.onclick=ur);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Cn.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),c=e[en]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,s),typeof r=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,s);break e}n in e?e[n]=r:r===!0?e.setAttribute(n,""):hl(e,n,r)}}}function Jt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Xe("error",e),Xe("load",e);var r=!1,s=!1,c;for(c in n)if(n.hasOwnProperty(c)){var _=n[c];if(_!=null)switch(c){case"src":r=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:ft(e,t,c,_,n,null)}}s&&ft(e,t,"srcSet",n.srcSet,n,null),r&&ft(e,t,"src",n.src,n,null);return;case"input":Xe("invalid",e);var y=c=_=s=null,S=null,F=null;for(r in n)if(n.hasOwnProperty(r)){var te=n[r];if(te!=null)switch(r){case"name":s=te;break;case"type":_=te;break;case"checked":S=te;break;case"defaultChecked":F=te;break;case"value":c=te;break;case"defaultValue":y=te;break;case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(a(137,t));break;default:ft(e,t,r,te,n,null)}}Ne(e,c,y,S,F,_,s,!1);return;case"select":Xe("invalid",e),r=_=c=null;for(s in n)if(n.hasOwnProperty(s)&&(y=n[s],y!=null))switch(s){case"value":c=y;break;case"defaultValue":_=y;break;case"multiple":r=y;default:ft(e,t,s,y,n,null)}t=c,n=_,e.multiple=!!r,t!=null?_l(e,!!r,t,!1):n!=null&&_l(e,!!r,n,!0);return;case"textarea":Xe("invalid",e),c=s=r=null;for(_ in n)if(n.hasOwnProperty(_)&&(y=n[_],y!=null))switch(_){case"value":r=y;break;case"defaultValue":s=y;break;case"children":c=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(a(91));break;default:ft(e,t,_,y,n,null)}Ps(e,r,s,c);return;case"option":for(S in n)if(n.hasOwnProperty(S)&&(r=n[S],r!=null))switch(S){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:ft(e,t,S,r,n,null)}return;case"dialog":Xe("beforetoggle",e),Xe("toggle",e),Xe("cancel",e),Xe("close",e);break;case"iframe":case"object":Xe("load",e);break;case"video":case"audio":for(r=0;r<ms.length;r++)Xe(ms[r],e);break;case"image":Xe("error",e),Xe("load",e);break;case"details":Xe("toggle",e);break;case"embed":case"source":case"link":Xe("error",e),Xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(F in n)if(n.hasOwnProperty(F)&&(r=n[F],r!=null))switch(F){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:ft(e,t,F,r,n,null)}return;default:if(gn(t)){for(te in n)n.hasOwnProperty(te)&&(r=n[te],r!==void 0&&ud(e,t,te,r,n,void 0));return}}for(y in n)n.hasOwnProperty(y)&&(r=n[y],r!=null&&ft(e,t,y,r,n,null))}function Zp(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,c=null,_=null,y=null,S=null,F=null,te=null;for(Z in n){var ie=n[Z];if(n.hasOwnProperty(Z)&&ie!=null)switch(Z){case"checked":break;case"value":break;case"defaultValue":S=ie;default:r.hasOwnProperty(Z)||ft(e,t,Z,null,r,ie)}}for(var G in r){var Z=r[G];if(ie=n[G],r.hasOwnProperty(G)&&(Z!=null||ie!=null))switch(G){case"type":c=Z;break;case"name":s=Z;break;case"checked":F=Z;break;case"defaultChecked":te=Z;break;case"value":_=Z;break;case"defaultValue":y=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(a(137,t));break;default:Z!==ie&&ft(e,t,G,Z,r,ie)}}Er(e,_,y,S,F,te,c,s);return;case"select":Z=_=y=G=null;for(c in n)if(S=n[c],n.hasOwnProperty(c)&&S!=null)switch(c){case"value":break;case"multiple":Z=S;default:r.hasOwnProperty(c)||ft(e,t,c,null,r,S)}for(s in r)if(c=r[s],S=n[s],r.hasOwnProperty(s)&&(c!=null||S!=null))switch(s){case"value":G=c;break;case"defaultValue":y=c;break;case"multiple":_=c;default:c!==S&&ft(e,t,s,c,r,S)}t=y,n=_,r=Z,G!=null?_l(e,!!n,G,!1):!!r!=!!n&&(t!=null?_l(e,!!n,t,!0):_l(e,!!n,n?[]:"",!1));return;case"textarea":Z=G=null;for(y in n)if(s=n[y],n.hasOwnProperty(y)&&s!=null&&!r.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:ft(e,t,y,null,r,s)}for(_ in r)if(s=r[_],c=n[_],r.hasOwnProperty(_)&&(s!=null||c!=null))switch(_){case"value":G=s;break;case"defaultValue":Z=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(a(91));break;default:s!==c&&ft(e,t,_,s,r,c)}Hs(e,G,Z);return;case"option":for(var xe in n)if(G=n[xe],n.hasOwnProperty(xe)&&G!=null&&!r.hasOwnProperty(xe))switch(xe){case"selected":e.selected=!1;break;default:ft(e,t,xe,null,r,G)}for(S in r)if(G=r[S],Z=n[S],r.hasOwnProperty(S)&&G!==Z&&(G!=null||Z!=null))switch(S){case"selected":e.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:ft(e,t,S,G,r,Z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Oe in n)G=n[Oe],n.hasOwnProperty(Oe)&&G!=null&&!r.hasOwnProperty(Oe)&&ft(e,t,Oe,null,r,G);for(F in r)if(G=r[F],Z=n[F],r.hasOwnProperty(F)&&G!==Z&&(G!=null||Z!=null))switch(F){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(a(137,t));break;default:ft(e,t,F,G,r,Z)}return;default:if(gn(t)){for(var mt in n)G=n[mt],n.hasOwnProperty(mt)&&G!==void 0&&!r.hasOwnProperty(mt)&&ud(e,t,mt,void 0,r,G);for(te in r)G=r[te],Z=n[te],!r.hasOwnProperty(te)||G===Z||G===void 0&&Z===void 0||ud(e,t,te,G,r,Z);return}}for(var L in n)G=n[L],n.hasOwnProperty(L)&&G!=null&&!r.hasOwnProperty(L)&&ft(e,t,L,null,r,G);for(ie in r)G=r[ie],Z=n[ie],!r.hasOwnProperty(ie)||G===Z||G==null&&Z==null||ft(e,t,ie,G,r,Z)}function H0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Jp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var s=n[r],c=s.transferSize,_=s.initiatorType,y=s.duration;if(c&&y&&H0(_)){for(_=0,y=s.responseEnd,r+=1;r<n.length;r++){var S=n[r],F=S.startTime;if(F>y)break;var te=S.transferSize,ie=S.initiatorType;te&&H0(ie)&&(S=S.responseEnd,_+=te*(S<y?1:(y-F)/(S-F)))}if(--r,t+=8*(c+_)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var dd=null,fd=null;function Xo(e){return e.nodeType===9?e:e.ownerDocument}function P0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function I0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function md(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hd=null;function e2(){var e=window.event;return e&&e.type==="popstate"?e===hd?!1:(hd=e,!0):(hd=null,!1)}var V0=typeof setTimeout=="function"?setTimeout:void 0,t2=typeof clearTimeout=="function"?clearTimeout:void 0,F0=typeof Promise=="function"?Promise:void 0,n2=typeof queueMicrotask=="function"?queueMicrotask:typeof F0<"u"?function(e){return F0.resolve(null).then(e).catch(r2)}:V0;function r2(e){setTimeout(function(){throw e})}function Gl(e){return e==="head"}function G0(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(r===0){e.removeChild(s),_a(t);return}r--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")r++;else if(n==="html")ps(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ps(n);for(var c=n.firstChild;c;){var _=c.nextSibling,y=c.nodeName;c[fl]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=_}}else n==="body"&&ps(e.ownerDocument.body);n=s}while(n);_a(t)}function $0(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=r}while(n)}function pd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":pd(n),$n(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function l2(e,t,n,r){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[fl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=tr(e.nextSibling),e===null)break}return null}function i2(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=tr(e.nextSibling),e===null))return null;return e}function Y0(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=tr(e.nextSibling),e===null))return null;return e}function gd(e){return e.data==="$?"||e.data==="$~"}function _d(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function a2(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function tr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var vd=null;function X0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return tr(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function K0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Q0(e,t,n){switch(t=Xo(n),e){case"html":if(e=t.documentElement,!e)throw Error(a(452));return e;case"head":if(e=t.head,!e)throw Error(a(453));return e;case"body":if(e=t.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function ps(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);$n(e)}var nr=new Map,W0=new Set;function Ko(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ll=P.d;P.d={f:s2,r:o2,D:c2,C:u2,L:d2,m:f2,X:h2,S:m2,M:p2};function s2(){var e=ll.f(),t=Ho();return e||t}function o2(e){var t=xr(e);t!==null&&t.tag===5&&t.type==="form"?h1(t):ll.r(e)}var ha=typeof document>"u"?null:document;function Z0(e,t,n){var r=ha;if(r&&typeof t=="string"&&t){var s=qt(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),W0.has(s)||(W0.add(s),e={rel:e,crossOrigin:n,href:t},r.querySelector(s)===null&&(t=r.createElement("link"),Jt(t,"link",e),yt(t),r.head.appendChild(t)))}}function c2(e){ll.D(e),Z0("dns-prefetch",e,null)}function u2(e,t){ll.C(e,t),Z0("preconnect",e,t)}function d2(e,t,n){ll.L(e,t,n);var r=ha;if(r&&e&&t){var s='link[rel="preload"][as="'+qt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+qt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+qt(n.imageSizes)+'"]')):s+='[href="'+qt(e)+'"]';var c=s;switch(t){case"style":c=pa(e);break;case"script":c=ga(e)}nr.has(c)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),nr.set(c,e),r.querySelector(s)!==null||t==="style"&&r.querySelector(gs(c))||t==="script"&&r.querySelector(_s(c))||(t=r.createElement("link"),Jt(t,"link",e),yt(t),r.head.appendChild(t)))}}function f2(e,t){ll.m(e,t);var n=ha;if(n&&e){var r=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+qt(r)+'"][href="'+qt(e)+'"]',c=s;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=ga(e)}if(!nr.has(c)&&(e=w({rel:"modulepreload",href:e},t),nr.set(c,e),n.querySelector(s)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(_s(c)))return}r=n.createElement("link"),Jt(r,"link",e),yt(r),n.head.appendChild(r)}}}function m2(e,t,n){ll.S(e,t,n);var r=ha;if(r&&e){var s=or(r).hoistableStyles,c=pa(e);t=t||"default";var _=s.get(c);if(!_){var y={loading:0,preload:null};if(_=r.querySelector(gs(c)))y.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=nr.get(c))&&bd(e,n);var S=_=r.createElement("link");yt(S),Jt(S,"link",e),S._p=new Promise(function(F,te){S.onload=F,S.onerror=te}),S.addEventListener("load",function(){y.loading|=1}),S.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Qo(_,t,r)}_={type:"stylesheet",instance:_,count:1,state:y},s.set(c,_)}}}function h2(e,t){ll.X(e,t);var n=ha;if(n&&e){var r=or(n).hoistableScripts,s=ga(e),c=r.get(s);c||(c=n.querySelector(_s(s)),c||(e=w({src:e,async:!0},t),(t=nr.get(s))&&yd(e,t),c=n.createElement("script"),yt(c),Jt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(s,c))}}function p2(e,t){ll.M(e,t);var n=ha;if(n&&e){var r=or(n).hoistableScripts,s=ga(e),c=r.get(s);c||(c=n.querySelector(_s(s)),c||(e=w({src:e,async:!0,type:"module"},t),(t=nr.get(s))&&yd(e,t),c=n.createElement("script"),yt(c),Jt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(s,c))}}function J0(e,t,n,r){var s=(s=we.current)?Ko(s):null;if(!s)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=pa(n.href),n=or(s).hoistableStyles,r=n.get(t),r||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=pa(n.href);var c=or(s).hoistableStyles,_=c.get(e);if(_||(s=s.ownerDocument||s,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,_),(c=s.querySelector(gs(e)))&&!c._p&&(_.instance=c,_.state.loading=5),nr.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},nr.set(e,n),c||g2(s,e,n,_.state))),t&&r===null)throw Error(a(528,""));return _}if(t&&r!==null)throw Error(a(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ga(n),n=or(s).hoistableScripts,r=n.get(t),r||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function pa(e){return'href="'+qt(e)+'"'}function gs(e){return'link[rel="stylesheet"]['+e+"]"}function em(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function g2(e,t,n,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),Jt(t,"link",n),yt(t),e.head.appendChild(t))}function ga(e){return'[src="'+qt(e)+'"]'}function _s(e){return"script[async]"+e}function tm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+qt(n.href)+'"]');if(r)return t.instance=r,yt(r),r;var s=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),yt(r),Jt(r,"style",s),Qo(r,n.precedence,e),t.instance=r;case"stylesheet":s=pa(n.href);var c=e.querySelector(gs(s));if(c)return t.state.loading|=4,t.instance=c,yt(c),c;r=em(n),(s=nr.get(s))&&bd(r,s),c=(e.ownerDocument||e).createElement("link"),yt(c);var _=c;return _._p=new Promise(function(y,S){_.onload=y,_.onerror=S}),Jt(c,"link",r),t.state.loading|=4,Qo(c,n.precedence,e),t.instance=c;case"script":return c=ga(n.src),(s=e.querySelector(_s(c)))?(t.instance=s,yt(s),s):(r=n,(s=nr.get(c))&&(r=w({},n),yd(r,s)),e=e.ownerDocument||e,s=e.createElement("script"),yt(s),Jt(s,"link",r),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(a(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,Qo(r,n.precedence,e));return t.instance}function Qo(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=r.length?r[r.length-1]:null,c=s,_=0;_<r.length;_++){var y=r[_];if(y.dataset.precedence===t)c=y;else if(c!==s)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function bd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function yd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Wo=null;function nm(e,t,n){if(Wo===null){var r=new Map,s=Wo=new Map;s.set(n,r)}else s=Wo,r=s.get(n),r||(r=new Map,s.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var c=n[s];if(!(c[fl]||c[vt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var _=c.getAttribute(t)||"";_=e+_;var y=r.get(_);y?y.push(c):r.set(_,[c])}}return r}function rm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function _2(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function lm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function v2(e,t,n,r){if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=pa(r.href),c=t.querySelector(gs(s));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Zo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,yt(c);return}c=t.ownerDocument||t,r=em(r),(s=nr.get(s))&&bd(r,s),c=c.createElement("link"),yt(c);var _=c;_._p=new Promise(function(y,S){_.onload=y,_.onerror=S}),Jt(c,"link",r),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Zo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var wd=0;function b2(e,t){return e.stylesheets&&e.count===0&&ec(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ec(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&wd===0&&(wd=62500*Jp());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ec(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>wd?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(s)}}:null}function Zo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ec(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Jo=null;function ec(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Jo=new Map,t.forEach(y2,e),Jo=null,Zo.call(e))}function y2(e,t){if(!(t.state.loading&4)){var n=Jo.get(e);if(n)var r=n.get(null);else{n=new Map,Jo.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<s.length;c++){var _=s[c];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(n.set(_.dataset.precedence,_),r=_)}r&&n.set(null,r)}s=t.instance,_=s.getAttribute("data-precedence"),c=n.get(_)||r,c===r&&n.set(null,s),n.set(_,s),this.count++,r=Zo.bind(this),s.addEventListener("load",r),s.addEventListener("error",r),c?c.parentNode.insertBefore(s,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var vs={$$typeof:ce,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function w2(e,t,n,r,s,c,_,y,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ue(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ue(0),this.hiddenUpdates=ue(null),this.identifierPrefix=r,this.onUncaughtError=s,this.onCaughtError=c,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function im(e,t,n,r,s,c,_,y,S,F,te,ie){return e=new w2(e,t,n,_,S,F,te,ie,y),t=1,c===!0&&(t|=24),c=Ht(3,null,null,t),e.current=c,c.stateNode=e,t=eu(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:r,isDehydrated:n,cache:t},lu(c),e}function am(e){return e?(e=mr,e):mr}function sm(e,t,n,r,s,c){s=am(s),r.context===null?r.context=s:r.pendingContext=s,r=Ol(t),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Ll(e,r,t),n!==null&&(Sn(n,e,t),Qa(n,e,t))}function om(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xd(e,t){om(e,t),(e=e.alternate)&&om(e,t)}function cm(e){if(e.tag===13||e.tag===31){var t=yn(e,67108864);t!==null&&Sn(t,e,67108864),xd(e,67108864)}}function um(e){if(e.tag===13||e.tag===31){var t=In();t=St(t);var n=yn(e,t);n!==null&&Sn(n,e,t),xd(e,t)}}var tc=!0;function x2(e,t,n,r){var s=N.T;N.T=null;var c=P.p;try{P.p=2,kd(e,t,n,r)}finally{P.p=c,N.T=s}}function k2(e,t,n,r){var s=N.T;N.T=null;var c=P.p;try{P.p=8,kd(e,t,n,r)}finally{P.p=c,N.T=s}}function kd(e,t,n,r){if(tc){var s=Ed(r);if(s===null)cd(e,t,r,nc,n),fm(e,r);else if(S2(s,e,t,n,r))r.stopPropagation();else if(fm(e,r),t&4&&-1<E2.indexOf(e)){for(;s!==null;){var c=xr(s);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var _=un(c.pendingLanes);if(_!==0){var y=c;for(y.pendingLanes|=2,y.entangledLanes|=2;_;){var S=1<<31-ct(_);y.entanglements[1]|=S,_&=~S}Rr(c),(et&6)===0&&(Uo=Rt()+500,fs(0))}}break;case 31:case 13:y=yn(c,2),y!==null&&Sn(y,c,2),Ho(),xd(c,2)}if(c=Ed(r),c===null&&cd(e,t,r,nc,n),c===s)break;s=c}s!==null&&r.stopPropagation()}else cd(e,t,r,null,n)}}function Ed(e){return e=oi(e),Sd(e)}var nc=null;function Sd(e){if(nc=null,e=wr(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=f(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return nc=e,null}function dm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(rr()){case ol:return 2;case Mn:return 8;case sn:case Gn:return 32;case Nn:return 268435456;default:return 32}default:return 32}}var Td=!1,$l=null,Yl=null,Xl=null,bs=new Map,ys=new Map,Kl=[],E2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function fm(e,t){switch(e){case"focusin":case"focusout":$l=null;break;case"dragenter":case"dragleave":Yl=null;break;case"mouseover":case"mouseout":Xl=null;break;case"pointerover":case"pointerout":bs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ys.delete(t.pointerId)}}function ws(e,t,n,r,s,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:c,targetContainers:[s]},t!==null&&(t=xr(t),t!==null&&cm(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function S2(e,t,n,r,s){switch(t){case"focusin":return $l=ws($l,e,t,n,r,s),!0;case"dragenter":return Yl=ws(Yl,e,t,n,r,s),!0;case"mouseover":return Xl=ws(Xl,e,t,n,r,s),!0;case"pointerover":var c=s.pointerId;return bs.set(c,ws(bs.get(c)||null,e,t,n,r,s)),!0;case"gotpointercapture":return c=s.pointerId,ys.set(c,ws(ys.get(c)||null,e,t,n,r,s)),!0}return!1}function mm(e){var t=wr(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,sr(e.priority,function(){um(n)});return}}else if(t===31){if(t=f(n),t!==null){e.blockedOn=t,sr(e.priority,function(){um(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ed(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bi=r,n.target.dispatchEvent(r),Bi=null}else return t=xr(n),t!==null&&cm(t),e.blockedOn=n,!1;t.shift()}return!0}function hm(e,t,n){rc(e)&&n.delete(t)}function T2(){Td=!1,$l!==null&&rc($l)&&($l=null),Yl!==null&&rc(Yl)&&(Yl=null),Xl!==null&&rc(Xl)&&(Xl=null),bs.forEach(hm),ys.forEach(hm)}function lc(e,t){e.blockedOn===t&&(e.blockedOn=null,Td||(Td=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,T2)))}var ic=null;function pm(e){ic!==e&&(ic=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){ic===e&&(ic=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],s=e[t+2];if(typeof r!="function"){if(Sd(r||n)===null)continue;break}var c=xr(n);c!==null&&(e.splice(t,3),t-=3,Eu(c,{pending:!0,data:s,method:n.method,action:r},r,s))}}))}function _a(e){function t(S){return lc(S,e)}$l!==null&&lc($l,e),Yl!==null&&lc(Yl,e),Xl!==null&&lc(Xl,e),bs.forEach(t),ys.forEach(t);for(var n=0;n<Kl.length;n++){var r=Kl[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Kl.length&&(n=Kl[0],n.blockedOn===null);)mm(n),n.blockedOn===null&&Kl.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var s=n[r],c=n[r+1],_=s[en]||null;if(typeof c=="function")_||pm(n);else if(_){var y=null;if(c&&c.hasAttribute("formAction")){if(s=c,_=c[en]||null)y=_.formAction;else if(Sd(s)!==null)continue}else y=_.action;typeof y=="function"?n[r+1]=y:(n.splice(r,3),r-=3),pm(n)}}}function gm(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(_){return s=_})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Md(e){this._internalRoot=e}ac.prototype.render=Md.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));var n=t.current,r=In();sm(n,r,e,t,null,null)},ac.prototype.unmount=Md.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sm(e.current,2,null,e,null,null),Ho(),t[br]=null}};function ac(e){this._internalRoot=e}ac.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rn();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kl.length&&t!==0&&t<Kl[n].priority;n++);Kl.splice(n,0,e),n===0&&mm(e)}};var _m=l.version;if(_m!=="19.2.7")throw Error(a(527,_m,"19.2.7"));P.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=v(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var M2={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{on=sc.inject(M2),Vt=sc}catch{}}return ks.createRoot=function(e,t){if(!u(e))throw Error(a(299));var n=!1,r="",s=E1,c=S1,_=T1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(_=t.onRecoverableError)),t=im(e,1,!1,null,null,n,r,null,s,c,_,gm),e[br]=t.current,od(e),new Md(t)},ks.hydrateRoot=function(e,t,n){if(!u(e))throw Error(a(299));var r=!1,s="",c=E1,_=S1,y=T1,S=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(_=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.formState!==void 0&&(S=n.formState)),t=im(e,1,!0,t,n??null,r,s,S,c,_,y,gm),t.context=am(null),n=t.current,r=In(),r=St(r),s=Ol(r),s.callback=null,Ll(n,s,r),n=r,t.current.lanes=n,Ae(t,n),Rr(t),e[br]=t.current,od(e),new ac(t)},ks.version="19.2.7",ks}var Mm;function U2(){if(Mm)return Ad.exports;Mm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),Ad.exports=z2(),Ad.exports}var q2=U2();const H2=Oh(q2),Nm=i=>{let l;const o=new Set,a=(v,x)=>{const w=typeof v=="function"?v(l):v;if(!Object.is(w,l)){const E=l;l=x??(typeof w!="object"||w===null)?w:Object.assign({},l,w),o.forEach(j=>j(l,E))}},u=()=>l,f={setState:a,getState:u,getInitialState:()=>g,subscribe:v=>(o.add(v),()=>o.delete(v))},g=l=i(a,u,f);return f},P2=(i=>i?Nm(i):Nm),I2=i=>i;function V2(i,l=I2){const o=js.useSyncExternalStore(i.subscribe,js.useCallback(()=>l(i.getState()),[i,l]),js.useCallback(()=>l(i.getInitialState()),[i,l]));return js.useDebugValue(o),o}const jm=i=>{const l=P2(i),o=a=>V2(l,a);return Object.assign(o,l),o},F2=(i=>i?jm(i):jm);function G2(){const i=new Uint8Array(16);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(i);else for(let o=0;o<i.length;o+=1)i[o]=Math.floor(Math.random()*256);let l="";for(const o of i)l+=o.toString(16).padStart(2,"0");return l}const of="pkp.user",cf="pkp.savedDevices",uf="pkp.ideDrafts",df="pkp.ideSettings",Os="Prototype Version 0.6.7";function xc(i){try{const l=localStorage.getItem(i);return l?JSON.parse(l):null}catch{return null}}function kc(i,l){try{localStorage.setItem(i,JSON.stringify(l))}catch{}}function $2(){const i=xc(of);return i&&typeof i.username=="string"&&typeof i.userID=="string"?i:null}function Od(i){kc(of,i)}function _c(){return Y2(xc(cf)??[])}function Bh(i,l){return i.deviceID===l.deviceID?!0:!!i.ownerID&&i.ownerID===l.ownerID&&!!i.deviceName&&!!l.deviceName&&i.deviceName.toLowerCase()===l.deviceName.toLowerCase()}function Y2(i){const l=[];for(const o of i){const a=l.findIndex(u=>Bh(u,o));a>=0?l[a]=o:l.push(o)}return l}function xa(i){kc(cf,i)}function X2(){xa([])}function K2(){try{localStorage.removeItem(of),localStorage.removeItem(cf),localStorage.removeItem(uf),localStorage.removeItem(df)}catch{}}function oc(){var i;return((i=xc(uf))==null?void 0:i.filter(l=>l.path&&typeof l.content=="string"))??[]}function va(i){kc(uf,i)}function Am(){const i=xc(df)??{};return{clearTerminalOnRun:!!i.clearTerminalOnRun,simplifiedErrors:i.simplifiedErrors!==!1}}function Q2(i){kc(df,i)}function Ld(i){const l=_c().filter(o=>!Bh(o,i));return l.push(i),xa(l),l}function W2(i){const l=_c().filter(o=>o.deviceID!==i);return xa(l),l}const fc="b8e06067-62ad-41ba-9231-206ae80ab551",Z2="f897177b-aee8-4767-8ecc-cc694fd5fce0",J2="f897177b-aee8-4767-8ecc-cc694fd5fce1",Bd=20,eg=12,tg=new TextEncoder;function ng(i){return new Promise(l=>setTimeout(l,i))}function Ec(){return typeof navigator<"u"&&"bluetooth"in navigator}function rg(i){return i?i.startsWith("PicoW-")?i.slice(6):i:"Pico"}async function lg(i){if(!Ec())throw new Error("Web Bluetooth er ikke tilgængelig i denne browser.");const l=i?[{services:[fc],name:`PicoW-${i}`}]:[{services:[fc]},{namePrefix:"PicoW-"}];return navigator.bluetooth.requestDevice({filters:l,optionalServices:[fc]})}async function zh(){if(!Ec()||!navigator.bluetooth.getDevices)return[];try{return await navigator.bluetooth.getDevices()}catch{return[]}}class ig{constructor(){be(this,"device",null);be(this,"writeChar",null);be(this,"notifyChar",null);be(this,"buffer","");be(this,"decoder",new TextDecoder);be(this,"writeQueue",Promise.resolve());be(this,"disconnectNotified",!1);be(this,"onLine",()=>{});be(this,"onDisconnect",()=>{});be(this,"handleNotification",l=>{const o=l.target;if(!(o!=null&&o.value))return;this.buffer+=this.decoder.decode(o.value.buffer,{stream:!0});let a=this.buffer.indexOf(`
`);for(;a>=0;){const u=this.buffer.slice(0,a).trim();this.buffer=this.buffer.slice(a+1),u&&this.onLine(u),a=this.buffer.indexOf(`
`)}});be(this,"handleDisconnected",()=>{var l;this.disconnectNotified||(this.disconnectNotified=!0,(l=this.device)==null||l.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.writeChar=null,this.notifyChar=null,this.onDisconnect())})}get connected(){var l,o;return!!((o=(l=this.device)==null?void 0:l.gatt)!=null&&o.connected)}async connect(l){var u;this.device&&this.device!==l&&this.device.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.device=l,this.buffer="",this.decoder=new TextDecoder,this.disconnectNotified=!1,l.removeEventListener("gattserverdisconnected",this.handleDisconnected),l.addEventListener("gattserverdisconnected",this.handleDisconnected);const o=await((u=l.gatt)==null?void 0:u.connect());if(!o)throw new Error("Kunne ikke åbne Bluetooth-forbindelsen.");const a=await o.getPrimaryService(fc);this.writeChar=await a.getCharacteristic(Z2),this.notifyChar=await a.getCharacteristic(J2),await this.notifyChar.startNotifications(),this.notifyChar.addEventListener("characteristicvaluechanged",this.handleNotification)}writeLine(l){const o=this.writeQueue.then(()=>this.doWrite(l));return this.writeQueue=o.catch(()=>{}),o}async doWrite(l){if(!this.writeChar)throw new Error("Ingen forbindelse.");const o=tg.encode(`${l}
`),u=this.writeChar.properties.writeWithoutResponse&&typeof this.writeChar.writeValueWithoutResponse=="function"?this.writeChar.writeValueWithoutResponse.bind(this.writeChar):this.writeChar.writeValue.bind(this.writeChar);for(let h=0;h<o.length;h+=Bd){const p=o.slice(h,h+Bd);await u(p),h+Bd<o.length&&await ng(eg)}}disconnect(){var o;const l=this.device;(o=l==null?void 0:l.gatt)!=null&&o.connected?l.gatt.disconnect():this.handleDisconnected()}}class ag{constructor(l,o){be(this,"send");be(this,"onMessage");be(this,"inActive",!1);be(this,"inExpectedTotal",0);be(this,"inStreamId",0);be(this,"inParts",new Map);be(this,"inProgress",null);be(this,"outPendingLines",null);be(this,"outWaitingAck",!1);be(this,"outStreamId",0);be(this,"outNextStreamId",1);be(this,"outCache",new Map);be(this,"outProgress",null);be(this,"outResolve",null);be(this,"outReject",null);this.send=l,this.onMessage=o}reset(){this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear(),this.inProgress=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outStreamId=0,this.outCache.clear(),this.outProgress=null,this.outResolve=null,this.outReject=null}handleLine(l){var a;if(l.startsWith("prep,")){const u=l.split(","),h=u.length>=2&&/^\d+$/.test(u[1])?parseInt(u[1],10):null,p=u.length>=3&&/^\d+$/.test(u[2])?parseInt(u[2],10):0;h!==null&&h>0&&(this.inActive=!0,this.inExpectedTotal=h,this.inStreamId=p,this.inParts.clear(),this.send(p>0?`ack:prep,${p}`:"ack:prep"));return}if(l==="ack:prep"||l===`ack:prep,${this.outStreamId}`){this.flushOutbound();return}if(l.startsWith("miss,")){const u=l.split(",");if(u.length>=3&&/^\d+$/.test(u[1])&&/^\d+$/.test(u[2])){const h=parseInt(u[1],10),p=parseInt(u[2],10),f=this.outCache.get(p);h===this.outStreamId&&f&&this.send(f)}return}const o=this.parseNumbered(l);if(o){const{idx:u,payload:h}=o;if(!this.inActive){this.onMessage(h);return}this.inParts.has(u)||(this.inParts.set(u,h),(a=this.inProgress)==null||a.call(this,this.inParts.size,this.inExpectedTotal));let p=0;for(let f=1;f<=this.inExpectedTotal;f+=1)if(!this.inParts.has(f)){p=f;break}if(p>0&&this.inStreamId>0&&u>p&&this.send(`miss,${this.inStreamId},${p}`),this.inParts.size>=this.inExpectedTotal){for(let f=1;f<=this.inExpectedTotal;f+=1){const g=this.inParts.get(f);g!==void 0&&this.onMessage(g)}this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear()}return}this.onMessage(l)}setInboundProgress(l){this.inProgress=l}async sendReliable(l,o){if(this.outPendingLines!==null||this.outWaitingAck)throw new Error("Reliable stream is already sending.");const a=l.length===0?[""]:l;this.outPendingLines=[...a],this.outWaitingAck=!0,this.outProgress=o??null,this.outStreamId=this.outNextStreamId,this.outNextStreamId+=1,this.outCache.clear();const u=new Promise((h,p)=>{this.outResolve=h,this.outReject=p});try{await this.send(`prep,${a.length},${this.outStreamId}`)}catch(h){throw this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null,h}await u}async flushOutbound(){var l,o,a,u;if(!this.outWaitingAck||this.outPendingLines===null){this.outWaitingAck=!1,this.outProgress=null,(l=this.outResolve)==null||l.call(this),this.outResolve=null,this.outReject=null;return}try{const h=this.outPendingLines.length;for(let p=0;p<h;p+=1){const f=this.outPendingLines[p],g=`${p+1}-${f}`;this.outCache.set(p+1,g),await this.send(g),(o=this.outProgress)==null||o.call(this,p+1,h,f)}(a=this.outResolve)==null||a.call(this)}catch(h){(u=this.outReject)==null||u.call(this,h)}finally{this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null}}parseNumbered(l){const o=l.indexOf("-");if(o<=0)return null;const a=l.slice(0,o);if(!/^\d+$/.test(a))return null;const u=parseInt(a,10);return u<1?null:{idx:u,payload:l.slice(o+1)}}}const Sa=11,Ls=31,sg=2,og=60,ka=4,Ea=60;function cg(i,l){return Math.max(14,Math.min(56,Math.min(i,l)*.05))}function Uh(i,l,o=Sa,a=Ls){const u=cg(i,l),h=Math.max(1,i-2*u),p=Math.max(1,l-2*u);return{areaW:i,areaH:l,cols:o,rows:a,margin:u,stepX:h/Math.max(1,o-1),stepY:p/Math.max(1,a-1)}}function qh(i,l){return l.margin+i/2*l.stepX}function Hh(i,l){const o=l.margin+i/2*l.stepY;return l.areaH-o}function As(i,l){return i.centerX2===null||i.centerY2===null||i.spanX===null||i.spanY===null?null:{cx:qh(i.centerX2,l),cy:Hh(i.centerY2,l),width:i.spanX*l.stepX,height:i.spanY*l.stepY}}function ug(i){const l=[];for(let o=0;o<i.cols;o+=1)for(let a=0;a<i.rows;a+=1)l.push({x:i.margin+o*i.stepX,y:i.areaH-(i.margin+a*i.stepY)});return l}function zd(i,l,o,a,u){const h=(g,v,x,w)=>{const E=v%2,j=w*2;let B=E,$=1/0;for(let V=E;V<=j;V+=2){const K=Math.abs(x(V)-g);K<$&&($=K,B=V)}return Math.max(v,Math.min(j-v,B))},p=h(i,o,g=>qh(g,u),u.cols-1),f=h(l,a,g=>Hh(g,u),u.rows-1);return{centerX2:p,centerY2:f}}const ji=6e3,dg=15,fg=650,Rm=2,Cm="",vc=[32,64,128,192],mg=ji*10,hg=3500,pg=8e3,gg=2,_g=ji,vg=ji*8;function Ud(i){return new Promise(l=>setTimeout(l,i))}function ba(i){if(i!=null&&i.aborted)throw new DOMException("BLE file read cancelled","AbortError")}function bg(i){return i instanceof DOMException&&i.name==="AbortError"}function Wl(i){return i.replace(/[\r\n,]/g," ").trim()}function Dm(i){return i.replace(/[\r\n,]/g,"").trim()}class yg{constructor(l={}){be(this,"transport",new ig);be(this,"stream");be(this,"events");be(this,"waiters",[]);be(this,"collectingLayout",!1);be(this,"layoutBuffer",[]);be(this,"layoutResolve",null);be(this,"collectingLines",!1);be(this,"lineBuffer",[]);be(this,"lineResolve",null);be(this,"lineReject",null);be(this,"lineCollectId",0);be(this,"controlPumpActive",!1);be(this,"pendingButtons",[]);be(this,"pendingSliders",new Map);be(this,"pendingToggles",[]);be(this,"pendingJoysticks",new Map);be(this,"pendingDpads",[]);be(this,"expectingDisconnect",!1);be(this,"disconnectMessage",null);be(this,"busy",!1);be(this,"fsCapabilities",null);be(this,"vsendNextId",1);be(this,"vsendLastProcessedId",null);this.events=l,this.stream=new ag(o=>this.transport.writeLine(o),o=>this.onDeviceMessage(o)),this.transport.onLine=o=>this.stream.handleLine(o),this.transport.onDisconnect=()=>this.handleDisconnect()}get device(){return this.transport.device}get deviceName(){var l;return rg((l=this.transport.device)==null?void 0:l.name)}get connected(){return this.transport.connected}setBusy(l){if(this.busy=l,l){this.pendingButtons=[],this.pendingSliders.clear(),this.pendingToggles=[],this.pendingJoysticks.clear(),this.pendingDpads=[];return}this.pumpControls()}log(l,o){var a,u;(u=(a=this.events).onLog)==null||u.call(a,l,o)}progress(l,o){var a,u;(u=(a=this.events).onProgress)==null||u.call(a,l,o)}onDeviceMessage(l){var a,u;if(l==="disconnect"||l==="disconnect_private"){const h=l==="disconnect_private"?"Du blev afbrudt, fordi enheden er privat, og andre brugere ikke må forbinde.":"Enheden afbrød forbindelsen.";this.disconnectMessage=h,this.log("warning",h),this.expectingDisconnect=!0,this.transport.disconnect();return}if(this.collectingLines){if(l==="__END__"){const h=this.lineBuffer;this.lineBuffer=[],this.collectingLines=!1,(a=this.lineResolve)==null||a.call(this,h),this.lineResolve=null;return}this.lineBuffer.push(l);return}if(this.collectingLayout){if(l==="__END__"){const h=this.layoutBuffer;this.layoutBuffer=[],this.collectingLayout=!1,(u=this.layoutResolve)==null||u.call(this,h),this.layoutResolve=null;return}!l.startsWith("ACK")&&!l.startsWith("ERR")&&!l.startsWith("#VERSION")?this.layoutBuffer.push(l):l.startsWith("#VERSION")&&this.layoutBuffer.push(l);return}if(l.startsWith("vsend,")){const h=l.slice(6),p=h.indexOf(","),f=p>=0?h.slice(0,p):h,g=p>=0?h.slice(p+1):"";if(/^\d+$/.test(f)){const v=parseInt(f,10);this.transport.writeLine(`ack:vsend,${v}`),v!==this.vsendLastProcessedId&&(this.vsendLastProcessedId=v,this.onDeviceMessage(g))}return}l.startsWith("ERR")?this.log("error",l):l.startsWith("radar,")?this.handleRadarLine(l):l.startsWith("text,")?this.handleTextLine(l):l.startsWith("toggle_state,")?this.handleToggleStateLine(l):l.startsWith("slider_state,")?this.handleSliderStateLine(l):l.startsWith("plot_clear,")?this.handlePlotClearLine(l):l.startsWith("plot,")?this.handlePlotLine(l):l.startsWith("ACK")||l==="LAYOUT_SAVED"||l.startsWith("READY")?this.log("success",l):this.log("info",`rx: ${l}`);const o=this.waiters.findIndex(h=>h.match(l));if(o>=0){const h=this.waiters[o];this.waiters.splice(o,1),clearTimeout(h.timer),h.resolve(l)}}waitFor(l,o,a){return new Promise((u,h)=>{const p=setTimeout(()=>{const f=this.waiters.findIndex(g=>g.timer===p);f>=0&&this.waiters.splice(f,1),h(new Error(`Timeout: ${a}`))},o);this.waiters.push({match:l,resolve:u,reject:h,timer:p})})}async collectLines(l,o,a,u,h){ba(u);const p=this.lineCollectId+1;this.lineCollectId=p,this.collectingLines=!0,this.lineBuffer=[],this.stream.setInboundProgress(h??null);const f=new Promise((g,v)=>{let x=!1;const w=()=>this.lineCollectId===p,E=()=>{x=!0,w()&&(this.lineReject=null,this.stream.setInboundProgress(null)),u==null||u.removeEventListener("abort",B)},j=K=>{x||(clearTimeout($),w()&&(this.collectingLines=!1,this.lineBuffer=[],this.lineResolve=null),E(),v(K))},B=()=>{j(new DOMException("BLE file read cancelled","AbortError"))},$=setTimeout(()=>{w()&&j(new Error(`Timeout: ${a}`))},o);this.lineResolve=g,this.lineReject=j;const V=this.lineResolve;this.lineResolve=K=>{w()&&(clearTimeout($),E(),V==null||V(K))},u==null||u.addEventListener("abort",B,{once:!0})});return await this.transport.writeLine(l),f}async exchange(l,o,a,u=3){let h;for(let p=1;p<=u;p+=1)try{return await this.transport.writeLine(l),await this.waitFor(o,ji,a)}catch(f){h=f,this.log("warning",`${a}: forsøg ${p}/${u} mislykkedes`)}throw h instanceof Error?h:new Error(`Failed: ${a}`)}async connect(l){this.expectingDisconnect=!1,this.stream.reset(),this.progress(5,"Forbinder til Bluetooth..."),await this.transport.connect(l)}async runHandshake(l){var Y,de,_e,M;await Ud(350),this.progress(18,"Klargør forbindelse..."),this.progress(26,"Sender HELLO..."),await this.exchange("HELLO",q=>q==="ACK:HELLO","HELLO"),this.progress(34,"Forbindelse bekræftet"),this.progress(44,"Spørger om ejerskab...");const o=await this.exchange("who_are_you",q=>q==="unowned"||q.startsWith("unowned,")||q.startsWith("owned,"),"who_are_you");if(this.progress(56,"Ejerskab modtaget"),o==="unowned"||o.startsWith("unowned,"))return{kind:"unowned",deviceName:((Y=o.split(",")[1])==null?void 0:Y.trim())||void 0};const a=o.split(","),u=a[1]??"",h=((de=a[2])==null?void 0:de.trim())??"",p=a[3]!==void 0?parseInt(a[3],10)===1:!0,f=a[4]!==void 0?parseInt(a[4],10)===1:!1,g=a.length>=7,v=g?parseInt(a[5]??"0",10)===1:f,x=((_e=a[g?6:5])==null?void 0:_e.trim())||void 0,w=((M=a[g?7:6])==null?void 0:M.trim())||void 0;await this.exchange("ACK:ownership",q=>q==="READY:permission","ACK:ownership",1),this.progress(66,"Anmoder om adgang...");const E=await this.exchange(`request_permission,${l.userID},${Wl(l.username)}`,q=>q.startsWith("perm,"),"request_permission");this.progress(76,"Adgang vurderet");const j=E.split(",").filter(q=>/^\d+$/.test(q)),B=j.length>=1?parseInt(j[0]??"0",10):0,$=j.length>=2?parseInt(j[1]??"0",10):0,V=j.length>=3?parseInt(j[2]??"0",10):$;if(B===0)return this.expectingDisconnect=!0,this.disconnectMessage="Du kan ikke forbinde, fordi enheden er privat, og andre brugere ikke må forbinde.",{kind:"denied",ownerName:x,canOthersConnect:p};const K=l.userID===u,U=$===1||K,ce=V===1||K;return await this.transport.writeLine("ACK:permission"),{kind:"owned",ownerID:u,ownerName:x,deviceName:w,icon:h,canEdit:U,canEditCode:ce,isOwnedByMe:K,canOthersConnect:p,canOthersEdit:f,canOthersEditCode:v}}async create(l,o,a,u,h,p,f){const g=a?1:0,v=a&&u?1:0,x=a&&h?1:0;await this.exchange(`create,${l.userID},${Wl(l.username)},${Dm(o)},${g},${v},${x},${p},${f}`,w=>w==="ACK:create","create")}async updateDeviceSettings(l,o,a,u,h,p,f){const g=o?1:0,v=o&&a?1:0,x=o&&u?1:0;await this.exchange(`settings_update,${Dm(l)},${g},${v},${x},${h},${p},${Wl(f??"")}`,w=>w==="ACK:settings_update","settings_update",3)}async requestLayout(){this.progress(84,"Henter kontrolpanel..."),this.collectingLayout=!0,this.layoutBuffer=[];const l=new Promise((a,u)=>{this.layoutResolve=a;const h=setTimeout(()=>{this.collectingLayout&&(this.collectingLayout=!1,this.layoutResolve=null,u(new Error("Timeout: layout")))},ji*2),p=this.layoutResolve;this.layoutResolve=f=>{clearTimeout(h),p==null||p(f)}});await this.transport.writeLine("request"),this.progress(92,"Modtager kontrolpanel...");const o=await l;return this.progress(100,"Klar"),o}async saveLayout(l){await this.exchange("update",u=>u==="ACK:update","update",3).catch(()=>{this.log("warning","ACK:update udeblev (fortsætter).")});const o=l.map(u=>{const h=f=>f===null?"n":String(f),p=`update,${u.type},${u.name},${h(u.centerX2)},${h(u.centerY2)},${h(u.spanX)},${h(u.spanY)},${u.rotation}`;return u.type==="slider"?`${p},${u.sliderMin??0},${u.sliderMax??100},${u.sliderRecenter??"none"}`:u.type==="toggle"?`${p},${u.toggleInitial?1:0}`:u.type==="radar"?[p,u.radarMinAngle??0,u.radarMaxAngle??180,u.radarMaxDistance??200,u.radarFadeMs??1200].join(","):u.type==="joystick"?[p,u.joystickXMin??-100,u.joystickXMax??100,u.joystickYMin??-100,u.joystickYMax??100,u.joystickXRecenter??"middle",u.joystickYRecenter??"middle"].join(","):u.type==="plot"?[p,u.plotMin??0,u.plotMax??100,u.plotHistory??30,u.plotStyle??"line",u.plotXAxis??"labels",u.plotYAxis??"range",u.plotLabelMaxPercent??24].join(","):p});o.push("__END__");const a=this.waitFor(u=>u==="LAYOUT_SAVED",ji*2,"LAYOUT_SAVED");await this.stream.sendReliable(o),await a}async listFiles(l="/"){return(await this.collectLines(`fs_list,${Wl(l)}`,ji*3,"fs_list")).filter(a=>a.startsWith("fs_entry,")).map(a=>{const[,u,h,p]=a.split(","),f=u==="file"||u==="dir"?u:"unknown",g=parseInt(p??"",10),v=h||"/";return{name:v.split("/").filter(Boolean).pop()??v,path:v,type:f,...Number.isFinite(g)&&g>=0?{size:g}:{}}})}handleRadarLine(l){var p,f,g;const o=l.split(",");if(o.length<4)return;const a=(p=o[1])==null?void 0:p.trim(),u=parseFloat(o[2]??""),h=parseFloat(o[3]??"");!a||!Number.isFinite(u)||!Number.isFinite(h)||((g=(f=this.events).onRadar)==null||g.call(f,a,u,h),this.log("info",`rx: ${l}`))}handleTextLine(l){var g,v;const o=l.indexOf(","),a=o>=0?l.indexOf(",",o+1):-1;if(o<0||a<0)return;const u=l.slice(o+1,a),h=l.slice(a+1),p=u==null?void 0:u.trim();if(!p)return;const f=h.split(Cm).join(`
`);(v=(g=this.events).onText)==null||v.call(g,p,f),this.log("info",`rx: ${l}`)}handleToggleStateLine(l){var h,p,f;const o=l.split(",");if(o.length<3)return;const a=(h=o[1])==null?void 0:h.trim(),u=parseInt(o[2]??"",10);!a||!Number.isFinite(u)||((f=(p=this.events).onToggleState)==null||f.call(p,a,u===1),this.log("info",`rx: ${l}`))}handleSliderStateLine(l){var h,p,f;const o=l.split(",");if(o.length<3)return;const a=(h=o[1])==null?void 0:h.trim(),u=parseFloat(o[2]??"");!a||!Number.isFinite(u)||((f=(p=this.events).onSliderState)==null||f.call(p,a,u),this.log("info",`rx: ${l}`))}handlePlotLine(l){var p,f,g;const o=l.split(",");if(o.length<3)return;const a=(p=o[1])==null?void 0:p.trim(),u=parseFloat(o[2]??"");if(!a||!Number.isFinite(u))return;const h=o.slice(3).join(",").split(Cm).join(`
`).trim()||void 0;(g=(f=this.events).onPlot)==null||g.call(f,a,u,h),this.log("info",`rx: ${l}`)}handlePlotClearLine(l){var u,h,p;const o=l.split(",");if(o.length<2)return;const a=(u=o[1])==null?void 0:u.trim();a&&((p=(h=this.events).onPlotClear)==null||p.call(h,a),this.log("info",`rx: ${l}`))}async readText(l,o,a){o==null||o(4,"Validerer Picoens Bluetooth-filsystem...");const u=await this.getFilesystemCapabilities(a);return u.pageRead?this.readTextPaged(l,o,a):this.readTextStream(l,u,o,a)}async getFilesystemCapabilities(l){if(this.fsCapabilities)return this.fsCapabilities;const o=await this.collectLines("fs_capabilities",_g,"fs_capabilities",l),a=o.find(x=>x.startsWith("ERR"));if(a)throw new Error(a);const u=o.find(x=>x.startsWith("fs_capabilities,"));if(!u)throw new Error("Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.");const h=u.split(","),p=new Map;for(let x=1;x<h.length-1;x+=2)p.set(h[x],h[x+1]);const f=parseInt(p.get("max_page")??"",10),g=parseInt(p.get("stream_chunk")??"",10),v={version:p.get("version")||void 0,pageRead:p.get("page_read")==="1",maxPageSize:Number.isFinite(f)&&f>0?f:32,streamRead:p.get("stream_read")==="1",streamChunkSize:Number.isFinite(g)&&g>0?g:128};if(!v.pageRead&&!v.streamRead)throw new Error("Picoens Bluetooth-runtime meldte, at file-read ikke er understøttet.");return this.fsCapabilities=v,v}async readTextPaged(l,o,a){const u=await this.getFilesystemCapabilities(a);let h=0,p=wg(u.maxPageSize),f=0,g=null,v="";const x=`Indlæser ${qd(l)}...`;ba(a),o==null||o(5,x);for(let w=0;w<512;w+=1){ba(a),f===0&&(o==null||o(7,x));const j=await this.readPageWithRetry(l,f,h,p,a),B=j.lines;h=j.nextPageSizeIndex,p=j.maxPageSizeIndex,ba(a);const $=B.find(q=>q.startsWith("ERR"));if($)throw new Error($);const V=B.find(q=>q.startsWith("fs_page,"));if(!V)throw new Error("ERR: fs_read_page missing data");const[,K,U,ce,Y=""]=V.split(",",5);if(K!==l)throw new Error("ERR: fs_read_page stale data");const de=parseInt(U??"",10),_e=parseInt(ce??"",10);if(!Number.isFinite(de)||de!==f||!Number.isFinite(_e))throw new Error("ERR: fs_read_page invalid data");g=_e,v+=Y,f+=Math.floor(Y.length/2);const M=g>0?8+Math.min(87,Math.round(f/g*87)):95;if(o==null||o(M,x),f>=g||Y.length===0)return o==null||o(100,"Fil indlæst fra Pico"),new TextDecoder().decode(Lm(v))}throw new Error("ERR: fs_read_page too many pages")}async readPageWithRetry(l,o,a,u,h){let p,f=Math.min(a,u);for(;f>=0;){const g=vc[f],v=f===0?gg:1,x=f===0?pg:hg;for(let w=1;w<=v;w+=1){ba(h);try{return{lines:await this.collectLines(`fs_read_page,${Wl(l)},${o},${g}`,x,`fs_read_page ${o}`,h),nextPageSizeIndex:Math.min(f+1,u),maxPageSizeIndex:u}}catch(E){if(h!=null&&h.aborted||bg(E))throw E;if(p=E,w<v||f>0){const B=f>0&&w>=v?vc[f-1]:g;this.log("warning",`fs_read_page ${o} (${g} bytes) fejlede; prøver ${B} bytes`),await Ud(80+w*80)}}}if(f===0)break;u=Math.max(0,f-1),f=u}throw p instanceof Error?p:new Error(`Timeout: fs_read_page ${o}`)}async readTextStream(l,o,a,u){const h=`Indlæser ${qd(l)}...`,p=Math.max(16,Math.min(192,o.streamChunkSize||128));a==null||a(5,h);const f=await this.collectLines(`fs_read_stream,${Wl(l)},${p}`,vg,`fs_read_stream ${l}`,u,(M,q)=>{const D=8+Math.round(Math.min(M,q)/Math.max(1,q)*87);a==null||a(Math.min(95,D),h)});ba(u);const g=f.find(M=>M.startsWith("ERR"));if(g)throw new Error(g);const v=f.find(M=>M.startsWith("fs_stream_begin,")),x=f.find(M=>M.startsWith("fs_stream_end,"));if(!v||!x)throw new Error("ERR: fs_read_stream missing metadata");const[,w,E]=v.split(",",4),[,j,B,$]=x.split(",",4),V=parseInt(E??"",10),K=parseInt(B??"",10),U=parseInt($??"",10);if(w!==l||j!==l||!Number.isFinite(V)||V!==K||!Number.isFinite(U))throw new Error("ERR: fs_read_stream invalid metadata");let ce=0,Y="";for(const M of f){if(!M.startsWith("fs_stream_chunk,"))continue;const[,q,D=""]=M.split(",",3),Q=parseInt(q??"",10);if(!Number.isFinite(Q)||Q!==ce||D.length%2!==0)throw new Error("ERR: fs_read_stream invalid chunk");Y+=D,ce+=Math.floor(D.length/2)}if(ce!==V)throw new Error("ERR: fs_read_stream size mismatch");const de=Lm(Y);if(Om(de)!==U)throw new Error("ERR: fs_read_stream checksum mismatch");return a==null||a(100,"Fil indlæst fra Pico"),new TextDecoder().decode(de)}async writeText(l,o,a){a==null||a(5,"Klargør BLE-overførsel..."),await this.exchange(`fs_write_begin,${Wl(l)}`,x=>x==="ACK:fs_write_begin","fs_write_begin",2),a==null||a(18,"Pico er klar til filen...");const u=new TextEncoder().encode(o),h=[...u].map(x=>x.toString(16).padStart(2,"0")).join(""),p=[];for(let x=0;x<h.length;x+=160)p.push(`fs_write_chunk,${h.slice(x,x+160)}`);p.push("fs_write_end");const f=Om(u),g=this.waitFor(x=>x==="ACK:fs_write_done"||x.startsWith("ACK:fs_write_done,")||x.startsWith("ERR"),mg,"fs_write_done");a==null||a(u.length===0?85:18,u.length===0?"Sender tom fil via Bluetooth...":`Sender 0/${u.length} bytes via Bluetooth...`),await this.stream.sendReliable(p,(x,w,E)=>{if(!E.startsWith("fs_write_chunk,"))return;const j=Math.min(u.length,x*80),B=18+Math.round(x/Math.max(1,w-1)*67);a==null||a(Math.min(85,B),`Sender ${j}/${u.length} bytes via Bluetooth...`)}),a==null||a(90,"Verificerer BLE-fil...");const v=await g;if(v.startsWith("ERR"))throw new Error(v);if(v.startsWith("ACK:fs_write_done,")){const[,x,w]=v.split(",",3),E=parseInt(x??"",10),j=parseInt(w??"",10);if(E!==u.length||j!==f)throw new Error(`ERR: BLE-verificering fejlede for ${qd(l)}.`)}a==null||a(100,"Gemt på Pico")}async deleteFile(l){const o=await this.exchange(`fs_delete,${Wl(l)}`,a=>a==="ACK:fs_delete"||a.startsWith("ERR"),"fs_delete",2);if(o.startsWith("ERR"))throw new Error(o)}async restart(){await this.exchange("restart",l=>l==="ACK:restart"||l.startsWith("ERR"),"restart",1).catch(()=>{}),this.expectingDisconnect=!0}enqueueButton(l,o){this.busy||(this.pendingButtons.push(`button,${l}:${o?"down":"up"}`),this.pumpControls())}enqueueSlider(l,o){this.busy||(this.pendingSliders.set(l,`slider,${l}:${o}`),this.pumpControls())}enqueueToggle(l,o){this.busy||(this.pendingToggles.push(`toggle,${l}:${o?1:0}`),this.pumpControls())}enqueueJoystick(l,o,a){this.busy||(this.pendingJoysticks.set(l,`joystick,${l}:${Math.round(o)},${Math.round(a)}`),this.pumpControls())}enqueueDpad(l,o,a){this.busy||(this.pendingDpads.push(`dpad,${l}:${o},${a?"down":"up"}`),this.pumpControls())}pumpControls(){this.controlPumpActive||this.busy||!this.transport.connected||(this.controlPumpActive=!0,this.drainControls())}async drainControls(){try{for(;!this.busy&&this.transport.connected;){const l=this.nextControlLine();if(!l)break;l.secure?await this.sendSecureControl(l.line):(await this.transport.writeLine(l.line),this.log("info",`tx: ${l.line}`)),await Ud(dg)}}catch(l){this.log("error",l instanceof Error?l.message:"Kunne ikke sende kommando."),this.handleDisconnect()}finally{this.controlPumpActive=!1,!this.busy&&this.transport.connected&&this.hasPendingControls()&&this.pumpControls()}}async sendSecureControl(l){for(let o=1;o<=Rm;o+=1){if(!this.transport.connected)return;const a=this.vsendNextId;this.vsendNextId+=1,await this.transport.writeLine(`vsend,${a},${l}`),this.log("info",`tx: ${l}`);try{await this.waitFor(u=>u===`ack:vsend,${a}`,fg,`vsend:${l}`);return}catch{this.log("warning",`Ingen bekræftelse for: ${l} (forsøg ${o}/${Rm})`)}}}nextControlLine(){const l=this.pendingButtons.shift();if(l)return{line:l,secure:!0};const o=this.pendingDpads.shift();if(o)return{line:o,secure:!1};const a=this.pendingSliders.entries().next();if(!a.done){const[p,f]=a.value;return this.pendingSliders.delete(p),{line:f,secure:!1}}const u=this.pendingToggles.shift();if(u)return{line:u,secure:!0};const h=this.pendingJoysticks.entries().next();if(!h.done){const[p,f]=h.value;return this.pendingJoysticks.delete(p),{line:f,secure:!1}}return null}hasPendingControls(){return this.pendingButtons.length>0||this.pendingDpads.length>0||this.pendingSliders.size>0||this.pendingToggles.length>0||this.pendingJoysticks.size>0}async disconnect(){if(!this.transport.connected){this.handleDisconnect();return}this.expectingDisconnect=!0;try{await this.exchange("disconnect",l=>l==="ACK:disconnect","disconnect",1)}catch{}this.transport.disconnect()}handleDisconnect(){var o,a,u;for(const h of this.waiters)clearTimeout(h.timer),h.reject(new Error("Forbindelsen blev afbrudt."));this.waiters=[],this.collectingLayout=!1,this.layoutResolve=null,(o=this.lineReject)==null||o.call(this,new Error("Forbindelsen blev afbrudt.")),this.collectingLines=!1,this.lineResolve=null,this.lineReject=null,this.fsCapabilities=null,this.stream.reset(),this.vsendNextId=1,this.vsendLastProcessedId=null;const l=this.disconnectMessage??void 0;this.disconnectMessage=null,(u=(a=this.events).onDisconnect)==null||u.call(a,l)}}function wg(i){let l=0;for(let o=0;o<vc.length;o+=1)vc[o]<=i&&(l=o);return l}function qd(i){return i.replace(/\\/g,"/").replace(/^\/+/,"")||i}function Om(i){let l=0;for(const o of i)l=l+o>>>0;return l}function Lm(i){const l=new Uint8Array(Math.floor(i.length/2));for(let o=0;o<l.length;o+=1)l[o]=parseInt(i.slice(o*2,o*2+2),16);return l}function Bm(i){const l=(o,a)=>Number.isFinite(o)?Math.max(sg,Math.min(og,o)):a;for(const o of i){const a=o.trim();if(a.startsWith("#GRID,")){const u=a.split(","),h=l(parseInt(u[1],10),Sa),p=l(parseInt(u[2],10),Ls);return{cols:h,rows:p}}}return{cols:Sa,rows:Ls}}function zm(i){const l=new Map;for(const o of i){const a=o.trim();if(!a||a.startsWith("#VERSION")||a==="__END__")continue;const u=a.split(",");if(u.length<7)continue;const[h,p,f,g,v,x,w,E,j,B,$,V,K,U]=u;if(h!=="button"&&h!=="slider"&&h!=="toggle"&&h!=="radar"&&h!=="text"&&h!=="joystick"&&h!=="dpad"&&h!=="plot"||l.has(p))continue;const ce=fe=>{if(fe==="n")return null;const Se=parseInt(fe,10);return Number.isNaN(Se)?null:Se},Y=parseInt(w,10)||0,de=E!==void 0?parseInt(E,10):0,_e=j!==void 0?parseInt(j,10):100,M=["none","bottom","middle","top"].includes(B??"")?B:"none",q=E!==void 0?parseInt(E,10)===1:!1,D=E!==void 0?parseFloat(E):0,Q=j!==void 0?parseFloat(j):180,C=B!==void 0?parseFloat(B):200,ae=$!==void 0?parseInt($,10):1200,le=(fe,Se)=>["none","bottom","middle","top"].includes(fe??"")?fe:Se,ye=E!==void 0?parseInt(E,10):-100,ee=j!==void 0?parseInt(j,10):100,N=B!==void 0?parseInt(B,10):-100,P=$!==void 0?parseInt($,10):100,oe=E!==void 0?parseFloat(E):0,ke=j!==void 0?parseFloat(j):100,ve=B!==void 0?parseInt(B,10):30,T=$==="bar"?"bar":$==="dot"?"dot":"line",J=(fe,Se)=>["range","labels","none"].includes(fe??"")?fe:Se,se=U!==void 0?parseFloat(U):24;l.set(p,{type:h,name:p,centerX2:ce(f),centerY2:ce(g),spanX:ce(v),spanY:ce(x),rotation:[0,90,180,270].includes(Y)?Y:0,...h==="slider"?{sliderMin:Number.isFinite(de)?de:0,sliderMax:Number.isFinite(_e)?_e:100,sliderRecenter:M}:{},...h==="toggle"?{toggleInitial:q}:{},...h==="radar"?{radarMinAngle:Number.isFinite(D)?D:0,radarMaxAngle:Number.isFinite(Q)?Q:180,radarMaxDistance:Number.isFinite(C)&&C>0?C:200,radarFadeMs:Number.isFinite(ae)&&ae>0?ae:1200}:{},...h==="joystick"?{joystickXMin:Number.isFinite(ye)?ye:-100,joystickXMax:Number.isFinite(ee)&&ee!==ye?ee:100,joystickYMin:Number.isFinite(N)?N:-100,joystickYMax:Number.isFinite(P)&&P!==N?P:100,joystickXRecenter:le(V,"middle"),joystickYRecenter:le(K,"middle")}:{},...h==="plot"?{plotMin:Number.isFinite(oe)?oe:0,plotMax:Number.isFinite(ke)&&ke!==oe?ke:oe+100,plotHistory:Number.isFinite(ve)&&ve>1?ve:30,plotStyle:T,plotXAxis:J(V,"labels"),plotYAxis:J(K,"range"),plotLabelMaxPercent:Number.isFinite(se)?Math.max(8,Math.min(45,se)):24}:{}})}return[...l.values()]}const xg=[{slug:"grommet-icons:raspberry",label:"Raspberry Pi",keywords:["raspberry pi","raspberry"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M8.087 0a.67.67 0 0 0-.399.165c-.363-.14-.717-.19-1.032.096c-.486-.063-.643.067-.762.22c-.107-.003-.8-.11-1.117.364c-.798-.095-1.049.47-.763.994c-.163.253-.332.5.048.981c-.134.268-.05.558.267.91c-.084.376.081.641.376.848c-.055.515.472.815.629.922c.06.3.187.584.79.74c.099.447.46.525.811.619c-1.159.673-2.153 1.558-2.146 3.733l-.17.303c-1.328.808-2.524 3.406-.654 5.518c.122.66.326 1.134.508 1.66c.273 2.117 2.054 3.11 2.523 3.227c.688.524 1.422 1.02 2.413 1.369c.935.964 1.946 1.331 3.005 1.331s2.07-.367 3.005-1.331c.992-.348 1.725-.845 2.413-1.37c.47-.117 2.25-1.11 2.523-3.226c.182-.526.386-1 .508-1.66c1.87-2.112.674-4.71-.655-5.518l-.169-.303c.007-2.175-.987-3.06-2.146-3.733c.35-.094.712-.172.812-.619c.602-.156.729-.44.79-.74c.157-.107.683-.407.628-.922c.295-.207.46-.472.376-.848c.318-.352.402-.642.267-.91c.38-.48.212-.728.049-.98c.285-.526.034-1.09-.763-.995c-.318-.474-1.01-.367-1.117-.365c-.12-.152-.277-.282-.763-.22c-.315-.284-.669-.235-1.032-.095A.67.67 0 0 0 16.742 0c-.232-.007-.43.134-.643.202c-.523-.17-.641.061-.898.156c-.569-.12-.742.143-1.015.42l-.32-.007c-.858.506-1.282 1.535-1.452 1.535S11.82 1.277 10.961.771l-.319.006C10.37.501 10.196.238 9.627.358C9.37.263 9.252.031 8.73.202C8.516.134 8.318-.007 8.087 0m.03.609c.436.161.663.37.9.575c.08-.108.202-.188.052-.45c.31.18.544.39.717.625c.191-.122.112-.287.113-.441c.322.262.528.54.778.812c.05-.037.093-.162.132-.358c.768.744 1.852 2.62.279 3.365C9.749 3.633 8.15 2.83 6.38 2.228c2.277 1.174 3.602 2.123 4.327 2.932c-.371 1.49-2.31 1.56-3.019 1.518c.145-.068.266-.15.31-.275c-.179-.127-.81-.013-1.25-.26c.17-.036.249-.069.328-.194c-.416-.132-.864-.248-1.128-.468c.143.002.275.033.46-.095c-.372-.201-.77-.36-1.078-.668c.193-.004.4-.002.46-.073a4.2 4.2 0 0 1-.867-.704c.27.033.382.006.448-.04c-.258-.265-.583-.487-.739-.812c.2.069.383.093.515-.008c-.088-.198-.464-.314-.68-.776c.211.02.436.046.48 0c-.097-.398-.264-.622-.429-.854c.451-.007 1.134.001 1.103-.037l-.279-.285c.44-.118.892.02 1.219.122c.147-.115-.004-.263-.183-.413q.56.076 1.019.255C7.56.945 7.289.799 7.159.65c.578.11.825.263 1.068.417c.177-.169.01-.312-.11-.46m8.594 0c-.12.147-.287.29-.11.46c.244-.155.49-.308 1.068-.418c-.13.148-.401.294-.238.442a4.4 4.4 0 0 1 1.02-.255c-.18.15-.33.298-.184.413c.328-.102.779-.24 1.22-.122l-.28.285c-.03.038.652.03 1.103.037c-.165.232-.331.456-.43.854c.045.046.27.02.48 0c-.215.462-.591.578-.679.776c.132.101.315.077.515.008c-.155.325-.48.547-.738.811c.065.047.178.074.447.041a4.2 4.2 0 0 1-.866.704c.06.07.267.069.46.073c-.31.307-.706.467-1.079.668c.186.128.318.097.46.095c-.264.22-.711.336-1.127.468c.079.125.158.158.327.193c-.44.248-1.071.134-1.249.26c.043.125.164.208.31.276c-.71.041-2.648-.029-3.02-1.518c.726-.81 2.05-1.758 4.328-2.932c-1.772.602-3.37 1.405-4.708 2.509c-1.574-.744-.49-2.62.278-3.365c.04.196.082.32.133.358c.25-.272.455-.55.777-.812c0 .154-.078.32.114.441c.172-.235.406-.446.716-.624c-.15.26-.027.341.053.45c.236-.207.463-.415.899-.576M12.414 6.77c1.359 0 2.492.923 2.494 1.466c.004.68-.994 1.38-2.476 1.398h-.036c-1.482-.018-2.48-.717-2.476-1.398c.003-.543 1.136-1.466 2.494-1.466m-3.813.447h.084q.331 0 .677.059c.777.13-3.72 4.058-3.79 3.182c-.062-2.003 1.278-3.213 3.03-3.241m7.542 0h.084c1.751.028 3.091 1.238 3.03 3.24c-.07.877-4.567-3.05-3.791-3.181q.346-.059.677-.06m-6.825 2.5c.259-.002.521.036.777.122c1.363.458 2.052 2.053 1.54 3.56c-.513 1.509-2.034 2.36-3.398 1.903c-1.363-.458-2.052-2.053-1.54-3.56c.417-1.226 1.498-2.017 2.62-2.025m6.193 0c1.122.008 2.204.8 2.62 2.024c.513 1.508-.176 3.103-1.54 3.56c-1.364.459-2.885-.393-3.398-1.901c-.512-1.508.177-3.103 1.54-3.56c.256-.087.519-.125.778-.123M5.33 11.4c1.062.015.273 5.052-.69 4.624c-1.092-.879-1.444-3.451.582-4.608a.4.4 0 0 1 .082-.014zm14.168 0l.027.002a.4.4 0 0 1 .081.014c2.026 1.157 1.675 3.73.582 4.608c-.963.428-1.752-4.609-.69-4.624m-7.084 3.482a2.8 2.8 0 0 1 1.874.7c.52.47.822 1.14.818 1.811c0 .66-.295 1.313-.8 1.778a2.88 2.88 0 0 1-1.892.739a2.88 2.88 0 0 1-1.892-.739a2.45 2.45 0 0 1-.8-1.778a2.46 2.46 0 0 1 .818-1.81a2.8 2.8 0 0 1 1.874-.7M6.148 16.2c.703-.014 1.568.541 2.268 1.353c.78.94 1.136 2.593.485 3.08c-.617.372-2.115.218-3.178-1.31c-.718-1.282-.624-2.587-.12-2.97q.248-.149.545-.153m12.465 0h.067c.197.004.38.052.546.153c.503.383.597 1.688-.12 2.97c-1.064 1.528-2.562 1.682-3.178 1.31c-.652-.487-.297-2.14.484-3.08c.678-.787 1.51-1.333 2.201-1.353m-6.199 4.504c1.09-.012 2.71.447 2.69 1.032c.017.405-1.312 1.574-2.667 1.516h-.045c-1.356.058-2.685-1.11-2.667-1.516c-.02-.585 1.6-1.044 2.69-1.032"/></svg>'},{slug:"material-symbols:robot",label:"Robot",keywords:["robot"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.413 11.413Q11 10.825 11 10t-.587-1.412T9 8t-1.412.588T7 10t.588 1.413T9 12t1.413-.587m6 0Q17 10.825 17 10t-.587-1.412T15 8t-1.412.588T13 10t.588 1.413T15 12t1.413-.587M9 21v-4h2v4zm4 0v-4h2v4zm-8 0q-.825 0-1.412-.587T3 19V9q0-2.5 1.75-4.25T9 3h6q2.5 0 4.25 1.75T21 9v10q0 .825-.587 1.413T19 21h-2v-4q0-.825-.587-1.412T15 15H9q-.825 0-1.412.588T7 17v4z"/></svg>'},{slug:"material-symbols:robot-outline",label:"Robot Outline",keywords:["robot"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V9q0-2.5 1.75-4.25T9 3h6q2.5 0 4.25 1.75T21 9v10q0 .825-.587 1.413T19 21zm0-2h14V9q0-1.65-1.175-2.825T15 5H9Q7.35 5 6.175 6.175T5 9zm2.588-7.587Q7 10.825 7 10t.588-1.412T9 8t1.413.588T11 10t-.587 1.413T9 12t-1.412-.587m6 0Q13 10.825 13 10t.588-1.412T15 8t1.413.588T17 10t-.587 1.413T15 12t-1.412-.587M7 19v-2q0-.825.588-1.412T9 15h6q.825 0 1.413.588T17 17v2h-2v-2h-2v2h-2v-2H9v2zm-2 0h14z"/></svg>'},{slug:"mdi:robot",label:"Robot",keywords:["robot"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5A2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"/></svg>'},{slug:"mdi:raspberry-pi",label:"Raspberry Pi",keywords:["raspberry pi"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20 8h2v2h-2zM4 5h16a2 2 0 0 1 2 2h-3v2H5v4h3v3h11v1h3a2 2 0 0 1-2 2h-4v1h-2v-1h-3v1H7v-1H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m15 10H9v-5h10v1h3v2h-3zm-6-3v2h2v-2zM5 6v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm5 8h2v2h-2z"/></svg>'},{slug:"mdi:chip",label:"Chip",keywords:["chip"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6 4h12v1h3v2h-3v2h3v2h-3v2h3v2h-3v2h3v2h-3v1H6v-1H3v-2h3v-2H3v-2h3v-2H3V9h3V7H3V5h3zm5 11v3h1v-3zm2 0v3h1v-3zm2 0v3h1v-3z"/></svg>'},{slug:"mingcute:chip-fill",label:"Chip Fill",keywords:["chip"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M15 2a1 1 0 0 1 1 1v1h1a3 3 0 0 1 3 3v1h1a1 1 0 1 1 0 2h-1v4h1a1 1 0 1 1 0 2h-1v1a3 3 0 0 1-3 3h-1v1a1 1 0 1 1-2 0v-1h-4v1a1 1 0 1 1-2 0v-1H7a3 3 0 0 1-3-3v-1H3a1 1 0 1 1 0-2h1v-4H3a1 1 0 0 1 0-2h1V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 2 0v1h4V3a1 1 0 0 1 1-1m-1 6h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2m0 2v4h-4v-4z"/></g></svg>'},{slug:"mingcute:chip-line",label:"Chip Line",keywords:["chip"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M15 2a1 1 0 0 1 1 1v1h1a3 3 0 0 1 3 3v1h1a1 1 0 1 1 0 2h-1v4h1a1 1 0 1 1 0 2h-1v1a3 3 0 0 1-3 3h-1v1a1 1 0 1 1-2 0v-1h-4v1a1 1 0 1 1-2 0v-1H7a3 3 0 0 1-3-3v-1H3a1 1 0 1 1 0-2h1v-4H3a1 1 0 0 1 0-2h1V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 2 0v1h4V3a1 1 0 0 1 1-1m2 4H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1m-3 2a2 2 0 0 1 1.995 1.85L16 10v4a2 2 0 0 1-1.85 1.995L14 16h-4a2 2 0 0 1-1.995-1.85L8 14v-4a2 2 0 0 1 1.85-1.995L10 8zm0 2h-4v4h4z"/></g></svg>'},{slug:"solar:cpu-bold",label:"Cpu Bold",keywords:["cpu"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M9.181 10.181c.053-.053.148-.119.45-.16c.323-.043.761-.044 1.439-.044h1.86c.678 0 1.116.001 1.438.045c.303.04.398.106.45.16c.054.052.12.147.16.45c.044.322.045.76.045 1.438v1.86c0 .678-.001 1.116-.045 1.438c-.04.303-.106.398-.16.45c-.052.054-.147.12-.45.16c-.322.044-.76.045-1.438.045h-1.86c-.678 0-1.116-.001-1.438-.045c-.303-.04-.398-.106-.45-.16c-.054-.052-.12-.147-.16-.45c-.044-.322-.045-.76-.045-1.438v-1.86c0-.678.001-1.116.045-1.438c.04-.303.106-.398.16-.45"/><path fill="currentColor" fill-rule="evenodd" d="M12 3c.385 0 .698.312.698.698v2.79q.764.001 1.395.017V3.698a.698.698 0 0 1 1.395 0v2.79a1 1 0 0 1-.008.108c.936.115 1.585.353 2.078.846s.731 1.142.846 2.078a1 1 0 0 1 .108-.008h2.79a.698.698 0 0 1 0 1.395h-2.807q.017.63.017 1.395h2.79a.698.698 0 0 1 0 1.396h-2.79q-.001.764-.017 1.395h2.807a.698.698 0 0 1 0 1.395h-2.79a1 1 0 0 1-.108-.008c-.115.936-.353 1.585-.846 2.078s-1.142.731-2.078.846q.009.053.008.108v2.79a.698.698 0 0 1-1.395 0v-2.807q-.63.017-1.395.017v2.79a.698.698 0 0 1-1.396 0v-2.79a56 56 0 0 1-1.395-.017v2.807a.698.698 0 0 1-1.395 0v-2.79q0-.056.008-.108c-.936-.115-1.585-.353-2.078-.846s-.731-1.142-.846-2.078a1 1 0 0 1-.108.008h-2.79a.698.698 0 0 1 0-1.395h2.807a56 56 0 0 1-.017-1.395h-2.79a.698.698 0 0 1 0-1.396h2.79q.001-.764.017-1.395H2.698a.698.698 0 0 1 0-1.395h2.79q.056 0 .108.008c.115-.936.353-1.585.846-2.078s1.142-.731 2.078-.846a1 1 0 0 1-.008-.108v-2.79a.698.698 0 0 1 1.395 0v2.807q.63-.017 1.395-.017v-2.79c0-.386.313-.698.698-.698m-.976 5.581c-.619 0-1.152 0-1.578.058c-.458.061-.896.2-1.252.555c-.355.356-.494.794-.555 1.252c-.058.427-.058.96-.058 1.578v1.952c0 .619 0 1.151.058 1.578c.061.458.2.896.555 1.252c.356.355.794.494 1.252.555c.426.058.96.058 1.578.058h1.952c.619 0 1.151 0 1.578-.058c.458-.061.896-.2 1.252-.555c.355-.356.494-.794.555-1.252c.058-.427.058-.96.058-1.578v-1.952c0-.619 0-1.151-.058-1.578c-.061-.458-.2-.896-.555-1.252c-.356-.355-.794-.494-1.252-.555c-.427-.058-.96-.058-1.578-.058z" clip-rule="evenodd"/></svg>'},{slug:"solar:cpu-bold-duotone",label:"Cpu Bold Duotone",keywords:["cpu"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 3c.385 0 .698.312.698.698v2.79q.764.001 1.395.017V3.698a.698.698 0 0 1 1.395 0v2.79a1 1 0 0 1-.008.108c.936.115 1.585.353 2.078.846s.731 1.142.846 2.078a1 1 0 0 1 .108-.008h2.79a.698.698 0 0 1 0 1.395h-2.807q.017.63.017 1.395h2.79a.698.698 0 0 1 0 1.396h-2.79q-.001.764-.017 1.395h2.807a.698.698 0 0 1 0 1.395h-2.79a1 1 0 0 1-.108-.008c-.115.936-.353 1.585-.846 2.078s-1.142.731-2.078.846q.009.053.008.108v2.79a.698.698 0 0 1-1.395 0v-2.807q-.63.017-1.395.017v2.79a.698.698 0 0 1-1.396 0v-2.79a56 56 0 0 1-1.395-.017v2.807a.698.698 0 0 1-1.395 0v-2.79q0-.056.008-.108c-.936-.115-1.585-.353-2.078-.846s-.731-1.142-.846-2.078a1 1 0 0 1-.108.008h-2.79a.698.698 0 0 1 0-1.395h2.807a56 56 0 0 1-.017-1.395h-2.79a.698.698 0 0 1 0-1.396h2.79q.001-.764.017-1.395H2.698a.698.698 0 0 1 0-1.395h2.79q.056 0 .108.008c.115-.936.353-1.585.846-2.078s1.142-.731 2.078-.846a1 1 0 0 1-.008-.108v-2.79a.698.698 0 0 1 1.395 0v2.807q.63-.017 1.395-.017v-2.79c0-.386.313-.698.698-.698m-.976 5.581c-.619 0-1.152 0-1.578.058c-.458.061-.896.2-1.252.555c-.355.356-.494.794-.555 1.252c-.058.427-.058.96-.058 1.578v1.952c0 .619 0 1.151.058 1.578c.061.458.2.896.555 1.252c.356.355.794.494 1.252.555c.426.058.96.058 1.578.058h1.952c.619 0 1.151 0 1.578-.058c.458-.061.896-.2 1.252-.555c.355-.356.494-.794.555-1.252c.058-.427.058-.96.058-1.578v-1.952c0-.619 0-1.151-.058-1.578c-.061-.458-.2-.896-.555-1.252c-.356-.355-.794-.494-1.252-.555c-.427-.058-.96-.058-1.578-.058z" clip-rule="evenodd"/><path fill="currentColor" d="M9.18 10.18c.054-.052.149-.118.451-.159c.323-.043.761-.044 1.439-.044h1.86c.678 0 1.116.001 1.438.044c.303.041.398.107.45.16c.054.053.12.148.16.45c.044.323.045.761.045 1.439v1.86c0 .678-.001 1.116-.045 1.438c-.04.303-.106.398-.16.45c-.052.054-.147.12-.45.16c-.322.044-.76.045-1.438.045h-1.86c-.678 0-1.116-.001-1.439-.045c-.302-.04-.397-.106-.45-.16c-.053-.052-.119-.147-.16-.45c-.043-.322-.044-.76-.044-1.438v-1.86c0-.678.001-1.116.044-1.438c.041-.303.107-.398.16-.451" opacity=".5"/></svg>'},{slug:"solar:cpu-broken",label:"Cpu Broken",keywords:["cpu"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" d="M17 14c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14v-4c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56"/><path d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z"/><path stroke-linecap="round" d="M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2"/></g></svg>'},{slug:"tabler:circuit-bulb",label:"Circuit Bulb",keywords:["circuit"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12h5m10 0h5M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0m1.5-3.5l7 7m0-7l-7 7"/></svg>'},{slug:"tabler:circuit-cell",label:"Circuit Cell",keywords:["circuit"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12h8m4 0h8M10 5v14m4-10v6"/></svg>'},{slug:"ph:head-circuit",label:"Head Circuit",keywords:["circuit"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M192.5 171.47a88.34 88.34 0 0 0 31.5-69.54c-1-45.71-37.61-83.4-83.24-85.8A88 88 0 0 0 48 102l-22.45 43.18c-.09.18-.18.36-.26.54a16 16 0 0 0 7.55 20.62l.25.11L56 176.94V208a16 16 0 0 0 16 16h48a8 8 0 0 0 0-16H72v-36.19a8 8 0 0 0-4.67-7.28L40 152l23.07-44.34A7.9 7.9 0 0 0 64 104a72 72 0 0 1 56-70.21v15.59a24 24 0 1 0 16 0V32c1.3 0 2.6 0 3.9.1A72.26 72.26 0 0 1 203.84 80H184a8 8 0 0 0-6.15 2.88l-25.51 30.62a24.06 24.06 0 1 0 12.28 10.25L187.75 96h19.79q.36 3.12.44 6.3a72.26 72.26 0 0 1-28.78 59.3a8 8 0 0 0-3.14 7.39l8 64a8 8 0 0 0 7.93 7a8 8 0 0 0 1-.06a8 8 0 0 0 6.95-8.93ZM128 80a8 8 0 1 1 8-8a8 8 0 0 1-8 8m16 64a8 8 0 1 1 8-8a8 8 0 0 1-8 8"/></svg>'},{slug:"lucide:microchip",label:"Microchip",keywords:["microchip"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 12h4m-4 5h4M10 7h4m4 5h2m-2 6h2M18 6h2M4 12h2m-2 6h2M4 6h2"/><rect x="6" y="2" rx="2"/></g></svg>'},{slug:"ri:sensor-fill",label:"Sensor Fill",keywords:["sensor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6 8v2h12V8h-3V2h2v4h5v2h-2v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V2h2v6zm7-6v6h-2V2z"/></svg>'},{slug:"ri:sensor-line",label:"Sensor Line",keywords:["sensor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6 8v11h12V8h-3V2h2v4h5v2h-2v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V2h2v6zm7-6v6h-2V2z"/></svg>'},{slug:"material-symbols:door-sensor",label:"Door Sensor",keywords:["sensor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M9 21q-.825 0-1.412-.587T7 19v-2h5q.825 0 1.413-.587T14 15t-.587-1.412T12 13H7V5q0-.825.588-1.412T9 3h6q.825 0 1.413.588T17 5v14q0 .825-.587 1.413T15 21zm-4-5q-.425 0-.712-.288T4 15t.288-.712T5 14h7q.425 0 .713.288T13 15t-.288.713T12 16zm7.713-6.288Q13 9.425 13 9t-.288-.712T12 8t-.712.288T11 9t.288.713T12 10t.713-.288m6.575-1Q19 8.426 19 8V4q0-.425.288-.712T20 3t.713.288T21 4v4q0 .425-.288.713T20 9t-.712-.288"/></svg>'},{slug:"mdi:motor",label:"Motor",keywords:["motor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 4v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"/></svg>'},{slug:"mdi:motor-outline",label:"Motor Outline",keywords:["motor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8 10h8v8h-5l-2-2H7v-5m0-7v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"/></svg>'},{slug:"mdi:motor-off",label:"Motor Off",keywords:["motor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3.78 2.5L21.5 20.22l-1.27 1.28L18 19.27V20h-8l-2-2H5v-3H3v3H1v-8h2v3h2v-3l1.87-1.86L2.5 3.77zM20 9v3h-2V8h-6V6h3V4H7.82l15 15H23V9z"/></svg>'},{slug:"mdi:engine",label:"Engine",keywords:["engine"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 4v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"/></svg>'},{slug:"mdi:engine-outline",label:"Engine Outline",keywords:["engine"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8 10h8v8h-5l-2-2H7v-5m0-7v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"/></svg>'},{slug:"tabler:engine",label:"Engine",keywords:["engine"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10v6m9-11v3m-2-3h4m-9 8H3m3-3h2l2-2h3.382a1 1 0 0 1 .894.553l1.448 2.894a1 1 0 0 0 .894.553H18v-2h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2v-2h-3v2a1 1 0 0 1-1 1h-3.465a1 1 0 0 1-.832-.445L8 16H6z"/></svg>'},{slug:"mdi:car",label:"Car",keywords:["car"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m5 11l1.5-4.5h11L19 11m-1.5 5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-11 0A1.5 1.5 0 0 1 5 14.5A1.5 1.5 0 0 1 6.5 13A1.5 1.5 0 0 1 8 14.5A1.5 1.5 0 0 1 6.5 16M18.92 6c-.2-.58-.76-1-1.42-1h-11c-.66 0-1.22.42-1.42 1L3 12v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8z"/></svg>'},{slug:"mdi:car-outline",label:"Car Outline",keywords:["car"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18.9 6c-.2-.6-.8-1-1.4-1h-11c-.7 0-1.2.4-1.4 1L3 12v8c0 .5.5 1 1 1h1c.6 0 1-.5 1-1v-1h12v1c0 .5.5 1 1 1h1c.5 0 1-.5 1-1v-8zM6.8 7h10.3l1.1 3H5.8zM19 17H5v-5h14zM7.5 13c.8 0 1.5.7 1.5 1.5S8.3 16 7.5 16S6 15.3 6 14.5S6.7 13 7.5 13m9 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5"/></svg>'},{slug:"tabler:car",label:"Car",keywords:["car"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"/><path d="M5 17H3v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0H9m-6-6h15m-6 0V6"/></g></svg>'},{slug:"mdi:tank",label:"Tank",keywords:["tank"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20 12H4v-1h2l1-5h5l1 5h7zm-6.78-5l.4 2H22V7zM22 16a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3M6 16a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1m7 0a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1m7 0a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1"/></svg>'},{slug:"tabler:tank",label:"Tank",keywords:["tank"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 15a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3m4-3l1-5h5l3 5m6-3h-7.8"/></svg>'},{slug:"mingcute:tank-fill",label:"Tank Fill",keywords:["tank"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M7 7a3 3 0 0 1 3-3h1.53a5 5 0 0 1 4.584 3H20a1 1 0 1 1 0 2h-3.418l.285 2h.633a4.5 4.5 0 1 1 0 9h-11a4.5 4.5 0 1 1 0-9H7z"/></g></svg>'},{slug:"mdi:truck",label:"Truck",keywords:["truck"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18 18.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m1.5-9l1.96 2.5H17V9.5m-11 9A1.5 1.5 0 0 1 4.5 17A1.5 1.5 0 0 1 6 15.5A1.5 1.5 0 0 1 7.5 17A1.5 1.5 0 0 1 6 18.5M20 8h-3V4H3c-1.11 0-2 .89-2 2v11h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-5z"/></svg>'},{slug:"mdi:truck-outline",label:"Truck Outline",keywords:["truck"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m1.5-9H17V12h4.46zM6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.11.89-2 2-2h14v4zM3 6v9h.76c.55-.61 1.35-1 2.24-1s1.69.39 2.24 1H15V6z"/></svg>'},{slug:"tabler:truck",label:"Truck",keywords:["truck"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"/><path d="M5 17H3V6a1 1 0 0 1 1-1h9v12m-4 0h6m4 0h2v-6h-8m0-5h5l3 5"/></g></svg>'},{slug:"material-symbols:rocket",label:"Rocket",keywords:["rocket"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 22v-5.925q0-.5.238-.95T4.9 14.4l1.1-.725q.175 2.1.55 3.575t1.175 3.275zm5.225-2q-.875-1.65-1.3-3.5T7.5 12.675q0-3.125 1.238-5.887T12 2.6q2.025 1.425 3.263 4.188t1.237 5.887q0 1.95-.425 3.788T14.775 20zm4.188-7.587Q14 11.825 14 11t-.587-1.412T12 9t-1.412.588T10 11t.588 1.413T12 13t1.413-.587M20 22l-3.725-1.475q.8-1.8 1.175-3.275t.55-3.575l1.1.725q.425.275.663.725t.237.95z"/></svg>'},{slug:"material-symbols:rocket-outline",label:"Rocket Outline",keywords:["rocket"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m6 19.05l1.975-.8q-.25-.725-.462-1.475t-.338-1.5l-1.175.8zM10 18h4q.45-1 .725-2.437T15 12.625q0-2.475-.825-4.687T12 4.525q-1.35 1.2-2.175 3.413T9 12.625q0 1.5.275 2.938T10 18m.588-5.587Q10 11.825 10 11t.588-1.412T12 9t1.413.588T14 11t-.587 1.413T12 13t-1.412-.587M18 19.05v-2.975l-1.175-.8q-.125.75-.337 1.5t-.463 1.475zM12 1.975q2.475 1.8 3.738 4.575T17 13l2.1 1.4q.425.275.663.725t.237.95V22l-4.975-2h-6.05L4 22v-5.925q0-.5.238-.95T4.9 14.4L7 13q0-3.675 1.263-6.45T12 1.975"/></svg>'},{slug:"material-symbols:rocket-outline-rounded",label:"Rocket Outline Rounded",keywords:["rocket"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7.975 18.25q-.25-.725-.462-1.475t-.338-1.5l-1.175.8v2.975zM11.65 4.875q-1.2 1.275-1.925 3.363T9 12.625q0 1.5.275 2.938T10 18h4q.45-1 .725-2.437T15 12.625q0-2.3-.725-4.387T12.35 4.875q-.075-.075-.162-.112T12 4.725t-.187.038t-.163.112M12 13q-.825 0-1.412-.587T10 11t.588-1.412T12 9t1.413.588T14 11t-.587 1.413T12 13m4.025 5.25l1.975.8v-2.975l-1.175-.8q-.125.75-.337 1.5t-.463 1.475M12.775 2.6q2.1 1.8 3.163 4.425T17 13l2.1 1.4q.425.275.663.725t.237.95v4.45q0 .525-.437.825t-.938.1l-3.6-1.45h-6.05l-3.6 1.45q-.5.2-.937-.1T4 20.525v-4.45q0-.5.238-.95T4.9 14.4L7 13q0-3.35 1.063-5.975T11.224 2.6q.175-.125.375-.2t.4-.075t.4.075t.375.2"/></svg>'},{slug:"material-symbols:drone",label:"Drone",keywords:["drone"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q0-1.875 1.025-3.363t2.65-2.162L7.425 12H4V6H1V4h8v2H6v4h1.2L7 8h10l-.2 2H18V6h-3V4h8.025v2h-3v6H16.6l-.25 2.475q1.625.675 2.638 2.163T20 20h-2q0-1.65-1.175-2.825T14 16h-4q-1.65 0-2.825 1.175T6 20z"/></svg>'},{slug:"material-symbols:drone-outline",label:"Drone Outline",keywords:["drone"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q0-1.875 1.025-3.363t2.65-2.162L7.425 12H4V6H1V4h8v2H6v4h1.2L7 8h10l-.2 2H18V6h-3V4h8.025v2h-3v6H16.6l-.25 2.475q1.625.675 2.638 2.163T20 20h-2q0-1.65-1.175-2.825T14 16h-4q-1.65 0-2.825 1.175T6 20zm5.625-6h4.725l.425-4H9.2zm0 0h4.725z"/></svg>'},{slug:"material-symbols:drone-outline-rounded",label:"Drone Outline Rounded",keywords:["drone"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10 16q-1.425 0-2.475.85T6.125 19q-.125.425-.413.713T5 20t-.7-.3t-.2-.7q.275-1.55 1.225-2.75t2.35-1.775L7.425 12H5q-.425 0-.713-.288T4 11V6H2q-.425 0-.712-.288T1 5t.288-.712T2 4h6q.425 0 .713.288T9 5t-.288.713T8 6H6v4h1.2l-.075-.9q-.05-.45.238-.775T8.1 8h7.8q.45 0 .738.325t.237.775l-.075.9H18V6h-2q-.425 0-.712-.288T15 5t.288-.712T16 4h6.025q.425 0 .713.288t.287.712t-.287.713t-.713.287h-2v5q0 .425-.287.713t-.713.287H16.6l-.25 2.475q1.4.575 2.35 1.775T19.925 19q.075.4-.212.7T19 20t-.712-.288t-.413-.712q-.35-1.3-1.412-2.15T14 16zm-.375-2h4.725l.425-4H9.2zm0 0h4.725z"/></svg>'},{slug:"material-symbols:gamepad",label:"Gamepad",keywords:["gamepad"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.5l-3-3V2h6v5.5zm4.5 4.5l-3-3l3-3H22v6zM2 15V9h5.5l3 3l-3 3zm7 7v-5.5l3-3l3 3V22z"/></svg>'},{slug:"material-symbols:gamepad-outline",label:"Gamepad Outline",keywords:["gamepad"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.5l-3-3V2h6v5.5zm4.5 4.5l-3-3l3-3H22v6zM2 15V9h5.5l3 3l-3 3zm7 7v-5.5l3-3l3 3V22zm3-14.35l1-1V4h-2v2.65zM4 13h2.65l1-1l-1-1H4zm7 7h2v-2.65l-1-1l-1 1zm6.35-7H20v-2h-2.65l-1 1z"/></svg>'},{slug:"material-symbols:gamepad-outline-rounded",label:"Gamepad Outline Rounded",keywords:["gamepad"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m11.3 9.8l-2-2q-.15-.15-.225-.337T9 7.075V3q0-.425.288-.712T10 2h4q.425 0 .713.288T15 3v4.075q0 .2-.075.388T14.7 7.8l-2 2q-.15.15-.325.213t-.375.062t-.375-.062T11.3 9.8m2.9 2.9q-.15-.15-.212-.325T13.925 12t.063-.375t.212-.325l2-2q.15-.15.338-.225T16.925 9H21q.425 0 .713.288T22 10v4q0 .425-.288.713T21 15h-4.075q-.2 0-.387-.075T16.2 14.7zM2 14v-4q0-.425.288-.712T3 9h4.075q.2 0 .388.075T7.8 9.3l2 2q.15.15.213.325t.062.375t-.062.375t-.213.325l-2 2q-.15.15-.337.225T7.075 15H3q-.425 0-.712-.288T2 14m7 7v-4.075q0-.2.075-.387T9.3 16.2l2-2q.15-.15.325-.212t.375-.063t.375.063t.325.212l2 2q.15.15.225.338t.075.387V21q0 .425-.288.713T14 22h-4q-.425 0-.712-.288T9 21m3-13.35l1-1V4h-2v2.65zM4 13h2.65l1-1l-1-1H4zm7 7h2v-2.65l-1-1l-1 1zm6.35-7H20v-2h-2.65l-1 1z"/></svg>'},{slug:"material-symbols:joystick",label:"Joystick",keywords:["joystick"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 8.275V7.85q-1.1-.325-1.8-1.237T8.5 4.5q0-1.45 1.025-2.475T12 1t2.475 1.025T15.5 4.5q0 1.2-.7 2.113T13 7.85v.425l7 4.025q.475.275.738.738T21 14.05v1.9q0 .55-.262 1.013T20 17.7l-7 4.025Q12.525 22 12 22t-1-.275L4 17.7q-.475-.275-.737-.737T3 15.95v-1.9q0-.55.263-1.012T4 12.3zM6.8 13l5.2 3l5.2-3l-4.2-2.425V14h-2v-3.425z"/></svg>'},{slug:"material-symbols:joystick-outline",label:"Joystick Outline",keywords:["joystick"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m6.8 13l5.2 3l5.2-3l-4.2-2.425V14h-2v-3.425zM11 8.275V7.85q-1.1-.325-1.8-1.238T8.5 4.5q0-1.45 1.025-2.475T12 1t2.475 1.025T15.5 4.5q0 1.2-.7 2.113T13 7.85v.425l7 4.025q.475.275.738.738T21 14.05v1.9q0 .55-.262 1.013T20 17.7l-7 4.025Q12.525 22 12 22t-1-.275L4 17.7q-.475-.275-.737-.737T3 15.95v-1.9q0-.55.263-1.012T4 12.3zm0 9.45l-6-3.45v1.675L12 20l7-4.05v-1.675l-6 3.45Q12.525 18 12 18t-1-.275m2.063-12.163q.437-.437.437-1.062t-.437-1.062T12 3t-1.062.438T10.5 4.5t.438 1.063T12 6t1.063-.437M12 20"/></svg>'},{slug:"material-symbols:joystick-outline-sharp",label:"Joystick Outline Sharp",keywords:["joystick"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 8.275V7.85q-1.1-.325-1.8-1.237T8.5 4.5q0-1.45 1.025-2.475T12 1t2.475 1.025T15.5 4.5q0 1.2-.7 2.113T13 7.85v.425l8 4.6v4.25l-8 4.6Q12.525 22 12 22t-1-.275l-8-4.6v-4.25zm-6 6v1.675L12 20l7-4.05v-1.675L12 18.3zm8.063-8.712q.437-.438.437-1.063t-.437-1.062T12 3t-1.062.438T10.5 4.5t.438 1.063T12 6t1.063-.437M6.8 13l5.2 3l5.2-3l-4.2-2.425V14h-2v-3.425z"/></svg>'},{slug:"mdi:battery",label:"Battery",keywords:["battery"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16.67 4H15V2H9v2H7.33A1.33 1.33 0 0 0 6 5.33v15.34C6 21.4 6.6 22 7.33 22h9.34A1.33 1.33 0 0 0 18 20.67V5.33C18 4.6 17.4 4 16.67 4"/></svg>'},{slug:"mdi:battery-outline",label:"Battery Outline",keywords:["battery"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16 20H8V6h8m.67-2H15V2H9v2H7.33A1.33 1.33 0 0 0 6 5.33v15.34C6 21.4 6.6 22 7.33 22h9.34A1.33 1.33 0 0 0 18 20.67V5.33C18 4.6 17.4 4 16.67 4"/></svg>'},{slug:"tabler:battery",label:"Battery",keywords:["battery"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 7h11a2 2 0 0 1 2 2v.5a.5.5 0 0 0 .5.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5a.5.5 0 0 0-.5.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2"/></svg>'},{slug:"material-symbols:bolt",label:"Bolt",keywords:["bolt"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m8 22l1-7H4l9-13h2l-1 8h6L10 22z"/></svg>'},{slug:"material-symbols:bolt-outline",label:"Bolt Outline",keywords:["bolt"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m10.55 18.2l5.175-6.2h-4l.725-5.675L7.825 13H11.3zM8 22l1-7H4l9-13h2l-1 8h6L10 22zm3.775-9.75"/></svg>'},{slug:"material-symbols:bolt-outline-rounded",label:"Bolt Outline Rounded",keywords:["bolt"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m10.55 18.2l5.175-6.2h-4l.725-5.675L7.825 13H11.3zM9 15H5.9q-.6 0-.888-.537t.063-1.038l7.475-10.75q.25-.35.65-.487t.825.012t.625.525t.15.8L14 10h3.875q.65 0 .913.575t-.163 1.075L10.4 21.5q-.275.325-.675.425t-.775-.075t-.587-.537t-.163-.788zm2.775-2.75"/></svg>'},{slug:"material-symbols:bluetooth",label:"Bluetooth",keywords:["bluetooth"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 22v-7.6L6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5L11 9.6V2h1l5.7 5.7l-4.3 4.3l4.3 4.3L12 22zm2-12.4l1.9-1.9L13 5.85zm0 8.55l1.9-1.85l-1.9-1.9z"/></svg>'},{slug:"material-symbols:bluetooth-rounded",label:"Bluetooth Rounded",keywords:["bluetooth"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 20.575V14.4l-3.9 3.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275L11 9.6V3.425q0-.45.3-.737T12 2.4q.2 0 .375.075t.325.225L17 7q.15.15.213.325t.062.375t-.062.375T17 8.4L13.4 12l3.6 3.6q.15.15.213.325t.062.375t-.062.375T17 17l-4.3 4.3q-.15.15-.325.225T12 21.6q-.4 0-.7-.288t-.3-.737M13 9.6l1.9-1.9L13 5.85zm0 8.55l1.9-1.85l-1.9-1.9z"/></svg>'},{slug:"mdi:bluetooth",label:"Bluetooth",keywords:["bluetooth"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14.88 16.29L13 18.17v-3.76m0-8.58l1.88 1.88L13 9.58m4.71-1.87L12 2h-1v7.58L6.41 5L5 6.41L10.59 12L5 17.58L6.41 19L11 14.41V22h1l5.71-5.71l-4.3-4.29z"/></svg>'},{slug:"material-symbols:wifi",label:"Wifi",keywords:["wifi"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.225 20.275Q9.5 19.55 9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21t-1.775-.725M6.35 15.35l-2.1-2.15q1.475-1.475 3.463-2.337T12 10t4.288.875t3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725T12 13t-3.1.625t-2.55 1.725M2.1 11.1L0 9q2.3-2.35 5.375-3.675T12 4t6.625 1.325T24 9l-2.1 2.1q-1.925-1.925-4.462-3.012T12 7T6.563 8.088T2.1 11.1"/></svg>'},{slug:"material-symbols:wifi-rounded",label:"Wifi Rounded",keywords:["wifi"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.225 20.275Q9.5 19.55 9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21t-1.775-.725m5.338-9.675q1.687.6 3.062 1.65q.5.375.513.988T18.7 14.3q-.425.425-1.05.438t-1.125-.338q-.95-.65-2.1-1.025T12 13t-2.425.375t-2.1 1.025q-.5.35-1.125.325t-1.05-.45q-.425-.45-.425-1.062t.5-.988q1.375-1.05 3.063-1.638T12 10t3.563.6m2.324-5.575q2.763 1.025 4.963 2.9q.5.425.525 1.05t-.425 1.075q-.425.425-1.05.438t-1.125-.388q-1.8-1.475-4.037-2.287T12 7t-4.737.813T3.225 10.1q-.5.4-1.125.388t-1.05-.438Q.6 9.6.625 8.975t.525-1.05q2.2-1.875 4.963-2.9T12 4t5.888 1.025"/></svg>'},{slug:"material-symbols:wifi-sharp",label:"Wifi Sharp",keywords:["wifi"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m6.35 15.35l-2.1-2.15q1.55-1.55 3.55-2.375T12 10t4.213.838t3.537 2.412l-2.1 2.1q-1.125-1.125-2.588-1.737T12 13t-3.062.613T6.35 15.35M2.1 11.1L0 9q2.375-2.425 5.488-3.713T12 4t6.513 1.288T24 9l-2.1 2.1q-1.975-1.975-4.538-3.037T12 7T6.637 8.063T2.1 11.1M12 21l-3.525-3.55q.7-.7 1.613-1.075T12 16t1.913.375t1.612 1.075z"/></svg>'},{slug:"mdi:antenna",label:"Antenna",keywords:["antenna"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 7.5c.69 0 1.27.23 1.76.7s.74 1.07.74 1.8q0 1.575-1.5 2.28V21h-2v-8.72Q9.5 11.575 9.5 10c0-.73.26-1.33.74-1.8s1.07-.7 1.76-.7m4.69-2.2c1.25 1.25 1.92 2.81 2.01 4.7c0 1.8-.67 3.38-2.01 4.72L15.5 13.5c1-.91 1.5-2.08 1.5-3.5c0-1.33-.5-2.5-1.5-3.5zM6.09 4.08C4.5 5.67 3.7 7.64 3.7 10s.8 4.3 2.39 5.89l-1.17 1.22C3 15.08 2 12.7 2 10s1-5.06 2.92-7.09zm12.99-1.17C21 4.94 22 7.3 22 10c0 2.8-1 5.17-2.92 7.11l-1.17-1.22C19.5 14.3 20.3 12.33 20.3 10s-.8-4.33-2.39-5.92zM7.31 5.3L8.5 6.5C7.5 7.42 7 8.58 7 10c0 1.33.5 2.5 1.5 3.5l-1.19 1.22C5.97 13.38 5.3 11.8 5.3 10s.67-3.36 2.01-4.7"/></svg>'},{slug:"tabler:antenna",label:"Antenna",keywords:["antenna"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 4v8m-4-7.5v7M12 5v16M8 5.5v5M4 6v4m16-2H4"/></svg>'},{slug:"lucide:antenna",label:"Antenna",keywords:["antenna"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12L7 2m0 10l5-10m0 10l5-10m0 10l5-10M4.5 7h15M12 16v6"/></svg>'},{slug:"mdi:led-outline",label:"Led Outline",keywords:["led"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4m0 2a2 2 0 0 1 2 2v5h-4v-5a2 2 0 0 1 2-2"/></svg>'},{slug:"mdi:led-on",label:"Led On",keywords:["led"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 0v4h2V0zm7.3 2.29l-3.06 3l1.4 1.42l3.06-3zm-12.59 0L4.29 3.71l3 3l1.42-1.42zM12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4M2 9v2h4V9zm16 0v2h4V9z"/></svg>'},{slug:"mdi:led-off",label:"Led Off",keywords:["led"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4"/></svg>'},{slug:"tabler:bulb",label:"Bulb",keywords:["bulb"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h1m8-9v1m8 8h1M5.6 5.6l.7.7m12.1-.7l-.7.7M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0-1 3a2 2 0 0 1-4 0a3.5 3.5 0 0 0-1-3m.7 1h4.6"/></svg>'},{slug:"tabler:bulb-filled",label:"Bulb Filled",keywords:["bulb"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 11a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm8-9a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1m9 9a1 1 0 0 1 .117 1.993L21 13h-1a1 1 0 0 1-.117-1.993L20 11zM4.893 4.893a1 1 0 0 1 1.32-.083l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7a1 1 0 0 1 0-1.414m12.8 0a1 1 0 0 1 1.497 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094zM14 18a1 1 0 0 1 1 1a3 3 0 0 1-6 0a1 1 0 0 1 .883-.993L10 18zM12 6a6 6 0 0 1 3.6 10.8a1 1 0 0 1-.471.192L15 17H9a1 1 0 0 1-.6-.2A6 6 0 0 1 12 6"/></svg>'},{slug:"mingcute:bulb-fill",label:"Bulb Fill",keywords:["bulb"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M13 20a1 1 0 0 1 .117 1.993L13 22h-2a1 1 0 0 1-.117-1.993L11 20zM12 2c4.41 0 8 3.543 8 7.933c0 3.006-1.522 5.196-2.78 6.494l-.284.283l-.27.252l-.252.22l-.33.27l-.328.244c-.241.17-.403.419-.55.678l-.205.364c-.238.41-.517.762-1.108.762h-3.786c-.59 0-.87-.351-1.108-.762l-.118-.208c-.172-.312-.348-.63-.637-.834l-.232-.171l-.199-.155l-.227-.188l-.252-.22l-.27-.252l-.285-.283C5.522 15.129 4 12.939 4 9.933C4 5.543 7.59 2 12 2m1.707 4.293a1 1 0 0 0-1.32-.083l-.094.083L10.3 8.286a1.01 1.01 0 0 0-.084 1.333l.084.095L11.586 11l-1.293 1.293a1 1 0 0 0 1.32 1.497l.094-.083l1.993-1.993a1.01 1.01 0 0 0 .084-1.333l-.084-.095L12.414 9l1.293-1.293a1 1 0 0 0 0-1.414"/></g></svg>'},{slug:"ph:x-light",label:"X Light",keywords:["light"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M204.24 195.76a6 6 0 1 1-8.48 8.48L128 136.49l-67.76 67.75a6 6 0 0 1-8.48-8.48L119.51 128L51.76 60.24a6 6 0 0 1 8.48-8.48L128 119.51l67.76-67.75a6 6 0 0 1 8.48 8.48L136.49 128Z"/></svg>'},{slug:"ph:at-light",label:"At Light",keywords:["light"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M128 26a102 102 0 0 0 0 204c21.13 0 43.31-6.35 59.32-17a6 6 0 0 0-6.65-10c-13.9 9.25-34.09 15-52.67 15a90 90 0 1 1 90-90c0 29.58-13.78 34-22 34s-22-4.42-22-34V88a6 6 0 0 0-12 0v9a46 46 0 1 0 4.34 56.32C171.76 166.6 182 174 196 174c21.29 0 34-17.2 34-46A102.12 102.12 0 0 0 128 26m0 136a34 34 0 1 1 34-34a34 34 0 0 1-34 34"/></svg>'},{slug:"ph:pi-light",label:"Pi Light",keywords:["light"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M230 172a34 34 0 0 1-68 0V70H94v130a6 6 0 0 1-12 0V70H72a42 42 0 0 0-42 42a6 6 0 0 1-12 0a54.06 54.06 0 0 1 54-54h152a6 6 0 0 1 0 12h-50v102a22 22 0 0 0 44 0a6 6 0 0 1 12 0"/></svg>'},{slug:"mdi:lamp",label:"Lamp",keywords:["lamp"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8 2h8l4 12H4zm3 13h2v5h5v2H6v-2h5z"/></svg>'},{slug:"mdi:lamp-outline",label:"Lamp Outline",keywords:["lamp"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m14.56 4l2.67 8H6.78l2.66-8zM16 2H8L4 14h16zm-5 13h2v5h5v2H6v-2h5z"/></svg>'},{slug:"solar:lamp-bold",label:"Lamp Bold",keywords:["lamp"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6.667 3.151c-.786.775-1.09 1.948-1.699 4.294l-.084.324c-.828 3.189-1.242 4.783-.49 5.903q.112.168.247.319C5.536 15 7.183 15 10.477 15h.779v6.25h-2.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25V15h.78c1.32 0 2.374 0 3.223-.065l-.003.065v2a.75.75 0 1 0 1.5 0v-2.318c.468-.15.83-.369 1.116-.691q.135-.15.247-.32c.752-1.12.338-2.713-.49-5.902l-.084-.324c-.609-2.346-.913-3.519-1.7-4.294a4 4 0 0 0-.756-.585C15.64 2 14.429 2 12.007 2c-2.424 0-3.635 0-4.583.566a4 4 0 0 0-.757.585"/></svg>'},{slug:"mdi:flash",label:"Flash",keywords:["flash"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>'},{slug:"mdi:flash-outline",label:"Flash Outline",keywords:["flash"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 2h10l-3.5 7H17l-7 13v-8H7zm2 2v8h3v2.66L14 11h-3.76l3.52-7z"/></svg>'},{slug:"mingcute:flash-fill",label:"Flash Fill",keywords:["flash"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M13.232 1.36c.632-.758 1.863-.24 1.763.742L14.289 9H20a1 1 0 0 1 .768 1.64l-10 12c-.632.758-1.863.24-1.763-.742L9.711 15H4a1 1 0 0 1-.768-1.64z"/></g></svg>'},{slug:"mdi:temperature",label:"Temperature",keywords:["temperature"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15 13V5a3 3 0 0 0-6 0v8a5 5 0 1 0 6 0m-3-9a1 1 0 0 1 1 1v3h-2V5a1 1 0 0 1 1-1"/></svg>'},{slug:"solar:temperature-bold",label:"Temperature Bold",keywords:["temperature"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M17.5 16.5a5.5 5.5 0 1 1-8.939-4.293c.264-.211.439-.521.439-.86V5a3 3 0 1 1 6 0v6.348c0 .338.175.648.439.86A5.49 5.49 0 0 1 17.5 16.5M12 4.25a.75.75 0 0 1 .75.75v8.38c0 .437.297.808.658 1.054a2.5 2.5 0 1 1-2.816 0c.36-.246.658-.617.658-1.054V5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>'},{slug:"solar:temperature-bold-duotone",label:"Temperature Bold Duotone",keywords:["temperature"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 16.5a5.5 5.5 0 1 1-8.939-4.293c.264-.211.439-.521.439-.86V5a3 3 0 1 1 6 0v6.348c0 .338.175.648.439.86A5.49 5.49 0 0 1 17.5 16.5" opacity=".5"/><path fill="currentColor" d="M12.75 5a.75.75 0 0 0-1.5 0v8.38c0 .437-.297.808-.658 1.054a2.5 2.5 0 1 0 2.816 0c-.36-.246-.658-.617-.658-1.054z"/></svg>'},{slug:"material-symbols:thermometer",label:"Thermometer",keywords:["thermometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-2.075 0-3.537-1.463T7 16q0-1.2.525-2.238T9 12V6q0-1.25.875-2.125T12 3t2.125.875T15 6v6q.95.725 1.475 1.763T17 16q0 2.075-1.463 3.538T12 21m-1-11h2V6q0-.425-.288-.712T12 5t-.712.288T11 6z"/></svg>'},{slug:"material-symbols:thermometer-outline",label:"Thermometer Outline",keywords:["thermometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-2.075 0-3.537-1.463T7 16q0-1.2.525-2.238T9 12V6q0-1.25.875-2.125T12 3t2.125.875T15 6v6q.95.725 1.475 1.763T17 16q0 2.075-1.463 3.538T12 21m0-2q1.25 0 2.125-.875T15 16q0-.725-.312-1.35T13.8 13.6L13 13V6q0-.425-.288-.712T12 5t-.712.288T11 6v7l-.8.6q-.575.425-.888 1.05T9 16q0 1.25.875 2.125T12 19m0-3"/></svg>'},{slug:"mdi:thermometer",label:"Thermometer",keywords:["thermometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15 13V5a3 3 0 0 0-6 0v8a5 5 0 1 0 6 0m-3-9a1 1 0 0 1 1 1v3h-2V5a1 1 0 0 1 1-1"/></svg>'},{slug:"mdi:gauge",label:"Gauge",keywords:["gauge"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8c0 2.4-1 4.5-2.7 6c-1.4-1.3-3.3-2-5.3-2s-3.8.7-5.3 2C5 16.5 4 14.4 4 12a8 8 0 0 1 8-8m2 1.89c-.38.01-.74.26-.9.65l-1.29 3.23l-.1.23c-.71.13-1.3.6-1.57 1.26c-.41 1.03.09 2.19 1.12 2.6s2.19-.09 2.6-1.12c.26-.66.14-1.42-.29-1.98l.1-.26l1.29-3.21l.01-.03c.2-.51-.05-1.09-.56-1.3c-.13-.05-.26-.07-.41-.07M10 6a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M7 9a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m10 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"/></svg>'},{slug:"tabler:gauge",label:"Gauge",keywords:["gauge"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"/><path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m2.41-1.41L16 8m-9 4a5 5 0 0 1 5-5"/></g></svg>'},{slug:"tabler:gauge-filled",label:"Gauge Filled",keywords:["gauge"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34m-.293 3.953a1 1 0 0 0-1.414 0l-2.59 2.59l-.083.094l-.068.1a2 2 0 0 0-2.547 1.774L10 12l.005.15a2 2 0 1 0 3.917-.701a1 1 0 0 0 .195-.152l2.59-2.59l.083-.094a1 1 0 0 0-.083-1.32M12 6a6 6 0 0 0-6 6a1 1 0 0 0 2 0a4 4 0 0 1 4-4a1 1 0 0 0 0-2"/></svg>'},{slug:"mdi:speedometer",label:"Speedometer",keywords:["speedometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16a3 3 0 0 1-3-3c0-1.12.61-2.1 1.5-2.61l9.71-5.62l-5.53 9.58c-.5.98-1.51 1.65-2.68 1.65m0-13c1.81 0 3.5.5 4.97 1.32l-2.1 1.21C14 5.19 13 5 12 5a8 8 0 0 0-8 8c0 2.21.89 4.21 2.34 5.65h.01c.39.39.39 1.02 0 1.41s-1.03.39-1.42.01A9.97 9.97 0 0 1 2 13A10 10 0 0 1 12 3m10 10c0 2.76-1.12 5.26-2.93 7.07c-.39.38-1.02.38-1.41-.01a.996.996 0 0 1 0-1.41A7.95 7.95 0 0 0 20 13c0-1-.19-2-.54-2.9L20.67 8C21.5 9.5 22 11.18 22 13"/></svg>'},{slug:"ph:speedometer",label:"Speedometer",keywords:["speedometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="m114.34 154.34l96-96a8 8 0 0 1 11.32 11.32l-96 96a8 8 0 0 1-11.32-11.32M128 88a63.9 63.9 0 0 1 20.44 3.33a8 8 0 1 0 5.11-15.16a80 80 0 0 0-105.06 84.71a8 8 0 0 0 7.94 7.12c.29 0 .59 0 .89-.05a8 8 0 0 0 7.07-8.83A65 65 0 0 1 64 152a64.07 64.07 0 0 1 64-64m99.74 13a8 8 0 0 0-14.24 7.3a96.27 96.27 0 0 1 5 75.71l-181.1-.07A96.24 96.24 0 0 1 128 56h.88a95 95 0 0 1 42.82 10.5a8 8 0 1 0 7.3-14.23a112 112 0 0 0-156.66 137A16.07 16.07 0 0 0 37.46 200h181.07a16 16 0 0 0 15.11-10.71a112.35 112.35 0 0 0-5.9-88.3Z"/></svg>'},{slug:"ph:speedometer-bold",label:"Speedometer Bold",keywords:["speedometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="m119.51 143.51l88-88a12 12 0 1 1 17 17l-88 88a12 12 0 1 1-17-17m14.23-43.2a12 12 0 1 0 2.62-23.85A75 75 0 0 0 128 76a76.08 76.08 0 0 0-76 76a12 12 0 0 0 24 0a52.06 52.06 0 0 1 52-52a55 55 0 0 1 5.74.31m101.54 7.5a12 12 0 0 0-22.19 9.19a92.47 92.47 0 0 1 2.58 63H40.34A92.23 92.23 0 0 1 128 60h.84a91.4 91.4 0 0 1 34.2 6.91a12 12 0 0 0 9.14-22.19A116.07 116.07 0 0 0 18.57 190.58A20.09 20.09 0 0 0 37.46 204h181.07a20.06 20.06 0 0 0 18.88-13.38a116.4 116.4 0 0 0-2.13-82.81"/></svg>'},{slug:"material-symbols:radar",label:"Radar",keywords:["radar"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8.1 21.213q-1.825-.788-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22t-3.9-.788M12 20q1.4 0 2.638-.437t2.262-1.238L15.475 16.9q-.725.525-1.612.813T12 18q-2.5 0-4.25-1.75T6 12t1.75-4.25T12 6t4.25 1.75T18 12q0 .975-.3 1.875t-.825 1.625l1.425 1.425q.8-1.025 1.25-2.275T20 12q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-4q.55 0 1.063-.137t.962-.413L12.5 13.925q-.125.05-.25.063T12 14q-.825 0-1.412-.587T10 12t.588-1.412T12 10t1.413.588T14 12q0 .15-.012.288t-.063.262l1.5 1.5q.275-.45.425-.962T16 12q0-1.65-1.175-2.825T12 8T9.175 9.175T8 12t1.175 2.825T12 16"/></svg>'},{slug:"mdi:radar",label:"Radar",keywords:["radar"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m19.07 4.93l-1.41 1.41A8 8 0 0 1 20 12a8 8 0 0 1-8 8a8 8 0 0 1-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12a6 6 0 0 0 6 6a6 6 0 0 0 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12a4 4 0 0 1-4 4a4 4 0 0 1-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.74-.4-1.38-1-1.72V2h-1A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-2.76-1.12-5.26-2.93-7.07"/></svg>'},{slug:"solar:radar-bold",label:"Radar Bold",keywords:["radar"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-8.642-5.07a5.2 5.2 0 0 0-2.232-.107a.75.75 0 0 1-.252-1.478a6.749 6.749 0 1 1-4.519 2.953c.453-.69 1.358-.733 1.92-.279l4.197 3.398a.75.75 0 1 1-.944 1.166L7.49 9.313a5.249 5.249 0 1 0 5.87-2.384" clip-rule="evenodd"/></svg>'},{slug:"mdi:compass",label:"Compass",keywords:["compass"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14.19 14.19L6 18l3.81-8.19L18 6m-6-4A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 8.9a1.1 1.1 0 0 0-1.1 1.1a1.1 1.1 0 0 0 1.1 1.1a1.1 1.1 0 0 0 1.1-1.1a1.1 1.1 0 0 0-1.1-1.1"/></svg>'},{slug:"mdi:compass-outline",label:"Compass Outline",keywords:["compass"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m7 17l3.2-6.8L17 7l-3.2 6.8zm5-5.9a.9.9 0 0 0-.9.9a.9.9 0 0 0 .9.9a.9.9 0 0 0 .9-.9a.9.9 0 0 0-.9-.9M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"/></svg>'},{slug:"solar:compass-bold",label:"Compass Bold",keywords:["compass"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1.956-7.905c-.193.17-.44.268-.932.465c-2.31.924-3.465 1.386-4.124.938a1.5 1.5 0 0 1-.398-.398c-.448-.66.014-1.814.938-4.124c.197-.493.295-.74.465-.933q.065-.073.139-.138c.193-.17.44-.268.932-.465c2.31-.924 3.464-1.386 4.124-.938a1.5 1.5 0 0 1 .398.398c.448.66-.014 1.814-.938 4.124c-.197.493-.295.739-.465.932q-.065.075-.139.139" clip-rule="evenodd"/></svg>'},{slug:"tabler:map-pin",label:"Map Pin",keywords:["map-pin"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0"/><path d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0"/></g></svg>'},{slug:"tabler:map-pin-filled",label:"Map Pin Filled",keywords:["map-pin"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21l-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135l-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6"/></svg>'},{slug:"mingcute:map-pin-fill",label:"Map Pin Fill",keywords:["map-pin"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M7 7a5 5 0 1 1 6 4.9V17a1 1 0 1 1-2 0v-5.1A5 5 0 0 1 7 7m2.489 9.1a1 1 0 0 1-.838 1.14c-1.278.195-2.293.489-2.96.815c-.335.164-.534.313-.637.422l-.021.023c.033.039.09.096.19.169c.28.207.749.435 1.418.644C7.968 19.728 9.863 20 12 20s4.032-.272 5.359-.687c.67-.209 1.138-.437 1.418-.644c.1-.073.157-.13.19-.169l-.021-.023c-.103-.109-.302-.258-.637-.422c-.667-.326-1.682-.62-2.96-.815a1 1 0 1 1 .301-1.977c1.388.21 2.622.547 3.539.996c.457.224.884.5 1.208.842c.33.347.603.82.603 1.399c0 .811-.524 1.4-1.034 1.777c-.53.392-1.233.702-2.01.945c-1.57.49-3.674.778-5.956.778s-4.387-.288-5.955-.778c-.778-.243-1.48-.553-2.01-.945C3.524 19.9 3 19.311 3 18.5c0-.58.273-1.052.603-1.4c.325-.342.751-.617 1.208-.84c.917-.45 2.152-.786 3.538-.997a1 1 0 0 1 1.14.838Z"/></g></svg>'},{slug:"mdi:ruler",label:"Ruler",keywords:["ruler"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m1.39 18.36l1.77-1.76L4.58 18l1.06-1.05l-1.42-1.41l1.42-1.42l2.47 2.48l1.06-1.06l-2.47-2.48l1.41-1.41l1.42 1.41L10.59 12l-1.42-1.41l1.42-1.42l2.47 2.48l1.06-1.06l-2.47-2.48l1.41-1.41l1.41 1.41l1.07-1.06l-1.42-1.41l1.42-1.42L18 6.7l1.07-1.06l-2.47-2.48l1.76-1.77l4.25 4.25L5.64 22.61z"/></svg>'},{slug:"solar:ruler-bold",label:"Ruler Bold",keywords:["ruler"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 15.616c0 .847.682 1.529 2.045 2.892l1.447 1.447C6.855 21.318 7.537 22 8.384 22s1.53-.682 2.893-2.045l8.678-8.678C21.318 9.913 22 9.23 22 8.384s-.682-1.529-2.045-2.892l-1.447-1.447C17.145 2.682 16.463 2 15.616 2c-.754 0-1.376.54-2.464 1.618q.045.033.085.073l1.415 1.415a.75.75 0 1 1-1.061 1.06l-1.414-1.414a1 1 0 0 1-.074-.086L11.03 5.739q.045.033.086.074l2.121 2.121a.75.75 0 1 1-1.06 1.06l-2.122-2.12a1 1 0 0 1-.074-.087L8.91 7.86q.044.033.086.074l1.414 1.414a.75.75 0 0 1-1.06 1.06L7.933 8.996a1 1 0 0 1-.074-.086L6.787 9.98q.046.033.086.074l2.122 2.122a.75.75 0 0 1-1.061 1.06l-2.121-2.121a1 1 0 0 1-.074-.086l-1.073 1.073q.045.032.086.074l1.414 1.414a.75.75 0 0 1-1.06 1.06L3.69 13.238a1 1 0 0 1-.073-.085C2.539 14.24 2 14.862 2 15.616"/></svg>'},{slug:"solar:ruler-bold-duotone",label:"Ruler Bold Duotone",keywords:["ruler"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 15.616c0 .847.682 1.529 2.045 2.892l1.447 1.447C6.855 21.318 7.537 22 8.384 22s1.53-.682 2.893-2.045l8.678-8.678C21.318 9.913 22 9.23 22 8.384s-.682-1.529-2.045-2.892l-1.447-1.447C17.145 2.682 16.463 2 15.616 2c-.754 0-1.376.54-2.464 1.618l-1.05 1.048l-1.072 1.073l-1.05 1.048L8.91 7.86L7.86 8.909L6.788 9.98L5.74 11.03l-1.073 1.073l-1.048 1.049C2.539 14.24 2 14.862 2 15.616" opacity=".5"/><path fill="currentColor" d="M13.238 3.691a1 1 0 0 0-.086-.073l-1.049 1.048q.033.045.074.086l1.414 1.414a.75.75 0 0 0 1.06-1.06zm-2.122 2.122a1 1 0 0 0-.086-.074L9.982 6.787q.033.045.074.086l2.121 2.122a.75.75 0 0 0 1.06-1.061zM8.995 7.934a1 1 0 0 0-.086-.074L7.86 8.908q.033.046.074.087l1.415 1.414a.75.75 0 1 0 1.06-1.06zm-2.121 2.121a1 1 0 0 0-.086-.074L5.739 11.03q.033.045.074.086l2.121 2.121a.75.75 0 1 0 1.061-1.06zm-2.122 2.122a1 1 0 0 0-.086-.075l-1.048 1.05q.033.045.074.085l1.414 1.414a.75.75 0 1 0 1.06-1.06z"/></svg>'},{slug:"material-symbols:settings",label:"Settings",keywords:["settings"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5"/></svg>'},{slug:"material-symbols:settings-outline",label:"Settings Outline",keywords:["settings"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zM11 20h1.975l.35-2.65q.775-.2 1.438-.587t1.212-.938l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.737T17.5 12t-.05-.787t-.175-.738l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.962t-1.438-.588L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.963t1.437.587zm1.05-4.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5M12 12"/></svg>'},{slug:"material-symbols:settings-outline-rounded",label:"Settings Outline Rounded",keywords:["settings"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.825 22q-.675 0-1.162-.45t-.588-1.1L8.85 18.8q-.325-.125-.612-.3t-.563-.375l-1.55.65q-.625.275-1.25.05t-.975-.8l-1.175-2.05q-.35-.575-.2-1.225t.675-1.075l1.325-1Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337l-1.325-1Q2.675 9.9 2.525 9.25t.2-1.225L3.9 5.975q.35-.575.975-.8t1.25.05l1.55.65q.275-.2.575-.375t.6-.3l.225-1.65q.1-.65.588-1.1T10.825 2h2.35q.675 0 1.163.45t.587 1.1l.225 1.65q.325.125.613.3t.562.375l1.55-.65q.625-.275 1.25-.05t.975.8l1.175 2.05q.35.575.2 1.225t-.675 1.075l-1.325 1q.025.175.025.338v.674q0 .163-.05.338l1.325 1q.525.425.675 1.075t-.2 1.225l-1.2 2.05q-.35.575-.975.8t-1.25-.05l-1.5-.65q-.275.2-.575.375t-.6.3l-.225 1.65q-.1.65-.587 1.1t-1.163.45zM11 20h1.975l.35-2.65q.775-.2 1.438-.587t1.212-.938l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.737T17.5 12t-.05-.787t-.175-.738l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.962t-1.438-.588L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.963t1.437.587zm1.05-4.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.487 1.025T8.55 12t1.013 2.475T12.05 15.5M12 12"/></svg>'},{slug:"tabler:tool",label:"Tool",keywords:["tool"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10h3V7L6.5 3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1-3 3l-6-6a6 6 0 0 1-8-8z"/></svg>'},{slug:"mingcute:tool-fill",label:"Tool Fill",keywords:["tool"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M7.527 2.657a7.001 7.001 0 0 1 8.26 9.347l4.599 3.893a3.3 3.3 0 1 1-4.651 4.65l-3.891-4.597a7.001 7.001 0 0 1-9.35-8.26a1.01 1.01 0 0 1 1.72-.432l3.045 3.307l2.297-.845l.847-2.3l-3.309-3.04a1.01 1.01 0 0 1 .433-1.723"/></g></svg>'},{slug:"mingcute:tool-line",label:"Tool Line",keywords:["tool"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M6.798 2.884a7.002 7.002 0 0 1 9.294 8.565l4.394 3.718a3.76 3.76 0 1 1-5.3 5.3l-3.717-4.394a7.002 7.002 0 0 1-8.565-9.295c.358-.894 1.48-1.007 2.063-.373L8.17 9.883l1.446-.288l.29-1.449l-3.48-3.198c-.634-.583-.522-1.706.373-2.064ZM8.805 4.42l2.763 2.54c.322.296.466.738.38 1.165l-.47 2.354a1.25 1.25 0 0 1-.982.981l-2.35.467a1.25 1.25 0 0 1-1.164-.38L4.438 8.785a5.002 5.002 0 0 0 6.804 5.25a1.26 1.26 0 0 1 1.422.355l4.05 4.786a1.76 1.76 0 1 0 2.48-2.48l-4.785-4.05a1.26 1.26 0 0 1-.355-1.422a5 5 0 0 0-5.25-6.804Z"/></g></svg>'},{slug:"mdi:wrench",label:"Wrench",keywords:["wrench"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9c-2-2-5-2.4-7.4-1.3L9 6L6 9L1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4"/></svg>'},{slug:"mdi:wrench-outline",label:"Wrench Outline",keywords:["wrench"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m22.61 19l-9.08-9.09c.93-2.34.47-5.1-1.44-7C9.79.61 6.21.4 3.66 2.26L7.5 6.11L6.08 7.5L2.25 3.69C.39 6.23.6 9.82 2.9 12.11c1.86 1.86 4.57 2.35 6.89 1.48l9.11 9.11c.39.39 1.02.39 1.41 0l2.3-2.3c.39-.4.39-1.01 0-1.4m-3 1.59l-9.46-9.46c-.61.45-1.29.72-2 .82c-1.36.2-2.79-.21-3.83-1.25C3.37 9.76 2.93 8.5 3 7.26l3.09 3.09l4.24-4.24L7.24 3c1.26-.05 2.49.39 3.44 1.33a4.47 4.47 0 0 1 1.24 3.96a4.35 4.35 0 0 1-.88 1.96l9.46 9.45z"/></svg>'},{slug:"ri:wrench-fill",label:"Wrench Fill",keywords:["wrench"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19.249 6.872a1 1 0 0 1 1.645.36a7.001 7.001 0 0 1-8.912 9.037l-4.013 4.013a3 3 0 1 1-4.243-4.243l4.013-4.013a7 7 0 0 1 9.025-8.917a1 1 0 0 1 .36 1.645L14.768 7.11a1.5 1.5 0 0 0 2.121 2.122z"/></svg>'},{slug:"mdi:screwdriver",label:"Screwdriver",keywords:["screwdriver"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18 1.83c-.5 0-1 .17-1.41.58L8 11l1.5 1.5L6 16H4l-2 4l2 2l4-2v-2l3.5-3.5L13 16l8.59-8.59c.62-.91.78-2.04 0-2.82l-2.18-2.18A1.95 1.95 0 0 0 18 1.83M18 4l2 2l-7 7l-2-2z"/></svg>'}],ff="./",mc=xg.map(i=>({slug:i.slug,label:i.label,keywords:i.keywords,svg:i.svg})),kg=Object.fromEntries(mc.map(i=>[i.slug,i.svg])),li="grommet-icons:raspberry";function Bs(i){return`data:image/svg+xml,${encodeURIComponent(i)}`}function mf(i){return kg[i]??null}const Eg=`${ff}art/logo.png`,Sg=`${ff}art/Teknologiskolen_logo.png`,Tg=`${ff}art/logo_teknologiskolen_white.png`,Mg={menu:d.jsxs(d.Fragment,{children:[d.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),d.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),d.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:d.jsxs(d.Fragment,{children:[d.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),d.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]}),user:d.jsxs(d.Fragment,{children:[d.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),d.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),settings:d.jsxs(d.Fragment,{children:[d.jsx("circle",{cx:"12",cy:"12",r:"3"}),d.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),info:d.jsxs(d.Fragment,{children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),d.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),help:d.jsxs(d.Fragment,{children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),d.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),debugger:d.jsx(d.Fragment,{children:d.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),edit:d.jsxs(d.Fragment,{children:[d.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),d.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),picoIde:d.jsxs(d.Fragment,{children:[d.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),d.jsx("path",{d:"M8 9l-3 3 3 3"}),d.jsx("path",{d:"M16 9l3 3-3 3"}),d.jsx("line",{x1:"13",y1:"8",x2:"11",y2:"16"})]}),exit:d.jsxs(d.Fragment,{children:[d.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),d.jsx("polyline",{points:"16 17 21 12 16 7"}),d.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),plus:d.jsxs(d.Fragment,{children:[d.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),delete:d.jsxs(d.Fragment,{children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),d.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),power:d.jsxs(d.Fragment,{children:[d.jsx("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),d.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),save:d.jsxs(d.Fragment,{children:[d.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),d.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),d.jsx("polyline",{points:"7 3 7 8 15 8"})]}),upload:d.jsxs(d.Fragment,{children:[d.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),d.jsx("polyline",{points:"17 8 12 3 7 8"}),d.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),refresh:d.jsxs(d.Fragment,{children:[d.jsx("polyline",{points:"23 4 23 10 17 10"}),d.jsx("polyline",{points:"1 20 1 14 7 14"}),d.jsx("path",{d:"M3.5 9a9 9 0 0 1 14.9-3.4L23 10"}),d.jsx("path",{d:"M20.5 15a9 9 0 0 1-14.9 3.4L1 14"})]}),package:d.jsxs(d.Fragment,{children:[d.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),d.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),d.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),back:d.jsxs(d.Fragment,{children:[d.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),d.jsx("polyline",{points:"12 19 5 12 12 5"})]}),chevronLeft:d.jsx("polyline",{points:"15 6 9 12 15 18"}),chevronRight:d.jsx("polyline",{points:"9 6 15 12 9 18"})};function Kt({name:i,size:l=24,className:o}){return d.jsx("svg",{width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:o,"aria-hidden":"true",children:Mg[i]})}let pe=null,Es=null,Um=0,il=!1;function Ng(){return new Date().toLocaleTimeString("da-DK",{hour12:!1})}function qm(i){return new Promise(l=>setTimeout(l,i))}function Hd(i,l){const o=l.userID.toLowerCase();return i.map(a=>{if(!a.ownerID)return a;const u=a.ownerID.toLowerCase()===o;return{...a,isOwnedByMe:u,ownerName:u?l.username:a.ownerName}})}function Pd(i,l,o=!1){return(l==null?void 0:l.deviceName)||"Pico"}function jg(i){return Object.fromEntries(i.filter(l=>l.type==="toggle").map(l=>[l.name,!!l.toggleInitial]))}function Hm(i,l){const o=jg(i);for(const a of i)a.type==="toggle"&&l[a.name]!==void 0&&(o[a.name]=l[a.name]);return o}const he=F2((i,l)=>{function o(f,g){i(v=>({logs:[{level:f,message:g,time:Ng()},...v.logs].slice(0,200)}))}function a(f){Es&&clearTimeout(Es),Um+=1,i({toast:{message:f,id:Um}}),Es=setTimeout(()=>i({toast:null}),4500)}function u(f=null){i({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},plotSeries:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:f})}function h(f){return{deviceID:f.deviceID,deviceName:f.deviceName,ownerID:f.ownerID,deviceIcon:f.icon,canOthersConnect:f.canOthersConnect,canOthersEdit:f.canOthersEdit,canOthersEditCode:f.canOthersEditCode,isOwnedByMe:f.isOwnedByMe,ownerName:f.ownerName}}function p(f){const{screen:g,active:v,picoIdeOrigin:x}=l();if(il){il=!1;return}f&&(o("warning",f),a(f)),(g==="control"||g==="connection"||g==="create"||g==="ide"&&x==="control")&&u(v?h(v):null)}return pe=new yg({onProgress:(f,g)=>i({progress:{value:f,label:g}}),onLog:(f,g)=>o(f,g),onRadar:(f,g,v)=>{const x=Date.now(),w={id:`${x}-${Math.random().toString(36).slice(2)}`,angle:g,distance:v,createdAt:x};i(E=>{const j=E.layout.find(V=>V.type==="radar"&&V.name===f),B=(j==null?void 0:j.radarFadeMs)??1200,$=E.radarPings[f]??[];return{radarPings:{...E.radarPings,[f]:[...$.filter(V=>x-V.createdAt<=B),w].slice(-80)}}})},onText:(f,g)=>{i(v=>({textValues:{...v.textValues,[f]:g}}))},onToggleState:(f,g)=>{i(v=>({toggleValues:{...v.toggleValues,[f]:g}}))},onSliderState:(f,g)=>{i(v=>({sliderValues:{...v.sliderValues,[f]:g}}))},onPlot:(f,g,v)=>{const x=Date.now(),w={id:`${x}-${Math.random().toString(36).slice(2)}`,value:g,createdAt:x,label:v};i(E=>{const j=E.plotSeries[f]??[];return{plotSeries:{...E.plotSeries,[f]:[...j,w].slice(-1e3)}}})},onPlotClear:f=>{i(g=>({plotSeries:{...g.plotSeries,[f]:[]}}))},onDisconnect:f=>p(f)}),{screen:"splash",splashTarget:null,user:null,savedDevices:[],connecting:null,progress:{value:0,label:""},toast:null,confirmDialog:null,connectionLost:null,active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},plotSeries:{},logs:[],sideMenuOpen:!1,debuggerOpen:!1,menuPage:null,editMode:!1,dashboardPage:"mine",picoIdeOrigin:"dashboard",init:()=>{const f=$2(),g=f?Hd(_c(),f):_c();f&&xa(g),i({user:f,savedDevices:g,splashTarget:f?"dashboard":"intro"})},finishSplash:()=>{const f=l().splashTarget;i({screen:f??"intro"})},createUser:f=>{const g=f.trim();if(!g)return;const v={username:g,userID:G2()};Od(v),i({user:v,screen:"dashboard"})},findDevice:async f=>{try{const g=await lg(f==null?void 0:f.deviceName);await l().connectToDevice(g,f,!0)}catch(g){g instanceof Error&&g.name!=="NotFoundError"&&o("error",g.message)}},connectToDevice:async(f,g,v,x)=>{var j,B,$;const w=l().user;if(!w||!pe)return!1;il=!1;const E=l().savedDevices.find(V=>V.deviceID===f.id)??g;i({screen:"connection",connecting:{name:Pd(f,E,v),icon:(E==null?void 0:E.deviceIcon)??li},progress:{value:0,label:"Forbinder..."},sliderValues:{},radarPings:{},textValues:{},plotSeries:{}});try{await pe.connect(f);const V=await pe.runHandshake(w),K=f.id,U=(V.kind==="owned"||V.kind==="unowned")&&((j=V.deviceName)==null?void 0:j.trim())||Pd(f,E,v);if(i(M=>M.connecting?{connecting:{...M.connecting,name:U}}:{}),V.kind==="denied"){const q=`Du kan ikke forbinde, fordi ${((B=V.ownerName)==null?void 0:B.trim())||(($=E==null?void 0:E.ownerName)==null?void 0:$.trim())||"ejeren"} ejer enheden og ikke tillader besøgende at forbinde.`;return o("warning",q),a(q),i({screen:"dashboard",connecting:null}),await pe.disconnect(),!0}if(V.kind==="unowned")return i({active:{deviceID:K,deviceName:U,ownerID:w.userID,icon:li,canEdit:!0,canEditCode:!0,canOthersConnect:!1,canOthersEdit:!1,canOthersEditCode:!1,isOwnedByMe:!0,ownerName:w.username,gridCols:Sa,gridRows:Ls},screen:"create"}),!0;const ce={deviceID:K,deviceName:U,ownerID:V.ownerID,deviceIcon:V.icon||(E==null?void 0:E.deviceIcon)||li,canOthersConnect:V.canOthersConnect,canOthersEdit:V.canOthersEdit,canOthersEditCode:V.canOthersEditCode,isOwnedByMe:V.isOwnedByMe,ownerName:V.isOwnedByMe?w.username:V.ownerName??(E==null?void 0:E.ownerName)};i({savedDevices:Ld(ce)});const Y=await pe.requestLayout(),de=Bm(Y),_e=zm(Y);return i({layout:_e,toggleValues:Hm(_e,l().toggleValues),active:{deviceID:K,deviceName:U,ownerID:V.ownerID,icon:V.icon||(E==null?void 0:E.deviceIcon)||li,canEdit:V.canEdit,canEditCode:V.canEditCode,canOthersConnect:V.canOthersConnect,canOthersEdit:V.canOthersEdit,canOthersEditCode:V.canOthersEditCode,isOwnedByMe:V.isOwnedByMe,ownerName:V.isOwnedByMe?w.username:V.ownerName??(E==null?void 0:E.ownerName),gridCols:de.cols,gridRows:de.rows},screen:"control",connecting:null,connectionLost:null}),!0}catch(V){const K=V instanceof Error?V.message:"Forbindelsen mislykkedes.";return x!=null&&x.silent?o("info",K):(o("error",K),a("Forbindelsen mislykkedes.")),i({screen:"dashboard",connecting:null}),await pe.disconnect().catch(()=>{}),!1}},finishCreate:async(f,g,v,x,w,E)=>{const{user:j,active:B}=l();if(!(!j||!B||!pe))try{pe.setBusy(!0),await pe.create(j,f,g,v,x,w,E),pe.setBusy(!1);const $={deviceID:B.deviceID,deviceName:B.deviceName,ownerID:j.userID,deviceIcon:f,canOthersConnect:g,canOthersEdit:g&&v,canOthersEditCode:g&&x,isOwnedByMe:!0,ownerName:j.username};i({savedDevices:Ld($)});const V=await pe.requestLayout(),K=Bm(V),U=zm(V);i({layout:U,toggleValues:Hm(U,l().toggleValues),active:{...B,ownerID:j.userID,icon:f,canEdit:!0,canEditCode:!0,canOthersConnect:g,canOthersEdit:g&&v,canOthersEditCode:g&&x,ownerName:j.username,gridCols:K.cols,gridRows:K.rows},screen:"control"})}catch($){pe.setBusy(!1);const V=$ instanceof Error?$.message:"Oprettelse mislykkedes.";o("error",V),a("Oprettelse mislykkedes."),i({screen:"dashboard"}),await pe.disconnect().catch(()=>{})}},saveDeviceSettings:async(f,g,v,x,w,E)=>{const{active:j,user:B}=l();if(!(!j||!pe||!j.isOwnedByMe))try{pe.setBusy(!0),await pe.updateDeviceSettings(f,g,v,x,w,E,B==null?void 0:B.username);const $={...j,icon:f,canEdit:!0,canEditCode:!0,canOthersConnect:g,canOthersEdit:g&&v,canOthersEditCode:g&&x,ownerName:(B==null?void 0:B.username)??j.ownerName,gridCols:w,gridRows:E},V={deviceID:j.deviceID,deviceName:j.deviceName,ownerID:j.ownerID??(B==null?void 0:B.userID),deviceIcon:f,canOthersConnect:g,canOthersEdit:g&&v,canOthersEditCode:g&&x,isOwnedByMe:!0,ownerName:(B==null?void 0:B.username)??j.ownerName};i({active:$,savedDevices:Ld(V)}),a("Enhedsindstillinger gemt.")}catch($){o("error",$ instanceof Error?$.message:"Kunne ikke gemme enhedsindstillinger."),a("Kunne ikke gemme enhedsindstillinger.")}finally{pe.setBusy(!1)}},cancelCreate:async()=>{pe&&await pe.disconnect().catch(()=>{}),i({screen:"dashboard",active:null,connecting:null})},disconnect:async()=>{il=!0,u(null),pe&&await pe.disconnect().catch(()=>{}),il=!1},removeSavedDevice:f=>{i({savedDevices:W2(f)})},clearSavedDevices:()=>{X2(),i({savedDevices:[]}),a("Gemte enheder ryddet.")},resetApplicationData:async()=>{il=!0,pe!=null&&pe.connected&&await pe.disconnect().catch(()=>{}),K2(),window.location.reload()},updateUsername:f=>{const g=l().user,v=f.trim();if(!g||!v)return;const x={...g,username:v};Od(x),i(w=>{var j;const E=Hd(w.savedDevices,x);return xa(E),{user:x,active:(j=w.active)!=null&&j.isOwnedByMe?{...w.active,ownerName:v}:w.active,savedDevices:E}}),a("Brugernavn gemt.")},createOwnerPairingCode:()=>{const f=l().user;return f?Ag(f):null},applyOwnerPairingCode:f=>{var v;const g=Rg(f,(v=l().user)==null?void 0:v.username);return g?(Od(g),i(x=>{var E,j,B;const w=Hd(x.savedDevices,g);return xa(w),{user:g,active:((j=(E=x.active)==null?void 0:E.ownerID)==null?void 0:j.toLowerCase())===g.userID.toLowerCase()||(B=x.active)!=null&&B.isOwnedByMe?{...x.active,isOwnedByMe:!0,ownerID:g.userID,ownerName:g.username}:x.active,savedDevices:w}}),a("Ejerkoden er gemt. Denne browser bruger nu samme ejer-GUID."),!0):(a("Ejerkoden kunne ikke læses."),!1)},openPicoIde:()=>{const f=l().screen==="control"&&!!(pe!=null&&pe.connected),g=l().active;if(f&&g&&!g.isOwnedByMe&&!g.canEditCode){a("Ejeren tillader ikke, at gæster åbner Kodeværkstedet på denne enhed."),o("warning","Kodeværkstedet er blokeret, fordi ejeren ikke tillader gæster at redigere kode."),i({sideMenuOpen:!1});return}i(v=>({screen:"ide",picoIdeOrigin:f?"control":"dashboard",active:f?v.active:null,layout:f?v.layout:[],sliderValues:f?v.sliderValues:{},toggleValues:f?v.toggleValues:{},radarPings:f?v.radarPings:{},textValues:f?v.textValues:{},plotSeries:f?v.plotSeries:{},editMode:!1,sideMenuOpen:!1,menuPage:null}))},closePicoIde:()=>{const{picoIdeOrigin:f,active:g}=l();i({screen:f==="control"&&g&&(pe!=null&&pe.connected)?"control":"dashboard",sideMenuOpen:!1,menuPage:null,picoIdeOrigin:"dashboard"})},isBleConnected:()=>!!(pe!=null&&pe.connected),bleListFiles:async()=>pe!=null&&pe.connected?pe.listFiles("/"):[],bleReadText:async(f,g,v)=>{if(!(pe!=null&&pe.connected))throw new Error("Ingen BLE-forbindelse.");return pe.readText(f,g,v)},bleWriteText:async(f,g,v)=>{if(!(pe!=null&&pe.connected))throw new Error("Ingen BLE-forbindelse.");await pe.writeText(f,g,v)},bleDeleteFile:async f=>{if(!(pe!=null&&pe.connected))throw new Error("Ingen BLE-forbindelse.");await pe.deleteFile(f)},bleRestart:async()=>{pe!=null&&pe.connected&&await pe.restart()},bleRestartAndReconnect:async(f="control")=>{const{active:g}=l();if(!(pe!=null&&pe.connected)||!g)return!1;const v={deviceID:g.deviceID,deviceName:g.deviceName,ownerID:g.ownerID,deviceIcon:g.icon,canOthersConnect:g.canOthersConnect,canOthersEdit:g.canOthersEdit,canOthersEditCode:g.canOthersEditCode,isOwnedByMe:g.isOwnedByMe,ownerName:g.ownerName};il=!0,o("info","Genstarter Pico og forsøger automatisk genforbindelse...");try{await pe.restart()}catch{}i({progress:{value:15,label:"Venter på Pico genstart..."},connecting:{name:v.deviceName,icon:v.deviceIcon}});for(let x=0;x<12&&(pe!=null&&pe.connected);x+=1)await qm(250);pe!=null&&pe.connected||(il=!1);for(let x=1;x<=8;x+=1){await qm(x===1?1200:850);try{const E=(await zh()).find(B=>B.id===v.deviceID);if(!E){i({progress:{value:Math.min(88,20+x*8),label:"Venter på browser-tilladelse..."}});continue}if(i({progress:{value:Math.min(92,24+x*8),label:`Genforbinder (${x}/8)...`}}),!await l().connectToDevice(E,v,void 0,{silent:!0}))continue;return f==="ide"&&i(B=>({screen:"ide",picoIdeOrigin:"control",active:B.active,layout:B.layout,sliderValues:B.sliderValues,toggleValues:B.toggleValues,radarPings:B.radarPings,textValues:B.textValues,plotSeries:B.plotSeries,editMode:!1,sideMenuOpen:!1,menuPage:null})),a("Pico genforbundet."),!0}catch(w){o("warning",w instanceof Error?w.message:"Genforbindelse mislykkedes.")}}return a("Kunne ikke genforbinde automatisk. Vælg Picoen igen."),il=!1,i({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},plotSeries:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:v}),!1},reconnectLostDevice:async()=>{var g;const f=l().connectionLost;if(f){i({connectionLost:null});try{if((g=navigator.bluetooth)!=null&&g.getDevices){const x=(await navigator.bluetooth.getDevices()).find(w=>w.id===f.deviceID);if(x&&await l().connectToDevice(x,f,void 0,{silent:!0}))return}}catch{}o("info",`Genforbind: åbner enhedsvælger for ${f.deviceName}.`),await l().findDevice(f)}},dismissConnectionLost:()=>i({connectionLost:null}),sendButton:(f,g)=>pe==null?void 0:pe.enqueueButton(f,g),sendSlider:(f,g)=>{i(v=>({sliderValues:{...v.sliderValues,[f]:g}})),pe==null||pe.enqueueSlider(f,g)},sendToggle:(f,g)=>{i(v=>({toggleValues:{...v.toggleValues,[f]:g}})),pe==null||pe.enqueueToggle(f,g)},sendJoystick:(f,g,v)=>pe==null?void 0:pe.enqueueJoystick(f,g,v),sendDpad:(f,g,v)=>pe==null?void 0:pe.enqueueDpad(f,g,v),saveLayout:async f=>{if(pe)try{pe.setBusy(!0),await pe.saveLayout(f),i({layout:f,editMode:!1})}catch(g){o("error",g instanceof Error?g.message:"Kunne ikke gemme layout.")}finally{pe.setBusy(!1)}},setEditMode:f=>i({editMode:f,sideMenuOpen:!1,menuPage:null}),setDashboardPage:f=>i({dashboardPage:f}),toggleSideMenu:f=>i(g=>({sideMenuOpen:f??!g.sideMenuOpen})),toggleDebugger:f=>i(g=>({debuggerOpen:f??!g.debuggerOpen,sideMenuOpen:!1,menuPage:null})),openMenuPage:f=>i({menuPage:f,sideMenuOpen:!1}),closeMenuPage:()=>i({menuPage:null}),clearLogs:()=>i({logs:[]}),log:(f,g)=>o(f,g),askConfirm:f=>i({confirmDialog:f}),closeConfirm:()=>i({confirmDialog:null}),showToast:f=>a(f),dismissToast:()=>{Es&&clearTimeout(Es),i({toast:null})}}}),Qd="PKP-EJER";function Ag(i){var a;const l=i.userID.toLowerCase(),o=((a=l.match(/.{1,4}/g))==null?void 0:a.join("-"))??l;return`${Qd}-${o}-${Ph(l)}`}function Rg(i,l="Ejer"){const o=i.trim().toUpperCase().replace(/\s+/g,"-");if(!o.startsWith(`${Qd}-`))return null;const a=o.slice(Qd.length+1).split("-").filter(Boolean),u=a.pop()??"",h=a.join("").toLowerCase();return!/^[a-f0-9]{32}$/.test(h)||u!==Ph(h)?null:{userID:h,username:l.trim()||"Ejer"}}function Ph(i){let l=2166136261;for(const o of i.toLowerCase())l^=o.charCodeAt(0),l=Math.imul(l,16777619)>>>0;return(l%65536).toString(16).toUpperCase().padStart(4,"0")}function Pm(){var o,a;if(typeof window>"u")return 0;const i=(a=(o=window.screen)==null?void 0:o.orientation)==null?void 0:a.angle,l=typeof i=="number"?(Math.round(i/90)*90%360+360)%360:0;return l===90||l===180||l===270?l:0}function Cg(){const[i,l]=A.useState(0);return A.useEffect(()=>{var u;if(typeof window>"u")return;l(Pm());const o=()=>l(Pm()),a=(u=window.screen)==null?void 0:u.orientation;return a==null||a.addEventListener("change",o),window.addEventListener("orientationchange",o),()=>{a==null||a.removeEventListener("change",o),window.removeEventListener("orientationchange",o)}},[]),i}const Dg=1850,Og=450;function Lg(){const i=he(a=>a.splashTarget),l=he(a=>a.finishSplash),o=i?"splash-screen-animation splash-ready":"splash-pending";return A.useEffect(()=>{if(!i)return;const u=window.matchMedia("(prefers-reduced-motion: reduce)").matches?Og:Dg,h=window.setTimeout(l,u);return()=>window.clearTimeout(h)},[l,i]),d.jsxs("div",{className:`screen splash-screen ${o}`,"aria-label":"Teknologiskolen starter",children:[d.jsx("div",{className:"splash-white-cover"}),d.jsx("div",{className:"splash-red-field"}),d.jsx("div",{className:"splash-brand","aria-hidden":"true",children:d.jsx("div",{className:"splash-mark splash-logo-shell",children:d.jsx("img",{className:"splash-logo",src:Eg,alt:""})})}),d.jsx("span",{className:"sr-only",children:"Teknologiskolen"})]})}function Im(){const i=he(u=>u.createUser),[l,o]=A.useState(""),a=l.length>0;return d.jsxs("div",{className:"screen intro",children:[d.jsxs("div",{className:"intro-header",children:[d.jsx("span",{className:"intro-header-fill","aria-hidden":"true"}),d.jsx("img",{className:"intro-header-image",src:Sg,alt:"Teknologiskolen"}),d.jsx("span",{className:"intro-header-fill","aria-hidden":"true"})]}),d.jsxs("div",{className:"intro-body",children:[d.jsx("p",{children:"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Find selv på et navn, du vil vises som i appen. Det er ikke et login, og navnet gemmes kun i denne browser."}),d.jsxs("div",{className:`field ${a?"filled":""}`,children:[d.jsx("input",{id:"username",value:l,onChange:u=>o(u.target.value),maxLength:32,autoComplete:"off","aria-label":"Brugernavn"}),d.jsx("label",{htmlFor:"username",children:"Brugernavn"})]}),d.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!a,onClick:()=>i(l),children:"Fortsæt"})]}),d.jsx("span",{className:"version",children:Os})]})}function hf({title:i,onMenu:l}){return d.jsx("header",{className:"topbar",children:d.jsxs("div",{className:"topbar-inner",children:[d.jsx("h1",{children:i}),d.jsx("button",{className:"iconbtn",type:"button",onClick:l,"aria-label":"Menu",children:d.jsx(Kt,{name:"menu"})})]})})}var pf=Lh();function It({title:i,onClose:l,children:o,closeVariant:a="plain"}){const u=a==="circle",h=A.useRef(!1);return pf.createPortal(d.jsx("div",{className:"modal-root",onPointerDown:p=>{h.current=p.target===p.currentTarget},onClick:p=>{p.target===p.currentTarget&&h.current&&l(),h.current=!1},children:d.jsxs("div",{className:"modal",onClick:p=>p.stopPropagation(),children:[d.jsxs("div",{className:"modal-head",children:[d.jsx("h3",{children:i}),d.jsx("button",{className:`iconbtn ${u?"modal-close-circle":""}`,type:"button",onClick:l,"aria-label":"Luk",children:d.jsx(Kt,{name:u?"delete":"close",size:u?30:24})})]}),d.jsx("div",{className:"modal-body",children:o})]})}),document.body)}const gf="https://api.iconify.design",Bg=["tabler","lucide","ph","material-symbols","solar","mingcute","ri","mdi"],Ih="pkp.iconcache.";function zg(i){const[l,...o]=i.split(":");return`${gf}/${l}/${encodeURIComponent(o.join(":"))}.svg`}function Vh(i){try{return localStorage.getItem(Ih+i)}catch{return null}}function Fh(i,l){try{localStorage.setItem(Ih+i,l)}catch{}}function Ug(i){return i.replace(/\s(width|height)="[^"]*"/g,"").trim()}async function Gh(i){const l=Vh(i);if(l)return l;const[o,...a]=i.split(":"),u=a.join(":");if(!o||!u)return null;try{const h=await fetch(`${gf}/${o}/${encodeURIComponent(u)}.svg`);if(!h.ok)return null;const p=await h.text();return p.startsWith("<svg")?Ug(p):null}catch{return null}}async function $h(i,l=120){var p;const o=i.trim();if(!o)return{icons:[],total:0};const a=`${gf}/search?query=${encodeURIComponent(o)}&limit=${l}&prefixes=${Bg.join(",")}`,u=await fetch(a);if(!u.ok)throw new Error(`Iconify search failed (${u.status})`);const h=await u.json();return{icons:h.icons??[],total:h.total??((p=h.icons)==null?void 0:p.length)??0}}const qg=["robot","sensor","motor","raspberry pi","led","battery","bluetooth","car","rocket","gamepad","gauge","radar","compass","temperature","wifi","antenna","gear","bolt","lightbulb","joystick","drone","circuit","chip","servo","wheel","magnet","speaker","camera","flask"];function Vm(i){const l=[...i];for(let o=l.length-1;o>0;o--){const a=Math.floor(Math.random()*(o+1));[l[o],l[a]]=[l[a],l[o]]}return l}const Hg=8,Pg=20;async function Ig(i=120){const l=Vm(qg).slice(0,Hg),o=await Promise.all(l.map(p=>$h(p,Pg).catch(()=>({icons:[],total:0})))),a=new Set,u=[];for(const p of o)for(const f of p.icons)a.has(f)||(a.add(f),u.push(f));const h=Vm(u).slice(0,i);return{icons:h,total:h.length}}const Wd=Bs(mf(li)??"");function Fm(i){if(!i)return Wd;const l=mf(i);if(l)return Bs(l);const o=Vh(i);return o?Bs(o):null}function qs({slug:i,className:l,alt:o=""}){const[a,u]=A.useState(()=>Fm(i)??Wd);return A.useEffect(()=>{const h=Fm(i);if(h){u(h);return}if(u(Wd),!i||typeof navigator<"u"&&!navigator.onLine)return;let p=!1;return Gh(i).then(f=>{p||!f||(Fh(i,f),u(Bs(f)))}),()=>{p=!0}},[i]),d.jsx("img",{className:l,src:a,alt:o})}function Gm(){const i=he(E=>E.savedDevices),l=he(E=>E.toggleSideMenu),o=he(E=>E.findDevice),a=he(E=>E.removeSavedDevice),u=he(E=>E.askConfirm),h=he(E=>E.dashboardPage),p=he(E=>E.setDashboardPage),f=$g(),[g,v]=A.useState(null),x=Ec(),w=i.filter(E=>h==="mine"?E.isOwnedByMe:!E.isOwnedByMe).sort(Gg);return d.jsxs("div",{className:"screen dashboard-screen",children:[d.jsx(hf,{title:"Hovedmenu",onMenu:()=>l()}),d.jsxs("div",{className:"content dash-content",children:[!x&&d.jsx("div",{className:"notice",children:"Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På Android: brug Chrome."}),d.jsxs("div",{className:"segmented",children:[d.jsx("button",{type:"button",className:h==="mine"?"active":"",onClick:()=>p("mine"),children:"Mine Enheder"}),d.jsx("button",{type:"button",className:h==="andre"?"active":"",onClick:()=>p("andre"),children:"Andre Enheder"})]}),d.jsx("div",{className:"panel panel-white device-list",children:w.length===0?d.jsx("div",{className:"device-list-empty",children:h==="mine"?"Ingen enheder endnu. Tryk på + for at finde en enhed.":"Ingen andre enheder gemt."}):w.map(E=>d.jsx(Vg,{device:E,disabled:!x,onConnect:()=>f(E),onSettings:()=>v(E)},E.deviceID))})]}),d.jsx("button",{className:"fab",type:"button",onClick:()=>o(),disabled:!x,"aria-label":"Find enhed",children:d.jsx(Kt,{name:"plus",size:30})}),d.jsx("span",{className:"version",children:Os}),g&&d.jsx(It,{title:"Enhedsindstillinger",onClose:()=>v(null),children:d.jsxs("div",{className:"settings-stack",children:[d.jsxs("div",{className:"saved-device-head",children:[d.jsx(qs,{slug:g.deviceIcon}),d.jsx("strong",{children:g.deviceName})]}),d.jsx(Ss,{label:"Gemte indstillinger",value:"Denne browser"}),d.jsx(Ss,{label:"Ejer",value:Fg(g)}),d.jsx(Ss,{label:"Offentlig",value:g.canOthersConnect?"Ja":"Nej"}),d.jsx(Ss,{label:"Andre må redigere layout",value:g.canOthersEdit?"Ja":"Nej"}),d.jsx(Ss,{label:"Andre må redigere kode",value:g.canOthersEditCode?"Ja":"Nej"}),d.jsx("div",{className:"notice",children:"Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen."}),d.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!x,onClick:()=>{const E=g;v(null),f(E)},children:"Forbind"}),d.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>u({title:"Glem enhed",message:`Vil du fjerne ${g.deviceName} fra gemte enheder?`,confirmLabel:"Glem",onConfirm:()=>{a(g.deviceID),v(null)}}),children:"Glem enhed"})]})})]})}function Vg({device:i,disabled:l,onConnect:o,onSettings:a}){return d.jsxs("div",{className:"device-tile-wrap",children:[d.jsxs("button",{className:"device-tile",type:"button",onClick:o,disabled:l,children:[d.jsx(qs,{className:"device-tile-icon",slug:i.deviceIcon}),d.jsx("span",{className:"device-tile-name",children:i.deviceName})]}),d.jsx("button",{className:"device-tile-del",type:"button",onClick:a,"aria-label":"Enhedsindstillinger",children:d.jsx(Kt,{name:"settings"})})]})}function Ss({label:i,value:l}){return d.jsxs("div",{className:"settings-row",children:[d.jsx("span",{children:i}),d.jsx("strong",{children:l})]})}function Fg(i){var l;return i.isOwnedByMe?"Dig":((l=i.ownerName)==null?void 0:l.trim())||"Anden bruger"}function Gg(i,l){return i.deviceName.localeCompare(l.deviceName,"da",{sensitivity:"base"})}function $g(){const i=he(a=>a.connectToDevice),l=he(a=>a.findDevice),o=he(a=>a.log);return async a=>{const h=(await zh()).find(p=>p.id===a.deviceID);h&&await i(h,a,void 0,{silent:!0})||(o("info",`Genforbind: åbner enhedsvælger for ${a.deviceName}.`),await l(a))}}function Yg(){const i=he(o=>o.connecting),l=he(o=>o.progress);return d.jsxs("div",{className:"screen connection",children:[d.jsx("div",{className:"device-icon-pick",children:d.jsx(qs,{slug:i==null?void 0:i.icon})}),d.jsxs("h2",{style:{margin:0,color:"var(--red)"},children:["Forbinder til ",(i==null?void 0:i.name)??"enhed"]}),d.jsx("div",{className:"spinner"}),d.jsxs("div",{style:{width:"100%"},children:[d.jsx("div",{className:"progress-track",children:d.jsx("div",{className:"progress-fill",style:{width:`${l.value}%`}})}),d.jsx("p",{style:{color:"var(--muted)",fontWeight:600,marginTop:12},children:l.label})]})]})}const $m=24;function Xg(){const[i,l]=A.useState(1),o=A.useRef(null),a=A.useCallback(u=>{var f;if((f=o.current)==null||f.disconnect(),o.current=null,!u)return;const h=()=>{const g=getComputedStyle(u).gridTemplateColumns,v=g&&g!=="none"?g.split(" ").filter(Boolean).length:1;l(x=>x===v?x:Math.max(1,v))};h();const p=new ResizeObserver(h);p.observe(u),o.current=p},[]);return A.useEffect(()=>()=>{var u;return(u=o.current)==null?void 0:u.disconnect()},[]),[i,a]}function Kg(i,l,o){const a=Math.min(Math.max(o,1),l);let u=i-Math.floor(a/2);return u=Math.max(0,Math.min(u,l-a)),Array.from({length:a},(h,p)=>u+p)}function Yh({selected:i,onSelect:l,onClose:o}){const[a,u]=A.useState("library"),[h,p]=Xg(),f=A.useMemo(()=>h*Math.max(1,Math.round($m/h)),[h]),[g,v]=A.useState(()=>{const N=i?mc.findIndex(P=>P.slug===i):-1;return N>=0?Math.floor(N/$m):0}),[x,w]=A.useState(""),[E,j]=A.useState([]),[B,$]=A.useState(0),[V,K]=A.useState(!1),[U,ce]=A.useState(null),[Y,de]=A.useState(!1),[_e,M]=A.useState(typeof navigator>"u"?!0:navigator.onLine);A.useEffect(()=>{const N=()=>M(navigator.onLine);return window.addEventListener("online",N),window.addEventListener("offline",N),()=>{window.removeEventListener("online",N),window.removeEventListener("offline",N)}},[]);function q(N){l(N),o(),mf(N)||Gh(N).then(P=>{P&&Fh(N,P)})}async function D(N){if(!_e){ce("Du er offline. Vælg fra «Bibliotek», eller find flere ikoner når du er online.");return}K(!0),ce(null),de(!0);try{const P=N==="random"?await Ig():await $h(x);j(P.icons),$(0),P.icons.length===0&&ce("Ingen ikoner fundet. Prøv et andet ord.")}catch{ce("Kunne ikke hente ikoner. Tjek din internetforbindelse."),j([])}finally{K(!1)}}const Q=Math.ceil(mc.length/f),C=A.useMemo(()=>mc.slice(g*f,g*f+f),[g,f]),ae=Math.ceil(E.length/f),le=A.useMemo(()=>E.slice(B*f,B*f+f),[E,B,f]),ye=_e&&!V&&!U&&le.length>0;A.useEffect(()=>{v(N=>Math.min(N,Math.max(0,Q-1)))},[Q]),A.useEffect(()=>{$(N=>Math.min(N,Math.max(0,ae-1)))},[ae]);const ee=A.useRef(null);return A.useEffect(()=>{var N;(N=ee.current)==null||N.scrollTo({top:0})},[a,g,B]),d.jsx(It,{title:"Vælg et ikon",onClose:o,children:d.jsxs("div",{className:"icon-picker",children:[d.jsxs("div",{className:"icon-picker-head",children:[d.jsxs("div",{className:"icon-tabs",role:"tablist",children:[d.jsx("button",{type:"button",role:"tab","aria-selected":a==="library",className:a==="library"?"active":"",onClick:()=>u("library"),children:"Bibliotek"}),d.jsx("button",{type:"button",role:"tab","aria-selected":a==="search",className:a==="search"?"active":"",onClick:()=>u("search"),children:"Søg online"})]}),a==="library"?d.jsx("p",{className:"icon-picker-caption",children:"Tryk på et ikon for at vælge det."}):d.jsxs("form",{className:"icon-search",onSubmit:N=>{N.preventDefault(),D("query")},children:[d.jsx("input",{type:"search",value:x,placeholder:"Søg (fx robot, bil, sensor)",onChange:N=>w(N.target.value),disabled:!_e,"aria-label":"Søg efter ikon",autoFocus:!0}),d.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!_e||V,children:"Søg"}),d.jsx("button",{type:"button",className:"btn icon-dice",onClick:()=>void D("random"),disabled:!_e||V,title:"Vis tilfældige ikoner","aria-label":"Vis tilfældige ikoner",children:d.jsx(Xm,{})})]})]}),d.jsxs("div",{className:"icon-picker-body",ref:ee,children:[a==="library"&&d.jsx("div",{className:"icon-grid",ref:p,children:C.map(N=>d.jsx(Ym,{src:Bs(N.svg),label:N.label,selected:N.slug===i,onClick:()=>q(N.slug)},N.slug))}),a==="search"&&d.jsxs(d.Fragment,{children:[!_e&&d.jsx("p",{className:"icon-hint",children:"Du er offline. Vælg fra «Bibliotek», eller find flere ikoner når du er online."}),_e&&V&&d.jsx("p",{className:"icon-hint",children:"Henter ikoner…"}),_e&&!V&&U&&d.jsx("p",{className:"icon-hint icon-hint-error",children:U}),_e&&!V&&!U&&!Y&&d.jsxs("p",{className:"icon-hint",children:["Skriv et ord og tryk ",d.jsx("strong",{children:"Søg"})," - eller tryk"," ",d.jsx("span",{className:"icon-hint-dice","aria-hidden":"true",children:d.jsx(Xm,{})})," ","for tilfældige ikoner."]}),ye&&d.jsx("div",{className:"icon-grid",ref:p,children:le.map(N=>d.jsx(Ym,{src:zg(N),label:N,selected:N===i,onClick:()=>q(N)},N))})]})]}),d.jsxs("div",{className:"icon-picker-foot",children:[a==="library"&&d.jsx(Qm,{current:g,total:Q,onGo:v}),a==="search"&&ye&&d.jsx(Qm,{current:B,total:ae,onGo:$})]})]})})}function Ym({src:i,label:l,selected:o,onClick:a}){return d.jsxs("button",{type:"button",className:`icon-tile ${o?"selected":""}`,onClick:a,"aria-label":l,"aria-pressed":o,title:l,children:[d.jsx("img",{src:i,alt:"",loading:"lazy"}),o&&d.jsx("span",{className:"icon-tile-check","aria-hidden":"true",children:"✓"})]})}function Xm(){return d.jsxs("svg",{className:"dice-glyph",viewBox:"0 0 24 24",width:22,height:22,"aria-hidden":"true",fill:"currentColor",children:[d.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"4",ry:"4",fill:"none",stroke:"currentColor",strokeWidth:"2"}),d.jsx("circle",{cx:"8",cy:"8",r:"1.7"}),d.jsx("circle",{cx:"16",cy:"8",r:"1.7"}),d.jsx("circle",{cx:"12",cy:"12",r:"1.7"}),d.jsx("circle",{cx:"8",cy:"16",r:"1.7"}),d.jsx("circle",{cx:"16",cy:"16",r:"1.7"})]})}const Km=48;function Qm({current:i,total:l,onGo:o}){const a=A.useRef(null),[u,h]=A.useState(7);return A.useLayoutEffect(()=>{const p=a.current;if(!p)return;const f=()=>{const v=p.clientWidth-2*Km;h(Math.max(1,Math.floor(v/Km)))};f();const g=new ResizeObserver(f);return g.observe(p),()=>g.disconnect()},[]),l<=1?null:d.jsxs("div",{className:"icon-pager",ref:a,children:[d.jsx("button",{type:"button",className:"icon-pager-arrow",onClick:()=>o(Math.max(0,i-1)),disabled:i===0,"aria-label":"Forrige side",children:d.jsx(Kt,{name:"back",size:20})}),Kg(i,l,u).map(p=>d.jsx("button",{type:"button",className:`icon-pager-num ${p===i?"active":""}`,onClick:()=>o(p),"aria-label":`Side ${p+1}`,"aria-current":p===i?"page":void 0,children:p+1},p)),d.jsx("button",{type:"button",className:"icon-pager-arrow",onClick:()=>o(Math.min(l-1,i+1)),disabled:i===l-1,"aria-label":"Næste side",children:d.jsx(Kt,{name:"back",size:20,className:"flip-x"})})]})}function Qg(){const i=he(Y=>Y.finishCreate),l=he(Y=>Y.cancelCreate),[o,a]=A.useState(li),[u,h]=A.useState(!1),[p,f]=A.useState(!1),[g,v]=A.useState(!1),[x,w]=A.useState(!1),[E,j]=A.useState(Sa),[B,$]=A.useState(Ls),[V,K]=A.useState(!1),U=Y=>Number.isFinite(Y)?Math.max(ka,Math.min(Ea,Math.round(Y))):Sa;async function ce(){K(!0),await i(o,p,p&&g,p&&x,U(E),U(B))}return d.jsxs("div",{className:"screen",children:[d.jsx("header",{className:"topbar",children:d.jsx("h1",{children:"Opret Enhed"})}),d.jsxs("div",{className:"content create-body",children:[d.jsxs("button",{type:"button",className:"device-icon-pick",onClick:()=>h(!0),"aria-label":"Vælg ikon",children:[d.jsx(qs,{slug:o}),d.jsx("span",{className:"badge",children:d.jsx(Kt,{name:"plus",size:22})})]}),d.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),d.jsxs("div",{className:"segmented",children:[d.jsx("button",{type:"button",className:p?"":"active",onClick:()=>f(!1),children:"Privat"}),d.jsx("button",{type:"button",className:p?"active":"",onClick:()=>f(!0),children:"Offentlig"})]}),p&&d.jsxs(d.Fragment,{children:[d.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),d.jsxs("div",{className:"segmented",children:[d.jsx("button",{type:"button",className:g?"":"active",onClick:()=>v(!1),children:"Nej"}),d.jsx("button",{type:"button",className:g?"active":"",onClick:()=>v(!0),children:"Ja"})]}),d.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),d.jsxs("div",{className:"segmented",children:[d.jsx("button",{type:"button",className:x?"":"active",onClick:()=>w(!1),children:"Nej"}),d.jsx("button",{type:"button",className:x?"active":"",onClick:()=>w(!0),children:"Ja"})]})]}),d.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter (kolonner × rækker)"}),d.jsxs("div",{className:"row",style:{width:"100%"},children:[d.jsxs("div",{className:"grid-field",children:[d.jsx("label",{htmlFor:"cols",children:"Kolonner"}),d.jsx("input",{id:"cols",type:"number",min:ka,max:Ea,value:Number.isNaN(E)?"":E,onChange:Y=>j(parseInt(Y.target.value,10)),onBlur:()=>j(U(E))})]}),d.jsxs("div",{className:"grid-field",children:[d.jsx("label",{htmlFor:"rows",children:"Rækker"}),d.jsx("input",{id:"rows",type:"number",min:ka,max:Ea,value:Number.isNaN(B)?"":B,onChange:Y=>$(parseInt(Y.target.value,10)),onBlur:()=>$(U(B))})]})]}),d.jsxs("div",{className:"row",style:{marginTop:"auto",width:"100%"},children:[d.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>l(),disabled:V,children:"Annuller"}),d.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:ce,disabled:V,children:V?"Opretter...":"Opret"})]})]}),u&&d.jsx(Yh,{selected:o,onSelect:a,onClose:()=>h(!1)}),d.jsx("span",{className:"version",children:Os})]})}const Ta=8;function hc(i){return Math.max(5,Math.min(22,i))}function Wg(i,l,o){const a=Math.max(1,i.length),u=(l-Ta*2)/(a*.58),h=(o-Ta*2)*.48;return hc(Math.min(u,h))}function Ai(i,l,o){switch(o){case 90:return{x:-l,y:i};case 180:return{x:-i,y:-l};case 270:return{x:l,y:-i};default:return{x:i,y:l}}}function bc(i){return(360-i)%360}function Zg(i,l,o,a){const u=a===90||a===270;return Wg(i,u?o:l,u?l:o)}function yc({name:i,width:l,height:o,rotation:a}){return d.jsx("span",{style:{display:"inline-block",fontWeight:800,fontSize:Zg(i,l,o,a),transform:a?`rotate(${a}deg)`:void 0,whiteSpace:a===90||a===270?"nowrap":void 0},children:i})}function Jg(i,l,o,a,u){const h=i.trim().split(/\s+/).filter(Boolean),p=Math.max(1,i.replace(/\s+/g,"").length+Math.max(0,h.length-1)*1.6),f=u?hc(Math.min(l/4.6,o/4.6,12)):0,g=u?f+Ta:Ta;if(a){const w=Math.max(1,o-g*2);return{fontSize:hc(Math.min(l*.48,w/(p*1.04))),endFontSize:f,centerInset:u?{top:g,bottom:g}:{}}}const v=Math.max(1,l-g*4.2);return{fontSize:hc(Math.min(o*.42,v/(p*.58))),endFontSize:f,centerInset:u?{left:g*2.1,right:g*2.1}:{}}}function e_({control:i,rect:l,disabled:o,orientation:a,latestValue:u,toggleValue:h,radarPings:p=[],textValue:f,plotPoints:g=[],onButton:v,onSlider:x,onToggle:w,onJoystick:E,onDpad:j}){const B=A.useRef(!1),[$,V]=A.useState(!1),K={left:l.cx,top:l.cy,width:l.width,height:l.height};if(i.type==="button"){const U=()=>{o||!B.current||(B.current=!1,V(!1),v(i.name,!1))};return d.jsx("div",{className:"control",style:K,children:d.jsx("button",{className:`control-button ${$?"pressed":""}`,type:"button",disabled:o,style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},onPointerDown:ce=>{var Y,de;o||(ce.preventDefault(),(de=(Y=ce.currentTarget).setPointerCapture)==null||de.call(Y,ce.pointerId),B.current=!0,V(!0),v(i.name,!0))},onPointerUp:ce=>{var Y,de;ce.preventDefault(),(de=(Y=ce.currentTarget).releasePointerCapture)==null||de.call(Y,ce.pointerId),U()},onPointerCancel:U,onLostPointerCapture:U,children:d.jsx(yc,{name:i.name,width:l.width,height:l.height,rotation:a})})})}if(i.type==="toggle"){const U=!!h;return d.jsx("div",{className:"control",style:K,children:d.jsx("button",{className:`control-toggle ${U?"on":""}`,type:"button",disabled:o,"aria-pressed":U,style:{width:"100%",height:"100%"},onPointerDown:ce=>{o||(ce.preventDefault(),w(i.name,!U))},children:d.jsx(yc,{name:i.name,width:l.width,height:l.height,rotation:a})})})}return i.type==="radar"?d.jsx("div",{className:"control",style:K,children:d.jsx(Kh,{control:i,pings:p,width:l.width,height:l.height,rotation:a})}):i.type==="text"?d.jsx("div",{className:"control",style:K,children:d.jsx(Xh,{message:f??i.name,width:l.width,height:l.height,rotation:a})}):i.type==="plot"?d.jsx("div",{className:"control",style:K,children:d.jsx(Wh,{control:i,points:g,width:l.width,height:l.height,rotation:a})}):i.type==="joystick"?d.jsx("div",{className:"control",style:K,children:d.jsx(E_,{control:i,disabled:o,orientation:a,onJoystick:E,width:l.width,height:l.height})}):i.type==="dpad"?d.jsx("div",{className:"control",style:K,children:d.jsx(C_,{control:i,disabled:o,orientation:a,onDpad:j})}):d.jsx("div",{className:"control",style:K,children:d.jsx(k_,{control:i,disabled:o,orientation:a,latestValue:u,onSlider:x,width:l.width,height:l.height})})}function t_(i,l,o){const u=(i.trim()||" ").split(`
`),h=u.reduce((E,j)=>j.split(/\s+/).filter(Boolean).reduce(($,V)=>Math.max($,V.length),E),1),p=Math.max(1,Math.floor(h*1.9)),f=Math.max(u.length,u.reduce((E,j)=>E+Math.max(1,Math.ceil(Math.max(1,j.trim().length)/p)),0)),g=Math.max(1,l-Ta*3),v=Math.max(1,o-Ta*3),x=g/(h*.58),w=v/(f*1.16);return Math.max(7,Math.min(24,x,w))}function Xh({message:i,width:l,height:o,rotation:a=0}){const u=i.trim()||"...",h=a===90||a===270,p=t_(u,h?o:l,h?l:o);return d.jsx("div",{className:"control-text",style:{width:"100%",height:"100%",fontSize:p},children:d.jsx("span",{style:{transform:a?`rotate(${a}deg)`:void 0},children:u})})}function Kh({control:i,pings:l,width:o,height:a,rotation:u=0,preview:h=!1}){const[,p]=A.useState(0),f=Math.max(120,i.radarFadeMs??1200),g=i.radarMinAngle??0,v=i.radarMaxAngle??180,x=ln(g),w=ln(v),E=Math.abs(v-g)>=360||x===w&&g!==v,j=Math.max(1,i.radarMaxDistance??200),B=Date.now(),$=l[l.length-1],V=u,K=ln(x+V),U=ln(w+V),ce=d_(x,w),Y=(($==null?void 0:$.angle)??ce)+V,de=h?[{id:"preview",angle:ce,distance:j*.62,createdAt:B}]:l.filter(ve=>B-ve.createdAt<=f),_e=!E,M=Math.max(8,Math.min(12,Math.min(o,a)*.16)),q=Math.max(7,M*.85),D=0,Q=0,C=1,ae=s_(E,K,U,V,j),le=E?{x:-1.12,y:-1.12,width:2.24,height:2.24}:o_(K,U,ae.map(ve=>ve.point)),ye=E?"":n_(D,Q,C,K,U),ee=eh(g),N=eh(v),P=_e?u_(K,U,le,o,a,ee,N,M):null,oe=ae.map(ve=>{const T=Qh(ve.point,le,o,a);return{key:ve.key,value:ve.value,x:T.x,y:T.y}});A.useEffect(()=>{if(h||l.length===0)return;const ve=window.setInterval(()=>p(T=>T+1),120);return()=>window.clearInterval(ve)},[f,l.length,h]);const ke=Fn(D,Q,C,Y);return d.jsxs("div",{className:"control-radar",style:{width:"100%",height:"100%"},children:[d.jsxs("svg",{width:o,height:a,viewBox:`${le.x} ${le.y} ${le.width} ${le.height}`,preserveAspectRatio:"none","aria-hidden":"true",children:[E?d.jsx("circle",{className:"radar-sector-fill",cx:D,cy:Q,r:C}):d.jsx("path",{className:"radar-sector-fill",d:ye}),[.25,.5,.75,1].map(ve=>E?d.jsx("circle",{className:"radar-ring",cx:D,cy:Q,r:C*ve},ve):d.jsx("path",{className:"radar-ring",d:r_(D,Q,C*ve,K,U)},ve)),!E&&d.jsx(Wm,{cx:D,cy:Q,radius:C,angle:K}),!E&&d.jsx(Wm,{cx:D,cy:Q,radius:C,angle:U}),d.jsx("line",{className:"radar-sweep",x1:D,y1:Q,x2:ke.x,y2:ke.y}),de.map(ve=>{const T=h?0:B-ve.createdAt,J=Math.max(0,1-T/f),se=Math.max(0,Math.min(j,ve.distance)),fe=Fn(D,Q,C*(se/j),ve.angle+V);return d.jsx("circle",{className:"radar-ping",cx:fe.x,cy:fe.y,r:Math.max(.025,Math.min(le.width,le.height)*.025),opacity:J},ve.id)})]}),_e&&P&&d.jsxs(d.Fragment,{children:[d.jsx("span",{className:"radar-angle-label",style:{left:P.min.x,top:P.min.y,fontSize:M},children:ee}),d.jsx("span",{className:"radar-angle-label",style:{left:P.max.x,top:P.max.y,fontSize:M},children:N})]}),oe.map(ve=>d.jsx("span",{className:"radar-range-label",style:{left:ve.x,top:ve.y,fontSize:q},children:ve.value},ve.key))]})}function Wm({cx:i,cy:l,radius:o,angle:a}){const u=Fn(i,l,o,a);return d.jsx("line",{className:"radar-boundary",x1:i,y1:l,x2:u.x,y2:u.y})}function Fn(i,l,o,a){const u=(ln(a)-90)*Math.PI/180;return{x:i+Math.cos(u)*o,y:l+Math.sin(u)*o}}function n_(i,l,o,a,u){const h=Fn(i,l,o,a),p=Fn(i,l,o,u),f=Sc(a,u)>180?1:0;return`M ${i} ${l} L ${h.x} ${h.y} A ${o} ${o} 0 ${f} 1 ${p.x} ${p.y} Z`}function r_(i,l,o,a,u){const h=Fn(i,l,o,a),p=Fn(i,l,o,u),f=Sc(a,u)>180?1:0;return`M ${h.x} ${h.y} A ${o} ${o} 0 ${f} 1 ${p.x} ${p.y}`}function Sc(i,l){const o=ln(i),a=ln(l),u=a>=o?a-o:360-o+a;return u===0?360:u}const cc=[.25,.5,.75,1],l_=.1,i_=.85,a_=55;function s_(i,l,o,a,u){const h=(g,v,x)=>({key:`${g}-${v}`,value:Math.round(u*v),point:Fn(0,0,v,x)});if(i){const g=ln(180+a);return cc.map(v=>h("full",v,g))}const p=360-Sc(l,o);if(p<a_){const g=ln(o+p/2);return cc.map(v=>h("mid",v,g))}const f=(g,v,x)=>{const w=Math.asin(Math.min(i_,l_/v))*180/Math.PI;return ln(g+x*w)};return[...cc.map(g=>h("min",g,f(l,g,-1))),...cc.map(g=>h("max",g,f(o,g,1)))]}function o_(i,l,o=[]){const a=[{x:0,y:0},Fn(0,0,1,i),Fn(0,0,1,l),...o];for(const w of[0,90,180,270])c_(w,i,l)&&a.push(Fn(0,0,1,w));const u=Math.min(...a.map(w=>w.x)),h=Math.max(...a.map(w=>w.x)),p=Math.min(...a.map(w=>w.y)),f=Math.max(...a.map(w=>w.y)),g=Math.max(.1,h-u),v=Math.max(.1,f-p),x=Math.max(g,v)*.24;return{x:u-x,y:p-x,width:g+x*2,height:v+x*2}}function c_(i,l,o){const a=ln(l),u=ln(i),h=Sc(l,o),p=ln(u-a);return p>=0&&p<=h}function u_(i,l,o,a,u,h,p,f){const v=Fn(0,0,1.1,i),x=Fn(0,0,1.1,l);return{min:Zm(v,o,a,u,h,f),max:Zm(x,o,a,u,p,f)}}function Qh(i,l,o,a){return{x:(i.x-l.x)/l.width*o,y:(i.y-l.y)/l.height*a}}function Zm(i,l,o,a,u,h){const p=Qh(i,l,o,a),f=Math.max(10,u.length*h*.62),g=h,v=7;return{x:Jm(p.x,f/2+v,Math.max(f/2+v,o-f/2-v)),y:Jm(p.y,g/2+v,Math.max(g/2+v,a-g/2-v))}}function Jm(i,l,o){return Math.max(l,Math.min(o,i))}function eh(i){return`${Math.round(i)}`}function ln(i){return Number.isFinite(i)?(i%360+360)%360:0}function d_(i,l){const o=ln(i),a=ln(l),u=a>=o?a-o:360-o+a;return ln(o+u/2)}function Ts(i){return Number.isInteger(i)?String(i):i.toFixed(1)}function Zd(i,l){return Math.max(l,i.length*l*.58)}function th(i,l,o){if(Zd(i,l)<=o)return i;const a=Math.max(1,Math.floor(o/Math.max(1,l*.58))-3);return a<=1?i.slice(0,1):`${i.slice(0,a)}...`}function nh(i,l){return i.label?i.label:l}const f_=3;function Rs(i){return i.split(`
`).map(l=>l.trim()).slice(0,f_)}function m_(i){const l=i.label?Rs(i.label)[0]:"";return l||new Date(i.createdAt).toLocaleTimeString("da-DK",{hour:"2-digit",minute:"2-digit"})}function h_({anchorRect:i,timeText:l,valueText:o}){const a=A.useRef(null),[u,h]=A.useState(null);return A.useLayoutEffect(()=>{const p=a.current;if(!p)return;const f=()=>{const{width:g,height:v}=p.getBoundingClientRect(),x=8,w=window.innerWidth,E=window.innerHeight,j=i.top,B=E-i.bottom,V=j>=v+x||j>=B?Math.max(4,i.top-v-x):Math.min(E-v-4,i.bottom+x),K=i.left+i.width/2,U=Math.max(4,Math.min(w-g-4,K-g/2));h({left:U,top:V})};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[i]),pf.createPortal(d.jsxs("div",{ref:a,className:"plot-tooltip",style:{left:(u==null?void 0:u.left)??i.left,top:(u==null?void 0:u.top)??i.top,visibility:u?"visible":"hidden"},children:[d.jsxs("div",{className:"plot-tooltip-row",children:["Tid ",l]}),d.jsx("div",{className:"plot-tooltip-row",children:o})]}),document.body)}const Id="pkp:plot-popup-open";let p_=0;const g_=18;function __(i){if(i<=0)return[];if(i<=5)return Array.from({length:i},(o,a)=>a);const l=new Set([0,i-1]);return l.add(Math.round((i-1)/2)),i>=10&&(l.add(Math.round((i-1)/4)),l.add(Math.round((i-1)*3/4))),[...l].sort((o,a)=>o-a)}function v_(i,l){return i<=0||l==="none"?[]:l==="labels"?Array.from({length:i},(o,a)=>a):i===1?[0]:[0,i-1]}function b_(i,l){const o=Date.now();return Array.from({length:i},(a,u)=>{const h=u/Math.max(1,i-1),p=l==="bar"?.15+.7*Math.abs(Math.sin(h*Math.PI*1.4)):l==="dot"?.5+.35*Math.sin(u*2.3)*Math.cos(u*.7):.5+.4*Math.sin(h*Math.PI*2.2);return{id:`demo-${u}`,value:p,createdAt:o}})}function Wh({control:i,points:l,width:o,height:a,preview:u=!1,rotation:h=0}){const p=h===90||h===270,f=p?a:o,g=p?o:a,v=i.plotMin??0,x=i.plotMax??100,w=x>v?x-v:1,E=Math.max(2,i.plotHistory??30),j=i.plotStyle==="bar"?"bar":i.plotStyle==="dot"?"dot":"line",B=i.plotXAxis??"labels",$=i.plotYAxis??"range",V=Math.max(8,Math.min(45,i.plotLabelMaxPercent??24)),K=u?b_(E,j):l,[U,ce]=A.useState(null),Y=A.useRef(new Map),[de,_e]=A.useState(null),[M,q]=A.useState(null),D=A.useMemo(()=>p_+=1,[]),Q=A.useMemo(()=>typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches,[]);A.useEffect(()=>{de!=null&&window.dispatchEvent(new CustomEvent(Id,{detail:D}))},[de,D]),A.useEffect(()=>{const ue=Ae=>{Ae.detail!==D&&_e(null)};return window.addEventListener(Id,ue),()=>window.removeEventListener(Id,ue)},[D]),A.useLayoutEffect(()=>{if(!de){q(null);return}const ue=Y.current.get(de);if(!ue){q(null);return}const Ae=()=>q(ue.getBoundingClientRect());return Ae(),window.addEventListener("resize",Ae),window.addEventListener("scroll",Ae,!0),()=>{window.removeEventListener("resize",Ae),window.removeEventListener("scroll",Ae,!0)}},[de]),A.useEffect(()=>{if(!Q||!de)return;const ue=()=>_e(null);return window.addEventListener("click",ue),()=>window.removeEventListener("click",ue)},[Q,de]),A.useEffect(()=>{_e(null)},[U]);function C(ue){return Ae=>{Ae?Y.current.set(ue,Ae):Y.current.delete(ue)}}function ae(ue){return Q?{onClick:Ae=>{Ae.stopPropagation(),_e(nt=>nt===ue?null:ue)}}:{onPointerEnter:()=>_e(ue),onPointerLeave:()=>_e(Ae=>Ae===ue?null:Ae)}}const le=Math.max(1,Math.min(f,g)),ye=Math.max(8,Math.min(13,le*.14)),ee=Math.max(6,Math.min(10,ye*.72)),N=Math.max(6,Math.min(10,ye*.74)),P=Math.max(6,Math.min(16,le*.12)),oe=Math.max(3,le*.035),ke=Math.max(2,le*.02),ve=Math.max(18,f*(V/100)),T=Math.max(18,g*(V/100)),J=ee*1.15,se=N*1.15,fe=$==="range"?[Ts(v),Ts(x)]:$==="labels"?K.map(ue=>Ts(ue.value)):[],Se=fe.length>0?Math.min(ve,Math.max(...fe.flatMap(ue=>Rs(ue)).map(ue=>Zd(ue,N)))+4):0,we=Se>0?ke+Se+oe:P,Ce=P+ye*1.45,tt=Math.max(we+1,f-P),Me=Math.max(1,tt-we),gt=Math.max(1.5,Math.min(3.4,le*.045)),je=Math.max(gt+1,Math.min(le*.09,gt*2)),it=K.length>1?Math.max(gt*2,Math.min(14,Me*.045)):0,X=Math.max(1,Me-it*2),H=Math.max(1,Math.min(K.length,E)),me=K.length>H,Le=!u;let Ve=K.length;if(me&&U){const ue=K.findIndex(Ae=>Ae.id===U);ue>=0&&(Ve=ue+1)}const Fe=Math.max(0,Ve-H),Be=me?K.slice(Fe,Ve):K,qe=me&&Fe>0,Ut=me&&Ve<K.length,an=de?Be.find(ue=>ue.id===de):void 0,Tn=()=>{Fe<=0||ce(K[Ve-2].id)},Rt=()=>{if(Ve>=K.length)return;const ue=Ve;ce(ue>=K.length-1?null:K[ue].id)},rr=v_(Be.length,B),Mn=rr.map(ue=>nh(Be[ue],ue===Be.length-1?"nu":`${ue+1}`)).map(ue=>Rs(ue)),sn=Mn.length>0?Math.max(1,...Mn.map(ue=>ue.length)):1,Gn=B!=="labels"?1/0:j==="bar"?X/Math.max(1,Be.length):X/Math.max(1,Be.length-1);let Nn=sn;for(;Nn>1&&Nn*J>Gn;)Nn-=1;const cl=Mn.length>0?Math.min(T,Math.max(...Mn.flat().map(ue=>Zd(ue,ee)))+8):0,jn=Math.max(3,ee*.48),on=Math.max(4,ee*.6),Vt=Math.max(jn+on+ee,jn+on+cl+(Nn-1)*J),cn=Math.max(1,g-Ce-Vt),ct=Ce+cn,ul=ue=>{const Ae=Math.max(0,Math.min(1,(ue-v)/w));return Ce+(1-Ae)*cn},Ft=ue=>Be.length>1?we+it+ue/(Be.length-1)*X:we+Me/2,Gt=Be.length>0?X/Be.length:X,$t=Math.max(1,Gt*.62),lr=ue=>Be.length>1?we+it+ue*Gt+Gt/2:we+Me/2,dl=ue=>j==="bar"?lr(ue):Ft(ue),un=Math.max(3,Math.min(5,le*.035)),pn=Be.map((ue,Ae)=>({x:Ft(Ae),y:ul(ue.value)})),ir=$==="labels"?__(Be.length):[],ar=(ue,Ae,nt)=>{const $e=Rs(Ae);return d.jsxs("g",{children:[d.jsx("line",{className:"plot-axis-tick",x1:we-jn,y1:nt,x2:we,y2:nt}),$e.map((ht,rt)=>{const St=nt+(rt-($e.length-1)/2)*se;return d.jsx("text",{className:"plot-y-axis-label",x:we-oe,y:St,fontSize:N,textAnchor:"end",dominantBaseline:"middle",children:th(ht,N,ve)},rt)})]},ue)},An=d.jsxs("div",{className:"control-plot",style:{width:"100%",height:"100%"},children:[d.jsxs("svg",{width:f,height:g,viewBox:`0 0 ${f} ${g}`,"aria-hidden":"true",children:[[.25,.5,.75].map(ue=>d.jsx("line",{className:"plot-grid-line",x1:we,y1:Ce+ue*cn,x2:tt,y2:Ce+ue*cn},ue)),d.jsx("line",{className:"plot-axis-line",x1:we,y1:ct,x2:tt,y2:ct}),d.jsx("line",{className:"plot-axis-line",x1:we,y1:Ce,x2:we,y2:ct}),$==="range"&&fe.map((ue,Ae)=>ar(`${ue}-${Ae}`,ue,Ae===0?ct:Ce)),$==="labels"&&ir.map(ue=>{const Ae=Be[ue];return ar(`y-${Ae.id}`,Ts(Ae.value),ul(Ae.value))}),rr.map(ue=>{const Ae=Be[ue],nt=dl(ue),$e=ct+jn+on,ht=nh(Ae,ue===Be.length-1?"nu":`${ue+1}`),rt=Rs(ht).slice(0,Nn);return d.jsxs("g",{children:[d.jsx("line",{className:"plot-axis-tick",x1:nt,y1:ct,x2:nt,y2:ct+jn}),rt.map((St,_r)=>{const Rn=nt+_r*J;return d.jsx("text",{className:"plot-axis-tick-label",x:Rn,y:$e,fontSize:ee,textAnchor:"end",dominantBaseline:"middle",transform:`rotate(-90 ${Rn} ${$e})`,children:th(St,ee,T)},_r)})]},`x-${Ae.id}`)}),j==="bar"?Be.map((ue,Ae)=>{const nt=Be.length>1?we+it+Ae*Gt+(Gt-$t)/2:we+(Me-$t)/2,$e=!Ut&&Ae===Be.length-1,ht=ue.value===0&&v===0,rt=Math.max(0,ct-ul(ue.value)),St=ht?un:rt,_r=ct-St,Rn=Math.max(rt,g_),sr=ct-Rn;return d.jsxs("g",{children:[d.jsx("rect",{className:`plot-bar ${$e?"latest":""} ${ht?"zero":""}`,x:nt,y:_r,width:$t,height:St}),d.jsx("rect",{ref:C(ue.id),className:"plot-bar-hit",x:nt,y:sr,width:$t,height:Rn,...ae(ue.id)})]},ue.id)}):d.jsxs(d.Fragment,{children:[j==="line"&&pn.length>1&&d.jsx("polyline",{className:"plot-line",points:pn.map(ue=>`${ue.x},${ue.y}`).join(" ")}),pn.map((ue,Ae)=>{const nt=Be[Ae],$e=!Ut&&Ae===pn.length-1;return d.jsxs("g",{children:[d.jsx("circle",{className:`plot-dot ${$e?"latest":""}`,cx:ue.x,cy:ue.y,r:$e?je:gt}),d.jsx("circle",{ref:C(nt.id),className:"plot-dot-hit",cx:ue.x,cy:ue.y,r:Math.max(je,9),...ae(nt.id)})]},nt.id)})]})]}),d.jsx("span",{className:"plot-name-label",style:{fontSize:ye,left:we+6,maxWidth:Math.max(20,f-we-14-(Le?68:0))},children:i.name}),Le&&d.jsxs("div",{className:"plot-page-controls",children:[d.jsx("button",{type:"button",className:"plot-page-btn",disabled:!qe,onClick:Tn,"aria-label":`${i.name}: vis ældre data`,children:d.jsx(Kt,{name:"chevronLeft",size:18})}),d.jsx("button",{type:"button",className:"plot-page-btn",disabled:!Ut,onClick:Rt,"aria-label":`${i.name}: vis nyere data`,children:d.jsx(Kt,{name:"chevronRight",size:18})})]}),an&&M&&d.jsx(h_,{anchorRect:M,timeText:m_(an),valueText:`${i.name} ${Ts(an.value)}`})]});return h?d.jsx("div",{style:{width:o,height:a,position:"relative"},children:d.jsx("div",{style:{position:"absolute",left:"50%",top:"50%",width:f,height:g,transform:`translate(-50%, -50%) rotate(${h}deg)`},children:An})}):An}function y_(i,l){if(!l)return i;const o=i.trim().split(/\s+/).filter(Boolean);return d.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",lineHeight:1.02,textAlign:"center",gap:"0.42em"},children:o.map((a,u)=>d.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[...a].map((h,p)=>d.jsx("span",{children:h},`${h}-${p}`))},`${a}-${u}`))})}function w_(i){const l={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},o=4;return i===0?{low:{...l,left:o,top:0,bottom:0},high:{...l,right:o,top:0,bottom:0}}:i===180?{low:{...l,right:o,top:0,bottom:0},high:{...l,left:o,top:0,bottom:0}}:i===90?{low:{...l,bottom:o,left:0,right:0},high:{...l,top:o,left:0,right:0}}:{low:{...l,top:o,left:0,right:0},high:{...l,bottom:o,left:0,right:0}}}function x_({name:i,vertical:l,rotation:o,color:a,fontSize:u,endFontSize:h,centerInset:p,lowLabel:f,highLabel:g,showEnds:v}){const x=v?w_(o):null;return d.jsxs("div",{style:{position:"absolute",inset:0,color:a},children:[d.jsx("div",{style:{position:"absolute",inset:0,...p,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:u,textAlign:"center",pointerEvents:"none"},children:y_(i,l)}),x&&d.jsxs(d.Fragment,{children:[d.jsx("div",{style:{...x.low,fontWeight:800,fontSize:h},children:f}),d.jsx("div",{style:{...x.high,fontWeight:800,fontSize:h},children:g})]})]})}function Zh({name:i,rotation:l,width:o,height:a,value:u,showEnds:h=!1,fillColor:p="var(--red)",lowLabel:f="0",highLabel:g="100"}){const v=l===90||l===270,{fontSize:x,endFontSize:w,centerInset:E}=Jg(i,o,a,v,h);let j,B;l===0?(j={left:0,top:0,bottom:0,width:`${u}%`},B={left:0,top:0}):l===180?(j={right:0,top:0,bottom:0,width:`${u}%`},B={right:0,top:0}):l===90?(j={left:0,right:0,bottom:0,height:`${u}%`},B={left:0,bottom:0}):(j={left:0,right:0,top:0,height:`${u}%`},B={left:0,top:0});const $=V=>d.jsx(x_,{name:i,vertical:v,rotation:l,color:V,fontSize:x,endFontSize:w,centerInset:E,lowLabel:f,highLabel:g,showEnds:h});return d.jsxs(d.Fragment,{children:[d.jsx("div",{style:{position:"absolute",left:0,top:0,width:`${o}px`,height:`${a}px`},children:$("var(--red)")}),d.jsx("div",{style:{position:"absolute",background:p,overflow:"hidden",...j},children:d.jsx("div",{style:{position:"absolute",width:`${o}px`,height:`${a}px`,...B},children:$("var(--white)")})})]})}function k_({control:i,disabled:l,orientation:o,latestValue:a,onSlider:u,width:h,height:p}){const f=A.useRef(null),g=i.sliderMin??0,v=i.sliderMax??100,[x,w]=A.useState(()=>a===void 0?rh(i.sliderRecenter??"none"):lh(a,g,v)),E=A.useRef(null),j=o;A.useEffect(()=>{a!==void 0&&(w(lh(a,g,v)),E.current=a)},[a,g,v]);function B(U){const ce=f.current;if(!ce)return 0;const Y=ce.getBoundingClientRect();let de;return j===0?de=(U.clientX-Y.left)/Y.width:j===180?de=1-(U.clientX-Y.left)/Y.width:j===90?de=1-(U.clientY-Y.top)/Y.height:de=(U.clientY-Y.top)/Y.height,Math.max(0,Math.min(1,de))}function $(U){l||V(B(U))}function V(U){const ce=Math.round(U*100),Y=Math.round(g+(v-g)*U);w(ce),Y!==E.current&&(E.current=Y,u(i.name,Y))}function K(){const U=i.sliderRecenter??"none";l||U==="none"||V(rh(U)/100)}return d.jsx("div",{ref:f,className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",touchAction:"none"},onPointerDown:U=>{l||(U.preventDefault(),U.currentTarget.setPointerCapture(U.pointerId),$(U))},onPointerMove:U=>{U.buttons!==0&&$(U)},onPointerUp:K,onPointerCancel:K,onLostPointerCapture:K,children:d.jsx(Zh,{name:i.name,rotation:j,width:h,height:p,value:x,showEnds:!0,lowLabel:String(g),highLabel:String(v)})})}function rh(i){return i==="bottom"?0:i==="top"?100:i==="middle"?50:0}function lh(i,l,o){return o===l?0:Math.max(0,Math.min(100,Math.round((i-l)/(o-l)*100)))}function ih(i,l,o){return Math.round(l+(o-l)*(i+1)/2)}function ah(i,l){return i==="bottom"?l?1:-1:i==="top"?l?-1:1:0}function sh(i){return{nx:ah(i.joystickXRecenter,!1),ny:ah(i.joystickYRecenter,!0)}}function Jh(i,l){const o=Math.min(i,l),a=Math.max(6,o*.16),u=Math.max(1,o/2-a-2);return{knobRadius:a,reach:u}}function ep({control:i,width:l,height:o,pos:a,rotation:u=0,dragging:h=!1}){const{knobRadius:p,reach:f}=Jh(l,o),g=Math.max(7,Math.min(14,p*.62)),v=Math.max(7,Math.min(12,Math.min(l,o)*.1)),x=[{key:"xmax",value:i.joystickXMax??100,lx:1,ly:0},{key:"xmin",value:i.joystickXMin??-100,lx:-1,ly:0},{key:"ymax",value:i.joystickYMax??100,lx:0,ly:-1},{key:"ymin",value:i.joystickYMin??-100,lx:0,ly:1}];return d.jsxs("div",{className:"control-joystick",style:{width:"100%",height:"100%",position:"relative"},children:[d.jsx("div",{className:"joystick-oval",style:{position:"absolute",left:"50%",top:"50%",width:f*2,height:f*2,transform:"translate(-50%, -50%)"}}),x.map(w=>{const E=Ai(w.lx,w.ly,u);return d.jsx("span",{className:"joystick-edge-label",style:{position:"absolute",left:"50%",top:"50%",fontSize:v,transform:`translate(-50%, -50%) translate(${E.x*f}px, ${E.y*f}px) rotate(${u}deg)`},children:w.value},w.key)}),d.jsx("div",{className:"joystick-knob",style:{position:"absolute",left:"50%",top:"50%",width:p*2,height:p*2,fontSize:g,transform:`translate(calc(-50% + ${a.nx*f}px), calc(-50% + ${a.ny*f}px))`,transition:h?"none":"transform 0.12s ease-out"},children:d.jsx("span",{style:{display:"inline-block",transform:u?`rotate(${u}deg)`:void 0,whiteSpace:u===90||u===270?"nowrap":void 0},children:i.name})})]})}function E_({control:i,disabled:l,orientation:o,onJoystick:a,width:u,height:h}){const p=o,f=A.useRef(null),[g,v]=A.useState(()=>{const ce=sh(i),Y=Ai(ce.nx,ce.ny,p);return{nx:Y.x,ny:Y.y}}),x=A.useRef(!1),w=A.useRef(null),E=i.joystickXMin??-100,j=i.joystickXMax??100,B=i.joystickYMin??-100,$=i.joystickYMax??100;function V(ce,Y){const de=Ai(ce,Y,bc(p)),_e=ih(de.x,E,j),M=ih(-de.y,B,$);(!w.current||w.current.x!==_e||w.current.y!==M)&&(w.current={x:_e,y:M},a(i.name,_e,M))}function K(ce){const Y=f.current;if(!Y)return;const de=Y.getBoundingClientRect(),{reach:_e}=Jh(de.width,de.height);let M=(ce.clientX-(de.left+de.width/2))/_e,q=(ce.clientY-(de.top+de.height/2))/_e;const D=Math.hypot(M,q);D>1&&(M/=D,q/=D),v({nx:M,ny:q}),V(M,q)}function U(){const ce=i.joystickXRecenter??"middle",Y=i.joystickYRecenter??"middle";if(ce==="none"&&Y==="none")return;const de=Ai(g.nx,g.ny,bc(p)),_e=sh(i),M={x:ce==="none"?de.x:_e.nx,y:Y==="none"?de.y:_e.ny},q=Ai(M.x,M.y,p),D={nx:q.x,ny:q.y};x.current=!1,v(D),V(D.nx,D.ny)}return d.jsx("div",{ref:f,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:ce=>{l||(ce.preventDefault(),ce.currentTarget.setPointerCapture(ce.pointerId),x.current=!0,K(ce))},onPointerMove:ce=>{l||!x.current||ce.buttons===0||K(ce)},onPointerUp:U,onPointerCancel:U,onLostPointerCapture:U,children:d.jsx(ep,{control:i,width:u,height:h,pos:g,rotation:p,dragging:x.current})})}const S_=[{direction:"up",rotate:0},{direction:"right",rotate:90},{direction:"down",rotate:180},{direction:"left",rotate:270}],T_="M 34 30 L 34 15 Q 34 8 41 8 L 59 8 Q 66 8 66 15 L 66 30 L 50 46 L 34 30 Z",M_=.1,N_={up:"OP",down:"NED",left:"VENSTRE",right:"HØJRE"},j_={up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]},A_=[{pos:"up",x:50,y:23},{pos:"right",x:78,y:50},{pos:"down",x:50,y:77},{pos:"left",x:22,y:50}];function Jd(i,l){return Math.hypot(i,l)<M_?null:Math.abs(i)>=Math.abs(l)?i>0?"right":"left":l>0?"down":"up"}function R_(i,l){const[o,a]=j_[i],u=Ai(o,a,bc(l));return Jd(u.x,u.y)??i}function tp({control:i,active:l=null,rotation:o=0}){return d.jsx("div",{className:"control-dpad",style:{width:"100%",height:"100%"},children:d.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet",children:[S_.map(a=>d.jsx("path",{className:`dpad-arm ${l===a.direction?"active":""}`,transform:`rotate(${a.rotate} 50 50)`,d:T_},a.direction)),A_.map(a=>d.jsx("text",{className:`dpad-label ${l===a.pos?"active":""}`,x:a.x,y:a.y,textAnchor:"middle",dominantBaseline:"central",transform:o?`rotate(${o} ${a.x} ${a.y})`:void 0,children:N_[R_(a.pos,o)]},a.pos))]})})}function C_({control:i,disabled:l,orientation:o,onDpad:a}){const u=A.useRef(null),h=A.useRef(null),p=A.useRef(!1),[f,g]=A.useState(null);function v(j){const B=u.current;if(!B)return{screen:null,logical:null};const $=B.getBoundingClientRect(),V=Math.min($.width,$.height)/2,K=(j.clientX-($.left+$.width/2))/V,U=(j.clientY-($.top+$.height/2))/V,ce=Jd(K,U),Y=Ai(K,U,bc(o)),de=Jd(Y.x,Y.y);return{screen:ce,logical:de}}function x(j){const B=u.current;if(!B)return!1;const $=B.getBoundingClientRect(),V=(j.clientX-$.left)/$.width,K=(j.clientY-$.top)/$.height;return V>=0&&V<=1&&K>=0&&K<=1}function w(j){j.logical!==h.current&&(h.current&&a(i.name,h.current,!1),h.current=j.logical,j.logical&&a(i.name,j.logical,!0)),g(j.screen)}function E(){p.current=!1,w({screen:null,logical:null})}return d.jsx("div",{ref:u,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:j=>{l||!x(j)||(j.preventDefault(),j.currentTarget.setPointerCapture(j.pointerId),p.current=!0,w(v(j)))},onPointerMove:j=>{l||!p.current||j.buttons===0||w(v(j))},onPointerUp:E,onPointerCancel:E,onLostPointerCapture:E,children:d.jsx(tp,{control:i,active:f,rotation:o})})}const D_={button:"Knapper",slider:"Slidere",toggle:"Toggleknapper",radar:"Radar",text:"Tekstfelter",joystick:"Joysticks",dpad:"Dpads",plot:"Grafer"},O_=["button","slider","toggle","radar","text","joystick","dpad","plot"];function L_({unplaced:i,onAdd:l,onClose:o}){const a=A.useMemo(()=>O_.filter(f=>i.some(g=>g.type===f)),[i]),[u,h]=A.useState(a[0]??"button"),p=i.filter(f=>f.type===u);return A.useEffect(()=>{a.length>0&&!a.includes(u)&&h(a[0])},[a,u]),d.jsxs(It,{title:"Tilføj kontrol",onClose:o,children:[a.length>1&&d.jsx("div",{className:"segmented add-modal-tabs",children:a.map(f=>d.jsx("button",{type:"button",className:u===f?"active":"",onClick:()=>h(f),children:D_[f]},f))}),d.jsx("div",{className:"add-lists",children:a.length===0?d.jsx("div",{className:"device-list-empty",children:"Alle kontroller er allerede placeret."}):p.map(f=>d.jsxs("button",{type:"button",className:"add-entry",onClick:()=>l(f.name),children:[d.jsx("span",{children:f.name}),d.jsx("span",{className:"iconbtn",children:d.jsx(Kt,{name:"plus",size:22})})]},f.name))})]})}function np(i){const[l,o]=A.useState({w:0,h:0}),a=A.useRef(null),u=A.useRef(null);return A.useLayoutEffect(()=>{var g;const h=i.current;if(a.current===h)return;if((g=u.current)==null||g.disconnect(),u.current=null,a.current=h,!h){o(v=>v.w===0&&v.h===0?v:{w:0,h:0});return}const p=()=>{const v={w:h.clientWidth,h:h.clientHeight};o(x=>x.w===v.w&&x.h===v.h?x:v)};p();const f=new ResizeObserver(p);f.observe(h),u.current=f}),A.useEffect(()=>()=>{var h;(h=u.current)==null||h.disconnect(),u.current=null,a.current=null},[]),l}function zs(i){return i.centerX2!==null&&i.centerY2!==null&&i.spanX!==null&&i.spanY!==null}const B_=4,z_=5;function U_(i){return i==="joystick"||i==="dpad"?{spanX:6,spanY:6}:i==="plot"?{spanX:7,spanY:4}:{spanX:B_,spanY:z_}}function Vd(i){if(!zs(i))return null;const l=i.centerX2/2,o=i.centerY2/2;return{x0:l-i.spanX/2,x1:l+i.spanX/2,y0:o-i.spanY/2,y1:o+i.spanY/2}}function rp(i,l,o=.02){return i.x0<l.x1-o&&l.x0<i.x1-o&&i.y0<l.y1-o&&l.y0<i.y1-o}function q_(i,l,o){const a=(o.cols-1)*2,u=(o.rows-1)*2,h=[];for(let p=l;p<=u-l;p+=2)for(let f=i;f<=a-i;f+=2)h.push({centerX2:f,centerY2:p});return h}function oh(i,l,o,a){const u=q_(i,l,a).filter(h=>{const p={x0:h.centerX2/2-i/2,x1:h.centerX2/2+i/2,y0:h.centerY2/2-l/2,y1:h.centerY2/2+l/2};return!o.some(f=>rp(p,f))});return u.length===0?null:u[Math.floor(Math.random()*u.length)]}function H_(i,l){return(i-l.margin)/l.stepX}function P_(i,l){return(l.areaH-i-l.margin)/l.stepY}function Fd(i,l,o,a,u,h){if(i.spanX===null||i.spanY===null||i.centerX2===null||i.centerY2===null)return i;if(l==="left"||l==="right"){const v=Math.round(H_(a,h));if(l==="right"){const j=Math.max(o+1,Math.min(h.cols-1,v))-o;return{...i,spanX:j,centerX2:o*2+j}}const x=Math.min(o-1,Math.max(0,v)),w=o-x;return{...i,spanX:w,centerX2:o*2-w}}const p=Math.round(P_(u,h));if(l==="top"){const x=Math.max(o+1,Math.min(h.rows-1,p))-o;return{...i,spanY:x,centerY2:o*2+x}}const f=Math.min(o-1,Math.max(0,p)),g=o-f;return{...i,spanY:g,centerY2:o*2-g}}function I_(){const i=he(X=>X.layout),l=he(X=>X.active),o=he(X=>X.saveLayout),a=he(X=>X.setEditMode),u=he(X=>X.askConfirm),h=!!(l!=null&&l.canEdit),[p,f]=A.useState(()=>i.map(X=>({...X}))),[g,v]=A.useState(null),[x,w]=A.useState(!1),[E,j]=A.useState(null),[B,$]=A.useState(null),[V,K]=A.useState(null),[U,ce]=A.useState(!1),[Y,de]=A.useState(!1),_e=A.useRef(null),M=A.useRef(null),q=A.useRef(null),D=np(M),Q=D.w>0&&D.h>0,C=Uh(D.w,D.h,l==null?void 0:l.gridCols,l==null?void 0:l.gridRows),ae=A.useMemo(()=>Q?ug(C):[],[C,Q]),le=p.filter(zs),ye=p.filter(X=>!zs(X)),ee=A.useMemo(()=>{const X=new Set;for(let H=0;H<le.length;H+=1)for(let me=H+1;me<le.length;me+=1){const Le=Vd(le[H]),Ve=Vd(le[me]);Le&&Ve&&rp(Le,Ve)&&(X.add(le[H].name),X.add(le[me].name))}return X},[le]),N=ee.size>0,P=A.useMemo(()=>ch(p)!==ch(i),[p,i]),oe=A.useMemo(()=>{if(!E||!B)return null;const X=p.find(Le=>Le.name===E);if(!X||X.spanX===null||X.spanY===null)return null;const H=zd(B.cx,B.cy,X.spanX,X.spanY,C),me=As({...X,centerX2:H.centerX2,centerY2:H.centerY2},C);return me?{name:X.name,rect:me}:null},[p,E,B,C]);function ke(X,H){f(me=>me.map(Le=>Le.name===X?H(Le):Le))}function ve(X){const H=M.current;if(!H)return{x:0,y:0};const me=H.getBoundingClientRect(),Le=H.clientWidth/me.width,Ve=H.clientHeight/me.height;return{x:Math.max(0,Math.min(H.clientWidth,(X.clientX-me.left)*Le)),y:Math.max(0,Math.min(H.clientHeight,(X.clientY-me.top)*Ve))}}function T(X){var Ut;const H=M.current;if(!H)return{cx:0,cy:0};const me=H.getBoundingClientRect(),Le=H.clientWidth/me.width,Ve=H.clientHeight/me.height,Fe=(Ut=_e.current)==null?void 0:Ut.getBoundingClientRect(),Be=Fe?Math.max(Fe.left,Math.min(Fe.right,X.clientX)):X.clientX,qe=Fe?Math.max(Fe.top,Math.min(Fe.bottom,X.clientY)):X.clientY;return{cx:(Be-me.left)*Le,cy:(qe-me.top)*Ve}}function J(X,H){X.stopPropagation(),v(H.name);const me=As(H,C);me&&(j(H.name),$({cx:me.cx,cy:me.cy}),X.currentTarget.setPointerCapture(X.pointerId))}function se(X){const H=q.current,me=M.current;if(!H||!me||!E)return!1;const Le=p.find(Nn=>Nn.name===E),Ve=Le?As(Le,C):null;if(!Ve)return!1;const Fe=me.getBoundingClientRect(),Be=Fe.width/me.clientWidth,qe=Fe.height/me.clientHeight,Ut=Fe.left+X.cx*Be,an=Fe.top+X.cy*qe,Tn=Ve.width*Be/2,Rt=Ve.height*qe/2,rr=Ut-Tn,ol=Ut+Tn,Mn=an-Rt,sn=an+Rt,Gn=H.getBoundingClientRect();return rr<Gn.right&&Gn.left<ol&&Mn<Gn.bottom&&Gn.top<sn}function fe(X){if(E){const H=T(X);ce(se(H)),$(H);return}if(V){const{x:H,y:me}=ve(X);ke(V.name,Le=>{if(V.kind==="side")return Fd(Le,V.side,V.fixedWhole,H,me,C);const Ve=Fd(Le,V.sideX,V.fixedWholeX,H,me,C);return Fd(Ve,V.sideY,V.fixedWholeY,H,me,C)})}}function Se(){if(E&&B)if(se(B))Me(E);else{const X=p.find(H=>H.name===E);if(X&&X.spanX!==null&&X.spanY!==null){const H=zd(B.cx,B.cy,X.spanX,X.spanY,C);ke(E,me=>({...me,centerX2:H.centerX2,centerY2:H.centerY2}))}}j(null),$(null),K(null),ce(!1)}function we(X){return{leftWhole:(X.centerX2-X.spanX)/2,rightWhole:(X.centerX2+X.spanX)/2,bottomWhole:(X.centerY2-X.spanY)/2,topWhole:(X.centerY2+X.spanY)/2}}function Ce(X,H,me){if(X.stopPropagation(),H.centerX2===null||H.centerY2===null||H.spanX===null||H.spanY===null)return;const{leftWhole:Le,rightWhole:Ve,bottomWhole:Fe,topWhole:Be}=we(H),qe=me==="right"?Le:me==="left"?Ve:me==="top"?Fe:Be;v(H.name),K({kind:"side",name:H.name,side:me,fixedWhole:qe}),X.currentTarget.setPointerCapture(X.pointerId)}function tt(X,H,me,Le){if(X.stopPropagation(),H.centerX2===null||H.centerY2===null||H.spanX===null||H.spanY===null)return;const{leftWhole:Ve,rightWhole:Fe,bottomWhole:Be,topWhole:qe}=we(H);v(H.name),K({kind:"corner",name:H.name,sideX:me,sideY:Le,fixedWholeX:me==="right"?Ve:Fe,fixedWholeY:Le==="top"?Be:qe}),X.currentTarget.setPointerCapture(X.pointerId)}function Me(X){ke(X,H=>({...H,centerX2:null,centerY2:null,spanX:null,spanY:null,rotation:0})),v(null)}function gt(X){w(!1);const H=p.find(Ut=>Ut.name===X);if(!H)return;const{spanX:me,spanY:Le}=U_(H.type),Ve=le.map(Vd).filter(Ut=>Ut!==null);let Fe=me,Be=Le,qe=oh(Fe,Be,Ve,C);for(;!qe&&(Fe>2||Be>2);)Fe=Math.max(2,Fe-1),Be=Math.max(2,Be-1),qe=oh(Fe,Be,Ve,C);qe||(Fe=me,Be=Le,qe=zd(C.areaW/2,C.areaH/2,Fe,Be,C)),ke(X,()=>({...H,spanX:Fe,spanY:Be,rotation:0,centerX2:qe.centerX2,centerY2:qe.centerY2})),v(X)}async function je(){N||(de(!0),await o(p),de(!1))}function it(){if(!P){a(!1);return}u({title:"Kassér ændringer",message:"Vil du forlade redigering og kassere dine layout-ændringer?",confirmLabel:"Kassér",onConfirm:()=>a(!1)})}return d.jsxs("div",{className:"edit-view",ref:_e,children:[d.jsxs("div",{className:"edit-band edit-toolbar-band",children:[h&&d.jsx("button",{type:"button",className:"btn btn-outline edit-toolbar-btn",onClick:()=>w(!0),"aria-label":"Tilføj kontrol",children:"Tilføj"}),d.jsx("button",{ref:q,type:"button",className:`btn btn-outline edit-toolbar-btn edit-trash ${U?"over":""} ${E?"dragging":""}`,disabled:!g,onClick:()=>g&&Me(g),"aria-label":"Slet valgt element",title:"Vælg et element, og tryk her for at slette det - eller træk et element hertil",children:"Slet"})]}),d.jsx("div",{className:"controls-area-wrap",children:d.jsx("div",{className:`controls-area ${E?"dragging":""}`,ref:M,style:{touchAction:"none"},onPointerMove:fe,onPointerUp:Se,onPointerDown:()=>v(null),children:Q&&d.jsxs(d.Fragment,{children:[d.jsx("svg",{width:C.areaW,height:C.areaH,style:{position:"absolute",inset:0,pointerEvents:"none"},children:ae.map((X,H)=>d.jsx("circle",{cx:X.x,cy:X.y,r:2.5,fill:"rgba(198,80,78,0.45)"},H))}),oe&&!U&&d.jsx("div",{className:"snap-preview",style:{left:oe.rect.cx,top:oe.rect.cy,width:oe.rect.width,height:oe.rect.height}}),le.map(X=>{const H=E===X.name&&B,me=As(X,C);if(!me)return null;const Le=H?B.cx:me.cx,Ve=H?B.cy:me.cy,Fe=g===X.name,Be={left:Le,top:Ve,width:me.width,height:me.height,outline:Fe?"3px solid var(--text)":"none",outlineOffset:2,zIndex:Fe?2:1};return d.jsxs("div",{className:`control ${ee.has(X.name)?"colliding":""} ${H&&U?"control-deleting":""}`,style:Be,onPointerDown:qe=>J(qe,X),children:[X.type==="button"?d.jsx("div",{className:"control-button",style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},children:d.jsx(yc,{name:X.name,width:me.width,height:me.height,rotation:X.rotation})}):X.type==="toggle"?d.jsx("div",{className:"control-toggle on",style:{width:"100%",height:"100%"},children:d.jsx(yc,{name:X.name,width:me.width,height:me.height,rotation:X.rotation})}):X.type==="radar"?d.jsx(Kh,{control:X,pings:[],width:me.width,height:me.height,preview:!0}):X.type==="plot"?d.jsx(Wh,{control:X,points:[],width:me.width,height:me.height,preview:!0}):X.type==="text"?d.jsx(Xh,{message:X.name,width:me.width,height:me.height,rotation:X.rotation}):X.type==="joystick"?d.jsx(ep,{control:X,width:me.width,height:me.height,pos:{nx:0,ny:0}}):X.type==="dpad"?d.jsx(tp,{control:X}):d.jsx("div",{className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:d.jsx(Zh,{name:X.name,rotation:X.rotation,width:me.width,height:me.height,value:50,showEnds:!0,lowLabel:String(X.sliderMin??0),highLabel:String(X.sliderMax??100),fillColor:ee.has(X.name)?"var(--disabled)":"var(--red)"})}),Fe&&d.jsxs(d.Fragment,{children:[d.jsx("button",{type:"button",className:"edit-handle edit-handle-top","aria-label":"Ændr højde foroven",onPointerDown:qe=>Ce(qe,X,"top")}),d.jsx("button",{type:"button",className:"edit-handle edit-handle-bottom","aria-label":"Ændr højde forneden",onPointerDown:qe=>Ce(qe,X,"bottom")}),d.jsx("button",{type:"button",className:"edit-handle edit-handle-left","aria-label":"Ændr bredde til venstre",onPointerDown:qe=>Ce(qe,X,"left")}),d.jsx("button",{type:"button",className:"edit-handle edit-handle-right","aria-label":"Ændr bredde til højre",onPointerDown:qe=>Ce(qe,X,"right")}),d.jsx("button",{type:"button",className:"edit-corner-handle edit-corner-tl","aria-label":"Skalér fra øverste venstre hjørne",onPointerDown:qe=>tt(qe,X,"left","top")}),d.jsx("button",{type:"button",className:"edit-corner-handle edit-corner-tr","aria-label":"Skalér fra øverste højre hjørne",onPointerDown:qe=>tt(qe,X,"right","top")}),d.jsx("button",{type:"button",className:"edit-corner-handle edit-corner-bl","aria-label":"Skalér fra nederste venstre hjørne",onPointerDown:qe=>tt(qe,X,"left","bottom")}),d.jsx("button",{type:"button",className:"edit-corner-handle edit-corner-br","aria-label":"Skalér fra nederste højre hjørne",onPointerDown:qe=>tt(qe,X,"right","bottom")})]})]},X.name)}),Y&&d.jsx("div",{className:"overlay",children:d.jsx("div",{className:"spinner"})})]})})}),d.jsxs("div",{className:"edit-band edit-actions-band",children:[d.jsx("button",{className:"btn btn-outline",style:{flex:1},type:"button",onClick:it,disabled:Y,children:"Annuller"}),d.jsx("button",{className:"btn btn-primary",style:{flex:1},type:"button",onClick:je,disabled:N||Y,children:Y?"Gemmer...":"Gem"})]}),x&&d.jsx(L_,{unplaced:ye,onAdd:gt,onClose:()=>w(!1)})]})}function ch(i){return JSON.stringify(i.map(l=>({type:l.type,name:l.name,centerX2:l.centerX2,centerY2:l.centerY2,spanX:l.spanX,spanY:l.spanY,rotation:l.rotation})))}const uh=22;function V_(i,l){if(i==null||l==null)return null;const o=Math.abs(i),a=Math.abs(l);return o<uh&&a<uh?null:a>o?l>0?270:90:i>=0?0:180}function F_(i=!0){const[l,o]=A.useState(0);return A.useEffect(()=>{var E;if(!i||typeof window>"u"){o(0);return}let a=0,u=!1;const h=()=>{u=!0},p=j=>{if(!u){a!==0&&(a=0,o(0));return}const B=V_(j.beta,j.gamma);B!=null&&B!==a&&(a=B,o(B))},f=(E=window.screen)==null?void 0:E.orientation;f==null||f.addEventListener("change",h),window.addEventListener("orientationchange",h);let g=!1;const v=()=>{g||(g=!0,window.addEventListener("deviceorientation",p))},x=DeviceOrientationEvent.requestPermission;let w=null;if(typeof x=="function"){const j=()=>{x().then(B=>{B==="granted"&&v()}).catch(()=>{}),w==null||w()};window.addEventListener("pointerdown",j,{once:!0}),w=()=>window.removeEventListener("pointerdown",j)}else v();return()=>{window.removeEventListener("deviceorientation",p),f==null||f.removeEventListener("change",h),window.removeEventListener("orientationchange",h),w==null||w(),o(0)}},[i]),l}function G_(){const i=he(Y=>Y.layout),l=he(Y=>Y.editMode),o=he(Y=>Y.active),a=he(Y=>Y.sliderValues),u=he(Y=>Y.toggleValues),h=he(Y=>Y.radarPings),p=he(Y=>Y.textValues),f=he(Y=>Y.plotSeries),g=he(Y=>Y.toggleSideMenu),v=he(Y=>Y.sendButton),x=he(Y=>Y.sendSlider),w=he(Y=>Y.sendToggle),E=he(Y=>Y.sendJoystick),j=he(Y=>Y.sendDpad),B=A.useRef(null),$=np(B),V=Uh($.w,$.h,o==null?void 0:o.gridCols,o==null?void 0:o.gridRows),K=$.w>0&&$.h>0,U=F_(!l),ce=i.filter(zs);return d.jsxs("div",{className:"screen control-screen",children:[d.jsx(hf,{title:"Pico Kontrol Panel",onMenu:()=>g()}),l?d.jsx(I_,{}):d.jsx("div",{className:"controls-area-wrap",children:d.jsx("div",{className:"controls-area",ref:B,onContextMenu:Y=>Y.preventDefault(),onPointerDown:Y=>{Y.target===Y.currentTarget&&Y.preventDefault()},children:K?ce.map(Y=>{const de=As(Y,V);return de?d.jsx(e_,{control:Y,rect:de,disabled:!1,orientation:U,latestValue:Y.type==="slider"?a[Y.name]:void 0,toggleValue:Y.type==="toggle"?u[Y.name]:void 0,radarPings:Y.type==="radar"?h[Y.name]:void 0,textValue:Y.type==="text"?p[Y.name]:void 0,plotPoints:Y.type==="plot"?f[Y.name]:void 0,onButton:v,onSlider:x,onToggle:w,onJoystick:E,onDpad:j},Y.name):null}):d.jsx("div",{className:"overlay",children:d.jsx("div",{className:"spinner"})})})})]})}const $_="",dh="",fh="",Ni="";function Ms(i){return new Promise(l=>setTimeout(l,i))}class Y_{constructor(l){this.transport=l}async interrupt(){await this.transport.write(fh),await Ms(80),await this.transport.write(fh)}async friendlyRepl(){await this.transport.write(dh)}async softReset(){await this.transport.write(Ni)}async stop(){await this.interrupt(),await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(`try:
    ble.shutdown()
except Exception:
    pass
`).catch(()=>{})}async runFile(l,o){await this.interrupt(),await this.waitForFriendlyPrompt().catch(async()=>{await this.friendlyRepl().catch(()=>{}),await Ms(180)}),await Ms(120),o==null||o(),await this.transport.writeLine(`import builtins as _pkp_builtins; exec(_pkp_builtins.open(${JSON.stringify(l)}).read())`)}async sendFriendlyLine(l){await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(l)}async sendProgramInput(l){await this.transport.writeLine(l)}async enterRawRepl(l=2500){if(await this.interrupt(),await Ms(80),await this.transport.write(`\r
`),await Ms(40),!(await this.collectUntil(async()=>{await this.transport.write($_)},a=>a.includes("raw REPL")||a.includes("raw REPL; CTRL-B to exit"),l)).includes("raw REPL"))throw new Error("Kunne ikke skifte til MicroPython raw REPL.")}async exec(l,o=6e3){await this.enterRawRepl();const a=await this.collectUntil(async()=>{await this.transport.write(l),l.endsWith(`
`)||await this.transport.write(`
`),await this.transport.write(Ni)},u=>u.includes(`${Ni}${Ni}`)||u.includes(`${Ni}>`),o);return await this.friendlyRepl().catch(()=>{}),X_(a)}collectUntil(l,o,a){return new Promise((u,h)=>{let p="",f=null;const g=setTimeout(()=>{f==null||f(),h(new Error("Timeout ved USB REPL kommando."))},a);f=this.transport.addDataListener(v=>{p+=v,o(p)&&(clearTimeout(g),f==null||f(),u(p))}),l().catch(v=>{clearTimeout(g),f==null||f(),h(v instanceof Error?v:new Error("USB REPL kommando fejlede."))})})}async waitForFriendlyPrompt(l=1600){await this.collectUntil(async()=>{await this.transport.write(dh)},o=>/(^|\r?\n)>>> ?$/.test(o),l)}}function X_(i){const l=i.indexOf("OK"),o=i.indexOf(Ni,l>=0?l:0),a=o>=0?i.indexOf(Ni,o+1):-1;if(l<0||o<0)return{output:i.trim(),error:"",raw:i};const u=i.slice(l+2,o).replace(/^\r?\n/,"").trimEnd(),h=a>=0?i.slice(o+1,a).trim():"";return{output:u,error:h,raw:i}}const K_=[{version:"MicroPython v1.28.0",date:"2026-04-06",stamp:"20260406",tag:"v1.28.0"},{version:"MicroPython v1.27.0",date:"2025-12-09",stamp:"20251209",tag:"v1.27.0"},{version:"MicroPython v1.26.1",date:"2025-09-11",stamp:"20250911",tag:"v1.26.1"},{version:"MicroPython v1.26.0",date:"2025-08-09",stamp:"20250809",tag:"v1.26.0"},{version:"MicroPython v1.25.0",date:"2025-04-15",stamp:"20250415",tag:"v1.25.0"},{version:"MicroPython v1.24.1",date:"2024-11-29",stamp:"20241129",tag:"v1.24.1"},{version:"MicroPython v1.24.0",date:"2024-10-25",stamp:"20241025",tag:"v1.24.0"},{version:"MicroPython v1.23.0",date:"2024-06-02",stamp:"20240602",tag:"v1.23.0"},{version:"MicroPython v1.22.2",date:"2024-02-22",stamp:"20240222",tag:"v1.22.2"},{version:"MicroPython v1.22.1",date:"2024-01-05",stamp:"20240105",tag:"v1.22.1"}],Q_=[{board:"Raspberry Pi Pico",firmwareName:"RPI_PICO"},{board:"Raspberry Pi Pico W",firmwareName:"RPI_PICO_W"}],Zl=Q_.flatMap(({board:i,firmwareName:l})=>K_.map(({version:o,date:a,stamp:u,tag:h})=>{const p=`${l}-${u}-${h}.uf2`;return{board:i,version:o,date:a,fileName:p,url:`https://micropython.org/resources/firmware/${p}`}})),Gd=512,$d=`import builtins as _pkp_builtins
`;function al(i){return JSON.stringify(i)}function W_(i){return`bytes.fromhex(${JSON.stringify([...i].map(l=>l.toString(16).padStart(2,"0")).join(""))})`}function Z_(i,l){return`${i==="/"?"":i.replace(/\/$/,"")}/${l}`}class J_{constructor(l){this.repl=l}async list(l="/"){const o=`
import os
base = ${al(l)}
for name in os.listdir(base):
    p = (${al(l)}.rstrip('/') + '/' + name) if ${al(l)} != '/' else '/' + name
    try:
        st = os.stat(p)
        mode = st[0]
        kind = 'dir' if (mode & 0x4000) else 'file'
        size = st[6]
    except Exception:
        kind = 'unknown'
        size = -1
    print(name + '\\t' + kind + '\\t' + str(size))
`,a=await this.repl.exec(o);if(a.error)throw new Error(a.error);return a.output.split(/\r?\n/).map(u=>u.trim()).filter(Boolean).map(u=>{const[h,p,f]=u.split("	"),g=p==="dir"||p==="file"?p:"unknown",v=parseInt(f??"",10);return{name:h,path:Z_(l,h),type:g,...Number.isFinite(v)&&v>=0?{size:v}:{}}})}async readText(l){const o=`
import sys
${$d}with _pkp_builtins.open(${al(l)}, 'rb') as f:
    while True:
        b = f.read(${Gd})
        if not b:
            break
        print(b.hex())
`,a=await this.repl.exec(o,1e4);if(a.error)throw new Error(a.error);const u=a.output.replace(/\s+/g,"");return new TextDecoder().decode(ev(u))}async writeText(l,o,a){const u=new TextEncoder().encode(o);if(a==null||a(5,"Klargør fil..."),await this.repl.exec(`${$d}_pkp_builtins.open(${al(l)}, 'wb').close()`),u.length===0){a==null||a(100,"Gemt på Pico");return}for(let h=0;h<u.length;h+=Gd){const p=u.slice(h,h+Gd),f=`
${$d}with _pkp_builtins.open(${al(l)}, 'ab') as f:
    f.write(${W_(p)})
`,g=await this.repl.exec(f,1e4);if(g.error)throw new Error(g.error);const v=Math.min(h+p.length,u.length);a==null||a(10+Math.round(v/u.length*85),`Gemmer ${v}/${u.length} bytes...`)}a==null||a(100,"Gemt på Pico")}async replaceTextSafely(l,o,a,u={}){const h=`${l}.tmp`;if(await this.writeText(h,o,(g,v)=>a==null?void 0:a(Math.min(70,g*.7),v)),a==null||a(78,"Verificerer fil..."),await this.readText(h)!==o)throw await this.delete(h).catch(()=>{}),new Error(`Verificering fejlede for ${l}.`);a==null||a(88,"Udskifter fil...");let f=!!u.createBackup;if(f){const g=await this.readText(l).catch(()=>null);f=g!==null&&g!==o}if(f){const g=await this.nextBackupPath(l).catch(()=>`${l}.backup`);await this.rename(l,g).catch(()=>{})}else await this.delete(l).catch(()=>{});await this.rename(h,l),a==null||a(100,"Installeret på Pico")}async delete(l){const o=await this.repl.exec(`
import os
os.remove(${al(l)})
`);if(o.error)throw new Error(o.error)}async nextBackupPath(l){const o=await this.list("/"),a=new Set(o.map(w=>w.path.toLowerCase())),u=l.replace(/\\/g,"/"),h=u.lastIndexOf("/"),p=h>=0?u.slice(0,h+1):"/",f=h>=0?u.slice(h+1):u.replace(/^\/+/,""),g=f.lastIndexOf("."),v=g>0?f.slice(0,g):f,x=g>0?f.slice(g):"";for(let w=1;w<1e3;w+=1){const E=`${p}${v}_backup${w}${x}`;if(!a.has(E.toLowerCase()))return E}return`${p}${v}_backup${Date.now()}${x}`}async rename(l,o){const a=await this.repl.exec(`
import os
os.rename(${al(l)}, ${al(o)})
`);if(a.error)throw new Error(a.error)}}function ev(i){const l=new Uint8Array(Math.floor(i.length/2));for(let o=0;o<l.length;o+=1)l[o]=parseInt(i.slice(o*2,o*2+2),16);return l}const tv=`from machine import Pin                    # Giver adgang til pins på Pico W, fx LED'en\r
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
`,nv=`import ubluetooth\r
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
# Retry budget for a secure=True send - see _send_secure and the doc's\r
# "Verified send" section.\r
SECURE_SEND_ATTEMPTS   = 3\r
SECURE_SEND_TIMEOUT_MS = 600\r
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
        # ---- Verified send (secure=True); see the doc's "Verified send"\r
        # section. _in_irq isn't connection-scoped - see _ble_irq.\r
        self._in_irq = False\r
        self._vsend_next_id = 1\r
        self._vsend_ack_id = None\r
        self._vsend_last_processed_id = None\r
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
        self._vsend_next_id = 1\r
        self._vsend_ack_id = None\r
        self._vsend_last_processed_id = None\r
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
        # _in_irq covers on_connect/on_button/on_slider/on_toggle/on_joystick/\r
        # on_dpad too (all invoked below) - see _send_secure and the doc's\r
        # "Verified send" section for why that matters.\r
        self._in_irq = True\r
        try:\r
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
        finally:\r
            self._in_irq = False\r
\r
    def send_with_retry(self, msg, max_attempts=3, chunk_size=20, chunk_gap_ms=3):\r
        """Sends msg on the notify characteristic, chunked, with retries.\r
        Reentrant-safe via _send_lock/_send_backlog - see the doc's\r
        "Outbound send serialization" note."""\r
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
        if msg.startswith("ack:vsend,"):\r
            # Ack for our own _send_secure call - see the doc's "Verified send" section.\r
            id_str = msg[len("ack:vsend,"):]\r
            if id_str.isdigit():\r
                self._vsend_ack_id = int(id_str)\r
            return\r
\r
        if msg.startswith("vsend,"):\r
            # A secure send FROM the app (e.g. an acked button/toggle command).\r
            # Ack immediately, then dispatch, deduped by id - see the doc.\r
            parsed = _split_or_none(msg[len("vsend,"):], ",", 2)\r
            if parsed is not None and parsed[0].isdigit():\r
                vsend_id = int(parsed[0])\r
                vsend_payload = parsed[1]\r
                self.send_with_retry("ack:vsend,{}\\n".format(vsend_id), max_attempts=1)\r
                if vsend_id != self._vsend_last_processed_id:\r
                    self._vsend_last_processed_id = vsend_id\r
                    try:\r
                        self._process_message(vsend_payload)\r
                    except Exception as e:\r
                        print("vsend message handling error:", e)\r
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
    # -------------------- Verified send (secure=True) --------------------\r
    def _send_secure(self, line, attempts=SECURE_SEND_ATTEMPTS, timeout_ms=SECURE_SEND_TIMEOUT_MS):\r
        """Blocks (main loop only - see the doc's "Verified send" section)\r
        until the app acks \`line\` or every attempt is exhausted; True/False."""\r
        if self._in_irq:\r
            print("ble.send(secure=True) blev kaldt fra en callback (fx on_button) - det virker kun fra hovedloopet.")\r
            return False\r
        if not self.ready:\r
            print("ble.send(secure=True) kraever en klar forbindelse (ble.ready var False).")\r
            return False\r
\r
        payload = line[:-1] if line.endswith("\\n") else line\r
        for _attempt in range(attempts):\r
            if not self.connected:\r
                return False\r
            vsend_id = self._vsend_next_id\r
            self._vsend_next_id += 1\r
            self._vsend_ack_id = None\r
            if not self.send_with_retry("vsend,{},{}\\n".format(vsend_id, payload), max_attempts=1):\r
                continue\r
            deadline = time.ticks_add(time.ticks_ms(), timeout_ms)\r
            while time.ticks_diff(deadline, time.ticks_ms()) > 0:\r
                if self._vsend_ack_id == vsend_id:\r
                    return True\r
                if not self.connected:\r
                    return False\r
                time.sleep_ms(5)\r
        return False\r
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
    def send_radar(self, name, angle, distance_cm, secure=False):\r
        """radar,<NAME>,<ANGLE>,<DISTANCE_CM>. secure=True: see send_text's docstring."""\r
        if not self.connected:\r
            return False\r
        try:\r
            clean_name = self._protocol_field(name)\r
            angle_value = int(float(angle))\r
            distance_value = round(float(distance_cm), 1)\r
            line = "radar,{},{},{}\\n".format(clean_name, angle_value, distance_value)\r
            if secure:\r
                return self._send_secure(line)\r
            return self._emit_telemetry(line, coalesce_key=("radar", clean_name))\r
        except Exception as e:\r
            print("send_radar failed:", e)\r
            return False\r
\r
    def send_toggle_state(self, name, value, secure=False):\r
        """toggle_state,<NAME>,<0|1>. secure=True: see send_text's docstring."""\r
        if not self.connected:\r
            return False\r
        try:\r
            clean_name = self._protocol_field(name)\r
            state = 1 if value else 0\r
            line = "toggle_state,{},{:d}\\n".format(clean_name, state)\r
            if secure:\r
                return self._send_secure(line)\r
            return self._emit_telemetry(line, coalesce_key=("toggle_state", clean_name))\r
        except Exception as e:\r
            print("send_toggle_state failed:", e)\r
            return False\r
\r
    def send_slider_state(self, name, value, secure=False):\r
        """slider_state,<NAME>,<VALUE>. secure=True: see send_text's docstring."""\r
        if not self.connected:\r
            return False\r
        try:\r
            clean_name = self._protocol_field(name)\r
            slider_value = round(float(value), 2)\r
            line = "slider_state,{},{}\\n".format(clean_name, slider_value)\r
            if secure:\r
                return self._send_secure(line)\r
            return self._emit_telemetry(line, coalesce_key=("slider_state", clean_name))\r
        except Exception as e:\r
            print("send_slider_state failed:", e)\r
            return False\r
\r
    def send_plot(self, name, value, label=None, secure=False):\r
        """Appends one sample (never coalesced, unlike the others - see the\r
        doc). label supports \\\\n (up to 3 lines). secure=True: see\r
        send_text's docstring - avoid it in a bulk resend loop (see the\r
        Graphs example's send_gemt_historik)."""\r
        if not self.connected:\r
            return False\r
        try:\r
            clean_name = self._protocol_field(name)\r
            line = "plot,{},{}".format(clean_name, round(float(value), 2))\r
            if label is not None:\r
                clean_label = self._encode_plot_label(label)\r
                if clean_label:\r
                    line += "," + clean_label\r
            line += "\\n"\r
            if secure:\r
                return self._send_secure(line)\r
            return self._emit_telemetry(line)\r
        except Exception as e:\r
            print("send_plot failed:", e)\r
            return False\r
\r
    def send_plot_clear(self, name, secure=False):\r
        """plot_clear,<NAME>. secure=True: see send_text's docstring."""\r
        if not self.connected:\r
            return False\r
        try:\r
            clean_name = self._protocol_field(name)\r
            line = "plot_clear,{}\\n".format(clean_name)\r
            if secure:\r
                return self._send_secure(line)\r
            return self._emit_telemetry(line, coalesce_key=("plot_clear", clean_name))\r
        except Exception as e:\r
            print("send_plot_clear failed:", e)\r
            return False\r
\r
    def send_text(self, name, message, secure=False):\r
        """text,<NAME>,<MESSAGE>. "\\\\n" becomes a line break.\r
\r
        secure=True waits (main loop only) for the app to confirm receipt\r
        instead of firing-and-forgetting - see the doc's "Verified send"\r
        section. Never call it from on_connect/on_button/on_slider/\r
        on_toggle/on_joystick/on_dpad - see _send_secure."""\r
        if not self.connected:\r
            return False\r
        try:\r
            clean_name = self._protocol_field(name)\r
            clean_message = self._encode_text_message(message)\r
            line = "text,{},{}\\n".format(clean_name, clean_message)\r
            if secure:\r
                return self._send_secure(line)\r
            return self._emit_telemetry(line, coalesce_key=("text", clean_name))\r
        except Exception as e:\r
            print("send_text failed:", e)\r
            return False\r
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
`,rv=`from machine import Pin, time_pulse_us\r
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
        return cms`,lv=`import array, time\r
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
`,iv=`from machine import Pin\r
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
`,av=`from machine import Pin                    # Giver adgang til pins på Pico W, fx LED'en\r
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
    # IKKE secure=True her: send_plot kan tage det, men det ville vente på en\r
    # bekræftelse for hvert eneste gamle punkt (op til GEMTE_MAALINGER_MAKS\r
    # stk.) i stedet for bare at sende dem - det ville gøre denne genopbygning\r
    # meget langsommere, for ingen reel gevinst (et enkelt gammelt punkt er\r
    # ikke vigtigt nok at gensende, modsat f.eks. en vigtig alarmbesked).\r
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
`,sv=`from machine import Pin\r
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
`,ov=`from machine import Pin\r
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
`,cv=`# PicoFly.py
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
`,uv=`import machine\r
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
        self.initPCA()`,dv=`from machine import Pin\r
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
`,fv=`from machine import Pin
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
        # secure=True venter paa at appen bekraefter beskeden, i stedet for
        # bare at sende og haabe. Godt til en besked der er vigtig at faa
        # frem. Maa kun kaldes herfra (hovedloopet) - aldrig fra
        # on_connect/on_button/on_slider/on_toggle/on_joystick/on_dpad.
        bekraeftet = ble.send_text('BESKED', besked, secure=True)
        # Du bestemmer selv, hvad der skrives her - proev at slette de to linjer.
        print('Sendte besked til appen:' if bekraeftet else 'Appen bekraeftede ALDRIG beskeden:')
        print(besked)
        time.sleep_ms(2000)
    else:
        time.sleep_ms(100)
`,mv=`from machine import Pin, PWM, ADC\r
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
`,hv=`from machine import Pin\r
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
`,ya=[{id:"program:send-text",path:"/main.py",label:"Send tekst (main.py)",description:"Startprogram med kun et tekstfelt, hvor Picoen sender beskeder til kontrolpanelet.",kind:"program",difficulty:"Nem",content:fv},{id:"program:neopixel-led",path:"/main.py",label:"NeoPixel lys (main.py)",description:"Startprogram til NeoPixel med hold-knap og lysstyrke-slider.",kind:"program",difficulty:"Nem",content:ov},{id:"program:tank-control",path:"/main.py",label:"Robotbil med tankstyring (main.py)",description:"Startprogram til robotbil med to motor-slidere.",kind:"program",difficulty:"Mellem",content:hv},{id:"program:dpad-control",path:"/main.py",label:"Robotbil med D-pad (main.py)",description:"Startprogram til robotbil styret med fire retningsknapper og fart-slider.",kind:"program",difficulty:"Mellem",content:iv},{id:"program:joystick-control",path:"/main.py",label:"Robotbil med joystick (main.py)",description:"Startprogram til robotbil styret med joystick og fart-slider.",kind:"program",difficulty:"Mellem",content:sv},{id:"program:radar-control",path:"/main.py",label:"Radar med afstandssensor (main.py)",description:"Startprogram til radar med servo, afstandssensor og scan-toggle.",kind:"program",difficulty:"Svær",content:dv},{id:"program:api-weather",path:"/main.py",label:"Vejr fra internettet (main.py)",description:"Startprogram der henter vejr fra et API over Wi-Fi og viser det i tekstfelter. Husk at skrive dit Wi-Fi navn og kodeord ind i main.py.",kind:"program",difficulty:"Svær",content:tv},{id:"program:graphs",path:"/main.py",label:"Vejrgrafer fra internettet (main.py)",description:"Startprogram der henter vejr fra et API og tegner temperatur og nedbør som grafer over tid. Husk at skrive dit Wi-Fi navn og kodeord ind i main.py.",kind:"program",difficulty:"Svær",content:av},{id:"program:smart-home",path:"/main.py",label:"SmartHome alarmstation (main.py)",description:"Startprogram til alarmstation med dør-servo, keypad, PIR, vandsensor, buzzer og NeoPixel.",kind:"program",difficulty:"Svær",content:mv},{id:"library:pico-bluetooth",path:"/PicoBluetooth.py",label:"PicoBluetooth.py",description:"Bluetooth-biblioteket der får Picoen til at tale med appen.",kind:"library",content:nv},{id:"library:pico-robotics",path:"/PicoRobotics.py",label:"PicoRobotics.py",description:"Bibliotek til Kitronik Pico Robotics Board.",kind:"library",content:uv},{id:"library:pico-fly",path:"/PicoFly.py",label:"PicoFly.py",description:"Bibliotek til PicoFly-board med motorer og servoer.",kind:"library",content:cv},{id:"library:hcsr04",path:"/hcsr04.py",label:"hcsr04.py",description:"Bibliotek til HC-SR04 ultralyds-afstandssensor.",kind:"library",content:rv},{id:"library:neopixel",path:"/neopixel.py",label:"neopixel.py",description:"Bibliotek til NeoPixel LED-strips og LED-ringe.",kind:"library",content:lv}],pv=11914;function gv(){return typeof navigator<"u"&&"serial"in navigator&&!!navigator.serial}function _v(){return gv()?{supported:!0,message:"USB-udvikling er tilgængelig i denne browser."}:{supported:!1,message:"USB-udvikling kræver en computer med Chrome, Edge eller Chromebook."}}class vv{constructor(l={}){be(this,"port",null);be(this,"reader",null);be(this,"writer",null);be(this,"readLoopDone",null);be(this,"readLoopActive",!1);be(this,"disconnecting",!1);be(this,"buffer","");be(this,"events");be(this,"dataListeners",new Set);this.events=l}get connected(){return!!this.port&&!!this.writer}get info(){var l;return((l=this.port)==null?void 0:l.getInfo())??null}async requestAndConnect(){if(!navigator.serial)throw new Error("Web Serial er ikke tilgængelig i denne browser.");const l=await navigator.serial.requestPort({filters:[{usbVendorId:pv}]});await this.openPort(l)}async connectKnownPort(l){await this.openPort(l)}async disconnect(){var g,v;const l=this.connected||!!this.port||!!this.reader,o=this.port,a=this.reader,u=this.writer,h=this.readLoopDone,p=a==null?void 0:a.closed.catch(()=>{}),f=u==null?void 0:u.closed.catch(()=>{});this.disconnecting=!0,this.readLoopActive=!1;try{await(a==null?void 0:a.cancel())}catch{}h&&await h.catch(()=>{}),await p;try{a==null||a.releaseLock()}catch{}this.reader===a&&(this.reader=null);try{await(u==null?void 0:u.close()),await f}catch{try{await(u==null?void 0:u.abort("disconnect"))}catch{}}try{u==null||u.releaseLock()}catch{}this.writer===u&&(this.writer=null),o&&await o.close(),this.port===o&&(this.port=null),this.buffer="",this.readLoopDone===h&&(this.readLoopDone=null),this.disconnecting=!1,l&&((v=(g=this.events).onDisconnect)==null||v.call(g))}async write(l){if(!this.writer)throw new Error("Ingen USB-forbindelse.");await this.writer.write(new TextEncoder().encode(l))}async writeLine(l){await this.write(`${l}\r
`)}addDataListener(l){return this.dataListeners.add(l),()=>this.dataListeners.delete(l)}async openPort(l){var a,u,h;if(await this.disconnect().catch(()=>{}),await l.open({baudRate:115200,bufferSize:4096}),this.port=l,this.writer=((a=l.writable)==null?void 0:a.getWriter())??null,!this.writer||!l.readable)throw new Error("USB-porten kunne ikke åbnes til læsning og skrivning.");const o=l.getInfo();(h=(u=this.events).onLog)==null||h.call(u,"success",`USB-forbindelse oprettet (${bv(o)}).`),this.readLoopDone=this.startReadLoop(l)}async startReadLoop(l){var u,h,p;this.readLoopActive=!0;const o=new TextDecoder;this.reader=((u=l.readable)==null?void 0:u.getReader())??null;const a=this.reader;if(a)try{for(;this.readLoopActive;){const{value:f,done:g}=await a.read();if(g)break;f&&this.consumeText(o.decode(f,{stream:!0}))}}catch(f){this.readLoopActive&&((p=(h=this.events).onLog)==null||p.call(h,"error",f instanceof Error?f.message:"USB-læsning stoppede."))}finally{try{a.releaseLock()}catch{}this.reader===a&&(this.reader=null),this.readLoopActive&&!this.disconnecting&&this.port===l&&this.closeAfterUnexpectedReadEnd(l)}}async closeAfterUnexpectedReadEnd(l){var h,p;const o=this.connected||this.port===l;this.disconnecting=!0,this.readLoopActive=!1;const a=this.writer,u=a==null?void 0:a.closed.catch(()=>{});try{await(a==null?void 0:a.close()),await u}catch{try{await(a==null?void 0:a.abort("disconnect"))}catch{}}try{a==null||a.releaseLock()}catch{}this.writer===a&&(this.writer=null);try{await l.close()}catch{}this.port===l&&(this.port=null),this.buffer="",this.readLoopDone=null,this.disconnecting=!1,o&&((p=(h=this.events).onDisconnect)==null||p.call(h))}consumeText(l){var o,a,u,h;(a=(o=this.events).onData)==null||a.call(o,l);for(const p of this.dataListeners)p(l);for(this.buffer+=l;this.buffer.includes(`
`);){const p=this.buffer.indexOf(`
`),f=this.buffer.slice(0,p).replace(/\r$/,"");this.buffer=this.buffer.slice(p+1),(h=(u=this.events).onLine)==null||h.call(u,f)}}}function bv(i){const l=i.usbVendorId!==void 0?`VID ${i.usbVendorId.toString(16).padStart(4,"0")}`:"ukendt VID",o=i.usbProductId!==void 0?`PID ${i.usbProductId.toString(16).padStart(4,"0")}`:"ukendt PID";return`${l}, ${o}`}const lp=15e3,mh=64*1024,hh=1e5,ip=new URL("/micropython/micropython.mjs",window.location.origin).toString(),yv=64*1024,ph=8;function ap(){return typeof SharedArrayBuffer<"u"&&globalThis.crossOriginIsolated===!0}function wv(){return ap()?new SharedArrayBuffer(yv):null}function xv(i,l){const o=new Int32Array(i,0,2),a=new Uint8Array(i),u=i.byteLength-ph,h=new TextEncoder().encode(l+`
`);let p=Atomics.load(o,0);for(const f of h)a[ph+p%u]=f,p+=1;Atomics.store(o,0,p),Atomics.notify(o,0)}const kv=new Set(["bluetooth","machine","network","PicoRobotics","rp2","ubluetooth"]);class Ev{constructor(){be(this,"worker",null);be(this,"pending",null);be(this,"nextId",0)}send(l,o={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython-terminalen er optaget. Stop den, eller vent på at kommandoen bliver færdig.",timedOut:!1,unavailable:!1});const a=++this.nextId,u=o.timeoutMs??lp,h=this.ensureWorker();return new Promise(p=>{const f=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython-terminalen stoppede, fordi kommandoen tog for lang tid. Tjek for uendelige løkker.",timedOut:!0,unavailable:!1}),this.restartWorker()},u);this.pending={id:a,timer:f,onOutput:o.onOutput,resolve:p},h.postMessage({type:"run",id:a,code:Tv(l),runtimeUrl:ip})})}reset(){this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),this.restartWorker()}dispose(){var l;this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),(l=this.worker)==null||l.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const l=new Worker(new URL(""+new URL("offlineMicroPython.worker-B_-Tbi7X.js",import.meta.url).href,import.meta.url),{type:"module"});return l.onmessage=o=>this.handleMessage(o.data),l.onerror=o=>{this.finish({ok:!1,output:"",error:o.message||"Browser-MicroPython-terminalen fejlede i browser-worker.",timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=l,l}handleMessage(l){var a;const o=this.pending;if(!(!o||l.id!==o.id||l.type==="ready")){if(l.type==="stdout"){(a=o.onOutput)==null||a.call(o,l.text);return}if(l.type!=="stdin-wait"){if(l.type==="unavailable"){this.finish({ok:!1,output:"",error:l.error,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:l.ok,output:l.output,error:l.error,timedOut:!1,unavailable:!1})}}}finish(l){const o=this.pending;o&&(window.clearTimeout(o.timer),this.pending=null,o.resolve(l))}restartWorker(){var l;(l=this.worker)==null||l.terminate(),this.worker=null}}class Sv{constructor(){be(this,"worker",null);be(this,"pending",null);be(this,"nextId",0);be(this,"stdinSab",null)}run(l,o={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython kører allerede kode. Stop den først.",issues:[],timedOut:!1,unavailable:!1});const a=typeof o=="number"?o:o.timeoutMs===null?null:o.timeoutMs??lp,u=typeof o=="number"?void 0:o.onOutput,h=typeof o=="number"?void 0:o.onWaitingForInput,p=typeof o=="number"?void 0:o.signal,f=ef(l,{allowInput:!0});if(f.some(w=>w.level==="error"))return Promise.resolve({ok:!1,output:"",error:"",issues:f,timedOut:!1,unavailable:!1});const g=++this.nextId,v=this.ensureWorker(),x=wv();return this.stdinSab=x,new Promise(w=>{const E=V=>this.finish(V),j=()=>{this.restartWorker(),E({ok:!1,output:"",error:"",issues:f,timedOut:!1,unavailable:!1})},B=a===null?null:window.setTimeout(()=>{E({ok:!1,output:"",error:"Browser-MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:f,timedOut:!0,unavailable:!1}),this.restartWorker()},a);if(this.pending={id:g,timer:B,timeoutMs:a,issues:f,onOutput:u,onWaitingForInput:h,signal:p,abort:j,resolve:w},p!=null&&p.aborted){j();return}p==null||p.addEventListener("abort",j,{once:!0});const $={type:"run",id:g,code:l,runtimeUrl:ip,interactive:!0,sab:x??void 0};v.postMessage($)})}sendInput(l){const o=this.pending;!o||!this.stdinSab||(this.refreshTimeout(o),xv(this.stdinSab,l))}stop(){const l=this.pending;l&&(this.restartWorker(),this.finish({ok:!1,output:"",error:"Browser-MicroPython blev stoppet.",issues:l.issues,timedOut:!1,unavailable:!1}))}dispose(){var l;this.finish({ok:!1,output:"",error:"",issues:[],timedOut:!1,unavailable:!1}),(l=this.worker)==null||l.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const l=new Worker(new URL(""+new URL("offlineMicroPython.worker-B_-Tbi7X.js",import.meta.url).href,import.meta.url),{type:"module"});return l.onmessage=o=>this.handleMessage(o.data),l.onerror=o=>{const a=this.pending;this.finish({ok:!1,output:"",error:o.message||"Offline MicroPython fejlede i browser-worker.",issues:(a==null?void 0:a.issues)??[],timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=l,l}handleMessage(l){var a,u;const o=this.pending;if(!(!o||l.id!==o.id||l.type==="ready")){if(l.type==="stdout"){this.refreshTimeout(o),(a=o.onOutput)==null||a.call(o,l.text);return}if(l.type==="stdin-wait"){l.waiting&&this.refreshTimeout(o),(u=o.onWaitingForInput)==null||u.call(o,l.waiting);return}if(l.type==="unavailable"){this.finish({ok:!1,output:"",error:l.error,issues:o.issues,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:l.ok,output:l.output,error:l.error,issues:o.issues,timedOut:!1,unavailable:!1}),this.restartWorker()}}finish(l){var a,u;const o=this.pending;o&&(o.timer!==null&&window.clearTimeout(o.timer),(a=o.signal)==null||a.removeEventListener("abort",o.abort),this.pending=null,(u=o.onWaitingForInput)==null||u.call(o,!1),o.resolve(l))}refreshTimeout(l){l.timeoutMs!==null&&(l.timer!==null&&window.clearTimeout(l.timer),l.timer=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:l.issues,timedOut:!0,unavailable:!1}),this.restartWorker()},l.timeoutMs))}restartWorker(){var l;(l=this.worker)==null||l.terminate(),this.worker=null,this.stdinSab=null}}function Tv(i){const l=JSON.stringify(i);return["try:",`    __pico_repl_value = eval(${l})`,"    if __pico_repl_value is not None:","        print(repr(__pico_repl_value))","except SyntaxError:",`    exec(${l})`,"finally:","    try:","        del __pico_repl_value","    except Exception:","        pass"].join(`
`)}function ef(i,l={}){const o=[],a=new Blob([i]).size;a>mh&&o.push({level:"error",text:`Koden er ${a} bytes. Offline MicroPython kører kun små programmer op til ${mh} bytes.`});const u=i.split(/\r?\n/);for(let h=0;h<u.length;h+=1){const p=h+1,f=wc(u[h]).trim();if(!f)continue;const g=Nv(f);g&&kv.has(g)&&o.push({level:"error",line:p,text:`${g} virker kun på Picoen. Forbind en Pico for at køre denne kode.`}),!l.allowInput&&Mv(u[h])&&o.push({level:"error",line:p,text:"input() virker i hele programmer. Skriv programmet i editoren og tryk Kør, eller kør filen på Pico via USB."});const v=f.match(/\brange\(\s*(-?\d+)\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\)/);v&&jv(v)>hh&&o.push({level:"error",line:p,text:`range(...) er for stor til offline kørsel. Brug højst ${hh} gentagelser.`})}for(const h of Av(u))o.push({level:"warning",text:`Funktionen ${h} ser rekursiv ud. Hvis den ikke stopper, afbryder offline MicroPython efter få sekunder.`});return o}function wc(i){let l=null;for(let o=0;o<i.length;o+=1){const a=i[o];if((a==='"'||a==="'")&&i[o-1]!=="\\"&&(l=l===a?null:l??a),a==="#"&&!l)return i.slice(0,o)}return i}function Mv(i){const l=wc(i);let o=null;for(let a=0;a<l.length;a+=1){const u=l[a];if((u==='"'||u==="'")&&l[a-1]!=="\\"){o=o===u?null:o??u;continue}if(!o&&!(!gh(l[a-1])||l.slice(a,a+5)!=="input")&&gh(l[a+5])&&l.slice(a+5).trimStart().startsWith("("))return!0}return!1}function gh(i){return!i||!/[A-Za-z0-9_]/.test(i)}function Nv(i){const l=i.match(/^import\s+([A-Za-z_]\w*)/);if(l)return l[1];const o=i.match(/^from\s+([A-Za-z_]\w*)\s+import\b/);return(o==null?void 0:o[1])??null}function _h(i){const l=i.match(/^\s*/);return(l==null?void 0:l[0].replace(/\t/g,"    ").length)??0}function jv(i){const l=Number(i[1]),o=i[2]===void 0?void 0:Number(i[2]),a=i[3]===void 0?1:Number(i[3]);if(a===0)return Number.POSITIVE_INFINITY;const p=(o===void 0?l:o)-(o===void 0?0:l);return p>0&&a<0||p<0&&a>0?0:Math.ceil(Math.abs(p/a))}function Av(i){const l=new Set;for(let o=0;o<i.length;o+=1){const a=wc(i[o]).trim().match(/^def\s+([A-Za-z_]\w*)\s*\(/);if(!a)continue;const u=a[1],h=_h(i[o]);for(let p=o+1;p<i.length;p+=1){if(!i[p].trim())continue;if(_h(i[p])<=h)break;if(new RegExp(`\\b${u}\\s*\\(`).test(wc(i[p]))){l.add(u);break}}}return[...l]}const Rv=/^(for|if|while|def|class|elif|else|try|except|finally|with)\b/;function Cv(i,l){var x;const o=i.trim(),a=l.split(/\r?\n/),u=Dv(o),h=u?a[u-1]??"":"",p=Ov(a,u),f=o.split(/\r?\n/).filter(Boolean).at(-1)??"";if(/KeyboardInterrupt/.test(f))return{simple:"Programmet blev stoppet.",technical:o,line:u};if(/MemoryError/.test(f))return{simple:`Picoen eller browserens MicroPython løb tør for hukommelse${u?` omkring linje ${u}`:""}.`,technical:o,line:u};if(/RecursionError/.test(f))return{simple:`En funktion kalder sig selv for mange gange${u?` omkring linje ${u}`:""}.`,technical:o,line:u};const g=f.match(/UnboundLocalError:\s+local variable ['"](.+?)['"]/);if(g)return{simple:`Variablen ${g[1]} bruges inde i en funktion, før den har fået en værdi${u?` på linje ${u}`:""}.`,technical:o,line:u};const v=f.match(/NameError:\s+name ['"](.+?)['"] (?:isn't|is not) defined/);if(v)return{simple:Uv(h,v[1])?`Teksten ${v[1]} mangler måske citationstegn${u?` på linje ${u}`:""}.`:`Python kender ikke navnet ${v[1]}${u?` på linje ${u}`:""}.`,technical:o,line:u};if(/ZeroDivisionError/.test(f))return{simple:`Kan ikke dividere med 0${u?` på linje ${u}`:""}.`,technical:o,line:u};if(/IndentationError:\s+unexpected indent/.test(f))return{simple:`Der er for meget indrykning${u?` på linje ${u}`:""}.`,technical:o,line:u};if(/IndentationError/.test(f))return{simple:`Mangler indrykning${u?` på linje ${u}`:""}.`,technical:o,line:u};if(/ImportError|ModuleNotFoundError/.test(f)){const w=(x=f.match(/['"](.+?)['"]/))==null?void 0:x[1];return{simple:`Python kan ikke finde modulet${w?` ${w}`:""}.`,technical:o,line:u}}if(/OSError/.test(f))return/ENOENT|No such file|Errno\s+2/.test(f)?{simple:`Python kan ikke finde filen${u?` på linje ${u}`:""}.`,technical:o,line:u}:/EACCES|permission|denied/i.test(f)?{simple:`Python har ikke adgang til filen eller enheden${u?` på linje ${u}`:""}.`,technical:o,line:u}:{simple:`Der opstod en fejl med en fil eller en enhed${u?` omkring linje ${u}`:""}.`,technical:o,line:u};if(/SyntaxError/.test(f)){if(/invalid syntax/.test(f)&&p.text.trim().endsWith(","))return{simple:`Linje ${p.line??u} slutter med komma. Tjek om der mangler noget efter kommaet.`,technical:o,line:p.line??u};const w=tf(h,u)??tf(p.text,p.line)??Lv(a,u);return w?{simple:`Mangler måske : efter linje ${w.line}.`,technical:o,line:w.line}:u&&p.text.trim().endsWith(":")&&h.trim()&&!/^\s+/.test(h)?{simple:`Mangler måske indrykning på linje ${u}.`,technical:o,line:u}:zv(h)?{simple:`Tekst mangler måske citationstegn${u?` på linje ${u}`:""}.`,technical:o,line:u}:Bv(h)?{simple:`Tekst mangler måske et afsluttende citationstegn${u?` på linje ${u}`:""}.`,technical:o,line:u}:qv(h)?{simple:`Mangler måske en afsluttende parentes${u?` på linje ${u}`:""}.`,technical:o,line:u}:Hv(h)?{simple:`Der er måske en parentes for meget${u?` på linje ${u}`:""}.`,technical:o,line:u}:{simple:`Python fandt en syntaksfejl${u?` omkring linje ${u}`:""}.`,technical:o,line:u}}return/TypeError/.test(f)?/takes .* positional arguments? but .* given/.test(f)||/function takes/.test(f)?{simple:`En funktion får for mange eller for få værdier${u?` på linje ${u}`:""}.`,technical:o,line:u}:/unsupported operand type/.test(f)?{simple:`To værdier kan ikke bruges sammen på den måde${u?` på linje ${u}`:""}.`,technical:o,line:u}:/not callable/.test(f)?{simple:`Der bliver brugt parenteser efter noget, som ikke er en funktion${u?` på linje ${u}`:""}.`,technical:o,line:u}:{simple:`En værdi har den forkerte type${u?` på linje ${u}`:""}.`,technical:o,line:u}:/IndexError/.test(f)?{simple:`Listen har ikke et element på den plads${u?` på linje ${u}`:""}.`,technical:o,line:u}:/KeyError/.test(f)?{simple:`Ordbogen mangler den nøgle${u?` på linje ${u}`:""}.`,technical:o,line:u}:/AttributeError/.test(f)?{simple:`Den ting har ikke den kommando${u?` på linje ${u}`:""}.`,technical:o,line:u}:/ValueError/.test(f)?/invalid literal for int/.test(f)?{simple:`Teksten kan ikke laves om til et heltal${u?` på linje ${u}`:""}.`,technical:o,line:u}:{simple:`Værdien passer ikke her${u?` på linje ${u}`:""}.`,technical:o,line:u}:{simple:`Python fandt en fejl${u?` omkring linje ${u}`:""}.`,technical:o,line:u}}function Dv(i){var u;const o=(u=[...i.matchAll(/line\s+(\d+)/g)].at(-1))==null?void 0:u[1];if(!o)return;const a=parseInt(o,10);return Number.isFinite(a)&&a>0?a:void 0}function Ov(i,l){if(!l)return{text:""};for(let o=l-2;o>=0;o-=1){const a=i[o]??"";if(a.trim())return{line:o+1,text:a}}return{text:""}}function tf(i,l){if(!l)return null;const o=i.trim();return!Rv.test(o)||o.endsWith(":")?null:{line:l}}function Lv(i,l){const o=l?Math.min(i.length,l):i.length,a=Math.max(0,o-4);for(let u=o-1;u>=a;u-=1){const h=tf(i[u]??"",u+1);if(h)return h}return null}function Bv(i){const l=(i.match(/'/g)??[]).length,o=(i.match(/"/g)??[]).length;return l%2===1||o%2===1}function zv(i){var a,u;const o=(u=(a=i.trim().match(/^print\((.+)\)$/))==null?void 0:a[1])==null?void 0:u.trim();return!o||/['"]/.test(o)?!1:/\s/.test(o)&&/[a-zA-ZæøåÆØÅ]/.test(o)}function Uv(i,l){const o=i.trim();return!!l&&/[A-Za-zæøåÆØÅ]/.test(l)&&(o.startsWith("print(")||o.includes(`= ${l}`))}function qv(i){return sp(i)>0}function Hv(i){return sp(i)<0}function sp(i){let l=0,o=null;for(let a=0;a<i.length;a+=1){const u=i[a];if((u==='"'||u==="'")&&i[a-1]!=="\\"){o=o===u?null:o??u;continue}o||((u==="("||u==="["||u==="{")&&(l+=1),(u===")"||u==="]"||u==="}")&&(l-=1))}return l}const nf="/min_kode.py",op=`print('Hej fra Pico Kontrol Panel')
`,Pv=500,Iv=1200,Ns="Backup-filnavne er reserveret til versionshistorik. Vælg et andet navn.";function Xt(i,l){return`${i}:${l}`}function vh(i){return new Promise(l=>window.setTimeout(l,i))}function Vv(){const i=he(m=>m.toggleSideMenu),l=he(m=>m.askConfirm),o=he(m=>m.picoIdeOrigin),a=he(m=>m.active),u=he(m=>m.isBleConnected),h=he(m=>m.bleListFiles),p=he(m=>m.bleReadText),f=he(m=>m.bleWriteText),g=he(m=>m.bleDeleteFile),v=he(m=>m.bleRestartAndReconnect),x=he(m=>m.progress),[w,E]=A.useState(!1),[j,B]=A.useState(!1),[$,V]=A.useState([]),[K,U]=A.useState(!1),[ce,Y]=A.useState(!1),[de,_e]=A.useState([]),[M,q]=A.useState(null),[D,Q]=A.useState(()=>dc(oc())),[C,ae]=A.useState(nf),[le,ye]=A.useState("local"),[ee,N]=A.useState(()=>{var m;return((m=dc(oc()).find(b=>b.path===nf))==null?void 0:m.content)??op}),[P,oe]=A.useState([]),[ke,ve]=A.useState(!1),[T,J]=A.useState(""),[se,fe]=A.useState(""),[Se,we]=A.useState(""),[Ce,tt]=A.useState(""),[Me,gt]=A.useState(null),[je,it]=A.useState(!1),[X,H]=A.useState(null),[me,Le]=A.useState(!1),[Ve,Fe]=A.useState({}),[Be,qe]=A.useState(!1),[Ut,an]=A.useState(0),[Tn,Rt]=A.useState(()=>{var m,b;return((m=Zl.find(k=>k.board==="Raspberry Pi Pico W"))==null?void 0:m.board)??((b=Zl[0])==null?void 0:b.board)??""}),[rr,ol]=A.useState(()=>{var m,b;return((m=Zl.find(k=>k.board==="Raspberry Pi Pico W"))==null?void 0:m.version)??((b=Zl[0])==null?void 0:b.version)??""}),[Mn,sn]=A.useState(null),[Gn,Nn]=A.useState({top:0,left:0}),[cl,jn]=A.useState(!1),[on,Vt]=A.useState(!1),[cn,ct]=A.useState(!1),[ul,Ft]=A.useState(!0),[Gt,$t]=A.useState(""),[lr,dl]=A.useState([]),[un,pn]=A.useState(null),[ir,ar]=A.useState(!1),[An,ue]=A.useState({}),[Ae,nt]=A.useState({}),[$e,ht]=A.useState(null),[rt,St]=A.useState(null),[_r,Rn]=A.useState(""),[sr,vr]=A.useState(()=>Am().clearTerminalOnRun),[vt,en]=A.useState(()=>Am().simplifiedErrors),[br,Na]=A.useState(()=>typeof navigator<"u"?Eh(navigator):!1),Ri=A.useRef(null),yr=A.useRef(null),bt=A.useRef(null),fl=A.useRef(null),$n=A.useRef(null),wr=A.useRef(null),xr=A.useRef(null),kr=A.useRef(null),or=A.useRef(null),yt=A.useRef(null),ii=A.useRef(null),Cn=A.useRef(!1),dn=A.useRef(!1),Yn=A.useRef(!1),cr=A.useRef(""),Cr=A.useRef(null),ml=A.useRef(null),Dr=A.useRef(null),hl=A.useRef(null),Dn=A.useRef(null),fn=A.useRef(null),Ct=A.useRef(0),Or=A.useRef(null),pl=A.useRef(null),Ci=A.useRef(null),gl=A.useRef(null),Lr=A.useRef([]),Di=A.useRef([]),qt=A.useRef(null),Er=_v(),Ne=o==="control"&&!!a&&u(),ai=Ne?(a==null?void 0:a.deviceID)??"ble":null,_l=Math.max(1,ee.split(`
`).length),Hs=new Blob([ee]).size,Ps=le==="pico"?"Picoen":"browseren",vl=A.useMemo(()=>[...new Set(Zl.map(m=>m.board))],[]),si=A.useMemo(()=>Zl.filter(m=>m.board===Tn),[Tn]),Br=Zl.find(m=>m.board===Tn&&m.version===rr)??si[0]??Zl[0],Oi=K||!!M||cl||on,gn=le==="pico",ja=gn?cl:on,On=gn&&cl&&w&&!Ne||!gn&&on&&!!Dr.current&&cn,Li=ir||ja&&!On,ur=On?"stdin":">>>",Bi=On?gn?"Input til kørende Pico-kode":"Input til kørende Browser-MicroPython":gn?"Pico MicroPython":"Browser-MicroPython",oi=A.useMemo(()=>{const m=new vv({onData:b=>{dn.current||!Cn.current||(cr.current=(cr.current+b).slice(-240),/(^|\r?\n)>>> ?$/.test(cr.current)&&wl())},onLine:b=>{if(dn.current)return;const k=b.trimEnd();if(Yn.current&&k.trim()){W("info",k);return}if(Cn.current&&Is(k)){wl();return}Cn.current&&k.trim()&&!Aa(k)&&!k.includes("raw REPL")&&W("info",k)},onLog:W,onDisconnect:()=>{E(!1),jn(!1),ar(!1),Cn.current=!1,Yn.current=!1,yl(),cr.current="",zr(),W("warning","USB-forbindelse lukket.")}});return Ri.current=m,m},[]);function W(m,b){V(k=>[...k.slice(-140),{level:m,text:b}])}function bl(m){V(b=>[...b.slice(-140),{level:"info",text:m,variant:"input"}])}function Is(m){return m.trim()===">>>"}function Aa(m){return m.trimStart().startsWith(">>> import builtins as _pkp_builtins; exec(")}function yl(){Cr.current!==null&&(window.clearTimeout(Cr.current),Cr.current=null)}function wl(){!Cn.current||Cr.current!==null||(Cr.current=window.setTimeout(()=>{Cr.current=null,Cn.current&&(jn(!1),Cn.current=!1,cr.current="",W("success","Pico-koden er færdig."),Xn())},0))}function Xn(){const m=bt.current;m&&ui(m,!1)}function xl(m,b=ee,k="error"){const O=Cv(m,b);V(z=>[...z.slice(-140),{level:k,text:O.simple,technical:O.technical}])}function at(m,b,k=le){ae(m),ye(k),N(b),nt(O=>({...O,[Xt(k,m)]:b})),kl()}function dr(m,b="pico"){ae(m),ye(b),N(""),ht(null),Nn({top:0,left:0}),kl()}function kl(){Lr.current=[],Di.current=[],qt.current=null}function Sr(){const m=$n.current;return{content:ee,selectionStart:(m==null?void 0:m.selectionStart)??ee.length,selectionEnd:(m==null?void 0:m.selectionEnd)??(m==null?void 0:m.selectionStart)??ee.length}}function Vs(m){const b=Lr.current,k=b.at(-1);(k==null?void 0:k.content)===m.content&&k.selectionStart===m.selectionStart&&k.selectionEnd===m.selectionEnd||(b.push(m),b.length>Pv&&b.shift(),Di.current=[])}function zi(m,b){let k=0;const O=Math.min(m.length,b.length);for(;k<O&&m[k]===b[k];)k+=1;let z=m.length,ne=b.length;for(;z>k&&ne>k&&m[z-1]===b[ne-1];)z-=1,ne-=1;const ge=m.slice(k,z),Ue=b.slice(k,ne),Ee=Ue&&!ge?"insert":ge&&!Ue?"delete":"replace",De=Ue.at(-1)??"";return{kind:Ee,boundaryAfter:Ee==="insert"&&/[\s.,:;()[\]{}'"`+\-*/%=<>!?]/.test(De)}}function Ui(m,b){if(b!=="typing")return qt.current=null,!0;const k=Date.now(),O=zi(ee,m),z=qt.current,ne=z!==null&&z.path===C&&z.source===le&&z.kind===O.kind&&z.kind!=="replace"&&!z.boundaryAfter&&k-z.at<=Iv;return qt.current={path:C,source:le,kind:O.kind,at:k,boundaryAfter:O.boundaryAfter},!ne}function Ra(m){N(m.content),nt(b=>({...b,[Xt(le,C)]:m.content})),Rn(""),ht(null),window.requestAnimationFrame(()=>{const b=$n.current;b&&(b.focus(),b.selectionStart=Math.min(m.selectionStart,m.content.length),b.selectionEnd=Math.min(m.selectionEnd,m.content.length))})}function tn(){const m=Lr.current.pop();return m?(qt.current=null,Di.current.push(Sr()),Ra(m),!0):!1}function Tr(){const m=Di.current.pop();return m?(qt.current=null,Lr.current.push(Sr()),Ra(m),!0):!1}function Ln(m,b=(ne=>(ne=$n.current)==null?void 0:ne.selectionStart)()??m.length,k=Sr(),O=b,z="programmatic"){k&&m!==ee&&Ui(m,z)&&Vs(k),N(m),nt(ge=>({...ge,[Xt(le,C)]:m})),Rn(""),hi(m,b),window.requestAnimationFrame(()=>{const ge=$n.current;ge&&(ge.selectionStart=Math.min(b,m.length),ge.selectionEnd=Math.min(O,m.length))})}function _n(m,b=le){nt(k=>{const O=Xt(b,m);if(!(O in k))return k;const z={...k};return delete z[O],z})}function Tc(){return An[C]===ee}function Dt(m,b){ue(k=>({...k,[m]:b}))}function qi(m,b){Dt(m,b),nt(k=>({...k,[Xt("pico",m)]:b})),le==="pico"&&C===m&&N(b)}function zr(){_e([]),oe([]),ue({}),nt({}),ht(null),ae(m=>{const b=dc(oc());if(b.find(z=>z.path===m))return m;const O=b[0];return ye("local"),N(O.content),kl(),O.path})}function wt(m){El(),H({value:100,label:m}),gl.current=window.setTimeout(()=>{gl.current=null,H(null)},900)}function El(){gl.current!==null&&(window.clearTimeout(gl.current),gl.current=null)}function Mc(){return X?d.jsxs("div",{className:"ide-task-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(X.value),children:[d.jsxs("div",{children:[d.jsx("span",{children:X.label}),d.jsxs("strong",{children:[Math.round(X.value),"%"]}),X.cancellable&&d.jsx("button",{className:"ide-task-cancel",type:"button",onClick:Nc,"aria-label":"Stop handling",title:"Stop",children:d.jsx(Kt,{name:"delete",size:18})})]}),d.jsx("b",{"aria-hidden":"true",children:d.jsx("i",{style:{width:`${Math.max(2,Math.min(100,X.value))}%`}})})]}):null}function Nc(){Dn.current&&ci("Stopper læsning...",!0,!0)}function ci(m="Stopper læsning...",b=!1,k=!1){var O;El(),pl.current=null,Ct.current+=1,(O=Dn.current)==null||O.abort(),Dn.current=null,Or.current=null,q(null),U(!1),H(b?{value:(X==null?void 0:X.value)??0,label:m,cancellable:!1}:null),k&&W("warning","Stopper BLE-læsning efter den aktuelle datapakke.")}function Ca(m){var b;if(!(Or.current===m||pl.current===m)){if(pl.current=m,fn.current){Ct.current+=1,(b=Dn.current)==null||b.abort(),Dn.current=null,Or.current=null,dr(m),q(m),U(!0),El(),H({value:2,label:`Skifter til ${ze(m)}...`,cancellable:!0});return}Fs()}}function Fs(){if(fn.current)return;const m=pl.current;if(!m)return;pl.current=null;const b=Ct.current+1;Ct.current=b;const k=new AbortController;Dn.current=k,Or.current=m,dr(m),q(m),U(!0),El(),H({value:12,label:`Indlæser ${ze(m)}...`,cancellable:!0});const O=(async()=>{try{const z=await p(m,(ne,ge)=>{Ct.current===b&&H({value:ne,label:ge,cancellable:!0})},k.signal);if(k.signal.aborted||Ct.current!==b)return;at(m,z,"pico"),Dt(m,z),wt("Fil indlæst")}catch(z){if(Ct.current!==b)return;Kv(z)||k.signal.aborted?W("info",`Stoppede læsning af ${ze(m)}.`):(H(null),W("error",z instanceof Error?z.message:"BLE læsning fejlede."))}})();fn.current=O,O.finally(()=>{if(fn.current!==O)return;fn.current=null,Dn.current===k&&(Dn.current=null),Or.current===m&&(Or.current=null),!!pl.current||(q(null),U(!1),k.signal.aborted&&H(null)),Fs()})}async function Hi(m){const b=dn.current;dn.current=!0;try{return await m()}finally{dn.current=b}}A.useEffect(()=>{if(!ul)return;const m=or.current;m&&(m.scrollTop=m.scrollHeight)},[$,ul]),A.useEffect(()=>{Q2({clearTerminalOnRun:sr,simplifiedErrors:vt})},[sr,vt]),A.useEffect(()=>{var m;si.some(b=>b.version===rr)||ol(((m=si[0])==null?void 0:m.version)??"")},[si,rr]),A.useEffect(()=>{Na(Eh(navigator))},[]),A.useEffect(()=>{const m=()=>{const b=Ri.current;yr.current=null,bt.current=null,Ri.current=null,b==null||b.disconnect().catch(()=>{})};return window.addEventListener("pagehide",m),()=>{var b,k;El(),(b=ml.current)==null||b.dispose(),ml.current=null,(k=Dr.current)==null||k.dispose(),Dr.current=null,window.removeEventListener("pagehide",m),m()}},[]),A.useEffect(()=>{const m=b=>{!(b.ctrlKey||b.metaKey)||b.key.toLowerCase()!=="s"||(b.preventDefault(),!K&&C.trim()&&!br&&!je&&!Me&&!ke&&Ks())};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[le,Ne,K,w,ee,C,br,je,Me,ke]);function Sl(m,b,k){Q(O=>{const z=Xd(O,m,b,k);return va(z),z})}function Gs(m,b){Q(k=>{const O=k.find(Ee=>Ee.path===m),ne=Ae[Xt("local",m)]??(O==null?void 0:O.content),ge=ne!==void 0&&Jl(ne)!==Jl(b)?Xd(k,ob(m,pc(k)),ne,!1):k,Ue=Xd(ge,m,b,!1);return va(Ue),Ue}),nt(k=>({...k,[Xt("local",m)]:b})),le==="local"&&C===m&&(N(b),Rn(""),ht(null),kl())}const Da=db(de,D,Ae,w||Ne);A.useEffect(()=>{if(!Ne)return;const m={cancelled:!1};return(async()=>{for(let b=0;b<6&&!m.cancelled;b+=1)try{const k=await h();if(m.cancelled)return;_e(k),W("success",`Indlæste ${k.length} filer fra Pico via Bluetooth.`);return}catch(k){if(m.cancelled)return;b===5?W("error",k instanceof Error?k.message:"BLE filhandling fejlede."):await vh(1500)}})(),()=>{m.cancelled=!0}},[a,Ne]),A.useEffect(()=>{const m=Ci.current;m&&m!==ai&&zr(),Ci.current=ai},[ai]);async function $s(){if(Er.supported){B(!0);try{await oi.requestAndConnect();const m=new Y_(oi);yr.current=m,bt.current=new J_(m),E(!0),an(0),await m.interrupt(),await jc(m),W("success","Sendte stop-signal til Pico-terminalen."),await ui(bt.current),await Xs(bt.current)}catch(m){W("error",m instanceof Error?m.message:"USB-forbindelse mislykkedes.");try{await oi.disconnect()}catch(b){W("error",b instanceof Error?`USB-porten kunne ikke lukkes: ${b.message}`:"USB-porten kunne ikke lukkes.");return}an(b=>{const k=b+1;return k>=3&&(W("info","USB-forbindelsen er mislykkedes flere gange. Hvis Picoen er i BOOTSEL eller mangler MicroPython, kan du bruge MicroPython-download."),qe(!0)),k}),E(!1)}finally{B(!1)}}}async function jc(m){const b=await m.exec(`import sys
print(sys.implementation.name)
`,4e3);if(b.error||!b.output.toLowerCase().includes("micropython"))throw new Error("MicroPython blev ikke fundet på Picoen.")}async function Ac(){var m;try{await((m=Ri.current)==null?void 0:m.disconnect()),yr.current=null,bt.current=null,E(!1),zr()}catch(b){W("error",b instanceof Error?`USB-porten kunne ikke lukkes: ${b.message}`:"USB-porten kunne ikke lukkes.")}}async function vn(m){const b=bt.current;if(b){U(!0),dn.current=!0;try{await m(b)}catch(k){H(null),W("error",k instanceof Error?k.message:"USB filhandling fejlede.")}finally{dn.current=!1,U(!1)}}}async function xt(m=!0){if(Ne){U(!0);try{const b=await h();_e(b),m&&W("success",`Indlæste ${b.length} filer fra Pico via Bluetooth.`)}catch(b){W("error",b instanceof Error?b.message:"BLE filhandling fejlede.")}finally{U(!1)}return}await ui(bt.current,m)}async function ui(m,b=!0){if(m){U(!0);try{const k=await Hi(()=>m.list("/"));_e(k),b&&W("success",`Indlæste ${k.length} filer fra Pico.`)}catch(k){W("error",k instanceof Error?k.message:"USB filhandling fejlede.")}finally{U(!1)}}}async function Ur(){if(Ne){U(!0),H({value:4,label:"Tjekker biblioteker på Pico via Bluetooth..."});try{const m=await Ys((b,k)=>H({value:b,label:k}));oe(m),wt("Fil-tjek færdigt")}catch(m){H(null),W("error",m instanceof Error?m.message:"BLE runtime check fejlede.")}finally{U(!1)}return}await Xs(bt.current)}async function Ys(m){const b=[],k=await yh(()=>h()).catch(()=>null),O=ya.filter(ne=>ne.kind==="library"&&!sl(ne));let z=0;for(const ne of ya){if(ne.kind==="program"){b.push({...ne,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}if(sl(ne)){b.push({...ne,status:"unknown",detail:"Opdateres via USB"});continue}try{const ge=z/Math.max(1,O.length)*100,Ue=100/Math.max(1,O.length);W("info",`Tjekker ${ne.label} på Pico via Bluetooth...`),m==null||m(Math.min(95,ge),`Tjekker ${ne.label} på Pico...`);const Ee=await p(ne.path,(lt,ut)=>{m==null||m(Math.min(95,ge+lt/100*Ue),`${ne.label}: ${ut}`)}),De=Jl(Ee)===Jl(ne.content);b.push({...ne,status:De?"ok":"outdated",detail:De?"Matcher appens version":"Kan installeres via Bluetooth"})}catch(ge){b.push(wh(ne,ge,k))}finally{z+=1}}return m==null||m(100,"Fil-tjek færdigt"),b}async function Xs(m){if(m){U(!0);try{const b=await Hi(()=>Oa(m)),k=b;oe(k)}catch(b){W("error",b instanceof Error?b.message:"Runtime check fejlede.")}finally{U(!1)}}}async function Oa(m){if(!m)return[];const b=[],k=await yh(()=>m.list("/")).catch(()=>null);for(const O of ya){if(O.kind==="program"){b.push({...O,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}try{const z=await m.readText(O.path),ne=Jl(z)===Jl(O.content);b.push({...O,status:ne?"ok":"outdated",detail:ne?"Matcher appens version":"Matcher ikke appens version"})}catch(z){b.push(wh(O,z,k))}}return b}async function Rc(m=C){if(Ne){Ca(m);return}q(m),await vn(async b=>{H({value:12,label:`Indlæser ${ze(m)}...`});const k=await Cc(b,m);at(m,k,"pico"),Dt(m,k),wt("Fil indlæst")}),q(null)}async function Cc(m,b){var k;try{return await m.readText(b)}catch(O){await((k=yr.current)==null?void 0:k.stop().catch(()=>{})),await vh(120);try{return await m.readText(b)}catch{throw O}}}function Dc(){it(!0)}async function Ks(){if(le==="pico"){if(!w&&!Ne){W("error","Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.");return}await La();return}Qs()}function Qs(){if(ri(C)){W("error",Ns);return}Sl(C,ee,!1),ye("local"),nt(m=>({...m,[Xt("local",C)]:ee})),it(!1),W("success",`Gemte ${ze(C)} lokalt.`)}async function La(){if(it(!1),ri(C))return H(null),W("error",Ns),!1;if(H({value:0,label:"Starter gemning..."}),Ne){U(!0);try{return await f(C,ee,(b,k)=>H({value:b,label:k})),Dt(C,ee),ye("pico"),nt(b=>({...b,[Xt("pico",C)]:ee})),wt("Gemt på Pico via Bluetooth"),W("success",`Gemte ${ze(C)} på Pico via Bluetooth.`),uc(C)&&(sn("saved"),W("warning","main.py er gemt. Genstart Picoen for at køre den nye version.")),await xt(!1),!0}catch(b){return H(null),W("error",b instanceof Error?b.message:"BLE gem fejlede."),!1}finally{U(!1)}}if(!bt.current)return H(null),!1;let m=!1;return await vn(async b=>{qr(C,"pico")?await b.replaceTextSafely(C,ee,(k,O)=>H({value:k,label:O})):await b.writeText(C,ee,(k,O)=>H({value:k,label:O})),Dt(C,ee),ye("pico"),nt(k=>({...k,[Xt("pico",C)]:ee})),wt("Gemt på Pico via USB"),W("success",`Gemte ${C}.`),await xt(),await Ur(),m=!0}),m}function Oc(){Ws(ze(C),ee),it(!1),W("success",`Downloadede ${ze(C)}.`)}function Ws(m,b){const k=new Blob([b],{type:"text/plain;charset=utf-8"}),O=URL.createObjectURL(k),z=document.createElement("a");z.href=O,z.download=m,z.click(),URL.revokeObjectURL(O)}async function Zs(m){U(!0),m==="ide"&&Y(!0),sn(null),H({value:10,label:"Genstarter Pico..."});try{await v(m)?(wt("Pico genforbundet"),W("success",m==="control"?"Pico genforbundet. Åbner kontrolpanelet.":"Pico genforbundet til Kodeværkstedet.")):(H(null),W("warning","Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet."))}catch(b){H(null),W("error",b instanceof Error?b.message:"Genstart/genforbindelse mislykkedes.")}finally{U(!1),Y(!1)}}function Pi(m){var ne,ge;const b=m??{path:C,source:le},k=b.source==="pico"?"Pico":"browser",O=(m==null?void 0:m.versions.length)??(b.source==="pico"?((ne=wa(de).get(b.path))==null?void 0:ne.length)??0:((ge=wa(pc(D)).get(b.path))==null?void 0:ge.length)??0),z=O>0?` Det sletter også filens versionshistorik (${O} gemte versioner).`:"";gt(null),l({title:"Slet fil",message:`Vil du slette ${ze(b.path)} fra ${k}?${z}`,confirmLabel:"Slet",onConfirm:()=>{Js(b)}})}function di(){l({title:"Nulstil enhed",message:"Vil du nulstille Picoens enhedsindstillinger? Det sletter DeviceSettings.txt, så Picoen kan oprettes som en ny enhed igen. Kodefiler og startprogram bliver ikke slettet.",confirmLabel:"Nulstil",onConfirm:()=>{Lc()}})}async function Lc(){if(!bt.current){W("error","Forbind Picoen med USB først.");return}await vn(async m=>{await m.delete("/DeviceSettings.txt").catch(b=>{const k=b instanceof Error?b.message:"";if(!/ENOENT|No such file|not found/i.test(k))throw b}),ue(b=>{const k={...b};return delete k["/DeviceSettings.txt"],k}),_n("/DeviceSettings.txt","pico"),W("success","DeviceSettings.txt er nulstillet. Afbryd og forbind Picoen igen, hvis kontrolpanelet allerede var åbent."),await xt()})}function Ba(m,b,k){const O=Da.filter(ge=>ge.kind==="file"&&ge.type==="file"),z=O.findIndex(ge=>ge.path===m&&ge.source===b);if(z===-1)return null;const ne=ge=>!!ge&&!(ge.path===m&&ge.source===b)&&!(ge.source===b&&k.has(ge.path))&&!(Ne&&sl(ge));for(const ge of[!0,!1])for(let Ue=1;Ue<O.length;Ue+=1){const Ee=O[z+Ue];if(ne(Ee)&&(!ge||Ee.source===b))return Ee;const De=O[z-Ue];if(ne(De)&&(!ge||De.source===b))return De}return null}function Ii(m){if(m){za(m);return}const b=dc(oc())[0];at(b.path,Ae[Xt("local",b.path)]??b.content,"local")}async function Js(m){const b=m.path,k=m.source,O=b===C&&k===le;if(k==="local"){const Ee=wa(pc(D)).get(b)??[],De=new Set([b,...Ee.map(_t=>_t.path)]),lt=O?Ba(b,k,De):null,ut=D.filter(_t=>!De.has(_t.path));Q(ut),va(ut);for(const _t of De)_n(_t,"local");O&&Ii(lt);const He=Ee.length>0?` og ${Ee.length} gemte versioner`:"";W("warning",`Slettede ${ze(b)}${He} fra browseren.`);return}const z=wa(de).get(b)??[],ne=[b,...z.map(Ee=>Ee.path)],ge=O?Ba(b,k,new Set(ne)):null;if(Ne){U(!0);try{for(const De of ne)await g(De);ue(De=>{const lt={...De};for(const ut of ne)delete lt[ut];return lt});for(const De of ne)_n(De,"pico");const Ee=z.length>0?` og ${z.length} gemte versioner`:"";W("warning",`Slettede ${ze(b)}${Ee} på Pico via Bluetooth.`),await xt(),O&&Ii(ge)}catch(Ee){W("error",Ee instanceof Error?Ee.message:"BLE sletning fejlede.")}finally{U(!1)}return}if(!bt.current){W("error","Ingen Pico-forbindelse. Kan ikke slette Pico-filen.");return}let Ue=!1;await vn(async Ee=>{for(const lt of ne)await Ee.delete(lt);ue(lt=>{const ut={...lt};for(const He of ne)delete ut[He];return ut});const De=z.length>0?` og ${z.length} gemte versioner`:"";W("warning",`Slettede ${b}${De}.`);for(const lt of ne)_n(lt,"pico");await xt(),await Ur(),Ue=!0}),Ue&&O&&Ii(ge)}async function eo(m){if(!m)return;const b=Fv(m.name);if(!b){W("error","Kun .py, .txt, .json og .csv kan importeres.");return}if(ri(b)){W("error",Ns);return}if(m.size>128*1024){W("error","Filen er for stor til Pico-værkstedet.");return}const k=await m.text();if(le==="local"){Sl(b,k,!0),at(b,k,"local"),W("success",`Importerede ${ze(b)} i browseren.`);return}if(!w&&!Ne){W("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(Ne&&sl({path:b})){W("error","PicoBluetooth.py kan ikke importeres over Bluetooth, mens den holder forbindelsen i gang. Brug USB i stedet.");return}if(H({value:0,label:"Uploader fil til Pico..."}),Ne){U(!0);try{await f(b,k,(z,ne)=>H({value:z,label:ne})),Dt(b,k),at(b,k,"pico"),wt("Fil uploadet til Pico"),W("success",`Importerede ${ze(b)} på Pico via Bluetooth.`),await xt()}catch(z){H(null),W("error",z instanceof Error?z.message:"Kunne ikke importere filen til Pico.")}finally{U(!1)}return}if(!bt.current){H(null),W("error","Ingen Pico-forbindelse. Kan ikke importere filen til Pico.");return}await vn(async z=>{qr(b,"pico")?await z.replaceTextSafely(b,k,(ne,ge)=>H({value:ne,label:ge})):await z.writeText(b,k,(ne,ge)=>H({value:ne,label:ge})),Dt(b,k),at(b,k,"pico"),wt("Fil uploadet til Pico"),W("success",`Importerede ${ze(b)} på Pico.`),await xt(),await Ur()})}async function to(){J(""),fe(""),ve(!0)}function Tl(){const m=bh(T,se);if(!m)return;if(ri(m)){W("error",Ns);return}const b=le;if(qr(m,b)){W("error",`Der findes allerede en fil med navnet ${ze(m)} i ${b==="pico"?"Pico":"browseren"}.`);return}if(b==="local"){Sl(m,"",!1),at(m,"","local"),ve(!1),W("success",`Oprettede ${ze(m)} i browseren.`);return}Bc(m)}async function Bc(m){if(!w&&!Ne){W("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(ve(!1),H({value:0,label:"Opretter fil på Pico..."}),Ne){U(!0);try{await f(m,"",(b,k)=>H({value:b,label:k})),Dt(m,""),at(m,"","pico"),wt("Fil oprettet på Pico"),W("success",`Oprettede ${ze(m)} på Pico via Bluetooth.`),await xt()}catch(b){H(null),W("error",b instanceof Error?b.message:"Kunne ikke oprette fil på Pico.")}finally{U(!1)}return}if(!bt.current){H(null),W("error","Ingen Pico-forbindelse. Kan ikke oprette Pico-filen.");return}await vn(async b=>{await b.writeText(m,"",(k,O)=>H({value:k,label:O})),Dt(m,""),at(m,"","pico"),wt("Fil oprettet på Pico"),W("success",`Oprettede ${ze(m)} på Pico.`),await xt()})}function zc(m){m.type==="file"&&(gt(m),we(Gv(m.path)),tt($v(m.path)))}async function Uc(m){if(!Me)return;const b=Me.path;if(gt(null),Me.source==="local"){const k=D.find(O=>O.path===m.path);if(!k){W("error","Kunne ikke finde versionen i browseren.");return}Gs(b,k.content),at(b,k.content,"local"),W("success",`Gendannede ${ze(m.path)} i browseren.`);return}if(H({value:0,label:"Gendanner version..."}),Ne){U(!0);try{const k=await p(m.path);await f(b,k,(O,z)=>H({value:O,label:z})),Dt(b,k),at(b,k,"pico"),wt("Version gendannet"),await xt(!1)}catch(k){H(null),W("error",k instanceof Error?k.message:"Kunne ikke gendanne versionen.")}finally{U(!1)}return}bt.current&&await vn(async k=>{await k.replaceTextSafely(b,await k.readText(m.path),(z,ne)=>H({value:z,label:ne}));const O=await k.readText(b);Dt(b,O),at(b,O,"pico"),wt("Version gendannet"),await xt()})}function no(m){const b=(Me==null?void 0:Me.source)==="local"?"browseren":"Pico";l({title:"Slet version",message:`Vil du slette ${ze(m.path)} fra ${b}?`,confirmLabel:"Slet",onConfirm:()=>{ro(m)}})}async function ro(m){if((Me==null?void 0:Me.source)==="local"){const b=D.filter(k=>k.path!==m.path);Q(b),va(b),_n(m.path,"local"),gt(k=>k&&{...k,versions:k.versions.filter(O=>O.path!==m.path)}),W("warning",`Slettede ${ze(m.path)} fra browserens versionshistorik.`);return}if(Ne){U(!0);try{await g(m.path),await xt(!1),gt(b=>b&&{...b,versions:b.versions.filter(k=>k.path!==m.path)})}catch(b){W("error",b instanceof Error?b.message:"Kunne ikke slette versionen.")}finally{U(!1)}return}bt.current&&await vn(async b=>{await b.delete(m.path),await xt(!1),gt(k=>k&&{...k,versions:k.versions.filter(O=>O.path!==m.path)})})}async function fi(){var k;if(!Me)return;const m=Me,b=cb(m.path,O=>qr(O,m.source));if(!b){W("error",`Kunne ikke finde et ledigt filnavn til en kopi af ${ze(m.path)}.`);return}if(m.source==="local"){const O=Ae[Xt("local",m.path)]??((k=D.find(z=>z.path===m.path))==null?void 0:k.content)??"";Sl(b,O,!1),at(b,O,"local"),gt(null),W("success",`Duplikerede ${ze(m.path)} til ${ze(b)} i browseren.`);return}if(gt(null),H({value:0,label:"Duplikerer fil..."}),Ne){U(!0);try{const O=An[m.path]??await p(m.path);await f(b,O,(z,ne)=>H({value:z,label:ne})),Dt(b,O),at(b,O,"pico"),wt("Fil duplikeret"),await xt(!1),W("success",`Duplikerede ${ze(m.path)} til ${ze(b)} på Pico via Bluetooth.`)}catch(O){H(null),W("error",O instanceof Error?O.message:"Kunne ikke duplikere filen.")}finally{U(!1)}return}if(!bt.current){H(null),W("error","Ingen Pico-forbindelse. Kan ikke duplikere Pico-filen.");return}await vn(async O=>{const z=await O.readText(m.path);await O.writeText(b,z,(ne,ge)=>H({value:ne,label:ge})),Dt(b,z),at(b,z,"pico"),wt("Fil duplikeret"),await xt(!1),W("success",`Duplikerede ${ze(m.path)} til ${ze(b)} på Pico.`)})}function Ml(m){Q(b=>{const k=b.filter(O=>O.path!==m);return va(k),k}),_n(m,"local")}async function qc(){var ge;if(!Me)return;const m=Me,b=m.path,k=m.source,O=k==="pico"?"local":"pico",z=O==="pico"?"Pico":"browseren";if(qr(b,O)){W("error",`Der findes allerede en fil med navnet ${ze(b)} i ${z}.`);return}if(Ne&&sl({path:b})){W("error","PicoBluetooth.py holder Bluetooth-forbindelsen i gang og kan ikke flyttes over Bluetooth.");return}if(O==="pico"&&!w&&!Ne){W("error","Ingen Pico-forbindelse. Kan ikke flytte filen til Pico.");return}const ne=C===b&&le===k;if(gt(null),H({value:0,label:`Flytter fil til ${z}...`}),k==="local"){const Ue=Ae[Xt("local",b)]??((ge=D.find(Ee=>Ee.path===b))==null?void 0:ge.content)??"";if(Ne){U(!0);try{await f(b,Ue,(Ee,De)=>H({value:Ee,label:De})),Dt(b,Ue),Ml(b),ne&&at(b,Ue,"pico"),wt("Fil flyttet til Pico"),W("success",`Flyttede ${ze(b)} fra browseren til Pico via Bluetooth.`),await xt()}catch(Ee){H(null),W("error",Ee instanceof Error?Ee.message:"Kunne ikke flytte filen til Pico.")}finally{U(!1)}return}if(!bt.current){H(null),W("error","Ingen Pico-forbindelse. Kan ikke flytte filen til Pico.");return}await vn(async Ee=>{await Ee.writeText(b,Ue,(De,lt)=>H({value:De,label:lt})),Dt(b,Ue),Ml(b),ne&&at(b,Ue,"pico"),wt("Fil flyttet til Pico"),W("success",`Flyttede ${ze(b)} fra browseren til Pico.`),await xt(),await Ur()});return}if(Ne){U(!0);try{const Ue=An[b]??await p(b);Sl(b,Ue,!1),await g(b),ue(Ee=>{const De={...Ee};return delete De[b],De}),_n(b,"pico"),ne&&at(b,Ue,"local"),wt("Fil flyttet til browseren"),W("success",`Flyttede ${ze(b)} fra Pico til browseren via Bluetooth.`),await xt()}catch(Ue){H(null),W("error",Ue instanceof Error?Ue.message:"Kunne ikke flytte filen til browseren.")}finally{U(!1)}return}if(!bt.current){H(null),W("error","Ingen Pico-forbindelse. Kan ikke flytte Pico-filen.");return}await vn(async Ue=>{const Ee=await Ue.readText(b);Sl(b,Ee,!1),await Ue.delete(b),ue(De=>{const lt={...De};return delete lt[b],lt}),_n(b,"pico"),ne&&at(b,Ee,"local"),wt("Fil flyttet til browseren"),W("success",`Flyttede ${ze(b)} fra Pico til browseren.`),await xt(),await Ur()})}async function Vi(){if(!Me)return;const m=Me,b=Yd(Se,Ce);if(!b||b===m.path)return;if(ri(b)){W("error",Ns);return}if(qr(b,m.source)){W("error",`Der findes allerede en fil med navnet ${ze(b)}.`);return}const k=m.source==="local",O=m.source==="pico";if(Ne&&O&&(uc(m.path)||uc(b))){W("error","main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.");return}U(!0);try{if(O)if(Ne){const z=An[m.path]??await p(m.path);await f(b,z,(ne,ge)=>H({value:ne,label:ge})),await g(m.path),ue(ne=>({...Ah(ne,m.path,b),[b]:z}))}else bt.current&&(await Hi(()=>bt.current.rename(m.path,b)),ue(z=>Ah(z,m.path,b)));k&&Q(z=>{const ne=z.map(ge=>ge.path===m.path?{...ge,path:b,updatedAt:Date.now()}:ge);return va(ne),ne}),C===m.path&&le===m.source&&ae(b),nt(z=>hb(z,m.source,m.path,b)),gt(null),we(""),tt(""),W("success",`Omdøbte ${ze(m.path)} til ${ze(b)}.`),O&&await xt()}catch(z){W("error",z instanceof Error?z.message:"Kunne ikke omdøbe filen.")}finally{H(null),U(!1)}}function qr(m,b){return b==="pico"?de.some(k=>k.path===m):D.some(k=>k.path===m)}function za(m){if(m.type!=="file"){Ne&&ci(void 0,!1),ae(m.path),ye(m.source);return}if(Ne&&sl(m)){W("warning","PicoBluetooth.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.");return}if(m.source==="local"){Ne&&ci(void 0,!1);const k=D.find(O=>O.path===m.path);at(m.path,Ae[Xt("local",m.path)]??(k==null?void 0:k.content)??"","local");return}const b=Xt("pico",m.path);if(Object.prototype.hasOwnProperty.call(Ae,b)){Ne&&ci(void 0,!1),at(m.path,Ae[b],"pico");return}if(Object.prototype.hasOwnProperty.call(An,m.path)){Ne&&ci(void 0,!1),at(m.path,An[m.path],"pico");return}Rc(m.path)}async function Fi(){if(!w&&!Ne){const m=xh();oe(m),Fe(kh(m)),Le(!0),H(null);return}U(!0),H({value:4,label:Ne?"Tjekker biblioteker på Pico via Bluetooth...":"Tjekker biblioteker på Pico..."}),W("info",Ne?"Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...":"Tjekker om Picoens biblioteker er opdaterede før installation...");try{const m=P.length>0?P:Ne?await Ys((b,k)=>H({value:b,label:k})):await Hi(()=>Oa(bt.current));oe(m),Fe(kh(m)),Le(!0),H(null)}catch(m){H(null),W("error",m instanceof Error?m.message:"Fil-tjek før installation fejlede.")}finally{U(!1)}}async function Ua(){if(Le(!1),Ne){U(!0);try{const b=(P.length>0?P:ya.map(O=>({...O,status:"unknown",detail:"Ikke tjekket"}))).filter(O=>Ve[O.id]&&!sl(O));if(b.length===0){W("info","Ingen filer valgt til installation.");return}let k=null;H({value:0,label:"Starter installation..."});for(const[O,z]of b.entries()){W("info",`Installerer ${z.label} via Bluetooth...`);const ne=O/b.length*100,ge=100/b.length;await f(z.path,z.content,(Ue,Ee)=>{H({value:Math.min(99,ne+Ue/100*ge),label:`${z.label}: ${Ee}`})}),qi(z.path,z.content),W("success",`Installerede ${z.label}.`),z.kind==="library"&&(k=z),uc(z.path)&&sn("saved")}wt("Installation færdig"),await xt(!1),await Ur(),k&&ao(k)}catch(m){H(null),W("error",m instanceof Error?m.message:"BLE installation fejlede.")}finally{U(!1)}return}await vn(async m=>{const k=(P.length>0?P:ya.map(z=>({...z,status:"unknown",detail:"Ikke tjekket"}))).filter(z=>Ve[z.id]);if(k.length===0){W("info","Ingen filer valgt til installation.");return}let O=null;H({value:0,label:"Starter installation..."});for(const[z,ne]of k.entries()){W("info",`Installerer ${ne.label}...`);const ge=z/k.length*100,Ue=100/k.length,Ee=await m.readText(ne.path).catch(()=>null);Ee!==null&&Jl(Ee)===Jl(ne.content)?(H({value:Math.min(99,ge+Ue),label:`${ne.label}: Allerede nyeste version`}),W("info",`${ne.label} findes allerede i samme version.`)):(await m.replaceTextSafely(ne.path,ne.content,(De,lt)=>{H({value:Math.min(99,ge+De/100*Ue),label:`${ne.label}: ${lt}`})},{createBackup:!0}),W("success",`Installerede ${ne.label}.`)),qi(ne.path,ne.content),ne.kind==="library"&&(O=ne)}wt("Installation færdig"),await xt(!1),await Ur(),O&&ao(O)})}function qa(){return(P.length>0?P:xh()).filter(b=>Ve[b.id])}function lo(){const m=qa();if(m.length===0){W("info","Ingen filer valgt.");return}for(const b of m)Gs(b.path,b.content);Le(!1),W("success",`Gemte ${m.length} filer i browseren.`)}function io(){const m=qa();if(m.length===0){W("info","Ingen filer valgt.");return}m.forEach((b,k)=>{window.setTimeout(()=>{Ws(ze(b.path),b.content)},k*120)}),Le(!1),W("success",`Starter download af ${m.length} filer.`)}function ao(m){at(m.path,m.content,"pico"),Dt(m.path,m.content),W("info",`Åbnede ${m.label} i editoren.`)}function Hc(m,b){Fe(k=>{if(m.kind!=="program")return{...k,[m.id]:b};const O={...k};for(const z of P)z.kind==="program"&&(O[z.id]=!1);return O[m.id]=b,O})}async function Pc(){if(Fc(),Ne&&le==="pico"){W("warning","Bluetooth holder forbindelsen åben, så koden kan ikke køres direkte her. Gem filen, og genstart Picoen for at køre den.");return}if(le==="local"){await Ic();return}const m=yr.current;if(!m){W("error",`${ze(C)} er gemt på Picoen, men der er ingen USB-forbindelse til Pico-terminalen.`);return}if(C.endsWith(".py")){if(!Tc()&&(W("info",`${ze(C)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`),!await La())){W("error","Pico-forbindelsen blev afbrudt under gemning.");return}if(K)return;yl(),cr.current="",Ft(!0);try{await m.runFile(C,()=>{yl(),cr.current="",Yn.current=!1,jn(!0),Cn.current=!0}),W("success",`Kører ${ze(C)}. Brug Stop for at afbryde.`)}catch(b){jn(!1),Cn.current=!1,yl(),cr.current="",W("error",b instanceof Error?b.message:"Kunne ikke starte koden.")}return}U(!0);try{const b=await m.exec(ee,2e4);b.output.trim()&&W("info",b.output),b.error.trim()&&xl(b.error,ee),!b.output.trim()&&!b.error.trim()&&W("success","Koden kørte uden output.")}catch(b){W("error",b instanceof Error?b.message:"Kunne ikke køre koden.")}finally{U(!1)}}async function Ic(){const m=ef(ee,{allowInput:!0});if(m.some(O=>O.level==="error")){for(const O of m){const z=O.line?`Linje ${O.line}: `:"";W(O.level==="error"?"error":"warning",`${z}${O.text}`)}return}/\binput\s*\(/.test(ee)&&!ap()&&W("warning","input() i browseren kræver at siden genindlæses. Opdater siden (F5) og prøv igen.");const b=new AbortController;hl.current=b;const k=new Sv;Dr.current=k,U(!0),Vt(!0),ct(!1),Ft(!0),W("info",w?"Starter Browser-MicroPython for browser-filen.":"Starter Browser-MicroPython. Forbind Pico med USB for at køre på selve Picoen.");try{const O=[],z=await k.run(ee,{timeoutMs:null,signal:b.signal,onOutput:Ee=>{O.push(Ee),W("info",Ee)},onWaitingForInput:ct});for(const Ee of z.issues){const De=Ee.line?`Linje ${Ee.line}: `:"";W(Ee.level==="error"?"error":"warning",`${De}${Ee.text}`)}const ne=[...O,z.output].filter(Boolean).join(`
`).trim(),ge=z.output.trim();!z.error.trim()&&Qv(ne)?xl(ne,ee):(ge&&W("info",ge),z.error.trim()&&xl(z.error,ee,z.unavailable?"warning":"error")),z.ok&&!ne&&!z.error.trim()&&W("success","Browser-MicroPython kørte uden output.")}finally{hl.current=null,Dr.current=null,k.dispose(),Vt(!1),ct(!1),U(!1)}}async function Vc(){var b,k,O;if(on){(b=hl.current)==null||b.abort(),(k=Dr.current)==null||k.stop(),W("warning","Stoppede Browser-MicroPython."),Ft(!0);return}if(!gn&&ir){(O=ml.current)==null||O.reset(),ar(!1),W("warning","Stoppede Browser-MicroPython-terminalen. Variablerne i browser-terminalen blev nulstillet."),Ft(!0);return}const m=yr.current;if(m)try{await m.stop(),W("warning","Stoppede koden på Pico.")}catch(z){W("error",z instanceof Error?z.message:"Kunne ikke stoppe koden.")}finally{jn(!1),Cn.current=!1,yl(),cr.current="",Ft(!0),Xn()}}function mn(){const m=or.current;if(!m)return;const b=m.scrollHeight-m.scrollTop-m.clientHeight<12;Ft(b)}function mi(){V([]),Ft(!0)}function so(){window.requestAnimationFrame(()=>{const m=or.current;m&&(m.scrollTop=m.scrollHeight)})}async function Gi(){const m=On?Gt:Gt.trimEnd();if(On){if(!gn){const O=Dr.current;if(!O){W("warning","Browser-MicroPython kører ikke lige nu."),Bn();return}$t(""),Ft(!0),bl(m),O.sendInput(m),Bn();return}const k=yr.current;if(!k){W("warning","Pico-terminalen er ikke forbundet."),Bn();return}$t(""),Ft(!0);try{await k.sendProgramInput(m)}catch(O){W("error",O instanceof Error?O.message:"Kunne ikke sende input til Pico-koden.")}finally{Bn()}return}if(!m.trim())return;if(dl(k=>(k.at(-1)===m?k:[...k,m]).slice(-80)),pn(null),St(null),ja){W("warning",gn?"Tryk Stop, før du skriver i Pico-terminalen.":"Stop offline MicroPython, før du skriver i browser-terminalen."),Bn();return}if(!gn){const k=ef(m);if(k.some(z=>z.level==="error")){for(const z of k){const ne=z.line?"Linje "+z.line+": ":"";W(z.level==="error"?"error":"warning",ne+z.text)}Bn();return}const O=ml.current??new Ev;ml.current=O,$t(""),ar(!0),Ft(!0),W("info",">>> "+m);try{let z=!1;const ne=await O.send(m,{timeoutMs:15e3,onOutput:Ue=>{z=!0,W("info",Ue)}}),ge=ne.output.trim();ge&&!z&&W("info",ge),ne.error.trim()&&xl(ne.error,m,ne.unavailable?"warning":"error")}catch(z){W("error",z instanceof Error?z.message:"Browser-MicroPython-terminalen fejlede.")}finally{ar(!1),Bn()}return}if(Ne){W("warning","Terminalen bruger USB Serial. Bluetooth-forbindelsen kan vise filer, men kan ikke modtage frie terminalkommandoer."),Bn();return}const b=yr.current;if(!w||!b){W("warning","Forbind en microcontroller med USB for at skrive i MicroPython-terminalen."),Bn();return}$t(""),ar(!0),Ft(!0),Yn.current=!0,W("info",">>> "+m);try{await b.sendFriendlyLine(m)}catch(k){Yn.current=!1,W("error",k instanceof Error?k.message:"Kunne ikke sende kommando til MicroPython REPL.")}finally{ar(!1),Bn()}}function Bn(){window.requestAnimationFrame(()=>{const m=yt.current;if(!m||m.disabled)return;m.focus();const b=m.value.length;m.selectionStart=b,m.selectionEnd=b})}function Ha(m,b,k){if(k.length===0)return null;const O=w||Ne;return d.jsxs("div",{className:"ide-install-group",children:[d.jsxs("div",{className:"ide-install-group-head",children:[d.jsx("h3",{children:m}),d.jsx("p",{children:b})]}),d.jsx("div",{className:"ide-install-scroll",children:k.map(z=>{const ne=Ne&&sl(z);return d.jsxs("label",{className:`ide-install-row ${ne?"disabled":""}`,children:[d.jsx("input",{type:"checkbox",checked:!!Ve[z.id],disabled:ne,onChange:ge=>Hc(z,ge.target.checked)}),d.jsxs("span",{children:[d.jsxs("strong",{children:[Pa(z),O&&z.kind==="library"&&d.jsx("em",{className:`ide-install-status status-${z.status}`,children:ne?"USB":ub(z.status)})]}),d.jsx("small",{children:z.description})]})]},z.id)})})]})}function Pa(m){return m.kind==="program"?m.label.replace(/\s*\(main\.py\)$/i,""):m.label}function Fc(){sr&&V([]),Ft(!0)}function Mr(m,b){const k=m.indexOf(`
`,b);return k===-1?m.length:k}function hi(m,b){if(Th(m,b)){ht(null);return}const k=af(m,b);if(!k||k.query.length<1){ht(null);return}const O=Sh(m,b,!0).slice(0,8),z=Mh($n.current,k.start,O.length);O.length>0&&z?(ht({items:O,selected:0,start:k.start,end:b,position:z}),Hr(kr.current,0)):ht(null)}function Nl(m,b){if(Th(m,b)){St(null);return}const k=af(m,b);if(!k||k.query.length<1){St(null);return}const O=Sh(m,b,!1).slice(0,8),z=Mh(yt.current,k.start,O.length);O.length>0&&z?(St({items:O,selected:0,start:k.start,end:b,position:z}),Hr(ii.current,0)):St(null)}function $i(m){const b=m.value.slice(m.selectionStart,m.selectionEnd);Rn(rb(b)?b:"")}function Hr(m,b){window.requestAnimationFrame(()=>{const k=m==null?void 0:m.querySelector(`[data-autocomplete-index="${b}"]`);k==null||k.scrollIntoView({block:"nearest"})})}function fr(m=$e==null?void 0:$e.items[$e.selected]){if(!m||!$e)return;const b=Sr(),k=ee.slice(0,$e.start)+m.insert+ee.slice($e.end),O=$e.start+m.insert.length-(m.insert.endsWith("()")?1:0);ht(null),Ln(k,O,b),window.requestAnimationFrame(()=>{const z=$n.current;z&&z.focus()})}function Pr(m=rt==null?void 0:rt.items[rt.selected]){if(!m||!rt)return;const b=Gt.slice(0,rt.start)+m.insert+Gt.slice(rt.end),k=rt.start+m.insert.length-(m.insert.endsWith("()")?1:0);$t(b),St(null),window.requestAnimationFrame(()=>{const O=yt.current;O&&(O.focus(),O.selectionStart=k,O.selectionEnd=k)})}function Ia(m){const b=$n.current;if(!b)return!1;const k=b.selectionStart,O=b.selectionEnd,z={content:ee,selectionStart:k,selectionEnd:O},ne=ee.lastIndexOf(`
`,k-1)+1,ge=O>k&&ee[O-1]===`
`?O-1:O,Ue=Mr(ee,ge),Ee=Ue<ee.length?Ue+1:Ue,De=ee.slice(ne,Ee);if(m<0){if(ne===0)return!1;const bn=ee.lastIndexOf(`
`,ne-2)+1,zn=ee.slice(bn,ne),yn=ee.slice(0,bn)+De+zn+ee.slice(Ee),Vr=-zn.length;return Ln(yn,k+Vr,z,O+Vr),!0}if(Ee>=ee.length)return!1;const lt=Mr(ee,Ee),ut=lt<ee.length?lt+1:lt,He=ee.slice(Ee,ut),_t=ee.slice(0,ne)+He+De+ee.slice(ut),Kn=He.length;return Ln(_t,k+Kn,z,O+Kn),!0}function oo(m){var ut;if(Oi){(m.key==="Enter"||m.key==="Tab"||(m.ctrlKey||m.metaKey)&&["z","y","s"].includes(m.key.toLowerCase()))&&m.preventDefault();return}if((m.ctrlKey||m.metaKey)&&m.key.toLowerCase()==="z"){m.preventDefault(),(m.shiftKey?Tr():tn())&&ht(null);return}if((m.ctrlKey||m.metaKey)&&m.key.toLowerCase()==="y"){m.preventDefault(),Tr()&&ht(null);return}if((m.ctrlKey||m.metaKey)&&m.key.toLowerCase()==="s"){m.preventDefault(),!K&&C.trim()&&Ks();return}if(m.altKey&&!m.ctrlKey&&!m.metaKey&&(m.key==="ArrowUp"||m.key==="ArrowDown")){m.preventDefault(),Ia(m.key==="ArrowUp"?-1:1)&&ht(null);return}if($e){if(m.key==="ArrowDown"){m.preventDefault(),ht(He=>{if(!He)return He;const _t=(He.selected+1)%He.items.length;return Hr(kr.current,_t),{...He,selected:_t}});return}if(m.key==="ArrowUp"){m.preventDefault(),ht(He=>{if(!He)return He;const _t=(He.selected-1+He.items.length)%He.items.length;return Hr(kr.current,_t),{...He,selected:_t}});return}if(m.key==="Tab"){m.preventDefault(),fr();return}if(m.key==="Enter"){if(!($e.items[$e.selected]&&dp($e.items[$e.selected],ee.slice($e.start,$e.end)))){m.preventDefault(),fr();return}ht(null)}if(m.key==="Escape"){m.preventDefault(),ht(null);return}}if(m.key==="Enter"){m.preventDefault();const He=m.currentTarget,_t=He.selectionStart,Kn=He.selectionEnd,bn={content:ee,selectionStart:_t,selectionEnd:Kn},zn=ee.lastIndexOf(`
`,_t-1)+1,yn=ee.slice(zn,_t),Vr=((ut=yn.match(/^[ \t]*/))==null?void 0:ut[0])??"",pi=yn.trimEnd().endsWith(":")?"    ":"",mr=`
${Vr}${pi}`,Va=ee.slice(0,_t)+mr+ee.slice(Kn),Ht=_t+mr.length;Ln(Va,Ht,bn),window.requestAnimationFrame(()=>{He.selectionStart=Ht,He.selectionEnd=Ht});return}if(m.key!=="Tab")return;m.preventDefault();const b=m.currentTarget,k=b.selectionStart,O=b.selectionEnd,z={content:ee,selectionStart:k,selectionEnd:O},ne="    ";if(m.shiftKey){const He=ee.lastIndexOf(`
`,k-1)+1,_t=k===O?Mr(ee,k):O,Kn=ee.slice(He,_t);let bn=0,zn=0;const yn=Kn.replace(/(^|\n)( {1,4}|\t)/g,(pi,mr,Va,Ht)=>{const Yi=Va.length;return He+Ht<k&&(bn+=Yi),zn+=Yi,mr});if(zn===0)return;const Vr=ee.slice(0,He)+yn+ee.slice(_t);Ln(Vr,Math.max(He,k-bn),z,k===O?Math.max(He,k-bn):Math.max(He,O-zn)),window.requestAnimationFrame(()=>{b.selectionStart=Math.max(He,k-bn),b.selectionEnd=k===O?b.selectionStart:Math.max(b.selectionStart,O-zn)});return}if(k===O){const He=ee.slice(0,k)+ne+ee.slice(O);Ln(He,k+ne.length,z),window.requestAnimationFrame(()=>{b.selectionStart=k+ne.length,b.selectionEnd=k+ne.length});return}const ge=ee.lastIndexOf(`
`,k-1)+1,Ee=ee.slice(ge,O).replace(/^/gm,ne),De=Ee.split(`
`).length,lt=ee.slice(0,ge)+Ee+ee.slice(O);Ln(lt,k+ne.length,z,O+De*ne.length),window.requestAnimationFrame(()=>{b.selectionStart=k+ne.length,b.selectionEnd=O+De*ne.length})}function Ir(m){if(On){m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),Gi());return}if(rt){if(m.key==="ArrowDown"){m.preventDefault(),St(b=>{if(!b)return b;const k=(b.selected+1)%b.items.length;return Hr(ii.current,k),{...b,selected:k}});return}if(m.key==="ArrowUp"){m.preventDefault(),St(b=>{if(!b)return b;const k=(b.selected-1+b.items.length)%b.items.length;return Hr(ii.current,k),{...b,selected:k}});return}if(m.key==="Enter"||m.key==="Tab"){m.preventDefault(),Pr();return}if(m.key==="Escape"){m.preventDefault(),St(null);return}}if(m.key==="Tab"){m.preventDefault();const b=m.currentTarget,k=b.selectionStart,O=b.selectionEnd,z="    ",ne=Gt.slice(0,k)+z+Gt.slice(O),ge=k+z.length;$t(ne),pn(null),St(null),window.requestAnimationFrame(()=>{b.selectionStart=ge,b.selectionEnd=ge});return}if(m.key==="ArrowUp"||m.key==="ArrowDown"){if(!(m.key==="ArrowUp"?m.currentTarget.selectionStart===0&&m.currentTarget.selectionEnd===0:m.currentTarget.selectionStart===Gt.length&&m.currentTarget.selectionEnd===Gt.length)||lr.length===0)return;m.preventDefault();const k=m.key==="ArrowUp"?un===null?lr.length-1:Math.max(0,un-1):un===null||un+1>=lr.length?null:un+1;pn(k);const O=k===null?"":lr[k]??"";$t(O),St(null),Ft(!0),window.requestAnimationFrame(()=>{const z=yt.current;z&&(z.selectionStart=O.length,z.selectionEnd=O.length,so())});return}m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),Gi())}return d.jsxs("div",{className:"screen ide-screen",children:[d.jsx(hf,{title:"Pico Kodeværksted",onMenu:()=>i()}),br?d.jsx("div",{className:"ide-size-gate",role:"dialog","aria-modal":"true","aria-labelledby":"ide-size-title",children:d.jsxs("div",{className:"ide-size-gate-panel",children:[d.jsx("h2",{id:"ide-size-title",children:"Brug en bærbar for at bruge Kodeværkstedet"}),d.jsx("p",{children:"Denne skærm er for lille, så du skal åbne Kodeværkstedet på en bærbar eller en større skærm."})]})}):d.jsxs("div",{className:"ide-layout",children:[d.jsxs("section",{className:"ide-panel ide-files-panel",children:[d.jsxs("div",{className:"ide-panel-head",children:[d.jsx("h2",{children:"Filer"}),d.jsxs("div",{className:"ide-mini-actions",children:[d.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:to,"aria-label":"Ny fil",title:"Ny fil",children:d.jsx(Kt,{name:"plus",size:20})}),d.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>{var m;return(m=fl.current)==null?void 0:m.click()},"aria-label":"Importer fil",title:"Importer fil",children:d.jsx(Kt,{name:"upload",size:20})}),d.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>xt(),disabled:!w&&!Ne||K,"aria-label":"Opdater filer",title:"Opdater filer",children:d.jsx(Kt,{name:"refresh",size:20})})]})]}),d.jsx("div",{className:"ide-file-list",children:Da.length===0?d.jsx("button",{type:"button",disabled:!0,children:"Ingen filer læst"}):Da.map(m=>{if(m.kind==="separator"){const z=m.id==="pico-files"&&!w&&!Ne;return d.jsxs(A.Fragment,{children:[d.jsx("div",{className:`ide-file-separator ${m.id==="browser-files"?"browser-section":""}`,children:d.jsx("span",{children:m.label})}),z&&d.jsx("div",{className:"ide-file-disconnected",role:"status",children:"Ikke forbundet"})]},m.id)}const b=Ne&&sl(m),k=Ae[Xt(m.source,m.path)],O=k!==void 0&&k!==sb(m,D,An);return d.jsxs("div",{className:`ide-file-row ${C===m.path&&le===m.source?"active":""} ${b?"protected":""}`,children:[d.jsxs("button",{type:"button",onClick:()=>za(m),disabled:b,title:b?"Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her":void 0,children:[d.jsx("span",{children:m.name}),d.jsxs("small",{title:O?"Ikke gemte ændringer":"Ingen ikke gemte ændringer",children:[m.versions.length>0&&d.jsx("em",{className:"ide-file-version-count",title:`${m.versions.length} gemte versioner i historikken`,children:m.versions.length}),d.jsx("i",{className:`ide-file-dirty-dot ${O?"dirty":"clean"}`,"aria-hidden":"true"})]})]}),d.jsx("button",{className:"ide-file-actions",type:"button",onClick:()=>zc(m),disabled:m.type!=="file"||K||b,"aria-label":`Filvalg for ${m.name}`,title:b?"Holder Bluetooth-forbindelsen i gang og kan ikke ændres her":"Filvalg",children:d.jsx(Kt,{name:"settings",size:16})})]},`${m.source}:${m.path}`)})})]}),d.jsxs("section",{className:"ide-panel ide-status-panel",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"ide-status-head",children:[d.jsx("h2",{children:Ne?"Forbundet Pico":"USB udvikling"}),!Ne&&d.jsx("span",{className:`ide-usb-status ${Er.supported?"available":"unavailable"}`,title:Er.message,"data-tooltip":Er.message,role:"img","aria-label":Er.message,tabIndex:0,children:"!"})]}),Ne&&d.jsxs("p",{children:[(a==null?void 0:a.deviceName)??"Pico"," er forbundet via Bluetooth."]})]}),!Ne&&d.jsxs("div",{className:"ide-actions",children:[d.jsx("button",{className:"btn btn-primary",type:"button",onClick:w?Ac:$s,disabled:!Er.supported||j,children:j?"Forbinder...":w?"Afbryd USB":"Forbind USB"}),d.jsx("button",{className:"btn btn-primary",type:"button",onClick:Fi,disabled:Ne||K,children:"Download"}),d.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:di,disabled:!w||K,children:"Nulstil enhed"})]}),Ne&&d.jsxs("div",{className:"ide-actions",children:[d.jsxs("button",{className:"btn btn-primary ide-connection-state",type:"button",disabled:!0,children:[d.jsx(Kt,{name:"power",size:22}),"Bluetooth forbundet"]}),d.jsx("button",{className:"btn btn-primary",type:"button",onClick:Fi,disabled:K,children:"Startprogrammer og biblioteker"})]}),!Ne&&d.jsx("div",{className:"ide-runtime",children:d.jsx("div",{className:"ide-mini-actions single",children:d.jsx("button",{className:"btn btn-outline ide-disconnect-btn",type:"button",onClick:()=>qe(!0),children:"MicroPython"})})})]}),d.jsxs("section",{className:"ide-panel ide-editor-panel",children:[d.jsxs("div",{className:"ide-panel-head",children:[d.jsx("div",{className:"ide-editor-title",children:d.jsxs("h2",{children:[ze(C),d.jsxs("small",{children:[Hs," bytes"]})]})}),d.jsxs("div",{className:"ide-mini-actions",children:[d.jsx("button",{className:"btn btn-outline",type:"button",onClick:Pc,disabled:K,children:"Kør"}),Ne&&le==="pico"?d.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>sn("manual"),disabled:K,children:"Genstart"}):d.jsx("button",{className:"btn btn-outline",type:"button",onClick:Vc,disabled:!on&&!(!gn&&ir)&&(!w||!cl),children:"Stop"}),d.jsx("button",{className:"btn btn-primary",type:"button",onClick:Dc,disabled:K||!C.trim(),children:"Gem"}),d.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Pi(),disabled:K||!C.trim(),children:"Slet"})]})]}),Mc(),d.jsxs("div",{className:"ide-editor-wrap",children:[d.jsx("div",{ref:xr,className:"ide-line-numbers","aria-hidden":"true",style:{transform:`translateY(${-Gn.top}px)`},children:Array.from({length:_l},(m,b)=>d.jsx("span",{children:b+1},b))}),d.jsx("pre",{ref:wr,className:"ide-highlight","aria-hidden":"true",style:{transform:`translate(${-Gn.left}px, ${-Gn.top}px)`},children:ab(ee,_r)}),d.jsx("textarea",{ref:$n,className:"ide-editor",value:ee,onChange:m=>Ln(m.target.value,m.target.selectionStart,Sr(),m.target.selectionEnd,"typing"),onKeyDown:oo,onKeyUp:m=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(m.key)||hi(m.currentTarget.value,m.currentTarget.selectionStart)},onClick:m=>{ht(null),$i(m.currentTarget)},onSelect:m=>$i(m.currentTarget),onScroll:m=>{const{scrollTop:b,scrollLeft:k}=m.currentTarget;xr.current&&(xr.current.style.transform=`translateY(${-b}px)`),wr.current&&(wr.current.style.transform=`translate(${-k}px, ${-b}px)`),Nn({top:b,left:k}),$e&&hi(m.currentTarget.value,m.currentTarget.selectionStart)},readOnly:Oi,"aria-busy":Oi,spellCheck:!1}),$e&&d.jsx("div",{ref:kr,className:`ide-autocomplete placement-${$e.position.placement}`,role:"listbox","aria-label":"Kodeforslag",style:{left:$e.position.left,top:$e.position.top,maxHeight:$e.position.maxHeight},children:($e.position.placement==="above"?$e.items.map((m,b)=>({item:m,index:b})).reverse():$e.items.map((m,b)=>({item:m,index:b}))).map(({item:m,index:b})=>d.jsx("button",{className:b===$e.selected?"active":"",type:"button","data-autocomplete-index":b,onMouseDown:k=>{k.preventDefault(),fr(m)},role:"option","aria-selected":b===$e.selected,children:m.label},m.label))}),M&&d.jsxs("div",{className:"ide-editor-loading",role:"status","aria-live":"polite",children:[d.jsx("span",{className:"spinner","aria-hidden":"true"}),d.jsxs("strong",{children:["Indlæser ",ze(M),"..."]})]})]})]}),d.jsxs("section",{className:"ide-panel ide-terminal-panel",children:[d.jsxs("div",{className:"ide-panel-head",children:[d.jsx("h2",{children:"Terminal"}),d.jsxs("div",{className:"ide-mini-actions",children:[d.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${vt?"":"active"}`,type:"button",onClick:()=>en(m=>!m),"aria-label":vt?"Tekniske fejl er slået fra":"Tekniske fejl er slået til","aria-pressed":!vt,title:vt?"Vis originale tekniske fejl":"Viser originale tekniske fejl",children:"Teknisk"}),d.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${sr?"active":""}`,type:"button",onClick:()=>vr(m=>!m),"aria-pressed":sr,title:sr?"Terminalen ryddes, hver gang du trykker Kør":"Terminalen beholder tekst, når du trykker Kør",children:"Ryd ved Kør"}),d.jsx("button",{className:"btn btn-outline",type:"button",onClick:mi,disabled:$.length===0,children:"Ryd"})]})]}),d.jsxs("div",{className:"ide-terminal","aria-live":"polite",ref:or,onScroll:mn,onClick:()=>{var m;return(m=yt.current)==null?void 0:m.focus()},children:[$.length===0?d.jsx("div",{className:"term-line",children:"Ingen terminaldata endnu."}):$.map((m,b)=>d.jsx("div",{className:`term-line ${m.variant==="input"?"term-input-echo":`term-${m.level}`}`,children:m.technical&&!vt?m.technical:m.text},`${b}-${m.text}`)),d.jsxs("form",{className:`ide-terminal-command ${ja&&!On?"locked":""} ${On?"stdin":""}`,onSubmit:m=>{m.preventDefault(),Gi()},children:[d.jsx("span",{"aria-hidden":"true",children:ur}),d.jsx("textarea",{ref:yt,value:Gt,onChange:m=>{$t(m.target.value),pn(null),On?St(null):Nl(m.target.value,m.target.selectionStart)},onKeyDown:Ir,onKeyUp:m=>{On||["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(m.key)||Nl(m.currentTarget.value,m.currentTarget.selectionStart)},onClick:()=>St(null),disabled:Li,placeholder:Bi,"aria-label":On?"Input til kørende Pico-kode":"MicroPython-terminalkommando",title:Bi,rows:Math.max(1,Gt.split(`
`).length)})]}),rt&&d.jsx("div",{ref:ii,className:`ide-autocomplete ide-repl-autocomplete placement-${rt.position.placement}`,role:"listbox","aria-label":"Terminalforslag",style:{left:rt.position.left,top:rt.position.top,maxHeight:rt.position.maxHeight},children:(rt.position.placement==="above"?rt.items.map((m,b)=>({item:m,index:b})).reverse():rt.items.map((m,b)=>({item:m,index:b}))).map(({item:m,index:b})=>d.jsx("button",{className:b===rt.selected?"active":"",type:"button","data-autocomplete-index":b,onMouseDown:k=>{k.preventDefault(),Pr(m)},role:"option","aria-selected":b===rt.selected,children:m.label},m.label))})]})]})]}),ce&&d.jsx("div",{className:"ide-restart-overlay",role:"alert","aria-live":"assertive",children:d.jsxs("div",{className:"ide-restart-overlay-panel",children:[d.jsx("div",{className:"spinner"}),d.jsx("p",{children:x.label||"Genstarter Pico..."})]})}),d.jsx("input",{ref:fl,type:"file",accept:".py,.txt,.json,.csv",className:"sr-only",onChange:m=>{var b;eo((b=m.target.files)==null?void 0:b[0]),m.currentTarget.value=""}}),je&&d.jsx(It,{title:"Gem fil",onClose:()=>it(!1),children:d.jsxs("div",{className:"ide-save-options",children:[d.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>void La(),disabled:!w&&!Ne||K,children:"Gem filen på Pico"}),d.jsx("button",{className:"btn btn-outline",type:"button",onClick:Oc,children:"Download filen til computer"}),d.jsx("button",{className:"btn btn-outline",type:"button",onClick:Qs,children:"Gem filen i browseren"})]})}),me&&d.jsx(It,{title:"Startprogrammer og biblioteker",onClose:()=>Le(!1),children:d.jsxs("div",{className:"ide-install-list",children:[d.jsx("p",{className:"ide-install-note",children:w||Ne?"Vælg et startprogram og de biblioteker dit projekt bruger. Installer lægger filerne på Picoen.":"Du er ikke forbundet til en Pico. Du kan gemme filerne i browseren eller downloade dem til computeren, men de virker først på Picoen, når de er installeret der."}),d.jsxs("div",{className:"ide-install-grid",children:[Ha("Startprogrammer (main.py)","Starter automatisk på Picoen.",P.filter(m=>m.kind==="program")),Ha("Biblioteker","Ekstra Python-filer som dine programmer kan importere.",P.filter(m=>m.kind==="library"))]}),d.jsxs("div",{className:"ide-install-actions",children:[(w||Ne)&&d.jsx("button",{className:"btn btn-primary",type:"button",onClick:Ua,disabled:K,children:"Installer på Pico"}),d.jsx("button",{className:"btn btn-outline",type:"button",onClick:io,disabled:K,children:"Download til computer"}),d.jsx("button",{className:w||Ne?"btn btn-outline":"btn btn-primary",type:"button",onClick:lo,disabled:K,children:"Gem i browseren"})]})]})}),Mn&&d.jsx(It,{title:Mn==="saved"?"main.py er gemt":"Genstart Pico",onClose:()=>sn(null),children:d.jsxs("div",{className:"settings-stack",children:[d.jsx("p",{className:"confirm-message",children:Mn==="saved"?"Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter.":"Picoen genstarter og kører main.py forfra. Appen forsøger automatisk at genforbinde bagefter."}),d.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>void Zs("control"),disabled:K,children:"Genstart og åbn kontrolpanel"}),d.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void Zs("ide"),disabled:K,children:"Genstart og bliv i Kodeværksted"}),d.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>sn(null),disabled:K,children:"Senere"})]})}),Be&&d.jsx(It,{title:"Installer MicroPython",onClose:()=>qe(!1),children:d.jsxs("div",{className:"settings-stack",children:[d.jsx("p",{className:"confirm-message",children:"Hvis Picoen er helt frisk, skal MicroPython først lægges på den."}),d.jsxs("ol",{className:"micropython-steps",children:[d.jsx("li",{children:"Hold BOOTSEL-knappen nede."}),d.jsx("li",{children:"Sæt Picoen i USB, og slip derefter BOOTSEL."}),d.jsx("li",{children:"Vælg Pico-model og MicroPython-version herunder, og download UF2-filen."}),d.jsxs("li",{children:["Kopier UF2-filen til drevet ",d.jsx("strong",{children:"RPI-RP2"})]})]}),d.jsxs("div",{className:"micropython-selects",children:[d.jsx("label",{htmlFor:"micropython-board",children:"Pico-model"}),d.jsx("select",{id:"micropython-board",value:Tn,onChange:m=>Rt(m.target.value),children:vl.map(m=>d.jsx("option",{value:m,children:m},m))}),d.jsx("label",{htmlFor:"micropython-version",children:"MicroPython-version"}),d.jsx("select",{id:"micropython-version",value:(Br==null?void 0:Br.version)??rr,onChange:m=>ol(m.target.value),children:si.map(m=>d.jsxs("option",{value:m.version,children:[m.version," (",m.date,")"]},`${m.board}:${m.version}:${m.date}`))})]}),Br&&d.jsx("a",{className:"btn btn-primary btn-block",href:Br.url,download:Br.fileName,children:"Download UF2"}),d.jsx("a",{className:"btn btn-outline btn-block",href:"https://www.raspberrypi.com/documentation/microcontrollers/micropython.html",target:"_blank",rel:"noreferrer",children:"Se vejledning"})]})}),ke&&d.jsx(It,{title:"Ny Python-fil",onClose:()=>ve(!1),children:d.jsxs("form",{className:"ide-new-file-form",onSubmit:m=>{m.preventDefault(),Tl()},children:[d.jsx("label",{htmlFor:"new-pico-file",children:"Filnavn"}),d.jsxs("div",{className:"ide-new-file-row",children:[d.jsx("input",{id:"new-pico-file",value:T,onChange:m=>J(m.target.value),autoFocus:!0,placeholder:"test"}),d.jsx("span",{className:"ide-new-file-dot",children:"."}),d.jsx("input",{id:"new-pico-file-ext",className:"ide-new-file-ext",value:se,onChange:m=>fe(rf(m.target.value)),placeholder:"py",size:Math.max(2,se.length||2),"aria-label":"Filendelse"})]}),d.jsxs("p",{children:["Skriv navnet og evt. din egen filendelse (standard er .py). Filen oprettes i ",Ps,"."]}),d.jsx("button",{className:"btn btn-primary",type:"submit",disabled:!bh(T,se),children:"Opret"})]})}),Me&&d.jsx(It,{title:ze(Me.path),onClose:()=>gt(null),children:d.jsxs("div",{className:"ide-file-action-modal",children:[d.jsxs("div",{className:"settings-row",children:[d.jsx("span",{children:"Placering"}),d.jsx("strong",{children:Me.source==="pico"?"Pico":"Browser"})]}),d.jsxs("form",{className:"ide-file-rename-form",onSubmit:m=>{m.preventDefault(),Vi()},children:[d.jsx("label",{htmlFor:"rename-pico-file",children:"Filnavn"}),d.jsxs("div",{className:"ide-new-file-row",children:[d.jsx("input",{id:"rename-pico-file",value:Se,onChange:m=>we(m.target.value),placeholder:"min_kode"}),d.jsx("span",{className:"ide-new-file-dot",children:"."}),d.jsx("input",{id:"rename-pico-file-ext",className:"ide-new-file-ext",value:Ce,onChange:m=>tt(rf(m.target.value)),placeholder:"py",size:Math.max(2,Ce.length||2),"aria-label":"Filendelse"})]}),d.jsx("p",{children:"Skriv navnet og evt. en ny filendelse."}),d.jsx("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!Yd(Se,Ce)||Yd(Se,Ce)===Me.path||K,children:"Gem navn"})]}),d.jsxs("div",{className:"ide-file-action-buttons",children:[d.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void qc(),disabled:K||Me.source==="local"&&!w&&!Ne,children:Me.source==="pico"?"Flyt til browser":"Flyt til Pico"}),d.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void fi(),disabled:K,children:"Dupliker"}),d.jsx("button",{className:"btn btn-outline btn-danger btn-block",type:"button",onClick:()=>Pi(Me),disabled:K,children:"Slet"})]}),d.jsxs("section",{className:"ide-version-history",children:[d.jsx("h4",{children:"Versionshistorik"}),Me.versions.length===0?d.jsx("p",{children:"Versionshistorik: 0 gemte versioner."}):d.jsx("div",{className:"ide-version-list",children:Me.versions.map(m=>d.jsxs("div",{className:"ide-version-row",children:[d.jsx("span",{children:ze(m.path)}),d.jsx("small",{children:m.size!==void 0?`${m.size} bytes`:"Gemt på Pico"}),d.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>void Uc(m),disabled:K,children:"Gendan"}),d.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>no(m),disabled:K,children:"Slet"})]},m.path))})]})]})})]})}function bh(i,l=""){var u;const o=(u=i.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:u.replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,""),a=rf(l)||"py";return o?`/${o}.${a}`:""}function rf(i){return i.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()}function Fv(i){const l=i.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop(),o=l==null?void 0:l.match(/^(.+)\.(py|txt|json|csv)$/i);if(!o)return"";const a=cp(o[1]);return a?`/${a}.${o[2].toLowerCase()}`:""}function Yd(i,l="py"){const o=i.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop();if(!o)return"";const a=o.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);if(!a)return"";const u=cp(a[1]),h=l.replace(/^\./,"").toLowerCase(),p=(a[2]??(h||"py")).toLowerCase();return u?`/${u}.${p}`:""}function Gv(i){return ze(i).replace(/\.(py|txt|json|csv)$/i,"")}function cp(i){return i.replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"")}function $v(i){var a;const l=ze(i).match(/\.([a-z0-9]+)$/i),o=(a=l==null?void 0:l[1])==null?void 0:a.toLowerCase();return o&&["py","txt","json","csv"].includes(o)?o:"py"}function Jl(i){return i.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}function up(i){return`/${i.replace(/\\/g,"/").replace(/^\/+/,"")}`.toLowerCase()}async function yh(i){const l=await i();return new Set(l.map(o=>up(o.path)))}function Yv(i){return i instanceof Error?i.message:String(i??"")}function Xv(i){return/ENOENT|No such file|not found/i.test(Yv(i))}function wh(i,l,o){const a=(o==null?void 0:o.has(up(i.path)))??!1;return!a&&Xv(l)?{...i,status:"missing",detail:"Mangler på Pico"}:{...i,status:"unknown",detail:a?"Filen findes, men kunne ikke læses. Stop koden eller genstart Picoen og tjek igen.":"Kunne ikke tjekkes. Stop koden eller genstart Picoen og tjek igen."}}function xh(){return ya.map(i=>({...i,status:"unknown",detail:"Kan gemmes uden Pico. Forbind en Pico for at installere."}))}function kh(i){const l={};return i.forEach(o=>{l[o.id]=!1}),l}function ze(i){return i.split("/").filter(Boolean).pop()??i}function uc(i){return i.replace(/\\/g,"/").toLowerCase()==="/main.py"}function Eh(i){const l=i.userAgent||"",o=i.platform||"",a=i.maxTouchPoints||0,u=/Android.*Mobile|iPhone|iPod|Windows Phone|Mobile Safari/i.test(l),h=/Macintosh/i.test(o)&&a>1;return u&&!h}function Kv(i){return i instanceof DOMException&&i.name==="AbortError"}function Qv(i){return/Traceback \(most recent call last\):/.test(i)||/\b(?:SyntaxError|NameError|TypeError|ValueError|IndentationError|ImportError|ModuleNotFoundError|ZeroDivisionError|IndexError|KeyError|AttributeError):/.test(i)}function sl(i){return Wv(i)}function Wv(i){return i.path.replace(/\\/g,"/").toLowerCase()==="/picobluetooth.py"}const lf=[...["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"].map(i=>({label:i,insert:`${i}${["for","if","while","def","class","elif","else","try","except","finally","with"].includes(i)?" ":""}`})),...["abs","all","any","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","exec","filter","float","getattr","hasattr","hash","hex","id","input","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","open","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","zip"].map(i=>({label:`${i}()`,insert:`${i}()`})),{label:"for i in range():",insert:"for i in range():"},{label:"while True:",insert:"while True:"},{label:"if True:",insert:"if True:"},{label:"time",insert:"time"},{label:"time.",insert:"time."},{label:"time.sleep",insert:"time.sleep"},{label:"time.sleep()",insert:"time.sleep()"},{label:"time.sleep_ms()",insert:"time.sleep_ms()"},{label:"time.ticks_ms()",insert:"time.ticks_ms()"},{label:"time.ticks_diff()",insert:"time.ticks_diff()"},{label:"time.sleep_us()",insert:"time.sleep_us()"},{label:"time.ticks_us()",insert:"time.ticks_us()"},{label:"machine",insert:"machine"},{label:"machine.",insert:"machine."},{label:"machine.Pin",insert:"machine.Pin"},{label:"machine.PWM",insert:"machine.PWM"},{label:"machine.ADC",insert:"machine.ADC"},{label:"machine.I2C",insert:"machine.I2C"},{label:"machine.SPI",insert:"machine.SPI"},{label:"machine.Timer",insert:"machine.Timer"},{label:"machine.UART",insert:"machine.UART"},{label:"machine.reset()",insert:"machine.reset()"},{label:"machine.freq()",insert:"machine.freq()"},{label:"Pin()",insert:"Pin()"},{label:"PWM()",insert:"PWM()"},{label:"ADC()",insert:"ADC()"},{label:"I2C()",insert:"I2C()"},{label:"SPI()",insert:"SPI()"},{label:"Timer()",insert:"Timer()"},{label:"UART()",insert:"UART()"},{label:"Pin.OUT",insert:"Pin.OUT"},{label:"Pin.IN",insert:"Pin.IN"},{label:"Pin.PULL_UP",insert:"Pin.PULL_UP"},{label:"Pin.PULL_DOWN",insert:"Pin.PULL_DOWN"},{label:"Pin.IRQ_FALLING",insert:"Pin.IRQ_FALLING"},{label:"Pin.IRQ_RISING",insert:"Pin.IRQ_RISING"},{label:"import time",insert:"import time"},{label:"import utime as time",insert:"import utime as time"},{label:"import machine",insert:"import machine"},{label:"import random",insert:"import random"},{label:"import os",insert:"import os"},{label:"import sys",insert:"import sys"},{label:"from machine import Pin",insert:"from machine import Pin"},{label:"from machine import Pin, PWM",insert:"from machine import Pin, PWM"},{label:"from machine import Pin, PWM, ADC",insert:"from machine import Pin, PWM, ADC"},{label:"PicoBluetooth",insert:"PicoBluetooth"},{label:"PicoRobotics",insert:"PicoRobotics"},{label:"NeoPixel",insert:"NeoPixel"},{label:"HCSR04",insert:"HCSR04"},{label:"ble.send_toggle_state()",insert:"ble.send_toggle_state()"},{label:"ble.send_slider_state()",insert:"ble.send_slider_state()"},{label:"ble.send_radar()",insert:"ble.send_radar()"},{label:"ble.send_text()",insert:"ble.send_text()"},{label:"ble.send_plot()",insert:"ble.send_plot()"},{label:"on_button(name, is_down):",insert:"on_button(name, is_down):"},{label:"on_slider(name, value):",insert:"on_slider(name, value):"},{label:"on_toggle(name, value):",insert:"on_toggle(name, value):"},{label:"on_connect():",insert:"on_connect():"},{label:"on_disconnect():",insert:"on_disconnect():"},{label:"ValueError",insert:"ValueError"},{label:"TypeError",insert:"TypeError"},{label:"OSError",insert:"OSError"},{label:"Exception",insert:"Exception"}];function Sh(i,l,o){const a=af(i,l);if(!a)return[];const u=Zv(i,a.start,l),h=a.query.toLowerCase(),p=u.beforeToken.toLowerCase(),f=u.linePrefix.toLowerCase(),g=o?[...lf,...eb(i)]:lf;return tb(g).filter(x=>{const w=x.label.toLowerCase(),E=x.insert.toLowerCase();return E===h||w===h||dp(x,a.query)?!1:u.importLine?Jv(x,u)?w.startsWith(f)||E.startsWith(f)||w.startsWith(h)||E.startsWith(h):!1:p.endsWith(".")&&!E.includes(".")?!1:!!(E.startsWith(h)||w.startsWith(h))})}function Zv(i,l,o){const a=i.lastIndexOf(`
`,l-1)+1,u=i.slice(a,o),h=i.slice(a,l),p=/^\s*(?:import|from)\s+[\w.,\s]*$/i.test(u),f=/^\s*from\s+\w+(?:\.\w+)*\s+import\s+/i.test(u);return{linePrefix:u,beforeToken:h,importLine:p,fromImportLine:f}}function Jv(i,l){return l.fromImportLine?!i.insert.includes("(")&&!i.insert.startsWith("import "):i.insert.startsWith("import ")||i.insert.startsWith("from ")?!0:/^[A-Za-z_][A-Za-z0-9_]*$/.test(i.insert)}function eb(i){const l=new Set,o=[/\bdef\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/g,/\bclass\s+([A-Za-z_][A-Za-z0-9_]*)\b/g,/(?:^|[^\w.])([A-Za-z_][A-Za-z0-9_]*)\s*=/g,/\bfor\s+([A-Za-z_][A-Za-z0-9_]*)\s+in\b/g,/\b([A-Za-z_][A-Za-z0-9_]*)\.([A-Za-z_][A-Za-z0-9_]*)\s*\(/g];for(const a of o)for(const u of i.matchAll(a))u[1]&&l.add(u[1]),u[2]&&l.add(u[2]);return[...l].filter(a=>a.length>1&&!nb.has(a)).sort((a,u)=>a.localeCompare(u,"da")).map(a=>({label:a,insert:a}))}function tb(i){const l=new Set,o=[];for(const a of i){const u=a.insert.toLowerCase();l.has(u)||(l.add(u),o.push(a))}return o}const nb=new Set(lf.map(i=>i.insert.replace(/[().: ]+$/g,"")));function af(i,l){const a=i.slice(0,l).match(/[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_.]*$/);return!a||a.index===void 0?null:{query:a[0],start:a.index}}function Th(i,l){const o=i.lastIndexOf(`
`,Math.max(0,l-1))+1;let a=null,u=null,h=!1;for(let p=0;p<l;p+=1){const f=i[p],g=i.slice(p,p+3);if(u){g===u.repeat(3)&&(u=null,p+=2);continue}if(a){if(h){h=!1;continue}if(f==="\\"){h=!0;continue}f===a&&(a=null),f===`
`&&(a=null);continue}if(f==="#"){const v=i.indexOf(`
`,p),x=v===-1?i.length:v;if(l<=x&&p>=o)return!0;p=x;continue}if(g==='"""'||g==="'''"){u=f,p+=2;continue}(f==='"'||f==="'")&&(a=f)}return a!==null||u!==null}function dp(i,l){const o=i.insert.trim();return!/[().]/.test(o)&&o.toLowerCase()===l.toLowerCase()}function rb(i){return/^[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_]*$/.test(i)}function Mh(i,l,o){if(!i)return null;const a=i.closest(".ide-terminal")??i.parentElement;if(!a)return null;const u=window.getComputedStyle(i),h=document.createElement("div"),p=document.createElement("span"),f=a.getBoundingClientRect(),g=i.getBoundingClientRect();h.style.position="absolute",h.style.visibility="hidden",h.style.pointerEvents="none",h.style.whiteSpace="pre-wrap",h.style.overflowWrap="break-word",h.style.wordBreak=u.wordBreak,h.style.boxSizing=u.boxSizing,h.style.width=`${i.getBoundingClientRect().width}px`,h.style.padding=u.padding,h.style.border=u.border,h.style.font=u.font,h.style.lineHeight=u.lineHeight,h.style.letterSpacing=u.letterSpacing,h.style.tabSize=u.tabSize,h.style.fontVariantLigatures=u.fontVariantLigatures,h.style.scrollbarGutter=u.scrollbarGutter,h.style.left=`${g.left-f.left-i.scrollLeft}px`,h.style.top=`${g.top-f.top-i.scrollTop}px`,h.textContent=i.value.slice(0,l),p.textContent=i.value.slice(l,l+1)||" ",h.appendChild(p),a.appendChild(h);const v=p.getBoundingClientRect();h.remove();const x=34,w=14,E=Math.min(210,Math.max(x+w,o*x+w)),j=lb(v.left-f.left,8,Math.max(8,a.clientWidth-296)),B=v.top-f.top+a.scrollTop,$=v.bottom-f.top+a.scrollTop+10,V=a.scrollTop+a.clientHeight-$-8,K=B-a.scrollTop-8,U=a.scrollTop+a.clientHeight,ce=V>=Math.min(E,x*2)||V>=K?"below":"above",Y=Math.max(x+w,Math.min(E,ce==="below"?V:K)),de=ce==="below"?Math.min($,U-Y-8):Math.max(a.scrollTop+8,B-Y-8);return{left:j,top:de,maxHeight:Y,placement:ce}}function lb(i,l,o){return Math.max(l,Math.min(o,i))}function ib(i){const l=[];let o=null,a=null,u=!1,h=0,p=0;const f=(g,v)=>{g>h&&l.push({text:i.slice(h,g),isTriple:v}),h=g};for(;p<i.length;){const g=i[p],v=i.slice(p,p+3);if(a){if(v===a.repeat(3)){p+=3,a=null,f(p,!0);continue}p+=1;continue}if(o){u?u=!1:g==="\\"?u=!0:(g===o||g===`
`)&&(o=null),p+=1;continue}if(g==="#"){const x=i.indexOf(`
`,p);p=x===-1?i.length:x;continue}if(v==='"""'||v==="'''"){f(p,!1),a=g,p+=3;continue}(g==='"'||g==="'")&&(o=g),p+=1}return f(i.length,a!==null),l}function ab(i,l=""){const o=/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,a=/(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm,u=[];let h=0;function p(f,g){f.split(/(\r?\n)/).forEach(v=>{if(v===`
`||v===`\r
`){u.push(d.jsx("br",{},`br-${h++}`));return}v!==""&&g(v,`part-${h++}`)})}return ib(i).forEach(f=>{if(f.isTriple){p(f.text,(g,v)=>{u.push(...Ds(g,l,v,"tok-string"))});return}p(f.text,(g,v)=>{let x=0;[...g.matchAll(a)].forEach((E,j)=>{const B=E.index??0;B>x&&u.push(...Nh(g.slice(x,B),o,`${v}-${j}-plain`,l));const $=E[0],V=$.startsWith("#")?"tok-comment":$.startsWith('"')||$.startsWith("'")?"tok-string":/^\d/.test($)?"tok-number":"tok-builtin";u.push(...Ds($,l,`${v}-${j}-token`,V)),x=B+$.length}),x<g.length&&u.push(...Nh(g.slice(x),o,`${v}-tail`,l))})}),u.length?u:" "}function Nh(i,l,o,a=""){const u=[];let h=0;const p=new RegExp(l.source,"g");return[...i.matchAll(p)].forEach((f,g)=>{const v=f.index??0;v>h&&u.push(...Ds(i.slice(h,v),a,`${o}-${g}-plain`)),u.push(...Ds(f[0],a,`${o}-${g}-keyword`,"tok-keyword")),h=v+f[0].length}),h<i.length&&u.push(...Ds(i.slice(h),a,`${o}-plain-end`)),u}function Ds(i,l,o,a=""){if(!l)return[d.jsx("span",{className:a||void 0,children:i},o)];const u=[],h=l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),p=new RegExp(`(?<![A-Za-zÆØÅæøå0-9_])(${h})(?![A-Za-zÆØÅæøå0-9_])`,"g");let f=0;return[...i.matchAll(p)].forEach((g,v)=>{const x=g.index??0;x>f&&u.push(d.jsx("span",{className:a||void 0,children:i.slice(f,x)},`${o}-${v}-before`)),u.push(d.jsx("span",{className:`${a} tok-match`.trim(),children:g[0]},`${o}-${v}-match`)),f=x+g[0].length}),f<i.length&&u.push(d.jsx("span",{className:a||void 0,children:i.slice(f)},`${o}-after`)),u.length?u:[d.jsx("span",{className:a||void 0,children:i},o)]}function dc(i){return i.length>0?i:[{path:nf,content:op,uploaded:!1,updatedAt:Date.now()}]}function Xd(i,l,o,a){const u=i.filter(h=>h.path!==l);return[{path:l,content:o,uploaded:a,updatedAt:Date.now()},...u].sort((h,p)=>p.updatedAt-h.updatedAt)}function pc(i){return i.map(l=>({name:ze(l.path),path:l.path,type:"file",size:new Blob([l.content]).size}))}function sb(i,l,o){var a;return i.source==="pico"?o[i.path]:(a=l.find(u=>u.path===i.path))==null?void 0:a.content}function gc(i){const l=i.replace(/\\/g,"/"),o=l.lastIndexOf("/"),a=o>=0?l.slice(0,o+1):"",h=(o>=0?l.slice(o+1):l).match(/^(.+)_backup(\d+)(\.[^.]+)$/i);return h?{originalPath:`${a}${h[1]}${h[3]}`,index:parseInt(h[2],10)}:null}function ri(i){return gc(i)!==null}function wa(i){const l=new Map;for(const o of i){const a=gc(o.path);if(!a)continue;const u=l.get(a.originalPath)??[];u.push(o),l.set(a.originalPath,u)}for(const o of l.values())o.sort((a,u)=>{var h,p;return(((h=gc(u.path))==null?void 0:h.index)??0)-(((p=gc(a.path))==null?void 0:p.index)??0)});return l}function ob(i,l){const o=i.replace(/\\/g,"/"),a=o.lastIndexOf("/"),u=a>=0?o.slice(0,a+1):"/",h=a>=0?o.slice(a+1):o.replace(/^\/+/,""),p=h.lastIndexOf("."),f=p>0?h.slice(0,p):h,g=p>0?h.slice(p):"",v=new Set(l.map(x=>x.path.toLowerCase()));for(let x=1;x<1e3;x+=1){const w=`${u}${f}_backup${x}${g}`;if(!v.has(w.toLowerCase()))return w}return`${u}${f}_backup${Date.now()}${g}`}function cb(i,l){const o=i.replace(/\\/g,"/"),a=o.lastIndexOf("/"),u=a>=0?o.slice(0,a+1):"/",h=a>=0?o.slice(a+1):o.replace(/^\/+/,""),p=h.lastIndexOf("."),f=p>0?h.slice(0,p):h,g=p>0?h.slice(p):"";for(let v=1;v<1e3;v+=1){const x=v===1?"_kopi":`_kopi${v}`,w=`${u}${f}${x}${g}`;if(!l(w)&&!ri(w))return w}return`${u}${f}_kopi${Date.now()}${g}`}function ub(i){return i==="ok"?"Nyeste":i==="outdated"?"Opdater":i==="missing"?"Mangler":"Ikke tjekket"}function db(i,l,o,a){const u=new Map,h=wa(i),p=wa(pc(l));for(const w of i)ri(w.path)||u.set(Xt("pico",w.path),{kind:"file",name:w.name,path:w.path,type:w.type,size:w.size,source:"pico",uploaded:!0,versions:h.get(w.path)??[]});for(const w of l)ri(w.path)||u.set(Xt("local",w.path),{kind:"file",name:ze(w.path),path:w.path,type:"file",source:"local",uploaded:!1,versions:p.get(w.path)??[]});for(const w of Object.keys(o)){const[E,...j]=w.split(":"),B=j.join(":");if(E!=="local"&&E!=="pico"||!B)continue;const $=u.get(w);if($){u.set(w,$);continue}u.set(w,{kind:"file",name:ze(B),path:B,type:"file",source:E,uploaded:!1,versions:E==="pico"?h.get(B)??[]:p.get(B)??[]})}const f=[...u.values()].sort(mb),g=f.filter(w=>w.source==="pico"),v=f.filter(w=>w.source==="local"),x=[];return g.length>0||a?x.push({kind:"separator",id:"pico-files",label:a?"Pico":"Microcontroller"},...g):x.push({kind:"separator",id:"pico-files",label:"Microcontroller"}),v.length>0&&x.push({kind:"separator",id:"browser-files",label:"Browser"},...v),x}const fb=new Map([["main.py",0],["devicesettings.txt",1],["layout.txt",2],["picobluetooth.py",3],["picofly.py",4],["picorobotics.py",5],["neopixel.py",6],["hcsr04.py",7]]);function mb(i,l){const o=jh(i.path),a=jh(l.path);return o===null&&a===null?i.name.localeCompare(l.name,"da"):o===null?-1:a===null?1:o-a}function jh(i){var o;const l=(o=i.replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:o.toLowerCase();return l?fb.get(l)??null:null}function Ah(i,l,o){if(!(l in i))return i;const a={...i,[o]:i[l]};return delete a[l],a}function hb(i,l,o,a){const u=`${l}:${o}`;if(!(u in i))return i;const h={...i,[`${l}:${a}`]:i[u]};return delete h[u],h}function pb({open:i}){const l=he(U=>U.screen),o=he(U=>U.active),a=he(U=>U.toggleSideMenu),u=he(U=>U.toggleDebugger),h=he(U=>U.setEditMode),p=he(U=>U.openMenuPage),f=he(U=>U.disconnect),g=he(U=>U.openPicoIde),v=he(U=>U.closePicoIde),x=he(U=>U.picoIdeOrigin),w=l==="dashboard",E=l==="control",j=l==="ide",B=E&&!!(o!=null&&o.canEdit),$=!E||!!(o!=null&&o.isOwnedByMe)||!!(o!=null&&o.canEditCode),V=x==="control",K=x==="control"?"Pico Kontrol Panel":"Hovedmenu";return d.jsxs(d.Fragment,{children:[d.jsx("div",{className:`scrim ${i?"open":"closing"}`,onClick:()=>a(!1)}),d.jsxs("nav",{className:`sidemenu sidemenu-${l} ${i?"open":"closing"}`,"aria-label":"Sidemenu",children:[w&&d.jsxs(d.Fragment,{children:[d.jsx(Vn,{label:"Bruger",icon:"user",onClick:()=>p("user-settings")}),d.jsx(Vn,{label:"Indstillinger",icon:"settings",onClick:()=>p("application-settings")}),d.jsx(Vn,{label:"Kodeværksted",icon:"picoIde",onClick:g,disabled:!$}),d.jsx(Kd,{}),d.jsx(Vn,{label:"Om appen",icon:"info",onClick:()=>p("application-about")}),d.jsx(Vn,{label:"Hjælp",icon:"help",onClick:()=>p("application-help")}),d.jsx(Vn,{label:"Fejlfinding",icon:"debugger",onClick:()=>u(!0)})]}),E&&d.jsxs(d.Fragment,{children:[d.jsx(Vn,{label:"Indstillinger",icon:"settings",onClick:()=>p("device-settings")}),d.jsx(Vn,{label:"Rediger",icon:"edit",onClick:()=>h(!0),disabled:!B}),d.jsx(Vn,{label:"Kodeværksted",icon:"picoIde",onClick:g,disabled:!$}),d.jsx(Kd,{}),d.jsx(Vn,{label:"Hjælp",icon:"help",onClick:()=>p("device-help")}),d.jsx(Vn,{label:"Fejlfinding",icon:"debugger",onClick:()=>u(!0)})]}),j&&d.jsxs(d.Fragment,{children:[d.jsx(Vn,{label:K,icon:"back",onClick:v}),d.jsx(Kd,{})]}),d.jsx("div",{className:"spacer"}),(E||j&&V)&&d.jsx(Vn,{label:"Forlad",icon:"exit",onClick:()=>f()})]})]})}function Vn({label:i,icon:l,disabled:o,onClick:a}){return d.jsxs("button",{className:"iconbtn",type:"button",onClick:a,disabled:o,"aria-label":i,children:[d.jsx(Kt,{name:l}),d.jsx("span",{children:i})]})}function Kd(){return d.jsxs("a",{className:"iconbtn sidemenu-link",href:"https://www.teknologiskolen.dk/",target:"_blank",rel:"noreferrer","aria-label":"Teknologiskolen",children:[d.jsx("img",{src:Tg,alt:""}),d.jsx("span",{children:"Teknologiskolen"})]})}const gb={error:"term-error",success:"term-success",warning:"term-warning",info:""},Rh={error:"[FEJL] ",success:"[SUCCES] ",warning:"[ADVARSEL] ",info:""};function _b(){const i=new Date,l=o=>String(o).padStart(2,"0");return`${l(i.getDate())}-${l(i.getMonth()+1)}-${i.getFullYear()}-${l(i.getHours())}-${l(i.getMinutes())}`}function vb(){const i=he(u=>u.logs),l=he(u=>u.clearLogs),o=he(u=>u.toggleDebugger);function a(){const u=[...i].reverse().map(g=>`${g.time} ${Rh[g.level]}${g.message}`).join(`
`),h=new Blob([u],{type:"text/plain"}),p=URL.createObjectURL(h),f=document.createElement("a");f.href=p,f.download=`${_b()}.txt`,f.click(),URL.revokeObjectURL(p)}return d.jsxs(It,{title:"Fejlfinding",onClose:()=>o(!1),closeVariant:"circle",children:[d.jsx("div",{className:"terminal",children:i.length===0?d.jsx("div",{className:"term-line",children:"Ingen log endnu."}):i.map((u,h)=>d.jsxs("div",{className:`term-line ${gb[u.level]}`,children:[u.time," ",Rh[u.level],u.message]},`${u.time}-${h}`))}),d.jsxs("div",{className:"row",style:{marginTop:14},children:[d.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:l,children:"Ryd"}),d.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:a,children:"Gem logfil"})]})]})}const Ma=function(i,l){let u=i;const h=Cs[l];let p=null,f=0,g=null;const v=[],x={},w=function(M,q){f=u*4+17,p=(function(D){const Q=new Array(D);for(let C=0;C<D;C+=1){Q[C]=new Array(D);for(let ae=0;ae<D;ae+=1)Q[C][ae]=null}return Q})(f),E(0,0),E(f-7,0),E(0,f-7),$(),B(),K(M,q),u>=7&&V(M),g==null&&(g=Y(u,h,v)),U(g,q)},E=function(M,q){for(let D=-1;D<=7;D+=1)if(!(M+D<=-1||f<=M+D))for(let Q=-1;Q<=7;Q+=1)q+Q<=-1||f<=q+Q||(0<=D&&D<=6&&(Q==0||Q==6)||0<=Q&&Q<=6&&(D==0||D==6)||2<=D&&D<=4&&2<=Q&&Q<=4?p[M+D][q+Q]=!0:p[M+D][q+Q]=!1)},j=function(){let M=0,q=0;for(let D=0;D<8;D+=1){w(!0,D);const Q=ti.getLostPoint(x);(D==0||M>Q)&&(M=Q,q=D)}return q},B=function(){for(let M=8;M<f-8;M+=1)p[M][6]==null&&(p[M][6]=M%2==0);for(let M=8;M<f-8;M+=1)p[6][M]==null&&(p[6][M]=M%2==0)},$=function(){const M=ti.getPatternPosition(u);for(let q=0;q<M.length;q+=1)for(let D=0;D<M.length;D+=1){const Q=M[q],C=M[D];if(p[Q][C]==null)for(let ae=-2;ae<=2;ae+=1)for(let le=-2;le<=2;le+=1)ae==-2||ae==2||le==-2||le==2||ae==0&&le==0?p[Q+ae][C+le]=!0:p[Q+ae][C+le]=!1}},V=function(M){const q=ti.getBCHTypeNumber(u);for(let D=0;D<18;D+=1){const Q=!M&&(q>>D&1)==1;p[Math.floor(D/3)][D%3+f-8-3]=Q}for(let D=0;D<18;D+=1){const Q=!M&&(q>>D&1)==1;p[D%3+f-8-3][Math.floor(D/3)]=Q}},K=function(M,q){const D=h<<3|q,Q=ti.getBCHTypeInfo(D);for(let C=0;C<15;C+=1){const ae=!M&&(Q>>C&1)==1;C<6?p[C][8]=ae:C<8?p[C+1][8]=ae:p[f-15+C][8]=ae}for(let C=0;C<15;C+=1){const ae=!M&&(Q>>C&1)==1;C<8?p[8][f-C-1]=ae:C<9?p[8][15-C-1+1]=ae:p[8][15-C-1]=ae}p[f-8][8]=!M},U=function(M,q){let D=-1,Q=f-1,C=7,ae=0;const le=ti.getMaskFunction(q);for(let ye=f-1;ye>0;ye-=2)for(ye==6&&(ye-=1);;){for(let ee=0;ee<2;ee+=1)if(p[Q][ye-ee]==null){let N=!1;ae<M.length&&(N=(M[ae]>>>C&1)==1),le(Q,ye-ee)&&(N=!N),p[Q][ye-ee]=N,C-=1,C==-1&&(ae+=1,C=7)}if(Q+=D,Q<0||f<=Q){Q-=D,D=-D;break}}},ce=function(M,q){let D=0,Q=0,C=0;const ae=new Array(q.length),le=new Array(q.length);for(let P=0;P<q.length;P+=1){const oe=q[P].dataCount,ke=q[P].totalCount-oe;Q=Math.max(Q,oe),C=Math.max(C,ke),ae[P]=new Array(oe);for(let se=0;se<ae[P].length;se+=1)ae[P][se]=255&M.getBuffer()[se+D];D+=oe;const ve=ti.getErrorCorrectPolynomial(ke),J=Us(ae[P],ve.getLength()-1).mod(ve);le[P]=new Array(ve.getLength()-1);for(let se=0;se<le[P].length;se+=1){const fe=se+J.getLength()-le[P].length;le[P][se]=fe>=0?J.getAt(fe):0}}let ye=0;for(let P=0;P<q.length;P+=1)ye+=q[P].totalCount;const ee=new Array(ye);let N=0;for(let P=0;P<Q;P+=1)for(let oe=0;oe<q.length;oe+=1)P<ae[oe].length&&(ee[N]=ae[oe][P],N+=1);for(let P=0;P<C;P+=1)for(let oe=0;oe<q.length;oe+=1)P<le[oe].length&&(ee[N]=le[oe][P],N+=1);return ee},Y=function(M,q,D){const Q=Ch.getRSBlocks(M,q),C=Dh();for(let le=0;le<D.length;le+=1){const ye=D[le];C.put(ye.getMode(),4),C.put(ye.getLength(),ti.getLengthInBits(ye.getMode(),M)),ye.write(C)}let ae=0;for(let le=0;le<Q.length;le+=1)ae+=Q[le].dataCount;if(C.getLengthInBits()>ae*8)throw"code length overflow. ("+C.getLengthInBits()+">"+ae*8+")";for(C.getLengthInBits()+4<=ae*8&&C.put(0,4);C.getLengthInBits()%8!=0;)C.putBit(!1);for(;!(C.getLengthInBits()>=ae*8||(C.put(236,8),C.getLengthInBits()>=ae*8));)C.put(17,8);return ce(C,Q)};x.addData=function(M,q){q=q||"Byte";let D=null;switch(q){case"Numeric":D=bb(M);break;case"Alphanumeric":D=yb(M);break;case"Byte":D=wb(M);break;case"Kanji":D=xb(M);break;default:throw"mode:"+q}v.push(D),g=null},x.isDark=function(M,q){if(M<0||f<=M||q<0||f<=q)throw M+","+q;return p[M][q]},x.getModuleCount=function(){return f},x.make=function(){if(u<1){let M=1;for(;M<40;M++){const q=Ch.getRSBlocks(M,h),D=Dh();for(let C=0;C<v.length;C++){const ae=v[C];D.put(ae.getMode(),4),D.put(ae.getLength(),ti.getLengthInBits(ae.getMode(),M)),ae.write(D)}let Q=0;for(let C=0;C<q.length;C++)Q+=q[C].dataCount;if(D.getLengthInBits()<=Q*8)break}u=M}w(!1,j())},x.createTableTag=function(M,q){M=M||2,q=typeof q>"u"?M*4:q;let D="";D+='<table style="',D+=" border-width: 0px; border-style: none;",D+=" border-collapse: collapse;",D+=" padding: 0px; margin: "+q+"px;",D+='">',D+="<tbody>";for(let Q=0;Q<x.getModuleCount();Q+=1){D+="<tr>";for(let C=0;C<x.getModuleCount();C+=1)D+='<td style="',D+=" border-width: 0px; border-style: none;",D+=" border-collapse: collapse;",D+=" padding: 0px; margin: 0px;",D+=" width: "+M+"px;",D+=" height: "+M+"px;",D+=" background-color: ",D+=x.isDark(Q,C)?"#000000":"#ffffff",D+=";",D+='"/>';D+="</tr>"}return D+="</tbody>",D+="</table>",D},x.createSvgTag=function(M,q,D,Q){let C={};typeof arguments[0]=="object"&&(C=arguments[0],M=C.cellSize,q=C.margin,D=C.alt,Q=C.title),M=M||2,q=typeof q>"u"?M*4:q,D=typeof D=="string"?{text:D}:D||{},D.text=D.text||null,D.id=D.text?D.id||"qrcode-description":null,Q=typeof Q=="string"?{text:Q}:Q||{},Q.text=Q.text||null,Q.id=Q.text?Q.id||"qrcode-title":null;const ae=x.getModuleCount()*M+q*2;let le,ye,ee,N,P="",oe;for(oe="l"+M+",0 0,"+M+" -"+M+",0 0,-"+M+"z ",P+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',P+=C.scalable?"":' width="'+ae+'px" height="'+ae+'px"',P+=' viewBox="0 0 '+ae+" "+ae+'" ',P+=' preserveAspectRatio="xMinYMin meet"',P+=Q.text||D.text?' role="img" aria-labelledby="'+de([Q.id,D.id].join(" ").trim())+'"':"",P+=">",P+=Q.text?'<title id="'+de(Q.id)+'">'+de(Q.text)+"</title>":"",P+=D.text?'<description id="'+de(D.id)+'">'+de(D.text)+"</description>":"",P+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',P+='<path d="',ee=0;ee<x.getModuleCount();ee+=1)for(N=ee*M+q,le=0;le<x.getModuleCount();le+=1)x.isDark(ee,le)&&(ye=le*M+q,P+="M"+ye+","+N+oe);return P+='" stroke="transparent" fill="black"/>',P+="</svg>",P},x.createDataURL=function(M,q){M=M||2,q=typeof q>"u"?M*4:q;const D=x.getModuleCount()*M+q*2,Q=q,C=D-q;return Tb(D,D,function(ae,le){if(Q<=ae&&ae<C&&Q<=le&&le<C){const ye=Math.floor((ae-Q)/M),ee=Math.floor((le-Q)/M);return x.isDark(ee,ye)?0:1}else return 1})},x.createImgTag=function(M,q,D){M=M||2,q=typeof q>"u"?M*4:q;const Q=x.getModuleCount()*M+q*2;let C="";return C+="<img",C+=' src="',C+=x.createDataURL(M,q),C+='"',C+=' width="',C+=Q,C+='"',C+=' height="',C+=Q,C+='"',D&&(C+=' alt="',C+=de(D),C+='"'),C+="/>",C};const de=function(M){let q="";for(let D=0;D<M.length;D+=1){const Q=M.charAt(D);switch(Q){case"<":q+="&lt;";break;case">":q+="&gt;";break;case"&":q+="&amp;";break;case'"':q+="&quot;";break;default:q+=Q;break}}return q},_e=function(M){M=typeof M>"u"?2:M;const D=x.getModuleCount()*1+M*2,Q=M,C=D-M;let ae,le,ye,ee,N;const P={"██":"█","█ ":"▀"," █":"▄","  ":" "},oe={"██":"▀","█ ":"▀"," █":" ","  ":" "};let ke="";for(ae=0;ae<D;ae+=2){for(ye=Math.floor((ae-Q)/1),ee=Math.floor((ae+1-Q)/1),le=0;le<D;le+=1)N="█",Q<=le&&le<C&&Q<=ae&&ae<C&&x.isDark(ye,Math.floor((le-Q)/1))&&(N=" "),Q<=le&&le<C&&Q<=ae+1&&ae+1<C&&x.isDark(ee,Math.floor((le-Q)/1))?N+=" ":N+="█",ke+=M<1&&ae+1>=C?oe[N]:P[N];ke+=`
`}return D%2&&M>0?ke.substring(0,ke.length-D-1)+Array(D+1).join("▀"):ke.substring(0,ke.length-1)};return x.createASCII=function(M,q){if(M=M||1,M<2)return _e(q);M-=1,q=typeof q>"u"?M*2:q;const D=x.getModuleCount()*M+q*2,Q=q,C=D-q;let ae,le,ye,ee;const N=Array(M+1).join("██"),P=Array(M+1).join("  ");let oe="",ke="";for(ae=0;ae<D;ae+=1){for(ye=Math.floor((ae-Q)/M),ke="",le=0;le<D;le+=1)ee=1,Q<=le&&le<C&&Q<=ae&&ae<C&&x.isDark(ye,Math.floor((le-Q)/M))&&(ee=0),ke+=ee?N:P;for(ye=0;ye<M;ye+=1)oe+=ke+`
`}return oe.substring(0,oe.length-1)},x.renderTo2dContext=function(M,q){q=q||2;const D=x.getModuleCount();for(let Q=0;Q<D;Q++)for(let C=0;C<D;C++)M.fillStyle=x.isDark(Q,C)?"black":"white",M.fillRect(C*q,Q*q,q,q)},x};Ma.stringToBytes=function(i){const l=[];for(let o=0;o<i.length;o+=1){const a=i.charCodeAt(o);l.push(a&255)}return l};Ma.createStringToBytes=function(i,l){const o=(function(){const u=Eb(i),h=function(){const g=u.read();if(g==-1)throw"eof";return g};let p=0;const f={};for(;;){const g=u.read();if(g==-1)break;const v=h(),x=h(),w=h(),E=String.fromCharCode(g<<8|v),j=x<<8|w;f[E]=j,p+=1}if(p!=l)throw p+" != "+l;return f})(),a=63;return function(u){const h=[];for(let p=0;p<u.length;p+=1){const f=u.charCodeAt(p);if(f<128)h.push(f);else{const g=o[u.charAt(p)];typeof g=="number"?(g&255)==g?h.push(g):(h.push(g>>>8),h.push(g&255)):h.push(a)}}return h}};const rn={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},Cs={L:1,M:0,Q:3,H:2},ei={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},ti=(function(){const i=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],l=1335,o=7973,a=21522,u={},h=function(p){let f=0;for(;p!=0;)f+=1,p>>>=1;return f};return u.getBCHTypeInfo=function(p){let f=p<<10;for(;h(f)-h(l)>=0;)f^=l<<h(f)-h(l);return(p<<10|f)^a},u.getBCHTypeNumber=function(p){let f=p<<12;for(;h(f)-h(o)>=0;)f^=o<<h(f)-h(o);return p<<12|f},u.getPatternPosition=function(p){return i[p-1]},u.getMaskFunction=function(p){switch(p){case ei.PATTERN000:return function(f,g){return(f+g)%2==0};case ei.PATTERN001:return function(f,g){return f%2==0};case ei.PATTERN010:return function(f,g){return g%3==0};case ei.PATTERN011:return function(f,g){return(f+g)%3==0};case ei.PATTERN100:return function(f,g){return(Math.floor(f/2)+Math.floor(g/3))%2==0};case ei.PATTERN101:return function(f,g){return f*g%2+f*g%3==0};case ei.PATTERN110:return function(f,g){return(f*g%2+f*g%3)%2==0};case ei.PATTERN111:return function(f,g){return(f*g%3+(f+g)%2)%2==0};default:throw"bad maskPattern:"+p}},u.getErrorCorrectPolynomial=function(p){let f=Us([1],0);for(let g=0;g<p;g+=1)f=f.multiply(Us([1,ni.gexp(g)],0));return f},u.getLengthInBits=function(p,f){if(1<=f&&f<10)switch(p){case rn.MODE_NUMBER:return 10;case rn.MODE_ALPHA_NUM:return 9;case rn.MODE_8BIT_BYTE:return 8;case rn.MODE_KANJI:return 8;default:throw"mode:"+p}else if(f<27)switch(p){case rn.MODE_NUMBER:return 12;case rn.MODE_ALPHA_NUM:return 11;case rn.MODE_8BIT_BYTE:return 16;case rn.MODE_KANJI:return 10;default:throw"mode:"+p}else if(f<41)switch(p){case rn.MODE_NUMBER:return 14;case rn.MODE_ALPHA_NUM:return 13;case rn.MODE_8BIT_BYTE:return 16;case rn.MODE_KANJI:return 12;default:throw"mode:"+p}else throw"type:"+f},u.getLostPoint=function(p){const f=p.getModuleCount();let g=0;for(let w=0;w<f;w+=1)for(let E=0;E<f;E+=1){let j=0;const B=p.isDark(w,E);for(let $=-1;$<=1;$+=1)if(!(w+$<0||f<=w+$))for(let V=-1;V<=1;V+=1)E+V<0||f<=E+V||$==0&&V==0||B==p.isDark(w+$,E+V)&&(j+=1);j>5&&(g+=3+j-5)}for(let w=0;w<f-1;w+=1)for(let E=0;E<f-1;E+=1){let j=0;p.isDark(w,E)&&(j+=1),p.isDark(w+1,E)&&(j+=1),p.isDark(w,E+1)&&(j+=1),p.isDark(w+1,E+1)&&(j+=1),(j==0||j==4)&&(g+=3)}for(let w=0;w<f;w+=1)for(let E=0;E<f-6;E+=1)p.isDark(w,E)&&!p.isDark(w,E+1)&&p.isDark(w,E+2)&&p.isDark(w,E+3)&&p.isDark(w,E+4)&&!p.isDark(w,E+5)&&p.isDark(w,E+6)&&(g+=40);for(let w=0;w<f;w+=1)for(let E=0;E<f-6;E+=1)p.isDark(E,w)&&!p.isDark(E+1,w)&&p.isDark(E+2,w)&&p.isDark(E+3,w)&&p.isDark(E+4,w)&&!p.isDark(E+5,w)&&p.isDark(E+6,w)&&(g+=40);let v=0;for(let w=0;w<f;w+=1)for(let E=0;E<f;E+=1)p.isDark(E,w)&&(v+=1);const x=Math.abs(100*v/f/f-50)/5;return g+=x*10,g},u})(),ni=(function(){const i=new Array(256),l=new Array(256);for(let a=0;a<8;a+=1)i[a]=1<<a;for(let a=8;a<256;a+=1)i[a]=i[a-4]^i[a-5]^i[a-6]^i[a-8];for(let a=0;a<255;a+=1)l[i[a]]=a;const o={};return o.glog=function(a){if(a<1)throw"glog("+a+")";return l[a]},o.gexp=function(a){for(;a<0;)a+=255;for(;a>=256;)a-=255;return i[a]},o})(),Us=function(i,l){if(typeof i.length>"u")throw i.length+"/"+l;const o=(function(){let u=0;for(;u<i.length&&i[u]==0;)u+=1;const h=new Array(i.length-u+l);for(let p=0;p<i.length-u;p+=1)h[p]=i[p+u];return h})(),a={};return a.getAt=function(u){return o[u]},a.getLength=function(){return o.length},a.multiply=function(u){const h=new Array(a.getLength()+u.getLength()-1);for(let p=0;p<a.getLength();p+=1)for(let f=0;f<u.getLength();f+=1)h[p+f]^=ni.gexp(ni.glog(a.getAt(p))+ni.glog(u.getAt(f)));return Us(h,0)},a.mod=function(u){if(a.getLength()-u.getLength()<0)return a;const h=ni.glog(a.getAt(0))-ni.glog(u.getAt(0)),p=new Array(a.getLength());for(let f=0;f<a.getLength();f+=1)p[f]=a.getAt(f);for(let f=0;f<u.getLength();f+=1)p[f]^=ni.gexp(ni.glog(u.getAt(f))+h);return Us(p,0).mod(u)},a},Ch=(function(){const i=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],l=function(u,h){const p={};return p.totalCount=u,p.dataCount=h,p},o={},a=function(u,h){switch(h){case Cs.L:return i[(u-1)*4+0];case Cs.M:return i[(u-1)*4+1];case Cs.Q:return i[(u-1)*4+2];case Cs.H:return i[(u-1)*4+3];default:return}};return o.getRSBlocks=function(u,h){const p=a(u,h);if(typeof p>"u")throw"bad rs block @ typeNumber:"+u+"/errorCorrectionLevel:"+h;const f=p.length/3,g=[];for(let v=0;v<f;v+=1){const x=p[v*3+0],w=p[v*3+1],E=p[v*3+2];for(let j=0;j<x;j+=1)g.push(l(w,E))}return g},o})(),Dh=function(){const i=[];let l=0;const o={};return o.getBuffer=function(){return i},o.getAt=function(a){const u=Math.floor(a/8);return(i[u]>>>7-a%8&1)==1},o.put=function(a,u){for(let h=0;h<u;h+=1)o.putBit((a>>>u-h-1&1)==1)},o.getLengthInBits=function(){return l},o.putBit=function(a){const u=Math.floor(l/8);i.length<=u&&i.push(0),a&&(i[u]|=128>>>l%8),l+=1},o},bb=function(i){const l=rn.MODE_NUMBER,o=i,a={};a.getMode=function(){return l},a.getLength=function(p){return o.length},a.write=function(p){const f=o;let g=0;for(;g+2<f.length;)p.put(u(f.substring(g,g+3)),10),g+=3;g<f.length&&(f.length-g==1?p.put(u(f.substring(g,g+1)),4):f.length-g==2&&p.put(u(f.substring(g,g+2)),7))};const u=function(p){let f=0;for(let g=0;g<p.length;g+=1)f=f*10+h(p.charAt(g));return f},h=function(p){if("0"<=p&&p<="9")return p.charCodeAt(0)-48;throw"illegal char :"+p};return a},yb=function(i){const l=rn.MODE_ALPHA_NUM,o=i,a={};a.getMode=function(){return l},a.getLength=function(h){return o.length},a.write=function(h){const p=o;let f=0;for(;f+1<p.length;)h.put(u(p.charAt(f))*45+u(p.charAt(f+1)),11),f+=2;f<p.length&&h.put(u(p.charAt(f)),6)};const u=function(h){if("0"<=h&&h<="9")return h.charCodeAt(0)-48;if("A"<=h&&h<="Z")return h.charCodeAt(0)-65+10;switch(h){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+h}};return a},wb=function(i){const l=rn.MODE_8BIT_BYTE,o=Ma.stringToBytes(i),a={};return a.getMode=function(){return l},a.getLength=function(u){return o.length},a.write=function(u){for(let h=0;h<o.length;h+=1)u.put(o[h],8)},a},xb=function(i){const l=rn.MODE_KANJI,o=Ma.stringToBytes;(function(h,p){const f=o(h);if(f.length!=2||(f[0]<<8|f[1])!=p)throw"sjis not supported."})("友",38726);const a=o(i),u={};return u.getMode=function(){return l},u.getLength=function(h){return~~(a.length/2)},u.write=function(h){const p=a;let f=0;for(;f+1<p.length;){let g=(255&p[f])<<8|255&p[f+1];if(33088<=g&&g<=40956)g-=33088;else if(57408<=g&&g<=60351)g-=49472;else throw"illegal char at "+(f+1)+"/"+g;g=(g>>>8&255)*192+(g&255),h.put(g,13),f+=2}if(f<p.length)throw"illegal char at "+(f+1)},u},fp=function(){const i=[],l={};return l.writeByte=function(o){i.push(o&255)},l.writeShort=function(o){l.writeByte(o),l.writeByte(o>>>8)},l.writeBytes=function(o,a,u){a=a||0,u=u||o.length;for(let h=0;h<u;h+=1)l.writeByte(o[h+a])},l.writeString=function(o){for(let a=0;a<o.length;a+=1)l.writeByte(o.charCodeAt(a))},l.toByteArray=function(){return i},l.toString=function(){let o="";o+="[";for(let a=0;a<i.length;a+=1)a>0&&(o+=","),o+=i[a];return o+="]",o},l},kb=function(){let i=0,l=0,o=0,a="";const u={},h=function(f){a+=String.fromCharCode(p(f&63))},p=function(f){if(f<0)throw"n:"+f;if(f<26)return 65+f;if(f<52)return 97+(f-26);if(f<62)return 48+(f-52);if(f==62)return 43;if(f==63)return 47;throw"n:"+f};return u.writeByte=function(f){for(i=i<<8|f&255,l+=8,o+=1;l>=6;)h(i>>>l-6),l-=6},u.flush=function(){if(l>0&&(h(i<<6-l),i=0,l=0),o%3!=0){const f=3-o%3;for(let g=0;g<f;g+=1)a+="="}},u.toString=function(){return a},u},Eb=function(i){const l=i;let o=0,a=0,u=0;const h={};h.read=function(){for(;u<8;){if(o>=l.length){if(u==0)return-1;throw"unexpected end of file./"+u}const g=l.charAt(o);if(o+=1,g=="=")return u=0,-1;if(g.match(/^\s$/))continue;a=a<<6|p(g.charCodeAt(0)),u+=6}const f=a>>>u-8&255;return u-=8,f};const p=function(f){if(65<=f&&f<=90)return f-65;if(97<=f&&f<=122)return f-97+26;if(48<=f&&f<=57)return f-48+52;if(f==43)return 62;if(f==47)return 63;throw"c:"+f};return h},Sb=function(i,l){const o=i,a=l,u=new Array(i*l),h={};h.setPixel=function(v,x,w){u[x*o+v]=w},h.write=function(v){v.writeString("GIF87a"),v.writeShort(o),v.writeShort(a),v.writeByte(128),v.writeByte(0),v.writeByte(0),v.writeByte(0),v.writeByte(0),v.writeByte(0),v.writeByte(255),v.writeByte(255),v.writeByte(255),v.writeString(","),v.writeShort(0),v.writeShort(0),v.writeShort(o),v.writeShort(a),v.writeByte(0);const x=2,w=f(x);v.writeByte(x);let E=0;for(;w.length-E>255;)v.writeByte(255),v.writeBytes(w,E,255),E+=255;v.writeByte(w.length-E),v.writeBytes(w,E,w.length-E),v.writeByte(0),v.writeString(";")};const p=function(v){const x=v;let w=0,E=0;const j={};return j.write=function(B,$){if(B>>>$)throw"length over";for(;w+$>=8;)x.writeByte(255&(B<<w|E)),$-=8-w,B>>>=8-w,E=0,w=0;E=B<<w|E,w=w+$},j.flush=function(){w>0&&x.writeByte(E)},j},f=function(v){const x=1<<v,w=(1<<v)+1;let E=v+1;const j=g();for(let U=0;U<x;U+=1)j.add(String.fromCharCode(U));j.add(String.fromCharCode(x)),j.add(String.fromCharCode(w));const B=fp(),$=p(B);$.write(x,E);let V=0,K=String.fromCharCode(u[V]);for(V+=1;V<u.length;){const U=String.fromCharCode(u[V]);V+=1,j.contains(K+U)?K=K+U:($.write(j.indexOf(K),E),j.size()<4095&&(j.size()==1<<E&&(E+=1),j.add(K+U)),K=U)}return $.write(j.indexOf(K),E),$.write(w,E),$.flush(),B.toByteArray()},g=function(){const v={};let x=0;const w={};return w.add=function(E){if(w.contains(E))throw"dup key:"+E;v[E]=x,x+=1},w.size=function(){return x},w.indexOf=function(E){return v[E]},w.contains=function(E){return typeof v[E]<"u"},w};return h},Tb=function(i,l,o){const a=Sb(i,l);for(let f=0;f<l;f+=1)for(let g=0;g<i;g+=1)a.setPixel(g,f,o(g,f));const u=fp();a.write(u);const h=kb(),p=u.toByteArray();for(let f=0;f<p.length;f+=1)h.writeByte(p[f]);return h.flush(),"data:image/gif;base64,"+h};Ma.stringToBytes;function Mb(i){const l=Ma(0,"L");l.addData(i),l.make();const o=l.getModuleCount();return Array.from({length:o},(a,u)=>Array.from({length:o},(h,p)=>l.isDark(u,p)))}function Nb(){const i=he(je=>je.menuPage),l=he(je=>je.closeMenuPage),o=he(je=>je.user),a=he(je=>je.active),u=he(je=>je.layout),h=he(je=>je.savedDevices),p=he(je=>je.updateUsername),f=he(je=>je.createOwnerPairingCode),g=he(je=>je.applyOwnerPairingCode),v=he(je=>je.clearSavedDevices),x=he(je=>je.resetApplicationData),w=he(je=>je.saveDeviceSettings),E=he(je=>je.setEditMode),j=he(je=>je.askConfirm),[B,$]=A.useState((o==null?void 0:o.username)??""),[V,K]=A.useState(!1),[U,ce]=A.useState(""),[Y,de]=A.useState(""),[_e,M]=A.useState(!1),[q,D]=A.useState(""),Q=A.useRef(null),[C,ae]=A.useState((a==null?void 0:a.icon)??li),[le,ye]=A.useState(!1),[ee,N]=A.useState((a==null?void 0:a.canOthersConnect)??!1),[P,oe]=A.useState((a==null?void 0:a.canOthersEdit)??!1),[ke,ve]=A.useState((a==null?void 0:a.canOthersEditCode)??!1),[T,J]=A.useState((a==null?void 0:a.gridCols)??11),[se,fe]=A.useState((a==null?void 0:a.gridRows)??31),[Se,we]=A.useState(!1);A.useEffect(()=>{i==="user-settings"&&($((o==null?void 0:o.username)??""),de(""),D(""),M(!1))},[i,o==null?void 0:o.username]),A.useEffect(()=>{i==="device-settings"&&a&&(ae(a.icon),N(a.canOthersConnect),oe(a.canOthersEdit),ve(a.canOthersEditCode),J(a.gridCols),fe(a.gridRows))},[a,i]),A.useEffect(()=>{var je;_e&&((je=Q.current)==null||je.scrollIntoView({behavior:"smooth",block:"nearest"}))},[_e]),A.useEffect(()=>{if(!_e)return;let je=!1,it=null,X=0;async function H(){var Le;const me=window.BarcodeDetector;if(!me||!((Le=navigator.mediaDevices)!=null&&Le.getUserMedia)){D("Denne browser kan ikke scanne QR-koder. Skriv ejerkoden i stedet."),M(!1);return}try{it=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const Ve=Q.current;if(!Ve)return;Ve.srcObject=it,await Ve.play();const Fe=new me({formats:["qr_code"]}),Be=async()=>{var qe;if(!je){try{const an=(qe=(await Fe.detect(Ve)).find(Tn=>Tn.rawValue))==null?void 0:qe.rawValue;if(an){de(an),g(an)&&K(!1),M(!1);return}}catch{}X=window.requestAnimationFrame(Be)}};X=window.requestAnimationFrame(Be)}catch{D("Kameraet kunne ikke åbnes. Skriv ejerkoden i stedet."),M(!1)}}return H(),()=>{je=!0,X&&window.cancelAnimationFrame(X),it==null||it.getTracks().forEach(me=>me.stop())}},[g,_e]);const Ce=(je,it)=>Number.isFinite(je)?Math.max(ka,Math.min(Ea,Math.round(je))):it,tt=(o==null?void 0:o.username)??"",Me=B.trim(),gt=Me.length>0&&Me!==tt;if(!i)return null;if(i==="user-settings"){let je=function(){const H=f();H&&(ce(H),de(""),K(!0))},it=function(){g(Y)&&(de(""),K(!1))};async function X(){var H;try{await((H=navigator.clipboard)==null?void 0:H.writeText(U))}catch{}}return d.jsxs(d.Fragment,{children:[d.jsx(It,{title:"Brugerindstillinger",onClose:l,children:d.jsxs("div",{className:"settings-stack",children:[d.jsx(gr,{label:"GUID",value:(o==null?void 0:o.userID)??"Ukendt"}),d.jsxs("div",{className:`field ${B.trim()?"filled":""}`,children:[d.jsx("input",{id:"settings-username",value:B,onChange:H=>$(H.target.value),maxLength:24,autoComplete:"off",placeholder:""}),d.jsx("label",{htmlFor:"settings-username",children:"Brugernavn"})]}),d.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>p(B),disabled:!gt,children:"Gem nyt brugernavn"}),d.jsx("div",{className:"notice",children:"Ejerkode bruges, hvis den samme person skal forbinde fra flere browsere eller telefoner."}),d.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:je,children:"Ejerkode"}),d.jsx("button",{className:"btn btn-outline btn-block btn-danger",type:"button",onClick:()=>j({title:"Start forfra",message:"Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.",confirmLabel:"Slet alt",onConfirm:()=>{x()}}),children:"Slet brugerdata"})]})}),V&&d.jsx(It,{title:"Del ejerkode",onClose:()=>K(!1),children:d.jsxs("div",{className:"settings-stack",children:[d.jsx(Ab,{code:U}),d.jsx("code",{className:"owner-code-text",children:U}),d.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void X(),children:"Kopiér ejerkode"}),d.jsxs("div",{className:`field ${Y.trim()?"filled":""}`,children:[d.jsx("input",{id:"settings-owner-code",value:Y,onChange:H=>de(H.target.value),autoComplete:"off",placeholder:""}),d.jsx("label",{htmlFor:"settings-owner-code",children:"Skriv ejerkode"})]}),d.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:it,disabled:!Y.trim(),children:"Brug ejerkode i denne browser"}),d.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>M(H=>!H),children:_e?"Stop scanning":"Scan QR-kode"}),q&&d.jsx("div",{className:"notice",children:q}),_e&&d.jsx("video",{className:"owner-code-video",ref:Q,muted:!0,playsInline:!0})]})})]})}if(i==="application-settings")return d.jsx(It,{title:"Applikationsindstillinger",onClose:l,children:d.jsxs("div",{className:"settings-stack",children:[d.jsx(gr,{label:"Version",value:Os}),d.jsx(gr,{label:"Bluetooth",value:Ec()?"Tilgængelig":"Ikke tilgængelig"}),d.jsx(gr,{label:"Gemte enheder",value:String(h.length)}),d.jsx("div",{className:"notice",children:"Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne tilladelsen i browserens site- eller Bluetooth-indstillinger."}),d.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>j({title:"Ryd gemte enheder",message:"Vil du fjerne alle gemte enheder fra denne browser?",confirmLabel:"Ryd",onConfirm:v}),disabled:h.length===0,children:"Ryd gemte enheder"})]})});if(i==="application-about")return d.jsx(It,{title:"Om appen",onClose:l,children:d.jsxs("div",{className:"settings-stack prose",children:[d.jsx("p",{children:"Pico Kontrol Panel er lavet til at bygge og fjernstyre sjove eller seje Raspberry Pi Pico W-projekter."}),d.jsx(gr,{label:"Udvikler",value:"Christian Bröchner Rasmussen"}),d.jsx(gr,{label:"Version",value:Os})]})});if(i==="application-help")return d.jsx(It,{title:"Hjælp til applikationen",onClose:l,children:d.jsxs("div",{className:"settings-stack prose help-lesson",children:[d.jsxs("div",{className:"help-lesson-card",children:[d.jsx("strong",{children:"Komplet undervisningsforløb"}),d.jsx("p",{children:"Linket åbner Teknologiskolens guide til Pico Kontrol Panel. Her kan du lære hele arbejdsgangen: browseropsætning, Kodeværkstedet, MicroPython, USB-installation, Bluetooth-forbindelse, kontrolpaneler og trådløs kodeudvikling."})]}),d.jsxs("div",{className:"help-lesson-list","aria-label":"Undervisningsforløbet indeholder",children:[d.jsx("span",{children:"Trin-for-trin opsætning"}),d.jsx("span",{children:"Øvelser til kode og kontrolpanel"}),d.jsx("span",{children:"Projektforslag med Pico W"})]}),d.jsx("p",{className:"help-lesson-destination",children:"Du sendes til materialer.teknologiskolen.dk i en ny fane."}),d.jsx("a",{className:"btn btn-primary btn-block",href:"https://materialer.teknologiskolen.dk/lessons/fjernstyring-af-raspberry-pi-pico-w",target:"_blank",rel:"noreferrer",children:"Åbn komplet undervisningsforløb"})]})});if(i==="device-settings"){const je=!!(a!=null&&a.isOwnedByMe);async function it(X=!1){if(!a||!je)return;const H=Ce(T,a.gridCols),me=Ce(se,a.gridRows),Le=jb(u,H,me);if(Le&&!X){j({title:"Gitter kan påvirke layout",message:`Det nuværende layout bruger op til ${Le.requiredCols} kolonner og ${Le.requiredRows} rækker. Det nye gitter er ${H} × ${me}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,confirmLabel:"Gem alligevel",onConfirm:()=>{it(!0)}});return}we(!0),await w(C,ee,ee&&P,ee&&ke,H,me),J(H),fe(me),we(!1),l()}return d.jsxs(It,{title:"Enhedsindstillinger",onClose:l,children:[d.jsxs("div",{className:"device-settings-modal",children:[d.jsx("div",{className:"device-settings-scroll",children:d.jsxs("div",{className:"settings-stack",children:[d.jsx(gr,{label:"Navn",value:(a==null?void 0:a.deviceName)??"Ukendt"}),d.jsx(gr,{label:"Ejer",value:Rb(a)}),je?d.jsxs(d.Fragment,{children:[d.jsxs("button",{className:"device-icon-pick settings-icon-pick",type:"button",onClick:()=>ye(!0),"aria-label":"Vælg ikon",children:[d.jsx(qs,{slug:C}),d.jsx("span",{className:"badge",children:d.jsx(Kt,{name:"plus",size:22})})]}),d.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),d.jsxs("div",{className:"segmented",children:[d.jsx("button",{type:"button",className:ee?"":"active",onClick:()=>N(!1),children:"Privat"}),d.jsx("button",{type:"button",className:ee?"active":"",onClick:()=>N(!0),children:"Offentlig"})]}),ee&&d.jsxs(d.Fragment,{children:[d.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),d.jsxs("div",{className:"segmented",children:[d.jsx("button",{type:"button",className:P?"":"active",onClick:()=>oe(!1),children:"Nej"}),d.jsx("button",{type:"button",className:P?"active":"",onClick:()=>oe(!0),children:"Ja"})]}),d.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),d.jsxs("div",{className:"segmented",children:[d.jsx("button",{type:"button",className:ke?"":"active",onClick:()=>ve(!1),children:"Nej"}),d.jsx("button",{type:"button",className:ke?"active":"",onClick:()=>ve(!0),children:"Ja"})]})]}),d.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter"}),d.jsxs("div",{className:"row",children:[d.jsxs("div",{className:"grid-field",children:[d.jsx("label",{htmlFor:"device-cols",children:"Kolonner"}),d.jsx("input",{id:"device-cols",type:"number",min:ka,max:Ea,value:Number.isNaN(T)?"":T,onChange:X=>J(parseInt(X.target.value,10)),onBlur:()=>J(Ce(T,(a==null?void 0:a.gridCols)??11))})]}),d.jsxs("div",{className:"grid-field",children:[d.jsx("label",{htmlFor:"device-rows",children:"Rækker"}),d.jsx("input",{id:"device-rows",type:"number",min:ka,max:Ea,value:Number.isNaN(se)?"":se,onChange:X=>fe(parseInt(X.target.value,10)),onBlur:()=>fe(Ce(se,(a==null?void 0:a.gridRows)??31))})]})]})]}):d.jsxs(d.Fragment,{children:[d.jsx(gr,{label:"Ikon",value:(a==null?void 0:a.icon)??li}),d.jsx(gr,{label:"Redigering",value:a!=null&&a.canEdit?"Tilladt":"Ikke tilladt"}),d.jsx(gr,{label:"Gitter",value:`${(a==null?void 0:a.gridCols)??0} × ${(a==null?void 0:a.gridRows)??0}`})]})]})}),je&&d.jsx("div",{className:"device-settings-foot",children:d.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>it(),disabled:Se,children:Se?"Gemmer...":"Gem enhedsindstillinger"})})]}),le&&d.jsx(Yh,{selected:C,onSelect:ae,onClose:()=>ye(!1)})]})}return d.jsx(It,{title:"Hjælp til enheden",onClose:l,children:d.jsxs("div",{className:"settings-stack prose",children:[d.jsx("p",{children:"Knapper sender en kommando med deres navn, når de trykkes."}),d.jsx("p",{children:"Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse."}),d.jsx("p",{children:"Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen."}),(a==null?void 0:a.canEdit)&&d.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>E(!0),children:"Rediger layout"})]})})}function jb(i,l,o){let a=0,u=0;for(const h of i)zs(h)&&(a=Math.max(a,Math.ceil((h.centerX2+h.spanX)/2)+1),u=Math.max(u,Math.ceil((h.centerY2+h.spanY)/2)+1));return l<a||o<u?{requiredCols:a,requiredRows:u}:null}function Ab({code:i}){const l=A.useMemo(()=>Mb(i),[i]),o=l.length;return d.jsxs("svg",{className:"owner-code-qr",viewBox:`0 0 ${o+8} ${o+8}`,role:"img","aria-label":"QR-kode til ejerkode",children:[d.jsx("rect",{width:o+8,height:o+8,fill:"white"}),l.map((a,u)=>a.map((h,p)=>h?d.jsx("rect",{x:p+4,y:u+4,width:"1",height:"1",fill:"currentColor"},`${p}-${u}`):null))]})}function Rb(i){var l;return i?i.isOwnedByMe?"Dig":((l=i.ownerName)==null?void 0:l.trim())||"Anden bruger":"Ukendt"}function gr({label:i,value:l}){return d.jsxs("div",{className:"settings-row",children:[d.jsx("span",{children:i}),d.jsx("strong",{children:l})]})}function Cb(){const i=he(a=>a.confirmDialog),l=he(a=>a.closeConfirm);if(!i)return null;function o(){i==null||i.onConfirm(),l()}return d.jsx(It,{title:i.title,onClose:l,children:d.jsxs("div",{className:"settings-stack",children:[d.jsx("p",{className:"confirm-message",children:i.message}),d.jsxs("div",{className:"row",children:[d.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:l,children:i.cancelLabel??"Annuller"}),d.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:o,children:i.confirmLabel??"Fortsæt"})]})]})})}function Db(){const i=he(a=>a.connectionLost),l=he(a=>a.reconnectLostDevice),o=he(a=>a.dismissConnectionLost);return i?d.jsx(It,{title:"Forbindelse afbrudt",onClose:o,children:d.jsxs("div",{className:"settings-stack",children:[d.jsxs("p",{className:"confirm-message",children:["Forbindelsen til ",i.deviceName," blev afbrudt. Tjek at Picoen har strøm og er tæt nok på."]}),d.jsxs("div",{className:"row",children:[d.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:o,children:"Luk"}),d.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>l(),children:"Genforbind"})]})]})}):null}function Ob(){const i=he(o=>o.toast),l=he(o=>o.dismissToast);return i?pf.createPortal(d.jsx("div",{className:"toast",role:"alert",onClick:l,children:i.message},i.id),document.body):null}function Lb(){const i=he(g=>g.screen),l=he(g=>g.splashTarget),o=he(g=>g.init),a=he(g=>g.sideMenuOpen),u=he(g=>g.debuggerOpen),[h,p]=A.useState(!1),f=Cg();return A.useEffect(()=>{o()},[o]),A.useEffect(()=>{if(a){p(!0);return}const g=setTimeout(()=>p(!1),140);return()=>clearTimeout(g)},[a]),d.jsxs("div",{className:"app","data-rotation-lock":f,children:[i==="splash"&&l==="intro"&&d.jsx(Im,{}),i==="splash"&&l==="dashboard"&&d.jsx(Gm,{}),i==="splash"&&d.jsx(Lg,{}),i==="intro"&&d.jsx(Im,{}),i==="dashboard"&&d.jsx(Gm,{}),i==="connection"&&d.jsx(Yg,{}),i==="create"&&d.jsx(Qg,{}),i==="control"&&d.jsx(G_,{}),i==="ide"&&d.jsx(Vv,{}),h&&d.jsx(pb,{open:a}),d.jsx(Nb,{}),d.jsx(Db,{}),d.jsx(Cb,{}),u&&d.jsx(vb,{}),d.jsx(Ob,{})]})}function Bb(){if(!("serviceWorker"in navigator))return;window.addEventListener("load",()=>{const l=new URL("sw.js",window.location.href);navigator.serviceWorker.register(l,{scope:"./"}).catch(o=>{console.warn("Service worker registration failed:",o)})});let i=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{i||window.crossOriginIsolated||(i=!0,window.location.reload())})}Bb();H2.createRoot(document.getElementById("root")).render(d.jsx(js.StrictMode,{children:d.jsx(Lb,{})}));
