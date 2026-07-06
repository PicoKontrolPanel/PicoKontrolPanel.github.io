var Jg=Object.defineProperty;var eb=(s,i,c)=>i in s?Jg(s,i,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[i]=c;var me=(s,i,c)=>eb(s,typeof i!="symbol"?i+"":i,c);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))a(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const b of h.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&a(b)}).observe(document,{childList:!0,subtree:!0});function c(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function a(f){if(f.ep)return;f.ep=!0;const h=c(f);fetch(f.href,h)}})();function c_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var wf={exports:{}},rs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lh;function nb(){if(lh)return rs;lh=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function c(a,f,h){var b=null;if(h!==void 0&&(b=""+h),f.key!==void 0&&(b=""+f.key),"key"in f){h={};for(var p in f)p!=="key"&&(h[p]=f[p])}else h=f;return f=h.ref,{$$typeof:s,type:a,key:b,ref:f!==void 0?f:null,props:h}}return rs.Fragment=i,rs.jsx=c,rs.jsxs=c,rs}var ih;function tb(){return ih||(ih=1,wf.exports=nb()),wf.exports}var u=tb(),Ef={exports:{}},ke={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ah;function rb(){if(ah)return ke;ah=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),b=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),R=Symbol.iterator;function D(k){return k===null||typeof k!="object"?null:(k=R&&k[R]||k["@@iterator"],typeof k=="function"?k:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,F={};function V(k,z,ne){this.props=k,this.context=z,this.refs=F,this.updater=ne||U}V.prototype.isReactComponent={},V.prototype.setState=function(k,z){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,z,"setState")},V.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function G(){}G.prototype=V.prototype;function ae(k,z,ne){this.props=k,this.context=z,this.refs=F,this.updater=ne||U}var se=ae.prototype=new G;se.constructor=ae,K(se,V.prototype),se.isPureReactComponent=!0;var oe=Array.isArray;function he(){}var te={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function Re(k,z,ne){var O=ne.ref;return{$$typeof:s,type:k,key:z,ref:O!==void 0?O:null,props:ne}}function ve(k,z){return Re(k.type,z,k.props)}function we(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function W(k){var z={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(ne){return z[ne]})}var Fe=/\/+/g;function Ae(k,z){return typeof k=="object"&&k!==null&&k.key!=null?W(""+k.key):z.toString(36)}function $e(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(he,he):(k.status="pending",k.then(function(z){k.status==="pending"&&(k.status="fulfilled",k.value=z)},function(z){k.status==="pending"&&(k.status="rejected",k.reason=z)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function H(k,z,ne,O,Z){var J=typeof k;(J==="undefined"||J==="boolean")&&(k=null);var q=!1;if(k===null)q=!0;else switch(J){case"bigint":case"string":case"number":q=!0;break;case"object":switch(k.$$typeof){case s:case i:q=!0;break;case w:return q=k._init,H(q(k._payload),z,ne,O,Z)}}if(q)return Z=Z(k),q=O===""?"."+Ae(k,0):O,oe(Z)?(ne="",q!=null&&(ne=q.replace(Fe,"$&/")+"/"),H(Z,z,ne,"",function(Qn){return Qn})):Z!=null&&(we(Z)&&(Z=ve(Z,ne+(Z.key==null||k&&k.key===Z.key?"":(""+Z.key).replace(Fe,"$&/")+"/")+q)),z.push(Z)),1;q=0;var He=O===""?".":O+":";if(oe(k))for(var Oe=0;Oe<k.length;Oe++)O=k[Oe],J=He+Ae(O,Oe),q+=H(O,z,ne,J,Z);else if(Oe=D(k),typeof Oe=="function")for(k=Oe.call(k),Oe=0;!(O=k.next()).done;)O=O.value,J=He+Ae(O,Oe++),q+=H(O,z,ne,J,Z);else if(J==="object"){if(typeof k.then=="function")return H($e(k),z,ne,O,Z);throw z=String(k),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return q}function re(k,z,ne){if(k==null)return k;var O=[],Z=0;return H(k,O,"","",function(J){return z.call(ne,J,Z++)}),O}function ue(k){if(k._status===-1){var z=k._result;z=z(),z.then(function(ne){(k._status===0||k._status===-1)&&(k._status=1,k._result=ne)},function(ne){(k._status===0||k._status===-1)&&(k._status=2,k._result=ne)}),k._status===-1&&(k._status=0,k._result=z)}if(k._status===1)return k._result.default;throw k._result}var fe=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)},Ee={map:re,forEach:function(k,z,ne){re(k,function(){z.apply(this,arguments)},ne)},count:function(k){var z=0;return re(k,function(){z++}),z},toArray:function(k){return re(k,function(z){return z})||[]},only:function(k){if(!we(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return ke.Activity=E,ke.Children=Ee,ke.Component=V,ke.Fragment=c,ke.Profiler=f,ke.PureComponent=ae,ke.StrictMode=a,ke.Suspense=g,ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=te,ke.__COMPILER_RUNTIME={__proto__:null,c:function(k){return te.H.useMemoCache(k)}},ke.cache=function(k){return function(){return k.apply(null,arguments)}},ke.cacheSignal=function(){return null},ke.cloneElement=function(k,z,ne){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var O=K({},k.props),Z=k.key;if(z!=null)for(J in z.key!==void 0&&(Z=""+z.key),z)!ee.call(z,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&z.ref===void 0||(O[J]=z[J]);var J=arguments.length-2;if(J===1)O.children=ne;else if(1<J){for(var q=Array(J),He=0;He<J;He++)q[He]=arguments[He+2];O.children=q}return Re(k.type,Z,O)},ke.createContext=function(k){return k={$$typeof:b,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:h,_context:k},k},ke.createElement=function(k,z,ne){var O,Z={},J=null;if(z!=null)for(O in z.key!==void 0&&(J=""+z.key),z)ee.call(z,O)&&O!=="key"&&O!=="__self"&&O!=="__source"&&(Z[O]=z[O]);var q=arguments.length-2;if(q===1)Z.children=ne;else if(1<q){for(var He=Array(q),Oe=0;Oe<q;Oe++)He[Oe]=arguments[Oe+2];Z.children=He}if(k&&k.defaultProps)for(O in q=k.defaultProps,q)Z[O]===void 0&&(Z[O]=q[O]);return Re(k,J,Z)},ke.createRef=function(){return{current:null}},ke.forwardRef=function(k){return{$$typeof:p,render:k}},ke.isValidElement=we,ke.lazy=function(k){return{$$typeof:w,_payload:{_status:-1,_result:k},_init:ue}},ke.memo=function(k,z){return{$$typeof:y,type:k,compare:z===void 0?null:z}},ke.startTransition=function(k){var z=te.T,ne={};te.T=ne;try{var O=k(),Z=te.S;Z!==null&&Z(ne,O),typeof O=="object"&&O!==null&&typeof O.then=="function"&&O.then(he,fe)}catch(J){fe(J)}finally{z!==null&&ne.types!==null&&(z.types=ne.types),te.T=z}},ke.unstable_useCacheRefresh=function(){return te.H.useCacheRefresh()},ke.use=function(k){return te.H.use(k)},ke.useActionState=function(k,z,ne){return te.H.useActionState(k,z,ne)},ke.useCallback=function(k,z){return te.H.useCallback(k,z)},ke.useContext=function(k){return te.H.useContext(k)},ke.useDebugValue=function(){},ke.useDeferredValue=function(k,z){return te.H.useDeferredValue(k,z)},ke.useEffect=function(k,z){return te.H.useEffect(k,z)},ke.useEffectEvent=function(k){return te.H.useEffectEvent(k)},ke.useId=function(){return te.H.useId()},ke.useImperativeHandle=function(k,z,ne){return te.H.useImperativeHandle(k,z,ne)},ke.useInsertionEffect=function(k,z){return te.H.useInsertionEffect(k,z)},ke.useLayoutEffect=function(k,z){return te.H.useLayoutEffect(k,z)},ke.useMemo=function(k,z){return te.H.useMemo(k,z)},ke.useOptimistic=function(k,z){return te.H.useOptimistic(k,z)},ke.useReducer=function(k,z,ne){return te.H.useReducer(k,z,ne)},ke.useRef=function(k){return te.H.useRef(k)},ke.useState=function(k){return te.H.useState(k)},ke.useSyncExternalStore=function(k,z,ne){return te.H.useSyncExternalStore(k,z,ne)},ke.useTransition=function(){return te.H.useTransition()},ke.version="19.2.7",ke}var sh;function Qf(){return sh||(sh=1,Ef.exports=rb()),Ef.exports}var B=Qf();const ds=c_(B);var Sf={exports:{}},ls={},kf={exports:{}},Nf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oh;function lb(){return oh||(oh=1,(function(s){function i(H,re){var ue=H.length;H.push(re);e:for(;0<ue;){var fe=ue-1>>>1,Ee=H[fe];if(0<f(Ee,re))H[fe]=re,H[ue]=Ee,ue=fe;else break e}}function c(H){return H.length===0?null:H[0]}function a(H){if(H.length===0)return null;var re=H[0],ue=H.pop();if(ue!==re){H[0]=ue;e:for(var fe=0,Ee=H.length,k=Ee>>>1;fe<k;){var z=2*(fe+1)-1,ne=H[z],O=z+1,Z=H[O];if(0>f(ne,ue))O<Ee&&0>f(Z,ne)?(H[fe]=Z,H[O]=ue,fe=O):(H[fe]=ne,H[z]=ue,fe=z);else if(O<Ee&&0>f(Z,ue))H[fe]=Z,H[O]=ue,fe=O;else break e}}return re}function f(H,re){var ue=H.sortIndex-re.sortIndex;return ue!==0?ue:H.id-re.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var b=Date,p=b.now();s.unstable_now=function(){return b.now()-p}}var g=[],y=[],w=1,E=null,R=3,D=!1,U=!1,K=!1,F=!1,V=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate<"u"?setImmediate:null;function se(H){for(var re=c(y);re!==null;){if(re.callback===null)a(y);else if(re.startTime<=H)a(y),re.sortIndex=re.expirationTime,i(g,re);else break;re=c(y)}}function oe(H){if(K=!1,se(H),!U)if(c(g)!==null)U=!0,he||(he=!0,W());else{var re=c(y);re!==null&&$e(oe,re.startTime-H)}}var he=!1,te=-1,ee=5,Re=-1;function ve(){return F?!0:!(s.unstable_now()-Re<ee)}function we(){if(F=!1,he){var H=s.unstable_now();Re=H;var re=!0;try{e:{U=!1,K&&(K=!1,G(te),te=-1),D=!0;var ue=R;try{n:{for(se(H),E=c(g);E!==null&&!(E.expirationTime>H&&ve());){var fe=E.callback;if(typeof fe=="function"){E.callback=null,R=E.priorityLevel;var Ee=fe(E.expirationTime<=H);if(H=s.unstable_now(),typeof Ee=="function"){E.callback=Ee,se(H),re=!0;break n}E===c(g)&&a(g),se(H)}else a(g);E=c(g)}if(E!==null)re=!0;else{var k=c(y);k!==null&&$e(oe,k.startTime-H),re=!1}}break e}finally{E=null,R=ue,D=!1}re=void 0}}finally{re?W():he=!1}}}var W;if(typeof ae=="function")W=function(){ae(we)};else if(typeof MessageChannel<"u"){var Fe=new MessageChannel,Ae=Fe.port2;Fe.port1.onmessage=we,W=function(){Ae.postMessage(null)}}else W=function(){V(we,0)};function $e(H,re){te=V(function(){H(s.unstable_now())},re)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return R},s.unstable_next=function(H){switch(R){case 1:case 2:case 3:var re=3;break;default:re=R}var ue=R;R=re;try{return H()}finally{R=ue}},s.unstable_requestPaint=function(){F=!0},s.unstable_runWithPriority=function(H,re){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ue=R;R=H;try{return re()}finally{R=ue}},s.unstable_scheduleCallback=function(H,re,ue){var fe=s.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?fe+ue:fe):ue=fe,H){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=ue+Ee,H={id:w++,callback:re,priorityLevel:H,startTime:ue,expirationTime:Ee,sortIndex:-1},ue>fe?(H.sortIndex=ue,i(y,H),c(g)===null&&H===c(y)&&(K?(G(te),te=-1):K=!0,$e(oe,ue-fe))):(H.sortIndex=Ee,i(g,H),U||D||(U=!0,he||(he=!0,W()))),H},s.unstable_shouldYield=ve,s.unstable_wrapCallback=function(H){var re=R;return function(){var ue=R;R=re;try{return H.apply(this,arguments)}finally{R=ue}}}})(Nf)),Nf}var ch;function ib(){return ch||(ch=1,kf.exports=lb()),kf.exports}var Rf={exports:{}},Kn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh;function ab(){if(uh)return Kn;uh=1;var s=Qf();function i(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)y+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var a={d:{f:c,r:function(){throw Error(i(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function h(g,y,w){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:E==null?null:""+E,children:g,containerInfo:y,implementation:w}}var b=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Kn.createPortal=function(g,y){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(i(299));return h(g,y,null,w)},Kn.flushSync=function(g){var y=b.T,w=a.p;try{if(b.T=null,a.p=2,g)return g()}finally{b.T=y,a.p=w,a.d.f()}},Kn.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(g,y))},Kn.prefetchDNS=function(g){typeof g=="string"&&a.d.D(g)},Kn.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var w=y.as,E=p(w,y.crossOrigin),R=typeof y.integrity=="string"?y.integrity:void 0,D=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;w==="style"?a.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:E,integrity:R,fetchPriority:D}):w==="script"&&a.d.X(g,{crossOrigin:E,integrity:R,fetchPriority:D,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Kn.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var w=p(y.as,y.crossOrigin);a.d.M(g,{crossOrigin:w,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(g)},Kn.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var w=y.as,E=p(w,y.crossOrigin);a.d.L(g,w,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Kn.preloadModule=function(g,y){if(typeof g=="string")if(y){var w=p(y.as,y.crossOrigin);a.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:w,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(g)},Kn.requestFormReset=function(g){a.d.r(g)},Kn.unstable_batchedUpdates=function(g,y){return g(y)},Kn.useFormState=function(g,y,w){return b.H.useFormState(g,y,w)},Kn.useFormStatus=function(){return b.H.useHostTransitionStatus()},Kn.version="19.2.7",Kn}var fh;function sb(){if(fh)return Rf.exports;fh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),Rf.exports=ab(),Rf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh;function ob(){if(dh)return ls;dh=1;var s=ib(),i=Qf(),c=sb();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function b(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(h(e)!==e)throw Error(a(188))}function y(e){var n=e.alternate;if(!n){if(n=h(e),n===null)throw Error(a(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===t)return g(l),e;if(o===r)return g(l),n;o=o.sibling}throw Error(a(188))}if(t.return!==r.return)t=l,r=o;else{for(var m=!1,v=l.child;v;){if(v===t){m=!0,t=l,r=o;break}if(v===r){m=!0,r=l,t=o;break}v=v.sibling}if(!m){for(v=o.child;v;){if(v===t){m=!0,t=o,r=l;break}if(v===r){m=!0,r=o,t=l;break}v=v.sibling}if(!m)throw Error(a(189))}}if(t.alternate!==r)throw Error(a(190))}if(t.tag!==3)throw Error(a(188));return t.stateNode.current===t?e:n}function w(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=w(e),n!==null)return n;e=e.sibling}return null}var E=Object.assign,R=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),ae=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),Re=Symbol.for("react.activity"),ve=Symbol.for("react.memo_cache_sentinel"),we=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=we&&e[we]||e["@@iterator"],typeof e=="function"?e:null)}var Fe=Symbol.for("react.client.reference");function Ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Fe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case V:return"Profiler";case F:return"StrictMode";case oe:return"Suspense";case he:return"SuspenseList";case Re:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case U:return"Portal";case ae:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case se:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case te:return n=e.displayName||null,n!==null?n:Ae(e.type)||"Memo";case ee:n=e._payload,e=e._init;try{return Ae(e(n))}catch{}}return null}var $e=Array.isArray,H=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},fe=[],Ee=-1;function k(e){return{current:e}}function z(e){0>Ee||(e.current=fe[Ee],fe[Ee]=null,Ee--)}function ne(e,n){Ee++,fe[Ee]=e.current,e.current=n}var O=k(null),Z=k(null),J=k(null),q=k(null);function He(e,n){switch(ne(J,n),ne(Z,e),ne(O,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Rp(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Rp(n),e=Tp(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(O),ne(O,e)}function Oe(){z(O),z(Z),z(J)}function Qn(e){e.memoizedState!==null&&ne(q,e);var n=O.current,t=Tp(n,e.type);n!==t&&(ne(Z,e),ne(O,t))}function Xt(e){Z.current===e&&(z(O),z(Z)),q.current===e&&(z(q),Ja._currentValue=ue)}var xe,wn;function jn(e){if(xe===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);xe=n&&n[1]||"",wn=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xe+e+wn}var ze=!1;function Mn(e,n){if(!e||ze)return"";ze=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(I){var L=I}Reflect.construct(e,[],X)}else{try{X.call()}catch(I){L=I}e.call(X.prototype)}}else{try{throw Error()}catch(I){L=I}(X=e())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(I){if(I&&L&&typeof I.stack=="string")return[I.stack,L.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=r.DetermineComponentFrameRoot(),m=o[0],v=o[1];if(m&&v){var S=m.split(`
`),C=v.split(`
`);for(l=r=0;r<S.length&&!S[r].includes("DetermineComponentFrameRoot");)r++;for(;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;if(r===S.length||l===C.length)for(r=S.length-1,l=C.length-1;1<=r&&0<=l&&S[r]!==C[l];)l--;for(;1<=r&&0<=l;r--,l--)if(S[r]!==C[l]){if(r!==1||l!==1)do if(r--,l--,0>l||S[r]!==C[l]){var Y=`
`+S[r].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=r&&0<=l);break}}}finally{ze=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?jn(t):""}function Pt(e,n){switch(e.tag){case 26:case 27:case 5:return jn(e.type);case 16:return jn("Lazy");case 13:return e.child!==n&&n!==null?jn("Suspense Fallback"):jn("Suspense");case 19:return jn("SuspenseList");case 0:case 15:return Mn(e.type,!1);case 11:return Mn(e.type.render,!1);case 1:return Mn(e.type,!0);case 31:return jn("Activity");default:return""}}function Pn(e){try{var n="",t=null;do n+=Pt(e,t),t=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ur=Object.prototype.hasOwnProperty,Hr=s.unstable_scheduleCallback,St=s.unstable_cancelCallback,di=s.unstable_shouldYield,Ir=s.unstable_requestPaint,En=s.unstable_now,jl=s.unstable_getCurrentPriorityLevel,Ml=s.unstable_ImmediatePriority,ua=s.unstable_UserBlockingPriority,Dl=s.unstable_NormalPriority,Zn=s.unstable_LowPriority,ft=s.unstable_IdlePriority,Qt=s.log,mi=s.unstable_setDisableYieldValue,Al=null,Sn=null;function dt(e){if(typeof Qt=="function"&&mi(e),Sn&&typeof Sn.setStrictMode=="function")try{Sn.setStrictMode(Al,e)}catch{}}var On=Math.clz32?Math.clz32:cr,Gr=Math.log,or=Math.LN2;function cr(e){return e>>>=0,e===0?32:31-(Gr(e)/or|0)|0}var mt=256,Yn=262144,Pe=4194304;function on(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tn(e,n,t){var r=e.pendingLanes;if(r===0)return 0;var l=0,o=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var v=r&134217727;return v!==0?(r=v&~o,r!==0?l=on(r):(m&=v,m!==0?l=on(m):t||(t=v&~e,t!==0&&(l=on(t))))):(v=r&~o,v!==0?l=on(v):m!==0?l=on(m):t||(t=r&~e,t!==0&&(l=on(t)))),l===0?0:n!==0&&n!==l&&(n&o)===0&&(o=l&-l,t=n&-n,o>=t||o===32&&(t&4194048)!==0)?n:l}function Cn(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function gc(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ol(){var e=Pe;return Pe<<=1,(Pe&62914560)===0&&(Pe=4194304),e}function Zt(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Cl(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ur(e,n,t,r,l,o){var m=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var v=e.entanglements,S=e.expirationTimes,C=e.hiddenUpdates;for(t=m&~t;0<t;){var Y=31-On(t),X=1<<Y;v[Y]=0,S[Y]=-1;var L=C[Y];if(L!==null)for(C[Y]=null,Y=0;Y<L.length;Y++){var I=L[Y];I!==null&&(I.lane&=-536870913)}t&=~X}r!==0&&gs(e,r,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(m&~n))}function gs(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-On(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|t&261930}function pi(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-On(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}function bs(e,n){var t=n&-n;return t=(t&42)!==0?1:Vr(t),(t&(e.suspendedLanes|n))!==0?0:t}function Vr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function kt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function cn(){var e=re.p;return e!==0?e:(e=window.event,e===void 0?32:Zp(e.type))}function fa(e,n){var t=re.p;try{return re.p=e,n()}finally{re.p=t}}var Ln=Math.random().toString(36).slice(2),pn="__reactFiber$"+Ln,kn="__reactProps$"+Ln,pt="__reactContainer$"+Ln,Ll="__reactEvents$"+Ln,Nt="__reactListeners$"+Ln,fr="__reactHandles$"+Ln,Pr="__reactResources$"+Ln,Wn="__reactMarker$"+Ln;function Wt(e){delete e[pn],delete e[kn],delete e[Ll],delete e[Nt],delete e[fr]}function Rt(e){var n=e[pn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[pt]||t[pn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Lp(e);e!==null;){if(t=e[pn])return t;e=Lp(e)}return n}e=t,t=e.parentNode}return null}function tt(e){if(e=e[pn]||e[pt]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function dr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function Jn(e){var n=e[Pr];return n||(n=e[Pr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function rn(e){e[Wn]=!0}var Jt=new Set,mr={};function rt(e,n){pr(e,n),pr(e+"Capture",n)}function pr(e,n){for(mr[e]=n,e=0;e<n.length;e++)Jt.add(n[e])}var Bl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zl={},Ul={};function Yr(e){return Ur.call(Ul,e)?!0:Ur.call(zl,e)?!1:Bl.test(e)?Ul[e]=!0:(zl[e]=!0,!1)}function Yt(e,n,t){if(Yr(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function _e(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function ht(e,n,t,r){if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+r)}}function lt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ys(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function bc(e,n,t){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,o=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(m){t=""+m,o.call(this,m)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return t},setValue:function(m){t=""+m},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function da(e){if(!e._valueTracker){var n=ys(e)?"checked":"value";e._valueTracker=bc(e,n,""+e[n])}}function Fr(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ys(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ft(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Tt=/[\n"\\]/g;function Fn(e){return e.replace(Tt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function $n(e,n,t,r,l,o,m,v){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),n!=null?m==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+lt(n)):e.value!==""+lt(n)&&(e.value=""+lt(n)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),n!=null?ma(e,m,lt(n)):t!=null?ma(e,m,lt(t)):r!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+lt(v):e.removeAttribute("name")}function vs(e,n,t,r,l,o,m,v){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),n!=null||t!=null){if(!(o!=="submit"&&o!=="reset"||n!=null)){da(e);return}t=t!=null?""+lt(t):"",n=n!=null?""+lt(n):t,v||n===e.value||(e.value=n),e.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=v?e.checked:!!r,e.defaultChecked=!!r,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),da(e)}function ma(e,n,t){n==="number"&&Ft(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function hr(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+lt(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function hi(e,n,t){if(n!=null&&(n=""+lt(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+lt(t):""}function P(e,n,t,r){if(n==null){if(r!=null){if(t!=null)throw Error(a(92));if($e(r)){if(1<r.length)throw Error(a(93));r=r[0]}t=r}t==null&&(t=""),n=t}t=lt(n),e.defaultValue=t,r=e.textContent,r===t&&r!==""&&r!==null&&(e.value=r),da(e)}function $r(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var yc=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xs(e,n,t){var r=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,t):typeof t!="number"||t===0||yc.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function qr(e,n,t){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,t!=null){for(var r in t)!t.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var l in n)r=n[l],n.hasOwnProperty(l)&&t[l]!==r&&xs(e,l,r)}else for(var o in n)n.hasOwnProperty(o)&&xs(e,o,n[o])}function _i(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ws=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),gi=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ln(e){return gi.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function jt(){}var Kr=null;function _r(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xr=null,Qr=null;function Es(e){var n=tt(e);if(n&&(e=n.stateNode)){var t=e[kn]||null;e:switch(e=n.stateNode,n.type){case"input":if($n(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Fn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=r[kn]||null;if(!l)throw Error(a(90));$n(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<t.length;n++)r=t[n],r.form===e.form&&Fr(r)}break e;case"textarea":hi(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&hr(e,!!t.multiple,n,!1)}}}var bi=!1;function Ss(e,n,t){if(bi)return e(n,t);bi=!0;try{var r=e(n);return r}finally{if(bi=!1,(Xr!==null||Qr!==null)&&(jo(),Xr&&(n=Xr,e=Qr,Qr=Xr=null,Es(n),e)))for(n=0;n<e.length;n++)Es(e[n])}}function Zr(e,n){var t=e.stateNode;if(t===null)return null;var r=t[kn]||null;if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(a(231,n,typeof t));return t}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gr=!1;if(Dn)try{var Hl={};Object.defineProperty(Hl,"passive",{get:function(){gr=!0}}),window.addEventListener("test",Hl,Hl),window.removeEventListener("test",Hl,Hl)}catch{gr=!1}var un=null,yi=null,Wr=null;function Nn(){if(Wr)return Wr;var e,n=yi,t=n.length,r,l="value"in un?un.value:un.textContent,o=l.length;for(e=0;e<t&&n[e]===l[e];e++);var m=t-e;for(r=1;r<=m&&n[t-r]===l[o-r];r++);return Wr=l.slice(e,1<r?1-r:void 0)}function er(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function vi(){return!0}function ks(){return!1}function gn(e){function n(t,r,l,o,m){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=m,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(t=e[v],this[v]=t?t(o):o[v]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?vi:ks,this.isPropagationStopped=ks,this}return E(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=vi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=vi)},persist:function(){},isPersistent:vi}),n}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=gn(br),nr=E({},br,{view:0,detail:0}),xi=gn(nr),wi,Gl,Vl,Ei=E({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Si,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vl&&(Vl&&e.type==="mousemove"?(wi=e.screenX-Vl.screenX,Gl=e.screenY-Vl.screenY):Gl=wi=0,Vl=e),wi)},movementY:function(e){return"movementY"in e?e.movementY:Gl}}),Ns=gn(Ei),Mt=E({},Ei,{dataTransfer:0}),fn=gn(Mt),pa=E({},nr,{relatedTarget:0}),yr=gn(pa),Rs=E({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),Ts=gn(Rs),js=E({},br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vc=gn(js),xc=E({},br,{data:0}),Ms=gn(xc),Ds={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},As={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ha={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wc(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ha[e])?!!n[e]:!1}function Si(){return wc}var Os=E({},nr,{key:function(e){if(e.key){var n=Ds[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?As[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Si,charCode:function(e){return e.type==="keypress"?er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cs=gn(Os),Ec=E({},Ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ls=gn(Ec),Bs=E({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Si}),_a=gn(Bs),Sc=E({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),kc=gn(Sc),Nc=E({},Ei,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rc=gn(Nc),Tc=E({},br,{newState:0,oldState:0}),jc=gn(Tc),Mc=[9,13,27,32],ga=Dn&&"CompositionEvent"in window,Pl=null;Dn&&"documentMode"in document&&(Pl=document.documentMode);var Dc=Dn&&"TextEvent"in window&&!Pl,zs=Dn&&(!ga||Pl&&8<Pl&&11>=Pl),vr=" ",Us=!1;function ba(e,n){switch(e){case"keyup":return Mc.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ya(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jr=!1;function Hs(e,n){switch(e){case"compositionend":return ya(n);case"keypress":return n.which!==32?null:(Us=!0,vr);case"textInput":return e=n.data,e===vr&&Us?null:e;default:return null}}function Ac(e,n){if(Jr)return e==="compositionend"||!ga&&ba(e,n)?(e=Nn(),Wr=yi=un=null,Jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return zs&&n.locale!=="ko"?null:n.data;default:return null}}var Oc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function va(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Oc[e.type]:n==="textarea"}function Is(e,n,t,r){Xr?Qr?Qr.push(r):Qr=[r]:Xr=r,n=Bo(n,"onChange"),0<n.length&&(t=new Il("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Yl=null,Fl=null;function Cc(e){xp(e,0)}function ki(e){var n=dr(e);if(Fr(n))return e}function Gs(e,n){if(e==="change")return n}var Vs=!1;if(Dn){var $l;if(Dn){var it="oninput"in document;if(!it){var xa=document.createElement("div");xa.setAttribute("oninput","return;"),it=typeof xa.oninput=="function"}$l=it}else $l=!1;Vs=$l&&(!document.documentMode||9<document.documentMode)}function Ps(){Yl&&(Yl.detachEvent("onpropertychange",Ys),Fl=Yl=null)}function Ys(e){if(e.propertyName==="value"&&ki(Fl)){var n=[];Is(n,Fl,e,_r(e)),Ss(Cc,n)}}function wa(e,n,t){e==="focusin"?(Ps(),Yl=n,Fl=t,Yl.attachEvent("onpropertychange",Ys)):e==="focusout"&&Ps()}function Ni(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ki(Fl)}function Ea(e,n){if(e==="click")return ki(n)}function Fs(e,n){if(e==="input"||e==="change")return ki(n)}function Ri(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Bn=typeof Object.is=="function"?Object.is:Ri;function el(e,n){if(Bn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Ur.call(n,l)||!Bn(e[l],n[l]))return!1}return!0}function $s(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qs(e,n){var t=$s(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=$s(t)}}function Ks(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ks(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function d(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ft(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ft(e.document)}return n}function _(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var x=Dn&&"documentMode"in document&&11>=document.documentMode,T=null,j=null,Q=null,ce=!1;function Ie(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ce||T==null||T!==Ft(r)||(r=T,"selectionStart"in r&&_(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Q&&el(Q,r)||(Q=r,r=Bo(j,"onSelect"),0<r.length&&(n=new Il("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=T)))}function be(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ce={animationend:be("Animation","AnimationEnd"),animationiteration:be("Animation","AnimationIteration"),animationstart:be("Animation","AnimationStart"),transitionrun:be("Transition","TransitionRun"),transitionstart:be("Transition","TransitionStart"),transitioncancel:be("Transition","TransitionCancel"),transitionend:be("Transition","TransitionEnd")},an={},qn={};Dn&&(qn=document.createElement("div").style,"AnimationEvent"in window||(delete Ce.animationend.animation,delete Ce.animationiteration.animation,delete Ce.animationstart.animation),"TransitionEvent"in window||delete Ce.transitionend.transition);function Se(e){if(an[e])return an[e];if(!Ce[e])return e;var n=Ce[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in qn)return an[e]=n[t];return e}var Je=Se("animationend"),tr=Se("animationiteration"),Dt=Se("animationstart"),$t=Se("transitionrun"),nl=Se("transitionstart"),tl=Se("transitioncancel"),Sa=Se("transitionend"),ql=new Map,Kl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kl.push("scrollEnd");function zn(e,n){ql.set(e,n),rt(n,[e])}var Xl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},At=[],Ti=0,Lc=0;function Xs(){for(var e=Ti,n=Lc=Ti=0;n<e;){var t=At[n];At[n++]=null;var r=At[n];At[n++]=null;var l=At[n];At[n++]=null;var o=At[n];if(At[n++]=null,r!==null&&l!==null){var m=r.pending;m===null?l.next=l:(l.next=m.next,m.next=l),r.pending=l}o!==0&&td(t,l,o)}}function Qs(e,n,t,r){At[Ti++]=e,At[Ti++]=n,At[Ti++]=t,At[Ti++]=r,Lc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Bc(e,n,t,r){return Qs(e,n,t,r),Zs(e)}function Ql(e,n){return Qs(e,null,null,n),Zs(e)}function td(e,n,t){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t);for(var l=!1,o=e.return;o!==null;)o.childLanes|=t,r=o.alternate,r!==null&&(r.childLanes|=t),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&n!==null&&(l=31-On(t),e=o.hiddenUpdates,r=e[l],r===null?e[l]=[n]:r.push(n),n.lane=t|536870912),o):null}function Zs(e){if(50<$a)throw $a=0,Fu=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ji={};function B_(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(e,n,t,r){return new B_(e,n,t,r)}function zc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xr(e,n){var t=e.alternate;return t===null?(t=_t(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function rd(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ws(e,n,t,r,l,o){var m=0;if(r=e,typeof e=="function")zc(e)&&(m=1);else if(typeof e=="string")m=Gg(e,t,O.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Re:return e=_t(31,t,n,l),e.elementType=Re,e.lanes=o,e;case K:return Zl(t.children,l,o,n);case F:m=8,l|=24;break;case V:return e=_t(12,t,n,l|2),e.elementType=V,e.lanes=o,e;case oe:return e=_t(13,t,n,l),e.elementType=oe,e.lanes=o,e;case he:return e=_t(19,t,n,l),e.elementType=he,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ae:m=10;break e;case G:m=9;break e;case se:m=11;break e;case te:m=14;break e;case ee:m=16,r=null;break e}m=29,t=Error(a(130,e===null?"null":typeof e,"")),r=null}return n=_t(m,t,n,l),n.elementType=e,n.type=r,n.lanes=o,n}function Zl(e,n,t,r){return e=_t(7,e,r,n),e.lanes=t,e}function Uc(e,n,t){return e=_t(6,e,null,n),e.lanes=t,e}function ld(e){var n=_t(18,null,null,0);return n.stateNode=e,n}function Hc(e,n,t){return n=_t(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var id=new WeakMap;function Ot(e,n){if(typeof e=="object"&&e!==null){var t=id.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Pn(n)},id.set(e,n),n)}return{value:e,source:n,stack:Pn(n)}}var Mi=[],Di=0,Js=null,ka=0,Ct=[],Lt=0,rl=null,rr=1,lr="";function wr(e,n){Mi[Di++]=ka,Mi[Di++]=Js,Js=e,ka=n}function ad(e,n,t){Ct[Lt++]=rr,Ct[Lt++]=lr,Ct[Lt++]=rl,rl=e;var r=rr;e=lr;var l=32-On(r)-1;r&=~(1<<l),t+=1;var o=32-On(n)+l;if(30<o){var m=l-l%5;o=(r&(1<<m)-1).toString(32),r>>=m,l-=m,rr=1<<32-On(n)+l|t<<l|r,lr=o+e}else rr=1<<o|t<<l|r,lr=e}function Ic(e){e.return!==null&&(wr(e,1),ad(e,1,0))}function Gc(e){for(;e===Js;)Js=Mi[--Di],Mi[Di]=null,ka=Mi[--Di],Mi[Di]=null;for(;e===rl;)rl=Ct[--Lt],Ct[Lt]=null,lr=Ct[--Lt],Ct[Lt]=null,rr=Ct[--Lt],Ct[Lt]=null}function sd(e,n){Ct[Lt++]=rr,Ct[Lt++]=lr,Ct[Lt++]=rl,rr=n.id,lr=n.overflow,rl=e}var Un=null,en=null,Ue=!1,ll=null,Bt=!1,Vc=Error(a(519));function il(e){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Na(Ot(n,e)),Vc}function od(e){var n=e.stateNode,t=e.type,r=e.memoizedProps;switch(n[pn]=e,n[kn]=r,t){case"dialog":De("cancel",n),De("close",n);break;case"iframe":case"object":case"embed":De("load",n);break;case"video":case"audio":for(t=0;t<Ka.length;t++)De(Ka[t],n);break;case"source":De("error",n);break;case"img":case"image":case"link":De("error",n),De("load",n);break;case"details":De("toggle",n);break;case"input":De("invalid",n),vs(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":De("invalid",n);break;case"textarea":De("invalid",n),P(n,r.value,r.defaultValue,r.children)}t=r.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||r.suppressHydrationWarning===!0||kp(n.textContent,t)?(r.popover!=null&&(De("beforetoggle",n),De("toggle",n)),r.onScroll!=null&&De("scroll",n),r.onScrollEnd!=null&&De("scrollend",n),r.onClick!=null&&(n.onclick=jt),n=!0):n=!1,n||il(e,!0)}function cd(e){for(Un=e.return;Un;)switch(Un.tag){case 5:case 31:case 13:Bt=!1;return;case 27:case 3:Bt=!0;return;default:Un=Un.return}}function Ai(e){if(e!==Un)return!1;if(!Ue)return cd(e),Ue=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||sf(e.type,e.memoizedProps)),t=!t),t&&en&&il(e),cd(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));en=Cp(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));en=Cp(e)}else n===27?(n=en,yl(e.type)?(e=df,df=null,en=e):en=n):en=Un?Ut(e.stateNode.nextSibling):null;return!0}function Wl(){en=Un=null,Ue=!1}function Pc(){var e=ll;return e!==null&&(ct===null?ct=e:ct.push.apply(ct,e),ll=null),e}function Na(e){ll===null?ll=[e]:ll.push(e)}var Yc=k(null),Jl=null,Er=null;function al(e,n,t){ne(Yc,n._currentValue),n._currentValue=t}function Sr(e){e._currentValue=Yc.current,z(Yc)}function Fc(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function $c(e,n,t,r){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var m=l.child;o=o.firstContext;e:for(;o!==null;){var v=o;o=l;for(var S=0;S<n.length;S++)if(v.context===n[S]){o.lanes|=t,v=o.alternate,v!==null&&(v.lanes|=t),Fc(o.return,t,e),r||(m=null);break e}o=v.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(a(341));m.lanes|=t,o=m.alternate,o!==null&&(o.lanes|=t),Fc(m,t,e),m=null}else m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===e){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function Oi(e,n,t,r){e=null;for(var l=n,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(a(387));if(m=m.memoizedProps,m!==null){var v=l.type;Bn(l.pendingProps.value,m.value)||(e!==null?e.push(v):e=[v])}}else if(l===q.current){if(m=l.alternate,m===null)throw Error(a(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Ja):e=[Ja])}l=l.return}e!==null&&$c(n,e,t,r),n.flags|=262144}function eo(e){for(e=e.firstContext;e!==null;){if(!Bn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ei(e){Jl=e,Er=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Hn(e){return ud(Jl,e)}function no(e,n){return Jl===null&&ei(e),ud(e,n)}function ud(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},Er===null){if(e===null)throw Error(a(308));Er=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Er=Er.next=n;return t}var z_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},U_=s.unstable_scheduleCallback,H_=s.unstable_NormalPriority,bn={$$typeof:ae,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qc(){return{controller:new z_,data:new Map,refCount:0}}function Ra(e){e.refCount--,e.refCount===0&&U_(H_,function(){e.controller.abort()})}var Ta=null,Kc=0,Ci=0,Li=null;function I_(e,n){if(Ta===null){var t=Ta=[];Kc=0,Ci=Zu(),Li={status:"pending",value:void 0,then:function(r){t.push(r)}}}return Kc++,n.then(fd,fd),n}function fd(){if(--Kc===0&&Ta!==null){Li!==null&&(Li.status="fulfilled");var e=Ta;Ta=null,Ci=0,Li=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function G_(e,n){var t=[],r={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<t.length;l++)(0,t[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),r}var dd=H.S;H.S=function(e,n){Xm=En(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&I_(e,n),dd!==null&&dd(e,n)};var ni=k(null);function Xc(){var e=ni.current;return e!==null?e:We.pooledCache}function to(e,n){n===null?ne(ni,ni.current):ne(ni,n.pool)}function md(){var e=Xc();return e===null?null:{parent:bn._currentValue,pool:e}}var Bi=Error(a(460)),Qc=Error(a(474)),ro=Error(a(542)),lo={then:function(){}};function pd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hd(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(jt,jt),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gd(e),e;default:if(typeof n.status=="string")n.then(jt,jt);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,gd(e),e}throw ri=n,Bi}}function ti(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(ri=t,Bi):t}}var ri=null;function _d(){if(ri===null)throw Error(a(459));var e=ri;return ri=null,e}function gd(e){if(e===Bi||e===ro)throw Error(a(483))}var zi=null,ja=0;function io(e){var n=ja;return ja+=1,zi===null&&(zi=[]),hd(zi,e,n)}function Ma(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ao(e,n){throw n.$$typeof===R?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function bd(e){function n(M,N){if(e){var A=M.deletions;A===null?(M.deletions=[N],M.flags|=16):A.push(N)}}function t(M,N){if(!e)return null;for(;N!==null;)n(M,N),N=N.sibling;return null}function r(M){for(var N=new Map;M!==null;)M.key!==null?N.set(M.key,M):N.set(M.index,M),M=M.sibling;return N}function l(M,N){return M=xr(M,N),M.index=0,M.sibling=null,M}function o(M,N,A){return M.index=A,e?(A=M.alternate,A!==null?(A=A.index,A<N?(M.flags|=67108866,N):A):(M.flags|=67108866,N)):(M.flags|=1048576,N)}function m(M){return e&&M.alternate===null&&(M.flags|=67108866),M}function v(M,N,A,$){return N===null||N.tag!==6?(N=Uc(A,M.mode,$),N.return=M,N):(N=l(N,A),N.return=M,N)}function S(M,N,A,$){var ge=A.type;return ge===K?Y(M,N,A.props.children,$,A.key):N!==null&&(N.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===ee&&ti(ge)===N.type)?(N=l(N,A.props),Ma(N,A),N.return=M,N):(N=Ws(A.type,A.key,A.props,null,M.mode,$),Ma(N,A),N.return=M,N)}function C(M,N,A,$){return N===null||N.tag!==4||N.stateNode.containerInfo!==A.containerInfo||N.stateNode.implementation!==A.implementation?(N=Hc(A,M.mode,$),N.return=M,N):(N=l(N,A.children||[]),N.return=M,N)}function Y(M,N,A,$,ge){return N===null||N.tag!==7?(N=Zl(A,M.mode,$,ge),N.return=M,N):(N=l(N,A),N.return=M,N)}function X(M,N,A){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=Uc(""+N,M.mode,A),N.return=M,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case D:return A=Ws(N.type,N.key,N.props,null,M.mode,A),Ma(A,N),A.return=M,A;case U:return N=Hc(N,M.mode,A),N.return=M,N;case ee:return N=ti(N),X(M,N,A)}if($e(N)||W(N))return N=Zl(N,M.mode,A,null),N.return=M,N;if(typeof N.then=="function")return X(M,io(N),A);if(N.$$typeof===ae)return X(M,no(M,N),A);ao(M,N)}return null}function L(M,N,A,$){var ge=N!==null?N.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return ge!==null?null:v(M,N,""+A,$);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case D:return A.key===ge?S(M,N,A,$):null;case U:return A.key===ge?C(M,N,A,$):null;case ee:return A=ti(A),L(M,N,A,$)}if($e(A)||W(A))return ge!==null?null:Y(M,N,A,$,null);if(typeof A.then=="function")return L(M,N,io(A),$);if(A.$$typeof===ae)return L(M,N,no(M,A),$);ao(M,A)}return null}function I(M,N,A,$,ge){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return M=M.get(A)||null,v(N,M,""+$,ge);if(typeof $=="object"&&$!==null){switch($.$$typeof){case D:return M=M.get($.key===null?A:$.key)||null,S(N,M,$,ge);case U:return M=M.get($.key===null?A:$.key)||null,C(N,M,$,ge);case ee:return $=ti($),I(M,N,A,$,ge)}if($e($)||W($))return M=M.get(A)||null,Y(N,M,$,ge,null);if(typeof $.then=="function")return I(M,N,A,io($),ge);if($.$$typeof===ae)return I(M,N,A,no(N,$),ge);ao(N,$)}return null}function de(M,N,A,$){for(var ge=null,Ge=null,pe=N,je=N=0,Be=null;pe!==null&&je<A.length;je++){pe.index>je?(Be=pe,pe=null):Be=pe.sibling;var Ve=L(M,pe,A[je],$);if(Ve===null){pe===null&&(pe=Be);break}e&&pe&&Ve.alternate===null&&n(M,pe),N=o(Ve,N,je),Ge===null?ge=Ve:Ge.sibling=Ve,Ge=Ve,pe=Be}if(je===A.length)return t(M,pe),Ue&&wr(M,je),ge;if(pe===null){for(;je<A.length;je++)pe=X(M,A[je],$),pe!==null&&(N=o(pe,N,je),Ge===null?ge=pe:Ge.sibling=pe,Ge=pe);return Ue&&wr(M,je),ge}for(pe=r(pe);je<A.length;je++)Be=I(pe,M,je,A[je],$),Be!==null&&(e&&Be.alternate!==null&&pe.delete(Be.key===null?je:Be.key),N=o(Be,N,je),Ge===null?ge=Be:Ge.sibling=Be,Ge=Be);return e&&pe.forEach(function(Sl){return n(M,Sl)}),Ue&&wr(M,je),ge}function ye(M,N,A,$){if(A==null)throw Error(a(151));for(var ge=null,Ge=null,pe=N,je=N=0,Be=null,Ve=A.next();pe!==null&&!Ve.done;je++,Ve=A.next()){pe.index>je?(Be=pe,pe=null):Be=pe.sibling;var Sl=L(M,pe,Ve.value,$);if(Sl===null){pe===null&&(pe=Be);break}e&&pe&&Sl.alternate===null&&n(M,pe),N=o(Sl,N,je),Ge===null?ge=Sl:Ge.sibling=Sl,Ge=Sl,pe=Be}if(Ve.done)return t(M,pe),Ue&&wr(M,je),ge;if(pe===null){for(;!Ve.done;je++,Ve=A.next())Ve=X(M,Ve.value,$),Ve!==null&&(N=o(Ve,N,je),Ge===null?ge=Ve:Ge.sibling=Ve,Ge=Ve);return Ue&&wr(M,je),ge}for(pe=r(pe);!Ve.done;je++,Ve=A.next())Ve=I(pe,M,je,Ve.value,$),Ve!==null&&(e&&Ve.alternate!==null&&pe.delete(Ve.key===null?je:Ve.key),N=o(Ve,N,je),Ge===null?ge=Ve:Ge.sibling=Ve,Ge=Ve);return e&&pe.forEach(function(Wg){return n(M,Wg)}),Ue&&wr(M,je),ge}function Ze(M,N,A,$){if(typeof A=="object"&&A!==null&&A.type===K&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case D:e:{for(var ge=A.key;N!==null;){if(N.key===ge){if(ge=A.type,ge===K){if(N.tag===7){t(M,N.sibling),$=l(N,A.props.children),$.return=M,M=$;break e}}else if(N.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===ee&&ti(ge)===N.type){t(M,N.sibling),$=l(N,A.props),Ma($,A),$.return=M,M=$;break e}t(M,N);break}else n(M,N);N=N.sibling}A.type===K?($=Zl(A.props.children,M.mode,$,A.key),$.return=M,M=$):($=Ws(A.type,A.key,A.props,null,M.mode,$),Ma($,A),$.return=M,M=$)}return m(M);case U:e:{for(ge=A.key;N!==null;){if(N.key===ge)if(N.tag===4&&N.stateNode.containerInfo===A.containerInfo&&N.stateNode.implementation===A.implementation){t(M,N.sibling),$=l(N,A.children||[]),$.return=M,M=$;break e}else{t(M,N);break}else n(M,N);N=N.sibling}$=Hc(A,M.mode,$),$.return=M,M=$}return m(M);case ee:return A=ti(A),Ze(M,N,A,$)}if($e(A))return de(M,N,A,$);if(W(A)){if(ge=W(A),typeof ge!="function")throw Error(a(150));return A=ge.call(A),ye(M,N,A,$)}if(typeof A.then=="function")return Ze(M,N,io(A),$);if(A.$$typeof===ae)return Ze(M,N,no(M,A),$);ao(M,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,N!==null&&N.tag===6?(t(M,N.sibling),$=l(N,A),$.return=M,M=$):(t(M,N),$=Uc(A,M.mode,$),$.return=M,M=$),m(M)):t(M,N)}return function(M,N,A,$){try{ja=0;var ge=Ze(M,N,A,$);return zi=null,ge}catch(pe){if(pe===Bi||pe===ro)throw pe;var Ge=_t(29,pe,null,M.mode);return Ge.lanes=$,Ge.return=M,Ge}finally{}}}var li=bd(!0),yd=bd(!1),sl=!1;function Zc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ol(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function cl(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ye&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Zs(e),td(e,null,t),n}return Qs(e,r,n,t),Zs(e)}function Da(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,pi(e,t)}}function Jc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var m={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};o===null?l=o=m:o=o.next=m,t=t.next}while(t!==null);o===null?l=o=n:o=o.next=n}else l=o=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,callbacks:r.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var eu=!1;function Aa(){if(eu){var e=Li;if(e!==null)throw e}}function Oa(e,n,t,r){eu=!1;var l=e.updateQueue;sl=!1;var o=l.firstBaseUpdate,m=l.lastBaseUpdate,v=l.shared.pending;if(v!==null){l.shared.pending=null;var S=v,C=S.next;S.next=null,m===null?o=C:m.next=C,m=S;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,v=Y.lastBaseUpdate,v!==m&&(v===null?Y.firstBaseUpdate=C:v.next=C,Y.lastBaseUpdate=S))}if(o!==null){var X=l.baseState;m=0,Y=C=S=null,v=o;do{var L=v.lane&-536870913,I=L!==v.lane;if(I?(Le&L)===L:(r&L)===L){L!==0&&L===Ci&&(eu=!0),Y!==null&&(Y=Y.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var de=e,ye=v;L=n;var Ze=t;switch(ye.tag){case 1:if(de=ye.payload,typeof de=="function"){X=de.call(Ze,X,L);break e}X=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=ye.payload,L=typeof de=="function"?de.call(Ze,X,L):de,L==null)break e;X=E({},X,L);break e;case 2:sl=!0}}L=v.callback,L!==null&&(e.flags|=64,I&&(e.flags|=8192),I=l.callbacks,I===null?l.callbacks=[L]:I.push(L))}else I={lane:L,tag:v.tag,payload:v.payload,callback:v.callback,next:null},Y===null?(C=Y=I,S=X):Y=Y.next=I,m|=L;if(v=v.next,v===null){if(v=l.shared.pending,v===null)break;I=v,v=I.next,I.next=null,l.lastBaseUpdate=I,l.shared.pending=null}}while(!0);Y===null&&(S=X),l.baseState=S,l.firstBaseUpdate=C,l.lastBaseUpdate=Y,o===null&&(l.shared.lanes=0),pl|=m,e.lanes=m,e.memoizedState=X}}function vd(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function xd(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)vd(t[e],n)}var Ui=k(null),so=k(0);function wd(e,n){e=Or,ne(so,e),ne(Ui,n),Or=e|n.baseLanes}function nu(){ne(so,Or),ne(Ui,Ui.current)}function tu(){Or=so.current,z(Ui),z(so)}var gt=k(null),zt=null;function ul(e){var n=e.alternate;ne(hn,hn.current&1),ne(gt,e),zt===null&&(n===null||Ui.current!==null||n.memoizedState!==null)&&(zt=e)}function ru(e){ne(hn,hn.current),ne(gt,e),zt===null&&(zt=e)}function Ed(e){e.tag===22?(ne(hn,hn.current),ne(gt,e),zt===null&&(zt=e)):fl()}function fl(){ne(hn,hn.current),ne(gt,gt.current)}function bt(e){z(gt),zt===e&&(zt=null),z(hn)}var hn=k(0);function oo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||uf(t)||ff(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var kr=0,Te=null,Xe=null,yn=null,co=!1,Hi=!1,ii=!1,uo=0,Ca=0,Ii=null,V_=0;function dn(){throw Error(a(321))}function lu(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Bn(e[t],n[t]))return!1;return!0}function iu(e,n,t,r,l,o){return kr=o,Te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,H.H=e===null||e.memoizedState===null?am:vu,ii=!1,o=t(r,l),ii=!1,Hi&&(o=kd(n,t,r,l)),Sd(e),o}function Sd(e){H.H=za;var n=Xe!==null&&Xe.next!==null;if(kr=0,yn=Xe=Te=null,co=!1,Ca=0,Ii=null,n)throw Error(a(300));e===null||vn||(e=e.dependencies,e!==null&&eo(e)&&(vn=!0))}function kd(e,n,t,r){Te=e;var l=0;do{if(Hi&&(Ii=null),Ca=0,Hi=!1,25<=l)throw Error(a(301));if(l+=1,yn=Xe=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}H.H=sm,o=n(t,r)}while(Hi);return o}function P_(){var e=H.H,n=e.useState()[0];return n=typeof n.then=="function"?La(n):n,e=e.useState()[0],(Xe!==null?Xe.memoizedState:null)!==e&&(Te.flags|=1024),n}function au(){var e=uo!==0;return uo=0,e}function su(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function ou(e){if(co){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}co=!1}kr=0,yn=Xe=Te=null,Hi=!1,Ca=uo=0,Ii=null}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?Te.memoizedState=yn=e:yn=yn.next=e,yn}function _n(){if(Xe===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var n=yn===null?Te.memoizedState:yn.next;if(n!==null)yn=n,Xe=e;else{if(e===null)throw Te.alternate===null?Error(a(467)):Error(a(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},yn===null?Te.memoizedState=yn=e:yn=yn.next=e}return yn}function fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function La(e){var n=Ca;return Ca+=1,Ii===null&&(Ii=[]),e=hd(Ii,e,n),n=Te,(yn===null?n.memoizedState:yn.next)===null&&(n=n.alternate,H.H=n===null||n.memoizedState===null?am:vu),e}function mo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return La(e);if(e.$$typeof===ae)return Hn(e)}throw Error(a(438,String(e)))}function cu(e){var n=null,t=Te.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var r=Te.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=fo(),Te.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),r=0;r<e;r++)t[r]=ve;return n.index++,t}function Nr(e,n){return typeof n=="function"?n(e):n}function po(e){var n=_n();return uu(n,Xe,e)}function uu(e,n,t){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var l=e.baseQueue,o=r.pending;if(o!==null){if(l!==null){var m=l.next;l.next=o.next,o.next=m}n.baseQueue=l=o,r.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{n=l.next;var v=m=null,S=null,C=n,Y=!1;do{var X=C.lane&-536870913;if(X!==C.lane?(Le&X)===X:(kr&X)===X){var L=C.revertLane;if(L===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),X===Ci&&(Y=!0);else if((kr&L)===L){C=C.next,L===Ci&&(Y=!0);continue}else X={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},S===null?(v=S=X,m=o):S=S.next=X,Te.lanes|=L,pl|=L;X=C.action,ii&&t(o,X),o=C.hasEagerState?C.eagerState:t(o,X)}else L={lane:X,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},S===null?(v=S=L,m=o):S=S.next=L,Te.lanes|=X,pl|=X;C=C.next}while(C!==null&&C!==n);if(S===null?m=o:S.next=v,!Bn(o,e.memoizedState)&&(vn=!0,Y&&(t=Li,t!==null)))throw t;e.memoizedState=o,e.baseState=m,e.baseQueue=S,r.lastRenderedState=o}return l===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function fu(e){var n=_n(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,o=n.memoizedState;if(l!==null){t.pending=null;var m=l=l.next;do o=e(o,m.action),m=m.next;while(m!==l);Bn(o,n.memoizedState)||(vn=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Nd(e,n,t){var r=Te,l=_n(),o=Ue;if(o){if(t===void 0)throw Error(a(407));t=t()}else t=n();var m=!Bn((Xe||l).memoizedState,t);if(m&&(l.memoizedState=t,vn=!0),l=l.queue,pu(jd.bind(null,r,l,e),[e]),l.getSnapshot!==n||m||yn!==null&&yn.memoizedState.tag&1){if(r.flags|=2048,Gi(9,{destroy:void 0},Td.bind(null,r,l,t,n),null),We===null)throw Error(a(349));o||(kr&127)!==0||Rd(r,n,t)}return t}function Rd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Te.updateQueue,n===null?(n=fo(),Te.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Td(e,n,t,r){n.value=t,n.getSnapshot=r,Md(n)&&Dd(e)}function jd(e,n,t){return t(function(){Md(n)&&Dd(e)})}function Md(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Bn(e,t)}catch{return!0}}function Dd(e){var n=Ql(e,2);n!==null&&ut(n,e,2)}function du(e){var n=et();if(typeof e=="function"){var t=e;if(e=t(),ii){dt(!0);try{t()}finally{dt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nr,lastRenderedState:e},n}function Ad(e,n,t,r){return e.baseState=t,uu(e,Xe,typeof r=="function"?r:Nr)}function Y_(e,n,t,r,l){if(go(e))throw Error(a(485));if(e=n.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){o.listeners.push(m)}};H.T!==null?t(!0):o.isTransition=!1,r(o),t=n.pending,t===null?(o.next=n.pending=o,Od(n,o)):(o.next=t.next,n.pending=t.next=o)}}function Od(e,n){var t=n.action,r=n.payload,l=e.state;if(n.isTransition){var o=H.T,m={};H.T=m;try{var v=t(l,r),S=H.S;S!==null&&S(m,v),Cd(e,n,v)}catch(C){mu(e,n,C)}finally{o!==null&&m.types!==null&&(o.types=m.types),H.T=o}}else try{o=t(l,r),Cd(e,n,o)}catch(C){mu(e,n,C)}}function Cd(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(r){Ld(e,n,r)},function(r){return mu(e,n,r)}):Ld(e,n,t)}function Ld(e,n,t){n.status="fulfilled",n.value=t,Bd(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,Od(e,t)))}function mu(e,n,t){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=t,Bd(n),n=n.next;while(n!==r)}e.action=null}function Bd(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function zd(e,n){return n}function Ud(e,n){if(Ue){var t=We.formState;if(t!==null){e:{var r=Te;if(Ue){if(en){n:{for(var l=en,o=Bt;l.nodeType!==8;){if(!o){l=null;break n}if(l=Ut(l.nextSibling),l===null){l=null;break n}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){en=Ut(l.nextSibling),r=l.data==="F!";break e}}il(r)}r=!1}r&&(n=t[0])}}return t=et(),t.memoizedState=t.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zd,lastRenderedState:n},t.queue=r,t=rm.bind(null,Te,r),r.dispatch=t,r=du(!1),o=yu.bind(null,Te,!1,r.queue),r=et(),l={state:n,dispatch:null,action:e,pending:null},r.queue=l,t=Y_.bind(null,Te,l,o,t),l.dispatch=t,r.memoizedState=e,[n,t,!1]}function Hd(e){var n=_n();return Id(n,Xe,e)}function Id(e,n,t){if(n=uu(e,n,zd)[0],e=po(Nr)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=La(n)}catch(m){throw m===Bi?ro:m}else r=n;n=_n();var l=n.queue,o=l.dispatch;return t!==n.memoizedState&&(Te.flags|=2048,Gi(9,{destroy:void 0},F_.bind(null,l,t),null)),[r,o,e]}function F_(e,n){e.action=n}function Gd(e){var n=_n(),t=Xe;if(t!==null)return Id(n,t,e);_n(),n=n.memoizedState,t=_n();var r=t.queue.dispatch;return t.memoizedState=e,[n,r,!1]}function Gi(e,n,t,r){return e={tag:e,create:t,deps:r,inst:n,next:null},n=Te.updateQueue,n===null&&(n=fo(),Te.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e),e}function Vd(){return _n().memoizedState}function ho(e,n,t,r){var l=et();Te.flags|=e,l.memoizedState=Gi(1|n,{destroy:void 0},t,r===void 0?null:r)}function _o(e,n,t,r){var l=_n();r=r===void 0?null:r;var o=l.memoizedState.inst;Xe!==null&&r!==null&&lu(r,Xe.memoizedState.deps)?l.memoizedState=Gi(n,o,t,r):(Te.flags|=e,l.memoizedState=Gi(1|n,o,t,r))}function Pd(e,n){ho(8390656,8,e,n)}function pu(e,n){_o(2048,8,e,n)}function $_(e){Te.flags|=4;var n=Te.updateQueue;if(n===null)n=fo(),Te.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function Yd(e){var n=_n().memoizedState;return $_({ref:n,nextImpl:e}),function(){if((Ye&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function Fd(e,n){return _o(4,2,e,n)}function $d(e,n){return _o(4,4,e,n)}function qd(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Kd(e,n,t){t=t!=null?t.concat([e]):null,_o(4,4,qd.bind(null,n,e),t)}function hu(){}function Xd(e,n){var t=_n();n=n===void 0?null:n;var r=t.memoizedState;return n!==null&&lu(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Qd(e,n){var t=_n();n=n===void 0?null:n;var r=t.memoizedState;if(n!==null&&lu(n,r[1]))return r[0];if(r=e(),ii){dt(!0);try{e()}finally{dt(!1)}}return t.memoizedState=[r,n],r}function _u(e,n,t){return t===void 0||(kr&1073741824)!==0&&(Le&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=Zm(),Te.lanes|=e,pl|=e,t)}function Zd(e,n,t,r){return Bn(t,n)?t:Ui.current!==null?(e=_u(e,t,r),Bn(e,n)||(vn=!0),e):(kr&42)===0||(kr&1073741824)!==0&&(Le&261930)===0?(vn=!0,e.memoizedState=t):(e=Zm(),Te.lanes|=e,pl|=e,n)}function Wd(e,n,t,r,l){var o=re.p;re.p=o!==0&&8>o?o:8;var m=H.T,v={};H.T=v,yu(e,!1,n,t);try{var S=l(),C=H.S;if(C!==null&&C(v,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var Y=G_(S,r);Ba(e,n,Y,xt(e))}else Ba(e,n,r,xt(e))}catch(X){Ba(e,n,{then:function(){},status:"rejected",reason:X},xt())}finally{re.p=o,m!==null&&v.types!==null&&(m.types=v.types),H.T=m}}function q_(){}function gu(e,n,t,r){if(e.tag!==5)throw Error(a(476));var l=Jd(e).queue;Wd(e,l,n,ue,t===null?q_:function(){return em(e),t(r)})}function Jd(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nr,lastRenderedState:ue},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nr,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function em(e){var n=Jd(e);n.next===null&&(n=e.alternate.memoizedState),Ba(e,n.next.queue,{},xt())}function bu(){return Hn(Ja)}function nm(){return _n().memoizedState}function tm(){return _n().memoizedState}function K_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=xt();e=ol(t);var r=cl(n,e,t);r!==null&&(ut(r,n,t),Da(r,n,t)),n={cache:qc()},e.payload=n;return}n=n.return}}function X_(e,n,t){var r=xt();t={lane:r,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},go(e)?lm(n,t):(t=Bc(e,n,t,r),t!==null&&(ut(t,e,r),im(t,n,r)))}function rm(e,n,t){var r=xt();Ba(e,n,t,r)}function Ba(e,n,t,r){var l={lane:r,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(go(e))lm(n,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var m=n.lastRenderedState,v=o(m,t);if(l.hasEagerState=!0,l.eagerState=v,Bn(v,m))return Qs(e,n,l,0),We===null&&Xs(),!1}catch{}finally{}if(t=Bc(e,n,l,r),t!==null)return ut(t,e,r),im(t,n,r),!0}return!1}function yu(e,n,t,r){if(r={lane:2,revertLane:Zu(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},go(e)){if(n)throw Error(a(479))}else n=Bc(e,t,r,2),n!==null&&ut(n,e,2)}function go(e){var n=e.alternate;return e===Te||n!==null&&n===Te}function lm(e,n){Hi=co=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function im(e,n,t){if((t&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,pi(e,t)}}var za={readContext:Hn,use:mo,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useLayoutEffect:dn,useInsertionEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useSyncExternalStore:dn,useId:dn,useHostTransitionStatus:dn,useFormState:dn,useActionState:dn,useOptimistic:dn,useMemoCache:dn,useCacheRefresh:dn};za.useEffectEvent=dn;var am={readContext:Hn,use:mo,useCallback:function(e,n){return et().memoizedState=[e,n===void 0?null:n],e},useContext:Hn,useEffect:Pd,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,ho(4194308,4,qd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ho(4194308,4,e,n)},useInsertionEffect:function(e,n){ho(4,2,e,n)},useMemo:function(e,n){var t=et();n=n===void 0?null:n;var r=e();if(ii){dt(!0);try{e()}finally{dt(!1)}}return t.memoizedState=[r,n],r},useReducer:function(e,n,t){var r=et();if(t!==void 0){var l=t(n);if(ii){dt(!0);try{t(n)}finally{dt(!1)}}}else l=n;return r.memoizedState=r.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},r.queue=e,e=e.dispatch=X_.bind(null,Te,e),[r.memoizedState,e]},useRef:function(e){var n=et();return e={current:e},n.memoizedState=e},useState:function(e){e=du(e);var n=e.queue,t=rm.bind(null,Te,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:hu,useDeferredValue:function(e,n){var t=et();return _u(t,e,n)},useTransition:function(){var e=du(!1);return e=Wd.bind(null,Te,e.queue,!0,!1),et().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var r=Te,l=et();if(Ue){if(t===void 0)throw Error(a(407));t=t()}else{if(t=n(),We===null)throw Error(a(349));(Le&127)!==0||Rd(r,n,t)}l.memoizedState=t;var o={value:t,getSnapshot:n};return l.queue=o,Pd(jd.bind(null,r,o,e),[e]),r.flags|=2048,Gi(9,{destroy:void 0},Td.bind(null,r,o,t,n),null),t},useId:function(){var e=et(),n=We.identifierPrefix;if(Ue){var t=lr,r=rr;t=(r&~(1<<32-On(r)-1)).toString(32)+t,n="_"+n+"R_"+t,t=uo++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=V_++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:bu,useFormState:Ud,useActionState:Ud,useOptimistic:function(e){var n=et();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=yu.bind(null,Te,!0,t),t.dispatch=n,[e,n]},useMemoCache:cu,useCacheRefresh:function(){return et().memoizedState=K_.bind(null,Te)},useEffectEvent:function(e){var n=et(),t={impl:e};return n.memoizedState=t,function(){if((Ye&2)!==0)throw Error(a(440));return t.impl.apply(void 0,arguments)}}},vu={readContext:Hn,use:mo,useCallback:Xd,useContext:Hn,useEffect:pu,useImperativeHandle:Kd,useInsertionEffect:Fd,useLayoutEffect:$d,useMemo:Qd,useReducer:po,useRef:Vd,useState:function(){return po(Nr)},useDebugValue:hu,useDeferredValue:function(e,n){var t=_n();return Zd(t,Xe.memoizedState,e,n)},useTransition:function(){var e=po(Nr)[0],n=_n().memoizedState;return[typeof e=="boolean"?e:La(e),n]},useSyncExternalStore:Nd,useId:nm,useHostTransitionStatus:bu,useFormState:Hd,useActionState:Hd,useOptimistic:function(e,n){var t=_n();return Ad(t,Xe,e,n)},useMemoCache:cu,useCacheRefresh:tm};vu.useEffectEvent=Yd;var sm={readContext:Hn,use:mo,useCallback:Xd,useContext:Hn,useEffect:pu,useImperativeHandle:Kd,useInsertionEffect:Fd,useLayoutEffect:$d,useMemo:Qd,useReducer:fu,useRef:Vd,useState:function(){return fu(Nr)},useDebugValue:hu,useDeferredValue:function(e,n){var t=_n();return Xe===null?_u(t,e,n):Zd(t,Xe.memoizedState,e,n)},useTransition:function(){var e=fu(Nr)[0],n=_n().memoizedState;return[typeof e=="boolean"?e:La(e),n]},useSyncExternalStore:Nd,useId:nm,useHostTransitionStatus:bu,useFormState:Gd,useActionState:Gd,useOptimistic:function(e,n){var t=_n();return Xe!==null?Ad(t,Xe,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:cu,useCacheRefresh:tm};sm.useEffectEvent=Yd;function xu(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:E({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var wu={enqueueSetState:function(e,n,t){e=e._reactInternals;var r=xt(),l=ol(r);l.payload=n,t!=null&&(l.callback=t),n=cl(e,l,r),n!==null&&(ut(n,e,r),Da(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=xt(),l=ol(r);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=cl(e,l,r),n!==null&&(ut(n,e,r),Da(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=xt(),r=ol(t);r.tag=2,n!=null&&(r.callback=n),n=cl(e,r,t),n!==null&&(ut(n,e,t),Da(n,e,t))}};function om(e,n,t,r,l,o,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,m):n.prototype&&n.prototype.isPureReactComponent?!el(t,r)||!el(l,o):!0}function cm(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&wu.enqueueReplaceState(n,n.state,null)}function ai(e,n){var t=n;if("ref"in n){t={};for(var r in n)r!=="ref"&&(t[r]=n[r])}if(e=e.defaultProps){t===n&&(t=E({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}function um(e){Xl(e)}function fm(e){console.error(e)}function dm(e){Xl(e)}function bo(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function mm(e,n,t){try{var r=e.onCaughtError;r(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Eu(e,n,t){return t=ol(t),t.tag=3,t.payload={element:null},t.callback=function(){bo(e,n)},t}function pm(e){return e=ol(e),e.tag=3,e}function hm(e,n,t,r){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var o=r.value;e.payload=function(){return l(o)},e.callback=function(){mm(n,t,r)}}var m=t.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){mm(n,t,r),typeof l!="function"&&(hl===null?hl=new Set([this]):hl.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})})}function Q_(e,n,t,r,l){if(t.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=t.alternate,n!==null&&Oi(n,t,l,!0),t=gt.current,t!==null){switch(t.tag){case 31:case 13:return zt===null?Mo():t.alternate===null&&mn===0&&(mn=3),t.flags&=-257,t.flags|=65536,t.lanes=l,r===lo?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([r]):n.add(r),Ku(e,r,l)),!1;case 22:return t.flags|=65536,r===lo?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([r]):t.add(r)),Ku(e,r,l)),!1}throw Error(a(435,t.tag))}return Ku(e,r,l),Mo(),!1}if(Ue)return n=gt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==Vc&&(e=Error(a(422),{cause:r}),Na(Ot(e,t)))):(r!==Vc&&(n=Error(a(423),{cause:r}),Na(Ot(n,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,r=Ot(r,t),l=Eu(e.stateNode,r,l),Jc(e,l),mn!==4&&(mn=2)),!1;var o=Error(a(520),{cause:r});if(o=Ot(o,t),Fa===null?Fa=[o]:Fa.push(o),mn!==4&&(mn=2),n===null)return!0;r=Ot(r,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=Eu(t.stateNode,r,e),Jc(t,e),!1;case 1:if(n=t.type,o=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(hl===null||!hl.has(o))))return t.flags|=65536,l&=-l,t.lanes|=l,l=pm(l),hm(l,e,t,r),Jc(t,l),!1}t=t.return}while(t!==null);return!1}var Su=Error(a(461)),vn=!1;function In(e,n,t,r){n.child=e===null?yd(n,null,t,r):li(n,e.child,t,r)}function _m(e,n,t,r,l){t=t.render;var o=n.ref;if("ref"in r){var m={};for(var v in r)v!=="ref"&&(m[v]=r[v])}else m=r;return ei(n),r=iu(e,n,t,m,o,l),v=au(),e!==null&&!vn?(su(e,n,l),Rr(e,n,l)):(Ue&&v&&Ic(n),n.flags|=1,In(e,n,r,l),n.child)}function gm(e,n,t,r,l){if(e===null){var o=t.type;return typeof o=="function"&&!zc(o)&&o.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=o,bm(e,n,o,r,l)):(e=Ws(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!Au(e,l)){var m=o.memoizedProps;if(t=t.compare,t=t!==null?t:el,t(m,r)&&e.ref===n.ref)return Rr(e,n,l)}return n.flags|=1,e=xr(o,r),e.ref=n.ref,e.return=n,n.child=e}function bm(e,n,t,r,l){if(e!==null){var o=e.memoizedProps;if(el(o,r)&&e.ref===n.ref)if(vn=!1,n.pendingProps=r=o,Au(e,l))(e.flags&131072)!==0&&(vn=!0);else return n.lanes=e.lanes,Rr(e,n,l)}return ku(e,n,t,r,l)}function ym(e,n,t,r){var l=r.children,o=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(o=o!==null?o.baseLanes|t:t,e!==null){for(r=n.child=e.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~o}else r=0,n.child=null;return vm(e,n,o,t,r)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&to(n,o!==null?o.cachePool:null),o!==null?wd(n,o):nu(),Ed(n);else return r=n.lanes=536870912,vm(e,n,o!==null?o.baseLanes|t:t,t,r)}else o!==null?(to(n,o.cachePool),wd(n,o),fl(),n.memoizedState=null):(e!==null&&to(n,null),nu(),fl());return In(e,n,l,t),n.child}function Ua(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function vm(e,n,t,r,l){var o=Xc();return o=o===null?null:{parent:bn._currentValue,pool:o},n.memoizedState={baseLanes:t,cachePool:o},e!==null&&to(n,null),nu(),Ed(n),e!==null&&Oi(e,n,r,!0),n.childLanes=l,null}function yo(e,n){return n=xo({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function xm(e,n,t){return li(n,e.child,null,t),e=yo(n,n.pendingProps),e.flags|=2,bt(n),n.memoizedState=null,e}function Z_(e,n,t){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ue){if(r.mode==="hidden")return e=yo(n,r),n.lanes=536870912,Ua(null,e);if(ru(n),(e=en)?(e=Op(e,Bt),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:rl!==null?{id:rr,overflow:lr}:null,retryLane:536870912,hydrationErrors:null},t=ld(e),t.return=n,n.child=t,Un=n,en=null)):e=null,e===null)throw il(n);return n.lanes=536870912,null}return yo(n,r)}var o=e.memoizedState;if(o!==null){var m=o.dehydrated;if(ru(n),l)if(n.flags&256)n.flags&=-257,n=xm(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(a(558));else if(vn||Oi(e,n,t,!1),l=(t&e.childLanes)!==0,vn||l){if(r=We,r!==null&&(m=bs(r,t),m!==0&&m!==o.retryLane))throw o.retryLane=m,Ql(e,m),ut(r,e,m),Su;Mo(),n=xm(e,n,t)}else e=o.treeContext,en=Ut(m.nextSibling),Un=n,Ue=!0,ll=null,Bt=!1,e!==null&&sd(n,e),n=yo(n,r),n.flags|=4096;return n}return e=xr(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function vo(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(a(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function ku(e,n,t,r,l){return ei(n),t=iu(e,n,t,r,void 0,l),r=au(),e!==null&&!vn?(su(e,n,l),Rr(e,n,l)):(Ue&&r&&Ic(n),n.flags|=1,In(e,n,t,l),n.child)}function wm(e,n,t,r,l,o){return ei(n),n.updateQueue=null,t=kd(n,r,t,l),Sd(e),r=au(),e!==null&&!vn?(su(e,n,o),Rr(e,n,o)):(Ue&&r&&Ic(n),n.flags|=1,In(e,n,t,o),n.child)}function Em(e,n,t,r,l){if(ei(n),n.stateNode===null){var o=ji,m=t.contextType;typeof m=="object"&&m!==null&&(o=Hn(m)),o=new t(r,o),n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=wu,n.stateNode=o,o._reactInternals=n,o=n.stateNode,o.props=r,o.state=n.memoizedState,o.refs={},Zc(n),m=t.contextType,o.context=typeof m=="object"&&m!==null?Hn(m):ji,o.state=n.memoizedState,m=t.getDerivedStateFromProps,typeof m=="function"&&(xu(n,t,m,r),o.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(m=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),m!==o.state&&wu.enqueueReplaceState(o,o.state,null),Oa(n,r,o,l),Aa(),o.state=n.memoizedState),typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){o=n.stateNode;var v=n.memoizedProps,S=ai(t,v);o.props=S;var C=o.context,Y=t.contextType;m=ji,typeof Y=="object"&&Y!==null&&(m=Hn(Y));var X=t.getDerivedStateFromProps;Y=typeof X=="function"||typeof o.getSnapshotBeforeUpdate=="function",v=n.pendingProps!==v,Y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(v||C!==m)&&cm(n,o,r,m),sl=!1;var L=n.memoizedState;o.state=L,Oa(n,r,o,l),Aa(),C=n.memoizedState,v||L!==C||sl?(typeof X=="function"&&(xu(n,t,X,r),C=n.memoizedState),(S=sl||om(n,t,S,r,L,C,m))?(Y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=C),o.props=r,o.state=C,o.context=m,r=S):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,Wc(e,n),m=n.memoizedProps,Y=ai(t,m),o.props=Y,X=n.pendingProps,L=o.context,C=t.contextType,S=ji,typeof C=="object"&&C!==null&&(S=Hn(C)),v=t.getDerivedStateFromProps,(C=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(m!==X||L!==S)&&cm(n,o,r,S),sl=!1,L=n.memoizedState,o.state=L,Oa(n,r,o,l),Aa();var I=n.memoizedState;m!==X||L!==I||sl||e!==null&&e.dependencies!==null&&eo(e.dependencies)?(typeof v=="function"&&(xu(n,t,v,r),I=n.memoizedState),(Y=sl||om(n,t,Y,r,L,I,S)||e!==null&&e.dependencies!==null&&eo(e.dependencies))?(C||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,I,S),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,I,S)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=I),o.props=r,o.state=I,o.context=S,r=Y):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&L===e.memoizedState||(n.flags|=1024),r=!1)}return o=r,vo(e,n),r=(n.flags&128)!==0,o||r?(o=n.stateNode,t=r&&typeof t.getDerivedStateFromError!="function"?null:o.render(),n.flags|=1,e!==null&&r?(n.child=li(n,e.child,null,l),n.child=li(n,null,t,l)):In(e,n,t,l),n.memoizedState=o.state,e=n.child):e=Rr(e,n,l),e}function Sm(e,n,t,r){return Wl(),n.flags|=256,In(e,n,t,r),n.child}var Nu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ru(e){return{baseLanes:e,cachePool:md()}}function Tu(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=vt),e}function km(e,n,t){var r=n.pendingProps,l=!1,o=(n.flags&128)!==0,m;if((m=o)||(m=e!==null&&e.memoizedState===null?!1:(hn.current&2)!==0),m&&(l=!0,n.flags&=-129),m=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ue){if(l?ul(n):fl(),(e=en)?(e=Op(e,Bt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:rl!==null?{id:rr,overflow:lr}:null,retryLane:536870912,hydrationErrors:null},t=ld(e),t.return=n,n.child=t,Un=n,en=null)):e=null,e===null)throw il(n);return ff(e)?n.lanes=32:n.lanes=536870912,null}var v=r.children;return r=r.fallback,l?(fl(),l=n.mode,v=xo({mode:"hidden",children:v},l),r=Zl(r,l,t,null),v.return=n,r.return=n,v.sibling=r,n.child=v,r=n.child,r.memoizedState=Ru(t),r.childLanes=Tu(e,m,t),n.memoizedState=Nu,Ua(null,r)):(ul(n),ju(n,v))}var S=e.memoizedState;if(S!==null&&(v=S.dehydrated,v!==null)){if(o)n.flags&256?(ul(n),n.flags&=-257,n=Mu(e,n,t)):n.memoizedState!==null?(fl(),n.child=e.child,n.flags|=128,n=null):(fl(),v=r.fallback,l=n.mode,r=xo({mode:"visible",children:r.children},l),v=Zl(v,l,t,null),v.flags|=2,r.return=n,v.return=n,r.sibling=v,n.child=r,li(n,e.child,null,t),r=n.child,r.memoizedState=Ru(t),r.childLanes=Tu(e,m,t),n.memoizedState=Nu,n=Ua(null,r));else if(ul(n),ff(v)){if(m=v.nextSibling&&v.nextSibling.dataset,m)var C=m.dgst;m=C,r=Error(a(419)),r.stack="",r.digest=m,Na({value:r,source:null,stack:null}),n=Mu(e,n,t)}else if(vn||Oi(e,n,t,!1),m=(t&e.childLanes)!==0,vn||m){if(m=We,m!==null&&(r=bs(m,t),r!==0&&r!==S.retryLane))throw S.retryLane=r,Ql(e,r),ut(m,e,r),Su;uf(v)||Mo(),n=Mu(e,n,t)}else uf(v)?(n.flags|=192,n.child=e.child,n=null):(e=S.treeContext,en=Ut(v.nextSibling),Un=n,Ue=!0,ll=null,Bt=!1,e!==null&&sd(n,e),n=ju(n,r.children),n.flags|=4096);return n}return l?(fl(),v=r.fallback,l=n.mode,S=e.child,C=S.sibling,r=xr(S,{mode:"hidden",children:r.children}),r.subtreeFlags=S.subtreeFlags&65011712,C!==null?v=xr(C,v):(v=Zl(v,l,t,null),v.flags|=2),v.return=n,r.return=n,r.sibling=v,n.child=r,Ua(null,r),r=n.child,v=e.child.memoizedState,v===null?v=Ru(t):(l=v.cachePool,l!==null?(S=bn._currentValue,l=l.parent!==S?{parent:S,pool:S}:l):l=md(),v={baseLanes:v.baseLanes|t,cachePool:l}),r.memoizedState=v,r.childLanes=Tu(e,m,t),n.memoizedState=Nu,Ua(e.child,r)):(ul(n),t=e.child,e=t.sibling,t=xr(t,{mode:"visible",children:r.children}),t.return=n,t.sibling=null,e!==null&&(m=n.deletions,m===null?(n.deletions=[e],n.flags|=16):m.push(e)),n.child=t,n.memoizedState=null,t)}function ju(e,n){return n=xo({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function xo(e,n){return e=_t(22,e,null,n),e.lanes=0,e}function Mu(e,n,t){return li(n,e.child,null,t),e=ju(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Nm(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Fc(e.return,n,t)}function Du(e,n,t,r,l,o){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l,treeForkCount:o}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=r,m.tail=t,m.tailMode=l,m.treeForkCount=o)}function Rm(e,n,t){var r=n.pendingProps,l=r.revealOrder,o=r.tail;r=r.children;var m=hn.current,v=(m&2)!==0;if(v?(m=m&1|2,n.flags|=128):m&=1,ne(hn,m),In(e,n,r,t),r=Ue?ka:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nm(e,t,n);else if(e.tag===19)Nm(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&oo(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Du(n,!1,l,t,o,r);break;case"backwards":case"unstable_legacy-backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&oo(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Du(n,!0,t,null,o,r);break;case"together":Du(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Rr(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),pl|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(Oi(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,t=xr(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=xr(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Au(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&eo(e)))}function W_(e,n,t){switch(n.tag){case 3:He(n,n.stateNode.containerInfo),al(n,bn,e.memoizedState.cache),Wl();break;case 27:case 5:Qn(n);break;case 4:He(n,n.stateNode.containerInfo);break;case 10:al(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ru(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(ul(n),n.flags|=128,null):(t&n.child.childLanes)!==0?km(e,n,t):(ul(n),e=Rr(e,n,t),e!==null?e.sibling:null);ul(n);break;case 19:var l=(e.flags&128)!==0;if(r=(t&n.childLanes)!==0,r||(Oi(e,n,t,!1),r=(t&n.childLanes)!==0),l){if(r)return Rm(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ne(hn,hn.current),r)break;return null;case 22:return n.lanes=0,ym(e,n,t,n.pendingProps);case 24:al(n,bn,e.memoizedState.cache)}return Rr(e,n,t)}function Tm(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)vn=!0;else{if(!Au(e,t)&&(n.flags&128)===0)return vn=!1,W_(e,n,t);vn=(e.flags&131072)!==0}else vn=!1,Ue&&(n.flags&1048576)!==0&&ad(n,ka,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=ti(n.elementType),n.type=e,typeof e=="function")zc(e)?(r=ai(e,r),n.tag=1,n=Em(null,n,e,r,t)):(n.tag=0,n=ku(null,n,e,r,t));else{if(e!=null){var l=e.$$typeof;if(l===se){n.tag=11,n=_m(null,n,e,r,t);break e}else if(l===te){n.tag=14,n=gm(null,n,e,r,t);break e}}throw n=Ae(e)||e,Error(a(306,n,""))}}return n;case 0:return ku(e,n,n.type,n.pendingProps,t);case 1:return r=n.type,l=ai(r,n.pendingProps),Em(e,n,r,l,t);case 3:e:{if(He(n,n.stateNode.containerInfo),e===null)throw Error(a(387));r=n.pendingProps;var o=n.memoizedState;l=o.element,Wc(e,n),Oa(n,r,null,t);var m=n.memoizedState;if(r=m.cache,al(n,bn,r),r!==o.cache&&$c(n,[bn],t,!0),Aa(),r=m.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:m.cache},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){n=Sm(e,n,r,t);break e}else if(r!==l){l=Ot(Error(a(424)),n),Na(l),n=Sm(e,n,r,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(en=Ut(e.firstChild),Un=n,Ue=!0,ll=null,Bt=!0,t=yd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Wl(),r===l){n=Rr(e,n,t);break e}In(e,n,r,t)}n=n.child}return n;case 26:return vo(e,n),e===null?(t=Hp(n.type,null,n.pendingProps,null))?n.memoizedState=t:Ue||(t=n.type,e=n.pendingProps,r=zo(J.current).createElement(t),r[pn]=n,r[kn]=e,Gn(r,t,e),rn(r),n.stateNode=r):n.memoizedState=Hp(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Qn(n),e===null&&Ue&&(r=n.stateNode=Bp(n.type,n.pendingProps,J.current),Un=n,Bt=!0,l=en,yl(n.type)?(df=l,en=Ut(r.firstChild)):en=l),In(e,n,n.pendingProps.children,t),vo(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ue&&((l=r=en)&&(r=Tg(r,n.type,n.pendingProps,Bt),r!==null?(n.stateNode=r,Un=n,en=Ut(r.firstChild),Bt=!1,l=!0):l=!1),l||il(n)),Qn(n),l=n.type,o=n.pendingProps,m=e!==null?e.memoizedProps:null,r=o.children,sf(l,o)?r=null:m!==null&&sf(l,m)&&(n.flags|=32),n.memoizedState!==null&&(l=iu(e,n,P_,null,null,t),Ja._currentValue=l),vo(e,n),In(e,n,r,t),n.child;case 6:return e===null&&Ue&&((e=t=en)&&(t=jg(t,n.pendingProps,Bt),t!==null?(n.stateNode=t,Un=n,en=null,e=!0):e=!1),e||il(n)),null;case 13:return km(e,n,t);case 4:return He(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=li(n,null,r,t):In(e,n,r,t),n.child;case 11:return _m(e,n,n.type,n.pendingProps,t);case 7:return In(e,n,n.pendingProps,t),n.child;case 8:return In(e,n,n.pendingProps.children,t),n.child;case 12:return In(e,n,n.pendingProps.children,t),n.child;case 10:return r=n.pendingProps,al(n,n.type,r.value),In(e,n,r.children,t),n.child;case 9:return l=n.type._context,r=n.pendingProps.children,ei(n),l=Hn(l),r=r(l),n.flags|=1,In(e,n,r,t),n.child;case 14:return gm(e,n,n.type,n.pendingProps,t);case 15:return bm(e,n,n.type,n.pendingProps,t);case 19:return Rm(e,n,t);case 31:return Z_(e,n,t);case 22:return ym(e,n,t,n.pendingProps);case 24:return ei(n),r=Hn(bn),e===null?(l=Xc(),l===null&&(l=We,o=qc(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=t),l=o),n.memoizedState={parent:r,cache:l},Zc(n),al(n,bn,l)):((e.lanes&t)!==0&&(Wc(e,n),Oa(n,null,null,t),Aa()),l=e.memoizedState,o=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),al(n,bn,r)):(r=o.cache,al(n,bn,r),r!==l.cache&&$c(n,[bn],t,!0))),In(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function Tr(e){e.flags|=4}function Ou(e,n,t,r,l){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(np())e.flags|=8192;else throw ri=lo,Qc}else e.flags&=-16777217}function jm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Yp(n))if(np())e.flags|=8192;else throw ri=lo,Qc}function wo(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ol():536870912,e.lanes|=n,Fi|=n)}function Ha(e,n){if(!Ue)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nn(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&65011712,r|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function J_(e,n,t){var r=n.pendingProps;switch(Gc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(n),null;case 1:return nn(n),null;case 3:return t=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Sr(bn),Oe(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Ai(n)?Tr(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Pc())),nn(n),null;case 26:var l=n.type,o=n.memoizedState;return e===null?(Tr(n),o!==null?(nn(n),jm(n,o)):(nn(n),Ou(n,l,null,r,t))):o?o!==e.memoizedState?(Tr(n),nn(n),jm(n,o)):(nn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Tr(n),nn(n),Ou(n,l,e,r,t)),null;case 27:if(Xt(n),t=J.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Tr(n);else{if(!r){if(n.stateNode===null)throw Error(a(166));return nn(n),null}e=O.current,Ai(n)?od(n):(e=Bp(l,r,t),n.stateNode=e,Tr(n))}return nn(n),null;case 5:if(Xt(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Tr(n);else{if(!r){if(n.stateNode===null)throw Error(a(166));return nn(n),null}if(o=O.current,Ai(n))od(n);else{var m=zo(J.current);switch(o){case 1:o=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:o=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":o=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":o=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":o=m.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof r.is=="string"?m.createElement("select",{is:r.is}):m.createElement("select"),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is=="string"?m.createElement(l,{is:r.is}):m.createElement(l)}}o[pn]=n,o[kn]=r;e:for(m=n.child;m!==null;){if(m.tag===5||m.tag===6)o.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===n)break e;for(;m.sibling===null;){if(m.return===null||m.return===n)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}n.stateNode=o;e:switch(Gn(o,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Tr(n)}}return nn(n),Ou(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Tr(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(a(166));if(e=J.current,Ai(n)){if(e=n.stateNode,t=n.memoizedProps,r=null,l=Un,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}e[pn]=n,e=!!(e.nodeValue===t||r!==null&&r.suppressHydrationWarning===!0||kp(e.nodeValue,t)),e||il(n,!0)}else e=zo(e).createTextNode(r),e[pn]=n,n.stateNode=e}return nn(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(r=Ai(n),t!==null){if(e===null){if(!r)throw Error(a(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[pn]=n}else Wl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),e=!1}else t=Pc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(bt(n),n):(bt(n),null);if((n.flags&128)!==0)throw Error(a(558))}return nn(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Ai(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(a(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(a(317));l[pn]=n}else Wl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),l=!1}else l=Pc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(bt(n),n):(bt(n),null)}return bt(n),(n.flags&128)!==0?(n.lanes=t,n):(t=r!==null,e=e!==null&&e.memoizedState!==null,t&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==l&&(r.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),wo(n,n.updateQueue),nn(n),null);case 4:return Oe(),e===null&&nf(n.stateNode.containerInfo),nn(n),null;case 10:return Sr(n.type),nn(n),null;case 19:if(z(hn),r=n.memoizedState,r===null)return nn(n),null;if(l=(n.flags&128)!==0,o=r.rendering,o===null)if(l)Ha(r,!1);else{if(mn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(o=oo(e),o!==null){for(n.flags|=128,Ha(r,!1),e=o.updateQueue,n.updateQueue=e,wo(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)rd(t,e),t=t.sibling;return ne(hn,hn.current&1|2),Ue&&wr(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&En()>Ro&&(n.flags|=128,l=!0,Ha(r,!1),n.lanes=4194304)}else{if(!l)if(e=oo(o),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,wo(n,e),Ha(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!Ue)return nn(n),null}else 2*En()-r.renderingStartTime>Ro&&t!==536870912&&(n.flags|=128,l=!0,Ha(r,!1),n.lanes=4194304);r.isBackwards?(o.sibling=n.child,n.child=o):(e=r.last,e!==null?e.sibling=o:n.child=o,r.last=o)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=En(),e.sibling=null,t=hn.current,ne(hn,l?t&1|2:t&1),Ue&&wr(n,r.treeForkCount),e):(nn(n),null);case 22:case 23:return bt(n),tu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(t&536870912)!==0&&(n.flags&128)===0&&(nn(n),n.subtreeFlags&6&&(n.flags|=8192)):nn(n),t=n.updateQueue,t!==null&&wo(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==t&&(n.flags|=2048),e!==null&&z(ni),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),Sr(bn),nn(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function eg(e,n){switch(Gc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Sr(bn),Oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Xt(n),null;case 31:if(n.memoizedState!==null){if(bt(n),n.alternate===null)throw Error(a(340));Wl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(bt(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Wl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return z(hn),null;case 4:return Oe(),null;case 10:return Sr(n.type),null;case 22:case 23:return bt(n),tu(),e!==null&&z(ni),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Sr(bn),null;case 25:return null;default:return null}}function Mm(e,n){switch(Gc(n),n.tag){case 3:Sr(bn),Oe();break;case 26:case 27:case 5:Xt(n);break;case 4:Oe();break;case 31:n.memoizedState!==null&&bt(n);break;case 13:bt(n);break;case 19:z(hn);break;case 10:Sr(n.type);break;case 22:case 23:bt(n),tu(),e!==null&&z(ni);break;case 24:Sr(bn)}}function Ia(e,n){try{var t=n.updateQueue,r=t!==null?t.lastEffect:null;if(r!==null){var l=r.next;t=l;do{if((t.tag&e)===e){r=void 0;var o=t.create,m=t.inst;r=o(),m.destroy=r}t=t.next}while(t!==l)}}catch(v){Ke(n,n.return,v)}}function dl(e,n,t){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var o=l.next;r=o;do{if((r.tag&e)===e){var m=r.inst,v=m.destroy;if(v!==void 0){m.destroy=void 0,l=n;var S=t,C=v;try{C()}catch(Y){Ke(l,S,Y)}}}r=r.next}while(r!==o)}}catch(Y){Ke(n,n.return,Y)}}function Dm(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{xd(n,t)}catch(r){Ke(e,e.return,r)}}}function Am(e,n,t){t.props=ai(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(r){Ke(e,n,r)}}function Ga(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof t=="function"?e.refCleanup=t(r):t.current=r}}catch(l){Ke(e,n,l)}}function ir(e,n){var t=e.ref,r=e.refCleanup;if(t!==null)if(typeof r=="function")try{r()}catch(l){Ke(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){Ke(e,n,l)}else t.current=null}function Om(e){var n=e.type,t=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&r.focus();break e;case"img":t.src?r.src=t.src:t.srcSet&&(r.srcset=t.srcSet)}}catch(l){Ke(e,e.return,l)}}function Cu(e,n,t){try{var r=e.stateNode;wg(r,e.type,t,n),r[kn]=n}catch(l){Ke(e,e.return,l)}}function Cm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&yl(e.type)||e.tag===4}function Lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&yl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=jt));else if(r!==4&&(r===27&&yl(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(Bu(e,n,t),e=e.sibling;e!==null;)Bu(e,n,t),e=e.sibling}function Eo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(r===27&&yl(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Eo(e,n,t),e=e.sibling;e!==null;)Eo(e,n,t),e=e.sibling}function Lm(e){var n=e.stateNode,t=e.memoizedProps;try{for(var r=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Gn(n,r,t),n[pn]=e,n[kn]=t}catch(o){Ke(e,e.return,o)}}var jr=!1,xn=!1,zu=!1,Bm=typeof WeakSet=="function"?WeakSet:Set,An=null;function ng(e,n){if(e=e.containerInfo,lf=Yo,e=d(e),_(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var m=0,v=-1,S=-1,C=0,Y=0,X=e,L=null;n:for(;;){for(var I;X!==t||l!==0&&X.nodeType!==3||(v=m+l),X!==o||r!==0&&X.nodeType!==3||(S=m+r),X.nodeType===3&&(m+=X.nodeValue.length),(I=X.firstChild)!==null;)L=X,X=I;for(;;){if(X===e)break n;if(L===t&&++C===l&&(v=m),L===o&&++Y===r&&(S=m),(I=X.nextSibling)!==null)break;X=L,L=X.parentNode}X=I}t=v===-1||S===-1?null:{start:v,end:S}}else t=null}t=t||{start:0,end:0}}else t=null;for(af={focusedElem:e,selectionRange:t},Yo=!1,An=n;An!==null;)if(n=An,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,An=e;else for(;An!==null;){switch(n=An,o=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)l=e[t],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,t=n,l=o.memoizedProps,o=o.memoizedState,r=t.stateNode;try{var de=ai(t.type,l);e=r.getSnapshotBeforeUpdate(de,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(ye){Ke(t,t.return,ye)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)cf(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":cf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,An=e;break}An=n.return}}function zm(e,n,t){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Dr(e,t),r&4&&Ia(5,t);break;case 1:if(Dr(e,t),r&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(m){Ke(t,t.return,m)}else{var l=ai(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Ke(t,t.return,m)}}r&64&&Dm(t),r&512&&Ga(t,t.return);break;case 3:if(Dr(e,t),r&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{xd(e,n)}catch(m){Ke(t,t.return,m)}}break;case 27:n===null&&r&4&&Lm(t);case 26:case 5:Dr(e,t),n===null&&r&4&&Om(t),r&512&&Ga(t,t.return);break;case 12:Dr(e,t);break;case 31:Dr(e,t),r&4&&Im(e,t);break;case 13:Dr(e,t),r&4&&Gm(e,t),r&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=ug.bind(null,t),Mg(e,t))));break;case 22:if(r=t.memoizedState!==null||jr,!r){n=n!==null&&n.memoizedState!==null||xn,l=jr;var o=xn;jr=r,(xn=n)&&!o?Ar(e,t,(t.subtreeFlags&8772)!==0):Dr(e,t),jr=l,xn=o}break;case 30:break;default:Dr(e,t)}}function Um(e){var n=e.alternate;n!==null&&(e.alternate=null,Um(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Wt(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sn=null,at=!1;function Mr(e,n,t){for(t=t.child;t!==null;)Hm(e,n,t),t=t.sibling}function Hm(e,n,t){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(Al,t)}catch{}switch(t.tag){case 26:xn||ir(t,n),Mr(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:xn||ir(t,n);var r=sn,l=at;yl(t.type)&&(sn=t.stateNode,at=!1),Mr(e,n,t),Qa(t.stateNode),sn=r,at=l;break;case 5:xn||ir(t,n);case 6:if(r=sn,l=at,sn=null,Mr(e,n,t),sn=r,at=l,sn!==null)if(at)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(t.stateNode)}catch(o){Ke(t,n,o)}else try{sn.removeChild(t.stateNode)}catch(o){Ke(t,n,o)}break;case 18:sn!==null&&(at?(e=sn,Dp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Ji(e)):Dp(sn,t.stateNode));break;case 4:r=sn,l=at,sn=t.stateNode.containerInfo,at=!0,Mr(e,n,t),sn=r,at=l;break;case 0:case 11:case 14:case 15:dl(2,t,n),xn||dl(4,t,n),Mr(e,n,t);break;case 1:xn||(ir(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"&&Am(t,n,r)),Mr(e,n,t);break;case 21:Mr(e,n,t);break;case 22:xn=(r=xn)||t.memoizedState!==null,Mr(e,n,t),xn=r;break;default:Mr(e,n,t)}}function Im(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ji(e)}catch(t){Ke(n,n.return,t)}}}function Gm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ji(e)}catch(t){Ke(n,n.return,t)}}function tg(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Bm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Bm),n;default:throw Error(a(435,e.tag))}}function So(e,n){var t=tg(e);n.forEach(function(r){if(!t.has(r)){t.add(r);var l=fg.bind(null,e,r);r.then(l,l)}})}function st(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r],o=e,m=n,v=m;e:for(;v!==null;){switch(v.tag){case 27:if(yl(v.type)){sn=v.stateNode,at=!1;break e}break;case 5:sn=v.stateNode,at=!1;break e;case 3:case 4:sn=v.stateNode.containerInfo,at=!0;break e}v=v.return}if(sn===null)throw Error(a(160));Hm(o,m,l),sn=null,at=!1,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Vm(n,e),n=n.sibling}var qt=null;function Vm(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:st(n,e),ot(e),r&4&&(dl(3,e,e.return),Ia(3,e),dl(5,e,e.return));break;case 1:st(n,e),ot(e),r&512&&(xn||t===null||ir(t,t.return)),r&64&&jr&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?r:t.concat(r))));break;case 26:var l=qt;if(st(n,e),ot(e),r&512&&(xn||t===null||ir(t,t.return)),r&4){var o=t!==null?t.memoizedState:null;if(r=e.memoizedState,t===null)if(r===null)if(e.stateNode===null){e:{r=e.type,t=e.memoizedProps,l=l.ownerDocument||l;n:switch(r){case"title":o=l.getElementsByTagName("title")[0],(!o||o[Wn]||o[pn]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=l.createElement(r),l.head.insertBefore(o,l.querySelector("head > title"))),Gn(o,r,t),o[pn]=e,rn(o),r=o;break e;case"link":var m=Vp("link","href",l).get(r+(t.href||""));if(m){for(var v=0;v<m.length;v++)if(o=m[v],o.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&o.getAttribute("rel")===(t.rel==null?null:t.rel)&&o.getAttribute("title")===(t.title==null?null:t.title)&&o.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){m.splice(v,1);break n}}o=l.createElement(r),Gn(o,r,t),l.head.appendChild(o);break;case"meta":if(m=Vp("meta","content",l).get(r+(t.content||""))){for(v=0;v<m.length;v++)if(o=m[v],o.getAttribute("content")===(t.content==null?null:""+t.content)&&o.getAttribute("name")===(t.name==null?null:t.name)&&o.getAttribute("property")===(t.property==null?null:t.property)&&o.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&o.getAttribute("charset")===(t.charSet==null?null:t.charSet)){m.splice(v,1);break n}}o=l.createElement(r),Gn(o,r,t),l.head.appendChild(o);break;default:throw Error(a(468,r))}o[pn]=e,rn(o),r=o}e.stateNode=r}else Pp(l,e.type,e.stateNode);else e.stateNode=Gp(l,r,e.memoizedProps);else o!==r?(o===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):o.count--,r===null?Pp(l,e.type,e.stateNode):Gp(l,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Cu(e,e.memoizedProps,t.memoizedProps)}break;case 27:st(n,e),ot(e),r&512&&(xn||t===null||ir(t,t.return)),t!==null&&r&4&&Cu(e,e.memoizedProps,t.memoizedProps);break;case 5:if(st(n,e),ot(e),r&512&&(xn||t===null||ir(t,t.return)),e.flags&32){l=e.stateNode;try{$r(l,"")}catch(de){Ke(e,e.return,de)}}r&4&&e.stateNode!=null&&(l=e.memoizedProps,Cu(e,l,t!==null?t.memoizedProps:l)),r&1024&&(zu=!0);break;case 6:if(st(n,e),ot(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,t=e.stateNode;try{t.nodeValue=r}catch(de){Ke(e,e.return,de)}}break;case 3:if(Io=null,l=qt,qt=Uo(n.containerInfo),st(n,e),qt=l,ot(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ji(n.containerInfo)}catch(de){Ke(e,e.return,de)}zu&&(zu=!1,Pm(e));break;case 4:r=qt,qt=Uo(e.stateNode.containerInfo),st(n,e),ot(e),qt=r;break;case 12:st(n,e),ot(e);break;case 31:st(n,e),ot(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,So(e,r)));break;case 13:st(n,e),ot(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(No=En()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,So(e,r)));break;case 22:l=e.memoizedState!==null;var S=t!==null&&t.memoizedState!==null,C=jr,Y=xn;if(jr=C||l,xn=Y||S,st(n,e),xn=Y,jr=C,ot(e),r&8192)e:for(n=e.stateNode,n._visibility=l?n._visibility&-2:n._visibility|1,l&&(t===null||S||jr||xn||si(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){S=t=n;try{if(o=S.stateNode,l)m=o.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{v=S.stateNode;var X=S.memoizedProps.style,L=X!=null&&X.hasOwnProperty("display")?X.display:null;v.style.display=L==null||typeof L=="boolean"?"":(""+L).trim()}}catch(de){Ke(S,S.return,de)}}}else if(n.tag===6){if(t===null){S=n;try{S.stateNode.nodeValue=l?"":S.memoizedProps}catch(de){Ke(S,S.return,de)}}}else if(n.tag===18){if(t===null){S=n;try{var I=S.stateNode;l?Ap(I,!0):Ap(S.stateNode,!1)}catch(de){Ke(S,S.return,de)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(t=r.retryQueue,t!==null&&(r.retryQueue=null,So(e,t))));break;case 19:st(n,e),ot(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,So(e,r)));break;case 30:break;case 21:break;default:st(n,e),ot(e)}}function ot(e){var n=e.flags;if(n&2){try{for(var t,r=e.return;r!==null;){if(Cm(r)){t=r;break}r=r.return}if(t==null)throw Error(a(160));switch(t.tag){case 27:var l=t.stateNode,o=Lu(e);Eo(e,o,l);break;case 5:var m=t.stateNode;t.flags&32&&($r(m,""),t.flags&=-33);var v=Lu(e);Eo(e,v,m);break;case 3:case 4:var S=t.stateNode.containerInfo,C=Lu(e);Bu(e,C,S);break;default:throw Error(a(161))}}catch(Y){Ke(e,e.return,Y)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Pm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Pm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Dr(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)zm(e,n.alternate,n),n=n.sibling}function si(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:dl(4,n,n.return),si(n);break;case 1:ir(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&Am(n,n.return,t),si(n);break;case 27:Qa(n.stateNode);case 26:case 5:ir(n,n.return),si(n);break;case 22:n.memoizedState===null&&si(n);break;case 30:si(n);break;default:si(n)}e=e.sibling}}function Ar(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,l=e,o=n,m=o.flags;switch(o.tag){case 0:case 11:case 15:Ar(l,o,t),Ia(4,o);break;case 1:if(Ar(l,o,t),r=o,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(C){Ke(r,r.return,C)}if(r=o,l=r.updateQueue,l!==null){var v=r.stateNode;try{var S=l.shared.hiddenCallbacks;if(S!==null)for(l.shared.hiddenCallbacks=null,l=0;l<S.length;l++)vd(S[l],v)}catch(C){Ke(r,r.return,C)}}t&&m&64&&Dm(o),Ga(o,o.return);break;case 27:Lm(o);case 26:case 5:Ar(l,o,t),t&&r===null&&m&4&&Om(o),Ga(o,o.return);break;case 12:Ar(l,o,t);break;case 31:Ar(l,o,t),t&&m&4&&Im(l,o);break;case 13:Ar(l,o,t),t&&m&4&&Gm(l,o);break;case 22:o.memoizedState===null&&Ar(l,o,t),Ga(o,o.return);break;case 30:break;default:Ar(l,o,t)}n=n.sibling}}function Uu(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Ra(t))}function Hu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ra(e))}function Kt(e,n,t,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Ym(e,n,t,r),n=n.sibling}function Ym(e,n,t,r){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Kt(e,n,t,r),l&2048&&Ia(9,n);break;case 1:Kt(e,n,t,r);break;case 3:Kt(e,n,t,r),l&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ra(e)));break;case 12:if(l&2048){Kt(e,n,t,r),e=n.stateNode;try{var o=n.memoizedProps,m=o.id,v=o.onPostCommit;typeof v=="function"&&v(m,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Ke(n,n.return,S)}}else Kt(e,n,t,r);break;case 31:Kt(e,n,t,r);break;case 13:Kt(e,n,t,r);break;case 23:break;case 22:o=n.stateNode,m=n.alternate,n.memoizedState!==null?o._visibility&2?Kt(e,n,t,r):Va(e,n):o._visibility&2?Kt(e,n,t,r):(o._visibility|=2,Vi(e,n,t,r,(n.subtreeFlags&10256)!==0||!1)),l&2048&&Uu(m,n);break;case 24:Kt(e,n,t,r),l&2048&&Hu(n.alternate,n);break;default:Kt(e,n,t,r)}}function Vi(e,n,t,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var o=e,m=n,v=t,S=r,C=m.flags;switch(m.tag){case 0:case 11:case 15:Vi(o,m,v,S,l),Ia(8,m);break;case 23:break;case 22:var Y=m.stateNode;m.memoizedState!==null?Y._visibility&2?Vi(o,m,v,S,l):Va(o,m):(Y._visibility|=2,Vi(o,m,v,S,l)),l&&C&2048&&Uu(m.alternate,m);break;case 24:Vi(o,m,v,S,l),l&&C&2048&&Hu(m.alternate,m);break;default:Vi(o,m,v,S,l)}n=n.sibling}}function Va(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,r=n,l=r.flags;switch(r.tag){case 22:Va(t,r),l&2048&&Uu(r.alternate,r);break;case 24:Va(t,r),l&2048&&Hu(r.alternate,r);break;default:Va(t,r)}n=n.sibling}}var Pa=8192;function Pi(e,n,t){if(e.subtreeFlags&Pa)for(e=e.child;e!==null;)Fm(e,n,t),e=e.sibling}function Fm(e,n,t){switch(e.tag){case 26:Pi(e,n,t),e.flags&Pa&&e.memoizedState!==null&&Vg(t,qt,e.memoizedState,e.memoizedProps);break;case 5:Pi(e,n,t);break;case 3:case 4:var r=qt;qt=Uo(e.stateNode.containerInfo),Pi(e,n,t),qt=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Pa,Pa=16777216,Pi(e,n,t),Pa=r):Pi(e,n,t));break;default:Pi(e,n,t)}}function $m(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ya(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var r=n[t];An=r,Km(r,e)}$m(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qm(e),e=e.sibling}function qm(e){switch(e.tag){case 0:case 11:case 15:Ya(e),e.flags&2048&&dl(9,e,e.return);break;case 3:Ya(e);break;case 12:Ya(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ko(e)):Ya(e);break;default:Ya(e)}}function ko(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var r=n[t];An=r,Km(r,e)}$m(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:dl(8,n,n.return),ko(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,ko(n));break;default:ko(n)}e=e.sibling}}function Km(e,n){for(;An!==null;){var t=An;switch(t.tag){case 0:case 11:case 15:dl(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var r=t.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ra(t.memoizedState.cache)}if(r=t.child,r!==null)r.return=t,An=r;else e:for(t=e;An!==null;){r=An;var l=r.sibling,o=r.return;if(Um(r),r===t){An=null;break e}if(l!==null){l.return=o,An=l;break e}An=o}}}var rg={getCacheForType:function(e){var n=Hn(bn),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return Hn(bn).controller.signal}},lg=typeof WeakMap=="function"?WeakMap:Map,Ye=0,We=null,Me=null,Le=0,qe=0,yt=null,ml=!1,Yi=!1,Iu=!1,Or=0,mn=0,pl=0,oi=0,Gu=0,vt=0,Fi=0,Fa=null,ct=null,Vu=!1,No=0,Xm=0,Ro=1/0,To=null,hl=null,Rn=0,_l=null,$i=null,Cr=0,Pu=0,Yu=null,Qm=null,$a=0,Fu=null;function xt(){return(Ye&2)!==0&&Le!==0?Le&-Le:H.T!==null?Zu():cn()}function Zm(){if(vt===0)if((Le&536870912)===0||Ue){var e=Yn;Yn<<=1,(Yn&3932160)===0&&(Yn=262144),vt=e}else vt=536870912;return e=gt.current,e!==null&&(e.flags|=32),vt}function ut(e,n,t){(e===We&&(qe===2||qe===9)||e.cancelPendingCommit!==null)&&(qi(e,0),gl(e,Le,vt,!1)),Cl(e,t),((Ye&2)===0||e!==We)&&(e===We&&((Ye&2)===0&&(oi|=t),mn===4&&gl(e,Le,vt,!1)),ar(e))}function Wm(e,n,t){if((Ye&6)!==0)throw Error(a(327));var r=!t&&(n&127)===0&&(n&e.expiredLanes)===0||Cn(e,n),l=r?sg(e,n):qu(e,n,!0),o=r;do{if(l===0){Yi&&!r&&gl(e,n,0,!1);break}else{if(t=e.current.alternate,o&&!ig(t)){l=qu(e,n,!1),o=!1;continue}if(l===2){if(o=n,e.errorRecoveryDisabledLanes&o)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){n=m;e:{var v=e;l=Fa;var S=v.current.memoizedState.isDehydrated;if(S&&(qi(v,m).flags|=256),m=qu(v,m,!1),m!==2){if(Iu&&!S){v.errorRecoveryDisabledLanes|=o,oi|=o,l=4;break e}o=ct,ct=l,o!==null&&(ct===null?ct=o:ct.push.apply(ct,o))}l=m}if(o=!1,l!==2)continue}}if(l===1){qi(e,0),gl(e,n,0,!0);break}e:{switch(r=e,o=l,o){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:gl(r,n,vt,!ml);break e;case 2:ct=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(l=No+300-En(),10<l)){if(gl(r,n,vt,!ml),tn(r,0,!0)!==0)break e;Cr=n,r.timeoutHandle=jp(Jm.bind(null,r,t,ct,To,Vu,n,vt,oi,Fi,ml,o,"Throttled",-0,0),l);break e}Jm(r,t,ct,To,Vu,n,vt,oi,Fi,ml,o,null,-0,0)}}break}while(!0);ar(e)}function Jm(e,n,t,r,l,o,m,v,S,C,Y,X,L,I){if(e.timeoutHandle=-1,X=n.subtreeFlags,X&8192||(X&16785408)===16785408){X={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:jt},Fm(n,o,X);var de=(o&62914560)===o?No-En():(o&4194048)===o?Xm-En():0;if(de=Pg(X,de),de!==null){Cr=o,e.cancelPendingCommit=de(sp.bind(null,e,n,o,t,r,l,m,v,S,Y,X,null,L,I)),gl(e,o,m,!C);return}}sp(e,n,o,t,r,l,m,v,S)}function ig(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var r=0;r<t.length;r++){var l=t[r],o=l.getSnapshot;l=l.value;try{if(!Bn(o(),l))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function gl(e,n,t,r){n&=~Gu,n&=~oi,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var l=n;0<l;){var o=31-On(l),m=1<<o;r[o]=-1,l&=~m}t!==0&&gs(e,t,n)}function jo(){return(Ye&6)===0?(qa(0),!1):!0}function $u(){if(Me!==null){if(qe===0)var e=Me.return;else e=Me,Er=Jl=null,ou(e),zi=null,ja=0,e=Me;for(;e!==null;)Mm(e.alternate,e),e=e.return;Me=null}}function qi(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,kg(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Cr=0,$u(),We=e,Me=t=xr(e.current,null),Le=n,qe=0,yt=null,ml=!1,Yi=Cn(e,n),Iu=!1,Fi=vt=Gu=oi=pl=mn=0,ct=Fa=null,Vu=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var l=31-On(r),o=1<<l;n|=e[l],r&=~o}return Or=n,Xs(),t}function ep(e,n){Te=null,H.H=za,n===Bi||n===ro?(n=_d(),qe=3):n===Qc?(n=_d(),qe=4):qe=n===Su?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,yt=n,Me===null&&(mn=1,bo(e,Ot(n,e.current)))}function np(){var e=gt.current;return e===null?!0:(Le&4194048)===Le?zt===null:(Le&62914560)===Le||(Le&536870912)!==0?e===zt:!1}function tp(){var e=H.H;return H.H=za,e===null?za:e}function rp(){var e=H.A;return H.A=rg,e}function Mo(){mn=4,ml||(Le&4194048)!==Le&&gt.current!==null||(Yi=!0),(pl&134217727)===0&&(oi&134217727)===0||We===null||gl(We,Le,vt,!1)}function qu(e,n,t){var r=Ye;Ye|=2;var l=tp(),o=rp();(We!==e||Le!==n)&&(To=null,qi(e,n)),n=!1;var m=mn;e:do try{if(qe!==0&&Me!==null){var v=Me,S=yt;switch(qe){case 8:$u(),m=6;break e;case 3:case 2:case 9:case 6:gt.current===null&&(n=!0);var C=qe;if(qe=0,yt=null,Ki(e,v,S,C),t&&Yi){m=0;break e}break;default:C=qe,qe=0,yt=null,Ki(e,v,S,C)}}ag(),m=mn;break}catch(Y){ep(e,Y)}while(!0);return n&&e.shellSuspendCounter++,Er=Jl=null,Ye=r,H.H=l,H.A=o,Me===null&&(We=null,Le=0,Xs()),m}function ag(){for(;Me!==null;)lp(Me)}function sg(e,n){var t=Ye;Ye|=2;var r=tp(),l=rp();We!==e||Le!==n?(To=null,Ro=En()+500,qi(e,n)):Yi=Cn(e,n);e:do try{if(qe!==0&&Me!==null){n=Me;var o=yt;n:switch(qe){case 1:qe=0,yt=null,Ki(e,n,o,1);break;case 2:case 9:if(pd(o)){qe=0,yt=null,ip(n);break}n=function(){qe!==2&&qe!==9||We!==e||(qe=7),ar(e)},o.then(n,n);break e;case 3:qe=7;break e;case 4:qe=5;break e;case 7:pd(o)?(qe=0,yt=null,ip(n)):(qe=0,yt=null,Ki(e,n,o,7));break;case 5:var m=null;switch(Me.tag){case 26:m=Me.memoizedState;case 5:case 27:var v=Me;if(m?Yp(m):v.stateNode.complete){qe=0,yt=null;var S=v.sibling;if(S!==null)Me=S;else{var C=v.return;C!==null?(Me=C,Do(C)):Me=null}break n}}qe=0,yt=null,Ki(e,n,o,5);break;case 6:qe=0,yt=null,Ki(e,n,o,6);break;case 8:$u(),mn=6;break e;default:throw Error(a(462))}}og();break}catch(Y){ep(e,Y)}while(!0);return Er=Jl=null,H.H=r,H.A=l,Ye=t,Me!==null?0:(We=null,Le=0,Xs(),mn)}function og(){for(;Me!==null&&!di();)lp(Me)}function lp(e){var n=Tm(e.alternate,e,Or);e.memoizedProps=e.pendingProps,n===null?Do(e):Me=n}function ip(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=wm(t,n,n.pendingProps,n.type,void 0,Le);break;case 11:n=wm(t,n,n.pendingProps,n.type.render,n.ref,Le);break;case 5:ou(n);default:Mm(t,n),n=Me=rd(n,Or),n=Tm(t,n,Or)}e.memoizedProps=e.pendingProps,n===null?Do(e):Me=n}function Ki(e,n,t,r){Er=Jl=null,ou(n),zi=null,ja=0;var l=n.return;try{if(Q_(e,l,n,t,Le)){mn=1,bo(e,Ot(t,e.current)),Me=null;return}}catch(o){if(l!==null)throw Me=l,o;mn=1,bo(e,Ot(t,e.current)),Me=null;return}n.flags&32768?(Ue||r===1?e=!0:Yi||(Le&536870912)!==0?e=!1:(ml=e=!0,(r===2||r===9||r===3||r===6)&&(r=gt.current,r!==null&&r.tag===13&&(r.flags|=16384))),ap(n,e)):Do(n)}function Do(e){var n=e;do{if((n.flags&32768)!==0){ap(n,ml);return}e=n.return;var t=J_(n.alternate,n,Or);if(t!==null){Me=t;return}if(n=n.sibling,n!==null){Me=n;return}Me=n=e}while(n!==null);mn===0&&(mn=5)}function ap(e,n){do{var t=eg(e.alternate,e);if(t!==null){t.flags&=32767,Me=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){Me=e;return}Me=e=t}while(e!==null);mn=6,Me=null}function sp(e,n,t,r,l,o,m,v,S){e.cancelPendingCommit=null;do Ao();while(Rn!==0);if((Ye&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(o=n.lanes|n.childLanes,o|=Lc,ur(e,t,o,m,v,S),e===We&&(Me=We=null,Le=0),$i=n,_l=e,Cr=t,Pu=o,Yu=l,Qm=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,dg(Dl,function(){return dp(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=H.T,H.T=null,l=re.p,re.p=2,m=Ye,Ye|=4;try{ng(e,n,t)}finally{Ye=m,re.p=l,H.T=r}}Rn=1,op(),cp(),up()}}function op(){if(Rn===1){Rn=0;var e=_l,n=$i,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=H.T,H.T=null;var r=re.p;re.p=2;var l=Ye;Ye|=4;try{Vm(n,e);var o=af,m=d(e.containerInfo),v=o.focusedElem,S=o.selectionRange;if(m!==v&&v&&v.ownerDocument&&Ks(v.ownerDocument.documentElement,v)){if(S!==null&&_(v)){var C=S.start,Y=S.end;if(Y===void 0&&(Y=C),"selectionStart"in v)v.selectionStart=C,v.selectionEnd=Math.min(Y,v.value.length);else{var X=v.ownerDocument||document,L=X&&X.defaultView||window;if(L.getSelection){var I=L.getSelection(),de=v.textContent.length,ye=Math.min(S.start,de),Ze=S.end===void 0?ye:Math.min(S.end,de);!I.extend&&ye>Ze&&(m=Ze,Ze=ye,ye=m);var M=qs(v,ye),N=qs(v,Ze);if(M&&N&&(I.rangeCount!==1||I.anchorNode!==M.node||I.anchorOffset!==M.offset||I.focusNode!==N.node||I.focusOffset!==N.offset)){var A=X.createRange();A.setStart(M.node,M.offset),I.removeAllRanges(),ye>Ze?(I.addRange(A),I.extend(N.node,N.offset)):(A.setEnd(N.node,N.offset),I.addRange(A))}}}}for(X=[],I=v;I=I.parentNode;)I.nodeType===1&&X.push({element:I,left:I.scrollLeft,top:I.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<X.length;v++){var $=X[v];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}Yo=!!lf,af=lf=null}finally{Ye=l,re.p=r,H.T=t}}e.current=n,Rn=2}}function cp(){if(Rn===2){Rn=0;var e=_l,n=$i,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=H.T,H.T=null;var r=re.p;re.p=2;var l=Ye;Ye|=4;try{zm(e,n.alternate,n)}finally{Ye=l,re.p=r,H.T=t}}Rn=3}}function up(){if(Rn===4||Rn===3){Rn=0,Ir();var e=_l,n=$i,t=Cr,r=Qm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Rn=5:(Rn=0,$i=_l=null,fp(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(hl=null),kt(t),n=n.stateNode,Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(Al,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=H.T,l=re.p,re.p=2,H.T=null;try{for(var o=e.onRecoverableError,m=0;m<r.length;m++){var v=r[m];o(v.value,{componentStack:v.stack})}}finally{H.T=n,re.p=l}}(Cr&3)!==0&&Ao(),ar(e),l=e.pendingLanes,(t&261930)!==0&&(l&42)!==0?e===Fu?$a++:($a=0,Fu=e):$a=0,qa(0)}}function fp(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ra(n)))}function Ao(){return op(),cp(),up(),dp()}function dp(){if(Rn!==5)return!1;var e=_l,n=Pu;Pu=0;var t=kt(Cr),r=H.T,l=re.p;try{re.p=32>t?32:t,H.T=null,t=Yu,Yu=null;var o=_l,m=Cr;if(Rn=0,$i=_l=null,Cr=0,(Ye&6)!==0)throw Error(a(331));var v=Ye;if(Ye|=4,qm(o.current),Ym(o,o.current,m,t),Ye=v,qa(0,!1),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(Al,o)}catch{}return!0}finally{re.p=l,H.T=r,fp(e,n)}}function mp(e,n,t){n=Ot(t,n),n=Eu(e.stateNode,n,2),e=cl(e,n,2),e!==null&&(Cl(e,2),ar(e))}function Ke(e,n,t){if(e.tag===3)mp(e,e,t);else for(;n!==null;){if(n.tag===3){mp(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hl===null||!hl.has(r))){e=Ot(t,e),t=pm(2),r=cl(n,t,2),r!==null&&(hm(t,r,n,e),Cl(r,2),ar(r));break}}n=n.return}}function Ku(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new lg;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(Iu=!0,l.add(t),e=cg.bind(null,e,n,t),n.then(e,e))}function cg(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,We===e&&(Le&t)===t&&(mn===4||mn===3&&(Le&62914560)===Le&&300>En()-No?(Ye&2)===0&&qi(e,0):Gu|=t,Fi===Le&&(Fi=0)),ar(e)}function pp(e,n){n===0&&(n=Ol()),e=Ql(e,n),e!==null&&(Cl(e,n),ar(e))}function ug(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),pp(e,t)}function fg(e,n){var t=0;switch(e.tag){case 31:case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(n),pp(e,t)}function dg(e,n){return Hr(e,n)}var Oo=null,Xi=null,Xu=!1,Co=!1,Qu=!1,bl=0;function ar(e){e!==Xi&&e.next===null&&(Xi===null?Oo=Xi=e:Xi=Xi.next=e),Co=!0,Xu||(Xu=!0,pg())}function qa(e,n){if(!Qu&&Co){Qu=!0;do for(var t=!1,r=Oo;r!==null;){if(e!==0){var l=r.pendingLanes;if(l===0)var o=0;else{var m=r.suspendedLanes,v=r.pingedLanes;o=(1<<31-On(42|e)+1)-1,o&=l&~(m&~v),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(t=!0,bp(r,o))}else o=Le,o=tn(r,r===We?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(o&3)===0||Cn(r,o)||(t=!0,bp(r,o));r=r.next}while(t);Qu=!1}}function mg(){hp()}function hp(){Co=Xu=!1;var e=0;bl!==0&&Sg()&&(e=bl);for(var n=En(),t=null,r=Oo;r!==null;){var l=r.next,o=_p(r,n);o===0?(r.next=null,t===null?Oo=l:t.next=l,l===null&&(Xi=t)):(t=r,(e!==0||(o&3)!==0)&&(Co=!0)),r=l}Rn!==0&&Rn!==5||qa(e),bl!==0&&(bl=0)}function _p(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var m=31-On(o),v=1<<m,S=l[m];S===-1?((v&t)===0||(v&r)!==0)&&(l[m]=gc(v,n)):S<=n&&(e.expiredLanes|=v),o&=~v}if(n=We,t=Le,t=tn(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,t===0||e===n&&(qe===2||qe===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&St(r),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Cn(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(r!==null&&St(r),kt(t)){case 2:case 8:t=ua;break;case 32:t=Dl;break;case 268435456:t=ft;break;default:t=Dl}return r=gp.bind(null,e),t=Hr(t,r),e.callbackPriority=n,e.callbackNode=t,n}return r!==null&&r!==null&&St(r),e.callbackPriority=2,e.callbackNode=null,2}function gp(e,n){if(Rn!==0&&Rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Ao()&&e.callbackNode!==t)return null;var r=Le;return r=tn(e,e===We?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Wm(e,r,n),_p(e,En()),e.callbackNode!=null&&e.callbackNode===t?gp.bind(null,e):null)}function bp(e,n){if(Ao())return null;Wm(e,n,!0)}function pg(){Ng(function(){(Ye&6)!==0?Hr(Ml,mg):hp()})}function Zu(){if(bl===0){var e=Ci;e===0&&(e=mt,mt<<=1,(mt&261888)===0&&(mt=256)),bl=e}return bl}function yp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ln(""+e)}function vp(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function hg(e,n,t,r,l){if(n==="submit"&&t&&t.stateNode===l){var o=yp((l[kn]||null).action),m=r.submitter;m&&(n=(n=m[kn]||null)?yp(n.formAction):m.getAttribute("formAction"),n!==null&&(o=n,m=null));var v=new Il("action","action",null,r,l);e.push({event:v,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(bl!==0){var S=m?vp(l,m):new FormData(l);gu(t,{pending:!0,data:S,method:l.method,action:o},null,S)}}else typeof o=="function"&&(v.preventDefault(),S=m?vp(l,m):new FormData(l),gu(t,{pending:!0,data:S,method:l.method,action:o},o,S))},currentTarget:l}]})}}for(var Wu=0;Wu<Kl.length;Wu++){var Ju=Kl[Wu],_g=Ju.toLowerCase(),gg=Ju[0].toUpperCase()+Ju.slice(1);zn(_g,"on"+gg)}zn(Je,"onAnimationEnd"),zn(tr,"onAnimationIteration"),zn(Dt,"onAnimationStart"),zn("dblclick","onDoubleClick"),zn("focusin","onFocus"),zn("focusout","onBlur"),zn($t,"onTransitionRun"),zn(nl,"onTransitionStart"),zn(tl,"onTransitionCancel"),zn(Sa,"onTransitionEnd"),pr("onMouseEnter",["mouseout","mouseover"]),pr("onMouseLeave",["mouseout","mouseover"]),pr("onPointerEnter",["pointerout","pointerover"]),pr("onPointerLeave",["pointerout","pointerover"]),rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ka));function xp(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var m=r.length-1;0<=m;m--){var v=r[m],S=v.instance,C=v.currentTarget;if(v=v.listener,S!==o&&l.isPropagationStopped())break e;o=v,l.currentTarget=C;try{o(l)}catch(Y){Xl(Y)}l.currentTarget=null,o=S}else for(m=0;m<r.length;m++){if(v=r[m],S=v.instance,C=v.currentTarget,v=v.listener,S!==o&&l.isPropagationStopped())break e;o=v,l.currentTarget=C;try{o(l)}catch(Y){Xl(Y)}l.currentTarget=null,o=S}}}}function De(e,n){var t=n[Ll];t===void 0&&(t=n[Ll]=new Set);var r=e+"__bubble";t.has(r)||(wp(n,e,2,!1),t.add(r))}function ef(e,n,t){var r=0;n&&(r|=4),wp(t,e,r,n)}var Lo="_reactListening"+Math.random().toString(36).slice(2);function nf(e){if(!e[Lo]){e[Lo]=!0,Jt.forEach(function(t){t!=="selectionchange"&&(bg.has(t)||ef(t,!1,e),ef(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Lo]||(n[Lo]=!0,ef("selectionchange",!1,n))}}function wp(e,n,t,r){switch(Zp(n)){case 2:var l=$g;break;case 8:l=qg;break;default:l=gf}t=l.bind(null,n,t,e),l=void 0,!gr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function tf(e,n,t,r,l){var o=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var v=r.stateNode.containerInfo;if(v===l)break;if(m===4)for(m=r.return;m!==null;){var S=m.tag;if((S===3||S===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;v!==null;){if(m=Rt(v),m===null)return;if(S=m.tag,S===5||S===6||S===26||S===27){r=o=m;continue e}v=v.parentNode}}r=r.return}Ss(function(){var C=o,Y=_r(t),X=[];e:{var L=ql.get(e);if(L!==void 0){var I=Il,de=e;switch(e){case"keypress":if(er(t)===0)break e;case"keydown":case"keyup":I=Cs;break;case"focusin":de="focus",I=yr;break;case"focusout":de="blur",I=yr;break;case"beforeblur":case"afterblur":I=yr;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=fn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=_a;break;case Je:case tr:case Dt:I=Ts;break;case Sa:I=kc;break;case"scroll":case"scrollend":I=xi;break;case"wheel":I=Rc;break;case"copy":case"cut":case"paste":I=vc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Ls;break;case"toggle":case"beforetoggle":I=jc}var ye=(n&4)!==0,Ze=!ye&&(e==="scroll"||e==="scrollend"),M=ye?L!==null?L+"Capture":null:L;ye=[];for(var N=C,A;N!==null;){var $=N;if(A=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||A===null||M===null||($=Zr(N,M),$!=null&&ye.push(Xa(N,$,A))),Ze)break;N=N.return}0<ye.length&&(L=new I(L,de,null,t,Y),X.push({event:L,listeners:ye}))}}if((n&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",L&&t!==Kr&&(de=t.relatedTarget||t.fromElement)&&(Rt(de)||de[pt]))break e;if((I||L)&&(L=Y.window===Y?Y:(L=Y.ownerDocument)?L.defaultView||L.parentWindow:window,I?(de=t.relatedTarget||t.toElement,I=C,de=de?Rt(de):null,de!==null&&(Ze=h(de),ye=de.tag,de!==Ze||ye!==5&&ye!==27&&ye!==6)&&(de=null)):(I=null,de=C),I!==de)){if(ye=Ns,$="onMouseLeave",M="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(ye=Ls,$="onPointerLeave",M="onPointerEnter",N="pointer"),Ze=I==null?L:dr(I),A=de==null?L:dr(de),L=new ye($,N+"leave",I,t,Y),L.target=Ze,L.relatedTarget=A,$=null,Rt(Y)===C&&(ye=new ye(M,N+"enter",de,t,Y),ye.target=A,ye.relatedTarget=Ze,$=ye),Ze=$,I&&de)n:{for(ye=yg,M=I,N=de,A=0,$=M;$;$=ye($))A++;$=0;for(var ge=N;ge;ge=ye(ge))$++;for(;0<A-$;)M=ye(M),A--;for(;0<$-A;)N=ye(N),$--;for(;A--;){if(M===N||N!==null&&M===N.alternate){ye=M;break n}M=ye(M),N=ye(N)}ye=null}else ye=null;I!==null&&Ep(X,L,I,ye,!1),de!==null&&Ze!==null&&Ep(X,Ze,de,ye,!0)}}e:{if(L=C?dr(C):window,I=L.nodeName&&L.nodeName.toLowerCase(),I==="select"||I==="input"&&L.type==="file")var Ge=Gs;else if(va(L))if(Vs)Ge=Fs;else{Ge=Ni;var pe=wa}else I=L.nodeName,!I||I.toLowerCase()!=="input"||L.type!=="checkbox"&&L.type!=="radio"?C&&_i(C.elementType)&&(Ge=Gs):Ge=Ea;if(Ge&&(Ge=Ge(e,C))){Is(X,Ge,t,Y);break e}pe&&pe(e,L,C),e==="focusout"&&C&&L.type==="number"&&C.memoizedProps.value!=null&&ma(L,"number",L.value)}switch(pe=C?dr(C):window,e){case"focusin":(va(pe)||pe.contentEditable==="true")&&(T=pe,j=C,Q=null);break;case"focusout":Q=j=T=null;break;case"mousedown":ce=!0;break;case"contextmenu":case"mouseup":case"dragend":ce=!1,Ie(X,t,Y);break;case"selectionchange":if(x)break;case"keydown":case"keyup":Ie(X,t,Y)}var je;if(ga)e:{switch(e){case"compositionstart":var Be="onCompositionStart";break e;case"compositionend":Be="onCompositionEnd";break e;case"compositionupdate":Be="onCompositionUpdate";break e}Be=void 0}else Jr?ba(e,t)&&(Be="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Be="onCompositionStart");Be&&(zs&&t.locale!=="ko"&&(Jr||Be!=="onCompositionStart"?Be==="onCompositionEnd"&&Jr&&(je=Nn()):(un=Y,yi="value"in un?un.value:un.textContent,Jr=!0)),pe=Bo(C,Be),0<pe.length&&(Be=new Ms(Be,e,null,t,Y),X.push({event:Be,listeners:pe}),je?Be.data=je:(je=ya(t),je!==null&&(Be.data=je)))),(je=Dc?Hs(e,t):Ac(e,t))&&(Be=Bo(C,"onBeforeInput"),0<Be.length&&(pe=new Ms("onBeforeInput","beforeinput",null,t,Y),X.push({event:pe,listeners:Be}),pe.data=je)),hg(X,e,C,t,Y)}xp(X,n)})}function Xa(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Bo(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=Zr(e,t),l!=null&&r.unshift(Xa(e,l,o)),l=Zr(e,n),l!=null&&r.push(Xa(e,l,o))),e.tag===3)return r;e=e.return}return[]}function yg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ep(e,n,t,r,l){for(var o=n._reactName,m=[];t!==null&&t!==r;){var v=t,S=v.alternate,C=v.stateNode;if(v=v.tag,S!==null&&S===r)break;v!==5&&v!==26&&v!==27||C===null||(S=C,l?(C=Zr(t,o),C!=null&&m.unshift(Xa(t,C,S))):l||(C=Zr(t,o),C!=null&&m.push(Xa(t,C,S)))),t=t.return}m.length!==0&&e.push({event:n,listeners:m})}var vg=/\r\n?/g,xg=/\u0000|\uFFFD/g;function Sp(e){return(typeof e=="string"?e:""+e).replace(vg,`
`).replace(xg,"")}function kp(e,n){return n=Sp(n),Sp(e)===n}function Qe(e,n,t,r,l,o){switch(t){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||$r(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&$r(e,""+r);break;case"className":_e(e,"class",r);break;case"tabIndex":_e(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":_e(e,t,r);break;case"style":qr(e,r,o);break;case"data":if(n!=="object"){_e(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(t);break}r=ln(""+r),e.setAttribute(t,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(t==="formAction"?(n!=="input"&&Qe(e,n,"name",l.name,l,null),Qe(e,n,"formEncType",l.formEncType,l,null),Qe(e,n,"formMethod",l.formMethod,l,null),Qe(e,n,"formTarget",l.formTarget,l,null)):(Qe(e,n,"encType",l.encType,l,null),Qe(e,n,"method",l.method,l,null),Qe(e,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(t);break}r=ln(""+r),e.setAttribute(t,r);break;case"onClick":r!=null&&(e.onclick=jt);break;case"onScroll":r!=null&&De("scroll",e);break;case"onScrollEnd":r!=null&&De("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(t=r.__html,t!=null){if(l.children!=null)throw Error(a(60));e.innerHTML=t}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}t=ln(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,""+r):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":r===!0?e.setAttribute(t,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,r):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(t,r):e.removeAttribute(t);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(t):e.setAttribute(t,r);break;case"popover":De("beforetoggle",e),De("toggle",e),Yt(e,"popover",r);break;case"xlinkActuate":ht(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ht(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ht(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ht(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ht(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ht(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ht(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ht(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ht(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Yt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=ws.get(t)||t,Yt(e,t,r))}}function rf(e,n,t,r,l,o){switch(t){case"style":qr(e,r,o);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(t=r.__html,t!=null){if(l.children!=null)throw Error(a(60));e.innerHTML=t}}break;case"children":typeof r=="string"?$r(e,r):(typeof r=="number"||typeof r=="bigint")&&$r(e,""+r);break;case"onScroll":r!=null&&De("scroll",e);break;case"onScrollEnd":r!=null&&De("scrollend",e);break;case"onClick":r!=null&&(e.onclick=jt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!mr.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),n=t.slice(2,l?t.length-7:void 0),o=e[kn]||null,o=o!=null?o[t]:null,typeof o=="function"&&e.removeEventListener(n,o,l),typeof r=="function")){typeof o!="function"&&o!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,r,l);break e}t in e?e[t]=r:r===!0?e.setAttribute(t,""):Yt(e,t,r)}}}function Gn(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",e),De("load",e);var r=!1,l=!1,o;for(o in t)if(t.hasOwnProperty(o)){var m=t[o];if(m!=null)switch(o){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Qe(e,n,o,m,t,null)}}l&&Qe(e,n,"srcSet",t.srcSet,t,null),r&&Qe(e,n,"src",t.src,t,null);return;case"input":De("invalid",e);var v=o=m=l=null,S=null,C=null;for(r in t)if(t.hasOwnProperty(r)){var Y=t[r];if(Y!=null)switch(r){case"name":l=Y;break;case"type":m=Y;break;case"checked":S=Y;break;case"defaultChecked":C=Y;break;case"value":o=Y;break;case"defaultValue":v=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(a(137,n));break;default:Qe(e,n,r,Y,t,null)}}vs(e,o,v,S,C,m,l,!1);return;case"select":De("invalid",e),r=m=o=null;for(l in t)if(t.hasOwnProperty(l)&&(v=t[l],v!=null))switch(l){case"value":o=v;break;case"defaultValue":m=v;break;case"multiple":r=v;default:Qe(e,n,l,v,t,null)}n=o,t=m,e.multiple=!!r,n!=null?hr(e,!!r,n,!1):t!=null&&hr(e,!!r,t,!0);return;case"textarea":De("invalid",e),o=l=r=null;for(m in t)if(t.hasOwnProperty(m)&&(v=t[m],v!=null))switch(m){case"value":r=v;break;case"defaultValue":l=v;break;case"children":o=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(a(91));break;default:Qe(e,n,m,v,t,null)}P(e,r,l,o);return;case"option":for(S in t)if(t.hasOwnProperty(S)&&(r=t[S],r!=null))switch(S){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Qe(e,n,S,r,t,null)}return;case"dialog":De("beforetoggle",e),De("toggle",e),De("cancel",e),De("close",e);break;case"iframe":case"object":De("load",e);break;case"video":case"audio":for(r=0;r<Ka.length;r++)De(Ka[r],e);break;case"image":De("error",e),De("load",e);break;case"details":De("toggle",e);break;case"embed":case"source":case"link":De("error",e),De("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in t)if(t.hasOwnProperty(C)&&(r=t[C],r!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Qe(e,n,C,r,t,null)}return;default:if(_i(n)){for(Y in t)t.hasOwnProperty(Y)&&(r=t[Y],r!==void 0&&rf(e,n,Y,r,t,void 0));return}}for(v in t)t.hasOwnProperty(v)&&(r=t[v],r!=null&&Qe(e,n,v,r,t,null))}function wg(e,n,t,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,m=null,v=null,S=null,C=null,Y=null;for(I in t){var X=t[I];if(t.hasOwnProperty(I)&&X!=null)switch(I){case"checked":break;case"value":break;case"defaultValue":S=X;default:r.hasOwnProperty(I)||Qe(e,n,I,null,r,X)}}for(var L in r){var I=r[L];if(X=t[L],r.hasOwnProperty(L)&&(I!=null||X!=null))switch(L){case"type":o=I;break;case"name":l=I;break;case"checked":C=I;break;case"defaultChecked":Y=I;break;case"value":m=I;break;case"defaultValue":v=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(a(137,n));break;default:I!==X&&Qe(e,n,L,I,r,X)}}$n(e,m,v,S,C,Y,o,l);return;case"select":I=m=v=L=null;for(o in t)if(S=t[o],t.hasOwnProperty(o)&&S!=null)switch(o){case"value":break;case"multiple":I=S;default:r.hasOwnProperty(o)||Qe(e,n,o,null,r,S)}for(l in r)if(o=r[l],S=t[l],r.hasOwnProperty(l)&&(o!=null||S!=null))switch(l){case"value":L=o;break;case"defaultValue":v=o;break;case"multiple":m=o;default:o!==S&&Qe(e,n,l,o,r,S)}n=v,t=m,r=I,L!=null?hr(e,!!t,L,!1):!!r!=!!t&&(n!=null?hr(e,!!t,n,!0):hr(e,!!t,t?[]:"",!1));return;case"textarea":I=L=null;for(v in t)if(l=t[v],t.hasOwnProperty(v)&&l!=null&&!r.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Qe(e,n,v,null,r,l)}for(m in r)if(l=r[m],o=t[m],r.hasOwnProperty(m)&&(l!=null||o!=null))switch(m){case"value":L=l;break;case"defaultValue":I=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(a(91));break;default:l!==o&&Qe(e,n,m,l,r,o)}hi(e,L,I);return;case"option":for(var de in t)if(L=t[de],t.hasOwnProperty(de)&&L!=null&&!r.hasOwnProperty(de))switch(de){case"selected":e.selected=!1;break;default:Qe(e,n,de,null,r,L)}for(S in r)if(L=r[S],I=t[S],r.hasOwnProperty(S)&&L!==I&&(L!=null||I!=null))switch(S){case"selected":e.selected=L&&typeof L!="function"&&typeof L!="symbol";break;default:Qe(e,n,S,L,r,I)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in t)L=t[ye],t.hasOwnProperty(ye)&&L!=null&&!r.hasOwnProperty(ye)&&Qe(e,n,ye,null,r,L);for(C in r)if(L=r[C],I=t[C],r.hasOwnProperty(C)&&L!==I&&(L!=null||I!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(a(137,n));break;default:Qe(e,n,C,L,r,I)}return;default:if(_i(n)){for(var Ze in t)L=t[Ze],t.hasOwnProperty(Ze)&&L!==void 0&&!r.hasOwnProperty(Ze)&&rf(e,n,Ze,void 0,r,L);for(Y in r)L=r[Y],I=t[Y],!r.hasOwnProperty(Y)||L===I||L===void 0&&I===void 0||rf(e,n,Y,L,r,I);return}}for(var M in t)L=t[M],t.hasOwnProperty(M)&&L!=null&&!r.hasOwnProperty(M)&&Qe(e,n,M,null,r,L);for(X in r)L=r[X],I=t[X],!r.hasOwnProperty(X)||L===I||L==null&&I==null||Qe(e,n,X,L,r,I)}function Np(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Eg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),r=0;r<t.length;r++){var l=t[r],o=l.transferSize,m=l.initiatorType,v=l.duration;if(o&&v&&Np(m)){for(m=0,v=l.responseEnd,r+=1;r<t.length;r++){var S=t[r],C=S.startTime;if(C>v)break;var Y=S.transferSize,X=S.initiatorType;Y&&Np(X)&&(S=S.responseEnd,m+=Y*(S<v?1:(v-C)/(S-C)))}if(--r,n+=8*(o+m)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var lf=null,af=null;function zo(e){return e.nodeType===9?e:e.ownerDocument}function Rp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tp(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function sf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var of=null;function Sg(){var e=window.event;return e&&e.type==="popstate"?e===of?!1:(of=e,!0):(of=null,!1)}var jp=typeof setTimeout=="function"?setTimeout:void 0,kg=typeof clearTimeout=="function"?clearTimeout:void 0,Mp=typeof Promise=="function"?Promise:void 0,Ng=typeof queueMicrotask=="function"?queueMicrotask:typeof Mp<"u"?function(e){return Mp.resolve(null).then(e).catch(Rg)}:jp;function Rg(e){setTimeout(function(){throw e})}function yl(e){return e==="head"}function Dp(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"||t==="/&"){if(r===0){e.removeChild(l),Ji(n);return}r--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")r++;else if(t==="html")Qa(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Qa(t);for(var o=t.firstChild;o;){var m=o.nextSibling,v=o.nodeName;o[Wn]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&o.rel.toLowerCase()==="stylesheet"||t.removeChild(o),o=m}}else t==="body"&&Qa(e.ownerDocument.body);t=l}while(t);Ji(n)}function Ap(e,n){var t=e;e=0;do{var r=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=r}while(t)}function cf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":cf(t),Wt(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Tg(e,n,t,r){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Wn])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Ut(e.nextSibling),e===null)break}return null}function jg(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ut(e.nextSibling),e===null))return null;return e}function Op(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ut(e.nextSibling),e===null))return null;return e}function uf(e){return e.data==="$?"||e.data==="$~"}function ff(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Mg(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var r=function(){n(),t.removeEventListener("DOMContentLoaded",r)};t.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ut(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var df=null;function Cp(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return Ut(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function Lp(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function Bp(e,n,t){switch(n=zo(t),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Qa(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Wt(e)}var Ht=new Map,zp=new Set;function Uo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Lr=re.d;re.d={f:Dg,r:Ag,D:Og,C:Cg,L:Lg,m:Bg,X:Ug,S:zg,M:Hg};function Dg(){var e=Lr.f(),n=jo();return e||n}function Ag(e){var n=tt(e);n!==null&&n.tag===5&&n.type==="form"?em(n):Lr.r(e)}var Qi=typeof document>"u"?null:document;function Up(e,n,t){var r=Qi;if(r&&typeof n=="string"&&n){var l=Fn(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),zp.has(l)||(zp.add(l),e={rel:e,crossOrigin:t,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Gn(n,"link",e),rn(n),r.head.appendChild(n)))}}function Og(e){Lr.D(e),Up("dns-prefetch",e,null)}function Cg(e,n){Lr.C(e,n),Up("preconnect",e,n)}function Lg(e,n,t){Lr.L(e,n,t);var r=Qi;if(r&&e&&n){var l='link[rel="preload"][as="'+Fn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+Fn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+Fn(t.imageSizes)+'"]')):l+='[href="'+Fn(e)+'"]';var o=l;switch(n){case"style":o=Zi(e);break;case"script":o=Wi(e)}Ht.has(o)||(e=E({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Ht.set(o,e),r.querySelector(l)!==null||n==="style"&&r.querySelector(Za(o))||n==="script"&&r.querySelector(Wa(o))||(n=r.createElement("link"),Gn(n,"link",e),rn(n),r.head.appendChild(n)))}}function Bg(e,n){Lr.m(e,n);var t=Qi;if(t&&e){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+Fn(r)+'"][href="'+Fn(e)+'"]',o=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Wi(e)}if(!Ht.has(o)&&(e=E({rel:"modulepreload",href:e},n),Ht.set(o,e),t.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Wa(o)))return}r=t.createElement("link"),Gn(r,"link",e),rn(r),t.head.appendChild(r)}}}function zg(e,n,t){Lr.S(e,n,t);var r=Qi;if(r&&e){var l=Jn(r).hoistableStyles,o=Zi(e);n=n||"default";var m=l.get(o);if(!m){var v={loading:0,preload:null};if(m=r.querySelector(Za(o)))v.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Ht.get(o))&&mf(e,t);var S=m=r.createElement("link");rn(S),Gn(S,"link",e),S._p=new Promise(function(C,Y){S.onload=C,S.onerror=Y}),S.addEventListener("load",function(){v.loading|=1}),S.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Ho(m,n,r)}m={type:"stylesheet",instance:m,count:1,state:v},l.set(o,m)}}}function Ug(e,n){Lr.X(e,n);var t=Qi;if(t&&e){var r=Jn(t).hoistableScripts,l=Wi(e),o=r.get(l);o||(o=t.querySelector(Wa(l)),o||(e=E({src:e,async:!0},n),(n=Ht.get(l))&&pf(e,n),o=t.createElement("script"),rn(o),Gn(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(l,o))}}function Hg(e,n){Lr.M(e,n);var t=Qi;if(t&&e){var r=Jn(t).hoistableScripts,l=Wi(e),o=r.get(l);o||(o=t.querySelector(Wa(l)),o||(e=E({src:e,async:!0,type:"module"},n),(n=Ht.get(l))&&pf(e,n),o=t.createElement("script"),rn(o),Gn(o,"link",e),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(l,o))}}function Hp(e,n,t,r){var l=(l=J.current)?Uo(l):null;if(!l)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Zi(t.href),t=Jn(l).hoistableStyles,r=t.get(n),r||(r={type:"style",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Zi(t.href);var o=Jn(l).hoistableStyles,m=o.get(e);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,m),(o=l.querySelector(Za(e)))&&!o._p&&(m.instance=o,m.state.loading=5),Ht.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Ht.set(e,t),o||Ig(l,e,t,m.state))),n&&r===null)throw Error(a(528,""));return m}if(n&&r!==null)throw Error(a(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Wi(t),t=Jn(l).hoistableScripts,r=t.get(n),r||(r={type:"script",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Zi(e){return'href="'+Fn(e)+'"'}function Za(e){return'link[rel="stylesheet"]['+e+"]"}function Ip(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Ig(e,n,t,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Gn(n,"link",t),rn(n),e.head.appendChild(n))}function Wi(e){return'[src="'+Fn(e)+'"]'}function Wa(e){return"script[async]"+e}function Gp(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Fn(t.href)+'"]');if(r)return n.instance=r,rn(r),r;var l=E({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),rn(r),Gn(r,"style",l),Ho(r,t.precedence,e),n.instance=r;case"stylesheet":l=Zi(t.href);var o=e.querySelector(Za(l));if(o)return n.state.loading|=4,n.instance=o,rn(o),o;r=Ip(t),(l=Ht.get(l))&&mf(r,l),o=(e.ownerDocument||e).createElement("link"),rn(o);var m=o;return m._p=new Promise(function(v,S){m.onload=v,m.onerror=S}),Gn(o,"link",r),n.state.loading|=4,Ho(o,t.precedence,e),n.instance=o;case"script":return o=Wi(t.src),(l=e.querySelector(Wa(o)))?(n.instance=l,rn(l),l):(r=t,(l=Ht.get(o))&&(r=E({},t),pf(r,l)),e=e.ownerDocument||e,l=e.createElement("script"),rn(l),Gn(l,"link",r),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Ho(r,t.precedence,e));return n.instance}function Ho(e,n,t){for(var r=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,o=l,m=0;m<r.length;m++){var v=r[m];if(v.dataset.precedence===n)o=v;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function mf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function pf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Io=null;function Vp(e,n,t){if(Io===null){var r=new Map,l=Io=new Map;l.set(t,r)}else l=Io,r=l.get(t),r||(r=new Map,l.set(t,r));if(r.has(e))return r;for(r.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var o=t[l];if(!(o[Wn]||o[pn]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var m=o.getAttribute(n)||"";m=e+m;var v=r.get(m);v?v.push(o):r.set(m,[o])}}return r}function Pp(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Gg(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Yp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Vg(e,n,t,r){if(t.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Zi(r.href),o=n.querySelector(Za(l));if(o){n=o._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Go.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=o,rn(o);return}o=n.ownerDocument||n,r=Ip(r),(l=Ht.get(l))&&mf(r,l),o=o.createElement("link"),rn(o);var m=o;m._p=new Promise(function(v,S){m.onload=v,m.onerror=S}),Gn(o,"link",r),t.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Go.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var hf=0;function Pg(e,n){return e.stylesheets&&e.count===0&&Po(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var r=setTimeout(function(){if(e.stylesheets&&Po(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+n);0<e.imgBytes&&hf===0&&(hf=62500*Eg());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Po(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>hf?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function Go(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Po(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vo=null;function Po(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vo=new Map,n.forEach(Yg,e),Vo=null,Go.call(e))}function Yg(e,n){if(!(n.state.loading&4)){var t=Vo.get(e);if(t)var r=t.get(null);else{t=new Map,Vo.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var m=l[o];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(t.set(m.dataset.precedence,m),r=m)}r&&t.set(null,r)}l=n.instance,m=l.getAttribute("data-precedence"),o=t.get(m)||r,o===r&&t.set(null,l),t.set(m,l),this.count++,r=Go.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var Ja={$$typeof:ae,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function Fg(e,n,t,r,l,o,m,v,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zt(0),this.hiddenUpdates=Zt(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function Fp(e,n,t,r,l,o,m,v,S,C,Y,X){return e=new Fg(e,n,t,m,S,C,Y,X,v),n=1,o===!0&&(n|=24),o=_t(3,null,null,n),e.current=o,o.stateNode=e,n=qc(),n.refCount++,e.pooledCache=n,n.refCount++,o.memoizedState={element:r,isDehydrated:t,cache:n},Zc(o),e}function $p(e){return e?(e=ji,e):ji}function qp(e,n,t,r,l,o){l=$p(l),r.context===null?r.context=l:r.pendingContext=l,r=ol(n),r.payload={element:t},o=o===void 0?null:o,o!==null&&(r.callback=o),t=cl(e,r,n),t!==null&&(ut(t,e,n),Da(t,e,n))}function Kp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function _f(e,n){Kp(e,n),(e=e.alternate)&&Kp(e,n)}function Xp(e){if(e.tag===13||e.tag===31){var n=Ql(e,67108864);n!==null&&ut(n,e,67108864),_f(e,67108864)}}function Qp(e){if(e.tag===13||e.tag===31){var n=xt();n=Vr(n);var t=Ql(e,n);t!==null&&ut(t,e,n),_f(e,n)}}var Yo=!0;function $g(e,n,t,r){var l=H.T;H.T=null;var o=re.p;try{re.p=2,gf(e,n,t,r)}finally{re.p=o,H.T=l}}function qg(e,n,t,r){var l=H.T;H.T=null;var o=re.p;try{re.p=8,gf(e,n,t,r)}finally{re.p=o,H.T=l}}function gf(e,n,t,r){if(Yo){var l=bf(r);if(l===null)tf(e,n,r,Fo,t),Wp(e,r);else if(Xg(l,e,n,t,r))r.stopPropagation();else if(Wp(e,r),n&4&&-1<Kg.indexOf(e)){for(;l!==null;){var o=tt(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var m=on(o.pendingLanes);if(m!==0){var v=o;for(v.pendingLanes|=2,v.entangledLanes|=2;m;){var S=1<<31-On(m);v.entanglements[1]|=S,m&=~S}ar(o),(Ye&6)===0&&(Ro=En()+500,qa(0))}}break;case 31:case 13:v=Ql(o,2),v!==null&&ut(v,o,2),jo(),_f(o,2)}if(o=bf(r),o===null&&tf(e,n,r,Fo,t),o===l)break;l=o}l!==null&&r.stopPropagation()}else tf(e,n,r,null,t)}}function bf(e){return e=_r(e),yf(e)}var Fo=null;function yf(e){if(Fo=null,e=Rt(e),e!==null){var n=h(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=b(n),e!==null)return e;e=null}else if(t===31){if(e=p(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Fo=e,null}function Zp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jl()){case Ml:return 2;case ua:return 8;case Dl:case Zn:return 32;case ft:return 268435456;default:return 32}default:return 32}}var vf=!1,vl=null,xl=null,wl=null,es=new Map,ns=new Map,El=[],Kg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Wp(e,n){switch(e){case"focusin":case"focusout":vl=null;break;case"dragenter":case"dragleave":xl=null;break;case"mouseover":case"mouseout":wl=null;break;case"pointerover":case"pointerout":es.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ns.delete(n.pointerId)}}function ts(e,n,t,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},n!==null&&(n=tt(n),n!==null&&Xp(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Xg(e,n,t,r,l){switch(n){case"focusin":return vl=ts(vl,e,n,t,r,l),!0;case"dragenter":return xl=ts(xl,e,n,t,r,l),!0;case"mouseover":return wl=ts(wl,e,n,t,r,l),!0;case"pointerover":var o=l.pointerId;return es.set(o,ts(es.get(o)||null,e,n,t,r,l)),!0;case"gotpointercapture":return o=l.pointerId,ns.set(o,ts(ns.get(o)||null,e,n,t,r,l)),!0}return!1}function Jp(e){var n=Rt(e.target);if(n!==null){var t=h(n);if(t!==null){if(n=t.tag,n===13){if(n=b(t),n!==null){e.blockedOn=n,fa(e.priority,function(){Qp(t)});return}}else if(n===31){if(n=p(t),n!==null){e.blockedOn=n,fa(e.priority,function(){Qp(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $o(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=bf(e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Kr=r,t.target.dispatchEvent(r),Kr=null}else return n=tt(t),n!==null&&Xp(n),e.blockedOn=t,!1;n.shift()}return!0}function eh(e,n,t){$o(e)&&t.delete(n)}function Qg(){vf=!1,vl!==null&&$o(vl)&&(vl=null),xl!==null&&$o(xl)&&(xl=null),wl!==null&&$o(wl)&&(wl=null),es.forEach(eh),ns.forEach(eh)}function qo(e,n){e.blockedOn===n&&(e.blockedOn=null,vf||(vf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Qg)))}var Ko=null;function nh(e){Ko!==e&&(Ko=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Ko===e&&(Ko=null);for(var n=0;n<e.length;n+=3){var t=e[n],r=e[n+1],l=e[n+2];if(typeof r!="function"){if(yf(r||t)===null)continue;break}var o=tt(t);o!==null&&(e.splice(n,3),n-=3,gu(o,{pending:!0,data:l,method:t.method,action:r},r,l))}}))}function Ji(e){function n(S){return qo(S,e)}vl!==null&&qo(vl,e),xl!==null&&qo(xl,e),wl!==null&&qo(wl,e),es.forEach(n),ns.forEach(n);for(var t=0;t<El.length;t++){var r=El[t];r.blockedOn===e&&(r.blockedOn=null)}for(;0<El.length&&(t=El[0],t.blockedOn===null);)Jp(t),t.blockedOn===null&&El.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(r=0;r<t.length;r+=3){var l=t[r],o=t[r+1],m=l[kn]||null;if(typeof o=="function")m||nh(t);else if(m){var v=null;if(o&&o.hasAttribute("formAction")){if(l=o,m=o[kn]||null)v=m.formAction;else if(yf(l)!==null)continue}else v=m.action;typeof v=="function"?t[r+1]=v:(t.splice(r,3),r-=3),nh(t)}}}function th(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(m){return l=m})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(t,20)}function t(){if(!r&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function xf(e){this._internalRoot=e}Xo.prototype.render=xf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var t=n.current,r=xt();qp(t,r,e,n,null,null)},Xo.prototype.unmount=xf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;qp(e.current,2,null,e,null,null),jo(),n[pt]=null}};function Xo(e){this._internalRoot=e}Xo.prototype.unstable_scheduleHydration=function(e){if(e){var n=cn();e={blockedOn:null,target:e,priority:n};for(var t=0;t<El.length&&n!==0&&n<El[t].priority;t++);El.splice(t,0,e),t===0&&Jp(e)}};var rh=i.version;if(rh!=="19.2.7")throw Error(a(527,rh,"19.2.7"));re.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=y(n),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var Zg={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qo.isDisabled&&Qo.supportsFiber)try{Al=Qo.inject(Zg),Sn=Qo}catch{}}return ls.createRoot=function(e,n){if(!f(e))throw Error(a(299));var t=!1,r="",l=um,o=fm,m=dm;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),n=Fp(e,1,!1,null,null,t,r,null,l,o,m,th),e[pt]=n.current,nf(e),new xf(n)},ls.hydrateRoot=function(e,n,t){if(!f(e))throw Error(a(299));var r=!1,l="",o=um,m=fm,v=dm,S=null;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(m=t.onCaughtError),t.onRecoverableError!==void 0&&(v=t.onRecoverableError),t.formState!==void 0&&(S=t.formState)),n=Fp(e,1,!0,n,t??null,r,l,S,o,m,v,th),n.context=$p(null),t=n.current,r=xt(),r=Vr(r),l=ol(r),l.callback=null,cl(t,l,r),t=r,n.current.lanes=t,Cl(n,t),ar(n),e[pt]=n.current,nf(e),new Xo(n)},ls.version="19.2.7",ls}var mh;function cb(){if(mh)return Sf.exports;mh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),Sf.exports=ob(),Sf.exports}var ub=cb();const fb=c_(ub),ph=s=>{let i;const c=new Set,a=(y,w)=>{const E=typeof y=="function"?y(i):y;if(!Object.is(E,i)){const R=i;i=w??(typeof E!="object"||E===null)?E:Object.assign({},i,E),c.forEach(D=>D(i,R))}},f=()=>i,p={setState:a,getState:f,getInitialState:()=>g,subscribe:y=>(c.add(y),()=>c.delete(y))},g=i=s(a,f,p);return p},db=(s=>s?ph(s):ph),mb=s=>s;function pb(s,i=mb){const c=ds.useSyncExternalStore(s.subscribe,ds.useCallback(()=>i(s.getState()),[s,i]),ds.useCallback(()=>i(s.getInitialState()),[s,i]));return ds.useDebugValue(c),c}const hh=s=>{const i=db(s),c=a=>pb(i,a);return Object.assign(c,i),c},hb=(s=>s?hh(s):hh);function _b(){const s=new Uint8Array(16);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(s);else for(let c=0;c<s.length;c+=1)s[c]=Math.floor(Math.random()*256);let i="";for(const c of s)i+=c.toString(16).padStart(2,"0");return i}const Zf="pkp.user",Wf="pkp.savedDevices",Jf="pkp.ideDrafts",ed="pkp.ideSettings",hs="Prototype Version 0.6.7";function dc(s){try{const i=localStorage.getItem(s);return i?JSON.parse(i):null}catch{return null}}function mc(s,i){try{localStorage.setItem(s,JSON.stringify(i))}catch{}}function gb(){const s=dc(Zf);return s&&typeof s.username=="string"&&typeof s.userID=="string"?s:null}function Tf(s){mc(Zf,s)}function sc(){return dc(Wf)??[]}function ra(s){mc(Wf,s)}function bb(){ra([])}function yb(){try{localStorage.removeItem(Zf),localStorage.removeItem(Wf),localStorage.removeItem(Jf),localStorage.removeItem(ed)}catch{}}function Zo(){var s;return((s=dc(Jf))==null?void 0:s.filter(i=>i.path&&typeof i.content=="string"))??[]}function is(s){mc(Jf,s)}function _h(){const s=dc(ed)??{};return{clearTerminalOnRun:!!s.clearTerminalOnRun,simplifiedErrors:s.simplifiedErrors!==!1}}function vb(s){mc(ed,s)}function jf(s){const i=sc(),c=i.findIndex(a=>a.deviceID===s.deviceID);return c>=0?i[c]=s:i.push(s),ra(i),i}function xb(s){const i=sc().filter(c=>c.deviceID!==s);return ra(i),i}const Gf="b8e06067-62ad-41ba-9231-206ae80ab551",wb="f897177b-aee8-4767-8ecc-cc694fd5fce0",Eb="f897177b-aee8-4767-8ecc-cc694fd5fce1",Mf=20,Sb=12,kb=new TextEncoder,Nb=new TextDecoder;function Rb(s){return new Promise(i=>setTimeout(i,s))}function pc(){return typeof navigator<"u"&&"bluetooth"in navigator}function u_(s){return s?s.startsWith("PicoW-")?s.slice(6):s:"Pico"}async function Tb(){if(!pc())throw new Error("Web Bluetooth er ikke tilgængelig i denne browser.");return navigator.bluetooth.requestDevice({filters:[{services:[Gf]},{namePrefix:"PicoW-"}],optionalServices:[Gf]})}async function f_(){if(!pc()||!navigator.bluetooth.getDevices)return[];try{return await navigator.bluetooth.getDevices()}catch{return[]}}class jb{constructor(){me(this,"device",null);me(this,"writeChar",null);me(this,"notifyChar",null);me(this,"buffer","");me(this,"writeQueue",Promise.resolve());me(this,"disconnectNotified",!1);me(this,"onLine",()=>{});me(this,"onDisconnect",()=>{});me(this,"handleNotification",i=>{const c=i.target;if(!(c!=null&&c.value))return;this.buffer+=Nb.decode(c.value.buffer);let a=this.buffer.indexOf(`
`);for(;a>=0;){const f=this.buffer.slice(0,a).trim();this.buffer=this.buffer.slice(a+1),f&&this.onLine(f),a=this.buffer.indexOf(`
`)}});me(this,"handleDisconnected",()=>{var i;this.disconnectNotified||(this.disconnectNotified=!0,(i=this.device)==null||i.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.writeChar=null,this.notifyChar=null,this.onDisconnect())})}get connected(){var i,c;return!!((c=(i=this.device)==null?void 0:i.gatt)!=null&&c.connected)}async connect(i){var f;this.device&&this.device!==i&&this.device.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.device=i,this.buffer="",this.disconnectNotified=!1,i.removeEventListener("gattserverdisconnected",this.handleDisconnected),i.addEventListener("gattserverdisconnected",this.handleDisconnected);const c=await((f=i.gatt)==null?void 0:f.connect());if(!c)throw new Error("Kunne ikke åbne Bluetooth-forbindelsen.");const a=await c.getPrimaryService(Gf);this.writeChar=await a.getCharacteristic(wb),this.notifyChar=await a.getCharacteristic(Eb),await this.notifyChar.startNotifications(),this.notifyChar.addEventListener("characteristicvaluechanged",this.handleNotification)}writeLine(i){const c=this.writeQueue.then(()=>this.doWrite(i));return this.writeQueue=c.catch(()=>{}),c}async doWrite(i){if(!this.writeChar)throw new Error("Ingen forbindelse.");const c=kb.encode(`${i}
`),f=this.writeChar.properties.writeWithoutResponse&&typeof this.writeChar.writeValueWithoutResponse=="function"?this.writeChar.writeValueWithoutResponse.bind(this.writeChar):this.writeChar.writeValue.bind(this.writeChar);for(let h=0;h<c.length;h+=Mf){const b=c.slice(h,h+Mf);await f(b),h+Mf<c.length&&await Rb(Sb)}}disconnect(){var c;const i=this.device;(c=i==null?void 0:i.gatt)!=null&&c.connected?i.gatt.disconnect():this.handleDisconnected()}}class Mb{constructor(i,c){me(this,"send");me(this,"onMessage");me(this,"inActive",!1);me(this,"inExpectedTotal",0);me(this,"inStreamId",0);me(this,"inParts",new Map);me(this,"inProgress",null);me(this,"outPendingLines",null);me(this,"outWaitingAck",!1);me(this,"outStreamId",0);me(this,"outNextStreamId",1);me(this,"outCache",new Map);me(this,"outProgress",null);me(this,"outResolve",null);me(this,"outReject",null);this.send=i,this.onMessage=c}reset(){this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear(),this.inProgress=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outStreamId=0,this.outCache.clear(),this.outProgress=null,this.outResolve=null,this.outReject=null}handleLine(i){var a;if(i.startsWith("prep,")){const f=i.split(","),h=f.length>=2&&/^\d+$/.test(f[1])?parseInt(f[1],10):null,b=f.length>=3&&/^\d+$/.test(f[2])?parseInt(f[2],10):0;h!==null&&h>0&&(this.inActive=!0,this.inExpectedTotal=h,this.inStreamId=b,this.inParts.clear(),this.send(b>0?`ack:prep,${b}`:"ack:prep"));return}if(i==="ack:prep"||i===`ack:prep,${this.outStreamId}`){this.flushOutbound();return}if(i.startsWith("miss,")){const f=i.split(",");if(f.length>=3&&/^\d+$/.test(f[1])&&/^\d+$/.test(f[2])){const h=parseInt(f[1],10),b=parseInt(f[2],10),p=this.outCache.get(b);h===this.outStreamId&&p&&this.send(p)}return}const c=this.parseNumbered(i);if(c){const{idx:f,payload:h}=c;if(!this.inActive){this.onMessage(h);return}this.inParts.has(f)||(this.inParts.set(f,h),(a=this.inProgress)==null||a.call(this,this.inParts.size,this.inExpectedTotal));let b=0;for(let p=1;p<=this.inExpectedTotal;p+=1)if(!this.inParts.has(p)){b=p;break}if(b>0&&this.inStreamId>0&&f>b&&this.send(`miss,${this.inStreamId},${b}`),this.inParts.size>=this.inExpectedTotal){for(let p=1;p<=this.inExpectedTotal;p+=1){const g=this.inParts.get(p);g!==void 0&&this.onMessage(g)}this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear()}return}this.onMessage(i)}setInboundProgress(i){this.inProgress=i}async sendReliable(i,c){if(this.outPendingLines!==null||this.outWaitingAck)throw new Error("Reliable stream is already sending.");const a=i.length===0?[""]:i;this.outPendingLines=[...a],this.outWaitingAck=!0,this.outProgress=c??null,this.outStreamId=this.outNextStreamId,this.outNextStreamId+=1,this.outCache.clear();const f=new Promise((h,b)=>{this.outResolve=h,this.outReject=b});try{await this.send(`prep,${a.length},${this.outStreamId}`)}catch(h){throw this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null,h}await f}async flushOutbound(){var i,c,a,f;if(!this.outWaitingAck||this.outPendingLines===null){this.outWaitingAck=!1,this.outProgress=null,(i=this.outResolve)==null||i.call(this),this.outResolve=null,this.outReject=null;return}try{const h=this.outPendingLines.length;for(let b=0;b<h;b+=1){const p=this.outPendingLines[b],g=`${b+1}-${p}`;this.outCache.set(b+1,g),await this.send(g),(c=this.outProgress)==null||c.call(this,b+1,h,p)}(a=this.outResolve)==null||a.call(this)}catch(h){(f=this.outReject)==null||f.call(this,h)}finally{this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null}}parseNumbered(i){const c=i.indexOf("-");if(c<=0)return null;const a=i.slice(0,c);if(!/^\d+$/.test(a))return null;const f=parseInt(a,10);return f<1?null:{idx:f,payload:i.slice(c+1)}}}const sa=11,_s=31,Db=2,Ab=60,la=4,ia=40;function Ob(s,i){return Math.max(14,Math.min(56,Math.min(s,i)*.05))}function d_(s,i,c=sa,a=_s){const f=Ob(s,i),h=Math.max(1,s-2*f),b=Math.max(1,i-2*f);return{areaW:s,areaH:i,cols:c,rows:a,margin:f,stepX:h/Math.max(1,c-1),stepY:b/Math.max(1,a-1)}}function m_(s,i){return i.margin+s/2*i.stepX}function p_(s,i){const c=i.margin+s/2*i.stepY;return i.areaH-c}function ms(s,i){return s.centerX2===null||s.centerY2===null||s.spanX===null||s.spanY===null?null:{cx:m_(s.centerX2,i),cy:p_(s.centerY2,i),width:s.spanX*i.stepX,height:s.spanY*i.stepY}}function Cb(s){const i=[];for(let c=0;c<s.cols;c+=1)for(let a=0;a<s.rows;a+=1)i.push({x:s.margin+c*s.stepX,y:s.areaH-(s.margin+a*s.stepY)});return i}function tc(s,i,c,a,f){const h=(g,y,w,E)=>{const R=y%2,D=E*2;let U=R,K=1/0;for(let F=R;F<=D;F+=2){const V=Math.abs(w(F)-g);V<K&&(K=V,U=F)}return Math.max(y,Math.min(D-y,U))},b=h(s,c,g=>m_(g,f),f.cols-1),p=h(i,a,g=>p_(g,f),f.rows-1);return{centerX2:b,centerY2:p}}const ui=6e3,Lb=15,Bb="",oc=[32,64,128,192],zb=ui*10,Ub=3500,Hb=8e3,Ib=2,Gb=ui,Vb=ui*8;function Df(s){return new Promise(i=>setTimeout(i,s))}function ea(s){if(s!=null&&s.aborted)throw new DOMException("BLE file read cancelled","AbortError")}function gh(s){return s instanceof DOMException&&s.name==="AbortError"}function kl(s){return s.replace(/[\r\n,]/g," ").trim()}class Pb{constructor(i={}){me(this,"transport",new jb);me(this,"stream");me(this,"events");me(this,"waiters",[]);me(this,"collectingLayout",!1);me(this,"layoutBuffer",[]);me(this,"layoutResolve",null);me(this,"collectingLines",!1);me(this,"lineBuffer",[]);me(this,"lineResolve",null);me(this,"lineReject",null);me(this,"lineCollectId",0);me(this,"controlPumpActive",!1);me(this,"pendingButtons",[]);me(this,"pendingSliders",new Map);me(this,"pendingToggles",new Map);me(this,"pendingJoysticks",new Map);me(this,"pendingDpads",[]);me(this,"expectingDisconnect",!1);me(this,"disconnectMessage",null);me(this,"busy",!1);me(this,"fsCapabilities",null);this.events=i,this.stream=new Mb(c=>this.transport.writeLine(c),c=>this.onDeviceMessage(c)),this.transport.onLine=c=>this.stream.handleLine(c),this.transport.onDisconnect=()=>this.handleDisconnect()}get device(){return this.transport.device}get deviceName(){var i;return u_((i=this.transport.device)==null?void 0:i.name)}get connected(){return this.transport.connected}setBusy(i){if(this.busy=i,i){this.pendingButtons=[],this.pendingSliders.clear(),this.pendingToggles.clear(),this.pendingJoysticks.clear(),this.pendingDpads=[];return}this.pumpControls()}log(i,c){var a,f;(f=(a=this.events).onLog)==null||f.call(a,i,c)}progress(i,c){var a,f;(f=(a=this.events).onProgress)==null||f.call(a,i,c)}onDeviceMessage(i){var a,f;if(i==="disconnect"||i==="disconnect_private"){const h=i==="disconnect_private"?"Du blev afbrudt, fordi enheden er privat, og andre brugere ikke må forbinde.":"Enheden afbrød forbindelsen.";this.disconnectMessage=h,this.log("warning",h),this.expectingDisconnect=!0,this.transport.disconnect();return}if(this.collectingLines){if(i==="__END__"){const h=this.lineBuffer;this.lineBuffer=[],this.collectingLines=!1,(a=this.lineResolve)==null||a.call(this,h),this.lineResolve=null;return}this.lineBuffer.push(i);return}if(this.collectingLayout){if(i==="__END__"){const h=this.layoutBuffer;this.layoutBuffer=[],this.collectingLayout=!1,(f=this.layoutResolve)==null||f.call(this,h),this.layoutResolve=null;return}!i.startsWith("ACK")&&!i.startsWith("ERR")&&!i.startsWith("#VERSION")?this.layoutBuffer.push(i):i.startsWith("#VERSION")&&this.layoutBuffer.push(i);return}i.startsWith("ERR")?this.log("error",i):i.startsWith("radar,")?this.handleRadarLine(i):i.startsWith("text,")?this.handleTextLine(i):i.startsWith("toggle_state,")?this.handleToggleStateLine(i):i.startsWith("ACK")||i==="LAYOUT_SAVED"||i.startsWith("READY")?this.log("success",i):this.log("info",`rx: ${i}`);const c=this.waiters.findIndex(h=>h.match(i));if(c>=0){const h=this.waiters[c];this.waiters.splice(c,1),clearTimeout(h.timer),h.resolve(i)}}waitFor(i,c,a){return new Promise((f,h)=>{const b=setTimeout(()=>{const p=this.waiters.findIndex(g=>g.timer===b);p>=0&&this.waiters.splice(p,1),h(new Error(`Timeout: ${a}`))},c);this.waiters.push({match:i,resolve:f,reject:h,timer:b})})}async collectLines(i,c,a,f,h){ea(f);const b=this.lineCollectId+1;this.lineCollectId=b,this.collectingLines=!0,this.lineBuffer=[],this.stream.setInboundProgress(h??null);const p=new Promise((g,y)=>{let w=!1;const E=()=>this.lineCollectId===b,R=()=>{w=!0,E()&&(this.lineReject=null,this.stream.setInboundProgress(null)),f==null||f.removeEventListener("abort",U)},D=V=>{w||(clearTimeout(K),E()&&(this.collectingLines=!1,this.lineBuffer=[],this.lineResolve=null),R(),y(V))},U=()=>{D(new DOMException("BLE file read cancelled","AbortError"))},K=setTimeout(()=>{E()&&D(new Error(`Timeout: ${a}`))},c);this.lineResolve=g,this.lineReject=D;const F=this.lineResolve;this.lineResolve=V=>{E()&&(clearTimeout(K),R(),F==null||F(V))},f==null||f.addEventListener("abort",U,{once:!0})});return await this.transport.writeLine(i),p}async exchange(i,c,a,f=3){let h;for(let b=1;b<=f;b+=1)try{return await this.transport.writeLine(i),await this.waitFor(c,ui,a)}catch(p){h=p,this.log("warning",`${a}: forsøg ${b}/${f} mislykkedes`)}throw h instanceof Error?h:new Error(`Failed: ${a}`)}async connect(i){this.expectingDisconnect=!1,this.stream.reset(),this.progress(5,"Forbinder til Bluetooth..."),await this.transport.connect(i)}async runHandshake(i){var se,oe,he;await Df(350),this.progress(18,"Klargør forbindelse..."),this.progress(26,"Sender HELLO..."),await this.exchange("HELLO",te=>te==="ACK:HELLO","HELLO"),this.progress(34,"Forbindelse bekræftet"),this.progress(44,"Spørger om ejerskab...");const c=await this.exchange("who_are_you",te=>te==="unowned"||te.startsWith("unowned,")||te.startsWith("owned,"),"who_are_you");if(this.progress(56,"Ejerskab modtaget"),c==="unowned"||c.startsWith("unowned,"))return{kind:"unowned",deviceName:((se=c.split(",")[1])==null?void 0:se.trim())||void 0};const a=c.split(","),f=a[1]??"",h=a[2]!==void 0&&parseInt(a[2],10)||0,b=a[3]!==void 0?parseInt(a[3],10)===1:!0,p=a[4]!==void 0?parseInt(a[4],10)===1:!1,g=a.length>=7,y=g?parseInt(a[5]??"0",10)===1:p,w=((oe=a[g?6:5])==null?void 0:oe.trim())||void 0,E=((he=a[g?7:6])==null?void 0:he.trim())||void 0;await this.exchange("ACK:ownership",te=>te==="READY:permission","ACK:ownership",1),this.progress(66,"Anmoder om adgang...");const R=await this.exchange(`request_permission,${i.userID},${kl(i.username)}`,te=>te.startsWith("perm,"),"request_permission");this.progress(76,"Adgang vurderet");const D=R.split(",").filter(te=>/^\d+$/.test(te)),U=D.length>=1?parseInt(D[0]??"0",10):0,K=D.length>=2?parseInt(D[1]??"0",10):0,F=D.length>=3?parseInt(D[2]??"0",10):K;if(U===0)return this.expectingDisconnect=!0,this.disconnectMessage="Du kan ikke forbinde, fordi enheden er privat, og andre brugere ikke må forbinde.",{kind:"denied",ownerName:w,canOthersConnect:b};const V=i.userID===f,G=K===1||V,ae=F===1||V;return await this.transport.writeLine("ACK:permission"),{kind:"owned",ownerID:f,ownerName:w,deviceName:E,iconID:h,canEdit:G,canEditCode:ae,isOwnedByMe:V,canOthersConnect:b,canOthersEdit:p,canOthersEditCode:y}}async create(i,c,a,f,h,b,p){const g=a?1:0,y=a&&f?1:0,w=a&&h?1:0;await this.exchange(`create,${i.userID},${kl(i.username)},${c},${g},${y},${w},${b},${p}`,E=>E==="ACK:create","create")}async updateDeviceSettings(i,c,a,f,h,b,p){const g=c?1:0,y=c&&a?1:0,w=c&&f?1:0;await this.exchange(`settings_update,${i},${g},${y},${w},${h},${b},${kl(p??"")}`,E=>E==="ACK:settings_update","settings_update",3)}async requestLayout(){this.progress(84,"Henter kontrolpanel..."),this.collectingLayout=!0,this.layoutBuffer=[];const i=new Promise((a,f)=>{this.layoutResolve=a;const h=setTimeout(()=>{this.collectingLayout&&(this.collectingLayout=!1,this.layoutResolve=null,f(new Error("Timeout: layout")))},ui*2),b=this.layoutResolve;this.layoutResolve=p=>{clearTimeout(h),b==null||b(p)}});await this.transport.writeLine("request"),this.progress(92,"Modtager kontrolpanel...");const c=await i;return this.progress(100,"Klar"),c}async saveLayout(i){await this.exchange("update",f=>f==="ACK:update","update",3).catch(()=>{this.log("warning","ACK:update udeblev (fortsætter).")});const c=i.map(f=>{const h=p=>p===null?"n":String(p),b=`update,${f.type},${f.name},${h(f.centerX2)},${h(f.centerY2)},${h(f.spanX)},${h(f.spanY)},${f.rotation}`;return f.type==="slider"?`${b},${f.sliderMin??0},${f.sliderMax??100},${f.sliderRecenter??"none"}`:f.type==="toggle"?`${b},${f.toggleInitial?1:0}`:f.type==="radar"?[b,f.radarMinAngle??0,f.radarMaxAngle??180,f.radarMaxDistance??200,f.radarFadeMs??1200].join(","):f.type==="joystick"?[b,f.joystickXMin??-100,f.joystickXMax??100,f.joystickYMin??-100,f.joystickYMax??100,f.joystickXRecenter??"middle",f.joystickYRecenter??"middle"].join(","):b});c.push("__END__");const a=this.waitFor(f=>f==="LAYOUT_SAVED",ui*2,"LAYOUT_SAVED");await this.stream.sendReliable(c),await a}async listFiles(i="/"){return(await this.collectLines(`fs_list,${kl(i)}`,ui*3,"fs_list")).filter(a=>a.startsWith("fs_entry,")).map(a=>{const[,f,h,b]=a.split(","),p=f==="file"||f==="dir"?f:"unknown",g=parseInt(b??"",10),y=h||"/";return{name:y.split("/").filter(Boolean).pop()??y,path:y,type:p,...Number.isFinite(g)&&g>=0?{size:g}:{}}})}handleRadarLine(i){var b,p,g;const c=i.split(",");if(c.length<4)return;const a=(b=c[1])==null?void 0:b.trim(),f=parseFloat(c[2]??""),h=parseFloat(c[3]??"");!a||!Number.isFinite(f)||!Number.isFinite(h)||((g=(p=this.events).onRadar)==null||g.call(p,a,f,h),this.log("info",`rx: ${i}`))}handleTextLine(i){var g,y;const c=i.indexOf(","),a=c>=0?i.indexOf(",",c+1):-1;if(c<0||a<0)return;const f=i.slice(c+1,a),h=i.slice(a+1),b=f==null?void 0:f.trim();if(!b)return;const p=h.split(Bb).join(`
`);(y=(g=this.events).onText)==null||y.call(g,b,p),this.log("info",`rx: ${i}`)}handleToggleStateLine(i){var h,b,p;const c=i.split(",");if(c.length<3)return;const a=(h=c[1])==null?void 0:h.trim(),f=parseInt(c[2]??"",10);!a||!Number.isFinite(f)||((p=(b=this.events).onToggleState)==null||p.call(b,a,f===1),this.log("info",`rx: ${i}`))}async readText(i,c,a){c==null||c(4,"Validerer Picoens Bluetooth-filsystem...");const f=await this.getFilesystemCapabilities(a);if(f.streamRead)try{return await this.readTextStream(i,f,c,a)}catch(h){if(a!=null&&a.aborted||gh(h)||!f.pageRead)throw h;this.log("warning",h instanceof Error?`fs_read_stream fejlede; bruger paged read: ${h.message}`:"fs_read_stream fejlede; bruger paged read")}return this.readTextPaged(i,c,a)}async getFilesystemCapabilities(i){if(this.fsCapabilities)return this.fsCapabilities;const c=await this.collectLines("fs_capabilities",Gb,"fs_capabilities",i),a=c.find(w=>w.startsWith("ERR"));if(a)throw new Error(a);const f=c.find(w=>w.startsWith("fs_capabilities,"));if(!f)throw new Error("Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.");const h=f.split(","),b=new Map;for(let w=1;w<h.length-1;w+=2)b.set(h[w],h[w+1]);const p=parseInt(b.get("max_page")??"",10),g=parseInt(b.get("stream_chunk")??"",10),y={version:b.get("version")||void 0,pageRead:b.get("page_read")==="1",maxPageSize:Number.isFinite(p)&&p>0?p:32,streamRead:b.get("stream_read")==="1",streamChunkSize:Number.isFinite(g)&&g>0?g:128};if(!y.pageRead&&!y.streamRead)throw new Error("Picoens Bluetooth-runtime meldte, at file-read ikke er understøttet.");return this.fsCapabilities=y,y}async readTextPaged(i,c,a){const f=await this.getFilesystemCapabilities(a);let h=0,b=Yb(f.maxPageSize),p=0,g=null,y="";const w=`Indlæser ${Af(i)}...`;ea(a),c==null||c(5,w);for(let E=0;E<512;E+=1){ea(a),p===0&&(c==null||c(7,w));const D=await this.readPageWithRetry(i,p,h,b,a),U=D.lines;h=D.nextPageSizeIndex,b=D.maxPageSizeIndex,ea(a);const K=U.find(ee=>ee.startsWith("ERR"));if(K)throw new Error(K);const F=U.find(ee=>ee.startsWith("fs_page,"));if(!F)throw new Error("ERR: fs_read_page missing data");const[,V,G,ae,se=""]=F.split(",",5);if(V!==i)throw new Error("ERR: fs_read_page stale data");const oe=parseInt(G??"",10),he=parseInt(ae??"",10);if(!Number.isFinite(oe)||oe!==p||!Number.isFinite(he))throw new Error("ERR: fs_read_page invalid data");g=he,y+=se,p+=Math.floor(se.length/2);const te=g>0?8+Math.min(87,Math.round(p/g*87)):95;if(c==null||c(te,w),p>=g||se.length===0)return c==null||c(100,"Fil indlæst fra Pico"),new TextDecoder().decode(yh(y))}throw new Error("ERR: fs_read_page too many pages")}async readPageWithRetry(i,c,a,f,h){let b,p=Math.min(a,f);for(;p>=0;){const g=oc[p],y=p===0?Ib:1,w=p===0?Hb:Ub;for(let E=1;E<=y;E+=1){ea(h);try{return{lines:await this.collectLines(`fs_read_page,${kl(i)},${c},${g}`,w,`fs_read_page ${c}`,h),nextPageSizeIndex:Math.min(p+1,f),maxPageSizeIndex:f}}catch(R){if(h!=null&&h.aborted||gh(R))throw R;if(b=R,E<y||p>0){const U=p>0&&E>=y?oc[p-1]:g;this.log("warning",`fs_read_page ${c} (${g} bytes) fejlede; prøver ${U} bytes`),await Df(80+E*80)}}}if(p===0)break;f=Math.max(0,p-1),p=f}throw b instanceof Error?b:new Error(`Timeout: fs_read_page ${c}`)}async readTextStream(i,c,a,f){const h=`Indlæser ${Af(i)}...`,b=Math.max(16,Math.min(192,c.streamChunkSize||128));a==null||a(5,h);const p=await this.collectLines(`fs_read_stream,${kl(i)},${b}`,Vb,`fs_read_stream ${i}`,f,(te,ee)=>{const Re=8+Math.round(Math.min(te,ee)/Math.max(1,ee)*87);a==null||a(Math.min(95,Re),h)});ea(f);const g=p.find(te=>te.startsWith("ERR"));if(g)throw new Error(g);const y=p.find(te=>te.startsWith("fs_stream_begin,")),w=p.find(te=>te.startsWith("fs_stream_end,"));if(!y||!w)throw new Error("ERR: fs_read_stream missing metadata");const[,E,R]=y.split(",",4),[,D,U,K]=w.split(",",4),F=parseInt(R??"",10),V=parseInt(U??"",10),G=parseInt(K??"",10);if(E!==i||D!==i||!Number.isFinite(F)||F!==V||!Number.isFinite(G))throw new Error("ERR: fs_read_stream invalid metadata");let ae=0,se="";for(const te of p){if(!te.startsWith("fs_stream_chunk,"))continue;const[,ee,Re=""]=te.split(",",3),ve=parseInt(ee??"",10);if(!Number.isFinite(ve)||ve!==ae||Re.length%2!==0)throw new Error("ERR: fs_read_stream invalid chunk");se+=Re,ae+=Math.floor(Re.length/2)}if(ae!==F)throw new Error("ERR: fs_read_stream size mismatch");const oe=yh(se);if(bh(oe)!==G)throw new Error("ERR: fs_read_stream checksum mismatch");return a==null||a(100,"Fil indlæst fra Pico"),new TextDecoder().decode(oe)}async writeText(i,c,a){a==null||a(5,"Klargør BLE-overførsel..."),await this.exchange(`fs_write_begin,${kl(i)}`,w=>w==="ACK:fs_write_begin","fs_write_begin",2),a==null||a(18,"Pico er klar til filen...");const f=new TextEncoder().encode(c),h=[...f].map(w=>w.toString(16).padStart(2,"0")).join(""),b=[];for(let w=0;w<h.length;w+=160)b.push(`fs_write_chunk,${h.slice(w,w+160)}`);b.push("fs_write_end");const p=bh(f),g=this.waitFor(w=>w==="ACK:fs_write_done"||w.startsWith("ACK:fs_write_done,")||w.startsWith("ERR"),zb,"fs_write_done");a==null||a(f.length===0?85:18,f.length===0?"Sender tom fil via Bluetooth...":`Sender 0/${f.length} bytes via Bluetooth...`),await this.stream.sendReliable(b,(w,E,R)=>{if(!R.startsWith("fs_write_chunk,"))return;const D=Math.min(f.length,w*80),U=18+Math.round(w/Math.max(1,E-1)*67);a==null||a(Math.min(85,U),`Sender ${D}/${f.length} bytes via Bluetooth...`)}),a==null||a(90,"Verificerer BLE-fil...");const y=await g;if(y.startsWith("ERR"))throw new Error(y);if(y.startsWith("ACK:fs_write_done,")){const[,w,E]=y.split(",",3),R=parseInt(w??"",10),D=parseInt(E??"",10);if(R!==f.length||D!==p)throw new Error(`ERR: BLE-verificering fejlede for ${Af(i)}.`)}a==null||a(100,"Gemt på Pico")}async deleteFile(i){const c=await this.exchange(`fs_delete,${kl(i)}`,a=>a==="ACK:fs_delete"||a.startsWith("ERR"),"fs_delete",2);if(c.startsWith("ERR"))throw new Error(c)}async restart(){await this.exchange("restart",i=>i==="ACK:restart"||i.startsWith("ERR"),"restart",1).catch(()=>{}),this.expectingDisconnect=!0}enqueueButton(i,c){this.busy||(this.pendingButtons.push(`button,${i}:${c?"down":"up"}`),this.pumpControls())}enqueueSlider(i,c){this.busy||(this.pendingSliders.set(i,`slider,${i}:${c}`),this.pumpControls())}enqueueToggle(i,c){this.busy||(this.pendingToggles.set(i,`toggle,${i}:${c?1:0}`),this.pumpControls())}enqueueJoystick(i,c,a){this.busy||(this.pendingJoysticks.set(i,`joystick,${i}:${Math.round(c)},${Math.round(a)}`),this.pumpControls())}enqueueDpad(i,c,a){this.busy||(this.pendingDpads.push(`dpad,${i}:${c},${a?"down":"up"}`),this.pumpControls())}pumpControls(){this.controlPumpActive||this.busy||!this.transport.connected||(this.controlPumpActive=!0,this.drainControls())}async drainControls(){try{for(;!this.busy&&this.transport.connected;){const i=this.nextControlLine();if(!i)break;await this.transport.writeLine(i),this.log("info",`tx: ${i}`),await Df(Lb)}}catch(i){this.log("error",i instanceof Error?i.message:"Kunne ikke sende kommando."),this.handleDisconnect()}finally{this.controlPumpActive=!1,!this.busy&&this.transport.connected&&this.hasPendingControls()&&this.pumpControls()}}nextControlLine(){const i=this.pendingButtons.shift();if(i)return i;const c=this.pendingDpads.shift();if(c)return c;const a=this.pendingSliders.entries().next();if(!a.done){const[b,p]=a.value;return this.pendingSliders.delete(b),p}const f=this.pendingToggles.entries().next();if(!f.done){const[b,p]=f.value;return this.pendingToggles.delete(b),p}const h=this.pendingJoysticks.entries().next();if(!h.done){const[b,p]=h.value;return this.pendingJoysticks.delete(b),p}return null}hasPendingControls(){return this.pendingButtons.length>0||this.pendingDpads.length>0||this.pendingSliders.size>0||this.pendingToggles.size>0||this.pendingJoysticks.size>0}async disconnect(){if(!this.transport.connected){this.handleDisconnect();return}this.expectingDisconnect=!0;try{await this.exchange("disconnect",i=>i==="ACK:disconnect","disconnect",1)}catch{}this.transport.disconnect()}handleDisconnect(){var c,a,f;for(const h of this.waiters)clearTimeout(h.timer),h.reject(new Error("Forbindelsen blev afbrudt."));this.waiters=[],this.collectingLayout=!1,this.layoutResolve=null,(c=this.lineReject)==null||c.call(this,new Error("Forbindelsen blev afbrudt.")),this.collectingLines=!1,this.lineResolve=null,this.lineReject=null,this.fsCapabilities=null,this.stream.reset();const i=this.disconnectMessage??void 0;this.disconnectMessage=null,(f=(a=this.events).onDisconnect)==null||f.call(a,i)}}function Yb(s){let i=0;for(let c=0;c<oc.length;c+=1)oc[c]<=s&&(i=c);return i}function Af(s){return s.replace(/\\/g,"/").replace(/^\/+/,"")||s}function bh(s){let i=0;for(const c of s)i=i+c>>>0;return i}function yh(s){const i=new Uint8Array(Math.floor(s.length/2));for(let c=0;c<i.length;c+=1)i[c]=parseInt(s.slice(c*2,c*2+2),16);return i}function vh(s){const i=(c,a)=>Number.isFinite(c)?Math.max(Db,Math.min(Ab,c)):a;for(const c of s){const a=c.trim();if(a.startsWith("#GRID,")){const f=a.split(","),h=i(parseInt(f[1],10),sa),b=i(parseInt(f[2],10),_s);return{cols:h,rows:b}}}return{cols:sa,rows:_s}}function xh(s){const i=new Map;for(const c of s){const a=c.trim();if(!a||a.startsWith("#VERSION")||a==="__END__")continue;const f=a.split(",");if(f.length<7)continue;const[h,b,p,g,y,w,E,R,D,U,K,F,V]=f;if(h!=="button"&&h!=="slider"&&h!=="toggle"&&h!=="radar"&&h!=="text"&&h!=="joystick"&&h!=="dpad"||i.has(b))continue;const G=re=>{if(re==="n")return null;const ue=parseInt(re,10);return Number.isNaN(ue)?null:ue},ae=parseInt(E,10)||0,se=R!==void 0?parseInt(R,10):0,oe=D!==void 0?parseInt(D,10):100,he=["none","bottom","middle","top"].includes(U??"")?U:"none",te=R!==void 0?parseInt(R,10)===1:!1,ee=R!==void 0?parseFloat(R):0,Re=D!==void 0?parseFloat(D):180,ve=U!==void 0?parseFloat(U):200,we=K!==void 0?parseInt(K,10):1200,W=(re,ue)=>["none","bottom","middle","top"].includes(re??"")?re:ue,Fe=R!==void 0?parseInt(R,10):-100,Ae=D!==void 0?parseInt(D,10):100,$e=U!==void 0?parseInt(U,10):-100,H=K!==void 0?parseInt(K,10):100;i.set(b,{type:h,name:b,centerX2:G(p),centerY2:G(g),spanX:G(y),spanY:G(w),rotation:[0,90,180,270].includes(ae)?ae:0,...h==="slider"?{sliderMin:Number.isFinite(se)?se:0,sliderMax:Number.isFinite(oe)?oe:100,sliderRecenter:he}:{},...h==="toggle"?{toggleInitial:te}:{},...h==="radar"?{radarMinAngle:Number.isFinite(ee)?ee:0,radarMaxAngle:Number.isFinite(Re)?Re:180,radarMaxDistance:Number.isFinite(ve)&&ve>0?ve:200,radarFadeMs:Number.isFinite(we)&&we>0?we:1200}:{},...h==="joystick"?{joystickXMin:Number.isFinite(Fe)?Fe:-100,joystickXMax:Number.isFinite(Ae)&&Ae!==Fe?Ae:100,joystickYMin:Number.isFinite($e)?$e:-100,joystickYMax:Number.isFinite(H)&&H!==$e?H:100,joystickXRecenter:W(F,"middle"),joystickYRecenter:W(V,"middle")}:{}})}return[...i.values()]}let ie=null,as=null,wh=0,Br=!1;function Fb(){return new Date().toLocaleTimeString("da-DK",{hour12:!1})}function Eh(s){return new Promise(i=>setTimeout(i,s))}function Of(s,i){const c=i.userID.toLowerCase();return s.map(a=>{if(!a.ownerID)return a;const f=a.ownerID.toLowerCase()===c;return{...a,isOwnedByMe:f,ownerName:f?i.username:a.ownerName}})}function Cf(s,i){return(s.name?u_(s.name):"")||(i==null?void 0:i.deviceName)||"Pico"}function $b(s){return Object.fromEntries(s.filter(i=>i.type==="toggle").map(i=>[i.name,!!i.toggleInitial]))}function Sh(s,i){const c=$b(s);for(const a of s)a.type==="toggle"&&i[a.name]!==void 0&&(c[a.name]=i[a.name]);return c}const le=hb((s,i)=>{function c(p,g){s(y=>({logs:[{level:p,message:g,time:Fb()},...y.logs].slice(0,200)}))}function a(p){as&&clearTimeout(as),wh+=1,s({toast:{message:p,id:wh}}),as=setTimeout(()=>s({toast:null}),4500)}function f(p=null){s({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:p})}function h(p){return{deviceID:p.deviceID,deviceName:p.deviceName,ownerID:p.ownerID,deviceIconID:p.iconID,canOthersConnect:p.canOthersConnect,canOthersEdit:p.canOthersEdit,canOthersEditCode:p.canOthersEditCode,isOwnedByMe:p.isOwnedByMe,ownerName:p.ownerName}}function b(p){const{screen:g,active:y,picoIdeOrigin:w}=i();if(Br){Br=!1;return}p&&(c("warning",p),a(p)),(g==="control"||g==="connection"||g==="create"||g==="ide"&&w==="control")&&f(y?h(y):null)}return ie=new Pb({onProgress:(p,g)=>s({progress:{value:p,label:g}}),onLog:(p,g)=>c(p,g),onRadar:(p,g,y)=>{const w=Date.now(),E={id:`${w}-${Math.random().toString(36).slice(2)}`,angle:g,distance:y,createdAt:w};s(R=>{const D=R.layout.find(F=>F.type==="radar"&&F.name===p),U=(D==null?void 0:D.radarFadeMs)??1200,K=R.radarPings[p]??[];return{radarPings:{...R.radarPings,[p]:[...K.filter(F=>w-F.createdAt<=U),E].slice(-80)}}})},onText:(p,g)=>{s(y=>({textValues:{...y.textValues,[p]:g}}))},onToggleState:(p,g)=>{s(y=>({toggleValues:{...y.toggleValues,[p]:g}}))},onDisconnect:p=>b(p)}),{screen:"splash",splashTarget:null,user:null,savedDevices:[],connecting:null,progress:{value:0,label:""},toast:null,confirmDialog:null,connectionLost:null,active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},logs:[],sideMenuOpen:!1,debuggerOpen:!1,menuPage:null,editMode:!1,dashboardPage:"mine",picoIdeOrigin:"dashboard",init:()=>{const p=gb(),g=p?Of(sc(),p):sc();p&&ra(g),s({user:p,savedDevices:g,splashTarget:p?"dashboard":"intro"})},finishSplash:()=>{const p=i().splashTarget;s({screen:p??"intro"})},createUser:p=>{const g=p.trim();if(!g)return;const y={username:g,userID:_b()};Tf(y),s({user:y,screen:"dashboard"})},findDevice:async()=>{try{const p=await Tb();await i().connectToDevice(p)}catch(p){p instanceof Error&&p.name!=="NotFoundError"&&c("error",p.message)}},connectToDevice:async(p,g)=>{var w,E,R;const y=i().user;if(!(!y||!ie)){Br=!1,s({screen:"connection",connecting:{name:Cf(p,g),iconID:(g==null?void 0:g.deviceIconID)??0},progress:{value:0,label:"Forbinder..."}});try{await ie.connect(p);const D=await ie.runHandshake(y),U=p.id,K=(D.kind==="owned"||D.kind==="unowned")&&((w=D.deviceName)==null?void 0:w.trim())||Cf(p,g);if(s(se=>se.connecting?{connecting:{...se.connecting,name:K}}:{}),D.kind==="denied"){const oe=`Du kan ikke forbinde, fordi ${((E=D.ownerName)==null?void 0:E.trim())||((R=g==null?void 0:g.ownerName)==null?void 0:R.trim())||"ejeren"} ejer enheden og ikke tillader besøgende at forbinde.`;c("warning",oe),a(oe),s({screen:"dashboard",connecting:null}),await ie.disconnect();return}if(D.kind==="unowned"){s({active:{deviceID:U,deviceName:K,ownerID:y.userID,iconID:0,canEdit:!0,canEditCode:!0,canOthersConnect:!1,canOthersEdit:!1,canOthersEditCode:!1,isOwnedByMe:!0,ownerName:y.username,gridCols:sa,gridRows:_s},screen:"create"});return}const F={deviceID:U,deviceName:K,ownerID:D.ownerID,deviceIconID:D.iconID,canOthersConnect:D.canOthersConnect,canOthersEdit:D.canOthersEdit,canOthersEditCode:D.canOthersEditCode,isOwnedByMe:D.isOwnedByMe,ownerName:D.isOwnedByMe?y.username:D.ownerName??(g==null?void 0:g.ownerName)};s({savedDevices:jf(F)});const V=await ie.requestLayout(),G=vh(V),ae=xh(V);s({layout:ae,sliderValues:{},toggleValues:Sh(ae,i().toggleValues),radarPings:{},textValues:{},active:{deviceID:U,deviceName:K,ownerID:D.ownerID,iconID:D.iconID,canEdit:D.canEdit,canEditCode:D.canEditCode,canOthersConnect:D.canOthersConnect,canOthersEdit:D.canOthersEdit,canOthersEditCode:D.canOthersEditCode,isOwnedByMe:D.isOwnedByMe,ownerName:D.isOwnedByMe?y.username:D.ownerName??(g==null?void 0:g.ownerName),gridCols:G.cols,gridRows:G.rows},screen:"control",connecting:null,connectionLost:null})}catch(D){const U=D instanceof Error?D.message:"Forbindelsen mislykkedes.";c("error",U),a("Forbindelsen mislykkedes."),s({screen:"dashboard",connecting:null}),await ie.disconnect().catch(()=>{})}}},finishCreate:async(p,g,y,w,E,R)=>{const{user:D,active:U}=i();if(!(!D||!U||!ie))try{ie.setBusy(!0),await ie.create(D,p,g,y,w,E,R),ie.setBusy(!1);const K={deviceID:U.deviceID,deviceName:U.deviceName,ownerID:D.userID,deviceIconID:p,canOthersConnect:g,canOthersEdit:g&&y,canOthersEditCode:g&&w,isOwnedByMe:!0,ownerName:D.username};s({savedDevices:jf(K)});const F=await ie.requestLayout(),V=vh(F),G=xh(F);s({layout:G,sliderValues:{},toggleValues:Sh(G,i().toggleValues),radarPings:{},textValues:{},active:{...U,ownerID:D.userID,iconID:p,canEdit:!0,canEditCode:!0,canOthersConnect:g,canOthersEdit:g&&y,canOthersEditCode:g&&w,ownerName:D.username,gridCols:V.cols,gridRows:V.rows},screen:"control"})}catch(K){ie.setBusy(!1);const F=K instanceof Error?K.message:"Oprettelse mislykkedes.";c("error",F),a("Oprettelse mislykkedes."),s({screen:"dashboard"}),await ie.disconnect().catch(()=>{})}},saveDeviceSettings:async(p,g,y,w,E,R)=>{const{active:D,user:U}=i();if(!(!D||!ie||!D.isOwnedByMe))try{ie.setBusy(!0),await ie.updateDeviceSettings(p,g,y,w,E,R,U==null?void 0:U.username);const K={...D,iconID:p,canEdit:!0,canEditCode:!0,canOthersConnect:g,canOthersEdit:g&&y,canOthersEditCode:g&&w,ownerName:(U==null?void 0:U.username)??D.ownerName,gridCols:E,gridRows:R},F={deviceID:D.deviceID,deviceName:D.deviceName,ownerID:D.ownerID??(U==null?void 0:U.userID),deviceIconID:p,canOthersConnect:g,canOthersEdit:g&&y,canOthersEditCode:g&&w,isOwnedByMe:!0,ownerName:(U==null?void 0:U.username)??D.ownerName};s({active:K,savedDevices:jf(F)}),a("Enhedsindstillinger gemt.")}catch(K){c("error",K instanceof Error?K.message:"Kunne ikke gemme enhedsindstillinger."),a("Kunne ikke gemme enhedsindstillinger.")}finally{ie.setBusy(!1)}},cancelCreate:async()=>{ie&&await ie.disconnect().catch(()=>{}),s({screen:"dashboard",active:null,connecting:null})},disconnect:async()=>{Br=!0,f(null),ie&&await ie.disconnect().catch(()=>{}),Br=!1},removeSavedDevice:p=>{s({savedDevices:xb(p)})},clearSavedDevices:()=>{bb(),s({savedDevices:[]}),a("Gemte enheder ryddet.")},resetApplicationData:async()=>{Br=!0,ie!=null&&ie.connected&&await ie.disconnect().catch(()=>{}),yb(),window.location.reload()},updateUsername:p=>{const g=i().user,y=p.trim();if(!g||!y)return;const w={...g,username:y};Tf(w),s(E=>{var D;const R=Of(E.savedDevices,w);return ra(R),{user:w,active:(D=E.active)!=null&&D.isOwnedByMe?{...E.active,ownerName:y}:E.active,savedDevices:R}}),a("Brugernavn gemt.")},createOwnerPairingCode:()=>{const p=i().user;return p?qb(p):null},applyOwnerPairingCode:p=>{var y;const g=Kb(p,(y=i().user)==null?void 0:y.username);return g?(Tf(g),s(w=>{var R,D,U;const E=Of(w.savedDevices,g);return ra(E),{user:g,active:((D=(R=w.active)==null?void 0:R.ownerID)==null?void 0:D.toLowerCase())===g.userID.toLowerCase()||(U=w.active)!=null&&U.isOwnedByMe?{...w.active,isOwnedByMe:!0,ownerID:g.userID,ownerName:g.username}:w.active,savedDevices:E}}),a("Ejerkoden er gemt. Denne browser bruger nu samme ejer-GUID."),!0):(a("Ejerkoden kunne ikke læses."),!1)},openPicoIde:()=>{const p=i().screen==="control"&&!!(ie!=null&&ie.connected),g=i().active;if(p&&g&&!g.isOwnedByMe&&!g.canEditCode){a("Ejeren tillader ikke, at gæster åbner Kodeværkstedet på denne enhed."),c("warning","Kodeværkstedet er blokeret, fordi ejeren ikke tillader gæster at redigere kode."),s({sideMenuOpen:!1});return}s(y=>({screen:"ide",picoIdeOrigin:p?"control":"dashboard",active:p?y.active:null,layout:p?y.layout:[],sliderValues:p?y.sliderValues:{},toggleValues:p?y.toggleValues:{},radarPings:p?y.radarPings:{},textValues:p?y.textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null}))},closePicoIde:()=>{const{picoIdeOrigin:p,active:g}=i();s({screen:p==="control"&&g&&(ie!=null&&ie.connected)?"control":"dashboard",sideMenuOpen:!1,menuPage:null,picoIdeOrigin:"dashboard"})},isBleConnected:()=>!!(ie!=null&&ie.connected),bleListFiles:async()=>ie!=null&&ie.connected?ie.listFiles("/"):[],bleReadText:async(p,g,y)=>{if(!(ie!=null&&ie.connected))throw new Error("Ingen BLE-forbindelse.");return ie.readText(p,g,y)},bleWriteText:async(p,g,y)=>{if(!(ie!=null&&ie.connected))throw new Error("Ingen BLE-forbindelse.");await ie.writeText(p,g,y)},bleDeleteFile:async p=>{if(!(ie!=null&&ie.connected))throw new Error("Ingen BLE-forbindelse.");await ie.deleteFile(p)},bleRestart:async()=>{ie!=null&&ie.connected&&await ie.restart()},bleRestartAndReconnect:async(p="control")=>{const{active:g}=i();if(!(ie!=null&&ie.connected)||!g)return!1;const y={deviceID:g.deviceID,deviceName:g.deviceName,ownerID:g.ownerID,deviceIconID:g.iconID,canOthersConnect:g.canOthersConnect,canOthersEdit:g.canOthersEdit,canOthersEditCode:g.canOthersEditCode,isOwnedByMe:g.isOwnedByMe,ownerName:g.ownerName};Br=!0,c("info","Genstarter Pico og forsøger automatisk genforbindelse...");try{await ie.restart()}catch{}s({progress:{value:15,label:"Venter på Pico genstart..."},connecting:{name:y.deviceName,iconID:y.deviceIconID}});for(let w=0;w<12&&(ie!=null&&ie.connected);w+=1)await Eh(250);ie!=null&&ie.connected||(Br=!1);for(let w=1;w<=8;w+=1){await Eh(w===1?1200:850);try{const R=(await f_()).find(D=>D.id===y.deviceID);if(!R){s({progress:{value:Math.min(88,20+w*8),label:"Venter på browser-tilladelse..."}});continue}return s({progress:{value:Math.min(92,24+w*8),label:`Genforbinder (${w}/8)...`}}),await i().connectToDevice(R,y),p==="ide"&&s(D=>({screen:"ide",picoIdeOrigin:"control",active:D.active,layout:D.layout,sliderValues:D.sliderValues,toggleValues:D.toggleValues,radarPings:D.radarPings,textValues:D.textValues,editMode:!1,sideMenuOpen:!1,menuPage:null})),a("Pico genforbundet."),!0}catch(E){c("warning",E instanceof Error?E.message:"Genforbindelse mislykkedes.")}}return a("Kunne ikke genforbinde automatisk. Vælg Picoen igen."),Br=!1,s({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:y}),!1},reconnectLostDevice:async()=>{var g;const p=i().connectionLost;if(p){s({connectionLost:null});try{if((g=navigator.bluetooth)!=null&&g.getDevices){const w=(await navigator.bluetooth.getDevices()).find(E=>E.id===p.deviceID);if(w){await i().connectToDevice(w,p);return}}}catch{}c("info","Genforbind: vælg enheden i browserens liste."),await i().findDevice()}},dismissConnectionLost:()=>s({connectionLost:null}),sendButton:(p,g)=>ie==null?void 0:ie.enqueueButton(p,g),sendSlider:(p,g)=>{s(y=>({sliderValues:{...y.sliderValues,[p]:g}})),ie==null||ie.enqueueSlider(p,g)},sendToggle:(p,g)=>{s(y=>({toggleValues:{...y.toggleValues,[p]:g}})),ie==null||ie.enqueueToggle(p,g)},sendJoystick:(p,g,y)=>ie==null?void 0:ie.enqueueJoystick(p,g,y),sendDpad:(p,g,y)=>ie==null?void 0:ie.enqueueDpad(p,g,y),saveLayout:async p=>{if(ie)try{ie.setBusy(!0),await ie.saveLayout(p),s({layout:p,editMode:!1})}catch(g){c("error",g instanceof Error?g.message:"Kunne ikke gemme layout.")}finally{ie.setBusy(!1)}},setEditMode:p=>s({editMode:p,sideMenuOpen:!1,menuPage:null}),setDashboardPage:p=>s({dashboardPage:p}),toggleSideMenu:p=>s(g=>({sideMenuOpen:p??!g.sideMenuOpen})),toggleDebugger:p=>s(g=>({debuggerOpen:p??!g.debuggerOpen,sideMenuOpen:!1,menuPage:null})),openMenuPage:p=>s({menuPage:p,sideMenuOpen:!1}),closeMenuPage:()=>s({menuPage:null}),clearLogs:()=>s({logs:[]}),log:(p,g)=>c(p,g),askConfirm:p=>s({confirmDialog:p}),closeConfirm:()=>s({confirmDialog:null}),showToast:p=>a(p),dismissToast:()=>{as&&clearTimeout(as),s({toast:null})}}}),Vf="PKP-EJER";function qb(s){var a;const i=s.userID.toLowerCase(),c=((a=i.match(/.{1,4}/g))==null?void 0:a.join("-"))??i;return`${Vf}-${c}-${h_(i)}`}function Kb(s,i="Ejer"){const c=s.trim().toUpperCase().replace(/\s+/g,"-");if(!c.startsWith(`${Vf}-`))return null;const a=c.slice(Vf.length+1).split("-").filter(Boolean),f=a.pop()??"",h=a.join("").toLowerCase();return!/^[a-f0-9]{32}$/.test(h)||f!==h_(h)?null:{userID:h,username:i.trim()||"Ejer"}}function h_(s){let i=2166136261;for(const c of s.toLowerCase())i^=c.charCodeAt(0),i=Math.imul(i,16777619)>>>0;return(i%65536).toString(16).toUpperCase().padStart(4,"0")}const hc="./",__=[{id:0,label:"Raspberry Pi"},{id:1,label:"Sumo robot"},{id:2,label:"LED / lys"},{id:3,label:"Lineal + blyant"},{id:4,label:"Bil"},{id:5,label:"Tank"},{id:6,label:"Robotarm"},{id:7,label:"Bi"},{id:8,label:"Palet"},{id:9,label:"Afstandssensor"},{id:10,label:"Søg"},{id:11,label:"Alarm"}];function ca(s){const i=s>=0&&s<__.length?s:0;return`${hc}device-icons/${i}.png`}const Xb=`${hc}art/logo.png`,Qb=`${hc}art/Teknologiskolen_logo.png`,Zb=`${hc}art/logo_teknologiskolen_white.png`,Wb={menu:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]}),user:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),settings:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),info:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),u.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),help:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),u.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),debugger:u.jsx(u.Fragment,{children:u.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),edit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),u.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),picoIde:u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),u.jsx("path",{d:"M8 9l-3 3 3 3"}),u.jsx("path",{d:"M16 9l3 3-3 3"}),u.jsx("line",{x1:"13",y1:"8",x2:"11",y2:"16"})]}),exit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),plus:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),delete:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),u.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),power:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),u.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),save:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),u.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),u.jsx("polyline",{points:"7 3 7 8 15 8"})]}),upload:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),u.jsx("polyline",{points:"17 8 12 3 7 8"}),u.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),refresh:u.jsxs(u.Fragment,{children:[u.jsx("polyline",{points:"23 4 23 10 17 10"}),u.jsx("polyline",{points:"1 20 1 14 7 14"}),u.jsx("path",{d:"M3.5 9a9 9 0 0 1 14.9-3.4L23 10"}),u.jsx("path",{d:"M20.5 15a9 9 0 0 1-14.9 3.4L1 14"})]}),package:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),u.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),u.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),back:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),u.jsx("polyline",{points:"12 19 5 12 12 5"})]})};function nt({name:s,size:i=24,className:c}){return u.jsx("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:c,"aria-hidden":"true",children:Wb[s]})}const Jb=1850,e0=450;function n0(){const s=le(a=>a.splashTarget),i=le(a=>a.finishSplash),c=s?"splash-screen-animation splash-ready":"splash-pending";return B.useEffect(()=>{if(!s)return;const f=window.matchMedia("(prefers-reduced-motion: reduce)").matches?e0:Jb,h=window.setTimeout(i,f);return()=>window.clearTimeout(h)},[i,s]),u.jsxs("div",{className:`screen splash-screen ${c}`,"aria-label":"Teknologiskolen starter",children:[u.jsx("div",{className:"splash-white-cover"}),u.jsx("div",{className:"splash-red-field"}),u.jsx("div",{className:"splash-brand","aria-hidden":"true",children:u.jsx("div",{className:"splash-mark splash-logo-shell",children:u.jsx("img",{className:"splash-logo",src:Xb,alt:""})})}),u.jsx("span",{className:"sr-only",children:"Teknologiskolen"})]})}function kh(){const s=le(f=>f.createUser),[i,c]=B.useState(""),a=i.length>0;return u.jsxs("div",{className:"screen intro",children:[u.jsxs("div",{className:"intro-header",children:[u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"}),u.jsx("img",{className:"intro-header-image",src:Qb,alt:"Teknologiskolen"}),u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"})]}),u.jsxs("div",{className:"intro-body",children:[u.jsx("p",{children:"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Find selv på et navn, du vil vises som i appen. Det er ikke et login, og navnet gemmes kun i denne browser."}),u.jsxs("div",{className:`field ${a?"filled":""}`,children:[u.jsx("input",{id:"username",value:i,onChange:f=>c(f.target.value),maxLength:32,autoComplete:"off","aria-label":"Brugernavn"}),u.jsx("label",{htmlFor:"username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!a,onClick:()=>s(i),children:"Fortsæt"})]}),u.jsx("span",{className:"version",children:hs})]})}function nd({title:s,onMenu:i}){return u.jsx("header",{className:"topbar",children:u.jsxs("div",{className:"topbar-inner",children:[u.jsx("h1",{children:s}),u.jsx("button",{className:"iconbtn",type:"button",onClick:i,"aria-label":"Menu",children:u.jsx(nt,{name:"menu"})})]})})}function Tn({title:s,onClose:i,children:c,closeVariant:a="plain"}){const f=a==="circle",h=B.useRef(!1);return u.jsx("div",{className:"modal-root",onPointerDown:b=>{h.current=b.target===b.currentTarget},onClick:b=>{b.target===b.currentTarget&&h.current&&i(),h.current=!1},children:u.jsxs("div",{className:"modal",onClick:b=>b.stopPropagation(),children:[u.jsxs("div",{className:"modal-head",children:[u.jsx("h3",{children:s}),u.jsx("button",{className:`iconbtn ${f?"modal-close-circle":""}`,type:"button",onClick:i,"aria-label":"Luk",children:u.jsx(nt,{name:f?"delete":"close",size:f?30:24})})]}),u.jsx("div",{className:"modal-body",children:c})]})})}function Nh(){const s=le(R=>R.savedDevices),i=le(R=>R.toggleSideMenu),c=le(R=>R.findDevice),a=le(R=>R.removeSavedDevice),f=le(R=>R.askConfirm),h=le(R=>R.dashboardPage),b=le(R=>R.setDashboardPage),p=i0(),[g,y]=B.useState(null),w=pc(),E=s.filter(R=>h==="mine"?R.isOwnedByMe:!R.isOwnedByMe).sort(l0);return u.jsxs("div",{className:"screen dashboard-screen",children:[u.jsx(nd,{title:"Hovedmenu",onMenu:()=>i()}),u.jsxs("div",{className:"content dash-content",children:[!w&&u.jsx("div",{className:"notice",children:"Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På Android: brug Chrome."}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:h==="mine"?"active":"",onClick:()=>b("mine"),children:"Mine Enheder"}),u.jsx("button",{type:"button",className:h==="andre"?"active":"",onClick:()=>b("andre"),children:"Andre Enheder"})]}),u.jsx("div",{className:"panel panel-white device-list",children:E.length===0?u.jsx("div",{className:"device-list-empty",children:h==="mine"?"Ingen enheder endnu. Tryk på + for at finde en enhed.":"Ingen andre enheder gemt."}):E.map(R=>u.jsx(t0,{device:R,disabled:!w,onConnect:()=>p(R),onSettings:()=>y(R)},R.deviceID))})]}),u.jsx("button",{className:"fab",type:"button",onClick:()=>c(),disabled:!w,"aria-label":"Find enhed",children:u.jsx(nt,{name:"plus",size:30})}),u.jsx("span",{className:"version",children:hs}),g&&u.jsx(Tn,{title:"Enhedsindstillinger",onClose:()=>y(null),children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("div",{className:"saved-device-head",children:[u.jsx("img",{src:ca(g.deviceIconID),alt:""}),u.jsx("strong",{children:g.deviceName})]}),u.jsx(ss,{label:"Gemte indstillinger",value:"Denne browser"}),u.jsx(ss,{label:"Ejer",value:r0(g)}),u.jsx(ss,{label:"Offentlig",value:g.canOthersConnect?"Ja":"Nej"}),u.jsx(ss,{label:"Andre må redigere layout",value:g.canOthersEdit?"Ja":"Nej"}),u.jsx(ss,{label:"Andre må redigere kode",value:g.canOthersEditCode?"Ja":"Nej"}),u.jsx("div",{className:"notice",children:"Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!w,onClick:()=>{const R=g;y(null),p(R)},children:"Forbind"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>f({title:"Glem enhed",message:`Vil du fjerne ${g.deviceName} fra gemte enheder?`,confirmLabel:"Glem",onConfirm:()=>{a(g.deviceID),y(null)}}),children:"Glem enhed"})]})})]})}function t0({device:s,disabled:i,onConnect:c,onSettings:a}){return u.jsxs("div",{className:"device-tile-wrap",children:[u.jsxs("button",{className:"device-tile",type:"button",onClick:c,disabled:i,children:[u.jsx("img",{className:"device-tile-icon",src:ca(s.deviceIconID),alt:""}),u.jsx("span",{className:"device-tile-name",children:s.deviceName})]}),u.jsx("button",{className:"device-tile-del",type:"button",onClick:a,"aria-label":"Enhedsindstillinger",children:u.jsx(nt,{name:"settings"})})]})}function ss({label:s,value:i}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:s}),u.jsx("strong",{children:i})]})}function r0(s){var i;return s.isOwnedByMe?"Dig":((i=s.ownerName)==null?void 0:i.trim())||"Anden bruger"}function l0(s,i){return s.deviceName.localeCompare(i.deviceName,"da",{sensitivity:"base"})}function i0(){const s=le(a=>a.connectToDevice),i=le(a=>a.findDevice),c=le(a=>a.log);return async a=>{const h=(await f_()).find(b=>b.id===a.deviceID);h?await s(h,a):(c("info","Genforbind: vælg enheden i browserens liste."),await i())}}function a0(){const s=le(c=>c.connecting),i=le(c=>c.progress);return u.jsxs("div",{className:"screen connection",children:[u.jsx("div",{className:"device-icon-pick",children:u.jsx("img",{src:ca((s==null?void 0:s.iconID)??0),alt:""})}),u.jsxs("h2",{style:{margin:0,color:"var(--red)"},children:["Forbinder til ",(s==null?void 0:s.name)??"enhed"]}),u.jsx("div",{className:"spinner"}),u.jsxs("div",{style:{width:"100%"},children:[u.jsx("div",{className:"progress-track",children:u.jsx("div",{className:"progress-fill",style:{width:`${i.value}%`}})}),u.jsx("p",{style:{color:"var(--muted)",fontWeight:600,marginTop:12},children:i.label})]})]})}function g_({selected:s,onSelect:i,onClose:c}){return u.jsx(Tn,{title:"Vælg Enhedens Ikon",onClose:c,children:u.jsx("div",{className:"icon-grid",children:__.map(a=>u.jsx("button",{type:"button",className:`icon-tile ${a.id===s?"selected":""}`,onClick:()=>{i(a.id),c()},"aria-label":a.label,children:u.jsx("img",{src:ca(a.id),alt:""})},a.id))})})}function s0(){const s=le(se=>se.finishCreate),i=le(se=>se.cancelCreate),[c,a]=B.useState(0),[f,h]=B.useState(!1),[b,p]=B.useState(!1),[g,y]=B.useState(!1),[w,E]=B.useState(!1),[R,D]=B.useState(sa),[U,K]=B.useState(_s),[F,V]=B.useState(!1),G=se=>Number.isFinite(se)?Math.max(la,Math.min(ia,Math.round(se))):sa;async function ae(){V(!0),await s(c,b,b&&g,b&&w,G(R),G(U))}return u.jsxs("div",{className:"screen",children:[u.jsx("header",{className:"topbar",children:u.jsx("h1",{children:"Opret Enhed"})}),u.jsxs("div",{className:"content create-body",children:[u.jsxs("button",{type:"button",className:"device-icon-pick",onClick:()=>h(!0),"aria-label":"Vælg ikon",children:[u.jsx("img",{src:ca(c),alt:""}),u.jsx("span",{className:"badge",children:u.jsx(nt,{name:"plus",size:22})})]}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:b?"":"active",onClick:()=>p(!1),children:"Privat"}),u.jsx("button",{type:"button",className:b?"active":"",onClick:()=>p(!0),children:"Offentlig"})]}),b&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:g?"":"active",onClick:()=>y(!1),children:"Nej"}),u.jsx("button",{type:"button",className:g?"active":"",onClick:()=>y(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:w?"":"active",onClick:()=>E(!1),children:"Nej"}),u.jsx("button",{type:"button",className:w?"active":"",onClick:()=>E(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter (kolonner × rækker)"}),u.jsxs("div",{className:"row",style:{width:"100%"},children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"cols",children:"Kolonner"}),u.jsx("input",{id:"cols",type:"number",min:la,max:ia,value:Number.isNaN(R)?"":R,onChange:se=>D(parseInt(se.target.value,10)),onBlur:()=>D(G(R))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"rows",children:"Rækker"}),u.jsx("input",{id:"rows",type:"number",min:la,max:ia,value:Number.isNaN(U)?"":U,onChange:se=>K(parseInt(se.target.value,10)),onBlur:()=>K(G(U))})]})]}),u.jsxs("div",{className:"row",style:{marginTop:"auto",width:"100%"},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>i(),disabled:F,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:ae,disabled:F,children:F?"Opretter...":"Opret"})]})]}),f&&u.jsx(g_,{selected:c,onSelect:a,onClose:()=>h(!1)}),u.jsx("span",{className:"version",children:hs})]})}const oa=8;function rc(s){return Math.max(5,Math.min(22,s))}function o0(s,i,c){const a=Math.max(1,s.length),f=(i-oa*2)/(a*.58),h=(c-oa*2)*.48;return rc(Math.min(f,h))}function fi(s,i,c){switch(c){case 90:return{x:-i,y:s};case 180:return{x:-s,y:-i};case 270:return{x:i,y:-s};default:return{x:s,y:i}}}function cc(s){return(360-s)%360}function c0(s,i,c,a){const f=a===90||a===270;return o0(s,f?c:i,f?i:c)}function uc({name:s,width:i,height:c,rotation:a}){return u.jsx("span",{style:{display:"inline-block",fontWeight:800,fontSize:c0(s,i,c,a),transform:a?`rotate(${a}deg)`:void 0,whiteSpace:a===90||a===270?"nowrap":void 0},children:s})}function u0(s,i,c,a,f){const h=s.trim().split(/\s+/).filter(Boolean),b=Math.max(1,s.replace(/\s+/g,"").length+Math.max(0,h.length-1)*1.6),p=f?rc(Math.min(i/4.6,c/4.6,12)):0,g=f?p+oa:oa;if(a){const E=Math.max(1,c-g*2);return{fontSize:rc(Math.min(i*.48,E/(b*1.04))),endFontSize:p,centerInset:f?{top:g,bottom:g}:{}}}const y=Math.max(1,i-g*4.2);return{fontSize:rc(Math.min(c*.42,y/(b*.58))),endFontSize:p,centerInset:f?{left:g*2.1,right:g*2.1}:{}}}function f0({control:s,rect:i,disabled:c,latestValue:a,toggleValue:f,radarPings:h=[],textValue:b,onButton:p,onSlider:g,onToggle:y,onJoystick:w,onDpad:E}){const R=B.useRef(!1),D={left:i.cx,top:i.cy,width:i.width,height:i.height};if(s.type==="button"){const U=()=>{c||!R.current||(R.current=!1,p(s.name,!1))};return u.jsx("div",{className:"control",style:D,children:u.jsx("button",{className:"control-button",type:"button",disabled:c,style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},onPointerDown:K=>{var F,V;c||(K.preventDefault(),(V=(F=K.currentTarget).setPointerCapture)==null||V.call(F,K.pointerId),R.current=!0,p(s.name,!0))},onPointerUp:K=>{var F,V;K.preventDefault(),(V=(F=K.currentTarget).releasePointerCapture)==null||V.call(F,K.pointerId),U()},onPointerCancel:U,onLostPointerCapture:U,children:u.jsx(uc,{name:s.name,width:i.width,height:i.height,rotation:s.rotation})})})}if(s.type==="toggle"){const U=!!f;return u.jsx("div",{className:"control",style:D,children:u.jsx("button",{className:`control-toggle ${U?"on":""}`,type:"button",disabled:c,"aria-pressed":U,style:{width:"100%",height:"100%"},onPointerDown:K=>{c||(K.preventDefault(),y(s.name,!U))},children:u.jsx(uc,{name:s.name,width:i.width,height:i.height,rotation:s.rotation})})})}return s.type==="radar"?u.jsx("div",{className:"control",style:D,children:u.jsx(y_,{control:s,pings:h,width:i.width,height:i.height})}):s.type==="text"?u.jsx("div",{className:"control",style:D,children:u.jsx(b_,{message:b??s.name,width:i.width,height:i.height,rotation:s.rotation})}):s.type==="joystick"?u.jsx("div",{className:"control",style:D,children:u.jsx(R0,{control:s,disabled:c,onJoystick:w,width:i.width,height:i.height})}):s.type==="dpad"?u.jsx("div",{className:"control",style:D,children:u.jsx(L0,{control:s,disabled:c,onDpad:E})}):u.jsx("div",{className:"control",style:D,children:u.jsx(N0,{control:s,disabled:c,latestValue:a,onSlider:g,width:i.width,height:i.height})})}function d0(s,i,c){const f=(s.trim()||" ").split(`
`),h=f.reduce((R,D)=>D.split(/\s+/).filter(Boolean).reduce((K,F)=>Math.max(K,F.length),R),1),b=Math.max(1,Math.floor(h*1.9)),p=Math.max(f.length,f.reduce((R,D)=>R+Math.max(1,Math.ceil(Math.max(1,D.trim().length)/b)),0)),g=Math.max(1,i-oa*3),y=Math.max(1,c-oa*3),w=g/(h*.58),E=y/(p*1.16);return Math.max(7,Math.min(24,w,E))}function b_({message:s,width:i,height:c,rotation:a=0}){const f=s.trim()||"...",h=a===90||a===270,b=d0(f,h?c:i,h?i:c);return u.jsx("div",{className:"control-text",style:{width:"100%",height:"100%",fontSize:b},children:u.jsx("span",{style:{transform:a?`rotate(${a}deg)`:void 0},children:f})})}function y_({control:s,pings:i,width:c,height:a,preview:f=!1}){const[,h]=B.useState(0),b=Math.max(120,s.radarFadeMs??1200),p=s.radarMinAngle??0,g=s.radarMaxAngle??180,y=Xn(p),w=Xn(g),E=Math.abs(g-p)>=360||y===w&&p!==g,R=Math.max(1,s.radarMaxDistance??200),D=Date.now(),U=i[i.length-1],K=s.rotation,F=Xn(y+K),V=Xn(w+K),G=w0(y,w),ae=((U==null?void 0:U.angle)??G)+K,se=f?[{id:"preview",angle:G,distance:R*.62,createdAt:D}]:i.filter(fe=>D-fe.createdAt<=b),oe=!E,he=Math.max(8,Math.min(12,Math.min(c,a)*.16)),te=Math.max(7,he*.85),ee=0,Re=0,ve=1,we=b0(E,F,V,K,R),W=E?{x:-1.12,y:-1.12,width:2.24,height:2.24}:y0(F,V,we.map(fe=>fe.point)),Fe=E?"":m0(ee,Re,ve,F,V),Ae=Mh(p),$e=Mh(g),H=oe?x0(F,V,W,c,a,Ae,$e,he):null,re=we.map(fe=>{const Ee=v_(fe.point,W,c,a);return{key:fe.key,value:fe.value,x:Ee.x,y:Ee.y}});B.useEffect(()=>{if(f||i.length===0)return;const fe=window.setInterval(()=>h(Ee=>Ee+1),120);return()=>window.clearInterval(fe)},[b,i.length,f]);const ue=Et(ee,Re,ve,ae);return u.jsxs("div",{className:"control-radar",style:{width:"100%",height:"100%"},children:[u.jsxs("svg",{width:c,height:a,viewBox:`${W.x} ${W.y} ${W.width} ${W.height}`,preserveAspectRatio:"none","aria-hidden":"true",children:[E?u.jsx("circle",{className:"radar-sector-fill",cx:ee,cy:Re,r:ve}):u.jsx("path",{className:"radar-sector-fill",d:Fe}),[.25,.5,.75,1].map(fe=>E?u.jsx("circle",{className:"radar-ring",cx:ee,cy:Re,r:ve*fe},fe):u.jsx("path",{className:"radar-ring",d:p0(ee,Re,ve*fe,F,V)},fe)),!E&&u.jsx(Rh,{cx:ee,cy:Re,radius:ve,angle:F}),!E&&u.jsx(Rh,{cx:ee,cy:Re,radius:ve,angle:V}),u.jsx("line",{className:"radar-sweep",x1:ee,y1:Re,x2:ue.x,y2:ue.y}),se.map(fe=>{const Ee=f?0:D-fe.createdAt,k=Math.max(0,1-Ee/b),z=Math.max(0,Math.min(R,fe.distance)),ne=Et(ee,Re,ve*(z/R),fe.angle+K);return u.jsx("circle",{className:"radar-ping",cx:ne.x,cy:ne.y,r:Math.max(.025,Math.min(W.width,W.height)*.025),opacity:k},fe.id)})]}),oe&&H&&u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"radar-angle-label",style:{left:H.min.x,top:H.min.y,fontSize:he},children:Ae}),u.jsx("span",{className:"radar-angle-label",style:{left:H.max.x,top:H.max.y,fontSize:he},children:$e})]}),re.map(fe=>u.jsx("span",{className:"radar-range-label",style:{left:fe.x,top:fe.y,fontSize:te},children:fe.value},fe.key))]})}function Rh({cx:s,cy:i,radius:c,angle:a}){const f=Et(s,i,c,a);return u.jsx("line",{className:"radar-boundary",x1:s,y1:i,x2:f.x,y2:f.y})}function Et(s,i,c,a){const f=(Xn(a)-90)*Math.PI/180;return{x:s+Math.cos(f)*c,y:i+Math.sin(f)*c}}function m0(s,i,c,a,f){const h=Et(s,i,c,a),b=Et(s,i,c,f),p=_c(a,f)>180?1:0;return`M ${s} ${i} L ${h.x} ${h.y} A ${c} ${c} 0 ${p} 1 ${b.x} ${b.y} Z`}function p0(s,i,c,a,f){const h=Et(s,i,c,a),b=Et(s,i,c,f),p=_c(a,f)>180?1:0;return`M ${h.x} ${h.y} A ${c} ${c} 0 ${p} 1 ${b.x} ${b.y}`}function _c(s,i){const c=Xn(s),a=Xn(i),f=a>=c?a-c:360-c+a;return f===0?360:f}const Wo=[.25,.5,.75,1],h0=.1,_0=.85,g0=55;function b0(s,i,c,a,f){const h=(g,y,w)=>({key:`${g}-${y}`,value:Math.round(f*y),point:Et(0,0,y,w)});if(s){const g=Xn(180+a);return Wo.map(y=>h("full",y,g))}const b=360-_c(i,c);if(b<g0){const g=Xn(c+b/2);return Wo.map(y=>h("mid",y,g))}const p=(g,y,w)=>{const E=Math.asin(Math.min(_0,h0/y))*180/Math.PI;return Xn(g+w*E)};return[...Wo.map(g=>h("min",g,p(i,g,-1))),...Wo.map(g=>h("max",g,p(c,g,1)))]}function y0(s,i,c=[]){const a=[{x:0,y:0},Et(0,0,1,s),Et(0,0,1,i),...c];for(const E of[0,90,180,270])v0(E,s,i)&&a.push(Et(0,0,1,E));const f=Math.min(...a.map(E=>E.x)),h=Math.max(...a.map(E=>E.x)),b=Math.min(...a.map(E=>E.y)),p=Math.max(...a.map(E=>E.y)),g=Math.max(.1,h-f),y=Math.max(.1,p-b),w=Math.max(g,y)*.24;return{x:f-w,y:b-w,width:g+w*2,height:y+w*2}}function v0(s,i,c){const a=Xn(i),f=Xn(s),h=_c(i,c),b=Xn(f-a);return b>=0&&b<=h}function x0(s,i,c,a,f,h,b,p){const y=Et(0,0,1.1,s),w=Et(0,0,1.1,i);return{min:Th(y,c,a,f,h,p),max:Th(w,c,a,f,b,p)}}function v_(s,i,c,a){return{x:(s.x-i.x)/i.width*c,y:(s.y-i.y)/i.height*a}}function Th(s,i,c,a,f,h){const b=v_(s,i,c,a),p=Math.max(10,f.length*h*.62),g=h,y=7;return{x:jh(b.x,p/2+y,Math.max(p/2+y,c-p/2-y)),y:jh(b.y,g/2+y,Math.max(g/2+y,a-g/2-y))}}function jh(s,i,c){return Math.max(i,Math.min(c,s))}function Mh(s){return`${Math.round(s)}`}function Xn(s){return Number.isFinite(s)?(s%360+360)%360:0}function w0(s,i){const c=Xn(s),a=Xn(i),f=a>=c?a-c:360-c+a;return Xn(c+f/2)}function E0(s,i){if(!i)return s;const c=s.trim().split(/\s+/).filter(Boolean);return u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",lineHeight:1.02,textAlign:"center",gap:"0.42em"},children:c.map((a,f)=>u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[...a].map((h,b)=>u.jsx("span",{children:h},`${h}-${b}`))},`${a}-${f}`))})}function S0(s){const i={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},c=4;return s===0?{low:{...i,left:c,top:0,bottom:0},high:{...i,right:c,top:0,bottom:0}}:s===180?{low:{...i,right:c,top:0,bottom:0},high:{...i,left:c,top:0,bottom:0}}:s===90?{low:{...i,bottom:c,left:0,right:0},high:{...i,top:c,left:0,right:0}}:{low:{...i,top:c,left:0,right:0},high:{...i,bottom:c,left:0,right:0}}}function k0({name:s,vertical:i,rotation:c,color:a,fontSize:f,endFontSize:h,centerInset:b,lowLabel:p,highLabel:g,showEnds:y}){const w=y?S0(c):null;return u.jsxs("div",{style:{position:"absolute",inset:0,color:a},children:[u.jsx("div",{style:{position:"absolute",inset:0,...b,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:f,textAlign:"center",pointerEvents:"none"},children:E0(s,i)}),w&&u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{...w.low,fontWeight:800,fontSize:h},children:p}),u.jsx("div",{style:{...w.high,fontWeight:800,fontSize:h},children:g})]})]})}function x_({name:s,rotation:i,width:c,height:a,value:f,showEnds:h=!1,fillColor:b="var(--red)",lowLabel:p="0",highLabel:g="100"}){const y=i===90||i===270,{fontSize:w,endFontSize:E,centerInset:R}=u0(s,c,a,y,h);let D,U;i===0?(D={left:0,top:0,bottom:0,width:`${f}%`},U={left:0,top:0}):i===180?(D={right:0,top:0,bottom:0,width:`${f}%`},U={right:0,top:0}):i===90?(D={left:0,right:0,bottom:0,height:`${f}%`},U={left:0,bottom:0}):(D={left:0,right:0,top:0,height:`${f}%`},U={left:0,top:0});const K=F=>u.jsx(k0,{name:s,vertical:y,rotation:i,color:F,fontSize:w,endFontSize:E,centerInset:R,lowLabel:p,highLabel:g,showEnds:h});return u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{position:"absolute",left:0,top:0,width:`${c}px`,height:`${a}px`},children:K("var(--red)")}),u.jsx("div",{style:{position:"absolute",background:b,overflow:"hidden",...D},children:u.jsx("div",{style:{position:"absolute",width:`${c}px`,height:`${a}px`,...U},children:K("var(--white)")})})]})}function N0({control:s,disabled:i,latestValue:c,onSlider:a,width:f,height:h}){const b=B.useRef(null),p=s.sliderMin??0,g=s.sliderMax??100,[y,w]=B.useState(()=>c===void 0?Dh(s.sliderRecenter??"none"):Ah(c,p,g)),E=B.useRef(null),R=s.rotation;B.useEffect(()=>{c!==void 0&&(w(Ah(c,p,g)),E.current=c)},[c,p,g]);function D(V){const G=b.current;if(!G)return 0;const ae=G.getBoundingClientRect();let se;return R===0?se=(V.clientX-ae.left)/ae.width:R===180?se=1-(V.clientX-ae.left)/ae.width:R===90?se=1-(V.clientY-ae.top)/ae.height:se=(V.clientY-ae.top)/ae.height,Math.max(0,Math.min(1,se))}function U(V){i||K(D(V))}function K(V){const G=Math.round(V*100),ae=Math.round(p+(g-p)*V);w(G),ae!==E.current&&(E.current=ae,a(s.name,ae))}function F(){const V=s.sliderRecenter??"none";i||V==="none"||K(Dh(V)/100)}return u.jsx("div",{ref:b,className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",touchAction:"none"},onPointerDown:V=>{i||(V.preventDefault(),V.currentTarget.setPointerCapture(V.pointerId),U(V))},onPointerMove:V=>{V.buttons!==0&&U(V)},onPointerUp:F,onPointerCancel:F,onLostPointerCapture:F,children:u.jsx(x_,{name:s.name,rotation:R,width:f,height:h,value:y,showEnds:!0,lowLabel:String(p),highLabel:String(g)})})}function Dh(s){return s==="bottom"?0:s==="top"?100:s==="middle"?50:0}function Ah(s,i,c){return c===i?0:Math.max(0,Math.min(100,Math.round((s-i)/(c-i)*100)))}function Oh(s,i,c){return Math.round(i+(c-i)*(s+1)/2)}function Ch(s,i){return s==="bottom"?i?1:-1:s==="top"?i?-1:1:0}function Lh(s){return{nx:Ch(s.joystickXRecenter,!1),ny:Ch(s.joystickYRecenter,!0)}}function w_(s,i){const c=Math.min(s,i),a=Math.max(6,c*.16),f=Math.max(1,c/2-a-2);return{knobRadius:a,reach:f}}function E_({control:s,width:i,height:c,pos:a,dragging:f=!1}){const h=s.rotation,{knobRadius:b,reach:p}=w_(i,c),g=Math.max(7,Math.min(14,b*.62)),y=Math.max(7,Math.min(12,Math.min(i,c)*.1)),w=[{key:"xmax",value:s.joystickXMax??100,lx:1,ly:0},{key:"xmin",value:s.joystickXMin??-100,lx:-1,ly:0},{key:"ymax",value:s.joystickYMax??100,lx:0,ly:-1},{key:"ymin",value:s.joystickYMin??-100,lx:0,ly:1}];return u.jsxs("div",{className:"control-joystick",style:{width:"100%",height:"100%",position:"relative"},children:[u.jsx("div",{className:"joystick-oval",style:{position:"absolute",left:"50%",top:"50%",width:p*2,height:p*2,transform:"translate(-50%, -50%)"}}),w.map(E=>{const R=fi(E.lx,E.ly,h);return u.jsx("span",{className:"joystick-edge-label",style:{position:"absolute",left:"50%",top:"50%",fontSize:y,transform:`translate(-50%, -50%) translate(${R.x*p}px, ${R.y*p}px) rotate(${h}deg)`},children:E.value},E.key)}),u.jsx("div",{className:"joystick-knob",style:{position:"absolute",left:"50%",top:"50%",width:b*2,height:b*2,fontSize:g,transform:`translate(calc(-50% + ${a.nx*p}px), calc(-50% + ${a.ny*p}px))`,transition:f?"none":"transform 0.12s ease-out"},children:u.jsx("span",{style:{display:"inline-block",transform:s.rotation?`rotate(${s.rotation}deg)`:void 0,whiteSpace:s.rotation===90||s.rotation===270?"nowrap":void 0},children:s.name})})]})}function R0({control:s,disabled:i,onJoystick:c,width:a,height:f}){const h=s.rotation,b=B.useRef(null),[p,g]=B.useState(()=>{const G=Lh(s),ae=fi(G.nx,G.ny,h);return{nx:ae.x,ny:ae.y}}),y=B.useRef(!1),w=B.useRef(null),E=s.joystickXMin??-100,R=s.joystickXMax??100,D=s.joystickYMin??-100,U=s.joystickYMax??100;function K(G,ae){const se=fi(G,ae,cc(h)),oe=Oh(se.x,E,R),he=Oh(-se.y,D,U);(!w.current||w.current.x!==oe||w.current.y!==he)&&(w.current={x:oe,y:he},c(s.name,oe,he))}function F(G){const ae=b.current;if(!ae)return;const se=ae.getBoundingClientRect(),{reach:oe}=w_(se.width,se.height);let he=(G.clientX-(se.left+se.width/2))/oe,te=(G.clientY-(se.top+se.height/2))/oe;const ee=Math.hypot(he,te);ee>1&&(he/=ee,te/=ee),g({nx:he,ny:te}),K(he,te)}function V(){const G=s.joystickXRecenter??"middle",ae=s.joystickYRecenter??"middle";if(G==="none"&&ae==="none")return;const se=fi(p.nx,p.ny,cc(h)),oe=Lh(s),he={x:G==="none"?se.x:oe.nx,y:ae==="none"?se.y:oe.ny},te=fi(he.x,he.y,h),ee={nx:te.x,ny:te.y};y.current=!1,g(ee),K(ee.nx,ee.ny)}return u.jsx("div",{ref:b,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:G=>{i||(G.preventDefault(),G.currentTarget.setPointerCapture(G.pointerId),y.current=!0,F(G))},onPointerMove:G=>{i||!y.current||G.buttons===0||F(G)},onPointerUp:V,onPointerCancel:V,onLostPointerCapture:V,children:u.jsx(E_,{control:s,width:a,height:f,pos:p,dragging:y.current})})}const T0=[{direction:"up",rotate:0},{direction:"right",rotate:90},{direction:"down",rotate:180},{direction:"left",rotate:270}],j0="M 34 30 L 34 15 Q 34 8 41 8 L 59 8 Q 66 8 66 15 L 66 30 L 50 46 L 34 30 Z",M0=.1,D0={up:"OP",down:"NED",left:"VENSTRE",right:"HØJRE"},A0={up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]},O0=[{pos:"up",x:50,y:23},{pos:"right",x:78,y:50},{pos:"down",x:50,y:77},{pos:"left",x:22,y:50}];function Pf(s,i){return Math.hypot(s,i)<M0?null:Math.abs(s)>=Math.abs(i)?s>0?"right":"left":i>0?"down":"up"}function C0(s,i){const[c,a]=A0[s],f=fi(c,a,cc(i));return Pf(f.x,f.y)??s}function S_({control:s,active:i=null}){const c=s.rotation;return u.jsx("div",{className:"control-dpad",style:{width:"100%",height:"100%"},children:u.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet",children:[T0.map(a=>u.jsx("path",{className:`dpad-arm ${i===a.direction?"active":""}`,transform:`rotate(${a.rotate} 50 50)`,d:j0},a.direction)),O0.map(a=>u.jsx("text",{className:`dpad-label ${i===a.pos?"active":""}`,x:a.x,y:a.y,textAnchor:"middle",dominantBaseline:"central",transform:c?`rotate(${c} ${a.x} ${a.y})`:void 0,children:D0[C0(a.pos,c)]},a.pos))]})})}function L0({control:s,disabled:i,onDpad:c}){const a=B.useRef(null),f=B.useRef(null),h=B.useRef(!1),[b,p]=B.useState(null);function g(R){const D=a.current;if(!D)return{screen:null,logical:null};const U=D.getBoundingClientRect(),K=Math.min(U.width,U.height)/2,F=(R.clientX-(U.left+U.width/2))/K,V=(R.clientY-(U.top+U.height/2))/K,G=Pf(F,V),ae=fi(F,V,cc(s.rotation)),se=Pf(ae.x,ae.y);return{screen:G,logical:se}}function y(R){const D=a.current;if(!D)return!1;const U=D.getBoundingClientRect(),K=(R.clientX-U.left)/U.width,F=(R.clientY-U.top)/U.height;return K>=0&&K<=1&&F>=0&&F<=1}function w(R){R.logical!==f.current&&(f.current&&c(s.name,f.current,!1),f.current=R.logical,R.logical&&c(s.name,R.logical,!0)),p(R.screen)}function E(){h.current=!1,w({screen:null,logical:null})}return u.jsx("div",{ref:a,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:R=>{i||!y(R)||(R.preventDefault(),R.currentTarget.setPointerCapture(R.pointerId),h.current=!0,w(g(R)))},onPointerMove:R=>{i||!h.current||R.buttons===0||w(g(R))},onPointerUp:E,onPointerCancel:E,onLostPointerCapture:E,children:u.jsx(S_,{control:s,active:b})})}const B0={button:"Knapper",slider:"Slidere",toggle:"Toggleknapper",radar:"Radar",text:"Tekstfelter",joystick:"Joysticks",dpad:"Dpads"},z0=["button","slider","toggle","radar","text","joystick","dpad"];function U0({unplaced:s,onAdd:i,onClose:c}){const a=B.useMemo(()=>z0.filter(p=>s.some(g=>g.type===p)),[s]),[f,h]=B.useState(a[0]??"button"),b=s.filter(p=>p.type===f);return B.useEffect(()=>{a.length>0&&!a.includes(f)&&h(a[0])},[a,f]),u.jsxs(Tn,{title:"Tilføj kontrol",onClose:c,children:[a.length>1&&u.jsx("div",{className:"segmented add-modal-tabs",children:a.map(p=>u.jsx("button",{type:"button",className:f===p?"active":"",onClick:()=>h(p),children:B0[p]},p))}),u.jsx("div",{className:"add-lists",children:a.length===0?u.jsx("div",{className:"device-list-empty",children:"Alle kontroller er allerede placeret."}):b.map(p=>u.jsxs("button",{type:"button",className:"add-entry",onClick:()=>i(p.name),children:[u.jsx("span",{children:p.name}),u.jsx("span",{className:"iconbtn",children:u.jsx(nt,{name:"plus",size:22})})]},p.name))})]})}function k_(s){const[i,c]=B.useState({w:0,h:0}),a=B.useRef(null),f=B.useRef(null);return B.useLayoutEffect(()=>{var g;const h=s.current;if(a.current===h)return;if((g=f.current)==null||g.disconnect(),f.current=null,a.current=h,!h){c(y=>y.w===0&&y.h===0?y:{w:0,h:0});return}const b=()=>{const y={w:h.clientWidth,h:h.clientHeight};c(w=>w.w===y.w&&w.h===y.h?w:y)};b();const p=new ResizeObserver(b);p.observe(h),f.current=p}),B.useEffect(()=>()=>{var h;(h=f.current)==null||h.disconnect(),f.current=null,a.current=null},[]),i}function aa(s){return s.centerX2!==null&&s.centerY2!==null&&s.spanX!==null&&s.spanY!==null}const H0=4,I0=5;function G0(s){return s==="joystick"||s==="dpad"?{spanX:6,spanY:6}:{spanX:H0,spanY:I0}}function Bh(s){if(!aa(s))return null;const i=s.centerX2/2,c=s.centerY2/2;return{x0:i-s.spanX/2,x1:i+s.spanX/2,y0:c-s.spanY/2,y1:c+s.spanY/2}}function V0(s,i,c=.02){return s.x0<i.x1-c&&i.x0<s.x1-c&&s.y0<i.y1-c&&i.y0<s.y1-c}function zh(s,i){const c=ms(s,i);if(!c||s.spanX===null||s.spanY===null)return s;const a=tc(c.cx,c.cy,s.spanX,s.spanY,i);return{...s,centerX2:a.centerX2,centerY2:a.centerY2}}function Uh(s,i){return Math.max(1,Math.min(i.cols-1,s))}function Hh(s,i){return Math.max(1,Math.min(i.rows-1,s))}function P0(){const s=le(O=>O.layout),i=le(O=>O.active),c=le(O=>O.saveLayout),a=le(O=>O.setEditMode),f=le(O=>O.askConfirm),h=!!(i!=null&&i.canEdit),[b,p]=B.useState(()=>s.map(O=>({...O}))),[g,y]=B.useState(null),[w,E]=B.useState(!1),[R,D]=B.useState(null),[U,K]=B.useState(null),[F,V]=B.useState(!1),G=B.useRef(null),ae=k_(G),se=ae.w>0&&ae.h>0,oe=d_(ae.w,ae.h,i==null?void 0:i.gridCols,i==null?void 0:i.gridRows),he=B.useMemo(()=>se?Cb(oe):[],[oe,se]),te=b.filter(aa),ee=b.filter(O=>!aa(O)),Re=B.useMemo(()=>{const O=new Set;for(let Z=0;Z<te.length;Z+=1)for(let J=Z+1;J<te.length;J+=1){const q=Bh(te[Z]),He=Bh(te[J]);q&&He&&V0(q,He)&&(O.add(te[Z].name),O.add(te[J].name))}return O},[te]),ve=Re.size>0,we=b.find(O=>O.name===g)??null,W=B.useMemo(()=>Ih(b)!==Ih(s),[b,s]),Fe=B.useMemo(()=>{if(!R||!U)return null;const O=b.find(q=>q.name===R);if(!O||O.spanX===null||O.spanY===null)return null;const Z=tc(U.cx,U.cy,O.spanX,O.spanY,oe),J=ms({...O,centerX2:Z.centerX2,centerY2:Z.centerY2},oe);return J?{name:O.name,rect:J}:null},[b,R,U,oe]);function Ae(O,Z){p(J=>J.map(q=>q.name===O?Z(q):q))}function $e(O,Z){O.stopPropagation(),y(Z.name);const J=ms(Z,oe);J&&(D(Z.name),K({cx:J.cx,cy:J.cy}),O.currentTarget.setPointerCapture(O.pointerId))}function H(O){if(!R)return;const Z=G.current;if(!Z)return;const J=Z.getBoundingClientRect(),q=Z.clientWidth/J.width,He=Z.clientHeight/J.height;K({cx:Math.max(0,Math.min(Z.clientWidth,(O.clientX-J.left)*q)),cy:Math.max(0,Math.min(Z.clientHeight,(O.clientY-J.top)*He))})}function re(){if(R&&U){const O=b.find(Z=>Z.name===R);if(O&&O.spanX!==null&&O.spanY!==null){const Z=tc(U.cx,U.cy,O.spanX,O.spanY,oe);Ae(R,J=>({...J,centerX2:Z.centerX2,centerY2:Z.centerY2}))}}D(null),K(null)}function ue(O){Ae(O,Z=>Z.spanX===null||Z.spanY===null?{...Z,rotation:(Z.rotation+270)%360}:zh({...Z,rotation:(Z.rotation+270)%360,spanX:Uh(Z.spanY,oe),spanY:Hh(Z.spanX,oe)},oe))}function fe(O,Z,J){Ae(O,q=>{if(q.spanX===null||q.spanY===null)return q;const He=Z==="x"?Uh(q.spanX+J,oe):q.spanX,Oe=Z==="y"?Hh(q.spanY+J,oe):q.spanY;return zh({...q,spanX:He,spanY:Oe},oe)})}function Ee(O){Ae(O,Z=>({...Z,centerX2:null,centerY2:null,spanX:null,spanY:null,rotation:0})),y(null)}function k(O){E(!1);const Z=b.find(Oe=>Oe.name===O);if(!Z)return;const{spanX:J,spanY:q}=G0(Z.type),He=tc(oe.areaW/2,oe.areaH/2,J,q,oe);Ae(O,()=>({...Z,spanX:J,spanY:q,rotation:0,centerX2:He.centerX2,centerY2:He.centerY2})),y(O)}async function z(){ve||(V(!0),await c(b),V(!1))}function ne(){if(!W){a(!1);return}f({title:"Kassér ændringer",message:"Vil du forlade redigering og kassere dine layout-ændringer?",confirmLabel:"Kassér",onConfirm:()=>a(!1)})}return u.jsxs("div",{className:"edit-view",children:[u.jsx("div",{className:"edit-band edit-toolbar-band",children:we&&aa(we)?u.jsxs("div",{className:"edit-toolbar",onPointerDown:O=>O.stopPropagation(),children:[u.jsx(os,{label:"⟲",title:"Roter",onClick:()=>ue(we.name)}),u.jsx(os,{label:"W−",title:"Gør smallere",onClick:()=>fe(we.name,"x",-1),disabled:we.spanX===null||we.spanX<=1}),u.jsx(os,{label:"W+",title:"Gør bredere",onClick:()=>fe(we.name,"x",1),disabled:we.spanX===null||we.spanX>=oe.cols-1}),u.jsx(os,{label:"H−",title:"Gør lavere",onClick:()=>fe(we.name,"y",-1),disabled:we.spanY===null||we.spanY<=1}),u.jsx(os,{label:"H+",title:"Gør højere",onClick:()=>fe(we.name,"y",1),disabled:we.spanY===null||we.spanY>=oe.rows-1}),u.jsx("button",{className:"iconbtn",style:{color:"var(--red)"},onClick:()=>Ee(we.name),"aria-label":"Slet",children:u.jsx(nt,{name:"delete",size:24})})]}):u.jsx("span",{className:"edit-hint",children:"Vælg en kontrol for at redigere"})}),u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:"controls-area",ref:G,style:{touchAction:"none"},onPointerMove:H,onPointerUp:re,onPointerDown:()=>y(null),children:se&&u.jsxs(u.Fragment,{children:[u.jsx("svg",{width:oe.areaW,height:oe.areaH,style:{position:"absolute",inset:0,pointerEvents:"none"},children:he.map((O,Z)=>u.jsx("circle",{cx:O.x,cy:O.y,r:2.5,fill:"rgba(198,80,78,0.45)"},Z))}),Fe&&u.jsx("div",{className:"snap-preview",style:{left:Fe.rect.cx,top:Fe.rect.cy,width:Fe.rect.width,height:Fe.rect.height}}),te.map(O=>{const Z=R===O.name&&U,J=ms(O,oe);if(!J)return null;const q=Z?U.cx:J.cx,He=Z?U.cy:J.cy,Oe={left:q,top:He,width:J.width,height:J.height,outline:g===O.name?"3px solid var(--text)":"none",outlineOffset:2};return u.jsx("div",{className:`control ${Re.has(O.name)?"colliding":""}`,style:Oe,onPointerDown:Qn=>$e(Qn,O),children:O.type==="button"?u.jsx("div",{className:"control-button",style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},children:u.jsx(uc,{name:O.name,width:J.width,height:J.height,rotation:O.rotation})}):O.type==="toggle"?u.jsx("div",{className:"control-toggle on",style:{width:"100%",height:"100%"},children:u.jsx(uc,{name:O.name,width:J.width,height:J.height,rotation:O.rotation})}):O.type==="radar"?u.jsx(y_,{control:O,pings:[],width:J.width,height:J.height,preview:!0}):O.type==="text"?u.jsx(b_,{message:O.name,width:J.width,height:J.height,rotation:O.rotation}):O.type==="joystick"?u.jsx(E_,{control:O,width:J.width,height:J.height,pos:{nx:0,ny:0}}):O.type==="dpad"?u.jsx(S_,{control:O}):u.jsx("div",{className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:u.jsx(x_,{name:O.name,rotation:O.rotation,width:J.width,height:J.height,value:50,showEnds:!0,lowLabel:String(O.sliderMin??0),highLabel:String(O.sliderMax??100),fillColor:Re.has(O.name)?"var(--disabled)":"var(--red)"})})},O.name)}),h&&u.jsx("button",{type:"button",className:"fab",style:{width:52,height:52,right:12,bottom:12},onPointerDown:O=>O.stopPropagation(),onClick:()=>E(!0),"aria-label":"Tilføj kontrol",children:u.jsx(nt,{name:"plus",size:24})}),F&&u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})]})})}),u.jsxs("div",{className:"edit-band edit-actions-band",children:[u.jsx("button",{className:"btn btn-outline",style:{flex:1},type:"button",onClick:ne,disabled:F,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary",style:{flex:1},type:"button",onClick:z,disabled:ve||F,children:F?"Gemmer...":"Gem"})]}),w&&u.jsx(U0,{unplaced:ee,onAdd:k,onClose:()=>E(!1)})]})}function Ih(s){return JSON.stringify(s.map(i=>({type:i.type,name:i.name,centerX2:i.centerX2,centerY2:i.centerY2,spanX:i.spanX,spanY:i.spanY,rotation:i.rotation})))}function os({label:s,title:i,disabled:c,onClick:a}){return u.jsx("button",{type:"button","aria-label":i,title:i,disabled:c,onClick:a,style:{minWidth:38,height:38,borderRadius:12,background:c?"var(--grey)":"var(--red)",color:"var(--white)",fontWeight:800,fontSize:14,padding:"0 8px"},children:s})}function Y0(){const s=le(G=>G.layout),i=le(G=>G.editMode),c=le(G=>G.active),a=le(G=>G.sliderValues),f=le(G=>G.toggleValues),h=le(G=>G.radarPings),b=le(G=>G.textValues),p=le(G=>G.toggleSideMenu),g=le(G=>G.sendButton),y=le(G=>G.sendSlider),w=le(G=>G.sendToggle),E=le(G=>G.sendJoystick),R=le(G=>G.sendDpad),D=B.useRef(null),U=k_(D),K=d_(U.w,U.h,c==null?void 0:c.gridCols,c==null?void 0:c.gridRows),F=U.w>0&&U.h>0,V=s.filter(aa);return u.jsxs("div",{className:"screen control-screen",children:[u.jsx(nd,{title:"Kontrol Panel",onMenu:()=>p()}),i?u.jsx(P0,{}):u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:"controls-area",ref:D,children:F?V.map(G=>{const ae=ms(G,K);return ae?u.jsx(f0,{control:G,rect:ae,disabled:!1,latestValue:G.type==="slider"?a[G.name]:void 0,toggleValue:G.type==="toggle"?f[G.name]:void 0,radarPings:G.type==="radar"?h[G.name]:void 0,textValue:G.type==="text"?b[G.name]:void 0,onButton:g,onSlider:y,onToggle:w,onJoystick:E,onDpad:R},G.name):null}):u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})})})]})}const F0="",Gh="",Vh="",ci="";function cs(s){return new Promise(i=>setTimeout(i,s))}class $0{constructor(i){this.transport=i}async interrupt(){await this.transport.write(Vh),await cs(80),await this.transport.write(Vh)}async friendlyRepl(){await this.transport.write(Gh)}async softReset(){await this.transport.write(ci)}async stop(){await this.interrupt(),await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(`try:
    ble.disconnect()
except Exception:
    pass
`).catch(()=>{})}async runFile(i,c){await this.interrupt(),await this.waitForFriendlyPrompt().catch(async()=>{await this.friendlyRepl().catch(()=>{}),await cs(180)}),await cs(120),c==null||c(),await this.transport.writeLine(`import builtins as _pkp_builtins; exec(_pkp_builtins.open(${JSON.stringify(i)}).read())`)}async sendFriendlyLine(i){await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(i)}async sendProgramInput(i){await this.transport.writeLine(i)}async enterRawRepl(i=2500){if(await this.interrupt(),await cs(80),await this.transport.write(`\r
`),await cs(40),!(await this.collectUntil(async()=>{await this.transport.write(F0)},a=>a.includes("raw REPL")||a.includes("raw REPL; CTRL-B to exit"),i)).includes("raw REPL"))throw new Error("Kunne ikke skifte til MicroPython raw REPL.")}async exec(i,c=6e3){await this.enterRawRepl();const a=await this.collectUntil(async()=>{await this.transport.write(i),i.endsWith(`
`)||await this.transport.write(`
`),await this.transport.write(ci)},f=>f.includes(`${ci}${ci}`)||f.includes(`${ci}>`),c);return await this.friendlyRepl().catch(()=>{}),q0(a)}collectUntil(i,c,a){return new Promise((f,h)=>{let b="",p=null;const g=setTimeout(()=>{p==null||p(),h(new Error("Timeout ved USB REPL kommando."))},a);p=this.transport.addDataListener(y=>{b+=y,c(b)&&(clearTimeout(g),p==null||p(),f(b))}),i().catch(y=>{clearTimeout(g),p==null||p(),h(y instanceof Error?y:new Error("USB REPL kommando fejlede."))})})}async waitForFriendlyPrompt(i=1600){await this.collectUntil(async()=>{await this.transport.write(Gh)},c=>/(^|\r?\n)>>> ?$/.test(c),i)}}function q0(s){const i=s.indexOf("OK"),c=s.indexOf(ci,i>=0?i:0),a=c>=0?s.indexOf(ci,c+1):-1;if(i<0||c<0)return{output:s.trim(),error:"",raw:s};const f=s.slice(i+2,c).replace(/^\r?\n/,"").trimEnd(),h=a>=0?s.slice(c+1,a).trim():"";return{output:f,error:h,raw:s}}const K0=[{version:"MicroPython v1.28.0",date:"2026-04-06",stamp:"20260406",tag:"v1.28.0"},{version:"MicroPython v1.27.0",date:"2025-12-09",stamp:"20251209",tag:"v1.27.0"},{version:"MicroPython v1.26.1",date:"2025-09-11",stamp:"20250911",tag:"v1.26.1"},{version:"MicroPython v1.26.0",date:"2025-08-09",stamp:"20250809",tag:"v1.26.0"},{version:"MicroPython v1.25.0",date:"2025-04-15",stamp:"20250415",tag:"v1.25.0"},{version:"MicroPython v1.24.1",date:"2024-11-29",stamp:"20241129",tag:"v1.24.1"},{version:"MicroPython v1.24.0",date:"2024-10-25",stamp:"20241025",tag:"v1.24.0"},{version:"MicroPython v1.23.0",date:"2024-06-02",stamp:"20240602",tag:"v1.23.0"},{version:"MicroPython v1.22.2",date:"2024-02-22",stamp:"20240222",tag:"v1.22.2"},{version:"MicroPython v1.22.1",date:"2024-01-05",stamp:"20240105",tag:"v1.22.1"}],X0=[{board:"Raspberry Pi Pico",firmwareName:"RPI_PICO"},{board:"Raspberry Pi Pico W",firmwareName:"RPI_PICO_W"}],Nl=X0.flatMap(({board:s,firmwareName:i})=>K0.map(({version:c,date:a,stamp:f,tag:h})=>{const b=`${i}-${f}-${h}.uf2`;return{board:s,version:c,date:a,fileName:b,url:`https://micropython.org/resources/firmware/${b}`}})),Lf=512,Bf=`import builtins as _pkp_builtins
`;function zr(s){return JSON.stringify(s)}function Q0(s){return`bytes.fromhex(${JSON.stringify([...s].map(i=>i.toString(16).padStart(2,"0")).join(""))})`}function Z0(s,i){return`${s==="/"?"":s.replace(/\/$/,"")}/${i}`}class W0{constructor(i){this.repl=i}async list(i="/"){const c=`
import os
base = ${zr(i)}
for name in os.listdir(base):
    p = (${zr(i)}.rstrip('/') + '/' + name) if ${zr(i)} != '/' else '/' + name
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
${Bf}with _pkp_builtins.open(${zr(i)}, 'rb') as f:
    while True:
        b = f.read(${Lf})
        if not b:
            break
        print(b.hex())
`,a=await this.repl.exec(c,1e4);if(a.error)throw new Error(a.error);const f=a.output.replace(/\s+/g,"");return new TextDecoder().decode(J0(f))}async writeText(i,c,a){const f=new TextEncoder().encode(c);if(a==null||a(5,"Klargør fil..."),await this.repl.exec(`${Bf}_pkp_builtins.open(${zr(i)}, 'wb').close()`),f.length===0){a==null||a(100,"Gemt på Pico");return}for(let h=0;h<f.length;h+=Lf){const b=f.slice(h,h+Lf),p=`
${Bf}with _pkp_builtins.open(${zr(i)}, 'ab') as f:
    f.write(${Q0(b)})
`,g=await this.repl.exec(p,1e4);if(g.error)throw new Error(g.error);const y=Math.min(h+b.length,f.length);a==null||a(10+Math.round(y/f.length*85),`Gemmer ${y}/${f.length} bytes...`)}a==null||a(100,"Gemt på Pico")}async replaceTextSafely(i,c,a,f={}){const h=`${i}.tmp`;if(await this.writeText(h,c,(g,y)=>a==null?void 0:a(Math.min(70,g*.7),y)),a==null||a(78,"Verificerer fil..."),await this.readText(h)!==c)throw await this.delete(h).catch(()=>{}),new Error(`Verificering fejlede for ${i}.`);a==null||a(88,"Udskifter fil...");let p=!!f.createBackup;if(p){const g=await this.readText(i).catch(()=>null);p=g!==null&&g!==c}if(p){const g=await this.nextBackupPath(i).catch(()=>`${i}.backup`);await this.rename(i,g).catch(()=>{})}else await this.delete(i).catch(()=>{});await this.rename(h,i),a==null||a(100,"Installeret på Pico")}async delete(i){const c=await this.repl.exec(`
import os
os.remove(${zr(i)})
`);if(c.error)throw new Error(c.error)}async nextBackupPath(i){const c=await this.list("/"),a=new Set(c.map(E=>E.path.toLowerCase())),f=i.replace(/\\/g,"/"),h=f.lastIndexOf("/"),b=h>=0?f.slice(0,h+1):"/",p=h>=0?f.slice(h+1):f.replace(/^\/+/,""),g=p.lastIndexOf("."),y=g>0?p.slice(0,g):p,w=g>0?p.slice(g):"";for(let E=1;E<1e3;E+=1){const R=`${b}${y}_backup${E}${w}`;if(!a.has(R.toLowerCase()))return R}return`${b}${y}_backup${Date.now()}${w}`}async rename(i,c){const a=await this.repl.exec(`
import os
os.rename(${zr(i)}, ${zr(c)})
`);if(a.error)throw new Error(a.error)}}function J0(s){const i=new Uint8Array(Math.floor(s.length/2));for(let c=0;c<i.length;c+=1)i[c]=parseInt(s.slice(c*2,c*2+2),16);return i}const ey=`from machine import Pin                    # Giver adgang til pins på Pico W, fx LED'en
import utime as time                       # Bruges til tid, pauser og timere
import network                             # Bruges til at forbinde Pico W til Wi-Fi
import gc                                  # Bruges til at rydde op i hukommelsen

try:                                       # Prøv først MicroPython-versionen af requests
    import urequests as requests           # urequests henter data fra internettet
except ImportError:                        # Hvis urequests ikke findes
    import requests                        # Brug den almindelige requests i stedet

from BLEPeripheral import BLEPeripheral    # Biblioteket der laver Bluetooth kontrolpanelet
from secrets import WIFI_SSID, WIFI_PASSWORD  # Henter Wi-Fi navn og kode fra secrets.py


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
    wlan.connect(WIFI_SSID, WIFI_PASSWORD) # Forbind med navn og kode fra secrets.py

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


ble = BLEPeripheral(                       # Start Bluetooth kontrolpanelet
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
class BLEPeripheral:\r
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
            self._command_buffer = ""\r
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
        protected = ("/BLEPeripheral.py",)\r
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
        if path in ("/BLEPeripheral.py", "/main.py"):\r
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
        """Best-effort disconnect for classroom Stop/recovery flows."""\r
        if self.conn_handle is not None:\r
            try:\r
                self.ble.gap_disconnect(self.conn_handle)\r
            except Exception as e:\r
                print("gap_disconnect failed:", e)\r
                self._handle_disconnected("gap_disconnect_failed")\r
        else:\r
            self._handle_disconnected("disconnect_without_handle")\r
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
        return cms`,ry=`import array, time\r
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
`,ly=`from machine import Pin
import utime as time
from BLEPeripheral import BLEPeripheral
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


# callbacks=globals() gør, at BLEPeripheral kan finde on_dpad osv.
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())


while True:
    # BLE-funktionerne styrer bilen. Hold programmet i gang og giv CPU-tid
    # til Bluetooth.
    time.sleep_ms(100)
`,iy=`from machine import Pin
import utime as time
from BLEPeripheral import BLEPeripheral
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


# callbacks=globals() gør, at BLEPeripheral kan finde on_joystick osv.
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())


while True:
    # BLE-funktionerne styrer bilen. Hold programmet i gang og giv CPU-tid
    # til Bluetooth.
    time.sleep_ms(100)
`,ay=`from machine import Pin
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
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())


while True:
    # Programmet skal blive ved med at køre, så appen kan sende kommandoer.
    time.sleep_ms(100)
`,sy=`# PicoFly.py\r
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
        self.initPCA()`,cy=`from machine import Pin\r
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
# callbacks=globals() gør, at BLEPeripheral kan finde on_toggle osv.\r
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())\r
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
`,uy=`from machine import Pin
import utime as time
from BLEPeripheral import BLEPeripheral


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


ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())

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
`,fy=`from machine import Pin, PWM, ADC\r
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
    device_base_name=DEVICE_NAME,\r
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
    print('[STOP] Programmet stoppede. Buzzer, lys og servo er sat sikkert.')\r
`,dy=`from machine import Pin\r
import utime as time\r
from BLEPeripheral import BLEPeripheral\r
import PicoRobotics\r
\r
\r
# Simpelt tank-styringsprogram til en robotbil med to motorer.\r
# Hver slider sender -100..100 og går tilbage til 0, når den slippes.\r
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.\r
DEVICE_NAME = 'TankBil'\r
\r
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
        print('Ukendt slider:', name)\r
\r
\r
def on_connect():\r
    # Når appen forbinder, tænder LED'en.\r
    led.on()\r
\r
\r
def on_disconnect():\r
    # Når appen afbryder, slukker LED'en og begge motorer stoppes.\r
    led.off()\r
    board.motorOff(1)\r
    board.motorOff(2)\r
\r
\r
# callbacks=globals() gør, at BLEPeripheral kan finde on_slider osv.\r
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())\r
\r
\r
while True:\r
    # BLE-funktionerne styrer bilen. Hold programmet i gang og giv CPU-tid\r
    # til Bluetooth.\r
    time.sleep_ms(100)\r
`,na=[{id:"program:send-text",path:"/main.py",label:"Send tekst (main.py)",description:"Startprogram med kun et tekstfelt, hvor Picoen sender beskeder til kontrolpanelet.",kind:"program",difficulty:"Nem",content:uy},{id:"program:neopixel-led",path:"/main.py",label:"NeoPixel lys (main.py)",description:"Startprogram til NeoPixel med hold-knap og lysstyrke-slider.",kind:"program",difficulty:"Nem",content:ay},{id:"program:tank-control",path:"/main.py",label:"Robotbil med tankstyring (main.py)",description:"Startprogram til robotbil med to motor-slidere.",kind:"program",difficulty:"Mellem",content:dy},{id:"program:dpad-control",path:"/main.py",label:"Robotbil med D-pad (main.py)",description:"Startprogram til robotbil styret med fire retningsknapper og fart-slider.",kind:"program",difficulty:"Mellem",content:ly},{id:"program:joystick-control",path:"/main.py",label:"Robotbil med joystick (main.py)",description:"Startprogram til robotbil styret med joystick og fart-slider.",kind:"program",difficulty:"Mellem",content:iy},{id:"program:radar-control",path:"/main.py",label:"Radar med afstandssensor (main.py)",description:"Startprogram til radar med servo, afstandssensor og scan-toggle.",kind:"program",difficulty:"Svær",content:cy},{id:"program:api-weather",path:"/main.py",label:"Vejr fra internettet (main.py)",description:"Startprogram der henter vejr fra et API over Wi-Fi og viser det i tekstfelter. Kræver en secrets.py med WIFI_SSID og WIFI_PASSWORD.",kind:"program",difficulty:"Svær",content:ey},{id:"program:smart-home",path:"/main.py",label:"SmartHome alarmstation (main.py)",description:"Startprogram til alarmstation med dør-servo, keypad, PIR, vandsensor, buzzer og NeoPixel.",kind:"program",difficulty:"Svær",content:fy},{id:"library:ble-peripheral",path:"/BLEPeripheral.py",label:"BLEPeripheral.py",description:"Bluetooth-biblioteket der får Picoen til at tale med appen.",kind:"library",content:ny},{id:"library:pico-robotics",path:"/PicoRobotics.py",label:"PicoRobotics.py",description:"Bibliotek til Kitronik Pico Robotics Board.",kind:"library",content:oy},{id:"library:pico-fly",path:"/PicoFly.py",label:"PicoFly.py",description:"Bibliotek til PicoFly-board med motorer og servoer.",kind:"library",content:sy},{id:"library:hcsr04",path:"/hcsr04.py",label:"hcsr04.py",description:"Bibliotek til HC-SR04 ultralyds-afstandssensor.",kind:"library",content:ty},{id:"library:neopixel",path:"/neopixel.py",label:"neopixel.py",description:"Bibliotek til NeoPixel LED-strips og LED-ringe.",kind:"library",content:ry}],my=11914;function py(){return typeof navigator<"u"&&"serial"in navigator&&!!navigator.serial}function hy(){return py()?{supported:!0,message:"USB-udvikling er tilgængelig i denne browser."}:{supported:!1,message:"USB-udvikling kræver en computer med Chrome, Edge eller Chromebook."}}class _y{constructor(i={}){me(this,"port",null);me(this,"reader",null);me(this,"writer",null);me(this,"readLoopDone",null);me(this,"readLoopActive",!1);me(this,"disconnecting",!1);me(this,"buffer","");me(this,"events");me(this,"dataListeners",new Set);this.events=i}get connected(){return!!this.port&&!!this.writer}get info(){var i;return((i=this.port)==null?void 0:i.getInfo())??null}async requestAndConnect(){if(!navigator.serial)throw new Error("Web Serial er ikke tilgængelig i denne browser.");const i=await navigator.serial.requestPort({filters:[{usbVendorId:my}]});await this.openPort(i)}async connectKnownPort(i){await this.openPort(i)}async disconnect(){var g,y;const i=this.connected||!!this.port||!!this.reader,c=this.port,a=this.reader,f=this.writer,h=this.readLoopDone,b=a==null?void 0:a.closed.catch(()=>{}),p=f==null?void 0:f.closed.catch(()=>{});this.disconnecting=!0,this.readLoopActive=!1;try{await(a==null?void 0:a.cancel())}catch{}h&&await h.catch(()=>{}),await b;try{a==null||a.releaseLock()}catch{}this.reader===a&&(this.reader=null);try{await(f==null?void 0:f.close()),await p}catch{try{await(f==null?void 0:f.abort("disconnect"))}catch{}}try{f==null||f.releaseLock()}catch{}this.writer===f&&(this.writer=null),c&&await c.close(),this.port===c&&(this.port=null),this.buffer="",this.readLoopDone===h&&(this.readLoopDone=null),this.disconnecting=!1,i&&((y=(g=this.events).onDisconnect)==null||y.call(g))}async write(i){if(!this.writer)throw new Error("Ingen USB-forbindelse.");await this.writer.write(new TextEncoder().encode(i))}async writeLine(i){await this.write(`${i}\r
`)}addDataListener(i){return this.dataListeners.add(i),()=>this.dataListeners.delete(i)}async openPort(i){var a,f,h;if(await this.disconnect().catch(()=>{}),await i.open({baudRate:115200,bufferSize:4096}),this.port=i,this.writer=((a=i.writable)==null?void 0:a.getWriter())??null,!this.writer||!i.readable)throw new Error("USB-porten kunne ikke åbnes til læsning og skrivning.");const c=i.getInfo();(h=(f=this.events).onLog)==null||h.call(f,"success",`USB-forbindelse oprettet (${gy(c)}).`),this.readLoopDone=this.startReadLoop(i)}async startReadLoop(i){var f,h,b;this.readLoopActive=!0;const c=new TextDecoder;this.reader=((f=i.readable)==null?void 0:f.getReader())??null;const a=this.reader;if(a)try{for(;this.readLoopActive;){const{value:p,done:g}=await a.read();if(g)break;p&&this.consumeText(c.decode(p,{stream:!0}))}}catch(p){this.readLoopActive&&((b=(h=this.events).onLog)==null||b.call(h,"error",p instanceof Error?p.message:"USB-læsning stoppede."))}finally{try{a.releaseLock()}catch{}this.reader===a&&(this.reader=null),this.readLoopActive&&!this.disconnecting&&this.port===i&&this.closeAfterUnexpectedReadEnd(i)}}async closeAfterUnexpectedReadEnd(i){var h,b;const c=this.connected||this.port===i;this.disconnecting=!0,this.readLoopActive=!1;const a=this.writer,f=a==null?void 0:a.closed.catch(()=>{});try{await(a==null?void 0:a.close()),await f}catch{try{await(a==null?void 0:a.abort("disconnect"))}catch{}}try{a==null||a.releaseLock()}catch{}this.writer===a&&(this.writer=null);try{await i.close()}catch{}this.port===i&&(this.port=null),this.buffer="",this.readLoopDone=null,this.disconnecting=!1,c&&((b=(h=this.events).onDisconnect)==null||b.call(h))}consumeText(i){var c,a,f,h;(a=(c=this.events).onData)==null||a.call(c,i);for(const b of this.dataListeners)b(i);for(this.buffer+=i;this.buffer.includes(`
`);){const b=this.buffer.indexOf(`
`),p=this.buffer.slice(0,b).replace(/\r$/,"");this.buffer=this.buffer.slice(b+1),(h=(f=this.events).onLine)==null||h.call(f,p)}}}function gy(s){const i=s.usbVendorId!==void 0?`VID ${s.usbVendorId.toString(16).padStart(4,"0")}`:"ukendt VID",c=s.usbProductId!==void 0?`PID ${s.usbProductId.toString(16).padStart(4,"0")}`:"ukendt PID";return`${i}, ${c}`}const N_=15e3,Ph=64*1024,Yh=1e5,R_=new URL("/micropython/micropython.mjs",window.location.origin).toString(),by=64*1024,Fh=8;function T_(){return typeof SharedArrayBuffer<"u"&&globalThis.crossOriginIsolated===!0}function yy(){return T_()?new SharedArrayBuffer(by):null}function vy(s,i){const c=new Int32Array(s,0,2),a=new Uint8Array(s),f=s.byteLength-Fh,h=new TextEncoder().encode(i+`
`);let b=Atomics.load(c,0);for(const p of h)a[Fh+b%f]=p,b+=1;Atomics.store(c,0,b),Atomics.notify(c,0)}const xy=new Set(["bluetooth","machine","network","PicoRobotics","rp2","ubluetooth"]);class wy{constructor(){me(this,"worker",null);me(this,"pending",null);me(this,"nextId",0)}send(i,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython-terminalen er optaget. Stop den, eller vent på at kommandoen bliver færdig.",timedOut:!1,unavailable:!1});const a=++this.nextId,f=c.timeoutMs??N_,h=this.ensureWorker();return new Promise(b=>{const p=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython-terminalen stoppede, fordi kommandoen tog for lang tid. Tjek for uendelige løkker.",timedOut:!0,unavailable:!1}),this.restartWorker()},f);this.pending={id:a,timer:p,onOutput:c.onOutput,resolve:b},h.postMessage({type:"run",id:a,code:Sy(i),runtimeUrl:R_})})}reset(){this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),this.restartWorker()}dispose(){var i;this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),(i=this.worker)==null||i.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const i=new Worker(new URL(""+new URL("offlineMicroPython.worker-CyZOxxkY.js",import.meta.url).href,import.meta.url),{type:"module"});return i.onmessage=c=>this.handleMessage(c.data),i.onerror=c=>{this.finish({ok:!1,output:"",error:c.message||"Browser-MicroPython-terminalen fejlede i browser-worker.",timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=i,i}handleMessage(i){var a;const c=this.pending;if(!(!c||i.id!==c.id||i.type==="ready")){if(i.type==="stdout"){(a=c.onOutput)==null||a.call(c,i.text);return}if(i.type==="unavailable"){this.finish({ok:!1,output:"",error:i.error,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:i.ok,output:i.output,error:i.error,timedOut:!1,unavailable:!1})}}finish(i){const c=this.pending;c&&(window.clearTimeout(c.timer),this.pending=null,c.resolve(i))}restartWorker(){var i;(i=this.worker)==null||i.terminate(),this.worker=null}}class Ey{constructor(){me(this,"worker",null);me(this,"pending",null);me(this,"nextId",0);me(this,"stdinSab",null)}run(i,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython kører allerede kode. Stop den først.",issues:[],timedOut:!1,unavailable:!1});const a=typeof c=="number"?c:c.timeoutMs===null?null:c.timeoutMs??N_,f=typeof c=="number"?void 0:c.onOutput,h=typeof c=="number"?void 0:c.signal,b=Yf(i,{allowInput:!0});if(b.some(w=>w.level==="error"))return Promise.resolve({ok:!1,output:"",error:"",issues:b,timedOut:!1,unavailable:!1});const p=++this.nextId,g=this.ensureWorker(),y=yy();return this.stdinSab=y,new Promise(w=>{const E=K=>this.finish(K),R=()=>{this.restartWorker(),E({ok:!1,output:"",error:"",issues:b,timedOut:!1,unavailable:!1})},D=a===null?null:window.setTimeout(()=>{E({ok:!1,output:"",error:"Browser-MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:b,timedOut:!0,unavailable:!1}),this.restartWorker()},a);if(this.pending={id:p,timer:D,timeoutMs:a,issues:b,onOutput:f,signal:h,abort:R,resolve:w},h!=null&&h.aborted){R();return}h==null||h.addEventListener("abort",R,{once:!0});const U={type:"run",id:p,code:i,runtimeUrl:R_,interactive:!0,sab:y??void 0};g.postMessage(U)})}sendInput(i){const c=this.pending;!c||!this.stdinSab||(this.refreshTimeout(c),vy(this.stdinSab,i))}stop(){const i=this.pending;i&&(this.restartWorker(),this.finish({ok:!1,output:"",error:"Browser-MicroPython blev stoppet.",issues:i.issues,timedOut:!1,unavailable:!1}))}dispose(){var i;this.finish({ok:!1,output:"",error:"",issues:[],timedOut:!1,unavailable:!1}),(i=this.worker)==null||i.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const i=new Worker(new URL(""+new URL("offlineMicroPython.worker-CyZOxxkY.js",import.meta.url).href,import.meta.url),{type:"module"});return i.onmessage=c=>this.handleMessage(c.data),i.onerror=c=>{const a=this.pending;this.finish({ok:!1,output:"",error:c.message||"Offline MicroPython fejlede i browser-worker.",issues:(a==null?void 0:a.issues)??[],timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=i,i}handleMessage(i){var a;const c=this.pending;if(!(!c||i.id!==c.id||i.type==="ready")){if(i.type==="stdout"){this.refreshTimeout(c),(a=c.onOutput)==null||a.call(c,i.text);return}if(i.type==="unavailable"){this.finish({ok:!1,output:"",error:i.error,issues:c.issues,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:i.ok,output:i.output,error:i.error,issues:c.issues,timedOut:!1,unavailable:!1}),this.restartWorker()}}finish(i){var a;const c=this.pending;c&&(c.timer!==null&&window.clearTimeout(c.timer),(a=c.signal)==null||a.removeEventListener("abort",c.abort),this.pending=null,c.resolve(i))}refreshTimeout(i){i.timeoutMs!==null&&(i.timer!==null&&window.clearTimeout(i.timer),i.timer=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:i.issues,timedOut:!0,unavailable:!1}),this.restartWorker()},i.timeoutMs))}restartWorker(){var i;(i=this.worker)==null||i.terminate(),this.worker=null,this.stdinSab=null}}function Sy(s){const i=JSON.stringify(s);return["try:",`    __pico_repl_value = eval(${i})`,"    if __pico_repl_value is not None:","        print(repr(__pico_repl_value))","except SyntaxError:",`    exec(${i})`,"finally:","    try:","        del __pico_repl_value","    except Exception:","        pass"].join(`
`)}function Yf(s,i={}){const c=[],a=new Blob([s]).size;a>Ph&&c.push({level:"error",text:`Koden er ${a} bytes. Offline MicroPython kører kun små programmer op til ${Ph} bytes.`});const f=s.split(/\r?\n/);for(let h=0;h<f.length;h+=1){const b=h+1,p=fc(f[h]).trim();if(!p)continue;const g=Ny(p);g&&xy.has(g)&&c.push({level:"error",line:b,text:`${g} virker kun på Picoen. Forbind en Pico for at køre denne kode.`}),!i.allowInput&&ky(f[h])&&c.push({level:"error",line:b,text:"input() virker i hele programmer. Skriv programmet i editoren og tryk Kør, eller kør filen på Pico via USB."});const y=p.match(/\brange\(\s*(-?\d+)\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\)/);y&&Ry(y)>Yh&&c.push({level:"error",line:b,text:`range(...) er for stor til offline kørsel. Brug højst ${Yh} gentagelser.`})}for(const h of Ty(f))c.push({level:"warning",text:`Funktionen ${h} ser rekursiv ud. Hvis den ikke stopper, afbryder offline MicroPython efter få sekunder.`});return c}function fc(s){let i=null;for(let c=0;c<s.length;c+=1){const a=s[c];if((a==='"'||a==="'")&&s[c-1]!=="\\"&&(i=i===a?null:i??a),a==="#"&&!i)return s.slice(0,c)}return s}function ky(s){const i=fc(s);let c=null;for(let a=0;a<i.length;a+=1){const f=i[a];if((f==='"'||f==="'")&&i[a-1]!=="\\"){c=c===f?null:c??f;continue}if(!c&&!(!$h(i[a-1])||i.slice(a,a+5)!=="input")&&$h(i[a+5])&&i.slice(a+5).trimStart().startsWith("("))return!0}return!1}function $h(s){return!s||!/[A-Za-z0-9_]/.test(s)}function Ny(s){const i=s.match(/^import\s+([A-Za-z_]\w*)/);if(i)return i[1];const c=s.match(/^from\s+([A-Za-z_]\w*)\s+import\b/);return(c==null?void 0:c[1])??null}function qh(s){const i=s.match(/^\s*/);return(i==null?void 0:i[0].replace(/\t/g,"    ").length)??0}function Ry(s){const i=Number(s[1]),c=s[2]===void 0?void 0:Number(s[2]),a=s[3]===void 0?1:Number(s[3]);if(a===0)return Number.POSITIVE_INFINITY;const b=(c===void 0?i:c)-(c===void 0?0:i);return b>0&&a<0||b<0&&a>0?0:Math.ceil(Math.abs(b/a))}function Ty(s){const i=new Set;for(let c=0;c<s.length;c+=1){const a=fc(s[c]).trim().match(/^def\s+([A-Za-z_]\w*)\s*\(/);if(!a)continue;const f=a[1],h=qh(s[c]);for(let b=c+1;b<s.length;b+=1){if(!s[b].trim())continue;if(qh(s[b])<=h)break;if(new RegExp(`\\b${f}\\s*\\(`).test(fc(s[b]))){i.add(f);break}}}return[...i]}const jy=/^(for|if|while|def|class|elif|else|try|except|finally|with)\b/;function My(s,i){var w;const c=s.trim(),a=i.split(/\r?\n/),f=Dy(c),h=f?a[f-1]??"":"",b=Ay(a,f),p=c.split(/\r?\n/).filter(Boolean).at(-1)??"";if(/KeyboardInterrupt/.test(p))return{simple:"Programmet blev stoppet.",technical:c,line:f};if(/MemoryError/.test(p))return{simple:`Picoen eller browserens MicroPython løb tør for hukommelse${f?` omkring linje ${f}`:""}.`,technical:c,line:f};if(/RecursionError/.test(p))return{simple:`En funktion kalder sig selv for mange gange${f?` omkring linje ${f}`:""}.`,technical:c,line:f};const g=p.match(/UnboundLocalError:\s+local variable ['"](.+?)['"]/);if(g)return{simple:`Variablen ${g[1]} bruges inde i en funktion, før den har fået en værdi${f?` på linje ${f}`:""}.`,technical:c,line:f};const y=p.match(/NameError:\s+name ['"](.+?)['"] (?:isn't|is not) defined/);if(y)return{simple:By(h,y[1])?`Teksten ${y[1]} mangler måske citationstegn${f?` på linje ${f}`:""}.`:`Python kender ikke navnet ${y[1]}${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/ZeroDivisionError/.test(p))return{simple:`Kan ikke dividere med 0${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/IndentationError:\s+unexpected indent/.test(p))return{simple:`Der er for meget indrykning${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/IndentationError/.test(p))return{simple:`Mangler indrykning${f?` på linje ${f}`:""}.`,technical:c,line:f};if(/ImportError|ModuleNotFoundError/.test(p)){const E=(w=p.match(/['"](.+?)['"]/))==null?void 0:w[1];return{simple:`Python kan ikke finde modulet${E?` ${E}`:""}.`,technical:c,line:f}}if(/OSError/.test(p))return/ENOENT|No such file|Errno\s+2/.test(p)?{simple:`Python kan ikke finde filen${f?` på linje ${f}`:""}.`,technical:c,line:f}:/EACCES|permission|denied/i.test(p)?{simple:`Python har ikke adgang til filen eller enheden${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Der opstod en fejl med en fil eller en enhed${f?` omkring linje ${f}`:""}.`,technical:c,line:f};if(/SyntaxError/.test(p)){if(/invalid syntax/.test(p)&&b.text.trim().endsWith(","))return{simple:`Linje ${b.line??f} slutter med komma. Tjek om der mangler noget efter kommaet.`,technical:c,line:b.line??f};const E=Ff(h,f)??Ff(b.text,b.line)??Oy(a,f);return E?{simple:`Mangler måske : efter linje ${E.line}.`,technical:c,line:E.line}:f&&b.text.trim().endsWith(":")&&h.trim()&&!/^\s+/.test(h)?{simple:`Mangler måske indrykning på linje ${f}.`,technical:c,line:f}:Ly(h)?{simple:`Tekst mangler måske citationstegn${f?` på linje ${f}`:""}.`,technical:c,line:f}:Cy(h)?{simple:`Tekst mangler måske et afsluttende citationstegn${f?` på linje ${f}`:""}.`,technical:c,line:f}:zy(h)?{simple:`Mangler måske en afsluttende parentes${f?` på linje ${f}`:""}.`,technical:c,line:f}:Uy(h)?{simple:`Der er måske en parentes for meget${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Python fandt en syntaksfejl${f?` omkring linje ${f}`:""}.`,technical:c,line:f}}return/TypeError/.test(p)?/takes .* positional arguments? but .* given/.test(p)||/function takes/.test(p)?{simple:`En funktion får for mange eller for få værdier${f?` på linje ${f}`:""}.`,technical:c,line:f}:/unsupported operand type/.test(p)?{simple:`To værdier kan ikke bruges sammen på den måde${f?` på linje ${f}`:""}.`,technical:c,line:f}:/not callable/.test(p)?{simple:`Der bliver brugt parenteser efter noget, som ikke er en funktion${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`En værdi har den forkerte type${f?` på linje ${f}`:""}.`,technical:c,line:f}:/IndexError/.test(p)?{simple:`Listen har ikke et element på den plads${f?` på linje ${f}`:""}.`,technical:c,line:f}:/KeyError/.test(p)?{simple:`Ordbogen mangler den nøgle${f?` på linje ${f}`:""}.`,technical:c,line:f}:/AttributeError/.test(p)?{simple:`Den ting har ikke den kommando${f?` på linje ${f}`:""}.`,technical:c,line:f}:/ValueError/.test(p)?/invalid literal for int/.test(p)?{simple:`Teksten kan ikke laves om til et heltal${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Værdien passer ikke her${f?` på linje ${f}`:""}.`,technical:c,line:f}:{simple:`Python fandt en fejl${f?` omkring linje ${f}`:""}.`,technical:c,line:f}}function Dy(s){var f;const c=(f=[...s.matchAll(/line\s+(\d+)/g)].at(-1))==null?void 0:f[1];if(!c)return;const a=parseInt(c,10);return Number.isFinite(a)&&a>0?a:void 0}function Ay(s,i){if(!i)return{text:""};for(let c=i-2;c>=0;c-=1){const a=s[c]??"";if(a.trim())return{line:c+1,text:a}}return{text:""}}function Ff(s,i){if(!i)return null;const c=s.trim();return!jy.test(c)||c.endsWith(":")?null:{line:i}}function Oy(s,i){const c=i?Math.min(s.length,i):s.length,a=Math.max(0,c-4);for(let f=c-1;f>=a;f-=1){const h=Ff(s[f]??"",f+1);if(h)return h}return null}function Cy(s){const i=(s.match(/'/g)??[]).length,c=(s.match(/"/g)??[]).length;return i%2===1||c%2===1}function Ly(s){var a,f;const c=(f=(a=s.trim().match(/^print\((.+)\)$/))==null?void 0:a[1])==null?void 0:f.trim();return!c||/['"]/.test(c)?!1:/\s/.test(c)&&/[a-zA-ZæøåÆØÅ]/.test(c)}function By(s,i){const c=s.trim();return!!i&&/[A-Za-zæøåÆØÅ]/.test(i)&&(c.startsWith("print(")||c.includes(`= ${i}`))}function zy(s){return j_(s)>0}function Uy(s){return j_(s)<0}function j_(s){let i=0,c=null;for(let a=0;a<s.length;a+=1){const f=s[a];if((f==='"'||f==="'")&&s[a-1]!=="\\"){c=c===f?null:c??f;continue}c||((f==="("||f==="["||f==="{")&&(i+=1),(f===")"||f==="]"||f==="}")&&(i-=1))}return i}const $f="/min_kode.py",M_=`print('Hej fra Pico Kontrol Panel')
`,Hy=500,Iy=1200,us="Backup-filnavne er reserveret til versionshistorik. Vælg et andet navn.";function Vn(s,i){return`${s}:${i}`}function Gy(s){return new Promise(i=>window.setTimeout(i,s))}function Vy(){const s=le(d=>d.toggleSideMenu),i=le(d=>d.askConfirm),c=le(d=>d.picoIdeOrigin),a=le(d=>d.active),f=le(d=>d.isBleConnected),h=le(d=>d.bleListFiles),b=le(d=>d.bleReadText),p=le(d=>d.bleWriteText),g=le(d=>d.bleDeleteFile),y=le(d=>d.bleRestartAndReconnect),[w,E]=B.useState(!1),[R,D]=B.useState(!1),[U,K]=B.useState([]),[F,V]=B.useState(!1),[G,ae]=B.useState([]),[se,oe]=B.useState(null),[he,te]=B.useState(()=>ec(Zo())),[ee,Re]=B.useState($f),[ve,we]=B.useState("local"),[W,Fe]=B.useState(()=>{var d;return((d=ec(Zo()).find(_=>_.path===$f))==null?void 0:d.content)??M_}),[Ae,$e]=B.useState([]),[H,re]=B.useState(!1),[ue,fe]=B.useState(""),[Ee,k]=B.useState(""),[z,ne]=B.useState(null),[O,Z]=B.useState(!1),[J,q]=B.useState(null),[He,Oe]=B.useState(!1),[Qn,Xt]=B.useState({}),[xe,wn]=B.useState(!1),[jn,ze]=B.useState(0),[Mn,Pt]=B.useState(()=>{var d,_;return((d=Nl.find(x=>x.board==="Raspberry Pi Pico W"))==null?void 0:d.board)??((_=Nl[0])==null?void 0:_.board)??""}),[Pn,Ur]=B.useState(()=>{var d,_;return((d=Nl.find(x=>x.board==="Raspberry Pi Pico W"))==null?void 0:d.version)??((_=Nl[0])==null?void 0:_.version)??""}),[Hr,St]=B.useState(!1),[di,Ir]=B.useState({top:0,left:0}),[En,jl]=B.useState(!1),[Ml,ua]=B.useState(!1),[Dl,Zn]=B.useState(!0),[ft,Qt]=B.useState(""),[mi,Al]=B.useState([]),[Sn,dt]=B.useState(null),[On,Gr]=B.useState(!1),[or,cr]=B.useState({}),[mt,Yn]=B.useState({}),[Pe,on]=B.useState(null),[tn,Cn]=B.useState(null),[gc,Ol]=B.useState(""),[Zt,Cl]=B.useState(()=>_h().clearTerminalOnRun),[ur,gs]=B.useState(()=>_h().simplifiedErrors),[pi,bs]=B.useState(()=>typeof navigator<"u"?Zh(navigator):!1),Vr=B.useRef(null),kt=B.useRef(null),cn=B.useRef(null),fa=B.useRef(null),Ln=B.useRef(null),pn=B.useRef(null),kn=B.useRef(null),pt=B.useRef(null),Ll=B.useRef(null),Nt=B.useRef(!1),fr=B.useRef(!1),Pr=B.useRef(!1),Wn=B.useRef(""),Wt=B.useRef(null),Rt=B.useRef(null),tt=B.useRef(null),dr=B.useRef(null),Jn=B.useRef(null),rn=B.useRef(null),Jt=B.useRef(0),mr=B.useRef(null),rt=B.useRef(null),pr=B.useRef(null),Bl=B.useRef(null),zl=B.useRef([]),Ul=B.useRef([]),Yr=B.useRef(null),Yt=hy(),_e=c==="control"&&!!a&&f(),ht=_e?(a==null?void 0:a.deviceID)??"ble":null,lt=Math.max(1,W.split(`
`).length),ys=new Blob([W]).size,bc=ve==="pico"?"Picoen":"browseren",da=B.useMemo(()=>[...new Set(Nl.map(d=>d.board))],[]),Fr=B.useMemo(()=>Nl.filter(d=>d.board===Mn),[Mn]),Ft=Nl.find(d=>d.board===Mn&&d.version===Pn)??Fr[0]??Nl[0],Tt=ve==="pico",Fn=Tt?En:Ml,$n=Tt&&En&&w&&!_e||!Tt&&Ml&&!!tt.current,vs=On||Fn&&!$n,ma=$n?"stdin":">>>",hr=$n?Tt?"Input til kørende Pico-kode":"Input til kørende Browser-MicroPython":Tt?"Pico MicroPython":"Browser-MicroPython",hi=B.useMemo(()=>{const d=new _y({onData:_=>{fr.current||!Nt.current||(Wn.current=(Wn.current+_).slice(-240),/(^|\r?\n)>>> ?$/.test(Wn.current)&&_i())},onLine:_=>{if(fr.current)return;const x=_.trimEnd();if(Pr.current&&x.trim()){P("info",x);return}if(Nt.current&&yc(x)){_i();return}Nt.current&&x.trim()&&!xs(x)&&!x.includes("raw REPL")&&P("info",x)},onLog:P,onDisconnect:()=>{E(!1),jl(!1),Gr(!1),Nt.current=!1,Pr.current=!1,qr(),Wn.current="",Wr(),P("warning","USB-forbindelse lukket.")}});return Vr.current=d,d},[]);function P(d,_){K(x=>[...x.slice(-140),{level:d,text:_}])}function $r(d){K(_=>[..._.slice(-140),{level:"info",text:d,variant:"input"}])}function yc(d){return d.trim()===">>>"}function xs(d){return d.trimStart().startsWith(">>> import builtins as _pkp_builtins; exec(")}function qr(){Wt.current!==null&&(window.clearTimeout(Wt.current),Wt.current=null)}function _i(){!Nt.current||Wt.current!==null||(Wt.current=window.setTimeout(()=>{Wt.current=null,Nt.current&&(jl(!1),Nt.current=!1,Wn.current="",P("success","Pico-koden er færdig."),ws())},0))}function ws(){const d=cn.current;d&&pa(d,!1)}function gi(d,_=W,x="error"){const T=My(d,_);K(j=>[...j.slice(-140),{level:x,text:T.simple,technical:T.technical}])}function ln(d,_,x=ve){Re(d),we(x),Fe(_),Yn(T=>({...T,[Vn(x,d)]:_})),Kr()}function jt(d,_="pico"){Re(d),we(_),Fe(""),on(null),Ir({top:0,left:0}),Kr()}function Kr(){zl.current=[],Ul.current=[],Yr.current=null}function _r(){const d=Ln.current;return{content:W,selectionStart:(d==null?void 0:d.selectionStart)??W.length,selectionEnd:(d==null?void 0:d.selectionEnd)??(d==null?void 0:d.selectionStart)??W.length}}function Xr(d){const _=zl.current,x=_.at(-1);(x==null?void 0:x.content)===d.content&&x.selectionStart===d.selectionStart&&x.selectionEnd===d.selectionEnd||(_.push(d),_.length>Hy&&_.shift(),Ul.current=[])}function Qr(d,_){let x=0;const T=Math.min(d.length,_.length);for(;x<T&&d[x]===_[x];)x+=1;let j=d.length,Q=_.length;for(;j>x&&Q>x&&d[j-1]===_[Q-1];)j-=1,Q-=1;const ce=d.slice(x,j),Ie=_.slice(x,Q),be=Ie&&!ce?"insert":ce&&!Ie?"delete":"replace",Ce=Ie.at(-1)??"";return{kind:be,boundaryAfter:be==="insert"&&/[\s.,:;()[\]{}'"`+\-*/%=<>!?]/.test(Ce)}}function Es(d,_){if(_!=="typing")return Yr.current=null,!0;const x=Date.now(),T=Qr(W,d),j=Yr.current,Q=j!==null&&j.path===ee&&j.source===ve&&j.kind===T.kind&&j.kind!=="replace"&&!j.boundaryAfter&&x-j.at<=Iy;return Yr.current={path:ee,source:ve,kind:T.kind,at:x,boundaryAfter:T.boundaryAfter},!Q}function bi(d){Fe(d.content),Yn(_=>({..._,[Vn(ve,ee)]:d.content})),Ol(""),on(null),window.requestAnimationFrame(()=>{const _=Ln.current;_&&(_.focus(),_.selectionStart=Math.min(d.selectionStart,d.content.length),_.selectionEnd=Math.min(d.selectionEnd,d.content.length))})}function Ss(){const d=zl.current.pop();return d?(Yr.current=null,Ul.current.push(_r()),bi(d),!0):!1}function Zr(){const d=Ul.current.pop();return d?(Yr.current=null,zl.current.push(_r()),bi(d),!0):!1}function Dn(d,_=(Q=>(Q=Ln.current)==null?void 0:Q.selectionStart)()??d.length,x=_r(),T=_,j="programmatic"){x&&d!==W&&Es(d,j)&&Xr(x),Fe(d),Yn(ce=>({...ce,[Vn(ve,ee)]:d})),Ol(""),Ni(d,_),window.requestAnimationFrame(()=>{const ce=Ln.current;ce&&(ce.selectionStart=Math.min(_,d.length),ce.selectionEnd=Math.min(T,d.length))})}function gr(d,_=ve){Yn(x=>{const T=Vn(_,d);if(!(T in x))return x;const j={...x};return delete j[T],j})}function Hl(){return or[ee]===W}function un(d,_){cr(x=>({...x,[d]:_}))}function yi(d,_){un(d,_),Yn(x=>({...x,[Vn("pico",d)]:_})),ve==="pico"&&ee===d&&Fe(_)}function Wr(){ae([]),$e([]),cr({}),Yn({}),on(null),Re(d=>{const _=ec(Zo());if(_.find(j=>j.path===d))return d;const T=_[0];return we("local"),Fe(T.content),Kr(),T.path})}function Nn(d){er(),q({value:100,label:d}),Bl.current=window.setTimeout(()=>{Bl.current=null,q(null)},900)}function er(){Bl.current!==null&&(window.clearTimeout(Bl.current),Bl.current=null)}function vi(){return J?u.jsxs("div",{className:"ide-task-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(J.value),children:[u.jsxs("div",{children:[u.jsx("span",{children:J.label}),u.jsxs("strong",{children:[Math.round(J.value),"%"]}),J.cancellable&&u.jsx("button",{className:"ide-task-cancel",type:"button",onClick:ks,"aria-label":"Stop handling",title:"Stop",children:u.jsx(nt,{name:"delete",size:18})})]}),u.jsx("b",{"aria-hidden":"true",children:u.jsx("i",{style:{width:`${Math.max(2,Math.min(100,J.value))}%`}})})]}):null}function ks(){Jn.current&&gn("Stopper læsning...",!0,!0)}function gn(d="Stopper læsning...",_=!1,x=!1){var T;er(),rt.current=null,Jt.current+=1,(T=Jn.current)==null||T.abort(),Jn.current=null,mr.current=null,oe(null),V(!1),q(_?{value:(J==null?void 0:J.value)??0,label:d,cancellable:!1}:null),x&&P("warning","Stopper BLE-læsning efter den aktuelle datapakke.")}function br(d){var _;if(!(mr.current===d||rt.current===d)){if(rt.current=d,rn.current){Jt.current+=1,(_=Jn.current)==null||_.abort(),Jn.current=null,mr.current=null,jt(d),oe(d),V(!0),er(),q({value:2,label:`Skifter til ${Ne(d)}...`,cancellable:!0});return}Il()}}function Il(){if(rn.current)return;const d=rt.current;if(!d)return;rt.current=null;const _=Jt.current+1;Jt.current=_;const x=new AbortController;Jn.current=x,mr.current=d,jt(d),oe(d),V(!0),er(),q({value:12,label:`Indlæser ${Ne(d)}...`,cancellable:!0});const T=(async()=>{try{const j=await b(d,(Q,ce)=>{Jt.current===_&&q({value:Q,label:ce,cancellable:!0})},x.signal);if(x.signal.aborted||Jt.current!==_)return;ln(d,j,"pico"),un(d,j),Nn("Fil indlæst")}catch(j){if(Jt.current!==_)return;Fy(j)||x.signal.aborted?P("info",`Stoppede læsning af ${Ne(d)}.`):(q(null),P("error",j instanceof Error?j.message:"BLE læsning fejlede."))}})();rn.current=T,T.finally(()=>{if(rn.current!==T)return;rn.current=null,Jn.current===x&&(Jn.current=null),mr.current===d&&(mr.current=null),!!rt.current||(oe(null),V(!1),x.signal.aborted&&q(null)),Il()})}async function nr(d){const _=fr.current;fr.current=!0;try{return await d()}finally{fr.current=_}}B.useEffect(()=>{if(!Dl)return;const d=kn.current;d&&(d.scrollTop=d.scrollHeight)},[U,Dl]),B.useEffect(()=>{vb({clearTerminalOnRun:Zt,simplifiedErrors:ur})},[Zt,ur]),B.useEffect(()=>{var d;Fr.some(_=>_.version===Pn)||Ur(((d=Fr[0])==null?void 0:d.version)??"")},[Fr,Pn]),B.useEffect(()=>{bs(Zh(navigator))},[]),B.useEffect(()=>{const d=()=>{const _=Vr.current;kt.current=null,cn.current=null,Vr.current=null,_==null||_.disconnect().catch(()=>{})};return window.addEventListener("pagehide",d),()=>{var _,x;er(),(_=Rt.current)==null||_.dispose(),Rt.current=null,(x=tt.current)==null||x.dispose(),tt.current=null,window.removeEventListener("pagehide",d),d()}},[]),B.useEffect(()=>{const d=_=>{!(_.ctrlKey||_.metaKey)||_.key.toLowerCase()!=="s"||(_.preventDefault(),!F&&ee.trim()&&!pi&&!O&&!z&&!H&&Ds())};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[ve,_e,F,w,W,ee,pi,O,z,H]);function xi(d,_,x){te(T=>{const j=Uf(T,d,_,x);return is(j),j})}function wi(d,_){te(x=>{const T=x.find(be=>be.path===d),Q=mt[Vn("local",d)]??(T==null?void 0:T.content),ce=Q!==void 0&&sr(Q)!==sr(_)?Uf(x,t_(d,ic(x)),Q,!1):x,Ie=Uf(ce,d,_,!1);return is(Ie),Ie}),Yn(x=>({...x,[Vn("local",d)]:_})),ve==="local"&&ee===d&&(Fe(_),Ol(""),on(null),Kr())}const Gl=iv(G,he,mt,w||_e);B.useEffect(()=>{_e&&fn()},[_e]),B.useEffect(()=>{const d=pr.current;d&&d!==ht&&Wr(),pr.current=ht},[ht]);async function Vl(){if(Yt.supported){D(!0);try{await hi.requestAndConnect();const d=new $0(hi);kt.current=d,cn.current=new W0(d),E(!0),ze(0),await d.interrupt(),await Ei(d),P("success","Sendte stop-signal til Pico-terminalen."),await pa(cn.current),await Ts(cn.current)}catch(d){P("error",d instanceof Error?d.message:"USB-forbindelse mislykkedes.");try{await hi.disconnect()}catch(_){P("error",_ instanceof Error?`USB-porten kunne ikke lukkes: ${_.message}`:"USB-porten kunne ikke lukkes.");return}ze(_=>{const x=_+1;return x>=3&&(P("info","USB-forbindelsen er mislykkedes flere gange. Hvis Picoen er i BOOTSEL eller mangler MicroPython, kan du bruge MicroPython-download."),wn(!0)),x}),E(!1)}finally{D(!1)}}}async function Ei(d){const _=await d.exec(`import sys
print(sys.implementation.name)
`,4e3);if(_.error||!_.output.toLowerCase().includes("micropython"))throw new Error("MicroPython blev ikke fundet på Picoen.")}async function Ns(){var d;try{await((d=Vr.current)==null?void 0:d.disconnect()),kt.current=null,cn.current=null,E(!1),Wr()}catch(_){P("error",_ instanceof Error?`USB-porten kunne ikke lukkes: ${_.message}`:"USB-porten kunne ikke lukkes.")}}async function Mt(d){const _=cn.current;if(_){V(!0),fr.current=!0;try{await d(_)}catch(x){q(null),P("error",x instanceof Error?x.message:"USB filhandling fejlede.")}finally{fr.current=!1,V(!1)}}}async function fn(d=!0){if(_e){V(!0);try{const _=await h();ae(_),d&&P("success",`Indlæste ${_.length} filer fra Pico via Bluetooth.`)}catch(_){P("error",_ instanceof Error?_.message:"BLE filhandling fejlede.")}finally{V(!1)}return}await pa(cn.current,d)}async function pa(d,_=!0){if(d){V(!0);try{const x=await nr(()=>d.list("/"));ae(x),_&&P("success",`Indlæste ${x.length} filer fra Pico.`)}catch(x){P("error",x instanceof Error?x.message:"USB filhandling fejlede.")}finally{V(!1)}}}async function yr(){if(_e){V(!0),q({value:4,label:"Tjekker biblioteker på Pico via Bluetooth..."});try{const d=await Rs((_,x)=>q({value:_,label:x}));$e(d),Nn("Fil-tjek færdigt")}catch(d){q(null),P("error",d instanceof Error?d.message:"BLE runtime check fejlede.")}finally{V(!1)}return}await Ts(cn.current)}async function Rs(d){const _=[],x=na.filter(j=>j.kind==="library"&&!Rl(j));let T=0;for(const j of na){if(j.kind==="program"){_.push({...j,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}if(Rl(j)){_.push({...j,status:"unknown",detail:"Opdateres via USB"});continue}try{const Q=T/Math.max(1,x.length)*100,ce=100/Math.max(1,x.length);P("info",`Tjekker ${j.label} på Pico via Bluetooth...`),d==null||d(Math.min(95,Q),`Tjekker ${j.label} på Pico...`);const Ie=await b(j.path,(Ce,an)=>{d==null||d(Math.min(95,Q+Ce/100*ce),`${j.label}: ${an}`)}),be=sr(Ie)===sr(j.content);_.push({...j,status:be?"ok":"outdated",detail:be?"Matcher appens version":"Kan installeres via Bluetooth"})}catch{_.push({...j,status:"missing",detail:"Mangler på Pico"})}finally{T+=1}}return d==null||d(100,"Fil-tjek færdigt"),_}async function Ts(d){if(d){V(!0);try{const _=await nr(()=>js(d)),x=_;$e(x)}catch(_){P("error",_ instanceof Error?_.message:"Runtime check fejlede.")}finally{V(!1)}}}async function js(d){if(!d)return[];const _=[];for(const x of na){if(x.kind==="program"){_.push({...x,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}try{const T=await d.readText(x.path),j=sr(T)===sr(x.content);_.push({...x,status:j?"ok":"outdated",detail:j?"Matcher appens version":"Matcher ikke appens version"})}catch{_.push({...x,status:"missing",detail:"Mangler på Pico"})}}return _}async function vc(d=ee){if(_e){br(d);return}oe(d),await Mt(async _=>{q({value:12,label:`Indlæser ${Ne(d)}...`});const x=await xc(_,d);ln(d,x,"pico"),un(d,x),Nn("Fil indlæst")}),oe(null)}async function xc(d,_){var x;try{return await d.readText(_)}catch(T){await((x=kt.current)==null?void 0:x.stop().catch(()=>{})),await Gy(120);try{return await d.readText(_)}catch{throw T}}}function Ms(){Z(!0)}async function Ds(){if(ve==="pico"){if(!w&&!_e){P("error","Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.");return}await ha();return}As()}function As(){if(Tl(ee)){P("error",us);return}xi(ee,W,!1),we("local"),Yn(d=>({...d,[Vn("local",ee)]:W})),Z(!1),P("success",`Gemte ${Ne(ee)} lokalt.`)}async function ha(){if(Z(!1),Tl(ee))return q(null),P("error",us),!1;if(q({value:0,label:"Starter gemning..."}),_e){V(!0);try{return await p(ee,W,(_,x)=>q({value:_,label:x})),un(ee,W),we("pico"),Yn(_=>({..._,[Vn("pico",ee)]:W})),Nn("Gemt på Pico via Bluetooth"),P("success",`Gemte ${Ne(ee)} på Pico via Bluetooth.`),Jo(ee)&&(St(!0),P("warning","main.py er gemt. Genstart Picoen for at køre den nye version.")),await fn(!1),!0}catch(_){return q(null),P("error",_ instanceof Error?_.message:"BLE gem fejlede."),!1}finally{V(!1)}}if(!cn.current)return q(null),!1;let d=!1;return await Mt(async _=>{vr(ee,"pico")?await _.replaceTextSafely(ee,W,(x,T)=>q({value:x,label:T})):await _.writeText(ee,W,(x,T)=>q({value:x,label:T})),un(ee,W),we("pico"),Yn(x=>({...x,[Vn("pico",ee)]:W})),Nn("Gemt på Pico via USB"),P("success",`Gemte ${ee}.`),await fn(),await yr(),d=!0}),d}function wc(){Si(Ne(ee),W),Z(!1),P("success",`Downloadede ${Ne(ee)}.`)}function Si(d,_){const x=new Blob([_],{type:"text/plain;charset=utf-8"}),T=URL.createObjectURL(x),j=document.createElement("a");j.href=T,j.download=d,j.click(),URL.revokeObjectURL(T)}async function Os(d){V(!0),St(!1),q({value:10,label:"Genstarter Pico..."});try{await y(d)?(Nn("Pico genforbundet"),P("success",d==="control"?"Pico genforbundet. Åbner kontrolpanelet.":"Pico genforbundet til Kodeværkstedet."),d==="ide"&&await fn()):(q(null),P("warning","Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet."))}catch(_){q(null),P("error",_ instanceof Error?_.message:"Genstart/genforbindelse mislykkedes.")}finally{V(!1)}}function Cs(d){var Q,ce;const _=d??{path:ee,source:ve},x=_.source==="pico"?"Pico":"browser",T=(d==null?void 0:d.versions.length)??(_.source==="pico"?((Q=ta(G).get(_.path))==null?void 0:Q.length)??0:((ce=ta(ic(he)).get(_.path))==null?void 0:ce.length)??0),j=T>0?` Det sletter også filens versionshistorik (${T} gemte versioner).`:"";ne(null),i({title:"Slet fil",message:`Vil du slette ${Ne(_.path)} fra ${x}?${j}`,confirmLabel:"Slet",onConfirm:()=>{Sc(_)}})}function Ec(){i({title:"Nulstil enhed",message:"Vil du nulstille Picoens enhedsindstillinger? Det sletter DeviceSettings.txt, så Picoen kan oprettes som en ny enhed igen. Kodefiler og startprogram bliver ikke slettet.",confirmLabel:"Nulstil",onConfirm:()=>{Ls()}})}async function Ls(){if(!cn.current){P("error","Forbind Picoen med USB først.");return}await Mt(async d=>{await d.delete("/DeviceSettings.txt").catch(_=>{const x=_ instanceof Error?_.message:"";if(!/ENOENT|No such file|not found/i.test(x))throw _}),cr(_=>{const x={..._};return delete x["/DeviceSettings.txt"],x}),gr("/DeviceSettings.txt","pico"),P("success","DeviceSettings.txt er nulstillet. Afbryd og forbind Picoen igen, hvis kontrolpanelet allerede var åbent."),await fn()})}function Bs(d,_,x){const T=Gl.filter(ce=>ce.kind==="file"&&ce.type==="file"),j=T.findIndex(ce=>ce.path===d&&ce.source===_);if(j===-1)return null;const Q=ce=>!!ce&&!(ce.path===d&&ce.source===_)&&!(ce.source===_&&x.has(ce.path))&&!(_e&&Rl(ce));for(const ce of[!0,!1])for(let Ie=1;Ie<T.length;Ie+=1){const be=T[j+Ie];if(Q(be)&&(!ce||be.source===_))return be;const Ce=T[j-Ie];if(Q(Ce)&&(!ce||Ce.source===_))return Ce}return null}function _a(d){if(d){ba(d);return}const _=ec(Zo())[0];ln(_.path,mt[Vn("local",_.path)]??_.content,"local")}async function Sc(d){const _=d.path,x=d.source,T=_===ee&&x===ve;if(x==="local"){const be=ta(ic(he)).get(_)??[],Ce=new Set([_,...be.map(Je=>Je.path)]),an=T?Bs(_,x,Ce):null,qn=he.filter(Je=>!Ce.has(Je.path));te(qn),is(qn);for(const Je of Ce)gr(Je,"local");T&&_a(an);const Se=be.length>0?` og ${be.length} gemte versioner`:"";P("warning",`Slettede ${Ne(_)}${Se} fra browseren.`);return}const j=ta(G).get(_)??[],Q=[_,...j.map(be=>be.path)],ce=T?Bs(_,x,new Set(Q)):null;if(_e){V(!0);try{for(const Ce of Q)await g(Ce);cr(Ce=>{const an={...Ce};for(const qn of Q)delete an[qn];return an});for(const Ce of Q)gr(Ce,"pico");const be=j.length>0?` og ${j.length} gemte versioner`:"";P("warning",`Slettede ${Ne(_)}${be} på Pico via Bluetooth.`),await fn(),T&&_a(ce)}catch(be){P("error",be instanceof Error?be.message:"BLE sletning fejlede.")}finally{V(!1)}return}if(!cn.current){P("error","Ingen Pico-forbindelse. Kan ikke slette Pico-filen.");return}let Ie=!1;await Mt(async be=>{for(const an of Q)await be.delete(an);cr(an=>{const qn={...an};for(const Se of Q)delete qn[Se];return qn});const Ce=j.length>0?` og ${j.length} gemte versioner`:"";P("warning",`Slettede ${_}${Ce}.`);for(const an of Q)gr(an,"pico");await fn(),await yr(),Ie=!0}),Ie&&T&&_a(ce)}async function kc(d){if(!d)return;const _=Py(d.name);if(!_){P("error","Kun .py, .txt, .json og .csv kan importeres.");return}if(Tl(_)){P("error",us);return}if(d.size>128*1024){P("error","Filen er for stor til Pico-værkstedet.");return}const x=await d.text();if(ve==="local"){xi(_,x,!0),ln(_,x,"local"),P("success",`Importerede ${Ne(_)} i browseren.`);return}if(!w&&!_e){P("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(_e&&Rl({path:_})){P("error","BLEPeripheral.py kan ikke importeres over Bluetooth, mens den holder forbindelsen i gang. Brug USB i stedet.");return}if(q({value:0,label:"Uploader fil til Pico..."}),_e){V(!0);try{await p(_,x,(j,Q)=>q({value:j,label:Q})),un(_,x),ln(_,x,"pico"),Nn("Fil uploadet til Pico"),P("success",`Importerede ${Ne(_)} på Pico via Bluetooth.`),await fn()}catch(j){q(null),P("error",j instanceof Error?j.message:"Kunne ikke importere filen til Pico.")}finally{V(!1)}return}if(!cn.current){q(null),P("error","Ingen Pico-forbindelse. Kan ikke importere filen til Pico.");return}await Mt(async j=>{vr(_,"pico")?await j.replaceTextSafely(_,x,(Q,ce)=>q({value:Q,label:ce})):await j.writeText(_,x,(Q,ce)=>q({value:Q,label:ce})),un(_,x),ln(_,x,"pico"),Nn("Fil uploadet til Pico"),P("success",`Importerede ${Ne(_)} på Pico.`),await fn(),await yr()})}async function Nc(){fe(""),re(!0)}function Rc(){const d=Kh(ue);if(!d)return;if(Tl(d)){P("error",us);return}const _=ve;if(vr(d,_)){P("error",`Der findes allerede en fil med navnet ${Ne(d)} i ${_==="pico"?"Pico":"browseren"}.`);return}if(_==="local"){xi(d,"",!1),ln(d,"","local"),re(!1),P("success",`Oprettede ${Ne(d)} i browseren.`);return}Tc(d)}async function Tc(d){if(!w&&!_e){P("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(re(!1),q({value:0,label:"Opretter fil på Pico..."}),_e){V(!0);try{await p(d,"",(_,x)=>q({value:_,label:x})),un(d,""),ln(d,"","pico"),Nn("Fil oprettet på Pico"),P("success",`Oprettede ${Ne(d)} på Pico via Bluetooth.`),await fn()}catch(_){q(null),P("error",_ instanceof Error?_.message:"Kunne ikke oprette fil på Pico.")}finally{V(!1)}return}if(!cn.current){q(null),P("error","Ingen Pico-forbindelse. Kan ikke oprette Pico-filen.");return}await Mt(async _=>{await _.writeText(d,"",(x,T)=>q({value:x,label:T})),un(d,""),ln(d,"","pico"),Nn("Fil oprettet på Pico"),P("success",`Oprettede ${Ne(d)} på Pico.`),await fn()})}function jc(d){d.type==="file"&&(ne(d),k(Yy(d.path)))}async function Mc(d){if(!z)return;const _=z.path;if(ne(null),z.source==="local"){const x=he.find(T=>T.path===d.path);if(!x){P("error","Kunne ikke finde versionen i browseren.");return}wi(_,x.content),ln(_,x.content,"local"),P("success",`Gendannede ${Ne(d.path)} i browseren.`);return}if(q({value:0,label:"Gendanner version..."}),_e){V(!0);try{const x=await b(d.path);await p(_,x,(T,j)=>q({value:T,label:j})),un(_,x),ln(_,x,"pico"),Nn("Version gendannet"),await fn(!1)}catch(x){q(null),P("error",x instanceof Error?x.message:"Kunne ikke gendanne versionen.")}finally{V(!1)}return}cn.current&&await Mt(async x=>{await x.replaceTextSafely(_,await x.readText(d.path),(j,Q)=>q({value:j,label:Q}));const T=await x.readText(_);un(_,T),ln(_,T,"pico"),Nn("Version gendannet"),await fn()})}function ga(d){const _=(z==null?void 0:z.source)==="local"?"browseren":"Pico";i({title:"Slet version",message:`Vil du slette ${Ne(d.path)} fra ${_}?`,confirmLabel:"Slet",onConfirm:()=>{Pl(d)}})}async function Pl(d){if((z==null?void 0:z.source)==="local"){const _=he.filter(x=>x.path!==d.path);te(_),is(_),gr(d.path,"local"),ne(x=>x&&{...x,versions:x.versions.filter(T=>T.path!==d.path)}),P("warning",`Slettede ${Ne(d.path)} fra browserens versionshistorik.`);return}if(_e){V(!0);try{await g(d.path),await fn(!1),ne(_=>_&&{..._,versions:_.versions.filter(x=>x.path!==d.path)})}catch(_){P("error",_ instanceof Error?_.message:"Kunne ikke slette versionen.")}finally{V(!1)}return}cn.current&&await Mt(async _=>{await _.delete(d.path),await fn(!1),ne(x=>x&&{...x,versions:x.versions.filter(T=>T.path!==d.path)})})}async function Dc(){var x;if(!z)return;const d=z,_=rv(d.path,T=>vr(T,d.source));if(!_){P("error",`Kunne ikke finde et ledigt filnavn til en kopi af ${Ne(d.path)}.`);return}if(d.source==="local"){const T=mt[Vn("local",d.path)]??((x=he.find(j=>j.path===d.path))==null?void 0:x.content)??"";xi(_,T,!1),ln(_,T,"local"),ne(null),P("success",`Duplikerede ${Ne(d.path)} til ${Ne(_)} i browseren.`);return}if(ne(null),q({value:0,label:"Duplikerer fil..."}),_e){V(!0);try{const T=or[d.path]??await b(d.path);await p(_,T,(j,Q)=>q({value:j,label:Q})),un(_,T),ln(_,T,"pico"),Nn("Fil duplikeret"),await fn(!1),P("success",`Duplikerede ${Ne(d.path)} til ${Ne(_)} på Pico via Bluetooth.`)}catch(T){q(null),P("error",T instanceof Error?T.message:"Kunne ikke duplikere filen.")}finally{V(!1)}return}if(!cn.current){q(null),P("error","Ingen Pico-forbindelse. Kan ikke duplikere Pico-filen.");return}await Mt(async T=>{const j=await T.readText(d.path);await T.writeText(_,j,(Q,ce)=>q({value:Q,label:ce})),un(_,j),ln(_,j,"pico"),Nn("Fil duplikeret"),await fn(!1),P("success",`Duplikerede ${Ne(d.path)} til ${Ne(_)} på Pico.`)})}async function zs(){if(!z)return;const d=z,_=zf(Ee,fs(d.path));if(!_||_===d.path)return;if(Tl(_)){P("error",us);return}if(vr(_,d.source)){P("error",`Der findes allerede en fil med navnet ${Ne(_)}.`);return}const x=d.source==="local",T=d.source==="pico";if(_e&&T&&(Jo(d.path)||Jo(_))){P("error","main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.");return}V(!0);try{if(T)if(_e){const j=or[d.path]??await b(d.path);await p(_,j,(Q,ce)=>q({value:Q,label:ce})),await g(d.path),cr(Q=>({...l_(Q,d.path,_),[_]:j}))}else cn.current&&(await nr(()=>cn.current.rename(d.path,_)),cr(j=>l_(j,d.path,_)));x&&te(j=>{const Q=j.map(ce=>ce.path===d.path?{...ce,path:_,updatedAt:Date.now()}:ce);return is(Q),Q}),ee===d.path&&ve===d.source&&Re(_),Yn(j=>ov(j,d.source,d.path,_)),ne(null),k(""),P("success",`Omdøbte ${Ne(d.path)} til ${Ne(_)}.`),T&&await fn()}catch(j){P("error",j instanceof Error?j.message:"Kunne ikke omdøbe filen.")}finally{q(null),V(!1)}}function vr(d,_){return _==="pico"?G.some(x=>x.path===d):he.some(x=>x.path===d)}async function Us(d,_){if(!vr(d,"pico"))return;const x=t_(d,G),T=or[d]??await b(d);_!==void 0&&sr(T)===sr(_)||await p(x,T)}function ba(d){if(d.type!=="file"){_e&&gn(void 0,!1),Re(d.path),we(d.source);return}if(_e&&Rl(d)){P("warning","BLEPeripheral.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.");return}if(d.source==="local"){_e&&gn(void 0,!1);const x=he.find(T=>T.path===d.path);ln(d.path,mt[Vn("local",d.path)]??(x==null?void 0:x.content)??"","local");return}const _=Vn("pico",d.path);if(Object.prototype.hasOwnProperty.call(mt,_)){_e&&gn(void 0,!1),ln(d.path,mt[_],"pico");return}if(Object.prototype.hasOwnProperty.call(or,d.path)){_e&&gn(void 0,!1),ln(d.path,or[d.path],"pico");return}vc(d.path)}async function ya(){if(!w&&!_e){const d=Xh();$e(d),Xt(Qh(d)),Oe(!0),q(null);return}V(!0),q({value:4,label:_e?"Tjekker biblioteker på Pico via Bluetooth...":"Tjekker biblioteker på Pico..."}),P("info",_e?"Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...":"Tjekker om Picoens biblioteker er opdaterede før installation...");try{const d=Ae.length>0?Ae:_e?await Rs((_,x)=>q({value:_,label:x})):await nr(()=>js(cn.current));$e(d),Xt(Qh(d)),Oe(!0),q(null)}catch(d){q(null),P("error",d instanceof Error?d.message:"Fil-tjek før installation fejlede.")}finally{V(!1)}}async function Jr(){if(Oe(!1),_e){V(!0);try{const _=(Ae.length>0?Ae:na.map(T=>({...T,status:"unknown",detail:"Ikke tjekket"}))).filter(T=>Qn[T.id]&&!Rl(T));if(_.length===0){P("info","Ingen filer valgt til installation.");return}let x=null;q({value:0,label:"Starter installation..."});for(const[T,j]of _.entries()){P("info",`Installerer ${j.label} via Bluetooth...`);const Q=T/_.length*100,ce=100/_.length;await Us(j.path,j.content),await p(j.path,j.content,(Ie,be)=>{q({value:Math.min(99,Q+Ie/100*ce),label:`${j.label}: ${be}`})}),yi(j.path,j.content),P("success",`Installerede ${j.label}.`),j.kind==="library"&&(x=j),Jo(j.path)&&St(!0)}Nn("Installation færdig"),await fn(!1),await yr(),x&&va(x)}catch(d){q(null),P("error",d instanceof Error?d.message:"BLE installation fejlede.")}finally{V(!1)}return}await Mt(async d=>{const x=(Ae.length>0?Ae:na.map(j=>({...j,status:"unknown",detail:"Ikke tjekket"}))).filter(j=>Qn[j.id]);if(x.length===0){P("info","Ingen filer valgt til installation.");return}let T=null;q({value:0,label:"Starter installation..."});for(const[j,Q]of x.entries()){P("info",`Installerer ${Q.label}...`);const ce=j/x.length*100,Ie=100/x.length,be=await d.readText(Q.path).catch(()=>null);be!==null&&sr(be)===sr(Q.content)?(q({value:Math.min(99,ce+Ie),label:`${Q.label}: Allerede nyeste version`}),P("info",`${Q.label} findes allerede i samme version.`)):(await d.replaceTextSafely(Q.path,Q.content,(Ce,an)=>{q({value:Math.min(99,ce+Ce/100*Ie),label:`${Q.label}: ${an}`})},{createBackup:!0}),P("success",`Installerede ${Q.label}.`)),yi(Q.path,Q.content),Q.kind==="library"&&(T=Q)}Nn("Installation færdig"),await fn(!1),await yr(),T&&va(T)})}function Hs(){return(Ae.length>0?Ae:Xh()).filter(_=>Qn[_.id])}function Ac(){const d=Hs();if(d.length===0){P("info","Ingen filer valgt.");return}for(const _ of d)wi(_.path,_.content);Oe(!1),P("success",`Gemte ${d.length} filer i browseren.`)}function Oc(){const d=Hs();if(d.length===0){P("info","Ingen filer valgt.");return}d.forEach((_,x)=>{window.setTimeout(()=>{Si(Ne(_.path),_.content)},x*120)}),Oe(!1),P("success",`Starter download af ${d.length} filer.`)}function va(d){ln(d.path,d.content,"pico"),un(d.path,d.content),P("info",`Åbnede ${d.label} i editoren.`)}function Is(d,_){Xt(x=>{if(d.kind!=="program")return{...x,[d.id]:_};const T={...x};for(const j of Ae)j.kind==="program"&&(T[j.id]=!1);return T[d.id]=_,T})}async function Yl(){if(Ys(),_e&&ve==="pico"){P("warning","Bluetooth holder forbindelsen åben, så koden kan ikke køres direkte her. Gem filen, og genstart Picoen for at køre den.");return}if(ve==="local"){await Fl();return}const d=kt.current;if(!d){P("error",`${Ne(ee)} er gemt på Picoen, men der er ingen USB-forbindelse til Pico-terminalen.`);return}if(ee.endsWith(".py")){if(!Hl()&&(P("info",`${Ne(ee)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`),!await ha())){P("error","Pico-forbindelsen blev afbrudt under gemning.");return}if(F)return;qr(),Wn.current="",Zn(!0);try{await d.runFile(ee,()=>{qr(),Wn.current="",Pr.current=!1,jl(!0),Nt.current=!0}),P("success",`Kører ${Ne(ee)}. Brug Stop for at afbryde.`)}catch(_){jl(!1),Nt.current=!1,qr(),Wn.current="",P("error",_ instanceof Error?_.message:"Kunne ikke starte koden.")}return}V(!0);try{const _=await d.exec(W,2e4);_.output.trim()&&P("info",_.output),_.error.trim()&&gi(_.error,W),!_.output.trim()&&!_.error.trim()&&P("success","Koden kørte uden output.")}catch(_){P("error",_ instanceof Error?_.message:"Kunne ikke køre koden.")}finally{V(!1)}}async function Fl(){const d=Yf(W,{allowInput:!0});if(d.some(T=>T.level==="error")){for(const T of d){const j=T.line?`Linje ${T.line}: `:"";P(T.level==="error"?"error":"warning",`${j}${T.text}`)}return}/\binput\s*\(/.test(W)&&!T_()&&P("warning","input() i browseren kræver at siden genindlæses. Opdater siden (F5) og prøv igen.");const _=new AbortController;dr.current=_;const x=new Ey;tt.current=x,V(!0),ua(!0),Zn(!0),P("info",w?"Starter Browser-MicroPython for browser-filen.":"Starter Browser-MicroPython. Forbind Pico med USB for at køre på selve Picoen.");try{const T=[],j=await x.run(W,{timeoutMs:null,signal:_.signal,onOutput:be=>{T.push(be),P("info",be)}});for(const be of j.issues){const Ce=be.line?`Linje ${be.line}: `:"";P(be.level==="error"?"error":"warning",`${Ce}${be.text}`)}const Q=[...T,j.output].filter(Boolean).join(`
`).trim(),ce=j.output.trim();!j.error.trim()&&$y(Q)?gi(Q,W):(ce&&P("info",ce),j.error.trim()&&gi(j.error,W,j.unavailable?"warning":"error")),j.ok&&!Q&&!j.error.trim()&&P("success","Browser-MicroPython kørte uden output.")}finally{dr.current=null,tt.current=null,x.dispose(),ua(!1),V(!1)}}async function Cc(){var _,x,T;if(Ml){(_=dr.current)==null||_.abort(),(x=tt.current)==null||x.stop(),P("warning","Stoppede Browser-MicroPython."),Zn(!0);return}if(!Tt&&On){(T=Rt.current)==null||T.reset(),Gr(!1),P("warning","Stoppede Browser-MicroPython-terminalen. Variablerne i browser-terminalen blev nulstillet."),Zn(!0);return}const d=kt.current;if(d)try{await d.stop(),P("warning","Stoppede koden på Pico.")}catch(j){P("error",j instanceof Error?j.message:"Kunne ikke stoppe koden.")}finally{jl(!1),Nt.current=!1,qr(),Wn.current="",Zn(!0),ws()}}function ki(){const d=kn.current;if(!d)return;const _=d.scrollHeight-d.scrollTop-d.clientHeight<12;Zn(_)}function Gs(){K([]),Zn(!0)}function Vs(){window.requestAnimationFrame(()=>{const d=kn.current;d&&(d.scrollTop=d.scrollHeight)})}async function $l(){const d=$n?ft:ft.trimEnd();if($n){if(!Tt){const T=tt.current;if(!T){P("warning","Browser-MicroPython kører ikke lige nu."),it();return}Qt(""),Zn(!0),$r(d),T.sendInput(d),it();return}const x=kt.current;if(!x){P("warning","Pico-terminalen er ikke forbundet."),it();return}Qt(""),Zn(!0);try{await x.sendProgramInput(d)}catch(T){P("error",T instanceof Error?T.message:"Kunne ikke sende input til Pico-koden.")}finally{it()}return}if(!d.trim())return;if(Al(x=>(x.at(-1)===d?x:[...x,d]).slice(-80)),dt(null),Cn(null),Fn){P("warning",Tt?"Tryk Stop, før du skriver i Pico-terminalen.":"Stop offline MicroPython, før du skriver i browser-terminalen."),it();return}if(!Tt){const x=Yf(d);if(x.some(j=>j.level==="error")){for(const j of x){const Q=j.line?"Linje "+j.line+": ":"";P(j.level==="error"?"error":"warning",Q+j.text)}it();return}const T=Rt.current??new wy;Rt.current=T,Qt(""),Gr(!0),Zn(!0),P("info",">>> "+d);try{let j=!1;const Q=await T.send(d,{timeoutMs:15e3,onOutput:Ie=>{j=!0,P("info",Ie)}}),ce=Q.output.trim();ce&&!j&&P("info",ce),Q.error.trim()&&gi(Q.error,d,Q.unavailable?"warning":"error")}catch(j){P("error",j instanceof Error?j.message:"Browser-MicroPython-terminalen fejlede.")}finally{Gr(!1),it()}return}if(_e){P("warning","Terminalen bruger USB Serial. Bluetooth-forbindelsen kan vise filer, men kan ikke modtage frie terminalkommandoer."),it();return}const _=kt.current;if(!w||!_){P("warning","Forbind en microcontroller med USB for at skrive i MicroPython-terminalen."),it();return}Qt(""),Gr(!0),Zn(!0),Pr.current=!0,P("info",">>> "+d);try{await _.sendFriendlyLine(d)}catch(x){Pr.current=!1,P("error",x instanceof Error?x.message:"Kunne ikke sende kommando til MicroPython REPL.")}finally{Gr(!1),it()}}function it(){window.requestAnimationFrame(()=>{const d=pt.current;if(!d||d.disabled)return;d.focus();const _=d.value.length;d.selectionStart=_,d.selectionEnd=_})}function xa(d,_,x){if(x.length===0)return null;const T=w||_e;return u.jsxs("div",{className:"ide-install-group",children:[u.jsxs("div",{className:"ide-install-group-head",children:[u.jsx("h3",{children:d}),u.jsx("p",{children:_})]}),u.jsx("div",{className:"ide-install-scroll",children:x.map(j=>{const Q=_e&&Rl(j);return u.jsxs("label",{className:`ide-install-row ${Q?"disabled":""}`,children:[u.jsx("input",{type:"checkbox",checked:!!Qn[j.id],disabled:Q,onChange:ce=>Is(j,ce.target.checked)}),u.jsxs("span",{children:[u.jsxs("strong",{children:[Ps(j),T&&j.kind==="library"&&u.jsx("em",{className:`ide-install-status status-${j.status}`,children:Q?"USB":lv(j.status)})]}),u.jsx("small",{children:j.description})]})]},j.id)})})]})}function Ps(d){return d.kind==="program"?d.label.replace(/\s*\(main\.py\)$/i,""):d.label}function Ys(){Zt&&K([]),Zn(!0)}function wa(d,_){const x=d.indexOf(`
`,_);return x===-1?d.length:x}function Ni(d,_){if(Jh(d,_)){on(null);return}const x=Kf(d,_);if(!x||x.query.length<1){on(null);return}const T=Wh(d,_,!0).slice(0,8),j=e_(Ln.current,x.start,T.length);on(T.length>0&&j?{items:T,selected:0,start:x.start,end:_,position:j}:null)}function Ea(d,_){if(Jh(d,_)){Cn(null);return}const x=Kf(d,_);if(!x||x.query.length<1){Cn(null);return}const T=Wh(d,_,!1).slice(0,8),j=e_(pt.current,x.start,T.length);Cn(T.length>0&&j?{items:T,selected:0,start:x.start,end:_,position:j}:null)}function Fs(d){const _=d.value.slice(d.selectionStart,d.selectionEnd);Ol(Jy(_)?_:"")}function Ri(d,_){window.requestAnimationFrame(()=>{const x=d==null?void 0:d.querySelector(`[data-autocomplete-index="${_}"]`);x==null||x.scrollIntoView({block:"nearest"})})}function Bn(d=Pe==null?void 0:Pe.items[Pe.selected]){if(!d||!Pe)return;const _=_r(),x=W.slice(0,Pe.start)+d.insert+W.slice(Pe.end),T=Pe.start+d.insert.length-(d.insert.endsWith("()")?1:0);on(null),Dn(x,T,_),window.requestAnimationFrame(()=>{const j=Ln.current;j&&j.focus()})}function el(d=tn==null?void 0:tn.items[tn.selected]){if(!d||!tn)return;const _=ft.slice(0,tn.start)+d.insert+ft.slice(tn.end),x=tn.start+d.insert.length-(d.insert.endsWith("()")?1:0);Qt(_),Cn(null),window.requestAnimationFrame(()=>{const T=pt.current;T&&(T.focus(),T.selectionStart=x,T.selectionEnd=x)})}function $s(d){const _=Ln.current;if(!_)return!1;const x=_.selectionStart,T=_.selectionEnd,j={content:W,selectionStart:x,selectionEnd:T},Q=W.lastIndexOf(`
`,x-1)+1,ce=T>x&&W[T-1]===`
`?T-1:T,Ie=wa(W,ce),be=Ie<W.length?Ie+1:Ie,Ce=W.slice(Q,be);if(d<0){if(Q===0)return!1;const Dt=W.lastIndexOf(`
`,Q-2)+1,$t=W.slice(Dt,Q),nl=W.slice(0,Dt)+Ce+$t+W.slice(be),tl=-$t.length;return Dn(nl,x+tl,j,T+tl),!0}if(be>=W.length)return!1;const an=wa(W,be),qn=an<W.length?an+1:an,Se=W.slice(be,qn),Je=W.slice(0,Q)+Se+Ce+W.slice(qn),tr=Se.length;return Dn(Je,x+tr,j,T+tr),!0}function qs(d){var qn;if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="z"){d.preventDefault(),(d.shiftKey?Zr():Ss())&&on(null);return}if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="y"){d.preventDefault(),Zr()&&on(null);return}if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="s"){d.preventDefault(),!F&&ee.trim()&&Ds();return}if(d.altKey&&!d.ctrlKey&&!d.metaKey&&(d.key==="ArrowUp"||d.key==="ArrowDown")){d.preventDefault(),$s(d.key==="ArrowUp"?-1:1)&&on(null);return}if(Pe){if(d.key==="ArrowDown"){d.preventDefault(),on(Se=>{if(!Se)return Se;const Je=(Se.selected+1)%Se.items.length;return Ri(pn.current,Je),{...Se,selected:Je}});return}if(d.key==="ArrowUp"){d.preventDefault(),on(Se=>{if(!Se)return Se;const Je=(Se.selected-1+Se.items.length)%Se.items.length;return Ri(pn.current,Je),{...Se,selected:Je}});return}if(d.key==="Tab"){d.preventDefault(),Bn();return}if(d.key==="Enter"){if(!(Pe.items[Pe.selected]&&A_(Pe.items[Pe.selected],W.slice(Pe.start,Pe.end)))){d.preventDefault(),Bn();return}on(null)}if(d.key==="Escape"){d.preventDefault(),on(null);return}}if(d.key==="Enter"){d.preventDefault();const Se=d.currentTarget,Je=Se.selectionStart,tr=Se.selectionEnd,Dt={content:W,selectionStart:Je,selectionEnd:tr},$t=W.lastIndexOf(`
`,Je-1)+1,nl=W.slice($t,Je),tl=((qn=nl.match(/^[ \t]*/))==null?void 0:qn[0])??"",Sa=nl.trimEnd().endsWith(":")?"    ":"",ql=`
${tl}${Sa}`,Kl=W.slice(0,Je)+ql+W.slice(tr),zn=Je+ql.length;Dn(Kl,zn,Dt),window.requestAnimationFrame(()=>{Se.selectionStart=zn,Se.selectionEnd=zn});return}if(d.key!=="Tab")return;d.preventDefault();const _=d.currentTarget,x=_.selectionStart,T=_.selectionEnd,j={content:W,selectionStart:x,selectionEnd:T},Q="    ";if(d.shiftKey){const Se=W.lastIndexOf(`
`,x-1)+1,Je=x===T?wa(W,x):T,tr=W.slice(Se,Je);let Dt=0,$t=0;const nl=tr.replace(/(^|\n)( {1,4}|\t)/g,(Sa,ql,Kl,zn)=>{const Xl=Kl.length;return Se+zn<x&&(Dt+=Xl),$t+=Xl,ql});if($t===0)return;const tl=W.slice(0,Se)+nl+W.slice(Je);Dn(tl,Math.max(Se,x-Dt),j,x===T?Math.max(Se,x-Dt):Math.max(Se,T-$t)),window.requestAnimationFrame(()=>{_.selectionStart=Math.max(Se,x-Dt),_.selectionEnd=x===T?_.selectionStart:Math.max(_.selectionStart,T-$t)});return}if(x===T){const Se=W.slice(0,x)+Q+W.slice(T);Dn(Se,x+Q.length,j),window.requestAnimationFrame(()=>{_.selectionStart=x+Q.length,_.selectionEnd=x+Q.length});return}const ce=W.lastIndexOf(`
`,x-1)+1,be=W.slice(ce,T).replace(/^/gm,Q),Ce=be.split(`
`).length,an=W.slice(0,ce)+be+W.slice(T);Dn(an,x+Q.length,j,T+Ce*Q.length),window.requestAnimationFrame(()=>{_.selectionStart=x+Q.length,_.selectionEnd=T+Ce*Q.length})}function Ks(d){if($n){d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),$l());return}if(tn){if(d.key==="ArrowDown"){d.preventDefault(),Cn(_=>{if(!_)return _;const x=(_.selected+1)%_.items.length;return Ri(Ll.current,x),{..._,selected:x}});return}if(d.key==="ArrowUp"){d.preventDefault(),Cn(_=>{if(!_)return _;const x=(_.selected-1+_.items.length)%_.items.length;return Ri(Ll.current,x),{..._,selected:x}});return}if(d.key==="Enter"||d.key==="Tab"){d.preventDefault(),el();return}if(d.key==="Escape"){d.preventDefault(),Cn(null);return}}if(d.key==="Tab"){d.preventDefault();const _=d.currentTarget,x=_.selectionStart,T=_.selectionEnd,j="    ",Q=ft.slice(0,x)+j+ft.slice(T),ce=x+j.length;Qt(Q),dt(null),Cn(null),window.requestAnimationFrame(()=>{_.selectionStart=ce,_.selectionEnd=ce});return}if(d.key==="ArrowUp"||d.key==="ArrowDown"){if(!(d.key==="ArrowUp"?d.currentTarget.selectionStart===0&&d.currentTarget.selectionEnd===0:d.currentTarget.selectionStart===ft.length&&d.currentTarget.selectionEnd===ft.length)||mi.length===0)return;d.preventDefault();const x=d.key==="ArrowUp"?Sn===null?mi.length-1:Math.max(0,Sn-1):Sn===null||Sn+1>=mi.length?null:Sn+1;dt(x);const T=x===null?"":mi[x]??"";Qt(T),Cn(null),Zn(!0),window.requestAnimationFrame(()=>{const j=pt.current;j&&(j.selectionStart=T.length,j.selectionEnd=T.length,Vs())});return}d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),$l())}return u.jsxs("div",{className:"screen ide-screen",children:[u.jsx(nd,{title:"Pico Kodeværksted",onMenu:()=>s()}),pi?u.jsx("div",{className:"ide-size-gate",role:"dialog","aria-modal":"true","aria-labelledby":"ide-size-title",children:u.jsxs("div",{className:"ide-size-gate-panel",children:[u.jsx("h2",{id:"ide-size-title",children:"Brug en bærbar for at bruge Kodeværkstedet"}),u.jsx("p",{children:"Denne skærm er for lille, så du skal åbne Kodeværkstedet på en bærbar eller en større skærm."})]})}):u.jsxs("div",{className:"ide-layout",children:[u.jsxs("section",{className:"ide-panel ide-files-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Filer"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:Nc,"aria-label":"Ny fil",title:"Ny fil",children:u.jsx(nt,{name:"plus",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>{var d;return(d=fa.current)==null?void 0:d.click()},"aria-label":"Importer fil",title:"Importer fil",children:u.jsx(nt,{name:"upload",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>fn(),disabled:!w&&!_e||F,"aria-label":"Opdater filer",title:"Opdater filer",children:u.jsx(nt,{name:"refresh",size:20})})]})]}),u.jsx("div",{className:"ide-file-list",children:Gl.length===0?u.jsx("button",{type:"button",disabled:!0,children:"Ingen filer læst"}):Gl.map(d=>{if(d.kind==="separator"){const j=d.id==="pico-files"&&!w&&!_e;return u.jsxs(B.Fragment,{children:[u.jsx("div",{className:"ide-file-separator",children:u.jsx("span",{children:d.label})}),j&&u.jsx("div",{className:"ide-file-disconnected",role:"status",children:"Ikke forbundet"})]},d.id)}const _=_e&&Rl(d),x=mt[Vn(d.source,d.path)],T=x!==void 0&&x!==tv(d,he,or);return u.jsxs("div",{className:`ide-file-row ${ee===d.path&&ve===d.source?"active":""} ${_?"protected":""}`,children:[u.jsxs("button",{type:"button",onClick:()=>ba(d),disabled:_,title:_?"Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her":void 0,children:[u.jsx("span",{children:d.name}),u.jsxs("small",{title:T?"Ikke gemte ændringer":"Ingen ikke gemte ændringer",children:[d.versions.length>0&&u.jsx("em",{className:"ide-file-version-count",title:`${d.versions.length} gemte versioner i historikken`,children:d.versions.length}),u.jsx("i",{className:`ide-file-dirty-dot ${T?"dirty":"clean"}`,"aria-hidden":"true"})]})]}),u.jsx("button",{className:"ide-file-actions",type:"button",onClick:()=>jc(d),disabled:d.type!=="file"||F||_,"aria-label":`Filvalg for ${d.name}`,title:_?"Holder Bluetooth-forbindelsen i gang og kan ikke ændres her":"Filvalg",children:u.jsx(nt,{name:"settings",size:16})})]},`${d.source}:${d.path}`)})})]}),u.jsxs("section",{className:"ide-panel ide-status-panel",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"ide-status-head",children:[u.jsx("h2",{children:_e?"Forbundet Pico":"USB udvikling"}),!_e&&u.jsx("span",{className:`ide-usb-status ${Yt.supported?"available":"unavailable"}`,title:Yt.message,"data-tooltip":Yt.message,role:"img","aria-label":Yt.message,tabIndex:0,children:"!"})]}),_e&&u.jsxs("p",{children:[(a==null?void 0:a.deviceName)??"Pico"," er forbundet via Bluetooth."]})]}),!_e&&u.jsxs("div",{className:"ide-actions",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:w?Ns:Vl,disabled:!Yt.supported||R,children:R?"Forbinder...":w?"Afbryd USB":"Forbind USB"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:ya,disabled:_e||F,children:"Download"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:Ec,disabled:!w||F,children:"Nulstil enhed"})]}),_e&&u.jsxs("div",{className:"ide-actions",children:[u.jsxs("button",{className:"btn btn-primary ide-connection-state",type:"button",disabled:!0,children:[u.jsx(nt,{name:"power",size:22}),"Bluetooth forbundet"]}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:ya,disabled:F,children:"Startprogrammer og biblioteker"})]}),!_e&&u.jsx("div",{className:"ide-runtime",children:u.jsx("div",{className:"ide-mini-actions single",children:u.jsx("button",{className:"btn btn-outline ide-disconnect-btn",type:"button",onClick:()=>wn(!0),children:"MicroPython"})})})]}),u.jsxs("section",{className:"ide-panel ide-editor-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("div",{className:"ide-editor-title",children:u.jsxs("h2",{children:[Ne(ee),u.jsxs("small",{children:[ys," bytes"]})]})}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Yl,disabled:F,children:"Kør"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Cc,disabled:!Ml&&!(!Tt&&On)&&(!w||!En),children:"Stop"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Ms,disabled:F||!ee.trim(),children:"Gem"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Cs(),disabled:F||!ee.trim(),children:"Slet"})]})]}),vi(),u.jsxs("div",{className:"ide-editor-wrap",children:[u.jsx("div",{className:"ide-line-numbers","aria-hidden":"true",style:{transform:`translateY(${-di.top}px)`},children:Array.from({length:lt},(d,_)=>u.jsx("span",{children:_+1},_))}),u.jsx("pre",{className:"ide-highlight","aria-hidden":"true",style:{transform:`translate(${-di.left}px, ${-di.top}px)`},children:nv(W,gc)}),u.jsx("textarea",{ref:Ln,className:"ide-editor",value:W,onChange:d=>Dn(d.target.value,d.target.selectionStart,_r(),d.target.selectionEnd,"typing"),onKeyDown:qs,onKeyUp:d=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||Ni(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>{Ni(d.currentTarget.value,d.currentTarget.selectionStart),Fs(d.currentTarget)},onSelect:d=>Fs(d.currentTarget),onScroll:d=>{Ir({top:d.currentTarget.scrollTop,left:d.currentTarget.scrollLeft}),Pe&&Ni(d.currentTarget.value,d.currentTarget.selectionStart)},readOnly:F||!!se,"aria-busy":F||!!se,spellCheck:!1}),Pe&&u.jsx("div",{ref:pn,className:`ide-autocomplete placement-${Pe.position.placement}`,role:"listbox","aria-label":"Kodeforslag",style:{left:Pe.position.left,top:Pe.position.top,maxHeight:Pe.position.maxHeight},children:(Pe.position.placement==="above"?Pe.items.map((d,_)=>({item:d,index:_})).reverse():Pe.items.map((d,_)=>({item:d,index:_}))).map(({item:d,index:_})=>u.jsx("button",{className:_===Pe.selected?"active":"",type:"button","data-autocomplete-index":_,onMouseDown:x=>{x.preventDefault(),Bn(d)},role:"option","aria-selected":_===Pe.selected,children:d.label},d.label))}),se&&u.jsxs("div",{className:"ide-editor-loading",role:"status","aria-live":"polite",children:[u.jsx("span",{className:"spinner","aria-hidden":"true"}),u.jsxs("strong",{children:["Indlæser ",Ne(se),"..."]})]})]})]}),u.jsxs("section",{className:"ide-panel ide-terminal-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Terminal"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${ur?"":"active"}`,type:"button",onClick:()=>gs(d=>!d),"aria-label":ur?"Tekniske fejl er slået fra":"Tekniske fejl er slået til","aria-pressed":!ur,title:ur?"Vis originale tekniske fejl":"Viser originale tekniske fejl",children:"Teknisk"}),u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${Zt?"active":""}`,type:"button",onClick:()=>Cl(d=>!d),"aria-pressed":Zt,title:Zt?"Terminalen ryddes, hver gang du trykker Kør":"Terminalen beholder tekst, når du trykker Kør",children:"Ryd ved Kør"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Gs,disabled:U.length===0,children:"Ryd"})]})]}),u.jsxs("div",{className:"ide-terminal","aria-live":"polite",ref:kn,onScroll:ki,onClick:()=>{var d;return(d=pt.current)==null?void 0:d.focus()},children:[U.length===0?u.jsx("div",{className:"term-line",children:"Ingen terminaldata endnu."}):U.map((d,_)=>u.jsx("div",{className:`term-line ${d.variant==="input"?"term-input-echo":`term-${d.level}`}`,children:d.technical&&!ur?d.technical:d.text},`${_}-${d.text}`)),u.jsxs("form",{className:`ide-terminal-command ${Fn&&!$n?"locked":""} ${$n?"stdin":""}`,onSubmit:d=>{d.preventDefault(),$l()},children:[u.jsx("span",{"aria-hidden":"true",children:ma}),u.jsx("textarea",{ref:pt,value:ft,onChange:d=>{Qt(d.target.value),dt(null),$n?Cn(null):Ea(d.target.value,d.target.selectionStart)},onKeyDown:Ks,onKeyUp:d=>{$n||["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||Ea(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>{$n||Ea(d.currentTarget.value,d.currentTarget.selectionStart)},disabled:vs,placeholder:hr,"aria-label":$n?"Input til kørende Pico-kode":"MicroPython-terminalkommando",title:hr,rows:Math.max(1,ft.split(`
`).length)})]}),tn&&u.jsx("div",{ref:Ll,className:`ide-autocomplete ide-repl-autocomplete placement-${tn.position.placement}`,role:"listbox","aria-label":"Terminalforslag",style:{left:tn.position.left,top:tn.position.top,maxHeight:tn.position.maxHeight},children:(tn.position.placement==="above"?tn.items.map((d,_)=>({item:d,index:_})).reverse():tn.items.map((d,_)=>({item:d,index:_}))).map(({item:d,index:_})=>u.jsx("button",{className:_===tn.selected?"active":"",type:"button","data-autocomplete-index":_,onMouseDown:x=>{x.preventDefault(),el(d)},role:"option","aria-selected":_===tn.selected,children:d.label},d.label))})]})]})]}),u.jsx("input",{ref:fa,type:"file",accept:".py,.txt,.json,.csv",className:"sr-only",onChange:d=>{var _;kc((_=d.target.files)==null?void 0:_[0]),d.currentTarget.value=""}}),O&&u.jsx(Tn,{title:"Gem fil",onClose:()=>Z(!1),children:u.jsxs("div",{className:"ide-save-options",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>void ha(),disabled:!w&&!_e||F,children:"Gem filen på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:wc,children:"Download filen til computer"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:As,children:"Gem filen i browseren"})]})}),He&&u.jsx(Tn,{title:"Startprogrammer og biblioteker",onClose:()=>Oe(!1),children:u.jsxs("div",{className:"ide-install-list",children:[u.jsx("p",{className:"ide-install-note",children:w||_e?"Vælg et startprogram og de biblioteker dit projekt bruger. Installer lægger filerne på Picoen.":"Du er ikke forbundet til en Pico. Du kan gemme filerne i browseren eller downloade dem til computeren, men de virker først på Picoen, når de er installeret der."}),u.jsxs("div",{className:"ide-install-grid",children:[xa("Startprogrammer (main.py)","Starter automatisk på Picoen.",Ae.filter(d=>d.kind==="program")),xa("Biblioteker","Ekstra Python-filer som dine programmer kan importere.",Ae.filter(d=>d.kind==="library"))]}),u.jsxs("div",{className:"ide-install-actions",children:[(w||_e)&&u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Jr,disabled:F,children:"Installer på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Oc,disabled:F,children:"Download til computer"}),u.jsx("button",{className:w||_e?"btn btn-outline":"btn btn-primary",type:"button",onClick:Ac,disabled:F,children:"Gem i browseren"})]})]})}),Hr&&u.jsx(Tn,{title:"main.py er gemt",onClose:()=>St(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:"Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>void Os("control"),disabled:F,children:"Genstart og åbn kontrolpanel"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void Os("ide"),disabled:F,children:"Genstart og bliv i Kodeværksted"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>St(!1),disabled:F,children:"Senere"})]})}),xe&&u.jsx(Tn,{title:"Installer MicroPython",onClose:()=>wn(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:"Hvis Picoen er helt frisk, skal MicroPython først lægges på den."}),u.jsxs("ol",{className:"micropython-steps",children:[u.jsx("li",{children:"Hold BOOTSEL-knappen nede."}),u.jsx("li",{children:"Sæt Picoen i USB, og slip derefter BOOTSEL."}),u.jsx("li",{children:"Vælg Pico-model og MicroPython-version herunder, og download UF2-filen."}),u.jsxs("li",{children:["Kopier UF2-filen til drevet ",u.jsx("strong",{children:"RPI-RP2"})]})]}),u.jsxs("div",{className:"micropython-selects",children:[u.jsx("label",{htmlFor:"micropython-board",children:"Pico-model"}),u.jsx("select",{id:"micropython-board",value:Mn,onChange:d=>Pt(d.target.value),children:da.map(d=>u.jsx("option",{value:d,children:d},d))}),u.jsx("label",{htmlFor:"micropython-version",children:"MicroPython-version"}),u.jsx("select",{id:"micropython-version",value:(Ft==null?void 0:Ft.version)??Pn,onChange:d=>Ur(d.target.value),children:Fr.map(d=>u.jsxs("option",{value:d.version,children:[d.version," (",d.date,")"]},`${d.board}:${d.version}:${d.date}`))})]}),Ft&&u.jsx("a",{className:"btn btn-primary btn-block",href:Ft.url,download:Ft.fileName,children:"Download UF2"}),u.jsx("a",{className:"btn btn-outline btn-block",href:"https://www.raspberrypi.com/documentation/microcontrollers/micropython.html",target:"_blank",rel:"noreferrer",children:"Se vejledning"})]})}),H&&u.jsx(Tn,{title:"Ny Python-fil",onClose:()=>re(!1),children:u.jsxs("form",{className:"ide-new-file-form",onSubmit:d=>{d.preventDefault(),Rc()},children:[u.jsx("label",{htmlFor:"new-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"new-pico-file",value:ue,onChange:d=>fe(d.target.value),autoFocus:!0,placeholder:"test"}),u.jsx("span",{children:".py"})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen tilføjer .py automatisk og opretter filen i ",bc,"."]}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:!Kh(ue),children:"Opret"})]})}),z&&u.jsx(Tn,{title:Ne(z.path),onClose:()=>ne(null),children:u.jsxs("div",{className:"ide-file-action-modal",children:[u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:"Placering"}),u.jsx("strong",{children:z.source==="pico"?"Pico":"Browser"})]}),u.jsxs("form",{className:"ide-file-rename-form",onSubmit:d=>{d.preventDefault(),zs()},children:[u.jsx("label",{htmlFor:"rename-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"rename-pico-file",value:Ee,onChange:d=>k(d.target.value),placeholder:"min_kode"}),u.jsxs("span",{children:[".",fs(z.path)]})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen beholder filendelsen .",fs(z.path)," automatisk."]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!zf(Ee,fs(z.path))||zf(Ee,fs(z.path))===z.path||F,children:"Gem navn"})]}),u.jsxs("div",{className:"ide-file-action-buttons",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void Dc(),disabled:F,children:"Dupliker"}),u.jsx("button",{className:"btn btn-outline btn-danger btn-block",type:"button",onClick:()=>Cs(z),disabled:F,children:"Slet"})]}),u.jsxs("section",{className:"ide-version-history",children:[u.jsx("h4",{children:"Versionshistorik"}),z.versions.length===0?u.jsx("p",{children:"Versionshistorik: 0 gemte versioner."}):u.jsx("div",{className:"ide-version-list",children:z.versions.map(d=>u.jsxs("div",{className:"ide-version-row",children:[u.jsx("span",{children:Ne(d.path)}),u.jsx("small",{children:d.size!==void 0?`${d.size} bytes`:"Gemt på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>void Mc(d),disabled:F,children:"Gendan"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>ga(d),disabled:F,children:"Slet"})]},d.path))})]})]})})]})}function Kh(s){var c;const i=(c=s.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.replace(/\.py$/i,"").replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"");return i?`/${i}.py`:""}function Py(s){const i=s.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop(),c=i==null?void 0:i.match(/^(.+)\.(py|txt|json|csv)$/i);if(!c)return"";const a=D_(c[1]);return a?`/${a}.${c[2].toLowerCase()}`:""}function zf(s,i="py"){const c=s.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop();if(!c)return"";const a=c.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);if(!a)return"";const f=D_(a[1]),h=i.replace(/^\./,"").toLowerCase(),b=(a[2]??(h||"py")).toLowerCase();return f?`/${f}.${b}`:""}function Yy(s){return Ne(s).replace(/\.(py|txt|json|csv)$/i,"")}function D_(s){return s.replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"")}function fs(s){var a;const i=Ne(s).match(/\.([a-z0-9]+)$/i),c=(a=i==null?void 0:i[1])==null?void 0:a.toLowerCase();return c&&["py","txt","json","csv"].includes(c)?c:"py"}function sr(s){return s.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}function Xh(){return na.map(s=>({...s,status:"unknown",detail:"Kan gemmes uden Pico. Forbind en Pico for at installere."}))}function Qh(s){const i={};return s.forEach(c=>{i[c.id]=!1}),i}function Ne(s){return s.split("/").filter(Boolean).pop()??s}function Jo(s){return s.replace(/\\/g,"/").toLowerCase()==="/main.py"}function Zh(s){const i=s.userAgent||"",c=s.platform||"",a=s.maxTouchPoints||0,f=/Android.*Mobile|iPhone|iPod|Windows Phone|Mobile Safari/i.test(i),h=/Macintosh/i.test(c)&&a>1;return f&&!h}function Fy(s){return s instanceof DOMException&&s.name==="AbortError"}function $y(s){return/Traceback \(most recent call last\):/.test(s)||/\b(?:SyntaxError|NameError|TypeError|ValueError|IndentationError|ImportError|ModuleNotFoundError|ZeroDivisionError|IndexError|KeyError|AttributeError):/.test(s)}function Rl(s){return qy(s)}function qy(s){return s.path.replace(/\\/g,"/").toLowerCase()==="/bleperipheral.py"}const qf=[...["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"].map(s=>({label:s,insert:`${s}${["for","if","while","def","class","elif","else","try","except","finally","with"].includes(s)?" ":""}`})),...["abs","all","any","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","exec","filter","float","getattr","hasattr","hash","hex","id","input","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","open","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","zip"].map(s=>({label:`${s}()`,insert:`${s}()`})),{label:"for i in range():",insert:"for i in range():"},{label:"while True:",insert:"while True:"},{label:"if True:",insert:"if True:"},{label:"time",insert:"time"},{label:"time.",insert:"time."},{label:"time.sleep",insert:"time.sleep"},{label:"time.sleep()",insert:"time.sleep()"},{label:"time.sleep_ms()",insert:"time.sleep_ms()"},{label:"time.ticks_ms()",insert:"time.ticks_ms()"},{label:"time.ticks_diff()",insert:"time.ticks_diff()"},{label:"time.sleep_us()",insert:"time.sleep_us()"},{label:"time.ticks_us()",insert:"time.ticks_us()"},{label:"machine",insert:"machine"},{label:"machine.",insert:"machine."},{label:"machine.Pin",insert:"machine.Pin"},{label:"machine.PWM",insert:"machine.PWM"},{label:"machine.ADC",insert:"machine.ADC"},{label:"machine.I2C",insert:"machine.I2C"},{label:"machine.SPI",insert:"machine.SPI"},{label:"machine.Timer",insert:"machine.Timer"},{label:"machine.UART",insert:"machine.UART"},{label:"machine.reset()",insert:"machine.reset()"},{label:"machine.freq()",insert:"machine.freq()"},{label:"Pin()",insert:"Pin()"},{label:"PWM()",insert:"PWM()"},{label:"ADC()",insert:"ADC()"},{label:"I2C()",insert:"I2C()"},{label:"SPI()",insert:"SPI()"},{label:"Timer()",insert:"Timer()"},{label:"UART()",insert:"UART()"},{label:"Pin.OUT",insert:"Pin.OUT"},{label:"Pin.IN",insert:"Pin.IN"},{label:"Pin.PULL_UP",insert:"Pin.PULL_UP"},{label:"Pin.PULL_DOWN",insert:"Pin.PULL_DOWN"},{label:"Pin.IRQ_FALLING",insert:"Pin.IRQ_FALLING"},{label:"Pin.IRQ_RISING",insert:"Pin.IRQ_RISING"},{label:"import time",insert:"import time"},{label:"import utime as time",insert:"import utime as time"},{label:"import machine",insert:"import machine"},{label:"import random",insert:"import random"},{label:"import os",insert:"import os"},{label:"import sys",insert:"import sys"},{label:"from machine import Pin",insert:"from machine import Pin"},{label:"from machine import Pin, PWM",insert:"from machine import Pin, PWM"},{label:"from machine import Pin, PWM, ADC",insert:"from machine import Pin, PWM, ADC"},{label:"BLEPeripheral",insert:"BLEPeripheral"},{label:"PicoRobotics",insert:"PicoRobotics"},{label:"NeoPixel",insert:"NeoPixel"},{label:"HCSR04",insert:"HCSR04"},{label:"ble.send_toggle_state()",insert:"ble.send_toggle_state()"},{label:"ble.send_radar()",insert:"ble.send_radar()"},{label:"ble.send_text()",insert:"ble.send_text()"},{label:"on_button(name, is_down):",insert:"on_button(name, is_down):"},{label:"on_slider(name, value):",insert:"on_slider(name, value):"},{label:"on_toggle(name, value):",insert:"on_toggle(name, value):"},{label:"on_connect():",insert:"on_connect():"},{label:"on_disconnect():",insert:"on_disconnect():"},{label:"ValueError",insert:"ValueError"},{label:"TypeError",insert:"TypeError"},{label:"OSError",insert:"OSError"},{label:"Exception",insert:"Exception"}];function Wh(s,i,c){const a=Kf(s,i);if(!a)return[];const f=Ky(s,a.start,i),h=a.query.toLowerCase(),b=f.beforeToken.toLowerCase(),p=f.linePrefix.toLowerCase(),g=c?[...qf,...Qy(s)]:qf;return Zy(g).filter(w=>{const E=w.label.toLowerCase(),R=w.insert.toLowerCase();return R===h||E===h||A_(w,a.query)?!1:f.importLine?Xy(w,f)?E.startsWith(p)||R.startsWith(p)||E.startsWith(h)||R.startsWith(h):!1:b.endsWith(".")&&!R.includes(".")?!1:!!(R.startsWith(h)||E.startsWith(h))})}function Ky(s,i,c){const a=s.lastIndexOf(`
`,i-1)+1,f=s.slice(a,c),h=s.slice(a,i),b=/^\s*(?:import|from)\s+[\w.,\s]*$/i.test(f),p=/^\s*from\s+\w+(?:\.\w+)*\s+import\s+/i.test(f);return{linePrefix:f,beforeToken:h,importLine:b,fromImportLine:p}}function Xy(s,i){return i.fromImportLine?!s.insert.includes("(")&&!s.insert.startsWith("import "):s.insert.startsWith("import ")||s.insert.startsWith("from ")?!0:/^[A-Za-z_][A-Za-z0-9_]*$/.test(s.insert)}function Qy(s){const i=new Set,c=[/\bdef\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/g,/\bclass\s+([A-Za-z_][A-Za-z0-9_]*)\b/g,/(?:^|[^\w.])([A-Za-z_][A-Za-z0-9_]*)\s*=/g,/\bfor\s+([A-Za-z_][A-Za-z0-9_]*)\s+in\b/g,/\b([A-Za-z_][A-Za-z0-9_]*)\.([A-Za-z_][A-Za-z0-9_]*)\s*\(/g];for(const a of c)for(const f of s.matchAll(a))f[1]&&i.add(f[1]),f[2]&&i.add(f[2]);return[...i].filter(a=>a.length>1&&!Wy.has(a)).sort((a,f)=>a.localeCompare(f,"da")).map(a=>({label:a,insert:a}))}function Zy(s){const i=new Set,c=[];for(const a of s){const f=a.insert.toLowerCase();i.has(f)||(i.add(f),c.push(a))}return c}const Wy=new Set(qf.map(s=>s.insert.replace(/[().: ]+$/g,"")));function Kf(s,i){const a=s.slice(0,i).match(/[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_.]*$/);return!a||a.index===void 0?null:{query:a[0],start:a.index}}function Jh(s,i){const c=s.lastIndexOf(`
`,Math.max(0,i-1))+1;let a=null,f=null,h=!1;for(let b=0;b<i;b+=1){const p=s[b],g=s.slice(b,b+3);if(f){g===f.repeat(3)&&(f=null,b+=2);continue}if(a){if(h){h=!1;continue}if(p==="\\"){h=!0;continue}p===a&&(a=null),p===`
`&&(a=null);continue}if(p==="#"){const y=s.indexOf(`
`,b),w=y===-1?s.length:y;if(i<=w&&b>=c)return!0;b=w;continue}if(g==='"""'||g==="'''"){f=p,b+=2;continue}(p==='"'||p==="'")&&(a=p)}return a!==null||f!==null}function A_(s,i){const c=s.insert.trim();return!/[().]/.test(c)&&c.toLowerCase()===i.toLowerCase()}function Jy(s){return/^[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_]*$/.test(s)}function e_(s,i,c){if(!s)return null;const a=s.closest(".ide-terminal")??s.parentElement;if(!a)return null;const f=window.getComputedStyle(s),h=document.createElement("div"),b=document.createElement("span"),p=a.getBoundingClientRect(),g=s.getBoundingClientRect();h.style.position="absolute",h.style.visibility="hidden",h.style.pointerEvents="none",h.style.whiteSpace="pre-wrap",h.style.overflowWrap="break-word",h.style.wordBreak=f.wordBreak,h.style.boxSizing=f.boxSizing,h.style.width=`${s.getBoundingClientRect().width}px`,h.style.padding=f.padding,h.style.border=f.border,h.style.font=f.font,h.style.lineHeight=f.lineHeight,h.style.letterSpacing=f.letterSpacing,h.style.tabSize=f.tabSize,h.style.fontVariantLigatures=f.fontVariantLigatures,h.style.scrollbarGutter=f.scrollbarGutter,h.style.left=`${g.left-p.left-s.scrollLeft}px`,h.style.top=`${g.top-p.top-s.scrollTop}px`,h.textContent=s.value.slice(0,i),b.textContent=s.value.slice(i,i+1)||" ",h.appendChild(b),a.appendChild(h);const y=b.getBoundingClientRect();h.remove();const w=34,E=14,R=Math.min(210,Math.max(w+E,c*w+E)),D=ev(y.left-p.left,8,Math.max(8,a.clientWidth-296)),U=y.top-p.top+a.scrollTop,K=y.bottom-p.top+a.scrollTop+10,F=a.scrollTop+a.clientHeight-K-8,V=U-a.scrollTop-8,G=a.scrollTop+a.clientHeight,ae=F>=Math.min(R,w*2)||F>=V?"below":"above",se=Math.max(w+E,Math.min(R,ae==="below"?F:V)),oe=ae==="below"?Math.min(K,G-se-8):Math.max(a.scrollTop+8,U-se-8);return{left:D,top:oe,maxHeight:se,placement:ae}}function ev(s,i,c){return Math.max(i,Math.min(c,s))}function nv(s,i=""){const c=/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,a=/(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm,f=[];return s.split(/(\r?\n)/).forEach((h,b)=>{if(h===`
`||h===`\r
`){f.push(u.jsx("br",{},`br-${b}`));return}let p=0;[...h.matchAll(a)].forEach((y,w)=>{const E=y.index??0;E>p&&f.push(...n_(h.slice(p,E),c,`${b}-${w}-plain`,i));const R=y[0],D=R.startsWith("#")?"tok-comment":R.startsWith('"')||R.startsWith("'")?"tok-string":/^\d/.test(R)?"tok-number":"tok-builtin";f.push(...lc(R,i,`${b}-${w}-token`,D)),p=E+R.length}),p<h.length&&f.push(...n_(h.slice(p),c,`${b}-tail`,i))}),f.length?f:" "}function n_(s,i,c,a=""){const f=[];let h=0;const b=new RegExp(i.source,"g");return[...s.matchAll(b)].forEach((p,g)=>{const y=p.index??0;y>h&&f.push(...lc(s.slice(h,y),a,`${c}-${g}-plain`)),f.push(...lc(p[0],a,`${c}-${g}-keyword`,"tok-keyword")),h=y+p[0].length}),h<s.length&&f.push(...lc(s.slice(h),a,`${c}-plain-end`)),f}function lc(s,i,c,a=""){if(!i)return[u.jsx("span",{className:a||void 0,children:s},c)];const f=[],h=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),b=new RegExp(`(?<![A-Za-zÆØÅæøå0-9_])(${h})(?![A-Za-zÆØÅæøå0-9_])`,"g");let p=0;return[...s.matchAll(b)].forEach((g,y)=>{const w=g.index??0;w>p&&f.push(u.jsx("span",{className:a||void 0,children:s.slice(p,w)},`${c}-${y}-before`)),f.push(u.jsx("span",{className:`${a} tok-match`.trim(),children:g[0]},`${c}-${y}-match`)),p=w+g[0].length}),p<s.length&&f.push(u.jsx("span",{className:a||void 0,children:s.slice(p)},`${c}-after`)),f.length?f:[u.jsx("span",{className:a||void 0,children:s},c)]}function ec(s){return s.length>0?s:[{path:$f,content:M_,uploaded:!1,updatedAt:Date.now()}]}function Uf(s,i,c,a){const f=s.filter(h=>h.path!==i);return[{path:i,content:c,uploaded:a,updatedAt:Date.now()},...f].sort((h,b)=>b.updatedAt-h.updatedAt)}function ic(s){return s.map(i=>({name:Ne(i.path),path:i.path,type:"file",size:new Blob([i.content]).size}))}function tv(s,i,c){var a;return s.source==="pico"?c[s.path]:(a=i.find(f=>f.path===s.path))==null?void 0:a.content}function ac(s){const i=s.replace(/\\/g,"/"),c=i.lastIndexOf("/"),a=c>=0?i.slice(0,c+1):"",h=(c>=0?i.slice(c+1):i).match(/^(.+)_backup(\d+)(\.[^.]+)$/i);return h?{originalPath:`${a}${h[1]}${h[3]}`,index:parseInt(h[2],10)}:null}function Tl(s){return ac(s)!==null}function ta(s){const i=new Map;for(const c of s){const a=ac(c.path);if(!a)continue;const f=i.get(a.originalPath)??[];f.push(c),i.set(a.originalPath,f)}for(const c of i.values())c.sort((a,f)=>{var h,b;return(((h=ac(f.path))==null?void 0:h.index)??0)-(((b=ac(a.path))==null?void 0:b.index)??0)});return i}function t_(s,i){const c=s.replace(/\\/g,"/"),a=c.lastIndexOf("/"),f=a>=0?c.slice(0,a+1):"/",h=a>=0?c.slice(a+1):c.replace(/^\/+/,""),b=h.lastIndexOf("."),p=b>0?h.slice(0,b):h,g=b>0?h.slice(b):"",y=new Set(i.map(w=>w.path.toLowerCase()));for(let w=1;w<1e3;w+=1){const E=`${f}${p}_backup${w}${g}`;if(!y.has(E.toLowerCase()))return E}return`${f}${p}_backup${Date.now()}${g}`}function rv(s,i){const c=s.replace(/\\/g,"/"),a=c.lastIndexOf("/"),f=a>=0?c.slice(0,a+1):"/",h=a>=0?c.slice(a+1):c.replace(/^\/+/,""),b=h.lastIndexOf("."),p=b>0?h.slice(0,b):h,g=b>0?h.slice(b):"";for(let y=1;y<1e3;y+=1){const w=y===1?"_kopi":`_kopi${y}`,E=`${f}${p}${w}${g}`;if(!i(E)&&!Tl(E))return E}return`${f}${p}_kopi${Date.now()}${g}`}function lv(s){return s==="ok"?"Nyeste":s==="outdated"?"Opdater":s==="missing"?"Mangler":"Ikke tjekket"}function iv(s,i,c,a){const f=new Map,h=ta(s),b=ta(ic(i));for(const E of s)Tl(E.path)||f.set(Vn("pico",E.path),{kind:"file",name:E.name,path:E.path,type:E.type,size:E.size,source:"pico",uploaded:!0,versions:h.get(E.path)??[]});for(const E of i)Tl(E.path)||f.set(Vn("local",E.path),{kind:"file",name:Ne(E.path),path:E.path,type:"file",source:"local",uploaded:!1,versions:b.get(E.path)??[]});for(const E of Object.keys(c)){const[R,...D]=E.split(":"),U=D.join(":");if(R!=="local"&&R!=="pico"||!U)continue;const K=f.get(E);if(K){f.set(E,K);continue}f.set(E,{kind:"file",name:Ne(U),path:U,type:"file",source:R,uploaded:!1,versions:R==="pico"?h.get(U)??[]:b.get(U)??[]})}const p=[...f.values()].sort(sv),g=p.filter(E=>E.source==="pico"),y=p.filter(E=>E.source==="local"),w=[];return g.length>0||a?w.push({kind:"separator",id:"pico-files",label:a?"Pico":"Microcontroller"},...g):w.push({kind:"separator",id:"pico-files",label:"Microcontroller"}),y.length>0&&w.push({kind:"separator",id:"browser-files",label:"Browser"},...y),w}const av=new Map([["main.py",0],["devicesettings.txt",1],["layout.txt",2],["bleperipheral.py",3],["picofly.py",4],["picorobotics.py",5],["neopixel.py",6],["hcsr04.py",7]]);function sv(s,i){const c=r_(s.path),a=r_(i.path);return c===null&&a===null?s.name.localeCompare(i.name,"da"):c===null?-1:a===null?1:c-a}function r_(s){var c;const i=(c=s.replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.toLowerCase();return i?av.get(i)??null:null}function l_(s,i,c){if(!(i in s))return s;const a={...s,[c]:s[i]};return delete a[i],a}function ov(s,i,c,a){const f=`${i}:${c}`;if(!(f in s))return s;const h={...s,[`${i}:${a}`]:s[f]};return delete h[f],h}function cv({open:s}){const i=le(G=>G.screen),c=le(G=>G.active),a=le(G=>G.toggleSideMenu),f=le(G=>G.toggleDebugger),h=le(G=>G.setEditMode),b=le(G=>G.openMenuPage),p=le(G=>G.disconnect),g=le(G=>G.openPicoIde),y=le(G=>G.closePicoIde),w=le(G=>G.picoIdeOrigin),E=i==="dashboard",R=i==="control",D=i==="ide",U=R&&!!(c!=null&&c.canEdit),K=!R||!!(c!=null&&c.isOwnedByMe)||!!(c!=null&&c.canEditCode),F=w==="control",V=w==="control"?"Kontrol Panel":"Hovedmenu";return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:`scrim ${s?"open":"closing"}`,onClick:()=>a(!1)}),u.jsxs("nav",{className:`sidemenu sidemenu-${i} ${s?"open":"closing"}`,"aria-label":"Sidemenu",children:[E&&u.jsxs(u.Fragment,{children:[u.jsx(wt,{label:"Bruger",icon:"user",onClick:()=>b("user-settings")}),u.jsx(wt,{label:"Indstillinger",icon:"settings",onClick:()=>b("application-settings")}),u.jsx(wt,{label:"Kodeværksted",icon:"picoIde",onClick:g,disabled:!K}),u.jsx(Hf,{}),u.jsx(wt,{label:"Om appen",icon:"info",onClick:()=>b("application-about")}),u.jsx(wt,{label:"Hjælp",icon:"help",onClick:()=>b("application-help")}),u.jsx(wt,{label:"Fejlfinding",icon:"debugger",onClick:()=>f(!0)})]}),R&&u.jsxs(u.Fragment,{children:[u.jsx(wt,{label:"Indstillinger",icon:"settings",onClick:()=>b("device-settings")}),u.jsx(wt,{label:"Rediger",icon:"edit",onClick:()=>h(!0),disabled:!U}),u.jsx(wt,{label:"Kodeværksted",icon:"picoIde",onClick:g,disabled:!K}),u.jsx(Hf,{}),u.jsx(wt,{label:"Hjælp",icon:"help",onClick:()=>b("device-help")}),u.jsx(wt,{label:"Fejlfinding",icon:"debugger",onClick:()=>f(!0)})]}),D&&u.jsxs(u.Fragment,{children:[u.jsx(wt,{label:V,icon:"back",onClick:y}),u.jsx(Hf,{})]}),u.jsx("div",{className:"spacer"}),(R||D&&F)&&u.jsx(wt,{label:"Forlad",icon:"exit",onClick:()=>p()})]})]})}function wt({label:s,icon:i,disabled:c,onClick:a}){return u.jsxs("button",{className:"iconbtn",type:"button",onClick:a,disabled:c,"aria-label":s,children:[u.jsx(nt,{name:i}),u.jsx("span",{children:s})]})}function Hf(){return u.jsxs("a",{className:"iconbtn sidemenu-link",href:"https://www.teknologiskolen.dk/",target:"_blank",rel:"noreferrer","aria-label":"Teknologiskolen",children:[u.jsx("img",{src:Zb,alt:""}),u.jsx("span",{children:"Teknologiskolen"})]})}const uv={error:"term-error",success:"term-success",warning:"term-warning",info:""},i_={error:"[FEJL] ",success:"[SUCCES] ",warning:"[ADVARSEL] ",info:""};function fv(){const s=new Date,i=c=>String(c).padStart(2,"0");return`${i(s.getDate())}-${i(s.getMonth()+1)}-${s.getFullYear()}-${i(s.getHours())}-${i(s.getMinutes())}`}function dv(){const s=le(f=>f.logs),i=le(f=>f.clearLogs),c=le(f=>f.toggleDebugger);function a(){const f=[...s].reverse().map(g=>`${g.time} ${i_[g.level]}${g.message}`).join(`
`),h=new Blob([f],{type:"text/plain"}),b=URL.createObjectURL(h),p=document.createElement("a");p.href=b,p.download=`${fv()}.txt`,p.click(),URL.revokeObjectURL(b)}return u.jsxs(Tn,{title:"Fejlfinding",onClose:()=>c(!1),closeVariant:"circle",children:[u.jsx("div",{className:"terminal",children:s.length===0?u.jsx("div",{className:"term-line",children:"Ingen log endnu."}):s.map((f,h)=>u.jsxs("div",{className:`term-line ${uv[f.level]}`,children:[f.time," ",i_[f.level],f.message]},`${f.time}-${h}`))}),u.jsxs("div",{className:"row",style:{marginTop:14},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:"Ryd"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:a,children:"Gem logfil"})]})]})}const O_=4,Vt=O_*4+17,a_=80,mv=20,pv=30660;function hv(s){const i=new TextEncoder().encode(s);if(i.length>76)throw new Error("QR-koden er for lang.");const c=s_(!1),a=s_(!1);_v(c,a);const f=bv(i),h=xv(f,mv);return yv(c,a,[...f,...h]),vv(c,a),c}function s_(s){return Array.from({length:Vt},()=>Array.from({length:Vt},()=>s))}function Gt(s,i,c,a,f,h=!0){s[a][c]=f,h&&(i[a][c]=!0)}function _v(s,i){If(s,i,0,0),If(s,i,Vt-7,0),If(s,i,0,Vt-7);for(let c=0;c<Vt;c+=1)i[6][c]||Gt(s,i,c,6,c%2===0),i[c][6]||Gt(s,i,6,c,c%2===0);gv(s,i,26,26),Gt(s,i,8,O_*4+9,!0)}function If(s,i,c,a){for(let f=-1;f<=7;f+=1)for(let h=-1;h<=7;h+=1){const b=c+h,p=a+f;if(b<0||p<0||b>=Vt||p>=Vt)continue;const g=h>=0&&h<=6&&f>=0&&f<=6&&(h===0||h===6||f===0||f===6||h>=2&&h<=4&&f>=2&&f<=4);Gt(s,i,b,p,g)}}function gv(s,i,c,a){for(let f=-2;f<=2;f+=1)for(let h=-2;h<=2;h+=1)i[a+f][c+h]||Gt(s,i,c+h,a+f,Math.max(Math.abs(h),Math.abs(f))!==1)}function bv(s){const i=[];nc(i,4,4),nc(i,s.length,8);for(const a of s)nc(i,a,8);for(nc(i,0,Math.min(4,a_*8-i.length));i.length%8!==0;)i.push(0);const c=[];for(let a=0;a<i.length;a+=8)c.push(i.slice(a,a+8).reduce((f,h)=>f<<1|h,0));for(let a=236;c.length<a_;a=a===236?17:236)c.push(a);return c}function nc(s,i,c){for(let a=c-1;a>=0;a-=1)s.push(i>>>a&1)}function yv(s,i,c){const a=c.flatMap(b=>Array.from({length:8},(p,g)=>b>>>7-g&1));let f=0,h=!0;for(let b=Vt-1;b>=1;b-=2){b===6&&(b-=1);for(let p=0;p<Vt;p+=1){const g=h?Vt-1-p:p;for(let y=0;y<2;y+=1){const w=b-y;if(i[g][w])continue;const E=f<a.length?a[f]===1:!1;s[g][w]=E!==((w+g)%2===0),f+=1}}h=!h}}function vv(s,i){const c=a=>(pv>>>a&1)!==0;for(let a=0;a<=5;a+=1)Gt(s,i,8,a,c(a));Gt(s,i,8,7,c(6)),Gt(s,i,8,8,c(7)),Gt(s,i,7,8,c(8));for(let a=9;a<15;a+=1)Gt(s,i,14-a,8,c(a));for(let a=0;a<8;a+=1)Gt(s,i,Vt-1-a,8,c(a));for(let a=8;a<15;a+=1)Gt(s,i,8,Vt-15+a,c(a))}const ps=new Array(512),Xf=new Array(256);let o_=!1;function C_(){if(o_)return;let s=1;for(let i=0;i<255;i+=1)ps[i]=s,Xf[s]=i,s<<=1,s&256&&(s^=285);for(let i=255;i<512;i+=1)ps[i]=ps[i-255];o_=!0}function L_(s,i){return s===0||i===0?0:ps[Xf[s]+Xf[i]]}function xv(s,i){C_();const c=wv(i),a=Array.from({length:i},()=>0);for(const f of s){const h=f^a.shift();a.push(0);for(let b=0;b<i;b+=1)a[b]^=L_(c[b],h)}return a}function wv(s){C_();let i=[1];for(let c=0;c<s;c+=1){const a=Array.from({length:i.length+1},()=>0);for(let f=0;f<i.length;f+=1)a[f]^=L_(i[f],ps[c]),a[f+1]^=i[f];i=a}return i.slice(1)}function Ev(){const s=le(xe=>xe.menuPage),i=le(xe=>xe.closeMenuPage),c=le(xe=>xe.user),a=le(xe=>xe.active),f=le(xe=>xe.layout),h=le(xe=>xe.sliderValues),b=le(xe=>xe.savedDevices),p=le(xe=>xe.updateUsername),g=le(xe=>xe.createOwnerPairingCode),y=le(xe=>xe.applyOwnerPairingCode),w=le(xe=>xe.clearSavedDevices),E=le(xe=>xe.resetApplicationData),R=le(xe=>xe.saveDeviceSettings),D=le(xe=>xe.setEditMode),U=le(xe=>xe.askConfirm),[K,F]=B.useState((c==null?void 0:c.username)??""),[V,G]=B.useState(!1),[ae,se]=B.useState(""),[oe,he]=B.useState(""),[te,ee]=B.useState(!1),[Re,ve]=B.useState(""),we=B.useRef(null),[W,Fe]=B.useState((a==null?void 0:a.iconID)??0),[Ae,$e]=B.useState(!1),[H,re]=B.useState((a==null?void 0:a.canOthersConnect)??!1),[ue,fe]=B.useState((a==null?void 0:a.canOthersEdit)??!1),[Ee,k]=B.useState((a==null?void 0:a.canOthersEditCode)??!1),[z,ne]=B.useState((a==null?void 0:a.gridCols)??11),[O,Z]=B.useState((a==null?void 0:a.gridRows)??31),[J,q]=B.useState(!1);B.useEffect(()=>{s==="user-settings"&&(F((c==null?void 0:c.username)??""),he(""),ve(""),ee(!1))},[s,c==null?void 0:c.username]),B.useEffect(()=>{s==="device-settings"&&a&&(Fe(a.iconID),re(a.canOthersConnect),fe(a.canOthersEdit),k(a.canOthersEditCode),ne(a.gridCols),Z(a.gridRows))},[a,s]),B.useEffect(()=>{if(!te)return;let xe=!1,wn=null,jn=0;async function ze(){var Pt;const Mn=window.BarcodeDetector;if(!Mn||!((Pt=navigator.mediaDevices)!=null&&Pt.getUserMedia)){ve("Denne browser kan ikke scanne QR-koder. Skriv ejerkoden i stedet."),ee(!1);return}try{wn=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const Pn=we.current;if(!Pn)return;Pn.srcObject=wn,await Pn.play();const Ur=new Mn({formats:["qr_code"]}),Hr=async()=>{var St;if(!xe){try{const Ir=(St=(await Ur.detect(Pn)).find(En=>En.rawValue))==null?void 0:St.rawValue;if(Ir){he(Ir),y(Ir)&&G(!1),ee(!1);return}}catch{}jn=window.requestAnimationFrame(Hr)}};jn=window.requestAnimationFrame(Hr)}catch{ve("Kameraet kunne ikke åbnes. Skriv ejerkoden i stedet."),ee(!1)}}return ze(),()=>{xe=!0,jn&&window.cancelAnimationFrame(jn),wn==null||wn.getTracks().forEach(Mn=>Mn.stop())}},[y,te]);const He=(xe,wn)=>Number.isFinite(xe)?Math.max(la,Math.min(ia,Math.round(xe))):wn,Oe=(c==null?void 0:c.username)??"",Qn=K.trim(),Xt=Qn.length>0&&Qn!==Oe;if(!s)return null;if(s==="user-settings"){let xe=function(){const ze=g();ze&&(se(ze),he(""),G(!0))},wn=function(){y(oe)&&(he(""),G(!1))};async function jn(){var ze;try{await((ze=navigator.clipboard)==null?void 0:ze.writeText(ae))}catch{}}return u.jsxs(u.Fragment,{children:[u.jsx(Tn,{title:"Brugerindstillinger",onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(It,{label:"GUID",value:(c==null?void 0:c.userID)??"Ukendt"}),u.jsxs("div",{className:`field ${K.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-username",value:K,onChange:ze=>F(ze.target.value),maxLength:24,autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>p(K),disabled:!Xt,children:"Gem nyt brugernavn"}),u.jsx("div",{className:"notice",children:"Ejerkode bruges, hvis den samme person skal forbinde fra flere browsere eller telefoner."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:xe,children:"Ejerkode"}),u.jsx("button",{className:"btn btn-outline btn-block btn-danger",type:"button",onClick:()=>U({title:"Start forfra",message:"Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.",confirmLabel:"Slet alt",onConfirm:()=>{E()}}),children:"Slet brugerdata"})]})}),V&&u.jsx(Tn,{title:"Del ejerkode",onClose:()=>G(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Nv,{code:ae}),u.jsx("code",{className:"owner-code-text",children:ae}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void jn(),children:"Kopiér ejerkode"}),u.jsxs("div",{className:`field ${oe.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-owner-code",value:oe,onChange:ze=>he(ze.target.value),autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-owner-code",children:"Skriv ejerkode"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:wn,disabled:!oe.trim(),children:"Brug ejerkode i denne browser"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>ee(ze=>!ze),children:te?"Stop scanning":"Scan QR-kode"}),Re&&u.jsx("div",{className:"notice",children:Re}),te&&u.jsx("video",{className:"owner-code-video",ref:we,muted:!0,playsInline:!0})]})})]})}if(s==="application-settings")return u.jsx(Tn,{title:"Applikationsindstillinger",onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(It,{label:"Version",value:hs}),u.jsx(It,{label:"Bluetooth",value:pc()?"Tilgængelig":"Ikke tilgængelig"}),u.jsx(It,{label:"Gemte enheder",value:String(b.length)}),u.jsx("div",{className:"notice",children:"Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne tilladelsen i browserens site- eller Bluetooth-indstillinger."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>U({title:"Ryd gemte enheder",message:"Vil du fjerne alle gemte enheder fra denne browser?",confirmLabel:"Ryd",onConfirm:w}),disabled:b.length===0,children:"Ryd gemte enheder"})]})});if(s==="application-about")return u.jsx(Tn,{title:"Om appen",onClose:i,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Pico Kontrol Panel er lavet til at bygge og fjernstyre sjove eller seje Raspberry Pi Pico W-projekter."}),u.jsx(It,{label:"Udvikler",value:"Christian Bröchner Rasmussen"}),u.jsx(It,{label:"Version",value:hs})]})});if(s==="application-help")return u.jsx(Tn,{title:"Hjælp til applikationen",onClose:i,children:u.jsxs("div",{className:"settings-stack prose help-lesson",children:[u.jsxs("div",{className:"help-lesson-card",children:[u.jsx("strong",{children:"Komplet undervisningsforløb"}),u.jsx("p",{children:"Linket åbner Teknologiskolens guide til Pico Kontrol Panel. Her kan du lære hele arbejdsgangen: browseropsætning, Kodeværkstedet, MicroPython, USB-installation, Bluetooth-forbindelse, kontrolpaneler og trådløs kodeudvikling."})]}),u.jsxs("div",{className:"help-lesson-list","aria-label":"Undervisningsforløbet indeholder",children:[u.jsx("span",{children:"Trin-for-trin opsætning"}),u.jsx("span",{children:"Øvelser til kode og kontrolpanel"}),u.jsx("span",{children:"Projektforslag med Pico W"})]}),u.jsx("p",{className:"help-lesson-destination",children:"Du sendes til materialer.teknologiskolen.dk i en ny fane."}),u.jsx("a",{className:"btn btn-primary btn-block",href:"https://materialer.teknologiskolen.dk/lessons/fjernstyring-af-raspberry-pi-pico-w",target:"_blank",rel:"noreferrer",children:"Åbn komplet undervisningsforløb"})]})});if(s==="device-settings"){const xe=f.filter(ze=>ze.type==="slider"),wn=!!(a!=null&&a.isOwnedByMe);async function jn(ze=!1){if(!a||!wn)return;const Mn=He(z,a.gridCols),Pt=He(O,a.gridRows),Pn=Sv(f,Mn,Pt);if(Pn&&!ze){U({title:"Gitter kan påvirke layout",message:`Det nuværende layout bruger op til ${Pn.requiredCols} kolonner og ${Pn.requiredRows} rækker. Det nye gitter er ${Mn} × ${Pt}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,confirmLabel:"Gem alligevel",onConfirm:()=>{jn(!0)}});return}q(!0),await R(W,H,H&&ue,H&&Ee,Mn,Pt),ne(Mn),Z(Pt),q(!1)}return u.jsx(Tn,{title:"Enhedsindstillinger",onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(It,{label:"Navn",value:(a==null?void 0:a.deviceName)??"Ukendt"}),u.jsx(It,{label:"Ejer",value:Rv(a)}),wn?u.jsxs(u.Fragment,{children:[u.jsx("button",{className:"device-icon-pick settings-icon-pick",type:"button",onClick:()=>$e(!0),children:u.jsx("img",{src:ca(W),alt:""})}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:H?"":"active",onClick:()=>re(!1),children:"Privat"}),u.jsx("button",{type:"button",className:H?"active":"",onClick:()=>re(!0),children:"Offentlig"})]}),H&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:ue?"":"active",onClick:()=>fe(!1),children:"Nej"}),u.jsx("button",{type:"button",className:ue?"active":"",onClick:()=>fe(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:Ee?"":"active",onClick:()=>k(!1),children:"Nej"}),u.jsx("button",{type:"button",className:Ee?"active":"",onClick:()=>k(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter"}),u.jsxs("div",{className:"row",children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-cols",children:"Kolonner"}),u.jsx("input",{id:"device-cols",type:"number",min:la,max:ia,value:Number.isNaN(z)?"":z,onChange:ze=>ne(parseInt(ze.target.value,10)),onBlur:()=>ne(He(z,(a==null?void 0:a.gridCols)??11))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-rows",children:"Rækker"}),u.jsx("input",{id:"device-rows",type:"number",min:la,max:ia,value:Number.isNaN(O)?"":O,onChange:ze=>Z(parseInt(ze.target.value,10)),onBlur:()=>Z(He(O,(a==null?void 0:a.gridRows)??31))})]})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>jn(),disabled:J,children:J?"Gemmer...":"Gem enhedsindstillinger"})]}):u.jsxs(u.Fragment,{children:[u.jsx(It,{label:"Ikon ID",value:String((a==null?void 0:a.iconID)??0)}),u.jsx(It,{label:"Redigering",value:a!=null&&a.canEdit?"Tilladt":"Ikke tilladt"}),u.jsx(It,{label:"Gitter",value:`${(a==null?void 0:a.gridCols)??0} × ${(a==null?void 0:a.gridRows)??0}`})]}),u.jsx(It,{label:"Kontroller",value:String(f.length)}),xe.length>0&&u.jsxs("div",{className:"settings-section",children:[u.jsx("h4",{children:"Slidere"}),xe.map(ze=>u.jsxs("div",{className:"slider-meta",children:[u.jsx("strong",{children:ze.name}),u.jsxs("span",{children:[ze.sliderMin??0," til ",ze.sliderMax??100]}),u.jsxs("span",{children:["Retur: ",kv(ze.sliderRecenter??"none")]}),u.jsxs("span",{children:["Seneste værdi: ",h[ze.name]??"Ikke brugt"]})]},ze.name))]}),Ae&&u.jsx(g_,{selected:W,onSelect:Fe,onClose:()=>$e(!1)})]})})}return u.jsx(Tn,{title:"Hjælp til enheden",onClose:i,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Knapper sender en kommando med deres navn, når de trykkes."}),u.jsx("p",{children:"Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse."}),u.jsx("p",{children:"Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen."}),(a==null?void 0:a.canEdit)&&u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>D(!0),children:"Rediger layout"})]})})}function Sv(s,i,c){let a=0,f=0;for(const h of s)aa(h)&&(a=Math.max(a,Math.ceil((h.centerX2+h.spanX)/2)+1),f=Math.max(f,Math.ceil((h.centerY2+h.spanY)/2)+1));return i<a||c<f?{requiredCols:a,requiredRows:f}:null}function kv(s){return s==="bottom"?"bund":s==="middle"?"midte":s==="top"?"top":"ingen"}function Nv({code:s}){const i=B.useMemo(()=>hv(s),[s]),c=i.length;return u.jsxs("svg",{className:"owner-code-qr",viewBox:`0 0 ${c+8} ${c+8}`,role:"img","aria-label":"QR-kode til ejerkode",children:[u.jsx("rect",{width:c+8,height:c+8,fill:"white"}),i.map((a,f)=>a.map((h,b)=>h?u.jsx("rect",{x:b+4,y:f+4,width:"1",height:"1",fill:"currentColor"},`${b}-${f}`):null))]})}function Rv(s){var i;return s?s.isOwnedByMe?"Dig":((i=s.ownerName)==null?void 0:i.trim())||"Anden bruger":"Ukendt"}function It({label:s,value:i}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:s}),u.jsx("strong",{children:i})]})}function Tv(){const s=le(a=>a.confirmDialog),i=le(a=>a.closeConfirm);if(!s)return null;function c(){s==null||s.onConfirm(),i()}return u.jsx(Tn,{title:s.title,onClose:i,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:s.message}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:s.cancelLabel??"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:c,children:s.confirmLabel??"Fortsæt"})]})]})})}function jv(){const s=le(a=>a.connectionLost),i=le(a=>a.reconnectLostDevice),c=le(a=>a.dismissConnectionLost);return s?u.jsx(Tn,{title:"Forbindelse afbrudt",onClose:c,children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("p",{className:"confirm-message",children:["Forbindelsen til ",s.deviceName," blev afbrudt. Tjek at Picoen har strøm og er tæt nok på."]}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:c,children:"Luk"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>i(),children:"Genforbind"})]})]})}):null}function Mv(){const s=le(c=>c.toast),i=le(c=>c.dismissToast);return s?u.jsx("div",{className:"toast",role:"alert",onClick:i,children:s.message},s.id):null}function Dv(){const s=le(p=>p.screen),i=le(p=>p.splashTarget),c=le(p=>p.init),a=le(p=>p.sideMenuOpen),f=le(p=>p.debuggerOpen),[h,b]=B.useState(!1);return B.useEffect(()=>{c()},[c]),B.useEffect(()=>{if(a){b(!0);return}const p=setTimeout(()=>b(!1),140);return()=>clearTimeout(p)},[a]),u.jsxs("div",{className:"app",children:[s==="splash"&&i==="intro"&&u.jsx(kh,{}),s==="splash"&&i==="dashboard"&&u.jsx(Nh,{}),s==="splash"&&u.jsx(n0,{}),s==="intro"&&u.jsx(kh,{}),s==="dashboard"&&u.jsx(Nh,{}),s==="connection"&&u.jsx(a0,{}),s==="create"&&u.jsx(s0,{}),s==="control"&&u.jsx(Y0,{}),s==="ide"&&u.jsx(Vy,{}),h&&u.jsx(cv,{open:a}),u.jsx(Ev,{}),u.jsx(jv,{}),u.jsx(Tv,{}),f&&u.jsx(dv,{}),u.jsx(Mv,{})]})}function Av(){if(!("serviceWorker"in navigator))return;window.addEventListener("load",()=>{const i=new URL("sw.js",window.location.href);navigator.serviceWorker.register(i,{scope:"./"}).catch(c=>{console.warn("Service worker registration failed:",c)})});let s=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{s||window.crossOriginIsolated||(s=!0,window.location.reload())})}Av();fb.createRoot(document.getElementById("root")).render(u.jsx(ds.StrictMode,{children:u.jsx(Dv,{})}));
