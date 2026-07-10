var x2=Object.defineProperty;var w2=(i,l,o)=>l in i?x2(i,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[l]=o;var _e=(i,l,o)=>w2(i,typeof l!="symbol"?l+"":l,o);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const _ of p.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&s(_)}).observe(document,{childList:!0,subtree:!0});function o(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function s(d){if(d.ep)return;d.ep=!0;const p=o(d);fetch(d.href,p)}})();function Eh(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Sd={exports:{}},cs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm;function k2(){if(fm)return cs;fm=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function o(s,d,p){var _=null;if(p!==void 0&&(_=""+p),d.key!==void 0&&(_=""+d.key),"key"in d){p={};for(var m in d)m!=="key"&&(p[m]=d[m])}else p=d;return d=p.ref,{$$typeof:i,type:s,key:_,ref:d!==void 0?d:null,props:p}}return cs.Fragment=l,cs.jsx=o,cs.jsxs=o,cs}var mm;function S2(){return mm||(mm=1,Sd.exports=k2()),Sd.exports}var u=S2(),Ed={exports:{}},Re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function E2(){if(hm)return Re;hm=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),_=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),T=Symbol.iterator;function U(E){return E===null||typeof E!="object"?null:(E=T&&E[T]||E["@@iterator"],typeof E=="function"?E:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,I={};function V(E,z,te){this.props=E,this.context=z,this.refs=I,this.updater=te||N}V.prototype.isReactComponent={},V.prototype.setState=function(E,z){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,z,"setState")},V.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function X(){}X.prototype=V.prototype;function P(E,z,te){this.props=E,this.context=z,this.refs=I,this.updater=te||N}var re=P.prototype=new X;re.constructor=P,G(re,V.prototype),re.isPureReactComponent=!0;var ve=Array.isArray;function ce(){}var W={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function we(E,z,te){var le=te.ref;return{$$typeof:i,type:E,key:z,ref:le!==void 0?le:null,props:te}}function Ee(E,z){return we(E.type,z,E.props)}function ze(E){return typeof E=="object"&&E!==null&&E.$$typeof===i}function J(E){var z={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(te){return z[te]})}var Ne=/\/+/g;function je(E,z){return typeof E=="object"&&E!==null&&E.key!=null?J(""+E.key):z.toString(36)}function ue(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(ce,ce):(E.status="pending",E.then(function(z){E.status==="pending"&&(E.status="fulfilled",E.value=z)},function(z){E.status==="pending"&&(E.status="rejected",E.reason=z)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function B(E,z,te,le,se){var H=typeof E;(H==="undefined"||H==="boolean")&&(E=null);var D=!1;if(E===null)D=!0;else switch(H){case"bigint":case"string":case"number":D=!0;break;case"object":switch(E.$$typeof){case i:case l:D=!0;break;case w:return D=E._init,B(D(E._payload),z,te,le,se)}}if(D)return se=se(E),D=le===""?"."+je(E,0):le,ve(se)?(te="",D!=null&&(te=D.replace(Ne,"$&/")+"/"),B(se,z,te,"",function(Ue){return Ue})):se!=null&&(ze(se)&&(se=Ee(se,te+(se.key==null||E&&E.key===se.key?"":(""+se.key).replace(Ne,"$&/")+"/")+D)),z.push(se)),1;D=0;var oe=le===""?".":le+":";if(ve(E))for(var ye=0;ye<E.length;ye++)le=E[ye],H=oe+je(le,ye),D+=B(le,z,te,H,se);else if(ye=U(E),typeof ye=="function")for(E=ye.call(E),ye=0;!(le=E.next()).done;)le=le.value,H=oe+je(le,ye++),D+=B(le,z,te,H,se);else if(H==="object"){if(typeof E.then=="function")return B(ue(E),z,te,le,se);throw z=String(E),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return D}function ne(E,z,te){if(E==null)return E;var le=[],se=0;return B(E,le,"","",function(H){return z.call(te,H,se++)}),le}function pe(E){if(E._status===-1){var z=E._result;z=z(),z.then(function(te){(E._status===0||E._status===-1)&&(E._status=1,E._result=te)},function(te){(E._status===0||E._status===-1)&&(E._status=2,E._result=te)}),E._status===-1&&(E._status=0,E._result=z)}if(E._status===1)return E._result.default;throw E._result}var me=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},xe={map:ne,forEach:function(E,z,te){ne(E,function(){z.apply(this,arguments)},te)},count:function(E){var z=0;return ne(E,function(){z++}),z},toArray:function(E){return ne(E,function(z){return z})||[]},only:function(E){if(!ze(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return Re.Activity=k,Re.Children=xe,Re.Component=V,Re.Fragment=o,Re.Profiler=d,Re.PureComponent=P,Re.StrictMode=s,Re.Suspense=g,Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,Re.__COMPILER_RUNTIME={__proto__:null,c:function(E){return W.H.useMemoCache(E)}},Re.cache=function(E){return function(){return E.apply(null,arguments)}},Re.cacheSignal=function(){return null},Re.cloneElement=function(E,z,te){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var le=G({},E.props),se=E.key;if(z!=null)for(H in z.key!==void 0&&(se=""+z.key),z)!Z.call(z,H)||H==="key"||H==="__self"||H==="__source"||H==="ref"&&z.ref===void 0||(le[H]=z[H]);var H=arguments.length-2;if(H===1)le.children=te;else if(1<H){for(var D=Array(H),oe=0;oe<H;oe++)D[oe]=arguments[oe+2];le.children=D}return we(E.type,se,le)},Re.createContext=function(E){return E={$$typeof:_,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:p,_context:E},E},Re.createElement=function(E,z,te){var le,se={},H=null;if(z!=null)for(le in z.key!==void 0&&(H=""+z.key),z)Z.call(z,le)&&le!=="key"&&le!=="__self"&&le!=="__source"&&(se[le]=z[le]);var D=arguments.length-2;if(D===1)se.children=te;else if(1<D){for(var oe=Array(D),ye=0;ye<D;ye++)oe[ye]=arguments[ye+2];se.children=oe}if(E&&E.defaultProps)for(le in D=E.defaultProps,D)se[le]===void 0&&(se[le]=D[le]);return we(E,H,se)},Re.createRef=function(){return{current:null}},Re.forwardRef=function(E){return{$$typeof:m,render:E}},Re.isValidElement=ze,Re.lazy=function(E){return{$$typeof:w,_payload:{_status:-1,_result:E},_init:pe}},Re.memo=function(E,z){return{$$typeof:b,type:E,compare:z===void 0?null:z}},Re.startTransition=function(E){var z=W.T,te={};W.T=te;try{var le=E(),se=W.S;se!==null&&se(te,le),typeof le=="object"&&le!==null&&typeof le.then=="function"&&le.then(ce,me)}catch(H){me(H)}finally{z!==null&&te.types!==null&&(z.types=te.types),W.T=z}},Re.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},Re.use=function(E){return W.H.use(E)},Re.useActionState=function(E,z,te){return W.H.useActionState(E,z,te)},Re.useCallback=function(E,z){return W.H.useCallback(E,z)},Re.useContext=function(E){return W.H.useContext(E)},Re.useDebugValue=function(){},Re.useDeferredValue=function(E,z){return W.H.useDeferredValue(E,z)},Re.useEffect=function(E,z){return W.H.useEffect(E,z)},Re.useEffectEvent=function(E){return W.H.useEffectEvent(E)},Re.useId=function(){return W.H.useId()},Re.useImperativeHandle=function(E,z,te){return W.H.useImperativeHandle(E,z,te)},Re.useInsertionEffect=function(E,z){return W.H.useInsertionEffect(E,z)},Re.useLayoutEffect=function(E,z){return W.H.useLayoutEffect(E,z)},Re.useMemo=function(E,z){return W.H.useMemo(E,z)},Re.useOptimistic=function(E,z){return W.H.useOptimistic(E,z)},Re.useReducer=function(E,z,te){return W.H.useReducer(E,z,te)},Re.useRef=function(E){return W.H.useRef(E)},Re.useState=function(E){return W.H.useState(E)},Re.useSyncExternalStore=function(E,z,te){return W.H.useSyncExternalStore(E,z,te)},Re.useTransition=function(){return W.H.useTransition()},Re.version="19.2.7",Re}var pm;function ef(){return pm||(pm=1,Ed.exports=E2()),Ed.exports}var A=ef();const _s=Eh(A);var Td={exports:{}},us={},Md={exports:{}},jd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function T2(){return gm||(gm=1,(function(i){function l(B,ne){var pe=B.length;B.push(ne);e:for(;0<pe;){var me=pe-1>>>1,xe=B[me];if(0<d(xe,ne))B[me]=ne,B[pe]=xe,pe=me;else break e}}function o(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var ne=B[0],pe=B.pop();if(pe!==ne){B[0]=pe;e:for(var me=0,xe=B.length,E=xe>>>1;me<E;){var z=2*(me+1)-1,te=B[z],le=z+1,se=B[le];if(0>d(te,pe))le<xe&&0>d(se,te)?(B[me]=se,B[le]=pe,me=le):(B[me]=te,B[z]=pe,me=z);else if(le<xe&&0>d(se,pe))B[me]=se,B[le]=pe,me=le;else break e}}return ne}function d(B,ne){var pe=B.sortIndex-ne.sortIndex;return pe!==0?pe:B.id-ne.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;i.unstable_now=function(){return p.now()}}else{var _=Date,m=_.now();i.unstable_now=function(){return _.now()-m}}var g=[],b=[],w=1,k=null,T=3,U=!1,N=!1,G=!1,I=!1,V=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function re(B){for(var ne=o(b);ne!==null;){if(ne.callback===null)s(b);else if(ne.startTime<=B)s(b),ne.sortIndex=ne.expirationTime,l(g,ne);else break;ne=o(b)}}function ve(B){if(G=!1,re(B),!N)if(o(g)!==null)N=!0,ce||(ce=!0,J());else{var ne=o(b);ne!==null&&ue(ve,ne.startTime-B)}}var ce=!1,W=-1,Z=5,we=-1;function Ee(){return I?!0:!(i.unstable_now()-we<Z)}function ze(){if(I=!1,ce){var B=i.unstable_now();we=B;var ne=!0;try{e:{N=!1,G&&(G=!1,X(W),W=-1),U=!0;var pe=T;try{t:{for(re(B),k=o(g);k!==null&&!(k.expirationTime>B&&Ee());){var me=k.callback;if(typeof me=="function"){k.callback=null,T=k.priorityLevel;var xe=me(k.expirationTime<=B);if(B=i.unstable_now(),typeof xe=="function"){k.callback=xe,re(B),ne=!0;break t}k===o(g)&&s(g),re(B)}else s(g);k=o(g)}if(k!==null)ne=!0;else{var E=o(b);E!==null&&ue(ve,E.startTime-B),ne=!1}}break e}finally{k=null,T=pe,U=!1}ne=void 0}}finally{ne?J():ce=!1}}}var J;if(typeof P=="function")J=function(){P(ze)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,je=Ne.port2;Ne.port1.onmessage=ze,J=function(){je.postMessage(null)}}else J=function(){V(ze,0)};function ue(B,ne){W=V(function(){B(i.unstable_now())},ne)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(B){B.callback=null},i.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<B?Math.floor(1e3/B):5},i.unstable_getCurrentPriorityLevel=function(){return T},i.unstable_next=function(B){switch(T){case 1:case 2:case 3:var ne=3;break;default:ne=T}var pe=T;T=ne;try{return B()}finally{T=pe}},i.unstable_requestPaint=function(){I=!0},i.unstable_runWithPriority=function(B,ne){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var pe=T;T=B;try{return ne()}finally{T=pe}},i.unstable_scheduleCallback=function(B,ne,pe){var me=i.unstable_now();switch(typeof pe=="object"&&pe!==null?(pe=pe.delay,pe=typeof pe=="number"&&0<pe?me+pe:me):pe=me,B){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=pe+xe,B={id:w++,callback:ne,priorityLevel:B,startTime:pe,expirationTime:xe,sortIndex:-1},pe>me?(B.sortIndex=pe,l(b,B),o(g)===null&&B===o(b)&&(G?(X(W),W=-1):G=!0,ue(ve,pe-me))):(B.sortIndex=xe,l(g,B),N||U||(N=!0,ce||(ce=!0,J()))),B},i.unstable_shouldYield=Ee,i.unstable_wrapCallback=function(B){var ne=T;return function(){var pe=T;T=ne;try{return B.apply(this,arguments)}finally{T=pe}}}})(jd)),jd}var _m;function M2(){return _m||(_m=1,Md.exports=T2()),Md.exports}var Nd={exports:{}},nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function j2(){if(vm)return nn;vm=1;var i=ef();function l(g){var b="https://react.dev/errors/"+g;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)b+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+g+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var s={d:{f:o,r:function(){throw Error(l(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function p(g,b,w){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:k==null?null:""+k,children:g,containerInfo:b,implementation:w}}var _=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,b){if(g==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,nn.createPortal=function(g,b){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(l(299));return p(g,b,null,w)},nn.flushSync=function(g){var b=_.T,w=s.p;try{if(_.T=null,s.p=2,g)return g()}finally{_.T=b,s.p=w,s.d.f()}},nn.preconnect=function(g,b){typeof g=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,s.d.C(g,b))},nn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},nn.preinit=function(g,b){if(typeof g=="string"&&b&&typeof b.as=="string"){var w=b.as,k=m(w,b.crossOrigin),T=typeof b.integrity=="string"?b.integrity:void 0,U=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;w==="style"?s.d.S(g,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:k,integrity:T,fetchPriority:U}):w==="script"&&s.d.X(g,{crossOrigin:k,integrity:T,fetchPriority:U,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},nn.preinitModule=function(g,b){if(typeof g=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var w=m(b.as,b.crossOrigin);s.d.M(g,{crossOrigin:w,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&s.d.M(g)},nn.preload=function(g,b){if(typeof g=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var w=b.as,k=m(w,b.crossOrigin);s.d.L(g,w,{crossOrigin:k,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},nn.preloadModule=function(g,b){if(typeof g=="string")if(b){var w=m(b.as,b.crossOrigin);s.d.m(g,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:w,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else s.d.m(g)},nn.requestFormReset=function(g){s.d.r(g)},nn.unstable_batchedUpdates=function(g,b){return g(b)},nn.useFormState=function(g,b,w){return _.H.useFormState(g,b,w)},nn.useFormStatus=function(){return _.H.useHostTransitionStatus()},nn.version="19.2.7",nn}var bm;function Th(){if(bm)return Nd.exports;bm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),Nd.exports=j2(),Nd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function N2(){if(ym)return us;ym=1;var i=M2(),l=ef(),o=Th();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(p(e)!==e)throw Error(s(188))}function b(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var c=a.alternate;if(c===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===c.child){for(c=a.child;c;){if(c===n)return g(a),e;if(c===r)return g(a),t;c=c.sibling}throw Error(s(188))}if(n.return!==r.return)n=a,r=c;else{for(var h=!1,y=a.child;y;){if(y===n){h=!0,n=a,r=c;break}if(y===r){h=!0,r=a,n=c;break}y=y.sibling}if(!h){for(y=c.child;y;){if(y===n){h=!0,n=c,r=a;break}if(y===r){h=!0,r=c,n=a;break}y=y.sibling}if(!h)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function w(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=w(e),t!==null)return t;e=e.sibling}return null}var k=Object.assign,T=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),P=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),ve=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),we=Symbol.for("react.activity"),Ee=Symbol.for("react.memo_cache_sentinel"),ze=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=ze&&e[ze]||e["@@iterator"],typeof e=="function"?e:null)}var Ne=Symbol.for("react.client.reference");function je(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ne?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case V:return"Profiler";case I:return"StrictMode";case ve:return"Suspense";case ce:return"SuspenseList";case we:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case N:return"Portal";case P:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case re:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:je(e.type)||"Memo";case Z:t=e._payload,e=e._init;try{return je(e(t))}catch{}}return null}var ue=Array.isArray,B=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pe={pending:!1,data:null,method:null,action:null},me=[],xe=-1;function E(e){return{current:e}}function z(e){0>xe||(e.current=me[xe],me[xe]=null,xe--)}function te(e,t){xe++,me[xe]=e.current,e.current=t}var le=E(null),se=E(null),H=E(null),D=E(null);function oe(e,t){switch(te(H,t),te(se,e),te(le,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?L1(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=L1(t),e=B1(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(le),te(le,e)}function ye(){z(le),z(se),z(H)}function Ue(e){e.memoizedState!==null&&te(D,e);var t=le.current,n=B1(t,e.type);t!==n&&(te(se,e),te(le,n))}function fe(e){se.current===e&&(z(le),z(se)),D.current===e&&(z(D),as._currentValue=pe)}var Le,Ce;function Ke(e){if(Le===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Le=t&&t[1]||"",Ce=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Le+e+Ce}var st=!1;function kt(e,t){if(!e||st)return"";st=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(F){var q=F}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(F){q=F}e.call(Q.prototype)}}else{try{throw Error()}catch(F){q=F}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(F){if(F&&q&&typeof F.stack=="string")return[F.stack,q.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),h=c[0],y=c[1];if(h&&y){var S=h.split(`
`),L=y.split(`
`);for(a=r=0;r<S.length&&!S[r].includes("DetermineComponentFrameRoot");)r++;for(;a<L.length&&!L[a].includes("DetermineComponentFrameRoot");)a++;if(r===S.length||a===L.length)for(r=S.length-1,a=L.length-1;1<=r&&0<=a&&S[r]!==L[a];)a--;for(;1<=r&&0<=a;r--,a--)if(S[r]!==L[a]){if(r!==1||a!==1)do if(r--,a--,0>a||S[r]!==L[a]){var Y=`
`+S[r].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=r&&0<=a);break}}}finally{st=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ke(n):""}function Ot(e,t){switch(e.tag){case 26:case 27:case 5:return Ke(e.type);case 16:return Ke("Lazy");case 13:return e.child!==t&&t!==null?Ke("Suspense Fallback"):Ke("Suspense");case 19:return Ke("SuspenseList");case 0:case 15:return kt(e.type,!1);case 11:return kt(e.type.render,!1);case 1:return kt(e.type,!0);case 31:return Ke("Activity");default:return""}}function Zt(e){try{var t="",n=null;do t+=Ot(e,n),n=e,e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Cn=Object.prototype.hasOwnProperty,Jt=i.unstable_scheduleCallback,Mt=i.unstable_cancelCallback,yn=i.unstable_shouldYield,yr=i.unstable_requestPaint,dt=i.unstable_now,Kn=i.unstable_getCurrentPriorityLevel,lr=i.unstable_ImmediatePriority,zl=i.unstable_UserBlockingPriority,Jr=i.unstable_NormalPriority,ar=i.unstable_LowPriority,Ul=i.unstable_IdlePriority,Ht=i.log,he=i.unstable_setDisableYieldValue,qe=null,Qe=null;function bt(e){if(typeof Ht=="function"&&he(e),Qe&&typeof Qe.setStrictMode=="function")try{Qe.setStrictMode(qe,e)}catch{}}var ot=Math.clz32?Math.clz32:Wn,Qn=Math.log,xr=Math.LN2;function Wn(e){return e>>>=0,e===0?32:31-(Qn(e)/xr|0)|0}var un=256,Dn=262144,xn=4194304;function Lt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function We(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var a=0,c=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var y=r&134217727;return y!==0?(r=y&~c,r!==0?a=Lt(r):(h&=y,h!==0?a=Lt(h):n||(n=y&~e,n!==0&&(a=Lt(n))))):(y=r&~c,y!==0?a=Lt(y):h!==0?a=Lt(h):n||(n=r&~e,n!==0&&(a=Lt(n)))),a===0?0:t!==0&&t!==a&&(t&c)===0&&(c=a&-a,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:a}function yt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function St(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ln(){var e=xn;return xn<<=1,(xn&62914560)===0&&(xn=4194304),e}function ci(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ir(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function el(e,t,n,r,a,c){var h=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var y=e.entanglements,S=e.expirationTimes,L=e.hiddenUpdates;for(n=h&~n;0<n;){var Y=31-ot(n),Q=1<<Y;y[Y]=0,S[Y]=-1;var q=L[Y];if(q!==null)for(L[Y]=null,Y=0;Y<q.length;Y++){var F=q[Y];F!==null&&(F.lane&=-536870913)}n&=~Q}r!==0&&Ts(e,r,0),c!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=c&~(h&~t))}function Ts(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-ot(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function sr(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}function Ms(e,t){var n=t&-t;return n=(n&42)!==0?1:ql(n),(n&(e.suspendedLanes|t))!==0?0:n}function ql(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ui(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Hl(){var e=ne.p;return e!==0?e:(e=window.event,e===void 0?32:am(e.type))}function Zn(e,t){var n=ne.p;try{return ne.p=e,t()}finally{ne.p=n}}var Je=Math.random().toString(36).slice(2),jt="__reactFiber$"+Je,gt="__reactProps$"+Je,or="__reactContainer$"+Je,Vl="__reactEvents$"+Je,ga="__reactListeners$"+Je,_a="__reactHandles$"+Je,wr="__reactResources$"+Je,cr="__reactMarker$"+Je;function dn(e){delete e[jt],delete e[gt],delete e[Vl],delete e[ga],delete e[_a]}function fn(e){var t=e[jt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[or]||n[jt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=P1(e);e!==null;){if(n=e[jt])return n;e=P1(e)}return t}e=n,n=e.parentNode}return null}function On(e){if(e=e[jt]||e[or]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function an(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function wn(e){var t=e[wr];return t||(t=e[wr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ft(e){e[cr]=!0}var ur=new Set,va={};function en(e,t){Ln(e,t),Ln(e+"Capture",t)}function Ln(e,t){for(va[e]=t,e=0;e<t.length;e++)ur.add(t[e])}var kr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Sr={},Er={};function js(e){return Cn.call(Er,e)?!0:Cn.call(Sr,e)?!1:kr.test(e)?Er[e]=!0:(Sr[e]=!0,!1)}function dr(e,t,n){if(js(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Tr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function mn(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+r)}}function Bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mr(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Te(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,c=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(h){n=""+h,c.call(this,h)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(h){n=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Il(e){if(!e._valueTracker){var t=Mr(e)?"checked":"value";e._valueTracker=Te(e,t,""+e[t])}}function Ns(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Mr(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ba(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var wc=/[\n"\\]/g;function hn(e){return e.replace(wc,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function jr(e,t,n,r,a,c,h,y){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Bt(t)):e.value!==""+Bt(t)&&(e.value=""+Bt(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?Pl(e,h,Bt(t)):n!=null?Pl(e,h,Bt(n)):r!=null&&e.removeAttribute("value"),a==null&&c!=null&&(e.defaultChecked=!!c),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+Bt(y):e.removeAttribute("name")}function Nr(e,t,n,r,a,c,h,y){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){Il(e);return}n=n!=null?""+Bt(n):"",t=t!=null?""+Bt(t):n,y||t===e.value||(e.value=t),e.defaultValue=t}r=r??a,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=y?e.checked:!!r,e.defaultChecked=!!r,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),Il(e)}function Pl(e,t,n){t==="number"&&ba(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Gt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function ya(e,t,n){if(t!=null&&(t=""+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Bt(n):""}function sn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(ue(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n==null&&(n=""),t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==""&&r!==null&&(e.value=r),Il(e)}function tl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var kc=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function di(e,t,n){var r=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,n):typeof n!="number"||n===0||kc.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function xa(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&di(e,a,r)}else for(var c in t)t.hasOwnProperty(c)&&di(e,c,t[c])}function $(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sc=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ec=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wa(e){return Ec.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function on(){}var ka=null;function Sa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jn=null,it=null;function fi(e){var t=On(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(jr(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+hn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[gt]||null;if(!a)throw Error(s(90));jr(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ns(r)}break e;case"textarea":ya(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Gt(e,!!n.multiple,t,!1)}}}var nl=!1;function rl(e,t,n){if(nl)return e(t,n);nl=!0;try{var r=e(t);return r}finally{if(nl=!1,(Jn!==null||it!==null)&&(Do(),Jn&&(t=Jn,e=it,it=Jn=null,fi(t),e)))for(t=0;t<e.length;t++)fi(e[t])}}function Fl(e,t){var n=e.stateNode;if(n===null)return null;var r=n[gt]||null;if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mi=!1;if(er)try{var ll={};Object.defineProperty(ll,"passive",{get:function(){mi=!0}}),window.addEventListener("test",ll,ll),window.removeEventListener("test",ll,ll)}catch{mi=!1}var fr=null,Ea=null,kn=null;function al(){if(kn)return kn;var e,t=Ea,n=t.length,r,a="value"in fr?fr.value:fr.textContent,c=a.length;for(e=0;e<n&&t[e]===a[e];e++);var h=n-e;for(r=1;r<=h&&t[n-r]===a[c-r];r++);return kn=a.slice(e,1<r?1-r:void 0)}function Ta(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zt(){return!0}function hi(){return!1}function Vt(e){function t(n,r,a,c,h){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=c,this.target=h,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(n=e[y],this[y]=n?n(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?zt:hi,this.isPropagationStopped=hi,this}return k(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zt)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zt)},persist:function(){},isPersistent:zt}),t}var mt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mr=Vt(mt),Gl=k({},mt,{view:0,detail:0}),Tc=Vt(Gl),Rr,pi,il,Ar=k({},Gl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==il&&(il&&e.type==="mousemove"?(Rr=e.screenX-il.screenX,pi=e.screenY-il.screenY):pi=Rr=0,il=e),Rr)},movementY:function(e){return"movementY"in e?e.movementY:pi}}),$l=Vt(Ar),Rs=k({},Ar,{dataTransfer:0}),gi=Vt(Rs),Mc=k({},Gl,{relatedTarget:0}),_i=Vt(Mc),jc=k({},mt,{animationName:0,elapsedTime:0,pseudoElement:0}),Bn=Vt(jc),_t=k({},mt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vi=Vt(_t),Yl=k({},mt,{data:0}),bi=Vt(Yl),As={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cs={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nc[e])?!!t[e]:!1}function yi(){return Rc}var Ds=k({},Gl,{key:function(e){if(e.key){var t=As[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ta(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cs[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yi,charCode:function(e){return e.type==="keypress"?Ta(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ta(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Os=Vt(Ds),xi=k({},Ar,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ls=Vt(xi),Bs=k({},Gl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yi}),zs=Vt(Bs),Us=k({},mt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ac=Vt(Us),Cc=k({},Ar,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qs=Vt(Cc),wi=k({},mt,{newState:0,oldState:0}),Dc=Vt(wi),Oc=[9,13,27,32],ki=er&&"CompositionEvent"in window,Xl=null;er&&"documentMode"in document&&(Xl=document.documentMode);var Lc=er&&"TextEvent"in window&&!Xl,Hs=er&&(!ki||Xl&&8<Xl&&11>=Xl),Vs=" ",Is=!1;function Ps(e,t){switch(e){case"keyup":return Oc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sl=!1;function Kl(e,t){switch(e){case"compositionend":return Fs(t);case"keypress":return t.which!==32?null:(Is=!0,Vs);case"textInput":return e=t.data,e===Vs&&Is?null:e;default:return null}}function Gs(e,t){if(sl)return e==="compositionend"||!ki&&Ps(e,t)?(e=al(),kn=Ea=fr=null,sl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hs&&t.locale!=="ko"?null:t.data;default:return null}}var $s={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ys(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$s[e.type]:t==="textarea"}function Si(e,t,n,r){Jn?it?it.push(r):it=[r]:Jn=r,t=Ho(t,"onChange"),0<t.length&&(n=new mr("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ql=null,Wl=null;function Xs(e){N1(e,0)}function Ma(e){var t=an(e);if(Ns(t))return e}function Ks(e,t){if(e==="change")return t}var Qs=!1;if(er){var Ei;if(er){var Ti="oninput"in document;if(!Ti){var Ws=document.createElement("div");Ws.setAttribute("oninput","return;"),Ti=typeof Ws.oninput=="function"}Ei=Ti}else Ei=!1;Qs=Ei&&(!document.documentMode||9<document.documentMode)}function Zs(){Ql&&(Ql.detachEvent("onpropertychange",ja),Wl=Ql=null)}function ja(e){if(e.propertyName==="value"&&Ma(Wl)){var t=[];Si(t,Wl,e,Sa(e)),rl(Xs,t)}}function zn(e,t,n){e==="focusin"?(Zs(),Ql=t,Wl=n,Ql.attachEvent("onpropertychange",ja)):e==="focusout"&&Zs()}function Js(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ma(Wl)}function Bc(e,t){if(e==="click")return Ma(t)}function zc(e,t){if(e==="input"||e==="change")return Ma(t)}function Mi(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:Mi;function Cr(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Cn.call(t,a)||!It(e[a],t[a]))return!1}return!0}function ji(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dr(e,t){var n=ji(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ji(n)}}function Na(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Na(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ni(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ba(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ba(e.document)}return t}function Ri(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Uc=er&&"documentMode"in document&&11>=document.documentMode,ol=null,f=null,v=null,x=!1;function R(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;x||ol==null||ol!==ba(r)||(r=ol,"selectionStart"in r&&Ri(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),v&&Cr(v,r)||(v=r,r=Ho(f,"onSelect"),0<r.length&&(t=new mr("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ol)))}function j(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ee={animationend:j("Animation","AnimationEnd"),animationiteration:j("Animation","AnimationIteration"),animationstart:j("Animation","AnimationStart"),transitionrun:j("Transition","TransitionRun"),transitionstart:j("Transition","TransitionStart"),transitioncancel:j("Transition","TransitionCancel"),transitionend:j("Transition","TransitionEnd")},de={},Ge={};er&&(Ge=document.createElement("div").style,"AnimationEvent"in window||(delete ee.animationend.animation,delete ee.animationiteration.animation,delete ee.animationstart.animation),"TransitionEvent"in window||delete ee.transitionend.transition);function Se(e){if(de[e])return de[e];if(!ee[e])return e;var t=ee[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ge)return de[e]=t[n];return e}var $e=Se("animationend"),vt=Se("animationiteration"),tn=Se("animationstart"),Be=Se("transitionrun"),ht=Se("transitionstart"),Or=Se("transitioncancel"),Un=Se("transitionend"),qn=new Map,hr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hr.push("scrollEnd");function Pt(e,t){qn.set(e,t),en(t,[e])}var Zl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},$t=[],pr=0,Lr=0;function Jl(){for(var e=pr,t=Lr=pr=0;t<e;){var n=$t[t];$t[t++]=null;var r=$t[t];$t[t++]=null;var a=$t[t];$t[t++]=null;var c=$t[t];if($t[t++]=null,r!==null&&a!==null){var h=r.pending;h===null?a.next=a:(a.next=h.next,h.next=a),r.pending=a}c!==0&&uf(n,a,c)}}function eo(e,t,n,r){$t[pr++]=e,$t[pr++]=t,$t[pr++]=n,$t[pr++]=r,Lr|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function qc(e,t,n,r){return eo(e,t,n,r),to(e)}function ea(e,t){return eo(e,null,null,t),to(e)}function uf(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var a=!1,c=e.return;c!==null;)c.childLanes|=n,r=c.alternate,r!==null&&(r.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(a=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,a&&t!==null&&(a=31-ot(n),e=c.hiddenUpdates,r=e[a],r===null?e[a]=[t]:r.push(t),t.lane=n|536870912),c):null}function to(e){if(50<Zi)throw Zi=0,Xu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ra={};function lp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(e,t,n,r){return new lp(e,t,n,r)}function Hc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Br(e,t){var n=e.alternate;return n===null?(n=Sn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function df(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function no(e,t,n,r,a,c){var h=0;if(r=e,typeof e=="function")Hc(e)&&(h=1);else if(typeof e=="string")h=c2(e,n,le.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case we:return e=Sn(31,n,t,a),e.elementType=we,e.lanes=c,e;case G:return ta(n.children,a,c,t);case I:h=8,a|=24;break;case V:return e=Sn(12,n,t,a|2),e.elementType=V,e.lanes=c,e;case ve:return e=Sn(13,n,t,a),e.elementType=ve,e.lanes=c,e;case ce:return e=Sn(19,n,t,a),e.elementType=ce,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:h=10;break e;case X:h=9;break e;case re:h=11;break e;case W:h=14;break e;case Z:h=16,r=null;break e}h=29,n=Error(s(130,e===null?"null":typeof e,"")),r=null}return t=Sn(h,n,t,a),t.elementType=e,t.type=r,t.lanes=c,t}function ta(e,t,n,r){return e=Sn(7,e,r,t),e.lanes=n,e}function Vc(e,t,n){return e=Sn(6,e,null,t),e.lanes=n,e}function ff(e){var t=Sn(18,null,null,0);return t.stateNode=e,t}function Ic(e,t,n){return t=Sn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var mf=new WeakMap;function Hn(e,t){if(typeof e=="object"&&e!==null){var n=mf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Zt(t)},mf.set(e,t),t)}return{value:e,source:t,stack:Zt(t)}}var Aa=[],Ca=0,ro=null,Ai=0,Vn=[],In=0,cl=null,gr=1,_r="";function zr(e,t){Aa[Ca++]=Ai,Aa[Ca++]=ro,ro=e,Ai=t}function hf(e,t,n){Vn[In++]=gr,Vn[In++]=_r,Vn[In++]=cl,cl=e;var r=gr;e=_r;var a=32-ot(r)-1;r&=~(1<<a),n+=1;var c=32-ot(t)+a;if(30<c){var h=a-a%5;c=(r&(1<<h)-1).toString(32),r>>=h,a-=h,gr=1<<32-ot(t)+a|n<<a|r,_r=c+e}else gr=1<<c|n<<a|r,_r=e}function Pc(e){e.return!==null&&(zr(e,1),hf(e,1,0))}function Fc(e){for(;e===ro;)ro=Aa[--Ca],Aa[Ca]=null,Ai=Aa[--Ca],Aa[Ca]=null;for(;e===cl;)cl=Vn[--In],Vn[In]=null,_r=Vn[--In],Vn[In]=null,gr=Vn[--In],Vn[In]=null}function pf(e,t){Vn[In++]=gr,Vn[In++]=_r,Vn[In++]=cl,gr=t.id,_r=t.overflow,cl=e}var Yt=null,ct=null,Fe=!1,ul=null,Pn=!1,Gc=Error(s(519));function dl(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ci(Hn(t,e)),Gc}function gf(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[jt]=e,t[gt]=r,n){case"dialog":Ve("cancel",t),Ve("close",t);break;case"iframe":case"object":case"embed":Ve("load",t);break;case"video":case"audio":for(n=0;n<es.length;n++)Ve(es[n],t);break;case"source":Ve("error",t);break;case"img":case"image":case"link":Ve("error",t),Ve("load",t);break;case"details":Ve("toggle",t);break;case"input":Ve("invalid",t),Nr(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ve("invalid",t);break;case"textarea":Ve("invalid",t),sn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||r.suppressHydrationWarning===!0||D1(t.textContent,n)?(r.popover!=null&&(Ve("beforetoggle",t),Ve("toggle",t)),r.onScroll!=null&&Ve("scroll",t),r.onScrollEnd!=null&&Ve("scrollend",t),r.onClick!=null&&(t.onclick=on),t=!0):t=!1,t||dl(e,!0)}function _f(e){for(Yt=e.return;Yt;)switch(Yt.tag){case 5:case 31:case 13:Pn=!1;return;case 27:case 3:Pn=!0;return;default:Yt=Yt.return}}function Da(e){if(e!==Yt)return!1;if(!Fe)return _f(e),Fe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||cd(e.type,e.memoizedProps)),n=!n),n&&ct&&dl(e),_f(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));ct=I1(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));ct=I1(e)}else t===27?(t=ct,El(e.type)?(e=hd,hd=null,ct=e):ct=t):ct=Yt?Gn(e.stateNode.nextSibling):null;return!0}function na(){ct=Yt=null,Fe=!1}function $c(){var e=ul;return e!==null&&(vn===null?vn=e:vn.push.apply(vn,e),ul=null),e}function Ci(e){ul===null?ul=[e]:ul.push(e)}var Yc=E(null),ra=null,Ur=null;function fl(e,t,n){te(Yc,t._currentValue),t._currentValue=n}function qr(e){e._currentValue=Yc.current,z(Yc)}function Xc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Kc(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var c=a.dependencies;if(c!==null){var h=a.child;c=c.firstContext;e:for(;c!==null;){var y=c;c=a;for(var S=0;S<t.length;S++)if(y.context===t[S]){c.lanes|=n,y=c.alternate,y!==null&&(y.lanes|=n),Xc(c.return,n,e),r||(h=null);break e}c=y.next}}else if(a.tag===18){if(h=a.return,h===null)throw Error(s(341));h.lanes|=n,c=h.alternate,c!==null&&(c.lanes|=n),Xc(h,n,e),h=null}else h=a.child;if(h!==null)h.return=a;else for(h=a;h!==null;){if(h===e){h=null;break}if(a=h.sibling,a!==null){a.return=h.return,h=a;break}h=h.return}a=h}}function Oa(e,t,n,r){e=null;for(var a=t,c=!1;a!==null;){if(!c){if((a.flags&524288)!==0)c=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var h=a.alternate;if(h===null)throw Error(s(387));if(h=h.memoizedProps,h!==null){var y=a.type;It(a.pendingProps.value,h.value)||(e!==null?e.push(y):e=[y])}}else if(a===D.current){if(h=a.alternate,h===null)throw Error(s(387));h.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(as):e=[as])}a=a.return}e!==null&&Kc(t,e,n,r),t.flags|=262144}function lo(e){for(e=e.firstContext;e!==null;){if(!It(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function la(e){ra=e,Ur=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xt(e){return vf(ra,e)}function ao(e,t){return ra===null&&la(e),vf(e,t)}function vf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ur===null){if(e===null)throw Error(s(308));Ur=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ur=Ur.next=t;return n}var ap=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},ip=i.unstable_scheduleCallback,sp=i.unstable_NormalPriority,Nt={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qc(){return{controller:new ap,data:new Map,refCount:0}}function Di(e){e.refCount--,e.refCount===0&&ip(sp,function(){e.controller.abort()})}var Oi=null,Wc=0,La=0,Ba=null;function op(e,t){if(Oi===null){var n=Oi=[];Wc=0,La=ed(),Ba={status:"pending",value:void 0,then:function(r){n.push(r)}}}return Wc++,t.then(bf,bf),t}function bf(){if(--Wc===0&&Oi!==null){Ba!==null&&(Ba.status="fulfilled");var e=Oi;Oi=null,La=0,Ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function cp(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(r.status="rejected",r.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),r}var yf=B.S;B.S=function(e,t){r1=dt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&op(e,t),yf!==null&&yf(e,t)};var aa=E(null);function Zc(){var e=aa.current;return e!==null?e:at.pooledCache}function io(e,t){t===null?te(aa,aa.current):te(aa,t.pool)}function xf(){var e=Zc();return e===null?null:{parent:Nt._currentValue,pool:e}}var za=Error(s(460)),Jc=Error(s(474)),so=Error(s(542)),oo={then:function(){}};function wf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function kf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(on,on),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ef(e),e;default:if(typeof t.status=="string")t.then(on,on);else{if(e=at,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=r}},function(r){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ef(e),e}throw sa=t,za}}function ia(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(sa=n,za):n}}var sa=null;function Sf(){if(sa===null)throw Error(s(459));var e=sa;return sa=null,e}function Ef(e){if(e===za||e===so)throw Error(s(483))}var Ua=null,Li=0;function co(e){var t=Li;return Li+=1,Ua===null&&(Ua=[]),kf(Ua,e,t)}function Bi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function uo(e,t){throw t.$$typeof===T?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Tf(e){function t(C,M){if(e){var O=C.deletions;O===null?(C.deletions=[M],C.flags|=16):O.push(M)}}function n(C,M){if(!e)return null;for(;M!==null;)t(C,M),M=M.sibling;return null}function r(C){for(var M=new Map;C!==null;)C.key!==null?M.set(C.key,C):M.set(C.index,C),C=C.sibling;return M}function a(C,M){return C=Br(C,M),C.index=0,C.sibling=null,C}function c(C,M,O){return C.index=O,e?(O=C.alternate,O!==null?(O=O.index,O<M?(C.flags|=67108866,M):O):(C.flags|=67108866,M)):(C.flags|=1048576,M)}function h(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function y(C,M,O,K){return M===null||M.tag!==6?(M=Vc(O,C.mode,K),M.return=C,M):(M=a(M,O),M.return=C,M)}function S(C,M,O,K){var ke=O.type;return ke===G?Y(C,M,O.props.children,K,O.key):M!==null&&(M.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===Z&&ia(ke)===M.type)?(M=a(M,O.props),Bi(M,O),M.return=C,M):(M=no(O.type,O.key,O.props,null,C.mode,K),Bi(M,O),M.return=C,M)}function L(C,M,O,K){return M===null||M.tag!==4||M.stateNode.containerInfo!==O.containerInfo||M.stateNode.implementation!==O.implementation?(M=Ic(O,C.mode,K),M.return=C,M):(M=a(M,O.children||[]),M.return=C,M)}function Y(C,M,O,K,ke){return M===null||M.tag!==7?(M=ta(O,C.mode,K,ke),M.return=C,M):(M=a(M,O),M.return=C,M)}function Q(C,M,O){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=Vc(""+M,C.mode,O),M.return=C,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case U:return O=no(M.type,M.key,M.props,null,C.mode,O),Bi(O,M),O.return=C,O;case N:return M=Ic(M,C.mode,O),M.return=C,M;case Z:return M=ia(M),Q(C,M,O)}if(ue(M)||J(M))return M=ta(M,C.mode,O,null),M.return=C,M;if(typeof M.then=="function")return Q(C,co(M),O);if(M.$$typeof===P)return Q(C,ao(C,M),O);uo(C,M)}return null}function q(C,M,O,K){var ke=M!==null?M.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return ke!==null?null:y(C,M,""+O,K);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case U:return O.key===ke?S(C,M,O,K):null;case N:return O.key===ke?L(C,M,O,K):null;case Z:return O=ia(O),q(C,M,O,K)}if(ue(O)||J(O))return ke!==null?null:Y(C,M,O,K,null);if(typeof O.then=="function")return q(C,M,co(O),K);if(O.$$typeof===P)return q(C,M,ao(C,O),K);uo(C,O)}return null}function F(C,M,O,K,ke){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return C=C.get(O)||null,y(M,C,""+K,ke);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case U:return C=C.get(K.key===null?O:K.key)||null,S(M,C,K,ke);case N:return C=C.get(K.key===null?O:K.key)||null,L(M,C,K,ke);case Z:return K=ia(K),F(C,M,O,K,ke)}if(ue(K)||J(K))return C=C.get(O)||null,Y(M,C,K,ke,null);if(typeof K.then=="function")return F(C,M,O,co(K),ke);if(K.$$typeof===P)return F(C,M,O,ao(M,K),ke);uo(M,K)}return null}function ge(C,M,O,K){for(var ke=null,Ye=null,be=M,Oe=M=0,Pe=null;be!==null&&Oe<O.length;Oe++){be.index>Oe?(Pe=be,be=null):Pe=be.sibling;var Xe=q(C,be,O[Oe],K);if(Xe===null){be===null&&(be=Pe);break}e&&be&&Xe.alternate===null&&t(C,be),M=c(Xe,M,Oe),Ye===null?ke=Xe:Ye.sibling=Xe,Ye=Xe,be=Pe}if(Oe===O.length)return n(C,be),Fe&&zr(C,Oe),ke;if(be===null){for(;Oe<O.length;Oe++)be=Q(C,O[Oe],K),be!==null&&(M=c(be,M,Oe),Ye===null?ke=be:Ye.sibling=be,Ye=be);return Fe&&zr(C,Oe),ke}for(be=r(be);Oe<O.length;Oe++)Pe=F(be,C,Oe,O[Oe],K),Pe!==null&&(e&&Pe.alternate!==null&&be.delete(Pe.key===null?Oe:Pe.key),M=c(Pe,M,Oe),Ye===null?ke=Pe:Ye.sibling=Pe,Ye=Pe);return e&&be.forEach(function(Rl){return t(C,Rl)}),Fe&&zr(C,Oe),ke}function Me(C,M,O,K){if(O==null)throw Error(s(151));for(var ke=null,Ye=null,be=M,Oe=M=0,Pe=null,Xe=O.next();be!==null&&!Xe.done;Oe++,Xe=O.next()){be.index>Oe?(Pe=be,be=null):Pe=be.sibling;var Rl=q(C,be,Xe.value,K);if(Rl===null){be===null&&(be=Pe);break}e&&be&&Rl.alternate===null&&t(C,be),M=c(Rl,M,Oe),Ye===null?ke=Rl:Ye.sibling=Rl,Ye=Rl,be=Pe}if(Xe.done)return n(C,be),Fe&&zr(C,Oe),ke;if(be===null){for(;!Xe.done;Oe++,Xe=O.next())Xe=Q(C,Xe.value,K),Xe!==null&&(M=c(Xe,M,Oe),Ye===null?ke=Xe:Ye.sibling=Xe,Ye=Xe);return Fe&&zr(C,Oe),ke}for(be=r(be);!Xe.done;Oe++,Xe=O.next())Xe=F(be,C,Oe,Xe.value,K),Xe!==null&&(e&&Xe.alternate!==null&&be.delete(Xe.key===null?Oe:Xe.key),M=c(Xe,M,Oe),Ye===null?ke=Xe:Ye.sibling=Xe,Ye=Xe);return e&&be.forEach(function(y2){return t(C,y2)}),Fe&&zr(C,Oe),ke}function lt(C,M,O,K){if(typeof O=="object"&&O!==null&&O.type===G&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case U:e:{for(var ke=O.key;M!==null;){if(M.key===ke){if(ke=O.type,ke===G){if(M.tag===7){n(C,M.sibling),K=a(M,O.props.children),K.return=C,C=K;break e}}else if(M.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===Z&&ia(ke)===M.type){n(C,M.sibling),K=a(M,O.props),Bi(K,O),K.return=C,C=K;break e}n(C,M);break}else t(C,M);M=M.sibling}O.type===G?(K=ta(O.props.children,C.mode,K,O.key),K.return=C,C=K):(K=no(O.type,O.key,O.props,null,C.mode,K),Bi(K,O),K.return=C,C=K)}return h(C);case N:e:{for(ke=O.key;M!==null;){if(M.key===ke)if(M.tag===4&&M.stateNode.containerInfo===O.containerInfo&&M.stateNode.implementation===O.implementation){n(C,M.sibling),K=a(M,O.children||[]),K.return=C,C=K;break e}else{n(C,M);break}else t(C,M);M=M.sibling}K=Ic(O,C.mode,K),K.return=C,C=K}return h(C);case Z:return O=ia(O),lt(C,M,O,K)}if(ue(O))return ge(C,M,O,K);if(J(O)){if(ke=J(O),typeof ke!="function")throw Error(s(150));return O=ke.call(O),Me(C,M,O,K)}if(typeof O.then=="function")return lt(C,M,co(O),K);if(O.$$typeof===P)return lt(C,M,ao(C,O),K);uo(C,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,M!==null&&M.tag===6?(n(C,M.sibling),K=a(M,O),K.return=C,C=K):(n(C,M),K=Vc(O,C.mode,K),K.return=C,C=K),h(C)):n(C,M)}return function(C,M,O,K){try{Li=0;var ke=lt(C,M,O,K);return Ua=null,ke}catch(be){if(be===za||be===so)throw be;var Ye=Sn(29,be,null,C.mode);return Ye.lanes=K,Ye.return=C,Ye}finally{}}}var oa=Tf(!0),Mf=Tf(!1),ml=!1;function eu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function hl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pl(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ze&2)!==0){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=to(e),uf(e,null,n),t}return eo(e,r,t,n),to(e)}function zi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sr(e,n)}}function nu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?a=c=h:c=c.next=h,n=n.next}while(n!==null);c===null?a=c=t:c=c.next=t}else a=c=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ru=!1;function Ui(){if(ru){var e=Ba;if(e!==null)throw e}}function qi(e,t,n,r){ru=!1;var a=e.updateQueue;ml=!1;var c=a.firstBaseUpdate,h=a.lastBaseUpdate,y=a.shared.pending;if(y!==null){a.shared.pending=null;var S=y,L=S.next;S.next=null,h===null?c=L:h.next=L,h=S;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,y=Y.lastBaseUpdate,y!==h&&(y===null?Y.firstBaseUpdate=L:y.next=L,Y.lastBaseUpdate=S))}if(c!==null){var Q=a.baseState;h=0,Y=L=S=null,y=c;do{var q=y.lane&-536870913,F=q!==y.lane;if(F?(Ie&q)===q:(r&q)===q){q!==0&&q===La&&(ru=!0),Y!==null&&(Y=Y.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var ge=e,Me=y;q=t;var lt=n;switch(Me.tag){case 1:if(ge=Me.payload,typeof ge=="function"){Q=ge.call(lt,Q,q);break e}Q=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=Me.payload,q=typeof ge=="function"?ge.call(lt,Q,q):ge,q==null)break e;Q=k({},Q,q);break e;case 2:ml=!0}}q=y.callback,q!==null&&(e.flags|=64,F&&(e.flags|=8192),F=a.callbacks,F===null?a.callbacks=[q]:F.push(q))}else F={lane:q,tag:y.tag,payload:y.payload,callback:y.callback,next:null},Y===null?(L=Y=F,S=Q):Y=Y.next=F,h|=q;if(y=y.next,y===null){if(y=a.shared.pending,y===null)break;F=y,y=F.next,F.next=null,a.lastBaseUpdate=F,a.shared.pending=null}}while(!0);Y===null&&(S=Q),a.baseState=S,a.firstBaseUpdate=L,a.lastBaseUpdate=Y,c===null&&(a.shared.lanes=0),yl|=h,e.lanes=h,e.memoizedState=Q}}function jf(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Nf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)jf(n[e],t)}var qa=E(null),fo=E(0);function Rf(e,t){e=Xr,te(fo,e),te(qa,t),Xr=e|t.baseLanes}function lu(){te(fo,Xr),te(qa,qa.current)}function au(){Xr=fo.current,z(qa),z(fo)}var En=E(null),Fn=null;function gl(e){var t=e.alternate;te(Et,Et.current&1),te(En,e),Fn===null&&(t===null||qa.current!==null||t.memoizedState!==null)&&(Fn=e)}function iu(e){te(Et,Et.current),te(En,e),Fn===null&&(Fn=e)}function Af(e){e.tag===22?(te(Et,Et.current),te(En,e),Fn===null&&(Fn=e)):_l()}function _l(){te(Et,Et.current),te(En,En.current)}function Tn(e){z(En),Fn===e&&(Fn=null),z(Et)}var Et=E(0);function mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||fd(n)||md(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hr=0,De=null,nt=null,Rt=null,ho=!1,Ha=!1,ca=!1,po=0,Hi=0,Va=null,up=0;function xt(){throw Error(s(321))}function su(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!It(e[n],t[n]))return!1;return!0}function ou(e,t,n,r,a,c){return Hr=c,De=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?h0:ku,ca=!1,c=n(r,a),ca=!1,Ha&&(c=Df(t,n,r,a)),Cf(e),c}function Cf(e){B.H=Pi;var t=nt!==null&&nt.next!==null;if(Hr=0,Rt=nt=De=null,ho=!1,Hi=0,Va=null,t)throw Error(s(300));e===null||At||(e=e.dependencies,e!==null&&lo(e)&&(At=!0))}function Df(e,t,n,r){De=e;var a=0;do{if(Ha&&(Va=null),Hi=0,Ha=!1,25<=a)throw Error(s(301));if(a+=1,Rt=nt=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}B.H=p0,c=t(n,r)}while(Ha);return c}function dp(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?Vi(t):t,e=e.useState()[0],(nt!==null?nt.memoizedState:null)!==e&&(De.flags|=1024),t}function cu(){var e=po!==0;return po=0,e}function uu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function du(e){if(ho){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ho=!1}Hr=0,Rt=nt=De=null,Ha=!1,Hi=po=0,Va=null}function cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?De.memoizedState=Rt=e:Rt=Rt.next=e,Rt}function Tt(){if(nt===null){var e=De.alternate;e=e!==null?e.memoizedState:null}else e=nt.next;var t=Rt===null?De.memoizedState:Rt.next;if(t!==null)Rt=t,nt=e;else{if(e===null)throw De.alternate===null?Error(s(467)):Error(s(310));nt=e,e={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},Rt===null?De.memoizedState=Rt=e:Rt=Rt.next=e}return Rt}function go(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vi(e){var t=Hi;return Hi+=1,Va===null&&(Va=[]),e=kf(Va,e,t),t=De,(Rt===null?t.memoizedState:Rt.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?h0:ku),e}function _o(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Vi(e);if(e.$$typeof===P)return Xt(e)}throw Error(s(438,String(e)))}function fu(e){var t=null,n=De.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=De.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=go(),De.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=Ee;return t.index++,n}function Vr(e,t){return typeof t=="function"?t(e):t}function vo(e){var t=Tt();return mu(t,nt,e)}function mu(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var a=e.baseQueue,c=r.pending;if(c!==null){if(a!==null){var h=a.next;a.next=c.next,c.next=h}t.baseQueue=a=c,r.pending=null}if(c=e.baseState,a===null)e.memoizedState=c;else{t=a.next;var y=h=null,S=null,L=t,Y=!1;do{var Q=L.lane&-536870913;if(Q!==L.lane?(Ie&Q)===Q:(Hr&Q)===Q){var q=L.revertLane;if(q===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),Q===La&&(Y=!0);else if((Hr&q)===q){L=L.next,q===La&&(Y=!0);continue}else Q={lane:0,revertLane:L.revertLane,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},S===null?(y=S=Q,h=c):S=S.next=Q,De.lanes|=q,yl|=q;Q=L.action,ca&&n(c,Q),c=L.hasEagerState?L.eagerState:n(c,Q)}else q={lane:Q,revertLane:L.revertLane,gesture:L.gesture,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},S===null?(y=S=q,h=c):S=S.next=q,De.lanes|=Q,yl|=Q;L=L.next}while(L!==null&&L!==t);if(S===null?h=c:S.next=y,!It(c,e.memoizedState)&&(At=!0,Y&&(n=Ba,n!==null)))throw n;e.memoizedState=c,e.baseState=h,e.baseQueue=S,r.lastRenderedState=c}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function hu(e){var t=Tt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,c=t.memoizedState;if(a!==null){n.pending=null;var h=a=a.next;do c=e(c,h.action),h=h.next;while(h!==a);It(c,t.memoizedState)||(At=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,r]}function Of(e,t,n){var r=De,a=Tt(),c=Fe;if(c){if(n===void 0)throw Error(s(407));n=n()}else n=t();var h=!It((nt||a).memoizedState,n);if(h&&(a.memoizedState=n,At=!0),a=a.queue,_u(zf.bind(null,r,a,e),[e]),a.getSnapshot!==t||h||Rt!==null&&Rt.memoizedState.tag&1){if(r.flags|=2048,Ia(9,{destroy:void 0},Bf.bind(null,r,a,n,t),null),at===null)throw Error(s(349));c||(Hr&127)!==0||Lf(r,t,n)}return n}function Lf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=De.updateQueue,t===null?(t=go(),De.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bf(e,t,n,r){t.value=n,t.getSnapshot=r,Uf(t)&&qf(e)}function zf(e,t,n){return n(function(){Uf(t)&&qf(e)})}function Uf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!It(e,n)}catch{return!0}}function qf(e){var t=ea(e,2);t!==null&&bn(t,e,2)}function pu(e){var t=cn();if(typeof e=="function"){var n=e;if(e=n(),ca){bt(!0);try{n()}finally{bt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vr,lastRenderedState:e},t}function Hf(e,t,n,r){return e.baseState=n,mu(e,nt,typeof r=="function"?r:Vr)}function fp(e,t,n,r,a){if(xo(e))throw Error(s(485));if(e=t.action,e!==null){var c={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){c.listeners.push(h)}};B.T!==null?n(!0):c.isTransition=!1,r(c),n=t.pending,n===null?(c.next=t.pending=c,Vf(t,c)):(c.next=n.next,t.pending=n.next=c)}}function Vf(e,t){var n=t.action,r=t.payload,a=e.state;if(t.isTransition){var c=B.T,h={};B.T=h;try{var y=n(a,r),S=B.S;S!==null&&S(h,y),If(e,t,y)}catch(L){gu(e,t,L)}finally{c!==null&&h.types!==null&&(c.types=h.types),B.T=c}}else try{c=n(a,r),If(e,t,c)}catch(L){gu(e,t,L)}}function If(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){Pf(e,t,r)},function(r){return gu(e,t,r)}):Pf(e,t,n)}function Pf(e,t,n){t.status="fulfilled",t.value=n,Ff(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Vf(e,n)))}function gu(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=n,Ff(t),t=t.next;while(t!==r)}e.action=null}function Ff(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Gf(e,t){return t}function $f(e,t){if(Fe){var n=at.formState;if(n!==null){e:{var r=De;if(Fe){if(ct){t:{for(var a=ct,c=Pn;a.nodeType!==8;){if(!c){a=null;break t}if(a=Gn(a.nextSibling),a===null){a=null;break t}}c=a.data,a=c==="F!"||c==="F"?a:null}if(a){ct=Gn(a.nextSibling),r=a.data==="F!";break e}}dl(r)}r=!1}r&&(t=n[0])}}return n=cn(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gf,lastRenderedState:t},n.queue=r,n=d0.bind(null,De,r),r.dispatch=n,r=pu(!1),c=wu.bind(null,De,!1,r.queue),r=cn(),a={state:t,dispatch:null,action:e,pending:null},r.queue=a,n=fp.bind(null,De,a,c,n),a.dispatch=n,r.memoizedState=e,[t,n,!1]}function Yf(e){var t=Tt();return Xf(t,nt,e)}function Xf(e,t,n){if(t=mu(e,t,Gf)[0],e=vo(Vr)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=Vi(t)}catch(h){throw h===za?so:h}else r=t;t=Tt();var a=t.queue,c=a.dispatch;return n!==t.memoizedState&&(De.flags|=2048,Ia(9,{destroy:void 0},mp.bind(null,a,n),null)),[r,c,e]}function mp(e,t){e.action=t}function Kf(e){var t=Tt(),n=nt;if(n!==null)return Xf(t,n,e);Tt(),t=t.memoizedState,n=Tt();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Ia(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=De.updateQueue,t===null&&(t=go(),De.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Qf(){return Tt().memoizedState}function bo(e,t,n,r){var a=cn();De.flags|=e,a.memoizedState=Ia(1|t,{destroy:void 0},n,r===void 0?null:r)}function yo(e,t,n,r){var a=Tt();r=r===void 0?null:r;var c=a.memoizedState.inst;nt!==null&&r!==null&&su(r,nt.memoizedState.deps)?a.memoizedState=Ia(t,c,n,r):(De.flags|=e,a.memoizedState=Ia(1|t,c,n,r))}function Wf(e,t){bo(8390656,8,e,t)}function _u(e,t){yo(2048,8,e,t)}function hp(e){De.flags|=4;var t=De.updateQueue;if(t===null)t=go(),De.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Zf(e){var t=Tt().memoizedState;return hp({ref:t,nextImpl:e}),function(){if((Ze&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Jf(e,t){return yo(4,2,e,t)}function e0(e,t){return yo(4,4,e,t)}function t0(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function n0(e,t,n){n=n!=null?n.concat([e]):null,yo(4,4,t0.bind(null,t,e),n)}function vu(){}function r0(e,t){var n=Tt();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&su(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function l0(e,t){var n=Tt();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&su(t,r[1]))return r[0];if(r=e(),ca){bt(!0);try{e()}finally{bt(!1)}}return n.memoizedState=[r,t],r}function bu(e,t,n){return n===void 0||(Hr&1073741824)!==0&&(Ie&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=a1(),De.lanes|=e,yl|=e,n)}function a0(e,t,n,r){return It(n,t)?n:qa.current!==null?(e=bu(e,n,r),It(e,t)||(At=!0),e):(Hr&42)===0||(Hr&1073741824)!==0&&(Ie&261930)===0?(At=!0,e.memoizedState=n):(e=a1(),De.lanes|=e,yl|=e,t)}function i0(e,t,n,r,a){var c=ne.p;ne.p=c!==0&&8>c?c:8;var h=B.T,y={};B.T=y,wu(e,!1,t,n);try{var S=a(),L=B.S;if(L!==null&&L(y,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var Y=cp(S,r);Ii(e,t,Y,Nn(e))}else Ii(e,t,r,Nn(e))}catch(Q){Ii(e,t,{then:function(){},status:"rejected",reason:Q},Nn())}finally{ne.p=c,h!==null&&y.types!==null&&(h.types=y.types),B.T=h}}function pp(){}function yu(e,t,n,r){if(e.tag!==5)throw Error(s(476));var a=s0(e).queue;i0(e,a,t,pe,n===null?pp:function(){return o0(e),n(r)})}function s0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:pe,baseState:pe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vr,lastRenderedState:pe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vr,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function o0(e){var t=s0(e);t.next===null&&(t=e.alternate.memoizedState),Ii(e,t.next.queue,{},Nn())}function xu(){return Xt(as)}function c0(){return Tt().memoizedState}function u0(){return Tt().memoizedState}function gp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Nn();e=hl(n);var r=pl(t,e,n);r!==null&&(bn(r,t,n),zi(r,t,n)),t={cache:Qc()},e.payload=t;return}t=t.return}}function _p(e,t,n){var r=Nn();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},xo(e)?f0(t,n):(n=qc(e,t,n,r),n!==null&&(bn(n,e,r),m0(n,t,r)))}function d0(e,t,n){var r=Nn();Ii(e,t,n,r)}function Ii(e,t,n,r){var a={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(xo(e))f0(t,a);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var h=t.lastRenderedState,y=c(h,n);if(a.hasEagerState=!0,a.eagerState=y,It(y,h))return eo(e,t,a,0),at===null&&Jl(),!1}catch{}finally{}if(n=qc(e,t,a,r),n!==null)return bn(n,e,r),m0(n,t,r),!0}return!1}function wu(e,t,n,r){if(r={lane:2,revertLane:ed(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},xo(e)){if(t)throw Error(s(479))}else t=qc(e,n,r,2),t!==null&&bn(t,e,2)}function xo(e){var t=e.alternate;return e===De||t!==null&&t===De}function f0(e,t){Ha=ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function m0(e,t,n){if((n&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sr(e,n)}}var Pi={readContext:Xt,use:_o,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useLayoutEffect:xt,useInsertionEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useSyncExternalStore:xt,useId:xt,useHostTransitionStatus:xt,useFormState:xt,useActionState:xt,useOptimistic:xt,useMemoCache:xt,useCacheRefresh:xt};Pi.useEffectEvent=xt;var h0={readContext:Xt,use:_o,useCallback:function(e,t){return cn().memoizedState=[e,t===void 0?null:t],e},useContext:Xt,useEffect:Wf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,bo(4194308,4,t0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return bo(4194308,4,e,t)},useInsertionEffect:function(e,t){bo(4,2,e,t)},useMemo:function(e,t){var n=cn();t=t===void 0?null:t;var r=e();if(ca){bt(!0);try{e()}finally{bt(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=cn();if(n!==void 0){var a=n(t);if(ca){bt(!0);try{n(t)}finally{bt(!1)}}}else a=t;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=_p.bind(null,De,e),[r.memoizedState,e]},useRef:function(e){var t=cn();return e={current:e},t.memoizedState=e},useState:function(e){e=pu(e);var t=e.queue,n=d0.bind(null,De,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vu,useDeferredValue:function(e,t){var n=cn();return bu(n,e,t)},useTransition:function(){var e=pu(!1);return e=i0.bind(null,De,e.queue,!0,!1),cn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=De,a=cn();if(Fe){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),at===null)throw Error(s(349));(Ie&127)!==0||Lf(r,t,n)}a.memoizedState=n;var c={value:n,getSnapshot:t};return a.queue=c,Wf(zf.bind(null,r,c,e),[e]),r.flags|=2048,Ia(9,{destroy:void 0},Bf.bind(null,r,c,n,t),null),n},useId:function(){var e=cn(),t=at.identifierPrefix;if(Fe){var n=_r,r=gr;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,t="_"+t+"R_"+n,n=po++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=up++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:xu,useFormState:$f,useActionState:$f,useOptimistic:function(e){var t=cn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=wu.bind(null,De,!0,n),n.dispatch=t,[e,t]},useMemoCache:fu,useCacheRefresh:function(){return cn().memoizedState=gp.bind(null,De)},useEffectEvent:function(e){var t=cn(),n={impl:e};return t.memoizedState=n,function(){if((Ze&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},ku={readContext:Xt,use:_o,useCallback:r0,useContext:Xt,useEffect:_u,useImperativeHandle:n0,useInsertionEffect:Jf,useLayoutEffect:e0,useMemo:l0,useReducer:vo,useRef:Qf,useState:function(){return vo(Vr)},useDebugValue:vu,useDeferredValue:function(e,t){var n=Tt();return a0(n,nt.memoizedState,e,t)},useTransition:function(){var e=vo(Vr)[0],t=Tt().memoizedState;return[typeof e=="boolean"?e:Vi(e),t]},useSyncExternalStore:Of,useId:c0,useHostTransitionStatus:xu,useFormState:Yf,useActionState:Yf,useOptimistic:function(e,t){var n=Tt();return Hf(n,nt,e,t)},useMemoCache:fu,useCacheRefresh:u0};ku.useEffectEvent=Zf;var p0={readContext:Xt,use:_o,useCallback:r0,useContext:Xt,useEffect:_u,useImperativeHandle:n0,useInsertionEffect:Jf,useLayoutEffect:e0,useMemo:l0,useReducer:hu,useRef:Qf,useState:function(){return hu(Vr)},useDebugValue:vu,useDeferredValue:function(e,t){var n=Tt();return nt===null?bu(n,e,t):a0(n,nt.memoizedState,e,t)},useTransition:function(){var e=hu(Vr)[0],t=Tt().memoizedState;return[typeof e=="boolean"?e:Vi(e),t]},useSyncExternalStore:Of,useId:c0,useHostTransitionStatus:xu,useFormState:Kf,useActionState:Kf,useOptimistic:function(e,t){var n=Tt();return nt!==null?Hf(n,nt,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:fu,useCacheRefresh:u0};p0.useEffectEvent=Zf;function Su(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:k({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Eu={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Nn(),a=hl(r);a.payload=t,n!=null&&(a.callback=n),t=pl(e,a,r),t!==null&&(bn(t,e,r),zi(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Nn(),a=hl(r);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=pl(e,a,r),t!==null&&(bn(t,e,r),zi(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Nn(),r=hl(n);r.tag=2,t!=null&&(r.callback=t),t=pl(e,r,n),t!==null&&(bn(t,e,n),zi(t,e,n))}};function g0(e,t,n,r,a,c,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,c,h):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(a,c):!0}function _0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Eu.enqueueReplaceState(t,t.state,null)}function ua(e,t){var n=t;if("ref"in t){n={};for(var r in t)r!=="ref"&&(n[r]=t[r])}if(e=e.defaultProps){n===t&&(n=k({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function v0(e){Zl(e)}function b0(e){console.error(e)}function y0(e){Zl(e)}function wo(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function x0(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Tu(e,t,n){return n=hl(n),n.tag=3,n.payload={element:null},n.callback=function(){wo(e,t)},n}function w0(e){return e=hl(e),e.tag=3,e}function k0(e,t,n,r){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var c=r.value;e.payload=function(){return a(c)},e.callback=function(){x0(t,n,r)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){x0(t,n,r),typeof a!="function"&&(xl===null?xl=new Set([this]):xl.add(this));var y=r.stack;this.componentDidCatch(r.value,{componentStack:y!==null?y:""})})}function vp(e,t,n,r,a){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=n.alternate,t!==null&&Oa(t,n,a,!0),n=En.current,n!==null){switch(n.tag){case 31:case 13:return Fn===null?Oo():n.alternate===null&&wt===0&&(wt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===oo?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Wu(e,r,a)),!1;case 22:return n.flags|=65536,r===oo?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Wu(e,r,a)),!1}throw Error(s(435,n.tag))}return Wu(e,r,a),Oo(),!1}if(Fe)return t=En.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Gc&&(e=Error(s(422),{cause:r}),Ci(Hn(e,n)))):(r!==Gc&&(t=Error(s(423),{cause:r}),Ci(Hn(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Hn(r,n),a=Tu(e.stateNode,r,a),nu(e,a),wt!==4&&(wt=2)),!1;var c=Error(s(520),{cause:r});if(c=Hn(c,n),Wi===null?Wi=[c]:Wi.push(c),wt!==4&&(wt=2),t===null)return!0;r=Hn(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Tu(n.stateNode,r,e),nu(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(xl===null||!xl.has(c))))return n.flags|=65536,a&=-a,n.lanes|=a,a=w0(a),k0(a,e,n,r),nu(n,a),!1}n=n.return}while(n!==null);return!1}var Mu=Error(s(461)),At=!1;function Kt(e,t,n,r){t.child=e===null?Mf(t,null,n,r):oa(t,e.child,n,r)}function S0(e,t,n,r,a){n=n.render;var c=t.ref;if("ref"in r){var h={};for(var y in r)y!=="ref"&&(h[y]=r[y])}else h=r;return la(t),r=ou(e,t,n,h,c,a),y=cu(),e!==null&&!At?(uu(e,t,a),Ir(e,t,a)):(Fe&&y&&Pc(t),t.flags|=1,Kt(e,t,r,a),t.child)}function E0(e,t,n,r,a){if(e===null){var c=n.type;return typeof c=="function"&&!Hc(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,T0(e,t,c,r,a)):(e=no(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Lu(e,a)){var h=c.memoizedProps;if(n=n.compare,n=n!==null?n:Cr,n(h,r)&&e.ref===t.ref)return Ir(e,t,a)}return t.flags|=1,e=Br(c,r),e.ref=t.ref,e.return=t,t.child=e}function T0(e,t,n,r,a){if(e!==null){var c=e.memoizedProps;if(Cr(c,r)&&e.ref===t.ref)if(At=!1,t.pendingProps=r=c,Lu(e,a))(e.flags&131072)!==0&&(At=!0);else return t.lanes=e.lanes,Ir(e,t,a)}return ju(e,t,n,r,a)}function M0(e,t,n,r){var a=r.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(r=t.child=e.child,a=0;r!==null;)a=a|r.lanes|r.childLanes,r=r.sibling;r=a&~c}else r=0,t.child=null;return j0(e,t,c,n,r)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&io(t,c!==null?c.cachePool:null),c!==null?Rf(t,c):lu(),Af(t);else return r=t.lanes=536870912,j0(e,t,c!==null?c.baseLanes|n:n,n,r)}else c!==null?(io(t,c.cachePool),Rf(t,c),_l(),t.memoizedState=null):(e!==null&&io(t,null),lu(),_l());return Kt(e,t,a,n),t.child}function Fi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function j0(e,t,n,r,a){var c=Zc();return c=c===null?null:{parent:Nt._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&io(t,null),lu(),Af(t),e!==null&&Oa(e,t,r,!0),t.childLanes=a,null}function ko(e,t){return t=Eo({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function N0(e,t,n){return oa(t,e.child,null,n),e=ko(t,t.pendingProps),e.flags|=2,Tn(t),t.memoizedState=null,e}function bp(e,t,n){var r=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Fe){if(r.mode==="hidden")return e=ko(t,r),t.lanes=536870912,Fi(null,e);if(iu(t),(e=ct)?(e=V1(e,Pn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:cl!==null?{id:gr,overflow:_r}:null,retryLane:536870912,hydrationErrors:null},n=ff(e),n.return=t,t.child=n,Yt=t,ct=null)):e=null,e===null)throw dl(t);return t.lanes=536870912,null}return ko(t,r)}var c=e.memoizedState;if(c!==null){var h=c.dehydrated;if(iu(t),a)if(t.flags&256)t.flags&=-257,t=N0(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(At||Oa(e,t,n,!1),a=(n&e.childLanes)!==0,At||a){if(r=at,r!==null&&(h=Ms(r,n),h!==0&&h!==c.retryLane))throw c.retryLane=h,ea(e,h),bn(r,e,h),Mu;Oo(),t=N0(e,t,n)}else e=c.treeContext,ct=Gn(h.nextSibling),Yt=t,Fe=!0,ul=null,Pn=!1,e!==null&&pf(t,e),t=ko(t,r),t.flags|=4096;return t}return e=Br(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function So(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ju(e,t,n,r,a){return la(t),n=ou(e,t,n,r,void 0,a),r=cu(),e!==null&&!At?(uu(e,t,a),Ir(e,t,a)):(Fe&&r&&Pc(t),t.flags|=1,Kt(e,t,n,a),t.child)}function R0(e,t,n,r,a,c){return la(t),t.updateQueue=null,n=Df(t,r,n,a),Cf(e),r=cu(),e!==null&&!At?(uu(e,t,c),Ir(e,t,c)):(Fe&&r&&Pc(t),t.flags|=1,Kt(e,t,n,c),t.child)}function A0(e,t,n,r,a){if(la(t),t.stateNode===null){var c=Ra,h=n.contextType;typeof h=="object"&&h!==null&&(c=Xt(h)),c=new n(r,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Eu,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=r,c.state=t.memoizedState,c.refs={},eu(t),h=n.contextType,c.context=typeof h=="object"&&h!==null?Xt(h):Ra,c.state=t.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(Su(t,n,h,r),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(h=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),h!==c.state&&Eu.enqueueReplaceState(c,c.state,null),qi(t,r,c,a),Ui(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){c=t.stateNode;var y=t.memoizedProps,S=ua(n,y);c.props=S;var L=c.context,Y=n.contextType;h=Ra,typeof Y=="object"&&Y!==null&&(h=Xt(Y));var Q=n.getDerivedStateFromProps;Y=typeof Q=="function"||typeof c.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,Y||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y||L!==h)&&_0(t,c,r,h),ml=!1;var q=t.memoizedState;c.state=q,qi(t,r,c,a),Ui(),L=t.memoizedState,y||q!==L||ml?(typeof Q=="function"&&(Su(t,n,Q,r),L=t.memoizedState),(S=ml||g0(t,n,S,r,q,L,h))?(Y||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=L),c.props=r,c.state=L,c.context=h,r=S):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{c=t.stateNode,tu(e,t),h=t.memoizedProps,Y=ua(n,h),c.props=Y,Q=t.pendingProps,q=c.context,L=n.contextType,S=Ra,typeof L=="object"&&L!==null&&(S=Xt(L)),y=n.getDerivedStateFromProps,(L=typeof y=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(h!==Q||q!==S)&&_0(t,c,r,S),ml=!1,q=t.memoizedState,c.state=q,qi(t,r,c,a),Ui();var F=t.memoizedState;h!==Q||q!==F||ml||e!==null&&e.dependencies!==null&&lo(e.dependencies)?(typeof y=="function"&&(Su(t,n,y,r),F=t.memoizedState),(Y=ml||g0(t,n,Y,r,q,F,S)||e!==null&&e.dependencies!==null&&lo(e.dependencies))?(L||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,F,S),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,F,S)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=F),c.props=r,c.state=F,c.context=S,r=Y):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),r=!1)}return c=r,So(e,t),r=(t.flags&128)!==0,c||r?(c=t.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&r?(t.child=oa(t,e.child,null,a),t.child=oa(t,null,n,a)):Kt(e,t,n,a),t.memoizedState=c.state,e=t.child):e=Ir(e,t,a),e}function C0(e,t,n,r){return na(),t.flags|=256,Kt(e,t,n,r),t.child}var Nu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ru(e){return{baseLanes:e,cachePool:xf()}}function Au(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=jn),e}function D0(e,t,n){var r=t.pendingProps,a=!1,c=(t.flags&128)!==0,h;if((h=c)||(h=e!==null&&e.memoizedState===null?!1:(Et.current&2)!==0),h&&(a=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(Fe){if(a?gl(t):_l(),(e=ct)?(e=V1(e,Pn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:cl!==null?{id:gr,overflow:_r}:null,retryLane:536870912,hydrationErrors:null},n=ff(e),n.return=t,t.child=n,Yt=t,ct=null)):e=null,e===null)throw dl(t);return md(e)?t.lanes=32:t.lanes=536870912,null}var y=r.children;return r=r.fallback,a?(_l(),a=t.mode,y=Eo({mode:"hidden",children:y},a),r=ta(r,a,n,null),y.return=t,r.return=t,y.sibling=r,t.child=y,r=t.child,r.memoizedState=Ru(n),r.childLanes=Au(e,h,n),t.memoizedState=Nu,Fi(null,r)):(gl(t),Cu(t,y))}var S=e.memoizedState;if(S!==null&&(y=S.dehydrated,y!==null)){if(c)t.flags&256?(gl(t),t.flags&=-257,t=Du(e,t,n)):t.memoizedState!==null?(_l(),t.child=e.child,t.flags|=128,t=null):(_l(),y=r.fallback,a=t.mode,r=Eo({mode:"visible",children:r.children},a),y=ta(y,a,n,null),y.flags|=2,r.return=t,y.return=t,r.sibling=y,t.child=r,oa(t,e.child,null,n),r=t.child,r.memoizedState=Ru(n),r.childLanes=Au(e,h,n),t.memoizedState=Nu,t=Fi(null,r));else if(gl(t),md(y)){if(h=y.nextSibling&&y.nextSibling.dataset,h)var L=h.dgst;h=L,r=Error(s(419)),r.stack="",r.digest=h,Ci({value:r,source:null,stack:null}),t=Du(e,t,n)}else if(At||Oa(e,t,n,!1),h=(n&e.childLanes)!==0,At||h){if(h=at,h!==null&&(r=Ms(h,n),r!==0&&r!==S.retryLane))throw S.retryLane=r,ea(e,r),bn(h,e,r),Mu;fd(y)||Oo(),t=Du(e,t,n)}else fd(y)?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,ct=Gn(y.nextSibling),Yt=t,Fe=!0,ul=null,Pn=!1,e!==null&&pf(t,e),t=Cu(t,r.children),t.flags|=4096);return t}return a?(_l(),y=r.fallback,a=t.mode,S=e.child,L=S.sibling,r=Br(S,{mode:"hidden",children:r.children}),r.subtreeFlags=S.subtreeFlags&65011712,L!==null?y=Br(L,y):(y=ta(y,a,n,null),y.flags|=2),y.return=t,r.return=t,r.sibling=y,t.child=r,Fi(null,r),r=t.child,y=e.child.memoizedState,y===null?y=Ru(n):(a=y.cachePool,a!==null?(S=Nt._currentValue,a=a.parent!==S?{parent:S,pool:S}:a):a=xf(),y={baseLanes:y.baseLanes|n,cachePool:a}),r.memoizedState=y,r.childLanes=Au(e,h,n),t.memoizedState=Nu,Fi(e.child,r)):(gl(t),n=e.child,e=n.sibling,n=Br(n,{mode:"visible",children:r.children}),n.return=t,n.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=n,t.memoizedState=null,n)}function Cu(e,t){return t=Eo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Eo(e,t){return e=Sn(22,e,null,t),e.lanes=0,e}function Du(e,t,n){return oa(t,e.child,null,n),e=Cu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function O0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xc(e.return,t,n)}function Ou(e,t,n,r,a,c){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a,treeForkCount:c}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=r,h.tail=n,h.tailMode=a,h.treeForkCount=c)}function L0(e,t,n){var r=t.pendingProps,a=r.revealOrder,c=r.tail;r=r.children;var h=Et.current,y=(h&2)!==0;if(y?(h=h&1|2,t.flags|=128):h&=1,te(Et,h),Kt(e,t,r,n),r=Fe?Ai:0,!y&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&O0(e,n,t);else if(e.tag===19)O0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&mo(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ou(t,!1,a,n,c,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&mo(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ou(t,!0,n,null,c,r);break;case"together":Ou(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ir(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Oa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Br(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Br(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Lu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&lo(e)))}function yp(e,t,n){switch(t.tag){case 3:oe(t,t.stateNode.containerInfo),fl(t,Nt,e.memoizedState.cache),na();break;case 27:case 5:Ue(t);break;case 4:oe(t,t.stateNode.containerInfo);break;case 10:fl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,iu(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(gl(t),t.flags|=128,null):(n&t.child.childLanes)!==0?D0(e,t,n):(gl(t),e=Ir(e,t,n),e!==null?e.sibling:null);gl(t);break;case 19:var a=(e.flags&128)!==0;if(r=(n&t.childLanes)!==0,r||(Oa(e,t,n,!1),r=(n&t.childLanes)!==0),a){if(r)return L0(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),te(Et,Et.current),r)break;return null;case 22:return t.lanes=0,M0(e,t,n,t.pendingProps);case 24:fl(t,Nt,e.memoizedState.cache)}return Ir(e,t,n)}function B0(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)At=!0;else{if(!Lu(e,n)&&(t.flags&128)===0)return At=!1,yp(e,t,n);At=(e.flags&131072)!==0}else At=!1,Fe&&(t.flags&1048576)!==0&&hf(t,Ai,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=ia(t.elementType),t.type=e,typeof e=="function")Hc(e)?(r=ua(e,r),t.tag=1,t=A0(null,t,e,r,n)):(t.tag=0,t=ju(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===re){t.tag=11,t=S0(null,t,e,r,n);break e}else if(a===W){t.tag=14,t=E0(null,t,e,r,n);break e}}throw t=je(e)||e,Error(s(306,t,""))}}return t;case 0:return ju(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=ua(r,t.pendingProps),A0(e,t,r,a,n);case 3:e:{if(oe(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var c=t.memoizedState;a=c.element,tu(e,t),qi(t,r,null,n);var h=t.memoizedState;if(r=h.cache,fl(t,Nt,r),r!==c.cache&&Kc(t,[Nt],n,!0),Ui(),r=h.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=C0(e,t,r,n);break e}else if(r!==a){a=Hn(Error(s(424)),t),Ci(a),t=C0(e,t,r,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ct=Gn(e.firstChild),Yt=t,Fe=!0,ul=null,Pn=!0,n=Mf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(na(),r===a){t=Ir(e,t,n);break e}Kt(e,t,r,n)}t=t.child}return t;case 26:return So(e,t),e===null?(n=Y1(t.type,null,t.pendingProps,null))?t.memoizedState=n:Fe||(n=t.type,e=t.pendingProps,r=Vo(H.current).createElement(n),r[jt]=t,r[gt]=e,Qt(r,n,e),ft(r),t.stateNode=r):t.memoizedState=Y1(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ue(t),e===null&&Fe&&(r=t.stateNode=F1(t.type,t.pendingProps,H.current),Yt=t,Pn=!0,a=ct,El(t.type)?(hd=a,ct=Gn(r.firstChild)):ct=a),Kt(e,t,t.pendingProps.children,n),So(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Fe&&((a=r=ct)&&(r=Qp(r,t.type,t.pendingProps,Pn),r!==null?(t.stateNode=r,Yt=t,ct=Gn(r.firstChild),Pn=!1,a=!0):a=!1),a||dl(t)),Ue(t),a=t.type,c=t.pendingProps,h=e!==null?e.memoizedProps:null,r=c.children,cd(a,c)?r=null:h!==null&&cd(a,h)&&(t.flags|=32),t.memoizedState!==null&&(a=ou(e,t,dp,null,null,n),as._currentValue=a),So(e,t),Kt(e,t,r,n),t.child;case 6:return e===null&&Fe&&((e=n=ct)&&(n=Wp(n,t.pendingProps,Pn),n!==null?(t.stateNode=n,Yt=t,ct=null,e=!0):e=!1),e||dl(t)),null;case 13:return D0(e,t,n);case 4:return oe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=oa(t,null,r,n):Kt(e,t,r,n),t.child;case 11:return S0(e,t,t.type,t.pendingProps,n);case 7:return Kt(e,t,t.pendingProps,n),t.child;case 8:return Kt(e,t,t.pendingProps.children,n),t.child;case 12:return Kt(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,fl(t,t.type,r.value),Kt(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,la(t),a=Xt(a),r=r(a),t.flags|=1,Kt(e,t,r,n),t.child;case 14:return E0(e,t,t.type,t.pendingProps,n);case 15:return T0(e,t,t.type,t.pendingProps,n);case 19:return L0(e,t,n);case 31:return bp(e,t,n);case 22:return M0(e,t,n,t.pendingProps);case 24:return la(t),r=Xt(Nt),e===null?(a=Zc(),a===null&&(a=at,c=Qc(),a.pooledCache=c,c.refCount++,c!==null&&(a.pooledCacheLanes|=n),a=c),t.memoizedState={parent:r,cache:a},eu(t),fl(t,Nt,a)):((e.lanes&n)!==0&&(tu(e,t),qi(t,null,null,n),Ui()),a=e.memoizedState,c=t.memoizedState,a.parent!==r?(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),fl(t,Nt,r)):(r=c.cache,fl(t,Nt,r),r!==a.cache&&Kc(t,[Nt],n,!0))),Kt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Pr(e){e.flags|=4}function Bu(e,t,n,r,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(c1())e.flags|=8192;else throw sa=oo,Jc}else e.flags&=-16777217}function z0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Z1(t))if(c1())e.flags|=8192;else throw sa=oo,Jc}function To(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ln():536870912,e.lanes|=t,$a|=t)}function Gi(e,t){if(!Fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ut(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&65011712,r|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xp(e,t,n){var r=t.pendingProps;switch(Fc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(t),null;case 1:return ut(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),qr(Nt),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Da(t)?Pr(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,$c())),ut(t),null;case 26:var a=t.type,c=t.memoizedState;return e===null?(Pr(t),c!==null?(ut(t),z0(t,c)):(ut(t),Bu(t,a,null,r,n))):c?c!==e.memoizedState?(Pr(t),ut(t),z0(t,c)):(ut(t),t.flags&=-16777217):(e=e.memoizedProps,e!==r&&Pr(t),ut(t),Bu(t,a,e,r,n)),null;case 27:if(fe(t),n=H.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pr(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return ut(t),null}e=le.current,Da(t)?gf(t):(e=F1(a,r,n),t.stateNode=e,Pr(t))}return ut(t),null;case 5:if(fe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pr(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return ut(t),null}if(c=le.current,Da(t))gf(t);else{var h=Vo(H.current);switch(c){case 1:c=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:c=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":c=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":c=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":c=h.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?h.createElement("select",{is:r.is}):h.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?h.createElement(a,{is:r.is}):h.createElement(a)}}c[jt]=t,c[gt]=r;e:for(h=t.child;h!==null;){if(h.tag===5||h.tag===6)c.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}t.stateNode=c;e:switch(Qt(c,a,r),a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Pr(t)}}return ut(t),Bu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pr(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(e=H.current,Da(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Yt,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[jt]=t,e=!!(e.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||D1(e.nodeValue,n)),e||dl(t,!0)}else e=Vo(e).createTextNode(r),e[jt]=t,t.stateNode=e}return ut(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Da(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[jt]=t}else na(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ut(t),e=!1}else n=$c(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Tn(t),t):(Tn(t),null);if((t.flags&128)!==0)throw Error(s(558))}return ut(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Da(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(s(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(s(317));a[jt]=t}else na(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ut(t),a=!1}else a=$c(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Tn(t),t):(Tn(t),null)}return Tn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),To(t,t.updateQueue),ut(t),null);case 4:return ye(),e===null&&ld(t.stateNode.containerInfo),ut(t),null;case 10:return qr(t.type),ut(t),null;case 19:if(z(Et),r=t.memoizedState,r===null)return ut(t),null;if(a=(t.flags&128)!==0,c=r.rendering,c===null)if(a)Gi(r,!1);else{if(wt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=mo(e),c!==null){for(t.flags|=128,Gi(r,!1),e=c.updateQueue,t.updateQueue=e,To(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)df(n,e),n=n.sibling;return te(Et,Et.current&1|2),Fe&&zr(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&dt()>Ao&&(t.flags|=128,a=!0,Gi(r,!1),t.lanes=4194304)}else{if(!a)if(e=mo(c),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,To(t,e),Gi(r,!0),r.tail===null&&r.tailMode==="hidden"&&!c.alternate&&!Fe)return ut(t),null}else 2*dt()-r.renderingStartTime>Ao&&n!==536870912&&(t.flags|=128,a=!0,Gi(r,!1),t.lanes=4194304);r.isBackwards?(c.sibling=t.child,t.child=c):(e=r.last,e!==null?e.sibling=c:t.child=c,r.last=c)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=dt(),e.sibling=null,n=Et.current,te(Et,a?n&1|2:n&1),Fe&&zr(t,r.treeForkCount),e):(ut(t),null);case 22:case 23:return Tn(t),au(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(n&536870912)!==0&&(t.flags&128)===0&&(ut(t),t.subtreeFlags&6&&(t.flags|=8192)):ut(t),n=t.updateQueue,n!==null&&To(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&z(aa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),qr(Nt),ut(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function wp(e,t){switch(Fc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qr(Nt),ye(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return fe(t),null;case 31:if(t.memoizedState!==null){if(Tn(t),t.alternate===null)throw Error(s(340));na()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Tn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));na()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(Et),null;case 4:return ye(),null;case 10:return qr(t.type),null;case 22:case 23:return Tn(t),au(),e!==null&&z(aa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qr(Nt),null;case 25:return null;default:return null}}function U0(e,t){switch(Fc(t),t.tag){case 3:qr(Nt),ye();break;case 26:case 27:case 5:fe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&Tn(t);break;case 13:Tn(t);break;case 19:z(Et);break;case 10:qr(t.type);break;case 22:case 23:Tn(t),au(),e!==null&&z(aa);break;case 24:qr(Nt)}}function $i(e,t){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var a=r.next;n=a;do{if((n.tag&e)===e){r=void 0;var c=n.create,h=n.inst;r=c(),h.destroy=r}n=n.next}while(n!==a)}}catch(y){tt(t,t.return,y)}}function vl(e,t,n){try{var r=t.updateQueue,a=r!==null?r.lastEffect:null;if(a!==null){var c=a.next;r=c;do{if((r.tag&e)===e){var h=r.inst,y=h.destroy;if(y!==void 0){h.destroy=void 0,a=t;var S=n,L=y;try{L()}catch(Y){tt(a,S,Y)}}}r=r.next}while(r!==c)}}catch(Y){tt(t,t.return,Y)}}function q0(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Nf(t,n)}catch(r){tt(e,e.return,r)}}}function H0(e,t,n){n.props=ua(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){tt(e,t,r)}}function Yi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n=="function"?e.refCleanup=n(r):n.current=r}}catch(a){tt(e,t,a)}}function vr(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(a){tt(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){tt(e,t,a)}else n.current=null}function V0(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(a){tt(e,e.return,a)}}function zu(e,t,n){try{var r=e.stateNode;Fp(r,e.type,n,t),r[gt]=t}catch(a){tt(e,e.return,a)}}function I0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&El(e.type)||e.tag===4}function Uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||I0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&El(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=on));else if(r!==4&&(r===27&&El(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(qu(e,t,n),e=e.sibling;e!==null;)qu(e,t,n),e=e.sibling}function Mo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&El(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Mo(e,t,n),e=e.sibling;e!==null;)Mo(e,t,n),e=e.sibling}function P0(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Qt(t,r,n),t[jt]=e,t[gt]=n}catch(c){tt(e,e.return,c)}}var Fr=!1,Ct=!1,Hu=!1,F0=typeof WeakSet=="function"?WeakSet:Set,Ft=null;function kp(e,t){if(e=e.containerInfo,sd=Xo,e=Ni(e),Ri(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,c=r.focusNode;r=r.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var h=0,y=-1,S=-1,L=0,Y=0,Q=e,q=null;t:for(;;){for(var F;Q!==n||a!==0&&Q.nodeType!==3||(y=h+a),Q!==c||r!==0&&Q.nodeType!==3||(S=h+r),Q.nodeType===3&&(h+=Q.nodeValue.length),(F=Q.firstChild)!==null;)q=Q,Q=F;for(;;){if(Q===e)break t;if(q===n&&++L===a&&(y=h),q===c&&++Y===r&&(S=h),(F=Q.nextSibling)!==null)break;Q=q,q=Q.parentNode}Q=F}n=y===-1||S===-1?null:{start:y,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(od={focusedElem:e,selectionRange:n},Xo=!1,Ft=t;Ft!==null;)if(t=Ft,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ft=e;else for(;Ft!==null;){switch(t=Ft,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,a=c.memoizedProps,c=c.memoizedState,r=n.stateNode;try{var ge=ua(n.type,a);e=r.getSnapshotBeforeUpdate(ge,c),r.__reactInternalSnapshotBeforeUpdate=e}catch(Me){tt(n,n.return,Me)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)dd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":dd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Ft=e;break}Ft=t.return}}function G0(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:$r(e,n),r&4&&$i(5,n);break;case 1:if($r(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(h){tt(n,n.return,h)}else{var a=ua(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){tt(n,n.return,h)}}r&64&&q0(n),r&512&&Yi(n,n.return);break;case 3:if($r(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Nf(e,t)}catch(h){tt(n,n.return,h)}}break;case 27:t===null&&r&4&&P0(n);case 26:case 5:$r(e,n),t===null&&r&4&&V0(n),r&512&&Yi(n,n.return);break;case 12:$r(e,n);break;case 31:$r(e,n),r&4&&X0(e,n);break;case 13:$r(e,n),r&4&&K0(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Cp.bind(null,n),Zp(e,n))));break;case 22:if(r=n.memoizedState!==null||Fr,!r){t=t!==null&&t.memoizedState!==null||Ct,a=Fr;var c=Ct;Fr=r,(Ct=t)&&!c?Yr(e,n,(n.subtreeFlags&8772)!==0):$r(e,n),Fr=a,Ct=c}break;case 30:break;default:$r(e,n)}}function $0(e){var t=e.alternate;t!==null&&(e.alternate=null,$0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&dn(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var pt=null,pn=!1;function Gr(e,t,n){for(n=n.child;n!==null;)Y0(e,t,n),n=n.sibling}function Y0(e,t,n){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(qe,n)}catch{}switch(n.tag){case 26:Ct||vr(n,t),Gr(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ct||vr(n,t);var r=pt,a=pn;El(n.type)&&(pt=n.stateNode,pn=!1),Gr(e,t,n),ns(n.stateNode),pt=r,pn=a;break;case 5:Ct||vr(n,t);case 6:if(r=pt,a=pn,pt=null,Gr(e,t,n),pt=r,pn=a,pt!==null)if(pn)try{(pt.nodeType===9?pt.body:pt.nodeName==="HTML"?pt.ownerDocument.body:pt).removeChild(n.stateNode)}catch(c){tt(n,t,c)}else try{pt.removeChild(n.stateNode)}catch(c){tt(n,t,c)}break;case 18:pt!==null&&(pn?(e=pt,q1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ei(e)):q1(pt,n.stateNode));break;case 4:r=pt,a=pn,pt=n.stateNode.containerInfo,pn=!0,Gr(e,t,n),pt=r,pn=a;break;case 0:case 11:case 14:case 15:vl(2,n,t),Ct||vl(4,n,t),Gr(e,t,n);break;case 1:Ct||(vr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"&&H0(n,t,r)),Gr(e,t,n);break;case 21:Gr(e,t,n);break;case 22:Ct=(r=Ct)||n.memoizedState!==null,Gr(e,t,n),Ct=r;break;default:Gr(e,t,n)}}function X0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ei(e)}catch(n){tt(t,t.return,n)}}}function K0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ei(e)}catch(n){tt(t,t.return,n)}}function Sp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new F0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new F0),t;default:throw Error(s(435,e.tag))}}function jo(e,t){var n=Sp(e);t.forEach(function(r){if(!n.has(r)){n.add(r);var a=Dp.bind(null,e,r);r.then(a,a)}})}function gn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],c=e,h=t,y=h;e:for(;y!==null;){switch(y.tag){case 27:if(El(y.type)){pt=y.stateNode,pn=!1;break e}break;case 5:pt=y.stateNode,pn=!1;break e;case 3:case 4:pt=y.stateNode.containerInfo,pn=!0;break e}y=y.return}if(pt===null)throw Error(s(160));Y0(c,h,a),pt=null,pn=!1,c=a.alternate,c!==null&&(c.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Q0(t,e),t=t.sibling}var tr=null;function Q0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gn(t,e),_n(e),r&4&&(vl(3,e,e.return),$i(3,e),vl(5,e,e.return));break;case 1:gn(t,e),_n(e),r&512&&(Ct||n===null||vr(n,n.return)),r&64&&Fr&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=tr;if(gn(t,e),_n(e),r&512&&(Ct||n===null||vr(n,n.return)),r&4){var c=n!==null?n.memoizedState:null;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){e:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(r){case"title":c=a.getElementsByTagName("title")[0],(!c||c[cr]||c[jt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=a.createElement(r),a.head.insertBefore(c,a.querySelector("head > title"))),Qt(c,r,n),c[jt]=e,ft(c),r=c;break e;case"link":var h=Q1("link","href",a).get(r+(n.href||""));if(h){for(var y=0;y<h.length;y++)if(c=h[y],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){h.splice(y,1);break t}}c=a.createElement(r),Qt(c,r,n),a.head.appendChild(c);break;case"meta":if(h=Q1("meta","content",a).get(r+(n.content||""))){for(y=0;y<h.length;y++)if(c=h[y],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){h.splice(y,1);break t}}c=a.createElement(r),Qt(c,r,n),a.head.appendChild(c);break;default:throw Error(s(468,r))}c[jt]=e,ft(c),r=c}e.stateNode=r}else W1(a,e.type,e.stateNode);else e.stateNode=K1(a,r,e.memoizedProps);else c!==r?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,r===null?W1(a,e.type,e.stateNode):K1(a,r,e.memoizedProps)):r===null&&e.stateNode!==null&&zu(e,e.memoizedProps,n.memoizedProps)}break;case 27:gn(t,e),_n(e),r&512&&(Ct||n===null||vr(n,n.return)),n!==null&&r&4&&zu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gn(t,e),_n(e),r&512&&(Ct||n===null||vr(n,n.return)),e.flags&32){a=e.stateNode;try{tl(a,"")}catch(ge){tt(e,e.return,ge)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,zu(e,a,n!==null?n.memoizedProps:a)),r&1024&&(Hu=!0);break;case 6:if(gn(t,e),_n(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(ge){tt(e,e.return,ge)}}break;case 3:if(Fo=null,a=tr,tr=Io(t.containerInfo),gn(t,e),tr=a,_n(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ei(t.containerInfo)}catch(ge){tt(e,e.return,ge)}Hu&&(Hu=!1,W0(e));break;case 4:r=tr,tr=Io(e.stateNode.containerInfo),gn(t,e),_n(e),tr=r;break;case 12:gn(t,e),_n(e);break;case 31:gn(t,e),_n(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,jo(e,r)));break;case 13:gn(t,e),_n(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ro=dt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,jo(e,r)));break;case 22:a=e.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,L=Fr,Y=Ct;if(Fr=L||a,Ct=Y||S,gn(t,e),Ct=Y,Fr=L,_n(e),r&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||S||Fr||Ct||da(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){S=n=t;try{if(c=S.stateNode,a)h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{y=S.stateNode;var Q=S.memoizedProps.style,q=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;y.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(ge){tt(S,S.return,ge)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=a?"":S.memoizedProps}catch(ge){tt(S,S.return,ge)}}}else if(t.tag===18){if(n===null){S=t;try{var F=S.stateNode;a?H1(F,!0):H1(S.stateNode,!1)}catch(ge){tt(S,S.return,ge)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,jo(e,n))));break;case 19:gn(t,e),_n(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,jo(e,r)));break;case 30:break;case 21:break;default:gn(t,e),_n(e)}}function _n(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(I0(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var a=n.stateNode,c=Uu(e);Mo(e,c,a);break;case 5:var h=n.stateNode;n.flags&32&&(tl(h,""),n.flags&=-33);var y=Uu(e);Mo(e,y,h);break;case 3:case 4:var S=n.stateNode.containerInfo,L=Uu(e);qu(e,L,S);break;default:throw Error(s(161))}}catch(Y){tt(e,e.return,Y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function W0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;W0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function $r(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)G0(e,t.alternate,t),t=t.sibling}function da(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:vl(4,t,t.return),da(t);break;case 1:vr(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&H0(t,t.return,n),da(t);break;case 27:ns(t.stateNode);case 26:case 5:vr(t,t.return),da(t);break;case 22:t.memoizedState===null&&da(t);break;case 30:da(t);break;default:da(t)}e=e.sibling}}function Yr(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,a=e,c=t,h=c.flags;switch(c.tag){case 0:case 11:case 15:Yr(a,c,n),$i(4,c);break;case 1:if(Yr(a,c,n),r=c,a=r.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(L){tt(r,r.return,L)}if(r=c,a=r.updateQueue,a!==null){var y=r.stateNode;try{var S=a.shared.hiddenCallbacks;if(S!==null)for(a.shared.hiddenCallbacks=null,a=0;a<S.length;a++)jf(S[a],y)}catch(L){tt(r,r.return,L)}}n&&h&64&&q0(c),Yi(c,c.return);break;case 27:P0(c);case 26:case 5:Yr(a,c,n),n&&r===null&&h&4&&V0(c),Yi(c,c.return);break;case 12:Yr(a,c,n);break;case 31:Yr(a,c,n),n&&h&4&&X0(a,c);break;case 13:Yr(a,c,n),n&&h&4&&K0(a,c);break;case 22:c.memoizedState===null&&Yr(a,c,n),Yi(c,c.return);break;case 30:break;default:Yr(a,c,n)}t=t.sibling}}function Vu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Di(n))}function Iu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Di(e))}function nr(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Z0(e,t,n,r),t=t.sibling}function Z0(e,t,n,r){var a=t.flags;switch(t.tag){case 0:case 11:case 15:nr(e,t,n,r),a&2048&&$i(9,t);break;case 1:nr(e,t,n,r);break;case 3:nr(e,t,n,r),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Di(e)));break;case 12:if(a&2048){nr(e,t,n,r),e=t.stateNode;try{var c=t.memoizedProps,h=c.id,y=c.onPostCommit;typeof y=="function"&&y(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){tt(t,t.return,S)}}else nr(e,t,n,r);break;case 31:nr(e,t,n,r);break;case 13:nr(e,t,n,r);break;case 23:break;case 22:c=t.stateNode,h=t.alternate,t.memoizedState!==null?c._visibility&2?nr(e,t,n,r):Xi(e,t):c._visibility&2?nr(e,t,n,r):(c._visibility|=2,Pa(e,t,n,r,(t.subtreeFlags&10256)!==0||!1)),a&2048&&Vu(h,t);break;case 24:nr(e,t,n,r),a&2048&&Iu(t.alternate,t);break;default:nr(e,t,n,r)}}function Pa(e,t,n,r,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,h=t,y=n,S=r,L=h.flags;switch(h.tag){case 0:case 11:case 15:Pa(c,h,y,S,a),$i(8,h);break;case 23:break;case 22:var Y=h.stateNode;h.memoizedState!==null?Y._visibility&2?Pa(c,h,y,S,a):Xi(c,h):(Y._visibility|=2,Pa(c,h,y,S,a)),a&&L&2048&&Vu(h.alternate,h);break;case 24:Pa(c,h,y,S,a),a&&L&2048&&Iu(h.alternate,h);break;default:Pa(c,h,y,S,a)}t=t.sibling}}function Xi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,a=r.flags;switch(r.tag){case 22:Xi(n,r),a&2048&&Vu(r.alternate,r);break;case 24:Xi(n,r),a&2048&&Iu(r.alternate,r);break;default:Xi(n,r)}t=t.sibling}}var Ki=8192;function Fa(e,t,n){if(e.subtreeFlags&Ki)for(e=e.child;e!==null;)J0(e,t,n),e=e.sibling}function J0(e,t,n){switch(e.tag){case 26:Fa(e,t,n),e.flags&Ki&&e.memoizedState!==null&&u2(n,tr,e.memoizedState,e.memoizedProps);break;case 5:Fa(e,t,n);break;case 3:case 4:var r=tr;tr=Io(e.stateNode.containerInfo),Fa(e,t,n),tr=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ki,Ki=16777216,Fa(e,t,n),Ki=r):Fa(e,t,n));break;default:Fa(e,t,n)}}function e1(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Qi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Ft=r,n1(r,e)}e1(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)t1(e),e=e.sibling}function t1(e){switch(e.tag){case 0:case 11:case 15:Qi(e),e.flags&2048&&vl(9,e,e.return);break;case 3:Qi(e);break;case 12:Qi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,No(e)):Qi(e);break;default:Qi(e)}}function No(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Ft=r,n1(r,e)}e1(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:vl(8,t,t.return),No(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,No(t));break;default:No(t)}e=e.sibling}}function n1(e,t){for(;Ft!==null;){var n=Ft;switch(n.tag){case 0:case 11:case 15:vl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Di(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Ft=r;else e:for(n=e;Ft!==null;){r=Ft;var a=r.sibling,c=r.return;if($0(r),r===n){Ft=null;break e}if(a!==null){a.return=c,Ft=a;break e}Ft=c}}}var Ep={getCacheForType:function(e){var t=Xt(Nt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Xt(Nt).controller.signal}},Tp=typeof WeakMap=="function"?WeakMap:Map,Ze=0,at=null,He=null,Ie=0,et=0,Mn=null,bl=!1,Ga=!1,Pu=!1,Xr=0,wt=0,yl=0,fa=0,Fu=0,jn=0,$a=0,Wi=null,vn=null,Gu=!1,Ro=0,r1=0,Ao=1/0,Co=null,xl=null,Ut=0,wl=null,Ya=null,Kr=0,$u=0,Yu=null,l1=null,Zi=0,Xu=null;function Nn(){return(Ze&2)!==0&&Ie!==0?Ie&-Ie:B.T!==null?ed():Hl()}function a1(){if(jn===0)if((Ie&536870912)===0||Fe){var e=Dn;Dn<<=1,(Dn&3932160)===0&&(Dn=262144),jn=e}else jn=536870912;return e=En.current,e!==null&&(e.flags|=32),jn}function bn(e,t,n){(e===at&&(et===2||et===9)||e.cancelPendingCommit!==null)&&(Xa(e,0),kl(e,Ie,jn,!1)),ir(e,n),((Ze&2)===0||e!==at)&&(e===at&&((Ze&2)===0&&(fa|=n),wt===4&&kl(e,Ie,jn,!1)),br(e))}function i1(e,t,n){if((Ze&6)!==0)throw Error(s(327));var r=!n&&(t&127)===0&&(t&e.expiredLanes)===0||yt(e,t),a=r?Np(e,t):Qu(e,t,!0),c=r;do{if(a===0){Ga&&!r&&kl(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!Mp(n)){a=Qu(e,t,!1),c=!1;continue}if(a===2){if(c=t,e.errorRecoveryDisabledLanes&c)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var y=e;a=Wi;var S=y.current.memoizedState.isDehydrated;if(S&&(Xa(y,h).flags|=256),h=Qu(y,h,!1),h!==2){if(Pu&&!S){y.errorRecoveryDisabledLanes|=c,fa|=c,a=4;break e}c=vn,vn=a,c!==null&&(vn===null?vn=c:vn.push.apply(vn,c))}a=h}if(c=!1,a!==2)continue}}if(a===1){Xa(e,0),kl(e,t,0,!0);break}e:{switch(r=e,c=a,c){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:kl(r,t,jn,!bl);break e;case 2:vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(a=Ro+300-dt(),10<a)){if(kl(r,t,jn,!bl),We(r,0,!0)!==0)break e;Kr=t,r.timeoutHandle=z1(s1.bind(null,r,n,vn,Co,Gu,t,jn,fa,$a,bl,c,"Throttled",-0,0),a);break e}s1(r,n,vn,Co,Gu,t,jn,fa,$a,bl,c,null,-0,0)}}break}while(!0);br(e)}function s1(e,t,n,r,a,c,h,y,S,L,Y,Q,q,F){if(e.timeoutHandle=-1,Q=t.subtreeFlags,Q&8192||(Q&16785408)===16785408){Q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:on},J0(t,c,Q);var ge=(c&62914560)===c?Ro-dt():(c&4194048)===c?r1-dt():0;if(ge=d2(Q,ge),ge!==null){Kr=c,e.cancelPendingCommit=ge(p1.bind(null,e,t,c,n,r,a,h,y,S,Y,Q,null,q,F)),kl(e,c,h,!L);return}}p1(e,t,c,n,r,a,h,y,S)}function Mp(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var a=n[r],c=a.getSnapshot;a=a.value;try{if(!It(c(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kl(e,t,n,r){t&=~Fu,t&=~fa,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var a=t;0<a;){var c=31-ot(a),h=1<<c;r[c]=-1,a&=~h}n!==0&&Ts(e,n,t)}function Do(){return(Ze&6)===0?(Ji(0),!1):!0}function Ku(){if(He!==null){if(et===0)var e=He.return;else e=He,Ur=ra=null,du(e),Ua=null,Li=0,e=He;for(;e!==null;)U0(e.alternate,e),e=e.return;He=null}}function Xa(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Yp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Kr=0,Ku(),at=e,He=n=Br(e.current,null),Ie=t,et=0,Mn=null,bl=!1,Ga=yt(e,t),Pu=!1,$a=jn=Fu=fa=yl=wt=0,vn=Wi=null,Gu=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var a=31-ot(r),c=1<<a;t|=e[a],r&=~c}return Xr=t,Jl(),n}function o1(e,t){De=null,B.H=Pi,t===za||t===so?(t=Sf(),et=3):t===Jc?(t=Sf(),et=4):et=t===Mu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Mn=t,He===null&&(wt=1,wo(e,Hn(t,e.current)))}function c1(){var e=En.current;return e===null?!0:(Ie&4194048)===Ie?Fn===null:(Ie&62914560)===Ie||(Ie&536870912)!==0?e===Fn:!1}function u1(){var e=B.H;return B.H=Pi,e===null?Pi:e}function d1(){var e=B.A;return B.A=Ep,e}function Oo(){wt=4,bl||(Ie&4194048)!==Ie&&En.current!==null||(Ga=!0),(yl&134217727)===0&&(fa&134217727)===0||at===null||kl(at,Ie,jn,!1)}function Qu(e,t,n){var r=Ze;Ze|=2;var a=u1(),c=d1();(at!==e||Ie!==t)&&(Co=null,Xa(e,t)),t=!1;var h=wt;e:do try{if(et!==0&&He!==null){var y=He,S=Mn;switch(et){case 8:Ku(),h=6;break e;case 3:case 2:case 9:case 6:En.current===null&&(t=!0);var L=et;if(et=0,Mn=null,Ka(e,y,S,L),n&&Ga){h=0;break e}break;default:L=et,et=0,Mn=null,Ka(e,y,S,L)}}jp(),h=wt;break}catch(Y){o1(e,Y)}while(!0);return t&&e.shellSuspendCounter++,Ur=ra=null,Ze=r,B.H=a,B.A=c,He===null&&(at=null,Ie=0,Jl()),h}function jp(){for(;He!==null;)f1(He)}function Np(e,t){var n=Ze;Ze|=2;var r=u1(),a=d1();at!==e||Ie!==t?(Co=null,Ao=dt()+500,Xa(e,t)):Ga=yt(e,t);e:do try{if(et!==0&&He!==null){t=He;var c=Mn;t:switch(et){case 1:et=0,Mn=null,Ka(e,t,c,1);break;case 2:case 9:if(wf(c)){et=0,Mn=null,m1(t);break}t=function(){et!==2&&et!==9||at!==e||(et=7),br(e)},c.then(t,t);break e;case 3:et=7;break e;case 4:et=5;break e;case 7:wf(c)?(et=0,Mn=null,m1(t)):(et=0,Mn=null,Ka(e,t,c,7));break;case 5:var h=null;switch(He.tag){case 26:h=He.memoizedState;case 5:case 27:var y=He;if(h?Z1(h):y.stateNode.complete){et=0,Mn=null;var S=y.sibling;if(S!==null)He=S;else{var L=y.return;L!==null?(He=L,Lo(L)):He=null}break t}}et=0,Mn=null,Ka(e,t,c,5);break;case 6:et=0,Mn=null,Ka(e,t,c,6);break;case 8:Ku(),wt=6;break e;default:throw Error(s(462))}}Rp();break}catch(Y){o1(e,Y)}while(!0);return Ur=ra=null,B.H=r,B.A=a,Ze=n,He!==null?0:(at=null,Ie=0,Jl(),wt)}function Rp(){for(;He!==null&&!yn();)f1(He)}function f1(e){var t=B0(e.alternate,e,Xr);e.memoizedProps=e.pendingProps,t===null?Lo(e):He=t}function m1(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=R0(n,t,t.pendingProps,t.type,void 0,Ie);break;case 11:t=R0(n,t,t.pendingProps,t.type.render,t.ref,Ie);break;case 5:du(t);default:U0(n,t),t=He=df(t,Xr),t=B0(n,t,Xr)}e.memoizedProps=e.pendingProps,t===null?Lo(e):He=t}function Ka(e,t,n,r){Ur=ra=null,du(t),Ua=null,Li=0;var a=t.return;try{if(vp(e,a,t,n,Ie)){wt=1,wo(e,Hn(n,e.current)),He=null;return}}catch(c){if(a!==null)throw He=a,c;wt=1,wo(e,Hn(n,e.current)),He=null;return}t.flags&32768?(Fe||r===1?e=!0:Ga||(Ie&536870912)!==0?e=!1:(bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=En.current,r!==null&&r.tag===13&&(r.flags|=16384))),h1(t,e)):Lo(t)}function Lo(e){var t=e;do{if((t.flags&32768)!==0){h1(t,bl);return}e=t.return;var n=xp(t.alternate,t,Xr);if(n!==null){He=n;return}if(t=t.sibling,t!==null){He=t;return}He=t=e}while(t!==null);wt===0&&(wt=5)}function h1(e,t){do{var n=wp(e.alternate,e);if(n!==null){n.flags&=32767,He=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){He=e;return}He=e=n}while(e!==null);wt=6,He=null}function p1(e,t,n,r,a,c,h,y,S){e.cancelPendingCommit=null;do Bo();while(Ut!==0);if((Ze&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(c=t.lanes|t.childLanes,c|=Lr,el(e,n,c,h,y,S),e===at&&(He=at=null,Ie=0),Ya=t,wl=e,Kr=n,$u=c,Yu=a,l1=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Op(Jr,function(){return y1(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=B.T,B.T=null,a=ne.p,ne.p=2,h=Ze,Ze|=4;try{kp(e,t,n)}finally{Ze=h,ne.p=a,B.T=r}}Ut=1,g1(),_1(),v1()}}function g1(){if(Ut===1){Ut=0;var e=wl,t=Ya,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=B.T,B.T=null;var r=ne.p;ne.p=2;var a=Ze;Ze|=4;try{Q0(t,e);var c=od,h=Ni(e.containerInfo),y=c.focusedElem,S=c.selectionRange;if(h!==y&&y&&y.ownerDocument&&Na(y.ownerDocument.documentElement,y)){if(S!==null&&Ri(y)){var L=S.start,Y=S.end;if(Y===void 0&&(Y=L),"selectionStart"in y)y.selectionStart=L,y.selectionEnd=Math.min(Y,y.value.length);else{var Q=y.ownerDocument||document,q=Q&&Q.defaultView||window;if(q.getSelection){var F=q.getSelection(),ge=y.textContent.length,Me=Math.min(S.start,ge),lt=S.end===void 0?Me:Math.min(S.end,ge);!F.extend&&Me>lt&&(h=lt,lt=Me,Me=h);var C=Dr(y,Me),M=Dr(y,lt);if(C&&M&&(F.rangeCount!==1||F.anchorNode!==C.node||F.anchorOffset!==C.offset||F.focusNode!==M.node||F.focusOffset!==M.offset)){var O=Q.createRange();O.setStart(C.node,C.offset),F.removeAllRanges(),Me>lt?(F.addRange(O),F.extend(M.node,M.offset)):(O.setEnd(M.node,M.offset),F.addRange(O))}}}}for(Q=[],F=y;F=F.parentNode;)F.nodeType===1&&Q.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<Q.length;y++){var K=Q[y];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}Xo=!!sd,od=sd=null}finally{Ze=a,ne.p=r,B.T=n}}e.current=t,Ut=2}}function _1(){if(Ut===2){Ut=0;var e=wl,t=Ya,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=B.T,B.T=null;var r=ne.p;ne.p=2;var a=Ze;Ze|=4;try{G0(e,t.alternate,t)}finally{Ze=a,ne.p=r,B.T=n}}Ut=3}}function v1(){if(Ut===4||Ut===3){Ut=0,yr();var e=wl,t=Ya,n=Kr,r=l1;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ut=5:(Ut=0,Ya=wl=null,b1(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(xl=null),ui(n),t=t.stateNode,Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(qe,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=B.T,a=ne.p,ne.p=2,B.T=null;try{for(var c=e.onRecoverableError,h=0;h<r.length;h++){var y=r[h];c(y.value,{componentStack:y.stack})}}finally{B.T=t,ne.p=a}}(Kr&3)!==0&&Bo(),br(e),a=e.pendingLanes,(n&261930)!==0&&(a&42)!==0?e===Xu?Zi++:(Zi=0,Xu=e):Zi=0,Ji(0)}}function b1(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Di(t)))}function Bo(){return g1(),_1(),v1(),y1()}function y1(){if(Ut!==5)return!1;var e=wl,t=$u;$u=0;var n=ui(Kr),r=B.T,a=ne.p;try{ne.p=32>n?32:n,B.T=null,n=Yu,Yu=null;var c=wl,h=Kr;if(Ut=0,Ya=wl=null,Kr=0,(Ze&6)!==0)throw Error(s(331));var y=Ze;if(Ze|=4,t1(c.current),Z0(c,c.current,h,n),Ze=y,Ji(0,!1),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(qe,c)}catch{}return!0}finally{ne.p=a,B.T=r,b1(e,t)}}function x1(e,t,n){t=Hn(n,t),t=Tu(e.stateNode,t,2),e=pl(e,t,2),e!==null&&(ir(e,2),br(e))}function tt(e,t,n){if(e.tag===3)x1(e,e,n);else for(;t!==null;){if(t.tag===3){x1(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xl===null||!xl.has(r))){e=Hn(n,e),n=w0(2),r=pl(t,n,2),r!==null&&(k0(n,r,t,e),ir(r,2),br(r));break}}t=t.return}}function Wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Tp;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(Pu=!0,a.add(n),e=Ap.bind(null,e,t,n),t.then(e,e))}function Ap(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,at===e&&(Ie&n)===n&&(wt===4||wt===3&&(Ie&62914560)===Ie&&300>dt()-Ro?(Ze&2)===0&&Xa(e,0):Fu|=n,$a===Ie&&($a=0)),br(e)}function w1(e,t){t===0&&(t=ln()),e=ea(e,t),e!==null&&(ir(e,t),br(e))}function Cp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),w1(e,n)}function Dp(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),w1(e,n)}function Op(e,t){return Jt(e,t)}var zo=null,Qa=null,Zu=!1,Uo=!1,Ju=!1,Sl=0;function br(e){e!==Qa&&e.next===null&&(Qa===null?zo=Qa=e:Qa=Qa.next=e),Uo=!0,Zu||(Zu=!0,Bp())}function Ji(e,t){if(!Ju&&Uo){Ju=!0;do for(var n=!1,r=zo;r!==null;){if(e!==0){var a=r.pendingLanes;if(a===0)var c=0;else{var h=r.suspendedLanes,y=r.pingedLanes;c=(1<<31-ot(42|e)+1)-1,c&=a&~(h&~y),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,T1(r,c))}else c=Ie,c=We(r,r===at?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||yt(r,c)||(n=!0,T1(r,c));r=r.next}while(n);Ju=!1}}function Lp(){k1()}function k1(){Uo=Zu=!1;var e=0;Sl!==0&&$p()&&(e=Sl);for(var t=dt(),n=null,r=zo;r!==null;){var a=r.next,c=S1(r,t);c===0?(r.next=null,n===null?zo=a:n.next=a,a===null&&(Qa=n)):(n=r,(e!==0||(c&3)!==0)&&(Uo=!0)),r=a}Ut!==0&&Ut!==5||Ji(e),Sl!==0&&(Sl=0)}function S1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var h=31-ot(c),y=1<<h,S=a[h];S===-1?((y&n)===0||(y&r)!==0)&&(a[h]=St(y,t)):S<=t&&(e.expiredLanes|=y),c&=~y}if(t=at,n=Ie,n=We(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(et===2||et===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Mt(r),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||yt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Mt(r),ui(n)){case 2:case 8:n=zl;break;case 32:n=Jr;break;case 268435456:n=Ul;break;default:n=Jr}return r=E1.bind(null,e),n=Jt(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Mt(r),e.callbackPriority=2,e.callbackNode=null,2}function E1(e,t){if(Ut!==0&&Ut!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Bo()&&e.callbackNode!==n)return null;var r=Ie;return r=We(e,e===at?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(i1(e,r,t),S1(e,dt()),e.callbackNode!=null&&e.callbackNode===n?E1.bind(null,e):null)}function T1(e,t){if(Bo())return null;i1(e,t,!0)}function Bp(){Xp(function(){(Ze&6)!==0?Jt(lr,Lp):k1()})}function ed(){if(Sl===0){var e=La;e===0&&(e=un,un<<=1,(un&261888)===0&&(un=256)),Sl=e}return Sl}function M1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:wa(""+e)}function j1(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function zp(e,t,n,r,a){if(t==="submit"&&n&&n.stateNode===a){var c=M1((a[gt]||null).action),h=r.submitter;h&&(t=(t=h[gt]||null)?M1(t.formAction):h.getAttribute("formAction"),t!==null&&(c=t,h=null));var y=new mr("action","action",null,r,a);e.push({event:y,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Sl!==0){var S=h?j1(a,h):new FormData(a);yu(n,{pending:!0,data:S,method:a.method,action:c},null,S)}}else typeof c=="function"&&(y.preventDefault(),S=h?j1(a,h):new FormData(a),yu(n,{pending:!0,data:S,method:a.method,action:c},c,S))},currentTarget:a}]})}}for(var td=0;td<hr.length;td++){var nd=hr[td],Up=nd.toLowerCase(),qp=nd[0].toUpperCase()+nd.slice(1);Pt(Up,"on"+qp)}Pt($e,"onAnimationEnd"),Pt(vt,"onAnimationIteration"),Pt(tn,"onAnimationStart"),Pt("dblclick","onDoubleClick"),Pt("focusin","onFocus"),Pt("focusout","onBlur"),Pt(Be,"onTransitionRun"),Pt(ht,"onTransitionStart"),Pt(Or,"onTransitionCancel"),Pt(Un,"onTransitionEnd"),Ln("onMouseEnter",["mouseout","mouseover"]),Ln("onMouseLeave",["mouseout","mouseover"]),Ln("onPointerEnter",["pointerout","pointerover"]),Ln("onPointerLeave",["pointerout","pointerover"]),en("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),en("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),en("onBeforeInput",["compositionend","keypress","textInput","paste"]),en("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),en("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),en("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var es="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(es));function N1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var c=void 0;if(t)for(var h=r.length-1;0<=h;h--){var y=r[h],S=y.instance,L=y.currentTarget;if(y=y.listener,S!==c&&a.isPropagationStopped())break e;c=y,a.currentTarget=L;try{c(a)}catch(Y){Zl(Y)}a.currentTarget=null,c=S}else for(h=0;h<r.length;h++){if(y=r[h],S=y.instance,L=y.currentTarget,y=y.listener,S!==c&&a.isPropagationStopped())break e;c=y,a.currentTarget=L;try{c(a)}catch(Y){Zl(Y)}a.currentTarget=null,c=S}}}}function Ve(e,t){var n=t[Vl];n===void 0&&(n=t[Vl]=new Set);var r=e+"__bubble";n.has(r)||(R1(t,e,2,!1),n.add(r))}function rd(e,t,n){var r=0;t&&(r|=4),R1(n,e,r,t)}var qo="_reactListening"+Math.random().toString(36).slice(2);function ld(e){if(!e[qo]){e[qo]=!0,ur.forEach(function(n){n!=="selectionchange"&&(Hp.has(n)||rd(n,!1,e),rd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qo]||(t[qo]=!0,rd("selectionchange",!1,t))}}function R1(e,t,n,r){switch(am(t)){case 2:var a=h2;break;case 8:a=p2;break;default:a=bd}n=a.bind(null,t,n,e),a=void 0,!mi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function ad(e,t,n,r,a){var c=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var h=r.tag;if(h===3||h===4){var y=r.stateNode.containerInfo;if(y===a)break;if(h===4)for(h=r.return;h!==null;){var S=h.tag;if((S===3||S===4)&&h.stateNode.containerInfo===a)return;h=h.return}for(;y!==null;){if(h=fn(y),h===null)return;if(S=h.tag,S===5||S===6||S===26||S===27){r=c=h;continue e}y=y.parentNode}}r=r.return}rl(function(){var L=c,Y=Sa(n),Q=[];e:{var q=qn.get(e);if(q!==void 0){var F=mr,ge=e;switch(e){case"keypress":if(Ta(n)===0)break e;case"keydown":case"keyup":F=Os;break;case"focusin":ge="focus",F=_i;break;case"focusout":ge="blur",F=_i;break;case"beforeblur":case"afterblur":F=_i;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=$l;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=gi;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=zs;break;case $e:case vt:case tn:F=Bn;break;case Un:F=Ac;break;case"scroll":case"scrollend":F=Tc;break;case"wheel":F=qs;break;case"copy":case"cut":case"paste":F=vi;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=Ls;break;case"toggle":case"beforetoggle":F=Dc}var Me=(t&4)!==0,lt=!Me&&(e==="scroll"||e==="scrollend"),C=Me?q!==null?q+"Capture":null:q;Me=[];for(var M=L,O;M!==null;){var K=M;if(O=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||O===null||C===null||(K=Fl(M,C),K!=null&&Me.push(ts(M,K,O))),lt)break;M=M.return}0<Me.length&&(q=new F(q,ge,null,n,Y),Q.push({event:q,listeners:Me}))}}if((t&7)===0){e:{if(q=e==="mouseover"||e==="pointerover",F=e==="mouseout"||e==="pointerout",q&&n!==ka&&(ge=n.relatedTarget||n.fromElement)&&(fn(ge)||ge[or]))break e;if((F||q)&&(q=Y.window===Y?Y:(q=Y.ownerDocument)?q.defaultView||q.parentWindow:window,F?(ge=n.relatedTarget||n.toElement,F=L,ge=ge?fn(ge):null,ge!==null&&(lt=p(ge),Me=ge.tag,ge!==lt||Me!==5&&Me!==27&&Me!==6)&&(ge=null)):(F=null,ge=L),F!==ge)){if(Me=$l,K="onMouseLeave",C="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(Me=Ls,K="onPointerLeave",C="onPointerEnter",M="pointer"),lt=F==null?q:an(F),O=ge==null?q:an(ge),q=new Me(K,M+"leave",F,n,Y),q.target=lt,q.relatedTarget=O,K=null,fn(Y)===L&&(Me=new Me(C,M+"enter",ge,n,Y),Me.target=O,Me.relatedTarget=lt,K=Me),lt=K,F&&ge)t:{for(Me=Vp,C=F,M=ge,O=0,K=C;K;K=Me(K))O++;K=0;for(var ke=M;ke;ke=Me(ke))K++;for(;0<O-K;)C=Me(C),O--;for(;0<K-O;)M=Me(M),K--;for(;O--;){if(C===M||M!==null&&C===M.alternate){Me=C;break t}C=Me(C),M=Me(M)}Me=null}else Me=null;F!==null&&A1(Q,q,F,Me,!1),ge!==null&&lt!==null&&A1(Q,lt,ge,Me,!0)}}e:{if(q=L?an(L):window,F=q.nodeName&&q.nodeName.toLowerCase(),F==="select"||F==="input"&&q.type==="file")var Ye=Ks;else if(Ys(q))if(Qs)Ye=zc;else{Ye=Js;var be=zn}else F=q.nodeName,!F||F.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?L&&$(L.elementType)&&(Ye=Ks):Ye=Bc;if(Ye&&(Ye=Ye(e,L))){Si(Q,Ye,n,Y);break e}be&&be(e,q,L),e==="focusout"&&L&&q.type==="number"&&L.memoizedProps.value!=null&&Pl(q,"number",q.value)}switch(be=L?an(L):window,e){case"focusin":(Ys(be)||be.contentEditable==="true")&&(ol=be,f=L,v=null);break;case"focusout":v=f=ol=null;break;case"mousedown":x=!0;break;case"contextmenu":case"mouseup":case"dragend":x=!1,R(Q,n,Y);break;case"selectionchange":if(Uc)break;case"keydown":case"keyup":R(Q,n,Y)}var Oe;if(ki)e:{switch(e){case"compositionstart":var Pe="onCompositionStart";break e;case"compositionend":Pe="onCompositionEnd";break e;case"compositionupdate":Pe="onCompositionUpdate";break e}Pe=void 0}else sl?Ps(e,n)&&(Pe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Pe="onCompositionStart");Pe&&(Hs&&n.locale!=="ko"&&(sl||Pe!=="onCompositionStart"?Pe==="onCompositionEnd"&&sl&&(Oe=al()):(fr=Y,Ea="value"in fr?fr.value:fr.textContent,sl=!0)),be=Ho(L,Pe),0<be.length&&(Pe=new bi(Pe,e,null,n,Y),Q.push({event:Pe,listeners:be}),Oe?Pe.data=Oe:(Oe=Fs(n),Oe!==null&&(Pe.data=Oe)))),(Oe=Lc?Kl(e,n):Gs(e,n))&&(Pe=Ho(L,"onBeforeInput"),0<Pe.length&&(be=new bi("onBeforeInput","beforeinput",null,n,Y),Q.push({event:be,listeners:Pe}),be.data=Oe)),zp(Q,e,L,n,Y)}N1(Q,t)})}function ts(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ho(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,c=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||c===null||(a=Fl(e,n),a!=null&&r.unshift(ts(e,a,c)),a=Fl(e,t),a!=null&&r.push(ts(e,a,c))),e.tag===3)return r;e=e.return}return[]}function Vp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function A1(e,t,n,r,a){for(var c=t._reactName,h=[];n!==null&&n!==r;){var y=n,S=y.alternate,L=y.stateNode;if(y=y.tag,S!==null&&S===r)break;y!==5&&y!==26&&y!==27||L===null||(S=L,a?(L=Fl(n,c),L!=null&&h.unshift(ts(n,L,S))):a||(L=Fl(n,c),L!=null&&h.push(ts(n,L,S)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var Ip=/\r\n?/g,Pp=/\u0000|\uFFFD/g;function C1(e){return(typeof e=="string"?e:""+e).replace(Ip,`
`).replace(Pp,"")}function D1(e,t){return t=C1(t),C1(e)===t}function rt(e,t,n,r,a,c){switch(n){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||tl(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&tl(e,""+r);break;case"className":Tr(e,"class",r);break;case"tabIndex":Tr(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Tr(e,n,r);break;case"style":xa(e,r,c);break;case"data":if(t!=="object"){Tr(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=wa(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&rt(e,t,"name",a.name,a,null),rt(e,t,"formEncType",a.formEncType,a,null),rt(e,t,"formMethod",a.formMethod,a,null),rt(e,t,"formTarget",a.formTarget,a,null)):(rt(e,t,"encType",a.encType,a,null),rt(e,t,"method",a.method,a,null),rt(e,t,"target",a.target,a,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=wa(""+r),e.setAttribute(n,r);break;case"onClick":r!=null&&(e.onclick=on);break;case"onScroll":r!=null&&Ve("scroll",e);break;case"onScrollEnd":r!=null&&Ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}n=wa(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":r===!0?e.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Ve("beforetoggle",e),Ve("toggle",e),dr(e,"popover",r);break;case"xlinkActuate":mn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":mn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":mn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":mn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":mn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":mn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":mn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":mn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":mn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":dr(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Sc.get(n)||n,dr(e,n,r))}}function id(e,t,n,r,a,c){switch(n){case"style":xa(e,r,c);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof r=="string"?tl(e,r):(typeof r=="number"||typeof r=="bigint")&&tl(e,""+r);break;case"onScroll":r!=null&&Ve("scroll",e);break;case"onScrollEnd":r!=null&&Ve("scrollend",e);break;case"onClick":r!=null&&(e.onclick=on);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!va.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),c=e[gt]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,a),typeof r=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break e}n in e?e[n]=r:r===!0?e.setAttribute(n,""):dr(e,n,r)}}}function Qt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",e),Ve("load",e);var r=!1,a=!1,c;for(c in n)if(n.hasOwnProperty(c)){var h=n[c];if(h!=null)switch(c){case"src":r=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:rt(e,t,c,h,n,null)}}a&&rt(e,t,"srcSet",n.srcSet,n,null),r&&rt(e,t,"src",n.src,n,null);return;case"input":Ve("invalid",e);var y=c=h=a=null,S=null,L=null;for(r in n)if(n.hasOwnProperty(r)){var Y=n[r];if(Y!=null)switch(r){case"name":a=Y;break;case"type":h=Y;break;case"checked":S=Y;break;case"defaultChecked":L=Y;break;case"value":c=Y;break;case"defaultValue":y=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,t));break;default:rt(e,t,r,Y,n,null)}}Nr(e,c,y,S,L,h,a,!1);return;case"select":Ve("invalid",e),r=h=c=null;for(a in n)if(n.hasOwnProperty(a)&&(y=n[a],y!=null))switch(a){case"value":c=y;break;case"defaultValue":h=y;break;case"multiple":r=y;default:rt(e,t,a,y,n,null)}t=c,n=h,e.multiple=!!r,t!=null?Gt(e,!!r,t,!1):n!=null&&Gt(e,!!r,n,!0);return;case"textarea":Ve("invalid",e),c=a=r=null;for(h in n)if(n.hasOwnProperty(h)&&(y=n[h],y!=null))switch(h){case"value":r=y;break;case"defaultValue":a=y;break;case"children":c=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(s(91));break;default:rt(e,t,h,y,n,null)}sn(e,r,a,c);return;case"option":for(S in n)if(n.hasOwnProperty(S)&&(r=n[S],r!=null))switch(S){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:rt(e,t,S,r,n,null)}return;case"dialog":Ve("beforetoggle",e),Ve("toggle",e),Ve("cancel",e),Ve("close",e);break;case"iframe":case"object":Ve("load",e);break;case"video":case"audio":for(r=0;r<es.length;r++)Ve(es[r],e);break;case"image":Ve("error",e),Ve("load",e);break;case"details":Ve("toggle",e);break;case"embed":case"source":case"link":Ve("error",e),Ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in n)if(n.hasOwnProperty(L)&&(r=n[L],r!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:rt(e,t,L,r,n,null)}return;default:if($(t)){for(Y in n)n.hasOwnProperty(Y)&&(r=n[Y],r!==void 0&&id(e,t,Y,r,n,void 0));return}}for(y in n)n.hasOwnProperty(y)&&(r=n[y],r!=null&&rt(e,t,y,r,n,null))}function Fp(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,c=null,h=null,y=null,S=null,L=null,Y=null;for(F in n){var Q=n[F];if(n.hasOwnProperty(F)&&Q!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":S=Q;default:r.hasOwnProperty(F)||rt(e,t,F,null,r,Q)}}for(var q in r){var F=r[q];if(Q=n[q],r.hasOwnProperty(q)&&(F!=null||Q!=null))switch(q){case"type":c=F;break;case"name":a=F;break;case"checked":L=F;break;case"defaultChecked":Y=F;break;case"value":h=F;break;case"defaultValue":y=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,t));break;default:F!==Q&&rt(e,t,q,F,r,Q)}}jr(e,h,y,S,L,Y,c,a);return;case"select":F=h=y=q=null;for(c in n)if(S=n[c],n.hasOwnProperty(c)&&S!=null)switch(c){case"value":break;case"multiple":F=S;default:r.hasOwnProperty(c)||rt(e,t,c,null,r,S)}for(a in r)if(c=r[a],S=n[a],r.hasOwnProperty(a)&&(c!=null||S!=null))switch(a){case"value":q=c;break;case"defaultValue":y=c;break;case"multiple":h=c;default:c!==S&&rt(e,t,a,c,r,S)}t=y,n=h,r=F,q!=null?Gt(e,!!n,q,!1):!!r!=!!n&&(t!=null?Gt(e,!!n,t,!0):Gt(e,!!n,n?[]:"",!1));return;case"textarea":F=q=null;for(y in n)if(a=n[y],n.hasOwnProperty(y)&&a!=null&&!r.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:rt(e,t,y,null,r,a)}for(h in r)if(a=r[h],c=n[h],r.hasOwnProperty(h)&&(a!=null||c!=null))switch(h){case"value":q=a;break;case"defaultValue":F=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(s(91));break;default:a!==c&&rt(e,t,h,a,r,c)}ya(e,q,F);return;case"option":for(var ge in n)if(q=n[ge],n.hasOwnProperty(ge)&&q!=null&&!r.hasOwnProperty(ge))switch(ge){case"selected":e.selected=!1;break;default:rt(e,t,ge,null,r,q)}for(S in r)if(q=r[S],F=n[S],r.hasOwnProperty(S)&&q!==F&&(q!=null||F!=null))switch(S){case"selected":e.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:rt(e,t,S,q,r,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Me in n)q=n[Me],n.hasOwnProperty(Me)&&q!=null&&!r.hasOwnProperty(Me)&&rt(e,t,Me,null,r,q);for(L in r)if(q=r[L],F=n[L],r.hasOwnProperty(L)&&q!==F&&(q!=null||F!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,t));break;default:rt(e,t,L,q,r,F)}return;default:if($(t)){for(var lt in n)q=n[lt],n.hasOwnProperty(lt)&&q!==void 0&&!r.hasOwnProperty(lt)&&id(e,t,lt,void 0,r,q);for(Y in r)q=r[Y],F=n[Y],!r.hasOwnProperty(Y)||q===F||q===void 0&&F===void 0||id(e,t,Y,q,r,F);return}}for(var C in n)q=n[C],n.hasOwnProperty(C)&&q!=null&&!r.hasOwnProperty(C)&&rt(e,t,C,null,r,q);for(Q in r)q=r[Q],F=n[Q],!r.hasOwnProperty(Q)||q===F||q==null&&F==null||rt(e,t,Q,q,r,F)}function O1(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Gp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var a=n[r],c=a.transferSize,h=a.initiatorType,y=a.duration;if(c&&y&&O1(h)){for(h=0,y=a.responseEnd,r+=1;r<n.length;r++){var S=n[r],L=S.startTime;if(L>y)break;var Y=S.transferSize,Q=S.initiatorType;Y&&O1(Q)&&(S=S.responseEnd,h+=Y*(S<y?1:(y-L)/(S-L)))}if(--r,t+=8*(c+h)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var sd=null,od=null;function Vo(e){return e.nodeType===9?e:e.ownerDocument}function L1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function B1(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function cd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ud=null;function $p(){var e=window.event;return e&&e.type==="popstate"?e===ud?!1:(ud=e,!0):(ud=null,!1)}var z1=typeof setTimeout=="function"?setTimeout:void 0,Yp=typeof clearTimeout=="function"?clearTimeout:void 0,U1=typeof Promise=="function"?Promise:void 0,Xp=typeof queueMicrotask=="function"?queueMicrotask:typeof U1<"u"?function(e){return U1.resolve(null).then(e).catch(Kp)}:z1;function Kp(e){setTimeout(function(){throw e})}function El(e){return e==="head"}function q1(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(r===0){e.removeChild(a),ei(t);return}r--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")r++;else if(n==="html")ns(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ns(n);for(var c=n.firstChild;c;){var h=c.nextSibling,y=c.nodeName;c[cr]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=h}}else n==="body"&&ns(e.ownerDocument.body);n=a}while(n);ei(t)}function H1(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=r}while(n)}function dd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":dd(n),dn(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Qp(e,t,n,r){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[cr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Gn(e.nextSibling),e===null)break}return null}function Wp(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Gn(e.nextSibling),e===null))return null;return e}function V1(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Gn(e.nextSibling),e===null))return null;return e}function fd(e){return e.data==="$?"||e.data==="$~"}function md(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Zp(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var hd=null;function I1(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Gn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function P1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function F1(e,t,n){switch(t=Vo(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ns(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);dn(e)}var $n=new Map,G1=new Set;function Io(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Qr=ne.d;ne.d={f:Jp,r:e2,D:t2,C:n2,L:r2,m:l2,X:i2,S:a2,M:s2};function Jp(){var e=Qr.f(),t=Do();return e||t}function e2(e){var t=On(e);t!==null&&t.tag===5&&t.type==="form"?o0(t):Qr.r(e)}var Wa=typeof document>"u"?null:document;function $1(e,t,n){var r=Wa;if(r&&typeof t=="string"&&t){var a=hn(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),G1.has(a)||(G1.add(a),e={rel:e,crossOrigin:n,href:t},r.querySelector(a)===null&&(t=r.createElement("link"),Qt(t,"link",e),ft(t),r.head.appendChild(t)))}}function t2(e){Qr.D(e),$1("dns-prefetch",e,null)}function n2(e,t){Qr.C(e,t),$1("preconnect",e,t)}function r2(e,t,n){Qr.L(e,t,n);var r=Wa;if(r&&e&&t){var a='link[rel="preload"][as="'+hn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+hn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+hn(n.imageSizes)+'"]')):a+='[href="'+hn(e)+'"]';var c=a;switch(t){case"style":c=Za(e);break;case"script":c=Ja(e)}$n.has(c)||(e=k({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),$n.set(c,e),r.querySelector(a)!==null||t==="style"&&r.querySelector(rs(c))||t==="script"&&r.querySelector(ls(c))||(t=r.createElement("link"),Qt(t,"link",e),ft(t),r.head.appendChild(t)))}}function l2(e,t){Qr.m(e,t);var n=Wa;if(n&&e){var r=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+hn(r)+'"][href="'+hn(e)+'"]',c=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Ja(e)}if(!$n.has(c)&&(e=k({rel:"modulepreload",href:e},t),$n.set(c,e),n.querySelector(a)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ls(c)))return}r=n.createElement("link"),Qt(r,"link",e),ft(r),n.head.appendChild(r)}}}function a2(e,t,n){Qr.S(e,t,n);var r=Wa;if(r&&e){var a=wn(r).hoistableStyles,c=Za(e);t=t||"default";var h=a.get(c);if(!h){var y={loading:0,preload:null};if(h=r.querySelector(rs(c)))y.loading=5;else{e=k({rel:"stylesheet",href:e,"data-precedence":t},n),(n=$n.get(c))&&pd(e,n);var S=h=r.createElement("link");ft(S),Qt(S,"link",e),S._p=new Promise(function(L,Y){S.onload=L,S.onerror=Y}),S.addEventListener("load",function(){y.loading|=1}),S.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Po(h,t,r)}h={type:"stylesheet",instance:h,count:1,state:y},a.set(c,h)}}}function i2(e,t){Qr.X(e,t);var n=Wa;if(n&&e){var r=wn(n).hoistableScripts,a=Ja(e),c=r.get(a);c||(c=n.querySelector(ls(a)),c||(e=k({src:e,async:!0},t),(t=$n.get(a))&&gd(e,t),c=n.createElement("script"),ft(c),Qt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(a,c))}}function s2(e,t){Qr.M(e,t);var n=Wa;if(n&&e){var r=wn(n).hoistableScripts,a=Ja(e),c=r.get(a);c||(c=n.querySelector(ls(a)),c||(e=k({src:e,async:!0,type:"module"},t),(t=$n.get(a))&&gd(e,t),c=n.createElement("script"),ft(c),Qt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(a,c))}}function Y1(e,t,n,r){var a=(a=H.current)?Io(a):null;if(!a)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Za(n.href),n=wn(a).hoistableStyles,r=n.get(t),r||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Za(n.href);var c=wn(a).hoistableStyles,h=c.get(e);if(h||(a=a.ownerDocument||a,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,h),(c=a.querySelector(rs(e)))&&!c._p&&(h.instance=c,h.state.loading=5),$n.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},$n.set(e,n),c||o2(a,e,n,h.state))),t&&r===null)throw Error(s(528,""));return h}if(t&&r!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ja(n),n=wn(a).hoistableScripts,r=n.get(t),r||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Za(e){return'href="'+hn(e)+'"'}function rs(e){return'link[rel="stylesheet"]['+e+"]"}function X1(e){return k({},e,{"data-precedence":e.precedence,precedence:null})}function o2(e,t,n,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),Qt(t,"link",n),ft(t),e.head.appendChild(t))}function Ja(e){return'[src="'+hn(e)+'"]'}function ls(e){return"script[async]"+e}function K1(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+hn(n.href)+'"]');if(r)return t.instance=r,ft(r),r;var a=k({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),ft(r),Qt(r,"style",a),Po(r,n.precedence,e),t.instance=r;case"stylesheet":a=Za(n.href);var c=e.querySelector(rs(a));if(c)return t.state.loading|=4,t.instance=c,ft(c),c;r=X1(n),(a=$n.get(a))&&pd(r,a),c=(e.ownerDocument||e).createElement("link"),ft(c);var h=c;return h._p=new Promise(function(y,S){h.onload=y,h.onerror=S}),Qt(c,"link",r),t.state.loading|=4,Po(c,n.precedence,e),t.instance=c;case"script":return c=Ja(n.src),(a=e.querySelector(ls(c)))?(t.instance=a,ft(a),a):(r=n,(a=$n.get(c))&&(r=k({},n),gd(r,a)),e=e.ownerDocument||e,a=e.createElement("script"),ft(a),Qt(a,"link",r),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,Po(r,n.precedence,e));return t.instance}function Po(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,c=a,h=0;h<r.length;h++){var y=r[h];if(y.dataset.precedence===t)c=y;else if(c!==a)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function pd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function gd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Fo=null;function Q1(e,t,n){if(Fo===null){var r=new Map,a=Fo=new Map;a.set(n,r)}else a=Fo,r=a.get(n),r||(r=new Map,a.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var c=n[a];if(!(c[cr]||c[jt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var h=c.getAttribute(t)||"";h=e+h;var y=r.get(h);y?y.push(c):r.set(h,[c])}}return r}function W1(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function c2(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Z1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function u2(e,t,n,r){if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Za(r.href),c=t.querySelector(rs(a));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Go.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,ft(c);return}c=t.ownerDocument||t,r=X1(r),(a=$n.get(a))&&pd(r,a),c=c.createElement("link"),ft(c);var h=c;h._p=new Promise(function(y,S){h.onload=y,h.onerror=S}),Qt(c,"link",r),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Go.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var _d=0;function d2(e,t){return e.stylesheets&&e.count===0&&Yo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Yo(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&_d===0&&(_d=62500*Gp());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Yo(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>_d?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(a)}}:null}function Go(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Yo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $o=null;function Yo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$o=new Map,t.forEach(f2,e),$o=null,Go.call(e))}function f2(e,t){if(!(t.state.loading&4)){var n=$o.get(e);if(n)var r=n.get(null);else{n=new Map,$o.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<a.length;c++){var h=a[c];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),r=h)}r&&n.set(null,r)}a=t.instance,h=a.getAttribute("data-precedence"),c=n.get(h)||r,c===r&&n.set(null,a),n.set(h,a),this.count++,r=Go.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),c?c.parentNode.insertBefore(a,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var as={$$typeof:P,Provider:null,Consumer:null,_currentValue:pe,_currentValue2:pe,_threadCount:0};function m2(e,t,n,r,a,c,h,y,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ci(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ci(0),this.hiddenUpdates=ci(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=c,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function J1(e,t,n,r,a,c,h,y,S,L,Y,Q){return e=new m2(e,t,n,h,S,L,Y,Q,y),t=1,c===!0&&(t|=24),c=Sn(3,null,null,t),e.current=c,c.stateNode=e,t=Qc(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:r,isDehydrated:n,cache:t},eu(c),e}function em(e){return e?(e=Ra,e):Ra}function tm(e,t,n,r,a,c){a=em(a),r.context===null?r.context=a:r.pendingContext=a,r=hl(t),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=pl(e,r,t),n!==null&&(bn(n,e,t),zi(n,e,t))}function nm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vd(e,t){nm(e,t),(e=e.alternate)&&nm(e,t)}function rm(e){if(e.tag===13||e.tag===31){var t=ea(e,67108864);t!==null&&bn(t,e,67108864),vd(e,67108864)}}function lm(e){if(e.tag===13||e.tag===31){var t=Nn();t=ql(t);var n=ea(e,t);n!==null&&bn(n,e,t),vd(e,t)}}var Xo=!0;function h2(e,t,n,r){var a=B.T;B.T=null;var c=ne.p;try{ne.p=2,bd(e,t,n,r)}finally{ne.p=c,B.T=a}}function p2(e,t,n,r){var a=B.T;B.T=null;var c=ne.p;try{ne.p=8,bd(e,t,n,r)}finally{ne.p=c,B.T=a}}function bd(e,t,n,r){if(Xo){var a=yd(r);if(a===null)ad(e,t,r,Ko,n),im(e,r);else if(_2(a,e,t,n,r))r.stopPropagation();else if(im(e,r),t&4&&-1<g2.indexOf(e)){for(;a!==null;){var c=On(a);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var h=Lt(c.pendingLanes);if(h!==0){var y=c;for(y.pendingLanes|=2,y.entangledLanes|=2;h;){var S=1<<31-ot(h);y.entanglements[1]|=S,h&=~S}br(c),(Ze&6)===0&&(Ao=dt()+500,Ji(0))}}break;case 31:case 13:y=ea(c,2),y!==null&&bn(y,c,2),Do(),vd(c,2)}if(c=yd(r),c===null&&ad(e,t,r,Ko,n),c===a)break;a=c}a!==null&&r.stopPropagation()}else ad(e,t,r,null,n)}}function yd(e){return e=Sa(e),xd(e)}var Ko=null;function xd(e){if(Ko=null,e=fn(e),e!==null){var t=p(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=_(t),e!==null)return e;e=null}else if(n===31){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ko=e,null}function am(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Kn()){case lr:return 2;case zl:return 8;case Jr:case ar:return 32;case Ul:return 268435456;default:return 32}default:return 32}}var wd=!1,Tl=null,Ml=null,jl=null,is=new Map,ss=new Map,Nl=[],g2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function im(e,t){switch(e){case"focusin":case"focusout":Tl=null;break;case"dragenter":case"dragleave":Ml=null;break;case"mouseover":case"mouseout":jl=null;break;case"pointerover":case"pointerout":is.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ss.delete(t.pointerId)}}function os(e,t,n,r,a,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:c,targetContainers:[a]},t!==null&&(t=On(t),t!==null&&rm(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function _2(e,t,n,r,a){switch(t){case"focusin":return Tl=os(Tl,e,t,n,r,a),!0;case"dragenter":return Ml=os(Ml,e,t,n,r,a),!0;case"mouseover":return jl=os(jl,e,t,n,r,a),!0;case"pointerover":var c=a.pointerId;return is.set(c,os(is.get(c)||null,e,t,n,r,a)),!0;case"gotpointercapture":return c=a.pointerId,ss.set(c,os(ss.get(c)||null,e,t,n,r,a)),!0}return!1}function sm(e){var t=fn(e.target);if(t!==null){var n=p(t);if(n!==null){if(t=n.tag,t===13){if(t=_(n),t!==null){e.blockedOn=t,Zn(e.priority,function(){lm(n)});return}}else if(t===31){if(t=m(n),t!==null){e.blockedOn=t,Zn(e.priority,function(){lm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yd(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ka=r,n.target.dispatchEvent(r),ka=null}else return t=On(n),t!==null&&rm(t),e.blockedOn=n,!1;t.shift()}return!0}function om(e,t,n){Qo(e)&&n.delete(t)}function v2(){wd=!1,Tl!==null&&Qo(Tl)&&(Tl=null),Ml!==null&&Qo(Ml)&&(Ml=null),jl!==null&&Qo(jl)&&(jl=null),is.forEach(om),ss.forEach(om)}function Wo(e,t){e.blockedOn===t&&(e.blockedOn=null,wd||(wd=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,v2)))}var Zo=null;function cm(e){Zo!==e&&(Zo=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Zo===e&&(Zo=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],a=e[t+2];if(typeof r!="function"){if(xd(r||n)===null)continue;break}var c=On(n);c!==null&&(e.splice(t,3),t-=3,yu(c,{pending:!0,data:a,method:n.method,action:r},r,a))}}))}function ei(e){function t(S){return Wo(S,e)}Tl!==null&&Wo(Tl,e),Ml!==null&&Wo(Ml,e),jl!==null&&Wo(jl,e),is.forEach(t),ss.forEach(t);for(var n=0;n<Nl.length;n++){var r=Nl[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Nl.length&&(n=Nl[0],n.blockedOn===null);)sm(n),n.blockedOn===null&&Nl.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var a=n[r],c=n[r+1],h=a[gt]||null;if(typeof c=="function")h||cm(n);else if(h){var y=null;if(c&&c.hasAttribute("formAction")){if(a=c,h=c[gt]||null)y=h.formAction;else if(xd(a)!==null)continue}else y=h.action;typeof y=="function"?n[r+1]=y:(n.splice(r,3),r-=3),cm(n)}}}function um(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(h){return a=h})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function kd(e){this._internalRoot=e}Jo.prototype.render=kd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,r=Nn();tm(n,r,e,t,null,null)},Jo.prototype.unmount=kd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tm(e.current,2,null,e,null,null),Do(),t[or]=null}};function Jo(e){this._internalRoot=e}Jo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nl.length&&t!==0&&t<Nl[n].priority;n++);Nl.splice(n,0,e),n===0&&sm(e)}};var dm=l.version;if(dm!=="19.2.7")throw Error(s(527,dm,"19.2.7"));ne.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=b(t),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var b2={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{qe=ec.inject(b2),Qe=ec}catch{}}return us.createRoot=function(e,t){if(!d(e))throw Error(s(299));var n=!1,r="",a=v0,c=b0,h=y0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError)),t=J1(e,1,!1,null,null,n,r,null,a,c,h,um),e[or]=t.current,ld(e),new kd(t)},us.hydrateRoot=function(e,t,n){if(!d(e))throw Error(s(299));var r=!1,a="",c=v0,h=b0,y=y0,S=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.formState!==void 0&&(S=n.formState)),t=J1(e,1,!0,t,n??null,r,a,S,c,h,y,um),t.context=em(null),n=t.current,r=Nn(),r=ql(r),a=hl(r),a.callback=null,pl(n,a,r),n=r,t.current.lanes=n,ir(t,n),br(t),e[or]=t.current,ld(e),new Jo(t)},us.version="19.2.7",us}var xm;function R2(){if(xm)return Td.exports;xm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),Td.exports=N2(),Td.exports}var A2=R2();const C2=Eh(A2),wm=i=>{let l;const o=new Set,s=(b,w)=>{const k=typeof b=="function"?b(l):b;if(!Object.is(k,l)){const T=l;l=w??(typeof k!="object"||k===null)?k:Object.assign({},l,k),o.forEach(U=>U(l,T))}},d=()=>l,m={setState:s,getState:d,getInitialState:()=>g,subscribe:b=>(o.add(b),()=>o.delete(b))},g=l=i(s,d,m);return m},D2=(i=>i?wm(i):wm),O2=i=>i;function L2(i,l=O2){const o=_s.useSyncExternalStore(i.subscribe,_s.useCallback(()=>l(i.getState()),[i,l]),_s.useCallback(()=>l(i.getInitialState()),[i,l]));return _s.useDebugValue(o),o}const km=i=>{const l=D2(i),o=s=>L2(l,s);return Object.assign(o,l),o},B2=(i=>i?km(i):km);function z2(){const i=new Uint8Array(16);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(i);else for(let o=0;o<i.length;o+=1)i[o]=Math.floor(Math.random()*256);let l="";for(const o of i)l+=o.toString(16).padStart(2,"0");return l}const tf="pkp.user",nf="pkp.savedDevices",rf="pkp.ideDrafts",lf="pkp.ideSettings",xs="Prototype Version 0.6.7";function vc(i){try{const l=localStorage.getItem(i);return l?JSON.parse(l):null}catch{return null}}function bc(i,l){try{localStorage.setItem(i,JSON.stringify(l))}catch{}}function U2(){const i=vc(tf);return i&&typeof i.username=="string"&&typeof i.userID=="string"?i:null}function Rd(i){bc(tf,i)}function mc(){return vc(nf)??[]}function li(i){bc(nf,i)}function q2(){li([])}function H2(){try{localStorage.removeItem(tf),localStorage.removeItem(nf),localStorage.removeItem(rf),localStorage.removeItem(lf)}catch{}}function tc(){var i;return((i=vc(rf))==null?void 0:i.filter(l=>l.path&&typeof l.content=="string"))??[]}function ds(i){bc(rf,i)}function Sm(){const i=vc(lf)??{};return{clearTerminalOnRun:!!i.clearTerminalOnRun,simplifiedErrors:i.simplifiedErrors!==!1}}function V2(i){bc(lf,i)}function Ad(i){const l=mc(),o=l.findIndex(s=>s.deviceID===i.deviceID);return o>=0?l[o]=i:l.push(i),li(l),l}function I2(i){const l=mc().filter(o=>o.deviceID!==i);return li(l),l}const oc="b8e06067-62ad-41ba-9231-206ae80ab551",P2="f897177b-aee8-4767-8ecc-cc694fd5fce0",F2="f897177b-aee8-4767-8ecc-cc694fd5fce1",Cd=20,G2=12,$2=new TextEncoder;function Y2(i){return new Promise(l=>setTimeout(l,i))}function yc(){return typeof navigator<"u"&&"bluetooth"in navigator}function Mh(i){return i?i.startsWith("PicoW-")?i.slice(6):i:"Pico"}async function X2(i){if(!yc())throw new Error("Web Bluetooth er ikke tilgængelig i denne browser.");const l=i?[{services:[oc],name:`PicoW-${i}`}]:[{services:[oc]},{namePrefix:"PicoW-"}];return navigator.bluetooth.requestDevice({filters:l,optionalServices:[oc]})}async function jh(){if(!yc()||!navigator.bluetooth.getDevices)return[];try{return await navigator.bluetooth.getDevices()}catch{return[]}}class K2{constructor(){_e(this,"device",null);_e(this,"writeChar",null);_e(this,"notifyChar",null);_e(this,"buffer","");_e(this,"decoder",new TextDecoder);_e(this,"writeQueue",Promise.resolve());_e(this,"disconnectNotified",!1);_e(this,"onLine",()=>{});_e(this,"onDisconnect",()=>{});_e(this,"handleNotification",l=>{const o=l.target;if(!(o!=null&&o.value))return;this.buffer+=this.decoder.decode(o.value.buffer,{stream:!0});let s=this.buffer.indexOf(`
`);for(;s>=0;){const d=this.buffer.slice(0,s).trim();this.buffer=this.buffer.slice(s+1),d&&this.onLine(d),s=this.buffer.indexOf(`
`)}});_e(this,"handleDisconnected",()=>{var l;this.disconnectNotified||(this.disconnectNotified=!0,(l=this.device)==null||l.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.writeChar=null,this.notifyChar=null,this.onDisconnect())})}get connected(){var l,o;return!!((o=(l=this.device)==null?void 0:l.gatt)!=null&&o.connected)}async connect(l){var d;this.device&&this.device!==l&&this.device.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.device=l,this.buffer="",this.decoder=new TextDecoder,this.disconnectNotified=!1,l.removeEventListener("gattserverdisconnected",this.handleDisconnected),l.addEventListener("gattserverdisconnected",this.handleDisconnected);const o=await((d=l.gatt)==null?void 0:d.connect());if(!o)throw new Error("Kunne ikke åbne Bluetooth-forbindelsen.");const s=await o.getPrimaryService(oc);this.writeChar=await s.getCharacteristic(P2),this.notifyChar=await s.getCharacteristic(F2),await this.notifyChar.startNotifications(),this.notifyChar.addEventListener("characteristicvaluechanged",this.handleNotification)}writeLine(l){const o=this.writeQueue.then(()=>this.doWrite(l));return this.writeQueue=o.catch(()=>{}),o}async doWrite(l){if(!this.writeChar)throw new Error("Ingen forbindelse.");const o=$2.encode(`${l}
`),d=this.writeChar.properties.writeWithoutResponse&&typeof this.writeChar.writeValueWithoutResponse=="function"?this.writeChar.writeValueWithoutResponse.bind(this.writeChar):this.writeChar.writeValue.bind(this.writeChar);for(let p=0;p<o.length;p+=Cd){const _=o.slice(p,p+Cd);await d(_),p+Cd<o.length&&await Y2(G2)}}disconnect(){var o;const l=this.device;(o=l==null?void 0:l.gatt)!=null&&o.connected?l.gatt.disconnect():this.handleDisconnected()}}class Q2{constructor(l,o){_e(this,"send");_e(this,"onMessage");_e(this,"inActive",!1);_e(this,"inExpectedTotal",0);_e(this,"inStreamId",0);_e(this,"inParts",new Map);_e(this,"inProgress",null);_e(this,"outPendingLines",null);_e(this,"outWaitingAck",!1);_e(this,"outStreamId",0);_e(this,"outNextStreamId",1);_e(this,"outCache",new Map);_e(this,"outProgress",null);_e(this,"outResolve",null);_e(this,"outReject",null);this.send=l,this.onMessage=o}reset(){this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear(),this.inProgress=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outStreamId=0,this.outCache.clear(),this.outProgress=null,this.outResolve=null,this.outReject=null}handleLine(l){var s;if(l.startsWith("prep,")){const d=l.split(","),p=d.length>=2&&/^\d+$/.test(d[1])?parseInt(d[1],10):null,_=d.length>=3&&/^\d+$/.test(d[2])?parseInt(d[2],10):0;p!==null&&p>0&&(this.inActive=!0,this.inExpectedTotal=p,this.inStreamId=_,this.inParts.clear(),this.send(_>0?`ack:prep,${_}`:"ack:prep"));return}if(l==="ack:prep"||l===`ack:prep,${this.outStreamId}`){this.flushOutbound();return}if(l.startsWith("miss,")){const d=l.split(",");if(d.length>=3&&/^\d+$/.test(d[1])&&/^\d+$/.test(d[2])){const p=parseInt(d[1],10),_=parseInt(d[2],10),m=this.outCache.get(_);p===this.outStreamId&&m&&this.send(m)}return}const o=this.parseNumbered(l);if(o){const{idx:d,payload:p}=o;if(!this.inActive){this.onMessage(p);return}this.inParts.has(d)||(this.inParts.set(d,p),(s=this.inProgress)==null||s.call(this,this.inParts.size,this.inExpectedTotal));let _=0;for(let m=1;m<=this.inExpectedTotal;m+=1)if(!this.inParts.has(m)){_=m;break}if(_>0&&this.inStreamId>0&&d>_&&this.send(`miss,${this.inStreamId},${_}`),this.inParts.size>=this.inExpectedTotal){for(let m=1;m<=this.inExpectedTotal;m+=1){const g=this.inParts.get(m);g!==void 0&&this.onMessage(g)}this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear()}return}this.onMessage(l)}setInboundProgress(l){this.inProgress=l}async sendReliable(l,o){if(this.outPendingLines!==null||this.outWaitingAck)throw new Error("Reliable stream is already sending.");const s=l.length===0?[""]:l;this.outPendingLines=[...s],this.outWaitingAck=!0,this.outProgress=o??null,this.outStreamId=this.outNextStreamId,this.outNextStreamId+=1,this.outCache.clear();const d=new Promise((p,_)=>{this.outResolve=p,this.outReject=_});try{await this.send(`prep,${s.length},${this.outStreamId}`)}catch(p){throw this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null,p}await d}async flushOutbound(){var l,o,s,d;if(!this.outWaitingAck||this.outPendingLines===null){this.outWaitingAck=!1,this.outProgress=null,(l=this.outResolve)==null||l.call(this),this.outResolve=null,this.outReject=null;return}try{const p=this.outPendingLines.length;for(let _=0;_<p;_+=1){const m=this.outPendingLines[_],g=`${_+1}-${m}`;this.outCache.set(_+1,g),await this.send(g),(o=this.outProgress)==null||o.call(this,_+1,p,m)}(s=this.outResolve)==null||s.call(this)}catch(p){(d=this.outReject)==null||d.call(this,p)}finally{this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null}}parseNumbered(l){const o=l.indexOf("-");if(o<=0)return null;const s=l.slice(0,o);if(!/^\d+$/.test(s))return null;const d=parseInt(s,10);return d<1?null:{idx:d,payload:l.slice(o+1)}}}const si=11,ws=31,W2=2,Z2=60,ai=4,ii=60;function J2(i,l){return Math.max(14,Math.min(56,Math.min(i,l)*.05))}function Nh(i,l,o=si,s=ws){const d=J2(i,l),p=Math.max(1,i-2*d),_=Math.max(1,l-2*d);return{areaW:i,areaH:l,cols:o,rows:s,margin:d,stepX:p/Math.max(1,o-1),stepY:_/Math.max(1,s-1)}}function Rh(i,l){return l.margin+i/2*l.stepX}function Ah(i,l){const o=l.margin+i/2*l.stepY;return l.areaH-o}function vs(i,l){return i.centerX2===null||i.centerY2===null||i.spanX===null||i.spanY===null?null:{cx:Rh(i.centerX2,l),cy:Ah(i.centerY2,l),width:i.spanX*l.stepX,height:i.spanY*l.stepY}}function eg(i){const l=[];for(let o=0;o<i.cols;o+=1)for(let s=0;s<i.rows;s+=1)l.push({x:i.margin+o*i.stepX,y:i.areaH-(i.margin+s*i.stepY)});return l}function Dd(i,l,o,s,d){const p=(g,b,w,k)=>{const T=b%2,U=k*2;let N=T,G=1/0;for(let I=T;I<=U;I+=2){const V=Math.abs(w(I)-g);V<G&&(G=V,N=I)}return Math.max(b,Math.min(U-b,N))},_=p(i,o,g=>Rh(g,d),d.cols-1),m=p(l,s,g=>Ah(g,d),d.rows-1);return{centerX2:_,centerY2:m}}const ha=6e3,tg=15,Em="",hc=[32,64,128,192],ng=ha*10,rg=3500,lg=8e3,ag=2,ig=ha,sg=ha*8;function Od(i){return new Promise(l=>setTimeout(l,i))}function ti(i){if(i!=null&&i.aborted)throw new DOMException("BLE file read cancelled","AbortError")}function Tm(i){return i instanceof DOMException&&i.name==="AbortError"}function Al(i){return i.replace(/[\r\n,]/g," ").trim()}function Mm(i){return i.replace(/[\r\n,]/g,"").trim()}class og{constructor(l={}){_e(this,"transport",new K2);_e(this,"stream");_e(this,"events");_e(this,"waiters",[]);_e(this,"collectingLayout",!1);_e(this,"layoutBuffer",[]);_e(this,"layoutResolve",null);_e(this,"collectingLines",!1);_e(this,"lineBuffer",[]);_e(this,"lineResolve",null);_e(this,"lineReject",null);_e(this,"lineCollectId",0);_e(this,"controlPumpActive",!1);_e(this,"pendingButtons",[]);_e(this,"pendingSliders",new Map);_e(this,"pendingToggles",new Map);_e(this,"pendingJoysticks",new Map);_e(this,"pendingDpads",[]);_e(this,"expectingDisconnect",!1);_e(this,"disconnectMessage",null);_e(this,"busy",!1);_e(this,"fsCapabilities",null);this.events=l,this.stream=new Q2(o=>this.transport.writeLine(o),o=>this.onDeviceMessage(o)),this.transport.onLine=o=>this.stream.handleLine(o),this.transport.onDisconnect=()=>this.handleDisconnect()}get device(){return this.transport.device}get deviceName(){var l;return Mh((l=this.transport.device)==null?void 0:l.name)}get connected(){return this.transport.connected}setBusy(l){if(this.busy=l,l){this.pendingButtons=[],this.pendingSliders.clear(),this.pendingToggles.clear(),this.pendingJoysticks.clear(),this.pendingDpads=[];return}this.pumpControls()}log(l,o){var s,d;(d=(s=this.events).onLog)==null||d.call(s,l,o)}progress(l,o){var s,d;(d=(s=this.events).onProgress)==null||d.call(s,l,o)}onDeviceMessage(l){var s,d;if(l==="disconnect"||l==="disconnect_private"){const p=l==="disconnect_private"?"Du blev afbrudt, fordi enheden er privat, og andre brugere ikke må forbinde.":"Enheden afbrød forbindelsen.";this.disconnectMessage=p,this.log("warning",p),this.expectingDisconnect=!0,this.transport.disconnect();return}if(this.collectingLines){if(l==="__END__"){const p=this.lineBuffer;this.lineBuffer=[],this.collectingLines=!1,(s=this.lineResolve)==null||s.call(this,p),this.lineResolve=null;return}this.lineBuffer.push(l);return}if(this.collectingLayout){if(l==="__END__"){const p=this.layoutBuffer;this.layoutBuffer=[],this.collectingLayout=!1,(d=this.layoutResolve)==null||d.call(this,p),this.layoutResolve=null;return}!l.startsWith("ACK")&&!l.startsWith("ERR")&&!l.startsWith("#VERSION")?this.layoutBuffer.push(l):l.startsWith("#VERSION")&&this.layoutBuffer.push(l);return}l.startsWith("ERR")?this.log("error",l):l.startsWith("radar,")?this.handleRadarLine(l):l.startsWith("text,")?this.handleTextLine(l):l.startsWith("toggle_state,")?this.handleToggleStateLine(l):l.startsWith("slider_state,")?this.handleSliderStateLine(l):l.startsWith("plot_clear,")?this.handlePlotClearLine(l):l.startsWith("plot,")?this.handlePlotLine(l):l.startsWith("ACK")||l==="LAYOUT_SAVED"||l.startsWith("READY")?this.log("success",l):this.log("info",`rx: ${l}`);const o=this.waiters.findIndex(p=>p.match(l));if(o>=0){const p=this.waiters[o];this.waiters.splice(o,1),clearTimeout(p.timer),p.resolve(l)}}waitFor(l,o,s){return new Promise((d,p)=>{const _=setTimeout(()=>{const m=this.waiters.findIndex(g=>g.timer===_);m>=0&&this.waiters.splice(m,1),p(new Error(`Timeout: ${s}`))},o);this.waiters.push({match:l,resolve:d,reject:p,timer:_})})}async collectLines(l,o,s,d,p){ti(d);const _=this.lineCollectId+1;this.lineCollectId=_,this.collectingLines=!0,this.lineBuffer=[],this.stream.setInboundProgress(p??null);const m=new Promise((g,b)=>{let w=!1;const k=()=>this.lineCollectId===_,T=()=>{w=!0,k()&&(this.lineReject=null,this.stream.setInboundProgress(null)),d==null||d.removeEventListener("abort",N)},U=V=>{w||(clearTimeout(G),k()&&(this.collectingLines=!1,this.lineBuffer=[],this.lineResolve=null),T(),b(V))},N=()=>{U(new DOMException("BLE file read cancelled","AbortError"))},G=setTimeout(()=>{k()&&U(new Error(`Timeout: ${s}`))},o);this.lineResolve=g,this.lineReject=U;const I=this.lineResolve;this.lineResolve=V=>{k()&&(clearTimeout(G),T(),I==null||I(V))},d==null||d.addEventListener("abort",N,{once:!0})});return await this.transport.writeLine(l),m}async exchange(l,o,s,d=3){let p;for(let _=1;_<=d;_+=1)try{return await this.transport.writeLine(l),await this.waitFor(o,ha,s)}catch(m){p=m,this.log("warning",`${s}: forsøg ${_}/${d} mislykkedes`)}throw p instanceof Error?p:new Error(`Failed: ${s}`)}async connect(l){this.expectingDisconnect=!1,this.stream.reset(),this.progress(5,"Forbinder til Bluetooth..."),await this.transport.connect(l)}async runHandshake(l){var re,ve,ce,W;await Od(350),this.progress(18,"Klargør forbindelse..."),this.progress(26,"Sender HELLO..."),await this.exchange("HELLO",Z=>Z==="ACK:HELLO","HELLO"),this.progress(34,"Forbindelse bekræftet"),this.progress(44,"Spørger om ejerskab...");const o=await this.exchange("who_are_you",Z=>Z==="unowned"||Z.startsWith("unowned,")||Z.startsWith("owned,"),"who_are_you");if(this.progress(56,"Ejerskab modtaget"),o==="unowned"||o.startsWith("unowned,"))return{kind:"unowned",deviceName:((re=o.split(",")[1])==null?void 0:re.trim())||void 0};const s=o.split(","),d=s[1]??"",p=((ve=s[2])==null?void 0:ve.trim())??"",_=s[3]!==void 0?parseInt(s[3],10)===1:!0,m=s[4]!==void 0?parseInt(s[4],10)===1:!1,g=s.length>=7,b=g?parseInt(s[5]??"0",10)===1:m,w=((ce=s[g?6:5])==null?void 0:ce.trim())||void 0,k=((W=s[g?7:6])==null?void 0:W.trim())||void 0;await this.exchange("ACK:ownership",Z=>Z==="READY:permission","ACK:ownership",1),this.progress(66,"Anmoder om adgang...");const T=await this.exchange(`request_permission,${l.userID},${Al(l.username)}`,Z=>Z.startsWith("perm,"),"request_permission");this.progress(76,"Adgang vurderet");const U=T.split(",").filter(Z=>/^\d+$/.test(Z)),N=U.length>=1?parseInt(U[0]??"0",10):0,G=U.length>=2?parseInt(U[1]??"0",10):0,I=U.length>=3?parseInt(U[2]??"0",10):G;if(N===0)return this.expectingDisconnect=!0,this.disconnectMessage="Du kan ikke forbinde, fordi enheden er privat, og andre brugere ikke må forbinde.",{kind:"denied",ownerName:w,canOthersConnect:_};const V=l.userID===d,X=G===1||V,P=I===1||V;return await this.transport.writeLine("ACK:permission"),{kind:"owned",ownerID:d,ownerName:w,deviceName:k,icon:p,canEdit:X,canEditCode:P,isOwnedByMe:V,canOthersConnect:_,canOthersEdit:m,canOthersEditCode:b}}async create(l,o,s,d,p,_,m){const g=s?1:0,b=s&&d?1:0,w=s&&p?1:0;await this.exchange(`create,${l.userID},${Al(l.username)},${Mm(o)},${g},${b},${w},${_},${m}`,k=>k==="ACK:create","create")}async updateDeviceSettings(l,o,s,d,p,_,m){const g=o?1:0,b=o&&s?1:0,w=o&&d?1:0;await this.exchange(`settings_update,${Mm(l)},${g},${b},${w},${p},${_},${Al(m??"")}`,k=>k==="ACK:settings_update","settings_update",3)}async requestLayout(){this.progress(84,"Henter kontrolpanel..."),this.collectingLayout=!0,this.layoutBuffer=[];const l=new Promise((s,d)=>{this.layoutResolve=s;const p=setTimeout(()=>{this.collectingLayout&&(this.collectingLayout=!1,this.layoutResolve=null,d(new Error("Timeout: layout")))},ha*2),_=this.layoutResolve;this.layoutResolve=m=>{clearTimeout(p),_==null||_(m)}});await this.transport.writeLine("request"),this.progress(92,"Modtager kontrolpanel...");const o=await l;return this.progress(100,"Klar"),o}async saveLayout(l){await this.exchange("update",d=>d==="ACK:update","update",3).catch(()=>{this.log("warning","ACK:update udeblev (fortsætter).")});const o=l.map(d=>{const p=m=>m===null?"n":String(m),_=`update,${d.type},${d.name},${p(d.centerX2)},${p(d.centerY2)},${p(d.spanX)},${p(d.spanY)},${d.rotation}`;return d.type==="slider"?`${_},${d.sliderMin??0},${d.sliderMax??100},${d.sliderRecenter??"none"}`:d.type==="toggle"?`${_},${d.toggleInitial?1:0}`:d.type==="radar"?[_,d.radarMinAngle??0,d.radarMaxAngle??180,d.radarMaxDistance??200,d.radarFadeMs??1200].join(","):d.type==="joystick"?[_,d.joystickXMin??-100,d.joystickXMax??100,d.joystickYMin??-100,d.joystickYMax??100,d.joystickXRecenter??"middle",d.joystickYRecenter??"middle"].join(","):d.type==="plot"?[_,d.plotMin??0,d.plotMax??100,d.plotHistory??30,d.plotStyle??"line",d.plotXAxis??"labels",d.plotYAxis??"range",d.plotLabelMaxPercent??24].join(","):_});o.push("__END__");const s=this.waitFor(d=>d==="LAYOUT_SAVED",ha*2,"LAYOUT_SAVED");await this.stream.sendReliable(o),await s}async listFiles(l="/"){return(await this.collectLines(`fs_list,${Al(l)}`,ha*3,"fs_list")).filter(s=>s.startsWith("fs_entry,")).map(s=>{const[,d,p,_]=s.split(","),m=d==="file"||d==="dir"?d:"unknown",g=parseInt(_??"",10),b=p||"/";return{name:b.split("/").filter(Boolean).pop()??b,path:b,type:m,...Number.isFinite(g)&&g>=0?{size:g}:{}}})}handleRadarLine(l){var _,m,g;const o=l.split(",");if(o.length<4)return;const s=(_=o[1])==null?void 0:_.trim(),d=parseFloat(o[2]??""),p=parseFloat(o[3]??"");!s||!Number.isFinite(d)||!Number.isFinite(p)||((g=(m=this.events).onRadar)==null||g.call(m,s,d,p),this.log("info",`rx: ${l}`))}handleTextLine(l){var g,b;const o=l.indexOf(","),s=o>=0?l.indexOf(",",o+1):-1;if(o<0||s<0)return;const d=l.slice(o+1,s),p=l.slice(s+1),_=d==null?void 0:d.trim();if(!_)return;const m=p.split(Em).join(`
`);(b=(g=this.events).onText)==null||b.call(g,_,m),this.log("info",`rx: ${l}`)}handleToggleStateLine(l){var p,_,m;const o=l.split(",");if(o.length<3)return;const s=(p=o[1])==null?void 0:p.trim(),d=parseInt(o[2]??"",10);!s||!Number.isFinite(d)||((m=(_=this.events).onToggleState)==null||m.call(_,s,d===1),this.log("info",`rx: ${l}`))}handleSliderStateLine(l){var p,_,m;const o=l.split(",");if(o.length<3)return;const s=(p=o[1])==null?void 0:p.trim(),d=parseFloat(o[2]??"");!s||!Number.isFinite(d)||((m=(_=this.events).onSliderState)==null||m.call(_,s,d),this.log("info",`rx: ${l}`))}handlePlotLine(l){var _,m,g;const o=l.split(",");if(o.length<3)return;const s=(_=o[1])==null?void 0:_.trim(),d=parseFloat(o[2]??"");if(!s||!Number.isFinite(d))return;const p=o.slice(3).join(",").split(Em).join(`
`).trim()||void 0;(g=(m=this.events).onPlot)==null||g.call(m,s,d,p),this.log("info",`rx: ${l}`)}handlePlotClearLine(l){var d,p,_;const o=l.split(",");if(o.length<2)return;const s=(d=o[1])==null?void 0:d.trim();s&&((_=(p=this.events).onPlotClear)==null||_.call(p,s),this.log("info",`rx: ${l}`))}async readText(l,o,s){o==null||o(4,"Validerer Picoens Bluetooth-filsystem...");const d=await this.getFilesystemCapabilities(s);if(d.streamRead)try{return await this.readTextStream(l,d,o,s)}catch(p){if(s!=null&&s.aborted||Tm(p)||!d.pageRead)throw p;this.log("warning",p instanceof Error?`fs_read_stream fejlede; bruger paged read: ${p.message}`:"fs_read_stream fejlede; bruger paged read")}return this.readTextPaged(l,o,s)}async getFilesystemCapabilities(l){if(this.fsCapabilities)return this.fsCapabilities;const o=await this.collectLines("fs_capabilities",ig,"fs_capabilities",l),s=o.find(w=>w.startsWith("ERR"));if(s)throw new Error(s);const d=o.find(w=>w.startsWith("fs_capabilities,"));if(!d)throw new Error("Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.");const p=d.split(","),_=new Map;for(let w=1;w<p.length-1;w+=2)_.set(p[w],p[w+1]);const m=parseInt(_.get("max_page")??"",10),g=parseInt(_.get("stream_chunk")??"",10),b={version:_.get("version")||void 0,pageRead:_.get("page_read")==="1",maxPageSize:Number.isFinite(m)&&m>0?m:32,streamRead:_.get("stream_read")==="1",streamChunkSize:Number.isFinite(g)&&g>0?g:128};if(!b.pageRead&&!b.streamRead)throw new Error("Picoens Bluetooth-runtime meldte, at file-read ikke er understøttet.");return this.fsCapabilities=b,b}async readTextPaged(l,o,s){const d=await this.getFilesystemCapabilities(s);let p=0,_=cg(d.maxPageSize),m=0,g=null,b="";const w=`Indlæser ${Ld(l)}...`;ti(s),o==null||o(5,w);for(let k=0;k<512;k+=1){ti(s),m===0&&(o==null||o(7,w));const U=await this.readPageWithRetry(l,m,p,_,s),N=U.lines;p=U.nextPageSizeIndex,_=U.maxPageSizeIndex,ti(s);const G=N.find(Z=>Z.startsWith("ERR"));if(G)throw new Error(G);const I=N.find(Z=>Z.startsWith("fs_page,"));if(!I)throw new Error("ERR: fs_read_page missing data");const[,V,X,P,re=""]=I.split(",",5);if(V!==l)throw new Error("ERR: fs_read_page stale data");const ve=parseInt(X??"",10),ce=parseInt(P??"",10);if(!Number.isFinite(ve)||ve!==m||!Number.isFinite(ce))throw new Error("ERR: fs_read_page invalid data");g=ce,b+=re,m+=Math.floor(re.length/2);const W=g>0?8+Math.min(87,Math.round(m/g*87)):95;if(o==null||o(W,w),m>=g||re.length===0)return o==null||o(100,"Fil indlæst fra Pico"),new TextDecoder().decode(Nm(b))}throw new Error("ERR: fs_read_page too many pages")}async readPageWithRetry(l,o,s,d,p){let _,m=Math.min(s,d);for(;m>=0;){const g=hc[m],b=m===0?ag:1,w=m===0?lg:rg;for(let k=1;k<=b;k+=1){ti(p);try{return{lines:await this.collectLines(`fs_read_page,${Al(l)},${o},${g}`,w,`fs_read_page ${o}`,p),nextPageSizeIndex:Math.min(m+1,d),maxPageSizeIndex:d}}catch(T){if(p!=null&&p.aborted||Tm(T))throw T;if(_=T,k<b||m>0){const N=m>0&&k>=b?hc[m-1]:g;this.log("warning",`fs_read_page ${o} (${g} bytes) fejlede; prøver ${N} bytes`),await Od(80+k*80)}}}if(m===0)break;d=Math.max(0,m-1),m=d}throw _ instanceof Error?_:new Error(`Timeout: fs_read_page ${o}`)}async readTextStream(l,o,s,d){const p=`Indlæser ${Ld(l)}...`,_=Math.max(16,Math.min(192,o.streamChunkSize||128));s==null||s(5,p);const m=await this.collectLines(`fs_read_stream,${Al(l)},${_}`,sg,`fs_read_stream ${l}`,d,(W,Z)=>{const we=8+Math.round(Math.min(W,Z)/Math.max(1,Z)*87);s==null||s(Math.min(95,we),p)});ti(d);const g=m.find(W=>W.startsWith("ERR"));if(g)throw new Error(g);const b=m.find(W=>W.startsWith("fs_stream_begin,")),w=m.find(W=>W.startsWith("fs_stream_end,"));if(!b||!w)throw new Error("ERR: fs_read_stream missing metadata");const[,k,T]=b.split(",",4),[,U,N,G]=w.split(",",4),I=parseInt(T??"",10),V=parseInt(N??"",10),X=parseInt(G??"",10);if(k!==l||U!==l||!Number.isFinite(I)||I!==V||!Number.isFinite(X))throw new Error("ERR: fs_read_stream invalid metadata");let P=0,re="";for(const W of m){if(!W.startsWith("fs_stream_chunk,"))continue;const[,Z,we=""]=W.split(",",3),Ee=parseInt(Z??"",10);if(!Number.isFinite(Ee)||Ee!==P||we.length%2!==0)throw new Error("ERR: fs_read_stream invalid chunk");re+=we,P+=Math.floor(we.length/2)}if(P!==I)throw new Error("ERR: fs_read_stream size mismatch");const ve=Nm(re);if(jm(ve)!==X)throw new Error("ERR: fs_read_stream checksum mismatch");return s==null||s(100,"Fil indlæst fra Pico"),new TextDecoder().decode(ve)}async writeText(l,o,s){s==null||s(5,"Klargør BLE-overførsel..."),await this.exchange(`fs_write_begin,${Al(l)}`,w=>w==="ACK:fs_write_begin","fs_write_begin",2),s==null||s(18,"Pico er klar til filen...");const d=new TextEncoder().encode(o),p=[...d].map(w=>w.toString(16).padStart(2,"0")).join(""),_=[];for(let w=0;w<p.length;w+=160)_.push(`fs_write_chunk,${p.slice(w,w+160)}`);_.push("fs_write_end");const m=jm(d),g=this.waitFor(w=>w==="ACK:fs_write_done"||w.startsWith("ACK:fs_write_done,")||w.startsWith("ERR"),ng,"fs_write_done");s==null||s(d.length===0?85:18,d.length===0?"Sender tom fil via Bluetooth...":`Sender 0/${d.length} bytes via Bluetooth...`),await this.stream.sendReliable(_,(w,k,T)=>{if(!T.startsWith("fs_write_chunk,"))return;const U=Math.min(d.length,w*80),N=18+Math.round(w/Math.max(1,k-1)*67);s==null||s(Math.min(85,N),`Sender ${U}/${d.length} bytes via Bluetooth...`)}),s==null||s(90,"Verificerer BLE-fil...");const b=await g;if(b.startsWith("ERR"))throw new Error(b);if(b.startsWith("ACK:fs_write_done,")){const[,w,k]=b.split(",",3),T=parseInt(w??"",10),U=parseInt(k??"",10);if(T!==d.length||U!==m)throw new Error(`ERR: BLE-verificering fejlede for ${Ld(l)}.`)}s==null||s(100,"Gemt på Pico")}async deleteFile(l){const o=await this.exchange(`fs_delete,${Al(l)}`,s=>s==="ACK:fs_delete"||s.startsWith("ERR"),"fs_delete",2);if(o.startsWith("ERR"))throw new Error(o)}async restart(){await this.exchange("restart",l=>l==="ACK:restart"||l.startsWith("ERR"),"restart",1).catch(()=>{}),this.expectingDisconnect=!0}enqueueButton(l,o){this.busy||(this.pendingButtons.push(`button,${l}:${o?"down":"up"}`),this.pumpControls())}enqueueSlider(l,o){this.busy||(this.pendingSliders.set(l,`slider,${l}:${o}`),this.pumpControls())}enqueueToggle(l,o){this.busy||(this.pendingToggles.set(l,`toggle,${l}:${o?1:0}`),this.pumpControls())}enqueueJoystick(l,o,s){this.busy||(this.pendingJoysticks.set(l,`joystick,${l}:${Math.round(o)},${Math.round(s)}`),this.pumpControls())}enqueueDpad(l,o,s){this.busy||(this.pendingDpads.push(`dpad,${l}:${o},${s?"down":"up"}`),this.pumpControls())}pumpControls(){this.controlPumpActive||this.busy||!this.transport.connected||(this.controlPumpActive=!0,this.drainControls())}async drainControls(){try{for(;!this.busy&&this.transport.connected;){const l=this.nextControlLine();if(!l)break;await this.transport.writeLine(l),this.log("info",`tx: ${l}`),await Od(tg)}}catch(l){this.log("error",l instanceof Error?l.message:"Kunne ikke sende kommando."),this.handleDisconnect()}finally{this.controlPumpActive=!1,!this.busy&&this.transport.connected&&this.hasPendingControls()&&this.pumpControls()}}nextControlLine(){const l=this.pendingButtons.shift();if(l)return l;const o=this.pendingDpads.shift();if(o)return o;const s=this.pendingSliders.entries().next();if(!s.done){const[_,m]=s.value;return this.pendingSliders.delete(_),m}const d=this.pendingToggles.entries().next();if(!d.done){const[_,m]=d.value;return this.pendingToggles.delete(_),m}const p=this.pendingJoysticks.entries().next();if(!p.done){const[_,m]=p.value;return this.pendingJoysticks.delete(_),m}return null}hasPendingControls(){return this.pendingButtons.length>0||this.pendingDpads.length>0||this.pendingSliders.size>0||this.pendingToggles.size>0||this.pendingJoysticks.size>0}async disconnect(){if(!this.transport.connected){this.handleDisconnect();return}this.expectingDisconnect=!0;try{await this.exchange("disconnect",l=>l==="ACK:disconnect","disconnect",1)}catch{}this.transport.disconnect()}handleDisconnect(){var o,s,d;for(const p of this.waiters)clearTimeout(p.timer),p.reject(new Error("Forbindelsen blev afbrudt."));this.waiters=[],this.collectingLayout=!1,this.layoutResolve=null,(o=this.lineReject)==null||o.call(this,new Error("Forbindelsen blev afbrudt.")),this.collectingLines=!1,this.lineResolve=null,this.lineReject=null,this.fsCapabilities=null,this.stream.reset();const l=this.disconnectMessage??void 0;this.disconnectMessage=null,(d=(s=this.events).onDisconnect)==null||d.call(s,l)}}function cg(i){let l=0;for(let o=0;o<hc.length;o+=1)hc[o]<=i&&(l=o);return l}function Ld(i){return i.replace(/\\/g,"/").replace(/^\/+/,"")||i}function jm(i){let l=0;for(const o of i)l=l+o>>>0;return l}function Nm(i){const l=new Uint8Array(Math.floor(i.length/2));for(let o=0;o<l.length;o+=1)l[o]=parseInt(i.slice(o*2,o*2+2),16);return l}function Rm(i){const l=(o,s)=>Number.isFinite(o)?Math.max(W2,Math.min(Z2,o)):s;for(const o of i){const s=o.trim();if(s.startsWith("#GRID,")){const d=s.split(","),p=l(parseInt(d[1],10),si),_=l(parseInt(d[2],10),ws);return{cols:p,rows:_}}}return{cols:si,rows:ws}}function Am(i){const l=new Map;for(const o of i){const s=o.trim();if(!s||s.startsWith("#VERSION")||s==="__END__")continue;const d=s.split(",");if(d.length<7)continue;const[p,_,m,g,b,w,k,T,U,N,G,I,V,X]=d;if(p!=="button"&&p!=="slider"&&p!=="toggle"&&p!=="radar"&&p!=="text"&&p!=="joystick"&&p!=="dpad"&&p!=="plot"||l.has(_))continue;const P=le=>{if(le==="n")return null;const se=parseInt(le,10);return Number.isNaN(se)?null:se},re=parseInt(k,10)||0,ve=T!==void 0?parseInt(T,10):0,ce=U!==void 0?parseInt(U,10):100,W=["none","bottom","middle","top"].includes(N??"")?N:"none",Z=T!==void 0?parseInt(T,10)===1:!1,we=T!==void 0?parseFloat(T):0,Ee=U!==void 0?parseFloat(U):180,ze=N!==void 0?parseFloat(N):200,J=G!==void 0?parseInt(G,10):1200,Ne=(le,se)=>["none","bottom","middle","top"].includes(le??"")?le:se,je=T!==void 0?parseInt(T,10):-100,ue=U!==void 0?parseInt(U,10):100,B=N!==void 0?parseInt(N,10):-100,ne=G!==void 0?parseInt(G,10):100,pe=T!==void 0?parseFloat(T):0,me=U!==void 0?parseFloat(U):100,xe=N!==void 0?parseInt(N,10):30,E=G==="bar"?"bar":G==="dot"?"dot":"line",z=(le,se)=>["range","labels","none"].includes(le??"")?le:se,te=X!==void 0?parseFloat(X):24;l.set(_,{type:p,name:_,centerX2:P(m),centerY2:P(g),spanX:P(b),spanY:P(w),rotation:[0,90,180,270].includes(re)?re:0,...p==="slider"?{sliderMin:Number.isFinite(ve)?ve:0,sliderMax:Number.isFinite(ce)?ce:100,sliderRecenter:W}:{},...p==="toggle"?{toggleInitial:Z}:{},...p==="radar"?{radarMinAngle:Number.isFinite(we)?we:0,radarMaxAngle:Number.isFinite(Ee)?Ee:180,radarMaxDistance:Number.isFinite(ze)&&ze>0?ze:200,radarFadeMs:Number.isFinite(J)&&J>0?J:1200}:{},...p==="joystick"?{joystickXMin:Number.isFinite(je)?je:-100,joystickXMax:Number.isFinite(ue)&&ue!==je?ue:100,joystickYMin:Number.isFinite(B)?B:-100,joystickYMax:Number.isFinite(ne)&&ne!==B?ne:100,joystickXRecenter:Ne(I,"middle"),joystickYRecenter:Ne(V,"middle")}:{},...p==="plot"?{plotMin:Number.isFinite(pe)?pe:0,plotMax:Number.isFinite(me)&&me!==pe?me:pe+100,plotHistory:Number.isFinite(xe)&&xe>1?xe:30,plotStyle:E,plotXAxis:z(I,"labels"),plotYAxis:z(V,"range"),plotLabelMaxPercent:Number.isFinite(te)?Math.max(8,Math.min(45,te)):24}:{}})}return[...l.values()]}const ug=[{slug:"grommet-icons:raspberry",label:"Raspberry Pi",keywords:["raspberry pi","raspberry"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M8.087 0a.67.67 0 0 0-.399.165c-.363-.14-.717-.19-1.032.096c-.486-.063-.643.067-.762.22c-.107-.003-.8-.11-1.117.364c-.798-.095-1.049.47-.763.994c-.163.253-.332.5.048.981c-.134.268-.05.558.267.91c-.084.376.081.641.376.848c-.055.515.472.815.629.922c.06.3.187.584.79.74c.099.447.46.525.811.619c-1.159.673-2.153 1.558-2.146 3.733l-.17.303c-1.328.808-2.524 3.406-.654 5.518c.122.66.326 1.134.508 1.66c.273 2.117 2.054 3.11 2.523 3.227c.688.524 1.422 1.02 2.413 1.369c.935.964 1.946 1.331 3.005 1.331s2.07-.367 3.005-1.331c.992-.348 1.725-.845 2.413-1.37c.47-.117 2.25-1.11 2.523-3.226c.182-.526.386-1 .508-1.66c1.87-2.112.674-4.71-.655-5.518l-.169-.303c.007-2.175-.987-3.06-2.146-3.733c.35-.094.712-.172.812-.619c.602-.156.729-.44.79-.74c.157-.107.683-.407.628-.922c.295-.207.46-.472.376-.848c.318-.352.402-.642.267-.91c.38-.48.212-.728.049-.98c.285-.526.034-1.09-.763-.995c-.318-.474-1.01-.367-1.117-.365c-.12-.152-.277-.282-.763-.22c-.315-.284-.669-.235-1.032-.095A.67.67 0 0 0 16.742 0c-.232-.007-.43.134-.643.202c-.523-.17-.641.061-.898.156c-.569-.12-.742.143-1.015.42l-.32-.007c-.858.506-1.282 1.535-1.452 1.535S11.82 1.277 10.961.771l-.319.006C10.37.501 10.196.238 9.627.358C9.37.263 9.252.031 8.73.202C8.516.134 8.318-.007 8.087 0m.03.609c.436.161.663.37.9.575c.08-.108.202-.188.052-.45c.31.18.544.39.717.625c.191-.122.112-.287.113-.441c.322.262.528.54.778.812c.05-.037.093-.162.132-.358c.768.744 1.852 2.62.279 3.365C9.749 3.633 8.15 2.83 6.38 2.228c2.277 1.174 3.602 2.123 4.327 2.932c-.371 1.49-2.31 1.56-3.019 1.518c.145-.068.266-.15.31-.275c-.179-.127-.81-.013-1.25-.26c.17-.036.249-.069.328-.194c-.416-.132-.864-.248-1.128-.468c.143.002.275.033.46-.095c-.372-.201-.77-.36-1.078-.668c.193-.004.4-.002.46-.073a4.2 4.2 0 0 1-.867-.704c.27.033.382.006.448-.04c-.258-.265-.583-.487-.739-.812c.2.069.383.093.515-.008c-.088-.198-.464-.314-.68-.776c.211.02.436.046.48 0c-.097-.398-.264-.622-.429-.854c.451-.007 1.134.001 1.103-.037l-.279-.285c.44-.118.892.02 1.219.122c.147-.115-.004-.263-.183-.413q.56.076 1.019.255C7.56.945 7.289.799 7.159.65c.578.11.825.263 1.068.417c.177-.169.01-.312-.11-.46m8.594 0c-.12.147-.287.29-.11.46c.244-.155.49-.308 1.068-.418c-.13.148-.401.294-.238.442a4.4 4.4 0 0 1 1.02-.255c-.18.15-.33.298-.184.413c.328-.102.779-.24 1.22-.122l-.28.285c-.03.038.652.03 1.103.037c-.165.232-.331.456-.43.854c.045.046.27.02.48 0c-.215.462-.591.578-.679.776c.132.101.315.077.515.008c-.155.325-.48.547-.738.811c.065.047.178.074.447.041a4.2 4.2 0 0 1-.866.704c.06.07.267.069.46.073c-.31.307-.706.467-1.079.668c.186.128.318.097.46.095c-.264.22-.711.336-1.127.468c.079.125.158.158.327.193c-.44.248-1.071.134-1.249.26c.043.125.164.208.31.276c-.71.041-2.648-.029-3.02-1.518c.726-.81 2.05-1.758 4.328-2.932c-1.772.602-3.37 1.405-4.708 2.509c-1.574-.744-.49-2.62.278-3.365c.04.196.082.32.133.358c.25-.272.455-.55.777-.812c0 .154-.078.32.114.441c.172-.235.406-.446.716-.624c-.15.26-.027.341.053.45c.236-.207.463-.415.899-.576M12.414 6.77c1.359 0 2.492.923 2.494 1.466c.004.68-.994 1.38-2.476 1.398h-.036c-1.482-.018-2.48-.717-2.476-1.398c.003-.543 1.136-1.466 2.494-1.466m-3.813.447h.084q.331 0 .677.059c.777.13-3.72 4.058-3.79 3.182c-.062-2.003 1.278-3.213 3.03-3.241m7.542 0h.084c1.751.028 3.091 1.238 3.03 3.24c-.07.877-4.567-3.05-3.791-3.181q.346-.059.677-.06m-6.825 2.5c.259-.002.521.036.777.122c1.363.458 2.052 2.053 1.54 3.56c-.513 1.509-2.034 2.36-3.398 1.903c-1.363-.458-2.052-2.053-1.54-3.56c.417-1.226 1.498-2.017 2.62-2.025m6.193 0c1.122.008 2.204.8 2.62 2.024c.513 1.508-.176 3.103-1.54 3.56c-1.364.459-2.885-.393-3.398-1.901c-.512-1.508.177-3.103 1.54-3.56c.256-.087.519-.125.778-.123M5.33 11.4c1.062.015.273 5.052-.69 4.624c-1.092-.879-1.444-3.451.582-4.608a.4.4 0 0 1 .082-.014zm14.168 0l.027.002a.4.4 0 0 1 .081.014c2.026 1.157 1.675 3.73.582 4.608c-.963.428-1.752-4.609-.69-4.624m-7.084 3.482a2.8 2.8 0 0 1 1.874.7c.52.47.822 1.14.818 1.811c0 .66-.295 1.313-.8 1.778a2.88 2.88 0 0 1-1.892.739a2.88 2.88 0 0 1-1.892-.739a2.45 2.45 0 0 1-.8-1.778a2.46 2.46 0 0 1 .818-1.81a2.8 2.8 0 0 1 1.874-.7M6.148 16.2c.703-.014 1.568.541 2.268 1.353c.78.94 1.136 2.593.485 3.08c-.617.372-2.115.218-3.178-1.31c-.718-1.282-.624-2.587-.12-2.97q.248-.149.545-.153m12.465 0h.067c.197.004.38.052.546.153c.503.383.597 1.688-.12 2.97c-1.064 1.528-2.562 1.682-3.178 1.31c-.652-.487-.297-2.14.484-3.08c.678-.787 1.51-1.333 2.201-1.353m-6.199 4.504c1.09-.012 2.71.447 2.69 1.032c.017.405-1.312 1.574-2.667 1.516h-.045c-1.356.058-2.685-1.11-2.667-1.516c-.02-.585 1.6-1.044 2.69-1.032"/></svg>'},{slug:"material-symbols:robot",label:"Robot",keywords:["robot"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.413 11.413Q11 10.825 11 10t-.587-1.412T9 8t-1.412.588T7 10t.588 1.413T9 12t1.413-.587m6 0Q17 10.825 17 10t-.587-1.412T15 8t-1.412.588T13 10t.588 1.413T15 12t1.413-.587M9 21v-4h2v4zm4 0v-4h2v4zm-8 0q-.825 0-1.412-.587T3 19V9q0-2.5 1.75-4.25T9 3h6q2.5 0 4.25 1.75T21 9v10q0 .825-.587 1.413T19 21h-2v-4q0-.825-.587-1.412T15 15H9q-.825 0-1.412.588T7 17v4z"/></svg>'},{slug:"material-symbols:robot-outline",label:"Robot Outline",keywords:["robot"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V9q0-2.5 1.75-4.25T9 3h6q2.5 0 4.25 1.75T21 9v10q0 .825-.587 1.413T19 21zm0-2h14V9q0-1.65-1.175-2.825T15 5H9Q7.35 5 6.175 6.175T5 9zm2.588-7.587Q7 10.825 7 10t.588-1.412T9 8t1.413.588T11 10t-.587 1.413T9 12t-1.412-.587m6 0Q13 10.825 13 10t.588-1.412T15 8t1.413.588T17 10t-.587 1.413T15 12t-1.412-.587M7 19v-2q0-.825.588-1.412T9 15h6q.825 0 1.413.588T17 17v2h-2v-2h-2v2h-2v-2H9v2zm-2 0h14z"/></svg>'},{slug:"mdi:robot",label:"Robot",keywords:["robot"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5A2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"/></svg>'},{slug:"mdi:raspberry-pi",label:"Raspberry Pi",keywords:["raspberry pi"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20 8h2v2h-2zM4 5h16a2 2 0 0 1 2 2h-3v2H5v4h3v3h11v1h3a2 2 0 0 1-2 2h-4v1h-2v-1h-3v1H7v-1H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m15 10H9v-5h10v1h3v2h-3zm-6-3v2h2v-2zM5 6v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm5 8h2v2h-2z"/></svg>'},{slug:"mdi:chip",label:"Chip",keywords:["chip"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6 4h12v1h3v2h-3v2h3v2h-3v2h3v2h-3v2h3v2h-3v1H6v-1H3v-2h3v-2H3v-2h3v-2H3V9h3V7H3V5h3zm5 11v3h1v-3zm2 0v3h1v-3zm2 0v3h1v-3z"/></svg>'},{slug:"mingcute:chip-fill",label:"Chip Fill",keywords:["chip"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M15 2a1 1 0 0 1 1 1v1h1a3 3 0 0 1 3 3v1h1a1 1 0 1 1 0 2h-1v4h1a1 1 0 1 1 0 2h-1v1a3 3 0 0 1-3 3h-1v1a1 1 0 1 1-2 0v-1h-4v1a1 1 0 1 1-2 0v-1H7a3 3 0 0 1-3-3v-1H3a1 1 0 1 1 0-2h1v-4H3a1 1 0 0 1 0-2h1V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 2 0v1h4V3a1 1 0 0 1 1-1m-1 6h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2m0 2v4h-4v-4z"/></g></svg>'},{slug:"mingcute:chip-line",label:"Chip Line",keywords:["chip"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M15 2a1 1 0 0 1 1 1v1h1a3 3 0 0 1 3 3v1h1a1 1 0 1 1 0 2h-1v4h1a1 1 0 1 1 0 2h-1v1a3 3 0 0 1-3 3h-1v1a1 1 0 1 1-2 0v-1h-4v1a1 1 0 1 1-2 0v-1H7a3 3 0 0 1-3-3v-1H3a1 1 0 1 1 0-2h1v-4H3a1 1 0 0 1 0-2h1V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 2 0v1h4V3a1 1 0 0 1 1-1m2 4H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1m-3 2a2 2 0 0 1 1.995 1.85L16 10v4a2 2 0 0 1-1.85 1.995L14 16h-4a2 2 0 0 1-1.995-1.85L8 14v-4a2 2 0 0 1 1.85-1.995L10 8zm0 2h-4v4h4z"/></g></svg>'},{slug:"solar:cpu-bold",label:"Cpu Bold",keywords:["cpu"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M9.181 10.181c.053-.053.148-.119.45-.16c.323-.043.761-.044 1.439-.044h1.86c.678 0 1.116.001 1.438.045c.303.04.398.106.45.16c.054.052.12.147.16.45c.044.322.045.76.045 1.438v1.86c0 .678-.001 1.116-.045 1.438c-.04.303-.106.398-.16.45c-.052.054-.147.12-.45.16c-.322.044-.76.045-1.438.045h-1.86c-.678 0-1.116-.001-1.438-.045c-.303-.04-.398-.106-.45-.16c-.054-.052-.12-.147-.16-.45c-.044-.322-.045-.76-.045-1.438v-1.86c0-.678.001-1.116.045-1.438c.04-.303.106-.398.16-.45"/><path fill="currentColor" fill-rule="evenodd" d="M12 3c.385 0 .698.312.698.698v2.79q.764.001 1.395.017V3.698a.698.698 0 0 1 1.395 0v2.79a1 1 0 0 1-.008.108c.936.115 1.585.353 2.078.846s.731 1.142.846 2.078a1 1 0 0 1 .108-.008h2.79a.698.698 0 0 1 0 1.395h-2.807q.017.63.017 1.395h2.79a.698.698 0 0 1 0 1.396h-2.79q-.001.764-.017 1.395h2.807a.698.698 0 0 1 0 1.395h-2.79a1 1 0 0 1-.108-.008c-.115.936-.353 1.585-.846 2.078s-1.142.731-2.078.846q.009.053.008.108v2.79a.698.698 0 0 1-1.395 0v-2.807q-.63.017-1.395.017v2.79a.698.698 0 0 1-1.396 0v-2.79a56 56 0 0 1-1.395-.017v2.807a.698.698 0 0 1-1.395 0v-2.79q0-.056.008-.108c-.936-.115-1.585-.353-2.078-.846s-.731-1.142-.846-2.078a1 1 0 0 1-.108.008h-2.79a.698.698 0 0 1 0-1.395h2.807a56 56 0 0 1-.017-1.395h-2.79a.698.698 0 0 1 0-1.396h2.79q.001-.764.017-1.395H2.698a.698.698 0 0 1 0-1.395h2.79q.056 0 .108.008c.115-.936.353-1.585.846-2.078s1.142-.731 2.078-.846a1 1 0 0 1-.008-.108v-2.79a.698.698 0 0 1 1.395 0v2.807q.63-.017 1.395-.017v-2.79c0-.386.313-.698.698-.698m-.976 5.581c-.619 0-1.152 0-1.578.058c-.458.061-.896.2-1.252.555c-.355.356-.494.794-.555 1.252c-.058.427-.058.96-.058 1.578v1.952c0 .619 0 1.151.058 1.578c.061.458.2.896.555 1.252c.356.355.794.494 1.252.555c.426.058.96.058 1.578.058h1.952c.619 0 1.151 0 1.578-.058c.458-.061.896-.2 1.252-.555c.355-.356.494-.794.555-1.252c.058-.427.058-.96.058-1.578v-1.952c0-.619 0-1.151-.058-1.578c-.061-.458-.2-.896-.555-1.252c-.356-.355-.794-.494-1.252-.555c-.427-.058-.96-.058-1.578-.058z" clip-rule="evenodd"/></svg>'},{slug:"solar:cpu-bold-duotone",label:"Cpu Bold Duotone",keywords:["cpu"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 3c.385 0 .698.312.698.698v2.79q.764.001 1.395.017V3.698a.698.698 0 0 1 1.395 0v2.79a1 1 0 0 1-.008.108c.936.115 1.585.353 2.078.846s.731 1.142.846 2.078a1 1 0 0 1 .108-.008h2.79a.698.698 0 0 1 0 1.395h-2.807q.017.63.017 1.395h2.79a.698.698 0 0 1 0 1.396h-2.79q-.001.764-.017 1.395h2.807a.698.698 0 0 1 0 1.395h-2.79a1 1 0 0 1-.108-.008c-.115.936-.353 1.585-.846 2.078s-1.142.731-2.078.846q.009.053.008.108v2.79a.698.698 0 0 1-1.395 0v-2.807q-.63.017-1.395.017v2.79a.698.698 0 0 1-1.396 0v-2.79a56 56 0 0 1-1.395-.017v2.807a.698.698 0 0 1-1.395 0v-2.79q0-.056.008-.108c-.936-.115-1.585-.353-2.078-.846s-.731-1.142-.846-2.078a1 1 0 0 1-.108.008h-2.79a.698.698 0 0 1 0-1.395h2.807a56 56 0 0 1-.017-1.395h-2.79a.698.698 0 0 1 0-1.396h2.79q.001-.764.017-1.395H2.698a.698.698 0 0 1 0-1.395h2.79q.056 0 .108.008c.115-.936.353-1.585.846-2.078s1.142-.731 2.078-.846a1 1 0 0 1-.008-.108v-2.79a.698.698 0 0 1 1.395 0v2.807q.63-.017 1.395-.017v-2.79c0-.386.313-.698.698-.698m-.976 5.581c-.619 0-1.152 0-1.578.058c-.458.061-.896.2-1.252.555c-.355.356-.494.794-.555 1.252c-.058.427-.058.96-.058 1.578v1.952c0 .619 0 1.151.058 1.578c.061.458.2.896.555 1.252c.356.355.794.494 1.252.555c.426.058.96.058 1.578.058h1.952c.619 0 1.151 0 1.578-.058c.458-.061.896-.2 1.252-.555c.355-.356.494-.794.555-1.252c.058-.427.058-.96.058-1.578v-1.952c0-.619 0-1.151-.058-1.578c-.061-.458-.2-.896-.555-1.252c-.356-.355-.794-.494-1.252-.555c-.427-.058-.96-.058-1.578-.058z" clip-rule="evenodd"/><path fill="currentColor" d="M9.18 10.18c.054-.052.149-.118.451-.159c.323-.043.761-.044 1.439-.044h1.86c.678 0 1.116.001 1.438.044c.303.041.398.107.45.16c.054.053.12.148.16.45c.044.323.045.761.045 1.439v1.86c0 .678-.001 1.116-.045 1.438c-.04.303-.106.398-.16.45c-.052.054-.147.12-.45.16c-.322.044-.76.045-1.438.045h-1.86c-.678 0-1.116-.001-1.439-.045c-.302-.04-.397-.106-.45-.16c-.053-.052-.119-.147-.16-.45c-.043-.322-.044-.76-.044-1.438v-1.86c0-.678.001-1.116.044-1.438c.041-.303.107-.398.16-.451" opacity=".5"/></svg>'},{slug:"solar:cpu-broken",label:"Cpu Broken",keywords:["cpu"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" d="M17 14c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14v-4c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56"/><path d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z"/><path stroke-linecap="round" d="M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2"/></g></svg>'},{slug:"tabler:circuit-bulb",label:"Circuit Bulb",keywords:["circuit"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12h5m10 0h5M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0m1.5-3.5l7 7m0-7l-7 7"/></svg>'},{slug:"tabler:circuit-cell",label:"Circuit Cell",keywords:["circuit"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12h8m4 0h8M10 5v14m4-10v6"/></svg>'},{slug:"ph:head-circuit",label:"Head Circuit",keywords:["circuit"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M192.5 171.47a88.34 88.34 0 0 0 31.5-69.54c-1-45.71-37.61-83.4-83.24-85.8A88 88 0 0 0 48 102l-22.45 43.18c-.09.18-.18.36-.26.54a16 16 0 0 0 7.55 20.62l.25.11L56 176.94V208a16 16 0 0 0 16 16h48a8 8 0 0 0 0-16H72v-36.19a8 8 0 0 0-4.67-7.28L40 152l23.07-44.34A7.9 7.9 0 0 0 64 104a72 72 0 0 1 56-70.21v15.59a24 24 0 1 0 16 0V32c1.3 0 2.6 0 3.9.1A72.26 72.26 0 0 1 203.84 80H184a8 8 0 0 0-6.15 2.88l-25.51 30.62a24.06 24.06 0 1 0 12.28 10.25L187.75 96h19.79q.36 3.12.44 6.3a72.26 72.26 0 0 1-28.78 59.3a8 8 0 0 0-3.14 7.39l8 64a8 8 0 0 0 7.93 7a8 8 0 0 0 1-.06a8 8 0 0 0 6.95-8.93ZM128 80a8 8 0 1 1 8-8a8 8 0 0 1-8 8m16 64a8 8 0 1 1 8-8a8 8 0 0 1-8 8"/></svg>'},{slug:"lucide:microchip",label:"Microchip",keywords:["microchip"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 12h4m-4 5h4M10 7h4m4 5h2m-2 6h2M18 6h2M4 12h2m-2 6h2M4 6h2"/><rect x="6" y="2" rx="2"/></g></svg>'},{slug:"ri:sensor-fill",label:"Sensor Fill",keywords:["sensor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6 8v2h12V8h-3V2h2v4h5v2h-2v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V2h2v6zm7-6v6h-2V2z"/></svg>'},{slug:"ri:sensor-line",label:"Sensor Line",keywords:["sensor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6 8v11h12V8h-3V2h2v4h5v2h-2v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V2h2v6zm7-6v6h-2V2z"/></svg>'},{slug:"material-symbols:door-sensor",label:"Door Sensor",keywords:["sensor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M9 21q-.825 0-1.412-.587T7 19v-2h5q.825 0 1.413-.587T14 15t-.587-1.412T12 13H7V5q0-.825.588-1.412T9 3h6q.825 0 1.413.588T17 5v14q0 .825-.587 1.413T15 21zm-4-5q-.425 0-.712-.288T4 15t.288-.712T5 14h7q.425 0 .713.288T13 15t-.288.713T12 16zm7.713-6.288Q13 9.425 13 9t-.288-.712T12 8t-.712.288T11 9t.288.713T12 10t.713-.288m6.575-1Q19 8.426 19 8V4q0-.425.288-.712T20 3t.713.288T21 4v4q0 .425-.288.713T20 9t-.712-.288"/></svg>'},{slug:"mdi:motor",label:"Motor",keywords:["motor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 4v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"/></svg>'},{slug:"mdi:motor-outline",label:"Motor Outline",keywords:["motor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8 10h8v8h-5l-2-2H7v-5m0-7v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"/></svg>'},{slug:"mdi:motor-off",label:"Motor Off",keywords:["motor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3.78 2.5L21.5 20.22l-1.27 1.28L18 19.27V20h-8l-2-2H5v-3H3v3H1v-8h2v3h2v-3l1.87-1.86L2.5 3.77zM20 9v3h-2V8h-6V6h3V4H7.82l15 15H23V9z"/></svg>'},{slug:"mdi:engine",label:"Engine",keywords:["engine"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 4v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"/></svg>'},{slug:"mdi:engine-outline",label:"Engine Outline",keywords:["engine"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8 10h8v8h-5l-2-2H7v-5m0-7v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"/></svg>'},{slug:"tabler:engine",label:"Engine",keywords:["engine"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10v6m9-11v3m-2-3h4m-9 8H3m3-3h2l2-2h3.382a1 1 0 0 1 .894.553l1.448 2.894a1 1 0 0 0 .894.553H18v-2h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2v-2h-3v2a1 1 0 0 1-1 1h-3.465a1 1 0 0 1-.832-.445L8 16H6z"/></svg>'},{slug:"mdi:car",label:"Car",keywords:["car"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m5 11l1.5-4.5h11L19 11m-1.5 5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-11 0A1.5 1.5 0 0 1 5 14.5A1.5 1.5 0 0 1 6.5 13A1.5 1.5 0 0 1 8 14.5A1.5 1.5 0 0 1 6.5 16M18.92 6c-.2-.58-.76-1-1.42-1h-11c-.66 0-1.22.42-1.42 1L3 12v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8z"/></svg>'},{slug:"mdi:car-outline",label:"Car Outline",keywords:["car"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18.9 6c-.2-.6-.8-1-1.4-1h-11c-.7 0-1.2.4-1.4 1L3 12v8c0 .5.5 1 1 1h1c.6 0 1-.5 1-1v-1h12v1c0 .5.5 1 1 1h1c.5 0 1-.5 1-1v-8zM6.8 7h10.3l1.1 3H5.8zM19 17H5v-5h14zM7.5 13c.8 0 1.5.7 1.5 1.5S8.3 16 7.5 16S6 15.3 6 14.5S6.7 13 7.5 13m9 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5"/></svg>'},{slug:"tabler:car",label:"Car",keywords:["car"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"/><path d="M5 17H3v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0H9m-6-6h15m-6 0V6"/></g></svg>'},{slug:"mdi:tank",label:"Tank",keywords:["tank"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20 12H4v-1h2l1-5h5l1 5h7zm-6.78-5l.4 2H22V7zM22 16a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3M6 16a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1m7 0a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1m7 0a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1"/></svg>'},{slug:"tabler:tank",label:"Tank",keywords:["tank"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 15a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3m4-3l1-5h5l3 5m6-3h-7.8"/></svg>'},{slug:"mingcute:tank-fill",label:"Tank Fill",keywords:["tank"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M7 7a3 3 0 0 1 3-3h1.53a5 5 0 0 1 4.584 3H20a1 1 0 1 1 0 2h-3.418l.285 2h.633a4.5 4.5 0 1 1 0 9h-11a4.5 4.5 0 1 1 0-9H7z"/></g></svg>'},{slug:"mdi:truck",label:"Truck",keywords:["truck"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18 18.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m1.5-9l1.96 2.5H17V9.5m-11 9A1.5 1.5 0 0 1 4.5 17A1.5 1.5 0 0 1 6 15.5A1.5 1.5 0 0 1 7.5 17A1.5 1.5 0 0 1 6 18.5M20 8h-3V4H3c-1.11 0-2 .89-2 2v11h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-5z"/></svg>'},{slug:"mdi:truck-outline",label:"Truck Outline",keywords:["truck"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m1.5-9H17V12h4.46zM6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.11.89-2 2-2h14v4zM3 6v9h.76c.55-.61 1.35-1 2.24-1s1.69.39 2.24 1H15V6z"/></svg>'},{slug:"tabler:truck",label:"Truck",keywords:["truck"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"/><path d="M5 17H3V6a1 1 0 0 1 1-1h9v12m-4 0h6m4 0h2v-6h-8m0-5h5l3 5"/></g></svg>'},{slug:"material-symbols:rocket",label:"Rocket",keywords:["rocket"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 22v-5.925q0-.5.238-.95T4.9 14.4l1.1-.725q.175 2.1.55 3.575t1.175 3.275zm5.225-2q-.875-1.65-1.3-3.5T7.5 12.675q0-3.125 1.238-5.887T12 2.6q2.025 1.425 3.263 4.188t1.237 5.887q0 1.95-.425 3.788T14.775 20zm4.188-7.587Q14 11.825 14 11t-.587-1.412T12 9t-1.412.588T10 11t.588 1.413T12 13t1.413-.587M20 22l-3.725-1.475q.8-1.8 1.175-3.275t.55-3.575l1.1.725q.425.275.663.725t.237.95z"/></svg>'},{slug:"material-symbols:rocket-outline",label:"Rocket Outline",keywords:["rocket"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m6 19.05l1.975-.8q-.25-.725-.462-1.475t-.338-1.5l-1.175.8zM10 18h4q.45-1 .725-2.437T15 12.625q0-2.475-.825-4.687T12 4.525q-1.35 1.2-2.175 3.413T9 12.625q0 1.5.275 2.938T10 18m.588-5.587Q10 11.825 10 11t.588-1.412T12 9t1.413.588T14 11t-.587 1.413T12 13t-1.412-.587M18 19.05v-2.975l-1.175-.8q-.125.75-.337 1.5t-.463 1.475zM12 1.975q2.475 1.8 3.738 4.575T17 13l2.1 1.4q.425.275.663.725t.237.95V22l-4.975-2h-6.05L4 22v-5.925q0-.5.238-.95T4.9 14.4L7 13q0-3.675 1.263-6.45T12 1.975"/></svg>'},{slug:"material-symbols:rocket-outline-rounded",label:"Rocket Outline Rounded",keywords:["rocket"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7.975 18.25q-.25-.725-.462-1.475t-.338-1.5l-1.175.8v2.975zM11.65 4.875q-1.2 1.275-1.925 3.363T9 12.625q0 1.5.275 2.938T10 18h4q.45-1 .725-2.437T15 12.625q0-2.3-.725-4.387T12.35 4.875q-.075-.075-.162-.112T12 4.725t-.187.038t-.163.112M12 13q-.825 0-1.412-.587T10 11t.588-1.412T12 9t1.413.588T14 11t-.587 1.413T12 13m4.025 5.25l1.975.8v-2.975l-1.175-.8q-.125.75-.337 1.5t-.463 1.475M12.775 2.6q2.1 1.8 3.163 4.425T17 13l2.1 1.4q.425.275.663.725t.237.95v4.45q0 .525-.437.825t-.938.1l-3.6-1.45h-6.05l-3.6 1.45q-.5.2-.937-.1T4 20.525v-4.45q0-.5.238-.95T4.9 14.4L7 13q0-3.35 1.063-5.975T11.224 2.6q.175-.125.375-.2t.4-.075t.4.075t.375.2"/></svg>'},{slug:"material-symbols:drone",label:"Drone",keywords:["drone"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q0-1.875 1.025-3.363t2.65-2.162L7.425 12H4V6H1V4h8v2H6v4h1.2L7 8h10l-.2 2H18V6h-3V4h8.025v2h-3v6H16.6l-.25 2.475q1.625.675 2.638 2.163T20 20h-2q0-1.65-1.175-2.825T14 16h-4q-1.65 0-2.825 1.175T6 20z"/></svg>'},{slug:"material-symbols:drone-outline",label:"Drone Outline",keywords:["drone"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q0-1.875 1.025-3.363t2.65-2.162L7.425 12H4V6H1V4h8v2H6v4h1.2L7 8h10l-.2 2H18V6h-3V4h8.025v2h-3v6H16.6l-.25 2.475q1.625.675 2.638 2.163T20 20h-2q0-1.65-1.175-2.825T14 16h-4q-1.65 0-2.825 1.175T6 20zm5.625-6h4.725l.425-4H9.2zm0 0h4.725z"/></svg>'},{slug:"material-symbols:drone-outline-rounded",label:"Drone Outline Rounded",keywords:["drone"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10 16q-1.425 0-2.475.85T6.125 19q-.125.425-.413.713T5 20t-.7-.3t-.2-.7q.275-1.55 1.225-2.75t2.35-1.775L7.425 12H5q-.425 0-.713-.288T4 11V6H2q-.425 0-.712-.288T1 5t.288-.712T2 4h6q.425 0 .713.288T9 5t-.288.713T8 6H6v4h1.2l-.075-.9q-.05-.45.238-.775T8.1 8h7.8q.45 0 .738.325t.237.775l-.075.9H18V6h-2q-.425 0-.712-.288T15 5t.288-.712T16 4h6.025q.425 0 .713.288t.287.712t-.287.713t-.713.287h-2v5q0 .425-.287.713t-.713.287H16.6l-.25 2.475q1.4.575 2.35 1.775T19.925 19q.075.4-.212.7T19 20t-.712-.288t-.413-.712q-.35-1.3-1.412-2.15T14 16zm-.375-2h4.725l.425-4H9.2zm0 0h4.725z"/></svg>'},{slug:"material-symbols:gamepad",label:"Gamepad",keywords:["gamepad"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.5l-3-3V2h6v5.5zm4.5 4.5l-3-3l3-3H22v6zM2 15V9h5.5l3 3l-3 3zm7 7v-5.5l3-3l3 3V22z"/></svg>'},{slug:"material-symbols:gamepad-outline",label:"Gamepad Outline",keywords:["gamepad"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.5l-3-3V2h6v5.5zm4.5 4.5l-3-3l3-3H22v6zM2 15V9h5.5l3 3l-3 3zm7 7v-5.5l3-3l3 3V22zm3-14.35l1-1V4h-2v2.65zM4 13h2.65l1-1l-1-1H4zm7 7h2v-2.65l-1-1l-1 1zm6.35-7H20v-2h-2.65l-1 1z"/></svg>'},{slug:"material-symbols:gamepad-outline-rounded",label:"Gamepad Outline Rounded",keywords:["gamepad"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m11.3 9.8l-2-2q-.15-.15-.225-.337T9 7.075V3q0-.425.288-.712T10 2h4q.425 0 .713.288T15 3v4.075q0 .2-.075.388T14.7 7.8l-2 2q-.15.15-.325.213t-.375.062t-.375-.062T11.3 9.8m2.9 2.9q-.15-.15-.212-.325T13.925 12t.063-.375t.212-.325l2-2q.15-.15.338-.225T16.925 9H21q.425 0 .713.288T22 10v4q0 .425-.288.713T21 15h-4.075q-.2 0-.387-.075T16.2 14.7zM2 14v-4q0-.425.288-.712T3 9h4.075q.2 0 .388.075T7.8 9.3l2 2q.15.15.213.325t.062.375t-.062.375t-.213.325l-2 2q-.15.15-.337.225T7.075 15H3q-.425 0-.712-.288T2 14m7 7v-4.075q0-.2.075-.387T9.3 16.2l2-2q.15-.15.325-.212t.375-.063t.375.063t.325.212l2 2q.15.15.225.338t.075.387V21q0 .425-.288.713T14 22h-4q-.425 0-.712-.288T9 21m3-13.35l1-1V4h-2v2.65zM4 13h2.65l1-1l-1-1H4zm7 7h2v-2.65l-1-1l-1 1zm6.35-7H20v-2h-2.65l-1 1z"/></svg>'},{slug:"material-symbols:joystick",label:"Joystick",keywords:["joystick"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 8.275V7.85q-1.1-.325-1.8-1.237T8.5 4.5q0-1.45 1.025-2.475T12 1t2.475 1.025T15.5 4.5q0 1.2-.7 2.113T13 7.85v.425l7 4.025q.475.275.738.738T21 14.05v1.9q0 .55-.262 1.013T20 17.7l-7 4.025Q12.525 22 12 22t-1-.275L4 17.7q-.475-.275-.737-.737T3 15.95v-1.9q0-.55.263-1.012T4 12.3zM6.8 13l5.2 3l5.2-3l-4.2-2.425V14h-2v-3.425z"/></svg>'},{slug:"material-symbols:joystick-outline",label:"Joystick Outline",keywords:["joystick"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m6.8 13l5.2 3l5.2-3l-4.2-2.425V14h-2v-3.425zM11 8.275V7.85q-1.1-.325-1.8-1.238T8.5 4.5q0-1.45 1.025-2.475T12 1t2.475 1.025T15.5 4.5q0 1.2-.7 2.113T13 7.85v.425l7 4.025q.475.275.738.738T21 14.05v1.9q0 .55-.262 1.013T20 17.7l-7 4.025Q12.525 22 12 22t-1-.275L4 17.7q-.475-.275-.737-.737T3 15.95v-1.9q0-.55.263-1.012T4 12.3zm0 9.45l-6-3.45v1.675L12 20l7-4.05v-1.675l-6 3.45Q12.525 18 12 18t-1-.275m2.063-12.163q.437-.437.437-1.062t-.437-1.062T12 3t-1.062.438T10.5 4.5t.438 1.063T12 6t1.063-.437M12 20"/></svg>'},{slug:"material-symbols:joystick-outline-sharp",label:"Joystick Outline Sharp",keywords:["joystick"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 8.275V7.85q-1.1-.325-1.8-1.237T8.5 4.5q0-1.45 1.025-2.475T12 1t2.475 1.025T15.5 4.5q0 1.2-.7 2.113T13 7.85v.425l8 4.6v4.25l-8 4.6Q12.525 22 12 22t-1-.275l-8-4.6v-4.25zm-6 6v1.675L12 20l7-4.05v-1.675L12 18.3zm8.063-8.712q.437-.438.437-1.063t-.437-1.062T12 3t-1.062.438T10.5 4.5t.438 1.063T12 6t1.063-.437M6.8 13l5.2 3l5.2-3l-4.2-2.425V14h-2v-3.425z"/></svg>'},{slug:"mdi:battery",label:"Battery",keywords:["battery"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16.67 4H15V2H9v2H7.33A1.33 1.33 0 0 0 6 5.33v15.34C6 21.4 6.6 22 7.33 22h9.34A1.33 1.33 0 0 0 18 20.67V5.33C18 4.6 17.4 4 16.67 4"/></svg>'},{slug:"mdi:battery-outline",label:"Battery Outline",keywords:["battery"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16 20H8V6h8m.67-2H15V2H9v2H7.33A1.33 1.33 0 0 0 6 5.33v15.34C6 21.4 6.6 22 7.33 22h9.34A1.33 1.33 0 0 0 18 20.67V5.33C18 4.6 17.4 4 16.67 4"/></svg>'},{slug:"tabler:battery",label:"Battery",keywords:["battery"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 7h11a2 2 0 0 1 2 2v.5a.5.5 0 0 0 .5.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5a.5.5 0 0 0-.5.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2"/></svg>'},{slug:"material-symbols:bolt",label:"Bolt",keywords:["bolt"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m8 22l1-7H4l9-13h2l-1 8h6L10 22z"/></svg>'},{slug:"material-symbols:bolt-outline",label:"Bolt Outline",keywords:["bolt"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m10.55 18.2l5.175-6.2h-4l.725-5.675L7.825 13H11.3zM8 22l1-7H4l9-13h2l-1 8h6L10 22zm3.775-9.75"/></svg>'},{slug:"material-symbols:bolt-outline-rounded",label:"Bolt Outline Rounded",keywords:["bolt"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m10.55 18.2l5.175-6.2h-4l.725-5.675L7.825 13H11.3zM9 15H5.9q-.6 0-.888-.537t.063-1.038l7.475-10.75q.25-.35.65-.487t.825.012t.625.525t.15.8L14 10h3.875q.65 0 .913.575t-.163 1.075L10.4 21.5q-.275.325-.675.425t-.775-.075t-.587-.537t-.163-.788zm2.775-2.75"/></svg>'},{slug:"material-symbols:bluetooth",label:"Bluetooth",keywords:["bluetooth"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 22v-7.6L6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5L11 9.6V2h1l5.7 5.7l-4.3 4.3l4.3 4.3L12 22zm2-12.4l1.9-1.9L13 5.85zm0 8.55l1.9-1.85l-1.9-1.9z"/></svg>'},{slug:"material-symbols:bluetooth-rounded",label:"Bluetooth Rounded",keywords:["bluetooth"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 20.575V14.4l-3.9 3.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275L11 9.6V3.425q0-.45.3-.737T12 2.4q.2 0 .375.075t.325.225L17 7q.15.15.213.325t.062.375t-.062.375T17 8.4L13.4 12l3.6 3.6q.15.15.213.325t.062.375t-.062.375T17 17l-4.3 4.3q-.15.15-.325.225T12 21.6q-.4 0-.7-.288t-.3-.737M13 9.6l1.9-1.9L13 5.85zm0 8.55l1.9-1.85l-1.9-1.9z"/></svg>'},{slug:"mdi:bluetooth",label:"Bluetooth",keywords:["bluetooth"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14.88 16.29L13 18.17v-3.76m0-8.58l1.88 1.88L13 9.58m4.71-1.87L12 2h-1v7.58L6.41 5L5 6.41L10.59 12L5 17.58L6.41 19L11 14.41V22h1l5.71-5.71l-4.3-4.29z"/></svg>'},{slug:"material-symbols:wifi",label:"Wifi",keywords:["wifi"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.225 20.275Q9.5 19.55 9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21t-1.775-.725M6.35 15.35l-2.1-2.15q1.475-1.475 3.463-2.337T12 10t4.288.875t3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725T12 13t-3.1.625t-2.55 1.725M2.1 11.1L0 9q2.3-2.35 5.375-3.675T12 4t6.625 1.325T24 9l-2.1 2.1q-1.925-1.925-4.462-3.012T12 7T6.563 8.088T2.1 11.1"/></svg>'},{slug:"material-symbols:wifi-rounded",label:"Wifi Rounded",keywords:["wifi"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.225 20.275Q9.5 19.55 9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21t-1.775-.725m5.338-9.675q1.687.6 3.062 1.65q.5.375.513.988T18.7 14.3q-.425.425-1.05.438t-1.125-.338q-.95-.65-2.1-1.025T12 13t-2.425.375t-2.1 1.025q-.5.35-1.125.325t-1.05-.45q-.425-.45-.425-1.062t.5-.988q1.375-1.05 3.063-1.638T12 10t3.563.6m2.324-5.575q2.763 1.025 4.963 2.9q.5.425.525 1.05t-.425 1.075q-.425.425-1.05.438t-1.125-.388q-1.8-1.475-4.037-2.287T12 7t-4.737.813T3.225 10.1q-.5.4-1.125.388t-1.05-.438Q.6 9.6.625 8.975t.525-1.05q2.2-1.875 4.963-2.9T12 4t5.888 1.025"/></svg>'},{slug:"material-symbols:wifi-sharp",label:"Wifi Sharp",keywords:["wifi"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m6.35 15.35l-2.1-2.15q1.55-1.55 3.55-2.375T12 10t4.213.838t3.537 2.412l-2.1 2.1q-1.125-1.125-2.588-1.737T12 13t-3.062.613T6.35 15.35M2.1 11.1L0 9q2.375-2.425 5.488-3.713T12 4t6.513 1.288T24 9l-2.1 2.1q-1.975-1.975-4.538-3.037T12 7T6.637 8.063T2.1 11.1M12 21l-3.525-3.55q.7-.7 1.613-1.075T12 16t1.913.375t1.612 1.075z"/></svg>'},{slug:"mdi:antenna",label:"Antenna",keywords:["antenna"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 7.5c.69 0 1.27.23 1.76.7s.74 1.07.74 1.8q0 1.575-1.5 2.28V21h-2v-8.72Q9.5 11.575 9.5 10c0-.73.26-1.33.74-1.8s1.07-.7 1.76-.7m4.69-2.2c1.25 1.25 1.92 2.81 2.01 4.7c0 1.8-.67 3.38-2.01 4.72L15.5 13.5c1-.91 1.5-2.08 1.5-3.5c0-1.33-.5-2.5-1.5-3.5zM6.09 4.08C4.5 5.67 3.7 7.64 3.7 10s.8 4.3 2.39 5.89l-1.17 1.22C3 15.08 2 12.7 2 10s1-5.06 2.92-7.09zm12.99-1.17C21 4.94 22 7.3 22 10c0 2.8-1 5.17-2.92 7.11l-1.17-1.22C19.5 14.3 20.3 12.33 20.3 10s-.8-4.33-2.39-5.92zM7.31 5.3L8.5 6.5C7.5 7.42 7 8.58 7 10c0 1.33.5 2.5 1.5 3.5l-1.19 1.22C5.97 13.38 5.3 11.8 5.3 10s.67-3.36 2.01-4.7"/></svg>'},{slug:"tabler:antenna",label:"Antenna",keywords:["antenna"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 4v8m-4-7.5v7M12 5v16M8 5.5v5M4 6v4m16-2H4"/></svg>'},{slug:"lucide:antenna",label:"Antenna",keywords:["antenna"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12L7 2m0 10l5-10m0 10l5-10m0 10l5-10M4.5 7h15M12 16v6"/></svg>'},{slug:"mdi:led-outline",label:"Led Outline",keywords:["led"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4m0 2a2 2 0 0 1 2 2v5h-4v-5a2 2 0 0 1 2-2"/></svg>'},{slug:"mdi:led-on",label:"Led On",keywords:["led"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 0v4h2V0zm7.3 2.29l-3.06 3l1.4 1.42l3.06-3zm-12.59 0L4.29 3.71l3 3l1.42-1.42zM12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4M2 9v2h4V9zm16 0v2h4V9z"/></svg>'},{slug:"mdi:led-off",label:"Led Off",keywords:["led"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4"/></svg>'},{slug:"tabler:bulb",label:"Bulb",keywords:["bulb"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h1m8-9v1m8 8h1M5.6 5.6l.7.7m12.1-.7l-.7.7M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0-1 3a2 2 0 0 1-4 0a3.5 3.5 0 0 0-1-3m.7 1h4.6"/></svg>'},{slug:"tabler:bulb-filled",label:"Bulb Filled",keywords:["bulb"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 11a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm8-9a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1m9 9a1 1 0 0 1 .117 1.993L21 13h-1a1 1 0 0 1-.117-1.993L20 11zM4.893 4.893a1 1 0 0 1 1.32-.083l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7a1 1 0 0 1 0-1.414m12.8 0a1 1 0 0 1 1.497 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094zM14 18a1 1 0 0 1 1 1a3 3 0 0 1-6 0a1 1 0 0 1 .883-.993L10 18zM12 6a6 6 0 0 1 3.6 10.8a1 1 0 0 1-.471.192L15 17H9a1 1 0 0 1-.6-.2A6 6 0 0 1 12 6"/></svg>'},{slug:"mingcute:bulb-fill",label:"Bulb Fill",keywords:["bulb"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M13 20a1 1 0 0 1 .117 1.993L13 22h-2a1 1 0 0 1-.117-1.993L11 20zM12 2c4.41 0 8 3.543 8 7.933c0 3.006-1.522 5.196-2.78 6.494l-.284.283l-.27.252l-.252.22l-.33.27l-.328.244c-.241.17-.403.419-.55.678l-.205.364c-.238.41-.517.762-1.108.762h-3.786c-.59 0-.87-.351-1.108-.762l-.118-.208c-.172-.312-.348-.63-.637-.834l-.232-.171l-.199-.155l-.227-.188l-.252-.22l-.27-.252l-.285-.283C5.522 15.129 4 12.939 4 9.933C4 5.543 7.59 2 12 2m1.707 4.293a1 1 0 0 0-1.32-.083l-.094.083L10.3 8.286a1.01 1.01 0 0 0-.084 1.333l.084.095L11.586 11l-1.293 1.293a1 1 0 0 0 1.32 1.497l.094-.083l1.993-1.993a1.01 1.01 0 0 0 .084-1.333l-.084-.095L12.414 9l1.293-1.293a1 1 0 0 0 0-1.414"/></g></svg>'},{slug:"ph:x-light",label:"X Light",keywords:["light"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M204.24 195.76a6 6 0 1 1-8.48 8.48L128 136.49l-67.76 67.75a6 6 0 0 1-8.48-8.48L119.51 128L51.76 60.24a6 6 0 0 1 8.48-8.48L128 119.51l67.76-67.75a6 6 0 0 1 8.48 8.48L136.49 128Z"/></svg>'},{slug:"ph:at-light",label:"At Light",keywords:["light"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M128 26a102 102 0 0 0 0 204c21.13 0 43.31-6.35 59.32-17a6 6 0 0 0-6.65-10c-13.9 9.25-34.09 15-52.67 15a90 90 0 1 1 90-90c0 29.58-13.78 34-22 34s-22-4.42-22-34V88a6 6 0 0 0-12 0v9a46 46 0 1 0 4.34 56.32C171.76 166.6 182 174 196 174c21.29 0 34-17.2 34-46A102.12 102.12 0 0 0 128 26m0 136a34 34 0 1 1 34-34a34 34 0 0 1-34 34"/></svg>'},{slug:"ph:pi-light",label:"Pi Light",keywords:["light"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M230 172a34 34 0 0 1-68 0V70H94v130a6 6 0 0 1-12 0V70H72a42 42 0 0 0-42 42a6 6 0 0 1-12 0a54.06 54.06 0 0 1 54-54h152a6 6 0 0 1 0 12h-50v102a22 22 0 0 0 44 0a6 6 0 0 1 12 0"/></svg>'},{slug:"mdi:lamp",label:"Lamp",keywords:["lamp"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8 2h8l4 12H4zm3 13h2v5h5v2H6v-2h5z"/></svg>'},{slug:"mdi:lamp-outline",label:"Lamp Outline",keywords:["lamp"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m14.56 4l2.67 8H6.78l2.66-8zM16 2H8L4 14h16zm-5 13h2v5h5v2H6v-2h5z"/></svg>'},{slug:"solar:lamp-bold",label:"Lamp Bold",keywords:["lamp"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6.667 3.151c-.786.775-1.09 1.948-1.699 4.294l-.084.324c-.828 3.189-1.242 4.783-.49 5.903q.112.168.247.319C5.536 15 7.183 15 10.477 15h.779v6.25h-2.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25V15h.78c1.32 0 2.374 0 3.223-.065l-.003.065v2a.75.75 0 1 0 1.5 0v-2.318c.468-.15.83-.369 1.116-.691q.135-.15.247-.32c.752-1.12.338-2.713-.49-5.902l-.084-.324c-.609-2.346-.913-3.519-1.7-4.294a4 4 0 0 0-.756-.585C15.64 2 14.429 2 12.007 2c-2.424 0-3.635 0-4.583.566a4 4 0 0 0-.757.585"/></svg>'},{slug:"mdi:flash",label:"Flash",keywords:["flash"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>'},{slug:"mdi:flash-outline",label:"Flash Outline",keywords:["flash"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 2h10l-3.5 7H17l-7 13v-8H7zm2 2v8h3v2.66L14 11h-3.76l3.52-7z"/></svg>'},{slug:"mingcute:flash-fill",label:"Flash Fill",keywords:["flash"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M13.232 1.36c.632-.758 1.863-.24 1.763.742L14.289 9H20a1 1 0 0 1 .768 1.64l-10 12c-.632.758-1.863.24-1.763-.742L9.711 15H4a1 1 0 0 1-.768-1.64z"/></g></svg>'},{slug:"mdi:temperature",label:"Temperature",keywords:["temperature"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15 13V5a3 3 0 0 0-6 0v8a5 5 0 1 0 6 0m-3-9a1 1 0 0 1 1 1v3h-2V5a1 1 0 0 1 1-1"/></svg>'},{slug:"solar:temperature-bold",label:"Temperature Bold",keywords:["temperature"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M17.5 16.5a5.5 5.5 0 1 1-8.939-4.293c.264-.211.439-.521.439-.86V5a3 3 0 1 1 6 0v6.348c0 .338.175.648.439.86A5.49 5.49 0 0 1 17.5 16.5M12 4.25a.75.75 0 0 1 .75.75v8.38c0 .437.297.808.658 1.054a2.5 2.5 0 1 1-2.816 0c.36-.246.658-.617.658-1.054V5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>'},{slug:"solar:temperature-bold-duotone",label:"Temperature Bold Duotone",keywords:["temperature"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 16.5a5.5 5.5 0 1 1-8.939-4.293c.264-.211.439-.521.439-.86V5a3 3 0 1 1 6 0v6.348c0 .338.175.648.439.86A5.49 5.49 0 0 1 17.5 16.5" opacity=".5"/><path fill="currentColor" d="M12.75 5a.75.75 0 0 0-1.5 0v8.38c0 .437-.297.808-.658 1.054a2.5 2.5 0 1 0 2.816 0c-.36-.246-.658-.617-.658-1.054z"/></svg>'},{slug:"material-symbols:thermometer",label:"Thermometer",keywords:["thermometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-2.075 0-3.537-1.463T7 16q0-1.2.525-2.238T9 12V6q0-1.25.875-2.125T12 3t2.125.875T15 6v6q.95.725 1.475 1.763T17 16q0 2.075-1.463 3.538T12 21m-1-11h2V6q0-.425-.288-.712T12 5t-.712.288T11 6z"/></svg>'},{slug:"material-symbols:thermometer-outline",label:"Thermometer Outline",keywords:["thermometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-2.075 0-3.537-1.463T7 16q0-1.2.525-2.238T9 12V6q0-1.25.875-2.125T12 3t2.125.875T15 6v6q.95.725 1.475 1.763T17 16q0 2.075-1.463 3.538T12 21m0-2q1.25 0 2.125-.875T15 16q0-.725-.312-1.35T13.8 13.6L13 13V6q0-.425-.288-.712T12 5t-.712.288T11 6v7l-.8.6q-.575.425-.888 1.05T9 16q0 1.25.875 2.125T12 19m0-3"/></svg>'},{slug:"mdi:thermometer",label:"Thermometer",keywords:["thermometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15 13V5a3 3 0 0 0-6 0v8a5 5 0 1 0 6 0m-3-9a1 1 0 0 1 1 1v3h-2V5a1 1 0 0 1 1-1"/></svg>'},{slug:"mdi:gauge",label:"Gauge",keywords:["gauge"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8c0 2.4-1 4.5-2.7 6c-1.4-1.3-3.3-2-5.3-2s-3.8.7-5.3 2C5 16.5 4 14.4 4 12a8 8 0 0 1 8-8m2 1.89c-.38.01-.74.26-.9.65l-1.29 3.23l-.1.23c-.71.13-1.3.6-1.57 1.26c-.41 1.03.09 2.19 1.12 2.6s2.19-.09 2.6-1.12c.26-.66.14-1.42-.29-1.98l.1-.26l1.29-3.21l.01-.03c.2-.51-.05-1.09-.56-1.3c-.13-.05-.26-.07-.41-.07M10 6a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M7 9a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m10 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"/></svg>'},{slug:"tabler:gauge",label:"Gauge",keywords:["gauge"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"/><path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m2.41-1.41L16 8m-9 4a5 5 0 0 1 5-5"/></g></svg>'},{slug:"tabler:gauge-filled",label:"Gauge Filled",keywords:["gauge"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34m-.293 3.953a1 1 0 0 0-1.414 0l-2.59 2.59l-.083.094l-.068.1a2 2 0 0 0-2.547 1.774L10 12l.005.15a2 2 0 1 0 3.917-.701a1 1 0 0 0 .195-.152l2.59-2.59l.083-.094a1 1 0 0 0-.083-1.32M12 6a6 6 0 0 0-6 6a1 1 0 0 0 2 0a4 4 0 0 1 4-4a1 1 0 0 0 0-2"/></svg>'},{slug:"mdi:speedometer",label:"Speedometer",keywords:["speedometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16a3 3 0 0 1-3-3c0-1.12.61-2.1 1.5-2.61l9.71-5.62l-5.53 9.58c-.5.98-1.51 1.65-2.68 1.65m0-13c1.81 0 3.5.5 4.97 1.32l-2.1 1.21C14 5.19 13 5 12 5a8 8 0 0 0-8 8c0 2.21.89 4.21 2.34 5.65h.01c.39.39.39 1.02 0 1.41s-1.03.39-1.42.01A9.97 9.97 0 0 1 2 13A10 10 0 0 1 12 3m10 10c0 2.76-1.12 5.26-2.93 7.07c-.39.38-1.02.38-1.41-.01a.996.996 0 0 1 0-1.41A7.95 7.95 0 0 0 20 13c0-1-.19-2-.54-2.9L20.67 8C21.5 9.5 22 11.18 22 13"/></svg>'},{slug:"ph:speedometer",label:"Speedometer",keywords:["speedometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="m114.34 154.34l96-96a8 8 0 0 1 11.32 11.32l-96 96a8 8 0 0 1-11.32-11.32M128 88a63.9 63.9 0 0 1 20.44 3.33a8 8 0 1 0 5.11-15.16a80 80 0 0 0-105.06 84.71a8 8 0 0 0 7.94 7.12c.29 0 .59 0 .89-.05a8 8 0 0 0 7.07-8.83A65 65 0 0 1 64 152a64.07 64.07 0 0 1 64-64m99.74 13a8 8 0 0 0-14.24 7.3a96.27 96.27 0 0 1 5 75.71l-181.1-.07A96.24 96.24 0 0 1 128 56h.88a95 95 0 0 1 42.82 10.5a8 8 0 1 0 7.3-14.23a112 112 0 0 0-156.66 137A16.07 16.07 0 0 0 37.46 200h181.07a16 16 0 0 0 15.11-10.71a112.35 112.35 0 0 0-5.9-88.3Z"/></svg>'},{slug:"ph:speedometer-bold",label:"Speedometer Bold",keywords:["speedometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="m119.51 143.51l88-88a12 12 0 1 1 17 17l-88 88a12 12 0 1 1-17-17m14.23-43.2a12 12 0 1 0 2.62-23.85A75 75 0 0 0 128 76a76.08 76.08 0 0 0-76 76a12 12 0 0 0 24 0a52.06 52.06 0 0 1 52-52a55 55 0 0 1 5.74.31m101.54 7.5a12 12 0 0 0-22.19 9.19a92.47 92.47 0 0 1 2.58 63H40.34A92.23 92.23 0 0 1 128 60h.84a91.4 91.4 0 0 1 34.2 6.91a12 12 0 0 0 9.14-22.19A116.07 116.07 0 0 0 18.57 190.58A20.09 20.09 0 0 0 37.46 204h181.07a20.06 20.06 0 0 0 18.88-13.38a116.4 116.4 0 0 0-2.13-82.81"/></svg>'},{slug:"material-symbols:radar",label:"Radar",keywords:["radar"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8.1 21.213q-1.825-.788-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22t-3.9-.788M12 20q1.4 0 2.638-.437t2.262-1.238L15.475 16.9q-.725.525-1.612.813T12 18q-2.5 0-4.25-1.75T6 12t1.75-4.25T12 6t4.25 1.75T18 12q0 .975-.3 1.875t-.825 1.625l1.425 1.425q.8-1.025 1.25-2.275T20 12q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-4q.55 0 1.063-.137t.962-.413L12.5 13.925q-.125.05-.25.063T12 14q-.825 0-1.412-.587T10 12t.588-1.412T12 10t1.413.588T14 12q0 .15-.012.288t-.063.262l1.5 1.5q.275-.45.425-.962T16 12q0-1.65-1.175-2.825T12 8T9.175 9.175T8 12t1.175 2.825T12 16"/></svg>'},{slug:"mdi:radar",label:"Radar",keywords:["radar"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m19.07 4.93l-1.41 1.41A8 8 0 0 1 20 12a8 8 0 0 1-8 8a8 8 0 0 1-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12a6 6 0 0 0 6 6a6 6 0 0 0 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12a4 4 0 0 1-4 4a4 4 0 0 1-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.74-.4-1.38-1-1.72V2h-1A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-2.76-1.12-5.26-2.93-7.07"/></svg>'},{slug:"solar:radar-bold",label:"Radar Bold",keywords:["radar"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-8.642-5.07a5.2 5.2 0 0 0-2.232-.107a.75.75 0 0 1-.252-1.478a6.749 6.749 0 1 1-4.519 2.953c.453-.69 1.358-.733 1.92-.279l4.197 3.398a.75.75 0 1 1-.944 1.166L7.49 9.313a5.249 5.249 0 1 0 5.87-2.384" clip-rule="evenodd"/></svg>'},{slug:"mdi:compass",label:"Compass",keywords:["compass"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14.19 14.19L6 18l3.81-8.19L18 6m-6-4A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 8.9a1.1 1.1 0 0 0-1.1 1.1a1.1 1.1 0 0 0 1.1 1.1a1.1 1.1 0 0 0 1.1-1.1a1.1 1.1 0 0 0-1.1-1.1"/></svg>'},{slug:"mdi:compass-outline",label:"Compass Outline",keywords:["compass"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m7 17l3.2-6.8L17 7l-3.2 6.8zm5-5.9a.9.9 0 0 0-.9.9a.9.9 0 0 0 .9.9a.9.9 0 0 0 .9-.9a.9.9 0 0 0-.9-.9M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"/></svg>'},{slug:"solar:compass-bold",label:"Compass Bold",keywords:["compass"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1.956-7.905c-.193.17-.44.268-.932.465c-2.31.924-3.465 1.386-4.124.938a1.5 1.5 0 0 1-.398-.398c-.448-.66.014-1.814.938-4.124c.197-.493.295-.74.465-.933q.065-.073.139-.138c.193-.17.44-.268.932-.465c2.31-.924 3.464-1.386 4.124-.938a1.5 1.5 0 0 1 .398.398c.448.66-.014 1.814-.938 4.124c-.197.493-.295.739-.465.932q-.065.075-.139.139" clip-rule="evenodd"/></svg>'},{slug:"tabler:map-pin",label:"Map Pin",keywords:["map-pin"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0"/><path d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0"/></g></svg>'},{slug:"tabler:map-pin-filled",label:"Map Pin Filled",keywords:["map-pin"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21l-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135l-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6"/></svg>'},{slug:"mingcute:map-pin-fill",label:"Map Pin Fill",keywords:["map-pin"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M7 7a5 5 0 1 1 6 4.9V17a1 1 0 1 1-2 0v-5.1A5 5 0 0 1 7 7m2.489 9.1a1 1 0 0 1-.838 1.14c-1.278.195-2.293.489-2.96.815c-.335.164-.534.313-.637.422l-.021.023c.033.039.09.096.19.169c.28.207.749.435 1.418.644C7.968 19.728 9.863 20 12 20s4.032-.272 5.359-.687c.67-.209 1.138-.437 1.418-.644c.1-.073.157-.13.19-.169l-.021-.023c-.103-.109-.302-.258-.637-.422c-.667-.326-1.682-.62-2.96-.815a1 1 0 1 1 .301-1.977c1.388.21 2.622.547 3.539.996c.457.224.884.5 1.208.842c.33.347.603.82.603 1.399c0 .811-.524 1.4-1.034 1.777c-.53.392-1.233.702-2.01.945c-1.57.49-3.674.778-5.956.778s-4.387-.288-5.955-.778c-.778-.243-1.48-.553-2.01-.945C3.524 19.9 3 19.311 3 18.5c0-.58.273-1.052.603-1.4c.325-.342.751-.617 1.208-.84c.917-.45 2.152-.786 3.538-.997a1 1 0 0 1 1.14.838Z"/></g></svg>'},{slug:"mdi:ruler",label:"Ruler",keywords:["ruler"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m1.39 18.36l1.77-1.76L4.58 18l1.06-1.05l-1.42-1.41l1.42-1.42l2.47 2.48l1.06-1.06l-2.47-2.48l1.41-1.41l1.42 1.41L10.59 12l-1.42-1.41l1.42-1.42l2.47 2.48l1.06-1.06l-2.47-2.48l1.41-1.41l1.41 1.41l1.07-1.06l-1.42-1.41l1.42-1.42L18 6.7l1.07-1.06l-2.47-2.48l1.76-1.77l4.25 4.25L5.64 22.61z"/></svg>'},{slug:"solar:ruler-bold",label:"Ruler Bold",keywords:["ruler"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 15.616c0 .847.682 1.529 2.045 2.892l1.447 1.447C6.855 21.318 7.537 22 8.384 22s1.53-.682 2.893-2.045l8.678-8.678C21.318 9.913 22 9.23 22 8.384s-.682-1.529-2.045-2.892l-1.447-1.447C17.145 2.682 16.463 2 15.616 2c-.754 0-1.376.54-2.464 1.618q.045.033.085.073l1.415 1.415a.75.75 0 1 1-1.061 1.06l-1.414-1.414a1 1 0 0 1-.074-.086L11.03 5.739q.045.033.086.074l2.121 2.121a.75.75 0 1 1-1.06 1.06l-2.122-2.12a1 1 0 0 1-.074-.087L8.91 7.86q.044.033.086.074l1.414 1.414a.75.75 0 0 1-1.06 1.06L7.933 8.996a1 1 0 0 1-.074-.086L6.787 9.98q.046.033.086.074l2.122 2.122a.75.75 0 0 1-1.061 1.06l-2.121-2.121a1 1 0 0 1-.074-.086l-1.073 1.073q.045.032.086.074l1.414 1.414a.75.75 0 0 1-1.06 1.06L3.69 13.238a1 1 0 0 1-.073-.085C2.539 14.24 2 14.862 2 15.616"/></svg>'},{slug:"solar:ruler-bold-duotone",label:"Ruler Bold Duotone",keywords:["ruler"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 15.616c0 .847.682 1.529 2.045 2.892l1.447 1.447C6.855 21.318 7.537 22 8.384 22s1.53-.682 2.893-2.045l8.678-8.678C21.318 9.913 22 9.23 22 8.384s-.682-1.529-2.045-2.892l-1.447-1.447C17.145 2.682 16.463 2 15.616 2c-.754 0-1.376.54-2.464 1.618l-1.05 1.048l-1.072 1.073l-1.05 1.048L8.91 7.86L7.86 8.909L6.788 9.98L5.74 11.03l-1.073 1.073l-1.048 1.049C2.539 14.24 2 14.862 2 15.616" opacity=".5"/><path fill="currentColor" d="M13.238 3.691a1 1 0 0 0-.086-.073l-1.049 1.048q.033.045.074.086l1.414 1.414a.75.75 0 0 0 1.06-1.06zm-2.122 2.122a1 1 0 0 0-.086-.074L9.982 6.787q.033.045.074.086l2.121 2.122a.75.75 0 0 0 1.06-1.061zM8.995 7.934a1 1 0 0 0-.086-.074L7.86 8.908q.033.046.074.087l1.415 1.414a.75.75 0 1 0 1.06-1.06zm-2.121 2.121a1 1 0 0 0-.086-.074L5.739 11.03q.033.045.074.086l2.121 2.121a.75.75 0 1 0 1.061-1.06zm-2.122 2.122a1 1 0 0 0-.086-.075l-1.048 1.05q.033.045.074.085l1.414 1.414a.75.75 0 1 0 1.06-1.06z"/></svg>'},{slug:"material-symbols:settings",label:"Settings",keywords:["settings"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5"/></svg>'},{slug:"material-symbols:settings-outline",label:"Settings Outline",keywords:["settings"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zM11 20h1.975l.35-2.65q.775-.2 1.438-.587t1.212-.938l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.737T17.5 12t-.05-.787t-.175-.738l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.962t-1.438-.588L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.963t1.437.587zm1.05-4.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5M12 12"/></svg>'},{slug:"material-symbols:settings-outline-rounded",label:"Settings Outline Rounded",keywords:["settings"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.825 22q-.675 0-1.162-.45t-.588-1.1L8.85 18.8q-.325-.125-.612-.3t-.563-.375l-1.55.65q-.625.275-1.25.05t-.975-.8l-1.175-2.05q-.35-.575-.2-1.225t.675-1.075l1.325-1Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337l-1.325-1Q2.675 9.9 2.525 9.25t.2-1.225L3.9 5.975q.35-.575.975-.8t1.25.05l1.55.65q.275-.2.575-.375t.6-.3l.225-1.65q.1-.65.588-1.1T10.825 2h2.35q.675 0 1.163.45t.587 1.1l.225 1.65q.325.125.613.3t.562.375l1.55-.65q.625-.275 1.25-.05t.975.8l1.175 2.05q.35.575.2 1.225t-.675 1.075l-1.325 1q.025.175.025.338v.674q0 .163-.05.338l1.325 1q.525.425.675 1.075t-.2 1.225l-1.2 2.05q-.35.575-.975.8t-1.25-.05l-1.5-.65q-.275.2-.575.375t-.6.3l-.225 1.65q-.1.65-.587 1.1t-1.163.45zM11 20h1.975l.35-2.65q.775-.2 1.438-.587t1.212-.938l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.737T17.5 12t-.05-.787t-.175-.738l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.962t-1.438-.588L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.963t1.437.587zm1.05-4.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.487 1.025T8.55 12t1.013 2.475T12.05 15.5M12 12"/></svg>'},{slug:"tabler:tool",label:"Tool",keywords:["tool"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10h3V7L6.5 3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1-3 3l-6-6a6 6 0 0 1-8-8z"/></svg>'},{slug:"mingcute:tool-fill",label:"Tool Fill",keywords:["tool"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M7.527 2.657a7.001 7.001 0 0 1 8.26 9.347l4.599 3.893a3.3 3.3 0 1 1-4.651 4.65l-3.891-4.597a7.001 7.001 0 0 1-9.35-8.26a1.01 1.01 0 0 1 1.72-.432l3.045 3.307l2.297-.845l.847-2.3l-3.309-3.04a1.01 1.01 0 0 1 .433-1.723"/></g></svg>'},{slug:"mingcute:tool-line",label:"Tool Line",keywords:["tool"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M6.798 2.884a7.002 7.002 0 0 1 9.294 8.565l4.394 3.718a3.76 3.76 0 1 1-5.3 5.3l-3.717-4.394a7.002 7.002 0 0 1-8.565-9.295c.358-.894 1.48-1.007 2.063-.373L8.17 9.883l1.446-.288l.29-1.449l-3.48-3.198c-.634-.583-.522-1.706.373-2.064ZM8.805 4.42l2.763 2.54c.322.296.466.738.38 1.165l-.47 2.354a1.25 1.25 0 0 1-.982.981l-2.35.467a1.25 1.25 0 0 1-1.164-.38L4.438 8.785a5.002 5.002 0 0 0 6.804 5.25a1.26 1.26 0 0 1 1.422.355l4.05 4.786a1.76 1.76 0 1 0 2.48-2.48l-4.785-4.05a1.26 1.26 0 0 1-.355-1.422a5 5 0 0 0-5.25-6.804Z"/></g></svg>'},{slug:"mdi:wrench",label:"Wrench",keywords:["wrench"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9c-2-2-5-2.4-7.4-1.3L9 6L6 9L1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4"/></svg>'},{slug:"mdi:wrench-outline",label:"Wrench Outline",keywords:["wrench"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m22.61 19l-9.08-9.09c.93-2.34.47-5.1-1.44-7C9.79.61 6.21.4 3.66 2.26L7.5 6.11L6.08 7.5L2.25 3.69C.39 6.23.6 9.82 2.9 12.11c1.86 1.86 4.57 2.35 6.89 1.48l9.11 9.11c.39.39 1.02.39 1.41 0l2.3-2.3c.39-.4.39-1.01 0-1.4m-3 1.59l-9.46-9.46c-.61.45-1.29.72-2 .82c-1.36.2-2.79-.21-3.83-1.25C3.37 9.76 2.93 8.5 3 7.26l3.09 3.09l4.24-4.24L7.24 3c1.26-.05 2.49.39 3.44 1.33a4.47 4.47 0 0 1 1.24 3.96a4.35 4.35 0 0 1-.88 1.96l9.46 9.45z"/></svg>'},{slug:"ri:wrench-fill",label:"Wrench Fill",keywords:["wrench"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19.249 6.872a1 1 0 0 1 1.645.36a7.001 7.001 0 0 1-8.912 9.037l-4.013 4.013a3 3 0 1 1-4.243-4.243l4.013-4.013a7 7 0 0 1 9.025-8.917a1 1 0 0 1 .36 1.645L14.768 7.11a1.5 1.5 0 0 0 2.121 2.122z"/></svg>'},{slug:"mdi:screwdriver",label:"Screwdriver",keywords:["screwdriver"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18 1.83c-.5 0-1 .17-1.41.58L8 11l1.5 1.5L6 16H4l-2 4l2 2l4-2v-2l3.5-3.5L13 16l8.59-8.59c.62-.91.78-2.04 0-2.82l-2.18-2.18A1.95 1.95 0 0 0 18 1.83M18 4l2 2l-7 7l-2-2z"/></svg>'}],af="./",cc=ug.map(i=>({slug:i.slug,label:i.label,keywords:i.keywords,svg:i.svg})),dg=Object.fromEntries(cc.map(i=>[i.slug,i.svg])),Bl="grommet-icons:raspberry";function ks(i){return`data:image/svg+xml,${encodeURIComponent(i)}`}function sf(i){return dg[i]??null}const fg=`${af}art/logo.png`,mg=`${af}art/Teknologiskolen_logo.png`,hg=`${af}art/logo_teknologiskolen_white.png`,pg={menu:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]}),user:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),settings:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),info:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),u.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),help:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),u.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),debugger:u.jsx(u.Fragment,{children:u.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),edit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),u.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),picoIde:u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),u.jsx("path",{d:"M8 9l-3 3 3 3"}),u.jsx("path",{d:"M16 9l3 3-3 3"}),u.jsx("line",{x1:"13",y1:"8",x2:"11",y2:"16"})]}),exit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),plus:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),delete:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),u.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),power:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),u.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),save:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),u.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),u.jsx("polyline",{points:"7 3 7 8 15 8"})]}),upload:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),u.jsx("polyline",{points:"17 8 12 3 7 8"}),u.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),refresh:u.jsxs(u.Fragment,{children:[u.jsx("polyline",{points:"23 4 23 10 17 10"}),u.jsx("polyline",{points:"1 20 1 14 7 14"}),u.jsx("path",{d:"M3.5 9a9 9 0 0 1 14.9-3.4L23 10"}),u.jsx("path",{d:"M20.5 15a9 9 0 0 1-14.9 3.4L1 14"})]}),package:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),u.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),u.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),back:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),u.jsx("polyline",{points:"12 19 5 12 12 5"})]}),chevronLeft:u.jsx("polyline",{points:"15 6 9 12 15 18"}),chevronRight:u.jsx("polyline",{points:"9 6 15 12 9 18"})};function Dt({name:i,size:l=24,className:o}){return u.jsx("svg",{width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:o,"aria-hidden":"true",children:pg[i]})}let ie=null,fs=null,Cm=0,Wr=!1;function gg(){return new Date().toLocaleTimeString("da-DK",{hour12:!1})}function Dm(i){return new Promise(l=>setTimeout(l,i))}function Bd(i,l){const o=l.userID.toLowerCase();return i.map(s=>{if(!s.ownerID)return s;const d=s.ownerID.toLowerCase()===o;return{...s,isOwnedByMe:d,ownerName:d?l.username:s.ownerName}})}function zd(i,l,o=!1){const s=i.name?Mh(i.name):"";return o&&s?s:l!=null&&l.deviceName?l.deviceName:s||"Pico"}function _g(i){return Object.fromEntries(i.filter(l=>l.type==="toggle").map(l=>[l.name,!!l.toggleInitial]))}function Om(i,l){const o=_g(i);for(const s of i)s.type==="toggle"&&l[s.name]!==void 0&&(o[s.name]=l[s.name]);return o}const ae=B2((i,l)=>{function o(m,g){i(b=>({logs:[{level:m,message:g,time:gg()},...b.logs].slice(0,200)}))}function s(m){fs&&clearTimeout(fs),Cm+=1,i({toast:{message:m,id:Cm}}),fs=setTimeout(()=>i({toast:null}),4500)}function d(m=null){i({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},plotSeries:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:m})}function p(m){return{deviceID:m.deviceID,deviceName:m.deviceName,ownerID:m.ownerID,deviceIcon:m.icon,canOthersConnect:m.canOthersConnect,canOthersEdit:m.canOthersEdit,canOthersEditCode:m.canOthersEditCode,isOwnedByMe:m.isOwnedByMe,ownerName:m.ownerName}}function _(m){const{screen:g,active:b,picoIdeOrigin:w}=l();if(Wr){Wr=!1;return}m&&(o("warning",m),s(m)),(g==="control"||g==="connection"||g==="create"||g==="ide"&&w==="control")&&d(b?p(b):null)}return ie=new og({onProgress:(m,g)=>i({progress:{value:m,label:g}}),onLog:(m,g)=>o(m,g),onRadar:(m,g,b)=>{const w=Date.now(),k={id:`${w}-${Math.random().toString(36).slice(2)}`,angle:g,distance:b,createdAt:w};i(T=>{const U=T.layout.find(I=>I.type==="radar"&&I.name===m),N=(U==null?void 0:U.radarFadeMs)??1200,G=T.radarPings[m]??[];return{radarPings:{...T.radarPings,[m]:[...G.filter(I=>w-I.createdAt<=N),k].slice(-80)}}})},onText:(m,g)=>{i(b=>({textValues:{...b.textValues,[m]:g}}))},onToggleState:(m,g)=>{i(b=>({toggleValues:{...b.toggleValues,[m]:g}}))},onSliderState:(m,g)=>{i(b=>({sliderValues:{...b.sliderValues,[m]:g}}))},onPlot:(m,g,b)=>{const w=Date.now(),k={id:`${w}-${Math.random().toString(36).slice(2)}`,value:g,createdAt:w,label:b};i(T=>{const U=T.plotSeries[m]??[];return{plotSeries:{...T.plotSeries,[m]:[...U,k].slice(-1e3)}}})},onPlotClear:m=>{i(g=>({plotSeries:{...g.plotSeries,[m]:[]}}))},onDisconnect:m=>_(m)}),{screen:"splash",splashTarget:null,user:null,savedDevices:[],connecting:null,progress:{value:0,label:""},toast:null,confirmDialog:null,connectionLost:null,active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},plotSeries:{},logs:[],sideMenuOpen:!1,debuggerOpen:!1,menuPage:null,editMode:!1,dashboardPage:"mine",picoIdeOrigin:"dashboard",init:()=>{const m=U2(),g=m?Bd(mc(),m):mc();m&&li(g),i({user:m,savedDevices:g,splashTarget:m?"dashboard":"intro"})},finishSplash:()=>{const m=l().splashTarget;i({screen:m??"intro"})},createUser:m=>{const g=m.trim();if(!g)return;const b={username:g,userID:z2()};Rd(b),i({user:b,screen:"dashboard"})},findDevice:async m=>{try{const g=await X2(m==null?void 0:m.deviceName);await l().connectToDevice(g,m,!0)}catch(g){g instanceof Error&&g.name!=="NotFoundError"&&o("error",g.message)}},connectToDevice:async(m,g,b)=>{var k,T,U;const w=l().user;if(!w||!ie)return!1;Wr=!1,i({screen:"connection",connecting:{name:zd(m,g,b),icon:(g==null?void 0:g.deviceIcon)??Bl},progress:{value:0,label:"Forbinder..."},sliderValues:{},radarPings:{},textValues:{},plotSeries:{}});try{await ie.connect(m);const N=await ie.runHandshake(w),G=m.id,I=(N.kind==="owned"||N.kind==="unowned")&&((k=N.deviceName)==null?void 0:k.trim())||zd(m,g,b);if(i(ve=>ve.connecting?{connecting:{...ve.connecting,name:I}}:{}),N.kind==="denied"){const ce=`Du kan ikke forbinde, fordi ${((T=N.ownerName)==null?void 0:T.trim())||((U=g==null?void 0:g.ownerName)==null?void 0:U.trim())||"ejeren"} ejer enheden og ikke tillader besøgende at forbinde.`;return o("warning",ce),s(ce),i({screen:"dashboard",connecting:null}),await ie.disconnect(),!0}if(N.kind==="unowned")return i({active:{deviceID:G,deviceName:I,ownerID:w.userID,icon:Bl,canEdit:!0,canEditCode:!0,canOthersConnect:!1,canOthersEdit:!1,canOthersEditCode:!1,isOwnedByMe:!0,ownerName:w.username,gridCols:si,gridRows:ws},screen:"create"}),!0;const V={deviceID:G,deviceName:I,ownerID:N.ownerID,deviceIcon:N.icon||(g==null?void 0:g.deviceIcon)||Bl,canOthersConnect:N.canOthersConnect,canOthersEdit:N.canOthersEdit,canOthersEditCode:N.canOthersEditCode,isOwnedByMe:N.isOwnedByMe,ownerName:N.isOwnedByMe?w.username:N.ownerName??(g==null?void 0:g.ownerName)};i({savedDevices:Ad(V)});const X=await ie.requestLayout(),P=Rm(X),re=Am(X);return i({layout:re,toggleValues:Om(re,l().toggleValues),active:{deviceID:G,deviceName:I,ownerID:N.ownerID,icon:N.icon||(g==null?void 0:g.deviceIcon)||Bl,canEdit:N.canEdit,canEditCode:N.canEditCode,canOthersConnect:N.canOthersConnect,canOthersEdit:N.canOthersEdit,canOthersEditCode:N.canOthersEditCode,isOwnedByMe:N.isOwnedByMe,ownerName:N.isOwnedByMe?w.username:N.ownerName??(g==null?void 0:g.ownerName),gridCols:P.cols,gridRows:P.rows},screen:"control",connecting:null,connectionLost:null}),!0}catch(N){const G=N instanceof Error?N.message:"Forbindelsen mislykkedes.";return o("error",G),s("Forbindelsen mislykkedes."),i({screen:"dashboard",connecting:null}),await ie.disconnect().catch(()=>{}),!1}},finishCreate:async(m,g,b,w,k,T)=>{const{user:U,active:N}=l();if(!(!U||!N||!ie))try{ie.setBusy(!0),await ie.create(U,m,g,b,w,k,T),ie.setBusy(!1);const G={deviceID:N.deviceID,deviceName:N.deviceName,ownerID:U.userID,deviceIcon:m,canOthersConnect:g,canOthersEdit:g&&b,canOthersEditCode:g&&w,isOwnedByMe:!0,ownerName:U.username};i({savedDevices:Ad(G)});const I=await ie.requestLayout(),V=Rm(I),X=Am(I);i({layout:X,toggleValues:Om(X,l().toggleValues),active:{...N,ownerID:U.userID,icon:m,canEdit:!0,canEditCode:!0,canOthersConnect:g,canOthersEdit:g&&b,canOthersEditCode:g&&w,ownerName:U.username,gridCols:V.cols,gridRows:V.rows},screen:"control"})}catch(G){ie.setBusy(!1);const I=G instanceof Error?G.message:"Oprettelse mislykkedes.";o("error",I),s("Oprettelse mislykkedes."),i({screen:"dashboard"}),await ie.disconnect().catch(()=>{})}},saveDeviceSettings:async(m,g,b,w,k,T)=>{const{active:U,user:N}=l();if(!(!U||!ie||!U.isOwnedByMe))try{ie.setBusy(!0),await ie.updateDeviceSettings(m,g,b,w,k,T,N==null?void 0:N.username);const G={...U,icon:m,canEdit:!0,canEditCode:!0,canOthersConnect:g,canOthersEdit:g&&b,canOthersEditCode:g&&w,ownerName:(N==null?void 0:N.username)??U.ownerName,gridCols:k,gridRows:T},I={deviceID:U.deviceID,deviceName:U.deviceName,ownerID:U.ownerID??(N==null?void 0:N.userID),deviceIcon:m,canOthersConnect:g,canOthersEdit:g&&b,canOthersEditCode:g&&w,isOwnedByMe:!0,ownerName:(N==null?void 0:N.username)??U.ownerName};i({active:G,savedDevices:Ad(I)}),s("Enhedsindstillinger gemt.")}catch(G){o("error",G instanceof Error?G.message:"Kunne ikke gemme enhedsindstillinger."),s("Kunne ikke gemme enhedsindstillinger.")}finally{ie.setBusy(!1)}},cancelCreate:async()=>{ie&&await ie.disconnect().catch(()=>{}),i({screen:"dashboard",active:null,connecting:null})},disconnect:async()=>{Wr=!0,d(null),ie&&await ie.disconnect().catch(()=>{}),Wr=!1},removeSavedDevice:m=>{i({savedDevices:I2(m)})},clearSavedDevices:()=>{q2(),i({savedDevices:[]}),s("Gemte enheder ryddet.")},resetApplicationData:async()=>{Wr=!0,ie!=null&&ie.connected&&await ie.disconnect().catch(()=>{}),H2(),window.location.reload()},updateUsername:m=>{const g=l().user,b=m.trim();if(!g||!b)return;const w={...g,username:b};Rd(w),i(k=>{var U;const T=Bd(k.savedDevices,w);return li(T),{user:w,active:(U=k.active)!=null&&U.isOwnedByMe?{...k.active,ownerName:b}:k.active,savedDevices:T}}),s("Brugernavn gemt.")},createOwnerPairingCode:()=>{const m=l().user;return m?vg(m):null},applyOwnerPairingCode:m=>{var b;const g=bg(m,(b=l().user)==null?void 0:b.username);return g?(Rd(g),i(w=>{var T,U,N;const k=Bd(w.savedDevices,g);return li(k),{user:g,active:((U=(T=w.active)==null?void 0:T.ownerID)==null?void 0:U.toLowerCase())===g.userID.toLowerCase()||(N=w.active)!=null&&N.isOwnedByMe?{...w.active,isOwnedByMe:!0,ownerID:g.userID,ownerName:g.username}:w.active,savedDevices:k}}),s("Ejerkoden er gemt. Denne browser bruger nu samme ejer-GUID."),!0):(s("Ejerkoden kunne ikke læses."),!1)},openPicoIde:()=>{const m=l().screen==="control"&&!!(ie!=null&&ie.connected),g=l().active;if(m&&g&&!g.isOwnedByMe&&!g.canEditCode){s("Ejeren tillader ikke, at gæster åbner Kodeværkstedet på denne enhed."),o("warning","Kodeværkstedet er blokeret, fordi ejeren ikke tillader gæster at redigere kode."),i({sideMenuOpen:!1});return}i(b=>({screen:"ide",picoIdeOrigin:m?"control":"dashboard",active:m?b.active:null,layout:m?b.layout:[],sliderValues:m?b.sliderValues:{},toggleValues:m?b.toggleValues:{},radarPings:m?b.radarPings:{},textValues:m?b.textValues:{},plotSeries:m?b.plotSeries:{},editMode:!1,sideMenuOpen:!1,menuPage:null}))},closePicoIde:()=>{const{picoIdeOrigin:m,active:g}=l();i({screen:m==="control"&&g&&(ie!=null&&ie.connected)?"control":"dashboard",sideMenuOpen:!1,menuPage:null,picoIdeOrigin:"dashboard"})},isBleConnected:()=>!!(ie!=null&&ie.connected),bleListFiles:async()=>ie!=null&&ie.connected?ie.listFiles("/"):[],bleReadText:async(m,g,b)=>{if(!(ie!=null&&ie.connected))throw new Error("Ingen BLE-forbindelse.");return ie.readText(m,g,b)},bleWriteText:async(m,g,b)=>{if(!(ie!=null&&ie.connected))throw new Error("Ingen BLE-forbindelse.");await ie.writeText(m,g,b)},bleDeleteFile:async m=>{if(!(ie!=null&&ie.connected))throw new Error("Ingen BLE-forbindelse.");await ie.deleteFile(m)},bleRestart:async()=>{ie!=null&&ie.connected&&await ie.restart()},bleRestartAndReconnect:async(m="control")=>{const{active:g}=l();if(!(ie!=null&&ie.connected)||!g)return!1;const b={deviceID:g.deviceID,deviceName:g.deviceName,ownerID:g.ownerID,deviceIcon:g.icon,canOthersConnect:g.canOthersConnect,canOthersEdit:g.canOthersEdit,canOthersEditCode:g.canOthersEditCode,isOwnedByMe:g.isOwnedByMe,ownerName:g.ownerName};Wr=!0,o("info","Genstarter Pico og forsøger automatisk genforbindelse...");try{await ie.restart()}catch{}i({progress:{value:15,label:"Venter på Pico genstart..."},connecting:{name:b.deviceName,icon:b.deviceIcon}});for(let w=0;w<12&&(ie!=null&&ie.connected);w+=1)await Dm(250);ie!=null&&ie.connected||(Wr=!1);for(let w=1;w<=8;w+=1){await Dm(w===1?1200:850);try{const T=(await jh()).find(N=>N.id===b.deviceID);if(!T){i({progress:{value:Math.min(88,20+w*8),label:"Venter på browser-tilladelse..."}});continue}if(i({progress:{value:Math.min(92,24+w*8),label:`Genforbinder (${w}/8)...`}}),!await l().connectToDevice(T,b))continue;return m==="ide"&&i(N=>({screen:"ide",picoIdeOrigin:"control",active:N.active,layout:N.layout,sliderValues:N.sliderValues,toggleValues:N.toggleValues,radarPings:N.radarPings,textValues:N.textValues,plotSeries:N.plotSeries,editMode:!1,sideMenuOpen:!1,menuPage:null})),s("Pico genforbundet."),!0}catch(k){o("warning",k instanceof Error?k.message:"Genforbindelse mislykkedes.")}}return s("Kunne ikke genforbinde automatisk. Vælg Picoen igen."),Wr=!1,i({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},plotSeries:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:b}),!1},reconnectLostDevice:async()=>{var g;const m=l().connectionLost;if(m){i({connectionLost:null});try{if((g=navigator.bluetooth)!=null&&g.getDevices){const w=(await navigator.bluetooth.getDevices()).find(k=>k.id===m.deviceID);if(w&&await l().connectToDevice(w,m))return}}catch{}o("info",`Genforbind: åbner enhedsvælger for ${m.deviceName}.`),await l().findDevice(m)}},dismissConnectionLost:()=>i({connectionLost:null}),sendButton:(m,g)=>ie==null?void 0:ie.enqueueButton(m,g),sendSlider:(m,g)=>{i(b=>({sliderValues:{...b.sliderValues,[m]:g}})),ie==null||ie.enqueueSlider(m,g)},sendToggle:(m,g)=>{i(b=>({toggleValues:{...b.toggleValues,[m]:g}})),ie==null||ie.enqueueToggle(m,g)},sendJoystick:(m,g,b)=>ie==null?void 0:ie.enqueueJoystick(m,g,b),sendDpad:(m,g,b)=>ie==null?void 0:ie.enqueueDpad(m,g,b),saveLayout:async m=>{if(ie)try{ie.setBusy(!0),await ie.saveLayout(m),i({layout:m,editMode:!1})}catch(g){o("error",g instanceof Error?g.message:"Kunne ikke gemme layout.")}finally{ie.setBusy(!1)}},setEditMode:m=>i({editMode:m,sideMenuOpen:!1,menuPage:null}),setDashboardPage:m=>i({dashboardPage:m}),toggleSideMenu:m=>i(g=>({sideMenuOpen:m??!g.sideMenuOpen})),toggleDebugger:m=>i(g=>({debuggerOpen:m??!g.debuggerOpen,sideMenuOpen:!1,menuPage:null})),openMenuPage:m=>i({menuPage:m,sideMenuOpen:!1}),closeMenuPage:()=>i({menuPage:null}),clearLogs:()=>i({logs:[]}),log:(m,g)=>o(m,g),askConfirm:m=>i({confirmDialog:m}),closeConfirm:()=>i({confirmDialog:null}),showToast:m=>s(m),dismissToast:()=>{fs&&clearTimeout(fs),i({toast:null})}}}),Fd="PKP-EJER";function vg(i){var s;const l=i.userID.toLowerCase(),o=((s=l.match(/.{1,4}/g))==null?void 0:s.join("-"))??l;return`${Fd}-${o}-${Ch(l)}`}function bg(i,l="Ejer"){const o=i.trim().toUpperCase().replace(/\s+/g,"-");if(!o.startsWith(`${Fd}-`))return null;const s=o.slice(Fd.length+1).split("-").filter(Boolean),d=s.pop()??"",p=s.join("").toLowerCase();return!/^[a-f0-9]{32}$/.test(p)||d!==Ch(p)?null:{userID:p,username:l.trim()||"Ejer"}}function Ch(i){let l=2166136261;for(const o of i.toLowerCase())l^=o.charCodeAt(0),l=Math.imul(l,16777619)>>>0;return(l%65536).toString(16).toUpperCase().padStart(4,"0")}const yg=1850,xg=450;function wg(){const i=ae(s=>s.splashTarget),l=ae(s=>s.finishSplash),o=i?"splash-screen-animation splash-ready":"splash-pending";return A.useEffect(()=>{if(!i)return;const d=window.matchMedia("(prefers-reduced-motion: reduce)").matches?xg:yg,p=window.setTimeout(l,d);return()=>window.clearTimeout(p)},[l,i]),u.jsxs("div",{className:`screen splash-screen ${o}`,"aria-label":"Teknologiskolen starter",children:[u.jsx("div",{className:"splash-white-cover"}),u.jsx("div",{className:"splash-red-field"}),u.jsx("div",{className:"splash-brand","aria-hidden":"true",children:u.jsx("div",{className:"splash-mark splash-logo-shell",children:u.jsx("img",{className:"splash-logo",src:fg,alt:""})})}),u.jsx("span",{className:"sr-only",children:"Teknologiskolen"})]})}function Lm(){const i=ae(d=>d.createUser),[l,o]=A.useState(""),s=l.length>0;return u.jsxs("div",{className:"screen intro",children:[u.jsxs("div",{className:"intro-header",children:[u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"}),u.jsx("img",{className:"intro-header-image",src:mg,alt:"Teknologiskolen"}),u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"})]}),u.jsxs("div",{className:"intro-body",children:[u.jsx("p",{children:"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Find selv på et navn, du vil vises som i appen. Det er ikke et login, og navnet gemmes kun i denne browser."}),u.jsxs("div",{className:`field ${s?"filled":""}`,children:[u.jsx("input",{id:"username",value:l,onChange:d=>o(d.target.value),maxLength:32,autoComplete:"off","aria-label":"Brugernavn"}),u.jsx("label",{htmlFor:"username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!s,onClick:()=>i(l),children:"Fortsæt"})]}),u.jsx("span",{className:"version",children:xs})]})}function of({title:i,onMenu:l}){return u.jsx("header",{className:"topbar",children:u.jsxs("div",{className:"topbar-inner",children:[u.jsx("h1",{children:i}),u.jsx("button",{className:"iconbtn",type:"button",onClick:l,"aria-label":"Menu",children:u.jsx(Dt,{name:"menu"})})]})})}var kg=Th();function qt({title:i,onClose:l,children:o,closeVariant:s="plain"}){const d=s==="circle",p=A.useRef(!1);return kg.createPortal(u.jsx("div",{className:"modal-root",onPointerDown:_=>{p.current=_.target===_.currentTarget},onClick:_=>{_.target===_.currentTarget&&p.current&&l(),p.current=!1},children:u.jsxs("div",{className:"modal",onClick:_=>_.stopPropagation(),children:[u.jsxs("div",{className:"modal-head",children:[u.jsx("h3",{children:i}),u.jsx("button",{className:`iconbtn ${d?"modal-close-circle":""}`,type:"button",onClick:l,"aria-label":"Luk",children:u.jsx(Dt,{name:d?"delete":"close",size:d?30:24})})]}),u.jsx("div",{className:"modal-body",children:o})]})}),document.body)}const cf="https://api.iconify.design",Sg=["tabler","lucide","ph","material-symbols","solar","mingcute","ri","mdi"],Dh="pkp.iconcache.";function Eg(i){const[l,...o]=i.split(":");return`${cf}/${l}/${encodeURIComponent(o.join(":"))}.svg`}function Oh(i){try{return localStorage.getItem(Dh+i)}catch{return null}}function Lh(i,l){try{localStorage.setItem(Dh+i,l)}catch{}}function Tg(i){return i.replace(/\s(width|height)="[^"]*"/g,"").trim()}async function Bh(i){const l=Oh(i);if(l)return l;const[o,...s]=i.split(":"),d=s.join(":");if(!o||!d)return null;try{const p=await fetch(`${cf}/${o}/${encodeURIComponent(d)}.svg`);if(!p.ok)return null;const _=await p.text();return _.startsWith("<svg")?Tg(_):null}catch{return null}}async function zh(i,l=120){var _;const o=i.trim();if(!o)return{icons:[],total:0};const s=`${cf}/search?query=${encodeURIComponent(o)}&limit=${l}&prefixes=${Sg.join(",")}`,d=await fetch(s);if(!d.ok)throw new Error(`Iconify search failed (${d.status})`);const p=await d.json();return{icons:p.icons??[],total:p.total??((_=p.icons)==null?void 0:_.length)??0}}const Mg=["robot","sensor","motor","raspberry pi","led","battery","bluetooth","car","rocket","gamepad","gauge","radar","compass","temperature","wifi","antenna","gear","bolt","lightbulb","joystick","drone","circuit","chip","servo","wheel","magnet","speaker","camera","flask"];function Bm(i){const l=[...i];for(let o=l.length-1;o>0;o--){const s=Math.floor(Math.random()*(o+1));[l[o],l[s]]=[l[s],l[o]]}return l}const jg=8,Ng=20;async function Rg(i=120){const l=Bm(Mg).slice(0,jg),o=await Promise.all(l.map(_=>zh(_,Ng).catch(()=>({icons:[],total:0})))),s=new Set,d=[];for(const _ of o)for(const m of _.icons)s.has(m)||(s.add(m),d.push(m));const p=Bm(d).slice(0,i);return{icons:p,total:p.length}}const Gd=ks(sf(Bl)??"");function zm(i){if(!i)return Gd;const l=sf(i);if(l)return ks(l);const o=Oh(i);return o?ks(o):null}function Es({slug:i,className:l,alt:o=""}){const[s,d]=A.useState(()=>zm(i)??Gd);return A.useEffect(()=>{const p=zm(i);if(p){d(p);return}if(d(Gd),!i||typeof navigator<"u"&&!navigator.onLine)return;let _=!1;return Bh(i).then(m=>{_||!m||(Lh(i,m),d(ks(m)))}),()=>{_=!0}},[i]),u.jsx("img",{className:l,src:s,alt:o})}function Um(){const i=ae(T=>T.savedDevices),l=ae(T=>T.toggleSideMenu),o=ae(T=>T.findDevice),s=ae(T=>T.removeSavedDevice),d=ae(T=>T.askConfirm),p=ae(T=>T.dashboardPage),_=ae(T=>T.setDashboardPage),m=Og(),[g,b]=A.useState(null),w=yc(),k=i.filter(T=>p==="mine"?T.isOwnedByMe:!T.isOwnedByMe).sort(Dg);return u.jsxs("div",{className:"screen dashboard-screen",children:[u.jsx(of,{title:"Hovedmenu",onMenu:()=>l()}),u.jsxs("div",{className:"content dash-content",children:[!w&&u.jsx("div",{className:"notice",children:"Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På Android: brug Chrome."}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:p==="mine"?"active":"",onClick:()=>_("mine"),children:"Mine Enheder"}),u.jsx("button",{type:"button",className:p==="andre"?"active":"",onClick:()=>_("andre"),children:"Andre Enheder"})]}),u.jsx("div",{className:"panel panel-white device-list",children:k.length===0?u.jsx("div",{className:"device-list-empty",children:p==="mine"?"Ingen enheder endnu. Tryk på + for at finde en enhed.":"Ingen andre enheder gemt."}):k.map(T=>u.jsx(Ag,{device:T,disabled:!w,onConnect:()=>m(T),onSettings:()=>b(T)},T.deviceID))})]}),u.jsx("button",{className:"fab",type:"button",onClick:()=>o(),disabled:!w,"aria-label":"Find enhed",children:u.jsx(Dt,{name:"plus",size:30})}),u.jsx("span",{className:"version",children:xs}),g&&u.jsx(qt,{title:"Enhedsindstillinger",onClose:()=>b(null),children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("div",{className:"saved-device-head",children:[u.jsx(Es,{slug:g.deviceIcon}),u.jsx("strong",{children:g.deviceName})]}),u.jsx(ms,{label:"Gemte indstillinger",value:"Denne browser"}),u.jsx(ms,{label:"Ejer",value:Cg(g)}),u.jsx(ms,{label:"Offentlig",value:g.canOthersConnect?"Ja":"Nej"}),u.jsx(ms,{label:"Andre må redigere layout",value:g.canOthersEdit?"Ja":"Nej"}),u.jsx(ms,{label:"Andre må redigere kode",value:g.canOthersEditCode?"Ja":"Nej"}),u.jsx("div",{className:"notice",children:"Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!w,onClick:()=>{const T=g;b(null),m(T)},children:"Forbind"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>d({title:"Glem enhed",message:`Vil du fjerne ${g.deviceName} fra gemte enheder?`,confirmLabel:"Glem",onConfirm:()=>{s(g.deviceID),b(null)}}),children:"Glem enhed"})]})})]})}function Ag({device:i,disabled:l,onConnect:o,onSettings:s}){return u.jsxs("div",{className:"device-tile-wrap",children:[u.jsxs("button",{className:"device-tile",type:"button",onClick:o,disabled:l,children:[u.jsx(Es,{className:"device-tile-icon",slug:i.deviceIcon}),u.jsx("span",{className:"device-tile-name",children:i.deviceName})]}),u.jsx("button",{className:"device-tile-del",type:"button",onClick:s,"aria-label":"Enhedsindstillinger",children:u.jsx(Dt,{name:"settings"})})]})}function ms({label:i,value:l}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:i}),u.jsx("strong",{children:l})]})}function Cg(i){var l;return i.isOwnedByMe?"Dig":((l=i.ownerName)==null?void 0:l.trim())||"Anden bruger"}function Dg(i,l){return i.deviceName.localeCompare(l.deviceName,"da",{sensitivity:"base"})}function Og(){const i=ae(s=>s.connectToDevice),l=ae(s=>s.findDevice),o=ae(s=>s.log);return async s=>{const p=(await jh()).find(_=>_.id===s.deviceID);p&&await i(p,s)||(o("info",`Genforbind: åbner enhedsvælger for ${s.deviceName}.`),await l(s))}}function Lg(){const i=ae(o=>o.connecting),l=ae(o=>o.progress);return u.jsxs("div",{className:"screen connection",children:[u.jsx("div",{className:"device-icon-pick",children:u.jsx(Es,{slug:i==null?void 0:i.icon})}),u.jsxs("h2",{style:{margin:0,color:"var(--red)"},children:["Forbinder til ",(i==null?void 0:i.name)??"enhed"]}),u.jsx("div",{className:"spinner"}),u.jsxs("div",{style:{width:"100%"},children:[u.jsx("div",{className:"progress-track",children:u.jsx("div",{className:"progress-fill",style:{width:`${l.value}%`}})}),u.jsx("p",{style:{color:"var(--muted)",fontWeight:600,marginTop:12},children:l.label})]})]})}const qm=24;function Bg(){const[i,l]=A.useState(1),o=A.useRef(null),s=A.useCallback(d=>{var m;if((m=o.current)==null||m.disconnect(),o.current=null,!d)return;const p=()=>{const g=getComputedStyle(d).gridTemplateColumns,b=g&&g!=="none"?g.split(" ").filter(Boolean).length:1;l(w=>w===b?w:Math.max(1,b))};p();const _=new ResizeObserver(p);_.observe(d),o.current=_},[]);return A.useEffect(()=>()=>{var d;return(d=o.current)==null?void 0:d.disconnect()},[]),[i,s]}function zg(i,l,o){const s=Math.min(Math.max(o,1),l);let d=i-Math.floor(s/2);return d=Math.max(0,Math.min(d,l-s)),Array.from({length:s},(p,_)=>d+_)}function Uh({selected:i,onSelect:l,onClose:o}){const[s,d]=A.useState("library"),[p,_]=Bg(),m=A.useMemo(()=>p*Math.max(1,Math.round(qm/p)),[p]),[g,b]=A.useState(()=>{const ue=i?cc.findIndex(B=>B.slug===i):-1;return ue>=0?Math.floor(ue/qm):0}),[w,k]=A.useState(""),[T,U]=A.useState([]),[N,G]=A.useState(0),[I,V]=A.useState(!1),[X,P]=A.useState(null),[re,ve]=A.useState(!1),[ce,W]=A.useState(typeof navigator>"u"?!0:navigator.onLine);A.useEffect(()=>{const ue=()=>W(navigator.onLine);return window.addEventListener("online",ue),window.addEventListener("offline",ue),()=>{window.removeEventListener("online",ue),window.removeEventListener("offline",ue)}},[]);function Z(ue){l(ue),o(),sf(ue)||Bh(ue).then(B=>{B&&Lh(ue,B)})}async function we(ue){if(!ce){P("Du er offline. Vælg fra «Bibliotek», eller find flere ikoner når du er online.");return}V(!0),P(null),ve(!0);try{const B=ue==="random"?await Rg():await zh(w);U(B.icons),G(0),B.icons.length===0&&P("Ingen ikoner fundet. Prøv et andet ord.")}catch{P("Kunne ikke hente ikoner. Tjek din internetforbindelse."),U([])}finally{V(!1)}}const Ee=Math.ceil(cc.length/m),ze=A.useMemo(()=>cc.slice(g*m,g*m+m),[g,m]),J=Math.ceil(T.length/m),Ne=A.useMemo(()=>T.slice(N*m,N*m+m),[T,N,m]),je=ce&&!I&&!X&&Ne.length>0;return A.useEffect(()=>{b(ue=>Math.min(ue,Math.max(0,Ee-1)))},[Ee]),A.useEffect(()=>{G(ue=>Math.min(ue,Math.max(0,J-1)))},[J]),u.jsx(qt,{title:"Vælg et ikon",onClose:o,children:u.jsxs("div",{className:"icon-picker",children:[u.jsxs("div",{className:"icon-picker-head",children:[u.jsxs("div",{className:"icon-tabs",role:"tablist",children:[u.jsx("button",{type:"button",role:"tab","aria-selected":s==="library",className:s==="library"?"active":"",onClick:()=>d("library"),children:"Bibliotek"}),u.jsx("button",{type:"button",role:"tab","aria-selected":s==="search",className:s==="search"?"active":"",onClick:()=>d("search"),children:"Søg online"})]}),s==="library"?u.jsx("p",{className:"icon-picker-caption",children:"Tryk på et ikon for at vælge det."}):u.jsxs("form",{className:"icon-search",onSubmit:ue=>{ue.preventDefault(),we("query")},children:[u.jsx("input",{type:"search",value:w,placeholder:"Søg (fx robot, bil, sensor)",onChange:ue=>k(ue.target.value),disabled:!ce,"aria-label":"Søg efter ikon",autoFocus:!0}),u.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!ce||I,children:"Søg"}),u.jsx("button",{type:"button",className:"btn icon-dice",onClick:()=>void we("random"),disabled:!ce||I,title:"Vis tilfældige ikoner","aria-label":"Vis tilfældige ikoner",children:u.jsx(Vm,{})})]})]}),u.jsxs("div",{className:"icon-picker-body",children:[s==="library"&&u.jsx("div",{className:"icon-grid",ref:_,children:ze.map(ue=>u.jsx(Hm,{src:ks(ue.svg),label:ue.label,selected:ue.slug===i,onClick:()=>Z(ue.slug)},ue.slug))}),s==="search"&&u.jsxs(u.Fragment,{children:[!ce&&u.jsx("p",{className:"icon-hint",children:"Du er offline. Vælg fra «Bibliotek», eller find flere ikoner når du er online."}),ce&&I&&u.jsx("p",{className:"icon-hint",children:"Henter ikoner…"}),ce&&!I&&X&&u.jsx("p",{className:"icon-hint icon-hint-error",children:X}),ce&&!I&&!X&&!re&&u.jsxs("p",{className:"icon-hint",children:["Skriv et ord og tryk ",u.jsx("strong",{children:"Søg"})," - eller tryk"," ",u.jsx("span",{className:"icon-hint-dice","aria-hidden":"true",children:u.jsx(Vm,{})})," ","for tilfældige ikoner."]}),je&&u.jsx("div",{className:"icon-grid",ref:_,children:Ne.map(ue=>u.jsx(Hm,{src:Eg(ue),label:ue,selected:ue===i,onClick:()=>Z(ue)},ue))})]})]}),u.jsxs("div",{className:"icon-picker-foot",children:[s==="library"&&u.jsx(Pm,{current:g,total:Ee,onGo:b}),s==="search"&&je&&u.jsx(Pm,{current:N,total:J,onGo:G})]})]})})}function Hm({src:i,label:l,selected:o,onClick:s}){return u.jsxs("button",{type:"button",className:`icon-tile ${o?"selected":""}`,onClick:s,"aria-label":l,"aria-pressed":o,title:l,children:[u.jsx("img",{src:i,alt:"",loading:"lazy"}),o&&u.jsx("span",{className:"icon-tile-check","aria-hidden":"true",children:"✓"})]})}function Vm(){return u.jsxs("svg",{className:"dice-glyph",viewBox:"0 0 24 24",width:22,height:22,"aria-hidden":"true",fill:"currentColor",children:[u.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"4",ry:"4",fill:"none",stroke:"currentColor",strokeWidth:"2"}),u.jsx("circle",{cx:"8",cy:"8",r:"1.7"}),u.jsx("circle",{cx:"16",cy:"8",r:"1.7"}),u.jsx("circle",{cx:"12",cy:"12",r:"1.7"}),u.jsx("circle",{cx:"8",cy:"16",r:"1.7"}),u.jsx("circle",{cx:"16",cy:"16",r:"1.7"})]})}const Im=48;function Pm({current:i,total:l,onGo:o}){const s=A.useRef(null),[d,p]=A.useState(7);return A.useLayoutEffect(()=>{const _=s.current;if(!_)return;const m=()=>{const b=_.clientWidth-2*Im;p(Math.max(1,Math.floor(b/Im)))};m();const g=new ResizeObserver(m);return g.observe(_),()=>g.disconnect()},[]),l<=1?null:u.jsxs("div",{className:"icon-pager",ref:s,children:[u.jsx("button",{type:"button",className:"icon-pager-arrow",onClick:()=>o(Math.max(0,i-1)),disabled:i===0,"aria-label":"Forrige side",children:u.jsx(Dt,{name:"back",size:20})}),zg(i,l,d).map(_=>u.jsx("button",{type:"button",className:`icon-pager-num ${_===i?"active":""}`,onClick:()=>o(_),"aria-label":`Side ${_+1}`,"aria-current":_===i?"page":void 0,children:_+1},_)),u.jsx("button",{type:"button",className:"icon-pager-arrow",onClick:()=>o(Math.min(l-1,i+1)),disabled:i===l-1,"aria-label":"Næste side",children:u.jsx(Dt,{name:"back",size:20,className:"flip-x"})})]})}function Ug(){const i=ae(re=>re.finishCreate),l=ae(re=>re.cancelCreate),[o,s]=A.useState(Bl),[d,p]=A.useState(!1),[_,m]=A.useState(!1),[g,b]=A.useState(!1),[w,k]=A.useState(!1),[T,U]=A.useState(si),[N,G]=A.useState(ws),[I,V]=A.useState(!1),X=re=>Number.isFinite(re)?Math.max(ai,Math.min(ii,Math.round(re))):si;async function P(){V(!0),await i(o,_,_&&g,_&&w,X(T),X(N))}return u.jsxs("div",{className:"screen",children:[u.jsx("header",{className:"topbar",children:u.jsx("h1",{children:"Opret Enhed"})}),u.jsxs("div",{className:"content create-body",children:[u.jsxs("button",{type:"button",className:"device-icon-pick",onClick:()=>p(!0),"aria-label":"Vælg ikon",children:[u.jsx(Es,{slug:o}),u.jsx("span",{className:"badge",children:u.jsx(Dt,{name:"plus",size:22})})]}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:_?"":"active",onClick:()=>m(!1),children:"Privat"}),u.jsx("button",{type:"button",className:_?"active":"",onClick:()=>m(!0),children:"Offentlig"})]}),_&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:g?"":"active",onClick:()=>b(!1),children:"Nej"}),u.jsx("button",{type:"button",className:g?"active":"",onClick:()=>b(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:w?"":"active",onClick:()=>k(!1),children:"Nej"}),u.jsx("button",{type:"button",className:w?"active":"",onClick:()=>k(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter (kolonner × rækker)"}),u.jsxs("div",{className:"row",style:{width:"100%"},children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"cols",children:"Kolonner"}),u.jsx("input",{id:"cols",type:"number",min:ai,max:ii,value:Number.isNaN(T)?"":T,onChange:re=>U(parseInt(re.target.value,10)),onBlur:()=>U(X(T))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"rows",children:"Rækker"}),u.jsx("input",{id:"rows",type:"number",min:ai,max:ii,value:Number.isNaN(N)?"":N,onChange:re=>G(parseInt(re.target.value,10)),onBlur:()=>G(X(N))})]})]}),u.jsxs("div",{className:"row",style:{marginTop:"auto",width:"100%"},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>l(),disabled:I,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:P,disabled:I,children:I?"Opretter...":"Opret"})]})]}),d&&u.jsx(Uh,{selected:o,onSelect:s,onClose:()=>p(!1)}),u.jsx("span",{className:"version",children:xs})]})}const oi=8;function uc(i){return Math.max(5,Math.min(22,i))}function qg(i,l,o){const s=Math.max(1,i.length),d=(l-oi*2)/(s*.58),p=(o-oi*2)*.48;return uc(Math.min(d,p))}function pa(i,l,o){switch(o){case 90:return{x:-l,y:i};case 180:return{x:-i,y:-l};case 270:return{x:l,y:-i};default:return{x:i,y:l}}}function pc(i){return(360-i)%360}function Hg(i,l,o,s){const d=s===90||s===270;return qg(i,d?o:l,d?l:o)}function gc({name:i,width:l,height:o,rotation:s}){return u.jsx("span",{style:{display:"inline-block",fontWeight:800,fontSize:Hg(i,l,o,s),transform:s?`rotate(${s}deg)`:void 0,whiteSpace:s===90||s===270?"nowrap":void 0},children:i})}function Vg(i,l,o,s,d){const p=i.trim().split(/\s+/).filter(Boolean),_=Math.max(1,i.replace(/\s+/g,"").length+Math.max(0,p.length-1)*1.6),m=d?uc(Math.min(l/4.6,o/4.6,12)):0,g=d?m+oi:oi;if(s){const k=Math.max(1,o-g*2);return{fontSize:uc(Math.min(l*.48,k/(_*1.04))),endFontSize:m,centerInset:d?{top:g,bottom:g}:{}}}const b=Math.max(1,l-g*4.2);return{fontSize:uc(Math.min(o*.42,b/(_*.58))),endFontSize:m,centerInset:d?{left:g*2.1,right:g*2.1}:{}}}function Ig({control:i,rect:l,disabled:o,latestValue:s,toggleValue:d,radarPings:p=[],textValue:_,plotPoints:m=[],onButton:g,onSlider:b,onToggle:w,onJoystick:k,onDpad:T}){const U=A.useRef(!1),[N,G]=A.useState(!1),I={left:l.cx,top:l.cy,width:l.width,height:l.height};if(i.type==="button"){const V=()=>{o||!U.current||(U.current=!1,G(!1),g(i.name,!1))};return u.jsx("div",{className:"control",style:I,children:u.jsx("button",{className:`control-button ${N?"pressed":""}`,type:"button",disabled:o,style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},onPointerDown:X=>{var P,re;o||(X.preventDefault(),(re=(P=X.currentTarget).setPointerCapture)==null||re.call(P,X.pointerId),U.current=!0,G(!0),g(i.name,!0))},onPointerUp:X=>{var P,re;X.preventDefault(),(re=(P=X.currentTarget).releasePointerCapture)==null||re.call(P,X.pointerId),V()},onPointerCancel:V,onLostPointerCapture:V,children:u.jsx(gc,{name:i.name,width:l.width,height:l.height,rotation:i.rotation})})})}if(i.type==="toggle"){const V=!!d;return u.jsx("div",{className:"control",style:I,children:u.jsx("button",{className:`control-toggle ${V?"on":""}`,type:"button",disabled:o,"aria-pressed":V,style:{width:"100%",height:"100%"},onPointerDown:X=>{o||(X.preventDefault(),w(i.name,!V))},children:u.jsx(gc,{name:i.name,width:l.width,height:l.height,rotation:i.rotation})})})}return i.type==="radar"?u.jsx("div",{className:"control",style:I,children:u.jsx(Hh,{control:i,pings:p,width:l.width,height:l.height})}):i.type==="text"?u.jsx("div",{className:"control",style:I,children:u.jsx(qh,{message:_??i.name,width:l.width,height:l.height,rotation:i.rotation})}):i.type==="plot"?u.jsx("div",{className:"control",style:I,children:u.jsx(Ih,{control:i,points:m,width:l.width,height:l.height})}):i.type==="joystick"?u.jsx("div",{className:"control",style:I,children:u.jsx(o_,{control:i,disabled:o,onJoystick:k,width:l.width,height:l.height})}):i.type==="dpad"?u.jsx("div",{className:"control",style:I,children:u.jsx(g_,{control:i,disabled:o,onDpad:T})}):u.jsx("div",{className:"control",style:I,children:u.jsx(s_,{control:i,disabled:o,latestValue:s,onSlider:b,width:l.width,height:l.height})})}function Pg(i,l,o){const d=(i.trim()||" ").split(`
`),p=d.reduce((T,U)=>U.split(/\s+/).filter(Boolean).reduce((G,I)=>Math.max(G,I.length),T),1),_=Math.max(1,Math.floor(p*1.9)),m=Math.max(d.length,d.reduce((T,U)=>T+Math.max(1,Math.ceil(Math.max(1,U.trim().length)/_)),0)),g=Math.max(1,l-oi*3),b=Math.max(1,o-oi*3),w=g/(p*.58),k=b/(m*1.16);return Math.max(7,Math.min(24,w,k))}function qh({message:i,width:l,height:o,rotation:s=0}){const d=i.trim()||"...",p=s===90||s===270,_=Pg(d,p?o:l,p?l:o);return u.jsx("div",{className:"control-text",style:{width:"100%",height:"100%",fontSize:_},children:u.jsx("span",{style:{transform:s?`rotate(${s}deg)`:void 0},children:d})})}function Hh({control:i,pings:l,width:o,height:s,preview:d=!1}){const[,p]=A.useState(0),_=Math.max(120,i.radarFadeMs??1200),m=i.radarMinAngle??0,g=i.radarMaxAngle??180,b=rn(m),w=rn(g),k=Math.abs(g-m)>=360||b===w&&m!==g,T=Math.max(1,i.radarMaxDistance??200),U=Date.now(),N=l[l.length-1],G=i.rotation,I=rn(b+G),V=rn(w+G),X=Jg(b,w),P=((N==null?void 0:N.angle)??X)+G,re=d?[{id:"preview",angle:X,distance:T*.62,createdAt:U}]:l.filter(me=>U-me.createdAt<=_),ve=!k,ce=Math.max(8,Math.min(12,Math.min(o,s)*.16)),W=Math.max(7,ce*.85),Z=0,we=0,Ee=1,ze=Kg(k,I,V,G,T),J=k?{x:-1.12,y:-1.12,width:2.24,height:2.24}:Qg(I,V,ze.map(me=>me.point)),Ne=k?"":Fg(Z,we,Ee,I,V),je=Ym(m),ue=Ym(g),B=ve?Zg(I,V,J,o,s,je,ue,ce):null,ne=ze.map(me=>{const xe=Vh(me.point,J,o,s);return{key:me.key,value:me.value,x:xe.x,y:xe.y}});A.useEffect(()=>{if(d||l.length===0)return;const me=window.setInterval(()=>p(xe=>xe+1),120);return()=>window.clearInterval(me)},[_,l.length,d]);const pe=An(Z,we,Ee,P);return u.jsxs("div",{className:"control-radar",style:{width:"100%",height:"100%"},children:[u.jsxs("svg",{width:o,height:s,viewBox:`${J.x} ${J.y} ${J.width} ${J.height}`,preserveAspectRatio:"none","aria-hidden":"true",children:[k?u.jsx("circle",{className:"radar-sector-fill",cx:Z,cy:we,r:Ee}):u.jsx("path",{className:"radar-sector-fill",d:Ne}),[.25,.5,.75,1].map(me=>k?u.jsx("circle",{className:"radar-ring",cx:Z,cy:we,r:Ee*me},me):u.jsx("path",{className:"radar-ring",d:Gg(Z,we,Ee*me,I,V)},me)),!k&&u.jsx(Fm,{cx:Z,cy:we,radius:Ee,angle:I}),!k&&u.jsx(Fm,{cx:Z,cy:we,radius:Ee,angle:V}),u.jsx("line",{className:"radar-sweep",x1:Z,y1:we,x2:pe.x,y2:pe.y}),re.map(me=>{const xe=d?0:U-me.createdAt,E=Math.max(0,1-xe/_),z=Math.max(0,Math.min(T,me.distance)),te=An(Z,we,Ee*(z/T),me.angle+G);return u.jsx("circle",{className:"radar-ping",cx:te.x,cy:te.y,r:Math.max(.025,Math.min(J.width,J.height)*.025),opacity:E},me.id)})]}),ve&&B&&u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"radar-angle-label",style:{left:B.min.x,top:B.min.y,fontSize:ce},children:je}),u.jsx("span",{className:"radar-angle-label",style:{left:B.max.x,top:B.max.y,fontSize:ce},children:ue})]}),ne.map(me=>u.jsx("span",{className:"radar-range-label",style:{left:me.x,top:me.y,fontSize:W},children:me.value},me.key))]})}function Fm({cx:i,cy:l,radius:o,angle:s}){const d=An(i,l,o,s);return u.jsx("line",{className:"radar-boundary",x1:i,y1:l,x2:d.x,y2:d.y})}function An(i,l,o,s){const d=(rn(s)-90)*Math.PI/180;return{x:i+Math.cos(d)*o,y:l+Math.sin(d)*o}}function Fg(i,l,o,s,d){const p=An(i,l,o,s),_=An(i,l,o,d),m=xc(s,d)>180?1:0;return`M ${i} ${l} L ${p.x} ${p.y} A ${o} ${o} 0 ${m} 1 ${_.x} ${_.y} Z`}function Gg(i,l,o,s,d){const p=An(i,l,o,s),_=An(i,l,o,d),m=xc(s,d)>180?1:0;return`M ${p.x} ${p.y} A ${o} ${o} 0 ${m} 1 ${_.x} ${_.y}`}function xc(i,l){const o=rn(i),s=rn(l),d=s>=o?s-o:360-o+s;return d===0?360:d}const nc=[.25,.5,.75,1],$g=.1,Yg=.85,Xg=55;function Kg(i,l,o,s,d){const p=(g,b,w)=>({key:`${g}-${b}`,value:Math.round(d*b),point:An(0,0,b,w)});if(i){const g=rn(180+s);return nc.map(b=>p("full",b,g))}const _=360-xc(l,o);if(_<Xg){const g=rn(o+_/2);return nc.map(b=>p("mid",b,g))}const m=(g,b,w)=>{const k=Math.asin(Math.min(Yg,$g/b))*180/Math.PI;return rn(g+w*k)};return[...nc.map(g=>p("min",g,m(l,g,-1))),...nc.map(g=>p("max",g,m(o,g,1)))]}function Qg(i,l,o=[]){const s=[{x:0,y:0},An(0,0,1,i),An(0,0,1,l),...o];for(const k of[0,90,180,270])Wg(k,i,l)&&s.push(An(0,0,1,k));const d=Math.min(...s.map(k=>k.x)),p=Math.max(...s.map(k=>k.x)),_=Math.min(...s.map(k=>k.y)),m=Math.max(...s.map(k=>k.y)),g=Math.max(.1,p-d),b=Math.max(.1,m-_),w=Math.max(g,b)*.24;return{x:d-w,y:_-w,width:g+w*2,height:b+w*2}}function Wg(i,l,o){const s=rn(l),d=rn(i),p=xc(l,o),_=rn(d-s);return _>=0&&_<=p}function Zg(i,l,o,s,d,p,_,m){const b=An(0,0,1.1,i),w=An(0,0,1.1,l);return{min:Gm(b,o,s,d,p,m),max:Gm(w,o,s,d,_,m)}}function Vh(i,l,o,s){return{x:(i.x-l.x)/l.width*o,y:(i.y-l.y)/l.height*s}}function Gm(i,l,o,s,d,p){const _=Vh(i,l,o,s),m=Math.max(10,d.length*p*.62),g=p,b=7;return{x:$m(_.x,m/2+b,Math.max(m/2+b,o-m/2-b)),y:$m(_.y,g/2+b,Math.max(g/2+b,s-g/2-b))}}function $m(i,l,o){return Math.max(l,Math.min(o,i))}function Ym(i){return`${Math.round(i)}`}function rn(i){return Number.isFinite(i)?(i%360+360)%360:0}function Jg(i,l){const o=rn(i),s=rn(l),d=s>=o?s-o:360-o+s;return rn(o+d/2)}function rc(i){return Number.isInteger(i)?String(i):i.toFixed(1)}function $d(i,l){return Math.max(l,i.length*l*.58)}function Xm(i,l,o){if($d(i,l)<=o)return i;const s=Math.max(1,Math.floor(o/Math.max(1,l*.58))-3);return s<=1?i.slice(0,1):`${i.slice(0,s)}...`}function Km(i,l){return i.label?i.label:l}const e_=3;function lc(i){return i.split(`
`).map(l=>l.trim()).slice(0,e_)}function t_(i){if(i<=0)return[];if(i<=5)return Array.from({length:i},(o,s)=>s);const l=new Set([0,i-1]);return l.add(Math.round((i-1)/2)),i>=10&&(l.add(Math.round((i-1)/4)),l.add(Math.round((i-1)*3/4))),[...l].sort((o,s)=>o-s)}function n_(i,l){return i<=0||l==="none"?[]:l==="labels"?Array.from({length:i},(o,s)=>s):i===1?[0]:[0,i-1]}function r_(i,l){const o=Date.now();return Array.from({length:i},(s,d)=>{const p=d/Math.max(1,i-1),_=l==="bar"?.15+.7*Math.abs(Math.sin(p*Math.PI*1.4)):l==="dot"?.5+.35*Math.sin(d*2.3)*Math.cos(d*.7):.5+.4*Math.sin(p*Math.PI*2.2);return{id:`demo-${d}`,value:_,createdAt:o}})}function Ih({control:i,points:l,width:o,height:s,preview:d=!1}){const p=i.plotMin??0,_=i.plotMax??100,m=_>p?_-p:1,g=Math.max(2,i.plotHistory??30),b=i.plotStyle==="bar"?"bar":i.plotStyle==="dot"?"dot":"line",w=i.plotXAxis??"labels",k=i.plotYAxis??"range",T=Math.max(8,Math.min(45,i.plotLabelMaxPercent??24)),U=d?r_(g,b):l,[N,G]=A.useState(null),I=Math.max(1,Math.min(o,s)),V=Math.max(8,Math.min(13,I*.14)),X=Math.max(6,Math.min(10,V*.72)),P=Math.max(6,Math.min(10,V*.74)),re=Math.max(6,Math.min(16,I*.12)),ve=Math.max(3,I*.035),ce=Math.max(2,I*.02),W=Math.max(18,o*(T/100)),Z=Math.max(18,s*(T/100)),we=X*1.15,Ee=P*1.15,ze=k==="range"?[rc(p),rc(_)]:k==="labels"?U.map(he=>rc(he.value)):[],J=ze.length>0?Math.min(W,Math.max(...ze.flatMap(he=>lc(he)).map(he=>$d(he,P)))+4):0,Ne=J>0?ce+J+ve:re,je=re+V*1.45,ue=Math.max(Ne+1,o-re),B=Math.max(1,ue-Ne),ne=Math.max(1.5,Math.min(3.4,I*.045)),pe=Math.max(ne+1,Math.min(I*.09,ne*2)),me=U.length>1?Math.max(ne*2,Math.min(14,B*.045)):0,xe=Math.max(1,B-me*2),E=Math.max(1,Math.min(U.length,g)),z=U.length>E;let te=U.length;if(z&&N){const he=U.findIndex(qe=>qe.id===N);he>=0&&(te=he+1)}const le=Math.max(0,te-E),se=z?U.slice(le,te):U,H=z&&le>0,D=z&&te<U.length,oe=()=>{le<=0||G(U[te-2].id)},ye=()=>{if(te>=U.length)return;const he=te;G(he>=U.length-1?null:U[he].id)},Ue=n_(se.length,w),Le=Ue.map(he=>Km(se[he],he===se.length-1?"nu":`${he+1}`)).map(he=>lc(he)),Ce=Le.length>0?Math.max(1,...Le.map(he=>he.length)):1,Ke=w!=="labels"?1/0:b==="bar"?xe/Math.max(1,se.length):xe/Math.max(1,se.length-1);let st=Ce;for(;st>1&&st*we>Ke;)st-=1;const kt=Le.length>0?Math.min(Z,Math.max(...Le.flat().map(he=>$d(he,X)))+8):0,Ot=Math.max(3,X*.48),Zt=Math.max(4,X*.6),Cn=Math.max(Ot+Zt+X,Ot+Zt+kt+(st-1)*we),Jt=Math.max(1,s-je-Cn),Mt=je+Jt,yn=he=>{const qe=Math.max(0,Math.min(1,(he-p)/m));return je+(1-qe)*Jt},yr=he=>se.length>1?Ne+me+he/(se.length-1)*xe:Ne+B/2,dt=se.length>0?xe/se.length:xe,Kn=Math.max(1,dt*.62),lr=he=>se.length>1?Ne+me+he*dt+dt/2:Ne+B/2,zl=he=>b==="bar"?lr(he):yr(he),Jr=Math.max(1.5,I*.02),ar=se.map((he,qe)=>({x:yr(qe),y:yn(he.value)})),Ul=k==="labels"?t_(se.length):[],Ht=(he,qe,Qe)=>{const bt=lc(qe);return u.jsxs("g",{children:[u.jsx("line",{className:"plot-axis-tick",x1:Ne-Ot,y1:Qe,x2:Ne,y2:Qe}),bt.map((ot,Qn)=>{const xr=Qe+(Qn-(bt.length-1)/2)*Ee;return u.jsx("text",{className:"plot-y-axis-label",x:Ne-ve,y:xr,fontSize:P,textAnchor:"end",dominantBaseline:"middle",children:Xm(ot,P,W)},Qn)})]},he)};return u.jsxs("div",{className:"control-plot",style:{width:"100%",height:"100%"},children:[u.jsxs("svg",{width:o,height:s,viewBox:`0 0 ${o} ${s}`,"aria-hidden":"true",children:[[.25,.5,.75].map(he=>u.jsx("line",{className:"plot-grid-line",x1:Ne,y1:je+he*Jt,x2:ue,y2:je+he*Jt},he)),u.jsx("line",{className:"plot-axis-line",x1:Ne,y1:Mt,x2:ue,y2:Mt}),u.jsx("line",{className:"plot-axis-line",x1:Ne,y1:je,x2:Ne,y2:Mt}),k==="range"&&ze.map((he,qe)=>Ht(`${he}-${qe}`,he,qe===0?Mt:je)),k==="labels"&&Ul.map(he=>{const qe=se[he];return Ht(`y-${qe.id}`,rc(qe.value),yn(qe.value))}),Ue.map(he=>{const qe=se[he],Qe=zl(he),bt=Mt+Ot+Zt,ot=Km(qe,he===se.length-1?"nu":`${he+1}`),Qn=lc(ot).slice(0,st);return u.jsxs("g",{children:[u.jsx("line",{className:"plot-axis-tick",x1:Qe,y1:Mt,x2:Qe,y2:Mt+Ot}),Qn.map((xr,Wn)=>{const un=Qe+Wn*we;return u.jsx("text",{className:"plot-axis-tick-label",x:un,y:bt,fontSize:X,textAnchor:"end",dominantBaseline:"middle",transform:`rotate(-90 ${un} ${bt})`,children:Xm(xr,X,Z)},Wn)})]},`x-${qe.id}`)}),b==="bar"?se.map((he,qe)=>{const Qe=se.length>1?Ne+me+qe*dt+(dt-Kn)/2:Ne+(B-Kn)/2,bt=Math.min(yn(he.value),Mt-Jr),ot=!D&&qe===se.length-1;return u.jsx("rect",{className:`plot-bar ${ot?"latest":""}`,x:Qe,y:bt,width:Kn,height:Mt-bt},he.id)}):u.jsxs(u.Fragment,{children:[b==="line"&&ar.length>1&&u.jsx("polyline",{className:"plot-line",points:ar.map(he=>`${he.x},${he.y}`).join(" ")}),ar.map((he,qe)=>{var bt;const Qe=!D&&qe===ar.length-1;return u.jsx("circle",{className:`plot-dot ${Qe?"latest":""}`,cx:he.x,cy:he.y,r:Qe?pe:ne},(bt=se[qe])==null?void 0:bt.id)})]})]}),u.jsx("span",{className:"plot-name-label",style:{fontSize:V,left:Ne+6,maxWidth:Math.max(20,o-Ne-14-(z?40:0))},children:i.name}),z&&u.jsxs("div",{className:"plot-page-controls",children:[u.jsx("button",{type:"button",className:"plot-page-btn",disabled:!H,onClick:oe,"aria-label":`${i.name}: vis ældre data`,children:u.jsx(Dt,{name:"chevronLeft",size:12})}),u.jsx("button",{type:"button",className:"plot-page-btn",disabled:!D,onClick:ye,"aria-label":`${i.name}: vis nyere data`,children:u.jsx(Dt,{name:"chevronRight",size:12})})]})]})}function l_(i,l){if(!l)return i;const o=i.trim().split(/\s+/).filter(Boolean);return u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",lineHeight:1.02,textAlign:"center",gap:"0.42em"},children:o.map((s,d)=>u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[...s].map((p,_)=>u.jsx("span",{children:p},`${p}-${_}`))},`${s}-${d}`))})}function a_(i){const l={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},o=4;return i===0?{low:{...l,left:o,top:0,bottom:0},high:{...l,right:o,top:0,bottom:0}}:i===180?{low:{...l,right:o,top:0,bottom:0},high:{...l,left:o,top:0,bottom:0}}:i===90?{low:{...l,bottom:o,left:0,right:0},high:{...l,top:o,left:0,right:0}}:{low:{...l,top:o,left:0,right:0},high:{...l,bottom:o,left:0,right:0}}}function i_({name:i,vertical:l,rotation:o,color:s,fontSize:d,endFontSize:p,centerInset:_,lowLabel:m,highLabel:g,showEnds:b}){const w=b?a_(o):null;return u.jsxs("div",{style:{position:"absolute",inset:0,color:s},children:[u.jsx("div",{style:{position:"absolute",inset:0,..._,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:d,textAlign:"center",pointerEvents:"none"},children:l_(i,l)}),w&&u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{...w.low,fontWeight:800,fontSize:p},children:m}),u.jsx("div",{style:{...w.high,fontWeight:800,fontSize:p},children:g})]})]})}function Ph({name:i,rotation:l,width:o,height:s,value:d,showEnds:p=!1,fillColor:_="var(--red)",lowLabel:m="0",highLabel:g="100"}){const b=l===90||l===270,{fontSize:w,endFontSize:k,centerInset:T}=Vg(i,o,s,b,p);let U,N;l===0?(U={left:0,top:0,bottom:0,width:`${d}%`},N={left:0,top:0}):l===180?(U={right:0,top:0,bottom:0,width:`${d}%`},N={right:0,top:0}):l===90?(U={left:0,right:0,bottom:0,height:`${d}%`},N={left:0,bottom:0}):(U={left:0,right:0,top:0,height:`${d}%`},N={left:0,top:0});const G=I=>u.jsx(i_,{name:i,vertical:b,rotation:l,color:I,fontSize:w,endFontSize:k,centerInset:T,lowLabel:m,highLabel:g,showEnds:p});return u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{position:"absolute",left:0,top:0,width:`${o}px`,height:`${s}px`},children:G("var(--red)")}),u.jsx("div",{style:{position:"absolute",background:_,overflow:"hidden",...U},children:u.jsx("div",{style:{position:"absolute",width:`${o}px`,height:`${s}px`,...N},children:G("var(--white)")})})]})}function s_({control:i,disabled:l,latestValue:o,onSlider:s,width:d,height:p}){const _=A.useRef(null),m=i.sliderMin??0,g=i.sliderMax??100,[b,w]=A.useState(()=>o===void 0?Qm(i.sliderRecenter??"none"):Wm(o,m,g)),k=A.useRef(null),T=i.rotation;A.useEffect(()=>{o!==void 0&&(w(Wm(o,m,g)),k.current=o)},[o,m,g]);function U(V){const X=_.current;if(!X)return 0;const P=X.getBoundingClientRect();let re;return T===0?re=(V.clientX-P.left)/P.width:T===180?re=1-(V.clientX-P.left)/P.width:T===90?re=1-(V.clientY-P.top)/P.height:re=(V.clientY-P.top)/P.height,Math.max(0,Math.min(1,re))}function N(V){l||G(U(V))}function G(V){const X=Math.round(V*100),P=Math.round(m+(g-m)*V);w(X),P!==k.current&&(k.current=P,s(i.name,P))}function I(){const V=i.sliderRecenter??"none";l||V==="none"||G(Qm(V)/100)}return u.jsx("div",{ref:_,className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",touchAction:"none"},onPointerDown:V=>{l||(V.preventDefault(),V.currentTarget.setPointerCapture(V.pointerId),N(V))},onPointerMove:V=>{V.buttons!==0&&N(V)},onPointerUp:I,onPointerCancel:I,onLostPointerCapture:I,children:u.jsx(Ph,{name:i.name,rotation:T,width:d,height:p,value:b,showEnds:!0,lowLabel:String(m),highLabel:String(g)})})}function Qm(i){return i==="bottom"?0:i==="top"?100:i==="middle"?50:0}function Wm(i,l,o){return o===l?0:Math.max(0,Math.min(100,Math.round((i-l)/(o-l)*100)))}function Zm(i,l,o){return Math.round(l+(o-l)*(i+1)/2)}function Jm(i,l){return i==="bottom"?l?1:-1:i==="top"?l?-1:1:0}function eh(i){return{nx:Jm(i.joystickXRecenter,!1),ny:Jm(i.joystickYRecenter,!0)}}function Fh(i,l){const o=Math.min(i,l),s=Math.max(6,o*.16),d=Math.max(1,o/2-s-2);return{knobRadius:s,reach:d}}function Gh({control:i,width:l,height:o,pos:s,dragging:d=!1}){const p=i.rotation,{knobRadius:_,reach:m}=Fh(l,o),g=Math.max(7,Math.min(14,_*.62)),b=Math.max(7,Math.min(12,Math.min(l,o)*.1)),w=[{key:"xmax",value:i.joystickXMax??100,lx:1,ly:0},{key:"xmin",value:i.joystickXMin??-100,lx:-1,ly:0},{key:"ymax",value:i.joystickYMax??100,lx:0,ly:-1},{key:"ymin",value:i.joystickYMin??-100,lx:0,ly:1}];return u.jsxs("div",{className:"control-joystick",style:{width:"100%",height:"100%",position:"relative"},children:[u.jsx("div",{className:"joystick-oval",style:{position:"absolute",left:"50%",top:"50%",width:m*2,height:m*2,transform:"translate(-50%, -50%)"}}),w.map(k=>{const T=pa(k.lx,k.ly,p);return u.jsx("span",{className:"joystick-edge-label",style:{position:"absolute",left:"50%",top:"50%",fontSize:b,transform:`translate(-50%, -50%) translate(${T.x*m}px, ${T.y*m}px) rotate(${p}deg)`},children:k.value},k.key)}),u.jsx("div",{className:"joystick-knob",style:{position:"absolute",left:"50%",top:"50%",width:_*2,height:_*2,fontSize:g,transform:`translate(calc(-50% + ${s.nx*m}px), calc(-50% + ${s.ny*m}px))`,transition:d?"none":"transform 0.12s ease-out"},children:u.jsx("span",{style:{display:"inline-block",transform:i.rotation?`rotate(${i.rotation}deg)`:void 0,whiteSpace:i.rotation===90||i.rotation===270?"nowrap":void 0},children:i.name})})]})}function o_({control:i,disabled:l,onJoystick:o,width:s,height:d}){const p=i.rotation,_=A.useRef(null),[m,g]=A.useState(()=>{const X=eh(i),P=pa(X.nx,X.ny,p);return{nx:P.x,ny:P.y}}),b=A.useRef(!1),w=A.useRef(null),k=i.joystickXMin??-100,T=i.joystickXMax??100,U=i.joystickYMin??-100,N=i.joystickYMax??100;function G(X,P){const re=pa(X,P,pc(p)),ve=Zm(re.x,k,T),ce=Zm(-re.y,U,N);(!w.current||w.current.x!==ve||w.current.y!==ce)&&(w.current={x:ve,y:ce},o(i.name,ve,ce))}function I(X){const P=_.current;if(!P)return;const re=P.getBoundingClientRect(),{reach:ve}=Fh(re.width,re.height);let ce=(X.clientX-(re.left+re.width/2))/ve,W=(X.clientY-(re.top+re.height/2))/ve;const Z=Math.hypot(ce,W);Z>1&&(ce/=Z,W/=Z),g({nx:ce,ny:W}),G(ce,W)}function V(){const X=i.joystickXRecenter??"middle",P=i.joystickYRecenter??"middle";if(X==="none"&&P==="none")return;const re=pa(m.nx,m.ny,pc(p)),ve=eh(i),ce={x:X==="none"?re.x:ve.nx,y:P==="none"?re.y:ve.ny},W=pa(ce.x,ce.y,p),Z={nx:W.x,ny:W.y};b.current=!1,g(Z),G(Z.nx,Z.ny)}return u.jsx("div",{ref:_,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:X=>{l||(X.preventDefault(),X.currentTarget.setPointerCapture(X.pointerId),b.current=!0,I(X))},onPointerMove:X=>{l||!b.current||X.buttons===0||I(X)},onPointerUp:V,onPointerCancel:V,onLostPointerCapture:V,children:u.jsx(Gh,{control:i,width:s,height:d,pos:m,dragging:b.current})})}const c_=[{direction:"up",rotate:0},{direction:"right",rotate:90},{direction:"down",rotate:180},{direction:"left",rotate:270}],u_="M 34 30 L 34 15 Q 34 8 41 8 L 59 8 Q 66 8 66 15 L 66 30 L 50 46 L 34 30 Z",d_=.1,f_={up:"OP",down:"NED",left:"VENSTRE",right:"HØJRE"},m_={up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]},h_=[{pos:"up",x:50,y:23},{pos:"right",x:78,y:50},{pos:"down",x:50,y:77},{pos:"left",x:22,y:50}];function Yd(i,l){return Math.hypot(i,l)<d_?null:Math.abs(i)>=Math.abs(l)?i>0?"right":"left":l>0?"down":"up"}function p_(i,l){const[o,s]=m_[i],d=pa(o,s,pc(l));return Yd(d.x,d.y)??i}function $h({control:i,active:l=null}){const o=i.rotation;return u.jsx("div",{className:"control-dpad",style:{width:"100%",height:"100%"},children:u.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet",children:[c_.map(s=>u.jsx("path",{className:`dpad-arm ${l===s.direction?"active":""}`,transform:`rotate(${s.rotate} 50 50)`,d:u_},s.direction)),h_.map(s=>u.jsx("text",{className:`dpad-label ${l===s.pos?"active":""}`,x:s.x,y:s.y,textAnchor:"middle",dominantBaseline:"central",transform:o?`rotate(${o} ${s.x} ${s.y})`:void 0,children:f_[p_(s.pos,o)]},s.pos))]})})}function g_({control:i,disabled:l,onDpad:o}){const s=A.useRef(null),d=A.useRef(null),p=A.useRef(!1),[_,m]=A.useState(null);function g(T){const U=s.current;if(!U)return{screen:null,logical:null};const N=U.getBoundingClientRect(),G=Math.min(N.width,N.height)/2,I=(T.clientX-(N.left+N.width/2))/G,V=(T.clientY-(N.top+N.height/2))/G,X=Yd(I,V),P=pa(I,V,pc(i.rotation)),re=Yd(P.x,P.y);return{screen:X,logical:re}}function b(T){const U=s.current;if(!U)return!1;const N=U.getBoundingClientRect(),G=(T.clientX-N.left)/N.width,I=(T.clientY-N.top)/N.height;return G>=0&&G<=1&&I>=0&&I<=1}function w(T){T.logical!==d.current&&(d.current&&o(i.name,d.current,!1),d.current=T.logical,T.logical&&o(i.name,T.logical,!0)),m(T.screen)}function k(){p.current=!1,w({screen:null,logical:null})}return u.jsx("div",{ref:s,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:T=>{l||!b(T)||(T.preventDefault(),T.currentTarget.setPointerCapture(T.pointerId),p.current=!0,w(g(T)))},onPointerMove:T=>{l||!p.current||T.buttons===0||w(g(T))},onPointerUp:k,onPointerCancel:k,onLostPointerCapture:k,children:u.jsx($h,{control:i,active:_})})}const __={button:"Knapper",slider:"Slidere",toggle:"Toggleknapper",radar:"Radar",text:"Tekstfelter",joystick:"Joysticks",dpad:"Dpads",plot:"Grafer"},v_=["button","slider","toggle","radar","text","joystick","dpad","plot"];function b_({unplaced:i,onAdd:l,onClose:o}){const s=A.useMemo(()=>v_.filter(m=>i.some(g=>g.type===m)),[i]),[d,p]=A.useState(s[0]??"button"),_=i.filter(m=>m.type===d);return A.useEffect(()=>{s.length>0&&!s.includes(d)&&p(s[0])},[s,d]),u.jsxs(qt,{title:"Tilføj kontrol",onClose:o,children:[s.length>1&&u.jsx("div",{className:"segmented add-modal-tabs",children:s.map(m=>u.jsx("button",{type:"button",className:d===m?"active":"",onClick:()=>p(m),children:__[m]},m))}),u.jsx("div",{className:"add-lists",children:s.length===0?u.jsx("div",{className:"device-list-empty",children:"Alle kontroller er allerede placeret."}):_.map(m=>u.jsxs("button",{type:"button",className:"add-entry",onClick:()=>l(m.name),children:[u.jsx("span",{children:m.name}),u.jsx("span",{className:"iconbtn",children:u.jsx(Dt,{name:"plus",size:22})})]},m.name))})]})}function Yh(i){const[l,o]=A.useState({w:0,h:0}),s=A.useRef(null),d=A.useRef(null);return A.useLayoutEffect(()=>{var g;const p=i.current;if(s.current===p)return;if((g=d.current)==null||g.disconnect(),d.current=null,s.current=p,!p){o(b=>b.w===0&&b.h===0?b:{w:0,h:0});return}const _=()=>{const b={w:p.clientWidth,h:p.clientHeight};o(w=>w.w===b.w&&w.h===b.h?w:b)};_();const m=new ResizeObserver(_);m.observe(p),d.current=m}),A.useEffect(()=>()=>{var p;(p=d.current)==null||p.disconnect(),d.current=null,s.current=null},[]),l}function Ss(i){return i.centerX2!==null&&i.centerY2!==null&&i.spanX!==null&&i.spanY!==null}const y_=4,x_=5;function w_(i){return i==="joystick"||i==="dpad"?{spanX:6,spanY:6}:i==="plot"?{spanX:7,spanY:4}:{spanX:y_,spanY:x_}}function th(i){if(!Ss(i))return null;const l=i.centerX2/2,o=i.centerY2/2;return{x0:l-i.spanX/2,x1:l+i.spanX/2,y0:o-i.spanY/2,y1:o+i.spanY/2}}function k_(i,l,o=.02){return i.x0<l.x1-o&&l.x0<i.x1-o&&i.y0<l.y1-o&&l.y0<i.y1-o}function S_(i,l){return Math.max(1,Math.min(l.cols-1,i))}function E_(i,l){return Math.max(1,Math.min(l.rows-1,i))}function T_(i,l){return(i-l.margin)/l.stepX}function M_(i,l){return(l.areaH-i-l.margin)/l.stepY}function nh(i,l,o){const s=l%2,p=(i%2+2)%2===s?i:i+1,_=o*2;return Math.max(l,Math.min(_-l,p))}function j_(){const i=ae(H=>H.layout),l=ae(H=>H.active),o=ae(H=>H.saveLayout),s=ae(H=>H.setEditMode),d=ae(H=>H.askConfirm),p=!!(l!=null&&l.canEdit),[_,m]=A.useState(()=>i.map(H=>({...H}))),[g,b]=A.useState(null),[w,k]=A.useState(!1),[T,U]=A.useState(null),[N,G]=A.useState(null),[I,V]=A.useState(null),[X,P]=A.useState(!1),re=A.useRef(null),ve=Yh(re),ce=ve.w>0&&ve.h>0,W=Nh(ve.w,ve.h,l==null?void 0:l.gridCols,l==null?void 0:l.gridRows),Z=A.useMemo(()=>ce?eg(W):[],[W,ce]),we=_.filter(Ss),Ee=_.filter(H=>!Ss(H)),ze=A.useMemo(()=>{const H=new Set;for(let D=0;D<we.length;D+=1)for(let oe=D+1;oe<we.length;oe+=1){const ye=th(we[D]),Ue=th(we[oe]);ye&&Ue&&k_(ye,Ue)&&(H.add(we[D].name),H.add(we[oe].name))}return H},[we]),J=ze.size>0,Ne=A.useMemo(()=>rh(_)!==rh(i),[_,i]),je=A.useMemo(()=>{if(!T||!N)return null;const H=_.find(ye=>ye.name===T);if(!H||H.spanX===null||H.spanY===null)return null;const D=Dd(N.cx,N.cy,H.spanX,H.spanY,W),oe=vs({...H,centerX2:D.centerX2,centerY2:D.centerY2},W);return oe?{name:H.name,rect:oe}:null},[_,T,N,W]);function ue(H,D){m(oe=>oe.map(ye=>ye.name===H?D(ye):ye))}function B(H){const D=re.current;if(!D)return{x:0,y:0};const oe=D.getBoundingClientRect(),ye=D.clientWidth/oe.width,Ue=D.clientHeight/oe.height;return{x:Math.max(0,Math.min(D.clientWidth,(H.clientX-oe.left)*ye)),y:Math.max(0,Math.min(D.clientHeight,(H.clientY-oe.top)*Ue))}}function ne(H,D){H.stopPropagation(),b(D.name);const oe=vs(D,W);oe&&(U(D.name),G({cx:oe.cx,cy:oe.cy}),H.currentTarget.setPointerCapture(H.pointerId))}function pe(H){if(T){const{x:D,y:oe}=B(H),ye=_.find(Ce=>Ce.name===T),Ue=ye?vs(ye,W):null;if(!Ue){G({cx:D,cy:oe});return}const fe=Ue.width/2,Le=Ue.height/2;G({cx:Math.max(W.margin+fe,Math.min(W.areaW-W.margin-fe,D)),cy:Math.max(W.margin+Le,Math.min(W.areaH-W.margin-Le,oe))});return}if(I){const{x:D,y:oe}=B(H),{name:ye,side:Ue,fixedWhole:fe}=I;ue(ye,Le=>{if(Le.spanX===null||Le.spanY===null||Le.centerX2===null||Le.centerY2===null)return Le;if(Ue==="left"||Ue==="right"){const kt=Math.round(T_(D,W));if(Ue==="right"){const Jt=Math.max(fe+1,Math.min(W.cols-1,kt))-fe;return{...Le,spanX:Jt,centerX2:fe*2+Jt}}const Ot=Math.min(fe-1,Math.max(0,kt)),Zt=fe-Ot;return{...Le,spanX:Zt,centerX2:fe*2-Zt}}const Ce=Math.round(M_(oe,W));if(Ue==="top"){const Ot=Math.max(fe+1,Math.min(W.rows-1,Ce))-fe;return{...Le,spanY:Ot,centerY2:fe*2+Ot}}const Ke=Math.min(fe-1,Math.max(0,Ce)),st=fe-Ke;return{...Le,spanY:st,centerY2:fe*2-st}})}}function me(){if(T&&N){const H=_.find(D=>D.name===T);if(H&&H.spanX!==null&&H.spanY!==null){const D=Dd(N.cx,N.cy,H.spanX,H.spanY,W);ue(T,oe=>({...oe,centerX2:D.centerX2,centerY2:D.centerY2}))}}U(null),G(null),V(null)}function xe(H,D,oe){if(H.stopPropagation(),D.centerX2===null||D.centerY2===null||D.spanX===null||D.spanY===null)return;const ye=(D.centerX2-D.spanX)/2,Ue=(D.centerX2+D.spanX)/2,fe=(D.centerY2-D.spanY)/2,Le=(D.centerY2+D.spanY)/2,Ce=oe==="right"?ye:oe==="left"?Ue:oe==="top"?fe:Le;b(D.name),V({name:D.name,side:oe,fixedWhole:Ce}),H.currentTarget.setPointerCapture(H.pointerId)}function E(H){ue(H,D=>{const oe=(D.rotation+270)%360;if(D.type==="button"||D.type==="toggle")return{...D,rotation:oe};if(D.spanX===null||D.spanY===null||D.centerX2===null||D.centerY2===null)return{...D,rotation:oe};const ye=S_(D.spanY,W),Ue=E_(D.spanX,W);return{...D,rotation:oe,spanX:ye,spanY:Ue,centerX2:nh(D.centerX2,ye,W.cols-1),centerY2:nh(D.centerY2,Ue,W.rows-1)}})}function z(H){ue(H,D=>({...D,centerX2:null,centerY2:null,spanX:null,spanY:null,rotation:0})),b(null)}function te(H){k(!1);const D=_.find(fe=>fe.name===H);if(!D)return;const{spanX:oe,spanY:ye}=w_(D.type),Ue=Dd(W.areaW/2,W.areaH/2,oe,ye,W);ue(H,()=>({...D,spanX:oe,spanY:ye,rotation:0,centerX2:Ue.centerX2,centerY2:Ue.centerY2})),b(H)}async function le(){J||(P(!0),await o(_),P(!1))}function se(){if(!Ne){s(!1);return}d({title:"Kassér ændringer",message:"Vil du forlade redigering og kassere dine layout-ændringer?",confirmLabel:"Kassér",onConfirm:()=>s(!1)})}return u.jsxs("div",{className:"edit-view",children:[u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:"controls-area",ref:re,style:{touchAction:"none"},onPointerMove:pe,onPointerUp:me,onPointerDown:()=>b(null),children:ce&&u.jsxs(u.Fragment,{children:[u.jsx("svg",{width:W.areaW,height:W.areaH,style:{position:"absolute",inset:0,pointerEvents:"none"},children:Z.map((H,D)=>u.jsx("circle",{cx:H.x,cy:H.y,r:2.5,fill:"rgba(198,80,78,0.45)"},D))}),je&&u.jsx("div",{className:"snap-preview",style:{left:je.rect.cx,top:je.rect.cy,width:je.rect.width,height:je.rect.height}}),we.map(H=>{const D=T===H.name&&N,oe=vs(H,W);if(!oe)return null;const ye=D?N.cx:oe.cx,Ue=D?N.cy:oe.cy,fe=g===H.name,Le={left:ye,top:Ue,width:oe.width,height:oe.height,outline:fe?"3px solid var(--text)":"none",outlineOffset:2,zIndex:fe?2:1};return u.jsxs("div",{className:`control ${ze.has(H.name)?"colliding":""}`,style:Le,onPointerDown:Ce=>ne(Ce,H),children:[H.type==="button"?u.jsx("div",{className:"control-button",style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},children:u.jsx(gc,{name:H.name,width:oe.width,height:oe.height,rotation:H.rotation})}):H.type==="toggle"?u.jsx("div",{className:"control-toggle on",style:{width:"100%",height:"100%"},children:u.jsx(gc,{name:H.name,width:oe.width,height:oe.height,rotation:H.rotation})}):H.type==="radar"?u.jsx(Hh,{control:H,pings:[],width:oe.width,height:oe.height,preview:!0}):H.type==="plot"?u.jsx(Ih,{control:H,points:[],width:oe.width,height:oe.height,preview:!0}):H.type==="text"?u.jsx(qh,{message:H.name,width:oe.width,height:oe.height,rotation:H.rotation}):H.type==="joystick"?u.jsx(Gh,{control:H,width:oe.width,height:oe.height,pos:{nx:0,ny:0}}):H.type==="dpad"?u.jsx($h,{control:H}):u.jsx("div",{className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:u.jsx(Ph,{name:H.name,rotation:H.rotation,width:oe.width,height:oe.height,value:50,showEnds:!0,lowLabel:String(H.sliderMin??0),highLabel:String(H.sliderMax??100),fillColor:ze.has(H.name)?"var(--disabled)":"var(--red)"})}),fe&&u.jsxs(u.Fragment,{children:[u.jsx("button",{type:"button",className:"edit-handle edit-handle-top","aria-label":"Ændr højde foroven",onPointerDown:Ce=>xe(Ce,H,"top")}),u.jsx("button",{type:"button",className:"edit-handle edit-handle-bottom","aria-label":"Ændr højde forneden",onPointerDown:Ce=>xe(Ce,H,"bottom")}),u.jsx("button",{type:"button",className:"edit-handle edit-handle-left","aria-label":"Ændr bredde til venstre",onPointerDown:Ce=>xe(Ce,H,"left")}),u.jsx("button",{type:"button",className:"edit-handle edit-handle-right","aria-label":"Ændr bredde til højre",onPointerDown:Ce=>xe(Ce,H,"right")}),u.jsx("button",{type:"button",className:"edit-corner-btn edit-corner-rotate","aria-label":"Roter",title:"Roter",onPointerDown:Ce=>Ce.stopPropagation(),onClick:()=>E(H.name),children:"⟲"}),u.jsx("button",{type:"button",className:"edit-corner-btn edit-corner-remove","aria-label":"Fjern fra layout",title:"Fjern fra layout",onPointerDown:Ce=>Ce.stopPropagation(),onClick:()=>z(H.name),children:u.jsx(Dt,{name:"delete",size:16})})]})]},H.name)}),p&&u.jsx("button",{type:"button",className:"fab",style:{width:52,height:52,right:12,bottom:12},onPointerDown:H=>H.stopPropagation(),onClick:()=>k(!0),"aria-label":"Tilføj kontrol",children:u.jsx(Dt,{name:"plus",size:24})}),X&&u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})]})})}),u.jsxs("div",{className:"edit-band edit-actions-band",children:[u.jsx("button",{className:"btn btn-outline",style:{flex:1},type:"button",onClick:se,disabled:X,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary",style:{flex:1},type:"button",onClick:le,disabled:J||X,children:X?"Gemmer...":"Gem"})]}),w&&u.jsx(b_,{unplaced:Ee,onAdd:te,onClose:()=>k(!1)})]})}function rh(i){return JSON.stringify(i.map(l=>({type:l.type,name:l.name,centerX2:l.centerX2,centerY2:l.centerY2,spanX:l.spanX,spanY:l.spanY,rotation:l.rotation})))}function N_(){const i=ae(P=>P.layout),l=ae(P=>P.editMode),o=ae(P=>P.active),s=ae(P=>P.sliderValues),d=ae(P=>P.toggleValues),p=ae(P=>P.radarPings),_=ae(P=>P.textValues),m=ae(P=>P.plotSeries),g=ae(P=>P.toggleSideMenu),b=ae(P=>P.sendButton),w=ae(P=>P.sendSlider),k=ae(P=>P.sendToggle),T=ae(P=>P.sendJoystick),U=ae(P=>P.sendDpad),N=A.useRef(null),G=Yh(N),I=Nh(G.w,G.h,o==null?void 0:o.gridCols,o==null?void 0:o.gridRows),V=G.w>0&&G.h>0,X=i.filter(Ss);return u.jsxs("div",{className:"screen control-screen",children:[u.jsx(of,{title:"Pico Kontrol Panel",onMenu:()=>g()}),l?u.jsx(j_,{}):u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:"controls-area",ref:N,onContextMenu:P=>P.preventDefault(),onPointerDown:P=>{P.target===P.currentTarget&&P.preventDefault()},children:V?X.map(P=>{const re=vs(P,I);return re?u.jsx(Ig,{control:P,rect:re,disabled:!1,latestValue:P.type==="slider"?s[P.name]:void 0,toggleValue:P.type==="toggle"?d[P.name]:void 0,radarPings:P.type==="radar"?p[P.name]:void 0,textValue:P.type==="text"?_[P.name]:void 0,plotPoints:P.type==="plot"?m[P.name]:void 0,onButton:b,onSlider:w,onToggle:k,onJoystick:T,onDpad:U},P.name):null}):u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})})})]})}const R_="",lh="",ah="",ma="";function hs(i){return new Promise(l=>setTimeout(l,i))}class A_{constructor(l){this.transport=l}async interrupt(){await this.transport.write(ah),await hs(80),await this.transport.write(ah)}async friendlyRepl(){await this.transport.write(lh)}async softReset(){await this.transport.write(ma)}async stop(){await this.interrupt(),await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(`try:
    ble.shutdown()
except Exception:
    pass
`).catch(()=>{})}async runFile(l,o){await this.interrupt(),await this.waitForFriendlyPrompt().catch(async()=>{await this.friendlyRepl().catch(()=>{}),await hs(180)}),await hs(120),o==null||o(),await this.transport.writeLine(`import builtins as _pkp_builtins; exec(_pkp_builtins.open(${JSON.stringify(l)}).read())`)}async sendFriendlyLine(l){await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(l)}async sendProgramInput(l){await this.transport.writeLine(l)}async enterRawRepl(l=2500){if(await this.interrupt(),await hs(80),await this.transport.write(`\r
`),await hs(40),!(await this.collectUntil(async()=>{await this.transport.write(R_)},s=>s.includes("raw REPL")||s.includes("raw REPL; CTRL-B to exit"),l)).includes("raw REPL"))throw new Error("Kunne ikke skifte til MicroPython raw REPL.")}async exec(l,o=6e3){await this.enterRawRepl();const s=await this.collectUntil(async()=>{await this.transport.write(l),l.endsWith(`
`)||await this.transport.write(`
`),await this.transport.write(ma)},d=>d.includes(`${ma}${ma}`)||d.includes(`${ma}>`),o);return await this.friendlyRepl().catch(()=>{}),C_(s)}collectUntil(l,o,s){return new Promise((d,p)=>{let _="",m=null;const g=setTimeout(()=>{m==null||m(),p(new Error("Timeout ved USB REPL kommando."))},s);m=this.transport.addDataListener(b=>{_+=b,o(_)&&(clearTimeout(g),m==null||m(),d(_))}),l().catch(b=>{clearTimeout(g),m==null||m(),p(b instanceof Error?b:new Error("USB REPL kommando fejlede."))})})}async waitForFriendlyPrompt(l=1600){await this.collectUntil(async()=>{await this.transport.write(lh)},o=>/(^|\r?\n)>>> ?$/.test(o),l)}}function C_(i){const l=i.indexOf("OK"),o=i.indexOf(ma,l>=0?l:0),s=o>=0?i.indexOf(ma,o+1):-1;if(l<0||o<0)return{output:i.trim(),error:"",raw:i};const d=i.slice(l+2,o).replace(/^\r?\n/,"").trimEnd(),p=s>=0?i.slice(o+1,s).trim():"";return{output:d,error:p,raw:i}}const D_=[{version:"MicroPython v1.28.0",date:"2026-04-06",stamp:"20260406",tag:"v1.28.0"},{version:"MicroPython v1.27.0",date:"2025-12-09",stamp:"20251209",tag:"v1.27.0"},{version:"MicroPython v1.26.1",date:"2025-09-11",stamp:"20250911",tag:"v1.26.1"},{version:"MicroPython v1.26.0",date:"2025-08-09",stamp:"20250809",tag:"v1.26.0"},{version:"MicroPython v1.25.0",date:"2025-04-15",stamp:"20250415",tag:"v1.25.0"},{version:"MicroPython v1.24.1",date:"2024-11-29",stamp:"20241129",tag:"v1.24.1"},{version:"MicroPython v1.24.0",date:"2024-10-25",stamp:"20241025",tag:"v1.24.0"},{version:"MicroPython v1.23.0",date:"2024-06-02",stamp:"20240602",tag:"v1.23.0"},{version:"MicroPython v1.22.2",date:"2024-02-22",stamp:"20240222",tag:"v1.22.2"},{version:"MicroPython v1.22.1",date:"2024-01-05",stamp:"20240105",tag:"v1.22.1"}],O_=[{board:"Raspberry Pi Pico",firmwareName:"RPI_PICO"},{board:"Raspberry Pi Pico W",firmwareName:"RPI_PICO_W"}],Cl=O_.flatMap(({board:i,firmwareName:l})=>D_.map(({version:o,date:s,stamp:d,tag:p})=>{const _=`${l}-${d}-${p}.uf2`;return{board:i,version:o,date:s,fileName:_,url:`https://micropython.org/resources/firmware/${_}`}})),Ud=512,qd=`import builtins as _pkp_builtins
`;function Zr(i){return JSON.stringify(i)}function L_(i){return`bytes.fromhex(${JSON.stringify([...i].map(l=>l.toString(16).padStart(2,"0")).join(""))})`}function B_(i,l){return`${i==="/"?"":i.replace(/\/$/,"")}/${l}`}class z_{constructor(l){this.repl=l}async list(l="/"){const o=`
import os
base = ${Zr(l)}
for name in os.listdir(base):
    p = (${Zr(l)}.rstrip('/') + '/' + name) if ${Zr(l)} != '/' else '/' + name
    try:
        st = os.stat(p)
        mode = st[0]
        kind = 'dir' if (mode & 0x4000) else 'file'
        size = st[6]
    except Exception:
        kind = 'unknown'
        size = -1
    print(name + '\\t' + kind + '\\t' + str(size))
`,s=await this.repl.exec(o);if(s.error)throw new Error(s.error);return s.output.split(/\r?\n/).map(d=>d.trim()).filter(Boolean).map(d=>{const[p,_,m]=d.split("	"),g=_==="dir"||_==="file"?_:"unknown",b=parseInt(m??"",10);return{name:p,path:B_(l,p),type:g,...Number.isFinite(b)&&b>=0?{size:b}:{}}})}async readText(l){const o=`
import sys
${qd}with _pkp_builtins.open(${Zr(l)}, 'rb') as f:
    while True:
        b = f.read(${Ud})
        if not b:
            break
        print(b.hex())
`,s=await this.repl.exec(o,1e4);if(s.error)throw new Error(s.error);const d=s.output.replace(/\s+/g,"");return new TextDecoder().decode(U_(d))}async writeText(l,o,s){const d=new TextEncoder().encode(o);if(s==null||s(5,"Klargør fil..."),await this.repl.exec(`${qd}_pkp_builtins.open(${Zr(l)}, 'wb').close()`),d.length===0){s==null||s(100,"Gemt på Pico");return}for(let p=0;p<d.length;p+=Ud){const _=d.slice(p,p+Ud),m=`
${qd}with _pkp_builtins.open(${Zr(l)}, 'ab') as f:
    f.write(${L_(_)})
`,g=await this.repl.exec(m,1e4);if(g.error)throw new Error(g.error);const b=Math.min(p+_.length,d.length);s==null||s(10+Math.round(b/d.length*85),`Gemmer ${b}/${d.length} bytes...`)}s==null||s(100,"Gemt på Pico")}async replaceTextSafely(l,o,s,d={}){const p=`${l}.tmp`;if(await this.writeText(p,o,(g,b)=>s==null?void 0:s(Math.min(70,g*.7),b)),s==null||s(78,"Verificerer fil..."),await this.readText(p)!==o)throw await this.delete(p).catch(()=>{}),new Error(`Verificering fejlede for ${l}.`);s==null||s(88,"Udskifter fil...");let m=!!d.createBackup;if(m){const g=await this.readText(l).catch(()=>null);m=g!==null&&g!==o}if(m){const g=await this.nextBackupPath(l).catch(()=>`${l}.backup`);await this.rename(l,g).catch(()=>{})}else await this.delete(l).catch(()=>{});await this.rename(p,l),s==null||s(100,"Installeret på Pico")}async delete(l){const o=await this.repl.exec(`
import os
os.remove(${Zr(l)})
`);if(o.error)throw new Error(o.error)}async nextBackupPath(l){const o=await this.list("/"),s=new Set(o.map(k=>k.path.toLowerCase())),d=l.replace(/\\/g,"/"),p=d.lastIndexOf("/"),_=p>=0?d.slice(0,p+1):"/",m=p>=0?d.slice(p+1):d.replace(/^\/+/,""),g=m.lastIndexOf("."),b=g>0?m.slice(0,g):m,w=g>0?m.slice(g):"";for(let k=1;k<1e3;k+=1){const T=`${_}${b}_backup${k}${w}`;if(!s.has(T.toLowerCase()))return T}return`${_}${b}_backup${Date.now()}${w}`}async rename(l,o){const s=await this.repl.exec(`
import os
os.rename(${Zr(l)}, ${Zr(o)})
`);if(s.error)throw new Error(s.error)}}function U_(i){const l=new Uint8Array(Math.floor(i.length/2));for(let o=0;o<l.length;o+=1)l[o]=parseInt(i.slice(o*2,o*2+2),16);return l}const q_=`from machine import Pin                    # Giver adgang til pins på Pico W, fx LED'en\r
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
`,H_=`import ubluetooth\r
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
        # ---- Outbound telemetry readiness (device -> app; see the doc)\r
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
            # First inbound line proves notifications are on; unlocks buffered telemetry (see doc).\r
            if not self._app_ready:\r
                self._app_ready = True\r
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
`,V_=`from machine import Pin, time_pulse_us\r
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
        return cms`,I_=`import array, time\r
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
`,P_=`from machine import Pin\r
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
`,F_=`from machine import Pin                    # Giver adgang til pins på Pico W, fx LED'en\r
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
# Hver graf bestemmer selv, hvor mange punkter den viser. Tallet staar direkte\r
# i BluetoothControls nedenfor: ("plot", NAVN, min, max, antal_punkter, type, x_akse, y_akse).\r
# Vaelg fx 5 til en lille graf eller 20 til en stor graf.\r
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
# Hver rigtig måling gemmes også her på Picoen (nyeste sidst). Der gemmes nok\r
# linjer til den største graf i BluetoothControls, så man kan forbinde når\r
# som helst - selv efter Picoen har kørt helt\r
# for sig selv i timevis - og med det samme se den seneste vejrdata, den har\r
# samlet, uden at hente noget fra Open-Meteo igen. Det er stadig kun Picoens\r
# egne, tidligere hentede målinger, ikke Open-Meteos historik.\r
DATA_FILE = "VejrMaalinger.txt"\r
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
def max_graf_punkter():\r
    """Find det største antal punkter fra plot-linjerne i BluetoothControls."""\r
    maks = 1\r
    for kontrol in BluetoothControls:\r
        if len(kontrol) >= 5 and kontrol[0] == "plot":\r
            try:\r
                antal = int(kontrol[4])\r
                if antal > maks:\r
                    maks = antal\r
            except Exception:\r
                pass\r
    return maks\r
\r
\r
def graf_punkter(navn, standard):\r
    """Find antal punkter for en bestemt graf i BluetoothControls."""\r
    for kontrol in BluetoothControls:\r
        if len(kontrol) >= 5 and kontrol[0] == "plot" and kontrol[1] == navn:\r
            try:\r
                return int(kontrol[4])\r
            except Exception:\r
                return standard\r
    return standard\r
\r
\r
def gem_maaling(api_tid, temp, regn):\r
    """Føjer én rigtig måling til DATA_FILE og smider de ældste væk."""\r
    try:\r
        try:\r
            with open(DATA_FILE, "r") as f:\r
                linjer = [l.strip() for l in f.readlines() if l.strip()]\r
        except OSError:\r
            linjer = []                    # Filen findes ikke endnu - start med en tom liste\r
        ny_linje = api_tid + "," + str(temp) + "," + str(regn)\r
        linjer.append(ny_linje)\r
        linjer = linjer[-max_graf_punkter():]  # Behold nok til den største graf\r
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
def on_connect():                          # Kører automatisk når Bluetooth forbinder\r
    global naeste_vejr_tid\r
    led.on()                               # Tænd LED'en når nogen forbinder\r
    # Genskab graferne med det samme fra Picoens egne, tidligere hentede\r
    # målinger - også dem den samlede, mens ingen var forbundet. Hurtigt og\r
    # uden Wi-Fi, så det er trygt at gøre her i selve Bluetooth-afbrydelsen\r
    # (se send_plot's telemetri-buffer i PicoBluetooth.py).\r
    maalinger = hent_gemte_maalinger()\r
    for gammel_tid, gammel_temp, gammel_regn in maalinger[-graf_punkter("TEMPERATUR", TEMP_PUNKTER):]:\r
        label = plot_label(gammel_tid)\r
        ble.send_plot("TEMPERATUR", gammel_temp, label)\r
    for gammel_tid, gammel_temp, gammel_regn in maalinger[-graf_punkter("REGN", REGN_PUNKTER):]:\r
        label = plot_label(gammel_tid)\r
        ble.send_plot("REGN", gammel_regn, label)\r
    naeste_vejr_tid = time.ticks_ms()      # Hent også et friskt vejrpunkt med det samme\r
    vis("STATUS", "Forbundet")             # Sig hej til appen\r
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
    # Uafhængigt af om nogen er forbundet over Bluetooth: Picoen bliver ved med\r
    # at hente og gemme vejret i baggrunden. send_plot/send_text herinde sender\r
    # kun noget, hvis en telefon/browser rent faktisk er forbundet (se\r
    # PicoBluetooth.py), men gem_maaling() gemmer målingen lokalt uanset hvad.\r
    if time.ticks_diff(time.ticks_ms(), naeste_vejr_tid) >= 0:\r
        hent_og_vis_vejr()                 # Tid til at hente nyt vejr\r
        naeste_vejr_tid = time.ticks_add(time.ticks_ms(), OPDATER_HVERT_MS)  # Planlæg næste gang\r
\r
    time.sleep_ms(100)                     # Lille pause, så Pico W ikke bruger al CPU-tid\r
`,G_=`from machine import Pin\r
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
`,$_=`from machine import Pin\r
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
`,Y_=`# PicoFly.py
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
`,X_=`import machine\r
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
        self.initPCA()`,K_=`from machine import Pin\r
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
`,Q_=`from machine import Pin
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
`,W_=`from machine import Pin, PWM, ADC\r
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
`,Z_=`from machine import Pin\r
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
`,ni=[{id:"program:send-text",path:"/main.py",label:"Send tekst (main.py)",description:"Startprogram med kun et tekstfelt, hvor Picoen sender beskeder til kontrolpanelet.",kind:"program",difficulty:"Nem",content:Q_},{id:"program:neopixel-led",path:"/main.py",label:"NeoPixel lys (main.py)",description:"Startprogram til NeoPixel med hold-knap og lysstyrke-slider.",kind:"program",difficulty:"Nem",content:$_},{id:"program:tank-control",path:"/main.py",label:"Robotbil med tankstyring (main.py)",description:"Startprogram til robotbil med to motor-slidere.",kind:"program",difficulty:"Mellem",content:Z_},{id:"program:dpad-control",path:"/main.py",label:"Robotbil med D-pad (main.py)",description:"Startprogram til robotbil styret med fire retningsknapper og fart-slider.",kind:"program",difficulty:"Mellem",content:P_},{id:"program:joystick-control",path:"/main.py",label:"Robotbil med joystick (main.py)",description:"Startprogram til robotbil styret med joystick og fart-slider.",kind:"program",difficulty:"Mellem",content:G_},{id:"program:radar-control",path:"/main.py",label:"Radar med afstandssensor (main.py)",description:"Startprogram til radar med servo, afstandssensor og scan-toggle.",kind:"program",difficulty:"Svær",content:K_},{id:"program:api-weather",path:"/main.py",label:"Vejr fra internettet (main.py)",description:"Startprogram der henter vejr fra et API over Wi-Fi og viser det i tekstfelter. Husk at skrive dit Wi-Fi navn og kodeord ind i main.py.",kind:"program",difficulty:"Svær",content:q_},{id:"program:graphs",path:"/main.py",label:"Vejrgrafer fra internettet (main.py)",description:"Startprogram der henter vejr fra et API og tegner temperatur og nedbør som grafer over tid. Husk at skrive dit Wi-Fi navn og kodeord ind i main.py.",kind:"program",difficulty:"Svær",content:F_},{id:"program:smart-home",path:"/main.py",label:"SmartHome alarmstation (main.py)",description:"Startprogram til alarmstation med dør-servo, keypad, PIR, vandsensor, buzzer og NeoPixel.",kind:"program",difficulty:"Svær",content:W_},{id:"library:pico-bluetooth",path:"/PicoBluetooth.py",label:"PicoBluetooth.py",description:"Bluetooth-biblioteket der får Picoen til at tale med appen.",kind:"library",content:H_},{id:"library:pico-robotics",path:"/PicoRobotics.py",label:"PicoRobotics.py",description:"Bibliotek til Kitronik Pico Robotics Board.",kind:"library",content:X_},{id:"library:pico-fly",path:"/PicoFly.py",label:"PicoFly.py",description:"Bibliotek til PicoFly-board med motorer og servoer.",kind:"library",content:Y_},{id:"library:hcsr04",path:"/hcsr04.py",label:"hcsr04.py",description:"Bibliotek til HC-SR04 ultralyds-afstandssensor.",kind:"library",content:V_},{id:"library:neopixel",path:"/neopixel.py",label:"neopixel.py",description:"Bibliotek til NeoPixel LED-strips og LED-ringe.",kind:"library",content:I_}],J_=11914;function ev(){return typeof navigator<"u"&&"serial"in navigator&&!!navigator.serial}function tv(){return ev()?{supported:!0,message:"USB-udvikling er tilgængelig i denne browser."}:{supported:!1,message:"USB-udvikling kræver en computer med Chrome, Edge eller Chromebook."}}class nv{constructor(l={}){_e(this,"port",null);_e(this,"reader",null);_e(this,"writer",null);_e(this,"readLoopDone",null);_e(this,"readLoopActive",!1);_e(this,"disconnecting",!1);_e(this,"buffer","");_e(this,"events");_e(this,"dataListeners",new Set);this.events=l}get connected(){return!!this.port&&!!this.writer}get info(){var l;return((l=this.port)==null?void 0:l.getInfo())??null}async requestAndConnect(){if(!navigator.serial)throw new Error("Web Serial er ikke tilgængelig i denne browser.");const l=await navigator.serial.requestPort({filters:[{usbVendorId:J_}]});await this.openPort(l)}async connectKnownPort(l){await this.openPort(l)}async disconnect(){var g,b;const l=this.connected||!!this.port||!!this.reader,o=this.port,s=this.reader,d=this.writer,p=this.readLoopDone,_=s==null?void 0:s.closed.catch(()=>{}),m=d==null?void 0:d.closed.catch(()=>{});this.disconnecting=!0,this.readLoopActive=!1;try{await(s==null?void 0:s.cancel())}catch{}p&&await p.catch(()=>{}),await _;try{s==null||s.releaseLock()}catch{}this.reader===s&&(this.reader=null);try{await(d==null?void 0:d.close()),await m}catch{try{await(d==null?void 0:d.abort("disconnect"))}catch{}}try{d==null||d.releaseLock()}catch{}this.writer===d&&(this.writer=null),o&&await o.close(),this.port===o&&(this.port=null),this.buffer="",this.readLoopDone===p&&(this.readLoopDone=null),this.disconnecting=!1,l&&((b=(g=this.events).onDisconnect)==null||b.call(g))}async write(l){if(!this.writer)throw new Error("Ingen USB-forbindelse.");await this.writer.write(new TextEncoder().encode(l))}async writeLine(l){await this.write(`${l}\r
`)}addDataListener(l){return this.dataListeners.add(l),()=>this.dataListeners.delete(l)}async openPort(l){var s,d,p;if(await this.disconnect().catch(()=>{}),await l.open({baudRate:115200,bufferSize:4096}),this.port=l,this.writer=((s=l.writable)==null?void 0:s.getWriter())??null,!this.writer||!l.readable)throw new Error("USB-porten kunne ikke åbnes til læsning og skrivning.");const o=l.getInfo();(p=(d=this.events).onLog)==null||p.call(d,"success",`USB-forbindelse oprettet (${rv(o)}).`),this.readLoopDone=this.startReadLoop(l)}async startReadLoop(l){var d,p,_;this.readLoopActive=!0;const o=new TextDecoder;this.reader=((d=l.readable)==null?void 0:d.getReader())??null;const s=this.reader;if(s)try{for(;this.readLoopActive;){const{value:m,done:g}=await s.read();if(g)break;m&&this.consumeText(o.decode(m,{stream:!0}))}}catch(m){this.readLoopActive&&((_=(p=this.events).onLog)==null||_.call(p,"error",m instanceof Error?m.message:"USB-læsning stoppede."))}finally{try{s.releaseLock()}catch{}this.reader===s&&(this.reader=null),this.readLoopActive&&!this.disconnecting&&this.port===l&&this.closeAfterUnexpectedReadEnd(l)}}async closeAfterUnexpectedReadEnd(l){var p,_;const o=this.connected||this.port===l;this.disconnecting=!0,this.readLoopActive=!1;const s=this.writer,d=s==null?void 0:s.closed.catch(()=>{});try{await(s==null?void 0:s.close()),await d}catch{try{await(s==null?void 0:s.abort("disconnect"))}catch{}}try{s==null||s.releaseLock()}catch{}this.writer===s&&(this.writer=null);try{await l.close()}catch{}this.port===l&&(this.port=null),this.buffer="",this.readLoopDone=null,this.disconnecting=!1,o&&((_=(p=this.events).onDisconnect)==null||_.call(p))}consumeText(l){var o,s,d,p;(s=(o=this.events).onData)==null||s.call(o,l);for(const _ of this.dataListeners)_(l);for(this.buffer+=l;this.buffer.includes(`
`);){const _=this.buffer.indexOf(`
`),m=this.buffer.slice(0,_).replace(/\r$/,"");this.buffer=this.buffer.slice(_+1),(p=(d=this.events).onLine)==null||p.call(d,m)}}}function rv(i){const l=i.usbVendorId!==void 0?`VID ${i.usbVendorId.toString(16).padStart(4,"0")}`:"ukendt VID",o=i.usbProductId!==void 0?`PID ${i.usbProductId.toString(16).padStart(4,"0")}`:"ukendt PID";return`${l}, ${o}`}const Xh=15e3,ih=64*1024,sh=1e5,Kh=new URL("/micropython/micropython.mjs",window.location.origin).toString(),lv=64*1024,oh=8;function Qh(){return typeof SharedArrayBuffer<"u"&&globalThis.crossOriginIsolated===!0}function av(){return Qh()?new SharedArrayBuffer(lv):null}function iv(i,l){const o=new Int32Array(i,0,2),s=new Uint8Array(i),d=i.byteLength-oh,p=new TextEncoder().encode(l+`
`);let _=Atomics.load(o,0);for(const m of p)s[oh+_%d]=m,_+=1;Atomics.store(o,0,_),Atomics.notify(o,0)}const sv=new Set(["bluetooth","machine","network","PicoRobotics","rp2","ubluetooth"]);class ov{constructor(){_e(this,"worker",null);_e(this,"pending",null);_e(this,"nextId",0)}send(l,o={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython-terminalen er optaget. Stop den, eller vent på at kommandoen bliver færdig.",timedOut:!1,unavailable:!1});const s=++this.nextId,d=o.timeoutMs??Xh,p=this.ensureWorker();return new Promise(_=>{const m=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython-terminalen stoppede, fordi kommandoen tog for lang tid. Tjek for uendelige løkker.",timedOut:!0,unavailable:!1}),this.restartWorker()},d);this.pending={id:s,timer:m,onOutput:o.onOutput,resolve:_},p.postMessage({type:"run",id:s,code:uv(l),runtimeUrl:Kh})})}reset(){this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),this.restartWorker()}dispose(){var l;this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),(l=this.worker)==null||l.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const l=new Worker(new URL(""+new URL("offlineMicroPython.worker-B_-Tbi7X.js",import.meta.url).href,import.meta.url),{type:"module"});return l.onmessage=o=>this.handleMessage(o.data),l.onerror=o=>{this.finish({ok:!1,output:"",error:o.message||"Browser-MicroPython-terminalen fejlede i browser-worker.",timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=l,l}handleMessage(l){var s;const o=this.pending;if(!(!o||l.id!==o.id||l.type==="ready")){if(l.type==="stdout"){(s=o.onOutput)==null||s.call(o,l.text);return}if(l.type!=="stdin-wait"){if(l.type==="unavailable"){this.finish({ok:!1,output:"",error:l.error,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:l.ok,output:l.output,error:l.error,timedOut:!1,unavailable:!1})}}}finish(l){const o=this.pending;o&&(window.clearTimeout(o.timer),this.pending=null,o.resolve(l))}restartWorker(){var l;(l=this.worker)==null||l.terminate(),this.worker=null}}class cv{constructor(){_e(this,"worker",null);_e(this,"pending",null);_e(this,"nextId",0);_e(this,"stdinSab",null)}run(l,o={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython kører allerede kode. Stop den først.",issues:[],timedOut:!1,unavailable:!1});const s=typeof o=="number"?o:o.timeoutMs===null?null:o.timeoutMs??Xh,d=typeof o=="number"?void 0:o.onOutput,p=typeof o=="number"?void 0:o.onWaitingForInput,_=typeof o=="number"?void 0:o.signal,m=Xd(l,{allowInput:!0});if(m.some(k=>k.level==="error"))return Promise.resolve({ok:!1,output:"",error:"",issues:m,timedOut:!1,unavailable:!1});const g=++this.nextId,b=this.ensureWorker(),w=av();return this.stdinSab=w,new Promise(k=>{const T=I=>this.finish(I),U=()=>{this.restartWorker(),T({ok:!1,output:"",error:"",issues:m,timedOut:!1,unavailable:!1})},N=s===null?null:window.setTimeout(()=>{T({ok:!1,output:"",error:"Browser-MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:m,timedOut:!0,unavailable:!1}),this.restartWorker()},s);if(this.pending={id:g,timer:N,timeoutMs:s,issues:m,onOutput:d,onWaitingForInput:p,signal:_,abort:U,resolve:k},_!=null&&_.aborted){U();return}_==null||_.addEventListener("abort",U,{once:!0});const G={type:"run",id:g,code:l,runtimeUrl:Kh,interactive:!0,sab:w??void 0};b.postMessage(G)})}sendInput(l){const o=this.pending;!o||!this.stdinSab||(this.refreshTimeout(o),iv(this.stdinSab,l))}stop(){const l=this.pending;l&&(this.restartWorker(),this.finish({ok:!1,output:"",error:"Browser-MicroPython blev stoppet.",issues:l.issues,timedOut:!1,unavailable:!1}))}dispose(){var l;this.finish({ok:!1,output:"",error:"",issues:[],timedOut:!1,unavailable:!1}),(l=this.worker)==null||l.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const l=new Worker(new URL(""+new URL("offlineMicroPython.worker-B_-Tbi7X.js",import.meta.url).href,import.meta.url),{type:"module"});return l.onmessage=o=>this.handleMessage(o.data),l.onerror=o=>{const s=this.pending;this.finish({ok:!1,output:"",error:o.message||"Offline MicroPython fejlede i browser-worker.",issues:(s==null?void 0:s.issues)??[],timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=l,l}handleMessage(l){var s,d;const o=this.pending;if(!(!o||l.id!==o.id||l.type==="ready")){if(l.type==="stdout"){this.refreshTimeout(o),(s=o.onOutput)==null||s.call(o,l.text);return}if(l.type==="stdin-wait"){l.waiting&&this.refreshTimeout(o),(d=o.onWaitingForInput)==null||d.call(o,l.waiting);return}if(l.type==="unavailable"){this.finish({ok:!1,output:"",error:l.error,issues:o.issues,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:l.ok,output:l.output,error:l.error,issues:o.issues,timedOut:!1,unavailable:!1}),this.restartWorker()}}finish(l){var s,d;const o=this.pending;o&&(o.timer!==null&&window.clearTimeout(o.timer),(s=o.signal)==null||s.removeEventListener("abort",o.abort),this.pending=null,(d=o.onWaitingForInput)==null||d.call(o,!1),o.resolve(l))}refreshTimeout(l){l.timeoutMs!==null&&(l.timer!==null&&window.clearTimeout(l.timer),l.timer=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:l.issues,timedOut:!0,unavailable:!1}),this.restartWorker()},l.timeoutMs))}restartWorker(){var l;(l=this.worker)==null||l.terminate(),this.worker=null,this.stdinSab=null}}function uv(i){const l=JSON.stringify(i);return["try:",`    __pico_repl_value = eval(${l})`,"    if __pico_repl_value is not None:","        print(repr(__pico_repl_value))","except SyntaxError:",`    exec(${l})`,"finally:","    try:","        del __pico_repl_value","    except Exception:","        pass"].join(`
`)}function Xd(i,l={}){const o=[],s=new Blob([i]).size;s>ih&&o.push({level:"error",text:`Koden er ${s} bytes. Offline MicroPython kører kun små programmer op til ${ih} bytes.`});const d=i.split(/\r?\n/);for(let p=0;p<d.length;p+=1){const _=p+1,m=_c(d[p]).trim();if(!m)continue;const g=fv(m);g&&sv.has(g)&&o.push({level:"error",line:_,text:`${g} virker kun på Picoen. Forbind en Pico for at køre denne kode.`}),!l.allowInput&&dv(d[p])&&o.push({level:"error",line:_,text:"input() virker i hele programmer. Skriv programmet i editoren og tryk Kør, eller kør filen på Pico via USB."});const b=m.match(/\brange\(\s*(-?\d+)\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\)/);b&&mv(b)>sh&&o.push({level:"error",line:_,text:`range(...) er for stor til offline kørsel. Brug højst ${sh} gentagelser.`})}for(const p of hv(d))o.push({level:"warning",text:`Funktionen ${p} ser rekursiv ud. Hvis den ikke stopper, afbryder offline MicroPython efter få sekunder.`});return o}function _c(i){let l=null;for(let o=0;o<i.length;o+=1){const s=i[o];if((s==='"'||s==="'")&&i[o-1]!=="\\"&&(l=l===s?null:l??s),s==="#"&&!l)return i.slice(0,o)}return i}function dv(i){const l=_c(i);let o=null;for(let s=0;s<l.length;s+=1){const d=l[s];if((d==='"'||d==="'")&&l[s-1]!=="\\"){o=o===d?null:o??d;continue}if(!o&&!(!ch(l[s-1])||l.slice(s,s+5)!=="input")&&ch(l[s+5])&&l.slice(s+5).trimStart().startsWith("("))return!0}return!1}function ch(i){return!i||!/[A-Za-z0-9_]/.test(i)}function fv(i){const l=i.match(/^import\s+([A-Za-z_]\w*)/);if(l)return l[1];const o=i.match(/^from\s+([A-Za-z_]\w*)\s+import\b/);return(o==null?void 0:o[1])??null}function uh(i){const l=i.match(/^\s*/);return(l==null?void 0:l[0].replace(/\t/g,"    ").length)??0}function mv(i){const l=Number(i[1]),o=i[2]===void 0?void 0:Number(i[2]),s=i[3]===void 0?1:Number(i[3]);if(s===0)return Number.POSITIVE_INFINITY;const _=(o===void 0?l:o)-(o===void 0?0:l);return _>0&&s<0||_<0&&s>0?0:Math.ceil(Math.abs(_/s))}function hv(i){const l=new Set;for(let o=0;o<i.length;o+=1){const s=_c(i[o]).trim().match(/^def\s+([A-Za-z_]\w*)\s*\(/);if(!s)continue;const d=s[1],p=uh(i[o]);for(let _=o+1;_<i.length;_+=1){if(!i[_].trim())continue;if(uh(i[_])<=p)break;if(new RegExp(`\\b${d}\\s*\\(`).test(_c(i[_]))){l.add(d);break}}}return[...l]}const pv=/^(for|if|while|def|class|elif|else|try|except|finally|with)\b/;function gv(i,l){var w;const o=i.trim(),s=l.split(/\r?\n/),d=_v(o),p=d?s[d-1]??"":"",_=vv(s,d),m=o.split(/\r?\n/).filter(Boolean).at(-1)??"";if(/KeyboardInterrupt/.test(m))return{simple:"Programmet blev stoppet.",technical:o,line:d};if(/MemoryError/.test(m))return{simple:`Picoen eller browserens MicroPython løb tør for hukommelse${d?` omkring linje ${d}`:""}.`,technical:o,line:d};if(/RecursionError/.test(m))return{simple:`En funktion kalder sig selv for mange gange${d?` omkring linje ${d}`:""}.`,technical:o,line:d};const g=m.match(/UnboundLocalError:\s+local variable ['"](.+?)['"]/);if(g)return{simple:`Variablen ${g[1]} bruges inde i en funktion, før den har fået en værdi${d?` på linje ${d}`:""}.`,technical:o,line:d};const b=m.match(/NameError:\s+name ['"](.+?)['"] (?:isn't|is not) defined/);if(b)return{simple:wv(p,b[1])?`Teksten ${b[1]} mangler måske citationstegn${d?` på linje ${d}`:""}.`:`Python kender ikke navnet ${b[1]}${d?` på linje ${d}`:""}.`,technical:o,line:d};if(/ZeroDivisionError/.test(m))return{simple:`Kan ikke dividere med 0${d?` på linje ${d}`:""}.`,technical:o,line:d};if(/IndentationError:\s+unexpected indent/.test(m))return{simple:`Der er for meget indrykning${d?` på linje ${d}`:""}.`,technical:o,line:d};if(/IndentationError/.test(m))return{simple:`Mangler indrykning${d?` på linje ${d}`:""}.`,technical:o,line:d};if(/ImportError|ModuleNotFoundError/.test(m)){const k=(w=m.match(/['"](.+?)['"]/))==null?void 0:w[1];return{simple:`Python kan ikke finde modulet${k?` ${k}`:""}.`,technical:o,line:d}}if(/OSError/.test(m))return/ENOENT|No such file|Errno\s+2/.test(m)?{simple:`Python kan ikke finde filen${d?` på linje ${d}`:""}.`,technical:o,line:d}:/EACCES|permission|denied/i.test(m)?{simple:`Python har ikke adgang til filen eller enheden${d?` på linje ${d}`:""}.`,technical:o,line:d}:{simple:`Der opstod en fejl med en fil eller en enhed${d?` omkring linje ${d}`:""}.`,technical:o,line:d};if(/SyntaxError/.test(m)){if(/invalid syntax/.test(m)&&_.text.trim().endsWith(","))return{simple:`Linje ${_.line??d} slutter med komma. Tjek om der mangler noget efter kommaet.`,technical:o,line:_.line??d};const k=Kd(p,d)??Kd(_.text,_.line)??bv(s,d);return k?{simple:`Mangler måske : efter linje ${k.line}.`,technical:o,line:k.line}:d&&_.text.trim().endsWith(":")&&p.trim()&&!/^\s+/.test(p)?{simple:`Mangler måske indrykning på linje ${d}.`,technical:o,line:d}:xv(p)?{simple:`Tekst mangler måske citationstegn${d?` på linje ${d}`:""}.`,technical:o,line:d}:yv(p)?{simple:`Tekst mangler måske et afsluttende citationstegn${d?` på linje ${d}`:""}.`,technical:o,line:d}:kv(p)?{simple:`Mangler måske en afsluttende parentes${d?` på linje ${d}`:""}.`,technical:o,line:d}:Sv(p)?{simple:`Der er måske en parentes for meget${d?` på linje ${d}`:""}.`,technical:o,line:d}:{simple:`Python fandt en syntaksfejl${d?` omkring linje ${d}`:""}.`,technical:o,line:d}}return/TypeError/.test(m)?/takes .* positional arguments? but .* given/.test(m)||/function takes/.test(m)?{simple:`En funktion får for mange eller for få værdier${d?` på linje ${d}`:""}.`,technical:o,line:d}:/unsupported operand type/.test(m)?{simple:`To værdier kan ikke bruges sammen på den måde${d?` på linje ${d}`:""}.`,technical:o,line:d}:/not callable/.test(m)?{simple:`Der bliver brugt parenteser efter noget, som ikke er en funktion${d?` på linje ${d}`:""}.`,technical:o,line:d}:{simple:`En værdi har den forkerte type${d?` på linje ${d}`:""}.`,technical:o,line:d}:/IndexError/.test(m)?{simple:`Listen har ikke et element på den plads${d?` på linje ${d}`:""}.`,technical:o,line:d}:/KeyError/.test(m)?{simple:`Ordbogen mangler den nøgle${d?` på linje ${d}`:""}.`,technical:o,line:d}:/AttributeError/.test(m)?{simple:`Den ting har ikke den kommando${d?` på linje ${d}`:""}.`,technical:o,line:d}:/ValueError/.test(m)?/invalid literal for int/.test(m)?{simple:`Teksten kan ikke laves om til et heltal${d?` på linje ${d}`:""}.`,technical:o,line:d}:{simple:`Værdien passer ikke her${d?` på linje ${d}`:""}.`,technical:o,line:d}:{simple:`Python fandt en fejl${d?` omkring linje ${d}`:""}.`,technical:o,line:d}}function _v(i){var d;const o=(d=[...i.matchAll(/line\s+(\d+)/g)].at(-1))==null?void 0:d[1];if(!o)return;const s=parseInt(o,10);return Number.isFinite(s)&&s>0?s:void 0}function vv(i,l){if(!l)return{text:""};for(let o=l-2;o>=0;o-=1){const s=i[o]??"";if(s.trim())return{line:o+1,text:s}}return{text:""}}function Kd(i,l){if(!l)return null;const o=i.trim();return!pv.test(o)||o.endsWith(":")?null:{line:l}}function bv(i,l){const o=l?Math.min(i.length,l):i.length,s=Math.max(0,o-4);for(let d=o-1;d>=s;d-=1){const p=Kd(i[d]??"",d+1);if(p)return p}return null}function yv(i){const l=(i.match(/'/g)??[]).length,o=(i.match(/"/g)??[]).length;return l%2===1||o%2===1}function xv(i){var s,d;const o=(d=(s=i.trim().match(/^print\((.+)\)$/))==null?void 0:s[1])==null?void 0:d.trim();return!o||/['"]/.test(o)?!1:/\s/.test(o)&&/[a-zA-ZæøåÆØÅ]/.test(o)}function wv(i,l){const o=i.trim();return!!l&&/[A-Za-zæøåÆØÅ]/.test(l)&&(o.startsWith("print(")||o.includes(`= ${l}`))}function kv(i){return Wh(i)>0}function Sv(i){return Wh(i)<0}function Wh(i){let l=0,o=null;for(let s=0;s<i.length;s+=1){const d=i[s];if((d==='"'||d==="'")&&i[s-1]!=="\\"){o=o===d?null:o??d;continue}o||((d==="("||d==="["||d==="{")&&(l+=1),(d===")"||d==="]"||d==="}")&&(l-=1))}return l}const Qd="/min_kode.py",Zh=`print('Hej fra Pico Kontrol Panel')
`,Ev=500,Tv=1200,ps="Backup-filnavne er reserveret til versionshistorik. Vælg et andet navn.";function Wt(i,l){return`${i}:${l}`}function Mv(i){return new Promise(l=>window.setTimeout(l,i))}function jv(){const i=ae(f=>f.toggleSideMenu),l=ae(f=>f.askConfirm),o=ae(f=>f.picoIdeOrigin),s=ae(f=>f.active),d=ae(f=>f.isBleConnected),p=ae(f=>f.bleListFiles),_=ae(f=>f.bleReadText),m=ae(f=>f.bleWriteText),g=ae(f=>f.bleDeleteFile),b=ae(f=>f.bleRestartAndReconnect),[w,k]=A.useState(!1),[T,U]=A.useState(!1),[N,G]=A.useState([]),[I,V]=A.useState(!1),[X,P]=A.useState([]),[re,ve]=A.useState(null),[ce,W]=A.useState(()=>ic(tc())),[Z,we]=A.useState(Qd),[Ee,ze]=A.useState("local"),[J,Ne]=A.useState(()=>{var f;return((f=ic(tc()).find(v=>v.path===Qd))==null?void 0:f.content)??Zh}),[je,ue]=A.useState([]),[B,ne]=A.useState(!1),[pe,me]=A.useState(""),[xe,E]=A.useState(""),[z,te]=A.useState(null),[le,se]=A.useState(!1),[H,D]=A.useState(null),[oe,ye]=A.useState(!1),[Ue,fe]=A.useState({}),[Le,Ce]=A.useState(!1),[Ke,st]=A.useState(0),[kt,Ot]=A.useState(()=>{var f,v;return((f=Cl.find(x=>x.board==="Raspberry Pi Pico W"))==null?void 0:f.board)??((v=Cl[0])==null?void 0:v.board)??""}),[Zt,Cn]=A.useState(()=>{var f,v;return((f=Cl.find(x=>x.board==="Raspberry Pi Pico W"))==null?void 0:f.version)??((v=Cl[0])==null?void 0:v.version)??""}),[Jt,Mt]=A.useState(!1),[yn,yr]=A.useState({top:0,left:0}),[dt,Kn]=A.useState(!1),[lr,zl]=A.useState(!1),[Jr,ar]=A.useState(!1),[Ul,Ht]=A.useState(!0),[he,qe]=A.useState(""),[Qe,bt]=A.useState([]),[ot,Qn]=A.useState(null),[xr,Wn]=A.useState(!1),[un,Dn]=A.useState({}),[xn,Lt]=A.useState({}),[We,yt]=A.useState(null),[St,ln]=A.useState(null),[ci,ir]=A.useState(""),[el,Ts]=A.useState(()=>Sm().clearTerminalOnRun),[sr,Ms]=A.useState(()=>Sm().simplifiedErrors),[ql,ui]=A.useState(()=>typeof navigator<"u"?hh(navigator):!1),Hl=A.useRef(null),Zn=A.useRef(null),Je=A.useRef(null),jt=A.useRef(null),gt=A.useRef(null),or=A.useRef(null),Vl=A.useRef(null),ga=A.useRef(null),_a=A.useRef(null),wr=A.useRef(null),cr=A.useRef(null),dn=A.useRef(!1),fn=A.useRef(!1),On=A.useRef(!1),an=A.useRef(""),wn=A.useRef(null),ft=A.useRef(null),ur=A.useRef(null),va=A.useRef(null),en=A.useRef(null),Ln=A.useRef(null),kr=A.useRef(0),Sr=A.useRef(null),Er=A.useRef(null),js=A.useRef(null),dr=A.useRef(null),Tr=A.useRef([]),mn=A.useRef([]),Bt=A.useRef(null),Mr=tv(),Te=o==="control"&&!!s&&d(),Il=Te?(s==null?void 0:s.deviceID)??"ble":null,Ns=Math.max(1,J.split(`
`).length),ba=new Blob([J]).size,wc=Ee==="pico"?"Picoen":"browseren",hn=A.useMemo(()=>[...new Set(Cl.map(f=>f.board))],[]),jr=A.useMemo(()=>Cl.filter(f=>f.board===kt),[kt]),Nr=Cl.find(f=>f.board===kt&&f.version===Zt)??jr[0]??Cl[0],Pl=I||!!re||dt||lr,Gt=Ee==="pico",ya=Gt?dt:lr,sn=Gt&&dt&&w&&!Te||!Gt&&lr&&!!ur.current&&Jr,tl=xr||ya&&!sn,kc=sn?"stdin":">>>",di=sn?Gt?"Input til kørende Pico-kode":"Input til kørende Browser-MicroPython":Gt?"Pico MicroPython":"Browser-MicroPython",xa=A.useMemo(()=>{const f=new nv({onData:v=>{fn.current||!dn.current||(an.current=(an.current+v).slice(-240),/(^|\r?\n)>>> ?$/.test(an.current)&&ka())},onLine:v=>{if(fn.current)return;const x=v.trimEnd();if(On.current&&x.trim()){$("info",x);return}if(dn.current&&Ec(x)){ka();return}dn.current&&x.trim()&&!wa(x)&&!x.includes("raw REPL")&&$("info",x)},onLog:$,onDisconnect:()=>{k(!1),Kn(!1),Wn(!1),dn.current=!1,On.current=!1,on(),an.current="",Vt(),$("warning","USB-forbindelse lukket.")}});return Hl.current=f,f},[]);function $(f,v){G(x=>[...x.slice(-140),{level:f,text:v}])}function Sc(f){G(v=>[...v.slice(-140),{level:"info",text:f,variant:"input"}])}function Ec(f){return f.trim()===">>>"}function wa(f){return f.trimStart().startsWith(">>> import builtins as _pkp_builtins; exec(")}function on(){wn.current!==null&&(window.clearTimeout(wn.current),wn.current=null)}function ka(){!dn.current||wn.current!==null||(wn.current=window.setTimeout(()=>{wn.current=null,dn.current&&(Kn(!1),dn.current=!1,an.current="",$("success","Pico-koden er færdig."),Sa())},0))}function Sa(){const f=Je.current;f&&vi(f,!1)}function Jn(f,v=J,x="error"){const R=gv(f,v);G(j=>[...j.slice(-140),{level:x,text:R.simple,technical:R.technical}])}function it(f,v,x=Ee){we(f),ze(x),Ne(v),Lt(R=>({...R,[Wt(x,f)]:v})),nl()}function fi(f,v="pico"){we(f),ze(v),Ne(""),yt(null),yr({top:0,left:0}),nl()}function nl(){Tr.current=[],mn.current=[],Bt.current=null}function rl(){const f=gt.current;return{content:J,selectionStart:(f==null?void 0:f.selectionStart)??J.length,selectionEnd:(f==null?void 0:f.selectionEnd)??(f==null?void 0:f.selectionStart)??J.length}}function Fl(f){const v=Tr.current,x=v.at(-1);(x==null?void 0:x.content)===f.content&&x.selectionStart===f.selectionStart&&x.selectionEnd===f.selectionEnd||(v.push(f),v.length>Ev&&v.shift(),mn.current=[])}function er(f,v){let x=0;const R=Math.min(f.length,v.length);for(;x<R&&f[x]===v[x];)x+=1;let j=f.length,ee=v.length;for(;j>x&&ee>x&&f[j-1]===v[ee-1];)j-=1,ee-=1;const de=f.slice(x,j),Ge=v.slice(x,ee),Se=Ge&&!de?"insert":de&&!Ge?"delete":"replace",$e=Ge.at(-1)??"";return{kind:Se,boundaryAfter:Se==="insert"&&/[\s.,:;()[\]{}'"`+\-*/%=<>!?]/.test($e)}}function mi(f,v){if(v!=="typing")return Bt.current=null,!0;const x=Date.now(),R=er(J,f),j=Bt.current,ee=j!==null&&j.path===Z&&j.source===Ee&&j.kind===R.kind&&j.kind!=="replace"&&!j.boundaryAfter&&x-j.at<=Tv;return Bt.current={path:Z,source:Ee,kind:R.kind,at:x,boundaryAfter:R.boundaryAfter},!ee}function ll(f){Ne(f.content),Lt(v=>({...v,[Wt(Ee,Z)]:f.content})),ir(""),yt(null),window.requestAnimationFrame(()=>{const v=gt.current;v&&(v.focus(),v.selectionStart=Math.min(f.selectionStart,f.content.length),v.selectionEnd=Math.min(f.selectionEnd,f.content.length))})}function fr(){const f=Tr.current.pop();return f?(Bt.current=null,mn.current.push(rl()),ll(f),!0):!1}function Ea(){const f=mn.current.pop();return f?(Bt.current=null,Tr.current.push(rl()),ll(f),!0):!1}function kn(f,v=(ee=>(ee=gt.current)==null?void 0:ee.selectionStart)()??f.length,x=rl(),R=v,j="programmatic"){x&&f!==J&&mi(f,j)&&Fl(x),Ne(f),Lt(de=>({...de,[Wt(Ee,Z)]:f})),ir(""),It(f,v),window.requestAnimationFrame(()=>{const de=gt.current;de&&(de.selectionStart=Math.min(v,f.length),de.selectionEnd=Math.min(R,f.length))})}function al(f,v=Ee){Lt(x=>{const R=Wt(v,f);if(!(R in x))return x;const j={...x};return delete j[R],j})}function Ta(){return un[Z]===J}function zt(f,v){Dn(x=>({...x,[f]:v}))}function hi(f,v){zt(f,v),Lt(x=>({...x,[Wt("pico",f)]:v})),Ee==="pico"&&Z===f&&Ne(v)}function Vt(){P([]),ue([]),Dn({}),Lt({}),yt(null),we(f=>{const v=ic(tc());if(v.find(j=>j.path===f))return f;const R=v[0];return ze("local"),Ne(R.content),nl(),R.path})}function mt(f){mr(),D({value:100,label:f}),dr.current=window.setTimeout(()=>{dr.current=null,D(null)},900)}function mr(){dr.current!==null&&(window.clearTimeout(dr.current),dr.current=null)}function Gl(){return H?u.jsxs("div",{className:"ide-task-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(H.value),children:[u.jsxs("div",{children:[u.jsx("span",{children:H.label}),u.jsxs("strong",{children:[Math.round(H.value),"%"]}),H.cancellable&&u.jsx("button",{className:"ide-task-cancel",type:"button",onClick:Tc,"aria-label":"Stop handling",title:"Stop",children:u.jsx(Dt,{name:"delete",size:18})})]}),u.jsx("b",{"aria-hidden":"true",children:u.jsx("i",{style:{width:`${Math.max(2,Math.min(100,H.value))}%`}})})]}):null}function Tc(){en.current&&Rr("Stopper læsning...",!0,!0)}function Rr(f="Stopper læsning...",v=!1,x=!1){var R;mr(),Er.current=null,kr.current+=1,(R=en.current)==null||R.abort(),en.current=null,Sr.current=null,ve(null),V(!1),D(v?{value:(H==null?void 0:H.value)??0,label:f,cancellable:!1}:null),x&&$("warning","Stopper BLE-læsning efter den aktuelle datapakke.")}function pi(f){var v;if(!(Sr.current===f||Er.current===f)){if(Er.current=f,Ln.current){kr.current+=1,(v=en.current)==null||v.abort(),en.current=null,Sr.current=null,fi(f),ve(f),V(!0),mr(),D({value:2,label:`Skifter til ${Ae(f)}...`,cancellable:!0});return}il()}}function il(){if(Ln.current)return;const f=Er.current;if(!f)return;Er.current=null;const v=kr.current+1;kr.current=v;const x=new AbortController;en.current=x,Sr.current=f,fi(f),ve(f),V(!0),mr(),D({value:12,label:`Indlæser ${Ae(f)}...`,cancellable:!0});const R=(async()=>{try{const j=await _(f,(ee,de)=>{kr.current===v&&D({value:ee,label:de,cancellable:!0})},x.signal);if(x.signal.aborted||kr.current!==v)return;it(f,j,"pico"),zt(f,j),mt("Fil indlæst")}catch(j){if(kr.current!==v)return;Av(j)||x.signal.aborted?$("info",`Stoppede læsning af ${Ae(f)}.`):(D(null),$("error",j instanceof Error?j.message:"BLE læsning fejlede."))}})();Ln.current=R,R.finally(()=>{if(Ln.current!==R)return;Ln.current=null,en.current===x&&(en.current=null),Sr.current===f&&(Sr.current=null),!!Er.current||(ve(null),V(!1),x.signal.aborted&&D(null)),il()})}async function Ar(f){const v=fn.current;fn.current=!0;try{return await f()}finally{fn.current=v}}A.useEffect(()=>{if(!Ul)return;const f=_a.current;f&&(f.scrollTop=f.scrollHeight)},[N,Ul]),A.useEffect(()=>{V2({clearTerminalOnRun:el,simplifiedErrors:sr})},[el,sr]),A.useEffect(()=>{var f;jr.some(v=>v.version===Zt)||Cn(((f=jr[0])==null?void 0:f.version)??"")},[jr,Zt]),A.useEffect(()=>{ui(hh(navigator))},[]),A.useEffect(()=>{const f=()=>{const v=Hl.current;Zn.current=null,Je.current=null,Hl.current=null,v==null||v.disconnect().catch(()=>{})};return window.addEventListener("pagehide",f),()=>{var v,x;mr(),(v=ft.current)==null||v.dispose(),ft.current=null,(x=ur.current)==null||x.dispose(),ur.current=null,window.removeEventListener("pagehide",f),f()}},[]),A.useEffect(()=>{const f=v=>{!(v.ctrlKey||v.metaKey)||v.key.toLowerCase()!=="s"||(v.preventDefault(),!I&&Z.trim()&&!ql&&!le&&!z&&!B&&Ds())};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[Ee,Te,I,w,J,Z,ql,le,z,B]);function $l(f,v,x){W(R=>{const j=Vd(R,f,v,x);return ds(j),j})}function Rs(f,v){W(x=>{const R=x.find(Se=>Se.path===f),ee=xn[Wt("local",f)]??(R==null?void 0:R.content),de=ee!==void 0&&Dl(ee)!==Dl(v)?Vd(x,Fv(f,dc(x)),ee,!1):x,Ge=Vd(de,f,v,!1);return ds(Ge),Ge}),Lt(x=>({...x,[Wt("local",f)]:v})),Ee==="local"&&Z===f&&(Ne(v),ir(""),yt(null),nl())}const gi=Yv(X,ce,xn,w||Te);A.useEffect(()=>{Te&&_t()},[Te]),A.useEffect(()=>{const f=js.current;f&&f!==Il&&Vt(),js.current=Il},[Il]);async function Mc(){if(Mr.supported){U(!0);try{await xa.requestAndConnect();const f=new A_(xa);Zn.current=f,Je.current=new z_(f),k(!0),st(0),await f.interrupt(),await _i(f),$("success","Sendte stop-signal til Pico-terminalen."),await vi(Je.current),await As(Je.current)}catch(f){$("error",f instanceof Error?f.message:"USB-forbindelse mislykkedes.");try{await xa.disconnect()}catch(v){$("error",v instanceof Error?`USB-porten kunne ikke lukkes: ${v.message}`:"USB-porten kunne ikke lukkes.");return}st(v=>{const x=v+1;return x>=3&&($("info","USB-forbindelsen er mislykkedes flere gange. Hvis Picoen er i BOOTSEL eller mangler MicroPython, kan du bruge MicroPython-download."),Ce(!0)),x}),k(!1)}finally{U(!1)}}}async function _i(f){const v=await f.exec(`import sys
print(sys.implementation.name)
`,4e3);if(v.error||!v.output.toLowerCase().includes("micropython"))throw new Error("MicroPython blev ikke fundet på Picoen.")}async function jc(){var f;try{await((f=Hl.current)==null?void 0:f.disconnect()),Zn.current=null,Je.current=null,k(!1),Vt()}catch(v){$("error",v instanceof Error?`USB-porten kunne ikke lukkes: ${v.message}`:"USB-porten kunne ikke lukkes.")}}async function Bn(f){const v=Je.current;if(v){V(!0),fn.current=!0;try{await f(v)}catch(x){D(null),$("error",x instanceof Error?x.message:"USB filhandling fejlede.")}finally{fn.current=!1,V(!1)}}}async function _t(f=!0){if(Te){V(!0);try{const v=await p();P(v),f&&$("success",`Indlæste ${v.length} filer fra Pico via Bluetooth.`)}catch(v){$("error",v instanceof Error?v.message:"BLE filhandling fejlede.")}finally{V(!1)}return}await vi(Je.current,f)}async function vi(f,v=!0){if(f){V(!0);try{const x=await Ar(()=>f.list("/"));P(x),v&&$("success",`Indlæste ${x.length} filer fra Pico.`)}catch(x){$("error",x instanceof Error?x.message:"USB filhandling fejlede.")}finally{V(!1)}}}async function Yl(){if(Te){V(!0),D({value:4,label:"Tjekker biblioteker på Pico via Bluetooth..."});try{const f=await bi((v,x)=>D({value:v,label:x}));ue(f),mt("Fil-tjek færdigt")}catch(f){D(null),$("error",f instanceof Error?f.message:"BLE runtime check fejlede.")}finally{V(!1)}return}await As(Je.current)}async function bi(f){const v=[],x=ni.filter(j=>j.kind==="library"&&!Ol(j));let R=0;for(const j of ni){if(j.kind==="program"){v.push({...j,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}if(Ol(j)){v.push({...j,status:"unknown",detail:"Opdateres via USB"});continue}try{const ee=R/Math.max(1,x.length)*100,de=100/Math.max(1,x.length);$("info",`Tjekker ${j.label} på Pico via Bluetooth...`),f==null||f(Math.min(95,ee),`Tjekker ${j.label} på Pico...`);const Ge=await _(j.path,($e,vt)=>{f==null||f(Math.min(95,ee+$e/100*de),`${j.label}: ${vt}`)}),Se=Dl(Ge)===Dl(j.content);v.push({...j,status:Se?"ok":"outdated",detail:Se?"Matcher appens version":"Kan installeres via Bluetooth"})}catch{v.push({...j,status:"missing",detail:"Mangler på Pico"})}finally{R+=1}}return f==null||f(100,"Fil-tjek færdigt"),v}async function As(f){if(f){V(!0);try{const v=await Ar(()=>Cs(f)),x=v;ue(x)}catch(v){$("error",v instanceof Error?v.message:"Runtime check fejlede.")}finally{V(!1)}}}async function Cs(f){if(!f)return[];const v=[];for(const x of ni){if(x.kind==="program"){v.push({...x,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}try{const R=await f.readText(x.path),j=Dl(R)===Dl(x.content);v.push({...x,status:j?"ok":"outdated",detail:j?"Matcher appens version":"Matcher ikke appens version"})}catch{v.push({...x,status:"missing",detail:"Mangler på Pico"})}}return v}async function Nc(f=Z){if(Te){pi(f);return}ve(f),await Bn(async v=>{D({value:12,label:`Indlæser ${Ae(f)}...`});const x=await Rc(v,f);it(f,x,"pico"),zt(f,x),mt("Fil indlæst")}),ve(null)}async function Rc(f,v){var x;try{return await f.readText(v)}catch(R){await((x=Zn.current)==null?void 0:x.stop().catch(()=>{})),await Mv(120);try{return await f.readText(v)}catch{throw R}}}function yi(){se(!0)}async function Ds(){if(Ee==="pico"){if(!w&&!Te){$("error","Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.");return}await xi();return}Os()}function Os(){if(Ll(Z)){$("error",ps);return}$l(Z,J,!1),ze("local"),Lt(f=>({...f,[Wt("local",Z)]:J})),se(!1),$("success",`Gemte ${Ae(Z)} lokalt.`)}async function xi(){if(se(!1),Ll(Z))return D(null),$("error",ps),!1;if(D({value:0,label:"Starter gemning..."}),Te){V(!0);try{return await m(Z,J,(v,x)=>D({value:v,label:x})),zt(Z,J),ze("pico"),Lt(v=>({...v,[Wt("pico",Z)]:J})),mt("Gemt på Pico via Bluetooth"),$("success",`Gemte ${Ae(Z)} på Pico via Bluetooth.`),ac(Z)&&(Mt(!0),$("warning","main.py er gemt. Genstart Picoen for at køre den nye version.")),await _t(!1),!0}catch(v){return D(null),$("error",v instanceof Error?v.message:"BLE gem fejlede."),!1}finally{V(!1)}}if(!Je.current)return D(null),!1;let f=!1;return await Bn(async v=>{Kl(Z,"pico")?await v.replaceTextSafely(Z,J,(x,R)=>D({value:x,label:R})):await v.writeText(Z,J,(x,R)=>D({value:x,label:R})),zt(Z,J),ze("pico"),Lt(x=>({...x,[Wt("pico",Z)]:J})),mt("Gemt på Pico via USB"),$("success",`Gemte ${Z}.`),await _t(),await Yl(),f=!0}),f}function Ls(){Bs(Ae(Z),J),se(!1),$("success",`Downloadede ${Ae(Z)}.`)}function Bs(f,v){const x=new Blob([v],{type:"text/plain;charset=utf-8"}),R=URL.createObjectURL(x),j=document.createElement("a");j.href=R,j.download=f,j.click(),URL.revokeObjectURL(R)}async function zs(f){V(!0),Mt(!1),D({value:10,label:"Genstarter Pico..."});try{await b(f)?(mt("Pico genforbundet"),$("success",f==="control"?"Pico genforbundet. Åbner kontrolpanelet.":"Pico genforbundet til Kodeværkstedet."),f==="ide"&&await _t()):(D(null),$("warning","Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet."))}catch(v){D(null),$("error",v instanceof Error?v.message:"Genstart/genforbindelse mislykkedes.")}finally{V(!1)}}function Us(f){var ee,de;const v=f??{path:Z,source:Ee},x=v.source==="pico"?"Pico":"browser",R=(f==null?void 0:f.versions.length)??(v.source==="pico"?((ee=ri(X).get(v.path))==null?void 0:ee.length)??0:((de=ri(dc(ce)).get(v.path))==null?void 0:de.length)??0),j=R>0?` Det sletter også filens versionshistorik (${R} gemte versioner).`:"";te(null),l({title:"Slet fil",message:`Vil du slette ${Ae(v.path)} fra ${x}?${j}`,confirmLabel:"Slet",onConfirm:()=>{Dc(v)}})}function Ac(){l({title:"Nulstil enhed",message:"Vil du nulstille Picoens enhedsindstillinger? Det sletter DeviceSettings.txt, så Picoen kan oprettes som en ny enhed igen. Kodefiler og startprogram bliver ikke slettet.",confirmLabel:"Nulstil",onConfirm:()=>{Cc()}})}async function Cc(){if(!Je.current){$("error","Forbind Picoen med USB først.");return}await Bn(async f=>{await f.delete("/DeviceSettings.txt").catch(v=>{const x=v instanceof Error?v.message:"";if(!/ENOENT|No such file|not found/i.test(x))throw v}),Dn(v=>{const x={...v};return delete x["/DeviceSettings.txt"],x}),al("/DeviceSettings.txt","pico"),$("success","DeviceSettings.txt er nulstillet. Afbryd og forbind Picoen igen, hvis kontrolpanelet allerede var åbent."),await _t()})}function qs(f,v,x){const R=gi.filter(de=>de.kind==="file"&&de.type==="file"),j=R.findIndex(de=>de.path===f&&de.source===v);if(j===-1)return null;const ee=de=>!!de&&!(de.path===f&&de.source===v)&&!(de.source===v&&x.has(de.path))&&!(Te&&Ol(de));for(const de of[!0,!1])for(let Ge=1;Ge<R.length;Ge+=1){const Se=R[j+Ge];if(ee(Se)&&(!de||Se.source===v))return Se;const $e=R[j-Ge];if(ee($e)&&(!de||$e.source===v))return $e}return null}function wi(f){if(f){Gs(f);return}const v=ic(tc())[0];it(v.path,xn[Wt("local",v.path)]??v.content,"local")}async function Dc(f){const v=f.path,x=f.source,R=v===Z&&x===Ee;if(x==="local"){const Se=ri(dc(ce)).get(v)??[],$e=new Set([v,...Se.map(ht=>ht.path)]),vt=R?qs(v,x,$e):null,tn=ce.filter(ht=>!$e.has(ht.path));W(tn),ds(tn);for(const ht of $e)al(ht,"local");R&&wi(vt);const Be=Se.length>0?` og ${Se.length} gemte versioner`:"";$("warning",`Slettede ${Ae(v)}${Be} fra browseren.`);return}const j=ri(X).get(v)??[],ee=[v,...j.map(Se=>Se.path)],de=R?qs(v,x,new Set(ee)):null;if(Te){V(!0);try{for(const $e of ee)await g($e);Dn($e=>{const vt={...$e};for(const tn of ee)delete vt[tn];return vt});for(const $e of ee)al($e,"pico");const Se=j.length>0?` og ${j.length} gemte versioner`:"";$("warning",`Slettede ${Ae(v)}${Se} på Pico via Bluetooth.`),await _t(),R&&wi(de)}catch(Se){$("error",Se instanceof Error?Se.message:"BLE sletning fejlede.")}finally{V(!1)}return}if(!Je.current){$("error","Ingen Pico-forbindelse. Kan ikke slette Pico-filen.");return}let Ge=!1;await Bn(async Se=>{for(const vt of ee)await Se.delete(vt);Dn(vt=>{const tn={...vt};for(const Be of ee)delete tn[Be];return tn});const $e=j.length>0?` og ${j.length} gemte versioner`:"";$("warning",`Slettede ${v}${$e}.`);for(const vt of ee)al(vt,"pico");await _t(),await Yl(),Ge=!0}),Ge&&R&&wi(de)}async function Oc(f){if(!f)return;const v=Nv(f.name);if(!v){$("error","Kun .py, .txt, .json og .csv kan importeres.");return}if(Ll(v)){$("error",ps);return}if(f.size>128*1024){$("error","Filen er for stor til Pico-værkstedet.");return}const x=await f.text();if(Ee==="local"){$l(v,x,!0),it(v,x,"local"),$("success",`Importerede ${Ae(v)} i browseren.`);return}if(!w&&!Te){$("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(Te&&Ol({path:v})){$("error","PicoBluetooth.py kan ikke importeres over Bluetooth, mens den holder forbindelsen i gang. Brug USB i stedet.");return}if(D({value:0,label:"Uploader fil til Pico..."}),Te){V(!0);try{await m(v,x,(j,ee)=>D({value:j,label:ee})),zt(v,x),it(v,x,"pico"),mt("Fil uploadet til Pico"),$("success",`Importerede ${Ae(v)} på Pico via Bluetooth.`),await _t()}catch(j){D(null),$("error",j instanceof Error?j.message:"Kunne ikke importere filen til Pico.")}finally{V(!1)}return}if(!Je.current){D(null),$("error","Ingen Pico-forbindelse. Kan ikke importere filen til Pico.");return}await Bn(async j=>{Kl(v,"pico")?await j.replaceTextSafely(v,x,(ee,de)=>D({value:ee,label:de})):await j.writeText(v,x,(ee,de)=>D({value:ee,label:de})),zt(v,x),it(v,x,"pico"),mt("Fil uploadet til Pico"),$("success",`Importerede ${Ae(v)} på Pico.`),await _t(),await Yl()})}async function ki(){me(""),ne(!0)}function Xl(){const f=dh(pe);if(!f)return;if(Ll(f)){$("error",ps);return}const v=Ee;if(Kl(f,v)){$("error",`Der findes allerede en fil med navnet ${Ae(f)} i ${v==="pico"?"Pico":"browseren"}.`);return}if(v==="local"){$l(f,"",!1),it(f,"","local"),ne(!1),$("success",`Oprettede ${Ae(f)} i browseren.`);return}Lc(f)}async function Lc(f){if(!w&&!Te){$("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(ne(!1),D({value:0,label:"Opretter fil på Pico..."}),Te){V(!0);try{await m(f,"",(v,x)=>D({value:v,label:x})),zt(f,""),it(f,"","pico"),mt("Fil oprettet på Pico"),$("success",`Oprettede ${Ae(f)} på Pico via Bluetooth.`),await _t()}catch(v){D(null),$("error",v instanceof Error?v.message:"Kunne ikke oprette fil på Pico.")}finally{V(!1)}return}if(!Je.current){D(null),$("error","Ingen Pico-forbindelse. Kan ikke oprette Pico-filen.");return}await Bn(async v=>{await v.writeText(f,"",(x,R)=>D({value:x,label:R})),zt(f,""),it(f,"","pico"),mt("Fil oprettet på Pico"),$("success",`Oprettede ${Ae(f)} på Pico.`),await _t()})}function Hs(f){f.type==="file"&&(te(f),E(Rv(f.path)))}async function Vs(f){if(!z)return;const v=z.path;if(te(null),z.source==="local"){const x=ce.find(R=>R.path===f.path);if(!x){$("error","Kunne ikke finde versionen i browseren.");return}Rs(v,x.content),it(v,x.content,"local"),$("success",`Gendannede ${Ae(f.path)} i browseren.`);return}if(D({value:0,label:"Gendanner version..."}),Te){V(!0);try{const x=await _(f.path);await m(v,x,(R,j)=>D({value:R,label:j})),zt(v,x),it(v,x,"pico"),mt("Version gendannet"),await _t(!1)}catch(x){D(null),$("error",x instanceof Error?x.message:"Kunne ikke gendanne versionen.")}finally{V(!1)}return}Je.current&&await Bn(async x=>{await x.replaceTextSafely(v,await x.readText(f.path),(j,ee)=>D({value:j,label:ee}));const R=await x.readText(v);zt(v,R),it(v,R,"pico"),mt("Version gendannet"),await _t()})}function Is(f){const v=(z==null?void 0:z.source)==="local"?"browseren":"Pico";l({title:"Slet version",message:`Vil du slette ${Ae(f.path)} fra ${v}?`,confirmLabel:"Slet",onConfirm:()=>{Ps(f)}})}async function Ps(f){if((z==null?void 0:z.source)==="local"){const v=ce.filter(x=>x.path!==f.path);W(v),ds(v),al(f.path,"local"),te(x=>x&&{...x,versions:x.versions.filter(R=>R.path!==f.path)}),$("warning",`Slettede ${Ae(f.path)} fra browserens versionshistorik.`);return}if(Te){V(!0);try{await g(f.path),await _t(!1),te(v=>v&&{...v,versions:v.versions.filter(x=>x.path!==f.path)})}catch(v){$("error",v instanceof Error?v.message:"Kunne ikke slette versionen.")}finally{V(!1)}return}Je.current&&await Bn(async v=>{await v.delete(f.path),await _t(!1),te(x=>x&&{...x,versions:x.versions.filter(R=>R.path!==f.path)})})}async function Fs(){var x;if(!z)return;const f=z,v=Gv(f.path,R=>Kl(R,f.source));if(!v){$("error",`Kunne ikke finde et ledigt filnavn til en kopi af ${Ae(f.path)}.`);return}if(f.source==="local"){const R=xn[Wt("local",f.path)]??((x=ce.find(j=>j.path===f.path))==null?void 0:x.content)??"";$l(v,R,!1),it(v,R,"local"),te(null),$("success",`Duplikerede ${Ae(f.path)} til ${Ae(v)} i browseren.`);return}if(te(null),D({value:0,label:"Duplikerer fil..."}),Te){V(!0);try{const R=un[f.path]??await _(f.path);await m(v,R,(j,ee)=>D({value:j,label:ee})),zt(v,R),it(v,R,"pico"),mt("Fil duplikeret"),await _t(!1),$("success",`Duplikerede ${Ae(f.path)} til ${Ae(v)} på Pico via Bluetooth.`)}catch(R){D(null),$("error",R instanceof Error?R.message:"Kunne ikke duplikere filen.")}finally{V(!1)}return}if(!Je.current){D(null),$("error","Ingen Pico-forbindelse. Kan ikke duplikere Pico-filen.");return}await Bn(async R=>{const j=await R.readText(f.path);await R.writeText(v,j,(ee,de)=>D({value:ee,label:de})),zt(v,j),it(v,j,"pico"),mt("Fil duplikeret"),await _t(!1),$("success",`Duplikerede ${Ae(f.path)} til ${Ae(v)} på Pico.`)})}async function sl(){if(!z)return;const f=z,v=Hd(xe,gs(f.path));if(!v||v===f.path)return;if(Ll(v)){$("error",ps);return}if(Kl(v,f.source)){$("error",`Der findes allerede en fil med navnet ${Ae(v)}.`);return}const x=f.source==="local",R=f.source==="pico";if(Te&&R&&(ac(f.path)||ac(v))){$("error","main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.");return}V(!0);try{if(R)if(Te){const j=un[f.path]??await _(f.path);await m(v,j,(ee,de)=>D({value:ee,label:de})),await g(f.path),Dn(ee=>({...yh(ee,f.path,v),[v]:j}))}else Je.current&&(await Ar(()=>Je.current.rename(f.path,v)),Dn(j=>yh(j,f.path,v)));x&&W(j=>{const ee=j.map(de=>de.path===f.path?{...de,path:v,updatedAt:Date.now()}:de);return ds(ee),ee}),Z===f.path&&Ee===f.source&&we(v),Lt(j=>Qv(j,f.source,f.path,v)),te(null),E(""),$("success",`Omdøbte ${Ae(f.path)} til ${Ae(v)}.`),R&&await _t()}catch(j){$("error",j instanceof Error?j.message:"Kunne ikke omdøbe filen.")}finally{D(null),V(!1)}}function Kl(f,v){return v==="pico"?X.some(x=>x.path===f):ce.some(x=>x.path===f)}function Gs(f){if(f.type!=="file"){Te&&Rr(void 0,!1),we(f.path),ze(f.source);return}if(Te&&Ol(f)){$("warning","PicoBluetooth.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.");return}if(f.source==="local"){Te&&Rr(void 0,!1);const x=ce.find(R=>R.path===f.path);it(f.path,xn[Wt("local",f.path)]??(x==null?void 0:x.content)??"","local");return}const v=Wt("pico",f.path);if(Object.prototype.hasOwnProperty.call(xn,v)){Te&&Rr(void 0,!1),it(f.path,xn[v],"pico");return}if(Object.prototype.hasOwnProperty.call(un,f.path)){Te&&Rr(void 0,!1),it(f.path,un[f.path],"pico");return}Nc(f.path)}async function $s(){if(!w&&!Te){const f=fh();ue(f),fe(mh(f)),ye(!0),D(null);return}V(!0),D({value:4,label:Te?"Tjekker biblioteker på Pico via Bluetooth...":"Tjekker biblioteker på Pico..."}),$("info",Te?"Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...":"Tjekker om Picoens biblioteker er opdaterede før installation...");try{const f=je.length>0?je:Te?await bi((v,x)=>D({value:v,label:x})):await Ar(()=>Cs(Je.current));ue(f),fe(mh(f)),ye(!0),D(null)}catch(f){D(null),$("error",f instanceof Error?f.message:"Fil-tjek før installation fejlede.")}finally{V(!1)}}async function Ys(){if(ye(!1),Te){V(!0);try{const v=(je.length>0?je:ni.map(R=>({...R,status:"unknown",detail:"Ikke tjekket"}))).filter(R=>Ue[R.id]&&!Ol(R));if(v.length===0){$("info","Ingen filer valgt til installation.");return}let x=null;D({value:0,label:"Starter installation..."});for(const[R,j]of v.entries()){$("info",`Installerer ${j.label} via Bluetooth...`);const ee=R/v.length*100,de=100/v.length;await m(j.path,j.content,(Ge,Se)=>{D({value:Math.min(99,ee+Ge/100*de),label:`${j.label}: ${Se}`})}),hi(j.path,j.content),$("success",`Installerede ${j.label}.`),j.kind==="library"&&(x=j),ac(j.path)&&Mt(!0)}mt("Installation færdig"),await _t(!1),await Yl(),x&&Xs(x)}catch(f){D(null),$("error",f instanceof Error?f.message:"BLE installation fejlede.")}finally{V(!1)}return}await Bn(async f=>{const x=(je.length>0?je:ni.map(j=>({...j,status:"unknown",detail:"Ikke tjekket"}))).filter(j=>Ue[j.id]);if(x.length===0){$("info","Ingen filer valgt til installation.");return}let R=null;D({value:0,label:"Starter installation..."});for(const[j,ee]of x.entries()){$("info",`Installerer ${ee.label}...`);const de=j/x.length*100,Ge=100/x.length,Se=await f.readText(ee.path).catch(()=>null);Se!==null&&Dl(Se)===Dl(ee.content)?(D({value:Math.min(99,de+Ge),label:`${ee.label}: Allerede nyeste version`}),$("info",`${ee.label} findes allerede i samme version.`)):(await f.replaceTextSafely(ee.path,ee.content,($e,vt)=>{D({value:Math.min(99,de+$e/100*Ge),label:`${ee.label}: ${vt}`})},{createBackup:!0}),$("success",`Installerede ${ee.label}.`)),hi(ee.path,ee.content),ee.kind==="library"&&(R=ee)}mt("Installation færdig"),await _t(!1),await Yl(),R&&Xs(R)})}function Si(){return(je.length>0?je:fh()).filter(v=>Ue[v.id])}function Ql(){const f=Si();if(f.length===0){$("info","Ingen filer valgt.");return}for(const v of f)Rs(v.path,v.content);ye(!1),$("success",`Gemte ${f.length} filer i browseren.`)}function Wl(){const f=Si();if(f.length===0){$("info","Ingen filer valgt.");return}f.forEach((v,x)=>{window.setTimeout(()=>{Bs(Ae(v.path),v.content)},x*120)}),ye(!1),$("success",`Starter download af ${f.length} filer.`)}function Xs(f){it(f.path,f.content,"pico"),zt(f.path,f.content),$("info",`Åbnede ${f.label} i editoren.`)}function Ma(f,v){fe(x=>{if(f.kind!=="program")return{...x,[f.id]:v};const R={...x};for(const j of je)j.kind==="program"&&(R[j.id]=!1);return R[f.id]=v,R})}async function Ks(){if(zc(),Te&&Ee==="pico"){$("warning","Bluetooth holder forbindelsen åben, så koden kan ikke køres direkte her. Gem filen, og genstart Picoen for at køre den.");return}if(Ee==="local"){await Qs();return}const f=Zn.current;if(!f){$("error",`${Ae(Z)} er gemt på Picoen, men der er ingen USB-forbindelse til Pico-terminalen.`);return}if(Z.endsWith(".py")){if(!Ta()&&($("info",`${Ae(Z)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`),!await xi())){$("error","Pico-forbindelsen blev afbrudt under gemning.");return}if(I)return;on(),an.current="",Ht(!0);try{await f.runFile(Z,()=>{on(),an.current="",On.current=!1,Kn(!0),dn.current=!0}),$("success",`Kører ${Ae(Z)}. Brug Stop for at afbryde.`)}catch(v){Kn(!1),dn.current=!1,on(),an.current="",$("error",v instanceof Error?v.message:"Kunne ikke starte koden.")}return}V(!0);try{const v=await f.exec(J,2e4);v.output.trim()&&$("info",v.output),v.error.trim()&&Jn(v.error,J),!v.output.trim()&&!v.error.trim()&&$("success","Koden kørte uden output.")}catch(v){$("error",v instanceof Error?v.message:"Kunne ikke køre koden.")}finally{V(!1)}}async function Qs(){const f=Xd(J,{allowInput:!0});if(f.some(R=>R.level==="error")){for(const R of f){const j=R.line?`Linje ${R.line}: `:"";$(R.level==="error"?"error":"warning",`${j}${R.text}`)}return}/\binput\s*\(/.test(J)&&!Qh()&&$("warning","input() i browseren kræver at siden genindlæses. Opdater siden (F5) og prøv igen.");const v=new AbortController;va.current=v;const x=new cv;ur.current=x,V(!0),zl(!0),ar(!1),Ht(!0),$("info",w?"Starter Browser-MicroPython for browser-filen.":"Starter Browser-MicroPython. Forbind Pico med USB for at køre på selve Picoen.");try{const R=[],j=await x.run(J,{timeoutMs:null,signal:v.signal,onOutput:Se=>{R.push(Se),$("info",Se)},onWaitingForInput:ar});for(const Se of j.issues){const $e=Se.line?`Linje ${Se.line}: `:"";$(Se.level==="error"?"error":"warning",`${$e}${Se.text}`)}const ee=[...R,j.output].filter(Boolean).join(`
`).trim(),de=j.output.trim();!j.error.trim()&&Cv(ee)?Jn(ee,J):(de&&$("info",de),j.error.trim()&&Jn(j.error,J,j.unavailable?"warning":"error")),j.ok&&!ee&&!j.error.trim()&&$("success","Browser-MicroPython kørte uden output.")}finally{va.current=null,ur.current=null,x.dispose(),zl(!1),ar(!1),V(!1)}}async function Ei(){var v,x,R;if(lr){(v=va.current)==null||v.abort(),(x=ur.current)==null||x.stop(),$("warning","Stoppede Browser-MicroPython."),Ht(!0);return}if(!Gt&&xr){(R=ft.current)==null||R.reset(),Wn(!1),$("warning","Stoppede Browser-MicroPython-terminalen. Variablerne i browser-terminalen blev nulstillet."),Ht(!0);return}const f=Zn.current;if(f)try{await f.stop(),$("warning","Stoppede koden på Pico.")}catch(j){$("error",j instanceof Error?j.message:"Kunne ikke stoppe koden.")}finally{Kn(!1),dn.current=!1,on(),an.current="",Ht(!0),Sa()}}function Ti(){const f=_a.current;if(!f)return;const v=f.scrollHeight-f.scrollTop-f.clientHeight<12;Ht(v)}function Ws(){G([]),Ht(!0)}function Zs(){window.requestAnimationFrame(()=>{const f=_a.current;f&&(f.scrollTop=f.scrollHeight)})}async function ja(){const f=sn?he:he.trimEnd();if(sn){if(!Gt){const R=ur.current;if(!R){$("warning","Browser-MicroPython kører ikke lige nu."),zn();return}qe(""),Ht(!0),Sc(f),R.sendInput(f),zn();return}const x=Zn.current;if(!x){$("warning","Pico-terminalen er ikke forbundet."),zn();return}qe(""),Ht(!0);try{await x.sendProgramInput(f)}catch(R){$("error",R instanceof Error?R.message:"Kunne ikke sende input til Pico-koden.")}finally{zn()}return}if(!f.trim())return;if(bt(x=>(x.at(-1)===f?x:[...x,f]).slice(-80)),Qn(null),ln(null),ya){$("warning",Gt?"Tryk Stop, før du skriver i Pico-terminalen.":"Stop offline MicroPython, før du skriver i browser-terminalen."),zn();return}if(!Gt){const x=Xd(f);if(x.some(j=>j.level==="error")){for(const j of x){const ee=j.line?"Linje "+j.line+": ":"";$(j.level==="error"?"error":"warning",ee+j.text)}zn();return}const R=ft.current??new ov;ft.current=R,qe(""),Wn(!0),Ht(!0),$("info",">>> "+f);try{let j=!1;const ee=await R.send(f,{timeoutMs:15e3,onOutput:Ge=>{j=!0,$("info",Ge)}}),de=ee.output.trim();de&&!j&&$("info",de),ee.error.trim()&&Jn(ee.error,f,ee.unavailable?"warning":"error")}catch(j){$("error",j instanceof Error?j.message:"Browser-MicroPython-terminalen fejlede.")}finally{Wn(!1),zn()}return}if(Te){$("warning","Terminalen bruger USB Serial. Bluetooth-forbindelsen kan vise filer, men kan ikke modtage frie terminalkommandoer."),zn();return}const v=Zn.current;if(!w||!v){$("warning","Forbind en microcontroller med USB for at skrive i MicroPython-terminalen."),zn();return}qe(""),Wn(!0),Ht(!0),On.current=!0,$("info",">>> "+f);try{await v.sendFriendlyLine(f)}catch(x){On.current=!1,$("error",x instanceof Error?x.message:"Kunne ikke sende kommando til MicroPython REPL.")}finally{Wn(!1),zn()}}function zn(){window.requestAnimationFrame(()=>{const f=wr.current;if(!f||f.disabled)return;f.focus();const v=f.value.length;f.selectionStart=v,f.selectionEnd=v})}function Js(f,v,x){if(x.length===0)return null;const R=w||Te;return u.jsxs("div",{className:"ide-install-group",children:[u.jsxs("div",{className:"ide-install-group-head",children:[u.jsx("h3",{children:f}),u.jsx("p",{children:v})]}),u.jsx("div",{className:"ide-install-scroll",children:x.map(j=>{const ee=Te&&Ol(j);return u.jsxs("label",{className:`ide-install-row ${ee?"disabled":""}`,children:[u.jsx("input",{type:"checkbox",checked:!!Ue[j.id],disabled:ee,onChange:de=>Ma(j,de.target.checked)}),u.jsxs("span",{children:[u.jsxs("strong",{children:[Bc(j),R&&j.kind==="library"&&u.jsx("em",{className:`ide-install-status status-${j.status}`,children:ee?"USB":$v(j.status)})]}),u.jsx("small",{children:j.description})]})]},j.id)})})]})}function Bc(f){return f.kind==="program"?f.label.replace(/\s*\(main\.py\)$/i,""):f.label}function zc(){el&&G([]),Ht(!0)}function Mi(f,v){const x=f.indexOf(`
`,v);return x===-1?f.length:x}function It(f,v){if(gh(f,v)){yt(null);return}const x=Zd(f,v);if(!x||x.query.length<1){yt(null);return}const R=ph(f,v,!0).slice(0,8),j=_h(gt.current,x.start,R.length);R.length>0&&j?(yt({items:R,selected:0,start:x.start,end:v,position:j}),Dr(ga.current,0)):yt(null)}function Cr(f,v){if(gh(f,v)){ln(null);return}const x=Zd(f,v);if(!x||x.query.length<1){ln(null);return}const R=ph(f,v,!1).slice(0,8),j=_h(wr.current,x.start,R.length);R.length>0&&j?(ln({items:R,selected:0,start:x.start,end:v,position:j}),Dr(cr.current,0)):ln(null)}function ji(f){const v=f.value.slice(f.selectionStart,f.selectionEnd);ir(qv(v)?v:"")}function Dr(f,v){window.requestAnimationFrame(()=>{const x=f==null?void 0:f.querySelector(`[data-autocomplete-index="${v}"]`);x==null||x.scrollIntoView({block:"nearest"})})}function Na(f=We==null?void 0:We.items[We.selected]){if(!f||!We)return;const v=rl(),x=J.slice(0,We.start)+f.insert+J.slice(We.end),R=We.start+f.insert.length-(f.insert.endsWith("()")?1:0);yt(null),kn(x,R,v),window.requestAnimationFrame(()=>{const j=gt.current;j&&j.focus()})}function Ni(f=St==null?void 0:St.items[St.selected]){if(!f||!St)return;const v=he.slice(0,St.start)+f.insert+he.slice(St.end),x=St.start+f.insert.length-(f.insert.endsWith("()")?1:0);qe(v),ln(null),window.requestAnimationFrame(()=>{const R=wr.current;R&&(R.focus(),R.selectionStart=x,R.selectionEnd=x)})}function Ri(f){const v=gt.current;if(!v)return!1;const x=v.selectionStart,R=v.selectionEnd,j={content:J,selectionStart:x,selectionEnd:R},ee=J.lastIndexOf(`
`,x-1)+1,de=R>x&&J[R-1]===`
`?R-1:R,Ge=Mi(J,de),Se=Ge<J.length?Ge+1:Ge,$e=J.slice(ee,Se);if(f<0){if(ee===0)return!1;const Un=J.lastIndexOf(`
`,ee-2)+1,qn=J.slice(Un,ee),hr=J.slice(0,Un)+$e+qn+J.slice(Se),Pt=-qn.length;return kn(hr,x+Pt,j,R+Pt),!0}if(Se>=J.length)return!1;const vt=Mi(J,Se),tn=vt<J.length?vt+1:vt,Be=J.slice(Se,tn),ht=J.slice(0,ee)+Be+$e+J.slice(tn),Or=Be.length;return kn(ht,x+Or,j,R+Or),!0}function Uc(f){var tn;if(Pl){(f.key==="Enter"||f.key==="Tab"||(f.ctrlKey||f.metaKey)&&["z","y","s"].includes(f.key.toLowerCase()))&&f.preventDefault();return}if((f.ctrlKey||f.metaKey)&&f.key.toLowerCase()==="z"){f.preventDefault(),(f.shiftKey?Ea():fr())&&yt(null);return}if((f.ctrlKey||f.metaKey)&&f.key.toLowerCase()==="y"){f.preventDefault(),Ea()&&yt(null);return}if((f.ctrlKey||f.metaKey)&&f.key.toLowerCase()==="s"){f.preventDefault(),!I&&Z.trim()&&Ds();return}if(f.altKey&&!f.ctrlKey&&!f.metaKey&&(f.key==="ArrowUp"||f.key==="ArrowDown")){f.preventDefault(),Ri(f.key==="ArrowUp"?-1:1)&&yt(null);return}if(We){if(f.key==="ArrowDown"){f.preventDefault(),yt(Be=>{if(!Be)return Be;const ht=(Be.selected+1)%Be.items.length;return Dr(ga.current,ht),{...Be,selected:ht}});return}if(f.key==="ArrowUp"){f.preventDefault(),yt(Be=>{if(!Be)return Be;const ht=(Be.selected-1+Be.items.length)%Be.items.length;return Dr(ga.current,ht),{...Be,selected:ht}});return}if(f.key==="Tab"){f.preventDefault(),Na();return}if(f.key==="Enter"){if(!(We.items[We.selected]&&ep(We.items[We.selected],J.slice(We.start,We.end)))){f.preventDefault(),Na();return}yt(null)}if(f.key==="Escape"){f.preventDefault(),yt(null);return}}if(f.key==="Enter"){f.preventDefault();const Be=f.currentTarget,ht=Be.selectionStart,Or=Be.selectionEnd,Un={content:J,selectionStart:ht,selectionEnd:Or},qn=J.lastIndexOf(`
`,ht-1)+1,hr=J.slice(qn,ht),Pt=((tn=hr.match(/^[ \t]*/))==null?void 0:tn[0])??"",Zl=hr.trimEnd().endsWith(":")?"    ":"",$t=`
${Pt}${Zl}`,pr=J.slice(0,ht)+$t+J.slice(Or),Lr=ht+$t.length;kn(pr,Lr,Un),window.requestAnimationFrame(()=>{Be.selectionStart=Lr,Be.selectionEnd=Lr});return}if(f.key!=="Tab")return;f.preventDefault();const v=f.currentTarget,x=v.selectionStart,R=v.selectionEnd,j={content:J,selectionStart:x,selectionEnd:R},ee="    ";if(f.shiftKey){const Be=J.lastIndexOf(`
`,x-1)+1,ht=x===R?Mi(J,x):R,Or=J.slice(Be,ht);let Un=0,qn=0;const hr=Or.replace(/(^|\n)( {1,4}|\t)/g,(Zl,$t,pr,Lr)=>{const Jl=pr.length;return Be+Lr<x&&(Un+=Jl),qn+=Jl,$t});if(qn===0)return;const Pt=J.slice(0,Be)+hr+J.slice(ht);kn(Pt,Math.max(Be,x-Un),j,x===R?Math.max(Be,x-Un):Math.max(Be,R-qn)),window.requestAnimationFrame(()=>{v.selectionStart=Math.max(Be,x-Un),v.selectionEnd=x===R?v.selectionStart:Math.max(v.selectionStart,R-qn)});return}if(x===R){const Be=J.slice(0,x)+ee+J.slice(R);kn(Be,x+ee.length,j),window.requestAnimationFrame(()=>{v.selectionStart=x+ee.length,v.selectionEnd=x+ee.length});return}const de=J.lastIndexOf(`
`,x-1)+1,Se=J.slice(de,R).replace(/^/gm,ee),$e=Se.split(`
`).length,vt=J.slice(0,de)+Se+J.slice(R);kn(vt,x+ee.length,j,R+$e*ee.length),window.requestAnimationFrame(()=>{v.selectionStart=x+ee.length,v.selectionEnd=R+$e*ee.length})}function ol(f){if(sn){f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),ja());return}if(St){if(f.key==="ArrowDown"){f.preventDefault(),ln(v=>{if(!v)return v;const x=(v.selected+1)%v.items.length;return Dr(cr.current,x),{...v,selected:x}});return}if(f.key==="ArrowUp"){f.preventDefault(),ln(v=>{if(!v)return v;const x=(v.selected-1+v.items.length)%v.items.length;return Dr(cr.current,x),{...v,selected:x}});return}if(f.key==="Enter"||f.key==="Tab"){f.preventDefault(),Ni();return}if(f.key==="Escape"){f.preventDefault(),ln(null);return}}if(f.key==="Tab"){f.preventDefault();const v=f.currentTarget,x=v.selectionStart,R=v.selectionEnd,j="    ",ee=he.slice(0,x)+j+he.slice(R),de=x+j.length;qe(ee),Qn(null),ln(null),window.requestAnimationFrame(()=>{v.selectionStart=de,v.selectionEnd=de});return}if(f.key==="ArrowUp"||f.key==="ArrowDown"){if(!(f.key==="ArrowUp"?f.currentTarget.selectionStart===0&&f.currentTarget.selectionEnd===0:f.currentTarget.selectionStart===he.length&&f.currentTarget.selectionEnd===he.length)||Qe.length===0)return;f.preventDefault();const x=f.key==="ArrowUp"?ot===null?Qe.length-1:Math.max(0,ot-1):ot===null||ot+1>=Qe.length?null:ot+1;Qn(x);const R=x===null?"":Qe[x]??"";qe(R),ln(null),Ht(!0),window.requestAnimationFrame(()=>{const j=wr.current;j&&(j.selectionStart=R.length,j.selectionEnd=R.length,Zs())});return}f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),ja())}return u.jsxs("div",{className:"screen ide-screen",children:[u.jsx(of,{title:"Pico Kodeværksted",onMenu:()=>i()}),ql?u.jsx("div",{className:"ide-size-gate",role:"dialog","aria-modal":"true","aria-labelledby":"ide-size-title",children:u.jsxs("div",{className:"ide-size-gate-panel",children:[u.jsx("h2",{id:"ide-size-title",children:"Brug en bærbar for at bruge Kodeværkstedet"}),u.jsx("p",{children:"Denne skærm er for lille, så du skal åbne Kodeværkstedet på en bærbar eller en større skærm."})]})}):u.jsxs("div",{className:"ide-layout",children:[u.jsxs("section",{className:"ide-panel ide-files-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Filer"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:ki,"aria-label":"Ny fil",title:"Ny fil",children:u.jsx(Dt,{name:"plus",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>{var f;return(f=jt.current)==null?void 0:f.click()},"aria-label":"Importer fil",title:"Importer fil",children:u.jsx(Dt,{name:"upload",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>_t(),disabled:!w&&!Te||I,"aria-label":"Opdater filer",title:"Opdater filer",children:u.jsx(Dt,{name:"refresh",size:20})})]})]}),u.jsx("div",{className:"ide-file-list",children:gi.length===0?u.jsx("button",{type:"button",disabled:!0,children:"Ingen filer læst"}):gi.map(f=>{if(f.kind==="separator"){const j=f.id==="pico-files"&&!w&&!Te;return u.jsxs(A.Fragment,{children:[u.jsx("div",{className:`ide-file-separator ${f.id==="browser-files"?"browser-section":""}`,children:u.jsx("span",{children:f.label})}),j&&u.jsx("div",{className:"ide-file-disconnected",role:"status",children:"Ikke forbundet"})]},f.id)}const v=Te&&Ol(f),x=xn[Wt(f.source,f.path)],R=x!==void 0&&x!==Pv(f,ce,un);return u.jsxs("div",{className:`ide-file-row ${Z===f.path&&Ee===f.source?"active":""} ${v?"protected":""}`,children:[u.jsxs("button",{type:"button",onClick:()=>Gs(f),disabled:v,title:v?"Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her":void 0,children:[u.jsx("span",{children:f.name}),u.jsxs("small",{title:R?"Ikke gemte ændringer":"Ingen ikke gemte ændringer",children:[f.versions.length>0&&u.jsx("em",{className:"ide-file-version-count",title:`${f.versions.length} gemte versioner i historikken`,children:f.versions.length}),u.jsx("i",{className:`ide-file-dirty-dot ${R?"dirty":"clean"}`,"aria-hidden":"true"})]})]}),u.jsx("button",{className:"ide-file-actions",type:"button",onClick:()=>Hs(f),disabled:f.type!=="file"||I||v,"aria-label":`Filvalg for ${f.name}`,title:v?"Holder Bluetooth-forbindelsen i gang og kan ikke ændres her":"Filvalg",children:u.jsx(Dt,{name:"settings",size:16})})]},`${f.source}:${f.path}`)})})]}),u.jsxs("section",{className:"ide-panel ide-status-panel",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"ide-status-head",children:[u.jsx("h2",{children:Te?"Forbundet Pico":"USB udvikling"}),!Te&&u.jsx("span",{className:`ide-usb-status ${Mr.supported?"available":"unavailable"}`,title:Mr.message,"data-tooltip":Mr.message,role:"img","aria-label":Mr.message,tabIndex:0,children:"!"})]}),Te&&u.jsxs("p",{children:[(s==null?void 0:s.deviceName)??"Pico"," er forbundet via Bluetooth."]})]}),!Te&&u.jsxs("div",{className:"ide-actions",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:w?jc:Mc,disabled:!Mr.supported||T,children:T?"Forbinder...":w?"Afbryd USB":"Forbind USB"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:$s,disabled:Te||I,children:"Download"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:Ac,disabled:!w||I,children:"Nulstil enhed"})]}),Te&&u.jsxs("div",{className:"ide-actions",children:[u.jsxs("button",{className:"btn btn-primary ide-connection-state",type:"button",disabled:!0,children:[u.jsx(Dt,{name:"power",size:22}),"Bluetooth forbundet"]}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:$s,disabled:I,children:"Startprogrammer og biblioteker"})]}),!Te&&u.jsx("div",{className:"ide-runtime",children:u.jsx("div",{className:"ide-mini-actions single",children:u.jsx("button",{className:"btn btn-outline ide-disconnect-btn",type:"button",onClick:()=>Ce(!0),children:"MicroPython"})})})]}),u.jsxs("section",{className:"ide-panel ide-editor-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("div",{className:"ide-editor-title",children:u.jsxs("h2",{children:[Ae(Z),u.jsxs("small",{children:[ba," bytes"]})]})}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Ks,disabled:I,children:"Kør"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Ei,disabled:!lr&&!(!Gt&&xr)&&(!w||!dt),children:"Stop"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:yi,disabled:I||!Z.trim(),children:"Gem"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Us(),disabled:I||!Z.trim(),children:"Slet"})]})]}),Gl(),u.jsxs("div",{className:"ide-editor-wrap",children:[u.jsx("div",{ref:Vl,className:"ide-line-numbers","aria-hidden":"true",style:{transform:`translateY(${-yn.top}px)`},children:Array.from({length:Ns},(f,v)=>u.jsx("span",{children:v+1},v))}),u.jsx("pre",{ref:or,className:"ide-highlight","aria-hidden":"true",style:{transform:`translate(${-yn.left}px, ${-yn.top}px)`},children:Iv(J,ci)}),u.jsx("textarea",{ref:gt,className:"ide-editor",value:J,onChange:f=>kn(f.target.value,f.target.selectionStart,rl(),f.target.selectionEnd,"typing"),onKeyDown:Uc,onKeyUp:f=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(f.key)||It(f.currentTarget.value,f.currentTarget.selectionStart)},onClick:f=>{It(f.currentTarget.value,f.currentTarget.selectionStart),ji(f.currentTarget)},onSelect:f=>ji(f.currentTarget),onScroll:f=>{const{scrollTop:v,scrollLeft:x}=f.currentTarget;Vl.current&&(Vl.current.style.transform=`translateY(${-v}px)`),or.current&&(or.current.style.transform=`translate(${-x}px, ${-v}px)`),yr({top:v,left:x}),We&&It(f.currentTarget.value,f.currentTarget.selectionStart)},readOnly:Pl,"aria-busy":Pl,spellCheck:!1}),We&&u.jsx("div",{ref:ga,className:`ide-autocomplete placement-${We.position.placement}`,role:"listbox","aria-label":"Kodeforslag",style:{left:We.position.left,top:We.position.top,maxHeight:We.position.maxHeight},children:(We.position.placement==="above"?We.items.map((f,v)=>({item:f,index:v})).reverse():We.items.map((f,v)=>({item:f,index:v}))).map(({item:f,index:v})=>u.jsx("button",{className:v===We.selected?"active":"",type:"button","data-autocomplete-index":v,onMouseDown:x=>{x.preventDefault(),Na(f)},role:"option","aria-selected":v===We.selected,children:f.label},f.label))}),re&&u.jsxs("div",{className:"ide-editor-loading",role:"status","aria-live":"polite",children:[u.jsx("span",{className:"spinner","aria-hidden":"true"}),u.jsxs("strong",{children:["Indlæser ",Ae(re),"..."]})]})]})]}),u.jsxs("section",{className:"ide-panel ide-terminal-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Terminal"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${sr?"":"active"}`,type:"button",onClick:()=>Ms(f=>!f),"aria-label":sr?"Tekniske fejl er slået fra":"Tekniske fejl er slået til","aria-pressed":!sr,title:sr?"Vis originale tekniske fejl":"Viser originale tekniske fejl",children:"Teknisk"}),u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${el?"active":""}`,type:"button",onClick:()=>Ts(f=>!f),"aria-pressed":el,title:el?"Terminalen ryddes, hver gang du trykker Kør":"Terminalen beholder tekst, når du trykker Kør",children:"Ryd ved Kør"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Ws,disabled:N.length===0,children:"Ryd"})]})]}),u.jsxs("div",{className:"ide-terminal","aria-live":"polite",ref:_a,onScroll:Ti,onClick:()=>{var f;return(f=wr.current)==null?void 0:f.focus()},children:[N.length===0?u.jsx("div",{className:"term-line",children:"Ingen terminaldata endnu."}):N.map((f,v)=>u.jsx("div",{className:`term-line ${f.variant==="input"?"term-input-echo":`term-${f.level}`}`,children:f.technical&&!sr?f.technical:f.text},`${v}-${f.text}`)),u.jsxs("form",{className:`ide-terminal-command ${ya&&!sn?"locked":""} ${sn?"stdin":""}`,onSubmit:f=>{f.preventDefault(),ja()},children:[u.jsx("span",{"aria-hidden":"true",children:kc}),u.jsx("textarea",{ref:wr,value:he,onChange:f=>{qe(f.target.value),Qn(null),sn?ln(null):Cr(f.target.value,f.target.selectionStart)},onKeyDown:ol,onKeyUp:f=>{sn||["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(f.key)||Cr(f.currentTarget.value,f.currentTarget.selectionStart)},onClick:f=>{sn||Cr(f.currentTarget.value,f.currentTarget.selectionStart)},disabled:tl,placeholder:di,"aria-label":sn?"Input til kørende Pico-kode":"MicroPython-terminalkommando",title:di,rows:Math.max(1,he.split(`
`).length)})]}),St&&u.jsx("div",{ref:cr,className:`ide-autocomplete ide-repl-autocomplete placement-${St.position.placement}`,role:"listbox","aria-label":"Terminalforslag",style:{left:St.position.left,top:St.position.top,maxHeight:St.position.maxHeight},children:(St.position.placement==="above"?St.items.map((f,v)=>({item:f,index:v})).reverse():St.items.map((f,v)=>({item:f,index:v}))).map(({item:f,index:v})=>u.jsx("button",{className:v===St.selected?"active":"",type:"button","data-autocomplete-index":v,onMouseDown:x=>{x.preventDefault(),Ni(f)},role:"option","aria-selected":v===St.selected,children:f.label},f.label))})]})]})]}),u.jsx("input",{ref:jt,type:"file",accept:".py,.txt,.json,.csv",className:"sr-only",onChange:f=>{var v;Oc((v=f.target.files)==null?void 0:v[0]),f.currentTarget.value=""}}),le&&u.jsx(qt,{title:"Gem fil",onClose:()=>se(!1),children:u.jsxs("div",{className:"ide-save-options",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>void xi(),disabled:!w&&!Te||I,children:"Gem filen på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Ls,children:"Download filen til computer"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Os,children:"Gem filen i browseren"})]})}),oe&&u.jsx(qt,{title:"Startprogrammer og biblioteker",onClose:()=>ye(!1),children:u.jsxs("div",{className:"ide-install-list",children:[u.jsx("p",{className:"ide-install-note",children:w||Te?"Vælg et startprogram og de biblioteker dit projekt bruger. Installer lægger filerne på Picoen.":"Du er ikke forbundet til en Pico. Du kan gemme filerne i browseren eller downloade dem til computeren, men de virker først på Picoen, når de er installeret der."}),u.jsxs("div",{className:"ide-install-grid",children:[Js("Startprogrammer (main.py)","Starter automatisk på Picoen.",je.filter(f=>f.kind==="program")),Js("Biblioteker","Ekstra Python-filer som dine programmer kan importere.",je.filter(f=>f.kind==="library"))]}),u.jsxs("div",{className:"ide-install-actions",children:[(w||Te)&&u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Ys,disabled:I,children:"Installer på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Wl,disabled:I,children:"Download til computer"}),u.jsx("button",{className:w||Te?"btn btn-outline":"btn btn-primary",type:"button",onClick:Ql,disabled:I,children:"Gem i browseren"})]})]})}),Jt&&u.jsx(qt,{title:"main.py er gemt",onClose:()=>Mt(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:"Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>void zs("control"),disabled:I,children:"Genstart og åbn kontrolpanel"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void zs("ide"),disabled:I,children:"Genstart og bliv i Kodeværksted"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>Mt(!1),disabled:I,children:"Senere"})]})}),Le&&u.jsx(qt,{title:"Installer MicroPython",onClose:()=>Ce(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:"Hvis Picoen er helt frisk, skal MicroPython først lægges på den."}),u.jsxs("ol",{className:"micropython-steps",children:[u.jsx("li",{children:"Hold BOOTSEL-knappen nede."}),u.jsx("li",{children:"Sæt Picoen i USB, og slip derefter BOOTSEL."}),u.jsx("li",{children:"Vælg Pico-model og MicroPython-version herunder, og download UF2-filen."}),u.jsxs("li",{children:["Kopier UF2-filen til drevet ",u.jsx("strong",{children:"RPI-RP2"})]})]}),u.jsxs("div",{className:"micropython-selects",children:[u.jsx("label",{htmlFor:"micropython-board",children:"Pico-model"}),u.jsx("select",{id:"micropython-board",value:kt,onChange:f=>Ot(f.target.value),children:hn.map(f=>u.jsx("option",{value:f,children:f},f))}),u.jsx("label",{htmlFor:"micropython-version",children:"MicroPython-version"}),u.jsx("select",{id:"micropython-version",value:(Nr==null?void 0:Nr.version)??Zt,onChange:f=>Cn(f.target.value),children:jr.map(f=>u.jsxs("option",{value:f.version,children:[f.version," (",f.date,")"]},`${f.board}:${f.version}:${f.date}`))})]}),Nr&&u.jsx("a",{className:"btn btn-primary btn-block",href:Nr.url,download:Nr.fileName,children:"Download UF2"}),u.jsx("a",{className:"btn btn-outline btn-block",href:"https://www.raspberrypi.com/documentation/microcontrollers/micropython.html",target:"_blank",rel:"noreferrer",children:"Se vejledning"})]})}),B&&u.jsx(qt,{title:"Ny Python-fil",onClose:()=>ne(!1),children:u.jsxs("form",{className:"ide-new-file-form",onSubmit:f=>{f.preventDefault(),Xl()},children:[u.jsx("label",{htmlFor:"new-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"new-pico-file",value:pe,onChange:f=>me(f.target.value),autoFocus:!0,placeholder:"test"}),u.jsx("span",{children:".py"})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen tilføjer .py automatisk og opretter filen i ",wc,"."]}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:!dh(pe),children:"Opret"})]})}),z&&u.jsx(qt,{title:Ae(z.path),onClose:()=>te(null),children:u.jsxs("div",{className:"ide-file-action-modal",children:[u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:"Placering"}),u.jsx("strong",{children:z.source==="pico"?"Pico":"Browser"})]}),u.jsxs("form",{className:"ide-file-rename-form",onSubmit:f=>{f.preventDefault(),sl()},children:[u.jsx("label",{htmlFor:"rename-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"rename-pico-file",value:xe,onChange:f=>E(f.target.value),placeholder:"min_kode"}),u.jsxs("span",{children:[".",gs(z.path)]})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen beholder filendelsen .",gs(z.path)," automatisk."]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!Hd(xe,gs(z.path))||Hd(xe,gs(z.path))===z.path||I,children:"Gem navn"})]}),u.jsxs("div",{className:"ide-file-action-buttons",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void Fs(),disabled:I,children:"Dupliker"}),u.jsx("button",{className:"btn btn-outline btn-danger btn-block",type:"button",onClick:()=>Us(z),disabled:I,children:"Slet"})]}),u.jsxs("section",{className:"ide-version-history",children:[u.jsx("h4",{children:"Versionshistorik"}),z.versions.length===0?u.jsx("p",{children:"Versionshistorik: 0 gemte versioner."}):u.jsx("div",{className:"ide-version-list",children:z.versions.map(f=>u.jsxs("div",{className:"ide-version-row",children:[u.jsx("span",{children:Ae(f.path)}),u.jsx("small",{children:f.size!==void 0?`${f.size} bytes`:"Gemt på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>void Vs(f),disabled:I,children:"Gendan"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Is(f),disabled:I,children:"Slet"})]},f.path))})]})]})})]})}function dh(i){var o;const l=(o=i.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:o.replace(/\.py$/i,"").replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"");return l?`/${l}.py`:""}function Nv(i){const l=i.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop(),o=l==null?void 0:l.match(/^(.+)\.(py|txt|json|csv)$/i);if(!o)return"";const s=Jh(o[1]);return s?`/${s}.${o[2].toLowerCase()}`:""}function Hd(i,l="py"){const o=i.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop();if(!o)return"";const s=o.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);if(!s)return"";const d=Jh(s[1]),p=l.replace(/^\./,"").toLowerCase(),_=(s[2]??(p||"py")).toLowerCase();return d?`/${d}.${_}`:""}function Rv(i){return Ae(i).replace(/\.(py|txt|json|csv)$/i,"")}function Jh(i){return i.replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"")}function gs(i){var s;const l=Ae(i).match(/\.([a-z0-9]+)$/i),o=(s=l==null?void 0:l[1])==null?void 0:s.toLowerCase();return o&&["py","txt","json","csv"].includes(o)?o:"py"}function Dl(i){return i.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}function fh(){return ni.map(i=>({...i,status:"unknown",detail:"Kan gemmes uden Pico. Forbind en Pico for at installere."}))}function mh(i){const l={};return i.forEach(o=>{l[o.id]=!1}),l}function Ae(i){return i.split("/").filter(Boolean).pop()??i}function ac(i){return i.replace(/\\/g,"/").toLowerCase()==="/main.py"}function hh(i){const l=i.userAgent||"",o=i.platform||"",s=i.maxTouchPoints||0,d=/Android.*Mobile|iPhone|iPod|Windows Phone|Mobile Safari/i.test(l),p=/Macintosh/i.test(o)&&s>1;return d&&!p}function Av(i){return i instanceof DOMException&&i.name==="AbortError"}function Cv(i){return/Traceback \(most recent call last\):/.test(i)||/\b(?:SyntaxError|NameError|TypeError|ValueError|IndentationError|ImportError|ModuleNotFoundError|ZeroDivisionError|IndexError|KeyError|AttributeError):/.test(i)}function Ol(i){return Dv(i)}function Dv(i){return i.path.replace(/\\/g,"/").toLowerCase()==="/picobluetooth.py"}const Wd=[...["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"].map(i=>({label:i,insert:`${i}${["for","if","while","def","class","elif","else","try","except","finally","with"].includes(i)?" ":""}`})),...["abs","all","any","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","exec","filter","float","getattr","hasattr","hash","hex","id","input","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","open","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","zip"].map(i=>({label:`${i}()`,insert:`${i}()`})),{label:"for i in range():",insert:"for i in range():"},{label:"while True:",insert:"while True:"},{label:"if True:",insert:"if True:"},{label:"time",insert:"time"},{label:"time.",insert:"time."},{label:"time.sleep",insert:"time.sleep"},{label:"time.sleep()",insert:"time.sleep()"},{label:"time.sleep_ms()",insert:"time.sleep_ms()"},{label:"time.ticks_ms()",insert:"time.ticks_ms()"},{label:"time.ticks_diff()",insert:"time.ticks_diff()"},{label:"time.sleep_us()",insert:"time.sleep_us()"},{label:"time.ticks_us()",insert:"time.ticks_us()"},{label:"machine",insert:"machine"},{label:"machine.",insert:"machine."},{label:"machine.Pin",insert:"machine.Pin"},{label:"machine.PWM",insert:"machine.PWM"},{label:"machine.ADC",insert:"machine.ADC"},{label:"machine.I2C",insert:"machine.I2C"},{label:"machine.SPI",insert:"machine.SPI"},{label:"machine.Timer",insert:"machine.Timer"},{label:"machine.UART",insert:"machine.UART"},{label:"machine.reset()",insert:"machine.reset()"},{label:"machine.freq()",insert:"machine.freq()"},{label:"Pin()",insert:"Pin()"},{label:"PWM()",insert:"PWM()"},{label:"ADC()",insert:"ADC()"},{label:"I2C()",insert:"I2C()"},{label:"SPI()",insert:"SPI()"},{label:"Timer()",insert:"Timer()"},{label:"UART()",insert:"UART()"},{label:"Pin.OUT",insert:"Pin.OUT"},{label:"Pin.IN",insert:"Pin.IN"},{label:"Pin.PULL_UP",insert:"Pin.PULL_UP"},{label:"Pin.PULL_DOWN",insert:"Pin.PULL_DOWN"},{label:"Pin.IRQ_FALLING",insert:"Pin.IRQ_FALLING"},{label:"Pin.IRQ_RISING",insert:"Pin.IRQ_RISING"},{label:"import time",insert:"import time"},{label:"import utime as time",insert:"import utime as time"},{label:"import machine",insert:"import machine"},{label:"import random",insert:"import random"},{label:"import os",insert:"import os"},{label:"import sys",insert:"import sys"},{label:"from machine import Pin",insert:"from machine import Pin"},{label:"from machine import Pin, PWM",insert:"from machine import Pin, PWM"},{label:"from machine import Pin, PWM, ADC",insert:"from machine import Pin, PWM, ADC"},{label:"PicoBluetooth",insert:"PicoBluetooth"},{label:"PicoRobotics",insert:"PicoRobotics"},{label:"NeoPixel",insert:"NeoPixel"},{label:"HCSR04",insert:"HCSR04"},{label:"ble.send_toggle_state()",insert:"ble.send_toggle_state()"},{label:"ble.send_slider_state()",insert:"ble.send_slider_state()"},{label:"ble.send_radar()",insert:"ble.send_radar()"},{label:"ble.send_text()",insert:"ble.send_text()"},{label:"ble.send_plot()",insert:"ble.send_plot()"},{label:"on_button(name, is_down):",insert:"on_button(name, is_down):"},{label:"on_slider(name, value):",insert:"on_slider(name, value):"},{label:"on_toggle(name, value):",insert:"on_toggle(name, value):"},{label:"on_connect():",insert:"on_connect():"},{label:"on_disconnect():",insert:"on_disconnect():"},{label:"ValueError",insert:"ValueError"},{label:"TypeError",insert:"TypeError"},{label:"OSError",insert:"OSError"},{label:"Exception",insert:"Exception"}];function ph(i,l,o){const s=Zd(i,l);if(!s)return[];const d=Ov(i,s.start,l),p=s.query.toLowerCase(),_=d.beforeToken.toLowerCase(),m=d.linePrefix.toLowerCase(),g=o?[...Wd,...Bv(i)]:Wd;return zv(g).filter(w=>{const k=w.label.toLowerCase(),T=w.insert.toLowerCase();return T===p||k===p||ep(w,s.query)?!1:d.importLine?Lv(w,d)?k.startsWith(m)||T.startsWith(m)||k.startsWith(p)||T.startsWith(p):!1:_.endsWith(".")&&!T.includes(".")?!1:!!(T.startsWith(p)||k.startsWith(p))})}function Ov(i,l,o){const s=i.lastIndexOf(`
`,l-1)+1,d=i.slice(s,o),p=i.slice(s,l),_=/^\s*(?:import|from)\s+[\w.,\s]*$/i.test(d),m=/^\s*from\s+\w+(?:\.\w+)*\s+import\s+/i.test(d);return{linePrefix:d,beforeToken:p,importLine:_,fromImportLine:m}}function Lv(i,l){return l.fromImportLine?!i.insert.includes("(")&&!i.insert.startsWith("import "):i.insert.startsWith("import ")||i.insert.startsWith("from ")?!0:/^[A-Za-z_][A-Za-z0-9_]*$/.test(i.insert)}function Bv(i){const l=new Set,o=[/\bdef\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/g,/\bclass\s+([A-Za-z_][A-Za-z0-9_]*)\b/g,/(?:^|[^\w.])([A-Za-z_][A-Za-z0-9_]*)\s*=/g,/\bfor\s+([A-Za-z_][A-Za-z0-9_]*)\s+in\b/g,/\b([A-Za-z_][A-Za-z0-9_]*)\.([A-Za-z_][A-Za-z0-9_]*)\s*\(/g];for(const s of o)for(const d of i.matchAll(s))d[1]&&l.add(d[1]),d[2]&&l.add(d[2]);return[...l].filter(s=>s.length>1&&!Uv.has(s)).sort((s,d)=>s.localeCompare(d,"da")).map(s=>({label:s,insert:s}))}function zv(i){const l=new Set,o=[];for(const s of i){const d=s.insert.toLowerCase();l.has(d)||(l.add(d),o.push(s))}return o}const Uv=new Set(Wd.map(i=>i.insert.replace(/[().: ]+$/g,"")));function Zd(i,l){const s=i.slice(0,l).match(/[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_.]*$/);return!s||s.index===void 0?null:{query:s[0],start:s.index}}function gh(i,l){const o=i.lastIndexOf(`
`,Math.max(0,l-1))+1;let s=null,d=null,p=!1;for(let _=0;_<l;_+=1){const m=i[_],g=i.slice(_,_+3);if(d){g===d.repeat(3)&&(d=null,_+=2);continue}if(s){if(p){p=!1;continue}if(m==="\\"){p=!0;continue}m===s&&(s=null),m===`
`&&(s=null);continue}if(m==="#"){const b=i.indexOf(`
`,_),w=b===-1?i.length:b;if(l<=w&&_>=o)return!0;_=w;continue}if(g==='"""'||g==="'''"){d=m,_+=2;continue}(m==='"'||m==="'")&&(s=m)}return s!==null||d!==null}function ep(i,l){const o=i.insert.trim();return!/[().]/.test(o)&&o.toLowerCase()===l.toLowerCase()}function qv(i){return/^[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_]*$/.test(i)}function _h(i,l,o){if(!i)return null;const s=i.closest(".ide-terminal")??i.parentElement;if(!s)return null;const d=window.getComputedStyle(i),p=document.createElement("div"),_=document.createElement("span"),m=s.getBoundingClientRect(),g=i.getBoundingClientRect();p.style.position="absolute",p.style.visibility="hidden",p.style.pointerEvents="none",p.style.whiteSpace="pre-wrap",p.style.overflowWrap="break-word",p.style.wordBreak=d.wordBreak,p.style.boxSizing=d.boxSizing,p.style.width=`${i.getBoundingClientRect().width}px`,p.style.padding=d.padding,p.style.border=d.border,p.style.font=d.font,p.style.lineHeight=d.lineHeight,p.style.letterSpacing=d.letterSpacing,p.style.tabSize=d.tabSize,p.style.fontVariantLigatures=d.fontVariantLigatures,p.style.scrollbarGutter=d.scrollbarGutter,p.style.left=`${g.left-m.left-i.scrollLeft}px`,p.style.top=`${g.top-m.top-i.scrollTop}px`,p.textContent=i.value.slice(0,l),_.textContent=i.value.slice(l,l+1)||" ",p.appendChild(_),s.appendChild(p);const b=_.getBoundingClientRect();p.remove();const w=34,k=14,T=Math.min(210,Math.max(w+k,o*w+k)),U=Hv(b.left-m.left,8,Math.max(8,s.clientWidth-296)),N=b.top-m.top+s.scrollTop,G=b.bottom-m.top+s.scrollTop+10,I=s.scrollTop+s.clientHeight-G-8,V=N-s.scrollTop-8,X=s.scrollTop+s.clientHeight,P=I>=Math.min(T,w*2)||I>=V?"below":"above",re=Math.max(w+k,Math.min(T,P==="below"?I:V)),ve=P==="below"?Math.min(G,X-re-8):Math.max(s.scrollTop+8,N-re-8);return{left:U,top:ve,maxHeight:re,placement:P}}function Hv(i,l,o){return Math.max(l,Math.min(o,i))}function Vv(i){const l=[];let o=null,s=null,d=!1,p=0,_=0;const m=(g,b)=>{g>p&&l.push({text:i.slice(p,g),isTriple:b}),p=g};for(;_<i.length;){const g=i[_],b=i.slice(_,_+3);if(s){if(b===s.repeat(3)){_+=3,s=null,m(_,!0);continue}_+=1;continue}if(o){d?d=!1:g==="\\"?d=!0:(g===o||g===`
`)&&(o=null),_+=1;continue}if(g==="#"){const w=i.indexOf(`
`,_);_=w===-1?i.length:w;continue}if(b==='"""'||b==="'''"){m(_,!1),s=g,_+=3;continue}(g==='"'||g==="'")&&(o=g),_+=1}return m(i.length,s!==null),l}function Iv(i,l=""){const o=/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,s=/(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm,d=[];let p=0;function _(m,g){m.split(/(\r?\n)/).forEach(b=>{if(b===`
`||b===`\r
`){d.push(u.jsx("br",{},`br-${p++}`));return}b!==""&&g(b,`part-${p++}`)})}return Vv(i).forEach(m=>{if(m.isTriple){_(m.text,(g,b)=>{d.push(...bs(g,l,b,"tok-string"))});return}_(m.text,(g,b)=>{let w=0;[...g.matchAll(s)].forEach((T,U)=>{const N=T.index??0;N>w&&d.push(...vh(g.slice(w,N),o,`${b}-${U}-plain`,l));const G=T[0],I=G.startsWith("#")?"tok-comment":G.startsWith('"')||G.startsWith("'")?"tok-string":/^\d/.test(G)?"tok-number":"tok-builtin";d.push(...bs(G,l,`${b}-${U}-token`,I)),w=N+G.length}),w<g.length&&d.push(...vh(g.slice(w),o,`${b}-tail`,l))})}),d.length?d:" "}function vh(i,l,o,s=""){const d=[];let p=0;const _=new RegExp(l.source,"g");return[...i.matchAll(_)].forEach((m,g)=>{const b=m.index??0;b>p&&d.push(...bs(i.slice(p,b),s,`${o}-${g}-plain`)),d.push(...bs(m[0],s,`${o}-${g}-keyword`,"tok-keyword")),p=b+m[0].length}),p<i.length&&d.push(...bs(i.slice(p),s,`${o}-plain-end`)),d}function bs(i,l,o,s=""){if(!l)return[u.jsx("span",{className:s||void 0,children:i},o)];const d=[],p=l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),_=new RegExp(`(?<![A-Za-zÆØÅæøå0-9_])(${p})(?![A-Za-zÆØÅæøå0-9_])`,"g");let m=0;return[...i.matchAll(_)].forEach((g,b)=>{const w=g.index??0;w>m&&d.push(u.jsx("span",{className:s||void 0,children:i.slice(m,w)},`${o}-${b}-before`)),d.push(u.jsx("span",{className:`${s} tok-match`.trim(),children:g[0]},`${o}-${b}-match`)),m=w+g[0].length}),m<i.length&&d.push(u.jsx("span",{className:s||void 0,children:i.slice(m)},`${o}-after`)),d.length?d:[u.jsx("span",{className:s||void 0,children:i},o)]}function ic(i){return i.length>0?i:[{path:Qd,content:Zh,uploaded:!1,updatedAt:Date.now()}]}function Vd(i,l,o,s){const d=i.filter(p=>p.path!==l);return[{path:l,content:o,uploaded:s,updatedAt:Date.now()},...d].sort((p,_)=>_.updatedAt-p.updatedAt)}function dc(i){return i.map(l=>({name:Ae(l.path),path:l.path,type:"file",size:new Blob([l.content]).size}))}function Pv(i,l,o){var s;return i.source==="pico"?o[i.path]:(s=l.find(d=>d.path===i.path))==null?void 0:s.content}function fc(i){const l=i.replace(/\\/g,"/"),o=l.lastIndexOf("/"),s=o>=0?l.slice(0,o+1):"",p=(o>=0?l.slice(o+1):l).match(/^(.+)_backup(\d+)(\.[^.]+)$/i);return p?{originalPath:`${s}${p[1]}${p[3]}`,index:parseInt(p[2],10)}:null}function Ll(i){return fc(i)!==null}function ri(i){const l=new Map;for(const o of i){const s=fc(o.path);if(!s)continue;const d=l.get(s.originalPath)??[];d.push(o),l.set(s.originalPath,d)}for(const o of l.values())o.sort((s,d)=>{var p,_;return(((p=fc(d.path))==null?void 0:p.index)??0)-(((_=fc(s.path))==null?void 0:_.index)??0)});return l}function Fv(i,l){const o=i.replace(/\\/g,"/"),s=o.lastIndexOf("/"),d=s>=0?o.slice(0,s+1):"/",p=s>=0?o.slice(s+1):o.replace(/^\/+/,""),_=p.lastIndexOf("."),m=_>0?p.slice(0,_):p,g=_>0?p.slice(_):"",b=new Set(l.map(w=>w.path.toLowerCase()));for(let w=1;w<1e3;w+=1){const k=`${d}${m}_backup${w}${g}`;if(!b.has(k.toLowerCase()))return k}return`${d}${m}_backup${Date.now()}${g}`}function Gv(i,l){const o=i.replace(/\\/g,"/"),s=o.lastIndexOf("/"),d=s>=0?o.slice(0,s+1):"/",p=s>=0?o.slice(s+1):o.replace(/^\/+/,""),_=p.lastIndexOf("."),m=_>0?p.slice(0,_):p,g=_>0?p.slice(_):"";for(let b=1;b<1e3;b+=1){const w=b===1?"_kopi":`_kopi${b}`,k=`${d}${m}${w}${g}`;if(!l(k)&&!Ll(k))return k}return`${d}${m}_kopi${Date.now()}${g}`}function $v(i){return i==="ok"?"Nyeste":i==="outdated"?"Opdater":i==="missing"?"Mangler":"Ikke tjekket"}function Yv(i,l,o,s){const d=new Map,p=ri(i),_=ri(dc(l));for(const k of i)Ll(k.path)||d.set(Wt("pico",k.path),{kind:"file",name:k.name,path:k.path,type:k.type,size:k.size,source:"pico",uploaded:!0,versions:p.get(k.path)??[]});for(const k of l)Ll(k.path)||d.set(Wt("local",k.path),{kind:"file",name:Ae(k.path),path:k.path,type:"file",source:"local",uploaded:!1,versions:_.get(k.path)??[]});for(const k of Object.keys(o)){const[T,...U]=k.split(":"),N=U.join(":");if(T!=="local"&&T!=="pico"||!N)continue;const G=d.get(k);if(G){d.set(k,G);continue}d.set(k,{kind:"file",name:Ae(N),path:N,type:"file",source:T,uploaded:!1,versions:T==="pico"?p.get(N)??[]:_.get(N)??[]})}const m=[...d.values()].sort(Kv),g=m.filter(k=>k.source==="pico"),b=m.filter(k=>k.source==="local"),w=[];return g.length>0||s?w.push({kind:"separator",id:"pico-files",label:s?"Pico":"Microcontroller"},...g):w.push({kind:"separator",id:"pico-files",label:"Microcontroller"}),b.length>0&&w.push({kind:"separator",id:"browser-files",label:"Browser"},...b),w}const Xv=new Map([["main.py",0],["devicesettings.txt",1],["layout.txt",2],["picobluetooth.py",3],["picofly.py",4],["picorobotics.py",5],["neopixel.py",6],["hcsr04.py",7]]);function Kv(i,l){const o=bh(i.path),s=bh(l.path);return o===null&&s===null?i.name.localeCompare(l.name,"da"):o===null?-1:s===null?1:o-s}function bh(i){var o;const l=(o=i.replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:o.toLowerCase();return l?Xv.get(l)??null:null}function yh(i,l,o){if(!(l in i))return i;const s={...i,[o]:i[l]};return delete s[l],s}function Qv(i,l,o,s){const d=`${l}:${o}`;if(!(d in i))return i;const p={...i,[`${l}:${s}`]:i[d]};return delete p[d],p}function Wv({open:i}){const l=ae(X=>X.screen),o=ae(X=>X.active),s=ae(X=>X.toggleSideMenu),d=ae(X=>X.toggleDebugger),p=ae(X=>X.setEditMode),_=ae(X=>X.openMenuPage),m=ae(X=>X.disconnect),g=ae(X=>X.openPicoIde),b=ae(X=>X.closePicoIde),w=ae(X=>X.picoIdeOrigin),k=l==="dashboard",T=l==="control",U=l==="ide",N=T&&!!(o!=null&&o.canEdit),G=!T||!!(o!=null&&o.isOwnedByMe)||!!(o!=null&&o.canEditCode),I=w==="control",V=w==="control"?"Pico Kontrol Panel":"Hovedmenu";return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:`scrim ${i?"open":"closing"}`,onClick:()=>s(!1)}),u.jsxs("nav",{className:`sidemenu sidemenu-${l} ${i?"open":"closing"}`,"aria-label":"Sidemenu",children:[k&&u.jsxs(u.Fragment,{children:[u.jsx(Rn,{label:"Bruger",icon:"user",onClick:()=>_("user-settings")}),u.jsx(Rn,{label:"Indstillinger",icon:"settings",onClick:()=>_("application-settings")}),u.jsx(Rn,{label:"Kodeværksted",icon:"picoIde",onClick:g,disabled:!G}),u.jsx(Id,{}),u.jsx(Rn,{label:"Om appen",icon:"info",onClick:()=>_("application-about")}),u.jsx(Rn,{label:"Hjælp",icon:"help",onClick:()=>_("application-help")}),u.jsx(Rn,{label:"Fejlfinding",icon:"debugger",onClick:()=>d(!0)})]}),T&&u.jsxs(u.Fragment,{children:[u.jsx(Rn,{label:"Indstillinger",icon:"settings",onClick:()=>_("device-settings")}),u.jsx(Rn,{label:"Rediger",icon:"edit",onClick:()=>p(!0),disabled:!N}),u.jsx(Rn,{label:"Kodeværksted",icon:"picoIde",onClick:g,disabled:!G}),u.jsx(Id,{}),u.jsx(Rn,{label:"Hjælp",icon:"help",onClick:()=>_("device-help")}),u.jsx(Rn,{label:"Fejlfinding",icon:"debugger",onClick:()=>d(!0)})]}),U&&u.jsxs(u.Fragment,{children:[u.jsx(Rn,{label:V,icon:"back",onClick:b}),u.jsx(Id,{})]}),u.jsx("div",{className:"spacer"}),(T||U&&I)&&u.jsx(Rn,{label:"Forlad",icon:"exit",onClick:()=>m()})]})]})}function Rn({label:i,icon:l,disabled:o,onClick:s}){return u.jsxs("button",{className:"iconbtn",type:"button",onClick:s,disabled:o,"aria-label":i,children:[u.jsx(Dt,{name:l}),u.jsx("span",{children:i})]})}function Id(){return u.jsxs("a",{className:"iconbtn sidemenu-link",href:"https://www.teknologiskolen.dk/",target:"_blank",rel:"noreferrer","aria-label":"Teknologiskolen",children:[u.jsx("img",{src:hg,alt:""}),u.jsx("span",{children:"Teknologiskolen"})]})}const Zv={error:"term-error",success:"term-success",warning:"term-warning",info:""},xh={error:"[FEJL] ",success:"[SUCCES] ",warning:"[ADVARSEL] ",info:""};function Jv(){const i=new Date,l=o=>String(o).padStart(2,"0");return`${l(i.getDate())}-${l(i.getMonth()+1)}-${i.getFullYear()}-${l(i.getHours())}-${l(i.getMinutes())}`}function eb(){const i=ae(d=>d.logs),l=ae(d=>d.clearLogs),o=ae(d=>d.toggleDebugger);function s(){const d=[...i].reverse().map(g=>`${g.time} ${xh[g.level]}${g.message}`).join(`
`),p=new Blob([d],{type:"text/plain"}),_=URL.createObjectURL(p),m=document.createElement("a");m.href=_,m.download=`${Jv()}.txt`,m.click(),URL.revokeObjectURL(_)}return u.jsxs(qt,{title:"Fejlfinding",onClose:()=>o(!1),closeVariant:"circle",children:[u.jsx("div",{className:"terminal",children:i.length===0?u.jsx("div",{className:"term-line",children:"Ingen log endnu."}):i.map((d,p)=>u.jsxs("div",{className:`term-line ${Zv[d.level]}`,children:[d.time," ",xh[d.level],d.message]},`${d.time}-${p}`))}),u.jsxs("div",{className:"row",style:{marginTop:14},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:l,children:"Ryd"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:s,children:"Gem logfil"})]})]})}const tp=4,Xn=tp*4+17,wh=80,tb=20,nb=30660;function rb(i){const l=new TextEncoder().encode(i);if(l.length>76)throw new Error("QR-koden er for lang.");const o=kh(!1),s=kh(!1);lb(o,s);const d=ib(l),p=cb(d,tb);return sb(o,s,[...d,...p]),ob(o,s),o}function kh(i){return Array.from({length:Xn},()=>Array.from({length:Xn},()=>i))}function Yn(i,l,o,s,d,p=!0){i[s][o]=d,p&&(l[s][o]=!0)}function lb(i,l){Pd(i,l,0,0),Pd(i,l,Xn-7,0),Pd(i,l,0,Xn-7);for(let o=0;o<Xn;o+=1)l[6][o]||Yn(i,l,o,6,o%2===0),l[o][6]||Yn(i,l,6,o,o%2===0);ab(i,l,26,26),Yn(i,l,8,tp*4+9,!0)}function Pd(i,l,o,s){for(let d=-1;d<=7;d+=1)for(let p=-1;p<=7;p+=1){const _=o+p,m=s+d;if(_<0||m<0||_>=Xn||m>=Xn)continue;const g=p>=0&&p<=6&&d>=0&&d<=6&&(p===0||p===6||d===0||d===6||p>=2&&p<=4&&d>=2&&d<=4);Yn(i,l,_,m,g)}}function ab(i,l,o,s){for(let d=-2;d<=2;d+=1)for(let p=-2;p<=2;p+=1)l[s+d][o+p]||Yn(i,l,o+p,s+d,Math.max(Math.abs(p),Math.abs(d))!==1)}function ib(i){const l=[];sc(l,4,4),sc(l,i.length,8);for(const s of i)sc(l,s,8);for(sc(l,0,Math.min(4,wh*8-l.length));l.length%8!==0;)l.push(0);const o=[];for(let s=0;s<l.length;s+=8)o.push(l.slice(s,s+8).reduce((d,p)=>d<<1|p,0));for(let s=236;o.length<wh;s=s===236?17:236)o.push(s);return o}function sc(i,l,o){for(let s=o-1;s>=0;s-=1)i.push(l>>>s&1)}function sb(i,l,o){const s=o.flatMap(_=>Array.from({length:8},(m,g)=>_>>>7-g&1));let d=0,p=!0;for(let _=Xn-1;_>=1;_-=2){_===6&&(_-=1);for(let m=0;m<Xn;m+=1){const g=p?Xn-1-m:m;for(let b=0;b<2;b+=1){const w=_-b;if(l[g][w])continue;const k=d<s.length?s[d]===1:!1;i[g][w]=k!==((w+g)%2===0),d+=1}}p=!p}}function ob(i,l){const o=s=>(nb>>>s&1)!==0;for(let s=0;s<=5;s+=1)Yn(i,l,8,s,o(s));Yn(i,l,8,7,o(6)),Yn(i,l,8,8,o(7)),Yn(i,l,7,8,o(8));for(let s=9;s<15;s+=1)Yn(i,l,14-s,8,o(s));for(let s=0;s<8;s+=1)Yn(i,l,Xn-1-s,8,o(s));for(let s=8;s<15;s+=1)Yn(i,l,8,Xn-15+s,o(s))}const ys=new Array(512),Jd=new Array(256);let Sh=!1;function np(){if(Sh)return;let i=1;for(let l=0;l<255;l+=1)ys[l]=i,Jd[i]=l,i<<=1,i&256&&(i^=285);for(let l=255;l<512;l+=1)ys[l]=ys[l-255];Sh=!0}function rp(i,l){return i===0||l===0?0:ys[Jd[i]+Jd[l]]}function cb(i,l){np();const o=ub(l),s=Array.from({length:l},()=>0);for(const d of i){const p=d^s.shift();s.push(0);for(let _=0;_<l;_+=1)s[_]^=rp(o[_],p)}return s}function ub(i){np();let l=[1];for(let o=0;o<i;o+=1){const s=Array.from({length:l.length+1},()=>0);for(let d=0;d<l.length;d+=1)s[d]^=rp(l[d],ys[o]),s[d+1]^=l[d];l=s}return l.slice(1)}function db(){const i=ae(fe=>fe.menuPage),l=ae(fe=>fe.closeMenuPage),o=ae(fe=>fe.user),s=ae(fe=>fe.active),d=ae(fe=>fe.layout),p=ae(fe=>fe.savedDevices),_=ae(fe=>fe.updateUsername),m=ae(fe=>fe.createOwnerPairingCode),g=ae(fe=>fe.applyOwnerPairingCode),b=ae(fe=>fe.clearSavedDevices),w=ae(fe=>fe.resetApplicationData),k=ae(fe=>fe.saveDeviceSettings),T=ae(fe=>fe.setEditMode),U=ae(fe=>fe.askConfirm),[N,G]=A.useState((o==null?void 0:o.username)??""),[I,V]=A.useState(!1),[X,P]=A.useState(""),[re,ve]=A.useState(""),[ce,W]=A.useState(!1),[Z,we]=A.useState(""),Ee=A.useRef(null),[ze,J]=A.useState((s==null?void 0:s.icon)??Bl),[Ne,je]=A.useState(!1),[ue,B]=A.useState((s==null?void 0:s.canOthersConnect)??!1),[ne,pe]=A.useState((s==null?void 0:s.canOthersEdit)??!1),[me,xe]=A.useState((s==null?void 0:s.canOthersEditCode)??!1),[E,z]=A.useState((s==null?void 0:s.gridCols)??11),[te,le]=A.useState((s==null?void 0:s.gridRows)??31),[se,H]=A.useState(!1);A.useEffect(()=>{i==="user-settings"&&(G((o==null?void 0:o.username)??""),ve(""),we(""),W(!1))},[i,o==null?void 0:o.username]),A.useEffect(()=>{i==="device-settings"&&s&&(J(s.icon),B(s.canOthersConnect),pe(s.canOthersEdit),xe(s.canOthersEditCode),z(s.gridCols),le(s.gridRows))},[s,i]),A.useEffect(()=>{if(!ce)return;let fe=!1,Le=null,Ce=0;async function Ke(){var kt;const st=window.BarcodeDetector;if(!st||!((kt=navigator.mediaDevices)!=null&&kt.getUserMedia)){we("Denne browser kan ikke scanne QR-koder. Skriv ejerkoden i stedet."),W(!1);return}try{Le=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const Ot=Ee.current;if(!Ot)return;Ot.srcObject=Le,await Ot.play();const Zt=new st({formats:["qr_code"]}),Cn=async()=>{var Jt;if(!fe){try{const yn=(Jt=(await Zt.detect(Ot)).find(yr=>yr.rawValue))==null?void 0:Jt.rawValue;if(yn){ve(yn),g(yn)&&V(!1),W(!1);return}}catch{}Ce=window.requestAnimationFrame(Cn)}};Ce=window.requestAnimationFrame(Cn)}catch{we("Kameraet kunne ikke åbnes. Skriv ejerkoden i stedet."),W(!1)}}return Ke(),()=>{fe=!0,Ce&&window.cancelAnimationFrame(Ce),Le==null||Le.getTracks().forEach(st=>st.stop())}},[g,ce]);const D=(fe,Le)=>Number.isFinite(fe)?Math.max(ai,Math.min(ii,Math.round(fe))):Le,oe=(o==null?void 0:o.username)??"",ye=N.trim(),Ue=ye.length>0&&ye!==oe;if(!i)return null;if(i==="user-settings"){let fe=function(){const Ke=m();Ke&&(P(Ke),ve(""),V(!0))},Le=function(){g(re)&&(ve(""),V(!1))};async function Ce(){var Ke;try{await((Ke=navigator.clipboard)==null?void 0:Ke.writeText(X))}catch{}}return u.jsxs(u.Fragment,{children:[u.jsx(qt,{title:"Brugerindstillinger",onClose:l,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(rr,{label:"GUID",value:(o==null?void 0:o.userID)??"Ukendt"}),u.jsxs("div",{className:`field ${N.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-username",value:N,onChange:Ke=>G(Ke.target.value),maxLength:24,autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>_(N),disabled:!Ue,children:"Gem nyt brugernavn"}),u.jsx("div",{className:"notice",children:"Ejerkode bruges, hvis den samme person skal forbinde fra flere browsere eller telefoner."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:fe,children:"Ejerkode"}),u.jsx("button",{className:"btn btn-outline btn-block btn-danger",type:"button",onClick:()=>U({title:"Start forfra",message:"Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.",confirmLabel:"Slet alt",onConfirm:()=>{w()}}),children:"Slet brugerdata"})]})}),I&&u.jsx(qt,{title:"Del ejerkode",onClose:()=>V(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(mb,{code:X}),u.jsx("code",{className:"owner-code-text",children:X}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void Ce(),children:"Kopiér ejerkode"}),u.jsxs("div",{className:`field ${re.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-owner-code",value:re,onChange:Ke=>ve(Ke.target.value),autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-owner-code",children:"Skriv ejerkode"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:Le,disabled:!re.trim(),children:"Brug ejerkode i denne browser"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>W(Ke=>!Ke),children:ce?"Stop scanning":"Scan QR-kode"}),Z&&u.jsx("div",{className:"notice",children:Z}),ce&&u.jsx("video",{className:"owner-code-video",ref:Ee,muted:!0,playsInline:!0})]})})]})}if(i==="application-settings")return u.jsx(qt,{title:"Applikationsindstillinger",onClose:l,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(rr,{label:"Version",value:xs}),u.jsx(rr,{label:"Bluetooth",value:yc()?"Tilgængelig":"Ikke tilgængelig"}),u.jsx(rr,{label:"Gemte enheder",value:String(p.length)}),u.jsx("div",{className:"notice",children:"Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne tilladelsen i browserens site- eller Bluetooth-indstillinger."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>U({title:"Ryd gemte enheder",message:"Vil du fjerne alle gemte enheder fra denne browser?",confirmLabel:"Ryd",onConfirm:b}),disabled:p.length===0,children:"Ryd gemte enheder"})]})});if(i==="application-about")return u.jsx(qt,{title:"Om appen",onClose:l,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Pico Kontrol Panel er lavet til at bygge og fjernstyre sjove eller seje Raspberry Pi Pico W-projekter."}),u.jsx(rr,{label:"Udvikler",value:"Christian Bröchner Rasmussen"}),u.jsx(rr,{label:"Version",value:xs})]})});if(i==="application-help")return u.jsx(qt,{title:"Hjælp til applikationen",onClose:l,children:u.jsxs("div",{className:"settings-stack prose help-lesson",children:[u.jsxs("div",{className:"help-lesson-card",children:[u.jsx("strong",{children:"Komplet undervisningsforløb"}),u.jsx("p",{children:"Linket åbner Teknologiskolens guide til Pico Kontrol Panel. Her kan du lære hele arbejdsgangen: browseropsætning, Kodeværkstedet, MicroPython, USB-installation, Bluetooth-forbindelse, kontrolpaneler og trådløs kodeudvikling."})]}),u.jsxs("div",{className:"help-lesson-list","aria-label":"Undervisningsforløbet indeholder",children:[u.jsx("span",{children:"Trin-for-trin opsætning"}),u.jsx("span",{children:"Øvelser til kode og kontrolpanel"}),u.jsx("span",{children:"Projektforslag med Pico W"})]}),u.jsx("p",{className:"help-lesson-destination",children:"Du sendes til materialer.teknologiskolen.dk i en ny fane."}),u.jsx("a",{className:"btn btn-primary btn-block",href:"https://materialer.teknologiskolen.dk/lessons/fjernstyring-af-raspberry-pi-pico-w",target:"_blank",rel:"noreferrer",children:"Åbn komplet undervisningsforløb"})]})});if(i==="device-settings"){const fe=!!(s!=null&&s.isOwnedByMe);async function Le(Ce=!1){if(!s||!fe)return;const Ke=D(E,s.gridCols),st=D(te,s.gridRows),kt=fb(d,Ke,st);if(kt&&!Ce){U({title:"Gitter kan påvirke layout",message:`Det nuværende layout bruger op til ${kt.requiredCols} kolonner og ${kt.requiredRows} rækker. Det nye gitter er ${Ke} × ${st}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,confirmLabel:"Gem alligevel",onConfirm:()=>{Le(!0)}});return}H(!0),await k(ze,ue,ue&&ne,ue&&me,Ke,st),z(Ke),le(st),H(!1),l()}return u.jsx(qt,{title:"Enhedsindstillinger",onClose:l,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(rr,{label:"Navn",value:(s==null?void 0:s.deviceName)??"Ukendt"}),u.jsx(rr,{label:"Ejer",value:hb(s)}),fe?u.jsxs(u.Fragment,{children:[u.jsxs("button",{className:"device-icon-pick settings-icon-pick",type:"button",onClick:()=>je(!0),"aria-label":"Vælg ikon",children:[u.jsx(Es,{slug:ze}),u.jsx("span",{className:"badge",children:u.jsx(Dt,{name:"plus",size:22})})]}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:ue?"":"active",onClick:()=>B(!1),children:"Privat"}),u.jsx("button",{type:"button",className:ue?"active":"",onClick:()=>B(!0),children:"Offentlig"})]}),ue&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:ne?"":"active",onClick:()=>pe(!1),children:"Nej"}),u.jsx("button",{type:"button",className:ne?"active":"",onClick:()=>pe(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:me?"":"active",onClick:()=>xe(!1),children:"Nej"}),u.jsx("button",{type:"button",className:me?"active":"",onClick:()=>xe(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter"}),u.jsxs("div",{className:"row",children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-cols",children:"Kolonner"}),u.jsx("input",{id:"device-cols",type:"number",min:ai,max:ii,value:Number.isNaN(E)?"":E,onChange:Ce=>z(parseInt(Ce.target.value,10)),onBlur:()=>z(D(E,(s==null?void 0:s.gridCols)??11))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-rows",children:"Rækker"}),u.jsx("input",{id:"device-rows",type:"number",min:ai,max:ii,value:Number.isNaN(te)?"":te,onChange:Ce=>le(parseInt(Ce.target.value,10)),onBlur:()=>le(D(te,(s==null?void 0:s.gridRows)??31))})]})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>Le(),disabled:se,children:se?"Gemmer...":"Gem enhedsindstillinger"})]}):u.jsxs(u.Fragment,{children:[u.jsx(rr,{label:"Ikon",value:(s==null?void 0:s.icon)??Bl}),u.jsx(rr,{label:"Redigering",value:s!=null&&s.canEdit?"Tilladt":"Ikke tilladt"}),u.jsx(rr,{label:"Gitter",value:`${(s==null?void 0:s.gridCols)??0} × ${(s==null?void 0:s.gridRows)??0}`})]}),Ne&&u.jsx(Uh,{selected:ze,onSelect:J,onClose:()=>je(!1)})]})})}return u.jsx(qt,{title:"Hjælp til enheden",onClose:l,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Knapper sender en kommando med deres navn, når de trykkes."}),u.jsx("p",{children:"Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse."}),u.jsx("p",{children:"Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen."}),(s==null?void 0:s.canEdit)&&u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>T(!0),children:"Rediger layout"})]})})}function fb(i,l,o){let s=0,d=0;for(const p of i)Ss(p)&&(s=Math.max(s,Math.ceil((p.centerX2+p.spanX)/2)+1),d=Math.max(d,Math.ceil((p.centerY2+p.spanY)/2)+1));return l<s||o<d?{requiredCols:s,requiredRows:d}:null}function mb({code:i}){const l=A.useMemo(()=>rb(i),[i]),o=l.length;return u.jsxs("svg",{className:"owner-code-qr",viewBox:`0 0 ${o+8} ${o+8}`,role:"img","aria-label":"QR-kode til ejerkode",children:[u.jsx("rect",{width:o+8,height:o+8,fill:"white"}),l.map((s,d)=>s.map((p,_)=>p?u.jsx("rect",{x:_+4,y:d+4,width:"1",height:"1",fill:"currentColor"},`${_}-${d}`):null))]})}function hb(i){var l;return i?i.isOwnedByMe?"Dig":((l=i.ownerName)==null?void 0:l.trim())||"Anden bruger":"Ukendt"}function rr({label:i,value:l}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:i}),u.jsx("strong",{children:l})]})}function pb(){const i=ae(s=>s.confirmDialog),l=ae(s=>s.closeConfirm);if(!i)return null;function o(){i==null||i.onConfirm(),l()}return u.jsx(qt,{title:i.title,onClose:l,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:i.message}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:l,children:i.cancelLabel??"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:o,children:i.confirmLabel??"Fortsæt"})]})]})})}function gb(){const i=ae(s=>s.connectionLost),l=ae(s=>s.reconnectLostDevice),o=ae(s=>s.dismissConnectionLost);return i?u.jsx(qt,{title:"Forbindelse afbrudt",onClose:o,children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("p",{className:"confirm-message",children:["Forbindelsen til ",i.deviceName," blev afbrudt. Tjek at Picoen har strøm og er tæt nok på."]}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:o,children:"Luk"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>l(),children:"Genforbind"})]})]})}):null}function _b(){const i=ae(o=>o.toast),l=ae(o=>o.dismissToast);return i?u.jsx("div",{className:"toast",role:"alert",onClick:l,children:i.message},i.id):null}function vb(){const i=ae(m=>m.screen),l=ae(m=>m.splashTarget),o=ae(m=>m.init),s=ae(m=>m.sideMenuOpen),d=ae(m=>m.debuggerOpen),[p,_]=A.useState(!1);return A.useEffect(()=>{o()},[o]),A.useEffect(()=>{if(s){_(!0);return}const m=setTimeout(()=>_(!1),140);return()=>clearTimeout(m)},[s]),u.jsxs("div",{className:"app",children:[i==="splash"&&l==="intro"&&u.jsx(Lm,{}),i==="splash"&&l==="dashboard"&&u.jsx(Um,{}),i==="splash"&&u.jsx(wg,{}),i==="intro"&&u.jsx(Lm,{}),i==="dashboard"&&u.jsx(Um,{}),i==="connection"&&u.jsx(Lg,{}),i==="create"&&u.jsx(Ug,{}),i==="control"&&u.jsx(N_,{}),i==="ide"&&u.jsx(jv,{}),p&&u.jsx(Wv,{open:s}),u.jsx(db,{}),u.jsx(gb,{}),u.jsx(pb,{}),d&&u.jsx(eb,{}),u.jsx(_b,{})]})}function bb(){if(!("serviceWorker"in navigator))return;window.addEventListener("load",()=>{const l=new URL("sw.js",window.location.href);navigator.serviceWorker.register(l,{scope:"./"}).catch(o=>{console.warn("Service worker registration failed:",o)})});let i=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{i||window.crossOriginIsolated||(i=!0,window.location.reload())})}bb();C2.createRoot(document.getElementById("root")).render(u.jsx(_s.StrictMode,{children:u.jsx(vb,{})}));
