var g2=Object.defineProperty;var _2=(i,l,o)=>l in i?g2(i,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[l]=o;var pe=(i,l,o)=>_2(i,typeof l!="symbol"?l+"":l,o);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const _ of p.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&s(_)}).observe(document,{childList:!0,subtree:!0});function o(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function s(d){if(d.ep)return;d.ep=!0;const p=o(d);fetch(d.href,p)}})();function yh(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var xd={exports:{}},is={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function v2(){if(dm)return is;dm=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function o(s,d,p){var _=null;if(p!==void 0&&(_=""+p),d.key!==void 0&&(_=""+d.key),"key"in d){p={};for(var h in d)h!=="key"&&(p[h]=d[h])}else p=d;return d=p.ref,{$$typeof:i,type:s,key:_,ref:d!==void 0?d:null,props:p}}return is.Fragment=l,is.jsx=o,is.jsxs=o,is}var fm;function b2(){return fm||(fm=1,xd.exports=v2()),xd.exports}var u=b2(),kd={exports:{}},Ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function y2(){if(mm)return Ne;mm=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),_=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),T=Symbol.iterator;function R(E){return E===null||typeof E!="object"?null:(E=T&&E[T]||E["@@iterator"],typeof E=="function"?E:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,F={};function P(E,U,re){this.props=E,this.context=U,this.refs=F,this.updater=re||B}P.prototype.isReactComponent={},P.prototype.setState=function(E,U){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,U,"setState")},P.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function W(){}W.prototype=P.prototype;function H(E,U,re){this.props=E,this.context=U,this.refs=F,this.updater=re||B}var te=H.prototype=new W;te.constructor=H,$(te,P.prototype),te.isPureReactComponent=!0;var ue=Array.isArray;function fe(){}var Z={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function xe(E,U,re){var oe=re.ref;return{$$typeof:i,type:E,key:U,ref:oe!==void 0?oe:null,props:re}}function ve(E,U){return xe(E.type,U,E.props)}function Oe(E){return typeof E=="object"&&E!==null&&E.$$typeof===i}function G(E){var U={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(re){return U[re]})}var Ve=/\/+/g;function be(E,U){return typeof E=="object"&&E!==null&&E.key!=null?G(""+E.key):U.toString(36)}function Ee(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(fe,fe):(E.status="pending",E.then(function(U){E.status==="pending"&&(E.status="fulfilled",E.value=U)},function(U){E.status==="pending"&&(E.status="rejected",E.reason=U)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function z(E,U,re,oe,ke){var V=typeof E;(V==="undefined"||V==="boolean")&&(E=null);var D=!1;if(E===null)D=!0;else switch(V){case"bigint":case"string":case"number":D=!0;break;case"object":switch(E.$$typeof){case i:case l:D=!0;break;case x:return D=E._init,z(D(E._payload),U,re,oe,ke)}}if(D)return ke=ke(E),D=oe===""?"."+be(E,0):oe,ue(ke)?(re="",D!=null&&(re=D.replace(Ve,"$&/")+"/"),z(ke,U,re,"",function(Ue){return Ue})):ke!=null&&(Oe(ke)&&(ke=ve(ke,re+(ke.key==null||E&&E.key===ke.key?"":(""+ke.key).replace(Ve,"$&/")+"/")+D)),U.push(ke)),1;D=0;var ie=oe===""?".":oe+":";if(ue(E))for(var ye=0;ye<E.length;ye++)oe=E[ye],V=ie+be(oe,ye),D+=z(oe,U,re,V,ke);else if(ye=R(E),typeof ye=="function")for(E=ye.call(E),ye=0;!(oe=E.next()).done;)oe=oe.value,V=ie+be(oe,ye++),D+=z(oe,U,re,V,ke);else if(V==="object"){if(typeof E.then=="function")return z(Ee(E),U,re,oe,ke);throw U=String(E),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return D}function ne(E,U,re){if(E==null)return E;var oe=[],ke=0;return z(E,oe,"","",function(V){return U.call(re,V,ke++)}),oe}function me(E){if(E._status===-1){var U=E._result;U=U(),U.then(function(re){(E._status===0||E._status===-1)&&(E._status=1,E._result=re)},function(re){(E._status===0||E._status===-1)&&(E._status=2,E._result=re)}),E._status===-1&&(E._status=0,E._result=U)}if(E._status===1)return E._result.default;throw E._result}var de=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},Se={map:ne,forEach:function(E,U,re){ne(E,function(){U.apply(this,arguments)},re)},count:function(E){var U=0;return ne(E,function(){U++}),U},toArray:function(E){return ne(E,function(U){return U})||[]},only:function(E){if(!Oe(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return Ne.Activity=k,Ne.Children=Se,Ne.Component=P,Ne.Fragment=o,Ne.Profiler=d,Ne.PureComponent=H,Ne.StrictMode=s,Ne.Suspense=g,Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,Ne.__COMPILER_RUNTIME={__proto__:null,c:function(E){return Z.H.useMemoCache(E)}},Ne.cache=function(E){return function(){return E.apply(null,arguments)}},Ne.cacheSignal=function(){return null},Ne.cloneElement=function(E,U,re){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var oe=$({},E.props),ke=E.key;if(U!=null)for(V in U.key!==void 0&&(ke=""+U.key),U)!J.call(U,V)||V==="key"||V==="__self"||V==="__source"||V==="ref"&&U.ref===void 0||(oe[V]=U[V]);var V=arguments.length-2;if(V===1)oe.children=re;else if(1<V){for(var D=Array(V),ie=0;ie<V;ie++)D[ie]=arguments[ie+2];oe.children=D}return xe(E.type,ke,oe)},Ne.createContext=function(E){return E={$$typeof:_,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:p,_context:E},E},Ne.createElement=function(E,U,re){var oe,ke={},V=null;if(U!=null)for(oe in U.key!==void 0&&(V=""+U.key),U)J.call(U,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(ke[oe]=U[oe]);var D=arguments.length-2;if(D===1)ke.children=re;else if(1<D){for(var ie=Array(D),ye=0;ye<D;ye++)ie[ye]=arguments[ye+2];ke.children=ie}if(E&&E.defaultProps)for(oe in D=E.defaultProps,D)ke[oe]===void 0&&(ke[oe]=D[oe]);return xe(E,V,ke)},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(E){return{$$typeof:h,render:E}},Ne.isValidElement=Oe,Ne.lazy=function(E){return{$$typeof:x,_payload:{_status:-1,_result:E},_init:me}},Ne.memo=function(E,U){return{$$typeof:b,type:E,compare:U===void 0?null:U}},Ne.startTransition=function(E){var U=Z.T,re={};Z.T=re;try{var oe=E(),ke=Z.S;ke!==null&&ke(re,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(fe,de)}catch(V){de(V)}finally{U!==null&&re.types!==null&&(U.types=re.types),Z.T=U}},Ne.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},Ne.use=function(E){return Z.H.use(E)},Ne.useActionState=function(E,U,re){return Z.H.useActionState(E,U,re)},Ne.useCallback=function(E,U){return Z.H.useCallback(E,U)},Ne.useContext=function(E){return Z.H.useContext(E)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(E,U){return Z.H.useDeferredValue(E,U)},Ne.useEffect=function(E,U){return Z.H.useEffect(E,U)},Ne.useEffectEvent=function(E){return Z.H.useEffectEvent(E)},Ne.useId=function(){return Z.H.useId()},Ne.useImperativeHandle=function(E,U,re){return Z.H.useImperativeHandle(E,U,re)},Ne.useInsertionEffect=function(E,U){return Z.H.useInsertionEffect(E,U)},Ne.useLayoutEffect=function(E,U){return Z.H.useLayoutEffect(E,U)},Ne.useMemo=function(E,U){return Z.H.useMemo(E,U)},Ne.useOptimistic=function(E,U){return Z.H.useOptimistic(E,U)},Ne.useReducer=function(E,U,re){return Z.H.useReducer(E,U,re)},Ne.useRef=function(E){return Z.H.useRef(E)},Ne.useState=function(E){return Z.H.useState(E)},Ne.useSyncExternalStore=function(E,U,re){return Z.H.useSyncExternalStore(E,U,re)},Ne.useTransition=function(){return Z.H.useTransition()},Ne.version="19.2.7",Ne}var hm;function Jd(){return hm||(hm=1,kd.exports=y2()),kd.exports}var C=Jd();const hs=yh(C);var Sd={exports:{}},ss={},Ed={exports:{}},Td={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function w2(){return pm||(pm=1,(function(i){function l(z,ne){var me=z.length;z.push(ne);e:for(;0<me;){var de=me-1>>>1,Se=z[de];if(0<d(Se,ne))z[de]=ne,z[me]=Se,me=de;else break e}}function o(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var ne=z[0],me=z.pop();if(me!==ne){z[0]=me;e:for(var de=0,Se=z.length,E=Se>>>1;de<E;){var U=2*(de+1)-1,re=z[U],oe=U+1,ke=z[oe];if(0>d(re,me))oe<Se&&0>d(ke,re)?(z[de]=ke,z[oe]=me,de=oe):(z[de]=re,z[U]=me,de=U);else if(oe<Se&&0>d(ke,me))z[de]=ke,z[oe]=me,de=oe;else break e}}return ne}function d(z,ne){var me=z.sortIndex-ne.sortIndex;return me!==0?me:z.id-ne.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;i.unstable_now=function(){return p.now()}}else{var _=Date,h=_.now();i.unstable_now=function(){return _.now()-h}}var g=[],b=[],x=1,k=null,T=3,R=!1,B=!1,$=!1,F=!1,P=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function te(z){for(var ne=o(b);ne!==null;){if(ne.callback===null)s(b);else if(ne.startTime<=z)s(b),ne.sortIndex=ne.expirationTime,l(g,ne);else break;ne=o(b)}}function ue(z){if($=!1,te(z),!B)if(o(g)!==null)B=!0,fe||(fe=!0,G());else{var ne=o(b);ne!==null&&Ee(ue,ne.startTime-z)}}var fe=!1,Z=-1,J=5,xe=-1;function ve(){return F?!0:!(i.unstable_now()-xe<J)}function Oe(){if(F=!1,fe){var z=i.unstable_now();xe=z;var ne=!0;try{e:{B=!1,$&&($=!1,W(Z),Z=-1),R=!0;var me=T;try{t:{for(te(z),k=o(g);k!==null&&!(k.expirationTime>z&&ve());){var de=k.callback;if(typeof de=="function"){k.callback=null,T=k.priorityLevel;var Se=de(k.expirationTime<=z);if(z=i.unstable_now(),typeof Se=="function"){k.callback=Se,te(z),ne=!0;break t}k===o(g)&&s(g),te(z)}else s(g);k=o(g)}if(k!==null)ne=!0;else{var E=o(b);E!==null&&Ee(ue,E.startTime-z),ne=!1}}break e}finally{k=null,T=me,R=!1}ne=void 0}}finally{ne?G():fe=!1}}}var G;if(typeof H=="function")G=function(){H(Oe)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,be=Ve.port2;Ve.port1.onmessage=Oe,G=function(){be.postMessage(null)}}else G=function(){P(Oe,0)};function Ee(z,ne){Z=P(function(){z(i.unstable_now())},ne)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(z){z.callback=null},i.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<z?Math.floor(1e3/z):5},i.unstable_getCurrentPriorityLevel=function(){return T},i.unstable_next=function(z){switch(T){case 1:case 2:case 3:var ne=3;break;default:ne=T}var me=T;T=ne;try{return z()}finally{T=me}},i.unstable_requestPaint=function(){F=!0},i.unstable_runWithPriority=function(z,ne){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var me=T;T=z;try{return ne()}finally{T=me}},i.unstable_scheduleCallback=function(z,ne,me){var de=i.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?de+me:de):me=de,z){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=me+Se,z={id:x++,callback:ne,priorityLevel:z,startTime:me,expirationTime:Se,sortIndex:-1},me>de?(z.sortIndex=me,l(b,z),o(g)===null&&z===o(b)&&($?(W(Z),Z=-1):$=!0,Ee(ue,me-de))):(z.sortIndex=Se,l(g,z),B||R||(B=!0,fe||(fe=!0,G()))),z},i.unstable_shouldYield=ve,i.unstable_wrapCallback=function(z){var ne=T;return function(){var me=T;T=ne;try{return z.apply(this,arguments)}finally{T=me}}}})(Td)),Td}var gm;function x2(){return gm||(gm=1,Ed.exports=w2()),Ed.exports}var Md={exports:{}},Wt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function k2(){if(_m)return Wt;_m=1;var i=Jd();function l(g){var b="https://react.dev/errors/"+g;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)b+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+g+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var s={d:{f:o,r:function(){throw Error(l(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function p(g,b,x){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:k==null?null:""+k,children:g,containerInfo:b,implementation:x}}var _=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(g,b){if(g==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return Wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Wt.createPortal=function(g,b){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(l(299));return p(g,b,null,x)},Wt.flushSync=function(g){var b=_.T,x=s.p;try{if(_.T=null,s.p=2,g)return g()}finally{_.T=b,s.p=x,s.d.f()}},Wt.preconnect=function(g,b){typeof g=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,s.d.C(g,b))},Wt.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Wt.preinit=function(g,b){if(typeof g=="string"&&b&&typeof b.as=="string"){var x=b.as,k=h(x,b.crossOrigin),T=typeof b.integrity=="string"?b.integrity:void 0,R=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;x==="style"?s.d.S(g,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:k,integrity:T,fetchPriority:R}):x==="script"&&s.d.X(g,{crossOrigin:k,integrity:T,fetchPriority:R,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},Wt.preinitModule=function(g,b){if(typeof g=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var x=h(b.as,b.crossOrigin);s.d.M(g,{crossOrigin:x,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&s.d.M(g)},Wt.preload=function(g,b){if(typeof g=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var x=b.as,k=h(x,b.crossOrigin);s.d.L(g,x,{crossOrigin:k,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},Wt.preloadModule=function(g,b){if(typeof g=="string")if(b){var x=h(b.as,b.crossOrigin);s.d.m(g,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:x,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else s.d.m(g)},Wt.requestFormReset=function(g){s.d.r(g)},Wt.unstable_batchedUpdates=function(g,b){return g(b)},Wt.useFormState=function(g,b,x){return _.H.useFormState(g,b,x)},Wt.useFormStatus=function(){return _.H.useHostTransitionStatus()},Wt.version="19.2.7",Wt}var vm;function wh(){if(vm)return Md.exports;vm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),Md.exports=k2(),Md.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function S2(){if(bm)return ss;bm=1;var i=x2(),l=Jd(),o=wh();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(p(e)!==e)throw Error(s(188))}function b(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var c=a.alternate;if(c===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===c.child){for(c=a.child;c;){if(c===n)return g(a),e;if(c===r)return g(a),t;c=c.sibling}throw Error(s(188))}if(n.return!==r.return)n=a,r=c;else{for(var m=!1,y=a.child;y;){if(y===n){m=!0,n=a,r=c;break}if(y===r){m=!0,r=a,n=c;break}y=y.sibling}if(!m){for(y=c.child;y;){if(y===n){m=!0,n=c,r=a;break}if(y===r){m=!0,r=c,n=a;break}y=y.sibling}if(!m)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var k=Object.assign,T=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),H=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),xe=Symbol.for("react.activity"),ve=Symbol.for("react.memo_cache_sentinel"),Oe=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=Oe&&e[Oe]||e["@@iterator"],typeof e=="function"?e:null)}var Ve=Symbol.for("react.client.reference");function be(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ve?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $:return"Fragment";case P:return"Profiler";case F:return"StrictMode";case ue:return"Suspense";case fe:return"SuspenseList";case xe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case H:return e.displayName||"Context";case W:return(e._context.displayName||"Context")+".Consumer";case te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return t=e.displayName||null,t!==null?t:be(e.type)||"Memo";case J:t=e._payload,e=e._init;try{return be(e(t))}catch{}}return null}var Ee=Array.isArray,z=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},de=[],Se=-1;function E(e){return{current:e}}function U(e){0>Se||(e.current=de[Se],de[Se]=null,Se--)}function re(e,t){Se++,de[Se]=e.current,e.current=t}var oe=E(null),ke=E(null),V=E(null),D=E(null);function ie(e,t){switch(re(V,t),re(ke,e),re(oe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?O1(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=O1(t),e=L1(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(oe),re(oe,e)}function ye(){U(oe),U(ke),U(V)}function Ue(e){e.memoizedState!==null&&re(D,e);var t=oe.current,n=L1(t,e.type);t!==n&&(re(ke,e),re(oe,n))}function ce(e){ke.current===e&&(U(oe),U(ke)),D.current===e&&(U(D),ns._currentValue=me)}var Pe,De;function Ke(e){if(Pe===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pe=t&&t[1]||"",De=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pe+e+De}var kt=!1;function St(e,t){if(!e||kt)return"";kt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(I){var q=I}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(I){q=I}e.call(Q.prototype)}}else{try{throw Error()}catch(I){q=I}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(I){if(I&&q&&typeof I.stack=="string")return[I.stack,q.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),m=c[0],y=c[1];if(m&&y){var S=m.split(`
`),L=y.split(`
`);for(a=r=0;r<S.length&&!S[r].includes("DetermineComponentFrameRoot");)r++;for(;a<L.length&&!L[a].includes("DetermineComponentFrameRoot");)a++;if(r===S.length||a===L.length)for(r=S.length-1,a=L.length-1;1<=r&&0<=a&&S[r]!==L[a];)a--;for(;1<=r&&0<=a;r--,a--)if(S[r]!==L[a]){if(r!==1||a!==1)do if(r--,a--,0>a||S[r]!==L[a]){var X=`
`+S[r].replace(" at new "," at ");return e.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",e.displayName)),X}while(1<=r&&0<=a);break}}}finally{kt=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ke(n):""}function dn(e,t){switch(e.tag){case 26:case 27:case 5:return Ke(e.type);case 16:return Ke("Lazy");case 13:return e.child!==t&&t!==null?Ke("Suspense Fallback"):Ke("Suspense");case 19:return Ke("SuspenseList");case 0:case 15:return St(e.type,!1);case 11:return St(e.type.render,!1);case 1:return St(e.type,!0);case 31:return Ke("Activity");default:return""}}function jn(e){try{var t="",n=null;do t+=dn(e,n),n=e,e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var tr=Object.prototype.hasOwnProperty,Fn=i.unstable_scheduleCallback,nr=i.unstable_cancelCallback,fr=i.unstable_shouldYield,fa=i.unstable_requestPaint,At=i.unstable_now,Ol=i.unstable_getCurrentPriorityLevel,Gr=i.unstable_ImmediatePriority,oi=i.unstable_UserBlockingPriority,Ll=i.unstable_NormalPriority,Jt=i.unstable_LowPriority,fn=i.unstable_IdlePriority,rr=i.log,ma=i.unstable_setDisableYieldValue,Bl=null,Et=null;function mn(e){if(typeof rr=="function"&&ma(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Bl,e)}catch{}}var Bt=Math.clz32?Math.clz32:hr,$r=Math.log,mr=Math.LN2;function hr(e){return e>>>=0,e===0?32:31-($r(e)/mr|0)|0}var hn=256,$t=262144,Ye=4194304;function lt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function at(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var a=0,c=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var y=r&134217727;return y!==0?(r=y&~c,r!==0?a=lt(r):(m&=y,m!==0?a=lt(m):n||(n=y&~e,n!==0&&(a=lt(n))))):(y=r&~c,y!==0?a=lt(y):m!==0?a=lt(m):n||(n=r&~e,n!==0&&(a=lt(n)))),a===0?0:t!==0&&t!==a&&(t&c)===0&&(c=a&-a,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:a}function Ct(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function hc(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zl(){var e=Ye;return Ye<<=1,(Ye&62914560)===0&&(Ye=4194304),e}function lr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ul(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pr(e,t,n,r,a,c){var m=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var y=e.entanglements,S=e.expirationTimes,L=e.hiddenUpdates;for(n=m&~n;0<n;){var X=31-Bt(n),Q=1<<X;y[X]=0,S[X]=-1;var q=L[X];if(q!==null)for(L[X]=null,X=0;X<q.length;X++){var I=q[X];I!==null&&(I.lane&=-536870913)}n&=~Q}r!==0&&ks(e,r,0),c!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=c&~(m&~t))}function ks(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Bt(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ha(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Bt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}function Ss(e,t){var n=t&-t;return n=(n&42)!==0?1:Yr(n),(n&(e.suspendedLanes|t))!==0?0:n}function Yr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Rn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ot(){var e=ne.p;return e!==0?e:(e=window.event,e===void 0?32:lm(e.type))}function ci(e,t){var n=ne.p;try{return ne.p=e,t()}finally{ne.p=n}}var zt=Math.random().toString(36).slice(2),pt="__reactFiber$"+zt,Dt="__reactProps$"+zt,Gn="__reactContainer$"+zt,Xr="__reactEvents$"+zt,Kr="__reactListeners$"+zt,pa="__reactHandles$"+zt,pn="__reactResources$"+zt,gn="__reactMarker$"+zt;function gr(e){delete e[pt],delete e[Dt],delete e[Xr],delete e[Kr],delete e[pa]}function Yt(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gn]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=P1(e);e!==null;){if(n=e[pt])return n;e=P1(e)}return t}e=n,n=e.parentNode}return null}function _n(e){if(e=e[pt]||e[Gn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function $n(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function nn(e){var t=e[pn];return t||(t=e[pn]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ft(e){e[gn]=!0}var Yn=new Set,Qr={};function en(e,t){vn(e,t),vn(e+"Capture",t)}function vn(e,t){for(Qr[e]=t,e=0;e<t.length;e++)Yn.add(t[e])}var Wr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ui={},Zr={};function ga(e){return tr.call(Zr,e)?!0:tr.call(ui,e)?!1:Wr.test(e)?Zr[e]=!0:(ui[e]=!0,!1)}function _r(e,t,n){if(ga(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Xn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Xt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+r)}}function ge(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _a(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pc(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,c=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(m){n=""+m,c.call(this,m)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(m){n=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function di(e){if(!e._valueTracker){var t=_a(e)?"checked":"value";e._valueTracker=pc(e,t,""+e[t])}}function Es(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_a(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function va(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ql=/[\n"\\]/g;function Tt(e){return e.replace(ql,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Hl(e,t,n,r,a,c,m,y){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ge(t)):e.value!==""+ge(t)&&(e.value=""+ge(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?Vl(e,m,ge(t)):n!=null?Vl(e,m,ge(n)):r!=null&&e.removeAttribute("value"),a==null&&c!=null&&(e.defaultChecked=!!c),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+ge(y):e.removeAttribute("name")}function bn(e,t,n,r,a,c,m,y){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){di(e);return}n=n!=null?""+ge(n):"",t=t!=null?""+ge(t):n,y||t===e.value||(e.value=t),e.defaultValue=t}r=r??a,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=y?e.checked:!!r,e.defaultChecked=!!r,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),di(e)}function Vl(e,t,n){t==="number"&&va(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Mt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ge(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ts(e,t,n){if(t!=null&&(t=""+ge(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ge(n):""}function Ms(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(Ee(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n==null&&(n=""),t=n}n=ge(t),e.defaultValue=n,r=e.textContent,r===n&&r!==""&&r!==null&&(e.value=r),di(e)}function vr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Y(e,t,n){var r=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,n):typeof n!="number"||n===0||fi.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ns(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Y(e,a,r)}else for(var c in t)t.hasOwnProperty(c)&&Y(e,c,t[c])}function mi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gc=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pl=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Il(e){return Pl.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function An(){}var Jr=null;function ct(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var br=null,Kn=null;function el(e){var t=_n(e);if(t&&(e=t.stateNode)){var n=e[Dt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Hl(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Tt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Dt]||null;if(!a)throw Error(s(90));Hl(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Es(r)}break e;case"textarea":Ts(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Mt(e,!!n.multiple,t,!1)}}}var hi=!1;function js(e,t,n){if(hi)return e(t,n);hi=!0;try{var r=e(t);return r}finally{if(hi=!1,(br!==null||Kn!==null)&&(No(),br&&(t=br,e=Kn,Kn=br=null,el(t),e)))for(t=0;t<e.length;t++)el(e[t])}}function Fl(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Dt]||null;if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pi=!1;if(Cn)try{var tl={};Object.defineProperty(tl,"passive",{get:function(){pi=!0}}),window.addEventListener("test",tl,tl),window.removeEventListener("test",tl,tl)}catch{pi=!1}var Ut=null,yr=null,ba=null;function qt(){if(ba)return ba;var e,t=yr,n=t.length,r,a="value"in Ut?Ut.value:Ut.textContent,c=a.length;for(e=0;e<n&&t[e]===a[e];e++);var m=n-e;for(r=1;r<=m&&t[n-r]===a[c-r];r++);return ba=a.slice(e,1<r?1-r:void 0)}function Gl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function nl(){return!0}function Nt(){return!1}function vt(e){function t(n,r,a,c,m){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=c,this.target=m,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(n=e[y],this[y]=n?n(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?nl:Nt,this.isPropagationStopped=Nt,this}return k(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),t}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ya=vt(wr),Qn=k({},wr,{view:0,detail:0}),_c=vt(Qn),wa,rl,ar,$l=k({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ka,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ar&&(ar&&e.type==="mousemove"?(wa=e.screenX-ar.screenX,rl=e.screenY-ar.screenY):rl=wa=0,ar=e),wa)},movementY:function(e){return"movementY"in e?e.movementY:rl}}),xa=vt($l),vc=k({},$l,{dataTransfer:0}),bc=vt(vc),yc=k({},Qn,{relatedTarget:0}),rn=vt(yc),ut=k({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),gi=vt(ut),Yl=k({},wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rs=vt(Yl),As=k({},wr,{data:0}),_i=vt(As),wc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cs(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kc[e])?!!t[e]:!1}function ka(){return Cs}var vi=k({},Qn,{key:function(e){if(e.key){var t=wc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ka,charCode:function(e){return e.type==="keypress"?Gl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sc=vt(vi),Ds=k({},$l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bi=vt(Ds),Os=k({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ka}),Ec=vt(Os),Tc=k({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ls=vt(Tc),yi=k({},$l,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mc=vt(yi),Nc=k({},wr,{newState:0,oldState:0}),jc=vt(Nc),Rc=[9,13,27,32],wi=Cn&&"CompositionEvent"in window,Xl=null;Cn&&"documentMode"in document&&(Xl=document.documentMode);var Ac=Cn&&"TextEvent"in window&&!Xl,Bs=Cn&&(!wi||Xl&&8<Xl&&11>=Xl),zs=" ",Us=!1;function qs(e,t){switch(e){case"keyup":return Rc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ll=!1;function Hs(e,t){switch(e){case"compositionend":return xr(t);case"keypress":return t.which!==32?null:(Us=!0,zs);case"textInput":return e=t.data,e===zs&&Us?null:e;default:return null}}function Vs(e,t){if(ll)return e==="compositionend"||!wi&&qs(e,t)?(e=qt(),ba=yr=Ut=null,ll=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bs&&t.locale!=="ko"?null:t.data;default:return null}}var Cc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cc[e.type]:t==="textarea"}function Ps(e,t,n,r){br?Kn?Kn.push(r):Kn=[r]:br=r,t=Lo(t,"onChange"),0<t.length&&(n=new ya("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kl=null,al=null;function Dc(e){N1(e,0)}function Sa(e){var t=$n(e);if(Es(t))return e}function Is(e,t){if(e==="change")return t}var Fs=!1;if(Cn){var ki;if(Cn){var Si="oninput"in document;if(!Si){var Gs=document.createElement("div");Gs.setAttribute("oninput","return;"),Si=typeof Gs.oninput=="function"}ki=Si}else ki=!1;Fs=ki&&(!document.documentMode||9<document.documentMode)}function Ea(){Kl&&(Kl.detachEvent("onpropertychange",yn),al=Kl=null)}function yn(e){if(e.propertyName==="value"&&Sa(al)){var t=[];Ps(t,al,e,ct(e)),js(Dc,t)}}function $s(e,t,n){e==="focusin"?(Ea(),Kl=t,al=n,Kl.attachEvent("onpropertychange",yn)):e==="focusout"&&Ea()}function Oc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sa(al)}function Lc(e,t){if(e==="click")return Sa(t)}function Ei(e,t){if(e==="input"||e==="change")return Sa(t)}function Ta(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ht=typeof Object.is=="function"?Object.is:Ta;function il(e,t){if(Ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!tr.call(t,a)||!Ht(e[a],t[a]))return!1}return!0}function kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ma(e,t){var n=kr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kr(n)}}function Ti(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ti(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ys(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=va(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=va(e.document)}return t}function Mi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Bc=Cn&&"documentMode"in document&&11>=document.documentMode,f=null,v=null,w=null,N=!1;function j(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;N||f==null||f!==va(r)||(r=f,"selectionStart"in r&&Mi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),w&&il(w,r)||(w=r,r=Lo(v,"onSelect"),0<r.length&&(t=new ya("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=f)))}function ee(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var se={animationend:ee("Animation","AnimationEnd"),animationiteration:ee("Animation","AnimationIteration"),animationstart:ee("Animation","AnimationStart"),transitionrun:ee("Transition","TransitionRun"),transitionstart:ee("Transition","TransitionStart"),transitioncancel:ee("Transition","TransitionCancel"),transitionend:ee("Transition","TransitionEnd")},Fe={},Me={};Cn&&(Me=document.createElement("div").style,"AnimationEvent"in window||(delete se.animationend.animation,delete se.animationiteration.animation,delete se.animationstart.animation),"TransitionEvent"in window||delete se.transitionend.transition);function Le(e){if(Fe[e])return Fe[e];if(!se[e])return e;var t=se[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Me)return Fe[e]=t[n];return e}var dt=Le("animationend"),Kt=Le("animationiteration"),Ae=Le("animationstart"),it=Le("transitionrun"),Sr=Le("transitionstart"),Wn=Le("transitioncancel"),Dn=Le("transitionend"),Er=new Map,ir="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ir.push("scrollEnd");function ln(e,t){Er.set(e,t),en(t,[e])}var Tr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Qt=[],On=0,Na=0;function Xs(){for(var e=On,t=Na=On=0;t<e;){var n=Qt[t];Qt[t++]=null;var r=Qt[t];Qt[t++]=null;var a=Qt[t];Qt[t++]=null;var c=Qt[t];if(Qt[t++]=null,r!==null&&a!==null){var m=r.pending;m===null?a.next=a:(a.next=m.next,m.next=a),r.pending=a}c!==0&&cf(n,a,c)}}function Ks(e,t,n,r){Qt[On++]=e,Qt[On++]=t,Qt[On++]=n,Qt[On++]=r,Na|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function zc(e,t,n,r){return Ks(e,t,n,r),Qs(e)}function Ql(e,t){return Ks(e,null,null,t),Qs(e)}function cf(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var a=!1,c=e.return;c!==null;)c.childLanes|=n,r=c.alternate,r!==null&&(r.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(a=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,a&&t!==null&&(a=31-Bt(n),e=c.hiddenUpdates,r=e[a],r===null?e[a]=[t]:r.push(t),t.lane=n|536870912),c):null}function Qs(e){if(50<Ki)throw Ki=0,$u=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ja={};function Jh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(e,t,n,r){return new Jh(e,t,n,r)}function Uc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mr(e,t){var n=e.alternate;return n===null?(n=wn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function uf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ws(e,t,n,r,a,c){var m=0;if(r=e,typeof e=="function")Uc(e)&&(m=1);else if(typeof e=="string")m=l2(e,n,oe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case xe:return e=wn(31,n,t,a),e.elementType=xe,e.lanes=c,e;case $:return Wl(n.children,a,c,t);case F:m=8,a|=24;break;case P:return e=wn(12,n,t,a|2),e.elementType=P,e.lanes=c,e;case ue:return e=wn(13,n,t,a),e.elementType=ue,e.lanes=c,e;case fe:return e=wn(19,n,t,a),e.elementType=fe,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:m=10;break e;case W:m=9;break e;case te:m=11;break e;case Z:m=14;break e;case J:m=16,r=null;break e}m=29,n=Error(s(130,e===null?"null":typeof e,"")),r=null}return t=wn(m,n,t,a),t.elementType=e,t.type=r,t.lanes=c,t}function Wl(e,t,n,r){return e=wn(7,e,r,t),e.lanes=n,e}function qc(e,t,n){return e=wn(6,e,null,t),e.lanes=n,e}function df(e){var t=wn(18,null,null,0);return t.stateNode=e,t}function Hc(e,t,n){return t=wn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ff=new WeakMap;function Ln(e,t){if(typeof e=="object"&&e!==null){var n=ff.get(e);return n!==void 0?n:(t={value:e,source:t,stack:jn(t)},ff.set(e,t),t)}return{value:e,source:t,stack:jn(t)}}var Ra=[],Aa=0,Zs=null,Ni=0,Bn=[],zn=0,sl=null,sr=1,or="";function Nr(e,t){Ra[Aa++]=Ni,Ra[Aa++]=Zs,Zs=e,Ni=t}function mf(e,t,n){Bn[zn++]=sr,Bn[zn++]=or,Bn[zn++]=sl,sl=e;var r=sr;e=or;var a=32-Bt(r)-1;r&=~(1<<a),n+=1;var c=32-Bt(t)+a;if(30<c){var m=a-a%5;c=(r&(1<<m)-1).toString(32),r>>=m,a-=m,sr=1<<32-Bt(t)+a|n<<a|r,or=c+e}else sr=1<<c|n<<a|r,or=e}function Vc(e){e.return!==null&&(Nr(e,1),mf(e,1,0))}function Pc(e){for(;e===Zs;)Zs=Ra[--Aa],Ra[Aa]=null,Ni=Ra[--Aa],Ra[Aa]=null;for(;e===sl;)sl=Bn[--zn],Bn[zn]=null,or=Bn[--zn],Bn[zn]=null,sr=Bn[--zn],Bn[zn]=null}function hf(e,t){Bn[zn++]=sr,Bn[zn++]=or,Bn[zn++]=sl,sr=t.id,or=t.overflow,sl=e}var Vt=null,nt=null,Ie=!1,ol=null,Un=!1,Ic=Error(s(519));function cl(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ji(Ln(t,e)),Ic}function pf(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[pt]=e,t[Dt]=r,n){case"dialog":ze("cancel",t),ze("close",t);break;case"iframe":case"object":case"embed":ze("load",t);break;case"video":case"audio":for(n=0;n<Wi.length;n++)ze(Wi[n],t);break;case"source":ze("error",t);break;case"img":case"image":case"link":ze("error",t),ze("load",t);break;case"details":ze("toggle",t);break;case"input":ze("invalid",t),bn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ze("invalid",t);break;case"textarea":ze("invalid",t),Ms(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||r.suppressHydrationWarning===!0||C1(t.textContent,n)?(r.popover!=null&&(ze("beforetoggle",t),ze("toggle",t)),r.onScroll!=null&&ze("scroll",t),r.onScrollEnd!=null&&ze("scrollend",t),r.onClick!=null&&(t.onclick=An),t=!0):t=!1,t||cl(e,!0)}function gf(e){for(Vt=e.return;Vt;)switch(Vt.tag){case 5:case 31:case 13:Un=!1;return;case 27:case 3:Un=!0;return;default:Vt=Vt.return}}function Ca(e){if(e!==Vt)return!1;if(!Ie)return gf(e),Ie=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||sd(e.type,e.memoizedProps)),n=!n),n&&nt&&cl(e),gf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));nt=V1(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));nt=V1(e)}else t===27?(t=nt,kl(e.type)?(e=fd,fd=null,nt=e):nt=t):nt=Vt?Hn(e.stateNode.nextSibling):null;return!0}function Zl(){nt=Vt=null,Ie=!1}function Fc(){var e=ol;return e!==null&&(cn===null?cn=e:cn.push.apply(cn,e),ol=null),e}function ji(e){ol===null?ol=[e]:ol.push(e)}var Gc=E(null),Jl=null,jr=null;function ul(e,t,n){re(Gc,t._currentValue),t._currentValue=n}function Rr(e){e._currentValue=Gc.current,U(Gc)}function $c(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yc(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var c=a.dependencies;if(c!==null){var m=a.child;c=c.firstContext;e:for(;c!==null;){var y=c;c=a;for(var S=0;S<t.length;S++)if(y.context===t[S]){c.lanes|=n,y=c.alternate,y!==null&&(y.lanes|=n),$c(c.return,n,e),r||(m=null);break e}c=y.next}}else if(a.tag===18){if(m=a.return,m===null)throw Error(s(341));m.lanes|=n,c=m.alternate,c!==null&&(c.lanes|=n),$c(m,n,e),m=null}else m=a.child;if(m!==null)m.return=a;else for(m=a;m!==null;){if(m===e){m=null;break}if(a=m.sibling,a!==null){a.return=m.return,m=a;break}m=m.return}a=m}}function Da(e,t,n,r){e=null;for(var a=t,c=!1;a!==null;){if(!c){if((a.flags&524288)!==0)c=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var m=a.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var y=a.type;Ht(a.pendingProps.value,m.value)||(e!==null?e.push(y):e=[y])}}else if(a===D.current){if(m=a.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(ns):e=[ns])}a=a.return}e!==null&&Yc(t,e,n,r),t.flags|=262144}function Js(e){for(e=e.firstContext;e!==null;){if(!Ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ea(e){Jl=e,jr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Pt(e){return _f(Jl,e)}function eo(e,t){return Jl===null&&ea(e),_f(e,t)}function _f(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},jr===null){if(e===null)throw Error(s(308));jr=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else jr=jr.next=t;return n}var ep=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},tp=i.unstable_scheduleCallback,np=i.unstable_NormalPriority,bt={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xc(){return{controller:new ep,data:new Map,refCount:0}}function Ri(e){e.refCount--,e.refCount===0&&tp(np,function(){e.controller.abort()})}var Ai=null,Kc=0,Oa=0,La=null;function rp(e,t){if(Ai===null){var n=Ai=[];Kc=0,Oa=Zu(),La={status:"pending",value:void 0,then:function(r){n.push(r)}}}return Kc++,t.then(vf,vf),t}function vf(){if(--Kc===0&&Ai!==null){La!==null&&(La.status="fulfilled");var e=Ai;Ai=null,Oa=0,La=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function lp(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(r.status="rejected",r.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),r}var bf=z.S;z.S=function(e,t){n1=At(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&rp(e,t),bf!==null&&bf(e,t)};var ta=E(null);function Qc(){var e=ta.current;return e!==null?e:tt.pooledCache}function to(e,t){t===null?re(ta,ta.current):re(ta,t.pool)}function yf(){var e=Qc();return e===null?null:{parent:bt._currentValue,pool:e}}var Ba=Error(s(460)),Wc=Error(s(474)),no=Error(s(542)),ro={then:function(){}};function wf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function xf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(An,An),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Sf(e),e;default:if(typeof t.status=="string")t.then(An,An);else{if(e=tt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=r}},function(r){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Sf(e),e}throw ra=t,Ba}}function na(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ra=n,Ba):n}}var ra=null;function kf(){if(ra===null)throw Error(s(459));var e=ra;return ra=null,e}function Sf(e){if(e===Ba||e===no)throw Error(s(483))}var za=null,Ci=0;function lo(e){var t=Ci;return Ci+=1,za===null&&(za=[]),xf(za,e,t)}function Di(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ao(e,t){throw t.$$typeof===T?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ef(e){function t(A,M){if(e){var O=A.deletions;O===null?(A.deletions=[M],A.flags|=16):O.push(M)}}function n(A,M){if(!e)return null;for(;M!==null;)t(A,M),M=M.sibling;return null}function r(A){for(var M=new Map;A!==null;)A.key!==null?M.set(A.key,A):M.set(A.index,A),A=A.sibling;return M}function a(A,M){return A=Mr(A,M),A.index=0,A.sibling=null,A}function c(A,M,O){return A.index=O,e?(O=A.alternate,O!==null?(O=O.index,O<M?(A.flags|=67108866,M):O):(A.flags|=67108866,M)):(A.flags|=1048576,M)}function m(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function y(A,M,O,K){return M===null||M.tag!==6?(M=qc(O,A.mode,K),M.return=A,M):(M=a(M,O),M.return=A,M)}function S(A,M,O,K){var we=O.type;return we===$?X(A,M,O.props.children,K,O.key):M!==null&&(M.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===J&&na(we)===M.type)?(M=a(M,O.props),Di(M,O),M.return=A,M):(M=Ws(O.type,O.key,O.props,null,A.mode,K),Di(M,O),M.return=A,M)}function L(A,M,O,K){return M===null||M.tag!==4||M.stateNode.containerInfo!==O.containerInfo||M.stateNode.implementation!==O.implementation?(M=Hc(O,A.mode,K),M.return=A,M):(M=a(M,O.children||[]),M.return=A,M)}function X(A,M,O,K,we){return M===null||M.tag!==7?(M=Wl(O,A.mode,K,we),M.return=A,M):(M=a(M,O),M.return=A,M)}function Q(A,M,O){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=qc(""+M,A.mode,O),M.return=A,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case R:return O=Ws(M.type,M.key,M.props,null,A.mode,O),Di(O,M),O.return=A,O;case B:return M=Hc(M,A.mode,O),M.return=A,M;case J:return M=na(M),Q(A,M,O)}if(Ee(M)||G(M))return M=Wl(M,A.mode,O,null),M.return=A,M;if(typeof M.then=="function")return Q(A,lo(M),O);if(M.$$typeof===H)return Q(A,eo(A,M),O);ao(A,M)}return null}function q(A,M,O,K){var we=M!==null?M.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return we!==null?null:y(A,M,""+O,K);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case R:return O.key===we?S(A,M,O,K):null;case B:return O.key===we?L(A,M,O,K):null;case J:return O=na(O),q(A,M,O,K)}if(Ee(O)||G(O))return we!==null?null:X(A,M,O,K,null);if(typeof O.then=="function")return q(A,M,lo(O),K);if(O.$$typeof===H)return q(A,M,eo(A,O),K);ao(A,O)}return null}function I(A,M,O,K,we){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return A=A.get(O)||null,y(M,A,""+K,we);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case R:return A=A.get(K.key===null?O:K.key)||null,S(M,A,K,we);case B:return A=A.get(K.key===null?O:K.key)||null,L(M,A,K,we);case J:return K=na(K),I(A,M,O,K,we)}if(Ee(K)||G(K))return A=A.get(O)||null,X(M,A,K,we,null);if(typeof K.then=="function")return I(A,M,O,lo(K),we);if(K.$$typeof===H)return I(A,M,O,eo(M,K),we);ao(M,K)}return null}function he(A,M,O,K){for(var we=null,Ge=null,_e=M,Ce=M=0,He=null;_e!==null&&Ce<O.length;Ce++){_e.index>Ce?(He=_e,_e=null):He=_e.sibling;var $e=q(A,_e,O[Ce],K);if($e===null){_e===null&&(_e=He);break}e&&_e&&$e.alternate===null&&t(A,_e),M=c($e,M,Ce),Ge===null?we=$e:Ge.sibling=$e,Ge=$e,_e=He}if(Ce===O.length)return n(A,_e),Ie&&Nr(A,Ce),we;if(_e===null){for(;Ce<O.length;Ce++)_e=Q(A,O[Ce],K),_e!==null&&(M=c(_e,M,Ce),Ge===null?we=_e:Ge.sibling=_e,Ge=_e);return Ie&&Nr(A,Ce),we}for(_e=r(_e);Ce<O.length;Ce++)He=I(_e,A,Ce,O[Ce],K),He!==null&&(e&&He.alternate!==null&&_e.delete(He.key===null?Ce:He.key),M=c(He,M,Ce),Ge===null?we=He:Ge.sibling=He,Ge=He);return e&&_e.forEach(function(Nl){return t(A,Nl)}),Ie&&Nr(A,Ce),we}function Te(A,M,O,K){if(O==null)throw Error(s(151));for(var we=null,Ge=null,_e=M,Ce=M=0,He=null,$e=O.next();_e!==null&&!$e.done;Ce++,$e=O.next()){_e.index>Ce?(He=_e,_e=null):He=_e.sibling;var Nl=q(A,_e,$e.value,K);if(Nl===null){_e===null&&(_e=He);break}e&&_e&&Nl.alternate===null&&t(A,_e),M=c(Nl,M,Ce),Ge===null?we=Nl:Ge.sibling=Nl,Ge=Nl,_e=He}if($e.done)return n(A,_e),Ie&&Nr(A,Ce),we;if(_e===null){for(;!$e.done;Ce++,$e=O.next())$e=Q(A,$e.value,K),$e!==null&&(M=c($e,M,Ce),Ge===null?we=$e:Ge.sibling=$e,Ge=$e);return Ie&&Nr(A,Ce),we}for(_e=r(_e);!$e.done;Ce++,$e=O.next())$e=I(_e,A,Ce,$e.value,K),$e!==null&&(e&&$e.alternate!==null&&_e.delete($e.key===null?Ce:$e.key),M=c($e,M,Ce),Ge===null?we=$e:Ge.sibling=$e,Ge=$e);return e&&_e.forEach(function(p2){return t(A,p2)}),Ie&&Nr(A,Ce),we}function et(A,M,O,K){if(typeof O=="object"&&O!==null&&O.type===$&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case R:e:{for(var we=O.key;M!==null;){if(M.key===we){if(we=O.type,we===$){if(M.tag===7){n(A,M.sibling),K=a(M,O.props.children),K.return=A,A=K;break e}}else if(M.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===J&&na(we)===M.type){n(A,M.sibling),K=a(M,O.props),Di(K,O),K.return=A,A=K;break e}n(A,M);break}else t(A,M);M=M.sibling}O.type===$?(K=Wl(O.props.children,A.mode,K,O.key),K.return=A,A=K):(K=Ws(O.type,O.key,O.props,null,A.mode,K),Di(K,O),K.return=A,A=K)}return m(A);case B:e:{for(we=O.key;M!==null;){if(M.key===we)if(M.tag===4&&M.stateNode.containerInfo===O.containerInfo&&M.stateNode.implementation===O.implementation){n(A,M.sibling),K=a(M,O.children||[]),K.return=A,A=K;break e}else{n(A,M);break}else t(A,M);M=M.sibling}K=Hc(O,A.mode,K),K.return=A,A=K}return m(A);case J:return O=na(O),et(A,M,O,K)}if(Ee(O))return he(A,M,O,K);if(G(O)){if(we=G(O),typeof we!="function")throw Error(s(150));return O=we.call(O),Te(A,M,O,K)}if(typeof O.then=="function")return et(A,M,lo(O),K);if(O.$$typeof===H)return et(A,M,eo(A,O),K);ao(A,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,M!==null&&M.tag===6?(n(A,M.sibling),K=a(M,O),K.return=A,A=K):(n(A,M),K=qc(O,A.mode,K),K.return=A,A=K),m(A)):n(A,M)}return function(A,M,O,K){try{Ci=0;var we=et(A,M,O,K);return za=null,we}catch(_e){if(_e===Ba||_e===no)throw _e;var Ge=wn(29,_e,null,A.mode);return Ge.lanes=K,Ge.return=A,Ge}finally{}}}var la=Ef(!0),Tf=Ef(!1),dl=!1;function Zc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ml(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Xe&2)!==0){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=Qs(e),cf(e,null,n),t}return Ks(e,r,t,n),Qs(e)}function Oi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ha(e,n)}}function eu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var m={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?a=c=m:c=c.next=m,n=n.next}while(n!==null);c===null?a=c=t:c=c.next=t}else a=c=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var tu=!1;function Li(){if(tu){var e=La;if(e!==null)throw e}}function Bi(e,t,n,r){tu=!1;var a=e.updateQueue;dl=!1;var c=a.firstBaseUpdate,m=a.lastBaseUpdate,y=a.shared.pending;if(y!==null){a.shared.pending=null;var S=y,L=S.next;S.next=null,m===null?c=L:m.next=L,m=S;var X=e.alternate;X!==null&&(X=X.updateQueue,y=X.lastBaseUpdate,y!==m&&(y===null?X.firstBaseUpdate=L:y.next=L,X.lastBaseUpdate=S))}if(c!==null){var Q=a.baseState;m=0,X=L=S=null,y=c;do{var q=y.lane&-536870913,I=q!==y.lane;if(I?(qe&q)===q:(r&q)===q){q!==0&&q===Oa&&(tu=!0),X!==null&&(X=X.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var he=e,Te=y;q=t;var et=n;switch(Te.tag){case 1:if(he=Te.payload,typeof he=="function"){Q=he.call(et,Q,q);break e}Q=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=Te.payload,q=typeof he=="function"?he.call(et,Q,q):he,q==null)break e;Q=k({},Q,q);break e;case 2:dl=!0}}q=y.callback,q!==null&&(e.flags|=64,I&&(e.flags|=8192),I=a.callbacks,I===null?a.callbacks=[q]:I.push(q))}else I={lane:q,tag:y.tag,payload:y.payload,callback:y.callback,next:null},X===null?(L=X=I,S=Q):X=X.next=I,m|=q;if(y=y.next,y===null){if(y=a.shared.pending,y===null)break;I=y,y=I.next,I.next=null,a.lastBaseUpdate=I,a.shared.pending=null}}while(!0);X===null&&(S=Q),a.baseState=S,a.firstBaseUpdate=L,a.lastBaseUpdate=X,c===null&&(a.shared.lanes=0),vl|=m,e.lanes=m,e.memoizedState=Q}}function Mf(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Nf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Mf(n[e],t)}var Ua=E(null),io=E(0);function jf(e,t){e=qr,re(io,e),re(Ua,t),qr=e|t.baseLanes}function nu(){re(io,qr),re(Ua,Ua.current)}function ru(){qr=io.current,U(Ua),U(io)}var xn=E(null),qn=null;function hl(e){var t=e.alternate;re(gt,gt.current&1),re(xn,e),qn===null&&(t===null||Ua.current!==null||t.memoizedState!==null)&&(qn=e)}function lu(e){re(gt,gt.current),re(xn,e),qn===null&&(qn=e)}function Rf(e){e.tag===22?(re(gt,gt.current),re(xn,e),qn===null&&(qn=e)):pl()}function pl(){re(gt,gt.current),re(xn,xn.current)}function kn(e){U(xn),qn===e&&(qn=null),U(gt)}var gt=E(0);function so(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ud(n)||dd(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ar=0,Re=null,Ze=null,yt=null,oo=!1,qa=!1,aa=!1,co=0,zi=0,Ha=null,ap=0;function mt(){throw Error(s(321))}function au(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ht(e[n],t[n]))return!1;return!0}function iu(e,t,n,r,a,c){return Ar=c,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=e===null||e.memoizedState===null?m0:wu,aa=!1,c=n(r,a),aa=!1,qa&&(c=Cf(t,n,r,a)),Af(e),c}function Af(e){z.H=Hi;var t=Ze!==null&&Ze.next!==null;if(Ar=0,yt=Ze=Re=null,oo=!1,zi=0,Ha=null,t)throw Error(s(300));e===null||wt||(e=e.dependencies,e!==null&&Js(e)&&(wt=!0))}function Cf(e,t,n,r){Re=e;var a=0;do{if(qa&&(Ha=null),zi=0,qa=!1,25<=a)throw Error(s(301));if(a+=1,yt=Ze=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}z.H=h0,c=t(n,r)}while(qa);return c}function ip(){var e=z.H,t=e.useState()[0];return t=typeof t.then=="function"?Ui(t):t,e=e.useState()[0],(Ze!==null?Ze.memoizedState:null)!==e&&(Re.flags|=1024),t}function su(){var e=co!==0;return co=0,e}function ou(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function cu(e){if(oo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}oo=!1}Ar=0,yt=Ze=Re=null,qa=!1,zi=co=0,Ha=null}function tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Re.memoizedState=yt=e:yt=yt.next=e,yt}function _t(){if(Ze===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var t=yt===null?Re.memoizedState:yt.next;if(t!==null)yt=t,Ze=e;else{if(e===null)throw Re.alternate===null?Error(s(467)):Error(s(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},yt===null?Re.memoizedState=yt=e:yt=yt.next=e}return yt}function uo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ui(e){var t=zi;return zi+=1,Ha===null&&(Ha=[]),e=xf(Ha,e,t),t=Re,(yt===null?t.memoizedState:yt.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?m0:wu),e}function fo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ui(e);if(e.$$typeof===H)return Pt(e)}throw Error(s(438,String(e)))}function uu(e){var t=null,n=Re.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=Re.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=uo(),Re.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ve;return t.index++,n}function Cr(e,t){return typeof t=="function"?t(e):t}function mo(e){var t=_t();return du(t,Ze,e)}function du(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var a=e.baseQueue,c=r.pending;if(c!==null){if(a!==null){var m=a.next;a.next=c.next,c.next=m}t.baseQueue=a=c,r.pending=null}if(c=e.baseState,a===null)e.memoizedState=c;else{t=a.next;var y=m=null,S=null,L=t,X=!1;do{var Q=L.lane&-536870913;if(Q!==L.lane?(qe&Q)===Q:(Ar&Q)===Q){var q=L.revertLane;if(q===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),Q===Oa&&(X=!0);else if((Ar&q)===q){L=L.next,q===Oa&&(X=!0);continue}else Q={lane:0,revertLane:L.revertLane,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},S===null?(y=S=Q,m=c):S=S.next=Q,Re.lanes|=q,vl|=q;Q=L.action,aa&&n(c,Q),c=L.hasEagerState?L.eagerState:n(c,Q)}else q={lane:Q,revertLane:L.revertLane,gesture:L.gesture,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},S===null?(y=S=q,m=c):S=S.next=q,Re.lanes|=Q,vl|=Q;L=L.next}while(L!==null&&L!==t);if(S===null?m=c:S.next=y,!Ht(c,e.memoizedState)&&(wt=!0,X&&(n=La,n!==null)))throw n;e.memoizedState=c,e.baseState=m,e.baseQueue=S,r.lastRenderedState=c}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function fu(e){var t=_t(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,c=t.memoizedState;if(a!==null){n.pending=null;var m=a=a.next;do c=e(c,m.action),m=m.next;while(m!==a);Ht(c,t.memoizedState)||(wt=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,r]}function Df(e,t,n){var r=Re,a=_t(),c=Ie;if(c){if(n===void 0)throw Error(s(407));n=n()}else n=t();var m=!Ht((Ze||a).memoizedState,n);if(m&&(a.memoizedState=n,wt=!0),a=a.queue,pu(Bf.bind(null,r,a,e),[e]),a.getSnapshot!==t||m||yt!==null&&yt.memoizedState.tag&1){if(r.flags|=2048,Va(9,{destroy:void 0},Lf.bind(null,r,a,n,t),null),tt===null)throw Error(s(349));c||(Ar&127)!==0||Of(r,t,n)}return n}function Of(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Re.updateQueue,t===null?(t=uo(),Re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Lf(e,t,n,r){t.value=n,t.getSnapshot=r,zf(t)&&Uf(e)}function Bf(e,t,n){return n(function(){zf(t)&&Uf(e)})}function zf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ht(e,n)}catch{return!0}}function Uf(e){var t=Ql(e,2);t!==null&&un(t,e,2)}function mu(e){var t=tn();if(typeof e=="function"){var n=e;if(e=n(),aa){mn(!0);try{n()}finally{mn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cr,lastRenderedState:e},t}function qf(e,t,n,r){return e.baseState=n,du(e,Ze,typeof r=="function"?r:Cr)}function sp(e,t,n,r,a){if(go(e))throw Error(s(485));if(e=t.action,e!==null){var c={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){c.listeners.push(m)}};z.T!==null?n(!0):c.isTransition=!1,r(c),n=t.pending,n===null?(c.next=t.pending=c,Hf(t,c)):(c.next=n.next,t.pending=n.next=c)}}function Hf(e,t){var n=t.action,r=t.payload,a=e.state;if(t.isTransition){var c=z.T,m={};z.T=m;try{var y=n(a,r),S=z.S;S!==null&&S(m,y),Vf(e,t,y)}catch(L){hu(e,t,L)}finally{c!==null&&m.types!==null&&(c.types=m.types),z.T=c}}else try{c=n(a,r),Vf(e,t,c)}catch(L){hu(e,t,L)}}function Vf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){Pf(e,t,r)},function(r){return hu(e,t,r)}):Pf(e,t,n)}function Pf(e,t,n){t.status="fulfilled",t.value=n,If(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Hf(e,n)))}function hu(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=n,If(t),t=t.next;while(t!==r)}e.action=null}function If(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ff(e,t){return t}function Gf(e,t){if(Ie){var n=tt.formState;if(n!==null){e:{var r=Re;if(Ie){if(nt){t:{for(var a=nt,c=Un;a.nodeType!==8;){if(!c){a=null;break t}if(a=Hn(a.nextSibling),a===null){a=null;break t}}c=a.data,a=c==="F!"||c==="F"?a:null}if(a){nt=Hn(a.nextSibling),r=a.data==="F!";break e}}cl(r)}r=!1}r&&(t=n[0])}}return n=tn(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ff,lastRenderedState:t},n.queue=r,n=u0.bind(null,Re,r),r.dispatch=n,r=mu(!1),c=yu.bind(null,Re,!1,r.queue),r=tn(),a={state:t,dispatch:null,action:e,pending:null},r.queue=a,n=sp.bind(null,Re,a,c,n),a.dispatch=n,r.memoizedState=e,[t,n,!1]}function $f(e){var t=_t();return Yf(t,Ze,e)}function Yf(e,t,n){if(t=du(e,t,Ff)[0],e=mo(Cr)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=Ui(t)}catch(m){throw m===Ba?no:m}else r=t;t=_t();var a=t.queue,c=a.dispatch;return n!==t.memoizedState&&(Re.flags|=2048,Va(9,{destroy:void 0},op.bind(null,a,n),null)),[r,c,e]}function op(e,t){e.action=t}function Xf(e){var t=_t(),n=Ze;if(n!==null)return Yf(t,n,e);_t(),t=t.memoizedState,n=_t();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Va(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=Re.updateQueue,t===null&&(t=uo(),Re.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Kf(){return _t().memoizedState}function ho(e,t,n,r){var a=tn();Re.flags|=e,a.memoizedState=Va(1|t,{destroy:void 0},n,r===void 0?null:r)}function po(e,t,n,r){var a=_t();r=r===void 0?null:r;var c=a.memoizedState.inst;Ze!==null&&r!==null&&au(r,Ze.memoizedState.deps)?a.memoizedState=Va(t,c,n,r):(Re.flags|=e,a.memoizedState=Va(1|t,c,n,r))}function Qf(e,t){ho(8390656,8,e,t)}function pu(e,t){po(2048,8,e,t)}function cp(e){Re.flags|=4;var t=Re.updateQueue;if(t===null)t=uo(),Re.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Wf(e){var t=_t().memoizedState;return cp({ref:t,nextImpl:e}),function(){if((Xe&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Zf(e,t){return po(4,2,e,t)}function Jf(e,t){return po(4,4,e,t)}function e0(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function t0(e,t,n){n=n!=null?n.concat([e]):null,po(4,4,e0.bind(null,t,e),n)}function gu(){}function n0(e,t){var n=_t();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&au(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function r0(e,t){var n=_t();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&au(t,r[1]))return r[0];if(r=e(),aa){mn(!0);try{e()}finally{mn(!1)}}return n.memoizedState=[r,t],r}function _u(e,t,n){return n===void 0||(Ar&1073741824)!==0&&(qe&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=l1(),Re.lanes|=e,vl|=e,n)}function l0(e,t,n,r){return Ht(n,t)?n:Ua.current!==null?(e=_u(e,n,r),Ht(e,t)||(wt=!0),e):(Ar&42)===0||(Ar&1073741824)!==0&&(qe&261930)===0?(wt=!0,e.memoizedState=n):(e=l1(),Re.lanes|=e,vl|=e,t)}function a0(e,t,n,r,a){var c=ne.p;ne.p=c!==0&&8>c?c:8;var m=z.T,y={};z.T=y,yu(e,!1,t,n);try{var S=a(),L=z.S;if(L!==null&&L(y,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var X=lp(S,r);qi(e,t,X,Tn(e))}else qi(e,t,r,Tn(e))}catch(Q){qi(e,t,{then:function(){},status:"rejected",reason:Q},Tn())}finally{ne.p=c,m!==null&&y.types!==null&&(m.types=y.types),z.T=m}}function up(){}function vu(e,t,n,r){if(e.tag!==5)throw Error(s(476));var a=i0(e).queue;a0(e,a,t,me,n===null?up:function(){return s0(e),n(r)})}function i0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cr,lastRenderedState:me},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cr,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function s0(e){var t=i0(e);t.next===null&&(t=e.alternate.memoizedState),qi(e,t.next.queue,{},Tn())}function bu(){return Pt(ns)}function o0(){return _t().memoizedState}function c0(){return _t().memoizedState}function dp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Tn();e=fl(n);var r=ml(t,e,n);r!==null&&(un(r,t,n),Oi(r,t,n)),t={cache:Xc()},e.payload=t;return}t=t.return}}function fp(e,t,n){var r=Tn();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},go(e)?d0(t,n):(n=zc(e,t,n,r),n!==null&&(un(n,e,r),f0(n,t,r)))}function u0(e,t,n){var r=Tn();qi(e,t,n,r)}function qi(e,t,n,r){var a={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(go(e))d0(t,a);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var m=t.lastRenderedState,y=c(m,n);if(a.hasEagerState=!0,a.eagerState=y,Ht(y,m))return Ks(e,t,a,0),tt===null&&Xs(),!1}catch{}finally{}if(n=zc(e,t,a,r),n!==null)return un(n,e,r),f0(n,t,r),!0}return!1}function yu(e,t,n,r){if(r={lane:2,revertLane:Zu(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},go(e)){if(t)throw Error(s(479))}else t=zc(e,n,r,2),t!==null&&un(t,e,2)}function go(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function d0(e,t){qa=oo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function f0(e,t,n){if((n&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ha(e,n)}}var Hi={readContext:Pt,use:fo,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useLayoutEffect:mt,useInsertionEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useSyncExternalStore:mt,useId:mt,useHostTransitionStatus:mt,useFormState:mt,useActionState:mt,useOptimistic:mt,useMemoCache:mt,useCacheRefresh:mt};Hi.useEffectEvent=mt;var m0={readContext:Pt,use:fo,useCallback:function(e,t){return tn().memoizedState=[e,t===void 0?null:t],e},useContext:Pt,useEffect:Qf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ho(4194308,4,e0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ho(4194308,4,e,t)},useInsertionEffect:function(e,t){ho(4,2,e,t)},useMemo:function(e,t){var n=tn();t=t===void 0?null:t;var r=e();if(aa){mn(!0);try{e()}finally{mn(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=tn();if(n!==void 0){var a=n(t);if(aa){mn(!0);try{n(t)}finally{mn(!1)}}}else a=t;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=fp.bind(null,Re,e),[r.memoizedState,e]},useRef:function(e){var t=tn();return e={current:e},t.memoizedState=e},useState:function(e){e=mu(e);var t=e.queue,n=u0.bind(null,Re,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:gu,useDeferredValue:function(e,t){var n=tn();return _u(n,e,t)},useTransition:function(){var e=mu(!1);return e=a0.bind(null,Re,e.queue,!0,!1),tn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Re,a=tn();if(Ie){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),tt===null)throw Error(s(349));(qe&127)!==0||Of(r,t,n)}a.memoizedState=n;var c={value:n,getSnapshot:t};return a.queue=c,Qf(Bf.bind(null,r,c,e),[e]),r.flags|=2048,Va(9,{destroy:void 0},Lf.bind(null,r,c,n,t),null),n},useId:function(){var e=tn(),t=tt.identifierPrefix;if(Ie){var n=or,r=sr;n=(r&~(1<<32-Bt(r)-1)).toString(32)+n,t="_"+t+"R_"+n,n=co++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=ap++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:bu,useFormState:Gf,useActionState:Gf,useOptimistic:function(e){var t=tn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=yu.bind(null,Re,!0,n),n.dispatch=t,[e,t]},useMemoCache:uu,useCacheRefresh:function(){return tn().memoizedState=dp.bind(null,Re)},useEffectEvent:function(e){var t=tn(),n={impl:e};return t.memoizedState=n,function(){if((Xe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},wu={readContext:Pt,use:fo,useCallback:n0,useContext:Pt,useEffect:pu,useImperativeHandle:t0,useInsertionEffect:Zf,useLayoutEffect:Jf,useMemo:r0,useReducer:mo,useRef:Kf,useState:function(){return mo(Cr)},useDebugValue:gu,useDeferredValue:function(e,t){var n=_t();return l0(n,Ze.memoizedState,e,t)},useTransition:function(){var e=mo(Cr)[0],t=_t().memoizedState;return[typeof e=="boolean"?e:Ui(e),t]},useSyncExternalStore:Df,useId:o0,useHostTransitionStatus:bu,useFormState:$f,useActionState:$f,useOptimistic:function(e,t){var n=_t();return qf(n,Ze,e,t)},useMemoCache:uu,useCacheRefresh:c0};wu.useEffectEvent=Wf;var h0={readContext:Pt,use:fo,useCallback:n0,useContext:Pt,useEffect:pu,useImperativeHandle:t0,useInsertionEffect:Zf,useLayoutEffect:Jf,useMemo:r0,useReducer:fu,useRef:Kf,useState:function(){return fu(Cr)},useDebugValue:gu,useDeferredValue:function(e,t){var n=_t();return Ze===null?_u(n,e,t):l0(n,Ze.memoizedState,e,t)},useTransition:function(){var e=fu(Cr)[0],t=_t().memoizedState;return[typeof e=="boolean"?e:Ui(e),t]},useSyncExternalStore:Df,useId:o0,useHostTransitionStatus:bu,useFormState:Xf,useActionState:Xf,useOptimistic:function(e,t){var n=_t();return Ze!==null?qf(n,Ze,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:uu,useCacheRefresh:c0};h0.useEffectEvent=Wf;function xu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:k({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ku={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Tn(),a=fl(r);a.payload=t,n!=null&&(a.callback=n),t=ml(e,a,r),t!==null&&(un(t,e,r),Oi(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Tn(),a=fl(r);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=ml(e,a,r),t!==null&&(un(t,e,r),Oi(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Tn(),r=fl(n);r.tag=2,t!=null&&(r.callback=t),t=ml(e,r,n),t!==null&&(un(t,e,n),Oi(t,e,n))}};function p0(e,t,n,r,a,c,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,c,m):t.prototype&&t.prototype.isPureReactComponent?!il(n,r)||!il(a,c):!0}function g0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ku.enqueueReplaceState(t,t.state,null)}function ia(e,t){var n=t;if("ref"in t){n={};for(var r in t)r!=="ref"&&(n[r]=t[r])}if(e=e.defaultProps){n===t&&(n=k({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function _0(e){Tr(e)}function v0(e){console.error(e)}function b0(e){Tr(e)}function _o(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function y0(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Su(e,t,n){return n=fl(n),n.tag=3,n.payload={element:null},n.callback=function(){_o(e,t)},n}function w0(e){return e=fl(e),e.tag=3,e}function x0(e,t,n,r){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var c=r.value;e.payload=function(){return a(c)},e.callback=function(){y0(t,n,r)}}var m=n.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){y0(t,n,r),typeof a!="function"&&(bl===null?bl=new Set([this]):bl.add(this));var y=r.stack;this.componentDidCatch(r.value,{componentStack:y!==null?y:""})})}function mp(e,t,n,r,a){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=n.alternate,t!==null&&Da(t,n,a,!0),n=xn.current,n!==null){switch(n.tag){case 31:case 13:return qn===null?jo():n.alternate===null&&ht===0&&(ht=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ro?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ku(e,r,a)),!1;case 22:return n.flags|=65536,r===ro?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ku(e,r,a)),!1}throw Error(s(435,n.tag))}return Ku(e,r,a),jo(),!1}if(Ie)return t=xn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ic&&(e=Error(s(422),{cause:r}),ji(Ln(e,n)))):(r!==Ic&&(t=Error(s(423),{cause:r}),ji(Ln(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ln(r,n),a=Su(e.stateNode,r,a),eu(e,a),ht!==4&&(ht=2)),!1;var c=Error(s(520),{cause:r});if(c=Ln(c,n),Xi===null?Xi=[c]:Xi.push(c),ht!==4&&(ht=2),t===null)return!0;r=Ln(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Su(n.stateNode,r,e),eu(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(bl===null||!bl.has(c))))return n.flags|=65536,a&=-a,n.lanes|=a,a=w0(a),x0(a,e,n,r),eu(n,a),!1}n=n.return}while(n!==null);return!1}var Eu=Error(s(461)),wt=!1;function It(e,t,n,r){t.child=e===null?Tf(t,null,n,r):la(t,e.child,n,r)}function k0(e,t,n,r,a){n=n.render;var c=t.ref;if("ref"in r){var m={};for(var y in r)y!=="ref"&&(m[y]=r[y])}else m=r;return ea(t),r=iu(e,t,n,m,c,a),y=su(),e!==null&&!wt?(ou(e,t,a),Dr(e,t,a)):(Ie&&y&&Vc(t),t.flags|=1,It(e,t,r,a),t.child)}function S0(e,t,n,r,a){if(e===null){var c=n.type;return typeof c=="function"&&!Uc(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,E0(e,t,c,r,a)):(e=Ws(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!Du(e,a)){var m=c.memoizedProps;if(n=n.compare,n=n!==null?n:il,n(m,r)&&e.ref===t.ref)return Dr(e,t,a)}return t.flags|=1,e=Mr(c,r),e.ref=t.ref,e.return=t,t.child=e}function E0(e,t,n,r,a){if(e!==null){var c=e.memoizedProps;if(il(c,r)&&e.ref===t.ref)if(wt=!1,t.pendingProps=r=c,Du(e,a))(e.flags&131072)!==0&&(wt=!0);else return t.lanes=e.lanes,Dr(e,t,a)}return Tu(e,t,n,r,a)}function T0(e,t,n,r){var a=r.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(r=t.child=e.child,a=0;r!==null;)a=a|r.lanes|r.childLanes,r=r.sibling;r=a&~c}else r=0,t.child=null;return M0(e,t,c,n,r)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&to(t,c!==null?c.cachePool:null),c!==null?jf(t,c):nu(),Rf(t);else return r=t.lanes=536870912,M0(e,t,c!==null?c.baseLanes|n:n,n,r)}else c!==null?(to(t,c.cachePool),jf(t,c),pl(),t.memoizedState=null):(e!==null&&to(t,null),nu(),pl());return It(e,t,a,n),t.child}function Vi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function M0(e,t,n,r,a){var c=Qc();return c=c===null?null:{parent:bt._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&to(t,null),nu(),Rf(t),e!==null&&Da(e,t,r,!0),t.childLanes=a,null}function vo(e,t){return t=yo({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function N0(e,t,n){return la(t,e.child,null,n),e=vo(t,t.pendingProps),e.flags|=2,kn(t),t.memoizedState=null,e}function hp(e,t,n){var r=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ie){if(r.mode==="hidden")return e=vo(t,r),t.lanes=536870912,Vi(null,e);if(lu(t),(e=nt)?(e=H1(e,Un),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sl!==null?{id:sr,overflow:or}:null,retryLane:536870912,hydrationErrors:null},n=df(e),n.return=t,t.child=n,Vt=t,nt=null)):e=null,e===null)throw cl(t);return t.lanes=536870912,null}return vo(t,r)}var c=e.memoizedState;if(c!==null){var m=c.dehydrated;if(lu(t),a)if(t.flags&256)t.flags&=-257,t=N0(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(wt||Da(e,t,n,!1),a=(n&e.childLanes)!==0,wt||a){if(r=tt,r!==null&&(m=Ss(r,n),m!==0&&m!==c.retryLane))throw c.retryLane=m,Ql(e,m),un(r,e,m),Eu;jo(),t=N0(e,t,n)}else e=c.treeContext,nt=Hn(m.nextSibling),Vt=t,Ie=!0,ol=null,Un=!1,e!==null&&hf(t,e),t=vo(t,r),t.flags|=4096;return t}return e=Mr(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function bo(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Tu(e,t,n,r,a){return ea(t),n=iu(e,t,n,r,void 0,a),r=su(),e!==null&&!wt?(ou(e,t,a),Dr(e,t,a)):(Ie&&r&&Vc(t),t.flags|=1,It(e,t,n,a),t.child)}function j0(e,t,n,r,a,c){return ea(t),t.updateQueue=null,n=Cf(t,r,n,a),Af(e),r=su(),e!==null&&!wt?(ou(e,t,c),Dr(e,t,c)):(Ie&&r&&Vc(t),t.flags|=1,It(e,t,n,c),t.child)}function R0(e,t,n,r,a){if(ea(t),t.stateNode===null){var c=ja,m=n.contextType;typeof m=="object"&&m!==null&&(c=Pt(m)),c=new n(r,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=ku,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=r,c.state=t.memoizedState,c.refs={},Zc(t),m=n.contextType,c.context=typeof m=="object"&&m!==null?Pt(m):ja,c.state=t.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(xu(t,n,m,r),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(m=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),m!==c.state&&ku.enqueueReplaceState(c,c.state,null),Bi(t,r,c,a),Li(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){c=t.stateNode;var y=t.memoizedProps,S=ia(n,y);c.props=S;var L=c.context,X=n.contextType;m=ja,typeof X=="object"&&X!==null&&(m=Pt(X));var Q=n.getDerivedStateFromProps;X=typeof Q=="function"||typeof c.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,X||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y||L!==m)&&g0(t,c,r,m),dl=!1;var q=t.memoizedState;c.state=q,Bi(t,r,c,a),Li(),L=t.memoizedState,y||q!==L||dl?(typeof Q=="function"&&(xu(t,n,Q,r),L=t.memoizedState),(S=dl||p0(t,n,S,r,q,L,m))?(X||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=L),c.props=r,c.state=L,c.context=m,r=S):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{c=t.stateNode,Jc(e,t),m=t.memoizedProps,X=ia(n,m),c.props=X,Q=t.pendingProps,q=c.context,L=n.contextType,S=ja,typeof L=="object"&&L!==null&&(S=Pt(L)),y=n.getDerivedStateFromProps,(L=typeof y=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==Q||q!==S)&&g0(t,c,r,S),dl=!1,q=t.memoizedState,c.state=q,Bi(t,r,c,a),Li();var I=t.memoizedState;m!==Q||q!==I||dl||e!==null&&e.dependencies!==null&&Js(e.dependencies)?(typeof y=="function"&&(xu(t,n,y,r),I=t.memoizedState),(X=dl||p0(t,n,X,r,q,I,S)||e!==null&&e.dependencies!==null&&Js(e.dependencies))?(L||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,I,S),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,I,S)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=I),c.props=r,c.state=I,c.context=S,r=X):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&q===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&q===e.memoizedState||(t.flags|=1024),r=!1)}return c=r,bo(e,t),r=(t.flags&128)!==0,c||r?(c=t.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&r?(t.child=la(t,e.child,null,a),t.child=la(t,null,n,a)):It(e,t,n,a),t.memoizedState=c.state,e=t.child):e=Dr(e,t,a),e}function A0(e,t,n,r){return Zl(),t.flags|=256,It(e,t,n,r),t.child}var Mu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nu(e){return{baseLanes:e,cachePool:yf()}}function ju(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=En),e}function C0(e,t,n){var r=t.pendingProps,a=!1,c=(t.flags&128)!==0,m;if((m=c)||(m=e!==null&&e.memoizedState===null?!1:(gt.current&2)!==0),m&&(a=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ie){if(a?hl(t):pl(),(e=nt)?(e=H1(e,Un),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sl!==null?{id:sr,overflow:or}:null,retryLane:536870912,hydrationErrors:null},n=df(e),n.return=t,t.child=n,Vt=t,nt=null)):e=null,e===null)throw cl(t);return dd(e)?t.lanes=32:t.lanes=536870912,null}var y=r.children;return r=r.fallback,a?(pl(),a=t.mode,y=yo({mode:"hidden",children:y},a),r=Wl(r,a,n,null),y.return=t,r.return=t,y.sibling=r,t.child=y,r=t.child,r.memoizedState=Nu(n),r.childLanes=ju(e,m,n),t.memoizedState=Mu,Vi(null,r)):(hl(t),Ru(t,y))}var S=e.memoizedState;if(S!==null&&(y=S.dehydrated,y!==null)){if(c)t.flags&256?(hl(t),t.flags&=-257,t=Au(e,t,n)):t.memoizedState!==null?(pl(),t.child=e.child,t.flags|=128,t=null):(pl(),y=r.fallback,a=t.mode,r=yo({mode:"visible",children:r.children},a),y=Wl(y,a,n,null),y.flags|=2,r.return=t,y.return=t,r.sibling=y,t.child=r,la(t,e.child,null,n),r=t.child,r.memoizedState=Nu(n),r.childLanes=ju(e,m,n),t.memoizedState=Mu,t=Vi(null,r));else if(hl(t),dd(y)){if(m=y.nextSibling&&y.nextSibling.dataset,m)var L=m.dgst;m=L,r=Error(s(419)),r.stack="",r.digest=m,ji({value:r,source:null,stack:null}),t=Au(e,t,n)}else if(wt||Da(e,t,n,!1),m=(n&e.childLanes)!==0,wt||m){if(m=tt,m!==null&&(r=Ss(m,n),r!==0&&r!==S.retryLane))throw S.retryLane=r,Ql(e,r),un(m,e,r),Eu;ud(y)||jo(),t=Au(e,t,n)}else ud(y)?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,nt=Hn(y.nextSibling),Vt=t,Ie=!0,ol=null,Un=!1,e!==null&&hf(t,e),t=Ru(t,r.children),t.flags|=4096);return t}return a?(pl(),y=r.fallback,a=t.mode,S=e.child,L=S.sibling,r=Mr(S,{mode:"hidden",children:r.children}),r.subtreeFlags=S.subtreeFlags&65011712,L!==null?y=Mr(L,y):(y=Wl(y,a,n,null),y.flags|=2),y.return=t,r.return=t,r.sibling=y,t.child=r,Vi(null,r),r=t.child,y=e.child.memoizedState,y===null?y=Nu(n):(a=y.cachePool,a!==null?(S=bt._currentValue,a=a.parent!==S?{parent:S,pool:S}:a):a=yf(),y={baseLanes:y.baseLanes|n,cachePool:a}),r.memoizedState=y,r.childLanes=ju(e,m,n),t.memoizedState=Mu,Vi(e.child,r)):(hl(t),n=e.child,e=n.sibling,n=Mr(n,{mode:"visible",children:r.children}),n.return=t,n.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=n,t.memoizedState=null,n)}function Ru(e,t){return t=yo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function yo(e,t){return e=wn(22,e,null,t),e.lanes=0,e}function Au(e,t,n){return la(t,e.child,null,n),e=Ru(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function D0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$c(e.return,t,n)}function Cu(e,t,n,r,a,c){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a,treeForkCount:c}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=r,m.tail=n,m.tailMode=a,m.treeForkCount=c)}function O0(e,t,n){var r=t.pendingProps,a=r.revealOrder,c=r.tail;r=r.children;var m=gt.current,y=(m&2)!==0;if(y?(m=m&1|2,t.flags|=128):m&=1,re(gt,m),It(e,t,r,n),r=Ie?Ni:0,!y&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&D0(e,n,t);else if(e.tag===19)D0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&so(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Cu(t,!1,a,n,c,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&so(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Cu(t,!0,n,null,c,r);break;case"together":Cu(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Dr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),vl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Da(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Mr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Du(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Js(e)))}function pp(e,t,n){switch(t.tag){case 3:ie(t,t.stateNode.containerInfo),ul(t,bt,e.memoizedState.cache),Zl();break;case 27:case 5:Ue(t);break;case 4:ie(t,t.stateNode.containerInfo);break;case 10:ul(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,lu(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(hl(t),t.flags|=128,null):(n&t.child.childLanes)!==0?C0(e,t,n):(hl(t),e=Dr(e,t,n),e!==null?e.sibling:null);hl(t);break;case 19:var a=(e.flags&128)!==0;if(r=(n&t.childLanes)!==0,r||(Da(e,t,n,!1),r=(n&t.childLanes)!==0),a){if(r)return O0(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),re(gt,gt.current),r)break;return null;case 22:return t.lanes=0,T0(e,t,n,t.pendingProps);case 24:ul(t,bt,e.memoizedState.cache)}return Dr(e,t,n)}function L0(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)wt=!0;else{if(!Du(e,n)&&(t.flags&128)===0)return wt=!1,pp(e,t,n);wt=(e.flags&131072)!==0}else wt=!1,Ie&&(t.flags&1048576)!==0&&mf(t,Ni,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=na(t.elementType),t.type=e,typeof e=="function")Uc(e)?(r=ia(e,r),t.tag=1,t=R0(null,t,e,r,n)):(t.tag=0,t=Tu(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===te){t.tag=11,t=k0(null,t,e,r,n);break e}else if(a===Z){t.tag=14,t=S0(null,t,e,r,n);break e}}throw t=be(e)||e,Error(s(306,t,""))}}return t;case 0:return Tu(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=ia(r,t.pendingProps),R0(e,t,r,a,n);case 3:e:{if(ie(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var c=t.memoizedState;a=c.element,Jc(e,t),Bi(t,r,null,n);var m=t.memoizedState;if(r=m.cache,ul(t,bt,r),r!==c.cache&&Yc(t,[bt],n,!0),Li(),r=m.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=A0(e,t,r,n);break e}else if(r!==a){a=Ln(Error(s(424)),t),ji(a),t=A0(e,t,r,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(nt=Hn(e.firstChild),Vt=t,Ie=!0,ol=null,Un=!0,n=Tf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Zl(),r===a){t=Dr(e,t,n);break e}It(e,t,r,n)}t=t.child}return t;case 26:return bo(e,t),e===null?(n=$1(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ie||(n=t.type,e=t.pendingProps,r=Bo(V.current).createElement(n),r[pt]=t,r[Dt]=e,Ft(r,n,e),ft(r),t.stateNode=r):t.memoizedState=$1(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ue(t),e===null&&Ie&&(r=t.stateNode=I1(t.type,t.pendingProps,V.current),Vt=t,Un=!0,a=nt,kl(t.type)?(fd=a,nt=Hn(r.firstChild)):nt=a),It(e,t,t.pendingProps.children,n),bo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ie&&((a=r=nt)&&(r=Gp(r,t.type,t.pendingProps,Un),r!==null?(t.stateNode=r,Vt=t,nt=Hn(r.firstChild),Un=!1,a=!0):a=!1),a||cl(t)),Ue(t),a=t.type,c=t.pendingProps,m=e!==null?e.memoizedProps:null,r=c.children,sd(a,c)?r=null:m!==null&&sd(a,m)&&(t.flags|=32),t.memoizedState!==null&&(a=iu(e,t,ip,null,null,n),ns._currentValue=a),bo(e,t),It(e,t,r,n),t.child;case 6:return e===null&&Ie&&((e=n=nt)&&(n=$p(n,t.pendingProps,Un),n!==null?(t.stateNode=n,Vt=t,nt=null,e=!0):e=!1),e||cl(t)),null;case 13:return C0(e,t,n);case 4:return ie(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=la(t,null,r,n):It(e,t,r,n),t.child;case 11:return k0(e,t,t.type,t.pendingProps,n);case 7:return It(e,t,t.pendingProps,n),t.child;case 8:return It(e,t,t.pendingProps.children,n),t.child;case 12:return It(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ul(t,t.type,r.value),It(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ea(t),a=Pt(a),r=r(a),t.flags|=1,It(e,t,r,n),t.child;case 14:return S0(e,t,t.type,t.pendingProps,n);case 15:return E0(e,t,t.type,t.pendingProps,n);case 19:return O0(e,t,n);case 31:return hp(e,t,n);case 22:return T0(e,t,n,t.pendingProps);case 24:return ea(t),r=Pt(bt),e===null?(a=Qc(),a===null&&(a=tt,c=Xc(),a.pooledCache=c,c.refCount++,c!==null&&(a.pooledCacheLanes|=n),a=c),t.memoizedState={parent:r,cache:a},Zc(t),ul(t,bt,a)):((e.lanes&n)!==0&&(Jc(e,t),Bi(t,null,null,n),Li()),a=e.memoizedState,c=t.memoizedState,a.parent!==r?(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ul(t,bt,r)):(r=c.cache,ul(t,bt,r),r!==a.cache&&Yc(t,[bt],n,!0))),It(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Or(e){e.flags|=4}function Ou(e,t,n,r,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(o1())e.flags|=8192;else throw ra=ro,Wc}else e.flags&=-16777217}function B0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!W1(t))if(o1())e.flags|=8192;else throw ra=ro,Wc}function wo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?zl():536870912,e.lanes|=t,Ga|=t)}function Pi(e,t){if(!Ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&65011712,r|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function gp(e,t,n){var r=t.pendingProps;switch(Pc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(t),null;case 1:return rt(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Rr(bt),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ca(t)?Or(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Fc())),rt(t),null;case 26:var a=t.type,c=t.memoizedState;return e===null?(Or(t),c!==null?(rt(t),B0(t,c)):(rt(t),Ou(t,a,null,r,n))):c?c!==e.memoizedState?(Or(t),rt(t),B0(t,c)):(rt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==r&&Or(t),rt(t),Ou(t,a,e,r,n)),null;case 27:if(ce(t),n=V.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Or(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return rt(t),null}e=oe.current,Ca(t)?pf(t):(e=I1(a,r,n),t.stateNode=e,Or(t))}return rt(t),null;case 5:if(ce(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Or(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return rt(t),null}if(c=oe.current,Ca(t))pf(t);else{var m=Bo(V.current);switch(c){case 1:c=m.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:c=m.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":c=m.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":c=m.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":c=m.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?m.createElement("select",{is:r.is}):m.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?m.createElement(a,{is:r.is}):m.createElement(a)}}c[pt]=t,c[Dt]=r;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)c.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=c;e:switch(Ft(c,a,r),a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Or(t)}}return rt(t),Ou(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Or(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(e=V.current,Ca(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Vt,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||C1(e.nodeValue,n)),e||cl(t,!0)}else e=Bo(e).createTextNode(r),e[pt]=t,t.stateNode=e}return rt(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ca(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[pt]=t}else Zl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;rt(t),e=!1}else n=Fc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(kn(t),t):(kn(t),null);if((t.flags&128)!==0)throw Error(s(558))}return rt(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ca(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(s(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(s(317));a[pt]=t}else Zl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;rt(t),a=!1}else a=Fc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(kn(t),t):(kn(t),null)}return kn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),wo(t,t.updateQueue),rt(t),null);case 4:return ye(),e===null&&nd(t.stateNode.containerInfo),rt(t),null;case 10:return Rr(t.type),rt(t),null;case 19:if(U(gt),r=t.memoizedState,r===null)return rt(t),null;if(a=(t.flags&128)!==0,c=r.rendering,c===null)if(a)Pi(r,!1);else{if(ht!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=so(e),c!==null){for(t.flags|=128,Pi(r,!1),e=c.updateQueue,t.updateQueue=e,wo(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)uf(n,e),n=n.sibling;return re(gt,gt.current&1|2),Ie&&Nr(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&At()>To&&(t.flags|=128,a=!0,Pi(r,!1),t.lanes=4194304)}else{if(!a)if(e=so(c),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,wo(t,e),Pi(r,!0),r.tail===null&&r.tailMode==="hidden"&&!c.alternate&&!Ie)return rt(t),null}else 2*At()-r.renderingStartTime>To&&n!==536870912&&(t.flags|=128,a=!0,Pi(r,!1),t.lanes=4194304);r.isBackwards?(c.sibling=t.child,t.child=c):(e=r.last,e!==null?e.sibling=c:t.child=c,r.last=c)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=At(),e.sibling=null,n=gt.current,re(gt,a?n&1|2:n&1),Ie&&Nr(t,r.treeForkCount),e):(rt(t),null);case 22:case 23:return kn(t),ru(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(n&536870912)!==0&&(t.flags&128)===0&&(rt(t),t.subtreeFlags&6&&(t.flags|=8192)):rt(t),n=t.updateQueue,n!==null&&wo(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&U(ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Rr(bt),rt(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function _p(e,t){switch(Pc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rr(bt),ye(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ce(t),null;case 31:if(t.memoizedState!==null){if(kn(t),t.alternate===null)throw Error(s(340));Zl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(kn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Zl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(gt),null;case 4:return ye(),null;case 10:return Rr(t.type),null;case 22:case 23:return kn(t),ru(),e!==null&&U(ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Rr(bt),null;case 25:return null;default:return null}}function z0(e,t){switch(Pc(t),t.tag){case 3:Rr(bt),ye();break;case 26:case 27:case 5:ce(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&kn(t);break;case 13:kn(t);break;case 19:U(gt);break;case 10:Rr(t.type);break;case 22:case 23:kn(t),ru(),e!==null&&U(ta);break;case 24:Rr(bt)}}function Ii(e,t){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var a=r.next;n=a;do{if((n.tag&e)===e){r=void 0;var c=n.create,m=n.inst;r=c(),m.destroy=r}n=n.next}while(n!==a)}}catch(y){We(t,t.return,y)}}function gl(e,t,n){try{var r=t.updateQueue,a=r!==null?r.lastEffect:null;if(a!==null){var c=a.next;r=c;do{if((r.tag&e)===e){var m=r.inst,y=m.destroy;if(y!==void 0){m.destroy=void 0,a=t;var S=n,L=y;try{L()}catch(X){We(a,S,X)}}}r=r.next}while(r!==c)}}catch(X){We(t,t.return,X)}}function U0(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Nf(t,n)}catch(r){We(e,e.return,r)}}}function q0(e,t,n){n.props=ia(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){We(e,t,r)}}function Fi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n=="function"?e.refCleanup=n(r):n.current=r}}catch(a){We(e,t,a)}}function cr(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(a){We(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){We(e,t,a)}else n.current=null}function H0(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(a){We(e,e.return,a)}}function Lu(e,t,n){try{var r=e.stateNode;qp(r,e.type,n,t),r[Dt]=t}catch(a){We(e,e.return,a)}}function V0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&kl(e.type)||e.tag===4}function Bu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||V0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&kl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=An));else if(r!==4&&(r===27&&kl(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(zu(e,t,n),e=e.sibling;e!==null;)zu(e,t,n),e=e.sibling}function xo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&kl(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(xo(e,t,n),e=e.sibling;e!==null;)xo(e,t,n),e=e.sibling}function P0(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Ft(t,r,n),t[pt]=e,t[Dt]=n}catch(c){We(e,e.return,c)}}var Lr=!1,xt=!1,Uu=!1,I0=typeof WeakSet=="function"?WeakSet:Set,Ot=null;function vp(e,t){if(e=e.containerInfo,ad=Io,e=Ys(e),Mi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,c=r.focusNode;r=r.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var m=0,y=-1,S=-1,L=0,X=0,Q=e,q=null;t:for(;;){for(var I;Q!==n||a!==0&&Q.nodeType!==3||(y=m+a),Q!==c||r!==0&&Q.nodeType!==3||(S=m+r),Q.nodeType===3&&(m+=Q.nodeValue.length),(I=Q.firstChild)!==null;)q=Q,Q=I;for(;;){if(Q===e)break t;if(q===n&&++L===a&&(y=m),q===c&&++X===r&&(S=m),(I=Q.nextSibling)!==null)break;Q=q,q=Q.parentNode}Q=I}n=y===-1||S===-1?null:{start:y,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(id={focusedElem:e,selectionRange:n},Io=!1,Ot=t;Ot!==null;)if(t=Ot,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ot=e;else for(;Ot!==null;){switch(t=Ot,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,a=c.memoizedProps,c=c.memoizedState,r=n.stateNode;try{var he=ia(n.type,a);e=r.getSnapshotBeforeUpdate(he,c),r.__reactInternalSnapshotBeforeUpdate=e}catch(Te){We(n,n.return,Te)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)cd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":cd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Ot=e;break}Ot=t.return}}function F0(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:zr(e,n),r&4&&Ii(5,n);break;case 1:if(zr(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(m){We(n,n.return,m)}else{var a=ia(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){We(n,n.return,m)}}r&64&&U0(n),r&512&&Fi(n,n.return);break;case 3:if(zr(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Nf(e,t)}catch(m){We(n,n.return,m)}}break;case 27:t===null&&r&4&&P0(n);case 26:case 5:zr(e,n),t===null&&r&4&&H0(n),r&512&&Fi(n,n.return);break;case 12:zr(e,n);break;case 31:zr(e,n),r&4&&Y0(e,n);break;case 13:zr(e,n),r&4&&X0(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Mp.bind(null,n),Yp(e,n))));break;case 22:if(r=n.memoizedState!==null||Lr,!r){t=t!==null&&t.memoizedState!==null||xt,a=Lr;var c=xt;Lr=r,(xt=t)&&!c?Ur(e,n,(n.subtreeFlags&8772)!==0):zr(e,n),Lr=a,xt=c}break;case 30:break;default:zr(e,n)}}function G0(e){var t=e.alternate;t!==null&&(e.alternate=null,G0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&gr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var st=null,an=!1;function Br(e,t,n){for(n=n.child;n!==null;)$0(e,t,n),n=n.sibling}function $0(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Bl,n)}catch{}switch(n.tag){case 26:xt||cr(n,t),Br(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:xt||cr(n,t);var r=st,a=an;kl(n.type)&&(st=n.stateNode,an=!1),Br(e,t,n),Ji(n.stateNode),st=r,an=a;break;case 5:xt||cr(n,t);case 6:if(r=st,a=an,st=null,Br(e,t,n),st=r,an=a,st!==null)if(an)try{(st.nodeType===9?st.body:st.nodeName==="HTML"?st.ownerDocument.body:st).removeChild(n.stateNode)}catch(c){We(n,t,c)}else try{st.removeChild(n.stateNode)}catch(c){We(n,t,c)}break;case 18:st!==null&&(an?(e=st,U1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ja(e)):U1(st,n.stateNode));break;case 4:r=st,a=an,st=n.stateNode.containerInfo,an=!0,Br(e,t,n),st=r,an=a;break;case 0:case 11:case 14:case 15:gl(2,n,t),xt||gl(4,n,t),Br(e,t,n);break;case 1:xt||(cr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"&&q0(n,t,r)),Br(e,t,n);break;case 21:Br(e,t,n);break;case 22:xt=(r=xt)||n.memoizedState!==null,Br(e,t,n),xt=r;break;default:Br(e,t,n)}}function Y0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ja(e)}catch(n){We(t,t.return,n)}}}function X0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ja(e)}catch(n){We(t,t.return,n)}}function bp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new I0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new I0),t;default:throw Error(s(435,e.tag))}}function ko(e,t){var n=bp(e);t.forEach(function(r){if(!n.has(r)){n.add(r);var a=Np.bind(null,e,r);r.then(a,a)}})}function sn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],c=e,m=t,y=m;e:for(;y!==null;){switch(y.tag){case 27:if(kl(y.type)){st=y.stateNode,an=!1;break e}break;case 5:st=y.stateNode,an=!1;break e;case 3:case 4:st=y.stateNode.containerInfo,an=!0;break e}y=y.return}if(st===null)throw Error(s(160));$0(c,m,a),st=null,an=!1,c=a.alternate,c!==null&&(c.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)K0(t,e),t=t.sibling}var Zn=null;function K0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:sn(t,e),on(e),r&4&&(gl(3,e,e.return),Ii(3,e),gl(5,e,e.return));break;case 1:sn(t,e),on(e),r&512&&(xt||n===null||cr(n,n.return)),r&64&&Lr&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=Zn;if(sn(t,e),on(e),r&512&&(xt||n===null||cr(n,n.return)),r&4){var c=n!==null?n.memoizedState:null;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){e:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(r){case"title":c=a.getElementsByTagName("title")[0],(!c||c[gn]||c[pt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=a.createElement(r),a.head.insertBefore(c,a.querySelector("head > title"))),Ft(c,r,n),c[pt]=e,ft(c),r=c;break e;case"link":var m=K1("link","href",a).get(r+(n.href||""));if(m){for(var y=0;y<m.length;y++)if(c=m[y],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(y,1);break t}}c=a.createElement(r),Ft(c,r,n),a.head.appendChild(c);break;case"meta":if(m=K1("meta","content",a).get(r+(n.content||""))){for(y=0;y<m.length;y++)if(c=m[y],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(y,1);break t}}c=a.createElement(r),Ft(c,r,n),a.head.appendChild(c);break;default:throw Error(s(468,r))}c[pt]=e,ft(c),r=c}e.stateNode=r}else Q1(a,e.type,e.stateNode);else e.stateNode=X1(a,r,e.memoizedProps);else c!==r?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,r===null?Q1(a,e.type,e.stateNode):X1(a,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Lu(e,e.memoizedProps,n.memoizedProps)}break;case 27:sn(t,e),on(e),r&512&&(xt||n===null||cr(n,n.return)),n!==null&&r&4&&Lu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(sn(t,e),on(e),r&512&&(xt||n===null||cr(n,n.return)),e.flags&32){a=e.stateNode;try{vr(a,"")}catch(he){We(e,e.return,he)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Lu(e,a,n!==null?n.memoizedProps:a)),r&1024&&(Uu=!0);break;case 6:if(sn(t,e),on(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(he){We(e,e.return,he)}}break;case 3:if(qo=null,a=Zn,Zn=zo(t.containerInfo),sn(t,e),Zn=a,on(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ja(t.containerInfo)}catch(he){We(e,e.return,he)}Uu&&(Uu=!1,Q0(e));break;case 4:r=Zn,Zn=zo(e.stateNode.containerInfo),sn(t,e),on(e),Zn=r;break;case 12:sn(t,e),on(e);break;case 31:sn(t,e),on(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ko(e,r)));break;case 13:sn(t,e),on(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Eo=At()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ko(e,r)));break;case 22:a=e.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,L=Lr,X=xt;if(Lr=L||a,xt=X||S,sn(t,e),xt=X,Lr=L,on(e),r&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||S||Lr||xt||sa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){S=n=t;try{if(c=S.stateNode,a)m=c.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{y=S.stateNode;var Q=S.memoizedProps.style,q=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;y.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(he){We(S,S.return,he)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=a?"":S.memoizedProps}catch(he){We(S,S.return,he)}}}else if(t.tag===18){if(n===null){S=t;try{var I=S.stateNode;a?q1(I,!0):q1(S.stateNode,!1)}catch(he){We(S,S.return,he)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ko(e,n))));break;case 19:sn(t,e),on(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ko(e,r)));break;case 30:break;case 21:break;default:sn(t,e),on(e)}}function on(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(V0(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var a=n.stateNode,c=Bu(e);xo(e,c,a);break;case 5:var m=n.stateNode;n.flags&32&&(vr(m,""),n.flags&=-33);var y=Bu(e);xo(e,y,m);break;case 3:case 4:var S=n.stateNode.containerInfo,L=Bu(e);zu(e,L,S);break;default:throw Error(s(161))}}catch(X){We(e,e.return,X)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Q0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Q0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function zr(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)F0(e,t.alternate,t),t=t.sibling}function sa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:gl(4,t,t.return),sa(t);break;case 1:cr(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&q0(t,t.return,n),sa(t);break;case 27:Ji(t.stateNode);case 26:case 5:cr(t,t.return),sa(t);break;case 22:t.memoizedState===null&&sa(t);break;case 30:sa(t);break;default:sa(t)}e=e.sibling}}function Ur(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,a=e,c=t,m=c.flags;switch(c.tag){case 0:case 11:case 15:Ur(a,c,n),Ii(4,c);break;case 1:if(Ur(a,c,n),r=c,a=r.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(L){We(r,r.return,L)}if(r=c,a=r.updateQueue,a!==null){var y=r.stateNode;try{var S=a.shared.hiddenCallbacks;if(S!==null)for(a.shared.hiddenCallbacks=null,a=0;a<S.length;a++)Mf(S[a],y)}catch(L){We(r,r.return,L)}}n&&m&64&&U0(c),Fi(c,c.return);break;case 27:P0(c);case 26:case 5:Ur(a,c,n),n&&r===null&&m&4&&H0(c),Fi(c,c.return);break;case 12:Ur(a,c,n);break;case 31:Ur(a,c,n),n&&m&4&&Y0(a,c);break;case 13:Ur(a,c,n),n&&m&4&&X0(a,c);break;case 22:c.memoizedState===null&&Ur(a,c,n),Fi(c,c.return);break;case 30:break;default:Ur(a,c,n)}t=t.sibling}}function qu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ri(n))}function Hu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ri(e))}function Jn(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)W0(e,t,n,r),t=t.sibling}function W0(e,t,n,r){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Jn(e,t,n,r),a&2048&&Ii(9,t);break;case 1:Jn(e,t,n,r);break;case 3:Jn(e,t,n,r),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ri(e)));break;case 12:if(a&2048){Jn(e,t,n,r),e=t.stateNode;try{var c=t.memoizedProps,m=c.id,y=c.onPostCommit;typeof y=="function"&&y(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){We(t,t.return,S)}}else Jn(e,t,n,r);break;case 31:Jn(e,t,n,r);break;case 13:Jn(e,t,n,r);break;case 23:break;case 22:c=t.stateNode,m=t.alternate,t.memoizedState!==null?c._visibility&2?Jn(e,t,n,r):Gi(e,t):c._visibility&2?Jn(e,t,n,r):(c._visibility|=2,Pa(e,t,n,r,(t.subtreeFlags&10256)!==0||!1)),a&2048&&qu(m,t);break;case 24:Jn(e,t,n,r),a&2048&&Hu(t.alternate,t);break;default:Jn(e,t,n,r)}}function Pa(e,t,n,r,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,m=t,y=n,S=r,L=m.flags;switch(m.tag){case 0:case 11:case 15:Pa(c,m,y,S,a),Ii(8,m);break;case 23:break;case 22:var X=m.stateNode;m.memoizedState!==null?X._visibility&2?Pa(c,m,y,S,a):Gi(c,m):(X._visibility|=2,Pa(c,m,y,S,a)),a&&L&2048&&qu(m.alternate,m);break;case 24:Pa(c,m,y,S,a),a&&L&2048&&Hu(m.alternate,m);break;default:Pa(c,m,y,S,a)}t=t.sibling}}function Gi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,a=r.flags;switch(r.tag){case 22:Gi(n,r),a&2048&&qu(r.alternate,r);break;case 24:Gi(n,r),a&2048&&Hu(r.alternate,r);break;default:Gi(n,r)}t=t.sibling}}var $i=8192;function Ia(e,t,n){if(e.subtreeFlags&$i)for(e=e.child;e!==null;)Z0(e,t,n),e=e.sibling}function Z0(e,t,n){switch(e.tag){case 26:Ia(e,t,n),e.flags&$i&&e.memoizedState!==null&&a2(n,Zn,e.memoizedState,e.memoizedProps);break;case 5:Ia(e,t,n);break;case 3:case 4:var r=Zn;Zn=zo(e.stateNode.containerInfo),Ia(e,t,n),Zn=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=$i,$i=16777216,Ia(e,t,n),$i=r):Ia(e,t,n));break;default:Ia(e,t,n)}}function J0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Yi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Ot=r,t1(r,e)}J0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)e1(e),e=e.sibling}function e1(e){switch(e.tag){case 0:case 11:case 15:Yi(e),e.flags&2048&&gl(9,e,e.return);break;case 3:Yi(e);break;case 12:Yi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,So(e)):Yi(e);break;default:Yi(e)}}function So(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Ot=r,t1(r,e)}J0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:gl(8,t,t.return),So(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,So(t));break;default:So(t)}e=e.sibling}}function t1(e,t){for(;Ot!==null;){var n=Ot;switch(n.tag){case 0:case 11:case 15:gl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ri(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Ot=r;else e:for(n=e;Ot!==null;){r=Ot;var a=r.sibling,c=r.return;if(G0(r),r===n){Ot=null;break e}if(a!==null){a.return=c,Ot=a;break e}Ot=c}}}var yp={getCacheForType:function(e){var t=Pt(bt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Pt(bt).controller.signal}},wp=typeof WeakMap=="function"?WeakMap:Map,Xe=0,tt=null,Be=null,qe=0,Qe=0,Sn=null,_l=!1,Fa=!1,Vu=!1,qr=0,ht=0,vl=0,oa=0,Pu=0,En=0,Ga=0,Xi=null,cn=null,Iu=!1,Eo=0,n1=0,To=1/0,Mo=null,bl=null,jt=0,yl=null,$a=null,Hr=0,Fu=0,Gu=null,r1=null,Ki=0,$u=null;function Tn(){return(Xe&2)!==0&&qe!==0?qe&-qe:z.T!==null?Zu():ot()}function l1(){if(En===0)if((qe&536870912)===0||Ie){var e=$t;$t<<=1,($t&3932160)===0&&($t=262144),En=e}else En=536870912;return e=xn.current,e!==null&&(e.flags|=32),En}function un(e,t,n){(e===tt&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)&&(Ya(e,0),wl(e,qe,En,!1)),Ul(e,n),((Xe&2)===0||e!==tt)&&(e===tt&&((Xe&2)===0&&(oa|=n),ht===4&&wl(e,qe,En,!1)),ur(e))}function a1(e,t,n){if((Xe&6)!==0)throw Error(s(327));var r=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ct(e,t),a=r?Sp(e,t):Xu(e,t,!0),c=r;do{if(a===0){Fa&&!r&&wl(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!xp(n)){a=Xu(e,t,!1),c=!1;continue}if(a===2){if(c=t,e.errorRecoveryDisabledLanes&c)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var y=e;a=Xi;var S=y.current.memoizedState.isDehydrated;if(S&&(Ya(y,m).flags|=256),m=Xu(y,m,!1),m!==2){if(Vu&&!S){y.errorRecoveryDisabledLanes|=c,oa|=c,a=4;break e}c=cn,cn=a,c!==null&&(cn===null?cn=c:cn.push.apply(cn,c))}a=m}if(c=!1,a!==2)continue}}if(a===1){Ya(e,0),wl(e,t,0,!0);break}e:{switch(r=e,c=a,c){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:wl(r,t,En,!_l);break e;case 2:cn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(a=Eo+300-At(),10<a)){if(wl(r,t,En,!_l),at(r,0,!0)!==0)break e;Hr=t,r.timeoutHandle=B1(i1.bind(null,r,n,cn,Mo,Iu,t,En,oa,Ga,_l,c,"Throttled",-0,0),a);break e}i1(r,n,cn,Mo,Iu,t,En,oa,Ga,_l,c,null,-0,0)}}break}while(!0);ur(e)}function i1(e,t,n,r,a,c,m,y,S,L,X,Q,q,I){if(e.timeoutHandle=-1,Q=t.subtreeFlags,Q&8192||(Q&16785408)===16785408){Q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:An},Z0(t,c,Q);var he=(c&62914560)===c?Eo-At():(c&4194048)===c?n1-At():0;if(he=i2(Q,he),he!==null){Hr=c,e.cancelPendingCommit=he(h1.bind(null,e,t,c,n,r,a,m,y,S,X,Q,null,q,I)),wl(e,c,m,!L);return}}h1(e,t,c,n,r,a,m,y,S)}function xp(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var a=n[r],c=a.getSnapshot;a=a.value;try{if(!Ht(c(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wl(e,t,n,r){t&=~Pu,t&=~oa,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var a=t;0<a;){var c=31-Bt(a),m=1<<c;r[c]=-1,a&=~m}n!==0&&ks(e,n,t)}function No(){return(Xe&6)===0?(Qi(0),!1):!0}function Yu(){if(Be!==null){if(Qe===0)var e=Be.return;else e=Be,jr=Jl=null,cu(e),za=null,Ci=0,e=Be;for(;e!==null;)z0(e.alternate,e),e=e.return;Be=null}}function Ya(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Pp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Hr=0,Yu(),tt=e,Be=n=Mr(e.current,null),qe=t,Qe=0,Sn=null,_l=!1,Fa=Ct(e,t),Vu=!1,Ga=En=Pu=oa=vl=ht=0,cn=Xi=null,Iu=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var a=31-Bt(r),c=1<<a;t|=e[a],r&=~c}return qr=t,Xs(),n}function s1(e,t){Re=null,z.H=Hi,t===Ba||t===no?(t=kf(),Qe=3):t===Wc?(t=kf(),Qe=4):Qe=t===Eu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Sn=t,Be===null&&(ht=1,_o(e,Ln(t,e.current)))}function o1(){var e=xn.current;return e===null?!0:(qe&4194048)===qe?qn===null:(qe&62914560)===qe||(qe&536870912)!==0?e===qn:!1}function c1(){var e=z.H;return z.H=Hi,e===null?Hi:e}function u1(){var e=z.A;return z.A=yp,e}function jo(){ht=4,_l||(qe&4194048)!==qe&&xn.current!==null||(Fa=!0),(vl&134217727)===0&&(oa&134217727)===0||tt===null||wl(tt,qe,En,!1)}function Xu(e,t,n){var r=Xe;Xe|=2;var a=c1(),c=u1();(tt!==e||qe!==t)&&(Mo=null,Ya(e,t)),t=!1;var m=ht;e:do try{if(Qe!==0&&Be!==null){var y=Be,S=Sn;switch(Qe){case 8:Yu(),m=6;break e;case 3:case 2:case 9:case 6:xn.current===null&&(t=!0);var L=Qe;if(Qe=0,Sn=null,Xa(e,y,S,L),n&&Fa){m=0;break e}break;default:L=Qe,Qe=0,Sn=null,Xa(e,y,S,L)}}kp(),m=ht;break}catch(X){s1(e,X)}while(!0);return t&&e.shellSuspendCounter++,jr=Jl=null,Xe=r,z.H=a,z.A=c,Be===null&&(tt=null,qe=0,Xs()),m}function kp(){for(;Be!==null;)d1(Be)}function Sp(e,t){var n=Xe;Xe|=2;var r=c1(),a=u1();tt!==e||qe!==t?(Mo=null,To=At()+500,Ya(e,t)):Fa=Ct(e,t);e:do try{if(Qe!==0&&Be!==null){t=Be;var c=Sn;t:switch(Qe){case 1:Qe=0,Sn=null,Xa(e,t,c,1);break;case 2:case 9:if(wf(c)){Qe=0,Sn=null,f1(t);break}t=function(){Qe!==2&&Qe!==9||tt!==e||(Qe=7),ur(e)},c.then(t,t);break e;case 3:Qe=7;break e;case 4:Qe=5;break e;case 7:wf(c)?(Qe=0,Sn=null,f1(t)):(Qe=0,Sn=null,Xa(e,t,c,7));break;case 5:var m=null;switch(Be.tag){case 26:m=Be.memoizedState;case 5:case 27:var y=Be;if(m?W1(m):y.stateNode.complete){Qe=0,Sn=null;var S=y.sibling;if(S!==null)Be=S;else{var L=y.return;L!==null?(Be=L,Ro(L)):Be=null}break t}}Qe=0,Sn=null,Xa(e,t,c,5);break;case 6:Qe=0,Sn=null,Xa(e,t,c,6);break;case 8:Yu(),ht=6;break e;default:throw Error(s(462))}}Ep();break}catch(X){s1(e,X)}while(!0);return jr=Jl=null,z.H=r,z.A=a,Xe=n,Be!==null?0:(tt=null,qe=0,Xs(),ht)}function Ep(){for(;Be!==null&&!fr();)d1(Be)}function d1(e){var t=L0(e.alternate,e,qr);e.memoizedProps=e.pendingProps,t===null?Ro(e):Be=t}function f1(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=j0(n,t,t.pendingProps,t.type,void 0,qe);break;case 11:t=j0(n,t,t.pendingProps,t.type.render,t.ref,qe);break;case 5:cu(t);default:z0(n,t),t=Be=uf(t,qr),t=L0(n,t,qr)}e.memoizedProps=e.pendingProps,t===null?Ro(e):Be=t}function Xa(e,t,n,r){jr=Jl=null,cu(t),za=null,Ci=0;var a=t.return;try{if(mp(e,a,t,n,qe)){ht=1,_o(e,Ln(n,e.current)),Be=null;return}}catch(c){if(a!==null)throw Be=a,c;ht=1,_o(e,Ln(n,e.current)),Be=null;return}t.flags&32768?(Ie||r===1?e=!0:Fa||(qe&536870912)!==0?e=!1:(_l=e=!0,(r===2||r===9||r===3||r===6)&&(r=xn.current,r!==null&&r.tag===13&&(r.flags|=16384))),m1(t,e)):Ro(t)}function Ro(e){var t=e;do{if((t.flags&32768)!==0){m1(t,_l);return}e=t.return;var n=gp(t.alternate,t,qr);if(n!==null){Be=n;return}if(t=t.sibling,t!==null){Be=t;return}Be=t=e}while(t!==null);ht===0&&(ht=5)}function m1(e,t){do{var n=_p(e.alternate,e);if(n!==null){n.flags&=32767,Be=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Be=e;return}Be=e=n}while(e!==null);ht=6,Be=null}function h1(e,t,n,r,a,c,m,y,S){e.cancelPendingCommit=null;do Ao();while(jt!==0);if((Xe&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(c=t.lanes|t.childLanes,c|=Na,pr(e,n,c,m,y,S),e===tt&&(Be=tt=null,qe=0),$a=t,yl=e,Hr=n,Fu=c,Gu=a,r1=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,jp(Ll,function(){return b1(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,a=ne.p,ne.p=2,m=Xe,Xe|=4;try{vp(e,t,n)}finally{Xe=m,ne.p=a,z.T=r}}jt=1,p1(),g1(),_1()}}function p1(){if(jt===1){jt=0;var e=yl,t=$a,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=z.T,z.T=null;var r=ne.p;ne.p=2;var a=Xe;Xe|=4;try{K0(t,e);var c=id,m=Ys(e.containerInfo),y=c.focusedElem,S=c.selectionRange;if(m!==y&&y&&y.ownerDocument&&Ti(y.ownerDocument.documentElement,y)){if(S!==null&&Mi(y)){var L=S.start,X=S.end;if(X===void 0&&(X=L),"selectionStart"in y)y.selectionStart=L,y.selectionEnd=Math.min(X,y.value.length);else{var Q=y.ownerDocument||document,q=Q&&Q.defaultView||window;if(q.getSelection){var I=q.getSelection(),he=y.textContent.length,Te=Math.min(S.start,he),et=S.end===void 0?Te:Math.min(S.end,he);!I.extend&&Te>et&&(m=et,et=Te,Te=m);var A=Ma(y,Te),M=Ma(y,et);if(A&&M&&(I.rangeCount!==1||I.anchorNode!==A.node||I.anchorOffset!==A.offset||I.focusNode!==M.node||I.focusOffset!==M.offset)){var O=Q.createRange();O.setStart(A.node,A.offset),I.removeAllRanges(),Te>et?(I.addRange(O),I.extend(M.node,M.offset)):(O.setEnd(M.node,M.offset),I.addRange(O))}}}}for(Q=[],I=y;I=I.parentNode;)I.nodeType===1&&Q.push({element:I,left:I.scrollLeft,top:I.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<Q.length;y++){var K=Q[y];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}Io=!!ad,id=ad=null}finally{Xe=a,ne.p=r,z.T=n}}e.current=t,jt=2}}function g1(){if(jt===2){jt=0;var e=yl,t=$a,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=z.T,z.T=null;var r=ne.p;ne.p=2;var a=Xe;Xe|=4;try{F0(e,t.alternate,t)}finally{Xe=a,ne.p=r,z.T=n}}jt=3}}function _1(){if(jt===4||jt===3){jt=0,fa();var e=yl,t=$a,n=Hr,r=r1;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?jt=5:(jt=0,$a=yl=null,v1(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(bl=null),Rn(n),t=t.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Bl,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=z.T,a=ne.p,ne.p=2,z.T=null;try{for(var c=e.onRecoverableError,m=0;m<r.length;m++){var y=r[m];c(y.value,{componentStack:y.stack})}}finally{z.T=t,ne.p=a}}(Hr&3)!==0&&Ao(),ur(e),a=e.pendingLanes,(n&261930)!==0&&(a&42)!==0?e===$u?Ki++:(Ki=0,$u=e):Ki=0,Qi(0)}}function v1(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ri(t)))}function Ao(){return p1(),g1(),_1(),b1()}function b1(){if(jt!==5)return!1;var e=yl,t=Fu;Fu=0;var n=Rn(Hr),r=z.T,a=ne.p;try{ne.p=32>n?32:n,z.T=null,n=Gu,Gu=null;var c=yl,m=Hr;if(jt=0,$a=yl=null,Hr=0,(Xe&6)!==0)throw Error(s(331));var y=Xe;if(Xe|=4,e1(c.current),W0(c,c.current,m,n),Xe=y,Qi(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Bl,c)}catch{}return!0}finally{ne.p=a,z.T=r,v1(e,t)}}function y1(e,t,n){t=Ln(n,t),t=Su(e.stateNode,t,2),e=ml(e,t,2),e!==null&&(Ul(e,2),ur(e))}function We(e,t,n){if(e.tag===3)y1(e,e,n);else for(;t!==null;){if(t.tag===3){y1(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bl===null||!bl.has(r))){e=Ln(n,e),n=w0(2),r=ml(t,n,2),r!==null&&(x0(n,r,t,e),Ul(r,2),ur(r));break}}t=t.return}}function Ku(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new wp;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(Vu=!0,a.add(n),e=Tp.bind(null,e,t,n),t.then(e,e))}function Tp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,tt===e&&(qe&n)===n&&(ht===4||ht===3&&(qe&62914560)===qe&&300>At()-Eo?(Xe&2)===0&&Ya(e,0):Pu|=n,Ga===qe&&(Ga=0)),ur(e)}function w1(e,t){t===0&&(t=zl()),e=Ql(e,t),e!==null&&(Ul(e,t),ur(e))}function Mp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),w1(e,n)}function Np(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),w1(e,n)}function jp(e,t){return Fn(e,t)}var Co=null,Ka=null,Qu=!1,Do=!1,Wu=!1,xl=0;function ur(e){e!==Ka&&e.next===null&&(Ka===null?Co=Ka=e:Ka=Ka.next=e),Do=!0,Qu||(Qu=!0,Ap())}function Qi(e,t){if(!Wu&&Do){Wu=!0;do for(var n=!1,r=Co;r!==null;){if(e!==0){var a=r.pendingLanes;if(a===0)var c=0;else{var m=r.suspendedLanes,y=r.pingedLanes;c=(1<<31-Bt(42|e)+1)-1,c&=a&~(m&~y),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,E1(r,c))}else c=qe,c=at(r,r===tt?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Ct(r,c)||(n=!0,E1(r,c));r=r.next}while(n);Wu=!1}}function Rp(){x1()}function x1(){Do=Qu=!1;var e=0;xl!==0&&Vp()&&(e=xl);for(var t=At(),n=null,r=Co;r!==null;){var a=r.next,c=k1(r,t);c===0?(r.next=null,n===null?Co=a:n.next=a,a===null&&(Ka=n)):(n=r,(e!==0||(c&3)!==0)&&(Do=!0)),r=a}jt!==0&&jt!==5||Qi(e),xl!==0&&(xl=0)}function k1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var m=31-Bt(c),y=1<<m,S=a[m];S===-1?((y&n)===0||(y&r)!==0)&&(a[m]=hc(y,t)):S<=t&&(e.expiredLanes|=y),c&=~y}if(t=tt,n=qe,n=at(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Qe===2||Qe===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&nr(r),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ct(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&nr(r),Rn(n)){case 2:case 8:n=oi;break;case 32:n=Ll;break;case 268435456:n=fn;break;default:n=Ll}return r=S1.bind(null,e),n=Fn(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&nr(r),e.callbackPriority=2,e.callbackNode=null,2}function S1(e,t){if(jt!==0&&jt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ao()&&e.callbackNode!==n)return null;var r=qe;return r=at(e,e===tt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(a1(e,r,t),k1(e,At()),e.callbackNode!=null&&e.callbackNode===n?S1.bind(null,e):null)}function E1(e,t){if(Ao())return null;a1(e,t,!0)}function Ap(){Ip(function(){(Xe&6)!==0?Fn(Gr,Rp):x1()})}function Zu(){if(xl===0){var e=Oa;e===0&&(e=hn,hn<<=1,(hn&261888)===0&&(hn=256)),xl=e}return xl}function T1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Il(""+e)}function M1(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Cp(e,t,n,r,a){if(t==="submit"&&n&&n.stateNode===a){var c=T1((a[Dt]||null).action),m=r.submitter;m&&(t=(t=m[Dt]||null)?T1(t.formAction):m.getAttribute("formAction"),t!==null&&(c=t,m=null));var y=new ya("action","action",null,r,a);e.push({event:y,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(xl!==0){var S=m?M1(a,m):new FormData(a);vu(n,{pending:!0,data:S,method:a.method,action:c},null,S)}}else typeof c=="function"&&(y.preventDefault(),S=m?M1(a,m):new FormData(a),vu(n,{pending:!0,data:S,method:a.method,action:c},c,S))},currentTarget:a}]})}}for(var Ju=0;Ju<ir.length;Ju++){var ed=ir[Ju],Dp=ed.toLowerCase(),Op=ed[0].toUpperCase()+ed.slice(1);ln(Dp,"on"+Op)}ln(dt,"onAnimationEnd"),ln(Kt,"onAnimationIteration"),ln(Ae,"onAnimationStart"),ln("dblclick","onDoubleClick"),ln("focusin","onFocus"),ln("focusout","onBlur"),ln(it,"onTransitionRun"),ln(Sr,"onTransitionStart"),ln(Wn,"onTransitionCancel"),ln(Dn,"onTransitionEnd"),vn("onMouseEnter",["mouseout","mouseover"]),vn("onMouseLeave",["mouseout","mouseover"]),vn("onPointerEnter",["pointerout","pointerover"]),vn("onPointerLeave",["pointerout","pointerover"]),en("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),en("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),en("onBeforeInput",["compositionend","keypress","textInput","paste"]),en("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),en("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),en("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wi));function N1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var c=void 0;if(t)for(var m=r.length-1;0<=m;m--){var y=r[m],S=y.instance,L=y.currentTarget;if(y=y.listener,S!==c&&a.isPropagationStopped())break e;c=y,a.currentTarget=L;try{c(a)}catch(X){Tr(X)}a.currentTarget=null,c=S}else for(m=0;m<r.length;m++){if(y=r[m],S=y.instance,L=y.currentTarget,y=y.listener,S!==c&&a.isPropagationStopped())break e;c=y,a.currentTarget=L;try{c(a)}catch(X){Tr(X)}a.currentTarget=null,c=S}}}}function ze(e,t){var n=t[Xr];n===void 0&&(n=t[Xr]=new Set);var r=e+"__bubble";n.has(r)||(j1(t,e,2,!1),n.add(r))}function td(e,t,n){var r=0;t&&(r|=4),j1(n,e,r,t)}var Oo="_reactListening"+Math.random().toString(36).slice(2);function nd(e){if(!e[Oo]){e[Oo]=!0,Yn.forEach(function(n){n!=="selectionchange"&&(Lp.has(n)||td(n,!1,e),td(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Oo]||(t[Oo]=!0,td("selectionchange",!1,t))}}function j1(e,t,n,r){switch(lm(t)){case 2:var a=c2;break;case 8:a=u2;break;default:a=_d}n=a.bind(null,t,n,e),a=void 0,!pi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function rd(e,t,n,r,a){var c=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var y=r.stateNode.containerInfo;if(y===a)break;if(m===4)for(m=r.return;m!==null;){var S=m.tag;if((S===3||S===4)&&m.stateNode.containerInfo===a)return;m=m.return}for(;y!==null;){if(m=Yt(y),m===null)return;if(S=m.tag,S===5||S===6||S===26||S===27){r=c=m;continue e}y=y.parentNode}}r=r.return}js(function(){var L=c,X=ct(n),Q=[];e:{var q=Er.get(e);if(q!==void 0){var I=ya,he=e;switch(e){case"keypress":if(Gl(n)===0)break e;case"keydown":case"keyup":I=Sc;break;case"focusin":he="focus",I=rn;break;case"focusout":he="blur",I=rn;break;case"beforeblur":case"afterblur":I=rn;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=xa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=bc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=Ec;break;case dt:case Kt:case Ae:I=gi;break;case Dn:I=Ls;break;case"scroll":case"scrollend":I=_c;break;case"wheel":I=Mc;break;case"copy":case"cut":case"paste":I=Rs;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=bi;break;case"toggle":case"beforetoggle":I=jc}var Te=(t&4)!==0,et=!Te&&(e==="scroll"||e==="scrollend"),A=Te?q!==null?q+"Capture":null:q;Te=[];for(var M=L,O;M!==null;){var K=M;if(O=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||O===null||A===null||(K=Fl(M,A),K!=null&&Te.push(Zi(M,K,O))),et)break;M=M.return}0<Te.length&&(q=new I(q,he,null,n,X),Q.push({event:q,listeners:Te}))}}if((t&7)===0){e:{if(q=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",q&&n!==Jr&&(he=n.relatedTarget||n.fromElement)&&(Yt(he)||he[Gn]))break e;if((I||q)&&(q=X.window===X?X:(q=X.ownerDocument)?q.defaultView||q.parentWindow:window,I?(he=n.relatedTarget||n.toElement,I=L,he=he?Yt(he):null,he!==null&&(et=p(he),Te=he.tag,he!==et||Te!==5&&Te!==27&&Te!==6)&&(he=null)):(I=null,he=L),I!==he)){if(Te=xa,K="onMouseLeave",A="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(Te=bi,K="onPointerLeave",A="onPointerEnter",M="pointer"),et=I==null?q:$n(I),O=he==null?q:$n(he),q=new Te(K,M+"leave",I,n,X),q.target=et,q.relatedTarget=O,K=null,Yt(X)===L&&(Te=new Te(A,M+"enter",he,n,X),Te.target=O,Te.relatedTarget=et,K=Te),et=K,I&&he)t:{for(Te=Bp,A=I,M=he,O=0,K=A;K;K=Te(K))O++;K=0;for(var we=M;we;we=Te(we))K++;for(;0<O-K;)A=Te(A),O--;for(;0<K-O;)M=Te(M),K--;for(;O--;){if(A===M||M!==null&&A===M.alternate){Te=A;break t}A=Te(A),M=Te(M)}Te=null}else Te=null;I!==null&&R1(Q,q,I,Te,!1),he!==null&&et!==null&&R1(Q,et,he,Te,!0)}}e:{if(q=L?$n(L):window,I=q.nodeName&&q.nodeName.toLowerCase(),I==="select"||I==="input"&&q.type==="file")var Ge=Is;else if(xi(q))if(Fs)Ge=Ei;else{Ge=Oc;var _e=$s}else I=q.nodeName,!I||I.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?L&&mi(L.elementType)&&(Ge=Is):Ge=Lc;if(Ge&&(Ge=Ge(e,L))){Ps(Q,Ge,n,X);break e}_e&&_e(e,q,L),e==="focusout"&&L&&q.type==="number"&&L.memoizedProps.value!=null&&Vl(q,"number",q.value)}switch(_e=L?$n(L):window,e){case"focusin":(xi(_e)||_e.contentEditable==="true")&&(f=_e,v=L,w=null);break;case"focusout":w=v=f=null;break;case"mousedown":N=!0;break;case"contextmenu":case"mouseup":case"dragend":N=!1,j(Q,n,X);break;case"selectionchange":if(Bc)break;case"keydown":case"keyup":j(Q,n,X)}var Ce;if(wi)e:{switch(e){case"compositionstart":var He="onCompositionStart";break e;case"compositionend":He="onCompositionEnd";break e;case"compositionupdate":He="onCompositionUpdate";break e}He=void 0}else ll?qs(e,n)&&(He="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(He="onCompositionStart");He&&(Bs&&n.locale!=="ko"&&(ll||He!=="onCompositionStart"?He==="onCompositionEnd"&&ll&&(Ce=qt()):(Ut=X,yr="value"in Ut?Ut.value:Ut.textContent,ll=!0)),_e=Lo(L,He),0<_e.length&&(He=new _i(He,e,null,n,X),Q.push({event:He,listeners:_e}),Ce?He.data=Ce:(Ce=xr(n),Ce!==null&&(He.data=Ce)))),(Ce=Ac?Hs(e,n):Vs(e,n))&&(He=Lo(L,"onBeforeInput"),0<He.length&&(_e=new _i("onBeforeInput","beforeinput",null,n,X),Q.push({event:_e,listeners:He}),_e.data=Ce)),Cp(Q,e,L,n,X)}N1(Q,t)})}function Zi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Lo(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,c=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||c===null||(a=Fl(e,n),a!=null&&r.unshift(Zi(e,a,c)),a=Fl(e,t),a!=null&&r.push(Zi(e,a,c))),e.tag===3)return r;e=e.return}return[]}function Bp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function R1(e,t,n,r,a){for(var c=t._reactName,m=[];n!==null&&n!==r;){var y=n,S=y.alternate,L=y.stateNode;if(y=y.tag,S!==null&&S===r)break;y!==5&&y!==26&&y!==27||L===null||(S=L,a?(L=Fl(n,c),L!=null&&m.unshift(Zi(n,L,S))):a||(L=Fl(n,c),L!=null&&m.push(Zi(n,L,S)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var zp=/\r\n?/g,Up=/\u0000|\uFFFD/g;function A1(e){return(typeof e=="string"?e:""+e).replace(zp,`
`).replace(Up,"")}function C1(e,t){return t=A1(t),A1(e)===t}function Je(e,t,n,r,a,c){switch(n){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||vr(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&vr(e,""+r);break;case"className":Xn(e,"class",r);break;case"tabIndex":Xn(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Xn(e,n,r);break;case"style":Ns(e,r,c);break;case"data":if(t!=="object"){Xn(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=Il(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&Je(e,t,"name",a.name,a,null),Je(e,t,"formEncType",a.formEncType,a,null),Je(e,t,"formMethod",a.formMethod,a,null),Je(e,t,"formTarget",a.formTarget,a,null)):(Je(e,t,"encType",a.encType,a,null),Je(e,t,"method",a.method,a,null),Je(e,t,"target",a.target,a,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=Il(""+r),e.setAttribute(n,r);break;case"onClick":r!=null&&(e.onclick=An);break;case"onScroll":r!=null&&ze("scroll",e);break;case"onScrollEnd":r!=null&&ze("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}n=Il(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":r===!0?e.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":ze("beforetoggle",e),ze("toggle",e),_r(e,"popover",r);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":_r(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=gc.get(n)||n,_r(e,n,r))}}function ld(e,t,n,r,a,c){switch(n){case"style":Ns(e,r,c);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof r=="string"?vr(e,r):(typeof r=="number"||typeof r=="bigint")&&vr(e,""+r);break;case"onScroll":r!=null&&ze("scroll",e);break;case"onScrollEnd":r!=null&&ze("scrollend",e);break;case"onClick":r!=null&&(e.onclick=An);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qr.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),c=e[Dt]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,a),typeof r=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break e}n in e?e[n]=r:r===!0?e.setAttribute(n,""):_r(e,n,r)}}}function Ft(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",e),ze("load",e);var r=!1,a=!1,c;for(c in n)if(n.hasOwnProperty(c)){var m=n[c];if(m!=null)switch(c){case"src":r=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Je(e,t,c,m,n,null)}}a&&Je(e,t,"srcSet",n.srcSet,n,null),r&&Je(e,t,"src",n.src,n,null);return;case"input":ze("invalid",e);var y=c=m=a=null,S=null,L=null;for(r in n)if(n.hasOwnProperty(r)){var X=n[r];if(X!=null)switch(r){case"name":a=X;break;case"type":m=X;break;case"checked":S=X;break;case"defaultChecked":L=X;break;case"value":c=X;break;case"defaultValue":y=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,t));break;default:Je(e,t,r,X,n,null)}}bn(e,c,y,S,L,m,a,!1);return;case"select":ze("invalid",e),r=m=c=null;for(a in n)if(n.hasOwnProperty(a)&&(y=n[a],y!=null))switch(a){case"value":c=y;break;case"defaultValue":m=y;break;case"multiple":r=y;default:Je(e,t,a,y,n,null)}t=c,n=m,e.multiple=!!r,t!=null?Mt(e,!!r,t,!1):n!=null&&Mt(e,!!r,n,!0);return;case"textarea":ze("invalid",e),c=a=r=null;for(m in n)if(n.hasOwnProperty(m)&&(y=n[m],y!=null))switch(m){case"value":r=y;break;case"defaultValue":a=y;break;case"children":c=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(s(91));break;default:Je(e,t,m,y,n,null)}Ms(e,r,a,c);return;case"option":for(S in n)if(n.hasOwnProperty(S)&&(r=n[S],r!=null))switch(S){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Je(e,t,S,r,n,null)}return;case"dialog":ze("beforetoggle",e),ze("toggle",e),ze("cancel",e),ze("close",e);break;case"iframe":case"object":ze("load",e);break;case"video":case"audio":for(r=0;r<Wi.length;r++)ze(Wi[r],e);break;case"image":ze("error",e),ze("load",e);break;case"details":ze("toggle",e);break;case"embed":case"source":case"link":ze("error",e),ze("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in n)if(n.hasOwnProperty(L)&&(r=n[L],r!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Je(e,t,L,r,n,null)}return;default:if(mi(t)){for(X in n)n.hasOwnProperty(X)&&(r=n[X],r!==void 0&&ld(e,t,X,r,n,void 0));return}}for(y in n)n.hasOwnProperty(y)&&(r=n[y],r!=null&&Je(e,t,y,r,n,null))}function qp(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,c=null,m=null,y=null,S=null,L=null,X=null;for(I in n){var Q=n[I];if(n.hasOwnProperty(I)&&Q!=null)switch(I){case"checked":break;case"value":break;case"defaultValue":S=Q;default:r.hasOwnProperty(I)||Je(e,t,I,null,r,Q)}}for(var q in r){var I=r[q];if(Q=n[q],r.hasOwnProperty(q)&&(I!=null||Q!=null))switch(q){case"type":c=I;break;case"name":a=I;break;case"checked":L=I;break;case"defaultChecked":X=I;break;case"value":m=I;break;case"defaultValue":y=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(s(137,t));break;default:I!==Q&&Je(e,t,q,I,r,Q)}}Hl(e,m,y,S,L,X,c,a);return;case"select":I=m=y=q=null;for(c in n)if(S=n[c],n.hasOwnProperty(c)&&S!=null)switch(c){case"value":break;case"multiple":I=S;default:r.hasOwnProperty(c)||Je(e,t,c,null,r,S)}for(a in r)if(c=r[a],S=n[a],r.hasOwnProperty(a)&&(c!=null||S!=null))switch(a){case"value":q=c;break;case"defaultValue":y=c;break;case"multiple":m=c;default:c!==S&&Je(e,t,a,c,r,S)}t=y,n=m,r=I,q!=null?Mt(e,!!n,q,!1):!!r!=!!n&&(t!=null?Mt(e,!!n,t,!0):Mt(e,!!n,n?[]:"",!1));return;case"textarea":I=q=null;for(y in n)if(a=n[y],n.hasOwnProperty(y)&&a!=null&&!r.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Je(e,t,y,null,r,a)}for(m in r)if(a=r[m],c=n[m],r.hasOwnProperty(m)&&(a!=null||c!=null))switch(m){case"value":q=a;break;case"defaultValue":I=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(s(91));break;default:a!==c&&Je(e,t,m,a,r,c)}Ts(e,q,I);return;case"option":for(var he in n)if(q=n[he],n.hasOwnProperty(he)&&q!=null&&!r.hasOwnProperty(he))switch(he){case"selected":e.selected=!1;break;default:Je(e,t,he,null,r,q)}for(S in r)if(q=r[S],I=n[S],r.hasOwnProperty(S)&&q!==I&&(q!=null||I!=null))switch(S){case"selected":e.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:Je(e,t,S,q,r,I)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Te in n)q=n[Te],n.hasOwnProperty(Te)&&q!=null&&!r.hasOwnProperty(Te)&&Je(e,t,Te,null,r,q);for(L in r)if(q=r[L],I=n[L],r.hasOwnProperty(L)&&q!==I&&(q!=null||I!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,t));break;default:Je(e,t,L,q,r,I)}return;default:if(mi(t)){for(var et in n)q=n[et],n.hasOwnProperty(et)&&q!==void 0&&!r.hasOwnProperty(et)&&ld(e,t,et,void 0,r,q);for(X in r)q=r[X],I=n[X],!r.hasOwnProperty(X)||q===I||q===void 0&&I===void 0||ld(e,t,X,q,r,I);return}}for(var A in n)q=n[A],n.hasOwnProperty(A)&&q!=null&&!r.hasOwnProperty(A)&&Je(e,t,A,null,r,q);for(Q in r)q=r[Q],I=n[Q],!r.hasOwnProperty(Q)||q===I||q==null&&I==null||Je(e,t,Q,q,r,I)}function D1(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Hp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var a=n[r],c=a.transferSize,m=a.initiatorType,y=a.duration;if(c&&y&&D1(m)){for(m=0,y=a.responseEnd,r+=1;r<n.length;r++){var S=n[r],L=S.startTime;if(L>y)break;var X=S.transferSize,Q=S.initiatorType;X&&D1(Q)&&(S=S.responseEnd,m+=X*(S<y?1:(y-L)/(S-L)))}if(--r,t+=8*(c+m)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ad=null,id=null;function Bo(e){return e.nodeType===9?e:e.ownerDocument}function O1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function L1(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function sd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var od=null;function Vp(){var e=window.event;return e&&e.type==="popstate"?e===od?!1:(od=e,!0):(od=null,!1)}var B1=typeof setTimeout=="function"?setTimeout:void 0,Pp=typeof clearTimeout=="function"?clearTimeout:void 0,z1=typeof Promise=="function"?Promise:void 0,Ip=typeof queueMicrotask=="function"?queueMicrotask:typeof z1<"u"?function(e){return z1.resolve(null).then(e).catch(Fp)}:B1;function Fp(e){setTimeout(function(){throw e})}function kl(e){return e==="head"}function U1(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(r===0){e.removeChild(a),Ja(t);return}r--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")r++;else if(n==="html")Ji(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ji(n);for(var c=n.firstChild;c;){var m=c.nextSibling,y=c.nodeName;c[gn]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=m}}else n==="body"&&Ji(e.ownerDocument.body);n=a}while(n);Ja(t)}function q1(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=r}while(n)}function cd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":cd(n),gr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Gp(e,t,n,r){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[gn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Hn(e.nextSibling),e===null)break}return null}function $p(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Hn(e.nextSibling),e===null))return null;return e}function H1(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Hn(e.nextSibling),e===null))return null;return e}function ud(e){return e.data==="$?"||e.data==="$~"}function dd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Yp(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Hn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var fd=null;function V1(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Hn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function P1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function I1(e,t,n){switch(t=Bo(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Ji(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);gr(e)}var Vn=new Map,F1=new Set;function zo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Vr=ne.d;ne.d={f:Xp,r:Kp,D:Qp,C:Wp,L:Zp,m:Jp,X:t2,S:e2,M:n2};function Xp(){var e=Vr.f(),t=No();return e||t}function Kp(e){var t=_n(e);t!==null&&t.tag===5&&t.type==="form"?s0(t):Vr.r(e)}var Qa=typeof document>"u"?null:document;function G1(e,t,n){var r=Qa;if(r&&typeof t=="string"&&t){var a=Tt(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),F1.has(a)||(F1.add(a),e={rel:e,crossOrigin:n,href:t},r.querySelector(a)===null&&(t=r.createElement("link"),Ft(t,"link",e),ft(t),r.head.appendChild(t)))}}function Qp(e){Vr.D(e),G1("dns-prefetch",e,null)}function Wp(e,t){Vr.C(e,t),G1("preconnect",e,t)}function Zp(e,t,n){Vr.L(e,t,n);var r=Qa;if(r&&e&&t){var a='link[rel="preload"][as="'+Tt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Tt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Tt(n.imageSizes)+'"]')):a+='[href="'+Tt(e)+'"]';var c=a;switch(t){case"style":c=Wa(e);break;case"script":c=Za(e)}Vn.has(c)||(e=k({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Vn.set(c,e),r.querySelector(a)!==null||t==="style"&&r.querySelector(es(c))||t==="script"&&r.querySelector(ts(c))||(t=r.createElement("link"),Ft(t,"link",e),ft(t),r.head.appendChild(t)))}}function Jp(e,t){Vr.m(e,t);var n=Qa;if(n&&e){var r=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Tt(r)+'"][href="'+Tt(e)+'"]',c=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Za(e)}if(!Vn.has(c)&&(e=k({rel:"modulepreload",href:e},t),Vn.set(c,e),n.querySelector(a)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ts(c)))return}r=n.createElement("link"),Ft(r,"link",e),ft(r),n.head.appendChild(r)}}}function e2(e,t,n){Vr.S(e,t,n);var r=Qa;if(r&&e){var a=nn(r).hoistableStyles,c=Wa(e);t=t||"default";var m=a.get(c);if(!m){var y={loading:0,preload:null};if(m=r.querySelector(es(c)))y.loading=5;else{e=k({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Vn.get(c))&&md(e,n);var S=m=r.createElement("link");ft(S),Ft(S,"link",e),S._p=new Promise(function(L,X){S.onload=L,S.onerror=X}),S.addEventListener("load",function(){y.loading|=1}),S.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Uo(m,t,r)}m={type:"stylesheet",instance:m,count:1,state:y},a.set(c,m)}}}function t2(e,t){Vr.X(e,t);var n=Qa;if(n&&e){var r=nn(n).hoistableScripts,a=Za(e),c=r.get(a);c||(c=n.querySelector(ts(a)),c||(e=k({src:e,async:!0},t),(t=Vn.get(a))&&hd(e,t),c=n.createElement("script"),ft(c),Ft(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(a,c))}}function n2(e,t){Vr.M(e,t);var n=Qa;if(n&&e){var r=nn(n).hoistableScripts,a=Za(e),c=r.get(a);c||(c=n.querySelector(ts(a)),c||(e=k({src:e,async:!0,type:"module"},t),(t=Vn.get(a))&&hd(e,t),c=n.createElement("script"),ft(c),Ft(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(a,c))}}function $1(e,t,n,r){var a=(a=V.current)?zo(a):null;if(!a)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Wa(n.href),n=nn(a).hoistableStyles,r=n.get(t),r||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Wa(n.href);var c=nn(a).hoistableStyles,m=c.get(e);if(m||(a=a.ownerDocument||a,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,m),(c=a.querySelector(es(e)))&&!c._p&&(m.instance=c,m.state.loading=5),Vn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Vn.set(e,n),c||r2(a,e,n,m.state))),t&&r===null)throw Error(s(528,""));return m}if(t&&r!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Za(n),n=nn(a).hoistableScripts,r=n.get(t),r||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Wa(e){return'href="'+Tt(e)+'"'}function es(e){return'link[rel="stylesheet"]['+e+"]"}function Y1(e){return k({},e,{"data-precedence":e.precedence,precedence:null})}function r2(e,t,n,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),Ft(t,"link",n),ft(t),e.head.appendChild(t))}function Za(e){return'[src="'+Tt(e)+'"]'}function ts(e){return"script[async]"+e}function X1(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+Tt(n.href)+'"]');if(r)return t.instance=r,ft(r),r;var a=k({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),ft(r),Ft(r,"style",a),Uo(r,n.precedence,e),t.instance=r;case"stylesheet":a=Wa(n.href);var c=e.querySelector(es(a));if(c)return t.state.loading|=4,t.instance=c,ft(c),c;r=Y1(n),(a=Vn.get(a))&&md(r,a),c=(e.ownerDocument||e).createElement("link"),ft(c);var m=c;return m._p=new Promise(function(y,S){m.onload=y,m.onerror=S}),Ft(c,"link",r),t.state.loading|=4,Uo(c,n.precedence,e),t.instance=c;case"script":return c=Za(n.src),(a=e.querySelector(ts(c)))?(t.instance=a,ft(a),a):(r=n,(a=Vn.get(c))&&(r=k({},n),hd(r,a)),e=e.ownerDocument||e,a=e.createElement("script"),ft(a),Ft(a,"link",r),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,Uo(r,n.precedence,e));return t.instance}function Uo(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,c=a,m=0;m<r.length;m++){var y=r[m];if(y.dataset.precedence===t)c=y;else if(c!==a)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function md(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function hd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var qo=null;function K1(e,t,n){if(qo===null){var r=new Map,a=qo=new Map;a.set(n,r)}else a=qo,r=a.get(n),r||(r=new Map,a.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var c=n[a];if(!(c[gn]||c[pt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var m=c.getAttribute(t)||"";m=e+m;var y=r.get(m);y?y.push(c):r.set(m,[c])}}return r}function Q1(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function l2(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function W1(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function a2(e,t,n,r){if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Wa(r.href),c=t.querySelector(es(a));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ho.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,ft(c);return}c=t.ownerDocument||t,r=Y1(r),(a=Vn.get(a))&&md(r,a),c=c.createElement("link"),ft(c);var m=c;m._p=new Promise(function(y,S){m.onload=y,m.onerror=S}),Ft(c,"link",r),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Ho.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var pd=0;function i2(e,t){return e.stylesheets&&e.count===0&&Po(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Po(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&pd===0&&(pd=62500*Hp());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Po(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>pd?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(a)}}:null}function Ho(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Po(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vo=null;function Po(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vo=new Map,t.forEach(s2,e),Vo=null,Ho.call(e))}function s2(e,t){if(!(t.state.loading&4)){var n=Vo.get(e);if(n)var r=n.get(null);else{n=new Map,Vo.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<a.length;c++){var m=a[c];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(n.set(m.dataset.precedence,m),r=m)}r&&n.set(null,r)}a=t.instance,m=a.getAttribute("data-precedence"),c=n.get(m)||r,c===r&&n.set(null,a),n.set(m,a),this.count++,r=Ho.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),c?c.parentNode.insertBefore(a,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var ns={$$typeof:H,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function o2(e,t,n,r,a,c,m,y,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lr(0),this.hiddenUpdates=lr(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=c,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function Z1(e,t,n,r,a,c,m,y,S,L,X,Q){return e=new o2(e,t,n,m,S,L,X,Q,y),t=1,c===!0&&(t|=24),c=wn(3,null,null,t),e.current=c,c.stateNode=e,t=Xc(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:r,isDehydrated:n,cache:t},Zc(c),e}function J1(e){return e?(e=ja,e):ja}function em(e,t,n,r,a,c){a=J1(a),r.context===null?r.context=a:r.pendingContext=a,r=fl(t),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=ml(e,r,t),n!==null&&(un(n,e,t),Oi(n,e,t))}function tm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gd(e,t){tm(e,t),(e=e.alternate)&&tm(e,t)}function nm(e){if(e.tag===13||e.tag===31){var t=Ql(e,67108864);t!==null&&un(t,e,67108864),gd(e,67108864)}}function rm(e){if(e.tag===13||e.tag===31){var t=Tn();t=Yr(t);var n=Ql(e,t);n!==null&&un(n,e,t),gd(e,t)}}var Io=!0;function c2(e,t,n,r){var a=z.T;z.T=null;var c=ne.p;try{ne.p=2,_d(e,t,n,r)}finally{ne.p=c,z.T=a}}function u2(e,t,n,r){var a=z.T;z.T=null;var c=ne.p;try{ne.p=8,_d(e,t,n,r)}finally{ne.p=c,z.T=a}}function _d(e,t,n,r){if(Io){var a=vd(r);if(a===null)rd(e,t,r,Fo,n),am(e,r);else if(f2(a,e,t,n,r))r.stopPropagation();else if(am(e,r),t&4&&-1<d2.indexOf(e)){for(;a!==null;){var c=_n(a);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var m=lt(c.pendingLanes);if(m!==0){var y=c;for(y.pendingLanes|=2,y.entangledLanes|=2;m;){var S=1<<31-Bt(m);y.entanglements[1]|=S,m&=~S}ur(c),(Xe&6)===0&&(To=At()+500,Qi(0))}}break;case 31:case 13:y=Ql(c,2),y!==null&&un(y,c,2),No(),gd(c,2)}if(c=vd(r),c===null&&rd(e,t,r,Fo,n),c===a)break;a=c}a!==null&&r.stopPropagation()}else rd(e,t,r,null,n)}}function vd(e){return e=ct(e),bd(e)}var Fo=null;function bd(e){if(Fo=null,e=Yt(e),e!==null){var t=p(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=_(t),e!==null)return e;e=null}else if(n===31){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Fo=e,null}function lm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ol()){case Gr:return 2;case oi:return 8;case Ll:case Jt:return 32;case fn:return 268435456;default:return 32}default:return 32}}var yd=!1,Sl=null,El=null,Tl=null,rs=new Map,ls=new Map,Ml=[],d2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function am(e,t){switch(e){case"focusin":case"focusout":Sl=null;break;case"dragenter":case"dragleave":El=null;break;case"mouseover":case"mouseout":Tl=null;break;case"pointerover":case"pointerout":rs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ls.delete(t.pointerId)}}function as(e,t,n,r,a,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:c,targetContainers:[a]},t!==null&&(t=_n(t),t!==null&&nm(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function f2(e,t,n,r,a){switch(t){case"focusin":return Sl=as(Sl,e,t,n,r,a),!0;case"dragenter":return El=as(El,e,t,n,r,a),!0;case"mouseover":return Tl=as(Tl,e,t,n,r,a),!0;case"pointerover":var c=a.pointerId;return rs.set(c,as(rs.get(c)||null,e,t,n,r,a)),!0;case"gotpointercapture":return c=a.pointerId,ls.set(c,as(ls.get(c)||null,e,t,n,r,a)),!0}return!1}function im(e){var t=Yt(e.target);if(t!==null){var n=p(t);if(n!==null){if(t=n.tag,t===13){if(t=_(n),t!==null){e.blockedOn=t,ci(e.priority,function(){rm(n)});return}}else if(t===31){if(t=h(n),t!==null){e.blockedOn=t,ci(e.priority,function(){rm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Go(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vd(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Jr=r,n.target.dispatchEvent(r),Jr=null}else return t=_n(n),t!==null&&nm(t),e.blockedOn=n,!1;t.shift()}return!0}function sm(e,t,n){Go(e)&&n.delete(t)}function m2(){yd=!1,Sl!==null&&Go(Sl)&&(Sl=null),El!==null&&Go(El)&&(El=null),Tl!==null&&Go(Tl)&&(Tl=null),rs.forEach(sm),ls.forEach(sm)}function $o(e,t){e.blockedOn===t&&(e.blockedOn=null,yd||(yd=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,m2)))}var Yo=null;function om(e){Yo!==e&&(Yo=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Yo===e&&(Yo=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],a=e[t+2];if(typeof r!="function"){if(bd(r||n)===null)continue;break}var c=_n(n);c!==null&&(e.splice(t,3),t-=3,vu(c,{pending:!0,data:a,method:n.method,action:r},r,a))}}))}function Ja(e){function t(S){return $o(S,e)}Sl!==null&&$o(Sl,e),El!==null&&$o(El,e),Tl!==null&&$o(Tl,e),rs.forEach(t),ls.forEach(t);for(var n=0;n<Ml.length;n++){var r=Ml[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ml.length&&(n=Ml[0],n.blockedOn===null);)im(n),n.blockedOn===null&&Ml.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var a=n[r],c=n[r+1],m=a[Dt]||null;if(typeof c=="function")m||om(n);else if(m){var y=null;if(c&&c.hasAttribute("formAction")){if(a=c,m=c[Dt]||null)y=m.formAction;else if(bd(a)!==null)continue}else y=m.action;typeof y=="function"?n[r+1]=y:(n.splice(r,3),r-=3),om(n)}}}function cm(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(m){return a=m})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function wd(e){this._internalRoot=e}Xo.prototype.render=wd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,r=Tn();em(n,r,e,t,null,null)},Xo.prototype.unmount=wd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;em(e.current,2,null,e,null,null),No(),t[Gn]=null}};function Xo(e){this._internalRoot=e}Xo.prototype.unstable_scheduleHydration=function(e){if(e){var t=ot();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ml.length&&t!==0&&t<Ml[n].priority;n++);Ml.splice(n,0,e),n===0&&im(e)}};var um=l.version;if(um!=="19.2.7")throw Error(s(527,um,"19.2.7"));ne.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=b(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var h2={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ko.isDisabled&&Ko.supportsFiber)try{Bl=Ko.inject(h2),Et=Ko}catch{}}return ss.createRoot=function(e,t){if(!d(e))throw Error(s(299));var n=!1,r="",a=_0,c=v0,m=b0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=Z1(e,1,!1,null,null,n,r,null,a,c,m,cm),e[Gn]=t.current,nd(e),new wd(t)},ss.hydrateRoot=function(e,t,n){if(!d(e))throw Error(s(299));var r=!1,a="",c=_0,m=v0,y=b0,S=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.formState!==void 0&&(S=n.formState)),t=Z1(e,1,!0,t,n??null,r,a,S,c,m,y,cm),t.context=J1(null),n=t.current,r=Tn(),r=Yr(r),a=fl(r),a.callback=null,ml(n,a,r),n=r,t.current.lanes=n,Ul(t,n),ur(t),e[Gn]=t.current,nd(e),new Xo(t)},ss.version="19.2.7",ss}var ym;function E2(){if(ym)return Sd.exports;ym=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),Sd.exports=S2(),Sd.exports}var T2=E2();const M2=yh(T2),wm=i=>{let l;const o=new Set,s=(b,x)=>{const k=typeof b=="function"?b(l):b;if(!Object.is(k,l)){const T=l;l=x??(typeof k!="object"||k===null)?k:Object.assign({},l,k),o.forEach(R=>R(l,T))}},d=()=>l,h={setState:s,getState:d,getInitialState:()=>g,subscribe:b=>(o.add(b),()=>o.delete(b))},g=l=i(s,d,h);return h},N2=(i=>i?wm(i):wm),j2=i=>i;function R2(i,l=j2){const o=hs.useSyncExternalStore(i.subscribe,hs.useCallback(()=>l(i.getState()),[i,l]),hs.useCallback(()=>l(i.getInitialState()),[i,l]));return hs.useDebugValue(o),o}const xm=i=>{const l=N2(i),o=s=>R2(l,s);return Object.assign(o,l),o},A2=(i=>i?xm(i):xm);function C2(){const i=new Uint8Array(16);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(i);else for(let o=0;o<i.length;o+=1)i[o]=Math.floor(Math.random()*256);let l="";for(const o of i)l+=o.toString(16).padStart(2,"0");return l}const ef="pkp.user",tf="pkp.savedDevices",nf="pkp.ideDrafts",rf="pkp.ideSettings",vs="Prototype Version 0.6.7";function uc(i){try{const l=localStorage.getItem(i);return l?JSON.parse(l):null}catch{return null}}function dc(i,l){try{localStorage.setItem(i,JSON.stringify(l))}catch{}}function D2(){const i=uc(ef);return i&&typeof i.username=="string"&&typeof i.userID=="string"?i:null}function Nd(i){dc(ef,i)}function ac(){return uc(tf)??[]}function ri(i){dc(tf,i)}function O2(){ri([])}function L2(){try{localStorage.removeItem(ef),localStorage.removeItem(tf),localStorage.removeItem(nf),localStorage.removeItem(rf)}catch{}}function Qo(){var i;return((i=uc(nf))==null?void 0:i.filter(l=>l.path&&typeof l.content=="string"))??[]}function os(i){dc(nf,i)}function km(){const i=uc(rf)??{};return{clearTerminalOnRun:!!i.clearTerminalOnRun,simplifiedErrors:i.simplifiedErrors!==!1}}function B2(i){dc(rf,i)}function jd(i){const l=ac(),o=l.findIndex(s=>s.deviceID===i.deviceID);return o>=0?l[o]=i:l.push(i),ri(l),l}function z2(i){const l=ac().filter(o=>o.deviceID!==i);return ri(l),l}const Id="b8e06067-62ad-41ba-9231-206ae80ab551",U2="f897177b-aee8-4767-8ecc-cc694fd5fce0",q2="f897177b-aee8-4767-8ecc-cc694fd5fce1",Rd=20,H2=12,V2=new TextEncoder;function P2(i){return new Promise(l=>setTimeout(l,i))}function fc(){return typeof navigator<"u"&&"bluetooth"in navigator}function xh(i){return i?i.startsWith("PicoW-")?i.slice(6):i:"Pico"}async function I2(){if(!fc())throw new Error("Web Bluetooth er ikke tilgængelig i denne browser.");return navigator.bluetooth.requestDevice({filters:[{services:[Id]},{namePrefix:"PicoW-"}],optionalServices:[Id]})}async function kh(){if(!fc()||!navigator.bluetooth.getDevices)return[];try{return await navigator.bluetooth.getDevices()}catch{return[]}}class F2{constructor(){pe(this,"device",null);pe(this,"writeChar",null);pe(this,"notifyChar",null);pe(this,"buffer","");pe(this,"decoder",new TextDecoder);pe(this,"writeQueue",Promise.resolve());pe(this,"disconnectNotified",!1);pe(this,"onLine",()=>{});pe(this,"onDisconnect",()=>{});pe(this,"handleNotification",l=>{const o=l.target;if(!(o!=null&&o.value))return;this.buffer+=this.decoder.decode(o.value.buffer,{stream:!0});let s=this.buffer.indexOf(`
`);for(;s>=0;){const d=this.buffer.slice(0,s).trim();this.buffer=this.buffer.slice(s+1),d&&this.onLine(d),s=this.buffer.indexOf(`
`)}});pe(this,"handleDisconnected",()=>{var l;this.disconnectNotified||(this.disconnectNotified=!0,(l=this.device)==null||l.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.writeChar=null,this.notifyChar=null,this.onDisconnect())})}get connected(){var l,o;return!!((o=(l=this.device)==null?void 0:l.gatt)!=null&&o.connected)}async connect(l){var d;this.device&&this.device!==l&&this.device.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.device=l,this.buffer="",this.decoder=new TextDecoder,this.disconnectNotified=!1,l.removeEventListener("gattserverdisconnected",this.handleDisconnected),l.addEventListener("gattserverdisconnected",this.handleDisconnected);const o=await((d=l.gatt)==null?void 0:d.connect());if(!o)throw new Error("Kunne ikke åbne Bluetooth-forbindelsen.");const s=await o.getPrimaryService(Id);this.writeChar=await s.getCharacteristic(U2),this.notifyChar=await s.getCharacteristic(q2),await this.notifyChar.startNotifications(),this.notifyChar.addEventListener("characteristicvaluechanged",this.handleNotification)}writeLine(l){const o=this.writeQueue.then(()=>this.doWrite(l));return this.writeQueue=o.catch(()=>{}),o}async doWrite(l){if(!this.writeChar)throw new Error("Ingen forbindelse.");const o=V2.encode(`${l}
`),d=this.writeChar.properties.writeWithoutResponse&&typeof this.writeChar.writeValueWithoutResponse=="function"?this.writeChar.writeValueWithoutResponse.bind(this.writeChar):this.writeChar.writeValue.bind(this.writeChar);for(let p=0;p<o.length;p+=Rd){const _=o.slice(p,p+Rd);await d(_),p+Rd<o.length&&await P2(H2)}}disconnect(){var o;const l=this.device;(o=l==null?void 0:l.gatt)!=null&&o.connected?l.gatt.disconnect():this.handleDisconnected()}}class G2{constructor(l,o){pe(this,"send");pe(this,"onMessage");pe(this,"inActive",!1);pe(this,"inExpectedTotal",0);pe(this,"inStreamId",0);pe(this,"inParts",new Map);pe(this,"inProgress",null);pe(this,"outPendingLines",null);pe(this,"outWaitingAck",!1);pe(this,"outStreamId",0);pe(this,"outNextStreamId",1);pe(this,"outCache",new Map);pe(this,"outProgress",null);pe(this,"outResolve",null);pe(this,"outReject",null);this.send=l,this.onMessage=o}reset(){this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear(),this.inProgress=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outStreamId=0,this.outCache.clear(),this.outProgress=null,this.outResolve=null,this.outReject=null}handleLine(l){var s;if(l.startsWith("prep,")){const d=l.split(","),p=d.length>=2&&/^\d+$/.test(d[1])?parseInt(d[1],10):null,_=d.length>=3&&/^\d+$/.test(d[2])?parseInt(d[2],10):0;p!==null&&p>0&&(this.inActive=!0,this.inExpectedTotal=p,this.inStreamId=_,this.inParts.clear(),this.send(_>0?`ack:prep,${_}`:"ack:prep"));return}if(l==="ack:prep"||l===`ack:prep,${this.outStreamId}`){this.flushOutbound();return}if(l.startsWith("miss,")){const d=l.split(",");if(d.length>=3&&/^\d+$/.test(d[1])&&/^\d+$/.test(d[2])){const p=parseInt(d[1],10),_=parseInt(d[2],10),h=this.outCache.get(_);p===this.outStreamId&&h&&this.send(h)}return}const o=this.parseNumbered(l);if(o){const{idx:d,payload:p}=o;if(!this.inActive){this.onMessage(p);return}this.inParts.has(d)||(this.inParts.set(d,p),(s=this.inProgress)==null||s.call(this,this.inParts.size,this.inExpectedTotal));let _=0;for(let h=1;h<=this.inExpectedTotal;h+=1)if(!this.inParts.has(h)){_=h;break}if(_>0&&this.inStreamId>0&&d>_&&this.send(`miss,${this.inStreamId},${_}`),this.inParts.size>=this.inExpectedTotal){for(let h=1;h<=this.inExpectedTotal;h+=1){const g=this.inParts.get(h);g!==void 0&&this.onMessage(g)}this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear()}return}this.onMessage(l)}setInboundProgress(l){this.inProgress=l}async sendReliable(l,o){if(this.outPendingLines!==null||this.outWaitingAck)throw new Error("Reliable stream is already sending.");const s=l.length===0?[""]:l;this.outPendingLines=[...s],this.outWaitingAck=!0,this.outProgress=o??null,this.outStreamId=this.outNextStreamId,this.outNextStreamId+=1,this.outCache.clear();const d=new Promise((p,_)=>{this.outResolve=p,this.outReject=_});try{await this.send(`prep,${s.length},${this.outStreamId}`)}catch(p){throw this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null,p}await d}async flushOutbound(){var l,o,s,d;if(!this.outWaitingAck||this.outPendingLines===null){this.outWaitingAck=!1,this.outProgress=null,(l=this.outResolve)==null||l.call(this),this.outResolve=null,this.outReject=null;return}try{const p=this.outPendingLines.length;for(let _=0;_<p;_+=1){const h=this.outPendingLines[_],g=`${_+1}-${h}`;this.outCache.set(_+1,g),await this.send(g),(o=this.outProgress)==null||o.call(this,_+1,p,h)}(s=this.outResolve)==null||s.call(this)}catch(p){(d=this.outReject)==null||d.call(this,p)}finally{this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null}}parseNumbered(l){const o=l.indexOf("-");if(o<=0)return null;const s=l.slice(0,o);if(!/^\d+$/.test(s))return null;const d=parseInt(s,10);return d<1?null:{idx:d,payload:l.slice(o+1)}}}const ii=11,bs=31,$2=2,Y2=60,li=4,ai=60;function X2(i,l){return Math.max(14,Math.min(56,Math.min(i,l)*.05))}function Sh(i,l,o=ii,s=bs){const d=X2(i,l),p=Math.max(1,i-2*d),_=Math.max(1,l-2*d);return{areaW:i,areaH:l,cols:o,rows:s,margin:d,stepX:p/Math.max(1,o-1),stepY:_/Math.max(1,s-1)}}function Eh(i,l){return l.margin+i/2*l.stepX}function Th(i,l){const o=l.margin+i/2*l.stepY;return l.areaH-o}function ps(i,l){return i.centerX2===null||i.centerY2===null||i.spanX===null||i.spanY===null?null:{cx:Eh(i.centerX2,l),cy:Th(i.centerY2,l),width:i.spanX*l.stepX,height:i.spanY*l.stepY}}function K2(i){const l=[];for(let o=0;o<i.cols;o+=1)for(let s=0;s<i.rows;s+=1)l.push({x:i.margin+o*i.stepX,y:i.areaH-(i.margin+s*i.stepY)});return l}function Ad(i,l,o,s,d){const p=(g,b,x,k)=>{const T=b%2,R=k*2;let B=T,$=1/0;for(let F=T;F<=R;F+=2){const P=Math.abs(x(F)-g);P<$&&($=P,B=F)}return Math.max(b,Math.min(R-b,B))},_=p(i,o,g=>Eh(g,d),d.cols-1),h=p(l,s,g=>Th(g,d),d.rows-1);return{centerX2:_,centerY2:h}}const ua=6e3,Q2=15,W2="",ic=[32,64,128,192],Z2=ua*10,J2=3500,eg=8e3,tg=2,ng=ua,rg=ua*8;function Cd(i){return new Promise(l=>setTimeout(l,i))}function ei(i){if(i!=null&&i.aborted)throw new DOMException("BLE file read cancelled","AbortError")}function Sm(i){return i instanceof DOMException&&i.name==="AbortError"}function jl(i){return i.replace(/[\r\n,]/g," ").trim()}function Em(i){return i.replace(/[\r\n,]/g,"").trim()}class lg{constructor(l={}){pe(this,"transport",new F2);pe(this,"stream");pe(this,"events");pe(this,"waiters",[]);pe(this,"collectingLayout",!1);pe(this,"layoutBuffer",[]);pe(this,"layoutResolve",null);pe(this,"collectingLines",!1);pe(this,"lineBuffer",[]);pe(this,"lineResolve",null);pe(this,"lineReject",null);pe(this,"lineCollectId",0);pe(this,"controlPumpActive",!1);pe(this,"pendingButtons",[]);pe(this,"pendingSliders",new Map);pe(this,"pendingToggles",new Map);pe(this,"pendingJoysticks",new Map);pe(this,"pendingDpads",[]);pe(this,"expectingDisconnect",!1);pe(this,"disconnectMessage",null);pe(this,"busy",!1);pe(this,"fsCapabilities",null);this.events=l,this.stream=new G2(o=>this.transport.writeLine(o),o=>this.onDeviceMessage(o)),this.transport.onLine=o=>this.stream.handleLine(o),this.transport.onDisconnect=()=>this.handleDisconnect()}get device(){return this.transport.device}get deviceName(){var l;return xh((l=this.transport.device)==null?void 0:l.name)}get connected(){return this.transport.connected}setBusy(l){if(this.busy=l,l){this.pendingButtons=[],this.pendingSliders.clear(),this.pendingToggles.clear(),this.pendingJoysticks.clear(),this.pendingDpads=[];return}this.pumpControls()}log(l,o){var s,d;(d=(s=this.events).onLog)==null||d.call(s,l,o)}progress(l,o){var s,d;(d=(s=this.events).onProgress)==null||d.call(s,l,o)}onDeviceMessage(l){var s,d;if(l==="disconnect"||l==="disconnect_private"){const p=l==="disconnect_private"?"Du blev afbrudt, fordi enheden er privat, og andre brugere ikke må forbinde.":"Enheden afbrød forbindelsen.";this.disconnectMessage=p,this.log("warning",p),this.expectingDisconnect=!0,this.transport.disconnect();return}if(this.collectingLines){if(l==="__END__"){const p=this.lineBuffer;this.lineBuffer=[],this.collectingLines=!1,(s=this.lineResolve)==null||s.call(this,p),this.lineResolve=null;return}this.lineBuffer.push(l);return}if(this.collectingLayout){if(l==="__END__"){const p=this.layoutBuffer;this.layoutBuffer=[],this.collectingLayout=!1,(d=this.layoutResolve)==null||d.call(this,p),this.layoutResolve=null;return}!l.startsWith("ACK")&&!l.startsWith("ERR")&&!l.startsWith("#VERSION")?this.layoutBuffer.push(l):l.startsWith("#VERSION")&&this.layoutBuffer.push(l);return}l.startsWith("ERR")?this.log("error",l):l.startsWith("radar,")?this.handleRadarLine(l):l.startsWith("text,")?this.handleTextLine(l):l.startsWith("toggle_state,")?this.handleToggleStateLine(l):l.startsWith("slider_state,")?this.handleSliderStateLine(l):l.startsWith("plot_clear,")?this.handlePlotClearLine(l):l.startsWith("plot,")?this.handlePlotLine(l):l.startsWith("ACK")||l==="LAYOUT_SAVED"||l.startsWith("READY")?this.log("success",l):this.log("info",`rx: ${l}`);const o=this.waiters.findIndex(p=>p.match(l));if(o>=0){const p=this.waiters[o];this.waiters.splice(o,1),clearTimeout(p.timer),p.resolve(l)}}waitFor(l,o,s){return new Promise((d,p)=>{const _=setTimeout(()=>{const h=this.waiters.findIndex(g=>g.timer===_);h>=0&&this.waiters.splice(h,1),p(new Error(`Timeout: ${s}`))},o);this.waiters.push({match:l,resolve:d,reject:p,timer:_})})}async collectLines(l,o,s,d,p){ei(d);const _=this.lineCollectId+1;this.lineCollectId=_,this.collectingLines=!0,this.lineBuffer=[],this.stream.setInboundProgress(p??null);const h=new Promise((g,b)=>{let x=!1;const k=()=>this.lineCollectId===_,T=()=>{x=!0,k()&&(this.lineReject=null,this.stream.setInboundProgress(null)),d==null||d.removeEventListener("abort",B)},R=P=>{x||(clearTimeout($),k()&&(this.collectingLines=!1,this.lineBuffer=[],this.lineResolve=null),T(),b(P))},B=()=>{R(new DOMException("BLE file read cancelled","AbortError"))},$=setTimeout(()=>{k()&&R(new Error(`Timeout: ${s}`))},o);this.lineResolve=g,this.lineReject=R;const F=this.lineResolve;this.lineResolve=P=>{k()&&(clearTimeout($),T(),F==null||F(P))},d==null||d.addEventListener("abort",B,{once:!0})});return await this.transport.writeLine(l),h}async exchange(l,o,s,d=3){let p;for(let _=1;_<=d;_+=1)try{return await this.transport.writeLine(l),await this.waitFor(o,ua,s)}catch(h){p=h,this.log("warning",`${s}: forsøg ${_}/${d} mislykkedes`)}throw p instanceof Error?p:new Error(`Failed: ${s}`)}async connect(l){this.expectingDisconnect=!1,this.stream.reset(),this.progress(5,"Forbinder til Bluetooth..."),await this.transport.connect(l)}async runHandshake(l){var te,ue,fe,Z;await Cd(350),this.progress(18,"Klargør forbindelse..."),this.progress(26,"Sender HELLO..."),await this.exchange("HELLO",J=>J==="ACK:HELLO","HELLO"),this.progress(34,"Forbindelse bekræftet"),this.progress(44,"Spørger om ejerskab...");const o=await this.exchange("who_are_you",J=>J==="unowned"||J.startsWith("unowned,")||J.startsWith("owned,"),"who_are_you");if(this.progress(56,"Ejerskab modtaget"),o==="unowned"||o.startsWith("unowned,"))return{kind:"unowned",deviceName:((te=o.split(",")[1])==null?void 0:te.trim())||void 0};const s=o.split(","),d=s[1]??"",p=((ue=s[2])==null?void 0:ue.trim())??"",_=s[3]!==void 0?parseInt(s[3],10)===1:!0,h=s[4]!==void 0?parseInt(s[4],10)===1:!1,g=s.length>=7,b=g?parseInt(s[5]??"0",10)===1:h,x=((fe=s[g?6:5])==null?void 0:fe.trim())||void 0,k=((Z=s[g?7:6])==null?void 0:Z.trim())||void 0;await this.exchange("ACK:ownership",J=>J==="READY:permission","ACK:ownership",1),this.progress(66,"Anmoder om adgang...");const T=await this.exchange(`request_permission,${l.userID},${jl(l.username)}`,J=>J.startsWith("perm,"),"request_permission");this.progress(76,"Adgang vurderet");const R=T.split(",").filter(J=>/^\d+$/.test(J)),B=R.length>=1?parseInt(R[0]??"0",10):0,$=R.length>=2?parseInt(R[1]??"0",10):0,F=R.length>=3?parseInt(R[2]??"0",10):$;if(B===0)return this.expectingDisconnect=!0,this.disconnectMessage="Du kan ikke forbinde, fordi enheden er privat, og andre brugere ikke må forbinde.",{kind:"denied",ownerName:x,canOthersConnect:_};const P=l.userID===d,W=$===1||P,H=F===1||P;return await this.transport.writeLine("ACK:permission"),{kind:"owned",ownerID:d,ownerName:x,deviceName:k,icon:p,canEdit:W,canEditCode:H,isOwnedByMe:P,canOthersConnect:_,canOthersEdit:h,canOthersEditCode:b}}async create(l,o,s,d,p,_,h){const g=s?1:0,b=s&&d?1:0,x=s&&p?1:0;await this.exchange(`create,${l.userID},${jl(l.username)},${Em(o)},${g},${b},${x},${_},${h}`,k=>k==="ACK:create","create")}async updateDeviceSettings(l,o,s,d,p,_,h){const g=o?1:0,b=o&&s?1:0,x=o&&d?1:0;await this.exchange(`settings_update,${Em(l)},${g},${b},${x},${p},${_},${jl(h??"")}`,k=>k==="ACK:settings_update","settings_update",3)}async requestLayout(){this.progress(84,"Henter kontrolpanel..."),this.collectingLayout=!0,this.layoutBuffer=[];const l=new Promise((s,d)=>{this.layoutResolve=s;const p=setTimeout(()=>{this.collectingLayout&&(this.collectingLayout=!1,this.layoutResolve=null,d(new Error("Timeout: layout")))},ua*2),_=this.layoutResolve;this.layoutResolve=h=>{clearTimeout(p),_==null||_(h)}});await this.transport.writeLine("request"),this.progress(92,"Modtager kontrolpanel...");const o=await l;return this.progress(100,"Klar"),o}async saveLayout(l){await this.exchange("update",d=>d==="ACK:update","update",3).catch(()=>{this.log("warning","ACK:update udeblev (fortsætter).")});const o=l.map(d=>{const p=h=>h===null?"n":String(h),_=`update,${d.type},${d.name},${p(d.centerX2)},${p(d.centerY2)},${p(d.spanX)},${p(d.spanY)},${d.rotation}`;return d.type==="slider"?`${_},${d.sliderMin??0},${d.sliderMax??100},${d.sliderRecenter??"none"}`:d.type==="toggle"?`${_},${d.toggleInitial?1:0}`:d.type==="radar"?[_,d.radarMinAngle??0,d.radarMaxAngle??180,d.radarMaxDistance??200,d.radarFadeMs??1200].join(","):d.type==="joystick"?[_,d.joystickXMin??-100,d.joystickXMax??100,d.joystickYMin??-100,d.joystickYMax??100,d.joystickXRecenter??"middle",d.joystickYRecenter??"middle"].join(","):d.type==="plot"?[_,d.plotMin??0,d.plotMax??100,d.plotHistory??30,d.plotStyle??"line"].join(","):_});o.push("__END__");const s=this.waitFor(d=>d==="LAYOUT_SAVED",ua*2,"LAYOUT_SAVED");await this.stream.sendReliable(o),await s}async listFiles(l="/"){return(await this.collectLines(`fs_list,${jl(l)}`,ua*3,"fs_list")).filter(s=>s.startsWith("fs_entry,")).map(s=>{const[,d,p,_]=s.split(","),h=d==="file"||d==="dir"?d:"unknown",g=parseInt(_??"",10),b=p||"/";return{name:b.split("/").filter(Boolean).pop()??b,path:b,type:h,...Number.isFinite(g)&&g>=0?{size:g}:{}}})}handleRadarLine(l){var _,h,g;const o=l.split(",");if(o.length<4)return;const s=(_=o[1])==null?void 0:_.trim(),d=parseFloat(o[2]??""),p=parseFloat(o[3]??"");!s||!Number.isFinite(d)||!Number.isFinite(p)||((g=(h=this.events).onRadar)==null||g.call(h,s,d,p),this.log("info",`rx: ${l}`))}handleTextLine(l){var g,b;const o=l.indexOf(","),s=o>=0?l.indexOf(",",o+1):-1;if(o<0||s<0)return;const d=l.slice(o+1,s),p=l.slice(s+1),_=d==null?void 0:d.trim();if(!_)return;const h=p.split(W2).join(`
`);(b=(g=this.events).onText)==null||b.call(g,_,h),this.log("info",`rx: ${l}`)}handleToggleStateLine(l){var p,_,h;const o=l.split(",");if(o.length<3)return;const s=(p=o[1])==null?void 0:p.trim(),d=parseInt(o[2]??"",10);!s||!Number.isFinite(d)||((h=(_=this.events).onToggleState)==null||h.call(_,s,d===1),this.log("info",`rx: ${l}`))}handleSliderStateLine(l){var p,_,h;const o=l.split(",");if(o.length<3)return;const s=(p=o[1])==null?void 0:p.trim(),d=parseFloat(o[2]??"");!s||!Number.isFinite(d)||((h=(_=this.events).onSliderState)==null||h.call(_,s,d),this.log("info",`rx: ${l}`))}handlePlotLine(l){var _,h,g;const o=l.split(",");if(o.length<3)return;const s=(_=o[1])==null?void 0:_.trim(),d=parseFloat(o[2]??"");if(!s||!Number.isFinite(d))return;const p=o.slice(3).join(",").trim()||void 0;(g=(h=this.events).onPlot)==null||g.call(h,s,d,p),this.log("info",`rx: ${l}`)}handlePlotClearLine(l){var d,p,_;const o=l.split(",");if(o.length<2)return;const s=(d=o[1])==null?void 0:d.trim();s&&((_=(p=this.events).onPlotClear)==null||_.call(p,s),this.log("info",`rx: ${l}`))}async readText(l,o,s){o==null||o(4,"Validerer Picoens Bluetooth-filsystem...");const d=await this.getFilesystemCapabilities(s);if(d.streamRead)try{return await this.readTextStream(l,d,o,s)}catch(p){if(s!=null&&s.aborted||Sm(p)||!d.pageRead)throw p;this.log("warning",p instanceof Error?`fs_read_stream fejlede; bruger paged read: ${p.message}`:"fs_read_stream fejlede; bruger paged read")}return this.readTextPaged(l,o,s)}async getFilesystemCapabilities(l){if(this.fsCapabilities)return this.fsCapabilities;const o=await this.collectLines("fs_capabilities",ng,"fs_capabilities",l),s=o.find(x=>x.startsWith("ERR"));if(s)throw new Error(s);const d=o.find(x=>x.startsWith("fs_capabilities,"));if(!d)throw new Error("Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.");const p=d.split(","),_=new Map;for(let x=1;x<p.length-1;x+=2)_.set(p[x],p[x+1]);const h=parseInt(_.get("max_page")??"",10),g=parseInt(_.get("stream_chunk")??"",10),b={version:_.get("version")||void 0,pageRead:_.get("page_read")==="1",maxPageSize:Number.isFinite(h)&&h>0?h:32,streamRead:_.get("stream_read")==="1",streamChunkSize:Number.isFinite(g)&&g>0?g:128};if(!b.pageRead&&!b.streamRead)throw new Error("Picoens Bluetooth-runtime meldte, at file-read ikke er understøttet.");return this.fsCapabilities=b,b}async readTextPaged(l,o,s){const d=await this.getFilesystemCapabilities(s);let p=0,_=ag(d.maxPageSize),h=0,g=null,b="";const x=`Indlæser ${Dd(l)}...`;ei(s),o==null||o(5,x);for(let k=0;k<512;k+=1){ei(s),h===0&&(o==null||o(7,x));const R=await this.readPageWithRetry(l,h,p,_,s),B=R.lines;p=R.nextPageSizeIndex,_=R.maxPageSizeIndex,ei(s);const $=B.find(J=>J.startsWith("ERR"));if($)throw new Error($);const F=B.find(J=>J.startsWith("fs_page,"));if(!F)throw new Error("ERR: fs_read_page missing data");const[,P,W,H,te=""]=F.split(",",5);if(P!==l)throw new Error("ERR: fs_read_page stale data");const ue=parseInt(W??"",10),fe=parseInt(H??"",10);if(!Number.isFinite(ue)||ue!==h||!Number.isFinite(fe))throw new Error("ERR: fs_read_page invalid data");g=fe,b+=te,h+=Math.floor(te.length/2);const Z=g>0?8+Math.min(87,Math.round(h/g*87)):95;if(o==null||o(Z,x),h>=g||te.length===0)return o==null||o(100,"Fil indlæst fra Pico"),new TextDecoder().decode(Mm(b))}throw new Error("ERR: fs_read_page too many pages")}async readPageWithRetry(l,o,s,d,p){let _,h=Math.min(s,d);for(;h>=0;){const g=ic[h],b=h===0?tg:1,x=h===0?eg:J2;for(let k=1;k<=b;k+=1){ei(p);try{return{lines:await this.collectLines(`fs_read_page,${jl(l)},${o},${g}`,x,`fs_read_page ${o}`,p),nextPageSizeIndex:Math.min(h+1,d),maxPageSizeIndex:d}}catch(T){if(p!=null&&p.aborted||Sm(T))throw T;if(_=T,k<b||h>0){const B=h>0&&k>=b?ic[h-1]:g;this.log("warning",`fs_read_page ${o} (${g} bytes) fejlede; prøver ${B} bytes`),await Cd(80+k*80)}}}if(h===0)break;d=Math.max(0,h-1),h=d}throw _ instanceof Error?_:new Error(`Timeout: fs_read_page ${o}`)}async readTextStream(l,o,s,d){const p=`Indlæser ${Dd(l)}...`,_=Math.max(16,Math.min(192,o.streamChunkSize||128));s==null||s(5,p);const h=await this.collectLines(`fs_read_stream,${jl(l)},${_}`,rg,`fs_read_stream ${l}`,d,(Z,J)=>{const xe=8+Math.round(Math.min(Z,J)/Math.max(1,J)*87);s==null||s(Math.min(95,xe),p)});ei(d);const g=h.find(Z=>Z.startsWith("ERR"));if(g)throw new Error(g);const b=h.find(Z=>Z.startsWith("fs_stream_begin,")),x=h.find(Z=>Z.startsWith("fs_stream_end,"));if(!b||!x)throw new Error("ERR: fs_read_stream missing metadata");const[,k,T]=b.split(",",4),[,R,B,$]=x.split(",",4),F=parseInt(T??"",10),P=parseInt(B??"",10),W=parseInt($??"",10);if(k!==l||R!==l||!Number.isFinite(F)||F!==P||!Number.isFinite(W))throw new Error("ERR: fs_read_stream invalid metadata");let H=0,te="";for(const Z of h){if(!Z.startsWith("fs_stream_chunk,"))continue;const[,J,xe=""]=Z.split(",",3),ve=parseInt(J??"",10);if(!Number.isFinite(ve)||ve!==H||xe.length%2!==0)throw new Error("ERR: fs_read_stream invalid chunk");te+=xe,H+=Math.floor(xe.length/2)}if(H!==F)throw new Error("ERR: fs_read_stream size mismatch");const ue=Mm(te);if(Tm(ue)!==W)throw new Error("ERR: fs_read_stream checksum mismatch");return s==null||s(100,"Fil indlæst fra Pico"),new TextDecoder().decode(ue)}async writeText(l,o,s){s==null||s(5,"Klargør BLE-overførsel..."),await this.exchange(`fs_write_begin,${jl(l)}`,x=>x==="ACK:fs_write_begin","fs_write_begin",2),s==null||s(18,"Pico er klar til filen...");const d=new TextEncoder().encode(o),p=[...d].map(x=>x.toString(16).padStart(2,"0")).join(""),_=[];for(let x=0;x<p.length;x+=160)_.push(`fs_write_chunk,${p.slice(x,x+160)}`);_.push("fs_write_end");const h=Tm(d),g=this.waitFor(x=>x==="ACK:fs_write_done"||x.startsWith("ACK:fs_write_done,")||x.startsWith("ERR"),Z2,"fs_write_done");s==null||s(d.length===0?85:18,d.length===0?"Sender tom fil via Bluetooth...":`Sender 0/${d.length} bytes via Bluetooth...`),await this.stream.sendReliable(_,(x,k,T)=>{if(!T.startsWith("fs_write_chunk,"))return;const R=Math.min(d.length,x*80),B=18+Math.round(x/Math.max(1,k-1)*67);s==null||s(Math.min(85,B),`Sender ${R}/${d.length} bytes via Bluetooth...`)}),s==null||s(90,"Verificerer BLE-fil...");const b=await g;if(b.startsWith("ERR"))throw new Error(b);if(b.startsWith("ACK:fs_write_done,")){const[,x,k]=b.split(",",3),T=parseInt(x??"",10),R=parseInt(k??"",10);if(T!==d.length||R!==h)throw new Error(`ERR: BLE-verificering fejlede for ${Dd(l)}.`)}s==null||s(100,"Gemt på Pico")}async deleteFile(l){const o=await this.exchange(`fs_delete,${jl(l)}`,s=>s==="ACK:fs_delete"||s.startsWith("ERR"),"fs_delete",2);if(o.startsWith("ERR"))throw new Error(o)}async restart(){await this.exchange("restart",l=>l==="ACK:restart"||l.startsWith("ERR"),"restart",1).catch(()=>{}),this.expectingDisconnect=!0}enqueueButton(l,o){this.busy||(this.pendingButtons.push(`button,${l}:${o?"down":"up"}`),this.pumpControls())}enqueueSlider(l,o){this.busy||(this.pendingSliders.set(l,`slider,${l}:${o}`),this.pumpControls())}enqueueToggle(l,o){this.busy||(this.pendingToggles.set(l,`toggle,${l}:${o?1:0}`),this.pumpControls())}enqueueJoystick(l,o,s){this.busy||(this.pendingJoysticks.set(l,`joystick,${l}:${Math.round(o)},${Math.round(s)}`),this.pumpControls())}enqueueDpad(l,o,s){this.busy||(this.pendingDpads.push(`dpad,${l}:${o},${s?"down":"up"}`),this.pumpControls())}pumpControls(){this.controlPumpActive||this.busy||!this.transport.connected||(this.controlPumpActive=!0,this.drainControls())}async drainControls(){try{for(;!this.busy&&this.transport.connected;){const l=this.nextControlLine();if(!l)break;await this.transport.writeLine(l),this.log("info",`tx: ${l}`),await Cd(Q2)}}catch(l){this.log("error",l instanceof Error?l.message:"Kunne ikke sende kommando."),this.handleDisconnect()}finally{this.controlPumpActive=!1,!this.busy&&this.transport.connected&&this.hasPendingControls()&&this.pumpControls()}}nextControlLine(){const l=this.pendingButtons.shift();if(l)return l;const o=this.pendingDpads.shift();if(o)return o;const s=this.pendingSliders.entries().next();if(!s.done){const[_,h]=s.value;return this.pendingSliders.delete(_),h}const d=this.pendingToggles.entries().next();if(!d.done){const[_,h]=d.value;return this.pendingToggles.delete(_),h}const p=this.pendingJoysticks.entries().next();if(!p.done){const[_,h]=p.value;return this.pendingJoysticks.delete(_),h}return null}hasPendingControls(){return this.pendingButtons.length>0||this.pendingDpads.length>0||this.pendingSliders.size>0||this.pendingToggles.size>0||this.pendingJoysticks.size>0}async disconnect(){if(!this.transport.connected){this.handleDisconnect();return}this.expectingDisconnect=!0;try{await this.exchange("disconnect",l=>l==="ACK:disconnect","disconnect",1)}catch{}this.transport.disconnect()}handleDisconnect(){var o,s,d;for(const p of this.waiters)clearTimeout(p.timer),p.reject(new Error("Forbindelsen blev afbrudt."));this.waiters=[],this.collectingLayout=!1,this.layoutResolve=null,(o=this.lineReject)==null||o.call(this,new Error("Forbindelsen blev afbrudt.")),this.collectingLines=!1,this.lineResolve=null,this.lineReject=null,this.fsCapabilities=null,this.stream.reset();const l=this.disconnectMessage??void 0;this.disconnectMessage=null,(d=(s=this.events).onDisconnect)==null||d.call(s,l)}}function ag(i){let l=0;for(let o=0;o<ic.length;o+=1)ic[o]<=i&&(l=o);return l}function Dd(i){return i.replace(/\\/g,"/").replace(/^\/+/,"")||i}function Tm(i){let l=0;for(const o of i)l=l+o>>>0;return l}function Mm(i){const l=new Uint8Array(Math.floor(i.length/2));for(let o=0;o<l.length;o+=1)l[o]=parseInt(i.slice(o*2,o*2+2),16);return l}function Nm(i){const l=(o,s)=>Number.isFinite(o)?Math.max($2,Math.min(Y2,o)):s;for(const o of i){const s=o.trim();if(s.startsWith("#GRID,")){const d=s.split(","),p=l(parseInt(d[1],10),ii),_=l(parseInt(d[2],10),bs);return{cols:p,rows:_}}}return{cols:ii,rows:bs}}function jm(i){const l=new Map;for(const o of i){const s=o.trim();if(!s||s.startsWith("#VERSION")||s==="__END__")continue;const d=s.split(",");if(d.length<7)continue;const[p,_,h,g,b,x,k,T,R,B,$,F,P]=d;if(p!=="button"&&p!=="slider"&&p!=="toggle"&&p!=="radar"&&p!=="text"&&p!=="joystick"&&p!=="dpad"&&p!=="plot"||l.has(_))continue;const W=E=>{if(E==="n")return null;const U=parseInt(E,10);return Number.isNaN(U)?null:U},H=parseInt(k,10)||0,te=T!==void 0?parseInt(T,10):0,ue=R!==void 0?parseInt(R,10):100,fe=["none","bottom","middle","top"].includes(B??"")?B:"none",Z=T!==void 0?parseInt(T,10)===1:!1,J=T!==void 0?parseFloat(T):0,xe=R!==void 0?parseFloat(R):180,ve=B!==void 0?parseFloat(B):200,Oe=$!==void 0?parseInt($,10):1200,G=(E,U)=>["none","bottom","middle","top"].includes(E??"")?E:U,Ve=T!==void 0?parseInt(T,10):-100,be=R!==void 0?parseInt(R,10):100,Ee=B!==void 0?parseInt(B,10):-100,z=$!==void 0?parseInt($,10):100,ne=T!==void 0?parseFloat(T):0,me=R!==void 0?parseFloat(R):100,de=B!==void 0?parseInt(B,10):30,Se=$==="bar"?"bar":"line";l.set(_,{type:p,name:_,centerX2:W(h),centerY2:W(g),spanX:W(b),spanY:W(x),rotation:[0,90,180,270].includes(H)?H:0,...p==="slider"?{sliderMin:Number.isFinite(te)?te:0,sliderMax:Number.isFinite(ue)?ue:100,sliderRecenter:fe}:{},...p==="toggle"?{toggleInitial:Z}:{},...p==="radar"?{radarMinAngle:Number.isFinite(J)?J:0,radarMaxAngle:Number.isFinite(xe)?xe:180,radarMaxDistance:Number.isFinite(ve)&&ve>0?ve:200,radarFadeMs:Number.isFinite(Oe)&&Oe>0?Oe:1200}:{},...p==="joystick"?{joystickXMin:Number.isFinite(Ve)?Ve:-100,joystickXMax:Number.isFinite(be)&&be!==Ve?be:100,joystickYMin:Number.isFinite(Ee)?Ee:-100,joystickYMax:Number.isFinite(z)&&z!==Ee?z:100,joystickXRecenter:G(F,"middle"),joystickYRecenter:G(P,"middle")}:{},...p==="plot"?{plotMin:Number.isFinite(ne)?ne:0,plotMax:Number.isFinite(me)&&me!==ne?me:ne+100,plotHistory:Number.isFinite(de)&&de>1?de:30,plotStyle:Se}:{}})}return[...l.values()]}const ig=[{slug:"grommet-icons:raspberry",label:"Raspberry Pi",keywords:["raspberry pi","raspberry"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M8.087 0a.67.67 0 0 0-.399.165c-.363-.14-.717-.19-1.032.096c-.486-.063-.643.067-.762.22c-.107-.003-.8-.11-1.117.364c-.798-.095-1.049.47-.763.994c-.163.253-.332.5.048.981c-.134.268-.05.558.267.91c-.084.376.081.641.376.848c-.055.515.472.815.629.922c.06.3.187.584.79.74c.099.447.46.525.811.619c-1.159.673-2.153 1.558-2.146 3.733l-.17.303c-1.328.808-2.524 3.406-.654 5.518c.122.66.326 1.134.508 1.66c.273 2.117 2.054 3.11 2.523 3.227c.688.524 1.422 1.02 2.413 1.369c.935.964 1.946 1.331 3.005 1.331s2.07-.367 3.005-1.331c.992-.348 1.725-.845 2.413-1.37c.47-.117 2.25-1.11 2.523-3.226c.182-.526.386-1 .508-1.66c1.87-2.112.674-4.71-.655-5.518l-.169-.303c.007-2.175-.987-3.06-2.146-3.733c.35-.094.712-.172.812-.619c.602-.156.729-.44.79-.74c.157-.107.683-.407.628-.922c.295-.207.46-.472.376-.848c.318-.352.402-.642.267-.91c.38-.48.212-.728.049-.98c.285-.526.034-1.09-.763-.995c-.318-.474-1.01-.367-1.117-.365c-.12-.152-.277-.282-.763-.22c-.315-.284-.669-.235-1.032-.095A.67.67 0 0 0 16.742 0c-.232-.007-.43.134-.643.202c-.523-.17-.641.061-.898.156c-.569-.12-.742.143-1.015.42l-.32-.007c-.858.506-1.282 1.535-1.452 1.535S11.82 1.277 10.961.771l-.319.006C10.37.501 10.196.238 9.627.358C9.37.263 9.252.031 8.73.202C8.516.134 8.318-.007 8.087 0m.03.609c.436.161.663.37.9.575c.08-.108.202-.188.052-.45c.31.18.544.39.717.625c.191-.122.112-.287.113-.441c.322.262.528.54.778.812c.05-.037.093-.162.132-.358c.768.744 1.852 2.62.279 3.365C9.749 3.633 8.15 2.83 6.38 2.228c2.277 1.174 3.602 2.123 4.327 2.932c-.371 1.49-2.31 1.56-3.019 1.518c.145-.068.266-.15.31-.275c-.179-.127-.81-.013-1.25-.26c.17-.036.249-.069.328-.194c-.416-.132-.864-.248-1.128-.468c.143.002.275.033.46-.095c-.372-.201-.77-.36-1.078-.668c.193-.004.4-.002.46-.073a4.2 4.2 0 0 1-.867-.704c.27.033.382.006.448-.04c-.258-.265-.583-.487-.739-.812c.2.069.383.093.515-.008c-.088-.198-.464-.314-.68-.776c.211.02.436.046.48 0c-.097-.398-.264-.622-.429-.854c.451-.007 1.134.001 1.103-.037l-.279-.285c.44-.118.892.02 1.219.122c.147-.115-.004-.263-.183-.413q.56.076 1.019.255C7.56.945 7.289.799 7.159.65c.578.11.825.263 1.068.417c.177-.169.01-.312-.11-.46m8.594 0c-.12.147-.287.29-.11.46c.244-.155.49-.308 1.068-.418c-.13.148-.401.294-.238.442a4.4 4.4 0 0 1 1.02-.255c-.18.15-.33.298-.184.413c.328-.102.779-.24 1.22-.122l-.28.285c-.03.038.652.03 1.103.037c-.165.232-.331.456-.43.854c.045.046.27.02.48 0c-.215.462-.591.578-.679.776c.132.101.315.077.515.008c-.155.325-.48.547-.738.811c.065.047.178.074.447.041a4.2 4.2 0 0 1-.866.704c.06.07.267.069.46.073c-.31.307-.706.467-1.079.668c.186.128.318.097.46.095c-.264.22-.711.336-1.127.468c.079.125.158.158.327.193c-.44.248-1.071.134-1.249.26c.043.125.164.208.31.276c-.71.041-2.648-.029-3.02-1.518c.726-.81 2.05-1.758 4.328-2.932c-1.772.602-3.37 1.405-4.708 2.509c-1.574-.744-.49-2.62.278-3.365c.04.196.082.32.133.358c.25-.272.455-.55.777-.812c0 .154-.078.32.114.441c.172-.235.406-.446.716-.624c-.15.26-.027.341.053.45c.236-.207.463-.415.899-.576M12.414 6.77c1.359 0 2.492.923 2.494 1.466c.004.68-.994 1.38-2.476 1.398h-.036c-1.482-.018-2.48-.717-2.476-1.398c.003-.543 1.136-1.466 2.494-1.466m-3.813.447h.084q.331 0 .677.059c.777.13-3.72 4.058-3.79 3.182c-.062-2.003 1.278-3.213 3.03-3.241m7.542 0h.084c1.751.028 3.091 1.238 3.03 3.24c-.07.877-4.567-3.05-3.791-3.181q.346-.059.677-.06m-6.825 2.5c.259-.002.521.036.777.122c1.363.458 2.052 2.053 1.54 3.56c-.513 1.509-2.034 2.36-3.398 1.903c-1.363-.458-2.052-2.053-1.54-3.56c.417-1.226 1.498-2.017 2.62-2.025m6.193 0c1.122.008 2.204.8 2.62 2.024c.513 1.508-.176 3.103-1.54 3.56c-1.364.459-2.885-.393-3.398-1.901c-.512-1.508.177-3.103 1.54-3.56c.256-.087.519-.125.778-.123M5.33 11.4c1.062.015.273 5.052-.69 4.624c-1.092-.879-1.444-3.451.582-4.608a.4.4 0 0 1 .082-.014zm14.168 0l.027.002a.4.4 0 0 1 .081.014c2.026 1.157 1.675 3.73.582 4.608c-.963.428-1.752-4.609-.69-4.624m-7.084 3.482a2.8 2.8 0 0 1 1.874.7c.52.47.822 1.14.818 1.811c0 .66-.295 1.313-.8 1.778a2.88 2.88 0 0 1-1.892.739a2.88 2.88 0 0 1-1.892-.739a2.45 2.45 0 0 1-.8-1.778a2.46 2.46 0 0 1 .818-1.81a2.8 2.8 0 0 1 1.874-.7M6.148 16.2c.703-.014 1.568.541 2.268 1.353c.78.94 1.136 2.593.485 3.08c-.617.372-2.115.218-3.178-1.31c-.718-1.282-.624-2.587-.12-2.97q.248-.149.545-.153m12.465 0h.067c.197.004.38.052.546.153c.503.383.597 1.688-.12 2.97c-1.064 1.528-2.562 1.682-3.178 1.31c-.652-.487-.297-2.14.484-3.08c.678-.787 1.51-1.333 2.201-1.353m-6.199 4.504c1.09-.012 2.71.447 2.69 1.032c.017.405-1.312 1.574-2.667 1.516h-.045c-1.356.058-2.685-1.11-2.667-1.516c-.02-.585 1.6-1.044 2.69-1.032"/></svg>'},{slug:"material-symbols:robot",label:"Robot",keywords:["robot"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.413 11.413Q11 10.825 11 10t-.587-1.412T9 8t-1.412.588T7 10t.588 1.413T9 12t1.413-.587m6 0Q17 10.825 17 10t-.587-1.412T15 8t-1.412.588T13 10t.588 1.413T15 12t1.413-.587M9 21v-4h2v4zm4 0v-4h2v4zm-8 0q-.825 0-1.412-.587T3 19V9q0-2.5 1.75-4.25T9 3h6q2.5 0 4.25 1.75T21 9v10q0 .825-.587 1.413T19 21h-2v-4q0-.825-.587-1.412T15 15H9q-.825 0-1.412.588T7 17v4z"/></svg>'},{slug:"material-symbols:robot-outline",label:"Robot Outline",keywords:["robot"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V9q0-2.5 1.75-4.25T9 3h6q2.5 0 4.25 1.75T21 9v10q0 .825-.587 1.413T19 21zm0-2h14V9q0-1.65-1.175-2.825T15 5H9Q7.35 5 6.175 6.175T5 9zm2.588-7.587Q7 10.825 7 10t.588-1.412T9 8t1.413.588T11 10t-.587 1.413T9 12t-1.412-.587m6 0Q13 10.825 13 10t.588-1.412T15 8t1.413.588T17 10t-.587 1.413T15 12t-1.412-.587M7 19v-2q0-.825.588-1.412T9 15h6q.825 0 1.413.588T17 17v2h-2v-2h-2v2h-2v-2H9v2zm-2 0h14z"/></svg>'},{slug:"mdi:robot",label:"Robot",keywords:["robot"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5A2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"/></svg>'},{slug:"mdi:raspberry-pi",label:"Raspberry Pi",keywords:["raspberry pi"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20 8h2v2h-2zM4 5h16a2 2 0 0 1 2 2h-3v2H5v4h3v3h11v1h3a2 2 0 0 1-2 2h-4v1h-2v-1h-3v1H7v-1H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m15 10H9v-5h10v1h3v2h-3zm-6-3v2h2v-2zM5 6v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm5 8h2v2h-2z"/></svg>'},{slug:"mdi:chip",label:"Chip",keywords:["chip"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6 4h12v1h3v2h-3v2h3v2h-3v2h3v2h-3v2h3v2h-3v1H6v-1H3v-2h3v-2H3v-2h3v-2H3V9h3V7H3V5h3zm5 11v3h1v-3zm2 0v3h1v-3zm2 0v3h1v-3z"/></svg>'},{slug:"mingcute:chip-fill",label:"Chip Fill",keywords:["chip"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M15 2a1 1 0 0 1 1 1v1h1a3 3 0 0 1 3 3v1h1a1 1 0 1 1 0 2h-1v4h1a1 1 0 1 1 0 2h-1v1a3 3 0 0 1-3 3h-1v1a1 1 0 1 1-2 0v-1h-4v1a1 1 0 1 1-2 0v-1H7a3 3 0 0 1-3-3v-1H3a1 1 0 1 1 0-2h1v-4H3a1 1 0 0 1 0-2h1V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 2 0v1h4V3a1 1 0 0 1 1-1m-1 6h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2m0 2v4h-4v-4z"/></g></svg>'},{slug:"mingcute:chip-line",label:"Chip Line",keywords:["chip"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M15 2a1 1 0 0 1 1 1v1h1a3 3 0 0 1 3 3v1h1a1 1 0 1 1 0 2h-1v4h1a1 1 0 1 1 0 2h-1v1a3 3 0 0 1-3 3h-1v1a1 1 0 1 1-2 0v-1h-4v1a1 1 0 1 1-2 0v-1H7a3 3 0 0 1-3-3v-1H3a1 1 0 1 1 0-2h1v-4H3a1 1 0 0 1 0-2h1V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 2 0v1h4V3a1 1 0 0 1 1-1m2 4H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1m-3 2a2 2 0 0 1 1.995 1.85L16 10v4a2 2 0 0 1-1.85 1.995L14 16h-4a2 2 0 0 1-1.995-1.85L8 14v-4a2 2 0 0 1 1.85-1.995L10 8zm0 2h-4v4h4z"/></g></svg>'},{slug:"solar:cpu-bold",label:"Cpu Bold",keywords:["cpu"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M9.181 10.181c.053-.053.148-.119.45-.16c.323-.043.761-.044 1.439-.044h1.86c.678 0 1.116.001 1.438.045c.303.04.398.106.45.16c.054.052.12.147.16.45c.044.322.045.76.045 1.438v1.86c0 .678-.001 1.116-.045 1.438c-.04.303-.106.398-.16.45c-.052.054-.147.12-.45.16c-.322.044-.76.045-1.438.045h-1.86c-.678 0-1.116-.001-1.438-.045c-.303-.04-.398-.106-.45-.16c-.054-.052-.12-.147-.16-.45c-.044-.322-.045-.76-.045-1.438v-1.86c0-.678.001-1.116.045-1.438c.04-.303.106-.398.16-.45"/><path fill="currentColor" fill-rule="evenodd" d="M12 3c.385 0 .698.312.698.698v2.79q.764.001 1.395.017V3.698a.698.698 0 0 1 1.395 0v2.79a1 1 0 0 1-.008.108c.936.115 1.585.353 2.078.846s.731 1.142.846 2.078a1 1 0 0 1 .108-.008h2.79a.698.698 0 0 1 0 1.395h-2.807q.017.63.017 1.395h2.79a.698.698 0 0 1 0 1.396h-2.79q-.001.764-.017 1.395h2.807a.698.698 0 0 1 0 1.395h-2.79a1 1 0 0 1-.108-.008c-.115.936-.353 1.585-.846 2.078s-1.142.731-2.078.846q.009.053.008.108v2.79a.698.698 0 0 1-1.395 0v-2.807q-.63.017-1.395.017v2.79a.698.698 0 0 1-1.396 0v-2.79a56 56 0 0 1-1.395-.017v2.807a.698.698 0 0 1-1.395 0v-2.79q0-.056.008-.108c-.936-.115-1.585-.353-2.078-.846s-.731-1.142-.846-2.078a1 1 0 0 1-.108.008h-2.79a.698.698 0 0 1 0-1.395h2.807a56 56 0 0 1-.017-1.395h-2.79a.698.698 0 0 1 0-1.396h2.79q.001-.764.017-1.395H2.698a.698.698 0 0 1 0-1.395h2.79q.056 0 .108.008c.115-.936.353-1.585.846-2.078s1.142-.731 2.078-.846a1 1 0 0 1-.008-.108v-2.79a.698.698 0 0 1 1.395 0v2.807q.63-.017 1.395-.017v-2.79c0-.386.313-.698.698-.698m-.976 5.581c-.619 0-1.152 0-1.578.058c-.458.061-.896.2-1.252.555c-.355.356-.494.794-.555 1.252c-.058.427-.058.96-.058 1.578v1.952c0 .619 0 1.151.058 1.578c.061.458.2.896.555 1.252c.356.355.794.494 1.252.555c.426.058.96.058 1.578.058h1.952c.619 0 1.151 0 1.578-.058c.458-.061.896-.2 1.252-.555c.355-.356.494-.794.555-1.252c.058-.427.058-.96.058-1.578v-1.952c0-.619 0-1.151-.058-1.578c-.061-.458-.2-.896-.555-1.252c-.356-.355-.794-.494-1.252-.555c-.427-.058-.96-.058-1.578-.058z" clip-rule="evenodd"/></svg>'},{slug:"solar:cpu-bold-duotone",label:"Cpu Bold Duotone",keywords:["cpu"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 3c.385 0 .698.312.698.698v2.79q.764.001 1.395.017V3.698a.698.698 0 0 1 1.395 0v2.79a1 1 0 0 1-.008.108c.936.115 1.585.353 2.078.846s.731 1.142.846 2.078a1 1 0 0 1 .108-.008h2.79a.698.698 0 0 1 0 1.395h-2.807q.017.63.017 1.395h2.79a.698.698 0 0 1 0 1.396h-2.79q-.001.764-.017 1.395h2.807a.698.698 0 0 1 0 1.395h-2.79a1 1 0 0 1-.108-.008c-.115.936-.353 1.585-.846 2.078s-1.142.731-2.078.846q.009.053.008.108v2.79a.698.698 0 0 1-1.395 0v-2.807q-.63.017-1.395.017v2.79a.698.698 0 0 1-1.396 0v-2.79a56 56 0 0 1-1.395-.017v2.807a.698.698 0 0 1-1.395 0v-2.79q0-.056.008-.108c-.936-.115-1.585-.353-2.078-.846s-.731-1.142-.846-2.078a1 1 0 0 1-.108.008h-2.79a.698.698 0 0 1 0-1.395h2.807a56 56 0 0 1-.017-1.395h-2.79a.698.698 0 0 1 0-1.396h2.79q.001-.764.017-1.395H2.698a.698.698 0 0 1 0-1.395h2.79q.056 0 .108.008c.115-.936.353-1.585.846-2.078s1.142-.731 2.078-.846a1 1 0 0 1-.008-.108v-2.79a.698.698 0 0 1 1.395 0v2.807q.63-.017 1.395-.017v-2.79c0-.386.313-.698.698-.698m-.976 5.581c-.619 0-1.152 0-1.578.058c-.458.061-.896.2-1.252.555c-.355.356-.494.794-.555 1.252c-.058.427-.058.96-.058 1.578v1.952c0 .619 0 1.151.058 1.578c.061.458.2.896.555 1.252c.356.355.794.494 1.252.555c.426.058.96.058 1.578.058h1.952c.619 0 1.151 0 1.578-.058c.458-.061.896-.2 1.252-.555c.355-.356.494-.794.555-1.252c.058-.427.058-.96.058-1.578v-1.952c0-.619 0-1.151-.058-1.578c-.061-.458-.2-.896-.555-1.252c-.356-.355-.794-.494-1.252-.555c-.427-.058-.96-.058-1.578-.058z" clip-rule="evenodd"/><path fill="currentColor" d="M9.18 10.18c.054-.052.149-.118.451-.159c.323-.043.761-.044 1.439-.044h1.86c.678 0 1.116.001 1.438.044c.303.041.398.107.45.16c.054.053.12.148.16.45c.044.323.045.761.045 1.439v1.86c0 .678-.001 1.116-.045 1.438c-.04.303-.106.398-.16.45c-.052.054-.147.12-.45.16c-.322.044-.76.045-1.438.045h-1.86c-.678 0-1.116-.001-1.439-.045c-.302-.04-.397-.106-.45-.16c-.053-.052-.119-.147-.16-.45c-.043-.322-.044-.76-.044-1.438v-1.86c0-.678.001-1.116.044-1.438c.041-.303.107-.398.16-.451" opacity=".5"/></svg>'},{slug:"solar:cpu-broken",label:"Cpu Broken",keywords:["cpu"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" d="M17 14c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14v-4c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56"/><path d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z"/><path stroke-linecap="round" d="M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2"/></g></svg>'},{slug:"tabler:circuit-bulb",label:"Circuit Bulb",keywords:["circuit"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12h5m10 0h5M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0m1.5-3.5l7 7m0-7l-7 7"/></svg>'},{slug:"tabler:circuit-cell",label:"Circuit Cell",keywords:["circuit"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12h8m4 0h8M10 5v14m4-10v6"/></svg>'},{slug:"ph:head-circuit",label:"Head Circuit",keywords:["circuit"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M192.5 171.47a88.34 88.34 0 0 0 31.5-69.54c-1-45.71-37.61-83.4-83.24-85.8A88 88 0 0 0 48 102l-22.45 43.18c-.09.18-.18.36-.26.54a16 16 0 0 0 7.55 20.62l.25.11L56 176.94V208a16 16 0 0 0 16 16h48a8 8 0 0 0 0-16H72v-36.19a8 8 0 0 0-4.67-7.28L40 152l23.07-44.34A7.9 7.9 0 0 0 64 104a72 72 0 0 1 56-70.21v15.59a24 24 0 1 0 16 0V32c1.3 0 2.6 0 3.9.1A72.26 72.26 0 0 1 203.84 80H184a8 8 0 0 0-6.15 2.88l-25.51 30.62a24.06 24.06 0 1 0 12.28 10.25L187.75 96h19.79q.36 3.12.44 6.3a72.26 72.26 0 0 1-28.78 59.3a8 8 0 0 0-3.14 7.39l8 64a8 8 0 0 0 7.93 7a8 8 0 0 0 1-.06a8 8 0 0 0 6.95-8.93ZM128 80a8 8 0 1 1 8-8a8 8 0 0 1-8 8m16 64a8 8 0 1 1 8-8a8 8 0 0 1-8 8"/></svg>'},{slug:"lucide:microchip",label:"Microchip",keywords:["microchip"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 12h4m-4 5h4M10 7h4m4 5h2m-2 6h2M18 6h2M4 12h2m-2 6h2M4 6h2"/><rect x="6" y="2" rx="2"/></g></svg>'},{slug:"ri:sensor-fill",label:"Sensor Fill",keywords:["sensor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6 8v2h12V8h-3V2h2v4h5v2h-2v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V2h2v6zm7-6v6h-2V2z"/></svg>'},{slug:"ri:sensor-line",label:"Sensor Line",keywords:["sensor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6 8v11h12V8h-3V2h2v4h5v2h-2v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V2h2v6zm7-6v6h-2V2z"/></svg>'},{slug:"material-symbols:door-sensor",label:"Door Sensor",keywords:["sensor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M9 21q-.825 0-1.412-.587T7 19v-2h5q.825 0 1.413-.587T14 15t-.587-1.412T12 13H7V5q0-.825.588-1.412T9 3h6q.825 0 1.413.588T17 5v14q0 .825-.587 1.413T15 21zm-4-5q-.425 0-.712-.288T4 15t.288-.712T5 14h7q.425 0 .713.288T13 15t-.288.713T12 16zm7.713-6.288Q13 9.425 13 9t-.288-.712T12 8t-.712.288T11 9t.288.713T12 10t.713-.288m6.575-1Q19 8.426 19 8V4q0-.425.288-.712T20 3t.713.288T21 4v4q0 .425-.288.713T20 9t-.712-.288"/></svg>'},{slug:"mdi:motor",label:"Motor",keywords:["motor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 4v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"/></svg>'},{slug:"mdi:motor-outline",label:"Motor Outline",keywords:["motor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8 10h8v8h-5l-2-2H7v-5m0-7v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"/></svg>'},{slug:"mdi:motor-off",label:"Motor Off",keywords:["motor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3.78 2.5L21.5 20.22l-1.27 1.28L18 19.27V20h-8l-2-2H5v-3H3v3H1v-8h2v3h2v-3l1.87-1.86L2.5 3.77zM20 9v3h-2V8h-6V6h3V4H7.82l15 15H23V9z"/></svg>'},{slug:"mdi:engine",label:"Engine",keywords:["engine"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 4v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"/></svg>'},{slug:"mdi:engine-outline",label:"Engine Outline",keywords:["engine"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8 10h8v8h-5l-2-2H7v-5m0-7v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"/></svg>'},{slug:"tabler:engine",label:"Engine",keywords:["engine"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10v6m9-11v3m-2-3h4m-9 8H3m3-3h2l2-2h3.382a1 1 0 0 1 .894.553l1.448 2.894a1 1 0 0 0 .894.553H18v-2h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2v-2h-3v2a1 1 0 0 1-1 1h-3.465a1 1 0 0 1-.832-.445L8 16H6z"/></svg>'},{slug:"mdi:car",label:"Car",keywords:["car"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m5 11l1.5-4.5h11L19 11m-1.5 5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-11 0A1.5 1.5 0 0 1 5 14.5A1.5 1.5 0 0 1 6.5 13A1.5 1.5 0 0 1 8 14.5A1.5 1.5 0 0 1 6.5 16M18.92 6c-.2-.58-.76-1-1.42-1h-11c-.66 0-1.22.42-1.42 1L3 12v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8z"/></svg>'},{slug:"mdi:car-outline",label:"Car Outline",keywords:["car"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18.9 6c-.2-.6-.8-1-1.4-1h-11c-.7 0-1.2.4-1.4 1L3 12v8c0 .5.5 1 1 1h1c.6 0 1-.5 1-1v-1h12v1c0 .5.5 1 1 1h1c.5 0 1-.5 1-1v-8zM6.8 7h10.3l1.1 3H5.8zM19 17H5v-5h14zM7.5 13c.8 0 1.5.7 1.5 1.5S8.3 16 7.5 16S6 15.3 6 14.5S6.7 13 7.5 13m9 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5"/></svg>'},{slug:"tabler:car",label:"Car",keywords:["car"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"/><path d="M5 17H3v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0H9m-6-6h15m-6 0V6"/></g></svg>'},{slug:"mdi:tank",label:"Tank",keywords:["tank"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20 12H4v-1h2l1-5h5l1 5h7zm-6.78-5l.4 2H22V7zM22 16a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3M6 16a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1m7 0a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1m7 0a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1"/></svg>'},{slug:"tabler:tank",label:"Tank",keywords:["tank"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 15a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3m4-3l1-5h5l3 5m6-3h-7.8"/></svg>'},{slug:"mingcute:tank-fill",label:"Tank Fill",keywords:["tank"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M7 7a3 3 0 0 1 3-3h1.53a5 5 0 0 1 4.584 3H20a1 1 0 1 1 0 2h-3.418l.285 2h.633a4.5 4.5 0 1 1 0 9h-11a4.5 4.5 0 1 1 0-9H7z"/></g></svg>'},{slug:"mdi:truck",label:"Truck",keywords:["truck"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18 18.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m1.5-9l1.96 2.5H17V9.5m-11 9A1.5 1.5 0 0 1 4.5 17A1.5 1.5 0 0 1 6 15.5A1.5 1.5 0 0 1 7.5 17A1.5 1.5 0 0 1 6 18.5M20 8h-3V4H3c-1.11 0-2 .89-2 2v11h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-5z"/></svg>'},{slug:"mdi:truck-outline",label:"Truck Outline",keywords:["truck"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m1.5-9H17V12h4.46zM6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.11.89-2 2-2h14v4zM3 6v9h.76c.55-.61 1.35-1 2.24-1s1.69.39 2.24 1H15V6z"/></svg>'},{slug:"tabler:truck",label:"Truck",keywords:["truck"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"/><path d="M5 17H3V6a1 1 0 0 1 1-1h9v12m-4 0h6m4 0h2v-6h-8m0-5h5l3 5"/></g></svg>'},{slug:"material-symbols:rocket",label:"Rocket",keywords:["rocket"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 22v-5.925q0-.5.238-.95T4.9 14.4l1.1-.725q.175 2.1.55 3.575t1.175 3.275zm5.225-2q-.875-1.65-1.3-3.5T7.5 12.675q0-3.125 1.238-5.887T12 2.6q2.025 1.425 3.263 4.188t1.237 5.887q0 1.95-.425 3.788T14.775 20zm4.188-7.587Q14 11.825 14 11t-.587-1.412T12 9t-1.412.588T10 11t.588 1.413T12 13t1.413-.587M20 22l-3.725-1.475q.8-1.8 1.175-3.275t.55-3.575l1.1.725q.425.275.663.725t.237.95z"/></svg>'},{slug:"material-symbols:rocket-outline",label:"Rocket Outline",keywords:["rocket"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m6 19.05l1.975-.8q-.25-.725-.462-1.475t-.338-1.5l-1.175.8zM10 18h4q.45-1 .725-2.437T15 12.625q0-2.475-.825-4.687T12 4.525q-1.35 1.2-2.175 3.413T9 12.625q0 1.5.275 2.938T10 18m.588-5.587Q10 11.825 10 11t.588-1.412T12 9t1.413.588T14 11t-.587 1.413T12 13t-1.412-.587M18 19.05v-2.975l-1.175-.8q-.125.75-.337 1.5t-.463 1.475zM12 1.975q2.475 1.8 3.738 4.575T17 13l2.1 1.4q.425.275.663.725t.237.95V22l-4.975-2h-6.05L4 22v-5.925q0-.5.238-.95T4.9 14.4L7 13q0-3.675 1.263-6.45T12 1.975"/></svg>'},{slug:"material-symbols:rocket-outline-rounded",label:"Rocket Outline Rounded",keywords:["rocket"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7.975 18.25q-.25-.725-.462-1.475t-.338-1.5l-1.175.8v2.975zM11.65 4.875q-1.2 1.275-1.925 3.363T9 12.625q0 1.5.275 2.938T10 18h4q.45-1 .725-2.437T15 12.625q0-2.3-.725-4.387T12.35 4.875q-.075-.075-.162-.112T12 4.725t-.187.038t-.163.112M12 13q-.825 0-1.412-.587T10 11t.588-1.412T12 9t1.413.588T14 11t-.587 1.413T12 13m4.025 5.25l1.975.8v-2.975l-1.175-.8q-.125.75-.337 1.5t-.463 1.475M12.775 2.6q2.1 1.8 3.163 4.425T17 13l2.1 1.4q.425.275.663.725t.237.95v4.45q0 .525-.437.825t-.938.1l-3.6-1.45h-6.05l-3.6 1.45q-.5.2-.937-.1T4 20.525v-4.45q0-.5.238-.95T4.9 14.4L7 13q0-3.35 1.063-5.975T11.224 2.6q.175-.125.375-.2t.4-.075t.4.075t.375.2"/></svg>'},{slug:"material-symbols:drone",label:"Drone",keywords:["drone"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q0-1.875 1.025-3.363t2.65-2.162L7.425 12H4V6H1V4h8v2H6v4h1.2L7 8h10l-.2 2H18V6h-3V4h8.025v2h-3v6H16.6l-.25 2.475q1.625.675 2.638 2.163T20 20h-2q0-1.65-1.175-2.825T14 16h-4q-1.65 0-2.825 1.175T6 20z"/></svg>'},{slug:"material-symbols:drone-outline",label:"Drone Outline",keywords:["drone"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q0-1.875 1.025-3.363t2.65-2.162L7.425 12H4V6H1V4h8v2H6v4h1.2L7 8h10l-.2 2H18V6h-3V4h8.025v2h-3v6H16.6l-.25 2.475q1.625.675 2.638 2.163T20 20h-2q0-1.65-1.175-2.825T14 16h-4q-1.65 0-2.825 1.175T6 20zm5.625-6h4.725l.425-4H9.2zm0 0h4.725z"/></svg>'},{slug:"material-symbols:drone-outline-rounded",label:"Drone Outline Rounded",keywords:["drone"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10 16q-1.425 0-2.475.85T6.125 19q-.125.425-.413.713T5 20t-.7-.3t-.2-.7q.275-1.55 1.225-2.75t2.35-1.775L7.425 12H5q-.425 0-.713-.288T4 11V6H2q-.425 0-.712-.288T1 5t.288-.712T2 4h6q.425 0 .713.288T9 5t-.288.713T8 6H6v4h1.2l-.075-.9q-.05-.45.238-.775T8.1 8h7.8q.45 0 .738.325t.237.775l-.075.9H18V6h-2q-.425 0-.712-.288T15 5t.288-.712T16 4h6.025q.425 0 .713.288t.287.712t-.287.713t-.713.287h-2v5q0 .425-.287.713t-.713.287H16.6l-.25 2.475q1.4.575 2.35 1.775T19.925 19q.075.4-.212.7T19 20t-.712-.288t-.413-.712q-.35-1.3-1.412-2.15T14 16zm-.375-2h4.725l.425-4H9.2zm0 0h4.725z"/></svg>'},{slug:"material-symbols:gamepad",label:"Gamepad",keywords:["gamepad"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.5l-3-3V2h6v5.5zm4.5 4.5l-3-3l3-3H22v6zM2 15V9h5.5l3 3l-3 3zm7 7v-5.5l3-3l3 3V22z"/></svg>'},{slug:"material-symbols:gamepad-outline",label:"Gamepad Outline",keywords:["gamepad"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.5l-3-3V2h6v5.5zm4.5 4.5l-3-3l3-3H22v6zM2 15V9h5.5l3 3l-3 3zm7 7v-5.5l3-3l3 3V22zm3-14.35l1-1V4h-2v2.65zM4 13h2.65l1-1l-1-1H4zm7 7h2v-2.65l-1-1l-1 1zm6.35-7H20v-2h-2.65l-1 1z"/></svg>'},{slug:"material-symbols:gamepad-outline-rounded",label:"Gamepad Outline Rounded",keywords:["gamepad"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m11.3 9.8l-2-2q-.15-.15-.225-.337T9 7.075V3q0-.425.288-.712T10 2h4q.425 0 .713.288T15 3v4.075q0 .2-.075.388T14.7 7.8l-2 2q-.15.15-.325.213t-.375.062t-.375-.062T11.3 9.8m2.9 2.9q-.15-.15-.212-.325T13.925 12t.063-.375t.212-.325l2-2q.15-.15.338-.225T16.925 9H21q.425 0 .713.288T22 10v4q0 .425-.288.713T21 15h-4.075q-.2 0-.387-.075T16.2 14.7zM2 14v-4q0-.425.288-.712T3 9h4.075q.2 0 .388.075T7.8 9.3l2 2q.15.15.213.325t.062.375t-.062.375t-.213.325l-2 2q-.15.15-.337.225T7.075 15H3q-.425 0-.712-.288T2 14m7 7v-4.075q0-.2.075-.387T9.3 16.2l2-2q.15-.15.325-.212t.375-.063t.375.063t.325.212l2 2q.15.15.225.338t.075.387V21q0 .425-.288.713T14 22h-4q-.425 0-.712-.288T9 21m3-13.35l1-1V4h-2v2.65zM4 13h2.65l1-1l-1-1H4zm7 7h2v-2.65l-1-1l-1 1zm6.35-7H20v-2h-2.65l-1 1z"/></svg>'},{slug:"material-symbols:joystick",label:"Joystick",keywords:["joystick"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 8.275V7.85q-1.1-.325-1.8-1.237T8.5 4.5q0-1.45 1.025-2.475T12 1t2.475 1.025T15.5 4.5q0 1.2-.7 2.113T13 7.85v.425l7 4.025q.475.275.738.738T21 14.05v1.9q0 .55-.262 1.013T20 17.7l-7 4.025Q12.525 22 12 22t-1-.275L4 17.7q-.475-.275-.737-.737T3 15.95v-1.9q0-.55.263-1.012T4 12.3zM6.8 13l5.2 3l5.2-3l-4.2-2.425V14h-2v-3.425z"/></svg>'},{slug:"material-symbols:joystick-outline",label:"Joystick Outline",keywords:["joystick"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m6.8 13l5.2 3l5.2-3l-4.2-2.425V14h-2v-3.425zM11 8.275V7.85q-1.1-.325-1.8-1.238T8.5 4.5q0-1.45 1.025-2.475T12 1t2.475 1.025T15.5 4.5q0 1.2-.7 2.113T13 7.85v.425l7 4.025q.475.275.738.738T21 14.05v1.9q0 .55-.262 1.013T20 17.7l-7 4.025Q12.525 22 12 22t-1-.275L4 17.7q-.475-.275-.737-.737T3 15.95v-1.9q0-.55.263-1.012T4 12.3zm0 9.45l-6-3.45v1.675L12 20l7-4.05v-1.675l-6 3.45Q12.525 18 12 18t-1-.275m2.063-12.163q.437-.437.437-1.062t-.437-1.062T12 3t-1.062.438T10.5 4.5t.438 1.063T12 6t1.063-.437M12 20"/></svg>'},{slug:"material-symbols:joystick-outline-sharp",label:"Joystick Outline Sharp",keywords:["joystick"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 8.275V7.85q-1.1-.325-1.8-1.237T8.5 4.5q0-1.45 1.025-2.475T12 1t2.475 1.025T15.5 4.5q0 1.2-.7 2.113T13 7.85v.425l8 4.6v4.25l-8 4.6Q12.525 22 12 22t-1-.275l-8-4.6v-4.25zm-6 6v1.675L12 20l7-4.05v-1.675L12 18.3zm8.063-8.712q.437-.438.437-1.063t-.437-1.062T12 3t-1.062.438T10.5 4.5t.438 1.063T12 6t1.063-.437M6.8 13l5.2 3l5.2-3l-4.2-2.425V14h-2v-3.425z"/></svg>'},{slug:"mdi:battery",label:"Battery",keywords:["battery"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16.67 4H15V2H9v2H7.33A1.33 1.33 0 0 0 6 5.33v15.34C6 21.4 6.6 22 7.33 22h9.34A1.33 1.33 0 0 0 18 20.67V5.33C18 4.6 17.4 4 16.67 4"/></svg>'},{slug:"mdi:battery-outline",label:"Battery Outline",keywords:["battery"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16 20H8V6h8m.67-2H15V2H9v2H7.33A1.33 1.33 0 0 0 6 5.33v15.34C6 21.4 6.6 22 7.33 22h9.34A1.33 1.33 0 0 0 18 20.67V5.33C18 4.6 17.4 4 16.67 4"/></svg>'},{slug:"tabler:battery",label:"Battery",keywords:["battery"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 7h11a2 2 0 0 1 2 2v.5a.5.5 0 0 0 .5.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5a.5.5 0 0 0-.5.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2"/></svg>'},{slug:"material-symbols:bolt",label:"Bolt",keywords:["bolt"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m8 22l1-7H4l9-13h2l-1 8h6L10 22z"/></svg>'},{slug:"material-symbols:bolt-outline",label:"Bolt Outline",keywords:["bolt"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m10.55 18.2l5.175-6.2h-4l.725-5.675L7.825 13H11.3zM8 22l1-7H4l9-13h2l-1 8h6L10 22zm3.775-9.75"/></svg>'},{slug:"material-symbols:bolt-outline-rounded",label:"Bolt Outline Rounded",keywords:["bolt"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m10.55 18.2l5.175-6.2h-4l.725-5.675L7.825 13H11.3zM9 15H5.9q-.6 0-.888-.537t.063-1.038l7.475-10.75q.25-.35.65-.487t.825.012t.625.525t.15.8L14 10h3.875q.65 0 .913.575t-.163 1.075L10.4 21.5q-.275.325-.675.425t-.775-.075t-.587-.537t-.163-.788zm2.775-2.75"/></svg>'},{slug:"material-symbols:bluetooth",label:"Bluetooth",keywords:["bluetooth"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 22v-7.6L6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5L11 9.6V2h1l5.7 5.7l-4.3 4.3l4.3 4.3L12 22zm2-12.4l1.9-1.9L13 5.85zm0 8.55l1.9-1.85l-1.9-1.9z"/></svg>'},{slug:"material-symbols:bluetooth-rounded",label:"Bluetooth Rounded",keywords:["bluetooth"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 20.575V14.4l-3.9 3.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275L11 9.6V3.425q0-.45.3-.737T12 2.4q.2 0 .375.075t.325.225L17 7q.15.15.213.325t.062.375t-.062.375T17 8.4L13.4 12l3.6 3.6q.15.15.213.325t.062.375t-.062.375T17 17l-4.3 4.3q-.15.15-.325.225T12 21.6q-.4 0-.7-.288t-.3-.737M13 9.6l1.9-1.9L13 5.85zm0 8.55l1.9-1.85l-1.9-1.9z"/></svg>'},{slug:"mdi:bluetooth",label:"Bluetooth",keywords:["bluetooth"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14.88 16.29L13 18.17v-3.76m0-8.58l1.88 1.88L13 9.58m4.71-1.87L12 2h-1v7.58L6.41 5L5 6.41L10.59 12L5 17.58L6.41 19L11 14.41V22h1l5.71-5.71l-4.3-4.29z"/></svg>'},{slug:"material-symbols:wifi",label:"Wifi",keywords:["wifi"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.225 20.275Q9.5 19.55 9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21t-1.775-.725M6.35 15.35l-2.1-2.15q1.475-1.475 3.463-2.337T12 10t4.288.875t3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725T12 13t-3.1.625t-2.55 1.725M2.1 11.1L0 9q2.3-2.35 5.375-3.675T12 4t6.625 1.325T24 9l-2.1 2.1q-1.925-1.925-4.462-3.012T12 7T6.563 8.088T2.1 11.1"/></svg>'},{slug:"material-symbols:wifi-rounded",label:"Wifi Rounded",keywords:["wifi"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.225 20.275Q9.5 19.55 9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21t-1.775-.725m5.338-9.675q1.687.6 3.062 1.65q.5.375.513.988T18.7 14.3q-.425.425-1.05.438t-1.125-.338q-.95-.65-2.1-1.025T12 13t-2.425.375t-2.1 1.025q-.5.35-1.125.325t-1.05-.45q-.425-.45-.425-1.062t.5-.988q1.375-1.05 3.063-1.638T12 10t3.563.6m2.324-5.575q2.763 1.025 4.963 2.9q.5.425.525 1.05t-.425 1.075q-.425.425-1.05.438t-1.125-.388q-1.8-1.475-4.037-2.287T12 7t-4.737.813T3.225 10.1q-.5.4-1.125.388t-1.05-.438Q.6 9.6.625 8.975t.525-1.05q2.2-1.875 4.963-2.9T12 4t5.888 1.025"/></svg>'},{slug:"material-symbols:wifi-sharp",label:"Wifi Sharp",keywords:["wifi"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m6.35 15.35l-2.1-2.15q1.55-1.55 3.55-2.375T12 10t4.213.838t3.537 2.412l-2.1 2.1q-1.125-1.125-2.588-1.737T12 13t-3.062.613T6.35 15.35M2.1 11.1L0 9q2.375-2.425 5.488-3.713T12 4t6.513 1.288T24 9l-2.1 2.1q-1.975-1.975-4.538-3.037T12 7T6.637 8.063T2.1 11.1M12 21l-3.525-3.55q.7-.7 1.613-1.075T12 16t1.913.375t1.612 1.075z"/></svg>'},{slug:"mdi:antenna",label:"Antenna",keywords:["antenna"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 7.5c.69 0 1.27.23 1.76.7s.74 1.07.74 1.8q0 1.575-1.5 2.28V21h-2v-8.72Q9.5 11.575 9.5 10c0-.73.26-1.33.74-1.8s1.07-.7 1.76-.7m4.69-2.2c1.25 1.25 1.92 2.81 2.01 4.7c0 1.8-.67 3.38-2.01 4.72L15.5 13.5c1-.91 1.5-2.08 1.5-3.5c0-1.33-.5-2.5-1.5-3.5zM6.09 4.08C4.5 5.67 3.7 7.64 3.7 10s.8 4.3 2.39 5.89l-1.17 1.22C3 15.08 2 12.7 2 10s1-5.06 2.92-7.09zm12.99-1.17C21 4.94 22 7.3 22 10c0 2.8-1 5.17-2.92 7.11l-1.17-1.22C19.5 14.3 20.3 12.33 20.3 10s-.8-4.33-2.39-5.92zM7.31 5.3L8.5 6.5C7.5 7.42 7 8.58 7 10c0 1.33.5 2.5 1.5 3.5l-1.19 1.22C5.97 13.38 5.3 11.8 5.3 10s.67-3.36 2.01-4.7"/></svg>'},{slug:"tabler:antenna",label:"Antenna",keywords:["antenna"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 4v8m-4-7.5v7M12 5v16M8 5.5v5M4 6v4m16-2H4"/></svg>'},{slug:"lucide:antenna",label:"Antenna",keywords:["antenna"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12L7 2m0 10l5-10m0 10l5-10m0 10l5-10M4.5 7h15M12 16v6"/></svg>'},{slug:"mdi:led-outline",label:"Led Outline",keywords:["led"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4m0 2a2 2 0 0 1 2 2v5h-4v-5a2 2 0 0 1 2-2"/></svg>'},{slug:"mdi:led-on",label:"Led On",keywords:["led"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 0v4h2V0zm7.3 2.29l-3.06 3l1.4 1.42l3.06-3zm-12.59 0L4.29 3.71l3 3l1.42-1.42zM12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4M2 9v2h4V9zm16 0v2h4V9z"/></svg>'},{slug:"mdi:led-off",label:"Led Off",keywords:["led"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4"/></svg>'},{slug:"tabler:bulb",label:"Bulb",keywords:["bulb"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h1m8-9v1m8 8h1M5.6 5.6l.7.7m12.1-.7l-.7.7M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0-1 3a2 2 0 0 1-4 0a3.5 3.5 0 0 0-1-3m.7 1h4.6"/></svg>'},{slug:"tabler:bulb-filled",label:"Bulb Filled",keywords:["bulb"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 11a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm8-9a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1m9 9a1 1 0 0 1 .117 1.993L21 13h-1a1 1 0 0 1-.117-1.993L20 11zM4.893 4.893a1 1 0 0 1 1.32-.083l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7a1 1 0 0 1 0-1.414m12.8 0a1 1 0 0 1 1.497 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094zM14 18a1 1 0 0 1 1 1a3 3 0 0 1-6 0a1 1 0 0 1 .883-.993L10 18zM12 6a6 6 0 0 1 3.6 10.8a1 1 0 0 1-.471.192L15 17H9a1 1 0 0 1-.6-.2A6 6 0 0 1 12 6"/></svg>'},{slug:"mingcute:bulb-fill",label:"Bulb Fill",keywords:["bulb"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M13 20a1 1 0 0 1 .117 1.993L13 22h-2a1 1 0 0 1-.117-1.993L11 20zM12 2c4.41 0 8 3.543 8 7.933c0 3.006-1.522 5.196-2.78 6.494l-.284.283l-.27.252l-.252.22l-.33.27l-.328.244c-.241.17-.403.419-.55.678l-.205.364c-.238.41-.517.762-1.108.762h-3.786c-.59 0-.87-.351-1.108-.762l-.118-.208c-.172-.312-.348-.63-.637-.834l-.232-.171l-.199-.155l-.227-.188l-.252-.22l-.27-.252l-.285-.283C5.522 15.129 4 12.939 4 9.933C4 5.543 7.59 2 12 2m1.707 4.293a1 1 0 0 0-1.32-.083l-.094.083L10.3 8.286a1.01 1.01 0 0 0-.084 1.333l.084.095L11.586 11l-1.293 1.293a1 1 0 0 0 1.32 1.497l.094-.083l1.993-1.993a1.01 1.01 0 0 0 .084-1.333l-.084-.095L12.414 9l1.293-1.293a1 1 0 0 0 0-1.414"/></g></svg>'},{slug:"ph:x-light",label:"X Light",keywords:["light"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M204.24 195.76a6 6 0 1 1-8.48 8.48L128 136.49l-67.76 67.75a6 6 0 0 1-8.48-8.48L119.51 128L51.76 60.24a6 6 0 0 1 8.48-8.48L128 119.51l67.76-67.75a6 6 0 0 1 8.48 8.48L136.49 128Z"/></svg>'},{slug:"ph:at-light",label:"At Light",keywords:["light"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M128 26a102 102 0 0 0 0 204c21.13 0 43.31-6.35 59.32-17a6 6 0 0 0-6.65-10c-13.9 9.25-34.09 15-52.67 15a90 90 0 1 1 90-90c0 29.58-13.78 34-22 34s-22-4.42-22-34V88a6 6 0 0 0-12 0v9a46 46 0 1 0 4.34 56.32C171.76 166.6 182 174 196 174c21.29 0 34-17.2 34-46A102.12 102.12 0 0 0 128 26m0 136a34 34 0 1 1 34-34a34 34 0 0 1-34 34"/></svg>'},{slug:"ph:pi-light",label:"Pi Light",keywords:["light"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M230 172a34 34 0 0 1-68 0V70H94v130a6 6 0 0 1-12 0V70H72a42 42 0 0 0-42 42a6 6 0 0 1-12 0a54.06 54.06 0 0 1 54-54h152a6 6 0 0 1 0 12h-50v102a22 22 0 0 0 44 0a6 6 0 0 1 12 0"/></svg>'},{slug:"mdi:lamp",label:"Lamp",keywords:["lamp"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8 2h8l4 12H4zm3 13h2v5h5v2H6v-2h5z"/></svg>'},{slug:"mdi:lamp-outline",label:"Lamp Outline",keywords:["lamp"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m14.56 4l2.67 8H6.78l2.66-8zM16 2H8L4 14h16zm-5 13h2v5h5v2H6v-2h5z"/></svg>'},{slug:"solar:lamp-bold",label:"Lamp Bold",keywords:["lamp"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6.667 3.151c-.786.775-1.09 1.948-1.699 4.294l-.084.324c-.828 3.189-1.242 4.783-.49 5.903q.112.168.247.319C5.536 15 7.183 15 10.477 15h.779v6.25h-2.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25V15h.78c1.32 0 2.374 0 3.223-.065l-.003.065v2a.75.75 0 1 0 1.5 0v-2.318c.468-.15.83-.369 1.116-.691q.135-.15.247-.32c.752-1.12.338-2.713-.49-5.902l-.084-.324c-.609-2.346-.913-3.519-1.7-4.294a4 4 0 0 0-.756-.585C15.64 2 14.429 2 12.007 2c-2.424 0-3.635 0-4.583.566a4 4 0 0 0-.757.585"/></svg>'},{slug:"mdi:flash",label:"Flash",keywords:["flash"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>'},{slug:"mdi:flash-outline",label:"Flash Outline",keywords:["flash"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 2h10l-3.5 7H17l-7 13v-8H7zm2 2v8h3v2.66L14 11h-3.76l3.52-7z"/></svg>'},{slug:"mingcute:flash-fill",label:"Flash Fill",keywords:["flash"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M13.232 1.36c.632-.758 1.863-.24 1.763.742L14.289 9H20a1 1 0 0 1 .768 1.64l-10 12c-.632.758-1.863.24-1.763-.742L9.711 15H4a1 1 0 0 1-.768-1.64z"/></g></svg>'},{slug:"mdi:temperature",label:"Temperature",keywords:["temperature"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15 13V5a3 3 0 0 0-6 0v8a5 5 0 1 0 6 0m-3-9a1 1 0 0 1 1 1v3h-2V5a1 1 0 0 1 1-1"/></svg>'},{slug:"solar:temperature-bold",label:"Temperature Bold",keywords:["temperature"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M17.5 16.5a5.5 5.5 0 1 1-8.939-4.293c.264-.211.439-.521.439-.86V5a3 3 0 1 1 6 0v6.348c0 .338.175.648.439.86A5.49 5.49 0 0 1 17.5 16.5M12 4.25a.75.75 0 0 1 .75.75v8.38c0 .437.297.808.658 1.054a2.5 2.5 0 1 1-2.816 0c.36-.246.658-.617.658-1.054V5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>'},{slug:"solar:temperature-bold-duotone",label:"Temperature Bold Duotone",keywords:["temperature"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 16.5a5.5 5.5 0 1 1-8.939-4.293c.264-.211.439-.521.439-.86V5a3 3 0 1 1 6 0v6.348c0 .338.175.648.439.86A5.49 5.49 0 0 1 17.5 16.5" opacity=".5"/><path fill="currentColor" d="M12.75 5a.75.75 0 0 0-1.5 0v8.38c0 .437-.297.808-.658 1.054a2.5 2.5 0 1 0 2.816 0c-.36-.246-.658-.617-.658-1.054z"/></svg>'},{slug:"material-symbols:thermometer",label:"Thermometer",keywords:["thermometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-2.075 0-3.537-1.463T7 16q0-1.2.525-2.238T9 12V6q0-1.25.875-2.125T12 3t2.125.875T15 6v6q.95.725 1.475 1.763T17 16q0 2.075-1.463 3.538T12 21m-1-11h2V6q0-.425-.288-.712T12 5t-.712.288T11 6z"/></svg>'},{slug:"material-symbols:thermometer-outline",label:"Thermometer Outline",keywords:["thermometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-2.075 0-3.537-1.463T7 16q0-1.2.525-2.238T9 12V6q0-1.25.875-2.125T12 3t2.125.875T15 6v6q.95.725 1.475 1.763T17 16q0 2.075-1.463 3.538T12 21m0-2q1.25 0 2.125-.875T15 16q0-.725-.312-1.35T13.8 13.6L13 13V6q0-.425-.288-.712T12 5t-.712.288T11 6v7l-.8.6q-.575.425-.888 1.05T9 16q0 1.25.875 2.125T12 19m0-3"/></svg>'},{slug:"mdi:thermometer",label:"Thermometer",keywords:["thermometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15 13V5a3 3 0 0 0-6 0v8a5 5 0 1 0 6 0m-3-9a1 1 0 0 1 1 1v3h-2V5a1 1 0 0 1 1-1"/></svg>'},{slug:"mdi:gauge",label:"Gauge",keywords:["gauge"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8c0 2.4-1 4.5-2.7 6c-1.4-1.3-3.3-2-5.3-2s-3.8.7-5.3 2C5 16.5 4 14.4 4 12a8 8 0 0 1 8-8m2 1.89c-.38.01-.74.26-.9.65l-1.29 3.23l-.1.23c-.71.13-1.3.6-1.57 1.26c-.41 1.03.09 2.19 1.12 2.6s2.19-.09 2.6-1.12c.26-.66.14-1.42-.29-1.98l.1-.26l1.29-3.21l.01-.03c.2-.51-.05-1.09-.56-1.3c-.13-.05-.26-.07-.41-.07M10 6a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M7 9a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m10 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"/></svg>'},{slug:"tabler:gauge",label:"Gauge",keywords:["gauge"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"/><path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m2.41-1.41L16 8m-9 4a5 5 0 0 1 5-5"/></g></svg>'},{slug:"tabler:gauge-filled",label:"Gauge Filled",keywords:["gauge"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34m-.293 3.953a1 1 0 0 0-1.414 0l-2.59 2.59l-.083.094l-.068.1a2 2 0 0 0-2.547 1.774L10 12l.005.15a2 2 0 1 0 3.917-.701a1 1 0 0 0 .195-.152l2.59-2.59l.083-.094a1 1 0 0 0-.083-1.32M12 6a6 6 0 0 0-6 6a1 1 0 0 0 2 0a4 4 0 0 1 4-4a1 1 0 0 0 0-2"/></svg>'},{slug:"mdi:speedometer",label:"Speedometer",keywords:["speedometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16a3 3 0 0 1-3-3c0-1.12.61-2.1 1.5-2.61l9.71-5.62l-5.53 9.58c-.5.98-1.51 1.65-2.68 1.65m0-13c1.81 0 3.5.5 4.97 1.32l-2.1 1.21C14 5.19 13 5 12 5a8 8 0 0 0-8 8c0 2.21.89 4.21 2.34 5.65h.01c.39.39.39 1.02 0 1.41s-1.03.39-1.42.01A9.97 9.97 0 0 1 2 13A10 10 0 0 1 12 3m10 10c0 2.76-1.12 5.26-2.93 7.07c-.39.38-1.02.38-1.41-.01a.996.996 0 0 1 0-1.41A7.95 7.95 0 0 0 20 13c0-1-.19-2-.54-2.9L20.67 8C21.5 9.5 22 11.18 22 13"/></svg>'},{slug:"ph:speedometer",label:"Speedometer",keywords:["speedometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="m114.34 154.34l96-96a8 8 0 0 1 11.32 11.32l-96 96a8 8 0 0 1-11.32-11.32M128 88a63.9 63.9 0 0 1 20.44 3.33a8 8 0 1 0 5.11-15.16a80 80 0 0 0-105.06 84.71a8 8 0 0 0 7.94 7.12c.29 0 .59 0 .89-.05a8 8 0 0 0 7.07-8.83A65 65 0 0 1 64 152a64.07 64.07 0 0 1 64-64m99.74 13a8 8 0 0 0-14.24 7.3a96.27 96.27 0 0 1 5 75.71l-181.1-.07A96.24 96.24 0 0 1 128 56h.88a95 95 0 0 1 42.82 10.5a8 8 0 1 0 7.3-14.23a112 112 0 0 0-156.66 137A16.07 16.07 0 0 0 37.46 200h181.07a16 16 0 0 0 15.11-10.71a112.35 112.35 0 0 0-5.9-88.3Z"/></svg>'},{slug:"ph:speedometer-bold",label:"Speedometer Bold",keywords:["speedometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="m119.51 143.51l88-88a12 12 0 1 1 17 17l-88 88a12 12 0 1 1-17-17m14.23-43.2a12 12 0 1 0 2.62-23.85A75 75 0 0 0 128 76a76.08 76.08 0 0 0-76 76a12 12 0 0 0 24 0a52.06 52.06 0 0 1 52-52a55 55 0 0 1 5.74.31m101.54 7.5a12 12 0 0 0-22.19 9.19a92.47 92.47 0 0 1 2.58 63H40.34A92.23 92.23 0 0 1 128 60h.84a91.4 91.4 0 0 1 34.2 6.91a12 12 0 0 0 9.14-22.19A116.07 116.07 0 0 0 18.57 190.58A20.09 20.09 0 0 0 37.46 204h181.07a20.06 20.06 0 0 0 18.88-13.38a116.4 116.4 0 0 0-2.13-82.81"/></svg>'},{slug:"material-symbols:radar",label:"Radar",keywords:["radar"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8.1 21.213q-1.825-.788-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22t-3.9-.788M12 20q1.4 0 2.638-.437t2.262-1.238L15.475 16.9q-.725.525-1.612.813T12 18q-2.5 0-4.25-1.75T6 12t1.75-4.25T12 6t4.25 1.75T18 12q0 .975-.3 1.875t-.825 1.625l1.425 1.425q.8-1.025 1.25-2.275T20 12q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-4q.55 0 1.063-.137t.962-.413L12.5 13.925q-.125.05-.25.063T12 14q-.825 0-1.412-.587T10 12t.588-1.412T12 10t1.413.588T14 12q0 .15-.012.288t-.063.262l1.5 1.5q.275-.45.425-.962T16 12q0-1.65-1.175-2.825T12 8T9.175 9.175T8 12t1.175 2.825T12 16"/></svg>'},{slug:"mdi:radar",label:"Radar",keywords:["radar"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m19.07 4.93l-1.41 1.41A8 8 0 0 1 20 12a8 8 0 0 1-8 8a8 8 0 0 1-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12a6 6 0 0 0 6 6a6 6 0 0 0 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12a4 4 0 0 1-4 4a4 4 0 0 1-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.74-.4-1.38-1-1.72V2h-1A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-2.76-1.12-5.26-2.93-7.07"/></svg>'},{slug:"solar:radar-bold",label:"Radar Bold",keywords:["radar"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-8.642-5.07a5.2 5.2 0 0 0-2.232-.107a.75.75 0 0 1-.252-1.478a6.749 6.749 0 1 1-4.519 2.953c.453-.69 1.358-.733 1.92-.279l4.197 3.398a.75.75 0 1 1-.944 1.166L7.49 9.313a5.249 5.249 0 1 0 5.87-2.384" clip-rule="evenodd"/></svg>'},{slug:"mdi:compass",label:"Compass",keywords:["compass"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14.19 14.19L6 18l3.81-8.19L18 6m-6-4A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 8.9a1.1 1.1 0 0 0-1.1 1.1a1.1 1.1 0 0 0 1.1 1.1a1.1 1.1 0 0 0 1.1-1.1a1.1 1.1 0 0 0-1.1-1.1"/></svg>'},{slug:"mdi:compass-outline",label:"Compass Outline",keywords:["compass"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m7 17l3.2-6.8L17 7l-3.2 6.8zm5-5.9a.9.9 0 0 0-.9.9a.9.9 0 0 0 .9.9a.9.9 0 0 0 .9-.9a.9.9 0 0 0-.9-.9M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"/></svg>'},{slug:"solar:compass-bold",label:"Compass Bold",keywords:["compass"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1.956-7.905c-.193.17-.44.268-.932.465c-2.31.924-3.465 1.386-4.124.938a1.5 1.5 0 0 1-.398-.398c-.448-.66.014-1.814.938-4.124c.197-.493.295-.74.465-.933q.065-.073.139-.138c.193-.17.44-.268.932-.465c2.31-.924 3.464-1.386 4.124-.938a1.5 1.5 0 0 1 .398.398c.448.66-.014 1.814-.938 4.124c-.197.493-.295.739-.465.932q-.065.075-.139.139" clip-rule="evenodd"/></svg>'},{slug:"tabler:map-pin",label:"Map Pin",keywords:["map-pin"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0"/><path d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0"/></g></svg>'},{slug:"tabler:map-pin-filled",label:"Map Pin Filled",keywords:["map-pin"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21l-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135l-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6"/></svg>'},{slug:"mingcute:map-pin-fill",label:"Map Pin Fill",keywords:["map-pin"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M7 7a5 5 0 1 1 6 4.9V17a1 1 0 1 1-2 0v-5.1A5 5 0 0 1 7 7m2.489 9.1a1 1 0 0 1-.838 1.14c-1.278.195-2.293.489-2.96.815c-.335.164-.534.313-.637.422l-.021.023c.033.039.09.096.19.169c.28.207.749.435 1.418.644C7.968 19.728 9.863 20 12 20s4.032-.272 5.359-.687c.67-.209 1.138-.437 1.418-.644c.1-.073.157-.13.19-.169l-.021-.023c-.103-.109-.302-.258-.637-.422c-.667-.326-1.682-.62-2.96-.815a1 1 0 1 1 .301-1.977c1.388.21 2.622.547 3.539.996c.457.224.884.5 1.208.842c.33.347.603.82.603 1.399c0 .811-.524 1.4-1.034 1.777c-.53.392-1.233.702-2.01.945c-1.57.49-3.674.778-5.956.778s-4.387-.288-5.955-.778c-.778-.243-1.48-.553-2.01-.945C3.524 19.9 3 19.311 3 18.5c0-.58.273-1.052.603-1.4c.325-.342.751-.617 1.208-.84c.917-.45 2.152-.786 3.538-.997a1 1 0 0 1 1.14.838Z"/></g></svg>'},{slug:"mdi:ruler",label:"Ruler",keywords:["ruler"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m1.39 18.36l1.77-1.76L4.58 18l1.06-1.05l-1.42-1.41l1.42-1.42l2.47 2.48l1.06-1.06l-2.47-2.48l1.41-1.41l1.42 1.41L10.59 12l-1.42-1.41l1.42-1.42l2.47 2.48l1.06-1.06l-2.47-2.48l1.41-1.41l1.41 1.41l1.07-1.06l-1.42-1.41l1.42-1.42L18 6.7l1.07-1.06l-2.47-2.48l1.76-1.77l4.25 4.25L5.64 22.61z"/></svg>'},{slug:"solar:ruler-bold",label:"Ruler Bold",keywords:["ruler"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 15.616c0 .847.682 1.529 2.045 2.892l1.447 1.447C6.855 21.318 7.537 22 8.384 22s1.53-.682 2.893-2.045l8.678-8.678C21.318 9.913 22 9.23 22 8.384s-.682-1.529-2.045-2.892l-1.447-1.447C17.145 2.682 16.463 2 15.616 2c-.754 0-1.376.54-2.464 1.618q.045.033.085.073l1.415 1.415a.75.75 0 1 1-1.061 1.06l-1.414-1.414a1 1 0 0 1-.074-.086L11.03 5.739q.045.033.086.074l2.121 2.121a.75.75 0 1 1-1.06 1.06l-2.122-2.12a1 1 0 0 1-.074-.087L8.91 7.86q.044.033.086.074l1.414 1.414a.75.75 0 0 1-1.06 1.06L7.933 8.996a1 1 0 0 1-.074-.086L6.787 9.98q.046.033.086.074l2.122 2.122a.75.75 0 0 1-1.061 1.06l-2.121-2.121a1 1 0 0 1-.074-.086l-1.073 1.073q.045.032.086.074l1.414 1.414a.75.75 0 0 1-1.06 1.06L3.69 13.238a1 1 0 0 1-.073-.085C2.539 14.24 2 14.862 2 15.616"/></svg>'},{slug:"solar:ruler-bold-duotone",label:"Ruler Bold Duotone",keywords:["ruler"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 15.616c0 .847.682 1.529 2.045 2.892l1.447 1.447C6.855 21.318 7.537 22 8.384 22s1.53-.682 2.893-2.045l8.678-8.678C21.318 9.913 22 9.23 22 8.384s-.682-1.529-2.045-2.892l-1.447-1.447C17.145 2.682 16.463 2 15.616 2c-.754 0-1.376.54-2.464 1.618l-1.05 1.048l-1.072 1.073l-1.05 1.048L8.91 7.86L7.86 8.909L6.788 9.98L5.74 11.03l-1.073 1.073l-1.048 1.049C2.539 14.24 2 14.862 2 15.616" opacity=".5"/><path fill="currentColor" d="M13.238 3.691a1 1 0 0 0-.086-.073l-1.049 1.048q.033.045.074.086l1.414 1.414a.75.75 0 0 0 1.06-1.06zm-2.122 2.122a1 1 0 0 0-.086-.074L9.982 6.787q.033.045.074.086l2.121 2.122a.75.75 0 0 0 1.06-1.061zM8.995 7.934a1 1 0 0 0-.086-.074L7.86 8.908q.033.046.074.087l1.415 1.414a.75.75 0 1 0 1.06-1.06zm-2.121 2.121a1 1 0 0 0-.086-.074L5.739 11.03q.033.045.074.086l2.121 2.121a.75.75 0 1 0 1.061-1.06zm-2.122 2.122a1 1 0 0 0-.086-.075l-1.048 1.05q.033.045.074.085l1.414 1.414a.75.75 0 1 0 1.06-1.06z"/></svg>'},{slug:"material-symbols:settings",label:"Settings",keywords:["settings"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5"/></svg>'},{slug:"material-symbols:settings-outline",label:"Settings Outline",keywords:["settings"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zM11 20h1.975l.35-2.65q.775-.2 1.438-.587t1.212-.938l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.737T17.5 12t-.05-.787t-.175-.738l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.962t-1.438-.588L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.963t1.437.587zm1.05-4.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5M12 12"/></svg>'},{slug:"material-symbols:settings-outline-rounded",label:"Settings Outline Rounded",keywords:["settings"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.825 22q-.675 0-1.162-.45t-.588-1.1L8.85 18.8q-.325-.125-.612-.3t-.563-.375l-1.55.65q-.625.275-1.25.05t-.975-.8l-1.175-2.05q-.35-.575-.2-1.225t.675-1.075l1.325-1Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337l-1.325-1Q2.675 9.9 2.525 9.25t.2-1.225L3.9 5.975q.35-.575.975-.8t1.25.05l1.55.65q.275-.2.575-.375t.6-.3l.225-1.65q.1-.65.588-1.1T10.825 2h2.35q.675 0 1.163.45t.587 1.1l.225 1.65q.325.125.613.3t.562.375l1.55-.65q.625-.275 1.25-.05t.975.8l1.175 2.05q.35.575.2 1.225t-.675 1.075l-1.325 1q.025.175.025.338v.674q0 .163-.05.338l1.325 1q.525.425.675 1.075t-.2 1.225l-1.2 2.05q-.35.575-.975.8t-1.25-.05l-1.5-.65q-.275.2-.575.375t-.6.3l-.225 1.65q-.1.65-.587 1.1t-1.163.45zM11 20h1.975l.35-2.65q.775-.2 1.438-.587t1.212-.938l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.737T17.5 12t-.05-.787t-.175-.738l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.962t-1.438-.588L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.963t1.437.587zm1.05-4.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.487 1.025T8.55 12t1.013 2.475T12.05 15.5M12 12"/></svg>'},{slug:"tabler:tool",label:"Tool",keywords:["tool"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10h3V7L6.5 3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1-3 3l-6-6a6 6 0 0 1-8-8z"/></svg>'},{slug:"mingcute:tool-fill",label:"Tool Fill",keywords:["tool"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M7.527 2.657a7.001 7.001 0 0 1 8.26 9.347l4.599 3.893a3.3 3.3 0 1 1-4.651 4.65l-3.891-4.597a7.001 7.001 0 0 1-9.35-8.26a1.01 1.01 0 0 1 1.72-.432l3.045 3.307l2.297-.845l.847-2.3l-3.309-3.04a1.01 1.01 0 0 1 .433-1.723"/></g></svg>'},{slug:"mingcute:tool-line",label:"Tool Line",keywords:["tool"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M6.798 2.884a7.002 7.002 0 0 1 9.294 8.565l4.394 3.718a3.76 3.76 0 1 1-5.3 5.3l-3.717-4.394a7.002 7.002 0 0 1-8.565-9.295c.358-.894 1.48-1.007 2.063-.373L8.17 9.883l1.446-.288l.29-1.449l-3.48-3.198c-.634-.583-.522-1.706.373-2.064ZM8.805 4.42l2.763 2.54c.322.296.466.738.38 1.165l-.47 2.354a1.25 1.25 0 0 1-.982.981l-2.35.467a1.25 1.25 0 0 1-1.164-.38L4.438 8.785a5.002 5.002 0 0 0 6.804 5.25a1.26 1.26 0 0 1 1.422.355l4.05 4.786a1.76 1.76 0 1 0 2.48-2.48l-4.785-4.05a1.26 1.26 0 0 1-.355-1.422a5 5 0 0 0-5.25-6.804Z"/></g></svg>'},{slug:"mdi:wrench",label:"Wrench",keywords:["wrench"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9c-2-2-5-2.4-7.4-1.3L9 6L6 9L1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4"/></svg>'},{slug:"mdi:wrench-outline",label:"Wrench Outline",keywords:["wrench"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m22.61 19l-9.08-9.09c.93-2.34.47-5.1-1.44-7C9.79.61 6.21.4 3.66 2.26L7.5 6.11L6.08 7.5L2.25 3.69C.39 6.23.6 9.82 2.9 12.11c1.86 1.86 4.57 2.35 6.89 1.48l9.11 9.11c.39.39 1.02.39 1.41 0l2.3-2.3c.39-.4.39-1.01 0-1.4m-3 1.59l-9.46-9.46c-.61.45-1.29.72-2 .82c-1.36.2-2.79-.21-3.83-1.25C3.37 9.76 2.93 8.5 3 7.26l3.09 3.09l4.24-4.24L7.24 3c1.26-.05 2.49.39 3.44 1.33a4.47 4.47 0 0 1 1.24 3.96a4.35 4.35 0 0 1-.88 1.96l9.46 9.45z"/></svg>'},{slug:"ri:wrench-fill",label:"Wrench Fill",keywords:["wrench"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19.249 6.872a1 1 0 0 1 1.645.36a7.001 7.001 0 0 1-8.912 9.037l-4.013 4.013a3 3 0 1 1-4.243-4.243l4.013-4.013a7 7 0 0 1 9.025-8.917a1 1 0 0 1 .36 1.645L14.768 7.11a1.5 1.5 0 0 0 2.121 2.122z"/></svg>'},{slug:"mdi:screwdriver",label:"Screwdriver",keywords:["screwdriver"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18 1.83c-.5 0-1 .17-1.41.58L8 11l1.5 1.5L6 16H4l-2 4l2 2l4-2v-2l3.5-3.5L13 16l8.59-8.59c.62-.91.78-2.04 0-2.82l-2.18-2.18A1.95 1.95 0 0 0 18 1.83M18 4l2 2l-7 7l-2-2z"/></svg>'}],lf="./",tc=ig.map(i=>({slug:i.slug,label:i.label,keywords:i.keywords,svg:i.svg})),sg=Object.fromEntries(tc.map(i=>[i.slug,i.svg])),Dl="grommet-icons:raspberry";function ys(i){return`data:image/svg+xml,${encodeURIComponent(i)}`}function af(i){return sg[i]??null}const og=`${lf}art/logo.png`,cg=`${lf}art/Teknologiskolen_logo.png`,ug=`${lf}art/logo_teknologiskolen_white.png`,dg={menu:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]}),user:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),settings:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),info:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),u.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),help:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),u.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),debugger:u.jsx(u.Fragment,{children:u.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),edit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),u.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),picoIde:u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),u.jsx("path",{d:"M8 9l-3 3 3 3"}),u.jsx("path",{d:"M16 9l3 3-3 3"}),u.jsx("line",{x1:"13",y1:"8",x2:"11",y2:"16"})]}),exit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),plus:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),delete:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),u.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),power:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),u.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),save:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),u.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),u.jsx("polyline",{points:"7 3 7 8 15 8"})]}),upload:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),u.jsx("polyline",{points:"17 8 12 3 7 8"}),u.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),refresh:u.jsxs(u.Fragment,{children:[u.jsx("polyline",{points:"23 4 23 10 17 10"}),u.jsx("polyline",{points:"1 20 1 14 7 14"}),u.jsx("path",{d:"M3.5 9a9 9 0 0 1 14.9-3.4L23 10"}),u.jsx("path",{d:"M20.5 15a9 9 0 0 1-14.9 3.4L1 14"})]}),package:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),u.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),u.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),back:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),u.jsx("polyline",{points:"12 19 5 12 12 5"})]})};function Lt({name:i,size:l=24,className:o}){return u.jsx("svg",{width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:o,"aria-hidden":"true",children:dg[i]})}let ae=null,cs=null,Rm=0,Pr=!1;function fg(){return new Date().toLocaleTimeString("da-DK",{hour12:!1})}function Am(i){return new Promise(l=>setTimeout(l,i))}function Od(i,l){const o=l.userID.toLowerCase();return i.map(s=>{if(!s.ownerID)return s;const d=s.ownerID.toLowerCase()===o;return{...s,isOwnedByMe:d,ownerName:d?l.username:s.ownerName}})}function Ld(i,l){return(i.name?xh(i.name):"")||(l==null?void 0:l.deviceName)||"Pico"}function mg(i){return Object.fromEntries(i.filter(l=>l.type==="toggle").map(l=>[l.name,!!l.toggleInitial]))}function Cm(i,l){const o=mg(i);for(const s of i)s.type==="toggle"&&l[s.name]!==void 0&&(o[s.name]=l[s.name]);return o}const le=A2((i,l)=>{function o(h,g){i(b=>({logs:[{level:h,message:g,time:fg()},...b.logs].slice(0,200)}))}function s(h){cs&&clearTimeout(cs),Rm+=1,i({toast:{message:h,id:Rm}}),cs=setTimeout(()=>i({toast:null}),4500)}function d(h=null){i({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},plotSeries:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:h})}function p(h){return{deviceID:h.deviceID,deviceName:h.deviceName,ownerID:h.ownerID,deviceIcon:h.icon,canOthersConnect:h.canOthersConnect,canOthersEdit:h.canOthersEdit,canOthersEditCode:h.canOthersEditCode,isOwnedByMe:h.isOwnedByMe,ownerName:h.ownerName}}function _(h){const{screen:g,active:b,picoIdeOrigin:x}=l();if(Pr){Pr=!1;return}h&&(o("warning",h),s(h)),(g==="control"||g==="connection"||g==="create"||g==="ide"&&x==="control")&&d(b?p(b):null)}return ae=new lg({onProgress:(h,g)=>i({progress:{value:h,label:g}}),onLog:(h,g)=>o(h,g),onRadar:(h,g,b)=>{const x=Date.now(),k={id:`${x}-${Math.random().toString(36).slice(2)}`,angle:g,distance:b,createdAt:x};i(T=>{const R=T.layout.find(F=>F.type==="radar"&&F.name===h),B=(R==null?void 0:R.radarFadeMs)??1200,$=T.radarPings[h]??[];return{radarPings:{...T.radarPings,[h]:[...$.filter(F=>x-F.createdAt<=B),k].slice(-80)}}})},onText:(h,g)=>{i(b=>({textValues:{...b.textValues,[h]:g}}))},onToggleState:(h,g)=>{i(b=>({toggleValues:{...b.toggleValues,[h]:g}}))},onSliderState:(h,g)=>{i(b=>({sliderValues:{...b.sliderValues,[h]:g}}))},onPlot:(h,g,b)=>{const x=Date.now(),k={id:`${x}-${Math.random().toString(36).slice(2)}`,value:g,createdAt:x,label:b};i(T=>{const R=T.layout.find(F=>F.type==="plot"&&F.name===h),B=Math.max(2,(R==null?void 0:R.plotHistory)??30),$=T.plotSeries[h]??[];return{plotSeries:{...T.plotSeries,[h]:[...$,k].slice(-B)}}})},onPlotClear:h=>{i(g=>({plotSeries:{...g.plotSeries,[h]:[]}}))},onDisconnect:h=>_(h)}),{screen:"splash",splashTarget:null,user:null,savedDevices:[],connecting:null,progress:{value:0,label:""},toast:null,confirmDialog:null,connectionLost:null,active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},plotSeries:{},logs:[],sideMenuOpen:!1,debuggerOpen:!1,menuPage:null,editMode:!1,dashboardPage:"mine",picoIdeOrigin:"dashboard",init:()=>{const h=D2(),g=h?Od(ac(),h):ac();h&&ri(g),i({user:h,savedDevices:g,splashTarget:h?"dashboard":"intro"})},finishSplash:()=>{const h=l().splashTarget;i({screen:h??"intro"})},createUser:h=>{const g=h.trim();if(!g)return;const b={username:g,userID:C2()};Nd(b),i({user:b,screen:"dashboard"})},findDevice:async()=>{try{const h=await I2();await l().connectToDevice(h)}catch(h){h instanceof Error&&h.name!=="NotFoundError"&&o("error",h.message)}},connectToDevice:async(h,g)=>{var x,k,T;const b=l().user;if(!(!b||!ae)){Pr=!1,i({screen:"connection",connecting:{name:Ld(h,g),icon:(g==null?void 0:g.deviceIcon)??Dl},progress:{value:0,label:"Forbinder..."},sliderValues:{},radarPings:{},textValues:{},plotSeries:{}});try{await ae.connect(h);const R=await ae.runHandshake(b),B=h.id,$=(R.kind==="owned"||R.kind==="unowned")&&((x=R.deviceName)==null?void 0:x.trim())||Ld(h,g);if(i(te=>te.connecting?{connecting:{...te.connecting,name:$}}:{}),R.kind==="denied"){const ue=`Du kan ikke forbinde, fordi ${((k=R.ownerName)==null?void 0:k.trim())||((T=g==null?void 0:g.ownerName)==null?void 0:T.trim())||"ejeren"} ejer enheden og ikke tillader besøgende at forbinde.`;o("warning",ue),s(ue),i({screen:"dashboard",connecting:null}),await ae.disconnect();return}if(R.kind==="unowned"){i({active:{deviceID:B,deviceName:$,ownerID:b.userID,icon:Dl,canEdit:!0,canEditCode:!0,canOthersConnect:!1,canOthersEdit:!1,canOthersEditCode:!1,isOwnedByMe:!0,ownerName:b.username,gridCols:ii,gridRows:bs},screen:"create"});return}const F={deviceID:B,deviceName:$,ownerID:R.ownerID,deviceIcon:R.icon||(g==null?void 0:g.deviceIcon)||Dl,canOthersConnect:R.canOthersConnect,canOthersEdit:R.canOthersEdit,canOthersEditCode:R.canOthersEditCode,isOwnedByMe:R.isOwnedByMe,ownerName:R.isOwnedByMe?b.username:R.ownerName??(g==null?void 0:g.ownerName)};i({savedDevices:jd(F)});const P=await ae.requestLayout(),W=Nm(P),H=jm(P);i({layout:H,toggleValues:Cm(H,l().toggleValues),active:{deviceID:B,deviceName:$,ownerID:R.ownerID,icon:R.icon||(g==null?void 0:g.deviceIcon)||Dl,canEdit:R.canEdit,canEditCode:R.canEditCode,canOthersConnect:R.canOthersConnect,canOthersEdit:R.canOthersEdit,canOthersEditCode:R.canOthersEditCode,isOwnedByMe:R.isOwnedByMe,ownerName:R.isOwnedByMe?b.username:R.ownerName??(g==null?void 0:g.ownerName),gridCols:W.cols,gridRows:W.rows},screen:"control",connecting:null,connectionLost:null})}catch(R){const B=R instanceof Error?R.message:"Forbindelsen mislykkedes.";o("error",B),s("Forbindelsen mislykkedes."),i({screen:"dashboard",connecting:null}),await ae.disconnect().catch(()=>{})}}},finishCreate:async(h,g,b,x,k,T)=>{const{user:R,active:B}=l();if(!(!R||!B||!ae))try{ae.setBusy(!0),await ae.create(R,h,g,b,x,k,T),ae.setBusy(!1);const $={deviceID:B.deviceID,deviceName:B.deviceName,ownerID:R.userID,deviceIcon:h,canOthersConnect:g,canOthersEdit:g&&b,canOthersEditCode:g&&x,isOwnedByMe:!0,ownerName:R.username};i({savedDevices:jd($)});const F=await ae.requestLayout(),P=Nm(F),W=jm(F);i({layout:W,toggleValues:Cm(W,l().toggleValues),active:{...B,ownerID:R.userID,icon:h,canEdit:!0,canEditCode:!0,canOthersConnect:g,canOthersEdit:g&&b,canOthersEditCode:g&&x,ownerName:R.username,gridCols:P.cols,gridRows:P.rows},screen:"control"})}catch($){ae.setBusy(!1);const F=$ instanceof Error?$.message:"Oprettelse mislykkedes.";o("error",F),s("Oprettelse mislykkedes."),i({screen:"dashboard"}),await ae.disconnect().catch(()=>{})}},saveDeviceSettings:async(h,g,b,x,k,T)=>{const{active:R,user:B}=l();if(!(!R||!ae||!R.isOwnedByMe))try{ae.setBusy(!0),await ae.updateDeviceSettings(h,g,b,x,k,T,B==null?void 0:B.username);const $={...R,icon:h,canEdit:!0,canEditCode:!0,canOthersConnect:g,canOthersEdit:g&&b,canOthersEditCode:g&&x,ownerName:(B==null?void 0:B.username)??R.ownerName,gridCols:k,gridRows:T},F={deviceID:R.deviceID,deviceName:R.deviceName,ownerID:R.ownerID??(B==null?void 0:B.userID),deviceIcon:h,canOthersConnect:g,canOthersEdit:g&&b,canOthersEditCode:g&&x,isOwnedByMe:!0,ownerName:(B==null?void 0:B.username)??R.ownerName};i({active:$,savedDevices:jd(F)}),s("Enhedsindstillinger gemt.")}catch($){o("error",$ instanceof Error?$.message:"Kunne ikke gemme enhedsindstillinger."),s("Kunne ikke gemme enhedsindstillinger.")}finally{ae.setBusy(!1)}},cancelCreate:async()=>{ae&&await ae.disconnect().catch(()=>{}),i({screen:"dashboard",active:null,connecting:null})},disconnect:async()=>{Pr=!0,d(null),ae&&await ae.disconnect().catch(()=>{}),Pr=!1},removeSavedDevice:h=>{i({savedDevices:z2(h)})},clearSavedDevices:()=>{O2(),i({savedDevices:[]}),s("Gemte enheder ryddet.")},resetApplicationData:async()=>{Pr=!0,ae!=null&&ae.connected&&await ae.disconnect().catch(()=>{}),L2(),window.location.reload()},updateUsername:h=>{const g=l().user,b=h.trim();if(!g||!b)return;const x={...g,username:b};Nd(x),i(k=>{var R;const T=Od(k.savedDevices,x);return ri(T),{user:x,active:(R=k.active)!=null&&R.isOwnedByMe?{...k.active,ownerName:b}:k.active,savedDevices:T}}),s("Brugernavn gemt.")},createOwnerPairingCode:()=>{const h=l().user;return h?hg(h):null},applyOwnerPairingCode:h=>{var b;const g=pg(h,(b=l().user)==null?void 0:b.username);return g?(Nd(g),i(x=>{var T,R,B;const k=Od(x.savedDevices,g);return ri(k),{user:g,active:((R=(T=x.active)==null?void 0:T.ownerID)==null?void 0:R.toLowerCase())===g.userID.toLowerCase()||(B=x.active)!=null&&B.isOwnedByMe?{...x.active,isOwnedByMe:!0,ownerID:g.userID,ownerName:g.username}:x.active,savedDevices:k}}),s("Ejerkoden er gemt. Denne browser bruger nu samme ejer-GUID."),!0):(s("Ejerkoden kunne ikke læses."),!1)},openPicoIde:()=>{const h=l().screen==="control"&&!!(ae!=null&&ae.connected),g=l().active;if(h&&g&&!g.isOwnedByMe&&!g.canEditCode){s("Ejeren tillader ikke, at gæster åbner Kodeværkstedet på denne enhed."),o("warning","Kodeværkstedet er blokeret, fordi ejeren ikke tillader gæster at redigere kode."),i({sideMenuOpen:!1});return}i(b=>({screen:"ide",picoIdeOrigin:h?"control":"dashboard",active:h?b.active:null,layout:h?b.layout:[],sliderValues:h?b.sliderValues:{},toggleValues:h?b.toggleValues:{},radarPings:h?b.radarPings:{},textValues:h?b.textValues:{},plotSeries:h?b.plotSeries:{},editMode:!1,sideMenuOpen:!1,menuPage:null}))},closePicoIde:()=>{const{picoIdeOrigin:h,active:g}=l();i({screen:h==="control"&&g&&(ae!=null&&ae.connected)?"control":"dashboard",sideMenuOpen:!1,menuPage:null,picoIdeOrigin:"dashboard"})},isBleConnected:()=>!!(ae!=null&&ae.connected),bleListFiles:async()=>ae!=null&&ae.connected?ae.listFiles("/"):[],bleReadText:async(h,g,b)=>{if(!(ae!=null&&ae.connected))throw new Error("Ingen BLE-forbindelse.");return ae.readText(h,g,b)},bleWriteText:async(h,g,b)=>{if(!(ae!=null&&ae.connected))throw new Error("Ingen BLE-forbindelse.");await ae.writeText(h,g,b)},bleDeleteFile:async h=>{if(!(ae!=null&&ae.connected))throw new Error("Ingen BLE-forbindelse.");await ae.deleteFile(h)},bleRestart:async()=>{ae!=null&&ae.connected&&await ae.restart()},bleRestartAndReconnect:async(h="control")=>{const{active:g}=l();if(!(ae!=null&&ae.connected)||!g)return!1;const b={deviceID:g.deviceID,deviceName:g.deviceName,ownerID:g.ownerID,deviceIcon:g.icon,canOthersConnect:g.canOthersConnect,canOthersEdit:g.canOthersEdit,canOthersEditCode:g.canOthersEditCode,isOwnedByMe:g.isOwnedByMe,ownerName:g.ownerName};Pr=!0,o("info","Genstarter Pico og forsøger automatisk genforbindelse...");try{await ae.restart()}catch{}i({progress:{value:15,label:"Venter på Pico genstart..."},connecting:{name:b.deviceName,icon:b.deviceIcon}});for(let x=0;x<12&&(ae!=null&&ae.connected);x+=1)await Am(250);ae!=null&&ae.connected||(Pr=!1);for(let x=1;x<=8;x+=1){await Am(x===1?1200:850);try{const T=(await kh()).find(R=>R.id===b.deviceID);if(!T){i({progress:{value:Math.min(88,20+x*8),label:"Venter på browser-tilladelse..."}});continue}return i({progress:{value:Math.min(92,24+x*8),label:`Genforbinder (${x}/8)...`}}),await l().connectToDevice(T,b),h==="ide"&&i(R=>({screen:"ide",picoIdeOrigin:"control",active:R.active,layout:R.layout,sliderValues:R.sliderValues,toggleValues:R.toggleValues,radarPings:R.radarPings,textValues:R.textValues,plotSeries:R.plotSeries,editMode:!1,sideMenuOpen:!1,menuPage:null})),s("Pico genforbundet."),!0}catch(k){o("warning",k instanceof Error?k.message:"Genforbindelse mislykkedes.")}}return s("Kunne ikke genforbinde automatisk. Vælg Picoen igen."),Pr=!1,i({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},plotSeries:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:b}),!1},reconnectLostDevice:async()=>{var g;const h=l().connectionLost;if(h){i({connectionLost:null});try{if((g=navigator.bluetooth)!=null&&g.getDevices){const x=(await navigator.bluetooth.getDevices()).find(k=>k.id===h.deviceID);if(x){await l().connectToDevice(x,h);return}}}catch{}o("info","Genforbind: vælg enheden i browserens liste."),await l().findDevice()}},dismissConnectionLost:()=>i({connectionLost:null}),sendButton:(h,g)=>ae==null?void 0:ae.enqueueButton(h,g),sendSlider:(h,g)=>{i(b=>({sliderValues:{...b.sliderValues,[h]:g}})),ae==null||ae.enqueueSlider(h,g)},sendToggle:(h,g)=>{i(b=>({toggleValues:{...b.toggleValues,[h]:g}})),ae==null||ae.enqueueToggle(h,g)},sendJoystick:(h,g,b)=>ae==null?void 0:ae.enqueueJoystick(h,g,b),sendDpad:(h,g,b)=>ae==null?void 0:ae.enqueueDpad(h,g,b),saveLayout:async h=>{if(ae)try{ae.setBusy(!0),await ae.saveLayout(h),i({layout:h,editMode:!1})}catch(g){o("error",g instanceof Error?g.message:"Kunne ikke gemme layout.")}finally{ae.setBusy(!1)}},setEditMode:h=>i({editMode:h,sideMenuOpen:!1,menuPage:null}),setDashboardPage:h=>i({dashboardPage:h}),toggleSideMenu:h=>i(g=>({sideMenuOpen:h??!g.sideMenuOpen})),toggleDebugger:h=>i(g=>({debuggerOpen:h??!g.debuggerOpen,sideMenuOpen:!1,menuPage:null})),openMenuPage:h=>i({menuPage:h,sideMenuOpen:!1}),closeMenuPage:()=>i({menuPage:null}),clearLogs:()=>i({logs:[]}),log:(h,g)=>o(h,g),askConfirm:h=>i({confirmDialog:h}),closeConfirm:()=>i({confirmDialog:null}),showToast:h=>s(h),dismissToast:()=>{cs&&clearTimeout(cs),i({toast:null})}}}),Fd="PKP-EJER";function hg(i){var s;const l=i.userID.toLowerCase(),o=((s=l.match(/.{1,4}/g))==null?void 0:s.join("-"))??l;return`${Fd}-${o}-${Mh(l)}`}function pg(i,l="Ejer"){const o=i.trim().toUpperCase().replace(/\s+/g,"-");if(!o.startsWith(`${Fd}-`))return null;const s=o.slice(Fd.length+1).split("-").filter(Boolean),d=s.pop()??"",p=s.join("").toLowerCase();return!/^[a-f0-9]{32}$/.test(p)||d!==Mh(p)?null:{userID:p,username:l.trim()||"Ejer"}}function Mh(i){let l=2166136261;for(const o of i.toLowerCase())l^=o.charCodeAt(0),l=Math.imul(l,16777619)>>>0;return(l%65536).toString(16).toUpperCase().padStart(4,"0")}const gg=1850,_g=450;function vg(){const i=le(s=>s.splashTarget),l=le(s=>s.finishSplash),o=i?"splash-screen-animation splash-ready":"splash-pending";return C.useEffect(()=>{if(!i)return;const d=window.matchMedia("(prefers-reduced-motion: reduce)").matches?_g:gg,p=window.setTimeout(l,d);return()=>window.clearTimeout(p)},[l,i]),u.jsxs("div",{className:`screen splash-screen ${o}`,"aria-label":"Teknologiskolen starter",children:[u.jsx("div",{className:"splash-white-cover"}),u.jsx("div",{className:"splash-red-field"}),u.jsx("div",{className:"splash-brand","aria-hidden":"true",children:u.jsx("div",{className:"splash-mark splash-logo-shell",children:u.jsx("img",{className:"splash-logo",src:og,alt:""})})}),u.jsx("span",{className:"sr-only",children:"Teknologiskolen"})]})}function Dm(){const i=le(d=>d.createUser),[l,o]=C.useState(""),s=l.length>0;return u.jsxs("div",{className:"screen intro",children:[u.jsxs("div",{className:"intro-header",children:[u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"}),u.jsx("img",{className:"intro-header-image",src:cg,alt:"Teknologiskolen"}),u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"})]}),u.jsxs("div",{className:"intro-body",children:[u.jsx("p",{children:"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Find selv på et navn, du vil vises som i appen. Det er ikke et login, og navnet gemmes kun i denne browser."}),u.jsxs("div",{className:`field ${s?"filled":""}`,children:[u.jsx("input",{id:"username",value:l,onChange:d=>o(d.target.value),maxLength:32,autoComplete:"off","aria-label":"Brugernavn"}),u.jsx("label",{htmlFor:"username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!s,onClick:()=>i(l),children:"Fortsæt"})]}),u.jsx("span",{className:"version",children:vs})]})}function sf({title:i,onMenu:l}){return u.jsx("header",{className:"topbar",children:u.jsxs("div",{className:"topbar-inner",children:[u.jsx("h1",{children:i}),u.jsx("button",{className:"iconbtn",type:"button",onClick:l,"aria-label":"Menu",children:u.jsx(Lt,{name:"menu"})})]})})}var bg=wh();function Rt({title:i,onClose:l,children:o,closeVariant:s="plain"}){const d=s==="circle",p=C.useRef(!1);return bg.createPortal(u.jsx("div",{className:"modal-root",onPointerDown:_=>{p.current=_.target===_.currentTarget},onClick:_=>{_.target===_.currentTarget&&p.current&&l(),p.current=!1},children:u.jsxs("div",{className:"modal",onClick:_=>_.stopPropagation(),children:[u.jsxs("div",{className:"modal-head",children:[u.jsx("h3",{children:i}),u.jsx("button",{className:`iconbtn ${d?"modal-close-circle":""}`,type:"button",onClick:l,"aria-label":"Luk",children:u.jsx(Lt,{name:d?"delete":"close",size:d?30:24})})]}),u.jsx("div",{className:"modal-body",children:o})]})}),document.body)}const of="https://api.iconify.design",yg=["tabler","lucide","ph","material-symbols","solar","mingcute","ri","mdi"],Nh="pkp.iconcache.";function wg(i){const[l,...o]=i.split(":");return`${of}/${l}/${encodeURIComponent(o.join(":"))}.svg`}function jh(i){try{return localStorage.getItem(Nh+i)}catch{return null}}function Rh(i,l){try{localStorage.setItem(Nh+i,l)}catch{}}function xg(i){return i.replace(/\s(width|height)="[^"]*"/g,"").trim()}async function Ah(i){const l=jh(i);if(l)return l;const[o,...s]=i.split(":"),d=s.join(":");if(!o||!d)return null;try{const p=await fetch(`${of}/${o}/${encodeURIComponent(d)}.svg`);if(!p.ok)return null;const _=await p.text();return _.startsWith("<svg")?xg(_):null}catch{return null}}async function Ch(i,l=120){var _;const o=i.trim();if(!o)return{icons:[],total:0};const s=`${of}/search?query=${encodeURIComponent(o)}&limit=${l}&prefixes=${yg.join(",")}`,d=await fetch(s);if(!d.ok)throw new Error(`Iconify search failed (${d.status})`);const p=await d.json();return{icons:p.icons??[],total:p.total??((_=p.icons)==null?void 0:_.length)??0}}const kg=["robot","sensor","motor","raspberry pi","led","battery","bluetooth","car","rocket","gamepad","gauge","radar","compass","temperature","wifi","antenna","gear","bolt","lightbulb","joystick","drone","circuit","chip","servo","wheel","magnet","speaker","camera","flask"];function Om(i){const l=[...i];for(let o=l.length-1;o>0;o--){const s=Math.floor(Math.random()*(o+1));[l[o],l[s]]=[l[s],l[o]]}return l}const Sg=8,Eg=20;async function Tg(i=120){const l=Om(kg).slice(0,Sg),o=await Promise.all(l.map(_=>Ch(_,Eg).catch(()=>({icons:[],total:0})))),s=new Set,d=[];for(const _ of o)for(const h of _.icons)s.has(h)||(s.add(h),d.push(h));const p=Om(d).slice(0,i);return{icons:p,total:p.length}}const Gd=ys(af(Dl)??"");function Lm(i){if(!i)return Gd;const l=af(i);if(l)return ys(l);const o=jh(i);return o?ys(o):null}function xs({slug:i,className:l,alt:o=""}){const[s,d]=C.useState(()=>Lm(i)??Gd);return C.useEffect(()=>{const p=Lm(i);if(p){d(p);return}if(d(Gd),!i||typeof navigator<"u"&&!navigator.onLine)return;let _=!1;return Ah(i).then(h=>{_||!h||(Rh(i,h),d(ys(h)))}),()=>{_=!0}},[i]),u.jsx("img",{className:l,src:s,alt:o})}function Bm(){const i=le(T=>T.savedDevices),l=le(T=>T.toggleSideMenu),o=le(T=>T.findDevice),s=le(T=>T.removeSavedDevice),d=le(T=>T.askConfirm),p=le(T=>T.dashboardPage),_=le(T=>T.setDashboardPage),h=Rg(),[g,b]=C.useState(null),x=fc(),k=i.filter(T=>p==="mine"?T.isOwnedByMe:!T.isOwnedByMe).sort(jg);return u.jsxs("div",{className:"screen dashboard-screen",children:[u.jsx(sf,{title:"Hovedmenu",onMenu:()=>l()}),u.jsxs("div",{className:"content dash-content",children:[!x&&u.jsx("div",{className:"notice",children:"Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På Android: brug Chrome."}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:p==="mine"?"active":"",onClick:()=>_("mine"),children:"Mine Enheder"}),u.jsx("button",{type:"button",className:p==="andre"?"active":"",onClick:()=>_("andre"),children:"Andre Enheder"})]}),u.jsx("div",{className:"panel panel-white device-list",children:k.length===0?u.jsx("div",{className:"device-list-empty",children:p==="mine"?"Ingen enheder endnu. Tryk på + for at finde en enhed.":"Ingen andre enheder gemt."}):k.map(T=>u.jsx(Mg,{device:T,disabled:!x,onConnect:()=>h(T),onSettings:()=>b(T)},T.deviceID))})]}),u.jsx("button",{className:"fab",type:"button",onClick:()=>o(),disabled:!x,"aria-label":"Find enhed",children:u.jsx(Lt,{name:"plus",size:30})}),u.jsx("span",{className:"version",children:vs}),g&&u.jsx(Rt,{title:"Enhedsindstillinger",onClose:()=>b(null),children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("div",{className:"saved-device-head",children:[u.jsx(xs,{slug:g.deviceIcon}),u.jsx("strong",{children:g.deviceName})]}),u.jsx(us,{label:"Gemte indstillinger",value:"Denne browser"}),u.jsx(us,{label:"Ejer",value:Ng(g)}),u.jsx(us,{label:"Offentlig",value:g.canOthersConnect?"Ja":"Nej"}),u.jsx(us,{label:"Andre må redigere layout",value:g.canOthersEdit?"Ja":"Nej"}),u.jsx(us,{label:"Andre må redigere kode",value:g.canOthersEditCode?"Ja":"Nej"}),u.jsx("div",{className:"notice",children:"Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!x,onClick:()=>{const T=g;b(null),h(T)},children:"Forbind"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>d({title:"Glem enhed",message:`Vil du fjerne ${g.deviceName} fra gemte enheder?`,confirmLabel:"Glem",onConfirm:()=>{s(g.deviceID),b(null)}}),children:"Glem enhed"})]})})]})}function Mg({device:i,disabled:l,onConnect:o,onSettings:s}){return u.jsxs("div",{className:"device-tile-wrap",children:[u.jsxs("button",{className:"device-tile",type:"button",onClick:o,disabled:l,children:[u.jsx(xs,{className:"device-tile-icon",slug:i.deviceIcon}),u.jsx("span",{className:"device-tile-name",children:i.deviceName})]}),u.jsx("button",{className:"device-tile-del",type:"button",onClick:s,"aria-label":"Enhedsindstillinger",children:u.jsx(Lt,{name:"settings"})})]})}function us({label:i,value:l}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:i}),u.jsx("strong",{children:l})]})}function Ng(i){var l;return i.isOwnedByMe?"Dig":((l=i.ownerName)==null?void 0:l.trim())||"Anden bruger"}function jg(i,l){return i.deviceName.localeCompare(l.deviceName,"da",{sensitivity:"base"})}function Rg(){const i=le(s=>s.connectToDevice),l=le(s=>s.findDevice),o=le(s=>s.log);return async s=>{const p=(await kh()).find(_=>_.id===s.deviceID);p?await i(p,s):(o("info","Genforbind: vælg enheden i browserens liste."),await l())}}function Ag(){const i=le(o=>o.connecting),l=le(o=>o.progress);return u.jsxs("div",{className:"screen connection",children:[u.jsx("div",{className:"device-icon-pick",children:u.jsx(xs,{slug:i==null?void 0:i.icon})}),u.jsxs("h2",{style:{margin:0,color:"var(--red)"},children:["Forbinder til ",(i==null?void 0:i.name)??"enhed"]}),u.jsx("div",{className:"spinner"}),u.jsxs("div",{style:{width:"100%"},children:[u.jsx("div",{className:"progress-track",children:u.jsx("div",{className:"progress-fill",style:{width:`${l.value}%`}})}),u.jsx("p",{style:{color:"var(--muted)",fontWeight:600,marginTop:12},children:l.label})]})]})}const Ir=24;function Cg(i,l,o){const s=Math.min(Math.max(o,1),l);let d=i-Math.floor(s/2);return d=Math.max(0,Math.min(d,l-s)),Array.from({length:s},(p,_)=>d+_)}function Dh({selected:i,onSelect:l,onClose:o}){const[s,d]=C.useState("library"),[p,_]=C.useState(()=>{const G=i?tc.findIndex(Ve=>Ve.slug===i):-1;return G>=0?Math.floor(G/Ir):0}),[h,g]=C.useState(""),[b,x]=C.useState([]),[k,T]=C.useState(0),[R,B]=C.useState(!1),[$,F]=C.useState(null),[P,W]=C.useState(!1),[H,te]=C.useState(typeof navigator>"u"?!0:navigator.onLine);C.useEffect(()=>{const G=()=>te(navigator.onLine);return window.addEventListener("online",G),window.addEventListener("offline",G),()=>{window.removeEventListener("online",G),window.removeEventListener("offline",G)}},[]);function ue(G){l(G),o(),af(G)||Ah(G).then(Ve=>{Ve&&Rh(G,Ve)})}async function fe(G){if(!H){F("Du er offline. Vælg fra «Bibliotek», eller find flere ikoner når du er online.");return}B(!0),F(null),W(!0);try{const Ve=G==="random"?await Tg():await Ch(h);x(Ve.icons),T(0),Ve.icons.length===0&&F("Ingen ikoner fundet. Prøv et andet ord.")}catch{F("Kunne ikke hente ikoner. Tjek din internetforbindelse."),x([])}finally{B(!1)}}const Z=Math.ceil(tc.length/Ir),J=C.useMemo(()=>tc.slice(p*Ir,p*Ir+Ir),[p]),xe=Math.ceil(b.length/Ir),ve=C.useMemo(()=>b.slice(k*Ir,k*Ir+Ir),[b,k]),Oe=H&&!R&&!$&&ve.length>0;return u.jsx(Rt,{title:"Vælg et ikon",onClose:o,children:u.jsxs("div",{className:"icon-picker",children:[u.jsxs("div",{className:"icon-picker-head",children:[u.jsxs("div",{className:"icon-tabs",role:"tablist",children:[u.jsx("button",{type:"button",role:"tab","aria-selected":s==="library",className:s==="library"?"active":"",onClick:()=>d("library"),children:"Bibliotek"}),u.jsx("button",{type:"button",role:"tab","aria-selected":s==="search",className:s==="search"?"active":"",onClick:()=>d("search"),children:"Søg online"})]}),s==="library"?u.jsx("p",{className:"icon-picker-caption",children:"Tryk på et ikon for at vælge det."}):u.jsxs("form",{className:"icon-search",onSubmit:G=>{G.preventDefault(),fe("query")},children:[u.jsx("input",{type:"search",value:h,placeholder:"Søg (fx robot, bil, sensor)",onChange:G=>g(G.target.value),disabled:!H,"aria-label":"Søg efter ikon",autoFocus:!0}),u.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!H||R,children:"Søg"}),u.jsx("button",{type:"button",className:"btn icon-dice",onClick:()=>void fe("random"),disabled:!H||R,title:"Vis tilfældige ikoner","aria-label":"Vis tilfældige ikoner",children:u.jsx(Dg,{})})]})]}),u.jsxs("div",{className:"icon-picker-body",children:[s==="library"&&u.jsx("div",{className:"icon-grid",children:J.map(G=>u.jsx(zm,{src:ys(G.svg),label:G.label,selected:G.slug===i,onClick:()=>ue(G.slug)},G.slug))}),s==="search"&&u.jsxs(u.Fragment,{children:[!H&&u.jsx("p",{className:"icon-hint",children:"Du er offline. Vælg fra «Bibliotek», eller find flere ikoner når du er online."}),H&&R&&u.jsx("p",{className:"icon-hint",children:"Henter ikoner…"}),H&&!R&&$&&u.jsx("p",{className:"icon-hint icon-hint-error",children:$}),H&&!R&&!$&&!P&&u.jsxs("p",{className:"icon-hint",children:["Skriv et ord og tryk ",u.jsx("strong",{children:"Søg"})," — eller tryk 🎲 for tilfældige ikoner."]}),Oe&&u.jsx("div",{className:"icon-grid",children:ve.map(G=>u.jsx(zm,{src:wg(G),label:G,selected:G===i,onClick:()=>ue(G)},G))})]})]}),u.jsxs("div",{className:"icon-picker-foot",children:[s==="library"&&u.jsx(qm,{current:p,total:Z,onGo:_}),s==="search"&&Oe&&u.jsx(qm,{current:k,total:xe,onGo:T})]})]})})}function zm({src:i,label:l,selected:o,onClick:s}){return u.jsxs("button",{type:"button",className:`icon-tile ${o?"selected":""}`,onClick:s,"aria-label":l,"aria-pressed":o,title:l,children:[u.jsx("img",{src:i,alt:"",loading:"lazy"}),o&&u.jsx("span",{className:"icon-tile-check","aria-hidden":"true",children:"✓"})]})}function Dg(){return u.jsxs("svg",{className:"dice-glyph",viewBox:"0 0 24 24",width:22,height:22,"aria-hidden":"true",fill:"currentColor",children:[u.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"4",ry:"4",fill:"none",stroke:"currentColor",strokeWidth:"2"}),u.jsx("circle",{cx:"8",cy:"8",r:"1.7"}),u.jsx("circle",{cx:"16",cy:"8",r:"1.7"}),u.jsx("circle",{cx:"12",cy:"12",r:"1.7"}),u.jsx("circle",{cx:"8",cy:"16",r:"1.7"}),u.jsx("circle",{cx:"16",cy:"16",r:"1.7"})]})}const Um=48;function qm({current:i,total:l,onGo:o}){const s=C.useRef(null),[d,p]=C.useState(7);return C.useLayoutEffect(()=>{const _=s.current;if(!_)return;const h=()=>{const b=_.clientWidth-2*Um;p(Math.max(1,Math.floor(b/Um)))};h();const g=new ResizeObserver(h);return g.observe(_),()=>g.disconnect()},[]),l<=1?null:u.jsxs("div",{className:"icon-pager",ref:s,children:[u.jsx("button",{type:"button",className:"icon-pager-arrow",onClick:()=>o(Math.max(0,i-1)),disabled:i===0,"aria-label":"Forrige side",children:u.jsx(Lt,{name:"back",size:20})}),Cg(i,l,d).map(_=>u.jsx("button",{type:"button",className:`icon-pager-num ${_===i?"active":""}`,onClick:()=>o(_),"aria-label":`Side ${_+1}`,"aria-current":_===i?"page":void 0,children:_+1},_)),u.jsx("button",{type:"button",className:"icon-pager-arrow",onClick:()=>o(Math.min(l-1,i+1)),disabled:i===l-1,"aria-label":"Næste side",children:u.jsx(Lt,{name:"back",size:20,className:"flip-x"})})]})}function Og(){const i=le(te=>te.finishCreate),l=le(te=>te.cancelCreate),[o,s]=C.useState(Dl),[d,p]=C.useState(!1),[_,h]=C.useState(!1),[g,b]=C.useState(!1),[x,k]=C.useState(!1),[T,R]=C.useState(ii),[B,$]=C.useState(bs),[F,P]=C.useState(!1),W=te=>Number.isFinite(te)?Math.max(li,Math.min(ai,Math.round(te))):ii;async function H(){P(!0),await i(o,_,_&&g,_&&x,W(T),W(B))}return u.jsxs("div",{className:"screen",children:[u.jsx("header",{className:"topbar",children:u.jsx("h1",{children:"Opret Enhed"})}),u.jsxs("div",{className:"content create-body",children:[u.jsxs("button",{type:"button",className:"device-icon-pick",onClick:()=>p(!0),"aria-label":"Vælg ikon",children:[u.jsx(xs,{slug:o}),u.jsx("span",{className:"badge",children:u.jsx(Lt,{name:"plus",size:22})})]}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:_?"":"active",onClick:()=>h(!1),children:"Privat"}),u.jsx("button",{type:"button",className:_?"active":"",onClick:()=>h(!0),children:"Offentlig"})]}),_&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:g?"":"active",onClick:()=>b(!1),children:"Nej"}),u.jsx("button",{type:"button",className:g?"active":"",onClick:()=>b(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:x?"":"active",onClick:()=>k(!1),children:"Nej"}),u.jsx("button",{type:"button",className:x?"active":"",onClick:()=>k(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter (kolonner × rækker)"}),u.jsxs("div",{className:"row",style:{width:"100%"},children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"cols",children:"Kolonner"}),u.jsx("input",{id:"cols",type:"number",min:li,max:ai,value:Number.isNaN(T)?"":T,onChange:te=>R(parseInt(te.target.value,10)),onBlur:()=>R(W(T))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"rows",children:"Rækker"}),u.jsx("input",{id:"rows",type:"number",min:li,max:ai,value:Number.isNaN(B)?"":B,onChange:te=>$(parseInt(te.target.value,10)),onBlur:()=>$(W(B))})]})]}),u.jsxs("div",{className:"row",style:{marginTop:"auto",width:"100%"},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>l(),disabled:F,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:H,disabled:F,children:F?"Opretter...":"Opret"})]})]}),d&&u.jsx(Dh,{selected:o,onSelect:s,onClose:()=>p(!1)}),u.jsx("span",{className:"version",children:vs})]})}const si=8;function nc(i){return Math.max(5,Math.min(22,i))}function Lg(i,l,o){const s=Math.max(1,i.length),d=(l-si*2)/(s*.58),p=(o-si*2)*.48;return nc(Math.min(d,p))}function da(i,l,o){switch(o){case 90:return{x:-l,y:i};case 180:return{x:-i,y:-l};case 270:return{x:l,y:-i};default:return{x:i,y:l}}}function sc(i){return(360-i)%360}function Bg(i,l,o,s){const d=s===90||s===270;return Lg(i,d?o:l,d?l:o)}function oc({name:i,width:l,height:o,rotation:s}){return u.jsx("span",{style:{display:"inline-block",fontWeight:800,fontSize:Bg(i,l,o,s),transform:s?`rotate(${s}deg)`:void 0,whiteSpace:s===90||s===270?"nowrap":void 0},children:i})}function zg(i,l,o,s,d){const p=i.trim().split(/\s+/).filter(Boolean),_=Math.max(1,i.replace(/\s+/g,"").length+Math.max(0,p.length-1)*1.6),h=d?nc(Math.min(l/4.6,o/4.6,12)):0,g=d?h+si:si;if(s){const k=Math.max(1,o-g*2);return{fontSize:nc(Math.min(l*.48,k/(_*1.04))),endFontSize:h,centerInset:d?{top:g,bottom:g}:{}}}const b=Math.max(1,l-g*4.2);return{fontSize:nc(Math.min(o*.42,b/(_*.58))),endFontSize:h,centerInset:d?{left:g*2.1,right:g*2.1}:{}}}function Ug({control:i,rect:l,disabled:o,latestValue:s,toggleValue:d,radarPings:p=[],textValue:_,plotPoints:h=[],onButton:g,onSlider:b,onToggle:x,onJoystick:k,onDpad:T}){const R=C.useRef(!1),[B,$]=C.useState(!1),F={left:l.cx,top:l.cy,width:l.width,height:l.height};if(i.type==="button"){const P=()=>{o||!R.current||(R.current=!1,$(!1),g(i.name,!1))};return u.jsx("div",{className:"control",style:F,children:u.jsx("button",{className:`control-button ${B?"pressed":""}`,type:"button",disabled:o,style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},onPointerDown:W=>{var H,te;o||(W.preventDefault(),(te=(H=W.currentTarget).setPointerCapture)==null||te.call(H,W.pointerId),R.current=!0,$(!0),g(i.name,!0))},onPointerUp:W=>{var H,te;W.preventDefault(),(te=(H=W.currentTarget).releasePointerCapture)==null||te.call(H,W.pointerId),P()},onPointerCancel:P,onLostPointerCapture:P,children:u.jsx(oc,{name:i.name,width:l.width,height:l.height,rotation:i.rotation})})})}if(i.type==="toggle"){const P=!!d;return u.jsx("div",{className:"control",style:F,children:u.jsx("button",{className:`control-toggle ${P?"on":""}`,type:"button",disabled:o,"aria-pressed":P,style:{width:"100%",height:"100%"},onPointerDown:W=>{o||(W.preventDefault(),x(i.name,!P))},children:u.jsx(oc,{name:i.name,width:l.width,height:l.height,rotation:i.rotation})})})}return i.type==="radar"?u.jsx("div",{className:"control",style:F,children:u.jsx(Lh,{control:i,pings:p,width:l.width,height:l.height})}):i.type==="text"?u.jsx("div",{className:"control",style:F,children:u.jsx(Oh,{message:_??i.name,width:l.width,height:l.height,rotation:i.rotation})}):i.type==="plot"?u.jsx("div",{className:"control",style:F,children:u.jsx(zh,{control:i,points:h,width:l.width,height:l.height})}):i.type==="joystick"?u.jsx("div",{className:"control",style:F,children:u.jsx(l_,{control:i,disabled:o,onJoystick:k,width:l.width,height:l.height})}):i.type==="dpad"?u.jsx("div",{className:"control",style:F,children:u.jsx(f_,{control:i,disabled:o,onDpad:T})}):u.jsx("div",{className:"control",style:F,children:u.jsx(r_,{control:i,disabled:o,latestValue:s,onSlider:b,width:l.width,height:l.height})})}function qg(i,l,o){const d=(i.trim()||" ").split(`
`),p=d.reduce((T,R)=>R.split(/\s+/).filter(Boolean).reduce(($,F)=>Math.max($,F.length),T),1),_=Math.max(1,Math.floor(p*1.9)),h=Math.max(d.length,d.reduce((T,R)=>T+Math.max(1,Math.ceil(Math.max(1,R.trim().length)/_)),0)),g=Math.max(1,l-si*3),b=Math.max(1,o-si*3),x=g/(p*.58),k=b/(h*1.16);return Math.max(7,Math.min(24,x,k))}function Oh({message:i,width:l,height:o,rotation:s=0}){const d=i.trim()||"...",p=s===90||s===270,_=qg(d,p?o:l,p?l:o);return u.jsx("div",{className:"control-text",style:{width:"100%",height:"100%",fontSize:_},children:u.jsx("span",{style:{transform:s?`rotate(${s}deg)`:void 0},children:d})})}function Lh({control:i,pings:l,width:o,height:s,preview:d=!1}){const[,p]=C.useState(0),_=Math.max(120,i.radarFadeMs??1200),h=i.radarMinAngle??0,g=i.radarMaxAngle??180,b=Zt(h),x=Zt(g),k=Math.abs(g-h)>=360||b===x&&h!==g,T=Math.max(1,i.radarMaxDistance??200),R=Date.now(),B=l[l.length-1],$=i.rotation,F=Zt(b+$),P=Zt(x+$),W=Kg(b,x),H=((B==null?void 0:B.angle)??W)+$,te=d?[{id:"preview",angle:W,distance:T*.62,createdAt:R}]:l.filter(de=>R-de.createdAt<=_),ue=!k,fe=Math.max(8,Math.min(12,Math.min(o,s)*.16)),Z=Math.max(7,fe*.85),J=0,xe=0,ve=1,Oe=Gg(k,F,P,$,T),G=k?{x:-1.12,y:-1.12,width:2.24,height:2.24}:$g(F,P,Oe.map(de=>de.point)),Ve=k?"":Hg(J,xe,ve,F,P),be=Im(h),Ee=Im(g),z=ue?Xg(F,P,G,o,s,be,Ee,fe):null,ne=Oe.map(de=>{const Se=Bh(de.point,G,o,s);return{key:de.key,value:de.value,x:Se.x,y:Se.y}});C.useEffect(()=>{if(d||l.length===0)return;const de=window.setInterval(()=>p(Se=>Se+1),120);return()=>window.clearInterval(de)},[_,l.length,d]);const me=Nn(J,xe,ve,H);return u.jsxs("div",{className:"control-radar",style:{width:"100%",height:"100%"},children:[u.jsxs("svg",{width:o,height:s,viewBox:`${G.x} ${G.y} ${G.width} ${G.height}`,preserveAspectRatio:"none","aria-hidden":"true",children:[k?u.jsx("circle",{className:"radar-sector-fill",cx:J,cy:xe,r:ve}):u.jsx("path",{className:"radar-sector-fill",d:Ve}),[.25,.5,.75,1].map(de=>k?u.jsx("circle",{className:"radar-ring",cx:J,cy:xe,r:ve*de},de):u.jsx("path",{className:"radar-ring",d:Vg(J,xe,ve*de,F,P)},de)),!k&&u.jsx(Hm,{cx:J,cy:xe,radius:ve,angle:F}),!k&&u.jsx(Hm,{cx:J,cy:xe,radius:ve,angle:P}),u.jsx("line",{className:"radar-sweep",x1:J,y1:xe,x2:me.x,y2:me.y}),te.map(de=>{const Se=d?0:R-de.createdAt,E=Math.max(0,1-Se/_),U=Math.max(0,Math.min(T,de.distance)),re=Nn(J,xe,ve*(U/T),de.angle+$);return u.jsx("circle",{className:"radar-ping",cx:re.x,cy:re.y,r:Math.max(.025,Math.min(G.width,G.height)*.025),opacity:E},de.id)})]}),ue&&z&&u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"radar-angle-label",style:{left:z.min.x,top:z.min.y,fontSize:fe},children:be}),u.jsx("span",{className:"radar-angle-label",style:{left:z.max.x,top:z.max.y,fontSize:fe},children:Ee})]}),ne.map(de=>u.jsx("span",{className:"radar-range-label",style:{left:de.x,top:de.y,fontSize:Z},children:de.value},de.key))]})}function Hm({cx:i,cy:l,radius:o,angle:s}){const d=Nn(i,l,o,s);return u.jsx("line",{className:"radar-boundary",x1:i,y1:l,x2:d.x,y2:d.y})}function Nn(i,l,o,s){const d=(Zt(s)-90)*Math.PI/180;return{x:i+Math.cos(d)*o,y:l+Math.sin(d)*o}}function Hg(i,l,o,s,d){const p=Nn(i,l,o,s),_=Nn(i,l,o,d),h=mc(s,d)>180?1:0;return`M ${i} ${l} L ${p.x} ${p.y} A ${o} ${o} 0 ${h} 1 ${_.x} ${_.y} Z`}function Vg(i,l,o,s,d){const p=Nn(i,l,o,s),_=Nn(i,l,o,d),h=mc(s,d)>180?1:0;return`M ${p.x} ${p.y} A ${o} ${o} 0 ${h} 1 ${_.x} ${_.y}`}function mc(i,l){const o=Zt(i),s=Zt(l),d=s>=o?s-o:360-o+s;return d===0?360:d}const Wo=[.25,.5,.75,1],Pg=.1,Ig=.85,Fg=55;function Gg(i,l,o,s,d){const p=(g,b,x)=>({key:`${g}-${b}`,value:Math.round(d*b),point:Nn(0,0,b,x)});if(i){const g=Zt(180+s);return Wo.map(b=>p("full",b,g))}const _=360-mc(l,o);if(_<Fg){const g=Zt(o+_/2);return Wo.map(b=>p("mid",b,g))}const h=(g,b,x)=>{const k=Math.asin(Math.min(Ig,Pg/b))*180/Math.PI;return Zt(g+x*k)};return[...Wo.map(g=>p("min",g,h(l,g,-1))),...Wo.map(g=>p("max",g,h(o,g,1)))]}function $g(i,l,o=[]){const s=[{x:0,y:0},Nn(0,0,1,i),Nn(0,0,1,l),...o];for(const k of[0,90,180,270])Yg(k,i,l)&&s.push(Nn(0,0,1,k));const d=Math.min(...s.map(k=>k.x)),p=Math.max(...s.map(k=>k.x)),_=Math.min(...s.map(k=>k.y)),h=Math.max(...s.map(k=>k.y)),g=Math.max(.1,p-d),b=Math.max(.1,h-_),x=Math.max(g,b)*.24;return{x:d-x,y:_-x,width:g+x*2,height:b+x*2}}function Yg(i,l,o){const s=Zt(l),d=Zt(i),p=mc(l,o),_=Zt(d-s);return _>=0&&_<=p}function Xg(i,l,o,s,d,p,_,h){const b=Nn(0,0,1.1,i),x=Nn(0,0,1.1,l);return{min:Vm(b,o,s,d,p,h),max:Vm(x,o,s,d,_,h)}}function Bh(i,l,o,s){return{x:(i.x-l.x)/l.width*o,y:(i.y-l.y)/l.height*s}}function Vm(i,l,o,s,d,p){const _=Bh(i,l,o,s),h=Math.max(10,d.length*p*.62),g=p,b=7;return{x:Pm(_.x,h/2+b,Math.max(h/2+b,o-h/2-b)),y:Pm(_.y,g/2+b,Math.max(g/2+b,s-g/2-b))}}function Pm(i,l,o){return Math.max(l,Math.min(o,i))}function Im(i){return`${Math.round(i)}`}function Zt(i){return Number.isFinite(i)?(i%360+360)%360:0}function Kg(i,l){const o=Zt(i),s=Zt(l),d=s>=o?s-o:360-o+s;return Zt(o+d/2)}function Bd(i){return Number.isInteger(i)?String(i):i.toFixed(1)}function Qg(i){const l=Math.round(i/1e3);if(l<60)return`${l} sek`;const o=Math.round(l/60);if(o<60)return`${o} min`;const s=Math.floor(o/60),d=o%60;return d>0?`${s} t ${d} min`:`${s} t`}function Wg(i,l){return i.label?i.label:l}function Zg(i){if(i<=0)return[];if(i<=5)return Array.from({length:i},(o,s)=>s);const l=new Set([0,i-1]);return l.add(Math.round((i-1)/2)),i>=10&&(l.add(Math.round((i-1)/4)),l.add(Math.round((i-1)*3/4))),[...l].sort((o,s)=>o-s)}function Jg(i,l){const o=Date.now();return Array.from({length:i},(s,d)=>{const p=d/Math.max(1,i-1),_=l==="bar"?.15+.7*Math.abs(Math.sin(p*Math.PI*1.4)):.5+.4*Math.sin(p*Math.PI*2.2);return{id:`demo-${d}`,value:_,createdAt:o}})}function zh({control:i,points:l,width:o,height:s,preview:d=!1}){const p=i.plotMin??0,_=i.plotMax??100,h=_>p?_-p:1,g=Math.max(2,i.plotHistory??30),b=i.plotStyle==="bar"?"bar":"line",x=d?Jg(g,b):l.slice(-g),k=x[x.length-1],T=x.length>1?x[x.length-1].createdAt-x[0].createdAt:0,R=T>2e3?Qg(T):null,B=Math.max(1,Math.min(o,s)),$=Math.max(8,Math.min(13,B*.14)),F=Math.max(6,Math.min(10,$*.72)),P=Math.max(6,Math.min(16,B*.12)),W=Math.max($*1.65,F*2.2),H=P,te=P+$*.55,ue=Math.max(1,o-H-P),fe=Math.max(1,s-te-W),Z=Math.max(1.5,Math.min(3.4,B*.045)),J=Math.max(Z+1,Math.min(B*.09,Z*2)),xe=be=>{const Ee=Math.max(0,Math.min(1,(be-p)/h));return te+(1-Ee)*fe},ve=te+fe,Oe=Math.max(1.5,B*.02),G=x.map((be,Ee)=>({x:x.length>1?H+Ee/(x.length-1)*ue:H+ue/2,y:xe(be.value)})),Ve=Zg(x.length);return u.jsxs("div",{className:"control-plot",style:{width:"100%",height:"100%"},children:[u.jsxs("svg",{width:o,height:s,viewBox:`0 0 ${o} ${s}`,"aria-hidden":"true",children:[[.25,.5,.75].map(be=>u.jsx("line",{className:"plot-grid-line",x1:H,y1:te+be*fe,x2:H+ue,y2:te+be*fe},be)),u.jsx("line",{className:"plot-axis-line",x1:H,y1:ve,x2:H+ue,y2:ve}),Ve.map(be=>{const Ee=x[be],z=x.length>1?H+be/(x.length-1)*ue:H+ue/2;return u.jsxs("g",{children:[u.jsx("line",{className:"plot-axis-tick",x1:z,y1:ve,x2:z,y2:ve+Math.max(3,F*.48)}),u.jsx("text",{className:"plot-axis-tick-label",x:z,y:ve+Math.max(6,F*.9),fontSize:F,textAnchor:"end",dominantBaseline:"middle",transform:`rotate(-90 ${z} ${ve+Math.max(6,F*.9)})`,children:Wg(Ee,be===x.length-1?"nu":`${be+1}`)})]},Ee.id)}),b==="bar"?x.map((be,Ee)=>{const z=ue/x.length,ne=z*.62,me=H+Ee*z+(z-ne)/2,de=Math.min(xe(be.value),ve-Oe),Se=Ee===x.length-1;return u.jsx("rect",{className:`plot-bar ${Se?"latest":""}`,x:me,y:de,width:ne,height:ve-de},be.id)}):u.jsxs(u.Fragment,{children:[G.length>1&&u.jsx("polyline",{className:"plot-line",points:G.map(be=>`${be.x},${be.y}`).join(" ")}),G.map((be,Ee)=>{var z;return u.jsx("circle",{className:`plot-dot ${Ee===G.length-1?"latest":""}`,cx:be.x,cy:be.y,r:Ee===G.length-1?J:Z},(z=x[Ee])==null?void 0:z.id)})]})]}),u.jsx("span",{className:"plot-axis-label plot-axis-max",style:{fontSize:$*.78},children:Bd(_)}),u.jsx("span",{className:"plot-name-label",style:{fontSize:$},children:i.name}),k!==void 0&&u.jsx("span",{className:"plot-value-label",style:{fontSize:$*1.15},children:Bd(k.value)}),u.jsx("span",{className:"plot-axis-label plot-axis-min",style:{fontSize:$*.78},children:Bd(p)}),R!==null&&u.jsxs("span",{className:"plot-time-label",style:{fontSize:$*.72},children:[R," siden"]})]})}function e_(i,l){if(!l)return i;const o=i.trim().split(/\s+/).filter(Boolean);return u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",lineHeight:1.02,textAlign:"center",gap:"0.42em"},children:o.map((s,d)=>u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[...s].map((p,_)=>u.jsx("span",{children:p},`${p}-${_}`))},`${s}-${d}`))})}function t_(i){const l={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},o=4;return i===0?{low:{...l,left:o,top:0,bottom:0},high:{...l,right:o,top:0,bottom:0}}:i===180?{low:{...l,right:o,top:0,bottom:0},high:{...l,left:o,top:0,bottom:0}}:i===90?{low:{...l,bottom:o,left:0,right:0},high:{...l,top:o,left:0,right:0}}:{low:{...l,top:o,left:0,right:0},high:{...l,bottom:o,left:0,right:0}}}function n_({name:i,vertical:l,rotation:o,color:s,fontSize:d,endFontSize:p,centerInset:_,lowLabel:h,highLabel:g,showEnds:b}){const x=b?t_(o):null;return u.jsxs("div",{style:{position:"absolute",inset:0,color:s},children:[u.jsx("div",{style:{position:"absolute",inset:0,..._,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:d,textAlign:"center",pointerEvents:"none"},children:e_(i,l)}),x&&u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{...x.low,fontWeight:800,fontSize:p},children:h}),u.jsx("div",{style:{...x.high,fontWeight:800,fontSize:p},children:g})]})]})}function Uh({name:i,rotation:l,width:o,height:s,value:d,showEnds:p=!1,fillColor:_="var(--red)",lowLabel:h="0",highLabel:g="100"}){const b=l===90||l===270,{fontSize:x,endFontSize:k,centerInset:T}=zg(i,o,s,b,p);let R,B;l===0?(R={left:0,top:0,bottom:0,width:`${d}%`},B={left:0,top:0}):l===180?(R={right:0,top:0,bottom:0,width:`${d}%`},B={right:0,top:0}):l===90?(R={left:0,right:0,bottom:0,height:`${d}%`},B={left:0,bottom:0}):(R={left:0,right:0,top:0,height:`${d}%`},B={left:0,top:0});const $=F=>u.jsx(n_,{name:i,vertical:b,rotation:l,color:F,fontSize:x,endFontSize:k,centerInset:T,lowLabel:h,highLabel:g,showEnds:p});return u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{position:"absolute",left:0,top:0,width:`${o}px`,height:`${s}px`},children:$("var(--red)")}),u.jsx("div",{style:{position:"absolute",background:_,overflow:"hidden",...R},children:u.jsx("div",{style:{position:"absolute",width:`${o}px`,height:`${s}px`,...B},children:$("var(--white)")})})]})}function r_({control:i,disabled:l,latestValue:o,onSlider:s,width:d,height:p}){const _=C.useRef(null),h=i.sliderMin??0,g=i.sliderMax??100,[b,x]=C.useState(()=>o===void 0?Fm(i.sliderRecenter??"none"):Gm(o,h,g)),k=C.useRef(null),T=i.rotation;C.useEffect(()=>{o!==void 0&&(x(Gm(o,h,g)),k.current=o)},[o,h,g]);function R(P){const W=_.current;if(!W)return 0;const H=W.getBoundingClientRect();let te;return T===0?te=(P.clientX-H.left)/H.width:T===180?te=1-(P.clientX-H.left)/H.width:T===90?te=1-(P.clientY-H.top)/H.height:te=(P.clientY-H.top)/H.height,Math.max(0,Math.min(1,te))}function B(P){l||$(R(P))}function $(P){const W=Math.round(P*100),H=Math.round(h+(g-h)*P);x(W),H!==k.current&&(k.current=H,s(i.name,H))}function F(){const P=i.sliderRecenter??"none";l||P==="none"||$(Fm(P)/100)}return u.jsx("div",{ref:_,className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",touchAction:"none"},onPointerDown:P=>{l||(P.preventDefault(),P.currentTarget.setPointerCapture(P.pointerId),B(P))},onPointerMove:P=>{P.buttons!==0&&B(P)},onPointerUp:F,onPointerCancel:F,onLostPointerCapture:F,children:u.jsx(Uh,{name:i.name,rotation:T,width:d,height:p,value:b,showEnds:!0,lowLabel:String(h),highLabel:String(g)})})}function Fm(i){return i==="bottom"?0:i==="top"?100:i==="middle"?50:0}function Gm(i,l,o){return o===l?0:Math.max(0,Math.min(100,Math.round((i-l)/(o-l)*100)))}function $m(i,l,o){return Math.round(l+(o-l)*(i+1)/2)}function Ym(i,l){return i==="bottom"?l?1:-1:i==="top"?l?-1:1:0}function Xm(i){return{nx:Ym(i.joystickXRecenter,!1),ny:Ym(i.joystickYRecenter,!0)}}function qh(i,l){const o=Math.min(i,l),s=Math.max(6,o*.16),d=Math.max(1,o/2-s-2);return{knobRadius:s,reach:d}}function Hh({control:i,width:l,height:o,pos:s,dragging:d=!1}){const p=i.rotation,{knobRadius:_,reach:h}=qh(l,o),g=Math.max(7,Math.min(14,_*.62)),b=Math.max(7,Math.min(12,Math.min(l,o)*.1)),x=[{key:"xmax",value:i.joystickXMax??100,lx:1,ly:0},{key:"xmin",value:i.joystickXMin??-100,lx:-1,ly:0},{key:"ymax",value:i.joystickYMax??100,lx:0,ly:-1},{key:"ymin",value:i.joystickYMin??-100,lx:0,ly:1}];return u.jsxs("div",{className:"control-joystick",style:{width:"100%",height:"100%",position:"relative"},children:[u.jsx("div",{className:"joystick-oval",style:{position:"absolute",left:"50%",top:"50%",width:h*2,height:h*2,transform:"translate(-50%, -50%)"}}),x.map(k=>{const T=da(k.lx,k.ly,p);return u.jsx("span",{className:"joystick-edge-label",style:{position:"absolute",left:"50%",top:"50%",fontSize:b,transform:`translate(-50%, -50%) translate(${T.x*h}px, ${T.y*h}px) rotate(${p}deg)`},children:k.value},k.key)}),u.jsx("div",{className:"joystick-knob",style:{position:"absolute",left:"50%",top:"50%",width:_*2,height:_*2,fontSize:g,transform:`translate(calc(-50% + ${s.nx*h}px), calc(-50% + ${s.ny*h}px))`,transition:d?"none":"transform 0.12s ease-out"},children:u.jsx("span",{style:{display:"inline-block",transform:i.rotation?`rotate(${i.rotation}deg)`:void 0,whiteSpace:i.rotation===90||i.rotation===270?"nowrap":void 0},children:i.name})})]})}function l_({control:i,disabled:l,onJoystick:o,width:s,height:d}){const p=i.rotation,_=C.useRef(null),[h,g]=C.useState(()=>{const W=Xm(i),H=da(W.nx,W.ny,p);return{nx:H.x,ny:H.y}}),b=C.useRef(!1),x=C.useRef(null),k=i.joystickXMin??-100,T=i.joystickXMax??100,R=i.joystickYMin??-100,B=i.joystickYMax??100;function $(W,H){const te=da(W,H,sc(p)),ue=$m(te.x,k,T),fe=$m(-te.y,R,B);(!x.current||x.current.x!==ue||x.current.y!==fe)&&(x.current={x:ue,y:fe},o(i.name,ue,fe))}function F(W){const H=_.current;if(!H)return;const te=H.getBoundingClientRect(),{reach:ue}=qh(te.width,te.height);let fe=(W.clientX-(te.left+te.width/2))/ue,Z=(W.clientY-(te.top+te.height/2))/ue;const J=Math.hypot(fe,Z);J>1&&(fe/=J,Z/=J),g({nx:fe,ny:Z}),$(fe,Z)}function P(){const W=i.joystickXRecenter??"middle",H=i.joystickYRecenter??"middle";if(W==="none"&&H==="none")return;const te=da(h.nx,h.ny,sc(p)),ue=Xm(i),fe={x:W==="none"?te.x:ue.nx,y:H==="none"?te.y:ue.ny},Z=da(fe.x,fe.y,p),J={nx:Z.x,ny:Z.y};b.current=!1,g(J),$(J.nx,J.ny)}return u.jsx("div",{ref:_,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:W=>{l||(W.preventDefault(),W.currentTarget.setPointerCapture(W.pointerId),b.current=!0,F(W))},onPointerMove:W=>{l||!b.current||W.buttons===0||F(W)},onPointerUp:P,onPointerCancel:P,onLostPointerCapture:P,children:u.jsx(Hh,{control:i,width:s,height:d,pos:h,dragging:b.current})})}const a_=[{direction:"up",rotate:0},{direction:"right",rotate:90},{direction:"down",rotate:180},{direction:"left",rotate:270}],i_="M 34 30 L 34 15 Q 34 8 41 8 L 59 8 Q 66 8 66 15 L 66 30 L 50 46 L 34 30 Z",s_=.1,o_={up:"OP",down:"NED",left:"VENSTRE",right:"HØJRE"},c_={up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]},u_=[{pos:"up",x:50,y:23},{pos:"right",x:78,y:50},{pos:"down",x:50,y:77},{pos:"left",x:22,y:50}];function $d(i,l){return Math.hypot(i,l)<s_?null:Math.abs(i)>=Math.abs(l)?i>0?"right":"left":l>0?"down":"up"}function d_(i,l){const[o,s]=c_[i],d=da(o,s,sc(l));return $d(d.x,d.y)??i}function Vh({control:i,active:l=null}){const o=i.rotation;return u.jsx("div",{className:"control-dpad",style:{width:"100%",height:"100%"},children:u.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet",children:[a_.map(s=>u.jsx("path",{className:`dpad-arm ${l===s.direction?"active":""}`,transform:`rotate(${s.rotate} 50 50)`,d:i_},s.direction)),u_.map(s=>u.jsx("text",{className:`dpad-label ${l===s.pos?"active":""}`,x:s.x,y:s.y,textAnchor:"middle",dominantBaseline:"central",transform:o?`rotate(${o} ${s.x} ${s.y})`:void 0,children:o_[d_(s.pos,o)]},s.pos))]})})}function f_({control:i,disabled:l,onDpad:o}){const s=C.useRef(null),d=C.useRef(null),p=C.useRef(!1),[_,h]=C.useState(null);function g(T){const R=s.current;if(!R)return{screen:null,logical:null};const B=R.getBoundingClientRect(),$=Math.min(B.width,B.height)/2,F=(T.clientX-(B.left+B.width/2))/$,P=(T.clientY-(B.top+B.height/2))/$,W=$d(F,P),H=da(F,P,sc(i.rotation)),te=$d(H.x,H.y);return{screen:W,logical:te}}function b(T){const R=s.current;if(!R)return!1;const B=R.getBoundingClientRect(),$=(T.clientX-B.left)/B.width,F=(T.clientY-B.top)/B.height;return $>=0&&$<=1&&F>=0&&F<=1}function x(T){T.logical!==d.current&&(d.current&&o(i.name,d.current,!1),d.current=T.logical,T.logical&&o(i.name,T.logical,!0)),h(T.screen)}function k(){p.current=!1,x({screen:null,logical:null})}return u.jsx("div",{ref:s,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:T=>{l||!b(T)||(T.preventDefault(),T.currentTarget.setPointerCapture(T.pointerId),p.current=!0,x(g(T)))},onPointerMove:T=>{l||!p.current||T.buttons===0||x(g(T))},onPointerUp:k,onPointerCancel:k,onLostPointerCapture:k,children:u.jsx(Vh,{control:i,active:_})})}const m_={button:"Knapper",slider:"Slidere",toggle:"Toggleknapper",radar:"Radar",text:"Tekstfelter",joystick:"Joysticks",dpad:"Dpads",plot:"Grafer"},h_=["button","slider","toggle","radar","text","joystick","dpad","plot"];function p_({unplaced:i,onAdd:l,onClose:o}){const s=C.useMemo(()=>h_.filter(h=>i.some(g=>g.type===h)),[i]),[d,p]=C.useState(s[0]??"button"),_=i.filter(h=>h.type===d);return C.useEffect(()=>{s.length>0&&!s.includes(d)&&p(s[0])},[s,d]),u.jsxs(Rt,{title:"Tilføj kontrol",onClose:o,children:[s.length>1&&u.jsx("div",{className:"segmented add-modal-tabs",children:s.map(h=>u.jsx("button",{type:"button",className:d===h?"active":"",onClick:()=>p(h),children:m_[h]},h))}),u.jsx("div",{className:"add-lists",children:s.length===0?u.jsx("div",{className:"device-list-empty",children:"Alle kontroller er allerede placeret."}):_.map(h=>u.jsxs("button",{type:"button",className:"add-entry",onClick:()=>l(h.name),children:[u.jsx("span",{children:h.name}),u.jsx("span",{className:"iconbtn",children:u.jsx(Lt,{name:"plus",size:22})})]},h.name))})]})}function Ph(i){const[l,o]=C.useState({w:0,h:0}),s=C.useRef(null),d=C.useRef(null);return C.useLayoutEffect(()=>{var g;const p=i.current;if(s.current===p)return;if((g=d.current)==null||g.disconnect(),d.current=null,s.current=p,!p){o(b=>b.w===0&&b.h===0?b:{w:0,h:0});return}const _=()=>{const b={w:p.clientWidth,h:p.clientHeight};o(x=>x.w===b.w&&x.h===b.h?x:b)};_();const h=new ResizeObserver(_);h.observe(p),d.current=h}),C.useEffect(()=>()=>{var p;(p=d.current)==null||p.disconnect(),d.current=null,s.current=null},[]),l}function ws(i){return i.centerX2!==null&&i.centerY2!==null&&i.spanX!==null&&i.spanY!==null}const g_=4,__=5;function v_(i){return i==="joystick"||i==="dpad"?{spanX:6,spanY:6}:i==="plot"?{spanX:7,spanY:4}:{spanX:g_,spanY:__}}function Km(i){if(!ws(i))return null;const l=i.centerX2/2,o=i.centerY2/2;return{x0:l-i.spanX/2,x1:l+i.spanX/2,y0:o-i.spanY/2,y1:o+i.spanY/2}}function b_(i,l,o=.02){return i.x0<l.x1-o&&l.x0<i.x1-o&&i.y0<l.y1-o&&l.y0<i.y1-o}function y_(i,l){return Math.max(1,Math.min(l.cols-1,i))}function w_(i,l){return Math.max(1,Math.min(l.rows-1,i))}function x_(i,l){return(i-l.margin)/l.stepX}function k_(i,l){return(l.areaH-i-l.margin)/l.stepY}function Qm(i,l,o){const s=l%2,p=(i%2+2)%2===s?i:i+1,_=o*2;return Math.max(l,Math.min(_-l,p))}function S_(){const i=le(V=>V.layout),l=le(V=>V.active),o=le(V=>V.saveLayout),s=le(V=>V.setEditMode),d=le(V=>V.askConfirm),p=!!(l!=null&&l.canEdit),[_,h]=C.useState(()=>i.map(V=>({...V}))),[g,b]=C.useState(null),[x,k]=C.useState(!1),[T,R]=C.useState(null),[B,$]=C.useState(null),[F,P]=C.useState(null),[W,H]=C.useState(!1),te=C.useRef(null),ue=Ph(te),fe=ue.w>0&&ue.h>0,Z=Sh(ue.w,ue.h,l==null?void 0:l.gridCols,l==null?void 0:l.gridRows),J=C.useMemo(()=>fe?K2(Z):[],[Z,fe]),xe=_.filter(ws),ve=_.filter(V=>!ws(V)),Oe=C.useMemo(()=>{const V=new Set;for(let D=0;D<xe.length;D+=1)for(let ie=D+1;ie<xe.length;ie+=1){const ye=Km(xe[D]),Ue=Km(xe[ie]);ye&&Ue&&b_(ye,Ue)&&(V.add(xe[D].name),V.add(xe[ie].name))}return V},[xe]),G=Oe.size>0,Ve=C.useMemo(()=>Wm(_)!==Wm(i),[_,i]),be=C.useMemo(()=>{if(!T||!B)return null;const V=_.find(ye=>ye.name===T);if(!V||V.spanX===null||V.spanY===null)return null;const D=Ad(B.cx,B.cy,V.spanX,V.spanY,Z),ie=ps({...V,centerX2:D.centerX2,centerY2:D.centerY2},Z);return ie?{name:V.name,rect:ie}:null},[_,T,B,Z]);function Ee(V,D){h(ie=>ie.map(ye=>ye.name===V?D(ye):ye))}function z(V){const D=te.current;if(!D)return{x:0,y:0};const ie=D.getBoundingClientRect(),ye=D.clientWidth/ie.width,Ue=D.clientHeight/ie.height;return{x:Math.max(0,Math.min(D.clientWidth,(V.clientX-ie.left)*ye)),y:Math.max(0,Math.min(D.clientHeight,(V.clientY-ie.top)*Ue))}}function ne(V,D){V.stopPropagation(),b(D.name);const ie=ps(D,Z);ie&&(R(D.name),$({cx:ie.cx,cy:ie.cy}),V.currentTarget.setPointerCapture(V.pointerId))}function me(V){if(T){const{x:D,y:ie}=z(V),ye=_.find(De=>De.name===T),Ue=ye?ps(ye,Z):null;if(!Ue){$({cx:D,cy:ie});return}const ce=Ue.width/2,Pe=Ue.height/2;$({cx:Math.max(Z.margin+ce,Math.min(Z.areaW-Z.margin-ce,D)),cy:Math.max(Z.margin+Pe,Math.min(Z.areaH-Z.margin-Pe,ie))});return}if(F){const{x:D,y:ie}=z(V),{name:ye,side:Ue,fixedWhole:ce}=F;Ee(ye,Pe=>{if(Pe.spanX===null||Pe.spanY===null||Pe.centerX2===null||Pe.centerY2===null)return Pe;if(Ue==="left"||Ue==="right"){const St=Math.round(x_(D,Z));if(Ue==="right"){const Fn=Math.max(ce+1,Math.min(Z.cols-1,St))-ce;return{...Pe,spanX:Fn,centerX2:ce*2+Fn}}const dn=Math.min(ce-1,Math.max(0,St)),jn=ce-dn;return{...Pe,spanX:jn,centerX2:ce*2-jn}}const De=Math.round(k_(ie,Z));if(Ue==="top"){const dn=Math.max(ce+1,Math.min(Z.rows-1,De))-ce;return{...Pe,spanY:dn,centerY2:ce*2+dn}}const Ke=Math.min(ce-1,Math.max(0,De)),kt=ce-Ke;return{...Pe,spanY:kt,centerY2:ce*2-kt}})}}function de(){if(T&&B){const V=_.find(D=>D.name===T);if(V&&V.spanX!==null&&V.spanY!==null){const D=Ad(B.cx,B.cy,V.spanX,V.spanY,Z);Ee(T,ie=>({...ie,centerX2:D.centerX2,centerY2:D.centerY2}))}}R(null),$(null),P(null)}function Se(V,D,ie){if(V.stopPropagation(),D.centerX2===null||D.centerY2===null||D.spanX===null||D.spanY===null)return;const ye=(D.centerX2-D.spanX)/2,Ue=(D.centerX2+D.spanX)/2,ce=(D.centerY2-D.spanY)/2,Pe=(D.centerY2+D.spanY)/2,De=ie==="right"?ye:ie==="left"?Ue:ie==="top"?ce:Pe;b(D.name),P({name:D.name,side:ie,fixedWhole:De}),V.currentTarget.setPointerCapture(V.pointerId)}function E(V){Ee(V,D=>{const ie=(D.rotation+270)%360;if(D.spanX===null||D.spanY===null||D.centerX2===null||D.centerY2===null)return{...D,rotation:ie};const ye=y_(D.spanY,Z),Ue=w_(D.spanX,Z);return{...D,rotation:ie,spanX:ye,spanY:Ue,centerX2:Qm(D.centerX2,ye,Z.cols-1),centerY2:Qm(D.centerY2,Ue,Z.rows-1)}})}function U(V){Ee(V,D=>({...D,centerX2:null,centerY2:null,spanX:null,spanY:null,rotation:0})),b(null)}function re(V){k(!1);const D=_.find(ce=>ce.name===V);if(!D)return;const{spanX:ie,spanY:ye}=v_(D.type),Ue=Ad(Z.areaW/2,Z.areaH/2,ie,ye,Z);Ee(V,()=>({...D,spanX:ie,spanY:ye,rotation:0,centerX2:Ue.centerX2,centerY2:Ue.centerY2})),b(V)}async function oe(){G||(H(!0),await o(_),H(!1))}function ke(){if(!Ve){s(!1);return}d({title:"Kassér ændringer",message:"Vil du forlade redigering og kassere dine layout-ændringer?",confirmLabel:"Kassér",onConfirm:()=>s(!1)})}return u.jsxs("div",{className:"edit-view",children:[u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:"controls-area",ref:te,style:{touchAction:"none"},onPointerMove:me,onPointerUp:de,onPointerDown:()=>b(null),children:fe&&u.jsxs(u.Fragment,{children:[u.jsx("svg",{width:Z.areaW,height:Z.areaH,style:{position:"absolute",inset:0,pointerEvents:"none"},children:J.map((V,D)=>u.jsx("circle",{cx:V.x,cy:V.y,r:2.5,fill:"rgba(198,80,78,0.45)"},D))}),be&&u.jsx("div",{className:"snap-preview",style:{left:be.rect.cx,top:be.rect.cy,width:be.rect.width,height:be.rect.height}}),xe.map(V=>{const D=T===V.name&&B,ie=ps(V,Z);if(!ie)return null;const ye=D?B.cx:ie.cx,Ue=D?B.cy:ie.cy,ce=g===V.name,Pe={left:ye,top:Ue,width:ie.width,height:ie.height,outline:ce?"3px solid var(--text)":"none",outlineOffset:2,zIndex:ce?2:1};return u.jsxs("div",{className:`control ${Oe.has(V.name)?"colliding":""}`,style:Pe,onPointerDown:De=>ne(De,V),children:[V.type==="button"?u.jsx("div",{className:"control-button",style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},children:u.jsx(oc,{name:V.name,width:ie.width,height:ie.height,rotation:V.rotation})}):V.type==="toggle"?u.jsx("div",{className:"control-toggle on",style:{width:"100%",height:"100%"},children:u.jsx(oc,{name:V.name,width:ie.width,height:ie.height,rotation:V.rotation})}):V.type==="radar"?u.jsx(Lh,{control:V,pings:[],width:ie.width,height:ie.height,preview:!0}):V.type==="plot"?u.jsx(zh,{control:V,points:[],width:ie.width,height:ie.height,preview:!0}):V.type==="text"?u.jsx(Oh,{message:V.name,width:ie.width,height:ie.height,rotation:V.rotation}):V.type==="joystick"?u.jsx(Hh,{control:V,width:ie.width,height:ie.height,pos:{nx:0,ny:0}}):V.type==="dpad"?u.jsx(Vh,{control:V}):u.jsx("div",{className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:u.jsx(Uh,{name:V.name,rotation:V.rotation,width:ie.width,height:ie.height,value:50,showEnds:!0,lowLabel:String(V.sliderMin??0),highLabel:String(V.sliderMax??100),fillColor:Oe.has(V.name)?"var(--disabled)":"var(--red)"})}),ce&&u.jsxs(u.Fragment,{children:[u.jsx("button",{type:"button",className:"edit-handle edit-handle-top","aria-label":"Ændr højde foroven",onPointerDown:De=>Se(De,V,"top")}),u.jsx("button",{type:"button",className:"edit-handle edit-handle-bottom","aria-label":"Ændr højde forneden",onPointerDown:De=>Se(De,V,"bottom")}),u.jsx("button",{type:"button",className:"edit-handle edit-handle-left","aria-label":"Ændr bredde til venstre",onPointerDown:De=>Se(De,V,"left")}),u.jsx("button",{type:"button",className:"edit-handle edit-handle-right","aria-label":"Ændr bredde til højre",onPointerDown:De=>Se(De,V,"right")}),u.jsx("button",{type:"button",className:"edit-corner-btn edit-corner-rotate","aria-label":"Roter",title:"Roter",onPointerDown:De=>De.stopPropagation(),onClick:()=>E(V.name),children:"⟲"}),u.jsx("button",{type:"button",className:"edit-corner-btn edit-corner-remove","aria-label":"Fjern fra layout",title:"Fjern fra layout",onPointerDown:De=>De.stopPropagation(),onClick:()=>U(V.name),children:u.jsx(Lt,{name:"delete",size:16})})]})]},V.name)}),p&&u.jsx("button",{type:"button",className:"fab",style:{width:52,height:52,right:12,bottom:12},onPointerDown:V=>V.stopPropagation(),onClick:()=>k(!0),"aria-label":"Tilføj kontrol",children:u.jsx(Lt,{name:"plus",size:24})}),W&&u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})]})})}),u.jsxs("div",{className:"edit-band edit-actions-band",children:[u.jsx("button",{className:"btn btn-outline",style:{flex:1},type:"button",onClick:ke,disabled:W,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary",style:{flex:1},type:"button",onClick:oe,disabled:G||W,children:W?"Gemmer...":"Gem"})]}),x&&u.jsx(p_,{unplaced:ve,onAdd:re,onClose:()=>k(!1)})]})}function Wm(i){return JSON.stringify(i.map(l=>({type:l.type,name:l.name,centerX2:l.centerX2,centerY2:l.centerY2,spanX:l.spanX,spanY:l.spanY,rotation:l.rotation})))}function E_(){const i=le(H=>H.layout),l=le(H=>H.editMode),o=le(H=>H.active),s=le(H=>H.sliderValues),d=le(H=>H.toggleValues),p=le(H=>H.radarPings),_=le(H=>H.textValues),h=le(H=>H.plotSeries),g=le(H=>H.toggleSideMenu),b=le(H=>H.sendButton),x=le(H=>H.sendSlider),k=le(H=>H.sendToggle),T=le(H=>H.sendJoystick),R=le(H=>H.sendDpad),B=C.useRef(null),$=Ph(B),F=Sh($.w,$.h,o==null?void 0:o.gridCols,o==null?void 0:o.gridRows),P=$.w>0&&$.h>0,W=i.filter(ws);return u.jsxs("div",{className:"screen control-screen",children:[u.jsx(sf,{title:"Pico Kontrol Panel",onMenu:()=>g()}),l?u.jsx(S_,{}):u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:"controls-area",ref:B,onContextMenu:H=>H.preventDefault(),onPointerDown:H=>{H.target===H.currentTarget&&H.preventDefault()},children:P?W.map(H=>{const te=ps(H,F);return te?u.jsx(Ug,{control:H,rect:te,disabled:!1,latestValue:H.type==="slider"?s[H.name]:void 0,toggleValue:H.type==="toggle"?d[H.name]:void 0,radarPings:H.type==="radar"?p[H.name]:void 0,textValue:H.type==="text"?_[H.name]:void 0,plotPoints:H.type==="plot"?h[H.name]:void 0,onButton:b,onSlider:x,onToggle:k,onJoystick:T,onDpad:R},H.name):null}):u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})})})]})}const T_="",Zm="",Jm="",ca="";function ds(i){return new Promise(l=>setTimeout(l,i))}class M_{constructor(l){this.transport=l}async interrupt(){await this.transport.write(Jm),await ds(80),await this.transport.write(Jm)}async friendlyRepl(){await this.transport.write(Zm)}async softReset(){await this.transport.write(ca)}async stop(){await this.interrupt(),await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(`try:
    ble.shutdown()
except Exception:
    pass
`).catch(()=>{})}async runFile(l,o){await this.interrupt(),await this.waitForFriendlyPrompt().catch(async()=>{await this.friendlyRepl().catch(()=>{}),await ds(180)}),await ds(120),o==null||o(),await this.transport.writeLine(`import builtins as _pkp_builtins; exec(_pkp_builtins.open(${JSON.stringify(l)}).read())`)}async sendFriendlyLine(l){await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(l)}async sendProgramInput(l){await this.transport.writeLine(l)}async enterRawRepl(l=2500){if(await this.interrupt(),await ds(80),await this.transport.write(`\r
`),await ds(40),!(await this.collectUntil(async()=>{await this.transport.write(T_)},s=>s.includes("raw REPL")||s.includes("raw REPL; CTRL-B to exit"),l)).includes("raw REPL"))throw new Error("Kunne ikke skifte til MicroPython raw REPL.")}async exec(l,o=6e3){await this.enterRawRepl();const s=await this.collectUntil(async()=>{await this.transport.write(l),l.endsWith(`
`)||await this.transport.write(`
`),await this.transport.write(ca)},d=>d.includes(`${ca}${ca}`)||d.includes(`${ca}>`),o);return await this.friendlyRepl().catch(()=>{}),N_(s)}collectUntil(l,o,s){return new Promise((d,p)=>{let _="",h=null;const g=setTimeout(()=>{h==null||h(),p(new Error("Timeout ved USB REPL kommando."))},s);h=this.transport.addDataListener(b=>{_+=b,o(_)&&(clearTimeout(g),h==null||h(),d(_))}),l().catch(b=>{clearTimeout(g),h==null||h(),p(b instanceof Error?b:new Error("USB REPL kommando fejlede."))})})}async waitForFriendlyPrompt(l=1600){await this.collectUntil(async()=>{await this.transport.write(Zm)},o=>/(^|\r?\n)>>> ?$/.test(o),l)}}function N_(i){const l=i.indexOf("OK"),o=i.indexOf(ca,l>=0?l:0),s=o>=0?i.indexOf(ca,o+1):-1;if(l<0||o<0)return{output:i.trim(),error:"",raw:i};const d=i.slice(l+2,o).replace(/^\r?\n/,"").trimEnd(),p=s>=0?i.slice(o+1,s).trim():"";return{output:d,error:p,raw:i}}const j_=[{version:"MicroPython v1.28.0",date:"2026-04-06",stamp:"20260406",tag:"v1.28.0"},{version:"MicroPython v1.27.0",date:"2025-12-09",stamp:"20251209",tag:"v1.27.0"},{version:"MicroPython v1.26.1",date:"2025-09-11",stamp:"20250911",tag:"v1.26.1"},{version:"MicroPython v1.26.0",date:"2025-08-09",stamp:"20250809",tag:"v1.26.0"},{version:"MicroPython v1.25.0",date:"2025-04-15",stamp:"20250415",tag:"v1.25.0"},{version:"MicroPython v1.24.1",date:"2024-11-29",stamp:"20241129",tag:"v1.24.1"},{version:"MicroPython v1.24.0",date:"2024-10-25",stamp:"20241025",tag:"v1.24.0"},{version:"MicroPython v1.23.0",date:"2024-06-02",stamp:"20240602",tag:"v1.23.0"},{version:"MicroPython v1.22.2",date:"2024-02-22",stamp:"20240222",tag:"v1.22.2"},{version:"MicroPython v1.22.1",date:"2024-01-05",stamp:"20240105",tag:"v1.22.1"}],R_=[{board:"Raspberry Pi Pico",firmwareName:"RPI_PICO"},{board:"Raspberry Pi Pico W",firmwareName:"RPI_PICO_W"}],Rl=R_.flatMap(({board:i,firmwareName:l})=>j_.map(({version:o,date:s,stamp:d,tag:p})=>{const _=`${l}-${d}-${p}.uf2`;return{board:i,version:o,date:s,fileName:_,url:`https://micropython.org/resources/firmware/${_}`}})),zd=512,Ud=`import builtins as _pkp_builtins
`;function Fr(i){return JSON.stringify(i)}function A_(i){return`bytes.fromhex(${JSON.stringify([...i].map(l=>l.toString(16).padStart(2,"0")).join(""))})`}function C_(i,l){return`${i==="/"?"":i.replace(/\/$/,"")}/${l}`}class D_{constructor(l){this.repl=l}async list(l="/"){const o=`
import os
base = ${Fr(l)}
for name in os.listdir(base):
    p = (${Fr(l)}.rstrip('/') + '/' + name) if ${Fr(l)} != '/' else '/' + name
    try:
        st = os.stat(p)
        mode = st[0]
        kind = 'dir' if (mode & 0x4000) else 'file'
        size = st[6]
    except Exception:
        kind = 'unknown'
        size = -1
    print(name + '\\t' + kind + '\\t' + str(size))
`,s=await this.repl.exec(o);if(s.error)throw new Error(s.error);return s.output.split(/\r?\n/).map(d=>d.trim()).filter(Boolean).map(d=>{const[p,_,h]=d.split("	"),g=_==="dir"||_==="file"?_:"unknown",b=parseInt(h??"",10);return{name:p,path:C_(l,p),type:g,...Number.isFinite(b)&&b>=0?{size:b}:{}}})}async readText(l){const o=`
import sys
${Ud}with _pkp_builtins.open(${Fr(l)}, 'rb') as f:
    while True:
        b = f.read(${zd})
        if not b:
            break
        print(b.hex())
`,s=await this.repl.exec(o,1e4);if(s.error)throw new Error(s.error);const d=s.output.replace(/\s+/g,"");return new TextDecoder().decode(O_(d))}async writeText(l,o,s){const d=new TextEncoder().encode(o);if(s==null||s(5,"Klargør fil..."),await this.repl.exec(`${Ud}_pkp_builtins.open(${Fr(l)}, 'wb').close()`),d.length===0){s==null||s(100,"Gemt på Pico");return}for(let p=0;p<d.length;p+=zd){const _=d.slice(p,p+zd),h=`
${Ud}with _pkp_builtins.open(${Fr(l)}, 'ab') as f:
    f.write(${A_(_)})
`,g=await this.repl.exec(h,1e4);if(g.error)throw new Error(g.error);const b=Math.min(p+_.length,d.length);s==null||s(10+Math.round(b/d.length*85),`Gemmer ${b}/${d.length} bytes...`)}s==null||s(100,"Gemt på Pico")}async replaceTextSafely(l,o,s,d={}){const p=`${l}.tmp`;if(await this.writeText(p,o,(g,b)=>s==null?void 0:s(Math.min(70,g*.7),b)),s==null||s(78,"Verificerer fil..."),await this.readText(p)!==o)throw await this.delete(p).catch(()=>{}),new Error(`Verificering fejlede for ${l}.`);s==null||s(88,"Udskifter fil...");let h=!!d.createBackup;if(h){const g=await this.readText(l).catch(()=>null);h=g!==null&&g!==o}if(h){const g=await this.nextBackupPath(l).catch(()=>`${l}.backup`);await this.rename(l,g).catch(()=>{})}else await this.delete(l).catch(()=>{});await this.rename(p,l),s==null||s(100,"Installeret på Pico")}async delete(l){const o=await this.repl.exec(`
import os
os.remove(${Fr(l)})
`);if(o.error)throw new Error(o.error)}async nextBackupPath(l){const o=await this.list("/"),s=new Set(o.map(k=>k.path.toLowerCase())),d=l.replace(/\\/g,"/"),p=d.lastIndexOf("/"),_=p>=0?d.slice(0,p+1):"/",h=p>=0?d.slice(p+1):d.replace(/^\/+/,""),g=h.lastIndexOf("."),b=g>0?h.slice(0,g):h,x=g>0?h.slice(g):"";for(let k=1;k<1e3;k+=1){const T=`${_}${b}_backup${k}${x}`;if(!s.has(T.toLowerCase()))return T}return`${_}${b}_backup${Date.now()}${x}`}async rename(l,o){const s=await this.repl.exec(`
import os
os.rename(${Fr(l)}, ${Fr(o)})
`);if(s.error)throw new Error(s.error)}}function O_(i){const l=new Uint8Array(Math.floor(i.length/2));for(let o=0;o<l.length;o+=1)l[o]=parseInt(i.slice(o*2,o*2+2),16);return l}const L_=`from machine import Pin                    # Giver adgang til pins på Pico W, fx LED'en\r
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
            raise RuntimeError("Wi-Fi tidsgrænse")  # Giv op med en fejl
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
        vejr = svar.json()["current"]      # Find delen med aktuelt vejr i svaret
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
`,B_=`import ubluetooth\r
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
ALLOWED_COMMAND_TYPES  = ["button", "slider", "toggle", "radar", "text", "joystick", "dpad", "plot"]\r
MAX_NAME_LENGTH        = 14\r
SLIDER_RECENTER_MODES  = ["none", "bottom", "middle", "top"]\r
PLOT_STYLES            = ["line", "bar"]\r
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
# Extra wire fields per control type, beyond the 5 shared geometry fields\r
# (x, y, width, height, rotation), as (key, default) in wire order. Drives\r
# default-seeding in _initialize_controls and line formatting shared by\r
# save_layout_to_file/send_layout_to_web (_format_control_line). Adding a\r
# control type's fields is then just: add a row here, add its parsing branch\r
# in _initialize_controls, and add getters in send_<type>/on_<type>.\r
_EXTRA_FIELDS = {\r
    "slider":   (("min", 0), ("max", 100), ("recenter", "none")),\r
    "toggle":   (("initial", 0),),\r
    "radar":    (("minAngle", 0), ("maxAngle", 180), ("maxDistance", 200), ("fadeMs", 1200)),\r
    "joystick": (("xmin", -100), ("xmax", 100), ("ymin", -100), ("ymax", 100),\r
                 ("xrecenter", "middle"), ("yrecenter", "middle")),\r
    "plot":     (("min", 0), ("max", 100), ("history", 30), ("style", "line")),\r
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
        # ---- BLE state\r
        self.ble = ubluetooth.BLE()\r
        # Force the radio off first: a previous program's radio/IRQ can\r
        # still be live even after its script stopped (see the doc).\r
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
        # icon_id is an icon slug string (e.g. "tabler:robot"), stored/echoed as\r
        # text so the app can point a device at any icon; never cast to int, so a\r
        # slug survives round-trips. Slugs contain no comma, so they are safe in the\r
        # comma-delimited protocol. Empty means unset -> the app uses its default.\r
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
                # spec: ('plot', NAME, min, max, history, style)\r
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
            # File present but unreadable: fall back in memory only and leave\r
            # the file intact for inspection/recovery.\r
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
                # Only geometry carries over from Layout.txt (see\r
                # _merge_base_with_layout_override) - type-specific fields\r
                # like a slider's range always come from this run's\r
                # BluetoothControls, so they are not parsed back out here.\r
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
                # Only geometry is kept (see _merge_base_with_layout_override);\r
                # type-specific fields always come from this run's\r
                # BluetoothControls, not from what the app saved.\r
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
        unlike send_text/send_radar/send_toggle_state - see the doc)."""\r
        if not self.connected:\r
            return\r
        try:\r
            clean_name = self._protocol_field(name)\r
            line = "plot,{},{}".format(clean_name, round(float(value), 2))\r
            if label is not None:\r
                line += "," + self._protocol_field(label)\r
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
`,z_=`from machine import Pin, time_pulse_us\r
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
        return cms`,U_=`import array, time\r
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
`,q_=`from machine import Pin\r
import utime as time\r
from PicoBluetooth import PicoBluetooth\r
import PicoRobotics\r
\r
\r
# Robotbil styret med et D-pad (fire retningsknapper) og en fart-skyder.
# D-pad'et sender en retning (op/ned/venstre/hoejre) og om den er trykket ned.
# Du kan holde flere retninger ved at trække fingeren mellem knapperne.\r
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.\r
DEVICE_NAME = 'DpadBil'\r
\r
# BluetoothControls bestemmer, hvilke kontroller appen viser.
# dpad:   ('dpad', NAVN)  -- fire pileknapper i et felt.
# slider: ('slider', NAVN, min, max, recenter)  -- en skyder.
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
# board er motorstyringen fra Kitronik Pico Robotics.
board = PicoRobotics.KitronikPicoRobotics()\r
\r
# FART skruer op og ned for farten. Start på fuld fart, så bilen virker med det\r
# samme; træk FART ned i appen for at køre langsommere.\r
speed_percent = 100\r
\r
# held holder styr på, hvilke retninger der er trykket ned lige nu.
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
    """FART-skyderen sætter farten."""
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
# callbacks=globals() gør, at PicoBluetooth kan finde on_dpad osv.
ble = PicoBluetooth(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())\r
\r
\r
while True:\r
    # BLE-funktionerne styrer bilen. Hold programmet i gang og giv CPU-tid\r
    # til Bluetooth.\r
    time.sleep_ms(100)\r
`,H_=`from machine import Pin                    # Giver adgang til pins på Pico W, fx LED'en\r
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
# Hver graf bestemmer selv, hvor mange punkter den viser. Tallet staar direkte
# i BluetoothControls nedenfor: ("plot", NAVN, min, max, antal_punkter, type).
# Vaelg fx 5 til en lille graf eller 20 til en stor graf.
# Vejret hentes uafhængigt af Bluetooth (se hovedloekken nederst) - Picoen\r
# bliver ved med at samle målinger i baggrunden, også når ingen er forbundet,\r
# i takt med OPDATER_HVERT_MS herunder. Der hentes stadig ingen historik fra\r
# Open-Meteo - alt i graferne er noget Picoen faktisk selv har målt/hentet,\r
# mens den kørte.
TEMP_MIN = -10                             # Temperaturgrafens akse i grader C - juster efter årstid
TEMP_MAX = 35
TEMP_PUNKTER = 20                          # Antal punkter i temperaturgrafen
REGN_MIN = 0                               # Nedbørsgrafens akse i mm - juster hvis I måler kraftig regn
REGN_MAX = 10
REGN_PUNKTER = 20                          # Antal punkter i regngrafen
\r
BluetoothControls = (                          # Felterne appen viser i kontrolpanelet\r
    ("text", "STATUS"),                        # Viser hvad programmet laver lige nu\r
    ("plot", "TEMP", TEMP_MIN, TEMP_MAX, TEMP_PUNKTER, "line"),  # Temperatur som linjegraf
    ("plot", "REGN", REGN_MIN, REGN_MAX, REGN_PUNKTER, "bar"),   # Nedbør som søjlegraf
    ("button", "NULSTIL"),                     # Rydder graferne og starter forfra med nye målinger\r
)\r
\r
OPDATER_HVERT_MS = 60 * 1000               # Hent nyt vejr hvert 60. sekund - samme takt som API-eksemplet\r
WIFI_TIMEOUT_MS = 15000                    # Giv op efter 15 sekunder uden Wi-Fi\r
\r
# Hver rigtig måling gemmes også her på Picoen (nyeste sidst). Der gemmes nok
# linjer til den største graf i BluetoothControls, så man kan forbinde når
# som helst - selv efter Picoen har kørt helt
# for sig selv i timevis - og med det samme se den seneste vejrdata, den har
# samlet, uden at hente noget fra Open-Meteo igen. Det er stadig kun Picoens
# egne, tidligere hentede målinger, ikke Open-Meteos historik.
DATA_FILE = "VejrMaalinger.txt"
\r
# Henter kun det aktuelle vejr, ligesom API-eksemplet - ingen historik/time-data.
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
# Open-Meteos aktuelle vejr opdateres sjældnere, end vi spørger efter det
# (OPDATER_HVERT_MS). Vi husker tidsstemplet fra sidste rigtige måling, så vi\r
# kan se, om et nyt kald bare gentager den samme måling, og springe dubletten
# over i stedet for at proppe den samme værdi ind i graferne flere gange.
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
def forbind_wifi():
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
            raise RuntimeError("Wi-Fi tidsgrænse")  # Giv op med en fejl
        time.sleep_ms(250)                 # Vent lidt før vi tjekker igen\r
\r
    print("Wi-Fi forbundet:", wlan.ifconfig()[0])  # Skriv Pico W's IP-adresse


def max_graf_punkter():
    """Find det største antal punkter fra plot-linjerne i BluetoothControls."""
    maks = 1
    for kontrol in BluetoothControls:
        if len(kontrol) >= 5 and kontrol[0] == "plot":
            try:
                antal = int(kontrol[4])
                if antal > maks:
                    maks = antal
            except Exception:
                pass
    return maks


def graf_punkter(navn, standard):
    """Find antal punkter for en bestemt graf i BluetoothControls."""
    for kontrol in BluetoothControls:
        if len(kontrol) >= 5 and kontrol[0] == "plot" and kontrol[1] == navn:
            try:
                return int(kontrol[4])
            except Exception:
                return standard
    return standard


def gem_maaling(api_tid, temp, regn):
    """Føjer én rigtig måling til DATA_FILE og smider de ældste væk."""
    try:\r
        try:\r
            with open(DATA_FILE, "r") as f:\r
                linjer = [l.strip() for l in f.readlines() if l.strip()]\r
        except OSError:\r
            linjer = []                    # Filen findes ikke endnu - start med en tom liste\r
        linjer.append("{},{},{}".format(api_tid, temp, regn))
        linjer = linjer[-max_graf_punkter():]  # Behold nok til den største graf
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
            dele = linje.split(",")
            if len(dele) == 3:
                api_tid, temp_s, regn_s = dele
            else:
                api_tid = ""
                temp_s, regn_s = linje.split(",", 1)  # Gammelt filformat uden tidspunkt
            maalinger.append((api_tid, float(temp_s), float(regn_s)))
        except Exception:\r
            continue                       # Spring en beskadiget linje over i stedet for at fejle helt\r
    return maalinger


def seneste_gemte_api_tid():
    """Finder tidspunktet for den nyeste gemte maaling, hvis filen kendes."""
    maalinger = hent_gemte_maalinger()
    if not maalinger:
        return None
    api_tid = maalinger[-1][0]
    return api_tid if api_tid else None


def plot_label(api_tid):
    """Kort label til grafens vandrette akse."""
    if not api_tid:
        return ""
    return api_tid.split("T")[-1]


sidste_api_tid = seneste_gemte_api_tid()
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
        vejr = svar.json()["current"]      # Find delen med aktuelt vejr i svaret
        api_tid = vejr["time"]             # Open-Meteos eget tidsstempel for målingen\r
        klokkeslet = api_tid.split("T")[-1]  # Tag kun tiden efter T, fx 14:15\r
\r
        if api_tid == sidste_api_tid:      # Samme tidsstempel som sidst = samme måling igen\r
            vis("STATUS", "Uændret siden {}".format(klokkeslet))\r
            return                         # Spring dubletten over - intet nyt at vise i graferne\r
\r
        sidste_api_tid = api_tid\r
        temp = vejr["temperature_2m"]\r
        regn = vejr["precipitation"]\r
\r
        ble.send_plot("TEMP", temp, klokkeslet)  # Tilføj ét nyt punkt til temperaturgrafen
        ble.send_plot("REGN", regn, klokkeslet)  # Tilføj ét nyt punkt til nedbørsgrafen
        gem_maaling(api_tid, temp, regn)   # Gem samme måling på Picoen til efter reboot/reconnect
\r
        vis("STATUS", "Opdateret {}\\nTemp: {} C\\nRegn: {} mm".format(klokkeslet, temp, regn))\r
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
    maalinger = hent_gemte_maalinger()
    for gammel_tid, gammel_temp, gammel_regn in maalinger[-graf_punkter("TEMP", TEMP_PUNKTER):]:
        label = plot_label(gammel_tid)
        ble.send_plot("TEMP", gammel_temp, label)
    for gammel_tid, gammel_temp, gammel_regn in maalinger[-graf_punkter("REGN", REGN_PUNKTER):]:
        label = plot_label(gammel_tid)
        ble.send_plot("REGN", gammel_regn, label)
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
        ble.send_plot_clear("TEMP")        # Ryd temperaturgrafen i appen\r
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
`,V_=`from machine import Pin\r
import utime as time\r
from PicoBluetooth import PicoBluetooth\r
import PicoRobotics\r
\r
\r
# Robotbil styret med et joystick og en fart-skyder.
# Joysticket sender to tal: X (drej) og Y (frem/tilbage), begge -100..100.
# Vi blander dem til to motorer, ligesom en rigtig tankstyring.\r
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.\r
DEVICE_NAME = 'JoystickBil'\r
\r
# BluetoothControls bestemmer, hvilke kontroller appen viser.\r
# joystick: ('joystick', NAVN, xmin, xmax, ymin, ymax, x-recenter, y-recenter)
#   'middle' betyder, at aksen selv går tilbage til midten (0), når du slipper.
# slider:   ('slider', NAVN, min, max, recenter)  -- en skyder.
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
# board er motorstyringen fra Kitronik Pico Robotics.
board = PicoRobotics.KitronikPicoRobotics()\r
\r
# FART skruer op og ned for den maksimale fart. Start på fuld fart, så bilen\r
# virker med det samme; træk FART ned i appen for at køre langsommere.\r
speed_percent = 100\r
\r
# Vi husker joystickets seneste position, så en ny FART slår igennem med det samme.
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
    """Appen sender joystickets X (drej) og Y (frem/tilbage)."""
    global last_x, last_y\r
    if name == 'KORSEL':\r
        last_x = int(x)\r
        last_y = int(y)\r
        apply_drive()\r
        # Joysticket sender mange gange i sekundet - slet linjen hvis det fylder for meget.
        print('Joystick -> x:', last_x, 'y:', last_y)\r
\r
\r
def on_slider(name, value):\r
    """FART-skyderen sætter den maksimale fart."""
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
`,P_=`from machine import Pin\r
import utime as time\r
from PicoBluetooth import PicoBluetooth\r
from neopixel import Neopixel\r
\r
\r
# Her vælger du, hvor NeoPixel'en sidder.\r
# Prøv at ændre NEOPIXEL_BEN, hvis din ledning sidder et andet sted.\r
NEOPIXEL_BEN = 0\r
\r
# Vi bruger 1 NeoPixel. Tallet kan ændres, hvis du har en ring eller LED-stribe.
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
# Appen viser en knap og en skyder.
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
    """Kører når skyderen flyttes i appen."""
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
`,I_=`# PicoFly.py\r
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
`,F_=`import machine\r
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
        self.initPCA()`,G_=`from machine import Pin\r
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
# Appen får en kontakt-knap og et radar-display.
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
# board styrer servoen, og sensoren måler afstand med HC-SR04.
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
    """Reager på kontakt-knapper fra appen."""
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
`,$_=`from machine import Pin\r
import utime as time\r
from PicoBluetooth import PicoBluetooth\r
\r
\r
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.\r
DEVICE_NAME = 'SendTekst'\r
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
    """Send den foerste besked naar appen forbinder."""\r
    led.on()\r
    besked = 'Hej fra Picoen\\nJeg er klar!'\r
    ble.send_text('BESKED', besked)\r
    # print() viser \\n som et rigtigt linjeskift i terminalen, ligesom i appen.\r
    print('Sendte besked til appen:')\r
    print(besked)\r
\r
\r
def on_disconnect():\r
    """Sluk LED'en naar appen mister forbindelsen."""\r
    led.off()\r
\r
\r
ble = PicoBluetooth(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())\r
\r
counter = 0\r
\r
while True:\r
    # Send en flerlinjet besked med jaevne mellemrum, saa tekstfeltet er let at teste.\r
    if ble.connected:\r
        counter += 1\r
        besked = 'Besked {}\\nDette er en test af tekstfeltet.'.format(counter)\r
        ble.send_text('BESKED', besked)\r
        # Du bestemmer selv, hvad der skrives her - proev at slette de to linjer.\r
        print('Sendte besked til appen:')\r
        print(besked)\r
        time.sleep_ms(2000)\r
    else:\r
        time.sleep_ms(100)\r
`,Y_=`from machine import Pin, PWM, ADC\r
from PicoBluetooth import PicoBluetooth\r
from neopixel import Neopixel\r
from PicoFly import get_board\r
import utime as time\r
\r
# ============================================================\r
# Alarmstation med BLE kontrolpanel + servo-doerlaas\r
#\r
# Hardware / benoversigt:
#   Fri NeoPixel LED:       GP16\r
#   PIR bevaegelsessensor:  GP15\r
#   Buzzer:                 GP14\r
#   Vandsensor power/VCC:   GP0\r
#   Vandsensor signal/S:    GP26 / ADC0\r
#   Tastatur NeoPixel:      GP17
#   Tastatur-kolonner:      GP18, GP19, GP20
#   Tastatur-raekker:       GP21, GP22, GP27, GP28
#   Servo:                  PicoFly board.servo1\r
#\r
# Servo-vinkler:
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
# Servo via PicoFly
board = get_board()\r
servo = board.servo1\r
\r
SERVO_OPEN_ANGLE = 60\r
SERVO_CLOSED_ANGLE = 100\r
\r
# Dette tastatur laeses drejet i forhold til de trykte taster.
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
            print('BLE tekst-sendefejl:', e)
\r
\r
def ble_send_toggle_state(name, value):\r
    if ble_is_connected():\r
        try:\r
            ble.send_toggle_state(name, bool(value))\r
        except Exception as e:\r
            print('BLE kontakt-sendefejl:', e)
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
    Bruges naar koden paa tastaturet er rigtig, eller naar doeren aabnes fra
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
# ---------------- Tastatur ----------------
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
            authorized_open_door('tastatur')
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
        send_message('Tast ny kode paa tastatur og tryk OK')
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
        # Vandsensor
        if time.ticks_diff(now, next_water_check_ms) >= 0:\r
            latest_water = read_water_sensor(samples=4)\r
            next_water_check_ms = time.ticks_add(now, 700)\r
\r
            if alarm_enabled and latest_water >= water_threshold:\r
                trigger_alarm('Vand opdaget: {}'.format(latest_water))\r
\r
        # Tastatur
        key = read_key_event()\r
        if key is not None:\r
            print('Tast:', key)
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
`,X_=`from machine import Pin\r
import utime as time\r
from PicoBluetooth import PicoBluetooth\r
import PicoRobotics\r
\r
\r
# Simpelt tank-styringsprogram til en robotbil med to motorer.\r
# Hver skyder sender -100..100 og går tilbage til 0, når den slippes.
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.\r
DEVICE_NAME = 'TankBil'\r
\r
# BluetoothControls bestemmer, hvilke skydere appen viser.
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
# board er motorstyringen fra Kitronik Pico Robotics.
board = PicoRobotics.KitronikPicoRobotics()\r
\r
\r
def on_slider(name, value):\r
    """Reager på skydere fra appen."""
\r
    # Appen sender skyder-værdien som et tal. Vi bruger minus som baglæns.
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
        print('Ukendt skyder:', name)
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
`,ti=[{id:"program:send-text",path:"/main.py",label:"Send tekst (main.py)",description:"Startprogram med kun et tekstfelt, hvor Picoen sender beskeder til kontrolpanelet.",kind:"program",difficulty:"Nem",content:$_},{id:"program:neopixel-led",path:"/main.py",label:"NeoPixel lys (main.py)",description:"Startprogram til NeoPixel med hold-knap og lysstyrke-slider.",kind:"program",difficulty:"Nem",content:P_},{id:"program:tank-control",path:"/main.py",label:"Robotbil med tankstyring (main.py)",description:"Startprogram til robotbil med to motor-slidere.",kind:"program",difficulty:"Mellem",content:X_},{id:"program:dpad-control",path:"/main.py",label:"Robotbil med D-pad (main.py)",description:"Startprogram til robotbil styret med fire retningsknapper og fart-slider.",kind:"program",difficulty:"Mellem",content:q_},{id:"program:joystick-control",path:"/main.py",label:"Robotbil med joystick (main.py)",description:"Startprogram til robotbil styret med joystick og fart-slider.",kind:"program",difficulty:"Mellem",content:V_},{id:"program:radar-control",path:"/main.py",label:"Radar med afstandssensor (main.py)",description:"Startprogram til radar med servo, afstandssensor og scan-toggle.",kind:"program",difficulty:"Svær",content:G_},{id:"program:api-weather",path:"/main.py",label:"Vejr fra internettet (main.py)",description:"Startprogram der henter vejr fra et API over Wi-Fi og viser det i tekstfelter. Husk at skrive dit Wi-Fi navn og kodeord ind i main.py.",kind:"program",difficulty:"Svær",content:L_},{id:"program:graphs",path:"/main.py",label:"Vejrgrafer fra internettet (main.py)",description:"Startprogram der henter vejr fra et API og tegner temperatur og nedbør som grafer over tid. Husk at skrive dit Wi-Fi navn og kodeord ind i main.py.",kind:"program",difficulty:"Svær",content:H_},{id:"program:smart-home",path:"/main.py",label:"SmartHome alarmstation (main.py)",description:"Startprogram til alarmstation med dør-servo, keypad, PIR, vandsensor, buzzer og NeoPixel.",kind:"program",difficulty:"Svær",content:Y_},{id:"library:pico-bluetooth",path:"/PicoBluetooth.py",label:"PicoBluetooth.py",description:"Bluetooth-biblioteket der får Picoen til at tale med appen.",kind:"library",content:B_},{id:"library:pico-robotics",path:"/PicoRobotics.py",label:"PicoRobotics.py",description:"Bibliotek til Kitronik Pico Robotics Board.",kind:"library",content:F_},{id:"library:pico-fly",path:"/PicoFly.py",label:"PicoFly.py",description:"Bibliotek til PicoFly-board med motorer og servoer.",kind:"library",content:I_},{id:"library:hcsr04",path:"/hcsr04.py",label:"hcsr04.py",description:"Bibliotek til HC-SR04 ultralyds-afstandssensor.",kind:"library",content:z_},{id:"library:neopixel",path:"/neopixel.py",label:"neopixel.py",description:"Bibliotek til NeoPixel LED-strips og LED-ringe.",kind:"library",content:U_}],K_=11914;function Q_(){return typeof navigator<"u"&&"serial"in navigator&&!!navigator.serial}function W_(){return Q_()?{supported:!0,message:"USB-udvikling er tilgængelig i denne browser."}:{supported:!1,message:"USB-udvikling kræver en computer med Chrome, Edge eller Chromebook."}}class Z_{constructor(l={}){pe(this,"port",null);pe(this,"reader",null);pe(this,"writer",null);pe(this,"readLoopDone",null);pe(this,"readLoopActive",!1);pe(this,"disconnecting",!1);pe(this,"buffer","");pe(this,"events");pe(this,"dataListeners",new Set);this.events=l}get connected(){return!!this.port&&!!this.writer}get info(){var l;return((l=this.port)==null?void 0:l.getInfo())??null}async requestAndConnect(){if(!navigator.serial)throw new Error("Web Serial er ikke tilgængelig i denne browser.");const l=await navigator.serial.requestPort({filters:[{usbVendorId:K_}]});await this.openPort(l)}async connectKnownPort(l){await this.openPort(l)}async disconnect(){var g,b;const l=this.connected||!!this.port||!!this.reader,o=this.port,s=this.reader,d=this.writer,p=this.readLoopDone,_=s==null?void 0:s.closed.catch(()=>{}),h=d==null?void 0:d.closed.catch(()=>{});this.disconnecting=!0,this.readLoopActive=!1;try{await(s==null?void 0:s.cancel())}catch{}p&&await p.catch(()=>{}),await _;try{s==null||s.releaseLock()}catch{}this.reader===s&&(this.reader=null);try{await(d==null?void 0:d.close()),await h}catch{try{await(d==null?void 0:d.abort("disconnect"))}catch{}}try{d==null||d.releaseLock()}catch{}this.writer===d&&(this.writer=null),o&&await o.close(),this.port===o&&(this.port=null),this.buffer="",this.readLoopDone===p&&(this.readLoopDone=null),this.disconnecting=!1,l&&((b=(g=this.events).onDisconnect)==null||b.call(g))}async write(l){if(!this.writer)throw new Error("Ingen USB-forbindelse.");await this.writer.write(new TextEncoder().encode(l))}async writeLine(l){await this.write(`${l}\r
`)}addDataListener(l){return this.dataListeners.add(l),()=>this.dataListeners.delete(l)}async openPort(l){var s,d,p;if(await this.disconnect().catch(()=>{}),await l.open({baudRate:115200,bufferSize:4096}),this.port=l,this.writer=((s=l.writable)==null?void 0:s.getWriter())??null,!this.writer||!l.readable)throw new Error("USB-porten kunne ikke åbnes til læsning og skrivning.");const o=l.getInfo();(p=(d=this.events).onLog)==null||p.call(d,"success",`USB-forbindelse oprettet (${J_(o)}).`),this.readLoopDone=this.startReadLoop(l)}async startReadLoop(l){var d,p,_;this.readLoopActive=!0;const o=new TextDecoder;this.reader=((d=l.readable)==null?void 0:d.getReader())??null;const s=this.reader;if(s)try{for(;this.readLoopActive;){const{value:h,done:g}=await s.read();if(g)break;h&&this.consumeText(o.decode(h,{stream:!0}))}}catch(h){this.readLoopActive&&((_=(p=this.events).onLog)==null||_.call(p,"error",h instanceof Error?h.message:"USB-læsning stoppede."))}finally{try{s.releaseLock()}catch{}this.reader===s&&(this.reader=null),this.readLoopActive&&!this.disconnecting&&this.port===l&&this.closeAfterUnexpectedReadEnd(l)}}async closeAfterUnexpectedReadEnd(l){var p,_;const o=this.connected||this.port===l;this.disconnecting=!0,this.readLoopActive=!1;const s=this.writer,d=s==null?void 0:s.closed.catch(()=>{});try{await(s==null?void 0:s.close()),await d}catch{try{await(s==null?void 0:s.abort("disconnect"))}catch{}}try{s==null||s.releaseLock()}catch{}this.writer===s&&(this.writer=null);try{await l.close()}catch{}this.port===l&&(this.port=null),this.buffer="",this.readLoopDone=null,this.disconnecting=!1,o&&((_=(p=this.events).onDisconnect)==null||_.call(p))}consumeText(l){var o,s,d,p;(s=(o=this.events).onData)==null||s.call(o,l);for(const _ of this.dataListeners)_(l);for(this.buffer+=l;this.buffer.includes(`
`);){const _=this.buffer.indexOf(`
`),h=this.buffer.slice(0,_).replace(/\r$/,"");this.buffer=this.buffer.slice(_+1),(p=(d=this.events).onLine)==null||p.call(d,h)}}}function J_(i){const l=i.usbVendorId!==void 0?`VID ${i.usbVendorId.toString(16).padStart(4,"0")}`:"ukendt VID",o=i.usbProductId!==void 0?`PID ${i.usbProductId.toString(16).padStart(4,"0")}`:"ukendt PID";return`${l}, ${o}`}const Ih=15e3,eh=64*1024,th=1e5,Fh=new URL("/micropython/micropython.mjs",window.location.origin).toString(),ev=64*1024,nh=8;function Gh(){return typeof SharedArrayBuffer<"u"&&globalThis.crossOriginIsolated===!0}function tv(){return Gh()?new SharedArrayBuffer(ev):null}function nv(i,l){const o=new Int32Array(i,0,2),s=new Uint8Array(i),d=i.byteLength-nh,p=new TextEncoder().encode(l+`
`);let _=Atomics.load(o,0);for(const h of p)s[nh+_%d]=h,_+=1;Atomics.store(o,0,_),Atomics.notify(o,0)}const rv=new Set(["bluetooth","machine","network","PicoRobotics","rp2","ubluetooth"]);class lv{constructor(){pe(this,"worker",null);pe(this,"pending",null);pe(this,"nextId",0)}send(l,o={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython-terminalen er optaget. Stop den, eller vent på at kommandoen bliver færdig.",timedOut:!1,unavailable:!1});const s=++this.nextId,d=o.timeoutMs??Ih,p=this.ensureWorker();return new Promise(_=>{const h=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython-terminalen stoppede, fordi kommandoen tog for lang tid. Tjek for uendelige løkker.",timedOut:!0,unavailable:!1}),this.restartWorker()},d);this.pending={id:s,timer:h,onOutput:o.onOutput,resolve:_},p.postMessage({type:"run",id:s,code:iv(l),runtimeUrl:Fh})})}reset(){this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),this.restartWorker()}dispose(){var l;this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),(l=this.worker)==null||l.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const l=new Worker(new URL(""+new URL("offlineMicroPython.worker-CyZOxxkY.js",import.meta.url).href,import.meta.url),{type:"module"});return l.onmessage=o=>this.handleMessage(o.data),l.onerror=o=>{this.finish({ok:!1,output:"",error:o.message||"Browser-MicroPython-terminalen fejlede i browser-worker.",timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=l,l}handleMessage(l){var s;const o=this.pending;if(!(!o||l.id!==o.id||l.type==="ready")){if(l.type==="stdout"){(s=o.onOutput)==null||s.call(o,l.text);return}if(l.type==="unavailable"){this.finish({ok:!1,output:"",error:l.error,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:l.ok,output:l.output,error:l.error,timedOut:!1,unavailable:!1})}}finish(l){const o=this.pending;o&&(window.clearTimeout(o.timer),this.pending=null,o.resolve(l))}restartWorker(){var l;(l=this.worker)==null||l.terminate(),this.worker=null}}class av{constructor(){pe(this,"worker",null);pe(this,"pending",null);pe(this,"nextId",0);pe(this,"stdinSab",null)}run(l,o={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython kører allerede kode. Stop den først.",issues:[],timedOut:!1,unavailable:!1});const s=typeof o=="number"?o:o.timeoutMs===null?null:o.timeoutMs??Ih,d=typeof o=="number"?void 0:o.onOutput,p=typeof o=="number"?void 0:o.signal,_=Yd(l,{allowInput:!0});if(_.some(x=>x.level==="error"))return Promise.resolve({ok:!1,output:"",error:"",issues:_,timedOut:!1,unavailable:!1});const h=++this.nextId,g=this.ensureWorker(),b=tv();return this.stdinSab=b,new Promise(x=>{const k=$=>this.finish($),T=()=>{this.restartWorker(),k({ok:!1,output:"",error:"",issues:_,timedOut:!1,unavailable:!1})},R=s===null?null:window.setTimeout(()=>{k({ok:!1,output:"",error:"Browser-MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:_,timedOut:!0,unavailable:!1}),this.restartWorker()},s);if(this.pending={id:h,timer:R,timeoutMs:s,issues:_,onOutput:d,signal:p,abort:T,resolve:x},p!=null&&p.aborted){T();return}p==null||p.addEventListener("abort",T,{once:!0});const B={type:"run",id:h,code:l,runtimeUrl:Fh,interactive:!0,sab:b??void 0};g.postMessage(B)})}sendInput(l){const o=this.pending;!o||!this.stdinSab||(this.refreshTimeout(o),nv(this.stdinSab,l))}stop(){const l=this.pending;l&&(this.restartWorker(),this.finish({ok:!1,output:"",error:"Browser-MicroPython blev stoppet.",issues:l.issues,timedOut:!1,unavailable:!1}))}dispose(){var l;this.finish({ok:!1,output:"",error:"",issues:[],timedOut:!1,unavailable:!1}),(l=this.worker)==null||l.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const l=new Worker(new URL(""+new URL("offlineMicroPython.worker-CyZOxxkY.js",import.meta.url).href,import.meta.url),{type:"module"});return l.onmessage=o=>this.handleMessage(o.data),l.onerror=o=>{const s=this.pending;this.finish({ok:!1,output:"",error:o.message||"Offline MicroPython fejlede i browser-worker.",issues:(s==null?void 0:s.issues)??[],timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=l,l}handleMessage(l){var s;const o=this.pending;if(!(!o||l.id!==o.id||l.type==="ready")){if(l.type==="stdout"){this.refreshTimeout(o),(s=o.onOutput)==null||s.call(o,l.text);return}if(l.type==="unavailable"){this.finish({ok:!1,output:"",error:l.error,issues:o.issues,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:l.ok,output:l.output,error:l.error,issues:o.issues,timedOut:!1,unavailable:!1}),this.restartWorker()}}finish(l){var s;const o=this.pending;o&&(o.timer!==null&&window.clearTimeout(o.timer),(s=o.signal)==null||s.removeEventListener("abort",o.abort),this.pending=null,o.resolve(l))}refreshTimeout(l){l.timeoutMs!==null&&(l.timer!==null&&window.clearTimeout(l.timer),l.timer=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:l.issues,timedOut:!0,unavailable:!1}),this.restartWorker()},l.timeoutMs))}restartWorker(){var l;(l=this.worker)==null||l.terminate(),this.worker=null,this.stdinSab=null}}function iv(i){const l=JSON.stringify(i);return["try:",`    __pico_repl_value = eval(${l})`,"    if __pico_repl_value is not None:","        print(repr(__pico_repl_value))","except SyntaxError:",`    exec(${l})`,"finally:","    try:","        del __pico_repl_value","    except Exception:","        pass"].join(`
`)}function Yd(i,l={}){const o=[],s=new Blob([i]).size;s>eh&&o.push({level:"error",text:`Koden er ${s} bytes. Offline MicroPython kører kun små programmer op til ${eh} bytes.`});const d=i.split(/\r?\n/);for(let p=0;p<d.length;p+=1){const _=p+1,h=cc(d[p]).trim();if(!h)continue;const g=ov(h);g&&rv.has(g)&&o.push({level:"error",line:_,text:`${g} virker kun på Picoen. Forbind en Pico for at køre denne kode.`}),!l.allowInput&&sv(d[p])&&o.push({level:"error",line:_,text:"input() virker i hele programmer. Skriv programmet i editoren og tryk Kør, eller kør filen på Pico via USB."});const b=h.match(/\brange\(\s*(-?\d+)\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\)/);b&&cv(b)>th&&o.push({level:"error",line:_,text:`range(...) er for stor til offline kørsel. Brug højst ${th} gentagelser.`})}for(const p of uv(d))o.push({level:"warning",text:`Funktionen ${p} ser rekursiv ud. Hvis den ikke stopper, afbryder offline MicroPython efter få sekunder.`});return o}function cc(i){let l=null;for(let o=0;o<i.length;o+=1){const s=i[o];if((s==='"'||s==="'")&&i[o-1]!=="\\"&&(l=l===s?null:l??s),s==="#"&&!l)return i.slice(0,o)}return i}function sv(i){const l=cc(i);let o=null;for(let s=0;s<l.length;s+=1){const d=l[s];if((d==='"'||d==="'")&&l[s-1]!=="\\"){o=o===d?null:o??d;continue}if(!o&&!(!rh(l[s-1])||l.slice(s,s+5)!=="input")&&rh(l[s+5])&&l.slice(s+5).trimStart().startsWith("("))return!0}return!1}function rh(i){return!i||!/[A-Za-z0-9_]/.test(i)}function ov(i){const l=i.match(/^import\s+([A-Za-z_]\w*)/);if(l)return l[1];const o=i.match(/^from\s+([A-Za-z_]\w*)\s+import\b/);return(o==null?void 0:o[1])??null}function lh(i){const l=i.match(/^\s*/);return(l==null?void 0:l[0].replace(/\t/g,"    ").length)??0}function cv(i){const l=Number(i[1]),o=i[2]===void 0?void 0:Number(i[2]),s=i[3]===void 0?1:Number(i[3]);if(s===0)return Number.POSITIVE_INFINITY;const _=(o===void 0?l:o)-(o===void 0?0:l);return _>0&&s<0||_<0&&s>0?0:Math.ceil(Math.abs(_/s))}function uv(i){const l=new Set;for(let o=0;o<i.length;o+=1){const s=cc(i[o]).trim().match(/^def\s+([A-Za-z_]\w*)\s*\(/);if(!s)continue;const d=s[1],p=lh(i[o]);for(let _=o+1;_<i.length;_+=1){if(!i[_].trim())continue;if(lh(i[_])<=p)break;if(new RegExp(`\\b${d}\\s*\\(`).test(cc(i[_]))){l.add(d);break}}}return[...l]}const dv=/^(for|if|while|def|class|elif|else|try|except|finally|with)\b/;function fv(i,l){var x;const o=i.trim(),s=l.split(/\r?\n/),d=mv(o),p=d?s[d-1]??"":"",_=hv(s,d),h=o.split(/\r?\n/).filter(Boolean).at(-1)??"";if(/KeyboardInterrupt/.test(h))return{simple:"Programmet blev stoppet.",technical:o,line:d};if(/MemoryError/.test(h))return{simple:`Picoen eller browserens MicroPython løb tør for hukommelse${d?` omkring linje ${d}`:""}.`,technical:o,line:d};if(/RecursionError/.test(h))return{simple:`En funktion kalder sig selv for mange gange${d?` omkring linje ${d}`:""}.`,technical:o,line:d};const g=h.match(/UnboundLocalError:\s+local variable ['"](.+?)['"]/);if(g)return{simple:`Variablen ${g[1]} bruges inde i en funktion, før den har fået en værdi${d?` på linje ${d}`:""}.`,technical:o,line:d};const b=h.match(/NameError:\s+name ['"](.+?)['"] (?:isn't|is not) defined/);if(b)return{simple:vv(p,b[1])?`Teksten ${b[1]} mangler måske citationstegn${d?` på linje ${d}`:""}.`:`Python kender ikke navnet ${b[1]}${d?` på linje ${d}`:""}.`,technical:o,line:d};if(/ZeroDivisionError/.test(h))return{simple:`Kan ikke dividere med 0${d?` på linje ${d}`:""}.`,technical:o,line:d};if(/IndentationError:\s+unexpected indent/.test(h))return{simple:`Der er for meget indrykning${d?` på linje ${d}`:""}.`,technical:o,line:d};if(/IndentationError/.test(h))return{simple:`Mangler indrykning${d?` på linje ${d}`:""}.`,technical:o,line:d};if(/ImportError|ModuleNotFoundError/.test(h)){const k=(x=h.match(/['"](.+?)['"]/))==null?void 0:x[1];return{simple:`Python kan ikke finde modulet${k?` ${k}`:""}.`,technical:o,line:d}}if(/OSError/.test(h))return/ENOENT|No such file|Errno\s+2/.test(h)?{simple:`Python kan ikke finde filen${d?` på linje ${d}`:""}.`,technical:o,line:d}:/EACCES|permission|denied/i.test(h)?{simple:`Python har ikke adgang til filen eller enheden${d?` på linje ${d}`:""}.`,technical:o,line:d}:{simple:`Der opstod en fejl med en fil eller en enhed${d?` omkring linje ${d}`:""}.`,technical:o,line:d};if(/SyntaxError/.test(h)){if(/invalid syntax/.test(h)&&_.text.trim().endsWith(","))return{simple:`Linje ${_.line??d} slutter med komma. Tjek om der mangler noget efter kommaet.`,technical:o,line:_.line??d};const k=Xd(p,d)??Xd(_.text,_.line)??pv(s,d);return k?{simple:`Mangler måske : efter linje ${k.line}.`,technical:o,line:k.line}:d&&_.text.trim().endsWith(":")&&p.trim()&&!/^\s+/.test(p)?{simple:`Mangler måske indrykning på linje ${d}.`,technical:o,line:d}:_v(p)?{simple:`Tekst mangler måske citationstegn${d?` på linje ${d}`:""}.`,technical:o,line:d}:gv(p)?{simple:`Tekst mangler måske et afsluttende citationstegn${d?` på linje ${d}`:""}.`,technical:o,line:d}:bv(p)?{simple:`Mangler måske en afsluttende parentes${d?` på linje ${d}`:""}.`,technical:o,line:d}:yv(p)?{simple:`Der er måske en parentes for meget${d?` på linje ${d}`:""}.`,technical:o,line:d}:{simple:`Python fandt en syntaksfejl${d?` omkring linje ${d}`:""}.`,technical:o,line:d}}return/TypeError/.test(h)?/takes .* positional arguments? but .* given/.test(h)||/function takes/.test(h)?{simple:`En funktion får for mange eller for få værdier${d?` på linje ${d}`:""}.`,technical:o,line:d}:/unsupported operand type/.test(h)?{simple:`To værdier kan ikke bruges sammen på den måde${d?` på linje ${d}`:""}.`,technical:o,line:d}:/not callable/.test(h)?{simple:`Der bliver brugt parenteser efter noget, som ikke er en funktion${d?` på linje ${d}`:""}.`,technical:o,line:d}:{simple:`En værdi har den forkerte type${d?` på linje ${d}`:""}.`,technical:o,line:d}:/IndexError/.test(h)?{simple:`Listen har ikke et element på den plads${d?` på linje ${d}`:""}.`,technical:o,line:d}:/KeyError/.test(h)?{simple:`Ordbogen mangler den nøgle${d?` på linje ${d}`:""}.`,technical:o,line:d}:/AttributeError/.test(h)?{simple:`Den ting har ikke den kommando${d?` på linje ${d}`:""}.`,technical:o,line:d}:/ValueError/.test(h)?/invalid literal for int/.test(h)?{simple:`Teksten kan ikke laves om til et heltal${d?` på linje ${d}`:""}.`,technical:o,line:d}:{simple:`Værdien passer ikke her${d?` på linje ${d}`:""}.`,technical:o,line:d}:{simple:`Python fandt en fejl${d?` omkring linje ${d}`:""}.`,technical:o,line:d}}function mv(i){var d;const o=(d=[...i.matchAll(/line\s+(\d+)/g)].at(-1))==null?void 0:d[1];if(!o)return;const s=parseInt(o,10);return Number.isFinite(s)&&s>0?s:void 0}function hv(i,l){if(!l)return{text:""};for(let o=l-2;o>=0;o-=1){const s=i[o]??"";if(s.trim())return{line:o+1,text:s}}return{text:""}}function Xd(i,l){if(!l)return null;const o=i.trim();return!dv.test(o)||o.endsWith(":")?null:{line:l}}function pv(i,l){const o=l?Math.min(i.length,l):i.length,s=Math.max(0,o-4);for(let d=o-1;d>=s;d-=1){const p=Xd(i[d]??"",d+1);if(p)return p}return null}function gv(i){const l=(i.match(/'/g)??[]).length,o=(i.match(/"/g)??[]).length;return l%2===1||o%2===1}function _v(i){var s,d;const o=(d=(s=i.trim().match(/^print\((.+)\)$/))==null?void 0:s[1])==null?void 0:d.trim();return!o||/['"]/.test(o)?!1:/\s/.test(o)&&/[a-zA-ZæøåÆØÅ]/.test(o)}function vv(i,l){const o=i.trim();return!!l&&/[A-Za-zæøåÆØÅ]/.test(l)&&(o.startsWith("print(")||o.includes(`= ${l}`))}function bv(i){return $h(i)>0}function yv(i){return $h(i)<0}function $h(i){let l=0,o=null;for(let s=0;s<i.length;s+=1){const d=i[s];if((d==='"'||d==="'")&&i[s-1]!=="\\"){o=o===d?null:o??d;continue}o||((d==="("||d==="["||d==="{")&&(l+=1),(d===")"||d==="]"||d==="}")&&(l-=1))}return l}const Kd="/min_kode.py",Yh=`print('Hej fra Pico Kontrol Panel')
`,wv=500,xv=1200,fs="Backup-filnavne er reserveret til versionshistorik. Vælg et andet navn.";function Gt(i,l){return`${i}:${l}`}function kv(i){return new Promise(l=>window.setTimeout(l,i))}function Sv(){const i=le(f=>f.toggleSideMenu),l=le(f=>f.askConfirm),o=le(f=>f.picoIdeOrigin),s=le(f=>f.active),d=le(f=>f.isBleConnected),p=le(f=>f.bleListFiles),_=le(f=>f.bleReadText),h=le(f=>f.bleWriteText),g=le(f=>f.bleDeleteFile),b=le(f=>f.bleRestartAndReconnect),[x,k]=C.useState(!1),[T,R]=C.useState(!1),[B,$]=C.useState([]),[F,P]=C.useState(!1),[W,H]=C.useState([]),[te,ue]=C.useState(null),[fe,Z]=C.useState(()=>Jo(Qo())),[J,xe]=C.useState(Kd),[ve,Oe]=C.useState("local"),[G,Ve]=C.useState(()=>{var f;return((f=Jo(Qo()).find(v=>v.path===Kd))==null?void 0:f.content)??Yh}),[be,Ee]=C.useState([]),[z,ne]=C.useState(!1),[me,de]=C.useState(""),[Se,E]=C.useState(""),[U,re]=C.useState(null),[oe,ke]=C.useState(!1),[V,D]=C.useState(null),[ie,ye]=C.useState(!1),[Ue,ce]=C.useState({}),[Pe,De]=C.useState(!1),[Ke,kt]=C.useState(0),[St,dn]=C.useState(()=>{var f,v;return((f=Rl.find(w=>w.board==="Raspberry Pi Pico W"))==null?void 0:f.board)??((v=Rl[0])==null?void 0:v.board)??""}),[jn,tr]=C.useState(()=>{var f,v;return((f=Rl.find(w=>w.board==="Raspberry Pi Pico W"))==null?void 0:f.version)??((v=Rl[0])==null?void 0:v.version)??""}),[Fn,nr]=C.useState(!1),[fr,fa]=C.useState({top:0,left:0}),[At,Ol]=C.useState(!1),[Gr,oi]=C.useState(!1),[Ll,Jt]=C.useState(!0),[fn,rr]=C.useState(""),[ma,Bl]=C.useState([]),[Et,mn]=C.useState(null),[Bt,$r]=C.useState(!1),[mr,hr]=C.useState({}),[hn,$t]=C.useState({}),[Ye,lt]=C.useState(null),[at,Ct]=C.useState(null),[hc,zl]=C.useState(""),[lr,Ul]=C.useState(()=>km().clearTerminalOnRun),[pr,ks]=C.useState(()=>km().simplifiedErrors),[ha,Ss]=C.useState(()=>typeof navigator<"u"?oh(navigator):!1),Yr=C.useRef(null),Rn=C.useRef(null),ot=C.useRef(null),ci=C.useRef(null),zt=C.useRef(null),pt=C.useRef(null),Dt=C.useRef(null),Gn=C.useRef(null),Xr=C.useRef(null),Kr=C.useRef(null),pa=C.useRef(null),pn=C.useRef(!1),gn=C.useRef(!1),gr=C.useRef(!1),Yt=C.useRef(""),_n=C.useRef(null),$n=C.useRef(null),nn=C.useRef(null),ft=C.useRef(null),Yn=C.useRef(null),Qr=C.useRef(null),en=C.useRef(0),vn=C.useRef(null),Wr=C.useRef(null),ui=C.useRef(null),Zr=C.useRef(null),ga=C.useRef([]),_r=C.useRef([]),Xn=C.useRef(null),Xt=W_(),ge=o==="control"&&!!s&&d(),_a=ge?(s==null?void 0:s.deviceID)??"ble":null,pc=Math.max(1,G.split(`
`).length),di=new Blob([G]).size,Es=ve==="pico"?"Picoen":"browseren",va=C.useMemo(()=>[...new Set(Rl.map(f=>f.board))],[]),ql=C.useMemo(()=>Rl.filter(f=>f.board===St),[St]),Tt=Rl.find(f=>f.board===St&&f.version===jn)??ql[0]??Rl[0],Hl=F||!!te||At||Gr,bn=ve==="pico",Vl=bn?At:Gr,Mt=bn&&At&&x&&!ge||!bn&&Gr&&!!nn.current,Ts=Bt||Vl&&!Mt,Ms=Mt?"stdin":">>>",vr=Mt?bn?"Input til kørende Pico-kode":"Input til kørende Browser-MicroPython":bn?"Pico MicroPython":"Browser-MicroPython",fi=C.useMemo(()=>{const f=new Z_({onData:v=>{gn.current||!pn.current||(Yt.current=(Yt.current+v).slice(-240),/(^|\r?\n)>>> ?$/.test(Yt.current)&&Il())},onLine:v=>{if(gn.current)return;const w=v.trimEnd();if(gr.current&&w.trim()){Y("info",w);return}if(pn.current&&mi(w)){Il();return}pn.current&&w.trim()&&!gc(w)&&!w.includes("raw REPL")&&Y("info",w)},onLog:Y,onDisconnect:()=>{k(!1),Ol(!1),$r(!1),pn.current=!1,gr.current=!1,Pl(),Yt.current="",nl(),Y("warning","USB-forbindelse lukket.")}});return Yr.current=f,f},[]);function Y(f,v){$(w=>[...w.slice(-140),{level:f,text:v}])}function Ns(f){$(v=>[...v.slice(-140),{level:"info",text:f,variant:"input"}])}function mi(f){return f.trim()===">>>"}function gc(f){return f.trimStart().startsWith(">>> import builtins as _pkp_builtins; exec(")}function Pl(){_n.current!==null&&(window.clearTimeout(_n.current),_n.current=null)}function Il(){!pn.current||_n.current!==null||(_n.current=window.setTimeout(()=>{_n.current=null,pn.current&&(Ol(!1),pn.current=!1,Yt.current="",Y("success","Pico-koden er færdig."),An())},0))}function An(){const f=ot.current;f&&gi(f,!1)}function Jr(f,v=G,w="error"){const N=fv(f,v);$(j=>[...j.slice(-140),{level:w,text:N.simple,technical:N.technical}])}function ct(f,v,w=ve){xe(f),Oe(w),Ve(v),$t(N=>({...N,[Gt(w,f)]:v})),Kn()}function br(f,v="pico"){xe(f),Oe(v),Ve(""),lt(null),fa({top:0,left:0}),Kn()}function Kn(){ga.current=[],_r.current=[],Xn.current=null}function el(){const f=zt.current;return{content:G,selectionStart:(f==null?void 0:f.selectionStart)??G.length,selectionEnd:(f==null?void 0:f.selectionEnd)??(f==null?void 0:f.selectionStart)??G.length}}function hi(f){const v=ga.current,w=v.at(-1);(w==null?void 0:w.content)===f.content&&w.selectionStart===f.selectionStart&&w.selectionEnd===f.selectionEnd||(v.push(f),v.length>wv&&v.shift(),_r.current=[])}function js(f,v){let w=0;const N=Math.min(f.length,v.length);for(;w<N&&f[w]===v[w];)w+=1;let j=f.length,ee=v.length;for(;j>w&&ee>w&&f[j-1]===v[ee-1];)j-=1,ee-=1;const se=f.slice(w,j),Fe=v.slice(w,ee),Me=Fe&&!se?"insert":se&&!Fe?"delete":"replace",Le=Fe.at(-1)??"";return{kind:Me,boundaryAfter:Me==="insert"&&/[\s.,:;()[\]{}'"`+\-*/%=<>!?]/.test(Le)}}function Fl(f,v){if(v!=="typing")return Xn.current=null,!0;const w=Date.now(),N=js(G,f),j=Xn.current,ee=j!==null&&j.path===J&&j.source===ve&&j.kind===N.kind&&j.kind!=="replace"&&!j.boundaryAfter&&w-j.at<=xv;return Xn.current={path:J,source:ve,kind:N.kind,at:w,boundaryAfter:N.boundaryAfter},!ee}function Cn(f){Ve(f.content),$t(v=>({...v,[Gt(ve,J)]:f.content})),zl(""),lt(null),window.requestAnimationFrame(()=>{const v=zt.current;v&&(v.focus(),v.selectionStart=Math.min(f.selectionStart,f.content.length),v.selectionEnd=Math.min(f.selectionEnd,f.content.length))})}function pi(){const f=ga.current.pop();return f?(Xn.current=null,_r.current.push(el()),Cn(f),!0):!1}function tl(){const f=_r.current.pop();return f?(Xn.current=null,ga.current.push(el()),Cn(f),!0):!1}function Ut(f,v=(ee=>(ee=zt.current)==null?void 0:ee.selectionStart)()??f.length,w=el(),N=v,j="programmatic"){w&&f!==G&&Fl(f,j)&&hi(w),Ve(f),$t(se=>({...se,[Gt(ve,J)]:f})),zl(""),Ta(f,v),window.requestAnimationFrame(()=>{const se=zt.current;se&&(se.selectionStart=Math.min(v,f.length),se.selectionEnd=Math.min(N,f.length))})}function yr(f,v=ve){$t(w=>{const N=Gt(v,f);if(!(N in w))return w;const j={...w};return delete j[N],j})}function ba(){return mr[J]===G}function qt(f,v){hr(w=>({...w,[f]:v}))}function Gl(f,v){qt(f,v),$t(w=>({...w,[Gt("pico",f)]:v})),ve==="pico"&&J===f&&Ve(v)}function nl(){H([]),Ee([]),hr({}),$t({}),lt(null),xe(f=>{const v=Jo(Qo());if(v.find(j=>j.path===f))return f;const N=v[0];return Oe("local"),Ve(N.content),Kn(),N.path})}function Nt(f){vt(),D({value:100,label:f}),Zr.current=window.setTimeout(()=>{Zr.current=null,D(null)},900)}function vt(){Zr.current!==null&&(window.clearTimeout(Zr.current),Zr.current=null)}function wr(){return V?u.jsxs("div",{className:"ide-task-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(V.value),children:[u.jsxs("div",{children:[u.jsx("span",{children:V.label}),u.jsxs("strong",{children:[Math.round(V.value),"%"]}),V.cancellable&&u.jsx("button",{className:"ide-task-cancel",type:"button",onClick:ya,"aria-label":"Stop handling",title:"Stop",children:u.jsx(Lt,{name:"delete",size:18})})]}),u.jsx("b",{"aria-hidden":"true",children:u.jsx("i",{style:{width:`${Math.max(2,Math.min(100,V.value))}%`}})})]}):null}function ya(){Yn.current&&Qn("Stopper læsning...",!0,!0)}function Qn(f="Stopper læsning...",v=!1,w=!1){var N;vt(),Wr.current=null,en.current+=1,(N=Yn.current)==null||N.abort(),Yn.current=null,vn.current=null,ue(null),P(!1),D(v?{value:(V==null?void 0:V.value)??0,label:f,cancellable:!1}:null),w&&Y("warning","Stopper BLE-læsning efter den aktuelle datapakke.")}function _c(f){var v;if(!(vn.current===f||Wr.current===f)){if(Wr.current=f,Qr.current){en.current+=1,(v=Yn.current)==null||v.abort(),Yn.current=null,vn.current=null,br(f),ue(f),P(!0),vt(),D({value:2,label:`Skifter til ${je(f)}...`,cancellable:!0});return}wa()}}function wa(){if(Qr.current)return;const f=Wr.current;if(!f)return;Wr.current=null;const v=en.current+1;en.current=v;const w=new AbortController;Yn.current=w,vn.current=f,br(f),ue(f),P(!0),vt(),D({value:12,label:`Indlæser ${je(f)}...`,cancellable:!0});const N=(async()=>{try{const j=await _(f,(ee,se)=>{en.current===v&&D({value:ee,label:se,cancellable:!0})},w.signal);if(w.signal.aborted||en.current!==v)return;ct(f,j,"pico"),qt(f,j),Nt("Fil indlæst")}catch(j){if(en.current!==v)return;Mv(j)||w.signal.aborted?Y("info",`Stoppede læsning af ${je(f)}.`):(D(null),Y("error",j instanceof Error?j.message:"BLE læsning fejlede."))}})();Qr.current=N,N.finally(()=>{if(Qr.current!==N)return;Qr.current=null,Yn.current===w&&(Yn.current=null),vn.current===f&&(vn.current=null),!!Wr.current||(ue(null),P(!1),w.signal.aborted&&D(null)),wa()})}async function rl(f){const v=gn.current;gn.current=!0;try{return await f()}finally{gn.current=v}}C.useEffect(()=>{if(!Ll)return;const f=Xr.current;f&&(f.scrollTop=f.scrollHeight)},[B,Ll]),C.useEffect(()=>{B2({clearTerminalOnRun:lr,simplifiedErrors:pr})},[lr,pr]),C.useEffect(()=>{var f;ql.some(v=>v.version===jn)||tr(((f=ql[0])==null?void 0:f.version)??"")},[ql,jn]),C.useEffect(()=>{Ss(oh(navigator))},[]),C.useEffect(()=>{const f=()=>{const v=Yr.current;Rn.current=null,ot.current=null,Yr.current=null,v==null||v.disconnect().catch(()=>{})};return window.addEventListener("pagehide",f),()=>{var v,w;vt(),(v=$n.current)==null||v.dispose(),$n.current=null,(w=nn.current)==null||w.dispose(),nn.current=null,window.removeEventListener("pagehide",f),f()}},[]),C.useEffect(()=>{const f=v=>{!(v.ctrlKey||v.metaKey)||v.key.toLowerCase()!=="s"||(v.preventDefault(),!F&&J.trim()&&!ha&&!oe&&!U&&!z&&Cs())};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[ve,ge,F,x,G,J,ha,oe,U,z]);function ar(f,v,w){Z(N=>{const j=Hd(N,f,v,w);return os(j),j})}function $l(f,v){Z(w=>{const N=w.find(Me=>Me.path===f),ee=hn[Gt("local",f)]??(N==null?void 0:N.content),se=ee!==void 0&&dr(ee)!==dr(v)?Hd(w,mh(f,rc(w)),ee,!1):w,Fe=Hd(se,f,v,!1);return os(Fe),Fe}),$t(w=>({...w,[Gt("local",f)]:v})),ve==="local"&&J===f&&(Ve(v),zl(""),lt(null),Kn())}const xa=Pv(W,fe,hn,x||ge);C.useEffect(()=>{ge&&ut()},[ge]),C.useEffect(()=>{const f=ui.current;f&&f!==_a&&nl(),ui.current=_a},[_a]);async function vc(){if(Xt.supported){R(!0);try{await fi.requestAndConnect();const f=new M_(fi);Rn.current=f,ot.current=new D_(f),k(!0),kt(0),await f.interrupt(),await bc(f),Y("success","Sendte stop-signal til Pico-terminalen."),await gi(ot.current),await As(ot.current)}catch(f){Y("error",f instanceof Error?f.message:"USB-forbindelse mislykkedes.");try{await fi.disconnect()}catch(v){Y("error",v instanceof Error?`USB-porten kunne ikke lukkes: ${v.message}`:"USB-porten kunne ikke lukkes.");return}kt(v=>{const w=v+1;return w>=3&&(Y("info","USB-forbindelsen er mislykkedes flere gange. Hvis Picoen er i BOOTSEL eller mangler MicroPython, kan du bruge MicroPython-download."),De(!0)),w}),k(!1)}finally{R(!1)}}}async function bc(f){const v=await f.exec(`import sys
print(sys.implementation.name)
`,4e3);if(v.error||!v.output.toLowerCase().includes("micropython"))throw new Error("MicroPython blev ikke fundet på Picoen.")}async function yc(){var f;try{await((f=Yr.current)==null?void 0:f.disconnect()),Rn.current=null,ot.current=null,k(!1),nl()}catch(v){Y("error",v instanceof Error?`USB-porten kunne ikke lukkes: ${v.message}`:"USB-porten kunne ikke lukkes.")}}async function rn(f){const v=ot.current;if(v){P(!0),gn.current=!0;try{await f(v)}catch(w){D(null),Y("error",w instanceof Error?w.message:"USB filhandling fejlede.")}finally{gn.current=!1,P(!1)}}}async function ut(f=!0){if(ge){P(!0);try{const v=await p();H(v),f&&Y("success",`Indlæste ${v.length} filer fra Pico via Bluetooth.`)}catch(v){Y("error",v instanceof Error?v.message:"BLE filhandling fejlede.")}finally{P(!1)}return}await gi(ot.current,f)}async function gi(f,v=!0){if(f){P(!0);try{const w=await rl(()=>f.list("/"));H(w),v&&Y("success",`Indlæste ${w.length} filer fra Pico.`)}catch(w){Y("error",w instanceof Error?w.message:"USB filhandling fejlede.")}finally{P(!1)}}}async function Yl(){if(ge){P(!0),D({value:4,label:"Tjekker biblioteker på Pico via Bluetooth..."});try{const f=await Rs((v,w)=>D({value:v,label:w}));Ee(f),Nt("Fil-tjek færdigt")}catch(f){D(null),Y("error",f instanceof Error?f.message:"BLE runtime check fejlede.")}finally{P(!1)}return}await As(ot.current)}async function Rs(f){const v=[],w=ti.filter(j=>j.kind==="library"&&!Al(j));let N=0;for(const j of ti){if(j.kind==="program"){v.push({...j,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}if(Al(j)){v.push({...j,status:"unknown",detail:"Opdateres via USB"});continue}try{const ee=N/Math.max(1,w.length)*100,se=100/Math.max(1,w.length);Y("info",`Tjekker ${j.label} på Pico via Bluetooth...`),f==null||f(Math.min(95,ee),`Tjekker ${j.label} på Pico...`);const Fe=await _(j.path,(Le,dt)=>{f==null||f(Math.min(95,ee+Le/100*se),`${j.label}: ${dt}`)}),Me=dr(Fe)===dr(j.content);v.push({...j,status:Me?"ok":"outdated",detail:Me?"Matcher appens version":"Kan installeres via Bluetooth"})}catch{v.push({...j,status:"missing",detail:"Mangler på Pico"})}finally{N+=1}}return f==null||f(100,"Fil-tjek færdigt"),v}async function As(f){if(f){P(!0);try{const v=await rl(()=>_i(f)),w=v;Ee(w)}catch(v){Y("error",v instanceof Error?v.message:"Runtime check fejlede.")}finally{P(!1)}}}async function _i(f){if(!f)return[];const v=[];for(const w of ti){if(w.kind==="program"){v.push({...w,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}try{const N=await f.readText(w.path),j=dr(N)===dr(w.content);v.push({...w,status:j?"ok":"outdated",detail:j?"Matcher appens version":"Matcher ikke appens version"})}catch{v.push({...w,status:"missing",detail:"Mangler på Pico"})}}return v}async function wc(f=J){if(ge){_c(f);return}ue(f),await rn(async v=>{D({value:12,label:`Indlæser ${je(f)}...`});const w=await xc(v,f);ct(f,w,"pico"),qt(f,w),Nt("Fil indlæst")}),ue(null)}async function xc(f,v){var w;try{return await f.readText(v)}catch(N){await((w=Rn.current)==null?void 0:w.stop().catch(()=>{})),await kv(120);try{return await f.readText(v)}catch{throw N}}}function kc(){ke(!0)}async function Cs(){if(ve==="pico"){if(!x&&!ge){Y("error","Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.");return}await vi();return}ka()}function ka(){if(Cl(J)){Y("error",fs);return}ar(J,G,!1),Oe("local"),$t(f=>({...f,[Gt("local",J)]:G})),ke(!1),Y("success",`Gemte ${je(J)} lokalt.`)}async function vi(){if(ke(!1),Cl(J))return D(null),Y("error",fs),!1;if(D({value:0,label:"Starter gemning..."}),ge){P(!0);try{return await h(J,G,(v,w)=>D({value:v,label:w})),qt(J,G),Oe("pico"),$t(v=>({...v,[Gt("pico",J)]:G})),Nt("Gemt på Pico via Bluetooth"),Y("success",`Gemte ${je(J)} på Pico via Bluetooth.`),Zo(J)&&(nr(!0),Y("warning","main.py er gemt. Genstart Picoen for at køre den nye version.")),await ut(!1),!0}catch(v){return D(null),Y("error",v instanceof Error?v.message:"BLE gem fejlede."),!1}finally{P(!1)}}if(!ot.current)return D(null),!1;let f=!1;return await rn(async v=>{xr(J,"pico")?await v.replaceTextSafely(J,G,(w,N)=>D({value:w,label:N})):await v.writeText(J,G,(w,N)=>D({value:w,label:N})),qt(J,G),Oe("pico"),$t(w=>({...w,[Gt("pico",J)]:G})),Nt("Gemt på Pico via USB"),Y("success",`Gemte ${J}.`),await ut(),await Yl(),f=!0}),f}function Sc(){Ds(je(J),G),ke(!1),Y("success",`Downloadede ${je(J)}.`)}function Ds(f,v){const w=new Blob([v],{type:"text/plain;charset=utf-8"}),N=URL.createObjectURL(w),j=document.createElement("a");j.href=N,j.download=f,j.click(),URL.revokeObjectURL(N)}async function bi(f){P(!0),nr(!1),D({value:10,label:"Genstarter Pico..."});try{await b(f)?(Nt("Pico genforbundet"),Y("success",f==="control"?"Pico genforbundet. Åbner kontrolpanelet.":"Pico genforbundet til Kodeværkstedet."),f==="ide"&&await ut()):(D(null),Y("warning","Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet."))}catch(v){D(null),Y("error",v instanceof Error?v.message:"Genstart/genforbindelse mislykkedes.")}finally{P(!1)}}function Os(f){var ee,se;const v=f??{path:J,source:ve},w=v.source==="pico"?"Pico":"browser",N=(f==null?void 0:f.versions.length)??(v.source==="pico"?((ee=ni(W).get(v.path))==null?void 0:ee.length)??0:((se=ni(rc(fe)).get(v.path))==null?void 0:se.length)??0),j=N>0?` Det sletter også filens versionshistorik (${N} gemte versioner).`:"";re(null),l({title:"Slet fil",message:`Vil du slette ${je(v.path)} fra ${w}?${j}`,confirmLabel:"Slet",onConfirm:()=>{Mc(v)}})}function Ec(){l({title:"Nulstil enhed",message:"Vil du nulstille Picoens enhedsindstillinger? Det sletter DeviceSettings.txt, så Picoen kan oprettes som en ny enhed igen. Kodefiler og startprogram bliver ikke slettet.",confirmLabel:"Nulstil",onConfirm:()=>{Tc()}})}async function Tc(){if(!ot.current){Y("error","Forbind Picoen med USB først.");return}await rn(async f=>{await f.delete("/DeviceSettings.txt").catch(v=>{const w=v instanceof Error?v.message:"";if(!/ENOENT|No such file|not found/i.test(w))throw v}),hr(v=>{const w={...v};return delete w["/DeviceSettings.txt"],w}),yr("/DeviceSettings.txt","pico"),Y("success","DeviceSettings.txt er nulstillet. Afbryd og forbind Picoen igen, hvis kontrolpanelet allerede var åbent."),await ut()})}function Ls(f,v,w){const N=xa.filter(se=>se.kind==="file"&&se.type==="file"),j=N.findIndex(se=>se.path===f&&se.source===v);if(j===-1)return null;const ee=se=>!!se&&!(se.path===f&&se.source===v)&&!(se.source===v&&w.has(se.path))&&!(ge&&Al(se));for(const se of[!0,!1])for(let Fe=1;Fe<N.length;Fe+=1){const Me=N[j+Fe];if(ee(Me)&&(!se||Me.source===v))return Me;const Le=N[j-Fe];if(ee(Le)&&(!se||Le.source===v))return Le}return null}function yi(f){if(f){Hs(f);return}const v=Jo(Qo())[0];ct(v.path,hn[Gt("local",v.path)]??v.content,"local")}async function Mc(f){const v=f.path,w=f.source,N=v===J&&w===ve;if(w==="local"){const Me=ni(rc(fe)).get(v)??[],Le=new Set([v,...Me.map(it=>it.path)]),dt=N?Ls(v,w,Le):null,Kt=fe.filter(it=>!Le.has(it.path));Z(Kt),os(Kt);for(const it of Le)yr(it,"local");N&&yi(dt);const Ae=Me.length>0?` og ${Me.length} gemte versioner`:"";Y("warning",`Slettede ${je(v)}${Ae} fra browseren.`);return}const j=ni(W).get(v)??[],ee=[v,...j.map(Me=>Me.path)],se=N?Ls(v,w,new Set(ee)):null;if(ge){P(!0);try{for(const Le of ee)await g(Le);hr(Le=>{const dt={...Le};for(const Kt of ee)delete dt[Kt];return dt});for(const Le of ee)yr(Le,"pico");const Me=j.length>0?` og ${j.length} gemte versioner`:"";Y("warning",`Slettede ${je(v)}${Me} på Pico via Bluetooth.`),await ut(),N&&yi(se)}catch(Me){Y("error",Me instanceof Error?Me.message:"BLE sletning fejlede.")}finally{P(!1)}return}if(!ot.current){Y("error","Ingen Pico-forbindelse. Kan ikke slette Pico-filen.");return}let Fe=!1;await rn(async Me=>{for(const dt of ee)await Me.delete(dt);hr(dt=>{const Kt={...dt};for(const Ae of ee)delete Kt[Ae];return Kt});const Le=j.length>0?` og ${j.length} gemte versioner`:"";Y("warning",`Slettede ${v}${Le}.`);for(const dt of ee)yr(dt,"pico");await ut(),await Yl(),Fe=!0}),Fe&&N&&yi(se)}async function Nc(f){if(!f)return;const v=Ev(f.name);if(!v){Y("error","Kun .py, .txt, .json og .csv kan importeres.");return}if(Cl(v)){Y("error",fs);return}if(f.size>128*1024){Y("error","Filen er for stor til Pico-værkstedet.");return}const w=await f.text();if(ve==="local"){ar(v,w,!0),ct(v,w,"local"),Y("success",`Importerede ${je(v)} i browseren.`);return}if(!x&&!ge){Y("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(ge&&Al({path:v})){Y("error","PicoBluetooth.py kan ikke importeres over Bluetooth, mens den holder forbindelsen i gang. Brug USB i stedet.");return}if(D({value:0,label:"Uploader fil til Pico..."}),ge){P(!0);try{await h(v,w,(j,ee)=>D({value:j,label:ee})),qt(v,w),ct(v,w,"pico"),Nt("Fil uploadet til Pico"),Y("success",`Importerede ${je(v)} på Pico via Bluetooth.`),await ut()}catch(j){D(null),Y("error",j instanceof Error?j.message:"Kunne ikke importere filen til Pico.")}finally{P(!1)}return}if(!ot.current){D(null),Y("error","Ingen Pico-forbindelse. Kan ikke importere filen til Pico.");return}await rn(async j=>{xr(v,"pico")?await j.replaceTextSafely(v,w,(ee,se)=>D({value:ee,label:se})):await j.writeText(v,w,(ee,se)=>D({value:ee,label:se})),qt(v,w),ct(v,w,"pico"),Nt("Fil uploadet til Pico"),Y("success",`Importerede ${je(v)} på Pico.`),await ut(),await Yl()})}async function jc(){de(""),ne(!0)}function Rc(){const f=ah(me);if(!f)return;if(Cl(f)){Y("error",fs);return}const v=ve;if(xr(f,v)){Y("error",`Der findes allerede en fil med navnet ${je(f)} i ${v==="pico"?"Pico":"browseren"}.`);return}if(v==="local"){ar(f,"",!1),ct(f,"","local"),ne(!1),Y("success",`Oprettede ${je(f)} i browseren.`);return}wi(f)}async function wi(f){if(!x&&!ge){Y("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(ne(!1),D({value:0,label:"Opretter fil på Pico..."}),ge){P(!0);try{await h(f,"",(v,w)=>D({value:v,label:w})),qt(f,""),ct(f,"","pico"),Nt("Fil oprettet på Pico"),Y("success",`Oprettede ${je(f)} på Pico via Bluetooth.`),await ut()}catch(v){D(null),Y("error",v instanceof Error?v.message:"Kunne ikke oprette fil på Pico.")}finally{P(!1)}return}if(!ot.current){D(null),Y("error","Ingen Pico-forbindelse. Kan ikke oprette Pico-filen.");return}await rn(async v=>{await v.writeText(f,"",(w,N)=>D({value:w,label:N})),qt(f,""),ct(f,"","pico"),Nt("Fil oprettet på Pico"),Y("success",`Oprettede ${je(f)} på Pico.`),await ut()})}function Xl(f){f.type==="file"&&(re(f),E(Tv(f.path)))}async function Ac(f){if(!U)return;const v=U.path;if(re(null),U.source==="local"){const w=fe.find(N=>N.path===f.path);if(!w){Y("error","Kunne ikke finde versionen i browseren.");return}$l(v,w.content),ct(v,w.content,"local"),Y("success",`Gendannede ${je(f.path)} i browseren.`);return}if(D({value:0,label:"Gendanner version..."}),ge){P(!0);try{const w=await _(f.path);await h(v,w,(N,j)=>D({value:N,label:j})),qt(v,w),ct(v,w,"pico"),Nt("Version gendannet"),await ut(!1)}catch(w){D(null),Y("error",w instanceof Error?w.message:"Kunne ikke gendanne versionen.")}finally{P(!1)}return}ot.current&&await rn(async w=>{await w.replaceTextSafely(v,await w.readText(f.path),(j,ee)=>D({value:j,label:ee}));const N=await w.readText(v);qt(v,N),ct(v,N,"pico"),Nt("Version gendannet"),await ut()})}function Bs(f){const v=(U==null?void 0:U.source)==="local"?"browseren":"Pico";l({title:"Slet version",message:`Vil du slette ${je(f.path)} fra ${v}?`,confirmLabel:"Slet",onConfirm:()=>{zs(f)}})}async function zs(f){if((U==null?void 0:U.source)==="local"){const v=fe.filter(w=>w.path!==f.path);Z(v),os(v),yr(f.path,"local"),re(w=>w&&{...w,versions:w.versions.filter(N=>N.path!==f.path)}),Y("warning",`Slettede ${je(f.path)} fra browserens versionshistorik.`);return}if(ge){P(!0);try{await g(f.path),await ut(!1),re(v=>v&&{...v,versions:v.versions.filter(w=>w.path!==f.path)})}catch(v){Y("error",v instanceof Error?v.message:"Kunne ikke slette versionen.")}finally{P(!1)}return}ot.current&&await rn(async v=>{await v.delete(f.path),await ut(!1),re(w=>w&&{...w,versions:w.versions.filter(N=>N.path!==f.path)})})}async function Us(){var w;if(!U)return;const f=U,v=Hv(f.path,N=>xr(N,f.source));if(!v){Y("error",`Kunne ikke finde et ledigt filnavn til en kopi af ${je(f.path)}.`);return}if(f.source==="local"){const N=hn[Gt("local",f.path)]??((w=fe.find(j=>j.path===f.path))==null?void 0:w.content)??"";ar(v,N,!1),ct(v,N,"local"),re(null),Y("success",`Duplikerede ${je(f.path)} til ${je(v)} i browseren.`);return}if(re(null),D({value:0,label:"Duplikerer fil..."}),ge){P(!0);try{const N=mr[f.path]??await _(f.path);await h(v,N,(j,ee)=>D({value:j,label:ee})),qt(v,N),ct(v,N,"pico"),Nt("Fil duplikeret"),await ut(!1),Y("success",`Duplikerede ${je(f.path)} til ${je(v)} på Pico via Bluetooth.`)}catch(N){D(null),Y("error",N instanceof Error?N.message:"Kunne ikke duplikere filen.")}finally{P(!1)}return}if(!ot.current){D(null),Y("error","Ingen Pico-forbindelse. Kan ikke duplikere Pico-filen.");return}await rn(async N=>{const j=await N.readText(f.path);await N.writeText(v,j,(ee,se)=>D({value:ee,label:se})),qt(v,j),ct(v,j,"pico"),Nt("Fil duplikeret"),await ut(!1),Y("success",`Duplikerede ${je(f.path)} til ${je(v)} på Pico.`)})}async function qs(){if(!U)return;const f=U,v=qd(Se,ms(f.path));if(!v||v===f.path)return;if(Cl(v)){Y("error",fs);return}if(xr(v,f.source)){Y("error",`Der findes allerede en fil med navnet ${je(v)}.`);return}const w=f.source==="local",N=f.source==="pico";if(ge&&N&&(Zo(f.path)||Zo(v))){Y("error","main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.");return}P(!0);try{if(N)if(ge){const j=mr[f.path]??await _(f.path);await h(v,j,(ee,se)=>D({value:ee,label:se})),await g(f.path),hr(ee=>({...ph(ee,f.path,v),[v]:j}))}else ot.current&&(await rl(()=>ot.current.rename(f.path,v)),hr(j=>ph(j,f.path,v)));w&&Z(j=>{const ee=j.map(se=>se.path===f.path?{...se,path:v,updatedAt:Date.now()}:se);return os(ee),ee}),J===f.path&&ve===f.source&&xe(v),$t(j=>Gv(j,f.source,f.path,v)),re(null),E(""),Y("success",`Omdøbte ${je(f.path)} til ${je(v)}.`),N&&await ut()}catch(j){Y("error",j instanceof Error?j.message:"Kunne ikke omdøbe filen.")}finally{D(null),P(!1)}}function xr(f,v){return v==="pico"?W.some(w=>w.path===f):fe.some(w=>w.path===f)}async function ll(f,v){if(!xr(f,"pico"))return;const w=mh(f,W),N=mr[f]??await _(f);v!==void 0&&dr(N)===dr(v)||await h(w,N)}function Hs(f){if(f.type!=="file"){ge&&Qn(void 0,!1),xe(f.path),Oe(f.source);return}if(ge&&Al(f)){Y("warning","PicoBluetooth.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.");return}if(f.source==="local"){ge&&Qn(void 0,!1);const w=fe.find(N=>N.path===f.path);ct(f.path,hn[Gt("local",f.path)]??(w==null?void 0:w.content)??"","local");return}const v=Gt("pico",f.path);if(Object.prototype.hasOwnProperty.call(hn,v)){ge&&Qn(void 0,!1),ct(f.path,hn[v],"pico");return}if(Object.prototype.hasOwnProperty.call(mr,f.path)){ge&&Qn(void 0,!1),ct(f.path,mr[f.path],"pico");return}wc(f.path)}async function Vs(){if(!x&&!ge){const f=ih();Ee(f),ce(sh(f)),ye(!0),D(null);return}P(!0),D({value:4,label:ge?"Tjekker biblioteker på Pico via Bluetooth...":"Tjekker biblioteker på Pico..."}),Y("info",ge?"Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...":"Tjekker om Picoens biblioteker er opdaterede før installation...");try{const f=be.length>0?be:ge?await Rs((v,w)=>D({value:v,label:w})):await rl(()=>_i(ot.current));Ee(f),ce(sh(f)),ye(!0),D(null)}catch(f){D(null),Y("error",f instanceof Error?f.message:"Fil-tjek før installation fejlede.")}finally{P(!1)}}async function Cc(){if(ye(!1),ge){P(!0);try{const v=(be.length>0?be:ti.map(N=>({...N,status:"unknown",detail:"Ikke tjekket"}))).filter(N=>Ue[N.id]&&!Al(N));if(v.length===0){Y("info","Ingen filer valgt til installation.");return}let w=null;D({value:0,label:"Starter installation..."});for(const[N,j]of v.entries()){Y("info",`Installerer ${j.label} via Bluetooth...`);const ee=N/v.length*100,se=100/v.length;await ll(j.path,j.content),await h(j.path,j.content,(Fe,Me)=>{D({value:Math.min(99,ee+Fe/100*se),label:`${j.label}: ${Me}`})}),Gl(j.path,j.content),Y("success",`Installerede ${j.label}.`),j.kind==="library"&&(w=j),Zo(j.path)&&nr(!0)}Nt("Installation færdig"),await ut(!1),await Yl(),w&&al(w)}catch(f){D(null),Y("error",f instanceof Error?f.message:"BLE installation fejlede.")}finally{P(!1)}return}await rn(async f=>{const w=(be.length>0?be:ti.map(j=>({...j,status:"unknown",detail:"Ikke tjekket"}))).filter(j=>Ue[j.id]);if(w.length===0){Y("info","Ingen filer valgt til installation.");return}let N=null;D({value:0,label:"Starter installation..."});for(const[j,ee]of w.entries()){Y("info",`Installerer ${ee.label}...`);const se=j/w.length*100,Fe=100/w.length,Me=await f.readText(ee.path).catch(()=>null);Me!==null&&dr(Me)===dr(ee.content)?(D({value:Math.min(99,se+Fe),label:`${ee.label}: Allerede nyeste version`}),Y("info",`${ee.label} findes allerede i samme version.`)):(await f.replaceTextSafely(ee.path,ee.content,(Le,dt)=>{D({value:Math.min(99,se+Le/100*Fe),label:`${ee.label}: ${dt}`})},{createBackup:!0}),Y("success",`Installerede ${ee.label}.`)),Gl(ee.path,ee.content),ee.kind==="library"&&(N=ee)}Nt("Installation færdig"),await ut(!1),await Yl(),N&&al(N)})}function xi(){return(be.length>0?be:ih()).filter(v=>Ue[v.id])}function Ps(){const f=xi();if(f.length===0){Y("info","Ingen filer valgt.");return}for(const v of f)$l(v.path,v.content);ye(!1),Y("success",`Gemte ${f.length} filer i browseren.`)}function Kl(){const f=xi();if(f.length===0){Y("info","Ingen filer valgt.");return}f.forEach((v,w)=>{window.setTimeout(()=>{Ds(je(v.path),v.content)},w*120)}),ye(!1),Y("success",`Starter download af ${f.length} filer.`)}function al(f){ct(f.path,f.content,"pico"),qt(f.path,f.content),Y("info",`Åbnede ${f.label} i editoren.`)}function Dc(f,v){ce(w=>{if(f.kind!=="program")return{...w,[f.id]:v};const N={...w};for(const j of be)j.kind==="program"&&(N[j.id]=!1);return N[f.id]=v,N})}async function Sa(){if(Lc(),ge&&ve==="pico"){Y("warning","Bluetooth holder forbindelsen åben, så koden kan ikke køres direkte her. Gem filen, og genstart Picoen for at køre den.");return}if(ve==="local"){await Is();return}const f=Rn.current;if(!f){Y("error",`${je(J)} er gemt på Picoen, men der er ingen USB-forbindelse til Pico-terminalen.`);return}if(J.endsWith(".py")){if(!ba()&&(Y("info",`${je(J)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`),!await vi())){Y("error","Pico-forbindelsen blev afbrudt under gemning.");return}if(F)return;Pl(),Yt.current="",Jt(!0);try{await f.runFile(J,()=>{Pl(),Yt.current="",gr.current=!1,Ol(!0),pn.current=!0}),Y("success",`Kører ${je(J)}. Brug Stop for at afbryde.`)}catch(v){Ol(!1),pn.current=!1,Pl(),Yt.current="",Y("error",v instanceof Error?v.message:"Kunne ikke starte koden.")}return}P(!0);try{const v=await f.exec(G,2e4);v.output.trim()&&Y("info",v.output),v.error.trim()&&Jr(v.error,G),!v.output.trim()&&!v.error.trim()&&Y("success","Koden kørte uden output.")}catch(v){Y("error",v instanceof Error?v.message:"Kunne ikke køre koden.")}finally{P(!1)}}async function Is(){const f=Yd(G,{allowInput:!0});if(f.some(N=>N.level==="error")){for(const N of f){const j=N.line?`Linje ${N.line}: `:"";Y(N.level==="error"?"error":"warning",`${j}${N.text}`)}return}/\binput\s*\(/.test(G)&&!Gh()&&Y("warning","input() i browseren kræver at siden genindlæses. Opdater siden (F5) og prøv igen.");const v=new AbortController;ft.current=v;const w=new av;nn.current=w,P(!0),oi(!0),Jt(!0),Y("info",x?"Starter Browser-MicroPython for browser-filen.":"Starter Browser-MicroPython. Forbind Pico med USB for at køre på selve Picoen.");try{const N=[],j=await w.run(G,{timeoutMs:null,signal:v.signal,onOutput:Me=>{N.push(Me),Y("info",Me)}});for(const Me of j.issues){const Le=Me.line?`Linje ${Me.line}: `:"";Y(Me.level==="error"?"error":"warning",`${Le}${Me.text}`)}const ee=[...N,j.output].filter(Boolean).join(`
`).trim(),se=j.output.trim();!j.error.trim()&&Nv(ee)?Jr(ee,G):(se&&Y("info",se),j.error.trim()&&Jr(j.error,G,j.unavailable?"warning":"error")),j.ok&&!ee&&!j.error.trim()&&Y("success","Browser-MicroPython kørte uden output.")}finally{ft.current=null,nn.current=null,w.dispose(),oi(!1),P(!1)}}async function Fs(){var v,w,N;if(Gr){(v=ft.current)==null||v.abort(),(w=nn.current)==null||w.stop(),Y("warning","Stoppede Browser-MicroPython."),Jt(!0);return}if(!bn&&Bt){(N=$n.current)==null||N.reset(),$r(!1),Y("warning","Stoppede Browser-MicroPython-terminalen. Variablerne i browser-terminalen blev nulstillet."),Jt(!0);return}const f=Rn.current;if(f)try{await f.stop(),Y("warning","Stoppede koden på Pico.")}catch(j){Y("error",j instanceof Error?j.message:"Kunne ikke stoppe koden.")}finally{Ol(!1),pn.current=!1,Pl(),Yt.current="",Jt(!0),An()}}function ki(){const f=Xr.current;if(!f)return;const v=f.scrollHeight-f.scrollTop-f.clientHeight<12;Jt(v)}function Si(){$([]),Jt(!0)}function Gs(){window.requestAnimationFrame(()=>{const f=Xr.current;f&&(f.scrollTop=f.scrollHeight)})}async function Ea(){const f=Mt?fn:fn.trimEnd();if(Mt){if(!bn){const N=nn.current;if(!N){Y("warning","Browser-MicroPython kører ikke lige nu."),yn();return}rr(""),Jt(!0),Ns(f),N.sendInput(f),yn();return}const w=Rn.current;if(!w){Y("warning","Pico-terminalen er ikke forbundet."),yn();return}rr(""),Jt(!0);try{await w.sendProgramInput(f)}catch(N){Y("error",N instanceof Error?N.message:"Kunne ikke sende input til Pico-koden.")}finally{yn()}return}if(!f.trim())return;if(Bl(w=>(w.at(-1)===f?w:[...w,f]).slice(-80)),mn(null),Ct(null),Vl){Y("warning",bn?"Tryk Stop, før du skriver i Pico-terminalen.":"Stop offline MicroPython, før du skriver i browser-terminalen."),yn();return}if(!bn){const w=Yd(f);if(w.some(j=>j.level==="error")){for(const j of w){const ee=j.line?"Linje "+j.line+": ":"";Y(j.level==="error"?"error":"warning",ee+j.text)}yn();return}const N=$n.current??new lv;$n.current=N,rr(""),$r(!0),Jt(!0),Y("info",">>> "+f);try{let j=!1;const ee=await N.send(f,{timeoutMs:15e3,onOutput:Fe=>{j=!0,Y("info",Fe)}}),se=ee.output.trim();se&&!j&&Y("info",se),ee.error.trim()&&Jr(ee.error,f,ee.unavailable?"warning":"error")}catch(j){Y("error",j instanceof Error?j.message:"Browser-MicroPython-terminalen fejlede.")}finally{$r(!1),yn()}return}if(ge){Y("warning","Terminalen bruger USB Serial. Bluetooth-forbindelsen kan vise filer, men kan ikke modtage frie terminalkommandoer."),yn();return}const v=Rn.current;if(!x||!v){Y("warning","Forbind en microcontroller med USB for at skrive i MicroPython-terminalen."),yn();return}rr(""),$r(!0),Jt(!0),gr.current=!0,Y("info",">>> "+f);try{await v.sendFriendlyLine(f)}catch(w){gr.current=!1,Y("error",w instanceof Error?w.message:"Kunne ikke sende kommando til MicroPython REPL.")}finally{$r(!1),yn()}}function yn(){window.requestAnimationFrame(()=>{const f=Kr.current;if(!f||f.disabled)return;f.focus();const v=f.value.length;f.selectionStart=v,f.selectionEnd=v})}function $s(f,v,w){if(w.length===0)return null;const N=x||ge;return u.jsxs("div",{className:"ide-install-group",children:[u.jsxs("div",{className:"ide-install-group-head",children:[u.jsx("h3",{children:f}),u.jsx("p",{children:v})]}),u.jsx("div",{className:"ide-install-scroll",children:w.map(j=>{const ee=ge&&Al(j);return u.jsxs("label",{className:`ide-install-row ${ee?"disabled":""}`,children:[u.jsx("input",{type:"checkbox",checked:!!Ue[j.id],disabled:ee,onChange:se=>Dc(j,se.target.checked)}),u.jsxs("span",{children:[u.jsxs("strong",{children:[Oc(j),N&&j.kind==="library"&&u.jsx("em",{className:`ide-install-status status-${j.status}`,children:ee?"USB":Vv(j.status)})]}),u.jsx("small",{children:j.description})]})]},j.id)})})]})}function Oc(f){return f.kind==="program"?f.label.replace(/\s*\(main\.py\)$/i,""):f.label}function Lc(){lr&&$([]),Jt(!0)}function Ei(f,v){const w=f.indexOf(`
`,v);return w===-1?f.length:w}function Ta(f,v){if(uh(f,v)){lt(null);return}const w=Wd(f,v);if(!w||w.query.length<1){lt(null);return}const N=ch(f,v,!0).slice(0,8),j=dh(zt.current,w.start,N.length);N.length>0&&j?(lt({items:N,selected:0,start:w.start,end:v,position:j}),kr(Gn.current,0)):lt(null)}function Ht(f,v){if(uh(f,v)){Ct(null);return}const w=Wd(f,v);if(!w||w.query.length<1){Ct(null);return}const N=ch(f,v,!1).slice(0,8),j=dh(Kr.current,w.start,N.length);N.length>0&&j?(Ct({items:N,selected:0,start:w.start,end:v,position:j}),kr(pa.current,0)):Ct(null)}function il(f){const v=f.value.slice(f.selectionStart,f.selectionEnd);zl(Lv(v)?v:"")}function kr(f,v){window.requestAnimationFrame(()=>{const w=f==null?void 0:f.querySelector(`[data-autocomplete-index="${v}"]`);w==null||w.scrollIntoView({block:"nearest"})})}function Ma(f=Ye==null?void 0:Ye.items[Ye.selected]){if(!f||!Ye)return;const v=el(),w=G.slice(0,Ye.start)+f.insert+G.slice(Ye.end),N=Ye.start+f.insert.length-(f.insert.endsWith("()")?1:0);lt(null),Ut(w,N,v),window.requestAnimationFrame(()=>{const j=zt.current;j&&j.focus()})}function Ti(f=at==null?void 0:at.items[at.selected]){if(!f||!at)return;const v=fn.slice(0,at.start)+f.insert+fn.slice(at.end),w=at.start+f.insert.length-(f.insert.endsWith("()")?1:0);rr(v),Ct(null),window.requestAnimationFrame(()=>{const N=Kr.current;N&&(N.focus(),N.selectionStart=w,N.selectionEnd=w)})}function Ys(f){const v=zt.current;if(!v)return!1;const w=v.selectionStart,N=v.selectionEnd,j={content:G,selectionStart:w,selectionEnd:N},ee=G.lastIndexOf(`
`,w-1)+1,se=N>w&&G[N-1]===`
`?N-1:N,Fe=Ei(G,se),Me=Fe<G.length?Fe+1:Fe,Le=G.slice(ee,Me);if(f<0){if(ee===0)return!1;const Wn=G.lastIndexOf(`
`,ee-2)+1,Dn=G.slice(Wn,ee),Er=G.slice(0,Wn)+Le+Dn+G.slice(Me),ir=-Dn.length;return Ut(Er,w+ir,j,N+ir),!0}if(Me>=G.length)return!1;const dt=Ei(G,Me),Kt=dt<G.length?dt+1:dt,Ae=G.slice(Me,Kt),it=G.slice(0,ee)+Ae+Le+G.slice(Kt),Sr=Ae.length;return Ut(it,w+Sr,j,N+Sr),!0}function Mi(f){var Kt;if(Hl){(f.key==="Enter"||f.key==="Tab"||(f.ctrlKey||f.metaKey)&&["z","y","s"].includes(f.key.toLowerCase()))&&f.preventDefault();return}if((f.ctrlKey||f.metaKey)&&f.key.toLowerCase()==="z"){f.preventDefault(),(f.shiftKey?tl():pi())&&lt(null);return}if((f.ctrlKey||f.metaKey)&&f.key.toLowerCase()==="y"){f.preventDefault(),tl()&&lt(null);return}if((f.ctrlKey||f.metaKey)&&f.key.toLowerCase()==="s"){f.preventDefault(),!F&&J.trim()&&Cs();return}if(f.altKey&&!f.ctrlKey&&!f.metaKey&&(f.key==="ArrowUp"||f.key==="ArrowDown")){f.preventDefault(),Ys(f.key==="ArrowUp"?-1:1)&&lt(null);return}if(Ye){if(f.key==="ArrowDown"){f.preventDefault(),lt(Ae=>{if(!Ae)return Ae;const it=(Ae.selected+1)%Ae.items.length;return kr(Gn.current,it),{...Ae,selected:it}});return}if(f.key==="ArrowUp"){f.preventDefault(),lt(Ae=>{if(!Ae)return Ae;const it=(Ae.selected-1+Ae.items.length)%Ae.items.length;return kr(Gn.current,it),{...Ae,selected:it}});return}if(f.key==="Tab"){f.preventDefault(),Ma();return}if(f.key==="Enter"){if(!(Ye.items[Ye.selected]&&Kh(Ye.items[Ye.selected],G.slice(Ye.start,Ye.end)))){f.preventDefault(),Ma();return}lt(null)}if(f.key==="Escape"){f.preventDefault(),lt(null);return}}if(f.key==="Enter"){f.preventDefault();const Ae=f.currentTarget,it=Ae.selectionStart,Sr=Ae.selectionEnd,Wn={content:G,selectionStart:it,selectionEnd:Sr},Dn=G.lastIndexOf(`
`,it-1)+1,Er=G.slice(Dn,it),ir=((Kt=Er.match(/^[ \t]*/))==null?void 0:Kt[0])??"",ln=Er.trimEnd().endsWith(":")?"    ":"",Tr=`
${ir}${ln}`,Qt=G.slice(0,it)+Tr+G.slice(Sr),On=it+Tr.length;Ut(Qt,On,Wn),window.requestAnimationFrame(()=>{Ae.selectionStart=On,Ae.selectionEnd=On});return}if(f.key!=="Tab")return;f.preventDefault();const v=f.currentTarget,w=v.selectionStart,N=v.selectionEnd,j={content:G,selectionStart:w,selectionEnd:N},ee="    ";if(f.shiftKey){const Ae=G.lastIndexOf(`
`,w-1)+1,it=w===N?Ei(G,w):N,Sr=G.slice(Ae,it);let Wn=0,Dn=0;const Er=Sr.replace(/(^|\n)( {1,4}|\t)/g,(ln,Tr,Qt,On)=>{const Na=Qt.length;return Ae+On<w&&(Wn+=Na),Dn+=Na,Tr});if(Dn===0)return;const ir=G.slice(0,Ae)+Er+G.slice(it);Ut(ir,Math.max(Ae,w-Wn),j,w===N?Math.max(Ae,w-Wn):Math.max(Ae,N-Dn)),window.requestAnimationFrame(()=>{v.selectionStart=Math.max(Ae,w-Wn),v.selectionEnd=w===N?v.selectionStart:Math.max(v.selectionStart,N-Dn)});return}if(w===N){const Ae=G.slice(0,w)+ee+G.slice(N);Ut(Ae,w+ee.length,j),window.requestAnimationFrame(()=>{v.selectionStart=w+ee.length,v.selectionEnd=w+ee.length});return}const se=G.lastIndexOf(`
`,w-1)+1,Me=G.slice(se,N).replace(/^/gm,ee),Le=Me.split(`
`).length,dt=G.slice(0,se)+Me+G.slice(N);Ut(dt,w+ee.length,j,N+Le*ee.length),window.requestAnimationFrame(()=>{v.selectionStart=w+ee.length,v.selectionEnd=N+Le*ee.length})}function Bc(f){if(Mt){f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),Ea());return}if(at){if(f.key==="ArrowDown"){f.preventDefault(),Ct(v=>{if(!v)return v;const w=(v.selected+1)%v.items.length;return kr(pa.current,w),{...v,selected:w}});return}if(f.key==="ArrowUp"){f.preventDefault(),Ct(v=>{if(!v)return v;const w=(v.selected-1+v.items.length)%v.items.length;return kr(pa.current,w),{...v,selected:w}});return}if(f.key==="Enter"||f.key==="Tab"){f.preventDefault(),Ti();return}if(f.key==="Escape"){f.preventDefault(),Ct(null);return}}if(f.key==="Tab"){f.preventDefault();const v=f.currentTarget,w=v.selectionStart,N=v.selectionEnd,j="    ",ee=fn.slice(0,w)+j+fn.slice(N),se=w+j.length;rr(ee),mn(null),Ct(null),window.requestAnimationFrame(()=>{v.selectionStart=se,v.selectionEnd=se});return}if(f.key==="ArrowUp"||f.key==="ArrowDown"){if(!(f.key==="ArrowUp"?f.currentTarget.selectionStart===0&&f.currentTarget.selectionEnd===0:f.currentTarget.selectionStart===fn.length&&f.currentTarget.selectionEnd===fn.length)||ma.length===0)return;f.preventDefault();const w=f.key==="ArrowUp"?Et===null?ma.length-1:Math.max(0,Et-1):Et===null||Et+1>=ma.length?null:Et+1;mn(w);const N=w===null?"":ma[w]??"";rr(N),Ct(null),Jt(!0),window.requestAnimationFrame(()=>{const j=Kr.current;j&&(j.selectionStart=N.length,j.selectionEnd=N.length,Gs())});return}f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),Ea())}return u.jsxs("div",{className:"screen ide-screen",children:[u.jsx(sf,{title:"Pico Kodeværksted",onMenu:()=>i()}),ha?u.jsx("div",{className:"ide-size-gate",role:"dialog","aria-modal":"true","aria-labelledby":"ide-size-title",children:u.jsxs("div",{className:"ide-size-gate-panel",children:[u.jsx("h2",{id:"ide-size-title",children:"Brug en bærbar for at bruge Kodeværkstedet"}),u.jsx("p",{children:"Denne skærm er for lille, så du skal åbne Kodeværkstedet på en bærbar eller en større skærm."})]})}):u.jsxs("div",{className:"ide-layout",children:[u.jsxs("section",{className:"ide-panel ide-files-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Filer"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:jc,"aria-label":"Ny fil",title:"Ny fil",children:u.jsx(Lt,{name:"plus",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>{var f;return(f=ci.current)==null?void 0:f.click()},"aria-label":"Importer fil",title:"Importer fil",children:u.jsx(Lt,{name:"upload",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>ut(),disabled:!x&&!ge||F,"aria-label":"Opdater filer",title:"Opdater filer",children:u.jsx(Lt,{name:"refresh",size:20})})]})]}),u.jsx("div",{className:"ide-file-list",children:xa.length===0?u.jsx("button",{type:"button",disabled:!0,children:"Ingen filer læst"}):xa.map(f=>{if(f.kind==="separator"){const j=f.id==="pico-files"&&!x&&!ge;return u.jsxs(C.Fragment,{children:[u.jsx("div",{className:"ide-file-separator",children:u.jsx("span",{children:f.label})}),j&&u.jsx("div",{className:"ide-file-disconnected",role:"status",children:"Ikke forbundet"})]},f.id)}const v=ge&&Al(f),w=hn[Gt(f.source,f.path)],N=w!==void 0&&w!==qv(f,fe,mr);return u.jsxs("div",{className:`ide-file-row ${J===f.path&&ve===f.source?"active":""} ${v?"protected":""}`,children:[u.jsxs("button",{type:"button",onClick:()=>Hs(f),disabled:v,title:v?"Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her":void 0,children:[u.jsx("span",{children:f.name}),u.jsxs("small",{title:N?"Ikke gemte ændringer":"Ingen ikke gemte ændringer",children:[f.versions.length>0&&u.jsx("em",{className:"ide-file-version-count",title:`${f.versions.length} gemte versioner i historikken`,children:f.versions.length}),u.jsx("i",{className:`ide-file-dirty-dot ${N?"dirty":"clean"}`,"aria-hidden":"true"})]})]}),u.jsx("button",{className:"ide-file-actions",type:"button",onClick:()=>Xl(f),disabled:f.type!=="file"||F||v,"aria-label":`Filvalg for ${f.name}`,title:v?"Holder Bluetooth-forbindelsen i gang og kan ikke ændres her":"Filvalg",children:u.jsx(Lt,{name:"settings",size:16})})]},`${f.source}:${f.path}`)})})]}),u.jsxs("section",{className:"ide-panel ide-status-panel",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"ide-status-head",children:[u.jsx("h2",{children:ge?"Forbundet Pico":"USB udvikling"}),!ge&&u.jsx("span",{className:`ide-usb-status ${Xt.supported?"available":"unavailable"}`,title:Xt.message,"data-tooltip":Xt.message,role:"img","aria-label":Xt.message,tabIndex:0,children:"!"})]}),ge&&u.jsxs("p",{children:[(s==null?void 0:s.deviceName)??"Pico"," er forbundet via Bluetooth."]})]}),!ge&&u.jsxs("div",{className:"ide-actions",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:x?yc:vc,disabled:!Xt.supported||T,children:T?"Forbinder...":x?"Afbryd USB":"Forbind USB"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Vs,disabled:ge||F,children:"Download"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:Ec,disabled:!x||F,children:"Nulstil enhed"})]}),ge&&u.jsxs("div",{className:"ide-actions",children:[u.jsxs("button",{className:"btn btn-primary ide-connection-state",type:"button",disabled:!0,children:[u.jsx(Lt,{name:"power",size:22}),"Bluetooth forbundet"]}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Vs,disabled:F,children:"Startprogrammer og biblioteker"})]}),!ge&&u.jsx("div",{className:"ide-runtime",children:u.jsx("div",{className:"ide-mini-actions single",children:u.jsx("button",{className:"btn btn-outline ide-disconnect-btn",type:"button",onClick:()=>De(!0),children:"MicroPython"})})})]}),u.jsxs("section",{className:"ide-panel ide-editor-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("div",{className:"ide-editor-title",children:u.jsxs("h2",{children:[je(J),u.jsxs("small",{children:[di," bytes"]})]})}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Sa,disabled:F,children:"Kør"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Fs,disabled:!Gr&&!(!bn&&Bt)&&(!x||!At),children:"Stop"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:kc,disabled:F||!J.trim(),children:"Gem"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Os(),disabled:F||!J.trim(),children:"Slet"})]})]}),wr(),u.jsxs("div",{className:"ide-editor-wrap",children:[u.jsx("div",{ref:Dt,className:"ide-line-numbers","aria-hidden":"true",style:{transform:`translateY(${-fr.top}px)`},children:Array.from({length:pc},(f,v)=>u.jsx("span",{children:v+1},v))}),u.jsx("pre",{ref:pt,className:"ide-highlight","aria-hidden":"true",style:{transform:`translate(${-fr.left}px, ${-fr.top}px)`},children:Uv(G,hc)}),u.jsx("textarea",{ref:zt,className:"ide-editor",value:G,onChange:f=>Ut(f.target.value,f.target.selectionStart,el(),f.target.selectionEnd,"typing"),onKeyDown:Mi,onKeyUp:f=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(f.key)||Ta(f.currentTarget.value,f.currentTarget.selectionStart)},onClick:f=>{Ta(f.currentTarget.value,f.currentTarget.selectionStart),il(f.currentTarget)},onSelect:f=>il(f.currentTarget),onScroll:f=>{const{scrollTop:v,scrollLeft:w}=f.currentTarget;Dt.current&&(Dt.current.style.transform=`translateY(${-v}px)`),pt.current&&(pt.current.style.transform=`translate(${-w}px, ${-v}px)`),fa({top:v,left:w}),Ye&&Ta(f.currentTarget.value,f.currentTarget.selectionStart)},readOnly:Hl,"aria-busy":Hl,spellCheck:!1}),Ye&&u.jsx("div",{ref:Gn,className:`ide-autocomplete placement-${Ye.position.placement}`,role:"listbox","aria-label":"Kodeforslag",style:{left:Ye.position.left,top:Ye.position.top,maxHeight:Ye.position.maxHeight},children:(Ye.position.placement==="above"?Ye.items.map((f,v)=>({item:f,index:v})).reverse():Ye.items.map((f,v)=>({item:f,index:v}))).map(({item:f,index:v})=>u.jsx("button",{className:v===Ye.selected?"active":"",type:"button","data-autocomplete-index":v,onMouseDown:w=>{w.preventDefault(),Ma(f)},role:"option","aria-selected":v===Ye.selected,children:f.label},f.label))}),te&&u.jsxs("div",{className:"ide-editor-loading",role:"status","aria-live":"polite",children:[u.jsx("span",{className:"spinner","aria-hidden":"true"}),u.jsxs("strong",{children:["Indlæser ",je(te),"..."]})]})]})]}),u.jsxs("section",{className:"ide-panel ide-terminal-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Terminal"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${pr?"":"active"}`,type:"button",onClick:()=>ks(f=>!f),"aria-label":pr?"Tekniske fejl er slået fra":"Tekniske fejl er slået til","aria-pressed":!pr,title:pr?"Vis originale tekniske fejl":"Viser originale tekniske fejl",children:"Teknisk"}),u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${lr?"active":""}`,type:"button",onClick:()=>Ul(f=>!f),"aria-pressed":lr,title:lr?"Terminalen ryddes, hver gang du trykker Kør":"Terminalen beholder tekst, når du trykker Kør",children:"Ryd ved Kør"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Si,disabled:B.length===0,children:"Ryd"})]})]}),u.jsxs("div",{className:"ide-terminal","aria-live":"polite",ref:Xr,onScroll:ki,onClick:()=>{var f;return(f=Kr.current)==null?void 0:f.focus()},children:[B.length===0?u.jsx("div",{className:"term-line",children:"Ingen terminaldata endnu."}):B.map((f,v)=>u.jsx("div",{className:`term-line ${f.variant==="input"?"term-input-echo":`term-${f.level}`}`,children:f.technical&&!pr?f.technical:f.text},`${v}-${f.text}`)),u.jsxs("form",{className:`ide-terminal-command ${Vl&&!Mt?"locked":""} ${Mt?"stdin":""}`,onSubmit:f=>{f.preventDefault(),Ea()},children:[u.jsx("span",{"aria-hidden":"true",children:Ms}),u.jsx("textarea",{ref:Kr,value:fn,onChange:f=>{rr(f.target.value),mn(null),Mt?Ct(null):Ht(f.target.value,f.target.selectionStart)},onKeyDown:Bc,onKeyUp:f=>{Mt||["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(f.key)||Ht(f.currentTarget.value,f.currentTarget.selectionStart)},onClick:f=>{Mt||Ht(f.currentTarget.value,f.currentTarget.selectionStart)},disabled:Ts,placeholder:vr,"aria-label":Mt?"Input til kørende Pico-kode":"MicroPython-terminalkommando",title:vr,rows:Math.max(1,fn.split(`
`).length)})]}),at&&u.jsx("div",{ref:pa,className:`ide-autocomplete ide-repl-autocomplete placement-${at.position.placement}`,role:"listbox","aria-label":"Terminalforslag",style:{left:at.position.left,top:at.position.top,maxHeight:at.position.maxHeight},children:(at.position.placement==="above"?at.items.map((f,v)=>({item:f,index:v})).reverse():at.items.map((f,v)=>({item:f,index:v}))).map(({item:f,index:v})=>u.jsx("button",{className:v===at.selected?"active":"",type:"button","data-autocomplete-index":v,onMouseDown:w=>{w.preventDefault(),Ti(f)},role:"option","aria-selected":v===at.selected,children:f.label},f.label))})]})]})]}),u.jsx("input",{ref:ci,type:"file",accept:".py,.txt,.json,.csv",className:"sr-only",onChange:f=>{var v;Nc((v=f.target.files)==null?void 0:v[0]),f.currentTarget.value=""}}),oe&&u.jsx(Rt,{title:"Gem fil",onClose:()=>ke(!1),children:u.jsxs("div",{className:"ide-save-options",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>void vi(),disabled:!x&&!ge||F,children:"Gem filen på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Sc,children:"Download filen til computer"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:ka,children:"Gem filen i browseren"})]})}),ie&&u.jsx(Rt,{title:"Startprogrammer og biblioteker",onClose:()=>ye(!1),children:u.jsxs("div",{className:"ide-install-list",children:[u.jsx("p",{className:"ide-install-note",children:x||ge?"Vælg et startprogram og de biblioteker dit projekt bruger. Installer lægger filerne på Picoen.":"Du er ikke forbundet til en Pico. Du kan gemme filerne i browseren eller downloade dem til computeren, men de virker først på Picoen, når de er installeret der."}),u.jsxs("div",{className:"ide-install-grid",children:[$s("Startprogrammer (main.py)","Starter automatisk på Picoen.",be.filter(f=>f.kind==="program")),$s("Biblioteker","Ekstra Python-filer som dine programmer kan importere.",be.filter(f=>f.kind==="library"))]}),u.jsxs("div",{className:"ide-install-actions",children:[(x||ge)&&u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Cc,disabled:F,children:"Installer på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Kl,disabled:F,children:"Download til computer"}),u.jsx("button",{className:x||ge?"btn btn-outline":"btn btn-primary",type:"button",onClick:Ps,disabled:F,children:"Gem i browseren"})]})]})}),Fn&&u.jsx(Rt,{title:"main.py er gemt",onClose:()=>nr(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:"Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>void bi("control"),disabled:F,children:"Genstart og åbn kontrolpanel"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void bi("ide"),disabled:F,children:"Genstart og bliv i Kodeværksted"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>nr(!1),disabled:F,children:"Senere"})]})}),Pe&&u.jsx(Rt,{title:"Installer MicroPython",onClose:()=>De(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:"Hvis Picoen er helt frisk, skal MicroPython først lægges på den."}),u.jsxs("ol",{className:"micropython-steps",children:[u.jsx("li",{children:"Hold BOOTSEL-knappen nede."}),u.jsx("li",{children:"Sæt Picoen i USB, og slip derefter BOOTSEL."}),u.jsx("li",{children:"Vælg Pico-model og MicroPython-version herunder, og download UF2-filen."}),u.jsxs("li",{children:["Kopier UF2-filen til drevet ",u.jsx("strong",{children:"RPI-RP2"})]})]}),u.jsxs("div",{className:"micropython-selects",children:[u.jsx("label",{htmlFor:"micropython-board",children:"Pico-model"}),u.jsx("select",{id:"micropython-board",value:St,onChange:f=>dn(f.target.value),children:va.map(f=>u.jsx("option",{value:f,children:f},f))}),u.jsx("label",{htmlFor:"micropython-version",children:"MicroPython-version"}),u.jsx("select",{id:"micropython-version",value:(Tt==null?void 0:Tt.version)??jn,onChange:f=>tr(f.target.value),children:ql.map(f=>u.jsxs("option",{value:f.version,children:[f.version," (",f.date,")"]},`${f.board}:${f.version}:${f.date}`))})]}),Tt&&u.jsx("a",{className:"btn btn-primary btn-block",href:Tt.url,download:Tt.fileName,children:"Download UF2"}),u.jsx("a",{className:"btn btn-outline btn-block",href:"https://www.raspberrypi.com/documentation/microcontrollers/micropython.html",target:"_blank",rel:"noreferrer",children:"Se vejledning"})]})}),z&&u.jsx(Rt,{title:"Ny Python-fil",onClose:()=>ne(!1),children:u.jsxs("form",{className:"ide-new-file-form",onSubmit:f=>{f.preventDefault(),Rc()},children:[u.jsx("label",{htmlFor:"new-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"new-pico-file",value:me,onChange:f=>de(f.target.value),autoFocus:!0,placeholder:"test"}),u.jsx("span",{children:".py"})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen tilføjer .py automatisk og opretter filen i ",Es,"."]}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:!ah(me),children:"Opret"})]})}),U&&u.jsx(Rt,{title:je(U.path),onClose:()=>re(null),children:u.jsxs("div",{className:"ide-file-action-modal",children:[u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:"Placering"}),u.jsx("strong",{children:U.source==="pico"?"Pico":"Browser"})]}),u.jsxs("form",{className:"ide-file-rename-form",onSubmit:f=>{f.preventDefault(),qs()},children:[u.jsx("label",{htmlFor:"rename-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"rename-pico-file",value:Se,onChange:f=>E(f.target.value),placeholder:"min_kode"}),u.jsxs("span",{children:[".",ms(U.path)]})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen beholder filendelsen .",ms(U.path)," automatisk."]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!qd(Se,ms(U.path))||qd(Se,ms(U.path))===U.path||F,children:"Gem navn"})]}),u.jsxs("div",{className:"ide-file-action-buttons",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void Us(),disabled:F,children:"Dupliker"}),u.jsx("button",{className:"btn btn-outline btn-danger btn-block",type:"button",onClick:()=>Os(U),disabled:F,children:"Slet"})]}),u.jsxs("section",{className:"ide-version-history",children:[u.jsx("h4",{children:"Versionshistorik"}),U.versions.length===0?u.jsx("p",{children:"Versionshistorik: 0 gemte versioner."}):u.jsx("div",{className:"ide-version-list",children:U.versions.map(f=>u.jsxs("div",{className:"ide-version-row",children:[u.jsx("span",{children:je(f.path)}),u.jsx("small",{children:f.size!==void 0?`${f.size} bytes`:"Gemt på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>void Ac(f),disabled:F,children:"Gendan"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Bs(f),disabled:F,children:"Slet"})]},f.path))})]})]})})]})}function ah(i){var o;const l=(o=i.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:o.replace(/\.py$/i,"").replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"");return l?`/${l}.py`:""}function Ev(i){const l=i.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop(),o=l==null?void 0:l.match(/^(.+)\.(py|txt|json|csv)$/i);if(!o)return"";const s=Xh(o[1]);return s?`/${s}.${o[2].toLowerCase()}`:""}function qd(i,l="py"){const o=i.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop();if(!o)return"";const s=o.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);if(!s)return"";const d=Xh(s[1]),p=l.replace(/^\./,"").toLowerCase(),_=(s[2]??(p||"py")).toLowerCase();return d?`/${d}.${_}`:""}function Tv(i){return je(i).replace(/\.(py|txt|json|csv)$/i,"")}function Xh(i){return i.replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"")}function ms(i){var s;const l=je(i).match(/\.([a-z0-9]+)$/i),o=(s=l==null?void 0:l[1])==null?void 0:s.toLowerCase();return o&&["py","txt","json","csv"].includes(o)?o:"py"}function dr(i){return i.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}function ih(){return ti.map(i=>({...i,status:"unknown",detail:"Kan gemmes uden Pico. Forbind en Pico for at installere."}))}function sh(i){const l={};return i.forEach(o=>{l[o.id]=!1}),l}function je(i){return i.split("/").filter(Boolean).pop()??i}function Zo(i){return i.replace(/\\/g,"/").toLowerCase()==="/main.py"}function oh(i){const l=i.userAgent||"",o=i.platform||"",s=i.maxTouchPoints||0,d=/Android.*Mobile|iPhone|iPod|Windows Phone|Mobile Safari/i.test(l),p=/Macintosh/i.test(o)&&s>1;return d&&!p}function Mv(i){return i instanceof DOMException&&i.name==="AbortError"}function Nv(i){return/Traceback \(most recent call last\):/.test(i)||/\b(?:SyntaxError|NameError|TypeError|ValueError|IndentationError|ImportError|ModuleNotFoundError|ZeroDivisionError|IndexError|KeyError|AttributeError):/.test(i)}function Al(i){return jv(i)}function jv(i){return i.path.replace(/\\/g,"/").toLowerCase()==="/picobluetooth.py"}const Qd=[...["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"].map(i=>({label:i,insert:`${i}${["for","if","while","def","class","elif","else","try","except","finally","with"].includes(i)?" ":""}`})),...["abs","all","any","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","exec","filter","float","getattr","hasattr","hash","hex","id","input","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","open","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","zip"].map(i=>({label:`${i}()`,insert:`${i}()`})),{label:"for i in range():",insert:"for i in range():"},{label:"while True:",insert:"while True:"},{label:"if True:",insert:"if True:"},{label:"time",insert:"time"},{label:"time.",insert:"time."},{label:"time.sleep",insert:"time.sleep"},{label:"time.sleep()",insert:"time.sleep()"},{label:"time.sleep_ms()",insert:"time.sleep_ms()"},{label:"time.ticks_ms()",insert:"time.ticks_ms()"},{label:"time.ticks_diff()",insert:"time.ticks_diff()"},{label:"time.sleep_us()",insert:"time.sleep_us()"},{label:"time.ticks_us()",insert:"time.ticks_us()"},{label:"machine",insert:"machine"},{label:"machine.",insert:"machine."},{label:"machine.Pin",insert:"machine.Pin"},{label:"machine.PWM",insert:"machine.PWM"},{label:"machine.ADC",insert:"machine.ADC"},{label:"machine.I2C",insert:"machine.I2C"},{label:"machine.SPI",insert:"machine.SPI"},{label:"machine.Timer",insert:"machine.Timer"},{label:"machine.UART",insert:"machine.UART"},{label:"machine.reset()",insert:"machine.reset()"},{label:"machine.freq()",insert:"machine.freq()"},{label:"Pin()",insert:"Pin()"},{label:"PWM()",insert:"PWM()"},{label:"ADC()",insert:"ADC()"},{label:"I2C()",insert:"I2C()"},{label:"SPI()",insert:"SPI()"},{label:"Timer()",insert:"Timer()"},{label:"UART()",insert:"UART()"},{label:"Pin.OUT",insert:"Pin.OUT"},{label:"Pin.IN",insert:"Pin.IN"},{label:"Pin.PULL_UP",insert:"Pin.PULL_UP"},{label:"Pin.PULL_DOWN",insert:"Pin.PULL_DOWN"},{label:"Pin.IRQ_FALLING",insert:"Pin.IRQ_FALLING"},{label:"Pin.IRQ_RISING",insert:"Pin.IRQ_RISING"},{label:"import time",insert:"import time"},{label:"import utime as time",insert:"import utime as time"},{label:"import machine",insert:"import machine"},{label:"import random",insert:"import random"},{label:"import os",insert:"import os"},{label:"import sys",insert:"import sys"},{label:"from machine import Pin",insert:"from machine import Pin"},{label:"from machine import Pin, PWM",insert:"from machine import Pin, PWM"},{label:"from machine import Pin, PWM, ADC",insert:"from machine import Pin, PWM, ADC"},{label:"PicoBluetooth",insert:"PicoBluetooth"},{label:"PicoRobotics",insert:"PicoRobotics"},{label:"NeoPixel",insert:"NeoPixel"},{label:"HCSR04",insert:"HCSR04"},{label:"ble.send_toggle_state()",insert:"ble.send_toggle_state()"},{label:"ble.send_slider_state()",insert:"ble.send_slider_state()"},{label:"ble.send_radar()",insert:"ble.send_radar()"},{label:"ble.send_text()",insert:"ble.send_text()"},{label:"ble.send_plot()",insert:"ble.send_plot()"},{label:"on_button(name, is_down):",insert:"on_button(name, is_down):"},{label:"on_slider(name, value):",insert:"on_slider(name, value):"},{label:"on_toggle(name, value):",insert:"on_toggle(name, value):"},{label:"on_connect():",insert:"on_connect():"},{label:"on_disconnect():",insert:"on_disconnect():"},{label:"ValueError",insert:"ValueError"},{label:"TypeError",insert:"TypeError"},{label:"OSError",insert:"OSError"},{label:"Exception",insert:"Exception"}];function ch(i,l,o){const s=Wd(i,l);if(!s)return[];const d=Rv(i,s.start,l),p=s.query.toLowerCase(),_=d.beforeToken.toLowerCase(),h=d.linePrefix.toLowerCase(),g=o?[...Qd,...Cv(i)]:Qd;return Dv(g).filter(x=>{const k=x.label.toLowerCase(),T=x.insert.toLowerCase();return T===p||k===p||Kh(x,s.query)?!1:d.importLine?Av(x,d)?k.startsWith(h)||T.startsWith(h)||k.startsWith(p)||T.startsWith(p):!1:_.endsWith(".")&&!T.includes(".")?!1:!!(T.startsWith(p)||k.startsWith(p))})}function Rv(i,l,o){const s=i.lastIndexOf(`
`,l-1)+1,d=i.slice(s,o),p=i.slice(s,l),_=/^\s*(?:import|from)\s+[\w.,\s]*$/i.test(d),h=/^\s*from\s+\w+(?:\.\w+)*\s+import\s+/i.test(d);return{linePrefix:d,beforeToken:p,importLine:_,fromImportLine:h}}function Av(i,l){return l.fromImportLine?!i.insert.includes("(")&&!i.insert.startsWith("import "):i.insert.startsWith("import ")||i.insert.startsWith("from ")?!0:/^[A-Za-z_][A-Za-z0-9_]*$/.test(i.insert)}function Cv(i){const l=new Set,o=[/\bdef\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/g,/\bclass\s+([A-Za-z_][A-Za-z0-9_]*)\b/g,/(?:^|[^\w.])([A-Za-z_][A-Za-z0-9_]*)\s*=/g,/\bfor\s+([A-Za-z_][A-Za-z0-9_]*)\s+in\b/g,/\b([A-Za-z_][A-Za-z0-9_]*)\.([A-Za-z_][A-Za-z0-9_]*)\s*\(/g];for(const s of o)for(const d of i.matchAll(s))d[1]&&l.add(d[1]),d[2]&&l.add(d[2]);return[...l].filter(s=>s.length>1&&!Ov.has(s)).sort((s,d)=>s.localeCompare(d,"da")).map(s=>({label:s,insert:s}))}function Dv(i){const l=new Set,o=[];for(const s of i){const d=s.insert.toLowerCase();l.has(d)||(l.add(d),o.push(s))}return o}const Ov=new Set(Qd.map(i=>i.insert.replace(/[().: ]+$/g,"")));function Wd(i,l){const s=i.slice(0,l).match(/[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_.]*$/);return!s||s.index===void 0?null:{query:s[0],start:s.index}}function uh(i,l){const o=i.lastIndexOf(`
`,Math.max(0,l-1))+1;let s=null,d=null,p=!1;for(let _=0;_<l;_+=1){const h=i[_],g=i.slice(_,_+3);if(d){g===d.repeat(3)&&(d=null,_+=2);continue}if(s){if(p){p=!1;continue}if(h==="\\"){p=!0;continue}h===s&&(s=null),h===`
`&&(s=null);continue}if(h==="#"){const b=i.indexOf(`
`,_),x=b===-1?i.length:b;if(l<=x&&_>=o)return!0;_=x;continue}if(g==='"""'||g==="'''"){d=h,_+=2;continue}(h==='"'||h==="'")&&(s=h)}return s!==null||d!==null}function Kh(i,l){const o=i.insert.trim();return!/[().]/.test(o)&&o.toLowerCase()===l.toLowerCase()}function Lv(i){return/^[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_]*$/.test(i)}function dh(i,l,o){if(!i)return null;const s=i.closest(".ide-terminal")??i.parentElement;if(!s)return null;const d=window.getComputedStyle(i),p=document.createElement("div"),_=document.createElement("span"),h=s.getBoundingClientRect(),g=i.getBoundingClientRect();p.style.position="absolute",p.style.visibility="hidden",p.style.pointerEvents="none",p.style.whiteSpace="pre-wrap",p.style.overflowWrap="break-word",p.style.wordBreak=d.wordBreak,p.style.boxSizing=d.boxSizing,p.style.width=`${i.getBoundingClientRect().width}px`,p.style.padding=d.padding,p.style.border=d.border,p.style.font=d.font,p.style.lineHeight=d.lineHeight,p.style.letterSpacing=d.letterSpacing,p.style.tabSize=d.tabSize,p.style.fontVariantLigatures=d.fontVariantLigatures,p.style.scrollbarGutter=d.scrollbarGutter,p.style.left=`${g.left-h.left-i.scrollLeft}px`,p.style.top=`${g.top-h.top-i.scrollTop}px`,p.textContent=i.value.slice(0,l),_.textContent=i.value.slice(l,l+1)||" ",p.appendChild(_),s.appendChild(p);const b=_.getBoundingClientRect();p.remove();const x=34,k=14,T=Math.min(210,Math.max(x+k,o*x+k)),R=Bv(b.left-h.left,8,Math.max(8,s.clientWidth-296)),B=b.top-h.top+s.scrollTop,$=b.bottom-h.top+s.scrollTop+10,F=s.scrollTop+s.clientHeight-$-8,P=B-s.scrollTop-8,W=s.scrollTop+s.clientHeight,H=F>=Math.min(T,x*2)||F>=P?"below":"above",te=Math.max(x+k,Math.min(T,H==="below"?F:P)),ue=H==="below"?Math.min($,W-te-8):Math.max(s.scrollTop+8,B-te-8);return{left:R,top:ue,maxHeight:te,placement:H}}function Bv(i,l,o){return Math.max(l,Math.min(o,i))}function zv(i){const l=[];let o=null,s=null,d=!1,p=0,_=0;const h=(g,b)=>{g>p&&l.push({text:i.slice(p,g),isTriple:b}),p=g};for(;_<i.length;){const g=i[_],b=i.slice(_,_+3);if(s){if(b===s.repeat(3)){_+=3,s=null,h(_,!0);continue}_+=1;continue}if(o){d?d=!1:g==="\\"?d=!0:(g===o||g===`
`)&&(o=null),_+=1;continue}if(g==="#"){const x=i.indexOf(`
`,_);_=x===-1?i.length:x;continue}if(b==='"""'||b==="'''"){h(_,!1),s=g,_+=3;continue}(g==='"'||g==="'")&&(o=g),_+=1}return h(i.length,s!==null),l}function Uv(i,l=""){const o=/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,s=/(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm,d=[];let p=0;function _(h,g){h.split(/(\r?\n)/).forEach(b=>{if(b===`
`||b===`\r
`){d.push(u.jsx("br",{},`br-${p++}`));return}b!==""&&g(b,`part-${p++}`)})}return zv(i).forEach(h=>{if(h.isTriple){_(h.text,(g,b)=>{d.push(...gs(g,l,b,"tok-string"))});return}_(h.text,(g,b)=>{let x=0;[...g.matchAll(s)].forEach((T,R)=>{const B=T.index??0;B>x&&d.push(...fh(g.slice(x,B),o,`${b}-${R}-plain`,l));const $=T[0],F=$.startsWith("#")?"tok-comment":$.startsWith('"')||$.startsWith("'")?"tok-string":/^\d/.test($)?"tok-number":"tok-builtin";d.push(...gs($,l,`${b}-${R}-token`,F)),x=B+$.length}),x<g.length&&d.push(...fh(g.slice(x),o,`${b}-tail`,l))})}),d.length?d:" "}function fh(i,l,o,s=""){const d=[];let p=0;const _=new RegExp(l.source,"g");return[...i.matchAll(_)].forEach((h,g)=>{const b=h.index??0;b>p&&d.push(...gs(i.slice(p,b),s,`${o}-${g}-plain`)),d.push(...gs(h[0],s,`${o}-${g}-keyword`,"tok-keyword")),p=b+h[0].length}),p<i.length&&d.push(...gs(i.slice(p),s,`${o}-plain-end`)),d}function gs(i,l,o,s=""){if(!l)return[u.jsx("span",{className:s||void 0,children:i},o)];const d=[],p=l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),_=new RegExp(`(?<![A-Za-zÆØÅæøå0-9_])(${p})(?![A-Za-zÆØÅæøå0-9_])`,"g");let h=0;return[...i.matchAll(_)].forEach((g,b)=>{const x=g.index??0;x>h&&d.push(u.jsx("span",{className:s||void 0,children:i.slice(h,x)},`${o}-${b}-before`)),d.push(u.jsx("span",{className:`${s} tok-match`.trim(),children:g[0]},`${o}-${b}-match`)),h=x+g[0].length}),h<i.length&&d.push(u.jsx("span",{className:s||void 0,children:i.slice(h)},`${o}-after`)),d.length?d:[u.jsx("span",{className:s||void 0,children:i},o)]}function Jo(i){return i.length>0?i:[{path:Kd,content:Yh,uploaded:!1,updatedAt:Date.now()}]}function Hd(i,l,o,s){const d=i.filter(p=>p.path!==l);return[{path:l,content:o,uploaded:s,updatedAt:Date.now()},...d].sort((p,_)=>_.updatedAt-p.updatedAt)}function rc(i){return i.map(l=>({name:je(l.path),path:l.path,type:"file",size:new Blob([l.content]).size}))}function qv(i,l,o){var s;return i.source==="pico"?o[i.path]:(s=l.find(d=>d.path===i.path))==null?void 0:s.content}function lc(i){const l=i.replace(/\\/g,"/"),o=l.lastIndexOf("/"),s=o>=0?l.slice(0,o+1):"",p=(o>=0?l.slice(o+1):l).match(/^(.+)_backup(\d+)(\.[^.]+)$/i);return p?{originalPath:`${s}${p[1]}${p[3]}`,index:parseInt(p[2],10)}:null}function Cl(i){return lc(i)!==null}function ni(i){const l=new Map;for(const o of i){const s=lc(o.path);if(!s)continue;const d=l.get(s.originalPath)??[];d.push(o),l.set(s.originalPath,d)}for(const o of l.values())o.sort((s,d)=>{var p,_;return(((p=lc(d.path))==null?void 0:p.index)??0)-(((_=lc(s.path))==null?void 0:_.index)??0)});return l}function mh(i,l){const o=i.replace(/\\/g,"/"),s=o.lastIndexOf("/"),d=s>=0?o.slice(0,s+1):"/",p=s>=0?o.slice(s+1):o.replace(/^\/+/,""),_=p.lastIndexOf("."),h=_>0?p.slice(0,_):p,g=_>0?p.slice(_):"",b=new Set(l.map(x=>x.path.toLowerCase()));for(let x=1;x<1e3;x+=1){const k=`${d}${h}_backup${x}${g}`;if(!b.has(k.toLowerCase()))return k}return`${d}${h}_backup${Date.now()}${g}`}function Hv(i,l){const o=i.replace(/\\/g,"/"),s=o.lastIndexOf("/"),d=s>=0?o.slice(0,s+1):"/",p=s>=0?o.slice(s+1):o.replace(/^\/+/,""),_=p.lastIndexOf("."),h=_>0?p.slice(0,_):p,g=_>0?p.slice(_):"";for(let b=1;b<1e3;b+=1){const x=b===1?"_kopi":`_kopi${b}`,k=`${d}${h}${x}${g}`;if(!l(k)&&!Cl(k))return k}return`${d}${h}_kopi${Date.now()}${g}`}function Vv(i){return i==="ok"?"Nyeste":i==="outdated"?"Opdater":i==="missing"?"Mangler":"Ikke tjekket"}function Pv(i,l,o,s){const d=new Map,p=ni(i),_=ni(rc(l));for(const k of i)Cl(k.path)||d.set(Gt("pico",k.path),{kind:"file",name:k.name,path:k.path,type:k.type,size:k.size,source:"pico",uploaded:!0,versions:p.get(k.path)??[]});for(const k of l)Cl(k.path)||d.set(Gt("local",k.path),{kind:"file",name:je(k.path),path:k.path,type:"file",source:"local",uploaded:!1,versions:_.get(k.path)??[]});for(const k of Object.keys(o)){const[T,...R]=k.split(":"),B=R.join(":");if(T!=="local"&&T!=="pico"||!B)continue;const $=d.get(k);if($){d.set(k,$);continue}d.set(k,{kind:"file",name:je(B),path:B,type:"file",source:T,uploaded:!1,versions:T==="pico"?p.get(B)??[]:_.get(B)??[]})}const h=[...d.values()].sort(Fv),g=h.filter(k=>k.source==="pico"),b=h.filter(k=>k.source==="local"),x=[];return g.length>0||s?x.push({kind:"separator",id:"pico-files",label:s?"Pico":"Microcontroller"},...g):x.push({kind:"separator",id:"pico-files",label:"Microcontroller"}),b.length>0&&x.push({kind:"separator",id:"browser-files",label:"Browser"},...b),x}const Iv=new Map([["main.py",0],["devicesettings.txt",1],["layout.txt",2],["picobluetooth.py",3],["picofly.py",4],["picorobotics.py",5],["neopixel.py",6],["hcsr04.py",7]]);function Fv(i,l){const o=hh(i.path),s=hh(l.path);return o===null&&s===null?i.name.localeCompare(l.name,"da"):o===null?-1:s===null?1:o-s}function hh(i){var o;const l=(o=i.replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:o.toLowerCase();return l?Iv.get(l)??null:null}function ph(i,l,o){if(!(l in i))return i;const s={...i,[o]:i[l]};return delete s[l],s}function Gv(i,l,o,s){const d=`${l}:${o}`;if(!(d in i))return i;const p={...i,[`${l}:${s}`]:i[d]};return delete p[d],p}function $v({open:i}){const l=le(W=>W.screen),o=le(W=>W.active),s=le(W=>W.toggleSideMenu),d=le(W=>W.toggleDebugger),p=le(W=>W.setEditMode),_=le(W=>W.openMenuPage),h=le(W=>W.disconnect),g=le(W=>W.openPicoIde),b=le(W=>W.closePicoIde),x=le(W=>W.picoIdeOrigin),k=l==="dashboard",T=l==="control",R=l==="ide",B=T&&!!(o!=null&&o.canEdit),$=!T||!!(o!=null&&o.isOwnedByMe)||!!(o!=null&&o.canEditCode),F=x==="control",P=x==="control"?"Pico Kontrol Panel":"Hovedmenu";return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:`scrim ${i?"open":"closing"}`,onClick:()=>s(!1)}),u.jsxs("nav",{className:`sidemenu sidemenu-${l} ${i?"open":"closing"}`,"aria-label":"Sidemenu",children:[k&&u.jsxs(u.Fragment,{children:[u.jsx(Mn,{label:"Bruger",icon:"user",onClick:()=>_("user-settings")}),u.jsx(Mn,{label:"Indstillinger",icon:"settings",onClick:()=>_("application-settings")}),u.jsx(Mn,{label:"Kodeværksted",icon:"picoIde",onClick:g,disabled:!$}),u.jsx(Vd,{}),u.jsx(Mn,{label:"Om appen",icon:"info",onClick:()=>_("application-about")}),u.jsx(Mn,{label:"Hjælp",icon:"help",onClick:()=>_("application-help")}),u.jsx(Mn,{label:"Fejlfinding",icon:"debugger",onClick:()=>d(!0)})]}),T&&u.jsxs(u.Fragment,{children:[u.jsx(Mn,{label:"Indstillinger",icon:"settings",onClick:()=>_("device-settings")}),u.jsx(Mn,{label:"Rediger",icon:"edit",onClick:()=>p(!0),disabled:!B}),u.jsx(Mn,{label:"Kodeværksted",icon:"picoIde",onClick:g,disabled:!$}),u.jsx(Vd,{}),u.jsx(Mn,{label:"Hjælp",icon:"help",onClick:()=>_("device-help")}),u.jsx(Mn,{label:"Fejlfinding",icon:"debugger",onClick:()=>d(!0)})]}),R&&u.jsxs(u.Fragment,{children:[u.jsx(Mn,{label:P,icon:"back",onClick:b}),u.jsx(Vd,{})]}),u.jsx("div",{className:"spacer"}),(T||R&&F)&&u.jsx(Mn,{label:"Forlad",icon:"exit",onClick:()=>h()})]})]})}function Mn({label:i,icon:l,disabled:o,onClick:s}){return u.jsxs("button",{className:"iconbtn",type:"button",onClick:s,disabled:o,"aria-label":i,children:[u.jsx(Lt,{name:l}),u.jsx("span",{children:i})]})}function Vd(){return u.jsxs("a",{className:"iconbtn sidemenu-link",href:"https://www.teknologiskolen.dk/",target:"_blank",rel:"noreferrer","aria-label":"Teknologiskolen",children:[u.jsx("img",{src:ug,alt:""}),u.jsx("span",{children:"Teknologiskolen"})]})}const Yv={error:"term-error",success:"term-success",warning:"term-warning",info:""},gh={error:"[FEJL] ",success:"[SUCCES] ",warning:"[ADVARSEL] ",info:""};function Xv(){const i=new Date,l=o=>String(o).padStart(2,"0");return`${l(i.getDate())}-${l(i.getMonth()+1)}-${i.getFullYear()}-${l(i.getHours())}-${l(i.getMinutes())}`}function Kv(){const i=le(d=>d.logs),l=le(d=>d.clearLogs),o=le(d=>d.toggleDebugger);function s(){const d=[...i].reverse().map(g=>`${g.time} ${gh[g.level]}${g.message}`).join(`
`),p=new Blob([d],{type:"text/plain"}),_=URL.createObjectURL(p),h=document.createElement("a");h.href=_,h.download=`${Xv()}.txt`,h.click(),URL.revokeObjectURL(_)}return u.jsxs(Rt,{title:"Fejlfinding",onClose:()=>o(!1),closeVariant:"circle",children:[u.jsx("div",{className:"terminal",children:i.length===0?u.jsx("div",{className:"term-line",children:"Ingen log endnu."}):i.map((d,p)=>u.jsxs("div",{className:`term-line ${Yv[d.level]}`,children:[d.time," ",gh[d.level],d.message]},`${d.time}-${p}`))}),u.jsxs("div",{className:"row",style:{marginTop:14},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:l,children:"Ryd"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:s,children:"Gem logfil"})]})]})}const Qh=4,In=Qh*4+17,_h=80,Qv=20,Wv=30660;function Zv(i){const l=new TextEncoder().encode(i);if(l.length>76)throw new Error("QR-koden er for lang.");const o=vh(!1),s=vh(!1);Jv(o,s);const d=t5(l),p=l5(d,Qv);return n5(o,s,[...d,...p]),r5(o,s),o}function vh(i){return Array.from({length:In},()=>Array.from({length:In},()=>i))}function Pn(i,l,o,s,d,p=!0){i[s][o]=d,p&&(l[s][o]=!0)}function Jv(i,l){Pd(i,l,0,0),Pd(i,l,In-7,0),Pd(i,l,0,In-7);for(let o=0;o<In;o+=1)l[6][o]||Pn(i,l,o,6,o%2===0),l[o][6]||Pn(i,l,6,o,o%2===0);e5(i,l,26,26),Pn(i,l,8,Qh*4+9,!0)}function Pd(i,l,o,s){for(let d=-1;d<=7;d+=1)for(let p=-1;p<=7;p+=1){const _=o+p,h=s+d;if(_<0||h<0||_>=In||h>=In)continue;const g=p>=0&&p<=6&&d>=0&&d<=6&&(p===0||p===6||d===0||d===6||p>=2&&p<=4&&d>=2&&d<=4);Pn(i,l,_,h,g)}}function e5(i,l,o,s){for(let d=-2;d<=2;d+=1)for(let p=-2;p<=2;p+=1)l[s+d][o+p]||Pn(i,l,o+p,s+d,Math.max(Math.abs(p),Math.abs(d))!==1)}function t5(i){const l=[];ec(l,4,4),ec(l,i.length,8);for(const s of i)ec(l,s,8);for(ec(l,0,Math.min(4,_h*8-l.length));l.length%8!==0;)l.push(0);const o=[];for(let s=0;s<l.length;s+=8)o.push(l.slice(s,s+8).reduce((d,p)=>d<<1|p,0));for(let s=236;o.length<_h;s=s===236?17:236)o.push(s);return o}function ec(i,l,o){for(let s=o-1;s>=0;s-=1)i.push(l>>>s&1)}function n5(i,l,o){const s=o.flatMap(_=>Array.from({length:8},(h,g)=>_>>>7-g&1));let d=0,p=!0;for(let _=In-1;_>=1;_-=2){_===6&&(_-=1);for(let h=0;h<In;h+=1){const g=p?In-1-h:h;for(let b=0;b<2;b+=1){const x=_-b;if(l[g][x])continue;const k=d<s.length?s[d]===1:!1;i[g][x]=k!==((x+g)%2===0),d+=1}}p=!p}}function r5(i,l){const o=s=>(Wv>>>s&1)!==0;for(let s=0;s<=5;s+=1)Pn(i,l,8,s,o(s));Pn(i,l,8,7,o(6)),Pn(i,l,8,8,o(7)),Pn(i,l,7,8,o(8));for(let s=9;s<15;s+=1)Pn(i,l,14-s,8,o(s));for(let s=0;s<8;s+=1)Pn(i,l,In-1-s,8,o(s));for(let s=8;s<15;s+=1)Pn(i,l,8,In-15+s,o(s))}const _s=new Array(512),Zd=new Array(256);let bh=!1;function Wh(){if(bh)return;let i=1;for(let l=0;l<255;l+=1)_s[l]=i,Zd[i]=l,i<<=1,i&256&&(i^=285);for(let l=255;l<512;l+=1)_s[l]=_s[l-255];bh=!0}function Zh(i,l){return i===0||l===0?0:_s[Zd[i]+Zd[l]]}function l5(i,l){Wh();const o=a5(l),s=Array.from({length:l},()=>0);for(const d of i){const p=d^s.shift();s.push(0);for(let _=0;_<l;_+=1)s[_]^=Zh(o[_],p)}return s}function a5(i){Wh();let l=[1];for(let o=0;o<i;o+=1){const s=Array.from({length:l.length+1},()=>0);for(let d=0;d<l.length;d+=1)s[d]^=Zh(l[d],_s[o]),s[d+1]^=l[d];l=s}return l.slice(1)}function i5(){const i=le(ce=>ce.menuPage),l=le(ce=>ce.closeMenuPage),o=le(ce=>ce.user),s=le(ce=>ce.active),d=le(ce=>ce.layout),p=le(ce=>ce.savedDevices),_=le(ce=>ce.updateUsername),h=le(ce=>ce.createOwnerPairingCode),g=le(ce=>ce.applyOwnerPairingCode),b=le(ce=>ce.clearSavedDevices),x=le(ce=>ce.resetApplicationData),k=le(ce=>ce.saveDeviceSettings),T=le(ce=>ce.setEditMode),R=le(ce=>ce.askConfirm),[B,$]=C.useState((o==null?void 0:o.username)??""),[F,P]=C.useState(!1),[W,H]=C.useState(""),[te,ue]=C.useState(""),[fe,Z]=C.useState(!1),[J,xe]=C.useState(""),ve=C.useRef(null),[Oe,G]=C.useState((s==null?void 0:s.icon)??Dl),[Ve,be]=C.useState(!1),[Ee,z]=C.useState((s==null?void 0:s.canOthersConnect)??!1),[ne,me]=C.useState((s==null?void 0:s.canOthersEdit)??!1),[de,Se]=C.useState((s==null?void 0:s.canOthersEditCode)??!1),[E,U]=C.useState((s==null?void 0:s.gridCols)??11),[re,oe]=C.useState((s==null?void 0:s.gridRows)??31),[ke,V]=C.useState(!1);C.useEffect(()=>{i==="user-settings"&&($((o==null?void 0:o.username)??""),ue(""),xe(""),Z(!1))},[i,o==null?void 0:o.username]),C.useEffect(()=>{i==="device-settings"&&s&&(G(s.icon),z(s.canOthersConnect),me(s.canOthersEdit),Se(s.canOthersEditCode),U(s.gridCols),oe(s.gridRows))},[s,i]),C.useEffect(()=>{if(!fe)return;let ce=!1,Pe=null,De=0;async function Ke(){var St;const kt=window.BarcodeDetector;if(!kt||!((St=navigator.mediaDevices)!=null&&St.getUserMedia)){xe("Denne browser kan ikke scanne QR-koder. Skriv ejerkoden i stedet."),Z(!1);return}try{Pe=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const dn=ve.current;if(!dn)return;dn.srcObject=Pe,await dn.play();const jn=new kt({formats:["qr_code"]}),tr=async()=>{var Fn;if(!ce){try{const fr=(Fn=(await jn.detect(dn)).find(fa=>fa.rawValue))==null?void 0:Fn.rawValue;if(fr){ue(fr),g(fr)&&P(!1),Z(!1);return}}catch{}De=window.requestAnimationFrame(tr)}};De=window.requestAnimationFrame(tr)}catch{xe("Kameraet kunne ikke åbnes. Skriv ejerkoden i stedet."),Z(!1)}}return Ke(),()=>{ce=!0,De&&window.cancelAnimationFrame(De),Pe==null||Pe.getTracks().forEach(kt=>kt.stop())}},[g,fe]);const D=(ce,Pe)=>Number.isFinite(ce)?Math.max(li,Math.min(ai,Math.round(ce))):Pe,ie=(o==null?void 0:o.username)??"",ye=B.trim(),Ue=ye.length>0&&ye!==ie;if(!i)return null;if(i==="user-settings"){let ce=function(){const Ke=h();Ke&&(H(Ke),ue(""),P(!0))},Pe=function(){g(te)&&(ue(""),P(!1))};async function De(){var Ke;try{await((Ke=navigator.clipboard)==null?void 0:Ke.writeText(W))}catch{}}return u.jsxs(u.Fragment,{children:[u.jsx(Rt,{title:"Brugerindstillinger",onClose:l,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(er,{label:"GUID",value:(o==null?void 0:o.userID)??"Ukendt"}),u.jsxs("div",{className:`field ${B.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-username",value:B,onChange:Ke=>$(Ke.target.value),maxLength:24,autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>_(B),disabled:!Ue,children:"Gem nyt brugernavn"}),u.jsx("div",{className:"notice",children:"Ejerkode bruges, hvis den samme person skal forbinde fra flere browsere eller telefoner."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:ce,children:"Ejerkode"}),u.jsx("button",{className:"btn btn-outline btn-block btn-danger",type:"button",onClick:()=>R({title:"Start forfra",message:"Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.",confirmLabel:"Slet alt",onConfirm:()=>{x()}}),children:"Slet brugerdata"})]})}),F&&u.jsx(Rt,{title:"Del ejerkode",onClose:()=>P(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(o5,{code:W}),u.jsx("code",{className:"owner-code-text",children:W}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void De(),children:"Kopiér ejerkode"}),u.jsxs("div",{className:`field ${te.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-owner-code",value:te,onChange:Ke=>ue(Ke.target.value),autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-owner-code",children:"Skriv ejerkode"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:Pe,disabled:!te.trim(),children:"Brug ejerkode i denne browser"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>Z(Ke=>!Ke),children:fe?"Stop scanning":"Scan QR-kode"}),J&&u.jsx("div",{className:"notice",children:J}),fe&&u.jsx("video",{className:"owner-code-video",ref:ve,muted:!0,playsInline:!0})]})})]})}if(i==="application-settings")return u.jsx(Rt,{title:"Applikationsindstillinger",onClose:l,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(er,{label:"Version",value:vs}),u.jsx(er,{label:"Bluetooth",value:fc()?"Tilgængelig":"Ikke tilgængelig"}),u.jsx(er,{label:"Gemte enheder",value:String(p.length)}),u.jsx("div",{className:"notice",children:"Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne tilladelsen i browserens site- eller Bluetooth-indstillinger."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>R({title:"Ryd gemte enheder",message:"Vil du fjerne alle gemte enheder fra denne browser?",confirmLabel:"Ryd",onConfirm:b}),disabled:p.length===0,children:"Ryd gemte enheder"})]})});if(i==="application-about")return u.jsx(Rt,{title:"Om appen",onClose:l,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Pico Kontrol Panel er lavet til at bygge og fjernstyre sjove eller seje Raspberry Pi Pico W-projekter."}),u.jsx(er,{label:"Udvikler",value:"Christian Bröchner Rasmussen"}),u.jsx(er,{label:"Version",value:vs})]})});if(i==="application-help")return u.jsx(Rt,{title:"Hjælp til applikationen",onClose:l,children:u.jsxs("div",{className:"settings-stack prose help-lesson",children:[u.jsxs("div",{className:"help-lesson-card",children:[u.jsx("strong",{children:"Komplet undervisningsforløb"}),u.jsx("p",{children:"Linket åbner Teknologiskolens guide til Pico Kontrol Panel. Her kan du lære hele arbejdsgangen: browseropsætning, Kodeværkstedet, MicroPython, USB-installation, Bluetooth-forbindelse, kontrolpaneler og trådløs kodeudvikling."})]}),u.jsxs("div",{className:"help-lesson-list","aria-label":"Undervisningsforløbet indeholder",children:[u.jsx("span",{children:"Trin-for-trin opsætning"}),u.jsx("span",{children:"Øvelser til kode og kontrolpanel"}),u.jsx("span",{children:"Projektforslag med Pico W"})]}),u.jsx("p",{className:"help-lesson-destination",children:"Du sendes til materialer.teknologiskolen.dk i en ny fane."}),u.jsx("a",{className:"btn btn-primary btn-block",href:"https://materialer.teknologiskolen.dk/lessons/fjernstyring-af-raspberry-pi-pico-w",target:"_blank",rel:"noreferrer",children:"Åbn komplet undervisningsforløb"})]})});if(i==="device-settings"){const ce=!!(s!=null&&s.isOwnedByMe);async function Pe(De=!1){if(!s||!ce)return;const Ke=D(E,s.gridCols),kt=D(re,s.gridRows),St=s5(d,Ke,kt);if(St&&!De){R({title:"Gitter kan påvirke layout",message:`Det nuværende layout bruger op til ${St.requiredCols} kolonner og ${St.requiredRows} rækker. Det nye gitter er ${Ke} × ${kt}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,confirmLabel:"Gem alligevel",onConfirm:()=>{Pe(!0)}});return}V(!0),await k(Oe,Ee,Ee&&ne,Ee&&de,Ke,kt),U(Ke),oe(kt),V(!1),l()}return u.jsx(Rt,{title:"Enhedsindstillinger",onClose:l,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(er,{label:"Navn",value:(s==null?void 0:s.deviceName)??"Ukendt"}),u.jsx(er,{label:"Ejer",value:c5(s)}),ce?u.jsxs(u.Fragment,{children:[u.jsxs("button",{className:"device-icon-pick settings-icon-pick",type:"button",onClick:()=>be(!0),"aria-label":"Vælg ikon",children:[u.jsx(xs,{slug:Oe}),u.jsx("span",{className:"badge",children:u.jsx(Lt,{name:"plus",size:22})})]}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:Ee?"":"active",onClick:()=>z(!1),children:"Privat"}),u.jsx("button",{type:"button",className:Ee?"active":"",onClick:()=>z(!0),children:"Offentlig"})]}),Ee&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:ne?"":"active",onClick:()=>me(!1),children:"Nej"}),u.jsx("button",{type:"button",className:ne?"active":"",onClick:()=>me(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:de?"":"active",onClick:()=>Se(!1),children:"Nej"}),u.jsx("button",{type:"button",className:de?"active":"",onClick:()=>Se(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter"}),u.jsxs("div",{className:"row",children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-cols",children:"Kolonner"}),u.jsx("input",{id:"device-cols",type:"number",min:li,max:ai,value:Number.isNaN(E)?"":E,onChange:De=>U(parseInt(De.target.value,10)),onBlur:()=>U(D(E,(s==null?void 0:s.gridCols)??11))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-rows",children:"Rækker"}),u.jsx("input",{id:"device-rows",type:"number",min:li,max:ai,value:Number.isNaN(re)?"":re,onChange:De=>oe(parseInt(De.target.value,10)),onBlur:()=>oe(D(re,(s==null?void 0:s.gridRows)??31))})]})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>Pe(),disabled:ke,children:ke?"Gemmer...":"Gem enhedsindstillinger"})]}):u.jsxs(u.Fragment,{children:[u.jsx(er,{label:"Ikon",value:(s==null?void 0:s.icon)??Dl}),u.jsx(er,{label:"Redigering",value:s!=null&&s.canEdit?"Tilladt":"Ikke tilladt"}),u.jsx(er,{label:"Gitter",value:`${(s==null?void 0:s.gridCols)??0} × ${(s==null?void 0:s.gridRows)??0}`})]}),Ve&&u.jsx(Dh,{selected:Oe,onSelect:G,onClose:()=>be(!1)})]})})}return u.jsx(Rt,{title:"Hjælp til enheden",onClose:l,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Knapper sender en kommando med deres navn, når de trykkes."}),u.jsx("p",{children:"Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse."}),u.jsx("p",{children:"Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen."}),(s==null?void 0:s.canEdit)&&u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>T(!0),children:"Rediger layout"})]})})}function s5(i,l,o){let s=0,d=0;for(const p of i)ws(p)&&(s=Math.max(s,Math.ceil((p.centerX2+p.spanX)/2)+1),d=Math.max(d,Math.ceil((p.centerY2+p.spanY)/2)+1));return l<s||o<d?{requiredCols:s,requiredRows:d}:null}function o5({code:i}){const l=C.useMemo(()=>Zv(i),[i]),o=l.length;return u.jsxs("svg",{className:"owner-code-qr",viewBox:`0 0 ${o+8} ${o+8}`,role:"img","aria-label":"QR-kode til ejerkode",children:[u.jsx("rect",{width:o+8,height:o+8,fill:"white"}),l.map((s,d)=>s.map((p,_)=>p?u.jsx("rect",{x:_+4,y:d+4,width:"1",height:"1",fill:"currentColor"},`${_}-${d}`):null))]})}function c5(i){var l;return i?i.isOwnedByMe?"Dig":((l=i.ownerName)==null?void 0:l.trim())||"Anden bruger":"Ukendt"}function er({label:i,value:l}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:i}),u.jsx("strong",{children:l})]})}function u5(){const i=le(s=>s.confirmDialog),l=le(s=>s.closeConfirm);if(!i)return null;function o(){i==null||i.onConfirm(),l()}return u.jsx(Rt,{title:i.title,onClose:l,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:i.message}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:l,children:i.cancelLabel??"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:o,children:i.confirmLabel??"Fortsæt"})]})]})})}function d5(){const i=le(s=>s.connectionLost),l=le(s=>s.reconnectLostDevice),o=le(s=>s.dismissConnectionLost);return i?u.jsx(Rt,{title:"Forbindelse afbrudt",onClose:o,children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("p",{className:"confirm-message",children:["Forbindelsen til ",i.deviceName," blev afbrudt. Tjek at Picoen har strøm og er tæt nok på."]}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:o,children:"Luk"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>l(),children:"Genforbind"})]})]})}):null}function f5(){const i=le(o=>o.toast),l=le(o=>o.dismissToast);return i?u.jsx("div",{className:"toast",role:"alert",onClick:l,children:i.message},i.id):null}function m5(){const i=le(h=>h.screen),l=le(h=>h.splashTarget),o=le(h=>h.init),s=le(h=>h.sideMenuOpen),d=le(h=>h.debuggerOpen),[p,_]=C.useState(!1);return C.useEffect(()=>{o()},[o]),C.useEffect(()=>{if(s){_(!0);return}const h=setTimeout(()=>_(!1),140);return()=>clearTimeout(h)},[s]),u.jsxs("div",{className:"app",children:[i==="splash"&&l==="intro"&&u.jsx(Dm,{}),i==="splash"&&l==="dashboard"&&u.jsx(Bm,{}),i==="splash"&&u.jsx(vg,{}),i==="intro"&&u.jsx(Dm,{}),i==="dashboard"&&u.jsx(Bm,{}),i==="connection"&&u.jsx(Ag,{}),i==="create"&&u.jsx(Og,{}),i==="control"&&u.jsx(E_,{}),i==="ide"&&u.jsx(Sv,{}),p&&u.jsx($v,{open:s}),u.jsx(i5,{}),u.jsx(d5,{}),u.jsx(u5,{}),d&&u.jsx(Kv,{}),u.jsx(f5,{})]})}function h5(){if(!("serviceWorker"in navigator))return;window.addEventListener("load",()=>{const l=new URL("sw.js",window.location.href);navigator.serviceWorker.register(l,{scope:"./"}).catch(o=>{console.warn("Service worker registration failed:",o)})});let i=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{i||window.crossOriginIsolated||(i=!0,window.location.reload())})}h5();M2.createRoot(document.getElementById("root")).render(u.jsx(hs.StrictMode,{children:u.jsx(m5,{})}));
