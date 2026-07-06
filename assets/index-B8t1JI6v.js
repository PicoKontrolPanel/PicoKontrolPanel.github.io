var Qg=Object.defineProperty;var Zg=(s,i,c)=>i in s?Qg(s,i,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[i]=c;var fe=(s,i,c)=>Zg(s,typeof i!="symbol"?i+"":i,c);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))a(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const b of h.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&a(b)}).observe(document,{childList:!0,subtree:!0});function c(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function a(f){if(f.ep)return;f.ep=!0;const h=c(f);fetch(f.href,h)}})();function a_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var vf={exports:{}},ns={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lh;function Wg(){if(lh)return ns;lh=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function c(a,f,h){var b=null;if(h!==void 0&&(b=""+h),f.key!==void 0&&(b=""+f.key),"key"in f){h={};for(var p in f)p!=="key"&&(h[p]=f[p])}else h=f;return f=h.ref,{$$typeof:s,type:a,key:b,ref:f!==void 0?f:null,props:h}}return ns.Fragment=i,ns.jsx=c,ns.jsxs=c,ns}var rh;function Jg(){return rh||(rh=1,vf.exports=Wg()),vf.exports}var u=Jg(),xf={exports:{}},Ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ih;function eb(){if(ih)return Ne;ih=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),b=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),N=Symbol.iterator;function D(k){return k===null||typeof k!="object"?null:(k=N&&k[N]||k["@@iterator"],typeof k=="function"?k:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,q={};function P(k,z,ee){this.props=k,this.context=z,this.refs=q,this.updater=ee||U}P.prototype.isReactComponent={},P.prototype.setState=function(k,z){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,z,"setState")},P.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function G(){}G.prototype=P.prototype;function re(k,z,ee){this.props=k,this.context=z,this.refs=q,this.updater=ee||U}var ie=re.prototype=new G;ie.constructor=re,K(ie,P.prototype),ie.isPureReactComponent=!0;var _e=Array.isArray;function pe(){}var Q={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function ke(k,z,ee){var se=ee.ref;return{$$typeof:s,type:k,key:z,ref:se!==void 0?se:null,props:ee}}function Se(k,z){return ke(k.type,z,k.props)}function Ye(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function W(k){var z={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(ee){return z[ee]})}var tn=/\/+/g;function ze(k,z){return typeof k=="object"&&k!==null&&k.key!=null?W(""+k.key):z.toString(36)}function Ve(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(pe,pe):(k.status="pending",k.then(function(z){k.status==="pending"&&(k.status="fulfilled",k.value=z)},function(z){k.status==="pending"&&(k.status="rejected",k.reason=z)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function H(k,z,ee,se,ye){var I=typeof k;(I==="undefined"||I==="boolean")&&(k=null);var A=!1;if(k===null)A=!0;else switch(I){case"bigint":case"string":case"number":A=!0;break;case"object":switch(k.$$typeof){case s:case i:A=!0;break;case w:return A=k._init,H(A(k._payload),z,ee,se,ye)}}if(A)return ye=ye(k),A=se===""?"."+ze(k,0):se,_e(ye)?(ee="",A!=null&&(ee=A.replace(tn,"$&/")+"/"),H(ye,z,ee,"",function(Oe){return Oe})):ye!=null&&(Ye(ye)&&(ye=Se(ye,ee+(ye.key==null||k&&k.key===ye.key?"":(""+ye.key).replace(tn,"$&/")+"/")+A)),z.push(ye)),1;A=0;var ae=se===""?".":se+":";if(_e(k))for(var ge=0;ge<k.length;ge++)se=k[ge],I=ae+ze(se,ge),A+=H(se,z,ee,I,ye);else if(ge=D(k),typeof ge=="function")for(k=ge.call(k),ge=0;!(se=k.next()).done;)se=se.value,I=ae+ze(se,ge++),A+=H(se,z,ee,I,ye);else if(I==="object"){if(typeof k.then=="function")return H(Ve(k),z,ee,se,ye);throw z=String(k),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return A}function ne(k,z,ee){if(k==null)return k;var se=[],ye=0;return H(k,se,"","",function(I){return z.call(ee,I,ye++)}),se}function ce(k){if(k._status===-1){var z=k._result;z=z(),z.then(function(ee){(k._status===0||k._status===-1)&&(k._status=1,k._result=ee)},function(ee){(k._status===0||k._status===-1)&&(k._status=2,k._result=ee)}),k._status===-1&&(k._status=0,k._result=z)}if(k._status===1)return k._result.default;throw k._result}var me=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)},Ee={map:ne,forEach:function(k,z,ee){ne(k,function(){z.apply(this,arguments)},ee)},count:function(k){var z=0;return ne(k,function(){z++}),z},toArray:function(k){return ne(k,function(z){return z})||[]},only:function(k){if(!Ye(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return Ne.Activity=S,Ne.Children=Ee,Ne.Component=P,Ne.Fragment=c,Ne.Profiler=f,Ne.PureComponent=re,Ne.StrictMode=a,Ne.Suspense=g,Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,Ne.__COMPILER_RUNTIME={__proto__:null,c:function(k){return Q.H.useMemoCache(k)}},Ne.cache=function(k){return function(){return k.apply(null,arguments)}},Ne.cacheSignal=function(){return null},Ne.cloneElement=function(k,z,ee){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var se=K({},k.props),ye=k.key;if(z!=null)for(I in z.key!==void 0&&(ye=""+z.key),z)!J.call(z,I)||I==="key"||I==="__self"||I==="__source"||I==="ref"&&z.ref===void 0||(se[I]=z[I]);var I=arguments.length-2;if(I===1)se.children=ee;else if(1<I){for(var A=Array(I),ae=0;ae<I;ae++)A[ae]=arguments[ae+2];se.children=A}return ke(k.type,ye,se)},Ne.createContext=function(k){return k={$$typeof:b,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:h,_context:k},k},Ne.createElement=function(k,z,ee){var se,ye={},I=null;if(z!=null)for(se in z.key!==void 0&&(I=""+z.key),z)J.call(z,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(ye[se]=z[se]);var A=arguments.length-2;if(A===1)ye.children=ee;else if(1<A){for(var ae=Array(A),ge=0;ge<A;ge++)ae[ge]=arguments[ge+2];ye.children=ae}if(k&&k.defaultProps)for(se in A=k.defaultProps,A)ye[se]===void 0&&(ye[se]=A[se]);return ke(k,I,ye)},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(k){return{$$typeof:p,render:k}},Ne.isValidElement=Ye,Ne.lazy=function(k){return{$$typeof:w,_payload:{_status:-1,_result:k},_init:ce}},Ne.memo=function(k,z){return{$$typeof:y,type:k,compare:z===void 0?null:z}},Ne.startTransition=function(k){var z=Q.T,ee={};Q.T=ee;try{var se=k(),ye=Q.S;ye!==null&&ye(ee,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(pe,me)}catch(I){me(I)}finally{z!==null&&ee.types!==null&&(z.types=ee.types),Q.T=z}},Ne.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},Ne.use=function(k){return Q.H.use(k)},Ne.useActionState=function(k,z,ee){return Q.H.useActionState(k,z,ee)},Ne.useCallback=function(k,z){return Q.H.useCallback(k,z)},Ne.useContext=function(k){return Q.H.useContext(k)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(k,z){return Q.H.useDeferredValue(k,z)},Ne.useEffect=function(k,z){return Q.H.useEffect(k,z)},Ne.useEffectEvent=function(k){return Q.H.useEffectEvent(k)},Ne.useId=function(){return Q.H.useId()},Ne.useImperativeHandle=function(k,z,ee){return Q.H.useImperativeHandle(k,z,ee)},Ne.useInsertionEffect=function(k,z){return Q.H.useInsertionEffect(k,z)},Ne.useLayoutEffect=function(k,z){return Q.H.useLayoutEffect(k,z)},Ne.useMemo=function(k,z){return Q.H.useMemo(k,z)},Ne.useOptimistic=function(k,z){return Q.H.useOptimistic(k,z)},Ne.useReducer=function(k,z,ee){return Q.H.useReducer(k,z,ee)},Ne.useRef=function(k){return Q.H.useRef(k)},Ne.useState=function(k){return Q.H.useState(k)},Ne.useSyncExternalStore=function(k,z,ee){return Q.H.useSyncExternalStore(k,z,ee)},Ne.useTransition=function(){return Q.H.useTransition()},Ne.version="19.2.7",Ne}var ah;function Xf(){return ah||(ah=1,xf.exports=eb()),xf.exports}var L=Xf();const cs=a_(L);var wf={exports:{}},ts={},Sf={exports:{}},Ef={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sh;function nb(){return sh||(sh=1,(function(s){function i(H,ne){var ce=H.length;H.push(ne);e:for(;0<ce;){var me=ce-1>>>1,Ee=H[me];if(0<f(Ee,ne))H[me]=ne,H[ce]=Ee,ce=me;else break e}}function c(H){return H.length===0?null:H[0]}function a(H){if(H.length===0)return null;var ne=H[0],ce=H.pop();if(ce!==ne){H[0]=ce;e:for(var me=0,Ee=H.length,k=Ee>>>1;me<k;){var z=2*(me+1)-1,ee=H[z],se=z+1,ye=H[se];if(0>f(ee,ce))se<Ee&&0>f(ye,ee)?(H[me]=ye,H[se]=ce,me=se):(H[me]=ee,H[z]=ce,me=z);else if(se<Ee&&0>f(ye,ce))H[me]=ye,H[se]=ce,me=se;else break e}}return ne}function f(H,ne){var ce=H.sortIndex-ne.sortIndex;return ce!==0?ce:H.id-ne.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var b=Date,p=b.now();s.unstable_now=function(){return b.now()-p}}var g=[],y=[],w=1,S=null,N=3,D=!1,U=!1,K=!1,q=!1,P=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;function ie(H){for(var ne=c(y);ne!==null;){if(ne.callback===null)a(y);else if(ne.startTime<=H)a(y),ne.sortIndex=ne.expirationTime,i(g,ne);else break;ne=c(y)}}function _e(H){if(K=!1,ie(H),!U)if(c(g)!==null)U=!0,pe||(pe=!0,W());else{var ne=c(y);ne!==null&&Ve(_e,ne.startTime-H)}}var pe=!1,Q=-1,J=5,ke=-1;function Se(){return q?!0:!(s.unstable_now()-ke<J)}function Ye(){if(q=!1,pe){var H=s.unstable_now();ke=H;var ne=!0;try{e:{U=!1,K&&(K=!1,G(Q),Q=-1),D=!0;var ce=N;try{n:{for(ie(H),S=c(g);S!==null&&!(S.expirationTime>H&&Se());){var me=S.callback;if(typeof me=="function"){S.callback=null,N=S.priorityLevel;var Ee=me(S.expirationTime<=H);if(H=s.unstable_now(),typeof Ee=="function"){S.callback=Ee,ie(H),ne=!0;break n}S===c(g)&&a(g),ie(H)}else a(g);S=c(g)}if(S!==null)ne=!0;else{var k=c(y);k!==null&&Ve(_e,k.startTime-H),ne=!1}}break e}finally{S=null,N=ce,D=!1}ne=void 0}}finally{ne?W():pe=!1}}}var W;if(typeof re=="function")W=function(){re(Ye)};else if(typeof MessageChannel<"u"){var tn=new MessageChannel,ze=tn.port2;tn.port1.onmessage=Ye,W=function(){ze.postMessage(null)}}else W=function(){P(Ye,0)};function Ve(H,ne){Q=P(function(){H(s.unstable_now())},ne)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return N},s.unstable_next=function(H){switch(N){case 1:case 2:case 3:var ne=3;break;default:ne=N}var ce=N;N=ne;try{return H()}finally{N=ce}},s.unstable_requestPaint=function(){q=!0},s.unstable_runWithPriority=function(H,ne){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ce=N;N=H;try{return ne()}finally{N=ce}},s.unstable_scheduleCallback=function(H,ne,ce){var me=s.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?me+ce:me):ce=me,H){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=ce+Ee,H={id:w++,callback:ne,priorityLevel:H,startTime:ce,expirationTime:Ee,sortIndex:-1},ce>me?(H.sortIndex=ce,i(y,H),c(g)===null&&H===c(y)&&(K?(G(Q),Q=-1):K=!0,Ve(_e,ce-me))):(H.sortIndex=Ee,i(g,H),U||D||(U=!0,pe||(pe=!0,W()))),H},s.unstable_shouldYield=Se,s.unstable_wrapCallback=function(H){var ne=N;return function(){var ce=N;N=ne;try{return H.apply(this,arguments)}finally{N=ce}}}})(Ef)),Ef}var oh;function tb(){return oh||(oh=1,Sf.exports=nb()),Sf.exports}var kf={exports:{}},Kn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ch;function lb(){if(ch)return Kn;ch=1;var s=Xf();function i(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)y+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var a={d:{f:c,r:function(){throw Error(i(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function h(g,y,w){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:S==null?null:""+S,children:g,containerInfo:y,implementation:w}}var b=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Kn.createPortal=function(g,y){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(i(299));return h(g,y,null,w)},Kn.flushSync=function(g){var y=b.T,w=a.p;try{if(b.T=null,a.p=2,g)return g()}finally{b.T=y,a.p=w,a.d.f()}},Kn.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(g,y))},Kn.prefetchDNS=function(g){typeof g=="string"&&a.d.D(g)},Kn.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var w=y.as,S=p(w,y.crossOrigin),N=typeof y.integrity=="string"?y.integrity:void 0,D=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;w==="style"?a.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:S,integrity:N,fetchPriority:D}):w==="script"&&a.d.X(g,{crossOrigin:S,integrity:N,fetchPriority:D,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Kn.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var w=p(y.as,y.crossOrigin);a.d.M(g,{crossOrigin:w,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(g)},Kn.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var w=y.as,S=p(w,y.crossOrigin);a.d.L(g,w,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Kn.preloadModule=function(g,y){if(typeof g=="string")if(y){var w=p(y.as,y.crossOrigin);a.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:w,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(g)},Kn.requestFormReset=function(g){a.d.r(g)},Kn.unstable_batchedUpdates=function(g,y){return g(y)},Kn.useFormState=function(g,y,w){return b.H.useFormState(g,y,w)},Kn.useFormStatus=function(){return b.H.useHostTransitionStatus()},Kn.version="19.2.7",Kn}var uh;function rb(){if(uh)return kf.exports;uh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),kf.exports=lb(),kf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fh;function ib(){if(fh)return ts;fh=1;var s=tb(),i=Xf(),c=rb();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function b(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(h(e)!==e)throw Error(a(188))}function y(e){var n=e.alternate;if(!n){if(n=h(e),n===null)throw Error(a(188));return n!==e?null:e}for(var t=e,l=n;;){var r=t.return;if(r===null)break;var o=r.alternate;if(o===null){if(l=r.return,l!==null){t=l;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===t)return g(r),e;if(o===l)return g(r),n;o=o.sibling}throw Error(a(188))}if(t.return!==l.return)t=r,l=o;else{for(var m=!1,v=r.child;v;){if(v===t){m=!0,t=r,l=o;break}if(v===l){m=!0,l=r,t=o;break}v=v.sibling}if(!m){for(v=o.child;v;){if(v===t){m=!0,t=o,l=r;break}if(v===l){m=!0,l=o,t=r;break}v=v.sibling}if(!m)throw Error(a(189))}}if(t.alternate!==l)throw Error(a(190))}if(t.tag!==3)throw Error(a(188));return t.stateNode.current===t?e:n}function w(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=w(e),n!==null)return n;e=e.sibling}return null}var S=Object.assign,N=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),re=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),_e=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),ke=Symbol.for("react.activity"),Se=Symbol.for("react.memo_cache_sentinel"),Ye=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=Ye&&e[Ye]||e["@@iterator"],typeof e=="function"?e:null)}var tn=Symbol.for("react.client.reference");function ze(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case P:return"Profiler";case q:return"StrictMode";case _e:return"Suspense";case pe:return"SuspenseList";case ke:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case U:return"Portal";case re:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case ie:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return n=e.displayName||null,n!==null?n:ze(e.type)||"Memo";case J:n=e._payload,e=e._init;try{return ze(e(n))}catch{}}return null}var Ve=Array.isArray,H=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},me=[],Ee=-1;function k(e){return{current:e}}function z(e){0>Ee||(e.current=me[Ee],me[Ee]=null,Ee--)}function ee(e,n){Ee++,me[Ee]=e.current,e.current=n}var se=k(null),ye=k(null),I=k(null),A=k(null);function ae(e,n){switch(ee(I,n),ee(ye,e),ee(se,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Np(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Np(n),e=Tp(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(se),ee(se,e)}function ge(){z(se),z(ye),z(I)}function Oe(e){e.memoizedState!==null&&ee(A,e);var n=se.current,t=Tp(n,e.type);n!==t&&(ee(ye,e),ee(se,t))}function Ge(e){ye.current===e&&(z(se),z(ye)),A.current===e&&(z(A),Za._currentValue=ce)}var de,De;function Sn(e){if(de===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);de=n&&n[1]||"",De=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+de+e+De}var Ae=!1;function hn(e,n){if(!e||Ae)return"";Ae=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(V){var B=V}Reflect.construct(e,[],X)}else{try{X.call()}catch(V){B=V}e.call(X.prototype)}}else{try{throw Error()}catch(V){B=V}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(V){if(V&&B&&typeof V.stack=="string")return[V.stack,B.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=l.DetermineComponentFrameRoot(),m=o[0],v=o[1];if(m&&v){var E=m.split(`
`),C=v.split(`
`);for(r=l=0;l<E.length&&!E[l].includes("DetermineComponentFrameRoot");)l++;for(;r<C.length&&!C[r].includes("DetermineComponentFrameRoot");)r++;if(l===E.length||r===C.length)for(l=E.length-1,r=C.length-1;1<=l&&0<=r&&E[l]!==C[r];)r--;for(;1<=l&&0<=r;l--,r--)if(E[l]!==C[r]){if(l!==1||r!==1)do if(l--,r--,0>r||E[l]!==C[r]){var F=`
`+E[l].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=l&&0<=r);break}}}finally{Ae=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Sn(t):""}function Fn(e,n){switch(e.tag){case 26:case 27:case 5:return Sn(e.type);case 16:return Sn("Lazy");case 13:return e.child!==n&&n!==null?Sn("Suspense Fallback"):Sn("Suspense");case 19:return Sn("SuspenseList");case 0:case 15:return hn(e.type,!1);case 11:return hn(e.type.render,!1);case 1:return hn(e.type,!0);case 31:return Sn("Activity");default:return""}}function jn(e){try{var n="",t=null;do n+=Fn(e,t),t=e,e=e.return;while(e);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var dl=Object.prototype.hasOwnProperty,Ft=s.unstable_scheduleCallback,Tt=s.unstable_cancelCallback,ui=s.unstable_shouldYield,Yl=s.unstable_requestPaint,En=s.unstable_now,Dr=s.unstable_getCurrentPriorityLevel,Fl=s.unstable_ImmediatePriority,la=s.unstable_UserBlockingPriority,Ar=s.unstable_NormalPriority,Qn=s.unstable_LowPriority,dt=s.unstable_IdlePriority,Jt=s.log,fi=s.unstable_setDisableYieldValue,Or=null,Dn=null;function mt(e){if(typeof Jt=="function"&&fi(e),Dn&&typeof Dn.setStrictMode=="function")try{Dn.setStrictMode(Or,e)}catch{}}var Un=Math.clz32?Math.clz32:pl,$l=Math.log,ml=Math.LN2;function pl(e){return e>>>=0,e===0?32:31-($l(e)/ml|0)|0}var pt=256,$n=262144,qe=4194304;function sn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function on(e,n,t){var l=e.pendingLanes;if(l===0)return 0;var r=0,o=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var v=l&134217727;return v!==0?(l=v&~o,l!==0?r=sn(l):(m&=v,m!==0?r=sn(m):t||(t=v&~e,t!==0&&(r=sn(t))))):(v=l&~o,v!==0?r=sn(v):m!==0?r=sn(m):t||(t=l&~e,t!==0&&(r=sn(t)))),r===0?0:n!==0&&n!==r&&(n&o)===0&&(o=r&-r,t=n&-n,o>=t||o===32&&(t&4194048)!==0)?n:r}function Bn(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function hc(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cr(){var e=qe;return qe<<=1,(qe&62914560)===0&&(qe=4194304),e}function el(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Br(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function hl(e,n,t,l,r,o){var m=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var v=e.entanglements,E=e.expirationTimes,C=e.hiddenUpdates;for(t=m&~t;0<t;){var F=31-Un(t),X=1<<F;v[F]=0,E[F]=-1;var B=C[F];if(B!==null)for(C[F]=null,F=0;F<B.length;F++){var V=B[F];V!==null&&(V.lane&=-536870913)}t&=~X}l!==0&&hs(e,l,0),o!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=o&~(m&~n))}function hs(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-Un(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|t&261930}function di(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var l=31-Un(t),r=1<<l;r&n|e[l]&n&&(e[l]|=n),t&=~r}}function _s(e,n){var t=n&-n;return t=(t&42)!==0?1:ql(t),(t&(e.suspendedLanes|n))!==0?0:t}function ql(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Rt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function fn(){var e=ne.p;return e!==0?e:(e=window.event,e===void 0?32:Qp(e.type))}function ra(e,n){var t=ne.p;try{return ne.p=e,n()}finally{ne.p=t}}var Hn=Math.random().toString(36).slice(2),_n="__reactFiber$"+Hn,An="__reactProps$"+Hn,ht="__reactContainer$"+Hn,Kl="__reactEvents$"+Hn,Mt="__reactListeners$"+Hn,_l="__reactHandles$"+Hn,Xl="__reactResources$"+Hn,Zn="__reactMarker$"+Hn;function nl(e){delete e[_n],delete e[An],delete e[Kl],delete e[Mt],delete e[_l]}function jt(e){var n=e[_n];if(n)return n;for(var t=e.parentNode;t;){if(n=t[ht]||t[_n]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Cp(e);e!==null;){if(t=e[_n])return t;e=Cp(e)}return n}e=t,t=e.parentNode}return null}function rt(e){if(e=e[_n]||e[ht]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function gl(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function Wn(e){var n=e[Xl];return n||(n=e[Xl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function cn(e){e[Zn]=!0}var tl=new Set,bl={};function it(e,n){yl(e,n),yl(e+"Capture",n)}function yl(e,n){for(bl[e]=n,e=0;e<n.length;e++)tl.add(n[e])}var Lr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zr={},Ur={};function Ql(e){return dl.call(Ur,e)?!0:dl.call(zr,e)?!1:Lr.test(e)?Ur[e]=!0:(zr[e]=!0,!1)}function $t(e,n,t){if(Ql(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function be(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function _t(e,n,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+l)}}function at(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gs(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function _c(e,n,t){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,o=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(m){t=""+m,o.call(this,m)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(m){t=""+m},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ia(e){if(!e._valueTracker){var n=gs(e)?"checked":"value";e._valueTracker=_c(e,n,""+e[n])}}function Zl(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),l="";return e&&(l=gs(e)?e.checked?"true":"false":e.value),e=l,e!==t?(n.setValue(e),!0):!1}function qt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var aa=/[\n"\\]/g;function dn(e){return e.replace(aa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Hr(e,n,t,l,r,o,m,v){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),n!=null?m==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+at(n)):e.value!==""+at(n)&&(e.value=""+at(n)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),n!=null?sa(e,m,at(n)):t!=null?sa(e,m,at(t)):l!=null&&e.removeAttribute("value"),r==null&&o!=null&&(e.defaultChecked=!!o),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+at(v):e.removeAttribute("name")}function Jn(e,n,t,l,r,o,m,v){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),n!=null||t!=null){if(!(o!=="submit"&&o!=="reset"||n!=null)){ia(e);return}t=t!=null?""+at(t):"",n=n!=null?""+at(n):t,v||n===e.value||(e.value=n),e.defaultValue=n}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=v?e.checked:!!l,e.defaultChecked=!!l,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),ia(e)}function sa(e,n,t){n==="number"&&qt(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Wl(e,n,t,l){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&l&&(e[t].defaultSelected=!0)}else{for(t=""+at(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function oa(e,n,t){if(n!=null&&(n=""+at(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+at(t):""}function mi(e,n,t,l){if(n==null){if(l!=null){if(t!=null)throw Error(a(92));if(Ve(l)){if(1<l.length)throw Error(a(93));l=l[0]}t=l}t==null&&(t=""),n=t}t=at(n),e.defaultValue=t,l=e.textContent,l===t&&l!==""&&l!==null&&(e.value=l),ia(e)}function Y(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var gc=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bs(e,n,t){var l=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,t):typeof t!="number"||t===0||gc.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function ys(e,n,t){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in n)l=n[r],n.hasOwnProperty(r)&&t[r]!==l&&bs(e,r,l)}else for(var o in n)n.hasOwnProperty(o)&&bs(e,o,n[o])}function vl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vs=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xs=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xl(e){return xs.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Xe(){}var pi=null;function Jl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dt=null,er=null;function ws(e){var n=rt(e);if(n&&(e=n.stateNode)){var t=e[An]||null;e:switch(e=n.stateNode,n.type){case"input":if(Hr(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+dn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var l=t[n];if(l!==e&&l.form===e.form){var r=l[An]||null;if(!r)throw Error(a(90));Hr(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(n=0;n<t.length;n++)l=t[n],l.form===e.form&&Zl(l)}break e;case"textarea":oa(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&Wl(e,!!t.multiple,n,!1)}}}var ca=!1;function ua(e,n,t){if(ca)return e(n,t);ca=!0;try{var l=e(n);return l}finally{if(ca=!1,(Dt!==null||er!==null)&&(Ro(),Dt&&(n=Dt,e=er,er=Dt=null,ws(n),e)))for(n=0;n<e.length;n++)ws(e[n])}}function Ir(e,n){var t=e.stateNode;if(t===null)return null;var l=t[An]||null;if(l===null)return null;t=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(a(231,n,typeof t));return t}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ot=!1;if(At)try{var Kt={};Object.defineProperty(Kt,"passive",{get:function(){Ot=!0}}),window.addEventListener("test",Kt,Kt),window.removeEventListener("test",Kt,Kt)}catch{Ot=!1}var ll=null,Ln=null,Vr=null;function hi(){if(Vr)return Vr;var e,n=Ln,t=n.length,l,r="value"in ll?ll.value:ll.textContent,o=r.length;for(e=0;e<t&&n[e]===r[e];e++);var m=t-e;for(l=1;l<=m&&n[t-l]===r[o-l];l++);return Vr=r.slice(e,1<l?1-l:void 0)}function yn(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function rl(){return!0}function Ss(){return!1}function qn(e){function n(t,l,r,o,m){this._reactName=t,this._targetInst=r,this.type=l,this.nativeEvent=o,this.target=m,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(t=e[v],this[v]=t?t(o):o[v]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?rl:Ss,this.isPropagationStopped=Ss,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),n}var gt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_i=qn(gt),nr=S({},gt,{view:0,detail:0}),gi=qn(nr),tr,bi,wl,yi=S({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:da,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wl&&(wl&&e.type==="mousemove"?(tr=e.screenX-wl.screenX,bi=e.screenY-wl.screenY):bi=tr=0,wl=e),tr)},movementY:function(e){return"movementY"in e?e.movementY:bi}}),Es=qn(yi),bc=S({},yi,{dataTransfer:0}),Ct=qn(bc),mn=S({},nr,{relatedTarget:0}),Gr=qn(mn),Pr=S({},gt,{animationName:0,elapsedTime:0,pseudoElement:0}),ks=qn(Pr),Ns=S({},gt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ts=qn(Ns),yc=S({},gt,{data:0}),Rs=qn(yc),vc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ms={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},js={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fa(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=js[e])?!!n[e]:!1}function da(){return fa}var Ds=S({},nr,{key:function(e){if(e.key){var n=vc[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=yn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ms[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:da,charCode:function(e){return e.type==="keypress"?yn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),As=qn(Ds),Os=S({},yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cs=qn(Os),xc=S({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:da}),Bs=qn(xc),ma=S({},gt,{propertyName:0,elapsedTime:0,pseudoElement:0}),wc=qn(ma),Sc=S({},yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ec=qn(Sc),kc=S({},gt,{newState:0,oldState:0}),Nc=qn(kc),Tc=[9,13,27,32],pa=At&&"CompositionEvent"in window,Yr=null;At&&"documentMode"in document&&(Yr=document.documentMode);var Rc=At&&"TextEvent"in window&&!Yr,Ls=At&&(!pa||Yr&&8<Yr&&11>=Yr),zs=" ",Sl=!1;function Us(e,n){switch(e){case"keyup":return Tc.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ha(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var El=!1;function Mc(e,n){switch(e){case"compositionend":return ha(n);case"keypress":return n.which!==32?null:(Sl=!0,zs);case"textInput":return e=n.data,e===zs&&Sl?null:e;default:return null}}function Hs(e,n){if(El)return e==="compositionend"||!pa&&Us(e,n)?(e=hi(),Vr=Ln=ll=null,El=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ls&&n.locale!=="ko"?null:n.data;default:return null}}var jc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Is(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!jc[e.type]:n==="textarea"}function _a(e,n,t,l){Dt?er?er.push(l):er=[l]:Dt=l,n=Bo(n,"onChange"),0<n.length&&(t=new _i("onChange","change",null,t,l),e.push({event:t,listeners:n}))}var Fr=null,$r=null;function Dc(e){vp(e,0)}function vi(e){var n=gl(e);if(Zl(n))return e}function Vs(e,n){if(e==="change")return n}var Gs=!1;if(At){var ga;if(At){var qr="oninput"in document;if(!qr){var bt=document.createElement("div");bt.setAttribute("oninput","return;"),qr=typeof bt.oninput=="function"}ga=qr}else ga=!1;Gs=ga&&(!document.documentMode||9<document.documentMode)}function ba(){Fr&&(Fr.detachEvent("onpropertychange",Ps),$r=Fr=null)}function Ps(e){if(e.propertyName==="value"&&vi($r)){var n=[];_a(n,$r,e,Jl(e)),ua(Dc,n)}}function Ac(e,n,t){e==="focusin"?(ba(),Fr=n,$r=t,Fr.attachEvent("onpropertychange",Ps)):e==="focusout"&&ba()}function ya(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vi($r)}function xi(e,n){if(e==="click")return vi(n)}function va(e,n){if(e==="input"||e==="change")return vi(n)}function Ys(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var kn=typeof Object.is=="function"?Object.is:Ys;function kl(e,n){if(kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),l=Object.keys(n);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var r=t[l];if(!dl.call(n,r)||!kn(e[r],n[r]))return!1}return!0}function xa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fs(e,n){var t=xa(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=n&&l>=n)return{node:t,offset:n-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=xa(t)}}function $s(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?$s(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function qs(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=qt(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=qt(e.document)}return n}function d(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var _=At&&"documentMode"in document&&11>=document.documentMode,x=null,M=null,R=null,Z=!1;function oe(e,n,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Z||x==null||x!==qt(l)||(l=x,"selectionStart"in l&&d(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),R&&kl(R,l)||(R=l,l=Bo(M,"onSelect"),0<l.length&&(n=new _i("onSelect","select",null,n,t),e.push({event:n,listeners:l}),n.target=x)))}function Ce(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var xe={animationend:Ce("Animation","AnimationEnd"),animationiteration:Ce("Animation","AnimationIteration"),animationstart:Ce("Animation","AnimationStart"),transitionrun:Ce("Transition","TransitionRun"),transitionstart:Ce("Transition","TransitionStart"),transitioncancel:Ce("Transition","TransitionCancel"),transitionend:Ce("Transition","TransitionEnd")},Pe={},pn={};At&&(pn=document.createElement("div").style,"AnimationEvent"in window||(delete xe.animationend.animation,delete xe.animationiteration.animation,delete xe.animationstart.animation),"TransitionEvent"in window||delete xe.transitionend.transition);function vn(e){if(Pe[e])return Pe[e];if(!xe[e])return e;var n=xe[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in pn)return Pe[e]=n[t];return e}var Me=vn("animationend"),ln=vn("animationiteration"),il=vn("animationstart"),Xt=vn("transitionrun"),Qt=vn("transitionstart"),lr=vn("transitioncancel"),Nl=vn("transitionend"),wa=new Map,rr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rr.push("scrollEnd");function et(e,n){wa.set(e,n),it(n,[e])}var al=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},nt=[],wi=0,Oc=0;function Ks(){for(var e=wi,n=Oc=wi=0;n<e;){var t=nt[n];nt[n++]=null;var l=nt[n];nt[n++]=null;var r=nt[n];nt[n++]=null;var o=nt[n];if(nt[n++]=null,l!==null&&r!==null){var m=l.pending;m===null?r.next=r:(r.next=m.next,m.next=r),l.pending=r}o!==0&&nd(t,r,o)}}function Xs(e,n,t,l){nt[wi++]=e,nt[wi++]=n,nt[wi++]=t,nt[wi++]=l,Oc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Cc(e,n,t,l){return Xs(e,n,t,l),Qs(e)}function Kr(e,n){return Xs(e,null,null,n),Qs(e)}function nd(e,n,t){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t);for(var r=!1,o=e.return;o!==null;)o.childLanes|=t,l=o.alternate,l!==null&&(l.childLanes|=t),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(r=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,r&&n!==null&&(r=31-Un(t),e=o.hiddenUpdates,l=e[r],l===null?e[r]=[n]:l.push(n),n.lane=t|536870912),o):null}function Qs(e){if(50<Ya)throw Ya=0,Pu=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Si={};function O_(e,n,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,n,t,l){return new O_(e,n,t,l)}function Bc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tl(e,n){var t=e.alternate;return t===null?(t=yt(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function td(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Zs(e,n,t,l,r,o){var m=0;if(l=e,typeof e=="function")Bc(e)&&(m=1);else if(typeof e=="string")m=Ug(e,t,se.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ke:return e=yt(31,t,n,r),e.elementType=ke,e.lanes=o,e;case K:return Xr(t.children,r,o,n);case q:m=8,r|=24;break;case P:return e=yt(12,t,n,r|2),e.elementType=P,e.lanes=o,e;case _e:return e=yt(13,t,n,r),e.elementType=_e,e.lanes=o,e;case pe:return e=yt(19,t,n,r),e.elementType=pe,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case re:m=10;break e;case G:m=9;break e;case ie:m=11;break e;case Q:m=14;break e;case J:m=16,l=null;break e}m=29,t=Error(a(130,e===null?"null":typeof e,"")),l=null}return n=yt(m,t,n,r),n.elementType=e,n.type=l,n.lanes=o,n}function Xr(e,n,t,l){return e=yt(7,e,l,n),e.lanes=t,e}function Lc(e,n,t){return e=yt(6,e,null,n),e.lanes=t,e}function ld(e){var n=yt(18,null,null,0);return n.stateNode=e,n}function zc(e,n,t){return n=yt(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var rd=new WeakMap;function Bt(e,n){if(typeof e=="object"&&e!==null){var t=rd.get(e);return t!==void 0?t:(n={value:e,source:n,stack:jn(n)},rd.set(e,n),n)}return{value:e,source:n,stack:jn(n)}}var Ei=[],ki=0,Ws=null,Sa=0,Lt=[],zt=0,ir=null,sl=1,ol="";function Rl(e,n){Ei[ki++]=Sa,Ei[ki++]=Ws,Ws=e,Sa=n}function id(e,n,t){Lt[zt++]=sl,Lt[zt++]=ol,Lt[zt++]=ir,ir=e;var l=sl;e=ol;var r=32-Un(l)-1;l&=~(1<<r),t+=1;var o=32-Un(n)+r;if(30<o){var m=r-r%5;o=(l&(1<<m)-1).toString(32),l>>=m,r-=m,sl=1<<32-Un(n)+r|t<<r|l,ol=o+e}else sl=1<<o|t<<r|l,ol=e}function Uc(e){e.return!==null&&(Rl(e,1),id(e,1,0))}function Hc(e){for(;e===Ws;)Ws=Ei[--ki],Ei[ki]=null,Sa=Ei[--ki],Ei[ki]=null;for(;e===ir;)ir=Lt[--zt],Lt[zt]=null,ol=Lt[--zt],Lt[zt]=null,sl=Lt[--zt],Lt[zt]=null}function ad(e,n){Lt[zt++]=sl,Lt[zt++]=ol,Lt[zt++]=ir,sl=n.id,ol=n.overflow,ir=e}var In=null,rn=null,Ie=!1,ar=null,Ut=!1,Ic=Error(a(519));function sr(e){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ea(Bt(n,e)),Ic}function sd(e){var n=e.stateNode,t=e.type,l=e.memoizedProps;switch(n[_n]=e,n[An]=l,t){case"dialog":Le("cancel",n),Le("close",n);break;case"iframe":case"object":case"embed":Le("load",n);break;case"video":case"audio":for(t=0;t<$a.length;t++)Le($a[t],n);break;case"source":Le("error",n);break;case"img":case"image":case"link":Le("error",n),Le("load",n);break;case"details":Le("toggle",n);break;case"input":Le("invalid",n),Jn(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Le("invalid",n);break;case"textarea":Le("invalid",n),mi(n,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||l.suppressHydrationWarning===!0||Ep(n.textContent,t)?(l.popover!=null&&(Le("beforetoggle",n),Le("toggle",n)),l.onScroll!=null&&Le("scroll",n),l.onScrollEnd!=null&&Le("scrollend",n),l.onClick!=null&&(n.onclick=Xe),n=!0):n=!1,n||sr(e,!0)}function od(e){for(In=e.return;In;)switch(In.tag){case 5:case 31:case 13:Ut=!1;return;case 27:case 3:Ut=!0;return;default:In=In.return}}function Ni(e){if(e!==In)return!1;if(!Ie)return od(e),Ie=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||rf(e.type,e.memoizedProps)),t=!t),t&&rn&&sr(e),od(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));rn=Op(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));rn=Op(e)}else n===27?(n=rn,xr(e.type)?(e=uf,uf=null,rn=e):rn=n):rn=In?It(e.stateNode.nextSibling):null;return!0}function Qr(){rn=In=null,Ie=!1}function Vc(){var e=ar;return e!==null&&(ut===null?ut=e:ut.push.apply(ut,e),ar=null),e}function Ea(e){ar===null?ar=[e]:ar.push(e)}var Gc=k(null),Zr=null,Ml=null;function or(e,n,t){ee(Gc,n._currentValue),n._currentValue=t}function jl(e){e._currentValue=Gc.current,z(Gc)}function Pc(e,n,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===t)break;e=e.return}}function Yc(e,n,t,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var o=r.dependencies;if(o!==null){var m=r.child;o=o.firstContext;e:for(;o!==null;){var v=o;o=r;for(var E=0;E<n.length;E++)if(v.context===n[E]){o.lanes|=t,v=o.alternate,v!==null&&(v.lanes|=t),Pc(o.return,t,e),l||(m=null);break e}o=v.next}}else if(r.tag===18){if(m=r.return,m===null)throw Error(a(341));m.lanes|=t,o=m.alternate,o!==null&&(o.lanes|=t),Pc(m,t,e),m=null}else m=r.child;if(m!==null)m.return=r;else for(m=r;m!==null;){if(m===e){m=null;break}if(r=m.sibling,r!==null){r.return=m.return,m=r;break}m=m.return}r=m}}function Ti(e,n,t,l){e=null;for(var r=n,o=!1;r!==null;){if(!o){if((r.flags&524288)!==0)o=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var m=r.alternate;if(m===null)throw Error(a(387));if(m=m.memoizedProps,m!==null){var v=r.type;kn(r.pendingProps.value,m.value)||(e!==null?e.push(v):e=[v])}}else if(r===A.current){if(m=r.alternate,m===null)throw Error(a(387));m.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Za):e=[Za])}r=r.return}e!==null&&Yc(n,e,t,l),n.flags|=262144}function Js(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Wr(e){Zr=e,Ml=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Vn(e){return cd(Zr,e)}function eo(e,n){return Zr===null&&Wr(e),cd(e,n)}function cd(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},Ml===null){if(e===null)throw Error(a(308));Ml=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ml=Ml.next=n;return t}var C_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},B_=s.unstable_scheduleCallback,L_=s.unstable_NormalPriority,Nn={$$typeof:re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fc(){return{controller:new C_,data:new Map,refCount:0}}function ka(e){e.refCount--,e.refCount===0&&B_(L_,function(){e.controller.abort()})}var Na=null,$c=0,Ri=0,Mi=null;function z_(e,n){if(Na===null){var t=Na=[];$c=0,Ri=Xu(),Mi={status:"pending",value:void 0,then:function(l){t.push(l)}}}return $c++,n.then(ud,ud),n}function ud(){if(--$c===0&&Na!==null){Mi!==null&&(Mi.status="fulfilled");var e=Na;Na=null,Ri=0,Mi=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function U_(e,n){var t=[],l={status:"pending",value:null,reason:null,then:function(r){t.push(r)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var r=0;r<t.length;r++)(0,t[r])(n)},function(r){for(l.status="rejected",l.reason=r,r=0;r<t.length;r++)(0,t[r])(void 0)}),l}var fd=H.S;H.S=function(e,n){Km=En(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&z_(e,n),fd!==null&&fd(e,n)};var Jr=k(null);function qc(){var e=Jr.current;return e!==null?e:nn.pooledCache}function no(e,n){n===null?ee(Jr,Jr.current):ee(Jr,n.pool)}function dd(){var e=qc();return e===null?null:{parent:Nn._currentValue,pool:e}}var ji=Error(a(460)),Kc=Error(a(474)),to=Error(a(542)),lo={then:function(){}};function md(e){return e=e.status,e==="fulfilled"||e==="rejected"}function pd(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(Xe,Xe),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,_d(e),e;default:if(typeof n.status=="string")n.then(Xe,Xe);else{if(e=nn,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var r=n;r.status="fulfilled",r.value=l}},function(l){if(n.status==="pending"){var r=n;r.status="rejected",r.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,_d(e),e}throw ni=n,ji}}function ei(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(ni=t,ji):t}}var ni=null;function hd(){if(ni===null)throw Error(a(459));var e=ni;return ni=null,e}function _d(e){if(e===ji||e===to)throw Error(a(483))}var Di=null,Ta=0;function ro(e){var n=Ta;return Ta+=1,Di===null&&(Di=[]),pd(Di,e,n)}function Ra(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function io(e,n){throw n.$$typeof===N?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function gd(e){function n(j,T){if(e){var O=j.deletions;O===null?(j.deletions=[T],j.flags|=16):O.push(T)}}function t(j,T){if(!e)return null;for(;T!==null;)n(j,T),T=T.sibling;return null}function l(j){for(var T=new Map;j!==null;)j.key!==null?T.set(j.key,j):T.set(j.index,j),j=j.sibling;return T}function r(j,T){return j=Tl(j,T),j.index=0,j.sibling=null,j}function o(j,T,O){return j.index=O,e?(O=j.alternate,O!==null?(O=O.index,O<T?(j.flags|=67108866,T):O):(j.flags|=67108866,T)):(j.flags|=1048576,T)}function m(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function v(j,T,O,$){return T===null||T.tag!==6?(T=Lc(O,j.mode,$),T.return=j,T):(T=r(T,O),T.return=j,T)}function E(j,T,O,$){var ve=O.type;return ve===K?F(j,T,O.props.children,$,O.key):T!==null&&(T.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===J&&ei(ve)===T.type)?(T=r(T,O.props),Ra(T,O),T.return=j,T):(T=Zs(O.type,O.key,O.props,null,j.mode,$),Ra(T,O),T.return=j,T)}function C(j,T,O,$){return T===null||T.tag!==4||T.stateNode.containerInfo!==O.containerInfo||T.stateNode.implementation!==O.implementation?(T=zc(O,j.mode,$),T.return=j,T):(T=r(T,O.children||[]),T.return=j,T)}function F(j,T,O,$,ve){return T===null||T.tag!==7?(T=Xr(O,j.mode,$,ve),T.return=j,T):(T=r(T,O),T.return=j,T)}function X(j,T,O){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=Lc(""+T,j.mode,O),T.return=j,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case D:return O=Zs(T.type,T.key,T.props,null,j.mode,O),Ra(O,T),O.return=j,O;case U:return T=zc(T,j.mode,O),T.return=j,T;case J:return T=ei(T),X(j,T,O)}if(Ve(T)||W(T))return T=Xr(T,j.mode,O,null),T.return=j,T;if(typeof T.then=="function")return X(j,ro(T),O);if(T.$$typeof===re)return X(j,eo(j,T),O);io(j,T)}return null}function B(j,T,O,$){var ve=T!==null?T.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return ve!==null?null:v(j,T,""+O,$);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case D:return O.key===ve?E(j,T,O,$):null;case U:return O.key===ve?C(j,T,O,$):null;case J:return O=ei(O),B(j,T,O,$)}if(Ve(O)||W(O))return ve!==null?null:F(j,T,O,$,null);if(typeof O.then=="function")return B(j,T,ro(O),$);if(O.$$typeof===re)return B(j,T,eo(j,O),$);io(j,O)}return null}function V(j,T,O,$,ve){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return j=j.get(O)||null,v(T,j,""+$,ve);if(typeof $=="object"&&$!==null){switch($.$$typeof){case D:return j=j.get($.key===null?O:$.key)||null,E(T,j,$,ve);case U:return j=j.get($.key===null?O:$.key)||null,C(T,j,$,ve);case J:return $=ei($),V(j,T,O,$,ve)}if(Ve($)||W($))return j=j.get(O)||null,F(T,j,$,ve,null);if(typeof $.then=="function")return V(j,T,O,ro($),ve);if($.$$typeof===re)return V(j,T,O,eo(T,$),ve);io(T,$)}return null}function ue(j,T,O,$){for(var ve=null,Fe=null,he=T,je=T=0,He=null;he!==null&&je<O.length;je++){he.index>je?(He=he,he=null):He=he.sibling;var $e=B(j,he,O[je],$);if($e===null){he===null&&(he=He);break}e&&he&&$e.alternate===null&&n(j,he),T=o($e,T,je),Fe===null?ve=$e:Fe.sibling=$e,Fe=$e,he=He}if(je===O.length)return t(j,he),Ie&&Rl(j,je),ve;if(he===null){for(;je<O.length;je++)he=X(j,O[je],$),he!==null&&(T=o(he,T,je),Fe===null?ve=he:Fe.sibling=he,Fe=he);return Ie&&Rl(j,je),ve}for(he=l(he);je<O.length;je++)He=V(he,j,je,O[je],$),He!==null&&(e&&He.alternate!==null&&he.delete(He.key===null?je:He.key),T=o(He,T,je),Fe===null?ve=He:Fe.sibling=He,Fe=He);return e&&he.forEach(function(Nr){return n(j,Nr)}),Ie&&Rl(j,je),ve}function we(j,T,O,$){if(O==null)throw Error(a(151));for(var ve=null,Fe=null,he=T,je=T=0,He=null,$e=O.next();he!==null&&!$e.done;je++,$e=O.next()){he.index>je?(He=he,he=null):He=he.sibling;var Nr=B(j,he,$e.value,$);if(Nr===null){he===null&&(he=He);break}e&&he&&Nr.alternate===null&&n(j,he),T=o(Nr,T,je),Fe===null?ve=Nr:Fe.sibling=Nr,Fe=Nr,he=He}if($e.done)return t(j,he),Ie&&Rl(j,je),ve;if(he===null){for(;!$e.done;je++,$e=O.next())$e=X(j,$e.value,$),$e!==null&&(T=o($e,T,je),Fe===null?ve=$e:Fe.sibling=$e,Fe=$e);return Ie&&Rl(j,je),ve}for(he=l(he);!$e.done;je++,$e=O.next())$e=V(he,j,je,$e.value,$),$e!==null&&(e&&$e.alternate!==null&&he.delete($e.key===null?je:$e.key),T=o($e,T,je),Fe===null?ve=$e:Fe.sibling=$e,Fe=$e);return e&&he.forEach(function(Xg){return n(j,Xg)}),Ie&&Rl(j,je),ve}function en(j,T,O,$){if(typeof O=="object"&&O!==null&&O.type===K&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case D:e:{for(var ve=O.key;T!==null;){if(T.key===ve){if(ve=O.type,ve===K){if(T.tag===7){t(j,T.sibling),$=r(T,O.props.children),$.return=j,j=$;break e}}else if(T.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===J&&ei(ve)===T.type){t(j,T.sibling),$=r(T,O.props),Ra($,O),$.return=j,j=$;break e}t(j,T);break}else n(j,T);T=T.sibling}O.type===K?($=Xr(O.props.children,j.mode,$,O.key),$.return=j,j=$):($=Zs(O.type,O.key,O.props,null,j.mode,$),Ra($,O),$.return=j,j=$)}return m(j);case U:e:{for(ve=O.key;T!==null;){if(T.key===ve)if(T.tag===4&&T.stateNode.containerInfo===O.containerInfo&&T.stateNode.implementation===O.implementation){t(j,T.sibling),$=r(T,O.children||[]),$.return=j,j=$;break e}else{t(j,T);break}else n(j,T);T=T.sibling}$=zc(O,j.mode,$),$.return=j,j=$}return m(j);case J:return O=ei(O),en(j,T,O,$)}if(Ve(O))return ue(j,T,O,$);if(W(O)){if(ve=W(O),typeof ve!="function")throw Error(a(150));return O=ve.call(O),we(j,T,O,$)}if(typeof O.then=="function")return en(j,T,ro(O),$);if(O.$$typeof===re)return en(j,T,eo(j,O),$);io(j,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,T!==null&&T.tag===6?(t(j,T.sibling),$=r(T,O),$.return=j,j=$):(t(j,T),$=Lc(O,j.mode,$),$.return=j,j=$),m(j)):t(j,T)}return function(j,T,O,$){try{Ta=0;var ve=en(j,T,O,$);return Di=null,ve}catch(he){if(he===ji||he===to)throw he;var Fe=yt(29,he,null,j.mode);return Fe.lanes=$,Fe.return=j,Fe}finally{}}}var ti=gd(!0),bd=gd(!1),cr=!1;function Xc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ur(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function fr(e,n,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ke&2)!==0){var r=l.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n,n=Qs(e),nd(e,null,t),n}return Xs(e,l,n,t),Qs(e)}function Ma(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,di(e,t)}}function Zc(e,n){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var r=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var m={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};o===null?r=o=m:o=o.next=m,t=t.next}while(t!==null);o===null?r=o=n:o=o.next=n}else r=o=n;t={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:l.shared,callbacks:l.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var Wc=!1;function ja(){if(Wc){var e=Mi;if(e!==null)throw e}}function Da(e,n,t,l){Wc=!1;var r=e.updateQueue;cr=!1;var o=r.firstBaseUpdate,m=r.lastBaseUpdate,v=r.shared.pending;if(v!==null){r.shared.pending=null;var E=v,C=E.next;E.next=null,m===null?o=C:m.next=C,m=E;var F=e.alternate;F!==null&&(F=F.updateQueue,v=F.lastBaseUpdate,v!==m&&(v===null?F.firstBaseUpdate=C:v.next=C,F.lastBaseUpdate=E))}if(o!==null){var X=r.baseState;m=0,F=C=E=null,v=o;do{var B=v.lane&-536870913,V=B!==v.lane;if(V?(Ue&B)===B:(l&B)===B){B!==0&&B===Ri&&(Wc=!0),F!==null&&(F=F.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var ue=e,we=v;B=n;var en=t;switch(we.tag){case 1:if(ue=we.payload,typeof ue=="function"){X=ue.call(en,X,B);break e}X=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=we.payload,B=typeof ue=="function"?ue.call(en,X,B):ue,B==null)break e;X=S({},X,B);break e;case 2:cr=!0}}B=v.callback,B!==null&&(e.flags|=64,V&&(e.flags|=8192),V=r.callbacks,V===null?r.callbacks=[B]:V.push(B))}else V={lane:B,tag:v.tag,payload:v.payload,callback:v.callback,next:null},F===null?(C=F=V,E=X):F=F.next=V,m|=B;if(v=v.next,v===null){if(v=r.shared.pending,v===null)break;V=v,v=V.next,V.next=null,r.lastBaseUpdate=V,r.shared.pending=null}}while(!0);F===null&&(E=X),r.baseState=E,r.firstBaseUpdate=C,r.lastBaseUpdate=F,o===null&&(r.shared.lanes=0),_r|=m,e.lanes=m,e.memoizedState=X}}function yd(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function vd(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)yd(t[e],n)}var Ai=k(null),ao=k(0);function xd(e,n){e=Hl,ee(ao,e),ee(Ai,n),Hl=e|n.baseLanes}function Jc(){ee(ao,Hl),ee(Ai,Ai.current)}function eu(){Hl=ao.current,z(Ai),z(ao)}var vt=k(null),Ht=null;function dr(e){var n=e.alternate;ee(xn,xn.current&1),ee(vt,e),Ht===null&&(n===null||Ai.current!==null||n.memoizedState!==null)&&(Ht=e)}function nu(e){ee(xn,xn.current),ee(vt,e),Ht===null&&(Ht=e)}function wd(e){e.tag===22?(ee(xn,xn.current),ee(vt,e),Ht===null&&(Ht=e)):mr()}function mr(){ee(xn,xn.current),ee(vt,vt.current)}function xt(e){z(vt),Ht===e&&(Ht=null),z(xn)}var xn=k(0);function so(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||of(t)||cf(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Dl=0,Re=null,We=null,Tn=null,oo=!1,Oi=!1,li=!1,co=0,Aa=0,Ci=null,H_=0;function gn(){throw Error(a(321))}function tu(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!kn(e[t],n[t]))return!1;return!0}function lu(e,n,t,l,r,o){return Dl=o,Re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,H.H=e===null||e.memoizedState===null?im:bu,li=!1,o=t(l,r),li=!1,Oi&&(o=Ed(n,t,l,r)),Sd(e),o}function Sd(e){H.H=Ba;var n=We!==null&&We.next!==null;if(Dl=0,Tn=We=Re=null,oo=!1,Aa=0,Ci=null,n)throw Error(a(300));e===null||Rn||(e=e.dependencies,e!==null&&Js(e)&&(Rn=!0))}function Ed(e,n,t,l){Re=e;var r=0;do{if(Oi&&(Ci=null),Aa=0,Oi=!1,25<=r)throw Error(a(301));if(r+=1,Tn=We=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}H.H=am,o=n(t,l)}while(Oi);return o}function I_(){var e=H.H,n=e.useState()[0];return n=typeof n.then=="function"?Oa(n):n,e=e.useState()[0],(We!==null?We.memoizedState:null)!==e&&(Re.flags|=1024),n}function ru(){var e=co!==0;return co=0,e}function iu(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function au(e){if(oo){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}oo=!1}Dl=0,Tn=We=Re=null,Oi=!1,Aa=co=0,Ci=null}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?Re.memoizedState=Tn=e:Tn=Tn.next=e,Tn}function wn(){if(We===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var n=Tn===null?Re.memoizedState:Tn.next;if(n!==null)Tn=n,We=e;else{if(e===null)throw Re.alternate===null?Error(a(467)):Error(a(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Tn===null?Re.memoizedState=Tn=e:Tn=Tn.next=e}return Tn}function uo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Oa(e){var n=Aa;return Aa+=1,Ci===null&&(Ci=[]),e=pd(Ci,e,n),n=Re,(Tn===null?n.memoizedState:Tn.next)===null&&(n=n.alternate,H.H=n===null||n.memoizedState===null?im:bu),e}function fo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Oa(e);if(e.$$typeof===re)return Vn(e)}throw Error(a(438,String(e)))}function su(e){var n=null,t=Re.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var l=Re.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(r){return r.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=uo(),Re.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),l=0;l<e;l++)t[l]=Se;return n.index++,t}function Al(e,n){return typeof n=="function"?n(e):n}function mo(e){var n=wn();return ou(n,We,e)}function ou(e,n,t){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=t;var r=e.baseQueue,o=l.pending;if(o!==null){if(r!==null){var m=r.next;r.next=o.next,o.next=m}n.baseQueue=r=o,l.pending=null}if(o=e.baseState,r===null)e.memoizedState=o;else{n=r.next;var v=m=null,E=null,C=n,F=!1;do{var X=C.lane&-536870913;if(X!==C.lane?(Ue&X)===X:(Dl&X)===X){var B=C.revertLane;if(B===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),X===Ri&&(F=!0);else if((Dl&B)===B){C=C.next,B===Ri&&(F=!0);continue}else X={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},E===null?(v=E=X,m=o):E=E.next=X,Re.lanes|=B,_r|=B;X=C.action,li&&t(o,X),o=C.hasEagerState?C.eagerState:t(o,X)}else B={lane:X,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},E===null?(v=E=B,m=o):E=E.next=B,Re.lanes|=X,_r|=X;C=C.next}while(C!==null&&C!==n);if(E===null?m=o:E.next=v,!kn(o,e.memoizedState)&&(Rn=!0,F&&(t=Mi,t!==null)))throw t;e.memoizedState=o,e.baseState=m,e.baseQueue=E,l.lastRenderedState=o}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function cu(e){var n=wn(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var l=t.dispatch,r=t.pending,o=n.memoizedState;if(r!==null){t.pending=null;var m=r=r.next;do o=e(o,m.action),m=m.next;while(m!==r);kn(o,n.memoizedState)||(Rn=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,l]}function kd(e,n,t){var l=Re,r=wn(),o=Ie;if(o){if(t===void 0)throw Error(a(407));t=t()}else t=n();var m=!kn((We||r).memoizedState,t);if(m&&(r.memoizedState=t,Rn=!0),r=r.queue,du(Rd.bind(null,l,r,e),[e]),r.getSnapshot!==n||m||Tn!==null&&Tn.memoizedState.tag&1){if(l.flags|=2048,Bi(9,{destroy:void 0},Td.bind(null,l,r,t,n),null),nn===null)throw Error(a(349));o||(Dl&127)!==0||Nd(l,n,t)}return t}function Nd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Re.updateQueue,n===null?(n=uo(),Re.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Td(e,n,t,l){n.value=t,n.getSnapshot=l,Md(n)&&jd(e)}function Rd(e,n,t){return t(function(){Md(n)&&jd(e)})}function Md(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!kn(e,t)}catch{return!0}}function jd(e){var n=Kr(e,2);n!==null&&ft(n,e,2)}function uu(e){var n=tt();if(typeof e=="function"){var t=e;if(e=t(),li){mt(!0);try{t()}finally{mt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Al,lastRenderedState:e},n}function Dd(e,n,t,l){return e.baseState=t,ou(e,We,typeof l=="function"?l:Al)}function V_(e,n,t,l,r){if(_o(e))throw Error(a(485));if(e=n.action,e!==null){var o={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){o.listeners.push(m)}};H.T!==null?t(!0):o.isTransition=!1,l(o),t=n.pending,t===null?(o.next=n.pending=o,Ad(n,o)):(o.next=t.next,n.pending=t.next=o)}}function Ad(e,n){var t=n.action,l=n.payload,r=e.state;if(n.isTransition){var o=H.T,m={};H.T=m;try{var v=t(r,l),E=H.S;E!==null&&E(m,v),Od(e,n,v)}catch(C){fu(e,n,C)}finally{o!==null&&m.types!==null&&(o.types=m.types),H.T=o}}else try{o=t(r,l),Od(e,n,o)}catch(C){fu(e,n,C)}}function Od(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){Cd(e,n,l)},function(l){return fu(e,n,l)}):Cd(e,n,t)}function Cd(e,n,t){n.status="fulfilled",n.value=t,Bd(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,Ad(e,t)))}function fu(e,n,t){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=t,Bd(n),n=n.next;while(n!==l)}e.action=null}function Bd(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Ld(e,n){return n}function zd(e,n){if(Ie){var t=nn.formState;if(t!==null){e:{var l=Re;if(Ie){if(rn){n:{for(var r=rn,o=Ut;r.nodeType!==8;){if(!o){r=null;break n}if(r=It(r.nextSibling),r===null){r=null;break n}}o=r.data,r=o==="F!"||o==="F"?r:null}if(r){rn=It(r.nextSibling),l=r.data==="F!";break e}}sr(l)}l=!1}l&&(n=t[0])}}return t=tt(),t.memoizedState=t.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ld,lastRenderedState:n},t.queue=l,t=tm.bind(null,Re,l),l.dispatch=t,l=uu(!1),o=gu.bind(null,Re,!1,l.queue),l=tt(),r={state:n,dispatch:null,action:e,pending:null},l.queue=r,t=V_.bind(null,Re,r,o,t),r.dispatch=t,l.memoizedState=e,[n,t,!1]}function Ud(e){var n=wn();return Hd(n,We,e)}function Hd(e,n,t){if(n=ou(e,n,Ld)[0],e=mo(Al)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=Oa(n)}catch(m){throw m===ji?to:m}else l=n;n=wn();var r=n.queue,o=r.dispatch;return t!==n.memoizedState&&(Re.flags|=2048,Bi(9,{destroy:void 0},G_.bind(null,r,t),null)),[l,o,e]}function G_(e,n){e.action=n}function Id(e){var n=wn(),t=We;if(t!==null)return Hd(n,t,e);wn(),n=n.memoizedState,t=wn();var l=t.queue.dispatch;return t.memoizedState=e,[n,l,!1]}function Bi(e,n,t,l){return e={tag:e,create:t,deps:l,inst:n,next:null},n=Re.updateQueue,n===null&&(n=uo(),Re.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,n.lastEffect=e),e}function Vd(){return wn().memoizedState}function po(e,n,t,l){var r=tt();Re.flags|=e,r.memoizedState=Bi(1|n,{destroy:void 0},t,l===void 0?null:l)}function ho(e,n,t,l){var r=wn();l=l===void 0?null:l;var o=r.memoizedState.inst;We!==null&&l!==null&&tu(l,We.memoizedState.deps)?r.memoizedState=Bi(n,o,t,l):(Re.flags|=e,r.memoizedState=Bi(1|n,o,t,l))}function Gd(e,n){po(8390656,8,e,n)}function du(e,n){ho(2048,8,e,n)}function P_(e){Re.flags|=4;var n=Re.updateQueue;if(n===null)n=uo(),Re.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function Pd(e){var n=wn().memoizedState;return P_({ref:n,nextImpl:e}),function(){if((Ke&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function Yd(e,n){return ho(4,2,e,n)}function Fd(e,n){return ho(4,4,e,n)}function $d(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function qd(e,n,t){t=t!=null?t.concat([e]):null,ho(4,4,$d.bind(null,n,e),t)}function mu(){}function Kd(e,n){var t=wn();n=n===void 0?null:n;var l=t.memoizedState;return n!==null&&tu(n,l[1])?l[0]:(t.memoizedState=[e,n],e)}function Xd(e,n){var t=wn();n=n===void 0?null:n;var l=t.memoizedState;if(n!==null&&tu(n,l[1]))return l[0];if(l=e(),li){mt(!0);try{e()}finally{mt(!1)}}return t.memoizedState=[l,n],l}function pu(e,n,t){return t===void 0||(Dl&1073741824)!==0&&(Ue&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=Qm(),Re.lanes|=e,_r|=e,t)}function Qd(e,n,t,l){return kn(t,n)?t:Ai.current!==null?(e=pu(e,t,l),kn(e,n)||(Rn=!0),e):(Dl&42)===0||(Dl&1073741824)!==0&&(Ue&261930)===0?(Rn=!0,e.memoizedState=t):(e=Qm(),Re.lanes|=e,_r|=e,n)}function Zd(e,n,t,l,r){var o=ne.p;ne.p=o!==0&&8>o?o:8;var m=H.T,v={};H.T=v,gu(e,!1,n,t);try{var E=r(),C=H.S;if(C!==null&&C(v,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var F=U_(E,l);Ca(e,n,F,Et(e))}else Ca(e,n,l,Et(e))}catch(X){Ca(e,n,{then:function(){},status:"rejected",reason:X},Et())}finally{ne.p=o,m!==null&&v.types!==null&&(m.types=v.types),H.T=m}}function Y_(){}function hu(e,n,t,l){if(e.tag!==5)throw Error(a(476));var r=Wd(e).queue;Zd(e,r,n,ce,t===null?Y_:function(){return Jd(e),t(l)})}function Wd(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Al,lastRenderedState:ce},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Al,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Jd(e){var n=Wd(e);n.next===null&&(n=e.alternate.memoizedState),Ca(e,n.next.queue,{},Et())}function _u(){return Vn(Za)}function em(){return wn().memoizedState}function nm(){return wn().memoizedState}function F_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=Et();e=ur(t);var l=fr(n,e,t);l!==null&&(ft(l,n,t),Ma(l,n,t)),n={cache:Fc()},e.payload=n;return}n=n.return}}function $_(e,n,t){var l=Et();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},_o(e)?lm(n,t):(t=Cc(e,n,t,l),t!==null&&(ft(t,e,l),rm(t,n,l)))}function tm(e,n,t){var l=Et();Ca(e,n,t,l)}function Ca(e,n,t,l){var r={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(_o(e))lm(n,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var m=n.lastRenderedState,v=o(m,t);if(r.hasEagerState=!0,r.eagerState=v,kn(v,m))return Xs(e,n,r,0),nn===null&&Ks(),!1}catch{}finally{}if(t=Cc(e,n,r,l),t!==null)return ft(t,e,l),rm(t,n,l),!0}return!1}function gu(e,n,t,l){if(l={lane:2,revertLane:Xu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},_o(e)){if(n)throw Error(a(479))}else n=Cc(e,t,l,2),n!==null&&ft(n,e,2)}function _o(e){var n=e.alternate;return e===Re||n!==null&&n===Re}function lm(e,n){Oi=oo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function rm(e,n,t){if((t&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,di(e,t)}}var Ba={readContext:Vn,use:fo,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useLayoutEffect:gn,useInsertionEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useSyncExternalStore:gn,useId:gn,useHostTransitionStatus:gn,useFormState:gn,useActionState:gn,useOptimistic:gn,useMemoCache:gn,useCacheRefresh:gn};Ba.useEffectEvent=gn;var im={readContext:Vn,use:fo,useCallback:function(e,n){return tt().memoizedState=[e,n===void 0?null:n],e},useContext:Vn,useEffect:Gd,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,po(4194308,4,$d.bind(null,n,e),t)},useLayoutEffect:function(e,n){return po(4194308,4,e,n)},useInsertionEffect:function(e,n){po(4,2,e,n)},useMemo:function(e,n){var t=tt();n=n===void 0?null:n;var l=e();if(li){mt(!0);try{e()}finally{mt(!1)}}return t.memoizedState=[l,n],l},useReducer:function(e,n,t){var l=tt();if(t!==void 0){var r=t(n);if(li){mt(!0);try{t(n)}finally{mt(!1)}}}else r=n;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=$_.bind(null,Re,e),[l.memoizedState,e]},useRef:function(e){var n=tt();return e={current:e},n.memoizedState=e},useState:function(e){e=uu(e);var n=e.queue,t=tm.bind(null,Re,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:mu,useDeferredValue:function(e,n){var t=tt();return pu(t,e,n)},useTransition:function(){var e=uu(!1);return e=Zd.bind(null,Re,e.queue,!0,!1),tt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var l=Re,r=tt();if(Ie){if(t===void 0)throw Error(a(407));t=t()}else{if(t=n(),nn===null)throw Error(a(349));(Ue&127)!==0||Nd(l,n,t)}r.memoizedState=t;var o={value:t,getSnapshot:n};return r.queue=o,Gd(Rd.bind(null,l,o,e),[e]),l.flags|=2048,Bi(9,{destroy:void 0},Td.bind(null,l,o,t,n),null),t},useId:function(){var e=tt(),n=nn.identifierPrefix;if(Ie){var t=ol,l=sl;t=(l&~(1<<32-Un(l)-1)).toString(32)+t,n="_"+n+"R_"+t,t=co++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=H_++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:_u,useFormState:zd,useActionState:zd,useOptimistic:function(e){var n=tt();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=gu.bind(null,Re,!0,t),t.dispatch=n,[e,n]},useMemoCache:su,useCacheRefresh:function(){return tt().memoizedState=F_.bind(null,Re)},useEffectEvent:function(e){var n=tt(),t={impl:e};return n.memoizedState=t,function(){if((Ke&2)!==0)throw Error(a(440));return t.impl.apply(void 0,arguments)}}},bu={readContext:Vn,use:fo,useCallback:Kd,useContext:Vn,useEffect:du,useImperativeHandle:qd,useInsertionEffect:Yd,useLayoutEffect:Fd,useMemo:Xd,useReducer:mo,useRef:Vd,useState:function(){return mo(Al)},useDebugValue:mu,useDeferredValue:function(e,n){var t=wn();return Qd(t,We.memoizedState,e,n)},useTransition:function(){var e=mo(Al)[0],n=wn().memoizedState;return[typeof e=="boolean"?e:Oa(e),n]},useSyncExternalStore:kd,useId:em,useHostTransitionStatus:_u,useFormState:Ud,useActionState:Ud,useOptimistic:function(e,n){var t=wn();return Dd(t,We,e,n)},useMemoCache:su,useCacheRefresh:nm};bu.useEffectEvent=Pd;var am={readContext:Vn,use:fo,useCallback:Kd,useContext:Vn,useEffect:du,useImperativeHandle:qd,useInsertionEffect:Yd,useLayoutEffect:Fd,useMemo:Xd,useReducer:cu,useRef:Vd,useState:function(){return cu(Al)},useDebugValue:mu,useDeferredValue:function(e,n){var t=wn();return We===null?pu(t,e,n):Qd(t,We.memoizedState,e,n)},useTransition:function(){var e=cu(Al)[0],n=wn().memoizedState;return[typeof e=="boolean"?e:Oa(e),n]},useSyncExternalStore:kd,useId:em,useHostTransitionStatus:_u,useFormState:Id,useActionState:Id,useOptimistic:function(e,n){var t=wn();return We!==null?Dd(t,We,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:su,useCacheRefresh:nm};am.useEffectEvent=Pd;function yu(e,n,t,l){n=e.memoizedState,t=t(l,n),t=t==null?n:S({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var vu={enqueueSetState:function(e,n,t){e=e._reactInternals;var l=Et(),r=ur(l);r.payload=n,t!=null&&(r.callback=t),n=fr(e,r,l),n!==null&&(ft(n,e,l),Ma(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var l=Et(),r=ur(l);r.tag=1,r.payload=n,t!=null&&(r.callback=t),n=fr(e,r,l),n!==null&&(ft(n,e,l),Ma(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Et(),l=ur(t);l.tag=2,n!=null&&(l.callback=n),n=fr(e,l,t),n!==null&&(ft(n,e,t),Ma(n,e,t))}};function sm(e,n,t,l,r,o,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,o,m):n.prototype&&n.prototype.isPureReactComponent?!kl(t,l)||!kl(r,o):!0}function om(e,n,t,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,l),n.state!==e&&vu.enqueueReplaceState(n,n.state,null)}function ri(e,n){var t=n;if("ref"in n){t={};for(var l in n)l!=="ref"&&(t[l]=n[l])}if(e=e.defaultProps){t===n&&(t=S({},t));for(var r in e)t[r]===void 0&&(t[r]=e[r])}return t}function cm(e){al(e)}function um(e){console.error(e)}function fm(e){al(e)}function go(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function dm(e,n,t){try{var l=e.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function xu(e,n,t){return t=ur(t),t.tag=3,t.payload={element:null},t.callback=function(){go(e,n)},t}function mm(e){return e=ur(e),e.tag=3,e}function pm(e,n,t,l){var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var o=l.value;e.payload=function(){return r(o)},e.callback=function(){dm(n,t,l)}}var m=t.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){dm(n,t,l),typeof r!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var v=l.stack;this.componentDidCatch(l.value,{componentStack:v!==null?v:""})})}function q_(e,n,t,l,r){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=t.alternate,n!==null&&Ti(n,t,r,!0),t=vt.current,t!==null){switch(t.tag){case 31:case 13:return Ht===null?Mo():t.alternate===null&&bn===0&&(bn=3),t.flags&=-257,t.flags|=65536,t.lanes=r,l===lo?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([l]):n.add(l),$u(e,l,r)),!1;case 22:return t.flags|=65536,l===lo?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([l]):t.add(l)),$u(e,l,r)),!1}throw Error(a(435,t.tag))}return $u(e,l,r),Mo(),!1}if(Ie)return n=vt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=r,l!==Ic&&(e=Error(a(422),{cause:l}),Ea(Bt(e,t)))):(l!==Ic&&(n=Error(a(423),{cause:l}),Ea(Bt(n,t))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=Bt(l,t),r=xu(e.stateNode,l,r),Zc(e,r),bn!==4&&(bn=2)),!1;var o=Error(a(520),{cause:l});if(o=Bt(o,t),Pa===null?Pa=[o]:Pa.push(o),bn!==4&&(bn=2),n===null)return!0;l=Bt(l,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=r&-r,t.lanes|=e,e=xu(t.stateNode,l,e),Zc(t,e),!1;case 1:if(n=t.type,o=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(gr===null||!gr.has(o))))return t.flags|=65536,r&=-r,t.lanes|=r,r=mm(r),pm(r,e,t,l),Zc(t,r),!1}t=t.return}while(t!==null);return!1}var wu=Error(a(461)),Rn=!1;function Gn(e,n,t,l){n.child=e===null?bd(n,null,t,l):ti(n,e.child,t,l)}function hm(e,n,t,l,r){t=t.render;var o=n.ref;if("ref"in l){var m={};for(var v in l)v!=="ref"&&(m[v]=l[v])}else m=l;return Wr(n),l=lu(e,n,t,m,o,r),v=ru(),e!==null&&!Rn?(iu(e,n,r),Ol(e,n,r)):(Ie&&v&&Uc(n),n.flags|=1,Gn(e,n,l,r),n.child)}function _m(e,n,t,l,r){if(e===null){var o=t.type;return typeof o=="function"&&!Bc(o)&&o.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=o,gm(e,n,o,l,r)):(e=Zs(t.type,null,l,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!ju(e,r)){var m=o.memoizedProps;if(t=t.compare,t=t!==null?t:kl,t(m,l)&&e.ref===n.ref)return Ol(e,n,r)}return n.flags|=1,e=Tl(o,l),e.ref=n.ref,e.return=n,n.child=e}function gm(e,n,t,l,r){if(e!==null){var o=e.memoizedProps;if(kl(o,l)&&e.ref===n.ref)if(Rn=!1,n.pendingProps=l=o,ju(e,r))(e.flags&131072)!==0&&(Rn=!0);else return n.lanes=e.lanes,Ol(e,n,r)}return Su(e,n,t,l,r)}function bm(e,n,t,l){var r=l.children,o=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(o=o!==null?o.baseLanes|t:t,e!==null){for(l=n.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~o}else l=0,n.child=null;return ym(e,n,o,t,l)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&no(n,o!==null?o.cachePool:null),o!==null?xd(n,o):Jc(),wd(n);else return l=n.lanes=536870912,ym(e,n,o!==null?o.baseLanes|t:t,t,l)}else o!==null?(no(n,o.cachePool),xd(n,o),mr(),n.memoizedState=null):(e!==null&&no(n,null),Jc(),mr());return Gn(e,n,r,t),n.child}function La(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function ym(e,n,t,l,r){var o=qc();return o=o===null?null:{parent:Nn._currentValue,pool:o},n.memoizedState={baseLanes:t,cachePool:o},e!==null&&no(n,null),Jc(),wd(n),e!==null&&Ti(e,n,l,!0),n.childLanes=r,null}function bo(e,n){return n=vo({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function vm(e,n,t){return ti(n,e.child,null,t),e=bo(n,n.pendingProps),e.flags|=2,xt(n),n.memoizedState=null,e}function K_(e,n,t){var l=n.pendingProps,r=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ie){if(l.mode==="hidden")return e=bo(n,l),n.lanes=536870912,La(null,e);if(nu(n),(e=rn)?(e=Ap(e,Ut),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ir!==null?{id:sl,overflow:ol}:null,retryLane:536870912,hydrationErrors:null},t=ld(e),t.return=n,n.child=t,In=n,rn=null)):e=null,e===null)throw sr(n);return n.lanes=536870912,null}return bo(n,l)}var o=e.memoizedState;if(o!==null){var m=o.dehydrated;if(nu(n),r)if(n.flags&256)n.flags&=-257,n=vm(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(a(558));else if(Rn||Ti(e,n,t,!1),r=(t&e.childLanes)!==0,Rn||r){if(l=nn,l!==null&&(m=_s(l,t),m!==0&&m!==o.retryLane))throw o.retryLane=m,Kr(e,m),ft(l,e,m),wu;Mo(),n=vm(e,n,t)}else e=o.treeContext,rn=It(m.nextSibling),In=n,Ie=!0,ar=null,Ut=!1,e!==null&&ad(n,e),n=bo(n,l),n.flags|=4096;return n}return e=Tl(e.child,{mode:l.mode,children:l.children}),e.ref=n.ref,n.child=e,e.return=n,e}function yo(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(a(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function Su(e,n,t,l,r){return Wr(n),t=lu(e,n,t,l,void 0,r),l=ru(),e!==null&&!Rn?(iu(e,n,r),Ol(e,n,r)):(Ie&&l&&Uc(n),n.flags|=1,Gn(e,n,t,r),n.child)}function xm(e,n,t,l,r,o){return Wr(n),n.updateQueue=null,t=Ed(n,l,t,r),Sd(e),l=ru(),e!==null&&!Rn?(iu(e,n,o),Ol(e,n,o)):(Ie&&l&&Uc(n),n.flags|=1,Gn(e,n,t,o),n.child)}function wm(e,n,t,l,r){if(Wr(n),n.stateNode===null){var o=Si,m=t.contextType;typeof m=="object"&&m!==null&&(o=Vn(m)),o=new t(l,o),n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=vu,n.stateNode=o,o._reactInternals=n,o=n.stateNode,o.props=l,o.state=n.memoizedState,o.refs={},Xc(n),m=t.contextType,o.context=typeof m=="object"&&m!==null?Vn(m):Si,o.state=n.memoizedState,m=t.getDerivedStateFromProps,typeof m=="function"&&(yu(n,t,m,l),o.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(m=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),m!==o.state&&vu.enqueueReplaceState(o,o.state,null),Da(n,l,o,r),ja(),o.state=n.memoizedState),typeof o.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){o=n.stateNode;var v=n.memoizedProps,E=ri(t,v);o.props=E;var C=o.context,F=t.contextType;m=Si,typeof F=="object"&&F!==null&&(m=Vn(F));var X=t.getDerivedStateFromProps;F=typeof X=="function"||typeof o.getSnapshotBeforeUpdate=="function",v=n.pendingProps!==v,F||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(v||C!==m)&&om(n,o,l,m),cr=!1;var B=n.memoizedState;o.state=B,Da(n,l,o,r),ja(),C=n.memoizedState,v||B!==C||cr?(typeof X=="function"&&(yu(n,t,X,l),C=n.memoizedState),(E=cr||sm(n,t,E,l,B,C,m))?(F||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=C),o.props=l,o.state=C,o.context=m,l=E):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{o=n.stateNode,Qc(e,n),m=n.memoizedProps,F=ri(t,m),o.props=F,X=n.pendingProps,B=o.context,C=t.contextType,E=Si,typeof C=="object"&&C!==null&&(E=Vn(C)),v=t.getDerivedStateFromProps,(C=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(m!==X||B!==E)&&om(n,o,l,E),cr=!1,B=n.memoizedState,o.state=B,Da(n,l,o,r),ja();var V=n.memoizedState;m!==X||B!==V||cr||e!==null&&e.dependencies!==null&&Js(e.dependencies)?(typeof v=="function"&&(yu(n,t,v,l),V=n.memoizedState),(F=cr||sm(n,t,F,l,B,V,E)||e!==null&&e.dependencies!==null&&Js(e.dependencies))?(C||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(l,V,E),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(l,V,E)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=V),o.props=l,o.state=V,o.context=E,l=F):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(n.flags|=1024),l=!1)}return o=l,yo(e,n),l=(n.flags&128)!==0,o||l?(o=n.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:o.render(),n.flags|=1,e!==null&&l?(n.child=ti(n,e.child,null,r),n.child=ti(n,null,t,r)):Gn(e,n,t,r),n.memoizedState=o.state,e=n.child):e=Ol(e,n,r),e}function Sm(e,n,t,l){return Qr(),n.flags|=256,Gn(e,n,t,l),n.child}var Eu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ku(e){return{baseLanes:e,cachePool:dd()}}function Nu(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=St),e}function Em(e,n,t){var l=n.pendingProps,r=!1,o=(n.flags&128)!==0,m;if((m=o)||(m=e!==null&&e.memoizedState===null?!1:(xn.current&2)!==0),m&&(r=!0,n.flags&=-129),m=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ie){if(r?dr(n):mr(),(e=rn)?(e=Ap(e,Ut),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ir!==null?{id:sl,overflow:ol}:null,retryLane:536870912,hydrationErrors:null},t=ld(e),t.return=n,n.child=t,In=n,rn=null)):e=null,e===null)throw sr(n);return cf(e)?n.lanes=32:n.lanes=536870912,null}var v=l.children;return l=l.fallback,r?(mr(),r=n.mode,v=vo({mode:"hidden",children:v},r),l=Xr(l,r,t,null),v.return=n,l.return=n,v.sibling=l,n.child=v,l=n.child,l.memoizedState=ku(t),l.childLanes=Nu(e,m,t),n.memoizedState=Eu,La(null,l)):(dr(n),Tu(n,v))}var E=e.memoizedState;if(E!==null&&(v=E.dehydrated,v!==null)){if(o)n.flags&256?(dr(n),n.flags&=-257,n=Ru(e,n,t)):n.memoizedState!==null?(mr(),n.child=e.child,n.flags|=128,n=null):(mr(),v=l.fallback,r=n.mode,l=vo({mode:"visible",children:l.children},r),v=Xr(v,r,t,null),v.flags|=2,l.return=n,v.return=n,l.sibling=v,n.child=l,ti(n,e.child,null,t),l=n.child,l.memoizedState=ku(t),l.childLanes=Nu(e,m,t),n.memoizedState=Eu,n=La(null,l));else if(dr(n),cf(v)){if(m=v.nextSibling&&v.nextSibling.dataset,m)var C=m.dgst;m=C,l=Error(a(419)),l.stack="",l.digest=m,Ea({value:l,source:null,stack:null}),n=Ru(e,n,t)}else if(Rn||Ti(e,n,t,!1),m=(t&e.childLanes)!==0,Rn||m){if(m=nn,m!==null&&(l=_s(m,t),l!==0&&l!==E.retryLane))throw E.retryLane=l,Kr(e,l),ft(m,e,l),wu;of(v)||Mo(),n=Ru(e,n,t)}else of(v)?(n.flags|=192,n.child=e.child,n=null):(e=E.treeContext,rn=It(v.nextSibling),In=n,Ie=!0,ar=null,Ut=!1,e!==null&&ad(n,e),n=Tu(n,l.children),n.flags|=4096);return n}return r?(mr(),v=l.fallback,r=n.mode,E=e.child,C=E.sibling,l=Tl(E,{mode:"hidden",children:l.children}),l.subtreeFlags=E.subtreeFlags&65011712,C!==null?v=Tl(C,v):(v=Xr(v,r,t,null),v.flags|=2),v.return=n,l.return=n,l.sibling=v,n.child=l,La(null,l),l=n.child,v=e.child.memoizedState,v===null?v=ku(t):(r=v.cachePool,r!==null?(E=Nn._currentValue,r=r.parent!==E?{parent:E,pool:E}:r):r=dd(),v={baseLanes:v.baseLanes|t,cachePool:r}),l.memoizedState=v,l.childLanes=Nu(e,m,t),n.memoizedState=Eu,La(e.child,l)):(dr(n),t=e.child,e=t.sibling,t=Tl(t,{mode:"visible",children:l.children}),t.return=n,t.sibling=null,e!==null&&(m=n.deletions,m===null?(n.deletions=[e],n.flags|=16):m.push(e)),n.child=t,n.memoizedState=null,t)}function Tu(e,n){return n=vo({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function vo(e,n){return e=yt(22,e,null,n),e.lanes=0,e}function Ru(e,n,t){return ti(n,e.child,null,t),e=Tu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function km(e,n,t){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Pc(e.return,n,t)}function Mu(e,n,t,l,r,o){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:r,treeForkCount:o}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=t,m.tailMode=r,m.treeForkCount=o)}function Nm(e,n,t){var l=n.pendingProps,r=l.revealOrder,o=l.tail;l=l.children;var m=xn.current,v=(m&2)!==0;if(v?(m=m&1|2,n.flags|=128):m&=1,ee(xn,m),Gn(e,n,l,t),l=Ie?Sa:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&km(e,t,n);else if(e.tag===19)km(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&so(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),Mu(n,!1,r,t,o,l);break;case"backwards":case"unstable_legacy-backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&so(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}Mu(n,!0,t,null,o,l);break;case"together":Mu(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function Ol(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),_r|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(Ti(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,t=Tl(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Tl(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function ju(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Js(e)))}function X_(e,n,t){switch(n.tag){case 3:ae(n,n.stateNode.containerInfo),or(n,Nn,e.memoizedState.cache),Qr();break;case 27:case 5:Oe(n);break;case 4:ae(n,n.stateNode.containerInfo);break;case 10:or(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,nu(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(dr(n),n.flags|=128,null):(t&n.child.childLanes)!==0?Em(e,n,t):(dr(n),e=Ol(e,n,t),e!==null?e.sibling:null);dr(n);break;case 19:var r=(e.flags&128)!==0;if(l=(t&n.childLanes)!==0,l||(Ti(e,n,t,!1),l=(t&n.childLanes)!==0),r){if(l)return Nm(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ee(xn,xn.current),l)break;return null;case 22:return n.lanes=0,bm(e,n,t,n.pendingProps);case 24:or(n,Nn,e.memoizedState.cache)}return Ol(e,n,t)}function Tm(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)Rn=!0;else{if(!ju(e,t)&&(n.flags&128)===0)return Rn=!1,X_(e,n,t);Rn=(e.flags&131072)!==0}else Rn=!1,Ie&&(n.flags&1048576)!==0&&id(n,Sa,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(e=ei(n.elementType),n.type=e,typeof e=="function")Bc(e)?(l=ri(e,l),n.tag=1,n=wm(null,n,e,l,t)):(n.tag=0,n=Su(null,n,e,l,t));else{if(e!=null){var r=e.$$typeof;if(r===ie){n.tag=11,n=hm(null,n,e,l,t);break e}else if(r===Q){n.tag=14,n=_m(null,n,e,l,t);break e}}throw n=ze(e)||e,Error(a(306,n,""))}}return n;case 0:return Su(e,n,n.type,n.pendingProps,t);case 1:return l=n.type,r=ri(l,n.pendingProps),wm(e,n,l,r,t);case 3:e:{if(ae(n,n.stateNode.containerInfo),e===null)throw Error(a(387));l=n.pendingProps;var o=n.memoizedState;r=o.element,Qc(e,n),Da(n,l,null,t);var m=n.memoizedState;if(l=m.cache,or(n,Nn,l),l!==o.cache&&Yc(n,[Nn],t,!0),ja(),l=m.element,o.isDehydrated)if(o={element:l,isDehydrated:!1,cache:m.cache},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){n=Sm(e,n,l,t);break e}else if(l!==r){r=Bt(Error(a(424)),n),Ea(r),n=Sm(e,n,l,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(rn=It(e.firstChild),In=n,Ie=!0,ar=null,Ut=!0,t=bd(n,null,l,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Qr(),l===r){n=Ol(e,n,t);break e}Gn(e,n,l,t)}n=n.child}return n;case 26:return yo(e,n),e===null?(t=Up(n.type,null,n.pendingProps,null))?n.memoizedState=t:Ie||(t=n.type,e=n.pendingProps,l=Lo(I.current).createElement(t),l[_n]=n,l[An]=e,Pn(l,t,e),cn(l),n.stateNode=l):n.memoizedState=Up(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Oe(n),e===null&&Ie&&(l=n.stateNode=Bp(n.type,n.pendingProps,I.current),In=n,Ut=!0,r=rn,xr(n.type)?(uf=r,rn=It(l.firstChild)):rn=r),Gn(e,n,n.pendingProps.children,t),yo(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ie&&((r=l=rn)&&(l=kg(l,n.type,n.pendingProps,Ut),l!==null?(n.stateNode=l,In=n,rn=It(l.firstChild),Ut=!1,r=!0):r=!1),r||sr(n)),Oe(n),r=n.type,o=n.pendingProps,m=e!==null?e.memoizedProps:null,l=o.children,rf(r,o)?l=null:m!==null&&rf(r,m)&&(n.flags|=32),n.memoizedState!==null&&(r=lu(e,n,I_,null,null,t),Za._currentValue=r),yo(e,n),Gn(e,n,l,t),n.child;case 6:return e===null&&Ie&&((e=t=rn)&&(t=Ng(t,n.pendingProps,Ut),t!==null?(n.stateNode=t,In=n,rn=null,e=!0):e=!1),e||sr(n)),null;case 13:return Em(e,n,t);case 4:return ae(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=ti(n,null,l,t):Gn(e,n,l,t),n.child;case 11:return hm(e,n,n.type,n.pendingProps,t);case 7:return Gn(e,n,n.pendingProps,t),n.child;case 8:return Gn(e,n,n.pendingProps.children,t),n.child;case 12:return Gn(e,n,n.pendingProps.children,t),n.child;case 10:return l=n.pendingProps,or(n,n.type,l.value),Gn(e,n,l.children,t),n.child;case 9:return r=n.type._context,l=n.pendingProps.children,Wr(n),r=Vn(r),l=l(r),n.flags|=1,Gn(e,n,l,t),n.child;case 14:return _m(e,n,n.type,n.pendingProps,t);case 15:return gm(e,n,n.type,n.pendingProps,t);case 19:return Nm(e,n,t);case 31:return K_(e,n,t);case 22:return bm(e,n,t,n.pendingProps);case 24:return Wr(n),l=Vn(Nn),e===null?(r=qc(),r===null&&(r=nn,o=Fc(),r.pooledCache=o,o.refCount++,o!==null&&(r.pooledCacheLanes|=t),r=o),n.memoizedState={parent:l,cache:r},Xc(n),or(n,Nn,r)):((e.lanes&t)!==0&&(Qc(e,n),Da(n,null,null,t),ja()),r=e.memoizedState,o=n.memoizedState,r.parent!==l?(r={parent:l,cache:l},n.memoizedState=r,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=r),or(n,Nn,l)):(l=o.cache,or(n,Nn,l),l!==r.cache&&Yc(n,[Nn],t,!0))),Gn(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function Cl(e){e.flags|=4}function Du(e,n,t,l,r){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(ep())e.flags|=8192;else throw ni=lo,Kc}else e.flags&=-16777217}function Rm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Pp(n))if(ep())e.flags|=8192;else throw ni=lo,Kc}function xo(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Cr():536870912,e.lanes|=n,Hi|=n)}function za(e,n){if(!Ie)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function an(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=t,n}function Q_(e,n,t){var l=n.pendingProps;switch(Hc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(n),null;case 1:return an(n),null;case 3:return t=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),jl(Nn),ge(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Ni(n)?Cl(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Vc())),an(n),null;case 26:var r=n.type,o=n.memoizedState;return e===null?(Cl(n),o!==null?(an(n),Rm(n,o)):(an(n),Du(n,r,null,l,t))):o?o!==e.memoizedState?(Cl(n),an(n),Rm(n,o)):(an(n),n.flags&=-16777217):(e=e.memoizedProps,e!==l&&Cl(n),an(n),Du(n,r,e,l,t)),null;case 27:if(Ge(n),t=I.current,r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Cl(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return an(n),null}e=se.current,Ni(n)?sd(n):(e=Bp(r,l,t),n.stateNode=e,Cl(n))}return an(n),null;case 5:if(Ge(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&Cl(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return an(n),null}if(o=se.current,Ni(n))sd(n);else{var m=Lo(I.current);switch(o){case 1:o=m.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:o=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":o=m.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":o=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":o=m.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof l.is=="string"?m.createElement("select",{is:l.is}):m.createElement("select"),l.multiple?o.multiple=!0:l.size&&(o.size=l.size);break;default:o=typeof l.is=="string"?m.createElement(r,{is:l.is}):m.createElement(r)}}o[_n]=n,o[An]=l;e:for(m=n.child;m!==null;){if(m.tag===5||m.tag===6)o.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===n)break e;for(;m.sibling===null;){if(m.return===null||m.return===n)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}n.stateNode=o;e:switch(Pn(o,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Cl(n)}}return an(n),Du(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&Cl(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(a(166));if(e=I.current,Ni(n)){if(e=n.stateNode,t=n.memoizedProps,l=null,r=In,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[_n]=n,e=!!(e.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||Ep(e.nodeValue,t)),e||sr(n,!0)}else e=Lo(e).createTextNode(l),e[_n]=n,n.stateNode=e}return an(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(l=Ni(n),t!==null){if(e===null){if(!l)throw Error(a(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[_n]=n}else Qr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),e=!1}else t=Vc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(xt(n),n):(xt(n),null);if((n.flags&128)!==0)throw Error(a(558))}return an(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Ni(n),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(a(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(a(317));r[_n]=n}else Qr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),r=!1}else r=Vc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return n.flags&256?(xt(n),n):(xt(n),null)}return xt(n),(n.flags&128)!==0?(n.lanes=t,n):(t=l!==null,e=e!==null&&e.memoizedState!==null,t&&(l=n.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),o=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(o=l.memoizedState.cachePool.pool),o!==r&&(l.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),xo(n,n.updateQueue),an(n),null);case 4:return ge(),e===null&&Ju(n.stateNode.containerInfo),an(n),null;case 10:return jl(n.type),an(n),null;case 19:if(z(xn),l=n.memoizedState,l===null)return an(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)za(l,!1);else{if(bn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(o=so(e),o!==null){for(n.flags|=128,za(l,!1),e=o.updateQueue,n.updateQueue=e,xo(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)td(t,e),t=t.sibling;return ee(xn,xn.current&1|2),Ie&&Rl(n,l.treeForkCount),n.child}e=e.sibling}l.tail!==null&&En()>No&&(n.flags|=128,r=!0,za(l,!1),n.lanes=4194304)}else{if(!r)if(e=so(o),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,xo(n,e),za(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!Ie)return an(n),null}else 2*En()-l.renderingStartTime>No&&t!==536870912&&(n.flags|=128,r=!0,za(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(e=l.last,e!==null?e.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=En(),e.sibling=null,t=xn.current,ee(xn,r?t&1|2:t&1),Ie&&Rl(n,l.treeForkCount),e):(an(n),null);case 22:case 23:return xt(n),eu(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(t&536870912)!==0&&(n.flags&128)===0&&(an(n),n.subtreeFlags&6&&(n.flags|=8192)):an(n),t=n.updateQueue,t!==null&&xo(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==t&&(n.flags|=2048),e!==null&&z(Jr),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),jl(Nn),an(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function Z_(e,n){switch(Hc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return jl(Nn),ge(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ge(n),null;case 31:if(n.memoizedState!==null){if(xt(n),n.alternate===null)throw Error(a(340));Qr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(xt(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Qr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return z(xn),null;case 4:return ge(),null;case 10:return jl(n.type),null;case 22:case 23:return xt(n),eu(),e!==null&&z(Jr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return jl(Nn),null;case 25:return null;default:return null}}function Mm(e,n){switch(Hc(n),n.tag){case 3:jl(Nn),ge();break;case 26:case 27:case 5:Ge(n);break;case 4:ge();break;case 31:n.memoizedState!==null&&xt(n);break;case 13:xt(n);break;case 19:z(xn);break;case 10:jl(n.type);break;case 22:case 23:xt(n),eu(),e!==null&&z(Jr);break;case 24:jl(Nn)}}function Ua(e,n){try{var t=n.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var r=l.next;t=r;do{if((t.tag&e)===e){l=void 0;var o=t.create,m=t.inst;l=o(),m.destroy=l}t=t.next}while(t!==r)}}catch(v){Ze(n,n.return,v)}}function pr(e,n,t){try{var l=n.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var o=r.next;l=o;do{if((l.tag&e)===e){var m=l.inst,v=m.destroy;if(v!==void 0){m.destroy=void 0,r=n;var E=t,C=v;try{C()}catch(F){Ze(r,E,F)}}}l=l.next}while(l!==o)}}catch(F){Ze(n,n.return,F)}}function jm(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{vd(n,t)}catch(l){Ze(e,e.return,l)}}}function Dm(e,n,t){t.props=ri(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(l){Ze(e,n,l)}}function Ha(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof t=="function"?e.refCleanup=t(l):t.current=l}}catch(r){Ze(e,n,r)}}function cl(e,n){var t=e.ref,l=e.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(r){Ze(e,n,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(r){Ze(e,n,r)}else t.current=null}function Am(e){var n=e.type,t=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break e;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(r){Ze(e,e.return,r)}}function Au(e,n,t){try{var l=e.stateNode;yg(l,e.type,t,n),l[An]=n}catch(r){Ze(e,e.return,r)}}function Om(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&xr(e.type)||e.tag===4}function Ou(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Om(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&xr(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cu(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Xe));else if(l!==4&&(l===27&&xr(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(Cu(e,n,t),e=e.sibling;e!==null;)Cu(e,n,t),e=e.sibling}function wo(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(l!==4&&(l===27&&xr(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(wo(e,n,t),e=e.sibling;e!==null;)wo(e,n,t),e=e.sibling}function Cm(e){var n=e.stateNode,t=e.memoizedProps;try{for(var l=e.type,r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Pn(n,l,t),n[_n]=e,n[An]=t}catch(o){Ze(e,e.return,o)}}var Bl=!1,Mn=!1,Bu=!1,Bm=typeof WeakSet=="function"?WeakSet:Set,zn=null;function W_(e,n){if(e=e.containerInfo,tf=Po,e=qs(e),d(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var r=l.anchorOffset,o=l.focusNode;l=l.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var m=0,v=-1,E=-1,C=0,F=0,X=e,B=null;n:for(;;){for(var V;X!==t||r!==0&&X.nodeType!==3||(v=m+r),X!==o||l!==0&&X.nodeType!==3||(E=m+l),X.nodeType===3&&(m+=X.nodeValue.length),(V=X.firstChild)!==null;)B=X,X=V;for(;;){if(X===e)break n;if(B===t&&++C===r&&(v=m),B===o&&++F===l&&(E=m),(V=X.nextSibling)!==null)break;X=B,B=X.parentNode}X=V}t=v===-1||E===-1?null:{start:v,end:E}}else t=null}t=t||{start:0,end:0}}else t=null;for(lf={focusedElem:e,selectionRange:t},Po=!1,zn=n;zn!==null;)if(n=zn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,zn=e;else for(;zn!==null;){switch(n=zn,o=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)r=e[t],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,t=n,r=o.memoizedProps,o=o.memoizedState,l=t.stateNode;try{var ue=ri(t.type,r);e=l.getSnapshotBeforeUpdate(ue,o),l.__reactInternalSnapshotBeforeUpdate=e}catch(we){Ze(t,t.return,we)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)sf(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":sf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,zn=e;break}zn=n.return}}function Lm(e,n,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:zl(e,t),l&4&&Ua(5,t);break;case 1:if(zl(e,t),l&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(m){Ze(t,t.return,m)}else{var r=ri(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(r,n,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Ze(t,t.return,m)}}l&64&&jm(t),l&512&&Ha(t,t.return);break;case 3:if(zl(e,t),l&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{vd(e,n)}catch(m){Ze(t,t.return,m)}}break;case 27:n===null&&l&4&&Cm(t);case 26:case 5:zl(e,t),n===null&&l&4&&Am(t),l&512&&Ha(t,t.return);break;case 12:zl(e,t);break;case 31:zl(e,t),l&4&&Hm(e,t);break;case 13:zl(e,t),l&4&&Im(e,t),l&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=sg.bind(null,t),Tg(e,t))));break;case 22:if(l=t.memoizedState!==null||Bl,!l){n=n!==null&&n.memoizedState!==null||Mn,r=Bl;var o=Mn;Bl=l,(Mn=n)&&!o?Ul(e,t,(t.subtreeFlags&8772)!==0):zl(e,t),Bl=r,Mn=o}break;case 30:break;default:zl(e,t)}}function zm(e){var n=e.alternate;n!==null&&(e.alternate=null,zm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&nl(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var un=null,st=!1;function Ll(e,n,t){for(t=t.child;t!==null;)Um(e,n,t),t=t.sibling}function Um(e,n,t){if(Dn&&typeof Dn.onCommitFiberUnmount=="function")try{Dn.onCommitFiberUnmount(Or,t)}catch{}switch(t.tag){case 26:Mn||cl(t,n),Ll(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Mn||cl(t,n);var l=un,r=st;xr(t.type)&&(un=t.stateNode,st=!1),Ll(e,n,t),Ka(t.stateNode),un=l,st=r;break;case 5:Mn||cl(t,n);case 6:if(l=un,r=st,un=null,Ll(e,n,t),un=l,st=r,un!==null)if(st)try{(un.nodeType===9?un.body:un.nodeName==="HTML"?un.ownerDocument.body:un).removeChild(t.stateNode)}catch(o){Ze(t,n,o)}else try{un.removeChild(t.stateNode)}catch(o){Ze(t,n,o)}break;case 18:un!==null&&(st?(e=un,jp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),qi(e)):jp(un,t.stateNode));break;case 4:l=un,r=st,un=t.stateNode.containerInfo,st=!0,Ll(e,n,t),un=l,st=r;break;case 0:case 11:case 14:case 15:pr(2,t,n),Mn||pr(4,t,n),Ll(e,n,t);break;case 1:Mn||(cl(t,n),l=t.stateNode,typeof l.componentWillUnmount=="function"&&Dm(t,n,l)),Ll(e,n,t);break;case 21:Ll(e,n,t);break;case 22:Mn=(l=Mn)||t.memoizedState!==null,Ll(e,n,t),Mn=l;break;default:Ll(e,n,t)}}function Hm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{qi(e)}catch(t){Ze(n,n.return,t)}}}function Im(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{qi(e)}catch(t){Ze(n,n.return,t)}}function J_(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Bm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Bm),n;default:throw Error(a(435,e.tag))}}function So(e,n){var t=J_(e);n.forEach(function(l){if(!t.has(l)){t.add(l);var r=og.bind(null,e,l);l.then(r,r)}})}function ot(e,n){var t=n.deletions;if(t!==null)for(var l=0;l<t.length;l++){var r=t[l],o=e,m=n,v=m;e:for(;v!==null;){switch(v.tag){case 27:if(xr(v.type)){un=v.stateNode,st=!1;break e}break;case 5:un=v.stateNode,st=!1;break e;case 3:case 4:un=v.stateNode.containerInfo,st=!0;break e}v=v.return}if(un===null)throw Error(a(160));Um(o,m,r),un=null,st=!1,o=r.alternate,o!==null&&(o.return=null),r.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Vm(n,e),n=n.sibling}var Zt=null;function Vm(e,n){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ot(n,e),ct(e),l&4&&(pr(3,e,e.return),Ua(3,e),pr(5,e,e.return));break;case 1:ot(n,e),ct(e),l&512&&(Mn||t===null||cl(t,t.return)),l&64&&Bl&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var r=Zt;if(ot(n,e),ct(e),l&512&&(Mn||t===null||cl(t,t.return)),l&4){var o=t!==null?t.memoizedState:null;if(l=e.memoizedState,t===null)if(l===null)if(e.stateNode===null){e:{l=e.type,t=e.memoizedProps,r=r.ownerDocument||r;n:switch(l){case"title":o=r.getElementsByTagName("title")[0],(!o||o[Zn]||o[_n]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=r.createElement(l),r.head.insertBefore(o,r.querySelector("head > title"))),Pn(o,l,t),o[_n]=e,cn(o),l=o;break e;case"link":var m=Vp("link","href",r).get(l+(t.href||""));if(m){for(var v=0;v<m.length;v++)if(o=m[v],o.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&o.getAttribute("rel")===(t.rel==null?null:t.rel)&&o.getAttribute("title")===(t.title==null?null:t.title)&&o.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){m.splice(v,1);break n}}o=r.createElement(l),Pn(o,l,t),r.head.appendChild(o);break;case"meta":if(m=Vp("meta","content",r).get(l+(t.content||""))){for(v=0;v<m.length;v++)if(o=m[v],o.getAttribute("content")===(t.content==null?null:""+t.content)&&o.getAttribute("name")===(t.name==null?null:t.name)&&o.getAttribute("property")===(t.property==null?null:t.property)&&o.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&o.getAttribute("charset")===(t.charSet==null?null:t.charSet)){m.splice(v,1);break n}}o=r.createElement(l),Pn(o,l,t),r.head.appendChild(o);break;default:throw Error(a(468,l))}o[_n]=e,cn(o),l=o}e.stateNode=l}else Gp(r,e.type,e.stateNode);else e.stateNode=Ip(r,l,e.memoizedProps);else o!==l?(o===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):o.count--,l===null?Gp(r,e.type,e.stateNode):Ip(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Au(e,e.memoizedProps,t.memoizedProps)}break;case 27:ot(n,e),ct(e),l&512&&(Mn||t===null||cl(t,t.return)),t!==null&&l&4&&Au(e,e.memoizedProps,t.memoizedProps);break;case 5:if(ot(n,e),ct(e),l&512&&(Mn||t===null||cl(t,t.return)),e.flags&32){r=e.stateNode;try{Y(r,"")}catch(ue){Ze(e,e.return,ue)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,Au(e,r,t!==null?t.memoizedProps:r)),l&1024&&(Bu=!0);break;case 6:if(ot(n,e),ct(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,t=e.stateNode;try{t.nodeValue=l}catch(ue){Ze(e,e.return,ue)}}break;case 3:if(Ho=null,r=Zt,Zt=zo(n.containerInfo),ot(n,e),Zt=r,ct(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{qi(n.containerInfo)}catch(ue){Ze(e,e.return,ue)}Bu&&(Bu=!1,Gm(e));break;case 4:l=Zt,Zt=zo(e.stateNode.containerInfo),ot(n,e),ct(e),Zt=l;break;case 12:ot(n,e),ct(e);break;case 31:ot(n,e),ct(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,So(e,l)));break;case 13:ot(n,e),ct(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(ko=En()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,So(e,l)));break;case 22:r=e.memoizedState!==null;var E=t!==null&&t.memoizedState!==null,C=Bl,F=Mn;if(Bl=C||r,Mn=F||E,ot(n,e),Mn=F,Bl=C,ct(e),l&8192)e:for(n=e.stateNode,n._visibility=r?n._visibility&-2:n._visibility|1,r&&(t===null||E||Bl||Mn||ii(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){E=t=n;try{if(o=E.stateNode,r)m=o.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{v=E.stateNode;var X=E.memoizedProps.style,B=X!=null&&X.hasOwnProperty("display")?X.display:null;v.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(ue){Ze(E,E.return,ue)}}}else if(n.tag===6){if(t===null){E=n;try{E.stateNode.nodeValue=r?"":E.memoizedProps}catch(ue){Ze(E,E.return,ue)}}}else if(n.tag===18){if(t===null){E=n;try{var V=E.stateNode;r?Dp(V,!0):Dp(E.stateNode,!1)}catch(ue){Ze(E,E.return,ue)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,So(e,t))));break;case 19:ot(n,e),ct(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,So(e,l)));break;case 30:break;case 21:break;default:ot(n,e),ct(e)}}function ct(e){var n=e.flags;if(n&2){try{for(var t,l=e.return;l!==null;){if(Om(l)){t=l;break}l=l.return}if(t==null)throw Error(a(160));switch(t.tag){case 27:var r=t.stateNode,o=Ou(e);wo(e,o,r);break;case 5:var m=t.stateNode;t.flags&32&&(Y(m,""),t.flags&=-33);var v=Ou(e);wo(e,v,m);break;case 3:case 4:var E=t.stateNode.containerInfo,C=Ou(e);Cu(e,C,E);break;default:throw Error(a(161))}}catch(F){Ze(e,e.return,F)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Gm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Gm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function zl(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Lm(e,n.alternate,n),n=n.sibling}function ii(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:pr(4,n,n.return),ii(n);break;case 1:cl(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&Dm(n,n.return,t),ii(n);break;case 27:Ka(n.stateNode);case 26:case 5:cl(n,n.return),ii(n);break;case 22:n.memoizedState===null&&ii(n);break;case 30:ii(n);break;default:ii(n)}e=e.sibling}}function Ul(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,r=e,o=n,m=o.flags;switch(o.tag){case 0:case 11:case 15:Ul(r,o,t),Ua(4,o);break;case 1:if(Ul(r,o,t),l=o,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(C){Ze(l,l.return,C)}if(l=o,r=l.updateQueue,r!==null){var v=l.stateNode;try{var E=r.shared.hiddenCallbacks;if(E!==null)for(r.shared.hiddenCallbacks=null,r=0;r<E.length;r++)yd(E[r],v)}catch(C){Ze(l,l.return,C)}}t&&m&64&&jm(o),Ha(o,o.return);break;case 27:Cm(o);case 26:case 5:Ul(r,o,t),t&&l===null&&m&4&&Am(o),Ha(o,o.return);break;case 12:Ul(r,o,t);break;case 31:Ul(r,o,t),t&&m&4&&Hm(r,o);break;case 13:Ul(r,o,t),t&&m&4&&Im(r,o);break;case 22:o.memoizedState===null&&Ul(r,o,t),Ha(o,o.return);break;case 30:break;default:Ul(r,o,t)}n=n.sibling}}function Lu(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&ka(t))}function zu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ka(e))}function Wt(e,n,t,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Pm(e,n,t,l),n=n.sibling}function Pm(e,n,t,l){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Wt(e,n,t,l),r&2048&&Ua(9,n);break;case 1:Wt(e,n,t,l);break;case 3:Wt(e,n,t,l),r&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ka(e)));break;case 12:if(r&2048){Wt(e,n,t,l),e=n.stateNode;try{var o=n.memoizedProps,m=o.id,v=o.onPostCommit;typeof v=="function"&&v(m,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){Ze(n,n.return,E)}}else Wt(e,n,t,l);break;case 31:Wt(e,n,t,l);break;case 13:Wt(e,n,t,l);break;case 23:break;case 22:o=n.stateNode,m=n.alternate,n.memoizedState!==null?o._visibility&2?Wt(e,n,t,l):Ia(e,n):o._visibility&2?Wt(e,n,t,l):(o._visibility|=2,Li(e,n,t,l,(n.subtreeFlags&10256)!==0||!1)),r&2048&&Lu(m,n);break;case 24:Wt(e,n,t,l),r&2048&&zu(n.alternate,n);break;default:Wt(e,n,t,l)}}function Li(e,n,t,l,r){for(r=r&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var o=e,m=n,v=t,E=l,C=m.flags;switch(m.tag){case 0:case 11:case 15:Li(o,m,v,E,r),Ua(8,m);break;case 23:break;case 22:var F=m.stateNode;m.memoizedState!==null?F._visibility&2?Li(o,m,v,E,r):Ia(o,m):(F._visibility|=2,Li(o,m,v,E,r)),r&&C&2048&&Lu(m.alternate,m);break;case 24:Li(o,m,v,E,r),r&&C&2048&&zu(m.alternate,m);break;default:Li(o,m,v,E,r)}n=n.sibling}}function Ia(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,l=n,r=l.flags;switch(l.tag){case 22:Ia(t,l),r&2048&&Lu(l.alternate,l);break;case 24:Ia(t,l),r&2048&&zu(l.alternate,l);break;default:Ia(t,l)}n=n.sibling}}var Va=8192;function zi(e,n,t){if(e.subtreeFlags&Va)for(e=e.child;e!==null;)Ym(e,n,t),e=e.sibling}function Ym(e,n,t){switch(e.tag){case 26:zi(e,n,t),e.flags&Va&&e.memoizedState!==null&&Hg(t,Zt,e.memoizedState,e.memoizedProps);break;case 5:zi(e,n,t);break;case 3:case 4:var l=Zt;Zt=zo(e.stateNode.containerInfo),zi(e,n,t),Zt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Va,Va=16777216,zi(e,n,t),Va=l):zi(e,n,t));break;default:zi(e,n,t)}}function Fm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ga(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var l=n[t];zn=l,qm(l,e)}Fm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$m(e),e=e.sibling}function $m(e){switch(e.tag){case 0:case 11:case 15:Ga(e),e.flags&2048&&pr(9,e,e.return);break;case 3:Ga(e);break;case 12:Ga(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Eo(e)):Ga(e);break;default:Ga(e)}}function Eo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var l=n[t];zn=l,qm(l,e)}Fm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:pr(8,n,n.return),Eo(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,Eo(n));break;default:Eo(n)}e=e.sibling}}function qm(e,n){for(;zn!==null;){var t=zn;switch(t.tag){case 0:case 11:case 15:pr(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ka(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,zn=l;else e:for(t=e;zn!==null;){l=zn;var r=l.sibling,o=l.return;if(zm(l),l===t){zn=null;break e}if(r!==null){r.return=o,zn=r;break e}zn=o}}}var eg={getCacheForType:function(e){var n=Vn(Nn),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return Vn(Nn).controller.signal}},ng=typeof WeakMap=="function"?WeakMap:Map,Ke=0,nn=null,Be=null,Ue=0,Qe=0,wt=null,hr=!1,Ui=!1,Uu=!1,Hl=0,bn=0,_r=0,ai=0,Hu=0,St=0,Hi=0,Pa=null,ut=null,Iu=!1,ko=0,Km=0,No=1/0,To=null,gr=null,On=0,br=null,Ii=null,Il=0,Vu=0,Gu=null,Xm=null,Ya=0,Pu=null;function Et(){return(Ke&2)!==0&&Ue!==0?Ue&-Ue:H.T!==null?Xu():fn()}function Qm(){if(St===0)if((Ue&536870912)===0||Ie){var e=$n;$n<<=1,($n&3932160)===0&&($n=262144),St=e}else St=536870912;return e=vt.current,e!==null&&(e.flags|=32),St}function ft(e,n,t){(e===nn&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)&&(Vi(e,0),yr(e,Ue,St,!1)),Br(e,t),((Ke&2)===0||e!==nn)&&(e===nn&&((Ke&2)===0&&(ai|=t),bn===4&&yr(e,Ue,St,!1)),ul(e))}function Zm(e,n,t){if((Ke&6)!==0)throw Error(a(327));var l=!t&&(n&127)===0&&(n&e.expiredLanes)===0||Bn(e,n),r=l?rg(e,n):Fu(e,n,!0),o=l;do{if(r===0){Ui&&!l&&yr(e,n,0,!1);break}else{if(t=e.current.alternate,o&&!tg(t)){r=Fu(e,n,!1),o=!1;continue}if(r===2){if(o=n,e.errorRecoveryDisabledLanes&o)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){n=m;e:{var v=e;r=Pa;var E=v.current.memoizedState.isDehydrated;if(E&&(Vi(v,m).flags|=256),m=Fu(v,m,!1),m!==2){if(Uu&&!E){v.errorRecoveryDisabledLanes|=o,ai|=o,r=4;break e}o=ut,ut=r,o!==null&&(ut===null?ut=o:ut.push.apply(ut,o))}r=m}if(o=!1,r!==2)continue}}if(r===1){Vi(e,0),yr(e,n,0,!0);break}e:{switch(l=e,o=r,o){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:yr(l,n,St,!hr);break e;case 2:ut=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(r=ko+300-En(),10<r)){if(yr(l,n,St,!hr),on(l,0,!0)!==0)break e;Il=n,l.timeoutHandle=Rp(Wm.bind(null,l,t,ut,To,Iu,n,St,ai,Hi,hr,o,"Throttled",-0,0),r);break e}Wm(l,t,ut,To,Iu,n,St,ai,Hi,hr,o,null,-0,0)}}break}while(!0);ul(e)}function Wm(e,n,t,l,r,o,m,v,E,C,F,X,B,V){if(e.timeoutHandle=-1,X=n.subtreeFlags,X&8192||(X&16785408)===16785408){X={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xe},Ym(n,o,X);var ue=(o&62914560)===o?ko-En():(o&4194048)===o?Km-En():0;if(ue=Ig(X,ue),ue!==null){Il=o,e.cancelPendingCommit=ue(ap.bind(null,e,n,o,t,l,r,m,v,E,F,X,null,B,V)),yr(e,o,m,!C);return}}ap(e,n,o,t,l,r,m,v,E)}function tg(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var r=t[l],o=r.getSnapshot;r=r.value;try{if(!kn(o(),r))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function yr(e,n,t,l){n&=~Hu,n&=~ai,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var r=n;0<r;){var o=31-Un(r),m=1<<o;l[o]=-1,r&=~m}t!==0&&hs(e,t,n)}function Ro(){return(Ke&6)===0?(Fa(0),!1):!0}function Yu(){if(Be!==null){if(Qe===0)var e=Be.return;else e=Be,Ml=Zr=null,au(e),Di=null,Ta=0,e=Be;for(;e!==null;)Mm(e.alternate,e),e=e.return;Be=null}}function Vi(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,wg(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Il=0,Yu(),nn=e,Be=t=Tl(e.current,null),Ue=n,Qe=0,wt=null,hr=!1,Ui=Bn(e,n),Uu=!1,Hi=St=Hu=ai=_r=bn=0,ut=Pa=null,Iu=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var r=31-Un(l),o=1<<r;n|=e[r],l&=~o}return Hl=n,Ks(),t}function Jm(e,n){Re=null,H.H=Ba,n===ji||n===to?(n=hd(),Qe=3):n===Kc?(n=hd(),Qe=4):Qe=n===wu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,wt=n,Be===null&&(bn=1,go(e,Bt(n,e.current)))}function ep(){var e=vt.current;return e===null?!0:(Ue&4194048)===Ue?Ht===null:(Ue&62914560)===Ue||(Ue&536870912)!==0?e===Ht:!1}function np(){var e=H.H;return H.H=Ba,e===null?Ba:e}function tp(){var e=H.A;return H.A=eg,e}function Mo(){bn=4,hr||(Ue&4194048)!==Ue&&vt.current!==null||(Ui=!0),(_r&134217727)===0&&(ai&134217727)===0||nn===null||yr(nn,Ue,St,!1)}function Fu(e,n,t){var l=Ke;Ke|=2;var r=np(),o=tp();(nn!==e||Ue!==n)&&(To=null,Vi(e,n)),n=!1;var m=bn;e:do try{if(Qe!==0&&Be!==null){var v=Be,E=wt;switch(Qe){case 8:Yu(),m=6;break e;case 3:case 2:case 9:case 6:vt.current===null&&(n=!0);var C=Qe;if(Qe=0,wt=null,Gi(e,v,E,C),t&&Ui){m=0;break e}break;default:C=Qe,Qe=0,wt=null,Gi(e,v,E,C)}}lg(),m=bn;break}catch(F){Jm(e,F)}while(!0);return n&&e.shellSuspendCounter++,Ml=Zr=null,Ke=l,H.H=r,H.A=o,Be===null&&(nn=null,Ue=0,Ks()),m}function lg(){for(;Be!==null;)lp(Be)}function rg(e,n){var t=Ke;Ke|=2;var l=np(),r=tp();nn!==e||Ue!==n?(To=null,No=En()+500,Vi(e,n)):Ui=Bn(e,n);e:do try{if(Qe!==0&&Be!==null){n=Be;var o=wt;n:switch(Qe){case 1:Qe=0,wt=null,Gi(e,n,o,1);break;case 2:case 9:if(md(o)){Qe=0,wt=null,rp(n);break}n=function(){Qe!==2&&Qe!==9||nn!==e||(Qe=7),ul(e)},o.then(n,n);break e;case 3:Qe=7;break e;case 4:Qe=5;break e;case 7:md(o)?(Qe=0,wt=null,rp(n)):(Qe=0,wt=null,Gi(e,n,o,7));break;case 5:var m=null;switch(Be.tag){case 26:m=Be.memoizedState;case 5:case 27:var v=Be;if(m?Pp(m):v.stateNode.complete){Qe=0,wt=null;var E=v.sibling;if(E!==null)Be=E;else{var C=v.return;C!==null?(Be=C,jo(C)):Be=null}break n}}Qe=0,wt=null,Gi(e,n,o,5);break;case 6:Qe=0,wt=null,Gi(e,n,o,6);break;case 8:Yu(),bn=6;break e;default:throw Error(a(462))}}ig();break}catch(F){Jm(e,F)}while(!0);return Ml=Zr=null,H.H=l,H.A=r,Ke=t,Be!==null?0:(nn=null,Ue=0,Ks(),bn)}function ig(){for(;Be!==null&&!ui();)lp(Be)}function lp(e){var n=Tm(e.alternate,e,Hl);e.memoizedProps=e.pendingProps,n===null?jo(e):Be=n}function rp(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=xm(t,n,n.pendingProps,n.type,void 0,Ue);break;case 11:n=xm(t,n,n.pendingProps,n.type.render,n.ref,Ue);break;case 5:au(n);default:Mm(t,n),n=Be=td(n,Hl),n=Tm(t,n,Hl)}e.memoizedProps=e.pendingProps,n===null?jo(e):Be=n}function Gi(e,n,t,l){Ml=Zr=null,au(n),Di=null,Ta=0;var r=n.return;try{if(q_(e,r,n,t,Ue)){bn=1,go(e,Bt(t,e.current)),Be=null;return}}catch(o){if(r!==null)throw Be=r,o;bn=1,go(e,Bt(t,e.current)),Be=null;return}n.flags&32768?(Ie||l===1?e=!0:Ui||(Ue&536870912)!==0?e=!1:(hr=e=!0,(l===2||l===9||l===3||l===6)&&(l=vt.current,l!==null&&l.tag===13&&(l.flags|=16384))),ip(n,e)):jo(n)}function jo(e){var n=e;do{if((n.flags&32768)!==0){ip(n,hr);return}e=n.return;var t=Q_(n.alternate,n,Hl);if(t!==null){Be=t;return}if(n=n.sibling,n!==null){Be=n;return}Be=n=e}while(n!==null);bn===0&&(bn=5)}function ip(e,n){do{var t=Z_(e.alternate,e);if(t!==null){t.flags&=32767,Be=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){Be=e;return}Be=e=t}while(e!==null);bn=6,Be=null}function ap(e,n,t,l,r,o,m,v,E){e.cancelPendingCommit=null;do Do();while(On!==0);if((Ke&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(o=n.lanes|n.childLanes,o|=Oc,hl(e,t,o,m,v,E),e===nn&&(Be=nn=null,Ue=0),Ii=n,br=e,Il=t,Vu=o,Gu=r,Xm=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,cg(Ar,function(){return fp(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,r=ne.p,ne.p=2,m=Ke,Ke|=4;try{W_(e,n,t)}finally{Ke=m,ne.p=r,H.T=l}}On=1,sp(),op(),cp()}}function sp(){if(On===1){On=0;var e=br,n=Ii,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=H.T,H.T=null;var l=ne.p;ne.p=2;var r=Ke;Ke|=4;try{Vm(n,e);var o=lf,m=qs(e.containerInfo),v=o.focusedElem,E=o.selectionRange;if(m!==v&&v&&v.ownerDocument&&$s(v.ownerDocument.documentElement,v)){if(E!==null&&d(v)){var C=E.start,F=E.end;if(F===void 0&&(F=C),"selectionStart"in v)v.selectionStart=C,v.selectionEnd=Math.min(F,v.value.length);else{var X=v.ownerDocument||document,B=X&&X.defaultView||window;if(B.getSelection){var V=B.getSelection(),ue=v.textContent.length,we=Math.min(E.start,ue),en=E.end===void 0?we:Math.min(E.end,ue);!V.extend&&we>en&&(m=en,en=we,we=m);var j=Fs(v,we),T=Fs(v,en);if(j&&T&&(V.rangeCount!==1||V.anchorNode!==j.node||V.anchorOffset!==j.offset||V.focusNode!==T.node||V.focusOffset!==T.offset)){var O=X.createRange();O.setStart(j.node,j.offset),V.removeAllRanges(),we>en?(V.addRange(O),V.extend(T.node,T.offset)):(O.setEnd(T.node,T.offset),V.addRange(O))}}}}for(X=[],V=v;V=V.parentNode;)V.nodeType===1&&X.push({element:V,left:V.scrollLeft,top:V.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<X.length;v++){var $=X[v];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}Po=!!tf,lf=tf=null}finally{Ke=r,ne.p=l,H.T=t}}e.current=n,On=2}}function op(){if(On===2){On=0;var e=br,n=Ii,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=H.T,H.T=null;var l=ne.p;ne.p=2;var r=Ke;Ke|=4;try{Lm(e,n.alternate,n)}finally{Ke=r,ne.p=l,H.T=t}}On=3}}function cp(){if(On===4||On===3){On=0,Yl();var e=br,n=Ii,t=Il,l=Xm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?On=5:(On=0,Ii=br=null,up(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(gr=null),Rt(t),n=n.stateNode,Dn&&typeof Dn.onCommitFiberRoot=="function")try{Dn.onCommitFiberRoot(Or,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=H.T,r=ne.p,ne.p=2,H.T=null;try{for(var o=e.onRecoverableError,m=0;m<l.length;m++){var v=l[m];o(v.value,{componentStack:v.stack})}}finally{H.T=n,ne.p=r}}(Il&3)!==0&&Do(),ul(e),r=e.pendingLanes,(t&261930)!==0&&(r&42)!==0?e===Pu?Ya++:(Ya=0,Pu=e):Ya=0,Fa(0)}}function up(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ka(n)))}function Do(){return sp(),op(),cp(),fp()}function fp(){if(On!==5)return!1;var e=br,n=Vu;Vu=0;var t=Rt(Il),l=H.T,r=ne.p;try{ne.p=32>t?32:t,H.T=null,t=Gu,Gu=null;var o=br,m=Il;if(On=0,Ii=br=null,Il=0,(Ke&6)!==0)throw Error(a(331));var v=Ke;if(Ke|=4,$m(o.current),Pm(o,o.current,m,t),Ke=v,Fa(0,!1),Dn&&typeof Dn.onPostCommitFiberRoot=="function")try{Dn.onPostCommitFiberRoot(Or,o)}catch{}return!0}finally{ne.p=r,H.T=l,up(e,n)}}function dp(e,n,t){n=Bt(t,n),n=xu(e.stateNode,n,2),e=fr(e,n,2),e!==null&&(Br(e,2),ul(e))}function Ze(e,n,t){if(e.tag===3)dp(e,e,t);else for(;n!==null;){if(n.tag===3){dp(n,e,t);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(gr===null||!gr.has(l))){e=Bt(t,e),t=mm(2),l=fr(n,t,2),l!==null&&(pm(t,l,n,e),Br(l,2),ul(l));break}}n=n.return}}function $u(e,n,t){var l=e.pingCache;if(l===null){l=e.pingCache=new ng;var r=new Set;l.set(n,r)}else r=l.get(n),r===void 0&&(r=new Set,l.set(n,r));r.has(t)||(Uu=!0,r.add(t),e=ag.bind(null,e,n,t),n.then(e,e))}function ag(e,n,t){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,nn===e&&(Ue&t)===t&&(bn===4||bn===3&&(Ue&62914560)===Ue&&300>En()-ko?(Ke&2)===0&&Vi(e,0):Hu|=t,Hi===Ue&&(Hi=0)),ul(e)}function mp(e,n){n===0&&(n=Cr()),e=Kr(e,n),e!==null&&(Br(e,n),ul(e))}function sg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),mp(e,t)}function og(e,n){var t=0;switch(e.tag){case 31:case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(n),mp(e,t)}function cg(e,n){return Ft(e,n)}var Ao=null,Pi=null,qu=!1,Oo=!1,Ku=!1,vr=0;function ul(e){e!==Pi&&e.next===null&&(Pi===null?Ao=Pi=e:Pi=Pi.next=e),Oo=!0,qu||(qu=!0,fg())}function Fa(e,n){if(!Ku&&Oo){Ku=!0;do for(var t=!1,l=Ao;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var o=0;else{var m=l.suspendedLanes,v=l.pingedLanes;o=(1<<31-Un(42|e)+1)-1,o&=r&~(m&~v),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(t=!0,gp(l,o))}else o=Ue,o=on(l,l===nn?o:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(o&3)===0||Bn(l,o)||(t=!0,gp(l,o));l=l.next}while(t);Ku=!1}}function ug(){pp()}function pp(){Oo=qu=!1;var e=0;vr!==0&&xg()&&(e=vr);for(var n=En(),t=null,l=Ao;l!==null;){var r=l.next,o=hp(l,n);o===0?(l.next=null,t===null?Ao=r:t.next=r,r===null&&(Pi=t)):(t=l,(e!==0||(o&3)!==0)&&(Oo=!0)),l=r}On!==0&&On!==5||Fa(e),vr!==0&&(vr=0)}function hp(e,n){for(var t=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var m=31-Un(o),v=1<<m,E=r[m];E===-1?((v&t)===0||(v&l)!==0)&&(r[m]=hc(v,n)):E<=n&&(e.expiredLanes|=v),o&=~v}if(n=nn,t=Ue,t=on(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,t===0||e===n&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Tt(l),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Bn(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(l!==null&&Tt(l),Rt(t)){case 2:case 8:t=la;break;case 32:t=Ar;break;case 268435456:t=dt;break;default:t=Ar}return l=_p.bind(null,e),t=Ft(t,l),e.callbackPriority=n,e.callbackNode=t,n}return l!==null&&l!==null&&Tt(l),e.callbackPriority=2,e.callbackNode=null,2}function _p(e,n){if(On!==0&&On!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Do()&&e.callbackNode!==t)return null;var l=Ue;return l=on(e,e===nn?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Zm(e,l,n),hp(e,En()),e.callbackNode!=null&&e.callbackNode===t?_p.bind(null,e):null)}function gp(e,n){if(Do())return null;Zm(e,n,!0)}function fg(){Sg(function(){(Ke&6)!==0?Ft(Fl,ug):pp()})}function Xu(){if(vr===0){var e=Ri;e===0&&(e=pt,pt<<=1,(pt&261888)===0&&(pt=256)),vr=e}return vr}function bp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:xl(""+e)}function yp(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function dg(e,n,t,l,r){if(n==="submit"&&t&&t.stateNode===r){var o=bp((r[An]||null).action),m=l.submitter;m&&(n=(n=m[An]||null)?bp(n.formAction):m.getAttribute("formAction"),n!==null&&(o=n,m=null));var v=new _i("action","action",null,l,r);e.push({event:v,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(vr!==0){var E=m?yp(r,m):new FormData(r);hu(t,{pending:!0,data:E,method:r.method,action:o},null,E)}}else typeof o=="function"&&(v.preventDefault(),E=m?yp(r,m):new FormData(r),hu(t,{pending:!0,data:E,method:r.method,action:o},o,E))},currentTarget:r}]})}}for(var Qu=0;Qu<rr.length;Qu++){var Zu=rr[Qu],mg=Zu.toLowerCase(),pg=Zu[0].toUpperCase()+Zu.slice(1);et(mg,"on"+pg)}et(Me,"onAnimationEnd"),et(ln,"onAnimationIteration"),et(il,"onAnimationStart"),et("dblclick","onDoubleClick"),et("focusin","onFocus"),et("focusout","onBlur"),et(Xt,"onTransitionRun"),et(Qt,"onTransitionStart"),et(lr,"onTransitionCancel"),et(Nl,"onTransitionEnd"),yl("onMouseEnter",["mouseout","mouseover"]),yl("onMouseLeave",["mouseout","mouseover"]),yl("onPointerEnter",["pointerout","pointerover"]),yl("onPointerLeave",["pointerout","pointerover"]),it("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),it("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),it("onBeforeInput",["compositionend","keypress","textInput","paste"]),it("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),it("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),it("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($a));function vp(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],r=l.event;l=l.listeners;e:{var o=void 0;if(n)for(var m=l.length-1;0<=m;m--){var v=l[m],E=v.instance,C=v.currentTarget;if(v=v.listener,E!==o&&r.isPropagationStopped())break e;o=v,r.currentTarget=C;try{o(r)}catch(F){al(F)}r.currentTarget=null,o=E}else for(m=0;m<l.length;m++){if(v=l[m],E=v.instance,C=v.currentTarget,v=v.listener,E!==o&&r.isPropagationStopped())break e;o=v,r.currentTarget=C;try{o(r)}catch(F){al(F)}r.currentTarget=null,o=E}}}}function Le(e,n){var t=n[Kl];t===void 0&&(t=n[Kl]=new Set);var l=e+"__bubble";t.has(l)||(xp(n,e,2,!1),t.add(l))}function Wu(e,n,t){var l=0;n&&(l|=4),xp(t,e,l,n)}var Co="_reactListening"+Math.random().toString(36).slice(2);function Ju(e){if(!e[Co]){e[Co]=!0,tl.forEach(function(t){t!=="selectionchange"&&(hg.has(t)||Wu(t,!1,e),Wu(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Co]||(n[Co]=!0,Wu("selectionchange",!1,n))}}function xp(e,n,t,l){switch(Qp(n)){case 2:var r=Pg;break;case 8:r=Yg;break;default:r=hf}t=r.bind(null,n,t,e),r=void 0,!Ot||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function ef(e,n,t,l,r){var o=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var m=l.tag;if(m===3||m===4){var v=l.stateNode.containerInfo;if(v===r)break;if(m===4)for(m=l.return;m!==null;){var E=m.tag;if((E===3||E===4)&&m.stateNode.containerInfo===r)return;m=m.return}for(;v!==null;){if(m=jt(v),m===null)return;if(E=m.tag,E===5||E===6||E===26||E===27){l=o=m;continue e}v=v.parentNode}}l=l.return}ua(function(){var C=o,F=Jl(t),X=[];e:{var B=wa.get(e);if(B!==void 0){var V=_i,ue=e;switch(e){case"keypress":if(yn(t)===0)break e;case"keydown":case"keyup":V=As;break;case"focusin":ue="focus",V=Gr;break;case"focusout":ue="blur",V=Gr;break;case"beforeblur":case"afterblur":V=Gr;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=Es;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=Ct;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=Bs;break;case Me:case ln:case il:V=ks;break;case Nl:V=wc;break;case"scroll":case"scrollend":V=gi;break;case"wheel":V=Ec;break;case"copy":case"cut":case"paste":V=Ts;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=Cs;break;case"toggle":case"beforetoggle":V=Nc}var we=(n&4)!==0,en=!we&&(e==="scroll"||e==="scrollend"),j=we?B!==null?B+"Capture":null:B;we=[];for(var T=C,O;T!==null;){var $=T;if(O=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||O===null||j===null||($=Ir(T,j),$!=null&&we.push(qa(T,$,O))),en)break;T=T.return}0<we.length&&(B=new V(B,ue,null,t,F),X.push({event:B,listeners:we}))}}if((n&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",V=e==="mouseout"||e==="pointerout",B&&t!==pi&&(ue=t.relatedTarget||t.fromElement)&&(jt(ue)||ue[ht]))break e;if((V||B)&&(B=F.window===F?F:(B=F.ownerDocument)?B.defaultView||B.parentWindow:window,V?(ue=t.relatedTarget||t.toElement,V=C,ue=ue?jt(ue):null,ue!==null&&(en=h(ue),we=ue.tag,ue!==en||we!==5&&we!==27&&we!==6)&&(ue=null)):(V=null,ue=C),V!==ue)){if(we=Es,$="onMouseLeave",j="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(we=Cs,$="onPointerLeave",j="onPointerEnter",T="pointer"),en=V==null?B:gl(V),O=ue==null?B:gl(ue),B=new we($,T+"leave",V,t,F),B.target=en,B.relatedTarget=O,$=null,jt(F)===C&&(we=new we(j,T+"enter",ue,t,F),we.target=O,we.relatedTarget=en,$=we),en=$,V&&ue)n:{for(we=_g,j=V,T=ue,O=0,$=j;$;$=we($))O++;$=0;for(var ve=T;ve;ve=we(ve))$++;for(;0<O-$;)j=we(j),O--;for(;0<$-O;)T=we(T),$--;for(;O--;){if(j===T||T!==null&&j===T.alternate){we=j;break n}j=we(j),T=we(T)}we=null}else we=null;V!==null&&wp(X,B,V,we,!1),ue!==null&&en!==null&&wp(X,en,ue,we,!0)}}e:{if(B=C?gl(C):window,V=B.nodeName&&B.nodeName.toLowerCase(),V==="select"||V==="input"&&B.type==="file")var Fe=Vs;else if(Is(B))if(Gs)Fe=va;else{Fe=ya;var he=Ac}else V=B.nodeName,!V||V.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?C&&vl(C.elementType)&&(Fe=Vs):Fe=xi;if(Fe&&(Fe=Fe(e,C))){_a(X,Fe,t,F);break e}he&&he(e,B,C),e==="focusout"&&C&&B.type==="number"&&C.memoizedProps.value!=null&&sa(B,"number",B.value)}switch(he=C?gl(C):window,e){case"focusin":(Is(he)||he.contentEditable==="true")&&(x=he,M=C,R=null);break;case"focusout":R=M=x=null;break;case"mousedown":Z=!0;break;case"contextmenu":case"mouseup":case"dragend":Z=!1,oe(X,t,F);break;case"selectionchange":if(_)break;case"keydown":case"keyup":oe(X,t,F)}var je;if(pa)e:{switch(e){case"compositionstart":var He="onCompositionStart";break e;case"compositionend":He="onCompositionEnd";break e;case"compositionupdate":He="onCompositionUpdate";break e}He=void 0}else El?Us(e,t)&&(He="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(He="onCompositionStart");He&&(Ls&&t.locale!=="ko"&&(El||He!=="onCompositionStart"?He==="onCompositionEnd"&&El&&(je=hi()):(ll=F,Ln="value"in ll?ll.value:ll.textContent,El=!0)),he=Bo(C,He),0<he.length&&(He=new Rs(He,e,null,t,F),X.push({event:He,listeners:he}),je?He.data=je:(je=ha(t),je!==null&&(He.data=je)))),(je=Rc?Mc(e,t):Hs(e,t))&&(He=Bo(C,"onBeforeInput"),0<He.length&&(he=new Rs("onBeforeInput","beforeinput",null,t,F),X.push({event:he,listeners:He}),he.data=je)),dg(X,e,C,t,F)}vp(X,n)})}function qa(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Bo(e,n){for(var t=n+"Capture",l=[];e!==null;){var r=e,o=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||o===null||(r=Ir(e,t),r!=null&&l.unshift(qa(e,r,o)),r=Ir(e,n),r!=null&&l.push(qa(e,r,o))),e.tag===3)return l;e=e.return}return[]}function _g(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function wp(e,n,t,l,r){for(var o=n._reactName,m=[];t!==null&&t!==l;){var v=t,E=v.alternate,C=v.stateNode;if(v=v.tag,E!==null&&E===l)break;v!==5&&v!==26&&v!==27||C===null||(E=C,r?(C=Ir(t,o),C!=null&&m.unshift(qa(t,C,E))):r||(C=Ir(t,o),C!=null&&m.push(qa(t,C,E)))),t=t.return}m.length!==0&&e.push({event:n,listeners:m})}var gg=/\r\n?/g,bg=/\u0000|\uFFFD/g;function Sp(e){return(typeof e=="string"?e:""+e).replace(gg,`
`).replace(bg,"")}function Ep(e,n){return n=Sp(n),Sp(e)===n}function Je(e,n,t,l,r,o){switch(t){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||Y(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&Y(e,""+l);break;case"className":be(e,"class",l);break;case"tabIndex":be(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":be(e,t,l);break;case"style":ys(e,l,o);break;case"data":if(n!=="object"){be(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=xl(""+l),e.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(t==="formAction"?(n!=="input"&&Je(e,n,"name",r.name,r,null),Je(e,n,"formEncType",r.formEncType,r,null),Je(e,n,"formMethod",r.formMethod,r,null),Je(e,n,"formTarget",r.formTarget,r,null)):(Je(e,n,"encType",r.encType,r,null),Je(e,n,"method",r.method,r,null),Je(e,n,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=xl(""+l),e.setAttribute(t,l);break;case"onClick":l!=null&&(e.onclick=Xe);break;case"onScroll":l!=null&&Le("scroll",e);break;case"onScrollEnd":l!=null&&Le("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(t=l.__html,t!=null){if(r.children!=null)throw Error(a(60));e.innerHTML=t}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}t=xl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""+l):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":l===!0?e.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,l):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(t,l):e.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(t):e.setAttribute(t,l);break;case"popover":Le("beforetoggle",e),Le("toggle",e),$t(e,"popover",l);break;case"xlinkActuate":_t(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":_t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":_t(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":_t(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":_t(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":_t(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":_t(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":_t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":_t(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":$t(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=vs.get(t)||t,$t(e,t,l))}}function nf(e,n,t,l,r,o){switch(t){case"style":ys(e,l,o);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(t=l.__html,t!=null){if(r.children!=null)throw Error(a(60));e.innerHTML=t}}break;case"children":typeof l=="string"?Y(e,l):(typeof l=="number"||typeof l=="bigint")&&Y(e,""+l);break;case"onScroll":l!=null&&Le("scroll",e);break;case"onScrollEnd":l!=null&&Le("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Xe);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!bl.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(r=t.endsWith("Capture"),n=t.slice(2,r?t.length-7:void 0),o=e[An]||null,o=o!=null?o[t]:null,typeof o=="function"&&e.removeEventListener(n,o,r),typeof l=="function")){typeof o!="function"&&o!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,l,r);break e}t in e?e[t]=l:l===!0?e.setAttribute(t,""):$t(e,t,l)}}}function Pn(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Le("error",e),Le("load",e);var l=!1,r=!1,o;for(o in t)if(t.hasOwnProperty(o)){var m=t[o];if(m!=null)switch(o){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Je(e,n,o,m,t,null)}}r&&Je(e,n,"srcSet",t.srcSet,t,null),l&&Je(e,n,"src",t.src,t,null);return;case"input":Le("invalid",e);var v=o=m=r=null,E=null,C=null;for(l in t)if(t.hasOwnProperty(l)){var F=t[l];if(F!=null)switch(l){case"name":r=F;break;case"type":m=F;break;case"checked":E=F;break;case"defaultChecked":C=F;break;case"value":o=F;break;case"defaultValue":v=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(a(137,n));break;default:Je(e,n,l,F,t,null)}}Jn(e,o,v,E,C,m,r,!1);return;case"select":Le("invalid",e),l=m=o=null;for(r in t)if(t.hasOwnProperty(r)&&(v=t[r],v!=null))switch(r){case"value":o=v;break;case"defaultValue":m=v;break;case"multiple":l=v;default:Je(e,n,r,v,t,null)}n=o,t=m,e.multiple=!!l,n!=null?Wl(e,!!l,n,!1):t!=null&&Wl(e,!!l,t,!0);return;case"textarea":Le("invalid",e),o=r=l=null;for(m in t)if(t.hasOwnProperty(m)&&(v=t[m],v!=null))switch(m){case"value":l=v;break;case"defaultValue":r=v;break;case"children":o=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(a(91));break;default:Je(e,n,m,v,t,null)}mi(e,l,r,o);return;case"option":for(E in t)if(t.hasOwnProperty(E)&&(l=t[E],l!=null))switch(E){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Je(e,n,E,l,t,null)}return;case"dialog":Le("beforetoggle",e),Le("toggle",e),Le("cancel",e),Le("close",e);break;case"iframe":case"object":Le("load",e);break;case"video":case"audio":for(l=0;l<$a.length;l++)Le($a[l],e);break;case"image":Le("error",e),Le("load",e);break;case"details":Le("toggle",e);break;case"embed":case"source":case"link":Le("error",e),Le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in t)if(t.hasOwnProperty(C)&&(l=t[C],l!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Je(e,n,C,l,t,null)}return;default:if(vl(n)){for(F in t)t.hasOwnProperty(F)&&(l=t[F],l!==void 0&&nf(e,n,F,l,t,void 0));return}}for(v in t)t.hasOwnProperty(v)&&(l=t[v],l!=null&&Je(e,n,v,l,t,null))}function yg(e,n,t,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,o=null,m=null,v=null,E=null,C=null,F=null;for(V in t){var X=t[V];if(t.hasOwnProperty(V)&&X!=null)switch(V){case"checked":break;case"value":break;case"defaultValue":E=X;default:l.hasOwnProperty(V)||Je(e,n,V,null,l,X)}}for(var B in l){var V=l[B];if(X=t[B],l.hasOwnProperty(B)&&(V!=null||X!=null))switch(B){case"type":o=V;break;case"name":r=V;break;case"checked":C=V;break;case"defaultChecked":F=V;break;case"value":m=V;break;case"defaultValue":v=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(a(137,n));break;default:V!==X&&Je(e,n,B,V,l,X)}}Hr(e,m,v,E,C,F,o,r);return;case"select":V=m=v=B=null;for(o in t)if(E=t[o],t.hasOwnProperty(o)&&E!=null)switch(o){case"value":break;case"multiple":V=E;default:l.hasOwnProperty(o)||Je(e,n,o,null,l,E)}for(r in l)if(o=l[r],E=t[r],l.hasOwnProperty(r)&&(o!=null||E!=null))switch(r){case"value":B=o;break;case"defaultValue":v=o;break;case"multiple":m=o;default:o!==E&&Je(e,n,r,o,l,E)}n=v,t=m,l=V,B!=null?Wl(e,!!t,B,!1):!!l!=!!t&&(n!=null?Wl(e,!!t,n,!0):Wl(e,!!t,t?[]:"",!1));return;case"textarea":V=B=null;for(v in t)if(r=t[v],t.hasOwnProperty(v)&&r!=null&&!l.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Je(e,n,v,null,l,r)}for(m in l)if(r=l[m],o=t[m],l.hasOwnProperty(m)&&(r!=null||o!=null))switch(m){case"value":B=r;break;case"defaultValue":V=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(a(91));break;default:r!==o&&Je(e,n,m,r,l,o)}oa(e,B,V);return;case"option":for(var ue in t)if(B=t[ue],t.hasOwnProperty(ue)&&B!=null&&!l.hasOwnProperty(ue))switch(ue){case"selected":e.selected=!1;break;default:Je(e,n,ue,null,l,B)}for(E in l)if(B=l[E],V=t[E],l.hasOwnProperty(E)&&B!==V&&(B!=null||V!=null))switch(E){case"selected":e.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Je(e,n,E,B,l,V)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var we in t)B=t[we],t.hasOwnProperty(we)&&B!=null&&!l.hasOwnProperty(we)&&Je(e,n,we,null,l,B);for(C in l)if(B=l[C],V=t[C],l.hasOwnProperty(C)&&B!==V&&(B!=null||V!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(a(137,n));break;default:Je(e,n,C,B,l,V)}return;default:if(vl(n)){for(var en in t)B=t[en],t.hasOwnProperty(en)&&B!==void 0&&!l.hasOwnProperty(en)&&nf(e,n,en,void 0,l,B);for(F in l)B=l[F],V=t[F],!l.hasOwnProperty(F)||B===V||B===void 0&&V===void 0||nf(e,n,F,B,l,V);return}}for(var j in t)B=t[j],t.hasOwnProperty(j)&&B!=null&&!l.hasOwnProperty(j)&&Je(e,n,j,null,l,B);for(X in l)B=l[X],V=t[X],!l.hasOwnProperty(X)||B===V||B==null&&V==null||Je(e,n,X,B,l,V)}function kp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var r=t[l],o=r.transferSize,m=r.initiatorType,v=r.duration;if(o&&v&&kp(m)){for(m=0,v=r.responseEnd,l+=1;l<t.length;l++){var E=t[l],C=E.startTime;if(C>v)break;var F=E.transferSize,X=E.initiatorType;F&&kp(X)&&(E=E.responseEnd,m+=F*(E<v?1:(v-C)/(E-C)))}if(--l,n+=8*(o+m)/(r.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var tf=null,lf=null;function Lo(e){return e.nodeType===9?e:e.ownerDocument}function Np(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tp(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function rf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var af=null;function xg(){var e=window.event;return e&&e.type==="popstate"?e===af?!1:(af=e,!0):(af=null,!1)}var Rp=typeof setTimeout=="function"?setTimeout:void 0,wg=typeof clearTimeout=="function"?clearTimeout:void 0,Mp=typeof Promise=="function"?Promise:void 0,Sg=typeof queueMicrotask=="function"?queueMicrotask:typeof Mp<"u"?function(e){return Mp.resolve(null).then(e).catch(Eg)}:Rp;function Eg(e){setTimeout(function(){throw e})}function xr(e){return e==="head"}function jp(e,n){var t=n,l=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"||t==="/&"){if(l===0){e.removeChild(r),qi(n);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")Ka(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Ka(t);for(var o=t.firstChild;o;){var m=o.nextSibling,v=o.nodeName;o[Zn]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&o.rel.toLowerCase()==="stylesheet"||t.removeChild(o),o=m}}else t==="body"&&Ka(e.ownerDocument.body);t=r}while(t);qi(n)}function Dp(e,n){var t=e;e=0;do{var l=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=l}while(t)}function sf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":sf(t),nl(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function kg(e,n,t,l){for(;e.nodeType===1;){var r=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Zn])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var o=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=It(e.nextSibling),e===null)break}return null}function Ng(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=It(e.nextSibling),e===null))return null;return e}function Ap(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=It(e.nextSibling),e===null))return null;return e}function of(e){return e.data==="$?"||e.data==="$~"}function cf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Tg(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var l=function(){n(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function It(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var uf=null;function Op(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return It(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function Cp(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function Bp(e,n,t){switch(n=Lo(t),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Ka(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);nl(e)}var Vt=new Map,Lp=new Set;function zo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Vl=ne.d;ne.d={f:Rg,r:Mg,D:jg,C:Dg,L:Ag,m:Og,X:Bg,S:Cg,M:Lg};function Rg(){var e=Vl.f(),n=Ro();return e||n}function Mg(e){var n=rt(e);n!==null&&n.tag===5&&n.type==="form"?Jd(n):Vl.r(e)}var Yi=typeof document>"u"?null:document;function zp(e,n,t){var l=Yi;if(l&&typeof n=="string"&&n){var r=dn(n);r='link[rel="'+e+'"][href="'+r+'"]',typeof t=="string"&&(r+='[crossorigin="'+t+'"]'),Lp.has(r)||(Lp.add(r),e={rel:e,crossOrigin:t,href:n},l.querySelector(r)===null&&(n=l.createElement("link"),Pn(n,"link",e),cn(n),l.head.appendChild(n)))}}function jg(e){Vl.D(e),zp("dns-prefetch",e,null)}function Dg(e,n){Vl.C(e,n),zp("preconnect",e,n)}function Ag(e,n,t){Vl.L(e,n,t);var l=Yi;if(l&&e&&n){var r='link[rel="preload"][as="'+dn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(r+='[imagesrcset="'+dn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(r+='[imagesizes="'+dn(t.imageSizes)+'"]')):r+='[href="'+dn(e)+'"]';var o=r;switch(n){case"style":o=Fi(e);break;case"script":o=$i(e)}Vt.has(o)||(e=S({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Vt.set(o,e),l.querySelector(r)!==null||n==="style"&&l.querySelector(Xa(o))||n==="script"&&l.querySelector(Qa(o))||(n=l.createElement("link"),Pn(n,"link",e),cn(n),l.head.appendChild(n)))}}function Og(e,n){Vl.m(e,n);var t=Yi;if(t&&e){var l=n&&typeof n.as=="string"?n.as:"script",r='link[rel="modulepreload"][as="'+dn(l)+'"][href="'+dn(e)+'"]',o=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=$i(e)}if(!Vt.has(o)&&(e=S({rel:"modulepreload",href:e},n),Vt.set(o,e),t.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Qa(o)))return}l=t.createElement("link"),Pn(l,"link",e),cn(l),t.head.appendChild(l)}}}function Cg(e,n,t){Vl.S(e,n,t);var l=Yi;if(l&&e){var r=Wn(l).hoistableStyles,o=Fi(e);n=n||"default";var m=r.get(o);if(!m){var v={loading:0,preload:null};if(m=l.querySelector(Xa(o)))v.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Vt.get(o))&&ff(e,t);var E=m=l.createElement("link");cn(E),Pn(E,"link",e),E._p=new Promise(function(C,F){E.onload=C,E.onerror=F}),E.addEventListener("load",function(){v.loading|=1}),E.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Uo(m,n,l)}m={type:"stylesheet",instance:m,count:1,state:v},r.set(o,m)}}}function Bg(e,n){Vl.X(e,n);var t=Yi;if(t&&e){var l=Wn(t).hoistableScripts,r=$i(e),o=l.get(r);o||(o=t.querySelector(Qa(r)),o||(e=S({src:e,async:!0},n),(n=Vt.get(r))&&df(e,n),o=t.createElement("script"),cn(o),Pn(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},l.set(r,o))}}function Lg(e,n){Vl.M(e,n);var t=Yi;if(t&&e){var l=Wn(t).hoistableScripts,r=$i(e),o=l.get(r);o||(o=t.querySelector(Qa(r)),o||(e=S({src:e,async:!0,type:"module"},n),(n=Vt.get(r))&&df(e,n),o=t.createElement("script"),cn(o),Pn(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},l.set(r,o))}}function Up(e,n,t,l){var r=(r=I.current)?zo(r):null;if(!r)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Fi(t.href),t=Wn(r).hoistableStyles,l=t.get(n),l||(l={type:"style",instance:null,count:0,state:null},t.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Fi(t.href);var o=Wn(r).hoistableStyles,m=o.get(e);if(m||(r=r.ownerDocument||r,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,m),(o=r.querySelector(Xa(e)))&&!o._p&&(m.instance=o,m.state.loading=5),Vt.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Vt.set(e,t),o||zg(r,e,t,m.state))),n&&l===null)throw Error(a(528,""));return m}if(n&&l!==null)throw Error(a(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=$i(t),t=Wn(r).hoistableScripts,l=t.get(n),l||(l={type:"script",instance:null,count:0,state:null},t.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Fi(e){return'href="'+dn(e)+'"'}function Xa(e){return'link[rel="stylesheet"]['+e+"]"}function Hp(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function zg(e,n,t,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Pn(n,"link",t),cn(n),e.head.appendChild(n))}function $i(e){return'[src="'+dn(e)+'"]'}function Qa(e){return"script[async]"+e}function Ip(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+dn(t.href)+'"]');if(l)return n.instance=l,cn(l),l;var r=S({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),cn(l),Pn(l,"style",r),Uo(l,t.precedence,e),n.instance=l;case"stylesheet":r=Fi(t.href);var o=e.querySelector(Xa(r));if(o)return n.state.loading|=4,n.instance=o,cn(o),o;l=Hp(t),(r=Vt.get(r))&&ff(l,r),o=(e.ownerDocument||e).createElement("link"),cn(o);var m=o;return m._p=new Promise(function(v,E){m.onload=v,m.onerror=E}),Pn(o,"link",l),n.state.loading|=4,Uo(o,t.precedence,e),n.instance=o;case"script":return o=$i(t.src),(r=e.querySelector(Qa(o)))?(n.instance=r,cn(r),r):(l=t,(r=Vt.get(o))&&(l=S({},t),df(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),cn(r),Pn(r,"link",l),e.head.appendChild(r),n.instance=r);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Uo(l,t.precedence,e));return n.instance}function Uo(e,n,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,o=r,m=0;m<l.length;m++){var v=l[m];if(v.dataset.precedence===n)o=v;else if(o!==r)break}o?o.parentNode.insertBefore(e,o.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function ff(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function df(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Ho=null;function Vp(e,n,t){if(Ho===null){var l=new Map,r=Ho=new Map;r.set(t,l)}else r=Ho,l=r.get(t),l||(l=new Map,r.set(t,l));if(l.has(e))return l;for(l.set(e,null),t=t.getElementsByTagName(e),r=0;r<t.length;r++){var o=t[r];if(!(o[Zn]||o[_n]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var m=o.getAttribute(n)||"";m=e+m;var v=l.get(m);v?v.push(o):l.set(m,[o])}}return l}function Gp(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Ug(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Pp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Hg(e,n,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=Fi(l.href),o=n.querySelector(Xa(r));if(o){n=o._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Io.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=o,cn(o);return}o=n.ownerDocument||n,l=Hp(l),(r=Vt.get(r))&&ff(l,r),o=o.createElement("link"),cn(o);var m=o;m._p=new Promise(function(v,E){m.onload=v,m.onerror=E}),Pn(o,"link",l),t.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Io.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var mf=0;function Ig(e,n){return e.stylesheets&&e.count===0&&Go(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var l=setTimeout(function(){if(e.stylesheets&&Go(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+n);0<e.imgBytes&&mf===0&&(mf=62500*vg());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Go(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>mf?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function Io(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Go(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vo=null;function Go(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vo=new Map,n.forEach(Vg,e),Vo=null,Io.call(e))}function Vg(e,n){if(!(n.state.loading&4)){var t=Vo.get(e);if(t)var l=t.get(null);else{t=new Map,Vo.set(e,t);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<r.length;o++){var m=r[o];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(t.set(m.dataset.precedence,m),l=m)}l&&t.set(null,l)}r=n.instance,m=r.getAttribute("data-precedence"),o=t.get(m)||l,o===l&&t.set(null,r),t.set(m,r),this.count++,l=Io.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),o?o.parentNode.insertBefore(r,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),n.state.loading|=4}}var Za={$$typeof:re,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function Gg(e,n,t,l,r,o,m,v,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=el(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=el(0),this.hiddenUpdates=el(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=o,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Yp(e,n,t,l,r,o,m,v,E,C,F,X){return e=new Gg(e,n,t,m,E,C,F,X,v),n=1,o===!0&&(n|=24),o=yt(3,null,null,n),e.current=o,o.stateNode=e,n=Fc(),n.refCount++,e.pooledCache=n,n.refCount++,o.memoizedState={element:l,isDehydrated:t,cache:n},Xc(o),e}function Fp(e){return e?(e=Si,e):Si}function $p(e,n,t,l,r,o){r=Fp(r),l.context===null?l.context=r:l.pendingContext=r,l=ur(n),l.payload={element:t},o=o===void 0?null:o,o!==null&&(l.callback=o),t=fr(e,l,n),t!==null&&(ft(t,e,n),Ma(t,e,n))}function qp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function pf(e,n){qp(e,n),(e=e.alternate)&&qp(e,n)}function Kp(e){if(e.tag===13||e.tag===31){var n=Kr(e,67108864);n!==null&&ft(n,e,67108864),pf(e,67108864)}}function Xp(e){if(e.tag===13||e.tag===31){var n=Et();n=ql(n);var t=Kr(e,n);t!==null&&ft(t,e,n),pf(e,n)}}var Po=!0;function Pg(e,n,t,l){var r=H.T;H.T=null;var o=ne.p;try{ne.p=2,hf(e,n,t,l)}finally{ne.p=o,H.T=r}}function Yg(e,n,t,l){var r=H.T;H.T=null;var o=ne.p;try{ne.p=8,hf(e,n,t,l)}finally{ne.p=o,H.T=r}}function hf(e,n,t,l){if(Po){var r=_f(l);if(r===null)ef(e,n,l,Yo,t),Zp(e,l);else if($g(r,e,n,t,l))l.stopPropagation();else if(Zp(e,l),n&4&&-1<Fg.indexOf(e)){for(;r!==null;){var o=rt(r);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var m=sn(o.pendingLanes);if(m!==0){var v=o;for(v.pendingLanes|=2,v.entangledLanes|=2;m;){var E=1<<31-Un(m);v.entanglements[1]|=E,m&=~E}ul(o),(Ke&6)===0&&(No=En()+500,Fa(0))}}break;case 31:case 13:v=Kr(o,2),v!==null&&ft(v,o,2),Ro(),pf(o,2)}if(o=_f(l),o===null&&ef(e,n,l,Yo,t),o===r)break;r=o}r!==null&&l.stopPropagation()}else ef(e,n,l,null,t)}}function _f(e){return e=Jl(e),gf(e)}var Yo=null;function gf(e){if(Yo=null,e=jt(e),e!==null){var n=h(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=b(n),e!==null)return e;e=null}else if(t===31){if(e=p(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Yo=e,null}function Qp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dr()){case Fl:return 2;case la:return 8;case Ar:case Qn:return 32;case dt:return 268435456;default:return 32}default:return 32}}var bf=!1,wr=null,Sr=null,Er=null,Wa=new Map,Ja=new Map,kr=[],Fg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zp(e,n){switch(e){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":Wa.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ja.delete(n.pointerId)}}function es(e,n,t,l,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:l,nativeEvent:o,targetContainers:[r]},n!==null&&(n=rt(n),n!==null&&Kp(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function $g(e,n,t,l,r){switch(n){case"focusin":return wr=es(wr,e,n,t,l,r),!0;case"dragenter":return Sr=es(Sr,e,n,t,l,r),!0;case"mouseover":return Er=es(Er,e,n,t,l,r),!0;case"pointerover":var o=r.pointerId;return Wa.set(o,es(Wa.get(o)||null,e,n,t,l,r)),!0;case"gotpointercapture":return o=r.pointerId,Ja.set(o,es(Ja.get(o)||null,e,n,t,l,r)),!0}return!1}function Wp(e){var n=jt(e.target);if(n!==null){var t=h(n);if(t!==null){if(n=t.tag,n===13){if(n=b(t),n!==null){e.blockedOn=n,ra(e.priority,function(){Xp(t)});return}}else if(n===31){if(n=p(t),n!==null){e.blockedOn=n,ra(e.priority,function(){Xp(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=_f(e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);pi=l,t.target.dispatchEvent(l),pi=null}else return n=rt(t),n!==null&&Kp(n),e.blockedOn=t,!1;n.shift()}return!0}function Jp(e,n,t){Fo(e)&&t.delete(n)}function qg(){bf=!1,wr!==null&&Fo(wr)&&(wr=null),Sr!==null&&Fo(Sr)&&(Sr=null),Er!==null&&Fo(Er)&&(Er=null),Wa.forEach(Jp),Ja.forEach(Jp)}function $o(e,n){e.blockedOn===n&&(e.blockedOn=null,bf||(bf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,qg)))}var qo=null;function eh(e){qo!==e&&(qo=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){qo===e&&(qo=null);for(var n=0;n<e.length;n+=3){var t=e[n],l=e[n+1],r=e[n+2];if(typeof l!="function"){if(gf(l||t)===null)continue;break}var o=rt(t);o!==null&&(e.splice(n,3),n-=3,hu(o,{pending:!0,data:r,method:t.method,action:l},l,r))}}))}function qi(e){function n(E){return $o(E,e)}wr!==null&&$o(wr,e),Sr!==null&&$o(Sr,e),Er!==null&&$o(Er,e),Wa.forEach(n),Ja.forEach(n);for(var t=0;t<kr.length;t++){var l=kr[t];l.blockedOn===e&&(l.blockedOn=null)}for(;0<kr.length&&(t=kr[0],t.blockedOn===null);)Wp(t),t.blockedOn===null&&kr.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var r=t[l],o=t[l+1],m=r[An]||null;if(typeof o=="function")m||eh(t);else if(m){var v=null;if(o&&o.hasAttribute("formAction")){if(r=o,m=o[An]||null)v=m.formAction;else if(gf(r)!==null)continue}else v=m.action;typeof v=="function"?t[l+1]=v:(t.splice(l,3),l-=3),eh(t)}}}function nh(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(m){return r=m})},focusReset:"manual",scroll:"manual"})}function n(){r!==null&&(r(),r=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),r!==null&&(r(),r=null)}}}function yf(e){this._internalRoot=e}Ko.prototype.render=yf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var t=n.current,l=Et();$p(t,l,e,n,null,null)},Ko.prototype.unmount=yf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;$p(e.current,2,null,e,null,null),Ro(),n[ht]=null}};function Ko(e){this._internalRoot=e}Ko.prototype.unstable_scheduleHydration=function(e){if(e){var n=fn();e={blockedOn:null,target:e,priority:n};for(var t=0;t<kr.length&&n!==0&&n<kr[t].priority;t++);kr.splice(t,0,e),t===0&&Wp(e)}};var th=i.version;if(th!=="19.2.7")throw Error(a(527,th,"19.2.7"));ne.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=y(n),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var Kg={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xo.isDisabled&&Xo.supportsFiber)try{Or=Xo.inject(Kg),Dn=Xo}catch{}}return ts.createRoot=function(e,n){if(!f(e))throw Error(a(299));var t=!1,l="",r=cm,o=um,m=fm;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),n=Yp(e,1,!1,null,null,t,l,null,r,o,m,nh),e[ht]=n.current,Ju(e),new yf(n)},ts.hydrateRoot=function(e,n,t){if(!f(e))throw Error(a(299));var l=!1,r="",o=cm,m=um,v=fm,E=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(m=t.onCaughtError),t.onRecoverableError!==void 0&&(v=t.onRecoverableError),t.formState!==void 0&&(E=t.formState)),n=Yp(e,1,!0,n,t??null,l,r,E,o,m,v,nh),n.context=Fp(null),t=n.current,l=Et(),l=ql(l),r=ur(l),r.callback=null,fr(t,r,l),t=l,n.current.lanes=t,Br(n,t),ul(n),e[ht]=n.current,Ju(e),new Ko(n)},ts.version="19.2.7",ts}var dh;function ab(){if(dh)return wf.exports;dh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),wf.exports=ib(),wf.exports}var sb=ab();const ob=a_(sb),mh=s=>{let i;const c=new Set,a=(y,w)=>{const S=typeof y=="function"?y(i):y;if(!Object.is(S,i)){const N=i;i=w??(typeof S!="object"||S===null)?S:Object.assign({},i,S),c.forEach(D=>D(i,N))}},f=()=>i,p={setState:a,getState:f,getInitialState:()=>g,subscribe:y=>(c.add(y),()=>c.delete(y))},g=i=s(a,f,p);return p},cb=(s=>s?mh(s):mh),ub=s=>s;function fb(s,i=ub){const c=cs.useSyncExternalStore(s.subscribe,cs.useCallback(()=>i(s.getState()),[s,i]),cs.useCallback(()=>i(s.getInitialState()),[s,i]));return cs.useDebugValue(c),c}const ph=s=>{const i=cb(s),c=a=>fb(i,a);return Object.assign(c,i),c},db=(s=>s?ph(s):ph);function mb(){const s=new Uint8Array(16);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(s);else for(let c=0;c<s.length;c+=1)s[c]=Math.floor(Math.random()*256);let i="";for(const c of s)i+=c.toString(16).padStart(2,"0");return i}const Qf="pkp.user",Zf="pkp.savedDevices",Wf="pkp.ideDrafts",Jf="pkp.ideSettings",ds="Prototype Version 0.6.7";function uc(s){try{const i=localStorage.getItem(s);return i?JSON.parse(i):null}catch{return null}}function fc(s,i){try{localStorage.setItem(s,JSON.stringify(i))}catch{}}function pb(){const s=uc(Qf);return s&&typeof s.username=="string"&&typeof s.userID=="string"?s:null}function Nf(s){fc(Qf,s)}function ic(){return uc(Zf)??[]}function Zi(s){fc(Zf,s)}function hb(){Zi([])}function _b(){try{localStorage.removeItem(Qf),localStorage.removeItem(Zf),localStorage.removeItem(Wf),localStorage.removeItem(Jf)}catch{}}function Qo(){var s;return((s=uc(Wf))==null?void 0:s.filter(i=>i.path&&typeof i.content=="string"))??[]}function ls(s){fc(Wf,s)}function hh(){const s=uc(Jf)??{};return{clearTerminalOnRun:!!s.clearTerminalOnRun,simplifiedErrors:s.simplifiedErrors!==!1}}function gb(s){fc(Jf,s)}function Tf(s){const i=ic(),c=i.findIndex(a=>a.deviceID===s.deviceID);return c>=0?i[c]=s:i.push(s),Zi(i),i}function bb(s){const i=ic().filter(c=>c.deviceID!==s);return Zi(i),i}const If="b8e06067-62ad-41ba-9231-206ae80ab551",yb="f897177b-aee8-4767-8ecc-cc694fd5fce0",vb="f897177b-aee8-4767-8ecc-cc694fd5fce1",Rf=20,xb=12,wb=new TextEncoder;function Sb(s){return new Promise(i=>setTimeout(i,s))}function dc(){return typeof navigator<"u"&&"bluetooth"in navigator}function s_(s){return s?s.startsWith("PicoW-")?s.slice(6):s:"Pico"}async function Eb(){if(!dc())throw new Error("Web Bluetooth er ikke tilgængelig i denne browser.");return navigator.bluetooth.requestDevice({filters:[{services:[If]},{namePrefix:"PicoW-"}],optionalServices:[If]})}async function o_(){if(!dc()||!navigator.bluetooth.getDevices)return[];try{return await navigator.bluetooth.getDevices()}catch{return[]}}class kb{constructor(){fe(this,"device",null);fe(this,"writeChar",null);fe(this,"notifyChar",null);fe(this,"buffer","");fe(this,"decoder",new TextDecoder);fe(this,"writeQueue",Promise.resolve());fe(this,"disconnectNotified",!1);fe(this,"onLine",()=>{});fe(this,"onDisconnect",()=>{});fe(this,"handleNotification",i=>{const c=i.target;if(!(c!=null&&c.value))return;this.buffer+=this.decoder.decode(c.value.buffer,{stream:!0});let a=this.buffer.indexOf(`
`);for(;a>=0;){const f=this.buffer.slice(0,a).trim();this.buffer=this.buffer.slice(a+1),f&&this.onLine(f),a=this.buffer.indexOf(`
`)}});fe(this,"handleDisconnected",()=>{var i;this.disconnectNotified||(this.disconnectNotified=!0,(i=this.device)==null||i.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.writeChar=null,this.notifyChar=null,this.onDisconnect())})}get connected(){var i,c;return!!((c=(i=this.device)==null?void 0:i.gatt)!=null&&c.connected)}async connect(i){var f;this.device&&this.device!==i&&this.device.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.device=i,this.buffer="",this.decoder=new TextDecoder,this.disconnectNotified=!1,i.removeEventListener("gattserverdisconnected",this.handleDisconnected),i.addEventListener("gattserverdisconnected",this.handleDisconnected);const c=await((f=i.gatt)==null?void 0:f.connect());if(!c)throw new Error("Kunne ikke åbne Bluetooth-forbindelsen.");const a=await c.getPrimaryService(If);this.writeChar=await a.getCharacteristic(yb),this.notifyChar=await a.getCharacteristic(vb),await this.notifyChar.startNotifications(),this.notifyChar.addEventListener("characteristicvaluechanged",this.handleNotification)}writeLine(i){const c=this.writeQueue.then(()=>this.doWrite(i));return this.writeQueue=c.catch(()=>{}),c}async doWrite(i){if(!this.writeChar)throw new Error("Ingen forbindelse.");const c=wb.encode(`${i}
`),f=this.writeChar.properties.writeWithoutResponse&&typeof this.writeChar.writeValueWithoutResponse=="function"?this.writeChar.writeValueWithoutResponse.bind(this.writeChar):this.writeChar.writeValue.bind(this.writeChar);for(let h=0;h<c.length;h+=Rf){const b=c.slice(h,h+Rf);await f(b),h+Rf<c.length&&await Sb(xb)}}disconnect(){var c;const i=this.device;(c=i==null?void 0:i.gatt)!=null&&c.connected?i.gatt.disconnect():this.handleDisconnected()}}class Nb{constructor(i,c){fe(this,"send");fe(this,"onMessage");fe(this,"inActive",!1);fe(this,"inExpectedTotal",0);fe(this,"inStreamId",0);fe(this,"inParts",new Map);fe(this,"inProgress",null);fe(this,"outPendingLines",null);fe(this,"outWaitingAck",!1);fe(this,"outStreamId",0);fe(this,"outNextStreamId",1);fe(this,"outCache",new Map);fe(this,"outProgress",null);fe(this,"outResolve",null);fe(this,"outReject",null);this.send=i,this.onMessage=c}reset(){this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear(),this.inProgress=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outStreamId=0,this.outCache.clear(),this.outProgress=null,this.outResolve=null,this.outReject=null}handleLine(i){var a;if(i.startsWith("prep,")){const f=i.split(","),h=f.length>=2&&/^\d+$/.test(f[1])?parseInt(f[1],10):null,b=f.length>=3&&/^\d+$/.test(f[2])?parseInt(f[2],10):0;h!==null&&h>0&&(this.inActive=!0,this.inExpectedTotal=h,this.inStreamId=b,this.inParts.clear(),this.send(b>0?`ack:prep,${b}`:"ack:prep"));return}if(i==="ack:prep"||i===`ack:prep,${this.outStreamId}`){this.flushOutbound();return}if(i.startsWith("miss,")){const f=i.split(",");if(f.length>=3&&/^\d+$/.test(f[1])&&/^\d+$/.test(f[2])){const h=parseInt(f[1],10),b=parseInt(f[2],10),p=this.outCache.get(b);h===this.outStreamId&&p&&this.send(p)}return}const c=this.parseNumbered(i);if(c){const{idx:f,payload:h}=c;if(!this.inActive){this.onMessage(h);return}this.inParts.has(f)||(this.inParts.set(f,h),(a=this.inProgress)==null||a.call(this,this.inParts.size,this.inExpectedTotal));let b=0;for(let p=1;p<=this.inExpectedTotal;p+=1)if(!this.inParts.has(p)){b=p;break}if(b>0&&this.inStreamId>0&&f>b&&this.send(`miss,${this.inStreamId},${b}`),this.inParts.size>=this.inExpectedTotal){for(let p=1;p<=this.inExpectedTotal;p+=1){const g=this.inParts.get(p);g!==void 0&&this.onMessage(g)}this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear()}return}this.onMessage(i)}setInboundProgress(i){this.inProgress=i}async sendReliable(i,c){if(this.outPendingLines!==null||this.outWaitingAck)throw new Error("Reliable stream is already sending.");const a=i.length===0?[""]:i;this.outPendingLines=[...a],this.outWaitingAck=!0,this.outProgress=c??null,this.outStreamId=this.outNextStreamId,this.outNextStreamId+=1,this.outCache.clear();const f=new Promise((h,b)=>{this.outResolve=h,this.outReject=b});try{await this.send(`prep,${a.length},${this.outStreamId}`)}catch(h){throw this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null,h}await f}async flushOutbound(){var i,c,a,f;if(!this.outWaitingAck||this.outPendingLines===null){this.outWaitingAck=!1,this.outProgress=null,(i=this.outResolve)==null||i.call(this),this.outResolve=null,this.outReject=null;return}try{const h=this.outPendingLines.length;for(let b=0;b<h;b+=1){const p=this.outPendingLines[b],g=`${b+1}-${p}`;this.outCache.set(b+1,g),await this.send(g),(c=this.outProgress)==null||c.call(this,b+1,h,p)}(a=this.outResolve)==null||a.call(this)}catch(h){(f=this.outReject)==null||f.call(this,h)}finally{this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null}}parseNumbered(i){const c=i.indexOf("-");if(c<=0)return null;const a=i.slice(0,c);if(!/^\d+$/.test(a))return null;const f=parseInt(a,10);return f<1?null:{idx:f,payload:i.slice(c+1)}}}const ea=11,ms=31,Tb=2,Rb=60,Wi=4,Ji=40;function Mb(s,i){return Math.max(14,Math.min(56,Math.min(s,i)*.05))}function c_(s,i,c=ea,a=ms){const f=Mb(s,i),h=Math.max(1,s-2*f),b=Math.max(1,i-2*f);return{areaW:s,areaH:i,cols:c,rows:a,margin:f,stepX:h/Math.max(1,c-1),stepY:b/Math.max(1,a-1)}}function u_(s,i){return i.margin+s/2*i.stepX}function f_(s,i){const c=i.margin+s/2*i.stepY;return i.areaH-c}function us(s,i){return s.centerX2===null||s.centerY2===null||s.spanX===null||s.spanY===null?null:{cx:u_(s.centerX2,i),cy:f_(s.centerY2,i),width:s.spanX*i.stepX,height:s.spanY*i.stepY}}function jb(s){const i=[];for(let c=0;c<s.cols;c+=1)for(let a=0;a<s.rows;a+=1)i.push({x:s.margin+c*s.stepX,y:s.areaH-(s.margin+a*s.stepY)});return i}function Mf(s,i,c,a,f){const h=(g,y,w,S)=>{const N=y%2,D=S*2;let U=N,K=1/0;for(let q=N;q<=D;q+=2){const P=Math.abs(w(q)-g);P<K&&(K=P,U=q)}return Math.max(y,Math.min(D-y,U))},b=h(s,c,g=>u_(g,f),f.cols-1),p=h(i,a,g=>f_(g,f),f.rows-1);return{centerX2:b,centerY2:p}}const oi=6e3,Db=15,Ab="",ac=[32,64,128,192],Ob=oi*10,Cb=3500,Bb=8e3,Lb=2,zb=oi,Ub=oi*8;function jf(s){return new Promise(i=>setTimeout(i,s))}function Ki(s){if(s!=null&&s.aborted)throw new DOMException("BLE file read cancelled","AbortError")}function _h(s){return s instanceof DOMException&&s.name==="AbortError"}function Tr(s){return s.replace(/[\r\n,]/g," ").trim()}class Hb{constructor(i={}){fe(this,"transport",new kb);fe(this,"stream");fe(this,"events");fe(this,"waiters",[]);fe(this,"collectingLayout",!1);fe(this,"layoutBuffer",[]);fe(this,"layoutResolve",null);fe(this,"collectingLines",!1);fe(this,"lineBuffer",[]);fe(this,"lineResolve",null);fe(this,"lineReject",null);fe(this,"lineCollectId",0);fe(this,"controlPumpActive",!1);fe(this,"pendingButtons",[]);fe(this,"pendingSliders",new Map);fe(this,"pendingToggles",new Map);fe(this,"pendingJoysticks",new Map);fe(this,"pendingDpads",[]);fe(this,"expectingDisconnect",!1);fe(this,"disconnectMessage",null);fe(this,"busy",!1);fe(this,"fsCapabilities",null);this.events=i,this.stream=new Nb(c=>this.transport.writeLine(c),c=>this.onDeviceMessage(c)),this.transport.onLine=c=>this.stream.handleLine(c),this.transport.onDisconnect=()=>this.handleDisconnect()}get device(){return this.transport.device}get deviceName(){var i;return s_((i=this.transport.device)==null?void 0:i.name)}get connected(){return this.transport.connected}setBusy(i){if(this.busy=i,i){this.pendingButtons=[],this.pendingSliders.clear(),this.pendingToggles.clear(),this.pendingJoysticks.clear(),this.pendingDpads=[];return}this.pumpControls()}log(i,c){var a,f;(f=(a=this.events).onLog)==null||f.call(a,i,c)}progress(i,c){var a,f;(f=(a=this.events).onProgress)==null||f.call(a,i,c)}onDeviceMessage(i){var a,f;if(i==="disconnect"||i==="disconnect_private"){const h=i==="disconnect_private"?"Du blev afbrudt, fordi enheden er privat, og andre brugere ikke må forbinde.":"Enheden afbrød forbindelsen.";this.disconnectMessage=h,this.log("warning",h),this.expectingDisconnect=!0,this.transport.disconnect();return}if(this.collectingLines){if(i==="__END__"){const h=this.lineBuffer;this.lineBuffer=[],this.collectingLines=!1,(a=this.lineResolve)==null||a.call(this,h),this.lineResolve=null;return}this.lineBuffer.push(i);return}if(this.collectingLayout){if(i==="__END__"){const h=this.layoutBuffer;this.layoutBuffer=[],this.collectingLayout=!1,(f=this.layoutResolve)==null||f.call(this,h),this.layoutResolve=null;return}!i.startsWith("ACK")&&!i.startsWith("ERR")&&!i.startsWith("#VERSION")?this.layoutBuffer.push(i):i.startsWith("#VERSION")&&this.layoutBuffer.push(i);return}i.startsWith("ERR")?this.log("error",i):i.startsWith("radar,")?this.handleRadarLine(i):i.startsWith("text,")?this.handleTextLine(i):i.startsWith("toggle_state,")?this.handleToggleStateLine(i):i.startsWith("ACK")||i==="LAYOUT_SAVED"||i.startsWith("READY")?this.log("success",i):this.log("info",`rx: ${i}`);const c=this.waiters.findIndex(h=>h.match(i));if(c>=0){const h=this.waiters[c];this.waiters.splice(c,1),clearTimeout(h.timer),h.resolve(i)}}waitFor(i,c,a){return new Promise((f,h)=>{const b=setTimeout(()=>{const p=this.waiters.findIndex(g=>g.timer===b);p>=0&&this.waiters.splice(p,1),h(new Error(`Timeout: ${a}`))},c);this.waiters.push({match:i,resolve:f,reject:h,timer:b})})}async collectLines(i,c,a,f,h){Ki(f);const b=this.lineCollectId+1;this.lineCollectId=b,this.collectingLines=!0,this.lineBuffer=[],this.stream.setInboundProgress(h??null);const p=new Promise((g,y)=>{let w=!1;const S=()=>this.lineCollectId===b,N=()=>{w=!0,S()&&(this.lineReject=null,this.stream.setInboundProgress(null)),f==null||f.removeEventListener("abort",U)},D=P=>{w||(clearTimeout(K),S()&&(this.collectingLines=!1,this.lineBuffer=[],this.lineResolve=null),N(),y(P))},U=()=>{D(new DOMException("BLE file read cancelled","AbortError"))},K=setTimeout(()=>{S()&&D(new Error(`Timeout: ${a}`))},c);this.lineResolve=g,this.lineReject=D;const q=this.lineResolve;this.lineResolve=P=>{S()&&(clearTimeout(K),N(),q==null||q(P))},f==null||f.addEventListener("abort",U,{once:!0})});return await this.transport.writeLine(i),p}async exchange(i,c,a,f=3){let h;for(let b=1;b<=f;b+=1)try{return await this.transport.writeLine(i),await this.waitFor(c,oi,a)}catch(p){h=p,this.log("warning",`${a}: forsøg ${b}/${f} mislykkedes`)}throw h instanceof Error?h:new Error(`Failed: ${a}`)}async connect(i){this.expectingDisconnect=!1,this.stream.reset(),this.progress(5,"Forbinder til Bluetooth..."),await this.transport.connect(i)}async runHandshake(i){var ie,_e,pe;await jf(350),this.progress(18,"Klargør forbindelse..."),this.progress(26,"Sender HELLO..."),await this.exchange("HELLO",Q=>Q==="ACK:HELLO","HELLO"),this.progress(34,"Forbindelse bekræftet"),this.progress(44,"Spørger om ejerskab...");const c=await this.exchange("who_are_you",Q=>Q==="unowned"||Q.startsWith("unowned,")||Q.startsWith("owned,"),"who_are_you");if(this.progress(56,"Ejerskab modtaget"),c==="unowned"||c.startsWith("unowned,"))return{kind:"unowned",deviceName:((ie=c.split(",")[1])==null?void 0:ie.trim())||void 0};const a=c.split(","),f=a[1]??"",h=a[2]!==void 0&&parseInt(a[2],10)||0,b=a[3]!==void 0?parseInt(a[3],10)===1:!0,p=a[4]!==void 0?parseInt(a[4],10)===1:!1,g=a.length>=7,y=g?parseInt(a[5]??"0",10)===1:p,w=((_e=a[g?6:5])==null?void 0:_e.trim())||void 0,S=((pe=a[g?7:6])==null?void 0:pe.trim())||void 0;await this.exchange("ACK:ownership",Q=>Q==="READY:permission","ACK:ownership",1),this.progress(66,"Anmoder om adgang...");const N=await this.exchange(`request_permission,${i.userID},${Tr(i.username)}`,Q=>Q.startsWith("perm,"),"request_permission");this.progress(76,"Adgang vurderet");const D=N.split(",").filter(Q=>/^\d+$/.test(Q)),U=D.length>=1?parseInt(D[0]??"0",10):0,K=D.length>=2?parseInt(D[1]??"0",10):0,q=D.length>=3?parseInt(D[2]??"0",10):K;if(U===0)return this.expectingDisconnect=!0,this.disconnectMessage="Du kan ikke forbinde, fordi enheden er privat, og andre brugere ikke må forbinde.",{kind:"denied",ownerName:w,canOthersConnect:b};const P=i.userID===f,G=K===1||P,re=q===1||P;return await this.transport.writeLine("ACK:permission"),{kind:"owned",ownerID:f,ownerName:w,deviceName:S,iconID:h,canEdit:G,canEditCode:re,isOwnedByMe:P,canOthersConnect:b,canOthersEdit:p,canOthersEditCode:y}}async create(i,c,a,f,h,b,p){const g=a?1:0,y=a&&f?1:0,w=a&&h?1:0;await this.exchange(`create,${i.userID},${Tr(i.username)},${c},${g},${y},${w},${b},${p}`,S=>S==="ACK:create","create")}async updateDeviceSettings(i,c,a,f,h,b,p){const g=c?1:0,y=c&&a?1:0,w=c&&f?1:0;await this.exchange(`settings_update,${i},${g},${y},${w},${h},${b},${Tr(p??"")}`,S=>S==="ACK:settings_update","settings_update",3)}async requestLayout(){this.progress(84,"Henter kontrolpanel..."),this.collectingLayout=!0,this.layoutBuffer=[];const i=new Promise((a,f)=>{this.layoutResolve=a;const h=setTimeout(()=>{this.collectingLayout&&(this.collectingLayout=!1,this.layoutResolve=null,f(new Error("Timeout: layout")))},oi*2),b=this.layoutResolve;this.layoutResolve=p=>{clearTimeout(h),b==null||b(p)}});await this.transport.writeLine("request"),this.progress(92,"Modtager kontrolpanel...");const c=await i;return this.progress(100,"Klar"),c}async saveLayout(i){await this.exchange("update",f=>f==="ACK:update","update",3).catch(()=>{this.log("warning","ACK:update udeblev (fortsætter).")});const c=i.map(f=>{const h=p=>p===null?"n":String(p),b=`update,${f.type},${f.name},${h(f.centerX2)},${h(f.centerY2)},${h(f.spanX)},${h(f.spanY)},${f.rotation}`;return f.type==="slider"?`${b},${f.sliderMin??0},${f.sliderMax??100},${f.sliderRecenter??"none"}`:f.type==="toggle"?`${b},${f.toggleInitial?1:0}`:f.type==="radar"?[b,f.radarMinAngle??0,f.radarMaxAngle??180,f.radarMaxDistance??200,f.radarFadeMs??1200].join(","):f.type==="joystick"?[b,f.joystickXMin??-100,f.joystickXMax??100,f.joystickYMin??-100,f.joystickYMax??100,f.joystickXRecenter??"middle",f.joystickYRecenter??"middle"].join(","):b});c.push("__END__");const a=this.waitFor(f=>f==="LAYOUT_SAVED",oi*2,"LAYOUT_SAVED");await this.stream.sendReliable(c),await a}async listFiles(i="/"){return(await this.collectLines(`fs_list,${Tr(i)}`,oi*3,"fs_list")).filter(a=>a.startsWith("fs_entry,")).map(a=>{const[,f,h,b]=a.split(","),p=f==="file"||f==="dir"?f:"unknown",g=parseInt(b??"",10),y=h||"/";return{name:y.split("/").filter(Boolean).pop()??y,path:y,type:p,...Number.isFinite(g)&&g>=0?{size:g}:{}}})}handleRadarLine(i){var b,p,g;const c=i.split(",");if(c.length<4)return;const a=(b=c[1])==null?void 0:b.trim(),f=parseFloat(c[2]??""),h=parseFloat(c[3]??"");!a||!Number.isFinite(f)||!Number.isFinite(h)||((g=(p=this.events).onRadar)==null||g.call(p,a,f,h),this.log("info",`rx: ${i}`))}handleTextLine(i){var g,y;const c=i.indexOf(","),a=c>=0?i.indexOf(",",c+1):-1;if(c<0||a<0)return;const f=i.slice(c+1,a),h=i.slice(a+1),b=f==null?void 0:f.trim();if(!b)return;const p=h.split(Ab).join(`
`);(y=(g=this.events).onText)==null||y.call(g,b,p),this.log("info",`rx: ${i}`)}handleToggleStateLine(i){var h,b,p;const c=i.split(",");if(c.length<3)return;const a=(h=c[1])==null?void 0:h.trim(),f=parseInt(c[2]??"",10);!a||!Number.isFinite(f)||((p=(b=this.events).onToggleState)==null||p.call(b,a,f===1),this.log("info",`rx: ${i}`))}async readText(i,c,a){c==null||c(4,"Validerer Picoens Bluetooth-filsystem...");const f=await this.getFilesystemCapabilities(a);if(f.streamRead)try{return await this.readTextStream(i,f,c,a)}catch(h){if(a!=null&&a.aborted||_h(h)||!f.pageRead)throw h;this.log("warning",h instanceof Error?`fs_read_stream fejlede; bruger paged read: ${h.message}`:"fs_read_stream fejlede; bruger paged read")}return this.readTextPaged(i,c,a)}async getFilesystemCapabilities(i){if(this.fsCapabilities)return this.fsCapabilities;const c=await this.collectLines("fs_capabilities",zb,"fs_capabilities",i),a=c.find(w=>w.startsWith("ERR"));if(a)throw new Error(a);const f=c.find(w=>w.startsWith("fs_capabilities,"));if(!f)throw new Error("Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.");const h=f.split(","),b=new Map;for(let w=1;w<h.length-1;w+=2)b.set(h[w],h[w+1]);const p=parseInt(b.get("max_page")??"",10),g=parseInt(b.get("stream_chunk")??"",10),y={version:b.get("version")||void 0,pageRead:b.get("page_read")==="1",maxPageSize:Number.isFinite(p)&&p>0?p:32,streamRead:b.get("stream_read")==="1",streamChunkSize:Number.isFinite(g)&&g>0?g:128};if(!y.pageRead&&!y.streamRead)throw new Error("Picoens Bluetooth-runtime meldte, at file-read ikke er understøttet.");return this.fsCapabilities=y,y}async readTextPaged(i,c,a){const f=await this.getFilesystemCapabilities(a);let h=0,b=Ib(f.maxPageSize),p=0,g=null,y="";const w=`Indlæser ${Df(i)}...`;Ki(a),c==null||c(5,w);for(let S=0;S<512;S+=1){Ki(a),p===0&&(c==null||c(7,w));const D=await this.readPageWithRetry(i,p,h,b,a),U=D.lines;h=D.nextPageSizeIndex,b=D.maxPageSizeIndex,Ki(a);const K=U.find(J=>J.startsWith("ERR"));if(K)throw new Error(K);const q=U.find(J=>J.startsWith("fs_page,"));if(!q)throw new Error("ERR: fs_read_page missing data");const[,P,G,re,ie=""]=q.split(",",5);if(P!==i)throw new Error("ERR: fs_read_page stale data");const _e=parseInt(G??"",10),pe=parseInt(re??"",10);if(!Number.isFinite(_e)||_e!==p||!Number.isFinite(pe))throw new Error("ERR: fs_read_page invalid data");g=pe,y+=ie,p+=Math.floor(ie.length/2);const Q=g>0?8+Math.min(87,Math.round(p/g*87)):95;if(c==null||c(Q,w),p>=g||ie.length===0)return c==null||c(100,"Fil indlæst fra Pico"),new TextDecoder().decode(bh(y))}throw new Error("ERR: fs_read_page too many pages")}async readPageWithRetry(i,c,a,f,h){let b,p=Math.min(a,f);for(;p>=0;){const g=ac[p],y=p===0?Lb:1,w=p===0?Bb:Cb;for(let S=1;S<=y;S+=1){Ki(h);try{return{lines:await this.collectLines(`fs_read_page,${Tr(i)},${c},${g}`,w,`fs_read_page ${c}`,h),nextPageSizeIndex:Math.min(p+1,f),maxPageSizeIndex:f}}catch(N){if(h!=null&&h.aborted||_h(N))throw N;if(b=N,S<y||p>0){const U=p>0&&S>=y?ac[p-1]:g;this.log("warning",`fs_read_page ${c} (${g} bytes) fejlede; prøver ${U} bytes`),await jf(80+S*80)}}}if(p===0)break;f=Math.max(0,p-1),p=f}throw b instanceof Error?b:new Error(`Timeout: fs_read_page ${c}`)}async readTextStream(i,c,a,f){const h=`Indlæser ${Df(i)}...`,b=Math.max(16,Math.min(192,c.streamChunkSize||128));a==null||a(5,h);const p=await this.collectLines(`fs_read_stream,${Tr(i)},${b}`,Ub,`fs_read_stream ${i}`,f,(Q,J)=>{const ke=8+Math.round(Math.min(Q,J)/Math.max(1,J)*87);a==null||a(Math.min(95,ke),h)});Ki(f);const g=p.find(Q=>Q.startsWith("ERR"));if(g)throw new Error(g);const y=p.find(Q=>Q.startsWith("fs_stream_begin,")),w=p.find(Q=>Q.startsWith("fs_stream_end,"));if(!y||!w)throw new Error("ERR: fs_read_stream missing metadata");const[,S,N]=y.split(",",4),[,D,U,K]=w.split(",",4),q=parseInt(N??"",10),P=parseInt(U??"",10),G=parseInt(K??"",10);if(S!==i||D!==i||!Number.isFinite(q)||q!==P||!Number.isFinite(G))throw new Error("ERR: fs_read_stream invalid metadata");let re=0,ie="";for(const Q of p){if(!Q.startsWith("fs_stream_chunk,"))continue;const[,J,ke=""]=Q.split(",",3),Se=parseInt(J??"",10);if(!Number.isFinite(Se)||Se!==re||ke.length%2!==0)throw new Error("ERR: fs_read_stream invalid chunk");ie+=ke,re+=Math.floor(ke.length/2)}if(re!==q)throw new Error("ERR: fs_read_stream size mismatch");const _e=bh(ie);if(gh(_e)!==G)throw new Error("ERR: fs_read_stream checksum mismatch");return a==null||a(100,"Fil indlæst fra Pico"),new TextDecoder().decode(_e)}async writeText(i,c,a){a==null||a(5,"Klargør BLE-overførsel..."),await this.exchange(`fs_write_begin,${Tr(i)}`,w=>w==="ACK:fs_write_begin","fs_write_begin",2),a==null||a(18,"Pico er klar til filen...");const f=new TextEncoder().encode(c),h=[...f].map(w=>w.toString(16).padStart(2,"0")).join(""),b=[];for(let w=0;w<h.length;w+=160)b.push(`fs_write_chunk,${h.slice(w,w+160)}`);b.push("fs_write_end");const p=gh(f),g=this.waitFor(w=>w==="ACK:fs_write_done"||w.startsWith("ACK:fs_write_done,")||w.startsWith("ERR"),Ob,"fs_write_done");a==null||a(f.length===0?85:18,f.length===0?"Sender tom fil via Bluetooth...":`Sender 0/${f.length} bytes via Bluetooth...`),await this.stream.sendReliable(b,(w,S,N)=>{if(!N.startsWith("fs_write_chunk,"))return;const D=Math.min(f.length,w*80),U=18+Math.round(w/Math.max(1,S-1)*67);a==null||a(Math.min(85,U),`Sender ${D}/${f.length} bytes via Bluetooth...`)}),a==null||a(90,"Verificerer BLE-fil...");const y=await g;if(y.startsWith("ERR"))throw new Error(y);if(y.startsWith("ACK:fs_write_done,")){const[,w,S]=y.split(",",3),N=parseInt(w??"",10),D=parseInt(S??"",10);if(N!==f.length||D!==p)throw new Error(`ERR: BLE-verificering fejlede for ${Df(i)}.`)}a==null||a(100,"Gemt på Pico")}async deleteFile(i){const c=await this.exchange(`fs_delete,${Tr(i)}`,a=>a==="ACK:fs_delete"||a.startsWith("ERR"),"fs_delete",2);if(c.startsWith("ERR"))throw new Error(c)}async restart(){await this.exchange("restart",i=>i==="ACK:restart"||i.startsWith("ERR"),"restart",1).catch(()=>{}),this.expectingDisconnect=!0}enqueueButton(i,c){this.busy||(this.pendingButtons.push(`button,${i}:${c?"down":"up"}`),this.pumpControls())}enqueueSlider(i,c){this.busy||(this.pendingSliders.set(i,`slider,${i}:${c}`),this.pumpControls())}enqueueToggle(i,c){this.busy||(this.pendingToggles.set(i,`toggle,${i}:${c?1:0}`),this.pumpControls())}enqueueJoystick(i,c,a){this.busy||(this.pendingJoysticks.set(i,`joystick,${i}:${Math.round(c)},${Math.round(a)}`),this.pumpControls())}enqueueDpad(i,c,a){this.busy||(this.pendingDpads.push(`dpad,${i}:${c},${a?"down":"up"}`),this.pumpControls())}pumpControls(){this.controlPumpActive||this.busy||!this.transport.connected||(this.controlPumpActive=!0,this.drainControls())}async drainControls(){try{for(;!this.busy&&this.transport.connected;){const i=this.nextControlLine();if(!i)break;await this.transport.writeLine(i),this.log("info",`tx: ${i}`),await jf(Db)}}catch(i){this.log("error",i instanceof Error?i.message:"Kunne ikke sende kommando."),this.handleDisconnect()}finally{this.controlPumpActive=!1,!this.busy&&this.transport.connected&&this.hasPendingControls()&&this.pumpControls()}}nextControlLine(){const i=this.pendingButtons.shift();if(i)return i;const c=this.pendingDpads.shift();if(c)return c;const a=this.pendingSliders.entries().next();if(!a.done){const[b,p]=a.value;return this.pendingSliders.delete(b),p}const f=this.pendingToggles.entries().next();if(!f.done){const[b,p]=f.value;return this.pendingToggles.delete(b),p}const h=this.pendingJoysticks.entries().next();if(!h.done){const[b,p]=h.value;return this.pendingJoysticks.delete(b),p}return null}hasPendingControls(){return this.pendingButtons.length>0||this.pendingDpads.length>0||this.pendingSliders.size>0||this.pendingToggles.size>0||this.pendingJoysticks.size>0}async disconnect(){if(!this.transport.connected){this.handleDisconnect();return}this.expectingDisconnect=!0;try{await this.exchange("disconnect",i=>i==="ACK:disconnect","disconnect",1)}catch{}this.transport.disconnect()}handleDisconnect(){var c,a,f;for(const h of this.waiters)clearTimeout(h.timer),h.reject(new Error("Forbindelsen blev afbrudt."));this.waiters=[],this.collectingLayout=!1,this.layoutResolve=null,(c=this.lineReject)==null||c.call(this,new Error("Forbindelsen blev afbrudt.")),this.collectingLines=!1,this.lineResolve=null,this.lineReject=null,this.fsCapabilities=null,this.stream.reset();const i=this.disconnectMessage??void 0;this.disconnectMessage=null,(f=(a=this.events).onDisconnect)==null||f.call(a,i)}}function Ib(s){let i=0;for(let c=0;c<ac.length;c+=1)ac[c]<=s&&(i=c);return i}function Df(s){return s.replace(/\\/g,"/").replace(/^\/+/,"")||s}function gh(s){let i=0;for(const c of s)i=i+c>>>0;return i}function bh(s){const i=new Uint8Array(Math.floor(s.length/2));for(let c=0;c<i.length;c+=1)i[c]=parseInt(s.slice(c*2,c*2+2),16);return i}function yh(s){const i=(c,a)=>Number.isFinite(c)?Math.max(Tb,Math.min(Rb,c)):a;for(const c of s){const a=c.trim();if(a.startsWith("#GRID,")){const f=a.split(","),h=i(parseInt(f[1],10),ea),b=i(parseInt(f[2],10),ms);return{cols:h,rows:b}}}return{cols:ea,rows:ms}}function vh(s){const i=new Map;for(const c of s){const a=c.trim();if(!a||a.startsWith("#VERSION")||a==="__END__")continue;const f=a.split(",");if(f.length<7)continue;const[h,b,p,g,y,w,S,N,D,U,K,q,P]=f;if(h!=="button"&&h!=="slider"&&h!=="toggle"&&h!=="radar"&&h!=="text"&&h!=="joystick"&&h!=="dpad"||i.has(b))continue;const G=ne=>{if(ne==="n")return null;const ce=parseInt(ne,10);return Number.isNaN(ce)?null:ce},re=parseInt(S,10)||0,ie=N!==void 0?parseInt(N,10):0,_e=D!==void 0?parseInt(D,10):100,pe=["none","bottom","middle","top"].includes(U??"")?U:"none",Q=N!==void 0?parseInt(N,10)===1:!1,J=N!==void 0?parseFloat(N):0,ke=D!==void 0?parseFloat(D):180,Se=U!==void 0?parseFloat(U):200,Ye=K!==void 0?parseInt(K,10):1200,W=(ne,ce)=>["none","bottom","middle","top"].includes(ne??"")?ne:ce,tn=N!==void 0?parseInt(N,10):-100,ze=D!==void 0?parseInt(D,10):100,Ve=U!==void 0?parseInt(U,10):-100,H=K!==void 0?parseInt(K,10):100;i.set(b,{type:h,name:b,centerX2:G(p),centerY2:G(g),spanX:G(y),spanY:G(w),rotation:[0,90,180,270].includes(re)?re:0,...h==="slider"?{sliderMin:Number.isFinite(ie)?ie:0,sliderMax:Number.isFinite(_e)?_e:100,sliderRecenter:pe}:{},...h==="toggle"?{toggleInitial:Q}:{},...h==="radar"?{radarMinAngle:Number.isFinite(J)?J:0,radarMaxAngle:Number.isFinite(ke)?ke:180,radarMaxDistance:Number.isFinite(Se)&&Se>0?Se:200,radarFadeMs:Number.isFinite(Ye)&&Ye>0?Ye:1200}:{},...h==="joystick"?{joystickXMin:Number.isFinite(tn)?tn:-100,joystickXMax:Number.isFinite(ze)&&ze!==tn?ze:100,joystickYMin:Number.isFinite(Ve)?Ve:-100,joystickYMax:Number.isFinite(H)&&H!==Ve?H:100,joystickXRecenter:W(q,"middle"),joystickYRecenter:W(P,"middle")}:{}})}return[...i.values()]}let le=null,rs=null,xh=0,Gl=!1;function Vb(){return new Date().toLocaleTimeString("da-DK",{hour12:!1})}function wh(s){return new Promise(i=>setTimeout(i,s))}function Af(s,i){const c=i.userID.toLowerCase();return s.map(a=>{if(!a.ownerID)return a;const f=a.ownerID.toLowerCase()===c;return{...a,isOwnedByMe:f,ownerName:f?i.username:a.ownerName}})}function Of(s,i){return(s.name?s_(s.name):"")||(i==null?void 0:i.deviceName)||"Pico"}function Gb(s){return Object.fromEntries(s.filter(i=>i.type==="toggle").map(i=>[i.name,!!i.toggleInitial]))}function Sh(s,i){const c=Gb(s);for(const a of s)a.type==="toggle"&&i[a.name]!==void 0&&(c[a.name]=i[a.name]);return c}const te=db((s,i)=>{function c(p,g){s(y=>({logs:[{level:p,message:g,time:Vb()},...y.logs].slice(0,200)}))}function a(p){rs&&clearTimeout(rs),xh+=1,s({toast:{message:p,id:xh}}),rs=setTimeout(()=>s({toast:null}),4500)}function f(p=null){s({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:p})}function h(p){return{deviceID:p.deviceID,deviceName:p.deviceName,ownerID:p.ownerID,deviceIconID:p.iconID,canOthersConnect:p.canOthersConnect,canOthersEdit:p.canOthersEdit,canOthersEditCode:p.canOthersEditCode,isOwnedByMe:p.isOwnedByMe,ownerName:p.ownerName}}function b(p){const{screen:g,active:y,picoIdeOrigin:w}=i();if(Gl){Gl=!1;return}p&&(c("warning",p),a(p)),(g==="control"||g==="connection"||g==="create"||g==="ide"&&w==="control")&&f(y?h(y):null)}return le=new Hb({onProgress:(p,g)=>s({progress:{value:p,label:g}}),onLog:(p,g)=>c(p,g),onRadar:(p,g,y)=>{const w=Date.now(),S={id:`${w}-${Math.random().toString(36).slice(2)}`,angle:g,distance:y,createdAt:w};s(N=>{const D=N.layout.find(q=>q.type==="radar"&&q.name===p),U=(D==null?void 0:D.radarFadeMs)??1200,K=N.radarPings[p]??[];return{radarPings:{...N.radarPings,[p]:[...K.filter(q=>w-q.createdAt<=U),S].slice(-80)}}})},onText:(p,g)=>{s(y=>({textValues:{...y.textValues,[p]:g}}))},onToggleState:(p,g)=>{s(y=>({toggleValues:{...y.toggleValues,[p]:g}}))},onDisconnect:p=>b(p)}),{screen:"splash",splashTarget:null,user:null,savedDevices:[],connecting:null,progress:{value:0,label:""},toast:null,confirmDialog:null,connectionLost:null,active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},logs:[],sideMenuOpen:!1,debuggerOpen:!1,menuPage:null,editMode:!1,dashboardPage:"mine",picoIdeOrigin:"dashboard",init:()=>{const p=pb(),g=p?Af(ic(),p):ic();p&&Zi(g),s({user:p,savedDevices:g,splashTarget:p?"dashboard":"intro"})},finishSplash:()=>{const p=i().splashTarget;s({screen:p??"intro"})},createUser:p=>{const g=p.trim();if(!g)return;const y={username:g,userID:mb()};Nf(y),s({user:y,screen:"dashboard"})},findDevice:async()=>{try{const p=await Eb();await i().connectToDevice(p)}catch(p){p instanceof Error&&p.name!=="NotFoundError"&&c("error",p.message)}},connectToDevice:async(p,g)=>{var w,S,N;const y=i().user;if(!(!y||!le)){Gl=!1,s({screen:"connection",connecting:{name:Of(p,g),iconID:(g==null?void 0:g.deviceIconID)??0},progress:{value:0,label:"Forbinder..."}});try{await le.connect(p);const D=await le.runHandshake(y),U=p.id,K=(D.kind==="owned"||D.kind==="unowned")&&((w=D.deviceName)==null?void 0:w.trim())||Of(p,g);if(s(ie=>ie.connecting?{connecting:{...ie.connecting,name:K}}:{}),D.kind==="denied"){const _e=`Du kan ikke forbinde, fordi ${((S=D.ownerName)==null?void 0:S.trim())||((N=g==null?void 0:g.ownerName)==null?void 0:N.trim())||"ejeren"} ejer enheden og ikke tillader besøgende at forbinde.`;c("warning",_e),a(_e),s({screen:"dashboard",connecting:null}),await le.disconnect();return}if(D.kind==="unowned"){s({active:{deviceID:U,deviceName:K,ownerID:y.userID,iconID:0,canEdit:!0,canEditCode:!0,canOthersConnect:!1,canOthersEdit:!1,canOthersEditCode:!1,isOwnedByMe:!0,ownerName:y.username,gridCols:ea,gridRows:ms},screen:"create"});return}const q={deviceID:U,deviceName:K,ownerID:D.ownerID,deviceIconID:D.iconID,canOthersConnect:D.canOthersConnect,canOthersEdit:D.canOthersEdit,canOthersEditCode:D.canOthersEditCode,isOwnedByMe:D.isOwnedByMe,ownerName:D.isOwnedByMe?y.username:D.ownerName??(g==null?void 0:g.ownerName)};s({savedDevices:Tf(q)});const P=await le.requestLayout(),G=yh(P),re=vh(P);s({layout:re,sliderValues:{},toggleValues:Sh(re,i().toggleValues),radarPings:{},textValues:{},active:{deviceID:U,deviceName:K,ownerID:D.ownerID,iconID:D.iconID,canEdit:D.canEdit,canEditCode:D.canEditCode,canOthersConnect:D.canOthersConnect,canOthersEdit:D.canOthersEdit,canOthersEditCode:D.canOthersEditCode,isOwnedByMe:D.isOwnedByMe,ownerName:D.isOwnedByMe?y.username:D.ownerName??(g==null?void 0:g.ownerName),gridCols:G.cols,gridRows:G.rows},screen:"control",connecting:null,connectionLost:null})}catch(D){const U=D instanceof Error?D.message:"Forbindelsen mislykkedes.";c("error",U),a("Forbindelsen mislykkedes."),s({screen:"dashboard",connecting:null}),await le.disconnect().catch(()=>{})}}},finishCreate:async(p,g,y,w,S,N)=>{const{user:D,active:U}=i();if(!(!D||!U||!le))try{le.setBusy(!0),await le.create(D,p,g,y,w,S,N),le.setBusy(!1);const K={deviceID:U.deviceID,deviceName:U.deviceName,ownerID:D.userID,deviceIconID:p,canOthersConnect:g,canOthersEdit:g&&y,canOthersEditCode:g&&w,isOwnedByMe:!0,ownerName:D.username};s({savedDevices:Tf(K)});const q=await le.requestLayout(),P=yh(q),G=vh(q);s({layout:G,sliderValues:{},toggleValues:Sh(G,i().toggleValues),radarPings:{},textValues:{},active:{...U,ownerID:D.userID,iconID:p,canEdit:!0,canEditCode:!0,canOthersConnect:g,canOthersEdit:g&&y,canOthersEditCode:g&&w,ownerName:D.username,gridCols:P.cols,gridRows:P.rows},screen:"control"})}catch(K){le.setBusy(!1);const q=K instanceof Error?K.message:"Oprettelse mislykkedes.";c("error",q),a("Oprettelse mislykkedes."),s({screen:"dashboard"}),await le.disconnect().catch(()=>{})}},saveDeviceSettings:async(p,g,y,w,S,N)=>{const{active:D,user:U}=i();if(!(!D||!le||!D.isOwnedByMe))try{le.setBusy(!0),await le.updateDeviceSettings(p,g,y,w,S,N,U==null?void 0:U.username);const K={...D,iconID:p,canEdit:!0,canEditCode:!0,canOthersConnect:g,canOthersEdit:g&&y,canOthersEditCode:g&&w,ownerName:(U==null?void 0:U.username)??D.ownerName,gridCols:S,gridRows:N},q={deviceID:D.deviceID,deviceName:D.deviceName,ownerID:D.ownerID??(U==null?void 0:U.userID),deviceIconID:p,canOthersConnect:g,canOthersEdit:g&&y,canOthersEditCode:g&&w,isOwnedByMe:!0,ownerName:(U==null?void 0:U.username)??D.ownerName};s({active:K,savedDevices:Tf(q)}),a("Enhedsindstillinger gemt.")}catch(K){c("error",K instanceof Error?K.message:"Kunne ikke gemme enhedsindstillinger."),a("Kunne ikke gemme enhedsindstillinger.")}finally{le.setBusy(!1)}},cancelCreate:async()=>{le&&await le.disconnect().catch(()=>{}),s({screen:"dashboard",active:null,connecting:null})},disconnect:async()=>{Gl=!0,f(null),le&&await le.disconnect().catch(()=>{}),Gl=!1},removeSavedDevice:p=>{s({savedDevices:bb(p)})},clearSavedDevices:()=>{hb(),s({savedDevices:[]}),a("Gemte enheder ryddet.")},resetApplicationData:async()=>{Gl=!0,le!=null&&le.connected&&await le.disconnect().catch(()=>{}),_b(),window.location.reload()},updateUsername:p=>{const g=i().user,y=p.trim();if(!g||!y)return;const w={...g,username:y};Nf(w),s(S=>{var D;const N=Af(S.savedDevices,w);return Zi(N),{user:w,active:(D=S.active)!=null&&D.isOwnedByMe?{...S.active,ownerName:y}:S.active,savedDevices:N}}),a("Brugernavn gemt.")},createOwnerPairingCode:()=>{const p=i().user;return p?Pb(p):null},applyOwnerPairingCode:p=>{var y;const g=Yb(p,(y=i().user)==null?void 0:y.username);return g?(Nf(g),s(w=>{var N,D,U;const S=Af(w.savedDevices,g);return Zi(S),{user:g,active:((D=(N=w.active)==null?void 0:N.ownerID)==null?void 0:D.toLowerCase())===g.userID.toLowerCase()||(U=w.active)!=null&&U.isOwnedByMe?{...w.active,isOwnedByMe:!0,ownerID:g.userID,ownerName:g.username}:w.active,savedDevices:S}}),a("Ejerkoden er gemt. Denne browser bruger nu samme ejer-GUID."),!0):(a("Ejerkoden kunne ikke læses."),!1)},openPicoIde:()=>{const p=i().screen==="control"&&!!(le!=null&&le.connected),g=i().active;if(p&&g&&!g.isOwnedByMe&&!g.canEditCode){a("Ejeren tillader ikke, at gæster åbner Kodeværkstedet på denne enhed."),c("warning","Kodeværkstedet er blokeret, fordi ejeren ikke tillader gæster at redigere kode."),s({sideMenuOpen:!1});return}s(y=>({screen:"ide",picoIdeOrigin:p?"control":"dashboard",active:p?y.active:null,layout:p?y.layout:[],sliderValues:p?y.sliderValues:{},toggleValues:p?y.toggleValues:{},radarPings:p?y.radarPings:{},textValues:p?y.textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null}))},closePicoIde:()=>{const{picoIdeOrigin:p,active:g}=i();s({screen:p==="control"&&g&&(le!=null&&le.connected)?"control":"dashboard",sideMenuOpen:!1,menuPage:null,picoIdeOrigin:"dashboard"})},isBleConnected:()=>!!(le!=null&&le.connected),bleListFiles:async()=>le!=null&&le.connected?le.listFiles("/"):[],bleReadText:async(p,g,y)=>{if(!(le!=null&&le.connected))throw new Error("Ingen BLE-forbindelse.");return le.readText(p,g,y)},bleWriteText:async(p,g,y)=>{if(!(le!=null&&le.connected))throw new Error("Ingen BLE-forbindelse.");await le.writeText(p,g,y)},bleDeleteFile:async p=>{if(!(le!=null&&le.connected))throw new Error("Ingen BLE-forbindelse.");await le.deleteFile(p)},bleRestart:async()=>{le!=null&&le.connected&&await le.restart()},bleRestartAndReconnect:async(p="control")=>{const{active:g}=i();if(!(le!=null&&le.connected)||!g)return!1;const y={deviceID:g.deviceID,deviceName:g.deviceName,ownerID:g.ownerID,deviceIconID:g.iconID,canOthersConnect:g.canOthersConnect,canOthersEdit:g.canOthersEdit,canOthersEditCode:g.canOthersEditCode,isOwnedByMe:g.isOwnedByMe,ownerName:g.ownerName};Gl=!0,c("info","Genstarter Pico og forsøger automatisk genforbindelse...");try{await le.restart()}catch{}s({progress:{value:15,label:"Venter på Pico genstart..."},connecting:{name:y.deviceName,iconID:y.deviceIconID}});for(let w=0;w<12&&(le!=null&&le.connected);w+=1)await wh(250);le!=null&&le.connected||(Gl=!1);for(let w=1;w<=8;w+=1){await wh(w===1?1200:850);try{const N=(await o_()).find(D=>D.id===y.deviceID);if(!N){s({progress:{value:Math.min(88,20+w*8),label:"Venter på browser-tilladelse..."}});continue}return s({progress:{value:Math.min(92,24+w*8),label:`Genforbinder (${w}/8)...`}}),await i().connectToDevice(N,y),p==="ide"&&s(D=>({screen:"ide",picoIdeOrigin:"control",active:D.active,layout:D.layout,sliderValues:D.sliderValues,toggleValues:D.toggleValues,radarPings:D.radarPings,textValues:D.textValues,editMode:!1,sideMenuOpen:!1,menuPage:null})),a("Pico genforbundet."),!0}catch(S){c("warning",S instanceof Error?S.message:"Genforbindelse mislykkedes.")}}return a("Kunne ikke genforbinde automatisk. Vælg Picoen igen."),Gl=!1,s({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:y}),!1},reconnectLostDevice:async()=>{var g;const p=i().connectionLost;if(p){s({connectionLost:null});try{if((g=navigator.bluetooth)!=null&&g.getDevices){const w=(await navigator.bluetooth.getDevices()).find(S=>S.id===p.deviceID);if(w){await i().connectToDevice(w,p);return}}}catch{}c("info","Genforbind: vælg enheden i browserens liste."),await i().findDevice()}},dismissConnectionLost:()=>s({connectionLost:null}),sendButton:(p,g)=>le==null?void 0:le.enqueueButton(p,g),sendSlider:(p,g)=>{s(y=>({sliderValues:{...y.sliderValues,[p]:g}})),le==null||le.enqueueSlider(p,g)},sendToggle:(p,g)=>{s(y=>({toggleValues:{...y.toggleValues,[p]:g}})),le==null||le.enqueueToggle(p,g)},sendJoystick:(p,g,y)=>le==null?void 0:le.enqueueJoystick(p,g,y),sendDpad:(p,g,y)=>le==null?void 0:le.enqueueDpad(p,g,y),saveLayout:async p=>{if(le)try{le.setBusy(!0),await le.saveLayout(p),s({layout:p,editMode:!1})}catch(g){c("error",g instanceof Error?g.message:"Kunne ikke gemme layout.")}finally{le.setBusy(!1)}},setEditMode:p=>s({editMode:p,sideMenuOpen:!1,menuPage:null}),setDashboardPage:p=>s({dashboardPage:p}),toggleSideMenu:p=>s(g=>({sideMenuOpen:p??!g.sideMenuOpen})),toggleDebugger:p=>s(g=>({debuggerOpen:p??!g.debuggerOpen,sideMenuOpen:!1,menuPage:null})),openMenuPage:p=>s({menuPage:p,sideMenuOpen:!1}),closeMenuPage:()=>s({menuPage:null}),clearLogs:()=>s({logs:[]}),log:(p,g)=>c(p,g),askConfirm:p=>s({confirmDialog:p}),closeConfirm:()=>s({confirmDialog:null}),showToast:p=>a(p),dismissToast:()=>{rs&&clearTimeout(rs),s({toast:null})}}}),Vf="PKP-EJER";function Pb(s){var a;const i=s.userID.toLowerCase(),c=((a=i.match(/.{1,4}/g))==null?void 0:a.join("-"))??i;return`${Vf}-${c}-${d_(i)}`}function Yb(s,i="Ejer"){const c=s.trim().toUpperCase().replace(/\s+/g,"-");if(!c.startsWith(`${Vf}-`))return null;const a=c.slice(Vf.length+1).split("-").filter(Boolean),f=a.pop()??"",h=a.join("").toLowerCase();return!/^[a-f0-9]{32}$/.test(h)||f!==d_(h)?null:{userID:h,username:i.trim()||"Ejer"}}function d_(s){let i=2166136261;for(const c of s.toLowerCase())i^=c.charCodeAt(0),i=Math.imul(i,16777619)>>>0;return(i%65536).toString(16).toUpperCase().padStart(4,"0")}const mc="./",m_=[{id:0,label:"Raspberry Pi"},{id:1,label:"Sumo robot"},{id:2,label:"LED / lys"},{id:3,label:"Lineal + blyant"},{id:4,label:"Bil"},{id:5,label:"Tank"},{id:6,label:"Robotarm"},{id:7,label:"Bi"},{id:8,label:"Palet"},{id:9,label:"Afstandssensor"},{id:10,label:"Søg"},{id:11,label:"Alarm"}];function ta(s){const i=s>=0&&s<m_.length?s:0;return`${mc}device-icons/${i}.png`}const Fb=`${mc}art/logo.png`,$b=`${mc}art/Teknologiskolen_logo.png`,qb=`${mc}art/logo_teknologiskolen_white.png`,Kb={menu:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]}),user:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),settings:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),info:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),u.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),help:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),u.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),debugger:u.jsx(u.Fragment,{children:u.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),edit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),u.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),picoIde:u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),u.jsx("path",{d:"M8 9l-3 3 3 3"}),u.jsx("path",{d:"M16 9l3 3-3 3"}),u.jsx("line",{x1:"13",y1:"8",x2:"11",y2:"16"})]}),exit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),plus:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),delete:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),u.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),power:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),u.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),save:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),u.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),u.jsx("polyline",{points:"7 3 7 8 15 8"})]}),upload:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),u.jsx("polyline",{points:"17 8 12 3 7 8"}),u.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),refresh:u.jsxs(u.Fragment,{children:[u.jsx("polyline",{points:"23 4 23 10 17 10"}),u.jsx("polyline",{points:"1 20 1 14 7 14"}),u.jsx("path",{d:"M3.5 9a9 9 0 0 1 14.9-3.4L23 10"}),u.jsx("path",{d:"M20.5 15a9 9 0 0 1-14.9 3.4L1 14"})]}),package:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),u.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),u.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),back:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),u.jsx("polyline",{points:"12 19 5 12 12 5"})]})};function lt({name:s,size:i=24,className:c}){return u.jsx("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:c,"aria-hidden":"true",children:Kb[s]})}const Xb=1850,Qb=450;function Zb(){const s=te(a=>a.splashTarget),i=te(a=>a.finishSplash),c=s?"splash-screen-animation splash-ready":"splash-pending";return L.useEffect(()=>{if(!s)return;const f=window.matchMedia("(prefers-reduced-motion: reduce)").matches?Qb:Xb,h=window.setTimeout(i,f);return()=>window.clearTimeout(h)},[i,s]),u.jsxs("div",{className:`screen splash-screen ${c}`,"aria-label":"Teknologiskolen starter",children:[u.jsx("div",{className:"splash-white-cover"}),u.jsx("div",{className:"splash-red-field"}),u.jsx("div",{className:"splash-brand","aria-hidden":"true",children:u.jsx("div",{className:"splash-mark splash-logo-shell",children:u.jsx("img",{className:"splash-logo",src:Fb,alt:""})})}),u.jsx("span",{className:"sr-only",children:"Teknologiskolen"})]})}function Eh(){const s=te(f=>f.createUser),[i,c]=L.useState(""),a=i.length>0;return u.jsxs("div",{className:"screen intro",children:[u.jsxs("div",{className:"intro-header",children:[u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"}),u.jsx("img",{className:"intro-header-image",src:$b,alt:"Teknologiskolen"}),u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"})]}),u.jsxs("div",{className:"intro-body",children:[u.jsx("p",{children:"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Find selv på et navn, du vil vises som i appen. Det er ikke et login, og navnet gemmes kun i denne browser."}),u.jsxs("div",{className:`field ${a?"filled":""}`,children:[u.jsx("input",{id:"username",value:i,onChange:f=>c(f.target.value),maxLength:32,autoComplete:"off","aria-label":"Brugernavn"}),u.jsx("label",{htmlFor:"username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!a,onClick:()=>s(i),children:"Fortsæt"})]}),u.jsx("span",{className:"version",children:ds})]})}function ed({title:s,onMenu:i}){return u.jsx("header",{className:"topbar",children:u.jsxs("div",{className:"topbar-inner",children:[u.jsx("h1",{children:s}),u.jsx("button",{className:"iconbtn",type:"button",onClick:i,"aria-label":"Menu",children:u.jsx(lt,{name:"menu"})})]})})}function Cn({title:s,onClose:i,children:c,closeVariant:a="plain"}){const f=a==="circle",h=L.useRef(!1);return u.jsx("div",{className:"modal-root",onPointerDown:b=>{h.current=b.target===b.currentTarget},onClick:b=>{b.target===b.currentTarget&&h.current&&i(),h.current=!1},children:u.jsxs("div",{className:"modal",onClick:b=>b.stopPropagation(),children:[u.jsxs("div",{className:"modal-head",children:[u.jsx("h3",{children:s}),u.jsx("button",{className:`iconbtn ${f?"modal-close-circle":""}`,type:"button",onClick:i,"aria-label":"Luk",children:u.jsx(lt,{name:f?"delete":"close",size:f?30:24})})]}),u.jsx("div",{className:"modal-body",children:c})]})})}function kh(){const s=te(N=>N.savedDevices),i=te(N=>N.toggleSideMenu),c=te(N=>N.findDevice),a=te(N=>N.removeSavedDevice),f=te(N=>N.askConfirm),h=te(N=>N.dashboardPage),b=te(N=>N.setDashboardPage),p=n0(),[g,y]=L.useState(null),w=dc(),S=s.filter(N=>h==="mine"?N.isOwnedByMe:!N.isOwnedByMe).sort(e0);return u.jsxs("div",{className:"screen dashboard-screen",children:[u.jsx(ed,{title:"Hovedmenu",onMenu:()=>i()}),u.jsxs("div",{className:"content dash-content",children:[!w&&u.jsx("div",{className:"notice",children:"Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På Android: brug Chrome."}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:h==="mine"?"active":"",onClick:()=>b("mine"),children:"Mine Enheder"}),u.jsx("button",{type:"button",className:h==="andre"?"active":"",onClick:()=>b("andre"),children:"Andre Enheder"})]}),u.jsx("div",{className:"panel panel-white device-list",children:S.length===0?u.jsx("div",{className:"device-list-empty",children:h==="mine"?"Ingen enheder endnu. Tryk på + for at finde en enhed.":"Ingen andre enheder gemt."}):S.map(N=>u.jsx(Wb,{device:N,disabled:!w,onConnect:()=>p(N),onSettings:()=>y(N)},N.deviceID))})]}),u.jsx("button",{className:"fab",type:"button",onClick:()=>c(),disabled:!w,"aria-label":"Find enhed",children:u.jsx(lt,{name:"plus",size:30})}),u.jsx("span",{className:"version",children:ds}),g&&u.jsx(Cn,{title:"Enhedsindstillinger",onClose:()=>y(null),children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("div",{className:"saved-device-head",children:[u.jsx("img",{src:ta(g.deviceIconID),alt:""}),u.jsx("strong",{children:g.deviceName})]}),u.jsx(is,{label:"Gemte indstillinger",value:"Denne browser"}),u.jsx(is,{label:"Ejer",value:Jb(g)}),u.jsx(is,{label:"Offentlig",value:g.canOthersConnect?"Ja":"Nej"}),u.jsx(is,{label:"Andre må redigere layout",value:g.canOthersEdit?"Ja":"Nej"}),u.jsx(is,{label:"Andre må redigere kode",value:g.canOthersEditCode?"Ja":"Nej"}),u.jsx("div",{className:"notice",children:"Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!w,onClick:()=>{const N=g;y(null),p(N)},children:"Forbind"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>f({title:"Glem enhed",message:`Vil du fjerne ${g.deviceName} fra gemte enheder?`,confirmLabel:"Glem",onConfirm:()=>{a(g.deviceID),y(null)}}),children:"Glem enhed"})]})})]})}function Wb({device:s,disabled:i,onConnect:c,onSettings:a}){return u.jsxs("div",{className:"device-tile-wrap",children:[u.jsxs("button",{className:"device-tile",type:"button",onClick:c,disabled:i,children:[u.jsx("img",{className:"device-tile-icon",src:ta(s.deviceIconID),alt:""}),u.jsx("span",{className:"device-tile-name",children:s.deviceName})]}),u.jsx("button",{className:"device-tile-del",type:"button",onClick:a,"aria-label":"Enhedsindstillinger",children:u.jsx(lt,{name:"settings"})})]})}function is({label:s,value:i}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:s}),u.jsx("strong",{children:i})]})}function Jb(s){var i;return s.isOwnedByMe?"Dig":((i=s.ownerName)==null?void 0:i.trim())||"Anden bruger"}function e0(s,i){return s.deviceName.localeCompare(i.deviceName,"da",{sensitivity:"base"})}function n0(){const s=te(a=>a.connectToDevice),i=te(a=>a.findDevice),c=te(a=>a.log);return async a=>{const h=(await o_()).find(b=>b.id===a.deviceID);h?await s(h,a):(c("info","Genforbind: vælg enheden i browserens liste."),await i())}}function t0(){const s=te(c=>c.connecting),i=te(c=>c.progress);return u.jsxs("div",{className:"screen connection",children:[u.jsx("div",{className:"device-icon-pick",children:u.jsx("img",{src:ta((s==null?void 0:s.iconID)??0),alt:""})}),u.jsxs("h2",{style:{margin:0,color:"var(--red)"},children:["Forbinder til ",(s==null?void 0:s.name)??"enhed"]}),u.jsx("div",{className:"spinner"}),u.jsxs("div",{style:{width:"100%"},children:[u.jsx("div",{className:"progress-track",children:u.jsx("div",{className:"progress-fill",style:{width:`${i.value}%`}})}),u.jsx("p",{style:{color:"var(--muted)",fontWeight:600,marginTop:12},children:i.label})]})]})}function p_({selected:s,onSelect:i,onClose:c}){return u.jsx(Cn,{title:"Vælg Enhedens Ikon",onClose:c,children:u.jsx("div",{className:"icon-grid",children:m_.map(a=>u.jsx("button",{type:"button",className:`icon-tile ${a.id===s?"selected":""}`,onClick:()=>{i(a.id),c()},"aria-label":a.label,children:u.jsx("img",{src:ta(a.id),alt:""})},a.id))})})}function l0(){const s=te(ie=>ie.finishCreate),i=te(ie=>ie.cancelCreate),[c,a]=L.useState(0),[f,h]=L.useState(!1),[b,p]=L.useState(!1),[g,y]=L.useState(!1),[w,S]=L.useState(!1),[N,D]=L.useState(ea),[U,K]=L.useState(ms),[q,P]=L.useState(!1),G=ie=>Number.isFinite(ie)?Math.max(Wi,Math.min(Ji,Math.round(ie))):ea;async function re(){P(!0),await s(c,b,b&&g,b&&w,G(N),G(U))}return u.jsxs("div",{className:"screen",children:[u.jsx("header",{className:"topbar",children:u.jsx("h1",{children:"Opret Enhed"})}),u.jsxs("div",{className:"content create-body",children:[u.jsxs("button",{type:"button",className:"device-icon-pick",onClick:()=>h(!0),"aria-label":"Vælg ikon",children:[u.jsx("img",{src:ta(c),alt:""}),u.jsx("span",{className:"badge",children:u.jsx(lt,{name:"plus",size:22})})]}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:b?"":"active",onClick:()=>p(!1),children:"Privat"}),u.jsx("button",{type:"button",className:b?"active":"",onClick:()=>p(!0),children:"Offentlig"})]}),b&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:g?"":"active",onClick:()=>y(!1),children:"Nej"}),u.jsx("button",{type:"button",className:g?"active":"",onClick:()=>y(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:w?"":"active",onClick:()=>S(!1),children:"Nej"}),u.jsx("button",{type:"button",className:w?"active":"",onClick:()=>S(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter (kolonner × rækker)"}),u.jsxs("div",{className:"row",style:{width:"100%"},children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"cols",children:"Kolonner"}),u.jsx("input",{id:"cols",type:"number",min:Wi,max:Ji,value:Number.isNaN(N)?"":N,onChange:ie=>D(parseInt(ie.target.value,10)),onBlur:()=>D(G(N))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"rows",children:"Rækker"}),u.jsx("input",{id:"rows",type:"number",min:Wi,max:Ji,value:Number.isNaN(U)?"":U,onChange:ie=>K(parseInt(ie.target.value,10)),onBlur:()=>K(G(U))})]})]}),u.jsxs("div",{className:"row",style:{marginTop:"auto",width:"100%"},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>i(),disabled:q,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:re,disabled:q,children:q?"Opretter...":"Opret"})]})]}),f&&u.jsx(p_,{selected:c,onSelect:a,onClose:()=>h(!1)}),u.jsx("span",{className:"version",children:ds})]})}const na=8;function nc(s){return Math.max(5,Math.min(22,s))}function r0(s,i,c){const a=Math.max(1,s.length),f=(i-na*2)/(a*.58),h=(c-na*2)*.48;return nc(Math.min(f,h))}function ci(s,i,c){switch(c){case 90:return{x:-i,y:s};case 180:return{x:-s,y:-i};case 270:return{x:i,y:-s};default:return{x:s,y:i}}}function sc(s){return(360-s)%360}function i0(s,i,c,a){const f=a===90||a===270;return r0(s,f?c:i,f?i:c)}function oc({name:s,width:i,height:c,rotation:a}){return u.jsx("span",{style:{display:"inline-block",fontWeight:800,fontSize:i0(s,i,c,a),transform:a?`rotate(${a}deg)`:void 0,whiteSpace:a===90||a===270?"nowrap":void 0},children:s})}function a0(s,i,c,a,f){const h=s.trim().split(/\s+/).filter(Boolean),b=Math.max(1,s.replace(/\s+/g,"").length+Math.max(0,h.length-1)*1.6),p=f?nc(Math.min(i/4.6,c/4.6,12)):0,g=f?p+na:na;if(a){const S=Math.max(1,c-g*2);return{fontSize:nc(Math.min(i*.48,S/(b*1.04))),endFontSize:p,centerInset:f?{top:g,bottom:g}:{}}}const y=Math.max(1,i-g*4.2);return{fontSize:nc(Math.min(c*.42,y/(b*.58))),endFontSize:p,centerInset:f?{left:g*2.1,right:g*2.1}:{}}}function s0({control:s,rect:i,disabled:c,latestValue:a,toggleValue:f,radarPings:h=[],textValue:b,onButton:p,onSlider:g,onToggle:y,onJoystick:w,onDpad:S}){const N=L.useRef(!1),D={left:i.cx,top:i.cy,width:i.width,height:i.height};if(s.type==="button"){const U=()=>{c||!N.current||(N.current=!1,p(s.name,!1))};return u.jsx("div",{className:"control",style:D,children:u.jsx("button",{className:"control-button",type:"button",disabled:c,style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},onPointerDown:K=>{var q,P;c||(K.preventDefault(),(P=(q=K.currentTarget).setPointerCapture)==null||P.call(q,K.pointerId),N.current=!0,p(s.name,!0))},onPointerUp:K=>{var q,P;K.preventDefault(),(P=(q=K.currentTarget).releasePointerCapture)==null||P.call(q,K.pointerId),U()},onPointerCancel:U,onLostPointerCapture:U,children:u.jsx(oc,{name:s.name,width:i.width,height:i.height,rotation:s.rotation})})})}if(s.type==="toggle"){const U=!!f;return u.jsx("div",{className:"control",style:D,children:u.jsx("button",{className:`control-toggle ${U?"on":""}`,type:"button",disabled:c,"aria-pressed":U,style:{width:"100%",height:"100%"},onPointerDown:K=>{c||(K.preventDefault(),y(s.name,!U))},children:u.jsx(oc,{name:s.name,width:i.width,height:i.height,rotation:s.rotation})})})}return s.type==="radar"?u.jsx("div",{className:"control",style:D,children:u.jsx(__,{control:s,pings:h,width:i.width,height:i.height})}):s.type==="text"?u.jsx("div",{className:"control",style:D,children:u.jsx(h_,{message:b??s.name,width:i.width,height:i.height,rotation:s.rotation})}):s.type==="joystick"?u.jsx("div",{className:"control",style:D,children:u.jsx(S0,{control:s,disabled:c,onJoystick:w,width:i.width,height:i.height})}):s.type==="dpad"?u.jsx("div",{className:"control",style:D,children:u.jsx(D0,{control:s,disabled:c,onDpad:S})}):u.jsx("div",{className:"control",style:D,children:u.jsx(w0,{control:s,disabled:c,latestValue:a,onSlider:g,width:i.width,height:i.height})})}function o0(s,i,c){const f=(s.trim()||" ").split(`
`),h=f.reduce((N,D)=>D.split(/\s+/).filter(Boolean).reduce((K,q)=>Math.max(K,q.length),N),1),b=Math.max(1,Math.floor(h*1.9)),p=Math.max(f.length,f.reduce((N,D)=>N+Math.max(1,Math.ceil(Math.max(1,D.trim().length)/b)),0)),g=Math.max(1,i-na*3),y=Math.max(1,c-na*3),w=g/(h*.58),S=y/(p*1.16);return Math.max(7,Math.min(24,w,S))}function h_({message:s,width:i,height:c,rotation:a=0}){const f=s.trim()||"...",h=a===90||a===270,b=o0(f,h?c:i,h?i:c);return u.jsx("div",{className:"control-text",style:{width:"100%",height:"100%",fontSize:b},children:u.jsx("span",{style:{transform:a?`rotate(${a}deg)`:void 0},children:f})})}function __({control:s,pings:i,width:c,height:a,preview:f=!1}){const[,h]=L.useState(0),b=Math.max(120,s.radarFadeMs??1200),p=s.radarMinAngle??0,g=s.radarMaxAngle??180,y=Xn(p),w=Xn(g),S=Math.abs(g-p)>=360||y===w&&p!==g,N=Math.max(1,s.radarMaxDistance??200),D=Date.now(),U=i[i.length-1],K=s.rotation,q=Xn(y+K),P=Xn(w+K),G=b0(y,w),re=((U==null?void 0:U.angle)??G)+K,ie=f?[{id:"preview",angle:G,distance:N*.62,createdAt:D}]:i.filter(me=>D-me.createdAt<=b),_e=!S,pe=Math.max(8,Math.min(12,Math.min(c,a)*.16)),Q=Math.max(7,pe*.85),J=0,ke=0,Se=1,Ye=p0(S,q,P,K,N),W=S?{x:-1.12,y:-1.12,width:2.24,height:2.24}:h0(q,P,Ye.map(me=>me.point)),tn=S?"":c0(J,ke,Se,q,P),ze=Mh(p),Ve=Mh(g),H=_e?g0(q,P,W,c,a,ze,Ve,pe):null,ne=Ye.map(me=>{const Ee=g_(me.point,W,c,a);return{key:me.key,value:me.value,x:Ee.x,y:Ee.y}});L.useEffect(()=>{if(f||i.length===0)return;const me=window.setInterval(()=>h(Ee=>Ee+1),120);return()=>window.clearInterval(me)},[b,i.length,f]);const ce=Nt(J,ke,Se,re);return u.jsxs("div",{className:"control-radar",style:{width:"100%",height:"100%"},children:[u.jsxs("svg",{width:c,height:a,viewBox:`${W.x} ${W.y} ${W.width} ${W.height}`,preserveAspectRatio:"none","aria-hidden":"true",children:[S?u.jsx("circle",{className:"radar-sector-fill",cx:J,cy:ke,r:Se}):u.jsx("path",{className:"radar-sector-fill",d:tn}),[.25,.5,.75,1].map(me=>S?u.jsx("circle",{className:"radar-ring",cx:J,cy:ke,r:Se*me},me):u.jsx("path",{className:"radar-ring",d:u0(J,ke,Se*me,q,P)},me)),!S&&u.jsx(Nh,{cx:J,cy:ke,radius:Se,angle:q}),!S&&u.jsx(Nh,{cx:J,cy:ke,radius:Se,angle:P}),u.jsx("line",{className:"radar-sweep",x1:J,y1:ke,x2:ce.x,y2:ce.y}),ie.map(me=>{const Ee=f?0:D-me.createdAt,k=Math.max(0,1-Ee/b),z=Math.max(0,Math.min(N,me.distance)),ee=Nt(J,ke,Se*(z/N),me.angle+K);return u.jsx("circle",{className:"radar-ping",cx:ee.x,cy:ee.y,r:Math.max(.025,Math.min(W.width,W.height)*.025),opacity:k},me.id)})]}),_e&&H&&u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"radar-angle-label",style:{left:H.min.x,top:H.min.y,fontSize:pe},children:ze}),u.jsx("span",{className:"radar-angle-label",style:{left:H.max.x,top:H.max.y,fontSize:pe},children:Ve})]}),ne.map(me=>u.jsx("span",{className:"radar-range-label",style:{left:me.x,top:me.y,fontSize:Q},children:me.value},me.key))]})}function Nh({cx:s,cy:i,radius:c,angle:a}){const f=Nt(s,i,c,a);return u.jsx("line",{className:"radar-boundary",x1:s,y1:i,x2:f.x,y2:f.y})}function Nt(s,i,c,a){const f=(Xn(a)-90)*Math.PI/180;return{x:s+Math.cos(f)*c,y:i+Math.sin(f)*c}}function c0(s,i,c,a,f){const h=Nt(s,i,c,a),b=Nt(s,i,c,f),p=pc(a,f)>180?1:0;return`M ${s} ${i} L ${h.x} ${h.y} A ${c} ${c} 0 ${p} 1 ${b.x} ${b.y} Z`}function u0(s,i,c,a,f){const h=Nt(s,i,c,a),b=Nt(s,i,c,f),p=pc(a,f)>180?1:0;return`M ${h.x} ${h.y} A ${c} ${c} 0 ${p} 1 ${b.x} ${b.y}`}function pc(s,i){const c=Xn(s),a=Xn(i),f=a>=c?a-c:360-c+a;return f===0?360:f}const Zo=[.25,.5,.75,1],f0=.1,d0=.85,m0=55;function p0(s,i,c,a,f){const h=(g,y,w)=>({key:`${g}-${y}`,value:Math.round(f*y),point:Nt(0,0,y,w)});if(s){const g=Xn(180+a);return Zo.map(y=>h("full",y,g))}const b=360-pc(i,c);if(b<m0){const g=Xn(c+b/2);return Zo.map(y=>h("mid",y,g))}const p=(g,y,w)=>{const S=Math.asin(Math.min(d0,f0/y))*180/Math.PI;return Xn(g+w*S)};return[...Zo.map(g=>h("min",g,p(i,g,-1))),...Zo.map(g=>h("max",g,p(c,g,1)))]}function h0(s,i,c=[]){const a=[{x:0,y:0},Nt(0,0,1,s),Nt(0,0,1,i),...c];for(const S of[0,90,180,270])_0(S,s,i)&&a.push(Nt(0,0,1,S));const f=Math.min(...a.map(S=>S.x)),h=Math.max(...a.map(S=>S.x)),b=Math.min(...a.map(S=>S.y)),p=Math.max(...a.map(S=>S.y)),g=Math.max(.1,h-f),y=Math.max(.1,p-b),w=Math.max(g,y)*.24;return{x:f-w,y:b-w,width:g+w*2,height:y+w*2}}function _0(s,i,c){const a=Xn(i),f=Xn(s),h=pc(i,c),b=Xn(f-a);return b>=0&&b<=h}function g0(s,i,c,a,f,h,b,p){const y=Nt(0,0,1.1,s),w=Nt(0,0,1.1,i);return{min:Th(y,c,a,f,h,p),max:Th(w,c,a,f,b,p)}}function g_(s,i,c,a){return{x:(s.x-i.x)/i.width*c,y:(s.y-i.y)/i.height*a}}function Th(s,i,c,a,f,h){const b=g_(s,i,c,a),p=Math.max(10,f.length*h*.62),g=h,y=7;return{x:Rh(b.x,p/2+y,Math.max(p/2+y,c-p/2-y)),y:Rh(b.y,g/2+y,Math.max(g/2+y,a-g/2-y))}}function Rh(s,i,c){return Math.max(i,Math.min(c,s))}function Mh(s){return`${Math.round(s)}`}function Xn(s){return Number.isFinite(s)?(s%360+360)%360:0}function b0(s,i){const c=Xn(s),a=Xn(i),f=a>=c?a-c:360-c+a;return Xn(c+f/2)}function y0(s,i){if(!i)return s;const c=s.trim().split(/\s+/).filter(Boolean);return u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",lineHeight:1.02,textAlign:"center",gap:"0.42em"},children:c.map((a,f)=>u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[...a].map((h,b)=>u.jsx("span",{children:h},`${h}-${b}`))},`${a}-${f}`))})}function v0(s){const i={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},c=4;return s===0?{low:{...i,left:c,top:0,bottom:0},high:{...i,right:c,top:0,bottom:0}}:s===180?{low:{...i,right:c,top:0,bottom:0},high:{...i,left:c,top:0,bottom:0}}:s===90?{low:{...i,bottom:c,left:0,right:0},high:{...i,top:c,left:0,right:0}}:{low:{...i,top:c,left:0,right:0},high:{...i,bottom:c,left:0,right:0}}}function x0({name:s,vertical:i,rotation:c,color:a,fontSize:f,endFontSize:h,centerInset:b,lowLabel:p,highLabel:g,showEnds:y}){const w=y?v0(c):null;return u.jsxs("div",{style:{position:"absolute",inset:0,color:a},children:[u.jsx("div",{style:{position:"absolute",inset:0,...b,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:f,textAlign:"center",pointerEvents:"none"},children:y0(s,i)}),w&&u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{...w.low,fontWeight:800,fontSize:h},children:p}),u.jsx("div",{style:{...w.high,fontWeight:800,fontSize:h},children:g})]})]})}function b_({name:s,rotation:i,width:c,height:a,value:f,showEnds:h=!1,fillColor:b="var(--red)",lowLabel:p="0",highLabel:g="100"}){const y=i===90||i===270,{fontSize:w,endFontSize:S,centerInset:N}=a0(s,c,a,y,h);let D,U;i===0?(D={left:0,top:0,bottom:0,width:`${f}%`},U={left:0,top:0}):i===180?(D={right:0,top:0,bottom:0,width:`${f}%`},U={right:0,top:0}):i===90?(D={left:0,right:0,bottom:0,height:`${f}%`},U={left:0,bottom:0}):(D={left:0,right:0,top:0,height:`${f}%`},U={left:0,top:0});const K=q=>u.jsx(x0,{name:s,vertical:y,rotation:i,color:q,fontSize:w,endFontSize:S,centerInset:N,lowLabel:p,highLabel:g,showEnds:h});return u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{position:"absolute",left:0,top:0,width:`${c}px`,height:`${a}px`},children:K("var(--red)")}),u.jsx("div",{style:{position:"absolute",background:b,overflow:"hidden",...D},children:u.jsx("div",{style:{position:"absolute",width:`${c}px`,height:`${a}px`,...U},children:K("var(--white)")})})]})}function w0({control:s,disabled:i,latestValue:c,onSlider:a,width:f,height:h}){const b=L.useRef(null),p=s.sliderMin??0,g=s.sliderMax??100,[y,w]=L.useState(()=>c===void 0?jh(s.sliderRecenter??"none"):Dh(c,p,g)),S=L.useRef(null),N=s.rotation;L.useEffect(()=>{c!==void 0&&(w(Dh(c,p,g)),S.current=c)},[c,p,g]);function D(P){const G=b.current;if(!G)return 0;const re=G.getBoundingClientRect();let ie;return N===0?ie=(P.clientX-re.left)/re.width:N===180?ie=1-(P.clientX-re.left)/re.width:N===90?ie=1-(P.clientY-re.top)/re.height:ie=(P.clientY-re.top)/re.height,Math.max(0,Math.min(1,ie))}function U(P){i||K(D(P))}function K(P){const G=Math.round(P*100),re=Math.round(p+(g-p)*P);w(G),re!==S.current&&(S.current=re,a(s.name,re))}function q(){const P=s.sliderRecenter??"none";i||P==="none"||K(jh(P)/100)}return u.jsx("div",{ref:b,className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",touchAction:"none"},onPointerDown:P=>{i||(P.preventDefault(),P.currentTarget.setPointerCapture(P.pointerId),U(P))},onPointerMove:P=>{P.buttons!==0&&U(P)},onPointerUp:q,onPointerCancel:q,onLostPointerCapture:q,children:u.jsx(b_,{name:s.name,rotation:N,width:f,height:h,value:y,showEnds:!0,lowLabel:String(p),highLabel:String(g)})})}function jh(s){return s==="bottom"?0:s==="top"?100:s==="middle"?50:0}function Dh(s,i,c){return c===i?0:Math.max(0,Math.min(100,Math.round((s-i)/(c-i)*100)))}function Ah(s,i,c){return Math.round(i+(c-i)*(s+1)/2)}function Oh(s,i){return s==="bottom"?i?1:-1:s==="top"?i?-1:1:0}function Ch(s){return{nx:Oh(s.joystickXRecenter,!1),ny:Oh(s.joystickYRecenter,!0)}}function y_(s,i){const c=Math.min(s,i),a=Math.max(6,c*.16),f=Math.max(1,c/2-a-2);return{knobRadius:a,reach:f}}function v_({control:s,width:i,height:c,pos:a,dragging:f=!1}){const h=s.rotation,{knobRadius:b,reach:p}=y_(i,c),g=Math.max(7,Math.min(14,b*.62)),y=Math.max(7,Math.min(12,Math.min(i,c)*.1)),w=[{key:"xmax",value:s.joystickXMax??100,lx:1,ly:0},{key:"xmin",value:s.joystickXMin??-100,lx:-1,ly:0},{key:"ymax",value:s.joystickYMax??100,lx:0,ly:-1},{key:"ymin",value:s.joystickYMin??-100,lx:0,ly:1}];return u.jsxs("div",{className:"control-joystick",style:{width:"100%",height:"100%",position:"relative"},children:[u.jsx("div",{className:"joystick-oval",style:{position:"absolute",left:"50%",top:"50%",width:p*2,height:p*2,transform:"translate(-50%, -50%)"}}),w.map(S=>{const N=ci(S.lx,S.ly,h);return u.jsx("span",{className:"joystick-edge-label",style:{position:"absolute",left:"50%",top:"50%",fontSize:y,transform:`translate(-50%, -50%) translate(${N.x*p}px, ${N.y*p}px) rotate(${h}deg)`},children:S.value},S.key)}),u.jsx("div",{className:"joystick-knob",style:{position:"absolute",left:"50%",top:"50%",width:b*2,height:b*2,fontSize:g,transform:`translate(calc(-50% + ${a.nx*p}px), calc(-50% + ${a.ny*p}px))`,transition:f?"none":"transform 0.12s ease-out"},children:u.jsx("span",{style:{display:"inline-block",transform:s.rotation?`rotate(${s.rotation}deg)`:void 0,whiteSpace:s.rotation===90||s.rotation===270?"nowrap":void 0},children:s.name})})]})}function S0({control:s,disabled:i,onJoystick:c,width:a,height:f}){const h=s.rotation,b=L.useRef(null),[p,g]=L.useState(()=>{const G=Ch(s),re=ci(G.nx,G.ny,h);return{nx:re.x,ny:re.y}}),y=L.useRef(!1),w=L.useRef(null),S=s.joystickXMin??-100,N=s.joystickXMax??100,D=s.joystickYMin??-100,U=s.joystickYMax??100;function K(G,re){const ie=ci(G,re,sc(h)),_e=Ah(ie.x,S,N),pe=Ah(-ie.y,D,U);(!w.current||w.current.x!==_e||w.current.y!==pe)&&(w.current={x:_e,y:pe},c(s.name,_e,pe))}function q(G){const re=b.current;if(!re)return;const ie=re.getBoundingClientRect(),{reach:_e}=y_(ie.width,ie.height);let pe=(G.clientX-(ie.left+ie.width/2))/_e,Q=(G.clientY-(ie.top+ie.height/2))/_e;const J=Math.hypot(pe,Q);J>1&&(pe/=J,Q/=J),g({nx:pe,ny:Q}),K(pe,Q)}function P(){const G=s.joystickXRecenter??"middle",re=s.joystickYRecenter??"middle";if(G==="none"&&re==="none")return;const ie=ci(p.nx,p.ny,sc(h)),_e=Ch(s),pe={x:G==="none"?ie.x:_e.nx,y:re==="none"?ie.y:_e.ny},Q=ci(pe.x,pe.y,h),J={nx:Q.x,ny:Q.y};y.current=!1,g(J),K(J.nx,J.ny)}return u.jsx("div",{ref:b,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:G=>{i||(G.preventDefault(),G.currentTarget.setPointerCapture(G.pointerId),y.current=!0,q(G))},onPointerMove:G=>{i||!y.current||G.buttons===0||q(G)},onPointerUp:P,onPointerCancel:P,onLostPointerCapture:P,children:u.jsx(v_,{control:s,width:a,height:f,pos:p,dragging:y.current})})}const E0=[{direction:"up",rotate:0},{direction:"right",rotate:90},{direction:"down",rotate:180},{direction:"left",rotate:270}],k0="M 34 30 L 34 15 Q 34 8 41 8 L 59 8 Q 66 8 66 15 L 66 30 L 50 46 L 34 30 Z",N0=.1,T0={up:"OP",down:"NED",left:"VENSTRE",right:"HØJRE"},R0={up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]},M0=[{pos:"up",x:50,y:23},{pos:"right",x:78,y:50},{pos:"down",x:50,y:77},{pos:"left",x:22,y:50}];function Gf(s,i){return Math.hypot(s,i)<N0?null:Math.abs(s)>=Math.abs(i)?s>0?"right":"left":i>0?"down":"up"}function j0(s,i){const[c,a]=R0[s],f=ci(c,a,sc(i));return Gf(f.x,f.y)??s}function x_({control:s,active:i=null}){const c=s.rotation;return u.jsx("div",{className:"control-dpad",style:{width:"100%",height:"100%"},children:u.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet",children:[E0.map(a=>u.jsx("path",{className:`dpad-arm ${i===a.direction?"active":""}`,transform:`rotate(${a.rotate} 50 50)`,d:k0},a.direction)),M0.map(a=>u.jsx("text",{className:`dpad-label ${i===a.pos?"active":""}`,x:a.x,y:a.y,textAnchor:"middle",dominantBaseline:"central",transform:c?`rotate(${c} ${a.x} ${a.y})`:void 0,children:T0[j0(a.pos,c)]},a.pos))]})})}function D0({control:s,disabled:i,onDpad:c}){const a=L.useRef(null),f=L.useRef(null),h=L.useRef(!1),[b,p]=L.useState(null);function g(N){const D=a.current;if(!D)return{screen:null,logical:null};const U=D.getBoundingClientRect(),K=Math.min(U.width,U.height)/2,q=(N.clientX-(U.left+U.width/2))/K,P=(N.clientY-(U.top+U.height/2))/K,G=Gf(q,P),re=ci(q,P,sc(s.rotation)),ie=Gf(re.x,re.y);return{screen:G,logical:ie}}function y(N){const D=a.current;if(!D)return!1;const U=D.getBoundingClientRect(),K=(N.clientX-U.left)/U.width,q=(N.clientY-U.top)/U.height;return K>=0&&K<=1&&q>=0&&q<=1}function w(N){N.logical!==f.current&&(f.current&&c(s.name,f.current,!1),f.current=N.logical,N.logical&&c(s.name,N.logical,!0)),p(N.screen)}function S(){h.current=!1,w({screen:null,logical:null})}return u.jsx("div",{ref:a,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:N=>{i||!y(N)||(N.preventDefault(),N.currentTarget.setPointerCapture(N.pointerId),h.current=!0,w(g(N)))},onPointerMove:N=>{i||!h.current||N.buttons===0||w(g(N))},onPointerUp:S,onPointerCancel:S,onLostPointerCapture:S,children:u.jsx(x_,{control:s,active:b})})}const A0={button:"Knapper",slider:"Slidere",toggle:"Toggleknapper",radar:"Radar",text:"Tekstfelter",joystick:"Joysticks",dpad:"Dpads"},O0=["button","slider","toggle","radar","text","joystick","dpad"];function C0({unplaced:s,onAdd:i,onClose:c}){const a=L.useMemo(()=>O0.filter(p=>s.some(g=>g.type===p)),[s]),[f,h]=L.useState(a[0]??"button"),b=s.filter(p=>p.type===f);return L.useEffect(()=>{a.length>0&&!a.includes(f)&&h(a[0])},[a,f]),u.jsxs(Cn,{title:"Tilføj kontrol",onClose:c,children:[a.length>1&&u.jsx("div",{className:"segmented add-modal-tabs",children:a.map(p=>u.jsx("button",{type:"button",className:f===p?"active":"",onClick:()=>h(p),children:A0[p]},p))}),u.jsx("div",{className:"add-lists",children:a.length===0?u.jsx("div",{className:"device-list-empty",children:"Alle kontroller er allerede placeret."}):b.map(p=>u.jsxs("button",{type:"button",className:"add-entry",onClick:()=>i(p.name),children:[u.jsx("span",{children:p.name}),u.jsx("span",{className:"iconbtn",children:u.jsx(lt,{name:"plus",size:22})})]},p.name))})]})}function w_(s){const[i,c]=L.useState({w:0,h:0}),a=L.useRef(null),f=L.useRef(null);return L.useLayoutEffect(()=>{var g;const h=s.current;if(a.current===h)return;if((g=f.current)==null||g.disconnect(),f.current=null,a.current=h,!h){c(y=>y.w===0&&y.h===0?y:{w:0,h:0});return}const b=()=>{const y={w:h.clientWidth,h:h.clientHeight};c(w=>w.w===y.w&&w.h===y.h?w:y)};b();const p=new ResizeObserver(b);p.observe(h),f.current=p}),L.useEffect(()=>()=>{var h;(h=f.current)==null||h.disconnect(),f.current=null,a.current=null},[]),i}function ps(s){return s.centerX2!==null&&s.centerY2!==null&&s.spanX!==null&&s.spanY!==null}const B0=4,L0=5;function z0(s){return s==="joystick"||s==="dpad"?{spanX:6,spanY:6}:{spanX:B0,spanY:L0}}function Bh(s){if(!ps(s))return null;const i=s.centerX2/2,c=s.centerY2/2;return{x0:i-s.spanX/2,x1:i+s.spanX/2,y0:c-s.spanY/2,y1:c+s.spanY/2}}function U0(s,i,c=.02){return s.x0<i.x1-c&&i.x0<s.x1-c&&s.y0<i.y1-c&&i.y0<s.y1-c}function H0(s,i){return Math.max(1,Math.min(i.cols-1,s))}function I0(s,i){return Math.max(1,Math.min(i.rows-1,s))}function V0(s,i){return(s-i.margin)/i.stepX}function G0(s,i){return(i.areaH-s-i.margin)/i.stepY}function Lh(s,i,c){const a=i%2,h=(s%2+2)%2===a?s:s+1,b=c*2;return Math.max(i,Math.min(b-i,h))}function P0(){const s=te(I=>I.layout),i=te(I=>I.active),c=te(I=>I.saveLayout),a=te(I=>I.setEditMode),f=te(I=>I.askConfirm),h=!!(i!=null&&i.canEdit),[b,p]=L.useState(()=>s.map(I=>({...I}))),[g,y]=L.useState(null),[w,S]=L.useState(!1),[N,D]=L.useState(null),[U,K]=L.useState(null),[q,P]=L.useState(null),[G,re]=L.useState(!1),ie=L.useRef(null),_e=w_(ie),pe=_e.w>0&&_e.h>0,Q=c_(_e.w,_e.h,i==null?void 0:i.gridCols,i==null?void 0:i.gridRows),J=L.useMemo(()=>pe?jb(Q):[],[Q,pe]),ke=b.filter(ps),Se=b.filter(I=>!ps(I)),Ye=L.useMemo(()=>{const I=new Set;for(let A=0;A<ke.length;A+=1)for(let ae=A+1;ae<ke.length;ae+=1){const ge=Bh(ke[A]),Oe=Bh(ke[ae]);ge&&Oe&&U0(ge,Oe)&&(I.add(ke[A].name),I.add(ke[ae].name))}return I},[ke]),W=Ye.size>0,tn=L.useMemo(()=>zh(b)!==zh(s),[b,s]),ze=L.useMemo(()=>{if(!N||!U)return null;const I=b.find(ge=>ge.name===N);if(!I||I.spanX===null||I.spanY===null)return null;const A=Mf(U.cx,U.cy,I.spanX,I.spanY,Q),ae=us({...I,centerX2:A.centerX2,centerY2:A.centerY2},Q);return ae?{name:I.name,rect:ae}:null},[b,N,U,Q]);function Ve(I,A){p(ae=>ae.map(ge=>ge.name===I?A(ge):ge))}function H(I){const A=ie.current;if(!A)return{x:0,y:0};const ae=A.getBoundingClientRect(),ge=A.clientWidth/ae.width,Oe=A.clientHeight/ae.height;return{x:Math.max(0,Math.min(A.clientWidth,(I.clientX-ae.left)*ge)),y:Math.max(0,Math.min(A.clientHeight,(I.clientY-ae.top)*Oe))}}function ne(I,A){I.stopPropagation(),y(A.name);const ae=us(A,Q);ae&&(D(A.name),K({cx:ae.cx,cy:ae.cy}),I.currentTarget.setPointerCapture(I.pointerId))}function ce(I){if(N){const{x:A,y:ae}=H(I),ge=b.find(De=>De.name===N),Oe=ge?us(ge,Q):null;if(!Oe){K({cx:A,cy:ae});return}const Ge=Oe.width/2,de=Oe.height/2;K({cx:Math.max(Q.margin+Ge,Math.min(Q.areaW-Q.margin-Ge,A)),cy:Math.max(Q.margin+de,Math.min(Q.areaH-Q.margin-de,ae))});return}if(q){const{x:A,y:ae}=H(I),{name:ge,side:Oe,fixedWhole:Ge}=q;Ve(ge,de=>{if(de.spanX===null||de.spanY===null||de.centerX2===null||de.centerY2===null)return de;if(Oe==="left"||Oe==="right"){const hn=Math.round(V0(A,Q));if(Oe==="right"){const Ft=Math.max(Ge+1,Math.min(Q.cols-1,hn))-Ge;return{...de,spanX:Ft,centerX2:Ge*2+Ft}}const Fn=Math.min(Ge-1,Math.max(0,hn)),jn=Ge-Fn;return{...de,spanX:jn,centerX2:Ge*2-jn}}const De=Math.round(G0(ae,Q));if(Oe==="top"){const Fn=Math.max(Ge+1,Math.min(Q.rows-1,De))-Ge;return{...de,spanY:Fn,centerY2:Ge*2+Fn}}const Sn=Math.min(Ge-1,Math.max(0,De)),Ae=Ge-Sn;return{...de,spanY:Ae,centerY2:Ge*2-Ae}})}}function me(){if(N&&U){const I=b.find(A=>A.name===N);if(I&&I.spanX!==null&&I.spanY!==null){const A=Mf(U.cx,U.cy,I.spanX,I.spanY,Q);Ve(N,ae=>({...ae,centerX2:A.centerX2,centerY2:A.centerY2}))}}D(null),K(null),P(null)}function Ee(I,A,ae){if(I.stopPropagation(),A.centerX2===null||A.centerY2===null||A.spanX===null||A.spanY===null)return;const ge=(A.centerX2-A.spanX)/2,Oe=(A.centerX2+A.spanX)/2,Ge=(A.centerY2-A.spanY)/2,de=(A.centerY2+A.spanY)/2,De=ae==="right"?ge:ae==="left"?Oe:ae==="top"?Ge:de;y(A.name),P({name:A.name,side:ae,fixedWhole:De}),I.currentTarget.setPointerCapture(I.pointerId)}function k(I){Ve(I,A=>{const ae=(A.rotation+270)%360;if(A.spanX===null||A.spanY===null||A.centerX2===null||A.centerY2===null)return{...A,rotation:ae};const ge=H0(A.spanY,Q),Oe=I0(A.spanX,Q);return{...A,rotation:ae,spanX:ge,spanY:Oe,centerX2:Lh(A.centerX2,ge,Q.cols-1),centerY2:Lh(A.centerY2,Oe,Q.rows-1)}})}function z(I){Ve(I,A=>({...A,centerX2:null,centerY2:null,spanX:null,spanY:null,rotation:0})),y(null)}function ee(I){S(!1);const A=b.find(Ge=>Ge.name===I);if(!A)return;const{spanX:ae,spanY:ge}=z0(A.type),Oe=Mf(Q.areaW/2,Q.areaH/2,ae,ge,Q);Ve(I,()=>({...A,spanX:ae,spanY:ge,rotation:0,centerX2:Oe.centerX2,centerY2:Oe.centerY2})),y(I)}async function se(){W||(re(!0),await c(b),re(!1))}function ye(){if(!tn){a(!1);return}f({title:"Kassér ændringer",message:"Vil du forlade redigering og kassere dine layout-ændringer?",confirmLabel:"Kassér",onConfirm:()=>a(!1)})}return u.jsxs("div",{className:"edit-view",children:[u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:"controls-area",ref:ie,style:{touchAction:"none"},onPointerMove:ce,onPointerUp:me,onPointerDown:()=>y(null),children:pe&&u.jsxs(u.Fragment,{children:[u.jsx("svg",{width:Q.areaW,height:Q.areaH,style:{position:"absolute",inset:0,pointerEvents:"none"},children:J.map((I,A)=>u.jsx("circle",{cx:I.x,cy:I.y,r:2.5,fill:"rgba(198,80,78,0.45)"},A))}),ze&&u.jsx("div",{className:"snap-preview",style:{left:ze.rect.cx,top:ze.rect.cy,width:ze.rect.width,height:ze.rect.height}}),ke.map(I=>{const A=N===I.name&&U,ae=us(I,Q);if(!ae)return null;const ge=A?U.cx:ae.cx,Oe=A?U.cy:ae.cy,Ge=g===I.name,de={left:ge,top:Oe,width:ae.width,height:ae.height,outline:Ge?"3px solid var(--text)":"none",outlineOffset:2};return u.jsxs("div",{className:`control ${Ye.has(I.name)?"colliding":""}`,style:de,onPointerDown:De=>ne(De,I),children:[I.type==="button"?u.jsx("div",{className:"control-button",style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},children:u.jsx(oc,{name:I.name,width:ae.width,height:ae.height,rotation:I.rotation})}):I.type==="toggle"?u.jsx("div",{className:"control-toggle on",style:{width:"100%",height:"100%"},children:u.jsx(oc,{name:I.name,width:ae.width,height:ae.height,rotation:I.rotation})}):I.type==="radar"?u.jsx(__,{control:I,pings:[],width:ae.width,height:ae.height,preview:!0}):I.type==="text"?u.jsx(h_,{message:I.name,width:ae.width,height:ae.height,rotation:I.rotation}):I.type==="joystick"?u.jsx(v_,{control:I,width:ae.width,height:ae.height,pos:{nx:0,ny:0}}):I.type==="dpad"?u.jsx(x_,{control:I}):u.jsx("div",{className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:u.jsx(b_,{name:I.name,rotation:I.rotation,width:ae.width,height:ae.height,value:50,showEnds:!0,lowLabel:String(I.sliderMin??0),highLabel:String(I.sliderMax??100),fillColor:Ye.has(I.name)?"var(--disabled)":"var(--red)"})}),Ge&&u.jsxs(u.Fragment,{children:[u.jsx("button",{type:"button",className:"edit-handle edit-handle-top","aria-label":"Ændr højde foroven",onPointerDown:De=>Ee(De,I,"top")}),u.jsx("button",{type:"button",className:"edit-handle edit-handle-bottom","aria-label":"Ændr højde forneden",onPointerDown:De=>Ee(De,I,"bottom")}),u.jsx("button",{type:"button",className:"edit-handle edit-handle-left","aria-label":"Ændr bredde til venstre",onPointerDown:De=>Ee(De,I,"left")}),u.jsx("button",{type:"button",className:"edit-handle edit-handle-right","aria-label":"Ændr bredde til højre",onPointerDown:De=>Ee(De,I,"right")}),u.jsx("button",{type:"button",className:"edit-corner-btn edit-corner-rotate","aria-label":"Roter",title:"Roter",onPointerDown:De=>De.stopPropagation(),onClick:()=>k(I.name),children:"⟲"}),u.jsx("button",{type:"button",className:"edit-corner-btn edit-corner-remove","aria-label":"Fjern fra layout",title:"Fjern fra layout",onPointerDown:De=>De.stopPropagation(),onClick:()=>z(I.name),children:u.jsx(lt,{name:"delete",size:16})})]})]},I.name)}),h&&u.jsx("button",{type:"button",className:"fab",style:{width:52,height:52,right:12,bottom:12},onPointerDown:I=>I.stopPropagation(),onClick:()=>S(!0),"aria-label":"Tilføj kontrol",children:u.jsx(lt,{name:"plus",size:24})}),G&&u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})]})})}),u.jsxs("div",{className:"edit-band edit-actions-band",children:[u.jsx("button",{className:"btn btn-outline",style:{flex:1},type:"button",onClick:ye,disabled:G,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary",style:{flex:1},type:"button",onClick:se,disabled:W||G,children:G?"Gemmer...":"Gem"})]}),w&&u.jsx(C0,{unplaced:Se,onAdd:ee,onClose:()=>S(!1)})]})}function zh(s){return JSON.stringify(s.map(i=>({type:i.type,name:i.name,centerX2:i.centerX2,centerY2:i.centerY2,spanX:i.spanX,spanY:i.spanY,rotation:i.rotation})))}function Y0(){const s=te(G=>G.layout),i=te(G=>G.editMode),c=te(G=>G.active),a=te(G=>G.sliderValues),f=te(G=>G.toggleValues),h=te(G=>G.radarPings),b=te(G=>G.textValues),p=te(G=>G.toggleSideMenu),g=te(G=>G.sendButton),y=te(G=>G.sendSlider),w=te(G=>G.sendToggle),S=te(G=>G.sendJoystick),N=te(G=>G.sendDpad),D=L.useRef(null),U=w_(D),K=c_(U.w,U.h,c==null?void 0:c.gridCols,c==null?void 0:c.gridRows),q=U.w>0&&U.h>0,P=s.filter(ps);return u.jsxs("div",{className:"screen control-screen",children:[u.jsx(ed,{title:"Kontrol Panel",onMenu:()=>p()}),i?u.jsx(P0,{}):u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:"controls-area",ref:D,children:q?P.map(G=>{const re=us(G,K);return re?u.jsx(s0,{control:G,rect:re,disabled:!1,latestValue:G.type==="slider"?a[G.name]:void 0,toggleValue:G.type==="toggle"?f[G.name]:void 0,radarPings:G.type==="radar"?h[G.name]:void 0,textValue:G.type==="text"?b[G.name]:void 0,onButton:g,onSlider:y,onToggle:w,onJoystick:S,onDpad:N},G.name):null}):u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})})})]})}const F0="",Uh="",Hh="",si="";function as(s){return new Promise(i=>setTimeout(i,s))}class $0{constructor(i){this.transport=i}async interrupt(){await this.transport.write(Hh),await as(80),await this.transport.write(Hh)}async friendlyRepl(){await this.transport.write(Uh)}async softReset(){await this.transport.write(si)}async stop(){await this.interrupt(),await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(`try:
    ble.shutdown()
except Exception:
    pass
`).catch(()=>{})}async runFile(i,c){await this.interrupt(),await this.waitForFriendlyPrompt().catch(async()=>{await this.friendlyRepl().catch(()=>{}),await as(180)}),await as(120),c==null||c(),await this.transport.writeLine(`import builtins as _pkp_builtins; exec(_pkp_builtins.open(${JSON.stringify(i)}).read())`)}async sendFriendlyLine(i){await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(i)}async sendProgramInput(i){await this.transport.writeLine(i)}async enterRawRepl(i=2500){if(await this.interrupt(),await as(80),await this.transport.write(`\r
`),await as(40),!(await this.collectUntil(async()=>{await this.transport.write(F0)},a=>a.includes("raw REPL")||a.includes("raw REPL; CTRL-B to exit"),i)).includes("raw REPL"))throw new Error("Kunne ikke skifte til MicroPython raw REPL.")}async exec(i,c=6e3){await this.enterRawRepl();const a=await this.collectUntil(async()=>{await this.transport.write(i),i.endsWith(`
`)||await this.transport.write(`
`),await this.transport.write(si)},f=>f.includes(`${si}${si}`)||f.includes(`${si}>`),c);return await this.friendlyRepl().catch(()=>{}),q0(a)}collectUntil(i,c,a){return new Promise((f,h)=>{let b="",p=null;const g=setTimeout(()=>{p==null||p(),h(new Error("Timeout ved USB REPL kommando."))},a);p=this.transport.addDataListener(y=>{b+=y,c(b)&&(clearTimeout(g),p==null||p(),f(b))}),i().catch(y=>{clearTimeout(g),p==null||p(),h(y instanceof Error?y:new Error("USB REPL kommando fejlede."))})})}async waitForFriendlyPrompt(i=1600){await this.collectUntil(async()=>{await this.transport.write(Uh)},c=>/(^|\r?\n)>>> ?$/.test(c),i)}}function q0(s){const i=s.indexOf("OK"),c=s.indexOf(si,i>=0?i:0),a=c>=0?s.indexOf(si,c+1):-1;if(i<0||c<0)return{output:s.trim(),error:"",raw:s};const f=s.slice(i+2,c).replace(/^\r?\n/,"").trimEnd(),h=a>=0?s.slice(c+1,a).trim():"";return{output:f,error:h,raw:s}}const K0=[{version:"MicroPython v1.28.0",date:"2026-04-06",stamp:"20260406",tag:"v1.28.0"},{version:"MicroPython v1.27.0",date:"2025-12-09",stamp:"20251209",tag:"v1.27.0"},{version:"MicroPython v1.26.1",date:"2025-09-11",stamp:"20250911",tag:"v1.26.1"},{version:"MicroPython v1.26.0",date:"2025-08-09",stamp:"20250809",tag:"v1.26.0"},{version:"MicroPython v1.25.0",date:"2025-04-15",stamp:"20250415",tag:"v1.25.0"},{version:"MicroPython v1.24.1",date:"2024-11-29",stamp:"20241129",tag:"v1.24.1"},{version:"MicroPython v1.24.0",date:"2024-10-25",stamp:"20241025",tag:"v1.24.0"},{version:"MicroPython v1.23.0",date:"2024-06-02",stamp:"20240602",tag:"v1.23.0"},{version:"MicroPython v1.22.2",date:"2024-02-22",stamp:"20240222",tag:"v1.22.2"},{version:"MicroPython v1.22.1",date:"2024-01-05",stamp:"20240105",tag:"v1.22.1"}],X0=[{board:"Raspberry Pi Pico",firmwareName:"RPI_PICO"},{board:"Raspberry Pi Pico W",firmwareName:"RPI_PICO_W"}],Rr=X0.flatMap(({board:s,firmwareName:i})=>K0.map(({version:c,date:a,stamp:f,tag:h})=>{const b=`${i}-${f}-${h}.uf2`;return{board:s,version:c,date:a,fileName:b,url:`https://micropython.org/resources/firmware/${b}`}})),Cf=512,Bf=`import builtins as _pkp_builtins
`;function Pl(s){return JSON.stringify(s)}function Q0(s){return`bytes.fromhex(${JSON.stringify([...s].map(i=>i.toString(16).padStart(2,"0")).join(""))})`}function Z0(s,i){return`${s==="/"?"":s.replace(/\/$/,"")}/${i}`}class W0{constructor(i){this.repl=i}async list(i="/"){const c=`
import os
base = ${Pl(i)}
for name in os.listdir(base):
    p = (${Pl(i)}.rstrip('/') + '/' + name) if ${Pl(i)} != '/' else '/' + name
    try:
        st = os.stat(p)
        mode = st[0]
        kind = 'dir' if (mode & 0x4000) else 'file'
        size = st[6]
    except Exception:
        kind = 'unknown'
        size = -1
    print(name + '\\t' + kind + '\\t' + str(size))
`,a=await this.repl.exec(c);if(a.error)throw new Error(a.error);return a.output.split(/\r?\n/).map(f=>f.trim()).filter(Boolean).map(f=>{const[h,b,p]=f.split("	"),g=b==="dir"||b==="file"?b:"unknown",y=parseInt(p??"",10);return{name:h,path:Z0(i,h),type:g,...Number.isFinite(y)&&y>=0?{size:y}:{}}})}async readText(i){const c=`
import sys
${Bf}with _pkp_builtins.open(${Pl(i)}, 'rb') as f:
    while True:
        b = f.read(${Cf})
        if not b:
            break
        print(b.hex())
`,a=await this.repl.exec(c,1e4);if(a.error)throw new Error(a.error);const f=a.output.replace(/\s+/g,"");return new TextDecoder().decode(J0(f))}async writeText(i,c,a){const f=new TextEncoder().encode(c);if(a==null||a(5,"Klargør fil..."),await this.repl.exec(`${Bf}_pkp_builtins.open(${Pl(i)}, 'wb').close()`),f.length===0){a==null||a(100,"Gemt på Pico");return}for(let h=0;h<f.length;h+=Cf){const b=f.slice(h,h+Cf),p=`
${Bf}with _pkp_builtins.open(${Pl(i)}, 'ab') as f:
    f.write(${Q0(b)})
`,g=await this.repl.exec(p,1e4);if(g.error)throw new Error(g.error);const y=Math.min(h+b.length,f.length);a==null||a(10+Math.round(y/f.length*85),`Gemmer ${y}/${f.length} bytes...`)}a==null||a(100,"Gemt på Pico")}async replaceTextSafely(i,c,a,f={}){const h=`${i}.tmp`;if(await this.writeText(h,c,(g,y)=>a==null?void 0:a(Math.min(70,g*.7),y)),a==null||a(78,"Verificerer fil..."),await this.readText(h)!==c)throw await this.delete(h).catch(()=>{}),new Error(`Verificering fejlede for ${i}.`);a==null||a(88,"Udskifter fil...");let p=!!f.createBackup;if(p){const g=await this.readText(i).catch(()=>null);p=g!==null&&g!==c}if(p){const g=await this.nextBackupPath(i).catch(()=>`${i}.backup`);await this.rename(i,g).catch(()=>{})}else await this.delete(i).catch(()=>{});await this.rename(h,i),a==null||a(100,"Installeret på Pico")}async delete(i){const c=await this.repl.exec(`
import os
os.remove(${Pl(i)})
`);if(c.error)throw new Error(c.error)}async nextBackupPath(i){const c=await this.list("/"),a=new Set(c.map(S=>S.path.toLowerCase())),f=i.replace(/\\/g,"/"),h=f.lastIndexOf("/"),b=h>=0?f.slice(0,h+1):"/",p=h>=0?f.slice(h+1):f.replace(/^\/+/,""),g=p.lastIndexOf("."),y=g>0?p.slice(0,g):p,w=g>0?p.slice(g):"";for(let S=1;S<1e3;S+=1){const N=`${b}${y}_backup${S}${w}`;if(!a.has(N.toLowerCase()))return N}return`${b}${y}_backup${Date.now()}${w}`}async rename(i,c){const a=await this.repl.exec(`
import os
os.rename(${Pl(i)}, ${Pl(c)})
`);if(a.error)throw new Error(a.error)}}function J0(s){const i=new Uint8Array(Math.floor(s.length/2));for(let c=0;c<i.length;c+=1)i[c]=parseInt(s.slice(c*2,c*2+2),16);return i}const ey=`from machine import Pin                    # Giver adgang til pins på Pico W, fx LED'en
import utime as time                       # Bruges til tid, pauser og timere
import network                             # Bruges til at forbinde Pico W til Wi-Fi
import gc                                  # Bruges til at rydde op i hukommelsen

try:                                       # Prøv først MicroPython-versionen af requests
    import urequests as requests           # urequests henter data fra internettet
except ImportError:                        # Hvis urequests ikke findes
    import requests                        # Brug den almindelige requests i stedet

from PicoBluetooth import PicoBluetooth    # Biblioteket der laver Bluetooth kontrolpanelet

WIFI_SSID = "dit-wifi-navn"                # Skift til navnet på dit Wi-Fi (SSID)
WIFI_PASSWORD = "dit-wifi-kodeord"         # Skift til kodeordet til dit Wi-Fi

DEVICE_NAME = "OdenseVejr"                 # Navnet Pico W viser i Bluetooth-listen

BluetoothControls = (                      # Felterne appen viser i kontrolpanelet
    ("text", "STATUS"),                    # Viser hvad programmet laver lige nu
    ("text", "VEJR_NU"),                   # Viser klokkeslæt og vejrtype
    ("text", "TEMPERATUR"),                # Viser temperatur og føles-som temperatur
    ("text", "REGN"),                      # Viser regn og luftfugtighed
    ("text", "VIND"),                      # Viser vindhastighed og vindretning
)

LATITUDE = "55.4038"                       # Breddegrad for Odense - skift til din egen by
LONGITUDE = "10.4024"                      # Længdegrad for Odense - skift til din egen by

OPDATER_HVERT_MS = 60 * 1000               # Hent nyt vejr hvert 60. sekund
WIFI_TIMEOUT_MS = 15000                    # Giv op efter 15 sekunder uden Wi-Fi

WEATHER_URL = (                            # Her bygger vi adressen til vejr-API'et
    "http://api.open-meteo.com/v1/forecast"  # Open-Meteos gratis API-adresse
    "?latitude=" + LATITUDE +              # Sender byens breddegrad med i kaldet
    "&longitude=" + LONGITUDE +            # Sender byens længdegrad med i kaldet
    "&current=temperature_2m,relative_humidity_2m,apparent_temperature,"  # Temperatur, fugtighed, føles-som
    "precipitation,weather_code,wind_speed_10m,wind_direction_10m"        # Regn, vejrkode, vind og vindretning
    "&timezone=Europe%2FCopenhagen"        # Bed API'et om dansk tid
)

VEJRKODER = {                              # Open-Meteo sender tal, som vi laver om til tekst
    0: "Klar himmel", 1: "Mest klart", 2: "Delvist skyet", 3: "Overskyet",
    45: "Taage", 48: "Rimtaage",
    51: "Let stoevregn", 53: "Stoevregn", 55: "Kraftig stoevregn",
    56: "Let frostregn", 57: "Kraftig frostregn",
    61: "Let regn", 63: "Regn", 65: "Kraftig regn",
    66: "Let frostregn", 67: "Kraftig frostregn",
    71: "Let sne", 73: "Sne", 75: "Kraftig sne", 77: "Snefnug",
    80: "Lette byger", 81: "Regnbyger", 82: "Kraftige byger",
    85: "Lette snebyger", 86: "Kraftige snebyger",
    95: "Torden", 96: "Torden med hagl", 99: "Kraftigt tordenvejr",
}


led = Pin("LED", Pin.OUT)                  # Gør den indbyggede LED klar til brug
led.off()                                  # Sluk LED'en når programmet starter

wlan = network.WLAN(network.STA_IF)        # Wi-Fi objekt så Pico W kan forbinde til routeren

naeste_vejr_tid = time.ticks_ms()          # Hvornår vi næste gang skal hente vejr (nu)


def vis(felt, tekst):
    """Send tekst til et felt i appen, og skriv den samme tekst i terminalen."""
    ble.send_text(felt, tekst)             # Send teksten til feltet i kontrolpanelet
    print(felt + ":")                      # Skriv feltets navn i terminalen
    print(tekst)                           # \\n bliver til rigtige linjeskift i terminalen
    time.sleep_ms(80)                       # Lille pause, så appen kan nå at modtage beskeden


def forbind_wifi():
    """Tænd Wi-Fi og vent, indtil Pico W er på nettet (eller giv op)."""
    wlan.active(True)                      # Tænd Wi-Fi
    if wlan.isconnected():                 # Er vi allerede på nettet?
        return                             # Så behøver vi ikke gøre mere

    print("Forbinder til Wi-Fi...")        # Skriv i terminalen at Wi-Fi starter
    wlan.connect(WIFI_SSID, WIFI_PASSWORD) # Forbind med navn og kode ovenfor

    start = time.ticks_ms()                # Husk hvornår vi begyndte at vente
    while not wlan.isconnected():          # Bliv ved indtil Wi-Fi er forbundet
        if time.ticks_diff(time.ticks_ms(), start) > WIFI_TIMEOUT_MS:  # For lang tid?
            raise RuntimeError("Wi-Fi timeout")  # Giv op med en fejl
        time.sleep_ms(250)                 # Vent lidt før vi tjekker igen

    print("Wi-Fi forbundet:", wlan.ifconfig()[0])  # Skriv Pico W's IP-adresse


def hent_og_vis_vejr():
    """Hent vejret fra API'et og vis det i appen og i terminalen."""
    svar = None                            # Her gemmer vi API-svaret
    try:
        vis("STATUS", "Forbinder til Wi-Fi...")  # Fortæl hvad der sker
        forbind_wifi()                     # Sørg for at vi er på nettet

        gc.collect()                       # Ryd op i hukommelsen før API-kaldet
        vis("STATUS", "Henter vejr...")    # Fortæl at vi kalder API'et
        svar = requests.get(WEATHER_URL)   # Send HTTP GET til Open-Meteo

        if svar.status_code != 200:        # 200 betyder OK
            raise RuntimeError("API-fejl: " + str(svar.status_code))

        vejr = svar.json()["current"]      # Find "current"-delen af svaret

        klokkeslet = vejr["time"].split("T")[-1]   # Tag kun tiden efter T, fx 14:15
        vejrtekst = VEJRKODER.get(vejr["weather_code"], "Ukendt vejr")  # Tal -> tekst

        # Byg fire beskeder med \\n, så hvert felt viser to linjer i appen.
        vis("VEJR_NU", "Tid: {}\\nVejr: {}".format(klokkeslet, vejrtekst))
        vis("TEMPERATUR", "Temperatur: {} C\\nFoeles som: {} C".format(
            vejr["temperature_2m"], vejr["apparent_temperature"]))
        vis("REGN", "Regn: {} mm\\nFugtighed: {} %".format(
            vejr["precipitation"], vejr["relative_humidity_2m"]))
        vis("VIND", "Vind: {} km/h\\nRetning: {} grader".format(
            vejr["wind_speed_10m"], vejr["wind_direction_10m"]))

        vis("STATUS", "Vejrdata OK")       # Alt gik godt

    except Exception as fejl:              # Hvis noget går galt, lander vi her
        print("Fejl:", fejl)               # Skriv fejlen i terminalen
        vis("STATUS", "Fejl")              # Vis fejlstatus i appen
        vis("VEJR_NU", str(fejl))          # Vis selve fejlen i første vejr-felt
        vis("TEMPERATUR", "-")             # Ryd de andre felter
        vis("REGN", "-")
        vis("VIND", "-")

    finally:                               # Kører både ved succes og fejl
        if svar is not None:               # Fik vi et svar?
            svar.close()                   # Luk det, så hukommelsen frigives
        gc.collect()                       # Ryd op igen


def on_connect():                          # Kører automatisk når Bluetooth forbinder
    global naeste_vejr_tid
    led.on()                               # Tænd LED'en når nogen forbinder
    naeste_vejr_tid = time.ticks_ms()      # Hent vejr med det samme
    vis("STATUS", "Forbundet")             # Sig hej til appen


def on_disconnect():                       # Kører automatisk når Bluetooth afbryder
    led.off()                              # Sluk LED'en når ingen er forbundet


ble = PicoBluetooth(                       # Start Bluetooth kontrolpanelet
    base_controls=BluetoothControls,       # Fortæl hvilke felter appen skal vise
    device_base_name=DEVICE_NAME,          # Fortæl hvad enheden skal hedde
    callbacks=globals()                    # Gør on_connect og on_disconnect synlige
)


while True:                                # Hovedprogrammet kører igen og igen
    if ble.connected and time.ticks_diff(time.ticks_ms(), naeste_vejr_tid) >= 0:
        hent_og_vis_vejr()                 # Tid til at hente nyt vejr
        naeste_vejr_tid = time.ticks_add(time.ticks_ms(), OPDATER_HVERT_MS)  # Planlæg næste gang

    time.sleep_ms(100)                     # Lille pause, så Pico W ikke bruger al CPU-tid
`,ny=`import ubluetooth\r
import utime as time\r
from micropython import const\r
import struct\r
import os\r
import ubinascii\r
import machine\r
\r
__version__ = '0.8.0'\r
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
# Internal wire marker for a line break inside a text-control message. A real\r
# newline can't travel over the wire (it delimits BLE frames), so send_text\r
# swaps "\\n" for this marker and the app swaps it back into a real line break.\r
# Chosen so it never collides with message text: it is never a literal \\n/\\r\r
# and never something a user types.\r
TEXT_LINEBREAK = "\\x1e"   # ASCII Record Separator\r
\r
# How many device->app telemetry lines to buffer before the app has signalled\r
# it is ready to receive (see _emit_telemetry). Bounds memory if a program\r
# floods send_text/send_radar from on_connect before the app is listening.\r
MAX_PENDING_TELEMETRY  = 40\r
\r
# When False (default), the library does not print the messages it sends and\r
# receives, so your terminal stays clean and main.py decides what runtime status\r
# to print. Important lifecycle lines (connect / disconnect / advertising) are\r
# always printed. Set True to see the raw protocol traffic while debugging.\r
DEBUG_PROTOCOL = False\r
\r
# Files on-device\r
SETTINGS_FILE = "DeviceSettings.txt"\r
LAYOUT_FILE   = "Layout.txt"\r
\r
\r
class PicoBluetooth:\r
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
      - 'text,<NAME>,<MESSAGE>'      (newlines encoded as a line-break marker)\r
      - 'toggle_state,<NAME>,<0|1>'\r
    Telemetry sent before the app is listening (e.g. from on_connect, which runs\r
    in the connect IRQ before notifications are enabled) is buffered and flushed\r
    once the app's first inbound line (HELLO) arrives, so nothing is lost.\r
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
        # Stopping a previous program (Pico IDE Stop / KeyboardInterrupt, or a\r
        # crash) unwinds Python but does not touch the radio: a prior\r
        # PicoBluetooth instance can be left advertising with its IRQ handler\r
        # and GATT table still registered. Force the radio off before turning\r
        # it back on so this instance always starts from a clean state instead\r
        # of a dead script's leftovers answering connections.\r
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
        # ---- Outbound telemetry readiness (device -> app)\r
        # The BLE connect IRQ fires before the central has enabled notifications,\r
        # so telemetry sent from on_connect would be silently dropped. Buffer it\r
        # until the app's first inbound line (HELLO) proves it is listening, then\r
        # flush everything in order so nothing is lost during startup/connect.\r
        self._app_ready = False\r
        self._pending_telemetry = []\r
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
    # -------------------- Small log helpers --------------------\r
    # The library deliberately does NOT narrate every message it sends and\r
    # receives - that is your terminal to control. Print whatever runtime status\r
    # you want from main.py (in on_button/on_slider/... and next to your\r
    # ble.send_text() calls). Set DEBUG_PROTOCOL = True to see the raw traffic.\r
    def _readable(self, msg):\r
        # Show the line-break marker as a visible "\\n" so multi-line text does\r
        # not look like it collapsed into one word in the terminal.\r
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
        self._app_ready = False\r
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
                # Buffer raw bytes and only decode once a full line is present.\r
                # Decoding each GATT write chunk on its own could split a\r
                # multi-byte UTF-8 character (e.g. AE/OE/AA) across two chunks\r
                # and corrupt or crash the decode; \\n is a single ASCII byte\r
                # that never appears inside a multi-byte UTF-8 sequence, so\r
                # splitting on the raw byte is always safe.\r
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
            # First inbound line proves the central has enabled notifications, so\r
            # any telemetry buffered during on_connect can now be delivered.\r
            if not self._app_ready:\r
                self._app_ready = True\r
                self._flush_pending_telemetry()\r
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
            self._command_buffer = b""\r
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
        protected = ("/PicoBluetooth.py",)\r
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
        """Send a device->app telemetry line, or buffer it until the app is ready.\r
\r
        on_connect runs inside the BLE connect IRQ, before the central has\r
        subscribed to notifications, so sending immediately would silently drop\r
        the message. Until the app's first inbound line (HELLO) confirms it is\r
        listening, telemetry is queued and flushed in order once ready.\r
\r
        coalesce_key lets repeated updates for the same control replace an\r
        earlier still-buffered value, so a burst of send_text/send_toggle_state\r
        for one name only keeps the latest instead of piling up.\r
        """\r
        if self._app_ready:\r
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
        """Prepare a text-control message for the wire.\r
\r
        A newline ("\\\\n") in the message becomes a line break in the app's text\r
        control. Newlines can't travel literally (they delimit BLE frames), so\r
        each one is swapped for an internal marker that the app turns back into\r
        a real line break. "\\\\r" is normalized and surrounding blank space\r
        trimmed.\r
        """\r
        try:\r
            text = str(message)\r
        except:\r
            return ""\r
        text = text.replace("\\r\\n", "\\n").replace("\\r", "\\n").strip()\r
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
    def send_text(self, name, message):\r
        """Send text to the app: text,<NAME>,<MESSAGE>.\r
\r
        Use a newline ("\\\\n") in the message to make a line break in the app's\r
        text control, e.g. ble.send_text('STATUS', 'Linje 1\\\\nLinje 2').\r
        """\r
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
        """Best-effort disconnect of the current central. Advertising restarts\r
        right away so a new central can still connect while this program keeps\r
        running."""\r
        if self.conn_handle is not None:\r
            try:\r
                self.ble.gap_disconnect(self.conn_handle)\r
            except Exception as e:\r
                print("gap_disconnect failed:", e)\r
                self._handle_disconnected("gap_disconnect_failed")\r
        else:\r
            self._handle_disconnected("disconnect_without_handle")\r
\r
    def shutdown(self):\r
        """Fully stop this peripheral: disconnect any central and deactivate\r
        the radio, without restarting advertising.\r
\r
        Use this (not disconnect()) when the running program itself is being\r
        stopped (classroom Stop / recovery flows). A KeyboardInterrupt only\r
        unwinds the Python call stack; it does not touch the BLE radio, so the\r
        old advertising and IRQ handler would otherwise keep answering\r
        connections for a script that is no longer actually running.\r
        """\r
        if self.conn_handle is not None:\r
            try:\r
                self.ble.gap_disconnect(self.conn_handle)\r
            except Exception as e:\r
                print("gap_disconnect failed:", e)\r
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
        return cms`,ly=`import array, time\r
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
`,ry=`from machine import Pin
import utime as time
from PicoBluetooth import PicoBluetooth
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
        print('D-pad ->', direction, 'ned' if is_down else 'op')


def on_slider(name, value):
    """FART-slideren sætter farten."""
    global speed_percent
    if name == 'FART':
        speed_percent = int(clamp(value, 0, 100))
        apply_drive()
        print('Fart ->', speed_percent)


def on_connect():
    # Når appen forbinder, tænder LED'en.
    led.on()


def on_disconnect():
    # Når appen afbryder, slukker LED'en, nulstiller retninger og stopper motorerne.
    led.off()
    for key in held:
        held[key] = False
    board.motorOff(1)
    board.motorOff(2)


# callbacks=globals() gør, at PicoBluetooth kan finde on_dpad osv.
ble = PicoBluetooth(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())


while True:
    # BLE-funktionerne styrer bilen. Hold programmet i gang og giv CPU-tid
    # til Bluetooth.
    time.sleep_ms(100)
`,iy=`from machine import Pin
import utime as time
from PicoBluetooth import PicoBluetooth
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
        # Joysticken sender mange gange i sekundet - slet linjen hvis det fylder for meget.
        print('Joystick -> x:', last_x, 'y:', last_y)


def on_slider(name, value):
    """FART-slideren sætter den maksimale fart."""
    global speed_percent
    if name == 'FART':
        speed_percent = int(clamp(value, 0, 100))
        apply_drive()
        print('Fart ->', speed_percent)


def on_connect():
    # Når appen forbinder, tænder LED'en.
    led.on()


def on_disconnect():
    # Når appen afbryder, slukker LED'en og begge motorer stoppes.
    global last_x, last_y
    led.off()
    last_x = 0
    last_y = 0
    board.motorOff(1)
    board.motorOff(2)


# callbacks=globals() gør, at PicoBluetooth kan finde on_joystick osv.
ble = PicoBluetooth(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())


while True:
    # BLE-funktionerne styrer bilen. Hold programmet i gang og giv CPU-tid
    # til Bluetooth.
    time.sleep_ms(100)
`,ay=`from machine import Pin
import utime as time
from PicoBluetooth import PicoBluetooth
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
    """Tænd LED'en når appen forbinder."""
    led.on()


def on_disconnect():
    """Sluk lyset når appen mister forbindelsen."""
    global light_is_on

    light_is_on = False
    show_light()
    led.off()


# callbacks=globals() betyder:
# "Brug funktionerne ovenfor, når appen sender noget."
ble = PicoBluetooth(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())


while True:
    # Programmet skal blive ved med at køre, så appen kan sende kommandoer.
    time.sleep_ms(100)
`,sy=`# PicoFly.py
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
        self.initPCA()`,cy=`from machine import Pin
import utime as time
from PicoBluetooth import PicoBluetooth
from hcsr04 import HCSR04
import PicoRobotics


# Servoens område. 45..135 betyder, at den scanner foran robotten.
SERVO_MIN = 45
SERVO_MAX = 135
SERVO_STEP = 3
SERVO_SETTLE_MS = 60

# Radarens afstandsområde og start-tilstand.
RADAR_MAX_CM = 200
SCAN_INITIAL = 0
RADAR_DOT_DURATION = 1600

# Appen får en toggle-knap og et radar-display.
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.
DEVICE_NAME = 'Radar'

BluetoothControls = (
    ('toggle', 'SCAN', SCAN_INITIAL),
    ('radar', 'RADAR', SERVO_MIN, SERVO_MAX, RADAR_MAX_CM, RADAR_DOT_DURATION),
)


# LED'en viser, om appen er forbundet.
led = Pin('LED', Pin.OUT)
led.off()

# board styrer servoen, og sensor måler afstand med HC-SR04.
board = PicoRobotics.KitronikPicoRobotics()
sensor = HCSR04(trigger_pin=2, echo_pin=3)

# Disse variabler husker, om der scannes, og hvor servoen peger.
scan_enabled = SCAN_INITIAL == 1
scan_angle = SERVO_MIN
scan_direction = 1


def on_toggle(name, value):
    """Reager på toggle-knapper fra appen."""
    global scan_enabled

    # SCAN-knappen i appen tænder eller slukker radaren.
    if name == 'SCAN':
        scan_enabled = bool(value)
        ble.send_toggle_state('SCAN', scan_enabled)
        print('Scan ->', 'til' if scan_enabled else 'fra')
    else:
        print('Ukendt kontakt:', name)


def on_connect():
    global scan_enabled, scan_angle, scan_direction

    # Start altid en ny forbindelse med scanning slukket og servoen i midten.
    led.on()
    scan_enabled = False
    scan_angle = SERVO_MIN
    scan_direction = 1
    board.servoWrite(1, 90)
    ble.send_toggle_state('SCAN', False)


def on_disconnect():
    global scan_enabled, scan_angle, scan_direction

    # Når appen afbryder, stopper scanningen og servoen sættes i midten.
    led.off()
    scan_enabled = False
    scan_angle = SERVO_MIN
    scan_direction = 1
    board.servoWrite(1, 90)
    ble.send_toggle_state('SCAN', False)


# callbacks=globals() gør, at PicoBluetooth kan finde on_toggle osv.
ble = PicoBluetooth(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())


while True:
    # Hvis scanning er slukket, venter programmet bare lidt.
    if not scan_enabled or not ble.connected:
        time.sleep_ms(100)
        continue

    # Drej servoen til næste vinkel, og giv den tid til at nå derhen.
    board.servoWrite(1, scan_angle)
    time.sleep_ms(SERVO_SETTLE_MS)

    # Mål afstand og send vinkel + afstand til radar-displayet i appen.
    distance = sensor.distance_cm()
    print('Radar:', scan_angle, distance, 'cm')
    ble.send_radar('RADAR', scan_angle, distance)

    # Gå videre til næste vinkel. Når kanten rammes, vendes retningen.
    scan_angle += SERVO_STEP * scan_direction
    if scan_angle >= SERVO_MAX:
        scan_angle = SERVO_MAX
        scan_direction = -1
    elif scan_angle <= SERVO_MIN:
        scan_angle = SERVO_MIN
        scan_direction = 1
`,uy=`from machine import Pin
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
`,fy=`from machine import Pin, PWM, ADC
from PicoBluetooth import PicoBluetooth
from neopixel import Neopixel
from PicoFly import get_board
import utime as time

# ============================================================
# Alarmstation med BLE kontrolpanel + servo door lock
#
# Hardware / pinout:
#   Fri NeoPixel LED:       GP16
#   PIR bevaegelsessensor:  GP15
#   Buzzer:                 GP14
#   Vandsensor power/VCC:   GP0
#   Vandsensor signal/S:    GP26 / ADC0
#   Keypad NeoPixel:        GP17
#   Keypad kolonner:        GP18, GP19, GP20
#   Keypad raekker:         GP21, GP22, GP27, GP28
#   Servo:                  PicoFly board.servo1
#
# Servo angles:
#   OPEN = 60
#   CLOSED = 100
# Swap these if your door moves the wrong way.
# ============================================================

# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.
DEVICE_NAME = 'AlarmDemo'

BluetoothControls = (
    ('toggle', 'ALARM', 1),
    ('toggle', 'DOR', 0),

    ('button', 'AABN DOR'),
    ('button', 'LUK DOR'),
    ('button', 'NY KODE'),
    ('button', 'NULSTIL'),
    ('button', 'TEST BIP'),

    ('slider', 'LED LYS', 0, 100, 'none'),
    ('slider', 'ROD', 0, 255, 'none'),
    ('slider', 'GRON', 0, 255, 'none'),
    ('slider', 'BLA', 0, 255, 'none'),
    ('slider', 'PIR TID', 1, 30, 'none'),
    ('slider', 'VAND GRAENSE', 0, 65535, 'none'),
    ('slider', 'BIP LYD', 0, 100, 'none'),
    ('slider', 'DOR TID', 1, 30, 'none'),

    ('text', 'STATUS'),
    ('text', 'BESKED'),
    ('text', 'KODE'),
)

# ---------------- Hardware ----------------

onboard_led = Pin('LED', Pin.OUT)
onboard_led.off()

pir = Pin(15, Pin.IN)

water_power = Pin(0, Pin.OUT)
water_power.value(0)
water_signal = ADC(Pin(26))

buzzer = PWM(Pin(14))
buzzer.duty_u16(0)

free_led = Neopixel(1, 0, 16, "GRB")
keypad_led = Neopixel(1, 1, 17, "GRB")

# Servo via PicoFly
board = get_board()
servo = board.servo1

SERVO_OPEN_ANGLE = 60
SERVO_CLOSED_ANGLE = 100

# This keypad is read rotated compared to the printed labels.
key_names = [
    ['OK',  '0', 'RET'],
    ['9',   '8', '7'],
    ['6',   '5', '4'],
    ['3',   '2', '1'],
]

column_pins = [18, 19, 20]
row_pins = [21, 22, 27, 28]

rows = [Pin(pin, Pin.OUT, value=1) for pin in row_pins]
columns = [Pin(pin, Pin.IN, Pin.PULL_UP) for pin in column_pins]

# ---------------- State ----------------

PIR_WARMUP_MS = 15000
PIR_ARM_DELAY_MS = 3000
ALARM_SOUND_MS = 5000
KEY_DEBOUNCE_MS = 80

BUZZER_MIN_DUTY = 18000
BUZZER_MAX_DUTY = 32768

alarm_enabled = True
alarm_triggered = False
code_change_mode = False

secret_code = "1234"
entered_code = ""

last_key = None
last_raw_key = None
last_key_change_ms = 0

led_brightness = 50
led_color = [255, 50, 0]

pir_hold_ms = 5000
motion_until = 0
pir_ready_at = time.ticks_add(time.ticks_ms(), PIR_WARMUP_MS)
last_pir_value = pir.value()

water_threshold = 25000
latest_water = 0

buzzer_volume = 50
alarm_sound_until = 0
alarm_beep_on = False
next_alarm_beep_ms = 0
next_water_check_ms = 0
next_status_ms = 0

door_open = False
door_open_ms = 5000
door_auto_close_at = 0


# ---------------- BLE-safe helpers ----------------

def ble_is_connected():
    try:
        return ble.connected
    except:
        return False


def ble_send_text(name, text):
    if ble_is_connected():
        try:
            ble.send_text(name, text)
        except Exception as e:
            print('BLE text send fejl:', e)


def ble_send_toggle_state(name, value):
    if ble_is_connected():
        try:
            ble.send_toggle_state(name, bool(value))
        except Exception as e:
            print('BLE toggle send fejl:', e)


# ---------------- Helpers ----------------

def clamp(value, low, high):
    value = int(value)
    if value < low:
        return low
    if value > high:
        return high
    return value


def buzzer_duty():
    volume = clamp(buzzer_volume, 0, 100)
    if volume <= 0:
        return 0
    return int(BUZZER_MIN_DUTY + (volume / 100) * (BUZZER_MAX_DUTY - BUZZER_MIN_DUTY))


def pixel_brightness(percent):
    percent = clamp(percent, 0, 100)
    return 1 + int((percent / 100) * 254)


def set_pixel(pixel, color, brightness=50):
    pixel.brightness(pixel_brightness(brightness))
    pixel.fill(tuple(color))
    pixel.show()


def clear_pixel(pixel):
    pixel.clear()
    pixel.show()


def stop_buzzer():
    buzzer.duty_u16(0)


def send_message(message):
    print(message)
    ble_send_text('BESKED', message)


def send_code_text():
    if code_change_mode:
        ble_send_text('KODE', 'Ny kode: ' + entered_code)
    else:
        ble_send_text('KODE', 'Kode: ' + entered_code)


def make_live_status_text():
    return 'Alarm: {} | Udlost: {} | Dor: {} | Vand: {} | PIR: {}'.format(
        'TIL' if alarm_enabled else 'FRA',
        'JA' if alarm_triggered else 'NEJ',
        'AABEN' if door_open else 'LUKKET',
        latest_water,
        'AKTIV' if pir.value() == 1 else 'rolig',
    )


def send_live_status():
    status = make_live_status_text()
    print(status)
    ble_send_text('STATUS', status)


def set_status_light():
    if alarm_triggered and alarm_enabled:
        set_pixel(keypad_led, (255, 0, 0), 80)
    elif door_open:
        set_pixel(keypad_led, (255, 160, 0), 60)
    elif alarm_enabled:
        set_pixel(keypad_led, (0, 180, 0), 50)
    elif ble_is_connected():
        set_pixel(keypad_led, (0, 0, 180), 35)
    else:
        clear_pixel(keypad_led)


def update_free_led():
    if alarm_enabled:
        if alarm_triggered:
            set_pixel(free_led, (255, 0, 0), 90)
        else:
            set_pixel(free_led, (0, 0, 80), 20)
    else:
        set_pixel(free_led, led_color, led_brightness)


def play_tone(freq, duration_ms):
    duty = buzzer_duty()
    if duty <= 0:
        return

    buzzer.freq(int(freq))
    buzzer.duty_u16(duty)
    time.sleep_ms(duration_ms)
    buzzer.duty_u16(0)


def read_water_sensor(samples=4):
    total = 0

    water_power.value(1)
    time.sleep_ms(10)

    try:
        for _ in range(samples):
            total += water_signal.read_u16()
            time.sleep_ms(2)
    finally:
        water_power.value(0)

    return total // samples


# ---------------- Door / servo ----------------

def set_servo_angle(angle):
    try:
        servo.set_angle(angle)
        return True
    except Exception as e:
        send_message('Servo fejl: {}'.format(e))
        return False


def send_door_state():
    ble_send_toggle_state('DOR', door_open)


def open_door(source=''):
    global door_open, door_auto_close_at

    if set_servo_angle(SERVO_OPEN_ANGLE):
        door_open = True
        door_auto_close_at = time.ticks_add(time.ticks_ms(), door_open_ms)

        send_door_state()
        update_free_led()
        set_status_light()

        if source:
            send_message('Dor aabnet via {}'.format(source))
        else:
            send_message('Dor aabnet')


def close_door(source='', announce=True):
    global door_open, door_auto_close_at

    if set_servo_angle(SERVO_CLOSED_ANGLE):
        was_open = door_open

        door_open = False
        door_auto_close_at = 0

        send_door_state()
        update_free_led()
        set_status_light()

        if announce and was_open:
            if source:
                send_message('Dor lukket via {}'.format(source))
            else:
                send_message('Dor lukket')


def authorized_open_door(source):
    """
    Used when the keypad code is correct or when BLE is used to open the door.
    This disarms the alarm first, then opens the door.
    """
    global entered_code

    set_alarm_state(False, source)
    entered_code = ""
    send_code_text()
    open_door(source)
    play_tone(1800, 160)
    send_live_status()


# ---------------- Alarm ----------------

def set_alarm_state(enabled, source=''):
    global alarm_enabled, alarm_triggered, alarm_beep_on
    global motion_until, entered_code, code_change_mode, pir_ready_at

    enabled = bool(enabled)
    changed = alarm_enabled != enabled

    alarm_enabled = enabled
    alarm_triggered = False
    alarm_beep_on = False
    motion_until = 0
    entered_code = ""
    stop_buzzer()

    if enabled:
        code_change_mode = False
        pir_ready_at = time.ticks_add(time.ticks_ms(), PIR_ARM_DELAY_MS)

        # Closing the door when alarm is armed is safer.
        close_door('alarm tilkoblet', announce=False)

        if changed:
            send_message('Alarm tilkoblet. PIR aktiv om {} sek'.format(PIR_ARM_DELAY_MS // 1000))
    else:
        if changed:
            if source:
                send_message('Alarm frakoblet via {}'.format(source))
            else:
                send_message('Alarm frakoblet')

    ble_send_toggle_state('ALARM', alarm_enabled)
    send_code_text()
    update_free_led()
    set_status_light()


def trigger_alarm(reason):
    global alarm_triggered, alarm_sound_until

    if not alarm_enabled:
        return

    alarm_sound_until = time.ticks_add(time.ticks_ms(), ALARM_SOUND_MS)

    if not alarm_triggered:
        alarm_triggered = True
        send_message('ALARM: ' + reason)

    update_free_led()
    set_status_light()


def reset_alarm():
    global alarm_triggered, entered_code, alarm_beep_on
    global motion_until, alarm_sound_until, next_alarm_beep_ms

    alarm_triggered = False
    alarm_beep_on = False
    motion_until = 0
    alarm_sound_until = 0
    next_alarm_beep_ms = 0
    entered_code = ""

    stop_buzzer()
    update_free_led()
    set_status_light()
    send_code_text()
    send_message('Alarm nulstillet')
    send_live_status()


# ---------------- Keypad ----------------

def scan_keypad():
    for row_index, row_pin in enumerate(rows):
        row_pin.value(0)
        time.sleep_us(100)

        for col_index, col_pin in enumerate(columns):
            if col_pin.value() == 0:
                row_pin.value(1)
                return key_names[row_index][col_index]

        row_pin.value(1)

    return None


def read_key_event():
    global last_key, last_raw_key, last_key_change_ms

    now = time.ticks_ms()
    raw_key = scan_keypad()

    if raw_key != last_raw_key:
        last_raw_key = raw_key
        last_key_change_ms = now
        return None

    if time.ticks_diff(now, last_key_change_ms) < KEY_DEBOUNCE_MS:
        return None

    if raw_key is None:
        last_key = None
        return None

    if raw_key != last_key:
        last_key = raw_key
        return raw_key

    return None


def handle_key(key):
    global entered_code, secret_code, code_change_mode

    key = str(key).strip()

    play_tone(1000, 80)

    if key == 'RET':
        entered_code = ""
        send_code_text()
        send_message('Indtastning slettet')
        return

    if key == 'OK':
        if code_change_mode:
            if len(entered_code) >= 4:
                secret_code = entered_code
                code_change_mode = False
                entered_code = ""
                send_message('Ny kode gemt')
                play_tone(1800, 180)
            else:
                send_message('Ny kode skal mindst have 4 tal')
                play_tone(350, 250)

            send_code_text()
            return

        if entered_code == secret_code:
            send_message('Rigtig kode')
            authorized_open_door('keypad')
        else:
            if alarm_enabled:
                send_message('Forkert kode')
                play_tone(300, 300)
                trigger_alarm('Forkert kode')
            else:
                send_message('Forkert kode, men alarmen er fra')

            entered_code = ""
            send_code_text()

        return

    if key in ('0', '1', '2', '3', '4', '5', '6', '7', '8', '9'):
        entered_code = entered_code + key

        if len(entered_code) > 8:
            entered_code = entered_code[-8:]

        send_code_text()
        return

    send_message('Ukendt tast: {}'.format(key))


# ---------------- BLE callbacks ----------------

def on_connect():
    onboard_led.on()

    ble_send_toggle_state('ALARM', alarm_enabled)
    ble_send_toggle_state('DOR', door_open)

    send_message('Forbundet. Alarmstation klar.')
    send_live_status()
    send_code_text()
    update_free_led()
    set_status_light()


def on_disconnect():
    onboard_led.off()
    stop_buzzer()
    set_status_light()


def on_button(name, is_down):
    global code_change_mode, entered_code

    # De her knapper skal kun gøre noget, når de trykkes ned.
    # Når knappen slippes, stopper funktionen her.
    if not is_down:
        return

    if name == 'AABN DOR':
        authorized_open_door('Bluetooth')

    elif name == 'LUK DOR':
        close_door('Bluetooth')

    elif name == 'NY KODE':
        if alarm_enabled:
            send_message('Frakobl alarmen foer du aendrer kode')
            play_tone(350, 250)
            return

        code_change_mode = True
        entered_code = ""
        send_code_text()
        send_message('Tast ny kode paa keypad og tryk OK')

    elif name == 'NULSTIL':
        reset_alarm()

    elif name == 'TEST BIP':
        send_message('Tester buzzer')
        play_tone(1200, 180)


def on_toggle(name, value):
    if name == 'ALARM':
        set_alarm_state(bool(value), 'Bluetooth')
        send_live_status()

    elif name == 'DOR':
        if bool(value):
            authorized_open_door('Bluetooth')
        else:
            close_door('Bluetooth')
            send_live_status()


def on_slider(name, value):
    global led_brightness, pir_hold_ms, water_threshold
    global buzzer_volume, door_open_ms

    value = int(value)

    if name == 'LED LYS':
        led_brightness = clamp(value, 0, 100)

    elif name == 'ROD':
        led_color[0] = clamp(value, 0, 255)

    elif name == 'GRON':
        led_color[1] = clamp(value, 0, 255)

    elif name == 'BLA':
        led_color[2] = clamp(value, 0, 255)

    elif name == 'PIR TID':
        value = clamp(value, 1, 30)
        pir_hold_ms = value * 1000
        send_message('PIR lystid: {} sek'.format(value))

    elif name == 'VAND GRAENSE':
        water_threshold = clamp(value, 0, 65535)
        send_message('Vand-graense: {}'.format(water_threshold))

    elif name == 'BIP LYD':
        buzzer_volume = clamp(value, 0, 100)
        send_message('Buzzer lyd: {}%'.format(buzzer_volume))

    elif name == 'DOR TID':
        value = clamp(value, 1, 30)
        door_open_ms = value * 1000
        send_message('Dor aaben tid: {} sek'.format(value))

    update_free_led()
    set_status_light()


ble = PicoBluetooth(
    base_controls=BluetoothControls,
    device_base_name=DEVICE_NAME,
    callbacks=globals(),
)

# ---------------- Main loop ----------------

send_message('Alarmstation starter')
send_message('PIR varmer op i {} sekunder'.format(PIR_WARMUP_MS // 1000))

# Start locked/closed.
close_door('start', announce=False)

update_free_led()
set_status_light()

try:
    while True:
        now = time.ticks_ms()

        current_pir = pir.value()

        # PIR alarm
        if alarm_enabled and time.ticks_diff(now, pir_ready_at) >= 0:
            if current_pir == 1 and last_pir_value == 0:
                motion_until = time.ticks_add(now, pir_hold_ms)
                trigger_alarm('Bevaegelse opdaget')

            elif current_pir == 0 and last_pir_value == 1:
                send_message('PIR rolig igen')
        else:
            motion_until = 0

        last_pir_value = current_pir

        # Water sensor
        if time.ticks_diff(now, next_water_check_ms) >= 0:
            latest_water = read_water_sensor(samples=4)
            next_water_check_ms = time.ticks_add(now, 700)

            if alarm_enabled and latest_water >= water_threshold:
                trigger_alarm('Vand opdaget: {}'.format(latest_water))

        # Keypad
        key = read_key_event()
        if key is not None:
            print('Key:', key)
            handle_key(key)

        # Auto-close door
        if door_open and door_auto_close_at != 0:
            if time.ticks_diff(now, door_auto_close_at) >= 0:
                close_door('auto')

        # Alarm sound pattern
        if alarm_enabled and alarm_triggered and time.ticks_diff(alarm_sound_until, now) > 0:
            if time.ticks_diff(now, next_alarm_beep_ms) >= 0:
                alarm_beep_on = not alarm_beep_on

                if alarm_beep_on:
                    buzzer.freq(900)
                    buzzer.duty_u16(buzzer_duty())
                    next_alarm_beep_ms = time.ticks_add(now, 120)
                else:
                    stop_buzzer()
                    next_alarm_beep_ms = time.ticks_add(now, 180)
        else:
            stop_buzzer()

        update_free_led()
        set_status_light()

        # STATUS opdateres automatisk ofte.
        # BESKED opdateres kun ved engangshaendelser.
        if ble_is_connected() and time.ticks_diff(now, next_status_ms) >= 0:
            send_live_status()
            next_status_ms = time.ticks_add(now, 2000)

        time.sleep_ms(50)

finally:
    stop_buzzer()

    try:
        buzzer.deinit()
    except:
        pass

    try:
        close_door('stop', announce=False)
    except:
        pass

    clear_pixel(free_led)
    clear_pixel(keypad_led)
    onboard_led.off()
    print('[STOP] Programmet stoppede. Buzzer, lys og servo er sat sikkert.')
`,dy=`from machine import Pin
import utime as time
from PicoBluetooth import PicoBluetooth
import PicoRobotics


# Simpelt tank-styringsprogram til en robotbil med to motorer.
# Hver slider sender -100..100 og går tilbage til 0, når den slippes.
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.
DEVICE_NAME = 'TankBil'

# BluetoothControls bestemmer, hvilke sliders appen viser.
BluetoothControls = (
    ('slider', 'VENSTRE MOTOR', -100, 100, 'middle'),
    ('slider', 'HOJRE MOTOR', -100, 100, 'middle'),
)


# LED'en bruges som en simpel "forbundet"-lampe.
led = Pin('LED', Pin.OUT)
led.off()

# board er motor-controlleren fra Kitronik Pico Robotics.
board = PicoRobotics.KitronikPicoRobotics()


def on_slider(name, value):
    """Reager på sliders fra appen."""

    # Appen sender slider-værdien som et tal. Vi bruger minus som baglæns.
    value = int(value)

    if name == 'VENSTRE MOTOR':
        if value > 0:
            board.motorOn(1, 'f', value)
        elif value < 0:
            board.motorOn(1, 'r', -value)
        else:
            board.motorOff(1)
        print('Venstre motor ->', value)
    elif name == 'HOJRE MOTOR':
        if value > 0:
            board.motorOn(2, 'f', value)
        elif value < 0:
            board.motorOn(2, 'r', -value)
        else:
            board.motorOff(2)
        print('Hojre motor ->', value)
    else:
        print('Ukendt slider:', name)


def on_connect():
    # Når appen forbinder, tænder LED'en.
    led.on()


def on_disconnect():
    # Når appen afbryder, slukker LED'en og begge motorer stoppes.
    led.off()
    board.motorOff(1)
    board.motorOff(2)


# callbacks=globals() gør, at PicoBluetooth kan finde on_slider osv.
ble = PicoBluetooth(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())


while True:
    # BLE-funktionerne styrer bilen. Hold programmet i gang og giv CPU-tid
    # til Bluetooth.
    time.sleep_ms(100)
`,Xi=[{id:"program:send-text",path:"/main.py",label:"Send tekst (main.py)",description:"Startprogram med kun et tekstfelt, hvor Picoen sender beskeder til kontrolpanelet.",kind:"program",difficulty:"Nem",content:uy},{id:"program:neopixel-led",path:"/main.py",label:"NeoPixel lys (main.py)",description:"Startprogram til NeoPixel med hold-knap og lysstyrke-slider.",kind:"program",difficulty:"Nem",content:ay},{id:"program:tank-control",path:"/main.py",label:"Robotbil med tankstyring (main.py)",description:"Startprogram til robotbil med to motor-slidere.",kind:"program",difficulty:"Mellem",content:dy},{id:"program:dpad-control",path:"/main.py",label:"Robotbil med D-pad (main.py)",description:"Startprogram til robotbil styret med fire retningsknapper og fart-slider.",kind:"program",difficulty:"Mellem",content:ry},{id:"program:joystick-control",path:"/main.py",label:"Robotbil med joystick (main.py)",description:"Startprogram til robotbil styret med joystick og fart-slider.",kind:"program",difficulty:"Mellem",content:iy},{id:"program:radar-control",path:"/main.py",label:"Radar med afstandssensor (main.py)",description:"Startprogram til radar med servo, afstandssensor og scan-toggle.",kind:"program",difficulty:"Svær",content:cy},{id:"program:api-weather",path:"/main.py",label:"Vejr fra internettet (main.py)",description:"Startprogram der henter vejr fra et API over Wi-Fi og viser det i tekstfelter. Husk at skrive dit Wi-Fi navn og kodeord ind i main.py.",kind:"program",difficulty:"Svær",content:ey},{id:"program:smart-home",path:"/main.py",label:"SmartHome alarmstation (main.py)",description:"Startprogram til alarmstation med dør-servo, keypad, PIR, vandsensor, buzzer og NeoPixel.",kind:"program",difficulty:"Svær",content:fy},{id:"library:pico-bluetooth",path:"/PicoBluetooth.py",label:"PicoBluetooth.py",description:"Bluetooth-biblioteket der får Picoen til at tale med appen.",kind:"library",content:ny},{id:"library:pico-robotics",path:"/PicoRobotics.py",label:"PicoRobotics.py",description:"Bibliotek til Kitronik Pico Robotics Board.",kind:"library",content:oy},{id:"library:pico-fly",path:"/PicoFly.py",label:"PicoFly.py",description:"Bibliotek til PicoFly-board med motorer og servoer.",kind:"library",content:sy},{id:"library:hcsr04",path:"/hcsr04.py",label:"hcsr04.py",description:"Bibliotek til HC-SR04 ultralyds-afstandssensor.",kind:"library",content:ty},{id:"library:neopixel",path:"/neopixel.py",label:"neopixel.py",description:"Bibliotek til NeoPixel LED-strips og LED-ringe.",kind:"library",content:ly}],my=11914;function py(){return typeof navigator<"u"&&"serial"in navigator&&!!navigator.serial}function hy(){return py()?{supported:!0,message:"USB-udvikling er tilgængelig i denne browser."}:{supported:!1,message:"USB-udvikling kræver en computer med Chrome, Edge eller Chromebook."}}class _y{constructor(i={}){fe(this,"port",null);fe(this,"reader",null);fe(this,"writer",null);fe(this,"readLoopDone",null);fe(this,"readLoopActive",!1);fe(this,"disconnecting",!1);fe(this,"buffer","");fe(this,"events");fe(this,"dataListeners",new Set);this.events=i}get connected(){return!!this.port&&!!this.writer}get info(){var i;return((i=this.port)==null?void 0:i.getInfo())??null}async requestAndConnect(){if(!navigator.serial)throw new Error("Web Serial er ikke tilgængelig i denne browser.");const i=await navigator.serial.requestPort({filters:[{usbVendorId:my}]});await this.openPort(i)}async connectKnownPort(i){await this.openPort(i)}async disconnect(){var g,y;const i=this.connected||!!this.port||!!this.reader,c=this.port,a=this.reader,f=this.writer,h=this.readLoopDone,b=a==null?void 0:a.closed.catch(()=>{}),p=f==null?void 0:f.closed.catch(()=>{});this.disconnecting=!0,this.readLoopActive=!1;try{await(a==null?void 0:a.cancel())}catch{}h&&await h.catch(()=>{}),await b;try{a==null||a.releaseLock()}catch{}this.reader===a&&(this.reader=null);try{await(f==null?void 0:f.close()),await p}catch{try{await(f==null?void 0:f.abort("disconnect"))}catch{}}try{f==null||f.releaseLock()}catch{}this.writer===f&&(this.writer=null),c&&await c.close(),this.port===c&&(this.port=null),this.buffer="",this.readLoopDone===h&&(this.readLoopDone=null),this.disconnecting=!1,i&&((y=(g=this.events).onDisconnect)==null||y.call(g))}async write(i){if(!this.writer)throw new Error("Ingen USB-forbindelse.");await this.writer.write(new TextEncoder().encode(i))}async writeLine(i){await this.write(`${i}\r
`)}addDataListener(i){return this.dataListeners.add(i),()=>this.dataListeners.delete(i)}async openPort(i){var a,f,h;if(await this.disconnect().catch(()=>{}),await i.open({baudRate:115200,bufferSize:4096}),this.port=i,this.writer=((a=i.writable)==null?void 0:a.getWriter())??null,!this.writer||!i.readable)throw new Error("USB-porten kunne ikke åbnes til læsning og skrivning.");const c=i.getInfo();(h=(f=this.events).onLog)==null||h.call(f,"success",`USB-forbindelse oprettet (${gy(c)}).`),this.readLoopDone=this.startReadLoop(i)}async startReadLoop(i){var f,h,b;this.readLoopActive=!0;const c=new TextDecoder;this.reader=((f=i.readable)==null?void 0:f.getReader())??null;const a=this.reader;if(a)try{for(;this.readLoopActive;){const{value:p,done:g}=await a.read();if(g)break;p&&this.consumeText(c.decode(p,{stream:!0}))}}catch(p){this.readLoopActive&&((b=(h=this.events).onLog)==null||b.call(h,"error",p instanceof Error?p.message:"USB-læsning stoppede."))}finally{try{a.releaseLock()}catch{}this.reader===a&&(this.reader=null),this.readLoopActive&&!this.disconnecting&&this.port===i&&this.closeAfterUnexpectedReadEnd(i)}}async closeAfterUnexpectedReadEnd(i){var h,b;const c=this.connected||this.port===i;this.disconnecting=!0,this.readLoopActive=!1;const a=this.writer,f=a==null?void 0:a.closed.catch(()=>{});try{await(a==null?void 0:a.close()),await f}catch{try{await(a==null?void 0:a.abort("disconnect"))}catch{}}try{a==null||a.releaseLock()}catch{}this.writer===a&&(this.writer=null);try{await i.close()}catch{}this.port===i&&(this.port=null),this.buffer="",this.readLoopDone=null,this.disconnecting=!1,c&&((b=(h=this.events).onDisconnect)==null||b.call(h))}consumeText(i){var c,a,f,h;(a=(c=this.events).onData)==null||a.call(c,i);for(const b of this.dataListeners)b(i);for(this.buffer+=i;this.buffer.includes(`
`);){const b=this.buffer.indexOf(`
`),p=this.buffer.slice(0,b).replace(/\r$/,"");this.buffer=this.buffer.slice(b+1),(h=(f=this.events).onLine)==null||h.call(f,p)}}}function gy(s){const i=s.usbVendorId!==void 0?`VID ${s.usbVendorId.toString(16).padStart(4,"0")}`:"ukendt VID",c=s.usbProductId!==void 0?`PID ${s.usbProductId.toString(16).padStart(4,"0")}`:"ukendt PID";return`${i}, ${c}`}const S_=15e3,Ih=64*1024,Vh=1e5,E_=new URL("/micropython/micropython.mjs",window.location.origin).toString(),by=64*1024,Gh=8;function k_(){return typeof SharedArrayBuffer<"u"&&globalThis.crossOriginIsolated===!0}function yy(){return k_()?new SharedArrayBuffer(by):null}function vy(s,i){const c=new Int32Array(s,0,2),a=new Uint8Array(s),f=s.byteLength-Gh,h=new TextEncoder().encode(i+`
`);let b=Atomics.load(c,0);for(const p of h)a[Gh+b%f]=p,b+=1;Atomics.store(c,0,b),Atomics.notify(c,0)}const xy=new Set(["bluetooth","machine","network","PicoRobotics","rp2","ubluetooth"]);class wy{constructor(){fe(this,"worker",null);fe(this,"pending",null);fe(this,"nextId",0)}send(i,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython-terminalen er optaget. Stop den, eller vent på at kommandoen bliver færdig.",timedOut:!1,unavailable:!1});const a=++this.nextId,f=c.timeoutMs??S_,h=this.ensureWorker();return new Promise(b=>{const p=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython-terminalen stoppede, fordi kommandoen tog for lang tid. Tjek for uendelige løkker.",timedOut:!0,unavailable:!1}),this.restartWorker()},f);this.pending={id:a,timer:p,onOutput:c.onOutput,resolve:b},h.postMessage({type:"run",id:a,code:Ey(i),runtimeUrl:E_})})}reset(){this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),this.restartWorker()}dispose(){var i;this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),(i=this.worker)==null||i.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const i=new Worker(new URL(""+new URL("offlineMicroPython.worker-CyZOxxkY.js",import.meta.url).href,import.meta.url),{type:"module"});return i.onmessage=c=>this.handleMessage(c.data),i.onerror=c=>{this.finish({ok:!1,output:"",error:c.message||"Browser-MicroPython-terminalen fejlede i browser-worker.",timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=i,i}handleMessage(i){var a;const c=this.pending;if(!(!c||i.id!==c.id||i.type==="ready")){if(i.type==="stdout"){(a=c.onOutput)==null||a.call(c,i.text);return}if(i.type==="unavailable"){this.finish({ok:!1,output:"",error:i.error,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:i.ok,output:i.output,error:i.error,timedOut:!1,unavailable:!1})}}finish(i){const c=this.pending;c&&(window.clearTimeout(c.timer),this.pending=null,c.resolve(i))}restartWorker(){var i;(i=this.worker)==null||i.terminate(),this.worker=null}}class Sy{constructor(){fe(this,"worker",null);fe(this,"pending",null);fe(this,"nextId",0);fe(this,"stdinSab",null)}run(i,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython kører allerede kode. Stop den først.",issues:[],timedOut:!1,unavailable:!1});const a=typeof c=="number"?c:c.timeoutMs===null?null:c.timeoutMs??S_,f=typeof c=="number"?void 0:c.onOutput,h=typeof c=="number"?void 0:c.signal,b=Pf(i,{allowInput:!0});if(b.some(w=>w.level==="error"))return Promise.resolve({ok:!1,output:"",error:"",issues:b,timedOut:!1,unavailable:!1});const p=++this.nextId,g=this.ensureWorker(),y=yy();return this.stdinSab=y,new Promise(w=>{const S=K=>this.finish(K),N=()=>{this.restartWorker(),S({ok:!1,output:"",error:"",issues:b,timedOut:!1,unavailable:!1})},D=a===null?null:window.setTimeout(()=>{S({ok:!1,output:"",error:"Browser-MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:b,timedOut:!0,unavailable:!1}),this.restartWorker()},a);if(this.pending={id:p,timer:D,timeoutMs:a,issues:b,onOutput:f,signal:h,abort:N,resolve:w},h!=null&&h.aborted){N();return}h==null||h.addEventListener("abort",N,{once:!0});const U={type:"run",id:p,code:i,runtimeUrl:E_,interactive:!0,sab:y??void 0};g.postMessage(U)})}sendInput(i){const c=this.pending;!c||!this.stdinSab||(this.refreshTimeout(c),vy(this.stdinSab,i))}stop(){const i=this.pending;i&&(this.restartWorker(),this.finish({ok:!1,output:"",error:"Browser-MicroPython blev stoppet.",issues:i.issues,timedOut:!1,unavailable:!1}))}dispose(){var i;this.finish({ok:!1,output:"",error:"",issues:[],timedOut:!1,unavailable:!1}),(i=this.worker)==null||i.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const i=new Worker(new URL(""+new URL("offlineMicroPython.worker-CyZOxxkY.js",import.meta.url).href,import.meta.url),{type:"module"});return i.onmessage=c=>this.handleMessage(c.data),i.onerror=c=>{const a=this.pending;this.finish({ok:!1,output:"",error:c.message||"Offline MicroPython fejlede i browser-worker.",issues:(a==null?void 0:a.issues)??[],timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=i,i}handleMessage(i){var a;const c=this.pending;if(!(!c||i.id!==c.id||i.type==="ready")){if(i.type==="stdout"){this.refreshTimeout(c),(a=c.onOutput)==null||a.call(c,i.text);return}if(i.type==="unavailable"){this.finish({ok:!1,output:"",error:i.error,issues:c.issues,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:i.ok,output:i.output,error:i.error,issues:c.issues,timedOut:!1,unavailable:!1}),this.restartWorker()}}finish(i){var a;const c=this.pending;c&&(c.timer!==null&&window.clearTimeout(c.timer),(a=c.signal)==null||a.removeEventListener("abort",c.abort),this.pending=null,c.resolve(i))}refreshTimeout(i){i.timeoutMs!==null&&(i.timer!==null&&window.clearTimeout(i.timer),i.timer=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:i.issues,timedOut:!0,unavailable:!1}),this.restartWorker()},i.timeoutMs))}restartWorker(){var i;(i=this.worker)==null||i.terminate(),this.worker=null,this.stdinSab=null}}function Ey(s){const i=JSON.stringify(s);return["try:",`    __pico_repl_value = eval(${i})`,"    if __pico_repl_value is not None:","        print(repr(__pico_repl_value))","except SyntaxError:",`    exec(${i})`,"finally:","    try:","        del __pico_repl_value","    except Exception:","        pass"].join(`
`)}function Pf(s,i={}){const c=[],a=new Blob([s]).size;a>Ih&&c.push({level:"error",text:`Koden er ${a} bytes. Offline MicroPython kører kun små programmer op til ${Ih} bytes.`});const f=s.split(/\r?\n/);for(let h=0;h<f.length;h+=1){const b=h+1,p=cc(f[h]).trim();if(!p)continue;const g=Ny(p);g&&xy.has(g)&&c.push({level:"error",line:b,text:`${g} virker kun på Picoen. Forbind en Pico for at køre denne kode.`}),!i.allowInput&&ky(f[h])&&c.push({level:"error",line:b,text:"input() virker i hele programmer. Skriv programmet i editoren og tryk Kør, eller kør filen på Pico via USB."});const y=p.match(/\brange\(\s*(-?\d+)\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\)/);y&&Ty(y)>Vh&&c.push({level:"error",line:b,text:`range(...) er for stor til offline kørsel. Brug højst ${Vh} gentagelser.`})}for(const h of Ry(f))c.push({level:"warning",text:`Funktionen ${h} ser rekursiv ud. Hvis den ikke stopper, afbryder offline MicroPython efter få sekunder.`});return c}function cc(s){let i=null;for(let c=0;c<s.length;c+=1){const a=s[c];if((a==='"'||a==="'")&&s[c-1]!=="\\"&&(i=i===a?null:i??a),a==="#"&&!i)return s.slice(0,c)}return s}function ky(s){const i=cc(s);let c=null;for(let a=0;a<i.length;a+=1){const f=i[a];if((f==='"'||f==="'")&&i[a-1]!=="\\"){c=c===f?null:c??f;continue}if(!c&&!(!Ph(i[a-1])||i.slice(a,a+5)!=="input")&&Ph(i[a+5])&&i.slice(a+5).trimStart().startsWith("("))return!0}return!1}function Ph(s){return!s||!/[A-Za-z0-9_]/.test(s)}function Ny(s){const i=s.match(/^import\s+([A-Za-z_]\w*)/);if(i)return i[1];const c=s.match(/^from\s+([A-Za-z_]\w*)\s+import\b/);return(c==null?void 0:c[1])??null}function Yh(s){const i=s.match(/^\s*/);return(i==null?void 0:i[0].replace(/\t/g,"    ").length)??0}function Ty(s){const i=Number(s[1]),c=s[2]===void 0?void 0:Number(s[2]),a=s[3]===void 0?1:Number(s[3]);if(a===0)return Number.POSITIVE_INFINITY;const b=(c===void 0?i:c)-(c===void 0?0:i);return b>0&&a<0||b<0&&a>0?0:Math.ceil(Math.abs(b/a))}function Ry(s){const i=new Set;for(let c=0;c<s.length;c+=1){const a=cc(s[c]).trim().match(/^def\s+([A-Za-z_]\w*)\s*\(/);if(!a)continue;const f=a[1],h=Yh(s[c]);for(let b=c+1;b<s.length;b+=1){if(!s[b].trim())continue;if(Yh(s[b])<=h)break;if(new RegExp(`\\b${f}\\s*\\(`).test(cc(s[b]))){i.add(f);break}}}return[...i]}const My=/^(for|if|while|def|class|elif|else|try|except|finally|with)\b/;function jy(s,i){var w;const c=s.trim(),a=i.split(/\r?\n/),f=Dy(c),h=f?a[f-1]??"":"",b=Ay(a,f),p=c.split(/\r?\n/).filter(Boolean).at(-1)??"";if(/KeyboardInterrupt/.test(p))return{simple:"Programmet blev stoppet.",technical:c,line:f};if(/MemoryError/.test(p))return{simple:`Picoen eller browserens MicroPython løb tør for hukommelse${f?` omkring linje ${f}`:""}.`,technical:c,line:f};if(/RecursionError/.test(p))return{simple:`En funktion kalder sig selv for mange gange${f?` omkring linje ${f}`:""}.`,technical:c,line:f};const g=p.match(/UnboundLocalError:\s+local variable ['"](.+?)['"]/);if(g)return{simple:`Variablen ${g[1]} bruges inde i en funktion, før den har fået en værdi${f?` på linje ${f}`:""}.`,technical:c,line:f};const y=p.match(/NameError:\s+name ['"](.+?)['"] (?:isn't|is not) defined/);if(y)return{simple:Ly(h,y[1])?`Teksten ${y[1]} mangler måske citationstegn${f?` på linje ${f}`:""}.`:`Python kender ikke navnet ${y[1]}${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/ZeroDivisionError/.test(p))return{simple:`Kan ikke dividere med 0${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/IndentationError:\s+unexpected indent/.test(p))return{simple:`Der er for meget indrykning${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/IndentationError/.test(p))return{simple:`Mangler indrykning${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/ImportError|ModuleNotFoundError/.test(p)){const S=(w=p.match(/['"](.+?)['"]/))==null?void 0:w[1];return{simple:`Python kan ikke finde modulet${S?` ${S}`:""}.`,technical:c,line:f}}if(/OSError/.test(p))return/ENOENT|No such file|Errno\s+2/.test(p)?{simple:`Python kan ikke finde filen${f?` på linje ${f}`:""}.`,technical:c,line:f}:/EACCES|permission|denied/i.test(p)?{simple:`Python har ikke adgang til filen eller enheden${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Der opstod en fejl med en fil eller en enhed${f?` omkring linje ${f}`:""}.`,technical:c,line:f};if(/SyntaxError/.test(p)){if(/invalid syntax/.test(p)&&b.text.trim().endsWith(","))return{simple:`Linje ${b.line??f} slutter med komma. Tjek om der mangler noget efter kommaet.`,technical:c,line:b.line??f};const S=Yf(h,f)??Yf(b.text,b.line)??Oy(a,f);return S?{simple:`Mangler måske : efter linje ${S.line}.`,technical:c,line:S.line}:f&&b.text.trim().endsWith(":")&&h.trim()&&!/^\s+/.test(h)?{simple:`Mangler måske indrykning på linje ${f}.`,technical:c,line:f}:By(h)?{simple:`Tekst mangler måske citationstegn${f?` på linje ${f}`:""}.`,technical:c,line:f}:Cy(h)?{simple:`Tekst mangler måske et afsluttende citationstegn${f?` på linje ${f}`:""}.`,technical:c,line:f}:zy(h)?{simple:`Mangler måske en afsluttende parentes${f?` på linje ${f}`:""}.`,technical:c,line:f}:Uy(h)?{simple:`Der er måske en parentes for meget${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Python fandt en syntaksfejl${f?` omkring linje ${f}`:""}.`,technical:c,line:f}}return/TypeError/.test(p)?/takes .* positional arguments? but .* given/.test(p)||/function takes/.test(p)?{simple:`En funktion får for mange eller for få værdier${f?` på linje ${f}`:""}.`,technical:c,line:f}:/unsupported operand type/.test(p)?{simple:`To værdier kan ikke bruges sammen på den måde${f?` på linje ${f}`:""}.`,technical:c,line:f}:/not callable/.test(p)?{simple:`Der bliver brugt parenteser efter noget, som ikke er en funktion${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`En værdi har den forkerte type${f?` på linje ${f}`:""}.`,technical:c,line:f}:/IndexError/.test(p)?{simple:`Listen har ikke et element på den plads${f?` på linje ${f}`:""}.`,technical:c,line:f}:/KeyError/.test(p)?{simple:`Ordbogen mangler den nøgle${f?` på linje ${f}`:""}.`,technical:c,line:f}:/AttributeError/.test(p)?{simple:`Den ting har ikke den kommando${f?` på linje ${f}`:""}.`,technical:c,line:f}:/ValueError/.test(p)?/invalid literal for int/.test(p)?{simple:`Teksten kan ikke laves om til et heltal${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Værdien passer ikke her${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Python fandt en fejl${f?` omkring linje ${f}`:""}.`,technical:c,line:f}}function Dy(s){var f;const c=(f=[...s.matchAll(/line\s+(\d+)/g)].at(-1))==null?void 0:f[1];if(!c)return;const a=parseInt(c,10);return Number.isFinite(a)&&a>0?a:void 0}function Ay(s,i){if(!i)return{text:""};for(let c=i-2;c>=0;c-=1){const a=s[c]??"";if(a.trim())return{line:c+1,text:a}}return{text:""}}function Yf(s,i){if(!i)return null;const c=s.trim();return!My.test(c)||c.endsWith(":")?null:{line:i}}function Oy(s,i){const c=i?Math.min(s.length,i):s.length,a=Math.max(0,c-4);for(let f=c-1;f>=a;f-=1){const h=Yf(s[f]??"",f+1);if(h)return h}return null}function Cy(s){const i=(s.match(/'/g)??[]).length,c=(s.match(/"/g)??[]).length;return i%2===1||c%2===1}function By(s){var a,f;const c=(f=(a=s.trim().match(/^print\((.+)\)$/))==null?void 0:a[1])==null?void 0:f.trim();return!c||/['"]/.test(c)?!1:/\s/.test(c)&&/[a-zA-ZæøåÆØÅ]/.test(c)}function Ly(s,i){const c=s.trim();return!!i&&/[A-Za-zæøåÆØÅ]/.test(i)&&(c.startsWith("print(")||c.includes(`= ${i}`))}function zy(s){return N_(s)>0}function Uy(s){return N_(s)<0}function N_(s){let i=0,c=null;for(let a=0;a<s.length;a+=1){const f=s[a];if((f==='"'||f==="'")&&s[a-1]!=="\\"){c=c===f?null:c??f;continue}c||((f==="("||f==="["||f==="{")&&(i+=1),(f===")"||f==="]"||f==="}")&&(i-=1))}return i}const Ff="/min_kode.py",T_=`print('Hej fra Pico Kontrol Panel')
`,Hy=500,Iy=1200,ss="Backup-filnavne er reserveret til versionshistorik. Vælg et andet navn.";function Yn(s,i){return`${s}:${i}`}function Vy(s){return new Promise(i=>window.setTimeout(i,s))}function Gy(){const s=te(d=>d.toggleSideMenu),i=te(d=>d.askConfirm),c=te(d=>d.picoIdeOrigin),a=te(d=>d.active),f=te(d=>d.isBleConnected),h=te(d=>d.bleListFiles),b=te(d=>d.bleReadText),p=te(d=>d.bleWriteText),g=te(d=>d.bleDeleteFile),y=te(d=>d.bleRestartAndReconnect),[w,S]=L.useState(!1),[N,D]=L.useState(!1),[U,K]=L.useState([]),[q,P]=L.useState(!1),[G,re]=L.useState([]),[ie,_e]=L.useState(null),[pe,Q]=L.useState(()=>Jo(Qo())),[J,ke]=L.useState(Ff),[Se,Ye]=L.useState("local"),[W,tn]=L.useState(()=>{var d;return((d=Jo(Qo()).find(_=>_.path===Ff))==null?void 0:d.content)??T_}),[ze,Ve]=L.useState([]),[H,ne]=L.useState(!1),[ce,me]=L.useState(""),[Ee,k]=L.useState(""),[z,ee]=L.useState(null),[se,ye]=L.useState(!1),[I,A]=L.useState(null),[ae,ge]=L.useState(!1),[Oe,Ge]=L.useState({}),[de,De]=L.useState(!1),[Sn,Ae]=L.useState(0),[hn,Fn]=L.useState(()=>{var d,_;return((d=Rr.find(x=>x.board==="Raspberry Pi Pico W"))==null?void 0:d.board)??((_=Rr[0])==null?void 0:_.board)??""}),[jn,dl]=L.useState(()=>{var d,_;return((d=Rr.find(x=>x.board==="Raspberry Pi Pico W"))==null?void 0:d.version)??((_=Rr[0])==null?void 0:_.version)??""}),[Ft,Tt]=L.useState(!1),[ui,Yl]=L.useState({top:0,left:0}),[En,Dr]=L.useState(!1),[Fl,la]=L.useState(!1),[Ar,Qn]=L.useState(!0),[dt,Jt]=L.useState(""),[fi,Or]=L.useState([]),[Dn,mt]=L.useState(null),[Un,$l]=L.useState(!1),[ml,pl]=L.useState({}),[pt,$n]=L.useState({}),[qe,sn]=L.useState(null),[on,Bn]=L.useState(null),[hc,Cr]=L.useState(""),[el,Br]=L.useState(()=>hh().clearTerminalOnRun),[hl,hs]=L.useState(()=>hh().simplifiedErrors),[di,_s]=L.useState(()=>typeof navigator<"u"?Kh(navigator):!1),ql=L.useRef(null),Rt=L.useRef(null),fn=L.useRef(null),ra=L.useRef(null),Hn=L.useRef(null),_n=L.useRef(null),An=L.useRef(null),ht=L.useRef(null),Kl=L.useRef(null),Mt=L.useRef(!1),_l=L.useRef(!1),Xl=L.useRef(!1),Zn=L.useRef(""),nl=L.useRef(null),jt=L.useRef(null),rt=L.useRef(null),gl=L.useRef(null),Wn=L.useRef(null),cn=L.useRef(null),tl=L.useRef(0),bl=L.useRef(null),it=L.useRef(null),yl=L.useRef(null),Lr=L.useRef(null),zr=L.useRef([]),Ur=L.useRef([]),Ql=L.useRef(null),$t=hy(),be=c==="control"&&!!a&&f(),_t=be?(a==null?void 0:a.deviceID)??"ble":null,at=Math.max(1,W.split(`
`).length),gs=new Blob([W]).size,_c=Se==="pico"?"Picoen":"browseren",ia=L.useMemo(()=>[...new Set(Rr.map(d=>d.board))],[]),Zl=L.useMemo(()=>Rr.filter(d=>d.board===hn),[hn]),qt=Rr.find(d=>d.board===hn&&d.version===jn)??Zl[0]??Rr[0],aa=q||!!ie||En||Fl,dn=Se==="pico",Hr=dn?En:Fl,Jn=dn&&En&&w&&!be||!dn&&Fl&&!!rt.current,sa=Un||Hr&&!Jn,Wl=Jn?"stdin":">>>",oa=Jn?dn?"Input til kørende Pico-kode":"Input til kørende Browser-MicroPython":dn?"Pico MicroPython":"Browser-MicroPython",mi=L.useMemo(()=>{const d=new _y({onData:_=>{_l.current||!Mt.current||(Zn.current=(Zn.current+_).slice(-240),/(^|\r?\n)>>> ?$/.test(Zn.current)&&vs())},onLine:_=>{if(_l.current)return;const x=_.trimEnd();if(Xl.current&&x.trim()){Y("info",x);return}if(Mt.current&&bs(x)){vs();return}Mt.current&&x.trim()&&!ys(x)&&!x.includes("raw REPL")&&Y("info",x)},onLog:Y,onDisconnect:()=>{S(!1),Dr(!1),$l(!1),Mt.current=!1,Xl.current=!1,vl(),Zn.current="",hi(),Y("warning","USB-forbindelse lukket.")}});return ql.current=d,d},[]);function Y(d,_){K(x=>[...x.slice(-140),{level:d,text:_}])}function gc(d){K(_=>[..._.slice(-140),{level:"info",text:d,variant:"input"}])}function bs(d){return d.trim()===">>>"}function ys(d){return d.trimStart().startsWith(">>> import builtins as _pkp_builtins; exec(")}function vl(){nl.current!==null&&(window.clearTimeout(nl.current),nl.current=null)}function vs(){!Mt.current||nl.current!==null||(nl.current=window.setTimeout(()=>{nl.current=null,Mt.current&&(Dr(!1),Mt.current=!1,Zn.current="",Y("success","Pico-koden er færdig."),xs())},0))}function xs(){const d=fn.current;d&&Gr(d,!1)}function xl(d,_=W,x="error"){const M=jy(d,_);K(R=>[...R.slice(-140),{level:x,text:M.simple,technical:M.technical}])}function Xe(d,_,x=Se){ke(d),Ye(x),tn(_),$n(M=>({...M,[Yn(x,d)]:_})),Jl()}function pi(d,_="pico"){ke(d),Ye(_),tn(""),sn(null),Yl({top:0,left:0}),Jl()}function Jl(){zr.current=[],Ur.current=[],Ql.current=null}function Dt(){const d=Hn.current;return{content:W,selectionStart:(d==null?void 0:d.selectionStart)??W.length,selectionEnd:(d==null?void 0:d.selectionEnd)??(d==null?void 0:d.selectionStart)??W.length}}function er(d){const _=zr.current,x=_.at(-1);(x==null?void 0:x.content)===d.content&&x.selectionStart===d.selectionStart&&x.selectionEnd===d.selectionEnd||(_.push(d),_.length>Hy&&_.shift(),Ur.current=[])}function ws(d,_){let x=0;const M=Math.min(d.length,_.length);for(;x<M&&d[x]===_[x];)x+=1;let R=d.length,Z=_.length;for(;R>x&&Z>x&&d[R-1]===_[Z-1];)R-=1,Z-=1;const oe=d.slice(x,R),Ce=_.slice(x,Z),xe=Ce&&!oe?"insert":oe&&!Ce?"delete":"replace",Pe=Ce.at(-1)??"";return{kind:xe,boundaryAfter:xe==="insert"&&/[\s.,:;()[\]{}'"`+\-*/%=<>!?]/.test(Pe)}}function ca(d,_){if(_!=="typing")return Ql.current=null,!0;const x=Date.now(),M=ws(W,d),R=Ql.current,Z=R!==null&&R.path===J&&R.source===Se&&R.kind===M.kind&&R.kind!=="replace"&&!R.boundaryAfter&&x-R.at<=Iy;return Ql.current={path:J,source:Se,kind:M.kind,at:x,boundaryAfter:M.boundaryAfter},!Z}function ua(d){tn(d.content),$n(_=>({..._,[Yn(Se,J)]:d.content})),Cr(""),sn(null),window.requestAnimationFrame(()=>{const _=Hn.current;_&&(_.focus(),_.selectionStart=Math.min(d.selectionStart,d.content.length),_.selectionEnd=Math.min(d.selectionEnd,d.content.length))})}function Ir(){const d=zr.current.pop();return d?(Ql.current=null,Ur.current.push(Dt()),ua(d),!0):!1}function At(){const d=Ur.current.pop();return d?(Ql.current=null,zr.current.push(Dt()),ua(d),!0):!1}function Ot(d,_=(Z=>(Z=Hn.current)==null?void 0:Z.selectionStart)()??d.length,x=Dt(),M=_,R="programmatic"){x&&d!==W&&ca(d,R)&&er(x),tn(d),$n(oe=>({...oe,[Yn(Se,J)]:d})),Cr(""),xi(d,_),window.requestAnimationFrame(()=>{const oe=Hn.current;oe&&(oe.selectionStart=Math.min(_,d.length),oe.selectionEnd=Math.min(M,d.length))})}function Kt(d,_=Se){$n(x=>{const M=Yn(_,d);if(!(M in x))return x;const R={...x};return delete R[M],R})}function ll(){return ml[J]===W}function Ln(d,_){pl(x=>({...x,[d]:_}))}function Vr(d,_){Ln(d,_),$n(x=>({...x,[Yn("pico",d)]:_})),Se==="pico"&&J===d&&tn(_)}function hi(){re([]),Ve([]),pl({}),$n({}),sn(null),ke(d=>{const _=Jo(Qo());if(_.find(R=>R.path===d))return d;const M=_[0];return Ye("local"),tn(M.content),Jl(),M.path})}function yn(d){rl(),A({value:100,label:d}),Lr.current=window.setTimeout(()=>{Lr.current=null,A(null)},900)}function rl(){Lr.current!==null&&(window.clearTimeout(Lr.current),Lr.current=null)}function Ss(){return I?u.jsxs("div",{className:"ide-task-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(I.value),children:[u.jsxs("div",{children:[u.jsx("span",{children:I.label}),u.jsxs("strong",{children:[Math.round(I.value),"%"]}),I.cancellable&&u.jsx("button",{className:"ide-task-cancel",type:"button",onClick:qn,"aria-label":"Stop handling",title:"Stop",children:u.jsx(lt,{name:"delete",size:18})})]}),u.jsx("b",{"aria-hidden":"true",children:u.jsx("i",{style:{width:`${Math.max(2,Math.min(100,I.value))}%`}})})]}):null}function qn(){Wn.current&&gt("Stopper læsning...",!0,!0)}function gt(d="Stopper læsning...",_=!1,x=!1){var M;rl(),it.current=null,tl.current+=1,(M=Wn.current)==null||M.abort(),Wn.current=null,bl.current=null,_e(null),P(!1),A(_?{value:(I==null?void 0:I.value)??0,label:d,cancellable:!1}:null),x&&Y("warning","Stopper BLE-læsning efter den aktuelle datapakke.")}function _i(d){var _;if(!(bl.current===d||it.current===d)){if(it.current=d,cn.current){tl.current+=1,(_=Wn.current)==null||_.abort(),Wn.current=null,bl.current=null,pi(d),_e(d),P(!0),rl(),A({value:2,label:`Skifter til ${Te(d)}...`,cancellable:!0});return}nr()}}function nr(){if(cn.current)return;const d=it.current;if(!d)return;it.current=null;const _=tl.current+1;tl.current=_;const x=new AbortController;Wn.current=x,bl.current=d,pi(d),_e(d),P(!0),rl(),A({value:12,label:`Indlæser ${Te(d)}...`,cancellable:!0});const M=(async()=>{try{const R=await b(d,(Z,oe)=>{tl.current===_&&A({value:Z,label:oe,cancellable:!0})},x.signal);if(x.signal.aborted||tl.current!==_)return;Xe(d,R,"pico"),Ln(d,R),yn("Fil indlæst")}catch(R){if(tl.current!==_)return;Fy(R)||x.signal.aborted?Y("info",`Stoppede læsning af ${Te(d)}.`):(A(null),Y("error",R instanceof Error?R.message:"BLE læsning fejlede."))}})();cn.current=M,M.finally(()=>{if(cn.current!==M)return;cn.current=null,Wn.current===x&&(Wn.current=null),bl.current===d&&(bl.current=null),!!it.current||(_e(null),P(!1),x.signal.aborted&&A(null)),nr()})}async function gi(d){const _=_l.current;_l.current=!0;try{return await d()}finally{_l.current=_}}L.useEffect(()=>{if(!Ar)return;const d=An.current;d&&(d.scrollTop=d.scrollHeight)},[U,Ar]),L.useEffect(()=>{gb({clearTerminalOnRun:el,simplifiedErrors:hl})},[el,hl]),L.useEffect(()=>{var d;Zl.some(_=>_.version===jn)||dl(((d=Zl[0])==null?void 0:d.version)??"")},[Zl,jn]),L.useEffect(()=>{_s(Kh(navigator))},[]),L.useEffect(()=>{const d=()=>{const _=ql.current;Rt.current=null,fn.current=null,ql.current=null,_==null||_.disconnect().catch(()=>{})};return window.addEventListener("pagehide",d),()=>{var _,x;rl(),(_=jt.current)==null||_.dispose(),jt.current=null,(x=rt.current)==null||x.dispose(),rt.current=null,window.removeEventListener("pagehide",d),d()}},[]),L.useEffect(()=>{const d=_=>{!(_.ctrlKey||_.metaKey)||_.key.toLowerCase()!=="s"||(_.preventDefault(),!q&&J.trim()&&!di&&!se&&!z&&!H&&Ms())};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[Se,be,q,w,W,J,di,se,z,H]);function tr(d,_,x){Q(M=>{const R=zf(M,d,_,x);return ls(R),R})}function bi(d,_){Q(x=>{const M=x.find(xe=>xe.path===d),Z=pt[Yn("local",d)]??(M==null?void 0:M.content),oe=Z!==void 0&&fl(Z)!==fl(_)?zf(x,Jh(d,lc(x)),Z,!1):x,Ce=zf(oe,d,_,!1);return ls(Ce),Ce}),$n(x=>({...x,[Yn("local",d)]:_})),Se==="local"&&J===d&&(tn(_),Cr(""),sn(null),Jl())}const wl=iv(G,pe,pt,w||be);L.useEffect(()=>{be&&mn()},[be]),L.useEffect(()=>{const d=yl.current;d&&d!==_t&&hi(),yl.current=_t},[_t]);async function yi(){if($t.supported){D(!0);try{await mi.requestAndConnect();const d=new $0(mi);Rt.current=d,fn.current=new W0(d),S(!0),Ae(0),await d.interrupt(),await Es(d),Y("success","Sendte stop-signal til Pico-terminalen."),await Gr(fn.current),await Ns(fn.current)}catch(d){Y("error",d instanceof Error?d.message:"USB-forbindelse mislykkedes.");try{await mi.disconnect()}catch(_){Y("error",_ instanceof Error?`USB-porten kunne ikke lukkes: ${_.message}`:"USB-porten kunne ikke lukkes.");return}Ae(_=>{const x=_+1;return x>=3&&(Y("info","USB-forbindelsen er mislykkedes flere gange. Hvis Picoen er i BOOTSEL eller mangler MicroPython, kan du bruge MicroPython-download."),De(!0)),x}),S(!1)}finally{D(!1)}}}async function Es(d){const _=await d.exec(`import sys
print(sys.implementation.name)
`,4e3);if(_.error||!_.output.toLowerCase().includes("micropython"))throw new Error("MicroPython blev ikke fundet på Picoen.")}async function bc(){var d;try{await((d=ql.current)==null?void 0:d.disconnect()),Rt.current=null,fn.current=null,S(!1),hi()}catch(_){Y("error",_ instanceof Error?`USB-porten kunne ikke lukkes: ${_.message}`:"USB-porten kunne ikke lukkes.")}}async function Ct(d){const _=fn.current;if(_){P(!0),_l.current=!0;try{await d(_)}catch(x){A(null),Y("error",x instanceof Error?x.message:"USB filhandling fejlede.")}finally{_l.current=!1,P(!1)}}}async function mn(d=!0){if(be){P(!0);try{const _=await h();re(_),d&&Y("success",`Indlæste ${_.length} filer fra Pico via Bluetooth.`)}catch(_){Y("error",_ instanceof Error?_.message:"BLE filhandling fejlede.")}finally{P(!1)}return}await Gr(fn.current,d)}async function Gr(d,_=!0){if(d){P(!0);try{const x=await gi(()=>d.list("/"));re(x),_&&Y("success",`Indlæste ${x.length} filer fra Pico.`)}catch(x){Y("error",x instanceof Error?x.message:"USB filhandling fejlede.")}finally{P(!1)}}}async function Pr(){if(be){P(!0),A({value:4,label:"Tjekker biblioteker på Pico via Bluetooth..."});try{const d=await ks((_,x)=>A({value:_,label:x}));Ve(d),yn("Fil-tjek færdigt")}catch(d){A(null),Y("error",d instanceof Error?d.message:"BLE runtime check fejlede.")}finally{P(!1)}return}await Ns(fn.current)}async function ks(d){const _=[],x=Xi.filter(R=>R.kind==="library"&&!Mr(R));let M=0;for(const R of Xi){if(R.kind==="program"){_.push({...R,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}if(Mr(R)){_.push({...R,status:"unknown",detail:"Opdateres via USB"});continue}try{const Z=M/Math.max(1,x.length)*100,oe=100/Math.max(1,x.length);Y("info",`Tjekker ${R.label} på Pico via Bluetooth...`),d==null||d(Math.min(95,Z),`Tjekker ${R.label} på Pico...`);const Ce=await b(R.path,(Pe,pn)=>{d==null||d(Math.min(95,Z+Pe/100*oe),`${R.label}: ${pn}`)}),xe=fl(Ce)===fl(R.content);_.push({...R,status:xe?"ok":"outdated",detail:xe?"Matcher appens version":"Kan installeres via Bluetooth"})}catch{_.push({...R,status:"missing",detail:"Mangler på Pico"})}finally{M+=1}}return d==null||d(100,"Fil-tjek færdigt"),_}async function Ns(d){if(d){P(!0);try{const _=await gi(()=>Ts(d)),x=_;Ve(x)}catch(_){Y("error",_ instanceof Error?_.message:"Runtime check fejlede.")}finally{P(!1)}}}async function Ts(d){if(!d)return[];const _=[];for(const x of Xi){if(x.kind==="program"){_.push({...x,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}try{const M=await d.readText(x.path),R=fl(M)===fl(x.content);_.push({...x,status:R?"ok":"outdated",detail:R?"Matcher appens version":"Matcher ikke appens version"})}catch{_.push({...x,status:"missing",detail:"Mangler på Pico"})}}return _}async function yc(d=J){if(be){_i(d);return}_e(d),await Ct(async _=>{A({value:12,label:`Indlæser ${Te(d)}...`});const x=await Rs(_,d);Xe(d,x,"pico"),Ln(d,x),yn("Fil indlæst")}),_e(null)}async function Rs(d,_){var x;try{return await d.readText(_)}catch(M){await((x=Rt.current)==null?void 0:x.stop().catch(()=>{})),await Vy(120);try{return await d.readText(_)}catch{throw M}}}function vc(){ye(!0)}async function Ms(){if(Se==="pico"){if(!w&&!be){Y("error","Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.");return}await fa();return}js()}function js(){if(jr(J)){Y("error",ss);return}tr(J,W,!1),Ye("local"),$n(d=>({...d,[Yn("local",J)]:W})),ye(!1),Y("success",`Gemte ${Te(J)} lokalt.`)}async function fa(){if(ye(!1),jr(J))return A(null),Y("error",ss),!1;if(A({value:0,label:"Starter gemning..."}),be){P(!0);try{return await p(J,W,(_,x)=>A({value:_,label:x})),Ln(J,W),Ye("pico"),$n(_=>({..._,[Yn("pico",J)]:W})),yn("Gemt på Pico via Bluetooth"),Y("success",`Gemte ${Te(J)} på Pico via Bluetooth.`),Wo(J)&&(Tt(!0),Y("warning","main.py er gemt. Genstart Picoen for at køre den nye version.")),await mn(!1),!0}catch(_){return A(null),Y("error",_ instanceof Error?_.message:"BLE gem fejlede."),!1}finally{P(!1)}}if(!fn.current)return A(null),!1;let d=!1;return await Ct(async _=>{Sl(J,"pico")?await _.replaceTextSafely(J,W,(x,M)=>A({value:x,label:M})):await _.writeText(J,W,(x,M)=>A({value:x,label:M})),Ln(J,W),Ye("pico"),$n(x=>({...x,[Yn("pico",J)]:W})),yn("Gemt på Pico via USB"),Y("success",`Gemte ${J}.`),await mn(),await Pr(),d=!0}),d}function da(){Ds(Te(J),W),ye(!1),Y("success",`Downloadede ${Te(J)}.`)}function Ds(d,_){const x=new Blob([_],{type:"text/plain;charset=utf-8"}),M=URL.createObjectURL(x),R=document.createElement("a");R.href=M,R.download=d,R.click(),URL.revokeObjectURL(M)}async function As(d){P(!0),Tt(!1),A({value:10,label:"Genstarter Pico..."});try{await y(d)?(yn("Pico genforbundet"),Y("success",d==="control"?"Pico genforbundet. Åbner kontrolpanelet.":"Pico genforbundet til Kodeværkstedet."),d==="ide"&&await mn()):(A(null),Y("warning","Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet."))}catch(_){A(null),Y("error",_ instanceof Error?_.message:"Genstart/genforbindelse mislykkedes.")}finally{P(!1)}}function Os(d){var Z,oe;const _=d??{path:J,source:Se},x=_.source==="pico"?"Pico":"browser",M=(d==null?void 0:d.versions.length)??(_.source==="pico"?((Z=Qi(G).get(_.path))==null?void 0:Z.length)??0:((oe=Qi(lc(pe)).get(_.path))==null?void 0:oe.length)??0),R=M>0?` Det sletter også filens versionshistorik (${M} gemte versioner).`:"";ee(null),i({title:"Slet fil",message:`Vil du slette ${Te(_.path)} fra ${x}?${R}`,confirmLabel:"Slet",onConfirm:()=>{wc(_)}})}function Cs(){i({title:"Nulstil enhed",message:"Vil du nulstille Picoens enhedsindstillinger? Det sletter DeviceSettings.txt, så Picoen kan oprettes som en ny enhed igen. Kodefiler og startprogram bliver ikke slettet.",confirmLabel:"Nulstil",onConfirm:()=>{xc()}})}async function xc(){if(!fn.current){Y("error","Forbind Picoen med USB først.");return}await Ct(async d=>{await d.delete("/DeviceSettings.txt").catch(_=>{const x=_ instanceof Error?_.message:"";if(!/ENOENT|No such file|not found/i.test(x))throw _}),pl(_=>{const x={..._};return delete x["/DeviceSettings.txt"],x}),Kt("/DeviceSettings.txt","pico"),Y("success","DeviceSettings.txt er nulstillet. Afbryd og forbind Picoen igen, hvis kontrolpanelet allerede var åbent."),await mn()})}function Bs(d,_,x){const M=wl.filter(oe=>oe.kind==="file"&&oe.type==="file"),R=M.findIndex(oe=>oe.path===d&&oe.source===_);if(R===-1)return null;const Z=oe=>!!oe&&!(oe.path===d&&oe.source===_)&&!(oe.source===_&&x.has(oe.path))&&!(be&&Mr(oe));for(const oe of[!0,!1])for(let Ce=1;Ce<M.length;Ce+=1){const xe=M[R+Ce];if(Z(xe)&&(!oe||xe.source===_))return xe;const Pe=M[R-Ce];if(Z(Pe)&&(!oe||Pe.source===_))return Pe}return null}function ma(d){if(d){ha(d);return}const _=Jo(Qo())[0];Xe(_.path,pt[Yn("local",_.path)]??_.content,"local")}async function wc(d){const _=d.path,x=d.source,M=_===J&&x===Se;if(x==="local"){const xe=Qi(lc(pe)).get(_)??[],Pe=new Set([_,...xe.map(ln=>ln.path)]),pn=M?Bs(_,x,Pe):null,vn=pe.filter(ln=>!Pe.has(ln.path));Q(vn),ls(vn);for(const ln of Pe)Kt(ln,"local");M&&ma(pn);const Me=xe.length>0?` og ${xe.length} gemte versioner`:"";Y("warning",`Slettede ${Te(_)}${Me} fra browseren.`);return}const R=Qi(G).get(_)??[],Z=[_,...R.map(xe=>xe.path)],oe=M?Bs(_,x,new Set(Z)):null;if(be){P(!0);try{for(const Pe of Z)await g(Pe);pl(Pe=>{const pn={...Pe};for(const vn of Z)delete pn[vn];return pn});for(const Pe of Z)Kt(Pe,"pico");const xe=R.length>0?` og ${R.length} gemte versioner`:"";Y("warning",`Slettede ${Te(_)}${xe} på Pico via Bluetooth.`),await mn(),M&&ma(oe)}catch(xe){Y("error",xe instanceof Error?xe.message:"BLE sletning fejlede.")}finally{P(!1)}return}if(!fn.current){Y("error","Ingen Pico-forbindelse. Kan ikke slette Pico-filen.");return}let Ce=!1;await Ct(async xe=>{for(const pn of Z)await xe.delete(pn);pl(pn=>{const vn={...pn};for(const Me of Z)delete vn[Me];return vn});const Pe=R.length>0?` og ${R.length} gemte versioner`:"";Y("warning",`Slettede ${_}${Pe}.`);for(const pn of Z)Kt(pn,"pico");await mn(),await Pr(),Ce=!0}),Ce&&M&&ma(oe)}async function Sc(d){if(!d)return;const _=Py(d.name);if(!_){Y("error","Kun .py, .txt, .json og .csv kan importeres.");return}if(jr(_)){Y("error",ss);return}if(d.size>128*1024){Y("error","Filen er for stor til Pico-værkstedet.");return}const x=await d.text();if(Se==="local"){tr(_,x,!0),Xe(_,x,"local"),Y("success",`Importerede ${Te(_)} i browseren.`);return}if(!w&&!be){Y("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(be&&Mr({path:_})){Y("error","PicoBluetooth.py kan ikke importeres over Bluetooth, mens den holder forbindelsen i gang. Brug USB i stedet.");return}if(A({value:0,label:"Uploader fil til Pico..."}),be){P(!0);try{await p(_,x,(R,Z)=>A({value:R,label:Z})),Ln(_,x),Xe(_,x,"pico"),yn("Fil uploadet til Pico"),Y("success",`Importerede ${Te(_)} på Pico via Bluetooth.`),await mn()}catch(R){A(null),Y("error",R instanceof Error?R.message:"Kunne ikke importere filen til Pico.")}finally{P(!1)}return}if(!fn.current){A(null),Y("error","Ingen Pico-forbindelse. Kan ikke importere filen til Pico.");return}await Ct(async R=>{Sl(_,"pico")?await R.replaceTextSafely(_,x,(Z,oe)=>A({value:Z,label:oe})):await R.writeText(_,x,(Z,oe)=>A({value:Z,label:oe})),Ln(_,x),Xe(_,x,"pico"),yn("Fil uploadet til Pico"),Y("success",`Importerede ${Te(_)} på Pico.`),await mn(),await Pr()})}async function Ec(){me(""),ne(!0)}function kc(){const d=Fh(ce);if(!d)return;if(jr(d)){Y("error",ss);return}const _=Se;if(Sl(d,_)){Y("error",`Der findes allerede en fil med navnet ${Te(d)} i ${_==="pico"?"Pico":"browseren"}.`);return}if(_==="local"){tr(d,"",!1),Xe(d,"","local"),ne(!1),Y("success",`Oprettede ${Te(d)} i browseren.`);return}Nc(d)}async function Nc(d){if(!w&&!be){Y("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(ne(!1),A({value:0,label:"Opretter fil på Pico..."}),be){P(!0);try{await p(d,"",(_,x)=>A({value:_,label:x})),Ln(d,""),Xe(d,"","pico"),yn("Fil oprettet på Pico"),Y("success",`Oprettede ${Te(d)} på Pico via Bluetooth.`),await mn()}catch(_){A(null),Y("error",_ instanceof Error?_.message:"Kunne ikke oprette fil på Pico.")}finally{P(!1)}return}if(!fn.current){A(null),Y("error","Ingen Pico-forbindelse. Kan ikke oprette Pico-filen.");return}await Ct(async _=>{await _.writeText(d,"",(x,M)=>A({value:x,label:M})),Ln(d,""),Xe(d,"","pico"),yn("Fil oprettet på Pico"),Y("success",`Oprettede ${Te(d)} på Pico.`),await mn()})}function Tc(d){d.type==="file"&&(ee(d),k(Yy(d.path)))}async function pa(d){if(!z)return;const _=z.path;if(ee(null),z.source==="local"){const x=pe.find(M=>M.path===d.path);if(!x){Y("error","Kunne ikke finde versionen i browseren.");return}bi(_,x.content),Xe(_,x.content,"local"),Y("success",`Gendannede ${Te(d.path)} i browseren.`);return}if(A({value:0,label:"Gendanner version..."}),be){P(!0);try{const x=await b(d.path);await p(_,x,(M,R)=>A({value:M,label:R})),Ln(_,x),Xe(_,x,"pico"),yn("Version gendannet"),await mn(!1)}catch(x){A(null),Y("error",x instanceof Error?x.message:"Kunne ikke gendanne versionen.")}finally{P(!1)}return}fn.current&&await Ct(async x=>{await x.replaceTextSafely(_,await x.readText(d.path),(R,Z)=>A({value:R,label:Z}));const M=await x.readText(_);Ln(_,M),Xe(_,M,"pico"),yn("Version gendannet"),await mn()})}function Yr(d){const _=(z==null?void 0:z.source)==="local"?"browseren":"Pico";i({title:"Slet version",message:`Vil du slette ${Te(d.path)} fra ${_}?`,confirmLabel:"Slet",onConfirm:()=>{Rc(d)}})}async function Rc(d){if((z==null?void 0:z.source)==="local"){const _=pe.filter(x=>x.path!==d.path);Q(_),ls(_),Kt(d.path,"local"),ee(x=>x&&{...x,versions:x.versions.filter(M=>M.path!==d.path)}),Y("warning",`Slettede ${Te(d.path)} fra browserens versionshistorik.`);return}if(be){P(!0);try{await g(d.path),await mn(!1),ee(_=>_&&{..._,versions:_.versions.filter(x=>x.path!==d.path)})}catch(_){Y("error",_ instanceof Error?_.message:"Kunne ikke slette versionen.")}finally{P(!1)}return}fn.current&&await Ct(async _=>{await _.delete(d.path),await mn(!1),ee(x=>x&&{...x,versions:x.versions.filter(M=>M.path!==d.path)})})}async function Ls(){var x;if(!z)return;const d=z,_=lv(d.path,M=>Sl(M,d.source));if(!_){Y("error",`Kunne ikke finde et ledigt filnavn til en kopi af ${Te(d.path)}.`);return}if(d.source==="local"){const M=pt[Yn("local",d.path)]??((x=pe.find(R=>R.path===d.path))==null?void 0:x.content)??"";tr(_,M,!1),Xe(_,M,"local"),ee(null),Y("success",`Duplikerede ${Te(d.path)} til ${Te(_)} i browseren.`);return}if(ee(null),A({value:0,label:"Duplikerer fil..."}),be){P(!0);try{const M=ml[d.path]??await b(d.path);await p(_,M,(R,Z)=>A({value:R,label:Z})),Ln(_,M),Xe(_,M,"pico"),yn("Fil duplikeret"),await mn(!1),Y("success",`Duplikerede ${Te(d.path)} til ${Te(_)} på Pico via Bluetooth.`)}catch(M){A(null),Y("error",M instanceof Error?M.message:"Kunne ikke duplikere filen.")}finally{P(!1)}return}if(!fn.current){A(null),Y("error","Ingen Pico-forbindelse. Kan ikke duplikere Pico-filen.");return}await Ct(async M=>{const R=await M.readText(d.path);await M.writeText(_,R,(Z,oe)=>A({value:Z,label:oe})),Ln(_,R),Xe(_,R,"pico"),yn("Fil duplikeret"),await mn(!1),Y("success",`Duplikerede ${Te(d.path)} til ${Te(_)} på Pico.`)})}async function zs(){if(!z)return;const d=z,_=Lf(Ee,os(d.path));if(!_||_===d.path)return;if(jr(_)){Y("error",ss);return}if(Sl(_,d.source)){Y("error",`Der findes allerede en fil med navnet ${Te(_)}.`);return}const x=d.source==="local",M=d.source==="pico";if(be&&M&&(Wo(d.path)||Wo(_))){Y("error","main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.");return}P(!0);try{if(M)if(be){const R=ml[d.path]??await b(d.path);await p(_,R,(Z,oe)=>A({value:Z,label:oe})),await g(d.path),pl(Z=>({...n_(Z,d.path,_),[_]:R}))}else fn.current&&(await gi(()=>fn.current.rename(d.path,_)),pl(R=>n_(R,d.path,_)));x&&Q(R=>{const Z=R.map(oe=>oe.path===d.path?{...oe,path:_,updatedAt:Date.now()}:oe);return ls(Z),Z}),J===d.path&&Se===d.source&&ke(_),$n(R=>ov(R,d.source,d.path,_)),ee(null),k(""),Y("success",`Omdøbte ${Te(d.path)} til ${Te(_)}.`),M&&await mn()}catch(R){Y("error",R instanceof Error?R.message:"Kunne ikke omdøbe filen.")}finally{A(null),P(!1)}}function Sl(d,_){return _==="pico"?G.some(x=>x.path===d):pe.some(x=>x.path===d)}async function Us(d,_){if(!Sl(d,"pico"))return;const x=Jh(d,G),M=ml[d]??await b(d);_!==void 0&&fl(M)===fl(_)||await p(x,M)}function ha(d){if(d.type!=="file"){be&&gt(void 0,!1),ke(d.path),Ye(d.source);return}if(be&&Mr(d)){Y("warning","PicoBluetooth.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.");return}if(d.source==="local"){be&&gt(void 0,!1);const x=pe.find(M=>M.path===d.path);Xe(d.path,pt[Yn("local",d.path)]??(x==null?void 0:x.content)??"","local");return}const _=Yn("pico",d.path);if(Object.prototype.hasOwnProperty.call(pt,_)){be&&gt(void 0,!1),Xe(d.path,pt[_],"pico");return}if(Object.prototype.hasOwnProperty.call(ml,d.path)){be&&gt(void 0,!1),Xe(d.path,ml[d.path],"pico");return}yc(d.path)}async function El(){if(!w&&!be){const d=$h();Ve(d),Ge(qh(d)),ge(!0),A(null);return}P(!0),A({value:4,label:be?"Tjekker biblioteker på Pico via Bluetooth...":"Tjekker biblioteker på Pico..."}),Y("info",be?"Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...":"Tjekker om Picoens biblioteker er opdaterede før installation...");try{const d=ze.length>0?ze:be?await ks((_,x)=>A({value:_,label:x})):await gi(()=>Ts(fn.current));Ve(d),Ge(qh(d)),ge(!0),A(null)}catch(d){A(null),Y("error",d instanceof Error?d.message:"Fil-tjek før installation fejlede.")}finally{P(!1)}}async function Mc(){if(ge(!1),be){P(!0);try{const _=(ze.length>0?ze:Xi.map(M=>({...M,status:"unknown",detail:"Ikke tjekket"}))).filter(M=>Oe[M.id]&&!Mr(M));if(_.length===0){Y("info","Ingen filer valgt til installation.");return}let x=null;A({value:0,label:"Starter installation..."});for(const[M,R]of _.entries()){Y("info",`Installerer ${R.label} via Bluetooth...`);const Z=M/_.length*100,oe=100/_.length;await Us(R.path,R.content),await p(R.path,R.content,(Ce,xe)=>{A({value:Math.min(99,Z+Ce/100*oe),label:`${R.label}: ${xe}`})}),Vr(R.path,R.content),Y("success",`Installerede ${R.label}.`),R.kind==="library"&&(x=R),Wo(R.path)&&Tt(!0)}yn("Installation færdig"),await mn(!1),await Pr(),x&&_a(x)}catch(d){A(null),Y("error",d instanceof Error?d.message:"BLE installation fejlede.")}finally{P(!1)}return}await Ct(async d=>{const x=(ze.length>0?ze:Xi.map(R=>({...R,status:"unknown",detail:"Ikke tjekket"}))).filter(R=>Oe[R.id]);if(x.length===0){Y("info","Ingen filer valgt til installation.");return}let M=null;A({value:0,label:"Starter installation..."});for(const[R,Z]of x.entries()){Y("info",`Installerer ${Z.label}...`);const oe=R/x.length*100,Ce=100/x.length,xe=await d.readText(Z.path).catch(()=>null);xe!==null&&fl(xe)===fl(Z.content)?(A({value:Math.min(99,oe+Ce),label:`${Z.label}: Allerede nyeste version`}),Y("info",`${Z.label} findes allerede i samme version.`)):(await d.replaceTextSafely(Z.path,Z.content,(Pe,pn)=>{A({value:Math.min(99,oe+Pe/100*Ce),label:`${Z.label}: ${pn}`})},{createBackup:!0}),Y("success",`Installerede ${Z.label}.`)),Vr(Z.path,Z.content),Z.kind==="library"&&(M=Z)}yn("Installation færdig"),await mn(!1),await Pr(),M&&_a(M)})}function Hs(){return(ze.length>0?ze:$h()).filter(_=>Oe[_.id])}function jc(){const d=Hs();if(d.length===0){Y("info","Ingen filer valgt.");return}for(const _ of d)bi(_.path,_.content);ge(!1),Y("success",`Gemte ${d.length} filer i browseren.`)}function Is(){const d=Hs();if(d.length===0){Y("info","Ingen filer valgt.");return}d.forEach((_,x)=>{window.setTimeout(()=>{Ds(Te(_.path),_.content)},x*120)}),ge(!1),Y("success",`Starter download af ${d.length} filer.`)}function _a(d){Xe(d.path,d.content,"pico"),Ln(d.path,d.content),Y("info",`Åbnede ${d.label} i editoren.`)}function Fr(d,_){Ge(x=>{if(d.kind!=="program")return{...x,[d.id]:_};const M={...x};for(const R of ze)R.kind==="program"&&(M[R.id]=!1);return M[d.id]=_,M})}async function $r(){if(Ac(),be&&Se==="pico"){Y("warning","Bluetooth holder forbindelsen åben, så koden kan ikke køres direkte her. Gem filen, og genstart Picoen for at køre den.");return}if(Se==="local"){await Dc();return}const d=Rt.current;if(!d){Y("error",`${Te(J)} er gemt på Picoen, men der er ingen USB-forbindelse til Pico-terminalen.`);return}if(J.endsWith(".py")){if(!ll()&&(Y("info",`${Te(J)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`),!await fa())){Y("error","Pico-forbindelsen blev afbrudt under gemning.");return}if(q)return;vl(),Zn.current="",Qn(!0);try{await d.runFile(J,()=>{vl(),Zn.current="",Xl.current=!1,Dr(!0),Mt.current=!0}),Y("success",`Kører ${Te(J)}. Brug Stop for at afbryde.`)}catch(_){Dr(!1),Mt.current=!1,vl(),Zn.current="",Y("error",_ instanceof Error?_.message:"Kunne ikke starte koden.")}return}P(!0);try{const _=await d.exec(W,2e4);_.output.trim()&&Y("info",_.output),_.error.trim()&&xl(_.error,W),!_.output.trim()&&!_.error.trim()&&Y("success","Koden kørte uden output.")}catch(_){Y("error",_ instanceof Error?_.message:"Kunne ikke køre koden.")}finally{P(!1)}}async function Dc(){const d=Pf(W,{allowInput:!0});if(d.some(M=>M.level==="error")){for(const M of d){const R=M.line?`Linje ${M.line}: `:"";Y(M.level==="error"?"error":"warning",`${R}${M.text}`)}return}/\binput\s*\(/.test(W)&&!k_()&&Y("warning","input() i browseren kræver at siden genindlæses. Opdater siden (F5) og prøv igen.");const _=new AbortController;gl.current=_;const x=new Sy;rt.current=x,P(!0),la(!0),Qn(!0),Y("info",w?"Starter Browser-MicroPython for browser-filen.":"Starter Browser-MicroPython. Forbind Pico med USB for at køre på selve Picoen.");try{const M=[],R=await x.run(W,{timeoutMs:null,signal:_.signal,onOutput:xe=>{M.push(xe),Y("info",xe)}});for(const xe of R.issues){const Pe=xe.line?`Linje ${xe.line}: `:"";Y(xe.level==="error"?"error":"warning",`${Pe}${xe.text}`)}const Z=[...M,R.output].filter(Boolean).join(`
`).trim(),oe=R.output.trim();!R.error.trim()&&$y(Z)?xl(Z,W):(oe&&Y("info",oe),R.error.trim()&&xl(R.error,W,R.unavailable?"warning":"error")),R.ok&&!Z&&!R.error.trim()&&Y("success","Browser-MicroPython kørte uden output.")}finally{gl.current=null,rt.current=null,x.dispose(),la(!1),P(!1)}}async function vi(){var _,x,M;if(Fl){(_=gl.current)==null||_.abort(),(x=rt.current)==null||x.stop(),Y("warning","Stoppede Browser-MicroPython."),Qn(!0);return}if(!dn&&Un){(M=jt.current)==null||M.reset(),$l(!1),Y("warning","Stoppede Browser-MicroPython-terminalen. Variablerne i browser-terminalen blev nulstillet."),Qn(!0);return}const d=Rt.current;if(d)try{await d.stop(),Y("warning","Stoppede koden på Pico.")}catch(R){Y("error",R instanceof Error?R.message:"Kunne ikke stoppe koden.")}finally{Dr(!1),Mt.current=!1,vl(),Zn.current="",Qn(!0),xs()}}function Vs(){const d=An.current;if(!d)return;const _=d.scrollHeight-d.scrollTop-d.clientHeight<12;Qn(_)}function Gs(){K([]),Qn(!0)}function ga(){window.requestAnimationFrame(()=>{const d=An.current;d&&(d.scrollTop=d.scrollHeight)})}async function qr(){const d=Jn?dt:dt.trimEnd();if(Jn){if(!dn){const M=rt.current;if(!M){Y("warning","Browser-MicroPython kører ikke lige nu."),bt();return}Jt(""),Qn(!0),gc(d),M.sendInput(d),bt();return}const x=Rt.current;if(!x){Y("warning","Pico-terminalen er ikke forbundet."),bt();return}Jt(""),Qn(!0);try{await x.sendProgramInput(d)}catch(M){Y("error",M instanceof Error?M.message:"Kunne ikke sende input til Pico-koden.")}finally{bt()}return}if(!d.trim())return;if(Or(x=>(x.at(-1)===d?x:[...x,d]).slice(-80)),mt(null),Bn(null),Hr){Y("warning",dn?"Tryk Stop, før du skriver i Pico-terminalen.":"Stop offline MicroPython, før du skriver i browser-terminalen."),bt();return}if(!dn){const x=Pf(d);if(x.some(R=>R.level==="error")){for(const R of x){const Z=R.line?"Linje "+R.line+": ":"";Y(R.level==="error"?"error":"warning",Z+R.text)}bt();return}const M=jt.current??new wy;jt.current=M,Jt(""),$l(!0),Qn(!0),Y("info",">>> "+d);try{let R=!1;const Z=await M.send(d,{timeoutMs:15e3,onOutput:Ce=>{R=!0,Y("info",Ce)}}),oe=Z.output.trim();oe&&!R&&Y("info",oe),Z.error.trim()&&xl(Z.error,d,Z.unavailable?"warning":"error")}catch(R){Y("error",R instanceof Error?R.message:"Browser-MicroPython-terminalen fejlede.")}finally{$l(!1),bt()}return}if(be){Y("warning","Terminalen bruger USB Serial. Bluetooth-forbindelsen kan vise filer, men kan ikke modtage frie terminalkommandoer."),bt();return}const _=Rt.current;if(!w||!_){Y("warning","Forbind en microcontroller med USB for at skrive i MicroPython-terminalen."),bt();return}Jt(""),$l(!0),Qn(!0),Xl.current=!0,Y("info",">>> "+d);try{await _.sendFriendlyLine(d)}catch(x){Xl.current=!1,Y("error",x instanceof Error?x.message:"Kunne ikke sende kommando til MicroPython REPL.")}finally{$l(!1),bt()}}function bt(){window.requestAnimationFrame(()=>{const d=ht.current;if(!d||d.disabled)return;d.focus();const _=d.value.length;d.selectionStart=_,d.selectionEnd=_})}function ba(d,_,x){if(x.length===0)return null;const M=w||be;return u.jsxs("div",{className:"ide-install-group",children:[u.jsxs("div",{className:"ide-install-group-head",children:[u.jsx("h3",{children:d}),u.jsx("p",{children:_})]}),u.jsx("div",{className:"ide-install-scroll",children:x.map(R=>{const Z=be&&Mr(R);return u.jsxs("label",{className:`ide-install-row ${Z?"disabled":""}`,children:[u.jsx("input",{type:"checkbox",checked:!!Oe[R.id],disabled:Z,onChange:oe=>Fr(R,oe.target.checked)}),u.jsxs("span",{children:[u.jsxs("strong",{children:[Ps(R),M&&R.kind==="library"&&u.jsx("em",{className:`ide-install-status status-${R.status}`,children:Z?"USB":rv(R.status)})]}),u.jsx("small",{children:R.description})]})]},R.id)})})]})}function Ps(d){return d.kind==="program"?d.label.replace(/\s*\(main\.py\)$/i,""):d.label}function Ac(){el&&K([]),Qn(!0)}function ya(d,_){const x=d.indexOf(`
`,_);return x===-1?d.length:x}function xi(d,_){if(Qh(d,_)){sn(null);return}const x=qf(d,_);if(!x||x.query.length<1){sn(null);return}const M=Xh(d,_,!0).slice(0,8),R=Zh(Hn.current,x.start,M.length);M.length>0&&R?(sn({items:M,selected:0,start:x.start,end:_,position:R}),kn(_n.current,0)):sn(null)}function va(d,_){if(Qh(d,_)){Bn(null);return}const x=qf(d,_);if(!x||x.query.length<1){Bn(null);return}const M=Xh(d,_,!1).slice(0,8),R=Zh(ht.current,x.start,M.length);M.length>0&&R?(Bn({items:M,selected:0,start:x.start,end:_,position:R}),kn(Kl.current,0)):Bn(null)}function Ys(d){const _=d.value.slice(d.selectionStart,d.selectionEnd);Cr(Jy(_)?_:"")}function kn(d,_){window.requestAnimationFrame(()=>{const x=d==null?void 0:d.querySelector(`[data-autocomplete-index="${_}"]`);x==null||x.scrollIntoView({block:"nearest"})})}function kl(d=qe==null?void 0:qe.items[qe.selected]){if(!d||!qe)return;const _=Dt(),x=W.slice(0,qe.start)+d.insert+W.slice(qe.end),M=qe.start+d.insert.length-(d.insert.endsWith("()")?1:0);sn(null),Ot(x,M,_),window.requestAnimationFrame(()=>{const R=Hn.current;R&&R.focus()})}function xa(d=on==null?void 0:on.items[on.selected]){if(!d||!on)return;const _=dt.slice(0,on.start)+d.insert+dt.slice(on.end),x=on.start+d.insert.length-(d.insert.endsWith("()")?1:0);Jt(_),Bn(null),window.requestAnimationFrame(()=>{const M=ht.current;M&&(M.focus(),M.selectionStart=x,M.selectionEnd=x)})}function Fs(d){const _=Hn.current;if(!_)return!1;const x=_.selectionStart,M=_.selectionEnd,R={content:W,selectionStart:x,selectionEnd:M},Z=W.lastIndexOf(`
`,x-1)+1,oe=M>x&&W[M-1]===`
`?M-1:M,Ce=ya(W,oe),xe=Ce<W.length?Ce+1:Ce,Pe=W.slice(Z,xe);if(d<0){if(Z===0)return!1;const Xt=W.lastIndexOf(`
`,Z-2)+1,Qt=W.slice(Xt,Z),lr=W.slice(0,Xt)+Pe+Qt+W.slice(xe),Nl=-Qt.length;return Ot(lr,x+Nl,R,M+Nl),!0}if(xe>=W.length)return!1;const pn=ya(W,xe),vn=pn<W.length?pn+1:pn,Me=W.slice(xe,vn),ln=W.slice(0,Z)+Me+Pe+W.slice(vn),il=Me.length;return Ot(ln,x+il,R,M+il),!0}function $s(d){var vn;if(aa){(d.key==="Enter"||d.key==="Tab"||(d.ctrlKey||d.metaKey)&&["z","y","s"].includes(d.key.toLowerCase()))&&d.preventDefault();return}if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="z"){d.preventDefault(),(d.shiftKey?At():Ir())&&sn(null);return}if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="y"){d.preventDefault(),At()&&sn(null);return}if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="s"){d.preventDefault(),!q&&J.trim()&&Ms();return}if(d.altKey&&!d.ctrlKey&&!d.metaKey&&(d.key==="ArrowUp"||d.key==="ArrowDown")){d.preventDefault(),Fs(d.key==="ArrowUp"?-1:1)&&sn(null);return}if(qe){if(d.key==="ArrowDown"){d.preventDefault(),sn(Me=>{if(!Me)return Me;const ln=(Me.selected+1)%Me.items.length;return kn(_n.current,ln),{...Me,selected:ln}});return}if(d.key==="ArrowUp"){d.preventDefault(),sn(Me=>{if(!Me)return Me;const ln=(Me.selected-1+Me.items.length)%Me.items.length;return kn(_n.current,ln),{...Me,selected:ln}});return}if(d.key==="Tab"){d.preventDefault(),kl();return}if(d.key==="Enter"){if(!(qe.items[qe.selected]&&M_(qe.items[qe.selected],W.slice(qe.start,qe.end)))){d.preventDefault(),kl();return}sn(null)}if(d.key==="Escape"){d.preventDefault(),sn(null);return}}if(d.key==="Enter"){d.preventDefault();const Me=d.currentTarget,ln=Me.selectionStart,il=Me.selectionEnd,Xt={content:W,selectionStart:ln,selectionEnd:il},Qt=W.lastIndexOf(`
`,ln-1)+1,lr=W.slice(Qt,ln),Nl=((vn=lr.match(/^[ \t]*/))==null?void 0:vn[0])??"",wa=lr.trimEnd().endsWith(":")?"    ":"",rr=`
${Nl}${wa}`,et=W.slice(0,ln)+rr+W.slice(il),al=ln+rr.length;Ot(et,al,Xt),window.requestAnimationFrame(()=>{Me.selectionStart=al,Me.selectionEnd=al});return}if(d.key!=="Tab")return;d.preventDefault();const _=d.currentTarget,x=_.selectionStart,M=_.selectionEnd,R={content:W,selectionStart:x,selectionEnd:M},Z="    ";if(d.shiftKey){const Me=W.lastIndexOf(`
`,x-1)+1,ln=x===M?ya(W,x):M,il=W.slice(Me,ln);let Xt=0,Qt=0;const lr=il.replace(/(^|\n)( {1,4}|\t)/g,(wa,rr,et,al)=>{const nt=et.length;return Me+al<x&&(Xt+=nt),Qt+=nt,rr});if(Qt===0)return;const Nl=W.slice(0,Me)+lr+W.slice(ln);Ot(Nl,Math.max(Me,x-Xt),R,x===M?Math.max(Me,x-Xt):Math.max(Me,M-Qt)),window.requestAnimationFrame(()=>{_.selectionStart=Math.max(Me,x-Xt),_.selectionEnd=x===M?_.selectionStart:Math.max(_.selectionStart,M-Qt)});return}if(x===M){const Me=W.slice(0,x)+Z+W.slice(M);Ot(Me,x+Z.length,R),window.requestAnimationFrame(()=>{_.selectionStart=x+Z.length,_.selectionEnd=x+Z.length});return}const oe=W.lastIndexOf(`
`,x-1)+1,xe=W.slice(oe,M).replace(/^/gm,Z),Pe=xe.split(`
`).length,pn=W.slice(0,oe)+xe+W.slice(M);Ot(pn,x+Z.length,R,M+Pe*Z.length),window.requestAnimationFrame(()=>{_.selectionStart=x+Z.length,_.selectionEnd=M+Pe*Z.length})}function qs(d){if(Jn){d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),qr());return}if(on){if(d.key==="ArrowDown"){d.preventDefault(),Bn(_=>{if(!_)return _;const x=(_.selected+1)%_.items.length;return kn(Kl.current,x),{..._,selected:x}});return}if(d.key==="ArrowUp"){d.preventDefault(),Bn(_=>{if(!_)return _;const x=(_.selected-1+_.items.length)%_.items.length;return kn(Kl.current,x),{..._,selected:x}});return}if(d.key==="Enter"||d.key==="Tab"){d.preventDefault(),xa();return}if(d.key==="Escape"){d.preventDefault(),Bn(null);return}}if(d.key==="Tab"){d.preventDefault();const _=d.currentTarget,x=_.selectionStart,M=_.selectionEnd,R="    ",Z=dt.slice(0,x)+R+dt.slice(M),oe=x+R.length;Jt(Z),mt(null),Bn(null),window.requestAnimationFrame(()=>{_.selectionStart=oe,_.selectionEnd=oe});return}if(d.key==="ArrowUp"||d.key==="ArrowDown"){if(!(d.key==="ArrowUp"?d.currentTarget.selectionStart===0&&d.currentTarget.selectionEnd===0:d.currentTarget.selectionStart===dt.length&&d.currentTarget.selectionEnd===dt.length)||fi.length===0)return;d.preventDefault();const x=d.key==="ArrowUp"?Dn===null?fi.length-1:Math.max(0,Dn-1):Dn===null||Dn+1>=fi.length?null:Dn+1;mt(x);const M=x===null?"":fi[x]??"";Jt(M),Bn(null),Qn(!0),window.requestAnimationFrame(()=>{const R=ht.current;R&&(R.selectionStart=M.length,R.selectionEnd=M.length,ga())});return}d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),qr())}return u.jsxs("div",{className:"screen ide-screen",children:[u.jsx(ed,{title:"Pico Kodeværksted",onMenu:()=>s()}),di?u.jsx("div",{className:"ide-size-gate",role:"dialog","aria-modal":"true","aria-labelledby":"ide-size-title",children:u.jsxs("div",{className:"ide-size-gate-panel",children:[u.jsx("h2",{id:"ide-size-title",children:"Brug en bærbar for at bruge Kodeværkstedet"}),u.jsx("p",{children:"Denne skærm er for lille, så du skal åbne Kodeværkstedet på en bærbar eller en større skærm."})]})}):u.jsxs("div",{className:"ide-layout",children:[u.jsxs("section",{className:"ide-panel ide-files-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Filer"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:Ec,"aria-label":"Ny fil",title:"Ny fil",children:u.jsx(lt,{name:"plus",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>{var d;return(d=ra.current)==null?void 0:d.click()},"aria-label":"Importer fil",title:"Importer fil",children:u.jsx(lt,{name:"upload",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>mn(),disabled:!w&&!be||q,"aria-label":"Opdater filer",title:"Opdater filer",children:u.jsx(lt,{name:"refresh",size:20})})]})]}),u.jsx("div",{className:"ide-file-list",children:wl.length===0?u.jsx("button",{type:"button",disabled:!0,children:"Ingen filer læst"}):wl.map(d=>{if(d.kind==="separator"){const R=d.id==="pico-files"&&!w&&!be;return u.jsxs(L.Fragment,{children:[u.jsx("div",{className:"ide-file-separator",children:u.jsx("span",{children:d.label})}),R&&u.jsx("div",{className:"ide-file-disconnected",role:"status",children:"Ikke forbundet"})]},d.id)}const _=be&&Mr(d),x=pt[Yn(d.source,d.path)],M=x!==void 0&&x!==tv(d,pe,ml);return u.jsxs("div",{className:`ide-file-row ${J===d.path&&Se===d.source?"active":""} ${_?"protected":""}`,children:[u.jsxs("button",{type:"button",onClick:()=>ha(d),disabled:_,title:_?"Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her":void 0,children:[u.jsx("span",{children:d.name}),u.jsxs("small",{title:M?"Ikke gemte ændringer":"Ingen ikke gemte ændringer",children:[d.versions.length>0&&u.jsx("em",{className:"ide-file-version-count",title:`${d.versions.length} gemte versioner i historikken`,children:d.versions.length}),u.jsx("i",{className:`ide-file-dirty-dot ${M?"dirty":"clean"}`,"aria-hidden":"true"})]})]}),u.jsx("button",{className:"ide-file-actions",type:"button",onClick:()=>Tc(d),disabled:d.type!=="file"||q||_,"aria-label":`Filvalg for ${d.name}`,title:_?"Holder Bluetooth-forbindelsen i gang og kan ikke ændres her":"Filvalg",children:u.jsx(lt,{name:"settings",size:16})})]},`${d.source}:${d.path}`)})})]}),u.jsxs("section",{className:"ide-panel ide-status-panel",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"ide-status-head",children:[u.jsx("h2",{children:be?"Forbundet Pico":"USB udvikling"}),!be&&u.jsx("span",{className:`ide-usb-status ${$t.supported?"available":"unavailable"}`,title:$t.message,"data-tooltip":$t.message,role:"img","aria-label":$t.message,tabIndex:0,children:"!"})]}),be&&u.jsxs("p",{children:[(a==null?void 0:a.deviceName)??"Pico"," er forbundet via Bluetooth."]})]}),!be&&u.jsxs("div",{className:"ide-actions",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:w?bc:yi,disabled:!$t.supported||N,children:N?"Forbinder...":w?"Afbryd USB":"Forbind USB"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:El,disabled:be||q,children:"Download"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:Cs,disabled:!w||q,children:"Nulstil enhed"})]}),be&&u.jsxs("div",{className:"ide-actions",children:[u.jsxs("button",{className:"btn btn-primary ide-connection-state",type:"button",disabled:!0,children:[u.jsx(lt,{name:"power",size:22}),"Bluetooth forbundet"]}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:El,disabled:q,children:"Startprogrammer og biblioteker"})]}),!be&&u.jsx("div",{className:"ide-runtime",children:u.jsx("div",{className:"ide-mini-actions single",children:u.jsx("button",{className:"btn btn-outline ide-disconnect-btn",type:"button",onClick:()=>De(!0),children:"MicroPython"})})})]}),u.jsxs("section",{className:"ide-panel ide-editor-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("div",{className:"ide-editor-title",children:u.jsxs("h2",{children:[Te(J),u.jsxs("small",{children:[gs," bytes"]})]})}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline",type:"button",onClick:$r,disabled:q,children:"Kør"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:vi,disabled:!Fl&&!(!dn&&Un)&&(!w||!En),children:"Stop"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:vc,disabled:q||!J.trim(),children:"Gem"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Os(),disabled:q||!J.trim(),children:"Slet"})]})]}),Ss(),u.jsxs("div",{className:"ide-editor-wrap",children:[u.jsx("div",{className:"ide-line-numbers","aria-hidden":"true",style:{transform:`translateY(${-ui.top}px)`},children:Array.from({length:at},(d,_)=>u.jsx("span",{children:_+1},_))}),u.jsx("pre",{className:"ide-highlight","aria-hidden":"true",style:{transform:`translate(${-ui.left}px, ${-ui.top}px)`},children:nv(W,hc)}),u.jsx("textarea",{ref:Hn,className:"ide-editor",value:W,onChange:d=>Ot(d.target.value,d.target.selectionStart,Dt(),d.target.selectionEnd,"typing"),onKeyDown:$s,onKeyUp:d=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||xi(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>{xi(d.currentTarget.value,d.currentTarget.selectionStart),Ys(d.currentTarget)},onSelect:d=>Ys(d.currentTarget),onScroll:d=>{Yl({top:d.currentTarget.scrollTop,left:d.currentTarget.scrollLeft}),qe&&xi(d.currentTarget.value,d.currentTarget.selectionStart)},readOnly:aa,"aria-busy":aa,spellCheck:!1}),qe&&u.jsx("div",{ref:_n,className:`ide-autocomplete placement-${qe.position.placement}`,role:"listbox","aria-label":"Kodeforslag",style:{left:qe.position.left,top:qe.position.top,maxHeight:qe.position.maxHeight},children:(qe.position.placement==="above"?qe.items.map((d,_)=>({item:d,index:_})).reverse():qe.items.map((d,_)=>({item:d,index:_}))).map(({item:d,index:_})=>u.jsx("button",{className:_===qe.selected?"active":"",type:"button","data-autocomplete-index":_,onMouseDown:x=>{x.preventDefault(),kl(d)},role:"option","aria-selected":_===qe.selected,children:d.label},d.label))}),ie&&u.jsxs("div",{className:"ide-editor-loading",role:"status","aria-live":"polite",children:[u.jsx("span",{className:"spinner","aria-hidden":"true"}),u.jsxs("strong",{children:["Indlæser ",Te(ie),"..."]})]})]})]}),u.jsxs("section",{className:"ide-panel ide-terminal-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Terminal"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${hl?"":"active"}`,type:"button",onClick:()=>hs(d=>!d),"aria-label":hl?"Tekniske fejl er slået fra":"Tekniske fejl er slået til","aria-pressed":!hl,title:hl?"Vis originale tekniske fejl":"Viser originale tekniske fejl",children:"Teknisk"}),u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${el?"active":""}`,type:"button",onClick:()=>Br(d=>!d),"aria-pressed":el,title:el?"Terminalen ryddes, hver gang du trykker Kør":"Terminalen beholder tekst, når du trykker Kør",children:"Ryd ved Kør"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Gs,disabled:U.length===0,children:"Ryd"})]})]}),u.jsxs("div",{className:"ide-terminal","aria-live":"polite",ref:An,onScroll:Vs,onClick:()=>{var d;return(d=ht.current)==null?void 0:d.focus()},children:[U.length===0?u.jsx("div",{className:"term-line",children:"Ingen terminaldata endnu."}):U.map((d,_)=>u.jsx("div",{className:`term-line ${d.variant==="input"?"term-input-echo":`term-${d.level}`}`,children:d.technical&&!hl?d.technical:d.text},`${_}-${d.text}`)),u.jsxs("form",{className:`ide-terminal-command ${Hr&&!Jn?"locked":""} ${Jn?"stdin":""}`,onSubmit:d=>{d.preventDefault(),qr()},children:[u.jsx("span",{"aria-hidden":"true",children:Wl}),u.jsx("textarea",{ref:ht,value:dt,onChange:d=>{Jt(d.target.value),mt(null),Jn?Bn(null):va(d.target.value,d.target.selectionStart)},onKeyDown:qs,onKeyUp:d=>{Jn||["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||va(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>{Jn||va(d.currentTarget.value,d.currentTarget.selectionStart)},disabled:sa,placeholder:oa,"aria-label":Jn?"Input til kørende Pico-kode":"MicroPython-terminalkommando",title:oa,rows:Math.max(1,dt.split(`
`).length)})]}),on&&u.jsx("div",{ref:Kl,className:`ide-autocomplete ide-repl-autocomplete placement-${on.position.placement}`,role:"listbox","aria-label":"Terminalforslag",style:{left:on.position.left,top:on.position.top,maxHeight:on.position.maxHeight},children:(on.position.placement==="above"?on.items.map((d,_)=>({item:d,index:_})).reverse():on.items.map((d,_)=>({item:d,index:_}))).map(({item:d,index:_})=>u.jsx("button",{className:_===on.selected?"active":"",type:"button","data-autocomplete-index":_,onMouseDown:x=>{x.preventDefault(),xa(d)},role:"option","aria-selected":_===on.selected,children:d.label},d.label))})]})]})]}),u.jsx("input",{ref:ra,type:"file",accept:".py,.txt,.json,.csv",className:"sr-only",onChange:d=>{var _;Sc((_=d.target.files)==null?void 0:_[0]),d.currentTarget.value=""}}),se&&u.jsx(Cn,{title:"Gem fil",onClose:()=>ye(!1),children:u.jsxs("div",{className:"ide-save-options",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>void fa(),disabled:!w&&!be||q,children:"Gem filen på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:da,children:"Download filen til computer"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:js,children:"Gem filen i browseren"})]})}),ae&&u.jsx(Cn,{title:"Startprogrammer og biblioteker",onClose:()=>ge(!1),children:u.jsxs("div",{className:"ide-install-list",children:[u.jsx("p",{className:"ide-install-note",children:w||be?"Vælg et startprogram og de biblioteker dit projekt bruger. Installer lægger filerne på Picoen.":"Du er ikke forbundet til en Pico. Du kan gemme filerne i browseren eller downloade dem til computeren, men de virker først på Picoen, når de er installeret der."}),u.jsxs("div",{className:"ide-install-grid",children:[ba("Startprogrammer (main.py)","Starter automatisk på Picoen.",ze.filter(d=>d.kind==="program")),ba("Biblioteker","Ekstra Python-filer som dine programmer kan importere.",ze.filter(d=>d.kind==="library"))]}),u.jsxs("div",{className:"ide-install-actions",children:[(w||be)&&u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Mc,disabled:q,children:"Installer på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Is,disabled:q,children:"Download til computer"}),u.jsx("button",{className:w||be?"btn btn-outline":"btn btn-primary",type:"button",onClick:jc,disabled:q,children:"Gem i browseren"})]})]})}),Ft&&u.jsx(Cn,{title:"main.py er gemt",onClose:()=>Tt(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:"Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>void As("control"),disabled:q,children:"Genstart og åbn kontrolpanel"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void As("ide"),disabled:q,children:"Genstart og bliv i Kodeværksted"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>Tt(!1),disabled:q,children:"Senere"})]})}),de&&u.jsx(Cn,{title:"Installer MicroPython",onClose:()=>De(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:"Hvis Picoen er helt frisk, skal MicroPython først lægges på den."}),u.jsxs("ol",{className:"micropython-steps",children:[u.jsx("li",{children:"Hold BOOTSEL-knappen nede."}),u.jsx("li",{children:"Sæt Picoen i USB, og slip derefter BOOTSEL."}),u.jsx("li",{children:"Vælg Pico-model og MicroPython-version herunder, og download UF2-filen."}),u.jsxs("li",{children:["Kopier UF2-filen til drevet ",u.jsx("strong",{children:"RPI-RP2"})]})]}),u.jsxs("div",{className:"micropython-selects",children:[u.jsx("label",{htmlFor:"micropython-board",children:"Pico-model"}),u.jsx("select",{id:"micropython-board",value:hn,onChange:d=>Fn(d.target.value),children:ia.map(d=>u.jsx("option",{value:d,children:d},d))}),u.jsx("label",{htmlFor:"micropython-version",children:"MicroPython-version"}),u.jsx("select",{id:"micropython-version",value:(qt==null?void 0:qt.version)??jn,onChange:d=>dl(d.target.value),children:Zl.map(d=>u.jsxs("option",{value:d.version,children:[d.version," (",d.date,")"]},`${d.board}:${d.version}:${d.date}`))})]}),qt&&u.jsx("a",{className:"btn btn-primary btn-block",href:qt.url,download:qt.fileName,children:"Download UF2"}),u.jsx("a",{className:"btn btn-outline btn-block",href:"https://www.raspberrypi.com/documentation/microcontrollers/micropython.html",target:"_blank",rel:"noreferrer",children:"Se vejledning"})]})}),H&&u.jsx(Cn,{title:"Ny Python-fil",onClose:()=>ne(!1),children:u.jsxs("form",{className:"ide-new-file-form",onSubmit:d=>{d.preventDefault(),kc()},children:[u.jsx("label",{htmlFor:"new-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"new-pico-file",value:ce,onChange:d=>me(d.target.value),autoFocus:!0,placeholder:"test"}),u.jsx("span",{children:".py"})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen tilføjer .py automatisk og opretter filen i ",_c,"."]}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:!Fh(ce),children:"Opret"})]})}),z&&u.jsx(Cn,{title:Te(z.path),onClose:()=>ee(null),children:u.jsxs("div",{className:"ide-file-action-modal",children:[u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:"Placering"}),u.jsx("strong",{children:z.source==="pico"?"Pico":"Browser"})]}),u.jsxs("form",{className:"ide-file-rename-form",onSubmit:d=>{d.preventDefault(),zs()},children:[u.jsx("label",{htmlFor:"rename-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"rename-pico-file",value:Ee,onChange:d=>k(d.target.value),placeholder:"min_kode"}),u.jsxs("span",{children:[".",os(z.path)]})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen beholder filendelsen .",os(z.path)," automatisk."]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!Lf(Ee,os(z.path))||Lf(Ee,os(z.path))===z.path||q,children:"Gem navn"})]}),u.jsxs("div",{className:"ide-file-action-buttons",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void Ls(),disabled:q,children:"Dupliker"}),u.jsx("button",{className:"btn btn-outline btn-danger btn-block",type:"button",onClick:()=>Os(z),disabled:q,children:"Slet"})]}),u.jsxs("section",{className:"ide-version-history",children:[u.jsx("h4",{children:"Versionshistorik"}),z.versions.length===0?u.jsx("p",{children:"Versionshistorik: 0 gemte versioner."}):u.jsx("div",{className:"ide-version-list",children:z.versions.map(d=>u.jsxs("div",{className:"ide-version-row",children:[u.jsx("span",{children:Te(d.path)}),u.jsx("small",{children:d.size!==void 0?`${d.size} bytes`:"Gemt på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>void pa(d),disabled:q,children:"Gendan"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Yr(d),disabled:q,children:"Slet"})]},d.path))})]})]})})]})}function Fh(s){var c;const i=(c=s.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.replace(/\.py$/i,"").replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"");return i?`/${i}.py`:""}function Py(s){const i=s.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop(),c=i==null?void 0:i.match(/^(.+)\.(py|txt|json|csv)$/i);if(!c)return"";const a=R_(c[1]);return a?`/${a}.${c[2].toLowerCase()}`:""}function Lf(s,i="py"){const c=s.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop();if(!c)return"";const a=c.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);if(!a)return"";const f=R_(a[1]),h=i.replace(/^\./,"").toLowerCase(),b=(a[2]??(h||"py")).toLowerCase();return f?`/${f}.${b}`:""}function Yy(s){return Te(s).replace(/\.(py|txt|json|csv)$/i,"")}function R_(s){return s.replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"")}function os(s){var a;const i=Te(s).match(/\.([a-z0-9]+)$/i),c=(a=i==null?void 0:i[1])==null?void 0:a.toLowerCase();return c&&["py","txt","json","csv"].includes(c)?c:"py"}function fl(s){return s.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}function $h(){return Xi.map(s=>({...s,status:"unknown",detail:"Kan gemmes uden Pico. Forbind en Pico for at installere."}))}function qh(s){const i={};return s.forEach(c=>{i[c.id]=!1}),i}function Te(s){return s.split("/").filter(Boolean).pop()??s}function Wo(s){return s.replace(/\\/g,"/").toLowerCase()==="/main.py"}function Kh(s){const i=s.userAgent||"",c=s.platform||"",a=s.maxTouchPoints||0,f=/Android.*Mobile|iPhone|iPod|Windows Phone|Mobile Safari/i.test(i),h=/Macintosh/i.test(c)&&a>1;return f&&!h}function Fy(s){return s instanceof DOMException&&s.name==="AbortError"}function $y(s){return/Traceback \(most recent call last\):/.test(s)||/\b(?:SyntaxError|NameError|TypeError|ValueError|IndentationError|ImportError|ModuleNotFoundError|ZeroDivisionError|IndexError|KeyError|AttributeError):/.test(s)}function Mr(s){return qy(s)}function qy(s){return s.path.replace(/\\/g,"/").toLowerCase()==="/picobluetooth.py"}const $f=[...["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"].map(s=>({label:s,insert:`${s}${["for","if","while","def","class","elif","else","try","except","finally","with"].includes(s)?" ":""}`})),...["abs","all","any","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","exec","filter","float","getattr","hasattr","hash","hex","id","input","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","open","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","zip"].map(s=>({label:`${s}()`,insert:`${s}()`})),{label:"for i in range():",insert:"for i in range():"},{label:"while True:",insert:"while True:"},{label:"if True:",insert:"if True:"},{label:"time",insert:"time"},{label:"time.",insert:"time."},{label:"time.sleep",insert:"time.sleep"},{label:"time.sleep()",insert:"time.sleep()"},{label:"time.sleep_ms()",insert:"time.sleep_ms()"},{label:"time.ticks_ms()",insert:"time.ticks_ms()"},{label:"time.ticks_diff()",insert:"time.ticks_diff()"},{label:"time.sleep_us()",insert:"time.sleep_us()"},{label:"time.ticks_us()",insert:"time.ticks_us()"},{label:"machine",insert:"machine"},{label:"machine.",insert:"machine."},{label:"machine.Pin",insert:"machine.Pin"},{label:"machine.PWM",insert:"machine.PWM"},{label:"machine.ADC",insert:"machine.ADC"},{label:"machine.I2C",insert:"machine.I2C"},{label:"machine.SPI",insert:"machine.SPI"},{label:"machine.Timer",insert:"machine.Timer"},{label:"machine.UART",insert:"machine.UART"},{label:"machine.reset()",insert:"machine.reset()"},{label:"machine.freq()",insert:"machine.freq()"},{label:"Pin()",insert:"Pin()"},{label:"PWM()",insert:"PWM()"},{label:"ADC()",insert:"ADC()"},{label:"I2C()",insert:"I2C()"},{label:"SPI()",insert:"SPI()"},{label:"Timer()",insert:"Timer()"},{label:"UART()",insert:"UART()"},{label:"Pin.OUT",insert:"Pin.OUT"},{label:"Pin.IN",insert:"Pin.IN"},{label:"Pin.PULL_UP",insert:"Pin.PULL_UP"},{label:"Pin.PULL_DOWN",insert:"Pin.PULL_DOWN"},{label:"Pin.IRQ_FALLING",insert:"Pin.IRQ_FALLING"},{label:"Pin.IRQ_RISING",insert:"Pin.IRQ_RISING"},{label:"import time",insert:"import time"},{label:"import utime as time",insert:"import utime as time"},{label:"import machine",insert:"import machine"},{label:"import random",insert:"import random"},{label:"import os",insert:"import os"},{label:"import sys",insert:"import sys"},{label:"from machine import Pin",insert:"from machine import Pin"},{label:"from machine import Pin, PWM",insert:"from machine import Pin, PWM"},{label:"from machine import Pin, PWM, ADC",insert:"from machine import Pin, PWM, ADC"},{label:"PicoBluetooth",insert:"PicoBluetooth"},{label:"PicoRobotics",insert:"PicoRobotics"},{label:"NeoPixel",insert:"NeoPixel"},{label:"HCSR04",insert:"HCSR04"},{label:"ble.send_toggle_state()",insert:"ble.send_toggle_state()"},{label:"ble.send_radar()",insert:"ble.send_radar()"},{label:"ble.send_text()",insert:"ble.send_text()"},{label:"on_button(name, is_down):",insert:"on_button(name, is_down):"},{label:"on_slider(name, value):",insert:"on_slider(name, value):"},{label:"on_toggle(name, value):",insert:"on_toggle(name, value):"},{label:"on_connect():",insert:"on_connect():"},{label:"on_disconnect():",insert:"on_disconnect():"},{label:"ValueError",insert:"ValueError"},{label:"TypeError",insert:"TypeError"},{label:"OSError",insert:"OSError"},{label:"Exception",insert:"Exception"}];function Xh(s,i,c){const a=qf(s,i);if(!a)return[];const f=Ky(s,a.start,i),h=a.query.toLowerCase(),b=f.beforeToken.toLowerCase(),p=f.linePrefix.toLowerCase(),g=c?[...$f,...Qy(s)]:$f;return Zy(g).filter(w=>{const S=w.label.toLowerCase(),N=w.insert.toLowerCase();return N===h||S===h||M_(w,a.query)?!1:f.importLine?Xy(w,f)?S.startsWith(p)||N.startsWith(p)||S.startsWith(h)||N.startsWith(h):!1:b.endsWith(".")&&!N.includes(".")?!1:!!(N.startsWith(h)||S.startsWith(h))})}function Ky(s,i,c){const a=s.lastIndexOf(`
`,i-1)+1,f=s.slice(a,c),h=s.slice(a,i),b=/^\s*(?:import|from)\s+[\w.,\s]*$/i.test(f),p=/^\s*from\s+\w+(?:\.\w+)*\s+import\s+/i.test(f);return{linePrefix:f,beforeToken:h,importLine:b,fromImportLine:p}}function Xy(s,i){return i.fromImportLine?!s.insert.includes("(")&&!s.insert.startsWith("import "):s.insert.startsWith("import ")||s.insert.startsWith("from ")?!0:/^[A-Za-z_][A-Za-z0-9_]*$/.test(s.insert)}function Qy(s){const i=new Set,c=[/\bdef\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/g,/\bclass\s+([A-Za-z_][A-Za-z0-9_]*)\b/g,/(?:^|[^\w.])([A-Za-z_][A-Za-z0-9_]*)\s*=/g,/\bfor\s+([A-Za-z_][A-Za-z0-9_]*)\s+in\b/g,/\b([A-Za-z_][A-Za-z0-9_]*)\.([A-Za-z_][A-Za-z0-9_]*)\s*\(/g];for(const a of c)for(const f of s.matchAll(a))f[1]&&i.add(f[1]),f[2]&&i.add(f[2]);return[...i].filter(a=>a.length>1&&!Wy.has(a)).sort((a,f)=>a.localeCompare(f,"da")).map(a=>({label:a,insert:a}))}function Zy(s){const i=new Set,c=[];for(const a of s){const f=a.insert.toLowerCase();i.has(f)||(i.add(f),c.push(a))}return c}const Wy=new Set($f.map(s=>s.insert.replace(/[().: ]+$/g,"")));function qf(s,i){const a=s.slice(0,i).match(/[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_.]*$/);return!a||a.index===void 0?null:{query:a[0],start:a.index}}function Qh(s,i){const c=s.lastIndexOf(`
`,Math.max(0,i-1))+1;let a=null,f=null,h=!1;for(let b=0;b<i;b+=1){const p=s[b],g=s.slice(b,b+3);if(f){g===f.repeat(3)&&(f=null,b+=2);continue}if(a){if(h){h=!1;continue}if(p==="\\"){h=!0;continue}p===a&&(a=null),p===`
`&&(a=null);continue}if(p==="#"){const y=s.indexOf(`
`,b),w=y===-1?s.length:y;if(i<=w&&b>=c)return!0;b=w;continue}if(g==='"""'||g==="'''"){f=p,b+=2;continue}(p==='"'||p==="'")&&(a=p)}return a!==null||f!==null}function M_(s,i){const c=s.insert.trim();return!/[().]/.test(c)&&c.toLowerCase()===i.toLowerCase()}function Jy(s){return/^[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_]*$/.test(s)}function Zh(s,i,c){if(!s)return null;const a=s.closest(".ide-terminal")??s.parentElement;if(!a)return null;const f=window.getComputedStyle(s),h=document.createElement("div"),b=document.createElement("span"),p=a.getBoundingClientRect(),g=s.getBoundingClientRect();h.style.position="absolute",h.style.visibility="hidden",h.style.pointerEvents="none",h.style.whiteSpace="pre-wrap",h.style.overflowWrap="break-word",h.style.wordBreak=f.wordBreak,h.style.boxSizing=f.boxSizing,h.style.width=`${s.getBoundingClientRect().width}px`,h.style.padding=f.padding,h.style.border=f.border,h.style.font=f.font,h.style.lineHeight=f.lineHeight,h.style.letterSpacing=f.letterSpacing,h.style.tabSize=f.tabSize,h.style.fontVariantLigatures=f.fontVariantLigatures,h.style.scrollbarGutter=f.scrollbarGutter,h.style.left=`${g.left-p.left-s.scrollLeft}px`,h.style.top=`${g.top-p.top-s.scrollTop}px`,h.textContent=s.value.slice(0,i),b.textContent=s.value.slice(i,i+1)||" ",h.appendChild(b),a.appendChild(h);const y=b.getBoundingClientRect();h.remove();const w=34,S=14,N=Math.min(210,Math.max(w+S,c*w+S)),D=ev(y.left-p.left,8,Math.max(8,a.clientWidth-296)),U=y.top-p.top+a.scrollTop,K=y.bottom-p.top+a.scrollTop+10,q=a.scrollTop+a.clientHeight-K-8,P=U-a.scrollTop-8,G=a.scrollTop+a.clientHeight,re=q>=Math.min(N,w*2)||q>=P?"below":"above",ie=Math.max(w+S,Math.min(N,re==="below"?q:P)),_e=re==="below"?Math.min(K,G-ie-8):Math.max(a.scrollTop+8,U-ie-8);return{left:D,top:_e,maxHeight:ie,placement:re}}function ev(s,i,c){return Math.max(i,Math.min(c,s))}function nv(s,i=""){const c=/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,a=/(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm,f=[];return s.split(/(\r?\n)/).forEach((h,b)=>{if(h===`
`||h===`\r
`){f.push(u.jsx("br",{},`br-${b}`));return}let p=0;[...h.matchAll(a)].forEach((y,w)=>{const S=y.index??0;S>p&&f.push(...Wh(h.slice(p,S),c,`${b}-${w}-plain`,i));const N=y[0],D=N.startsWith("#")?"tok-comment":N.startsWith('"')||N.startsWith("'")?"tok-string":/^\d/.test(N)?"tok-number":"tok-builtin";f.push(...tc(N,i,`${b}-${w}-token`,D)),p=S+N.length}),p<h.length&&f.push(...Wh(h.slice(p),c,`${b}-tail`,i))}),f.length?f:" "}function Wh(s,i,c,a=""){const f=[];let h=0;const b=new RegExp(i.source,"g");return[...s.matchAll(b)].forEach((p,g)=>{const y=p.index??0;y>h&&f.push(...tc(s.slice(h,y),a,`${c}-${g}-plain`)),f.push(...tc(p[0],a,`${c}-${g}-keyword`,"tok-keyword")),h=y+p[0].length}),h<s.length&&f.push(...tc(s.slice(h),a,`${c}-plain-end`)),f}function tc(s,i,c,a=""){if(!i)return[u.jsx("span",{className:a||void 0,children:s},c)];const f=[],h=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),b=new RegExp(`(?<![A-Za-zÆØÅæøå0-9_])(${h})(?![A-Za-zÆØÅæøå0-9_])`,"g");let p=0;return[...s.matchAll(b)].forEach((g,y)=>{const w=g.index??0;w>p&&f.push(u.jsx("span",{className:a||void 0,children:s.slice(p,w)},`${c}-${y}-before`)),f.push(u.jsx("span",{className:`${a} tok-match`.trim(),children:g[0]},`${c}-${y}-match`)),p=w+g[0].length}),p<s.length&&f.push(u.jsx("span",{className:a||void 0,children:s.slice(p)},`${c}-after`)),f.length?f:[u.jsx("span",{className:a||void 0,children:s},c)]}function Jo(s){return s.length>0?s:[{path:Ff,content:T_,uploaded:!1,updatedAt:Date.now()}]}function zf(s,i,c,a){const f=s.filter(h=>h.path!==i);return[{path:i,content:c,uploaded:a,updatedAt:Date.now()},...f].sort((h,b)=>b.updatedAt-h.updatedAt)}function lc(s){return s.map(i=>({name:Te(i.path),path:i.path,type:"file",size:new Blob([i.content]).size}))}function tv(s,i,c){var a;return s.source==="pico"?c[s.path]:(a=i.find(f=>f.path===s.path))==null?void 0:a.content}function rc(s){const i=s.replace(/\\/g,"/"),c=i.lastIndexOf("/"),a=c>=0?i.slice(0,c+1):"",h=(c>=0?i.slice(c+1):i).match(/^(.+)_backup(\d+)(\.[^.]+)$/i);return h?{originalPath:`${a}${h[1]}${h[3]}`,index:parseInt(h[2],10)}:null}function jr(s){return rc(s)!==null}function Qi(s){const i=new Map;for(const c of s){const a=rc(c.path);if(!a)continue;const f=i.get(a.originalPath)??[];f.push(c),i.set(a.originalPath,f)}for(const c of i.values())c.sort((a,f)=>{var h,b;return(((h=rc(f.path))==null?void 0:h.index)??0)-(((b=rc(a.path))==null?void 0:b.index)??0)});return i}function Jh(s,i){const c=s.replace(/\\/g,"/"),a=c.lastIndexOf("/"),f=a>=0?c.slice(0,a+1):"/",h=a>=0?c.slice(a+1):c.replace(/^\/+/,""),b=h.lastIndexOf("."),p=b>0?h.slice(0,b):h,g=b>0?h.slice(b):"",y=new Set(i.map(w=>w.path.toLowerCase()));for(let w=1;w<1e3;w+=1){const S=`${f}${p}_backup${w}${g}`;if(!y.has(S.toLowerCase()))return S}return`${f}${p}_backup${Date.now()}${g}`}function lv(s,i){const c=s.replace(/\\/g,"/"),a=c.lastIndexOf("/"),f=a>=0?c.slice(0,a+1):"/",h=a>=0?c.slice(a+1):c.replace(/^\/+/,""),b=h.lastIndexOf("."),p=b>0?h.slice(0,b):h,g=b>0?h.slice(b):"";for(let y=1;y<1e3;y+=1){const w=y===1?"_kopi":`_kopi${y}`,S=`${f}${p}${w}${g}`;if(!i(S)&&!jr(S))return S}return`${f}${p}_kopi${Date.now()}${g}`}function rv(s){return s==="ok"?"Nyeste":s==="outdated"?"Opdater":s==="missing"?"Mangler":"Ikke tjekket"}function iv(s,i,c,a){const f=new Map,h=Qi(s),b=Qi(lc(i));for(const S of s)jr(S.path)||f.set(Yn("pico",S.path),{kind:"file",name:S.name,path:S.path,type:S.type,size:S.size,source:"pico",uploaded:!0,versions:h.get(S.path)??[]});for(const S of i)jr(S.path)||f.set(Yn("local",S.path),{kind:"file",name:Te(S.path),path:S.path,type:"file",source:"local",uploaded:!1,versions:b.get(S.path)??[]});for(const S of Object.keys(c)){const[N,...D]=S.split(":"),U=D.join(":");if(N!=="local"&&N!=="pico"||!U)continue;const K=f.get(S);if(K){f.set(S,K);continue}f.set(S,{kind:"file",name:Te(U),path:U,type:"file",source:N,uploaded:!1,versions:N==="pico"?h.get(U)??[]:b.get(U)??[]})}const p=[...f.values()].sort(sv),g=p.filter(S=>S.source==="pico"),y=p.filter(S=>S.source==="local"),w=[];return g.length>0||a?w.push({kind:"separator",id:"pico-files",label:a?"Pico":"Microcontroller"},...g):w.push({kind:"separator",id:"pico-files",label:"Microcontroller"}),y.length>0&&w.push({kind:"separator",id:"browser-files",label:"Browser"},...y),w}const av=new Map([["main.py",0],["devicesettings.txt",1],["layout.txt",2],["bleperipheral.py",3],["picofly.py",4],["picorobotics.py",5],["neopixel.py",6],["hcsr04.py",7]]);function sv(s,i){const c=e_(s.path),a=e_(i.path);return c===null&&a===null?s.name.localeCompare(i.name,"da"):c===null?-1:a===null?1:c-a}function e_(s){var c;const i=(c=s.replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.toLowerCase();return i?av.get(i)??null:null}function n_(s,i,c){if(!(i in s))return s;const a={...s,[c]:s[i]};return delete a[i],a}function ov(s,i,c,a){const f=`${i}:${c}`;if(!(f in s))return s;const h={...s,[`${i}:${a}`]:s[f]};return delete h[f],h}function cv({open:s}){const i=te(G=>G.screen),c=te(G=>G.active),a=te(G=>G.toggleSideMenu),f=te(G=>G.toggleDebugger),h=te(G=>G.setEditMode),b=te(G=>G.openMenuPage),p=te(G=>G.disconnect),g=te(G=>G.openPicoIde),y=te(G=>G.closePicoIde),w=te(G=>G.picoIdeOrigin),S=i==="dashboard",N=i==="control",D=i==="ide",U=N&&!!(c!=null&&c.canEdit),K=!N||!!(c!=null&&c.isOwnedByMe)||!!(c!=null&&c.canEditCode),q=w==="control",P=w==="control"?"Kontrol Panel":"Hovedmenu";return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:`scrim ${s?"open":"closing"}`,onClick:()=>a(!1)}),u.jsxs("nav",{className:`sidemenu sidemenu-${i} ${s?"open":"closing"}`,"aria-label":"Sidemenu",children:[S&&u.jsxs(u.Fragment,{children:[u.jsx(kt,{label:"Bruger",icon:"user",onClick:()=>b("user-settings")}),u.jsx(kt,{label:"Indstillinger",icon:"settings",onClick:()=>b("application-settings")}),u.jsx(kt,{label:"Kodeværksted",icon:"picoIde",onClick:g,disabled:!K}),u.jsx(Uf,{}),u.jsx(kt,{label:"Om appen",icon:"info",onClick:()=>b("application-about")}),u.jsx(kt,{label:"Hjælp",icon:"help",onClick:()=>b("application-help")}),u.jsx(kt,{label:"Fejlfinding",icon:"debugger",onClick:()=>f(!0)})]}),N&&u.jsxs(u.Fragment,{children:[u.jsx(kt,{label:"Indstillinger",icon:"settings",onClick:()=>b("device-settings")}),u.jsx(kt,{label:"Rediger",icon:"edit",onClick:()=>h(!0),disabled:!U}),u.jsx(kt,{label:"Kodeværksted",icon:"picoIde",onClick:g,disabled:!K}),u.jsx(Uf,{}),u.jsx(kt,{label:"Hjælp",icon:"help",onClick:()=>b("device-help")}),u.jsx(kt,{label:"Fejlfinding",icon:"debugger",onClick:()=>f(!0)})]}),D&&u.jsxs(u.Fragment,{children:[u.jsx(kt,{label:P,icon:"back",onClick:y}),u.jsx(Uf,{})]}),u.jsx("div",{className:"spacer"}),(N||D&&q)&&u.jsx(kt,{label:"Forlad",icon:"exit",onClick:()=>p()})]})]})}function kt({label:s,icon:i,disabled:c,onClick:a}){return u.jsxs("button",{className:"iconbtn",type:"button",onClick:a,disabled:c,"aria-label":s,children:[u.jsx(lt,{name:i}),u.jsx("span",{children:s})]})}function Uf(){return u.jsxs("a",{className:"iconbtn sidemenu-link",href:"https://www.teknologiskolen.dk/",target:"_blank",rel:"noreferrer","aria-label":"Teknologiskolen",children:[u.jsx("img",{src:qb,alt:""}),u.jsx("span",{children:"Teknologiskolen"})]})}const uv={error:"term-error",success:"term-success",warning:"term-warning",info:""},t_={error:"[FEJL] ",success:"[SUCCES] ",warning:"[ADVARSEL] ",info:""};function fv(){const s=new Date,i=c=>String(c).padStart(2,"0");return`${i(s.getDate())}-${i(s.getMonth()+1)}-${s.getFullYear()}-${i(s.getHours())}-${i(s.getMinutes())}`}function dv(){const s=te(f=>f.logs),i=te(f=>f.clearLogs),c=te(f=>f.toggleDebugger);function a(){const f=[...s].reverse().map(g=>`${g.time} ${t_[g.level]}${g.message}`).join(`
`),h=new Blob([f],{type:"text/plain"}),b=URL.createObjectURL(h),p=document.createElement("a");p.href=b,p.download=`${fv()}.txt`,p.click(),URL.revokeObjectURL(b)}return u.jsxs(Cn,{title:"Fejlfinding",onClose:()=>c(!1),closeVariant:"circle",children:[u.jsx("div",{className:"terminal",children:s.length===0?u.jsx("div",{className:"term-line",children:"Ingen log endnu."}):s.map((f,h)=>u.jsxs("div",{className:`term-line ${uv[f.level]}`,children:[f.time," ",t_[f.level],f.message]},`${f.time}-${h}`))}),u.jsxs("div",{className:"row",style:{marginTop:14},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:"Ryd"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:a,children:"Gem logfil"})]})]})}const j_=4,Yt=j_*4+17,l_=80,mv=20,pv=30660;function hv(s){const i=new TextEncoder().encode(s);if(i.length>76)throw new Error("QR-koden er for lang.");const c=r_(!1),a=r_(!1);_v(c,a);const f=bv(i),h=xv(f,mv);return yv(c,a,[...f,...h]),vv(c,a),c}function r_(s){return Array.from({length:Yt},()=>Array.from({length:Yt},()=>s))}function Pt(s,i,c,a,f,h=!0){s[a][c]=f,h&&(i[a][c]=!0)}function _v(s,i){Hf(s,i,0,0),Hf(s,i,Yt-7,0),Hf(s,i,0,Yt-7);for(let c=0;c<Yt;c+=1)i[6][c]||Pt(s,i,c,6,c%2===0),i[c][6]||Pt(s,i,6,c,c%2===0);gv(s,i,26,26),Pt(s,i,8,j_*4+9,!0)}function Hf(s,i,c,a){for(let f=-1;f<=7;f+=1)for(let h=-1;h<=7;h+=1){const b=c+h,p=a+f;if(b<0||p<0||b>=Yt||p>=Yt)continue;const g=h>=0&&h<=6&&f>=0&&f<=6&&(h===0||h===6||f===0||f===6||h>=2&&h<=4&&f>=2&&f<=4);Pt(s,i,b,p,g)}}function gv(s,i,c,a){for(let f=-2;f<=2;f+=1)for(let h=-2;h<=2;h+=1)i[a+f][c+h]||Pt(s,i,c+h,a+f,Math.max(Math.abs(h),Math.abs(f))!==1)}function bv(s){const i=[];ec(i,4,4),ec(i,s.length,8);for(const a of s)ec(i,a,8);for(ec(i,0,Math.min(4,l_*8-i.length));i.length%8!==0;)i.push(0);const c=[];for(let a=0;a<i.length;a+=8)c.push(i.slice(a,a+8).reduce((f,h)=>f<<1|h,0));for(let a=236;c.length<l_;a=a===236?17:236)c.push(a);return c}function ec(s,i,c){for(let a=c-1;a>=0;a-=1)s.push(i>>>a&1)}function yv(s,i,c){const a=c.flatMap(b=>Array.from({length:8},(p,g)=>b>>>7-g&1));let f=0,h=!0;for(let b=Yt-1;b>=1;b-=2){b===6&&(b-=1);for(let p=0;p<Yt;p+=1){const g=h?Yt-1-p:p;for(let y=0;y<2;y+=1){const w=b-y;if(i[g][w])continue;const S=f<a.length?a[f]===1:!1;s[g][w]=S!==((w+g)%2===0),f+=1}}h=!h}}function vv(s,i){const c=a=>(pv>>>a&1)!==0;for(let a=0;a<=5;a+=1)Pt(s,i,8,a,c(a));Pt(s,i,8,7,c(6)),Pt(s,i,8,8,c(7)),Pt(s,i,7,8,c(8));for(let a=9;a<15;a+=1)Pt(s,i,14-a,8,c(a));for(let a=0;a<8;a+=1)Pt(s,i,Yt-1-a,8,c(a));for(let a=8;a<15;a+=1)Pt(s,i,8,Yt-15+a,c(a))}const fs=new Array(512),Kf=new Array(256);let i_=!1;function D_(){if(i_)return;let s=1;for(let i=0;i<255;i+=1)fs[i]=s,Kf[s]=i,s<<=1,s&256&&(s^=285);for(let i=255;i<512;i+=1)fs[i]=fs[i-255];i_=!0}function A_(s,i){return s===0||i===0?0:fs[Kf[s]+Kf[i]]}function xv(s,i){D_();const c=wv(i),a=Array.from({length:i},()=>0);for(const f of s){const h=f^a.shift();a.push(0);for(let b=0;b<i;b+=1)a[b]^=A_(c[b],h)}return a}function wv(s){D_();let i=[1];for(let c=0;c<s;c+=1){const a=Array.from({length:i.length+1},()=>0);for(let f=0;f<i.length;f+=1)a[f]^=A_(i[f],fs[c]),a[f+1]^=i[f];i=a}return i.slice(1)}function Sv(){const s=te(de=>de.menuPage),i=te(de=>de.closeMenuPage),c=te(de=>de.user),a=te(de=>de.active),f=te(de=>de.layout),h=te(de=>de.sliderValues),b=te(de=>de.savedDevices),p=te(de=>de.updateUsername),g=te(de=>de.createOwnerPairingCode),y=te(de=>de.applyOwnerPairingCode),w=te(de=>de.clearSavedDevices),S=te(de=>de.resetApplicationData),N=te(de=>de.saveDeviceSettings),D=te(de=>de.setEditMode),U=te(de=>de.askConfirm),[K,q]=L.useState((c==null?void 0:c.username)??""),[P,G]=L.useState(!1),[re,ie]=L.useState(""),[_e,pe]=L.useState(""),[Q,J]=L.useState(!1),[ke,Se]=L.useState(""),Ye=L.useRef(null),[W,tn]=L.useState((a==null?void 0:a.iconID)??0),[ze,Ve]=L.useState(!1),[H,ne]=L.useState((a==null?void 0:a.canOthersConnect)??!1),[ce,me]=L.useState((a==null?void 0:a.canOthersEdit)??!1),[Ee,k]=L.useState((a==null?void 0:a.canOthersEditCode)??!1),[z,ee]=L.useState((a==null?void 0:a.gridCols)??11),[se,ye]=L.useState((a==null?void 0:a.gridRows)??31),[I,A]=L.useState(!1);L.useEffect(()=>{s==="user-settings"&&(q((c==null?void 0:c.username)??""),pe(""),Se(""),J(!1))},[s,c==null?void 0:c.username]),L.useEffect(()=>{s==="device-settings"&&a&&(tn(a.iconID),ne(a.canOthersConnect),me(a.canOthersEdit),k(a.canOthersEditCode),ee(a.gridCols),ye(a.gridRows))},[a,s]),L.useEffect(()=>{if(!Q)return;let de=!1,De=null,Sn=0;async function Ae(){var Fn;const hn=window.BarcodeDetector;if(!hn||!((Fn=navigator.mediaDevices)!=null&&Fn.getUserMedia)){Se("Denne browser kan ikke scanne QR-koder. Skriv ejerkoden i stedet."),J(!1);return}try{De=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const jn=Ye.current;if(!jn)return;jn.srcObject=De,await jn.play();const dl=new hn({formats:["qr_code"]}),Ft=async()=>{var Tt;if(!de){try{const Yl=(Tt=(await dl.detect(jn)).find(En=>En.rawValue))==null?void 0:Tt.rawValue;if(Yl){pe(Yl),y(Yl)&&G(!1),J(!1);return}}catch{}Sn=window.requestAnimationFrame(Ft)}};Sn=window.requestAnimationFrame(Ft)}catch{Se("Kameraet kunne ikke åbnes. Skriv ejerkoden i stedet."),J(!1)}}return Ae(),()=>{de=!0,Sn&&window.cancelAnimationFrame(Sn),De==null||De.getTracks().forEach(hn=>hn.stop())}},[y,Q]);const ae=(de,De)=>Number.isFinite(de)?Math.max(Wi,Math.min(Ji,Math.round(de))):De,ge=(c==null?void 0:c.username)??"",Oe=K.trim(),Ge=Oe.length>0&&Oe!==ge;if(!s)return null;if(s==="user-settings"){let de=function(){const Ae=g();Ae&&(ie(Ae),pe(""),G(!0))},De=function(){y(_e)&&(pe(""),G(!1))};async function Sn(){var Ae;try{await((Ae=navigator.clipboard)==null?void 0:Ae.writeText(re))}catch{}}return u.jsxs(u.Fragment,{children:[u.jsx(Cn,{title:"Brugerindstillinger",onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Gt,{label:"GUID",value:(c==null?void 0:c.userID)??"Ukendt"}),u.jsxs("div",{className:`field ${K.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-username",value:K,onChange:Ae=>q(Ae.target.value),maxLength:24,autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>p(K),disabled:!Ge,children:"Gem nyt brugernavn"}),u.jsx("div",{className:"notice",children:"Ejerkode bruges, hvis den samme person skal forbinde fra flere browsere eller telefoner."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:de,children:"Ejerkode"}),u.jsx("button",{className:"btn btn-outline btn-block btn-danger",type:"button",onClick:()=>U({title:"Start forfra",message:"Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.",confirmLabel:"Slet alt",onConfirm:()=>{S()}}),children:"Slet brugerdata"})]})}),P&&u.jsx(Cn,{title:"Del ejerkode",onClose:()=>G(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Nv,{code:re}),u.jsx("code",{className:"owner-code-text",children:re}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void Sn(),children:"Kopiér ejerkode"}),u.jsxs("div",{className:`field ${_e.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-owner-code",value:_e,onChange:Ae=>pe(Ae.target.value),autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-owner-code",children:"Skriv ejerkode"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:De,disabled:!_e.trim(),children:"Brug ejerkode i denne browser"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>J(Ae=>!Ae),children:Q?"Stop scanning":"Scan QR-kode"}),ke&&u.jsx("div",{className:"notice",children:ke}),Q&&u.jsx("video",{className:"owner-code-video",ref:Ye,muted:!0,playsInline:!0})]})})]})}if(s==="application-settings")return u.jsx(Cn,{title:"Applikationsindstillinger",onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Gt,{label:"Version",value:ds}),u.jsx(Gt,{label:"Bluetooth",value:dc()?"Tilgængelig":"Ikke tilgængelig"}),u.jsx(Gt,{label:"Gemte enheder",value:String(b.length)}),u.jsx("div",{className:"notice",children:"Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne tilladelsen i browserens site- eller Bluetooth-indstillinger."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>U({title:"Ryd gemte enheder",message:"Vil du fjerne alle gemte enheder fra denne browser?",confirmLabel:"Ryd",onConfirm:w}),disabled:b.length===0,children:"Ryd gemte enheder"})]})});if(s==="application-about")return u.jsx(Cn,{title:"Om appen",onClose:i,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Pico Kontrol Panel er lavet til at bygge og fjernstyre sjove eller seje Raspberry Pi Pico W-projekter."}),u.jsx(Gt,{label:"Udvikler",value:"Christian Bröchner Rasmussen"}),u.jsx(Gt,{label:"Version",value:ds})]})});if(s==="application-help")return u.jsx(Cn,{title:"Hjælp til applikationen",onClose:i,children:u.jsxs("div",{className:"settings-stack prose help-lesson",children:[u.jsxs("div",{className:"help-lesson-card",children:[u.jsx("strong",{children:"Komplet undervisningsforløb"}),u.jsx("p",{children:"Linket åbner Teknologiskolens guide til Pico Kontrol Panel. Her kan du lære hele arbejdsgangen: browseropsætning, Kodeværkstedet, MicroPython, USB-installation, Bluetooth-forbindelse, kontrolpaneler og trådløs kodeudvikling."})]}),u.jsxs("div",{className:"help-lesson-list","aria-label":"Undervisningsforløbet indeholder",children:[u.jsx("span",{children:"Trin-for-trin opsætning"}),u.jsx("span",{children:"Øvelser til kode og kontrolpanel"}),u.jsx("span",{children:"Projektforslag med Pico W"})]}),u.jsx("p",{className:"help-lesson-destination",children:"Du sendes til materialer.teknologiskolen.dk i en ny fane."}),u.jsx("a",{className:"btn btn-primary btn-block",href:"https://materialer.teknologiskolen.dk/lessons/fjernstyring-af-raspberry-pi-pico-w",target:"_blank",rel:"noreferrer",children:"Åbn komplet undervisningsforløb"})]})});if(s==="device-settings"){const de=f.filter(Ae=>Ae.type==="slider"),De=!!(a!=null&&a.isOwnedByMe);async function Sn(Ae=!1){if(!a||!De)return;const hn=ae(z,a.gridCols),Fn=ae(se,a.gridRows),jn=Ev(f,hn,Fn);if(jn&&!Ae){U({title:"Gitter kan påvirke layout",message:`Det nuværende layout bruger op til ${jn.requiredCols} kolonner og ${jn.requiredRows} rækker. Det nye gitter er ${hn} × ${Fn}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,confirmLabel:"Gem alligevel",onConfirm:()=>{Sn(!0)}});return}A(!0),await N(W,H,H&&ce,H&&Ee,hn,Fn),ee(hn),ye(Fn),A(!1)}return u.jsx(Cn,{title:"Enhedsindstillinger",onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Gt,{label:"Navn",value:(a==null?void 0:a.deviceName)??"Ukendt"}),u.jsx(Gt,{label:"Ejer",value:Tv(a)}),De?u.jsxs(u.Fragment,{children:[u.jsx("button",{className:"device-icon-pick settings-icon-pick",type:"button",onClick:()=>Ve(!0),children:u.jsx("img",{src:ta(W),alt:""})}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:H?"":"active",onClick:()=>ne(!1),children:"Privat"}),u.jsx("button",{type:"button",className:H?"active":"",onClick:()=>ne(!0),children:"Offentlig"})]}),H&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:ce?"":"active",onClick:()=>me(!1),children:"Nej"}),u.jsx("button",{type:"button",className:ce?"active":"",onClick:()=>me(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:Ee?"":"active",onClick:()=>k(!1),children:"Nej"}),u.jsx("button",{type:"button",className:Ee?"active":"",onClick:()=>k(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter"}),u.jsxs("div",{className:"row",children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-cols",children:"Kolonner"}),u.jsx("input",{id:"device-cols",type:"number",min:Wi,max:Ji,value:Number.isNaN(z)?"":z,onChange:Ae=>ee(parseInt(Ae.target.value,10)),onBlur:()=>ee(ae(z,(a==null?void 0:a.gridCols)??11))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-rows",children:"Rækker"}),u.jsx("input",{id:"device-rows",type:"number",min:Wi,max:Ji,value:Number.isNaN(se)?"":se,onChange:Ae=>ye(parseInt(Ae.target.value,10)),onBlur:()=>ye(ae(se,(a==null?void 0:a.gridRows)??31))})]})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>Sn(),disabled:I,children:I?"Gemmer...":"Gem enhedsindstillinger"})]}):u.jsxs(u.Fragment,{children:[u.jsx(Gt,{label:"Ikon ID",value:String((a==null?void 0:a.iconID)??0)}),u.jsx(Gt,{label:"Redigering",value:a!=null&&a.canEdit?"Tilladt":"Ikke tilladt"}),u.jsx(Gt,{label:"Gitter",value:`${(a==null?void 0:a.gridCols)??0} × ${(a==null?void 0:a.gridRows)??0}`})]}),u.jsx(Gt,{label:"Kontroller",value:String(f.length)}),de.length>0&&u.jsxs("div",{className:"settings-section",children:[u.jsx("h4",{children:"Slidere"}),de.map(Ae=>u.jsxs("div",{className:"slider-meta",children:[u.jsx("strong",{children:Ae.name}),u.jsxs("span",{children:[Ae.sliderMin??0," til ",Ae.sliderMax??100]}),u.jsxs("span",{children:["Retur: ",kv(Ae.sliderRecenter??"none")]}),u.jsxs("span",{children:["Seneste værdi: ",h[Ae.name]??"Ikke brugt"]})]},Ae.name))]}),ze&&u.jsx(p_,{selected:W,onSelect:tn,onClose:()=>Ve(!1)})]})})}return u.jsx(Cn,{title:"Hjælp til enheden",onClose:i,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Knapper sender en kommando med deres navn, når de trykkes."}),u.jsx("p",{children:"Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse."}),u.jsx("p",{children:"Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen."}),(a==null?void 0:a.canEdit)&&u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>D(!0),children:"Rediger layout"})]})})}function Ev(s,i,c){let a=0,f=0;for(const h of s)ps(h)&&(a=Math.max(a,Math.ceil((h.centerX2+h.spanX)/2)+1),f=Math.max(f,Math.ceil((h.centerY2+h.spanY)/2)+1));return i<a||c<f?{requiredCols:a,requiredRows:f}:null}function kv(s){return s==="bottom"?"bund":s==="middle"?"midte":s==="top"?"top":"ingen"}function Nv({code:s}){const i=L.useMemo(()=>hv(s),[s]),c=i.length;return u.jsxs("svg",{className:"owner-code-qr",viewBox:`0 0 ${c+8} ${c+8}`,role:"img","aria-label":"QR-kode til ejerkode",children:[u.jsx("rect",{width:c+8,height:c+8,fill:"white"}),i.map((a,f)=>a.map((h,b)=>h?u.jsx("rect",{x:b+4,y:f+4,width:"1",height:"1",fill:"currentColor"},`${b}-${f}`):null))]})}function Tv(s){var i;return s?s.isOwnedByMe?"Dig":((i=s.ownerName)==null?void 0:i.trim())||"Anden bruger":"Ukendt"}function Gt({label:s,value:i}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:s}),u.jsx("strong",{children:i})]})}function Rv(){const s=te(a=>a.confirmDialog),i=te(a=>a.closeConfirm);if(!s)return null;function c(){s==null||s.onConfirm(),i()}return u.jsx(Cn,{title:s.title,onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:s.message}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:s.cancelLabel??"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:c,children:s.confirmLabel??"Fortsæt"})]})]})})}function Mv(){const s=te(a=>a.connectionLost),i=te(a=>a.reconnectLostDevice),c=te(a=>a.dismissConnectionLost);return s?u.jsx(Cn,{title:"Forbindelse afbrudt",onClose:c,children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("p",{className:"confirm-message",children:["Forbindelsen til ",s.deviceName," blev afbrudt. Tjek at Picoen har strøm og er tæt nok på."]}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:c,children:"Luk"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>i(),children:"Genforbind"})]})]})}):null}function jv(){const s=te(c=>c.toast),i=te(c=>c.dismissToast);return s?u.jsx("div",{className:"toast",role:"alert",onClick:i,children:s.message},s.id):null}function Dv(){const s=te(p=>p.screen),i=te(p=>p.splashTarget),c=te(p=>p.init),a=te(p=>p.sideMenuOpen),f=te(p=>p.debuggerOpen),[h,b]=L.useState(!1);return L.useEffect(()=>{c()},[c]),L.useEffect(()=>{if(a){b(!0);return}const p=setTimeout(()=>b(!1),140);return()=>clearTimeout(p)},[a]),u.jsxs("div",{className:"app",children:[s==="splash"&&i==="intro"&&u.jsx(Eh,{}),s==="splash"&&i==="dashboard"&&u.jsx(kh,{}),s==="splash"&&u.jsx(Zb,{}),s==="intro"&&u.jsx(Eh,{}),s==="dashboard"&&u.jsx(kh,{}),s==="connection"&&u.jsx(t0,{}),s==="create"&&u.jsx(l0,{}),s==="control"&&u.jsx(Y0,{}),s==="ide"&&u.jsx(Gy,{}),h&&u.jsx(cv,{open:a}),u.jsx(Sv,{}),u.jsx(Mv,{}),u.jsx(Rv,{}),f&&u.jsx(dv,{}),u.jsx(jv,{})]})}function Av(){if(!("serviceWorker"in navigator))return;window.addEventListener("load",()=>{const i=new URL("sw.js",window.location.href);navigator.serviceWorker.register(i,{scope:"./"}).catch(c=>{console.warn("Service worker registration failed:",c)})});let s=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{s||window.crossOriginIsolated||(s=!0,window.location.reload())})}Av();ob.createRoot(document.getElementById("root")).render(u.jsx(cs.StrictMode,{children:u.jsx(Dv,{})}));
