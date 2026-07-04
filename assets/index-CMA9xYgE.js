var yg=Object.defineProperty;var vg=(o,i,u)=>i in o?yg(o,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):o[i]=u;var de=(o,i,u)=>vg(o,typeof i!="symbol"?i+"":i,u);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const h of c)if(h.type==="childList")for(const p of h.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function u(c){const h={};return c.integrity&&(h.integrity=c.integrity),c.referrerPolicy&&(h.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?h.credentials="include":c.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(c){if(c.ep)return;c.ep=!0;const h=u(c);fetch(c.href,h)}})();function Ap(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Hu={exports:{}},Hi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh;function xg(){if(Oh)return Hi;Oh=1;var o=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function u(s,c,h){var p=null;if(h!==void 0&&(p=""+h),c.key!==void 0&&(p=""+c.key),"key"in c){h={};for(var b in c)b!=="key"&&(h[b]=c[b])}else h=c;return c=h.ref,{$$typeof:o,type:s,key:p,ref:c!==void 0?c:null,props:h}}return Hi.Fragment=i,Hi.jsx=u,Hi.jsxs=u,Hi}var Ch;function Sg(){return Ch||(Ch=1,Hu.exports=xg()),Hu.exports}var f=Sg(),Gu={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zh;function Eg(){if(zh)return xe;zh=1;var o=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),p=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),j=Symbol.iterator;function I(w){return w===null||typeof w!="object"?null:(w=j&&w[j]||w["@@iterator"],typeof w=="function"?w:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},le=Object.assign,G={};function q(w,O,Z){this.props=w,this.context=O,this.refs=G,this.updater=Z||F}q.prototype.isReactComponent={},q.prototype.setState=function(w,O){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,O,"setState")},q.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function se(){}se.prototype=q.prototype;function ce(w,O,Z){this.props=w,this.context=O,this.refs=G,this.updater=Z||F}var oe=ce.prototype=new se;oe.constructor=ce,le(oe,q.prototype),oe.isPureReactComponent=!0;var he=Array.isArray;function ke(){}var ee={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function ve(w,O,Z){var A=Z.ref;return{$$typeof:o,type:w,key:O,ref:A!==void 0?A:null,props:Z}}function be(w,O){return ve(w.type,O,w.props)}function ye(w){return typeof w=="object"&&w!==null&&w.$$typeof===o}function ae(w){var O={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(Z){return O[Z]})}var Ie=/\/+/g;function Re(w,O){return typeof w=="object"&&w!==null&&w.key!=null?ae(""+w.key):O.toString(36)}function $e(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(ke,ke):(w.status="pending",w.then(function(O){w.status==="pending"&&(w.status="fulfilled",w.value=O)},function(O){w.status==="pending"&&(w.status="rejected",w.reason=O)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function C(w,O,Z,A,K){var Q=typeof w;(Q==="undefined"||Q==="boolean")&&(w=null);var X=!1;if(w===null)X=!0;else switch(Q){case"bigint":case"string":case"number":X=!0;break;case"object":switch(w.$$typeof){case o:case i:X=!0;break;case x:return X=w._init,C(X(w._payload),O,Z,A,K)}}if(X)return K=K(w),X=A===""?"."+Re(w,0):A,he(K)?(Z="",X!=null&&(Z=X.replace(Ie,"$&/")+"/"),C(K,O,Z,"",function(at){return at})):K!=null&&(ye(K)&&(K=be(K,Z+(K.key==null||w&&w.key===K.key?"":(""+K.key).replace(Ie,"$&/")+"/")+X)),O.push(K)),1;X=0;var Fe=A===""?".":A+":";if(he(w))for(var Oe=0;Oe<w.length;Oe++)A=w[Oe],Q=Fe+Re(A,Oe),X+=C(A,O,Z,Q,K);else if(Oe=I(w),typeof Oe=="function")for(w=Oe.call(w),Oe=0;!(A=w.next()).done;)A=A.value,Q=Fe+Re(A,Oe++),X+=C(A,O,Z,Q,K);else if(Q==="object"){if(typeof w.then=="function")return C($e(w),O,Z,A,K);throw O=String(w),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return X}function P(w,O,Z){if(w==null)return w;var A=[],K=0;return C(w,A,"","",function(Q){return O.call(Z,Q,K++)}),A}function fe(w){if(w._status===-1){var O=w._result;O=O(),O.then(function(Z){(w._status===0||w._status===-1)&&(w._status=1,w._result=Z)},function(Z){(w._status===0||w._status===-1)&&(w._status=2,w._result=Z)}),w._status===-1&&(w._status=0,w._result=O)}if(w._status===1)return w._result.default;throw w._result}var te=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)},Se={map:P,forEach:function(w,O,Z){P(w,function(){O.apply(this,arguments)},Z)},count:function(w){var O=0;return P(w,function(){O++}),O},toArray:function(w){return P(w,function(O){return O})||[]},only:function(w){if(!ye(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return xe.Activity=N,xe.Children=Se,xe.Component=q,xe.Fragment=u,xe.Profiler=c,xe.PureComponent=ce,xe.StrictMode=s,xe.Suspense=v,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,xe.__COMPILER_RUNTIME={__proto__:null,c:function(w){return ee.H.useMemoCache(w)}},xe.cache=function(w){return function(){return w.apply(null,arguments)}},xe.cacheSignal=function(){return null},xe.cloneElement=function(w,O,Z){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var A=le({},w.props),K=w.key;if(O!=null)for(Q in O.key!==void 0&&(K=""+O.key),O)!W.call(O,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&O.ref===void 0||(A[Q]=O[Q]);var Q=arguments.length-2;if(Q===1)A.children=Z;else if(1<Q){for(var X=Array(Q),Fe=0;Fe<Q;Fe++)X[Fe]=arguments[Fe+2];A.children=X}return ve(w.type,K,A)},xe.createContext=function(w){return w={$$typeof:p,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:h,_context:w},w},xe.createElement=function(w,O,Z){var A,K={},Q=null;if(O!=null)for(A in O.key!==void 0&&(Q=""+O.key),O)W.call(O,A)&&A!=="key"&&A!=="__self"&&A!=="__source"&&(K[A]=O[A]);var X=arguments.length-2;if(X===1)K.children=Z;else if(1<X){for(var Fe=Array(X),Oe=0;Oe<X;Oe++)Fe[Oe]=arguments[Oe+2];K.children=Fe}if(w&&w.defaultProps)for(A in X=w.defaultProps,X)K[A]===void 0&&(K[A]=X[A]);return ve(w,Q,K)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(w){return{$$typeof:b,render:w}},xe.isValidElement=ye,xe.lazy=function(w){return{$$typeof:x,_payload:{_status:-1,_result:w},_init:fe}},xe.memo=function(w,O){return{$$typeof:y,type:w,compare:O===void 0?null:O}},xe.startTransition=function(w){var O=ee.T,Z={};ee.T=Z;try{var A=w(),K=ee.S;K!==null&&K(Z,A),typeof A=="object"&&A!==null&&typeof A.then=="function"&&A.then(ke,te)}catch(Q){te(Q)}finally{O!==null&&Z.types!==null&&(O.types=Z.types),ee.T=O}},xe.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},xe.use=function(w){return ee.H.use(w)},xe.useActionState=function(w,O,Z){return ee.H.useActionState(w,O,Z)},xe.useCallback=function(w,O){return ee.H.useCallback(w,O)},xe.useContext=function(w){return ee.H.useContext(w)},xe.useDebugValue=function(){},xe.useDeferredValue=function(w,O){return ee.H.useDeferredValue(w,O)},xe.useEffect=function(w,O){return ee.H.useEffect(w,O)},xe.useEffectEvent=function(w){return ee.H.useEffectEvent(w)},xe.useId=function(){return ee.H.useId()},xe.useImperativeHandle=function(w,O,Z){return ee.H.useImperativeHandle(w,O,Z)},xe.useInsertionEffect=function(w,O){return ee.H.useInsertionEffect(w,O)},xe.useLayoutEffect=function(w,O){return ee.H.useLayoutEffect(w,O)},xe.useMemo=function(w,O){return ee.H.useMemo(w,O)},xe.useOptimistic=function(w,O){return ee.H.useOptimistic(w,O)},xe.useReducer=function(w,O,Z){return ee.H.useReducer(w,O,Z)},xe.useRef=function(w){return ee.H.useRef(w)},xe.useState=function(w){return ee.H.useState(w)},xe.useSyncExternalStore=function(w,O,Z){return ee.H.useSyncExternalStore(w,O,Z)},xe.useTransition=function(){return ee.H.useTransition()},xe.version="19.2.7",xe}var Bh;function df(){return Bh||(Bh=1,Gu.exports=Eg()),Gu.exports}var H=df();const Ki=Ap(H);var Vu={exports:{}},Gi={},Yu={exports:{}},qu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lh;function wg(){return Lh||(Lh=1,(function(o){function i(C,P){var fe=C.length;C.push(P);e:for(;0<fe;){var te=fe-1>>>1,Se=C[te];if(0<c(Se,P))C[te]=P,C[fe]=Se,fe=te;else break e}}function u(C){return C.length===0?null:C[0]}function s(C){if(C.length===0)return null;var P=C[0],fe=C.pop();if(fe!==P){C[0]=fe;e:for(var te=0,Se=C.length,w=Se>>>1;te<w;){var O=2*(te+1)-1,Z=C[O],A=O+1,K=C[A];if(0>c(Z,fe))A<Se&&0>c(K,Z)?(C[te]=K,C[A]=fe,te=A):(C[te]=Z,C[O]=fe,te=O);else if(A<Se&&0>c(K,fe))C[te]=K,C[A]=fe,te=A;else break e}}return P}function c(C,P){var fe=C.sortIndex-P.sortIndex;return fe!==0?fe:C.id-P.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;o.unstable_now=function(){return h.now()}}else{var p=Date,b=p.now();o.unstable_now=function(){return p.now()-b}}var v=[],y=[],x=1,N=null,j=3,I=!1,F=!1,le=!1,G=!1,q=typeof setTimeout=="function"?setTimeout:null,se=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;function oe(C){for(var P=u(y);P!==null;){if(P.callback===null)s(y);else if(P.startTime<=C)s(y),P.sortIndex=P.expirationTime,i(v,P);else break;P=u(y)}}function he(C){if(le=!1,oe(C),!F)if(u(v)!==null)F=!0,ke||(ke=!0,ae());else{var P=u(y);P!==null&&$e(he,P.startTime-C)}}var ke=!1,ee=-1,W=5,ve=-1;function be(){return G?!0:!(o.unstable_now()-ve<W)}function ye(){if(G=!1,ke){var C=o.unstable_now();ve=C;var P=!0;try{e:{F=!1,le&&(le=!1,se(ee),ee=-1),I=!0;var fe=j;try{n:{for(oe(C),N=u(v);N!==null&&!(N.expirationTime>C&&be());){var te=N.callback;if(typeof te=="function"){N.callback=null,j=N.priorityLevel;var Se=te(N.expirationTime<=C);if(C=o.unstable_now(),typeof Se=="function"){N.callback=Se,oe(C),P=!0;break n}N===u(v)&&s(v),oe(C)}else s(v);N=u(v)}if(N!==null)P=!0;else{var w=u(y);w!==null&&$e(he,w.startTime-C),P=!1}}break e}finally{N=null,j=fe,I=!1}P=void 0}}finally{P?ae():ke=!1}}}var ae;if(typeof ce=="function")ae=function(){ce(ye)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,Re=Ie.port2;Ie.port1.onmessage=ye,ae=function(){Re.postMessage(null)}}else ae=function(){q(ye,0)};function $e(C,P){ee=q(function(){C(o.unstable_now())},P)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(C){C.callback=null},o.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<C?Math.floor(1e3/C):5},o.unstable_getCurrentPriorityLevel=function(){return j},o.unstable_next=function(C){switch(j){case 1:case 2:case 3:var P=3;break;default:P=j}var fe=j;j=P;try{return C()}finally{j=fe}},o.unstable_requestPaint=function(){G=!0},o.unstable_runWithPriority=function(C,P){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var fe=j;j=C;try{return P()}finally{j=fe}},o.unstable_scheduleCallback=function(C,P,fe){var te=o.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?te+fe:te):fe=te,C){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=fe+Se,C={id:x++,callback:P,priorityLevel:C,startTime:fe,expirationTime:Se,sortIndex:-1},fe>te?(C.sortIndex=fe,i(y,C),u(v)===null&&C===u(y)&&(le?(se(ee),ee=-1):le=!0,$e(he,fe-te))):(C.sortIndex=Se,i(v,C),F||I||(F=!0,ke||(ke=!0,ae()))),C},o.unstable_shouldYield=be,o.unstable_wrapCallback=function(C){var P=j;return function(){var fe=j;j=P;try{return C.apply(this,arguments)}finally{j=fe}}}})(qu)),qu}var Uh;function kg(){return Uh||(Uh=1,Yu.exports=wg()),Yu.exports}var $u={exports:{}},jn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hh;function Ng(){if(Hh)return jn;Hh=1;var o=df();function i(v){var y="https://react.dev/errors/"+v;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)y+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+v+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var s={d:{f:u,r:function(){throw Error(i(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},c=Symbol.for("react.portal");function h(v,y,x){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:N==null?null:""+N,children:v,containerInfo:y,implementation:x}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(v,y){if(v==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,jn.createPortal=function(v,y){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(i(299));return h(v,y,null,x)},jn.flushSync=function(v){var y=p.T,x=s.p;try{if(p.T=null,s.p=2,v)return v()}finally{p.T=y,s.p=x,s.d.f()}},jn.preconnect=function(v,y){typeof v=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(v,y))},jn.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},jn.preinit=function(v,y){if(typeof v=="string"&&y&&typeof y.as=="string"){var x=y.as,N=b(x,y.crossOrigin),j=typeof y.integrity=="string"?y.integrity:void 0,I=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;x==="style"?s.d.S(v,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:N,integrity:j,fetchPriority:I}):x==="script"&&s.d.X(v,{crossOrigin:N,integrity:j,fetchPriority:I,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},jn.preinitModule=function(v,y){if(typeof v=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var x=b(y.as,y.crossOrigin);s.d.M(v,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(v)},jn.preload=function(v,y){if(typeof v=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var x=y.as,N=b(x,y.crossOrigin);s.d.L(v,x,{crossOrigin:N,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},jn.preloadModule=function(v,y){if(typeof v=="string")if(y){var x=b(y.as,y.crossOrigin);s.d.m(v,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(v)},jn.requestFormReset=function(v){s.d.r(v)},jn.unstable_batchedUpdates=function(v,y){return v(y)},jn.useFormState=function(v,y,x){return p.H.useFormState(v,y,x)},jn.useFormStatus=function(){return p.H.useHostTransitionStatus()},jn.version="19.2.7",jn}var Gh;function Tg(){if(Gh)return $u.exports;Gh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(i){console.error(i)}}return o(),$u.exports=Ng(),$u.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vh;function Rg(){if(Vh)return Gi;Vh=1;var o=kg(),i=df(),u=Tg();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function p(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function b(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function v(e){if(h(e)!==e)throw Error(s(188))}function y(e){var n=e.alternate;if(!n){if(n=h(e),n===null)throw Error(s(188));return n!==e?null:e}for(var t=e,l=n;;){var r=t.return;if(r===null)break;var a=r.alternate;if(a===null){if(l=r.return,l!==null){t=l;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===t)return v(r),e;if(a===l)return v(r),n;a=a.sibling}throw Error(s(188))}if(t.return!==l.return)t=r,l=a;else{for(var m=!1,_=r.child;_;){if(_===t){m=!0,t=r,l=a;break}if(_===l){m=!0,l=r,t=a;break}_=_.sibling}if(!m){for(_=a.child;_;){if(_===t){m=!0,t=a,l=r;break}if(_===l){m=!0,l=a,t=r;break}_=_.sibling}if(!m)throw Error(s(189))}}if(t.alternate!==l)throw Error(s(190))}if(t.tag!==3)throw Error(s(188));return t.stateNode.current===t?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var N=Object.assign,j=Symbol.for("react.element"),I=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),le=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),se=Symbol.for("react.consumer"),ce=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),he=Symbol.for("react.suspense"),ke=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),ve=Symbol.for("react.activity"),be=Symbol.for("react.memo_cache_sentinel"),ye=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=ye&&e[ye]||e["@@iterator"],typeof e=="function"?e:null)}var Ie=Symbol.for("react.client.reference");function Re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case le:return"Fragment";case q:return"Profiler";case G:return"StrictMode";case he:return"Suspense";case ke:return"SuspenseList";case ve:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case F:return"Portal";case ce:return e.displayName||"Context";case se:return(e._context.displayName||"Context")+".Consumer";case oe:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return n=e.displayName||null,n!==null?n:Re(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return Re(e(n))}catch{}}return null}var $e=Array.isArray,C=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},te=[],Se=-1;function w(e){return{current:e}}function O(e){0>Se||(e.current=te[Se],te[Se]=null,Se--)}function Z(e,n){Se++,te[Se]=e.current,e.current=n}var A=w(null),K=w(null),Q=w(null),X=w(null);function Fe(e,n){switch(Z(Q,n),Z(K,e),Z(A,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?th(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=th(n),e=lh(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(A),Z(A,e)}function Oe(){O(A),O(K),O(Q)}function at(e){e.memoizedState!==null&&Z(X,e);var n=A.current,t=lh(n,e.type);n!==t&&(Z(K,e),Z(A,t))}function hl(e){K.current===e&&(O(A),O(K)),X.current===e&&(O(X),zi._currentValue=fe)}var Ua,zr;function pl(e){if(Ua===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ua=n&&n[1]||"",zr=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ua+e+zr}var Br=!1;function _l(e,n){if(!e||Br)return"";Br=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(L){var D=L}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(L){D=L}e.call(Y.prototype)}}else{try{throw Error()}catch(L){D=L}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(L){if(L&&D&&typeof L.stack=="string")return[L.stack,D.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=l.DetermineComponentFrameRoot(),m=a[0],_=a[1];if(m&&_){var E=m.split(`
`),M=_.split(`
`);for(r=l=0;l<E.length&&!E[l].includes("DetermineComponentFrameRoot");)l++;for(;r<M.length&&!M[r].includes("DetermineComponentFrameRoot");)r++;if(l===E.length||r===M.length)for(l=E.length-1,r=M.length-1;1<=l&&0<=r&&E[l]!==M[r];)r--;for(;1<=l&&0<=r;l--,r--)if(E[l]!==M[r]){if(l!==1||r!==1)do if(l--,r--,0>r||E[l]!==M[r]){var U=`
`+E[l].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=l&&0<=r);break}}}finally{Br=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?pl(t):""}function jo(e,n){switch(e.tag){case 26:case 27:case 5:return pl(e.type);case 16:return pl("Lazy");case 13:return e.child!==n&&n!==null?pl("Suspense Fallback"):pl("Suspense");case 19:return pl("SuspenseList");case 0:case 15:return _l(e.type,!1);case 11:return _l(e.type.render,!1);case 1:return _l(e.type,!0);case 31:return pl("Activity");default:return""}}function Jl(e){try{var n="",t=null;do n+=jo(e,t),t=e,e=e.return;while(e);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Lr=Object.prototype.hasOwnProperty,Ha=o.unstable_scheduleCallback,Vt=o.unstable_cancelCallback,Ga=o.unstable_shouldYield,Pi=o.unstable_requestPaint,Rn=o.unstable_now,Ur=o.unstable_getCurrentPriorityLevel,Hr=o.unstable_ImmediatePriority,Va=o.unstable_UserBlockingPriority,er=o.unstable_NormalPriority,it=o.unstable_LowPriority,st=o.unstable_IdlePriority,gl=o.log,Gr=o.unstable_setDisableYieldValue,nr=null,pn=null;function $n(e){if(typeof gl=="function"&&Gr(e),pn&&typeof pn.setStrictMode=="function")try{pn.setStrictMode(nr,e)}catch{}}var vn=Math.clz32?Math.clz32:vl,bl=Math.log,yl=Math.LN2;function vl(e){return e>>>=0,e===0?32:31-(bl(e)/yl|0)|0}var Dt=256,An=262144,Xe=4194304;function xn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function cn(e,n,t){var l=e.pendingLanes;if(l===0)return 0;var r=0,a=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var _=l&134217727;return _!==0?(l=_&~a,l!==0?r=xn(l):(m&=_,m!==0?r=xn(m):t||(t=_&~e,t!==0&&(r=xn(t))))):(_=l&~a,_!==0?r=xn(_):m!==0?r=xn(m):t||(t=l&~e,t!==0&&(r=xn(t)))),r===0?0:n!==0&&n!==r&&(n&a)===0&&(a=r&-r,t=n&-n,a>=t||a===32&&(t&4194048)!==0)?n:r}function Dn(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ao(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ya(){var e=Xe;return Xe<<=1,(Xe&62914560)===0&&(Xe=4194304),e}function Ot(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function tr(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yt(e,n,t,l,r,a){var m=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var _=e.entanglements,E=e.expirationTimes,M=e.hiddenUpdates;for(t=m&~t;0<t;){var U=31-vn(t),Y=1<<U;_[U]=0,E[U]=-1;var D=M[U];if(D!==null)for(M[U]=null,U=0;U<D.length;U++){var L=D[U];L!==null&&(L.lane&=-536870913)}t&=~Y}l!==0&&Zi(e,l,0),a!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=a&~(m&~n))}function Zi(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-vn(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|t&261930}function Vr(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var l=31-vn(t),r=1<<l;r&n|e[l]&n&&(e[l]|=n),t&=~r}}function Wi(e,n){var t=n&-n;return t=(t&42)!==0?1:xl(t),(t&(e.suspendedLanes|n))!==0?0:t}function xl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function wt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function un(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:Nh(e.type))}function qa(e,n){var t=P.p;try{return P.p=e,n()}finally{P.p=t}}var Xn=Math.random().toString(36).slice(2),tn="__reactFiber$"+Xn,ln="__reactProps$"+Xn,ot="__reactContainer$"+Xn,Ct="__reactEvents$"+Xn,Yr="__reactListeners$"+Xn,lr="__reactHandles$"+Xn,qr="__reactResources$"+Xn,Bn="__reactMarker$"+Xn;function qt(e){delete e[tn],delete e[ln],delete e[Ct],delete e[Yr],delete e[lr]}function Ln(e){var n=e[tn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[ot]||t[tn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=uh(e);e!==null;){if(t=e[tn])return t;e=uh(e)}return n}e=t,t=e.parentNode}return null}function Kn(e){if(e=e[tn]||e[ot]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ct(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function $t(e){var n=e[qr];return n||(n=e[qr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ze(e){e[Bn]=!0}var Xt=new Set,pe={};function kt(e,n){Sl(e,n),Sl(e+"Capture",n)}function Sl(e,n){for(pe[e]=n,e=0;e<n.length;e++)Xt.add(n[e])}var Do=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ji={},es={};function rr(e){return Lr.call(es,e)?!0:Lr.call(Ji,e)?!1:Do.test(e)?es[e]=!0:(Ji[e]=!0,!1)}function Nt(e,n,t){if(rr(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function Tt(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function In(e,n,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+l)}}function Un(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $a(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Xa(e,n,t){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,a=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(m){t=""+m,a.call(this,m)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(m){t=""+m},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function $(e){if(!e._valueTracker){var n=$a(e)?"checked":"value";e._valueTracker=Xa(e,n,""+e[n])}}function ar(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),l="";return e&&(l=$a(e)?e.checked?"true":"false":e.value),e=l,e!==t?(n.setValue(e),!0):!1}function Je(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ns=/[\n"\\]/g;function gn(e){return e.replace(ns,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ir(e,n,t,l,r,a,m,_){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),n!=null?m==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Un(n)):e.value!==""+Un(n)&&(e.value=""+Un(n)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),n!=null?Mn(e,m,Un(n)):t!=null?Mn(e,m,Un(t)):l!=null&&e.removeAttribute("value"),r==null&&a!=null&&(e.defaultChecked=!!a),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.name=""+Un(_):e.removeAttribute("name")}function ts(e,n,t,l,r,a,m,_){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),n!=null||t!=null){if(!(a!=="submit"&&a!=="reset"||n!=null)){$(e);return}t=t!=null?""+Un(t):"",n=n!=null?""+Un(n):t,_||n===e.value||(e.value=n),e.defaultValue=n}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=_?e.checked:!!l,e.defaultChecked=!!l,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),$(e)}function Mn(e,n,t){n==="number"&&Je(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Kt(e,n,t,l){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&l&&(e[t].defaultSelected=!0)}else{for(t=""+Un(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function $r(e,n,t){if(n!=null&&(n=""+Un(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+Un(t):""}function Sn(e,n,t,l){if(n==null){if(l!=null){if(t!=null)throw Error(s(92));if($e(l)){if(1<l.length)throw Error(s(93));l=l[0]}t=l}t==null&&(t=""),n=t}t=Un(n),e.defaultValue=t,l=e.textContent,l===t&&l!==""&&l!==null&&(e.value=l),$(e)}function ut(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Oo=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ls(e,n,t){var l=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,t):typeof t!="number"||t===0||Oo.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function El(e,n,t){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in n)l=n[r],n.hasOwnProperty(r)&&t[r]!==l&&ls(e,r,l)}else for(var a in n)n.hasOwnProperty(a)&&ls(e,a,n[a])}function Ka(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rs=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function It(e){return Xr.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ft(){}var Ia=null;function Fa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wl=null,On=null;function rn(e){var n=Kn(e);if(n&&(e=n.stateNode)){var t=e[ln]||null;e:switch(e=n.stateNode,n.type){case"input":if(ir(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+gn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var l=t[n];if(l!==e&&l.form===e.form){var r=l[ln]||null;if(!r)throw Error(s(90));ir(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(n=0;n<t.length;n++)l=t[n],l.form===e.form&&ar(l)}break e;case"textarea":$r(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&Kt(e,!!t.multiple,n,!1)}}}var Kr=!1;function kl(e,n,t){if(Kr)return e(n,t);Kr=!0;try{var l=e(n);return l}finally{if(Kr=!1,(wl!==null||On!==null)&&(Qs(),wl&&(n=wl,e=On,On=wl=null,rn(n),e)))for(n=0;n<e.length;n++)rn(e[n])}}function Nl(e,n){var t=e.stateNode;if(t===null)return null;var l=t[ln]||null;if(l===null)return null;t=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(s(231,n,typeof t));return t}var dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ir=!1;if(dt)try{var sr={};Object.defineProperty(sr,"passive",{get:function(){Ir=!0}}),window.addEventListener("test",sr,sr),window.removeEventListener("test",sr,sr)}catch{Ir=!1}var zt=null,Qa=null,or=null;function Pa(){if(or)return or;var e,n=Qa,t=n.length,l,r="value"in zt?zt.value:zt.textContent,a=r.length;for(e=0;e<t&&n[e]===r[e];e++);var m=t-e;for(l=1;l<=m&&n[t-l]===r[a-l];l++);return or=r.slice(e,1<l?1-l:void 0)}function Tl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Fr(){return!0}function Za(){return!1}function En(e){function n(t,l,r,a,m){this._reactName=t,this._targetInst=r,this.type=l,this.nativeEvent=a,this.target=m,this.currentTarget=null;for(var _ in e)e.hasOwnProperty(_)&&(t=e[_],this[_]=t?t(a):a[_]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Fr:Za,this.isPropagationStopped=Za,this}return N(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Fr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Fr)},persist:function(){},isPersistent:Fr}),n}var Bt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qr=En(Bt),cr=N({},Bt,{view:0,detail:0}),Co=En(cr),Wa,Ja,ur,Pr=N({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ni,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ur&&(ur&&e.type==="mousemove"?(Wa=e.screenX-ur.screenX,Ja=e.screenY-ur.screenY):Ja=Wa=0,ur=e),Wa)},movementY:function(e){return"movementY"in e?e.movementY:Ja}}),as=En(Pr),zo=N({},Pr,{dataTransfer:0}),Bo=En(zo),fr=N({},cr,{relatedTarget:0}),ei=En(fr),Lo=N({},Bt,{animationName:0,elapsedTime:0,pseudoElement:0}),is=En(Lo),Uo=N({},Bt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ss=En(Uo),Ho=N({},Bt,{data:0}),os=En(Ho),cs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Go={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vo={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yo(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Vo[e])?!!n[e]:!1}function ni(){return Yo}var qo=N({},cr,{key:function(e){if(e.key){var n=cs[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Go[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ni,charCode:function(e){return e.type==="keypress"?Tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$o=En(qo),us=N({},Pr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ft=En(us),fs=N({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ni}),Xo=En(fs),Ko=N({},Bt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Io=En(Ko),dr=N({},Pr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zr=En(dr),ds=N({},Bt,{newState:0,oldState:0}),ti=En(ds),ms=[9,13,27,32],li=dt&&"CompositionEvent"in window,mr=null;dt&&"documentMode"in document&&(mr=document.documentMode);var d=dt&&"TextEvent"in window&&!mr,g=dt&&(!li||mr&&8<mr&&11>=mr),S=" ",z=!1;function B(e,n){switch(e){case"keyup":return ms.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function re(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ge=!1;function Le(e,n){switch(e){case"compositionend":return re(n);case"keypress":return n.which!==32?null:(z=!0,S);case"textInput":return e=n.data,e===S&&z?null:e;default:return null}}function an(e,n){if(ge)return e==="compositionend"||!li&&B(e,n)?(e=Pa(),or=Qa=zt=null,ge=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return g&&n.locale!=="ko"?null:n.data;default:return null}}var mt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qt(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!mt[e.type]:n==="textarea"}function Ue(e,n,t,l){wl?On?On.push(l):On=[l]:wl=l,n=to(n,"onChange"),0<n.length&&(t=new Qr("onChange","change",null,t,l),e.push({event:t,listeners:n}))}var Fn=null,Pt=null;function hr(e){Pm(e,0)}function Rt(e){var n=ct(e);if(ar(n))return e}function Wr(e,n){if(e==="change")return n}var Jr=!1;if(dt){var pr;if(dt){var _r="oninput"in document;if(!_r){var Rl=document.createElement("div");Rl.setAttribute("oninput","return;"),_r=typeof Rl.oninput=="function"}pr=_r}else pr=!1;Jr=pr&&(!document.documentMode||9<document.documentMode)}function hs(){Fn&&(Fn.detachEvent("onpropertychange",ri),Pt=Fn=null)}function ri(e){if(e.propertyName==="value"&&Rt(Pt)){var n=[];Ue(n,Pt,e,Fa(e)),kl(hr,n)}}function Ip(e,n,t){e==="focusin"?(hs(),Fn=n,Pt=t,Fn.attachEvent("onpropertychange",ri)):e==="focusout"&&hs()}function Fp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rt(Pt)}function Qp(e,n){if(e==="click")return Rt(n)}function Pp(e,n){if(e==="input"||e==="change")return Rt(n)}function Zp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Qn=typeof Object.is=="function"?Object.is:Zp;function ai(e,n){if(Qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),l=Object.keys(n);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var r=t[l];if(!Lr.call(n,r)||!Qn(e[r],n[r]))return!1}return!0}function vf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xf(e,n){var t=vf(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=n&&l>=n)return{node:t,offset:n-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=vf(t)}}function Sf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Sf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ef(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Je(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Je(e.document)}return n}function Fo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Wp=dt&&"documentMode"in document&&11>=document.documentMode,ea=null,Qo=null,ii=null,Po=!1;function wf(e,n,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Po||ea==null||ea!==Je(l)||(l=ea,"selectionStart"in l&&Fo(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ii&&ai(ii,l)||(ii=l,l=to(Qo,"onSelect"),0<l.length&&(n=new Qr("onSelect","select",null,n,t),e.push({event:n,listeners:l}),n.target=ea)))}function gr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var na={animationend:gr("Animation","AnimationEnd"),animationiteration:gr("Animation","AnimationIteration"),animationstart:gr("Animation","AnimationStart"),transitionrun:gr("Transition","TransitionRun"),transitionstart:gr("Transition","TransitionStart"),transitioncancel:gr("Transition","TransitionCancel"),transitionend:gr("Transition","TransitionEnd")},Zo={},kf={};dt&&(kf=document.createElement("div").style,"AnimationEvent"in window||(delete na.animationend.animation,delete na.animationiteration.animation,delete na.animationstart.animation),"TransitionEvent"in window||delete na.transitionend.transition);function br(e){if(Zo[e])return Zo[e];if(!na[e])return e;var n=na[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in kf)return Zo[e]=n[t];return e}var Nf=br("animationend"),Tf=br("animationiteration"),Rf=br("animationstart"),Jp=br("transitionrun"),e_=br("transitionstart"),n_=br("transitioncancel"),Mf=br("transitionend"),jf=new Map,Wo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wo.push("scrollEnd");function Mt(e,n){jf.set(e,n),kt(n,[e])}var ps=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ht=[],ta=0,Jo=0;function _s(){for(var e=ta,n=Jo=ta=0;n<e;){var t=ht[n];ht[n++]=null;var l=ht[n];ht[n++]=null;var r=ht[n];ht[n++]=null;var a=ht[n];if(ht[n++]=null,l!==null&&r!==null){var m=l.pending;m===null?r.next=r:(r.next=m.next,m.next=r),l.pending=r}a!==0&&Af(t,r,a)}}function gs(e,n,t,l){ht[ta++]=e,ht[ta++]=n,ht[ta++]=t,ht[ta++]=l,Jo|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ec(e,n,t,l){return gs(e,n,t,l),bs(e)}function yr(e,n){return gs(e,null,null,n),bs(e)}function Af(e,n,t){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t);for(var r=!1,a=e.return;a!==null;)a.childLanes|=t,l=a.alternate,l!==null&&(l.childLanes|=t),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(r=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,r&&n!==null&&(r=31-vn(t),e=a.hiddenUpdates,l=e[r],l===null?e[r]=[n]:l.push(n),n.lane=t|536870912),a):null}function bs(e){if(50<Ri)throw Ri=0,cu=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var la={};function t_(e,n,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(e,n,t,l){return new t_(e,n,t,l)}function nc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zt(e,n){var t=e.alternate;return t===null?(t=Pn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Df(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ys(e,n,t,l,r,a){var m=0;if(l=e,typeof e=="function")nc(e)&&(m=1);else if(typeof e=="string")m=sg(e,t,A.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ve:return e=Pn(31,t,n,r),e.elementType=ve,e.lanes=a,e;case le:return vr(t.children,r,a,n);case G:m=8,r|=24;break;case q:return e=Pn(12,t,n,r|2),e.elementType=q,e.lanes=a,e;case he:return e=Pn(13,t,n,r),e.elementType=he,e.lanes=a,e;case ke:return e=Pn(19,t,n,r),e.elementType=ke,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ce:m=10;break e;case se:m=9;break e;case oe:m=11;break e;case ee:m=14;break e;case W:m=16,l=null;break e}m=29,t=Error(s(130,e===null?"null":typeof e,"")),l=null}return n=Pn(m,t,n,r),n.elementType=e,n.type=l,n.lanes=a,n}function vr(e,n,t,l){return e=Pn(7,e,l,n),e.lanes=t,e}function tc(e,n,t){return e=Pn(6,e,null,n),e.lanes=t,e}function Of(e){var n=Pn(18,null,null,0);return n.stateNode=e,n}function lc(e,n,t){return n=Pn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Cf=new WeakMap;function pt(e,n){if(typeof e=="object"&&e!==null){var t=Cf.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Jl(n)},Cf.set(e,n),n)}return{value:e,source:n,stack:Jl(n)}}var ra=[],aa=0,vs=null,si=0,_t=[],gt=0,Ml=null,Lt=1,Ut="";function Wt(e,n){ra[aa++]=si,ra[aa++]=vs,vs=e,si=n}function zf(e,n,t){_t[gt++]=Lt,_t[gt++]=Ut,_t[gt++]=Ml,Ml=e;var l=Lt;e=Ut;var r=32-vn(l)-1;l&=~(1<<r),t+=1;var a=32-vn(n)+r;if(30<a){var m=r-r%5;a=(l&(1<<m)-1).toString(32),l>>=m,r-=m,Lt=1<<32-vn(n)+r|t<<r|l,Ut=a+e}else Lt=1<<a|t<<r|l,Ut=e}function rc(e){e.return!==null&&(Wt(e,1),zf(e,1,0))}function ac(e){for(;e===vs;)vs=ra[--aa],ra[aa]=null,si=ra[--aa],ra[aa]=null;for(;e===Ml;)Ml=_t[--gt],_t[gt]=null,Ut=_t[--gt],_t[gt]=null,Lt=_t[--gt],_t[gt]=null}function Bf(e,n){_t[gt++]=Lt,_t[gt++]=Ut,_t[gt++]=Ml,Lt=n.id,Ut=n.overflow,Ml=e}var wn=null,Qe=null,Ae=!1,jl=null,bt=!1,ic=Error(s(519));function Al(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw oi(pt(n,e)),ic}function Lf(e){var n=e.stateNode,t=e.type,l=e.memoizedProps;switch(n[tn]=e,n[ln]=l,t){case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":case"embed":Te("load",n);break;case"video":case"audio":for(t=0;t<ji.length;t++)Te(ji[t],n);break;case"source":Te("error",n);break;case"img":case"image":case"link":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"input":Te("invalid",n),ts(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Te("invalid",n);break;case"textarea":Te("invalid",n),Sn(n,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||l.suppressHydrationWarning===!0||eh(n.textContent,t)?(l.popover!=null&&(Te("beforetoggle",n),Te("toggle",n)),l.onScroll!=null&&Te("scroll",n),l.onScrollEnd!=null&&Te("scrollend",n),l.onClick!=null&&(n.onclick=ft),n=!0):n=!1,n||Al(e,!0)}function Uf(e){for(wn=e.return;wn;)switch(wn.tag){case 5:case 31:case 13:bt=!1;return;case 27:case 3:bt=!0;return;default:wn=wn.return}}function ia(e){if(e!==wn)return!1;if(!Ae)return Uf(e),Ae=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||wu(e.type,e.memoizedProps)),t=!t),t&&Qe&&Al(e),Uf(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Qe=ch(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Qe=ch(e)}else n===27?(n=Qe,Xl(e.type)?(e=Mu,Mu=null,Qe=e):Qe=n):Qe=wn?vt(e.stateNode.nextSibling):null;return!0}function xr(){Qe=wn=null,Ae=!1}function sc(){var e=jl;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),jl=null),e}function oi(e){jl===null?jl=[e]:jl.push(e)}var oc=w(null),Sr=null,Jt=null;function Dl(e,n,t){Z(oc,n._currentValue),n._currentValue=t}function el(e){e._currentValue=oc.current,O(oc)}function cc(e,n,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===t)break;e=e.return}}function uc(e,n,t,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var a=r.dependencies;if(a!==null){var m=r.child;a=a.firstContext;e:for(;a!==null;){var _=a;a=r;for(var E=0;E<n.length;E++)if(_.context===n[E]){a.lanes|=t,_=a.alternate,_!==null&&(_.lanes|=t),cc(a.return,t,e),l||(m=null);break e}a=_.next}}else if(r.tag===18){if(m=r.return,m===null)throw Error(s(341));m.lanes|=t,a=m.alternate,a!==null&&(a.lanes|=t),cc(m,t,e),m=null}else m=r.child;if(m!==null)m.return=r;else for(m=r;m!==null;){if(m===e){m=null;break}if(r=m.sibling,r!==null){r.return=m.return,m=r;break}m=m.return}r=m}}function sa(e,n,t,l){e=null;for(var r=n,a=!1;r!==null;){if(!a){if((r.flags&524288)!==0)a=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var m=r.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var _=r.type;Qn(r.pendingProps.value,m.value)||(e!==null?e.push(_):e=[_])}}else if(r===X.current){if(m=r.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(zi):e=[zi])}r=r.return}e!==null&&uc(n,e,t,l),n.flags|=262144}function xs(e){for(e=e.firstContext;e!==null;){if(!Qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Er(e){Sr=e,Jt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function kn(e){return Hf(Sr,e)}function Ss(e,n){return Sr===null&&Er(e),Hf(e,n)}function Hf(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},Jt===null){if(e===null)throw Error(s(308));Jt=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Jt=Jt.next=n;return t}var l_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},r_=o.unstable_scheduleCallback,a_=o.unstable_NormalPriority,fn={$$typeof:ce,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fc(){return{controller:new l_,data:new Map,refCount:0}}function ci(e){e.refCount--,e.refCount===0&&r_(a_,function(){e.controller.abort()})}var ui=null,dc=0,oa=0,ca=null;function i_(e,n){if(ui===null){var t=ui=[];dc=0,oa=pu(),ca={status:"pending",value:void 0,then:function(l){t.push(l)}}}return dc++,n.then(Gf,Gf),n}function Gf(){if(--dc===0&&ui!==null){ca!==null&&(ca.status="fulfilled");var e=ui;ui=null,oa=0,ca=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function s_(e,n){var t=[],l={status:"pending",value:null,reason:null,then:function(r){t.push(r)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var r=0;r<t.length;r++)(0,t[r])(n)},function(r){for(l.status="rejected",l.reason=r,r=0;r<t.length;r++)(0,t[r])(void 0)}),l}var Vf=C.S;C.S=function(e,n){wm=Rn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&i_(e,n),Vf!==null&&Vf(e,n)};var wr=w(null);function mc(){var e=wr.current;return e!==null?e:Ke.pooledCache}function Es(e,n){n===null?Z(wr,wr.current):Z(wr,n.pool)}function Yf(){var e=mc();return e===null?null:{parent:fn._currentValue,pool:e}}var ua=Error(s(460)),hc=Error(s(474)),ws=Error(s(542)),ks={then:function(){}};function qf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function $f(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(ft,ft),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Kf(e),e;default:if(typeof n.status=="string")n.then(ft,ft);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var r=n;r.status="fulfilled",r.value=l}},function(l){if(n.status==="pending"){var r=n;r.status="rejected",r.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Kf(e),e}throw Nr=n,ua}}function kr(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Nr=t,ua):t}}var Nr=null;function Xf(){if(Nr===null)throw Error(s(459));var e=Nr;return Nr=null,e}function Kf(e){if(e===ua||e===ws)throw Error(s(483))}var fa=null,fi=0;function Ns(e){var n=fi;return fi+=1,fa===null&&(fa=[]),$f(fa,e,n)}function di(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ts(e,n){throw n.$$typeof===j?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function If(e){function n(T,k){if(e){var R=T.deletions;R===null?(T.deletions=[k],T.flags|=16):R.push(k)}}function t(T,k){if(!e)return null;for(;k!==null;)n(T,k),k=k.sibling;return null}function l(T){for(var k=new Map;T!==null;)T.key!==null?k.set(T.key,T):k.set(T.index,T),T=T.sibling;return k}function r(T,k){return T=Zt(T,k),T.index=0,T.sibling=null,T}function a(T,k,R){return T.index=R,e?(R=T.alternate,R!==null?(R=R.index,R<k?(T.flags|=67108866,k):R):(T.flags|=67108866,k)):(T.flags|=1048576,k)}function m(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function _(T,k,R,V){return k===null||k.tag!==6?(k=tc(R,T.mode,V),k.return=T,k):(k=r(k,R),k.return=T,k)}function E(T,k,R,V){var me=R.type;return me===le?U(T,k,R.props.children,V,R.key):k!==null&&(k.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===W&&kr(me)===k.type)?(k=r(k,R.props),di(k,R),k.return=T,k):(k=ys(R.type,R.key,R.props,null,T.mode,V),di(k,R),k.return=T,k)}function M(T,k,R,V){return k===null||k.tag!==4||k.stateNode.containerInfo!==R.containerInfo||k.stateNode.implementation!==R.implementation?(k=lc(R,T.mode,V),k.return=T,k):(k=r(k,R.children||[]),k.return=T,k)}function U(T,k,R,V,me){return k===null||k.tag!==7?(k=vr(R,T.mode,V,me),k.return=T,k):(k=r(k,R),k.return=T,k)}function Y(T,k,R){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=tc(""+k,T.mode,R),k.return=T,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case I:return R=ys(k.type,k.key,k.props,null,T.mode,R),di(R,k),R.return=T,R;case F:return k=lc(k,T.mode,R),k.return=T,k;case W:return k=kr(k),Y(T,k,R)}if($e(k)||ae(k))return k=vr(k,T.mode,R,null),k.return=T,k;if(typeof k.then=="function")return Y(T,Ns(k),R);if(k.$$typeof===ce)return Y(T,Ss(T,k),R);Ts(T,k)}return null}function D(T,k,R,V){var me=k!==null?k.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return me!==null?null:_(T,k,""+R,V);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case I:return R.key===me?E(T,k,R,V):null;case F:return R.key===me?M(T,k,R,V):null;case W:return R=kr(R),D(T,k,R,V)}if($e(R)||ae(R))return me!==null?null:U(T,k,R,V,null);if(typeof R.then=="function")return D(T,k,Ns(R),V);if(R.$$typeof===ce)return D(T,k,Ss(T,R),V);Ts(T,R)}return null}function L(T,k,R,V,me){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return T=T.get(R)||null,_(k,T,""+V,me);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case I:return T=T.get(V.key===null?R:V.key)||null,E(k,T,V,me);case F:return T=T.get(V.key===null?R:V.key)||null,M(k,T,V,me);case W:return V=kr(V),L(T,k,R,V,me)}if($e(V)||ae(V))return T=T.get(R)||null,U(k,T,V,me,null);if(typeof V.then=="function")return L(T,k,R,Ns(V),me);if(V.$$typeof===ce)return L(T,k,R,Ss(k,V),me);Ts(k,V)}return null}function ie(T,k,R,V){for(var me=null,Ce=null,ue=k,we=k=0,je=null;ue!==null&&we<R.length;we++){ue.index>we?(je=ue,ue=null):je=ue.sibling;var ze=D(T,ue,R[we],V);if(ze===null){ue===null&&(ue=je);break}e&&ue&&ze.alternate===null&&n(T,ue),k=a(ze,k,we),Ce===null?me=ze:Ce.sibling=ze,Ce=ze,ue=je}if(we===R.length)return t(T,ue),Ae&&Wt(T,we),me;if(ue===null){for(;we<R.length;we++)ue=Y(T,R[we],V),ue!==null&&(k=a(ue,k,we),Ce===null?me=ue:Ce.sibling=ue,Ce=ue);return Ae&&Wt(T,we),me}for(ue=l(ue);we<R.length;we++)je=L(ue,T,we,R[we],V),je!==null&&(e&&je.alternate!==null&&ue.delete(je.key===null?we:je.key),k=a(je,k,we),Ce===null?me=je:Ce.sibling=je,Ce=je);return e&&ue.forEach(function(Pl){return n(T,Pl)}),Ae&&Wt(T,we),me}function _e(T,k,R,V){if(R==null)throw Error(s(151));for(var me=null,Ce=null,ue=k,we=k=0,je=null,ze=R.next();ue!==null&&!ze.done;we++,ze=R.next()){ue.index>we?(je=ue,ue=null):je=ue.sibling;var Pl=D(T,ue,ze.value,V);if(Pl===null){ue===null&&(ue=je);break}e&&ue&&Pl.alternate===null&&n(T,ue),k=a(Pl,k,we),Ce===null?me=Pl:Ce.sibling=Pl,Ce=Pl,ue=je}if(ze.done)return t(T,ue),Ae&&Wt(T,we),me;if(ue===null){for(;!ze.done;we++,ze=R.next())ze=Y(T,ze.value,V),ze!==null&&(k=a(ze,k,we),Ce===null?me=ze:Ce.sibling=ze,Ce=ze);return Ae&&Wt(T,we),me}for(ue=l(ue);!ze.done;we++,ze=R.next())ze=L(ue,T,we,ze.value,V),ze!==null&&(e&&ze.alternate!==null&&ue.delete(ze.key===null?we:ze.key),k=a(ze,k,we),Ce===null?me=ze:Ce.sibling=ze,Ce=ze);return e&&ue.forEach(function(bg){return n(T,bg)}),Ae&&Wt(T,we),me}function qe(T,k,R,V){if(typeof R=="object"&&R!==null&&R.type===le&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case I:e:{for(var me=R.key;k!==null;){if(k.key===me){if(me=R.type,me===le){if(k.tag===7){t(T,k.sibling),V=r(k,R.props.children),V.return=T,T=V;break e}}else if(k.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===W&&kr(me)===k.type){t(T,k.sibling),V=r(k,R.props),di(V,R),V.return=T,T=V;break e}t(T,k);break}else n(T,k);k=k.sibling}R.type===le?(V=vr(R.props.children,T.mode,V,R.key),V.return=T,T=V):(V=ys(R.type,R.key,R.props,null,T.mode,V),di(V,R),V.return=T,T=V)}return m(T);case F:e:{for(me=R.key;k!==null;){if(k.key===me)if(k.tag===4&&k.stateNode.containerInfo===R.containerInfo&&k.stateNode.implementation===R.implementation){t(T,k.sibling),V=r(k,R.children||[]),V.return=T,T=V;break e}else{t(T,k);break}else n(T,k);k=k.sibling}V=lc(R,T.mode,V),V.return=T,T=V}return m(T);case W:return R=kr(R),qe(T,k,R,V)}if($e(R))return ie(T,k,R,V);if(ae(R)){if(me=ae(R),typeof me!="function")throw Error(s(150));return R=me.call(R),_e(T,k,R,V)}if(typeof R.then=="function")return qe(T,k,Ns(R),V);if(R.$$typeof===ce)return qe(T,k,Ss(T,R),V);Ts(T,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,k!==null&&k.tag===6?(t(T,k.sibling),V=r(k,R),V.return=T,T=V):(t(T,k),V=tc(R,T.mode,V),V.return=T,T=V),m(T)):t(T,k)}return function(T,k,R,V){try{fi=0;var me=qe(T,k,R,V);return fa=null,me}catch(ue){if(ue===ua||ue===ws)throw ue;var Ce=Pn(29,ue,null,T.mode);return Ce.lanes=V,Ce.return=T,Ce}finally{}}}var Tr=If(!0),Ff=If(!1),Ol=!1;function pc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _c(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Cl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function zl(e,n,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Be&2)!==0){var r=l.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n,n=bs(e),Af(e,null,t),n}return gs(e,l,n,t),bs(e)}function mi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,Vr(e,t)}}function gc(e,n){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var r=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var m={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};a===null?r=a=m:a=a.next=m,t=t.next}while(t!==null);a===null?r=a=n:a=a.next=n}else r=a=n;t={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:l.shared,callbacks:l.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var bc=!1;function hi(){if(bc){var e=ca;if(e!==null)throw e}}function pi(e,n,t,l){bc=!1;var r=e.updateQueue;Ol=!1;var a=r.firstBaseUpdate,m=r.lastBaseUpdate,_=r.shared.pending;if(_!==null){r.shared.pending=null;var E=_,M=E.next;E.next=null,m===null?a=M:m.next=M,m=E;var U=e.alternate;U!==null&&(U=U.updateQueue,_=U.lastBaseUpdate,_!==m&&(_===null?U.firstBaseUpdate=M:_.next=M,U.lastBaseUpdate=E))}if(a!==null){var Y=r.baseState;m=0,U=M=E=null,_=a;do{var D=_.lane&-536870913,L=D!==_.lane;if(L?(Me&D)===D:(l&D)===D){D!==0&&D===oa&&(bc=!0),U!==null&&(U=U.next={lane:0,tag:_.tag,payload:_.payload,callback:null,next:null});e:{var ie=e,_e=_;D=n;var qe=t;switch(_e.tag){case 1:if(ie=_e.payload,typeof ie=="function"){Y=ie.call(qe,Y,D);break e}Y=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=_e.payload,D=typeof ie=="function"?ie.call(qe,Y,D):ie,D==null)break e;Y=N({},Y,D);break e;case 2:Ol=!0}}D=_.callback,D!==null&&(e.flags|=64,L&&(e.flags|=8192),L=r.callbacks,L===null?r.callbacks=[D]:L.push(D))}else L={lane:D,tag:_.tag,payload:_.payload,callback:_.callback,next:null},U===null?(M=U=L,E=Y):U=U.next=L,m|=D;if(_=_.next,_===null){if(_=r.shared.pending,_===null)break;L=_,_=L.next,L.next=null,r.lastBaseUpdate=L,r.shared.pending=null}}while(!0);U===null&&(E=Y),r.baseState=E,r.firstBaseUpdate=M,r.lastBaseUpdate=U,a===null&&(r.shared.lanes=0),Gl|=m,e.lanes=m,e.memoizedState=Y}}function Qf(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Pf(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Qf(t[e],n)}var da=w(null),Rs=w(0);function Zf(e,n){e=cl,Z(Rs,e),Z(da,n),cl=e|n.baseLanes}function yc(){Z(Rs,cl),Z(da,da.current)}function vc(){cl=Rs.current,O(da),O(Rs)}var Zn=w(null),yt=null;function Bl(e){var n=e.alternate;Z(sn,sn.current&1),Z(Zn,e),yt===null&&(n===null||da.current!==null||n.memoizedState!==null)&&(yt=e)}function xc(e){Z(sn,sn.current),Z(Zn,e),yt===null&&(yt=e)}function Wf(e){e.tag===22?(Z(sn,sn.current),Z(Zn,e),yt===null&&(yt=e)):Ll()}function Ll(){Z(sn,sn.current),Z(Zn,Zn.current)}function Wn(e){O(Zn),yt===e&&(yt=null),O(sn)}var sn=w(0);function Ms(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Tu(t)||Ru(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var nl=0,Ee=null,Ve=null,dn=null,js=!1,ma=!1,Rr=!1,As=0,_i=0,ha=null,o_=0;function en(){throw Error(s(321))}function Sc(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Qn(e[t],n[t]))return!1;return!0}function Ec(e,n,t,l,r,a){return nl=a,Ee=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,C.H=e===null||e.memoizedState===null?zd:Uc,Rr=!1,a=t(l,r),Rr=!1,ma&&(a=ed(n,t,l,r)),Jf(e),a}function Jf(e){C.H=yi;var n=Ve!==null&&Ve.next!==null;if(nl=0,dn=Ve=Ee=null,js=!1,_i=0,ha=null,n)throw Error(s(300));e===null||mn||(e=e.dependencies,e!==null&&xs(e)&&(mn=!0))}function ed(e,n,t,l){Ee=e;var r=0;do{if(ma&&(ha=null),_i=0,ma=!1,25<=r)throw Error(s(301));if(r+=1,dn=Ve=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}C.H=Bd,a=n(t,l)}while(ma);return a}function c_(){var e=C.H,n=e.useState()[0];return n=typeof n.then=="function"?gi(n):n,e=e.useState()[0],(Ve!==null?Ve.memoizedState:null)!==e&&(Ee.flags|=1024),n}function wc(){var e=As!==0;return As=0,e}function kc(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function Nc(e){if(js){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}js=!1}nl=0,dn=Ve=Ee=null,ma=!1,_i=As=0,ha=null}function Cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Ee.memoizedState=dn=e:dn=dn.next=e,dn}function on(){if(Ve===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var n=dn===null?Ee.memoizedState:dn.next;if(n!==null)dn=n,Ve=e;else{if(e===null)throw Ee.alternate===null?Error(s(467)):Error(s(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},dn===null?Ee.memoizedState=dn=e:dn=dn.next=e}return dn}function Ds(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gi(e){var n=_i;return _i+=1,ha===null&&(ha=[]),e=$f(ha,e,n),n=Ee,(dn===null?n.memoizedState:dn.next)===null&&(n=n.alternate,C.H=n===null||n.memoizedState===null?zd:Uc),e}function Os(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return gi(e);if(e.$$typeof===ce)return kn(e)}throw Error(s(438,String(e)))}function Tc(e){var n=null,t=Ee.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var l=Ee.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(r){return r.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=Ds(),Ee.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),l=0;l<e;l++)t[l]=be;return n.index++,t}function tl(e,n){return typeof n=="function"?n(e):n}function Cs(e){var n=on();return Rc(n,Ve,e)}function Rc(e,n,t){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=t;var r=e.baseQueue,a=l.pending;if(a!==null){if(r!==null){var m=r.next;r.next=a.next,a.next=m}n.baseQueue=r=a,l.pending=null}if(a=e.baseState,r===null)e.memoizedState=a;else{n=r.next;var _=m=null,E=null,M=n,U=!1;do{var Y=M.lane&-536870913;if(Y!==M.lane?(Me&Y)===Y:(nl&Y)===Y){var D=M.revertLane;if(D===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),Y===oa&&(U=!0);else if((nl&D)===D){M=M.next,D===oa&&(U=!0);continue}else Y={lane:0,revertLane:M.revertLane,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},E===null?(_=E=Y,m=a):E=E.next=Y,Ee.lanes|=D,Gl|=D;Y=M.action,Rr&&t(a,Y),a=M.hasEagerState?M.eagerState:t(a,Y)}else D={lane:Y,revertLane:M.revertLane,gesture:M.gesture,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},E===null?(_=E=D,m=a):E=E.next=D,Ee.lanes|=Y,Gl|=Y;M=M.next}while(M!==null&&M!==n);if(E===null?m=a:E.next=_,!Qn(a,e.memoizedState)&&(mn=!0,U&&(t=ca,t!==null)))throw t;e.memoizedState=a,e.baseState=m,e.baseQueue=E,l.lastRenderedState=a}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Mc(e){var n=on(),t=n.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var l=t.dispatch,r=t.pending,a=n.memoizedState;if(r!==null){t.pending=null;var m=r=r.next;do a=e(a,m.action),m=m.next;while(m!==r);Qn(a,n.memoizedState)||(mn=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),t.lastRenderedState=a}return[a,l]}function nd(e,n,t){var l=Ee,r=on(),a=Ae;if(a){if(t===void 0)throw Error(s(407));t=t()}else t=n();var m=!Qn((Ve||r).memoizedState,t);if(m&&(r.memoizedState=t,mn=!0),r=r.queue,Dc(rd.bind(null,l,r,e),[e]),r.getSnapshot!==n||m||dn!==null&&dn.memoizedState.tag&1){if(l.flags|=2048,pa(9,{destroy:void 0},ld.bind(null,l,r,t,n),null),Ke===null)throw Error(s(349));a||(nl&127)!==0||td(l,n,t)}return t}function td(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Ee.updateQueue,n===null?(n=Ds(),Ee.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ld(e,n,t,l){n.value=t,n.getSnapshot=l,ad(n)&&id(e)}function rd(e,n,t){return t(function(){ad(n)&&id(e)})}function ad(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Qn(e,t)}catch{return!0}}function id(e){var n=yr(e,2);n!==null&&qn(n,e,2)}function jc(e){var n=Cn();if(typeof e=="function"){var t=e;if(e=t(),Rr){$n(!0);try{t()}finally{$n(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tl,lastRenderedState:e},n}function sd(e,n,t,l){return e.baseState=t,Rc(e,Ve,typeof l=="function"?l:tl)}function u_(e,n,t,l,r){if(Ls(e))throw Error(s(485));if(e=n.action,e!==null){var a={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){a.listeners.push(m)}};C.T!==null?t(!0):a.isTransition=!1,l(a),t=n.pending,t===null?(a.next=n.pending=a,od(n,a)):(a.next=t.next,n.pending=t.next=a)}}function od(e,n){var t=n.action,l=n.payload,r=e.state;if(n.isTransition){var a=C.T,m={};C.T=m;try{var _=t(r,l),E=C.S;E!==null&&E(m,_),cd(e,n,_)}catch(M){Ac(e,n,M)}finally{a!==null&&m.types!==null&&(a.types=m.types),C.T=a}}else try{a=t(r,l),cd(e,n,a)}catch(M){Ac(e,n,M)}}function cd(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){ud(e,n,l)},function(l){return Ac(e,n,l)}):ud(e,n,t)}function ud(e,n,t){n.status="fulfilled",n.value=t,fd(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,od(e,t)))}function Ac(e,n,t){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=t,fd(n),n=n.next;while(n!==l)}e.action=null}function fd(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function dd(e,n){return n}function md(e,n){if(Ae){var t=Ke.formState;if(t!==null){e:{var l=Ee;if(Ae){if(Qe){n:{for(var r=Qe,a=bt;r.nodeType!==8;){if(!a){r=null;break n}if(r=vt(r.nextSibling),r===null){r=null;break n}}a=r.data,r=a==="F!"||a==="F"?r:null}if(r){Qe=vt(r.nextSibling),l=r.data==="F!";break e}}Al(l)}l=!1}l&&(n=t[0])}}return t=Cn(),t.memoizedState=t.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dd,lastRenderedState:n},t.queue=l,t=Dd.bind(null,Ee,l),l.dispatch=t,l=jc(!1),a=Lc.bind(null,Ee,!1,l.queue),l=Cn(),r={state:n,dispatch:null,action:e,pending:null},l.queue=r,t=u_.bind(null,Ee,r,a,t),r.dispatch=t,l.memoizedState=e,[n,t,!1]}function hd(e){var n=on();return pd(n,Ve,e)}function pd(e,n,t){if(n=Rc(e,n,dd)[0],e=Cs(tl)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=gi(n)}catch(m){throw m===ua?ws:m}else l=n;n=on();var r=n.queue,a=r.dispatch;return t!==n.memoizedState&&(Ee.flags|=2048,pa(9,{destroy:void 0},f_.bind(null,r,t),null)),[l,a,e]}function f_(e,n){e.action=n}function _d(e){var n=on(),t=Ve;if(t!==null)return pd(n,t,e);on(),n=n.memoizedState,t=on();var l=t.queue.dispatch;return t.memoizedState=e,[n,l,!1]}function pa(e,n,t,l){return e={tag:e,create:t,deps:l,inst:n,next:null},n=Ee.updateQueue,n===null&&(n=Ds(),Ee.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,n.lastEffect=e),e}function gd(){return on().memoizedState}function zs(e,n,t,l){var r=Cn();Ee.flags|=e,r.memoizedState=pa(1|n,{destroy:void 0},t,l===void 0?null:l)}function Bs(e,n,t,l){var r=on();l=l===void 0?null:l;var a=r.memoizedState.inst;Ve!==null&&l!==null&&Sc(l,Ve.memoizedState.deps)?r.memoizedState=pa(n,a,t,l):(Ee.flags|=e,r.memoizedState=pa(1|n,a,t,l))}function bd(e,n){zs(8390656,8,e,n)}function Dc(e,n){Bs(2048,8,e,n)}function d_(e){Ee.flags|=4;var n=Ee.updateQueue;if(n===null)n=Ds(),Ee.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function yd(e){var n=on().memoizedState;return d_({ref:n,nextImpl:e}),function(){if((Be&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function vd(e,n){return Bs(4,2,e,n)}function xd(e,n){return Bs(4,4,e,n)}function Sd(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ed(e,n,t){t=t!=null?t.concat([e]):null,Bs(4,4,Sd.bind(null,n,e),t)}function Oc(){}function wd(e,n){var t=on();n=n===void 0?null:n;var l=t.memoizedState;return n!==null&&Sc(n,l[1])?l[0]:(t.memoizedState=[e,n],e)}function kd(e,n){var t=on();n=n===void 0?null:n;var l=t.memoizedState;if(n!==null&&Sc(n,l[1]))return l[0];if(l=e(),Rr){$n(!0);try{e()}finally{$n(!1)}}return t.memoizedState=[l,n],l}function Cc(e,n,t){return t===void 0||(nl&1073741824)!==0&&(Me&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=Nm(),Ee.lanes|=e,Gl|=e,t)}function Nd(e,n,t,l){return Qn(t,n)?t:da.current!==null?(e=Cc(e,t,l),Qn(e,n)||(mn=!0),e):(nl&42)===0||(nl&1073741824)!==0&&(Me&261930)===0?(mn=!0,e.memoizedState=t):(e=Nm(),Ee.lanes|=e,Gl|=e,n)}function Td(e,n,t,l,r){var a=P.p;P.p=a!==0&&8>a?a:8;var m=C.T,_={};C.T=_,Lc(e,!1,n,t);try{var E=r(),M=C.S;if(M!==null&&M(_,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var U=s_(E,l);bi(e,n,U,nt(e))}else bi(e,n,l,nt(e))}catch(Y){bi(e,n,{then:function(){},status:"rejected",reason:Y},nt())}finally{P.p=a,m!==null&&_.types!==null&&(m.types=_.types),C.T=m}}function m_(){}function zc(e,n,t,l){if(e.tag!==5)throw Error(s(476));var r=Rd(e).queue;Td(e,r,n,fe,t===null?m_:function(){return Md(e),t(l)})}function Rd(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tl,lastRenderedState:fe},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tl,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Md(e){var n=Rd(e);n.next===null&&(n=e.alternate.memoizedState),bi(e,n.next.queue,{},nt())}function Bc(){return kn(zi)}function jd(){return on().memoizedState}function Ad(){return on().memoizedState}function h_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=nt();e=Cl(t);var l=zl(n,e,t);l!==null&&(qn(l,n,t),mi(l,n,t)),n={cache:fc()},e.payload=n;return}n=n.return}}function p_(e,n,t){var l=nt();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Ls(e)?Od(n,t):(t=ec(e,n,t,l),t!==null&&(qn(t,e,l),Cd(t,n,l)))}function Dd(e,n,t){var l=nt();bi(e,n,t,l)}function bi(e,n,t,l){var r={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ls(e))Od(n,r);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var m=n.lastRenderedState,_=a(m,t);if(r.hasEagerState=!0,r.eagerState=_,Qn(_,m))return gs(e,n,r,0),Ke===null&&_s(),!1}catch{}finally{}if(t=ec(e,n,r,l),t!==null)return qn(t,e,l),Cd(t,n,l),!0}return!1}function Lc(e,n,t,l){if(l={lane:2,revertLane:pu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ls(e)){if(n)throw Error(s(479))}else n=ec(e,t,l,2),n!==null&&qn(n,e,2)}function Ls(e){var n=e.alternate;return e===Ee||n!==null&&n===Ee}function Od(e,n){ma=js=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Cd(e,n,t){if((t&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,Vr(e,t)}}var yi={readContext:kn,use:Os,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};yi.useEffectEvent=en;var zd={readContext:kn,use:Os,useCallback:function(e,n){return Cn().memoizedState=[e,n===void 0?null:n],e},useContext:kn,useEffect:bd,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,zs(4194308,4,Sd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return zs(4194308,4,e,n)},useInsertionEffect:function(e,n){zs(4,2,e,n)},useMemo:function(e,n){var t=Cn();n=n===void 0?null:n;var l=e();if(Rr){$n(!0);try{e()}finally{$n(!1)}}return t.memoizedState=[l,n],l},useReducer:function(e,n,t){var l=Cn();if(t!==void 0){var r=t(n);if(Rr){$n(!0);try{t(n)}finally{$n(!1)}}}else r=n;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=p_.bind(null,Ee,e),[l.memoizedState,e]},useRef:function(e){var n=Cn();return e={current:e},n.memoizedState=e},useState:function(e){e=jc(e);var n=e.queue,t=Dd.bind(null,Ee,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Oc,useDeferredValue:function(e,n){var t=Cn();return Cc(t,e,n)},useTransition:function(){var e=jc(!1);return e=Td.bind(null,Ee,e.queue,!0,!1),Cn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var l=Ee,r=Cn();if(Ae){if(t===void 0)throw Error(s(407));t=t()}else{if(t=n(),Ke===null)throw Error(s(349));(Me&127)!==0||td(l,n,t)}r.memoizedState=t;var a={value:t,getSnapshot:n};return r.queue=a,bd(rd.bind(null,l,a,e),[e]),l.flags|=2048,pa(9,{destroy:void 0},ld.bind(null,l,a,t,n),null),t},useId:function(){var e=Cn(),n=Ke.identifierPrefix;if(Ae){var t=Ut,l=Lt;t=(l&~(1<<32-vn(l)-1)).toString(32)+t,n="_"+n+"R_"+t,t=As++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=o_++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Bc,useFormState:md,useActionState:md,useOptimistic:function(e){var n=Cn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=Lc.bind(null,Ee,!0,t),t.dispatch=n,[e,n]},useMemoCache:Tc,useCacheRefresh:function(){return Cn().memoizedState=h_.bind(null,Ee)},useEffectEvent:function(e){var n=Cn(),t={impl:e};return n.memoizedState=t,function(){if((Be&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}},Uc={readContext:kn,use:Os,useCallback:wd,useContext:kn,useEffect:Dc,useImperativeHandle:Ed,useInsertionEffect:vd,useLayoutEffect:xd,useMemo:kd,useReducer:Cs,useRef:gd,useState:function(){return Cs(tl)},useDebugValue:Oc,useDeferredValue:function(e,n){var t=on();return Nd(t,Ve.memoizedState,e,n)},useTransition:function(){var e=Cs(tl)[0],n=on().memoizedState;return[typeof e=="boolean"?e:gi(e),n]},useSyncExternalStore:nd,useId:jd,useHostTransitionStatus:Bc,useFormState:hd,useActionState:hd,useOptimistic:function(e,n){var t=on();return sd(t,Ve,e,n)},useMemoCache:Tc,useCacheRefresh:Ad};Uc.useEffectEvent=yd;var Bd={readContext:kn,use:Os,useCallback:wd,useContext:kn,useEffect:Dc,useImperativeHandle:Ed,useInsertionEffect:vd,useLayoutEffect:xd,useMemo:kd,useReducer:Mc,useRef:gd,useState:function(){return Mc(tl)},useDebugValue:Oc,useDeferredValue:function(e,n){var t=on();return Ve===null?Cc(t,e,n):Nd(t,Ve.memoizedState,e,n)},useTransition:function(){var e=Mc(tl)[0],n=on().memoizedState;return[typeof e=="boolean"?e:gi(e),n]},useSyncExternalStore:nd,useId:jd,useHostTransitionStatus:Bc,useFormState:_d,useActionState:_d,useOptimistic:function(e,n){var t=on();return Ve!==null?sd(t,Ve,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Tc,useCacheRefresh:Ad};Bd.useEffectEvent=yd;function Hc(e,n,t,l){n=e.memoizedState,t=t(l,n),t=t==null?n:N({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Gc={enqueueSetState:function(e,n,t){e=e._reactInternals;var l=nt(),r=Cl(l);r.payload=n,t!=null&&(r.callback=t),n=zl(e,r,l),n!==null&&(qn(n,e,l),mi(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var l=nt(),r=Cl(l);r.tag=1,r.payload=n,t!=null&&(r.callback=t),n=zl(e,r,l),n!==null&&(qn(n,e,l),mi(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=nt(),l=Cl(t);l.tag=2,n!=null&&(l.callback=n),n=zl(e,l,t),n!==null&&(qn(n,e,t),mi(n,e,t))}};function Ld(e,n,t,l,r,a,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,a,m):n.prototype&&n.prototype.isPureReactComponent?!ai(t,l)||!ai(r,a):!0}function Ud(e,n,t,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,l),n.state!==e&&Gc.enqueueReplaceState(n,n.state,null)}function Mr(e,n){var t=n;if("ref"in n){t={};for(var l in n)l!=="ref"&&(t[l]=n[l])}if(e=e.defaultProps){t===n&&(t=N({},t));for(var r in e)t[r]===void 0&&(t[r]=e[r])}return t}function Hd(e){ps(e)}function Gd(e){console.error(e)}function Vd(e){ps(e)}function Us(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function Yd(e,n,t){try{var l=e.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Vc(e,n,t){return t=Cl(t),t.tag=3,t.payload={element:null},t.callback=function(){Us(e,n)},t}function qd(e){return e=Cl(e),e.tag=3,e}function $d(e,n,t,l){var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var a=l.value;e.payload=function(){return r(a)},e.callback=function(){Yd(n,t,l)}}var m=t.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Yd(n,t,l),typeof r!="function"&&(Vl===null?Vl=new Set([this]):Vl.add(this));var _=l.stack;this.componentDidCatch(l.value,{componentStack:_!==null?_:""})})}function __(e,n,t,l,r){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=t.alternate,n!==null&&sa(n,t,r,!0),t=Zn.current,t!==null){switch(t.tag){case 31:case 13:return yt===null?Ps():t.alternate===null&&nn===0&&(nn=3),t.flags&=-257,t.flags|=65536,t.lanes=r,l===ks?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([l]):n.add(l),du(e,l,r)),!1;case 22:return t.flags|=65536,l===ks?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([l]):t.add(l)),du(e,l,r)),!1}throw Error(s(435,t.tag))}return du(e,l,r),Ps(),!1}if(Ae)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=r,l!==ic&&(e=Error(s(422),{cause:l}),oi(pt(e,t)))):(l!==ic&&(n=Error(s(423),{cause:l}),oi(pt(n,t))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=pt(l,t),r=Vc(e.stateNode,l,r),gc(e,r),nn!==4&&(nn=2)),!1;var a=Error(s(520),{cause:l});if(a=pt(a,t),Ti===null?Ti=[a]:Ti.push(a),nn!==4&&(nn=2),n===null)return!0;l=pt(l,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=r&-r,t.lanes|=e,e=Vc(t.stateNode,l,e),gc(t,e),!1;case 1:if(n=t.type,a=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Vl===null||!Vl.has(a))))return t.flags|=65536,r&=-r,t.lanes|=r,r=qd(r),$d(r,e,t,l),gc(t,r),!1}t=t.return}while(t!==null);return!1}var Yc=Error(s(461)),mn=!1;function Nn(e,n,t,l){n.child=e===null?Ff(n,null,t,l):Tr(n,e.child,t,l)}function Xd(e,n,t,l,r){t=t.render;var a=n.ref;if("ref"in l){var m={};for(var _ in l)_!=="ref"&&(m[_]=l[_])}else m=l;return Er(n),l=Ec(e,n,t,m,a,r),_=wc(),e!==null&&!mn?(kc(e,n,r),ll(e,n,r)):(Ae&&_&&rc(n),n.flags|=1,Nn(e,n,l,r),n.child)}function Kd(e,n,t,l,r){if(e===null){var a=t.type;return typeof a=="function"&&!nc(a)&&a.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=a,Id(e,n,a,l,r)):(e=ys(t.type,null,l,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,!Pc(e,r)){var m=a.memoizedProps;if(t=t.compare,t=t!==null?t:ai,t(m,l)&&e.ref===n.ref)return ll(e,n,r)}return n.flags|=1,e=Zt(a,l),e.ref=n.ref,e.return=n,n.child=e}function Id(e,n,t,l,r){if(e!==null){var a=e.memoizedProps;if(ai(a,l)&&e.ref===n.ref)if(mn=!1,n.pendingProps=l=a,Pc(e,r))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,ll(e,n,r)}return qc(e,n,t,l,r)}function Fd(e,n,t,l){var r=l.children,a=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(a=a!==null?a.baseLanes|t:t,e!==null){for(l=n.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~a}else l=0,n.child=null;return Qd(e,n,a,t,l)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Es(n,a!==null?a.cachePool:null),a!==null?Zf(n,a):yc(),Wf(n);else return l=n.lanes=536870912,Qd(e,n,a!==null?a.baseLanes|t:t,t,l)}else a!==null?(Es(n,a.cachePool),Zf(n,a),Ll(),n.memoizedState=null):(e!==null&&Es(n,null),yc(),Ll());return Nn(e,n,r,t),n.child}function vi(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Qd(e,n,t,l,r){var a=mc();return a=a===null?null:{parent:fn._currentValue,pool:a},n.memoizedState={baseLanes:t,cachePool:a},e!==null&&Es(n,null),yc(),Wf(n),e!==null&&sa(e,n,l,!0),n.childLanes=r,null}function Hs(e,n){return n=Vs({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Pd(e,n,t){return Tr(n,e.child,null,t),e=Hs(n,n.pendingProps),e.flags|=2,Wn(n),n.memoizedState=null,e}function g_(e,n,t){var l=n.pendingProps,r=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ae){if(l.mode==="hidden")return e=Hs(n,l),n.lanes=536870912,vi(null,e);if(xc(n),(e=Qe)?(e=oh(e,bt),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ml!==null?{id:Lt,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},t=Of(e),t.return=n,n.child=t,wn=n,Qe=null)):e=null,e===null)throw Al(n);return n.lanes=536870912,null}return Hs(n,l)}var a=e.memoizedState;if(a!==null){var m=a.dehydrated;if(xc(n),r)if(n.flags&256)n.flags&=-257,n=Pd(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||sa(e,n,t,!1),r=(t&e.childLanes)!==0,mn||r){if(l=Ke,l!==null&&(m=Wi(l,t),m!==0&&m!==a.retryLane))throw a.retryLane=m,yr(e,m),qn(l,e,m),Yc;Ps(),n=Pd(e,n,t)}else e=a.treeContext,Qe=vt(m.nextSibling),wn=n,Ae=!0,jl=null,bt=!1,e!==null&&Bf(n,e),n=Hs(n,l),n.flags|=4096;return n}return e=Zt(e.child,{mode:l.mode,children:l.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Gs(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(s(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function qc(e,n,t,l,r){return Er(n),t=Ec(e,n,t,l,void 0,r),l=wc(),e!==null&&!mn?(kc(e,n,r),ll(e,n,r)):(Ae&&l&&rc(n),n.flags|=1,Nn(e,n,t,r),n.child)}function Zd(e,n,t,l,r,a){return Er(n),n.updateQueue=null,t=ed(n,l,t,r),Jf(e),l=wc(),e!==null&&!mn?(kc(e,n,a),ll(e,n,a)):(Ae&&l&&rc(n),n.flags|=1,Nn(e,n,t,a),n.child)}function Wd(e,n,t,l,r){if(Er(n),n.stateNode===null){var a=la,m=t.contextType;typeof m=="object"&&m!==null&&(a=kn(m)),a=new t(l,a),n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Gc,n.stateNode=a,a._reactInternals=n,a=n.stateNode,a.props=l,a.state=n.memoizedState,a.refs={},pc(n),m=t.contextType,a.context=typeof m=="object"&&m!==null?kn(m):la,a.state=n.memoizedState,m=t.getDerivedStateFromProps,typeof m=="function"&&(Hc(n,t,m,l),a.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(m=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),m!==a.state&&Gc.enqueueReplaceState(a,a.state,null),pi(n,l,a,r),hi(),a.state=n.memoizedState),typeof a.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){a=n.stateNode;var _=n.memoizedProps,E=Mr(t,_);a.props=E;var M=a.context,U=t.contextType;m=la,typeof U=="object"&&U!==null&&(m=kn(U));var Y=t.getDerivedStateFromProps;U=typeof Y=="function"||typeof a.getSnapshotBeforeUpdate=="function",_=n.pendingProps!==_,U||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(_||M!==m)&&Ud(n,a,l,m),Ol=!1;var D=n.memoizedState;a.state=D,pi(n,l,a,r),hi(),M=n.memoizedState,_||D!==M||Ol?(typeof Y=="function"&&(Hc(n,t,Y,l),M=n.memoizedState),(E=Ol||Ld(n,t,E,l,D,M,m))?(U||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=M),a.props=l,a.state=M,a.context=m,l=E):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{a=n.stateNode,_c(e,n),m=n.memoizedProps,U=Mr(t,m),a.props=U,Y=n.pendingProps,D=a.context,M=t.contextType,E=la,typeof M=="object"&&M!==null&&(E=kn(M)),_=t.getDerivedStateFromProps,(M=typeof _=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(m!==Y||D!==E)&&Ud(n,a,l,E),Ol=!1,D=n.memoizedState,a.state=D,pi(n,l,a,r),hi();var L=n.memoizedState;m!==Y||D!==L||Ol||e!==null&&e.dependencies!==null&&xs(e.dependencies)?(typeof _=="function"&&(Hc(n,t,_,l),L=n.memoizedState),(U=Ol||Ld(n,t,U,l,D,L,E)||e!==null&&e.dependencies!==null&&xs(e.dependencies))?(M||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(l,L,E),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(l,L,E)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=L),a.props=l,a.state=L,a.context=E,l=U):(typeof a.componentDidUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(n.flags|=1024),l=!1)}return a=l,Gs(e,n),l=(n.flags&128)!==0,a||l?(a=n.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:a.render(),n.flags|=1,e!==null&&l?(n.child=Tr(n,e.child,null,r),n.child=Tr(n,null,t,r)):Nn(e,n,t,r),n.memoizedState=a.state,e=n.child):e=ll(e,n,r),e}function Jd(e,n,t,l){return xr(),n.flags|=256,Nn(e,n,t,l),n.child}var $c={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xc(e){return{baseLanes:e,cachePool:Yf()}}function Kc(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=et),e}function em(e,n,t){var l=n.pendingProps,r=!1,a=(n.flags&128)!==0,m;if((m=a)||(m=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),m&&(r=!0,n.flags&=-129),m=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(r?Bl(n):Ll(),(e=Qe)?(e=oh(e,bt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ml!==null?{id:Lt,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},t=Of(e),t.return=n,n.child=t,wn=n,Qe=null)):e=null,e===null)throw Al(n);return Ru(e)?n.lanes=32:n.lanes=536870912,null}var _=l.children;return l=l.fallback,r?(Ll(),r=n.mode,_=Vs({mode:"hidden",children:_},r),l=vr(l,r,t,null),_.return=n,l.return=n,_.sibling=l,n.child=_,l=n.child,l.memoizedState=Xc(t),l.childLanes=Kc(e,m,t),n.memoizedState=$c,vi(null,l)):(Bl(n),Ic(n,_))}var E=e.memoizedState;if(E!==null&&(_=E.dehydrated,_!==null)){if(a)n.flags&256?(Bl(n),n.flags&=-257,n=Fc(e,n,t)):n.memoizedState!==null?(Ll(),n.child=e.child,n.flags|=128,n=null):(Ll(),_=l.fallback,r=n.mode,l=Vs({mode:"visible",children:l.children},r),_=vr(_,r,t,null),_.flags|=2,l.return=n,_.return=n,l.sibling=_,n.child=l,Tr(n,e.child,null,t),l=n.child,l.memoizedState=Xc(t),l.childLanes=Kc(e,m,t),n.memoizedState=$c,n=vi(null,l));else if(Bl(n),Ru(_)){if(m=_.nextSibling&&_.nextSibling.dataset,m)var M=m.dgst;m=M,l=Error(s(419)),l.stack="",l.digest=m,oi({value:l,source:null,stack:null}),n=Fc(e,n,t)}else if(mn||sa(e,n,t,!1),m=(t&e.childLanes)!==0,mn||m){if(m=Ke,m!==null&&(l=Wi(m,t),l!==0&&l!==E.retryLane))throw E.retryLane=l,yr(e,l),qn(m,e,l),Yc;Tu(_)||Ps(),n=Fc(e,n,t)}else Tu(_)?(n.flags|=192,n.child=e.child,n=null):(e=E.treeContext,Qe=vt(_.nextSibling),wn=n,Ae=!0,jl=null,bt=!1,e!==null&&Bf(n,e),n=Ic(n,l.children),n.flags|=4096);return n}return r?(Ll(),_=l.fallback,r=n.mode,E=e.child,M=E.sibling,l=Zt(E,{mode:"hidden",children:l.children}),l.subtreeFlags=E.subtreeFlags&65011712,M!==null?_=Zt(M,_):(_=vr(_,r,t,null),_.flags|=2),_.return=n,l.return=n,l.sibling=_,n.child=l,vi(null,l),l=n.child,_=e.child.memoizedState,_===null?_=Xc(t):(r=_.cachePool,r!==null?(E=fn._currentValue,r=r.parent!==E?{parent:E,pool:E}:r):r=Yf(),_={baseLanes:_.baseLanes|t,cachePool:r}),l.memoizedState=_,l.childLanes=Kc(e,m,t),n.memoizedState=$c,vi(e.child,l)):(Bl(n),t=e.child,e=t.sibling,t=Zt(t,{mode:"visible",children:l.children}),t.return=n,t.sibling=null,e!==null&&(m=n.deletions,m===null?(n.deletions=[e],n.flags|=16):m.push(e)),n.child=t,n.memoizedState=null,t)}function Ic(e,n){return n=Vs({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Vs(e,n){return e=Pn(22,e,null,n),e.lanes=0,e}function Fc(e,n,t){return Tr(n,e.child,null,t),e=Ic(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function nm(e,n,t){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),cc(e.return,n,t)}function Qc(e,n,t,l,r,a){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:r,treeForkCount:a}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=t,m.tailMode=r,m.treeForkCount=a)}function tm(e,n,t){var l=n.pendingProps,r=l.revealOrder,a=l.tail;l=l.children;var m=sn.current,_=(m&2)!==0;if(_?(m=m&1|2,n.flags|=128):m&=1,Z(sn,m),Nn(e,n,l,t),l=Ae?si:0,!_&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nm(e,t,n);else if(e.tag===19)nm(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&Ms(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),Qc(n,!1,r,t,a,l);break;case"backwards":case"unstable_legacy-backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Ms(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}Qc(n,!0,t,null,a,l);break;case"together":Qc(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function ll(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Gl|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(sa(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,t=Zt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Zt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Pc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&xs(e)))}function b_(e,n,t){switch(n.tag){case 3:Fe(n,n.stateNode.containerInfo),Dl(n,fn,e.memoizedState.cache),xr();break;case 27:case 5:at(n);break;case 4:Fe(n,n.stateNode.containerInfo);break;case 10:Dl(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,xc(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Bl(n),n.flags|=128,null):(t&n.child.childLanes)!==0?em(e,n,t):(Bl(n),e=ll(e,n,t),e!==null?e.sibling:null);Bl(n);break;case 19:var r=(e.flags&128)!==0;if(l=(t&n.childLanes)!==0,l||(sa(e,n,t,!1),l=(t&n.childLanes)!==0),r){if(l)return tm(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Z(sn,sn.current),l)break;return null;case 22:return n.lanes=0,Fd(e,n,t,n.pendingProps);case 24:Dl(n,fn,e.memoizedState.cache)}return ll(e,n,t)}function lm(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!Pc(e,t)&&(n.flags&128)===0)return mn=!1,b_(e,n,t);mn=(e.flags&131072)!==0}else mn=!1,Ae&&(n.flags&1048576)!==0&&zf(n,si,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(e=kr(n.elementType),n.type=e,typeof e=="function")nc(e)?(l=Mr(e,l),n.tag=1,n=Wd(null,n,e,l,t)):(n.tag=0,n=qc(null,n,e,l,t));else{if(e!=null){var r=e.$$typeof;if(r===oe){n.tag=11,n=Xd(null,n,e,l,t);break e}else if(r===ee){n.tag=14,n=Kd(null,n,e,l,t);break e}}throw n=Re(e)||e,Error(s(306,n,""))}}return n;case 0:return qc(e,n,n.type,n.pendingProps,t);case 1:return l=n.type,r=Mr(l,n.pendingProps),Wd(e,n,l,r,t);case 3:e:{if(Fe(n,n.stateNode.containerInfo),e===null)throw Error(s(387));l=n.pendingProps;var a=n.memoizedState;r=a.element,_c(e,n),pi(n,l,null,t);var m=n.memoizedState;if(l=m.cache,Dl(n,fn,l),l!==a.cache&&uc(n,[fn],t,!0),hi(),l=m.element,a.isDehydrated)if(a={element:l,isDehydrated:!1,cache:m.cache},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){n=Jd(e,n,l,t);break e}else if(l!==r){r=pt(Error(s(424)),n),oi(r),n=Jd(e,n,l,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Qe=vt(e.firstChild),wn=n,Ae=!0,jl=null,bt=!0,t=Ff(n,null,l,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(xr(),l===r){n=ll(e,n,t);break e}Nn(e,n,l,t)}n=n.child}return n;case 26:return Gs(e,n),e===null?(t=hh(n.type,null,n.pendingProps,null))?n.memoizedState=t:Ae||(t=n.type,e=n.pendingProps,l=lo(Q.current).createElement(t),l[tn]=n,l[ln]=e,Tn(l,t,e),Ze(l),n.stateNode=l):n.memoizedState=hh(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return at(n),e===null&&Ae&&(l=n.stateNode=fh(n.type,n.pendingProps,Q.current),wn=n,bt=!0,r=Qe,Xl(n.type)?(Mu=r,Qe=vt(l.firstChild)):Qe=r),Nn(e,n,n.pendingProps.children,t),Gs(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((r=l=Qe)&&(l=F_(l,n.type,n.pendingProps,bt),l!==null?(n.stateNode=l,wn=n,Qe=vt(l.firstChild),bt=!1,r=!0):r=!1),r||Al(n)),at(n),r=n.type,a=n.pendingProps,m=e!==null?e.memoizedProps:null,l=a.children,wu(r,a)?l=null:m!==null&&wu(r,m)&&(n.flags|=32),n.memoizedState!==null&&(r=Ec(e,n,c_,null,null,t),zi._currentValue=r),Gs(e,n),Nn(e,n,l,t),n.child;case 6:return e===null&&Ae&&((e=t=Qe)&&(t=Q_(t,n.pendingProps,bt),t!==null?(n.stateNode=t,wn=n,Qe=null,e=!0):e=!1),e||Al(n)),null;case 13:return em(e,n,t);case 4:return Fe(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=Tr(n,null,l,t):Nn(e,n,l,t),n.child;case 11:return Xd(e,n,n.type,n.pendingProps,t);case 7:return Nn(e,n,n.pendingProps,t),n.child;case 8:return Nn(e,n,n.pendingProps.children,t),n.child;case 12:return Nn(e,n,n.pendingProps.children,t),n.child;case 10:return l=n.pendingProps,Dl(n,n.type,l.value),Nn(e,n,l.children,t),n.child;case 9:return r=n.type._context,l=n.pendingProps.children,Er(n),r=kn(r),l=l(r),n.flags|=1,Nn(e,n,l,t),n.child;case 14:return Kd(e,n,n.type,n.pendingProps,t);case 15:return Id(e,n,n.type,n.pendingProps,t);case 19:return tm(e,n,t);case 31:return g_(e,n,t);case 22:return Fd(e,n,t,n.pendingProps);case 24:return Er(n),l=kn(fn),e===null?(r=mc(),r===null&&(r=Ke,a=fc(),r.pooledCache=a,a.refCount++,a!==null&&(r.pooledCacheLanes|=t),r=a),n.memoizedState={parent:l,cache:r},pc(n),Dl(n,fn,r)):((e.lanes&t)!==0&&(_c(e,n),pi(n,null,null,t),hi()),r=e.memoizedState,a=n.memoizedState,r.parent!==l?(r={parent:l,cache:l},n.memoizedState=r,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=r),Dl(n,fn,l)):(l=a.cache,Dl(n,fn,l),l!==r.cache&&uc(n,[fn],t,!0))),Nn(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function rl(e){e.flags|=4}function Zc(e,n,t,l,r){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(jm())e.flags|=8192;else throw Nr=ks,hc}else e.flags&=-16777217}function rm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!yh(n))if(jm())e.flags|=8192;else throw Nr=ks,hc}function Ys(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ya():536870912,e.lanes|=n,ya|=n)}function xi(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Pe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=t,n}function y_(e,n,t){var l=n.pendingProps;switch(ac(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(n),null;case 1:return Pe(n),null;case 3:return t=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),el(fn),Oe(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(ia(n)?rl(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,sc())),Pe(n),null;case 26:var r=n.type,a=n.memoizedState;return e===null?(rl(n),a!==null?(Pe(n),rm(n,a)):(Pe(n),Zc(n,r,null,l,t))):a?a!==e.memoizedState?(rl(n),Pe(n),rm(n,a)):(Pe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==l&&rl(n),Pe(n),Zc(n,r,e,l,t)),null;case 27:if(hl(n),t=Q.current,r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&rl(n);else{if(!l){if(n.stateNode===null)throw Error(s(166));return Pe(n),null}e=A.current,ia(n)?Lf(n):(e=fh(r,l,t),n.stateNode=e,rl(n))}return Pe(n),null;case 5:if(hl(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&rl(n);else{if(!l){if(n.stateNode===null)throw Error(s(166));return Pe(n),null}if(a=A.current,ia(n))Lf(n);else{var m=lo(Q.current);switch(a){case 1:a=m.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:a=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":a=m.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":a=m.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":a=m.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof l.is=="string"?m.createElement("select",{is:l.is}):m.createElement("select"),l.multiple?a.multiple=!0:l.size&&(a.size=l.size);break;default:a=typeof l.is=="string"?m.createElement(r,{is:l.is}):m.createElement(r)}}a[tn]=n,a[ln]=l;e:for(m=n.child;m!==null;){if(m.tag===5||m.tag===6)a.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===n)break e;for(;m.sibling===null;){if(m.return===null||m.return===n)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}n.stateNode=a;e:switch(Tn(a,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&rl(n)}}return Pe(n),Zc(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&rl(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(s(166));if(e=Q.current,ia(n)){if(e=n.stateNode,t=n.memoizedProps,l=null,r=wn,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[tn]=n,e=!!(e.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||eh(e.nodeValue,t)),e||Al(n,!0)}else e=lo(e).createTextNode(l),e[tn]=n,n.stateNode=e}return Pe(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(l=ia(n),t!==null){if(e===null){if(!l)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[tn]=n}else xr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Pe(n),e=!1}else t=sc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(Wn(n),n):(Wn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Pe(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=ia(n),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(s(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(s(317));r[tn]=n}else xr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Pe(n),r=!1}else r=sc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return n.flags&256?(Wn(n),n):(Wn(n),null)}return Wn(n),(n.flags&128)!==0?(n.lanes=t,n):(t=l!==null,e=e!==null&&e.memoizedState!==null,t&&(l=n.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),a=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),a!==r&&(l.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),Ys(n,n.updateQueue),Pe(n),null);case 4:return Oe(),e===null&&yu(n.stateNode.containerInfo),Pe(n),null;case 10:return el(n.type),Pe(n),null;case 19:if(O(sn),l=n.memoizedState,l===null)return Pe(n),null;if(r=(n.flags&128)!==0,a=l.rendering,a===null)if(r)xi(l,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(a=Ms(e),a!==null){for(n.flags|=128,xi(l,!1),e=a.updateQueue,n.updateQueue=e,Ys(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Df(t,e),t=t.sibling;return Z(sn,sn.current&1|2),Ae&&Wt(n,l.treeForkCount),n.child}e=e.sibling}l.tail!==null&&Rn()>Is&&(n.flags|=128,r=!0,xi(l,!1),n.lanes=4194304)}else{if(!r)if(e=Ms(a),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,Ys(n,e),xi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!Ae)return Pe(n),null}else 2*Rn()-l.renderingStartTime>Is&&t!==536870912&&(n.flags|=128,r=!0,xi(l,!1),n.lanes=4194304);l.isBackwards?(a.sibling=n.child,n.child=a):(e=l.last,e!==null?e.sibling=a:n.child=a,l.last=a)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Rn(),e.sibling=null,t=sn.current,Z(sn,r?t&1|2:t&1),Ae&&Wt(n,l.treeForkCount),e):(Pe(n),null);case 22:case 23:return Wn(n),vc(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(t&536870912)!==0&&(n.flags&128)===0&&(Pe(n),n.subtreeFlags&6&&(n.flags|=8192)):Pe(n),t=n.updateQueue,t!==null&&Ys(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==t&&(n.flags|=2048),e!==null&&O(wr),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),el(fn),Pe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function v_(e,n){switch(ac(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return el(fn),Oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return hl(n),null;case 31:if(n.memoizedState!==null){if(Wn(n),n.alternate===null)throw Error(s(340));xr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Wn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));xr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return O(sn),null;case 4:return Oe(),null;case 10:return el(n.type),null;case 22:case 23:return Wn(n),vc(),e!==null&&O(wr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return el(fn),null;case 25:return null;default:return null}}function am(e,n){switch(ac(n),n.tag){case 3:el(fn),Oe();break;case 26:case 27:case 5:hl(n);break;case 4:Oe();break;case 31:n.memoizedState!==null&&Wn(n);break;case 13:Wn(n);break;case 19:O(sn);break;case 10:el(n.type);break;case 22:case 23:Wn(n),vc(),e!==null&&O(wr);break;case 24:el(fn)}}function Si(e,n){try{var t=n.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var r=l.next;t=r;do{if((t.tag&e)===e){l=void 0;var a=t.create,m=t.inst;l=a(),m.destroy=l}t=t.next}while(t!==r)}}catch(_){Ge(n,n.return,_)}}function Ul(e,n,t){try{var l=n.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var a=r.next;l=a;do{if((l.tag&e)===e){var m=l.inst,_=m.destroy;if(_!==void 0){m.destroy=void 0,r=n;var E=t,M=_;try{M()}catch(U){Ge(r,E,U)}}}l=l.next}while(l!==a)}}catch(U){Ge(n,n.return,U)}}function im(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Pf(n,t)}catch(l){Ge(e,e.return,l)}}}function sm(e,n,t){t.props=Mr(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(l){Ge(e,n,l)}}function Ei(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof t=="function"?e.refCleanup=t(l):t.current=l}}catch(r){Ge(e,n,r)}}function Ht(e,n){var t=e.ref,l=e.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(r){Ge(e,n,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(r){Ge(e,n,r)}else t.current=null}function om(e){var n=e.type,t=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break e;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(r){Ge(e,e.return,r)}}function Wc(e,n,t){try{var l=e.stateNode;Y_(l,e.type,t,n),l[ln]=n}catch(r){Ge(e,e.return,r)}}function cm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Xl(e.type)||e.tag===4}function Jc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Xl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function eu(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ft));else if(l!==4&&(l===27&&Xl(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(eu(e,n,t),e=e.sibling;e!==null;)eu(e,n,t),e=e.sibling}function qs(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(l!==4&&(l===27&&Xl(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(qs(e,n,t),e=e.sibling;e!==null;)qs(e,n,t),e=e.sibling}function um(e){var n=e.stateNode,t=e.memoizedProps;try{for(var l=e.type,r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Tn(n,l,t),n[tn]=e,n[ln]=t}catch(a){Ge(e,e.return,a)}}var al=!1,hn=!1,nu=!1,fm=typeof WeakSet=="function"?WeakSet:Set,bn=null;function x_(e,n){if(e=e.containerInfo,Su=uo,e=Ef(e),Fo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var r=l.anchorOffset,a=l.focusNode;l=l.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var m=0,_=-1,E=-1,M=0,U=0,Y=e,D=null;n:for(;;){for(var L;Y!==t||r!==0&&Y.nodeType!==3||(_=m+r),Y!==a||l!==0&&Y.nodeType!==3||(E=m+l),Y.nodeType===3&&(m+=Y.nodeValue.length),(L=Y.firstChild)!==null;)D=Y,Y=L;for(;;){if(Y===e)break n;if(D===t&&++M===r&&(_=m),D===a&&++U===l&&(E=m),(L=Y.nextSibling)!==null)break;Y=D,D=Y.parentNode}Y=L}t=_===-1||E===-1?null:{start:_,end:E}}else t=null}t=t||{start:0,end:0}}else t=null;for(Eu={focusedElem:e,selectionRange:t},uo=!1,bn=n;bn!==null;)if(n=bn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,bn=e;else for(;bn!==null;){switch(n=bn,a=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)r=e[t],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,t=n,r=a.memoizedProps,a=a.memoizedState,l=t.stateNode;try{var ie=Mr(t.type,r);e=l.getSnapshotBeforeUpdate(ie,a),l.__reactInternalSnapshotBeforeUpdate=e}catch(_e){Ge(t,t.return,_e)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)Nu(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Nu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,bn=e;break}bn=n.return}}function dm(e,n,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:sl(e,t),l&4&&Si(5,t);break;case 1:if(sl(e,t),l&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(m){Ge(t,t.return,m)}else{var r=Mr(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(r,n,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Ge(t,t.return,m)}}l&64&&im(t),l&512&&Ei(t,t.return);break;case 3:if(sl(e,t),l&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Pf(e,n)}catch(m){Ge(t,t.return,m)}}break;case 27:n===null&&l&4&&um(t);case 26:case 5:sl(e,t),n===null&&l&4&&om(t),l&512&&Ei(t,t.return);break;case 12:sl(e,t);break;case 31:sl(e,t),l&4&&pm(e,t);break;case 13:sl(e,t),l&4&&_m(e,t),l&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=j_.bind(null,t),P_(e,t))));break;case 22:if(l=t.memoizedState!==null||al,!l){n=n!==null&&n.memoizedState!==null||hn,r=al;var a=hn;al=l,(hn=n)&&!a?ol(e,t,(t.subtreeFlags&8772)!==0):sl(e,t),al=r,hn=a}break;case 30:break;default:sl(e,t)}}function mm(e){var n=e.alternate;n!==null&&(e.alternate=null,mm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&qt(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Hn=!1;function il(e,n,t){for(t=t.child;t!==null;)hm(e,n,t),t=t.sibling}function hm(e,n,t){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(nr,t)}catch{}switch(t.tag){case 26:hn||Ht(t,n),il(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:hn||Ht(t,n);var l=We,r=Hn;Xl(t.type)&&(We=t.stateNode,Hn=!1),il(e,n,t),Di(t.stateNode),We=l,Hn=r;break;case 5:hn||Ht(t,n);case 6:if(l=We,r=Hn,We=null,il(e,n,t),We=l,Hn=r,We!==null)if(Hn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(t.stateNode)}catch(a){Ge(t,n,a)}else try{We.removeChild(t.stateNode)}catch(a){Ge(t,n,a)}break;case 18:We!==null&&(Hn?(e=We,ih(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Ta(e)):ih(We,t.stateNode));break;case 4:l=We,r=Hn,We=t.stateNode.containerInfo,Hn=!0,il(e,n,t),We=l,Hn=r;break;case 0:case 11:case 14:case 15:Ul(2,t,n),hn||Ul(4,t,n),il(e,n,t);break;case 1:hn||(Ht(t,n),l=t.stateNode,typeof l.componentWillUnmount=="function"&&sm(t,n,l)),il(e,n,t);break;case 21:il(e,n,t);break;case 22:hn=(l=hn)||t.memoizedState!==null,il(e,n,t),hn=l;break;default:il(e,n,t)}}function pm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ta(e)}catch(t){Ge(n,n.return,t)}}}function _m(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ta(e)}catch(t){Ge(n,n.return,t)}}function S_(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new fm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new fm),n;default:throw Error(s(435,e.tag))}}function $s(e,n){var t=S_(e);n.forEach(function(l){if(!t.has(l)){t.add(l);var r=A_.bind(null,e,l);l.then(r,r)}})}function Gn(e,n){var t=n.deletions;if(t!==null)for(var l=0;l<t.length;l++){var r=t[l],a=e,m=n,_=m;e:for(;_!==null;){switch(_.tag){case 27:if(Xl(_.type)){We=_.stateNode,Hn=!1;break e}break;case 5:We=_.stateNode,Hn=!1;break e;case 3:case 4:We=_.stateNode.containerInfo,Hn=!0;break e}_=_.return}if(We===null)throw Error(s(160));hm(a,m,r),We=null,Hn=!1,a=r.alternate,a!==null&&(a.return=null),r.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)gm(n,e),n=n.sibling}var jt=null;function gm(e,n){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gn(n,e),Vn(e),l&4&&(Ul(3,e,e.return),Si(3,e),Ul(5,e,e.return));break;case 1:Gn(n,e),Vn(e),l&512&&(hn||t===null||Ht(t,t.return)),l&64&&al&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var r=jt;if(Gn(n,e),Vn(e),l&512&&(hn||t===null||Ht(t,t.return)),l&4){var a=t!==null?t.memoizedState:null;if(l=e.memoizedState,t===null)if(l===null)if(e.stateNode===null){e:{l=e.type,t=e.memoizedProps,r=r.ownerDocument||r;n:switch(l){case"title":a=r.getElementsByTagName("title")[0],(!a||a[Bn]||a[tn]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=r.createElement(l),r.head.insertBefore(a,r.querySelector("head > title"))),Tn(a,l,t),a[tn]=e,Ze(a),l=a;break e;case"link":var m=gh("link","href",r).get(l+(t.href||""));if(m){for(var _=0;_<m.length;_++)if(a=m[_],a.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&a.getAttribute("rel")===(t.rel==null?null:t.rel)&&a.getAttribute("title")===(t.title==null?null:t.title)&&a.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){m.splice(_,1);break n}}a=r.createElement(l),Tn(a,l,t),r.head.appendChild(a);break;case"meta":if(m=gh("meta","content",r).get(l+(t.content||""))){for(_=0;_<m.length;_++)if(a=m[_],a.getAttribute("content")===(t.content==null?null:""+t.content)&&a.getAttribute("name")===(t.name==null?null:t.name)&&a.getAttribute("property")===(t.property==null?null:t.property)&&a.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&a.getAttribute("charset")===(t.charSet==null?null:t.charSet)){m.splice(_,1);break n}}a=r.createElement(l),Tn(a,l,t),r.head.appendChild(a);break;default:throw Error(s(468,l))}a[tn]=e,Ze(a),l=a}e.stateNode=l}else bh(r,e.type,e.stateNode);else e.stateNode=_h(r,l,e.memoizedProps);else a!==l?(a===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):a.count--,l===null?bh(r,e.type,e.stateNode):_h(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Wc(e,e.memoizedProps,t.memoizedProps)}break;case 27:Gn(n,e),Vn(e),l&512&&(hn||t===null||Ht(t,t.return)),t!==null&&l&4&&Wc(e,e.memoizedProps,t.memoizedProps);break;case 5:if(Gn(n,e),Vn(e),l&512&&(hn||t===null||Ht(t,t.return)),e.flags&32){r=e.stateNode;try{ut(r,"")}catch(ie){Ge(e,e.return,ie)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,Wc(e,r,t!==null?t.memoizedProps:r)),l&1024&&(nu=!0);break;case 6:if(Gn(n,e),Vn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,t=e.stateNode;try{t.nodeValue=l}catch(ie){Ge(e,e.return,ie)}}break;case 3:if(io=null,r=jt,jt=ro(n.containerInfo),Gn(n,e),jt=r,Vn(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{Ta(n.containerInfo)}catch(ie){Ge(e,e.return,ie)}nu&&(nu=!1,bm(e));break;case 4:l=jt,jt=ro(e.stateNode.containerInfo),Gn(n,e),Vn(e),jt=l;break;case 12:Gn(n,e),Vn(e);break;case 31:Gn(n,e),Vn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,$s(e,l)));break;case 13:Gn(n,e),Vn(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Ks=Rn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,$s(e,l)));break;case 22:r=e.memoizedState!==null;var E=t!==null&&t.memoizedState!==null,M=al,U=hn;if(al=M||r,hn=U||E,Gn(n,e),hn=U,al=M,Vn(e),l&8192)e:for(n=e.stateNode,n._visibility=r?n._visibility&-2:n._visibility|1,r&&(t===null||E||al||hn||jr(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){E=t=n;try{if(a=E.stateNode,r)m=a.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{_=E.stateNode;var Y=E.memoizedProps.style,D=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;_.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(ie){Ge(E,E.return,ie)}}}else if(n.tag===6){if(t===null){E=n;try{E.stateNode.nodeValue=r?"":E.memoizedProps}catch(ie){Ge(E,E.return,ie)}}}else if(n.tag===18){if(t===null){E=n;try{var L=E.stateNode;r?sh(L,!0):sh(E.stateNode,!1)}catch(ie){Ge(E,E.return,ie)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,$s(e,t))));break;case 19:Gn(n,e),Vn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,$s(e,l)));break;case 30:break;case 21:break;default:Gn(n,e),Vn(e)}}function Vn(e){var n=e.flags;if(n&2){try{for(var t,l=e.return;l!==null;){if(cm(l)){t=l;break}l=l.return}if(t==null)throw Error(s(160));switch(t.tag){case 27:var r=t.stateNode,a=Jc(e);qs(e,a,r);break;case 5:var m=t.stateNode;t.flags&32&&(ut(m,""),t.flags&=-33);var _=Jc(e);qs(e,_,m);break;case 3:case 4:var E=t.stateNode.containerInfo,M=Jc(e);eu(e,M,E);break;default:throw Error(s(161))}}catch(U){Ge(e,e.return,U)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function bm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;bm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function sl(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)dm(e,n.alternate,n),n=n.sibling}function jr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ul(4,n,n.return),jr(n);break;case 1:Ht(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&sm(n,n.return,t),jr(n);break;case 27:Di(n.stateNode);case 26:case 5:Ht(n,n.return),jr(n);break;case 22:n.memoizedState===null&&jr(n);break;case 30:jr(n);break;default:jr(n)}e=e.sibling}}function ol(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,r=e,a=n,m=a.flags;switch(a.tag){case 0:case 11:case 15:ol(r,a,t),Si(4,a);break;case 1:if(ol(r,a,t),l=a,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(M){Ge(l,l.return,M)}if(l=a,r=l.updateQueue,r!==null){var _=l.stateNode;try{var E=r.shared.hiddenCallbacks;if(E!==null)for(r.shared.hiddenCallbacks=null,r=0;r<E.length;r++)Qf(E[r],_)}catch(M){Ge(l,l.return,M)}}t&&m&64&&im(a),Ei(a,a.return);break;case 27:um(a);case 26:case 5:ol(r,a,t),t&&l===null&&m&4&&om(a),Ei(a,a.return);break;case 12:ol(r,a,t);break;case 31:ol(r,a,t),t&&m&4&&pm(r,a);break;case 13:ol(r,a,t),t&&m&4&&_m(r,a);break;case 22:a.memoizedState===null&&ol(r,a,t),Ei(a,a.return);break;case 30:break;default:ol(r,a,t)}n=n.sibling}}function tu(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&ci(t))}function lu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ci(e))}function At(e,n,t,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ym(e,n,t,l),n=n.sibling}function ym(e,n,t,l){var r=n.flags;switch(n.tag){case 0:case 11:case 15:At(e,n,t,l),r&2048&&Si(9,n);break;case 1:At(e,n,t,l);break;case 3:At(e,n,t,l),r&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ci(e)));break;case 12:if(r&2048){At(e,n,t,l),e=n.stateNode;try{var a=n.memoizedProps,m=a.id,_=a.onPostCommit;typeof _=="function"&&_(m,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){Ge(n,n.return,E)}}else At(e,n,t,l);break;case 31:At(e,n,t,l);break;case 13:At(e,n,t,l);break;case 23:break;case 22:a=n.stateNode,m=n.alternate,n.memoizedState!==null?a._visibility&2?At(e,n,t,l):wi(e,n):a._visibility&2?At(e,n,t,l):(a._visibility|=2,_a(e,n,t,l,(n.subtreeFlags&10256)!==0||!1)),r&2048&&tu(m,n);break;case 24:At(e,n,t,l),r&2048&&lu(n.alternate,n);break;default:At(e,n,t,l)}}function _a(e,n,t,l,r){for(r=r&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var a=e,m=n,_=t,E=l,M=m.flags;switch(m.tag){case 0:case 11:case 15:_a(a,m,_,E,r),Si(8,m);break;case 23:break;case 22:var U=m.stateNode;m.memoizedState!==null?U._visibility&2?_a(a,m,_,E,r):wi(a,m):(U._visibility|=2,_a(a,m,_,E,r)),r&&M&2048&&tu(m.alternate,m);break;case 24:_a(a,m,_,E,r),r&&M&2048&&lu(m.alternate,m);break;default:_a(a,m,_,E,r)}n=n.sibling}}function wi(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,l=n,r=l.flags;switch(l.tag){case 22:wi(t,l),r&2048&&tu(l.alternate,l);break;case 24:wi(t,l),r&2048&&lu(l.alternate,l);break;default:wi(t,l)}n=n.sibling}}var ki=8192;function ga(e,n,t){if(e.subtreeFlags&ki)for(e=e.child;e!==null;)vm(e,n,t),e=e.sibling}function vm(e,n,t){switch(e.tag){case 26:ga(e,n,t),e.flags&ki&&e.memoizedState!==null&&og(t,jt,e.memoizedState,e.memoizedProps);break;case 5:ga(e,n,t);break;case 3:case 4:var l=jt;jt=ro(e.stateNode.containerInfo),ga(e,n,t),jt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=ki,ki=16777216,ga(e,n,t),ki=l):ga(e,n,t));break;default:ga(e,n,t)}}function xm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ni(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var l=n[t];bn=l,Em(l,e)}xm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sm(e),e=e.sibling}function Sm(e){switch(e.tag){case 0:case 11:case 15:Ni(e),e.flags&2048&&Ul(9,e,e.return);break;case 3:Ni(e);break;case 12:Ni(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Xs(e)):Ni(e);break;default:Ni(e)}}function Xs(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var l=n[t];bn=l,Em(l,e)}xm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ul(8,n,n.return),Xs(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,Xs(n));break;default:Xs(n)}e=e.sibling}}function Em(e,n){for(;bn!==null;){var t=bn;switch(t.tag){case 0:case 11:case 15:Ul(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ci(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,bn=l;else e:for(t=e;bn!==null;){l=bn;var r=l.sibling,a=l.return;if(mm(l),l===t){bn=null;break e}if(r!==null){r.return=a,bn=r;break e}bn=a}}}var E_={getCacheForType:function(e){var n=kn(fn),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return kn(fn).controller.signal}},w_=typeof WeakMap=="function"?WeakMap:Map,Be=0,Ke=null,Ne=null,Me=0,He=0,Jn=null,Hl=!1,ba=!1,ru=!1,cl=0,nn=0,Gl=0,Ar=0,au=0,et=0,ya=0,Ti=null,Yn=null,iu=!1,Ks=0,wm=0,Is=1/0,Fs=null,Vl=null,_n=0,Yl=null,va=null,ul=0,su=0,ou=null,km=null,Ri=0,cu=null;function nt(){return(Be&2)!==0&&Me!==0?Me&-Me:C.T!==null?pu():un()}function Nm(){if(et===0)if((Me&536870912)===0||Ae){var e=An;An<<=1,(An&3932160)===0&&(An=262144),et=e}else et=536870912;return e=Zn.current,e!==null&&(e.flags|=32),et}function qn(e,n,t){(e===Ke&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(xa(e,0),ql(e,Me,et,!1)),tr(e,t),((Be&2)===0||e!==Ke)&&(e===Ke&&((Be&2)===0&&(Ar|=t),nn===4&&ql(e,Me,et,!1)),Gt(e))}function Tm(e,n,t){if((Be&6)!==0)throw Error(s(327));var l=!t&&(n&127)===0&&(n&e.expiredLanes)===0||Dn(e,n),r=l?T_(e,n):fu(e,n,!0),a=l;do{if(r===0){ba&&!l&&ql(e,n,0,!1);break}else{if(t=e.current.alternate,a&&!k_(t)){r=fu(e,n,!1),a=!1;continue}if(r===2){if(a=n,e.errorRecoveryDisabledLanes&a)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){n=m;e:{var _=e;r=Ti;var E=_.current.memoizedState.isDehydrated;if(E&&(xa(_,m).flags|=256),m=fu(_,m,!1),m!==2){if(ru&&!E){_.errorRecoveryDisabledLanes|=a,Ar|=a,r=4;break e}a=Yn,Yn=r,a!==null&&(Yn===null?Yn=a:Yn.push.apply(Yn,a))}r=m}if(a=!1,r!==2)continue}}if(r===1){xa(e,0),ql(e,n,0,!0);break}e:{switch(l=e,a=r,a){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ql(l,n,et,!Hl);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(r=Ks+300-Rn(),10<r)){if(ql(l,n,et,!Hl),cn(l,0,!0)!==0)break e;ul=n,l.timeoutHandle=rh(Rm.bind(null,l,t,Yn,Fs,iu,n,et,Ar,ya,Hl,a,"Throttled",-0,0),r);break e}Rm(l,t,Yn,Fs,iu,n,et,Ar,ya,Hl,a,null,-0,0)}}break}while(!0);Gt(e)}function Rm(e,n,t,l,r,a,m,_,E,M,U,Y,D,L){if(e.timeoutHandle=-1,Y=n.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ft},vm(n,a,Y);var ie=(a&62914560)===a?Ks-Rn():(a&4194048)===a?wm-Rn():0;if(ie=cg(Y,ie),ie!==null){ul=a,e.cancelPendingCommit=ie(Bm.bind(null,e,n,a,t,l,r,m,_,E,U,Y,null,D,L)),ql(e,a,m,!M);return}}Bm(e,n,a,t,l,r,m,_,E)}function k_(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var r=t[l],a=r.getSnapshot;r=r.value;try{if(!Qn(a(),r))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ql(e,n,t,l){n&=~au,n&=~Ar,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var r=n;0<r;){var a=31-vn(r),m=1<<a;l[a]=-1,r&=~m}t!==0&&Zi(e,t,n)}function Qs(){return(Be&6)===0?(Mi(0),!1):!0}function uu(){if(Ne!==null){if(He===0)var e=Ne.return;else e=Ne,Jt=Sr=null,Nc(e),fa=null,fi=0,e=Ne;for(;e!==null;)am(e.alternate,e),e=e.return;Ne=null}}function xa(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,X_(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),ul=0,uu(),Ke=e,Ne=t=Zt(e.current,null),Me=n,He=0,Jn=null,Hl=!1,ba=Dn(e,n),ru=!1,ya=et=au=Ar=Gl=nn=0,Yn=Ti=null,iu=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var r=31-vn(l),a=1<<r;n|=e[r],l&=~a}return cl=n,_s(),t}function Mm(e,n){Ee=null,C.H=yi,n===ua||n===ws?(n=Xf(),He=3):n===hc?(n=Xf(),He=4):He=n===Yc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,Ne===null&&(nn=1,Us(e,pt(n,e.current)))}function jm(){var e=Zn.current;return e===null?!0:(Me&4194048)===Me?yt===null:(Me&62914560)===Me||(Me&536870912)!==0?e===yt:!1}function Am(){var e=C.H;return C.H=yi,e===null?yi:e}function Dm(){var e=C.A;return C.A=E_,e}function Ps(){nn=4,Hl||(Me&4194048)!==Me&&Zn.current!==null||(ba=!0),(Gl&134217727)===0&&(Ar&134217727)===0||Ke===null||ql(Ke,Me,et,!1)}function fu(e,n,t){var l=Be;Be|=2;var r=Am(),a=Dm();(Ke!==e||Me!==n)&&(Fs=null,xa(e,n)),n=!1;var m=nn;e:do try{if(He!==0&&Ne!==null){var _=Ne,E=Jn;switch(He){case 8:uu(),m=6;break e;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var M=He;if(He=0,Jn=null,Sa(e,_,E,M),t&&ba){m=0;break e}break;default:M=He,He=0,Jn=null,Sa(e,_,E,M)}}N_(),m=nn;break}catch(U){Mm(e,U)}while(!0);return n&&e.shellSuspendCounter++,Jt=Sr=null,Be=l,C.H=r,C.A=a,Ne===null&&(Ke=null,Me=0,_s()),m}function N_(){for(;Ne!==null;)Om(Ne)}function T_(e,n){var t=Be;Be|=2;var l=Am(),r=Dm();Ke!==e||Me!==n?(Fs=null,Is=Rn()+500,xa(e,n)):ba=Dn(e,n);e:do try{if(He!==0&&Ne!==null){n=Ne;var a=Jn;n:switch(He){case 1:He=0,Jn=null,Sa(e,n,a,1);break;case 2:case 9:if(qf(a)){He=0,Jn=null,Cm(n);break}n=function(){He!==2&&He!==9||Ke!==e||(He=7),Gt(e)},a.then(n,n);break e;case 3:He=7;break e;case 4:He=5;break e;case 7:qf(a)?(He=0,Jn=null,Cm(n)):(He=0,Jn=null,Sa(e,n,a,7));break;case 5:var m=null;switch(Ne.tag){case 26:m=Ne.memoizedState;case 5:case 27:var _=Ne;if(m?yh(m):_.stateNode.complete){He=0,Jn=null;var E=_.sibling;if(E!==null)Ne=E;else{var M=_.return;M!==null?(Ne=M,Zs(M)):Ne=null}break n}}He=0,Jn=null,Sa(e,n,a,5);break;case 6:He=0,Jn=null,Sa(e,n,a,6);break;case 8:uu(),nn=6;break e;default:throw Error(s(462))}}R_();break}catch(U){Mm(e,U)}while(!0);return Jt=Sr=null,C.H=l,C.A=r,Be=t,Ne!==null?0:(Ke=null,Me=0,_s(),nn)}function R_(){for(;Ne!==null&&!Ga();)Om(Ne)}function Om(e){var n=lm(e.alternate,e,cl);e.memoizedProps=e.pendingProps,n===null?Zs(e):Ne=n}function Cm(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=Zd(t,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=Zd(t,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:Nc(n);default:am(t,n),n=Ne=Df(n,cl),n=lm(t,n,cl)}e.memoizedProps=e.pendingProps,n===null?Zs(e):Ne=n}function Sa(e,n,t,l){Jt=Sr=null,Nc(n),fa=null,fi=0;var r=n.return;try{if(__(e,r,n,t,Me)){nn=1,Us(e,pt(t,e.current)),Ne=null;return}}catch(a){if(r!==null)throw Ne=r,a;nn=1,Us(e,pt(t,e.current)),Ne=null;return}n.flags&32768?(Ae||l===1?e=!0:ba||(Me&536870912)!==0?e=!1:(Hl=e=!0,(l===2||l===9||l===3||l===6)&&(l=Zn.current,l!==null&&l.tag===13&&(l.flags|=16384))),zm(n,e)):Zs(n)}function Zs(e){var n=e;do{if((n.flags&32768)!==0){zm(n,Hl);return}e=n.return;var t=y_(n.alternate,n,cl);if(t!==null){Ne=t;return}if(n=n.sibling,n!==null){Ne=n;return}Ne=n=e}while(n!==null);nn===0&&(nn=5)}function zm(e,n){do{var t=v_(e.alternate,e);if(t!==null){t.flags&=32767,Ne=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){Ne=e;return}Ne=e=t}while(e!==null);nn=6,Ne=null}function Bm(e,n,t,l,r,a,m,_,E){e.cancelPendingCommit=null;do Ws();while(_n!==0);if((Be&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(a=n.lanes|n.childLanes,a|=Jo,Yt(e,t,a,m,_,E),e===Ke&&(Ne=Ke=null,Me=0),va=n,Yl=e,ul=t,su=a,ou=r,km=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,D_(er,function(){return Vm(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=C.T,C.T=null,r=P.p,P.p=2,m=Be,Be|=4;try{x_(e,n,t)}finally{Be=m,P.p=r,C.T=l}}_n=1,Lm(),Um(),Hm()}}function Lm(){if(_n===1){_n=0;var e=Yl,n=va,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=C.T,C.T=null;var l=P.p;P.p=2;var r=Be;Be|=4;try{gm(n,e);var a=Eu,m=Ef(e.containerInfo),_=a.focusedElem,E=a.selectionRange;if(m!==_&&_&&_.ownerDocument&&Sf(_.ownerDocument.documentElement,_)){if(E!==null&&Fo(_)){var M=E.start,U=E.end;if(U===void 0&&(U=M),"selectionStart"in _)_.selectionStart=M,_.selectionEnd=Math.min(U,_.value.length);else{var Y=_.ownerDocument||document,D=Y&&Y.defaultView||window;if(D.getSelection){var L=D.getSelection(),ie=_.textContent.length,_e=Math.min(E.start,ie),qe=E.end===void 0?_e:Math.min(E.end,ie);!L.extend&&_e>qe&&(m=qe,qe=_e,_e=m);var T=xf(_,_e),k=xf(_,qe);if(T&&k&&(L.rangeCount!==1||L.anchorNode!==T.node||L.anchorOffset!==T.offset||L.focusNode!==k.node||L.focusOffset!==k.offset)){var R=Y.createRange();R.setStart(T.node,T.offset),L.removeAllRanges(),_e>qe?(L.addRange(R),L.extend(k.node,k.offset)):(R.setEnd(k.node,k.offset),L.addRange(R))}}}}for(Y=[],L=_;L=L.parentNode;)L.nodeType===1&&Y.push({element:L,left:L.scrollLeft,top:L.scrollTop});for(typeof _.focus=="function"&&_.focus(),_=0;_<Y.length;_++){var V=Y[_];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}uo=!!Su,Eu=Su=null}finally{Be=r,P.p=l,C.T=t}}e.current=n,_n=2}}function Um(){if(_n===2){_n=0;var e=Yl,n=va,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=C.T,C.T=null;var l=P.p;P.p=2;var r=Be;Be|=4;try{dm(e,n.alternate,n)}finally{Be=r,P.p=l,C.T=t}}_n=3}}function Hm(){if(_n===4||_n===3){_n=0,Pi();var e=Yl,n=va,t=ul,l=km;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,va=Yl=null,Gm(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Vl=null),wt(t),n=n.stateNode,pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(nr,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=C.T,r=P.p,P.p=2,C.T=null;try{for(var a=e.onRecoverableError,m=0;m<l.length;m++){var _=l[m];a(_.value,{componentStack:_.stack})}}finally{C.T=n,P.p=r}}(ul&3)!==0&&Ws(),Gt(e),r=e.pendingLanes,(t&261930)!==0&&(r&42)!==0?e===cu?Ri++:(Ri=0,cu=e):Ri=0,Mi(0)}}function Gm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ci(n)))}function Ws(){return Lm(),Um(),Hm(),Vm()}function Vm(){if(_n!==5)return!1;var e=Yl,n=su;su=0;var t=wt(ul),l=C.T,r=P.p;try{P.p=32>t?32:t,C.T=null,t=ou,ou=null;var a=Yl,m=ul;if(_n=0,va=Yl=null,ul=0,(Be&6)!==0)throw Error(s(331));var _=Be;if(Be|=4,Sm(a.current),ym(a,a.current,m,t),Be=_,Mi(0,!1),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(nr,a)}catch{}return!0}finally{P.p=r,C.T=l,Gm(e,n)}}function Ym(e,n,t){n=pt(t,n),n=Vc(e.stateNode,n,2),e=zl(e,n,2),e!==null&&(tr(e,2),Gt(e))}function Ge(e,n,t){if(e.tag===3)Ym(e,e,t);else for(;n!==null;){if(n.tag===3){Ym(n,e,t);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Vl===null||!Vl.has(l))){e=pt(t,e),t=qd(2),l=zl(n,t,2),l!==null&&($d(t,l,n,e),tr(l,2),Gt(l));break}}n=n.return}}function du(e,n,t){var l=e.pingCache;if(l===null){l=e.pingCache=new w_;var r=new Set;l.set(n,r)}else r=l.get(n),r===void 0&&(r=new Set,l.set(n,r));r.has(t)||(ru=!0,r.add(t),e=M_.bind(null,e,n,t),n.then(e,e))}function M_(e,n,t){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Ke===e&&(Me&t)===t&&(nn===4||nn===3&&(Me&62914560)===Me&&300>Rn()-Ks?(Be&2)===0&&xa(e,0):au|=t,ya===Me&&(ya=0)),Gt(e)}function qm(e,n){n===0&&(n=Ya()),e=yr(e,n),e!==null&&(tr(e,n),Gt(e))}function j_(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),qm(e,t)}function A_(e,n){var t=0;switch(e.tag){case 31:case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(n),qm(e,t)}function D_(e,n){return Ha(e,n)}var Js=null,Ea=null,mu=!1,eo=!1,hu=!1,$l=0;function Gt(e){e!==Ea&&e.next===null&&(Ea===null?Js=Ea=e:Ea=Ea.next=e),eo=!0,mu||(mu=!0,C_())}function Mi(e,n){if(!hu&&eo){hu=!0;do for(var t=!1,l=Js;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var a=0;else{var m=l.suspendedLanes,_=l.pingedLanes;a=(1<<31-vn(42|e)+1)-1,a&=r&~(m&~_),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(t=!0,Im(l,a))}else a=Me,a=cn(l,l===Ke?a:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(a&3)===0||Dn(l,a)||(t=!0,Im(l,a));l=l.next}while(t);hu=!1}}function O_(){$m()}function $m(){eo=mu=!1;var e=0;$l!==0&&$_()&&(e=$l);for(var n=Rn(),t=null,l=Js;l!==null;){var r=l.next,a=Xm(l,n);a===0?(l.next=null,t===null?Js=r:t.next=r,r===null&&(Ea=t)):(t=l,(e!==0||(a&3)!==0)&&(eo=!0)),l=r}_n!==0&&_n!==5||Mi(e),$l!==0&&($l=0)}function Xm(e,n){for(var t=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var m=31-vn(a),_=1<<m,E=r[m];E===-1?((_&t)===0||(_&l)!==0)&&(r[m]=Ao(_,n)):E<=n&&(e.expiredLanes|=_),a&=~_}if(n=Ke,t=Me,t=cn(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,t===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Vt(l),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Dn(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(l!==null&&Vt(l),wt(t)){case 2:case 8:t=Va;break;case 32:t=er;break;case 268435456:t=st;break;default:t=er}return l=Km.bind(null,e),t=Ha(t,l),e.callbackPriority=n,e.callbackNode=t,n}return l!==null&&l!==null&&Vt(l),e.callbackPriority=2,e.callbackNode=null,2}function Km(e,n){if(_n!==0&&_n!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Ws()&&e.callbackNode!==t)return null;var l=Me;return l=cn(e,e===Ke?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Tm(e,l,n),Xm(e,Rn()),e.callbackNode!=null&&e.callbackNode===t?Km.bind(null,e):null)}function Im(e,n){if(Ws())return null;Tm(e,n,!0)}function C_(){K_(function(){(Be&6)!==0?Ha(Hr,O_):$m()})}function pu(){if($l===0){var e=oa;e===0&&(e=Dt,Dt<<=1,(Dt&261888)===0&&(Dt=256)),$l=e}return $l}function Fm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:It(""+e)}function Qm(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function z_(e,n,t,l,r){if(n==="submit"&&t&&t.stateNode===r){var a=Fm((r[ln]||null).action),m=l.submitter;m&&(n=(n=m[ln]||null)?Fm(n.formAction):m.getAttribute("formAction"),n!==null&&(a=n,m=null));var _=new Qr("action","action",null,l,r);e.push({event:_,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if($l!==0){var E=m?Qm(r,m):new FormData(r);zc(t,{pending:!0,data:E,method:r.method,action:a},null,E)}}else typeof a=="function"&&(_.preventDefault(),E=m?Qm(r,m):new FormData(r),zc(t,{pending:!0,data:E,method:r.method,action:a},a,E))},currentTarget:r}]})}}for(var _u=0;_u<Wo.length;_u++){var gu=Wo[_u],B_=gu.toLowerCase(),L_=gu[0].toUpperCase()+gu.slice(1);Mt(B_,"on"+L_)}Mt(Nf,"onAnimationEnd"),Mt(Tf,"onAnimationIteration"),Mt(Rf,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(Jp,"onTransitionRun"),Mt(e_,"onTransitionStart"),Mt(n_,"onTransitionCancel"),Mt(Mf,"onTransitionEnd"),Sl("onMouseEnter",["mouseout","mouseover"]),Sl("onMouseLeave",["mouseout","mouseover"]),Sl("onPointerEnter",["pointerout","pointerover"]),Sl("onPointerLeave",["pointerout","pointerover"]),kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),kt("onBeforeInput",["compositionend","keypress","textInput","paste"]),kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ji="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),U_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ji));function Pm(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],r=l.event;l=l.listeners;e:{var a=void 0;if(n)for(var m=l.length-1;0<=m;m--){var _=l[m],E=_.instance,M=_.currentTarget;if(_=_.listener,E!==a&&r.isPropagationStopped())break e;a=_,r.currentTarget=M;try{a(r)}catch(U){ps(U)}r.currentTarget=null,a=E}else for(m=0;m<l.length;m++){if(_=l[m],E=_.instance,M=_.currentTarget,_=_.listener,E!==a&&r.isPropagationStopped())break e;a=_,r.currentTarget=M;try{a(r)}catch(U){ps(U)}r.currentTarget=null,a=E}}}}function Te(e,n){var t=n[Ct];t===void 0&&(t=n[Ct]=new Set);var l=e+"__bubble";t.has(l)||(Zm(n,e,2,!1),t.add(l))}function bu(e,n,t){var l=0;n&&(l|=4),Zm(t,e,l,n)}var no="_reactListening"+Math.random().toString(36).slice(2);function yu(e){if(!e[no]){e[no]=!0,Xt.forEach(function(t){t!=="selectionchange"&&(U_.has(t)||bu(t,!1,e),bu(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[no]||(n[no]=!0,bu("selectionchange",!1,n))}}function Zm(e,n,t,l){switch(Nh(n)){case 2:var r=dg;break;case 8:r=mg;break;default:r=Cu}t=r.bind(null,n,t,e),r=void 0,!Ir||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function vu(e,n,t,l,r){var a=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var m=l.tag;if(m===3||m===4){var _=l.stateNode.containerInfo;if(_===r)break;if(m===4)for(m=l.return;m!==null;){var E=m.tag;if((E===3||E===4)&&m.stateNode.containerInfo===r)return;m=m.return}for(;_!==null;){if(m=Ln(_),m===null)return;if(E=m.tag,E===5||E===6||E===26||E===27){l=a=m;continue e}_=_.parentNode}}l=l.return}kl(function(){var M=a,U=Fa(t),Y=[];e:{var D=jf.get(e);if(D!==void 0){var L=Qr,ie=e;switch(e){case"keypress":if(Tl(t)===0)break e;case"keydown":case"keyup":L=$o;break;case"focusin":ie="focus",L=ei;break;case"focusout":ie="blur",L=ei;break;case"beforeblur":case"afterblur":L=ei;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=as;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=Bo;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=Xo;break;case Nf:case Tf:case Rf:L=is;break;case Mf:L=Io;break;case"scroll":case"scrollend":L=Co;break;case"wheel":L=Zr;break;case"copy":case"cut":case"paste":L=ss;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=Ft;break;case"toggle":case"beforetoggle":L=ti}var _e=(n&4)!==0,qe=!_e&&(e==="scroll"||e==="scrollend"),T=_e?D!==null?D+"Capture":null:D;_e=[];for(var k=M,R;k!==null;){var V=k;if(R=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||R===null||T===null||(V=Nl(k,T),V!=null&&_e.push(Ai(k,V,R))),qe)break;k=k.return}0<_e.length&&(D=new L(D,ie,null,t,U),Y.push({event:D,listeners:_e}))}}if((n&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",D&&t!==Ia&&(ie=t.relatedTarget||t.fromElement)&&(Ln(ie)||ie[ot]))break e;if((L||D)&&(D=U.window===U?U:(D=U.ownerDocument)?D.defaultView||D.parentWindow:window,L?(ie=t.relatedTarget||t.toElement,L=M,ie=ie?Ln(ie):null,ie!==null&&(qe=h(ie),_e=ie.tag,ie!==qe||_e!==5&&_e!==27&&_e!==6)&&(ie=null)):(L=null,ie=M),L!==ie)){if(_e=as,V="onMouseLeave",T="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(_e=Ft,V="onPointerLeave",T="onPointerEnter",k="pointer"),qe=L==null?D:ct(L),R=ie==null?D:ct(ie),D=new _e(V,k+"leave",L,t,U),D.target=qe,D.relatedTarget=R,V=null,Ln(U)===M&&(_e=new _e(T,k+"enter",ie,t,U),_e.target=R,_e.relatedTarget=qe,V=_e),qe=V,L&&ie)n:{for(_e=H_,T=L,k=ie,R=0,V=T;V;V=_e(V))R++;V=0;for(var me=k;me;me=_e(me))V++;for(;0<R-V;)T=_e(T),R--;for(;0<V-R;)k=_e(k),V--;for(;R--;){if(T===k||k!==null&&T===k.alternate){_e=T;break n}T=_e(T),k=_e(k)}_e=null}else _e=null;L!==null&&Wm(Y,D,L,_e,!1),ie!==null&&qe!==null&&Wm(Y,qe,ie,_e,!0)}}e:{if(D=M?ct(M):window,L=D.nodeName&&D.nodeName.toLowerCase(),L==="select"||L==="input"&&D.type==="file")var Ce=Wr;else if(Qt(D))if(Jr)Ce=Pp;else{Ce=Fp;var ue=Ip}else L=D.nodeName,!L||L.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?M&&Ka(M.elementType)&&(Ce=Wr):Ce=Qp;if(Ce&&(Ce=Ce(e,M))){Ue(Y,Ce,t,U);break e}ue&&ue(e,D,M),e==="focusout"&&M&&D.type==="number"&&M.memoizedProps.value!=null&&Mn(D,"number",D.value)}switch(ue=M?ct(M):window,e){case"focusin":(Qt(ue)||ue.contentEditable==="true")&&(ea=ue,Qo=M,ii=null);break;case"focusout":ii=Qo=ea=null;break;case"mousedown":Po=!0;break;case"contextmenu":case"mouseup":case"dragend":Po=!1,wf(Y,t,U);break;case"selectionchange":if(Wp)break;case"keydown":case"keyup":wf(Y,t,U)}var we;if(li)e:{switch(e){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else ge?B(e,t)&&(je="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(je="onCompositionStart");je&&(g&&t.locale!=="ko"&&(ge||je!=="onCompositionStart"?je==="onCompositionEnd"&&ge&&(we=Pa()):(zt=U,Qa="value"in zt?zt.value:zt.textContent,ge=!0)),ue=to(M,je),0<ue.length&&(je=new os(je,e,null,t,U),Y.push({event:je,listeners:ue}),we?je.data=we:(we=re(t),we!==null&&(je.data=we)))),(we=d?Le(e,t):an(e,t))&&(je=to(M,"onBeforeInput"),0<je.length&&(ue=new os("onBeforeInput","beforeinput",null,t,U),Y.push({event:ue,listeners:je}),ue.data=we)),z_(Y,e,M,t,U)}Pm(Y,n)})}function Ai(e,n,t){return{instance:e,listener:n,currentTarget:t}}function to(e,n){for(var t=n+"Capture",l=[];e!==null;){var r=e,a=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||a===null||(r=Nl(e,t),r!=null&&l.unshift(Ai(e,r,a)),r=Nl(e,n),r!=null&&l.push(Ai(e,r,a))),e.tag===3)return l;e=e.return}return[]}function H_(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Wm(e,n,t,l,r){for(var a=n._reactName,m=[];t!==null&&t!==l;){var _=t,E=_.alternate,M=_.stateNode;if(_=_.tag,E!==null&&E===l)break;_!==5&&_!==26&&_!==27||M===null||(E=M,r?(M=Nl(t,a),M!=null&&m.unshift(Ai(t,M,E))):r||(M=Nl(t,a),M!=null&&m.push(Ai(t,M,E)))),t=t.return}m.length!==0&&e.push({event:n,listeners:m})}var G_=/\r\n?/g,V_=/\u0000|\uFFFD/g;function Jm(e){return(typeof e=="string"?e:""+e).replace(G_,`
`).replace(V_,"")}function eh(e,n){return n=Jm(n),Jm(e)===n}function Ye(e,n,t,l,r,a){switch(t){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||ut(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&ut(e,""+l);break;case"className":Tt(e,"class",l);break;case"tabIndex":Tt(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Tt(e,t,l);break;case"style":El(e,l,a);break;case"data":if(n!=="object"){Tt(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=It(""+l),e.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(t==="formAction"?(n!=="input"&&Ye(e,n,"name",r.name,r,null),Ye(e,n,"formEncType",r.formEncType,r,null),Ye(e,n,"formMethod",r.formMethod,r,null),Ye(e,n,"formTarget",r.formTarget,r,null)):(Ye(e,n,"encType",r.encType,r,null),Ye(e,n,"method",r.method,r,null),Ye(e,n,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=It(""+l),e.setAttribute(t,l);break;case"onClick":l!=null&&(e.onclick=ft);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(t=l.__html,t!=null){if(r.children!=null)throw Error(s(60));e.innerHTML=t}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}t=It(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""+l):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":l===!0?e.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,l):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(t,l):e.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(t):e.setAttribute(t,l);break;case"popover":Te("beforetoggle",e),Te("toggle",e),Nt(e,"popover",l);break;case"xlinkActuate":In(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":In(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":In(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":In(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":In(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":In(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":In(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":In(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":In(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Nt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=rs.get(t)||t,Nt(e,t,l))}}function xu(e,n,t,l,r,a){switch(t){case"style":El(e,l,a);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(t=l.__html,t!=null){if(r.children!=null)throw Error(s(60));e.innerHTML=t}}break;case"children":typeof l=="string"?ut(e,l):(typeof l=="number"||typeof l=="bigint")&&ut(e,""+l);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ft);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pe.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(r=t.endsWith("Capture"),n=t.slice(2,r?t.length-7:void 0),a=e[ln]||null,a=a!=null?a[t]:null,typeof a=="function"&&e.removeEventListener(n,a,r),typeof l=="function")){typeof a!="function"&&a!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,l,r);break e}t in e?e[t]=l:l===!0?e.setAttribute(t,""):Nt(e,t,l)}}}function Tn(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var l=!1,r=!1,a;for(a in t)if(t.hasOwnProperty(a)){var m=t[a];if(m!=null)switch(a){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ye(e,n,a,m,t,null)}}r&&Ye(e,n,"srcSet",t.srcSet,t,null),l&&Ye(e,n,"src",t.src,t,null);return;case"input":Te("invalid",e);var _=a=m=r=null,E=null,M=null;for(l in t)if(t.hasOwnProperty(l)){var U=t[l];if(U!=null)switch(l){case"name":r=U;break;case"type":m=U;break;case"checked":E=U;break;case"defaultChecked":M=U;break;case"value":a=U;break;case"defaultValue":_=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(s(137,n));break;default:Ye(e,n,l,U,t,null)}}ts(e,a,_,E,M,m,r,!1);return;case"select":Te("invalid",e),l=m=a=null;for(r in t)if(t.hasOwnProperty(r)&&(_=t[r],_!=null))switch(r){case"value":a=_;break;case"defaultValue":m=_;break;case"multiple":l=_;default:Ye(e,n,r,_,t,null)}n=a,t=m,e.multiple=!!l,n!=null?Kt(e,!!l,n,!1):t!=null&&Kt(e,!!l,t,!0);return;case"textarea":Te("invalid",e),a=r=l=null;for(m in t)if(t.hasOwnProperty(m)&&(_=t[m],_!=null))switch(m){case"value":l=_;break;case"defaultValue":r=_;break;case"children":a=_;break;case"dangerouslySetInnerHTML":if(_!=null)throw Error(s(91));break;default:Ye(e,n,m,_,t,null)}Sn(e,l,r,a);return;case"option":for(E in t)if(t.hasOwnProperty(E)&&(l=t[E],l!=null))switch(E){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ye(e,n,E,l,t,null)}return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(l=0;l<ji.length;l++)Te(ji[l],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in t)if(t.hasOwnProperty(M)&&(l=t[M],l!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ye(e,n,M,l,t,null)}return;default:if(Ka(n)){for(U in t)t.hasOwnProperty(U)&&(l=t[U],l!==void 0&&xu(e,n,U,l,t,void 0));return}}for(_ in t)t.hasOwnProperty(_)&&(l=t[_],l!=null&&Ye(e,n,_,l,t,null))}function Y_(e,n,t,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,a=null,m=null,_=null,E=null,M=null,U=null;for(L in t){var Y=t[L];if(t.hasOwnProperty(L)&&Y!=null)switch(L){case"checked":break;case"value":break;case"defaultValue":E=Y;default:l.hasOwnProperty(L)||Ye(e,n,L,null,l,Y)}}for(var D in l){var L=l[D];if(Y=t[D],l.hasOwnProperty(D)&&(L!=null||Y!=null))switch(D){case"type":a=L;break;case"name":r=L;break;case"checked":M=L;break;case"defaultChecked":U=L;break;case"value":m=L;break;case"defaultValue":_=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(s(137,n));break;default:L!==Y&&Ye(e,n,D,L,l,Y)}}ir(e,m,_,E,M,U,a,r);return;case"select":L=m=_=D=null;for(a in t)if(E=t[a],t.hasOwnProperty(a)&&E!=null)switch(a){case"value":break;case"multiple":L=E;default:l.hasOwnProperty(a)||Ye(e,n,a,null,l,E)}for(r in l)if(a=l[r],E=t[r],l.hasOwnProperty(r)&&(a!=null||E!=null))switch(r){case"value":D=a;break;case"defaultValue":_=a;break;case"multiple":m=a;default:a!==E&&Ye(e,n,r,a,l,E)}n=_,t=m,l=L,D!=null?Kt(e,!!t,D,!1):!!l!=!!t&&(n!=null?Kt(e,!!t,n,!0):Kt(e,!!t,t?[]:"",!1));return;case"textarea":L=D=null;for(_ in t)if(r=t[_],t.hasOwnProperty(_)&&r!=null&&!l.hasOwnProperty(_))switch(_){case"value":break;case"children":break;default:Ye(e,n,_,null,l,r)}for(m in l)if(r=l[m],a=t[m],l.hasOwnProperty(m)&&(r!=null||a!=null))switch(m){case"value":D=r;break;case"defaultValue":L=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(s(91));break;default:r!==a&&Ye(e,n,m,r,l,a)}$r(e,D,L);return;case"option":for(var ie in t)if(D=t[ie],t.hasOwnProperty(ie)&&D!=null&&!l.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Ye(e,n,ie,null,l,D)}for(E in l)if(D=l[E],L=t[E],l.hasOwnProperty(E)&&D!==L&&(D!=null||L!=null))switch(E){case"selected":e.selected=D&&typeof D!="function"&&typeof D!="symbol";break;default:Ye(e,n,E,D,l,L)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _e in t)D=t[_e],t.hasOwnProperty(_e)&&D!=null&&!l.hasOwnProperty(_e)&&Ye(e,n,_e,null,l,D);for(M in l)if(D=l[M],L=t[M],l.hasOwnProperty(M)&&D!==L&&(D!=null||L!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(s(137,n));break;default:Ye(e,n,M,D,l,L)}return;default:if(Ka(n)){for(var qe in t)D=t[qe],t.hasOwnProperty(qe)&&D!==void 0&&!l.hasOwnProperty(qe)&&xu(e,n,qe,void 0,l,D);for(U in l)D=l[U],L=t[U],!l.hasOwnProperty(U)||D===L||D===void 0&&L===void 0||xu(e,n,U,D,l,L);return}}for(var T in t)D=t[T],t.hasOwnProperty(T)&&D!=null&&!l.hasOwnProperty(T)&&Ye(e,n,T,null,l,D);for(Y in l)D=l[Y],L=t[Y],!l.hasOwnProperty(Y)||D===L||D==null&&L==null||Ye(e,n,Y,D,l,L)}function nh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function q_(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var r=t[l],a=r.transferSize,m=r.initiatorType,_=r.duration;if(a&&_&&nh(m)){for(m=0,_=r.responseEnd,l+=1;l<t.length;l++){var E=t[l],M=E.startTime;if(M>_)break;var U=E.transferSize,Y=E.initiatorType;U&&nh(Y)&&(E=E.responseEnd,m+=U*(E<_?1:(_-M)/(E-M)))}if(--l,n+=8*(a+m)/(r.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Su=null,Eu=null;function lo(e){return e.nodeType===9?e:e.ownerDocument}function th(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lh(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function wu(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ku=null;function $_(){var e=window.event;return e&&e.type==="popstate"?e===ku?!1:(ku=e,!0):(ku=null,!1)}var rh=typeof setTimeout=="function"?setTimeout:void 0,X_=typeof clearTimeout=="function"?clearTimeout:void 0,ah=typeof Promise=="function"?Promise:void 0,K_=typeof queueMicrotask=="function"?queueMicrotask:typeof ah<"u"?function(e){return ah.resolve(null).then(e).catch(I_)}:rh;function I_(e){setTimeout(function(){throw e})}function Xl(e){return e==="head"}function ih(e,n){var t=n,l=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"||t==="/&"){if(l===0){e.removeChild(r),Ta(n);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")Di(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Di(t);for(var a=t.firstChild;a;){var m=a.nextSibling,_=a.nodeName;a[Bn]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&a.rel.toLowerCase()==="stylesheet"||t.removeChild(a),a=m}}else t==="body"&&Di(e.ownerDocument.body);t=r}while(t);Ta(n)}function sh(e,n){var t=e;e=0;do{var l=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=l}while(t)}function Nu(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Nu(t),qt(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function F_(e,n,t,l){for(;e.nodeType===1;){var r=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Bn])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var a=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=vt(e.nextSibling),e===null)break}return null}function Q_(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=vt(e.nextSibling),e===null))return null;return e}function oh(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=vt(e.nextSibling),e===null))return null;return e}function Tu(e){return e.data==="$?"||e.data==="$~"}function Ru(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function P_(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var l=function(){n(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function vt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Mu=null;function ch(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return vt(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function uh(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function fh(e,n,t){switch(n=lo(t),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Di(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);qt(e)}var xt=new Map,dh=new Set;function ro(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fl=P.d;P.d={f:Z_,r:W_,D:J_,C:eg,L:ng,m:tg,X:rg,S:lg,M:ag};function Z_(){var e=fl.f(),n=Qs();return e||n}function W_(e){var n=Kn(e);n!==null&&n.tag===5&&n.type==="form"?Md(n):fl.r(e)}var wa=typeof document>"u"?null:document;function mh(e,n,t){var l=wa;if(l&&typeof n=="string"&&n){var r=gn(n);r='link[rel="'+e+'"][href="'+r+'"]',typeof t=="string"&&(r+='[crossorigin="'+t+'"]'),dh.has(r)||(dh.add(r),e={rel:e,crossOrigin:t,href:n},l.querySelector(r)===null&&(n=l.createElement("link"),Tn(n,"link",e),Ze(n),l.head.appendChild(n)))}}function J_(e){fl.D(e),mh("dns-prefetch",e,null)}function eg(e,n){fl.C(e,n),mh("preconnect",e,n)}function ng(e,n,t){fl.L(e,n,t);var l=wa;if(l&&e&&n){var r='link[rel="preload"][as="'+gn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(r+='[imagesrcset="'+gn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(r+='[imagesizes="'+gn(t.imageSizes)+'"]')):r+='[href="'+gn(e)+'"]';var a=r;switch(n){case"style":a=ka(e);break;case"script":a=Na(e)}xt.has(a)||(e=N({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),xt.set(a,e),l.querySelector(r)!==null||n==="style"&&l.querySelector(Oi(a))||n==="script"&&l.querySelector(Ci(a))||(n=l.createElement("link"),Tn(n,"link",e),Ze(n),l.head.appendChild(n)))}}function tg(e,n){fl.m(e,n);var t=wa;if(t&&e){var l=n&&typeof n.as=="string"?n.as:"script",r='link[rel="modulepreload"][as="'+gn(l)+'"][href="'+gn(e)+'"]',a=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Na(e)}if(!xt.has(a)&&(e=N({rel:"modulepreload",href:e},n),xt.set(a,e),t.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Ci(a)))return}l=t.createElement("link"),Tn(l,"link",e),Ze(l),t.head.appendChild(l)}}}function lg(e,n,t){fl.S(e,n,t);var l=wa;if(l&&e){var r=$t(l).hoistableStyles,a=ka(e);n=n||"default";var m=r.get(a);if(!m){var _={loading:0,preload:null};if(m=l.querySelector(Oi(a)))_.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":n},t),(t=xt.get(a))&&ju(e,t);var E=m=l.createElement("link");Ze(E),Tn(E,"link",e),E._p=new Promise(function(M,U){E.onload=M,E.onerror=U}),E.addEventListener("load",function(){_.loading|=1}),E.addEventListener("error",function(){_.loading|=2}),_.loading|=4,ao(m,n,l)}m={type:"stylesheet",instance:m,count:1,state:_},r.set(a,m)}}}function rg(e,n){fl.X(e,n);var t=wa;if(t&&e){var l=$t(t).hoistableScripts,r=Na(e),a=l.get(r);a||(a=t.querySelector(Ci(r)),a||(e=N({src:e,async:!0},n),(n=xt.get(r))&&Au(e,n),a=t.createElement("script"),Ze(a),Tn(a,"link",e),t.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},l.set(r,a))}}function ag(e,n){fl.M(e,n);var t=wa;if(t&&e){var l=$t(t).hoistableScripts,r=Na(e),a=l.get(r);a||(a=t.querySelector(Ci(r)),a||(e=N({src:e,async:!0,type:"module"},n),(n=xt.get(r))&&Au(e,n),a=t.createElement("script"),Ze(a),Tn(a,"link",e),t.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},l.set(r,a))}}function hh(e,n,t,l){var r=(r=Q.current)?ro(r):null;if(!r)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=ka(t.href),t=$t(r).hoistableStyles,l=t.get(n),l||(l={type:"style",instance:null,count:0,state:null},t.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=ka(t.href);var a=$t(r).hoistableStyles,m=a.get(e);if(m||(r=r.ownerDocument||r,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,m),(a=r.querySelector(Oi(e)))&&!a._p&&(m.instance=a,m.state.loading=5),xt.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},xt.set(e,t),a||ig(r,e,t,m.state))),n&&l===null)throw Error(s(528,""));return m}if(n&&l!==null)throw Error(s(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Na(t),t=$t(r).hoistableScripts,l=t.get(n),l||(l={type:"script",instance:null,count:0,state:null},t.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ka(e){return'href="'+gn(e)+'"'}function Oi(e){return'link[rel="stylesheet"]['+e+"]"}function ph(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function ig(e,n,t,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Tn(n,"link",t),Ze(n),e.head.appendChild(n))}function Na(e){return'[src="'+gn(e)+'"]'}function Ci(e){return"script[async]"+e}function _h(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+gn(t.href)+'"]');if(l)return n.instance=l,Ze(l),l;var r=N({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ze(l),Tn(l,"style",r),ao(l,t.precedence,e),n.instance=l;case"stylesheet":r=ka(t.href);var a=e.querySelector(Oi(r));if(a)return n.state.loading|=4,n.instance=a,Ze(a),a;l=ph(t),(r=xt.get(r))&&ju(l,r),a=(e.ownerDocument||e).createElement("link"),Ze(a);var m=a;return m._p=new Promise(function(_,E){m.onload=_,m.onerror=E}),Tn(a,"link",l),n.state.loading|=4,ao(a,t.precedence,e),n.instance=a;case"script":return a=Na(t.src),(r=e.querySelector(Ci(a)))?(n.instance=r,Ze(r),r):(l=t,(r=xt.get(a))&&(l=N({},t),Au(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),Ze(r),Tn(r,"link",l),e.head.appendChild(r),n.instance=r);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,ao(l,t.precedence,e));return n.instance}function ao(e,n,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,a=r,m=0;m<l.length;m++){var _=l[m];if(_.dataset.precedence===n)a=_;else if(a!==r)break}a?a.parentNode.insertBefore(e,a.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function ju(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Au(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var io=null;function gh(e,n,t){if(io===null){var l=new Map,r=io=new Map;r.set(t,l)}else r=io,l=r.get(t),l||(l=new Map,r.set(t,l));if(l.has(e))return l;for(l.set(e,null),t=t.getElementsByTagName(e),r=0;r<t.length;r++){var a=t[r];if(!(a[Bn]||a[tn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var m=a.getAttribute(n)||"";m=e+m;var _=l.get(m);_?_.push(a):l.set(m,[a])}}return l}function bh(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function sg(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function yh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function og(e,n,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=ka(l.href),a=n.querySelector(Oi(r));if(a){n=a._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=so.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=a,Ze(a);return}a=n.ownerDocument||n,l=ph(l),(r=xt.get(r))&&ju(l,r),a=a.createElement("link"),Ze(a);var m=a;m._p=new Promise(function(_,E){m.onload=_,m.onerror=E}),Tn(a,"link",l),t.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=so.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var Du=0;function cg(e,n){return e.stylesheets&&e.count===0&&co(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var l=setTimeout(function(){if(e.stylesheets&&co(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+n);0<e.imgBytes&&Du===0&&(Du=62500*q_());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&co(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Du?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function so(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)co(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var oo=null;function co(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,oo=new Map,n.forEach(ug,e),oo=null,so.call(e))}function ug(e,n){if(!(n.state.loading&4)){var t=oo.get(e);if(t)var l=t.get(null);else{t=new Map,oo.set(e,t);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<r.length;a++){var m=r[a];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(t.set(m.dataset.precedence,m),l=m)}l&&t.set(null,l)}r=n.instance,m=r.getAttribute("data-precedence"),a=t.get(m)||l,a===l&&t.set(null,r),t.set(m,r),this.count++,l=so.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),a?a.parentNode.insertBefore(r,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),n.state.loading|=4}}var zi={$$typeof:ce,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function fg(e,n,t,l,r,a,m,_,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ot(0),this.hiddenUpdates=Ot(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=a,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function vh(e,n,t,l,r,a,m,_,E,M,U,Y){return e=new fg(e,n,t,m,E,M,U,Y,_),n=1,a===!0&&(n|=24),a=Pn(3,null,null,n),e.current=a,a.stateNode=e,n=fc(),n.refCount++,e.pooledCache=n,n.refCount++,a.memoizedState={element:l,isDehydrated:t,cache:n},pc(a),e}function xh(e){return e?(e=la,e):la}function Sh(e,n,t,l,r,a){r=xh(r),l.context===null?l.context=r:l.pendingContext=r,l=Cl(n),l.payload={element:t},a=a===void 0?null:a,a!==null&&(l.callback=a),t=zl(e,l,n),t!==null&&(qn(t,e,n),mi(t,e,n))}function Eh(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ou(e,n){Eh(e,n),(e=e.alternate)&&Eh(e,n)}function wh(e){if(e.tag===13||e.tag===31){var n=yr(e,67108864);n!==null&&qn(n,e,67108864),Ou(e,67108864)}}function kh(e){if(e.tag===13||e.tag===31){var n=nt();n=xl(n);var t=yr(e,n);t!==null&&qn(t,e,n),Ou(e,n)}}var uo=!0;function dg(e,n,t,l){var r=C.T;C.T=null;var a=P.p;try{P.p=2,Cu(e,n,t,l)}finally{P.p=a,C.T=r}}function mg(e,n,t,l){var r=C.T;C.T=null;var a=P.p;try{P.p=8,Cu(e,n,t,l)}finally{P.p=a,C.T=r}}function Cu(e,n,t,l){if(uo){var r=zu(l);if(r===null)vu(e,n,l,fo,t),Th(e,l);else if(pg(r,e,n,t,l))l.stopPropagation();else if(Th(e,l),n&4&&-1<hg.indexOf(e)){for(;r!==null;){var a=Kn(r);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var m=xn(a.pendingLanes);if(m!==0){var _=a;for(_.pendingLanes|=2,_.entangledLanes|=2;m;){var E=1<<31-vn(m);_.entanglements[1]|=E,m&=~E}Gt(a),(Be&6)===0&&(Is=Rn()+500,Mi(0))}}break;case 31:case 13:_=yr(a,2),_!==null&&qn(_,a,2),Qs(),Ou(a,2)}if(a=zu(l),a===null&&vu(e,n,l,fo,t),a===r)break;r=a}r!==null&&l.stopPropagation()}else vu(e,n,l,null,t)}}function zu(e){return e=Fa(e),Bu(e)}var fo=null;function Bu(e){if(fo=null,e=Ln(e),e!==null){var n=h(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=p(n),e!==null)return e;e=null}else if(t===31){if(e=b(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return fo=e,null}function Nh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ur()){case Hr:return 2;case Va:return 8;case er:case it:return 32;case st:return 268435456;default:return 32}default:return 32}}var Lu=!1,Kl=null,Il=null,Fl=null,Bi=new Map,Li=new Map,Ql=[],hg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Th(e,n){switch(e){case"focusin":case"focusout":Kl=null;break;case"dragenter":case"dragleave":Il=null;break;case"mouseover":case"mouseout":Fl=null;break;case"pointerover":case"pointerout":Bi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Li.delete(n.pointerId)}}function Ui(e,n,t,l,r,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:l,nativeEvent:a,targetContainers:[r]},n!==null&&(n=Kn(n),n!==null&&wh(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function pg(e,n,t,l,r){switch(n){case"focusin":return Kl=Ui(Kl,e,n,t,l,r),!0;case"dragenter":return Il=Ui(Il,e,n,t,l,r),!0;case"mouseover":return Fl=Ui(Fl,e,n,t,l,r),!0;case"pointerover":var a=r.pointerId;return Bi.set(a,Ui(Bi.get(a)||null,e,n,t,l,r)),!0;case"gotpointercapture":return a=r.pointerId,Li.set(a,Ui(Li.get(a)||null,e,n,t,l,r)),!0}return!1}function Rh(e){var n=Ln(e.target);if(n!==null){var t=h(n);if(t!==null){if(n=t.tag,n===13){if(n=p(t),n!==null){e.blockedOn=n,qa(e.priority,function(){kh(t)});return}}else if(n===31){if(n=b(t),n!==null){e.blockedOn=n,qa(e.priority,function(){kh(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=zu(e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);Ia=l,t.target.dispatchEvent(l),Ia=null}else return n=Kn(t),n!==null&&wh(n),e.blockedOn=t,!1;n.shift()}return!0}function Mh(e,n,t){mo(e)&&t.delete(n)}function _g(){Lu=!1,Kl!==null&&mo(Kl)&&(Kl=null),Il!==null&&mo(Il)&&(Il=null),Fl!==null&&mo(Fl)&&(Fl=null),Bi.forEach(Mh),Li.forEach(Mh)}function ho(e,n){e.blockedOn===n&&(e.blockedOn=null,Lu||(Lu=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,_g)))}var po=null;function jh(e){po!==e&&(po=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){po===e&&(po=null);for(var n=0;n<e.length;n+=3){var t=e[n],l=e[n+1],r=e[n+2];if(typeof l!="function"){if(Bu(l||t)===null)continue;break}var a=Kn(t);a!==null&&(e.splice(n,3),n-=3,zc(a,{pending:!0,data:r,method:t.method,action:l},l,r))}}))}function Ta(e){function n(E){return ho(E,e)}Kl!==null&&ho(Kl,e),Il!==null&&ho(Il,e),Fl!==null&&ho(Fl,e),Bi.forEach(n),Li.forEach(n);for(var t=0;t<Ql.length;t++){var l=Ql[t];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ql.length&&(t=Ql[0],t.blockedOn===null);)Rh(t),t.blockedOn===null&&Ql.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var r=t[l],a=t[l+1],m=r[ln]||null;if(typeof a=="function")m||jh(t);else if(m){var _=null;if(a&&a.hasAttribute("formAction")){if(r=a,m=a[ln]||null)_=m.formAction;else if(Bu(r)!==null)continue}else _=m.action;typeof _=="function"?t[l+1]=_:(t.splice(l,3),l-=3),jh(t)}}}function Ah(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(m){return r=m})},focusReset:"manual",scroll:"manual"})}function n(){r!==null&&(r(),r=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),r!==null&&(r(),r=null)}}}function Uu(e){this._internalRoot=e}_o.prototype.render=Uu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var t=n.current,l=nt();Sh(t,l,e,n,null,null)},_o.prototype.unmount=Uu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Sh(e.current,2,null,e,null,null),Qs(),n[ot]=null}};function _o(e){this._internalRoot=e}_o.prototype.unstable_scheduleHydration=function(e){if(e){var n=un();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Ql.length&&n!==0&&n<Ql[t].priority;t++);Ql.splice(t,0,e),t===0&&Rh(e)}};var Dh=i.version;if(Dh!=="19.2.7")throw Error(s(527,Dh,"19.2.7"));P.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var gg={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!go.isDisabled&&go.supportsFiber)try{nr=go.inject(gg),pn=go}catch{}}return Gi.createRoot=function(e,n){if(!c(e))throw Error(s(299));var t=!1,l="",r=Hd,a=Gd,m=Vd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(a=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),n=vh(e,1,!1,null,null,t,l,null,r,a,m,Ah),e[ot]=n.current,yu(e),new Uu(n)},Gi.hydrateRoot=function(e,n,t){if(!c(e))throw Error(s(299));var l=!1,r="",a=Hd,m=Gd,_=Vd,E=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(m=t.onCaughtError),t.onRecoverableError!==void 0&&(_=t.onRecoverableError),t.formState!==void 0&&(E=t.formState)),n=vh(e,1,!0,n,t??null,l,r,E,a,m,_,Ah),n.context=xh(null),t=n.current,l=nt(),l=xl(l),r=Cl(l),r.callback=null,zl(t,r,l),t=l,n.current.lanes=t,tr(n,t),Gt(n),e[ot]=n.current,yu(e),new _o(n)},Gi.version="19.2.7",Gi}var Yh;function Mg(){if(Yh)return Vu.exports;Yh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(i){console.error(i)}}return o(),Vu.exports=Rg(),Vu.exports}var jg=Mg();const Ag=Ap(jg),qh=o=>{let i;const u=new Set,s=(y,x)=>{const N=typeof y=="function"?y(i):y;if(!Object.is(N,i)){const j=i;i=x??(typeof N!="object"||N===null)?N:Object.assign({},i,N),u.forEach(I=>I(i,j))}},c=()=>i,b={setState:s,getState:c,getInitialState:()=>v,subscribe:y=>(u.add(y),()=>u.delete(y))},v=i=o(s,c,b);return b},Dg=(o=>o?qh(o):qh),Og=o=>o;function Cg(o,i=Og){const u=Ki.useSyncExternalStore(o.subscribe,Ki.useCallback(()=>i(o.getState()),[o,i]),Ki.useCallback(()=>i(o.getInitialState()),[o,i]));return Ki.useDebugValue(u),u}const $h=o=>{const i=Dg(o),u=s=>Cg(i,s);return Object.assign(u,i),u},zg=(o=>o?$h(o):$h);function Bg(){const o=new Uint8Array(16);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(o);else for(let u=0;u<o.length;u+=1)o[u]=Math.floor(Math.random()*256);let i="";for(const u of o)i+=u.toString(16).padStart(2,"0");return i}const mf="pkp.user",hf="pkp.savedDevices",pf="pkp.ideDrafts",_f="pkp.ideSettings",Fi="Prototype Version 0.6.7";function ko(o){try{const i=localStorage.getItem(o);return i?JSON.parse(i):null}catch{return null}}function No(o,i){try{localStorage.setItem(o,JSON.stringify(i))}catch{}}function Lg(){const o=ko(mf);return o&&typeof o.username=="string"&&typeof o.userID=="string"?o:null}function Xh(o){No(mf,o)}function gf(){return ko(hf)??[]}function To(o){No(hf,o)}function Ug(){To([])}function Hg(){try{localStorage.removeItem(mf),localStorage.removeItem(hf),localStorage.removeItem(pf),localStorage.removeItem(_f)}catch{}}function Xu(){var o;return((o=ko(pf))==null?void 0:o.filter(i=>i.path&&typeof i.content=="string"))??[]}function Ku(o){No(pf,o)}function Kh(){const o=ko(_f)??{};return{clearTerminalOnRun:!!o.clearTerminalOnRun,simplifiedErrors:o.simplifiedErrors!==!1}}function Gg(o){No(_f,o)}function Iu(o){const i=gf(),u=i.findIndex(s=>s.deviceID===o.deviceID);return u>=0?i[u]=o:i.push(o),To(i),i}function Vg(o){const i=gf().filter(u=>u.deviceID!==o);return To(i),i}const rf="b8e06067-62ad-41ba-9231-206ae80ab551",Yg="f897177b-aee8-4767-8ecc-cc694fd5fce0",qg="f897177b-aee8-4767-8ecc-cc694fd5fce1",Fu=20,$g=12,Xg=new TextEncoder,Kg=new TextDecoder;function Ig(o){return new Promise(i=>setTimeout(i,o))}function Ro(){return typeof navigator<"u"&&"bluetooth"in navigator}function af(o){return o?o.startsWith("PicoW-")?o.slice(6):o:"Pico"}async function Fg(){if(!Ro())throw new Error("Web Bluetooth er ikke tilgængelig i denne browser.");return navigator.bluetooth.requestDevice({filters:[{services:[rf]},{namePrefix:"PicoW-"}],optionalServices:[rf]})}async function Dp(){if(!Ro()||!navigator.bluetooth.getDevices)return[];try{return await navigator.bluetooth.getDevices()}catch{return[]}}class Qg{constructor(){de(this,"device",null);de(this,"writeChar",null);de(this,"notifyChar",null);de(this,"buffer","");de(this,"writeQueue",Promise.resolve());de(this,"disconnectNotified",!1);de(this,"onLine",()=>{});de(this,"onDisconnect",()=>{});de(this,"handleNotification",i=>{const u=i.target;if(!(u!=null&&u.value))return;this.buffer+=Kg.decode(u.value.buffer);let s=this.buffer.indexOf(`
`);for(;s>=0;){const c=this.buffer.slice(0,s).trim();this.buffer=this.buffer.slice(s+1),c&&this.onLine(c),s=this.buffer.indexOf(`
`)}});de(this,"handleDisconnected",()=>{var i;this.disconnectNotified||(this.disconnectNotified=!0,(i=this.device)==null||i.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.writeChar=null,this.notifyChar=null,this.onDisconnect())})}get connected(){var i,u;return!!((u=(i=this.device)==null?void 0:i.gatt)!=null&&u.connected)}async connect(i){var c;this.device&&this.device!==i&&this.device.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.device=i,this.buffer="",this.disconnectNotified=!1,i.removeEventListener("gattserverdisconnected",this.handleDisconnected),i.addEventListener("gattserverdisconnected",this.handleDisconnected);const u=await((c=i.gatt)==null?void 0:c.connect());if(!u)throw new Error("Kunne ikke åbne Bluetooth-forbindelsen.");const s=await u.getPrimaryService(rf);this.writeChar=await s.getCharacteristic(Yg),this.notifyChar=await s.getCharacteristic(qg),await this.notifyChar.startNotifications(),this.notifyChar.addEventListener("characteristicvaluechanged",this.handleNotification)}writeLine(i){const u=this.writeQueue.then(()=>this.doWrite(i));return this.writeQueue=u.catch(()=>{}),u}async doWrite(i){if(!this.writeChar)throw new Error("Ingen forbindelse.");const u=Xg.encode(`${i}
`),c=this.writeChar.properties.writeWithoutResponse&&typeof this.writeChar.writeValueWithoutResponse=="function"?this.writeChar.writeValueWithoutResponse.bind(this.writeChar):this.writeChar.writeValue.bind(this.writeChar);for(let h=0;h<u.length;h+=Fu){const p=u.slice(h,h+Fu);await c(p),h+Fu<u.length&&await Ig($g)}}disconnect(){var u;const i=this.device;(u=i==null?void 0:i.gatt)!=null&&u.connected?i.gatt.disconnect():this.handleDisconnected()}}class Pg{constructor(i,u){de(this,"send");de(this,"onMessage");de(this,"inActive",!1);de(this,"inExpectedTotal",0);de(this,"inStreamId",0);de(this,"inParts",new Map);de(this,"inProgress",null);de(this,"outPendingLines",null);de(this,"outWaitingAck",!1);de(this,"outStreamId",0);de(this,"outNextStreamId",1);de(this,"outCache",new Map);de(this,"outProgress",null);de(this,"outResolve",null);de(this,"outReject",null);this.send=i,this.onMessage=u}reset(){this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear(),this.inProgress=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outStreamId=0,this.outCache.clear(),this.outProgress=null,this.outResolve=null,this.outReject=null}handleLine(i){var s;if(i.startsWith("prep,")){const c=i.split(","),h=c.length>=2&&/^\d+$/.test(c[1])?parseInt(c[1],10):null,p=c.length>=3&&/^\d+$/.test(c[2])?parseInt(c[2],10):0;h!==null&&h>0&&(this.inActive=!0,this.inExpectedTotal=h,this.inStreamId=p,this.inParts.clear(),this.send(p>0?`ack:prep,${p}`:"ack:prep"));return}if(i==="ack:prep"||i===`ack:prep,${this.outStreamId}`){this.flushOutbound();return}if(i.startsWith("miss,")){const c=i.split(",");if(c.length>=3&&/^\d+$/.test(c[1])&&/^\d+$/.test(c[2])){const h=parseInt(c[1],10),p=parseInt(c[2],10),b=this.outCache.get(p);h===this.outStreamId&&b&&this.send(b)}return}const u=this.parseNumbered(i);if(u){const{idx:c,payload:h}=u;if(!this.inActive){this.onMessage(h);return}this.inParts.has(c)||(this.inParts.set(c,h),(s=this.inProgress)==null||s.call(this,this.inParts.size,this.inExpectedTotal));let p=0;for(let b=1;b<=this.inExpectedTotal;b+=1)if(!this.inParts.has(b)){p=b;break}if(p>0&&this.inStreamId>0&&c>p&&this.send(`miss,${this.inStreamId},${p}`),this.inParts.size>=this.inExpectedTotal){for(let b=1;b<=this.inExpectedTotal;b+=1){const v=this.inParts.get(b);v!==void 0&&this.onMessage(v)}this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear()}return}this.onMessage(i)}setInboundProgress(i){this.inProgress=i}async sendReliable(i,u){if(this.outPendingLines!==null||this.outWaitingAck)throw new Error("Reliable stream is already sending.");const s=i.length===0?[""]:i;this.outPendingLines=[...s],this.outWaitingAck=!0,this.outProgress=u??null,this.outStreamId=this.outNextStreamId,this.outNextStreamId+=1,this.outCache.clear();const c=new Promise((h,p)=>{this.outResolve=h,this.outReject=p});try{await this.send(`prep,${s.length},${this.outStreamId}`)}catch(h){throw this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null,h}await c}async flushOutbound(){var i,u,s,c;if(!this.outWaitingAck||this.outPendingLines===null){this.outWaitingAck=!1,this.outProgress=null,(i=this.outResolve)==null||i.call(this),this.outResolve=null,this.outReject=null;return}try{const h=this.outPendingLines.length;for(let p=0;p<h;p+=1){const b=this.outPendingLines[p],v=`${p+1}-${b}`;this.outCache.set(p+1,v),await this.send(v),(u=this.outProgress)==null||u.call(this,p+1,h,b)}(s=this.outResolve)==null||s.call(this)}catch(h){(c=this.outReject)==null||c.call(this,h)}finally{this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null}}parseNumbered(i){const u=i.indexOf("-");if(u<=0)return null;const s=i.slice(0,u);if(!/^\d+$/.test(s))return null;const c=parseInt(s,10);return c<1?null:{idx:c,payload:i.slice(u+1)}}}const za=11,Qi=31,Zg=2,Wg=60,Da=4,Oa=40;function Jg(o,i){return Math.max(14,Math.min(56,Math.min(o,i)*.05))}function Op(o,i,u=za,s=Qi){const c=Jg(o,i),h=Math.max(1,o-2*c),p=Math.max(1,i-2*c);return{areaW:o,areaH:i,cols:u,rows:s,margin:c,stepX:h/Math.max(1,u-1),stepY:p/Math.max(1,s-1)}}function Cp(o,i){return i.margin+o/2*i.stepX}function zp(o,i){const u=i.margin+o/2*i.stepY;return i.areaH-u}function Ii(o,i){return o.centerX2===null||o.centerY2===null||o.spanX===null||o.spanY===null?null:{cx:Cp(o.centerX2,i),cy:zp(o.centerY2,i),width:o.spanX*i.stepX,height:o.spanY*i.stepY}}function eb(o){const i=[];for(let u=0;u<o.cols;u+=1)for(let s=0;s<o.rows;s+=1)i.push({x:o.margin+u*o.stepX,y:o.areaH-(o.margin+s*o.stepY)});return i}function yo(o,i,u,s,c){const h=(v,y,x,N)=>{const j=y%2,I=N*2;let F=j,le=1/0;for(let G=j;G<=I;G+=2){const q=Math.abs(x(G)-v);q<le&&(le=q,F=G)}return Math.max(y,Math.min(I-y,F))},p=h(o,u,v=>Cp(v,c),c.cols-1),b=h(i,s,v=>zp(v,c),c.rows-1);return{centerX2:p,centerY2:b}}const Cr=6e3,nb=15,Eo=[32,64,128,192],tb=Cr*10,lb=3500,rb=8e3,ab=2,ib=Cr,sb=Cr*8;function Qu(o){return new Promise(i=>setTimeout(i,o))}function Ra(o){if(o!=null&&o.aborted)throw new DOMException("BLE file read cancelled","AbortError")}function Ih(o){return o instanceof DOMException&&o.name==="AbortError"}function Zl(o){return o.replace(/[\r\n,]/g," ").trim()}class ob{constructor(i={}){de(this,"transport",new Qg);de(this,"stream");de(this,"events");de(this,"waiters",[]);de(this,"collectingLayout",!1);de(this,"layoutBuffer",[]);de(this,"layoutResolve",null);de(this,"collectingLines",!1);de(this,"lineBuffer",[]);de(this,"lineResolve",null);de(this,"lineReject",null);de(this,"lineCollectId",0);de(this,"controlPumpActive",!1);de(this,"pendingButtons",[]);de(this,"pendingSliders",new Map);de(this,"pendingToggles",new Map);de(this,"expectingDisconnect",!1);de(this,"disconnectMessage",null);de(this,"busy",!1);de(this,"fsCapabilities",null);this.events=i,this.stream=new Pg(u=>this.transport.writeLine(u),u=>this.onDeviceMessage(u)),this.transport.onLine=u=>this.stream.handleLine(u),this.transport.onDisconnect=()=>this.handleDisconnect()}get device(){return this.transport.device}get deviceName(){var i;return af((i=this.transport.device)==null?void 0:i.name)}get connected(){return this.transport.connected}setBusy(i){if(this.busy=i,i){this.pendingButtons=[],this.pendingSliders.clear(),this.pendingToggles.clear();return}this.pumpControls()}log(i,u){var s,c;(c=(s=this.events).onLog)==null||c.call(s,i,u)}progress(i,u){var s,c;(c=(s=this.events).onProgress)==null||c.call(s,i,u)}onDeviceMessage(i){var s,c;if(i==="disconnect"||i==="disconnect_private"){const h=i==="disconnect_private"?"Du blev afbrudt, fordi enheden er privat, og andre brugere ikke må forbinde.":"Enheden afbrød forbindelsen.";this.disconnectMessage=h,this.log("warning",h),this.expectingDisconnect=!0,this.transport.disconnect();return}if(this.collectingLines){if(i==="__END__"){const h=this.lineBuffer;this.lineBuffer=[],this.collectingLines=!1,(s=this.lineResolve)==null||s.call(this,h),this.lineResolve=null;return}this.lineBuffer.push(i);return}if(this.collectingLayout){if(i==="__END__"){const h=this.layoutBuffer;this.layoutBuffer=[],this.collectingLayout=!1,(c=this.layoutResolve)==null||c.call(this,h),this.layoutResolve=null;return}!i.startsWith("ACK")&&!i.startsWith("ERR")&&!i.startsWith("#VERSION")?this.layoutBuffer.push(i):i.startsWith("#VERSION")&&this.layoutBuffer.push(i);return}i.startsWith("ERR")?this.log("error",i):i.startsWith("radar,")?this.handleRadarLine(i):i.startsWith("text,")?this.handleTextLine(i):i.startsWith("toggle_state,")?this.handleToggleStateLine(i):i.startsWith("ACK")||i==="LAYOUT_SAVED"||i.startsWith("READY")?this.log("success",i):this.log("info",`rx: ${i}`);const u=this.waiters.findIndex(h=>h.match(i));if(u>=0){const h=this.waiters[u];this.waiters.splice(u,1),clearTimeout(h.timer),h.resolve(i)}}waitFor(i,u,s){return new Promise((c,h)=>{const p=setTimeout(()=>{const b=this.waiters.findIndex(v=>v.timer===p);b>=0&&this.waiters.splice(b,1),h(new Error(`Timeout: ${s}`))},u);this.waiters.push({match:i,resolve:c,reject:h,timer:p})})}async collectLines(i,u,s,c,h){Ra(c);const p=this.lineCollectId+1;this.lineCollectId=p,this.collectingLines=!0,this.lineBuffer=[],this.stream.setInboundProgress(h??null);const b=new Promise((v,y)=>{let x=!1;const N=()=>this.lineCollectId===p,j=()=>{x=!0,N()&&(this.lineReject=null,this.stream.setInboundProgress(null)),c==null||c.removeEventListener("abort",F)},I=q=>{x||(clearTimeout(le),N()&&(this.collectingLines=!1,this.lineBuffer=[],this.lineResolve=null),j(),y(q))},F=()=>{I(new DOMException("BLE file read cancelled","AbortError"))},le=setTimeout(()=>{N()&&I(new Error(`Timeout: ${s}`))},u);this.lineResolve=v,this.lineReject=I;const G=this.lineResolve;this.lineResolve=q=>{N()&&(clearTimeout(le),j(),G==null||G(q))},c==null||c.addEventListener("abort",F,{once:!0})});return await this.transport.writeLine(i),b}async exchange(i,u,s,c=3){let h;for(let p=1;p<=c;p+=1)try{return await this.transport.writeLine(i),await this.waitFor(u,Cr,s)}catch(b){h=b,this.log("warning",`${s}: forsøg ${p}/${c} mislykkedes`)}throw h instanceof Error?h:new Error(`Failed: ${s}`)}async connect(i){this.expectingDisconnect=!1,this.stream.reset(),this.progress(5,"Forbinder til Bluetooth..."),await this.transport.connect(i)}async runHandshake(i){var ce;await Qu(350),this.progress(18,"Klargør forbindelse..."),this.progress(26,"Sender HELLO..."),await this.exchange("HELLO",oe=>oe==="ACK:HELLO","HELLO"),this.progress(34,"Forbindelse bekræftet"),this.progress(44,"Spørger om ejerskab...");const u=await this.exchange("who_are_you",oe=>oe==="unowned"||oe.startsWith("owned,"),"who_are_you");if(this.progress(56,"Ejerskab modtaget"),u==="unowned")return{kind:"unowned"};const s=u.split(","),c=s[1]??"",h=s[2]!==void 0&&parseInt(s[2],10)||0,p=s[3]!==void 0?parseInt(s[3],10)===1:!0,b=s[4]!==void 0?parseInt(s[4],10)===1:!1,v=s.length>=7,y=v?parseInt(s[5]??"0",10)===1:b,x=((ce=s[v?6:5])==null?void 0:ce.trim())||void 0;await this.exchange("ACK:ownership",oe=>oe==="READY:permission","ACK:ownership",1),this.progress(66,"Anmoder om adgang...");const N=await this.exchange(`request_permission,${i.userID},${Zl(i.username)}`,oe=>oe.startsWith("perm,"),"request_permission");this.progress(76,"Adgang vurderet");const j=N.split(",").filter(oe=>/^\d+$/.test(oe)),I=j.length>=1?parseInt(j[0]??"0",10):0,F=j.length>=2?parseInt(j[1]??"0",10):0,le=j.length>=3?parseInt(j[2]??"0",10):F;if(I===0)return this.expectingDisconnect=!0,this.disconnectMessage="Du kan ikke forbinde, fordi enheden er privat, og andre brugere ikke må forbinde.",{kind:"denied",ownerName:x,canOthersConnect:p};const G=i.userID===c,q=F===1||G,se=le===1||G;return await this.transport.writeLine("ACK:permission"),{kind:"owned",ownerID:c,ownerName:x,iconID:h,canEdit:q,canEditCode:se,isOwnedByMe:G,canOthersConnect:p,canOthersEdit:b,canOthersEditCode:y}}async create(i,u,s,c,h,p,b){const v=s?1:0,y=s&&c?1:0,x=s&&h?1:0;await this.exchange(`create,${i.userID},${Zl(i.username)},${u},${v},${y},${x},${p},${b}`,N=>N==="ACK:create","create")}async updateDeviceSettings(i,u,s,c,h,p,b){const v=u?1:0,y=u&&s?1:0,x=u&&c?1:0;await this.exchange(`settings_update,${i},${v},${y},${x},${h},${p},${Zl(b??"")}`,N=>N==="ACK:settings_update","settings_update",3)}async requestLayout(){this.progress(84,"Henter kontrolpanel..."),this.collectingLayout=!0,this.layoutBuffer=[];const i=new Promise((s,c)=>{this.layoutResolve=s;const h=setTimeout(()=>{this.collectingLayout&&(this.collectingLayout=!1,this.layoutResolve=null,c(new Error("Timeout: layout")))},Cr*2),p=this.layoutResolve;this.layoutResolve=b=>{clearTimeout(h),p==null||p(b)}});await this.transport.writeLine("request"),this.progress(92,"Modtager kontrolpanel...");const u=await i;return this.progress(100,"Klar"),u}async saveLayout(i){await this.exchange("update",c=>c==="ACK:update","update",3).catch(()=>{this.log("warning","ACK:update udeblev (fortsætter).")});const u=i.map(c=>{const h=b=>b===null?"n":String(b),p=`update,${c.type},${c.name},${h(c.centerX2)},${h(c.centerY2)},${h(c.spanX)},${h(c.spanY)},${c.rotation}`;return c.type==="slider"?`${p},${c.sliderMin??0},${c.sliderMax??100},${c.sliderRecenter??"none"}`:c.type==="toggle"?`${p},${c.toggleInitial?1:0}`:c.type==="radar"?[p,c.radarMinAngle??0,c.radarMaxAngle??180,c.radarMaxDistance??200,c.radarFadeMs??1200].join(","):p});u.push("__END__");const s=this.waitFor(c=>c==="LAYOUT_SAVED",Cr*2,"LAYOUT_SAVED");await this.stream.sendReliable(u),await s}async listFiles(i="/"){return(await this.collectLines(`fs_list,${Zl(i)}`,Cr*3,"fs_list")).filter(s=>s.startsWith("fs_entry,")).map(s=>{const[,c,h,p]=s.split(","),b=c==="file"||c==="dir"?c:"unknown",v=parseInt(p??"",10),y=h||"/";return{name:y.split("/").filter(Boolean).pop()??y,path:y,type:b,...Number.isFinite(v)&&v>=0?{size:v}:{}}})}handleRadarLine(i){var p,b,v;const u=i.split(",");if(u.length<4)return;const s=(p=u[1])==null?void 0:p.trim(),c=parseFloat(u[2]??""),h=parseFloat(u[3]??"");!s||!Number.isFinite(c)||!Number.isFinite(h)||((v=(b=this.events).onRadar)==null||v.call(b,s,c,h),this.log("info",`rx: ${i}`))}handleTextLine(i){var b,v;const u=i.indexOf(","),s=u>=0?i.indexOf(",",u+1):-1;if(u<0||s<0)return;const c=i.slice(u+1,s),h=i.slice(s+1),p=c==null?void 0:c.trim();p&&((v=(b=this.events).onText)==null||v.call(b,p,h),this.log("info",`rx: ${i}`))}handleToggleStateLine(i){var h,p,b;const u=i.split(",");if(u.length<3)return;const s=(h=u[1])==null?void 0:h.trim(),c=parseInt(u[2]??"",10);!s||!Number.isFinite(c)||((b=(p=this.events).onToggleState)==null||b.call(p,s,c===1),this.log("info",`rx: ${i}`))}async readText(i,u,s){u==null||u(4,"Validerer Picoens Bluetooth-filsystem...");const c=await this.getFilesystemCapabilities(s);if(c.streamRead)try{return await this.readTextStream(i,c,u,s)}catch(h){if(s!=null&&s.aborted||Ih(h)||!c.pageRead)throw h;this.log("warning",h instanceof Error?`fs_read_stream fejlede; bruger paged read: ${h.message}`:"fs_read_stream fejlede; bruger paged read")}return this.readTextPaged(i,u,s)}async getFilesystemCapabilities(i){if(this.fsCapabilities)return this.fsCapabilities;const u=await this.collectLines("fs_capabilities",ib,"fs_capabilities",i),s=u.find(x=>x.startsWith("ERR"));if(s)throw new Error(s);const c=u.find(x=>x.startsWith("fs_capabilities,"));if(!c)throw new Error("Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.");const h=c.split(","),p=new Map;for(let x=1;x<h.length-1;x+=2)p.set(h[x],h[x+1]);const b=parseInt(p.get("max_page")??"",10),v=parseInt(p.get("stream_chunk")??"",10),y={version:p.get("version")||void 0,pageRead:p.get("page_read")==="1",maxPageSize:Number.isFinite(b)&&b>0?b:32,streamRead:p.get("stream_read")==="1",streamChunkSize:Number.isFinite(v)&&v>0?v:128};if(!y.pageRead&&!y.streamRead)throw new Error("Picoens Bluetooth-runtime meldte, at file-read ikke er understøttet.");return this.fsCapabilities=y,y}async readTextPaged(i,u,s){const c=await this.getFilesystemCapabilities(s);let h=0,p=cb(c.maxPageSize),b=0,v=null,y="";const x=`Indlæser ${Pu(i)}...`;Ra(s),u==null||u(5,x);for(let N=0;N<512;N+=1){Ra(s),b===0&&(u==null||u(7,x));const I=await this.readPageWithRetry(i,b,h,p,s),F=I.lines;h=I.nextPageSizeIndex,p=I.maxPageSizeIndex,Ra(s);const le=F.find(W=>W.startsWith("ERR"));if(le)throw new Error(le);const G=F.find(W=>W.startsWith("fs_page,"));if(!G)throw new Error("ERR: fs_read_page missing data");const[,q,se,ce,oe=""]=G.split(",",5);if(q!==i)throw new Error("ERR: fs_read_page stale data");const he=parseInt(se??"",10),ke=parseInt(ce??"",10);if(!Number.isFinite(he)||he!==b||!Number.isFinite(ke))throw new Error("ERR: fs_read_page invalid data");v=ke,y+=oe,b+=Math.floor(oe.length/2);const ee=v>0?8+Math.min(87,Math.round(b/v*87)):95;if(u==null||u(ee,x),b>=v||oe.length===0)return u==null||u(100,"Fil indlæst fra Pico"),new TextDecoder().decode(Qh(y))}throw new Error("ERR: fs_read_page too many pages")}async readPageWithRetry(i,u,s,c,h){let p,b=Math.min(s,c);for(;b>=0;){const v=Eo[b],y=b===0?ab:1,x=b===0?rb:lb;for(let N=1;N<=y;N+=1){Ra(h);try{return{lines:await this.collectLines(`fs_read_page,${Zl(i)},${u},${v}`,x,`fs_read_page ${u}`,h),nextPageSizeIndex:Math.min(b+1,c),maxPageSizeIndex:c}}catch(j){if(h!=null&&h.aborted||Ih(j))throw j;if(p=j,N<y||b>0){const F=b>0&&N>=y?Eo[b-1]:v;this.log("warning",`fs_read_page ${u} (${v} bytes) fejlede; prøver ${F} bytes`),await Qu(80+N*80)}}}if(b===0)break;c=Math.max(0,b-1),b=c}throw p instanceof Error?p:new Error(`Timeout: fs_read_page ${u}`)}async readTextStream(i,u,s,c){const h=`Indlæser ${Pu(i)}...`,p=Math.max(16,Math.min(192,u.streamChunkSize||128));s==null||s(5,h);const b=await this.collectLines(`fs_read_stream,${Zl(i)},${p}`,sb,`fs_read_stream ${i}`,c,(ee,W)=>{const ve=8+Math.round(Math.min(ee,W)/Math.max(1,W)*87);s==null||s(Math.min(95,ve),h)});Ra(c);const v=b.find(ee=>ee.startsWith("ERR"));if(v)throw new Error(v);const y=b.find(ee=>ee.startsWith("fs_stream_begin,")),x=b.find(ee=>ee.startsWith("fs_stream_end,"));if(!y||!x)throw new Error("ERR: fs_read_stream missing metadata");const[,N,j]=y.split(",",4),[,I,F,le]=x.split(",",4),G=parseInt(j??"",10),q=parseInt(F??"",10),se=parseInt(le??"",10);if(N!==i||I!==i||!Number.isFinite(G)||G!==q||!Number.isFinite(se))throw new Error("ERR: fs_read_stream invalid metadata");let ce=0,oe="";for(const ee of b){if(!ee.startsWith("fs_stream_chunk,"))continue;const[,W,ve=""]=ee.split(",",3),be=parseInt(W??"",10);if(!Number.isFinite(be)||be!==ce||ve.length%2!==0)throw new Error("ERR: fs_read_stream invalid chunk");oe+=ve,ce+=Math.floor(ve.length/2)}if(ce!==G)throw new Error("ERR: fs_read_stream size mismatch");const he=Qh(oe);if(Fh(he)!==se)throw new Error("ERR: fs_read_stream checksum mismatch");return s==null||s(100,"Fil indlæst fra Pico"),new TextDecoder().decode(he)}async writeText(i,u,s){s==null||s(5,"Klargør BLE-overførsel..."),await this.exchange(`fs_write_begin,${Zl(i)}`,x=>x==="ACK:fs_write_begin","fs_write_begin",2),s==null||s(18,"Pico er klar til filen...");const c=new TextEncoder().encode(u),h=[...c].map(x=>x.toString(16).padStart(2,"0")).join(""),p=[];for(let x=0;x<h.length;x+=160)p.push(`fs_write_chunk,${h.slice(x,x+160)}`);p.push("fs_write_end");const b=Fh(c),v=this.waitFor(x=>x==="ACK:fs_write_done"||x.startsWith("ACK:fs_write_done,")||x.startsWith("ERR"),tb,"fs_write_done");s==null||s(c.length===0?85:18,c.length===0?"Sender tom fil via Bluetooth...":`Sender 0/${c.length} bytes via Bluetooth...`),await this.stream.sendReliable(p,(x,N,j)=>{if(!j.startsWith("fs_write_chunk,"))return;const I=Math.min(c.length,x*80),F=18+Math.round(x/Math.max(1,N-1)*67);s==null||s(Math.min(85,F),`Sender ${I}/${c.length} bytes via Bluetooth...`)}),s==null||s(90,"Verificerer BLE-fil...");const y=await v;if(y.startsWith("ERR"))throw new Error(y);if(y.startsWith("ACK:fs_write_done,")){const[,x,N]=y.split(",",3),j=parseInt(x??"",10),I=parseInt(N??"",10);if(j!==c.length||I!==b)throw new Error(`ERR: BLE-verificering fejlede for ${Pu(i)}.`)}s==null||s(100,"Gemt på Pico")}async deleteFile(i){const u=await this.exchange(`fs_delete,${Zl(i)}`,s=>s==="ACK:fs_delete"||s.startsWith("ERR"),"fs_delete",2);if(u.startsWith("ERR"))throw new Error(u)}async restart(){await this.exchange("restart",i=>i==="ACK:restart"||i.startsWith("ERR"),"restart",1).catch(()=>{}),this.expectingDisconnect=!0}enqueueButton(i){this.busy||(this.pendingButtons.push(`button,${i}`),this.pumpControls())}enqueueSlider(i,u){this.busy||(this.pendingSliders.set(i,`slider,${i}:${u}`),this.pumpControls())}enqueueToggle(i,u){this.busy||(this.pendingToggles.set(i,`toggle,${i}:${u?1:0}`),this.pumpControls())}pumpControls(){this.controlPumpActive||this.busy||!this.transport.connected||(this.controlPumpActive=!0,this.drainControls())}async drainControls(){try{for(;!this.busy&&this.transport.connected;){const i=this.nextControlLine();if(!i)break;await this.transport.writeLine(i),this.log("info",`tx: ${i}`),await Qu(nb)}}catch(i){this.log("error",i instanceof Error?i.message:"Kunne ikke sende kommando."),this.handleDisconnect()}finally{this.controlPumpActive=!1,!this.busy&&this.transport.connected&&this.hasPendingControls()&&this.pumpControls()}}nextControlLine(){const i=this.pendingButtons.shift();if(i)return i;const u=this.pendingSliders.entries().next();if(!u.done){const[c,h]=u.value;return this.pendingSliders.delete(c),h}const s=this.pendingToggles.entries().next();if(!s.done){const[c,h]=s.value;return this.pendingToggles.delete(c),h}return null}hasPendingControls(){return this.pendingButtons.length>0||this.pendingSliders.size>0||this.pendingToggles.size>0}async disconnect(){if(!this.transport.connected){this.handleDisconnect();return}this.expectingDisconnect=!0;try{await this.exchange("disconnect",i=>i==="ACK:disconnect","disconnect",1)}catch{}this.transport.disconnect()}handleDisconnect(){var u,s,c;for(const h of this.waiters)clearTimeout(h.timer),h.reject(new Error("Forbindelsen blev afbrudt."));this.waiters=[],this.collectingLayout=!1,this.layoutResolve=null,(u=this.lineReject)==null||u.call(this,new Error("Forbindelsen blev afbrudt.")),this.collectingLines=!1,this.lineResolve=null,this.lineReject=null,this.fsCapabilities=null,this.stream.reset();const i=this.disconnectMessage??void 0;this.disconnectMessage=null,(c=(s=this.events).onDisconnect)==null||c.call(s,i)}}function cb(o){let i=0;for(let u=0;u<Eo.length;u+=1)Eo[u]<=o&&(i=u);return i}function Pu(o){return o.replace(/\\/g,"/").replace(/^\/+/,"")||o}function Fh(o){let i=0;for(const u of o)i=i+u>>>0;return i}function Qh(o){const i=new Uint8Array(Math.floor(o.length/2));for(let u=0;u<i.length;u+=1)i[u]=parseInt(o.slice(u*2,u*2+2),16);return i}function Ph(o){const i=(u,s)=>Number.isFinite(u)?Math.max(Zg,Math.min(Wg,u)):s;for(const u of o){const s=u.trim();if(s.startsWith("#GRID,")){const c=s.split(","),h=i(parseInt(c[1],10),za),p=i(parseInt(c[2],10),Qi);return{cols:h,rows:p}}}return{cols:za,rows:Qi}}function Zh(o){const i=new Map;for(const u of o){const s=u.trim();if(!s||s.startsWith("#VERSION")||s==="__END__")continue;const c=s.split(",");if(c.length<7)continue;const[h,p,b,v,y,x,N,j,I,F,le]=c;if(h!=="button"&&h!=="slider"&&h!=="toggle"&&h!=="radar"&&h!=="text"||i.has(p))continue;const G=be=>{if(be==="n")return null;const ye=parseInt(be,10);return Number.isNaN(ye)?null:ye},q=parseInt(N,10)||0,se=j!==void 0?parseInt(j,10):0,ce=I!==void 0?parseInt(I,10):100,oe=["none","bottom","middle","top"].includes(F??"")?F:"none",he=j!==void 0?parseInt(j,10)===1:!1,ke=j!==void 0?parseFloat(j):0,ee=I!==void 0?parseFloat(I):180,W=F!==void 0?parseFloat(F):200,ve=le!==void 0?parseInt(le,10):1200;i.set(p,{type:h,name:p,centerX2:G(b),centerY2:G(v),spanX:G(y),spanY:G(x),rotation:[0,90,180,270].includes(q)?q:0,...h==="slider"?{sliderMin:Number.isFinite(se)?se:0,sliderMax:Number.isFinite(ce)?ce:100,sliderRecenter:oe}:{},...h==="toggle"?{toggleInitial:he}:{},...h==="radar"?{radarMinAngle:Number.isFinite(ke)?ke:0,radarMaxAngle:Number.isFinite(ee)?ee:180,radarMaxDistance:Number.isFinite(W)&&W>0?W:200,radarFadeMs:Number.isFinite(ve)&&ve>0?ve:1200}:{}})}return[...i.values()]}let ne=null,Vi=null,Wh=0,dl=!1;function ub(){return new Date().toLocaleTimeString("da-DK",{hour12:!1})}function Jh(o){return new Promise(i=>setTimeout(i,o))}function fb(o){return Object.fromEntries(o.filter(i=>i.type==="toggle").map(i=>[i.name,!!i.toggleInitial]))}function ep(o,i){const u=fb(o);for(const s of o)s.type==="toggle"&&i[s.name]!==void 0&&(u[s.name]=i[s.name]);return u}const J=zg((o,i)=>{function u(c,h){o(p=>({logs:[{level:c,message:h,time:ub()},...p.logs].slice(0,200)}))}function s(c){Vi&&clearTimeout(Vi),Wh+=1,o({toast:{message:c,id:Wh}}),Vi=setTimeout(()=>o({toast:null}),4500)}return ne=new ob({onProgress:(c,h)=>o({progress:{value:c,label:h}}),onLog:(c,h)=>u(c,h),onRadar:(c,h,p)=>{const b=Date.now(),v={id:`${b}-${Math.random().toString(36).slice(2)}`,angle:h,distance:p,createdAt:b};o(y=>{const x=y.layout.find(I=>I.type==="radar"&&I.name===c),N=(x==null?void 0:x.radarFadeMs)??1200,j=y.radarPings[c]??[];return{radarPings:{...y.radarPings,[c]:[...j.filter(I=>b-I.createdAt<=N),v].slice(-80)}}})},onText:(c,h)=>{o(p=>({textValues:{...p.textValues,[c]:h}}))},onToggleState:(c,h)=>{o(p=>({toggleValues:{...p.toggleValues,[c]:h}}))},onDisconnect:c=>{const{screen:h,active:p,picoIdeOrigin:b}=i();if(dl){dl=!1;return}if(c&&(u("warning",c),s(c)),h==="control"||h==="connection"||h==="create"||h==="ide"&&b==="control"){const v=p?{deviceID:p.deviceID,deviceName:p.deviceName,deviceIconID:p.iconID,canOthersConnect:p.canOthersConnect,canOthersEdit:p.canOthersEdit,canOthersEditCode:p.canOthersEditCode,isOwnedByMe:p.isOwnedByMe,ownerName:p.ownerName}:null;o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connectionLost:v})}}}),{screen:"splash",splashTarget:null,user:null,savedDevices:[],connecting:null,progress:{value:0,label:""},toast:null,confirmDialog:null,connectionLost:null,active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},logs:[],sideMenuOpen:!1,debuggerOpen:!1,menuPage:null,editMode:!1,dashboardPage:"mine",picoIdeOrigin:"dashboard",init:()=>{const c=Lg(),h=gf();o({user:c,savedDevices:h,splashTarget:c?"dashboard":"intro"})},finishSplash:()=>{const c=i().splashTarget;o({screen:c??"intro"})},createUser:c=>{const h=c.trim();if(!h)return;const p={username:h,userID:Bg()};Xh(p),o({user:p,screen:"dashboard"})},findDevice:async()=>{try{const c=await Fg();await i().connectToDevice(c)}catch(c){c instanceof Error&&c.name!=="NotFoundError"&&u("error",c.message)}},connectToDevice:async(c,h)=>{var b,v;const p=i().user;if(!(!p||!ne)){dl=!1,o({screen:"connection",connecting:{name:af(c.name)||(h==null?void 0:h.deviceName)||"Pico",iconID:(h==null?void 0:h.deviceIconID)??0},progress:{value:0,label:"Forbinder..."}});try{await ne.connect(c);const y=await ne.runHandshake(p),x=c.id,N=af(c.name)||(h==null?void 0:h.deviceName)||"Pico";if(y.kind==="denied"){const q=`Du kan ikke forbinde, fordi ${((b=y.ownerName)==null?void 0:b.trim())||((v=h==null?void 0:h.ownerName)==null?void 0:v.trim())||"ejeren"} ejer enheden og ikke tillader besøgende at forbinde.`;u("warning",q),s(q),o({screen:"dashboard",connecting:null}),await ne.disconnect();return}if(y.kind==="unowned"){o({active:{deviceID:x,deviceName:N,iconID:0,canEdit:!0,canEditCode:!0,canOthersConnect:!1,canOthersEdit:!1,canOthersEditCode:!1,isOwnedByMe:!0,ownerName:p.username,gridCols:za,gridRows:Qi},screen:"create"});return}const j={deviceID:x,deviceName:N,deviceIconID:y.iconID,canOthersConnect:y.canOthersConnect,canOthersEdit:y.canOthersEdit,canOthersEditCode:y.canOthersEditCode,isOwnedByMe:y.isOwnedByMe,ownerName:y.isOwnedByMe?p.username:y.ownerName??(h==null?void 0:h.ownerName)};o({savedDevices:Iu(j)});const I=await ne.requestLayout(),F=Ph(I),le=Zh(I);o({layout:le,sliderValues:{},toggleValues:ep(le,i().toggleValues),radarPings:{},textValues:{},active:{deviceID:x,deviceName:N,iconID:y.iconID,canEdit:y.canEdit,canEditCode:y.canEditCode,canOthersConnect:y.canOthersConnect,canOthersEdit:y.canOthersEdit,canOthersEditCode:y.canOthersEditCode,isOwnedByMe:y.isOwnedByMe,ownerName:y.isOwnedByMe?p.username:y.ownerName??(h==null?void 0:h.ownerName),gridCols:F.cols,gridRows:F.rows},screen:"control",connecting:null,connectionLost:null})}catch(y){const x=y instanceof Error?y.message:"Forbindelsen mislykkedes.";u("error",x),s("Forbindelsen mislykkedes."),o({screen:"dashboard",connecting:null}),await ne.disconnect().catch(()=>{})}}},finishCreate:async(c,h,p,b,v,y)=>{const{user:x,active:N}=i();if(!(!x||!N||!ne))try{ne.setBusy(!0),await ne.create(x,c,h,p,b,v,y),ne.setBusy(!1);const j={deviceID:N.deviceID,deviceName:N.deviceName,deviceIconID:c,canOthersConnect:h,canOthersEdit:h&&p,canOthersEditCode:h&&b,isOwnedByMe:!0,ownerName:x.username};o({savedDevices:Iu(j)});const I=await ne.requestLayout(),F=Ph(I),le=Zh(I);o({layout:le,sliderValues:{},toggleValues:ep(le,i().toggleValues),radarPings:{},textValues:{},active:{...N,iconID:c,canEdit:!0,canEditCode:!0,canOthersConnect:h,canOthersEdit:h&&p,canOthersEditCode:h&&b,ownerName:x.username,gridCols:F.cols,gridRows:F.rows},screen:"control"})}catch(j){ne.setBusy(!1);const I=j instanceof Error?j.message:"Oprettelse mislykkedes.";u("error",I),s("Oprettelse mislykkedes."),o({screen:"dashboard"}),await ne.disconnect().catch(()=>{})}},saveDeviceSettings:async(c,h,p,b,v,y)=>{const{active:x,user:N}=i();if(!(!x||!ne||!x.isOwnedByMe))try{ne.setBusy(!0),await ne.updateDeviceSettings(c,h,p,b,v,y,N==null?void 0:N.username);const j={...x,iconID:c,canEdit:!0,canEditCode:!0,canOthersConnect:h,canOthersEdit:h&&p,canOthersEditCode:h&&b,ownerName:(N==null?void 0:N.username)??x.ownerName,gridCols:v,gridRows:y},I={deviceID:x.deviceID,deviceName:x.deviceName,deviceIconID:c,canOthersConnect:h,canOthersEdit:h&&p,canOthersEditCode:h&&b,isOwnedByMe:!0,ownerName:(N==null?void 0:N.username)??x.ownerName};o({active:j,savedDevices:Iu(I)}),s("Enhedsindstillinger gemt.")}catch(j){u("error",j instanceof Error?j.message:"Kunne ikke gemme enhedsindstillinger."),s("Kunne ikke gemme enhedsindstillinger.")}finally{ne.setBusy(!1)}},cancelCreate:async()=>{ne&&await ne.disconnect().catch(()=>{}),o({screen:"dashboard",active:null,connecting:null})},disconnect:async()=>{dl=!0,ne&&await ne.disconnect().catch(()=>{}),dl=!1,o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connectionLost:null})},removeSavedDevice:c=>{o({savedDevices:Vg(c)})},clearSavedDevices:()=>{Ug(),o({savedDevices:[]}),s("Gemte enheder ryddet.")},resetApplicationData:async()=>{dl=!0,ne!=null&&ne.connected&&await ne.disconnect().catch(()=>{}),Hg(),window.location.reload()},updateUsername:c=>{const h=i().user,p=c.trim();if(!h||!p)return;const b={...h,username:p};Xh(b),o(v=>{var x;const y=v.savedDevices.map(N=>N.isOwnedByMe?{...N,ownerName:p}:N);return To(y),{user:b,active:(x=v.active)!=null&&x.isOwnedByMe?{...v.active,ownerName:p}:v.active,savedDevices:y}}),s("Brugernavn gemt.")},openPicoIde:()=>{const c=i().screen==="control"&&!!(ne!=null&&ne.connected),h=i().active;if(c&&h&&!h.isOwnedByMe&&!h.canEditCode){s("Ejeren tillader ikke, at gæster åbner Kodeværkstedet på denne enhed."),u("warning","Kodeværkstedet er blokeret, fordi ejeren ikke tillader gæster at redigere kode."),o({sideMenuOpen:!1});return}o(p=>({screen:"ide",picoIdeOrigin:c?"control":"dashboard",active:c?p.active:null,layout:c?p.layout:[],sliderValues:c?p.sliderValues:{},toggleValues:c?p.toggleValues:{},radarPings:c?p.radarPings:{},textValues:c?p.textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null}))},closePicoIde:()=>{const{picoIdeOrigin:c,active:h}=i();o({screen:c==="control"&&h&&(ne!=null&&ne.connected)?"control":"dashboard",sideMenuOpen:!1,menuPage:null,picoIdeOrigin:"dashboard"})},isBleConnected:()=>!!(ne!=null&&ne.connected),bleListFiles:async()=>ne!=null&&ne.connected?ne.listFiles("/"):[],bleReadText:async(c,h,p)=>{if(!(ne!=null&&ne.connected))throw new Error("Ingen BLE-forbindelse.");return ne.readText(c,h,p)},bleWriteText:async(c,h,p)=>{if(!(ne!=null&&ne.connected))throw new Error("Ingen BLE-forbindelse.");await ne.writeText(c,h,p)},bleDeleteFile:async c=>{if(!(ne!=null&&ne.connected))throw new Error("Ingen BLE-forbindelse.");await ne.deleteFile(c)},bleRestart:async()=>{ne!=null&&ne.connected&&await ne.restart()},bleRestartAndReconnect:async(c="control")=>{const{active:h}=i();if(!(ne!=null&&ne.connected)||!h)return!1;const p={deviceID:h.deviceID,deviceName:h.deviceName,deviceIconID:h.iconID,canOthersConnect:h.canOthersConnect,canOthersEdit:h.canOthersEdit,canOthersEditCode:h.canOthersEditCode,isOwnedByMe:h.isOwnedByMe,ownerName:h.ownerName};dl=!0,u("info","Genstarter Pico og forsøger automatisk genforbindelse...");try{await ne.restart()}catch{}o({progress:{value:15,label:"Venter på Pico genstart..."},connecting:{name:p.deviceName,iconID:p.deviceIconID}});for(let b=0;b<12&&(ne!=null&&ne.connected);b+=1)await Jh(250);ne!=null&&ne.connected||(dl=!1);for(let b=1;b<=8;b+=1){await Jh(b===1?1200:850);try{const y=(await Dp()).find(x=>x.id===p.deviceID);if(!y){o({progress:{value:Math.min(88,20+b*8),label:"Venter på browser-tilladelse..."}});continue}return o({progress:{value:Math.min(92,24+b*8),label:`Genforbinder (${b}/8)...`}}),await i().connectToDevice(y,p),c==="ide"&&o(x=>({screen:"ide",picoIdeOrigin:"control",active:x.active,layout:x.layout,sliderValues:x.sliderValues,toggleValues:x.toggleValues,radarPings:x.radarPings,textValues:x.textValues,editMode:!1,sideMenuOpen:!1,menuPage:null})),s("Pico genforbundet."),!0}catch(v){u("warning",v instanceof Error?v.message:"Genforbindelse mislykkedes.")}}return s("Kunne ikke genforbinde automatisk. Vælg Picoen igen."),dl=!1,o({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:p}),!1},reconnectLostDevice:async()=>{var h;const c=i().connectionLost;if(c){o({connectionLost:null});try{if((h=navigator.bluetooth)!=null&&h.getDevices){const b=(await navigator.bluetooth.getDevices()).find(v=>v.id===c.deviceID);if(b){await i().connectToDevice(b,c);return}}}catch{}u("info","Genforbind: vælg enheden i browserens liste."),await i().findDevice()}},dismissConnectionLost:()=>o({connectionLost:null}),sendButton:c=>ne==null?void 0:ne.enqueueButton(c),sendSlider:(c,h)=>{o(p=>({sliderValues:{...p.sliderValues,[c]:h}})),ne==null||ne.enqueueSlider(c,h)},sendToggle:(c,h)=>{o(p=>({toggleValues:{...p.toggleValues,[c]:h}})),ne==null||ne.enqueueToggle(c,h)},saveLayout:async c=>{if(ne)try{ne.setBusy(!0),await ne.saveLayout(c),o({layout:c,editMode:!1})}catch(h){u("error",h instanceof Error?h.message:"Kunne ikke gemme layout.")}finally{ne.setBusy(!1)}},setEditMode:c=>o({editMode:c,sideMenuOpen:!1,menuPage:null}),setDashboardPage:c=>o({dashboardPage:c}),toggleSideMenu:c=>o(h=>({sideMenuOpen:c??!h.sideMenuOpen})),toggleDebugger:c=>o(h=>({debuggerOpen:c??!h.debuggerOpen,sideMenuOpen:!1,menuPage:null})),openMenuPage:c=>o({menuPage:c,sideMenuOpen:!1}),closeMenuPage:()=>o({menuPage:null}),clearLogs:()=>o({logs:[]}),log:(c,h)=>u(c,h),askConfirm:c=>o({confirmDialog:c}),closeConfirm:()=>o({confirmDialog:null}),showToast:c=>s(c),dismissToast:()=>{Vi&&clearTimeout(Vi),o({toast:null})}}}),Mo="./",Bp=[{id:0,label:"Raspberry Pi"},{id:1,label:"Sumo robot"},{id:2,label:"LED / lys"},{id:3,label:"Lineal + blyant"},{id:4,label:"Bil"},{id:5,label:"Tank"},{id:6,label:"Robotarm"},{id:7,label:"Bi"},{id:8,label:"Palet"},{id:9,label:"Afstandssensor"},{id:10,label:"Søg"},{id:11,label:"Alarm"}];function La(o){const i=o>=0&&o<Bp.length?o:0;return`${Mo}device-icons/${i}.png`}const db=`${Mo}art/logo.png`,mb=`${Mo}art/Teknologiskolen_logo.png`,hb=`${Mo}art/logo_teknologiskolen_white.png`,pb={menu:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),f.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),f.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),f.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]}),user:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),f.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),settings:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"3"}),f.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),info:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),f.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),help:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),f.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),debugger:f.jsx(f.Fragment,{children:f.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),edit:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),f.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),picoIde:f.jsxs(f.Fragment,{children:[f.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),f.jsx("path",{d:"M8 9l-3 3 3 3"}),f.jsx("path",{d:"M16 9l3 3-3 3"}),f.jsx("line",{x1:"13",y1:"8",x2:"11",y2:"16"})]}),exit:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),f.jsx("polyline",{points:"16 17 21 12 16 7"}),f.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),plus:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),f.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),delete:f.jsxs(f.Fragment,{children:[f.jsx("circle",{cx:"12",cy:"12",r:"10"}),f.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),f.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),power:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),f.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),save:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),f.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),f.jsx("polyline",{points:"7 3 7 8 15 8"})]}),upload:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),f.jsx("polyline",{points:"17 8 12 3 7 8"}),f.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),refresh:f.jsxs(f.Fragment,{children:[f.jsx("polyline",{points:"23 4 23 10 17 10"}),f.jsx("polyline",{points:"1 20 1 14 7 14"}),f.jsx("path",{d:"M3.5 9a9 9 0 0 1 14.9-3.4L23 10"}),f.jsx("path",{d:"M20.5 15a9 9 0 0 1-14.9 3.4L1 14"})]}),package:f.jsxs(f.Fragment,{children:[f.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),f.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),f.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),back:f.jsxs(f.Fragment,{children:[f.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),f.jsx("polyline",{points:"12 19 5 12 12 5"})]})};function zn({name:o,size:i=24,className:u}){return f.jsx("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:u,"aria-hidden":"true",children:pb[o]})}const _b=1850,gb=450;function bb(){const o=J(s=>s.splashTarget),i=J(s=>s.finishSplash),u=o?"splash-screen-animation splash-ready":"splash-pending";return H.useEffect(()=>{if(!o)return;const c=window.matchMedia("(prefers-reduced-motion: reduce)").matches?gb:_b,h=window.setTimeout(i,c);return()=>window.clearTimeout(h)},[i,o]),f.jsxs("div",{className:`screen splash-screen ${u}`,"aria-label":"Teknologiskolen starter",children:[f.jsx("div",{className:"splash-white-cover"}),f.jsx("div",{className:"splash-red-field"}),f.jsx("div",{className:"splash-brand","aria-hidden":"true",children:f.jsx("div",{className:"splash-mark splash-logo-shell",children:f.jsx("img",{className:"splash-logo",src:db,alt:""})})}),f.jsx("span",{className:"sr-only",children:"Teknologiskolen"})]})}function np(){const o=J(c=>c.createUser),[i,u]=H.useState(""),s=i.length>0;return f.jsxs("div",{className:"screen intro",children:[f.jsxs("div",{className:"intro-header",children:[f.jsx("span",{className:"intro-header-fill","aria-hidden":"true"}),f.jsx("img",{className:"intro-header-image",src:mb,alt:"Teknologiskolen"}),f.jsx("span",{className:"intro-header-fill","aria-hidden":"true"})]}),f.jsxs("div",{className:"intro-body",children:[f.jsx("p",{children:"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Find selv på et navn, du vil vises som i appen. Det er ikke et login, og navnet gemmes kun i denne browser."}),f.jsxs("div",{className:`field ${s?"filled":""}`,children:[f.jsx("input",{id:"username",value:i,onChange:c=>u(c.target.value),maxLength:32,autoComplete:"off","aria-label":"Brugernavn"}),f.jsx("label",{htmlFor:"username",children:"Brugernavn"})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!s,onClick:()=>o(i),children:"Fortsæt"})]}),f.jsx("span",{className:"version",children:Fi})]})}function bf({title:o,onMenu:i}){return f.jsx("header",{className:"topbar",children:f.jsxs("div",{className:"topbar-inner",children:[f.jsx("h1",{children:o}),f.jsx("button",{className:"iconbtn",type:"button",onClick:i,"aria-label":"Menu",children:f.jsx(zn,{name:"menu"})})]})})}function yn({title:o,onClose:i,children:u,closeVariant:s="plain"}){const c=s==="circle",h=H.useRef(!1);return f.jsx("div",{className:"modal-root",onPointerDown:p=>{h.current=p.target===p.currentTarget},onClick:p=>{p.target===p.currentTarget&&h.current&&i(),h.current=!1},children:f.jsxs("div",{className:"modal",onClick:p=>p.stopPropagation(),children:[f.jsxs("div",{className:"modal-head",children:[f.jsx("h3",{children:o}),f.jsx("button",{className:`iconbtn ${c?"modal-close-circle":""}`,type:"button",onClick:i,"aria-label":"Luk",children:f.jsx(zn,{name:c?"delete":"close",size:c?30:24})})]}),f.jsx("div",{className:"modal-body",children:u})]})})}function tp(){const o=J(j=>j.savedDevices),i=J(j=>j.toggleSideMenu),u=J(j=>j.findDevice),s=J(j=>j.removeSavedDevice),c=J(j=>j.askConfirm),h=J(j=>j.dashboardPage),p=J(j=>j.setDashboardPage),b=Sb(),[v,y]=H.useState(null),x=Ro(),N=o.filter(j=>h==="mine"?j.isOwnedByMe:!j.isOwnedByMe).sort(xb);return f.jsxs("div",{className:"screen dashboard-screen",children:[f.jsx(bf,{title:"Hovedmenu",onMenu:()=>i()}),f.jsxs("div",{className:"content dash-content",children:[!x&&f.jsx("div",{className:"notice",children:"Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På Android: brug Chrome."}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:h==="mine"?"active":"",onClick:()=>p("mine"),children:"Mine Enheder"}),f.jsx("button",{type:"button",className:h==="andre"?"active":"",onClick:()=>p("andre"),children:"Andre Enheder"})]}),f.jsx("div",{className:"panel panel-white device-list",children:N.length===0?f.jsx("div",{className:"device-list-empty",children:h==="mine"?"Ingen enheder endnu. Tryk på + for at finde en enhed.":"Ingen andre enheder gemt."}):N.map(j=>f.jsx(yb,{device:j,disabled:!x,onConnect:()=>b(j),onSettings:()=>y(j)},j.deviceID))})]}),f.jsx("button",{className:"fab",type:"button",onClick:()=>u(),disabled:!x,"aria-label":"Find enhed",children:f.jsx(zn,{name:"plus",size:30})}),f.jsx("span",{className:"version",children:Fi}),v&&f.jsx(yn,{title:"Enhedsindstillinger",onClose:()=>y(null),children:f.jsxs("div",{className:"settings-stack",children:[f.jsxs("div",{className:"saved-device-head",children:[f.jsx("img",{src:La(v.deviceIconID),alt:""}),f.jsx("strong",{children:v.deviceName})]}),f.jsx(Yi,{label:"Gemte indstillinger",value:"Denne browser"}),f.jsx(Yi,{label:"Ejer",value:vb(v)}),f.jsx(Yi,{label:"Offentlig",value:v.canOthersConnect?"Ja":"Nej"}),f.jsx(Yi,{label:"Andre må redigere layout",value:v.canOthersEdit?"Ja":"Nej"}),f.jsx(Yi,{label:"Andre må redigere kode",value:v.canOthersEditCode?"Ja":"Nej"}),f.jsx("div",{className:"notice",children:"Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen."}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!x,onClick:()=>{const j=v;y(null),b(j)},children:"Forbind"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>c({title:"Glem enhed",message:`Vil du fjerne ${v.deviceName} fra gemte enheder?`,confirmLabel:"Glem",onConfirm:()=>{s(v.deviceID),y(null)}}),children:"Glem enhed"})]})})]})}function yb({device:o,disabled:i,onConnect:u,onSettings:s}){return f.jsxs("div",{className:"device-tile-wrap",children:[f.jsxs("button",{className:"device-tile",type:"button",onClick:u,disabled:i,children:[f.jsx("img",{className:"device-tile-icon",src:La(o.deviceIconID),alt:""}),f.jsx("span",{className:"device-tile-name",children:o.deviceName})]}),f.jsx("button",{className:"device-tile-del",type:"button",onClick:s,"aria-label":"Enhedsindstillinger",children:f.jsx(zn,{name:"settings"})})]})}function Yi({label:o,value:i}){return f.jsxs("div",{className:"settings-row",children:[f.jsx("span",{children:o}),f.jsx("strong",{children:i})]})}function vb(o){var i;return o.isOwnedByMe?"Dig":((i=o.ownerName)==null?void 0:i.trim())||"Anden bruger"}function xb(o,i){return o.deviceName.localeCompare(i.deviceName,"da",{sensitivity:"base"})}function Sb(){const o=J(s=>s.connectToDevice),i=J(s=>s.findDevice),u=J(s=>s.log);return async s=>{const h=(await Dp()).find(p=>p.id===s.deviceID);h?await o(h,s):(u("info","Genforbind: vælg enheden i browserens liste."),await i())}}function Eb(){const o=J(u=>u.connecting),i=J(u=>u.progress);return f.jsxs("div",{className:"screen connection",children:[f.jsx("div",{className:"device-icon-pick",children:f.jsx("img",{src:La((o==null?void 0:o.iconID)??0),alt:""})}),f.jsxs("h2",{style:{margin:0,color:"var(--red)"},children:["Forbinder til ",(o==null?void 0:o.name)??"enhed"]}),f.jsx("div",{className:"spinner"}),f.jsxs("div",{style:{width:"100%"},children:[f.jsx("div",{className:"progress-track",children:f.jsx("div",{className:"progress-fill",style:{width:`${i.value}%`}})}),f.jsx("p",{style:{color:"var(--muted)",fontWeight:600,marginTop:12},children:i.label})]})]})}function Lp({selected:o,onSelect:i,onClose:u}){return f.jsx(yn,{title:"Vælg Enhedens Ikon",onClose:u,children:f.jsx("div",{className:"icon-grid",children:Bp.map(s=>f.jsx("button",{type:"button",className:`icon-tile ${s.id===o?"selected":""}`,onClick:()=>{i(s.id),u()},"aria-label":s.label,children:f.jsx("img",{src:La(s.id),alt:""})},s.id))})})}function wb(){const o=J(oe=>oe.finishCreate),i=J(oe=>oe.cancelCreate),[u,s]=H.useState(0),[c,h]=H.useState(!1),[p,b]=H.useState(!1),[v,y]=H.useState(!1),[x,N]=H.useState(!1),[j,I]=H.useState(za),[F,le]=H.useState(Qi),[G,q]=H.useState(!1),se=oe=>Number.isFinite(oe)?Math.max(Da,Math.min(Oa,Math.round(oe))):za;async function ce(){q(!0),await o(u,p,p&&v,p&&x,se(j),se(F))}return f.jsxs("div",{className:"screen",children:[f.jsx("header",{className:"topbar",children:f.jsx("h1",{children:"Opret Enhed"})}),f.jsxs("div",{className:"content create-body",children:[f.jsxs("button",{type:"button",className:"device-icon-pick",onClick:()=>h(!0),"aria-label":"Vælg ikon",children:[f.jsx("img",{src:La(u),alt:""}),f.jsx("span",{className:"badge",children:f.jsx(zn,{name:"plus",size:22})})]}),f.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:p?"":"active",onClick:()=>b(!1),children:"Privat"}),f.jsx("button",{type:"button",className:p?"active":"",onClick:()=>b(!0),children:"Offentlig"})]}),p&&f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:v?"":"active",onClick:()=>y(!1),children:"Nej"}),f.jsx("button",{type:"button",className:v?"active":"",onClick:()=>y(!0),children:"Ja"})]}),f.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:x?"":"active",onClick:()=>N(!1),children:"Nej"}),f.jsx("button",{type:"button",className:x?"active":"",onClick:()=>N(!0),children:"Ja"})]})]}),f.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter (kolonner × rækker)"}),f.jsxs("div",{className:"row",style:{width:"100%"},children:[f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"cols",children:"Kolonner"}),f.jsx("input",{id:"cols",type:"number",min:Da,max:Oa,value:Number.isNaN(j)?"":j,onChange:oe=>I(parseInt(oe.target.value,10)),onBlur:()=>I(se(j))})]}),f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"rows",children:"Rækker"}),f.jsx("input",{id:"rows",type:"number",min:Da,max:Oa,value:Number.isNaN(F)?"":F,onChange:oe=>le(parseInt(oe.target.value,10)),onBlur:()=>le(se(F))})]})]}),f.jsxs("div",{className:"row",style:{marginTop:"auto",width:"100%"},children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>i(),disabled:G,children:"Annuller"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:ce,disabled:G,children:G?"Opretter...":"Opret"})]})]}),c&&f.jsx(Lp,{selected:u,onSelect:s,onClose:()=>h(!1)}),f.jsx("span",{className:"version",children:Fi})]})}const Ba=8;function vo(o){return Math.max(5,Math.min(22,o))}function wo(o,i,u){const s=Math.max(1,o.length),c=(i-Ba*2)/(s*.58),h=(u-Ba*2)*.48;return vo(Math.min(c,h))}function kb(o,i,u,s,c){const h=o.trim().split(/\s+/).filter(Boolean),p=Math.max(1,o.replace(/\s+/g,"").length+Math.max(0,h.length-1)*1.6),b=c?vo(Math.min(i/4.6,u/4.6,12)):0,v=c?b+Ba:Ba;if(s){const N=Math.max(1,u-v*2);return{fontSize:vo(Math.min(i*.48,N/(p*1.04))),endFontSize:b,centerInset:c?{top:v,bottom:v}:{}}}const y=Math.max(1,i-v*4.2);return{fontSize:vo(Math.min(u*.42,y/(p*.58))),endFontSize:b,centerInset:c?{left:v*2.1,right:v*2.1}:{}}}function Nb({control:o,rect:i,disabled:u,latestValue:s,toggleValue:c,radarPings:h=[],textValue:p,onButton:b,onSlider:v,onToggle:y}){const x={left:i.cx,top:i.cy,width:i.width,height:i.height};if(o.type==="button")return f.jsx("div",{className:"control",style:x,children:f.jsx("button",{className:"control-button",type:"button",disabled:u,style:{width:"100%",height:"100%",fontSize:wo(o.name,i.width,i.height)},onPointerDown:N=>{u||(N.preventDefault(),b(o.name))},children:o.name})});if(o.type==="toggle"){const N=!!c;return f.jsx("div",{className:"control",style:x,children:f.jsx("button",{className:`control-toggle ${N?"on":""}`,type:"button",disabled:u,"aria-pressed":N,style:{width:"100%",height:"100%",fontSize:wo(o.name,i.width,i.height)},onPointerDown:j=>{u||(j.preventDefault(),y(o.name,!N))},children:f.jsx("span",{children:o.name})})})}return o.type==="radar"?f.jsx("div",{className:"control",style:x,children:f.jsx(Hp,{control:o,pings:h,width:i.width,height:i.height})}):o.type==="text"?f.jsx("div",{className:"control",style:x,children:f.jsx(Up,{message:p??o.name,width:i.width,height:i.height})}):f.jsx("div",{className:"control",style:x,children:f.jsx(Ub,{control:o,disabled:u,latestValue:s,onSlider:v,width:i.width,height:i.height})})}function Tb(o,i,u){const s=o.trim()||" ",h=s.split(/\s+/).filter(Boolean).reduce((N,j)=>Math.max(N,j.length),1),p=Math.max(1,Math.ceil(s.length/Math.max(1,Math.floor(h*1.9)))),b=Math.max(1,i-Ba*3),v=Math.max(1,u-Ba*3),y=b/(h*.58),x=v/(p*1.16);return Math.max(7,Math.min(24,y,x))}function Up({message:o,width:i,height:u}){const s=o.trim()||"...";return f.jsx("div",{className:"control-text",style:{width:"100%",height:"100%",fontSize:Tb(s,i,u)},children:f.jsx("span",{children:s})})}function Hp({control:o,pings:i,width:u,height:s,preview:c=!1}){const[,h]=H.useState(0),p=Math.max(120,o.radarFadeMs??1200),b=o.radarMinAngle??0,v=o.radarMaxAngle??180,y=rt(b),x=rt(v),N=Math.abs(v-b)>=360||y===x&&b!==v,j=Math.max(1,o.radarMaxDistance??200),I=Date.now(),F=i[i.length-1],le=o.rotation,G=rt(y+le),q=rt(x+le),se=Cb(y,x),ce=((F==null?void 0:F.angle)??se)+le,oe=c?[{id:"preview",angle:se,distance:j*.62,createdAt:I}]:i.filter(C=>I-C.createdAt<=p),he=!N,ke=Math.max(8,Math.min(12,Math.min(u,s)*.16)),ee=0,W=0,ve=1,be=N?{x:-1.12,y:-1.12,width:2.24,height:2.24}:jb(G,q),ye=N?"":Rb(ee,W,ve,G,q),ae=ip(b),Ie=ip(v),Re=he?Db(G,q,be,u,s,ae,Ie,ke):null;H.useEffect(()=>{if(c||i.length===0)return;const C=window.setInterval(()=>h(P=>P+1),120);return()=>window.clearInterval(C)},[p,i.length,c]);const $e=Et(ee,W,ve,ce);return f.jsxs("div",{className:"control-radar",style:{width:"100%",height:"100%"},children:[f.jsxs("svg",{width:u,height:s,viewBox:`${be.x} ${be.y} ${be.width} ${be.height}`,preserveAspectRatio:"none","aria-hidden":"true",children:[N?f.jsx("circle",{className:"radar-sector-fill",cx:ee,cy:W,r:ve}):f.jsx("path",{className:"radar-sector-fill",d:ye}),[.25,.5,.75,1].map(C=>N?f.jsx("circle",{className:"radar-ring",cx:ee,cy:W,r:ve*C},C):f.jsx("path",{className:"radar-ring",d:Mb(ee,W,ve*C,G,q)},C)),!N&&f.jsx(lp,{cx:ee,cy:W,radius:ve,angle:G}),!N&&f.jsx(lp,{cx:ee,cy:W,radius:ve,angle:q}),f.jsx("line",{className:"radar-sweep",x1:ee,y1:W,x2:$e.x,y2:$e.y}),oe.map(C=>{const P=c?0:I-C.createdAt,fe=Math.max(0,1-P/p),te=Math.max(0,Math.min(j,C.distance)),Se=Et(ee,W,ve*(te/j),C.angle+le);return f.jsx("circle",{className:"radar-ping",cx:Se.x,cy:Se.y,r:Math.max(.025,Math.min(be.width,be.height)*.025),opacity:fe},C.id)})]}),he&&Re&&f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"radar-angle-label",style:{left:Re.min.x,top:Re.min.y,fontSize:ke},children:ae}),f.jsx("span",{className:"radar-angle-label",style:{left:Re.max.x,top:Re.max.y,fontSize:ke},children:Ie})]})]})}function lp({cx:o,cy:i,radius:u,angle:s}){const c=Et(o,i,u,s);return f.jsx("line",{className:"radar-boundary",x1:o,y1:i,x2:c.x,y2:c.y})}function Et(o,i,u,s){const c=(rt(s)-90)*Math.PI/180;return{x:o+Math.cos(c)*u,y:i+Math.sin(c)*u}}function Rb(o,i,u,s,c){const h=Et(o,i,u,s),p=Et(o,i,u,c),b=yf(s,c)>180?1:0;return`M ${o} ${i} L ${h.x} ${h.y} A ${u} ${u} 0 ${b} 1 ${p.x} ${p.y} Z`}function Mb(o,i,u,s,c){const h=Et(o,i,u,s),p=Et(o,i,u,c),b=yf(s,c)>180?1:0;return`M ${h.x} ${h.y} A ${u} ${u} 0 ${b} 1 ${p.x} ${p.y}`}function yf(o,i){const u=rt(o),s=rt(i),c=s>=u?s-u:360-u+s;return c===0?360:c}function jb(o,i){const u=[{x:0,y:0},Et(0,0,1,o),Et(0,0,1,i)];for(const x of[0,90,180,270])Ab(x,o,i)&&u.push(Et(0,0,1,x));const s=Math.min(...u.map(x=>x.x)),c=Math.max(...u.map(x=>x.x)),h=Math.min(...u.map(x=>x.y)),p=Math.max(...u.map(x=>x.y)),b=Math.max(.1,c-s),v=Math.max(.1,p-h),y=Math.max(b,v)*.24;return{x:s-y,y:h-y,width:b+y*2,height:v+y*2}}function Ab(o,i,u){const s=rt(i),c=rt(o),h=yf(i,u),p=rt(c-s);return p>=0&&p<=h}function Db(o,i,u,s,c,h,p,b){const y=Et(0,0,1.1,o),x=Et(0,0,1.1,i);return{min:rp(y,u,s,c,h,b),max:rp(x,u,s,c,p,b)}}function Ob(o,i,u,s){return{x:(o.x-i.x)/i.width*u,y:(o.y-i.y)/i.height*s}}function rp(o,i,u,s,c,h){const p=Ob(o,i,u,s),b=Math.max(10,c.length*h*.62),v=h,y=7;return{x:ap(p.x,b/2+y,Math.max(b/2+y,u-b/2-y)),y:ap(p.y,v/2+y,Math.max(v/2+y,s-v/2-y))}}function ap(o,i,u){return Math.max(i,Math.min(u,o))}function ip(o){return`${Math.round(o)}`}function rt(o){return Number.isFinite(o)?(o%360+360)%360:0}function Cb(o,i){const u=rt(o),s=rt(i),c=s>=u?s-u:360-u+s;return rt(u+c/2)}function zb(o,i){if(!i)return o;const u=o.trim().split(/\s+/).filter(Boolean);return f.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",lineHeight:1.02,textAlign:"center",gap:"0.42em"},children:u.map((s,c)=>f.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[...s].map((h,p)=>f.jsx("span",{children:h},`${h}-${p}`))},`${s}-${c}`))})}function Bb(o){const i={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},u=4;return o===0?{low:{...i,left:u,top:0,bottom:0},high:{...i,right:u,top:0,bottom:0}}:o===180?{low:{...i,right:u,top:0,bottom:0},high:{...i,left:u,top:0,bottom:0}}:o===90?{low:{...i,bottom:u,left:0,right:0},high:{...i,top:u,left:0,right:0}}:{low:{...i,top:u,left:0,right:0},high:{...i,bottom:u,left:0,right:0}}}function Lb({name:o,vertical:i,rotation:u,color:s,fontSize:c,endFontSize:h,centerInset:p,lowLabel:b,highLabel:v,showEnds:y}){const x=y?Bb(u):null;return f.jsxs("div",{style:{position:"absolute",inset:0,color:s},children:[f.jsx("div",{style:{position:"absolute",inset:0,...p,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:c,textAlign:"center",pointerEvents:"none"},children:zb(o,i)}),x&&f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{...x.low,fontWeight:800,fontSize:h},children:b}),f.jsx("div",{style:{...x.high,fontWeight:800,fontSize:h},children:v})]})]})}function Gp({name:o,rotation:i,width:u,height:s,value:c,showEnds:h=!1,fillColor:p="var(--red)",lowLabel:b="0",highLabel:v="100"}){const y=i===90||i===270,{fontSize:x,endFontSize:N,centerInset:j}=kb(o,u,s,y,h);let I,F;i===0?(I={left:0,top:0,bottom:0,width:`${c}%`},F={left:0,top:0}):i===180?(I={right:0,top:0,bottom:0,width:`${c}%`},F={right:0,top:0}):i===90?(I={left:0,right:0,bottom:0,height:`${c}%`},F={left:0,bottom:0}):(I={left:0,right:0,top:0,height:`${c}%`},F={left:0,top:0});const le=G=>f.jsx(Lb,{name:o,vertical:y,rotation:i,color:G,fontSize:x,endFontSize:N,centerInset:j,lowLabel:b,highLabel:v,showEnds:h});return f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{position:"absolute",left:0,top:0,width:`${u}px`,height:`${s}px`},children:le("var(--red)")}),f.jsx("div",{style:{position:"absolute",background:p,overflow:"hidden",...I},children:f.jsx("div",{style:{position:"absolute",width:`${u}px`,height:`${s}px`,...F},children:le("var(--white)")})})]})}function Ub({control:o,disabled:i,latestValue:u,onSlider:s,width:c,height:h}){const p=H.useRef(null),b=o.sliderMin??0,v=o.sliderMax??100,[y,x]=H.useState(()=>u===void 0?sp(o.sliderRecenter??"none"):op(u,b,v)),N=H.useRef(null),j=o.rotation;H.useEffect(()=>{u!==void 0&&(x(op(u,b,v)),N.current=u)},[u,b,v]);function I(q){const se=p.current;if(!se)return 0;const ce=se.getBoundingClientRect();let oe;return j===0?oe=(q.clientX-ce.left)/ce.width:j===180?oe=1-(q.clientX-ce.left)/ce.width:j===90?oe=1-(q.clientY-ce.top)/ce.height:oe=(q.clientY-ce.top)/ce.height,Math.max(0,Math.min(1,oe))}function F(q){i||le(I(q))}function le(q){const se=Math.round(q*100),ce=Math.round(b+(v-b)*q);x(se),ce!==N.current&&(N.current=ce,s(o.name,ce))}function G(){const q=o.sliderRecenter??"none";i||q==="none"||le(sp(q)/100)}return f.jsx("div",{ref:p,className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",touchAction:"none"},onPointerDown:q=>{i||(q.preventDefault(),q.currentTarget.setPointerCapture(q.pointerId),F(q))},onPointerMove:q=>{q.buttons!==0&&F(q)},onPointerUp:G,onPointerCancel:G,onLostPointerCapture:G,children:f.jsx(Gp,{name:o.name,rotation:j,width:c,height:h,value:y,showEnds:!0,lowLabel:String(b),highLabel:String(v)})})}function sp(o){return o==="bottom"?0:o==="top"?100:o==="middle"?50:0}function op(o,i,u){return u===i?0:Math.max(0,Math.min(100,Math.round((o-i)/(u-i)*100)))}const Hb={button:"Knapper",slider:"Slidere",toggle:"Toggleknapper",radar:"Radar",text:"Tekstfelter"},Gb=["button","slider","toggle","radar","text"];function Vb({unplaced:o,onAdd:i,onClose:u}){const s=H.useMemo(()=>Gb.filter(b=>o.some(v=>v.type===b)),[o]),[c,h]=H.useState(s[0]??"button"),p=o.filter(b=>b.type===c);return H.useEffect(()=>{s.length>0&&!s.includes(c)&&h(s[0])},[s,c]),f.jsxs(yn,{title:"Tilføj kontrol",onClose:u,children:[s.length>1&&f.jsx("div",{className:"segmented add-modal-tabs",children:s.map(b=>f.jsx("button",{type:"button",className:c===b?"active":"",onClick:()=>h(b),children:Hb[b]},b))}),f.jsx("div",{className:"add-lists",children:s.length===0?f.jsx("div",{className:"device-list-empty",children:"Alle kontroller er allerede placeret."}):p.map(b=>f.jsxs("button",{type:"button",className:"add-entry",onClick:()=>i(b.name),children:[f.jsx("span",{children:b.name}),f.jsx("span",{className:"iconbtn",children:f.jsx(zn,{name:"plus",size:22})})]},b.name))})]})}function Vp(o){const[i,u]=H.useState({w:0,h:0}),s=H.useRef(null),c=H.useRef(null);return H.useLayoutEffect(()=>{var v;const h=o.current;if(s.current===h)return;if((v=c.current)==null||v.disconnect(),c.current=null,s.current=h,!h){u(y=>y.w===0&&y.h===0?y:{w:0,h:0});return}const p=()=>{const y={w:h.clientWidth,h:h.clientHeight};u(x=>x.w===y.w&&x.h===y.h?x:y)};p();const b=new ResizeObserver(p);b.observe(h),c.current=b}),H.useEffect(()=>()=>{var h;(h=c.current)==null||h.disconnect(),c.current=null,s.current=null},[]),i}function Ca(o){return o.centerX2!==null&&o.centerY2!==null&&o.spanX!==null&&o.spanY!==null}const cp=4,up=5;function fp(o){if(!Ca(o))return null;const i=o.centerX2/2,u=o.centerY2/2;return{x0:i-o.spanX/2,x1:i+o.spanX/2,y0:u-o.spanY/2,y1:u+o.spanY/2}}function Yb(o,i,u=.02){return o.x0<i.x1-u&&i.x0<o.x1-u&&o.y0<i.y1-u&&i.y0<o.y1-u}function dp(o,i){const u=Ii(o,i);if(!u||o.spanX===null||o.spanY===null)return o;const s=yo(u.cx,u.cy,o.spanX,o.spanY,i);return{...o,centerX2:s.centerX2,centerY2:s.centerY2}}function mp(o,i){return Math.max(1,Math.min(i.cols-1,o))}function hp(o,i){return Math.max(1,Math.min(i.rows-1,o))}function qb(){const o=J(A=>A.layout),i=J(A=>A.active),u=J(A=>A.saveLayout),s=J(A=>A.setEditMode),c=J(A=>A.askConfirm),h=!!(i!=null&&i.canEdit),[p,b]=H.useState(()=>o.map(A=>({...A}))),[v,y]=H.useState(null),[x,N]=H.useState(!1),[j,I]=H.useState(null),[F,le]=H.useState(null),[G,q]=H.useState(!1),se=H.useRef(null),ce=Vp(se),oe=ce.w>0&&ce.h>0,he=Op(ce.w,ce.h,i==null?void 0:i.gridCols,i==null?void 0:i.gridRows),ke=H.useMemo(()=>oe?eb(he):[],[he,oe]),ee=p.filter(Ca),W=p.filter(A=>!Ca(A)),ve=H.useMemo(()=>{const A=new Set;for(let K=0;K<ee.length;K+=1)for(let Q=K+1;Q<ee.length;Q+=1){const X=fp(ee[K]),Fe=fp(ee[Q]);X&&Fe&&Yb(X,Fe)&&(A.add(ee[K].name),A.add(ee[Q].name))}return A},[ee]),be=ve.size>0,ye=p.find(A=>A.name===v)??null,ae=H.useMemo(()=>pp(p)!==pp(o),[p,o]),Ie=H.useMemo(()=>{if(!j||!F)return null;const A=p.find(X=>X.name===j);if(!A||A.spanX===null||A.spanY===null)return null;const K=yo(F.cx,F.cy,A.spanX,A.spanY,he),Q=Ii({...A,centerX2:K.centerX2,centerY2:K.centerY2},he);return Q?{name:A.name,rect:Q}:null},[p,j,F,he]);function Re(A,K){b(Q=>Q.map(X=>X.name===A?K(X):X))}function $e(A,K){A.stopPropagation(),y(K.name);const Q=Ii(K,he);Q&&(I(K.name),le({cx:Q.cx,cy:Q.cy}),A.currentTarget.setPointerCapture(A.pointerId))}function C(A){if(!j)return;const K=se.current;if(!K)return;const Q=K.getBoundingClientRect(),X=K.clientWidth/Q.width,Fe=K.clientHeight/Q.height;le({cx:Math.max(0,Math.min(K.clientWidth,(A.clientX-Q.left)*X)),cy:Math.max(0,Math.min(K.clientHeight,(A.clientY-Q.top)*Fe))})}function P(){if(j&&F){const A=p.find(K=>K.name===j);if(A&&A.spanX!==null&&A.spanY!==null){const K=yo(F.cx,F.cy,A.spanX,A.spanY,he);Re(j,Q=>({...Q,centerX2:K.centerX2,centerY2:K.centerY2}))}}I(null),le(null)}function fe(A){Re(A,K=>K.spanX===null||K.spanY===null?{...K,rotation:(K.rotation+270)%360}:dp({...K,rotation:(K.rotation+270)%360,spanX:mp(K.spanY,he),spanY:hp(K.spanX,he)},he))}function te(A,K,Q){Re(A,X=>{if(X.spanX===null||X.spanY===null)return X;const Fe=K==="x"?mp(X.spanX+Q,he):X.spanX,Oe=K==="y"?hp(X.spanY+Q,he):X.spanY;return dp({...X,spanX:Fe,spanY:Oe},he)})}function Se(A){Re(A,K=>({...K,centerX2:null,centerY2:null,spanX:null,spanY:null,rotation:0})),y(null)}function w(A){N(!1);const K=p.find(X=>X.name===A);if(!K)return;const Q=yo(he.areaW/2,he.areaH/2,cp,up,he);Re(A,()=>({...K,spanX:cp,spanY:up,rotation:0,centerX2:Q.centerX2,centerY2:Q.centerY2})),y(A)}async function O(){be||(q(!0),await u(p),q(!1))}function Z(){if(!ae){s(!1);return}c({title:"Kassér ændringer",message:"Vil du forlade redigering og kassere dine layout-ændringer?",confirmLabel:"Kassér",onConfirm:()=>s(!1)})}return f.jsxs("div",{className:"edit-view",children:[f.jsx("div",{className:"edit-band edit-toolbar-band",children:ye&&Ca(ye)?f.jsxs("div",{className:"edit-toolbar",onPointerDown:A=>A.stopPropagation(),children:[f.jsx(qi,{label:"⟲",title:"Roter",onClick:()=>fe(ye.name)}),f.jsx(qi,{label:"W−",title:"Gør smallere",onClick:()=>te(ye.name,"x",-1),disabled:ye.spanX===null||ye.spanX<=1}),f.jsx(qi,{label:"W+",title:"Gør bredere",onClick:()=>te(ye.name,"x",1),disabled:ye.spanX===null||ye.spanX>=he.cols-1}),f.jsx(qi,{label:"H−",title:"Gør lavere",onClick:()=>te(ye.name,"y",-1),disabled:ye.spanY===null||ye.spanY<=1}),f.jsx(qi,{label:"H+",title:"Gør højere",onClick:()=>te(ye.name,"y",1),disabled:ye.spanY===null||ye.spanY>=he.rows-1}),f.jsx("button",{className:"iconbtn",style:{color:"var(--red)"},onClick:()=>Se(ye.name),"aria-label":"Slet",children:f.jsx(zn,{name:"delete",size:24})})]}):f.jsx("span",{className:"edit-hint",children:"Vælg en kontrol for at redigere"})}),f.jsx("div",{className:"controls-area-wrap",children:f.jsx("div",{className:"controls-area",ref:se,style:{touchAction:"none"},onPointerMove:C,onPointerUp:P,onPointerDown:()=>y(null),children:oe&&f.jsxs(f.Fragment,{children:[f.jsx("svg",{width:he.areaW,height:he.areaH,style:{position:"absolute",inset:0,pointerEvents:"none"},children:ke.map((A,K)=>f.jsx("circle",{cx:A.x,cy:A.y,r:2.5,fill:"rgba(198,80,78,0.45)"},K))}),Ie&&f.jsx("div",{className:"snap-preview",style:{left:Ie.rect.cx,top:Ie.rect.cy,width:Ie.rect.width,height:Ie.rect.height}}),ee.map(A=>{const K=j===A.name&&F,Q=Ii(A,he);if(!Q)return null;const X=K?F.cx:Q.cx,Fe=K?F.cy:Q.cy,Oe={left:X,top:Fe,width:Q.width,height:Q.height,outline:v===A.name?"3px solid var(--text)":"none",outlineOffset:2};return f.jsx("div",{className:`control ${ve.has(A.name)?"colliding":""}`,style:Oe,onPointerDown:at=>$e(at,A),children:A.type==="button"?f.jsx("div",{className:"control-button",style:{width:"100%",height:"100%",display:"grid",placeItems:"center",fontWeight:800,fontSize:wo(A.name,Q.width,Q.height)},children:A.name}):A.type==="toggle"?f.jsx("div",{className:"control-toggle on",style:{width:"100%",height:"100%",fontSize:wo(A.name,Q.width,Q.height)},children:f.jsx("span",{children:A.name})}):A.type==="radar"?f.jsx(Hp,{control:A,pings:[],width:Q.width,height:Q.height,preview:!0}):A.type==="text"?f.jsx(Up,{message:A.name,width:Q.width,height:Q.height}):f.jsx("div",{className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:f.jsx(Gp,{name:A.name,rotation:A.rotation,width:Q.width,height:Q.height,value:50,showEnds:!0,lowLabel:String(A.sliderMin??0),highLabel:String(A.sliderMax??100),fillColor:ve.has(A.name)?"var(--disabled)":"var(--red)"})})},A.name)}),h&&f.jsx("button",{type:"button",className:"fab",style:{width:52,height:52,right:12,bottom:12},onPointerDown:A=>A.stopPropagation(),onClick:()=>N(!0),"aria-label":"Tilføj kontrol",children:f.jsx(zn,{name:"plus",size:24})}),G&&f.jsx("div",{className:"overlay",children:f.jsx("div",{className:"spinner"})})]})})}),f.jsxs("div",{className:"edit-band edit-actions-band",children:[f.jsx("button",{className:"btn btn-outline",style:{flex:1},type:"button",onClick:Z,disabled:G,children:"Annuller"}),f.jsx("button",{className:"btn btn-primary",style:{flex:1},type:"button",onClick:O,disabled:be||G,children:G?"Gemmer...":"Gem"})]}),x&&f.jsx(Vb,{unplaced:W,onAdd:w,onClose:()=>N(!1)})]})}function pp(o){return JSON.stringify(o.map(i=>({type:i.type,name:i.name,centerX2:i.centerX2,centerY2:i.centerY2,spanX:i.spanX,spanY:i.spanY,rotation:i.rotation})))}function qi({label:o,title:i,disabled:u,onClick:s}){return f.jsx("button",{type:"button","aria-label":i,title:i,disabled:u,onClick:s,style:{minWidth:38,height:38,borderRadius:12,background:u?"var(--grey)":"var(--red)",color:"var(--white)",fontWeight:800,fontSize:14,padding:"0 8px"},children:o})}function $b(){const o=J(G=>G.layout),i=J(G=>G.editMode),u=J(G=>G.active),s=J(G=>G.sliderValues),c=J(G=>G.toggleValues),h=J(G=>G.radarPings),p=J(G=>G.textValues),b=J(G=>G.toggleSideMenu),v=J(G=>G.sendButton),y=J(G=>G.sendSlider),x=J(G=>G.sendToggle),N=H.useRef(null),j=Vp(N),I=Op(j.w,j.h,u==null?void 0:u.gridCols,u==null?void 0:u.gridRows),F=j.w>0&&j.h>0,le=o.filter(Ca);return f.jsxs("div",{className:"screen control-screen",children:[f.jsx(bf,{title:"Kontrol Panel",onMenu:()=>b()}),i?f.jsx(qb,{}):f.jsx("div",{className:"controls-area-wrap",children:f.jsx("div",{className:"controls-area",ref:N,children:F?le.map(G=>{const q=Ii(G,I);return q?f.jsx(Nb,{control:G,rect:q,disabled:!1,latestValue:G.type==="slider"?s[G.name]:void 0,toggleValue:G.type==="toggle"?c[G.name]:void 0,radarPings:G.type==="radar"?h[G.name]:void 0,textValue:G.type==="text"?p[G.name]:void 0,onButton:v,onSlider:y,onToggle:x},G.name):null}):f.jsx("div",{className:"overlay",children:f.jsx("div",{className:"spinner"})})})})]})}const Xb="",Kb="",_p="",Or="";function Zu(o){return new Promise(i=>setTimeout(i,o))}class Ib{constructor(i){this.transport=i}async interrupt(){await this.transport.write(_p),await Zu(80),await this.transport.write(_p)}async friendlyRepl(){await this.transport.write(Kb)}async softReset(){await this.transport.write(Or)}async stop(){await this.interrupt(),await this.friendlyRepl().catch(()=>{})}async runFile(i){await this.interrupt(),await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(`import builtins as _pkp_builtins; exec(_pkp_builtins.open(${JSON.stringify(i)}).read())`)}async sendFriendlyLine(i){await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(i)}async enterRawRepl(i=2500){if(await this.interrupt(),await Zu(80),await this.transport.write(`\r
`),await Zu(40),!(await this.collectUntil(async()=>{await this.transport.write(Xb)},s=>s.includes("raw REPL")||s.includes("raw REPL; CTRL-B to exit"),i)).includes("raw REPL"))throw new Error("Kunne ikke skifte til MicroPython raw REPL.")}async exec(i,u=6e3){await this.enterRawRepl();const s=await this.collectUntil(async()=>{await this.transport.write(i),i.endsWith(`
`)||await this.transport.write(`
`),await this.transport.write(Or)},c=>c.includes(`${Or}${Or}`)||c.includes(`${Or}>`),u);return await this.friendlyRepl().catch(()=>{}),Fb(s)}collectUntil(i,u,s){return new Promise((c,h)=>{let p="",b=null;const v=setTimeout(()=>{b==null||b(),h(new Error("Timeout ved USB REPL kommando."))},s);b=this.transport.addDataListener(y=>{p+=y,u(p)&&(clearTimeout(v),b==null||b(),c(p))}),i().catch(y=>{clearTimeout(v),b==null||b(),h(y instanceof Error?y:new Error("USB REPL kommando fejlede."))})})}}function Fb(o){const i=o.indexOf("OK"),u=o.indexOf(Or,i>=0?i:0),s=u>=0?o.indexOf(Or,u+1):-1;if(i<0||u<0)return{output:o.trim(),error:"",raw:o};const c=o.slice(i+2,u).replace(/^\r?\n/,"").trimEnd(),h=s>=0?o.slice(u+1,s).trim():"";return{output:c,error:h,raw:o}}const Qb=[{version:"MicroPython v1.28.0",date:"2026-04-06",stamp:"20260406",tag:"v1.28.0"},{version:"MicroPython v1.27.0",date:"2025-12-09",stamp:"20251209",tag:"v1.27.0"},{version:"MicroPython v1.26.1",date:"2025-09-11",stamp:"20250911",tag:"v1.26.1"},{version:"MicroPython v1.26.0",date:"2025-08-09",stamp:"20250809",tag:"v1.26.0"},{version:"MicroPython v1.25.0",date:"2025-04-15",stamp:"20250415",tag:"v1.25.0"},{version:"MicroPython v1.24.1",date:"2024-11-29",stamp:"20241129",tag:"v1.24.1"},{version:"MicroPython v1.24.0",date:"2024-10-25",stamp:"20241025",tag:"v1.24.0"},{version:"MicroPython v1.23.0",date:"2024-06-02",stamp:"20240602",tag:"v1.23.0"},{version:"MicroPython v1.22.2",date:"2024-02-22",stamp:"20240222",tag:"v1.22.2"},{version:"MicroPython v1.22.1",date:"2024-01-05",stamp:"20240105",tag:"v1.22.1"}],Pb=[{board:"Raspberry Pi Pico",firmwareName:"RPI_PICO"},{board:"Raspberry Pi Pico W",firmwareName:"RPI_PICO_W"}],Wl=Pb.flatMap(({board:o,firmwareName:i})=>Qb.map(({version:u,date:s,stamp:c,tag:h})=>{const p=`${i}-${c}-${h}.uf2`;return{board:o,version:u,date:s,fileName:p,url:`https://micropython.org/resources/firmware/${p}`}})),Wu=512,Ju=`import builtins as _pkp_builtins
`;function ml(o){return JSON.stringify(o)}function Zb(o){return`bytes.fromhex(${JSON.stringify([...o].map(i=>i.toString(16).padStart(2,"0")).join(""))})`}function Wb(o,i){return`${o==="/"?"":o.replace(/\/$/,"")}/${i}`}class Jb{constructor(i){this.repl=i}async list(i="/"){const u=`
import os
base = ${ml(i)}
for name in os.listdir(base):
    p = (${ml(i)}.rstrip('/') + '/' + name) if ${ml(i)} != '/' else '/' + name
    try:
        st = os.stat(p)
        mode = st[0]
        kind = 'dir' if (mode & 0x4000) else 'file'
        size = st[6]
    except Exception:
        kind = 'unknown'
        size = -1
    print(name + '\\t' + kind + '\\t' + str(size))
`,s=await this.repl.exec(u);if(s.error)throw new Error(s.error);return s.output.split(/\r?\n/).map(c=>c.trim()).filter(Boolean).map(c=>{const[h,p,b]=c.split("	"),v=p==="dir"||p==="file"?p:"unknown",y=parseInt(b??"",10);return{name:h,path:Wb(i,h),type:v,...Number.isFinite(y)&&y>=0?{size:y}:{}}})}async readText(i){const u=`
import sys
${Ju}with _pkp_builtins.open(${ml(i)}, 'rb') as f:
    while True:
        b = f.read(${Wu})
        if not b:
            break
        print(b.hex())
`,s=await this.repl.exec(u,1e4);if(s.error)throw new Error(s.error);const c=s.output.replace(/\s+/g,"");return new TextDecoder().decode(e0(c))}async writeText(i,u,s){const c=new TextEncoder().encode(u);if(s==null||s(5,"Klargør fil..."),await this.repl.exec(`${Ju}_pkp_builtins.open(${ml(i)}, 'wb').close()`),c.length===0){s==null||s(100,"Gemt på Pico");return}for(let h=0;h<c.length;h+=Wu){const p=c.slice(h,h+Wu),b=`
${Ju}with _pkp_builtins.open(${ml(i)}, 'ab') as f:
    f.write(${Zb(p)})
`,v=await this.repl.exec(b,1e4);if(v.error)throw new Error(v.error);const y=Math.min(h+p.length,c.length);s==null||s(10+Math.round(y/c.length*85),`Gemmer ${y}/${c.length} bytes...`)}s==null||s(100,"Gemt på Pico")}async replaceTextSafely(i,u,s,c={}){const h=`${i}.tmp`;if(await this.writeText(h,u,(v,y)=>s==null?void 0:s(Math.min(70,v*.7),y)),s==null||s(78,"Verificerer fil..."),await this.readText(h)!==u)throw await this.delete(h).catch(()=>{}),new Error(`Verificering fejlede for ${i}.`);s==null||s(88,"Udskifter fil...");let b=!!c.createBackup;if(b){const v=await this.readText(i).catch(()=>null);b=v!==null&&v!==u}if(b){const v=await this.nextBackupPath(i).catch(()=>`${i}.backup`);await this.rename(i,v).catch(()=>{})}else await this.delete(i).catch(()=>{});await this.rename(h,i),s==null||s(100,"Installeret på Pico")}async delete(i){const u=await this.repl.exec(`
import os
os.remove(${ml(i)})
`);if(u.error)throw new Error(u.error)}async nextBackupPath(i){const u=await this.list("/"),s=new Set(u.map(N=>N.path.toLowerCase())),c=i.replace(/\\/g,"/"),h=c.lastIndexOf("/"),p=h>=0?c.slice(0,h+1):"/",b=h>=0?c.slice(h+1):c.replace(/^\/+/,""),v=b.lastIndexOf("."),y=v>0?b.slice(0,v):b,x=v>0?b.slice(v):"";for(let N=1;N<1e3;N+=1){const j=`${p}${y}_backup${N}${x}`;if(!s.has(j.toLowerCase()))return j}return`${p}${y}_backup${Date.now()}${x}`}async rename(i,u){const s=await this.repl.exec(`
import os
os.rename(${ml(i)}, ${ml(u)})
`);if(s.error)throw new Error(s.error)}}function e0(o){const i=new Uint8Array(Math.floor(o.length/2));for(let u=0;u<i.length;u+=1)i[u]=parseInt(o.slice(u*2,u*2+2),16);return i}const n0=`import ubluetooth\r
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
`,t0=`from machine import Pin, time_pulse_us\r
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
        return cms`,l0=`import array, time\r
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
`,r0=`import utime as time\r
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
`,a0=`# PicoFly.py\r
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
`,i0=`import machine\r
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
        self.initPCA()`,s0=`from machine import Pin\r
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
`,o0=`from machine import Pin\r
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
`,c0=`from machine import Pin, PWM, ADC\r
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
    print('[STOP] Programmet stoppede. Buzzer, lys og servo er sat sikkert.')`,u0=`from machine import Pin\r
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
`,ja=[{id:"program:onboard-led",path:"/main.py",label:"NeoPixel lys (main.py)",description:"Startprogram til NeoPixel med tænd/sluk-knapper og lysstyrke-slider.",kind:"program",content:r0},{id:"program:send-text",path:"/main.py",label:"Send tekst (main.py)",description:"Startprogram med kun et tekstfelt, hvor Picoen sender beskeder til kontrolpanelet.",kind:"program",content:o0},{id:"program:tank-control",path:"/main.py",label:"Robotbil med tankstyring (main.py)",description:"Startprogram til robotbil med to motor-slidere.",kind:"program",content:u0},{id:"program:radar-control",path:"/main.py",label:"Radar med afstandssensor (main.py)",description:"Startprogram til radar med servo, afstandssensor og scan-toggle.",kind:"program",content:s0},{id:"program:smart-home",path:"/main.py",label:"SmartHome alarmstation (main.py)",description:"Startprogram til alarmstation med dør-servo, keypad, PIR, vandsensor, buzzer og NeoPixel.",kind:"program",content:c0},{id:"library:ble-peripheral",path:"/BLEPeripheral.py",label:"BLEPeripheral.py",description:"Bluetooth-biblioteket der får Picoen til at tale med appen.",kind:"library",content:n0},{id:"library:pico-robotics",path:"/PicoRobotics.py",label:"PicoRobotics.py",description:"Bibliotek til Kitronik Pico Robotics Board.",kind:"library",content:i0},{id:"library:pico-fly",path:"/PicoFly.py",label:"PicoFly.py",description:"Bibliotek til PicoFly-board med motorer og servoer.",kind:"library",content:a0},{id:"library:hcsr04",path:"/hcsr04.py",label:"hcsr04.py",description:"Bibliotek til HC-SR04 ultralyds-afstandssensor.",kind:"library",content:t0},{id:"library:neopixel",path:"/neopixel.py",label:"neopixel.py",description:"Bibliotek til NeoPixel LED-strips og LED-ringe.",kind:"library",content:l0}],f0=11914;function d0(){return typeof navigator<"u"&&"serial"in navigator&&!!navigator.serial}function m0(){return d0()?{supported:!0,message:"USB-udvikling er tilgængelig i denne browser."}:{supported:!1,message:"USB-udvikling kræver en computer med Chrome, Edge eller Chromebook."}}class h0{constructor(i={}){de(this,"port",null);de(this,"reader",null);de(this,"writer",null);de(this,"readLoopDone",null);de(this,"readLoopActive",!1);de(this,"disconnecting",!1);de(this,"buffer","");de(this,"events");de(this,"dataListeners",new Set);this.events=i}get connected(){return!!this.port&&!!this.writer}get info(){var i;return((i=this.port)==null?void 0:i.getInfo())??null}async requestAndConnect(){if(!navigator.serial)throw new Error("Web Serial er ikke tilgængelig i denne browser.");const i=await navigator.serial.requestPort({filters:[{usbVendorId:f0}]});await this.openPort(i)}async connectKnownPort(i){await this.openPort(i)}async disconnect(){var v,y;const i=this.connected||!!this.port||!!this.reader,u=this.port,s=this.reader,c=this.writer,h=this.readLoopDone,p=s==null?void 0:s.closed.catch(()=>{}),b=c==null?void 0:c.closed.catch(()=>{});this.disconnecting=!0,this.readLoopActive=!1;try{await(s==null?void 0:s.cancel())}catch{}h&&await h.catch(()=>{}),await p;try{s==null||s.releaseLock()}catch{}this.reader===s&&(this.reader=null);try{await(c==null?void 0:c.close()),await b}catch{try{await(c==null?void 0:c.abort("disconnect"))}catch{}}try{c==null||c.releaseLock()}catch{}this.writer===c&&(this.writer=null),u&&await u.close(),this.port===u&&(this.port=null),this.buffer="",this.readLoopDone===h&&(this.readLoopDone=null),this.disconnecting=!1,i&&((y=(v=this.events).onDisconnect)==null||y.call(v))}async write(i){if(!this.writer)throw new Error("Ingen USB-forbindelse.");await this.writer.write(new TextEncoder().encode(i))}async writeLine(i){await this.write(`${i}\r
`)}addDataListener(i){return this.dataListeners.add(i),()=>this.dataListeners.delete(i)}async openPort(i){var s,c,h;if(await this.disconnect().catch(()=>{}),await i.open({baudRate:115200,bufferSize:4096}),this.port=i,this.writer=((s=i.writable)==null?void 0:s.getWriter())??null,!this.writer||!i.readable)throw new Error("USB-porten kunne ikke åbnes til læsning og skrivning.");const u=i.getInfo();(h=(c=this.events).onLog)==null||h.call(c,"success",`USB-forbindelse oprettet (${p0(u)}).`),this.readLoopDone=this.startReadLoop(i)}async startReadLoop(i){var c,h,p;this.readLoopActive=!0;const u=new TextDecoder;this.reader=((c=i.readable)==null?void 0:c.getReader())??null;const s=this.reader;if(s)try{for(;this.readLoopActive;){const{value:b,done:v}=await s.read();if(v)break;b&&this.consumeText(u.decode(b,{stream:!0}))}}catch(b){this.readLoopActive&&((p=(h=this.events).onLog)==null||p.call(h,"error",b instanceof Error?b.message:"USB-læsning stoppede."))}finally{try{s.releaseLock()}catch{}this.reader===s&&(this.reader=null),this.readLoopActive&&!this.disconnecting&&this.port===i&&this.closeAfterUnexpectedReadEnd(i)}}async closeAfterUnexpectedReadEnd(i){var h,p;const u=this.connected||this.port===i;this.disconnecting=!0,this.readLoopActive=!1;const s=this.writer,c=s==null?void 0:s.closed.catch(()=>{});try{await(s==null?void 0:s.close()),await c}catch{try{await(s==null?void 0:s.abort("disconnect"))}catch{}}try{s==null||s.releaseLock()}catch{}this.writer===s&&(this.writer=null);try{await i.close()}catch{}this.port===i&&(this.port=null),this.buffer="",this.readLoopDone=null,this.disconnecting=!1,u&&((p=(h=this.events).onDisconnect)==null||p.call(h))}consumeText(i){var u,s,c,h;(s=(u=this.events).onData)==null||s.call(u,i);for(const p of this.dataListeners)p(i);for(this.buffer+=i;this.buffer.includes(`
`);){const p=this.buffer.indexOf(`
`),b=this.buffer.slice(0,p).replace(/\r$/,"");this.buffer=this.buffer.slice(p+1),(h=(c=this.events).onLine)==null||h.call(c,b)}}}function p0(o){const i=o.usbVendorId!==void 0?`VID ${o.usbVendorId.toString(16).padStart(4,"0")}`:"ukendt VID",u=o.usbProductId!==void 0?`PID ${o.usbProductId.toString(16).padStart(4,"0")}`:"ukendt PID";return`${i}, ${u}`}const Yp=15e3,gp=64*1024,bp=1e5,qp=new URL("/micropython/micropython.mjs",window.location.origin).toString(),_0=new Set(["bluetooth","machine","network","PicoRobotics","rp2","ubluetooth"]);let g0=0;class b0{constructor(){de(this,"worker",null);de(this,"pending",null);de(this,"nextId",0)}send(i,u={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython-terminalen er optaget. Stop den, eller vent på at kommandoen bliver færdig.",timedOut:!1,unavailable:!1});const s=++this.nextId,c=u.timeoutMs??Yp,h=this.ensureWorker();return new Promise(p=>{const b=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython-terminalen stoppede, fordi kommandoen tog for lang tid. Tjek for uendelige løkker.",timedOut:!0,unavailable:!1}),this.restartWorker()},c);this.pending={id:s,timer:b,onOutput:u.onOutput,resolve:p},h.postMessage({type:"run",id:s,code:v0(i),runtimeUrl:qp})})}reset(){this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),this.restartWorker()}dispose(){var i;this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),(i=this.worker)==null||i.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const i=new Worker(new URL(""+new URL("offlineMicroPython.worker-CDShyJ6y.js",import.meta.url).href,import.meta.url));return i.onmessage=u=>this.handleMessage(u.data),i.onerror=u=>{this.finish({ok:!1,output:"",error:u.message||"Browser-MicroPython-terminalen fejlede i browser-worker.",timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=i,i}handleMessage(i){var s;const u=this.pending;if(!(!u||i.id!==u.id||i.type==="ready")){if(i.type==="stdout"){(s=u.onOutput)==null||s.call(u,i.text);return}if(i.type==="unavailable"){this.finish({ok:!1,output:"",error:i.error,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:i.ok,output:i.output,error:i.error,timedOut:!1,unavailable:!1})}}finish(i){const u=this.pending;u&&(window.clearTimeout(u.timer),this.pending=null,u.resolve(i))}restartWorker(){var i;(i=this.worker)==null||i.terminate(),this.worker=null}}async function y0(o,i={}){const u=typeof i=="number"?i:i.timeoutMs??Yp,s=typeof i=="number"?void 0:i.onOutput,c=typeof i=="number"?void 0:i.signal,h=sf(o);if(h.some(v=>v.level==="error"))return{ok:!1,output:"",error:"",issues:h,timedOut:!1,unavailable:!1};const p=++g0,b=new Worker(new URL(""+new URL("offlineMicroPython.worker-CDShyJ6y.js",import.meta.url).href,import.meta.url));return new Promise(v=>{let y=!1;const x=()=>{N({ok:!1,output:"",error:"",issues:h,timedOut:!1,unavailable:!1})},N=I=>{y||(y=!0,window.clearTimeout(j),c==null||c.removeEventListener("abort",x),b.terminate(),v(I))};if(c!=null&&c.aborted){x();return}c==null||c.addEventListener("abort",x,{once:!0});const j=window.setTimeout(()=>{N({ok:!1,output:"",error:"Offline MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:h,timedOut:!0,unavailable:!1})},u);b.onmessage=I=>{const F=I.data;if(!(F.id!==p||F.type==="ready")){if(F.type==="stdout"){s==null||s(F.text);return}if(F.type==="unavailable"){N({ok:!1,output:"",error:F.error,issues:h,timedOut:!1,unavailable:!0});return}N({ok:F.ok,output:F.output,error:F.error,issues:h,timedOut:!1,unavailable:!1})}},b.onerror=I=>{N({ok:!1,output:"",error:I.message||"Offline MicroPython fejlede i browser-worker.",issues:h,timedOut:!1,unavailable:!1})},b.postMessage({type:"run",id:p,code:o,runtimeUrl:qp})})}function v0(o){const i=JSON.stringify(o);return["try:",`    __pico_repl_value = eval(${i})`,"    if __pico_repl_value is not None:","        print(repr(__pico_repl_value))","except SyntaxError:",`    exec(${i})`,"finally:","    try:","        del __pico_repl_value","    except Exception:","        pass"].join(`
`)}function sf(o){const i=[],u=new Blob([o]).size;u>gp&&i.push({level:"error",text:`Koden er ${u} bytes. Offline MicroPython kører kun små programmer op til ${gp} bytes.`});const s=o.split(/\r?\n/);for(let c=0;c<s.length;c+=1){const h=c+1,p=of(s[c]).trim();if(!p)continue;const b=x0(p);b&&_0.has(b)&&i.push({level:"error",line:h,text:`${b} virker kun på Picoen. Forbind en Pico for at køre denne kode.`});const v=p.match(/\brange\(\s*(-?\d+)\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\)/);v&&S0(v)>bp&&i.push({level:"error",line:h,text:`range(...) er for stor til offline kørsel. Brug højst ${bp} gentagelser.`})}for(const c of E0(s))i.push({level:"warning",text:`Funktionen ${c} ser rekursiv ud. Hvis den ikke stopper, afbryder offline MicroPython efter få sekunder.`});return i}function of(o){let i=null;for(let u=0;u<o.length;u+=1){const s=o[u];if((s==='"'||s==="'")&&o[u-1]!=="\\"&&(i=i===s?null:i??s),s==="#"&&!i)return o.slice(0,u)}return o}function x0(o){const i=o.match(/^import\s+([A-Za-z_]\w*)/);if(i)return i[1];const u=o.match(/^from\s+([A-Za-z_]\w*)\s+import\b/);return(u==null?void 0:u[1])??null}function yp(o){const i=o.match(/^\s*/);return(i==null?void 0:i[0].replace(/\t/g,"    ").length)??0}function S0(o){const i=Number(o[1]),u=o[2]===void 0?void 0:Number(o[2]),s=o[3]===void 0?1:Number(o[3]);if(s===0)return Number.POSITIVE_INFINITY;const p=(u===void 0?i:u)-(u===void 0?0:i);return p>0&&s<0||p<0&&s>0?0:Math.ceil(Math.abs(p/s))}function E0(o){const i=new Set;for(let u=0;u<o.length;u+=1){const s=of(o[u]).trim().match(/^def\s+([A-Za-z_]\w*)\s*\(/);if(!s)continue;const c=s[1],h=yp(o[u]);for(let p=u+1;p<o.length;p+=1){if(!o[p].trim())continue;if(yp(o[p])<=h)break;if(new RegExp(`\\b${c}\\s*\\(`).test(of(o[p]))){i.add(c);break}}}return[...i]}const w0=/^(for|if|while|def|class|elif|else|try|except|finally|with)\b/;function k0(o,i){var x;const u=o.trim(),s=i.split(/\r?\n/),c=N0(u),h=c?s[c-1]??"":"",p=T0(s,c),b=u.split(/\r?\n/).filter(Boolean).at(-1)??"";if(/KeyboardInterrupt/.test(b))return{simple:"Programmet blev stoppet.",technical:u,line:c};if(/MemoryError/.test(b))return{simple:`Picoen eller browserens MicroPython løb tør for hukommelse${c?` omkring linje ${c}`:""}.`,technical:u,line:c};if(/RecursionError/.test(b))return{simple:`En funktion kalder sig selv for mange gange${c?` omkring linje ${c}`:""}.`,technical:u,line:c};const v=b.match(/UnboundLocalError:\s+local variable ['"](.+?)['"]/);if(v)return{simple:`Variablen ${v[1]} bruges inde i en funktion, før den har fået en værdi${c?` på linje ${c}`:""}.`,technical:u,line:c};const y=b.match(/NameError:\s+name ['"](.+?)['"] (?:isn't|is not) defined/);if(y)return{simple:A0(h,y[1])?`Teksten ${y[1]} mangler måske citationstegn${c?` på linje ${c}`:""}.`:`Python kender ikke navnet ${y[1]}${c?` på linje ${c}`:""}.`,technical:u,line:c};if(/ZeroDivisionError/.test(b))return{simple:`Kan ikke dividere med 0${c?` på linje ${c}`:""}.`,technical:u,line:c};if(/IndentationError:\s+unexpected indent/.test(b))return{simple:`Der er for meget indrykning${c?` på linje ${c}`:""}.`,technical:u,line:c};if(/IndentationError/.test(b))return{simple:`Mangler indrykning${c?` på linje ${c}`:""}.`,technical:u,line:c};if(/ImportError|ModuleNotFoundError/.test(b)){const N=(x=b.match(/['"](.+?)['"]/))==null?void 0:x[1];return{simple:`Python kan ikke finde modulet${N?` ${N}`:""}.`,technical:u,line:c}}if(/OSError/.test(b))return/ENOENT|No such file|Errno\s+2/.test(b)?{simple:`Python kan ikke finde filen${c?` på linje ${c}`:""}.`,technical:u,line:c}:/EACCES|permission|denied/i.test(b)?{simple:`Python har ikke adgang til filen eller enheden${c?` på linje ${c}`:""}.`,technical:u,line:c}:{simple:`Der opstod en fejl med en fil eller en enhed${c?` omkring linje ${c}`:""}.`,technical:u,line:c};if(/SyntaxError/.test(b)){if(/invalid syntax/.test(b)&&p.text.trim().endsWith(","))return{simple:`Linje ${p.line??c} slutter med komma. Tjek om der mangler noget efter kommaet.`,technical:u,line:p.line??c};const N=cf(h,c)??cf(p.text,p.line)??R0(s,c);return N?{simple:`Mangler måske : efter linje ${N.line}.`,technical:u,line:N.line}:c&&p.text.trim().endsWith(":")&&h.trim()&&!/^\s+/.test(h)?{simple:`Mangler måske indrykning på linje ${c}.`,technical:u,line:c}:j0(h)?{simple:`Tekst mangler måske citationstegn${c?` på linje ${c}`:""}.`,technical:u,line:c}:M0(h)?{simple:`Tekst mangler måske et afsluttende citationstegn${c?` på linje ${c}`:""}.`,technical:u,line:c}:D0(h)?{simple:`Mangler måske en afsluttende parentes${c?` på linje ${c}`:""}.`,technical:u,line:c}:O0(h)?{simple:`Der er måske en parentes for meget${c?` på linje ${c}`:""}.`,technical:u,line:c}:{simple:`Python fandt en syntaksfejl${c?` omkring linje ${c}`:""}.`,technical:u,line:c}}return/TypeError/.test(b)?/takes .* positional arguments? but .* given/.test(b)||/function takes/.test(b)?{simple:`En funktion får for mange eller for få værdier${c?` på linje ${c}`:""}.`,technical:u,line:c}:/unsupported operand type/.test(b)?{simple:`To værdier kan ikke bruges sammen på den måde${c?` på linje ${c}`:""}.`,technical:u,line:c}:/not callable/.test(b)?{simple:`Der bliver brugt parenteser efter noget, som ikke er en funktion${c?` på linje ${c}`:""}.`,technical:u,line:c}:{simple:`En værdi har den forkerte type${c?` på linje ${c}`:""}.`,technical:u,line:c}:/IndexError/.test(b)?{simple:`Listen har ikke et element på den plads${c?` på linje ${c}`:""}.`,technical:u,line:c}:/KeyError/.test(b)?{simple:`Ordbogen mangler den nøgle${c?` på linje ${c}`:""}.`,technical:u,line:c}:/AttributeError/.test(b)?{simple:`Den ting har ikke den kommando${c?` på linje ${c}`:""}.`,technical:u,line:c}:/ValueError/.test(b)?/invalid literal for int/.test(b)?{simple:`Teksten kan ikke laves om til et heltal${c?` på linje ${c}`:""}.`,technical:u,line:c}:{simple:`Værdien passer ikke her${c?` på linje ${c}`:""}.`,technical:u,line:c}:{simple:`Python fandt en fejl${c?` omkring linje ${c}`:""}.`,technical:u,line:c}}function N0(o){var c;const u=(c=[...o.matchAll(/line\s+(\d+)/g)].at(-1))==null?void 0:c[1];if(!u)return;const s=parseInt(u,10);return Number.isFinite(s)&&s>0?s:void 0}function T0(o,i){if(!i)return{text:""};for(let u=i-2;u>=0;u-=1){const s=o[u]??"";if(s.trim())return{line:u+1,text:s}}return{text:""}}function cf(o,i){if(!i)return null;const u=o.trim();return!w0.test(u)||u.endsWith(":")?null:{line:i}}function R0(o,i){const u=i?Math.min(o.length,i):o.length,s=Math.max(0,u-4);for(let c=u-1;c>=s;c-=1){const h=cf(o[c]??"",c+1);if(h)return h}return null}function M0(o){const i=(o.match(/'/g)??[]).length,u=(o.match(/"/g)??[]).length;return i%2===1||u%2===1}function j0(o){var s,c;const u=(c=(s=o.trim().match(/^print\((.+)\)$/))==null?void 0:s[1])==null?void 0:c.trim();return!u||/['"]/.test(u)?!1:/\s/.test(u)&&/[a-zA-ZæøåÆØÅ]/.test(u)}function A0(o,i){const u=o.trim();return!!i&&/[A-Za-zæøåÆØÅ]/.test(i)&&(u.startsWith("print(")||u.includes(`= ${i}`))}function D0(o){return $p(o)>0}function O0(o){return $p(o)<0}function $p(o){let i=0,u=null;for(let s=0;s<o.length;s+=1){const c=o[s];if((c==='"'||c==="'")&&o[s-1]!=="\\"){u=u===c?null:u??c;continue}u||((c==="("||c==="["||c==="{")&&(i+=1),(c===")"||c==="]"||c==="}")&&(i-=1))}return i}const uf="/min_kode.py",Xp=`print('Hej fra Pico Kontrol Panel')
`,vp=0,$i="Backup-filnavne er reserveret til versionshistorik. Vælg et andet navn.";function lt(o,i){return`${o}:${i}`}function C0(o){return new Promise(i=>window.setTimeout(i,o))}function z0(){const o=J(d=>d.toggleSideMenu),i=J(d=>d.askConfirm),u=J(d=>d.picoIdeOrigin),s=J(d=>d.active),c=J(d=>d.isBleConnected),h=J(d=>d.bleListFiles),p=J(d=>d.bleReadText),b=J(d=>d.bleWriteText),v=J(d=>d.bleDeleteFile),y=J(d=>d.bleRestartAndReconnect),[x,N]=H.useState(!1),[j,I]=H.useState(!1),[F,le]=H.useState([]),[G,q]=H.useState(!1),[se,ce]=H.useState([]),[oe,he]=H.useState(null),[ke,ee]=H.useState(()=>tf(Xu())),[W,ve]=H.useState(uf),[be,ye]=H.useState("local"),[ae,Ie]=H.useState(()=>{var d;return((d=tf(Xu()).find(g=>g.path===uf))==null?void 0:d.content)??Xp}),[Re,$e]=H.useState([]),[C,P]=H.useState(!1),[fe,te]=H.useState(""),[Se,w]=H.useState(""),[O,Z]=H.useState(null),[A,K]=H.useState(!1),[Q,X]=H.useState(null),[Fe,Oe]=H.useState(!1),[at,hl]=H.useState({}),[Ua,zr]=H.useState(!1),[pl,Br]=H.useState(0),[_l,jo]=H.useState(()=>{var d,g;return((d=Wl.find(S=>S.board==="Raspberry Pi Pico W"))==null?void 0:d.board)??((g=Wl[0])==null?void 0:g.board)??""}),[Jl,Lr]=H.useState(()=>{var d,g;return((d=Wl.find(S=>S.board==="Raspberry Pi Pico W"))==null?void 0:d.version)??((g=Wl[0])==null?void 0:g.version)??""}),[Ha,Vt]=H.useState(!1),[Ga,Pi]=H.useState({top:0,left:0}),[Rn,Ur]=H.useState(!1),[Hr,Va]=H.useState(!1),[er,it]=H.useState(!0),[st,gl]=H.useState(""),[Gr,nr]=H.useState([]),[pn,$n]=H.useState(null),[vn,bl]=H.useState(!1),[yl,vl]=H.useState({}),[Dt,An]=H.useState({}),[Xe,xn]=H.useState(null),[cn,Dn]=H.useState(null),[Ao,Ya]=H.useState(""),[Ot,tr]=H.useState(()=>Kh().clearTerminalOnRun),[Yt,Zi]=H.useState(()=>Kh().simplifiedErrors),[Vr,Wi]=H.useState(()=>typeof window<"u"&&window.innerWidth<vp),xl=H.useRef(null),wt=H.useRef(null),un=H.useRef(null),qa=H.useRef(null),Xn=H.useRef(null),tn=H.useRef(null),ln=H.useRef(null),ot=H.useRef(!1),Ct=H.useRef(!1),Yr=H.useRef(!1),lr=H.useRef(null),qr=H.useRef(null),Bn=H.useRef(null),qt=H.useRef(null),Ln=H.useRef(0),Kn=H.useRef(null),ct=H.useRef(null),$t=H.useRef(null),Ze=H.useRef(null),Xt=m0(),pe=u==="control"&&!!s&&c(),kt=pe?(s==null?void 0:s.deviceID)??"ble":null,Sl=Math.max(1,ae.split(`
`).length),Do=new Blob([ae]).size,Ji=be==="pico"?"Picoen":"browseren",es=H.useMemo(()=>[...new Set(Wl.map(d=>d.board))],[]),rr=H.useMemo(()=>Wl.filter(d=>d.board===_l),[_l]),Nt=Wl.find(d=>d.board===_l&&d.version===Jl)??rr[0]??Wl[0],Tt=be==="pico",In=Tt?Rn:Hr,Un=vn||In,$a=Tt?"Pico MicroPython":"Browser-MicroPython",Xa=H.useMemo(()=>{const d=new h0({onLine:g=>{if(Ct.current)return;const S=g.trimEnd();if(Yr.current&&S.trim()){$("info",S);return}ot.current&&S.trim()&&!S.includes(">>>")&&!S.includes("raw REPL")&&$("info",S)},onLog:$,onDisconnect:()=>{N(!1),Ur(!1),bl(!1),ot.current=!1,Yr.current=!1,$r(),$("warning","USB-forbindelse lukket.")}});return xl.current=d,d},[]);function $(d,g){le(S=>[...S.slice(-140),{level:d,text:g}])}function ar(d,g=ae,S="error"){const z=k0(d,g);le(B=>[...B.slice(-140),{level:S,text:z.simple,technical:z.technical}])}function Je(d,g,S=be){ve(d),ye(S),Ie(g),An(z=>({...z,[lt(S,d)]:g}))}function ns(d,g="pico"){ve(d),ye(g),Ie(""),xn(null),Pi({top:0,left:0})}function gn(d,g=(S=>(S=Xn.current)==null?void 0:S.selectionStart)()??d.length){Ie(d),An(z=>({...z,[lt(be,W)]:d})),Ya(""),dr(d,g)}function ir(d,g=be){An(S=>{const z=lt(g,d);if(!(z in S))return S;const B={...S};return delete B[z],B})}function ts(){return yl[W]===ae}function Mn(d,g){vl(S=>({...S,[d]:g}))}function Kt(d,g){Mn(d,g),An(S=>({...S,[lt("pico",d)]:g})),be==="pico"&&W===d&&Ie(g)}function $r(){ce([]),$e([]),vl({}),An({}),xn(null),ve(d=>{const g=tf(Xu());if(g.find(B=>B.path===d))return d;const z=g[0];return ye("local"),Ie(z.content),z.path})}function Sn(d){ut(),X({value:100,label:d}),Ze.current=window.setTimeout(()=>{Ze.current=null,X(null)},900)}function ut(){Ze.current!==null&&(window.clearTimeout(Ze.current),Ze.current=null)}function Oo(){return Q?f.jsxs("div",{className:"ide-task-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(Q.value),children:[f.jsxs("div",{children:[f.jsx("span",{children:Q.label}),f.jsxs("strong",{children:[Math.round(Q.value),"%"]}),Q.cancellable&&f.jsx("button",{className:"ide-task-cancel",type:"button",onClick:ls,"aria-label":"Stop handling",title:"Stop",children:f.jsx(zn,{name:"delete",size:18})})]}),f.jsx("b",{"aria-hidden":"true",children:f.jsx("i",{style:{width:`${Math.max(2,Math.min(100,Q.value))}%`}})})]}):null}function ls(){Bn.current&&El("Stopper læsning...",!0,!0)}function El(d="Stopper læsning...",g=!1,S=!1){var z;ut(),ct.current=null,Ln.current+=1,(z=Bn.current)==null||z.abort(),Bn.current=null,Kn.current=null,he(null),q(!1),X(g?{value:(Q==null?void 0:Q.value)??0,label:d,cancellable:!1}:null),S&&$("warning","Stopper BLE-læsning efter den aktuelle datapakke.")}function Ka(d){var g;if(!(Kn.current===d||ct.current===d)){if(ct.current=d,qt.current){Ln.current+=1,(g=Bn.current)==null||g.abort(),Bn.current=null,Kn.current=null,ns(d),he(d),q(!0),ut(),X({value:2,label:`Skifter til ${De(d)}...`,cancellable:!0});return}rs()}}function rs(){if(qt.current)return;const d=ct.current;if(!d)return;ct.current=null;const g=Ln.current+1;Ln.current=g;const S=new AbortController;Bn.current=S,Kn.current=d,ns(d),he(d),q(!0),ut(),X({value:12,label:`Indlæser ${De(d)}...`,cancellable:!0});const z=(async()=>{try{const B=await p(d,(re,ge)=>{Ln.current===g&&X({value:re,label:ge,cancellable:!0})},S.signal);if(S.signal.aborted||Ln.current!==g)return;Je(d,B,"pico"),Mn(d,B),Sn("Fil indlæst")}catch(B){if(Ln.current!==g)return;U0(B)||S.signal.aborted?$("info",`Stoppede læsning af ${De(d)}.`):(X(null),$("error",B instanceof Error?B.message:"BLE læsning fejlede."))}})();qt.current=z,z.finally(()=>{if(qt.current!==z)return;qt.current=null,Bn.current===S&&(Bn.current=null),Kn.current===d&&(Kn.current=null),!!ct.current||(he(null),q(!1),S.signal.aborted&&X(null)),rs()})}async function Xr(d){const g=Ct.current;Ct.current=!0;try{return await d()}finally{Ct.current=g}}H.useEffect(()=>{if(!er)return;const d=tn.current;d&&(d.scrollTop=d.scrollHeight)},[F,er]),H.useEffect(()=>{Gg({clearTerminalOnRun:Ot,simplifiedErrors:Yt})},[Ot,Yt]),H.useEffect(()=>{var d;rr.some(g=>g.version===Jl)||Lr(((d=rr[0])==null?void 0:d.version)??"")},[rr,Jl]),H.useEffect(()=>{const d=()=>Wi(window.innerWidth<vp);return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),H.useEffect(()=>{const d=()=>{const g=xl.current;wt.current=null,un.current=null,xl.current=null,g==null||g.disconnect().catch(()=>{})};return window.addEventListener("pagehide",d),()=>{var g;ut(),(g=lr.current)==null||g.dispose(),lr.current=null,window.removeEventListener("pagehide",d),d()}},[]),H.useEffect(()=>{const d=g=>{!(g.ctrlKey||g.metaKey)||g.key.toLowerCase()!=="s"||(g.preventDefault(),!G&&W.trim()&&!Vr&&!A&&!O&&!C&&or())};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[be,pe,G,x,ae,W,Vr,A,O,C]);function It(d,g,S){ee(z=>{const B=$0(z,d,g,S);return Ku(B),B})}const ft=F0(se,ke,Dt,x||pe);H.useEffect(()=>{pe&&rn()},[pe]),H.useEffect(()=>{const d=$t.current;d&&d!==kt&&$r(),$t.current=kt},[kt]);async function Ia(){if(Xt.supported){I(!0);try{await Xa.requestAndConnect();const d=new Ib(Xa);wt.current=d,un.current=new Jb(d),N(!0),Br(0),await d.interrupt(),await Fa(d),$("success","Sendte stop-signal til Pico-terminalen."),await Kr(un.current),await dt(un.current)}catch(d){$("error",d instanceof Error?d.message:"USB-forbindelse mislykkedes.");try{await Xa.disconnect()}catch(g){$("error",g instanceof Error?`USB-porten kunne ikke lukkes: ${g.message}`:"USB-porten kunne ikke lukkes.");return}Br(g=>{const S=g+1;return S>=3&&($("info","USB-forbindelsen er mislykkedes flere gange. Hvis Picoen er i BOOTSEL eller mangler MicroPython, kan du bruge MicroPython-download."),zr(!0)),S}),N(!1)}finally{I(!1)}}}async function Fa(d){const g=await d.exec(`import sys
print(sys.implementation.name)
`,4e3);if(g.error||!g.output.toLowerCase().includes("micropython"))throw new Error("MicroPython blev ikke fundet på Picoen.")}async function wl(){var d;try{await((d=xl.current)==null?void 0:d.disconnect()),wt.current=null,un.current=null,N(!1),$r()}catch(g){$("error",g instanceof Error?`USB-porten kunne ikke lukkes: ${g.message}`:"USB-porten kunne ikke lukkes.")}}async function On(d){const g=un.current;if(g){q(!0),Ct.current=!0;try{await d(g)}catch(S){X(null),$("error",S instanceof Error?S.message:"USB filhandling fejlede.")}finally{Ct.current=!1,q(!1)}}}async function rn(d=!0){if(pe){q(!0);try{const g=await h();ce(g),d&&$("success",`Indlæste ${g.length} filer fra Pico via Bluetooth.`)}catch(g){$("error",g instanceof Error?g.message:"BLE filhandling fejlede.")}finally{q(!1)}return}await Kr(un.current,d)}async function Kr(d,g=!0){if(d){q(!0);try{const S=await Xr(()=>d.list("/"));ce(S),g&&$("success",`Indlæste ${S.length} filer fra Pico.`)}catch(S){$("error",S instanceof Error?S.message:"USB filhandling fejlede.")}finally{q(!1)}}}async function kl(){if(pe){q(!0),X({value:4,label:"Tjekker biblioteker på Pico via Bluetooth..."});try{const d=await Nl((g,S)=>X({value:g,label:S}));$e(d),Sn("Fil-tjek færdigt")}catch(d){X(null),$("error",d instanceof Error?d.message:"BLE runtime check fejlede.")}finally{q(!1)}return}await dt(un.current)}async function Nl(d){const g=[],S=ja.filter(B=>B.kind==="library"&&!Dr(B));let z=0;for(const B of ja){if(B.kind==="program"){g.push({...B,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}if(Dr(B)){g.push({...B,status:"unknown",detail:"Opdateres via USB"});continue}try{const re=z/Math.max(1,S.length)*100,ge=100/Math.max(1,S.length);$("info",`Tjekker ${B.label} på Pico via Bluetooth...`),d==null||d(Math.min(95,re),`Tjekker ${B.label} på Pico...`);const Le=await p(B.path,(mt,Qt)=>{d==null||d(Math.min(95,re+mt/100*ge),`${B.label}: ${Qt}`)}),an=Ma(Le)===Ma(B.content);g.push({...B,status:an?"ok":"outdated",detail:an?"Matcher appens version":"Kan installeres via Bluetooth"})}catch{g.push({...B,status:"missing",detail:"Mangler på Pico"})}finally{z+=1}}return d==null||d(100,"Fil-tjek færdigt"),g}async function dt(d){if(d){q(!0);try{const g=await Xr(()=>Ir(d)),S=g;$e(S)}catch(g){$("error",g instanceof Error?g.message:"Runtime check fejlede.")}finally{q(!1)}}}async function Ir(d){if(!d)return[];const g=[];for(const S of ja){if(S.kind==="program"){g.push({...S,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}try{const z=await d.readText(S.path),B=Ma(z)===Ma(S.content);g.push({...S,status:B?"ok":"outdated",detail:B?"Matcher appens version":"Matcher ikke appens version"})}catch{g.push({...S,status:"missing",detail:"Mangler på Pico"})}}return g}async function sr(d=W){if(pe){Ka(d);return}he(d),await On(async g=>{X({value:12,label:`Indlæser ${De(d)}...`});const S=await zt(g,d);Je(d,S,"pico"),Mn(d,S),Sn("Fil indlæst")}),he(null)}async function zt(d,g){var S;try{return await d.readText(g)}catch(z){await((S=wt.current)==null?void 0:S.stop().catch(()=>{})),await C0(120);try{return await d.readText(g)}catch{throw z}}}function Qa(){K(!0)}async function or(){if(be==="pico"){if(!x&&!pe){$("error","Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.");return}await Tl();return}Pa()}function Pa(){if(Aa(W)){$("error",$i);return}It(W,ae,!1),ye("local"),An(d=>({...d,[lt("local",W)]:ae})),K(!1),$("success",`Gemte ${De(W)} lokalt.`)}async function Tl(){if(K(!1),Aa(W))return X(null),$("error",$i),!1;if(X({value:0,label:"Starter gemning..."}),pe){q(!0);try{return await b(W,ae,(g,S)=>X({value:g,label:S})),Mn(W,ae),ye("pico"),An(g=>({...g,[lt("pico",W)]:ae})),Sn("Gemt på Pico via Bluetooth"),$("success",`Gemte ${De(W)} på Pico via Bluetooth.`),bo(W)&&(Vt(!0),$("warning","main.py er gemt. Genstart Picoen for at køre den nye version.")),await rn(!1),!0}catch(g){return X(null),$("error",g instanceof Error?g.message:"BLE gem fejlede."),!1}finally{q(!1)}}if(!un.current)return X(null),!1;let d=!1;return await On(async g=>{fr(W,"pico")?await g.replaceTextSafely(W,ae,(S,z)=>X({value:S,label:z})):await g.writeText(W,ae,(S,z)=>X({value:S,label:z})),Mn(W,ae),ye("pico"),An(S=>({...S,[lt("pico",W)]:ae})),Sn("Gemt på Pico via USB"),$("success",`Gemte ${W}.`),await rn(),await kl(),d=!0}),d}function Fr(){Za(De(W),ae),K(!1),$("success",`Downloadede ${De(W)}.`)}function Za(d,g){const S=new Blob([g],{type:"text/plain;charset=utf-8"}),z=URL.createObjectURL(S),B=document.createElement("a");B.href=z,B.download=d,B.click(),URL.revokeObjectURL(z)}async function En(d){q(!0),Vt(!1),X({value:10,label:"Genstarter Pico..."});try{await y(d)?(Sn("Pico genforbundet"),$("success",d==="control"?"Pico genforbundet. Åbner kontrolpanelet.":"Pico genforbundet til Kodeværkstedet."),d==="ide"&&await rn()):(X(null),$("warning","Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet."))}catch(g){X(null),$("error",g instanceof Error?g.message:"Genstart/genforbindelse mislykkedes.")}finally{q(!1)}}function Bt(d){var re;const g=d??{path:W,source:be},S=g.source==="pico"?"Pico":"browser",z=g.source==="pico"?(d==null?void 0:d.versions.length)??((re=ff(se).get(g.path))==null?void 0:re.length)??0:0,B=z>0?` Det sletter også filens versionshistorik (${z} gemte versioner).`:"";Z(null),i({title:"Slet fil",message:`Vil du slette ${De(g.path)} fra ${S}?${B}`,confirmLabel:"Slet",onConfirm:()=>{Qr(g)}})}async function Qr(d){const g=d.path,S=d.source,z=g===W&&S===be;if(S==="local"){const ge=ke.filter(Le=>Le.path!==g);ee(ge),Ku(ge),z&&Je(g,"","local"),ir(g,"local"),$("warning",`Slettede ${De(g)} fra browseren.`);return}const B=ff(se).get(g)??[],re=[g,...B.map(ge=>ge.path)];if(pe){q(!0);try{for(const Le of re)await v(Le);vl(Le=>{const an={...Le};for(const mt of re)delete an[mt];return an}),z&&Je(g,"","pico");for(const Le of re)ir(Le,"pico");const ge=B.length>0?` og ${B.length} gemte versioner`:"";$("warning",`Slettede ${De(g)}${ge} på Pico via Bluetooth.`),await rn()}catch(ge){$("error",ge instanceof Error?ge.message:"BLE sletning fejlede.")}finally{q(!1)}return}if(!un.current){$("error","Ingen Pico-forbindelse. Kan ikke slette Pico-filen.");return}await On(async ge=>{for(const an of re)await ge.delete(an);vl(an=>{const mt={...an};for(const Qt of re)delete mt[Qt];return mt});const Le=B.length>0?` og ${B.length} gemte versioner`:"";$("warning",`Slettede ${g}${Le}.`),z&&Je(g,"","pico");for(const an of re)ir(an,"pico");await rn(),await kl()})}async function cr(d){if(!d)return;const g=B0(d.name);if(!g){$("error","Kun .py, .txt, .json og .csv kan importeres.");return}if(Aa(g)){$("error",$i);return}if(d.size>128*1024){$("error","Filen er for stor til Pico-værkstedet.");return}const S=await d.text();if(be==="local"){It(g,S,!0),Je(g,S,"local"),$("success",`Importerede ${De(g)} i browseren.`);return}if(!x&&!pe){$("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(pe&&Dr({path:g})){$("error","BLEPeripheral.py kan ikke importeres over Bluetooth, mens den holder forbindelsen i gang. Brug USB i stedet.");return}if(X({value:0,label:"Uploader fil til Pico..."}),pe){q(!0);try{await b(g,S,(B,re)=>X({value:B,label:re})),Mn(g,S),Je(g,S,"pico"),Sn("Fil uploadet til Pico"),$("success",`Importerede ${De(g)} på Pico via Bluetooth.`),await rn()}catch(B){X(null),$("error",B instanceof Error?B.message:"Kunne ikke importere filen til Pico.")}finally{q(!1)}return}if(!un.current){X(null),$("error","Ingen Pico-forbindelse. Kan ikke importere filen til Pico.");return}await On(async B=>{fr(g,"pico")?await B.replaceTextSafely(g,S,(re,ge)=>X({value:re,label:ge})):await B.writeText(g,S,(re,ge)=>X({value:re,label:ge})),Mn(g,S),Je(g,S,"pico"),Sn("Fil uploadet til Pico"),$("success",`Importerede ${De(g)} på Pico.`),await rn(),await kl()})}async function Co(){te(""),P(!0)}function Wa(){const d=xp(fe);if(!d)return;if(Aa(d)){$("error",$i);return}const g=be;if(fr(d,g)){$("error",`Der findes allerede en fil med navnet ${De(d)} i ${g==="pico"?"Pico":"browseren"}.`);return}if(g==="local"){It(d,"",!1),Je(d,"","local"),P(!1),$("success",`Oprettede ${De(d)} i browseren.`);return}Ja(d)}async function Ja(d){if(!x&&!pe){$("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(P(!1),X({value:0,label:"Opretter fil på Pico..."}),pe){q(!0);try{await b(d,"",(g,S)=>X({value:g,label:S})),Mn(d,""),Je(d,"","pico"),Sn("Fil oprettet på Pico"),$("success",`Oprettede ${De(d)} på Pico via Bluetooth.`),await rn()}catch(g){X(null),$("error",g instanceof Error?g.message:"Kunne ikke oprette fil på Pico.")}finally{q(!1)}return}if(!un.current){X(null),$("error","Ingen Pico-forbindelse. Kan ikke oprette Pico-filen.");return}await On(async g=>{await g.writeText(d,"",(S,z)=>X({value:S,label:z})),Mn(d,""),Je(d,"","pico"),Sn("Fil oprettet på Pico"),$("success",`Oprettede ${De(d)} på Pico.`),await rn()})}function ur(d){d.type==="file"&&(Z(d),w(L0(d.path)))}async function Pr(d){if(!O||O.source!=="pico")return;const g=O.path;if(Z(null),X({value:0,label:"Gendanner version..."}),pe){q(!0);try{const S=await p(d.path);await b(g,S,(z,B)=>X({value:z,label:B})),Mn(g,S),Je(g,S,"pico"),Sn("Version gendannet"),await rn(!1)}catch(S){X(null),$("error",S instanceof Error?S.message:"Kunne ikke gendanne versionen.")}finally{q(!1)}return}un.current&&await On(async S=>{await S.replaceTextSafely(g,await S.readText(d.path),(B,re)=>X({value:B,label:re}));const z=await S.readText(g);Mn(g,z),Je(g,z,"pico"),Sn("Version gendannet"),await rn()})}function as(d){i({title:"Slet version",message:`Vil du slette ${De(d.path)} fra Pico?`,confirmLabel:"Slet",onConfirm:()=>{zo(d)}})}async function zo(d){if(pe){q(!0);try{await v(d.path),await rn(!1),Z(g=>g&&{...g,versions:g.versions.filter(S=>S.path!==d.path)})}catch(g){$("error",g instanceof Error?g.message:"Kunne ikke slette versionen.")}finally{q(!1)}return}un.current&&await On(async g=>{await g.delete(d.path),await rn(!1),Z(S=>S&&{...S,versions:S.versions.filter(z=>z.path!==d.path)})})}async function Bo(){if(!O)return;const d=O,g=ef(Se,Xi(d.path));if(!g||g===d.path)return;if(Aa(g)){$("error",$i);return}if(fr(g,d.source)){$("error",`Der findes allerede en fil med navnet ${De(g)}.`);return}const S=d.source==="local",z=d.source==="pico";if(pe&&z&&(bo(d.path)||bo(g))){$("error","main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.");return}q(!0);try{if(z)if(pe){const B=yl[d.path]??await p(d.path);await b(g,B,(re,ge)=>X({value:re,label:ge})),await v(d.path),vl(re=>({...Mp(re,d.path,g),[g]:B}))}else un.current&&(await Xr(()=>un.current.rename(d.path,g)),vl(B=>Mp(B,d.path,g)));S&&ee(B=>{const re=B.map(ge=>ge.path===d.path?{...ge,path:g,updatedAt:Date.now()}:ge);return Ku(re),re}),W===d.path&&be===d.source&&ve(g),An(B=>Z0(B,d.source,d.path,g)),Z(null),w(""),$("success",`Omdøbte ${De(d.path)} til ${De(g)}.`),z&&await rn()}catch(B){$("error",B instanceof Error?B.message:"Kunne ikke omdøbe filen.")}finally{X(null),q(!1)}}function fr(d,g){return g==="pico"?se.some(S=>S.path===d):ke.some(S=>S.path===d)}async function ei(d,g){if(!fr(d,"pico"))return;const S=K0(d,se),z=yl[d]??await p(d);g!==void 0&&Ma(z)===Ma(g)||await b(S,z)}function Lo(d){if(d.type!=="file"){pe&&El(void 0,!1),ve(d.path),ye(d.source);return}if(pe&&Dr(d)){$("warning","BLEPeripheral.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.");return}if(d.source==="local"){pe&&El(void 0,!1);const S=ke.find(z=>z.path===d.path);Je(d.path,Dt[lt("local",d.path)]??(S==null?void 0:S.content)??"","local");return}const g=lt("pico",d.path);if(Object.prototype.hasOwnProperty.call(Dt,g)){pe&&El(void 0,!1),Je(d.path,Dt[g],"pico");return}if(Object.prototype.hasOwnProperty.call(yl,d.path)){pe&&El(void 0,!1),Je(d.path,yl[d.path],"pico");return}sr(d.path)}async function is(){if(!x&&!pe){const d=Sp();$e(d),hl(Ep(d)),Oe(!0),X(null);return}q(!0),X({value:4,label:pe?"Tjekker biblioteker på Pico via Bluetooth...":"Tjekker biblioteker på Pico..."}),$("info",pe?"Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...":"Tjekker om Picoens biblioteker er opdaterede før installation...");try{const d=Re.length>0?Re:pe?await Nl((g,S)=>X({value:g,label:S})):await Xr(()=>Ir(un.current));$e(d),hl(Ep(d)),Oe(!0),X(null)}catch(d){X(null),$("error",d instanceof Error?d.message:"Fil-tjek før installation fejlede.")}finally{q(!1)}}async function Uo(){if(Oe(!1),pe){q(!0);try{const g=(Re.length>0?Re:ja.map(z=>({...z,status:"unknown",detail:"Ikke tjekket"}))).filter(z=>at[z.id]&&!Dr(z));if(g.length===0){$("info","Ingen filer valgt til installation.");return}let S=null;X({value:0,label:"Starter installation..."});for(const[z,B]of g.entries()){$("info",`Installerer ${B.label} via Bluetooth...`);const re=z/g.length*100,ge=100/g.length;await ei(B.path,B.content),await b(B.path,B.content,(Le,an)=>{X({value:Math.min(99,re+Le/100*ge),label:`${B.label}: ${an}`})}),Kt(B.path,B.content),$("success",`Installerede ${B.label}.`),B.kind==="library"&&(S=B),bo(B.path)&&Vt(!0)}Sn("Installation færdig"),await rn(!1),await kl(),S&&cs(S)}catch(d){X(null),$("error",d instanceof Error?d.message:"BLE installation fejlede.")}finally{q(!1)}return}await On(async d=>{const S=(Re.length>0?Re:ja.map(B=>({...B,status:"unknown",detail:"Ikke tjekket"}))).filter(B=>at[B.id]);if(S.length===0){$("info","Ingen filer valgt til installation.");return}let z=null;X({value:0,label:"Starter installation..."});for(const[B,re]of S.entries()){$("info",`Installerer ${re.label}...`);const ge=B/S.length*100,Le=100/S.length;await d.replaceTextSafely(re.path,re.content,(an,mt)=>{X({value:Math.min(99,ge+an/100*Le),label:`${re.label}: ${mt}`})},{createBackup:!0}),Kt(re.path,re.content),$("success",`Installerede ${re.label}.`),re.kind==="library"&&(z=re)}Sn("Installation færdig"),await rn(!1),await kl(),z&&cs(z)})}function ss(){return(Re.length>0?Re:Sp()).filter(g=>at[g.id])}function Ho(){const d=ss();if(d.length===0){$("info","Ingen filer valgt.");return}for(const g of d)It(g.path,g.content,!1);Oe(!1),$("success",`Gemte ${d.length} filer i browseren.`)}function os(){const d=ss();if(d.length===0){$("info","Ingen filer valgt.");return}d.forEach((g,S)=>{window.setTimeout(()=>{Za(De(g.path),g.content)},S*120)}),Oe(!1),$("success",`Starter download af ${d.length} filer.`)}function cs(d){Je(d.path,d.content,"pico"),Mn(d.path,d.content),$("info",`Åbnede ${d.label} i editoren.`)}function Go(d,g){hl(S=>{if(d.kind!=="program")return{...S,[d.id]:g};const z={...S};for(const B of Re)B.kind==="program"&&(z[B.id]=!1);return z[d.id]=g,z})}async function Vo(){if(Ko(),pe&&be==="pico"){$("warning","Bluetooth holder forbindelsen åben, så koden kan ikke køres direkte her. Gem filen, og genstart Picoen for at køre den.");return}if(be==="local"){await Yo();return}const d=wt.current;if(!d){$("error",`${De(W)} er gemt på Picoen, men der er ingen USB-forbindelse til Pico-terminalen.`);return}if(W.endsWith(".py")){if(!ts()&&($("info",`${De(W)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`),!await Tl())){$("error","Pico-forbindelsen blev afbrudt under gemning.");return}if(G)return;Ur(!0),ot.current=!0,it(!0);try{await d.runFile(W),$("success",`Kører ${De(W)}. Brug Stop for at afbryde.`)}catch(g){Ur(!1),ot.current=!1,$("error",g instanceof Error?g.message:"Kunne ikke starte koden.")}return}q(!0);try{const g=await d.exec(ae,2e4);g.output.trim()&&$("info",g.output),g.error.trim()&&ar(g.error,ae),!g.output.trim()&&!g.error.trim()&&$("success","Koden kørte uden output.")}catch(g){$("error",g instanceof Error?g.message:"Kunne ikke køre koden.")}finally{q(!1)}}async function Yo(){const d=sf(ae);if(d.some(S=>S.level==="error")){for(const S of d){const z=S.line?`Linje ${S.line}: `:"";$(S.level==="error"?"error":"warning",`${z}${S.text}`)}return}const g=new AbortController;qr.current=g,q(!0),Va(!0),it(!0),$("info",x?"Starter offline MicroPython for browser-filen.":"Starter offline MicroPython. Forbind Pico med USB for at køre på selve Picoen.");try{const S=[],z=await y0(ae,{signal:g.signal,onOutput:Le=>{S.push(Le),$("info",Le)}});for(const Le of z.issues){const an=Le.line?`Linje ${Le.line}: `:"";$(Le.level==="error"?"error":"warning",`${an}${Le.text}`)}const B=[...S,z.output].filter(Boolean).join(`
`).trim(),re=z.output.trim();!z.error.trim()&&H0(B)?ar(B,ae):(re&&$("info",re),z.error.trim()&&ar(z.error,ae,z.unavailable?"warning":"error")),z.ok&&!B&&!z.error.trim()&&$("success","Offline MicroPython kørte uden output.")}finally{qr.current=null,Va(!1),q(!1)}}async function ni(){var g,S;if(Hr){(g=qr.current)==null||g.abort(),$("warning","Stoppede offline MicroPython."),it(!0);return}if(!Tt&&vn){(S=lr.current)==null||S.reset(),bl(!1),$("warning","Stoppede Browser-MicroPython-terminalen. Variablerne i browser-terminalen blev nulstillet."),it(!0);return}const d=wt.current;if(d)try{await d.stop(),$("warning","Stoppede koden på Pico.")}catch(z){$("error",z instanceof Error?z.message:"Kunne ikke stoppe koden.")}finally{Ur(!1),ot.current=!1,it(!0)}}function qo(){const d=tn.current;if(!d)return;const g=d.scrollHeight-d.scrollTop-d.clientHeight<12;it(g)}function $o(){le([]),it(!0)}async function us(){const d=st.trimEnd();if(!d.trim())return;if(nr(S=>(S.at(-1)===d?S:[...S,d]).slice(-80)),$n(null),Dn(null),In){$("warning",Tt?"Tryk Stop, før du skriver i Pico-terminalen.":"Stop offline MicroPython, før du skriver i browser-terminalen."),Ft();return}if(!Tt){const S=sf(d);if(S.some(B=>B.level==="error")){for(const B of S){const re=B.line?"Linje "+B.line+": ":"";$(B.level==="error"?"error":"warning",re+B.text)}Ft();return}const z=lr.current??new b0;lr.current=z,gl(""),bl(!0),it(!0),$("info",">>> "+d);try{let B=!1;const re=await z.send(d,{timeoutMs:15e3,onOutput:Le=>{B=!0,$("info",Le)}}),ge=re.output.trim();ge&&!B&&$("info",ge),re.error.trim()&&ar(re.error,d,re.unavailable?"warning":"error")}catch(B){$("error",B instanceof Error?B.message:"Browser-MicroPython-terminalen fejlede.")}finally{bl(!1),Ft()}return}if(pe){$("warning","Terminalen bruger USB Serial. Bluetooth-forbindelsen kan vise filer, men kan ikke modtage frie terminalkommandoer."),Ft();return}const g=wt.current;if(!x||!g){$("warning","Forbind en microcontroller med USB for at skrive i MicroPython-terminalen."),Ft();return}gl(""),bl(!0),it(!0),Yr.current=!0,$("info",">>> "+d);try{await g.sendFriendlyLine(d)}catch(S){Yr.current=!1,$("error",S instanceof Error?S.message:"Kunne ikke sende kommando til MicroPython REPL.")}finally{bl(!1),Ft()}}function Ft(){window.requestAnimationFrame(()=>{const d=ln.current;if(!d||d.disabled)return;d.focus();const g=d.value.length;d.selectionStart=g,d.selectionEnd=g})}function fs(d,g,S){return S.length===0?null:f.jsxs("div",{className:"ide-install-group",children:[f.jsxs("div",{className:"ide-install-group-head",children:[f.jsx("h3",{children:d}),f.jsx("p",{children:g})]}),S.map(z=>{const B=pe&&Dr(z);return f.jsxs("label",{className:`ide-install-row ${B?"disabled":""}`,children:[f.jsx("input",{type:"checkbox",checked:!!at[z.id],disabled:B,onChange:re=>Go(z,re.target.checked)}),f.jsxs("span",{children:[f.jsxs("strong",{children:[Xo(z),(z.kind==="library"||!x&&!pe)&&f.jsx("em",{className:`ide-install-status status-${z.status}`,children:B?"USB":I0(z.status)})]}),f.jsxs("small",{children:[z.description,!x&&!pe?` ${z.detail}`:""]})]})]},z.id)})]})}function Xo(d){return d.kind==="program"?d.label.replace(/\s*\(main\.py\)$/i,""):d.label}function Ko(){Ot&&le([]),it(!0)}function Io(d,g){const S=d.indexOf(`
`,g);return S===-1?d.length:S}function dr(d,g){const S=kp(d,g);if(!S||S.query.length<1){xn(null);return}const z=S.query.toLowerCase(),B=wp.filter(ge=>ge.label.toLowerCase().startsWith(z)&&!nf(ge,S.query)).slice(0,8),re=Np(Xn.current,S.start);xn(B.length>0&&re?{items:B,selected:0,start:S.start,end:g,position:re}:null)}function Zr(d,g){const S=kp(d,g);if(!S||S.query.length<1){Dn(null);return}const z=S.query.toLowerCase(),B=wp.filter(ge=>ge.label.toLowerCase().startsWith(z)&&!nf(ge,S.query)).slice(0,8),re=Np(ln.current,S.start);Dn(B.length>0&&re?{items:B,selected:0,start:S.start,end:g,position:re}:null)}function ds(d){const g=d.value.slice(d.selectionStart,d.selectionEnd);Ya(V0(g)?g:"")}function ti(d=Xe==null?void 0:Xe.items[Xe.selected]){if(!d||!Xe)return;const g=ae.slice(0,Xe.start)+d.insert+ae.slice(Xe.end),S=Xe.start+d.insert.length-(d.insert.endsWith("()")?1:0);Ie(g),An(z=>({...z,[lt(be,W)]:g})),xn(null),window.requestAnimationFrame(()=>{const z=Xn.current;z&&(z.focus(),z.selectionStart=S,z.selectionEnd=S,dr(g,S))})}function ms(d=cn==null?void 0:cn.items[cn.selected]){if(!d||!cn)return;const g=st.slice(0,cn.start)+d.insert+st.slice(cn.end),S=cn.start+d.insert.length-(d.insert.endsWith("()")?1:0);gl(g),Dn(null),window.requestAnimationFrame(()=>{const z=ln.current;z&&(z.focus(),z.selectionStart=S,z.selectionEnd=S,Zr(g,S))})}function li(d){var Qt;if((d.ctrlKey||d.metaKey)&&d.key.toLowerCase()==="s"){d.preventDefault(),!G&&W.trim()&&or();return}if(Xe){if(d.key==="ArrowDown"){d.preventDefault(),xn(Ue=>Ue&&{...Ue,selected:(Ue.selected+1)%Ue.items.length});return}if(d.key==="ArrowUp"){d.preventDefault(),xn(Ue=>Ue&&{...Ue,selected:(Ue.selected-1+Ue.items.length)%Ue.items.length});return}if(d.key==="Tab"){d.preventDefault(),ti();return}if(d.key==="Enter"){if(!(Xe.items[Xe.selected]&&nf(Xe.items[Xe.selected],ae.slice(Xe.start,Xe.end)))){d.preventDefault(),ti();return}xn(null)}if(d.key==="Escape"){d.preventDefault(),xn(null);return}}if(d.key==="Enter"){d.preventDefault();const Ue=d.currentTarget,Fn=Ue.selectionStart,Pt=Ue.selectionEnd,hr=ae.lastIndexOf(`
`,Fn-1)+1,Rt=ae.slice(hr,Fn),Wr=((Qt=Rt.match(/^[ \t]*/))==null?void 0:Qt[0])??"",Jr=Rt.trimEnd().endsWith(":")?"    ":"",pr=`
${Wr}${Jr}`,_r=ae.slice(0,Fn)+pr+ae.slice(Pt),Rl=Fn+pr.length;gn(_r,Rl),window.requestAnimationFrame(()=>{Ue.selectionStart=Rl,Ue.selectionEnd=Rl});return}if(d.key!=="Tab")return;d.preventDefault();const g=d.currentTarget,S=g.selectionStart,z=g.selectionEnd,B="    ";if(d.shiftKey){const Ue=ae.lastIndexOf(`
`,S-1)+1,Fn=S===z?Io(ae,S):z,Pt=ae.slice(Ue,Fn);let hr=0,Rt=0;const Wr=Pt.replace(/(^|\n)( {1,4}|\t)/g,(pr,_r,Rl,hs)=>{const ri=Rl.length;return Ue+hs<S&&(hr+=ri),Rt+=ri,_r});if(Rt===0)return;const Jr=ae.slice(0,Ue)+Wr+ae.slice(Fn);gn(Jr,Math.max(Ue,S-hr)),window.requestAnimationFrame(()=>{g.selectionStart=Math.max(Ue,S-hr),g.selectionEnd=S===z?g.selectionStart:Math.max(g.selectionStart,z-Rt)});return}if(S===z){const Ue=ae.slice(0,S)+B+ae.slice(z);gn(Ue,S+B.length),window.requestAnimationFrame(()=>{g.selectionStart=S+B.length,g.selectionEnd=S+B.length});return}const re=ae.lastIndexOf(`
`,S-1)+1,Le=ae.slice(re,z).replace(/^/gm,B),an=Le.split(`
`).length,mt=ae.slice(0,re)+Le+ae.slice(z);gn(mt,S+B.length),window.requestAnimationFrame(()=>{g.selectionStart=S+B.length,g.selectionEnd=z+an*B.length})}function mr(d){if(cn){if(d.key==="ArrowDown"){d.preventDefault(),Dn(g=>g&&{...g,selected:(g.selected+1)%g.items.length});return}if(d.key==="ArrowUp"){d.preventDefault(),Dn(g=>g&&{...g,selected:(g.selected-1+g.items.length)%g.items.length});return}if(d.key==="Enter"||d.key==="Tab"){d.preventDefault(),ms();return}if(d.key==="Escape"){d.preventDefault(),Dn(null);return}}if(d.key==="Tab"){d.preventDefault();const g=d.currentTarget,S=g.selectionStart,z=g.selectionEnd,B="    ",re=st.slice(0,S)+B+st.slice(z),ge=S+B.length;gl(re),$n(null),Dn(null),window.requestAnimationFrame(()=>{g.selectionStart=ge,g.selectionEnd=ge});return}if(d.key==="ArrowUp"||d.key==="ArrowDown"){if(!(d.key==="ArrowUp"?d.currentTarget.selectionStart===0&&d.currentTarget.selectionEnd===0:d.currentTarget.selectionStart===st.length&&d.currentTarget.selectionEnd===st.length)||Gr.length===0)return;d.preventDefault();const S=d.key==="ArrowUp"?pn===null?Gr.length-1:Math.max(0,pn-1):pn===null||pn+1>=Gr.length?null:pn+1;$n(S);const z=S===null?"":Gr[S]??"";gl(z),Dn(null),window.requestAnimationFrame(()=>{const B=ln.current;B&&(B.selectionStart=z.length,B.selectionEnd=z.length)});return}d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),us())}return f.jsxs("div",{className:"screen ide-screen",children:[f.jsx(bf,{title:"Pico Kodeværksted",onMenu:()=>o()}),Vr?f.jsx("div",{className:"ide-size-gate",role:"dialog","aria-modal":"true","aria-labelledby":"ide-size-title",children:f.jsxs("div",{className:"ide-size-gate-panel",children:[f.jsx("h2",{id:"ide-size-title",children:"Brug en bærbar for at bruge Kodeværkstedet"}),f.jsx("p",{children:"Denne skærm er for lille, så du skal åbne Kodeværkstedet på en bærbar eller en større skærm."})]})}):f.jsxs("div",{className:"ide-layout",children:[f.jsxs("section",{className:"ide-panel ide-files-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("h2",{children:"Filer"}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:Co,"aria-label":"Ny fil",title:"Ny fil",children:f.jsx(zn,{name:"plus",size:20})}),f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>{var d;return(d=qa.current)==null?void 0:d.click()},"aria-label":"Importer fil",title:"Importer fil",children:f.jsx(zn,{name:"upload",size:20})}),f.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>rn(),disabled:!x&&!pe||G,"aria-label":"Opdater filer",title:"Opdater filer",children:f.jsx(zn,{name:"refresh",size:20})})]})]}),f.jsx("div",{className:"ide-file-list",children:ft.length===0?f.jsx("button",{type:"button",disabled:!0,children:"Ingen filer læst"}):ft.map(d=>{if(d.kind==="separator"){const B=d.id==="pico-files"&&!x&&!pe;return f.jsxs(H.Fragment,{children:[f.jsx("div",{className:"ide-file-separator",children:f.jsx("span",{children:d.label})}),B&&f.jsx("div",{className:"ide-file-disconnected",role:"status",children:"Ikke forbundet"})]},d.id)}const g=pe&&Dr(d),S=Dt[lt(d.source,d.path)],z=S!==void 0&&S!==X0(d,ke,yl);return f.jsxs("div",{className:`ide-file-row ${W===d.path&&be===d.source?"active":""} ${g?"protected":""}`,children:[f.jsxs("button",{type:"button",onClick:()=>Lo(d),disabled:g,title:g?"Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her":void 0,children:[f.jsx("span",{children:d.name}),f.jsxs("small",{title:z?"Ikke gemte ændringer":"Ingen ikke gemte ændringer",children:[d.source==="pico"&&d.versions.length>0&&f.jsx("em",{className:"ide-file-version-count",title:`${d.versions.length} gemte versioner i historikken`,children:d.versions.length}),f.jsx("i",{className:`ide-file-dirty-dot ${z?"dirty":"clean"}`,"aria-hidden":"true"})]})]}),f.jsx("button",{className:"ide-file-actions",type:"button",onClick:()=>ur(d),disabled:d.type!=="file"||G||g,"aria-label":`Filvalg for ${d.name}`,title:g?"Holder Bluetooth-forbindelsen i gang og kan ikke ændres her":"Filvalg",children:f.jsx(zn,{name:"settings",size:16})})]},`${d.source}:${d.path}`)})})]}),f.jsxs("section",{className:"ide-panel ide-status-panel",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"ide-status-head",children:[f.jsx("h2",{children:pe?"Forbundet Pico":"USB udvikling"}),!pe&&f.jsx("span",{className:`ide-usb-status ${Xt.supported?"available":"unavailable"}`,title:Xt.message,"data-tooltip":Xt.message,role:"img","aria-label":Xt.message,tabIndex:0,children:"!"})]}),pe&&f.jsxs("p",{children:[(s==null?void 0:s.deviceName)??"Pico"," er forbundet via Bluetooth."]})]}),!pe&&f.jsxs("div",{className:"ide-actions",children:[f.jsx("button",{className:"btn btn-primary",type:"button",onClick:x?wl:Ia,disabled:!Xt.supported||j,children:j?"Forbinder...":x?"Afbryd USB":"Forbind USB"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:is,disabled:pe||G,children:"Download"})]}),pe&&f.jsxs("div",{className:"ide-actions",children:[f.jsxs("button",{className:"btn btn-primary ide-connection-state",type:"button",disabled:!0,children:[f.jsx(zn,{name:"power",size:22}),"Bluetooth forbundet"]}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:is,disabled:G,children:"Startprogrammer og biblioteker"})]}),!pe&&f.jsx("div",{className:"ide-runtime",children:f.jsx("div",{className:"ide-mini-actions single",children:f.jsx("button",{className:"btn btn-outline ide-disconnect-btn",type:"button",onClick:()=>zr(!0),children:"MicroPython"})})})]}),f.jsxs("section",{className:"ide-panel ide-editor-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("div",{className:"ide-editor-title",children:f.jsxs("h2",{children:[De(W),f.jsxs("small",{children:[Do," bytes"]})]})}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:"btn btn-outline",type:"button",onClick:Vo,disabled:G,children:"Kør"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:ni,disabled:!Hr&&!(!Tt&&vn)&&(!x||!Rn),children:"Stop"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:Qa,disabled:G||!W.trim(),children:"Gem"}),f.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Bt(),disabled:G||!W.trim(),children:"Slet"})]})]}),Oo(),f.jsxs("div",{className:"ide-editor-wrap",children:[f.jsx("div",{className:"ide-line-numbers","aria-hidden":"true",style:{transform:`translateY(${-Ga.top}px)`},children:Array.from({length:Sl},(d,g)=>f.jsx("span",{children:g+1},g))}),f.jsx("pre",{className:"ide-highlight","aria-hidden":"true",style:{transform:`translate(${-Ga.left}px, ${-Ga.top}px)`},children:q0(ae,Ao)}),f.jsx("textarea",{ref:Xn,className:"ide-editor",value:ae,onChange:d=>gn(d.target.value,d.target.selectionStart),onKeyDown:li,onKeyUp:d=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||dr(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>{dr(d.currentTarget.value,d.currentTarget.selectionStart),ds(d.currentTarget)},onSelect:d=>ds(d.currentTarget),onScroll:d=>{Pi({top:d.currentTarget.scrollTop,left:d.currentTarget.scrollLeft}),Xe&&dr(d.currentTarget.value,d.currentTarget.selectionStart)},readOnly:G||!!oe,"aria-busy":G||!!oe,spellCheck:!1}),Xe&&f.jsx("div",{className:"ide-autocomplete",role:"listbox","aria-label":"Kodeforslag",style:{left:Xe.position.left,top:Xe.position.top},children:Xe.items.map((d,g)=>f.jsx("button",{className:g===Xe.selected?"active":"",type:"button",onMouseDown:S=>{S.preventDefault(),ti(d)},role:"option","aria-selected":g===Xe.selected,children:d.label},d.label))}),oe&&f.jsxs("div",{className:"ide-editor-loading",role:"status","aria-live":"polite",children:[f.jsx("span",{className:"spinner","aria-hidden":"true"}),f.jsxs("strong",{children:["Indlæser ",De(oe),"..."]})]})]})]}),f.jsxs("section",{className:"ide-panel ide-terminal-panel",children:[f.jsxs("div",{className:"ide-panel-head",children:[f.jsx("h2",{children:"Terminal"}),f.jsxs("div",{className:"ide-mini-actions",children:[f.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${Yt?"":"active"}`,type:"button",onClick:()=>Zi(d=>!d),"aria-label":Yt?"Tekniske fejl er slået fra":"Tekniske fejl er slået til","aria-pressed":!Yt,title:Yt?"Vis originale tekniske fejl":"Viser originale tekniske fejl",children:"Teknisk"}),f.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${Ot?"active":""}`,type:"button",onClick:()=>tr(d=>!d),"aria-pressed":Ot,title:Ot?"Terminalen ryddes, hver gang du trykker Kør":"Terminalen beholder tekst, når du trykker Kør",children:"Ryd ved Kør"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:$o,disabled:F.length===0,children:"Ryd"})]})]}),f.jsxs("div",{className:"ide-terminal","aria-live":"polite",ref:tn,onScroll:qo,onClick:()=>{var d;return(d=ln.current)==null?void 0:d.focus()},children:[F.length===0?f.jsx("div",{className:"term-line",children:"Ingen terminaldata endnu."}):F.map((d,g)=>f.jsx("div",{className:`term-line term-${d.level}`,children:d.technical&&!Yt?d.technical:d.text},`${g}-${d.text}`)),f.jsxs("form",{className:`ide-terminal-command ${In?"locked":""}`,onSubmit:d=>{d.preventDefault(),us()},children:[f.jsx("span",{"aria-hidden":"true",children:">>>"}),f.jsx("textarea",{ref:ln,value:st,onChange:d=>{gl(d.target.value),$n(null),Zr(d.target.value,d.target.selectionStart)},onKeyDown:mr,onKeyUp:d=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(d.key)||Zr(d.currentTarget.value,d.currentTarget.selectionStart)},onClick:d=>Zr(d.currentTarget.value,d.currentTarget.selectionStart),disabled:Un,placeholder:$a,"aria-label":"MicroPython-terminalkommando",title:$a,rows:Math.max(1,st.split(`
`).length)})]}),cn&&f.jsx("div",{className:"ide-autocomplete ide-repl-autocomplete",role:"listbox","aria-label":"Terminalforslag",style:{left:cn.position.left,top:cn.position.top},children:cn.items.map((d,g)=>f.jsx("button",{className:g===cn.selected?"active":"",type:"button",onMouseDown:S=>{S.preventDefault(),ms(d)},role:"option","aria-selected":g===cn.selected,children:d.label},d.label))})]})]})]}),f.jsx("input",{ref:qa,type:"file",accept:".py,.txt,.json,.csv",className:"sr-only",onChange:d=>{var g;cr((g=d.target.files)==null?void 0:g[0]),d.currentTarget.value=""}}),A&&f.jsx(yn,{title:"Gem fil",onClose:()=>K(!1),children:f.jsxs("div",{className:"ide-save-options",children:[f.jsx("button",{className:"btn btn-primary",type:"button",onClick:Pa,children:"Gem i browser"}),f.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>void Tl(),disabled:!x&&!pe||G,children:"Gem på Pico"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:Fr,children:"Download til computer"})]})}),Fe&&f.jsx(yn,{title:"Startprogrammer og biblioteker",onClose:()=>Oe(!1),children:f.jsxs("div",{className:"ide-install-list",children:[f.jsx("p",{className:"ide-install-note",children:x||pe?"Vælg et startprogram og de biblioteker dit projekt bruger. Installer lægger filerne på Picoen.":"Du er ikke forbundet til en Pico. Du kan gemme filerne i browseren eller downloade dem til computeren, men de virker først på Picoen, når de er installeret der."}),f.jsxs("div",{className:"ide-install-grid",children:[fs("Startprogrammer (main.py)","Starter automatisk på Picoen.",Re.filter(d=>d.kind==="program")),fs("Biblioteker","Ekstra Python-filer som dine programmer kan importere.",Re.filter(d=>d.kind==="library"))]}),f.jsxs("div",{className:"ide-install-actions",children:[(x||pe)&&f.jsx("button",{className:"btn btn-primary",type:"button",onClick:Uo,disabled:G,children:"Installer valgte på Pico"}),f.jsx("button",{className:x||pe?"btn btn-outline":"btn btn-primary",type:"button",onClick:Ho,disabled:G,children:"Gem valgte i browser"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:os,disabled:G,children:"Download valgte"})]})]})}),Ha&&f.jsx(yn,{title:"main.py er gemt",onClose:()=>Vt(!1),children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:"Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter."}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>void En("control"),disabled:G,children:"Genstart og åbn kontrolpanel"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void En("ide"),disabled:G,children:"Genstart og bliv i Kodeværksted"}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>Vt(!1),disabled:G,children:"Senere"})]})}),Ua&&f.jsx(yn,{title:"Installer MicroPython",onClose:()=>zr(!1),children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:"Hvis Picoen er helt frisk, skal MicroPython først lægges på den."}),f.jsxs("ol",{className:"micropython-steps",children:[f.jsx("li",{children:"Hold BOOTSEL-knappen nede."}),f.jsx("li",{children:"Sæt Picoen i USB, og slip derefter BOOTSEL."}),f.jsx("li",{children:"Vælg Pico-model og MicroPython-version herunder, og download UF2-filen."}),f.jsxs("li",{children:["Kopier UF2-filen til drevet ",f.jsx("strong",{children:"RPI-RP2"})]})]}),f.jsxs("div",{className:"micropython-selects",children:[f.jsx("label",{htmlFor:"micropython-board",children:"Pico-model"}),f.jsx("select",{id:"micropython-board",value:_l,onChange:d=>jo(d.target.value),children:es.map(d=>f.jsx("option",{value:d,children:d},d))}),f.jsx("label",{htmlFor:"micropython-version",children:"MicroPython-version"}),f.jsx("select",{id:"micropython-version",value:(Nt==null?void 0:Nt.version)??Jl,onChange:d=>Lr(d.target.value),children:rr.map(d=>f.jsxs("option",{value:d.version,children:[d.version," (",d.date,")"]},`${d.board}:${d.version}:${d.date}`))})]}),Nt&&f.jsx("a",{className:"btn btn-primary btn-block",href:Nt.url,download:Nt.fileName,children:"Download UF2"}),f.jsx("a",{className:"btn btn-outline btn-block",href:"https://www.raspberrypi.com/documentation/microcontrollers/micropython.html",target:"_blank",rel:"noreferrer",children:"Se vejledning"})]})}),C&&f.jsx(yn,{title:"Ny Python-fil",onClose:()=>P(!1),children:f.jsxs("form",{className:"ide-new-file-form",onSubmit:d=>{d.preventDefault(),Wa()},children:[f.jsx("label",{htmlFor:"new-pico-file",children:"Filnavn"}),f.jsxs("div",{className:"ide-new-file-row",children:[f.jsx("input",{id:"new-pico-file",value:fe,onChange:d=>te(d.target.value),autoFocus:!0,placeholder:"test"}),f.jsx("span",{children:".py"})]}),f.jsxs("p",{children:["Skriv kun navnet. Appen tilføjer .py automatisk og opretter filen i ",Ji,"."]}),f.jsx("button",{className:"btn btn-primary",type:"submit",disabled:!xp(fe),children:"Opret"})]})}),O&&f.jsx(yn,{title:De(O.path),onClose:()=>Z(null),children:f.jsxs("div",{className:"ide-file-action-modal",children:[f.jsxs("form",{className:"ide-file-rename-form",onSubmit:d=>{d.preventDefault(),Bo()},children:[f.jsx("label",{htmlFor:"rename-pico-file",children:"Filnavn"}),f.jsxs("div",{className:"ide-new-file-row",children:[f.jsx("input",{id:"rename-pico-file",value:Se,onChange:d=>w(d.target.value),placeholder:"min_kode"}),f.jsxs("span",{children:[".",Xi(O.path)]})]}),f.jsxs("p",{children:["Skriv kun navnet. Appen beholder filendelsen .",Xi(O.path)," automatisk."]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!ef(Se,Xi(O.path))||ef(Se,Xi(O.path))===O.path||G,children:"Gem navn"})]}),f.jsx("div",{className:"ide-file-action-buttons",children:f.jsx("button",{className:"btn btn-outline btn-danger btn-block",type:"button",onClick:()=>Bt(O),disabled:G,children:"Slet"})}),f.jsxs("section",{className:"ide-version-history",children:[f.jsx("h4",{children:"Versionshistorik"}),O.source!=="pico"?f.jsx("p",{children:"Versioner gemmes kun for filer på Picoen."}):O.versions.length===0?f.jsx("p",{children:"Versionshistorik: 0 gemte versioner."}):f.jsx("div",{className:"ide-version-list",children:O.versions.map(d=>f.jsxs("div",{className:"ide-version-row",children:[f.jsx("span",{children:De(d.path)}),f.jsx("small",{children:d.size!==void 0?`${d.size} bytes`:"Gemt på Pico"}),f.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>void Pr(d),disabled:G,children:"Gendan"}),f.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>as(d),disabled:G,children:"Slet"})]},d.path))})]})]})})]})}function xp(o){var u;const i=(u=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:u.replace(/\.py$/i,"").replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"");return i?`/${i}.py`:""}function B0(o){const i=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop(),u=i==null?void 0:i.match(/^(.+)\.(py|txt|json|csv)$/i);if(!u)return"";const s=Kp(u[1]);return s?`/${s}.${u[2].toLowerCase()}`:""}function ef(o,i="py"){const u=o.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop();if(!u)return"";const s=u.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);if(!s)return"";const c=Kp(s[1]),h=i.replace(/^\./,"").toLowerCase(),p=(s[2]??(h||"py")).toLowerCase();return c?`/${c}.${p}`:""}function L0(o){return De(o).replace(/\.(py|txt|json|csv)$/i,"")}function Kp(o){return o.replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"")}function Xi(o){var s;const i=De(o).match(/\.([a-z0-9]+)$/i),u=(s=i==null?void 0:i[1])==null?void 0:s.toLowerCase();return u&&["py","txt","json","csv"].includes(u)?u:"py"}function Ma(o){return o.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}function Sp(){return ja.map(o=>({...o,status:"unknown",detail:"Kan gemmes uden Pico. Forbind en Pico for at installere."}))}function Ep(o){const i={};return o.forEach(u=>{i[u.id]=!1}),i}function De(o){return o.split("/").filter(Boolean).pop()??o}function bo(o){return o.replace(/\\/g,"/").toLowerCase()==="/main.py"}function U0(o){return o instanceof DOMException&&o.name==="AbortError"}function H0(o){return/Traceback \(most recent call last\):/.test(o)||/\b(?:SyntaxError|NameError|TypeError|ValueError|IndentationError|ImportError|ModuleNotFoundError|ZeroDivisionError|IndexError|KeyError|AttributeError):/.test(o)}function Dr(o){return G0(o)}function G0(o){return o.path.replace(/\\/g,"/").toLowerCase()==="/bleperipheral.py"}const wp=[...["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"].map(o=>({label:o,insert:`${o}${["for","if","while","def","class","elif","else","try","except","finally","with"].includes(o)?" ":""}`})),...["abs","all","any","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","exec","filter","float","getattr","hasattr","hash","hex","id","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","open","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","zip"].map(o=>({label:`${o}()`,insert:`${o}()`})),{label:"for i in range():",insert:"for i in range():"},{label:"while True:",insert:"while True:"},{label:"if True:",insert:"if True:"},{label:"time",insert:"time"},{label:"time.",insert:"time."},{label:"time.sleep",insert:"time.sleep"},{label:"time.sleep()",insert:"time.sleep()"},{label:"time.sleep_ms()",insert:"time.sleep_ms()"},{label:"time.ticks_ms()",insert:"time.ticks_ms()"},{label:"time.ticks_diff()",insert:"time.ticks_diff()"},{label:"machine",insert:"machine"},{label:"machine.",insert:"machine."},{label:"machine.Pin",insert:"machine.Pin"},{label:"machine.PWM",insert:"machine.PWM"},{label:"machine.ADC",insert:"machine.ADC"},{label:"machine.I2C",insert:"machine.I2C"},{label:"machine.SPI",insert:"machine.SPI"},{label:"machine.reset()",insert:"machine.reset()"},{label:"Pin()",insert:"Pin()"},{label:"PWM()",insert:"PWM()"},{label:"ADC()",insert:"ADC()"},{label:"I2C()",insert:"I2C()"},{label:"SPI()",insert:"SPI()"},{label:"Pin.OUT",insert:"Pin.OUT"},{label:"Pin.IN",insert:"Pin.IN"},{label:"Pin.PULL_UP",insert:"Pin.PULL_UP"},{label:"import time",insert:"import time"},{label:"import machine",insert:"import machine"},{label:"from machine import Pin",insert:"from machine import Pin"},{label:"from machine import Pin, PWM",insert:"from machine import Pin, PWM"},{label:"BLEPeripheral",insert:"BLEPeripheral"},{label:"PicoRobotics",insert:"PicoRobotics"},{label:"NeoPixel",insert:"NeoPixel"},{label:"ValueError",insert:"ValueError"},{label:"TypeError",insert:"TypeError"},{label:"OSError",insert:"OSError"},{label:"Exception",insert:"Exception"}];function kp(o,i){const s=o.slice(0,i).match(/[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_.]*$/);return!s||s.index===void 0?null:{query:s[0],start:s.index}}function nf(o,i){const u=o.insert.trim();return!/[().]/.test(u)&&u.toLowerCase()===i.toLowerCase()}function V0(o){return/^[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_]*$/.test(o)}function Np(o,i){if(!o)return null;const u=o.closest(".ide-terminal")??o.parentElement;if(!u)return null;const s=window.getComputedStyle(o),c=document.createElement("div"),h=document.createElement("span"),p=u.getBoundingClientRect(),b=o.getBoundingClientRect();c.style.position="absolute",c.style.visibility="hidden",c.style.pointerEvents="none",c.style.whiteSpace="pre-wrap",c.style.overflowWrap="break-word",c.style.boxSizing=s.boxSizing,c.style.width=`${o.clientWidth}px`,c.style.padding=s.padding,c.style.border=s.border,c.style.font=s.font,c.style.lineHeight=s.lineHeight,c.style.letterSpacing=s.letterSpacing,c.style.tabSize=s.tabSize,c.style.left=`${b.left-p.left-o.scrollLeft}px`,c.style.top=`${b.top-p.top-o.scrollTop}px`,c.textContent=o.value.slice(0,i),h.textContent=o.value.slice(i,i+1)||" ",c.appendChild(h),u.appendChild(c);const v=h.getBoundingClientRect();c.remove();const y=Y0(v.left-p.left,8,Math.max(8,u.clientWidth-296)),x=v.bottom-p.top+6,N=x+218>u.clientHeight?Math.max(8,v.top-p.top-218):x;return{left:y,top:N}}function Y0(o,i,u){return Math.max(i,Math.min(u,o))}function q0(o,i=""){const u=/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,s=/(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm,c=[];return o.split(/(\r?\n)/).forEach((h,p)=>{if(h===`
`||h===`\r
`){c.push(f.jsx("br",{},`br-${p}`));return}let b=0;[...h.matchAll(s)].forEach((y,x)=>{const N=y.index??0;N>b&&c.push(...Tp(h.slice(b,N),u,`${p}-${x}-plain`,i));const j=y[0],I=j.startsWith("#")?"tok-comment":j.startsWith('"')||j.startsWith("'")?"tok-string":/^\d/.test(j)?"tok-number":"tok-builtin";c.push(...xo(j,i,`${p}-${x}-token`,I)),b=N+j.length}),b<h.length&&c.push(...Tp(h.slice(b),u,`${p}-tail`,i))}),c.length?c:" "}function Tp(o,i,u,s=""){const c=[];let h=0;const p=new RegExp(i.source,"g");return[...o.matchAll(p)].forEach((b,v)=>{const y=b.index??0;y>h&&c.push(...xo(o.slice(h,y),s,`${u}-${v}-plain`)),c.push(...xo(b[0],s,`${u}-${v}-keyword`,"tok-keyword")),h=y+b[0].length}),h<o.length&&c.push(...xo(o.slice(h),s,`${u}-plain-end`)),c}function xo(o,i,u,s=""){if(!i)return[f.jsx("span",{className:s||void 0,children:o},u)];const c=[],h=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),p=new RegExp(`(?<![A-Za-zÆØÅæøå0-9_])(${h})(?![A-Za-zÆØÅæøå0-9_])`,"g");let b=0;return[...o.matchAll(p)].forEach((v,y)=>{const x=v.index??0;x>b&&c.push(f.jsx("span",{className:s||void 0,children:o.slice(b,x)},`${u}-${y}-before`)),c.push(f.jsx("span",{className:`${s} tok-match`.trim(),children:v[0]},`${u}-${y}-match`)),b=x+v[0].length}),b<o.length&&c.push(f.jsx("span",{className:s||void 0,children:o.slice(b)},`${u}-after`)),c.length?c:[f.jsx("span",{className:s||void 0,children:o},u)]}function tf(o){return o.length>0?o:[{path:uf,content:Xp,uploaded:!1,updatedAt:Date.now()}]}function $0(o,i,u,s){const c=o.filter(h=>h.path!==i);return[{path:i,content:u,uploaded:s,updatedAt:Date.now()},...c].sort((h,p)=>p.updatedAt-h.updatedAt)}function X0(o,i,u){var s;return o.source==="pico"?u[o.path]:(s=i.find(c=>c.path===o.path))==null?void 0:s.content}function So(o){const i=o.replace(/\\/g,"/"),u=i.lastIndexOf("/"),s=u>=0?i.slice(0,u+1):"",h=(u>=0?i.slice(u+1):i).match(/^(.+)_backup(\d+)(\.[^.]+)$/i);return h?{originalPath:`${s}${h[1]}${h[3]}`,index:parseInt(h[2],10)}:null}function Aa(o){return So(o)!==null}function ff(o){const i=new Map;for(const u of o){const s=So(u.path);if(!s)continue;const c=i.get(s.originalPath)??[];c.push(u),i.set(s.originalPath,c)}for(const u of i.values())u.sort((s,c)=>{var h,p;return(((h=So(c.path))==null?void 0:h.index)??0)-(((p=So(s.path))==null?void 0:p.index)??0)});return i}function K0(o,i){const u=o.replace(/\\/g,"/"),s=u.lastIndexOf("/"),c=s>=0?u.slice(0,s+1):"/",h=s>=0?u.slice(s+1):u.replace(/^\/+/,""),p=h.lastIndexOf("."),b=p>0?h.slice(0,p):h,v=p>0?h.slice(p):"",y=new Set(i.map(x=>x.path.toLowerCase()));for(let x=1;x<1e3;x+=1){const N=`${c}${b}_backup${x}${v}`;if(!y.has(N.toLowerCase()))return N}return`${c}${b}_backup${Date.now()}${v}`}function I0(o){return o==="ok"?"Nyeste":o==="outdated"?"Opdater":o==="missing"?"Mangler":"Ikke tjekket"}function F0(o,i,u,s){const c=new Map,h=ff(o);for(const x of o)Aa(x.path)||c.set(lt("pico",x.path),{kind:"file",name:x.name,path:x.path,type:x.type,size:x.size,source:"pico",uploaded:!0,versions:h.get(x.path)??[]});for(const x of i)c.set(lt("local",x.path),{kind:"file",name:De(x.path),path:x.path,type:"file",source:"local",uploaded:!1,versions:[]});for(const x of Object.keys(u)){const[N,...j]=x.split(":"),I=j.join(":");if(N!=="local"&&N!=="pico"||!I)continue;const F=c.get(x);if(F){c.set(x,F);continue}c.set(x,{kind:"file",name:De(I),path:I,type:"file",source:N,uploaded:!1,versions:N==="pico"?h.get(I)??[]:[]})}const p=[...c.values()].sort(P0),b=p.filter(x=>x.source==="pico"),v=p.filter(x=>x.source==="local"),y=[];return b.length>0||s?y.push({kind:"separator",id:"pico-files",label:s?"Pico":"Microcontroller"},...b):y.push({kind:"separator",id:"pico-files",label:"Microcontroller"}),v.length>0&&y.push({kind:"separator",id:"browser-files",label:"Browser"},...v),y}const Q0=new Map([["main.py",0],["devicesettings.txt",1],["layout.txt",2],["bleperipheral.py",3],["picofly.py",4],["picorobotics.py",5],["neopixel.py",6],["hcsr04.py",7]]);function P0(o,i){const u=Rp(o.path),s=Rp(i.path);return u===null&&s===null?o.name.localeCompare(i.name,"da"):u===null?-1:s===null?1:u-s}function Rp(o){var u;const i=(u=o.replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:u.toLowerCase();return i?Q0.get(i)??null:null}function Mp(o,i,u){if(!(i in o))return o;const s={...o,[u]:o[i]};return delete s[i],s}function Z0(o,i,u,s){const c=`${i}:${u}`;if(!(c in o))return o;const h={...o,[`${i}:${s}`]:o[c]};return delete h[c],h}function W0({open:o}){const i=J(se=>se.screen),u=J(se=>se.active),s=J(se=>se.toggleSideMenu),c=J(se=>se.toggleDebugger),h=J(se=>se.setEditMode),p=J(se=>se.openMenuPage),b=J(se=>se.disconnect),v=J(se=>se.openPicoIde),y=J(se=>se.closePicoIde),x=J(se=>se.picoIdeOrigin),N=i==="dashboard",j=i==="control",I=i==="ide",F=j&&!!(u!=null&&u.canEdit),le=!j||!!(u!=null&&u.isOwnedByMe)||!!(u!=null&&u.canEditCode),G=x==="control",q=x==="control"?"Kontrol Panel":"Hovedmenu";return f.jsxs(f.Fragment,{children:[f.jsx("div",{className:`scrim ${o?"open":"closing"}`,onClick:()=>s(!1)}),f.jsxs("nav",{className:`sidemenu sidemenu-${i} ${o?"open":"closing"}`,"aria-label":"Sidemenu",children:[N&&f.jsxs(f.Fragment,{children:[f.jsx(tt,{label:"Bruger",icon:"user",onClick:()=>p("user-settings")}),f.jsx(tt,{label:"Indstillinger",icon:"settings",onClick:()=>p("application-settings")}),f.jsx(tt,{label:"Kodeværksted",icon:"picoIde",onClick:v,disabled:!le}),f.jsx(lf,{}),f.jsx(tt,{label:"Om appen",icon:"info",onClick:()=>p("application-about")}),f.jsx(tt,{label:"Hjælp",icon:"help",onClick:()=>p("application-help")}),f.jsx(tt,{label:"Fejlfinding",icon:"debugger",onClick:()=>c(!0)})]}),j&&f.jsxs(f.Fragment,{children:[f.jsx(tt,{label:"Indstillinger",icon:"settings",onClick:()=>p("device-settings")}),f.jsx(tt,{label:"Rediger",icon:"edit",onClick:()=>h(!0),disabled:!F}),f.jsx(tt,{label:"Kodeværksted",icon:"picoIde",onClick:v,disabled:!le}),f.jsx(lf,{}),f.jsx(tt,{label:"Hjælp",icon:"help",onClick:()=>p("device-help")}),f.jsx(tt,{label:"Fejlfinding",icon:"debugger",onClick:()=>c(!0)})]}),I&&f.jsxs(f.Fragment,{children:[f.jsx(tt,{label:q,icon:"back",onClick:y}),f.jsx(lf,{})]}),f.jsx("div",{className:"spacer"}),(j||I&&G)&&f.jsx(tt,{label:"Forlad",icon:"exit",onClick:()=>b()})]})]})}function tt({label:o,icon:i,disabled:u,onClick:s}){return f.jsxs("button",{className:"iconbtn",type:"button",onClick:s,disabled:u,"aria-label":o,children:[f.jsx(zn,{name:i}),f.jsx("span",{children:o})]})}function lf(){return f.jsxs("a",{className:"iconbtn sidemenu-link",href:"https://www.teknologiskolen.dk/",target:"_blank",rel:"noreferrer","aria-label":"Teknologiskolen",children:[f.jsx("img",{src:hb,alt:""}),f.jsx("span",{children:"Teknologiskolen"})]})}const J0={error:"term-error",success:"term-success",warning:"term-warning",info:""},jp={error:"[FEJL] ",success:"[SUCCES] ",warning:"[ADVARSEL] ",info:""};function ey(){const o=new Date,i=u=>String(u).padStart(2,"0");return`${i(o.getDate())}-${i(o.getMonth()+1)}-${o.getFullYear()}-${i(o.getHours())}-${i(o.getMinutes())}`}function ny(){const o=J(c=>c.logs),i=J(c=>c.clearLogs),u=J(c=>c.toggleDebugger);function s(){const c=[...o].reverse().map(v=>`${v.time} ${jp[v.level]}${v.message}`).join(`
`),h=new Blob([c],{type:"text/plain"}),p=URL.createObjectURL(h),b=document.createElement("a");b.href=p,b.download=`${ey()}.txt`,b.click(),URL.revokeObjectURL(p)}return f.jsxs(yn,{title:"Fejlfinding",onClose:()=>u(!1),closeVariant:"circle",children:[f.jsx("div",{className:"terminal",children:o.length===0?f.jsx("div",{className:"term-line",children:"Ingen log endnu."}):o.map((c,h)=>f.jsxs("div",{className:`term-line ${J0[c.level]}`,children:[c.time," ",jp[c.level],c.message]},`${c.time}-${h}`))}),f.jsxs("div",{className:"row",style:{marginTop:14},children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:"Ryd"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:s,children:"Gem logfil"})]})]})}function ty(){const o=J(te=>te.menuPage),i=J(te=>te.closeMenuPage),u=J(te=>te.user),s=J(te=>te.active),c=J(te=>te.layout),h=J(te=>te.sliderValues),p=J(te=>te.savedDevices),b=J(te=>te.updateUsername),v=J(te=>te.clearSavedDevices),y=J(te=>te.resetApplicationData),x=J(te=>te.saveDeviceSettings),N=J(te=>te.setEditMode),j=J(te=>te.askConfirm),[I,F]=H.useState((u==null?void 0:u.username)??""),[le,G]=H.useState((s==null?void 0:s.iconID)??0),[q,se]=H.useState(!1),[ce,oe]=H.useState((s==null?void 0:s.canOthersConnect)??!1),[he,ke]=H.useState((s==null?void 0:s.canOthersEdit)??!1),[ee,W]=H.useState((s==null?void 0:s.canOthersEditCode)??!1),[ve,be]=H.useState((s==null?void 0:s.gridCols)??11),[ye,ae]=H.useState((s==null?void 0:s.gridRows)??31),[Ie,Re]=H.useState(!1);H.useEffect(()=>{o==="user-settings"&&F((u==null?void 0:u.username)??"")},[o,u==null?void 0:u.username]),H.useEffect(()=>{o==="device-settings"&&s&&(G(s.iconID),oe(s.canOthersConnect),ke(s.canOthersEdit),W(s.canOthersEditCode),be(s.gridCols),ae(s.gridRows))},[s,o]);const $e=(te,Se)=>Number.isFinite(te)?Math.max(Da,Math.min(Oa,Math.round(te))):Se,C=(u==null?void 0:u.username)??"",P=I.trim(),fe=P.length>0&&P!==C;if(!o)return null;if(o==="user-settings")return f.jsx(yn,{title:"Brugerindstillinger",onClose:i,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(St,{label:"GUID",value:(u==null?void 0:u.userID)??"Ukendt"}),f.jsxs("div",{className:`field ${I.trim()?"filled":""}`,children:[f.jsx("input",{id:"settings-username",value:I,onChange:te=>F(te.target.value),maxLength:24,autoComplete:"off",placeholder:""}),f.jsx("label",{htmlFor:"settings-username",children:"Brugernavn"})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>b(I),disabled:!fe,children:"Gem nyt brugernavn"}),f.jsx("button",{className:"btn btn-outline btn-block btn-danger",type:"button",onClick:()=>j({title:"Start forfra",message:"Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.",confirmLabel:"Slet alt",onConfirm:()=>{y()}}),children:"Slet brugerdata"})]})});if(o==="application-settings")return f.jsx(yn,{title:"Applikationsindstillinger",onClose:i,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(St,{label:"Version",value:Fi}),f.jsx(St,{label:"Bluetooth",value:Ro()?"Tilgængelig":"Ikke tilgængelig"}),f.jsx(St,{label:"Gemte enheder",value:String(p.length)}),f.jsx("div",{className:"notice",children:"Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne tilladelsen i browserens site- eller Bluetooth-indstillinger."}),f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>j({title:"Ryd gemte enheder",message:"Vil du fjerne alle gemte enheder fra denne browser?",confirmLabel:"Ryd",onConfirm:v}),disabled:p.length===0,children:"Ryd gemte enheder"})]})});if(o==="application-about")return f.jsx(yn,{title:"Om appen",onClose:i,children:f.jsxs("div",{className:"settings-stack prose",children:[f.jsx("p",{children:"Pico Kontrol Panel er lavet til at bygge og fjernstyre sjove eller seje Raspberry Pi Pico W-projekter."}),f.jsx(St,{label:"Udvikler",value:"Christian Bröchner Rasmussen"}),f.jsx(St,{label:"Version",value:Fi})]})});if(o==="application-help")return f.jsx(yn,{title:"Hjælp til applikationen",onClose:i,children:f.jsxs("div",{className:"settings-stack prose help-lesson",children:[f.jsxs("div",{className:"help-lesson-card",children:[f.jsx("strong",{children:"Komplet undervisningsforløb"}),f.jsx("p",{children:"Linket åbner Teknologiskolens guide til Pico Kontrol Panel. Her kan du lære hele arbejdsgangen: browseropsætning, Kodeværkstedet, MicroPython, USB-installation, Bluetooth-forbindelse, kontrolpaneler og trådløs kodeudvikling."})]}),f.jsxs("div",{className:"help-lesson-list","aria-label":"Undervisningsforløbet indeholder",children:[f.jsx("span",{children:"Trin-for-trin opsætning"}),f.jsx("span",{children:"Øvelser til kode og kontrolpanel"}),f.jsx("span",{children:"Projektforslag med Pico W"})]}),f.jsx("p",{className:"help-lesson-destination",children:"Du sendes til materialer.teknologiskolen.dk i en ny fane."}),f.jsx("a",{className:"btn btn-primary btn-block",href:"https://materialer.teknologiskolen.dk/lessons/fjernstyring-af-raspberry-pi-pico-w",target:"_blank",rel:"noreferrer",children:"Åbn komplet undervisningsforløb"})]})});if(o==="device-settings"){const te=c.filter(O=>O.type==="slider"),Se=!!(s!=null&&s.isOwnedByMe);async function w(O=!1){if(!s||!Se)return;const Z=$e(ve,s.gridCols),A=$e(ye,s.gridRows),K=ly(c,Z,A);if(K&&!O){j({title:"Gitter kan påvirke layout",message:`Det nuværende layout bruger op til ${K.requiredCols} kolonner og ${K.requiredRows} rækker. Det nye gitter er ${Z} × ${A}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,confirmLabel:"Gem alligevel",onConfirm:()=>{w(!0)}});return}Re(!0),await x(le,ce,ce&&he,ce&&ee,Z,A),be(Z),ae(A),Re(!1)}return f.jsx(yn,{title:"Enhedsindstillinger",onClose:i,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx(St,{label:"Navn",value:(s==null?void 0:s.deviceName)??"Ukendt"}),f.jsx(St,{label:"Ejer",value:ay(s)}),Se?f.jsxs(f.Fragment,{children:[f.jsx("button",{className:"device-icon-pick settings-icon-pick",type:"button",onClick:()=>se(!0),children:f.jsx("img",{src:La(le),alt:""})}),f.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:ce?"":"active",onClick:()=>oe(!1),children:"Privat"}),f.jsx("button",{type:"button",className:ce?"active":"",onClick:()=>oe(!0),children:"Offentlig"})]}),ce&&f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:he?"":"active",onClick:()=>ke(!1),children:"Nej"}),f.jsx("button",{type:"button",className:he?"active":"",onClick:()=>ke(!0),children:"Ja"})]}),f.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),f.jsxs("div",{className:"segmented",children:[f.jsx("button",{type:"button",className:ee?"":"active",onClick:()=>W(!1),children:"Nej"}),f.jsx("button",{type:"button",className:ee?"active":"",onClick:()=>W(!0),children:"Ja"})]})]}),f.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter"}),f.jsxs("div",{className:"row",children:[f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"device-cols",children:"Kolonner"}),f.jsx("input",{id:"device-cols",type:"number",min:Da,max:Oa,value:Number.isNaN(ve)?"":ve,onChange:O=>be(parseInt(O.target.value,10)),onBlur:()=>be($e(ve,(s==null?void 0:s.gridCols)??11))})]}),f.jsxs("div",{className:"grid-field",children:[f.jsx("label",{htmlFor:"device-rows",children:"Rækker"}),f.jsx("input",{id:"device-rows",type:"number",min:Da,max:Oa,value:Number.isNaN(ye)?"":ye,onChange:O=>ae(parseInt(O.target.value,10)),onBlur:()=>ae($e(ye,(s==null?void 0:s.gridRows)??31))})]})]}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>w(),disabled:Ie,children:Ie?"Gemmer...":"Gem enhedsindstillinger"})]}):f.jsxs(f.Fragment,{children:[f.jsx(St,{label:"Ikon ID",value:String((s==null?void 0:s.iconID)??0)}),f.jsx(St,{label:"Redigering",value:s!=null&&s.canEdit?"Tilladt":"Ikke tilladt"}),f.jsx(St,{label:"Gitter",value:`${(s==null?void 0:s.gridCols)??0} × ${(s==null?void 0:s.gridRows)??0}`})]}),f.jsx(St,{label:"Kontroller",value:String(c.length)}),te.length>0&&f.jsxs("div",{className:"settings-section",children:[f.jsx("h4",{children:"Slidere"}),te.map(O=>f.jsxs("div",{className:"slider-meta",children:[f.jsx("strong",{children:O.name}),f.jsxs("span",{children:[O.sliderMin??0," til ",O.sliderMax??100]}),f.jsxs("span",{children:["Retur: ",ry(O.sliderRecenter??"none")]}),f.jsxs("span",{children:["Seneste værdi: ",h[O.name]??"Ikke brugt"]})]},O.name))]}),q&&f.jsx(Lp,{selected:le,onSelect:G,onClose:()=>se(!1)})]})})}return f.jsx(yn,{title:"Hjælp til enheden",onClose:i,children:f.jsxs("div",{className:"settings-stack prose",children:[f.jsx("p",{children:"Knapper sender en kommando med deres navn, når de trykkes."}),f.jsx("p",{children:"Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse."}),f.jsx("p",{children:"Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen."}),(s==null?void 0:s.canEdit)&&f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>N(!0),children:"Rediger layout"})]})})}function ly(o,i,u){let s=0,c=0;for(const h of o)Ca(h)&&(s=Math.max(s,Math.ceil((h.centerX2+h.spanX)/2)+1),c=Math.max(c,Math.ceil((h.centerY2+h.spanY)/2)+1));return i<s||u<c?{requiredCols:s,requiredRows:c}:null}function ry(o){return o==="bottom"?"bund":o==="middle"?"midte":o==="top"?"top":"ingen"}function ay(o){var i;return o?o.isOwnedByMe?"Dig":((i=o.ownerName)==null?void 0:i.trim())||"Anden bruger":"Ukendt"}function St({label:o,value:i}){return f.jsxs("div",{className:"settings-row",children:[f.jsx("span",{children:o}),f.jsx("strong",{children:i})]})}function iy(){const o=J(s=>s.confirmDialog),i=J(s=>s.closeConfirm);if(!o)return null;function u(){o==null||o.onConfirm(),i()}return f.jsx(yn,{title:o.title,onClose:i,children:f.jsxs("div",{className:"settings-stack",children:[f.jsx("p",{className:"confirm-message",children:o.message}),f.jsxs("div",{className:"row",children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:i,children:o.cancelLabel??"Annuller"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:u,children:o.confirmLabel??"Fortsæt"})]})]})})}function sy(){const o=J(s=>s.connectionLost),i=J(s=>s.reconnectLostDevice),u=J(s=>s.dismissConnectionLost);return o?f.jsx(yn,{title:"Forbindelse afbrudt",onClose:u,children:f.jsxs("div",{className:"settings-stack",children:[f.jsxs("p",{className:"confirm-message",children:["Forbindelsen til ",o.deviceName," blev afbrudt. Tjek at Picoen har strøm og er tæt nok på."]}),f.jsxs("div",{className:"row",children:[f.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:u,children:"Luk"}),f.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>i(),children:"Genforbind"})]})]})}):null}function oy(){const o=J(u=>u.toast),i=J(u=>u.dismissToast);return o?f.jsx("div",{className:"toast",role:"alert",onClick:i,children:o.message},o.id):null}function cy(){const o=J(b=>b.screen),i=J(b=>b.splashTarget),u=J(b=>b.init),s=J(b=>b.sideMenuOpen),c=J(b=>b.debuggerOpen),[h,p]=H.useState(!1);return H.useEffect(()=>{u()},[u]),H.useEffect(()=>{if(s){p(!0);return}const b=setTimeout(()=>p(!1),140);return()=>clearTimeout(b)},[s]),f.jsxs("div",{className:"app",children:[o==="splash"&&i==="intro"&&f.jsx(np,{}),o==="splash"&&i==="dashboard"&&f.jsx(tp,{}),o==="splash"&&f.jsx(bb,{}),o==="intro"&&f.jsx(np,{}),o==="dashboard"&&f.jsx(tp,{}),o==="connection"&&f.jsx(Eb,{}),o==="create"&&f.jsx(wb,{}),o==="control"&&f.jsx($b,{}),o==="ide"&&f.jsx(z0,{}),h&&f.jsx(W0,{open:s}),f.jsx(ty,{}),f.jsx(sy,{}),f.jsx(iy,{}),c&&f.jsx(ny,{}),f.jsx(oy,{})]})}function uy(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{const o=new URL("sw.js",window.location.href);navigator.serviceWorker.register(o,{scope:"./"}).catch(i=>{console.warn("Service worker registration failed:",i)})})}uy();Ag.createRoot(document.getElementById("root")).render(f.jsx(Ki.StrictMode,{children:f.jsx(cy,{})}));
