var qg=Object.defineProperty;var Pg=(o,i,c)=>i in o?qg(o,i,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[i]=c;var ue=(o,i,c)=>Pg(o,typeof i!="symbol"?i+"":i,c);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))a(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function c(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(u){if(u.ep)return;u.ep=!0;const d=c(u);fetch(u.href,d)}})();function Wh(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var rf={exports:{}},qa={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function $g(){if(Qp)return qa;Qp=1;var o=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function c(a,u,d){var h=null;if(d!==void 0&&(h=""+d),u.key!==void 0&&(h=""+u.key),"key"in u){d={};for(var _ in u)_!=="key"&&(d[_]=u[_])}else d=u;return u=d.ref,{$$typeof:o,type:a,key:h,ref:u!==void 0?u:null,props:d}}return qa.Fragment=i,qa.jsx=c,qa.jsxs=c,qa}var Zp;function Xg(){return Zp||(Zp=1,rf.exports=$g()),rf.exports}var f=Xg(),lf={exports:{}},ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function Fg(){if(Wp)return ve;Wp=1;var o=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),R=Symbol.iterator;function $(S){return S===null||typeof S!="object"?null:(S=R&&S[R]||S["@@iterator"],typeof S=="function"?S:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,K={};function G(S,B,W){this.props=S,this.context=B,this.refs=K,this.updater=W||I}G.prototype.isReactComponent={},G.prototype.setState=function(S,B){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,B,"setState")},G.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function H(){}H.prototype=G.prototype;function ie(S,B,W){this.props=S,this.context=B,this.refs=K,this.updater=W||I}var le=ie.prototype=new H;le.constructor=ie,J(le,G.prototype),le.isPureReactComponent=!0;var se=Array.isArray;function he(){}var ne={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function xe(S,B,W){var j=W.ref;return{$$typeof:o,type:S,key:B,ref:j!==void 0?j:null,props:W}}function ge(S,B){return xe(S.type,B,S.props)}function ye(S){return typeof S=="object"&&S!==null&&S.$$typeof===o}function ae(S){var B={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(W){return B[W]})}var Ve=/\/+/g;function Re(S,B){return typeof S=="object"&&S!==null&&S.key!=null?ae(""+S.key):B.toString(36)}function Pe(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(he,he):(S.status="pending",S.then(function(B){S.status==="pending"&&(S.status="fulfilled",S.value=B)},function(B){S.status==="pending"&&(S.status="rejected",S.reason=B)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function z(S,B,W,j,F){var Q=typeof S;(Q==="undefined"||Q==="boolean")&&(S=null);var X=!1;if(S===null)X=!0;else switch(Q){case"bigint":case"string":case"number":X=!0;break;case"object":switch(S.$$typeof){case o:case i:X=!0;break;case x:return X=S._init,z(X(S._payload),B,W,j,F)}}if(X)return F=F(S),X=j===""?"."+Re(S,0):j,se(F)?(W="",X!=null&&(W=X.replace(Ve,"$&/")+"/"),z(F,B,W,"",function(Yn){return Yn})):F!=null&&(ye(F)&&(F=ge(F,W+(F.key==null||S&&S.key===F.key?"":(""+F.key).replace(Ve,"$&/")+"/")+X)),B.push(F)),1;X=0;var Le=j===""?".":j+":";if(se(S))for(var Te=0;Te<S.length;Te++)j=S[Te],Q=Le+Re(j,Te),X+=z(j,B,W,Q,F);else if(Te=$(S),typeof Te=="function")for(S=Te.call(S),Te=0;!(j=S.next()).done;)j=j.value,Q=Le+Re(j,Te++),X+=z(j,B,W,Q,F);else if(Q==="object"){if(typeof S.then=="function")return z(Pe(S),B,W,j,F);throw B=String(S),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return X}function Z(S,B,W){if(S==null)return S;var j=[],F=0;return z(S,j,"","",function(Q){return B.call(W,Q,F++)}),j}function oe(S){if(S._status===-1){var B=S._result;B=B(),B.then(function(W){(S._status===0||S._status===-1)&&(S._status=1,S._result=W)},function(W){(S._status===0||S._status===-1)&&(S._status=2,S._result=W)}),S._status===-1&&(S._status=0,S._result=B)}if(S._status===1)return S._result.default;throw S._result}var we=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},ke={map:Z,forEach:function(S,B,W){Z(S,function(){B.apply(this,arguments)},W)},count:function(S){var B=0;return Z(S,function(){B++}),B},toArray:function(S){return Z(S,function(B){return B})||[]},only:function(S){if(!ye(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return ve.Activity=N,ve.Children=ke,ve.Component=G,ve.Fragment=c,ve.Profiler=u,ve.PureComponent=ie,ve.StrictMode=a,ve.Suspense=v,ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ne,ve.__COMPILER_RUNTIME={__proto__:null,c:function(S){return ne.H.useMemoCache(S)}},ve.cache=function(S){return function(){return S.apply(null,arguments)}},ve.cacheSignal=function(){return null},ve.cloneElement=function(S,B,W){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var j=J({},S.props),F=S.key;if(B!=null)for(Q in B.key!==void 0&&(F=""+B.key),B)!ee.call(B,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&B.ref===void 0||(j[Q]=B[Q]);var Q=arguments.length-2;if(Q===1)j.children=W;else if(1<Q){for(var X=Array(Q),Le=0;Le<Q;Le++)X[Le]=arguments[Le+2];j.children=X}return xe(S.type,F,j)},ve.createContext=function(S){return S={$$typeof:h,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:d,_context:S},S},ve.createElement=function(S,B,W){var j,F={},Q=null;if(B!=null)for(j in B.key!==void 0&&(Q=""+B.key),B)ee.call(B,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(F[j]=B[j]);var X=arguments.length-2;if(X===1)F.children=W;else if(1<X){for(var Le=Array(X),Te=0;Te<X;Te++)Le[Te]=arguments[Te+2];F.children=Le}if(S&&S.defaultProps)for(j in X=S.defaultProps,X)F[j]===void 0&&(F[j]=X[j]);return xe(S,Q,F)},ve.createRef=function(){return{current:null}},ve.forwardRef=function(S){return{$$typeof:_,render:S}},ve.isValidElement=ye,ve.lazy=function(S){return{$$typeof:x,_payload:{_status:-1,_result:S},_init:oe}},ve.memo=function(S,B){return{$$typeof:y,type:S,compare:B===void 0?null:B}},ve.startTransition=function(S){var B=ne.T,W={};ne.T=W;try{var j=S(),F=ne.S;F!==null&&F(W,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(he,we)}catch(Q){we(Q)}finally{B!==null&&W.types!==null&&(B.types=W.types),ne.T=B}},ve.unstable_useCacheRefresh=function(){return ne.H.useCacheRefresh()},ve.use=function(S){return ne.H.use(S)},ve.useActionState=function(S,B,W){return ne.H.useActionState(S,B,W)},ve.useCallback=function(S,B){return ne.H.useCallback(S,B)},ve.useContext=function(S){return ne.H.useContext(S)},ve.useDebugValue=function(){},ve.useDeferredValue=function(S,B){return ne.H.useDeferredValue(S,B)},ve.useEffect=function(S,B){return ne.H.useEffect(S,B)},ve.useEffectEvent=function(S){return ne.H.useEffectEvent(S)},ve.useId=function(){return ne.H.useId()},ve.useImperativeHandle=function(S,B,W){return ne.H.useImperativeHandle(S,B,W)},ve.useInsertionEffect=function(S,B){return ne.H.useInsertionEffect(S,B)},ve.useLayoutEffect=function(S,B){return ne.H.useLayoutEffect(S,B)},ve.useMemo=function(S,B){return ne.H.useMemo(S,B)},ve.useOptimistic=function(S,B){return ne.H.useOptimistic(S,B)},ve.useReducer=function(S,B,W){return ne.H.useReducer(S,B,W)},ve.useRef=function(S){return ne.H.useRef(S)},ve.useState=function(S){return ne.H.useState(S)},ve.useSyncExternalStore=function(S,B,W){return ne.H.useSyncExternalStore(S,B,W)},ve.useTransition=function(){return ne.H.useTransition()},ve.version="19.2.7",ve}var Jp;function Cf(){return Jp||(Jp=1,lf.exports=Fg()),lf.exports}var L=Cf();const Wa=Wh(L);var af={exports:{}},Pa={},sf={exports:{}},of={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eh;function Kg(){return eh||(eh=1,(function(o){function i(z,Z){var oe=z.length;z.push(Z);e:for(;0<oe;){var we=oe-1>>>1,ke=z[we];if(0<u(ke,Z))z[we]=Z,z[oe]=ke,oe=we;else break e}}function c(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var Z=z[0],oe=z.pop();if(oe!==Z){z[0]=oe;e:for(var we=0,ke=z.length,S=ke>>>1;we<S;){var B=2*(we+1)-1,W=z[B],j=B+1,F=z[j];if(0>u(W,oe))j<ke&&0>u(F,W)?(z[we]=F,z[j]=oe,we=j):(z[we]=W,z[B]=oe,we=B);else if(j<ke&&0>u(F,oe))z[we]=F,z[j]=oe,we=j;else break e}}return Z}function u(z,Z){var oe=z.sortIndex-Z.sortIndex;return oe!==0?oe:z.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;o.unstable_now=function(){return d.now()}}else{var h=Date,_=h.now();o.unstable_now=function(){return h.now()-_}}var v=[],y=[],x=1,N=null,R=3,$=!1,I=!1,J=!1,K=!1,G=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;function le(z){for(var Z=c(y);Z!==null;){if(Z.callback===null)a(y);else if(Z.startTime<=z)a(y),Z.sortIndex=Z.expirationTime,i(v,Z);else break;Z=c(y)}}function se(z){if(J=!1,le(z),!I)if(c(v)!==null)I=!0,he||(he=!0,ae());else{var Z=c(y);Z!==null&&Pe(se,Z.startTime-z)}}var he=!1,ne=-1,ee=5,xe=-1;function ge(){return K?!0:!(o.unstable_now()-xe<ee)}function ye(){if(K=!1,he){var z=o.unstable_now();xe=z;var Z=!0;try{e:{I=!1,J&&(J=!1,H(ne),ne=-1),$=!0;var oe=R;try{n:{for(le(z),N=c(v);N!==null&&!(N.expirationTime>z&&ge());){var we=N.callback;if(typeof we=="function"){N.callback=null,R=N.priorityLevel;var ke=we(N.expirationTime<=z);if(z=o.unstable_now(),typeof ke=="function"){N.callback=ke,le(z),Z=!0;break n}N===c(v)&&a(v),le(z)}else a(v);N=c(v)}if(N!==null)Z=!0;else{var S=c(y);S!==null&&Pe(se,S.startTime-z),Z=!1}}break e}finally{N=null,R=oe,$=!1}Z=void 0}}finally{Z?ae():he=!1}}}var ae;if(typeof ie=="function")ae=function(){ie(ye)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,Re=Ve.port2;Ve.port1.onmessage=ye,ae=function(){Re.postMessage(null)}}else ae=function(){G(ye,0)};function Pe(z,Z){ne=G(function(){z(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return R},o.unstable_next=function(z){switch(R){case 1:case 2:case 3:var Z=3;break;default:Z=R}var oe=R;R=Z;try{return z()}finally{R=oe}},o.unstable_requestPaint=function(){K=!0},o.unstable_runWithPriority=function(z,Z){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var oe=R;R=z;try{return Z()}finally{R=oe}},o.unstable_scheduleCallback=function(z,Z,oe){var we=o.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?we+oe:we):oe=we,z){case 1:var ke=-1;break;case 2:ke=250;break;case 5:ke=1073741823;break;case 4:ke=1e4;break;default:ke=5e3}return ke=oe+ke,z={id:x++,callback:Z,priorityLevel:z,startTime:oe,expirationTime:ke,sortIndex:-1},oe>we?(z.sortIndex=oe,i(y,z),c(v)===null&&z===c(y)&&(J?(H(ne),ne=-1):J=!0,Pe(se,oe-we))):(z.sortIndex=ke,i(v,z),I||$||(I=!0,he||(he=!0,ae()))),z},o.unstable_shouldYield=ge,o.unstable_wrapCallback=function(z){var Z=R;return function(){var oe=R;R=Z;try{return z.apply(this,arguments)}finally{R=oe}}}})(of)),of}var nh;function Qg(){return nh||(nh=1,sf.exports=Kg()),sf.exports}var cf={exports:{}},Gn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var th;function Zg(){if(th)return Gn;th=1;var o=Cf();function i(v){var y="https://react.dev/errors/"+v;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)y+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+v+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var a={d:{f:c,r:function(){throw Error(i(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(v,y,x){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:N==null?null:""+N,children:v,containerInfo:y,implementation:x}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(v,y){if(v==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Gn.createPortal=function(v,y){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(i(299));return d(v,y,null,x)},Gn.flushSync=function(v){var y=h.T,x=a.p;try{if(h.T=null,a.p=2,v)return v()}finally{h.T=y,a.p=x,a.d.f()}},Gn.preconnect=function(v,y){typeof v=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(v,y))},Gn.prefetchDNS=function(v){typeof v=="string"&&a.d.D(v)},Gn.preinit=function(v,y){if(typeof v=="string"&&y&&typeof y.as=="string"){var x=y.as,N=_(x,y.crossOrigin),R=typeof y.integrity=="string"?y.integrity:void 0,$=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;x==="style"?a.d.S(v,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:N,integrity:R,fetchPriority:$}):x==="script"&&a.d.X(v,{crossOrigin:N,integrity:R,fetchPriority:$,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Gn.preinitModule=function(v,y){if(typeof v=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var x=_(y.as,y.crossOrigin);a.d.M(v,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(v)},Gn.preload=function(v,y){if(typeof v=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var x=y.as,N=_(x,y.crossOrigin);a.d.L(v,x,{crossOrigin:N,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Gn.preloadModule=function(v,y){if(typeof v=="string")if(y){var x=_(y.as,y.crossOrigin);a.d.m(v,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(v)},Gn.requestFormReset=function(v){a.d.r(v)},Gn.unstable_batchedUpdates=function(v,y){return v(y)},Gn.useFormState=function(v,y,x){return h.H.useFormState(v,y,x)},Gn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Gn.version="19.2.7",Gn}var rh;function Wg(){if(rh)return cf.exports;rh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(i){console.error(i)}}return o(),cf.exports=Zg(),cf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lh;function Jg(){if(lh)return Pa;lh=1;var o=Qg(),i=Cf(),c=Wg();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function _(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function v(e){if(d(e)!==e)throw Error(a(188))}function y(e){var n=e.alternate;if(!n){if(n=d(e),n===null)throw Error(a(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var s=l.alternate;if(s===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===t)return v(l),e;if(s===r)return v(l),n;s=s.sibling}throw Error(a(188))}if(t.return!==r.return)t=l,r=s;else{for(var p=!1,g=l.child;g;){if(g===t){p=!0,t=l,r=s;break}if(g===r){p=!0,r=l,t=s;break}g=g.sibling}if(!p){for(g=s.child;g;){if(g===t){p=!0,t=s,r=l;break}if(g===r){p=!0,r=s,t=l;break}g=g.sibling}if(!p)throw Error(a(189))}}if(t.alternate!==r)throw Error(a(190))}if(t.tag!==3)throw Error(a(188));return t.stateNode.current===t?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var N=Object.assign,R=Symbol.for("react.element"),$=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),ie=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),xe=Symbol.for("react.activity"),ge=Symbol.for("react.memo_cache_sentinel"),ye=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=ye&&e[ye]||e["@@iterator"],typeof e=="function"?e:null)}var Ve=Symbol.for("react.client.reference");function Re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ve?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case J:return"Fragment";case G:return"Profiler";case K:return"StrictMode";case se:return"Suspense";case he:return"SuspenseList";case xe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case I:return"Portal";case ie:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case le:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ne:return n=e.displayName||null,n!==null?n:Re(e.type)||"Memo";case ee:n=e._payload,e=e._init;try{return Re(e(n))}catch{}}return null}var Pe=Array.isArray,z=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},we=[],ke=-1;function S(e){return{current:e}}function B(e){0>ke||(e.current=we[ke],we[ke]=null,ke--)}function W(e,n){ke++,we[ke]=e.current,e.current=n}var j=S(null),F=S(null),Q=S(null),X=S(null);function Le(e,n){switch(W(Q,n),W(F,e),W(j,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?yp(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=yp(n),e=vp(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(j),W(j,e)}function Te(){B(j),B(F),B(Q)}function Yn(e){e.memoizedState!==null&&W(X,e);var n=j.current,t=vp(n,e.type);n!==t&&(W(F,e),W(j,t))}function Pt(e){F.current===e&&(B(j),B(F)),X.current===e&&(B(X),Va._currentValue=oe)}var be,bn;function En(e){if(be===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);be=n&&n[1]||"",bn=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+be+e+bn}var Oe=!1;function kn(e,n){if(!e||Oe)return"";Oe=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var P=function(){throw Error()};if(Object.defineProperty(P.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(P,[])}catch(U){var O=U}Reflect.construct(e,[],P)}else{try{P.call()}catch(U){O=U}e.call(P.prototype)}}else{try{throw Error()}catch(U){O=U}(P=e())&&typeof P.catch=="function"&&P.catch(function(){})}}catch(U){if(U&&O&&typeof U.stack=="string")return[U.stack,O.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=r.DetermineComponentFrameRoot(),p=s[0],g=s[1];if(p&&g){var E=p.split(`
`),A=g.split(`
`);for(l=r=0;r<E.length&&!E[r].includes("DetermineComponentFrameRoot");)r++;for(;l<A.length&&!A[l].includes("DetermineComponentFrameRoot");)l++;if(r===E.length||l===A.length)for(r=E.length-1,l=A.length-1;1<=r&&0<=l&&E[r]!==A[l];)l--;for(;1<=r&&0<=l;r--,l--)if(E[r]!==A[l]){if(r!==1||l!==1)do if(r--,l--,0>l||E[r]!==A[l]){var V=`
`+E[r].replace(" at new "," at ");return e.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",e.displayName)),V}while(1<=r&&0<=l);break}}}finally{Oe=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?En(t):""}function Bt(e,n){switch(e.tag){case 26:case 27:case 5:return En(e.type);case 16:return En("Lazy");case 13:return e.child!==n&&n!==null?En("Suspense Fallback"):En("Suspense");case 19:return En("SuspenseList");case 0:case 15:return kn(e.type,!1);case 11:return kn(e.type.render,!1);case 1:return kn(e.type,!0);case 31:return En("Activity");default:return""}}function Bn(e){try{var n="",t=null;do n+=Bt(e,t),t=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Tr=Object.prototype.hasOwnProperty,Ar=o.unstable_scheduleCallback,vt=o.unstable_cancelCallback,Ql=o.unstable_shouldYield,Dr=o.unstable_requestPaint,yn=o.unstable_now,dl=o.unstable_getCurrentPriorityLevel,ml=o.unstable_ImmediatePriority,Pi=o.unstable_UserBlockingPriority,pl=o.unstable_NormalPriority,Qn=o.unstable_LowPriority,lt=o.unstable_IdlePriority,$t=o.log,Zl=o.unstable_setDisableYieldValue,hl=null,vn=null;function it(e){if(typeof $t=="function"&&Zl(e),vn&&typeof vn.setStrictMode=="function")try{vn.setStrictMode(hl,e)}catch{}}var Rn=Math.clz32?Math.clz32:rr,Or=Math.log,Cr=Math.LN2;function rr(e){return e>>>=0,e===0?32:31-(Or(e)/Cr|0)|0}var Xt=256,In=262144,Ke=4194304;function Mn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mn(e,n,t){var r=e.pendingLanes;if(r===0)return 0;var l=0,s=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var g=r&134217727;return g!==0?(r=g&~s,r!==0?l=Mn(r):(p&=g,p!==0?l=Mn(p):t||(t=g&~e,t!==0&&(l=Mn(t))))):(g=r&~s,g!==0?l=Mn(g):p!==0?l=Mn(p):t||(t=r&~e,t!==0&&(l=Mn(t)))),l===0?0:n!==0&&n!==l&&(n&s)===0&&(s=l&-l,t=n&-n,s>=t||s===32&&(t&4194048)!==0)?n:l}function zn(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Io(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $i(){var e=Ke;return Ke<<=1,(Ke&62914560)===0&&(Ke=4194304),e}function Ft(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function _l(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function lr(e,n,t,r,l,s){var p=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var g=e.entanglements,E=e.expirationTimes,A=e.hiddenUpdates;for(t=p&~t;0<t;){var V=31-Rn(t),P=1<<V;g[V]=0,E[V]=-1;var O=A[V];if(O!==null)for(A[V]=null,V=0;V<O.length;V++){var U=O[V];U!==null&&(U.lane&=-536870913)}t&=~P}r!==0&&ls(e,r,0),s!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=s&~(p&~n))}function ls(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Rn(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|t&261930}function Wl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Rn(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}function is(e,n){var t=n&-n;return t=(t&42)!==0?1:Lr(t),(t&(e.suspendedLanes|n))!==0?0:t}function Lr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function on(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:Ip(e.type))}function Xi(e,n){var t=Z.p;try{return Z.p=e,n()}finally{Z.p=t}}var at=Math.random().toString(36).slice(2),cn="__reactFiber$"+at,un="__reactProps$"+at,jn="__reactContainer$"+at,zt="__reactEvents$"+at,gl="__reactListeners$"+at,Ut="__reactHandles$"+at,ir="__reactResources$"+at,Ht="__reactMarker$"+at;function Vt(e){delete e[cn],delete e[un],delete e[zt],delete e[gl],delete e[Ut]}function Kt(e){var n=e[cn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[jn]||t[cn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Rp(e);e!==null;){if(t=e[cn])return t;e=Rp(e)}return n}e=t,t=e.parentNode}return null}function qn(e){if(e=e[cn]||e[jn]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Gt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function Zn(e){var n=e[ir];return n||(n=e[ir]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ze(e){e[Ht]=!0}var ar=new Set,Fi={};function st(e,n){ot(e,n),ot(e+"Capture",n)}function ot(e,n){for(Fi[e]=n,e=0;e<n.length;e++)ar.add(n[e])}var pe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jl={},as={};function qo(e){return Tr.call(as,e)?!0:Tr.call(Jl,e)?!1:pe.test(e)?as[e]=!0:(Jl[e]=!0,!1)}function ei(e,n,t){if(qo(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function ni(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function Pn(e,n,t,r){if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+r)}}function xn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ct(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ki(e,n,t){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,s=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(p){t=""+p,s.call(this,p)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return t},setValue:function(p){t=""+p},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Un(e){if(!e._valueTracker){var n=ct(e)?"checked":"value";e._valueTracker=Ki(e,n,""+e[n])}}function ss(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ct(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ti(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var os=/[\n"\\]/g;function Hn(e){return e.replace(os,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function q(e,n,t,r,l,s,p,g){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),n!=null?p==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+xn(n)):e.value!==""+xn(n)&&(e.value=""+xn(n)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),n!=null?Qi(e,p,xn(n)):t!=null?Qi(e,p,xn(t)):r!=null&&e.removeAttribute("value"),l==null&&s!=null&&(e.defaultChecked=!!s),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+xn(g):e.removeAttribute("name")}function cs(e,n,t,r,l,s,p,g){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),n!=null||t!=null){if(!(s!=="submit"&&s!=="reset"||n!=null)){Un(e);return}t=t!=null?""+xn(t):"",n=n!=null?""+xn(n):t,g||n===e.value||(e.value=n),e.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=g?e.checked:!!r,e.defaultChecked=!!r,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),Un(e)}function Qi(e,n,t){n==="number"&&ti(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function wt(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+xn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Zi(e,n,t){if(n!=null&&(n=""+xn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+xn(t):""}function bl(e,n,t,r){if(n==null){if(r!=null){if(t!=null)throw Error(a(92));if(Pe(r)){if(1<r.length)throw Error(a(93));r=r[0]}t=r}t==null&&(t=""),n=t}t=xn(n),e.defaultValue=t,r=e.textContent,r===t&&r!==""&&r!==null&&(e.value=r),Un(e)}function nn(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var us=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Br(e,n,t){var r=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,t):typeof t!="number"||t===0||us.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function yl(e,n,t){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,t!=null){for(var r in t)!t.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var l in n)r=n[l],n.hasOwnProperty(l)&&t[l]!==r&&Br(e,l,r)}else for(var s in n)n.hasOwnProperty(s)&&Br(e,s,n[s])}function Wi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wn=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fs=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zr(e){return fs.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function tn(){}var sr=null;function Ji(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ur=null,St=null;function ds(e){var n=qn(e);if(n&&(e=n.stateNode)){var t=e[un]||null;e:switch(e=n.stateNode,n.type){case"input":if(q(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Hn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=r[un]||null;if(!l)throw Error(a(90));q(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<t.length;n++)r=t[n],r.form===e.form&&ss(r)}break e;case"textarea":Zi(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&wt(e,!!t.multiple,n,!1)}}}var ri=!1;function vl(e,n,t){if(ri)return e(n,t);ri=!0;try{var r=e(n);return r}finally{if(ri=!1,(Ur!==null||St!==null)&&(io(),Ur&&(n=Ur,e=St,St=Ur=null,ds(n),e)))for(n=0;n<e.length;n++)ds(e[n])}}function Qt(e,n){var t=e.stateNode;if(t===null)return null;var r=t[un]||null;if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(a(231,n,typeof t));return t}var Et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ea=!1;if(Et)try{var xl={};Object.defineProperty(xl,"passive",{get:function(){ea=!0}}),window.addEventListener("test",xl,xl),window.removeEventListener("test",xl,xl)}catch{ea=!1}var Zt=null,ut=null,rn=null;function na(){if(rn)return rn;var e,n=ut,t=n.length,r,l="value"in Zt?Zt.value:Zt.textContent,s=l.length;for(e=0;e<t&&n[e]===l[e];e++);var p=t-e;for(r=1;r<=p&&n[t-r]===l[s-r];r++);return rn=l.slice(e,1<r?1-r:void 0)}function Wt(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function wl(){return!0}function ta(){return!1}function Tn(e){function n(t,r,l,s,p){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=s,this.target=p,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(t=e[g],this[g]=t?t(s):s[g]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wl:ta,this.isPropagationStopped=ta,this}return N(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),n}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},li=Tn(or),Sl=N({},or,{view:0,detail:0}),ms=Tn(Sl),ii,El,kl,Nl=N({},Sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ia,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kl&&(kl&&e.type==="mousemove"?(ii=e.screenX-kl.screenX,El=e.screenY-kl.screenY):El=ii=0,kl=e),ii)},movementY:function(e){return"movementY"in e?e.movementY:El}}),ra=Tn(Nl),ps=N({},Nl,{dataTransfer:0}),Po=Tn(ps),$o=N({},Sl,{relatedTarget:0}),la=Tn($o),Xo=N({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),Fo=Tn(Xo),Ko=N({},or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qo=Tn(Ko),Zo=N({},or,{data:0}),hs=Tn(Zo),Wo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jo={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ec={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rl(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ec[e])?!!n[e]:!1}function ia(){return Rl}var nc=N({},Sl,{key:function(e){if(e.key){var n=Wo[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Wt(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jo[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ia,charCode:function(e){return e.type==="keypress"?Wt(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wt(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_s=Tn(nc),tc=N({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),aa=Tn(tc),rc=N({},Sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ia}),lc=Tn(rc),gs=N({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),ic=Tn(gs),ac=N({},Nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sc=Tn(ac),oc=N({},or,{newState:0,oldState:0}),cc=Tn(oc),uc=[9,13,27,32],Ml=Et&&"CompositionEvent"in window,Vn=null;Et&&"documentMode"in document&&(Vn=document.documentMode);var bs=Et&&"TextEvent"in window&&!Vn,ys=Et&&(!Ml||Vn&&8<Vn&&11>=Vn),vs=" ",xs=!1;function Hr(e,n){switch(e){case"keyup":return uc.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cr=!1;function sa(e,n){switch(e){case"compositionend":return jl(n);case"keypress":return n.which!==32?null:(xs=!0,vs);case"textInput":return e=n.data,e===vs&&xs?null:e;default:return null}}function ws(e,n){if(cr)return e==="compositionend"||!Ml&&Hr(e,n)?(e=na(),rn=ut=Zt=null,cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ys&&n.locale!=="ko"?null:n.data;default:return null}}var fc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ss(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!fc[e.type]:n==="textarea"}function m(e,n,t,r){Ur?St?St.push(r):St=[r]:Ur=r,n=mo(n,"onChange"),0<n.length&&(t=new li("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var b=null,w=null;function C(e){mp(e,0)}function D(e){var n=Gt(e);if(ss(n))return e}function fe(e,n){if(e==="change")return n}var Se=!1;if(Et){var We;if(Et){var Ge="oninput"in document;if(!Ge){var $n=document.createElement("div");$n.setAttribute("oninput","return;"),Ge=typeof $n.oninput=="function"}We=Ge}else We=!1;Se=We&&(!document.documentMode||9<document.documentMode)}function ur(){b&&(b.detachEvent("onpropertychange",Ye),w=b=null)}function Ye(e){if(e.propertyName==="value"&&D(w)){var n=[];m(n,w,e,Ji(e)),vl(C,n)}}function fr(e,n,t){e==="focusin"?(ur(),b=n,w=t,b.attachEvent("onpropertychange",Ye)):e==="focusout"&&ur()}function oa(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return D(w)}function Tl(e,n){if(e==="click")return D(n)}function Vr(e,n){if(e==="input"||e==="change")return D(n)}function ca(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var An=typeof Object.is=="function"?Object.is:ca;function dr(e,n){if(An(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Tr.call(n,l)||!An(e[l],n[l]))return!1}return!0}function ai(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gr(e,n){var t=ai(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ai(t)}}function Es(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Es(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ua(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ti(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ti(e.document)}return n}function dc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var S_=Et&&"documentMode"in document&&11>=document.documentMode,si=null,mc=null,fa=null,pc=!1;function Gf(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;pc||si==null||si!==ti(r)||(r=si,"selectionStart"in r&&dc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fa&&dr(fa,r)||(fa=r,r=mo(mc,"onSelect"),0<r.length&&(n=new li("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=si)))}function Al(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var oi={animationend:Al("Animation","AnimationEnd"),animationiteration:Al("Animation","AnimationIteration"),animationstart:Al("Animation","AnimationStart"),transitionrun:Al("Transition","TransitionRun"),transitionstart:Al("Transition","TransitionStart"),transitioncancel:Al("Transition","TransitionCancel"),transitionend:Al("Transition","TransitionEnd")},hc={},Yf={};Et&&(Yf=document.createElement("div").style,"AnimationEvent"in window||(delete oi.animationend.animation,delete oi.animationiteration.animation,delete oi.animationstart.animation),"TransitionEvent"in window||delete oi.transitionend.transition);function Dl(e){if(hc[e])return hc[e];if(!oi[e])return e;var n=oi[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Yf)return hc[e]=n[t];return e}var If=Dl("animationend"),qf=Dl("animationiteration"),Pf=Dl("animationstart"),E_=Dl("transitionrun"),k_=Dl("transitionstart"),N_=Dl("transitioncancel"),$f=Dl("transitionend"),Xf=new Map,_c="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_c.push("scrollEnd");function Yt(e,n){Xf.set(e,n),st(n,[e])}var ks=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},kt=[],ci=0,gc=0;function Ns(){for(var e=ci,n=gc=ci=0;n<e;){var t=kt[n];kt[n++]=null;var r=kt[n];kt[n++]=null;var l=kt[n];kt[n++]=null;var s=kt[n];if(kt[n++]=null,r!==null&&l!==null){var p=r.pending;p===null?l.next=l:(l.next=p.next,p.next=l),r.pending=l}s!==0&&Ff(t,l,s)}}function Rs(e,n,t,r){kt[ci++]=e,kt[ci++]=n,kt[ci++]=t,kt[ci++]=r,gc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function bc(e,n,t,r){return Rs(e,n,t,r),Ms(e)}function Ol(e,n){return Rs(e,null,null,n),Ms(e)}function Ff(e,n,t){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t);for(var l=!1,s=e.return;s!==null;)s.childLanes|=t,r=s.alternate,r!==null&&(r.childLanes|=t),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(l=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,l&&n!==null&&(l=31-Rn(t),e=s.hiddenUpdates,r=e[l],r===null?e[l]=[n]:r.push(n),n.lane=t|536870912),s):null}function Ms(e){if(50<Oa)throw Oa=0,Ru=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ui={};function R_(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,n,t,r){return new R_(e,n,t,r)}function yc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mr(e,n){var t=e.alternate;return t===null?(t=ft(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Kf(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function js(e,n,t,r,l,s){var p=0;if(r=e,typeof e=="function")yc(e)&&(p=1);else if(typeof e=="string")p=Dg(e,t,j.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case xe:return e=ft(31,t,n,l),e.elementType=xe,e.lanes=s,e;case J:return Cl(t.children,l,s,n);case K:p=8,l|=24;break;case G:return e=ft(12,t,n,l|2),e.elementType=G,e.lanes=s,e;case se:return e=ft(13,t,n,l),e.elementType=se,e.lanes=s,e;case he:return e=ft(19,t,n,l),e.elementType=he,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ie:p=10;break e;case H:p=9;break e;case le:p=11;break e;case ne:p=14;break e;case ee:p=16,r=null;break e}p=29,t=Error(a(130,e===null?"null":typeof e,"")),r=null}return n=ft(p,t,n,l),n.elementType=e,n.type=r,n.lanes=s,n}function Cl(e,n,t,r){return e=ft(7,e,r,n),e.lanes=t,e}function vc(e,n,t){return e=ft(6,e,null,n),e.lanes=t,e}function Qf(e){var n=ft(18,null,null,0);return n.stateNode=e,n}function xc(e,n,t){return n=ft(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Zf=new WeakMap;function Nt(e,n){if(typeof e=="object"&&e!==null){var t=Zf.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Bn(n)},Zf.set(e,n),n)}return{value:e,source:n,stack:Bn(n)}}var fi=[],di=0,Ts=null,da=0,Rt=[],Mt=0,Yr=null,Jt=1,er="";function pr(e,n){fi[di++]=da,fi[di++]=Ts,Ts=e,da=n}function Wf(e,n,t){Rt[Mt++]=Jt,Rt[Mt++]=er,Rt[Mt++]=Yr,Yr=e;var r=Jt;e=er;var l=32-Rn(r)-1;r&=~(1<<l),t+=1;var s=32-Rn(n)+l;if(30<s){var p=l-l%5;s=(r&(1<<p)-1).toString(32),r>>=p,l-=p,Jt=1<<32-Rn(n)+l|t<<l|r,er=s+e}else Jt=1<<s|t<<l|r,er=e}function wc(e){e.return!==null&&(pr(e,1),Wf(e,1,0))}function Sc(e){for(;e===Ts;)Ts=fi[--di],fi[di]=null,da=fi[--di],fi[di]=null;for(;e===Yr;)Yr=Rt[--Mt],Rt[Mt]=null,er=Rt[--Mt],Rt[Mt]=null,Jt=Rt[--Mt],Rt[Mt]=null}function Jf(e,n){Rt[Mt++]=Jt,Rt[Mt++]=er,Rt[Mt++]=Yr,Jt=n.id,er=n.overflow,Yr=e}var Dn=null,Je=null,Ce=!1,Ir=null,jt=!1,Ec=Error(a(519));function qr(e){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ma(Nt(n,e)),Ec}function ed(e){var n=e.stateNode,t=e.type,r=e.memoizedProps;switch(n[cn]=e,n[un]=r,t){case"dialog":je("cancel",n),je("close",n);break;case"iframe":case"object":case"embed":je("load",n);break;case"video":case"audio":for(t=0;t<La.length;t++)je(La[t],n);break;case"source":je("error",n);break;case"img":case"image":case"link":je("error",n),je("load",n);break;case"details":je("toggle",n);break;case"input":je("invalid",n),cs(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":je("invalid",n);break;case"textarea":je("invalid",n),bl(n,r.value,r.defaultValue,r.children)}t=r.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||r.suppressHydrationWarning===!0||gp(n.textContent,t)?(r.popover!=null&&(je("beforetoggle",n),je("toggle",n)),r.onScroll!=null&&je("scroll",n),r.onScrollEnd!=null&&je("scrollend",n),r.onClick!=null&&(n.onclick=tn),n=!0):n=!1,n||qr(e,!0)}function nd(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:jt=!1;return;case 27:case 3:jt=!0;return;default:Dn=Dn.return}}function mi(e){if(e!==Dn)return!1;if(!Ce)return nd(e),Ce=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Yu(e.type,e.memoizedProps)),t=!t),t&&Je&&qr(e),nd(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Je=Np(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Je=Np(e)}else n===27?(n=Je,ll(e.type)?(e=Xu,Xu=null,Je=e):Je=n):Je=Dn?At(e.stateNode.nextSibling):null;return!0}function Ll(){Je=Dn=null,Ce=!1}function kc(){var e=Ir;return e!==null&&(tt===null?tt=e:tt.push.apply(tt,e),Ir=null),e}function ma(e){Ir===null?Ir=[e]:Ir.push(e)}var Nc=S(null),Bl=null,hr=null;function Pr(e,n,t){W(Nc,n._currentValue),n._currentValue=t}function _r(e){e._currentValue=Nc.current,B(Nc)}function Rc(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Mc(e,n,t,r){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var s=l.dependencies;if(s!==null){var p=l.child;s=s.firstContext;e:for(;s!==null;){var g=s;s=l;for(var E=0;E<n.length;E++)if(g.context===n[E]){s.lanes|=t,g=s.alternate,g!==null&&(g.lanes|=t),Rc(s.return,t,e),r||(p=null);break e}s=g.next}}else if(l.tag===18){if(p=l.return,p===null)throw Error(a(341));p.lanes|=t,s=p.alternate,s!==null&&(s.lanes|=t),Rc(p,t,e),p=null}else p=l.child;if(p!==null)p.return=l;else for(p=l;p!==null;){if(p===e){p=null;break}if(l=p.sibling,l!==null){l.return=p.return,p=l;break}p=p.return}l=p}}function pi(e,n,t,r){e=null;for(var l=n,s=!1;l!==null;){if(!s){if((l.flags&524288)!==0)s=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var p=l.alternate;if(p===null)throw Error(a(387));if(p=p.memoizedProps,p!==null){var g=l.type;An(l.pendingProps.value,p.value)||(e!==null?e.push(g):e=[g])}}else if(l===X.current){if(p=l.alternate,p===null)throw Error(a(387));p.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Va):e=[Va])}l=l.return}e!==null&&Mc(n,e,t,r),n.flags|=262144}function As(e){for(e=e.firstContext;e!==null;){if(!An(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function zl(e){Bl=e,hr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function On(e){return td(Bl,e)}function Ds(e,n){return Bl===null&&zl(e),td(e,n)}function td(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},hr===null){if(e===null)throw Error(a(308));hr=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else hr=hr.next=n;return t}var M_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},j_=o.unstable_scheduleCallback,T_=o.unstable_NormalPriority,pn={$$typeof:ie,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jc(){return{controller:new M_,data:new Map,refCount:0}}function pa(e){e.refCount--,e.refCount===0&&j_(T_,function(){e.controller.abort()})}var ha=null,Tc=0,hi=0,_i=null;function A_(e,n){if(ha===null){var t=ha=[];Tc=0,hi=Ou(),_i={status:"pending",value:void 0,then:function(r){t.push(r)}}}return Tc++,n.then(rd,rd),n}function rd(){if(--Tc===0&&ha!==null){_i!==null&&(_i.status="fulfilled");var e=ha;ha=null,hi=0,_i=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function D_(e,n){var t=[],r={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<t.length;l++)(0,t[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),r}var ld=z.S;z.S=function(e,n){Gm=yn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&A_(e,n),ld!==null&&ld(e,n)};var Ul=S(null);function Ac(){var e=Ul.current;return e!==null?e:Qe.pooledCache}function Os(e,n){n===null?W(Ul,Ul.current):W(Ul,n.pool)}function id(){var e=Ac();return e===null?null:{parent:pn._currentValue,pool:e}}var gi=Error(a(460)),Dc=Error(a(474)),Cs=Error(a(542)),Ls={then:function(){}};function ad(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sd(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(tn,tn),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,cd(e),e;default:if(typeof n.status=="string")n.then(tn,tn);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,cd(e),e}throw Vl=n,gi}}function Hl(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Vl=t,gi):t}}var Vl=null;function od(){if(Vl===null)throw Error(a(459));var e=Vl;return Vl=null,e}function cd(e){if(e===gi||e===Cs)throw Error(a(483))}var bi=null,_a=0;function Bs(e){var n=_a;return _a+=1,bi===null&&(bi=[]),sd(bi,e,n)}function ga(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function zs(e,n){throw n.$$typeof===R?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function ud(e){function n(M,k){if(e){var T=M.deletions;T===null?(M.deletions=[k],M.flags|=16):T.push(k)}}function t(M,k){if(!e)return null;for(;k!==null;)n(M,k),k=k.sibling;return null}function r(M){for(var k=new Map;M!==null;)M.key!==null?k.set(M.key,M):k.set(M.index,M),M=M.sibling;return k}function l(M,k){return M=mr(M,k),M.index=0,M.sibling=null,M}function s(M,k,T){return M.index=T,e?(T=M.alternate,T!==null?(T=T.index,T<k?(M.flags|=67108866,k):T):(M.flags|=67108866,k)):(M.flags|=1048576,k)}function p(M){return e&&M.alternate===null&&(M.flags|=67108866),M}function g(M,k,T,Y){return k===null||k.tag!==6?(k=vc(T,M.mode,Y),k.return=M,k):(k=l(k,T),k.return=M,k)}function E(M,k,T,Y){var me=T.type;return me===J?V(M,k,T.props.children,Y,T.key):k!==null&&(k.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===ee&&Hl(me)===k.type)?(k=l(k,T.props),ga(k,T),k.return=M,k):(k=js(T.type,T.key,T.props,null,M.mode,Y),ga(k,T),k.return=M,k)}function A(M,k,T,Y){return k===null||k.tag!==4||k.stateNode.containerInfo!==T.containerInfo||k.stateNode.implementation!==T.implementation?(k=xc(T,M.mode,Y),k.return=M,k):(k=l(k,T.children||[]),k.return=M,k)}function V(M,k,T,Y,me){return k===null||k.tag!==7?(k=Cl(T,M.mode,Y,me),k.return=M,k):(k=l(k,T),k.return=M,k)}function P(M,k,T){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=vc(""+k,M.mode,T),k.return=M,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case $:return T=js(k.type,k.key,k.props,null,M.mode,T),ga(T,k),T.return=M,T;case I:return k=xc(k,M.mode,T),k.return=M,k;case ee:return k=Hl(k),P(M,k,T)}if(Pe(k)||ae(k))return k=Cl(k,M.mode,T,null),k.return=M,k;if(typeof k.then=="function")return P(M,Bs(k),T);if(k.$$typeof===ie)return P(M,Ds(M,k),T);zs(M,k)}return null}function O(M,k,T,Y){var me=k!==null?k.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return me!==null?null:g(M,k,""+T,Y);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case $:return T.key===me?E(M,k,T,Y):null;case I:return T.key===me?A(M,k,T,Y):null;case ee:return T=Hl(T),O(M,k,T,Y)}if(Pe(T)||ae(T))return me!==null?null:V(M,k,T,Y,null);if(typeof T.then=="function")return O(M,k,Bs(T),Y);if(T.$$typeof===ie)return O(M,k,Ds(M,T),Y);zs(M,T)}return null}function U(M,k,T,Y,me){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return M=M.get(T)||null,g(k,M,""+Y,me);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case $:return M=M.get(Y.key===null?T:Y.key)||null,E(k,M,Y,me);case I:return M=M.get(Y.key===null?T:Y.key)||null,A(k,M,Y,me);case ee:return Y=Hl(Y),U(M,k,T,Y,me)}if(Pe(Y)||ae(Y))return M=M.get(T)||null,V(k,M,Y,me,null);if(typeof Y.then=="function")return U(M,k,T,Bs(Y),me);if(Y.$$typeof===ie)return U(M,k,T,Ds(k,Y),me);zs(k,Y)}return null}function ce(M,k,T,Y){for(var me=null,ze=null,de=k,Ne=k=0,De=null;de!==null&&Ne<T.length;Ne++){de.index>Ne?(De=de,de=null):De=de.sibling;var Ue=O(M,de,T[Ne],Y);if(Ue===null){de===null&&(de=De);break}e&&de&&Ue.alternate===null&&n(M,de),k=s(Ue,k,Ne),ze===null?me=Ue:ze.sibling=Ue,ze=Ue,de=De}if(Ne===T.length)return t(M,de),Ce&&pr(M,Ne),me;if(de===null){for(;Ne<T.length;Ne++)de=P(M,T[Ne],Y),de!==null&&(k=s(de,k,Ne),ze===null?me=de:ze.sibling=de,ze=de);return Ce&&pr(M,Ne),me}for(de=r(de);Ne<T.length;Ne++)De=U(de,M,Ne,T[Ne],Y),De!==null&&(e&&De.alternate!==null&&de.delete(De.key===null?Ne:De.key),k=s(De,k,Ne),ze===null?me=De:ze.sibling=De,ze=De);return e&&de.forEach(function(cl){return n(M,cl)}),Ce&&pr(M,Ne),me}function _e(M,k,T,Y){if(T==null)throw Error(a(151));for(var me=null,ze=null,de=k,Ne=k=0,De=null,Ue=T.next();de!==null&&!Ue.done;Ne++,Ue=T.next()){de.index>Ne?(De=de,de=null):De=de.sibling;var cl=O(M,de,Ue.value,Y);if(cl===null){de===null&&(de=De);break}e&&de&&cl.alternate===null&&n(M,de),k=s(cl,k,Ne),ze===null?me=cl:ze.sibling=cl,ze=cl,de=De}if(Ue.done)return t(M,de),Ce&&pr(M,Ne),me;if(de===null){for(;!Ue.done;Ne++,Ue=T.next())Ue=P(M,Ue.value,Y),Ue!==null&&(k=s(Ue,k,Ne),ze===null?me=Ue:ze.sibling=Ue,ze=Ue);return Ce&&pr(M,Ne),me}for(de=r(de);!Ue.done;Ne++,Ue=T.next())Ue=U(de,M,Ne,Ue.value,Y),Ue!==null&&(e&&Ue.alternate!==null&&de.delete(Ue.key===null?Ne:Ue.key),k=s(Ue,k,Ne),ze===null?me=Ue:ze.sibling=Ue,ze=Ue);return e&&de.forEach(function(Ig){return n(M,Ig)}),Ce&&pr(M,Ne),me}function Fe(M,k,T,Y){if(typeof T=="object"&&T!==null&&T.type===J&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case $:e:{for(var me=T.key;k!==null;){if(k.key===me){if(me=T.type,me===J){if(k.tag===7){t(M,k.sibling),Y=l(k,T.props.children),Y.return=M,M=Y;break e}}else if(k.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===ee&&Hl(me)===k.type){t(M,k.sibling),Y=l(k,T.props),ga(Y,T),Y.return=M,M=Y;break e}t(M,k);break}else n(M,k);k=k.sibling}T.type===J?(Y=Cl(T.props.children,M.mode,Y,T.key),Y.return=M,M=Y):(Y=js(T.type,T.key,T.props,null,M.mode,Y),ga(Y,T),Y.return=M,M=Y)}return p(M);case I:e:{for(me=T.key;k!==null;){if(k.key===me)if(k.tag===4&&k.stateNode.containerInfo===T.containerInfo&&k.stateNode.implementation===T.implementation){t(M,k.sibling),Y=l(k,T.children||[]),Y.return=M,M=Y;break e}else{t(M,k);break}else n(M,k);k=k.sibling}Y=xc(T,M.mode,Y),Y.return=M,M=Y}return p(M);case ee:return T=Hl(T),Fe(M,k,T,Y)}if(Pe(T))return ce(M,k,T,Y);if(ae(T)){if(me=ae(T),typeof me!="function")throw Error(a(150));return T=me.call(T),_e(M,k,T,Y)}if(typeof T.then=="function")return Fe(M,k,Bs(T),Y);if(T.$$typeof===ie)return Fe(M,k,Ds(M,T),Y);zs(M,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,k!==null&&k.tag===6?(t(M,k.sibling),Y=l(k,T),Y.return=M,M=Y):(t(M,k),Y=vc(T,M.mode,Y),Y.return=M,M=Y),p(M)):t(M,k)}return function(M,k,T,Y){try{_a=0;var me=Fe(M,k,T,Y);return bi=null,me}catch(de){if(de===gi||de===Cs)throw de;var ze=ft(29,de,null,M.mode);return ze.lanes=Y,ze.return=M,ze}finally{}}}var Gl=ud(!0),fd=ud(!1),$r=!1;function Oc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fr(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(He&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Ms(e),Ff(e,null,t),n}return Rs(e,r,n,t),Ms(e)}function ba(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Wl(e,t)}}function Lc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var p={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};s===null?l=s=p:s=s.next=p,t=t.next}while(t!==null);s===null?l=s=n:s=s.next=n}else l=s=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:r.shared,callbacks:r.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var Bc=!1;function ya(){if(Bc){var e=_i;if(e!==null)throw e}}function va(e,n,t,r){Bc=!1;var l=e.updateQueue;$r=!1;var s=l.firstBaseUpdate,p=l.lastBaseUpdate,g=l.shared.pending;if(g!==null){l.shared.pending=null;var E=g,A=E.next;E.next=null,p===null?s=A:p.next=A,p=E;var V=e.alternate;V!==null&&(V=V.updateQueue,g=V.lastBaseUpdate,g!==p&&(g===null?V.firstBaseUpdate=A:g.next=A,V.lastBaseUpdate=E))}if(s!==null){var P=l.baseState;p=0,V=A=E=null,g=s;do{var O=g.lane&-536870913,U=O!==g.lane;if(U?(Ae&O)===O:(r&O)===O){O!==0&&O===hi&&(Bc=!0),V!==null&&(V=V.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var ce=e,_e=g;O=n;var Fe=t;switch(_e.tag){case 1:if(ce=_e.payload,typeof ce=="function"){P=ce.call(Fe,P,O);break e}P=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=_e.payload,O=typeof ce=="function"?ce.call(Fe,P,O):ce,O==null)break e;P=N({},P,O);break e;case 2:$r=!0}}O=g.callback,O!==null&&(e.flags|=64,U&&(e.flags|=8192),U=l.callbacks,U===null?l.callbacks=[O]:U.push(O))}else U={lane:O,tag:g.tag,payload:g.payload,callback:g.callback,next:null},V===null?(A=V=U,E=P):V=V.next=U,p|=O;if(g=g.next,g===null){if(g=l.shared.pending,g===null)break;U=g,g=U.next,U.next=null,l.lastBaseUpdate=U,l.shared.pending=null}}while(!0);V===null&&(E=P),l.baseState=E,l.firstBaseUpdate=A,l.lastBaseUpdate=V,s===null&&(l.shared.lanes=0),Jr|=p,e.lanes=p,e.memoizedState=P}}function dd(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function md(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)dd(t[e],n)}var yi=S(null),Us=S(0);function pd(e,n){e=kr,W(Us,e),W(yi,n),kr=e|n.baseLanes}function zc(){W(Us,kr),W(yi,yi.current)}function Uc(){kr=Us.current,B(yi),B(Us)}var dt=S(null),Tt=null;function Kr(e){var n=e.alternate;W(fn,fn.current&1),W(dt,e),Tt===null&&(n===null||yi.current!==null||n.memoizedState!==null)&&(Tt=e)}function Hc(e){W(fn,fn.current),W(dt,e),Tt===null&&(Tt=e)}function hd(e){e.tag===22?(W(fn,fn.current),W(dt,e),Tt===null&&(Tt=e)):Qr()}function Qr(){W(fn,fn.current),W(dt,dt.current)}function mt(e){B(dt),Tt===e&&(Tt=null),B(fn)}var fn=S(0);function Hs(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Pu(t)||$u(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var gr=0,Ee=null,$e=null,hn=null,Vs=!1,vi=!1,Yl=!1,Gs=0,xa=0,xi=null,O_=0;function an(){throw Error(a(321))}function Vc(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!An(e[t],n[t]))return!1;return!0}function Gc(e,n,t,r,l,s){return gr=s,Ee=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?Wd:tu,Yl=!1,s=t(r,l),Yl=!1,vi&&(s=gd(n,t,r,l)),_d(e),s}function _d(e){z.H=Ea;var n=$e!==null&&$e.next!==null;if(gr=0,hn=$e=Ee=null,Vs=!1,xa=0,xi=null,n)throw Error(a(300));e===null||_n||(e=e.dependencies,e!==null&&As(e)&&(_n=!0))}function gd(e,n,t,r){Ee=e;var l=0;do{if(vi&&(xi=null),xa=0,vi=!1,25<=l)throw Error(a(301));if(l+=1,hn=$e=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}z.H=Jd,s=n(t,r)}while(vi);return s}function C_(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?wa(n):n,e=e.useState()[0],($e!==null?$e.memoizedState:null)!==e&&(Ee.flags|=1024),n}function Yc(){var e=Gs!==0;return Gs=0,e}function Ic(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function qc(e){if(Vs){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Vs=!1}gr=0,hn=$e=Ee=null,vi=!1,xa=Gs=0,xi=null}function Xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?Ee.memoizedState=hn=e:hn=hn.next=e,hn}function dn(){if($e===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var n=hn===null?Ee.memoizedState:hn.next;if(n!==null)hn=n,$e=e;else{if(e===null)throw Ee.alternate===null?Error(a(467)):Error(a(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},hn===null?Ee.memoizedState=hn=e:hn=hn.next=e}return hn}function Ys(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wa(e){var n=xa;return xa+=1,xi===null&&(xi=[]),e=sd(xi,e,n),n=Ee,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Wd:tu),e}function Is(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return wa(e);if(e.$$typeof===ie)return On(e)}throw Error(a(438,String(e)))}function Pc(e){var n=null,t=Ee.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var r=Ee.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=Ys(),Ee.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),r=0;r<e;r++)t[r]=ge;return n.index++,t}function br(e,n){return typeof n=="function"?n(e):n}function qs(e){var n=dn();return $c(n,$e,e)}function $c(e,n,t){var r=e.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var l=e.baseQueue,s=r.pending;if(s!==null){if(l!==null){var p=l.next;l.next=s.next,s.next=p}n.baseQueue=l=s,r.pending=null}if(s=e.baseState,l===null)e.memoizedState=s;else{n=l.next;var g=p=null,E=null,A=n,V=!1;do{var P=A.lane&-536870913;if(P!==A.lane?(Ae&P)===P:(gr&P)===P){var O=A.revertLane;if(O===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),P===hi&&(V=!0);else if((gr&O)===O){A=A.next,O===hi&&(V=!0);continue}else P={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},E===null?(g=E=P,p=s):E=E.next=P,Ee.lanes|=O,Jr|=O;P=A.action,Yl&&t(s,P),s=A.hasEagerState?A.eagerState:t(s,P)}else O={lane:P,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},E===null?(g=E=O,p=s):E=E.next=O,Ee.lanes|=P,Jr|=P;A=A.next}while(A!==null&&A!==n);if(E===null?p=s:E.next=g,!An(s,e.memoizedState)&&(_n=!0,V&&(t=_i,t!==null)))throw t;e.memoizedState=s,e.baseState=p,e.baseQueue=E,r.lastRenderedState=s}return l===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Xc(e){var n=dn(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,s=n.memoizedState;if(l!==null){t.pending=null;var p=l=l.next;do s=e(s,p.action),p=p.next;while(p!==l);An(s,n.memoizedState)||(_n=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,r]}function bd(e,n,t){var r=Ee,l=dn(),s=Ce;if(s){if(t===void 0)throw Error(a(407));t=t()}else t=n();var p=!An(($e||l).memoizedState,t);if(p&&(l.memoizedState=t,_n=!0),l=l.queue,Qc(xd.bind(null,r,l,e),[e]),l.getSnapshot!==n||p||hn!==null&&hn.memoizedState.tag&1){if(r.flags|=2048,wi(9,{destroy:void 0},vd.bind(null,r,l,t,n),null),Qe===null)throw Error(a(349));s||(gr&127)!==0||yd(r,n,t)}return t}function yd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Ee.updateQueue,n===null?(n=Ys(),Ee.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function vd(e,n,t,r){n.value=t,n.getSnapshot=r,wd(n)&&Sd(e)}function xd(e,n,t){return t(function(){wd(n)&&Sd(e)})}function wd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!An(e,t)}catch{return!0}}function Sd(e){var n=Ol(e,2);n!==null&&rt(n,e,2)}function Fc(e){var n=Xn();if(typeof e=="function"){var t=e;if(e=t(),Yl){it(!0);try{t()}finally{it(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:e},n}function Ed(e,n,t,r){return e.baseState=t,$c(e,$e,typeof r=="function"?r:br)}function L_(e,n,t,r,l){if(Xs(e))throw Error(a(485));if(e=n.action,e!==null){var s={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){s.listeners.push(p)}};z.T!==null?t(!0):s.isTransition=!1,r(s),t=n.pending,t===null?(s.next=n.pending=s,kd(n,s)):(s.next=t.next,n.pending=t.next=s)}}function kd(e,n){var t=n.action,r=n.payload,l=e.state;if(n.isTransition){var s=z.T,p={};z.T=p;try{var g=t(l,r),E=z.S;E!==null&&E(p,g),Nd(e,n,g)}catch(A){Kc(e,n,A)}finally{s!==null&&p.types!==null&&(s.types=p.types),z.T=s}}else try{s=t(l,r),Nd(e,n,s)}catch(A){Kc(e,n,A)}}function Nd(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(r){Rd(e,n,r)},function(r){return Kc(e,n,r)}):Rd(e,n,t)}function Rd(e,n,t){n.status="fulfilled",n.value=t,Md(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,kd(e,t)))}function Kc(e,n,t){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=t,Md(n),n=n.next;while(n!==r)}e.action=null}function Md(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function jd(e,n){return n}function Td(e,n){if(Ce){var t=Qe.formState;if(t!==null){e:{var r=Ee;if(Ce){if(Je){n:{for(var l=Je,s=jt;l.nodeType!==8;){if(!s){l=null;break n}if(l=At(l.nextSibling),l===null){l=null;break n}}s=l.data,l=s==="F!"||s==="F"?l:null}if(l){Je=At(l.nextSibling),r=l.data==="F!";break e}}qr(r)}r=!1}r&&(n=t[0])}}return t=Xn(),t.memoizedState=t.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jd,lastRenderedState:n},t.queue=r,t=Kd.bind(null,Ee,r),r.dispatch=t,r=Fc(!1),s=nu.bind(null,Ee,!1,r.queue),r=Xn(),l={state:n,dispatch:null,action:e,pending:null},r.queue=l,t=L_.bind(null,Ee,l,s,t),l.dispatch=t,r.memoizedState=e,[n,t,!1]}function Ad(e){var n=dn();return Dd(n,$e,e)}function Dd(e,n,t){if(n=$c(e,n,jd)[0],e=qs(br)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=wa(n)}catch(p){throw p===gi?Cs:p}else r=n;n=dn();var l=n.queue,s=l.dispatch;return t!==n.memoizedState&&(Ee.flags|=2048,wi(9,{destroy:void 0},B_.bind(null,l,t),null)),[r,s,e]}function B_(e,n){e.action=n}function Od(e){var n=dn(),t=$e;if(t!==null)return Dd(n,t,e);dn(),n=n.memoizedState,t=dn();var r=t.queue.dispatch;return t.memoizedState=e,[n,r,!1]}function wi(e,n,t,r){return e={tag:e,create:t,deps:r,inst:n,next:null},n=Ee.updateQueue,n===null&&(n=Ys(),Ee.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e),e}function Cd(){return dn().memoizedState}function Ps(e,n,t,r){var l=Xn();Ee.flags|=e,l.memoizedState=wi(1|n,{destroy:void 0},t,r===void 0?null:r)}function $s(e,n,t,r){var l=dn();r=r===void 0?null:r;var s=l.memoizedState.inst;$e!==null&&r!==null&&Vc(r,$e.memoizedState.deps)?l.memoizedState=wi(n,s,t,r):(Ee.flags|=e,l.memoizedState=wi(1|n,s,t,r))}function Ld(e,n){Ps(8390656,8,e,n)}function Qc(e,n){$s(2048,8,e,n)}function z_(e){Ee.flags|=4;var n=Ee.updateQueue;if(n===null)n=Ys(),Ee.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function Bd(e){var n=dn().memoizedState;return z_({ref:n,nextImpl:e}),function(){if((He&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function zd(e,n){return $s(4,2,e,n)}function Ud(e,n){return $s(4,4,e,n)}function Hd(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Vd(e,n,t){t=t!=null?t.concat([e]):null,$s(4,4,Hd.bind(null,n,e),t)}function Zc(){}function Gd(e,n){var t=dn();n=n===void 0?null:n;var r=t.memoizedState;return n!==null&&Vc(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Yd(e,n){var t=dn();n=n===void 0?null:n;var r=t.memoizedState;if(n!==null&&Vc(n,r[1]))return r[0];if(r=e(),Yl){it(!0);try{e()}finally{it(!1)}}return t.memoizedState=[r,n],r}function Wc(e,n,t){return t===void 0||(gr&1073741824)!==0&&(Ae&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=Im(),Ee.lanes|=e,Jr|=e,t)}function Id(e,n,t,r){return An(t,n)?t:yi.current!==null?(e=Wc(e,t,r),An(e,n)||(_n=!0),e):(gr&42)===0||(gr&1073741824)!==0&&(Ae&261930)===0?(_n=!0,e.memoizedState=t):(e=Im(),Ee.lanes|=e,Jr|=e,n)}function qd(e,n,t,r,l){var s=Z.p;Z.p=s!==0&&8>s?s:8;var p=z.T,g={};z.T=g,nu(e,!1,n,t);try{var E=l(),A=z.S;if(A!==null&&A(g,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var V=D_(E,r);Sa(e,n,V,_t(e))}else Sa(e,n,r,_t(e))}catch(P){Sa(e,n,{then:function(){},status:"rejected",reason:P},_t())}finally{Z.p=s,p!==null&&g.types!==null&&(p.types=g.types),z.T=p}}function U_(){}function Jc(e,n,t,r){if(e.tag!==5)throw Error(a(476));var l=Pd(e).queue;qd(e,l,n,oe,t===null?U_:function(){return $d(e),t(r)})}function Pd(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:oe},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function $d(e){var n=Pd(e);n.next===null&&(n=e.alternate.memoizedState),Sa(e,n.next.queue,{},_t())}function eu(){return On(Va)}function Xd(){return dn().memoizedState}function Fd(){return dn().memoizedState}function H_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=_t();e=Xr(t);var r=Fr(n,e,t);r!==null&&(rt(r,n,t),ba(r,n,t)),n={cache:jc()},e.payload=n;return}n=n.return}}function V_(e,n,t){var r=_t();t={lane:r,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Xs(e)?Qd(n,t):(t=bc(e,n,t,r),t!==null&&(rt(t,e,r),Zd(t,n,r)))}function Kd(e,n,t){var r=_t();Sa(e,n,t,r)}function Sa(e,n,t,r){var l={lane:r,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Xs(e))Qd(n,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var p=n.lastRenderedState,g=s(p,t);if(l.hasEagerState=!0,l.eagerState=g,An(g,p))return Rs(e,n,l,0),Qe===null&&Ns(),!1}catch{}finally{}if(t=bc(e,n,l,r),t!==null)return rt(t,e,r),Zd(t,n,r),!0}return!1}function nu(e,n,t,r){if(r={lane:2,revertLane:Ou(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Xs(e)){if(n)throw Error(a(479))}else n=bc(e,t,r,2),n!==null&&rt(n,e,2)}function Xs(e){var n=e.alternate;return e===Ee||n!==null&&n===Ee}function Qd(e,n){vi=Vs=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Zd(e,n,t){if((t&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Wl(e,t)}}var Ea={readContext:On,use:Is,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};Ea.useEffectEvent=an;var Wd={readContext:On,use:Is,useCallback:function(e,n){return Xn().memoizedState=[e,n===void 0?null:n],e},useContext:On,useEffect:Ld,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Ps(4194308,4,Hd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ps(4194308,4,e,n)},useInsertionEffect:function(e,n){Ps(4,2,e,n)},useMemo:function(e,n){var t=Xn();n=n===void 0?null:n;var r=e();if(Yl){it(!0);try{e()}finally{it(!1)}}return t.memoizedState=[r,n],r},useReducer:function(e,n,t){var r=Xn();if(t!==void 0){var l=t(n);if(Yl){it(!0);try{t(n)}finally{it(!1)}}}else l=n;return r.memoizedState=r.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},r.queue=e,e=e.dispatch=V_.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var n=Xn();return e={current:e},n.memoizedState=e},useState:function(e){e=Fc(e);var n=e.queue,t=Kd.bind(null,Ee,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Zc,useDeferredValue:function(e,n){var t=Xn();return Wc(t,e,n)},useTransition:function(){var e=Fc(!1);return e=qd.bind(null,Ee,e.queue,!0,!1),Xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var r=Ee,l=Xn();if(Ce){if(t===void 0)throw Error(a(407));t=t()}else{if(t=n(),Qe===null)throw Error(a(349));(Ae&127)!==0||yd(r,n,t)}l.memoizedState=t;var s={value:t,getSnapshot:n};return l.queue=s,Ld(xd.bind(null,r,s,e),[e]),r.flags|=2048,wi(9,{destroy:void 0},vd.bind(null,r,s,t,n),null),t},useId:function(){var e=Xn(),n=Qe.identifierPrefix;if(Ce){var t=er,r=Jt;t=(r&~(1<<32-Rn(r)-1)).toString(32)+t,n="_"+n+"R_"+t,t=Gs++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=O_++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:eu,useFormState:Td,useActionState:Td,useOptimistic:function(e){var n=Xn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=nu.bind(null,Ee,!0,t),t.dispatch=n,[e,n]},useMemoCache:Pc,useCacheRefresh:function(){return Xn().memoizedState=H_.bind(null,Ee)},useEffectEvent:function(e){var n=Xn(),t={impl:e};return n.memoizedState=t,function(){if((He&2)!==0)throw Error(a(440));return t.impl.apply(void 0,arguments)}}},tu={readContext:On,use:Is,useCallback:Gd,useContext:On,useEffect:Qc,useImperativeHandle:Vd,useInsertionEffect:zd,useLayoutEffect:Ud,useMemo:Yd,useReducer:qs,useRef:Cd,useState:function(){return qs(br)},useDebugValue:Zc,useDeferredValue:function(e,n){var t=dn();return Id(t,$e.memoizedState,e,n)},useTransition:function(){var e=qs(br)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:wa(e),n]},useSyncExternalStore:bd,useId:Xd,useHostTransitionStatus:eu,useFormState:Ad,useActionState:Ad,useOptimistic:function(e,n){var t=dn();return Ed(t,$e,e,n)},useMemoCache:Pc,useCacheRefresh:Fd};tu.useEffectEvent=Bd;var Jd={readContext:On,use:Is,useCallback:Gd,useContext:On,useEffect:Qc,useImperativeHandle:Vd,useInsertionEffect:zd,useLayoutEffect:Ud,useMemo:Yd,useReducer:Xc,useRef:Cd,useState:function(){return Xc(br)},useDebugValue:Zc,useDeferredValue:function(e,n){var t=dn();return $e===null?Wc(t,e,n):Id(t,$e.memoizedState,e,n)},useTransition:function(){var e=Xc(br)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:wa(e),n]},useSyncExternalStore:bd,useId:Xd,useHostTransitionStatus:eu,useFormState:Od,useActionState:Od,useOptimistic:function(e,n){var t=dn();return $e!==null?Ed(t,$e,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Pc,useCacheRefresh:Fd};Jd.useEffectEvent=Bd;function ru(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:N({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var lu={enqueueSetState:function(e,n,t){e=e._reactInternals;var r=_t(),l=Xr(r);l.payload=n,t!=null&&(l.callback=t),n=Fr(e,l,r),n!==null&&(rt(n,e,r),ba(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=_t(),l=Xr(r);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Fr(e,l,r),n!==null&&(rt(n,e,r),ba(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=_t(),r=Xr(t);r.tag=2,n!=null&&(r.callback=n),n=Fr(e,r,t),n!==null&&(rt(n,e,t),ba(n,e,t))}};function em(e,n,t,r,l,s,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,p):n.prototype&&n.prototype.isPureReactComponent?!dr(t,r)||!dr(l,s):!0}function nm(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&lu.enqueueReplaceState(n,n.state,null)}function Il(e,n){var t=n;if("ref"in n){t={};for(var r in n)r!=="ref"&&(t[r]=n[r])}if(e=e.defaultProps){t===n&&(t=N({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}function tm(e){ks(e)}function rm(e){console.error(e)}function lm(e){ks(e)}function Fs(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function im(e,n,t){try{var r=e.onCaughtError;r(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function iu(e,n,t){return t=Xr(t),t.tag=3,t.payload={element:null},t.callback=function(){Fs(e,n)},t}function am(e){return e=Xr(e),e.tag=3,e}function sm(e,n,t,r){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var s=r.value;e.payload=function(){return l(s)},e.callback=function(){im(n,t,r)}}var p=t.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){im(n,t,r),typeof l!="function"&&(el===null?el=new Set([this]):el.add(this));var g=r.stack;this.componentDidCatch(r.value,{componentStack:g!==null?g:""})})}function G_(e,n,t,r,l){if(t.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=t.alternate,n!==null&&pi(n,t,l,!0),t=dt.current,t!==null){switch(t.tag){case 31:case 13:return Tt===null?ao():t.alternate===null&&sn===0&&(sn=3),t.flags&=-257,t.flags|=65536,t.lanes=l,r===Ls?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([r]):n.add(r),Tu(e,r,l)),!1;case 22:return t.flags|=65536,r===Ls?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([r]):t.add(r)),Tu(e,r,l)),!1}throw Error(a(435,t.tag))}return Tu(e,r,l),ao(),!1}if(Ce)return n=dt.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==Ec&&(e=Error(a(422),{cause:r}),ma(Nt(e,t)))):(r!==Ec&&(n=Error(a(423),{cause:r}),ma(Nt(n,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,r=Nt(r,t),l=iu(e.stateNode,r,l),Lc(e,l),sn!==4&&(sn=2)),!1;var s=Error(a(520),{cause:r});if(s=Nt(s,t),Da===null?Da=[s]:Da.push(s),sn!==4&&(sn=2),n===null)return!0;r=Nt(r,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=iu(t.stateNode,r,e),Lc(t,e),!1;case 1:if(n=t.type,s=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(el===null||!el.has(s))))return t.flags|=65536,l&=-l,t.lanes|=l,l=am(l),sm(l,e,t,r),Lc(t,l),!1}t=t.return}while(t!==null);return!1}var au=Error(a(461)),_n=!1;function Cn(e,n,t,r){n.child=e===null?fd(n,null,t,r):Gl(n,e.child,t,r)}function om(e,n,t,r,l){t=t.render;var s=n.ref;if("ref"in r){var p={};for(var g in r)g!=="ref"&&(p[g]=r[g])}else p=r;return zl(n),r=Gc(e,n,t,p,s,l),g=Yc(),e!==null&&!_n?(Ic(e,n,l),yr(e,n,l)):(Ce&&g&&wc(n),n.flags|=1,Cn(e,n,r,l),n.child)}function cm(e,n,t,r,l){if(e===null){var s=t.type;return typeof s=="function"&&!yc(s)&&s.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=s,um(e,n,s,r,l)):(e=js(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,!pu(e,l)){var p=s.memoizedProps;if(t=t.compare,t=t!==null?t:dr,t(p,r)&&e.ref===n.ref)return yr(e,n,l)}return n.flags|=1,e=mr(s,r),e.ref=n.ref,e.return=n,n.child=e}function um(e,n,t,r,l){if(e!==null){var s=e.memoizedProps;if(dr(s,r)&&e.ref===n.ref)if(_n=!1,n.pendingProps=r=s,pu(e,l))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,yr(e,n,l)}return su(e,n,t,r,l)}function fm(e,n,t,r){var l=r.children,s=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(s=s!==null?s.baseLanes|t:t,e!==null){for(r=n.child=e.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~s}else r=0,n.child=null;return dm(e,n,s,t,r)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Os(n,s!==null?s.cachePool:null),s!==null?pd(n,s):zc(),hd(n);else return r=n.lanes=536870912,dm(e,n,s!==null?s.baseLanes|t:t,t,r)}else s!==null?(Os(n,s.cachePool),pd(n,s),Qr(),n.memoizedState=null):(e!==null&&Os(n,null),zc(),Qr());return Cn(e,n,l,t),n.child}function ka(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function dm(e,n,t,r,l){var s=Ac();return s=s===null?null:{parent:pn._currentValue,pool:s},n.memoizedState={baseLanes:t,cachePool:s},e!==null&&Os(n,null),zc(),hd(n),e!==null&&pi(e,n,r,!0),n.childLanes=l,null}function Ks(e,n){return n=Zs({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function mm(e,n,t){return Gl(n,e.child,null,t),e=Ks(n,n.pendingProps),e.flags|=2,mt(n),n.memoizedState=null,e}function Y_(e,n,t){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ce){if(r.mode==="hidden")return e=Ks(n,r),n.lanes=536870912,ka(null,e);if(Hc(n),(e=Je)?(e=kp(e,jt),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Yr!==null?{id:Jt,overflow:er}:null,retryLane:536870912,hydrationErrors:null},t=Qf(e),t.return=n,n.child=t,Dn=n,Je=null)):e=null,e===null)throw qr(n);return n.lanes=536870912,null}return Ks(n,r)}var s=e.memoizedState;if(s!==null){var p=s.dehydrated;if(Hc(n),l)if(n.flags&256)n.flags&=-257,n=mm(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(a(558));else if(_n||pi(e,n,t,!1),l=(t&e.childLanes)!==0,_n||l){if(r=Qe,r!==null&&(p=is(r,t),p!==0&&p!==s.retryLane))throw s.retryLane=p,Ol(e,p),rt(r,e,p),au;ao(),n=mm(e,n,t)}else e=s.treeContext,Je=At(p.nextSibling),Dn=n,Ce=!0,Ir=null,jt=!1,e!==null&&Jf(n,e),n=Ks(n,r),n.flags|=4096;return n}return e=mr(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Qs(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(a(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function su(e,n,t,r,l){return zl(n),t=Gc(e,n,t,r,void 0,l),r=Yc(),e!==null&&!_n?(Ic(e,n,l),yr(e,n,l)):(Ce&&r&&wc(n),n.flags|=1,Cn(e,n,t,l),n.child)}function pm(e,n,t,r,l,s){return zl(n),n.updateQueue=null,t=gd(n,r,t,l),_d(e),r=Yc(),e!==null&&!_n?(Ic(e,n,s),yr(e,n,s)):(Ce&&r&&wc(n),n.flags|=1,Cn(e,n,t,s),n.child)}function hm(e,n,t,r,l){if(zl(n),n.stateNode===null){var s=ui,p=t.contextType;typeof p=="object"&&p!==null&&(s=On(p)),s=new t(r,s),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=lu,n.stateNode=s,s._reactInternals=n,s=n.stateNode,s.props=r,s.state=n.memoizedState,s.refs={},Oc(n),p=t.contextType,s.context=typeof p=="object"&&p!==null?On(p):ui,s.state=n.memoizedState,p=t.getDerivedStateFromProps,typeof p=="function"&&(ru(n,t,p,r),s.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(p=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),p!==s.state&&lu.enqueueReplaceState(s,s.state,null),va(n,r,s,l),ya(),s.state=n.memoizedState),typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){s=n.stateNode;var g=n.memoizedProps,E=Il(t,g);s.props=E;var A=s.context,V=t.contextType;p=ui,typeof V=="object"&&V!==null&&(p=On(V));var P=t.getDerivedStateFromProps;V=typeof P=="function"||typeof s.getSnapshotBeforeUpdate=="function",g=n.pendingProps!==g,V||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(g||A!==p)&&nm(n,s,r,p),$r=!1;var O=n.memoizedState;s.state=O,va(n,r,s,l),ya(),A=n.memoizedState,g||O!==A||$r?(typeof P=="function"&&(ru(n,t,P,r),A=n.memoizedState),(E=$r||em(n,t,E,r,O,A,p))?(V||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=A),s.props=r,s.state=A,s.context=p,r=E):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{s=n.stateNode,Cc(e,n),p=n.memoizedProps,V=Il(t,p),s.props=V,P=n.pendingProps,O=s.context,A=t.contextType,E=ui,typeof A=="object"&&A!==null&&(E=On(A)),g=t.getDerivedStateFromProps,(A=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(p!==P||O!==E)&&nm(n,s,r,E),$r=!1,O=n.memoizedState,s.state=O,va(n,r,s,l),ya();var U=n.memoizedState;p!==P||O!==U||$r||e!==null&&e.dependencies!==null&&As(e.dependencies)?(typeof g=="function"&&(ru(n,t,g,r),U=n.memoizedState),(V=$r||em(n,t,V,r,O,U,E)||e!==null&&e.dependencies!==null&&As(e.dependencies))?(A||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,U,E),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,U,E)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||p===e.memoizedProps&&O===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&O===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=U),s.props=r,s.state=U,s.context=E,r=V):(typeof s.componentDidUpdate!="function"||p===e.memoizedProps&&O===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&O===e.memoizedState||(n.flags|=1024),r=!1)}return s=r,Qs(e,n),r=(n.flags&128)!==0,s||r?(s=n.stateNode,t=r&&typeof t.getDerivedStateFromError!="function"?null:s.render(),n.flags|=1,e!==null&&r?(n.child=Gl(n,e.child,null,l),n.child=Gl(n,null,t,l)):Cn(e,n,t,l),n.memoizedState=s.state,e=n.child):e=yr(e,n,l),e}function _m(e,n,t,r){return Ll(),n.flags|=256,Cn(e,n,t,r),n.child}var ou={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cu(e){return{baseLanes:e,cachePool:id()}}function uu(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=ht),e}function gm(e,n,t){var r=n.pendingProps,l=!1,s=(n.flags&128)!==0,p;if((p=s)||(p=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),p&&(l=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ce){if(l?Kr(n):Qr(),(e=Je)?(e=kp(e,jt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Yr!==null?{id:Jt,overflow:er}:null,retryLane:536870912,hydrationErrors:null},t=Qf(e),t.return=n,n.child=t,Dn=n,Je=null)):e=null,e===null)throw qr(n);return $u(e)?n.lanes=32:n.lanes=536870912,null}var g=r.children;return r=r.fallback,l?(Qr(),l=n.mode,g=Zs({mode:"hidden",children:g},l),r=Cl(r,l,t,null),g.return=n,r.return=n,g.sibling=r,n.child=g,r=n.child,r.memoizedState=cu(t),r.childLanes=uu(e,p,t),n.memoizedState=ou,ka(null,r)):(Kr(n),fu(n,g))}var E=e.memoizedState;if(E!==null&&(g=E.dehydrated,g!==null)){if(s)n.flags&256?(Kr(n),n.flags&=-257,n=du(e,n,t)):n.memoizedState!==null?(Qr(),n.child=e.child,n.flags|=128,n=null):(Qr(),g=r.fallback,l=n.mode,r=Zs({mode:"visible",children:r.children},l),g=Cl(g,l,t,null),g.flags|=2,r.return=n,g.return=n,r.sibling=g,n.child=r,Gl(n,e.child,null,t),r=n.child,r.memoizedState=cu(t),r.childLanes=uu(e,p,t),n.memoizedState=ou,n=ka(null,r));else if(Kr(n),$u(g)){if(p=g.nextSibling&&g.nextSibling.dataset,p)var A=p.dgst;p=A,r=Error(a(419)),r.stack="",r.digest=p,ma({value:r,source:null,stack:null}),n=du(e,n,t)}else if(_n||pi(e,n,t,!1),p=(t&e.childLanes)!==0,_n||p){if(p=Qe,p!==null&&(r=is(p,t),r!==0&&r!==E.retryLane))throw E.retryLane=r,Ol(e,r),rt(p,e,r),au;Pu(g)||ao(),n=du(e,n,t)}else Pu(g)?(n.flags|=192,n.child=e.child,n=null):(e=E.treeContext,Je=At(g.nextSibling),Dn=n,Ce=!0,Ir=null,jt=!1,e!==null&&Jf(n,e),n=fu(n,r.children),n.flags|=4096);return n}return l?(Qr(),g=r.fallback,l=n.mode,E=e.child,A=E.sibling,r=mr(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&65011712,A!==null?g=mr(A,g):(g=Cl(g,l,t,null),g.flags|=2),g.return=n,r.return=n,r.sibling=g,n.child=r,ka(null,r),r=n.child,g=e.child.memoizedState,g===null?g=cu(t):(l=g.cachePool,l!==null?(E=pn._currentValue,l=l.parent!==E?{parent:E,pool:E}:l):l=id(),g={baseLanes:g.baseLanes|t,cachePool:l}),r.memoizedState=g,r.childLanes=uu(e,p,t),n.memoizedState=ou,ka(e.child,r)):(Kr(n),t=e.child,e=t.sibling,t=mr(t,{mode:"visible",children:r.children}),t.return=n,t.sibling=null,e!==null&&(p=n.deletions,p===null?(n.deletions=[e],n.flags|=16):p.push(e)),n.child=t,n.memoizedState=null,t)}function fu(e,n){return n=Zs({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Zs(e,n){return e=ft(22,e,null,n),e.lanes=0,e}function du(e,n,t){return Gl(n,e.child,null,t),e=fu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function bm(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Rc(e.return,n,t)}function mu(e,n,t,r,l,s){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l,treeForkCount:s}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=r,p.tail=t,p.tailMode=l,p.treeForkCount=s)}function ym(e,n,t){var r=n.pendingProps,l=r.revealOrder,s=r.tail;r=r.children;var p=fn.current,g=(p&2)!==0;if(g?(p=p&1|2,n.flags|=128):p&=1,W(fn,p),Cn(e,n,r,t),r=Ce?da:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bm(e,t,n);else if(e.tag===19)bm(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Hs(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),mu(n,!1,l,t,s,r);break;case"backwards":case"unstable_legacy-backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Hs(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}mu(n,!0,t,null,s,r);break;case"together":mu(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function yr(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Jr|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(pi(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,t=mr(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=mr(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function pu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&As(e)))}function I_(e,n,t){switch(n.tag){case 3:Le(n,n.stateNode.containerInfo),Pr(n,pn,e.memoizedState.cache),Ll();break;case 27:case 5:Yn(n);break;case 4:Le(n,n.stateNode.containerInfo);break;case 10:Pr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Hc(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Kr(n),n.flags|=128,null):(t&n.child.childLanes)!==0?gm(e,n,t):(Kr(n),e=yr(e,n,t),e!==null?e.sibling:null);Kr(n);break;case 19:var l=(e.flags&128)!==0;if(r=(t&n.childLanes)!==0,r||(pi(e,n,t,!1),r=(t&n.childLanes)!==0),l){if(r)return ym(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),W(fn,fn.current),r)break;return null;case 22:return n.lanes=0,fm(e,n,t,n.pendingProps);case 24:Pr(n,pn,e.memoizedState.cache)}return yr(e,n,t)}function vm(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!pu(e,t)&&(n.flags&128)===0)return _n=!1,I_(e,n,t);_n=(e.flags&131072)!==0}else _n=!1,Ce&&(n.flags&1048576)!==0&&Wf(n,da,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=Hl(n.elementType),n.type=e,typeof e=="function")yc(e)?(r=Il(e,r),n.tag=1,n=hm(null,n,e,r,t)):(n.tag=0,n=su(null,n,e,r,t));else{if(e!=null){var l=e.$$typeof;if(l===le){n.tag=11,n=om(null,n,e,r,t);break e}else if(l===ne){n.tag=14,n=cm(null,n,e,r,t);break e}}throw n=Re(e)||e,Error(a(306,n,""))}}return n;case 0:return su(e,n,n.type,n.pendingProps,t);case 1:return r=n.type,l=Il(r,n.pendingProps),hm(e,n,r,l,t);case 3:e:{if(Le(n,n.stateNode.containerInfo),e===null)throw Error(a(387));r=n.pendingProps;var s=n.memoizedState;l=s.element,Cc(e,n),va(n,r,null,t);var p=n.memoizedState;if(r=p.cache,Pr(n,pn,r),r!==s.cache&&Mc(n,[pn],t,!0),ya(),r=p.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){n=_m(e,n,r,t);break e}else if(r!==l){l=Nt(Error(a(424)),n),ma(l),n=_m(e,n,r,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=At(e.firstChild),Dn=n,Ce=!0,Ir=null,jt=!0,t=fd(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Ll(),r===l){n=yr(e,n,t);break e}Cn(e,n,r,t)}n=n.child}return n;case 26:return Qs(e,n),e===null?(t=Ap(n.type,null,n.pendingProps,null))?n.memoizedState=t:Ce||(t=n.type,e=n.pendingProps,r=po(Q.current).createElement(t),r[cn]=n,r[un]=e,Ln(r,t,e),Ze(r),n.stateNode=r):n.memoizedState=Ap(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Yn(n),e===null&&Ce&&(r=n.stateNode=Mp(n.type,n.pendingProps,Q.current),Dn=n,jt=!0,l=Je,ll(n.type)?(Xu=l,Je=At(r.firstChild)):Je=l),Cn(e,n,n.pendingProps.children,t),Qs(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ce&&((l=r=Je)&&(r=yg(r,n.type,n.pendingProps,jt),r!==null?(n.stateNode=r,Dn=n,Je=At(r.firstChild),jt=!1,l=!0):l=!1),l||qr(n)),Yn(n),l=n.type,s=n.pendingProps,p=e!==null?e.memoizedProps:null,r=s.children,Yu(l,s)?r=null:p!==null&&Yu(l,p)&&(n.flags|=32),n.memoizedState!==null&&(l=Gc(e,n,C_,null,null,t),Va._currentValue=l),Qs(e,n),Cn(e,n,r,t),n.child;case 6:return e===null&&Ce&&((e=t=Je)&&(t=vg(t,n.pendingProps,jt),t!==null?(n.stateNode=t,Dn=n,Je=null,e=!0):e=!1),e||qr(n)),null;case 13:return gm(e,n,t);case 4:return Le(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Gl(n,null,r,t):Cn(e,n,r,t),n.child;case 11:return om(e,n,n.type,n.pendingProps,t);case 7:return Cn(e,n,n.pendingProps,t),n.child;case 8:return Cn(e,n,n.pendingProps.children,t),n.child;case 12:return Cn(e,n,n.pendingProps.children,t),n.child;case 10:return r=n.pendingProps,Pr(n,n.type,r.value),Cn(e,n,r.children,t),n.child;case 9:return l=n.type._context,r=n.pendingProps.children,zl(n),l=On(l),r=r(l),n.flags|=1,Cn(e,n,r,t),n.child;case 14:return cm(e,n,n.type,n.pendingProps,t);case 15:return um(e,n,n.type,n.pendingProps,t);case 19:return ym(e,n,t);case 31:return Y_(e,n,t);case 22:return fm(e,n,t,n.pendingProps);case 24:return zl(n),r=On(pn),e===null?(l=Ac(),l===null&&(l=Qe,s=jc(),l.pooledCache=s,s.refCount++,s!==null&&(l.pooledCacheLanes|=t),l=s),n.memoizedState={parent:r,cache:l},Oc(n),Pr(n,pn,l)):((e.lanes&t)!==0&&(Cc(e,n),va(n,null,null,t),ya()),l=e.memoizedState,s=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Pr(n,pn,r)):(r=s.cache,Pr(n,pn,r),r!==l.cache&&Mc(n,[pn],t,!0))),Cn(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function vr(e){e.flags|=4}function hu(e,n,t,r,l){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Xm())e.flags|=8192;else throw Vl=Ls,Dc}else e.flags&=-16777217}function xm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Bp(n))if(Xm())e.flags|=8192;else throw Vl=Ls,Dc}function Ws(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?$i():536870912,e.lanes|=n,Ni|=n)}function Na(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function en(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&65011712,r|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function q_(e,n,t){var r=n.pendingProps;switch(Sc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return t=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),_r(pn),Te(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(mi(n)?vr(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,kc())),en(n),null;case 26:var l=n.type,s=n.memoizedState;return e===null?(vr(n),s!==null?(en(n),xm(n,s)):(en(n),hu(n,l,null,r,t))):s?s!==e.memoizedState?(vr(n),en(n),xm(n,s)):(en(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&vr(n),en(n),hu(n,l,e,r,t)),null;case 27:if(Pt(n),t=Q.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&vr(n);else{if(!r){if(n.stateNode===null)throw Error(a(166));return en(n),null}e=j.current,mi(n)?ed(n):(e=Mp(l,r,t),n.stateNode=e,vr(n))}return en(n),null;case 5:if(Pt(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&vr(n);else{if(!r){if(n.stateNode===null)throw Error(a(166));return en(n),null}if(s=j.current,mi(n))ed(n);else{var p=po(Q.current);switch(s){case 1:s=p.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:s=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":s=p.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":s=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":s=p.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof r.is=="string"?p.createElement("select",{is:r.is}):p.createElement("select"),r.multiple?s.multiple=!0:r.size&&(s.size=r.size);break;default:s=typeof r.is=="string"?p.createElement(l,{is:r.is}):p.createElement(l)}}s[cn]=n,s[un]=r;e:for(p=n.child;p!==null;){if(p.tag===5||p.tag===6)s.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break e;for(;p.sibling===null;){if(p.return===null||p.return===n)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}n.stateNode=s;e:switch(Ln(s,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&vr(n)}}return en(n),hu(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&vr(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(a(166));if(e=Q.current,mi(n)){if(e=n.stateNode,t=n.memoizedProps,r=null,l=Dn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}e[cn]=n,e=!!(e.nodeValue===t||r!==null&&r.suppressHydrationWarning===!0||gp(e.nodeValue,t)),e||qr(n,!0)}else e=po(e).createTextNode(r),e[cn]=n,n.stateNode=e}return en(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(r=mi(n),t!==null){if(e===null){if(!r)throw Error(a(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[cn]=n}else Ll(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),e=!1}else t=kc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(mt(n),n):(mt(n),null);if((n.flags&128)!==0)throw Error(a(558))}return en(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=mi(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(a(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(a(317));l[cn]=n}else Ll(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),l=!1}else l=kc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(mt(n),n):(mt(n),null)}return mt(n),(n.flags&128)!==0?(n.lanes=t,n):(t=r!==null,e=e!==null&&e.memoizedState!==null,t&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),s=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(s=r.memoizedState.cachePool.pool),s!==l&&(r.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),Ws(n,n.updateQueue),en(n),null);case 4:return Te(),e===null&&zu(n.stateNode.containerInfo),en(n),null;case 10:return _r(n.type),en(n),null;case 19:if(B(fn),r=n.memoizedState,r===null)return en(n),null;if(l=(n.flags&128)!==0,s=r.rendering,s===null)if(l)Na(r,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(s=Hs(e),s!==null){for(n.flags|=128,Na(r,!1),e=s.updateQueue,n.updateQueue=e,Ws(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Kf(t,e),t=t.sibling;return W(fn,fn.current&1|2),Ce&&pr(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&yn()>ro&&(n.flags|=128,l=!0,Na(r,!1),n.lanes=4194304)}else{if(!l)if(e=Hs(s),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,Ws(n,e),Na(r,!0),r.tail===null&&r.tailMode==="hidden"&&!s.alternate&&!Ce)return en(n),null}else 2*yn()-r.renderingStartTime>ro&&t!==536870912&&(n.flags|=128,l=!0,Na(r,!1),n.lanes=4194304);r.isBackwards?(s.sibling=n.child,n.child=s):(e=r.last,e!==null?e.sibling=s:n.child=s,r.last=s)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=yn(),e.sibling=null,t=fn.current,W(fn,l?t&1|2:t&1),Ce&&pr(n,r.treeForkCount),e):(en(n),null);case 22:case 23:return mt(n),Uc(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(t&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),t=n.updateQueue,t!==null&&Ws(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==t&&(n.flags|=2048),e!==null&&B(Ul),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),_r(pn),en(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function P_(e,n){switch(Sc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return _r(pn),Te(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Pt(n),null;case 31:if(n.memoizedState!==null){if(mt(n),n.alternate===null)throw Error(a(340));Ll()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(mt(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Ll()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return B(fn),null;case 4:return Te(),null;case 10:return _r(n.type),null;case 22:case 23:return mt(n),Uc(),e!==null&&B(Ul),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return _r(pn),null;case 25:return null;default:return null}}function wm(e,n){switch(Sc(n),n.tag){case 3:_r(pn),Te();break;case 26:case 27:case 5:Pt(n);break;case 4:Te();break;case 31:n.memoizedState!==null&&mt(n);break;case 13:mt(n);break;case 19:B(fn);break;case 10:_r(n.type);break;case 22:case 23:mt(n),Uc(),e!==null&&B(Ul);break;case 24:_r(pn)}}function Ra(e,n){try{var t=n.updateQueue,r=t!==null?t.lastEffect:null;if(r!==null){var l=r.next;t=l;do{if((t.tag&e)===e){r=void 0;var s=t.create,p=t.inst;r=s(),p.destroy=r}t=t.next}while(t!==l)}}catch(g){qe(n,n.return,g)}}function Zr(e,n,t){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var s=l.next;r=s;do{if((r.tag&e)===e){var p=r.inst,g=p.destroy;if(g!==void 0){p.destroy=void 0,l=n;var E=t,A=g;try{A()}catch(V){qe(l,E,V)}}}r=r.next}while(r!==s)}}catch(V){qe(n,n.return,V)}}function Sm(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{md(n,t)}catch(r){qe(e,e.return,r)}}}function Em(e,n,t){t.props=Il(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(r){qe(e,n,r)}}function Ma(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof t=="function"?e.refCleanup=t(r):t.current=r}}catch(l){qe(e,n,l)}}function nr(e,n){var t=e.ref,r=e.refCleanup;if(t!==null)if(typeof r=="function")try{r()}catch(l){qe(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){qe(e,n,l)}else t.current=null}function km(e){var n=e.type,t=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&r.focus();break e;case"img":t.src?r.src=t.src:t.srcSet&&(r.srcset=t.srcSet)}}catch(l){qe(e,e.return,l)}}function _u(e,n,t){try{var r=e.stateNode;mg(r,e.type,t,n),r[un]=n}catch(l){qe(e,e.return,l)}}function Nm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ll(e.type)||e.tag===4}function gu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ll(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=tn));else if(r!==4&&(r===27&&ll(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(bu(e,n,t),e=e.sibling;e!==null;)bu(e,n,t),e=e.sibling}function Js(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(r===27&&ll(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Js(e,n,t),e=e.sibling;e!==null;)Js(e,n,t),e=e.sibling}function Rm(e){var n=e.stateNode,t=e.memoizedProps;try{for(var r=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Ln(n,r,t),n[cn]=e,n[un]=t}catch(s){qe(e,e.return,s)}}var xr=!1,gn=!1,yu=!1,Mm=typeof WeakSet=="function"?WeakSet:Set,Nn=null;function $_(e,n){if(e=e.containerInfo,Vu=xo,e=ua(e),dc(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var p=0,g=-1,E=-1,A=0,V=0,P=e,O=null;n:for(;;){for(var U;P!==t||l!==0&&P.nodeType!==3||(g=p+l),P!==s||r!==0&&P.nodeType!==3||(E=p+r),P.nodeType===3&&(p+=P.nodeValue.length),(U=P.firstChild)!==null;)O=P,P=U;for(;;){if(P===e)break n;if(O===t&&++A===l&&(g=p),O===s&&++V===r&&(E=p),(U=P.nextSibling)!==null)break;P=O,O=P.parentNode}P=U}t=g===-1||E===-1?null:{start:g,end:E}}else t=null}t=t||{start:0,end:0}}else t=null;for(Gu={focusedElem:e,selectionRange:t},xo=!1,Nn=n;Nn!==null;)if(n=Nn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Nn=e;else for(;Nn!==null;){switch(n=Nn,s=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)l=e[t],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,t=n,l=s.memoizedProps,s=s.memoizedState,r=t.stateNode;try{var ce=Il(t.type,l);e=r.getSnapshotBeforeUpdate(ce,s),r.__reactInternalSnapshotBeforeUpdate=e}catch(_e){qe(t,t.return,_e)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)qu(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,Nn=e;break}Nn=n.return}}function jm(e,n,t){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Sr(e,t),r&4&&Ra(5,t);break;case 1:if(Sr(e,t),r&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(p){qe(t,t.return,p)}else{var l=Il(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(p){qe(t,t.return,p)}}r&64&&Sm(t),r&512&&Ma(t,t.return);break;case 3:if(Sr(e,t),r&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{md(e,n)}catch(p){qe(t,t.return,p)}}break;case 27:n===null&&r&4&&Rm(t);case 26:case 5:Sr(e,t),n===null&&r&4&&km(t),r&512&&Ma(t,t.return);break;case 12:Sr(e,t);break;case 31:Sr(e,t),r&4&&Dm(e,t);break;case 13:Sr(e,t),r&4&&Om(e,t),r&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=ng.bind(null,t),xg(e,t))));break;case 22:if(r=t.memoizedState!==null||xr,!r){n=n!==null&&n.memoizedState!==null||gn,l=xr;var s=gn;xr=r,(gn=n)&&!s?Er(e,t,(t.subtreeFlags&8772)!==0):Sr(e,t),xr=l,gn=s}break;case 30:break;default:Sr(e,t)}}function Tm(e){var n=e.alternate;n!==null&&(e.alternate=null,Tm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Vt(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ln=null,Jn=!1;function wr(e,n,t){for(t=t.child;t!==null;)Am(e,n,t),t=t.sibling}function Am(e,n,t){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(hl,t)}catch{}switch(t.tag){case 26:gn||nr(t,n),wr(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:gn||nr(t,n);var r=ln,l=Jn;ll(t.type)&&(ln=t.stateNode,Jn=!1),wr(e,n,t),za(t.stateNode),ln=r,Jn=l;break;case 5:gn||nr(t,n);case 6:if(r=ln,l=Jn,ln=null,wr(e,n,t),ln=r,Jn=l,ln!==null)if(Jn)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(t.stateNode)}catch(s){qe(t,n,s)}else try{ln.removeChild(t.stateNode)}catch(s){qe(t,n,s)}break;case 18:ln!==null&&(Jn?(e=ln,Sp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Ci(e)):Sp(ln,t.stateNode));break;case 4:r=ln,l=Jn,ln=t.stateNode.containerInfo,Jn=!0,wr(e,n,t),ln=r,Jn=l;break;case 0:case 11:case 14:case 15:Zr(2,t,n),gn||Zr(4,t,n),wr(e,n,t);break;case 1:gn||(nr(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"&&Em(t,n,r)),wr(e,n,t);break;case 21:wr(e,n,t);break;case 22:gn=(r=gn)||t.memoizedState!==null,wr(e,n,t),gn=r;break;default:wr(e,n,t)}}function Dm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ci(e)}catch(t){qe(n,n.return,t)}}}function Om(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ci(e)}catch(t){qe(n,n.return,t)}}function X_(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Mm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Mm),n;default:throw Error(a(435,e.tag))}}function eo(e,n){var t=X_(e);n.forEach(function(r){if(!t.has(r)){t.add(r);var l=tg.bind(null,e,r);r.then(l,l)}})}function et(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r],s=e,p=n,g=p;e:for(;g!==null;){switch(g.tag){case 27:if(ll(g.type)){ln=g.stateNode,Jn=!1;break e}break;case 5:ln=g.stateNode,Jn=!1;break e;case 3:case 4:ln=g.stateNode.containerInfo,Jn=!0;break e}g=g.return}if(ln===null)throw Error(a(160));Am(s,p,l),ln=null,Jn=!1,s=l.alternate,s!==null&&(s.return=null),l.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Cm(n,e),n=n.sibling}var It=null;function Cm(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:et(n,e),nt(e),r&4&&(Zr(3,e,e.return),Ra(3,e),Zr(5,e,e.return));break;case 1:et(n,e),nt(e),r&512&&(gn||t===null||nr(t,t.return)),r&64&&xr&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?r:t.concat(r))));break;case 26:var l=It;if(et(n,e),nt(e),r&512&&(gn||t===null||nr(t,t.return)),r&4){var s=t!==null?t.memoizedState:null;if(r=e.memoizedState,t===null)if(r===null)if(e.stateNode===null){e:{r=e.type,t=e.memoizedProps,l=l.ownerDocument||l;n:switch(r){case"title":s=l.getElementsByTagName("title")[0],(!s||s[Ht]||s[cn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(r),l.head.insertBefore(s,l.querySelector("head > title"))),Ln(s,r,t),s[cn]=e,Ze(s),r=s;break e;case"link":var p=Cp("link","href",l).get(r+(t.href||""));if(p){for(var g=0;g<p.length;g++)if(s=p[g],s.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&s.getAttribute("rel")===(t.rel==null?null:t.rel)&&s.getAttribute("title")===(t.title==null?null:t.title)&&s.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){p.splice(g,1);break n}}s=l.createElement(r),Ln(s,r,t),l.head.appendChild(s);break;case"meta":if(p=Cp("meta","content",l).get(r+(t.content||""))){for(g=0;g<p.length;g++)if(s=p[g],s.getAttribute("content")===(t.content==null?null:""+t.content)&&s.getAttribute("name")===(t.name==null?null:t.name)&&s.getAttribute("property")===(t.property==null?null:t.property)&&s.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&s.getAttribute("charset")===(t.charSet==null?null:t.charSet)){p.splice(g,1);break n}}s=l.createElement(r),Ln(s,r,t),l.head.appendChild(s);break;default:throw Error(a(468,r))}s[cn]=e,Ze(s),r=s}e.stateNode=r}else Lp(l,e.type,e.stateNode);else e.stateNode=Op(l,r,e.memoizedProps);else s!==r?(s===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):s.count--,r===null?Lp(l,e.type,e.stateNode):Op(l,r,e.memoizedProps)):r===null&&e.stateNode!==null&&_u(e,e.memoizedProps,t.memoizedProps)}break;case 27:et(n,e),nt(e),r&512&&(gn||t===null||nr(t,t.return)),t!==null&&r&4&&_u(e,e.memoizedProps,t.memoizedProps);break;case 5:if(et(n,e),nt(e),r&512&&(gn||t===null||nr(t,t.return)),e.flags&32){l=e.stateNode;try{nn(l,"")}catch(ce){qe(e,e.return,ce)}}r&4&&e.stateNode!=null&&(l=e.memoizedProps,_u(e,l,t!==null?t.memoizedProps:l)),r&1024&&(yu=!0);break;case 6:if(et(n,e),nt(e),r&4){if(e.stateNode===null)throw Error(a(162));r=e.memoizedProps,t=e.stateNode;try{t.nodeValue=r}catch(ce){qe(e,e.return,ce)}}break;case 3:if(go=null,l=It,It=ho(n.containerInfo),et(n,e),It=l,nt(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ci(n.containerInfo)}catch(ce){qe(e,e.return,ce)}yu&&(yu=!1,Lm(e));break;case 4:r=It,It=ho(e.stateNode.containerInfo),et(n,e),nt(e),It=r;break;case 12:et(n,e),nt(e);break;case 31:et(n,e),nt(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,eo(e,r)));break;case 13:et(n,e),nt(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(to=yn()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,eo(e,r)));break;case 22:l=e.memoizedState!==null;var E=t!==null&&t.memoizedState!==null,A=xr,V=gn;if(xr=A||l,gn=V||E,et(n,e),gn=V,xr=A,nt(e),r&8192)e:for(n=e.stateNode,n._visibility=l?n._visibility&-2:n._visibility|1,l&&(t===null||E||xr||gn||ql(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){E=t=n;try{if(s=E.stateNode,l)p=s.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{g=E.stateNode;var P=E.memoizedProps.style,O=P!=null&&P.hasOwnProperty("display")?P.display:null;g.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(ce){qe(E,E.return,ce)}}}else if(n.tag===6){if(t===null){E=n;try{E.stateNode.nodeValue=l?"":E.memoizedProps}catch(ce){qe(E,E.return,ce)}}}else if(n.tag===18){if(t===null){E=n;try{var U=E.stateNode;l?Ep(U,!0):Ep(E.stateNode,!1)}catch(ce){qe(E,E.return,ce)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(t=r.retryQueue,t!==null&&(r.retryQueue=null,eo(e,t))));break;case 19:et(n,e),nt(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,eo(e,r)));break;case 30:break;case 21:break;default:et(n,e),nt(e)}}function nt(e){var n=e.flags;if(n&2){try{for(var t,r=e.return;r!==null;){if(Nm(r)){t=r;break}r=r.return}if(t==null)throw Error(a(160));switch(t.tag){case 27:var l=t.stateNode,s=gu(e);Js(e,s,l);break;case 5:var p=t.stateNode;t.flags&32&&(nn(p,""),t.flags&=-33);var g=gu(e);Js(e,g,p);break;case 3:case 4:var E=t.stateNode.containerInfo,A=gu(e);bu(e,A,E);break;default:throw Error(a(161))}}catch(V){qe(e,e.return,V)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Lm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Lm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Sr(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)jm(e,n.alternate,n),n=n.sibling}function ql(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Zr(4,n,n.return),ql(n);break;case 1:nr(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&Em(n,n.return,t),ql(n);break;case 27:za(n.stateNode);case 26:case 5:nr(n,n.return),ql(n);break;case 22:n.memoizedState===null&&ql(n);break;case 30:ql(n);break;default:ql(n)}e=e.sibling}}function Er(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,l=e,s=n,p=s.flags;switch(s.tag){case 0:case 11:case 15:Er(l,s,t),Ra(4,s);break;case 1:if(Er(l,s,t),r=s,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(A){qe(r,r.return,A)}if(r=s,l=r.updateQueue,l!==null){var g=r.stateNode;try{var E=l.shared.hiddenCallbacks;if(E!==null)for(l.shared.hiddenCallbacks=null,l=0;l<E.length;l++)dd(E[l],g)}catch(A){qe(r,r.return,A)}}t&&p&64&&Sm(s),Ma(s,s.return);break;case 27:Rm(s);case 26:case 5:Er(l,s,t),t&&r===null&&p&4&&km(s),Ma(s,s.return);break;case 12:Er(l,s,t);break;case 31:Er(l,s,t),t&&p&4&&Dm(l,s);break;case 13:Er(l,s,t),t&&p&4&&Om(l,s);break;case 22:s.memoizedState===null&&Er(l,s,t),Ma(s,s.return);break;case 30:break;default:Er(l,s,t)}n=n.sibling}}function vu(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&pa(t))}function xu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&pa(e))}function qt(e,n,t,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Bm(e,n,t,r),n=n.sibling}function Bm(e,n,t,r){var l=n.flags;switch(n.tag){case 0:case 11:case 15:qt(e,n,t,r),l&2048&&Ra(9,n);break;case 1:qt(e,n,t,r);break;case 3:qt(e,n,t,r),l&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&pa(e)));break;case 12:if(l&2048){qt(e,n,t,r),e=n.stateNode;try{var s=n.memoizedProps,p=s.id,g=s.onPostCommit;typeof g=="function"&&g(p,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){qe(n,n.return,E)}}else qt(e,n,t,r);break;case 31:qt(e,n,t,r);break;case 13:qt(e,n,t,r);break;case 23:break;case 22:s=n.stateNode,p=n.alternate,n.memoizedState!==null?s._visibility&2?qt(e,n,t,r):ja(e,n):s._visibility&2?qt(e,n,t,r):(s._visibility|=2,Si(e,n,t,r,(n.subtreeFlags&10256)!==0||!1)),l&2048&&vu(p,n);break;case 24:qt(e,n,t,r),l&2048&&xu(n.alternate,n);break;default:qt(e,n,t,r)}}function Si(e,n,t,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var s=e,p=n,g=t,E=r,A=p.flags;switch(p.tag){case 0:case 11:case 15:Si(s,p,g,E,l),Ra(8,p);break;case 23:break;case 22:var V=p.stateNode;p.memoizedState!==null?V._visibility&2?Si(s,p,g,E,l):ja(s,p):(V._visibility|=2,Si(s,p,g,E,l)),l&&A&2048&&vu(p.alternate,p);break;case 24:Si(s,p,g,E,l),l&&A&2048&&xu(p.alternate,p);break;default:Si(s,p,g,E,l)}n=n.sibling}}function ja(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,r=n,l=r.flags;switch(r.tag){case 22:ja(t,r),l&2048&&vu(r.alternate,r);break;case 24:ja(t,r),l&2048&&xu(r.alternate,r);break;default:ja(t,r)}n=n.sibling}}var Ta=8192;function Ei(e,n,t){if(e.subtreeFlags&Ta)for(e=e.child;e!==null;)zm(e,n,t),e=e.sibling}function zm(e,n,t){switch(e.tag){case 26:Ei(e,n,t),e.flags&Ta&&e.memoizedState!==null&&Og(t,It,e.memoizedState,e.memoizedProps);break;case 5:Ei(e,n,t);break;case 3:case 4:var r=It;It=ho(e.stateNode.containerInfo),Ei(e,n,t),It=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ta,Ta=16777216,Ei(e,n,t),Ta=r):Ei(e,n,t));break;default:Ei(e,n,t)}}function Um(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Aa(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var r=n[t];Nn=r,Vm(r,e)}Um(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hm(e),e=e.sibling}function Hm(e){switch(e.tag){case 0:case 11:case 15:Aa(e),e.flags&2048&&Zr(9,e,e.return);break;case 3:Aa(e);break;case 12:Aa(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,no(e)):Aa(e);break;default:Aa(e)}}function no(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var r=n[t];Nn=r,Vm(r,e)}Um(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Zr(8,n,n.return),no(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,no(n));break;default:no(n)}e=e.sibling}}function Vm(e,n){for(;Nn!==null;){var t=Nn;switch(t.tag){case 0:case 11:case 15:Zr(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var r=t.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:pa(t.memoizedState.cache)}if(r=t.child,r!==null)r.return=t,Nn=r;else e:for(t=e;Nn!==null;){r=Nn;var l=r.sibling,s=r.return;if(Tm(r),r===t){Nn=null;break e}if(l!==null){l.return=s,Nn=l;break e}Nn=s}}}var F_={getCacheForType:function(e){var n=On(pn),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return On(pn).controller.signal}},K_=typeof WeakMap=="function"?WeakMap:Map,He=0,Qe=null,Me=null,Ae=0,Ie=0,pt=null,Wr=!1,ki=!1,wu=!1,kr=0,sn=0,Jr=0,Pl=0,Su=0,ht=0,Ni=0,Da=null,tt=null,Eu=!1,to=0,Gm=0,ro=1/0,lo=null,el=null,wn=0,nl=null,Ri=null,Nr=0,ku=0,Nu=null,Ym=null,Oa=0,Ru=null;function _t(){return(He&2)!==0&&Ae!==0?Ae&-Ae:z.T!==null?Ou():on()}function Im(){if(ht===0)if((Ae&536870912)===0||Ce){var e=In;In<<=1,(In&3932160)===0&&(In=262144),ht=e}else ht=536870912;return e=dt.current,e!==null&&(e.flags|=32),ht}function rt(e,n,t){(e===Qe&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(Mi(e,0),tl(e,Ae,ht,!1)),_l(e,t),((He&2)===0||e!==Qe)&&(e===Qe&&((He&2)===0&&(Pl|=t),sn===4&&tl(e,Ae,ht,!1)),tr(e))}function qm(e,n,t){if((He&6)!==0)throw Error(a(327));var r=!t&&(n&127)===0&&(n&e.expiredLanes)===0||zn(e,n),l=r?W_(e,n):ju(e,n,!0),s=r;do{if(l===0){ki&&!r&&tl(e,n,0,!1);break}else{if(t=e.current.alternate,s&&!Q_(t)){l=ju(e,n,!1),s=!1;continue}if(l===2){if(s=n,e.errorRecoveryDisabledLanes&s)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;e:{var g=e;l=Da;var E=g.current.memoizedState.isDehydrated;if(E&&(Mi(g,p).flags|=256),p=ju(g,p,!1),p!==2){if(wu&&!E){g.errorRecoveryDisabledLanes|=s,Pl|=s,l=4;break e}s=tt,tt=l,s!==null&&(tt===null?tt=s:tt.push.apply(tt,s))}l=p}if(s=!1,l!==2)continue}}if(l===1){Mi(e,0),tl(e,n,0,!0);break}e:{switch(r=e,s=l,s){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:tl(r,n,ht,!Wr);break e;case 2:tt=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(l=to+300-yn(),10<l)){if(tl(r,n,ht,!Wr),mn(r,0,!0)!==0)break e;Nr=n,r.timeoutHandle=xp(Pm.bind(null,r,t,tt,lo,Eu,n,ht,Pl,Ni,Wr,s,"Throttled",-0,0),l);break e}Pm(r,t,tt,lo,Eu,n,ht,Pl,Ni,Wr,s,null,-0,0)}}break}while(!0);tr(e)}function Pm(e,n,t,r,l,s,p,g,E,A,V,P,O,U){if(e.timeoutHandle=-1,P=n.subtreeFlags,P&8192||(P&16785408)===16785408){P={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:tn},zm(n,s,P);var ce=(s&62914560)===s?to-yn():(s&4194048)===s?Gm-yn():0;if(ce=Cg(P,ce),ce!==null){Nr=s,e.cancelPendingCommit=ce(Jm.bind(null,e,n,s,t,r,l,p,g,E,V,P,null,O,U)),tl(e,s,p,!A);return}}Jm(e,n,s,t,r,l,p,g,E)}function Q_(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var r=0;r<t.length;r++){var l=t[r],s=l.getSnapshot;l=l.value;try{if(!An(s(),l))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function tl(e,n,t,r){n&=~Su,n&=~Pl,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var l=n;0<l;){var s=31-Rn(l),p=1<<s;r[s]=-1,l&=~p}t!==0&&ls(e,t,n)}function io(){return(He&6)===0?(Ca(0),!1):!0}function Mu(){if(Me!==null){if(Ie===0)var e=Me.return;else e=Me,hr=Bl=null,qc(e),bi=null,_a=0,e=Me;for(;e!==null;)wm(e.alternate,e),e=e.return;Me=null}}function Mi(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,_g(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Nr=0,Mu(),Qe=e,Me=t=mr(e.current,null),Ae=n,Ie=0,pt=null,Wr=!1,ki=zn(e,n),wu=!1,Ni=ht=Su=Pl=Jr=sn=0,tt=Da=null,Eu=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var l=31-Rn(r),s=1<<l;n|=e[l],r&=~s}return kr=n,Ns(),t}function $m(e,n){Ee=null,z.H=Ea,n===gi||n===Cs?(n=od(),Ie=3):n===Dc?(n=od(),Ie=4):Ie=n===au?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,pt=n,Me===null&&(sn=1,Fs(e,Nt(n,e.current)))}function Xm(){var e=dt.current;return e===null?!0:(Ae&4194048)===Ae?Tt===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?e===Tt:!1}function Fm(){var e=z.H;return z.H=Ea,e===null?Ea:e}function Km(){var e=z.A;return z.A=F_,e}function ao(){sn=4,Wr||(Ae&4194048)!==Ae&&dt.current!==null||(ki=!0),(Jr&134217727)===0&&(Pl&134217727)===0||Qe===null||tl(Qe,Ae,ht,!1)}function ju(e,n,t){var r=He;He|=2;var l=Fm(),s=Km();(Qe!==e||Ae!==n)&&(lo=null,Mi(e,n)),n=!1;var p=sn;e:do try{if(Ie!==0&&Me!==null){var g=Me,E=pt;switch(Ie){case 8:Mu(),p=6;break e;case 3:case 2:case 9:case 6:dt.current===null&&(n=!0);var A=Ie;if(Ie=0,pt=null,ji(e,g,E,A),t&&ki){p=0;break e}break;default:A=Ie,Ie=0,pt=null,ji(e,g,E,A)}}Z_(),p=sn;break}catch(V){$m(e,V)}while(!0);return n&&e.shellSuspendCounter++,hr=Bl=null,He=r,z.H=l,z.A=s,Me===null&&(Qe=null,Ae=0,Ns()),p}function Z_(){for(;Me!==null;)Qm(Me)}function W_(e,n){var t=He;He|=2;var r=Fm(),l=Km();Qe!==e||Ae!==n?(lo=null,ro=yn()+500,Mi(e,n)):ki=zn(e,n);e:do try{if(Ie!==0&&Me!==null){n=Me;var s=pt;n:switch(Ie){case 1:Ie=0,pt=null,ji(e,n,s,1);break;case 2:case 9:if(ad(s)){Ie=0,pt=null,Zm(n);break}n=function(){Ie!==2&&Ie!==9||Qe!==e||(Ie=7),tr(e)},s.then(n,n);break e;case 3:Ie=7;break e;case 4:Ie=5;break e;case 7:ad(s)?(Ie=0,pt=null,Zm(n)):(Ie=0,pt=null,ji(e,n,s,7));break;case 5:var p=null;switch(Me.tag){case 26:p=Me.memoizedState;case 5:case 27:var g=Me;if(p?Bp(p):g.stateNode.complete){Ie=0,pt=null;var E=g.sibling;if(E!==null)Me=E;else{var A=g.return;A!==null?(Me=A,so(A)):Me=null}break n}}Ie=0,pt=null,ji(e,n,s,5);break;case 6:Ie=0,pt=null,ji(e,n,s,6);break;case 8:Mu(),sn=6;break e;default:throw Error(a(462))}}J_();break}catch(V){$m(e,V)}while(!0);return hr=Bl=null,z.H=r,z.A=l,He=t,Me!==null?0:(Qe=null,Ae=0,Ns(),sn)}function J_(){for(;Me!==null&&!Ql();)Qm(Me)}function Qm(e){var n=vm(e.alternate,e,kr);e.memoizedProps=e.pendingProps,n===null?so(e):Me=n}function Zm(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=pm(t,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=pm(t,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:qc(n);default:wm(t,n),n=Me=Kf(n,kr),n=vm(t,n,kr)}e.memoizedProps=e.pendingProps,n===null?so(e):Me=n}function ji(e,n,t,r){hr=Bl=null,qc(n),bi=null,_a=0;var l=n.return;try{if(G_(e,l,n,t,Ae)){sn=1,Fs(e,Nt(t,e.current)),Me=null;return}}catch(s){if(l!==null)throw Me=l,s;sn=1,Fs(e,Nt(t,e.current)),Me=null;return}n.flags&32768?(Ce||r===1?e=!0:ki||(Ae&536870912)!==0?e=!1:(Wr=e=!0,(r===2||r===9||r===3||r===6)&&(r=dt.current,r!==null&&r.tag===13&&(r.flags|=16384))),Wm(n,e)):so(n)}function so(e){var n=e;do{if((n.flags&32768)!==0){Wm(n,Wr);return}e=n.return;var t=q_(n.alternate,n,kr);if(t!==null){Me=t;return}if(n=n.sibling,n!==null){Me=n;return}Me=n=e}while(n!==null);sn===0&&(sn=5)}function Wm(e,n){do{var t=P_(e.alternate,e);if(t!==null){t.flags&=32767,Me=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){Me=e;return}Me=e=t}while(e!==null);sn=6,Me=null}function Jm(e,n,t,r,l,s,p,g,E){e.cancelPendingCommit=null;do oo();while(wn!==0);if((He&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(s=n.lanes|n.childLanes,s|=gc,lr(e,t,s,p,g,E),e===Qe&&(Me=Qe=null,Ae=0),Ri=n,nl=e,Nr=t,ku=s,Nu=l,Ym=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,rg(pl,function(){return lp(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,l=Z.p,Z.p=2,p=He,He|=4;try{$_(e,n,t)}finally{He=p,Z.p=l,z.T=r}}wn=1,ep(),np(),tp()}}function ep(){if(wn===1){wn=0;var e=nl,n=Ri,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=z.T,z.T=null;var r=Z.p;Z.p=2;var l=He;He|=4;try{Cm(n,e);var s=Gu,p=ua(e.containerInfo),g=s.focusedElem,E=s.selectionRange;if(p!==g&&g&&g.ownerDocument&&Es(g.ownerDocument.documentElement,g)){if(E!==null&&dc(g)){var A=E.start,V=E.end;if(V===void 0&&(V=A),"selectionStart"in g)g.selectionStart=A,g.selectionEnd=Math.min(V,g.value.length);else{var P=g.ownerDocument||document,O=P&&P.defaultView||window;if(O.getSelection){var U=O.getSelection(),ce=g.textContent.length,_e=Math.min(E.start,ce),Fe=E.end===void 0?_e:Math.min(E.end,ce);!U.extend&&_e>Fe&&(p=Fe,Fe=_e,_e=p);var M=Gr(g,_e),k=Gr(g,Fe);if(M&&k&&(U.rangeCount!==1||U.anchorNode!==M.node||U.anchorOffset!==M.offset||U.focusNode!==k.node||U.focusOffset!==k.offset)){var T=P.createRange();T.setStart(M.node,M.offset),U.removeAllRanges(),_e>Fe?(U.addRange(T),U.extend(k.node,k.offset)):(T.setEnd(k.node,k.offset),U.addRange(T))}}}}for(P=[],U=g;U=U.parentNode;)U.nodeType===1&&P.push({element:U,left:U.scrollLeft,top:U.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<P.length;g++){var Y=P[g];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}xo=!!Vu,Gu=Vu=null}finally{He=l,Z.p=r,z.T=t}}e.current=n,wn=2}}function np(){if(wn===2){wn=0;var e=nl,n=Ri,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=z.T,z.T=null;var r=Z.p;Z.p=2;var l=He;He|=4;try{jm(e,n.alternate,n)}finally{He=l,Z.p=r,z.T=t}}wn=3}}function tp(){if(wn===4||wn===3){wn=0,Dr();var e=nl,n=Ri,t=Nr,r=Ym;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?wn=5:(wn=0,Ri=nl=null,rp(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(el=null),xt(t),n=n.stateNode,vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(hl,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=z.T,l=Z.p,Z.p=2,z.T=null;try{for(var s=e.onRecoverableError,p=0;p<r.length;p++){var g=r[p];s(g.value,{componentStack:g.stack})}}finally{z.T=n,Z.p=l}}(Nr&3)!==0&&oo(),tr(e),l=e.pendingLanes,(t&261930)!==0&&(l&42)!==0?e===Ru?Oa++:(Oa=0,Ru=e):Oa=0,Ca(0)}}function rp(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,pa(n)))}function oo(){return ep(),np(),tp(),lp()}function lp(){if(wn!==5)return!1;var e=nl,n=ku;ku=0;var t=xt(Nr),r=z.T,l=Z.p;try{Z.p=32>t?32:t,z.T=null,t=Nu,Nu=null;var s=nl,p=Nr;if(wn=0,Ri=nl=null,Nr=0,(He&6)!==0)throw Error(a(331));var g=He;if(He|=4,Hm(s.current),Bm(s,s.current,p,t),He=g,Ca(0,!1),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(hl,s)}catch{}return!0}finally{Z.p=l,z.T=r,rp(e,n)}}function ip(e,n,t){n=Nt(t,n),n=iu(e.stateNode,n,2),e=Fr(e,n,2),e!==null&&(_l(e,2),tr(e))}function qe(e,n,t){if(e.tag===3)ip(e,e,t);else for(;n!==null;){if(n.tag===3){ip(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(el===null||!el.has(r))){e=Nt(t,e),t=am(2),r=Fr(n,t,2),r!==null&&(sm(t,r,n,e),_l(r,2),tr(r));break}}n=n.return}}function Tu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new K_;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(wu=!0,l.add(t),e=eg.bind(null,e,n,t),n.then(e,e))}function eg(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Qe===e&&(Ae&t)===t&&(sn===4||sn===3&&(Ae&62914560)===Ae&&300>yn()-to?(He&2)===0&&Mi(e,0):Su|=t,Ni===Ae&&(Ni=0)),tr(e)}function ap(e,n){n===0&&(n=$i()),e=Ol(e,n),e!==null&&(_l(e,n),tr(e))}function ng(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),ap(e,t)}function tg(e,n){var t=0;switch(e.tag){case 31:case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}r!==null&&r.delete(n),ap(e,t)}function rg(e,n){return Ar(e,n)}var co=null,Ti=null,Au=!1,uo=!1,Du=!1,rl=0;function tr(e){e!==Ti&&e.next===null&&(Ti===null?co=Ti=e:Ti=Ti.next=e),uo=!0,Au||(Au=!0,ig())}function Ca(e,n){if(!Du&&uo){Du=!0;do for(var t=!1,r=co;r!==null;){if(e!==0){var l=r.pendingLanes;if(l===0)var s=0;else{var p=r.suspendedLanes,g=r.pingedLanes;s=(1<<31-Rn(42|e)+1)-1,s&=l&~(p&~g),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(t=!0,up(r,s))}else s=Ae,s=mn(r,r===Qe?s:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(s&3)===0||zn(r,s)||(t=!0,up(r,s));r=r.next}while(t);Du=!1}}function lg(){sp()}function sp(){uo=Au=!1;var e=0;rl!==0&&hg()&&(e=rl);for(var n=yn(),t=null,r=co;r!==null;){var l=r.next,s=op(r,n);s===0?(r.next=null,t===null?co=l:t.next=l,l===null&&(Ti=t)):(t=r,(e!==0||(s&3)!==0)&&(uo=!0)),r=l}wn!==0&&wn!==5||Ca(e),rl!==0&&(rl=0)}function op(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var p=31-Rn(s),g=1<<p,E=l[p];E===-1?((g&t)===0||(g&r)!==0)&&(l[p]=Io(g,n)):E<=n&&(e.expiredLanes|=g),s&=~g}if(n=Qe,t=Ae,t=mn(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,t===0||e===n&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&vt(r),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||zn(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(r!==null&&vt(r),xt(t)){case 2:case 8:t=Pi;break;case 32:t=pl;break;case 268435456:t=lt;break;default:t=pl}return r=cp.bind(null,e),t=Ar(t,r),e.callbackPriority=n,e.callbackNode=t,n}return r!==null&&r!==null&&vt(r),e.callbackPriority=2,e.callbackNode=null,2}function cp(e,n){if(wn!==0&&wn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(oo()&&e.callbackNode!==t)return null;var r=Ae;return r=mn(e,e===Qe?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(qm(e,r,n),op(e,yn()),e.callbackNode!=null&&e.callbackNode===t?cp.bind(null,e):null)}function up(e,n){if(oo())return null;qm(e,n,!0)}function ig(){gg(function(){(He&6)!==0?Ar(ml,lg):sp()})}function Ou(){if(rl===0){var e=hi;e===0&&(e=Xt,Xt<<=1,(Xt&261888)===0&&(Xt=256)),rl=e}return rl}function fp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:zr(""+e)}function dp(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function ag(e,n,t,r,l){if(n==="submit"&&t&&t.stateNode===l){var s=fp((l[un]||null).action),p=r.submitter;p&&(n=(n=p[un]||null)?fp(n.formAction):p.getAttribute("formAction"),n!==null&&(s=n,p=null));var g=new li("action","action",null,r,l);e.push({event:g,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rl!==0){var E=p?dp(l,p):new FormData(l);Jc(t,{pending:!0,data:E,method:l.method,action:s},null,E)}}else typeof s=="function"&&(g.preventDefault(),E=p?dp(l,p):new FormData(l),Jc(t,{pending:!0,data:E,method:l.method,action:s},s,E))},currentTarget:l}]})}}for(var Cu=0;Cu<_c.length;Cu++){var Lu=_c[Cu],sg=Lu.toLowerCase(),og=Lu[0].toUpperCase()+Lu.slice(1);Yt(sg,"on"+og)}Yt(If,"onAnimationEnd"),Yt(qf,"onAnimationIteration"),Yt(Pf,"onAnimationStart"),Yt("dblclick","onDoubleClick"),Yt("focusin","onFocus"),Yt("focusout","onBlur"),Yt(E_,"onTransitionRun"),Yt(k_,"onTransitionStart"),Yt(N_,"onTransitionCancel"),Yt($f,"onTransitionEnd"),ot("onMouseEnter",["mouseout","mouseover"]),ot("onMouseLeave",["mouseout","mouseover"]),ot("onPointerEnter",["pointerout","pointerover"]),ot("onPointerLeave",["pointerout","pointerover"]),st("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),st("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),st("onBeforeInput",["compositionend","keypress","textInput","paste"]),st("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var La="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(La));function mp(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var s=void 0;if(n)for(var p=r.length-1;0<=p;p--){var g=r[p],E=g.instance,A=g.currentTarget;if(g=g.listener,E!==s&&l.isPropagationStopped())break e;s=g,l.currentTarget=A;try{s(l)}catch(V){ks(V)}l.currentTarget=null,s=E}else for(p=0;p<r.length;p++){if(g=r[p],E=g.instance,A=g.currentTarget,g=g.listener,E!==s&&l.isPropagationStopped())break e;s=g,l.currentTarget=A;try{s(l)}catch(V){ks(V)}l.currentTarget=null,s=E}}}}function je(e,n){var t=n[zt];t===void 0&&(t=n[zt]=new Set);var r=e+"__bubble";t.has(r)||(pp(n,e,2,!1),t.add(r))}function Bu(e,n,t){var r=0;n&&(r|=4),pp(t,e,r,n)}var fo="_reactListening"+Math.random().toString(36).slice(2);function zu(e){if(!e[fo]){e[fo]=!0,ar.forEach(function(t){t!=="selectionchange"&&(cg.has(t)||Bu(t,!1,e),Bu(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[fo]||(n[fo]=!0,Bu("selectionchange",!1,n))}}function pp(e,n,t,r){switch(Ip(n)){case 2:var l=zg;break;case 8:l=Ug;break;default:l=Wu}t=l.bind(null,n,t,e),l=void 0,!ea||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function Uu(e,n,t,r,l){var s=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var p=r.tag;if(p===3||p===4){var g=r.stateNode.containerInfo;if(g===l)break;if(p===4)for(p=r.return;p!==null;){var E=p.tag;if((E===3||E===4)&&p.stateNode.containerInfo===l)return;p=p.return}for(;g!==null;){if(p=Kt(g),p===null)return;if(E=p.tag,E===5||E===6||E===26||E===27){r=s=p;continue e}g=g.parentNode}}r=r.return}vl(function(){var A=s,V=Ji(t),P=[];e:{var O=Xf.get(e);if(O!==void 0){var U=li,ce=e;switch(e){case"keypress":if(Wt(t)===0)break e;case"keydown":case"keyup":U=_s;break;case"focusin":ce="focus",U=la;break;case"focusout":ce="blur",U=la;break;case"beforeblur":case"afterblur":U=la;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=ra;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=Po;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=lc;break;case If:case qf:case Pf:U=Fo;break;case $f:U=ic;break;case"scroll":case"scrollend":U=ms;break;case"wheel":U=sc;break;case"copy":case"cut":case"paste":U=Qo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=aa;break;case"toggle":case"beforetoggle":U=cc}var _e=(n&4)!==0,Fe=!_e&&(e==="scroll"||e==="scrollend"),M=_e?O!==null?O+"Capture":null:O;_e=[];for(var k=A,T;k!==null;){var Y=k;if(T=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||T===null||M===null||(Y=Qt(k,M),Y!=null&&_e.push(Ba(k,Y,T))),Fe)break;k=k.return}0<_e.length&&(O=new U(O,ce,null,t,V),P.push({event:O,listeners:_e}))}}if((n&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",O&&t!==sr&&(ce=t.relatedTarget||t.fromElement)&&(Kt(ce)||ce[jn]))break e;if((U||O)&&(O=V.window===V?V:(O=V.ownerDocument)?O.defaultView||O.parentWindow:window,U?(ce=t.relatedTarget||t.toElement,U=A,ce=ce?Kt(ce):null,ce!==null&&(Fe=d(ce),_e=ce.tag,ce!==Fe||_e!==5&&_e!==27&&_e!==6)&&(ce=null)):(U=null,ce=A),U!==ce)){if(_e=ra,Y="onMouseLeave",M="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(_e=aa,Y="onPointerLeave",M="onPointerEnter",k="pointer"),Fe=U==null?O:Gt(U),T=ce==null?O:Gt(ce),O=new _e(Y,k+"leave",U,t,V),O.target=Fe,O.relatedTarget=T,Y=null,Kt(V)===A&&(_e=new _e(M,k+"enter",ce,t,V),_e.target=T,_e.relatedTarget=Fe,Y=_e),Fe=Y,U&&ce)n:{for(_e=ug,M=U,k=ce,T=0,Y=M;Y;Y=_e(Y))T++;Y=0;for(var me=k;me;me=_e(me))Y++;for(;0<T-Y;)M=_e(M),T--;for(;0<Y-T;)k=_e(k),Y--;for(;T--;){if(M===k||k!==null&&M===k.alternate){_e=M;break n}M=_e(M),k=_e(k)}_e=null}else _e=null;U!==null&&hp(P,O,U,_e,!1),ce!==null&&Fe!==null&&hp(P,Fe,ce,_e,!0)}}e:{if(O=A?Gt(A):window,U=O.nodeName&&O.nodeName.toLowerCase(),U==="select"||U==="input"&&O.type==="file")var ze=fe;else if(Ss(O))if(Se)ze=Vr;else{ze=oa;var de=fr}else U=O.nodeName,!U||U.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?A&&Wi(A.elementType)&&(ze=fe):ze=Tl;if(ze&&(ze=ze(e,A))){m(P,ze,t,V);break e}de&&de(e,O,A),e==="focusout"&&A&&O.type==="number"&&A.memoizedProps.value!=null&&Qi(O,"number",O.value)}switch(de=A?Gt(A):window,e){case"focusin":(Ss(de)||de.contentEditable==="true")&&(si=de,mc=A,fa=null);break;case"focusout":fa=mc=si=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,Gf(P,t,V);break;case"selectionchange":if(S_)break;case"keydown":case"keyup":Gf(P,t,V)}var Ne;if(Ml)e:{switch(e){case"compositionstart":var De="onCompositionStart";break e;case"compositionend":De="onCompositionEnd";break e;case"compositionupdate":De="onCompositionUpdate";break e}De=void 0}else cr?Hr(e,t)&&(De="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(De="onCompositionStart");De&&(ys&&t.locale!=="ko"&&(cr||De!=="onCompositionStart"?De==="onCompositionEnd"&&cr&&(Ne=na()):(Zt=V,ut="value"in Zt?Zt.value:Zt.textContent,cr=!0)),de=mo(A,De),0<de.length&&(De=new hs(De,e,null,t,V),P.push({event:De,listeners:de}),Ne?De.data=Ne:(Ne=jl(t),Ne!==null&&(De.data=Ne)))),(Ne=bs?sa(e,t):ws(e,t))&&(De=mo(A,"onBeforeInput"),0<De.length&&(de=new hs("onBeforeInput","beforeinput",null,t,V),P.push({event:de,listeners:De}),de.data=Ne)),ag(P,e,A,t,V)}mp(P,n)})}function Ba(e,n,t){return{instance:e,listener:n,currentTarget:t}}function mo(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,s=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||s===null||(l=Qt(e,t),l!=null&&r.unshift(Ba(e,l,s)),l=Qt(e,n),l!=null&&r.push(Ba(e,l,s))),e.tag===3)return r;e=e.return}return[]}function ug(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function hp(e,n,t,r,l){for(var s=n._reactName,p=[];t!==null&&t!==r;){var g=t,E=g.alternate,A=g.stateNode;if(g=g.tag,E!==null&&E===r)break;g!==5&&g!==26&&g!==27||A===null||(E=A,l?(A=Qt(t,s),A!=null&&p.unshift(Ba(t,A,E))):l||(A=Qt(t,s),A!=null&&p.push(Ba(t,A,E)))),t=t.return}p.length!==0&&e.push({event:n,listeners:p})}var fg=/\r\n?/g,dg=/\u0000|\uFFFD/g;function _p(e){return(typeof e=="string"?e:""+e).replace(fg,`
`).replace(dg,"")}function gp(e,n){return n=_p(n),_p(e)===n}function Xe(e,n,t,r,l,s){switch(t){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||nn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&nn(e,""+r);break;case"className":ni(e,"class",r);break;case"tabIndex":ni(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ni(e,t,r);break;case"style":yl(e,r,s);break;case"data":if(n!=="object"){ni(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(t);break}r=zr(""+r),e.setAttribute(t,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(t==="formAction"?(n!=="input"&&Xe(e,n,"name",l.name,l,null),Xe(e,n,"formEncType",l.formEncType,l,null),Xe(e,n,"formMethod",l.formMethod,l,null),Xe(e,n,"formTarget",l.formTarget,l,null)):(Xe(e,n,"encType",l.encType,l,null),Xe(e,n,"method",l.method,l,null),Xe(e,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(t);break}r=zr(""+r),e.setAttribute(t,r);break;case"onClick":r!=null&&(e.onclick=tn);break;case"onScroll":r!=null&&je("scroll",e);break;case"onScrollEnd":r!=null&&je("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(t=r.__html,t!=null){if(l.children!=null)throw Error(a(60));e.innerHTML=t}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}t=zr(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,""+r):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":r===!0?e.setAttribute(t,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,r):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(t,r):e.removeAttribute(t);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(t):e.setAttribute(t,r);break;case"popover":je("beforetoggle",e),je("toggle",e),ei(e,"popover",r);break;case"xlinkActuate":Pn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Pn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Pn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Pn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Pn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Pn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ei(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Wn.get(t)||t,ei(e,t,r))}}function Hu(e,n,t,r,l,s){switch(t){case"style":yl(e,r,s);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(a(61));if(t=r.__html,t!=null){if(l.children!=null)throw Error(a(60));e.innerHTML=t}}break;case"children":typeof r=="string"?nn(e,r):(typeof r=="number"||typeof r=="bigint")&&nn(e,""+r);break;case"onScroll":r!=null&&je("scroll",e);break;case"onScrollEnd":r!=null&&je("scrollend",e);break;case"onClick":r!=null&&(e.onclick=tn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fi.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),n=t.slice(2,l?t.length-7:void 0),s=e[un]||null,s=s!=null?s[t]:null,typeof s=="function"&&e.removeEventListener(n,s,l),typeof r=="function")){typeof s!="function"&&s!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,r,l);break e}t in e?e[t]=r:r===!0?e.setAttribute(t,""):ei(e,t,r)}}}function Ln(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":je("error",e),je("load",e);var r=!1,l=!1,s;for(s in t)if(t.hasOwnProperty(s)){var p=t[s];if(p!=null)switch(s){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Xe(e,n,s,p,t,null)}}l&&Xe(e,n,"srcSet",t.srcSet,t,null),r&&Xe(e,n,"src",t.src,t,null);return;case"input":je("invalid",e);var g=s=p=l=null,E=null,A=null;for(r in t)if(t.hasOwnProperty(r)){var V=t[r];if(V!=null)switch(r){case"name":l=V;break;case"type":p=V;break;case"checked":E=V;break;case"defaultChecked":A=V;break;case"value":s=V;break;case"defaultValue":g=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(a(137,n));break;default:Xe(e,n,r,V,t,null)}}cs(e,s,g,E,A,p,l,!1);return;case"select":je("invalid",e),r=p=s=null;for(l in t)if(t.hasOwnProperty(l)&&(g=t[l],g!=null))switch(l){case"value":s=g;break;case"defaultValue":p=g;break;case"multiple":r=g;default:Xe(e,n,l,g,t,null)}n=s,t=p,e.multiple=!!r,n!=null?wt(e,!!r,n,!1):t!=null&&wt(e,!!r,t,!0);return;case"textarea":je("invalid",e),s=l=r=null;for(p in t)if(t.hasOwnProperty(p)&&(g=t[p],g!=null))switch(p){case"value":r=g;break;case"defaultValue":l=g;break;case"children":s=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(a(91));break;default:Xe(e,n,p,g,t,null)}bl(e,r,l,s);return;case"option":for(E in t)if(t.hasOwnProperty(E)&&(r=t[E],r!=null))switch(E){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Xe(e,n,E,r,t,null)}return;case"dialog":je("beforetoggle",e),je("toggle",e),je("cancel",e),je("close",e);break;case"iframe":case"object":je("load",e);break;case"video":case"audio":for(r=0;r<La.length;r++)je(La[r],e);break;case"image":je("error",e),je("load",e);break;case"details":je("toggle",e);break;case"embed":case"source":case"link":je("error",e),je("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in t)if(t.hasOwnProperty(A)&&(r=t[A],r!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Xe(e,n,A,r,t,null)}return;default:if(Wi(n)){for(V in t)t.hasOwnProperty(V)&&(r=t[V],r!==void 0&&Hu(e,n,V,r,t,void 0));return}}for(g in t)t.hasOwnProperty(g)&&(r=t[g],r!=null&&Xe(e,n,g,r,t,null))}function mg(e,n,t,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,s=null,p=null,g=null,E=null,A=null,V=null;for(U in t){var P=t[U];if(t.hasOwnProperty(U)&&P!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":E=P;default:r.hasOwnProperty(U)||Xe(e,n,U,null,r,P)}}for(var O in r){var U=r[O];if(P=t[O],r.hasOwnProperty(O)&&(U!=null||P!=null))switch(O){case"type":s=U;break;case"name":l=U;break;case"checked":A=U;break;case"defaultChecked":V=U;break;case"value":p=U;break;case"defaultValue":g=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(a(137,n));break;default:U!==P&&Xe(e,n,O,U,r,P)}}q(e,p,g,E,A,V,s,l);return;case"select":U=p=g=O=null;for(s in t)if(E=t[s],t.hasOwnProperty(s)&&E!=null)switch(s){case"value":break;case"multiple":U=E;default:r.hasOwnProperty(s)||Xe(e,n,s,null,r,E)}for(l in r)if(s=r[l],E=t[l],r.hasOwnProperty(l)&&(s!=null||E!=null))switch(l){case"value":O=s;break;case"defaultValue":g=s;break;case"multiple":p=s;default:s!==E&&Xe(e,n,l,s,r,E)}n=g,t=p,r=U,O!=null?wt(e,!!t,O,!1):!!r!=!!t&&(n!=null?wt(e,!!t,n,!0):wt(e,!!t,t?[]:"",!1));return;case"textarea":U=O=null;for(g in t)if(l=t[g],t.hasOwnProperty(g)&&l!=null&&!r.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Xe(e,n,g,null,r,l)}for(p in r)if(l=r[p],s=t[p],r.hasOwnProperty(p)&&(l!=null||s!=null))switch(p){case"value":O=l;break;case"defaultValue":U=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(a(91));break;default:l!==s&&Xe(e,n,p,l,r,s)}Zi(e,O,U);return;case"option":for(var ce in t)if(O=t[ce],t.hasOwnProperty(ce)&&O!=null&&!r.hasOwnProperty(ce))switch(ce){case"selected":e.selected=!1;break;default:Xe(e,n,ce,null,r,O)}for(E in r)if(O=r[E],U=t[E],r.hasOwnProperty(E)&&O!==U&&(O!=null||U!=null))switch(E){case"selected":e.selected=O&&typeof O!="function"&&typeof O!="symbol";break;default:Xe(e,n,E,O,r,U)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _e in t)O=t[_e],t.hasOwnProperty(_e)&&O!=null&&!r.hasOwnProperty(_e)&&Xe(e,n,_e,null,r,O);for(A in r)if(O=r[A],U=t[A],r.hasOwnProperty(A)&&O!==U&&(O!=null||U!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(a(137,n));break;default:Xe(e,n,A,O,r,U)}return;default:if(Wi(n)){for(var Fe in t)O=t[Fe],t.hasOwnProperty(Fe)&&O!==void 0&&!r.hasOwnProperty(Fe)&&Hu(e,n,Fe,void 0,r,O);for(V in r)O=r[V],U=t[V],!r.hasOwnProperty(V)||O===U||O===void 0&&U===void 0||Hu(e,n,V,O,r,U);return}}for(var M in t)O=t[M],t.hasOwnProperty(M)&&O!=null&&!r.hasOwnProperty(M)&&Xe(e,n,M,null,r,O);for(P in r)O=r[P],U=t[P],!r.hasOwnProperty(P)||O===U||O==null&&U==null||Xe(e,n,P,O,r,U)}function bp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function pg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),r=0;r<t.length;r++){var l=t[r],s=l.transferSize,p=l.initiatorType,g=l.duration;if(s&&g&&bp(p)){for(p=0,g=l.responseEnd,r+=1;r<t.length;r++){var E=t[r],A=E.startTime;if(A>g)break;var V=E.transferSize,P=E.initiatorType;V&&bp(P)&&(E=E.responseEnd,p+=V*(E<g?1:(g-A)/(E-A)))}if(--r,n+=8*(s+p)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Vu=null,Gu=null;function po(e){return e.nodeType===9?e:e.ownerDocument}function yp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vp(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Yu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Iu=null;function hg(){var e=window.event;return e&&e.type==="popstate"?e===Iu?!1:(Iu=e,!0):(Iu=null,!1)}var xp=typeof setTimeout=="function"?setTimeout:void 0,_g=typeof clearTimeout=="function"?clearTimeout:void 0,wp=typeof Promise=="function"?Promise:void 0,gg=typeof queueMicrotask=="function"?queueMicrotask:typeof wp<"u"?function(e){return wp.resolve(null).then(e).catch(bg)}:xp;function bg(e){setTimeout(function(){throw e})}function ll(e){return e==="head"}function Sp(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"||t==="/&"){if(r===0){e.removeChild(l),Ci(n);return}r--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")r++;else if(t==="html")za(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,za(t);for(var s=t.firstChild;s;){var p=s.nextSibling,g=s.nodeName;s[Ht]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&s.rel.toLowerCase()==="stylesheet"||t.removeChild(s),s=p}}else t==="body"&&za(e.ownerDocument.body);t=l}while(t);Ci(n)}function Ep(e,n){var t=e;e=0;do{var r=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=r}while(t)}function qu(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":qu(t),Vt(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function yg(e,n,t,r){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ht])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var s=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=At(e.nextSibling),e===null)break}return null}function vg(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=At(e.nextSibling),e===null))return null;return e}function kp(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=At(e.nextSibling),e===null))return null;return e}function Pu(e){return e.data==="$?"||e.data==="$~"}function $u(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function xg(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var r=function(){n(),t.removeEventListener("DOMContentLoaded",r)};t.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function At(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Xu=null;function Np(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return At(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function Rp(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function Mp(e,n,t){switch(n=po(t),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function za(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Vt(e)}var Dt=new Map,jp=new Set;function ho(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Rr=Z.d;Z.d={f:wg,r:Sg,D:Eg,C:kg,L:Ng,m:Rg,X:jg,S:Mg,M:Tg};function wg(){var e=Rr.f(),n=io();return e||n}function Sg(e){var n=qn(e);n!==null&&n.tag===5&&n.type==="form"?$d(n):Rr.r(e)}var Ai=typeof document>"u"?null:document;function Tp(e,n,t){var r=Ai;if(r&&typeof n=="string"&&n){var l=Hn(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),jp.has(l)||(jp.add(l),e={rel:e,crossOrigin:t,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Ln(n,"link",e),Ze(n),r.head.appendChild(n)))}}function Eg(e){Rr.D(e),Tp("dns-prefetch",e,null)}function kg(e,n){Rr.C(e,n),Tp("preconnect",e,n)}function Ng(e,n,t){Rr.L(e,n,t);var r=Ai;if(r&&e&&n){var l='link[rel="preload"][as="'+Hn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+Hn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+Hn(t.imageSizes)+'"]')):l+='[href="'+Hn(e)+'"]';var s=l;switch(n){case"style":s=Di(e);break;case"script":s=Oi(e)}Dt.has(s)||(e=N({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Dt.set(s,e),r.querySelector(l)!==null||n==="style"&&r.querySelector(Ua(s))||n==="script"&&r.querySelector(Ha(s))||(n=r.createElement("link"),Ln(n,"link",e),Ze(n),r.head.appendChild(n)))}}function Rg(e,n){Rr.m(e,n);var t=Ai;if(t&&e){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+Hn(r)+'"][href="'+Hn(e)+'"]',s=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Oi(e)}if(!Dt.has(s)&&(e=N({rel:"modulepreload",href:e},n),Dt.set(s,e),t.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Ha(s)))return}r=t.createElement("link"),Ln(r,"link",e),Ze(r),t.head.appendChild(r)}}}function Mg(e,n,t){Rr.S(e,n,t);var r=Ai;if(r&&e){var l=Zn(r).hoistableStyles,s=Di(e);n=n||"default";var p=l.get(s);if(!p){var g={loading:0,preload:null};if(p=r.querySelector(Ua(s)))g.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Dt.get(s))&&Fu(e,t);var E=p=r.createElement("link");Ze(E),Ln(E,"link",e),E._p=new Promise(function(A,V){E.onload=A,E.onerror=V}),E.addEventListener("load",function(){g.loading|=1}),E.addEventListener("error",function(){g.loading|=2}),g.loading|=4,_o(p,n,r)}p={type:"stylesheet",instance:p,count:1,state:g},l.set(s,p)}}}function jg(e,n){Rr.X(e,n);var t=Ai;if(t&&e){var r=Zn(t).hoistableScripts,l=Oi(e),s=r.get(l);s||(s=t.querySelector(Ha(l)),s||(e=N({src:e,async:!0},n),(n=Dt.get(l))&&Ku(e,n),s=t.createElement("script"),Ze(s),Ln(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},r.set(l,s))}}function Tg(e,n){Rr.M(e,n);var t=Ai;if(t&&e){var r=Zn(t).hoistableScripts,l=Oi(e),s=r.get(l);s||(s=t.querySelector(Ha(l)),s||(e=N({src:e,async:!0,type:"module"},n),(n=Dt.get(l))&&Ku(e,n),s=t.createElement("script"),Ze(s),Ln(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},r.set(l,s))}}function Ap(e,n,t,r){var l=(l=Q.current)?ho(l):null;if(!l)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Di(t.href),t=Zn(l).hoistableStyles,r=t.get(n),r||(r={type:"style",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Di(t.href);var s=Zn(l).hoistableStyles,p=s.get(e);if(p||(l=l.ownerDocument||l,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,p),(s=l.querySelector(Ua(e)))&&!s._p&&(p.instance=s,p.state.loading=5),Dt.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Dt.set(e,t),s||Ag(l,e,t,p.state))),n&&r===null)throw Error(a(528,""));return p}if(n&&r!==null)throw Error(a(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Oi(t),t=Zn(l).hoistableScripts,r=t.get(n),r||(r={type:"script",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Di(e){return'href="'+Hn(e)+'"'}function Ua(e){return'link[rel="stylesheet"]['+e+"]"}function Dp(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function Ag(e,n,t,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Ln(n,"link",t),Ze(n),e.head.appendChild(n))}function Oi(e){return'[src="'+Hn(e)+'"]'}function Ha(e){return"script[async]"+e}function Op(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Hn(t.href)+'"]');if(r)return n.instance=r,Ze(r),r;var l=N({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Ze(r),Ln(r,"style",l),_o(r,t.precedence,e),n.instance=r;case"stylesheet":l=Di(t.href);var s=e.querySelector(Ua(l));if(s)return n.state.loading|=4,n.instance=s,Ze(s),s;r=Dp(t),(l=Dt.get(l))&&Fu(r,l),s=(e.ownerDocument||e).createElement("link"),Ze(s);var p=s;return p._p=new Promise(function(g,E){p.onload=g,p.onerror=E}),Ln(s,"link",r),n.state.loading|=4,_o(s,t.precedence,e),n.instance=s;case"script":return s=Oi(t.src),(l=e.querySelector(Ha(s)))?(n.instance=l,Ze(l),l):(r=t,(l=Dt.get(s))&&(r=N({},t),Ku(r,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ze(l),Ln(l,"link",r),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,_o(r,t.precedence,e));return n.instance}function _o(e,n,t){for(var r=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,s=l,p=0;p<r.length;p++){var g=r[p];if(g.dataset.precedence===n)s=g;else if(s!==l)break}s?s.parentNode.insertBefore(e,s.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function Fu(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Ku(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var go=null;function Cp(e,n,t){if(go===null){var r=new Map,l=go=new Map;l.set(t,r)}else l=go,r=l.get(t),r||(r=new Map,l.set(t,r));if(r.has(e))return r;for(r.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var s=t[l];if(!(s[Ht]||s[cn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var p=s.getAttribute(n)||"";p=e+p;var g=r.get(p);g?g.push(s):r.set(p,[s])}}return r}function Lp(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Dg(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Bp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Og(e,n,t,r){if(t.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Di(r.href),s=n.querySelector(Ua(l));if(s){n=s._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=bo.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=s,Ze(s);return}s=n.ownerDocument||n,r=Dp(r),(l=Dt.get(l))&&Fu(r,l),s=s.createElement("link"),Ze(s);var p=s;p._p=new Promise(function(g,E){p.onload=g,p.onerror=E}),Ln(s,"link",r),t.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=bo.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var Qu=0;function Cg(e,n){return e.stylesheets&&e.count===0&&vo(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var r=setTimeout(function(){if(e.stylesheets&&vo(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+n);0<e.imgBytes&&Qu===0&&(Qu=62500*pg());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&vo(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Qu?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function bo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yo=null;function vo(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yo=new Map,n.forEach(Lg,e),yo=null,bo.call(e))}function Lg(e,n){if(!(n.state.loading&4)){var t=yo.get(e);if(t)var r=t.get(null);else{t=new Map,yo.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<l.length;s++){var p=l[s];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(t.set(p.dataset.precedence,p),r=p)}r&&t.set(null,r)}l=n.instance,p=l.getAttribute("data-precedence"),s=t.get(p)||r,s===r&&t.set(null,l),t.set(p,l),this.count++,r=bo.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),s?s.parentNode.insertBefore(l,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var Va={$$typeof:ie,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function Bg(e,n,t,r,l,s,p,g,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ft(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ft(0),this.hiddenUpdates=Ft(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=s,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function zp(e,n,t,r,l,s,p,g,E,A,V,P){return e=new Bg(e,n,t,p,E,A,V,P,g),n=1,s===!0&&(n|=24),s=ft(3,null,null,n),e.current=s,s.stateNode=e,n=jc(),n.refCount++,e.pooledCache=n,n.refCount++,s.memoizedState={element:r,isDehydrated:t,cache:n},Oc(s),e}function Up(e){return e?(e=ui,e):ui}function Hp(e,n,t,r,l,s){l=Up(l),r.context===null?r.context=l:r.pendingContext=l,r=Xr(n),r.payload={element:t},s=s===void 0?null:s,s!==null&&(r.callback=s),t=Fr(e,r,n),t!==null&&(rt(t,e,n),ba(t,e,n))}function Vp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Zu(e,n){Vp(e,n),(e=e.alternate)&&Vp(e,n)}function Gp(e){if(e.tag===13||e.tag===31){var n=Ol(e,67108864);n!==null&&rt(n,e,67108864),Zu(e,67108864)}}function Yp(e){if(e.tag===13||e.tag===31){var n=_t();n=Lr(n);var t=Ol(e,n);t!==null&&rt(t,e,n),Zu(e,n)}}var xo=!0;function zg(e,n,t,r){var l=z.T;z.T=null;var s=Z.p;try{Z.p=2,Wu(e,n,t,r)}finally{Z.p=s,z.T=l}}function Ug(e,n,t,r){var l=z.T;z.T=null;var s=Z.p;try{Z.p=8,Wu(e,n,t,r)}finally{Z.p=s,z.T=l}}function Wu(e,n,t,r){if(xo){var l=Ju(r);if(l===null)Uu(e,n,r,wo,t),qp(e,r);else if(Vg(l,e,n,t,r))r.stopPropagation();else if(qp(e,r),n&4&&-1<Hg.indexOf(e)){for(;l!==null;){var s=qn(l);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var p=Mn(s.pendingLanes);if(p!==0){var g=s;for(g.pendingLanes|=2,g.entangledLanes|=2;p;){var E=1<<31-Rn(p);g.entanglements[1]|=E,p&=~E}tr(s),(He&6)===0&&(ro=yn()+500,Ca(0))}}break;case 31:case 13:g=Ol(s,2),g!==null&&rt(g,s,2),io(),Zu(s,2)}if(s=Ju(r),s===null&&Uu(e,n,r,wo,t),s===l)break;l=s}l!==null&&r.stopPropagation()}else Uu(e,n,r,null,t)}}function Ju(e){return e=Ji(e),ef(e)}var wo=null;function ef(e){if(wo=null,e=Kt(e),e!==null){var n=d(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=h(n),e!==null)return e;e=null}else if(t===31){if(e=_(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return wo=e,null}function Ip(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dl()){case ml:return 2;case Pi:return 8;case pl:case Qn:return 32;case lt:return 268435456;default:return 32}default:return 32}}var nf=!1,il=null,al=null,sl=null,Ga=new Map,Ya=new Map,ol=[],Hg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qp(e,n){switch(e){case"focusin":case"focusout":il=null;break;case"dragenter":case"dragleave":al=null;break;case"mouseover":case"mouseout":sl=null;break;case"pointerover":case"pointerout":Ga.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ya.delete(n.pointerId)}}function Ia(e,n,t,r,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:s,targetContainers:[l]},n!==null&&(n=qn(n),n!==null&&Gp(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Vg(e,n,t,r,l){switch(n){case"focusin":return il=Ia(il,e,n,t,r,l),!0;case"dragenter":return al=Ia(al,e,n,t,r,l),!0;case"mouseover":return sl=Ia(sl,e,n,t,r,l),!0;case"pointerover":var s=l.pointerId;return Ga.set(s,Ia(Ga.get(s)||null,e,n,t,r,l)),!0;case"gotpointercapture":return s=l.pointerId,Ya.set(s,Ia(Ya.get(s)||null,e,n,t,r,l)),!0}return!1}function Pp(e){var n=Kt(e.target);if(n!==null){var t=d(n);if(t!==null){if(n=t.tag,n===13){if(n=h(t),n!==null){e.blockedOn=n,Xi(e.priority,function(){Yp(t)});return}}else if(n===31){if(n=_(t),n!==null){e.blockedOn=n,Xi(e.priority,function(){Yp(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function So(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ju(e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);sr=r,t.target.dispatchEvent(r),sr=null}else return n=qn(t),n!==null&&Gp(n),e.blockedOn=t,!1;n.shift()}return!0}function $p(e,n,t){So(e)&&t.delete(n)}function Gg(){nf=!1,il!==null&&So(il)&&(il=null),al!==null&&So(al)&&(al=null),sl!==null&&So(sl)&&(sl=null),Ga.forEach($p),Ya.forEach($p)}function Eo(e,n){e.blockedOn===n&&(e.blockedOn=null,nf||(nf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Gg)))}var ko=null;function Xp(e){ko!==e&&(ko=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ko===e&&(ko=null);for(var n=0;n<e.length;n+=3){var t=e[n],r=e[n+1],l=e[n+2];if(typeof r!="function"){if(ef(r||t)===null)continue;break}var s=qn(t);s!==null&&(e.splice(n,3),n-=3,Jc(s,{pending:!0,data:l,method:t.method,action:r},r,l))}}))}function Ci(e){function n(E){return Eo(E,e)}il!==null&&Eo(il,e),al!==null&&Eo(al,e),sl!==null&&Eo(sl,e),Ga.forEach(n),Ya.forEach(n);for(var t=0;t<ol.length;t++){var r=ol[t];r.blockedOn===e&&(r.blockedOn=null)}for(;0<ol.length&&(t=ol[0],t.blockedOn===null);)Pp(t),t.blockedOn===null&&ol.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(r=0;r<t.length;r+=3){var l=t[r],s=t[r+1],p=l[un]||null;if(typeof s=="function")p||Xp(t);else if(p){var g=null;if(s&&s.hasAttribute("formAction")){if(l=s,p=s[un]||null)g=p.formAction;else if(ef(l)!==null)continue}else g=p.action;typeof g=="function"?t[r+1]=g:(t.splice(r,3),r-=3),Xp(t)}}}function Fp(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(p){return l=p})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(t,20)}function t(){if(!r&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function tf(e){this._internalRoot=e}No.prototype.render=tf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var t=n.current,r=_t();Hp(t,r,e,n,null,null)},No.prototype.unmount=tf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Hp(e.current,2,null,e,null,null),io(),n[jn]=null}};function No(e){this._internalRoot=e}No.prototype.unstable_scheduleHydration=function(e){if(e){var n=on();e={blockedOn:null,target:e,priority:n};for(var t=0;t<ol.length&&n!==0&&n<ol[t].priority;t++);ol.splice(t,0,e),t===0&&Pp(e)}};var Kp=i.version;if(Kp!=="19.2.7")throw Error(a(527,Kp,"19.2.7"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=y(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Yg={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{hl=Ro.inject(Yg),vn=Ro}catch{}}return Pa.createRoot=function(e,n){if(!u(e))throw Error(a(299));var t=!1,r="",l=tm,s=rm,p=lm;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),n=zp(e,1,!1,null,null,t,r,null,l,s,p,Fp),e[jn]=n.current,zu(e),new tf(n)},Pa.hydrateRoot=function(e,n,t){if(!u(e))throw Error(a(299));var r=!1,l="",s=tm,p=rm,g=lm,E=null;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(p=t.onCaughtError),t.onRecoverableError!==void 0&&(g=t.onRecoverableError),t.formState!==void 0&&(E=t.formState)),n=zp(e,1,!0,n,t??null,r,l,E,s,p,g,Fp),n.context=Up(null),t=n.current,r=_t(),r=Lr(r),l=Xr(r),l.callback=null,Fr(t,l,r),t=r,n.current.lanes=t,_l(n,t),tr(n),e[jn]=n.current,zu(e),new No(n)},Pa.version="19.2.7",Pa}var ih;function e0(){if(ih)return af.exports;ih=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(i){console.error(i)}}return o(),af.exports=Jg(),af.exports}var n0=e0();const t0=Wh(n0),ah=o=>{let i;const c=new Set,a=(y,x)=>{const N=typeof y=="function"?y(i):y;if(!Object.is(N,i)){const R=i;i=x??(typeof N!="object"||N===null)?N:Object.assign({},i,N),c.forEach($=>$(i,R))}},u=()=>i,_={setState:a,getState:u,getInitialState:()=>v,subscribe:y=>(c.add(y),()=>c.delete(y))},v=i=o(a,u,_);return _},r0=(o=>o?ah(o):ah),l0=o=>o;function i0(o,i=l0){const c=Wa.useSyncExternalStore(o.subscribe,Wa.useCallback(()=>i(o.getState()),[o,i]),Wa.useCallback(()=>i(o.getInitialState()),[o,i]));return Wa.useDebugValue(c),c}const sh=o=>{const i=r0(o),c=a=>i0(i,a);return Object.assign(c,i),c},a0=(o=>o?sh(o):sh);function s0(){const o=new Uint8Array(16);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(o);else for(let c=0;c<o.length;c+=1)o[c]=Math.floor(Math.random()*256);let i="";for(const c of o)i+=c.toString(16).padStart(2,"0");return i}const Lf="pkp.user",Bf="pkp.savedDevices",zf="pkp.ideDrafts",Uf="pkp.ideSettings",ns="Prototype Version 0.6.7";function Uo(o){try{const i=localStorage.getItem(o);return i?JSON.parse(i):null}catch{return null}}function Ho(o,i){try{localStorage.setItem(o,JSON.stringify(i))}catch{}}function o0(){const o=Uo(Lf);return o&&typeof o.username=="string"&&typeof o.userID=="string"?o:null}function uf(o){Ho(Lf,o)}function Hf(){return Uo(Bf)??[]}function ts(o){Ho(Bf,o)}function c0(){ts([])}function u0(){try{localStorage.removeItem(Lf),localStorage.removeItem(Bf),localStorage.removeItem(zf),localStorage.removeItem(Uf)}catch{}}function ff(){var o;return((o=Uo(zf))==null?void 0:o.filter(i=>i.path&&typeof i.content=="string"))??[]}function df(o){Ho(zf,o)}function oh(){const o=Uo(Uf)??{};return{clearTerminalOnRun:!!o.clearTerminalOnRun,simplifiedErrors:o.simplifiedErrors!==!1}}function f0(o){Ho(Uf,o)}function mf(o){const i=Hf(),c=i.findIndex(a=>a.deviceID===o.deviceID);return c>=0?i[c]=o:i.push(o),ts(i),i}function d0(o){const i=Hf().filter(c=>c.deviceID!==o);return ts(i),i}const Sf="b8e06067-62ad-41ba-9231-206ae80ab551",m0="f897177b-aee8-4767-8ecc-cc694fd5fce0",p0="f897177b-aee8-4767-8ecc-cc694fd5fce1",pf=20,h0=12,_0=new TextEncoder,g0=new TextDecoder;function b0(o){return new Promise(i=>setTimeout(i,o))}function Vo(){return typeof navigator<"u"&&"bluetooth"in navigator}function Ef(o){return o?o.startsWith("PicoW-")?o.slice(6):o:"Pico"}async function y0(){if(!Vo())throw new Error("Web Bluetooth er ikke tilgængelig i denne browser.");return navigator.bluetooth.requestDevice({filters:[{services:[Sf]},{namePrefix:"PicoW-"}],optionalServices:[Sf]})}async function Jh(){if(!Vo()||!navigator.bluetooth.getDevices)return[];try{return await navigator.bluetooth.getDevices()}catch{return[]}}class v0{constructor(){ue(this,"device",null);ue(this,"writeChar",null);ue(this,"notifyChar",null);ue(this,"buffer","");ue(this,"writeQueue",Promise.resolve());ue(this,"disconnectNotified",!1);ue(this,"onLine",()=>{});ue(this,"onDisconnect",()=>{});ue(this,"handleNotification",i=>{const c=i.target;if(!(c!=null&&c.value))return;this.buffer+=g0.decode(c.value.buffer);let a=this.buffer.indexOf(`
`);for(;a>=0;){const u=this.buffer.slice(0,a).trim();this.buffer=this.buffer.slice(a+1),u&&this.onLine(u),a=this.buffer.indexOf(`
`)}});ue(this,"handleDisconnected",()=>{var i;this.disconnectNotified||(this.disconnectNotified=!0,(i=this.device)==null||i.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.writeChar=null,this.notifyChar=null,this.onDisconnect())})}get connected(){var i,c;return!!((c=(i=this.device)==null?void 0:i.gatt)!=null&&c.connected)}async connect(i){var u;this.device&&this.device!==i&&this.device.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.device=i,this.buffer="",this.disconnectNotified=!1,i.removeEventListener("gattserverdisconnected",this.handleDisconnected),i.addEventListener("gattserverdisconnected",this.handleDisconnected);const c=await((u=i.gatt)==null?void 0:u.connect());if(!c)throw new Error("Kunne ikke åbne Bluetooth-forbindelsen.");const a=await c.getPrimaryService(Sf);this.writeChar=await a.getCharacteristic(m0),this.notifyChar=await a.getCharacteristic(p0),await this.notifyChar.startNotifications(),this.notifyChar.addEventListener("characteristicvaluechanged",this.handleNotification)}writeLine(i){const c=this.writeQueue.then(()=>this.doWrite(i));return this.writeQueue=c.catch(()=>{}),c}async doWrite(i){if(!this.writeChar)throw new Error("Ingen forbindelse.");const c=_0.encode(`${i}
`),u=this.writeChar.properties.writeWithoutResponse&&typeof this.writeChar.writeValueWithoutResponse=="function"?this.writeChar.writeValueWithoutResponse.bind(this.writeChar):this.writeChar.writeValue.bind(this.writeChar);for(let d=0;d<c.length;d+=pf){const h=c.slice(d,d+pf);await u(h),d+pf<c.length&&await b0(h0)}}disconnect(){var c;const i=this.device;(c=i==null?void 0:i.gatt)!=null&&c.connected?i.gatt.disconnect():this.handleDisconnected()}}class x0{constructor(i,c){ue(this,"send");ue(this,"onMessage");ue(this,"inActive",!1);ue(this,"inExpectedTotal",0);ue(this,"inStreamId",0);ue(this,"inParts",new Map);ue(this,"inProgress",null);ue(this,"outPendingLines",null);ue(this,"outWaitingAck",!1);ue(this,"outStreamId",0);ue(this,"outNextStreamId",1);ue(this,"outCache",new Map);ue(this,"outProgress",null);ue(this,"outResolve",null);ue(this,"outReject",null);this.send=i,this.onMessage=c}reset(){this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear(),this.inProgress=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outStreamId=0,this.outCache.clear(),this.outProgress=null,this.outResolve=null,this.outReject=null}handleLine(i){var a;if(i.startsWith("prep,")){const u=i.split(","),d=u.length>=2&&/^\d+$/.test(u[1])?parseInt(u[1],10):null,h=u.length>=3&&/^\d+$/.test(u[2])?parseInt(u[2],10):0;d!==null&&d>0&&(this.inActive=!0,this.inExpectedTotal=d,this.inStreamId=h,this.inParts.clear(),this.send(h>0?`ack:prep,${h}`:"ack:prep"));return}if(i==="ack:prep"||i===`ack:prep,${this.outStreamId}`){this.flushOutbound();return}if(i.startsWith("miss,")){const u=i.split(",");if(u.length>=3&&/^\d+$/.test(u[1])&&/^\d+$/.test(u[2])){const d=parseInt(u[1],10),h=parseInt(u[2],10),_=this.outCache.get(h);d===this.outStreamId&&_&&this.send(_)}return}const c=this.parseNumbered(i);if(c){const{idx:u,payload:d}=c;if(!this.inActive){this.onMessage(d);return}this.inParts.has(u)||(this.inParts.set(u,d),(a=this.inProgress)==null||a.call(this,this.inParts.size,this.inExpectedTotal));let h=0;for(let _=1;_<=this.inExpectedTotal;_+=1)if(!this.inParts.has(_)){h=_;break}if(h>0&&this.inStreamId>0&&u>h&&this.send(`miss,${this.inStreamId},${h}`),this.inParts.size>=this.inExpectedTotal){for(let _=1;_<=this.inExpectedTotal;_+=1){const v=this.inParts.get(_);v!==void 0&&this.onMessage(v)}this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear()}return}this.onMessage(i)}setInboundProgress(i){this.inProgress=i}async sendReliable(i,c){if(this.outPendingLines!==null||this.outWaitingAck)throw new Error("Reliable stream is already sending.");const a=i.length===0?[""]:i;this.outPendingLines=[...a],this.outWaitingAck=!0,this.outProgress=c??null,this.outStreamId=this.outNextStreamId,this.outNextStreamId+=1,this.outCache.clear();const u=new Promise((d,h)=>{this.outResolve=d,this.outReject=h});try{await this.send(`prep,${a.length},${this.outStreamId}`)}catch(d){throw this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null,d}await u}async flushOutbound(){var i,c,a,u;if(!this.outWaitingAck||this.outPendingLines===null){this.outWaitingAck=!1,this.outProgress=null,(i=this.outResolve)==null||i.call(this),this.outResolve=null,this.outReject=null;return}try{const d=this.outPendingLines.length;for(let h=0;h<d;h+=1){const _=this.outPendingLines[h],v=`${h+1}-${_}`;this.outCache.set(h+1,v),await this.send(v),(c=this.outProgress)==null||c.call(this,h+1,d,_)}(a=this.outResolve)==null||a.call(this)}catch(d){(u=this.outReject)==null||u.call(this,d)}finally{this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null}}parseNumbered(i){const c=i.indexOf("-");if(c<=0)return null;const a=i.slice(0,c);if(!/^\d+$/.test(a))return null;const u=parseInt(a,10);return u<1?null:{idx:u,payload:i.slice(c+1)}}}const Yi=11,rs=31,w0=2,S0=60,Hi=4,Vi=40;function E0(o,i){return Math.max(14,Math.min(56,Math.min(o,i)*.05))}function e_(o,i,c=Yi,a=rs){const u=E0(o,i),d=Math.max(1,o-2*u),h=Math.max(1,i-2*u);return{areaW:o,areaH:i,cols:c,rows:a,margin:u,stepX:d/Math.max(1,c-1),stepY:h/Math.max(1,a-1)}}function n_(o,i){return i.margin+o/2*i.stepX}function t_(o,i){const c=i.margin+o/2*i.stepY;return i.areaH-c}function Ja(o,i){return o.centerX2===null||o.centerY2===null||o.spanX===null||o.spanY===null?null:{cx:n_(o.centerX2,i),cy:t_(o.centerY2,i),width:o.spanX*i.stepX,height:o.spanY*i.stepY}}function k0(o){const i=[];for(let c=0;c<o.cols;c+=1)for(let a=0;a<o.rows;a+=1)i.push({x:o.margin+c*o.stepX,y:o.areaH-(o.margin+a*o.stepY)});return i}function To(o,i,c,a,u){const d=(v,y,x,N)=>{const R=y%2,$=N*2;let I=R,J=1/0;for(let K=R;K<=$;K+=2){const G=Math.abs(x(K)-v);G<J&&(J=G,I=K)}return Math.max(y,Math.min($-y,I))},h=d(o,c,v=>n_(v,u),u.cols-1),_=d(i,a,v=>t_(v,u),u.rows-1);return{centerX2:h,centerY2:_}}const Fl=6e3,N0=15,Co=[32,64,128,192],R0=Fl*10,M0=3500,j0=8e3,T0=2,A0=Fl,D0=Fl*8;function hf(o){return new Promise(i=>setTimeout(i,o))}function Li(o){if(o!=null&&o.aborted)throw new DOMException("BLE file read cancelled","AbortError")}function ch(o){return o instanceof DOMException&&o.name==="AbortError"}function ul(o){return o.replace(/[\r\n,]/g," ").trim()}class O0{constructor(i={}){ue(this,"transport",new v0);ue(this,"stream");ue(this,"events");ue(this,"waiters",[]);ue(this,"collectingLayout",!1);ue(this,"layoutBuffer",[]);ue(this,"layoutResolve",null);ue(this,"collectingLines",!1);ue(this,"lineBuffer",[]);ue(this,"lineResolve",null);ue(this,"lineReject",null);ue(this,"lineCollectId",0);ue(this,"controlPumpActive",!1);ue(this,"pendingButtons",[]);ue(this,"pendingSliders",new Map);ue(this,"pendingToggles",new Map);ue(this,"pendingJoysticks",new Map);ue(this,"pendingDpads",[]);ue(this,"expectingDisconnect",!1);ue(this,"disconnectMessage",null);ue(this,"busy",!1);ue(this,"fsCapabilities",null);this.events=i,this.stream=new x0(c=>this.transport.writeLine(c),c=>this.onDeviceMessage(c)),this.transport.onLine=c=>this.stream.handleLine(c),this.transport.onDisconnect=()=>this.handleDisconnect()}get device(){return this.transport.device}get deviceName(){var i;return Ef((i=this.transport.device)==null?void 0:i.name)}get connected(){return this.transport.connected}setBusy(i){if(this.busy=i,i){this.pendingButtons=[],this.pendingSliders.clear(),this.pendingToggles.clear(),this.pendingJoysticks.clear(),this.pendingDpads=[];return}this.pumpControls()}log(i,c){var a,u;(u=(a=this.events).onLog)==null||u.call(a,i,c)}progress(i,c){var a,u;(u=(a=this.events).onProgress)==null||u.call(a,i,c)}onDeviceMessage(i){var a,u;if(i==="disconnect"||i==="disconnect_private"){const d=i==="disconnect_private"?"Du blev afbrudt, fordi enheden er privat, og andre brugere ikke må forbinde.":"Enheden afbrød forbindelsen.";this.disconnectMessage=d,this.log("warning",d),this.expectingDisconnect=!0,this.transport.disconnect();return}if(this.collectingLines){if(i==="__END__"){const d=this.lineBuffer;this.lineBuffer=[],this.collectingLines=!1,(a=this.lineResolve)==null||a.call(this,d),this.lineResolve=null;return}this.lineBuffer.push(i);return}if(this.collectingLayout){if(i==="__END__"){const d=this.layoutBuffer;this.layoutBuffer=[],this.collectingLayout=!1,(u=this.layoutResolve)==null||u.call(this,d),this.layoutResolve=null;return}!i.startsWith("ACK")&&!i.startsWith("ERR")&&!i.startsWith("#VERSION")?this.layoutBuffer.push(i):i.startsWith("#VERSION")&&this.layoutBuffer.push(i);return}i.startsWith("ERR")?this.log("error",i):i.startsWith("radar,")?this.handleRadarLine(i):i.startsWith("text,")?this.handleTextLine(i):i.startsWith("toggle_state,")?this.handleToggleStateLine(i):i.startsWith("ACK")||i==="LAYOUT_SAVED"||i.startsWith("READY")?this.log("success",i):this.log("info",`rx: ${i}`);const c=this.waiters.findIndex(d=>d.match(i));if(c>=0){const d=this.waiters[c];this.waiters.splice(c,1),clearTimeout(d.timer),d.resolve(i)}}waitFor(i,c,a){return new Promise((u,d)=>{const h=setTimeout(()=>{const _=this.waiters.findIndex(v=>v.timer===h);_>=0&&this.waiters.splice(_,1),d(new Error(`Timeout: ${a}`))},c);this.waiters.push({match:i,resolve:u,reject:d,timer:h})})}async collectLines(i,c,a,u,d){Li(u);const h=this.lineCollectId+1;this.lineCollectId=h,this.collectingLines=!0,this.lineBuffer=[],this.stream.setInboundProgress(d??null);const _=new Promise((v,y)=>{let x=!1;const N=()=>this.lineCollectId===h,R=()=>{x=!0,N()&&(this.lineReject=null,this.stream.setInboundProgress(null)),u==null||u.removeEventListener("abort",I)},$=G=>{x||(clearTimeout(J),N()&&(this.collectingLines=!1,this.lineBuffer=[],this.lineResolve=null),R(),y(G))},I=()=>{$(new DOMException("BLE file read cancelled","AbortError"))},J=setTimeout(()=>{N()&&$(new Error(`Timeout: ${a}`))},c);this.lineResolve=v,this.lineReject=$;const K=this.lineResolve;this.lineResolve=G=>{N()&&(clearTimeout(J),R(),K==null||K(G))},u==null||u.addEventListener("abort",I,{once:!0})});return await this.transport.writeLine(i),_}async exchange(i,c,a,u=3){let d;for(let h=1;h<=u;h+=1)try{return await this.transport.writeLine(i),await this.waitFor(c,Fl,a)}catch(_){d=_,this.log("warning",`${a}: forsøg ${h}/${u} mislykkedes`)}throw d instanceof Error?d:new Error(`Failed: ${a}`)}async connect(i){this.expectingDisconnect=!1,this.stream.reset(),this.progress(5,"Forbinder til Bluetooth..."),await this.transport.connect(i)}async runHandshake(i){var ie;await hf(350),this.progress(18,"Klargør forbindelse..."),this.progress(26,"Sender HELLO..."),await this.exchange("HELLO",le=>le==="ACK:HELLO","HELLO"),this.progress(34,"Forbindelse bekræftet"),this.progress(44,"Spørger om ejerskab...");const c=await this.exchange("who_are_you",le=>le==="unowned"||le.startsWith("owned,"),"who_are_you");if(this.progress(56,"Ejerskab modtaget"),c==="unowned")return{kind:"unowned"};const a=c.split(","),u=a[1]??"",d=a[2]!==void 0&&parseInt(a[2],10)||0,h=a[3]!==void 0?parseInt(a[3],10)===1:!0,_=a[4]!==void 0?parseInt(a[4],10)===1:!1,v=a.length>=7,y=v?parseInt(a[5]??"0",10)===1:_,x=((ie=a[v?6:5])==null?void 0:ie.trim())||void 0;await this.exchange("ACK:ownership",le=>le==="READY:permission","ACK:ownership",1),this.progress(66,"Anmoder om adgang...");const N=await this.exchange(`request_permission,${i.userID},${ul(i.username)}`,le=>le.startsWith("perm,"),"request_permission");this.progress(76,"Adgang vurderet");const R=N.split(",").filter(le=>/^\d+$/.test(le)),$=R.length>=1?parseInt(R[0]??"0",10):0,I=R.length>=2?parseInt(R[1]??"0",10):0,J=R.length>=3?parseInt(R[2]??"0",10):I;if($===0)return this.expectingDisconnect=!0,this.disconnectMessage="Du kan ikke forbinde, fordi enheden er privat, og andre brugere ikke må forbinde.",{kind:"denied",ownerName:x,canOthersConnect:h};const K=i.userID===u,G=I===1||K,H=J===1||K;return await this.transport.writeLine("ACK:permission"),{kind:"owned",ownerID:u,ownerName:x,iconID:d,canEdit:G,canEditCode:H,isOwnedByMe:K,canOthersConnect:h,canOthersEdit:_,canOthersEditCode:y}}async create(i,c,a,u,d,h,_){const v=a?1:0,y=a&&u?1:0,x=a&&d?1:0;await this.exchange(`create,${i.userID},${ul(i.username)},${c},${v},${y},${x},${h},${_}`,N=>N==="ACK:create","create")}async updateDeviceSettings(i,c,a,u,d,h,_){const v=c?1:0,y=c&&a?1:0,x=c&&u?1:0;await this.exchange(`settings_update,${i},${v},${y},${x},${d},${h},${ul(_??"")}`,N=>N==="ACK:settings_update","settings_update",3)}async requestLayout(){this.progress(84,"Henter kontrolpanel..."),this.collectingLayout=!0,this.layoutBuffer=[];const i=new Promise((a,u)=>{this.layoutResolve=a;const d=setTimeout(()=>{this.collectingLayout&&(this.collectingLayout=!1,this.layoutResolve=null,u(new Error("Timeout: layout")))},Fl*2),h=this.layoutResolve;this.layoutResolve=_=>{clearTimeout(d),h==null||h(_)}});await this.transport.writeLine("request"),this.progress(92,"Modtager kontrolpanel...");const c=await i;return this.progress(100,"Klar"),c}async saveLayout(i){await this.exchange("update",u=>u==="ACK:update","update",3).catch(()=>{this.log("warning","ACK:update udeblev (fortsætter).")});const c=i.map(u=>{const d=_=>_===null?"n":String(_),h=`update,${u.type},${u.name},${d(u.centerX2)},${d(u.centerY2)},${d(u.spanX)},${d(u.spanY)},${u.rotation}`;return u.type==="slider"?`${h},${u.sliderMin??0},${u.sliderMax??100},${u.sliderRecenter??"none"}`:u.type==="toggle"?`${h},${u.toggleInitial?1:0}`:u.type==="radar"?[h,u.radarMinAngle??0,u.radarMaxAngle??180,u.radarMaxDistance??200,u.radarFadeMs??1200].join(","):u.type==="joystick"?[h,u.joystickXMin??-100,u.joystickXMax??100,u.joystickYMin??-100,u.joystickYMax??100,u.joystickXRecenter??"middle",u.joystickYRecenter??"middle"].join(","):h});c.push("__END__");const a=this.waitFor(u=>u==="LAYOUT_SAVED",Fl*2,"LAYOUT_SAVED");await this.stream.sendReliable(c),await a}async listFiles(i="/"){return(await this.collectLines(`fs_list,${ul(i)}`,Fl*3,"fs_list")).filter(a=>a.startsWith("fs_entry,")).map(a=>{const[,u,d,h]=a.split(","),_=u==="file"||u==="dir"?u:"unknown",v=parseInt(h??"",10),y=d||"/";return{name:y.split("/").filter(Boolean).pop()??y,path:y,type:_,...Number.isFinite(v)&&v>=0?{size:v}:{}}})}handleRadarLine(i){var h,_,v;const c=i.split(",");if(c.length<4)return;const a=(h=c[1])==null?void 0:h.trim(),u=parseFloat(c[2]??""),d=parseFloat(c[3]??"");!a||!Number.isFinite(u)||!Number.isFinite(d)||((v=(_=this.events).onRadar)==null||v.call(_,a,u,d),this.log("info",`rx: ${i}`))}handleTextLine(i){var _,v;const c=i.indexOf(","),a=c>=0?i.indexOf(",",c+1):-1;if(c<0||a<0)return;const u=i.slice(c+1,a),d=i.slice(a+1),h=u==null?void 0:u.trim();h&&((v=(_=this.events).onText)==null||v.call(_,h,d),this.log("info",`rx: ${i}`))}handleToggleStateLine(i){var d,h,_;const c=i.split(",");if(c.length<3)return;const a=(d=c[1])==null?void 0:d.trim(),u=parseInt(c[2]??"",10);!a||!Number.isFinite(u)||((_=(h=this.events).onToggleState)==null||_.call(h,a,u===1),this.log("info",`rx: ${i}`))}async readText(i,c,a){c==null||c(4,"Validerer Picoens Bluetooth-filsystem...");const u=await this.getFilesystemCapabilities(a);if(u.streamRead)try{return await this.readTextStream(i,u,c,a)}catch(d){if(a!=null&&a.aborted||ch(d)||!u.pageRead)throw d;this.log("warning",d instanceof Error?`fs_read_stream fejlede; bruger paged read: ${d.message}`:"fs_read_stream fejlede; bruger paged read")}return this.readTextPaged(i,c,a)}async getFilesystemCapabilities(i){if(this.fsCapabilities)return this.fsCapabilities;const c=await this.collectLines("fs_capabilities",A0,"fs_capabilities",i),a=c.find(x=>x.startsWith("ERR"));if(a)throw new Error(a);const u=c.find(x=>x.startsWith("fs_capabilities,"));if(!u)throw new Error("Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.");const d=u.split(","),h=new Map;for(let x=1;x<d.length-1;x+=2)h.set(d[x],d[x+1]);const _=parseInt(h.get("max_page")??"",10),v=parseInt(h.get("stream_chunk")??"",10),y={version:h.get("version")||void 0,pageRead:h.get("page_read")==="1",maxPageSize:Number.isFinite(_)&&_>0?_:32,streamRead:h.get("stream_read")==="1",streamChunkSize:Number.isFinite(v)&&v>0?v:128};if(!y.pageRead&&!y.streamRead)throw new Error("Picoens Bluetooth-runtime meldte, at file-read ikke er understøttet.");return this.fsCapabilities=y,y}async readTextPaged(i,c,a){const u=await this.getFilesystemCapabilities(a);let d=0,h=C0(u.maxPageSize),_=0,v=null,y="";const x=`Indlæser ${_f(i)}...`;Li(a),c==null||c(5,x);for(let N=0;N<512;N+=1){Li(a),_===0&&(c==null||c(7,x));const $=await this.readPageWithRetry(i,_,d,h,a),I=$.lines;d=$.nextPageSizeIndex,h=$.maxPageSizeIndex,Li(a);const J=I.find(ee=>ee.startsWith("ERR"));if(J)throw new Error(J);const K=I.find(ee=>ee.startsWith("fs_page,"));if(!K)throw new Error("ERR: fs_read_page missing data");const[,G,H,ie,le=""]=K.split(",",5);if(G!==i)throw new Error("ERR: fs_read_page stale data");const se=parseInt(H??"",10),he=parseInt(ie??"",10);if(!Number.isFinite(se)||se!==_||!Number.isFinite(he))throw new Error("ERR: fs_read_page invalid data");v=he,y+=le,_+=Math.floor(le.length/2);const ne=v>0?8+Math.min(87,Math.round(_/v*87)):95;if(c==null||c(ne,x),_>=v||le.length===0)return c==null||c(100,"Fil indlæst fra Pico"),new TextDecoder().decode(fh(y))}throw new Error("ERR: fs_read_page too many pages")}async readPageWithRetry(i,c,a,u,d){let h,_=Math.min(a,u);for(;_>=0;){const v=Co[_],y=_===0?T0:1,x=_===0?j0:M0;for(let N=1;N<=y;N+=1){Li(d);try{return{lines:await this.collectLines(`fs_read_page,${ul(i)},${c},${v}`,x,`fs_read_page ${c}`,d),nextPageSizeIndex:Math.min(_+1,u),maxPageSizeIndex:u}}catch(R){if(d!=null&&d.aborted||ch(R))throw R;if(h=R,N<y||_>0){const I=_>0&&N>=y?Co[_-1]:v;this.log("warning",`fs_read_page ${c} (${v} bytes) fejlede; prøver ${I} bytes`),await hf(80+N*80)}}}if(_===0)break;u=Math.max(0,_-1),_=u}throw h instanceof Error?h:new Error(`Timeout: fs_read_page ${c}`)}async readTextStream(i,c,a,u){const d=`Indlæser ${_f(i)}...`,h=Math.max(16,Math.min(192,c.streamChunkSize||128));a==null||a(5,d);const _=await this.collectLines(`fs_read_stream,${ul(i)},${h}`,D0,`fs_read_stream ${i}`,u,(ne,ee)=>{const xe=8+Math.round(Math.min(ne,ee)/Math.max(1,ee)*87);a==null||a(Math.min(95,xe),d)});Li(u);const v=_.find(ne=>ne.startsWith("ERR"));if(v)throw new Error(v);const y=_.find(ne=>ne.startsWith("fs_stream_begin,")),x=_.find(ne=>ne.startsWith("fs_stream_end,"));if(!y||!x)throw new Error("ERR: fs_read_stream missing metadata");const[,N,R]=y.split(",",4),[,$,I,J]=x.split(",",4),K=parseInt(R??"",10),G=parseInt(I??"",10),H=parseInt(J??"",10);if(N!==i||$!==i||!Number.isFinite(K)||K!==G||!Number.isFinite(H))throw new Error("ERR: fs_read_stream invalid metadata");let ie=0,le="";for(const ne of _){if(!ne.startsWith("fs_stream_chunk,"))continue;const[,ee,xe=""]=ne.split(",",3),ge=parseInt(ee??"",10);if(!Number.isFinite(ge)||ge!==ie||xe.length%2!==0)throw new Error("ERR: fs_read_stream invalid chunk");le+=xe,ie+=Math.floor(xe.length/2)}if(ie!==K)throw new Error("ERR: fs_read_stream size mismatch");const se=fh(le);if(uh(se)!==H)throw new Error("ERR: fs_read_stream checksum mismatch");return a==null||a(100,"Fil indlæst fra Pico"),new TextDecoder().decode(se)}async writeText(i,c,a){a==null||a(5,"Klargør BLE-overførsel..."),await this.exchange(`fs_write_begin,${ul(i)}`,x=>x==="ACK:fs_write_begin","fs_write_begin",2),a==null||a(18,"Pico er klar til filen...");const u=new TextEncoder().encode(c),d=[...u].map(x=>x.toString(16).padStart(2,"0")).join(""),h=[];for(let x=0;x<d.length;x+=160)h.push(`fs_write_chunk,${d.slice(x,x+160)}`);h.push("fs_write_end");const _=uh(u),v=this.waitFor(x=>x==="ACK:fs_write_done"||x.startsWith("ACK:fs_write_done,")||x.startsWith("ERR"),R0,"fs_write_done");a==null||a(u.length===0?85:18,u.length===0?"Sender tom fil via Bluetooth...":`Sender 0/${u.length} bytes via Bluetooth...`),await this.stream.sendReliable(h,(x,N,R)=>{if(!R.startsWith("fs_write_chunk,"))return;const $=Math.min(u.length,x*80),I=18+Math.round(x/Math.max(1,N-1)*67);a==null||a(Math.min(85,I),`Sender ${$}/${u.length} bytes via Bluetooth...`)}),a==null||a(90,"Verificerer BLE-fil...");const y=await v;if(y.startsWith("ERR"))throw new Error(y);if(y.startsWith("ACK:fs_write_done,")){const[,x,N]=y.split(",",3),R=parseInt(x??"",10),$=parseInt(N??"",10);if(R!==u.length||$!==_)throw new Error(`ERR: BLE-verificering fejlede for ${_f(i)}.`)}a==null||a(100,"Gemt på Pico")}async deleteFile(i){const c=await this.exchange(`fs_delete,${ul(i)}`,a=>a==="ACK:fs_delete"||a.startsWith("ERR"),"fs_delete",2);if(c.startsWith("ERR"))throw new Error(c)}async restart(){await this.exchange("restart",i=>i==="ACK:restart"||i.startsWith("ERR"),"restart",1).catch(()=>{}),this.expectingDisconnect=!0}enqueueButton(i,c){this.busy||(this.pendingButtons.push(`button,${i}:${c?"down":"up"}`),this.pumpControls())}enqueueSlider(i,c){this.busy||(this.pendingSliders.set(i,`slider,${i}:${c}`),this.pumpControls())}enqueueToggle(i,c){this.busy||(this.pendingToggles.set(i,`toggle,${i}:${c?1:0}`),this.pumpControls())}enqueueJoystick(i,c,a){this.busy||(this.pendingJoysticks.set(i,`joystick,${i}:${Math.round(c)},${Math.round(a)}`),this.pumpControls())}enqueueDpad(i,c,a){this.busy||(this.pendingDpads.push(`dpad,${i}:${c},${a?"down":"up"}`),this.pumpControls())}pumpControls(){this.controlPumpActive||this.busy||!this.transport.connected||(this.controlPumpActive=!0,this.drainControls())}async drainControls(){try{for(;!this.busy&&this.transport.connected;){const i=this.nextControlLine();if(!i)break;await this.transport.writeLine(i),this.log("info",`tx: ${i}`),await hf(N0)}}catch(i){this.log("error",i instanceof Error?i.message:"Kunne ikke sende kommando."),this.handleDisconnect()}finally{this.controlPumpActive=!1,!this.busy&&this.transport.connected&&this.hasPendingControls()&&this.pumpControls()}}nextControlLine(){const i=this.pendingButtons.shift();if(i)return i;const c=this.pendingDpads.shift();if(c)return c;const a=this.pendingSliders.entries().next();if(!a.done){const[h,_]=a.value;return this.pendingSliders.delete(h),_}const u=this.pendingToggles.entries().next();if(!u.done){const[h,_]=u.value;return this.pendingToggles.delete(h),_}const d=this.pendingJoysticks.entries().next();if(!d.done){const[h,_]=d.value;return this.pendingJoysticks.delete(h),_}return null}hasPendingControls(){return this.pendingButtons.length>0||this.pendingDpads.length>0||this.pendingSliders.size>0||this.pendingToggles.size>0||this.pendingJoysticks.size>0}async disconnect(){if(!this.transport.connected){this.handleDisconnect();return}this.expectingDisconnect=!0;try{await this.exchange("disconnect",i=>i==="ACK:disconnect","disconnect",1)}catch{}this.transport.disconnect()}handleDisconnect(){var c,a,u;for(const d of this.waiters)clearTimeout(d.timer),d.reject(new Error("Forbindelsen blev afbrudt."));this.waiters=[],this.collectingLayout=!1,this.layoutResolve=null,(c=this.lineReject)==null||c.call(this,new Error("Forbindelsen blev afbrudt.")),this.collectingLines=!1,this.lineResolve=null,this.lineReject=null,this.fsCapabilities=null,this.stream.reset();const i=this.disconnectMessage??void 0;this.disconnectMessage=null,(u=(a=this.events).onDisconnect)==null||u.call(a,i)}}function C0(o){let i=0;for(let c=0;c<Co.length;c+=1)Co[c]<=o&&(i=c);return i}function _f(o){return o.replace(/\\/g,"/").replace(/^\/+/,"")||o}function uh(o){let i=0;for(const c of o)i=i+c>>>0;return i}function fh(o){const i=new Uint8Array(Math.floor(o.length/2));for(let c=0;c<i.length;c+=1)i[c]=parseInt(o.slice(c*2,c*2+2),16);return i}function dh(o){const i=(c,a)=>Number.isFinite(c)?Math.max(w0,Math.min(S0,c)):a;for(const c of o){const a=c.trim();if(a.startsWith("#GRID,")){const u=a.split(","),d=i(parseInt(u[1],10),Yi),h=i(parseInt(u[2],10),rs);return{cols:d,rows:h}}}return{cols:Yi,rows:rs}}function mh(o){const i=new Map;for(const c of o){const a=c.trim();if(!a||a.startsWith("#VERSION")||a==="__END__")continue;const u=a.split(",");if(u.length<7)continue;const[d,h,_,v,y,x,N,R,$,I,J,K,G]=u;if(d!=="button"&&d!=="slider"&&d!=="toggle"&&d!=="radar"&&d!=="text"&&d!=="joystick"&&d!=="dpad"||i.has(h))continue;const H=Z=>{if(Z==="n")return null;const oe=parseInt(Z,10);return Number.isNaN(oe)?null:oe},ie=parseInt(N,10)||0,le=R!==void 0?parseInt(R,10):0,se=$!==void 0?parseInt($,10):100,he=["none","bottom","middle","top"].includes(I??"")?I:"none",ne=R!==void 0?parseInt(R,10)===1:!1,ee=R!==void 0?parseFloat(R):0,xe=$!==void 0?parseFloat($):180,ge=I!==void 0?parseFloat(I):200,ye=J!==void 0?parseInt(J,10):1200,ae=(Z,oe)=>["none","bottom","middle","top"].includes(Z??"")?Z:oe,Ve=R!==void 0?parseInt(R,10):-100,Re=$!==void 0?parseInt($,10):100,Pe=I!==void 0?parseInt(I,10):-100,z=J!==void 0?parseInt(J,10):100;i.set(h,{type:d,name:h,centerX2:H(_),centerY2:H(v),spanX:H(y),spanY:H(x),rotation:[0,90,180,270].includes(ie)?ie:0,...d==="slider"?{sliderMin:Number.isFinite(le)?le:0,sliderMax:Number.isFinite(se)?se:100,sliderRecenter:he}:{},...d==="toggle"?{toggleInitial:ne}:{},...d==="radar"?{radarMinAngle:Number.isFinite(ee)?ee:0,radarMaxAngle:Number.isFinite(xe)?xe:180,radarMaxDistance:Number.isFinite(ge)&&ge>0?ge:200,radarFadeMs:Number.isFinite(ye)&&ye>0?ye:1200}:{},...d==="joystick"?{joystickXMin:Number.isFinite(Ve)?Ve:-100,joystickXMax:Number.isFinite(Re)&&Re!==Ve?Re:100,joystickYMin:Number.isFinite(Pe)?Pe:-100,joystickYMax:Number.isFinite(z)&&z!==Pe?z:100,joystickXRecenter:ae(K,"middle"),joystickYRecenter:ae(G,"middle")}:{}})}return[...i.values()]}let re=null,$a=null,ph=0,Mr=!1;function L0(){return new Date().toLocaleTimeString("da-DK",{hour12:!1})}function hh(o){return new Promise(i=>setTimeout(i,o))}function B0(o){return Object.fromEntries(o.filter(i=>i.type==="toggle").map(i=>[i.name,!!i.toggleInitial]))}function _h(o,i){const c=B0(o);for(const a of o)a.type==="toggle"&&i[a.name]!==void 0&&(c[a.name]=i[a.name]);return c}const te=a0((o,i)=>{function c(u,d){o(h=>({logs:[{level:u,message:d,time:L0()},...h.logs].slice(0,200)}))}function a(u){$a&&clearTimeout($a),ph+=1,o({toast:{message:u,id:ph}}),$a=setTimeout(()=>o({toast:null}),4500)}return re=new O0({onProgress:(u,d)=>o({progress:{value:u,label:d}}),onLog:(u,d)=>c(u,d),onRadar:(u,d,h)=>{const _=Date.now(),v={id:`${_}-${Math.random().toString(36).slice(2)}`,angle:d,distance:h,createdAt:_};o(y=>{const x=y.layout.find($=>$.type==="radar"&&$.name===u),N=(x==null?void 0:x.radarFadeMs)??1200,R=y.radarPings[u]??[];return{radarPings:{...y.radarPings,[u]:[...R.filter($=>_-$.createdAt<=N),v].slice(-80)}}})},onText:(u,d)=>{o(h=>({textValues:{...h.textValues,[u]:d}}))},onToggleState:(u,d)=>{o(h=>({toggleValues:{...h.toggleValues,[u]:d}}))},onDisconnect:u=>{const{screen:d,active:h,picoIdeOrigin:_}=i();if(Mr){Mr=!1;return}if(u&&(c("warning",u),a(u)),d==="control"||d==="connection"||d==="create"||d==="ide"&&_==="control"){const v=h?{deviceID:h.deviceID,deviceName:h.deviceName,deviceIconID:h.iconID,canOthersConnect:h.canOthersConnect,canOthersEdit:h.canOthersEdit,canOthersEditCode:h.canOthersEditCode,isOwnedByMe:h.isOwnedByMe,ownerName:h.ownerName}:null;o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connectionLost:v})}}}),{screen:"splash",splashTarget:null,user:null,savedDevices:[],connecting:null,progress:{value:0,label:""},toast:null,confirmDialog:null,connectionLost:null,active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},logs:[],sideMenuOpen:!1,debuggerOpen:!1,menuPage:null,editMode:!1,dashboardPage:"mine",picoIdeOrigin:"dashboard",init:()=>{const u=o0(),d=Hf();o({user:u,savedDevices:d,splashTarget:u?"dashboard":"intro"})},finishSplash:()=>{const u=i().splashTarget;o({screen:u??"intro"})},createUser:u=>{const d=u.trim();if(!d)return;const h={username:d,userID:s0()};uf(h),o({user:h,screen:"dashboard"})},findDevice:async()=>{try{const u=await y0();await i().connectToDevice(u)}catch(u){u instanceof Error&&u.name!=="NotFoundError"&&c("error",u.message)}},connectToDevice:async(u,d)=>{var _,v;const h=i().user;if(!(!h||!re)){Mr=!1,o({screen:"connection",connecting:{name:Ef(u.name)||(d==null?void 0:d.deviceName)||"Pico",iconID:(d==null?void 0:d.deviceIconID)??0},progress:{value:0,label:"Forbinder..."}});try{await re.connect(u);const y=await re.runHandshake(h),x=u.id,N=Ef(u.name)||(d==null?void 0:d.deviceName)||"Pico";if(y.kind==="denied"){const G=`Du kan ikke forbinde, fordi ${((_=y.ownerName)==null?void 0:_.trim())||((v=d==null?void 0:d.ownerName)==null?void 0:v.trim())||"ejeren"} ejer enheden og ikke tillader besøgende at forbinde.`;c("warning",G),a(G),o({screen:"dashboard",connecting:null}),await re.disconnect();return}if(y.kind==="unowned"){o({active:{deviceID:x,deviceName:N,iconID:0,canEdit:!0,canEditCode:!0,canOthersConnect:!1,canOthersEdit:!1,canOthersEditCode:!1,isOwnedByMe:!0,ownerName:h.username,gridCols:Yi,gridRows:rs},screen:"create"});return}const R={deviceID:x,deviceName:N,deviceIconID:y.iconID,canOthersConnect:y.canOthersConnect,canOthersEdit:y.canOthersEdit,canOthersEditCode:y.canOthersEditCode,isOwnedByMe:y.isOwnedByMe,ownerName:y.isOwnedByMe?h.username:y.ownerName??(d==null?void 0:d.ownerName)};o({savedDevices:mf(R)});const $=await re.requestLayout(),I=dh($),J=mh($);o({layout:J,sliderValues:{},toggleValues:_h(J,i().toggleValues),radarPings:{},textValues:{},active:{deviceID:x,deviceName:N,iconID:y.iconID,canEdit:y.canEdit,canEditCode:y.canEditCode,canOthersConnect:y.canOthersConnect,canOthersEdit:y.canOthersEdit,canOthersEditCode:y.canOthersEditCode,isOwnedByMe:y.isOwnedByMe,ownerName:y.isOwnedByMe?h.username:y.ownerName??(d==null?void 0:d.ownerName),gridCols:I.cols,gridRows:I.rows},screen:"control",connecting:null,connectionLost:null})}catch(y){const x=y instanceof Error?y.message:"Forbindelsen mislykkedes.";c("error",x),a("Forbindelsen mislykkedes."),o({screen:"dashboard",connecting:null}),await re.disconnect().catch(()=>{})}}},finishCreate:async(u,d,h,_,v,y)=>{const{user:x,active:N}=i();if(!(!x||!N||!re))try{re.setBusy(!0),await re.create(x,u,d,h,_,v,y),re.setBusy(!1);const R={deviceID:N.deviceID,deviceName:N.deviceName,deviceIconID:u,canOthersConnect:d,canOthersEdit:d&&h,canOthersEditCode:d&&_,isOwnedByMe:!0,ownerName:x.username};o({savedDevices:mf(R)});const $=await re.requestLayout(),I=dh($),J=mh($);o({layout:J,sliderValues:{},toggleValues:_h(J,i().toggleValues),radarPings:{},textValues:{},active:{...N,iconID:u,canEdit:!0,canEditCode:!0,canOthersConnect:d,canOthersEdit:d&&h,canOthersEditCode:d&&_,ownerName:x.username,gridCols:I.cols,gridRows:I.rows},screen:"control"})}catch(R){re.setBusy(!1);const $=R instanceof Error?R.message:"Oprettelse mislykkedes.";c("error",$),a("Oprettelse mislykkedes."),o({screen:"dashboard"}),await re.disconnect().catch(()=>{})}},saveDeviceSettings:async(u,d,h,_,v,y)=>{const{active:x,user:N}=i();if(!(!x||!re||!x.isOwnedByMe))try{re.setBusy(!0),await re.updateDeviceSettings(u,d,h,_,v,y,N==null?void 0:N.username);const R={...x,iconID:u,canEdit:!0,canEditCode:!0,canOthersConnect:d,canOthersEdit:d&&h,canOthersEditCode:d&&_,ownerName:(N==null?void 0:N.username)??x.ownerName,gridCols:v,gridRows:y},$={deviceID:x.deviceID,deviceName:x.deviceName,deviceIconID:u,canOthersConnect:d,canOthersEdit:d&&h,canOthersEditCode:d&&_,isOwnedByMe:!0,ownerName:(N==null?void 0:N.username)??x.ownerName};o({active:R,savedDevices:mf($)}),a("Enhedsindstillinger gemt.")}catch(R){c("error",R instanceof Error?R.message:"Kunne ikke gemme enhedsindstillinger."),a("Kunne ikke gemme enhedsindstillinger.")}finally{re.setBusy(!1)}},cancelCreate:async()=>{re&&await re.disconnect().catch(()=>{}),o({screen:"dashboard",active:null,connecting:null})},disconnect:async()=>{Mr=!0,re&&await re.disconnect().catch(()=>{}),Mr=!1,o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connectionLost:null})},removeSavedDevice:u=>{o({savedDevices:d0(u)})},clearSavedDevices:()=>{c0(),o({savedDevices:[]}),a("Gemte enheder ryddet.")},resetApplicationData:async()=>{Mr=!0,re!=null&&re.connected&&await re.disconnect().catch(()=>{}),u0(),window.location.reload()},updateUsername:u=>{const d=i().user,h=u.trim();if(!d||!h)return;const _={...d,username:h};uf(_),o(v=>{var x;const y=v.savedDevices.map(N=>N.isOwnedByMe?{...N,ownerName:h}:N);return ts(y),{user:_,active:(x=v.active)!=null&&x.isOwnedByMe?{...v.active,ownerName:h}:v.active,savedDevices:y}}),a("Brugernavn gemt.")},createOwnerPairingCode:()=>{const u=i().user;return u?z0(u):null},applyOwnerPairingCode:u=>{var h;const d=U0(u,(h=i().user)==null?void 0:h.username);return d?(uf(d),o(_=>{var y;const v=_.savedDevices.map(x=>x.isOwnedByMe?{...x,ownerName:d.username}:x);return ts(v),{user:d,active:(y=_.active)!=null&&y.isOwnedByMe?{..._.active,ownerName:d.username}:_.active,savedDevices:v}}),a("Ejerkoden er gemt. Denne browser bruger nu samme ejer-GUID."),!0):(a("Ejerkoden kunne ikke læses."),!1)},openPicoIde:()=>{const u=i().screen==="control"&&!!(re!=null&&re.connected),d=i().active;if(u&&d&&!d.isOwnedByMe&&!d.canEditCode){a("Ejeren tillader ikke, at gæster åbner Kodeværkstedet på denne enhed."),c("warning","Kodeværkstedet er blokeret, fordi ejeren ikke tillader gæster at redigere kode."),o({sideMenuOpen:!1});return}o(h=>({screen:"ide",picoIdeOrigin:u?"control":"dashboard",active:u?h.active:null,layout:u?h.layout:[],sliderValues:u?h.sliderValues:{},toggleValues:u?h.toggleValues:{},radarPings:u?h.radarPings:{},textValues:u?h.textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null}))},closePicoIde:()=>{const{picoIdeOrigin:u,active:d}=i();o({screen:u==="control"&&d&&(re!=null&&re.connected)?"control":"dashboard",sideMenuOpen:!1,menuPage:null,picoIdeOrigin:"dashboard"})},isBleConnected:()=>!!(re!=null&&re.connected),bleListFiles:async()=>re!=null&&re.connected?re.listFiles("/"):[],bleReadText:async(u,d,h)=>{if(!(re!=null&&re.connected))throw new Error("Ingen BLE-forbindelse.");return re.readText(u,d,h)},bleWriteText:async(u,d,h)=>{if(!(re!=null&&re.connected))throw new Error("Ingen BLE-forbindelse.");await re.writeText(u,d,h)},bleDeleteFile:async u=>{if(!(re!=null&&re.connected))throw new Error("Ingen BLE-forbindelse.");await re.deleteFile(u)},bleRestart:async()=>{re!=null&&re.connected&&await re.restart()},bleRestartAndReconnect:async(u="control")=>{const{active:d}=i();if(!(re!=null&&re.connected)||!d)return!1;const h={deviceID:d.deviceID,deviceName:d.deviceName,deviceIconID:d.iconID,canOthersConnect:d.canOthersConnect,canOthersEdit:d.canOthersEdit,canOthersEditCode:d.canOthersEditCode,isOwnedByMe:d.isOwnedByMe,ownerName:d.ownerName};Mr=!0,c("info","Genstarter Pico og forsøger automatisk genforbindelse...");try{await re.restart()}catch{}o({progress:{value:15,label:"Venter på Pico genstart..."},connecting:{name:h.deviceName,iconID:h.deviceIconID}});for(let _=0;_<12&&(re!=null&&re.connected);_+=1)await hh(250);re!=null&&re.connected||(Mr=!1);for(let _=1;_<=8;_+=1){await hh(_===1?1200:850);try{const y=(await Jh()).find(x=>x.id===h.deviceID);if(!y){o({progress:{value:Math.min(88,20+_*8),label:"Venter på browser-tilladelse..."}});continue}return o({progress:{value:Math.min(92,24+_*8),label:`Genforbinder (${_}/8)...`}}),await i().connectToDevice(y,h),u==="ide"&&o(x=>({screen:"ide",picoIdeOrigin:"control",active:x.active,layout:x.layout,sliderValues:x.sliderValues,toggleValues:x.toggleValues,radarPings:x.radarPings,textValues:x.textValues,editMode:!1,sideMenuOpen:!1,menuPage:null})),a("Pico genforbundet."),!0}catch(v){c("warning",v instanceof Error?v.message:"Genforbindelse mislykkedes.")}}return a("Kunne ikke genforbinde automatisk. Vælg Picoen igen."),Mr=!1,o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:h}),!1},reconnectLostDevice:async()=>{var d;const u=i().connectionLost;if(u){o({connectionLost:null});try{if((d=navigator.bluetooth)!=null&&d.getDevices){const _=(await navigator.bluetooth.getDevices()).find(v=>v.id===u.deviceID);if(_){await i().connectToDevice(_,u);return}}}catch{}c("info","Genforbind: vælg enheden i browserens liste."),await i().findDevice()}},dismissConnectionLost:()=>o({connectionLost:null}),sendButton:(u,d)=>re==null?void 0:re.enqueueButton(u,d),sendSlider:(u,d)=>{o(h=>({sliderValues:{...h.sliderValues,[u]:d}})),re==null||re.enqueueSlider(u,d)},sendToggle:(u,d)=>{o(h=>({toggleValues:{...h.toggleValues,[u]:d}})),re==null||re.enqueueToggle(u,d)},sendJoystick:(u,d,h)=>re==null?void 0:re.enqueueJoystick(u,d,h),sendDpad:(u,d,h)=>re==null?void 0:re.enqueueDpad(u,d,h),saveLayout:async u=>{if(re)try{re.setBusy(!0),await re.saveLayout(u),o({layout:u,editMode:!1})}catch(d){c("error",d instanceof Error?d.message:"Kunne ikke gemme layout.")}finally{re.setBusy(!1)}},setEditMode:u=>o({editMode:u,sideMenuOpen:!1,menuPage:null}),setDashboardPage:u=>o({dashboardPage:u}),toggleSideMenu:u=>o(d=>({sideMenuOpen:u??!d.sideMenuOpen})),toggleDebugger:u=>o(d=>({debuggerOpen:u??!d.debuggerOpen,sideMenuOpen:!1,menuPage:null})),openMenuPage:u=>o({menuPage:u,sideMenuOpen:!1}),closeMenuPage:()=>o({menuPage:null}),clearLogs:()=>o({logs:[]}),log:(u,d)=>c(u,d),askConfirm:u=>o({confirmDialog:u}),closeConfirm:()=>o({confirmDialog:null}),showToast:u=>a(u),dismissToast:()=>{$a&&clearTimeout($a),o({toast:null})}}}),kf="PKP-EJER";function z0(o){var a;const i=o.userID.toLowerCase(),c=((a=i.match(/.{1,4}/g))==null?void 0:a.join("-"))??i;return`${kf}-${c}-${r_(i)}`}function U0(o,i="Ejer"){const c=o.trim().toUpperCase().replace(/\s+/g,"-");if(!c.startsWith(`${kf}-`))return null;const a=c.slice(kf.length+1).split("-").filter(Boolean),u=a.pop()??"",d=a.join("").toLowerCase();return!/^[a-f0-9]{32}$/.test(d)||u!==r_(d)?null:{userID:d,username:i.trim()||"Ejer"}}function r_(o){let i=2166136261;for(const c of o.toLowerCase())i^=c.charCodeAt(0),i=Math.imul(i,16777619)>>>0;return(i%65536).toString(16).toUpperCase().padStart(4,"0")}const Go="./",l_=[{id:0,label:"Raspberry Pi"},{id:1,label:"Sumo robot"},{id:2,label:"LED / lys"},{id:3,label:"Lineal + blyant"},{id:4,label:"Bil"},{id:5,label:"Tank"},{id:6,label:"Robotarm"},{id:7,label:"Bi"},{id:8,label:"Palet"},{id:9,label:"Afstandssensor"},{id:10,label:"Søg"},{id:11,label:"Alarm"}];function qi(o){const i=o>=0&&o<l_.length?o:0;return`${Go}device-icons/${i}.png`}const H0=`${Go}art/logo.png`,V0=`${Go}art/Teknologiskolen_logo.png`,G0=`${Go}art/logo_teknologiskolen_white.png`,Y0={menu:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),f.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),f.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),f.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]}),user:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),f.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),settings:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"3"}),f.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),info:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),f.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),help:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),f.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),debugger:f.jsx(f.Fragment,{children:f.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),edit:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),f.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),picoIde:f.jsxs(f.Fragment,{children:[f.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),f.jsx("path",{d:"M8 9l-3 3 3 3"}),f.jsx("path",{d:"M16 9l3 3-3 3"}),f.jsx("line",{x1:"13",y1:"8",x2:"11",y2:"16"})]}),exit:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),f.jsx("polyline",{points:"16 17 21 12 16 7"}),f.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),plus:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),f.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),delete:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),f.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),power:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),f.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),save:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),f.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),f.jsx("polyline",{points:"7 3 7 8 15 8"})]}),upload:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),f.jsx("polyline",{points:"17 8 12 3 7 8"}),f.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),refresh:f.jsxs(f.Fragment,{children:[f.jsx("polyline",{points:"23 4 23 10 17 10"}),f.jsx("polyline",{points:"1 20 1 14 7 14"}),f.jsx("path",{d:"M3.5 9a9 9 0 0 1 14.9-3.4L23 10"}),f.jsx("path",{d:"M20.5 15a9 9 0 0 1-14.9 3.4L1 14"})]}),package:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),f.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),f.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),back:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),f.jsx("polyline",{points:"12 19 5 12 12 5"})]})};function Fn({name:o,size:i=24,className:c}){return f.jsx("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:c,"aria-hidden":"true",children:Y0[o]})}const I0=1850,q0=450;function P0(){const o=te(a=>a.splashTarget),i=te(a=>a.finishSplash),c=o?"splash-screen-animation splash-ready":"splash-pending";return L.useEffect(()=>{if(!o)return;const u=window.matchMedia("(prefers-reduced-motion: reduce)").matches?q0:I0,d=window.setTimeout(i,u);return()=>window.clearTimeout(d)},[i,o]),f.jsxs("div",{className:`screen splash-screen ${c}`,"aria-label":"Teknologiskolen starter",children:[f.jsx("div",{className:"splash-white-cover"}),f.jsx("div",{className:"splash-red-field"}),f.jsx("div",{className:"splash-brand","aria-hidden":"true",children:f.jsx("div",{className:"splash-mark splash-logo-shell",children:f.jsx("img",{className:"splash-logo",src:H0,alt:""})})}),f.jsx("span",{className:"sr-only",children:"Teknologiskolen"})]})}function gh(){const o=te(u=>u.createUser),[i,c]=L.useState(""),a=i.length>0;return f.jsxs("div",{className:"screen intro",children:[f.jsxs("div",{className:"intro-header",children:[f.jsx("span",{className:"intro-header-fill","aria-hidden":"true"}),f.jsx("img",{className:"intro-header-image",src:V0,alt:"Teknologiskolen"}),f.jsx("span",{className:"intro-header-fill","aria-hidden":"true"})]}),f.jsxs("div",{className:"intro-body",children:[f.jsx("p",{children:"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Find selv på et navn, du vil vises som i appen. Det er ikke et login, og navnet gemmes kun i denne browser."}),f.jsxs("div",{className:`field ${a?"filled":""}`,children:[f.jsx("input",{id:"username",value:i,onChange:u=>c(u.target.value),maxLength:32,autoComplete:"off","aria-label":"Brugernavn"}),f.jsx("label",{htmlFor:"username",children:"Brugernavn"})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!a,onClick:()=>o(i),children:"Fortsæt"})]}),f.jsx("span",{className:"version",children:ns})]})}function Vf({title:o,onMenu:i}){return f.jsx("header",{className:"topbar",children:f.jsxs("div",{className:"topbar-inner",children:[f.jsx("h1",{children:o}),f.jsx("button",{className:"iconbtn",type:"button",onClick:i,"aria-label":"Menu",children:f.jsx(Fn,{name:"menu"})})]})})}function Sn({title:o,onClose:i,children:c,closeVariant:a="plain"}){const u=a==="circle",d=L.useRef(!1);return f.jsx("div",{className:"modal-root",onPointerDown:h=>{d.current=h.target===h.currentTarget},onClick:h=>{h.target===h.currentTarget&&d.current&&i(),d.current=!1},children:f.jsxs("div",{className:"modal",onClick:h=>h.stopPropagation(),children:[f.jsxs("div",{className:"modal-head",children:[f.jsx("h3",{children:o}),f.jsx("button",{className:`iconbtn ${u?"modal-close-circle":""}`,type:"button",onClick:i,"aria-label":"Luk",children:f.jsx(Fn,{name:u?"delete":"close",size:u?30:24})})]}),f.jsx("div",{className:"modal-body",children:c})]})})}function bh(){const o=te(R=>R.savedDevices),i=te(R=>R.toggleSideMenu),c=te(R=>R.findDevice),a=te(R=>R.removeSavedDevice),u=te(R=>R.askConfirm),d=te(R=>R.dashboardPage),h=te(R=>R.setDashboardPage),_=K0(),[v,y]=L.useState(null),x=Vo(),N=o.filter(R=>d==="mine"?R.isOwnedByMe:!R.isOwnedByMe).sort(F0);return f.jsxs("div",{className:"screen dashboard-screen",children:[f.jsx(Vf,{title:"Hovedmenu",onMenu:()=>i()}),f.jsxs("div",{className:"content dash-content",children:[!x&&f.jsx("div",{className:"notice",children:"Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På Android: brug Chrome."}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:d==="mine"?"active":"",onClick:()=>h("mine"),children:"Mine Enheder"}),f.jsx("button",{type:"button",className:d==="andre"?"active":"",onClick:()=>h("andre"),children:"Andre Enheder"})]}),f.jsx("div",{className:"panel panel-white device-list",children:N.length===0?f.jsx("div",{className:"device-list-empty",children:d==="mine"?"Ingen enheder endnu. Tryk på + for at finde en enhed.":"Ingen andre enheder gemt."}):N.map(R=>f.jsx($0,{device:R,disabled:!x,onConnect:()=>_(R),onSettings:()=>y(R)},R.deviceID))})]}),f.jsx("button",{className:"fab",type:"button",onClick:()=>c(),disabled:!x,"aria-label":"Find enhed",children:f.jsx(Fn,{name:"plus",size:30})}),f.jsx("span",{className:"version",children:ns}),v&&f.jsx(Sn,{title:"Enhedsindstillinger",onClose:()=>y(null),children:f.jsxs("div",{className:"settings-stack",children:[f.jsxs("div",{className:"saved-device-head",children:[f.jsx("img",{src:qi(v.deviceIconID),alt:""}),f.jsx("strong",{children:v.deviceName})]}),f.jsx(Xa,{label:"Gemte indstillinger",value:"Denne browser"}),f.jsx(Xa,{label:"Ejer",value:X0(v)}),f.jsx(Xa,{label:"Offentlig",value:v.canOthersConnect?"Ja":"Nej"}),f.jsx(Xa,{label:"Andre må redigere layout",value:v.canOthersEdit?"Ja":"Nej"}),f.jsx(Xa,{label:"Andre må redigere kode",value:v.canOthersEditCode?"Ja":"Nej"}),f.jsx("div",{className:"notice",children:"Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen."}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!x,onClick:()=>{const R=v;y(null),_(R)},children:"Forbind"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>u({title:"Glem enhed",message:`Vil du fjerne ${v.deviceName} fra gemte enheder?`,confirmLabel:"Glem",onConfirm:()=>{a(v.deviceID),y(null)}}),children:"Glem enhed"})]})})]})}function $0({device:o,disabled:i,onConnect:c,onSettings:a}){return f.jsxs("div",{className:"device-tile-wrap",children:[f.jsxs("button",{className:"device-tile",type:"button",onClick:c,disabled:i,children:[f.jsx("img",{className:"device-tile-icon",src:qi(o.deviceIconID),alt:""}),f.jsx("span",{className:"device-tile-name",children:o.deviceName})]}),f.jsx("button",{className:"device-tile-del",type:"button",onClick:a,"aria-label":"Enhedsindstillinger",children:f.jsx(Fn,{name:"settings"})})]})}function Xa({label:o,value:i}){return f.jsxs("div",{className:"settings-row",children:[f.jsx("span",{children:o}),f.jsx("strong",{children:i})]})}function X0(o){var i;return o.isOwnedByMe?"Dig":((i=o.ownerName)==null?void 0:i.trim())||"Anden bruger"}function F0(o,i){return o.deviceName.localeCompare(i.deviceName,"da",{sensitivity:"base"})}function K0(){const o=te(a=>a.connectToDevice),i=te(a=>a.findDevice),c=te(a=>a.log);return async a=>{const d=(await Jh()).find(h=>h.id===a.deviceID);d?await o(d,a):(c("info","Genforbind: vælg enheden i browserens liste."),await i())}}function Q0(){const o=te(c=>c.connecting),i=te(c=>c.progress);return f.jsxs("div",{className:"screen connection",children:[f.jsx("div",{className:"device-icon-pick",children:f.jsx("img",{src:qi((o==null?void 0:o.iconID)??0),alt:""})}),f.jsxs("h2",{style:{margin:0,color:"var(--red)"},children:["Forbinder til ",(o==null?void 0:o.name)??"enhed"]}),f.jsx("div",{className:"spinner"}),f.jsxs("div",{style:{width:"100%"},children:[f.jsx("div",{className:"progress-track",children:f.jsx("div",{className:"progress-fill",style:{width:`${i.value}%`}})}),f.jsx("p",{style:{color:"var(--muted)",fontWeight:600,marginTop:12},children:i.label})]})]})}function i_({selected:o,onSelect:i,onClose:c}){return f.jsx(Sn,{title:"Vælg Enhedens Ikon",onClose:c,children:f.jsx("div",{className:"icon-grid",children:l_.map(a=>f.jsx("button",{type:"button",className:`icon-tile ${a.id===o?"selected":""}`,onClick:()=>{i(a.id),c()},"aria-label":a.label,children:f.jsx("img",{src:qi(a.id),alt:""})},a.id))})})}function Z0(){const o=te(le=>le.finishCreate),i=te(le=>le.cancelCreate),[c,a]=L.useState(0),[u,d]=L.useState(!1),[h,_]=L.useState(!1),[v,y]=L.useState(!1),[x,N]=L.useState(!1),[R,$]=L.useState(Yi),[I,J]=L.useState(rs),[K,G]=L.useState(!1),H=le=>Number.isFinite(le)?Math.max(Hi,Math.min(Vi,Math.round(le))):Yi;async function ie(){G(!0),await o(c,h,h&&v,h&&x,H(R),H(I))}return f.jsxs("div",{className:"screen",children:[f.jsx("header",{className:"topbar",children:f.jsx("h1",{children:"Opret Enhed"})}),f.jsxs("div",{className:"content create-body",children:[f.jsxs("button",{type:"button",className:"device-icon-pick",onClick:()=>d(!0),"aria-label":"Vælg ikon",children:[f.jsx("img",{src:qi(c),alt:""}),f.jsx("span",{className:"badge",children:f.jsx(Fn,{name:"plus",size:22})})]}),f.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:h?"":"active",onClick:()=>_(!1),children:"Privat"}),f.jsx("button",{type:"button",className:h?"active":"",onClick:()=>_(!0),children:"Offentlig"})]}),h&&f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:v?"":"active",onClick:()=>y(!1),children:"Nej"}),f.jsx("button",{type:"button",className:v?"active":"",onClick:()=>y(!0),children:"Ja"})]}),f.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:x?"":"active",onClick:()=>N(!1),children:"Nej"}),f.jsx("button",{type:"button",className:x?"active":"",onClick:()=>N(!0),children:"Ja"})]})]}),f.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter (kolonner × rækker)"}),f.jsxs("div",{className:"row",style:{width:"100%"},children:[f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"cols",children:"Kolonner"}),f.jsx("input",{id:"cols",type:"number",min:Hi,max:Vi,value:Number.isNaN(R)?"":R,onChange:le=>$(parseInt(le.target.value,10)),onBlur:()=>$(H(R))})]}),f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"rows",children:"Rækker"}),f.jsx("input",{id:"rows",type:"number",min:Hi,max:Vi,value:Number.isNaN(I)?"":I,onChange:le=>J(parseInt(le.target.value,10)),onBlur:()=>J(H(I))})]})]}),f.jsxs("div",{className:"row",style:{marginTop:"auto",width:"100%"},children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>i(),disabled:K,children:"Annuller"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:ie,disabled:K,children:K?"Opretter...":"Opret"})]})]}),u&&f.jsx(i_,{selected:c,onSelect:a,onClose:()=>d(!1)}),f.jsx("span",{className:"version",children:ns})]})}const Ii=8;function Ao(o){return Math.max(5,Math.min(22,o))}function W0(o,i,c){const a=Math.max(1,o.length),u=(i-Ii*2)/(a*.58),d=(c-Ii*2)*.48;return Ao(Math.min(u,d))}function Kl(o,i,c){switch(c){case 90:return{x:-i,y:o};case 180:return{x:-o,y:-i};case 270:return{x:i,y:-o};default:return{x:o,y:i}}}function Lo(o){return(360-o)%360}function J0(o,i,c,a){const u=a===90||a===270;return W0(o,u?c:i,u?i:c)}function Bo({name:o,width:i,height:c,rotation:a}){return f.jsx("span",{style:{display:"inline-block",fontWeight:800,fontSize:J0(o,i,c,a),transform:a?`rotate(${a}deg)`:void 0,whiteSpace:a===90||a===270?"nowrap":void 0},children:o})}function eb(o,i,c,a,u){const d=o.trim().split(/\s+/).filter(Boolean),h=Math.max(1,o.replace(/\s+/g,"").length+Math.max(0,d.length-1)*1.6),_=u?Ao(Math.min(i/4.6,c/4.6,12)):0,v=u?_+Ii:Ii;if(a){const N=Math.max(1,c-v*2);return{fontSize:Ao(Math.min(i*.48,N/(h*1.04))),endFontSize:_,centerInset:u?{top:v,bottom:v}:{}}}const y=Math.max(1,i-v*4.2);return{fontSize:Ao(Math.min(c*.42,y/(h*.58))),endFontSize:_,centerInset:u?{left:v*2.1,right:v*2.1}:{}}}function nb({control:o,rect:i,disabled:c,latestValue:a,toggleValue:u,radarPings:d=[],textValue:h,onButton:_,onSlider:v,onToggle:y,onJoystick:x,onDpad:N}){const R=L.useRef(!1),$={left:i.cx,top:i.cy,width:i.width,height:i.height};if(o.type==="button"){const I=()=>{c||!R.current||(R.current=!1,_(o.name,!1))};return f.jsx("div",{className:"control",style:$,children:f.jsx("button",{className:"control-button",type:"button",disabled:c,style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},onPointerDown:J=>{var K,G;c||(J.preventDefault(),(G=(K=J.currentTarget).setPointerCapture)==null||G.call(K,J.pointerId),R.current=!0,_(o.name,!0))},onPointerUp:J=>{var K,G;J.preventDefault(),(G=(K=J.currentTarget).releasePointerCapture)==null||G.call(K,J.pointerId),I()},onPointerCancel:I,onLostPointerCapture:I,children:f.jsx(Bo,{name:o.name,width:i.width,height:i.height,rotation:o.rotation})})})}if(o.type==="toggle"){const I=!!u;return f.jsx("div",{className:"control",style:$,children:f.jsx("button",{className:`control-toggle ${I?"on":""}`,type:"button",disabled:c,"aria-pressed":I,style:{width:"100%",height:"100%"},onPointerDown:J=>{c||(J.preventDefault(),y(o.name,!I))},children:f.jsx(Bo,{name:o.name,width:i.width,height:i.height,rotation:o.rotation})})})}return o.type==="radar"?f.jsx("div",{className:"control",style:$,children:f.jsx(s_,{control:o,pings:d,width:i.width,height:i.height})}):o.type==="text"?f.jsx("div",{className:"control",style:$,children:f.jsx(a_,{message:h??o.name,width:i.width,height:i.height,rotation:o.rotation})}):o.type==="joystick"?f.jsx("div",{className:"control",style:$,children:f.jsx(mb,{control:o,disabled:c,onJoystick:x,width:i.width,height:i.height})}):o.type==="dpad"?f.jsx("div",{className:"control",style:$,children:f.jsx(xb,{control:o,disabled:c,onDpad:N})}):f.jsx("div",{className:"control",style:$,children:f.jsx(db,{control:o,disabled:c,latestValue:a,onSlider:v,width:i.width,height:i.height})})}function tb(o,i,c){const a=o.trim()||" ",d=a.split(/\s+/).filter(Boolean).reduce((N,R)=>Math.max(N,R.length),1),h=Math.max(1,Math.ceil(a.length/Math.max(1,Math.floor(d*1.9)))),_=Math.max(1,i-Ii*3),v=Math.max(1,c-Ii*3),y=_/(d*.58),x=v/(h*1.16);return Math.max(7,Math.min(24,y,x))}function a_({message:o,width:i,height:c,rotation:a=0}){const u=o.trim()||"...",d=a===90||a===270,h=tb(u,d?c:i,d?i:c);return f.jsx("div",{className:"control-text",style:{width:"100%",height:"100%",fontSize:h},children:f.jsx("span",{style:{transform:a?`rotate(${a}deg)`:void 0},children:u})})}function s_({control:o,pings:i,width:c,height:a,preview:u=!1}){const[,d]=L.useState(0),h=Math.max(120,o.radarFadeMs??1200),_=o.radarMinAngle??0,v=o.radarMaxAngle??180,y=Kn(_),x=Kn(v),N=Math.abs(v-_)>=360||y===x&&_!==v,R=Math.max(1,o.radarMaxDistance??200),$=Date.now(),I=i[i.length-1],J=o.rotation,K=Kn(y+J),G=Kn(x+J),H=ob(y,x),ie=((I==null?void 0:I.angle)??H)+J,le=u?[{id:"preview",angle:H,distance:R*.62,createdAt:$}]:i.filter(S=>$-S.createdAt<=h),se=!N,he=Math.max(8,Math.min(12,Math.min(c,a)*.16)),ne=0,ee=0,xe=1,ge=N?{x:-1.12,y:-1.12,width:2.24,height:2.24}:ib(K,G),ye=N?"":rb(ne,ee,xe,K,G),ae=wh(_),Ve=wh(v),Re=se?sb(K,G,ge,c,a,ae,Ve,he):null,Pe=Math.max(7,he*.85),z=Kn(H+J),Z=N?180:Yo(K,G)/2,oe=Kn(z-Math.min(16,Z*.55)),we=[.25,.5,.75,1].map(S=>{const B=yt(ne,ee,xe*S,oe),W=o_(B,ge,c,a);return{fraction:S,value:Math.round(R*S),x:W.x,y:W.y}});L.useEffect(()=>{if(u||i.length===0)return;const S=window.setInterval(()=>d(B=>B+1),120);return()=>window.clearInterval(S)},[h,i.length,u]);const ke=yt(ne,ee,xe,ie);return f.jsxs("div",{className:"control-radar",style:{width:"100%",height:"100%"},children:[f.jsxs("svg",{width:c,height:a,viewBox:`${ge.x} ${ge.y} ${ge.width} ${ge.height}`,preserveAspectRatio:"none","aria-hidden":"true",children:[N?f.jsx("circle",{className:"radar-sector-fill",cx:ne,cy:ee,r:xe}):f.jsx("path",{className:"radar-sector-fill",d:ye}),[.25,.5,.75,1].map(S=>N?f.jsx("circle",{className:"radar-ring",cx:ne,cy:ee,r:xe*S},S):f.jsx("path",{className:"radar-ring",d:lb(ne,ee,xe*S,K,G)},S)),!N&&f.jsx(yh,{cx:ne,cy:ee,radius:xe,angle:K}),!N&&f.jsx(yh,{cx:ne,cy:ee,radius:xe,angle:G}),f.jsx("line",{className:"radar-sweep",x1:ne,y1:ee,x2:ke.x,y2:ke.y}),le.map(S=>{const B=u?0:$-S.createdAt,W=Math.max(0,1-B/h),j=Math.max(0,Math.min(R,S.distance)),F=yt(ne,ee,xe*(j/R),S.angle+J);return f.jsx("circle",{className:"radar-ping",cx:F.x,cy:F.y,r:Math.max(.025,Math.min(ge.width,ge.height)*.025),opacity:W},S.id)})]}),se&&Re&&f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"radar-angle-label",style:{left:Re.min.x,top:Re.min.y,fontSize:he},children:ae}),f.jsx("span",{className:"radar-angle-label",style:{left:Re.max.x,top:Re.max.y,fontSize:he},children:Ve})]}),we.map(S=>f.jsx("span",{className:"radar-range-label",style:{left:S.x,top:S.y,fontSize:Pe},children:S.value},S.fraction))]})}function yh({cx:o,cy:i,radius:c,angle:a}){const u=yt(o,i,c,a);return f.jsx("line",{className:"radar-boundary",x1:o,y1:i,x2:u.x,y2:u.y})}function yt(o,i,c,a){const u=(Kn(a)-90)*Math.PI/180;return{x:o+Math.cos(u)*c,y:i+Math.sin(u)*c}}function rb(o,i,c,a,u){const d=yt(o,i,c,a),h=yt(o,i,c,u),_=Yo(a,u)>180?1:0;return`M ${o} ${i} L ${d.x} ${d.y} A ${c} ${c} 0 ${_} 1 ${h.x} ${h.y} Z`}function lb(o,i,c,a,u){const d=yt(o,i,c,a),h=yt(o,i,c,u),_=Yo(a,u)>180?1:0;return`M ${d.x} ${d.y} A ${c} ${c} 0 ${_} 1 ${h.x} ${h.y}`}function Yo(o,i){const c=Kn(o),a=Kn(i),u=a>=c?a-c:360-c+a;return u===0?360:u}function ib(o,i){const c=[{x:0,y:0},yt(0,0,1,o),yt(0,0,1,i)];for(const x of[0,90,180,270])ab(x,o,i)&&c.push(yt(0,0,1,x));const a=Math.min(...c.map(x=>x.x)),u=Math.max(...c.map(x=>x.x)),d=Math.min(...c.map(x=>x.y)),h=Math.max(...c.map(x=>x.y)),_=Math.max(.1,u-a),v=Math.max(.1,h-d),y=Math.max(_,v)*.24;return{x:a-y,y:d-y,width:_+y*2,height:v+y*2}}function ab(o,i,c){const a=Kn(i),u=Kn(o),d=Yo(i,c),h=Kn(u-a);return h>=0&&h<=d}function sb(o,i,c,a,u,d,h,_){const y=yt(0,0,1.1,o),x=yt(0,0,1.1,i);return{min:vh(y,c,a,u,d,_),max:vh(x,c,a,u,h,_)}}function o_(o,i,c,a){return{x:(o.x-i.x)/i.width*c,y:(o.y-i.y)/i.height*a}}function vh(o,i,c,a,u,d){const h=o_(o,i,c,a),_=Math.max(10,u.length*d*.62),v=d,y=7;return{x:xh(h.x,_/2+y,Math.max(_/2+y,c-_/2-y)),y:xh(h.y,v/2+y,Math.max(v/2+y,a-v/2-y))}}function xh(o,i,c){return Math.max(i,Math.min(c,o))}function wh(o){return`${Math.round(o)}`}function Kn(o){return Number.isFinite(o)?(o%360+360)%360:0}function ob(o,i){const c=Kn(o),a=Kn(i),u=a>=c?a-c:360-c+a;return Kn(c+u/2)}function cb(o,i){if(!i)return o;const c=o.trim().split(/\s+/).filter(Boolean);return f.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",lineHeight:1.02,textAlign:"center",gap:"0.42em"},children:c.map((a,u)=>f.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[...a].map((d,h)=>f.jsx("span",{children:d},`${d}-${h}`))},`${a}-${u}`))})}function ub(o){const i={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},c=4;return o===0?{low:{...i,left:c,top:0,bottom:0},high:{...i,right:c,top:0,bottom:0}}:o===180?{low:{...i,right:c,top:0,bottom:0},high:{...i,left:c,top:0,bottom:0}}:o===90?{low:{...i,bottom:c,left:0,right:0},high:{...i,top:c,left:0,right:0}}:{low:{...i,top:c,left:0,right:0},high:{...i,bottom:c,left:0,right:0}}}function fb({name:o,vertical:i,rotation:c,color:a,fontSize:u,endFontSize:d,centerInset:h,lowLabel:_,highLabel:v,showEnds:y}){const x=y?ub(c):null;return f.jsxs("div",{style:{position:"absolute",inset:0,color:a},children:[f.jsx("div",{style:{position:"absolute",inset:0,...h,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:u,textAlign:"center",pointerEvents:"none"},children:cb(o,i)}),x&&f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{...x.low,fontWeight:800,fontSize:d},children:_}),f.jsx("div",{style:{...x.high,fontWeight:800,fontSize:d},children:v})]})]})}function c_({name:o,rotation:i,width:c,height:a,value:u,showEnds:d=!1,fillColor:h="var(--red)",lowLabel:_="0",highLabel:v="100"}){const y=i===90||i===270,{fontSize:x,endFontSize:N,centerInset:R}=eb(o,c,a,y,d);let $,I;i===0?($={left:0,top:0,bottom:0,width:`${u}%`},I={left:0,top:0}):i===180?($={right:0,top:0,bottom:0,width:`${u}%`},I={right:0,top:0}):i===90?($={left:0,right:0,bottom:0,height:`${u}%`},I={left:0,bottom:0}):($={left:0,right:0,top:0,height:`${u}%`},I={left:0,top:0});const J=K=>f.jsx(fb,{name:o,vertical:y,rotation:i,color:K,fontSize:x,endFontSize:N,centerInset:R,lowLabel:_,highLabel:v,showEnds:d});return f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{position:"absolute",left:0,top:0,width:`${c}px`,height:`${a}px`},children:J("var(--red)")}),f.jsx("div",{style:{position:"absolute",background:h,overflow:"hidden",...$},children:f.jsx("div",{style:{position:"absolute",width:`${c}px`,height:`${a}px`,...I},children:J("var(--white)")})})]})}function db({control:o,disabled:i,latestValue:c,onSlider:a,width:u,height:d}){const h=L.useRef(null),_=o.sliderMin??0,v=o.sliderMax??100,[y,x]=L.useState(()=>c===void 0?Sh(o.sliderRecenter??"none"):Eh(c,_,v)),N=L.useRef(null),R=o.rotation;L.useEffect(()=>{c!==void 0&&(x(Eh(c,_,v)),N.current=c)},[c,_,v]);function $(G){const H=h.current;if(!H)return 0;const ie=H.getBoundingClientRect();let le;return R===0?le=(G.clientX-ie.left)/ie.width:R===180?le=1-(G.clientX-ie.left)/ie.width:R===90?le=1-(G.clientY-ie.top)/ie.height:le=(G.clientY-ie.top)/ie.height,Math.max(0,Math.min(1,le))}function I(G){i||J($(G))}function J(G){const H=Math.round(G*100),ie=Math.round(_+(v-_)*G);x(H),ie!==N.current&&(N.current=ie,a(o.name,ie))}function K(){const G=o.sliderRecenter??"none";i||G==="none"||J(Sh(G)/100)}return f.jsx("div",{ref:h,className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",touchAction:"none"},onPointerDown:G=>{i||(G.preventDefault(),G.currentTarget.setPointerCapture(G.pointerId),I(G))},onPointerMove:G=>{G.buttons!==0&&I(G)},onPointerUp:K,onPointerCancel:K,onLostPointerCapture:K,children:f.jsx(c_,{name:o.name,rotation:R,width:u,height:d,value:y,showEnds:!0,lowLabel:String(_),highLabel:String(v)})})}function Sh(o){return o==="bottom"?0:o==="top"?100:o==="middle"?50:0}function Eh(o,i,c){return c===i?0:Math.max(0,Math.min(100,Math.round((o-i)/(c-i)*100)))}function kh(o,i,c){return Math.round(i+(c-i)*(o+1)/2)}function Nh(o,i){return o==="bottom"?i?1:-1:o==="top"?i?-1:1:0}function Rh(o){return{nx:Nh(o.joystickXRecenter,!1),ny:Nh(o.joystickYRecenter,!0)}}function u_(o,i){const c=Math.min(o,i),a=Math.max(6,c*.16),u=Math.max(1,c/2-a-2);return{knobRadius:a,reach:u}}function f_({control:o,width:i,height:c,pos:a,dragging:u=!1}){const d=o.rotation,{knobRadius:h,reach:_}=u_(i,c),v=Math.max(7,Math.min(14,h*.62)),y=Math.max(7,Math.min(12,Math.min(i,c)*.1)),x=[{key:"xmax",value:o.joystickXMax??100,lx:1,ly:0},{key:"xmin",value:o.joystickXMin??-100,lx:-1,ly:0},{key:"ymax",value:o.joystickYMax??100,lx:0,ly:-1},{key:"ymin",value:o.joystickYMin??-100,lx:0,ly:1}];return f.jsxs("div",{className:"control-joystick",style:{width:"100%",height:"100%",position:"relative"},children:[f.jsx("div",{className:"joystick-oval",style:{position:"absolute",left:"50%",top:"50%",width:_*2,height:_*2,transform:"translate(-50%, -50%)"}}),x.map(N=>{const R=Kl(N.lx,N.ly,d);return f.jsx("span",{className:"joystick-edge-label",style:{position:"absolute",left:"50%",top:"50%",fontSize:y,transform:`translate(-50%, -50%) translate(${R.x*_}px, ${R.y*_}px) rotate(${d}deg)`},children:N.value},N.key)}),f.jsx("div",{className:"joystick-knob",style:{position:"absolute",left:"50%",top:"50%",width:h*2,height:h*2,fontSize:v,transform:`translate(calc(-50% + ${a.nx*_}px), calc(-50% + ${a.ny*_}px))`,transition:u?"none":"transform 0.12s ease-out"},children:f.jsx("span",{style:{display:"inline-block",transform:o.rotation?`rotate(${o.rotation}deg)`:void 0,whiteSpace:o.rotation===90||o.rotation===270?"nowrap":void 0},children:o.name})})]})}function mb({control:o,disabled:i,onJoystick:c,width:a,height:u}){const d=o.rotation,h=L.useRef(null),[_,v]=L.useState(()=>{const H=Rh(o),ie=Kl(H.nx,H.ny,d);return{nx:ie.x,ny:ie.y}}),y=L.useRef(!1),x=L.useRef(null),N=o.joystickXMin??-100,R=o.joystickXMax??100,$=o.joystickYMin??-100,I=o.joystickYMax??100;function J(H,ie){const le=Kl(H,ie,Lo(d)),se=kh(le.x,N,R),he=kh(-le.y,$,I);(!x.current||x.current.x!==se||x.current.y!==he)&&(x.current={x:se,y:he},c(o.name,se,he))}function K(H){const ie=h.current;if(!ie)return;const le=ie.getBoundingClientRect(),{reach:se}=u_(le.width,le.height);let he=(H.clientX-(le.left+le.width/2))/se,ne=(H.clientY-(le.top+le.height/2))/se;const ee=Math.hypot(he,ne);ee>1&&(he/=ee,ne/=ee),v({nx:he,ny:ne}),J(he,ne)}function G(){const H=o.joystickXRecenter??"middle",ie=o.joystickYRecenter??"middle";if(H==="none"&&ie==="none")return;const le=Kl(_.nx,_.ny,Lo(d)),se=Rh(o),he={x:H==="none"?le.x:se.nx,y:ie==="none"?le.y:se.ny},ne=Kl(he.x,he.y,d),ee={nx:ne.x,ny:ne.y};y.current=!1,v(ee),J(ee.nx,ee.ny)}return f.jsx("div",{ref:h,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:H=>{i||(H.preventDefault(),H.currentTarget.setPointerCapture(H.pointerId),y.current=!0,K(H))},onPointerMove:H=>{i||!y.current||H.buttons===0||K(H)},onPointerUp:G,onPointerCancel:G,onLostPointerCapture:G,children:f.jsx(f_,{control:o,width:a,height:u,pos:_,dragging:y.current})})}const pb=[{direction:"up",rotate:0},{direction:"right",rotate:90},{direction:"down",rotate:180},{direction:"left",rotate:270}],hb="M 34 30 L 34 15 Q 34 8 41 8 L 59 8 Q 66 8 66 15 L 66 30 L 50 46 L 34 30 Z",_b=.1,gb={up:"OP",down:"NED",left:"VENSTRE",right:"HØJRE"},bb={up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]},yb=[{pos:"up",x:50,y:23},{pos:"right",x:78,y:50},{pos:"down",x:50,y:77},{pos:"left",x:22,y:50}];function Nf(o,i){return Math.hypot(o,i)<_b?null:Math.abs(o)>=Math.abs(i)?o>0?"right":"left":i>0?"down":"up"}function vb(o,i){const[c,a]=bb[o],u=Kl(c,a,Lo(i));return Nf(u.x,u.y)??o}function d_({control:o,active:i=null}){const c=o.rotation;return f.jsx("div",{className:"control-dpad",style:{width:"100%",height:"100%"},children:f.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet",children:[pb.map(a=>f.jsx("path",{className:`dpad-arm ${i===a.direction?"active":""}`,transform:`rotate(${a.rotate} 50 50)`,d:hb},a.direction)),yb.map(a=>{const u=gb[vb(a.pos,c)],d=u.length>5;return f.jsx("text",{className:`dpad-label ${i===a.pos?"active":""}`,x:a.x,y:a.y,textAnchor:"middle",dominantBaseline:"central",textLength:d?32:void 0,lengthAdjust:d?"spacingAndGlyphs":void 0,transform:c?`rotate(${c} ${a.x} ${a.y})`:void 0,children:u},a.pos)})]})})}function xb({control:o,disabled:i,onDpad:c}){const a=L.useRef(null),u=L.useRef(null),d=L.useRef(!1),[h,_]=L.useState(null);function v(R){const $=a.current;if(!$)return{screen:null,logical:null};const I=$.getBoundingClientRect(),J=Math.min(I.width,I.height)/2,K=(R.clientX-(I.left+I.width/2))/J,G=(R.clientY-(I.top+I.height/2))/J,H=Nf(K,G),ie=Kl(K,G,Lo(o.rotation)),le=Nf(ie.x,ie.y);return{screen:H,logical:le}}function y(R){const $=a.current;if(!$)return!1;const I=$.getBoundingClientRect(),J=(R.clientX-I.left)/I.width,K=(R.clientY-I.top)/I.height;return J>=0&&J<=1&&K>=0&&K<=1}function x(R){R.logical!==u.current&&(u.current&&c(o.name,u.current,!1),u.current=R.logical,R.logical&&c(o.name,R.logical,!0)),_(R.screen)}function N(){d.current=!1,x({screen:null,logical:null})}return f.jsx("div",{ref:a,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:R=>{i||!y(R)||(R.preventDefault(),R.currentTarget.setPointerCapture(R.pointerId),d.current=!0,x(v(R)))},onPointerMove:R=>{i||!d.current||R.buttons===0||x(v(R))},onPointerUp:N,onPointerCancel:N,onLostPointerCapture:N,children:f.jsx(d_,{control:o,active:h})})}const wb={button:"Knapper",slider:"Slidere",toggle:"Toggleknapper",radar:"Radar",text:"Tekstfelter",joystick:"Joysticks",dpad:"Dpads"},Sb=["button","slider","toggle","radar","text","joystick","dpad"];function Eb({unplaced:o,onAdd:i,onClose:c}){const a=L.useMemo(()=>Sb.filter(_=>o.some(v=>v.type===_)),[o]),[u,d]=L.useState(a[0]??"button"),h=o.filter(_=>_.type===u);return L.useEffect(()=>{a.length>0&&!a.includes(u)&&d(a[0])},[a,u]),f.jsxs(Sn,{title:"Tilføj kontrol",onClose:c,children:[a.length>1&&f.jsx("div",{className:"segmented add-modal-tabs",children:a.map(_=>f.jsx("button",{type:"button",className:u===_?"active":"",onClick:()=>d(_),children:wb[_]},_))}),f.jsx("div",{className:"add-lists",children:a.length===0?f.jsx("div",{className:"device-list-empty",children:"Alle kontroller er allerede placeret."}):h.map(_=>f.jsxs("button",{type:"button",className:"add-entry",onClick:()=>i(_.name),children:[f.jsx("span",{children:_.name}),f.jsx("span",{className:"iconbtn",children:f.jsx(Fn,{name:"plus",size:22})})]},_.name))})]})}function m_(o){const[i,c]=L.useState({w:0,h:0}),a=L.useRef(null),u=L.useRef(null);return L.useLayoutEffect(()=>{var v;const d=o.current;if(a.current===d)return;if((v=u.current)==null||v.disconnect(),u.current=null,a.current=d,!d){c(y=>y.w===0&&y.h===0?y:{w:0,h:0});return}const h=()=>{const y={w:d.clientWidth,h:d.clientHeight};c(x=>x.w===y.w&&x.h===y.h?x:y)};h();const _=new ResizeObserver(h);_.observe(d),u.current=_}),L.useEffect(()=>()=>{var d;(d=u.current)==null||d.disconnect(),u.current=null,a.current=null},[]),i}function Gi(o){return o.centerX2!==null&&o.centerY2!==null&&o.spanX!==null&&o.spanY!==null}const kb=4,Nb=5;function Rb(o){return o==="joystick"||o==="dpad"?{spanX:6,spanY:6}:{spanX:kb,spanY:Nb}}function Mh(o){if(!Gi(o))return null;const i=o.centerX2/2,c=o.centerY2/2;return{x0:i-o.spanX/2,x1:i+o.spanX/2,y0:c-o.spanY/2,y1:c+o.spanY/2}}function Mb(o,i,c=.02){return o.x0<i.x1-c&&i.x0<o.x1-c&&o.y0<i.y1-c&&i.y0<o.y1-c}function jh(o,i){const c=Ja(o,i);if(!c||o.spanX===null||o.spanY===null)return o;const a=To(c.cx,c.cy,o.spanX,o.spanY,i);return{...o,centerX2:a.centerX2,centerY2:a.centerY2}}function Th(o,i){return Math.max(1,Math.min(i.cols-1,o))}function Ah(o,i){return Math.max(1,Math.min(i.rows-1,o))}function jb(){const o=te(j=>j.layout),i=te(j=>j.active),c=te(j=>j.saveLayout),a=te(j=>j.setEditMode),u=te(j=>j.askConfirm),d=!!(i!=null&&i.canEdit),[h,_]=L.useState(()=>o.map(j=>({...j}))),[v,y]=L.useState(null),[x,N]=L.useState(!1),[R,$]=L.useState(null),[I,J]=L.useState(null),[K,G]=L.useState(!1),H=L.useRef(null),ie=m_(H),le=ie.w>0&&ie.h>0,se=e_(ie.w,ie.h,i==null?void 0:i.gridCols,i==null?void 0:i.gridRows),he=L.useMemo(()=>le?k0(se):[],[se,le]),ne=h.filter(Gi),ee=h.filter(j=>!Gi(j)),xe=L.useMemo(()=>{const j=new Set;for(let F=0;F<ne.length;F+=1)for(let Q=F+1;Q<ne.length;Q+=1){const X=Mh(ne[F]),Le=Mh(ne[Q]);X&&Le&&Mb(X,Le)&&(j.add(ne[F].name),j.add(ne[Q].name))}return j},[ne]),ge=xe.size>0,ye=h.find(j=>j.name===v)??null,ae=L.useMemo(()=>Dh(h)!==Dh(o),[h,o]),Ve=L.useMemo(()=>{if(!R||!I)return null;const j=h.find(X=>X.name===R);if(!j||j.spanX===null||j.spanY===null)return null;const F=To(I.cx,I.cy,j.spanX,j.spanY,se),Q=Ja({...j,centerX2:F.centerX2,centerY2:F.centerY2},se);return Q?{name:j.name,rect:Q}:null},[h,R,I,se]);function Re(j,F){_(Q=>Q.map(X=>X.name===j?F(X):X))}function Pe(j,F){j.stopPropagation(),y(F.name);const Q=Ja(F,se);Q&&($(F.name),J({cx:Q.cx,cy:Q.cy}),j.currentTarget.setPointerCapture(j.pointerId))}function z(j){if(!R)return;const F=H.current;if(!F)return;const Q=F.getBoundingClientRect(),X=F.clientWidth/Q.width,Le=F.clientHeight/Q.height;J({cx:Math.max(0,Math.min(F.clientWidth,(j.clientX-Q.left)*X)),cy:Math.max(0,Math.min(F.clientHeight,(j.clientY-Q.top)*Le))})}function Z(){if(R&&I){const j=h.find(F=>F.name===R);if(j&&j.spanX!==null&&j.spanY!==null){const F=To(I.cx,I.cy,j.spanX,j.spanY,se);Re(R,Q=>({...Q,centerX2:F.centerX2,centerY2:F.centerY2}))}}$(null),J(null)}function oe(j){Re(j,F=>F.spanX===null||F.spanY===null?{...F,rotation:(F.rotation+270)%360}:jh({...F,rotation:(F.rotation+270)%360,spanX:Th(F.spanY,se),spanY:Ah(F.spanX,se)},se))}function we(j,F,Q){Re(j,X=>{if(X.spanX===null||X.spanY===null)return X;const Le=F==="x"?Th(X.spanX+Q,se):X.spanX,Te=F==="y"?Ah(X.spanY+Q,se):X.spanY;return jh({...X,spanX:Le,spanY:Te},se)})}function ke(j){Re(j,F=>({...F,centerX2:null,centerY2:null,spanX:null,spanY:null,rotation:0})),y(null)}function S(j){N(!1);const F=h.find(Te=>Te.name===j);if(!F)return;const{spanX:Q,spanY:X}=Rb(F.type),Le=To(se.areaW/2,se.areaH/2,Q,X,se);Re(j,()=>({...F,spanX:Q,spanY:X,rotation:0,centerX2:Le.centerX2,centerY2:Le.centerY2})),y(j)}async function B(){ge||(G(!0),await c(h),G(!1))}function W(){if(!ae){a(!1);return}u({title:"Kassér ændringer",message:"Vil du forlade redigering og kassere dine layout-ændringer?",confirmLabel:"Kassér",onConfirm:()=>a(!1)})}return f.jsxs("div",{className:"edit-view",children:[f.jsx("div",{className:"edit-band edit-toolbar-band",children:ye&&Gi(ye)?f.jsxs("div",{className:"edit-toolbar",onPointerDown:j=>j.stopPropagation(),children:[f.jsx(Fa,{label:"⟲",title:"Roter",onClick:()=>oe(ye.name)}),f.jsx(Fa,{label:"W−",title:"Gør smallere",onClick:()=>we(ye.name,"x",-1),disabled:ye.spanX===null||ye.spanX<=1}),f.jsx(Fa,{label:"W+",title:"Gør bredere",onClick:()=>we(ye.name,"x",1),disabled:ye.spanX===null||ye.spanX>=se.cols-1}),f.jsx(Fa,{label:"H−",title:"Gør lavere",onClick:()=>we(ye.name,"y",-1),disabled:ye.spanY===null||ye.spanY<=1}),f.jsx(Fa,{label:"H+",title:"Gør højere",onClick:()=>we(ye.name,"y",1),disabled:ye.spanY===null||ye.spanY>=se.rows-1}),f.jsx("button",{className:"iconbtn",style:{color:"var(--red)"},onClick:()=>ke(ye.name),"aria-label":"Slet",children:f.jsx(Fn,{name:"delete",size:24})})]}):f.jsx("span",{className:"edit-hint",children:"Vælg en kontrol for at redigere"})}),f.jsx("div",{className:"controls-area-wrap",children:f.jsx("div",{className:"controls-area",ref:H,style:{touchAction:"none"},onPointerMove:z,onPointerUp:Z,onPointerDown:()=>y(null),children:le&&f.jsxs(f.Fragment,{children:[f.jsx("svg",{width:se.areaW,height:se.areaH,style:{position:"absolute",inset:0,pointerEvents:"none"},children:he.map((j,F)=>f.jsx("circle",{cx:j.x,cy:j.y,r:2.5,fill:"rgba(198,80,78,0.45)"},F))}),Ve&&f.jsx("div",{className:"snap-preview",style:{left:Ve.rect.cx,top:Ve.rect.cy,width:Ve.rect.width,height:Ve.rect.height}}),ne.map(j=>{const F=R===j.name&&I,Q=Ja(j,se);if(!Q)return null;const X=F?I.cx:Q.cx,Le=F?I.cy:Q.cy,Te={left:X,top:Le,width:Q.width,height:Q.height,outline:v===j.name?"3px solid var(--text)":"none",outlineOffset:2};return f.jsx("div",{className:`control ${xe.has(j.name)?"colliding":""}`,style:Te,onPointerDown:Yn=>Pe(Yn,j),children:j.type==="button"?f.jsx("div",{className:"control-button",style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},children:f.jsx(Bo,{name:j.name,width:Q.width,height:Q.height,rotation:j.rotation})}):j.type==="toggle"?f.jsx("div",{className:"control-toggle on",style:{width:"100%",height:"100%"},children:f.jsx(Bo,{name:j.name,width:Q.width,height:Q.height,rotation:j.rotation})}):j.type==="radar"?f.jsx(s_,{control:j,pings:[],width:Q.width,height:Q.height,preview:!0}):j.type==="text"?f.jsx(a_,{message:j.name,width:Q.width,height:Q.height,rotation:j.rotation}):j.type==="joystick"?f.jsx(f_,{control:j,width:Q.width,height:Q.height,pos:{nx:0,ny:0}}):j.type==="dpad"?f.jsx(d_,{control:j}):f.jsx("div",{className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:f.jsx(c_,{name:j.name,rotation:j.rotation,width:Q.width,height:Q.height,value:50,showEnds:!0,lowLabel:String(j.sliderMin??0),highLabel:String(j.sliderMax??100),fillColor:xe.has(j.name)?"var(--disabled)":"var(--red)"})})},j.name)}),d&&f.jsx("button",{type:"button",className:"fab",style:{width:52,height:52,right:12,bottom:12},onPointerDown:j=>j.stopPropagation(),onClick:()=>N(!0),"aria-label":"Tilføj kontrol",children:f.jsx(Fn,{name:"plus",size:24})}),K&&f.jsx("div",{className:"overlay",children:f.jsx("div",{className:"spinner"})})]})})}),f.jsxs("div",{className:"edit-band edit-actions-band",children:[f.jsx("button",{className:"btn btn-outline",style:{flex:1},type:"button",onClick:W,disabled:K,children:"Annuller"}),f.jsx("button",{className:"btn btn-primary",style:{flex:1},type:"button",onClick:B,disabled:ge||K,children:K?"Gemmer...":"Gem"})]}),x&&f.jsx(Eb,{unplaced:ee,onAdd:S,onClose:()=>N(!1)})]})}function Dh(o){return JSON.stringify(o.map(i=>({type:i.type,name:i.name,centerX2:i.centerX2,centerY2:i.centerY2,spanX:i.spanX,spanY:i.spanY,rotation:i.rotation})))}function Fa({label:o,title:i,disabled:c,onClick:a}){return f.jsx("button",{type:"button","aria-label":i,title:i,disabled:c,onClick:a,style:{minWidth:38,height:38,borderRadius:12,background:c?"var(--grey)":"var(--red)",color:"var(--white)",fontWeight:800,fontSize:14,padding:"0 8px"},children:o})}function Tb(){const o=te(H=>H.layout),i=te(H=>H.editMode),c=te(H=>H.active),a=te(H=>H.sliderValues),u=te(H=>H.toggleValues),d=te(H=>H.radarPings),h=te(H=>H.textValues),_=te(H=>H.toggleSideMenu),v=te(H=>H.sendButton),y=te(H=>H.sendSlider),x=te(H=>H.sendToggle),N=te(H=>H.sendJoystick),R=te(H=>H.sendDpad),$=L.useRef(null),I=m_($),J=e_(I.w,I.h,c==null?void 0:c.gridCols,c==null?void 0:c.gridRows),K=I.w>0&&I.h>0,G=o.filter(Gi);return f.jsxs("div",{className:"screen control-screen",children:[f.jsx(Vf,{title:"Kontrol Panel",onMenu:()=>_()}),i?f.jsx(jb,{}):f.jsx("div",{className:"controls-area-wrap",children:f.jsx("div",{className:"controls-area",ref:$,children:K?G.map(H=>{const ie=Ja(H,J);return ie?f.jsx(nb,{control:H,rect:ie,disabled:!1,latestValue:H.type==="slider"?a[H.name]:void 0,toggleValue:H.type==="toggle"?u[H.name]:void 0,radarPings:H.type==="radar"?d[H.name]:void 0,textValue:H.type==="text"?h[H.name]:void 0,onButton:v,onSlider:y,onToggle:x,onJoystick:N,onDpad:R},H.name):null}):f.jsx("div",{className:"overlay",children:f.jsx("div",{className:"spinner"})})})})]})}const Ab="",Oh="",Ch="",Xl="";function Ka(o){return new Promise(i=>setTimeout(i,o))}class Db{constructor(i){this.transport=i}async interrupt(){await this.transport.write(Ch),await Ka(80),await this.transport.write(Ch)}async friendlyRepl(){await this.transport.write(Oh)}async softReset(){await this.transport.write(Xl)}async stop(){await this.interrupt(),await this.friendlyRepl().catch(()=>{})}async runFile(i,c){await this.interrupt(),await this.waitForFriendlyPrompt().catch(async()=>{await this.friendlyRepl().catch(()=>{}),await Ka(180)}),await Ka(120),c==null||c(),await this.transport.writeLine(`import builtins as _pkp_builtins; exec(_pkp_builtins.open(${JSON.stringify(i)}).read())`)}async sendFriendlyLine(i){await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(i)}async sendProgramInput(i){await this.transport.writeLine(i)}async enterRawRepl(i=2500){if(await this.interrupt(),await Ka(80),await this.transport.write(`\r
`),await Ka(40),!(await this.collectUntil(async()=>{await this.transport.write(Ab)},a=>a.includes("raw REPL")||a.includes("raw REPL; CTRL-B to exit"),i)).includes("raw REPL"))throw new Error("Kunne ikke skifte til MicroPython raw REPL.")}async exec(i,c=6e3){await this.enterRawRepl();const a=await this.collectUntil(async()=>{await this.transport.write(i),i.endsWith(`
`)||await this.transport.write(`
`),await this.transport.write(Xl)},u=>u.includes(`${Xl}${Xl}`)||u.includes(`${Xl}>`),c);return await this.friendlyRepl().catch(()=>{}),Ob(a)}collectUntil(i,c,a){return new Promise((u,d)=>{let h="",_=null;const v=setTimeout(()=>{_==null||_(),d(new Error("Timeout ved USB REPL kommando."))},a);_=this.transport.addDataListener(y=>{h+=y,c(h)&&(clearTimeout(v),_==null||_(),u(h))}),i().catch(y=>{clearTimeout(v),_==null||_(),d(y instanceof Error?y:new Error("USB REPL kommando fejlede."))})})}async waitForFriendlyPrompt(i=1600){await this.collectUntil(async()=>{await this.transport.write(Oh)},c=>/(^|\r?\n)>>> ?$/.test(c),i)}}function Ob(o){const i=o.indexOf("OK"),c=o.indexOf(Xl,i>=0?i:0),a=c>=0?o.indexOf(Xl,c+1):-1;if(i<0||c<0)return{output:o.trim(),error:"",raw:o};const u=o.slice(i+2,c).replace(/^\r?\n/,"").trimEnd(),d=a>=0?o.slice(c+1,a).trim():"";return{output:u,error:d,raw:o}}const Cb=[{version:"MicroPython v1.28.0",date:"2026-04-06",stamp:"20260406",tag:"v1.28.0"},{version:"MicroPython v1.27.0",date:"2025-12-09",stamp:"20251209",tag:"v1.27.0"},{version:"MicroPython v1.26.1",date:"2025-09-11",stamp:"20250911",tag:"v1.26.1"},{version:"MicroPython v1.26.0",date:"2025-08-09",stamp:"20250809",tag:"v1.26.0"},{version:"MicroPython v1.25.0",date:"2025-04-15",stamp:"20250415",tag:"v1.25.0"},{version:"MicroPython v1.24.1",date:"2024-11-29",stamp:"20241129",tag:"v1.24.1"},{version:"MicroPython v1.24.0",date:"2024-10-25",stamp:"20241025",tag:"v1.24.0"},{version:"MicroPython v1.23.0",date:"2024-06-02",stamp:"20240602",tag:"v1.23.0"},{version:"MicroPython v1.22.2",date:"2024-02-22",stamp:"20240222",tag:"v1.22.2"},{version:"MicroPython v1.22.1",date:"2024-01-05",stamp:"20240105",tag:"v1.22.1"}],Lb=[{board:"Raspberry Pi Pico",firmwareName:"RPI_PICO"},{board:"Raspberry Pi Pico W",firmwareName:"RPI_PICO_W"}],fl=Lb.flatMap(({board:o,firmwareName:i})=>Cb.map(({version:c,date:a,stamp:u,tag:d})=>{const h=`${i}-${u}-${d}.uf2`;return{board:o,version:c,date:a,fileName:h,url:`https://micropython.org/resources/firmware/${h}`}})),gf=512,bf=`import builtins as _pkp_builtins
`;function jr(o){return JSON.stringify(o)}function Bb(o){return`bytes.fromhex(${JSON.stringify([...o].map(i=>i.toString(16).padStart(2,"0")).join(""))})`}function zb(o,i){return`${o==="/"?"":o.replace(/\/$/,"")}/${i}`}class Ub{constructor(i){this.repl=i}async list(i="/"){const c=`
import os
base = ${jr(i)}
for name in os.listdir(base):
    p = (${jr(i)}.rstrip('/') + '/' + name) if ${jr(i)} != '/' else '/' + name
    try:
        st = os.stat(p)
        mode = st[0]
        kind = 'dir' if (mode & 0x4000) else 'file'
        size = st[6]
    except Exception:
        kind = 'unknown'
        size = -1
    print(name + '\\t' + kind + '\\t' + str(size))
`,a=await this.repl.exec(c);if(a.error)throw new Error(a.error);return a.output.split(/\r?\n/).map(u=>u.trim()).filter(Boolean).map(u=>{const[d,h,_]=u.split("	"),v=h==="dir"||h==="file"?h:"unknown",y=parseInt(_??"",10);return{name:d,path:zb(i,d),type:v,...Number.isFinite(y)&&y>=0?{size:y}:{}}})}async readText(i){const c=`
import sys
${bf}with _pkp_builtins.open(${jr(i)}, 'rb') as f:
    while True:
        b = f.read(${gf})
        if not b:
            break
        print(b.hex())
`,a=await this.repl.exec(c,1e4);if(a.error)throw new Error(a.error);const u=a.output.replace(/\s+/g,"");return new TextDecoder().decode(Hb(u))}async writeText(i,c,a){const u=new TextEncoder().encode(c);if(a==null||a(5,"Klargør fil..."),await this.repl.exec(`${bf}_pkp_builtins.open(${jr(i)}, 'wb').close()`),u.length===0){a==null||a(100,"Gemt på Pico");return}for(let d=0;d<u.length;d+=gf){const h=u.slice(d,d+gf),_=`
${bf}with _pkp_builtins.open(${jr(i)}, 'ab') as f:
    f.write(${Bb(h)})
`,v=await this.repl.exec(_,1e4);if(v.error)throw new Error(v.error);const y=Math.min(d+h.length,u.length);a==null||a(10+Math.round(y/u.length*85),`Gemmer ${y}/${u.length} bytes...`)}a==null||a(100,"Gemt på Pico")}async replaceTextSafely(i,c,a,u={}){const d=`${i}.tmp`;if(await this.writeText(d,c,(v,y)=>a==null?void 0:a(Math.min(70,v*.7),y)),a==null||a(78,"Verificerer fil..."),await this.readText(d)!==c)throw await this.delete(d).catch(()=>{}),new Error(`Verificering fejlede for ${i}.`);a==null||a(88,"Udskifter fil...");let _=!!u.createBackup;if(_){const v=await this.readText(i).catch(()=>null);_=v!==null&&v!==c}if(_){const v=await this.nextBackupPath(i).catch(()=>`${i}.backup`);await this.rename(i,v).catch(()=>{})}else await this.delete(i).catch(()=>{});await this.rename(d,i),a==null||a(100,"Installeret på Pico")}async delete(i){const c=await this.repl.exec(`
import os
os.remove(${jr(i)})
`);if(c.error)throw new Error(c.error)}async nextBackupPath(i){const c=await this.list("/"),a=new Set(c.map(N=>N.path.toLowerCase())),u=i.replace(/\\/g,"/"),d=u.lastIndexOf("/"),h=d>=0?u.slice(0,d+1):"/",_=d>=0?u.slice(d+1):u.replace(/^\/+/,""),v=_.lastIndexOf("."),y=v>0?_.slice(0,v):_,x=v>0?_.slice(v):"";for(let N=1;N<1e3;N+=1){const R=`${h}${y}_backup${N}${x}`;if(!a.has(R.toLowerCase()))return R}return`${h}${y}_backup${Date.now()}${x}`}async rename(i,c){const a=await this.repl.exec(`
import os
os.rename(${jr(i)}, ${jr(c)})
`);if(a.error)throw new Error(a.error)}}function Hb(o){const i=new Uint8Array(Math.floor(o.length/2));for(let c=0;c<i.length;c+=1)i[c]=parseInt(o.slice(c*2,c*2+2),16);return i}const Vb=`import ubluetooth\r
import utime as time\r
from micropython import const\r
import struct\r
import os\r
import ubinascii\r
import machine\r
\r
__version__ = '0.7.0'\r
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
        elif msg == "who_are_you":\r
            if self.owner_id:\r
                self._send_reliable_stream(["owned,{},{},{},{},{},{}".format(\r
                    self.owner_id,\r
                    int(self.icon_id),\r
                    int(self.can_others_connect),\r
                    int(self.can_others_edit),\r
                    int(self.can_others_edit_code),\r
                    self._protocol_field(self.owner_name),\r
                )])\r
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
    # -------------------- External hooks --------------------\r
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
`,Gb=`from machine import Pin, time_pulse_us\r
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
        return cms`,Yb=`import array, time\r
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
`,Ib=`from machine import Pin
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


def on_slider(name, value):
    """FART-slideren sætter farten."""
    global speed_percent
    if name == 'FART':
        speed_percent = int(clamp(value, 0, 100))
        apply_drive()


def on_connect():
    # Når appen forbinder, tænder LED'en.
    led.on()
    print('BLE client connected')


def on_disconnect():
    # Når appen afbryder, slukker LED'en, nulstiller retninger og stopper motorerne.
    led.off()
    for key in held:
        held[key] = False
    board.motorOff(1)
    board.motorOff(2)
    print('BLE client disconnected')


# callbacks=globals() gør, at BLEPeripheral kan finde on_dpad osv.
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())


while True:
    # BLE-funktionerne styrer bilen. Hold programmet i gang og giv CPU-tid
    # til Bluetooth.
    time.sleep_ms(100)
`,qb=`from machine import Pin
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


def on_slider(name, value):
    """FART-slideren sætter den maksimale fart."""
    global speed_percent
    if name == 'FART':
        speed_percent = int(clamp(value, 0, 100))
        apply_drive()


def on_connect():
    # Når appen forbinder, tænder LED'en.
    led.on()
    print('BLE client connected')


def on_disconnect():
    # Når appen afbryder, slukker LED'en og begge motorer stoppes.
    global last_x, last_y
    led.off()
    last_x = 0
    last_y = 0
    board.motorOff(1)
    board.motorOff(2)
    print('BLE client disconnected')


# callbacks=globals() gør, at BLEPeripheral kan finde on_joystick osv.
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())


while True:
    # BLE-funktionerne styrer bilen. Hold programmet i gang og giv CPU-tid
    # til Bluetooth.
    time.sleep_ms(100)
`,Pb=`from machine import Pin
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
    """Send den første besked når appen forbinder."""
    led.on()
    print('BLE client connected')


def on_disconnect():
    """Sluk lyset når appen mister forbindelsen."""
    global light_is_on

    light_is_on = False
    show_light()
    led.off()
    print('BLE client disconnected')


# callbacks=globals() betyder:
# "Brug funktionerne ovenfor, når appen sender noget."
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())


while True:
    # Programmet skal blive ved med at køre, så appen kan sende kommandoer.
    time.sleep_ms(100)
`,$b=`# PicoFly.py\r
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
`,Xb=`import machine\r
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
        self.initPCA()`,Fb=`from machine import Pin\r
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
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.
DEVICE_NAME = 'Radar'

BluetoothControls = (
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
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())
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
`,Kb=`from machine import Pin\r
import utime as time\r
from BLEPeripheral import BLEPeripheral


# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.
DEVICE_NAME = 'SendTekst'

# Appen viser kun et tekstfelt.
BluetoothControls = (
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
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())
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
`,Qb=`from machine import Pin, PWM, ADC\r
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
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.
DEVICE_NAME = 'AlarmDemo'

BluetoothControls = (
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

    # De her knapper skal kun gøre noget, når de trykkes ned.
    # Når knappen slippes, stopper funktionen her.
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
ble = BLEPeripheral(
    base_controls=BluetoothControls,
    device_base_name=DEVICE_NAME,
    callbacks=globals(),
)
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
`,Zb=`from machine import Pin\r
import utime as time\r
from BLEPeripheral import BLEPeripheral\r
import PicoRobotics\r
\r
\r
# Simpelt tank-styringsprogram til en robotbil med to motorer.\r
# Hver slider sender -100..100 og går tilbage til 0, når den slippes.\r
# Bluetooth-navnet bliver PicoW-DEVICE_NAME i appens enhedsliste.
DEVICE_NAME = 'TankBil'

# BluetoothControls bestemmer, hvilke sliders appen viser.
BluetoothControls = (
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
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name=DEVICE_NAME, callbacks=globals())
\r
\r
while True:\r
    # BLE-funktionerne styrer bilen. Hold programmet i gang og giv CPU-tid\r
    # til Bluetooth.\r
    time.sleep_ms(100)\r
`,zi=[{id:"program:neopixel-led",path:"/main.py",label:"NeoPixel lys (main.py)",description:"Startprogram til NeoPixel med hold-knap og lysstyrke-slider.",kind:"program",content:Pb},{id:"program:send-text",path:"/main.py",label:"Send tekst (main.py)",description:"Startprogram med kun et tekstfelt, hvor Picoen sender beskeder til kontrolpanelet.",kind:"program",content:Kb},{id:"program:tank-control",path:"/main.py",label:"Robotbil med tankstyring (main.py)",description:"Startprogram til robotbil med to motor-slidere.",kind:"program",content:Zb},{id:"program:joystick-control",path:"/main.py",label:"Robotbil med joystick (main.py)",description:"Startprogram til robotbil styret med joystick og fart-slider.",kind:"program",content:qb},{id:"program:dpad-control",path:"/main.py",label:"Robotbil med D-pad (main.py)",description:"Startprogram til robotbil styret med fire retningsknapper og fart-slider.",kind:"program",content:Ib},{id:"program:radar-control",path:"/main.py",label:"Radar med afstandssensor (main.py)",description:"Startprogram til radar med servo, afstandssensor og scan-toggle.",kind:"program",content:Fb},{id:"program:smart-home",path:"/main.py",label:"SmartHome alarmstation (main.py)",description:"Startprogram til alarmstation med dør-servo, keypad, PIR, vandsensor, buzzer og NeoPixel.",kind:"program",content:Qb},{id:"library:ble-peripheral",path:"/BLEPeripheral.py",label:"BLEPeripheral.py",description:"Bluetooth-biblioteket der får Picoen til at tale med appen.",kind:"library",content:Vb},{id:"library:pico-robotics",path:"/PicoRobotics.py",label:"PicoRobotics.py",description:"Bibliotek til Kitronik Pico Robotics Board.",kind:"library",content:Xb},{id:"library:pico-fly",path:"/PicoFly.py",label:"PicoFly.py",description:"Bibliotek til PicoFly-board med motorer og servoer.",kind:"library",content:$b},{id:"library:hcsr04",path:"/hcsr04.py",label:"hcsr04.py",description:"Bibliotek til HC-SR04 ultralyds-afstandssensor.",kind:"library",content:Gb},{id:"library:neopixel",path:"/neopixel.py",label:"neopixel.py",description:"Bibliotek til NeoPixel LED-strips og LED-ringe.",kind:"library",content:Yb}],Wb=11914;function Jb(){return typeof navigator<"u"&&"serial"in navigator&&!!navigator.serial}function ey(){return Jb()?{supported:!0,message:"USB-udvikling er tilgængelig i denne browser."}:{supported:!1,message:"USB-udvikling kræver en computer med Chrome, Edge eller Chromebook."}}class ny{constructor(i={}){ue(this,"port",null);ue(this,"reader",null);ue(this,"writer",null);ue(this,"readLoopDone",null);ue(this,"readLoopActive",!1);ue(this,"disconnecting",!1);ue(this,"buffer","");ue(this,"events");ue(this,"dataListeners",new Set);this.events=i}get connected(){return!!this.port&&!!this.writer}get info(){var i;return((i=this.port)==null?void 0:i.getInfo())??null}async requestAndConnect(){if(!navigator.serial)throw new Error("Web Serial er ikke tilgængelig i denne browser.");const i=await navigator.serial.requestPort({filters:[{usbVendorId:Wb}]});await this.openPort(i)}async connectKnownPort(i){await this.openPort(i)}async disconnect(){var v,y;const i=this.connected||!!this.port||!!this.reader,c=this.port,a=this.reader,u=this.writer,d=this.readLoopDone,h=a==null?void 0:a.closed.catch(()=>{}),_=u==null?void 0:u.closed.catch(()=>{});this.disconnecting=!0,this.readLoopActive=!1;try{await(a==null?void 0:a.cancel())}catch{}d&&await d.catch(()=>{}),await h;try{a==null||a.releaseLock()}catch{}this.reader===a&&(this.reader=null);try{await(u==null?void 0:u.close()),await _}catch{try{await(u==null?void 0:u.abort("disconnect"))}catch{}}try{u==null||u.releaseLock()}catch{}this.writer===u&&(this.writer=null),c&&await c.close(),this.port===c&&(this.port=null),this.buffer="",this.readLoopDone===d&&(this.readLoopDone=null),this.disconnecting=!1,i&&((y=(v=this.events).onDisconnect)==null||y.call(v))}async write(i){if(!this.writer)throw new Error("Ingen USB-forbindelse.");await this.writer.write(new TextEncoder().encode(i))}async writeLine(i){await this.write(`${i}\r
`)}addDataListener(i){return this.dataListeners.add(i),()=>this.dataListeners.delete(i)}async openPort(i){var a,u,d;if(await this.disconnect().catch(()=>{}),await i.open({baudRate:115200,bufferSize:4096}),this.port=i,this.writer=((a=i.writable)==null?void 0:a.getWriter())??null,!this.writer||!i.readable)throw new Error("USB-porten kunne ikke åbnes til læsning og skrivning.");const c=i.getInfo();(d=(u=this.events).onLog)==null||d.call(u,"success",`USB-forbindelse oprettet (${ty(c)}).`),this.readLoopDone=this.startReadLoop(i)}async startReadLoop(i){var u,d,h;this.readLoopActive=!0;const c=new TextDecoder;this.reader=((u=i.readable)==null?void 0:u.getReader())??null;const a=this.reader;if(a)try{for(;this.readLoopActive;){const{value:_,done:v}=await a.read();if(v)break;_&&this.consumeText(c.decode(_,{stream:!0}))}}catch(_){this.readLoopActive&&((h=(d=this.events).onLog)==null||h.call(d,"error",_ instanceof Error?_.message:"USB-læsning stoppede."))}finally{try{a.releaseLock()}catch{}this.reader===a&&(this.reader=null),this.readLoopActive&&!this.disconnecting&&this.port===i&&this.closeAfterUnexpectedReadEnd(i)}}async closeAfterUnexpectedReadEnd(i){var d,h;const c=this.connected||this.port===i;this.disconnecting=!0,this.readLoopActive=!1;const a=this.writer,u=a==null?void 0:a.closed.catch(()=>{});try{await(a==null?void 0:a.close()),await u}catch{try{await(a==null?void 0:a.abort("disconnect"))}catch{}}try{a==null||a.releaseLock()}catch{}this.writer===a&&(this.writer=null);try{await i.close()}catch{}this.port===i&&(this.port=null),this.buffer="",this.readLoopDone=null,this.disconnecting=!1,c&&((h=(d=this.events).onDisconnect)==null||h.call(d))}consumeText(i){var c,a,u,d;(a=(c=this.events).onData)==null||a.call(c,i);for(const h of this.dataListeners)h(i);for(this.buffer+=i;this.buffer.includes(`
`);){const h=this.buffer.indexOf(`
`),_=this.buffer.slice(0,h).replace(/\r$/,"");this.buffer=this.buffer.slice(h+1),(d=(u=this.events).onLine)==null||d.call(u,_)}}}function ty(o){const i=o.usbVendorId!==void 0?`VID ${o.usbVendorId.toString(16).padStart(4,"0")}`:"ukendt VID",c=o.usbProductId!==void 0?`PID ${o.usbProductId.toString(16).padStart(4,"0")}`:"ukendt PID";return`${i}, ${c}`}const p_=15e3,Lh=64*1024,Bh=1e5,h_=new URL("/micropython/micropython.mjs",window.location.origin).toString(),ry=new Set(["bluetooth","machine","network","PicoRobotics","rp2","ubluetooth"]);class ly{constructor(){ue(this,"worker",null);ue(this,"pending",null);ue(this,"nextId",0)}send(i,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython-terminalen er optaget. Stop den, eller vent på at kommandoen bliver færdig.",timedOut:!1,unavailable:!1});const a=++this.nextId,u=c.timeoutMs??p_,d=this.ensureWorker();return new Promise(h=>{const _=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython-terminalen stoppede, fordi kommandoen tog for lang tid. Tjek for uendelige løkker.",timedOut:!0,unavailable:!1}),this.restartWorker()},u);this.pending={id:a,timer:_,onOutput:c.onOutput,resolve:h},d.postMessage({type:"run",id:a,code:ay(i),runtimeUrl:h_})})}reset(){this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),this.restartWorker()}dispose(){var i;this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),(i=this.worker)==null||i.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const i=new Worker(new URL(""+new URL("offlineMicroPython.worker-DOVmpzen.js",import.meta.url).href,import.meta.url));return i.onmessage=c=>this.handleMessage(c.data),i.onerror=c=>{this.finish({ok:!1,output:"",error:c.message||"Browser-MicroPython-terminalen fejlede i browser-worker.",timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=i,i}handleMessage(i){var a;const c=this.pending;if(!(!c||i.id!==c.id||i.type==="ready")){if(i.type==="stdout"){(a=c.onOutput)==null||a.call(c,i.text);return}if(i.type==="unavailable"){this.finish({ok:!1,output:"",error:i.error,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:i.ok,output:i.output,error:i.error,timedOut:!1,unavailable:!1})}}finish(i){const c=this.pending;c&&(window.clearTimeout(c.timer),this.pending=null,c.resolve(i))}restartWorker(){var i;(i=this.worker)==null||i.terminate(),this.worker=null}}class iy{constructor(){ue(this,"worker",null);ue(this,"pending",null);ue(this,"nextId",0)}run(i,c={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython kører allerede kode. Stop den først.",issues:[],timedOut:!1,unavailable:!1});const a=typeof c=="number"?c:c.timeoutMs??p_,u=typeof c=="number"?void 0:c.onOutput,d=typeof c=="number"?void 0:c.signal,h=Rf(i,{allowInput:!0});if(h.some(y=>y.level==="error"))return Promise.resolve({ok:!1,output:"",error:"",issues:h,timedOut:!1,unavailable:!1});const _=++this.nextId,v=this.ensureWorker();return new Promise(y=>{const x=I=>this.finish(I),N=()=>{v.postMessage({type:"stop",id:_}),x({ok:!1,output:"",error:"",issues:h,timedOut:!1,unavailable:!1})},R=window.setTimeout(()=>{x({ok:!1,output:"",error:"Offline MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:h,timedOut:!0,unavailable:!1}),this.restartWorker()},a);if(this.pending={id:_,timer:R,issues:h,onOutput:u,signal:d,abort:N,resolve:y},d!=null&&d.aborted){N();return}d==null||d.addEventListener("abort",N,{once:!0});const $={type:"run",id:_,code:i,runtimeUrl:h_,interactive:!0};v.postMessage($)})}sendInput(i){const c=this.pending;!c||!this.worker||this.worker.postMessage({type:"stdin",id:c.id,text:i})}stop(){const i=this.pending;!i||!this.worker||(this.worker.postMessage({type:"stop",id:i.id}),this.finish({ok:!1,output:"",error:"Browser-MicroPython blev stoppet.",issues:i.issues,timedOut:!1,unavailable:!1}),this.restartWorker())}dispose(){var i;this.finish({ok:!1,output:"",error:"",issues:[],timedOut:!1,unavailable:!1}),(i=this.worker)==null||i.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const i=new Worker(new URL(""+new URL("offlineMicroPython.worker-DOVmpzen.js",import.meta.url).href,import.meta.url));return i.onmessage=c=>this.handleMessage(c.data),i.onerror=c=>{const a=this.pending;this.finish({ok:!1,output:"",error:c.message||"Offline MicroPython fejlede i browser-worker.",issues:(a==null?void 0:a.issues)??[],timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=i,i}handleMessage(i){var a;const c=this.pending;if(!(!c||i.id!==c.id||i.type==="ready")){if(i.type==="stdout"){(a=c.onOutput)==null||a.call(c,i.text);return}if(i.type==="unavailable"){this.finish({ok:!1,output:"",error:i.error,issues:c.issues,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:i.ok,output:i.output,error:i.error,issues:c.issues,timedOut:!1,unavailable:!1}),this.restartWorker()}}finish(i){var a;const c=this.pending;c&&(window.clearTimeout(c.timer),(a=c.signal)==null||a.removeEventListener("abort",c.abort),this.pending=null,c.resolve(i))}restartWorker(){var i;(i=this.worker)==null||i.terminate(),this.worker=null}}function ay(o){const i=JSON.stringify(o);return["try:",`    __pico_repl_value = eval(${i})`,"    if __pico_repl_value is not None:","        print(repr(__pico_repl_value))","except SyntaxError:",`    exec(${i})`,"finally:","    try:","        del __pico_repl_value","    except Exception:","        pass"].join(`
`)}function Rf(o,i={}){const c=[],a=new Blob([o]).size;a>Lh&&c.push({level:"error",text:`Koden er ${a} bytes. Offline MicroPython kører kun små programmer op til ${Lh} bytes.`});const u=o.split(/\r?\n/);for(let d=0;d<u.length;d+=1){const h=d+1,_=zo(u[d]).trim();if(!_)continue;const v=oy(_);v&&ry.has(v)&&c.push({level:"error",line:h,text:`${v} virker kun på Picoen. Forbind en Pico for at køre denne kode.`}),!i.allowInput&&sy(u[d])&&c.push({level:"error",line:h,text:"input() virker kun, når koden kører på Pico via USB. Forbind Pico med USB, gem filen på Picoen, og kør koden derfra."});const y=_.match(/\brange\(\s*(-?\d+)\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\)/);y&&cy(y)>Bh&&c.push({level:"error",line:h,text:`range(...) er for stor til offline kørsel. Brug højst ${Bh} gentagelser.`})}for(const d of uy(u))c.push({level:"warning",text:`Funktionen ${d} ser rekursiv ud. Hvis den ikke stopper, afbryder offline MicroPython efter få sekunder.`});return c}function zo(o){let i=null;for(let c=0;c<o.length;c+=1){const a=o[c];if((a==='"'||a==="'")&&o[c-1]!=="\\"&&(i=i===a?null:i??a),a==="#"&&!i)return o.slice(0,c)}return o}function sy(o){const i=zo(o);let c=null;for(let a=0;a<i.length;a+=1){const u=i[a];if((u==='"'||u==="'")&&i[a-1]!=="\\"){c=c===u?null:c??u;continue}if(!c&&!(!zh(i[a-1])||i.slice(a,a+5)!=="input")&&zh(i[a+5])&&i.slice(a+5).trimStart().startsWith("("))return!0}return!1}function zh(o){return!o||!/[A-Za-z0-9_]/.test(o)}function oy(o){const i=o.match(/^import\s+([A-Za-z_]\w*)/);if(i)return i[1];const c=o.match(/^from\s+([A-Za-z_]\w*)\s+import\b/);return(c==null?void 0:c[1])??null}function Uh(o){const i=o.match(/^\s*/);return(i==null?void 0:i[0].replace(/\t/g,"    ").length)??0}function cy(o){const i=Number(o[1]),c=o[2]===void 0?void 0:Number(o[2]),a=o[3]===void 0?1:Number(o[3]);if(a===0)return Number.POSITIVE_INFINITY;const h=(c===void 0?i:c)-(c===void 0?0:i);return h>0&&a<0||h<0&&a>0?0:Math.ceil(Math.abs(h/a))}function uy(o){const i=new Set;for(let c=0;c<o.length;c+=1){const a=zo(o[c]).trim().match(/^def\s+([A-Za-z_]\w*)\s*\(/);if(!a)continue;const u=a[1],d=Uh(o[c]);for(let h=c+1;h<o.length;h+=1){if(!o[h].trim())continue;if(Uh(o[h])<=d)break;if(new RegExp(`\\b${u}\\s*\\(`).test(zo(o[h]))){i.add(u);break}}}return[...i]}const fy=/^(for|if|while|def|class|elif|else|try|except|finally|with)\b/;function dy(o,i){var x;const c=o.trim(),a=i.split(/\r?\n/),u=my(c),d=u?a[u-1]??"":"",h=py(a,u),_=c.split(/\r?\n/).filter(Boolean).at(-1)??"";if(/KeyboardInterrupt/.test(_))return{simple:"Programmet blev stoppet.",technical:c,line:u};if(/MemoryError/.test(_))return{simple:`Picoen eller browserens MicroPython løb tør for hukommelse${u?` omkring linje ${u}`:""}.`,technical:c,line:u};if(/RecursionError/.test(_))return{simple:`En funktion kalder sig selv for mange gange${u?` omkring linje ${u}`:""}.`,technical:c,line:u};const v=_.match(/UnboundLocalError:\s+local variable ['"](.+?)['"]/);if(v)return{simple:`Variablen ${v[1]} bruges inde i en funktion, før den har fået en værdi${u?` på linje ${u}`:""}.`,technical:c,line:u};const y=_.match(/NameError:\s+name ['"](.+?)['"] (?:isn't|is not) defined/);if(y)return{simple:by(d,y[1])?`Teksten ${y[1]} mangler måske citationstegn${u?` på linje ${u}`:""}.`:`Python kender ikke navnet ${y[1]}${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/ZeroDivisionError/.test(_))return{simple:`Kan ikke dividere med 0${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/IndentationError:\s+unexpected indent/.test(_))return{simple:`Der er for meget indrykning${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/IndentationError/.test(_))return{simple:`Mangler indrykning${u?` på linje ${u}`:""}.`,technical:c,line:u};if(/ImportError|ModuleNotFoundError/.test(_)){const N=(x=_.match(/['"](.+?)['"]/))==null?void 0:x[1];return{simple:`Python kan ikke finde modulet${N?` ${N}`:""}.`,technical:c,line:u}}if(/OSError/.test(_))return/ENOENT|No such file|Errno\s+2/.test(_)?{simple:`Python kan ikke finde filen${u?` på linje ${u}`:""}.`,technical:c,line:u}:/EACCES|permission|denied/i.test(_)?{simple:`Python har ikke adgang til filen eller enheden${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Der opstod en fejl med en fil eller en enhed${u?` omkring linje ${u}`:""}.`,technical:c,line:u};if(/SyntaxError/.test(_)){if(/invalid syntax/.test(_)&&h.text.trim().endsWith(","))return{simple:`Linje ${h.line??u} slutter med komma. Tjek om der mangler noget efter kommaet.`,technical:c,line:h.line??u};const N=Mf(d,u)??Mf(h.text,h.line)??hy(a,u);return N?{simple:`Mangler måske : efter linje ${N.line}.`,technical:c,line:N.line}:u&&h.text.trim().endsWith(":")&&d.trim()&&!/^\s+/.test(d)?{simple:`Mangler måske indrykning på linje ${u}.`,technical:c,line:u}:gy(d)?{simple:`Tekst mangler måske citationstegn${u?` på linje ${u}`:""}.`,technical:c,line:u}:_y(d)?{simple:`Tekst mangler måske et afsluttende citationstegn${u?` på linje ${u}`:""}.`,technical:c,line:u}:yy(d)?{simple:`Mangler måske en afsluttende parentes${u?` på linje ${u}`:""}.`,technical:c,line:u}:vy(d)?{simple:`Der er måske en parentes for meget${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Python fandt en syntaksfejl${u?` omkring linje ${u}`:""}.`,technical:c,line:u}}return/TypeError/.test(_)?/takes .* positional arguments? but .* given/.test(_)||/function takes/.test(_)?{simple:`En funktion får for mange eller for få værdier${u?` på linje ${u}`:""}.`,technical:c,line:u}:/unsupported operand type/.test(_)?{simple:`To værdier kan ikke bruges sammen på den måde${u?` på linje ${u}`:""}.`,technical:c,line:u}:/not callable/.test(_)?{simple:`Der bliver brugt parenteser efter noget, som ikke er en funktion${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`En værdi har den forkerte type${u?` på linje ${u}`:""}.`,technical:c,line:u}:/IndexError/.test(_)?{simple:`Listen har ikke et element på den plads${u?` på linje ${u}`:""}.`,technical:c,line:u}:/KeyError/.test(_)?{simple:`Ordbogen mangler den nøgle${u?` på linje ${u}`:""}.`,technical:c,line:u}:/AttributeError/.test(_)?{simple:`Den ting har ikke den kommando${u?` på linje ${u}`:""}.`,technical:c,line:u}:/ValueError/.test(_)?/invalid literal for int/.test(_)?{simple:`Teksten kan ikke laves om til et heltal${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Værdien passer ikke her${u?` på linje ${u}`:""}.`,technical:c,line:u}:{simple:`Python fandt en fejl${u?` omkring linje ${u}`:""}.`,technical:c,line:u}}function my(o){var u;const c=(u=[...o.matchAll(/line\s+(\d+)/g)].at(-1))==null?void 0:u[1];if(!c)return;const a=parseInt(c,10);return Number.isFinite(a)&&a>0?a:void 0}function py(o,i){if(!i)return{text:""};for(let c=i-2;c>=0;c-=1){const a=o[c]??"";if(a.trim())return{line:c+1,text:a}}return{text:""}}function Mf(o,i){if(!i)return null;const c=o.trim();return!fy.test(c)||c.endsWith(":")?null:{line:i}}function hy(o,i){const c=i?Math.min(o.length,i):o.length,a=Math.max(0,c-4);for(let u=c-1;u>=a;u-=1){const d=Mf(o[u]??"",u+1);if(d)return d}return null}function _y(o){const i=(o.match(/'/g)??[]).length,c=(o.match(/"/g)??[]).length;return i%2===1||c%2===1}function gy(o){var a,u;const c=(u=(a=o.trim().match(/^print\((.+)\)$/))==null?void 0:a[1])==null?void 0:u.trim();return!c||/['"]/.test(c)?!1:/\s/.test(c)&&/[a-zA-ZæøåÆØÅ]/.test(c)}function by(o,i){const c=o.trim();return!!i&&/[A-Za-zæøåÆØÅ]/.test(i)&&(c.startsWith("print(")||c.includes(`= ${i}`))}function yy(o){return __(o)>0}function vy(o){return __(o)<0}function __(o){let i=0,c=null;for(let a=0;a<o.length;a+=1){const u=o[a];if((u==='"'||u==="'")&&o[a-1]!=="\\"){c=c===u?null:c??u;continue}c||((u==="("||u==="["||u==="{")&&(i+=1),(u===")"||u==="]"||u==="}")&&(i-=1))}return i}const jf="/min_kode.py",g_=`print('Hej fra Pico Kontrol Panel')
`,Qa="Backup-filnavne er reserveret til versionshistorik. Vælg et andet navn.";function bt(o,i){return`${o}:${i}`}function xy(o){return new Promise(i=>window.setTimeout(i,o))}function wy(){const o=te(m=>m.toggleSideMenu),i=te(m=>m.askConfirm),c=te(m=>m.picoIdeOrigin),a=te(m=>m.active),u=te(m=>m.isBleConnected),d=te(m=>m.bleListFiles),h=te(m=>m.bleReadText),_=te(m=>m.bleWriteText),v=te(m=>m.bleDeleteFile),y=te(m=>m.bleRestartAndReconnect),[x,N]=L.useState(!1),[R,$]=L.useState(!1),[I,J]=L.useState([]),[K,G]=L.useState(!1),[H,ie]=L.useState([]),[le,se]=L.useState(null),[he,ne]=L.useState(()=>vf(ff())),[ee,xe]=L.useState(jf),[ge,ye]=L.useState("local"),[ae,Ve]=L.useState(()=>{var m;return((m=vf(ff()).find(b=>b.path===jf))==null?void 0:m.content)??g_}),[Re,Pe]=L.useState([]),[z,Z]=L.useState(!1),[oe,we]=L.useState(""),[ke,S]=L.useState(""),[B,W]=L.useState(null),[j,F]=L.useState(!1),[Q,X]=L.useState(null),[Le,Te]=L.useState(!1),[Yn,Pt]=L.useState({}),[be,bn]=L.useState(!1),[En,Oe]=L.useState(0),[kn,Bt]=L.useState(()=>{var m,b;return((m=fl.find(w=>w.board==="Raspberry Pi Pico W"))==null?void 0:m.board)??((b=fl[0])==null?void 0:b.board)??""}),[Bn,Tr]=L.useState(()=>{var m,b;return((m=fl.find(w=>w.board==="Raspberry Pi Pico W"))==null?void 0:m.version)??((b=fl[0])==null?void 0:b.version)??""}),[Ar,vt]=L.useState(!1),[Ql,Dr]=L.useState({top:0,left:0}),[yn,dl]=L.useState(!1),[ml,Pi]=L.useState(!1),[pl,Qn]=L.useState(!0),[lt,$t]=L.useState(""),[Zl,hl]=L.useState([]),[vn,it]=L.useState(null),[Rn,Or]=L.useState(!1),[Cr,rr]=L.useState({}),[Xt,In]=L.useState({}),[Ke,Mn]=L.useState(null),[mn,zn]=L.useState(null),[Io,$i]=L.useState(""),[Ft,_l]=L.useState(()=>oh().clearTerminalOnRun),[lr,ls]=L.useState(()=>oh().simplifiedErrors),[Wl,is]=L.useState(()=>typeof navigator<"u"?Yh(navigator):!1),Lr=L.useRef(null),xt=L.useRef(null),on=L.useRef(null),Xi=L.useRef(null),at=L.useRef(null),cn=L.useRef(null),un=L.useRef(null),jn=L.useRef(!1),zt=L.useRef(!1),gl=L.useRef(!1),Ut=L.useRef(""),ir=L.useRef(null),Ht=L.useRef(null),Vt=L.useRef(null),Kt=L.useRef(null),qn=L.useRef(null),Gt=L.useRef(null),Zn=L.useRef(0),Ze=L.useRef(null),ar=L.useRef(null),Fi=L.useRef(null),st=L.useRef(null),ot=ey(),pe=c==="control"&&!!a&&u(),Jl=pe?(a==null?void 0:a.deviceID)??"ble":null,as=Math.max(1,ae.split(`
`).length),qo=new Blob([ae]).size,ei=ge==="pico"?"Picoen":"browseren",ni=L.useMemo(()=>[...new Set(fl.map(m=>m.board))],[]),Pn=L.useMemo(()=>fl.filter(m=>m.board===kn),[kn]),xn=fl.find(m=>m.board===kn&&m.version===Bn)??Pn[0]??fl[0],ct=ge==="pico",Ki=ct?yn:ml,Un=ct&&yn&&x&&!pe||!ct&&ml&&!!Vt.current,ss=Rn||Ki&&!Un,ti=Un?"stdin":">>>",os=Un?ct?"Input til kørende Pico-kode":"Input til kørende Browser-MicroPython":ct?"Pico MicroPython":"Browser-MicroPython",Hn=L.useMemo(()=>{const m=new ny({onData:b=>{zt.current||!jn.current||(Ut.current=(Ut.current+b).slice(-240),/(^|\r?\n)>>> ?$/.test(Ut.current)&&Zi())},onLine:b=>{if(zt.current)return;const w=b.trimEnd();if(gl.current&&w.trim()){q("info",w);return}if(jn.current&&cs(w)){Zi();return}jn.current&&w.trim()&&!Qi(w)&&!w.includes("raw REPL")&&q("info",w)},onLog:q,onDisconnect:()=>{N(!1),dl(!1),Or(!1),jn.current=!1,gl.current=!1,wt(),Ut.current="",zr(),q("warning","USB-forbindelse lukket.")}});return Lr.current=m,m},[]);function q(m,b){J(w=>[...w.slice(-140),{level:m,text:b}])}function cs(m){return m.trim()===">>>"}function Qi(m){return m.trimStart().startsWith(">>> import builtins as _pkp_builtins; exec(")}function wt(){ir.current!==null&&(window.clearTimeout(ir.current),ir.current=null)}function Zi(){!jn.current||ir.current!==null||(ir.current=window.setTimeout(()=>{ir.current=null,jn.current&&(dl(!1),jn.current=!1,Ut.current="",q("success","Pico-koden er færdig."))},0))}function bl(m,b=ae,w="error"){const C=dy(m,b);J(D=>[...D.slice(-140),{level:w,text:C.simple,technical:C.technical}])}function nn(m,b,w=ge){xe(m),ye(w),Ve(b),In(C=>({...C,[bt(w,m)]:b}))}function us(m,b="pico"){xe(m),ye(b),Ve(""),Mn(null),Dr({top:0,left:0})}function Br(m,b=(w=>(w=at.current)==null?void 0:w.selectionStart)()??m.length){Ve(m),In(C=>({...C,[bt(ge,ee)]:m})),$i(""),Hr(m,b)}function yl(m,b=ge){In(w=>{const C=bt(b,m);if(!(C in w))return w;const D={...w};return delete D[C],D})}function Wi(){return Cr[ee]===ae}function Wn(m,b){rr(w=>({...w,[m]:b}))}function fs(m,b){Wn(m,b),In(w=>({...w,[bt("pico",m)]:b})),ge==="pico"&&ee===m&&Ve(b)}function zr(){ie([]),Pe([]),rr({}),In({}),Mn(null),xe(m=>{const b=vf(ff());if(b.find(D=>D.path===m))return m;const C=b[0];return ye("local"),Ve(C.content),C.path})}function tn(m){sr(),X({value:100,label:m}),st.current=window.setTimeout(()=>{st.current=null,X(null)},900)}function sr(){st.current!==null&&(window.clearTimeout(st.current),st.current=null)}function Ji(){return Q?f.jsxs("div",{className:"ide-task-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(Q.value),children:[f.jsxs("div",{children:[f.jsx("span",{children:Q.label}),f.jsxs("strong",{children:[Math.round(Q.value),"%"]}),Q.cancellable&&f.jsx("button",{className:"ide-task-cancel",type:"button",onClick:Ur,"aria-label":"Stop handling",title:"Stop",children:f.jsx(Fn,{name:"delete",size:18})})]}),f.jsx("b",{"aria-hidden":"true",children:f.jsx("i",{style:{width:`${Math.max(2,Math.min(100,Q.value))}%`}})})]}):null}function Ur(){qn.current&&St("Stopper læsning...",!0,!0)}function St(m="Stopper læsning...",b=!1,w=!1){var C;sr(),ar.current=null,Zn.current+=1,(C=qn.current)==null||C.abort(),qn.current=null,Ze.current=null,se(null),G(!1),X(b?{value:(Q==null?void 0:Q.value)??0,label:m,cancellable:!1}:null),w&&q("warning","Stopper BLE-læsning efter den aktuelle datapakke.")}function ds(m){var b;if(!(Ze.current===m||ar.current===m)){if(ar.current=m,Gt.current){Zn.current+=1,(b=qn.current)==null||b.abort(),qn.current=null,Ze.current=null,us(m),se(m),G(!0),sr(),X({value:2,label:`Skifter til ${Be(m)}...`,cancellable:!0});return}ri()}}function ri(){if(Gt.current)return;const m=ar.current;if(!m)return;ar.current=null;const b=Zn.current+1;Zn.current=b;const w=new AbortController;qn.current=w,Ze.current=m,us(m),se(m),G(!0),sr(),X({value:12,label:`Indlæser ${Be(m)}...`,cancellable:!0});const C=(async()=>{try{const D=await h(m,(fe,Se)=>{Zn.current===b&&X({value:fe,label:Se,cancellable:!0})},w.signal);if(w.signal.aborted||Zn.current!==b)return;nn(m,D,"pico"),Wn(m,D),tn("Fil indlæst")}catch(D){if(Zn.current!==b)return;ky(D)||w.signal.aborted?q("info",`Stoppede læsning af ${Be(m)}.`):(X(null),q("error",D instanceof Error?D.message:"BLE læsning fejlede."))}})();Gt.current=C,C.finally(()=>{if(Gt.current!==C)return;Gt.current=null,qn.current===w&&(qn.current=null),Ze.current===m&&(Ze.current=null),!!ar.current||(se(null),G(!1),w.signal.aborted&&X(null)),ri()})}async function vl(m){const b=zt.current;zt.current=!0;try{return await m()}finally{zt.current=b}}L.useEffect(()=>{if(!pl)return;const m=cn.current;m&&(m.scrollTop=m.scrollHeight)},[I,pl]),L.useEffect(()=>{f0({clearTerminalOnRun:Ft,simplifiedErrors:lr})},[Ft,lr]),L.useEffect(()=>{var m;Pn.some(b=>b.version===Bn)||Tr(((m=Pn[0])==null?void 0:m.version)??"")},[Pn,Bn]),L.useEffect(()=>{is(Yh(navigator))},[]),L.useEffect(()=>{const m=()=>{const b=Lr.current;xt.current=null,on.current=null,Lr.current=null,b==null||b.disconnect().catch(()=>{})};return window.addEventListener("pagehide",m),()=>{var b,w;sr(),(b=Ht.current)==null||b.dispose(),Ht.current=null,(w=Vt.current)==null||w.dispose(),Vt.current=null,window.removeEventListener("pagehide",m),m()}},[]),L.useEffect(()=>{const m=b=>{!(b.ctrlKey||b.metaKey)||b.key.toLowerCase()!=="s"||(b.preventDefault(),!K&&ee.trim()&&!Wl&&!j&&!B&&!z&&ms())};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[ge,pe,K,x,ae,ee,Wl,j,B,z]);function Qt(m,b,w){ne(C=>{const D=By(C,m,b,w);return df(D),D})}const Et=Vy(H,he,Xt,x||pe);L.useEffect(()=>{pe&&rn()},[pe]),L.useEffect(()=>{const m=Fi.current;m&&m!==Jl&&zr(),Fi.current=Jl},[Jl]);async function ea(){if(ot.supported){$(!0);try{await Hn.requestAndConnect();const m=new Db(Hn);xt.current=m,on.current=new Ub(m),N(!0),Oe(0),await m.interrupt(),await xl(m),q("success","Sendte stop-signal til Pico-terminalen."),await na(on.current),await ta(on.current)}catch(m){q("error",m instanceof Error?m.message:"USB-forbindelse mislykkedes.");try{await Hn.disconnect()}catch(b){q("error",b instanceof Error?`USB-porten kunne ikke lukkes: ${b.message}`:"USB-porten kunne ikke lukkes.");return}Oe(b=>{const w=b+1;return w>=3&&(q("info","USB-forbindelsen er mislykkedes flere gange. Hvis Picoen er i BOOTSEL eller mangler MicroPython, kan du bruge MicroPython-download."),bn(!0)),w}),N(!1)}finally{$(!1)}}}async function xl(m){const b=await m.exec(`import sys
print(sys.implementation.name)
`,4e3);if(b.error||!b.output.toLowerCase().includes("micropython"))throw new Error("MicroPython blev ikke fundet på Picoen.")}async function Zt(){var m;try{await((m=Lr.current)==null?void 0:m.disconnect()),xt.current=null,on.current=null,N(!1),zr()}catch(b){q("error",b instanceof Error?`USB-porten kunne ikke lukkes: ${b.message}`:"USB-porten kunne ikke lukkes.")}}async function ut(m){const b=on.current;if(b){G(!0),zt.current=!0;try{await m(b)}catch(w){X(null),q("error",w instanceof Error?w.message:"USB filhandling fejlede.")}finally{zt.current=!1,G(!1)}}}async function rn(m=!0){if(pe){G(!0);try{const b=await d();ie(b),m&&q("success",`Indlæste ${b.length} filer fra Pico via Bluetooth.`)}catch(b){q("error",b instanceof Error?b.message:"BLE filhandling fejlede.")}finally{G(!1)}return}await na(on.current,m)}async function na(m,b=!0){if(m){G(!0);try{const w=await vl(()=>m.list("/"));ie(w),b&&q("success",`Indlæste ${w.length} filer fra Pico.`)}catch(w){q("error",w instanceof Error?w.message:"USB filhandling fejlede.")}finally{G(!1)}}}async function Wt(){if(pe){G(!0),X({value:4,label:"Tjekker biblioteker på Pico via Bluetooth..."});try{const m=await wl((b,w)=>X({value:b,label:w}));Pe(m),tn("Fil-tjek færdigt")}catch(m){X(null),q("error",m instanceof Error?m.message:"BLE runtime check fejlede.")}finally{G(!1)}return}await ta(on.current)}async function wl(m){const b=[],w=zi.filter(D=>D.kind==="library"&&!$l(D));let C=0;for(const D of zi){if(D.kind==="program"){b.push({...D,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}if($l(D)){b.push({...D,status:"unknown",detail:"Opdateres via USB"});continue}try{const fe=C/Math.max(1,w.length)*100,Se=100/Math.max(1,w.length);q("info",`Tjekker ${D.label} på Pico via Bluetooth...`),m==null||m(Math.min(95,fe),`Tjekker ${D.label} på Pico...`);const We=await h(D.path,($n,ur)=>{m==null||m(Math.min(95,fe+$n/100*Se),`${D.label}: ${ur}`)}),Ge=Bi(We)===Bi(D.content);b.push({...D,status:Ge?"ok":"outdated",detail:Ge?"Matcher appens version":"Kan installeres via Bluetooth"})}catch{b.push({...D,status:"missing",detail:"Mangler på Pico"})}finally{C+=1}}return m==null||m(100,"Fil-tjek færdigt"),b}async function ta(m){if(m){G(!0);try{const b=await vl(()=>Tn(m)),w=b;Pe(w)}catch(b){q("error",b instanceof Error?b.message:"Runtime check fejlede.")}finally{G(!1)}}}async function Tn(m){if(!m)return[];const b=[];for(const w of zi){if(w.kind==="program"){b.push({...w,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}try{const C=await m.readText(w.path),D=Bi(C)===Bi(w.content);b.push({...w,status:D?"ok":"outdated",detail:D?"Matcher appens version":"Matcher ikke appens version"})}catch{b.push({...w,status:"missing",detail:"Mangler på Pico"})}}return b}async function or(m=ee){if(pe){ds(m);return}se(m),await ut(async b=>{X({value:12,label:`Indlæser ${Be(m)}...`});const w=await li(b,m);nn(m,w,"pico"),Wn(m,w),tn("Fil indlæst")}),se(null)}async function li(m,b){var w;try{return await m.readText(b)}catch(C){await((w=xt.current)==null?void 0:w.stop().catch(()=>{})),await xy(120);try{return await m.readText(b)}catch{throw C}}}function Sl(){F(!0)}async function ms(){if(ge==="pico"){if(!x&&!pe){q("error","Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.");return}await El();return}ii()}function ii(){if(Ui(ee)){q("error",Qa);return}Qt(ee,ae,!1),ye("local"),In(m=>({...m,[bt("local",ee)]:ae})),F(!1),q("success",`Gemte ${Be(ee)} lokalt.`)}async function El(){if(F(!1),Ui(ee))return X(null),q("error",Qa),!1;if(X({value:0,label:"Starter gemning..."}),pe){G(!0);try{return await _(ee,ae,(b,w)=>X({value:b,label:w})),Wn(ee,ae),ye("pico"),In(b=>({...b,[bt("pico",ee)]:ae})),tn("Gemt på Pico via Bluetooth"),q("success",`Gemte ${Be(ee)} på Pico via Bluetooth.`),Mo(ee)&&(vt(!0),q("warning","main.py er gemt. Genstart Picoen for at køre den nye version.")),await rn(!1),!0}catch(b){return X(null),q("error",b instanceof Error?b.message:"BLE gem fejlede."),!1}finally{G(!1)}}if(!on.current)return X(null),!1;let m=!1;return await ut(async b=>{Rl(ee,"pico")?await b.replaceTextSafely(ee,ae,(w,C)=>X({value:w,label:C})):await b.writeText(ee,ae,(w,C)=>X({value:w,label:C})),Wn(ee,ae),ye("pico"),In(w=>({...w,[bt("pico",ee)]:ae})),tn("Gemt på Pico via USB"),q("success",`Gemte ${ee}.`),await rn(),await Wt(),m=!0}),m}function kl(){Nl(Be(ee),ae),F(!1),q("success",`Downloadede ${Be(ee)}.`)}function Nl(m,b){const w=new Blob([b],{type:"text/plain;charset=utf-8"}),C=URL.createObjectURL(w),D=document.createElement("a");D.href=C,D.download=m,D.click(),URL.revokeObjectURL(C)}async function ra(m){G(!0),vt(!1),X({value:10,label:"Genstarter Pico..."});try{await y(m)?(tn("Pico genforbundet"),q("success",m==="control"?"Pico genforbundet. Åbner kontrolpanelet.":"Pico genforbundet til Kodeværkstedet."),m==="ide"&&await rn()):(X(null),q("warning","Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet."))}catch(b){X(null),q("error",b instanceof Error?b.message:"Genstart/genforbindelse mislykkedes.")}finally{G(!1)}}function ps(m){var fe;const b=m??{path:ee,source:ge},w=b.source==="pico"?"Pico":"browser",C=b.source==="pico"?(m==null?void 0:m.versions.length)??((fe=Df(H).get(b.path))==null?void 0:fe.length)??0:0,D=C>0?` Det sletter også filens versionshistorik (${C} gemte versioner).`:"";W(null),i({title:"Slet fil",message:`Vil du slette ${Be(b.path)} fra ${w}?${D}`,confirmLabel:"Slet",onConfirm:()=>{la(b)}})}function Po(){i({title:"Nulstil enhed",message:"Vil du nulstille Picoens enhedsindstillinger? Det sletter DeviceSettings.txt, sÃ¥ Picoen kan oprettes som en ny enhed igen. Kodefiler og startprogram bliver ikke slettet.",confirmLabel:"Nulstil",onConfirm:()=>{$o()}})}async function $o(){if(!on.current){q("error","Forbind Picoen med USB fÃ¸rst.");return}await ut(async m=>{await m.delete("/DeviceSettings.txt").catch(b=>{const w=b instanceof Error?b.message:"";if(!/ENOENT|No such file|not found/i.test(w))throw b}),rr(b=>{const w={...b};return delete w["/DeviceSettings.txt"],w}),yl("/DeviceSettings.txt","pico"),q("success","DeviceSettings.txt er nulstillet. Afbryd og forbind Picoen igen, hvis kontrolpanelet allerede var Ã¥bent."),await rn()})}async function la(m){const b=m.path,w=m.source,C=b===ee&&w===ge;if(w==="local"){const Se=he.filter(We=>We.path!==b);ne(Se),df(Se),C&&nn(b,"","local"),yl(b,"local"),q("warning",`Slettede ${Be(b)} fra browseren.`);return}const D=Df(H).get(b)??[],fe=[b,...D.map(Se=>Se.path)];if(pe){G(!0);try{for(const We of fe)await v(We);rr(We=>{const Ge={...We};for(const $n of fe)delete Ge[$n];return Ge}),C&&nn(b,"","pico");for(const We of fe)yl(We,"pico");const Se=D.length>0?` og ${D.length} gemte versioner`:"";q("warning",`Slettede ${Be(b)}${Se} på Pico via Bluetooth.`),await rn()}catch(Se){q("error",Se instanceof Error?Se.message:"BLE sletning fejlede.")}finally{G(!1)}return}if(!on.current){q("error","Ingen Pico-forbindelse. Kan ikke slette Pico-filen.");return}await ut(async Se=>{for(const Ge of fe)await Se.delete(Ge);rr(Ge=>{const $n={...Ge};for(const ur of fe)delete $n[ur];return $n});const We=D.length>0?` og ${D.length} gemte versioner`:"";q("warning",`Slettede ${b}${We}.`),C&&nn(b,"","pico");for(const Ge of fe)yl(Ge,"pico");await rn(),await Wt()})}async function Xo(m){if(!m)return;const b=Sy(m.name);if(!b){q("error","Kun .py, .txt, .json og .csv kan importeres.");return}if(Ui(b)){q("error",Qa);return}if(m.size>128*1024){q("error","Filen er for stor til Pico-værkstedet.");return}const w=await m.text();if(ge==="local"){Qt(b,w,!0),nn(b,w,"local"),q("success",`Importerede ${Be(b)} i browseren.`);return}if(!x&&!pe){q("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(pe&&$l({path:b})){q("error","BLEPeripheral.py kan ikke importeres over Bluetooth, mens den holder forbindelsen i gang. Brug USB i stedet.");return}if(X({value:0,label:"Uploader fil til Pico..."}),pe){G(!0);try{await _(b,w,(D,fe)=>X({value:D,label:fe})),Wn(b,w),nn(b,w,"pico"),tn("Fil uploadet til Pico"),q("success",`Importerede ${Be(b)} på Pico via Bluetooth.`),await rn()}catch(D){X(null),q("error",D instanceof Error?D.message:"Kunne ikke importere filen til Pico.")}finally{G(!1)}return}if(!on.current){X(null),q("error","Ingen Pico-forbindelse. Kan ikke importere filen til Pico.");return}await ut(async D=>{Rl(b,"pico")?await D.replaceTextSafely(b,w,(fe,Se)=>X({value:fe,label:Se})):await D.writeText(b,w,(fe,Se)=>X({value:fe,label:Se})),Wn(b,w),nn(b,w,"pico"),tn("Fil uploadet til Pico"),q("success",`Importerede ${Be(b)} på Pico.`),await rn(),await Wt()})}async function Fo(){we(""),Z(!0)}function Ko(){const m=Hh(oe);if(!m)return;if(Ui(m)){q("error",Qa);return}const b=ge;if(Rl(m,b)){q("error",`Der findes allerede en fil med navnet ${Be(m)} i ${b==="pico"?"Pico":"browseren"}.`);return}if(b==="local"){Qt(m,"",!1),nn(m,"","local"),Z(!1),q("success",`Oprettede ${Be(m)} i browseren.`);return}Qo(m)}async function Qo(m){if(!x&&!pe){q("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(Z(!1),X({value:0,label:"Opretter fil på Pico..."}),pe){G(!0);try{await _(m,"",(b,w)=>X({value:b,label:w})),Wn(m,""),nn(m,"","pico"),tn("Fil oprettet på Pico"),q("success",`Oprettede ${Be(m)} på Pico via Bluetooth.`),await rn()}catch(b){X(null),q("error",b instanceof Error?b.message:"Kunne ikke oprette fil på Pico.")}finally{G(!1)}return}if(!on.current){X(null),q("error","Ingen Pico-forbindelse. Kan ikke oprette Pico-filen.");return}await ut(async b=>{await b.writeText(m,"",(w,C)=>X({value:w,label:C})),Wn(m,""),nn(m,"","pico"),tn("Fil oprettet på Pico"),q("success",`Oprettede ${Be(m)} på Pico.`),await rn()})}function Zo(m){m.type==="file"&&(W(m),S(Ey(m.path)))}async function hs(m){if(!B||B.source!=="pico")return;const b=B.path;if(W(null),X({value:0,label:"Gendanner version..."}),pe){G(!0);try{const w=await h(m.path);await _(b,w,(C,D)=>X({value:C,label:D})),Wn(b,w),nn(b,w,"pico"),tn("Version gendannet"),await rn(!1)}catch(w){X(null),q("error",w instanceof Error?w.message:"Kunne ikke gendanne versionen.")}finally{G(!1)}return}on.current&&await ut(async w=>{await w.replaceTextSafely(b,await w.readText(m.path),(D,fe)=>X({value:D,label:fe}));const C=await w.readText(b);Wn(b,C),nn(b,C,"pico"),tn("Version gendannet"),await rn()})}function Wo(m){i({title:"Slet version",message:`Vil du slette ${Be(m.path)} fra Pico?`,confirmLabel:"Slet",onConfirm:()=>{Jo(m)}})}async function Jo(m){if(pe){G(!0);try{await v(m.path),await rn(!1),W(b=>b&&{...b,versions:b.versions.filter(w=>w.path!==m.path)})}catch(b){q("error",b instanceof Error?b.message:"Kunne ikke slette versionen.")}finally{G(!1)}return}on.current&&await ut(async b=>{await b.delete(m.path),await rn(!1),W(w=>w&&{...w,versions:w.versions.filter(C=>C.path!==m.path)})})}async function ec(){if(!B)return;const m=B,b=yf(ke,Za(m.path));if(!b||b===m.path)return;if(Ui(b)){q("error",Qa);return}if(Rl(b,m.source)){q("error",`Der findes allerede en fil med navnet ${Be(b)}.`);return}const w=m.source==="local",C=m.source==="pico";if(pe&&C&&(Mo(m.path)||Mo(b))){q("error","main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.");return}G(!0);try{if(C)if(pe){const D=Cr[m.path]??await h(m.path);await _(b,D,(fe,Se)=>X({value:fe,label:Se})),await v(m.path),rr(fe=>({...Xh(fe,m.path,b),[b]:D}))}else on.current&&(await vl(()=>on.current.rename(m.path,b)),rr(D=>Xh(D,m.path,b)));w&&ne(D=>{const fe=D.map(Se=>Se.path===m.path?{...Se,path:b,updatedAt:Date.now()}:Se);return df(fe),fe}),ee===m.path&&ge===m.source&&xe(b),In(D=>Iy(D,m.source,m.path,b)),W(null),S(""),q("success",`Omdøbte ${Be(m.path)} til ${Be(b)}.`),C&&await rn()}catch(D){q("error",D instanceof Error?D.message:"Kunne ikke omdøbe filen.")}finally{X(null),G(!1)}}function Rl(m,b){return b==="pico"?H.some(w=>w.path===m):he.some(w=>w.path===m)}async function ia(m,b){if(!Rl(m,"pico"))return;const w=Uy(m,H),C=Cr[m]??await h(m);b!==void 0&&Bi(C)===Bi(b)||await _(w,C)}function nc(m){if(m.type!=="file"){pe&&St(void 0,!1),xe(m.path),ye(m.source);return}if(pe&&$l(m)){q("warning","BLEPeripheral.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.");return}if(m.source==="local"){pe&&St(void 0,!1);const w=he.find(C=>C.path===m.path);nn(m.path,Xt[bt("local",m.path)]??(w==null?void 0:w.content)??"","local");return}const b=bt("pico",m.path);if(Object.prototype.hasOwnProperty.call(Xt,b)){pe&&St(void 0,!1),nn(m.path,Xt[b],"pico");return}if(Object.prototype.hasOwnProperty.call(Cr,m.path)){pe&&St(void 0,!1),nn(m.path,Cr[m.path],"pico");return}or(m.path)}async function _s(){if(!x&&!pe){const m=Vh();Pe(m),Pt(Gh(m)),Te(!0),X(null);return}G(!0),X({value:4,label:pe?"Tjekker biblioteker på Pico via Bluetooth...":"Tjekker biblioteker på Pico..."}),q("info",pe?"Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...":"Tjekker om Picoens biblioteker er opdaterede før installation...");try{const m=Re.length>0?Re:pe?await wl((b,w)=>X({value:b,label:w})):await vl(()=>Tn(on.current));Pe(m),Pt(Gh(m)),Te(!0),X(null)}catch(m){X(null),q("error",m instanceof Error?m.message:"Fil-tjek før installation fejlede.")}finally{G(!1)}}async function tc(){if(Te(!1),pe){G(!0);try{const b=(Re.length>0?Re:zi.map(C=>({...C,status:"unknown",detail:"Ikke tjekket"}))).filter(C=>Yn[C.id]&&!$l(C));if(b.length===0){q("info","Ingen filer valgt til installation.");return}let w=null;X({value:0,label:"Starter installation..."});for(const[C,D]of b.entries()){q("info",`Installerer ${D.label} via Bluetooth...`);const fe=C/b.length*100,Se=100/b.length;await ia(D.path,D.content),await _(D.path,D.content,(We,Ge)=>{X({value:Math.min(99,fe+We/100*Se),label:`${D.label}: ${Ge}`})}),fs(D.path,D.content),q("success",`Installerede ${D.label}.`),D.kind==="library"&&(w=D),Mo(D.path)&&vt(!0)}tn("Installation færdig"),await rn(!1),await Wt(),w&&gs(w)}catch(m){X(null),q("error",m instanceof Error?m.message:"BLE installation fejlede.")}finally{G(!1)}return}await ut(async m=>{const w=(Re.length>0?Re:zi.map(D=>({...D,status:"unknown",detail:"Ikke tjekket"}))).filter(D=>Yn[D.id]);if(w.length===0){q("info","Ingen filer valgt til installation.");return}let C=null;X({value:0,label:"Starter installation..."});for(const[D,fe]of w.entries()){q("info",`Installerer ${fe.label}...`);const Se=D/w.length*100,We=100/w.length;await m.replaceTextSafely(fe.path,fe.content,(Ge,$n)=>{X({value:Math.min(99,Se+Ge/100*We),label:`${fe.label}: ${$n}`})},{createBackup:!0}),fs(fe.path,fe.content),q("success",`Installerede ${fe.label}.`),fe.kind==="library"&&(C=fe)}tn("Installation færdig"),await rn(!1),await Wt(),C&&gs(C)})}function aa(){return(Re.length>0?Re:Vh()).filter(b=>Yn[b.id])}function rc(){const m=aa();if(m.length===0){q("info","Ingen filer valgt.");return}for(const b of m)Qt(b.path,b.content,!1);Te(!1),q("success",`Gemte ${m.length} filer i browseren.`)}function lc(){const m=aa();if(m.length===0){q("info","Ingen filer valgt.");return}m.forEach((b,w)=>{window.setTimeout(()=>{Nl(Be(b.path),b.content)},w*120)}),Te(!1),q("success",`Starter download af ${m.length} filer.`)}function gs(m){nn(m.path,m.content,"pico"),Wn(m.path,m.content),q("info",`Åbnede ${m.label} i editoren.`)}function ic(m,b){Pt(w=>{if(m.kind!=="program")return{...w,[m.id]:b};const C={...w};for(const D of Re)D.kind==="program"&&(C[D.id]=!1);return C[m.id]=b,C})}async function ac(){if(vs(),pe&&ge==="pico"){q("warning","Bluetooth holder forbindelsen åben, så koden kan ikke køres direkte her. Gem filen, og genstart Picoen for at køre den.");return}if(ge==="local"){await sc();return}const m=xt.current;if(!m){q("error",`${Be(ee)} er gemt på Picoen, men der er ingen USB-forbindelse til Pico-terminalen.`);return}if(ee.endsWith(".py")){if(!Wi()&&(q("info",`${Be(ee)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`),!await El())){q("error","Pico-forbindelsen blev afbrudt under gemning.");return}if(K)return;wt(),Ut.current="",Qn(!0);try{await m.runFile(ee,()=>{wt(),Ut.current="",gl.current=!1,dl(!0),jn.current=!0}),q("success",`Kører ${Be(ee)}. Brug Stop for at afbryde.`)}catch(b){dl(!1),jn.current=!1,wt(),Ut.current="",q("error",b instanceof Error?b.message:"Kunne ikke starte koden.")}return}G(!0);try{const b=await m.exec(ae,2e4);b.output.trim()&&q("info",b.output),b.error.trim()&&bl(b.error,ae),!b.output.trim()&&!b.error.trim()&&q("success","Koden kørte uden output.")}catch(b){q("error",b instanceof Error?b.message:"Kunne ikke køre koden.")}finally{G(!1)}}async function sc(){const m=Rf(ae,{allowInput:!0});if(m.some(C=>C.level==="error")){for(const C of m){const D=C.line?`Linje ${C.line}: `:"";q(C.level==="error"?"error":"warning",`${D}${C.text}`)}return}const b=new AbortController;Kt.current=b;const w=new iy;Vt.current=w,G(!0),Pi(!0),Qn(!0),q("info",x?"Starter offline MicroPython for browser-filen.":"Starter offline MicroPython. Forbind Pico med USB for at køre på selve Picoen.");try{const C=[],D=await w.run(ae,{signal:b.signal,onOutput:Ge=>{C.push(Ge),q("info",Ge)}});for(const Ge of D.issues){const $n=Ge.line?`Linje ${Ge.line}: `:"";q(Ge.level==="error"?"error":"warning",`${$n}${Ge.text}`)}const fe=[...C,D.output].filter(Boolean).join(`
`).trim(),Se=D.output.trim();!D.error.trim()&&Ny(fe)?bl(fe,ae):(Se&&q("info",Se),D.error.trim()&&bl(D.error,ae,D.unavailable?"warning":"error")),D.ok&&!fe&&!D.error.trim()&&q("success","Offline MicroPython kørte uden output.")}finally{Kt.current=null,Vt.current=null,w.dispose(),Pi(!1),G(!1)}}async function oc(){var b,w,C;if(ml){(b=Kt.current)==null||b.abort(),(w=Vt.current)==null||w.stop(),q("warning","Stoppede offline MicroPython."),Qn(!0);return}if(!ct&&Rn){(C=Ht.current)==null||C.reset(),Or(!1),q("warning","Stoppede Browser-MicroPython-terminalen. Variablerne i browser-terminalen blev nulstillet."),Qn(!0);return}const m=xt.current;if(m)try{await m.stop(),q("warning","Stoppede koden på Pico.")}catch(D){q("error",D instanceof Error?D.message:"Kunne ikke stoppe koden.")}finally{dl(!1),jn.current=!1,wt(),Ut.current="",Qn(!0)}}function cc(){const m=cn.current;if(!m)return;const b=m.scrollHeight-m.scrollTop-m.clientHeight<12;Qn(b)}function uc(){J([]),Qn(!0)}async function Ml(){const m=Un?lt:lt.trimEnd();if(Un){if(!ct){const C=Vt.current;if(!C){q("warning","Browser-MicroPython kører ikke lige nu."),Vn();return}$t(""),Qn(!0),C.sendInput(m),Vn();return}const w=xt.current;if(!w){q("warning","Pico-terminalen er ikke forbundet."),Vn();return}$t(""),Qn(!0);try{await w.sendProgramInput(m)}catch(C){q("error",C instanceof Error?C.message:"Kunne ikke sende input til Pico-koden.")}finally{Vn()}return}if(!m.trim())return;if(hl(w=>(w.at(-1)===m?w:[...w,m]).slice(-80)),it(null),zn(null),Ki){q("warning",ct?"Tryk Stop, før du skriver i Pico-terminalen.":"Stop offline MicroPython, før du skriver i browser-terminalen."),Vn();return}if(!ct){const w=Rf(m);if(w.some(D=>D.level==="error")){for(const D of w){const fe=D.line?"Linje "+D.line+": ":"";q(D.level==="error"?"error":"warning",fe+D.text)}Vn();return}const C=Ht.current??new ly;Ht.current=C,$t(""),Or(!0),Qn(!0),q("info",">>> "+m);try{let D=!1;const fe=await C.send(m,{timeoutMs:15e3,onOutput:We=>{D=!0,q("info",We)}}),Se=fe.output.trim();Se&&!D&&q("info",Se),fe.error.trim()&&bl(fe.error,m,fe.unavailable?"warning":"error")}catch(D){q("error",D instanceof Error?D.message:"Browser-MicroPython-terminalen fejlede.")}finally{Or(!1),Vn()}return}if(pe){q("warning","Terminalen bruger USB Serial. Bluetooth-forbindelsen kan vise filer, men kan ikke modtage frie terminalkommandoer."),Vn();return}const b=xt.current;if(!x||!b){q("warning","Forbind en microcontroller med USB for at skrive i MicroPython-terminalen."),Vn();return}$t(""),Or(!0),Qn(!0),gl.current=!0,q("info",">>> "+m);try{await b.sendFriendlyLine(m)}catch(w){gl.current=!1,q("error",w instanceof Error?w.message:"Kunne ikke sende kommando til MicroPython REPL.")}finally{Or(!1),Vn()}}function Vn(){window.requestAnimationFrame(()=>{const m=un.current;if(!m||m.disabled)return;m.focus();const b=m.value.length;m.selectionStart=b,m.selectionEnd=b})}function bs(m,b,w){return w.length===0?null:f.jsxs("div",{className:"ide-install-group",children:[f.jsxs("div",{className:"ide-install-group-head",children:[f.jsx("h3",{children:m}),f.jsx("p",{children:b})]}),w.map(C=>{const D=pe&&$l(C);return f.jsxs("label",{className:`ide-install-row ${D?"disabled":""}`,children:[f.jsx("input",{type:"checkbox",checked:!!Yn[C.id],disabled:D,onChange:fe=>ic(C,fe.target.checked)}),f.jsxs("span",{children:[f.jsxs("strong",{children:[ys(C),(C.kind==="library"||!x&&!pe)&&f.jsx("em",{className:`ide-install-status status-${C.status}`,children:D?"USB":Hy(C.status)})]}),f.jsxs("small",{children:[C.description,!x&&!pe?` ${C.detail}`:""]})]})]},C.id)})]})}function ys(m){return m.kind==="program"?m.label.replace(/\s*\(main\.py\)$/i,""):m.label}function vs(){Ft&&J([]),Qn(!0)}function xs(m,b){const w=m.indexOf(`
`,b);return w===-1?m.length:w}function Hr(m,b){const w=Af(m,b);if(!w||w.query.length<1){Mn(null);return}const C=Ih(m,b,!0).slice(0,8),D=qh(at.current,w.start);Mn(C.length>0&&D?{items:C,selected:0,start:w.start,end:b,position:D}:null)}function jl(m,b){const w=Af(m,b);if(!w||w.query.length<1){zn(null);return}const C=Ih(m,b,!1).slice(0,8),D=qh(un.current,w.start);zn(C.length>0&&D?{items:C,selected:0,start:w.start,end:b,position:D}:null)}function cr(m){const b=m.value.slice(m.selectionStart,m.selectionEnd);$i(Oy(b)?b:"")}function sa(m=Ke==null?void 0:Ke.items[Ke.selected]){if(!m||!Ke)return;const b=ae.slice(0,Ke.start)+m.insert+ae.slice(Ke.end),w=Ke.start+m.insert.length-(m.insert.endsWith("()")?1:0);Ve(b),In(C=>({...C,[bt(ge,ee)]:b})),Mn(null),window.requestAnimationFrame(()=>{const C=at.current;C&&(C.focus(),C.selectionStart=w,C.selectionEnd=w,Hr(b,w))})}function ws(m=mn==null?void 0:mn.items[mn.selected]){if(!m||!mn)return;const b=lt.slice(0,mn.start)+m.insert+lt.slice(mn.end),w=mn.start+m.insert.length-(m.insert.endsWith("()")?1:0);$t(b),zn(null),window.requestAnimationFrame(()=>{const C=un.current;C&&(C.focus(),C.selectionStart=w,C.selectionEnd=w,jl(b,w))})}function fc(m){var ur;if((m.ctrlKey||m.metaKey)&&m.key.toLowerCase()==="s"){m.preventDefault(),!K&&ee.trim()&&ms();return}if(Ke){if(m.key==="ArrowDown"){m.preventDefault(),Mn(Ye=>Ye&&{...Ye,selected:(Ye.selected+1)%Ye.items.length});return}if(m.key==="ArrowUp"){m.preventDefault(),Mn(Ye=>Ye&&{...Ye,selected:(Ye.selected-1+Ye.items.length)%Ye.items.length});return}if(m.key==="Tab"){m.preventDefault(),sa();return}if(m.key==="Enter"){if(!(Ke.items[Ke.selected]&&y_(Ke.items[Ke.selected],ae.slice(Ke.start,Ke.end)))){m.preventDefault(),sa();return}Mn(null)}if(m.key==="Escape"){m.preventDefault(),Mn(null);return}}if(m.key==="Enter"){m.preventDefault();const Ye=m.currentTarget,fr=Ye.selectionStart,oa=Ye.selectionEnd,Tl=ae.lastIndexOf(`
`,fr-1)+1,Vr=ae.slice(Tl,fr),ca=((ur=Vr.match(/^[ \t]*/))==null?void 0:ur[0])??"",An=Vr.trimEnd().endsWith(":")?"    ":"",dr=`
${ca}${An}`,ai=ae.slice(0,fr)+dr+ae.slice(oa),Gr=fr+dr.length;Br(ai,Gr),window.requestAnimationFrame(()=>{Ye.selectionStart=Gr,Ye.selectionEnd=Gr});return}if(m.key!=="Tab")return;m.preventDefault();const b=m.currentTarget,w=b.selectionStart,C=b.selectionEnd,D="    ";if(m.shiftKey){const Ye=ae.lastIndexOf(`
`,w-1)+1,fr=w===C?xs(ae,w):C,oa=ae.slice(Ye,fr);let Tl=0,Vr=0;const ca=oa.replace(/(^|\n)( {1,4}|\t)/g,(dr,ai,Gr,Es)=>{const ua=Gr.length;return Ye+Es<w&&(Tl+=ua),Vr+=ua,ai});if(Vr===0)return;const An=ae.slice(0,Ye)+ca+ae.slice(fr);Br(An,Math.max(Ye,w-Tl)),window.requestAnimationFrame(()=>{b.selectionStart=Math.max(Ye,w-Tl),b.selectionEnd=w===C?b.selectionStart:Math.max(b.selectionStart,C-Vr)});return}if(w===C){const Ye=ae.slice(0,w)+D+ae.slice(C);Br(Ye,w+D.length),window.requestAnimationFrame(()=>{b.selectionStart=w+D.length,b.selectionEnd=w+D.length});return}const fe=ae.lastIndexOf(`
`,w-1)+1,We=ae.slice(fe,C).replace(/^/gm,D),Ge=We.split(`
`).length,$n=ae.slice(0,fe)+We+ae.slice(C);Br($n,w+D.length),window.requestAnimationFrame(()=>{b.selectionStart=w+D.length,b.selectionEnd=C+Ge*D.length})}function Ss(m){if(Un){m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),Ml());return}if(mn){if(m.key==="ArrowDown"){m.preventDefault(),zn(b=>b&&{...b,selected:(b.selected+1)%b.items.length});return}if(m.key==="ArrowUp"){m.preventDefault(),zn(b=>b&&{...b,selected:(b.selected-1+b.items.length)%b.items.length});return}if(m.key==="Enter"||m.key==="Tab"){m.preventDefault(),ws();return}if(m.key==="Escape"){m.preventDefault(),zn(null);return}}if(m.key==="Tab"){m.preventDefault();const b=m.currentTarget,w=b.selectionStart,C=b.selectionEnd,D="    ",fe=lt.slice(0,w)+D+lt.slice(C),Se=w+D.length;$t(fe),it(null),zn(null),window.requestAnimationFrame(()=>{b.selectionStart=Se,b.selectionEnd=Se});return}if(m.key==="ArrowUp"||m.key==="ArrowDown"){if(!(m.key==="ArrowUp"?m.currentTarget.selectionStart===0&&m.currentTarget.selectionEnd===0:m.currentTarget.selectionStart===lt.length&&m.currentTarget.selectionEnd===lt.length)||Zl.length===0)return;m.preventDefault();const w=m.key==="ArrowUp"?vn===null?Zl.length-1:Math.max(0,vn-1):vn===null||vn+1>=Zl.length?null:vn+1;it(w);const C=w===null?"":Zl[w]??"";$t(C),zn(null),window.requestAnimationFrame(()=>{const D=un.current;D&&(D.selectionStart=C.length,D.selectionEnd=C.length)});return}m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),Ml())}return f.jsxs("div",{className:"screen ide-screen",children:[f.jsx(Vf,{title:"Pico Kodeværksted",onMenu:()=>o()}),Wl?f.jsx("div",{className:"ide-size-gate",role:"dialog","aria-modal":"true","aria-labelledby":"ide-size-title",children:f.jsxs("div",{className:"ide-size-gate-panel",children:[f.jsx("h2",{id:"ide-size-title",children:"Brug en bærbar for at bruge Kodeværkstedet"}),f.jsx("p",{children:"Denne skærm er for lille, så du skal åbne Kodeværkstedet på en bærbar eller en større skærm."})]})}):f.jsxs("div",{className:"ide-layout",children:[f.jsxs("section",{className:"ide-panel ide-files-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("h2",{children:"Filer"}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:Fo,"aria-label":"Ny fil",title:"Ny fil",children:f.jsx(Fn,{name:"plus",size:20})}),f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>{var m;return(m=Xi.current)==null?void 0:m.click()},"aria-label":"Importer fil",title:"Importer fil",children:f.jsx(Fn,{name:"upload",size:20})}),f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>rn(),disabled:!x&&!pe||K,"aria-label":"Opdater filer",title:"Opdater filer",children:f.jsx(Fn,{name:"refresh",size:20})})]})]}),f.jsx("div",{className:"ide-file-list",children:Et.length===0?f.jsx("button",{type:"button",disabled:!0,children:"Ingen filer læst"}):Et.map(m=>{if(m.kind==="separator"){const D=m.id==="pico-files"&&!x&&!pe;return f.jsxs(L.Fragment,{children:[f.jsx("div",{className:"ide-file-separator",children:f.jsx("span",{children:m.label})}),D&&f.jsx("div",{className:"ide-file-disconnected",role:"status",children:"Ikke forbundet"})]},m.id)}const b=pe&&$l(m),w=Xt[bt(m.source,m.path)],C=w!==void 0&&w!==zy(m,he,Cr);return f.jsxs("div",{className:`ide-file-row ${ee===m.path&&ge===m.source?"active":""} ${b?"protected":""}`,children:[f.jsxs("button",{type:"button",onClick:()=>nc(m),disabled:b,title:b?"Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her":void 0,children:[f.jsx("span",{children:m.name}),f.jsxs("small",{title:C?"Ikke gemte ændringer":"Ingen ikke gemte ændringer",children:[m.source==="pico"&&m.versions.length>0&&f.jsx("em",{className:"ide-file-version-count",title:`${m.versions.length} gemte versioner i historikken`,children:m.versions.length}),f.jsx("i",{className:`ide-file-dirty-dot ${C?"dirty":"clean"}`,"aria-hidden":"true"})]})]}),f.jsx("button",{className:"ide-file-actions",type:"button",onClick:()=>Zo(m),disabled:m.type!=="file"||K||b,"aria-label":`Filvalg for ${m.name}`,title:b?"Holder Bluetooth-forbindelsen i gang og kan ikke ændres her":"Filvalg",children:f.jsx(Fn,{name:"settings",size:16})})]},`${m.source}:${m.path}`)})})]}),f.jsxs("section",{className:"ide-panel ide-status-panel",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"ide-status-head",children:[f.jsx("h2",{children:pe?"Forbundet Pico":"USB udvikling"}),!pe&&f.jsx("span",{className:`ide-usb-status ${ot.supported?"available":"unavailable"}`,title:ot.message,"data-tooltip":ot.message,role:"img","aria-label":ot.message,tabIndex:0,children:"!"})]}),pe&&f.jsxs("p",{children:[(a==null?void 0:a.deviceName)??"Pico"," er forbundet via Bluetooth."]})]}),!pe&&f.jsxs("div",{className:"ide-actions",children:[f.jsx("button",{className:"btn btn-primary",type:"button",onClick:x?Zt:ea,disabled:!ot.supported||R,children:R?"Forbinder...":x?"Afbryd USB":"Forbind USB"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:_s,disabled:pe||K,children:"Download"}),f.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:Po,disabled:!x||K,children:"Nulstil enhed"})]}),pe&&f.jsxs("div",{className:"ide-actions",children:[f.jsxs("button",{className:"btn btn-primary ide-connection-state",type:"button",disabled:!0,children:[f.jsx(Fn,{name:"power",size:22}),"Bluetooth forbundet"]}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:_s,disabled:K,children:"Startprogrammer og biblioteker"})]}),!pe&&f.jsx("div",{className:"ide-runtime",children:f.jsx("div",{className:"ide-mini-actions single",children:f.jsx("button",{className:"btn btn-outline ide-disconnect-btn",type:"button",onClick:()=>bn(!0),children:"MicroPython"})})})]}),f.jsxs("section",{className:"ide-panel ide-editor-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("div",{className:"ide-editor-title",children:f.jsxs("h2",{children:[Be(ee),f.jsxs("small",{children:[qo," bytes"]})]})}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:"btn btn-outline",type:"button",onClick:ac,disabled:K,children:"Kør"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:oc,disabled:!ml&&!(!ct&&Rn)&&(!x||!yn),children:"Stop"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:Sl,disabled:K||!ee.trim(),children:"Gem"}),f.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>ps(),disabled:K||!ee.trim(),children:"Slet"})]})]}),Ji(),f.jsxs("div",{className:"ide-editor-wrap",children:[f.jsx("div",{className:"ide-line-numbers","aria-hidden":"true",style:{transform:`translateY(${-Ql.top}px)`},children:Array.from({length:as},(m,b)=>f.jsx("span",{children:b+1},b))}),f.jsx("pre",{className:"ide-highlight","aria-hidden":"true",style:{transform:`translate(${-Ql.left}px, ${-Ql.top}px)`},children:Ly(ae,Io)}),f.jsx("textarea",{ref:at,className:"ide-editor",value:ae,onChange:m=>Br(m.target.value,m.target.selectionStart),onKeyDown:fc,onKeyUp:m=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(m.key)||Hr(m.currentTarget.value,m.currentTarget.selectionStart)},onClick:m=>{Hr(m.currentTarget.value,m.currentTarget.selectionStart),cr(m.currentTarget)},onSelect:m=>cr(m.currentTarget),onScroll:m=>{Dr({top:m.currentTarget.scrollTop,left:m.currentTarget.scrollLeft}),Ke&&Hr(m.currentTarget.value,m.currentTarget.selectionStart)},readOnly:K||!!le,"aria-busy":K||!!le,spellCheck:!1}),Ke&&f.jsx("div",{className:"ide-autocomplete",role:"listbox","aria-label":"Kodeforslag",style:{left:Ke.position.left,top:Ke.position.top},children:Ke.items.map((m,b)=>f.jsx("button",{className:b===Ke.selected?"active":"",type:"button",onMouseDown:w=>{w.preventDefault(),sa(m)},role:"option","aria-selected":b===Ke.selected,children:m.label},m.label))}),le&&f.jsxs("div",{className:"ide-editor-loading",role:"status","aria-live":"polite",children:[f.jsx("span",{className:"spinner","aria-hidden":"true"}),f.jsxs("strong",{children:["Indlæser ",Be(le),"..."]})]})]})]}),f.jsxs("section",{className:"ide-panel ide-terminal-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("h2",{children:"Terminal"}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${lr?"":"active"}`,type:"button",onClick:()=>ls(m=>!m),"aria-label":lr?"Tekniske fejl er slået fra":"Tekniske fejl er slået til","aria-pressed":!lr,title:lr?"Vis originale tekniske fejl":"Viser originale tekniske fejl",children:"Teknisk"}),f.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${Ft?"active":""}`,type:"button",onClick:()=>_l(m=>!m),"aria-pressed":Ft,title:Ft?"Terminalen ryddes, hver gang du trykker Kør":"Terminalen beholder tekst, når du trykker Kør",children:"Ryd ved Kør"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:uc,disabled:I.length===0,children:"Ryd"})]})]}),f.jsxs("div",{className:"ide-terminal","aria-live":"polite",ref:cn,onScroll:cc,onClick:()=>{var m;return(m=un.current)==null?void 0:m.focus()},children:[I.length===0?f.jsx("div",{className:"term-line",children:"Ingen terminaldata endnu."}):I.map((m,b)=>f.jsx("div",{className:`term-line term-${m.level}`,children:m.technical&&!lr?m.technical:m.text},`${b}-${m.text}`)),f.jsxs("form",{className:`ide-terminal-command ${Ki&&!Un?"locked":""} ${Un?"stdin":""}`,onSubmit:m=>{m.preventDefault(),Ml()},children:[f.jsx("span",{"aria-hidden":"true",children:ti}),f.jsx("textarea",{ref:un,value:lt,onChange:m=>{$t(m.target.value),it(null),Un?zn(null):jl(m.target.value,m.target.selectionStart)},onKeyDown:Ss,onKeyUp:m=>{Un||["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(m.key)||jl(m.currentTarget.value,m.currentTarget.selectionStart)},onClick:m=>{Un||jl(m.currentTarget.value,m.currentTarget.selectionStart)},disabled:ss,placeholder:os,"aria-label":Un?"Input til kørende Pico-kode":"MicroPython-terminalkommando",title:os,rows:Math.max(1,lt.split(`
`).length)})]}),mn&&f.jsx("div",{className:"ide-autocomplete ide-repl-autocomplete",role:"listbox","aria-label":"Terminalforslag",style:{left:mn.position.left,top:mn.position.top},children:mn.items.map((m,b)=>f.jsx("button",{className:b===mn.selected?"active":"",type:"button",onMouseDown:w=>{w.preventDefault(),ws(m)},role:"option","aria-selected":b===mn.selected,children:m.label},m.label))})]})]})]}),f.jsx("input",{ref:Xi,type:"file",accept:".py,.txt,.json,.csv",className:"sr-only",onChange:m=>{var b;Xo((b=m.target.files)==null?void 0:b[0]),m.currentTarget.value=""}}),j&&f.jsx(Sn,{title:"Gem fil",onClose:()=>F(!1),children:f.jsxs("div",{className:"ide-save-options",children:[f.jsx("button",{className:"btn btn-primary",type:"button",onClick:ii,children:"Gem i browser"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>void El(),disabled:!x&&!pe||K,children:"Gem på Pico"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:kl,children:"Download til computer"})]})}),Le&&f.jsx(Sn,{title:"Startprogrammer og biblioteker",onClose:()=>Te(!1),children:f.jsxs("div",{className:"ide-install-list",children:[f.jsx("p",{className:"ide-install-note",children:x||pe?"Vælg et startprogram og de biblioteker dit projekt bruger. Installer lægger filerne på Picoen.":"Du er ikke forbundet til en Pico. Du kan gemme filerne i browseren eller downloade dem til computeren, men de virker først på Picoen, når de er installeret der."}),f.jsxs("div",{className:"ide-install-grid",children:[bs("Startprogrammer (main.py)","Starter automatisk på Picoen.",Re.filter(m=>m.kind==="program")),bs("Biblioteker","Ekstra Python-filer som dine programmer kan importere.",Re.filter(m=>m.kind==="library"))]}),f.jsxs("div",{className:"ide-install-actions",children:[(x||pe)&&f.jsx("button",{className:"btn btn-primary",type:"button",onClick:tc,disabled:K,children:"Installer valgte på Pico"}),f.jsx("button",{className:x||pe?"btn btn-outline":"btn btn-primary",type:"button",onClick:rc,disabled:K,children:"Gem valgte i browser"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:lc,disabled:K,children:"Download valgte"})]})]})}),Ar&&f.jsx(Sn,{title:"main.py er gemt",onClose:()=>vt(!1),children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:"Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter."}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>void ra("control"),disabled:K,children:"Genstart og åbn kontrolpanel"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void ra("ide"),disabled:K,children:"Genstart og bliv i Kodeværksted"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>vt(!1),disabled:K,children:"Senere"})]})}),be&&f.jsx(Sn,{title:"Installer MicroPython",onClose:()=>bn(!1),children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:"Hvis Picoen er helt frisk, skal MicroPython først lægges på den."}),f.jsxs("ol",{className:"micropython-steps",children:[f.jsx("li",{children:"Hold BOOTSEL-knappen nede."}),f.jsx("li",{children:"Sæt Picoen i USB, og slip derefter BOOTSEL."}),f.jsx("li",{children:"Vælg Pico-model og MicroPython-version herunder, og download UF2-filen."}),f.jsxs("li",{children:["Kopier UF2-filen til drevet ",f.jsx("strong",{children:"RPI-RP2"})]})]}),f.jsxs("div",{className:"micropython-selects",children:[f.jsx("label",{htmlFor:"micropython-board",children:"Pico-model"}),f.jsx("select",{id:"micropython-board",value:kn,onChange:m=>Bt(m.target.value),children:ni.map(m=>f.jsx("option",{value:m,children:m},m))}),f.jsx("label",{htmlFor:"micropython-version",children:"MicroPython-version"}),f.jsx("select",{id:"micropython-version",value:(xn==null?void 0:xn.version)??Bn,onChange:m=>Tr(m.target.value),children:Pn.map(m=>f.jsxs("option",{value:m.version,children:[m.version," (",m.date,")"]},`${m.board}:${m.version}:${m.date}`))})]}),xn&&f.jsx("a",{className:"btn btn-primary btn-block",href:xn.url,download:xn.fileName,children:"Download UF2"}),f.jsx("a",{className:"btn btn-outline btn-block",href:"https://www.raspberrypi.com/documentation/microcontrollers/micropython.html",target:"_blank",rel:"noreferrer",children:"Se vejledning"})]})}),z&&f.jsx(Sn,{title:"Ny Python-fil",onClose:()=>Z(!1),children:f.jsxs("form",{className:"ide-new-file-form",onSubmit:m=>{m.preventDefault(),Ko()},children:[f.jsx("label",{htmlFor:"new-pico-file",children:"Filnavn"}),f.jsxs("div",{className:"ide-new-file-row",children:[f.jsx("input",{id:"new-pico-file",value:oe,onChange:m=>we(m.target.value),autoFocus:!0,placeholder:"test"}),f.jsx("span",{children:".py"})]}),f.jsxs("p",{children:["Skriv kun navnet. Appen tilføjer .py automatisk og opretter filen i ",ei,"."]}),f.jsx("button",{className:"btn btn-primary",type:"submit",disabled:!Hh(oe),children:"Opret"})]})}),B&&f.jsx(Sn,{title:Be(B.path),onClose:()=>W(null),children:f.jsxs("div",{className:"ide-file-action-modal",children:[f.jsxs("form",{className:"ide-file-rename-form",onSubmit:m=>{m.preventDefault(),ec()},children:[f.jsx("label",{htmlFor:"rename-pico-file",children:"Filnavn"}),f.jsxs("div",{className:"ide-new-file-row",children:[f.jsx("input",{id:"rename-pico-file",value:ke,onChange:m=>S(m.target.value),placeholder:"min_kode"}),f.jsxs("span",{children:[".",Za(B.path)]})]}),f.jsxs("p",{children:["Skriv kun navnet. Appen beholder filendelsen .",Za(B.path)," automatisk."]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!yf(ke,Za(B.path))||yf(ke,Za(B.path))===B.path||K,children:"Gem navn"})]}),f.jsx("div",{className:"ide-file-action-buttons",children:f.jsx("button",{className:"btn btn-outline btn-danger btn-block",type:"button",onClick:()=>ps(B),disabled:K,children:"Slet"})}),f.jsxs("section",{className:"ide-version-history",children:[f.jsx("h4",{children:"Versionshistorik"}),B.source!=="pico"?f.jsx("p",{children:"Versioner gemmes kun for filer på Picoen."}):B.versions.length===0?f.jsx("p",{children:"Versionshistorik: 0 gemte versioner."}):f.jsx("div",{className:"ide-version-list",children:B.versions.map(m=>f.jsxs("div",{className:"ide-version-row",children:[f.jsx("span",{children:Be(m.path)}),f.jsx("small",{children:m.size!==void 0?`${m.size} bytes`:"Gemt på Pico"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>void hs(m),disabled:K,children:"Gendan"}),f.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Wo(m),disabled:K,children:"Slet"})]},m.path))})]})]})})]})}function Hh(o){var c;const i=(c=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.replace(/\.py$/i,"").replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"");return i?`/${i}.py`:""}function Sy(o){const i=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop(),c=i==null?void 0:i.match(/^(.+)\.(py|txt|json|csv)$/i);if(!c)return"";const a=b_(c[1]);return a?`/${a}.${c[2].toLowerCase()}`:""}function yf(o,i="py"){const c=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop();if(!c)return"";const a=c.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);if(!a)return"";const u=b_(a[1]),d=i.replace(/^\./,"").toLowerCase(),h=(a[2]??(d||"py")).toLowerCase();return u?`/${u}.${h}`:""}function Ey(o){return Be(o).replace(/\.(py|txt|json|csv)$/i,"")}function b_(o){return o.replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"")}function Za(o){var a;const i=Be(o).match(/\.([a-z0-9]+)$/i),c=(a=i==null?void 0:i[1])==null?void 0:a.toLowerCase();return c&&["py","txt","json","csv"].includes(c)?c:"py"}function Bi(o){return o.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}function Vh(){return zi.map(o=>({...o,status:"unknown",detail:"Kan gemmes uden Pico. Forbind en Pico for at installere."}))}function Gh(o){const i={};return o.forEach(c=>{i[c.id]=!1}),i}function Be(o){return o.split("/").filter(Boolean).pop()??o}function Mo(o){return o.replace(/\\/g,"/").toLowerCase()==="/main.py"}function Yh(o){const i=o.userAgent||"",c=o.platform||"",a=o.maxTouchPoints||0,u=/Android.*Mobile|iPhone|iPod|Windows Phone|Mobile Safari/i.test(i),d=/Macintosh/i.test(c)&&a>1;return u&&!d}function ky(o){return o instanceof DOMException&&o.name==="AbortError"}function Ny(o){return/Traceback \(most recent call last\):/.test(o)||/\b(?:SyntaxError|NameError|TypeError|ValueError|IndentationError|ImportError|ModuleNotFoundError|ZeroDivisionError|IndexError|KeyError|AttributeError):/.test(o)}function $l(o){return Ry(o)}function Ry(o){return o.path.replace(/\\/g,"/").toLowerCase()==="/bleperipheral.py"}const Tf=[...["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"].map(o=>({label:o,insert:`${o}${["for","if","while","def","class","elif","else","try","except","finally","with"].includes(o)?" ":""}`})),...["abs","all","any","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","exec","filter","float","getattr","hasattr","hash","hex","id","input","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","open","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","zip"].map(o=>({label:`${o}()`,insert:`${o}()`})),{label:"for i in range():",insert:"for i in range():"},{label:"while True:",insert:"while True:"},{label:"if True:",insert:"if True:"},{label:"time",insert:"time"},{label:"time.",insert:"time."},{label:"time.sleep",insert:"time.sleep"},{label:"time.sleep()",insert:"time.sleep()"},{label:"time.sleep_ms()",insert:"time.sleep_ms()"},{label:"time.ticks_ms()",insert:"time.ticks_ms()"},{label:"time.ticks_diff()",insert:"time.ticks_diff()"},{label:"time.sleep_us()",insert:"time.sleep_us()"},{label:"time.ticks_us()",insert:"time.ticks_us()"},{label:"machine",insert:"machine"},{label:"machine.",insert:"machine."},{label:"machine.Pin",insert:"machine.Pin"},{label:"machine.PWM",insert:"machine.PWM"},{label:"machine.ADC",insert:"machine.ADC"},{label:"machine.I2C",insert:"machine.I2C"},{label:"machine.SPI",insert:"machine.SPI"},{label:"machine.Timer",insert:"machine.Timer"},{label:"machine.UART",insert:"machine.UART"},{label:"machine.reset()",insert:"machine.reset()"},{label:"machine.freq()",insert:"machine.freq()"},{label:"Pin()",insert:"Pin()"},{label:"PWM()",insert:"PWM()"},{label:"ADC()",insert:"ADC()"},{label:"I2C()",insert:"I2C()"},{label:"SPI()",insert:"SPI()"},{label:"Timer()",insert:"Timer()"},{label:"UART()",insert:"UART()"},{label:"Pin.OUT",insert:"Pin.OUT"},{label:"Pin.IN",insert:"Pin.IN"},{label:"Pin.PULL_UP",insert:"Pin.PULL_UP"},{label:"Pin.PULL_DOWN",insert:"Pin.PULL_DOWN"},{label:"Pin.IRQ_FALLING",insert:"Pin.IRQ_FALLING"},{label:"Pin.IRQ_RISING",insert:"Pin.IRQ_RISING"},{label:"import time",insert:"import time"},{label:"import utime as time",insert:"import utime as time"},{label:"import machine",insert:"import machine"},{label:"import random",insert:"import random"},{label:"import os",insert:"import os"},{label:"import sys",insert:"import sys"},{label:"from machine import Pin",insert:"from machine import Pin"},{label:"from machine import Pin, PWM",insert:"from machine import Pin, PWM"},{label:"from machine import Pin, PWM, ADC",insert:"from machine import Pin, PWM, ADC"},{label:"BLEPeripheral",insert:"BLEPeripheral"},{label:"PicoRobotics",insert:"PicoRobotics"},{label:"NeoPixel",insert:"NeoPixel"},{label:"HCSR04",insert:"HCSR04"},{label:"ble.send_toggle_state()",insert:"ble.send_toggle_state()"},{label:"ble.send_radar()",insert:"ble.send_radar()"},{label:"ble.send_text()",insert:"ble.send_text()"},{label:"on_button(name, is_down):",insert:"on_button(name, is_down):"},{label:"on_slider(name, value):",insert:"on_slider(name, value):"},{label:"on_toggle(name, value):",insert:"on_toggle(name, value):"},{label:"on_connect():",insert:"on_connect():"},{label:"on_disconnect():",insert:"on_disconnect():"},{label:"ValueError",insert:"ValueError"},{label:"TypeError",insert:"TypeError"},{label:"OSError",insert:"OSError"},{label:"Exception",insert:"Exception"}];function Ih(o,i,c){const a=Af(o,i);if(!a)return[];const u=My(o,a.start,i),d=a.query.toLowerCase(),h=u.beforeToken.toLowerCase(),_=u.linePrefix.toLowerCase(),v=c?[...Tf,...Ty(o)]:Tf;return Ay(v).filter(x=>{const N=x.label.toLowerCase(),R=x.insert.toLowerCase();return R===d||N===d||y_(x,a.query)?!1:u.importLine?jy(x,u)?N.startsWith(_)||R.startsWith(_)||N.startsWith(d)||R.startsWith(d):!1:h.endsWith(".")&&!R.includes(".")?!1:!!(R.startsWith(d)||N.startsWith(d))})}function My(o,i,c){const a=o.lastIndexOf(`
`,i-1)+1,u=o.slice(a,c),d=o.slice(a,i),h=/^\s*(?:import|from)\s+[\w.,\s]*$/i.test(u),_=/^\s*from\s+\w+(?:\.\w+)*\s+import\s+/i.test(u);return{linePrefix:u,beforeToken:d,importLine:h,fromImportLine:_}}function jy(o,i){return i.fromImportLine?!o.insert.includes("(")&&!o.insert.startsWith("import "):o.insert.startsWith("import ")||o.insert.startsWith("from ")?!0:/^[A-Za-z_][A-Za-z0-9_]*$/.test(o.insert)}function Ty(o){const i=new Set,c=[/\bdef\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/g,/\bclass\s+([A-Za-z_][A-Za-z0-9_]*)\b/g,/(?:^|[^\w.])([A-Za-z_][A-Za-z0-9_]*)\s*=/g,/\bfor\s+([A-Za-z_][A-Za-z0-9_]*)\s+in\b/g,/\b([A-Za-z_][A-Za-z0-9_]*)\.([A-Za-z_][A-Za-z0-9_]*)\s*\(/g];for(const a of c)for(const u of o.matchAll(a))u[1]&&i.add(u[1]),u[2]&&i.add(u[2]);return[...i].filter(a=>a.length>1&&!Dy.has(a)).sort((a,u)=>a.localeCompare(u,"da")).map(a=>({label:a,insert:a}))}function Ay(o){const i=new Set,c=[];for(const a of o){const u=a.insert.toLowerCase();i.has(u)||(i.add(u),c.push(a))}return c}const Dy=new Set(Tf.map(o=>o.insert.replace(/[().: ]+$/g,"")));function Af(o,i){const a=o.slice(0,i).match(/[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_.]*$/);return!a||a.index===void 0?null:{query:a[0],start:a.index}}function y_(o,i){const c=o.insert.trim();return!/[().]/.test(c)&&c.toLowerCase()===i.toLowerCase()}function Oy(o){return/^[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_]*$/.test(o)}function qh(o,i){if(!o)return null;const c=o.closest(".ide-terminal")??o.parentElement;if(!c)return null;const a=window.getComputedStyle(o),u=document.createElement("div"),d=document.createElement("span"),h=c.getBoundingClientRect(),_=o.getBoundingClientRect();u.style.position="absolute",u.style.visibility="hidden",u.style.pointerEvents="none",u.style.whiteSpace="pre-wrap",u.style.overflowWrap="break-word",u.style.boxSizing=a.boxSizing,u.style.width=`${o.clientWidth}px`,u.style.padding=a.padding,u.style.border=a.border,u.style.font=a.font,u.style.lineHeight=a.lineHeight,u.style.letterSpacing=a.letterSpacing,u.style.tabSize=a.tabSize,u.style.left=`${_.left-h.left-o.scrollLeft}px`,u.style.top=`${_.top-h.top-o.scrollTop}px`,u.textContent=o.value.slice(0,i),d.textContent=o.value.slice(i,i+1)||" ",u.appendChild(d),c.appendChild(u);const v=d.getBoundingClientRect();u.remove();const y=Cy(v.left-h.left,8,Math.max(8,c.clientWidth-296)),x=v.bottom-h.top+6,N=x+218>c.clientHeight?Math.max(8,v.top-h.top-218):x;return{left:y,top:N}}function Cy(o,i,c){return Math.max(i,Math.min(c,o))}function Ly(o,i=""){const c=/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,a=/(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm,u=[];return o.split(/(\r?\n)/).forEach((d,h)=>{if(d===`
`||d===`\r
`){u.push(f.jsx("br",{},`br-${h}`));return}let _=0;[...d.matchAll(a)].forEach((y,x)=>{const N=y.index??0;N>_&&u.push(...Ph(d.slice(_,N),c,`${h}-${x}-plain`,i));const R=y[0],$=R.startsWith("#")?"tok-comment":R.startsWith('"')||R.startsWith("'")?"tok-string":/^\d/.test(R)?"tok-number":"tok-builtin";u.push(...Do(R,i,`${h}-${x}-token`,$)),_=N+R.length}),_<d.length&&u.push(...Ph(d.slice(_),c,`${h}-tail`,i))}),u.length?u:" "}function Ph(o,i,c,a=""){const u=[];let d=0;const h=new RegExp(i.source,"g");return[...o.matchAll(h)].forEach((_,v)=>{const y=_.index??0;y>d&&u.push(...Do(o.slice(d,y),a,`${c}-${v}-plain`)),u.push(...Do(_[0],a,`${c}-${v}-keyword`,"tok-keyword")),d=y+_[0].length}),d<o.length&&u.push(...Do(o.slice(d),a,`${c}-plain-end`)),u}function Do(o,i,c,a=""){if(!i)return[f.jsx("span",{className:a||void 0,children:o},c)];const u=[],d=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),h=new RegExp(`(?<![A-Za-zÆØÅæøå0-9_])(${d})(?![A-Za-zÆØÅæøå0-9_])`,"g");let _=0;return[...o.matchAll(h)].forEach((v,y)=>{const x=v.index??0;x>_&&u.push(f.jsx("span",{className:a||void 0,children:o.slice(_,x)},`${c}-${y}-before`)),u.push(f.jsx("span",{className:`${a} tok-match`.trim(),children:v[0]},`${c}-${y}-match`)),_=x+v[0].length}),_<o.length&&u.push(f.jsx("span",{className:a||void 0,children:o.slice(_)},`${c}-after`)),u.length?u:[f.jsx("span",{className:a||void 0,children:o},c)]}function vf(o){return o.length>0?o:[{path:jf,content:g_,uploaded:!1,updatedAt:Date.now()}]}function By(o,i,c,a){const u=o.filter(d=>d.path!==i);return[{path:i,content:c,uploaded:a,updatedAt:Date.now()},...u].sort((d,h)=>h.updatedAt-d.updatedAt)}function zy(o,i,c){var a;return o.source==="pico"?c[o.path]:(a=i.find(u=>u.path===o.path))==null?void 0:a.content}function Oo(o){const i=o.replace(/\\/g,"/"),c=i.lastIndexOf("/"),a=c>=0?i.slice(0,c+1):"",d=(c>=0?i.slice(c+1):i).match(/^(.+)_backup(\d+)(\.[^.]+)$/i);return d?{originalPath:`${a}${d[1]}${d[3]}`,index:parseInt(d[2],10)}:null}function Ui(o){return Oo(o)!==null}function Df(o){const i=new Map;for(const c of o){const a=Oo(c.path);if(!a)continue;const u=i.get(a.originalPath)??[];u.push(c),i.set(a.originalPath,u)}for(const c of i.values())c.sort((a,u)=>{var d,h;return(((d=Oo(u.path))==null?void 0:d.index)??0)-(((h=Oo(a.path))==null?void 0:h.index)??0)});return i}function Uy(o,i){const c=o.replace(/\\/g,"/"),a=c.lastIndexOf("/"),u=a>=0?c.slice(0,a+1):"/",d=a>=0?c.slice(a+1):c.replace(/^\/+/,""),h=d.lastIndexOf("."),_=h>0?d.slice(0,h):d,v=h>0?d.slice(h):"",y=new Set(i.map(x=>x.path.toLowerCase()));for(let x=1;x<1e3;x+=1){const N=`${u}${_}_backup${x}${v}`;if(!y.has(N.toLowerCase()))return N}return`${u}${_}_backup${Date.now()}${v}`}function Hy(o){return o==="ok"?"Nyeste":o==="outdated"?"Opdater":o==="missing"?"Mangler":"Ikke tjekket"}function Vy(o,i,c,a){const u=new Map,d=Df(o);for(const x of o)Ui(x.path)||u.set(bt("pico",x.path),{kind:"file",name:x.name,path:x.path,type:x.type,size:x.size,source:"pico",uploaded:!0,versions:d.get(x.path)??[]});for(const x of i)u.set(bt("local",x.path),{kind:"file",name:Be(x.path),path:x.path,type:"file",source:"local",uploaded:!1,versions:[]});for(const x of Object.keys(c)){const[N,...R]=x.split(":"),$=R.join(":");if(N!=="local"&&N!=="pico"||!$)continue;const I=u.get(x);if(I){u.set(x,I);continue}u.set(x,{kind:"file",name:Be($),path:$,type:"file",source:N,uploaded:!1,versions:N==="pico"?d.get($)??[]:[]})}const h=[...u.values()].sort(Yy),_=h.filter(x=>x.source==="pico"),v=h.filter(x=>x.source==="local"),y=[];return _.length>0||a?y.push({kind:"separator",id:"pico-files",label:a?"Pico":"Microcontroller"},..._):y.push({kind:"separator",id:"pico-files",label:"Microcontroller"}),v.length>0&&y.push({kind:"separator",id:"browser-files",label:"Browser"},...v),y}const Gy=new Map([["main.py",0],["devicesettings.txt",1],["layout.txt",2],["bleperipheral.py",3],["picofly.py",4],["picorobotics.py",5],["neopixel.py",6],["hcsr04.py",7]]);function Yy(o,i){const c=$h(o.path),a=$h(i.path);return c===null&&a===null?o.name.localeCompare(i.name,"da"):c===null?-1:a===null?1:c-a}function $h(o){var c;const i=(c=o.replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:c.toLowerCase();return i?Gy.get(i)??null:null}function Xh(o,i,c){if(!(i in o))return o;const a={...o,[c]:o[i]};return delete a[i],a}function Iy(o,i,c,a){const u=`${i}:${c}`;if(!(u in o))return o;const d={...o,[`${i}:${a}`]:o[u]};return delete d[u],d}function qy({open:o}){const i=te(H=>H.screen),c=te(H=>H.active),a=te(H=>H.toggleSideMenu),u=te(H=>H.toggleDebugger),d=te(H=>H.setEditMode),h=te(H=>H.openMenuPage),_=te(H=>H.disconnect),v=te(H=>H.openPicoIde),y=te(H=>H.closePicoIde),x=te(H=>H.picoIdeOrigin),N=i==="dashboard",R=i==="control",$=i==="ide",I=R&&!!(c!=null&&c.canEdit),J=!R||!!(c!=null&&c.isOwnedByMe)||!!(c!=null&&c.canEditCode),K=x==="control",G=x==="control"?"Kontrol Panel":"Hovedmenu";return f.jsxs(f.Fragment,{children:[f.jsx("div",{className:`scrim ${o?"open":"closing"}`,onClick:()=>a(!1)}),f.jsxs("nav",{className:`sidemenu sidemenu-${i} ${o?"open":"closing"}`,"aria-label":"Sidemenu",children:[N&&f.jsxs(f.Fragment,{children:[f.jsx(gt,{label:"Bruger",icon:"user",onClick:()=>h("user-settings")}),f.jsx(gt,{label:"Indstillinger",icon:"settings",onClick:()=>h("application-settings")}),f.jsx(gt,{label:"Kodeværksted",icon:"picoIde",onClick:v,disabled:!J}),f.jsx(xf,{}),f.jsx(gt,{label:"Om appen",icon:"info",onClick:()=>h("application-about")}),f.jsx(gt,{label:"Hjælp",icon:"help",onClick:()=>h("application-help")}),f.jsx(gt,{label:"Fejlfinding",icon:"debugger",onClick:()=>u(!0)})]}),R&&f.jsxs(f.Fragment,{children:[f.jsx(gt,{label:"Indstillinger",icon:"settings",onClick:()=>h("device-settings")}),f.jsx(gt,{label:"Rediger",icon:"edit",onClick:()=>d(!0),disabled:!I}),f.jsx(gt,{label:"Kodeværksted",icon:"picoIde",onClick:v,disabled:!J}),f.jsx(xf,{}),f.jsx(gt,{label:"Hjælp",icon:"help",onClick:()=>h("device-help")}),f.jsx(gt,{label:"Fejlfinding",icon:"debugger",onClick:()=>u(!0)})]}),$&&f.jsxs(f.Fragment,{children:[f.jsx(gt,{label:G,icon:"back",onClick:y}),f.jsx(xf,{})]}),f.jsx("div",{className:"spacer"}),(R||$&&K)&&f.jsx(gt,{label:"Forlad",icon:"exit",onClick:()=>_()})]})]})}function gt({label:o,icon:i,disabled:c,onClick:a}){return f.jsxs("button",{className:"iconbtn",type:"button",onClick:a,disabled:c,"aria-label":o,children:[f.jsx(Fn,{name:i}),f.jsx("span",{children:o})]})}function xf(){return f.jsxs("a",{className:"iconbtn sidemenu-link",href:"https://www.teknologiskolen.dk/",target:"_blank",rel:"noreferrer","aria-label":"Teknologiskolen",children:[f.jsx("img",{src:G0,alt:""}),f.jsx("span",{children:"Teknologiskolen"})]})}const Py={error:"term-error",success:"term-success",warning:"term-warning",info:""},Fh={error:"[FEJL] ",success:"[SUCCES] ",warning:"[ADVARSEL] ",info:""};function $y(){const o=new Date,i=c=>String(c).padStart(2,"0");return`${i(o.getDate())}-${i(o.getMonth()+1)}-${o.getFullYear()}-${i(o.getHours())}-${i(o.getMinutes())}`}function Xy(){const o=te(u=>u.logs),i=te(u=>u.clearLogs),c=te(u=>u.toggleDebugger);function a(){const u=[...o].reverse().map(v=>`${v.time} ${Fh[v.level]}${v.message}`).join(`
`),d=new Blob([u],{type:"text/plain"}),h=URL.createObjectURL(d),_=document.createElement("a");_.href=h,_.download=`${$y()}.txt`,_.click(),URL.revokeObjectURL(h)}return f.jsxs(Sn,{title:"Fejlfinding",onClose:()=>c(!1),closeVariant:"circle",children:[f.jsx("div",{className:"terminal",children:o.length===0?f.jsx("div",{className:"term-line",children:"Ingen log endnu."}):o.map((u,d)=>f.jsxs("div",{className:`term-line ${Py[u.level]}`,children:[u.time," ",Fh[u.level],u.message]},`${u.time}-${d}`))}),f.jsxs("div",{className:"row",style:{marginTop:14},children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:"Ryd"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:a,children:"Gem logfil"})]})]})}const v_=4,Lt=v_*4+17,Kh=80,Fy=20,Ky=30660;function Qy(o){const i=new TextEncoder().encode(o);if(i.length>76)throw new Error("QR-koden er for lang.");const c=Qh(!1),a=Qh(!1);Zy(c,a);const u=Jy(i),d=tv(u,Fy);return ev(c,a,[...u,...d]),nv(c,a),c}function Qh(o){return Array.from({length:Lt},()=>Array.from({length:Lt},()=>o))}function Ct(o,i,c,a,u,d=!0){o[a][c]=u,d&&(i[a][c]=!0)}function Zy(o,i){wf(o,i,0,0),wf(o,i,Lt-7,0),wf(o,i,0,Lt-7);for(let c=0;c<Lt;c+=1)i[6][c]||Ct(o,i,c,6,c%2===0),i[c][6]||Ct(o,i,6,c,c%2===0);Wy(o,i,26,26),Ct(o,i,8,v_*4+9,!0)}function wf(o,i,c,a){for(let u=-1;u<=7;u+=1)for(let d=-1;d<=7;d+=1){const h=c+d,_=a+u;if(h<0||_<0||h>=Lt||_>=Lt)continue;const v=d>=0&&d<=6&&u>=0&&u<=6&&(d===0||d===6||u===0||u===6||d>=2&&d<=4&&u>=2&&u<=4);Ct(o,i,h,_,v)}}function Wy(o,i,c,a){for(let u=-2;u<=2;u+=1)for(let d=-2;d<=2;d+=1)i[a+u][c+d]||Ct(o,i,c+d,a+u,Math.max(Math.abs(d),Math.abs(u))!==1)}function Jy(o){const i=[];jo(i,4,4),jo(i,o.length,8);for(const a of o)jo(i,a,8);for(jo(i,0,Math.min(4,Kh*8-i.length));i.length%8!==0;)i.push(0);const c=[];for(let a=0;a<i.length;a+=8)c.push(i.slice(a,a+8).reduce((u,d)=>u<<1|d,0));for(let a=236;c.length<Kh;a=a===236?17:236)c.push(a);return c}function jo(o,i,c){for(let a=c-1;a>=0;a-=1)o.push(i>>>a&1)}function ev(o,i,c){const a=c.flatMap(h=>Array.from({length:8},(_,v)=>h>>>7-v&1));let u=0,d=!0;for(let h=Lt-1;h>=1;h-=2){h===6&&(h-=1);for(let _=0;_<Lt;_+=1){const v=d?Lt-1-_:_;for(let y=0;y<2;y+=1){const x=h-y;if(i[v][x])continue;const N=u<a.length?a[u]===1:!1;o[v][x]=N!==((x+v)%2===0),u+=1}}d=!d}}function nv(o,i){const c=a=>(Ky>>>a&1)!==0;for(let a=0;a<=5;a+=1)Ct(o,i,8,a,c(a));Ct(o,i,8,7,c(6)),Ct(o,i,8,8,c(7)),Ct(o,i,7,8,c(8));for(let a=9;a<15;a+=1)Ct(o,i,14-a,8,c(a));for(let a=0;a<8;a+=1)Ct(o,i,Lt-1-a,8,c(a));for(let a=8;a<15;a+=1)Ct(o,i,8,Lt-15+a,c(a))}const es=new Array(512),Of=new Array(256);let Zh=!1;function x_(){if(Zh)return;let o=1;for(let i=0;i<255;i+=1)es[i]=o,Of[o]=i,o<<=1,o&256&&(o^=285);for(let i=255;i<512;i+=1)es[i]=es[i-255];Zh=!0}function w_(o,i){return o===0||i===0?0:es[Of[o]+Of[i]]}function tv(o,i){x_();const c=rv(i),a=Array.from({length:i},()=>0);for(const u of o){const d=u^a.shift();a.push(0);for(let h=0;h<i;h+=1)a[h]^=w_(c[h],d)}return a}function rv(o){x_();let i=[1];for(let c=0;c<o;c+=1){const a=Array.from({length:i.length+1},()=>0);for(let u=0;u<i.length;u+=1)a[u]^=w_(i[u],es[c]),a[u+1]^=i[u];i=a}return i.slice(1)}function lv(){const o=te(be=>be.menuPage),i=te(be=>be.closeMenuPage),c=te(be=>be.user),a=te(be=>be.active),u=te(be=>be.layout),d=te(be=>be.sliderValues),h=te(be=>be.savedDevices),_=te(be=>be.updateUsername),v=te(be=>be.createOwnerPairingCode),y=te(be=>be.applyOwnerPairingCode),x=te(be=>be.clearSavedDevices),N=te(be=>be.resetApplicationData),R=te(be=>be.saveDeviceSettings),$=te(be=>be.setEditMode),I=te(be=>be.askConfirm),[J,K]=L.useState((c==null?void 0:c.username)??""),[G,H]=L.useState(!1),[ie,le]=L.useState(""),[se,he]=L.useState(""),[ne,ee]=L.useState(!1),[xe,ge]=L.useState(""),ye=L.useRef(null),[ae,Ve]=L.useState((a==null?void 0:a.iconID)??0),[Re,Pe]=L.useState(!1),[z,Z]=L.useState((a==null?void 0:a.canOthersConnect)??!1),[oe,we]=L.useState((a==null?void 0:a.canOthersEdit)??!1),[ke,S]=L.useState((a==null?void 0:a.canOthersEditCode)??!1),[B,W]=L.useState((a==null?void 0:a.gridCols)??11),[j,F]=L.useState((a==null?void 0:a.gridRows)??31),[Q,X]=L.useState(!1);L.useEffect(()=>{o==="user-settings"&&(K((c==null?void 0:c.username)??""),he(""),ge(""),ee(!1))},[o,c==null?void 0:c.username]),L.useEffect(()=>{o==="device-settings"&&a&&(Ve(a.iconID),Z(a.canOthersConnect),we(a.canOthersEdit),S(a.canOthersEditCode),W(a.gridCols),F(a.gridRows))},[a,o]),L.useEffect(()=>{if(!ne)return;let be=!1,bn=null,En=0;async function Oe(){var Bt;const kn=window.BarcodeDetector;if(!kn||!((Bt=navigator.mediaDevices)!=null&&Bt.getUserMedia)){ge("Denne browser kan ikke scanne QR-koder. Skriv ejerkoden i stedet."),ee(!1);return}try{bn=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const Bn=ye.current;if(!Bn)return;Bn.srcObject=bn,await Bn.play();const Tr=new kn({formats:["qr_code"]}),Ar=async()=>{var vt;if(!be){try{const Dr=(vt=(await Tr.detect(Bn)).find(yn=>yn.rawValue))==null?void 0:vt.rawValue;if(Dr){he(Dr),y(Dr)&&H(!1),ee(!1);return}}catch{}En=window.requestAnimationFrame(Ar)}};En=window.requestAnimationFrame(Ar)}catch{ge("Kameraet kunne ikke åbnes. Skriv ejerkoden i stedet."),ee(!1)}}return Oe(),()=>{be=!0,En&&window.cancelAnimationFrame(En),bn==null||bn.getTracks().forEach(kn=>kn.stop())}},[y,ne]);const Le=(be,bn)=>Number.isFinite(be)?Math.max(Hi,Math.min(Vi,Math.round(be))):bn,Te=(c==null?void 0:c.username)??"",Yn=J.trim(),Pt=Yn.length>0&&Yn!==Te;if(!o)return null;if(o==="user-settings"){let be=function(){const Oe=v();Oe&&(le(Oe),he(""),H(!0))},bn=function(){y(se)&&(he(""),H(!1))};async function En(){var Oe;try{await((Oe=navigator.clipboard)==null?void 0:Oe.writeText(ie))}catch{}}return f.jsxs(f.Fragment,{children:[f.jsx(Sn,{title:"Brugerindstillinger",onClose:i,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(Ot,{label:"GUID",value:(c==null?void 0:c.userID)??"Ukendt"}),f.jsxs("div",{className:`field ${J.trim()?"filled":""}`,children:[f.jsx("input",{id:"settings-username",value:J,onChange:Oe=>K(Oe.target.value),maxLength:24,autoComplete:"off",placeholder:""}),f.jsx("label",{htmlFor:"settings-username",children:"Brugernavn"})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>_(J),disabled:!Pt,children:"Gem nyt brugernavn"}),f.jsx("div",{className:"notice",children:"Ejerkode bruges, hvis den samme person skal forbinde fra flere browsere eller telefoner."}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:be,children:"Ejerkode"}),f.jsx("button",{className:"btn btn-outline btn-block btn-danger",type:"button",onClick:()=>I({title:"Start forfra",message:"Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.",confirmLabel:"Slet alt",onConfirm:()=>{N()}}),children:"Slet brugerdata"})]})}),G&&f.jsx(Sn,{title:"Del ejerkode",onClose:()=>H(!1),children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(sv,{code:ie}),f.jsx("code",{className:"owner-code-text",children:ie}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void En(),children:"Kopiér ejerkode"}),f.jsxs("div",{className:`field ${se.trim()?"filled":""}`,children:[f.jsx("input",{id:"settings-owner-code",value:se,onChange:Oe=>he(Oe.target.value),autoComplete:"off",placeholder:""}),f.jsx("label",{htmlFor:"settings-owner-code",children:"Skriv ejerkode"})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:bn,disabled:!se.trim(),children:"Brug ejerkode i denne browser"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>ee(Oe=>!Oe),children:ne?"Stop scanning":"Scan QR-kode"}),xe&&f.jsx("div",{className:"notice",children:xe}),ne&&f.jsx("video",{className:"owner-code-video",ref:ye,muted:!0,playsInline:!0})]})})]})}if(o==="application-settings")return f.jsx(Sn,{title:"Applikationsindstillinger",onClose:i,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(Ot,{label:"Version",value:ns}),f.jsx(Ot,{label:"Bluetooth",value:Vo()?"Tilgængelig":"Ikke tilgængelig"}),f.jsx(Ot,{label:"Gemte enheder",value:String(h.length)}),f.jsx("div",{className:"notice",children:"Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne tilladelsen i browserens site- eller Bluetooth-indstillinger."}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>I({title:"Ryd gemte enheder",message:"Vil du fjerne alle gemte enheder fra denne browser?",confirmLabel:"Ryd",onConfirm:x}),disabled:h.length===0,children:"Ryd gemte enheder"})]})});if(o==="application-about")return f.jsx(Sn,{title:"Om appen",onClose:i,children:f.jsxs("div",{className:"settings-stack prose",children:[f.jsx("p",{children:"Pico Kontrol Panel er lavet til at bygge og fjernstyre sjove eller seje Raspberry Pi Pico W-projekter."}),f.jsx(Ot,{label:"Udvikler",value:"Christian Bröchner Rasmussen"}),f.jsx(Ot,{label:"Version",value:ns})]})});if(o==="application-help")return f.jsx(Sn,{title:"Hjælp til applikationen",onClose:i,children:f.jsxs("div",{className:"settings-stack prose help-lesson",children:[f.jsxs("div",{className:"help-lesson-card",children:[f.jsx("strong",{children:"Komplet undervisningsforløb"}),f.jsx("p",{children:"Linket åbner Teknologiskolens guide til Pico Kontrol Panel. Her kan du lære hele arbejdsgangen: browseropsætning, Kodeværkstedet, MicroPython, USB-installation, Bluetooth-forbindelse, kontrolpaneler og trådløs kodeudvikling."})]}),f.jsxs("div",{className:"help-lesson-list","aria-label":"Undervisningsforløbet indeholder",children:[f.jsx("span",{children:"Trin-for-trin opsætning"}),f.jsx("span",{children:"Øvelser til kode og kontrolpanel"}),f.jsx("span",{children:"Projektforslag med Pico W"})]}),f.jsx("p",{className:"help-lesson-destination",children:"Du sendes til materialer.teknologiskolen.dk i en ny fane."}),f.jsx("a",{className:"btn btn-primary btn-block",href:"https://materialer.teknologiskolen.dk/lessons/fjernstyring-af-raspberry-pi-pico-w",target:"_blank",rel:"noreferrer",children:"Åbn komplet undervisningsforløb"})]})});if(o==="device-settings"){const be=u.filter(Oe=>Oe.type==="slider"),bn=!!(a!=null&&a.isOwnedByMe);async function En(Oe=!1){if(!a||!bn)return;const kn=Le(B,a.gridCols),Bt=Le(j,a.gridRows),Bn=iv(u,kn,Bt);if(Bn&&!Oe){I({title:"Gitter kan påvirke layout",message:`Det nuværende layout bruger op til ${Bn.requiredCols} kolonner og ${Bn.requiredRows} rækker. Det nye gitter er ${kn} × ${Bt}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,confirmLabel:"Gem alligevel",onConfirm:()=>{En(!0)}});return}X(!0),await R(ae,z,z&&oe,z&&ke,kn,Bt),W(kn),F(Bt),X(!1)}return f.jsx(Sn,{title:"Enhedsindstillinger",onClose:i,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(Ot,{label:"Navn",value:(a==null?void 0:a.deviceName)??"Ukendt"}),f.jsx(Ot,{label:"Ejer",value:ov(a)}),bn?f.jsxs(f.Fragment,{children:[f.jsx("button",{className:"device-icon-pick settings-icon-pick",type:"button",onClick:()=>Pe(!0),children:f.jsx("img",{src:qi(ae),alt:""})}),f.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:z?"":"active",onClick:()=>Z(!1),children:"Privat"}),f.jsx("button",{type:"button",className:z?"active":"",onClick:()=>Z(!0),children:"Offentlig"})]}),z&&f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:oe?"":"active",onClick:()=>we(!1),children:"Nej"}),f.jsx("button",{type:"button",className:oe?"active":"",onClick:()=>we(!0),children:"Ja"})]}),f.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:ke?"":"active",onClick:()=>S(!1),children:"Nej"}),f.jsx("button",{type:"button",className:ke?"active":"",onClick:()=>S(!0),children:"Ja"})]})]}),f.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter"}),f.jsxs("div",{className:"row",children:[f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"device-cols",children:"Kolonner"}),f.jsx("input",{id:"device-cols",type:"number",min:Hi,max:Vi,value:Number.isNaN(B)?"":B,onChange:Oe=>W(parseInt(Oe.target.value,10)),onBlur:()=>W(Le(B,(a==null?void 0:a.gridCols)??11))})]}),f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"device-rows",children:"Rækker"}),f.jsx("input",{id:"device-rows",type:"number",min:Hi,max:Vi,value:Number.isNaN(j)?"":j,onChange:Oe=>F(parseInt(Oe.target.value,10)),onBlur:()=>F(Le(j,(a==null?void 0:a.gridRows)??31))})]})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>En(),disabled:Q,children:Q?"Gemmer...":"Gem enhedsindstillinger"})]}):f.jsxs(f.Fragment,{children:[f.jsx(Ot,{label:"Ikon ID",value:String((a==null?void 0:a.iconID)??0)}),f.jsx(Ot,{label:"Redigering",value:a!=null&&a.canEdit?"Tilladt":"Ikke tilladt"}),f.jsx(Ot,{label:"Gitter",value:`${(a==null?void 0:a.gridCols)??0} × ${(a==null?void 0:a.gridRows)??0}`})]}),f.jsx(Ot,{label:"Kontroller",value:String(u.length)}),be.length>0&&f.jsxs("div",{className:"settings-section",children:[f.jsx("h4",{children:"Slidere"}),be.map(Oe=>f.jsxs("div",{className:"slider-meta",children:[f.jsx("strong",{children:Oe.name}),f.jsxs("span",{children:[Oe.sliderMin??0," til ",Oe.sliderMax??100]}),f.jsxs("span",{children:["Retur: ",av(Oe.sliderRecenter??"none")]}),f.jsxs("span",{children:["Seneste værdi: ",d[Oe.name]??"Ikke brugt"]})]},Oe.name))]}),Re&&f.jsx(i_,{selected:ae,onSelect:Ve,onClose:()=>Pe(!1)})]})})}return f.jsx(Sn,{title:"Hjælp til enheden",onClose:i,children:f.jsxs("div",{className:"settings-stack prose",children:[f.jsx("p",{children:"Knapper sender en kommando med deres navn, når de trykkes."}),f.jsx("p",{children:"Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse."}),f.jsx("p",{children:"Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen."}),(a==null?void 0:a.canEdit)&&f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>$(!0),children:"Rediger layout"})]})})}function iv(o,i,c){let a=0,u=0;for(const d of o)Gi(d)&&(a=Math.max(a,Math.ceil((d.centerX2+d.spanX)/2)+1),u=Math.max(u,Math.ceil((d.centerY2+d.spanY)/2)+1));return i<a||c<u?{requiredCols:a,requiredRows:u}:null}function av(o){return o==="bottom"?"bund":o==="middle"?"midte":o==="top"?"top":"ingen"}function sv({code:o}){const i=L.useMemo(()=>Qy(o),[o]),c=i.length;return f.jsxs("svg",{className:"owner-code-qr",viewBox:`0 0 ${c+8} ${c+8}`,role:"img","aria-label":"QR-kode til ejerkode",children:[f.jsx("rect",{width:c+8,height:c+8,fill:"white"}),i.map((a,u)=>a.map((d,h)=>d?f.jsx("rect",{x:h+4,y:u+4,width:"1",height:"1",fill:"currentColor"},`${h}-${u}`):null))]})}function ov(o){var i;return o?o.isOwnedByMe?"Dig":((i=o.ownerName)==null?void 0:i.trim())||"Anden bruger":"Ukendt"}function Ot({label:o,value:i}){return f.jsxs("div",{className:"settings-row",children:[f.jsx("span",{children:o}),f.jsx("strong",{children:i})]})}function cv(){const o=te(a=>a.confirmDialog),i=te(a=>a.closeConfirm);if(!o)return null;function c(){o==null||o.onConfirm(),i()}return f.jsx(Sn,{title:o.title,onClose:i,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:o.message}),f.jsxs("div",{className:"row",children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:o.cancelLabel??"Annuller"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:c,children:o.confirmLabel??"Fortsæt"})]})]})})}function uv(){const o=te(a=>a.connectionLost),i=te(a=>a.reconnectLostDevice),c=te(a=>a.dismissConnectionLost);return o?f.jsx(Sn,{title:"Forbindelse afbrudt",onClose:c,children:f.jsxs("div",{className:"settings-stack",children:[f.jsxs("p",{className:"confirm-message",children:["Forbindelsen til ",o.deviceName," blev afbrudt. Tjek at Picoen har strøm og er tæt nok på."]}),f.jsxs("div",{className:"row",children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:c,children:"Luk"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>i(),children:"Genforbind"})]})]})}):null}function fv(){const o=te(c=>c.toast),i=te(c=>c.dismissToast);return o?f.jsx("div",{className:"toast",role:"alert",onClick:i,children:o.message},o.id):null}function dv(){const o=te(_=>_.screen),i=te(_=>_.splashTarget),c=te(_=>_.init),a=te(_=>_.sideMenuOpen),u=te(_=>_.debuggerOpen),[d,h]=L.useState(!1);return L.useEffect(()=>{c()},[c]),L.useEffect(()=>{if(a){h(!0);return}const _=setTimeout(()=>h(!1),140);return()=>clearTimeout(_)},[a]),f.jsxs("div",{className:"app",children:[o==="splash"&&i==="intro"&&f.jsx(gh,{}),o==="splash"&&i==="dashboard"&&f.jsx(bh,{}),o==="splash"&&f.jsx(P0,{}),o==="intro"&&f.jsx(gh,{}),o==="dashboard"&&f.jsx(bh,{}),o==="connection"&&f.jsx(Q0,{}),o==="create"&&f.jsx(Z0,{}),o==="control"&&f.jsx(Tb,{}),o==="ide"&&f.jsx(wy,{}),d&&f.jsx(qy,{open:a}),f.jsx(lv,{}),f.jsx(uv,{}),f.jsx(cv,{}),u&&f.jsx(Xy,{}),f.jsx(fv,{})]})}function mv(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{const o=new URL("sw.js",window.location.href);navigator.serviceWorker.register(o,{scope:"./"}).catch(i=>{console.warn("Service worker registration failed:",i)})})}mv();t0.createRoot(document.getElementById("root")).render(f.jsx(Wa.StrictMode,{children:f.jsx(dv,{})}));
