var M2=Object.defineProperty;var N2=(a,l,o)=>l in a?M2(a,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[l]=o;var be=(a,l,o)=>N2(a,typeof l!="symbol"?l+"":l,o);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function o(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function s(d){if(d.ep)return;d.ep=!0;const p=o(d);fetch(d.href,p)}})();function Nh(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Sd={exports:{}},gs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function j2(){if(pm)return gs;pm=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function o(s,d,p){var g=null;if(p!==void 0&&(g=""+p),d.key!==void 0&&(g=""+d.key),"key"in d){p={};for(var m in d)m!=="key"&&(p[m]=d[m])}else p=d;return d=p.ref,{$$typeof:a,type:s,key:g,ref:d!==void 0?d:null,props:p}}return gs.Fragment=l,gs.jsx=o,gs.jsxs=o,gs}var gm;function R2(){return gm||(gm=1,Sd.exports=j2()),Sd.exports}var u=R2(),Ed={exports:{}},Oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function A2(){if(_m)return Oe;_m=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),T=Symbol.iterator;function A(E){return E===null||typeof E!="object"?null:(E=T&&E[T]||E["@@iterator"],typeof E=="function"?E:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,X={};function $(E,V,ne){this.props=E,this.context=V,this.refs=X,this.updater=ne||B}$.prototype.isReactComponent={},$.prototype.setState=function(E,V){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,V,"setState")},$.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function O(){}O.prototype=$.prototype;function le(E,V,ne){this.props=E,this.context=V,this.refs=X,this.updater=ne||B}var H=le.prototype=new O;H.constructor=le,U(H,$.prototype),H.isPureReactComponent=!0;var ue=Array.isArray;function pe(){}var ae={H:null,A:null,T:null,S:null},_e=Object.prototype.hasOwnProperty;function ge(E,V,ne){var ie=ne.ref;return{$$typeof:a,type:E,key:V,ref:ie!==void 0?ie:null,props:ne}}function Ce(E,V){return ge(E.type,V,E.props)}function te(E){return typeof E=="object"&&E!==null&&E.$$typeof===a}function Ue(E){var V={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(ne){return V[ne]})}var we=/\/+/g;function Xe(E,V){return typeof E=="object"&&E!==null&&E.key!=null?Ue(""+E.key):V.toString(36)}function F(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(pe,pe):(E.status="pending",E.then(function(V){E.status==="pending"&&(E.status="fulfilled",E.value=V)},function(V){E.status==="pending"&&(E.status="rejected",E.reason=V)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function z(E,V,ne,ie,se){var xe=typeof E;(xe==="undefined"||xe==="boolean")&&(E=null);var Re=!1;if(E===null)Re=!0;else switch(xe){case"bigint":case"string":case"number":Re=!0;break;case"object":switch(E.$$typeof){case a:case l:Re=!0;break;case k:return Re=E._init,z(Re(E._payload),V,ne,ie,se)}}if(Re)return se=se(E),Re=ie===""?"."+Xe(E,0):ie,ue(se)?(ne="",Re!=null&&(ne=Re.replace(we,"$&/")+"/"),z(se,V,ne,"",function(he){return he})):se!=null&&(te(se)&&(se=Ce(se,ne+(se.key==null||E&&E.key===se.key?"":(""+se.key).replace(we,"$&/")+"/")+Re)),V.push(se)),1;Re=0;var Ke=ie===""?".":ie+":";if(ue(E))for(var Be=0;Be<E.length;Be++)ie=E[Be],xe=Ke+Xe(ie,Be),Re+=z(ie,V,ne,xe,se);else if(Be=A(E),typeof Be=="function")for(E=Be.call(E),Be=0;!(ie=E.next()).done;)ie=ie.value,xe=Ke+Xe(ie,Be++),Re+=z(ie,V,ne,xe,se);else if(xe==="object"){if(typeof E.then=="function")return z(F(E),V,ne,ie,se);throw V=String(E),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return Re}function Z(E,V,ne){if(E==null)return E;var ie=[],se=0;return z(E,ie,"","",function(xe){return V.call(ne,xe,se++)}),ie}function de(E){if(E._status===-1){var V=E._result;V=V(),V.then(function(ne){(E._status===0||E._status===-1)&&(E._status=1,E._result=ne)},function(ne){(E._status===0||E._status===-1)&&(E._status=2,E._result=ne)}),E._status===-1&&(E._status=0,E._result=V)}if(E._status===1)return E._result.default;throw E._result}var Ne=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},me={map:Z,forEach:function(E,V,ne){Z(E,function(){V.apply(this,arguments)},ne)},count:function(E){var V=0;return Z(E,function(){V++}),V},toArray:function(E){return Z(E,function(V){return V})||[]},only:function(E){if(!te(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return Oe.Activity=x,Oe.Children=me,Oe.Component=$,Oe.Fragment=o,Oe.Profiler=d,Oe.PureComponent=le,Oe.StrictMode=s,Oe.Suspense=_,Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae,Oe.__COMPILER_RUNTIME={__proto__:null,c:function(E){return ae.H.useMemoCache(E)}},Oe.cache=function(E){return function(){return E.apply(null,arguments)}},Oe.cacheSignal=function(){return null},Oe.cloneElement=function(E,V,ne){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var ie=U({},E.props),se=E.key;if(V!=null)for(xe in V.key!==void 0&&(se=""+V.key),V)!_e.call(V,xe)||xe==="key"||xe==="__self"||xe==="__source"||xe==="ref"&&V.ref===void 0||(ie[xe]=V[xe]);var xe=arguments.length-2;if(xe===1)ie.children=ne;else if(1<xe){for(var Re=Array(xe),Ke=0;Ke<xe;Ke++)Re[Ke]=arguments[Ke+2];ie.children=Re}return ge(E.type,se,ie)},Oe.createContext=function(E){return E={$$typeof:g,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:p,_context:E},E},Oe.createElement=function(E,V,ne){var ie,se={},xe=null;if(V!=null)for(ie in V.key!==void 0&&(xe=""+V.key),V)_e.call(V,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(se[ie]=V[ie]);var Re=arguments.length-2;if(Re===1)se.children=ne;else if(1<Re){for(var Ke=Array(Re),Be=0;Be<Re;Be++)Ke[Be]=arguments[Be+2];se.children=Ke}if(E&&E.defaultProps)for(ie in Re=E.defaultProps,Re)se[ie]===void 0&&(se[ie]=Re[ie]);return ge(E,xe,se)},Oe.createRef=function(){return{current:null}},Oe.forwardRef=function(E){return{$$typeof:m,render:E}},Oe.isValidElement=te,Oe.lazy=function(E){return{$$typeof:k,_payload:{_status:-1,_result:E},_init:de}},Oe.memo=function(E,V){return{$$typeof:b,type:E,compare:V===void 0?null:V}},Oe.startTransition=function(E){var V=ae.T,ne={};ae.T=ne;try{var ie=E(),se=ae.S;se!==null&&se(ne,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(pe,Ne)}catch(xe){Ne(xe)}finally{V!==null&&ne.types!==null&&(V.types=ne.types),ae.T=V}},Oe.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()},Oe.use=function(E){return ae.H.use(E)},Oe.useActionState=function(E,V,ne){return ae.H.useActionState(E,V,ne)},Oe.useCallback=function(E,V){return ae.H.useCallback(E,V)},Oe.useContext=function(E){return ae.H.useContext(E)},Oe.useDebugValue=function(){},Oe.useDeferredValue=function(E,V){return ae.H.useDeferredValue(E,V)},Oe.useEffect=function(E,V){return ae.H.useEffect(E,V)},Oe.useEffectEvent=function(E){return ae.H.useEffectEvent(E)},Oe.useId=function(){return ae.H.useId()},Oe.useImperativeHandle=function(E,V,ne){return ae.H.useImperativeHandle(E,V,ne)},Oe.useInsertionEffect=function(E,V){return ae.H.useInsertionEffect(E,V)},Oe.useLayoutEffect=function(E,V){return ae.H.useLayoutEffect(E,V)},Oe.useMemo=function(E,V){return ae.H.useMemo(E,V)},Oe.useOptimistic=function(E,V){return ae.H.useOptimistic(E,V)},Oe.useReducer=function(E,V,ne){return ae.H.useReducer(E,V,ne)},Oe.useRef=function(E){return ae.H.useRef(E)},Oe.useState=function(E){return ae.H.useState(E)},Oe.useSyncExternalStore=function(E,V,ne){return ae.H.useSyncExternalStore(E,V,ne)},Oe.useTransition=function(){return ae.H.useTransition()},Oe.version="19.2.7",Oe}var vm;function rf(){return vm||(vm=1,Ed.exports=A2()),Ed.exports}var N=rf();const Es=Nh(N);var Td={exports:{}},_s={},Md={exports:{}},Nd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function C2(){return bm||(bm=1,(function(a){function l(z,Z){var de=z.length;z.push(Z);e:for(;0<de;){var Ne=de-1>>>1,me=z[Ne];if(0<d(me,Z))z[Ne]=Z,z[de]=me,de=Ne;else break e}}function o(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var Z=z[0],de=z.pop();if(de!==Z){z[0]=de;e:for(var Ne=0,me=z.length,E=me>>>1;Ne<E;){var V=2*(Ne+1)-1,ne=z[V],ie=V+1,se=z[ie];if(0>d(ne,de))ie<me&&0>d(se,ne)?(z[Ne]=se,z[ie]=de,Ne=ie):(z[Ne]=ne,z[V]=de,Ne=V);else if(ie<me&&0>d(se,de))z[Ne]=se,z[ie]=de,Ne=ie;else break e}}return Z}function d(z,Z){var de=z.sortIndex-Z.sortIndex;return de!==0?de:z.id-Z.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;a.unstable_now=function(){return p.now()}}else{var g=Date,m=g.now();a.unstable_now=function(){return g.now()-m}}var _=[],b=[],k=1,x=null,T=3,A=!1,B=!1,U=!1,X=!1,$=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate<"u"?setImmediate:null;function H(z){for(var Z=o(b);Z!==null;){if(Z.callback===null)s(b);else if(Z.startTime<=z)s(b),Z.sortIndex=Z.expirationTime,l(_,Z);else break;Z=o(b)}}function ue(z){if(U=!1,H(z),!B)if(o(_)!==null)B=!0,pe||(pe=!0,Ue());else{var Z=o(b);Z!==null&&F(ue,Z.startTime-z)}}var pe=!1,ae=-1,_e=5,ge=-1;function Ce(){return X?!0:!(a.unstable_now()-ge<_e)}function te(){if(X=!1,pe){var z=a.unstable_now();ge=z;var Z=!0;try{e:{B=!1,U&&(U=!1,O(ae),ae=-1),A=!0;var de=T;try{t:{for(H(z),x=o(_);x!==null&&!(x.expirationTime>z&&Ce());){var Ne=x.callback;if(typeof Ne=="function"){x.callback=null,T=x.priorityLevel;var me=Ne(x.expirationTime<=z);if(z=a.unstable_now(),typeof me=="function"){x.callback=me,H(z),Z=!0;break t}x===o(_)&&s(_),H(z)}else s(_);x=o(_)}if(x!==null)Z=!0;else{var E=o(b);E!==null&&F(ue,E.startTime-z),Z=!1}}break e}finally{x=null,T=de,A=!1}Z=void 0}}finally{Z?Ue():pe=!1}}}var Ue;if(typeof le=="function")Ue=function(){le(te)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,Xe=we.port2;we.port1.onmessage=te,Ue=function(){Xe.postMessage(null)}}else Ue=function(){$(te,0)};function F(z,Z){ae=$(function(){z(a.unstable_now())},Z)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return T},a.unstable_next=function(z){switch(T){case 1:case 2:case 3:var Z=3;break;default:Z=T}var de=T;T=Z;try{return z()}finally{T=de}},a.unstable_requestPaint=function(){X=!0},a.unstable_runWithPriority=function(z,Z){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var de=T;T=z;try{return Z()}finally{T=de}},a.unstable_scheduleCallback=function(z,Z,de){var Ne=a.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?Ne+de:Ne):de=Ne,z){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=de+me,z={id:k++,callback:Z,priorityLevel:z,startTime:de,expirationTime:me,sortIndex:-1},de>Ne?(z.sortIndex=de,l(b,z),o(_)===null&&z===o(b)&&(U?(O(ae),ae=-1):U=!0,F(ue,de-Ne))):(z.sortIndex=me,l(_,z),B||A||(B=!0,pe||(pe=!0,Ue()))),z},a.unstable_shouldYield=Ce,a.unstable_wrapCallback=function(z){var Z=T;return function(){var de=T;T=Z;try{return z.apply(this,arguments)}finally{T=de}}}})(Nd)),Nd}var ym;function D2(){return ym||(ym=1,Md.exports=C2()),Md.exports}var jd={exports:{}},an={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function O2(){if(wm)return an;wm=1;var a=rf();function l(_){var b="https://react.dev/errors/"+_;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)b+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+_+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var s={d:{f:o,r:function(){throw Error(l(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function p(_,b,k){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:x==null?null:""+x,children:_,containerInfo:b,implementation:k}}var g=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(_,b){if(_==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return an.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,an.createPortal=function(_,b){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(l(299));return p(_,b,null,k)},an.flushSync=function(_){var b=g.T,k=s.p;try{if(g.T=null,s.p=2,_)return _()}finally{g.T=b,s.p=k,s.d.f()}},an.preconnect=function(_,b){typeof _=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,s.d.C(_,b))},an.prefetchDNS=function(_){typeof _=="string"&&s.d.D(_)},an.preinit=function(_,b){if(typeof _=="string"&&b&&typeof b.as=="string"){var k=b.as,x=m(k,b.crossOrigin),T=typeof b.integrity=="string"?b.integrity:void 0,A=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;k==="style"?s.d.S(_,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:x,integrity:T,fetchPriority:A}):k==="script"&&s.d.X(_,{crossOrigin:x,integrity:T,fetchPriority:A,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},an.preinitModule=function(_,b){if(typeof _=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var k=m(b.as,b.crossOrigin);s.d.M(_,{crossOrigin:k,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&s.d.M(_)},an.preload=function(_,b){if(typeof _=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var k=b.as,x=m(k,b.crossOrigin);s.d.L(_,k,{crossOrigin:x,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},an.preloadModule=function(_,b){if(typeof _=="string")if(b){var k=m(b.as,b.crossOrigin);s.d.m(_,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:k,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else s.d.m(_)},an.requestFormReset=function(_){s.d.r(_)},an.unstable_batchedUpdates=function(_,b){return _(b)},an.useFormState=function(_,b,k){return g.H.useFormState(_,b,k)},an.useFormStatus=function(){return g.H.useHostTransitionStatus()},an.version="19.2.7",an}var xm;function jh(){if(xm)return jd.exports;xm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),jd.exports=O2(),jd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function L2(){if(km)return _s;km=1;var a=D2(),l=rf(),o=jh();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _(e){if(p(e)!==e)throw Error(s(188))}function b(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var c=i.alternate;if(c===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===c.child){for(c=i.child;c;){if(c===n)return _(i),e;if(c===r)return _(i),t;c=c.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=c;else{for(var h=!1,y=i.child;y;){if(y===n){h=!0,n=i,r=c;break}if(y===r){h=!0,r=i,n=c;break}y=y.sibling}if(!h){for(y=c.child;y;){if(y===n){h=!0,n=c,r=i;break}if(y===r){h=!0,r=c,n=i;break}y=y.sibling}if(!h)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function k(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=k(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,T=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),le=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),ge=Symbol.for("react.activity"),Ce=Symbol.for("react.memo_cache_sentinel"),te=Symbol.iterator;function Ue(e){return e===null||typeof e!="object"?null:(e=te&&e[te]||e["@@iterator"],typeof e=="function"?e:null)}var we=Symbol.for("react.client.reference");function Xe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===we?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case $:return"Profiler";case X:return"StrictMode";case ue:return"Suspense";case pe:return"SuspenseList";case ge:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case le:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case H:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ae:return t=e.displayName||null,t!==null?t:Xe(e.type)||"Memo";case _e:t=e._payload,e=e._init;try{return Xe(e(t))}catch{}}return null}var F=Array.isArray,z=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},Ne=[],me=-1;function E(e){return{current:e}}function V(e){0>me||(e.current=Ne[me],Ne[me]=null,me--)}function ne(e,t){me++,Ne[me]=e.current,e.current=t}var ie=E(null),se=E(null),xe=E(null),Re=E(null);function Ke(e,t){switch(ne(xe,t),ne(se,e),ne(ie,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?U1(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=U1(t),e=q1(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(ie),ne(ie,e)}function Be(){V(ie),V(se),V(xe)}function he(e){e.memoizedState!==null&&ne(Re,e);var t=ie.current,n=q1(t,e.type);t!==n&&(ne(se,e),ne(ie,n))}function Ee(e){se.current===e&&(V(ie),V(se)),Re.current===e&&(V(Re),fs._currentValue=de)}var ot,I;function J(e){if(ot===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ot=t&&t[1]||"",I=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ot+e+I}var ee=!1;function Ae(e,t){if(!e||ee)return"";ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(P){var q=P}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(P){q=P}e.call(Q.prototype)}}else{try{throw Error()}catch(P){q=P}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(P){if(P&&q&&typeof P.stack=="string")return[P.stack,q.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),h=c[0],y=c[1];if(h&&y){var S=h.split(`
`),L=y.split(`
`);for(i=r=0;r<S.length&&!S[r].includes("DetermineComponentFrameRoot");)r++;for(;i<L.length&&!L[i].includes("DetermineComponentFrameRoot");)i++;if(r===S.length||i===L.length)for(r=S.length-1,i=L.length-1;1<=r&&0<=i&&S[r]!==L[i];)i--;for(;1<=r&&0<=i;r--,i--)if(S[r]!==L[i]){if(r!==1||i!==1)do if(r--,i--,0>i||S[r]!==L[i]){var Y=`
`+S[r].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=r&&0<=i);break}}}finally{ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?J(n):""}function Qe(e,t){switch(e.tag){case 26:case 27:case 5:return J(e.type);case 16:return J("Lazy");case 13:return e.child!==t&&t!==null?J("Suspense Fallback"):J("Suspense");case 19:return J("SuspenseList");case 0:case 15:return Ae(e.type,!1);case 11:return Ae(e.type.render,!1);case 1:return Ae(e.type,!0);case 31:return J("Activity");default:return""}}function Ve(e){try{var t="",n=null;do t+=Qe(e,n),n=e,e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var We=Object.prototype.hasOwnProperty,De=a.unstable_scheduleCallback,Et=a.unstable_cancelCallback,Un=a.unstable_shouldYield,on=a.unstable_requestPaint,gt=a.unstable_now,Mr=a.unstable_getCurrentPriorityLevel,En=a.unstable_ImmediatePriority,tr=a.unstable_UserBlockingPriority,Ft=a.unstable_NormalPriority,tn=a.unstable_LowPriority,Nr=a.unstable_IdlePriority,al=a.log,nn=a.unstable_setDisableYieldValue,qn=null,at=null;function _t(e){if(typeof al=="function"&&nn(e),at&&typeof at.setStrictMode=="function")try{at.setStrictMode(qn,e)}catch{}}var mt=Math.clz32?Math.clz32:fr,il=Math.log,ui=Math.LN2;function fr(e){return e>>>=0,e===0?32:31-(il(e)/ui|0)|0}var mn=256,mr=262144,hn=4194304;function re(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Te(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,c=e.suspendedLanes,h=e.pingedLanes;e=e.warmLanes;var y=r&134217727;return y!==0?(r=y&~c,r!==0?i=re(r):(h&=y,h!==0?i=re(h):n||(n=y&~e,n!==0&&(i=re(n))))):(y=r&~c,y!==0?i=re(y):h!==0?i=re(h):n||(n=r&~e,n!==0&&(i=re(n)))),i===0?0:t!==0&&t!==i&&(t&c)===0&&(c=i&-i,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:i}function nt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function wt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fe(){var e=hn;return hn<<=1,(hn&62914560)===0&&(hn=4194304),e}function ct(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ze(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ht(e,t,n,r,i,c){var h=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var y=e.entanglements,S=e.expirationTimes,L=e.hiddenUpdates;for(n=h&~n;0<n;){var Y=31-mt(n),Q=1<<Y;y[Y]=0,S[Y]=-1;var q=L[Y];if(q!==null)for(L[Y]=null,Y=0;Y<q.length;Y++){var P=q[Y];P!==null&&(P.lane&=-536870913)}n&=~Q}r!==0&&hr(e,r,0),c!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=c&~(h&~t))}function hr(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-mt(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function jr(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-mt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function Rr(e,t){var n=t&-t;return n=(n&42)!==0?1:di(n),(n&(e.suspendedLanes|t))!==0?0:n}function di(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function nr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ls(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:om(e.type))}function va(e,t){var n=Z.p;try{return Z.p=e,t()}finally{Z.p=n}}var pr=Math.random().toString(36).slice(2),Tt="__reactFiber$"+pr,St="__reactProps$"+pr,ht="__reactContainer$"+pr,ba="__reactEvents$"+pr,gr="__reactListeners$"+pr,fi="__reactHandles$"+pr,ya="__reactResources$"+pr,_r="__reactMarker$"+pr;function sl(e){delete e[Tt],delete e[St],delete e[ba],delete e[gr],delete e[fi]}function Tn(e){var t=e[Tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[Tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$1(e);e!==null;){if(n=e[Tt])return n;e=$1(e)}return t}e=n,n=e.parentNode}return null}function rr(e){if(e=e[Tt]||e[ht]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function rn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function pn(e){var t=e[ya];return t||(t=e[ya]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function xt(e){e[_r]=!0}var Hn=new Set,Ar={};function Mn(e,t){gn(e,t),gn(e+"Capture",t)}function gn(e,t){for(Ar[e]=t,e=0;e<t.length;e++)Hn.add(t[e])}var mi=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lr={},ol={};function Cr(e){return We.call(ol,e)?!0:We.call(lr,e)?!1:mi.test(e)?ol[e]=!0:(lr[e]=!0,!1)}function ar(e,t,n){if(Cr(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function ir(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Vn(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+r)}}function Gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wa(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,c=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(h){n=""+h,c.call(this,h)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(h){n=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vr(e){if(!e._valueTracker){var t=Fl(e)?"checked":"value";e._valueTracker=wa(e,t,""+e[t])}}function Dr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Fl(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ke(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var hi=/[\n"\\]/g;function _n(e){return e.replace(hi,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function pi(e,t,n,r,i,c,h,y){e.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.type=h:e.removeAttribute("type"),t!=null?h==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Gt(t)):e.value!==""+Gt(t)&&(e.value=""+Gt(t)):h!=="submit"&&h!=="reset"||e.removeAttribute("value"),t!=null?gi(e,h,Gt(t)):n!=null?gi(e,h,Gt(n)):r!=null&&e.removeAttribute("value"),i==null&&c!=null&&(e.defaultChecked=!!c),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+Gt(y):e.removeAttribute("name")}function Bs(e,t,n,r,i,c,h,y){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){vr(e);return}n=n!=null?""+Gt(n):"",t=t!=null?""+Gt(t):n,y||t===e.value||(e.value=t),e.defaultValue=t}r=r??i,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=y?e.checked:!!r,e.defaultChecked=!!r,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.name=h),vr(e)}function gi(e,t,n){t==="number"&&ke(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function In(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Or(e,t,n){if(t!=null&&(t=""+Gt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Gt(n):""}function xa(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(F(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n==null&&(n=""),t=n}n=Gt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==""&&r!==null&&(e.value=r),vr(e)}function Kt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _i=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cn(e,t,n){var r=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,n):typeof n!="number"||n===0||_i.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function zs(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&cn(e,i,r)}else for(var c in t)t.hasOwnProperty(c)&&cn(e,c,t[c])}function vi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Us=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function G(e){return bi.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function sr(){}var yi=null;function wi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pn=null,Lr=null;function xi(e){var t=rr(e);if(t&&(e=t.stateNode)){var n=e[St]||null;e:switch(e=t.stateNode,t.type){case"input":if(pi(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+_n(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[St]||null;if(!i)throw Error(s(90));pi(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Dr(r)}break e;case"textarea":Or(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&In(e,!!n.multiple,t,!1)}}}var cl=!1;function Mt(e,t,n){if(cl)return e(t,n);cl=!0;try{var r=e(t);return r}finally{if(cl=!1,(Pn!==null||Lr!==null)&&(Uo(),Pn&&(t=Pn,e=Lr,Lr=Pn=null,xi(t),e)))for(t=0;t<e.length;t++)xi(e[t])}}function ul(e,t){var n=e.stateNode;if(n===null)return null;var r=n[St]||null;if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Br=!1;if(vn)try{var Gl={};Object.defineProperty(Gl,"passive",{get:function(){Br=!0}}),window.addEventListener("test",Gl,Gl),window.removeEventListener("test",Gl,Gl)}catch{Br=!1}var br=null,ki=null,$l=null;function qs(){if($l)return $l;var e,t=ki,n=t.length,r,i="value"in br?br.value:br.textContent,c=i.length;for(e=0;e<n&&t[e]===i[e];e++);var h=n-e;for(r=1;r<=h&&t[n-r]===i[c-r];r++);return $l=i.slice(e,1<r?1-r:void 0)}function Yl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nn(){return!0}function dl(){return!1}function ln(e){function t(n,r,i,c,h){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=c,this.target=h,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(n=e[y],this[y]=n?n(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Nn:dl,this.isPropagationStopped=dl,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nn)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nn)},persist:function(){},isPersistent:Nn}),t}var Nt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=ln(Nt),zr=x({},Nt,{view:0,detail:0}),$t=ln(zr),Ur,Si,Kl,yr=x({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ta,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kl&&(Kl&&e.type==="mousemove"?(Ur=e.screenX-Kl.screenX,Si=e.screenY-Kl.screenY):Si=Ur=0,Kl=e),Ur)},movementY:function(e){return"movementY"in e?e.movementY:Si}}),Hs=ln(yr),Vs=x({},yr,{dataTransfer:0}),ka=ln(Vs),Sa=x({},zr,{relatedTarget:0}),Ea=ln(Sa),Ei=x({},Nt,{animationName:0,elapsedTime:0,pseudoElement:0}),Ec=ln(Ei),Tc=x({},Nt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mc=ln(Tc),Fn=x({},Nt,{data:0}),jt=ln(Fn),Ti={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ql={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Is={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ps(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Is[e])?!!t[e]:!1}function Ta(){return Ps}var Nc=x({},zr,{key:function(e){if(e.key){var t=Ti[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ql[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ta,charCode:function(e){return e.type==="keypress"?Yl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jc=ln(Nc),Rc=x({},yr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mi=ln(Rc),Fs=x({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ta}),Ni=ln(Fs),Ac=x({},Nt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gs=ln(Ac),$s=x({},yr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ys=ln($s),Cc=x({},Nt,{newState:0,oldState:0}),Dc=ln(Cc),Xs=[9,13,27,32],Wl=vn&&"CompositionEvent"in window,Zl=null;vn&&"documentMode"in document&&(Zl=document.documentMode);var Oc=vn&&"TextEvent"in window&&!Zl,Ks=vn&&(!Wl||Zl&&8<Zl&&11>=Zl),Qs=" ",Ws=!1;function Zs(e,t){switch(e){case"keyup":return Xs.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Js(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fl=!1;function Lc(e,t){switch(e){case"compositionend":return Js(t);case"keypress":return t.which!==32?null:(Ws=!0,Qs);case"textInput":return e=t.data,e===Qs&&Ws?null:e;default:return null}}function Bc(e,t){if(fl)return e==="compositionend"||!Wl&&Zs(e,t)?(e=qs(),$l=ki=br=null,fl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ks&&t.locale!=="ko"?null:t.data;default:return null}}var zc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ml(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zc[e.type]:t==="textarea"}function ji(e,t,n,r){Pn?Lr?Lr.push(r):Lr=[r]:Pn=r,t=Go(t,"onChange"),0<t.length&&(n=new Xl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var hl=null,Jl=null;function eo(e){C1(e,0)}function Ma(e){var t=rn(e);if(Dr(t))return e}function to(e,t){if(e==="change")return t}var Ri=!1;if(vn){var Ai;if(vn){var Ci="oninput"in document;if(!Ci){var no=document.createElement("div");no.setAttribute("oninput","return;"),Ci=typeof no.oninput=="function"}Ai=Ci}else Ai=!1;Ri=Ai&&(!document.documentMode||9<document.documentMode)}function ro(){hl&&(hl.detachEvent("onpropertychange",lo),Jl=hl=null)}function lo(e){if(e.propertyName==="value"&&Ma(Jl)){var t=[];ji(t,Jl,e,wi(e)),Mt(eo,t)}}function Uc(e,t,n){e==="focusin"?(ro(),hl=t,Jl=n,hl.attachEvent("onpropertychange",lo)):e==="focusout"&&ro()}function qc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ma(Jl)}function Di(e,t){if(e==="click")return Ma(t)}function Gn(e,t){if(e==="input"||e==="change")return Ma(t)}function ao(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var un=typeof Object.is=="function"?Object.is:ao;function ea(e,t){if(un(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!We.call(t,i)||!un(e[i],t[i]))return!1}return!0}function Na(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ta(e,t){var n=Na(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Na(n)}}function ja(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ja(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Oi(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ke(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ke(e.document)}return t}function wr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Li=vn&&"documentMode"in document&&11>=document.documentMode,qr=null,Bi=null,na=null,zi=!1;function f(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zi||qr==null||qr!==ke(r)||(r=qr,"selectionStart"in r&&wr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),na&&ea(na,r)||(na=r,r=Go(Bi,"onSelect"),0<r.length&&(t=new Xl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qr)))}function v(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var w={animationend:v("Animation","AnimationEnd"),animationiteration:v("Animation","AnimationIteration"),animationstart:v("Animation","AnimationStart"),transitionrun:v("Transition","TransitionRun"),transitionstart:v("Transition","TransitionStart"),transitioncancel:v("Transition","TransitionCancel"),transitionend:v("Transition","TransitionEnd")},R={},j={};vn&&(j=document.createElement("div").style,"AnimationEvent"in window||(delete w.animationend.animation,delete w.animationiteration.animation,delete w.animationstart.animation),"TransitionEvent"in window||delete w.transitionend.transition);function W(e){if(R[e])return R[e];if(!w[e])return e;var t=w[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in j)return R[e]=t[n];return e}var fe=W("animationend"),Je=W("animationiteration"),je=W("animationstart"),rt=W("transitionrun"),Rt=W("transitionstart"),dn=W("transitioncancel"),qe=W("transitionend"),vt=new Map,or="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");or.push("scrollEnd");function Dt(e,t){vt.set(e,t),Mn(t,[e])}var bn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Vt=[],jn=0,Ra=0;function Hr(){for(var e=jn,t=Ra=jn=0;t<e;){var n=Vt[t];Vt[t++]=null;var r=Vt[t];Vt[t++]=null;var i=Vt[t];Vt[t++]=null;var c=Vt[t];if(Vt[t++]=null,r!==null&&i!==null){var h=r.pending;h===null?i.next=i:(i.next=h.next,h.next=i),r.pending=i}c!==0&&mf(n,i,c)}}function pl(e,t,n,r){Vt[jn++]=e,Vt[jn++]=t,Vt[jn++]=n,Vt[jn++]=r,Ra|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Vr(e,t,n,r){return pl(e,t,n,r),io(e)}function xr(e,t){return pl(e,null,null,t),io(e)}function mf(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,c=e.return;c!==null;)c.childLanes|=n,r=c.alternate,r!==null&&(r.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(i=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,i&&t!==null&&(i=31-mt(n),e=c.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),c):null}function io(e){if(50<as)throw as=0,Xu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Aa={};function up(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(e,t,n,r){return new up(e,t,n,r)}function Hc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ir(e,t){var n=e.alternate;return n===null?(n=Rn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function hf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function so(e,t,n,r,i,c){var h=0;if(r=e,typeof e=="function")Hc(e)&&(h=1);else if(typeof e=="string")h=p2(e,n,ie.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ge:return e=Rn(31,n,t,i),e.elementType=ge,e.lanes=c,e;case U:return ra(n.children,i,c,t);case X:h=8,i|=24;break;case $:return e=Rn(12,n,t,i|2),e.elementType=$,e.lanes=c,e;case ue:return e=Rn(13,n,t,i),e.elementType=ue,e.lanes=c,e;case pe:return e=Rn(19,n,t,i),e.elementType=pe,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case le:h=10;break e;case O:h=9;break e;case H:h=11;break e;case ae:h=14;break e;case _e:h=16,r=null;break e}h=29,n=Error(s(130,e===null?"null":typeof e,"")),r=null}return t=Rn(h,n,t,i),t.elementType=e,t.type=r,t.lanes=c,t}function ra(e,t,n,r){return e=Rn(7,e,r,t),e.lanes=n,e}function Vc(e,t,n){return e=Rn(6,e,null,t),e.lanes=n,e}function pf(e){var t=Rn(18,null,null,0);return t.stateNode=e,t}function Ic(e,t,n){return t=Rn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var gf=new WeakMap;function $n(e,t){if(typeof e=="object"&&e!==null){var n=gf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ve(t)},gf.set(e,t),t)}return{value:e,source:t,stack:Ve(t)}}var Ca=[],Da=0,oo=null,Ui=0,Yn=[],Xn=0,gl=null,kr=1,Sr="";function Pr(e,t){Ca[Da++]=Ui,Ca[Da++]=oo,oo=e,Ui=t}function _f(e,t,n){Yn[Xn++]=kr,Yn[Xn++]=Sr,Yn[Xn++]=gl,gl=e;var r=kr;e=Sr;var i=32-mt(r)-1;r&=~(1<<i),n+=1;var c=32-mt(t)+i;if(30<c){var h=i-i%5;c=(r&(1<<h)-1).toString(32),r>>=h,i-=h,kr=1<<32-mt(t)+i|n<<i|r,Sr=c+e}else kr=1<<c|n<<i|r,Sr=e}function Pc(e){e.return!==null&&(Pr(e,1),_f(e,1,0))}function Fc(e){for(;e===oo;)oo=Ca[--Da],Ca[Da]=null,Ui=Ca[--Da],Ca[Da]=null;for(;e===gl;)gl=Yn[--Xn],Yn[Xn]=null,Sr=Yn[--Xn],Yn[Xn]=null,kr=Yn[--Xn],Yn[Xn]=null}function vf(e,t){Yn[Xn++]=kr,Yn[Xn++]=Sr,Yn[Xn++]=gl,kr=t.id,Sr=t.overflow,gl=e}var Qt=null,bt=null,Ye=!1,_l=null,Kn=!1,Gc=Error(s(519));function vl(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qi($n(t,e)),Gc}function bf(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Tt]=e,t[St]=r,n){case"dialog":Pe("cancel",t),Pe("close",t);break;case"iframe":case"object":case"embed":Pe("load",t);break;case"video":case"audio":for(n=0;n<ss.length;n++)Pe(ss[n],t);break;case"source":Pe("error",t);break;case"img":case"image":case"link":Pe("error",t),Pe("load",t);break;case"details":Pe("toggle",t);break;case"input":Pe("invalid",t),Bs(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Pe("invalid",t);break;case"textarea":Pe("invalid",t),xa(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||r.suppressHydrationWarning===!0||B1(t.textContent,n)?(r.popover!=null&&(Pe("beforetoggle",t),Pe("toggle",t)),r.onScroll!=null&&Pe("scroll",t),r.onScrollEnd!=null&&Pe("scrollend",t),r.onClick!=null&&(t.onclick=sr),t=!0):t=!1,t||vl(e,!0)}function yf(e){for(Qt=e.return;Qt;)switch(Qt.tag){case 5:case 31:case 13:Kn=!1;return;case 27:case 3:Kn=!0;return;default:Qt=Qt.return}}function Oa(e){if(e!==Qt)return!1;if(!Ye)return yf(e),Ye=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||cd(e.type,e.memoizedProps)),n=!n),n&&bt&&vl(e),yf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));bt=G1(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));bt=G1(e)}else t===27?(t=bt,Cl(e.type)?(e=hd,hd=null,bt=e):bt=t):bt=Qt?Wn(e.stateNode.nextSibling):null;return!0}function la(){bt=Qt=null,Ye=!1}function $c(){var e=_l;return e!==null&&(kn===null?kn=e:kn.push.apply(kn,e),_l=null),e}function qi(e){_l===null?_l=[e]:_l.push(e)}var Yc=E(null),aa=null,Fr=null;function bl(e,t,n){ne(Yc,t._currentValue),t._currentValue=n}function Gr(e){e._currentValue=Yc.current,V(Yc)}function Xc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Kc(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var c=i.dependencies;if(c!==null){var h=i.child;c=c.firstContext;e:for(;c!==null;){var y=c;c=i;for(var S=0;S<t.length;S++)if(y.context===t[S]){c.lanes|=n,y=c.alternate,y!==null&&(y.lanes|=n),Xc(c.return,n,e),r||(h=null);break e}c=y.next}}else if(i.tag===18){if(h=i.return,h===null)throw Error(s(341));h.lanes|=n,c=h.alternate,c!==null&&(c.lanes|=n),Xc(h,n,e),h=null}else h=i.child;if(h!==null)h.return=i;else for(h=i;h!==null;){if(h===e){h=null;break}if(i=h.sibling,i!==null){i.return=h.return,h=i;break}h=h.return}i=h}}function La(e,t,n,r){e=null;for(var i=t,c=!1;i!==null;){if(!c){if((i.flags&524288)!==0)c=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var h=i.alternate;if(h===null)throw Error(s(387));if(h=h.memoizedProps,h!==null){var y=i.type;un(i.pendingProps.value,h.value)||(e!==null?e.push(y):e=[y])}}else if(i===Re.current){if(h=i.alternate,h===null)throw Error(s(387));h.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(fs):e=[fs])}i=i.return}e!==null&&Kc(t,e,n,r),t.flags|=262144}function co(e){for(e=e.firstContext;e!==null;){if(!un(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ia(e){aa=e,Fr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Wt(e){return wf(aa,e)}function uo(e,t){return aa===null&&ia(e),wf(e,t)}function wf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Fr===null){if(e===null)throw Error(s(308));Fr=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Fr=Fr.next=t;return n}var dp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},fp=a.unstable_scheduleCallback,mp=a.unstable_NormalPriority,Bt={$$typeof:le,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qc(){return{controller:new dp,data:new Map,refCount:0}}function Hi(e){e.refCount--,e.refCount===0&&fp(mp,function(){e.controller.abort()})}var Vi=null,Wc=0,Ba=0,za=null;function hp(e,t){if(Vi===null){var n=Vi=[];Wc=0,Ba=ed(),za={status:"pending",value:void 0,then:function(r){n.push(r)}}}return Wc++,t.then(xf,xf),t}function xf(){if(--Wc===0&&Vi!==null){za!==null&&(za.status="fulfilled");var e=Vi;Vi=null,Ba=0,za=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function pp(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(r.status="rejected",r.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),r}var kf=z.S;z.S=function(e,t){i1=gt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&hp(e,t),kf!==null&&kf(e,t)};var sa=E(null);function Zc(){var e=sa.current;return e!==null?e:pt.pooledCache}function fo(e,t){t===null?ne(sa,sa.current):ne(sa,t.pool)}function Sf(){var e=Zc();return e===null?null:{parent:Bt._currentValue,pool:e}}var Ua=Error(s(460)),Jc=Error(s(474)),mo=Error(s(542)),ho={then:function(){}};function Ef(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sr,sr),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Nf(e),e;default:if(typeof t.status=="string")t.then(sr,sr);else{if(e=pt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=r}},function(r){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Nf(e),e}throw ca=t,Ua}}function oa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ca=n,Ua):n}}var ca=null;function Mf(){if(ca===null)throw Error(s(459));var e=ca;return ca=null,e}function Nf(e){if(e===Ua||e===mo)throw Error(s(483))}var qa=null,Ii=0;function po(e){var t=Ii;return Ii+=1,qa===null&&(qa=[]),Tf(qa,e,t)}function Pi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function go(e,t){throw t.$$typeof===T?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function jf(e){function t(C,M){if(e){var D=C.deletions;D===null?(C.deletions=[M],C.flags|=16):D.push(M)}}function n(C,M){if(!e)return null;for(;M!==null;)t(C,M),M=M.sibling;return null}function r(C){for(var M=new Map;C!==null;)C.key!==null?M.set(C.key,C):M.set(C.index,C),C=C.sibling;return M}function i(C,M){return C=Ir(C,M),C.index=0,C.sibling=null,C}function c(C,M,D){return C.index=D,e?(D=C.alternate,D!==null?(D=D.index,D<M?(C.flags|=67108866,M):D):(C.flags|=67108866,M)):(C.flags|=1048576,M)}function h(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function y(C,M,D,K){return M===null||M.tag!==6?(M=Vc(D,C.mode,K),M.return=C,M):(M=i(M,D),M.return=C,M)}function S(C,M,D,K){var Se=D.type;return Se===U?Y(C,M,D.props.children,K,D.key):M!==null&&(M.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===_e&&oa(Se)===M.type)?(M=i(M,D.props),Pi(M,D),M.return=C,M):(M=so(D.type,D.key,D.props,null,C.mode,K),Pi(M,D),M.return=C,M)}function L(C,M,D,K){return M===null||M.tag!==4||M.stateNode.containerInfo!==D.containerInfo||M.stateNode.implementation!==D.implementation?(M=Ic(D,C.mode,K),M.return=C,M):(M=i(M,D.children||[]),M.return=C,M)}function Y(C,M,D,K,Se){return M===null||M.tag!==7?(M=ra(D,C.mode,K,Se),M.return=C,M):(M=i(M,D),M.return=C,M)}function Q(C,M,D){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=Vc(""+M,C.mode,D),M.return=C,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case A:return D=so(M.type,M.key,M.props,null,C.mode,D),Pi(D,M),D.return=C,D;case B:return M=Ic(M,C.mode,D),M.return=C,M;case _e:return M=oa(M),Q(C,M,D)}if(F(M)||Ue(M))return M=ra(M,C.mode,D,null),M.return=C,M;if(typeof M.then=="function")return Q(C,po(M),D);if(M.$$typeof===le)return Q(C,uo(C,M),D);go(C,M)}return null}function q(C,M,D,K){var Se=M!==null?M.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return Se!==null?null:y(C,M,""+D,K);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case A:return D.key===Se?S(C,M,D,K):null;case B:return D.key===Se?L(C,M,D,K):null;case _e:return D=oa(D),q(C,M,D,K)}if(F(D)||Ue(D))return Se!==null?null:Y(C,M,D,K,null);if(typeof D.then=="function")return q(C,M,po(D),K);if(D.$$typeof===le)return q(C,M,uo(C,D),K);go(C,D)}return null}function P(C,M,D,K,Se){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return C=C.get(D)||null,y(M,C,""+K,Se);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case A:return C=C.get(K.key===null?D:K.key)||null,S(M,C,K,Se);case B:return C=C.get(K.key===null?D:K.key)||null,L(M,C,K,Se);case _e:return K=oa(K),P(C,M,D,K,Se)}if(F(K)||Ue(K))return C=C.get(D)||null,Y(M,C,K,Se,null);if(typeof K.then=="function")return P(C,M,D,po(K),Se);if(K.$$typeof===le)return P(C,M,D,uo(M,K),Se);go(M,K)}return null}function ve(C,M,D,K){for(var Se=null,et=null,ye=M,He=M=0,$e=null;ye!==null&&He<D.length;He++){ye.index>He?($e=ye,ye=null):$e=ye.sibling;var tt=q(C,ye,D[He],K);if(tt===null){ye===null&&(ye=$e);break}e&&ye&&tt.alternate===null&&t(C,ye),M=c(tt,M,He),et===null?Se=tt:et.sibling=tt,et=tt,ye=$e}if(He===D.length)return n(C,ye),Ye&&Pr(C,He),Se;if(ye===null){for(;He<D.length;He++)ye=Q(C,D[He],K),ye!==null&&(M=c(ye,M,He),et===null?Se=ye:et.sibling=ye,et=ye);return Ye&&Pr(C,He),Se}for(ye=r(ye);He<D.length;He++)$e=P(ye,C,He,D[He],K),$e!==null&&(e&&$e.alternate!==null&&ye.delete($e.key===null?He:$e.key),M=c($e,M,He),et===null?Se=$e:et.sibling=$e,et=$e);return e&&ye.forEach(function(zl){return t(C,zl)}),Ye&&Pr(C,He),Se}function Me(C,M,D,K){if(D==null)throw Error(s(151));for(var Se=null,et=null,ye=M,He=M=0,$e=null,tt=D.next();ye!==null&&!tt.done;He++,tt=D.next()){ye.index>He?($e=ye,ye=null):$e=ye.sibling;var zl=q(C,ye,tt.value,K);if(zl===null){ye===null&&(ye=$e);break}e&&ye&&zl.alternate===null&&t(C,ye),M=c(zl,M,He),et===null?Se=zl:et.sibling=zl,et=zl,ye=$e}if(tt.done)return n(C,ye),Ye&&Pr(C,He),Se;if(ye===null){for(;!tt.done;He++,tt=D.next())tt=Q(C,tt.value,K),tt!==null&&(M=c(tt,M,He),et===null?Se=tt:et.sibling=tt,et=tt);return Ye&&Pr(C,He),Se}for(ye=r(ye);!tt.done;He++,tt=D.next())tt=P(ye,C,He,tt.value,K),tt!==null&&(e&&tt.alternate!==null&&ye.delete(tt.key===null?He:tt.key),M=c(tt,M,He),et===null?Se=tt:et.sibling=tt,et=tt);return e&&ye.forEach(function(T2){return t(C,T2)}),Ye&&Pr(C,He),Se}function ft(C,M,D,K){if(typeof D=="object"&&D!==null&&D.type===U&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case A:e:{for(var Se=D.key;M!==null;){if(M.key===Se){if(Se=D.type,Se===U){if(M.tag===7){n(C,M.sibling),K=i(M,D.props.children),K.return=C,C=K;break e}}else if(M.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===_e&&oa(Se)===M.type){n(C,M.sibling),K=i(M,D.props),Pi(K,D),K.return=C,C=K;break e}n(C,M);break}else t(C,M);M=M.sibling}D.type===U?(K=ra(D.props.children,C.mode,K,D.key),K.return=C,C=K):(K=so(D.type,D.key,D.props,null,C.mode,K),Pi(K,D),K.return=C,C=K)}return h(C);case B:e:{for(Se=D.key;M!==null;){if(M.key===Se)if(M.tag===4&&M.stateNode.containerInfo===D.containerInfo&&M.stateNode.implementation===D.implementation){n(C,M.sibling),K=i(M,D.children||[]),K.return=C,C=K;break e}else{n(C,M);break}else t(C,M);M=M.sibling}K=Ic(D,C.mode,K),K.return=C,C=K}return h(C);case _e:return D=oa(D),ft(C,M,D,K)}if(F(D))return ve(C,M,D,K);if(Ue(D)){if(Se=Ue(D),typeof Se!="function")throw Error(s(150));return D=Se.call(D),Me(C,M,D,K)}if(typeof D.then=="function")return ft(C,M,po(D),K);if(D.$$typeof===le)return ft(C,M,uo(C,D),K);go(C,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,M!==null&&M.tag===6?(n(C,M.sibling),K=i(M,D),K.return=C,C=K):(n(C,M),K=Vc(D,C.mode,K),K.return=C,C=K),h(C)):n(C,M)}return function(C,M,D,K){try{Ii=0;var Se=ft(C,M,D,K);return qa=null,Se}catch(ye){if(ye===Ua||ye===mo)throw ye;var et=Rn(29,ye,null,C.mode);return et.lanes=K,et.return=C,et}finally{}}}var ua=jf(!0),Rf=jf(!1),yl=!1;function eu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function tu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function wl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xl(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(lt&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=io(e),mf(e,null,n),t}return pl(e,r,t,n),io(e)}function Fi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,jr(e,n)}}function nu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?i=c=h:c=c.next=h,n=n.next}while(n!==null);c===null?i=c=t:c=c.next=t}else i=c=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ru=!1;function Gi(){if(ru){var e=za;if(e!==null)throw e}}function $i(e,t,n,r){ru=!1;var i=e.updateQueue;yl=!1;var c=i.firstBaseUpdate,h=i.lastBaseUpdate,y=i.shared.pending;if(y!==null){i.shared.pending=null;var S=y,L=S.next;S.next=null,h===null?c=L:h.next=L,h=S;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,y=Y.lastBaseUpdate,y!==h&&(y===null?Y.firstBaseUpdate=L:y.next=L,Y.lastBaseUpdate=S))}if(c!==null){var Q=i.baseState;h=0,Y=L=S=null,y=c;do{var q=y.lane&-536870913,P=q!==y.lane;if(P?(Ge&q)===q:(r&q)===q){q!==0&&q===Ba&&(ru=!0),Y!==null&&(Y=Y.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var ve=e,Me=y;q=t;var ft=n;switch(Me.tag){case 1:if(ve=Me.payload,typeof ve=="function"){Q=ve.call(ft,Q,q);break e}Q=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=Me.payload,q=typeof ve=="function"?ve.call(ft,Q,q):ve,q==null)break e;Q=x({},Q,q);break e;case 2:yl=!0}}q=y.callback,q!==null&&(e.flags|=64,P&&(e.flags|=8192),P=i.callbacks,P===null?i.callbacks=[q]:P.push(q))}else P={lane:q,tag:y.tag,payload:y.payload,callback:y.callback,next:null},Y===null?(L=Y=P,S=Q):Y=Y.next=P,h|=q;if(y=y.next,y===null){if(y=i.shared.pending,y===null)break;P=y,y=P.next,P.next=null,i.lastBaseUpdate=P,i.shared.pending=null}}while(!0);Y===null&&(S=Q),i.baseState=S,i.firstBaseUpdate=L,i.lastBaseUpdate=Y,c===null&&(i.shared.lanes=0),Ml|=h,e.lanes=h,e.memoizedState=Q}}function Af(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Cf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Af(n[e],t)}var Ha=E(null),_o=E(0);function Df(e,t){e=el,ne(_o,e),ne(Ha,t),el=e|t.baseLanes}function lu(){ne(_o,el),ne(Ha,Ha.current)}function au(){el=_o.current,V(Ha),V(_o)}var An=E(null),Qn=null;function kl(e){var t=e.alternate;ne(Ot,Ot.current&1),ne(An,e),Qn===null&&(t===null||Ha.current!==null||t.memoizedState!==null)&&(Qn=e)}function iu(e){ne(Ot,Ot.current),ne(An,e),Qn===null&&(Qn=e)}function Of(e){e.tag===22?(ne(Ot,Ot.current),ne(An,e),Qn===null&&(Qn=e)):Sl()}function Sl(){ne(Ot,Ot.current),ne(An,An.current)}function Cn(e){V(An),Qn===e&&(Qn=null),V(Ot)}var Ot=E(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||fd(n)||md(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $r=0,ze=null,ut=null,zt=null,bo=!1,Va=!1,da=!1,yo=0,Yi=0,Ia=null,gp=0;function At(){throw Error(s(321))}function su(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!un(e[n],t[n]))return!1;return!0}function ou(e,t,n,r,i,c){return $r=c,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=e===null||e.memoizedState===null?_0:ku,da=!1,c=n(r,i),da=!1,Va&&(c=Bf(t,n,r,i)),Lf(e),c}function Lf(e){z.H=Qi;var t=ut!==null&&ut.next!==null;if($r=0,zt=ut=ze=null,bo=!1,Yi=0,Ia=null,t)throw Error(s(300));e===null||Ut||(e=e.dependencies,e!==null&&co(e)&&(Ut=!0))}function Bf(e,t,n,r){ze=e;var i=0;do{if(Va&&(Ia=null),Yi=0,Va=!1,25<=i)throw Error(s(301));if(i+=1,zt=ut=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}z.H=v0,c=t(n,r)}while(Va);return c}function _p(){var e=z.H,t=e.useState()[0];return t=typeof t.then=="function"?Xi(t):t,e=e.useState()[0],(ut!==null?ut.memoizedState:null)!==e&&(ze.flags|=1024),t}function cu(){var e=yo!==0;return yo=0,e}function uu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function du(e){if(bo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bo=!1}$r=0,zt=ut=ze=null,Va=!1,Yi=yo=0,Ia=null}function fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?ze.memoizedState=zt=e:zt=zt.next=e,zt}function Lt(){if(ut===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=ut.next;var t=zt===null?ze.memoizedState:zt.next;if(t!==null)zt=t,ut=e;else{if(e===null)throw ze.alternate===null?Error(s(467)):Error(s(310));ut=e,e={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},zt===null?ze.memoizedState=zt=e:zt=zt.next=e}return zt}function wo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xi(e){var t=Yi;return Yi+=1,Ia===null&&(Ia=[]),e=Tf(Ia,e,t),t=ze,(zt===null?t.memoizedState:zt.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?_0:ku),e}function xo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Xi(e);if(e.$$typeof===le)return Wt(e)}throw Error(s(438,String(e)))}function fu(e){var t=null,n=ze.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=ze.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=wo(),ze.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=Ce;return t.index++,n}function Yr(e,t){return typeof t=="function"?t(e):t}function ko(e){var t=Lt();return mu(t,ut,e)}function mu(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,c=r.pending;if(c!==null){if(i!==null){var h=i.next;i.next=c.next,c.next=h}t.baseQueue=i=c,r.pending=null}if(c=e.baseState,i===null)e.memoizedState=c;else{t=i.next;var y=h=null,S=null,L=t,Y=!1;do{var Q=L.lane&-536870913;if(Q!==L.lane?(Ge&Q)===Q:($r&Q)===Q){var q=L.revertLane;if(q===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),Q===Ba&&(Y=!0);else if(($r&q)===q){L=L.next,q===Ba&&(Y=!0);continue}else Q={lane:0,revertLane:L.revertLane,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},S===null?(y=S=Q,h=c):S=S.next=Q,ze.lanes|=q,Ml|=q;Q=L.action,da&&n(c,Q),c=L.hasEagerState?L.eagerState:n(c,Q)}else q={lane:Q,revertLane:L.revertLane,gesture:L.gesture,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},S===null?(y=S=q,h=c):S=S.next=q,ze.lanes|=Q,Ml|=Q;L=L.next}while(L!==null&&L!==t);if(S===null?h=c:S.next=y,!un(c,e.memoizedState)&&(Ut=!0,Y&&(n=za,n!==null)))throw n;e.memoizedState=c,e.baseState=h,e.baseQueue=S,r.lastRenderedState=c}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function hu(e){var t=Lt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,c=t.memoizedState;if(i!==null){n.pending=null;var h=i=i.next;do c=e(c,h.action),h=h.next;while(h!==i);un(c,t.memoizedState)||(Ut=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,r]}function zf(e,t,n){var r=ze,i=Lt(),c=Ye;if(c){if(n===void 0)throw Error(s(407));n=n()}else n=t();var h=!un((ut||i).memoizedState,n);if(h&&(i.memoizedState=n,Ut=!0),i=i.queue,_u(Hf.bind(null,r,i,e),[e]),i.getSnapshot!==t||h||zt!==null&&zt.memoizedState.tag&1){if(r.flags|=2048,Pa(9,{destroy:void 0},qf.bind(null,r,i,n,t),null),pt===null)throw Error(s(349));c||($r&127)!==0||Uf(r,t,n)}return n}function Uf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ze.updateQueue,t===null?(t=wo(),ze.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qf(e,t,n,r){t.value=n,t.getSnapshot=r,Vf(t)&&If(e)}function Hf(e,t,n){return n(function(){Vf(t)&&If(e)})}function Vf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!un(e,n)}catch{return!0}}function If(e){var t=xr(e,2);t!==null&&Sn(t,e,2)}function pu(e){var t=fn();if(typeof e=="function"){var n=e;if(e=n(),da){_t(!0);try{n()}finally{_t(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:e},t}function Pf(e,t,n,r){return e.baseState=n,mu(e,ut,typeof r=="function"?r:Yr)}function vp(e,t,n,r,i){if(To(e))throw Error(s(485));if(e=t.action,e!==null){var c={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){c.listeners.push(h)}};z.T!==null?n(!0):c.isTransition=!1,r(c),n=t.pending,n===null?(c.next=t.pending=c,Ff(t,c)):(c.next=n.next,t.pending=n.next=c)}}function Ff(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var c=z.T,h={};z.T=h;try{var y=n(i,r),S=z.S;S!==null&&S(h,y),Gf(e,t,y)}catch(L){gu(e,t,L)}finally{c!==null&&h.types!==null&&(c.types=h.types),z.T=c}}else try{c=n(i,r),Gf(e,t,c)}catch(L){gu(e,t,L)}}function Gf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){$f(e,t,r)},function(r){return gu(e,t,r)}):$f(e,t,n)}function $f(e,t,n){t.status="fulfilled",t.value=n,Yf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ff(e,n)))}function gu(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=n,Yf(t),t=t.next;while(t!==r)}e.action=null}function Yf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Xf(e,t){return t}function Kf(e,t){if(Ye){var n=pt.formState;if(n!==null){e:{var r=ze;if(Ye){if(bt){t:{for(var i=bt,c=Kn;i.nodeType!==8;){if(!c){i=null;break t}if(i=Wn(i.nextSibling),i===null){i=null;break t}}c=i.data,i=c==="F!"||c==="F"?i:null}if(i){bt=Wn(i.nextSibling),r=i.data==="F!";break e}}vl(r)}r=!1}r&&(t=n[0])}}return n=fn(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xf,lastRenderedState:t},n.queue=r,n=h0.bind(null,ze,r),r.dispatch=n,r=pu(!1),c=xu.bind(null,ze,!1,r.queue),r=fn(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=vp.bind(null,ze,i,c,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Qf(e){var t=Lt();return Wf(t,ut,e)}function Wf(e,t,n){if(t=mu(e,t,Xf)[0],e=ko(Yr)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=Xi(t)}catch(h){throw h===Ua?mo:h}else r=t;t=Lt();var i=t.queue,c=i.dispatch;return n!==t.memoizedState&&(ze.flags|=2048,Pa(9,{destroy:void 0},bp.bind(null,i,n),null)),[r,c,e]}function bp(e,t){e.action=t}function Zf(e){var t=Lt(),n=ut;if(n!==null)return Wf(t,n,e);Lt(),t=t.memoizedState,n=Lt();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Pa(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=ze.updateQueue,t===null&&(t=wo(),ze.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Jf(){return Lt().memoizedState}function So(e,t,n,r){var i=fn();ze.flags|=e,i.memoizedState=Pa(1|t,{destroy:void 0},n,r===void 0?null:r)}function Eo(e,t,n,r){var i=Lt();r=r===void 0?null:r;var c=i.memoizedState.inst;ut!==null&&r!==null&&su(r,ut.memoizedState.deps)?i.memoizedState=Pa(t,c,n,r):(ze.flags|=e,i.memoizedState=Pa(1|t,c,n,r))}function e0(e,t){So(8390656,8,e,t)}function _u(e,t){Eo(2048,8,e,t)}function yp(e){ze.flags|=4;var t=ze.updateQueue;if(t===null)t=wo(),ze.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function t0(e){var t=Lt().memoizedState;return yp({ref:t,nextImpl:e}),function(){if((lt&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function n0(e,t){return Eo(4,2,e,t)}function r0(e,t){return Eo(4,4,e,t)}function l0(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function a0(e,t,n){n=n!=null?n.concat([e]):null,Eo(4,4,l0.bind(null,t,e),n)}function vu(){}function i0(e,t){var n=Lt();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&su(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function s0(e,t){var n=Lt();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&su(t,r[1]))return r[0];if(r=e(),da){_t(!0);try{e()}finally{_t(!1)}}return n.memoizedState=[r,t],r}function bu(e,t,n){return n===void 0||($r&1073741824)!==0&&(Ge&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=o1(),ze.lanes|=e,Ml|=e,n)}function o0(e,t,n,r){return un(n,t)?n:Ha.current!==null?(e=bu(e,n,r),un(e,t)||(Ut=!0),e):($r&42)===0||($r&1073741824)!==0&&(Ge&261930)===0?(Ut=!0,e.memoizedState=n):(e=o1(),ze.lanes|=e,Ml|=e,t)}function c0(e,t,n,r,i){var c=Z.p;Z.p=c!==0&&8>c?c:8;var h=z.T,y={};z.T=y,xu(e,!1,t,n);try{var S=i(),L=z.S;if(L!==null&&L(y,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var Y=pp(S,r);Ki(e,t,Y,Ln(e))}else Ki(e,t,r,Ln(e))}catch(Q){Ki(e,t,{then:function(){},status:"rejected",reason:Q},Ln())}finally{Z.p=c,h!==null&&y.types!==null&&(h.types=y.types),z.T=h}}function wp(){}function yu(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=u0(e).queue;c0(e,i,t,de,n===null?wp:function(){return d0(e),n(r)})}function u0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function d0(e){var t=u0(e);t.next===null&&(t=e.alternate.memoizedState),Ki(e,t.next.queue,{},Ln())}function wu(){return Wt(fs)}function f0(){return Lt().memoizedState}function m0(){return Lt().memoizedState}function xp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ln();e=wl(n);var r=xl(t,e,n);r!==null&&(Sn(r,t,n),Fi(r,t,n)),t={cache:Qc()},e.payload=t;return}t=t.return}}function kp(e,t,n){var r=Ln();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},To(e)?p0(t,n):(n=Vr(e,t,n,r),n!==null&&(Sn(n,e,r),g0(n,t,r)))}function h0(e,t,n){var r=Ln();Ki(e,t,n,r)}function Ki(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(To(e))p0(t,i);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var h=t.lastRenderedState,y=c(h,n);if(i.hasEagerState=!0,i.eagerState=y,un(y,h))return pl(e,t,i,0),pt===null&&Hr(),!1}catch{}finally{}if(n=Vr(e,t,i,r),n!==null)return Sn(n,e,r),g0(n,t,r),!0}return!1}function xu(e,t,n,r){if(r={lane:2,revertLane:ed(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},To(e)){if(t)throw Error(s(479))}else t=Vr(e,n,r,2),t!==null&&Sn(t,e,2)}function To(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function p0(e,t){Va=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function g0(e,t,n){if((n&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,jr(e,n)}}var Qi={readContext:Wt,use:xo,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useLayoutEffect:At,useInsertionEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useSyncExternalStore:At,useId:At,useHostTransitionStatus:At,useFormState:At,useActionState:At,useOptimistic:At,useMemoCache:At,useCacheRefresh:At};Qi.useEffectEvent=At;var _0={readContext:Wt,use:xo,useCallback:function(e,t){return fn().memoizedState=[e,t===void 0?null:t],e},useContext:Wt,useEffect:e0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,So(4194308,4,l0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return So(4194308,4,e,t)},useInsertionEffect:function(e,t){So(4,2,e,t)},useMemo:function(e,t){var n=fn();t=t===void 0?null:t;var r=e();if(da){_t(!0);try{e()}finally{_t(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=fn();if(n!==void 0){var i=n(t);if(da){_t(!0);try{n(t)}finally{_t(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=kp.bind(null,ze,e),[r.memoizedState,e]},useRef:function(e){var t=fn();return e={current:e},t.memoizedState=e},useState:function(e){e=pu(e);var t=e.queue,n=h0.bind(null,ze,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vu,useDeferredValue:function(e,t){var n=fn();return bu(n,e,t)},useTransition:function(){var e=pu(!1);return e=c0.bind(null,ze,e.queue,!0,!1),fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=ze,i=fn();if(Ye){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),pt===null)throw Error(s(349));(Ge&127)!==0||Uf(r,t,n)}i.memoizedState=n;var c={value:n,getSnapshot:t};return i.queue=c,e0(Hf.bind(null,r,c,e),[e]),r.flags|=2048,Pa(9,{destroy:void 0},qf.bind(null,r,c,n,t),null),n},useId:function(){var e=fn(),t=pt.identifierPrefix;if(Ye){var n=Sr,r=kr;n=(r&~(1<<32-mt(r)-1)).toString(32)+n,t="_"+t+"R_"+n,n=yo++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=gp++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:wu,useFormState:Kf,useActionState:Kf,useOptimistic:function(e){var t=fn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=xu.bind(null,ze,!0,n),n.dispatch=t,[e,t]},useMemoCache:fu,useCacheRefresh:function(){return fn().memoizedState=xp.bind(null,ze)},useEffectEvent:function(e){var t=fn(),n={impl:e};return t.memoizedState=n,function(){if((lt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},ku={readContext:Wt,use:xo,useCallback:i0,useContext:Wt,useEffect:_u,useImperativeHandle:a0,useInsertionEffect:n0,useLayoutEffect:r0,useMemo:s0,useReducer:ko,useRef:Jf,useState:function(){return ko(Yr)},useDebugValue:vu,useDeferredValue:function(e,t){var n=Lt();return o0(n,ut.memoizedState,e,t)},useTransition:function(){var e=ko(Yr)[0],t=Lt().memoizedState;return[typeof e=="boolean"?e:Xi(e),t]},useSyncExternalStore:zf,useId:f0,useHostTransitionStatus:wu,useFormState:Qf,useActionState:Qf,useOptimistic:function(e,t){var n=Lt();return Pf(n,ut,e,t)},useMemoCache:fu,useCacheRefresh:m0};ku.useEffectEvent=t0;var v0={readContext:Wt,use:xo,useCallback:i0,useContext:Wt,useEffect:_u,useImperativeHandle:a0,useInsertionEffect:n0,useLayoutEffect:r0,useMemo:s0,useReducer:hu,useRef:Jf,useState:function(){return hu(Yr)},useDebugValue:vu,useDeferredValue:function(e,t){var n=Lt();return ut===null?bu(n,e,t):o0(n,ut.memoizedState,e,t)},useTransition:function(){var e=hu(Yr)[0],t=Lt().memoizedState;return[typeof e=="boolean"?e:Xi(e),t]},useSyncExternalStore:zf,useId:f0,useHostTransitionStatus:wu,useFormState:Zf,useActionState:Zf,useOptimistic:function(e,t){var n=Lt();return ut!==null?Pf(n,ut,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:fu,useCacheRefresh:m0};v0.useEffectEvent=t0;function Su(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:x({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Eu={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ln(),i=wl(r);i.payload=t,n!=null&&(i.callback=n),t=xl(e,i,r),t!==null&&(Sn(t,e,r),Fi(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ln(),i=wl(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=xl(e,i,r),t!==null&&(Sn(t,e,r),Fi(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ln(),r=wl(n);r.tag=2,t!=null&&(r.callback=t),t=xl(e,r,n),t!==null&&(Sn(t,e,n),Fi(t,e,n))}};function b0(e,t,n,r,i,c,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,c,h):t.prototype&&t.prototype.isPureReactComponent?!ea(n,r)||!ea(i,c):!0}function y0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Eu.enqueueReplaceState(t,t.state,null)}function fa(e,t){var n=t;if("ref"in t){n={};for(var r in t)r!=="ref"&&(n[r]=t[r])}if(e=e.defaultProps){n===t&&(n=x({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}function w0(e){bn(e)}function x0(e){console.error(e)}function k0(e){bn(e)}function Mo(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function S0(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Tu(e,t,n){return n=wl(n),n.tag=3,n.payload={element:null},n.callback=function(){Mo(e,t)},n}function E0(e){return e=wl(e),e.tag=3,e}function T0(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var c=r.value;e.payload=function(){return i(c)},e.callback=function(){S0(t,n,r)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(e.callback=function(){S0(t,n,r),typeof i!="function"&&(Nl===null?Nl=new Set([this]):Nl.add(this));var y=r.stack;this.componentDidCatch(r.value,{componentStack:y!==null?y:""})})}function Sp(e,t,n,r,i){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=n.alternate,t!==null&&La(t,n,i,!0),n=An.current,n!==null){switch(n.tag){case 31:case 13:return Qn===null?qo():n.alternate===null&&Ct===0&&(Ct=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===ho?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Wu(e,r,i)),!1;case 22:return n.flags|=65536,r===ho?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Wu(e,r,i)),!1}throw Error(s(435,n.tag))}return Wu(e,r,i),qo(),!1}if(Ye)return t=An.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Gc&&(e=Error(s(422),{cause:r}),qi($n(e,n)))):(r!==Gc&&(t=Error(s(423),{cause:r}),qi($n(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=$n(r,n),i=Tu(e.stateNode,r,i),nu(e,i),Ct!==4&&(Ct=2)),!1;var c=Error(s(520),{cause:r});if(c=$n(c,n),ls===null?ls=[c]:ls.push(c),Ct!==4&&(Ct=2),t===null)return!0;r=$n(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Tu(n.stateNode,r,e),nu(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Nl===null||!Nl.has(c))))return n.flags|=65536,i&=-i,n.lanes|=i,i=E0(i),T0(i,e,n,r),nu(n,i),!1}n=n.return}while(n!==null);return!1}var Mu=Error(s(461)),Ut=!1;function Zt(e,t,n,r){t.child=e===null?Rf(t,null,n,r):ua(t,e.child,n,r)}function M0(e,t,n,r,i){n=n.render;var c=t.ref;if("ref"in r){var h={};for(var y in r)y!=="ref"&&(h[y]=r[y])}else h=r;return ia(t),r=ou(e,t,n,h,c,i),y=cu(),e!==null&&!Ut?(uu(e,t,i),Xr(e,t,i)):(Ye&&y&&Pc(t),t.flags|=1,Zt(e,t,r,i),t.child)}function N0(e,t,n,r,i){if(e===null){var c=n.type;return typeof c=="function"&&!Hc(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,j0(e,t,c,r,i)):(e=so(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Lu(e,i)){var h=c.memoizedProps;if(n=n.compare,n=n!==null?n:ea,n(h,r)&&e.ref===t.ref)return Xr(e,t,i)}return t.flags|=1,e=Ir(c,r),e.ref=t.ref,e.return=t,t.child=e}function j0(e,t,n,r,i){if(e!==null){var c=e.memoizedProps;if(ea(c,r)&&e.ref===t.ref)if(Ut=!1,t.pendingProps=r=c,Lu(e,i))(e.flags&131072)!==0&&(Ut=!0);else return t.lanes=e.lanes,Xr(e,t,i)}return Nu(e,t,n,r,i)}function R0(e,t,n,r){var i=r.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~c}else r=0,t.child=null;return A0(e,t,c,n,r)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&fo(t,c!==null?c.cachePool:null),c!==null?Df(t,c):lu(),Of(t);else return r=t.lanes=536870912,A0(e,t,c!==null?c.baseLanes|n:n,n,r)}else c!==null?(fo(t,c.cachePool),Df(t,c),Sl(),t.memoizedState=null):(e!==null&&fo(t,null),lu(),Sl());return Zt(e,t,i,n),t.child}function Wi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function A0(e,t,n,r,i){var c=Zc();return c=c===null?null:{parent:Bt._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&fo(t,null),lu(),Of(t),e!==null&&La(e,t,r,!0),t.childLanes=i,null}function No(e,t){return t=Ro({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function C0(e,t,n){return ua(t,e.child,null,n),e=No(t,t.pendingProps),e.flags|=2,Cn(t),t.memoizedState=null,e}function Ep(e,t,n){var r=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ye){if(r.mode==="hidden")return e=No(t,r),t.lanes=536870912,Wi(null,e);if(iu(t),(e=bt)?(e=F1(e,Kn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:gl!==null?{id:kr,overflow:Sr}:null,retryLane:536870912,hydrationErrors:null},n=pf(e),n.return=t,t.child=n,Qt=t,bt=null)):e=null,e===null)throw vl(t);return t.lanes=536870912,null}return No(t,r)}var c=e.memoizedState;if(c!==null){var h=c.dehydrated;if(iu(t),i)if(t.flags&256)t.flags&=-257,t=C0(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Ut||La(e,t,n,!1),i=(n&e.childLanes)!==0,Ut||i){if(r=pt,r!==null&&(h=Rr(r,n),h!==0&&h!==c.retryLane))throw c.retryLane=h,xr(e,h),Sn(r,e,h),Mu;qo(),t=C0(e,t,n)}else e=c.treeContext,bt=Wn(h.nextSibling),Qt=t,Ye=!0,_l=null,Kn=!1,e!==null&&vf(t,e),t=No(t,r),t.flags|=4096;return t}return e=Ir(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function jo(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Nu(e,t,n,r,i){return ia(t),n=ou(e,t,n,r,void 0,i),r=cu(),e!==null&&!Ut?(uu(e,t,i),Xr(e,t,i)):(Ye&&r&&Pc(t),t.flags|=1,Zt(e,t,n,i),t.child)}function D0(e,t,n,r,i,c){return ia(t),t.updateQueue=null,n=Bf(t,r,n,i),Lf(e),r=cu(),e!==null&&!Ut?(uu(e,t,c),Xr(e,t,c)):(Ye&&r&&Pc(t),t.flags|=1,Zt(e,t,n,c),t.child)}function O0(e,t,n,r,i){if(ia(t),t.stateNode===null){var c=Aa,h=n.contextType;typeof h=="object"&&h!==null&&(c=Wt(h)),c=new n(r,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Eu,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=r,c.state=t.memoizedState,c.refs={},eu(t),h=n.contextType,c.context=typeof h=="object"&&h!==null?Wt(h):Aa,c.state=t.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(Su(t,n,h,r),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(h=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),h!==c.state&&Eu.enqueueReplaceState(c,c.state,null),$i(t,r,c,i),Gi(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){c=t.stateNode;var y=t.memoizedProps,S=fa(n,y);c.props=S;var L=c.context,Y=n.contextType;h=Aa,typeof Y=="object"&&Y!==null&&(h=Wt(Y));var Q=n.getDerivedStateFromProps;Y=typeof Q=="function"||typeof c.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,Y||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y||L!==h)&&y0(t,c,r,h),yl=!1;var q=t.memoizedState;c.state=q,$i(t,r,c,i),Gi(),L=t.memoizedState,y||q!==L||yl?(typeof Q=="function"&&(Su(t,n,Q,r),L=t.memoizedState),(S=yl||b0(t,n,S,r,q,L,h))?(Y||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=L),c.props=r,c.state=L,c.context=h,r=S):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{c=t.stateNode,tu(e,t),h=t.memoizedProps,Y=fa(n,h),c.props=Y,Q=t.pendingProps,q=c.context,L=n.contextType,S=Aa,typeof L=="object"&&L!==null&&(S=Wt(L)),y=n.getDerivedStateFromProps,(L=typeof y=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(h!==Q||q!==S)&&y0(t,c,r,S),yl=!1,q=t.memoizedState,c.state=q,$i(t,r,c,i),Gi();var P=t.memoizedState;h!==Q||q!==P||yl||e!==null&&e.dependencies!==null&&co(e.dependencies)?(typeof y=="function"&&(Su(t,n,y,r),P=t.memoizedState),(Y=yl||b0(t,n,Y,r,q,P,S)||e!==null&&e.dependencies!==null&&co(e.dependencies))?(L||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,P,S),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,P,S)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=P),c.props=r,c.state=P,c.context=S,r=Y):(typeof c.componentDidUpdate!="function"||h===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),r=!1)}return c=r,jo(e,t),r=(t.flags&128)!==0,c||r?(c=t.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&r?(t.child=ua(t,e.child,null,i),t.child=ua(t,null,n,i)):Zt(e,t,n,i),t.memoizedState=c.state,e=t.child):e=Xr(e,t,i),e}function L0(e,t,n,r){return la(),t.flags|=256,Zt(e,t,n,r),t.child}var ju={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ru(e){return{baseLanes:e,cachePool:Sf()}}function Au(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=On),e}function B0(e,t,n){var r=t.pendingProps,i=!1,c=(t.flags&128)!==0,h;if((h=c)||(h=e!==null&&e.memoizedState===null?!1:(Ot.current&2)!==0),h&&(i=!0,t.flags&=-129),h=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ye){if(i?kl(t):Sl(),(e=bt)?(e=F1(e,Kn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:gl!==null?{id:kr,overflow:Sr}:null,retryLane:536870912,hydrationErrors:null},n=pf(e),n.return=t,t.child=n,Qt=t,bt=null)):e=null,e===null)throw vl(t);return md(e)?t.lanes=32:t.lanes=536870912,null}var y=r.children;return r=r.fallback,i?(Sl(),i=t.mode,y=Ro({mode:"hidden",children:y},i),r=ra(r,i,n,null),y.return=t,r.return=t,y.sibling=r,t.child=y,r=t.child,r.memoizedState=Ru(n),r.childLanes=Au(e,h,n),t.memoizedState=ju,Wi(null,r)):(kl(t),Cu(t,y))}var S=e.memoizedState;if(S!==null&&(y=S.dehydrated,y!==null)){if(c)t.flags&256?(kl(t),t.flags&=-257,t=Du(e,t,n)):t.memoizedState!==null?(Sl(),t.child=e.child,t.flags|=128,t=null):(Sl(),y=r.fallback,i=t.mode,r=Ro({mode:"visible",children:r.children},i),y=ra(y,i,n,null),y.flags|=2,r.return=t,y.return=t,r.sibling=y,t.child=r,ua(t,e.child,null,n),r=t.child,r.memoizedState=Ru(n),r.childLanes=Au(e,h,n),t.memoizedState=ju,t=Wi(null,r));else if(kl(t),md(y)){if(h=y.nextSibling&&y.nextSibling.dataset,h)var L=h.dgst;h=L,r=Error(s(419)),r.stack="",r.digest=h,qi({value:r,source:null,stack:null}),t=Du(e,t,n)}else if(Ut||La(e,t,n,!1),h=(n&e.childLanes)!==0,Ut||h){if(h=pt,h!==null&&(r=Rr(h,n),r!==0&&r!==S.retryLane))throw S.retryLane=r,xr(e,r),Sn(h,e,r),Mu;fd(y)||qo(),t=Du(e,t,n)}else fd(y)?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,bt=Wn(y.nextSibling),Qt=t,Ye=!0,_l=null,Kn=!1,e!==null&&vf(t,e),t=Cu(t,r.children),t.flags|=4096);return t}return i?(Sl(),y=r.fallback,i=t.mode,S=e.child,L=S.sibling,r=Ir(S,{mode:"hidden",children:r.children}),r.subtreeFlags=S.subtreeFlags&65011712,L!==null?y=Ir(L,y):(y=ra(y,i,n,null),y.flags|=2),y.return=t,r.return=t,r.sibling=y,t.child=r,Wi(null,r),r=t.child,y=e.child.memoizedState,y===null?y=Ru(n):(i=y.cachePool,i!==null?(S=Bt._currentValue,i=i.parent!==S?{parent:S,pool:S}:i):i=Sf(),y={baseLanes:y.baseLanes|n,cachePool:i}),r.memoizedState=y,r.childLanes=Au(e,h,n),t.memoizedState=ju,Wi(e.child,r)):(kl(t),n=e.child,e=n.sibling,n=Ir(n,{mode:"visible",children:r.children}),n.return=t,n.sibling=null,e!==null&&(h=t.deletions,h===null?(t.deletions=[e],t.flags|=16):h.push(e)),t.child=n,t.memoizedState=null,n)}function Cu(e,t){return t=Ro({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ro(e,t){return e=Rn(22,e,null,t),e.lanes=0,e}function Du(e,t,n){return ua(t,e.child,null,n),e=Cu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function z0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xc(e.return,t,n)}function Ou(e,t,n,r,i,c){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:c}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=r,h.tail=n,h.tailMode=i,h.treeForkCount=c)}function U0(e,t,n){var r=t.pendingProps,i=r.revealOrder,c=r.tail;r=r.children;var h=Ot.current,y=(h&2)!==0;if(y?(h=h&1|2,t.flags|=128):h&=1,ne(Ot,h),Zt(e,t,r,n),r=Ye?Ui:0,!y&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&z0(e,n,t);else if(e.tag===19)z0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ou(t,!1,i,n,c,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ou(t,!0,n,null,c,r);break;case"together":Ou(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Xr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ml|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(La(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Ir(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ir(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Lu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&co(e)))}function Tp(e,t,n){switch(t.tag){case 3:Ke(t,t.stateNode.containerInfo),bl(t,Bt,e.memoizedState.cache),la();break;case 27:case 5:he(t);break;case 4:Ke(t,t.stateNode.containerInfo);break;case 10:bl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,iu(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(kl(t),t.flags|=128,null):(n&t.child.childLanes)!==0?B0(e,t,n):(kl(t),e=Xr(e,t,n),e!==null?e.sibling:null);kl(t);break;case 19:var i=(e.flags&128)!==0;if(r=(n&t.childLanes)!==0,r||(La(e,t,n,!1),r=(n&t.childLanes)!==0),i){if(r)return U0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(Ot,Ot.current),r)break;return null;case 22:return t.lanes=0,R0(e,t,n,t.pendingProps);case 24:bl(t,Bt,e.memoizedState.cache)}return Xr(e,t,n)}function q0(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ut=!0;else{if(!Lu(e,n)&&(t.flags&128)===0)return Ut=!1,Tp(e,t,n);Ut=(e.flags&131072)!==0}else Ut=!1,Ye&&(t.flags&1048576)!==0&&_f(t,Ui,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=oa(t.elementType),t.type=e,typeof e=="function")Hc(e)?(r=fa(e,r),t.tag=1,t=O0(null,t,e,r,n)):(t.tag=0,t=Nu(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===H){t.tag=11,t=M0(null,t,e,r,n);break e}else if(i===ae){t.tag=14,t=N0(null,t,e,r,n);break e}}throw t=Xe(e)||e,Error(s(306,t,""))}}return t;case 0:return Nu(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=fa(r,t.pendingProps),O0(e,t,r,i,n);case 3:e:{if(Ke(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var c=t.memoizedState;i=c.element,tu(e,t),$i(t,r,null,n);var h=t.memoizedState;if(r=h.cache,bl(t,Bt,r),r!==c.cache&&Kc(t,[Bt],n,!0),Gi(),r=h.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:h.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=L0(e,t,r,n);break e}else if(r!==i){i=$n(Error(s(424)),t),qi(i),t=L0(e,t,r,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(bt=Wn(e.firstChild),Qt=t,Ye=!0,_l=null,Kn=!0,n=Rf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(la(),r===i){t=Xr(e,t,n);break e}Zt(e,t,r,n)}t=t.child}return t;case 26:return jo(e,t),e===null?(n=Q1(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ye||(n=t.type,e=t.pendingProps,r=$o(xe.current).createElement(n),r[Tt]=t,r[St]=e,Jt(r,n,e),xt(r),t.stateNode=r):t.memoizedState=Q1(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return he(t),e===null&&Ye&&(r=t.stateNode=Y1(t.type,t.pendingProps,xe.current),Qt=t,Kn=!0,i=bt,Cl(t.type)?(hd=i,bt=Wn(r.firstChild)):bt=i),Zt(e,t,t.pendingProps.children,n),jo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ye&&((i=r=bt)&&(r=n2(r,t.type,t.pendingProps,Kn),r!==null?(t.stateNode=r,Qt=t,bt=Wn(r.firstChild),Kn=!1,i=!0):i=!1),i||vl(t)),he(t),i=t.type,c=t.pendingProps,h=e!==null?e.memoizedProps:null,r=c.children,cd(i,c)?r=null:h!==null&&cd(i,h)&&(t.flags|=32),t.memoizedState!==null&&(i=ou(e,t,_p,null,null,n),fs._currentValue=i),jo(e,t),Zt(e,t,r,n),t.child;case 6:return e===null&&Ye&&((e=n=bt)&&(n=r2(n,t.pendingProps,Kn),n!==null?(t.stateNode=n,Qt=t,bt=null,e=!0):e=!1),e||vl(t)),null;case 13:return B0(e,t,n);case 4:return Ke(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ua(t,null,r,n):Zt(e,t,r,n),t.child;case 11:return M0(e,t,t.type,t.pendingProps,n);case 7:return Zt(e,t,t.pendingProps,n),t.child;case 8:return Zt(e,t,t.pendingProps.children,n),t.child;case 12:return Zt(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,bl(t,t.type,r.value),Zt(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,ia(t),i=Wt(i),r=r(i),t.flags|=1,Zt(e,t,r,n),t.child;case 14:return N0(e,t,t.type,t.pendingProps,n);case 15:return j0(e,t,t.type,t.pendingProps,n);case 19:return U0(e,t,n);case 31:return Ep(e,t,n);case 22:return R0(e,t,n,t.pendingProps);case 24:return ia(t),r=Wt(Bt),e===null?(i=Zc(),i===null&&(i=pt,c=Qc(),i.pooledCache=c,c.refCount++,c!==null&&(i.pooledCacheLanes|=n),i=c),t.memoizedState={parent:r,cache:i},eu(t),bl(t,Bt,i)):((e.lanes&n)!==0&&(tu(e,t),$i(t,null,null,n),Gi()),i=e.memoizedState,c=t.memoizedState,i.parent!==r?(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),bl(t,Bt,r)):(r=c.cache,bl(t,Bt,r),r!==i.cache&&Kc(t,[Bt],n,!0))),Zt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Kr(e){e.flags|=4}function Bu(e,t,n,r,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(f1())e.flags|=8192;else throw ca=ho,Jc}else e.flags&=-16777217}function H0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!tm(t))if(f1())e.flags|=8192;else throw ca=ho,Jc}function Ao(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Fe():536870912,e.lanes|=t,Ya|=t)}function Zi(e,t){if(!Ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function yt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Mp(e,t,n){var r=t.pendingProps;switch(Fc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(t),null;case 1:return yt(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Gr(Bt),Be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Oa(t)?Kr(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,$c())),yt(t),null;case 26:var i=t.type,c=t.memoizedState;return e===null?(Kr(t),c!==null?(yt(t),H0(t,c)):(yt(t),Bu(t,i,null,r,n))):c?c!==e.memoizedState?(Kr(t),yt(t),H0(t,c)):(yt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==r&&Kr(t),yt(t),Bu(t,i,e,r,n)),null;case 27:if(Ee(t),n=xe.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Kr(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return yt(t),null}e=ie.current,Oa(t)?bf(t):(e=Y1(i,r,n),t.stateNode=e,Kr(t))}return yt(t),null;case 5:if(Ee(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Kr(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return yt(t),null}if(c=ie.current,Oa(t))bf(t);else{var h=$o(xe.current);switch(c){case 1:c=h.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:c=h.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":c=h.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":c=h.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":c=h.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?h.createElement("select",{is:r.is}):h.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?h.createElement(i,{is:r.is}):h.createElement(i)}}c[Tt]=t,c[St]=r;e:for(h=t.child;h!==null;){if(h.tag===5||h.tag===6)c.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}t.stateNode=c;e:switch(Jt(c,i,r),i){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Kr(t)}}return yt(t),Bu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Kr(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(e=xe.current,Oa(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Qt,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[Tt]=t,e=!!(e.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||B1(e.nodeValue,n)),e||vl(t,!0)}else e=$o(e).createTextNode(r),e[Tt]=t,t.stateNode=e}return yt(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Oa(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Tt]=t}else la(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;yt(t),e=!1}else n=$c(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Cn(t),t):(Cn(t),null);if((t.flags&128)!==0)throw Error(s(558))}return yt(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Oa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[Tt]=t}else la(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;yt(t),i=!1}else i=$c(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Cn(t),t):(Cn(t),null)}return Cn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ao(t,t.updateQueue),yt(t),null);case 4:return Be(),e===null&&ld(t.stateNode.containerInfo),yt(t),null;case 10:return Gr(t.type),yt(t),null;case 19:if(V(Ot),r=t.memoizedState,r===null)return yt(t),null;if(i=(t.flags&128)!==0,c=r.rendering,c===null)if(i)Zi(r,!1);else{if(Ct!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=vo(e),c!==null){for(t.flags|=128,Zi(r,!1),e=c.updateQueue,t.updateQueue=e,Ao(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)hf(n,e),n=n.sibling;return ne(Ot,Ot.current&1|2),Ye&&Pr(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&gt()>Bo&&(t.flags|=128,i=!0,Zi(r,!1),t.lanes=4194304)}else{if(!i)if(e=vo(c),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Ao(t,e),Zi(r,!0),r.tail===null&&r.tailMode==="hidden"&&!c.alternate&&!Ye)return yt(t),null}else 2*gt()-r.renderingStartTime>Bo&&n!==536870912&&(t.flags|=128,i=!0,Zi(r,!1),t.lanes=4194304);r.isBackwards?(c.sibling=t.child,t.child=c):(e=r.last,e!==null?e.sibling=c:t.child=c,r.last=c)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=gt(),e.sibling=null,n=Ot.current,ne(Ot,i?n&1|2:n&1),Ye&&Pr(t,r.treeForkCount),e):(yt(t),null);case 22:case 23:return Cn(t),au(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(n&536870912)!==0&&(t.flags&128)===0&&(yt(t),t.subtreeFlags&6&&(t.flags|=8192)):yt(t),n=t.updateQueue,n!==null&&Ao(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&V(sa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Gr(Bt),yt(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Np(e,t){switch(Fc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gr(Bt),Be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ee(t),null;case 31:if(t.memoizedState!==null){if(Cn(t),t.alternate===null)throw Error(s(340));la()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Cn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));la()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Ot),null;case 4:return Be(),null;case 10:return Gr(t.type),null;case 22:case 23:return Cn(t),au(),e!==null&&V(sa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Gr(Bt),null;case 25:return null;default:return null}}function V0(e,t){switch(Fc(t),t.tag){case 3:Gr(Bt),Be();break;case 26:case 27:case 5:Ee(t);break;case 4:Be();break;case 31:t.memoizedState!==null&&Cn(t);break;case 13:Cn(t);break;case 19:V(Ot);break;case 10:Gr(t.type);break;case 22:case 23:Cn(t),au(),e!==null&&V(sa);break;case 24:Gr(Bt)}}function Ji(e,t){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var c=n.create,h=n.inst;r=c(),h.destroy=r}n=n.next}while(n!==i)}}catch(y){st(t,t.return,y)}}function El(e,t,n){try{var r=t.updateQueue,i=r!==null?r.lastEffect:null;if(i!==null){var c=i.next;r=c;do{if((r.tag&e)===e){var h=r.inst,y=h.destroy;if(y!==void 0){h.destroy=void 0,i=t;var S=n,L=y;try{L()}catch(Y){st(i,S,Y)}}}r=r.next}while(r!==c)}}catch(Y){st(t,t.return,Y)}}function I0(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Cf(t,n)}catch(r){st(e,e.return,r)}}}function P0(e,t,n){n.props=fa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){st(e,t,r)}}function es(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n=="function"?e.refCleanup=n(r):n.current=r}}catch(i){st(e,t,i)}}function Er(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(i){st(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){st(e,t,i)}else n.current=null}function F0(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(i){st(e,e.return,i)}}function zu(e,t,n){try{var r=e.stateNode;Qp(r,e.type,n,t),r[St]=t}catch(i){st(e,e.return,i)}}function G0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Cl(e.type)||e.tag===4}function Uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||G0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Cl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sr));else if(r!==4&&(r===27&&Cl(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(qu(e,t,n),e=e.sibling;e!==null;)qu(e,t,n),e=e.sibling}function Co(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Cl(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Co(e,t,n),e=e.sibling;e!==null;)Co(e,t,n),e=e.sibling}function $0(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Jt(t,r,n),t[Tt]=e,t[St]=n}catch(c){st(e,e.return,c)}}var Qr=!1,qt=!1,Hu=!1,Y0=typeof WeakSet=="function"?WeakSet:Set,Yt=null;function jp(e,t){if(e=e.containerInfo,sd=Jo,e=Oi(e),wr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,c=r.focusNode;r=r.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var h=0,y=-1,S=-1,L=0,Y=0,Q=e,q=null;t:for(;;){for(var P;Q!==n||i!==0&&Q.nodeType!==3||(y=h+i),Q!==c||r!==0&&Q.nodeType!==3||(S=h+r),Q.nodeType===3&&(h+=Q.nodeValue.length),(P=Q.firstChild)!==null;)q=Q,Q=P;for(;;){if(Q===e)break t;if(q===n&&++L===i&&(y=h),q===c&&++Y===r&&(S=h),(P=Q.nextSibling)!==null)break;Q=q,q=Q.parentNode}Q=P}n=y===-1||S===-1?null:{start:y,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(od={focusedElem:e,selectionRange:n},Jo=!1,Yt=t;Yt!==null;)if(t=Yt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Yt=e;else for(;Yt!==null;){switch(t=Yt,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,i=c.memoizedProps,c=c.memoizedState,r=n.stateNode;try{var ve=fa(n.type,i);e=r.getSnapshotBeforeUpdate(ve,c),r.__reactInternalSnapshotBeforeUpdate=e}catch(Me){st(n,n.return,Me)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)dd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":dd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Yt=e;break}Yt=t.return}}function X0(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Zr(e,n),r&4&&Ji(5,n);break;case 1:if(Zr(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(h){st(n,n.return,h)}else{var i=fa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(h){st(n,n.return,h)}}r&64&&I0(n),r&512&&es(n,n.return);break;case 3:if(Zr(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Cf(e,t)}catch(h){st(n,n.return,h)}}break;case 27:t===null&&r&4&&$0(n);case 26:case 5:Zr(e,n),t===null&&r&4&&F0(n),r&512&&es(n,n.return);break;case 12:Zr(e,n);break;case 31:Zr(e,n),r&4&&W0(e,n);break;case 13:Zr(e,n),r&4&&Z0(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Up.bind(null,n),l2(e,n))));break;case 22:if(r=n.memoizedState!==null||Qr,!r){t=t!==null&&t.memoizedState!==null||qt,i=Qr;var c=qt;Qr=r,(qt=t)&&!c?Jr(e,n,(n.subtreeFlags&8772)!==0):Zr(e,n),Qr=i,qt=c}break;case 30:break;default:Zr(e,n)}}function K0(e){var t=e.alternate;t!==null&&(e.alternate=null,K0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&sl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var kt=null,yn=!1;function Wr(e,t,n){for(n=n.child;n!==null;)Q0(e,t,n),n=n.sibling}function Q0(e,t,n){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(qn,n)}catch{}switch(n.tag){case 26:qt||Er(n,t),Wr(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:qt||Er(n,t);var r=kt,i=yn;Cl(n.type)&&(kt=n.stateNode,yn=!1),Wr(e,t,n),cs(n.stateNode),kt=r,yn=i;break;case 5:qt||Er(n,t);case 6:if(r=kt,i=yn,kt=null,Wr(e,t,n),kt=r,yn=i,kt!==null)if(yn)try{(kt.nodeType===9?kt.body:kt.nodeName==="HTML"?kt.ownerDocument.body:kt).removeChild(n.stateNode)}catch(c){st(n,t,c)}else try{kt.removeChild(n.stateNode)}catch(c){st(n,t,c)}break;case 18:kt!==null&&(yn?(e=kt,I1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ti(e)):I1(kt,n.stateNode));break;case 4:r=kt,i=yn,kt=n.stateNode.containerInfo,yn=!0,Wr(e,t,n),kt=r,yn=i;break;case 0:case 11:case 14:case 15:El(2,n,t),qt||El(4,n,t),Wr(e,t,n);break;case 1:qt||(Er(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"&&P0(n,t,r)),Wr(e,t,n);break;case 21:Wr(e,t,n);break;case 22:qt=(r=qt)||n.memoizedState!==null,Wr(e,t,n),qt=r;break;default:Wr(e,t,n)}}function W0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ti(e)}catch(n){st(t,t.return,n)}}}function Z0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ti(e)}catch(n){st(t,t.return,n)}}function Rp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Y0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Y0),t;default:throw Error(s(435,e.tag))}}function Do(e,t){var n=Rp(e);t.forEach(function(r){if(!n.has(r)){n.add(r);var i=qp.bind(null,e,r);r.then(i,i)}})}function wn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],c=e,h=t,y=h;e:for(;y!==null;){switch(y.tag){case 27:if(Cl(y.type)){kt=y.stateNode,yn=!1;break e}break;case 5:kt=y.stateNode,yn=!1;break e;case 3:case 4:kt=y.stateNode.containerInfo,yn=!0;break e}y=y.return}if(kt===null)throw Error(s(160));Q0(c,h,i),kt=null,yn=!1,c=i.alternate,c!==null&&(c.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)J0(t,e),t=t.sibling}var cr=null;function J0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:wn(t,e),xn(e),r&4&&(El(3,e,e.return),Ji(3,e),El(5,e,e.return));break;case 1:wn(t,e),xn(e),r&512&&(qt||n===null||Er(n,n.return)),r&64&&Qr&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=cr;if(wn(t,e),xn(e),r&512&&(qt||n===null||Er(n,n.return)),r&4){var c=n!==null?n.memoizedState:null;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){e:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(r){case"title":c=i.getElementsByTagName("title")[0],(!c||c[_r]||c[Tt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=i.createElement(r),i.head.insertBefore(c,i.querySelector("head > title"))),Jt(c,r,n),c[Tt]=e,xt(c),r=c;break e;case"link":var h=J1("link","href",i).get(r+(n.href||""));if(h){for(var y=0;y<h.length;y++)if(c=h[y],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){h.splice(y,1);break t}}c=i.createElement(r),Jt(c,r,n),i.head.appendChild(c);break;case"meta":if(h=J1("meta","content",i).get(r+(n.content||""))){for(y=0;y<h.length;y++)if(c=h[y],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){h.splice(y,1);break t}}c=i.createElement(r),Jt(c,r,n),i.head.appendChild(c);break;default:throw Error(s(468,r))}c[Tt]=e,xt(c),r=c}e.stateNode=r}else em(i,e.type,e.stateNode);else e.stateNode=Z1(i,r,e.memoizedProps);else c!==r?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,r===null?em(i,e.type,e.stateNode):Z1(i,r,e.memoizedProps)):r===null&&e.stateNode!==null&&zu(e,e.memoizedProps,n.memoizedProps)}break;case 27:wn(t,e),xn(e),r&512&&(qt||n===null||Er(n,n.return)),n!==null&&r&4&&zu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(wn(t,e),xn(e),r&512&&(qt||n===null||Er(n,n.return)),e.flags&32){i=e.stateNode;try{Kt(i,"")}catch(ve){st(e,e.return,ve)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,zu(e,i,n!==null?n.memoizedProps:i)),r&1024&&(Hu=!0);break;case 6:if(wn(t,e),xn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(ve){st(e,e.return,ve)}}break;case 3:if(Ko=null,i=cr,cr=Yo(t.containerInfo),wn(t,e),cr=i,xn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ti(t.containerInfo)}catch(ve){st(e,e.return,ve)}Hu&&(Hu=!1,e1(e));break;case 4:r=cr,cr=Yo(e.stateNode.containerInfo),wn(t,e),xn(e),cr=r;break;case 12:wn(t,e),xn(e);break;case 31:wn(t,e),xn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Do(e,r)));break;case 13:wn(t,e),xn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Lo=gt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Do(e,r)));break;case 22:i=e.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,L=Qr,Y=qt;if(Qr=L||i,qt=Y||S,wn(t,e),qt=Y,Qr=L,xn(e),r&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||S||Qr||qt||ma(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){S=n=t;try{if(c=S.stateNode,i)h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{y=S.stateNode;var Q=S.memoizedProps.style,q=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;y.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(ve){st(S,S.return,ve)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=i?"":S.memoizedProps}catch(ve){st(S,S.return,ve)}}}else if(t.tag===18){if(n===null){S=t;try{var P=S.stateNode;i?P1(P,!0):P1(S.stateNode,!1)}catch(ve){st(S,S.return,ve)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Do(e,n))));break;case 19:wn(t,e),xn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Do(e,r)));break;case 30:break;case 21:break;default:wn(t,e),xn(e)}}function xn(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(G0(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode,c=Uu(e);Co(e,c,i);break;case 5:var h=n.stateNode;n.flags&32&&(Kt(h,""),n.flags&=-33);var y=Uu(e);Co(e,y,h);break;case 3:case 4:var S=n.stateNode.containerInfo,L=Uu(e);qu(e,L,S);break;default:throw Error(s(161))}}catch(Y){st(e,e.return,Y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function e1(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;e1(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Zr(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)X0(e,t.alternate,t),t=t.sibling}function ma(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:El(4,t,t.return),ma(t);break;case 1:Er(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&P0(t,t.return,n),ma(t);break;case 27:cs(t.stateNode);case 26:case 5:Er(t,t.return),ma(t);break;case 22:t.memoizedState===null&&ma(t);break;case 30:ma(t);break;default:ma(t)}e=e.sibling}}function Jr(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,i=e,c=t,h=c.flags;switch(c.tag){case 0:case 11:case 15:Jr(i,c,n),Ji(4,c);break;case 1:if(Jr(i,c,n),r=c,i=r.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(L){st(r,r.return,L)}if(r=c,i=r.updateQueue,i!==null){var y=r.stateNode;try{var S=i.shared.hiddenCallbacks;if(S!==null)for(i.shared.hiddenCallbacks=null,i=0;i<S.length;i++)Af(S[i],y)}catch(L){st(r,r.return,L)}}n&&h&64&&I0(c),es(c,c.return);break;case 27:$0(c);case 26:case 5:Jr(i,c,n),n&&r===null&&h&4&&F0(c),es(c,c.return);break;case 12:Jr(i,c,n);break;case 31:Jr(i,c,n),n&&h&4&&W0(i,c);break;case 13:Jr(i,c,n),n&&h&4&&Z0(i,c);break;case 22:c.memoizedState===null&&Jr(i,c,n),es(c,c.return);break;case 30:break;default:Jr(i,c,n)}t=t.sibling}}function Vu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Hi(n))}function Iu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Hi(e))}function ur(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)t1(e,t,n,r),t=t.sibling}function t1(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:ur(e,t,n,r),i&2048&&Ji(9,t);break;case 1:ur(e,t,n,r);break;case 3:ur(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Hi(e)));break;case 12:if(i&2048){ur(e,t,n,r),e=t.stateNode;try{var c=t.memoizedProps,h=c.id,y=c.onPostCommit;typeof y=="function"&&y(h,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){st(t,t.return,S)}}else ur(e,t,n,r);break;case 31:ur(e,t,n,r);break;case 13:ur(e,t,n,r);break;case 23:break;case 22:c=t.stateNode,h=t.alternate,t.memoizedState!==null?c._visibility&2?ur(e,t,n,r):ts(e,t):c._visibility&2?ur(e,t,n,r):(c._visibility|=2,Fa(e,t,n,r,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Vu(h,t);break;case 24:ur(e,t,n,r),i&2048&&Iu(t.alternate,t);break;default:ur(e,t,n,r)}}function Fa(e,t,n,r,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,h=t,y=n,S=r,L=h.flags;switch(h.tag){case 0:case 11:case 15:Fa(c,h,y,S,i),Ji(8,h);break;case 23:break;case 22:var Y=h.stateNode;h.memoizedState!==null?Y._visibility&2?Fa(c,h,y,S,i):ts(c,h):(Y._visibility|=2,Fa(c,h,y,S,i)),i&&L&2048&&Vu(h.alternate,h);break;case 24:Fa(c,h,y,S,i),i&&L&2048&&Iu(h.alternate,h);break;default:Fa(c,h,y,S,i)}t=t.sibling}}function ts(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:ts(n,r),i&2048&&Vu(r.alternate,r);break;case 24:ts(n,r),i&2048&&Iu(r.alternate,r);break;default:ts(n,r)}t=t.sibling}}var ns=8192;function Ga(e,t,n){if(e.subtreeFlags&ns)for(e=e.child;e!==null;)n1(e,t,n),e=e.sibling}function n1(e,t,n){switch(e.tag){case 26:Ga(e,t,n),e.flags&ns&&e.memoizedState!==null&&g2(n,cr,e.memoizedState,e.memoizedProps);break;case 5:Ga(e,t,n);break;case 3:case 4:var r=cr;cr=Yo(e.stateNode.containerInfo),Ga(e,t,n),cr=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=ns,ns=16777216,Ga(e,t,n),ns=r):Ga(e,t,n));break;default:Ga(e,t,n)}}function r1(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function rs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Yt=r,a1(r,e)}r1(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)l1(e),e=e.sibling}function l1(e){switch(e.tag){case 0:case 11:case 15:rs(e),e.flags&2048&&El(9,e,e.return);break;case 3:rs(e);break;case 12:rs(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Oo(e)):rs(e);break;default:rs(e)}}function Oo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Yt=r,a1(r,e)}r1(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:El(8,t,t.return),Oo(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Oo(t));break;default:Oo(t)}e=e.sibling}}function a1(e,t){for(;Yt!==null;){var n=Yt;switch(n.tag){case 0:case 11:case 15:El(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Hi(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Yt=r;else e:for(n=e;Yt!==null;){r=Yt;var i=r.sibling,c=r.return;if(K0(r),r===n){Yt=null;break e}if(i!==null){i.return=c,Yt=i;break e}Yt=c}}}var Ap={getCacheForType:function(e){var t=Wt(Bt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Wt(Bt).controller.signal}},Cp=typeof WeakMap=="function"?WeakMap:Map,lt=0,pt=null,Ie=null,Ge=0,it=0,Dn=null,Tl=!1,$a=!1,Pu=!1,el=0,Ct=0,Ml=0,ha=0,Fu=0,On=0,Ya=0,ls=null,kn=null,Gu=!1,Lo=0,i1=0,Bo=1/0,zo=null,Nl=null,It=0,jl=null,Xa=null,tl=0,$u=0,Yu=null,s1=null,as=0,Xu=null;function Ln(){return(lt&2)!==0&&Ge!==0?Ge&-Ge:z.T!==null?ed():Ls()}function o1(){if(On===0)if((Ge&536870912)===0||Ye){var e=mr;mr<<=1,(mr&3932160)===0&&(mr=262144),On=e}else On=536870912;return e=An.current,e!==null&&(e.flags|=32),On}function Sn(e,t,n){(e===pt&&(it===2||it===9)||e.cancelPendingCommit!==null)&&(Ka(e,0),Rl(e,Ge,On,!1)),Ze(e,n),((lt&2)===0||e!==pt)&&(e===pt&&((lt&2)===0&&(ha|=n),Ct===4&&Rl(e,Ge,On,!1)),Tr(e))}function c1(e,t,n){if((lt&6)!==0)throw Error(s(327));var r=!n&&(t&127)===0&&(t&e.expiredLanes)===0||nt(e,t),i=r?Lp(e,t):Qu(e,t,!0),c=r;do{if(i===0){$a&&!r&&Rl(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!Dp(n)){i=Qu(e,t,!1),c=!1;continue}if(i===2){if(c=t,e.errorRecoveryDisabledLanes&c)var h=0;else h=e.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){t=h;e:{var y=e;i=ls;var S=y.current.memoizedState.isDehydrated;if(S&&(Ka(y,h).flags|=256),h=Qu(y,h,!1),h!==2){if(Pu&&!S){y.errorRecoveryDisabledLanes|=c,ha|=c,i=4;break e}c=kn,kn=i,c!==null&&(kn===null?kn=c:kn.push.apply(kn,c))}i=h}if(c=!1,i!==2)continue}}if(i===1){Ka(e,0),Rl(e,t,0,!0);break}e:{switch(r=e,c=i,c){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Rl(r,t,On,!Tl);break e;case 2:kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=Lo+300-gt(),10<i)){if(Rl(r,t,On,!Tl),Te(r,0,!0)!==0)break e;tl=t,r.timeoutHandle=H1(u1.bind(null,r,n,kn,zo,Gu,t,On,ha,Ya,Tl,c,"Throttled",-0,0),i);break e}u1(r,n,kn,zo,Gu,t,On,ha,Ya,Tl,c,null,-0,0)}}break}while(!0);Tr(e)}function u1(e,t,n,r,i,c,h,y,S,L,Y,Q,q,P){if(e.timeoutHandle=-1,Q=t.subtreeFlags,Q&8192||(Q&16785408)===16785408){Q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sr},n1(t,c,Q);var ve=(c&62914560)===c?Lo-gt():(c&4194048)===c?i1-gt():0;if(ve=_2(Q,ve),ve!==null){tl=c,e.cancelPendingCommit=ve(v1.bind(null,e,t,c,n,r,i,h,y,S,Y,Q,null,q,P)),Rl(e,c,h,!L);return}}v1(e,t,c,n,r,i,h,y,S)}function Dp(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],c=i.getSnapshot;i=i.value;try{if(!un(c(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rl(e,t,n,r){t&=~Fu,t&=~ha,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var c=31-mt(i),h=1<<c;r[c]=-1,i&=~h}n!==0&&hr(e,n,t)}function Uo(){return(lt&6)===0?(is(0),!1):!0}function Ku(){if(Ie!==null){if(it===0)var e=Ie.return;else e=Ie,Fr=aa=null,du(e),qa=null,Ii=0,e=Ie;for(;e!==null;)V0(e.alternate,e),e=e.return;Ie=null}}function Ka(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Jp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),tl=0,Ku(),pt=e,Ie=n=Ir(e.current,null),Ge=t,it=0,Dn=null,Tl=!1,$a=nt(e,t),Pu=!1,Ya=On=Fu=ha=Ml=Ct=0,kn=ls=null,Gu=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-mt(r),c=1<<i;t|=e[i],r&=~c}return el=t,Hr(),n}function d1(e,t){ze=null,z.H=Qi,t===Ua||t===mo?(t=Mf(),it=3):t===Jc?(t=Mf(),it=4):it=t===Mu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Dn=t,Ie===null&&(Ct=1,Mo(e,$n(t,e.current)))}function f1(){var e=An.current;return e===null?!0:(Ge&4194048)===Ge?Qn===null:(Ge&62914560)===Ge||(Ge&536870912)!==0?e===Qn:!1}function m1(){var e=z.H;return z.H=Qi,e===null?Qi:e}function h1(){var e=z.A;return z.A=Ap,e}function qo(){Ct=4,Tl||(Ge&4194048)!==Ge&&An.current!==null||($a=!0),(Ml&134217727)===0&&(ha&134217727)===0||pt===null||Rl(pt,Ge,On,!1)}function Qu(e,t,n){var r=lt;lt|=2;var i=m1(),c=h1();(pt!==e||Ge!==t)&&(zo=null,Ka(e,t)),t=!1;var h=Ct;e:do try{if(it!==0&&Ie!==null){var y=Ie,S=Dn;switch(it){case 8:Ku(),h=6;break e;case 3:case 2:case 9:case 6:An.current===null&&(t=!0);var L=it;if(it=0,Dn=null,Qa(e,y,S,L),n&&$a){h=0;break e}break;default:L=it,it=0,Dn=null,Qa(e,y,S,L)}}Op(),h=Ct;break}catch(Y){d1(e,Y)}while(!0);return t&&e.shellSuspendCounter++,Fr=aa=null,lt=r,z.H=i,z.A=c,Ie===null&&(pt=null,Ge=0,Hr()),h}function Op(){for(;Ie!==null;)p1(Ie)}function Lp(e,t){var n=lt;lt|=2;var r=m1(),i=h1();pt!==e||Ge!==t?(zo=null,Bo=gt()+500,Ka(e,t)):$a=nt(e,t);e:do try{if(it!==0&&Ie!==null){t=Ie;var c=Dn;t:switch(it){case 1:it=0,Dn=null,Qa(e,t,c,1);break;case 2:case 9:if(Ef(c)){it=0,Dn=null,g1(t);break}t=function(){it!==2&&it!==9||pt!==e||(it=7),Tr(e)},c.then(t,t);break e;case 3:it=7;break e;case 4:it=5;break e;case 7:Ef(c)?(it=0,Dn=null,g1(t)):(it=0,Dn=null,Qa(e,t,c,7));break;case 5:var h=null;switch(Ie.tag){case 26:h=Ie.memoizedState;case 5:case 27:var y=Ie;if(h?tm(h):y.stateNode.complete){it=0,Dn=null;var S=y.sibling;if(S!==null)Ie=S;else{var L=y.return;L!==null?(Ie=L,Ho(L)):Ie=null}break t}}it=0,Dn=null,Qa(e,t,c,5);break;case 6:it=0,Dn=null,Qa(e,t,c,6);break;case 8:Ku(),Ct=6;break e;default:throw Error(s(462))}}Bp();break}catch(Y){d1(e,Y)}while(!0);return Fr=aa=null,z.H=r,z.A=i,lt=n,Ie!==null?0:(pt=null,Ge=0,Hr(),Ct)}function Bp(){for(;Ie!==null&&!Un();)p1(Ie)}function p1(e){var t=q0(e.alternate,e,el);e.memoizedProps=e.pendingProps,t===null?Ho(e):Ie=t}function g1(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=D0(n,t,t.pendingProps,t.type,void 0,Ge);break;case 11:t=D0(n,t,t.pendingProps,t.type.render,t.ref,Ge);break;case 5:du(t);default:V0(n,t),t=Ie=hf(t,el),t=q0(n,t,el)}e.memoizedProps=e.pendingProps,t===null?Ho(e):Ie=t}function Qa(e,t,n,r){Fr=aa=null,du(t),qa=null,Ii=0;var i=t.return;try{if(Sp(e,i,t,n,Ge)){Ct=1,Mo(e,$n(n,e.current)),Ie=null;return}}catch(c){if(i!==null)throw Ie=i,c;Ct=1,Mo(e,$n(n,e.current)),Ie=null;return}t.flags&32768?(Ye||r===1?e=!0:$a||(Ge&536870912)!==0?e=!1:(Tl=e=!0,(r===2||r===9||r===3||r===6)&&(r=An.current,r!==null&&r.tag===13&&(r.flags|=16384))),_1(t,e)):Ho(t)}function Ho(e){var t=e;do{if((t.flags&32768)!==0){_1(t,Tl);return}e=t.return;var n=Mp(t.alternate,t,el);if(n!==null){Ie=n;return}if(t=t.sibling,t!==null){Ie=t;return}Ie=t=e}while(t!==null);Ct===0&&(Ct=5)}function _1(e,t){do{var n=Np(e.alternate,e);if(n!==null){n.flags&=32767,Ie=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ie=e;return}Ie=e=n}while(e!==null);Ct=6,Ie=null}function v1(e,t,n,r,i,c,h,y,S){e.cancelPendingCommit=null;do Vo();while(It!==0);if((lt&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(c=t.lanes|t.childLanes,c|=Ra,Ht(e,n,c,h,y,S),e===pt&&(Ie=pt=null,Ge=0),Xa=t,jl=e,tl=n,$u=c,Yu=i,s1=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Hp(Ft,function(){return k1(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,i=Z.p,Z.p=2,h=lt,lt|=4;try{jp(e,t,n)}finally{lt=h,Z.p=i,z.T=r}}It=1,b1(),y1(),w1()}}function b1(){if(It===1){It=0;var e=jl,t=Xa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=z.T,z.T=null;var r=Z.p;Z.p=2;var i=lt;lt|=4;try{J0(t,e);var c=od,h=Oi(e.containerInfo),y=c.focusedElem,S=c.selectionRange;if(h!==y&&y&&y.ownerDocument&&ja(y.ownerDocument.documentElement,y)){if(S!==null&&wr(y)){var L=S.start,Y=S.end;if(Y===void 0&&(Y=L),"selectionStart"in y)y.selectionStart=L,y.selectionEnd=Math.min(Y,y.value.length);else{var Q=y.ownerDocument||document,q=Q&&Q.defaultView||window;if(q.getSelection){var P=q.getSelection(),ve=y.textContent.length,Me=Math.min(S.start,ve),ft=S.end===void 0?Me:Math.min(S.end,ve);!P.extend&&Me>ft&&(h=ft,ft=Me,Me=h);var C=ta(y,Me),M=ta(y,ft);if(C&&M&&(P.rangeCount!==1||P.anchorNode!==C.node||P.anchorOffset!==C.offset||P.focusNode!==M.node||P.focusOffset!==M.offset)){var D=Q.createRange();D.setStart(C.node,C.offset),P.removeAllRanges(),Me>ft?(P.addRange(D),P.extend(M.node,M.offset)):(D.setEnd(M.node,M.offset),P.addRange(D))}}}}for(Q=[],P=y;P=P.parentNode;)P.nodeType===1&&Q.push({element:P,left:P.scrollLeft,top:P.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<Q.length;y++){var K=Q[y];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}Jo=!!sd,od=sd=null}finally{lt=i,Z.p=r,z.T=n}}e.current=t,It=2}}function y1(){if(It===2){It=0;var e=jl,t=Xa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=z.T,z.T=null;var r=Z.p;Z.p=2;var i=lt;lt|=4;try{X0(e,t.alternate,t)}finally{lt=i,Z.p=r,z.T=n}}It=3}}function w1(){if(It===4||It===3){It=0,on();var e=jl,t=Xa,n=tl,r=s1;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?It=5:(It=0,Xa=jl=null,x1(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Nl=null),nr(n),t=t.stateNode,at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(qn,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=z.T,i=Z.p,Z.p=2,z.T=null;try{for(var c=e.onRecoverableError,h=0;h<r.length;h++){var y=r[h];c(y.value,{componentStack:y.stack})}}finally{z.T=t,Z.p=i}}(tl&3)!==0&&Vo(),Tr(e),i=e.pendingLanes,(n&261930)!==0&&(i&42)!==0?e===Xu?as++:(as=0,Xu=e):as=0,is(0)}}function x1(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Hi(t)))}function Vo(){return b1(),y1(),w1(),k1()}function k1(){if(It!==5)return!1;var e=jl,t=$u;$u=0;var n=nr(tl),r=z.T,i=Z.p;try{Z.p=32>n?32:n,z.T=null,n=Yu,Yu=null;var c=jl,h=tl;if(It=0,Xa=jl=null,tl=0,(lt&6)!==0)throw Error(s(331));var y=lt;if(lt|=4,l1(c.current),t1(c,c.current,h,n),lt=y,is(0,!1),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(qn,c)}catch{}return!0}finally{Z.p=i,z.T=r,x1(e,t)}}function S1(e,t,n){t=$n(n,t),t=Tu(e.stateNode,t,2),e=xl(e,t,2),e!==null&&(Ze(e,2),Tr(e))}function st(e,t,n){if(e.tag===3)S1(e,e,n);else for(;t!==null;){if(t.tag===3){S1(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nl===null||!Nl.has(r))){e=$n(n,e),n=E0(2),r=xl(t,n,2),r!==null&&(T0(n,r,t,e),Ze(r,2),Tr(r));break}}t=t.return}}function Wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Cp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Pu=!0,i.add(n),e=zp.bind(null,e,t,n),t.then(e,e))}function zp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,pt===e&&(Ge&n)===n&&(Ct===4||Ct===3&&(Ge&62914560)===Ge&&300>gt()-Lo?(lt&2)===0&&Ka(e,0):Fu|=n,Ya===Ge&&(Ya=0)),Tr(e)}function E1(e,t){t===0&&(t=Fe()),e=xr(e,t),e!==null&&(Ze(e,t),Tr(e))}function Up(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),E1(e,n)}function qp(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),E1(e,n)}function Hp(e,t){return De(e,t)}var Io=null,Wa=null,Zu=!1,Po=!1,Ju=!1,Al=0;function Tr(e){e!==Wa&&e.next===null&&(Wa===null?Io=Wa=e:Wa=Wa.next=e),Po=!0,Zu||(Zu=!0,Ip())}function is(e,t){if(!Ju&&Po){Ju=!0;do for(var n=!1,r=Io;r!==null;){if(e!==0){var i=r.pendingLanes;if(i===0)var c=0;else{var h=r.suspendedLanes,y=r.pingedLanes;c=(1<<31-mt(42|e)+1)-1,c&=i&~(h&~y),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,j1(r,c))}else c=Ge,c=Te(r,r===pt?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||nt(r,c)||(n=!0,j1(r,c));r=r.next}while(n);Ju=!1}}function Vp(){T1()}function T1(){Po=Zu=!1;var e=0;Al!==0&&Zp()&&(e=Al);for(var t=gt(),n=null,r=Io;r!==null;){var i=r.next,c=M1(r,t);c===0?(r.next=null,n===null?Io=i:n.next=i,i===null&&(Wa=n)):(n=r,(e!==0||(c&3)!==0)&&(Po=!0)),r=i}It!==0&&It!==5||is(e),Al!==0&&(Al=0)}function M1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var h=31-mt(c),y=1<<h,S=i[h];S===-1?((y&n)===0||(y&r)!==0)&&(i[h]=wt(y,t)):S<=t&&(e.expiredLanes|=y),c&=~y}if(t=pt,n=Ge,n=Te(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(it===2||it===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Et(r),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||nt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Et(r),nr(n)){case 2:case 8:n=tr;break;case 32:n=Ft;break;case 268435456:n=Nr;break;default:n=Ft}return r=N1.bind(null,e),n=De(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Et(r),e.callbackPriority=2,e.callbackNode=null,2}function N1(e,t){if(It!==0&&It!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Vo()&&e.callbackNode!==n)return null;var r=Ge;return r=Te(e,e===pt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(c1(e,r,t),M1(e,gt()),e.callbackNode!=null&&e.callbackNode===n?N1.bind(null,e):null)}function j1(e,t){if(Vo())return null;c1(e,t,!0)}function Ip(){e2(function(){(lt&6)!==0?De(En,Vp):T1()})}function ed(){if(Al===0){var e=Ba;e===0&&(e=mn,mn<<=1,(mn&261888)===0&&(mn=256)),Al=e}return Al}function R1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:G(""+e)}function A1(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Pp(e,t,n,r,i){if(t==="submit"&&n&&n.stateNode===i){var c=R1((i[St]||null).action),h=r.submitter;h&&(t=(t=h[St]||null)?R1(t.formAction):h.getAttribute("formAction"),t!==null&&(c=t,h=null));var y=new Xl("action","action",null,r,i);e.push({event:y,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Al!==0){var S=h?A1(i,h):new FormData(i);yu(n,{pending:!0,data:S,method:i.method,action:c},null,S)}}else typeof c=="function"&&(y.preventDefault(),S=h?A1(i,h):new FormData(i),yu(n,{pending:!0,data:S,method:i.method,action:c},c,S))},currentTarget:i}]})}}for(var td=0;td<or.length;td++){var nd=or[td],Fp=nd.toLowerCase(),Gp=nd[0].toUpperCase()+nd.slice(1);Dt(Fp,"on"+Gp)}Dt(fe,"onAnimationEnd"),Dt(Je,"onAnimationIteration"),Dt(je,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(rt,"onTransitionRun"),Dt(Rt,"onTransitionStart"),Dt(dn,"onTransitionCancel"),Dt(qe,"onTransitionEnd"),gn("onMouseEnter",["mouseout","mouseover"]),gn("onMouseLeave",["mouseout","mouseover"]),gn("onPointerEnter",["pointerout","pointerover"]),gn("onPointerLeave",["pointerout","pointerover"]),Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ss="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$p=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ss));function C1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var c=void 0;if(t)for(var h=r.length-1;0<=h;h--){var y=r[h],S=y.instance,L=y.currentTarget;if(y=y.listener,S!==c&&i.isPropagationStopped())break e;c=y,i.currentTarget=L;try{c(i)}catch(Y){bn(Y)}i.currentTarget=null,c=S}else for(h=0;h<r.length;h++){if(y=r[h],S=y.instance,L=y.currentTarget,y=y.listener,S!==c&&i.isPropagationStopped())break e;c=y,i.currentTarget=L;try{c(i)}catch(Y){bn(Y)}i.currentTarget=null,c=S}}}}function Pe(e,t){var n=t[ba];n===void 0&&(n=t[ba]=new Set);var r=e+"__bubble";n.has(r)||(D1(t,e,2,!1),n.add(r))}function rd(e,t,n){var r=0;t&&(r|=4),D1(n,e,r,t)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function ld(e){if(!e[Fo]){e[Fo]=!0,Hn.forEach(function(n){n!=="selectionchange"&&($p.has(n)||rd(n,!1,e),rd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fo]||(t[Fo]=!0,rd("selectionchange",!1,t))}}function D1(e,t,n,r){switch(om(t)){case 2:var i=y2;break;case 8:i=w2;break;default:i=bd}n=i.bind(null,t,n,e),i=void 0,!Br||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ad(e,t,n,r,i){var c=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var h=r.tag;if(h===3||h===4){var y=r.stateNode.containerInfo;if(y===i)break;if(h===4)for(h=r.return;h!==null;){var S=h.tag;if((S===3||S===4)&&h.stateNode.containerInfo===i)return;h=h.return}for(;y!==null;){if(h=Tn(y),h===null)return;if(S=h.tag,S===5||S===6||S===26||S===27){r=c=h;continue e}y=y.parentNode}}r=r.return}Mt(function(){var L=c,Y=wi(n),Q=[];e:{var q=vt.get(e);if(q!==void 0){var P=Xl,ve=e;switch(e){case"keypress":if(Yl(n)===0)break e;case"keydown":case"keyup":P=jc;break;case"focusin":ve="focus",P=Ea;break;case"focusout":ve="blur",P=Ea;break;case"beforeblur":case"afterblur":P=Ea;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=Hs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=ka;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=Ni;break;case fe:case Je:case je:P=Ec;break;case qe:P=Gs;break;case"scroll":case"scrollend":P=$t;break;case"wheel":P=Ys;break;case"copy":case"cut":case"paste":P=Mc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=Mi;break;case"toggle":case"beforetoggle":P=Dc}var Me=(t&4)!==0,ft=!Me&&(e==="scroll"||e==="scrollend"),C=Me?q!==null?q+"Capture":null:q;Me=[];for(var M=L,D;M!==null;){var K=M;if(D=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||D===null||C===null||(K=ul(M,C),K!=null&&Me.push(os(M,K,D))),ft)break;M=M.return}0<Me.length&&(q=new P(q,ve,null,n,Y),Q.push({event:q,listeners:Me}))}}if((t&7)===0){e:{if(q=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",q&&n!==yi&&(ve=n.relatedTarget||n.fromElement)&&(Tn(ve)||ve[ht]))break e;if((P||q)&&(q=Y.window===Y?Y:(q=Y.ownerDocument)?q.defaultView||q.parentWindow:window,P?(ve=n.relatedTarget||n.toElement,P=L,ve=ve?Tn(ve):null,ve!==null&&(ft=p(ve),Me=ve.tag,ve!==ft||Me!==5&&Me!==27&&Me!==6)&&(ve=null)):(P=null,ve=L),P!==ve)){if(Me=Hs,K="onMouseLeave",C="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(Me=Mi,K="onPointerLeave",C="onPointerEnter",M="pointer"),ft=P==null?q:rn(P),D=ve==null?q:rn(ve),q=new Me(K,M+"leave",P,n,Y),q.target=ft,q.relatedTarget=D,K=null,Tn(Y)===L&&(Me=new Me(C,M+"enter",ve,n,Y),Me.target=D,Me.relatedTarget=ft,K=Me),ft=K,P&&ve)t:{for(Me=Yp,C=P,M=ve,D=0,K=C;K;K=Me(K))D++;K=0;for(var Se=M;Se;Se=Me(Se))K++;for(;0<D-K;)C=Me(C),D--;for(;0<K-D;)M=Me(M),K--;for(;D--;){if(C===M||M!==null&&C===M.alternate){Me=C;break t}C=Me(C),M=Me(M)}Me=null}else Me=null;P!==null&&O1(Q,q,P,Me,!1),ve!==null&&ft!==null&&O1(Q,ft,ve,Me,!0)}}e:{if(q=L?rn(L):window,P=q.nodeName&&q.nodeName.toLowerCase(),P==="select"||P==="input"&&q.type==="file")var et=to;else if(ml(q))if(Ri)et=Gn;else{et=qc;var ye=Uc}else P=q.nodeName,!P||P.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?L&&vi(L.elementType)&&(et=to):et=Di;if(et&&(et=et(e,L))){ji(Q,et,n,Y);break e}ye&&ye(e,q,L),e==="focusout"&&L&&q.type==="number"&&L.memoizedProps.value!=null&&gi(q,"number",q.value)}switch(ye=L?rn(L):window,e){case"focusin":(ml(ye)||ye.contentEditable==="true")&&(qr=ye,Bi=L,na=null);break;case"focusout":na=Bi=qr=null;break;case"mousedown":zi=!0;break;case"contextmenu":case"mouseup":case"dragend":zi=!1,f(Q,n,Y);break;case"selectionchange":if(Li)break;case"keydown":case"keyup":f(Q,n,Y)}var He;if(Wl)e:{switch(e){case"compositionstart":var $e="onCompositionStart";break e;case"compositionend":$e="onCompositionEnd";break e;case"compositionupdate":$e="onCompositionUpdate";break e}$e=void 0}else fl?Zs(e,n)&&($e="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($e="onCompositionStart");$e&&(Ks&&n.locale!=="ko"&&(fl||$e!=="onCompositionStart"?$e==="onCompositionEnd"&&fl&&(He=qs()):(br=Y,ki="value"in br?br.value:br.textContent,fl=!0)),ye=Go(L,$e),0<ye.length&&($e=new jt($e,e,null,n,Y),Q.push({event:$e,listeners:ye}),He?$e.data=He:(He=Js(n),He!==null&&($e.data=He)))),(He=Oc?Lc(e,n):Bc(e,n))&&($e=Go(L,"onBeforeInput"),0<$e.length&&(ye=new jt("onBeforeInput","beforeinput",null,n,Y),Q.push({event:ye,listeners:$e}),ye.data=He)),Pp(Q,e,L,n,Y)}C1(Q,t)})}function os(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Go(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,c=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||c===null||(i=ul(e,n),i!=null&&r.unshift(os(e,i,c)),i=ul(e,t),i!=null&&r.push(os(e,i,c))),e.tag===3)return r;e=e.return}return[]}function Yp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function O1(e,t,n,r,i){for(var c=t._reactName,h=[];n!==null&&n!==r;){var y=n,S=y.alternate,L=y.stateNode;if(y=y.tag,S!==null&&S===r)break;y!==5&&y!==26&&y!==27||L===null||(S=L,i?(L=ul(n,c),L!=null&&h.unshift(os(n,L,S))):i||(L=ul(n,c),L!=null&&h.push(os(n,L,S)))),n=n.return}h.length!==0&&e.push({event:t,listeners:h})}var Xp=/\r\n?/g,Kp=/\u0000|\uFFFD/g;function L1(e){return(typeof e=="string"?e:""+e).replace(Xp,`
`).replace(Kp,"")}function B1(e,t){return t=L1(t),L1(e)===t}function dt(e,t,n,r,i,c){switch(n){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||Kt(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&Kt(e,""+r);break;case"className":ir(e,"class",r);break;case"tabIndex":ir(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ir(e,n,r);break;case"style":zs(e,r,c);break;case"data":if(t!=="object"){ir(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=G(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&dt(e,t,"name",i.name,i,null),dt(e,t,"formEncType",i.formEncType,i,null),dt(e,t,"formMethod",i.formMethod,i,null),dt(e,t,"formTarget",i.formTarget,i,null)):(dt(e,t,"encType",i.encType,i,null),dt(e,t,"method",i.method,i,null),dt(e,t,"target",i.target,i,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=G(""+r),e.setAttribute(n,r);break;case"onClick":r!=null&&(e.onclick=sr);break;case"onScroll":r!=null&&Pe("scroll",e);break;case"onScrollEnd":r!=null&&Pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}n=G(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":r===!0?e.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Pe("beforetoggle",e),Pe("toggle",e),ar(e,"popover",r);break;case"xlinkActuate":Vn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Vn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Vn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Vn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Vn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Vn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Vn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Vn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Vn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ar(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Us.get(n)||n,ar(e,n,r))}}function id(e,t,n,r,i,c){switch(n){case"style":zs(e,r,c);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof r=="string"?Kt(e,r):(typeof r=="number"||typeof r=="bigint")&&Kt(e,""+r);break;case"onScroll":r!=null&&Pe("scroll",e);break;case"onScrollEnd":r!=null&&Pe("scrollend",e);break;case"onClick":r!=null&&(e.onclick=sr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ar.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),c=e[St]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,i),typeof r=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break e}n in e?e[n]=r:r===!0?e.setAttribute(n,""):ar(e,n,r)}}}function Jt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pe("error",e),Pe("load",e);var r=!1,i=!1,c;for(c in n)if(n.hasOwnProperty(c)){var h=n[c];if(h!=null)switch(c){case"src":r=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:dt(e,t,c,h,n,null)}}i&&dt(e,t,"srcSet",n.srcSet,n,null),r&&dt(e,t,"src",n.src,n,null);return;case"input":Pe("invalid",e);var y=c=h=i=null,S=null,L=null;for(r in n)if(n.hasOwnProperty(r)){var Y=n[r];if(Y!=null)switch(r){case"name":i=Y;break;case"type":h=Y;break;case"checked":S=Y;break;case"defaultChecked":L=Y;break;case"value":c=Y;break;case"defaultValue":y=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,t));break;default:dt(e,t,r,Y,n,null)}}Bs(e,c,y,S,L,h,i,!1);return;case"select":Pe("invalid",e),r=h=c=null;for(i in n)if(n.hasOwnProperty(i)&&(y=n[i],y!=null))switch(i){case"value":c=y;break;case"defaultValue":h=y;break;case"multiple":r=y;default:dt(e,t,i,y,n,null)}t=c,n=h,e.multiple=!!r,t!=null?In(e,!!r,t,!1):n!=null&&In(e,!!r,n,!0);return;case"textarea":Pe("invalid",e),c=i=r=null;for(h in n)if(n.hasOwnProperty(h)&&(y=n[h],y!=null))switch(h){case"value":r=y;break;case"defaultValue":i=y;break;case"children":c=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(s(91));break;default:dt(e,t,h,y,n,null)}xa(e,r,i,c);return;case"option":for(S in n)if(n.hasOwnProperty(S)&&(r=n[S],r!=null))switch(S){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:dt(e,t,S,r,n,null)}return;case"dialog":Pe("beforetoggle",e),Pe("toggle",e),Pe("cancel",e),Pe("close",e);break;case"iframe":case"object":Pe("load",e);break;case"video":case"audio":for(r=0;r<ss.length;r++)Pe(ss[r],e);break;case"image":Pe("error",e),Pe("load",e);break;case"details":Pe("toggle",e);break;case"embed":case"source":case"link":Pe("error",e),Pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in n)if(n.hasOwnProperty(L)&&(r=n[L],r!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:dt(e,t,L,r,n,null)}return;default:if(vi(t)){for(Y in n)n.hasOwnProperty(Y)&&(r=n[Y],r!==void 0&&id(e,t,Y,r,n,void 0));return}}for(y in n)n.hasOwnProperty(y)&&(r=n[y],r!=null&&dt(e,t,y,r,n,null))}function Qp(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,c=null,h=null,y=null,S=null,L=null,Y=null;for(P in n){var Q=n[P];if(n.hasOwnProperty(P)&&Q!=null)switch(P){case"checked":break;case"value":break;case"defaultValue":S=Q;default:r.hasOwnProperty(P)||dt(e,t,P,null,r,Q)}}for(var q in r){var P=r[q];if(Q=n[q],r.hasOwnProperty(q)&&(P!=null||Q!=null))switch(q){case"type":c=P;break;case"name":i=P;break;case"checked":L=P;break;case"defaultChecked":Y=P;break;case"value":h=P;break;case"defaultValue":y=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(s(137,t));break;default:P!==Q&&dt(e,t,q,P,r,Q)}}pi(e,h,y,S,L,Y,c,i);return;case"select":P=h=y=q=null;for(c in n)if(S=n[c],n.hasOwnProperty(c)&&S!=null)switch(c){case"value":break;case"multiple":P=S;default:r.hasOwnProperty(c)||dt(e,t,c,null,r,S)}for(i in r)if(c=r[i],S=n[i],r.hasOwnProperty(i)&&(c!=null||S!=null))switch(i){case"value":q=c;break;case"defaultValue":y=c;break;case"multiple":h=c;default:c!==S&&dt(e,t,i,c,r,S)}t=y,n=h,r=P,q!=null?In(e,!!n,q,!1):!!r!=!!n&&(t!=null?In(e,!!n,t,!0):In(e,!!n,n?[]:"",!1));return;case"textarea":P=q=null;for(y in n)if(i=n[y],n.hasOwnProperty(y)&&i!=null&&!r.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:dt(e,t,y,null,r,i)}for(h in r)if(i=r[h],c=n[h],r.hasOwnProperty(h)&&(i!=null||c!=null))switch(h){case"value":q=i;break;case"defaultValue":P=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(s(91));break;default:i!==c&&dt(e,t,h,i,r,c)}Or(e,q,P);return;case"option":for(var ve in n)if(q=n[ve],n.hasOwnProperty(ve)&&q!=null&&!r.hasOwnProperty(ve))switch(ve){case"selected":e.selected=!1;break;default:dt(e,t,ve,null,r,q)}for(S in r)if(q=r[S],P=n[S],r.hasOwnProperty(S)&&q!==P&&(q!=null||P!=null))switch(S){case"selected":e.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:dt(e,t,S,q,r,P)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Me in n)q=n[Me],n.hasOwnProperty(Me)&&q!=null&&!r.hasOwnProperty(Me)&&dt(e,t,Me,null,r,q);for(L in r)if(q=r[L],P=n[L],r.hasOwnProperty(L)&&q!==P&&(q!=null||P!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,t));break;default:dt(e,t,L,q,r,P)}return;default:if(vi(t)){for(var ft in n)q=n[ft],n.hasOwnProperty(ft)&&q!==void 0&&!r.hasOwnProperty(ft)&&id(e,t,ft,void 0,r,q);for(Y in r)q=r[Y],P=n[Y],!r.hasOwnProperty(Y)||q===P||q===void 0&&P===void 0||id(e,t,Y,q,r,P);return}}for(var C in n)q=n[C],n.hasOwnProperty(C)&&q!=null&&!r.hasOwnProperty(C)&&dt(e,t,C,null,r,q);for(Q in r)q=r[Q],P=n[Q],!r.hasOwnProperty(Q)||q===P||q==null&&P==null||dt(e,t,Q,q,r,P)}function z1(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Wp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var i=n[r],c=i.transferSize,h=i.initiatorType,y=i.duration;if(c&&y&&z1(h)){for(h=0,y=i.responseEnd,r+=1;r<n.length;r++){var S=n[r],L=S.startTime;if(L>y)break;var Y=S.transferSize,Q=S.initiatorType;Y&&z1(Q)&&(S=S.responseEnd,h+=Y*(S<y?1:(y-L)/(S-L)))}if(--r,t+=8*(c+h)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var sd=null,od=null;function $o(e){return e.nodeType===9?e:e.ownerDocument}function U1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function q1(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function cd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ud=null;function Zp(){var e=window.event;return e&&e.type==="popstate"?e===ud?!1:(ud=e,!0):(ud=null,!1)}var H1=typeof setTimeout=="function"?setTimeout:void 0,Jp=typeof clearTimeout=="function"?clearTimeout:void 0,V1=typeof Promise=="function"?Promise:void 0,e2=typeof queueMicrotask=="function"?queueMicrotask:typeof V1<"u"?function(e){return V1.resolve(null).then(e).catch(t2)}:H1;function t2(e){setTimeout(function(){throw e})}function Cl(e){return e==="head"}function I1(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"||n==="/&"){if(r===0){e.removeChild(i),ti(t);return}r--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")r++;else if(n==="html")cs(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,cs(n);for(var c=n.firstChild;c;){var h=c.nextSibling,y=c.nodeName;c[_r]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=h}}else n==="body"&&cs(e.ownerDocument.body);n=i}while(n);ti(t)}function P1(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=r}while(n)}function dd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":dd(n),sl(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function n2(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[_r])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Wn(e.nextSibling),e===null)break}return null}function r2(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Wn(e.nextSibling),e===null))return null;return e}function F1(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Wn(e.nextSibling),e===null))return null;return e}function fd(e){return e.data==="$?"||e.data==="$~"}function md(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function l2(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var hd=null;function G1(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Wn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function $1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Y1(e,t,n){switch(t=$o(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function cs(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);sl(e)}var Zn=new Map,X1=new Set;function Yo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var nl=Z.d;Z.d={f:a2,r:i2,D:s2,C:o2,L:c2,m:u2,X:f2,S:d2,M:m2};function a2(){var e=nl.f(),t=Uo();return e||t}function i2(e){var t=rr(e);t!==null&&t.tag===5&&t.type==="form"?d0(t):nl.r(e)}var Za=typeof document>"u"?null:document;function K1(e,t,n){var r=Za;if(r&&typeof t=="string"&&t){var i=_n(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),X1.has(i)||(X1.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement("link"),Jt(t,"link",e),xt(t),r.head.appendChild(t)))}}function s2(e){nl.D(e),K1("dns-prefetch",e,null)}function o2(e,t){nl.C(e,t),K1("preconnect",e,t)}function c2(e,t,n){nl.L(e,t,n);var r=Za;if(r&&e&&t){var i='link[rel="preload"][as="'+_n(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+_n(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+_n(n.imageSizes)+'"]')):i+='[href="'+_n(e)+'"]';var c=i;switch(t){case"style":c=Ja(e);break;case"script":c=ei(e)}Zn.has(c)||(e=x({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Zn.set(c,e),r.querySelector(i)!==null||t==="style"&&r.querySelector(us(c))||t==="script"&&r.querySelector(ds(c))||(t=r.createElement("link"),Jt(t,"link",e),xt(t),r.head.appendChild(t)))}}function u2(e,t){nl.m(e,t);var n=Za;if(n&&e){var r=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+_n(r)+'"][href="'+_n(e)+'"]',c=i;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=ei(e)}if(!Zn.has(c)&&(e=x({rel:"modulepreload",href:e},t),Zn.set(c,e),n.querySelector(i)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ds(c)))return}r=n.createElement("link"),Jt(r,"link",e),xt(r),n.head.appendChild(r)}}}function d2(e,t,n){nl.S(e,t,n);var r=Za;if(r&&e){var i=pn(r).hoistableStyles,c=Ja(e);t=t||"default";var h=i.get(c);if(!h){var y={loading:0,preload:null};if(h=r.querySelector(us(c)))y.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Zn.get(c))&&pd(e,n);var S=h=r.createElement("link");xt(S),Jt(S,"link",e),S._p=new Promise(function(L,Y){S.onload=L,S.onerror=Y}),S.addEventListener("load",function(){y.loading|=1}),S.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Xo(h,t,r)}h={type:"stylesheet",instance:h,count:1,state:y},i.set(c,h)}}}function f2(e,t){nl.X(e,t);var n=Za;if(n&&e){var r=pn(n).hoistableScripts,i=ei(e),c=r.get(i);c||(c=n.querySelector(ds(i)),c||(e=x({src:e,async:!0},t),(t=Zn.get(i))&&gd(e,t),c=n.createElement("script"),xt(c),Jt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(i,c))}}function m2(e,t){nl.M(e,t);var n=Za;if(n&&e){var r=pn(n).hoistableScripts,i=ei(e),c=r.get(i);c||(c=n.querySelector(ds(i)),c||(e=x({src:e,async:!0,type:"module"},t),(t=Zn.get(i))&&gd(e,t),c=n.createElement("script"),xt(c),Jt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(i,c))}}function Q1(e,t,n,r){var i=(i=xe.current)?Yo(i):null;if(!i)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ja(n.href),n=pn(i).hoistableStyles,r=n.get(t),r||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ja(n.href);var c=pn(i).hoistableStyles,h=c.get(e);if(h||(i=i.ownerDocument||i,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,h),(c=i.querySelector(us(e)))&&!c._p&&(h.instance=c,h.state.loading=5),Zn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Zn.set(e,n),c||h2(i,e,n,h.state))),t&&r===null)throw Error(s(528,""));return h}if(t&&r!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ei(n),n=pn(i).hoistableScripts,r=n.get(t),r||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ja(e){return'href="'+_n(e)+'"'}function us(e){return'link[rel="stylesheet"]['+e+"]"}function W1(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function h2(e,t,n,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),Jt(t,"link",n),xt(t),e.head.appendChild(t))}function ei(e){return'[src="'+_n(e)+'"]'}function ds(e){return"script[async]"+e}function Z1(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+_n(n.href)+'"]');if(r)return t.instance=r,xt(r),r;var i=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),xt(r),Jt(r,"style",i),Xo(r,n.precedence,e),t.instance=r;case"stylesheet":i=Ja(n.href);var c=e.querySelector(us(i));if(c)return t.state.loading|=4,t.instance=c,xt(c),c;r=W1(n),(i=Zn.get(i))&&pd(r,i),c=(e.ownerDocument||e).createElement("link"),xt(c);var h=c;return h._p=new Promise(function(y,S){h.onload=y,h.onerror=S}),Jt(c,"link",r),t.state.loading|=4,Xo(c,n.precedence,e),t.instance=c;case"script":return c=ei(n.src),(i=e.querySelector(ds(c)))?(t.instance=i,xt(i),i):(r=n,(i=Zn.get(c))&&(r=x({},n),gd(r,i)),e=e.ownerDocument||e,i=e.createElement("script"),xt(i),Jt(i,"link",r),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,Xo(r,n.precedence,e));return t.instance}function Xo(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=r.length?r[r.length-1]:null,c=i,h=0;h<r.length;h++){var y=r[h];if(y.dataset.precedence===t)c=y;else if(c!==i)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function pd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function gd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ko=null;function J1(e,t,n){if(Ko===null){var r=new Map,i=Ko=new Map;i.set(n,r)}else i=Ko,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var c=n[i];if(!(c[_r]||c[Tt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var h=c.getAttribute(t)||"";h=e+h;var y=r.get(h);y?y.push(c):r.set(h,[c])}}return r}function em(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function p2(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function tm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function g2(e,t,n,r){if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var i=Ja(r.href),c=t.querySelector(us(i));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Qo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,xt(c);return}c=t.ownerDocument||t,r=W1(r),(i=Zn.get(i))&&pd(r,i),c=c.createElement("link"),xt(c);var h=c;h._p=new Promise(function(y,S){h.onload=y,h.onerror=S}),Jt(c,"link",r),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Qo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var _d=0;function _2(e,t){return e.stylesheets&&e.count===0&&Zo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Zo(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&_d===0&&(_d=62500*Wp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zo(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>_d?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Qo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wo=null;function Zo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wo=new Map,t.forEach(v2,e),Wo=null,Qo.call(e))}function v2(e,t){if(!(t.state.loading&4)){var n=Wo.get(e);if(n)var r=n.get(null);else{n=new Map,Wo.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<i.length;c++){var h=i[c];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),r=h)}r&&n.set(null,r)}i=t.instance,h=i.getAttribute("data-precedence"),c=n.get(h)||r,c===r&&n.set(null,i),n.set(h,i),this.count++,r=Qo.bind(this),i.addEventListener("load",r),i.addEventListener("error",r),c?c.parentNode.insertBefore(i,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var fs={$$typeof:le,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function b2(e,t,n,r,i,c,h,y,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ct(0),this.hiddenUpdates=ct(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=c,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function nm(e,t,n,r,i,c,h,y,S,L,Y,Q){return e=new b2(e,t,n,h,S,L,Y,Q,y),t=1,c===!0&&(t|=24),c=Rn(3,null,null,t),e.current=c,c.stateNode=e,t=Qc(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:r,isDehydrated:n,cache:t},eu(c),e}function rm(e){return e?(e=Aa,e):Aa}function lm(e,t,n,r,i,c){i=rm(i),r.context===null?r.context=i:r.pendingContext=i,r=wl(t),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=xl(e,r,t),n!==null&&(Sn(n,e,t),Fi(n,e,t))}function am(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vd(e,t){am(e,t),(e=e.alternate)&&am(e,t)}function im(e){if(e.tag===13||e.tag===31){var t=xr(e,67108864);t!==null&&Sn(t,e,67108864),vd(e,67108864)}}function sm(e){if(e.tag===13||e.tag===31){var t=Ln();t=di(t);var n=xr(e,t);n!==null&&Sn(n,e,t),vd(e,t)}}var Jo=!0;function y2(e,t,n,r){var i=z.T;z.T=null;var c=Z.p;try{Z.p=2,bd(e,t,n,r)}finally{Z.p=c,z.T=i}}function w2(e,t,n,r){var i=z.T;z.T=null;var c=Z.p;try{Z.p=8,bd(e,t,n,r)}finally{Z.p=c,z.T=i}}function bd(e,t,n,r){if(Jo){var i=yd(r);if(i===null)ad(e,t,r,ec,n),cm(e,r);else if(k2(i,e,t,n,r))r.stopPropagation();else if(cm(e,r),t&4&&-1<x2.indexOf(e)){for(;i!==null;){var c=rr(i);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var h=re(c.pendingLanes);if(h!==0){var y=c;for(y.pendingLanes|=2,y.entangledLanes|=2;h;){var S=1<<31-mt(h);y.entanglements[1]|=S,h&=~S}Tr(c),(lt&6)===0&&(Bo=gt()+500,is(0))}}break;case 31:case 13:y=xr(c,2),y!==null&&Sn(y,c,2),Uo(),vd(c,2)}if(c=yd(r),c===null&&ad(e,t,r,ec,n),c===i)break;i=c}i!==null&&r.stopPropagation()}else ad(e,t,r,null,n)}}function yd(e){return e=wi(e),wd(e)}var ec=null;function wd(e){if(ec=null,e=Tn(e),e!==null){var t=p(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=g(t),e!==null)return e;e=null}else if(n===31){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ec=e,null}function om(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mr()){case En:return 2;case tr:return 8;case Ft:case tn:return 32;case Nr:return 268435456;default:return 32}default:return 32}}var xd=!1,Dl=null,Ol=null,Ll=null,ms=new Map,hs=new Map,Bl=[],x2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cm(e,t){switch(e){case"focusin":case"focusout":Dl=null;break;case"dragenter":case"dragleave":Ol=null;break;case"mouseover":case"mouseout":Ll=null;break;case"pointerover":case"pointerout":ms.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hs.delete(t.pointerId)}}function ps(e,t,n,r,i,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:c,targetContainers:[i]},t!==null&&(t=rr(t),t!==null&&im(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function k2(e,t,n,r,i){switch(t){case"focusin":return Dl=ps(Dl,e,t,n,r,i),!0;case"dragenter":return Ol=ps(Ol,e,t,n,r,i),!0;case"mouseover":return Ll=ps(Ll,e,t,n,r,i),!0;case"pointerover":var c=i.pointerId;return ms.set(c,ps(ms.get(c)||null,e,t,n,r,i)),!0;case"gotpointercapture":return c=i.pointerId,hs.set(c,ps(hs.get(c)||null,e,t,n,r,i)),!0}return!1}function um(e){var t=Tn(e.target);if(t!==null){var n=p(t);if(n!==null){if(t=n.tag,t===13){if(t=g(n),t!==null){e.blockedOn=t,va(e.priority,function(){sm(n)});return}}else if(t===31){if(t=m(n),t!==null){e.blockedOn=t,va(e.priority,function(){sm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yd(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yi=r,n.target.dispatchEvent(r),yi=null}else return t=rr(n),t!==null&&im(t),e.blockedOn=n,!1;t.shift()}return!0}function dm(e,t,n){tc(e)&&n.delete(t)}function S2(){xd=!1,Dl!==null&&tc(Dl)&&(Dl=null),Ol!==null&&tc(Ol)&&(Ol=null),Ll!==null&&tc(Ll)&&(Ll=null),ms.forEach(dm),hs.forEach(dm)}function nc(e,t){e.blockedOn===t&&(e.blockedOn=null,xd||(xd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,S2)))}var rc=null;function fm(e){rc!==e&&(rc=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){rc===e&&(rc=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!="function"){if(wd(r||n)===null)continue;break}var c=rr(n);c!==null&&(e.splice(t,3),t-=3,yu(c,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function ti(e){function t(S){return nc(S,e)}Dl!==null&&nc(Dl,e),Ol!==null&&nc(Ol,e),Ll!==null&&nc(Ll,e),ms.forEach(t),hs.forEach(t);for(var n=0;n<Bl.length;n++){var r=Bl[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Bl.length&&(n=Bl[0],n.blockedOn===null);)um(n),n.blockedOn===null&&Bl.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],c=n[r+1],h=i[St]||null;if(typeof c=="function")h||fm(n);else if(h){var y=null;if(c&&c.hasAttribute("formAction")){if(i=c,h=c[St]||null)y=h.formAction;else if(wd(i)!==null)continue}else y=h.action;typeof y=="function"?n[r+1]=y:(n.splice(r,3),r-=3),fm(n)}}}function mm(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(h){return i=h})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function kd(e){this._internalRoot=e}lc.prototype.render=kd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,r=Ln();lm(n,r,e,t,null,null)},lc.prototype.unmount=kd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lm(e.current,2,null,e,null,null),Uo(),t[ht]=null}};function lc(e){this._internalRoot=e}lc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ls();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bl.length&&t!==0&&t<Bl[n].priority;n++);Bl.splice(n,0,e),n===0&&um(e)}};var hm=l.version;if(hm!=="19.2.7")throw Error(s(527,hm,"19.2.7"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=b(t),e=e!==null?k(e):null,e=e===null?null:e.stateNode,e};var E2={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{qn=ac.inject(E2),at=ac}catch{}}return _s.createRoot=function(e,t){if(!d(e))throw Error(s(299));var n=!1,r="",i=w0,c=x0,h=k0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(h=t.onRecoverableError)),t=nm(e,1,!1,null,null,n,r,null,i,c,h,mm),e[ht]=t.current,ld(e),new kd(t)},_s.hydrateRoot=function(e,t,n){if(!d(e))throw Error(s(299));var r=!1,i="",c=w0,h=x0,y=k0,S=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.formState!==void 0&&(S=n.formState)),t=nm(e,1,!0,t,n??null,r,i,S,c,h,y,mm),t.context=rm(null),n=t.current,r=Ln(),r=di(r),i=wl(r),i.callback=null,xl(n,i,r),n=r,t.current.lanes=n,Ze(t,n),Tr(t),e[ht]=t.current,ld(e),new lc(t)},_s.version="19.2.7",_s}var Sm;function B2(){if(Sm)return Td.exports;Sm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),Td.exports=L2(),Td.exports}var z2=B2();const U2=Nh(z2),Em=a=>{let l;const o=new Set,s=(b,k)=>{const x=typeof b=="function"?b(l):b;if(!Object.is(x,l)){const T=l;l=k??(typeof x!="object"||x===null)?x:Object.assign({},l,x),o.forEach(A=>A(l,T))}},d=()=>l,m={setState:s,getState:d,getInitialState:()=>_,subscribe:b=>(o.add(b),()=>o.delete(b))},_=l=a(s,d,m);return m},q2=(a=>a?Em(a):Em),H2=a=>a;function V2(a,l=H2){const o=Es.useSyncExternalStore(a.subscribe,Es.useCallback(()=>l(a.getState()),[a,l]),Es.useCallback(()=>l(a.getInitialState()),[a,l]));return Es.useDebugValue(o),o}const Tm=a=>{const l=q2(a),o=s=>V2(l,s);return Object.assign(o,l),o},I2=(a=>a?Tm(a):Tm);function P2(){const a=new Uint8Array(16);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(a);else for(let o=0;o<a.length;o+=1)a[o]=Math.floor(Math.random()*256);let l="";for(const o of a)l+=o.toString(16).padStart(2,"0");return l}const lf="pkp.user",af="pkp.savedDevices",sf="pkp.ideDrafts",of="pkp.ideSettings",Rs="Prototype Version 0.6.7";function wc(a){try{const l=localStorage.getItem(a);return l?JSON.parse(l):null}catch{return null}}function xc(a,l){try{localStorage.setItem(a,JSON.stringify(l))}catch{}}function F2(){const a=wc(lf);return a&&typeof a.username=="string"&&typeof a.userID=="string"?a:null}function Rd(a){xc(lf,a)}function gc(){return G2(wc(af)??[])}function Rh(a,l){return a.deviceID===l.deviceID?!0:!!a.ownerID&&a.ownerID===l.ownerID&&!!a.deviceName&&!!l.deviceName&&a.deviceName.toLowerCase()===l.deviceName.toLowerCase()}function G2(a){const l=[];for(const o of a){const s=l.findIndex(d=>Rh(d,o));s>=0?l[s]=o:l.push(o)}return l}function ai(a){xc(af,a)}function $2(){ai([])}function Y2(){try{localStorage.removeItem(lf),localStorage.removeItem(af),localStorage.removeItem(sf),localStorage.removeItem(of)}catch{}}function ic(){var a;return((a=wc(sf))==null?void 0:a.filter(l=>l.path&&typeof l.content=="string"))??[]}function vs(a){xc(sf,a)}function Mm(){const a=wc(of)??{};return{clearTerminalOnRun:!!a.clearTerminalOnRun,simplifiedErrors:a.simplifiedErrors!==!1}}function X2(a){xc(of,a)}function Ad(a){const l=gc().filter(o=>!Rh(o,a));return l.push(a),ai(l),l}function K2(a){const l=gc().filter(o=>o.deviceID!==a);return ai(l),l}const dc="b8e06067-62ad-41ba-9231-206ae80ab551",Q2="f897177b-aee8-4767-8ecc-cc694fd5fce0",W2="f897177b-aee8-4767-8ecc-cc694fd5fce1",Cd=20,Z2=12,J2=new TextEncoder;function eg(a){return new Promise(l=>setTimeout(l,a))}function kc(){return typeof navigator<"u"&&"bluetooth"in navigator}function Ah(a){return a?a.startsWith("PicoW-")?a.slice(6):a:"Pico"}async function tg(a){if(!kc())throw new Error("Web Bluetooth er ikke tilgængelig i denne browser.");const l=a?[{services:[dc],name:`PicoW-${a}`}]:[{services:[dc]},{namePrefix:"PicoW-"}];return navigator.bluetooth.requestDevice({filters:l,optionalServices:[dc]})}async function Ch(){if(!kc()||!navigator.bluetooth.getDevices)return[];try{return await navigator.bluetooth.getDevices()}catch{return[]}}class ng{constructor(){be(this,"device",null);be(this,"writeChar",null);be(this,"notifyChar",null);be(this,"buffer","");be(this,"decoder",new TextDecoder);be(this,"writeQueue",Promise.resolve());be(this,"disconnectNotified",!1);be(this,"onLine",()=>{});be(this,"onDisconnect",()=>{});be(this,"handleNotification",l=>{const o=l.target;if(!(o!=null&&o.value))return;this.buffer+=this.decoder.decode(o.value.buffer,{stream:!0});let s=this.buffer.indexOf(`
`);for(;s>=0;){const d=this.buffer.slice(0,s).trim();this.buffer=this.buffer.slice(s+1),d&&this.onLine(d),s=this.buffer.indexOf(`
`)}});be(this,"handleDisconnected",()=>{var l;this.disconnectNotified||(this.disconnectNotified=!0,(l=this.device)==null||l.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.writeChar=null,this.notifyChar=null,this.onDisconnect())})}get connected(){var l,o;return!!((o=(l=this.device)==null?void 0:l.gatt)!=null&&o.connected)}async connect(l){var d;this.device&&this.device!==l&&this.device.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.device=l,this.buffer="",this.decoder=new TextDecoder,this.disconnectNotified=!1,l.removeEventListener("gattserverdisconnected",this.handleDisconnected),l.addEventListener("gattserverdisconnected",this.handleDisconnected);const o=await((d=l.gatt)==null?void 0:d.connect());if(!o)throw new Error("Kunne ikke åbne Bluetooth-forbindelsen.");const s=await o.getPrimaryService(dc);this.writeChar=await s.getCharacteristic(Q2),this.notifyChar=await s.getCharacteristic(W2),await this.notifyChar.startNotifications(),this.notifyChar.addEventListener("characteristicvaluechanged",this.handleNotification)}writeLine(l){const o=this.writeQueue.then(()=>this.doWrite(l));return this.writeQueue=o.catch(()=>{}),o}async doWrite(l){if(!this.writeChar)throw new Error("Ingen forbindelse.");const o=J2.encode(`${l}
`),d=this.writeChar.properties.writeWithoutResponse&&typeof this.writeChar.writeValueWithoutResponse=="function"?this.writeChar.writeValueWithoutResponse.bind(this.writeChar):this.writeChar.writeValue.bind(this.writeChar);for(let p=0;p<o.length;p+=Cd){const g=o.slice(p,p+Cd);await d(g),p+Cd<o.length&&await eg(Z2)}}disconnect(){var o;const l=this.device;(o=l==null?void 0:l.gatt)!=null&&o.connected?l.gatt.disconnect():this.handleDisconnected()}}class rg{constructor(l,o){be(this,"send");be(this,"onMessage");be(this,"inActive",!1);be(this,"inExpectedTotal",0);be(this,"inStreamId",0);be(this,"inParts",new Map);be(this,"inProgress",null);be(this,"outPendingLines",null);be(this,"outWaitingAck",!1);be(this,"outStreamId",0);be(this,"outNextStreamId",1);be(this,"outCache",new Map);be(this,"outProgress",null);be(this,"outResolve",null);be(this,"outReject",null);this.send=l,this.onMessage=o}reset(){this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear(),this.inProgress=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outStreamId=0,this.outCache.clear(),this.outProgress=null,this.outResolve=null,this.outReject=null}handleLine(l){var s;if(l.startsWith("prep,")){const d=l.split(","),p=d.length>=2&&/^\d+$/.test(d[1])?parseInt(d[1],10):null,g=d.length>=3&&/^\d+$/.test(d[2])?parseInt(d[2],10):0;p!==null&&p>0&&(this.inActive=!0,this.inExpectedTotal=p,this.inStreamId=g,this.inParts.clear(),this.send(g>0?`ack:prep,${g}`:"ack:prep"));return}if(l==="ack:prep"||l===`ack:prep,${this.outStreamId}`){this.flushOutbound();return}if(l.startsWith("miss,")){const d=l.split(",");if(d.length>=3&&/^\d+$/.test(d[1])&&/^\d+$/.test(d[2])){const p=parseInt(d[1],10),g=parseInt(d[2],10),m=this.outCache.get(g);p===this.outStreamId&&m&&this.send(m)}return}const o=this.parseNumbered(l);if(o){const{idx:d,payload:p}=o;if(!this.inActive){this.onMessage(p);return}this.inParts.has(d)||(this.inParts.set(d,p),(s=this.inProgress)==null||s.call(this,this.inParts.size,this.inExpectedTotal));let g=0;for(let m=1;m<=this.inExpectedTotal;m+=1)if(!this.inParts.has(m)){g=m;break}if(g>0&&this.inStreamId>0&&d>g&&this.send(`miss,${this.inStreamId},${g}`),this.inParts.size>=this.inExpectedTotal){for(let m=1;m<=this.inExpectedTotal;m+=1){const _=this.inParts.get(m);_!==void 0&&this.onMessage(_)}this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear()}return}this.onMessage(l)}setInboundProgress(l){this.inProgress=l}async sendReliable(l,o){if(this.outPendingLines!==null||this.outWaitingAck)throw new Error("Reliable stream is already sending.");const s=l.length===0?[""]:l;this.outPendingLines=[...s],this.outWaitingAck=!0,this.outProgress=o??null,this.outStreamId=this.outNextStreamId,this.outNextStreamId+=1,this.outCache.clear();const d=new Promise((p,g)=>{this.outResolve=p,this.outReject=g});try{await this.send(`prep,${s.length},${this.outStreamId}`)}catch(p){throw this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null,p}await d}async flushOutbound(){var l,o,s,d;if(!this.outWaitingAck||this.outPendingLines===null){this.outWaitingAck=!1,this.outProgress=null,(l=this.outResolve)==null||l.call(this),this.outResolve=null,this.outReject=null;return}try{const p=this.outPendingLines.length;for(let g=0;g<p;g+=1){const m=this.outPendingLines[g],_=`${g+1}-${m}`;this.outCache.set(g+1,_),await this.send(_),(o=this.outProgress)==null||o.call(this,g+1,p,m)}(s=this.outResolve)==null||s.call(this)}catch(p){(d=this.outReject)==null||d.call(this,p)}finally{this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null}}parseNumbered(l){const o=l.indexOf("-");if(o<=0)return null;const s=l.slice(0,o);if(!/^\d+$/.test(s))return null;const d=parseInt(s,10);return d<1?null:{idx:d,payload:l.slice(o+1)}}}const oi=11,As=31,lg=2,ag=60,ii=4,si=60;function ig(a,l){return Math.max(14,Math.min(56,Math.min(a,l)*.05))}function Dh(a,l,o=oi,s=As){const d=ig(a,l),p=Math.max(1,a-2*d),g=Math.max(1,l-2*d);return{areaW:a,areaH:l,cols:o,rows:s,margin:d,stepX:p/Math.max(1,o-1),stepY:g/Math.max(1,s-1)}}function Oh(a,l){return l.margin+a/2*l.stepX}function Lh(a,l){const o=l.margin+a/2*l.stepY;return l.areaH-o}function Ts(a,l){return a.centerX2===null||a.centerY2===null||a.spanX===null||a.spanY===null?null:{cx:Oh(a.centerX2,l),cy:Lh(a.centerY2,l),width:a.spanX*l.stepX,height:a.spanY*l.stepY}}function sg(a){const l=[];for(let o=0;o<a.cols;o+=1)for(let s=0;s<a.rows;s+=1)l.push({x:a.margin+o*a.stepX,y:a.areaH-(a.margin+s*a.stepY)});return l}function Dd(a,l,o,s,d){const p=(_,b,k,x)=>{const T=b%2,A=x*2;let B=T,U=1/0;for(let X=T;X<=A;X+=2){const $=Math.abs(k(X)-_);$<U&&(U=$,B=X)}return Math.max(b,Math.min(A-b,B))},g=p(a,o,_=>Oh(_,d),d.cols-1),m=p(l,s,_=>Lh(_,d),d.rows-1);return{centerX2:g,centerY2:m}}const ga=6e3,og=15,Nm="",_c=[32,64,128,192],cg=ga*10,ug=3500,dg=8e3,fg=2,mg=ga,hg=ga*8;function Od(a){return new Promise(l=>setTimeout(l,a))}function ni(a){if(a!=null&&a.aborted)throw new DOMException("BLE file read cancelled","AbortError")}function pg(a){return a instanceof DOMException&&a.name==="AbortError"}function Ul(a){return a.replace(/[\r\n,]/g," ").trim()}function jm(a){return a.replace(/[\r\n,]/g,"").trim()}class gg{constructor(l={}){be(this,"transport",new ng);be(this,"stream");be(this,"events");be(this,"waiters",[]);be(this,"collectingLayout",!1);be(this,"layoutBuffer",[]);be(this,"layoutResolve",null);be(this,"collectingLines",!1);be(this,"lineBuffer",[]);be(this,"lineResolve",null);be(this,"lineReject",null);be(this,"lineCollectId",0);be(this,"controlPumpActive",!1);be(this,"pendingButtons",[]);be(this,"pendingSliders",new Map);be(this,"pendingToggles",new Map);be(this,"pendingJoysticks",new Map);be(this,"pendingDpads",[]);be(this,"expectingDisconnect",!1);be(this,"disconnectMessage",null);be(this,"busy",!1);be(this,"fsCapabilities",null);this.events=l,this.stream=new rg(o=>this.transport.writeLine(o),o=>this.onDeviceMessage(o)),this.transport.onLine=o=>this.stream.handleLine(o),this.transport.onDisconnect=()=>this.handleDisconnect()}get device(){return this.transport.device}get deviceName(){var l;return Ah((l=this.transport.device)==null?void 0:l.name)}get connected(){return this.transport.connected}setBusy(l){if(this.busy=l,l){this.pendingButtons=[],this.pendingSliders.clear(),this.pendingToggles.clear(),this.pendingJoysticks.clear(),this.pendingDpads=[];return}this.pumpControls()}log(l,o){var s,d;(d=(s=this.events).onLog)==null||d.call(s,l,o)}progress(l,o){var s,d;(d=(s=this.events).onProgress)==null||d.call(s,l,o)}onDeviceMessage(l){var s,d;if(l==="disconnect"||l==="disconnect_private"){const p=l==="disconnect_private"?"Du blev afbrudt, fordi enheden er privat, og andre brugere ikke må forbinde.":"Enheden afbrød forbindelsen.";this.disconnectMessage=p,this.log("warning",p),this.expectingDisconnect=!0,this.transport.disconnect();return}if(this.collectingLines){if(l==="__END__"){const p=this.lineBuffer;this.lineBuffer=[],this.collectingLines=!1,(s=this.lineResolve)==null||s.call(this,p),this.lineResolve=null;return}this.lineBuffer.push(l);return}if(this.collectingLayout){if(l==="__END__"){const p=this.layoutBuffer;this.layoutBuffer=[],this.collectingLayout=!1,(d=this.layoutResolve)==null||d.call(this,p),this.layoutResolve=null;return}!l.startsWith("ACK")&&!l.startsWith("ERR")&&!l.startsWith("#VERSION")?this.layoutBuffer.push(l):l.startsWith("#VERSION")&&this.layoutBuffer.push(l);return}l.startsWith("ERR")?this.log("error",l):l.startsWith("radar,")?this.handleRadarLine(l):l.startsWith("text,")?this.handleTextLine(l):l.startsWith("toggle_state,")?this.handleToggleStateLine(l):l.startsWith("slider_state,")?this.handleSliderStateLine(l):l.startsWith("plot_clear,")?this.handlePlotClearLine(l):l.startsWith("plot,")?this.handlePlotLine(l):l.startsWith("ACK")||l==="LAYOUT_SAVED"||l.startsWith("READY")?this.log("success",l):this.log("info",`rx: ${l}`);const o=this.waiters.findIndex(p=>p.match(l));if(o>=0){const p=this.waiters[o];this.waiters.splice(o,1),clearTimeout(p.timer),p.resolve(l)}}waitFor(l,o,s){return new Promise((d,p)=>{const g=setTimeout(()=>{const m=this.waiters.findIndex(_=>_.timer===g);m>=0&&this.waiters.splice(m,1),p(new Error(`Timeout: ${s}`))},o);this.waiters.push({match:l,resolve:d,reject:p,timer:g})})}async collectLines(l,o,s,d,p){ni(d);const g=this.lineCollectId+1;this.lineCollectId=g,this.collectingLines=!0,this.lineBuffer=[],this.stream.setInboundProgress(p??null);const m=new Promise((_,b)=>{let k=!1;const x=()=>this.lineCollectId===g,T=()=>{k=!0,x()&&(this.lineReject=null,this.stream.setInboundProgress(null)),d==null||d.removeEventListener("abort",B)},A=$=>{k||(clearTimeout(U),x()&&(this.collectingLines=!1,this.lineBuffer=[],this.lineResolve=null),T(),b($))},B=()=>{A(new DOMException("BLE file read cancelled","AbortError"))},U=setTimeout(()=>{x()&&A(new Error(`Timeout: ${s}`))},o);this.lineResolve=_,this.lineReject=A;const X=this.lineResolve;this.lineResolve=$=>{x()&&(clearTimeout(U),T(),X==null||X($))},d==null||d.addEventListener("abort",B,{once:!0})});return await this.transport.writeLine(l),m}async exchange(l,o,s,d=3){let p;for(let g=1;g<=d;g+=1)try{return await this.transport.writeLine(l),await this.waitFor(o,ga,s)}catch(m){p=m,this.log("warning",`${s}: forsøg ${g}/${d} mislykkedes`)}throw p instanceof Error?p:new Error(`Failed: ${s}`)}async connect(l){this.expectingDisconnect=!1,this.stream.reset(),this.progress(5,"Forbinder til Bluetooth..."),await this.transport.connect(l)}async runHandshake(l){var H,ue,pe,ae;await Od(350),this.progress(18,"Klargør forbindelse..."),this.progress(26,"Sender HELLO..."),await this.exchange("HELLO",_e=>_e==="ACK:HELLO","HELLO"),this.progress(34,"Forbindelse bekræftet"),this.progress(44,"Spørger om ejerskab...");const o=await this.exchange("who_are_you",_e=>_e==="unowned"||_e.startsWith("unowned,")||_e.startsWith("owned,"),"who_are_you");if(this.progress(56,"Ejerskab modtaget"),o==="unowned"||o.startsWith("unowned,"))return{kind:"unowned",deviceName:((H=o.split(",")[1])==null?void 0:H.trim())||void 0};const s=o.split(","),d=s[1]??"",p=((ue=s[2])==null?void 0:ue.trim())??"",g=s[3]!==void 0?parseInt(s[3],10)===1:!0,m=s[4]!==void 0?parseInt(s[4],10)===1:!1,_=s.length>=7,b=_?parseInt(s[5]??"0",10)===1:m,k=((pe=s[_?6:5])==null?void 0:pe.trim())||void 0,x=((ae=s[_?7:6])==null?void 0:ae.trim())||void 0;await this.exchange("ACK:ownership",_e=>_e==="READY:permission","ACK:ownership",1),this.progress(66,"Anmoder om adgang...");const T=await this.exchange(`request_permission,${l.userID},${Ul(l.username)}`,_e=>_e.startsWith("perm,"),"request_permission");this.progress(76,"Adgang vurderet");const A=T.split(",").filter(_e=>/^\d+$/.test(_e)),B=A.length>=1?parseInt(A[0]??"0",10):0,U=A.length>=2?parseInt(A[1]??"0",10):0,X=A.length>=3?parseInt(A[2]??"0",10):U;if(B===0)return this.expectingDisconnect=!0,this.disconnectMessage="Du kan ikke forbinde, fordi enheden er privat, og andre brugere ikke må forbinde.",{kind:"denied",ownerName:k,canOthersConnect:g};const $=l.userID===d,O=U===1||$,le=X===1||$;return await this.transport.writeLine("ACK:permission"),{kind:"owned",ownerID:d,ownerName:k,deviceName:x,icon:p,canEdit:O,canEditCode:le,isOwnedByMe:$,canOthersConnect:g,canOthersEdit:m,canOthersEditCode:b}}async create(l,o,s,d,p,g,m){const _=s?1:0,b=s&&d?1:0,k=s&&p?1:0;await this.exchange(`create,${l.userID},${Ul(l.username)},${jm(o)},${_},${b},${k},${g},${m}`,x=>x==="ACK:create","create")}async updateDeviceSettings(l,o,s,d,p,g,m){const _=o?1:0,b=o&&s?1:0,k=o&&d?1:0;await this.exchange(`settings_update,${jm(l)},${_},${b},${k},${p},${g},${Ul(m??"")}`,x=>x==="ACK:settings_update","settings_update",3)}async requestLayout(){this.progress(84,"Henter kontrolpanel..."),this.collectingLayout=!0,this.layoutBuffer=[];const l=new Promise((s,d)=>{this.layoutResolve=s;const p=setTimeout(()=>{this.collectingLayout&&(this.collectingLayout=!1,this.layoutResolve=null,d(new Error("Timeout: layout")))},ga*2),g=this.layoutResolve;this.layoutResolve=m=>{clearTimeout(p),g==null||g(m)}});await this.transport.writeLine("request"),this.progress(92,"Modtager kontrolpanel...");const o=await l;return this.progress(100,"Klar"),o}async saveLayout(l){await this.exchange("update",d=>d==="ACK:update","update",3).catch(()=>{this.log("warning","ACK:update udeblev (fortsætter).")});const o=l.map(d=>{const p=m=>m===null?"n":String(m),g=`update,${d.type},${d.name},${p(d.centerX2)},${p(d.centerY2)},${p(d.spanX)},${p(d.spanY)},${d.rotation}`;return d.type==="slider"?`${g},${d.sliderMin??0},${d.sliderMax??100},${d.sliderRecenter??"none"}`:d.type==="toggle"?`${g},${d.toggleInitial?1:0}`:d.type==="radar"?[g,d.radarMinAngle??0,d.radarMaxAngle??180,d.radarMaxDistance??200,d.radarFadeMs??1200].join(","):d.type==="joystick"?[g,d.joystickXMin??-100,d.joystickXMax??100,d.joystickYMin??-100,d.joystickYMax??100,d.joystickXRecenter??"middle",d.joystickYRecenter??"middle"].join(","):d.type==="plot"?[g,d.plotMin??0,d.plotMax??100,d.plotHistory??30,d.plotStyle??"line",d.plotXAxis??"labels",d.plotYAxis??"range",d.plotLabelMaxPercent??24].join(","):g});o.push("__END__");const s=this.waitFor(d=>d==="LAYOUT_SAVED",ga*2,"LAYOUT_SAVED");await this.stream.sendReliable(o),await s}async listFiles(l="/"){return(await this.collectLines(`fs_list,${Ul(l)}`,ga*3,"fs_list")).filter(s=>s.startsWith("fs_entry,")).map(s=>{const[,d,p,g]=s.split(","),m=d==="file"||d==="dir"?d:"unknown",_=parseInt(g??"",10),b=p||"/";return{name:b.split("/").filter(Boolean).pop()??b,path:b,type:m,...Number.isFinite(_)&&_>=0?{size:_}:{}}})}handleRadarLine(l){var g,m,_;const o=l.split(",");if(o.length<4)return;const s=(g=o[1])==null?void 0:g.trim(),d=parseFloat(o[2]??""),p=parseFloat(o[3]??"");!s||!Number.isFinite(d)||!Number.isFinite(p)||((_=(m=this.events).onRadar)==null||_.call(m,s,d,p),this.log("info",`rx: ${l}`))}handleTextLine(l){var _,b;const o=l.indexOf(","),s=o>=0?l.indexOf(",",o+1):-1;if(o<0||s<0)return;const d=l.slice(o+1,s),p=l.slice(s+1),g=d==null?void 0:d.trim();if(!g)return;const m=p.split(Nm).join(`
`);(b=(_=this.events).onText)==null||b.call(_,g,m),this.log("info",`rx: ${l}`)}handleToggleStateLine(l){var p,g,m;const o=l.split(",");if(o.length<3)return;const s=(p=o[1])==null?void 0:p.trim(),d=parseInt(o[2]??"",10);!s||!Number.isFinite(d)||((m=(g=this.events).onToggleState)==null||m.call(g,s,d===1),this.log("info",`rx: ${l}`))}handleSliderStateLine(l){var p,g,m;const o=l.split(",");if(o.length<3)return;const s=(p=o[1])==null?void 0:p.trim(),d=parseFloat(o[2]??"");!s||!Number.isFinite(d)||((m=(g=this.events).onSliderState)==null||m.call(g,s,d),this.log("info",`rx: ${l}`))}handlePlotLine(l){var g,m,_;const o=l.split(",");if(o.length<3)return;const s=(g=o[1])==null?void 0:g.trim(),d=parseFloat(o[2]??"");if(!s||!Number.isFinite(d))return;const p=o.slice(3).join(",").split(Nm).join(`
`).trim()||void 0;(_=(m=this.events).onPlot)==null||_.call(m,s,d,p),this.log("info",`rx: ${l}`)}handlePlotClearLine(l){var d,p,g;const o=l.split(",");if(o.length<2)return;const s=(d=o[1])==null?void 0:d.trim();s&&((g=(p=this.events).onPlotClear)==null||g.call(p,s),this.log("info",`rx: ${l}`))}async readText(l,o,s){o==null||o(4,"Validerer Picoens Bluetooth-filsystem...");const d=await this.getFilesystemCapabilities(s);return d.pageRead?this.readTextPaged(l,o,s):this.readTextStream(l,d,o,s)}async getFilesystemCapabilities(l){if(this.fsCapabilities)return this.fsCapabilities;const o=await this.collectLines("fs_capabilities",mg,"fs_capabilities",l),s=o.find(k=>k.startsWith("ERR"));if(s)throw new Error(s);const d=o.find(k=>k.startsWith("fs_capabilities,"));if(!d)throw new Error("Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.");const p=d.split(","),g=new Map;for(let k=1;k<p.length-1;k+=2)g.set(p[k],p[k+1]);const m=parseInt(g.get("max_page")??"",10),_=parseInt(g.get("stream_chunk")??"",10),b={version:g.get("version")||void 0,pageRead:g.get("page_read")==="1",maxPageSize:Number.isFinite(m)&&m>0?m:32,streamRead:g.get("stream_read")==="1",streamChunkSize:Number.isFinite(_)&&_>0?_:128};if(!b.pageRead&&!b.streamRead)throw new Error("Picoens Bluetooth-runtime meldte, at file-read ikke er understøttet.");return this.fsCapabilities=b,b}async readTextPaged(l,o,s){const d=await this.getFilesystemCapabilities(s);let p=0,g=_g(d.maxPageSize),m=0,_=null,b="";const k=`Indlæser ${Ld(l)}...`;ni(s),o==null||o(5,k);for(let x=0;x<512;x+=1){ni(s),m===0&&(o==null||o(7,k));const A=await this.readPageWithRetry(l,m,p,g,s),B=A.lines;p=A.nextPageSizeIndex,g=A.maxPageSizeIndex,ni(s);const U=B.find(_e=>_e.startsWith("ERR"));if(U)throw new Error(U);const X=B.find(_e=>_e.startsWith("fs_page,"));if(!X)throw new Error("ERR: fs_read_page missing data");const[,$,O,le,H=""]=X.split(",",5);if($!==l)throw new Error("ERR: fs_read_page stale data");const ue=parseInt(O??"",10),pe=parseInt(le??"",10);if(!Number.isFinite(ue)||ue!==m||!Number.isFinite(pe))throw new Error("ERR: fs_read_page invalid data");_=pe,b+=H,m+=Math.floor(H.length/2);const ae=_>0?8+Math.min(87,Math.round(m/_*87)):95;if(o==null||o(ae,k),m>=_||H.length===0)return o==null||o(100,"Fil indlæst fra Pico"),new TextDecoder().decode(Am(b))}throw new Error("ERR: fs_read_page too many pages")}async readPageWithRetry(l,o,s,d,p){let g,m=Math.min(s,d);for(;m>=0;){const _=_c[m],b=m===0?fg:1,k=m===0?dg:ug;for(let x=1;x<=b;x+=1){ni(p);try{return{lines:await this.collectLines(`fs_read_page,${Ul(l)},${o},${_}`,k,`fs_read_page ${o}`,p),nextPageSizeIndex:Math.min(m+1,d),maxPageSizeIndex:d}}catch(T){if(p!=null&&p.aborted||pg(T))throw T;if(g=T,x<b||m>0){const B=m>0&&x>=b?_c[m-1]:_;this.log("warning",`fs_read_page ${o} (${_} bytes) fejlede; prøver ${B} bytes`),await Od(80+x*80)}}}if(m===0)break;d=Math.max(0,m-1),m=d}throw g instanceof Error?g:new Error(`Timeout: fs_read_page ${o}`)}async readTextStream(l,o,s,d){const p=`Indlæser ${Ld(l)}...`,g=Math.max(16,Math.min(192,o.streamChunkSize||128));s==null||s(5,p);const m=await this.collectLines(`fs_read_stream,${Ul(l)},${g}`,hg,`fs_read_stream ${l}`,d,(ae,_e)=>{const ge=8+Math.round(Math.min(ae,_e)/Math.max(1,_e)*87);s==null||s(Math.min(95,ge),p)});ni(d);const _=m.find(ae=>ae.startsWith("ERR"));if(_)throw new Error(_);const b=m.find(ae=>ae.startsWith("fs_stream_begin,")),k=m.find(ae=>ae.startsWith("fs_stream_end,"));if(!b||!k)throw new Error("ERR: fs_read_stream missing metadata");const[,x,T]=b.split(",",4),[,A,B,U]=k.split(",",4),X=parseInt(T??"",10),$=parseInt(B??"",10),O=parseInt(U??"",10);if(x!==l||A!==l||!Number.isFinite(X)||X!==$||!Number.isFinite(O))throw new Error("ERR: fs_read_stream invalid metadata");let le=0,H="";for(const ae of m){if(!ae.startsWith("fs_stream_chunk,"))continue;const[,_e,ge=""]=ae.split(",",3),Ce=parseInt(_e??"",10);if(!Number.isFinite(Ce)||Ce!==le||ge.length%2!==0)throw new Error("ERR: fs_read_stream invalid chunk");H+=ge,le+=Math.floor(ge.length/2)}if(le!==X)throw new Error("ERR: fs_read_stream size mismatch");const ue=Am(H);if(Rm(ue)!==O)throw new Error("ERR: fs_read_stream checksum mismatch");return s==null||s(100,"Fil indlæst fra Pico"),new TextDecoder().decode(ue)}async writeText(l,o,s){s==null||s(5,"Klargør BLE-overførsel..."),await this.exchange(`fs_write_begin,${Ul(l)}`,k=>k==="ACK:fs_write_begin","fs_write_begin",2),s==null||s(18,"Pico er klar til filen...");const d=new TextEncoder().encode(o),p=[...d].map(k=>k.toString(16).padStart(2,"0")).join(""),g=[];for(let k=0;k<p.length;k+=160)g.push(`fs_write_chunk,${p.slice(k,k+160)}`);g.push("fs_write_end");const m=Rm(d),_=this.waitFor(k=>k==="ACK:fs_write_done"||k.startsWith("ACK:fs_write_done,")||k.startsWith("ERR"),cg,"fs_write_done");s==null||s(d.length===0?85:18,d.length===0?"Sender tom fil via Bluetooth...":`Sender 0/${d.length} bytes via Bluetooth...`),await this.stream.sendReliable(g,(k,x,T)=>{if(!T.startsWith("fs_write_chunk,"))return;const A=Math.min(d.length,k*80),B=18+Math.round(k/Math.max(1,x-1)*67);s==null||s(Math.min(85,B),`Sender ${A}/${d.length} bytes via Bluetooth...`)}),s==null||s(90,"Verificerer BLE-fil...");const b=await _;if(b.startsWith("ERR"))throw new Error(b);if(b.startsWith("ACK:fs_write_done,")){const[,k,x]=b.split(",",3),T=parseInt(k??"",10),A=parseInt(x??"",10);if(T!==d.length||A!==m)throw new Error(`ERR: BLE-verificering fejlede for ${Ld(l)}.`)}s==null||s(100,"Gemt på Pico")}async deleteFile(l){const o=await this.exchange(`fs_delete,${Ul(l)}`,s=>s==="ACK:fs_delete"||s.startsWith("ERR"),"fs_delete",2);if(o.startsWith("ERR"))throw new Error(o)}async restart(){await this.exchange("restart",l=>l==="ACK:restart"||l.startsWith("ERR"),"restart",1).catch(()=>{}),this.expectingDisconnect=!0}enqueueButton(l,o){this.busy||(this.pendingButtons.push(`button,${l}:${o?"down":"up"}`),this.pumpControls())}enqueueSlider(l,o){this.busy||(this.pendingSliders.set(l,`slider,${l}:${o}`),this.pumpControls())}enqueueToggle(l,o){this.busy||(this.pendingToggles.set(l,`toggle,${l}:${o?1:0}`),this.pumpControls())}enqueueJoystick(l,o,s){this.busy||(this.pendingJoysticks.set(l,`joystick,${l}:${Math.round(o)},${Math.round(s)}`),this.pumpControls())}enqueueDpad(l,o,s){this.busy||(this.pendingDpads.push(`dpad,${l}:${o},${s?"down":"up"}`),this.pumpControls())}pumpControls(){this.controlPumpActive||this.busy||!this.transport.connected||(this.controlPumpActive=!0,this.drainControls())}async drainControls(){try{for(;!this.busy&&this.transport.connected;){const l=this.nextControlLine();if(!l)break;await this.transport.writeLine(l),this.log("info",`tx: ${l}`),await Od(og)}}catch(l){this.log("error",l instanceof Error?l.message:"Kunne ikke sende kommando."),this.handleDisconnect()}finally{this.controlPumpActive=!1,!this.busy&&this.transport.connected&&this.hasPendingControls()&&this.pumpControls()}}nextControlLine(){const l=this.pendingButtons.shift();if(l)return l;const o=this.pendingDpads.shift();if(o)return o;const s=this.pendingSliders.entries().next();if(!s.done){const[g,m]=s.value;return this.pendingSliders.delete(g),m}const d=this.pendingToggles.entries().next();if(!d.done){const[g,m]=d.value;return this.pendingToggles.delete(g),m}const p=this.pendingJoysticks.entries().next();if(!p.done){const[g,m]=p.value;return this.pendingJoysticks.delete(g),m}return null}hasPendingControls(){return this.pendingButtons.length>0||this.pendingDpads.length>0||this.pendingSliders.size>0||this.pendingToggles.size>0||this.pendingJoysticks.size>0}async disconnect(){if(!this.transport.connected){this.handleDisconnect();return}this.expectingDisconnect=!0;try{await this.exchange("disconnect",l=>l==="ACK:disconnect","disconnect",1)}catch{}this.transport.disconnect()}handleDisconnect(){var o,s,d;for(const p of this.waiters)clearTimeout(p.timer),p.reject(new Error("Forbindelsen blev afbrudt."));this.waiters=[],this.collectingLayout=!1,this.layoutResolve=null,(o=this.lineReject)==null||o.call(this,new Error("Forbindelsen blev afbrudt.")),this.collectingLines=!1,this.lineResolve=null,this.lineReject=null,this.fsCapabilities=null,this.stream.reset();const l=this.disconnectMessage??void 0;this.disconnectMessage=null,(d=(s=this.events).onDisconnect)==null||d.call(s,l)}}function _g(a){let l=0;for(let o=0;o<_c.length;o+=1)_c[o]<=a&&(l=o);return l}function Ld(a){return a.replace(/\\/g,"/").replace(/^\/+/,"")||a}function Rm(a){let l=0;for(const o of a)l=l+o>>>0;return l}function Am(a){const l=new Uint8Array(Math.floor(a.length/2));for(let o=0;o<l.length;o+=1)l[o]=parseInt(a.slice(o*2,o*2+2),16);return l}function Cm(a){const l=(o,s)=>Number.isFinite(o)?Math.max(lg,Math.min(ag,o)):s;for(const o of a){const s=o.trim();if(s.startsWith("#GRID,")){const d=s.split(","),p=l(parseInt(d[1],10),oi),g=l(parseInt(d[2],10),As);return{cols:p,rows:g}}}return{cols:oi,rows:As}}function Dm(a){const l=new Map;for(const o of a){const s=o.trim();if(!s||s.startsWith("#VERSION")||s==="__END__")continue;const d=s.split(",");if(d.length<7)continue;const[p,g,m,_,b,k,x,T,A,B,U,X,$,O]=d;if(p!=="button"&&p!=="slider"&&p!=="toggle"&&p!=="radar"&&p!=="text"&&p!=="joystick"&&p!=="dpad"&&p!=="plot"||l.has(g))continue;const le=ie=>{if(ie==="n")return null;const se=parseInt(ie,10);return Number.isNaN(se)?null:se},H=parseInt(x,10)||0,ue=T!==void 0?parseInt(T,10):0,pe=A!==void 0?parseInt(A,10):100,ae=["none","bottom","middle","top"].includes(B??"")?B:"none",_e=T!==void 0?parseInt(T,10)===1:!1,ge=T!==void 0?parseFloat(T):0,Ce=A!==void 0?parseFloat(A):180,te=B!==void 0?parseFloat(B):200,Ue=U!==void 0?parseInt(U,10):1200,we=(ie,se)=>["none","bottom","middle","top"].includes(ie??"")?ie:se,Xe=T!==void 0?parseInt(T,10):-100,F=A!==void 0?parseInt(A,10):100,z=B!==void 0?parseInt(B,10):-100,Z=U!==void 0?parseInt(U,10):100,de=T!==void 0?parseFloat(T):0,Ne=A!==void 0?parseFloat(A):100,me=B!==void 0?parseInt(B,10):30,E=U==="bar"?"bar":U==="dot"?"dot":"line",V=(ie,se)=>["range","labels","none"].includes(ie??"")?ie:se,ne=O!==void 0?parseFloat(O):24;l.set(g,{type:p,name:g,centerX2:le(m),centerY2:le(_),spanX:le(b),spanY:le(k),rotation:[0,90,180,270].includes(H)?H:0,...p==="slider"?{sliderMin:Number.isFinite(ue)?ue:0,sliderMax:Number.isFinite(pe)?pe:100,sliderRecenter:ae}:{},...p==="toggle"?{toggleInitial:_e}:{},...p==="radar"?{radarMinAngle:Number.isFinite(ge)?ge:0,radarMaxAngle:Number.isFinite(Ce)?Ce:180,radarMaxDistance:Number.isFinite(te)&&te>0?te:200,radarFadeMs:Number.isFinite(Ue)&&Ue>0?Ue:1200}:{},...p==="joystick"?{joystickXMin:Number.isFinite(Xe)?Xe:-100,joystickXMax:Number.isFinite(F)&&F!==Xe?F:100,joystickYMin:Number.isFinite(z)?z:-100,joystickYMax:Number.isFinite(Z)&&Z!==z?Z:100,joystickXRecenter:we(X,"middle"),joystickYRecenter:we($,"middle")}:{},...p==="plot"?{plotMin:Number.isFinite(de)?de:0,plotMax:Number.isFinite(Ne)&&Ne!==de?Ne:de+100,plotHistory:Number.isFinite(me)&&me>1?me:30,plotStyle:E,plotXAxis:V(X,"labels"),plotYAxis:V($,"range"),plotLabelMaxPercent:Number.isFinite(ne)?Math.max(8,Math.min(45,ne)):24}:{}})}return[...l.values()]}const vg=[{slug:"grommet-icons:raspberry",label:"Raspberry Pi",keywords:["raspberry pi","raspberry"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M8.087 0a.67.67 0 0 0-.399.165c-.363-.14-.717-.19-1.032.096c-.486-.063-.643.067-.762.22c-.107-.003-.8-.11-1.117.364c-.798-.095-1.049.47-.763.994c-.163.253-.332.5.048.981c-.134.268-.05.558.267.91c-.084.376.081.641.376.848c-.055.515.472.815.629.922c.06.3.187.584.79.74c.099.447.46.525.811.619c-1.159.673-2.153 1.558-2.146 3.733l-.17.303c-1.328.808-2.524 3.406-.654 5.518c.122.66.326 1.134.508 1.66c.273 2.117 2.054 3.11 2.523 3.227c.688.524 1.422 1.02 2.413 1.369c.935.964 1.946 1.331 3.005 1.331s2.07-.367 3.005-1.331c.992-.348 1.725-.845 2.413-1.37c.47-.117 2.25-1.11 2.523-3.226c.182-.526.386-1 .508-1.66c1.87-2.112.674-4.71-.655-5.518l-.169-.303c.007-2.175-.987-3.06-2.146-3.733c.35-.094.712-.172.812-.619c.602-.156.729-.44.79-.74c.157-.107.683-.407.628-.922c.295-.207.46-.472.376-.848c.318-.352.402-.642.267-.91c.38-.48.212-.728.049-.98c.285-.526.034-1.09-.763-.995c-.318-.474-1.01-.367-1.117-.365c-.12-.152-.277-.282-.763-.22c-.315-.284-.669-.235-1.032-.095A.67.67 0 0 0 16.742 0c-.232-.007-.43.134-.643.202c-.523-.17-.641.061-.898.156c-.569-.12-.742.143-1.015.42l-.32-.007c-.858.506-1.282 1.535-1.452 1.535S11.82 1.277 10.961.771l-.319.006C10.37.501 10.196.238 9.627.358C9.37.263 9.252.031 8.73.202C8.516.134 8.318-.007 8.087 0m.03.609c.436.161.663.37.9.575c.08-.108.202-.188.052-.45c.31.18.544.39.717.625c.191-.122.112-.287.113-.441c.322.262.528.54.778.812c.05-.037.093-.162.132-.358c.768.744 1.852 2.62.279 3.365C9.749 3.633 8.15 2.83 6.38 2.228c2.277 1.174 3.602 2.123 4.327 2.932c-.371 1.49-2.31 1.56-3.019 1.518c.145-.068.266-.15.31-.275c-.179-.127-.81-.013-1.25-.26c.17-.036.249-.069.328-.194c-.416-.132-.864-.248-1.128-.468c.143.002.275.033.46-.095c-.372-.201-.77-.36-1.078-.668c.193-.004.4-.002.46-.073a4.2 4.2 0 0 1-.867-.704c.27.033.382.006.448-.04c-.258-.265-.583-.487-.739-.812c.2.069.383.093.515-.008c-.088-.198-.464-.314-.68-.776c.211.02.436.046.48 0c-.097-.398-.264-.622-.429-.854c.451-.007 1.134.001 1.103-.037l-.279-.285c.44-.118.892.02 1.219.122c.147-.115-.004-.263-.183-.413q.56.076 1.019.255C7.56.945 7.289.799 7.159.65c.578.11.825.263 1.068.417c.177-.169.01-.312-.11-.46m8.594 0c-.12.147-.287.29-.11.46c.244-.155.49-.308 1.068-.418c-.13.148-.401.294-.238.442a4.4 4.4 0 0 1 1.02-.255c-.18.15-.33.298-.184.413c.328-.102.779-.24 1.22-.122l-.28.285c-.03.038.652.03 1.103.037c-.165.232-.331.456-.43.854c.045.046.27.02.48 0c-.215.462-.591.578-.679.776c.132.101.315.077.515.008c-.155.325-.48.547-.738.811c.065.047.178.074.447.041a4.2 4.2 0 0 1-.866.704c.06.07.267.069.46.073c-.31.307-.706.467-1.079.668c.186.128.318.097.46.095c-.264.22-.711.336-1.127.468c.079.125.158.158.327.193c-.44.248-1.071.134-1.249.26c.043.125.164.208.31.276c-.71.041-2.648-.029-3.02-1.518c.726-.81 2.05-1.758 4.328-2.932c-1.772.602-3.37 1.405-4.708 2.509c-1.574-.744-.49-2.62.278-3.365c.04.196.082.32.133.358c.25-.272.455-.55.777-.812c0 .154-.078.32.114.441c.172-.235.406-.446.716-.624c-.15.26-.027.341.053.45c.236-.207.463-.415.899-.576M12.414 6.77c1.359 0 2.492.923 2.494 1.466c.004.68-.994 1.38-2.476 1.398h-.036c-1.482-.018-2.48-.717-2.476-1.398c.003-.543 1.136-1.466 2.494-1.466m-3.813.447h.084q.331 0 .677.059c.777.13-3.72 4.058-3.79 3.182c-.062-2.003 1.278-3.213 3.03-3.241m7.542 0h.084c1.751.028 3.091 1.238 3.03 3.24c-.07.877-4.567-3.05-3.791-3.181q.346-.059.677-.06m-6.825 2.5c.259-.002.521.036.777.122c1.363.458 2.052 2.053 1.54 3.56c-.513 1.509-2.034 2.36-3.398 1.903c-1.363-.458-2.052-2.053-1.54-3.56c.417-1.226 1.498-2.017 2.62-2.025m6.193 0c1.122.008 2.204.8 2.62 2.024c.513 1.508-.176 3.103-1.54 3.56c-1.364.459-2.885-.393-3.398-1.901c-.512-1.508.177-3.103 1.54-3.56c.256-.087.519-.125.778-.123M5.33 11.4c1.062.015.273 5.052-.69 4.624c-1.092-.879-1.444-3.451.582-4.608a.4.4 0 0 1 .082-.014zm14.168 0l.027.002a.4.4 0 0 1 .081.014c2.026 1.157 1.675 3.73.582 4.608c-.963.428-1.752-4.609-.69-4.624m-7.084 3.482a2.8 2.8 0 0 1 1.874.7c.52.47.822 1.14.818 1.811c0 .66-.295 1.313-.8 1.778a2.88 2.88 0 0 1-1.892.739a2.88 2.88 0 0 1-1.892-.739a2.45 2.45 0 0 1-.8-1.778a2.46 2.46 0 0 1 .818-1.81a2.8 2.8 0 0 1 1.874-.7M6.148 16.2c.703-.014 1.568.541 2.268 1.353c.78.94 1.136 2.593.485 3.08c-.617.372-2.115.218-3.178-1.31c-.718-1.282-.624-2.587-.12-2.97q.248-.149.545-.153m12.465 0h.067c.197.004.38.052.546.153c.503.383.597 1.688-.12 2.97c-1.064 1.528-2.562 1.682-3.178 1.31c-.652-.487-.297-2.14.484-3.08c.678-.787 1.51-1.333 2.201-1.353m-6.199 4.504c1.09-.012 2.71.447 2.69 1.032c.017.405-1.312 1.574-2.667 1.516h-.045c-1.356.058-2.685-1.11-2.667-1.516c-.02-.585 1.6-1.044 2.69-1.032"/></svg>'},{slug:"material-symbols:robot",label:"Robot",keywords:["robot"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.413 11.413Q11 10.825 11 10t-.587-1.412T9 8t-1.412.588T7 10t.588 1.413T9 12t1.413-.587m6 0Q17 10.825 17 10t-.587-1.412T15 8t-1.412.588T13 10t.588 1.413T15 12t1.413-.587M9 21v-4h2v4zm4 0v-4h2v4zm-8 0q-.825 0-1.412-.587T3 19V9q0-2.5 1.75-4.25T9 3h6q2.5 0 4.25 1.75T21 9v10q0 .825-.587 1.413T19 21h-2v-4q0-.825-.587-1.412T15 15H9q-.825 0-1.412.588T7 17v4z"/></svg>'},{slug:"material-symbols:robot-outline",label:"Robot Outline",keywords:["robot"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V9q0-2.5 1.75-4.25T9 3h6q2.5 0 4.25 1.75T21 9v10q0 .825-.587 1.413T19 21zm0-2h14V9q0-1.65-1.175-2.825T15 5H9Q7.35 5 6.175 6.175T5 9zm2.588-7.587Q7 10.825 7 10t.588-1.412T9 8t1.413.588T11 10t-.587 1.413T9 12t-1.412-.587m6 0Q13 10.825 13 10t.588-1.412T15 8t1.413.588T17 10t-.587 1.413T15 12t-1.412-.587M7 19v-2q0-.825.588-1.412T9 15h6q.825 0 1.413.588T17 17v2h-2v-2h-2v2h-2v-2H9v2zm-2 0h14z"/></svg>'},{slug:"mdi:robot",label:"Robot",keywords:["robot"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5A2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"/></svg>'},{slug:"mdi:raspberry-pi",label:"Raspberry Pi",keywords:["raspberry pi"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20 8h2v2h-2zM4 5h16a2 2 0 0 1 2 2h-3v2H5v4h3v3h11v1h3a2 2 0 0 1-2 2h-4v1h-2v-1h-3v1H7v-1H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m15 10H9v-5h10v1h3v2h-3zm-6-3v2h2v-2zM5 6v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm5 8h2v2h-2z"/></svg>'},{slug:"mdi:chip",label:"Chip",keywords:["chip"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6 4h12v1h3v2h-3v2h3v2h-3v2h3v2h-3v2h3v2h-3v1H6v-1H3v-2h3v-2H3v-2h3v-2H3V9h3V7H3V5h3zm5 11v3h1v-3zm2 0v3h1v-3zm2 0v3h1v-3z"/></svg>'},{slug:"mingcute:chip-fill",label:"Chip Fill",keywords:["chip"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M15 2a1 1 0 0 1 1 1v1h1a3 3 0 0 1 3 3v1h1a1 1 0 1 1 0 2h-1v4h1a1 1 0 1 1 0 2h-1v1a3 3 0 0 1-3 3h-1v1a1 1 0 1 1-2 0v-1h-4v1a1 1 0 1 1-2 0v-1H7a3 3 0 0 1-3-3v-1H3a1 1 0 1 1 0-2h1v-4H3a1 1 0 0 1 0-2h1V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 2 0v1h4V3a1 1 0 0 1 1-1m-1 6h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2m0 2v4h-4v-4z"/></g></svg>'},{slug:"mingcute:chip-line",label:"Chip Line",keywords:["chip"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M15 2a1 1 0 0 1 1 1v1h1a3 3 0 0 1 3 3v1h1a1 1 0 1 1 0 2h-1v4h1a1 1 0 1 1 0 2h-1v1a3 3 0 0 1-3 3h-1v1a1 1 0 1 1-2 0v-1h-4v1a1 1 0 1 1-2 0v-1H7a3 3 0 0 1-3-3v-1H3a1 1 0 1 1 0-2h1v-4H3a1 1 0 0 1 0-2h1V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 2 0v1h4V3a1 1 0 0 1 1-1m2 4H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1m-3 2a2 2 0 0 1 1.995 1.85L16 10v4a2 2 0 0 1-1.85 1.995L14 16h-4a2 2 0 0 1-1.995-1.85L8 14v-4a2 2 0 0 1 1.85-1.995L10 8zm0 2h-4v4h4z"/></g></svg>'},{slug:"solar:cpu-bold",label:"Cpu Bold",keywords:["cpu"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M9.181 10.181c.053-.053.148-.119.45-.16c.323-.043.761-.044 1.439-.044h1.86c.678 0 1.116.001 1.438.045c.303.04.398.106.45.16c.054.052.12.147.16.45c.044.322.045.76.045 1.438v1.86c0 .678-.001 1.116-.045 1.438c-.04.303-.106.398-.16.45c-.052.054-.147.12-.45.16c-.322.044-.76.045-1.438.045h-1.86c-.678 0-1.116-.001-1.438-.045c-.303-.04-.398-.106-.45-.16c-.054-.052-.12-.147-.16-.45c-.044-.322-.045-.76-.045-1.438v-1.86c0-.678.001-1.116.045-1.438c.04-.303.106-.398.16-.45"/><path fill="currentColor" fill-rule="evenodd" d="M12 3c.385 0 .698.312.698.698v2.79q.764.001 1.395.017V3.698a.698.698 0 0 1 1.395 0v2.79a1 1 0 0 1-.008.108c.936.115 1.585.353 2.078.846s.731 1.142.846 2.078a1 1 0 0 1 .108-.008h2.79a.698.698 0 0 1 0 1.395h-2.807q.017.63.017 1.395h2.79a.698.698 0 0 1 0 1.396h-2.79q-.001.764-.017 1.395h2.807a.698.698 0 0 1 0 1.395h-2.79a1 1 0 0 1-.108-.008c-.115.936-.353 1.585-.846 2.078s-1.142.731-2.078.846q.009.053.008.108v2.79a.698.698 0 0 1-1.395 0v-2.807q-.63.017-1.395.017v2.79a.698.698 0 0 1-1.396 0v-2.79a56 56 0 0 1-1.395-.017v2.807a.698.698 0 0 1-1.395 0v-2.79q0-.056.008-.108c-.936-.115-1.585-.353-2.078-.846s-.731-1.142-.846-2.078a1 1 0 0 1-.108.008h-2.79a.698.698 0 0 1 0-1.395h2.807a56 56 0 0 1-.017-1.395h-2.79a.698.698 0 0 1 0-1.396h2.79q.001-.764.017-1.395H2.698a.698.698 0 0 1 0-1.395h2.79q.056 0 .108.008c.115-.936.353-1.585.846-2.078s1.142-.731 2.078-.846a1 1 0 0 1-.008-.108v-2.79a.698.698 0 0 1 1.395 0v2.807q.63-.017 1.395-.017v-2.79c0-.386.313-.698.698-.698m-.976 5.581c-.619 0-1.152 0-1.578.058c-.458.061-.896.2-1.252.555c-.355.356-.494.794-.555 1.252c-.058.427-.058.96-.058 1.578v1.952c0 .619 0 1.151.058 1.578c.061.458.2.896.555 1.252c.356.355.794.494 1.252.555c.426.058.96.058 1.578.058h1.952c.619 0 1.151 0 1.578-.058c.458-.061.896-.2 1.252-.555c.355-.356.494-.794.555-1.252c.058-.427.058-.96.058-1.578v-1.952c0-.619 0-1.151-.058-1.578c-.061-.458-.2-.896-.555-1.252c-.356-.355-.794-.494-1.252-.555c-.427-.058-.96-.058-1.578-.058z" clip-rule="evenodd"/></svg>'},{slug:"solar:cpu-bold-duotone",label:"Cpu Bold Duotone",keywords:["cpu"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 3c.385 0 .698.312.698.698v2.79q.764.001 1.395.017V3.698a.698.698 0 0 1 1.395 0v2.79a1 1 0 0 1-.008.108c.936.115 1.585.353 2.078.846s.731 1.142.846 2.078a1 1 0 0 1 .108-.008h2.79a.698.698 0 0 1 0 1.395h-2.807q.017.63.017 1.395h2.79a.698.698 0 0 1 0 1.396h-2.79q-.001.764-.017 1.395h2.807a.698.698 0 0 1 0 1.395h-2.79a1 1 0 0 1-.108-.008c-.115.936-.353 1.585-.846 2.078s-1.142.731-2.078.846q.009.053.008.108v2.79a.698.698 0 0 1-1.395 0v-2.807q-.63.017-1.395.017v2.79a.698.698 0 0 1-1.396 0v-2.79a56 56 0 0 1-1.395-.017v2.807a.698.698 0 0 1-1.395 0v-2.79q0-.056.008-.108c-.936-.115-1.585-.353-2.078-.846s-.731-1.142-.846-2.078a1 1 0 0 1-.108.008h-2.79a.698.698 0 0 1 0-1.395h2.807a56 56 0 0 1-.017-1.395h-2.79a.698.698 0 0 1 0-1.396h2.79q.001-.764.017-1.395H2.698a.698.698 0 0 1 0-1.395h2.79q.056 0 .108.008c.115-.936.353-1.585.846-2.078s1.142-.731 2.078-.846a1 1 0 0 1-.008-.108v-2.79a.698.698 0 0 1 1.395 0v2.807q.63-.017 1.395-.017v-2.79c0-.386.313-.698.698-.698m-.976 5.581c-.619 0-1.152 0-1.578.058c-.458.061-.896.2-1.252.555c-.355.356-.494.794-.555 1.252c-.058.427-.058.96-.058 1.578v1.952c0 .619 0 1.151.058 1.578c.061.458.2.896.555 1.252c.356.355.794.494 1.252.555c.426.058.96.058 1.578.058h1.952c.619 0 1.151 0 1.578-.058c.458-.061.896-.2 1.252-.555c.355-.356.494-.794.555-1.252c.058-.427.058-.96.058-1.578v-1.952c0-.619 0-1.151-.058-1.578c-.061-.458-.2-.896-.555-1.252c-.356-.355-.794-.494-1.252-.555c-.427-.058-.96-.058-1.578-.058z" clip-rule="evenodd"/><path fill="currentColor" d="M9.18 10.18c.054-.052.149-.118.451-.159c.323-.043.761-.044 1.439-.044h1.86c.678 0 1.116.001 1.438.044c.303.041.398.107.45.16c.054.053.12.148.16.45c.044.323.045.761.045 1.439v1.86c0 .678-.001 1.116-.045 1.438c-.04.303-.106.398-.16.45c-.052.054-.147.12-.45.16c-.322.044-.76.045-1.438.045h-1.86c-.678 0-1.116-.001-1.439-.045c-.302-.04-.397-.106-.45-.16c-.053-.052-.119-.147-.16-.45c-.043-.322-.044-.76-.044-1.438v-1.86c0-.678.001-1.116.044-1.438c.041-.303.107-.398.16-.451" opacity=".5"/></svg>'},{slug:"solar:cpu-broken",label:"Cpu Broken",keywords:["cpu"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" d="M17 14c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14v-4c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56"/><path d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z"/><path stroke-linecap="round" d="M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2"/></g></svg>'},{slug:"tabler:circuit-bulb",label:"Circuit Bulb",keywords:["circuit"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12h5m10 0h5M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0m1.5-3.5l7 7m0-7l-7 7"/></svg>'},{slug:"tabler:circuit-cell",label:"Circuit Cell",keywords:["circuit"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12h8m4 0h8M10 5v14m4-10v6"/></svg>'},{slug:"ph:head-circuit",label:"Head Circuit",keywords:["circuit"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M192.5 171.47a88.34 88.34 0 0 0 31.5-69.54c-1-45.71-37.61-83.4-83.24-85.8A88 88 0 0 0 48 102l-22.45 43.18c-.09.18-.18.36-.26.54a16 16 0 0 0 7.55 20.62l.25.11L56 176.94V208a16 16 0 0 0 16 16h48a8 8 0 0 0 0-16H72v-36.19a8 8 0 0 0-4.67-7.28L40 152l23.07-44.34A7.9 7.9 0 0 0 64 104a72 72 0 0 1 56-70.21v15.59a24 24 0 1 0 16 0V32c1.3 0 2.6 0 3.9.1A72.26 72.26 0 0 1 203.84 80H184a8 8 0 0 0-6.15 2.88l-25.51 30.62a24.06 24.06 0 1 0 12.28 10.25L187.75 96h19.79q.36 3.12.44 6.3a72.26 72.26 0 0 1-28.78 59.3a8 8 0 0 0-3.14 7.39l8 64a8 8 0 0 0 7.93 7a8 8 0 0 0 1-.06a8 8 0 0 0 6.95-8.93ZM128 80a8 8 0 1 1 8-8a8 8 0 0 1-8 8m16 64a8 8 0 1 1 8-8a8 8 0 0 1-8 8"/></svg>'},{slug:"lucide:microchip",label:"Microchip",keywords:["microchip"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 12h4m-4 5h4M10 7h4m4 5h2m-2 6h2M18 6h2M4 12h2m-2 6h2M4 6h2"/><rect x="6" y="2" rx="2"/></g></svg>'},{slug:"ri:sensor-fill",label:"Sensor Fill",keywords:["sensor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6 8v2h12V8h-3V2h2v4h5v2h-2v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V2h2v6zm7-6v6h-2V2z"/></svg>'},{slug:"ri:sensor-line",label:"Sensor Line",keywords:["sensor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6 8v11h12V8h-3V2h2v4h5v2h-2v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V2h2v6zm7-6v6h-2V2z"/></svg>'},{slug:"material-symbols:door-sensor",label:"Door Sensor",keywords:["sensor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M9 21q-.825 0-1.412-.587T7 19v-2h5q.825 0 1.413-.587T14 15t-.587-1.412T12 13H7V5q0-.825.588-1.412T9 3h6q.825 0 1.413.588T17 5v14q0 .825-.587 1.413T15 21zm-4-5q-.425 0-.712-.288T4 15t.288-.712T5 14h7q.425 0 .713.288T13 15t-.288.713T12 16zm7.713-6.288Q13 9.425 13 9t-.288-.712T12 8t-.712.288T11 9t.288.713T12 10t.713-.288m6.575-1Q19 8.426 19 8V4q0-.425.288-.712T20 3t.713.288T21 4v4q0 .425-.288.713T20 9t-.712-.288"/></svg>'},{slug:"mdi:motor",label:"Motor",keywords:["motor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 4v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"/></svg>'},{slug:"mdi:motor-outline",label:"Motor Outline",keywords:["motor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8 10h8v8h-5l-2-2H7v-5m0-7v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"/></svg>'},{slug:"mdi:motor-off",label:"Motor Off",keywords:["motor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3.78 2.5L21.5 20.22l-1.27 1.28L18 19.27V20h-8l-2-2H5v-3H3v3H1v-8h2v3h2v-3l1.87-1.86L2.5 3.77zM20 9v3h-2V8h-6V6h3V4H7.82l15 15H23V9z"/></svg>'},{slug:"mdi:engine",label:"Engine",keywords:["engine"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 4v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"/></svg>'},{slug:"mdi:engine-outline",label:"Engine Outline",keywords:["engine"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8 10h8v8h-5l-2-2H7v-5m0-7v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"/></svg>'},{slug:"tabler:engine",label:"Engine",keywords:["engine"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10v6m9-11v3m-2-3h4m-9 8H3m3-3h2l2-2h3.382a1 1 0 0 1 .894.553l1.448 2.894a1 1 0 0 0 .894.553H18v-2h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2v-2h-3v2a1 1 0 0 1-1 1h-3.465a1 1 0 0 1-.832-.445L8 16H6z"/></svg>'},{slug:"mdi:car",label:"Car",keywords:["car"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m5 11l1.5-4.5h11L19 11m-1.5 5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-11 0A1.5 1.5 0 0 1 5 14.5A1.5 1.5 0 0 1 6.5 13A1.5 1.5 0 0 1 8 14.5A1.5 1.5 0 0 1 6.5 16M18.92 6c-.2-.58-.76-1-1.42-1h-11c-.66 0-1.22.42-1.42 1L3 12v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8z"/></svg>'},{slug:"mdi:car-outline",label:"Car Outline",keywords:["car"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18.9 6c-.2-.6-.8-1-1.4-1h-11c-.7 0-1.2.4-1.4 1L3 12v8c0 .5.5 1 1 1h1c.6 0 1-.5 1-1v-1h12v1c0 .5.5 1 1 1h1c.5 0 1-.5 1-1v-8zM6.8 7h10.3l1.1 3H5.8zM19 17H5v-5h14zM7.5 13c.8 0 1.5.7 1.5 1.5S8.3 16 7.5 16S6 15.3 6 14.5S6.7 13 7.5 13m9 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5"/></svg>'},{slug:"tabler:car",label:"Car",keywords:["car"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"/><path d="M5 17H3v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0H9m-6-6h15m-6 0V6"/></g></svg>'},{slug:"mdi:tank",label:"Tank",keywords:["tank"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20 12H4v-1h2l1-5h5l1 5h7zm-6.78-5l.4 2H22V7zM22 16a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3M6 16a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1m7 0a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1m7 0a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1"/></svg>'},{slug:"tabler:tank",label:"Tank",keywords:["tank"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 15a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3m4-3l1-5h5l3 5m6-3h-7.8"/></svg>'},{slug:"mingcute:tank-fill",label:"Tank Fill",keywords:["tank"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M7 7a3 3 0 0 1 3-3h1.53a5 5 0 0 1 4.584 3H20a1 1 0 1 1 0 2h-3.418l.285 2h.633a4.5 4.5 0 1 1 0 9h-11a4.5 4.5 0 1 1 0-9H7z"/></g></svg>'},{slug:"mdi:truck",label:"Truck",keywords:["truck"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18 18.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m1.5-9l1.96 2.5H17V9.5m-11 9A1.5 1.5 0 0 1 4.5 17A1.5 1.5 0 0 1 6 15.5A1.5 1.5 0 0 1 7.5 17A1.5 1.5 0 0 1 6 18.5M20 8h-3V4H3c-1.11 0-2 .89-2 2v11h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-5z"/></svg>'},{slug:"mdi:truck-outline",label:"Truck Outline",keywords:["truck"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m1.5-9H17V12h4.46zM6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.11.89-2 2-2h14v4zM3 6v9h.76c.55-.61 1.35-1 2.24-1s1.69.39 2.24 1H15V6z"/></svg>'},{slug:"tabler:truck",label:"Truck",keywords:["truck"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"/><path d="M5 17H3V6a1 1 0 0 1 1-1h9v12m-4 0h6m4 0h2v-6h-8m0-5h5l3 5"/></g></svg>'},{slug:"material-symbols:rocket",label:"Rocket",keywords:["rocket"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 22v-5.925q0-.5.238-.95T4.9 14.4l1.1-.725q.175 2.1.55 3.575t1.175 3.275zm5.225-2q-.875-1.65-1.3-3.5T7.5 12.675q0-3.125 1.238-5.887T12 2.6q2.025 1.425 3.263 4.188t1.237 5.887q0 1.95-.425 3.788T14.775 20zm4.188-7.587Q14 11.825 14 11t-.587-1.412T12 9t-1.412.588T10 11t.588 1.413T12 13t1.413-.587M20 22l-3.725-1.475q.8-1.8 1.175-3.275t.55-3.575l1.1.725q.425.275.663.725t.237.95z"/></svg>'},{slug:"material-symbols:rocket-outline",label:"Rocket Outline",keywords:["rocket"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m6 19.05l1.975-.8q-.25-.725-.462-1.475t-.338-1.5l-1.175.8zM10 18h4q.45-1 .725-2.437T15 12.625q0-2.475-.825-4.687T12 4.525q-1.35 1.2-2.175 3.413T9 12.625q0 1.5.275 2.938T10 18m.588-5.587Q10 11.825 10 11t.588-1.412T12 9t1.413.588T14 11t-.587 1.413T12 13t-1.412-.587M18 19.05v-2.975l-1.175-.8q-.125.75-.337 1.5t-.463 1.475zM12 1.975q2.475 1.8 3.738 4.575T17 13l2.1 1.4q.425.275.663.725t.237.95V22l-4.975-2h-6.05L4 22v-5.925q0-.5.238-.95T4.9 14.4L7 13q0-3.675 1.263-6.45T12 1.975"/></svg>'},{slug:"material-symbols:rocket-outline-rounded",label:"Rocket Outline Rounded",keywords:["rocket"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7.975 18.25q-.25-.725-.462-1.475t-.338-1.5l-1.175.8v2.975zM11.65 4.875q-1.2 1.275-1.925 3.363T9 12.625q0 1.5.275 2.938T10 18h4q.45-1 .725-2.437T15 12.625q0-2.3-.725-4.387T12.35 4.875q-.075-.075-.162-.112T12 4.725t-.187.038t-.163.112M12 13q-.825 0-1.412-.587T10 11t.588-1.412T12 9t1.413.588T14 11t-.587 1.413T12 13m4.025 5.25l1.975.8v-2.975l-1.175-.8q-.125.75-.337 1.5t-.463 1.475M12.775 2.6q2.1 1.8 3.163 4.425T17 13l2.1 1.4q.425.275.663.725t.237.95v4.45q0 .525-.437.825t-.938.1l-3.6-1.45h-6.05l-3.6 1.45q-.5.2-.937-.1T4 20.525v-4.45q0-.5.238-.95T4.9 14.4L7 13q0-3.35 1.063-5.975T11.224 2.6q.175-.125.375-.2t.4-.075t.4.075t.375.2"/></svg>'},{slug:"material-symbols:drone",label:"Drone",keywords:["drone"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q0-1.875 1.025-3.363t2.65-2.162L7.425 12H4V6H1V4h8v2H6v4h1.2L7 8h10l-.2 2H18V6h-3V4h8.025v2h-3v6H16.6l-.25 2.475q1.625.675 2.638 2.163T20 20h-2q0-1.65-1.175-2.825T14 16h-4q-1.65 0-2.825 1.175T6 20z"/></svg>'},{slug:"material-symbols:drone-outline",label:"Drone Outline",keywords:["drone"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q0-1.875 1.025-3.363t2.65-2.162L7.425 12H4V6H1V4h8v2H6v4h1.2L7 8h10l-.2 2H18V6h-3V4h8.025v2h-3v6H16.6l-.25 2.475q1.625.675 2.638 2.163T20 20h-2q0-1.65-1.175-2.825T14 16h-4q-1.65 0-2.825 1.175T6 20zm5.625-6h4.725l.425-4H9.2zm0 0h4.725z"/></svg>'},{slug:"material-symbols:drone-outline-rounded",label:"Drone Outline Rounded",keywords:["drone"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10 16q-1.425 0-2.475.85T6.125 19q-.125.425-.413.713T5 20t-.7-.3t-.2-.7q.275-1.55 1.225-2.75t2.35-1.775L7.425 12H5q-.425 0-.713-.288T4 11V6H2q-.425 0-.712-.288T1 5t.288-.712T2 4h6q.425 0 .713.288T9 5t-.288.713T8 6H6v4h1.2l-.075-.9q-.05-.45.238-.775T8.1 8h7.8q.45 0 .738.325t.237.775l-.075.9H18V6h-2q-.425 0-.712-.288T15 5t.288-.712T16 4h6.025q.425 0 .713.288t.287.712t-.287.713t-.713.287h-2v5q0 .425-.287.713t-.713.287H16.6l-.25 2.475q1.4.575 2.35 1.775T19.925 19q.075.4-.212.7T19 20t-.712-.288t-.413-.712q-.35-1.3-1.412-2.15T14 16zm-.375-2h4.725l.425-4H9.2zm0 0h4.725z"/></svg>'},{slug:"material-symbols:gamepad",label:"Gamepad",keywords:["gamepad"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.5l-3-3V2h6v5.5zm4.5 4.5l-3-3l3-3H22v6zM2 15V9h5.5l3 3l-3 3zm7 7v-5.5l3-3l3 3V22z"/></svg>'},{slug:"material-symbols:gamepad-outline",label:"Gamepad Outline",keywords:["gamepad"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.5l-3-3V2h6v5.5zm4.5 4.5l-3-3l3-3H22v6zM2 15V9h5.5l3 3l-3 3zm7 7v-5.5l3-3l3 3V22zm3-14.35l1-1V4h-2v2.65zM4 13h2.65l1-1l-1-1H4zm7 7h2v-2.65l-1-1l-1 1zm6.35-7H20v-2h-2.65l-1 1z"/></svg>'},{slug:"material-symbols:gamepad-outline-rounded",label:"Gamepad Outline Rounded",keywords:["gamepad"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m11.3 9.8l-2-2q-.15-.15-.225-.337T9 7.075V3q0-.425.288-.712T10 2h4q.425 0 .713.288T15 3v4.075q0 .2-.075.388T14.7 7.8l-2 2q-.15.15-.325.213t-.375.062t-.375-.062T11.3 9.8m2.9 2.9q-.15-.15-.212-.325T13.925 12t.063-.375t.212-.325l2-2q.15-.15.338-.225T16.925 9H21q.425 0 .713.288T22 10v4q0 .425-.288.713T21 15h-4.075q-.2 0-.387-.075T16.2 14.7zM2 14v-4q0-.425.288-.712T3 9h4.075q.2 0 .388.075T7.8 9.3l2 2q.15.15.213.325t.062.375t-.062.375t-.213.325l-2 2q-.15.15-.337.225T7.075 15H3q-.425 0-.712-.288T2 14m7 7v-4.075q0-.2.075-.387T9.3 16.2l2-2q.15-.15.325-.212t.375-.063t.375.063t.325.212l2 2q.15.15.225.338t.075.387V21q0 .425-.288.713T14 22h-4q-.425 0-.712-.288T9 21m3-13.35l1-1V4h-2v2.65zM4 13h2.65l1-1l-1-1H4zm7 7h2v-2.65l-1-1l-1 1zm6.35-7H20v-2h-2.65l-1 1z"/></svg>'},{slug:"material-symbols:joystick",label:"Joystick",keywords:["joystick"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 8.275V7.85q-1.1-.325-1.8-1.237T8.5 4.5q0-1.45 1.025-2.475T12 1t2.475 1.025T15.5 4.5q0 1.2-.7 2.113T13 7.85v.425l7 4.025q.475.275.738.738T21 14.05v1.9q0 .55-.262 1.013T20 17.7l-7 4.025Q12.525 22 12 22t-1-.275L4 17.7q-.475-.275-.737-.737T3 15.95v-1.9q0-.55.263-1.012T4 12.3zM6.8 13l5.2 3l5.2-3l-4.2-2.425V14h-2v-3.425z"/></svg>'},{slug:"material-symbols:joystick-outline",label:"Joystick Outline",keywords:["joystick"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m6.8 13l5.2 3l5.2-3l-4.2-2.425V14h-2v-3.425zM11 8.275V7.85q-1.1-.325-1.8-1.238T8.5 4.5q0-1.45 1.025-2.475T12 1t2.475 1.025T15.5 4.5q0 1.2-.7 2.113T13 7.85v.425l7 4.025q.475.275.738.738T21 14.05v1.9q0 .55-.262 1.013T20 17.7l-7 4.025Q12.525 22 12 22t-1-.275L4 17.7q-.475-.275-.737-.737T3 15.95v-1.9q0-.55.263-1.012T4 12.3zm0 9.45l-6-3.45v1.675L12 20l7-4.05v-1.675l-6 3.45Q12.525 18 12 18t-1-.275m2.063-12.163q.437-.437.437-1.062t-.437-1.062T12 3t-1.062.438T10.5 4.5t.438 1.063T12 6t1.063-.437M12 20"/></svg>'},{slug:"material-symbols:joystick-outline-sharp",label:"Joystick Outline Sharp",keywords:["joystick"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 8.275V7.85q-1.1-.325-1.8-1.237T8.5 4.5q0-1.45 1.025-2.475T12 1t2.475 1.025T15.5 4.5q0 1.2-.7 2.113T13 7.85v.425l8 4.6v4.25l-8 4.6Q12.525 22 12 22t-1-.275l-8-4.6v-4.25zm-6 6v1.675L12 20l7-4.05v-1.675L12 18.3zm8.063-8.712q.437-.438.437-1.063t-.437-1.062T12 3t-1.062.438T10.5 4.5t.438 1.063T12 6t1.063-.437M6.8 13l5.2 3l5.2-3l-4.2-2.425V14h-2v-3.425z"/></svg>'},{slug:"mdi:battery",label:"Battery",keywords:["battery"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16.67 4H15V2H9v2H7.33A1.33 1.33 0 0 0 6 5.33v15.34C6 21.4 6.6 22 7.33 22h9.34A1.33 1.33 0 0 0 18 20.67V5.33C18 4.6 17.4 4 16.67 4"/></svg>'},{slug:"mdi:battery-outline",label:"Battery Outline",keywords:["battery"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16 20H8V6h8m.67-2H15V2H9v2H7.33A1.33 1.33 0 0 0 6 5.33v15.34C6 21.4 6.6 22 7.33 22h9.34A1.33 1.33 0 0 0 18 20.67V5.33C18 4.6 17.4 4 16.67 4"/></svg>'},{slug:"tabler:battery",label:"Battery",keywords:["battery"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 7h11a2 2 0 0 1 2 2v.5a.5.5 0 0 0 .5.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5a.5.5 0 0 0-.5.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2"/></svg>'},{slug:"material-symbols:bolt",label:"Bolt",keywords:["bolt"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m8 22l1-7H4l9-13h2l-1 8h6L10 22z"/></svg>'},{slug:"material-symbols:bolt-outline",label:"Bolt Outline",keywords:["bolt"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m10.55 18.2l5.175-6.2h-4l.725-5.675L7.825 13H11.3zM8 22l1-7H4l9-13h2l-1 8h6L10 22zm3.775-9.75"/></svg>'},{slug:"material-symbols:bolt-outline-rounded",label:"Bolt Outline Rounded",keywords:["bolt"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m10.55 18.2l5.175-6.2h-4l.725-5.675L7.825 13H11.3zM9 15H5.9q-.6 0-.888-.537t.063-1.038l7.475-10.75q.25-.35.65-.487t.825.012t.625.525t.15.8L14 10h3.875q.65 0 .913.575t-.163 1.075L10.4 21.5q-.275.325-.675.425t-.775-.075t-.587-.537t-.163-.788zm2.775-2.75"/></svg>'},{slug:"material-symbols:bluetooth",label:"Bluetooth",keywords:["bluetooth"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 22v-7.6L6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5L11 9.6V2h1l5.7 5.7l-4.3 4.3l4.3 4.3L12 22zm2-12.4l1.9-1.9L13 5.85zm0 8.55l1.9-1.85l-1.9-1.9z"/></svg>'},{slug:"material-symbols:bluetooth-rounded",label:"Bluetooth Rounded",keywords:["bluetooth"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 20.575V14.4l-3.9 3.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275L11 9.6V3.425q0-.45.3-.737T12 2.4q.2 0 .375.075t.325.225L17 7q.15.15.213.325t.062.375t-.062.375T17 8.4L13.4 12l3.6 3.6q.15.15.213.325t.062.375t-.062.375T17 17l-4.3 4.3q-.15.15-.325.225T12 21.6q-.4 0-.7-.288t-.3-.737M13 9.6l1.9-1.9L13 5.85zm0 8.55l1.9-1.85l-1.9-1.9z"/></svg>'},{slug:"mdi:bluetooth",label:"Bluetooth",keywords:["bluetooth"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14.88 16.29L13 18.17v-3.76m0-8.58l1.88 1.88L13 9.58m4.71-1.87L12 2h-1v7.58L6.41 5L5 6.41L10.59 12L5 17.58L6.41 19L11 14.41V22h1l5.71-5.71l-4.3-4.29z"/></svg>'},{slug:"material-symbols:wifi",label:"Wifi",keywords:["wifi"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.225 20.275Q9.5 19.55 9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21t-1.775-.725M6.35 15.35l-2.1-2.15q1.475-1.475 3.463-2.337T12 10t4.288.875t3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725T12 13t-3.1.625t-2.55 1.725M2.1 11.1L0 9q2.3-2.35 5.375-3.675T12 4t6.625 1.325T24 9l-2.1 2.1q-1.925-1.925-4.462-3.012T12 7T6.563 8.088T2.1 11.1"/></svg>'},{slug:"material-symbols:wifi-rounded",label:"Wifi Rounded",keywords:["wifi"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.225 20.275Q9.5 19.55 9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21t-1.775-.725m5.338-9.675q1.687.6 3.062 1.65q.5.375.513.988T18.7 14.3q-.425.425-1.05.438t-1.125-.338q-.95-.65-2.1-1.025T12 13t-2.425.375t-2.1 1.025q-.5.35-1.125.325t-1.05-.45q-.425-.45-.425-1.062t.5-.988q1.375-1.05 3.063-1.638T12 10t3.563.6m2.324-5.575q2.763 1.025 4.963 2.9q.5.425.525 1.05t-.425 1.075q-.425.425-1.05.438t-1.125-.388q-1.8-1.475-4.037-2.287T12 7t-4.737.813T3.225 10.1q-.5.4-1.125.388t-1.05-.438Q.6 9.6.625 8.975t.525-1.05q2.2-1.875 4.963-2.9T12 4t5.888 1.025"/></svg>'},{slug:"material-symbols:wifi-sharp",label:"Wifi Sharp",keywords:["wifi"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m6.35 15.35l-2.1-2.15q1.55-1.55 3.55-2.375T12 10t4.213.838t3.537 2.412l-2.1 2.1q-1.125-1.125-2.588-1.737T12 13t-3.062.613T6.35 15.35M2.1 11.1L0 9q2.375-2.425 5.488-3.713T12 4t6.513 1.288T24 9l-2.1 2.1q-1.975-1.975-4.538-3.037T12 7T6.637 8.063T2.1 11.1M12 21l-3.525-3.55q.7-.7 1.613-1.075T12 16t1.913.375t1.612 1.075z"/></svg>'},{slug:"mdi:antenna",label:"Antenna",keywords:["antenna"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 7.5c.69 0 1.27.23 1.76.7s.74 1.07.74 1.8q0 1.575-1.5 2.28V21h-2v-8.72Q9.5 11.575 9.5 10c0-.73.26-1.33.74-1.8s1.07-.7 1.76-.7m4.69-2.2c1.25 1.25 1.92 2.81 2.01 4.7c0 1.8-.67 3.38-2.01 4.72L15.5 13.5c1-.91 1.5-2.08 1.5-3.5c0-1.33-.5-2.5-1.5-3.5zM6.09 4.08C4.5 5.67 3.7 7.64 3.7 10s.8 4.3 2.39 5.89l-1.17 1.22C3 15.08 2 12.7 2 10s1-5.06 2.92-7.09zm12.99-1.17C21 4.94 22 7.3 22 10c0 2.8-1 5.17-2.92 7.11l-1.17-1.22C19.5 14.3 20.3 12.33 20.3 10s-.8-4.33-2.39-5.92zM7.31 5.3L8.5 6.5C7.5 7.42 7 8.58 7 10c0 1.33.5 2.5 1.5 3.5l-1.19 1.22C5.97 13.38 5.3 11.8 5.3 10s.67-3.36 2.01-4.7"/></svg>'},{slug:"tabler:antenna",label:"Antenna",keywords:["antenna"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 4v8m-4-7.5v7M12 5v16M8 5.5v5M4 6v4m16-2H4"/></svg>'},{slug:"lucide:antenna",label:"Antenna",keywords:["antenna"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12L7 2m0 10l5-10m0 10l5-10m0 10l5-10M4.5 7h15M12 16v6"/></svg>'},{slug:"mdi:led-outline",label:"Led Outline",keywords:["led"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4m0 2a2 2 0 0 1 2 2v5h-4v-5a2 2 0 0 1 2-2"/></svg>'},{slug:"mdi:led-on",label:"Led On",keywords:["led"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 0v4h2V0zm7.3 2.29l-3.06 3l1.4 1.42l3.06-3zm-12.59 0L4.29 3.71l3 3l1.42-1.42zM12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4M2 9v2h4V9zm16 0v2h4V9z"/></svg>'},{slug:"mdi:led-off",label:"Led Off",keywords:["led"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4"/></svg>'},{slug:"tabler:bulb",label:"Bulb",keywords:["bulb"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h1m8-9v1m8 8h1M5.6 5.6l.7.7m12.1-.7l-.7.7M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0-1 3a2 2 0 0 1-4 0a3.5 3.5 0 0 0-1-3m.7 1h4.6"/></svg>'},{slug:"tabler:bulb-filled",label:"Bulb Filled",keywords:["bulb"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 11a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm8-9a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1m9 9a1 1 0 0 1 .117 1.993L21 13h-1a1 1 0 0 1-.117-1.993L20 11zM4.893 4.893a1 1 0 0 1 1.32-.083l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7a1 1 0 0 1 0-1.414m12.8 0a1 1 0 0 1 1.497 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094zM14 18a1 1 0 0 1 1 1a3 3 0 0 1-6 0a1 1 0 0 1 .883-.993L10 18zM12 6a6 6 0 0 1 3.6 10.8a1 1 0 0 1-.471.192L15 17H9a1 1 0 0 1-.6-.2A6 6 0 0 1 12 6"/></svg>'},{slug:"mingcute:bulb-fill",label:"Bulb Fill",keywords:["bulb"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M13 20a1 1 0 0 1 .117 1.993L13 22h-2a1 1 0 0 1-.117-1.993L11 20zM12 2c4.41 0 8 3.543 8 7.933c0 3.006-1.522 5.196-2.78 6.494l-.284.283l-.27.252l-.252.22l-.33.27l-.328.244c-.241.17-.403.419-.55.678l-.205.364c-.238.41-.517.762-1.108.762h-3.786c-.59 0-.87-.351-1.108-.762l-.118-.208c-.172-.312-.348-.63-.637-.834l-.232-.171l-.199-.155l-.227-.188l-.252-.22l-.27-.252l-.285-.283C5.522 15.129 4 12.939 4 9.933C4 5.543 7.59 2 12 2m1.707 4.293a1 1 0 0 0-1.32-.083l-.094.083L10.3 8.286a1.01 1.01 0 0 0-.084 1.333l.084.095L11.586 11l-1.293 1.293a1 1 0 0 0 1.32 1.497l.094-.083l1.993-1.993a1.01 1.01 0 0 0 .084-1.333l-.084-.095L12.414 9l1.293-1.293a1 1 0 0 0 0-1.414"/></g></svg>'},{slug:"ph:x-light",label:"X Light",keywords:["light"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M204.24 195.76a6 6 0 1 1-8.48 8.48L128 136.49l-67.76 67.75a6 6 0 0 1-8.48-8.48L119.51 128L51.76 60.24a6 6 0 0 1 8.48-8.48L128 119.51l67.76-67.75a6 6 0 0 1 8.48 8.48L136.49 128Z"/></svg>'},{slug:"ph:at-light",label:"At Light",keywords:["light"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M128 26a102 102 0 0 0 0 204c21.13 0 43.31-6.35 59.32-17a6 6 0 0 0-6.65-10c-13.9 9.25-34.09 15-52.67 15a90 90 0 1 1 90-90c0 29.58-13.78 34-22 34s-22-4.42-22-34V88a6 6 0 0 0-12 0v9a46 46 0 1 0 4.34 56.32C171.76 166.6 182 174 196 174c21.29 0 34-17.2 34-46A102.12 102.12 0 0 0 128 26m0 136a34 34 0 1 1 34-34a34 34 0 0 1-34 34"/></svg>'},{slug:"ph:pi-light",label:"Pi Light",keywords:["light"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M230 172a34 34 0 0 1-68 0V70H94v130a6 6 0 0 1-12 0V70H72a42 42 0 0 0-42 42a6 6 0 0 1-12 0a54.06 54.06 0 0 1 54-54h152a6 6 0 0 1 0 12h-50v102a22 22 0 0 0 44 0a6 6 0 0 1 12 0"/></svg>'},{slug:"mdi:lamp",label:"Lamp",keywords:["lamp"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8 2h8l4 12H4zm3 13h2v5h5v2H6v-2h5z"/></svg>'},{slug:"mdi:lamp-outline",label:"Lamp Outline",keywords:["lamp"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m14.56 4l2.67 8H6.78l2.66-8zM16 2H8L4 14h16zm-5 13h2v5h5v2H6v-2h5z"/></svg>'},{slug:"solar:lamp-bold",label:"Lamp Bold",keywords:["lamp"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6.667 3.151c-.786.775-1.09 1.948-1.699 4.294l-.084.324c-.828 3.189-1.242 4.783-.49 5.903q.112.168.247.319C5.536 15 7.183 15 10.477 15h.779v6.25h-2.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25V15h.78c1.32 0 2.374 0 3.223-.065l-.003.065v2a.75.75 0 1 0 1.5 0v-2.318c.468-.15.83-.369 1.116-.691q.135-.15.247-.32c.752-1.12.338-2.713-.49-5.902l-.084-.324c-.609-2.346-.913-3.519-1.7-4.294a4 4 0 0 0-.756-.585C15.64 2 14.429 2 12.007 2c-2.424 0-3.635 0-4.583.566a4 4 0 0 0-.757.585"/></svg>'},{slug:"mdi:flash",label:"Flash",keywords:["flash"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>'},{slug:"mdi:flash-outline",label:"Flash Outline",keywords:["flash"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 2h10l-3.5 7H17l-7 13v-8H7zm2 2v8h3v2.66L14 11h-3.76l3.52-7z"/></svg>'},{slug:"mingcute:flash-fill",label:"Flash Fill",keywords:["flash"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M13.232 1.36c.632-.758 1.863-.24 1.763.742L14.289 9H20a1 1 0 0 1 .768 1.64l-10 12c-.632.758-1.863.24-1.763-.742L9.711 15H4a1 1 0 0 1-.768-1.64z"/></g></svg>'},{slug:"mdi:temperature",label:"Temperature",keywords:["temperature"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15 13V5a3 3 0 0 0-6 0v8a5 5 0 1 0 6 0m-3-9a1 1 0 0 1 1 1v3h-2V5a1 1 0 0 1 1-1"/></svg>'},{slug:"solar:temperature-bold",label:"Temperature Bold",keywords:["temperature"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M17.5 16.5a5.5 5.5 0 1 1-8.939-4.293c.264-.211.439-.521.439-.86V5a3 3 0 1 1 6 0v6.348c0 .338.175.648.439.86A5.49 5.49 0 0 1 17.5 16.5M12 4.25a.75.75 0 0 1 .75.75v8.38c0 .437.297.808.658 1.054a2.5 2.5 0 1 1-2.816 0c.36-.246.658-.617.658-1.054V5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>'},{slug:"solar:temperature-bold-duotone",label:"Temperature Bold Duotone",keywords:["temperature"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 16.5a5.5 5.5 0 1 1-8.939-4.293c.264-.211.439-.521.439-.86V5a3 3 0 1 1 6 0v6.348c0 .338.175.648.439.86A5.49 5.49 0 0 1 17.5 16.5" opacity=".5"/><path fill="currentColor" d="M12.75 5a.75.75 0 0 0-1.5 0v8.38c0 .437-.297.808-.658 1.054a2.5 2.5 0 1 0 2.816 0c-.36-.246-.658-.617-.658-1.054z"/></svg>'},{slug:"material-symbols:thermometer",label:"Thermometer",keywords:["thermometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-2.075 0-3.537-1.463T7 16q0-1.2.525-2.238T9 12V6q0-1.25.875-2.125T12 3t2.125.875T15 6v6q.95.725 1.475 1.763T17 16q0 2.075-1.463 3.538T12 21m-1-11h2V6q0-.425-.288-.712T12 5t-.712.288T11 6z"/></svg>'},{slug:"material-symbols:thermometer-outline",label:"Thermometer Outline",keywords:["thermometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-2.075 0-3.537-1.463T7 16q0-1.2.525-2.238T9 12V6q0-1.25.875-2.125T12 3t2.125.875T15 6v6q.95.725 1.475 1.763T17 16q0 2.075-1.463 3.538T12 21m0-2q1.25 0 2.125-.875T15 16q0-.725-.312-1.35T13.8 13.6L13 13V6q0-.425-.288-.712T12 5t-.712.288T11 6v7l-.8.6q-.575.425-.888 1.05T9 16q0 1.25.875 2.125T12 19m0-3"/></svg>'},{slug:"mdi:thermometer",label:"Thermometer",keywords:["thermometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15 13V5a3 3 0 0 0-6 0v8a5 5 0 1 0 6 0m-3-9a1 1 0 0 1 1 1v3h-2V5a1 1 0 0 1 1-1"/></svg>'},{slug:"mdi:gauge",label:"Gauge",keywords:["gauge"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8c0 2.4-1 4.5-2.7 6c-1.4-1.3-3.3-2-5.3-2s-3.8.7-5.3 2C5 16.5 4 14.4 4 12a8 8 0 0 1 8-8m2 1.89c-.38.01-.74.26-.9.65l-1.29 3.23l-.1.23c-.71.13-1.3.6-1.57 1.26c-.41 1.03.09 2.19 1.12 2.6s2.19-.09 2.6-1.12c.26-.66.14-1.42-.29-1.98l.1-.26l1.29-3.21l.01-.03c.2-.51-.05-1.09-.56-1.3c-.13-.05-.26-.07-.41-.07M10 6a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M7 9a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m10 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"/></svg>'},{slug:"tabler:gauge",label:"Gauge",keywords:["gauge"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"/><path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m2.41-1.41L16 8m-9 4a5 5 0 0 1 5-5"/></g></svg>'},{slug:"tabler:gauge-filled",label:"Gauge Filled",keywords:["gauge"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34m-.293 3.953a1 1 0 0 0-1.414 0l-2.59 2.59l-.083.094l-.068.1a2 2 0 0 0-2.547 1.774L10 12l.005.15a2 2 0 1 0 3.917-.701a1 1 0 0 0 .195-.152l2.59-2.59l.083-.094a1 1 0 0 0-.083-1.32M12 6a6 6 0 0 0-6 6a1 1 0 0 0 2 0a4 4 0 0 1 4-4a1 1 0 0 0 0-2"/></svg>'},{slug:"mdi:speedometer",label:"Speedometer",keywords:["speedometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16a3 3 0 0 1-3-3c0-1.12.61-2.1 1.5-2.61l9.71-5.62l-5.53 9.58c-.5.98-1.51 1.65-2.68 1.65m0-13c1.81 0 3.5.5 4.97 1.32l-2.1 1.21C14 5.19 13 5 12 5a8 8 0 0 0-8 8c0 2.21.89 4.21 2.34 5.65h.01c.39.39.39 1.02 0 1.41s-1.03.39-1.42.01A9.97 9.97 0 0 1 2 13A10 10 0 0 1 12 3m10 10c0 2.76-1.12 5.26-2.93 7.07c-.39.38-1.02.38-1.41-.01a.996.996 0 0 1 0-1.41A7.95 7.95 0 0 0 20 13c0-1-.19-2-.54-2.9L20.67 8C21.5 9.5 22 11.18 22 13"/></svg>'},{slug:"ph:speedometer",label:"Speedometer",keywords:["speedometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="m114.34 154.34l96-96a8 8 0 0 1 11.32 11.32l-96 96a8 8 0 0 1-11.32-11.32M128 88a63.9 63.9 0 0 1 20.44 3.33a8 8 0 1 0 5.11-15.16a80 80 0 0 0-105.06 84.71a8 8 0 0 0 7.94 7.12c.29 0 .59 0 .89-.05a8 8 0 0 0 7.07-8.83A65 65 0 0 1 64 152a64.07 64.07 0 0 1 64-64m99.74 13a8 8 0 0 0-14.24 7.3a96.27 96.27 0 0 1 5 75.71l-181.1-.07A96.24 96.24 0 0 1 128 56h.88a95 95 0 0 1 42.82 10.5a8 8 0 1 0 7.3-14.23a112 112 0 0 0-156.66 137A16.07 16.07 0 0 0 37.46 200h181.07a16 16 0 0 0 15.11-10.71a112.35 112.35 0 0 0-5.9-88.3Z"/></svg>'},{slug:"ph:speedometer-bold",label:"Speedometer Bold",keywords:["speedometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="m119.51 143.51l88-88a12 12 0 1 1 17 17l-88 88a12 12 0 1 1-17-17m14.23-43.2a12 12 0 1 0 2.62-23.85A75 75 0 0 0 128 76a76.08 76.08 0 0 0-76 76a12 12 0 0 0 24 0a52.06 52.06 0 0 1 52-52a55 55 0 0 1 5.74.31m101.54 7.5a12 12 0 0 0-22.19 9.19a92.47 92.47 0 0 1 2.58 63H40.34A92.23 92.23 0 0 1 128 60h.84a91.4 91.4 0 0 1 34.2 6.91a12 12 0 0 0 9.14-22.19A116.07 116.07 0 0 0 18.57 190.58A20.09 20.09 0 0 0 37.46 204h181.07a20.06 20.06 0 0 0 18.88-13.38a116.4 116.4 0 0 0-2.13-82.81"/></svg>'},{slug:"material-symbols:radar",label:"Radar",keywords:["radar"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8.1 21.213q-1.825-.788-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22t-3.9-.788M12 20q1.4 0 2.638-.437t2.262-1.238L15.475 16.9q-.725.525-1.612.813T12 18q-2.5 0-4.25-1.75T6 12t1.75-4.25T12 6t4.25 1.75T18 12q0 .975-.3 1.875t-.825 1.625l1.425 1.425q.8-1.025 1.25-2.275T20 12q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-4q.55 0 1.063-.137t.962-.413L12.5 13.925q-.125.05-.25.063T12 14q-.825 0-1.412-.587T10 12t.588-1.412T12 10t1.413.588T14 12q0 .15-.012.288t-.063.262l1.5 1.5q.275-.45.425-.962T16 12q0-1.65-1.175-2.825T12 8T9.175 9.175T8 12t1.175 2.825T12 16"/></svg>'},{slug:"mdi:radar",label:"Radar",keywords:["radar"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m19.07 4.93l-1.41 1.41A8 8 0 0 1 20 12a8 8 0 0 1-8 8a8 8 0 0 1-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12a6 6 0 0 0 6 6a6 6 0 0 0 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12a4 4 0 0 1-4 4a4 4 0 0 1-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.74-.4-1.38-1-1.72V2h-1A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-2.76-1.12-5.26-2.93-7.07"/></svg>'},{slug:"solar:radar-bold",label:"Radar Bold",keywords:["radar"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-8.642-5.07a5.2 5.2 0 0 0-2.232-.107a.75.75 0 0 1-.252-1.478a6.749 6.749 0 1 1-4.519 2.953c.453-.69 1.358-.733 1.92-.279l4.197 3.398a.75.75 0 1 1-.944 1.166L7.49 9.313a5.249 5.249 0 1 0 5.87-2.384" clip-rule="evenodd"/></svg>'},{slug:"mdi:compass",label:"Compass",keywords:["compass"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14.19 14.19L6 18l3.81-8.19L18 6m-6-4A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 8.9a1.1 1.1 0 0 0-1.1 1.1a1.1 1.1 0 0 0 1.1 1.1a1.1 1.1 0 0 0 1.1-1.1a1.1 1.1 0 0 0-1.1-1.1"/></svg>'},{slug:"mdi:compass-outline",label:"Compass Outline",keywords:["compass"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m7 17l3.2-6.8L17 7l-3.2 6.8zm5-5.9a.9.9 0 0 0-.9.9a.9.9 0 0 0 .9.9a.9.9 0 0 0 .9-.9a.9.9 0 0 0-.9-.9M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"/></svg>'},{slug:"solar:compass-bold",label:"Compass Bold",keywords:["compass"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1.956-7.905c-.193.17-.44.268-.932.465c-2.31.924-3.465 1.386-4.124.938a1.5 1.5 0 0 1-.398-.398c-.448-.66.014-1.814.938-4.124c.197-.493.295-.74.465-.933q.065-.073.139-.138c.193-.17.44-.268.932-.465c2.31-.924 3.464-1.386 4.124-.938a1.5 1.5 0 0 1 .398.398c.448.66-.014 1.814-.938 4.124c-.197.493-.295.739-.465.932q-.065.075-.139.139" clip-rule="evenodd"/></svg>'},{slug:"tabler:map-pin",label:"Map Pin",keywords:["map-pin"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0"/><path d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0"/></g></svg>'},{slug:"tabler:map-pin-filled",label:"Map Pin Filled",keywords:["map-pin"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21l-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135l-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6"/></svg>'},{slug:"mingcute:map-pin-fill",label:"Map Pin Fill",keywords:["map-pin"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M7 7a5 5 0 1 1 6 4.9V17a1 1 0 1 1-2 0v-5.1A5 5 0 0 1 7 7m2.489 9.1a1 1 0 0 1-.838 1.14c-1.278.195-2.293.489-2.96.815c-.335.164-.534.313-.637.422l-.021.023c.033.039.09.096.19.169c.28.207.749.435 1.418.644C7.968 19.728 9.863 20 12 20s4.032-.272 5.359-.687c.67-.209 1.138-.437 1.418-.644c.1-.073.157-.13.19-.169l-.021-.023c-.103-.109-.302-.258-.637-.422c-.667-.326-1.682-.62-2.96-.815a1 1 0 1 1 .301-1.977c1.388.21 2.622.547 3.539.996c.457.224.884.5 1.208.842c.33.347.603.82.603 1.399c0 .811-.524 1.4-1.034 1.777c-.53.392-1.233.702-2.01.945c-1.57.49-3.674.778-5.956.778s-4.387-.288-5.955-.778c-.778-.243-1.48-.553-2.01-.945C3.524 19.9 3 19.311 3 18.5c0-.58.273-1.052.603-1.4c.325-.342.751-.617 1.208-.84c.917-.45 2.152-.786 3.538-.997a1 1 0 0 1 1.14.838Z"/></g></svg>'},{slug:"mdi:ruler",label:"Ruler",keywords:["ruler"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m1.39 18.36l1.77-1.76L4.58 18l1.06-1.05l-1.42-1.41l1.42-1.42l2.47 2.48l1.06-1.06l-2.47-2.48l1.41-1.41l1.42 1.41L10.59 12l-1.42-1.41l1.42-1.42l2.47 2.48l1.06-1.06l-2.47-2.48l1.41-1.41l1.41 1.41l1.07-1.06l-1.42-1.41l1.42-1.42L18 6.7l1.07-1.06l-2.47-2.48l1.76-1.77l4.25 4.25L5.64 22.61z"/></svg>'},{slug:"solar:ruler-bold",label:"Ruler Bold",keywords:["ruler"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 15.616c0 .847.682 1.529 2.045 2.892l1.447 1.447C6.855 21.318 7.537 22 8.384 22s1.53-.682 2.893-2.045l8.678-8.678C21.318 9.913 22 9.23 22 8.384s-.682-1.529-2.045-2.892l-1.447-1.447C17.145 2.682 16.463 2 15.616 2c-.754 0-1.376.54-2.464 1.618q.045.033.085.073l1.415 1.415a.75.75 0 1 1-1.061 1.06l-1.414-1.414a1 1 0 0 1-.074-.086L11.03 5.739q.045.033.086.074l2.121 2.121a.75.75 0 1 1-1.06 1.06l-2.122-2.12a1 1 0 0 1-.074-.087L8.91 7.86q.044.033.086.074l1.414 1.414a.75.75 0 0 1-1.06 1.06L7.933 8.996a1 1 0 0 1-.074-.086L6.787 9.98q.046.033.086.074l2.122 2.122a.75.75 0 0 1-1.061 1.06l-2.121-2.121a1 1 0 0 1-.074-.086l-1.073 1.073q.045.032.086.074l1.414 1.414a.75.75 0 0 1-1.06 1.06L3.69 13.238a1 1 0 0 1-.073-.085C2.539 14.24 2 14.862 2 15.616"/></svg>'},{slug:"solar:ruler-bold-duotone",label:"Ruler Bold Duotone",keywords:["ruler"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 15.616c0 .847.682 1.529 2.045 2.892l1.447 1.447C6.855 21.318 7.537 22 8.384 22s1.53-.682 2.893-2.045l8.678-8.678C21.318 9.913 22 9.23 22 8.384s-.682-1.529-2.045-2.892l-1.447-1.447C17.145 2.682 16.463 2 15.616 2c-.754 0-1.376.54-2.464 1.618l-1.05 1.048l-1.072 1.073l-1.05 1.048L8.91 7.86L7.86 8.909L6.788 9.98L5.74 11.03l-1.073 1.073l-1.048 1.049C2.539 14.24 2 14.862 2 15.616" opacity=".5"/><path fill="currentColor" d="M13.238 3.691a1 1 0 0 0-.086-.073l-1.049 1.048q.033.045.074.086l1.414 1.414a.75.75 0 0 0 1.06-1.06zm-2.122 2.122a1 1 0 0 0-.086-.074L9.982 6.787q.033.045.074.086l2.121 2.122a.75.75 0 0 0 1.06-1.061zM8.995 7.934a1 1 0 0 0-.086-.074L7.86 8.908q.033.046.074.087l1.415 1.414a.75.75 0 1 0 1.06-1.06zm-2.121 2.121a1 1 0 0 0-.086-.074L5.739 11.03q.033.045.074.086l2.121 2.121a.75.75 0 1 0 1.061-1.06zm-2.122 2.122a1 1 0 0 0-.086-.075l-1.048 1.05q.033.045.074.085l1.414 1.414a.75.75 0 1 0 1.06-1.06z"/></svg>'},{slug:"material-symbols:settings",label:"Settings",keywords:["settings"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5"/></svg>'},{slug:"material-symbols:settings-outline",label:"Settings Outline",keywords:["settings"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zM11 20h1.975l.35-2.65q.775-.2 1.438-.587t1.212-.938l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.737T17.5 12t-.05-.787t-.175-.738l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.962t-1.438-.588L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.963t1.437.587zm1.05-4.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5M12 12"/></svg>'},{slug:"material-symbols:settings-outline-rounded",label:"Settings Outline Rounded",keywords:["settings"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.825 22q-.675 0-1.162-.45t-.588-1.1L8.85 18.8q-.325-.125-.612-.3t-.563-.375l-1.55.65q-.625.275-1.25.05t-.975-.8l-1.175-2.05q-.35-.575-.2-1.225t.675-1.075l1.325-1Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337l-1.325-1Q2.675 9.9 2.525 9.25t.2-1.225L3.9 5.975q.35-.575.975-.8t1.25.05l1.55.65q.275-.2.575-.375t.6-.3l.225-1.65q.1-.65.588-1.1T10.825 2h2.35q.675 0 1.163.45t.587 1.1l.225 1.65q.325.125.613.3t.562.375l1.55-.65q.625-.275 1.25-.05t.975.8l1.175 2.05q.35.575.2 1.225t-.675 1.075l-1.325 1q.025.175.025.338v.674q0 .163-.05.338l1.325 1q.525.425.675 1.075t-.2 1.225l-1.2 2.05q-.35.575-.975.8t-1.25-.05l-1.5-.65q-.275.2-.575.375t-.6.3l-.225 1.65q-.1.65-.587 1.1t-1.163.45zM11 20h1.975l.35-2.65q.775-.2 1.438-.587t1.212-.938l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.737T17.5 12t-.05-.787t-.175-.738l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.962t-1.438-.588L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.963t1.437.587zm1.05-4.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.487 1.025T8.55 12t1.013 2.475T12.05 15.5M12 12"/></svg>'},{slug:"tabler:tool",label:"Tool",keywords:["tool"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10h3V7L6.5 3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1-3 3l-6-6a6 6 0 0 1-8-8z"/></svg>'},{slug:"mingcute:tool-fill",label:"Tool Fill",keywords:["tool"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M7.527 2.657a7.001 7.001 0 0 1 8.26 9.347l4.599 3.893a3.3 3.3 0 1 1-4.651 4.65l-3.891-4.597a7.001 7.001 0 0 1-9.35-8.26a1.01 1.01 0 0 1 1.72-.432l3.045 3.307l2.297-.845l.847-2.3l-3.309-3.04a1.01 1.01 0 0 1 .433-1.723"/></g></svg>'},{slug:"mingcute:tool-line",label:"Tool Line",keywords:["tool"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M6.798 2.884a7.002 7.002 0 0 1 9.294 8.565l4.394 3.718a3.76 3.76 0 1 1-5.3 5.3l-3.717-4.394a7.002 7.002 0 0 1-8.565-9.295c.358-.894 1.48-1.007 2.063-.373L8.17 9.883l1.446-.288l.29-1.449l-3.48-3.198c-.634-.583-.522-1.706.373-2.064ZM8.805 4.42l2.763 2.54c.322.296.466.738.38 1.165l-.47 2.354a1.25 1.25 0 0 1-.982.981l-2.35.467a1.25 1.25 0 0 1-1.164-.38L4.438 8.785a5.002 5.002 0 0 0 6.804 5.25a1.26 1.26 0 0 1 1.422.355l4.05 4.786a1.76 1.76 0 1 0 2.48-2.48l-4.785-4.05a1.26 1.26 0 0 1-.355-1.422a5 5 0 0 0-5.25-6.804Z"/></g></svg>'},{slug:"mdi:wrench",label:"Wrench",keywords:["wrench"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9c-2-2-5-2.4-7.4-1.3L9 6L6 9L1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4"/></svg>'},{slug:"mdi:wrench-outline",label:"Wrench Outline",keywords:["wrench"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m22.61 19l-9.08-9.09c.93-2.34.47-5.1-1.44-7C9.79.61 6.21.4 3.66 2.26L7.5 6.11L6.08 7.5L2.25 3.69C.39 6.23.6 9.82 2.9 12.11c1.86 1.86 4.57 2.35 6.89 1.48l9.11 9.11c.39.39 1.02.39 1.41 0l2.3-2.3c.39-.4.39-1.01 0-1.4m-3 1.59l-9.46-9.46c-.61.45-1.29.72-2 .82c-1.36.2-2.79-.21-3.83-1.25C3.37 9.76 2.93 8.5 3 7.26l3.09 3.09l4.24-4.24L7.24 3c1.26-.05 2.49.39 3.44 1.33a4.47 4.47 0 0 1 1.24 3.96a4.35 4.35 0 0 1-.88 1.96l9.46 9.45z"/></svg>'},{slug:"ri:wrench-fill",label:"Wrench Fill",keywords:["wrench"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19.249 6.872a1 1 0 0 1 1.645.36a7.001 7.001 0 0 1-8.912 9.037l-4.013 4.013a3 3 0 1 1-4.243-4.243l4.013-4.013a7 7 0 0 1 9.025-8.917a1 1 0 0 1 .36 1.645L14.768 7.11a1.5 1.5 0 0 0 2.121 2.122z"/></svg>'},{slug:"mdi:screwdriver",label:"Screwdriver",keywords:["screwdriver"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18 1.83c-.5 0-1 .17-1.41.58L8 11l1.5 1.5L6 16H4l-2 4l2 2l4-2v-2l3.5-3.5L13 16l8.59-8.59c.62-.91.78-2.04 0-2.82l-2.18-2.18A1.95 1.95 0 0 0 18 1.83M18 4l2 2l-7 7l-2-2z"/></svg>'}],cf="./",fc=vg.map(a=>({slug:a.slug,label:a.label,keywords:a.keywords,svg:a.svg})),bg=Object.fromEntries(fc.map(a=>[a.slug,a.svg])),Pl="grommet-icons:raspberry";function Cs(a){return`data:image/svg+xml,${encodeURIComponent(a)}`}function uf(a){return bg[a]??null}const yg=`${cf}art/logo.png`,wg=`${cf}art/Teknologiskolen_logo.png`,xg=`${cf}art/logo_teknologiskolen_white.png`,kg={menu:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]}),user:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),settings:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),info:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),u.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),help:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),u.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),debugger:u.jsx(u.Fragment,{children:u.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),edit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),u.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),picoIde:u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),u.jsx("path",{d:"M8 9l-3 3 3 3"}),u.jsx("path",{d:"M16 9l3 3-3 3"}),u.jsx("line",{x1:"13",y1:"8",x2:"11",y2:"16"})]}),exit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),plus:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),delete:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),u.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),power:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),u.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),save:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),u.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),u.jsx("polyline",{points:"7 3 7 8 15 8"})]}),upload:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),u.jsx("polyline",{points:"17 8 12 3 7 8"}),u.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),refresh:u.jsxs(u.Fragment,{children:[u.jsx("polyline",{points:"23 4 23 10 17 10"}),u.jsx("polyline",{points:"1 20 1 14 7 14"}),u.jsx("path",{d:"M3.5 9a9 9 0 0 1 14.9-3.4L23 10"}),u.jsx("path",{d:"M20.5 15a9 9 0 0 1-14.9 3.4L1 14"})]}),package:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),u.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),u.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),back:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),u.jsx("polyline",{points:"12 19 5 12 12 5"})]}),chevronLeft:u.jsx("polyline",{points:"15 6 9 12 15 18"}),chevronRight:u.jsx("polyline",{points:"9 6 15 12 9 18"})};function Xt({name:a,size:l=24,className:o}){return u.jsx("svg",{width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:o,"aria-hidden":"true",children:kg[a]})}let ce=null,bs=null,Om=0,rl=!1;function Sg(){return new Date().toLocaleTimeString("da-DK",{hour12:!1})}function Lm(a){return new Promise(l=>setTimeout(l,a))}function Bd(a,l){const o=l.userID.toLowerCase();return a.map(s=>{if(!s.ownerID)return s;const d=s.ownerID.toLowerCase()===o;return{...s,isOwnedByMe:d,ownerName:d?l.username:s.ownerName}})}function zd(a,l,o=!1){const s=a.name?Ah(a.name):"";return o&&s?s:l!=null&&l.deviceName?l.deviceName:s||"Pico"}function Eg(a){return Object.fromEntries(a.filter(l=>l.type==="toggle").map(l=>[l.name,!!l.toggleInitial]))}function Bm(a,l){const o=Eg(a);for(const s of a)s.type==="toggle"&&l[s.name]!==void 0&&(o[s.name]=l[s.name]);return o}const oe=I2((a,l)=>{function o(m,_){a(b=>({logs:[{level:m,message:_,time:Sg()},...b.logs].slice(0,200)}))}function s(m){bs&&clearTimeout(bs),Om+=1,a({toast:{message:m,id:Om}}),bs=setTimeout(()=>a({toast:null}),4500)}function d(m=null){a({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},plotSeries:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:m})}function p(m){return{deviceID:m.deviceID,deviceName:m.deviceName,ownerID:m.ownerID,deviceIcon:m.icon,canOthersConnect:m.canOthersConnect,canOthersEdit:m.canOthersEdit,canOthersEditCode:m.canOthersEditCode,isOwnedByMe:m.isOwnedByMe,ownerName:m.ownerName}}function g(m){const{screen:_,active:b,picoIdeOrigin:k}=l();if(rl){rl=!1;return}m&&(o("warning",m),s(m)),(_==="control"||_==="connection"||_==="create"||_==="ide"&&k==="control")&&d(b?p(b):null)}return ce=new gg({onProgress:(m,_)=>a({progress:{value:m,label:_}}),onLog:(m,_)=>o(m,_),onRadar:(m,_,b)=>{const k=Date.now(),x={id:`${k}-${Math.random().toString(36).slice(2)}`,angle:_,distance:b,createdAt:k};a(T=>{const A=T.layout.find(X=>X.type==="radar"&&X.name===m),B=(A==null?void 0:A.radarFadeMs)??1200,U=T.radarPings[m]??[];return{radarPings:{...T.radarPings,[m]:[...U.filter(X=>k-X.createdAt<=B),x].slice(-80)}}})},onText:(m,_)=>{a(b=>({textValues:{...b.textValues,[m]:_}}))},onToggleState:(m,_)=>{a(b=>({toggleValues:{...b.toggleValues,[m]:_}}))},onSliderState:(m,_)=>{a(b=>({sliderValues:{...b.sliderValues,[m]:_}}))},onPlot:(m,_,b)=>{const k=Date.now(),x={id:`${k}-${Math.random().toString(36).slice(2)}`,value:_,createdAt:k,label:b};a(T=>{const A=T.plotSeries[m]??[];return{plotSeries:{...T.plotSeries,[m]:[...A,x].slice(-1e3)}}})},onPlotClear:m=>{a(_=>({plotSeries:{..._.plotSeries,[m]:[]}}))},onDisconnect:m=>g(m)}),{screen:"splash",splashTarget:null,user:null,savedDevices:[],connecting:null,progress:{value:0,label:""},toast:null,confirmDialog:null,connectionLost:null,active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},plotSeries:{},logs:[],sideMenuOpen:!1,debuggerOpen:!1,menuPage:null,editMode:!1,dashboardPage:"mine",picoIdeOrigin:"dashboard",init:()=>{const m=F2(),_=m?Bd(gc(),m):gc();m&&ai(_),a({user:m,savedDevices:_,splashTarget:m?"dashboard":"intro"})},finishSplash:()=>{const m=l().splashTarget;a({screen:m??"intro"})},createUser:m=>{const _=m.trim();if(!_)return;const b={username:_,userID:P2()};Rd(b),a({user:b,screen:"dashboard"})},findDevice:async m=>{try{const _=await tg(m==null?void 0:m.deviceName);await l().connectToDevice(_,m,!0)}catch(_){_ instanceof Error&&_.name!=="NotFoundError"&&o("error",_.message)}},connectToDevice:async(m,_,b)=>{var T,A,B;const k=l().user;if(!k||!ce)return!1;rl=!1;const x=l().savedDevices.find(U=>U.deviceID===m.id)??_;a({screen:"connection",connecting:{name:zd(m,x,b),icon:(x==null?void 0:x.deviceIcon)??Pl},progress:{value:0,label:"Forbinder..."},sliderValues:{},radarPings:{},textValues:{},plotSeries:{}});try{await ce.connect(m);const U=await ce.runHandshake(k),X=m.id,$=(U.kind==="owned"||U.kind==="unowned")&&((T=U.deviceName)==null?void 0:T.trim())||zd(m,x,b);if(a(pe=>pe.connecting?{connecting:{...pe.connecting,name:$}}:{}),U.kind==="denied"){const ae=`Du kan ikke forbinde, fordi ${((A=U.ownerName)==null?void 0:A.trim())||((B=x==null?void 0:x.ownerName)==null?void 0:B.trim())||"ejeren"} ejer enheden og ikke tillader besøgende at forbinde.`;return o("warning",ae),s(ae),a({screen:"dashboard",connecting:null}),await ce.disconnect(),!0}if(U.kind==="unowned")return a({active:{deviceID:X,deviceName:$,ownerID:k.userID,icon:Pl,canEdit:!0,canEditCode:!0,canOthersConnect:!1,canOthersEdit:!1,canOthersEditCode:!1,isOwnedByMe:!0,ownerName:k.username,gridCols:oi,gridRows:As},screen:"create"}),!0;const O={deviceID:X,deviceName:$,ownerID:U.ownerID,deviceIcon:U.icon||(x==null?void 0:x.deviceIcon)||Pl,canOthersConnect:U.canOthersConnect,canOthersEdit:U.canOthersEdit,canOthersEditCode:U.canOthersEditCode,isOwnedByMe:U.isOwnedByMe,ownerName:U.isOwnedByMe?k.username:U.ownerName??(x==null?void 0:x.ownerName)};a({savedDevices:Ad(O)});const le=await ce.requestLayout(),H=Cm(le),ue=Dm(le);return a({layout:ue,toggleValues:Bm(ue,l().toggleValues),active:{deviceID:X,deviceName:$,ownerID:U.ownerID,icon:U.icon||(x==null?void 0:x.deviceIcon)||Pl,canEdit:U.canEdit,canEditCode:U.canEditCode,canOthersConnect:U.canOthersConnect,canOthersEdit:U.canOthersEdit,canOthersEditCode:U.canOthersEditCode,isOwnedByMe:U.isOwnedByMe,ownerName:U.isOwnedByMe?k.username:U.ownerName??(x==null?void 0:x.ownerName),gridCols:H.cols,gridRows:H.rows},screen:"control",connecting:null,connectionLost:null}),!0}catch(U){const X=U instanceof Error?U.message:"Forbindelsen mislykkedes.";return o("error",X),s("Forbindelsen mislykkedes."),a({screen:"dashboard",connecting:null}),await ce.disconnect().catch(()=>{}),!1}},finishCreate:async(m,_,b,k,x,T)=>{const{user:A,active:B}=l();if(!(!A||!B||!ce))try{ce.setBusy(!0),await ce.create(A,m,_,b,k,x,T),ce.setBusy(!1);const U={deviceID:B.deviceID,deviceName:B.deviceName,ownerID:A.userID,deviceIcon:m,canOthersConnect:_,canOthersEdit:_&&b,canOthersEditCode:_&&k,isOwnedByMe:!0,ownerName:A.username};a({savedDevices:Ad(U)});const X=await ce.requestLayout(),$=Cm(X),O=Dm(X);a({layout:O,toggleValues:Bm(O,l().toggleValues),active:{...B,ownerID:A.userID,icon:m,canEdit:!0,canEditCode:!0,canOthersConnect:_,canOthersEdit:_&&b,canOthersEditCode:_&&k,ownerName:A.username,gridCols:$.cols,gridRows:$.rows},screen:"control"})}catch(U){ce.setBusy(!1);const X=U instanceof Error?U.message:"Oprettelse mislykkedes.";o("error",X),s("Oprettelse mislykkedes."),a({screen:"dashboard"}),await ce.disconnect().catch(()=>{})}},saveDeviceSettings:async(m,_,b,k,x,T)=>{const{active:A,user:B}=l();if(!(!A||!ce||!A.isOwnedByMe))try{ce.setBusy(!0),await ce.updateDeviceSettings(m,_,b,k,x,T,B==null?void 0:B.username);const U={...A,icon:m,canEdit:!0,canEditCode:!0,canOthersConnect:_,canOthersEdit:_&&b,canOthersEditCode:_&&k,ownerName:(B==null?void 0:B.username)??A.ownerName,gridCols:x,gridRows:T},X={deviceID:A.deviceID,deviceName:A.deviceName,ownerID:A.ownerID??(B==null?void 0:B.userID),deviceIcon:m,canOthersConnect:_,canOthersEdit:_&&b,canOthersEditCode:_&&k,isOwnedByMe:!0,ownerName:(B==null?void 0:B.username)??A.ownerName};a({active:U,savedDevices:Ad(X)}),s("Enhedsindstillinger gemt.")}catch(U){o("error",U instanceof Error?U.message:"Kunne ikke gemme enhedsindstillinger."),s("Kunne ikke gemme enhedsindstillinger.")}finally{ce.setBusy(!1)}},cancelCreate:async()=>{ce&&await ce.disconnect().catch(()=>{}),a({screen:"dashboard",active:null,connecting:null})},disconnect:async()=>{rl=!0,d(null),ce&&await ce.disconnect().catch(()=>{}),rl=!1},removeSavedDevice:m=>{a({savedDevices:K2(m)})},clearSavedDevices:()=>{$2(),a({savedDevices:[]}),s("Gemte enheder ryddet.")},resetApplicationData:async()=>{rl=!0,ce!=null&&ce.connected&&await ce.disconnect().catch(()=>{}),Y2(),window.location.reload()},updateUsername:m=>{const _=l().user,b=m.trim();if(!_||!b)return;const k={..._,username:b};Rd(k),a(x=>{var A;const T=Bd(x.savedDevices,k);return ai(T),{user:k,active:(A=x.active)!=null&&A.isOwnedByMe?{...x.active,ownerName:b}:x.active,savedDevices:T}}),s("Brugernavn gemt.")},createOwnerPairingCode:()=>{const m=l().user;return m?Tg(m):null},applyOwnerPairingCode:m=>{var b;const _=Mg(m,(b=l().user)==null?void 0:b.username);return _?(Rd(_),a(k=>{var T,A,B;const x=Bd(k.savedDevices,_);return ai(x),{user:_,active:((A=(T=k.active)==null?void 0:T.ownerID)==null?void 0:A.toLowerCase())===_.userID.toLowerCase()||(B=k.active)!=null&&B.isOwnedByMe?{...k.active,isOwnedByMe:!0,ownerID:_.userID,ownerName:_.username}:k.active,savedDevices:x}}),s("Ejerkoden er gemt. Denne browser bruger nu samme ejer-GUID."),!0):(s("Ejerkoden kunne ikke læses."),!1)},openPicoIde:()=>{const m=l().screen==="control"&&!!(ce!=null&&ce.connected),_=l().active;if(m&&_&&!_.isOwnedByMe&&!_.canEditCode){s("Ejeren tillader ikke, at gæster åbner Kodeværkstedet på denne enhed."),o("warning","Kodeværkstedet er blokeret, fordi ejeren ikke tillader gæster at redigere kode."),a({sideMenuOpen:!1});return}a(b=>({screen:"ide",picoIdeOrigin:m?"control":"dashboard",active:m?b.active:null,layout:m?b.layout:[],sliderValues:m?b.sliderValues:{},toggleValues:m?b.toggleValues:{},radarPings:m?b.radarPings:{},textValues:m?b.textValues:{},plotSeries:m?b.plotSeries:{},editMode:!1,sideMenuOpen:!1,menuPage:null}))},closePicoIde:()=>{const{picoIdeOrigin:m,active:_}=l();a({screen:m==="control"&&_&&(ce!=null&&ce.connected)?"control":"dashboard",sideMenuOpen:!1,menuPage:null,picoIdeOrigin:"dashboard"})},isBleConnected:()=>!!(ce!=null&&ce.connected),bleListFiles:async()=>ce!=null&&ce.connected?ce.listFiles("/"):[],bleReadText:async(m,_,b)=>{if(!(ce!=null&&ce.connected))throw new Error("Ingen BLE-forbindelse.");return ce.readText(m,_,b)},bleWriteText:async(m,_,b)=>{if(!(ce!=null&&ce.connected))throw new Error("Ingen BLE-forbindelse.");await ce.writeText(m,_,b)},bleDeleteFile:async m=>{if(!(ce!=null&&ce.connected))throw new Error("Ingen BLE-forbindelse.");await ce.deleteFile(m)},bleRestart:async()=>{ce!=null&&ce.connected&&await ce.restart()},bleRestartAndReconnect:async(m="control")=>{const{active:_}=l();if(!(ce!=null&&ce.connected)||!_)return!1;const b={deviceID:_.deviceID,deviceName:_.deviceName,ownerID:_.ownerID,deviceIcon:_.icon,canOthersConnect:_.canOthersConnect,canOthersEdit:_.canOthersEdit,canOthersEditCode:_.canOthersEditCode,isOwnedByMe:_.isOwnedByMe,ownerName:_.ownerName};rl=!0,o("info","Genstarter Pico og forsøger automatisk genforbindelse...");try{await ce.restart()}catch{}a({progress:{value:15,label:"Venter på Pico genstart..."},connecting:{name:b.deviceName,icon:b.deviceIcon}});for(let k=0;k<12&&(ce!=null&&ce.connected);k+=1)await Lm(250);ce!=null&&ce.connected||(rl=!1);for(let k=1;k<=8;k+=1){await Lm(k===1?1200:850);try{const T=(await Ch()).find(B=>B.id===b.deviceID);if(!T){a({progress:{value:Math.min(88,20+k*8),label:"Venter på browser-tilladelse..."}});continue}if(a({progress:{value:Math.min(92,24+k*8),label:`Genforbinder (${k}/8)...`}}),!await l().connectToDevice(T,b))continue;return m==="ide"&&a(B=>({screen:"ide",picoIdeOrigin:"control",active:B.active,layout:B.layout,sliderValues:B.sliderValues,toggleValues:B.toggleValues,radarPings:B.radarPings,textValues:B.textValues,plotSeries:B.plotSeries,editMode:!1,sideMenuOpen:!1,menuPage:null})),s("Pico genforbundet."),!0}catch(x){o("warning",x instanceof Error?x.message:"Genforbindelse mislykkedes.")}}return s("Kunne ikke genforbinde automatisk. Vælg Picoen igen."),rl=!1,a({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},plotSeries:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:b}),!1},reconnectLostDevice:async()=>{var _;const m=l().connectionLost;if(m){a({connectionLost:null});try{if((_=navigator.bluetooth)!=null&&_.getDevices){const k=(await navigator.bluetooth.getDevices()).find(x=>x.id===m.deviceID);if(k&&await l().connectToDevice(k,m))return}}catch{}o("info",`Genforbind: åbner enhedsvælger for ${m.deviceName}.`),await l().findDevice(m)}},dismissConnectionLost:()=>a({connectionLost:null}),sendButton:(m,_)=>ce==null?void 0:ce.enqueueButton(m,_),sendSlider:(m,_)=>{a(b=>({sliderValues:{...b.sliderValues,[m]:_}})),ce==null||ce.enqueueSlider(m,_)},sendToggle:(m,_)=>{a(b=>({toggleValues:{...b.toggleValues,[m]:_}})),ce==null||ce.enqueueToggle(m,_)},sendJoystick:(m,_,b)=>ce==null?void 0:ce.enqueueJoystick(m,_,b),sendDpad:(m,_,b)=>ce==null?void 0:ce.enqueueDpad(m,_,b),saveLayout:async m=>{if(ce)try{ce.setBusy(!0),await ce.saveLayout(m),a({layout:m,editMode:!1})}catch(_){o("error",_ instanceof Error?_.message:"Kunne ikke gemme layout.")}finally{ce.setBusy(!1)}},setEditMode:m=>a({editMode:m,sideMenuOpen:!1,menuPage:null}),setDashboardPage:m=>a({dashboardPage:m}),toggleSideMenu:m=>a(_=>({sideMenuOpen:m??!_.sideMenuOpen})),toggleDebugger:m=>a(_=>({debuggerOpen:m??!_.debuggerOpen,sideMenuOpen:!1,menuPage:null})),openMenuPage:m=>a({menuPage:m,sideMenuOpen:!1}),closeMenuPage:()=>a({menuPage:null}),clearLogs:()=>a({logs:[]}),log:(m,_)=>o(m,_),askConfirm:m=>a({confirmDialog:m}),closeConfirm:()=>a({confirmDialog:null}),showToast:m=>s(m),dismissToast:()=>{bs&&clearTimeout(bs),a({toast:null})}}}),Yd="PKP-EJER";function Tg(a){var s;const l=a.userID.toLowerCase(),o=((s=l.match(/.{1,4}/g))==null?void 0:s.join("-"))??l;return`${Yd}-${o}-${Bh(l)}`}function Mg(a,l="Ejer"){const o=a.trim().toUpperCase().replace(/\s+/g,"-");if(!o.startsWith(`${Yd}-`))return null;const s=o.slice(Yd.length+1).split("-").filter(Boolean),d=s.pop()??"",p=s.join("").toLowerCase();return!/^[a-f0-9]{32}$/.test(p)||d!==Bh(p)?null:{userID:p,username:l.trim()||"Ejer"}}function Bh(a){let l=2166136261;for(const o of a.toLowerCase())l^=o.charCodeAt(0),l=Math.imul(l,16777619)>>>0;return(l%65536).toString(16).toUpperCase().padStart(4,"0")}const Ng=1850,jg=450;function Rg(){const a=oe(s=>s.splashTarget),l=oe(s=>s.finishSplash),o=a?"splash-screen-animation splash-ready":"splash-pending";return N.useEffect(()=>{if(!a)return;const d=window.matchMedia("(prefers-reduced-motion: reduce)").matches?jg:Ng,p=window.setTimeout(l,d);return()=>window.clearTimeout(p)},[l,a]),u.jsxs("div",{className:`screen splash-screen ${o}`,"aria-label":"Teknologiskolen starter",children:[u.jsx("div",{className:"splash-white-cover"}),u.jsx("div",{className:"splash-red-field"}),u.jsx("div",{className:"splash-brand","aria-hidden":"true",children:u.jsx("div",{className:"splash-mark splash-logo-shell",children:u.jsx("img",{className:"splash-logo",src:yg,alt:""})})}),u.jsx("span",{className:"sr-only",children:"Teknologiskolen"})]})}function zm(){const a=oe(d=>d.createUser),[l,o]=N.useState(""),s=l.length>0;return u.jsxs("div",{className:"screen intro",children:[u.jsxs("div",{className:"intro-header",children:[u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"}),u.jsx("img",{className:"intro-header-image",src:wg,alt:"Teknologiskolen"}),u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"})]}),u.jsxs("div",{className:"intro-body",children:[u.jsx("p",{children:"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Find selv på et navn, du vil vises som i appen. Det er ikke et login, og navnet gemmes kun i denne browser."}),u.jsxs("div",{className:`field ${s?"filled":""}`,children:[u.jsx("input",{id:"username",value:l,onChange:d=>o(d.target.value),maxLength:32,autoComplete:"off","aria-label":"Brugernavn"}),u.jsx("label",{htmlFor:"username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!s,onClick:()=>a(l),children:"Fortsæt"})]}),u.jsx("span",{className:"version",children:Rs})]})}function df({title:a,onMenu:l}){return u.jsx("header",{className:"topbar",children:u.jsxs("div",{className:"topbar-inner",children:[u.jsx("h1",{children:a}),u.jsx("button",{className:"iconbtn",type:"button",onClick:l,"aria-label":"Menu",children:u.jsx(Xt,{name:"menu"})})]})})}var zh=jh();function Pt({title:a,onClose:l,children:o,closeVariant:s="plain"}){const d=s==="circle",p=N.useRef(!1);return zh.createPortal(u.jsx("div",{className:"modal-root",onPointerDown:g=>{p.current=g.target===g.currentTarget},onClick:g=>{g.target===g.currentTarget&&p.current&&l(),p.current=!1},children:u.jsxs("div",{className:"modal",onClick:g=>g.stopPropagation(),children:[u.jsxs("div",{className:"modal-head",children:[u.jsx("h3",{children:a}),u.jsx("button",{className:`iconbtn ${d?"modal-close-circle":""}`,type:"button",onClick:l,"aria-label":"Luk",children:u.jsx(Xt,{name:d?"delete":"close",size:d?30:24})})]}),u.jsx("div",{className:"modal-body",children:o})]})}),document.body)}const ff="https://api.iconify.design",Ag=["tabler","lucide","ph","material-symbols","solar","mingcute","ri","mdi"],Uh="pkp.iconcache.";function Cg(a){const[l,...o]=a.split(":");return`${ff}/${l}/${encodeURIComponent(o.join(":"))}.svg`}function qh(a){try{return localStorage.getItem(Uh+a)}catch{return null}}function Hh(a,l){try{localStorage.setItem(Uh+a,l)}catch{}}function Dg(a){return a.replace(/\s(width|height)="[^"]*"/g,"").trim()}async function Vh(a){const l=qh(a);if(l)return l;const[o,...s]=a.split(":"),d=s.join(":");if(!o||!d)return null;try{const p=await fetch(`${ff}/${o}/${encodeURIComponent(d)}.svg`);if(!p.ok)return null;const g=await p.text();return g.startsWith("<svg")?Dg(g):null}catch{return null}}async function Ih(a,l=120){var g;const o=a.trim();if(!o)return{icons:[],total:0};const s=`${ff}/search?query=${encodeURIComponent(o)}&limit=${l}&prefixes=${Ag.join(",")}`,d=await fetch(s);if(!d.ok)throw new Error(`Iconify search failed (${d.status})`);const p=await d.json();return{icons:p.icons??[],total:p.total??((g=p.icons)==null?void 0:g.length)??0}}const Og=["robot","sensor","motor","raspberry pi","led","battery","bluetooth","car","rocket","gamepad","gauge","radar","compass","temperature","wifi","antenna","gear","bolt","lightbulb","joystick","drone","circuit","chip","servo","wheel","magnet","speaker","camera","flask"];function Um(a){const l=[...a];for(let o=l.length-1;o>0;o--){const s=Math.floor(Math.random()*(o+1));[l[o],l[s]]=[l[s],l[o]]}return l}const Lg=8,Bg=20;async function zg(a=120){const l=Um(Og).slice(0,Lg),o=await Promise.all(l.map(g=>Ih(g,Bg).catch(()=>({icons:[],total:0})))),s=new Set,d=[];for(const g of o)for(const m of g.icons)s.has(m)||(s.add(m),d.push(m));const p=Um(d).slice(0,a);return{icons:p,total:p.length}}const Xd=Cs(uf(Pl)??"");function qm(a){if(!a)return Xd;const l=uf(a);if(l)return Cs(l);const o=qh(a);return o?Cs(o):null}function Os({slug:a,className:l,alt:o=""}){const[s,d]=N.useState(()=>qm(a)??Xd);return N.useEffect(()=>{const p=qm(a);if(p){d(p);return}if(d(Xd),!a||typeof navigator<"u"&&!navigator.onLine)return;let g=!1;return Vh(a).then(m=>{g||!m||(Hh(a,m),d(Cs(m)))}),()=>{g=!0}},[a]),u.jsx("img",{className:l,src:s,alt:o})}function Hm(){const a=oe(T=>T.savedDevices),l=oe(T=>T.toggleSideMenu),o=oe(T=>T.findDevice),s=oe(T=>T.removeSavedDevice),d=oe(T=>T.askConfirm),p=oe(T=>T.dashboardPage),g=oe(T=>T.setDashboardPage),m=Vg(),[_,b]=N.useState(null),k=kc(),x=a.filter(T=>p==="mine"?T.isOwnedByMe:!T.isOwnedByMe).sort(Hg);return u.jsxs("div",{className:"screen dashboard-screen",children:[u.jsx(df,{title:"Hovedmenu",onMenu:()=>l()}),u.jsxs("div",{className:"content dash-content",children:[!k&&u.jsx("div",{className:"notice",children:"Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På Android: brug Chrome."}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:p==="mine"?"active":"",onClick:()=>g("mine"),children:"Mine Enheder"}),u.jsx("button",{type:"button",className:p==="andre"?"active":"",onClick:()=>g("andre"),children:"Andre Enheder"})]}),u.jsx("div",{className:"panel panel-white device-list",children:x.length===0?u.jsx("div",{className:"device-list-empty",children:p==="mine"?"Ingen enheder endnu. Tryk på + for at finde en enhed.":"Ingen andre enheder gemt."}):x.map(T=>u.jsx(Ug,{device:T,disabled:!k,onConnect:()=>m(T),onSettings:()=>b(T)},T.deviceID))})]}),u.jsx("button",{className:"fab",type:"button",onClick:()=>o(),disabled:!k,"aria-label":"Find enhed",children:u.jsx(Xt,{name:"plus",size:30})}),u.jsx("span",{className:"version",children:Rs}),_&&u.jsx(Pt,{title:"Enhedsindstillinger",onClose:()=>b(null),children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("div",{className:"saved-device-head",children:[u.jsx(Os,{slug:_.deviceIcon}),u.jsx("strong",{children:_.deviceName})]}),u.jsx(ys,{label:"Gemte indstillinger",value:"Denne browser"}),u.jsx(ys,{label:"Ejer",value:qg(_)}),u.jsx(ys,{label:"Offentlig",value:_.canOthersConnect?"Ja":"Nej"}),u.jsx(ys,{label:"Andre må redigere layout",value:_.canOthersEdit?"Ja":"Nej"}),u.jsx(ys,{label:"Andre må redigere kode",value:_.canOthersEditCode?"Ja":"Nej"}),u.jsx("div",{className:"notice",children:"Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!k,onClick:()=>{const T=_;b(null),m(T)},children:"Forbind"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>d({title:"Glem enhed",message:`Vil du fjerne ${_.deviceName} fra gemte enheder?`,confirmLabel:"Glem",onConfirm:()=>{s(_.deviceID),b(null)}}),children:"Glem enhed"})]})})]})}function Ug({device:a,disabled:l,onConnect:o,onSettings:s}){return u.jsxs("div",{className:"device-tile-wrap",children:[u.jsxs("button",{className:"device-tile",type:"button",onClick:o,disabled:l,children:[u.jsx(Os,{className:"device-tile-icon",slug:a.deviceIcon}),u.jsx("span",{className:"device-tile-name",children:a.deviceName})]}),u.jsx("button",{className:"device-tile-del",type:"button",onClick:s,"aria-label":"Enhedsindstillinger",children:u.jsx(Xt,{name:"settings"})})]})}function ys({label:a,value:l}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:a}),u.jsx("strong",{children:l})]})}function qg(a){var l;return a.isOwnedByMe?"Dig":((l=a.ownerName)==null?void 0:l.trim())||"Anden bruger"}function Hg(a,l){return a.deviceName.localeCompare(l.deviceName,"da",{sensitivity:"base"})}function Vg(){const a=oe(s=>s.connectToDevice),l=oe(s=>s.findDevice),o=oe(s=>s.log);return async s=>{const p=(await Ch()).find(g=>g.id===s.deviceID);p&&await a(p,s)||(o("info",`Genforbind: åbner enhedsvælger for ${s.deviceName}.`),await l(s))}}function Ig(){const a=oe(o=>o.connecting),l=oe(o=>o.progress);return u.jsxs("div",{className:"screen connection",children:[u.jsx("div",{className:"device-icon-pick",children:u.jsx(Os,{slug:a==null?void 0:a.icon})}),u.jsxs("h2",{style:{margin:0,color:"var(--red)"},children:["Forbinder til ",(a==null?void 0:a.name)??"enhed"]}),u.jsx("div",{className:"spinner"}),u.jsxs("div",{style:{width:"100%"},children:[u.jsx("div",{className:"progress-track",children:u.jsx("div",{className:"progress-fill",style:{width:`${l.value}%`}})}),u.jsx("p",{style:{color:"var(--muted)",fontWeight:600,marginTop:12},children:l.label})]})]})}const Vm=24;function Pg(){const[a,l]=N.useState(1),o=N.useRef(null),s=N.useCallback(d=>{var m;if((m=o.current)==null||m.disconnect(),o.current=null,!d)return;const p=()=>{const _=getComputedStyle(d).gridTemplateColumns,b=_&&_!=="none"?_.split(" ").filter(Boolean).length:1;l(k=>k===b?k:Math.max(1,b))};p();const g=new ResizeObserver(p);g.observe(d),o.current=g},[]);return N.useEffect(()=>()=>{var d;return(d=o.current)==null?void 0:d.disconnect()},[]),[a,s]}function Fg(a,l,o){const s=Math.min(Math.max(o,1),l);let d=a-Math.floor(s/2);return d=Math.max(0,Math.min(d,l-s)),Array.from({length:s},(p,g)=>d+g)}function Ph({selected:a,onSelect:l,onClose:o}){const[s,d]=N.useState("library"),[p,g]=Pg(),m=N.useMemo(()=>p*Math.max(1,Math.round(Vm/p)),[p]),[_,b]=N.useState(()=>{const F=a?fc.findIndex(z=>z.slug===a):-1;return F>=0?Math.floor(F/Vm):0}),[k,x]=N.useState(""),[T,A]=N.useState([]),[B,U]=N.useState(0),[X,$]=N.useState(!1),[O,le]=N.useState(null),[H,ue]=N.useState(!1),[pe,ae]=N.useState(typeof navigator>"u"?!0:navigator.onLine);N.useEffect(()=>{const F=()=>ae(navigator.onLine);return window.addEventListener("online",F),window.addEventListener("offline",F),()=>{window.removeEventListener("online",F),window.removeEventListener("offline",F)}},[]);function _e(F){l(F),o(),uf(F)||Vh(F).then(z=>{z&&Hh(F,z)})}async function ge(F){if(!pe){le("Du er offline. Vælg fra «Bibliotek», eller find flere ikoner når du er online.");return}$(!0),le(null),ue(!0);try{const z=F==="random"?await zg():await Ih(k);A(z.icons),U(0),z.icons.length===0&&le("Ingen ikoner fundet. Prøv et andet ord.")}catch{le("Kunne ikke hente ikoner. Tjek din internetforbindelse."),A([])}finally{$(!1)}}const Ce=Math.ceil(fc.length/m),te=N.useMemo(()=>fc.slice(_*m,_*m+m),[_,m]),Ue=Math.ceil(T.length/m),we=N.useMemo(()=>T.slice(B*m,B*m+m),[T,B,m]),Xe=pe&&!X&&!O&&we.length>0;return N.useEffect(()=>{b(F=>Math.min(F,Math.max(0,Ce-1)))},[Ce]),N.useEffect(()=>{U(F=>Math.min(F,Math.max(0,Ue-1)))},[Ue]),u.jsx(Pt,{title:"Vælg et ikon",onClose:o,children:u.jsxs("div",{className:"icon-picker",children:[u.jsxs("div",{className:"icon-picker-head",children:[u.jsxs("div",{className:"icon-tabs",role:"tablist",children:[u.jsx("button",{type:"button",role:"tab","aria-selected":s==="library",className:s==="library"?"active":"",onClick:()=>d("library"),children:"Bibliotek"}),u.jsx("button",{type:"button",role:"tab","aria-selected":s==="search",className:s==="search"?"active":"",onClick:()=>d("search"),children:"Søg online"})]}),s==="library"?u.jsx("p",{className:"icon-picker-caption",children:"Tryk på et ikon for at vælge det."}):u.jsxs("form",{className:"icon-search",onSubmit:F=>{F.preventDefault(),ge("query")},children:[u.jsx("input",{type:"search",value:k,placeholder:"Søg (fx robot, bil, sensor)",onChange:F=>x(F.target.value),disabled:!pe,"aria-label":"Søg efter ikon",autoFocus:!0}),u.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!pe||X,children:"Søg"}),u.jsx("button",{type:"button",className:"btn icon-dice",onClick:()=>void ge("random"),disabled:!pe||X,title:"Vis tilfældige ikoner","aria-label":"Vis tilfældige ikoner",children:u.jsx(Pm,{})})]})]}),u.jsxs("div",{className:"icon-picker-body",children:[s==="library"&&u.jsx("div",{className:"icon-grid",ref:g,children:te.map(F=>u.jsx(Im,{src:Cs(F.svg),label:F.label,selected:F.slug===a,onClick:()=>_e(F.slug)},F.slug))}),s==="search"&&u.jsxs(u.Fragment,{children:[!pe&&u.jsx("p",{className:"icon-hint",children:"Du er offline. Vælg fra «Bibliotek», eller find flere ikoner når du er online."}),pe&&X&&u.jsx("p",{className:"icon-hint",children:"Henter ikoner…"}),pe&&!X&&O&&u.jsx("p",{className:"icon-hint icon-hint-error",children:O}),pe&&!X&&!O&&!H&&u.jsxs("p",{className:"icon-hint",children:["Skriv et ord og tryk ",u.jsx("strong",{children:"Søg"})," - eller tryk"," ",u.jsx("span",{className:"icon-hint-dice","aria-hidden":"true",children:u.jsx(Pm,{})})," ","for tilfældige ikoner."]}),Xe&&u.jsx("div",{className:"icon-grid",ref:g,children:we.map(F=>u.jsx(Im,{src:Cg(F),label:F,selected:F===a,onClick:()=>_e(F)},F))})]})]}),u.jsxs("div",{className:"icon-picker-foot",children:[s==="library"&&u.jsx(Gm,{current:_,total:Ce,onGo:b}),s==="search"&&Xe&&u.jsx(Gm,{current:B,total:Ue,onGo:U})]})]})})}function Im({src:a,label:l,selected:o,onClick:s}){return u.jsxs("button",{type:"button",className:`icon-tile ${o?"selected":""}`,onClick:s,"aria-label":l,"aria-pressed":o,title:l,children:[u.jsx("img",{src:a,alt:"",loading:"lazy"}),o&&u.jsx("span",{className:"icon-tile-check","aria-hidden":"true",children:"✓"})]})}function Pm(){return u.jsxs("svg",{className:"dice-glyph",viewBox:"0 0 24 24",width:22,height:22,"aria-hidden":"true",fill:"currentColor",children:[u.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"4",ry:"4",fill:"none",stroke:"currentColor",strokeWidth:"2"}),u.jsx("circle",{cx:"8",cy:"8",r:"1.7"}),u.jsx("circle",{cx:"16",cy:"8",r:"1.7"}),u.jsx("circle",{cx:"12",cy:"12",r:"1.7"}),u.jsx("circle",{cx:"8",cy:"16",r:"1.7"}),u.jsx("circle",{cx:"16",cy:"16",r:"1.7"})]})}const Fm=48;function Gm({current:a,total:l,onGo:o}){const s=N.useRef(null),[d,p]=N.useState(7);return N.useLayoutEffect(()=>{const g=s.current;if(!g)return;const m=()=>{const b=g.clientWidth-2*Fm;p(Math.max(1,Math.floor(b/Fm)))};m();const _=new ResizeObserver(m);return _.observe(g),()=>_.disconnect()},[]),l<=1?null:u.jsxs("div",{className:"icon-pager",ref:s,children:[u.jsx("button",{type:"button",className:"icon-pager-arrow",onClick:()=>o(Math.max(0,a-1)),disabled:a===0,"aria-label":"Forrige side",children:u.jsx(Xt,{name:"back",size:20})}),Fg(a,l,d).map(g=>u.jsx("button",{type:"button",className:`icon-pager-num ${g===a?"active":""}`,onClick:()=>o(g),"aria-label":`Side ${g+1}`,"aria-current":g===a?"page":void 0,children:g+1},g)),u.jsx("button",{type:"button",className:"icon-pager-arrow",onClick:()=>o(Math.min(l-1,a+1)),disabled:a===l-1,"aria-label":"Næste side",children:u.jsx(Xt,{name:"back",size:20,className:"flip-x"})})]})}function Gg(){const a=oe(H=>H.finishCreate),l=oe(H=>H.cancelCreate),[o,s]=N.useState(Pl),[d,p]=N.useState(!1),[g,m]=N.useState(!1),[_,b]=N.useState(!1),[k,x]=N.useState(!1),[T,A]=N.useState(oi),[B,U]=N.useState(As),[X,$]=N.useState(!1),O=H=>Number.isFinite(H)?Math.max(ii,Math.min(si,Math.round(H))):oi;async function le(){$(!0),await a(o,g,g&&_,g&&k,O(T),O(B))}return u.jsxs("div",{className:"screen",children:[u.jsx("header",{className:"topbar",children:u.jsx("h1",{children:"Opret Enhed"})}),u.jsxs("div",{className:"content create-body",children:[u.jsxs("button",{type:"button",className:"device-icon-pick",onClick:()=>p(!0),"aria-label":"Vælg ikon",children:[u.jsx(Os,{slug:o}),u.jsx("span",{className:"badge",children:u.jsx(Xt,{name:"plus",size:22})})]}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:g?"":"active",onClick:()=>m(!1),children:"Privat"}),u.jsx("button",{type:"button",className:g?"active":"",onClick:()=>m(!0),children:"Offentlig"})]}),g&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:_?"":"active",onClick:()=>b(!1),children:"Nej"}),u.jsx("button",{type:"button",className:_?"active":"",onClick:()=>b(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:k?"":"active",onClick:()=>x(!1),children:"Nej"}),u.jsx("button",{type:"button",className:k?"active":"",onClick:()=>x(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter (kolonner × rækker)"}),u.jsxs("div",{className:"row",style:{width:"100%"},children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"cols",children:"Kolonner"}),u.jsx("input",{id:"cols",type:"number",min:ii,max:si,value:Number.isNaN(T)?"":T,onChange:H=>A(parseInt(H.target.value,10)),onBlur:()=>A(O(T))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"rows",children:"Rækker"}),u.jsx("input",{id:"rows",type:"number",min:ii,max:si,value:Number.isNaN(B)?"":B,onChange:H=>U(parseInt(H.target.value,10)),onBlur:()=>U(O(B))})]})]}),u.jsxs("div",{className:"row",style:{marginTop:"auto",width:"100%"},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>l(),disabled:X,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:le,disabled:X,children:X?"Opretter...":"Opret"})]})]}),d&&u.jsx(Ph,{selected:o,onSelect:s,onClose:()=>p(!1)}),u.jsx("span",{className:"version",children:Rs})]})}const ci=8;function mc(a){return Math.max(5,Math.min(22,a))}function $g(a,l,o){const s=Math.max(1,a.length),d=(l-ci*2)/(s*.58),p=(o-ci*2)*.48;return mc(Math.min(d,p))}function _a(a,l,o){switch(o){case 90:return{x:-l,y:a};case 180:return{x:-a,y:-l};case 270:return{x:l,y:-a};default:return{x:a,y:l}}}function vc(a){return(360-a)%360}function Yg(a,l,o,s){const d=s===90||s===270;return $g(a,d?o:l,d?l:o)}function bc({name:a,width:l,height:o,rotation:s}){return u.jsx("span",{style:{display:"inline-block",fontWeight:800,fontSize:Yg(a,l,o,s),transform:s?`rotate(${s}deg)`:void 0,whiteSpace:s===90||s===270?"nowrap":void 0},children:a})}function Xg(a,l,o,s,d){const p=a.trim().split(/\s+/).filter(Boolean),g=Math.max(1,a.replace(/\s+/g,"").length+Math.max(0,p.length-1)*1.6),m=d?mc(Math.min(l/4.6,o/4.6,12)):0,_=d?m+ci:ci;if(s){const x=Math.max(1,o-_*2);return{fontSize:mc(Math.min(l*.48,x/(g*1.04))),endFontSize:m,centerInset:d?{top:_,bottom:_}:{}}}const b=Math.max(1,l-_*4.2);return{fontSize:mc(Math.min(o*.42,b/(g*.58))),endFontSize:m,centerInset:d?{left:_*2.1,right:_*2.1}:{}}}function Kg({control:a,rect:l,disabled:o,orientation:s,latestValue:d,toggleValue:p,radarPings:g=[],textValue:m,plotPoints:_=[],onButton:b,onSlider:k,onToggle:x,onJoystick:T,onDpad:A}){const B=N.useRef(!1),[U,X]=N.useState(!1),$={left:l.cx,top:l.cy,width:l.width,height:l.height};if(a.type==="button"){const O=()=>{o||!B.current||(B.current=!1,X(!1),b(a.name,!1))};return u.jsx("div",{className:"control",style:$,children:u.jsx("button",{className:`control-button ${U?"pressed":""}`,type:"button",disabled:o,style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},onPointerDown:le=>{var H,ue;o||(le.preventDefault(),(ue=(H=le.currentTarget).setPointerCapture)==null||ue.call(H,le.pointerId),B.current=!0,X(!0),b(a.name,!0))},onPointerUp:le=>{var H,ue;le.preventDefault(),(ue=(H=le.currentTarget).releasePointerCapture)==null||ue.call(H,le.pointerId),O()},onPointerCancel:O,onLostPointerCapture:O,children:u.jsx(bc,{name:a.name,width:l.width,height:l.height,rotation:s})})})}if(a.type==="toggle"){const O=!!p;return u.jsx("div",{className:"control",style:$,children:u.jsx("button",{className:`control-toggle ${O?"on":""}`,type:"button",disabled:o,"aria-pressed":O,style:{width:"100%",height:"100%"},onPointerDown:le=>{o||(le.preventDefault(),x(a.name,!O))},children:u.jsx(bc,{name:a.name,width:l.width,height:l.height,rotation:s})})})}return a.type==="radar"?u.jsx("div",{className:"control",style:$,children:u.jsx(Gh,{control:a,pings:g,width:l.width,height:l.height,rotation:s})}):a.type==="text"?u.jsx("div",{className:"control",style:$,children:u.jsx(Fh,{message:m??a.name,width:l.width,height:l.height,rotation:s})}):a.type==="plot"?u.jsx("div",{className:"control",style:$,children:u.jsx(Yh,{control:a,points:_,width:l.width,height:l.height})}):a.type==="joystick"?u.jsx("div",{className:"control",style:$,children:u.jsx(b_,{control:a,disabled:o,orientation:s,onJoystick:T,width:l.width,height:l.height})}):a.type==="dpad"?u.jsx("div",{className:"control",style:$,children:u.jsx(M_,{control:a,disabled:o,orientation:s,onDpad:A})}):u.jsx("div",{className:"control",style:$,children:u.jsx(v_,{control:a,disabled:o,orientation:s,latestValue:d,onSlider:k,width:l.width,height:l.height})})}function Qg(a,l,o){const d=(a.trim()||" ").split(`
`),p=d.reduce((T,A)=>A.split(/\s+/).filter(Boolean).reduce((U,X)=>Math.max(U,X.length),T),1),g=Math.max(1,Math.floor(p*1.9)),m=Math.max(d.length,d.reduce((T,A)=>T+Math.max(1,Math.ceil(Math.max(1,A.trim().length)/g)),0)),_=Math.max(1,l-ci*3),b=Math.max(1,o-ci*3),k=_/(p*.58),x=b/(m*1.16);return Math.max(7,Math.min(24,k,x))}function Fh({message:a,width:l,height:o,rotation:s=0}){const d=a.trim()||"...",p=s===90||s===270,g=Qg(d,p?o:l,p?l:o);return u.jsx("div",{className:"control-text",style:{width:"100%",height:"100%",fontSize:g},children:u.jsx("span",{style:{transform:s?`rotate(${s}deg)`:void 0},children:d})})}function Gh({control:a,pings:l,width:o,height:s,rotation:d=0,preview:p=!1}){const[,g]=N.useState(0),m=Math.max(120,a.radarFadeMs??1200),_=a.radarMinAngle??0,b=a.radarMaxAngle??180,k=sn(_),x=sn(b),T=Math.abs(b-_)>=360||k===x&&_!==b,A=Math.max(1,a.radarMaxDistance??200),B=Date.now(),U=l[l.length-1],X=d,$=sn(k+X),O=sn(x+X),le=i_(k,x),H=((U==null?void 0:U.angle)??le)+X,ue=p?[{id:"preview",angle:le,distance:A*.62,createdAt:B}]:l.filter(me=>B-me.createdAt<=m),pe=!T,ae=Math.max(8,Math.min(12,Math.min(o,s)*.16)),_e=Math.max(7,ae*.85),ge=0,Ce=0,te=1,Ue=n_(T,$,O,X,A),we=T?{x:-1.12,y:-1.12,width:2.24,height:2.24}:r_($,O,Ue.map(me=>me.point)),Xe=T?"":Wg(ge,Ce,te,$,O),F=Km(_),z=Km(b),Z=pe?a_($,O,we,o,s,F,z,ae):null,de=Ue.map(me=>{const E=$h(me.point,we,o,s);return{key:me.key,value:me.value,x:E.x,y:E.y}});N.useEffect(()=>{if(p||l.length===0)return;const me=window.setInterval(()=>g(E=>E+1),120);return()=>window.clearInterval(me)},[m,l.length,p]);const Ne=zn(ge,Ce,te,H);return u.jsxs("div",{className:"control-radar",style:{width:"100%",height:"100%"},children:[u.jsxs("svg",{width:o,height:s,viewBox:`${we.x} ${we.y} ${we.width} ${we.height}`,preserveAspectRatio:"none","aria-hidden":"true",children:[T?u.jsx("circle",{className:"radar-sector-fill",cx:ge,cy:Ce,r:te}):u.jsx("path",{className:"radar-sector-fill",d:Xe}),[.25,.5,.75,1].map(me=>T?u.jsx("circle",{className:"radar-ring",cx:ge,cy:Ce,r:te*me},me):u.jsx("path",{className:"radar-ring",d:Zg(ge,Ce,te*me,$,O)},me)),!T&&u.jsx($m,{cx:ge,cy:Ce,radius:te,angle:$}),!T&&u.jsx($m,{cx:ge,cy:Ce,radius:te,angle:O}),u.jsx("line",{className:"radar-sweep",x1:ge,y1:Ce,x2:Ne.x,y2:Ne.y}),ue.map(me=>{const E=p?0:B-me.createdAt,V=Math.max(0,1-E/m),ne=Math.max(0,Math.min(A,me.distance)),ie=zn(ge,Ce,te*(ne/A),me.angle+X);return u.jsx("circle",{className:"radar-ping",cx:ie.x,cy:ie.y,r:Math.max(.025,Math.min(we.width,we.height)*.025),opacity:V},me.id)})]}),pe&&Z&&u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"radar-angle-label",style:{left:Z.min.x,top:Z.min.y,fontSize:ae},children:F}),u.jsx("span",{className:"radar-angle-label",style:{left:Z.max.x,top:Z.max.y,fontSize:ae},children:z})]}),de.map(me=>u.jsx("span",{className:"radar-range-label",style:{left:me.x,top:me.y,fontSize:_e},children:me.value},me.key))]})}function $m({cx:a,cy:l,radius:o,angle:s}){const d=zn(a,l,o,s);return u.jsx("line",{className:"radar-boundary",x1:a,y1:l,x2:d.x,y2:d.y})}function zn(a,l,o,s){const d=(sn(s)-90)*Math.PI/180;return{x:a+Math.cos(d)*o,y:l+Math.sin(d)*o}}function Wg(a,l,o,s,d){const p=zn(a,l,o,s),g=zn(a,l,o,d),m=Sc(s,d)>180?1:0;return`M ${a} ${l} L ${p.x} ${p.y} A ${o} ${o} 0 ${m} 1 ${g.x} ${g.y} Z`}function Zg(a,l,o,s,d){const p=zn(a,l,o,s),g=zn(a,l,o,d),m=Sc(s,d)>180?1:0;return`M ${p.x} ${p.y} A ${o} ${o} 0 ${m} 1 ${g.x} ${g.y}`}function Sc(a,l){const o=sn(a),s=sn(l),d=s>=o?s-o:360-o+s;return d===0?360:d}const sc=[.25,.5,.75,1],Jg=.1,e_=.85,t_=55;function n_(a,l,o,s,d){const p=(_,b,k)=>({key:`${_}-${b}`,value:Math.round(d*b),point:zn(0,0,b,k)});if(a){const _=sn(180+s);return sc.map(b=>p("full",b,_))}const g=360-Sc(l,o);if(g<t_){const _=sn(o+g/2);return sc.map(b=>p("mid",b,_))}const m=(_,b,k)=>{const x=Math.asin(Math.min(e_,Jg/b))*180/Math.PI;return sn(_+k*x)};return[...sc.map(_=>p("min",_,m(l,_,-1))),...sc.map(_=>p("max",_,m(o,_,1)))]}function r_(a,l,o=[]){const s=[{x:0,y:0},zn(0,0,1,a),zn(0,0,1,l),...o];for(const x of[0,90,180,270])l_(x,a,l)&&s.push(zn(0,0,1,x));const d=Math.min(...s.map(x=>x.x)),p=Math.max(...s.map(x=>x.x)),g=Math.min(...s.map(x=>x.y)),m=Math.max(...s.map(x=>x.y)),_=Math.max(.1,p-d),b=Math.max(.1,m-g),k=Math.max(_,b)*.24;return{x:d-k,y:g-k,width:_+k*2,height:b+k*2}}function l_(a,l,o){const s=sn(l),d=sn(a),p=Sc(l,o),g=sn(d-s);return g>=0&&g<=p}function a_(a,l,o,s,d,p,g,m){const b=zn(0,0,1.1,a),k=zn(0,0,1.1,l);return{min:Ym(b,o,s,d,p,m),max:Ym(k,o,s,d,g,m)}}function $h(a,l,o,s){return{x:(a.x-l.x)/l.width*o,y:(a.y-l.y)/l.height*s}}function Ym(a,l,o,s,d,p){const g=$h(a,l,o,s),m=Math.max(10,d.length*p*.62),_=p,b=7;return{x:Xm(g.x,m/2+b,Math.max(m/2+b,o-m/2-b)),y:Xm(g.y,_/2+b,Math.max(_/2+b,s-_/2-b))}}function Xm(a,l,o){return Math.max(l,Math.min(o,a))}function Km(a){return`${Math.round(a)}`}function sn(a){return Number.isFinite(a)?(a%360+360)%360:0}function i_(a,l){const o=sn(a),s=sn(l),d=s>=o?s-o:360-o+s;return sn(o+d/2)}function ws(a){return Number.isInteger(a)?String(a):a.toFixed(1)}function Kd(a,l){return Math.max(l,a.length*l*.58)}function Qm(a,l,o){if(Kd(a,l)<=o)return a;const s=Math.max(1,Math.floor(o/Math.max(1,l*.58))-3);return s<=1?a.slice(0,1):`${a.slice(0,s)}...`}function Wm(a,l){return a.label?a.label:l}const s_=3;function Ms(a){return a.split(`
`).map(l=>l.trim()).slice(0,s_)}function o_(a){const l=a.label?Ms(a.label)[0]:"";return l||new Date(a.createdAt).toLocaleTimeString("da-DK",{hour:"2-digit",minute:"2-digit"})}function c_({anchorRect:a,timeText:l,valueText:o}){const s=N.useRef(null),[d,p]=N.useState(null);return N.useLayoutEffect(()=>{const g=s.current;if(!g)return;const m=()=>{const{width:_,height:b}=g.getBoundingClientRect(),k=8,x=window.innerWidth,T=window.innerHeight,A=a.top,B=T-a.bottom,X=A>=b+k||A>=B?Math.max(4,a.top-b-k):Math.min(T-b-4,a.bottom+k),$=a.left+a.width/2,O=Math.max(4,Math.min(x-_-4,$-_/2));p({left:O,top:X})};return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[a]),zh.createPortal(u.jsxs("div",{ref:s,className:"plot-tooltip",style:{left:(d==null?void 0:d.left)??a.left,top:(d==null?void 0:d.top)??a.top,visibility:d?"visible":"hidden"},children:[u.jsxs("div",{className:"plot-tooltip-row",children:["Tid ",l]}),u.jsx("div",{className:"plot-tooltip-row",children:o})]}),document.body)}const Ud="pkp:plot-popup-open";let u_=0;const d_=18;function f_(a){if(a<=0)return[];if(a<=5)return Array.from({length:a},(o,s)=>s);const l=new Set([0,a-1]);return l.add(Math.round((a-1)/2)),a>=10&&(l.add(Math.round((a-1)/4)),l.add(Math.round((a-1)*3/4))),[...l].sort((o,s)=>o-s)}function m_(a,l){return a<=0||l==="none"?[]:l==="labels"?Array.from({length:a},(o,s)=>s):a===1?[0]:[0,a-1]}function h_(a,l){const o=Date.now();return Array.from({length:a},(s,d)=>{const p=d/Math.max(1,a-1),g=l==="bar"?.15+.7*Math.abs(Math.sin(p*Math.PI*1.4)):l==="dot"?.5+.35*Math.sin(d*2.3)*Math.cos(d*.7):.5+.4*Math.sin(p*Math.PI*2.2);return{id:`demo-${d}`,value:g,createdAt:o}})}function Yh({control:a,points:l,width:o,height:s,preview:d=!1}){const p=a.plotMin??0,g=a.plotMax??100,m=g>p?g-p:1,_=Math.max(2,a.plotHistory??30),b=a.plotStyle==="bar"?"bar":a.plotStyle==="dot"?"dot":"line",k=a.plotXAxis??"labels",x=a.plotYAxis??"range",T=Math.max(8,Math.min(45,a.plotLabelMaxPercent??24)),A=d?h_(_,b):l,[B,U]=N.useState(null),X=N.useRef(new Map),[$,O]=N.useState(null),[le,H]=N.useState(null),ue=N.useMemo(()=>u_+=1,[]),pe=N.useMemo(()=>typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches,[]);N.useEffect(()=>{$!=null&&window.dispatchEvent(new CustomEvent(Ud,{detail:ue}))},[$,ue]),N.useEffect(()=>{const re=Te=>{Te.detail!==ue&&O(null)};return window.addEventListener(Ud,re),()=>window.removeEventListener(Ud,re)},[ue]),N.useLayoutEffect(()=>{if(!$){H(null);return}const re=X.current.get($);if(!re){H(null);return}const Te=()=>H(re.getBoundingClientRect());return Te(),window.addEventListener("resize",Te),window.addEventListener("scroll",Te,!0),()=>{window.removeEventListener("resize",Te),window.removeEventListener("scroll",Te,!0)}},[$]),N.useEffect(()=>{if(!pe||!$)return;const re=()=>O(null);return window.addEventListener("click",re),()=>window.removeEventListener("click",re)},[pe,$]),N.useEffect(()=>{O(null)},[B]);function ae(re){return Te=>{Te?X.current.set(re,Te):X.current.delete(re)}}function _e(re){return pe?{onClick:Te=>{Te.stopPropagation(),O(nt=>nt===re?null:re)}}:{onPointerEnter:()=>O(re),onPointerLeave:()=>O(Te=>Te===re?null:Te)}}const ge=Math.max(1,Math.min(o,s)),Ce=Math.max(8,Math.min(13,ge*.14)),te=Math.max(6,Math.min(10,Ce*.72)),Ue=Math.max(6,Math.min(10,Ce*.74)),we=Math.max(6,Math.min(16,ge*.12)),Xe=Math.max(3,ge*.035),F=Math.max(2,ge*.02),z=Math.max(18,o*(T/100)),Z=Math.max(18,s*(T/100)),de=te*1.15,Ne=Ue*1.15,me=x==="range"?[ws(p),ws(g)]:x==="labels"?A.map(re=>ws(re.value)):[],E=me.length>0?Math.min(z,Math.max(...me.flatMap(re=>Ms(re)).map(re=>Kd(re,Ue)))+4):0,V=E>0?F+E+Xe:we,ne=we+Ce*1.45,ie=Math.max(V+1,o-we),se=Math.max(1,ie-V),xe=Math.max(1.5,Math.min(3.4,ge*.045)),Re=Math.max(xe+1,Math.min(ge*.09,xe*2)),Ke=A.length>1?Math.max(xe*2,Math.min(14,se*.045)):0,Be=Math.max(1,se-Ke*2),he=Math.max(1,Math.min(A.length,_)),Ee=A.length>he,ot=!d;let I=A.length;if(Ee&&B){const re=A.findIndex(Te=>Te.id===B);re>=0&&(I=re+1)}const J=Math.max(0,I-he),ee=Ee?A.slice(J,I):A,Ae=Ee&&J>0,Qe=Ee&&I<A.length,Ve=$?ee.find(re=>re.id===$):void 0,We=()=>{J<=0||U(A[I-2].id)},De=()=>{if(I>=A.length)return;const re=I;U(re>=A.length-1?null:A[re].id)},Et=m_(ee.length,k),on=Et.map(re=>Wm(ee[re],re===ee.length-1?"nu":`${re+1}`)).map(re=>Ms(re)),gt=on.length>0?Math.max(1,...on.map(re=>re.length)):1,Mr=k!=="labels"?1/0:b==="bar"?Be/Math.max(1,ee.length):Be/Math.max(1,ee.length-1);let En=gt;for(;En>1&&En*de>Mr;)En-=1;const tr=on.length>0?Math.min(Z,Math.max(...on.flat().map(re=>Kd(re,te)))+8):0,Ft=Math.max(3,te*.48),tn=Math.max(4,te*.6),Nr=Math.max(Ft+tn+te,Ft+tn+tr+(En-1)*de),al=Math.max(1,s-ne-Nr),nn=ne+al,qn=re=>{const Te=Math.max(0,Math.min(1,(re-p)/m));return ne+(1-Te)*al},at=re=>ee.length>1?V+Ke+re/(ee.length-1)*Be:V+se/2,_t=ee.length>0?Be/ee.length:Be,mt=Math.max(1,_t*.62),il=re=>ee.length>1?V+Ke+re*_t+_t/2:V+se/2,ui=re=>b==="bar"?il(re):at(re),fr=Math.max(1.5,ge*.02),mn=ee.map((re,Te)=>({x:at(Te),y:qn(re.value)})),mr=x==="labels"?f_(ee.length):[],hn=(re,Te,nt)=>{const wt=Ms(Te);return u.jsxs("g",{children:[u.jsx("line",{className:"plot-axis-tick",x1:V-Ft,y1:nt,x2:V,y2:nt}),wt.map((Fe,ct)=>{const Ze=nt+(ct-(wt.length-1)/2)*Ne;return u.jsx("text",{className:"plot-y-axis-label",x:V-Xe,y:Ze,fontSize:Ue,textAnchor:"end",dominantBaseline:"middle",children:Qm(Fe,Ue,z)},ct)})]},re)};return u.jsxs("div",{className:"control-plot",style:{width:"100%",height:"100%"},children:[u.jsxs("svg",{width:o,height:s,viewBox:`0 0 ${o} ${s}`,"aria-hidden":"true",children:[[.25,.5,.75].map(re=>u.jsx("line",{className:"plot-grid-line",x1:V,y1:ne+re*al,x2:ie,y2:ne+re*al},re)),u.jsx("line",{className:"plot-axis-line",x1:V,y1:nn,x2:ie,y2:nn}),u.jsx("line",{className:"plot-axis-line",x1:V,y1:ne,x2:V,y2:nn}),x==="range"&&me.map((re,Te)=>hn(`${re}-${Te}`,re,Te===0?nn:ne)),x==="labels"&&mr.map(re=>{const Te=ee[re];return hn(`y-${Te.id}`,ws(Te.value),qn(Te.value))}),Et.map(re=>{const Te=ee[re],nt=ui(re),wt=nn+Ft+tn,Fe=Wm(Te,re===ee.length-1?"nu":`${re+1}`),ct=Ms(Fe).slice(0,En);return u.jsxs("g",{children:[u.jsx("line",{className:"plot-axis-tick",x1:nt,y1:nn,x2:nt,y2:nn+Ft}),ct.map((Ze,Ht)=>{const hr=nt+Ht*de;return u.jsx("text",{className:"plot-axis-tick-label",x:hr,y:wt,fontSize:te,textAnchor:"end",dominantBaseline:"middle",transform:`rotate(-90 ${hr} ${wt})`,children:Qm(Ze,te,Z)},Ht)})]},`x-${Te.id}`)}),b==="bar"?ee.map((re,Te)=>{const nt=ee.length>1?V+Ke+Te*_t+(_t-mt)/2:V+(se-mt)/2,wt=!Qe&&Te===ee.length-1,Fe=re.value===0,ct=Math.max(0,nn-qn(re.value)),Ze=Fe?Math.max(3,fr*2):Math.max(fr,ct),Ht=nn-Ze,hr=Math.max(ct,d_),jr=nn-hr;return u.jsxs("g",{children:[u.jsx("rect",{className:`plot-bar ${wt?"latest":""} ${Fe?"zero":""}`,x:nt,y:Ht,width:mt,height:Ze}),u.jsx("rect",{ref:ae(re.id),className:"plot-bar-hit",x:nt,y:jr,width:mt,height:hr,..._e(re.id)})]},re.id)}):u.jsxs(u.Fragment,{children:[b==="line"&&mn.length>1&&u.jsx("polyline",{className:"plot-line",points:mn.map(re=>`${re.x},${re.y}`).join(" ")}),mn.map((re,Te)=>{const nt=ee[Te],wt=!Qe&&Te===mn.length-1;return u.jsxs("g",{children:[u.jsx("circle",{className:`plot-dot ${wt?"latest":""}`,cx:re.x,cy:re.y,r:wt?Re:xe}),u.jsx("circle",{ref:ae(nt.id),className:"plot-dot-hit",cx:re.x,cy:re.y,r:Math.max(Re,9),..._e(nt.id)})]},nt.id)})]})]}),u.jsx("span",{className:"plot-name-label",style:{fontSize:Ce,left:V+6,maxWidth:Math.max(20,o-V-14-(ot?68:0))},children:a.name}),ot&&u.jsxs("div",{className:"plot-page-controls",children:[u.jsx("button",{type:"button",className:"plot-page-btn",disabled:!Ae,onClick:We,"aria-label":`${a.name}: vis ældre data`,children:u.jsx(Xt,{name:"chevronLeft",size:18})}),u.jsx("button",{type:"button",className:"plot-page-btn",disabled:!Qe,onClick:De,"aria-label":`${a.name}: vis nyere data`,children:u.jsx(Xt,{name:"chevronRight",size:18})})]}),Ve&&le&&u.jsx(c_,{anchorRect:le,timeText:o_(Ve),valueText:`${a.name} ${ws(Ve.value)}`})]})}function p_(a,l){if(!l)return a;const o=a.trim().split(/\s+/).filter(Boolean);return u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",lineHeight:1.02,textAlign:"center",gap:"0.42em"},children:o.map((s,d)=>u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[...s].map((p,g)=>u.jsx("span",{children:p},`${p}-${g}`))},`${s}-${d}`))})}function g_(a){const l={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},o=4;return a===0?{low:{...l,left:o,top:0,bottom:0},high:{...l,right:o,top:0,bottom:0}}:a===180?{low:{...l,right:o,top:0,bottom:0},high:{...l,left:o,top:0,bottom:0}}:a===90?{low:{...l,bottom:o,left:0,right:0},high:{...l,top:o,left:0,right:0}}:{low:{...l,top:o,left:0,right:0},high:{...l,bottom:o,left:0,right:0}}}function __({name:a,vertical:l,rotation:o,color:s,fontSize:d,endFontSize:p,centerInset:g,lowLabel:m,highLabel:_,showEnds:b}){const k=b?g_(o):null;return u.jsxs("div",{style:{position:"absolute",inset:0,color:s},children:[u.jsx("div",{style:{position:"absolute",inset:0,...g,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:d,textAlign:"center",pointerEvents:"none"},children:p_(a,l)}),k&&u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{...k.low,fontWeight:800,fontSize:p},children:m}),u.jsx("div",{style:{...k.high,fontWeight:800,fontSize:p},children:_})]})]})}function Xh({name:a,rotation:l,width:o,height:s,value:d,showEnds:p=!1,fillColor:g="var(--red)",lowLabel:m="0",highLabel:_="100"}){const b=l===90||l===270,{fontSize:k,endFontSize:x,centerInset:T}=Xg(a,o,s,b,p);let A,B;l===0?(A={left:0,top:0,bottom:0,width:`${d}%`},B={left:0,top:0}):l===180?(A={right:0,top:0,bottom:0,width:`${d}%`},B={right:0,top:0}):l===90?(A={left:0,right:0,bottom:0,height:`${d}%`},B={left:0,bottom:0}):(A={left:0,right:0,top:0,height:`${d}%`},B={left:0,top:0});const U=X=>u.jsx(__,{name:a,vertical:b,rotation:l,color:X,fontSize:k,endFontSize:x,centerInset:T,lowLabel:m,highLabel:_,showEnds:p});return u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{position:"absolute",left:0,top:0,width:`${o}px`,height:`${s}px`},children:U("var(--red)")}),u.jsx("div",{style:{position:"absolute",background:g,overflow:"hidden",...A},children:u.jsx("div",{style:{position:"absolute",width:`${o}px`,height:`${s}px`,...B},children:U("var(--white)")})})]})}function v_({control:a,disabled:l,orientation:o,latestValue:s,onSlider:d,width:p,height:g}){const m=N.useRef(null),_=a.sliderMin??0,b=a.sliderMax??100,[k,x]=N.useState(()=>s===void 0?Zm(a.sliderRecenter??"none"):Jm(s,_,b)),T=N.useRef(null),A=o;N.useEffect(()=>{s!==void 0&&(x(Jm(s,_,b)),T.current=s)},[s,_,b]);function B(O){const le=m.current;if(!le)return 0;const H=le.getBoundingClientRect();let ue;return A===0?ue=(O.clientX-H.left)/H.width:A===180?ue=1-(O.clientX-H.left)/H.width:A===90?ue=1-(O.clientY-H.top)/H.height:ue=(O.clientY-H.top)/H.height,Math.max(0,Math.min(1,ue))}function U(O){l||X(B(O))}function X(O){const le=Math.round(O*100),H=Math.round(_+(b-_)*O);x(le),H!==T.current&&(T.current=H,d(a.name,H))}function $(){const O=a.sliderRecenter??"none";l||O==="none"||X(Zm(O)/100)}return u.jsx("div",{ref:m,className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",touchAction:"none"},onPointerDown:O=>{l||(O.preventDefault(),O.currentTarget.setPointerCapture(O.pointerId),U(O))},onPointerMove:O=>{O.buttons!==0&&U(O)},onPointerUp:$,onPointerCancel:$,onLostPointerCapture:$,children:u.jsx(Xh,{name:a.name,rotation:A,width:p,height:g,value:k,showEnds:!0,lowLabel:String(_),highLabel:String(b)})})}function Zm(a){return a==="bottom"?0:a==="top"?100:a==="middle"?50:0}function Jm(a,l,o){return o===l?0:Math.max(0,Math.min(100,Math.round((a-l)/(o-l)*100)))}function eh(a,l,o){return Math.round(l+(o-l)*(a+1)/2)}function th(a,l){return a==="bottom"?l?1:-1:a==="top"?l?-1:1:0}function nh(a){return{nx:th(a.joystickXRecenter,!1),ny:th(a.joystickYRecenter,!0)}}function Kh(a,l){const o=Math.min(a,l),s=Math.max(6,o*.16),d=Math.max(1,o/2-s-2);return{knobRadius:s,reach:d}}function Qh({control:a,width:l,height:o,pos:s,rotation:d=0,dragging:p=!1}){const{knobRadius:g,reach:m}=Kh(l,o),_=Math.max(7,Math.min(14,g*.62)),b=Math.max(7,Math.min(12,Math.min(l,o)*.1)),k=[{key:"xmax",value:a.joystickXMax??100,lx:1,ly:0},{key:"xmin",value:a.joystickXMin??-100,lx:-1,ly:0},{key:"ymax",value:a.joystickYMax??100,lx:0,ly:-1},{key:"ymin",value:a.joystickYMin??-100,lx:0,ly:1}];return u.jsxs("div",{className:"control-joystick",style:{width:"100%",height:"100%",position:"relative"},children:[u.jsx("div",{className:"joystick-oval",style:{position:"absolute",left:"50%",top:"50%",width:m*2,height:m*2,transform:"translate(-50%, -50%)"}}),k.map(x=>{const T=_a(x.lx,x.ly,d);return u.jsx("span",{className:"joystick-edge-label",style:{position:"absolute",left:"50%",top:"50%",fontSize:b,transform:`translate(-50%, -50%) translate(${T.x*m}px, ${T.y*m}px) rotate(${d}deg)`},children:x.value},x.key)}),u.jsx("div",{className:"joystick-knob",style:{position:"absolute",left:"50%",top:"50%",width:g*2,height:g*2,fontSize:_,transform:`translate(calc(-50% + ${s.nx*m}px), calc(-50% + ${s.ny*m}px))`,transition:p?"none":"transform 0.12s ease-out"},children:u.jsx("span",{style:{display:"inline-block",transform:d?`rotate(${d}deg)`:void 0,whiteSpace:d===90||d===270?"nowrap":void 0},children:a.name})})]})}function b_({control:a,disabled:l,orientation:o,onJoystick:s,width:d,height:p}){const g=o,m=N.useRef(null),[_,b]=N.useState(()=>{const le=nh(a),H=_a(le.nx,le.ny,g);return{nx:H.x,ny:H.y}}),k=N.useRef(!1),x=N.useRef(null),T=a.joystickXMin??-100,A=a.joystickXMax??100,B=a.joystickYMin??-100,U=a.joystickYMax??100;function X(le,H){const ue=_a(le,H,vc(g)),pe=eh(ue.x,T,A),ae=eh(-ue.y,B,U);(!x.current||x.current.x!==pe||x.current.y!==ae)&&(x.current={x:pe,y:ae},s(a.name,pe,ae))}function $(le){const H=m.current;if(!H)return;const ue=H.getBoundingClientRect(),{reach:pe}=Kh(ue.width,ue.height);let ae=(le.clientX-(ue.left+ue.width/2))/pe,_e=(le.clientY-(ue.top+ue.height/2))/pe;const ge=Math.hypot(ae,_e);ge>1&&(ae/=ge,_e/=ge),b({nx:ae,ny:_e}),X(ae,_e)}function O(){const le=a.joystickXRecenter??"middle",H=a.joystickYRecenter??"middle";if(le==="none"&&H==="none")return;const ue=_a(_.nx,_.ny,vc(g)),pe=nh(a),ae={x:le==="none"?ue.x:pe.nx,y:H==="none"?ue.y:pe.ny},_e=_a(ae.x,ae.y,g),ge={nx:_e.x,ny:_e.y};k.current=!1,b(ge),X(ge.nx,ge.ny)}return u.jsx("div",{ref:m,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:le=>{l||(le.preventDefault(),le.currentTarget.setPointerCapture(le.pointerId),k.current=!0,$(le))},onPointerMove:le=>{l||!k.current||le.buttons===0||$(le)},onPointerUp:O,onPointerCancel:O,onLostPointerCapture:O,children:u.jsx(Qh,{control:a,width:d,height:p,pos:_,rotation:g,dragging:k.current})})}const y_=[{direction:"up",rotate:0},{direction:"right",rotate:90},{direction:"down",rotate:180},{direction:"left",rotate:270}],w_="M 34 30 L 34 15 Q 34 8 41 8 L 59 8 Q 66 8 66 15 L 66 30 L 50 46 L 34 30 Z",x_=.1,k_={up:"OP",down:"NED",left:"VENSTRE",right:"HØJRE"},S_={up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]},E_=[{pos:"up",x:50,y:23},{pos:"right",x:78,y:50},{pos:"down",x:50,y:77},{pos:"left",x:22,y:50}];function Qd(a,l){return Math.hypot(a,l)<x_?null:Math.abs(a)>=Math.abs(l)?a>0?"right":"left":l>0?"down":"up"}function T_(a,l){const[o,s]=S_[a],d=_a(o,s,vc(l));return Qd(d.x,d.y)??a}function Wh({control:a,active:l=null,rotation:o=0}){return u.jsx("div",{className:"control-dpad",style:{width:"100%",height:"100%"},children:u.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet",children:[y_.map(s=>u.jsx("path",{className:`dpad-arm ${l===s.direction?"active":""}`,transform:`rotate(${s.rotate} 50 50)`,d:w_},s.direction)),E_.map(s=>u.jsx("text",{className:`dpad-label ${l===s.pos?"active":""}`,x:s.x,y:s.y,textAnchor:"middle",dominantBaseline:"central",transform:o?`rotate(${o} ${s.x} ${s.y})`:void 0,children:k_[T_(s.pos,o)]},s.pos))]})})}function M_({control:a,disabled:l,orientation:o,onDpad:s}){const d=N.useRef(null),p=N.useRef(null),g=N.useRef(!1),[m,_]=N.useState(null);function b(A){const B=d.current;if(!B)return{screen:null,logical:null};const U=B.getBoundingClientRect(),X=Math.min(U.width,U.height)/2,$=(A.clientX-(U.left+U.width/2))/X,O=(A.clientY-(U.top+U.height/2))/X,le=Qd($,O),H=_a($,O,vc(o)),ue=Qd(H.x,H.y);return{screen:le,logical:ue}}function k(A){const B=d.current;if(!B)return!1;const U=B.getBoundingClientRect(),X=(A.clientX-U.left)/U.width,$=(A.clientY-U.top)/U.height;return X>=0&&X<=1&&$>=0&&$<=1}function x(A){A.logical!==p.current&&(p.current&&s(a.name,p.current,!1),p.current=A.logical,A.logical&&s(a.name,A.logical,!0)),_(A.screen)}function T(){g.current=!1,x({screen:null,logical:null})}return u.jsx("div",{ref:d,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:A=>{l||!k(A)||(A.preventDefault(),A.currentTarget.setPointerCapture(A.pointerId),g.current=!0,x(b(A)))},onPointerMove:A=>{l||!g.current||A.buttons===0||x(b(A))},onPointerUp:T,onPointerCancel:T,onLostPointerCapture:T,children:u.jsx(Wh,{control:a,active:m,rotation:o})})}const N_={button:"Knapper",slider:"Slidere",toggle:"Toggleknapper",radar:"Radar",text:"Tekstfelter",joystick:"Joysticks",dpad:"Dpads",plot:"Grafer"},j_=["button","slider","toggle","radar","text","joystick","dpad","plot"];function R_({unplaced:a,onAdd:l,onClose:o}){const s=N.useMemo(()=>j_.filter(m=>a.some(_=>_.type===m)),[a]),[d,p]=N.useState(s[0]??"button"),g=a.filter(m=>m.type===d);return N.useEffect(()=>{s.length>0&&!s.includes(d)&&p(s[0])},[s,d]),u.jsxs(Pt,{title:"Tilføj kontrol",onClose:o,children:[s.length>1&&u.jsx("div",{className:"segmented add-modal-tabs",children:s.map(m=>u.jsx("button",{type:"button",className:d===m?"active":"",onClick:()=>p(m),children:N_[m]},m))}),u.jsx("div",{className:"add-lists",children:s.length===0?u.jsx("div",{className:"device-list-empty",children:"Alle kontroller er allerede placeret."}):g.map(m=>u.jsxs("button",{type:"button",className:"add-entry",onClick:()=>l(m.name),children:[u.jsx("span",{children:m.name}),u.jsx("span",{className:"iconbtn",children:u.jsx(Xt,{name:"plus",size:22})})]},m.name))})]})}function Zh(a){const[l,o]=N.useState({w:0,h:0}),s=N.useRef(null),d=N.useRef(null);return N.useLayoutEffect(()=>{var _;const p=a.current;if(s.current===p)return;if((_=d.current)==null||_.disconnect(),d.current=null,s.current=p,!p){o(b=>b.w===0&&b.h===0?b:{w:0,h:0});return}const g=()=>{const b={w:p.clientWidth,h:p.clientHeight};o(k=>k.w===b.w&&k.h===b.h?k:b)};g();const m=new ResizeObserver(g);m.observe(p),d.current=m}),N.useEffect(()=>()=>{var p;(p=d.current)==null||p.disconnect(),d.current=null,s.current=null},[]),l}function Ds(a){return a.centerX2!==null&&a.centerY2!==null&&a.spanX!==null&&a.spanY!==null}const A_=4,C_=5;function D_(a){return a==="joystick"||a==="dpad"?{spanX:6,spanY:6}:a==="plot"?{spanX:7,spanY:4}:{spanX:A_,spanY:C_}}function qd(a){if(!Ds(a))return null;const l=a.centerX2/2,o=a.centerY2/2;return{x0:l-a.spanX/2,x1:l+a.spanX/2,y0:o-a.spanY/2,y1:o+a.spanY/2}}function Jh(a,l,o=.02){return a.x0<l.x1-o&&l.x0<a.x1-o&&a.y0<l.y1-o&&l.y0<a.y1-o}function O_(a,l,o){const s=(o.cols-1)*2,d=(o.rows-1)*2,p=[];for(let g=l;g<=d-l;g+=2)for(let m=a;m<=s-a;m+=2)p.push({centerX2:m,centerY2:g});return p}function rh(a,l,o,s){const d=O_(a,l,s).filter(p=>{const g={x0:p.centerX2/2-a/2,x1:p.centerX2/2+a/2,y0:p.centerY2/2-l/2,y1:p.centerY2/2+l/2};return!o.some(m=>Jh(g,m))});return d.length===0?null:d[Math.floor(Math.random()*d.length)]}function L_(a,l){return(a-l.margin)/l.stepX}function B_(a,l){return(l.areaH-a-l.margin)/l.stepY}function Hd(a,l,o,s,d,p){if(a.spanX===null||a.spanY===null||a.centerX2===null||a.centerY2===null)return a;if(l==="left"||l==="right"){const b=Math.round(L_(s,p));if(l==="right"){const A=Math.max(o+1,Math.min(p.cols-1,b))-o;return{...a,spanX:A,centerX2:o*2+A}}const k=Math.min(o-1,Math.max(0,b)),x=o-k;return{...a,spanX:x,centerX2:o*2-x}}const g=Math.round(B_(d,p));if(l==="top"){const k=Math.max(o+1,Math.min(p.rows-1,g))-o;return{...a,spanY:k,centerY2:o*2+k}}const m=Math.min(o-1,Math.max(0,g)),_=o-m;return{...a,spanY:_,centerY2:o*2-_}}function z_(){const a=oe(I=>I.layout),l=oe(I=>I.active),o=oe(I=>I.saveLayout),s=oe(I=>I.setEditMode),d=oe(I=>I.askConfirm),p=!!(l!=null&&l.canEdit),[g,m]=N.useState(()=>a.map(I=>({...I}))),[_,b]=N.useState(null),[k,x]=N.useState(!1),[T,A]=N.useState(null),[B,U]=N.useState(null),[X,$]=N.useState(null),[O,le]=N.useState(!1),[H,ue]=N.useState(!1),pe=N.useRef(null),ae=N.useRef(null),_e=N.useRef(null),ge=Zh(ae),Ce=ge.w>0&&ge.h>0,te=Dh(ge.w,ge.h,l==null?void 0:l.gridCols,l==null?void 0:l.gridRows),Ue=N.useMemo(()=>Ce?sg(te):[],[te,Ce]),we=g.filter(Ds),Xe=g.filter(I=>!Ds(I)),F=N.useMemo(()=>{const I=new Set;for(let J=0;J<we.length;J+=1)for(let ee=J+1;ee<we.length;ee+=1){const Ae=qd(we[J]),Qe=qd(we[ee]);Ae&&Qe&&Jh(Ae,Qe)&&(I.add(we[J].name),I.add(we[ee].name))}return I},[we]),z=F.size>0,Z=N.useMemo(()=>lh(g)!==lh(a),[g,a]),de=N.useMemo(()=>{if(!T||!B)return null;const I=g.find(Ae=>Ae.name===T);if(!I||I.spanX===null||I.spanY===null)return null;const J=Dd(B.cx,B.cy,I.spanX,I.spanY,te),ee=Ts({...I,centerX2:J.centerX2,centerY2:J.centerY2},te);return ee?{name:I.name,rect:ee}:null},[g,T,B,te]);function Ne(I,J){m(ee=>ee.map(Ae=>Ae.name===I?J(Ae):Ae))}function me(I){const J=ae.current;if(!J)return{x:0,y:0};const ee=J.getBoundingClientRect(),Ae=J.clientWidth/ee.width,Qe=J.clientHeight/ee.height;return{x:Math.max(0,Math.min(J.clientWidth,(I.clientX-ee.left)*Ae)),y:Math.max(0,Math.min(J.clientHeight,(I.clientY-ee.top)*Qe))}}function E(I){var Et;const J=ae.current;if(!J)return{cx:0,cy:0};const ee=J.getBoundingClientRect(),Ae=J.clientWidth/ee.width,Qe=J.clientHeight/ee.height,Ve=(Et=pe.current)==null?void 0:Et.getBoundingClientRect(),We=Ve?Math.max(Ve.left,Math.min(Ve.right,I.clientX)):I.clientX,De=Ve?Math.max(Ve.top,Math.min(Ve.bottom,I.clientY)):I.clientY;return{cx:(We-ee.left)*Ae,cy:(De-ee.top)*Qe}}function V(I,J){I.stopPropagation(),b(J.name);const ee=Ts(J,te);ee&&(A(J.name),U({cx:ee.cx,cy:ee.cy}),I.currentTarget.setPointerCapture(I.pointerId))}function ne(I){const J=_e.current,ee=ae.current;if(!J||!ee||!T)return!1;const Ae=g.find(Nr=>Nr.name===T),Qe=Ae?Ts(Ae,te):null;if(!Qe)return!1;const Ve=ee.getBoundingClientRect(),We=Ve.width/ee.clientWidth,De=Ve.height/ee.clientHeight,Et=Ve.left+I.cx*We,Un=Ve.top+I.cy*De,on=Qe.width*We/2,gt=Qe.height*De/2,Mr=Et-on,En=Et+on,tr=Un-gt,Ft=Un+gt,tn=J.getBoundingClientRect();return Mr<tn.right&&tn.left<En&&tr<tn.bottom&&tn.top<Ft}function ie(I){if(T){const J=E(I);le(ne(J)),U(J);return}if(X){const{x:J,y:ee}=me(I);Ne(X.name,Ae=>{if(X.kind==="side")return Hd(Ae,X.side,X.fixedWhole,J,ee,te);const Qe=Hd(Ae,X.sideX,X.fixedWholeX,J,ee,te);return Hd(Qe,X.sideY,X.fixedWholeY,J,ee,te)})}}function se(){if(T&&B)if(ne(B))Be(T);else{const I=g.find(J=>J.name===T);if(I&&I.spanX!==null&&I.spanY!==null){const J=Dd(B.cx,B.cy,I.spanX,I.spanY,te);Ne(T,ee=>({...ee,centerX2:J.centerX2,centerY2:J.centerY2}))}}A(null),U(null),$(null),le(!1)}function xe(I){return{leftWhole:(I.centerX2-I.spanX)/2,rightWhole:(I.centerX2+I.spanX)/2,bottomWhole:(I.centerY2-I.spanY)/2,topWhole:(I.centerY2+I.spanY)/2}}function Re(I,J,ee){if(I.stopPropagation(),J.centerX2===null||J.centerY2===null||J.spanX===null||J.spanY===null)return;const{leftWhole:Ae,rightWhole:Qe,bottomWhole:Ve,topWhole:We}=xe(J),De=ee==="right"?Ae:ee==="left"?Qe:ee==="top"?Ve:We;b(J.name),$({kind:"side",name:J.name,side:ee,fixedWhole:De}),I.currentTarget.setPointerCapture(I.pointerId)}function Ke(I,J,ee,Ae){if(I.stopPropagation(),J.centerX2===null||J.centerY2===null||J.spanX===null||J.spanY===null)return;const{leftWhole:Qe,rightWhole:Ve,bottomWhole:We,topWhole:De}=xe(J);b(J.name),$({kind:"corner",name:J.name,sideX:ee,sideY:Ae,fixedWholeX:ee==="right"?Qe:Ve,fixedWholeY:Ae==="top"?We:De}),I.currentTarget.setPointerCapture(I.pointerId)}function Be(I){Ne(I,J=>({...J,centerX2:null,centerY2:null,spanX:null,spanY:null,rotation:0})),b(null)}function he(I){x(!1);const J=g.find(Et=>Et.name===I);if(!J)return;const{spanX:ee,spanY:Ae}=D_(J.type),Qe=we.map(qd).filter(Et=>Et!==null);let Ve=ee,We=Ae,De=rh(Ve,We,Qe,te);for(;!De&&(Ve>2||We>2);)Ve=Math.max(2,Ve-1),We=Math.max(2,We-1),De=rh(Ve,We,Qe,te);De||(Ve=ee,We=Ae,De=Dd(te.areaW/2,te.areaH/2,Ve,We,te)),Ne(I,()=>({...J,spanX:Ve,spanY:We,rotation:0,centerX2:De.centerX2,centerY2:De.centerY2})),b(I)}async function Ee(){z||(ue(!0),await o(g),ue(!1))}function ot(){if(!Z){s(!1);return}d({title:"Kassér ændringer",message:"Vil du forlade redigering og kassere dine layout-ændringer?",confirmLabel:"Kassér",onConfirm:()=>s(!1)})}return u.jsxs("div",{className:"edit-view",ref:pe,children:[u.jsxs("div",{className:"edit-band edit-toolbar-band",children:[p&&u.jsx("button",{type:"button",className:"btn btn-outline edit-toolbar-btn",onClick:()=>x(!0),"aria-label":"Tilføj kontrol",children:"Tilføj"}),u.jsx("button",{ref:_e,type:"button",className:`btn btn-outline edit-toolbar-btn edit-trash ${O?"over":""} ${T?"dragging":""}`,disabled:!_,onClick:()=>_&&Be(_),"aria-label":"Slet valgt element",title:"Vælg et element, og tryk her for at slette det - eller træk et element hertil",children:"Slet"})]}),u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:`controls-area ${T?"dragging":""}`,ref:ae,style:{touchAction:"none"},onPointerMove:ie,onPointerUp:se,onPointerDown:()=>b(null),children:Ce&&u.jsxs(u.Fragment,{children:[u.jsx("svg",{width:te.areaW,height:te.areaH,style:{position:"absolute",inset:0,pointerEvents:"none"},children:Ue.map((I,J)=>u.jsx("circle",{cx:I.x,cy:I.y,r:2.5,fill:"rgba(198,80,78,0.45)"},J))}),de&&!O&&u.jsx("div",{className:"snap-preview",style:{left:de.rect.cx,top:de.rect.cy,width:de.rect.width,height:de.rect.height}}),we.map(I=>{const J=T===I.name&&B,ee=Ts(I,te);if(!ee)return null;const Ae=J?B.cx:ee.cx,Qe=J?B.cy:ee.cy,Ve=_===I.name,We={left:Ae,top:Qe,width:ee.width,height:ee.height,outline:Ve?"3px solid var(--text)":"none",outlineOffset:2,zIndex:Ve?2:1};return u.jsxs("div",{className:`control ${F.has(I.name)?"colliding":""} ${J&&O?"control-deleting":""}`,style:We,onPointerDown:De=>V(De,I),children:[I.type==="button"?u.jsx("div",{className:"control-button",style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},children:u.jsx(bc,{name:I.name,width:ee.width,height:ee.height,rotation:I.rotation})}):I.type==="toggle"?u.jsx("div",{className:"control-toggle on",style:{width:"100%",height:"100%"},children:u.jsx(bc,{name:I.name,width:ee.width,height:ee.height,rotation:I.rotation})}):I.type==="radar"?u.jsx(Gh,{control:I,pings:[],width:ee.width,height:ee.height,preview:!0}):I.type==="plot"?u.jsx(Yh,{control:I,points:[],width:ee.width,height:ee.height,preview:!0}):I.type==="text"?u.jsx(Fh,{message:I.name,width:ee.width,height:ee.height,rotation:I.rotation}):I.type==="joystick"?u.jsx(Qh,{control:I,width:ee.width,height:ee.height,pos:{nx:0,ny:0}}):I.type==="dpad"?u.jsx(Wh,{control:I}):u.jsx("div",{className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:u.jsx(Xh,{name:I.name,rotation:I.rotation,width:ee.width,height:ee.height,value:50,showEnds:!0,lowLabel:String(I.sliderMin??0),highLabel:String(I.sliderMax??100),fillColor:F.has(I.name)?"var(--disabled)":"var(--red)"})}),Ve&&u.jsxs(u.Fragment,{children:[u.jsx("button",{type:"button",className:"edit-handle edit-handle-top","aria-label":"Ændr højde foroven",onPointerDown:De=>Re(De,I,"top")}),u.jsx("button",{type:"button",className:"edit-handle edit-handle-bottom","aria-label":"Ændr højde forneden",onPointerDown:De=>Re(De,I,"bottom")}),u.jsx("button",{type:"button",className:"edit-handle edit-handle-left","aria-label":"Ændr bredde til venstre",onPointerDown:De=>Re(De,I,"left")}),u.jsx("button",{type:"button",className:"edit-handle edit-handle-right","aria-label":"Ændr bredde til højre",onPointerDown:De=>Re(De,I,"right")}),u.jsx("button",{type:"button",className:"edit-corner-handle edit-corner-tl","aria-label":"Skalér fra øverste venstre hjørne",onPointerDown:De=>Ke(De,I,"left","top")}),u.jsx("button",{type:"button",className:"edit-corner-handle edit-corner-tr","aria-label":"Skalér fra øverste højre hjørne",onPointerDown:De=>Ke(De,I,"right","top")}),u.jsx("button",{type:"button",className:"edit-corner-handle edit-corner-bl","aria-label":"Skalér fra nederste venstre hjørne",onPointerDown:De=>Ke(De,I,"left","bottom")}),u.jsx("button",{type:"button",className:"edit-corner-handle edit-corner-br","aria-label":"Skalér fra nederste højre hjørne",onPointerDown:De=>Ke(De,I,"right","bottom")})]})]},I.name)}),H&&u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})]})})}),u.jsxs("div",{className:"edit-band edit-actions-band",children:[u.jsx("button",{className:"btn btn-outline",style:{flex:1},type:"button",onClick:ot,disabled:H,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary",style:{flex:1},type:"button",onClick:Ee,disabled:z||H,children:H?"Gemmer...":"Gem"})]}),k&&u.jsx(R_,{unplaced:Xe,onAdd:he,onClose:()=>x(!1)})]})}function lh(a){return JSON.stringify(a.map(l=>({type:l.type,name:l.name,centerX2:l.centerX2,centerY2:l.centerY2,spanX:l.spanX,spanY:l.spanY,rotation:l.rotation})))}const ah=22;function U_(a,l){if(a==null||l==null)return null;const o=Math.abs(a),s=Math.abs(l);return o<ah&&s<ah?null:s>o?l>0?270:90:a>=0?0:180}function q_(){var l,o;if(typeof window>"u")return 0;const a=(o=(l=window.screen)==null?void 0:l.orientation)==null?void 0:o.angle;return typeof a=="number"?(a%360+360)%360:0}function H_(a){const l=(Math.round(a/90)*90%360+360)%360;return l===90||l===180||l===270?l:0}function V_(a=!0){const[l,o]=N.useState(0);return N.useEffect(()=>{if(!a||typeof window>"u"){o(0);return}let s=0;const d=b=>{const k=U_(b.beta,b.gamma);if(k==null)return;const x=H_(k-q_());x!==s&&(s=x,o(x))};let p=!1;const g=()=>{p||(p=!0,window.addEventListener("deviceorientation",d))},m=DeviceOrientationEvent.requestPermission;let _=null;if(typeof m=="function"){const b=()=>{m().then(k=>{k==="granted"&&g()}).catch(()=>{}),_==null||_()};window.addEventListener("pointerdown",b,{once:!0}),_=()=>window.removeEventListener("pointerdown",b)}else g();return()=>{window.removeEventListener("deviceorientation",d),_==null||_(),o(0)}},[a]),l}function I_(){const a=oe(H=>H.layout),l=oe(H=>H.editMode),o=oe(H=>H.active),s=oe(H=>H.sliderValues),d=oe(H=>H.toggleValues),p=oe(H=>H.radarPings),g=oe(H=>H.textValues),m=oe(H=>H.plotSeries),_=oe(H=>H.toggleSideMenu),b=oe(H=>H.sendButton),k=oe(H=>H.sendSlider),x=oe(H=>H.sendToggle),T=oe(H=>H.sendJoystick),A=oe(H=>H.sendDpad),B=N.useRef(null),U=Zh(B),X=Dh(U.w,U.h,o==null?void 0:o.gridCols,o==null?void 0:o.gridRows),$=U.w>0&&U.h>0,O=V_(!l),le=a.filter(Ds);return u.jsxs("div",{className:"screen control-screen",children:[u.jsx(df,{title:"Pico Kontrol Panel",onMenu:()=>_()}),l?u.jsx(z_,{}):u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:"controls-area",ref:B,onContextMenu:H=>H.preventDefault(),onPointerDown:H=>{H.target===H.currentTarget&&H.preventDefault()},children:$?le.map(H=>{const ue=Ts(H,X);return ue?u.jsx(Kg,{control:H,rect:ue,disabled:!1,orientation:O,latestValue:H.type==="slider"?s[H.name]:void 0,toggleValue:H.type==="toggle"?d[H.name]:void 0,radarPings:H.type==="radar"?p[H.name]:void 0,textValue:H.type==="text"?g[H.name]:void 0,plotPoints:H.type==="plot"?m[H.name]:void 0,onButton:b,onSlider:k,onToggle:x,onJoystick:T,onDpad:A},H.name):null}):u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})})})]})}const P_="",ih="",sh="",pa="";function xs(a){return new Promise(l=>setTimeout(l,a))}class F_{constructor(l){this.transport=l}async interrupt(){await this.transport.write(sh),await xs(80),await this.transport.write(sh)}async friendlyRepl(){await this.transport.write(ih)}async softReset(){await this.transport.write(pa)}async stop(){await this.interrupt(),await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(`try:
    ble.shutdown()
except Exception:
    pass
`).catch(()=>{})}async runFile(l,o){await this.interrupt(),await this.waitForFriendlyPrompt().catch(async()=>{await this.friendlyRepl().catch(()=>{}),await xs(180)}),await xs(120),o==null||o(),await this.transport.writeLine(`import builtins as _pkp_builtins; exec(_pkp_builtins.open(${JSON.stringify(l)}).read())`)}async sendFriendlyLine(l){await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(l)}async sendProgramInput(l){await this.transport.writeLine(l)}async enterRawRepl(l=2500){if(await this.interrupt(),await xs(80),await this.transport.write(`\r
`),await xs(40),!(await this.collectUntil(async()=>{await this.transport.write(P_)},s=>s.includes("raw REPL")||s.includes("raw REPL; CTRL-B to exit"),l)).includes("raw REPL"))throw new Error("Kunne ikke skifte til MicroPython raw REPL.")}async exec(l,o=6e3){await this.enterRawRepl();const s=await this.collectUntil(async()=>{await this.transport.write(l),l.endsWith(`
`)||await this.transport.write(`
`),await this.transport.write(pa)},d=>d.includes(`${pa}${pa}`)||d.includes(`${pa}>`),o);return await this.friendlyRepl().catch(()=>{}),G_(s)}collectUntil(l,o,s){return new Promise((d,p)=>{let g="",m=null;const _=setTimeout(()=>{m==null||m(),p(new Error("Timeout ved USB REPL kommando."))},s);m=this.transport.addDataListener(b=>{g+=b,o(g)&&(clearTimeout(_),m==null||m(),d(g))}),l().catch(b=>{clearTimeout(_),m==null||m(),p(b instanceof Error?b:new Error("USB REPL kommando fejlede."))})})}async waitForFriendlyPrompt(l=1600){await this.collectUntil(async()=>{await this.transport.write(ih)},o=>/(^|\r?\n)>>> ?$/.test(o),l)}}function G_(a){const l=a.indexOf("OK"),o=a.indexOf(pa,l>=0?l:0),s=o>=0?a.indexOf(pa,o+1):-1;if(l<0||o<0)return{output:a.trim(),error:"",raw:a};const d=a.slice(l+2,o).replace(/^\r?\n/,"").trimEnd(),p=s>=0?a.slice(o+1,s).trim():"";return{output:d,error:p,raw:a}}const $_=[{version:"MicroPython v1.28.0",date:"2026-04-06",stamp:"20260406",tag:"v1.28.0"},{version:"MicroPython v1.27.0",date:"2025-12-09",stamp:"20251209",tag:"v1.27.0"},{version:"MicroPython v1.26.1",date:"2025-09-11",stamp:"20250911",tag:"v1.26.1"},{version:"MicroPython v1.26.0",date:"2025-08-09",stamp:"20250809",tag:"v1.26.0"},{version:"MicroPython v1.25.0",date:"2025-04-15",stamp:"20250415",tag:"v1.25.0"},{version:"MicroPython v1.24.1",date:"2024-11-29",stamp:"20241129",tag:"v1.24.1"},{version:"MicroPython v1.24.0",date:"2024-10-25",stamp:"20241025",tag:"v1.24.0"},{version:"MicroPython v1.23.0",date:"2024-06-02",stamp:"20240602",tag:"v1.23.0"},{version:"MicroPython v1.22.2",date:"2024-02-22",stamp:"20240222",tag:"v1.22.2"},{version:"MicroPython v1.22.1",date:"2024-01-05",stamp:"20240105",tag:"v1.22.1"}],Y_=[{board:"Raspberry Pi Pico",firmwareName:"RPI_PICO"},{board:"Raspberry Pi Pico W",firmwareName:"RPI_PICO_W"}],ql=Y_.flatMap(({board:a,firmwareName:l})=>$_.map(({version:o,date:s,stamp:d,tag:p})=>{const g=`${l}-${d}-${p}.uf2`;return{board:a,version:o,date:s,fileName:g,url:`https://micropython.org/resources/firmware/${g}`}})),Vd=512,Id=`import builtins as _pkp_builtins
`;function ll(a){return JSON.stringify(a)}function X_(a){return`bytes.fromhex(${JSON.stringify([...a].map(l=>l.toString(16).padStart(2,"0")).join(""))})`}function K_(a,l){return`${a==="/"?"":a.replace(/\/$/,"")}/${l}`}class Q_{constructor(l){this.repl=l}async list(l="/"){const o=`
import os
base = ${ll(l)}
for name in os.listdir(base):
    p = (${ll(l)}.rstrip('/') + '/' + name) if ${ll(l)} != '/' else '/' + name
    try:
        st = os.stat(p)
        mode = st[0]
        kind = 'dir' if (mode & 0x4000) else 'file'
        size = st[6]
    except Exception:
        kind = 'unknown'
        size = -1
    print(name + '\\t' + kind + '\\t' + str(size))
`,s=await this.repl.exec(o);if(s.error)throw new Error(s.error);return s.output.split(/\r?\n/).map(d=>d.trim()).filter(Boolean).map(d=>{const[p,g,m]=d.split("	"),_=g==="dir"||g==="file"?g:"unknown",b=parseInt(m??"",10);return{name:p,path:K_(l,p),type:_,...Number.isFinite(b)&&b>=0?{size:b}:{}}})}async readText(l){const o=`
import sys
${Id}with _pkp_builtins.open(${ll(l)}, 'rb') as f:
    while True:
        b = f.read(${Vd})
        if not b:
            break
        print(b.hex())
`,s=await this.repl.exec(o,1e4);if(s.error)throw new Error(s.error);const d=s.output.replace(/\s+/g,"");return new TextDecoder().decode(W_(d))}async writeText(l,o,s){const d=new TextEncoder().encode(o);if(s==null||s(5,"Klargør fil..."),await this.repl.exec(`${Id}_pkp_builtins.open(${ll(l)}, 'wb').close()`),d.length===0){s==null||s(100,"Gemt på Pico");return}for(let p=0;p<d.length;p+=Vd){const g=d.slice(p,p+Vd),m=`
${Id}with _pkp_builtins.open(${ll(l)}, 'ab') as f:
    f.write(${X_(g)})
`,_=await this.repl.exec(m,1e4);if(_.error)throw new Error(_.error);const b=Math.min(p+g.length,d.length);s==null||s(10+Math.round(b/d.length*85),`Gemmer ${b}/${d.length} bytes...`)}s==null||s(100,"Gemt på Pico")}async replaceTextSafely(l,o,s,d={}){const p=`${l}.tmp`;if(await this.writeText(p,o,(_,b)=>s==null?void 0:s(Math.min(70,_*.7),b)),s==null||s(78,"Verificerer fil..."),await this.readText(p)!==o)throw await this.delete(p).catch(()=>{}),new Error(`Verificering fejlede for ${l}.`);s==null||s(88,"Udskifter fil...");let m=!!d.createBackup;if(m){const _=await this.readText(l).catch(()=>null);m=_!==null&&_!==o}if(m){const _=await this.nextBackupPath(l).catch(()=>`${l}.backup`);await this.rename(l,_).catch(()=>{})}else await this.delete(l).catch(()=>{});await this.rename(p,l),s==null||s(100,"Installeret på Pico")}async delete(l){const o=await this.repl.exec(`
import os
os.remove(${ll(l)})
`);if(o.error)throw new Error(o.error)}async nextBackupPath(l){const o=await this.list("/"),s=new Set(o.map(x=>x.path.toLowerCase())),d=l.replace(/\\/g,"/"),p=d.lastIndexOf("/"),g=p>=0?d.slice(0,p+1):"/",m=p>=0?d.slice(p+1):d.replace(/^\/+/,""),_=m.lastIndexOf("."),b=_>0?m.slice(0,_):m,k=_>0?m.slice(_):"";for(let x=1;x<1e3;x+=1){const T=`${g}${b}_backup${x}${k}`;if(!s.has(T.toLowerCase()))return T}return`${g}${b}_backup${Date.now()}${k}`}async rename(l,o){const s=await this.repl.exec(`
import os
os.rename(${ll(l)}, ${ll(o)})
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
# den nyeste side. Tallet holdes bevidst moderat: on_connect gensender alle de\r
# gemte målinger på én gang, og de skal kunne være i Picoens telemetri-buffer,\r
# der samler beskederne op, indtil appen er klar (MAX_PENDING_TELEMETRY i\r
# PicoBluetooth.py, pt. 64 - her er det ~30 pr. graf x 2 grafer). Under en aktiv\r
# forbindelse er der ingen grænse: appen husker selv de nye målinger, du kan\r
# bladre igennem. Nye punkter, mens du er forbundet, gemmes stadig løbende, så\r
# den nyeste ende af historikken er den, der overlever en genstart.\r
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
def on_connect():                          # Kører automatisk når Bluetooth forbinder\r
    global naeste_vejr_tid\r
    led.on()                               # Tænd LED'en når nogen forbinder\r
    # Genskab graferne med det samme fra Picoens egne, tidligere hentede\r
    # målinger - også dem den samlede, mens ingen var forbundet. Vi gensender\r
    # HELE den gemte historik (ikke kun den nyeste side), så appen har noget at\r
    # bladre bagud i med pilene. Historikken er kappet til GEMTE_MAALINGER_MAKS,\r
    # netop så den kan være i telemetri-bufferen, der samler beskederne op,\r
    # indtil appen er klar (se send_plot / MAX_PENDING_TELEMETRY i\r
    # PicoBluetooth.py). Hurtigt og uden Wi-Fi, så det er trygt her i selve\r
    # Bluetooth-afbrydelsen.\r
    maalinger = hent_gemte_maalinger()\r
    for gammel_tid, gammel_temp, gammel_regn in maalinger:\r
        label = plot_label(gammel_tid)\r
        ble.send_plot("TEMPERATUR", gammel_temp, label)\r
    for gammel_tid, gammel_temp, gammel_regn in maalinger:\r
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
`,ri=[{id:"program:send-text",path:"/main.py",label:"Send tekst (main.py)",description:"Startprogram med kun et tekstfelt, hvor Picoen sender beskeder til kontrolpanelet.",kind:"program",difficulty:"Nem",content:cv},{id:"program:neopixel-led",path:"/main.py",label:"NeoPixel lys (main.py)",description:"Startprogram til NeoPixel med hold-knap og lysstyrke-slider.",kind:"program",difficulty:"Nem",content:av},{id:"program:tank-control",path:"/main.py",label:"Robotbil med tankstyring (main.py)",description:"Startprogram til robotbil med to motor-slidere.",kind:"program",difficulty:"Mellem",content:dv},{id:"program:dpad-control",path:"/main.py",label:"Robotbil med D-pad (main.py)",description:"Startprogram til robotbil styret med fire retningsknapper og fart-slider.",kind:"program",difficulty:"Mellem",content:nv},{id:"program:joystick-control",path:"/main.py",label:"Robotbil med joystick (main.py)",description:"Startprogram til robotbil styret med joystick og fart-slider.",kind:"program",difficulty:"Mellem",content:lv},{id:"program:radar-control",path:"/main.py",label:"Radar med afstandssensor (main.py)",description:"Startprogram til radar med servo, afstandssensor og scan-toggle.",kind:"program",difficulty:"Svær",content:ov},{id:"program:api-weather",path:"/main.py",label:"Vejr fra internettet (main.py)",description:"Startprogram der henter vejr fra et API over Wi-Fi og viser det i tekstfelter. Husk at skrive dit Wi-Fi navn og kodeord ind i main.py.",kind:"program",difficulty:"Svær",content:Z_},{id:"program:graphs",path:"/main.py",label:"Vejrgrafer fra internettet (main.py)",description:"Startprogram der henter vejr fra et API og tegner temperatur og nedbør som grafer over tid. Husk at skrive dit Wi-Fi navn og kodeord ind i main.py.",kind:"program",difficulty:"Svær",content:rv},{id:"program:smart-home",path:"/main.py",label:"SmartHome alarmstation (main.py)",description:"Startprogram til alarmstation med dør-servo, keypad, PIR, vandsensor, buzzer og NeoPixel.",kind:"program",difficulty:"Svær",content:uv},{id:"library:pico-bluetooth",path:"/PicoBluetooth.py",label:"PicoBluetooth.py",description:"Bluetooth-biblioteket der får Picoen til at tale med appen.",kind:"library",content:J_},{id:"library:pico-robotics",path:"/PicoRobotics.py",label:"PicoRobotics.py",description:"Bibliotek til Kitronik Pico Robotics Board.",kind:"library",content:sv},{id:"library:pico-fly",path:"/PicoFly.py",label:"PicoFly.py",description:"Bibliotek til PicoFly-board med motorer og servoer.",kind:"library",content:iv},{id:"library:hcsr04",path:"/hcsr04.py",label:"hcsr04.py",description:"Bibliotek til HC-SR04 ultralyds-afstandssensor.",kind:"library",content:ev},{id:"library:neopixel",path:"/neopixel.py",label:"neopixel.py",description:"Bibliotek til NeoPixel LED-strips og LED-ringe.",kind:"library",content:tv}],fv=11914;function mv(){return typeof navigator<"u"&&"serial"in navigator&&!!navigator.serial}function hv(){return mv()?{supported:!0,message:"USB-udvikling er tilgængelig i denne browser."}:{supported:!1,message:"USB-udvikling kræver en computer med Chrome, Edge eller Chromebook."}}class pv{constructor(l={}){be(this,"port",null);be(this,"reader",null);be(this,"writer",null);be(this,"readLoopDone",null);be(this,"readLoopActive",!1);be(this,"disconnecting",!1);be(this,"buffer","");be(this,"events");be(this,"dataListeners",new Set);this.events=l}get connected(){return!!this.port&&!!this.writer}get info(){var l;return((l=this.port)==null?void 0:l.getInfo())??null}async requestAndConnect(){if(!navigator.serial)throw new Error("Web Serial er ikke tilgængelig i denne browser.");const l=await navigator.serial.requestPort({filters:[{usbVendorId:fv}]});await this.openPort(l)}async connectKnownPort(l){await this.openPort(l)}async disconnect(){var _,b;const l=this.connected||!!this.port||!!this.reader,o=this.port,s=this.reader,d=this.writer,p=this.readLoopDone,g=s==null?void 0:s.closed.catch(()=>{}),m=d==null?void 0:d.closed.catch(()=>{});this.disconnecting=!0,this.readLoopActive=!1;try{await(s==null?void 0:s.cancel())}catch{}p&&await p.catch(()=>{}),await g;try{s==null||s.releaseLock()}catch{}this.reader===s&&(this.reader=null);try{await(d==null?void 0:d.close()),await m}catch{try{await(d==null?void 0:d.abort("disconnect"))}catch{}}try{d==null||d.releaseLock()}catch{}this.writer===d&&(this.writer=null),o&&await o.close(),this.port===o&&(this.port=null),this.buffer="",this.readLoopDone===p&&(this.readLoopDone=null),this.disconnecting=!1,l&&((b=(_=this.events).onDisconnect)==null||b.call(_))}async write(l){if(!this.writer)throw new Error("Ingen USB-forbindelse.");await this.writer.write(new TextEncoder().encode(l))}async writeLine(l){await this.write(`${l}\r
`)}addDataListener(l){return this.dataListeners.add(l),()=>this.dataListeners.delete(l)}async openPort(l){var s,d,p;if(await this.disconnect().catch(()=>{}),await l.open({baudRate:115200,bufferSize:4096}),this.port=l,this.writer=((s=l.writable)==null?void 0:s.getWriter())??null,!this.writer||!l.readable)throw new Error("USB-porten kunne ikke åbnes til læsning og skrivning.");const o=l.getInfo();(p=(d=this.events).onLog)==null||p.call(d,"success",`USB-forbindelse oprettet (${gv(o)}).`),this.readLoopDone=this.startReadLoop(l)}async startReadLoop(l){var d,p,g;this.readLoopActive=!0;const o=new TextDecoder;this.reader=((d=l.readable)==null?void 0:d.getReader())??null;const s=this.reader;if(s)try{for(;this.readLoopActive;){const{value:m,done:_}=await s.read();if(_)break;m&&this.consumeText(o.decode(m,{stream:!0}))}}catch(m){this.readLoopActive&&((g=(p=this.events).onLog)==null||g.call(p,"error",m instanceof Error?m.message:"USB-læsning stoppede."))}finally{try{s.releaseLock()}catch{}this.reader===s&&(this.reader=null),this.readLoopActive&&!this.disconnecting&&this.port===l&&this.closeAfterUnexpectedReadEnd(l)}}async closeAfterUnexpectedReadEnd(l){var p,g;const o=this.connected||this.port===l;this.disconnecting=!0,this.readLoopActive=!1;const s=this.writer,d=s==null?void 0:s.closed.catch(()=>{});try{await(s==null?void 0:s.close()),await d}catch{try{await(s==null?void 0:s.abort("disconnect"))}catch{}}try{s==null||s.releaseLock()}catch{}this.writer===s&&(this.writer=null);try{await l.close()}catch{}this.port===l&&(this.port=null),this.buffer="",this.readLoopDone=null,this.disconnecting=!1,o&&((g=(p=this.events).onDisconnect)==null||g.call(p))}consumeText(l){var o,s,d,p;(s=(o=this.events).onData)==null||s.call(o,l);for(const g of this.dataListeners)g(l);for(this.buffer+=l;this.buffer.includes(`
`);){const g=this.buffer.indexOf(`
`),m=this.buffer.slice(0,g).replace(/\r$/,"");this.buffer=this.buffer.slice(g+1),(p=(d=this.events).onLine)==null||p.call(d,m)}}}function gv(a){const l=a.usbVendorId!==void 0?`VID ${a.usbVendorId.toString(16).padStart(4,"0")}`:"ukendt VID",o=a.usbProductId!==void 0?`PID ${a.usbProductId.toString(16).padStart(4,"0")}`:"ukendt PID";return`${l}, ${o}`}const ep=15e3,oh=64*1024,ch=1e5,tp=new URL("/micropython/micropython.mjs",window.location.origin).toString(),_v=64*1024,uh=8;function np(){return typeof SharedArrayBuffer<"u"&&globalThis.crossOriginIsolated===!0}function vv(){return np()?new SharedArrayBuffer(_v):null}function bv(a,l){const o=new Int32Array(a,0,2),s=new Uint8Array(a),d=a.byteLength-uh,p=new TextEncoder().encode(l+`
`);let g=Atomics.load(o,0);for(const m of p)s[uh+g%d]=m,g+=1;Atomics.store(o,0,g),Atomics.notify(o,0)}const yv=new Set(["bluetooth","machine","network","PicoRobotics","rp2","ubluetooth"]);class wv{constructor(){be(this,"worker",null);be(this,"pending",null);be(this,"nextId",0)}send(l,o={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython-terminalen er optaget. Stop den, eller vent på at kommandoen bliver færdig.",timedOut:!1,unavailable:!1});const s=++this.nextId,d=o.timeoutMs??ep,p=this.ensureWorker();return new Promise(g=>{const m=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython-terminalen stoppede, fordi kommandoen tog for lang tid. Tjek for uendelige løkker.",timedOut:!0,unavailable:!1}),this.restartWorker()},d);this.pending={id:s,timer:m,onOutput:o.onOutput,resolve:g},p.postMessage({type:"run",id:s,code:kv(l),runtimeUrl:tp})})}reset(){this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),this.restartWorker()}dispose(){var l;this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),(l=this.worker)==null||l.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const l=new Worker(new URL(""+new URL("offlineMicroPython.worker-B_-Tbi7X.js",import.meta.url).href,import.meta.url),{type:"module"});return l.onmessage=o=>this.handleMessage(o.data),l.onerror=o=>{this.finish({ok:!1,output:"",error:o.message||"Browser-MicroPython-terminalen fejlede i browser-worker.",timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=l,l}handleMessage(l){var s;const o=this.pending;if(!(!o||l.id!==o.id||l.type==="ready")){if(l.type==="stdout"){(s=o.onOutput)==null||s.call(o,l.text);return}if(l.type!=="stdin-wait"){if(l.type==="unavailable"){this.finish({ok:!1,output:"",error:l.error,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:l.ok,output:l.output,error:l.error,timedOut:!1,unavailable:!1})}}}finish(l){const o=this.pending;o&&(window.clearTimeout(o.timer),this.pending=null,o.resolve(l))}restartWorker(){var l;(l=this.worker)==null||l.terminate(),this.worker=null}}class xv{constructor(){be(this,"worker",null);be(this,"pending",null);be(this,"nextId",0);be(this,"stdinSab",null)}run(l,o={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython kører allerede kode. Stop den først.",issues:[],timedOut:!1,unavailable:!1});const s=typeof o=="number"?o:o.timeoutMs===null?null:o.timeoutMs??ep,d=typeof o=="number"?void 0:o.onOutput,p=typeof o=="number"?void 0:o.onWaitingForInput,g=typeof o=="number"?void 0:o.signal,m=Wd(l,{allowInput:!0});if(m.some(x=>x.level==="error"))return Promise.resolve({ok:!1,output:"",error:"",issues:m,timedOut:!1,unavailable:!1});const _=++this.nextId,b=this.ensureWorker(),k=vv();return this.stdinSab=k,new Promise(x=>{const T=X=>this.finish(X),A=()=>{this.restartWorker(),T({ok:!1,output:"",error:"",issues:m,timedOut:!1,unavailable:!1})},B=s===null?null:window.setTimeout(()=>{T({ok:!1,output:"",error:"Browser-MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:m,timedOut:!0,unavailable:!1}),this.restartWorker()},s);if(this.pending={id:_,timer:B,timeoutMs:s,issues:m,onOutput:d,onWaitingForInput:p,signal:g,abort:A,resolve:x},g!=null&&g.aborted){A();return}g==null||g.addEventListener("abort",A,{once:!0});const U={type:"run",id:_,code:l,runtimeUrl:tp,interactive:!0,sab:k??void 0};b.postMessage(U)})}sendInput(l){const o=this.pending;!o||!this.stdinSab||(this.refreshTimeout(o),bv(this.stdinSab,l))}stop(){const l=this.pending;l&&(this.restartWorker(),this.finish({ok:!1,output:"",error:"Browser-MicroPython blev stoppet.",issues:l.issues,timedOut:!1,unavailable:!1}))}dispose(){var l;this.finish({ok:!1,output:"",error:"",issues:[],timedOut:!1,unavailable:!1}),(l=this.worker)==null||l.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const l=new Worker(new URL(""+new URL("offlineMicroPython.worker-B_-Tbi7X.js",import.meta.url).href,import.meta.url),{type:"module"});return l.onmessage=o=>this.handleMessage(o.data),l.onerror=o=>{const s=this.pending;this.finish({ok:!1,output:"",error:o.message||"Offline MicroPython fejlede i browser-worker.",issues:(s==null?void 0:s.issues)??[],timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=l,l}handleMessage(l){var s,d;const o=this.pending;if(!(!o||l.id!==o.id||l.type==="ready")){if(l.type==="stdout"){this.refreshTimeout(o),(s=o.onOutput)==null||s.call(o,l.text);return}if(l.type==="stdin-wait"){l.waiting&&this.refreshTimeout(o),(d=o.onWaitingForInput)==null||d.call(o,l.waiting);return}if(l.type==="unavailable"){this.finish({ok:!1,output:"",error:l.error,issues:o.issues,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:l.ok,output:l.output,error:l.error,issues:o.issues,timedOut:!1,unavailable:!1}),this.restartWorker()}}finish(l){var s,d;const o=this.pending;o&&(o.timer!==null&&window.clearTimeout(o.timer),(s=o.signal)==null||s.removeEventListener("abort",o.abort),this.pending=null,(d=o.onWaitingForInput)==null||d.call(o,!1),o.resolve(l))}refreshTimeout(l){l.timeoutMs!==null&&(l.timer!==null&&window.clearTimeout(l.timer),l.timer=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:l.issues,timedOut:!0,unavailable:!1}),this.restartWorker()},l.timeoutMs))}restartWorker(){var l;(l=this.worker)==null||l.terminate(),this.worker=null,this.stdinSab=null}}function kv(a){const l=JSON.stringify(a);return["try:",`    __pico_repl_value = eval(${l})`,"    if __pico_repl_value is not None:","        print(repr(__pico_repl_value))","except SyntaxError:",`    exec(${l})`,"finally:","    try:","        del __pico_repl_value","    except Exception:","        pass"].join(`
`)}function Wd(a,l={}){const o=[],s=new Blob([a]).size;s>oh&&o.push({level:"error",text:`Koden er ${s} bytes. Offline MicroPython kører kun små programmer op til ${oh} bytes.`});const d=a.split(/\r?\n/);for(let p=0;p<d.length;p+=1){const g=p+1,m=yc(d[p]).trim();if(!m)continue;const _=Ev(m);_&&yv.has(_)&&o.push({level:"error",line:g,text:`${_} virker kun på Picoen. Forbind en Pico for at køre denne kode.`}),!l.allowInput&&Sv(d[p])&&o.push({level:"error",line:g,text:"input() virker i hele programmer. Skriv programmet i editoren og tryk Kør, eller kør filen på Pico via USB."});const b=m.match(/\brange\(\s*(-?\d+)\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\)/);b&&Tv(b)>ch&&o.push({level:"error",line:g,text:`range(...) er for stor til offline kørsel. Brug højst ${ch} gentagelser.`})}for(const p of Mv(d))o.push({level:"warning",text:`Funktionen ${p} ser rekursiv ud. Hvis den ikke stopper, afbryder offline MicroPython efter få sekunder.`});return o}function yc(a){let l=null;for(let o=0;o<a.length;o+=1){const s=a[o];if((s==='"'||s==="'")&&a[o-1]!=="\\"&&(l=l===s?null:l??s),s==="#"&&!l)return a.slice(0,o)}return a}function Sv(a){const l=yc(a);let o=null;for(let s=0;s<l.length;s+=1){const d=l[s];if((d==='"'||d==="'")&&l[s-1]!=="\\"){o=o===d?null:o??d;continue}if(!o&&!(!dh(l[s-1])||l.slice(s,s+5)!=="input")&&dh(l[s+5])&&l.slice(s+5).trimStart().startsWith("("))return!0}return!1}function dh(a){return!a||!/[A-Za-z0-9_]/.test(a)}function Ev(a){const l=a.match(/^import\s+([A-Za-z_]\w*)/);if(l)return l[1];const o=a.match(/^from\s+([A-Za-z_]\w*)\s+import\b/);return(o==null?void 0:o[1])??null}function fh(a){const l=a.match(/^\s*/);return(l==null?void 0:l[0].replace(/\t/g,"    ").length)??0}function Tv(a){const l=Number(a[1]),o=a[2]===void 0?void 0:Number(a[2]),s=a[3]===void 0?1:Number(a[3]);if(s===0)return Number.POSITIVE_INFINITY;const g=(o===void 0?l:o)-(o===void 0?0:l);return g>0&&s<0||g<0&&s>0?0:Math.ceil(Math.abs(g/s))}function Mv(a){const l=new Set;for(let o=0;o<a.length;o+=1){const s=yc(a[o]).trim().match(/^def\s+([A-Za-z_]\w*)\s*\(/);if(!s)continue;const d=s[1],p=fh(a[o]);for(let g=o+1;g<a.length;g+=1){if(!a[g].trim())continue;if(fh(a[g])<=p)break;if(new RegExp(`\\b${d}\\s*\\(`).test(yc(a[g]))){l.add(d);break}}}return[...l]}const Nv=/^(for|if|while|def|class|elif|else|try|except|finally|with)\b/;function jv(a,l){var k;const o=a.trim(),s=l.split(/\r?\n/),d=Rv(o),p=d?s[d-1]??"":"",g=Av(s,d),m=o.split(/\r?\n/).filter(Boolean).at(-1)??"";if(/KeyboardInterrupt/.test(m))return{simple:"Programmet blev stoppet.",technical:o,line:d};if(/MemoryError/.test(m))return{simple:`Picoen eller browserens MicroPython løb tør for hukommelse${d?` omkring linje ${d}`:""}.`,technical:o,line:d};if(/RecursionError/.test(m))return{simple:`En funktion kalder sig selv for mange gange${d?` omkring linje ${d}`:""}.`,technical:o,line:d};const _=m.match(/UnboundLocalError:\s+local variable ['"](.+?)['"]/);if(_)return{simple:`Variablen ${_[1]} bruges inde i en funktion, før den har fået en værdi${d?` på linje ${d}`:""}.`,technical:o,line:d};const b=m.match(/NameError:\s+name ['"](.+?)['"] (?:isn't|is not) defined/);if(b)return{simple:Lv(p,b[1])?`Teksten ${b[1]} mangler måske citationstegn${d?` på linje ${d}`:""}.`:`Python kender ikke navnet ${b[1]}${d?` på linje ${d}`:""}.`,technical:o,line:d};if(/ZeroDivisionError/.test(m))return{simple:`Kan ikke dividere med 0${d?` på linje ${d}`:""}.`,technical:o,line:d};if(/IndentationError:\s+unexpected indent/.test(m))return{simple:`Der er for meget indrykning${d?` på linje ${d}`:""}.`,technical:o,line:d};if(/IndentationError/.test(m))return{simple:`Mangler indrykning${d?` på linje ${d}`:""}.`,technical:o,line:d};if(/ImportError|ModuleNotFoundError/.test(m)){const x=(k=m.match(/['"](.+?)['"]/))==null?void 0:k[1];return{simple:`Python kan ikke finde modulet${x?` ${x}`:""}.`,technical:o,line:d}}if(/OSError/.test(m))return/ENOENT|No such file|Errno\s+2/.test(m)?{simple:`Python kan ikke finde filen${d?` på linje ${d}`:""}.`,technical:o,line:d}:/EACCES|permission|denied/i.test(m)?{simple:`Python har ikke adgang til filen eller enheden${d?` på linje ${d}`:""}.`,technical:o,line:d}:{simple:`Der opstod en fejl med en fil eller en enhed${d?` omkring linje ${d}`:""}.`,technical:o,line:d};if(/SyntaxError/.test(m)){if(/invalid syntax/.test(m)&&g.text.trim().endsWith(","))return{simple:`Linje ${g.line??d} slutter med komma. Tjek om der mangler noget efter kommaet.`,technical:o,line:g.line??d};const x=Zd(p,d)??Zd(g.text,g.line)??Cv(s,d);return x?{simple:`Mangler måske : efter linje ${x.line}.`,technical:o,line:x.line}:d&&g.text.trim().endsWith(":")&&p.trim()&&!/^\s+/.test(p)?{simple:`Mangler måske indrykning på linje ${d}.`,technical:o,line:d}:Ov(p)?{simple:`Tekst mangler måske citationstegn${d?` på linje ${d}`:""}.`,technical:o,line:d}:Dv(p)?{simple:`Tekst mangler måske et afsluttende citationstegn${d?` på linje ${d}`:""}.`,technical:o,line:d}:Bv(p)?{simple:`Mangler måske en afsluttende parentes${d?` på linje ${d}`:""}.`,technical:o,line:d}:zv(p)?{simple:`Der er måske en parentes for meget${d?` på linje ${d}`:""}.`,technical:o,line:d}:{simple:`Python fandt en syntaksfejl${d?` omkring linje ${d}`:""}.`,technical:o,line:d}}return/TypeError/.test(m)?/takes .* positional arguments? but .* given/.test(m)||/function takes/.test(m)?{simple:`En funktion får for mange eller for få værdier${d?` på linje ${d}`:""}.`,technical:o,line:d}:/unsupported operand type/.test(m)?{simple:`To værdier kan ikke bruges sammen på den måde${d?` på linje ${d}`:""}.`,technical:o,line:d}:/not callable/.test(m)?{simple:`Der bliver brugt parenteser efter noget, som ikke er en funktion${d?` på linje ${d}`:""}.`,technical:o,line:d}:{simple:`En værdi har den forkerte type${d?` på linje ${d}`:""}.`,technical:o,line:d}:/IndexError/.test(m)?{simple:`Listen har ikke et element på den plads${d?` på linje ${d}`:""}.`,technical:o,line:d}:/KeyError/.test(m)?{simple:`Ordbogen mangler den nøgle${d?` på linje ${d}`:""}.`,technical:o,line:d}:/AttributeError/.test(m)?{simple:`Den ting har ikke den kommando${d?` på linje ${d}`:""}.`,technical:o,line:d}:/ValueError/.test(m)?/invalid literal for int/.test(m)?{simple:`Teksten kan ikke laves om til et heltal${d?` på linje ${d}`:""}.`,technical:o,line:d}:{simple:`Værdien passer ikke her${d?` på linje ${d}`:""}.`,technical:o,line:d}:{simple:`Python fandt en fejl${d?` omkring linje ${d}`:""}.`,technical:o,line:d}}function Rv(a){var d;const o=(d=[...a.matchAll(/line\s+(\d+)/g)].at(-1))==null?void 0:d[1];if(!o)return;const s=parseInt(o,10);return Number.isFinite(s)&&s>0?s:void 0}function Av(a,l){if(!l)return{text:""};for(let o=l-2;o>=0;o-=1){const s=a[o]??"";if(s.trim())return{line:o+1,text:s}}return{text:""}}function Zd(a,l){if(!l)return null;const o=a.trim();return!Nv.test(o)||o.endsWith(":")?null:{line:l}}function Cv(a,l){const o=l?Math.min(a.length,l):a.length,s=Math.max(0,o-4);for(let d=o-1;d>=s;d-=1){const p=Zd(a[d]??"",d+1);if(p)return p}return null}function Dv(a){const l=(a.match(/'/g)??[]).length,o=(a.match(/"/g)??[]).length;return l%2===1||o%2===1}function Ov(a){var s,d;const o=(d=(s=a.trim().match(/^print\((.+)\)$/))==null?void 0:s[1])==null?void 0:d.trim();return!o||/['"]/.test(o)?!1:/\s/.test(o)&&/[a-zA-ZæøåÆØÅ]/.test(o)}function Lv(a,l){const o=a.trim();return!!l&&/[A-Za-zæøåÆØÅ]/.test(l)&&(o.startsWith("print(")||o.includes(`= ${l}`))}function Bv(a){return rp(a)>0}function zv(a){return rp(a)<0}function rp(a){let l=0,o=null;for(let s=0;s<a.length;s+=1){const d=a[s];if((d==='"'||d==="'")&&a[s-1]!=="\\"){o=o===d?null:o??d;continue}o||((d==="("||d==="["||d==="{")&&(l+=1),(d===")"||d==="]"||d==="}")&&(l-=1))}return l}const Jd="/min_kode.py",lp=`print('Hej fra Pico Kontrol Panel')
`,Uv=500,qv=1200,ks="Backup-filnavne er reserveret til versionshistorik. Vælg et andet navn.";function en(a,l){return`${a}:${l}`}function mh(a){return new Promise(l=>window.setTimeout(l,a))}function Hv(){const a=oe(f=>f.toggleSideMenu),l=oe(f=>f.askConfirm),o=oe(f=>f.picoIdeOrigin),s=oe(f=>f.active),d=oe(f=>f.isBleConnected),p=oe(f=>f.bleListFiles),g=oe(f=>f.bleReadText),m=oe(f=>f.bleWriteText),_=oe(f=>f.bleDeleteFile),b=oe(f=>f.bleRestartAndReconnect),k=oe(f=>f.progress),[x,T]=N.useState(!1),[A,B]=N.useState(!1),[U,X]=N.useState([]),[$,O]=N.useState(!1),[le,H]=N.useState(!1),[ue,pe]=N.useState([]),[ae,_e]=N.useState(null),[ge,Ce]=N.useState(()=>cc(ic())),[te,Ue]=N.useState(Jd),[we,Xe]=N.useState("local"),[F,z]=N.useState(()=>{var f;return((f=cc(ic()).find(v=>v.path===Jd))==null?void 0:f.content)??lp}),[Z,de]=N.useState([]),[Ne,me]=N.useState(!1),[E,V]=N.useState(""),[ne,ie]=N.useState(""),[se,xe]=N.useState(null),[Re,Ke]=N.useState(!1),[Be,he]=N.useState(null),[Ee,ot]=N.useState(!1),[I,J]=N.useState({}),[ee,Ae]=N.useState(!1),[Qe,Ve]=N.useState(0),[We,De]=N.useState(()=>{var f,v;return((f=ql.find(w=>w.board==="Raspberry Pi Pico W"))==null?void 0:f.board)??((v=ql[0])==null?void 0:v.board)??""}),[Et,Un]=N.useState(()=>{var f,v;return((f=ql.find(w=>w.board==="Raspberry Pi Pico W"))==null?void 0:f.version)??((v=ql[0])==null?void 0:v.version)??""}),[on,gt]=N.useState(null),[Mr,En]=N.useState({top:0,left:0}),[tr,Ft]=N.useState(!1),[tn,Nr]=N.useState(!1),[al,nn]=N.useState(!1),[qn,at]=N.useState(!0),[_t,mt]=N.useState(""),[il,ui]=N.useState([]),[fr,mn]=N.useState(null),[mr,hn]=N.useState(!1),[re,Te]=N.useState({}),[nt,wt]=N.useState({}),[Fe,ct]=N.useState(null),[Ze,Ht]=N.useState(null),[hr,jr]=N.useState(""),[Rr,di]=N.useState(()=>Mm().clearTerminalOnRun),[nr,Ls]=N.useState(()=>Mm().simplifiedErrors),[va,pr]=N.useState(()=>typeof navigator<"u"?_h(navigator):!1),Tt=N.useRef(null),St=N.useRef(null),ht=N.useRef(null),ba=N.useRef(null),gr=N.useRef(null),fi=N.useRef(null),ya=N.useRef(null),_r=N.useRef(null),sl=N.useRef(null),Tn=N.useRef(null),rr=N.useRef(null),rn=N.useRef(!1),pn=N.useRef(!1),xt=N.useRef(!1),Hn=N.useRef(""),Ar=N.useRef(null),Mn=N.useRef(null),gn=N.useRef(null),mi=N.useRef(null),lr=N.useRef(null),ol=N.useRef(null),Cr=N.useRef(0),ar=N.useRef(null),ir=N.useRef(null),Vn=N.useRef(null),Gt=N.useRef(null),Fl=N.useRef([]),wa=N.useRef([]),vr=N.useRef(null),Dr=hv(),ke=o==="control"&&!!s&&d(),hi=ke?(s==null?void 0:s.deviceID)??"ble":null,_n=Math.max(1,F.split(`
`).length),pi=new Blob([F]).size,Bs=we==="pico"?"Picoen":"browseren",gi=N.useMemo(()=>[...new Set(ql.map(f=>f.board))],[]),In=N.useMemo(()=>ql.filter(f=>f.board===We),[We]),Or=ql.find(f=>f.board===We&&f.version===Et)??In[0]??ql[0],xa=$||!!ae||tr||tn,Kt=we==="pico",_i=Kt?tr:tn,cn=Kt&&tr&&x&&!ke||!Kt&&tn&&!!gn.current&&al,zs=mr||_i&&!cn,vi=cn?"stdin":">>>",Us=cn?Kt?"Input til kørende Pico-kode":"Input til kørende Browser-MicroPython":Kt?"Pico MicroPython":"Browser-MicroPython",bi=N.useMemo(()=>{const f=new pv({onData:v=>{pn.current||!rn.current||(Hn.current=(Hn.current+v).slice(-240),/(^|\r?\n)>>> ?$/.test(Hn.current)&&Lr())},onLine:v=>{if(pn.current)return;const w=v.trimEnd();if(xt.current&&w.trim()){G("info",w);return}if(rn.current&&yi(w)){Lr();return}rn.current&&w.trim()&&!wi(w)&&!w.includes("raw REPL")&&G("info",w)},onLog:G,onDisconnect:()=>{T(!1),Ft(!1),hn(!1),rn.current=!1,xt.current=!1,Pn(),Hn.current="",zr(),G("warning","USB-forbindelse lukket.")}});return Tt.current=f,f},[]);function G(f,v){X(w=>[...w.slice(-140),{level:f,text:v}])}function sr(f){X(v=>[...v.slice(-140),{level:"info",text:f,variant:"input"}])}function yi(f){return f.trim()===">>>"}function wi(f){return f.trimStart().startsWith(">>> import builtins as _pkp_builtins; exec(")}function Pn(){Ar.current!==null&&(window.clearTimeout(Ar.current),Ar.current=null)}function Lr(){!rn.current||Ar.current!==null||(Ar.current=window.setTimeout(()=>{Ar.current=null,rn.current&&(Ft(!1),rn.current=!1,Hn.current="",G("success","Pico-koden er færdig."),xi())},0))}function xi(){const f=ht.current;f&&Ti(f,!1)}function cl(f,v=F,w="error"){const R=jv(f,v);X(j=>[...j.slice(-140),{level:w,text:R.simple,technical:R.technical}])}function Mt(f,v,w=we){Ue(f),Xe(w),z(v),wt(R=>({...R,[en(w,f)]:v})),vn()}function ul(f,v="pico"){Ue(f),Xe(v),z(""),ct(null),En({top:0,left:0}),vn()}function vn(){Fl.current=[],wa.current=[],vr.current=null}function Br(){const f=gr.current;return{content:F,selectionStart:(f==null?void 0:f.selectionStart)??F.length,selectionEnd:(f==null?void 0:f.selectionEnd)??(f==null?void 0:f.selectionStart)??F.length}}function Gl(f){const v=Fl.current,w=v.at(-1);(w==null?void 0:w.content)===f.content&&w.selectionStart===f.selectionStart&&w.selectionEnd===f.selectionEnd||(v.push(f),v.length>Uv&&v.shift(),wa.current=[])}function br(f,v){let w=0;const R=Math.min(f.length,v.length);for(;w<R&&f[w]===v[w];)w+=1;let j=f.length,W=v.length;for(;j>w&&W>w&&f[j-1]===v[W-1];)j-=1,W-=1;const fe=f.slice(w,j),Je=v.slice(w,W),je=Je&&!fe?"insert":fe&&!Je?"delete":"replace",rt=Je.at(-1)??"";return{kind:je,boundaryAfter:je==="insert"&&/[\s.,:;()[\]{}'"`+\-*/%=<>!?]/.test(rt)}}function ki(f,v){if(v!=="typing")return vr.current=null,!0;const w=Date.now(),R=br(F,f),j=vr.current,W=j!==null&&j.path===te&&j.source===we&&j.kind===R.kind&&j.kind!=="replace"&&!j.boundaryAfter&&w-j.at<=qv;return vr.current={path:te,source:we,kind:R.kind,at:w,boundaryAfter:R.boundaryAfter},!W}function $l(f){z(f.content),wt(v=>({...v,[en(we,te)]:f.content})),jr(""),ct(null),window.requestAnimationFrame(()=>{const v=gr.current;v&&(v.focus(),v.selectionStart=Math.min(f.selectionStart,f.content.length),v.selectionEnd=Math.min(f.selectionEnd,f.content.length))})}function qs(){const f=Fl.current.pop();return f?(vr.current=null,wa.current.push(Br()),$l(f),!0):!1}function Yl(){const f=wa.current.pop();return f?(vr.current=null,Fl.current.push(Br()),$l(f),!0):!1}function Nn(f,v=(W=>(W=gr.current)==null?void 0:W.selectionStart)()??f.length,w=Br(),R=v,j="programmatic"){w&&f!==F&&ki(f,j)&&Gl(w),z(f),wt(fe=>({...fe,[en(we,te)]:f})),jr(""),ta(f,v),window.requestAnimationFrame(()=>{const fe=gr.current;fe&&(fe.selectionStart=Math.min(v,f.length),fe.selectionEnd=Math.min(R,f.length))})}function dl(f,v=we){wt(w=>{const R=en(v,f);if(!(R in w))return w;const j={...w};return delete j[R],j})}function ln(){return re[te]===F}function Nt(f,v){Te(w=>({...w,[f]:v}))}function Xl(f,v){Nt(f,v),wt(w=>({...w,[en("pico",f)]:v})),we==="pico"&&te===f&&z(v)}function zr(){pe([]),de([]),Te({}),wt({}),ct(null),Ue(f=>{const v=cc(ic());if(v.find(j=>j.path===f))return f;const R=v[0];return Xe("local"),z(R.content),vn(),R.path})}function $t(f){Ur(),he({value:100,label:f}),Gt.current=window.setTimeout(()=>{Gt.current=null,he(null)},900)}function Ur(){Gt.current!==null&&(window.clearTimeout(Gt.current),Gt.current=null)}function Si(){return Be?u.jsxs("div",{className:"ide-task-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(Be.value),children:[u.jsxs("div",{children:[u.jsx("span",{children:Be.label}),u.jsxs("strong",{children:[Math.round(Be.value),"%"]}),Be.cancellable&&u.jsx("button",{className:"ide-task-cancel",type:"button",onClick:Kl,"aria-label":"Stop handling",title:"Stop",children:u.jsx(Xt,{name:"delete",size:18})})]}),u.jsx("b",{"aria-hidden":"true",children:u.jsx("i",{style:{width:`${Math.max(2,Math.min(100,Be.value))}%`}})})]}):null}function Kl(){lr.current&&yr("Stopper læsning...",!0,!0)}function yr(f="Stopper læsning...",v=!1,w=!1){var R;Ur(),ir.current=null,Cr.current+=1,(R=lr.current)==null||R.abort(),lr.current=null,ar.current=null,_e(null),O(!1),he(v?{value:(Be==null?void 0:Be.value)??0,label:f,cancellable:!1}:null),w&&G("warning","Stopper BLE-læsning efter den aktuelle datapakke.")}function Hs(f){var v;if(!(ar.current===f||ir.current===f)){if(ir.current=f,ol.current){Cr.current+=1,(v=lr.current)==null||v.abort(),lr.current=null,ar.current=null,ul(f),_e(f),O(!0),Ur(),he({value:2,label:`Skifter til ${Le(f)}...`,cancellable:!0});return}Vs()}}function Vs(){if(ol.current)return;const f=ir.current;if(!f)return;ir.current=null;const v=Cr.current+1;Cr.current=v;const w=new AbortController;lr.current=w,ar.current=f,ul(f),_e(f),O(!0),Ur(),he({value:12,label:`Indlæser ${Le(f)}...`,cancellable:!0});const R=(async()=>{try{const j=await g(f,(W,fe)=>{Cr.current===v&&he({value:W,label:fe,cancellable:!0})},w.signal);if(w.signal.aborted||Cr.current!==v)return;Mt(f,j,"pico"),Nt(f,j),$t("Fil indlæst")}catch(j){if(Cr.current!==v)return;Pv(j)||w.signal.aborted?G("info",`Stoppede læsning af ${Le(f)}.`):(he(null),G("error",j instanceof Error?j.message:"BLE læsning fejlede."))}})();ol.current=R,R.finally(()=>{if(ol.current!==R)return;ol.current=null,lr.current===w&&(lr.current=null),ar.current===f&&(ar.current=null),!!ir.current||(_e(null),O(!1),w.signal.aborted&&he(null)),Vs()})}async function ka(f){const v=pn.current;pn.current=!0;try{return await f()}finally{pn.current=v}}N.useEffect(()=>{if(!qn)return;const f=sl.current;f&&(f.scrollTop=f.scrollHeight)},[U,qn]),N.useEffect(()=>{X2({clearTerminalOnRun:Rr,simplifiedErrors:nr})},[Rr,nr]),N.useEffect(()=>{var f;In.some(v=>v.version===Et)||Un(((f=In[0])==null?void 0:f.version)??"")},[In,Et]),N.useEffect(()=>{pr(_h(navigator))},[]),N.useEffect(()=>{const f=()=>{const v=Tt.current;St.current=null,ht.current=null,Tt.current=null,v==null||v.disconnect().catch(()=>{})};return window.addEventListener("pagehide",f),()=>{var v,w;Ur(),(v=Mn.current)==null||v.dispose(),Mn.current=null,(w=gn.current)==null||w.dispose(),gn.current=null,window.removeEventListener("pagehide",f),f()}},[]),N.useEffect(()=>{const f=v=>{!(v.ctrlKey||v.metaKey)||v.key.toLowerCase()!=="s"||(v.preventDefault(),!$&&te.trim()&&!va&&!Re&&!se&&!Ne&&Mi())};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[we,ke,$,x,F,te,va,Re,se,Ne]);function Sa(f,v,w){Ce(R=>{const j=Fd(R,f,v,w);return vs(j),j})}function Ea(f,v){Ce(w=>{const R=w.find(je=>je.path===f),W=nt[en("local",f)]??(R==null?void 0:R.content),fe=W!==void 0&&Hl(W)!==Hl(v)?Fd(w,nb(f,hc(w)),W,!1):w,Je=Fd(fe,f,v,!1);return vs(Je),Je}),wt(w=>({...w,[en("local",f)]:v})),we==="local"&&te===f&&(z(v),jr(""),ct(null),vn())}const Ei=ab(ue,ge,nt,x||ke);N.useEffect(()=>{if(!ke)return;const f={cancelled:!1};return(async()=>{for(let v=0;v<6&&!f.cancelled;v+=1)try{const w=await p();if(f.cancelled)return;pe(w),G("success",`Indlæste ${w.length} filer fra Pico via Bluetooth.`);return}catch(w){if(f.cancelled)return;v===5?G("error",w instanceof Error?w.message:"BLE filhandling fejlede."):await mh(1500)}})(),()=>{f.cancelled=!0}},[s,ke]),N.useEffect(()=>{const f=Vn.current;f&&f!==hi&&zr(),Vn.current=hi},[hi]);async function Ec(){if(Dr.supported){B(!0);try{await bi.requestAndConnect();const f=new F_(bi);St.current=f,ht.current=new Q_(f),T(!0),Ve(0),await f.interrupt(),await Tc(f),G("success","Sendte stop-signal til Pico-terminalen."),await Ti(ht.current),await Ps(ht.current)}catch(f){G("error",f instanceof Error?f.message:"USB-forbindelse mislykkedes.");try{await bi.disconnect()}catch(v){G("error",v instanceof Error?`USB-porten kunne ikke lukkes: ${v.message}`:"USB-porten kunne ikke lukkes.");return}Ve(v=>{const w=v+1;return w>=3&&(G("info","USB-forbindelsen er mislykkedes flere gange. Hvis Picoen er i BOOTSEL eller mangler MicroPython, kan du bruge MicroPython-download."),Ae(!0)),w}),T(!1)}finally{B(!1)}}}async function Tc(f){const v=await f.exec(`import sys
print(sys.implementation.name)
`,4e3);if(v.error||!v.output.toLowerCase().includes("micropython"))throw new Error("MicroPython blev ikke fundet på Picoen.")}async function Mc(){var f;try{await((f=Tt.current)==null?void 0:f.disconnect()),St.current=null,ht.current=null,T(!1),zr()}catch(v){G("error",v instanceof Error?`USB-porten kunne ikke lukkes: ${v.message}`:"USB-porten kunne ikke lukkes.")}}async function Fn(f){const v=ht.current;if(v){O(!0),pn.current=!0;try{await f(v)}catch(w){he(null),G("error",w instanceof Error?w.message:"USB filhandling fejlede.")}finally{pn.current=!1,O(!1)}}}async function jt(f=!0){if(ke){O(!0);try{const v=await p();pe(v),f&&G("success",`Indlæste ${v.length} filer fra Pico via Bluetooth.`)}catch(v){G("error",v instanceof Error?v.message:"BLE filhandling fejlede.")}finally{O(!1)}return}await Ti(ht.current,f)}async function Ti(f,v=!0){if(f){O(!0);try{const w=await ka(()=>f.list("/"));pe(w),v&&G("success",`Indlæste ${w.length} filer fra Pico.`)}catch(w){G("error",w instanceof Error?w.message:"USB filhandling fejlede.")}finally{O(!1)}}}async function Ql(){if(ke){O(!0),he({value:4,label:"Tjekker biblioteker på Pico via Bluetooth..."});try{const f=await Is((v,w)=>he({value:v,label:w}));de(f),$t("Fil-tjek færdigt")}catch(f){he(null),G("error",f instanceof Error?f.message:"BLE runtime check fejlede.")}finally{O(!1)}return}await Ps(ht.current)}async function Is(f){const v=[],w=ri.filter(j=>j.kind==="library"&&!Vl(j));let R=0;for(const j of ri){if(j.kind==="program"){v.push({...j,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}if(Vl(j)){v.push({...j,status:"unknown",detail:"Opdateres via USB"});continue}try{const W=R/Math.max(1,w.length)*100,fe=100/Math.max(1,w.length);G("info",`Tjekker ${j.label} på Pico via Bluetooth...`),f==null||f(Math.min(95,W),`Tjekker ${j.label} på Pico...`);const Je=await g(j.path,(rt,Rt)=>{f==null||f(Math.min(95,W+rt/100*fe),`${j.label}: ${Rt}`)}),je=Hl(Je)===Hl(j.content);v.push({...j,status:je?"ok":"outdated",detail:je?"Matcher appens version":"Kan installeres via Bluetooth"})}catch{v.push({...j,status:"missing",detail:"Mangler på Pico"})}finally{R+=1}}return f==null||f(100,"Fil-tjek færdigt"),v}async function Ps(f){if(f){O(!0);try{const v=await ka(()=>Ta(f)),w=v;de(w)}catch(v){G("error",v instanceof Error?v.message:"Runtime check fejlede.")}finally{O(!1)}}}async function Ta(f){if(!f)return[];const v=[];for(const w of ri){if(w.kind==="program"){v.push({...w,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}try{const R=await f.readText(w.path),j=Hl(R)===Hl(w.content);v.push({...w,status:j?"ok":"outdated",detail:j?"Matcher appens version":"Matcher ikke appens version"})}catch{v.push({...w,status:"missing",detail:"Mangler på Pico"})}}return v}async function Nc(f=te){if(ke){Hs(f);return}_e(f),await Fn(async v=>{he({value:12,label:`Indlæser ${Le(f)}...`});const w=await jc(v,f);Mt(f,w,"pico"),Nt(f,w),$t("Fil indlæst")}),_e(null)}async function jc(f,v){var w;try{return await f.readText(v)}catch(R){await((w=St.current)==null?void 0:w.stop().catch(()=>{})),await mh(120);try{return await f.readText(v)}catch{throw R}}}function Rc(){Ke(!0)}async function Mi(){if(we==="pico"){if(!x&&!ke){G("error","Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.");return}await Ni();return}Fs()}function Fs(){if(Il(te)){G("error",ks);return}Sa(te,F,!1),Xe("local"),wt(f=>({...f,[en("local",te)]:F})),Ke(!1),G("success",`Gemte ${Le(te)} lokalt.`)}async function Ni(){if(Ke(!1),Il(te))return he(null),G("error",ks),!1;if(he({value:0,label:"Starter gemning..."}),ke){O(!0);try{return await m(te,F,(v,w)=>he({value:v,label:w})),Nt(te,F),Xe("pico"),wt(v=>({...v,[en("pico",te)]:F})),$t("Gemt på Pico via Bluetooth"),G("success",`Gemte ${Le(te)} på Pico via Bluetooth.`),oc(te)&&(gt("saved"),G("warning","main.py er gemt. Genstart Picoen for at køre den nye version.")),await jt(!1),!0}catch(v){return he(null),G("error",v instanceof Error?v.message:"BLE gem fejlede."),!1}finally{O(!1)}}if(!ht.current)return he(null),!1;let f=!1;return await Fn(async v=>{ml(te,"pico")?await v.replaceTextSafely(te,F,(w,R)=>he({value:w,label:R})):await v.writeText(te,F,(w,R)=>he({value:w,label:R})),Nt(te,F),Xe("pico"),wt(w=>({...w,[en("pico",te)]:F})),$t("Gemt på Pico via USB"),G("success",`Gemte ${te}.`),await jt(),await Ql(),f=!0}),f}function Ac(){Gs(Le(te),F),Ke(!1),G("success",`Downloadede ${Le(te)}.`)}function Gs(f,v){const w=new Blob([v],{type:"text/plain;charset=utf-8"}),R=URL.createObjectURL(w),j=document.createElement("a");j.href=R,j.download=f,j.click(),URL.revokeObjectURL(R)}async function $s(f){O(!0),f==="ide"&&H(!0),gt(null),he({value:10,label:"Genstarter Pico..."});try{await b(f)?($t("Pico genforbundet"),G("success",f==="control"?"Pico genforbundet. Åbner kontrolpanelet.":"Pico genforbundet til Kodeværkstedet.")):(he(null),G("warning","Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet."))}catch(v){he(null),G("error",v instanceof Error?v.message:"Genstart/genforbindelse mislykkedes.")}finally{O(!1),H(!1)}}function Ys(f){var W,fe;const v=f??{path:te,source:we},w=v.source==="pico"?"Pico":"browser",R=(f==null?void 0:f.versions.length)??(v.source==="pico"?((W=li(ue).get(v.path))==null?void 0:W.length)??0:((fe=li(hc(ge)).get(v.path))==null?void 0:fe.length)??0),j=R>0?` Det sletter også filens versionshistorik (${R} gemte versioner).`:"";xe(null),l({title:"Slet fil",message:`Vil du slette ${Le(v.path)} fra ${w}?${j}`,confirmLabel:"Slet",onConfirm:()=>{Zl(v)}})}function Cc(){l({title:"Nulstil enhed",message:"Vil du nulstille Picoens enhedsindstillinger? Det sletter DeviceSettings.txt, så Picoen kan oprettes som en ny enhed igen. Kodefiler og startprogram bliver ikke slettet.",confirmLabel:"Nulstil",onConfirm:()=>{Dc()}})}async function Dc(){if(!ht.current){G("error","Forbind Picoen med USB først.");return}await Fn(async f=>{await f.delete("/DeviceSettings.txt").catch(v=>{const w=v instanceof Error?v.message:"";if(!/ENOENT|No such file|not found/i.test(w))throw v}),Te(v=>{const w={...v};return delete w["/DeviceSettings.txt"],w}),dl("/DeviceSettings.txt","pico"),G("success","DeviceSettings.txt er nulstillet. Afbryd og forbind Picoen igen, hvis kontrolpanelet allerede var åbent."),await jt()})}function Xs(f,v,w){const R=Ei.filter(fe=>fe.kind==="file"&&fe.type==="file"),j=R.findIndex(fe=>fe.path===f&&fe.source===v);if(j===-1)return null;const W=fe=>!!fe&&!(fe.path===f&&fe.source===v)&&!(fe.source===v&&w.has(fe.path))&&!(ke&&Vl(fe));for(const fe of[!0,!1])for(let Je=1;Je<R.length;Je+=1){const je=R[j+Je];if(W(je)&&(!fe||je.source===v))return je;const rt=R[j-Je];if(W(rt)&&(!fe||rt.source===v))return rt}return null}function Wl(f){if(f){ji(f);return}const v=cc(ic())[0];Mt(v.path,nt[en("local",v.path)]??v.content,"local")}async function Zl(f){const v=f.path,w=f.source,R=v===te&&w===we;if(w==="local"){const je=li(hc(ge)).get(v)??[],rt=new Set([v,...je.map(vt=>vt.path)]),Rt=R?Xs(v,w,rt):null,dn=ge.filter(vt=>!rt.has(vt.path));Ce(dn),vs(dn);for(const vt of rt)dl(vt,"local");R&&Wl(Rt);const qe=je.length>0?` og ${je.length} gemte versioner`:"";G("warning",`Slettede ${Le(v)}${qe} fra browseren.`);return}const j=li(ue).get(v)??[],W=[v,...j.map(je=>je.path)],fe=R?Xs(v,w,new Set(W)):null;if(ke){O(!0);try{for(const rt of W)await _(rt);Te(rt=>{const Rt={...rt};for(const dn of W)delete Rt[dn];return Rt});for(const rt of W)dl(rt,"pico");const je=j.length>0?` og ${j.length} gemte versioner`:"";G("warning",`Slettede ${Le(v)}${je} på Pico via Bluetooth.`),await jt(),R&&Wl(fe)}catch(je){G("error",je instanceof Error?je.message:"BLE sletning fejlede.")}finally{O(!1)}return}if(!ht.current){G("error","Ingen Pico-forbindelse. Kan ikke slette Pico-filen.");return}let Je=!1;await Fn(async je=>{for(const Rt of W)await je.delete(Rt);Te(Rt=>{const dn={...Rt};for(const qe of W)delete dn[qe];return dn});const rt=j.length>0?` og ${j.length} gemte versioner`:"";G("warning",`Slettede ${v}${rt}.`);for(const Rt of W)dl(Rt,"pico");await jt(),await Ql(),Je=!0}),Je&&R&&Wl(fe)}async function Oc(f){if(!f)return;const v=Vv(f.name);if(!v){G("error","Kun .py, .txt, .json og .csv kan importeres.");return}if(Il(v)){G("error",ks);return}if(f.size>128*1024){G("error","Filen er for stor til Pico-værkstedet.");return}const w=await f.text();if(we==="local"){Sa(v,w,!0),Mt(v,w,"local"),G("success",`Importerede ${Le(v)} i browseren.`);return}if(!x&&!ke){G("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(ke&&Vl({path:v})){G("error","PicoBluetooth.py kan ikke importeres over Bluetooth, mens den holder forbindelsen i gang. Brug USB i stedet.");return}if(he({value:0,label:"Uploader fil til Pico..."}),ke){O(!0);try{await m(v,w,(j,W)=>he({value:j,label:W})),Nt(v,w),Mt(v,w,"pico"),$t("Fil uploadet til Pico"),G("success",`Importerede ${Le(v)} på Pico via Bluetooth.`),await jt()}catch(j){he(null),G("error",j instanceof Error?j.message:"Kunne ikke importere filen til Pico.")}finally{O(!1)}return}if(!ht.current){he(null),G("error","Ingen Pico-forbindelse. Kan ikke importere filen til Pico.");return}await Fn(async j=>{ml(v,"pico")?await j.replaceTextSafely(v,w,(W,fe)=>he({value:W,label:fe})):await j.writeText(v,w,(W,fe)=>he({value:W,label:fe})),Nt(v,w),Mt(v,w,"pico"),$t("Fil uploadet til Pico"),G("success",`Importerede ${Le(v)} på Pico.`),await jt(),await Ql()})}async function Ks(){V(""),me(!0)}function Qs(){const f=hh(E);if(!f)return;if(Il(f)){G("error",ks);return}const v=we;if(ml(f,v)){G("error",`Der findes allerede en fil med navnet ${Le(f)} i ${v==="pico"?"Pico":"browseren"}.`);return}if(v==="local"){Sa(f,"",!1),Mt(f,"","local"),me(!1),G("success",`Oprettede ${Le(f)} i browseren.`);return}Ws(f)}async function Ws(f){if(!x&&!ke){G("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(me(!1),he({value:0,label:"Opretter fil på Pico..."}),ke){O(!0);try{await m(f,"",(v,w)=>he({value:v,label:w})),Nt(f,""),Mt(f,"","pico"),$t("Fil oprettet på Pico"),G("success",`Oprettede ${Le(f)} på Pico via Bluetooth.`),await jt()}catch(v){he(null),G("error",v instanceof Error?v.message:"Kunne ikke oprette fil på Pico.")}finally{O(!1)}return}if(!ht.current){he(null),G("error","Ingen Pico-forbindelse. Kan ikke oprette Pico-filen.");return}await Fn(async v=>{await v.writeText(f,"",(w,R)=>he({value:w,label:R})),Nt(f,""),Mt(f,"","pico"),$t("Fil oprettet på Pico"),G("success",`Oprettede ${Le(f)} på Pico.`),await jt()})}function Zs(f){f.type==="file"&&(xe(f),ie(Iv(f.path)))}async function Js(f){if(!se)return;const v=se.path;if(xe(null),se.source==="local"){const w=ge.find(R=>R.path===f.path);if(!w){G("error","Kunne ikke finde versionen i browseren.");return}Ea(v,w.content),Mt(v,w.content,"local"),G("success",`Gendannede ${Le(f.path)} i browseren.`);return}if(he({value:0,label:"Gendanner version..."}),ke){O(!0);try{const w=await g(f.path);await m(v,w,(R,j)=>he({value:R,label:j})),Nt(v,w),Mt(v,w,"pico"),$t("Version gendannet"),await jt(!1)}catch(w){he(null),G("error",w instanceof Error?w.message:"Kunne ikke gendanne versionen.")}finally{O(!1)}return}ht.current&&await Fn(async w=>{await w.replaceTextSafely(v,await w.readText(f.path),(j,W)=>he({value:j,label:W}));const R=await w.readText(v);Nt(v,R),Mt(v,R,"pico"),$t("Version gendannet"),await jt()})}function fl(f){const v=(se==null?void 0:se.source)==="local"?"browseren":"Pico";l({title:"Slet version",message:`Vil du slette ${Le(f.path)} fra ${v}?`,confirmLabel:"Slet",onConfirm:()=>{Lc(f)}})}async function Lc(f){if((se==null?void 0:se.source)==="local"){const v=ge.filter(w=>w.path!==f.path);Ce(v),vs(v),dl(f.path,"local"),xe(w=>w&&{...w,versions:w.versions.filter(R=>R.path!==f.path)}),G("warning",`Slettede ${Le(f.path)} fra browserens versionshistorik.`);return}if(ke){O(!0);try{await _(f.path),await jt(!1),xe(v=>v&&{...v,versions:v.versions.filter(w=>w.path!==f.path)})}catch(v){G("error",v instanceof Error?v.message:"Kunne ikke slette versionen.")}finally{O(!1)}return}ht.current&&await Fn(async v=>{await v.delete(f.path),await jt(!1),xe(w=>w&&{...w,versions:w.versions.filter(R=>R.path!==f.path)})})}async function Bc(){var w;if(!se)return;const f=se,v=rb(f.path,R=>ml(R,f.source));if(!v){G("error",`Kunne ikke finde et ledigt filnavn til en kopi af ${Le(f.path)}.`);return}if(f.source==="local"){const R=nt[en("local",f.path)]??((w=ge.find(j=>j.path===f.path))==null?void 0:w.content)??"";Sa(v,R,!1),Mt(v,R,"local"),xe(null),G("success",`Duplikerede ${Le(f.path)} til ${Le(v)} i browseren.`);return}if(xe(null),he({value:0,label:"Duplikerer fil..."}),ke){O(!0);try{const R=re[f.path]??await g(f.path);await m(v,R,(j,W)=>he({value:j,label:W})),Nt(v,R),Mt(v,R,"pico"),$t("Fil duplikeret"),await jt(!1),G("success",`Duplikerede ${Le(f.path)} til ${Le(v)} på Pico via Bluetooth.`)}catch(R){he(null),G("error",R instanceof Error?R.message:"Kunne ikke duplikere filen.")}finally{O(!1)}return}if(!ht.current){he(null),G("error","Ingen Pico-forbindelse. Kan ikke duplikere Pico-filen.");return}await Fn(async R=>{const j=await R.readText(f.path);await R.writeText(v,j,(W,fe)=>he({value:W,label:fe})),Nt(v,j),Mt(v,j,"pico"),$t("Fil duplikeret"),await jt(!1),G("success",`Duplikerede ${Le(f.path)} til ${Le(v)} på Pico.`)})}async function zc(){if(!se)return;const f=se,v=Pd(ne,Ss(f.path));if(!v||v===f.path)return;if(Il(v)){G("error",ks);return}if(ml(v,f.source)){G("error",`Der findes allerede en fil med navnet ${Le(v)}.`);return}const w=f.source==="local",R=f.source==="pico";if(ke&&R&&(oc(f.path)||oc(v))){G("error","main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.");return}O(!0);try{if(R)if(ke){const j=re[f.path]??await g(f.path);await m(v,j,(W,fe)=>he({value:W,label:fe})),await _(f.path),Te(W=>({...kh(W,f.path,v),[v]:j}))}else ht.current&&(await ka(()=>ht.current.rename(f.path,v)),Te(j=>kh(j,f.path,v)));w&&Ce(j=>{const W=j.map(fe=>fe.path===f.path?{...fe,path:v,updatedAt:Date.now()}:fe);return vs(W),W}),te===f.path&&we===f.source&&Ue(v),wt(j=>ob(j,f.source,f.path,v)),xe(null),ie(""),G("success",`Omdøbte ${Le(f.path)} til ${Le(v)}.`),R&&await jt()}catch(j){G("error",j instanceof Error?j.message:"Kunne ikke omdøbe filen.")}finally{he(null),O(!1)}}function ml(f,v){return v==="pico"?ue.some(w=>w.path===f):ge.some(w=>w.path===f)}function ji(f){if(f.type!=="file"){ke&&yr(void 0,!1),Ue(f.path),Xe(f.source);return}if(ke&&Vl(f)){G("warning","PicoBluetooth.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.");return}if(f.source==="local"){ke&&yr(void 0,!1);const w=ge.find(R=>R.path===f.path);Mt(f.path,nt[en("local",f.path)]??(w==null?void 0:w.content)??"","local");return}const v=en("pico",f.path);if(Object.prototype.hasOwnProperty.call(nt,v)){ke&&yr(void 0,!1),Mt(f.path,nt[v],"pico");return}if(Object.prototype.hasOwnProperty.call(re,f.path)){ke&&yr(void 0,!1),Mt(f.path,re[f.path],"pico");return}Nc(f.path)}async function hl(){if(!x&&!ke){const f=ph();de(f),J(gh(f)),ot(!0),he(null);return}O(!0),he({value:4,label:ke?"Tjekker biblioteker på Pico via Bluetooth...":"Tjekker biblioteker på Pico..."}),G("info",ke?"Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...":"Tjekker om Picoens biblioteker er opdaterede før installation...");try{const f=Z.length>0?Z:ke?await Is((v,w)=>he({value:v,label:w})):await ka(()=>Ta(ht.current));de(f),J(gh(f)),ot(!0),he(null)}catch(f){he(null),G("error",f instanceof Error?f.message:"Fil-tjek før installation fejlede.")}finally{O(!1)}}async function Jl(){if(ot(!1),ke){O(!0);try{const v=(Z.length>0?Z:ri.map(R=>({...R,status:"unknown",detail:"Ikke tjekket"}))).filter(R=>I[R.id]&&!Vl(R));if(v.length===0){G("info","Ingen filer valgt til installation.");return}let w=null;he({value:0,label:"Starter installation..."});for(const[R,j]of v.entries()){G("info",`Installerer ${j.label} via Bluetooth...`);const W=R/v.length*100,fe=100/v.length;await m(j.path,j.content,(Je,je)=>{he({value:Math.min(99,W+Je/100*fe),label:`${j.label}: ${je}`})}),Xl(j.path,j.content),G("success",`Installerede ${j.label}.`),j.kind==="library"&&(w=j),oc(j.path)&&gt("saved")}$t("Installation færdig"),await jt(!1),await Ql(),w&&Ri(w)}catch(f){he(null),G("error",f instanceof Error?f.message:"BLE installation fejlede.")}finally{O(!1)}return}await Fn(async f=>{const w=(Z.length>0?Z:ri.map(j=>({...j,status:"unknown",detail:"Ikke tjekket"}))).filter(j=>I[j.id]);if(w.length===0){G("info","Ingen filer valgt til installation.");return}let R=null;he({value:0,label:"Starter installation..."});for(const[j,W]of w.entries()){G("info",`Installerer ${W.label}...`);const fe=j/w.length*100,Je=100/w.length,je=await f.readText(W.path).catch(()=>null);je!==null&&Hl(je)===Hl(W.content)?(he({value:Math.min(99,fe+Je),label:`${W.label}: Allerede nyeste version`}),G("info",`${W.label} findes allerede i samme version.`)):(await f.replaceTextSafely(W.path,W.content,(rt,Rt)=>{he({value:Math.min(99,fe+rt/100*Je),label:`${W.label}: ${Rt}`})},{createBackup:!0}),G("success",`Installerede ${W.label}.`)),Xl(W.path,W.content),W.kind==="library"&&(R=W)}$t("Installation færdig"),await jt(!1),await Ql(),R&&Ri(R)})}function eo(){return(Z.length>0?Z:ph()).filter(v=>I[v.id])}function Ma(){const f=eo();if(f.length===0){G("info","Ingen filer valgt.");return}for(const v of f)Ea(v.path,v.content);ot(!1),G("success",`Gemte ${f.length} filer i browseren.`)}function to(){const f=eo();if(f.length===0){G("info","Ingen filer valgt.");return}f.forEach((v,w)=>{window.setTimeout(()=>{Gs(Le(v.path),v.content)},w*120)}),ot(!1),G("success",`Starter download af ${f.length} filer.`)}function Ri(f){Mt(f.path,f.content,"pico"),Nt(f.path,f.content),G("info",`Åbnede ${f.label} i editoren.`)}function Ai(f,v){J(w=>{if(f.kind!=="program")return{...w,[f.id]:v};const R={...w};for(const j of Z)j.kind==="program"&&(R[j.id]=!1);return R[f.id]=v,R})}async function Ci(){if(ea(),ke&&we==="pico"){G("warning","Bluetooth holder forbindelsen åben, så koden kan ikke køres direkte her. Gem filen, og genstart Picoen for at køre den.");return}if(we==="local"){await no();return}const f=St.current;if(!f){G("error",`${Le(te)} er gemt på Picoen, men der er ingen USB-forbindelse til Pico-terminalen.`);return}if(te.endsWith(".py")){if(!ln()&&(G("info",`${Le(te)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`),!await Ni())){G("error","Pico-forbindelsen blev afbrudt under gemning.");return}if($)return;Pn(),Hn.current="",at(!0);try{await f.runFile(te,()=>{Pn(),Hn.current="",xt.current=!1,Ft(!0),rn.current=!0}),G("success",`Kører ${Le(te)}. Brug Stop for at afbryde.`)}catch(v){Ft(!1),rn.current=!1,Pn(),Hn.current="",G("error",v instanceof Error?v.message:"Kunne ikke starte koden.")}return}O(!0);try{const v=await f.exec(F,2e4);v.output.trim()&&G("info",v.output),v.error.trim()&&cl(v.error,F),!v.output.trim()&&!v.error.trim()&&G("success","Koden kørte uden output.")}catch(v){G("error",v instanceof Error?v.message:"Kunne ikke køre koden.")}finally{O(!1)}}async function no(){const f=Wd(F,{allowInput:!0});if(f.some(R=>R.level==="error")){for(const R of f){const j=R.line?`Linje ${R.line}: `:"";G(R.level==="error"?"error":"warning",`${j}${R.text}`)}return}/\binput\s*\(/.test(F)&&!np()&&G("warning","input() i browseren kræver at siden genindlæses. Opdater siden (F5) og prøv igen.");const v=new AbortController;mi.current=v;const w=new xv;gn.current=w,O(!0),Nr(!0),nn(!1),at(!0),G("info",x?"Starter Browser-MicroPython for browser-filen.":"Starter Browser-MicroPython. Forbind Pico med USB for at køre på selve Picoen.");try{const R=[],j=await w.run(F,{timeoutMs:null,signal:v.signal,onOutput:je=>{R.push(je),G("info",je)},onWaitingForInput:nn});for(const je of j.issues){const rt=je.line?`Linje ${je.line}: `:"";G(je.level==="error"?"error":"warning",`${rt}${je.text}`)}const W=[...R,j.output].filter(Boolean).join(`
`).trim(),fe=j.output.trim();!j.error.trim()&&Fv(W)?cl(W,F):(fe&&G("info",fe),j.error.trim()&&cl(j.error,F,j.unavailable?"warning":"error")),j.ok&&!W&&!j.error.trim()&&G("success","Browser-MicroPython kørte uden output.")}finally{mi.current=null,gn.current=null,w.dispose(),Nr(!1),nn(!1),O(!1)}}async function ro(){var v,w,R;if(tn){(v=mi.current)==null||v.abort(),(w=gn.current)==null||w.stop(),G("warning","Stoppede Browser-MicroPython."),at(!0);return}if(!Kt&&mr){(R=Mn.current)==null||R.reset(),hn(!1),G("warning","Stoppede Browser-MicroPython-terminalen. Variablerne i browser-terminalen blev nulstillet."),at(!0);return}const f=St.current;if(f)try{await f.stop(),G("warning","Stoppede koden på Pico.")}catch(j){G("error",j instanceof Error?j.message:"Kunne ikke stoppe koden.")}finally{Ft(!1),rn.current=!1,Pn(),Hn.current="",at(!0),xi()}}function lo(){const f=sl.current;if(!f)return;const v=f.scrollHeight-f.scrollTop-f.clientHeight<12;at(v)}function Uc(){X([]),at(!0)}function qc(){window.requestAnimationFrame(()=>{const f=sl.current;f&&(f.scrollTop=f.scrollHeight)})}async function Di(){const f=cn?_t:_t.trimEnd();if(cn){if(!Kt){const R=gn.current;if(!R){G("warning","Browser-MicroPython kører ikke lige nu."),Gn();return}mt(""),at(!0),sr(f),R.sendInput(f),Gn();return}const w=St.current;if(!w){G("warning","Pico-terminalen er ikke forbundet."),Gn();return}mt(""),at(!0);try{await w.sendProgramInput(f)}catch(R){G("error",R instanceof Error?R.message:"Kunne ikke sende input til Pico-koden.")}finally{Gn()}return}if(!f.trim())return;if(ui(w=>(w.at(-1)===f?w:[...w,f]).slice(-80)),mn(null),Ht(null),_i){G("warning",Kt?"Tryk Stop, før du skriver i Pico-terminalen.":"Stop offline MicroPython, før du skriver i browser-terminalen."),Gn();return}if(!Kt){const w=Wd(f);if(w.some(j=>j.level==="error")){for(const j of w){const W=j.line?"Linje "+j.line+": ":"";G(j.level==="error"?"error":"warning",W+j.text)}Gn();return}const R=Mn.current??new wv;Mn.current=R,mt(""),hn(!0),at(!0),G("info",">>> "+f);try{let j=!1;const W=await R.send(f,{timeoutMs:15e3,onOutput:Je=>{j=!0,G("info",Je)}}),fe=W.output.trim();fe&&!j&&G("info",fe),W.error.trim()&&cl(W.error,f,W.unavailable?"warning":"error")}catch(j){G("error",j instanceof Error?j.message:"Browser-MicroPython-terminalen fejlede.")}finally{hn(!1),Gn()}return}if(ke){G("warning","Terminalen bruger USB Serial. Bluetooth-forbindelsen kan vise filer, men kan ikke modtage frie terminalkommandoer."),Gn();return}const v=St.current;if(!x||!v){G("warning","Forbind en microcontroller med USB for at skrive i MicroPython-terminalen."),Gn();return}mt(""),hn(!0),at(!0),xt.current=!0,G("info",">>> "+f);try{await v.sendFriendlyLine(f)}catch(w){xt.current=!1,G("error",w instanceof Error?w.message:"Kunne ikke sende kommando til MicroPython REPL.")}finally{hn(!1),Gn()}}function Gn(){window.requestAnimationFrame(()=>{const f=Tn.current;if(!f||f.disabled)return;f.focus();const v=f.value.length;f.selectionStart=v,f.selectionEnd=v})}function ao(f,v,w){if(w.length===0)return null;const R=x||ke;return u.jsxs("div",{className:"ide-install-group",children:[u.jsxs("div",{className:"ide-install-group-head",children:[u.jsx("h3",{children:f}),u.jsx("p",{children:v})]}),u.jsx("div",{className:"ide-install-scroll",children:w.map(j=>{const W=ke&&Vl(j);return u.jsxs("label",{className:`ide-install-row ${W?"disabled":""}`,children:[u.jsx("input",{type:"checkbox",checked:!!I[j.id],disabled:W,onChange:fe=>Ai(j,fe.target.checked)}),u.jsxs("span",{children:[u.jsxs("strong",{children:[un(j),R&&j.kind==="library"&&u.jsx("em",{className:`ide-install-status status-${j.status}`,children:W?"USB":lb(j.status)})]}),u.jsx("small",{children:j.description})]})]},j.id)})})]})}function un(f){return f.kind==="program"?f.label.replace(/\s*\(main\.py\)$/i,""):f.label}function ea(){Rr&&X([]),at(!0)}function Na(f,v){const w=f.indexOf(`
`,v);return w===-1?f.length:w}function ta(f,v){if(bh(f,v)){ct(null);return}const w=tf(f,v);if(!w||w.query.length<1){ct(null);return}const R=vh(f,v,!0).slice(0,8),j=yh(gr.current,w.start,R.length);R.length>0&&j?(ct({items:R,selected:0,start:w.start,end:v,position:j}),wr(_r.current,0)):ct(null)}function ja(f,v){if(bh(f,v)){Ht(null);return}const w=tf(f,v);if(!w||w.query.length<1){Ht(null);return}const R=vh(f,v,!1).slice(0,8),j=yh(Tn.current,w.start,R.length);R.length>0&&j?(Ht({items:R,selected:0,start:w.start,end:v,position:j}),wr(rr.current,0)):Ht(null)}function Oi(f){const v=f.value.slice(f.selectionStart,f.selectionEnd);jr(Wv(v)?v:"")}function wr(f,v){window.requestAnimationFrame(()=>{const w=f==null?void 0:f.querySelector(`[data-autocomplete-index="${v}"]`);w==null||w.scrollIntoView({block:"nearest"})})}function Li(f=Fe==null?void 0:Fe.items[Fe.selected]){if(!f||!Fe)return;const v=Br(),w=F.slice(0,Fe.start)+f.insert+F.slice(Fe.end),R=Fe.start+f.insert.length-(f.insert.endsWith("()")?1:0);ct(null),Nn(w,R,v),window.requestAnimationFrame(()=>{const j=gr.current;j&&j.focus()})}function qr(f=Ze==null?void 0:Ze.items[Ze.selected]){if(!f||!Ze)return;const v=_t.slice(0,Ze.start)+f.insert+_t.slice(Ze.end),w=Ze.start+f.insert.length-(f.insert.endsWith("()")?1:0);mt(v),Ht(null),window.requestAnimationFrame(()=>{const R=Tn.current;R&&(R.focus(),R.selectionStart=w,R.selectionEnd=w)})}function Bi(f){const v=gr.current;if(!v)return!1;const w=v.selectionStart,R=v.selectionEnd,j={content:F,selectionStart:w,selectionEnd:R},W=F.lastIndexOf(`
`,w-1)+1,fe=R>w&&F[R-1]===`
`?R-1:R,Je=Na(F,fe),je=Je<F.length?Je+1:Je,rt=F.slice(W,je);if(f<0){if(W===0)return!1;const Dt=F.lastIndexOf(`
`,W-2)+1,bn=F.slice(Dt,W),Vt=F.slice(0,Dt)+rt+bn+F.slice(je),jn=-bn.length;return Nn(Vt,w+jn,j,R+jn),!0}if(je>=F.length)return!1;const Rt=Na(F,je),dn=Rt<F.length?Rt+1:Rt,qe=F.slice(je,dn),vt=F.slice(0,W)+qe+rt+F.slice(dn),or=qe.length;return Nn(vt,w+or,j,R+or),!0}function na(f){var dn;if(xa){(f.key==="Enter"||f.key==="Tab"||(f.ctrlKey||f.metaKey)&&["z","y","s"].includes(f.key.toLowerCase()))&&f.preventDefault();return}if((f.ctrlKey||f.metaKey)&&f.key.toLowerCase()==="z"){f.preventDefault(),(f.shiftKey?Yl():qs())&&ct(null);return}if((f.ctrlKey||f.metaKey)&&f.key.toLowerCase()==="y"){f.preventDefault(),Yl()&&ct(null);return}if((f.ctrlKey||f.metaKey)&&f.key.toLowerCase()==="s"){f.preventDefault(),!$&&te.trim()&&Mi();return}if(f.altKey&&!f.ctrlKey&&!f.metaKey&&(f.key==="ArrowUp"||f.key==="ArrowDown")){f.preventDefault(),Bi(f.key==="ArrowUp"?-1:1)&&ct(null);return}if(Fe){if(f.key==="ArrowDown"){f.preventDefault(),ct(qe=>{if(!qe)return qe;const vt=(qe.selected+1)%qe.items.length;return wr(_r.current,vt),{...qe,selected:vt}});return}if(f.key==="ArrowUp"){f.preventDefault(),ct(qe=>{if(!qe)return qe;const vt=(qe.selected-1+qe.items.length)%qe.items.length;return wr(_r.current,vt),{...qe,selected:vt}});return}if(f.key==="Tab"){f.preventDefault(),Li();return}if(f.key==="Enter"){if(!(Fe.items[Fe.selected]&&ip(Fe.items[Fe.selected],F.slice(Fe.start,Fe.end)))){f.preventDefault(),Li();return}ct(null)}if(f.key==="Escape"){f.preventDefault(),ct(null);return}}if(f.key==="Enter"){f.preventDefault();const qe=f.currentTarget,vt=qe.selectionStart,or=qe.selectionEnd,Dt={content:F,selectionStart:vt,selectionEnd:or},bn=F.lastIndexOf(`
`,vt-1)+1,Vt=F.slice(bn,vt),jn=((dn=Vt.match(/^[ \t]*/))==null?void 0:dn[0])??"",Ra=Vt.trimEnd().endsWith(":")?"    ":"",Hr=`
${jn}${Ra}`,pl=F.slice(0,vt)+Hr+F.slice(or),Vr=vt+Hr.length;Nn(pl,Vr,Dt),window.requestAnimationFrame(()=>{qe.selectionStart=Vr,qe.selectionEnd=Vr});return}if(f.key!=="Tab")return;f.preventDefault();const v=f.currentTarget,w=v.selectionStart,R=v.selectionEnd,j={content:F,selectionStart:w,selectionEnd:R},W="    ";if(f.shiftKey){const qe=F.lastIndexOf(`
`,w-1)+1,vt=w===R?Na(F,w):R,or=F.slice(qe,vt);let Dt=0,bn=0;const Vt=or.replace(/(^|\n)( {1,4}|\t)/g,(Ra,Hr,pl,Vr)=>{const xr=pl.length;return qe+Vr<w&&(Dt+=xr),bn+=xr,Hr});if(bn===0)return;const jn=F.slice(0,qe)+Vt+F.slice(vt);Nn(jn,Math.max(qe,w-Dt),j,w===R?Math.max(qe,w-Dt):Math.max(qe,R-bn)),window.requestAnimationFrame(()=>{v.selectionStart=Math.max(qe,w-Dt),v.selectionEnd=w===R?v.selectionStart:Math.max(v.selectionStart,R-bn)});return}if(w===R){const qe=F.slice(0,w)+W+F.slice(R);Nn(qe,w+W.length,j),window.requestAnimationFrame(()=>{v.selectionStart=w+W.length,v.selectionEnd=w+W.length});return}const fe=F.lastIndexOf(`
`,w-1)+1,je=F.slice(fe,R).replace(/^/gm,W),rt=je.split(`
`).length,Rt=F.slice(0,fe)+je+F.slice(R);Nn(Rt,w+W.length,j,R+rt*W.length),window.requestAnimationFrame(()=>{v.selectionStart=w+W.length,v.selectionEnd=R+rt*W.length})}function zi(f){if(cn){f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),Di());return}if(Ze){if(f.key==="ArrowDown"){f.preventDefault(),Ht(v=>{if(!v)return v;const w=(v.selected+1)%v.items.length;return wr(rr.current,w),{...v,selected:w}});return}if(f.key==="ArrowUp"){f.preventDefault(),Ht(v=>{if(!v)return v;const w=(v.selected-1+v.items.length)%v.items.length;return wr(rr.current,w),{...v,selected:w}});return}if(f.key==="Enter"||f.key==="Tab"){f.preventDefault(),qr();return}if(f.key==="Escape"){f.preventDefault(),Ht(null);return}}if(f.key==="Tab"){f.preventDefault();const v=f.currentTarget,w=v.selectionStart,R=v.selectionEnd,j="    ",W=_t.slice(0,w)+j+_t.slice(R),fe=w+j.length;mt(W),mn(null),Ht(null),window.requestAnimationFrame(()=>{v.selectionStart=fe,v.selectionEnd=fe});return}if(f.key==="ArrowUp"||f.key==="ArrowDown"){if(!(f.key==="ArrowUp"?f.currentTarget.selectionStart===0&&f.currentTarget.selectionEnd===0:f.currentTarget.selectionStart===_t.length&&f.currentTarget.selectionEnd===_t.length)||il.length===0)return;f.preventDefault();const w=f.key==="ArrowUp"?fr===null?il.length-1:Math.max(0,fr-1):fr===null||fr+1>=il.length?null:fr+1;mn(w);const R=w===null?"":il[w]??"";mt(R),Ht(null),at(!0),window.requestAnimationFrame(()=>{const j=Tn.current;j&&(j.selectionStart=R.length,j.selectionEnd=R.length,qc())});return}f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),Di())}return u.jsxs("div",{className:"screen ide-screen",children:[u.jsx(df,{title:"Pico Kodeværksted",onMenu:()=>a()}),va?u.jsx("div",{className:"ide-size-gate",role:"dialog","aria-modal":"true","aria-labelledby":"ide-size-title",children:u.jsxs("div",{className:"ide-size-gate-panel",children:[u.jsx("h2",{id:"ide-size-title",children:"Brug en bærbar for at bruge Kodeværkstedet"}),u.jsx("p",{children:"Denne skærm er for lille, så du skal åbne Kodeværkstedet på en bærbar eller en større skærm."})]})}):u.jsxs("div",{className:"ide-layout",children:[u.jsxs("section",{className:"ide-panel ide-files-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Filer"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:Ks,"aria-label":"Ny fil",title:"Ny fil",children:u.jsx(Xt,{name:"plus",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>{var f;return(f=ba.current)==null?void 0:f.click()},"aria-label":"Importer fil",title:"Importer fil",children:u.jsx(Xt,{name:"upload",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>jt(),disabled:!x&&!ke||$,"aria-label":"Opdater filer",title:"Opdater filer",children:u.jsx(Xt,{name:"refresh",size:20})})]})]}),u.jsx("div",{className:"ide-file-list",children:Ei.length===0?u.jsx("button",{type:"button",disabled:!0,children:"Ingen filer læst"}):Ei.map(f=>{if(f.kind==="separator"){const j=f.id==="pico-files"&&!x&&!ke;return u.jsxs(N.Fragment,{children:[u.jsx("div",{className:`ide-file-separator ${f.id==="browser-files"?"browser-section":""}`,children:u.jsx("span",{children:f.label})}),j&&u.jsx("div",{className:"ide-file-disconnected",role:"status",children:"Ikke forbundet"})]},f.id)}const v=ke&&Vl(f),w=nt[en(f.source,f.path)],R=w!==void 0&&w!==tb(f,ge,re);return u.jsxs("div",{className:`ide-file-row ${te===f.path&&we===f.source?"active":""} ${v?"protected":""}`,children:[u.jsxs("button",{type:"button",onClick:()=>ji(f),disabled:v,title:v?"Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her":void 0,children:[u.jsx("span",{children:f.name}),u.jsxs("small",{title:R?"Ikke gemte ændringer":"Ingen ikke gemte ændringer",children:[f.versions.length>0&&u.jsx("em",{className:"ide-file-version-count",title:`${f.versions.length} gemte versioner i historikken`,children:f.versions.length}),u.jsx("i",{className:`ide-file-dirty-dot ${R?"dirty":"clean"}`,"aria-hidden":"true"})]})]}),u.jsx("button",{className:"ide-file-actions",type:"button",onClick:()=>Zs(f),disabled:f.type!=="file"||$||v,"aria-label":`Filvalg for ${f.name}`,title:v?"Holder Bluetooth-forbindelsen i gang og kan ikke ændres her":"Filvalg",children:u.jsx(Xt,{name:"settings",size:16})})]},`${f.source}:${f.path}`)})})]}),u.jsxs("section",{className:"ide-panel ide-status-panel",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"ide-status-head",children:[u.jsx("h2",{children:ke?"Forbundet Pico":"USB udvikling"}),!ke&&u.jsx("span",{className:`ide-usb-status ${Dr.supported?"available":"unavailable"}`,title:Dr.message,"data-tooltip":Dr.message,role:"img","aria-label":Dr.message,tabIndex:0,children:"!"})]}),ke&&u.jsxs("p",{children:[(s==null?void 0:s.deviceName)??"Pico"," er forbundet via Bluetooth."]})]}),!ke&&u.jsxs("div",{className:"ide-actions",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:x?Mc:Ec,disabled:!Dr.supported||A,children:A?"Forbinder...":x?"Afbryd USB":"Forbind USB"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:hl,disabled:ke||$,children:"Download"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:Cc,disabled:!x||$,children:"Nulstil enhed"})]}),ke&&u.jsxs("div",{className:"ide-actions",children:[u.jsxs("button",{className:"btn btn-primary ide-connection-state",type:"button",disabled:!0,children:[u.jsx(Xt,{name:"power",size:22}),"Bluetooth forbundet"]}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:hl,disabled:$,children:"Startprogrammer og biblioteker"})]}),!ke&&u.jsx("div",{className:"ide-runtime",children:u.jsx("div",{className:"ide-mini-actions single",children:u.jsx("button",{className:"btn btn-outline ide-disconnect-btn",type:"button",onClick:()=>Ae(!0),children:"MicroPython"})})})]}),u.jsxs("section",{className:"ide-panel ide-editor-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("div",{className:"ide-editor-title",children:u.jsxs("h2",{children:[Le(te),u.jsxs("small",{children:[pi," bytes"]})]})}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Ci,disabled:$,children:"Kør"}),ke&&we==="pico"?u.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>gt("manual"),disabled:$,children:"Genstart"}):u.jsx("button",{className:"btn btn-outline",type:"button",onClick:ro,disabled:!tn&&!(!Kt&&mr)&&(!x||!tr),children:"Stop"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Rc,disabled:$||!te.trim(),children:"Gem"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Ys(),disabled:$||!te.trim(),children:"Slet"})]})]}),Si(),u.jsxs("div",{className:"ide-editor-wrap",children:[u.jsx("div",{ref:ya,className:"ide-line-numbers","aria-hidden":"true",style:{transform:`translateY(${-Mr.top}px)`},children:Array.from({length:_n},(f,v)=>u.jsx("span",{children:v+1},v))}),u.jsx("pre",{ref:fi,className:"ide-highlight","aria-hidden":"true",style:{transform:`translate(${-Mr.left}px, ${-Mr.top}px)`},children:eb(F,hr)}),u.jsx("textarea",{ref:gr,className:"ide-editor",value:F,onChange:f=>Nn(f.target.value,f.target.selectionStart,Br(),f.target.selectionEnd,"typing"),onKeyDown:na,onKeyUp:f=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(f.key)||ta(f.currentTarget.value,f.currentTarget.selectionStart)},onClick:f=>{ta(f.currentTarget.value,f.currentTarget.selectionStart),Oi(f.currentTarget)},onSelect:f=>Oi(f.currentTarget),onScroll:f=>{const{scrollTop:v,scrollLeft:w}=f.currentTarget;ya.current&&(ya.current.style.transform=`translateY(${-v}px)`),fi.current&&(fi.current.style.transform=`translate(${-w}px, ${-v}px)`),En({top:v,left:w}),Fe&&ta(f.currentTarget.value,f.currentTarget.selectionStart)},readOnly:xa,"aria-busy":xa,spellCheck:!1}),Fe&&u.jsx("div",{ref:_r,className:`ide-autocomplete placement-${Fe.position.placement}`,role:"listbox","aria-label":"Kodeforslag",style:{left:Fe.position.left,top:Fe.position.top,maxHeight:Fe.position.maxHeight},children:(Fe.position.placement==="above"?Fe.items.map((f,v)=>({item:f,index:v})).reverse():Fe.items.map((f,v)=>({item:f,index:v}))).map(({item:f,index:v})=>u.jsx("button",{className:v===Fe.selected?"active":"",type:"button","data-autocomplete-index":v,onMouseDown:w=>{w.preventDefault(),Li(f)},role:"option","aria-selected":v===Fe.selected,children:f.label},f.label))}),ae&&u.jsxs("div",{className:"ide-editor-loading",role:"status","aria-live":"polite",children:[u.jsx("span",{className:"spinner","aria-hidden":"true"}),u.jsxs("strong",{children:["Indlæser ",Le(ae),"..."]})]})]})]}),u.jsxs("section",{className:"ide-panel ide-terminal-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Terminal"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${nr?"":"active"}`,type:"button",onClick:()=>Ls(f=>!f),"aria-label":nr?"Tekniske fejl er slået fra":"Tekniske fejl er slået til","aria-pressed":!nr,title:nr?"Vis originale tekniske fejl":"Viser originale tekniske fejl",children:"Teknisk"}),u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${Rr?"active":""}`,type:"button",onClick:()=>di(f=>!f),"aria-pressed":Rr,title:Rr?"Terminalen ryddes, hver gang du trykker Kør":"Terminalen beholder tekst, når du trykker Kør",children:"Ryd ved Kør"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Uc,disabled:U.length===0,children:"Ryd"})]})]}),u.jsxs("div",{className:"ide-terminal","aria-live":"polite",ref:sl,onScroll:lo,onClick:()=>{var f;return(f=Tn.current)==null?void 0:f.focus()},children:[U.length===0?u.jsx("div",{className:"term-line",children:"Ingen terminaldata endnu."}):U.map((f,v)=>u.jsx("div",{className:`term-line ${f.variant==="input"?"term-input-echo":`term-${f.level}`}`,children:f.technical&&!nr?f.technical:f.text},`${v}-${f.text}`)),u.jsxs("form",{className:`ide-terminal-command ${_i&&!cn?"locked":""} ${cn?"stdin":""}`,onSubmit:f=>{f.preventDefault(),Di()},children:[u.jsx("span",{"aria-hidden":"true",children:vi}),u.jsx("textarea",{ref:Tn,value:_t,onChange:f=>{mt(f.target.value),mn(null),cn?Ht(null):ja(f.target.value,f.target.selectionStart)},onKeyDown:zi,onKeyUp:f=>{cn||["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(f.key)||ja(f.currentTarget.value,f.currentTarget.selectionStart)},onClick:f=>{cn||ja(f.currentTarget.value,f.currentTarget.selectionStart)},disabled:zs,placeholder:Us,"aria-label":cn?"Input til kørende Pico-kode":"MicroPython-terminalkommando",title:Us,rows:Math.max(1,_t.split(`
`).length)})]}),Ze&&u.jsx("div",{ref:rr,className:`ide-autocomplete ide-repl-autocomplete placement-${Ze.position.placement}`,role:"listbox","aria-label":"Terminalforslag",style:{left:Ze.position.left,top:Ze.position.top,maxHeight:Ze.position.maxHeight},children:(Ze.position.placement==="above"?Ze.items.map((f,v)=>({item:f,index:v})).reverse():Ze.items.map((f,v)=>({item:f,index:v}))).map(({item:f,index:v})=>u.jsx("button",{className:v===Ze.selected?"active":"",type:"button","data-autocomplete-index":v,onMouseDown:w=>{w.preventDefault(),qr(f)},role:"option","aria-selected":v===Ze.selected,children:f.label},f.label))})]})]})]}),le&&u.jsx("div",{className:"ide-restart-overlay",role:"alert","aria-live":"assertive",children:u.jsxs("div",{className:"ide-restart-overlay-panel",children:[u.jsx("div",{className:"spinner"}),u.jsx("p",{children:k.label||"Genstarter Pico..."})]})}),u.jsx("input",{ref:ba,type:"file",accept:".py,.txt,.json,.csv",className:"sr-only",onChange:f=>{var v;Oc((v=f.target.files)==null?void 0:v[0]),f.currentTarget.value=""}}),Re&&u.jsx(Pt,{title:"Gem fil",onClose:()=>Ke(!1),children:u.jsxs("div",{className:"ide-save-options",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>void Ni(),disabled:!x&&!ke||$,children:"Gem filen på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Ac,children:"Download filen til computer"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Fs,children:"Gem filen i browseren"})]})}),Ee&&u.jsx(Pt,{title:"Startprogrammer og biblioteker",onClose:()=>ot(!1),children:u.jsxs("div",{className:"ide-install-list",children:[u.jsx("p",{className:"ide-install-note",children:x||ke?"Vælg et startprogram og de biblioteker dit projekt bruger. Installer lægger filerne på Picoen.":"Du er ikke forbundet til en Pico. Du kan gemme filerne i browseren eller downloade dem til computeren, men de virker først på Picoen, når de er installeret der."}),u.jsxs("div",{className:"ide-install-grid",children:[ao("Startprogrammer (main.py)","Starter automatisk på Picoen.",Z.filter(f=>f.kind==="program")),ao("Biblioteker","Ekstra Python-filer som dine programmer kan importere.",Z.filter(f=>f.kind==="library"))]}),u.jsxs("div",{className:"ide-install-actions",children:[(x||ke)&&u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Jl,disabled:$,children:"Installer på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:to,disabled:$,children:"Download til computer"}),u.jsx("button",{className:x||ke?"btn btn-outline":"btn btn-primary",type:"button",onClick:Ma,disabled:$,children:"Gem i browseren"})]})]})}),on&&u.jsx(Pt,{title:on==="saved"?"main.py er gemt":"Genstart Pico",onClose:()=>gt(null),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:on==="saved"?"Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter.":"Picoen genstarter og kører main.py forfra. Appen forsøger automatisk at genforbinde bagefter."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>void $s("control"),disabled:$,children:"Genstart og åbn kontrolpanel"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void $s("ide"),disabled:$,children:"Genstart og bliv i Kodeværksted"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>gt(null),disabled:$,children:"Senere"})]})}),ee&&u.jsx(Pt,{title:"Installer MicroPython",onClose:()=>Ae(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:"Hvis Picoen er helt frisk, skal MicroPython først lægges på den."}),u.jsxs("ol",{className:"micropython-steps",children:[u.jsx("li",{children:"Hold BOOTSEL-knappen nede."}),u.jsx("li",{children:"Sæt Picoen i USB, og slip derefter BOOTSEL."}),u.jsx("li",{children:"Vælg Pico-model og MicroPython-version herunder, og download UF2-filen."}),u.jsxs("li",{children:["Kopier UF2-filen til drevet ",u.jsx("strong",{children:"RPI-RP2"})]})]}),u.jsxs("div",{className:"micropython-selects",children:[u.jsx("label",{htmlFor:"micropython-board",children:"Pico-model"}),u.jsx("select",{id:"micropython-board",value:We,onChange:f=>De(f.target.value),children:gi.map(f=>u.jsx("option",{value:f,children:f},f))}),u.jsx("label",{htmlFor:"micropython-version",children:"MicroPython-version"}),u.jsx("select",{id:"micropython-version",value:(Or==null?void 0:Or.version)??Et,onChange:f=>Un(f.target.value),children:In.map(f=>u.jsxs("option",{value:f.version,children:[f.version," (",f.date,")"]},`${f.board}:${f.version}:${f.date}`))})]}),Or&&u.jsx("a",{className:"btn btn-primary btn-block",href:Or.url,download:Or.fileName,children:"Download UF2"}),u.jsx("a",{className:"btn btn-outline btn-block",href:"https://www.raspberrypi.com/documentation/microcontrollers/micropython.html",target:"_blank",rel:"noreferrer",children:"Se vejledning"})]})}),Ne&&u.jsx(Pt,{title:"Ny Python-fil",onClose:()=>me(!1),children:u.jsxs("form",{className:"ide-new-file-form",onSubmit:f=>{f.preventDefault(),Qs()},children:[u.jsx("label",{htmlFor:"new-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"new-pico-file",value:E,onChange:f=>V(f.target.value),autoFocus:!0,placeholder:"test"}),u.jsx("span",{children:".py"})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen tilføjer .py automatisk og opretter filen i ",Bs,"."]}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:!hh(E),children:"Opret"})]})}),se&&u.jsx(Pt,{title:Le(se.path),onClose:()=>xe(null),children:u.jsxs("div",{className:"ide-file-action-modal",children:[u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:"Placering"}),u.jsx("strong",{children:se.source==="pico"?"Pico":"Browser"})]}),u.jsxs("form",{className:"ide-file-rename-form",onSubmit:f=>{f.preventDefault(),zc()},children:[u.jsx("label",{htmlFor:"rename-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"rename-pico-file",value:ne,onChange:f=>ie(f.target.value),placeholder:"min_kode"}),u.jsxs("span",{children:[".",Ss(se.path)]})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen beholder filendelsen .",Ss(se.path)," automatisk."]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!Pd(ne,Ss(se.path))||Pd(ne,Ss(se.path))===se.path||$,children:"Gem navn"})]}),u.jsxs("div",{className:"ide-file-action-buttons",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void Bc(),disabled:$,children:"Dupliker"}),u.jsx("button",{className:"btn btn-outline btn-danger btn-block",type:"button",onClick:()=>Ys(se),disabled:$,children:"Slet"})]}),u.jsxs("section",{className:"ide-version-history",children:[u.jsx("h4",{children:"Versionshistorik"}),se.versions.length===0?u.jsx("p",{children:"Versionshistorik: 0 gemte versioner."}):u.jsx("div",{className:"ide-version-list",children:se.versions.map(f=>u.jsxs("div",{className:"ide-version-row",children:[u.jsx("span",{children:Le(f.path)}),u.jsx("small",{children:f.size!==void 0?`${f.size} bytes`:"Gemt på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>void Js(f),disabled:$,children:"Gendan"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>fl(f),disabled:$,children:"Slet"})]},f.path))})]})]})})]})}function hh(a){var o;const l=(o=a.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:o.replace(/\.py$/i,"").replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"");return l?`/${l}.py`:""}function Vv(a){const l=a.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop(),o=l==null?void 0:l.match(/^(.+)\.(py|txt|json|csv)$/i);if(!o)return"";const s=ap(o[1]);return s?`/${s}.${o[2].toLowerCase()}`:""}function Pd(a,l="py"){const o=a.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop();if(!o)return"";const s=o.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);if(!s)return"";const d=ap(s[1]),p=l.replace(/^\./,"").toLowerCase(),g=(s[2]??(p||"py")).toLowerCase();return d?`/${d}.${g}`:""}function Iv(a){return Le(a).replace(/\.(py|txt|json|csv)$/i,"")}function ap(a){return a.replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"")}function Ss(a){var s;const l=Le(a).match(/\.([a-z0-9]+)$/i),o=(s=l==null?void 0:l[1])==null?void 0:s.toLowerCase();return o&&["py","txt","json","csv"].includes(o)?o:"py"}function Hl(a){return a.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}function ph(){return ri.map(a=>({...a,status:"unknown",detail:"Kan gemmes uden Pico. Forbind en Pico for at installere."}))}function gh(a){const l={};return a.forEach(o=>{l[o.id]=!1}),l}function Le(a){return a.split("/").filter(Boolean).pop()??a}function oc(a){return a.replace(/\\/g,"/").toLowerCase()==="/main.py"}function _h(a){const l=a.userAgent||"",o=a.platform||"",s=a.maxTouchPoints||0,d=/Android.*Mobile|iPhone|iPod|Windows Phone|Mobile Safari/i.test(l),p=/Macintosh/i.test(o)&&s>1;return d&&!p}function Pv(a){return a instanceof DOMException&&a.name==="AbortError"}function Fv(a){return/Traceback \(most recent call last\):/.test(a)||/\b(?:SyntaxError|NameError|TypeError|ValueError|IndentationError|ImportError|ModuleNotFoundError|ZeroDivisionError|IndexError|KeyError|AttributeError):/.test(a)}function Vl(a){return Gv(a)}function Gv(a){return a.path.replace(/\\/g,"/").toLowerCase()==="/picobluetooth.py"}const ef=[...["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"].map(a=>({label:a,insert:`${a}${["for","if","while","def","class","elif","else","try","except","finally","with"].includes(a)?" ":""}`})),...["abs","all","any","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","exec","filter","float","getattr","hasattr","hash","hex","id","input","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","open","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","zip"].map(a=>({label:`${a}()`,insert:`${a}()`})),{label:"for i in range():",insert:"for i in range():"},{label:"while True:",insert:"while True:"},{label:"if True:",insert:"if True:"},{label:"time",insert:"time"},{label:"time.",insert:"time."},{label:"time.sleep",insert:"time.sleep"},{label:"time.sleep()",insert:"time.sleep()"},{label:"time.sleep_ms()",insert:"time.sleep_ms()"},{label:"time.ticks_ms()",insert:"time.ticks_ms()"},{label:"time.ticks_diff()",insert:"time.ticks_diff()"},{label:"time.sleep_us()",insert:"time.sleep_us()"},{label:"time.ticks_us()",insert:"time.ticks_us()"},{label:"machine",insert:"machine"},{label:"machine.",insert:"machine."},{label:"machine.Pin",insert:"machine.Pin"},{label:"machine.PWM",insert:"machine.PWM"},{label:"machine.ADC",insert:"machine.ADC"},{label:"machine.I2C",insert:"machine.I2C"},{label:"machine.SPI",insert:"machine.SPI"},{label:"machine.Timer",insert:"machine.Timer"},{label:"machine.UART",insert:"machine.UART"},{label:"machine.reset()",insert:"machine.reset()"},{label:"machine.freq()",insert:"machine.freq()"},{label:"Pin()",insert:"Pin()"},{label:"PWM()",insert:"PWM()"},{label:"ADC()",insert:"ADC()"},{label:"I2C()",insert:"I2C()"},{label:"SPI()",insert:"SPI()"},{label:"Timer()",insert:"Timer()"},{label:"UART()",insert:"UART()"},{label:"Pin.OUT",insert:"Pin.OUT"},{label:"Pin.IN",insert:"Pin.IN"},{label:"Pin.PULL_UP",insert:"Pin.PULL_UP"},{label:"Pin.PULL_DOWN",insert:"Pin.PULL_DOWN"},{label:"Pin.IRQ_FALLING",insert:"Pin.IRQ_FALLING"},{label:"Pin.IRQ_RISING",insert:"Pin.IRQ_RISING"},{label:"import time",insert:"import time"},{label:"import utime as time",insert:"import utime as time"},{label:"import machine",insert:"import machine"},{label:"import random",insert:"import random"},{label:"import os",insert:"import os"},{label:"import sys",insert:"import sys"},{label:"from machine import Pin",insert:"from machine import Pin"},{label:"from machine import Pin, PWM",insert:"from machine import Pin, PWM"},{label:"from machine import Pin, PWM, ADC",insert:"from machine import Pin, PWM, ADC"},{label:"PicoBluetooth",insert:"PicoBluetooth"},{label:"PicoRobotics",insert:"PicoRobotics"},{label:"NeoPixel",insert:"NeoPixel"},{label:"HCSR04",insert:"HCSR04"},{label:"ble.send_toggle_state()",insert:"ble.send_toggle_state()"},{label:"ble.send_slider_state()",insert:"ble.send_slider_state()"},{label:"ble.send_radar()",insert:"ble.send_radar()"},{label:"ble.send_text()",insert:"ble.send_text()"},{label:"ble.send_plot()",insert:"ble.send_plot()"},{label:"on_button(name, is_down):",insert:"on_button(name, is_down):"},{label:"on_slider(name, value):",insert:"on_slider(name, value):"},{label:"on_toggle(name, value):",insert:"on_toggle(name, value):"},{label:"on_connect():",insert:"on_connect():"},{label:"on_disconnect():",insert:"on_disconnect():"},{label:"ValueError",insert:"ValueError"},{label:"TypeError",insert:"TypeError"},{label:"OSError",insert:"OSError"},{label:"Exception",insert:"Exception"}];function vh(a,l,o){const s=tf(a,l);if(!s)return[];const d=$v(a,s.start,l),p=s.query.toLowerCase(),g=d.beforeToken.toLowerCase(),m=d.linePrefix.toLowerCase(),_=o?[...ef,...Xv(a)]:ef;return Kv(_).filter(k=>{const x=k.label.toLowerCase(),T=k.insert.toLowerCase();return T===p||x===p||ip(k,s.query)?!1:d.importLine?Yv(k,d)?x.startsWith(m)||T.startsWith(m)||x.startsWith(p)||T.startsWith(p):!1:g.endsWith(".")&&!T.includes(".")?!1:!!(T.startsWith(p)||x.startsWith(p))})}function $v(a,l,o){const s=a.lastIndexOf(`
`,l-1)+1,d=a.slice(s,o),p=a.slice(s,l),g=/^\s*(?:import|from)\s+[\w.,\s]*$/i.test(d),m=/^\s*from\s+\w+(?:\.\w+)*\s+import\s+/i.test(d);return{linePrefix:d,beforeToken:p,importLine:g,fromImportLine:m}}function Yv(a,l){return l.fromImportLine?!a.insert.includes("(")&&!a.insert.startsWith("import "):a.insert.startsWith("import ")||a.insert.startsWith("from ")?!0:/^[A-Za-z_][A-Za-z0-9_]*$/.test(a.insert)}function Xv(a){const l=new Set,o=[/\bdef\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/g,/\bclass\s+([A-Za-z_][A-Za-z0-9_]*)\b/g,/(?:^|[^\w.])([A-Za-z_][A-Za-z0-9_]*)\s*=/g,/\bfor\s+([A-Za-z_][A-Za-z0-9_]*)\s+in\b/g,/\b([A-Za-z_][A-Za-z0-9_]*)\.([A-Za-z_][A-Za-z0-9_]*)\s*\(/g];for(const s of o)for(const d of a.matchAll(s))d[1]&&l.add(d[1]),d[2]&&l.add(d[2]);return[...l].filter(s=>s.length>1&&!Qv.has(s)).sort((s,d)=>s.localeCompare(d,"da")).map(s=>({label:s,insert:s}))}function Kv(a){const l=new Set,o=[];for(const s of a){const d=s.insert.toLowerCase();l.has(d)||(l.add(d),o.push(s))}return o}const Qv=new Set(ef.map(a=>a.insert.replace(/[().: ]+$/g,"")));function tf(a,l){const s=a.slice(0,l).match(/[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_.]*$/);return!s||s.index===void 0?null:{query:s[0],start:s.index}}function bh(a,l){const o=a.lastIndexOf(`
`,Math.max(0,l-1))+1;let s=null,d=null,p=!1;for(let g=0;g<l;g+=1){const m=a[g],_=a.slice(g,g+3);if(d){_===d.repeat(3)&&(d=null,g+=2);continue}if(s){if(p){p=!1;continue}if(m==="\\"){p=!0;continue}m===s&&(s=null),m===`
`&&(s=null);continue}if(m==="#"){const b=a.indexOf(`
`,g),k=b===-1?a.length:b;if(l<=k&&g>=o)return!0;g=k;continue}if(_==='"""'||_==="'''"){d=m,g+=2;continue}(m==='"'||m==="'")&&(s=m)}return s!==null||d!==null}function ip(a,l){const o=a.insert.trim();return!/[().]/.test(o)&&o.toLowerCase()===l.toLowerCase()}function Wv(a){return/^[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_]*$/.test(a)}function yh(a,l,o){if(!a)return null;const s=a.closest(".ide-terminal")??a.parentElement;if(!s)return null;const d=window.getComputedStyle(a),p=document.createElement("div"),g=document.createElement("span"),m=s.getBoundingClientRect(),_=a.getBoundingClientRect();p.style.position="absolute",p.style.visibility="hidden",p.style.pointerEvents="none",p.style.whiteSpace="pre-wrap",p.style.overflowWrap="break-word",p.style.wordBreak=d.wordBreak,p.style.boxSizing=d.boxSizing,p.style.width=`${a.getBoundingClientRect().width}px`,p.style.padding=d.padding,p.style.border=d.border,p.style.font=d.font,p.style.lineHeight=d.lineHeight,p.style.letterSpacing=d.letterSpacing,p.style.tabSize=d.tabSize,p.style.fontVariantLigatures=d.fontVariantLigatures,p.style.scrollbarGutter=d.scrollbarGutter,p.style.left=`${_.left-m.left-a.scrollLeft}px`,p.style.top=`${_.top-m.top-a.scrollTop}px`,p.textContent=a.value.slice(0,l),g.textContent=a.value.slice(l,l+1)||" ",p.appendChild(g),s.appendChild(p);const b=g.getBoundingClientRect();p.remove();const k=34,x=14,T=Math.min(210,Math.max(k+x,o*k+x)),A=Zv(b.left-m.left,8,Math.max(8,s.clientWidth-296)),B=b.top-m.top+s.scrollTop,U=b.bottom-m.top+s.scrollTop+10,X=s.scrollTop+s.clientHeight-U-8,$=B-s.scrollTop-8,O=s.scrollTop+s.clientHeight,le=X>=Math.min(T,k*2)||X>=$?"below":"above",H=Math.max(k+x,Math.min(T,le==="below"?X:$)),ue=le==="below"?Math.min(U,O-H-8):Math.max(s.scrollTop+8,B-H-8);return{left:A,top:ue,maxHeight:H,placement:le}}function Zv(a,l,o){return Math.max(l,Math.min(o,a))}function Jv(a){const l=[];let o=null,s=null,d=!1,p=0,g=0;const m=(_,b)=>{_>p&&l.push({text:a.slice(p,_),isTriple:b}),p=_};for(;g<a.length;){const _=a[g],b=a.slice(g,g+3);if(s){if(b===s.repeat(3)){g+=3,s=null,m(g,!0);continue}g+=1;continue}if(o){d?d=!1:_==="\\"?d=!0:(_===o||_===`
`)&&(o=null),g+=1;continue}if(_==="#"){const k=a.indexOf(`
`,g);g=k===-1?a.length:k;continue}if(b==='"""'||b==="'''"){m(g,!1),s=_,g+=3;continue}(_==='"'||_==="'")&&(o=_),g+=1}return m(a.length,s!==null),l}function eb(a,l=""){const o=/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,s=/(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm,d=[];let p=0;function g(m,_){m.split(/(\r?\n)/).forEach(b=>{if(b===`
`||b===`\r
`){d.push(u.jsx("br",{},`br-${p++}`));return}b!==""&&_(b,`part-${p++}`)})}return Jv(a).forEach(m=>{if(m.isTriple){g(m.text,(_,b)=>{d.push(...Ns(_,l,b,"tok-string"))});return}g(m.text,(_,b)=>{let k=0;[..._.matchAll(s)].forEach((T,A)=>{const B=T.index??0;B>k&&d.push(...wh(_.slice(k,B),o,`${b}-${A}-plain`,l));const U=T[0],X=U.startsWith("#")?"tok-comment":U.startsWith('"')||U.startsWith("'")?"tok-string":/^\d/.test(U)?"tok-number":"tok-builtin";d.push(...Ns(U,l,`${b}-${A}-token`,X)),k=B+U.length}),k<_.length&&d.push(...wh(_.slice(k),o,`${b}-tail`,l))})}),d.length?d:" "}function wh(a,l,o,s=""){const d=[];let p=0;const g=new RegExp(l.source,"g");return[...a.matchAll(g)].forEach((m,_)=>{const b=m.index??0;b>p&&d.push(...Ns(a.slice(p,b),s,`${o}-${_}-plain`)),d.push(...Ns(m[0],s,`${o}-${_}-keyword`,"tok-keyword")),p=b+m[0].length}),p<a.length&&d.push(...Ns(a.slice(p),s,`${o}-plain-end`)),d}function Ns(a,l,o,s=""){if(!l)return[u.jsx("span",{className:s||void 0,children:a},o)];const d=[],p=l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),g=new RegExp(`(?<![A-Za-zÆØÅæøå0-9_])(${p})(?![A-Za-zÆØÅæøå0-9_])`,"g");let m=0;return[...a.matchAll(g)].forEach((_,b)=>{const k=_.index??0;k>m&&d.push(u.jsx("span",{className:s||void 0,children:a.slice(m,k)},`${o}-${b}-before`)),d.push(u.jsx("span",{className:`${s} tok-match`.trim(),children:_[0]},`${o}-${b}-match`)),m=k+_[0].length}),m<a.length&&d.push(u.jsx("span",{className:s||void 0,children:a.slice(m)},`${o}-after`)),d.length?d:[u.jsx("span",{className:s||void 0,children:a},o)]}function cc(a){return a.length>0?a:[{path:Jd,content:lp,uploaded:!1,updatedAt:Date.now()}]}function Fd(a,l,o,s){const d=a.filter(p=>p.path!==l);return[{path:l,content:o,uploaded:s,updatedAt:Date.now()},...d].sort((p,g)=>g.updatedAt-p.updatedAt)}function hc(a){return a.map(l=>({name:Le(l.path),path:l.path,type:"file",size:new Blob([l.content]).size}))}function tb(a,l,o){var s;return a.source==="pico"?o[a.path]:(s=l.find(d=>d.path===a.path))==null?void 0:s.content}function pc(a){const l=a.replace(/\\/g,"/"),o=l.lastIndexOf("/"),s=o>=0?l.slice(0,o+1):"",p=(o>=0?l.slice(o+1):l).match(/^(.+)_backup(\d+)(\.[^.]+)$/i);return p?{originalPath:`${s}${p[1]}${p[3]}`,index:parseInt(p[2],10)}:null}function Il(a){return pc(a)!==null}function li(a){const l=new Map;for(const o of a){const s=pc(o.path);if(!s)continue;const d=l.get(s.originalPath)??[];d.push(o),l.set(s.originalPath,d)}for(const o of l.values())o.sort((s,d)=>{var p,g;return(((p=pc(d.path))==null?void 0:p.index)??0)-(((g=pc(s.path))==null?void 0:g.index)??0)});return l}function nb(a,l){const o=a.replace(/\\/g,"/"),s=o.lastIndexOf("/"),d=s>=0?o.slice(0,s+1):"/",p=s>=0?o.slice(s+1):o.replace(/^\/+/,""),g=p.lastIndexOf("."),m=g>0?p.slice(0,g):p,_=g>0?p.slice(g):"",b=new Set(l.map(k=>k.path.toLowerCase()));for(let k=1;k<1e3;k+=1){const x=`${d}${m}_backup${k}${_}`;if(!b.has(x.toLowerCase()))return x}return`${d}${m}_backup${Date.now()}${_}`}function rb(a,l){const o=a.replace(/\\/g,"/"),s=o.lastIndexOf("/"),d=s>=0?o.slice(0,s+1):"/",p=s>=0?o.slice(s+1):o.replace(/^\/+/,""),g=p.lastIndexOf("."),m=g>0?p.slice(0,g):p,_=g>0?p.slice(g):"";for(let b=1;b<1e3;b+=1){const k=b===1?"_kopi":`_kopi${b}`,x=`${d}${m}${k}${_}`;if(!l(x)&&!Il(x))return x}return`${d}${m}_kopi${Date.now()}${_}`}function lb(a){return a==="ok"?"Nyeste":a==="outdated"?"Opdater":a==="missing"?"Mangler":"Ikke tjekket"}function ab(a,l,o,s){const d=new Map,p=li(a),g=li(hc(l));for(const x of a)Il(x.path)||d.set(en("pico",x.path),{kind:"file",name:x.name,path:x.path,type:x.type,size:x.size,source:"pico",uploaded:!0,versions:p.get(x.path)??[]});for(const x of l)Il(x.path)||d.set(en("local",x.path),{kind:"file",name:Le(x.path),path:x.path,type:"file",source:"local",uploaded:!1,versions:g.get(x.path)??[]});for(const x of Object.keys(o)){const[T,...A]=x.split(":"),B=A.join(":");if(T!=="local"&&T!=="pico"||!B)continue;const U=d.get(x);if(U){d.set(x,U);continue}d.set(x,{kind:"file",name:Le(B),path:B,type:"file",source:T,uploaded:!1,versions:T==="pico"?p.get(B)??[]:g.get(B)??[]})}const m=[...d.values()].sort(sb),_=m.filter(x=>x.source==="pico"),b=m.filter(x=>x.source==="local"),k=[];return _.length>0||s?k.push({kind:"separator",id:"pico-files",label:s?"Pico":"Microcontroller"},..._):k.push({kind:"separator",id:"pico-files",label:"Microcontroller"}),b.length>0&&k.push({kind:"separator",id:"browser-files",label:"Browser"},...b),k}const ib=new Map([["main.py",0],["devicesettings.txt",1],["layout.txt",2],["picobluetooth.py",3],["picofly.py",4],["picorobotics.py",5],["neopixel.py",6],["hcsr04.py",7]]);function sb(a,l){const o=xh(a.path),s=xh(l.path);return o===null&&s===null?a.name.localeCompare(l.name,"da"):o===null?-1:s===null?1:o-s}function xh(a){var o;const l=(o=a.replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:o.toLowerCase();return l?ib.get(l)??null:null}function kh(a,l,o){if(!(l in a))return a;const s={...a,[o]:a[l]};return delete s[l],s}function ob(a,l,o,s){const d=`${l}:${o}`;if(!(d in a))return a;const p={...a,[`${l}:${s}`]:a[d]};return delete p[d],p}function cb({open:a}){const l=oe(O=>O.screen),o=oe(O=>O.active),s=oe(O=>O.toggleSideMenu),d=oe(O=>O.toggleDebugger),p=oe(O=>O.setEditMode),g=oe(O=>O.openMenuPage),m=oe(O=>O.disconnect),_=oe(O=>O.openPicoIde),b=oe(O=>O.closePicoIde),k=oe(O=>O.picoIdeOrigin),x=l==="dashboard",T=l==="control",A=l==="ide",B=T&&!!(o!=null&&o.canEdit),U=!T||!!(o!=null&&o.isOwnedByMe)||!!(o!=null&&o.canEditCode),X=k==="control",$=k==="control"?"Pico Kontrol Panel":"Hovedmenu";return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:`scrim ${a?"open":"closing"}`,onClick:()=>s(!1)}),u.jsxs("nav",{className:`sidemenu sidemenu-${l} ${a?"open":"closing"}`,"aria-label":"Sidemenu",children:[x&&u.jsxs(u.Fragment,{children:[u.jsx(Bn,{label:"Bruger",icon:"user",onClick:()=>g("user-settings")}),u.jsx(Bn,{label:"Indstillinger",icon:"settings",onClick:()=>g("application-settings")}),u.jsx(Bn,{label:"Kodeværksted",icon:"picoIde",onClick:_,disabled:!U}),u.jsx(Gd,{}),u.jsx(Bn,{label:"Om appen",icon:"info",onClick:()=>g("application-about")}),u.jsx(Bn,{label:"Hjælp",icon:"help",onClick:()=>g("application-help")}),u.jsx(Bn,{label:"Fejlfinding",icon:"debugger",onClick:()=>d(!0)})]}),T&&u.jsxs(u.Fragment,{children:[u.jsx(Bn,{label:"Indstillinger",icon:"settings",onClick:()=>g("device-settings")}),u.jsx(Bn,{label:"Rediger",icon:"edit",onClick:()=>p(!0),disabled:!B}),u.jsx(Bn,{label:"Kodeværksted",icon:"picoIde",onClick:_,disabled:!U}),u.jsx(Gd,{}),u.jsx(Bn,{label:"Hjælp",icon:"help",onClick:()=>g("device-help")}),u.jsx(Bn,{label:"Fejlfinding",icon:"debugger",onClick:()=>d(!0)})]}),A&&u.jsxs(u.Fragment,{children:[u.jsx(Bn,{label:$,icon:"back",onClick:b}),u.jsx(Gd,{})]}),u.jsx("div",{className:"spacer"}),(T||A&&X)&&u.jsx(Bn,{label:"Forlad",icon:"exit",onClick:()=>m()})]})]})}function Bn({label:a,icon:l,disabled:o,onClick:s}){return u.jsxs("button",{className:"iconbtn",type:"button",onClick:s,disabled:o,"aria-label":a,children:[u.jsx(Xt,{name:l}),u.jsx("span",{children:a})]})}function Gd(){return u.jsxs("a",{className:"iconbtn sidemenu-link",href:"https://www.teknologiskolen.dk/",target:"_blank",rel:"noreferrer","aria-label":"Teknologiskolen",children:[u.jsx("img",{src:xg,alt:""}),u.jsx("span",{children:"Teknologiskolen"})]})}const ub={error:"term-error",success:"term-success",warning:"term-warning",info:""},Sh={error:"[FEJL] ",success:"[SUCCES] ",warning:"[ADVARSEL] ",info:""};function db(){const a=new Date,l=o=>String(o).padStart(2,"0");return`${l(a.getDate())}-${l(a.getMonth()+1)}-${a.getFullYear()}-${l(a.getHours())}-${l(a.getMinutes())}`}function fb(){const a=oe(d=>d.logs),l=oe(d=>d.clearLogs),o=oe(d=>d.toggleDebugger);function s(){const d=[...a].reverse().map(_=>`${_.time} ${Sh[_.level]}${_.message}`).join(`
`),p=new Blob([d],{type:"text/plain"}),g=URL.createObjectURL(p),m=document.createElement("a");m.href=g,m.download=`${db()}.txt`,m.click(),URL.revokeObjectURL(g)}return u.jsxs(Pt,{title:"Fejlfinding",onClose:()=>o(!1),closeVariant:"circle",children:[u.jsx("div",{className:"terminal",children:a.length===0?u.jsx("div",{className:"term-line",children:"Ingen log endnu."}):a.map((d,p)=>u.jsxs("div",{className:`term-line ${ub[d.level]}`,children:[d.time," ",Sh[d.level],d.message]},`${d.time}-${p}`))}),u.jsxs("div",{className:"row",style:{marginTop:14},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:l,children:"Ryd"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:s,children:"Gem logfil"})]})]})}const sp=4,er=sp*4+17,Eh=80,mb=20,hb=30660;function pb(a){const l=new TextEncoder().encode(a);if(l.length>76)throw new Error("QR-koden er for lang.");const o=Th(!1),s=Th(!1);gb(o,s);const d=vb(l),p=wb(d,mb);return bb(o,s,[...d,...p]),yb(o,s),o}function Th(a){return Array.from({length:er},()=>Array.from({length:er},()=>a))}function Jn(a,l,o,s,d,p=!0){a[s][o]=d,p&&(l[s][o]=!0)}function gb(a,l){$d(a,l,0,0),$d(a,l,er-7,0),$d(a,l,0,er-7);for(let o=0;o<er;o+=1)l[6][o]||Jn(a,l,o,6,o%2===0),l[o][6]||Jn(a,l,6,o,o%2===0);_b(a,l,26,26),Jn(a,l,8,sp*4+9,!0)}function $d(a,l,o,s){for(let d=-1;d<=7;d+=1)for(let p=-1;p<=7;p+=1){const g=o+p,m=s+d;if(g<0||m<0||g>=er||m>=er)continue;const _=p>=0&&p<=6&&d>=0&&d<=6&&(p===0||p===6||d===0||d===6||p>=2&&p<=4&&d>=2&&d<=4);Jn(a,l,g,m,_)}}function _b(a,l,o,s){for(let d=-2;d<=2;d+=1)for(let p=-2;p<=2;p+=1)l[s+d][o+p]||Jn(a,l,o+p,s+d,Math.max(Math.abs(p),Math.abs(d))!==1)}function vb(a){const l=[];uc(l,4,4),uc(l,a.length,8);for(const s of a)uc(l,s,8);for(uc(l,0,Math.min(4,Eh*8-l.length));l.length%8!==0;)l.push(0);const o=[];for(let s=0;s<l.length;s+=8)o.push(l.slice(s,s+8).reduce((d,p)=>d<<1|p,0));for(let s=236;o.length<Eh;s=s===236?17:236)o.push(s);return o}function uc(a,l,o){for(let s=o-1;s>=0;s-=1)a.push(l>>>s&1)}function bb(a,l,o){const s=o.flatMap(g=>Array.from({length:8},(m,_)=>g>>>7-_&1));let d=0,p=!0;for(let g=er-1;g>=1;g-=2){g===6&&(g-=1);for(let m=0;m<er;m+=1){const _=p?er-1-m:m;for(let b=0;b<2;b+=1){const k=g-b;if(l[_][k])continue;const x=d<s.length?s[d]===1:!1;a[_][k]=x!==((k+_)%2===0),d+=1}}p=!p}}function yb(a,l){const o=s=>(hb>>>s&1)!==0;for(let s=0;s<=5;s+=1)Jn(a,l,8,s,o(s));Jn(a,l,8,7,o(6)),Jn(a,l,8,8,o(7)),Jn(a,l,7,8,o(8));for(let s=9;s<15;s+=1)Jn(a,l,14-s,8,o(s));for(let s=0;s<8;s+=1)Jn(a,l,er-1-s,8,o(s));for(let s=8;s<15;s+=1)Jn(a,l,8,er-15+s,o(s))}const js=new Array(512),nf=new Array(256);let Mh=!1;function op(){if(Mh)return;let a=1;for(let l=0;l<255;l+=1)js[l]=a,nf[a]=l,a<<=1,a&256&&(a^=285);for(let l=255;l<512;l+=1)js[l]=js[l-255];Mh=!0}function cp(a,l){return a===0||l===0?0:js[nf[a]+nf[l]]}function wb(a,l){op();const o=xb(l),s=Array.from({length:l},()=>0);for(const d of a){const p=d^s.shift();s.push(0);for(let g=0;g<l;g+=1)s[g]^=cp(o[g],p)}return s}function xb(a){op();let l=[1];for(let o=0;o<a;o+=1){const s=Array.from({length:l.length+1},()=>0);for(let d=0;d<l.length;d+=1)s[d]^=cp(l[d],js[o]),s[d+1]^=l[d];l=s}return l.slice(1)}function kb(){const a=oe(Ee=>Ee.menuPage),l=oe(Ee=>Ee.closeMenuPage),o=oe(Ee=>Ee.user),s=oe(Ee=>Ee.active),d=oe(Ee=>Ee.layout),p=oe(Ee=>Ee.savedDevices),g=oe(Ee=>Ee.updateUsername),m=oe(Ee=>Ee.createOwnerPairingCode),_=oe(Ee=>Ee.applyOwnerPairingCode),b=oe(Ee=>Ee.clearSavedDevices),k=oe(Ee=>Ee.resetApplicationData),x=oe(Ee=>Ee.saveDeviceSettings),T=oe(Ee=>Ee.setEditMode),A=oe(Ee=>Ee.askConfirm),[B,U]=N.useState((o==null?void 0:o.username)??""),[X,$]=N.useState(!1),[O,le]=N.useState(""),[H,ue]=N.useState(""),[pe,ae]=N.useState(!1),[_e,ge]=N.useState(""),Ce=N.useRef(null),[te,Ue]=N.useState((s==null?void 0:s.icon)??Pl),[we,Xe]=N.useState(!1),[F,z]=N.useState((s==null?void 0:s.canOthersConnect)??!1),[Z,de]=N.useState((s==null?void 0:s.canOthersEdit)??!1),[Ne,me]=N.useState((s==null?void 0:s.canOthersEditCode)??!1),[E,V]=N.useState((s==null?void 0:s.gridCols)??11),[ne,ie]=N.useState((s==null?void 0:s.gridRows)??31),[se,xe]=N.useState(!1);N.useEffect(()=>{a==="user-settings"&&(U((o==null?void 0:o.username)??""),ue(""),ge(""),ae(!1))},[a,o==null?void 0:o.username]),N.useEffect(()=>{a==="device-settings"&&s&&(Ue(s.icon),z(s.canOthersConnect),de(s.canOthersEdit),me(s.canOthersEditCode),V(s.gridCols),ie(s.gridRows))},[s,a]),N.useEffect(()=>{if(!pe)return;let Ee=!1,ot=null,I=0;async function J(){var Ae;const ee=window.BarcodeDetector;if(!ee||!((Ae=navigator.mediaDevices)!=null&&Ae.getUserMedia)){ge("Denne browser kan ikke scanne QR-koder. Skriv ejerkoden i stedet."),ae(!1);return}try{ot=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const Qe=Ce.current;if(!Qe)return;Qe.srcObject=ot,await Qe.play();const Ve=new ee({formats:["qr_code"]}),We=async()=>{var De;if(!Ee){try{const Un=(De=(await Ve.detect(Qe)).find(on=>on.rawValue))==null?void 0:De.rawValue;if(Un){ue(Un),_(Un)&&$(!1),ae(!1);return}}catch{}I=window.requestAnimationFrame(We)}};I=window.requestAnimationFrame(We)}catch{ge("Kameraet kunne ikke åbnes. Skriv ejerkoden i stedet."),ae(!1)}}return J(),()=>{Ee=!0,I&&window.cancelAnimationFrame(I),ot==null||ot.getTracks().forEach(ee=>ee.stop())}},[_,pe]);const Re=(Ee,ot)=>Number.isFinite(Ee)?Math.max(ii,Math.min(si,Math.round(Ee))):ot,Ke=(o==null?void 0:o.username)??"",Be=B.trim(),he=Be.length>0&&Be!==Ke;if(!a)return null;if(a==="user-settings"){let Ee=function(){const J=m();J&&(le(J),ue(""),$(!0))},ot=function(){_(H)&&(ue(""),$(!1))};async function I(){var J;try{await((J=navigator.clipboard)==null?void 0:J.writeText(O))}catch{}}return u.jsxs(u.Fragment,{children:[u.jsx(Pt,{title:"Brugerindstillinger",onClose:l,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(dr,{label:"GUID",value:(o==null?void 0:o.userID)??"Ukendt"}),u.jsxs("div",{className:`field ${B.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-username",value:B,onChange:J=>U(J.target.value),maxLength:24,autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>g(B),disabled:!he,children:"Gem nyt brugernavn"}),u.jsx("div",{className:"notice",children:"Ejerkode bruges, hvis den samme person skal forbinde fra flere browsere eller telefoner."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:Ee,children:"Ejerkode"}),u.jsx("button",{className:"btn btn-outline btn-block btn-danger",type:"button",onClick:()=>A({title:"Start forfra",message:"Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.",confirmLabel:"Slet alt",onConfirm:()=>{k()}}),children:"Slet brugerdata"})]})}),X&&u.jsx(Pt,{title:"Del ejerkode",onClose:()=>$(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Eb,{code:O}),u.jsx("code",{className:"owner-code-text",children:O}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void I(),children:"Kopiér ejerkode"}),u.jsxs("div",{className:`field ${H.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-owner-code",value:H,onChange:J=>ue(J.target.value),autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-owner-code",children:"Skriv ejerkode"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:ot,disabled:!H.trim(),children:"Brug ejerkode i denne browser"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>ae(J=>!J),children:pe?"Stop scanning":"Scan QR-kode"}),_e&&u.jsx("div",{className:"notice",children:_e}),pe&&u.jsx("video",{className:"owner-code-video",ref:Ce,muted:!0,playsInline:!0})]})})]})}if(a==="application-settings")return u.jsx(Pt,{title:"Applikationsindstillinger",onClose:l,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(dr,{label:"Version",value:Rs}),u.jsx(dr,{label:"Bluetooth",value:kc()?"Tilgængelig":"Ikke tilgængelig"}),u.jsx(dr,{label:"Gemte enheder",value:String(p.length)}),u.jsx("div",{className:"notice",children:"Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne tilladelsen i browserens site- eller Bluetooth-indstillinger."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>A({title:"Ryd gemte enheder",message:"Vil du fjerne alle gemte enheder fra denne browser?",confirmLabel:"Ryd",onConfirm:b}),disabled:p.length===0,children:"Ryd gemte enheder"})]})});if(a==="application-about")return u.jsx(Pt,{title:"Om appen",onClose:l,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Pico Kontrol Panel er lavet til at bygge og fjernstyre sjove eller seje Raspberry Pi Pico W-projekter."}),u.jsx(dr,{label:"Udvikler",value:"Christian Bröchner Rasmussen"}),u.jsx(dr,{label:"Version",value:Rs})]})});if(a==="application-help")return u.jsx(Pt,{title:"Hjælp til applikationen",onClose:l,children:u.jsxs("div",{className:"settings-stack prose help-lesson",children:[u.jsxs("div",{className:"help-lesson-card",children:[u.jsx("strong",{children:"Komplet undervisningsforløb"}),u.jsx("p",{children:"Linket åbner Teknologiskolens guide til Pico Kontrol Panel. Her kan du lære hele arbejdsgangen: browseropsætning, Kodeværkstedet, MicroPython, USB-installation, Bluetooth-forbindelse, kontrolpaneler og trådløs kodeudvikling."})]}),u.jsxs("div",{className:"help-lesson-list","aria-label":"Undervisningsforløbet indeholder",children:[u.jsx("span",{children:"Trin-for-trin opsætning"}),u.jsx("span",{children:"Øvelser til kode og kontrolpanel"}),u.jsx("span",{children:"Projektforslag med Pico W"})]}),u.jsx("p",{className:"help-lesson-destination",children:"Du sendes til materialer.teknologiskolen.dk i en ny fane."}),u.jsx("a",{className:"btn btn-primary btn-block",href:"https://materialer.teknologiskolen.dk/lessons/fjernstyring-af-raspberry-pi-pico-w",target:"_blank",rel:"noreferrer",children:"Åbn komplet undervisningsforløb"})]})});if(a==="device-settings"){const Ee=!!(s!=null&&s.isOwnedByMe);async function ot(I=!1){if(!s||!Ee)return;const J=Re(E,s.gridCols),ee=Re(ne,s.gridRows),Ae=Sb(d,J,ee);if(Ae&&!I){A({title:"Gitter kan påvirke layout",message:`Det nuværende layout bruger op til ${Ae.requiredCols} kolonner og ${Ae.requiredRows} rækker. Det nye gitter er ${J} × ${ee}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,confirmLabel:"Gem alligevel",onConfirm:()=>{ot(!0)}});return}xe(!0),await x(te,F,F&&Z,F&&Ne,J,ee),V(J),ie(ee),xe(!1),l()}return u.jsx(Pt,{title:"Enhedsindstillinger",onClose:l,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(dr,{label:"Navn",value:(s==null?void 0:s.deviceName)??"Ukendt"}),u.jsx(dr,{label:"Ejer",value:Tb(s)}),Ee?u.jsxs(u.Fragment,{children:[u.jsxs("button",{className:"device-icon-pick settings-icon-pick",type:"button",onClick:()=>Xe(!0),"aria-label":"Vælg ikon",children:[u.jsx(Os,{slug:te}),u.jsx("span",{className:"badge",children:u.jsx(Xt,{name:"plus",size:22})})]}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:F?"":"active",onClick:()=>z(!1),children:"Privat"}),u.jsx("button",{type:"button",className:F?"active":"",onClick:()=>z(!0),children:"Offentlig"})]}),F&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:Z?"":"active",onClick:()=>de(!1),children:"Nej"}),u.jsx("button",{type:"button",className:Z?"active":"",onClick:()=>de(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:Ne?"":"active",onClick:()=>me(!1),children:"Nej"}),u.jsx("button",{type:"button",className:Ne?"active":"",onClick:()=>me(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter"}),u.jsxs("div",{className:"row",children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-cols",children:"Kolonner"}),u.jsx("input",{id:"device-cols",type:"number",min:ii,max:si,value:Number.isNaN(E)?"":E,onChange:I=>V(parseInt(I.target.value,10)),onBlur:()=>V(Re(E,(s==null?void 0:s.gridCols)??11))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-rows",children:"Rækker"}),u.jsx("input",{id:"device-rows",type:"number",min:ii,max:si,value:Number.isNaN(ne)?"":ne,onChange:I=>ie(parseInt(I.target.value,10)),onBlur:()=>ie(Re(ne,(s==null?void 0:s.gridRows)??31))})]})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>ot(),disabled:se,children:se?"Gemmer...":"Gem enhedsindstillinger"})]}):u.jsxs(u.Fragment,{children:[u.jsx(dr,{label:"Ikon",value:(s==null?void 0:s.icon)??Pl}),u.jsx(dr,{label:"Redigering",value:s!=null&&s.canEdit?"Tilladt":"Ikke tilladt"}),u.jsx(dr,{label:"Gitter",value:`${(s==null?void 0:s.gridCols)??0} × ${(s==null?void 0:s.gridRows)??0}`})]}),we&&u.jsx(Ph,{selected:te,onSelect:Ue,onClose:()=>Xe(!1)})]})})}return u.jsx(Pt,{title:"Hjælp til enheden",onClose:l,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Knapper sender en kommando med deres navn, når de trykkes."}),u.jsx("p",{children:"Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse."}),u.jsx("p",{children:"Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen."}),(s==null?void 0:s.canEdit)&&u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>T(!0),children:"Rediger layout"})]})})}function Sb(a,l,o){let s=0,d=0;for(const p of a)Ds(p)&&(s=Math.max(s,Math.ceil((p.centerX2+p.spanX)/2)+1),d=Math.max(d,Math.ceil((p.centerY2+p.spanY)/2)+1));return l<s||o<d?{requiredCols:s,requiredRows:d}:null}function Eb({code:a}){const l=N.useMemo(()=>pb(a),[a]),o=l.length;return u.jsxs("svg",{className:"owner-code-qr",viewBox:`0 0 ${o+8} ${o+8}`,role:"img","aria-label":"QR-kode til ejerkode",children:[u.jsx("rect",{width:o+8,height:o+8,fill:"white"}),l.map((s,d)=>s.map((p,g)=>p?u.jsx("rect",{x:g+4,y:d+4,width:"1",height:"1",fill:"currentColor"},`${g}-${d}`):null))]})}function Tb(a){var l;return a?a.isOwnedByMe?"Dig":((l=a.ownerName)==null?void 0:l.trim())||"Anden bruger":"Ukendt"}function dr({label:a,value:l}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:a}),u.jsx("strong",{children:l})]})}function Mb(){const a=oe(s=>s.confirmDialog),l=oe(s=>s.closeConfirm);if(!a)return null;function o(){a==null||a.onConfirm(),l()}return u.jsx(Pt,{title:a.title,onClose:l,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:a.message}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:l,children:a.cancelLabel??"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:o,children:a.confirmLabel??"Fortsæt"})]})]})})}function Nb(){const a=oe(s=>s.connectionLost),l=oe(s=>s.reconnectLostDevice),o=oe(s=>s.dismissConnectionLost);return a?u.jsx(Pt,{title:"Forbindelse afbrudt",onClose:o,children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("p",{className:"confirm-message",children:["Forbindelsen til ",a.deviceName," blev afbrudt. Tjek at Picoen har strøm og er tæt nok på."]}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:o,children:"Luk"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>l(),children:"Genforbind"})]})]})}):null}function jb(){const a=oe(o=>o.toast),l=oe(o=>o.dismissToast);return a?u.jsx("div",{className:"toast",role:"alert",onClick:l,children:a.message},a.id):null}function Rb(){const a=oe(m=>m.screen),l=oe(m=>m.splashTarget),o=oe(m=>m.init),s=oe(m=>m.sideMenuOpen),d=oe(m=>m.debuggerOpen),[p,g]=N.useState(!1);return N.useEffect(()=>{o()},[o]),N.useEffect(()=>{if(s){g(!0);return}const m=setTimeout(()=>g(!1),140);return()=>clearTimeout(m)},[s]),u.jsxs("div",{className:"app",children:[a==="splash"&&l==="intro"&&u.jsx(zm,{}),a==="splash"&&l==="dashboard"&&u.jsx(Hm,{}),a==="splash"&&u.jsx(Rg,{}),a==="intro"&&u.jsx(zm,{}),a==="dashboard"&&u.jsx(Hm,{}),a==="connection"&&u.jsx(Ig,{}),a==="create"&&u.jsx(Gg,{}),a==="control"&&u.jsx(I_,{}),a==="ide"&&u.jsx(Hv,{}),p&&u.jsx(cb,{open:s}),u.jsx(kb,{}),u.jsx(Nb,{}),u.jsx(Mb,{}),d&&u.jsx(fb,{}),u.jsx(jb,{})]})}function Ab(){if(!("serviceWorker"in navigator))return;window.addEventListener("load",()=>{const l=new URL("sw.js",window.location.href);navigator.serviceWorker.register(l,{scope:"./"}).catch(o=>{console.warn("Service worker registration failed:",o)})});let a=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{a||window.crossOriginIsolated||(a=!0,window.location.reload())})}Ab();U2.createRoot(document.getElementById("root")).render(u.jsx(Es.StrictMode,{children:u.jsx(Rb,{})}));
