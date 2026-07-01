var ag=Object.defineProperty;var ig=(c,r,f)=>r in c?ag(c,r,{enumerable:!0,configurable:!0,writable:!0,value:f}):c[r]=f;var de=(c,r,f)=>ig(c,typeof r!="symbol"?r+"":r,f);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const m of o)if(m.type==="childList")for(const _ of m.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&s(_)}).observe(document,{childList:!0,subtree:!0});function f(o){const m={};return o.integrity&&(m.integrity=o.integrity),o.referrerPolicy&&(m.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?m.credentials="include":o.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function s(o){if(o.ep)return;o.ep=!0;const m=f(o);fetch(o.href,m)}})();function sp(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var hu={exports:{}},yr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ph;function rg(){if(ph)return yr;ph=1;var c=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function f(s,o,m){var _=null;if(m!==void 0&&(_=""+m),o.key!==void 0&&(_=""+o.key),"key"in o){m={};for(var g in o)g!=="key"&&(m[g]=o[g])}else m=o;return o=m.ref,{$$typeof:c,type:s,key:_,ref:o!==void 0?o:null,props:m}}return yr.Fragment=r,yr.jsx=f,yr.jsxs=f,yr}var _h;function sg(){return _h||(_h=1,hu.exports=rg()),hu.exports}var u=sg(),pu={exports:{}},be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gh;function cg(){if(gh)return be;gh=1;var c=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),_=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),M=Symbol.for("react.activity"),D=Symbol.iterator;function I(S){return S===null||typeof S!="object"?null:(S=D&&S[D]||S["@@iterator"],typeof S=="function"?S:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},le=Object.assign,L={};function U(S,z,J){this.props=S,this.context=z,this.refs=L,this.updater=J||Z}U.prototype.isReactComponent={},U.prototype.setState=function(S,z){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,z,"setState")},U.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function pe(){}pe.prototype=U.prototype;function ce(S,z,J){this.props=S,this.context=z,this.refs=L,this.updater=J||Z}var Ee=ce.prototype=new pe;Ee.constructor=ce,le(Ee,U.prototype),Ee.isPureReactComponent=!0;var ue=Array.isArray;function we(){}var ee={H:null,A:null,T:null,S:null},P=Object.prototype.hasOwnProperty;function ge(S,z,J){var k=J.ref;return{$$typeof:c,type:S,key:z,ref:k!==void 0?k:null,props:J}}function _e(S,z){return ge(S.type,z,S.props)}function ye(S){return typeof S=="object"&&S!==null&&S.$$typeof===c}function se(S){var z={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(J){return z[J]})}var Ge=/\/+/g;function Ae(S,z){return typeof S=="object"&&S!==null&&S.key!=null?se(""+S.key):z.toString(36)}function Ie(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(we,we):(S.status="pending",S.then(function(z){S.status==="pending"&&(S.status="fulfilled",S.value=z)},function(z){S.status==="pending"&&(S.status="rejected",S.reason=z)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function O(S,z,J,k,$){var F=typeof S;(F==="undefined"||F==="boolean")&&(S=null);var K=!1;if(S===null)K=!0;else switch(F){case"bigint":case"string":case"number":K=!0;break;case"object":switch(S.$$typeof){case c:case r:K=!0;break;case E:return K=S._init,O(K(S._payload),z,J,k,$)}}if(K)return $=$(S),K=k===""?"."+Ae(S,0):k,ue($)?(J="",K!=null&&(J=K.replace(Ge,"$&/")+"/"),O($,z,J,"",function(rn){return rn})):$!=null&&(ye($)&&($=_e($,J+($.key==null||S&&S.key===$.key?"":(""+$.key).replace(Ge,"$&/")+"/")+K)),z.push($)),1;K=0;var Ke=k===""?".":k+":";if(ue(S))for(var Le=0;Le<S.length;Le++)k=S[Le],F=Ke+Ae(k,Le),K+=O(k,z,J,F,$);else if(Le=I(S),typeof Le=="function")for(S=Le.call(S),Le=0;!(k=S.next()).done;)k=k.value,F=Ke+Ae(k,Le++),K+=O(k,z,J,F,$);else if(F==="object"){if(typeof S.then=="function")return O(Ie(S),z,J,k,$);throw z=String(S),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return K}function H(S,z,J){if(S==null)return S;var k=[],$=0;return O(S,k,"","",function(F){return z.call(J,F,$++)}),k}function ae(S){if(S._status===-1){var z=S._result;z=z(),z.then(function(J){(S._status===0||S._status===-1)&&(S._status=1,S._result=J)},function(J){(S._status===0||S._status===-1)&&(S._status=2,S._result=J)}),S._status===-1&&(S._status=0,S._result=z)}if(S._status===1)return S._result.default;throw S._result}var xe=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},fe={map:H,forEach:function(S,z,J){H(S,function(){z.apply(this,arguments)},J)},count:function(S){var z=0;return H(S,function(){z++}),z},toArray:function(S){return H(S,function(z){return z})||[]},only:function(S){if(!ye(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return be.Activity=M,be.Children=fe,be.Component=U,be.Fragment=f,be.Profiler=o,be.PureComponent=ce,be.StrictMode=s,be.Suspense=v,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,be.__COMPILER_RUNTIME={__proto__:null,c:function(S){return ee.H.useMemoCache(S)}},be.cache=function(S){return function(){return S.apply(null,arguments)}},be.cacheSignal=function(){return null},be.cloneElement=function(S,z,J){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var k=le({},S.props),$=S.key;if(z!=null)for(F in z.key!==void 0&&($=""+z.key),z)!P.call(z,F)||F==="key"||F==="__self"||F==="__source"||F==="ref"&&z.ref===void 0||(k[F]=z[F]);var F=arguments.length-2;if(F===1)k.children=J;else if(1<F){for(var K=Array(F),Ke=0;Ke<F;Ke++)K[Ke]=arguments[Ke+2];k.children=K}return ge(S.type,$,k)},be.createContext=function(S){return S={$$typeof:_,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:m,_context:S},S},be.createElement=function(S,z,J){var k,$={},F=null;if(z!=null)for(k in z.key!==void 0&&(F=""+z.key),z)P.call(z,k)&&k!=="key"&&k!=="__self"&&k!=="__source"&&($[k]=z[k]);var K=arguments.length-2;if(K===1)$.children=J;else if(1<K){for(var Ke=Array(K),Le=0;Le<K;Le++)Ke[Le]=arguments[Le+2];$.children=Ke}if(S&&S.defaultProps)for(k in K=S.defaultProps,K)$[k]===void 0&&($[k]=K[k]);return ge(S,F,$)},be.createRef=function(){return{current:null}},be.forwardRef=function(S){return{$$typeof:g,render:S}},be.isValidElement=ye,be.lazy=function(S){return{$$typeof:E,_payload:{_status:-1,_result:S},_init:ae}},be.memo=function(S,z){return{$$typeof:b,type:S,compare:z===void 0?null:z}},be.startTransition=function(S){var z=ee.T,J={};ee.T=J;try{var k=S(),$=ee.S;$!==null&&$(J,k),typeof k=="object"&&k!==null&&typeof k.then=="function"&&k.then(we,xe)}catch(F){xe(F)}finally{z!==null&&J.types!==null&&(z.types=J.types),ee.T=z}},be.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},be.use=function(S){return ee.H.use(S)},be.useActionState=function(S,z,J){return ee.H.useActionState(S,z,J)},be.useCallback=function(S,z){return ee.H.useCallback(S,z)},be.useContext=function(S){return ee.H.useContext(S)},be.useDebugValue=function(){},be.useDeferredValue=function(S,z){return ee.H.useDeferredValue(S,z)},be.useEffect=function(S,z){return ee.H.useEffect(S,z)},be.useEffectEvent=function(S){return ee.H.useEffectEvent(S)},be.useId=function(){return ee.H.useId()},be.useImperativeHandle=function(S,z,J){return ee.H.useImperativeHandle(S,z,J)},be.useInsertionEffect=function(S,z){return ee.H.useInsertionEffect(S,z)},be.useLayoutEffect=function(S,z){return ee.H.useLayoutEffect(S,z)},be.useMemo=function(S,z){return ee.H.useMemo(S,z)},be.useOptimistic=function(S,z){return ee.H.useOptimistic(S,z)},be.useReducer=function(S,z,J){return ee.H.useReducer(S,z,J)},be.useRef=function(S){return ee.H.useRef(S)},be.useState=function(S){return ee.H.useState(S)},be.useSyncExternalStore=function(S,z,J){return ee.H.useSyncExternalStore(S,z,J)},be.useTransition=function(){return ee.H.useTransition()},be.version="19.2.7",be}var bh;function Cu(){return bh||(bh=1,pu.exports=cg()),pu.exports}var X=Cu();const Nr=sp(X);var _u={exports:{}},vr={},gu={exports:{}},bu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yh;function og(){return yh||(yh=1,(function(c){function r(O,H){var ae=O.length;O.push(H);e:for(;0<ae;){var xe=ae-1>>>1,fe=O[xe];if(0<o(fe,H))O[xe]=H,O[ae]=fe,ae=xe;else break e}}function f(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var H=O[0],ae=O.pop();if(ae!==H){O[0]=ae;e:for(var xe=0,fe=O.length,S=fe>>>1;xe<S;){var z=2*(xe+1)-1,J=O[z],k=z+1,$=O[k];if(0>o(J,ae))k<fe&&0>o($,J)?(O[xe]=$,O[k]=ae,xe=k):(O[xe]=J,O[z]=ae,xe=z);else if(k<fe&&0>o($,ae))O[xe]=$,O[k]=ae,xe=k;else break e}}return H}function o(O,H){var ae=O.sortIndex-H.sortIndex;return ae!==0?ae:O.id-H.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;c.unstable_now=function(){return m.now()}}else{var _=Date,g=_.now();c.unstable_now=function(){return _.now()-g}}var v=[],b=[],E=1,M=null,D=3,I=!1,Z=!1,le=!1,L=!1,U=typeof setTimeout=="function"?setTimeout:null,pe=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;function Ee(O){for(var H=f(b);H!==null;){if(H.callback===null)s(b);else if(H.startTime<=O)s(b),H.sortIndex=H.expirationTime,r(v,H);else break;H=f(b)}}function ue(O){if(le=!1,Ee(O),!Z)if(f(v)!==null)Z=!0,we||(we=!0,se());else{var H=f(b);H!==null&&Ie(ue,H.startTime-O)}}var we=!1,ee=-1,P=5,ge=-1;function _e(){return L?!0:!(c.unstable_now()-ge<P)}function ye(){if(L=!1,we){var O=c.unstable_now();ge=O;var H=!0;try{e:{Z=!1,le&&(le=!1,pe(ee),ee=-1),I=!0;var ae=D;try{t:{for(Ee(O),M=f(v);M!==null&&!(M.expirationTime>O&&_e());){var xe=M.callback;if(typeof xe=="function"){M.callback=null,D=M.priorityLevel;var fe=xe(M.expirationTime<=O);if(O=c.unstable_now(),typeof fe=="function"){M.callback=fe,Ee(O),H=!0;break t}M===f(v)&&s(v),Ee(O)}else s(v);M=f(v)}if(M!==null)H=!0;else{var S=f(b);S!==null&&Ie(ue,S.startTime-O),H=!1}}break e}finally{M=null,D=ae,I=!1}H=void 0}}finally{H?se():we=!1}}}var se;if(typeof ce=="function")se=function(){ce(ye)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,Ae=Ge.port2;Ge.port1.onmessage=ye,se=function(){Ae.postMessage(null)}}else se=function(){U(ye,0)};function Ie(O,H){ee=U(function(){O(c.unstable_now())},H)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(O){O.callback=null},c.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<O?Math.floor(1e3/O):5},c.unstable_getCurrentPriorityLevel=function(){return D},c.unstable_next=function(O){switch(D){case 1:case 2:case 3:var H=3;break;default:H=D}var ae=D;D=H;try{return O()}finally{D=ae}},c.unstable_requestPaint=function(){L=!0},c.unstable_runWithPriority=function(O,H){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ae=D;D=O;try{return H()}finally{D=ae}},c.unstable_scheduleCallback=function(O,H,ae){var xe=c.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?xe+ae:xe):ae=xe,O){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=ae+fe,O={id:E++,callback:H,priorityLevel:O,startTime:ae,expirationTime:fe,sortIndex:-1},ae>xe?(O.sortIndex=ae,r(b,O),f(v)===null&&O===f(b)&&(le?(pe(ee),ee=-1):le=!0,Ie(ue,ae-xe))):(O.sortIndex=fe,r(v,O),Z||I||(Z=!0,we||(we=!0,se()))),O},c.unstable_shouldYield=_e,c.unstable_wrapCallback=function(O){var H=D;return function(){var ae=D;D=H;try{return O.apply(this,arguments)}finally{D=ae}}}})(bu)),bu}var vh;function ug(){return vh||(vh=1,gu.exports=og()),gu.exports}var yu={exports:{}},wt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh;function fg(){if(xh)return wt;xh=1;var c=Cu();function r(v){var b="https://react.dev/errors/"+v;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)b+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+v+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var s={d:{f,r:function(){throw Error(r(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},o=Symbol.for("react.portal");function m(v,b,E){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:M==null?null:""+M,children:v,containerInfo:b,implementation:E}}var _=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(v,b){if(v==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,wt.createPortal=function(v,b){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(r(299));return m(v,b,null,E)},wt.flushSync=function(v){var b=_.T,E=s.p;try{if(_.T=null,s.p=2,v)return v()}finally{_.T=b,s.p=E,s.d.f()}},wt.preconnect=function(v,b){typeof v=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,s.d.C(v,b))},wt.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},wt.preinit=function(v,b){if(typeof v=="string"&&b&&typeof b.as=="string"){var E=b.as,M=g(E,b.crossOrigin),D=typeof b.integrity=="string"?b.integrity:void 0,I=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;E==="style"?s.d.S(v,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:M,integrity:D,fetchPriority:I}):E==="script"&&s.d.X(v,{crossOrigin:M,integrity:D,fetchPriority:I,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},wt.preinitModule=function(v,b){if(typeof v=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var E=g(b.as,b.crossOrigin);s.d.M(v,{crossOrigin:E,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&s.d.M(v)},wt.preload=function(v,b){if(typeof v=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var E=b.as,M=g(E,b.crossOrigin);s.d.L(v,E,{crossOrigin:M,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},wt.preloadModule=function(v,b){if(typeof v=="string")if(b){var E=g(b.as,b.crossOrigin);s.d.m(v,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:E,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else s.d.m(v)},wt.requestFormReset=function(v){s.d.r(v)},wt.unstable_batchedUpdates=function(v,b){return v(b)},wt.useFormState=function(v,b,E){return _.H.useFormState(v,b,E)},wt.useFormStatus=function(){return _.H.useHostTransitionStatus()},wt.version="19.2.7",wt}var Sh;function dg(){if(Sh)return yu.exports;Sh=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(r){console.error(r)}}return c(),yu.exports=fg(),yu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eh;function mg(){if(Eh)return vr;Eh=1;var c=ug(),r=Cu(),f=dg();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(m(e)!==e)throw Error(s(188))}function b(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,l=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return v(a),e;if(i===l)return v(a),t;i=i.sibling}throw Error(s(188))}if(n.return!==l.return)n=a,l=i;else{for(var d=!1,p=a.child;p;){if(p===n){d=!0,n=a,l=i;break}if(p===l){d=!0,l=a,n=i;break}p=p.sibling}if(!d){for(p=i.child;p;){if(p===n){d=!0,n=i,l=a;break}if(p===l){d=!0,l=i,n=a;break}p=p.sibling}if(!d)throw Error(s(189))}}if(n.alternate!==l)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function E(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=E(e),t!==null)return t;e=e.sibling}return null}var M=Object.assign,D=Symbol.for("react.element"),I=Symbol.for("react.transitional.element"),Z=Symbol.for("react.portal"),le=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),pe=Symbol.for("react.consumer"),ce=Symbol.for("react.context"),Ee=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),we=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),ge=Symbol.for("react.activity"),_e=Symbol.for("react.memo_cache_sentinel"),ye=Symbol.iterator;function se(e){return e===null||typeof e!="object"?null:(e=ye&&e[ye]||e["@@iterator"],typeof e=="function"?e:null)}var Ge=Symbol.for("react.client.reference");function Ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ge?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case le:return"Fragment";case U:return"Profiler";case L:return"StrictMode";case ue:return"Suspense";case we:return"SuspenseList";case ge:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Z:return"Portal";case ce:return e.displayName||"Context";case pe:return(e._context.displayName||"Context")+".Consumer";case Ee:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return t=e.displayName||null,t!==null?t:Ae(e.type)||"Memo";case P:t=e._payload,e=e._init;try{return Ae(e(t))}catch{}}return null}var Ie=Array.isArray,O=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},xe=[],fe=-1;function S(e){return{current:e}}function z(e){0>fe||(e.current=xe[fe],xe[fe]=null,fe--)}function J(e,t){fe++,xe[fe]=e.current,e.current=t}var k=S(null),$=S(null),F=S(null),K=S(null);function Ke(e,t){switch(J(F,t),J($,e),J(k,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Um(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Um(t),e=Hm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(k),J(k,e)}function Le(){z(k),z($),z(F)}function rn(e){e.memoizedState!==null&&J(K,e);var t=k.current,n=Hm(t,e.type);t!==n&&(J($,e),J(k,n))}function Gl(e){$.current===e&&(z(k),z($)),K.current===e&&(z(K),pr._currentValue=ae)}var hi,_a;function tl(e){if(hi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);hi=t&&t[1]||"",_a=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hi+e+_a}var ga=!1;function nl(e,t){if(!e||ga)return"";ga=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch(C){var A=C}Reflect.construct(e,[],V)}else{try{V.call()}catch(C){A=C}e.call(V.prototype)}}else{try{throw Error()}catch(C){A=C}(V=e())&&typeof V.catch=="function"&&V.catch(function(){})}}catch(C){if(C&&A&&typeof C.stack=="string")return[C.stack,A.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),d=i[0],p=i[1];if(d&&p){var x=d.split(`
`),j=p.split(`
`);for(a=l=0;l<x.length&&!x[l].includes("DetermineComponentFrameRoot");)l++;for(;a<j.length&&!j[a].includes("DetermineComponentFrameRoot");)a++;if(l===x.length||a===j.length)for(l=x.length-1,a=j.length-1;1<=l&&0<=a&&x[l]!==j[a];)a--;for(;1<=l&&0<=a;l--,a--)if(x[l]!==j[a]){if(l!==1||a!==1)do if(l--,a--,0>a||x[l]!==j[a]){var B=`
`+x[l].replace(" at new "," at ");return e.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",e.displayName)),B}while(1<=l&&0<=a);break}}}finally{ga=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?tl(n):""}function ac(e,t){switch(e.tag){case 26:case 27:case 5:return tl(e.type);case 16:return tl("Lazy");case 13:return e.child!==t&&t!==null?tl("Suspense Fallback"):tl("Suspense");case 19:return tl("SuspenseList");case 0:case 15:return nl(e.type,!1);case 11:return nl(e.type.render,!1);case 1:return nl(e.type,!0);case 31:return tl("Activity");default:return""}}function Vl(e){try{var t="",n=null;do t+=ac(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ba=Object.prototype.hasOwnProperty,pi=c.unstable_scheduleCallback,Mn=c.unstable_cancelCallback,_i=c.unstable_shouldYield,jr=c.unstable_requestPaint,Nt=c.unstable_now,ya=c.unstable_getCurrentPriorityLevel,gi=c.unstable_ImmediatePriority,bi=c.unstable_UserBlockingPriority,Yl=c.unstable_NormalPriority,Rn=c.unstable_LowPriority,jn=c.unstable_IdlePriority,ll=c.log,ql=c.unstable_setDisableYieldValue,St=null,Be=null;function _t(e){if(typeof ll=="function"&&ql(e),Be&&typeof Be.setStrictMode=="function")try{Be.setStrictMode(St,e)}catch{}}var rt=Math.clz32?Math.clz32:rc,ic=Math.log,An=Math.LN2;function rc(e){return e>>>=0,e===0?32:31-(ic(e)/An|0)|0}var al=256,va=262144,kn=4194304;function zt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function We(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var a=0,i=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var p=l&134217727;return p!==0?(l=p&~i,l!==0?a=zt(l):(d&=p,d!==0?a=zt(d):n||(n=p&~e,n!==0&&(a=zt(n))))):(p=l&~i,p!==0?a=zt(p):d!==0?a=zt(d):n||(n=l&~e,n!==0&&(a=zt(n)))),a===0?0:t!==0&&t!==a&&(t&i)===0&&(i=a&-a,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:a}function il(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function xa(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sa(){var e=kn;return kn<<=1,(kn&62914560)===0&&(kn=4194304),e}function Dn(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $t(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yi(e,t,n,l,a,i){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var p=e.entanglements,x=e.expirationTimes,j=e.hiddenUpdates;for(n=d&~n;0<n;){var B=31-rt(n),V=1<<B;p[B]=0,x[B]=-1;var A=j[B];if(A!==null)for(j[B]=null,B=0;B<A.length;B++){var C=A[B];C!==null&&(C.lane&=-536870913)}n&=~V}l!==0&&sn(e,l,0),i!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=i&~(d&~t))}function sn(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-rt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function rl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-rt(n),a=1<<l;a&t|e[l]&t&&(e[l]|=t),n&=~a}}function pn(e,t){var n=t&-t;return n=(n&42)!==0?1:_n(n),(n&(e.suspendedLanes|t))!==0?0:n}function _n(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function gn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function vi(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:ch(e.type))}function sl(e,t){var n=H.p;try{return H.p=e,t()}finally{H.p=n}}var Tt=Math.random().toString(36).slice(2),ie="__reactFiber$"+Tt,mt="__reactProps$"+Tt,cl="__reactContainer$"+Tt,xi="__reactEvents$"+Tt,sc="__reactListeners$"+Tt,cc="__reactHandles$"+Tt,ol="__reactResources$"+Tt,Qt="__reactMarker$"+Tt;function Xl(e){delete e[ie],delete e[mt],delete e[xi],delete e[sc],delete e[cc]}function Q(e){var t=e[ie];if(t)return t;for(var n=e.parentNode;n;){if(t=n[cl]||n[ie]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$m(e);e!==null;){if(n=e[ie])return n;e=$m(e)}return t}e=n,n=e.parentNode}return null}function bn(e){if(e=e[ie]||e[cl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Je(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function On(e){var t=e[ol];return t||(t=e[ol]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Pe(e){e[Qt]=!0}var Ea=new Set,Ar={};function st(e,t){Cn(e,t),Cn(e+"Capture",t)}function Cn(e,t){for(Ar[e]=t,e=0;e<t.length;e++)Ea.add(t[e])}var Si=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gt={},ul={};function oc(e){return ba.call(ul,e)?!0:ba.call(gt,e)?!1:Si.test(e)?ul[e]=!0:(gt[e]=!0,!1)}function wa(e,t,n){if(oc(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function yn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function cn(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function Mt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kl(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ei(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(d){n=""+d,i.call(this,d)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Na(e){if(!e._valueTracker){var t=Kl(e)?"checked":"value";e._valueTracker=Ei(e,t,""+e[t])}}function kr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Kl(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function Ta(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var uc=/[\n"\\]/g;function lt(e){return e.replace(uc,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function et(e,t,n,l,a,i,d,p){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Mt(t)):e.value!==""+Mt(t)&&(e.value=""+Mt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?vn(e,d,Mt(t)):n!=null?vn(e,d,Mt(n)):l!=null&&e.removeAttribute("value"),a==null&&i!=null&&(e.defaultChecked=!!i),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+Mt(p):e.removeAttribute("name")}function wi(e,t,n,l,a,i,d,p){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Na(e);return}n=n!=null?""+Mt(n):"",t=t!=null?""+Mt(t):n,p||t===e.value||(e.value=t),e.defaultValue=t}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=p?e.checked:!!l,e.defaultChecked=!!l,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),Na(e)}function vn(e,t,n){t==="number"&&Ta(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function zn(e,t,n,l){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Mt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ni(e,t,n){if(t!=null&&(t=""+Mt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Mt(n):""}function Ti(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(s(92));if(Ie(l)){if(1<l.length)throw Error(s(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Mt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),Na(e)}function fl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fc=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mi(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||fc.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ri(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var a in t)l=t[a],t.hasOwnProperty(a)&&n[a]!==l&&Mi(e,a,l)}else for(var i in t)t.hasOwnProperty(i)&&Mi(e,i,t[i])}function $l(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dc=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ql(e){return Dr.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function on(){}var ji=null;function Ai(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dl=null,ml=null;function Or(e){var t=bn(e);if(t&&(e=t.stateNode)){var n=e[mt]||null;e:switch(e=t.stateNode,t.type){case"input":if(et(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+lt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var a=l[mt]||null;if(!a)throw Error(s(90));et(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&kr(l)}break e;case"textarea":Ni(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&zn(e,!!n.multiple,t,!1)}}}var ki=!1;function Cr(e,t,n){if(ki)return e(t,n);ki=!0;try{var l=e(t);return l}finally{if(ki=!1,(dl!==null||ml!==null)&&(xs(),dl&&(t=dl,e=ml,ml=dl=null,Or(t),e)))for(t=0;t<e.length;t++)Or(e[t])}}function Il(e,t){var n=e.stateNode;if(n===null)return null;var l=n[mt]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bn=!1;if(un)try{var Fl={};Object.defineProperty(Fl,"passive",{get:function(){Bn=!0}}),window.addEventListener("test",Fl,Fl),window.removeEventListener("test",Fl,Fl)}catch{Bn=!1}var xn=null,Ma=null,Ra=null;function Di(){if(Ra)return Ra;var e,t=Ma,n=t.length,l,a="value"in xn?xn.value:xn.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var d=n-e;for(l=1;l<=d&&t[n-l]===a[i-l];l++);return Ra=a.slice(e,1<l?1-l:void 0)}function ja(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Aa(){return!0}function zr(){return!1}function Et(e){function t(n,l,a,i,d){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=i,this.target=d,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(i):i[p]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Aa:zr,this.isPropagationStopped=zr,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Aa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Aa)},persist:function(){},isPersistent:Aa}),t}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ka=Et(Ln),hl=M({},Ln,{view:0,detail:0}),mc=Et(hl),Oi,Ci,fn,Zl=M({},hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fn&&(fn&&e.type==="mousemove"?(Oi=e.screenX-fn.screenX,Ci=e.screenY-fn.screenY):Ci=Oi=0,fn=e),Oi)},movementY:function(e){return"movementY"in e?e.movementY:Ci}}),Br=Et(Zl),h=M({},Zl,{dataTransfer:0}),y=Et(h),N=M({},hl,{relatedTarget:0}),Y=Et(N),q=M({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),he=Et(q),De=M({},Ln,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),It=Et(De),Sn=M({},Ln,{data:0}),pl=Et(Sn),Fe={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zi(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hc[e])?!!t[e]:!1}function Jl(){return zi}var pc=M({},hl,{key:function(e){if(e.key){var t=Fe[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ja(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jl,charCode:function(e){return e.type==="keypress"?ja(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ja(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_c=Et(pc),Yu=M({},Zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ur=Et(Yu),gc=M({},hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jl}),bc=Et(gc),Hr=M({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),xp=Et(Hr),Sp=M({},Zl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ep=Et(Sp),wp=M({},Ln,{newState:0,oldState:0}),Np=Et(wp),Tp=[9,13,27,32],yc=un&&"CompositionEvent"in window,Bi=null;un&&"documentMode"in document&&(Bi=document.documentMode);var Mp=un&&"TextEvent"in window&&!Bi,qu=un&&(!yc||Bi&&8<Bi&&11>=Bi),Xu=" ",Ku=!1;function $u(e,t){switch(e){case"keyup":return Tp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Da=!1;function Rp(e,t){switch(e){case"compositionend":return Qu(t);case"keypress":return t.which!==32?null:(Ku=!0,Xu);case"textInput":return e=t.data,e===Xu&&Ku?null:e;default:return null}}function jp(e,t){if(Da)return e==="compositionend"||!yc&&$u(e,t)?(e=Di(),Ra=Ma=xn=null,Da=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qu&&t.locale!=="ko"?null:t.data;default:return null}}var Ap={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Iu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ap[e.type]:t==="textarea"}function Fu(e,t,n,l){dl?ml?ml.push(l):ml=[l]:dl=l,t=Rs(t,"onChange"),0<t.length&&(n=new ka("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var Li=null,Ui=null;function kp(e){Dm(e,0)}function Gr(e){var t=Je(e);if(kr(t))return e}function Zu(e,t){if(e==="change")return t}var Ju=!1;if(un){var vc;if(un){var xc="oninput"in document;if(!xc){var Pu=document.createElement("div");Pu.setAttribute("oninput","return;"),xc=typeof Pu.oninput=="function"}vc=xc}else vc=!1;Ju=vc&&(!document.documentMode||9<document.documentMode)}function Wu(){Li&&(Li.detachEvent("onpropertychange",ef),Ui=Li=null)}function ef(e){if(e.propertyName==="value"&&Gr(Ui)){var t=[];Fu(t,Ui,e,Ai(e)),Cr(kp,t)}}function Dp(e,t,n){e==="focusin"?(Wu(),Li=t,Ui=n,Li.attachEvent("onpropertychange",ef)):e==="focusout"&&Wu()}function Op(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gr(Ui)}function Cp(e,t){if(e==="click")return Gr(t)}function zp(e,t){if(e==="input"||e==="change")return Gr(t)}function Bp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Bt=typeof Object.is=="function"?Object.is:Bp;function Hi(e,t){if(Bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!ba.call(t,a)||!Bt(e[a],t[a]))return!1}return!0}function tf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nf(e,t){var n=tf(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tf(n)}}function lf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function af(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ta(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ta(e.document)}return t}function Sc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Lp=un&&"documentMode"in document&&11>=document.documentMode,Oa=null,Ec=null,Gi=null,wc=!1;function rf(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wc||Oa==null||Oa!==Ta(l)||(l=Oa,"selectionStart"in l&&Sc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Gi&&Hi(Gi,l)||(Gi=l,l=Rs(Ec,"onSelect"),0<l.length&&(t=new ka("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Oa)))}function Pl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ca={animationend:Pl("Animation","AnimationEnd"),animationiteration:Pl("Animation","AnimationIteration"),animationstart:Pl("Animation","AnimationStart"),transitionrun:Pl("Transition","TransitionRun"),transitionstart:Pl("Transition","TransitionStart"),transitioncancel:Pl("Transition","TransitionCancel"),transitionend:Pl("Transition","TransitionEnd")},Nc={},sf={};un&&(sf=document.createElement("div").style,"AnimationEvent"in window||(delete Ca.animationend.animation,delete Ca.animationiteration.animation,delete Ca.animationstart.animation),"TransitionEvent"in window||delete Ca.transitionend.transition);function Wl(e){if(Nc[e])return Nc[e];if(!Ca[e])return e;var t=Ca[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in sf)return Nc[e]=t[n];return e}var cf=Wl("animationend"),of=Wl("animationiteration"),uf=Wl("animationstart"),Up=Wl("transitionrun"),Hp=Wl("transitionstart"),Gp=Wl("transitioncancel"),ff=Wl("transitionend"),df=new Map,Tc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tc.push("scrollEnd");function dn(e,t){df.set(e,t),st(t,[e])}var Vr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ft=[],za=0,Mc=0;function Yr(){for(var e=za,t=Mc=za=0;t<e;){var n=Ft[t];Ft[t++]=null;var l=Ft[t];Ft[t++]=null;var a=Ft[t];Ft[t++]=null;var i=Ft[t];if(Ft[t++]=null,l!==null&&a!==null){var d=l.pending;d===null?a.next=a:(a.next=d.next,d.next=a),l.pending=a}i!==0&&mf(n,a,i)}}function qr(e,t,n,l){Ft[za++]=e,Ft[za++]=t,Ft[za++]=n,Ft[za++]=l,Mc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Rc(e,t,n,l){return qr(e,t,n,l),Xr(e)}function ea(e,t){return qr(e,null,null,t),Xr(e)}function mf(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var a=!1,i=e.return;i!==null;)i.childLanes|=n,l=i.alternate,l!==null&&(l.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(a=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,a&&t!==null&&(a=31-rt(n),e=i.hiddenUpdates,l=e[a],l===null?e[a]=[t]:l.push(t),t.lane=n|536870912),i):null}function Xr(e){if(50<cr)throw cr=0,Uo=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ba={};function Vp(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(e,t,n,l){return new Vp(e,t,n,l)}function jc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Un(e,t){var n=e.alternate;return n===null?(n=Lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function hf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Kr(e,t,n,l,a,i){var d=0;if(l=e,typeof e=="function")jc(e)&&(d=1);else if(typeof e=="string")d=$_(e,n,k.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ge:return e=Lt(31,n,t,a),e.elementType=ge,e.lanes=i,e;case le:return ta(n.children,a,i,t);case L:d=8,a|=24;break;case U:return e=Lt(12,n,t,a|2),e.elementType=U,e.lanes=i,e;case ue:return e=Lt(13,n,t,a),e.elementType=ue,e.lanes=i,e;case we:return e=Lt(19,n,t,a),e.elementType=we,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ce:d=10;break e;case pe:d=9;break e;case Ee:d=11;break e;case ee:d=14;break e;case P:d=16,l=null;break e}d=29,n=Error(s(130,e===null?"null":typeof e,"")),l=null}return t=Lt(d,n,t,a),t.elementType=e,t.type=l,t.lanes=i,t}function ta(e,t,n,l){return e=Lt(7,e,l,t),e.lanes=n,e}function Ac(e,t,n){return e=Lt(6,e,null,t),e.lanes=n,e}function pf(e){var t=Lt(18,null,null,0);return t.stateNode=e,t}function kc(e,t,n){return t=Lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var _f=new WeakMap;function Zt(e,t){if(typeof e=="object"&&e!==null){var n=_f.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Vl(t)},_f.set(e,t),t)}return{value:e,source:t,stack:Vl(t)}}var La=[],Ua=0,$r=null,Vi=0,Jt=[],Pt=0,_l=null,En=1,wn="";function Hn(e,t){La[Ua++]=Vi,La[Ua++]=$r,$r=e,Vi=t}function gf(e,t,n){Jt[Pt++]=En,Jt[Pt++]=wn,Jt[Pt++]=_l,_l=e;var l=En;e=wn;var a=32-rt(l)-1;l&=~(1<<a),n+=1;var i=32-rt(t)+a;if(30<i){var d=a-a%5;i=(l&(1<<d)-1).toString(32),l>>=d,a-=d,En=1<<32-rt(t)+a|n<<a|l,wn=i+e}else En=1<<i|n<<a|l,wn=e}function Dc(e){e.return!==null&&(Hn(e,1),gf(e,1,0))}function Oc(e){for(;e===$r;)$r=La[--Ua],La[Ua]=null,Vi=La[--Ua],La[Ua]=null;for(;e===_l;)_l=Jt[--Pt],Jt[Pt]=null,wn=Jt[--Pt],Jt[Pt]=null,En=Jt[--Pt],Jt[Pt]=null}function bf(e,t){Jt[Pt++]=En,Jt[Pt++]=wn,Jt[Pt++]=_l,En=t.id,wn=t.overflow,_l=e}var bt=null,$e=null,je=!1,gl=null,Wt=!1,Cc=Error(s(519));function bl(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yi(Zt(t,e)),Cc}function yf(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[ie]=e,t[mt]=l,n){case"dialog":Te("cancel",t),Te("close",t);break;case"iframe":case"object":case"embed":Te("load",t);break;case"video":case"audio":for(n=0;n<ur.length;n++)Te(ur[n],t);break;case"source":Te("error",t);break;case"img":case"image":case"link":Te("error",t),Te("load",t);break;case"details":Te("toggle",t);break;case"input":Te("invalid",t),wi(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Te("invalid",t);break;case"textarea":Te("invalid",t),Ti(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||Bm(t.textContent,n)?(l.popover!=null&&(Te("beforetoggle",t),Te("toggle",t)),l.onScroll!=null&&Te("scroll",t),l.onScrollEnd!=null&&Te("scrollend",t),l.onClick!=null&&(t.onclick=on),t=!0):t=!1,t||bl(e,!0)}function vf(e){for(bt=e.return;bt;)switch(bt.tag){case 5:case 31:case 13:Wt=!1;return;case 27:case 3:Wt=!0;return;default:bt=bt.return}}function Ha(e){if(e!==bt)return!1;if(!je)return vf(e),je=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Wo(e.type,e.memoizedProps)),n=!n),n&&$e&&bl(e),vf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));$e=Km(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));$e=Km(e)}else t===27?(t=$e,Dl(e.type)?(e=au,au=null,$e=e):$e=t):$e=bt?tn(e.stateNode.nextSibling):null;return!0}function na(){$e=bt=null,je=!1}function zc(){var e=gl;return e!==null&&(Ot===null?Ot=e:Ot.push.apply(Ot,e),gl=null),e}function Yi(e){gl===null?gl=[e]:gl.push(e)}var Bc=S(null),la=null,Gn=null;function yl(e,t,n){J(Bc,t._currentValue),t._currentValue=n}function Vn(e){e._currentValue=Bc.current,z(Bc)}function Lc(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Uc(e,t,n,l){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var i=a.dependencies;if(i!==null){var d=a.child;i=i.firstContext;e:for(;i!==null;){var p=i;i=a;for(var x=0;x<t.length;x++)if(p.context===t[x]){i.lanes|=n,p=i.alternate,p!==null&&(p.lanes|=n),Lc(i.return,n,e),l||(d=null);break e}i=p.next}}else if(a.tag===18){if(d=a.return,d===null)throw Error(s(341));d.lanes|=n,i=d.alternate,i!==null&&(i.lanes|=n),Lc(d,n,e),d=null}else d=a.child;if(d!==null)d.return=a;else for(d=a;d!==null;){if(d===e){d=null;break}if(a=d.sibling,a!==null){a.return=d.return,d=a;break}d=d.return}a=d}}function Ga(e,t,n,l){e=null;for(var a=t,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var d=a.alternate;if(d===null)throw Error(s(387));if(d=d.memoizedProps,d!==null){var p=a.type;Bt(a.pendingProps.value,d.value)||(e!==null?e.push(p):e=[p])}}else if(a===K.current){if(d=a.alternate,d===null)throw Error(s(387));d.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(pr):e=[pr])}a=a.return}e!==null&&Uc(t,e,n,l),t.flags|=262144}function Qr(e){for(e=e.firstContext;e!==null;){if(!Bt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function aa(e){la=e,Gn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function yt(e){return xf(la,e)}function Ir(e,t){return la===null&&aa(e),xf(e,t)}function xf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Gn===null){if(e===null)throw Error(s(308));Gn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Gn=Gn.next=t;return n}var Yp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},qp=c.unstable_scheduleCallback,Xp=c.unstable_NormalPriority,ct={$$typeof:ce,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hc(){return{controller:new Yp,data:new Map,refCount:0}}function qi(e){e.refCount--,e.refCount===0&&qp(Xp,function(){e.controller.abort()})}var Xi=null,Gc=0,Va=0,Ya=null;function Kp(e,t){if(Xi===null){var n=Xi=[];Gc=0,Va=Xo(),Ya={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Gc++,t.then(Sf,Sf),t}function Sf(){if(--Gc===0&&Xi!==null){Ya!==null&&(Ya.status="fulfilled");var e=Xi;Xi=null,Va=0,Ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function $p(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var Ef=O.S;O.S=function(e,t){rm=Nt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Kp(e,t),Ef!==null&&Ef(e,t)};var ia=S(null);function Vc(){var e=ia.current;return e!==null?e:Xe.pooledCache}function Fr(e,t){t===null?J(ia,ia.current):J(ia,t.pool)}function wf(){var e=Vc();return e===null?null:{parent:ct._currentValue,pool:e}}var qa=Error(s(460)),Yc=Error(s(474)),Zr=Error(s(542)),Jr={then:function(){}};function Nf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(on,on),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Rf(e),e;default:if(typeof t.status=="string")t.then(on,on);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=l}},function(l){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Rf(e),e}throw sa=t,qa}}function ra(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(sa=n,qa):n}}var sa=null;function Mf(){if(sa===null)throw Error(s(459));var e=sa;return sa=null,e}function Rf(e){if(e===qa||e===Zr)throw Error(s(483))}var Xa=null,Ki=0;function Pr(e){var t=Ki;return Ki+=1,Xa===null&&(Xa=[]),Tf(Xa,e,t)}function $i(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Wr(e,t){throw t.$$typeof===D?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function jf(e){function t(T,w){if(e){var R=T.deletions;R===null?(T.deletions=[w],T.flags|=16):R.push(w)}}function n(T,w){if(!e)return null;for(;w!==null;)t(T,w),w=w.sibling;return null}function l(T){for(var w=new Map;T!==null;)T.key!==null?w.set(T.key,T):w.set(T.index,T),T=T.sibling;return w}function a(T,w){return T=Un(T,w),T.index=0,T.sibling=null,T}function i(T,w,R){return T.index=R,e?(R=T.alternate,R!==null?(R=R.index,R<w?(T.flags|=67108866,w):R):(T.flags|=67108866,w)):(T.flags|=1048576,w)}function d(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function p(T,w,R,G){return w===null||w.tag!==6?(w=Ac(R,T.mode,G),w.return=T,w):(w=a(w,R),w.return=T,w)}function x(T,w,R,G){var oe=R.type;return oe===le?B(T,w,R.props.children,G,R.key):w!==null&&(w.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===P&&ra(oe)===w.type)?(w=a(w,R.props),$i(w,R),w.return=T,w):(w=Kr(R.type,R.key,R.props,null,T.mode,G),$i(w,R),w.return=T,w)}function j(T,w,R,G){return w===null||w.tag!==4||w.stateNode.containerInfo!==R.containerInfo||w.stateNode.implementation!==R.implementation?(w=kc(R,T.mode,G),w.return=T,w):(w=a(w,R.children||[]),w.return=T,w)}function B(T,w,R,G,oe){return w===null||w.tag!==7?(w=ta(R,T.mode,G,oe),w.return=T,w):(w=a(w,R),w.return=T,w)}function V(T,w,R){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return w=Ac(""+w,T.mode,R),w.return=T,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case I:return R=Kr(w.type,w.key,w.props,null,T.mode,R),$i(R,w),R.return=T,R;case Z:return w=kc(w,T.mode,R),w.return=T,w;case P:return w=ra(w),V(T,w,R)}if(Ie(w)||se(w))return w=ta(w,T.mode,R,null),w.return=T,w;if(typeof w.then=="function")return V(T,Pr(w),R);if(w.$$typeof===ce)return V(T,Ir(T,w),R);Wr(T,w)}return null}function A(T,w,R,G){var oe=w!==null?w.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return oe!==null?null:p(T,w,""+R,G);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case I:return R.key===oe?x(T,w,R,G):null;case Z:return R.key===oe?j(T,w,R,G):null;case P:return R=ra(R),A(T,w,R,G)}if(Ie(R)||se(R))return oe!==null?null:B(T,w,R,G,null);if(typeof R.then=="function")return A(T,w,Pr(R),G);if(R.$$typeof===ce)return A(T,w,Ir(T,R),G);Wr(T,R)}return null}function C(T,w,R,G,oe){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return T=T.get(R)||null,p(w,T,""+G,oe);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case I:return T=T.get(G.key===null?R:G.key)||null,x(w,T,G,oe);case Z:return T=T.get(G.key===null?R:G.key)||null,j(w,T,G,oe);case P:return G=ra(G),C(T,w,R,G,oe)}if(Ie(G)||se(G))return T=T.get(R)||null,B(w,T,G,oe,null);if(typeof G.then=="function")return C(T,w,R,Pr(G),oe);if(G.$$typeof===ce)return C(T,w,R,Ir(w,G),oe);Wr(w,G)}return null}function ne(T,w,R,G){for(var oe=null,Oe=null,re=w,Se=w=0,Re=null;re!==null&&Se<R.length;Se++){re.index>Se?(Re=re,re=null):Re=re.sibling;var Ce=A(T,re,R[Se],G);if(Ce===null){re===null&&(re=Re);break}e&&re&&Ce.alternate===null&&t(T,re),w=i(Ce,w,Se),Oe===null?oe=Ce:Oe.sibling=Ce,Oe=Ce,re=Re}if(Se===R.length)return n(T,re),je&&Hn(T,Se),oe;if(re===null){for(;Se<R.length;Se++)re=V(T,R[Se],G),re!==null&&(w=i(re,w,Se),Oe===null?oe=re:Oe.sibling=re,Oe=re);return je&&Hn(T,Se),oe}for(re=l(re);Se<R.length;Se++)Re=C(re,T,Se,R[Se],G),Re!==null&&(e&&Re.alternate!==null&&re.delete(Re.key===null?Se:Re.key),w=i(Re,w,Se),Oe===null?oe=Re:Oe.sibling=Re,Oe=Re);return e&&re.forEach(function(Ll){return t(T,Ll)}),je&&Hn(T,Se),oe}function me(T,w,R,G){if(R==null)throw Error(s(151));for(var oe=null,Oe=null,re=w,Se=w=0,Re=null,Ce=R.next();re!==null&&!Ce.done;Se++,Ce=R.next()){re.index>Se?(Re=re,re=null):Re=re.sibling;var Ll=A(T,re,Ce.value,G);if(Ll===null){re===null&&(re=Re);break}e&&re&&Ll.alternate===null&&t(T,re),w=i(Ll,w,Se),Oe===null?oe=Ll:Oe.sibling=Ll,Oe=Ll,re=Re}if(Ce.done)return n(T,re),je&&Hn(T,Se),oe;if(re===null){for(;!Ce.done;Se++,Ce=R.next())Ce=V(T,Ce.value,G),Ce!==null&&(w=i(Ce,w,Se),Oe===null?oe=Ce:Oe.sibling=Ce,Oe=Ce);return je&&Hn(T,Se),oe}for(re=l(re);!Ce.done;Se++,Ce=R.next())Ce=C(re,T,Se,Ce.value,G),Ce!==null&&(e&&Ce.alternate!==null&&re.delete(Ce.key===null?Se:Ce.key),w=i(Ce,w,Se),Oe===null?oe=Ce:Oe.sibling=Ce,Oe=Ce);return e&&re.forEach(function(lg){return t(T,lg)}),je&&Hn(T,Se),oe}function qe(T,w,R,G){if(typeof R=="object"&&R!==null&&R.type===le&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case I:e:{for(var oe=R.key;w!==null;){if(w.key===oe){if(oe=R.type,oe===le){if(w.tag===7){n(T,w.sibling),G=a(w,R.props.children),G.return=T,T=G;break e}}else if(w.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===P&&ra(oe)===w.type){n(T,w.sibling),G=a(w,R.props),$i(G,R),G.return=T,T=G;break e}n(T,w);break}else t(T,w);w=w.sibling}R.type===le?(G=ta(R.props.children,T.mode,G,R.key),G.return=T,T=G):(G=Kr(R.type,R.key,R.props,null,T.mode,G),$i(G,R),G.return=T,T=G)}return d(T);case Z:e:{for(oe=R.key;w!==null;){if(w.key===oe)if(w.tag===4&&w.stateNode.containerInfo===R.containerInfo&&w.stateNode.implementation===R.implementation){n(T,w.sibling),G=a(w,R.children||[]),G.return=T,T=G;break e}else{n(T,w);break}else t(T,w);w=w.sibling}G=kc(R,T.mode,G),G.return=T,T=G}return d(T);case P:return R=ra(R),qe(T,w,R,G)}if(Ie(R))return ne(T,w,R,G);if(se(R)){if(oe=se(R),typeof oe!="function")throw Error(s(150));return R=oe.call(R),me(T,w,R,G)}if(typeof R.then=="function")return qe(T,w,Pr(R),G);if(R.$$typeof===ce)return qe(T,w,Ir(T,R),G);Wr(T,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,w!==null&&w.tag===6?(n(T,w.sibling),G=a(w,R),G.return=T,T=G):(n(T,w),G=Ac(R,T.mode,G),G.return=T,T=G),d(T)):n(T,w)}return function(T,w,R,G){try{Ki=0;var oe=qe(T,w,R,G);return Xa=null,oe}catch(re){if(re===qa||re===Zr)throw re;var Oe=Lt(29,re,null,T.mode);return Oe.lanes=G,Oe.return=T,Oe}finally{}}}var ca=jf(!0),Af=jf(!1),vl=!1;function qc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sl(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ze&2)!==0){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,t=Xr(e),mf(e,null,n),t}return qr(e,l,t,n),Xr(e)}function Qi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,rl(e,n)}}function Kc(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?a=i=d:i=i.next=d,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var $c=!1;function Ii(){if($c){var e=Ya;if(e!==null)throw e}}function Fi(e,t,n,l){$c=!1;var a=e.updateQueue;vl=!1;var i=a.firstBaseUpdate,d=a.lastBaseUpdate,p=a.shared.pending;if(p!==null){a.shared.pending=null;var x=p,j=x.next;x.next=null,d===null?i=j:d.next=j,d=x;var B=e.alternate;B!==null&&(B=B.updateQueue,p=B.lastBaseUpdate,p!==d&&(p===null?B.firstBaseUpdate=j:p.next=j,B.lastBaseUpdate=x))}if(i!==null){var V=a.baseState;d=0,B=j=x=null,p=i;do{var A=p.lane&-536870913,C=A!==p.lane;if(C?(Me&A)===A:(l&A)===A){A!==0&&A===Va&&($c=!0),B!==null&&(B=B.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var ne=e,me=p;A=t;var qe=n;switch(me.tag){case 1:if(ne=me.payload,typeof ne=="function"){V=ne.call(qe,V,A);break e}V=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=me.payload,A=typeof ne=="function"?ne.call(qe,V,A):ne,A==null)break e;V=M({},V,A);break e;case 2:vl=!0}}A=p.callback,A!==null&&(e.flags|=64,C&&(e.flags|=8192),C=a.callbacks,C===null?a.callbacks=[A]:C.push(A))}else C={lane:A,tag:p.tag,payload:p.payload,callback:p.callback,next:null},B===null?(j=B=C,x=V):B=B.next=C,d|=A;if(p=p.next,p===null){if(p=a.shared.pending,p===null)break;C=p,p=C.next,C.next=null,a.lastBaseUpdate=C,a.shared.pending=null}}while(!0);B===null&&(x=V),a.baseState=x,a.firstBaseUpdate=j,a.lastBaseUpdate=B,i===null&&(a.shared.lanes=0),Ml|=d,e.lanes=d,e.memoizedState=V}}function kf(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Df(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)kf(n[e],t)}var Ka=S(null),es=S(0);function Of(e,t){e=Zn,J(es,e),J(Ka,t),Zn=e|t.baseLanes}function Qc(){J(es,Zn),J(Ka,Ka.current)}function Ic(){Zn=es.current,z(Ka),z(es)}var Ut=S(null),en=null;function El(e){var t=e.alternate;J(at,at.current&1),J(Ut,e),en===null&&(t===null||Ka.current!==null||t.memoizedState!==null)&&(en=e)}function Fc(e){J(at,at.current),J(Ut,e),en===null&&(en=e)}function Cf(e){e.tag===22?(J(at,at.current),J(Ut,e),en===null&&(en=e)):wl()}function wl(){J(at,at.current),J(Ut,Ut.current)}function Ht(e){z(Ut),en===e&&(en=null),z(at)}var at=S(0);function ts(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||nu(n)||lu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yn=0,ve=null,Ve=null,ot=null,ns=!1,$a=!1,oa=!1,ls=0,Zi=0,Qa=null,Qp=0;function tt(){throw Error(s(321))}function Zc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Bt(e[n],t[n]))return!1;return!0}function Jc(e,t,n,l,a,i){return Yn=i,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?gd:mo,oa=!1,i=n(l,a),oa=!1,$a&&(i=Bf(t,n,l,a)),zf(e),i}function zf(e){O.H=Wi;var t=Ve!==null&&Ve.next!==null;if(Yn=0,ot=Ve=ve=null,ns=!1,Zi=0,Qa=null,t)throw Error(s(300));e===null||ut||(e=e.dependencies,e!==null&&Qr(e)&&(ut=!0))}function Bf(e,t,n,l){ve=e;var a=0;do{if($a&&(Qa=null),Zi=0,$a=!1,25<=a)throw Error(s(301));if(a+=1,ot=Ve=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}O.H=bd,i=t(n,l)}while($a);return i}function Ip(){var e=O.H,t=e.useState()[0];return t=typeof t.then=="function"?Ji(t):t,e=e.useState()[0],(Ve!==null?Ve.memoizedState:null)!==e&&(ve.flags|=1024),t}function Pc(){var e=ls!==0;return ls=0,e}function Wc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function eo(e){if(ns){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ns=!1}Yn=0,ot=Ve=ve=null,$a=!1,Zi=ls=0,Qa=null}function Rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?ve.memoizedState=ot=e:ot=ot.next=e,ot}function it(){if(Ve===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var t=ot===null?ve.memoizedState:ot.next;if(t!==null)ot=t,Ve=e;else{if(e===null)throw ve.alternate===null?Error(s(467)):Error(s(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},ot===null?ve.memoizedState=ot=e:ot=ot.next=e}return ot}function as(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ji(e){var t=Zi;return Zi+=1,Qa===null&&(Qa=[]),e=Tf(Qa,e,t),t=ve,(ot===null?t.memoizedState:ot.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?gd:mo),e}function is(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ji(e);if(e.$$typeof===ce)return yt(e)}throw Error(s(438,String(e)))}function to(e){var t=null,n=ve.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=ve.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=as(),ve.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=_e;return t.index++,n}function qn(e,t){return typeof t=="function"?t(e):t}function rs(e){var t=it();return no(t,Ve,e)}function no(e,t,n){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=n;var a=e.baseQueue,i=l.pending;if(i!==null){if(a!==null){var d=a.next;a.next=i.next,i.next=d}t.baseQueue=a=i,l.pending=null}if(i=e.baseState,a===null)e.memoizedState=i;else{t=a.next;var p=d=null,x=null,j=t,B=!1;do{var V=j.lane&-536870913;if(V!==j.lane?(Me&V)===V:(Yn&V)===V){var A=j.revertLane;if(A===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),V===Va&&(B=!0);else if((Yn&A)===A){j=j.next,A===Va&&(B=!0);continue}else V={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},x===null?(p=x=V,d=i):x=x.next=V,ve.lanes|=A,Ml|=A;V=j.action,oa&&n(i,V),i=j.hasEagerState?j.eagerState:n(i,V)}else A={lane:V,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},x===null?(p=x=A,d=i):x=x.next=A,ve.lanes|=V,Ml|=V;j=j.next}while(j!==null&&j!==t);if(x===null?d=i:x.next=p,!Bt(i,e.memoizedState)&&(ut=!0,B&&(n=Ya,n!==null)))throw n;e.memoizedState=i,e.baseState=d,e.baseQueue=x,l.lastRenderedState=i}return a===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function lo(e){var t=it(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var l=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var d=a=a.next;do i=e(i,d.action),d=d.next;while(d!==a);Bt(i,t.memoizedState)||(ut=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,l]}function Lf(e,t,n){var l=ve,a=it(),i=je;if(i){if(n===void 0)throw Error(s(407));n=n()}else n=t();var d=!Bt((Ve||a).memoizedState,n);if(d&&(a.memoizedState=n,ut=!0),a=a.queue,ro(Gf.bind(null,l,a,e),[e]),a.getSnapshot!==t||d||ot!==null&&ot.memoizedState.tag&1){if(l.flags|=2048,Ia(9,{destroy:void 0},Hf.bind(null,l,a,n,t),null),Xe===null)throw Error(s(349));i||(Yn&127)!==0||Uf(l,t,n)}return n}function Uf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t=as(),ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hf(e,t,n,l){t.value=n,t.getSnapshot=l,Vf(t)&&Yf(e)}function Gf(e,t,n){return n(function(){Vf(t)&&Yf(e)})}function Vf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Bt(e,n)}catch{return!0}}function Yf(e){var t=ea(e,2);t!==null&&Ct(t,e,2)}function ao(e){var t=Rt();if(typeof e=="function"){var n=e;if(e=n(),oa){_t(!0);try{n()}finally{_t(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:e},t}function qf(e,t,n,l){return e.baseState=n,no(e,Ve,typeof l=="function"?l:qn)}function Fp(e,t,n,l,a){if(os(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){i.listeners.push(d)}};O.T!==null?n(!0):i.isTransition=!1,l(i),n=t.pending,n===null?(i.next=t.pending=i,Xf(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Xf(e,t){var n=t.action,l=t.payload,a=e.state;if(t.isTransition){var i=O.T,d={};O.T=d;try{var p=n(a,l),x=O.S;x!==null&&x(d,p),Kf(e,t,p)}catch(j){io(e,t,j)}finally{i!==null&&d.types!==null&&(i.types=d.types),O.T=i}}else try{i=n(a,l),Kf(e,t,i)}catch(j){io(e,t,j)}}function Kf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){$f(e,t,l)},function(l){return io(e,t,l)}):$f(e,t,n)}function $f(e,t,n){t.status="fulfilled",t.value=n,Qf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Xf(e,n)))}function io(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,Qf(t),t=t.next;while(t!==l)}e.action=null}function Qf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function If(e,t){return t}function Ff(e,t){if(je){var n=Xe.formState;if(n!==null){e:{var l=ve;if(je){if($e){t:{for(var a=$e,i=Wt;a.nodeType!==8;){if(!i){a=null;break t}if(a=tn(a.nextSibling),a===null){a=null;break t}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){$e=tn(a.nextSibling),l=a.data==="F!";break e}}bl(l)}l=!1}l&&(t=n[0])}}return n=Rt(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:If,lastRenderedState:t},n.queue=l,n=hd.bind(null,ve,l),l.dispatch=n,l=ao(!1),i=fo.bind(null,ve,!1,l.queue),l=Rt(),a={state:t,dispatch:null,action:e,pending:null},l.queue=a,n=Fp.bind(null,ve,a,i,n),a.dispatch=n,l.memoizedState=e,[t,n,!1]}function Zf(e){var t=it();return Jf(t,Ve,e)}function Jf(e,t,n){if(t=no(e,t,If)[0],e=rs(qn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Ji(t)}catch(d){throw d===qa?Zr:d}else l=t;t=it();var a=t.queue,i=a.dispatch;return n!==t.memoizedState&&(ve.flags|=2048,Ia(9,{destroy:void 0},Zp.bind(null,a,n),null)),[l,i,e]}function Zp(e,t){e.action=t}function Pf(e){var t=it(),n=Ve;if(n!==null)return Jf(t,n,e);it(),t=t.memoizedState,n=it();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function Ia(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=ve.updateQueue,t===null&&(t=as(),ve.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function Wf(){return it().memoizedState}function ss(e,t,n,l){var a=Rt();ve.flags|=e,a.memoizedState=Ia(1|t,{destroy:void 0},n,l===void 0?null:l)}function cs(e,t,n,l){var a=it();l=l===void 0?null:l;var i=a.memoizedState.inst;Ve!==null&&l!==null&&Zc(l,Ve.memoizedState.deps)?a.memoizedState=Ia(t,i,n,l):(ve.flags|=e,a.memoizedState=Ia(1|t,i,n,l))}function ed(e,t){ss(8390656,8,e,t)}function ro(e,t){cs(2048,8,e,t)}function Jp(e){ve.flags|=4;var t=ve.updateQueue;if(t===null)t=as(),ve.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function td(e){var t=it().memoizedState;return Jp({ref:t,nextImpl:e}),function(){if((ze&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function nd(e,t){return cs(4,2,e,t)}function ld(e,t){return cs(4,4,e,t)}function ad(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function id(e,t,n){n=n!=null?n.concat([e]):null,cs(4,4,ad.bind(null,t,e),n)}function so(){}function rd(e,t){var n=it();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&Zc(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function sd(e,t){var n=it();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&Zc(t,l[1]))return l[0];if(l=e(),oa){_t(!0);try{e()}finally{_t(!1)}}return n.memoizedState=[l,t],l}function co(e,t,n){return n===void 0||(Yn&1073741824)!==0&&(Me&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=cm(),ve.lanes|=e,Ml|=e,n)}function cd(e,t,n,l){return Bt(n,t)?n:Ka.current!==null?(e=co(e,n,l),Bt(e,t)||(ut=!0),e):(Yn&42)===0||(Yn&1073741824)!==0&&(Me&261930)===0?(ut=!0,e.memoizedState=n):(e=cm(),ve.lanes|=e,Ml|=e,t)}function od(e,t,n,l,a){var i=H.p;H.p=i!==0&&8>i?i:8;var d=O.T,p={};O.T=p,fo(e,!1,t,n);try{var x=a(),j=O.S;if(j!==null&&j(p,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var B=$p(x,l);Pi(e,t,B,Yt(e))}else Pi(e,t,l,Yt(e))}catch(V){Pi(e,t,{then:function(){},status:"rejected",reason:V},Yt())}finally{H.p=i,d!==null&&p.types!==null&&(d.types=p.types),O.T=d}}function Pp(){}function oo(e,t,n,l){if(e.tag!==5)throw Error(s(476));var a=ud(e).queue;od(e,a,t,ae,n===null?Pp:function(){return fd(e),n(l)})}function ud(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:ae},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function fd(e){var t=ud(e);t.next===null&&(t=e.alternate.memoizedState),Pi(e,t.next.queue,{},Yt())}function uo(){return yt(pr)}function dd(){return it().memoizedState}function md(){return it().memoizedState}function Wp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Yt();e=xl(n);var l=Sl(t,e,n);l!==null&&(Ct(l,t,n),Qi(l,t,n)),t={cache:Hc()},e.payload=t;return}t=t.return}}function e_(e,t,n){var l=Yt();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},os(e)?pd(t,n):(n=Rc(e,t,n,l),n!==null&&(Ct(n,e,l),_d(n,t,l)))}function hd(e,t,n){var l=Yt();Pi(e,t,n,l)}function Pi(e,t,n,l){var a={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(os(e))pd(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var d=t.lastRenderedState,p=i(d,n);if(a.hasEagerState=!0,a.eagerState=p,Bt(p,d))return qr(e,t,a,0),Xe===null&&Yr(),!1}catch{}finally{}if(n=Rc(e,t,a,l),n!==null)return Ct(n,e,l),_d(n,t,l),!0}return!1}function fo(e,t,n,l){if(l={lane:2,revertLane:Xo(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},os(e)){if(t)throw Error(s(479))}else t=Rc(e,n,l,2),t!==null&&Ct(t,e,2)}function os(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function pd(e,t){$a=ns=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _d(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,rl(e,n)}}var Wi={readContext:yt,use:is,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useLayoutEffect:tt,useInsertionEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useSyncExternalStore:tt,useId:tt,useHostTransitionStatus:tt,useFormState:tt,useActionState:tt,useOptimistic:tt,useMemoCache:tt,useCacheRefresh:tt};Wi.useEffectEvent=tt;var gd={readContext:yt,use:is,useCallback:function(e,t){return Rt().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:ed,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ss(4194308,4,ad.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ss(4194308,4,e,t)},useInsertionEffect:function(e,t){ss(4,2,e,t)},useMemo:function(e,t){var n=Rt();t=t===void 0?null:t;var l=e();if(oa){_t(!0);try{e()}finally{_t(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=Rt();if(n!==void 0){var a=n(t);if(oa){_t(!0);try{n(t)}finally{_t(!1)}}}else a=t;return l.memoizedState=l.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},l.queue=e,e=e.dispatch=e_.bind(null,ve,e),[l.memoizedState,e]},useRef:function(e){var t=Rt();return e={current:e},t.memoizedState=e},useState:function(e){e=ao(e);var t=e.queue,n=hd.bind(null,ve,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:so,useDeferredValue:function(e,t){var n=Rt();return co(n,e,t)},useTransition:function(){var e=ao(!1);return e=od.bind(null,ve,e.queue,!0,!1),Rt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=ve,a=Rt();if(je){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Xe===null)throw Error(s(349));(Me&127)!==0||Uf(l,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,ed(Gf.bind(null,l,i,e),[e]),l.flags|=2048,Ia(9,{destroy:void 0},Hf.bind(null,l,i,n,t),null),n},useId:function(){var e=Rt(),t=Xe.identifierPrefix;if(je){var n=wn,l=En;n=(l&~(1<<32-rt(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ls++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Qp++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:uo,useFormState:Ff,useActionState:Ff,useOptimistic:function(e){var t=Rt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=fo.bind(null,ve,!0,n),n.dispatch=t,[e,t]},useMemoCache:to,useCacheRefresh:function(){return Rt().memoizedState=Wp.bind(null,ve)},useEffectEvent:function(e){var t=Rt(),n={impl:e};return t.memoizedState=n,function(){if((ze&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},mo={readContext:yt,use:is,useCallback:rd,useContext:yt,useEffect:ro,useImperativeHandle:id,useInsertionEffect:nd,useLayoutEffect:ld,useMemo:sd,useReducer:rs,useRef:Wf,useState:function(){return rs(qn)},useDebugValue:so,useDeferredValue:function(e,t){var n=it();return cd(n,Ve.memoizedState,e,t)},useTransition:function(){var e=rs(qn)[0],t=it().memoizedState;return[typeof e=="boolean"?e:Ji(e),t]},useSyncExternalStore:Lf,useId:dd,useHostTransitionStatus:uo,useFormState:Zf,useActionState:Zf,useOptimistic:function(e,t){var n=it();return qf(n,Ve,e,t)},useMemoCache:to,useCacheRefresh:md};mo.useEffectEvent=td;var bd={readContext:yt,use:is,useCallback:rd,useContext:yt,useEffect:ro,useImperativeHandle:id,useInsertionEffect:nd,useLayoutEffect:ld,useMemo:sd,useReducer:lo,useRef:Wf,useState:function(){return lo(qn)},useDebugValue:so,useDeferredValue:function(e,t){var n=it();return Ve===null?co(n,e,t):cd(n,Ve.memoizedState,e,t)},useTransition:function(){var e=lo(qn)[0],t=it().memoizedState;return[typeof e=="boolean"?e:Ji(e),t]},useSyncExternalStore:Lf,useId:dd,useHostTransitionStatus:uo,useFormState:Pf,useActionState:Pf,useOptimistic:function(e,t){var n=it();return Ve!==null?qf(n,Ve,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:to,useCacheRefresh:md};bd.useEffectEvent=td;function ho(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:M({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var po={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Yt(),a=xl(l);a.payload=t,n!=null&&(a.callback=n),t=Sl(e,a,l),t!==null&&(Ct(t,e,l),Qi(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Yt(),a=xl(l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Sl(e,a,l),t!==null&&(Ct(t,e,l),Qi(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Yt(),l=xl(n);l.tag=2,t!=null&&(l.callback=t),t=Sl(e,l,n),t!==null&&(Ct(t,e,n),Qi(t,e,n))}};function yd(e,t,n,l,a,i,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,d):t.prototype&&t.prototype.isPureReactComponent?!Hi(n,l)||!Hi(a,i):!0}function vd(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&po.enqueueReplaceState(t,t.state,null)}function ua(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=M({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function xd(e){Vr(e)}function Sd(e){console.error(e)}function Ed(e){Vr(e)}function us(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function wd(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function _o(e,t,n){return n=xl(n),n.tag=3,n.payload={element:null},n.callback=function(){us(e,t)},n}function Nd(e){return e=xl(e),e.tag=3,e}function Td(e,t,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var i=l.value;e.payload=function(){return a(i)},e.callback=function(){wd(t,n,l)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){wd(t,n,l),typeof a!="function"&&(Rl===null?Rl=new Set([this]):Rl.add(this));var p=l.stack;this.componentDidCatch(l.value,{componentStack:p!==null?p:""})})}function t_(e,t,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&Ga(t,n,a,!0),n=Ut.current,n!==null){switch(n.tag){case 31:case 13:return en===null?Ss():n.alternate===null&&nt===0&&(nt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===Jr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),Vo(e,l,a)),!1;case 22:return n.flags|=65536,l===Jr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),Vo(e,l,a)),!1}throw Error(s(435,n.tag))}return Vo(e,l,a),Ss(),!1}if(je)return t=Ut.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,l!==Cc&&(e=Error(s(422),{cause:l}),Yi(Zt(e,n)))):(l!==Cc&&(t=Error(s(423),{cause:l}),Yi(Zt(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,l=Zt(l,n),a=_o(e.stateNode,l,a),Kc(e,a),nt!==4&&(nt=2)),!1;var i=Error(s(520),{cause:l});if(i=Zt(i,n),sr===null?sr=[i]:sr.push(i),nt!==4&&(nt=2),t===null)return!0;l=Zt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=_o(n.stateNode,l,e),Kc(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Rl===null||!Rl.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Nd(a),Td(a,e,n,l),Kc(n,a),!1}n=n.return}while(n!==null);return!1}var go=Error(s(461)),ut=!1;function vt(e,t,n,l){t.child=e===null?Af(t,null,n,l):ca(t,e.child,n,l)}function Md(e,t,n,l,a){n=n.render;var i=t.ref;if("ref"in l){var d={};for(var p in l)p!=="ref"&&(d[p]=l[p])}else d=l;return aa(t),l=Jc(e,t,n,d,i,a),p=Pc(),e!==null&&!ut?(Wc(e,t,a),Xn(e,t,a)):(je&&p&&Dc(t),t.flags|=1,vt(e,t,l,a),t.child)}function Rd(e,t,n,l,a){if(e===null){var i=n.type;return typeof i=="function"&&!jc(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,jd(e,t,i,l,a)):(e=Kr(n.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!No(e,a)){var d=i.memoizedProps;if(n=n.compare,n=n!==null?n:Hi,n(d,l)&&e.ref===t.ref)return Xn(e,t,a)}return t.flags|=1,e=Un(i,l),e.ref=t.ref,e.return=t,t.child=e}function jd(e,t,n,l,a){if(e!==null){var i=e.memoizedProps;if(Hi(i,l)&&e.ref===t.ref)if(ut=!1,t.pendingProps=l=i,No(e,a))(e.flags&131072)!==0&&(ut=!0);else return t.lanes=e.lanes,Xn(e,t,a)}return bo(e,t,n,l,a)}function Ad(e,t,n,l){var a=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(l=t.child=e.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~i}else l=0,t.child=null;return kd(e,t,i,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fr(t,i!==null?i.cachePool:null),i!==null?Of(t,i):Qc(),Cf(t);else return l=t.lanes=536870912,kd(e,t,i!==null?i.baseLanes|n:n,n,l)}else i!==null?(Fr(t,i.cachePool),Of(t,i),wl(),t.memoizedState=null):(e!==null&&Fr(t,null),Qc(),wl());return vt(e,t,a,n),t.child}function er(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function kd(e,t,n,l,a){var i=Vc();return i=i===null?null:{parent:ct._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Fr(t,null),Qc(),Cf(t),e!==null&&Ga(e,t,l,!0),t.childLanes=a,null}function fs(e,t){return t=ms({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Dd(e,t,n){return ca(t,e.child,null,n),e=fs(t,t.pendingProps),e.flags|=2,Ht(t),t.memoizedState=null,e}function n_(e,t,n){var l=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(je){if(l.mode==="hidden")return e=fs(t,l),t.lanes=536870912,er(null,e);if(Fc(t),(e=$e)?(e=Xm(e,Wt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_l!==null?{id:En,overflow:wn}:null,retryLane:536870912,hydrationErrors:null},n=pf(e),n.return=t,t.child=n,bt=t,$e=null)):e=null,e===null)throw bl(t);return t.lanes=536870912,null}return fs(t,l)}var i=e.memoizedState;if(i!==null){var d=i.dehydrated;if(Fc(t),a)if(t.flags&256)t.flags&=-257,t=Dd(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(ut||Ga(e,t,n,!1),a=(n&e.childLanes)!==0,ut||a){if(l=Xe,l!==null&&(d=pn(l,n),d!==0&&d!==i.retryLane))throw i.retryLane=d,ea(e,d),Ct(l,e,d),go;Ss(),t=Dd(e,t,n)}else e=i.treeContext,$e=tn(d.nextSibling),bt=t,je=!0,gl=null,Wt=!1,e!==null&&bf(t,e),t=fs(t,l),t.flags|=4096;return t}return e=Un(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ds(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function bo(e,t,n,l,a){return aa(t),n=Jc(e,t,n,l,void 0,a),l=Pc(),e!==null&&!ut?(Wc(e,t,a),Xn(e,t,a)):(je&&l&&Dc(t),t.flags|=1,vt(e,t,n,a),t.child)}function Od(e,t,n,l,a,i){return aa(t),t.updateQueue=null,n=Bf(t,l,n,a),zf(e),l=Pc(),e!==null&&!ut?(Wc(e,t,i),Xn(e,t,i)):(je&&l&&Dc(t),t.flags|=1,vt(e,t,n,i),t.child)}function Cd(e,t,n,l,a){if(aa(t),t.stateNode===null){var i=Ba,d=n.contextType;typeof d=="object"&&d!==null&&(i=yt(d)),i=new n(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=po,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},qc(t),d=n.contextType,i.context=typeof d=="object"&&d!==null?yt(d):Ba,i.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(ho(t,n,d,l),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(d=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),d!==i.state&&po.enqueueReplaceState(i,i.state,null),Fi(t,l,i,a),Ii(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var p=t.memoizedProps,x=ua(n,p);i.props=x;var j=i.context,B=n.contextType;d=Ba,typeof B=="object"&&B!==null&&(d=yt(B));var V=n.getDerivedStateFromProps;B=typeof V=="function"||typeof i.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,B||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(p||j!==d)&&vd(t,i,l,d),vl=!1;var A=t.memoizedState;i.state=A,Fi(t,l,i,a),Ii(),j=t.memoizedState,p||A!==j||vl?(typeof V=="function"&&(ho(t,n,V,l),j=t.memoizedState),(x=vl||yd(t,n,x,l,A,j,d))?(B||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=j),i.props=l,i.state=j,i.context=d,l=x):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Xc(e,t),d=t.memoizedProps,B=ua(n,d),i.props=B,V=t.pendingProps,A=i.context,j=n.contextType,x=Ba,typeof j=="object"&&j!==null&&(x=yt(j)),p=n.getDerivedStateFromProps,(j=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d!==V||A!==x)&&vd(t,i,l,x),vl=!1,A=t.memoizedState,i.state=A,Fi(t,l,i,a),Ii();var C=t.memoizedState;d!==V||A!==C||vl||e!==null&&e.dependencies!==null&&Qr(e.dependencies)?(typeof p=="function"&&(ho(t,n,p,l),C=t.memoizedState),(B=vl||yd(t,n,B,l,A,C,x)||e!==null&&e.dependencies!==null&&Qr(e.dependencies))?(j||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,C,x),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,C,x)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=C),i.props=l,i.state=C,i.context=x,l=B):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,ds(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=ca(t,e.child,null,a),t.child=ca(t,null,n,a)):vt(e,t,n,a),t.memoizedState=i.state,e=t.child):e=Xn(e,t,a),e}function zd(e,t,n,l){return na(),t.flags|=256,vt(e,t,n,l),t.child}var yo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vo(e){return{baseLanes:e,cachePool:wf()}}function xo(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Vt),e}function Bd(e,t,n){var l=t.pendingProps,a=!1,i=(t.flags&128)!==0,d;if((d=i)||(d=e!==null&&e.memoizedState===null?!1:(at.current&2)!==0),d&&(a=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(je){if(a?El(t):wl(),(e=$e)?(e=Xm(e,Wt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_l!==null?{id:En,overflow:wn}:null,retryLane:536870912,hydrationErrors:null},n=pf(e),n.return=t,t.child=n,bt=t,$e=null)):e=null,e===null)throw bl(t);return lu(e)?t.lanes=32:t.lanes=536870912,null}var p=l.children;return l=l.fallback,a?(wl(),a=t.mode,p=ms({mode:"hidden",children:p},a),l=ta(l,a,n,null),p.return=t,l.return=t,p.sibling=l,t.child=p,l=t.child,l.memoizedState=vo(n),l.childLanes=xo(e,d,n),t.memoizedState=yo,er(null,l)):(El(t),So(t,p))}var x=e.memoizedState;if(x!==null&&(p=x.dehydrated,p!==null)){if(i)t.flags&256?(El(t),t.flags&=-257,t=Eo(e,t,n)):t.memoizedState!==null?(wl(),t.child=e.child,t.flags|=128,t=null):(wl(),p=l.fallback,a=t.mode,l=ms({mode:"visible",children:l.children},a),p=ta(p,a,n,null),p.flags|=2,l.return=t,p.return=t,l.sibling=p,t.child=l,ca(t,e.child,null,n),l=t.child,l.memoizedState=vo(n),l.childLanes=xo(e,d,n),t.memoizedState=yo,t=er(null,l));else if(El(t),lu(p)){if(d=p.nextSibling&&p.nextSibling.dataset,d)var j=d.dgst;d=j,l=Error(s(419)),l.stack="",l.digest=d,Yi({value:l,source:null,stack:null}),t=Eo(e,t,n)}else if(ut||Ga(e,t,n,!1),d=(n&e.childLanes)!==0,ut||d){if(d=Xe,d!==null&&(l=pn(d,n),l!==0&&l!==x.retryLane))throw x.retryLane=l,ea(e,l),Ct(d,e,l),go;nu(p)||Ss(),t=Eo(e,t,n)}else nu(p)?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,$e=tn(p.nextSibling),bt=t,je=!0,gl=null,Wt=!1,e!==null&&bf(t,e),t=So(t,l.children),t.flags|=4096);return t}return a?(wl(),p=l.fallback,a=t.mode,x=e.child,j=x.sibling,l=Un(x,{mode:"hidden",children:l.children}),l.subtreeFlags=x.subtreeFlags&65011712,j!==null?p=Un(j,p):(p=ta(p,a,n,null),p.flags|=2),p.return=t,l.return=t,l.sibling=p,t.child=l,er(null,l),l=t.child,p=e.child.memoizedState,p===null?p=vo(n):(a=p.cachePool,a!==null?(x=ct._currentValue,a=a.parent!==x?{parent:x,pool:x}:a):a=wf(),p={baseLanes:p.baseLanes|n,cachePool:a}),l.memoizedState=p,l.childLanes=xo(e,d,n),t.memoizedState=yo,er(e.child,l)):(El(t),n=e.child,e=n.sibling,n=Un(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function So(e,t){return t=ms({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ms(e,t){return e=Lt(22,e,null,t),e.lanes=0,e}function Eo(e,t,n){return ca(t,e.child,null,n),e=So(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ld(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Lc(e.return,t,n)}function wo(e,t,n,l,a,i){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a,treeForkCount:i}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=n,d.tailMode=a,d.treeForkCount=i)}function Ud(e,t,n){var l=t.pendingProps,a=l.revealOrder,i=l.tail;l=l.children;var d=at.current,p=(d&2)!==0;if(p?(d=d&1|2,t.flags|=128):d&=1,J(at,d),vt(e,t,l,n),l=je?Vi:0,!p&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ld(e,n,t);else if(e.tag===19)Ld(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&ts(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),wo(t,!1,a,n,i,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ts(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}wo(t,!0,n,null,i,l);break;case"together":wo(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Xn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ml|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ga(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Un(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Un(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function No(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Qr(e)))}function l_(e,t,n){switch(t.tag){case 3:Ke(t,t.stateNode.containerInfo),yl(t,ct,e.memoizedState.cache),na();break;case 27:case 5:rn(t);break;case 4:Ke(t,t.stateNode.containerInfo);break;case 10:yl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Fc(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(El(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Bd(e,t,n):(El(t),e=Xn(e,t,n),e!==null?e.sibling:null);El(t);break;case 19:var a=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(Ga(e,t,n,!1),l=(n&t.childLanes)!==0),a){if(l)return Ud(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),J(at,at.current),l)break;return null;case 22:return t.lanes=0,Ad(e,t,n,t.pendingProps);case 24:yl(t,ct,e.memoizedState.cache)}return Xn(e,t,n)}function Hd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ut=!0;else{if(!No(e,n)&&(t.flags&128)===0)return ut=!1,l_(e,t,n);ut=(e.flags&131072)!==0}else ut=!1,je&&(t.flags&1048576)!==0&&gf(t,Vi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=ra(t.elementType),t.type=e,typeof e=="function")jc(e)?(l=ua(e,l),t.tag=1,t=Cd(null,t,e,l,n)):(t.tag=0,t=bo(null,t,e,l,n));else{if(e!=null){var a=e.$$typeof;if(a===Ee){t.tag=11,t=Md(null,t,e,l,n);break e}else if(a===ee){t.tag=14,t=Rd(null,t,e,l,n);break e}}throw t=Ae(e)||e,Error(s(306,t,""))}}return t;case 0:return bo(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,a=ua(l,t.pendingProps),Cd(e,t,l,a,n);case 3:e:{if(Ke(t,t.stateNode.containerInfo),e===null)throw Error(s(387));l=t.pendingProps;var i=t.memoizedState;a=i.element,Xc(e,t),Fi(t,l,null,n);var d=t.memoizedState;if(l=d.cache,yl(t,ct,l),l!==i.cache&&Uc(t,[ct],n,!0),Ii(),l=d.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=zd(e,t,l,n);break e}else if(l!==a){a=Zt(Error(s(424)),t),Yi(a),t=zd(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($e=tn(e.firstChild),bt=t,je=!0,gl=null,Wt=!0,n=Af(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(na(),l===a){t=Xn(e,t,n);break e}vt(e,t,l,n)}t=t.child}return t;case 26:return ds(e,t),e===null?(n=Zm(t.type,null,t.pendingProps,null))?t.memoizedState=n:je||(n=t.type,e=t.pendingProps,l=js(F.current).createElement(n),l[ie]=t,l[mt]=e,xt(l,n,e),Pe(l),t.stateNode=l):t.memoizedState=Zm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return rn(t),e===null&&je&&(l=t.stateNode=Qm(t.type,t.pendingProps,F.current),bt=t,Wt=!0,a=$e,Dl(t.type)?(au=a,$e=tn(l.firstChild)):$e=a),vt(e,t,t.pendingProps.children,n),ds(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&je&&((a=l=$e)&&(l=O_(l,t.type,t.pendingProps,Wt),l!==null?(t.stateNode=l,bt=t,$e=tn(l.firstChild),Wt=!1,a=!0):a=!1),a||bl(t)),rn(t),a=t.type,i=t.pendingProps,d=e!==null?e.memoizedProps:null,l=i.children,Wo(a,i)?l=null:d!==null&&Wo(a,d)&&(t.flags|=32),t.memoizedState!==null&&(a=Jc(e,t,Ip,null,null,n),pr._currentValue=a),ds(e,t),vt(e,t,l,n),t.child;case 6:return e===null&&je&&((e=n=$e)&&(n=C_(n,t.pendingProps,Wt),n!==null?(t.stateNode=n,bt=t,$e=null,e=!0):e=!1),e||bl(t)),null;case 13:return Bd(e,t,n);case 4:return Ke(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=ca(t,null,l,n):vt(e,t,l,n),t.child;case 11:return Md(e,t,t.type,t.pendingProps,n);case 7:return vt(e,t,t.pendingProps,n),t.child;case 8:return vt(e,t,t.pendingProps.children,n),t.child;case 12:return vt(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,yl(t,t.type,l.value),vt(e,t,l.children,n),t.child;case 9:return a=t.type._context,l=t.pendingProps.children,aa(t),a=yt(a),l=l(a),t.flags|=1,vt(e,t,l,n),t.child;case 14:return Rd(e,t,t.type,t.pendingProps,n);case 15:return jd(e,t,t.type,t.pendingProps,n);case 19:return Ud(e,t,n);case 31:return n_(e,t,n);case 22:return Ad(e,t,n,t.pendingProps);case 24:return aa(t),l=yt(ct),e===null?(a=Vc(),a===null&&(a=Xe,i=Hc(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=n),a=i),t.memoizedState={parent:l,cache:a},qc(t),yl(t,ct,a)):((e.lanes&n)!==0&&(Xc(e,t),Fi(t,null,null,n),Ii()),a=e.memoizedState,i=t.memoizedState,a.parent!==l?(a={parent:l,cache:l},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),yl(t,ct,l)):(l=i.cache,yl(t,ct,l),l!==a.cache&&Uc(t,[ct],n,!0))),vt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Kn(e){e.flags|=4}function To(e,t,n,l,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(dm())e.flags|=8192;else throw sa=Jr,Yc}else e.flags&=-16777217}function Gd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!th(t))if(dm())e.flags|=8192;else throw sa=Jr,Yc}function hs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Sa():536870912,e.lanes|=t,Pa|=t)}function tr(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function a_(e,t,n){var l=t.pendingProps;switch(Oc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(t),null;case 1:return Qe(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Vn(ct),Le(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ha(t)?Kn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,zc())),Qe(t),null;case 26:var a=t.type,i=t.memoizedState;return e===null?(Kn(t),i!==null?(Qe(t),Gd(t,i)):(Qe(t),To(t,a,null,l,n))):i?i!==e.memoizedState?(Kn(t),Qe(t),Gd(t,i)):(Qe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Kn(t),Qe(t),To(t,a,e,l,n)),null;case 27:if(Gl(t),n=F.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Kn(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return Qe(t),null}e=k.current,Ha(t)?yf(t):(e=Qm(a,l,n),t.stateNode=e,Kn(t))}return Qe(t),null;case 5:if(Gl(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Kn(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return Qe(t),null}if(i=k.current,Ha(t))yf(t);else{var d=js(F.current);switch(i){case 1:i=d.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=d.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=d.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=d.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":i=d.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?d.createElement("select",{is:l.is}):d.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?d.createElement(a,{is:l.is}):d.createElement(a)}}i[ie]=t,i[mt]=l;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)i.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=i;e:switch(xt(i,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Kn(t)}}return Qe(t),To(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Kn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(s(166));if(e=F.current,Ha(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,a=bt,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}e[ie]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||Bm(e.nodeValue,n)),e||bl(t,!0)}else e=js(e).createTextNode(l),e[ie]=t,t.stateNode=e}return Qe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=Ha(t),n!==null){if(e===null){if(!l)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ie]=t}else na(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Qe(t),e=!1}else n=zc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ht(t),t):(Ht(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Qe(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ha(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(s(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(s(317));a[ie]=t}else na(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Qe(t),a=!1}else a=zc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Ht(t),t):(Ht(t),null)}return Ht(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==a&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),hs(t,t.updateQueue),Qe(t),null);case 4:return Le(),e===null&&Io(t.stateNode.containerInfo),Qe(t),null;case 10:return Vn(t.type),Qe(t),null;case 19:if(z(at),l=t.memoizedState,l===null)return Qe(t),null;if(a=(t.flags&128)!==0,i=l.rendering,i===null)if(a)tr(l,!1);else{if(nt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ts(e),i!==null){for(t.flags|=128,tr(l,!1),e=i.updateQueue,t.updateQueue=e,hs(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)hf(n,e),n=n.sibling;return J(at,at.current&1|2),je&&Hn(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Nt()>ys&&(t.flags|=128,a=!0,tr(l,!1),t.lanes=4194304)}else{if(!a)if(e=ts(i),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,hs(t,e),tr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!je)return Qe(t),null}else 2*Nt()-l.renderingStartTime>ys&&n!==536870912&&(t.flags|=128,a=!0,tr(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Nt(),e.sibling=null,n=at.current,J(at,a?n&1|2:n&1),je&&Hn(t,l.treeForkCount),e):(Qe(t),null);case 22:case 23:return Ht(t),Ic(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Qe(t),t.subtreeFlags&6&&(t.flags|=8192)):Qe(t),n=t.updateQueue,n!==null&&hs(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&z(ia),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Vn(ct),Qe(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function i_(e,t){switch(Oc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vn(ct),Le(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Gl(t),null;case 31:if(t.memoizedState!==null){if(Ht(t),t.alternate===null)throw Error(s(340));na()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ht(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));na()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(at),null;case 4:return Le(),null;case 10:return Vn(t.type),null;case 22:case 23:return Ht(t),Ic(),e!==null&&z(ia),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Vn(ct),null;case 25:return null;default:return null}}function Vd(e,t){switch(Oc(t),t.tag){case 3:Vn(ct),Le();break;case 26:case 27:case 5:Gl(t);break;case 4:Le();break;case 31:t.memoizedState!==null&&Ht(t);break;case 13:Ht(t);break;case 19:z(at);break;case 10:Vn(t.type);break;case 22:case 23:Ht(t),Ic(),e!==null&&z(ia);break;case 24:Vn(ct)}}function nr(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&e)===e){l=void 0;var i=n.create,d=n.inst;l=i(),d.destroy=l}n=n.next}while(n!==a)}}catch(p){He(t,t.return,p)}}function Nl(e,t,n){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&e)===e){var d=l.inst,p=d.destroy;if(p!==void 0){d.destroy=void 0,a=t;var x=n,j=p;try{j()}catch(B){He(a,x,B)}}}l=l.next}while(l!==i)}}catch(B){He(t,t.return,B)}}function Yd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Df(t,n)}catch(l){He(e,e.return,l)}}}function qd(e,t,n){n.props=ua(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){He(e,t,l)}}function lr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(a){He(e,t,a)}}function Nn(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){He(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){He(e,t,a)}else n.current=null}function Xd(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){He(e,e.return,a)}}function Mo(e,t,n){try{var l=e.stateNode;M_(l,e.type,n,t),l[mt]=t}catch(a){He(e,e.return,a)}}function Kd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Dl(e.type)||e.tag===4}function Ro(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Dl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jo(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=on));else if(l!==4&&(l===27&&Dl(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(jo(e,t,n),e=e.sibling;e!==null;)jo(e,t,n),e=e.sibling}function ps(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&Dl(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(ps(e,t,n),e=e.sibling;e!==null;)ps(e,t,n),e=e.sibling}function $d(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);xt(t,l,n),t[ie]=e,t[mt]=n}catch(i){He(e,e.return,i)}}var $n=!1,ft=!1,Ao=!1,Qd=typeof WeakSet=="function"?WeakSet:Set,ht=null;function r_(e,t){if(e=e.containerInfo,Jo=Bs,e=af(e),Sc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var d=0,p=-1,x=-1,j=0,B=0,V=e,A=null;t:for(;;){for(var C;V!==n||a!==0&&V.nodeType!==3||(p=d+a),V!==i||l!==0&&V.nodeType!==3||(x=d+l),V.nodeType===3&&(d+=V.nodeValue.length),(C=V.firstChild)!==null;)A=V,V=C;for(;;){if(V===e)break t;if(A===n&&++j===a&&(p=d),A===i&&++B===l&&(x=d),(C=V.nextSibling)!==null)break;V=A,A=V.parentNode}V=C}n=p===-1||x===-1?null:{start:p,end:x}}else n=null}n=n||{start:0,end:0}}else n=null;for(Po={focusedElem:e,selectionRange:n},Bs=!1,ht=t;ht!==null;)if(t=ht,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ht=e;else for(;ht!==null;){switch(t=ht,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,a=i.memoizedProps,i=i.memoizedState,l=n.stateNode;try{var ne=ua(n.type,a);e=l.getSnapshotBeforeUpdate(ne,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(me){He(n,n.return,me)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)tu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":tu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,ht=e;break}ht=t.return}}function Id(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:In(e,n),l&4&&nr(5,n);break;case 1:if(In(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){He(n,n.return,d)}else{var a=ua(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){He(n,n.return,d)}}l&64&&Yd(n),l&512&&lr(n,n.return);break;case 3:if(In(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Df(e,t)}catch(d){He(n,n.return,d)}}break;case 27:t===null&&l&4&&$d(n);case 26:case 5:In(e,n),t===null&&l&4&&Xd(n),l&512&&lr(n,n.return);break;case 12:In(e,n);break;case 31:In(e,n),l&4&&Jd(e,n);break;case 13:In(e,n),l&4&&Pd(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=p_.bind(null,n),z_(e,n))));break;case 22:if(l=n.memoizedState!==null||$n,!l){t=t!==null&&t.memoizedState!==null||ft,a=$n;var i=ft;$n=l,(ft=t)&&!i?Fn(e,n,(n.subtreeFlags&8772)!==0):In(e,n),$n=a,ft=i}break;case 30:break;default:In(e,n)}}function Fd(e){var t=e.alternate;t!==null&&(e.alternate=null,Fd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Xl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,At=!1;function Qn(e,t,n){for(n=n.child;n!==null;)Zd(e,t,n),n=n.sibling}function Zd(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(St,n)}catch{}switch(n.tag){case 26:ft||Nn(n,t),Qn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ft||Nn(n,t);var l=Ze,a=At;Dl(n.type)&&(Ze=n.stateNode,At=!1),Qn(e,t,n),dr(n.stateNode),Ze=l,At=a;break;case 5:ft||Nn(n,t);case 6:if(l=Ze,a=At,Ze=null,Qn(e,t,n),Ze=l,At=a,Ze!==null)if(At)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(n.stateNode)}catch(i){He(n,t,i)}else try{Ze.removeChild(n.stateNode)}catch(i){He(n,t,i)}break;case 18:Ze!==null&&(At?(e=Ze,Ym(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ri(e)):Ym(Ze,n.stateNode));break;case 4:l=Ze,a=At,Ze=n.stateNode.containerInfo,At=!0,Qn(e,t,n),Ze=l,At=a;break;case 0:case 11:case 14:case 15:Nl(2,n,t),ft||Nl(4,n,t),Qn(e,t,n);break;case 1:ft||(Nn(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&qd(n,t,l)),Qn(e,t,n);break;case 21:Qn(e,t,n);break;case 22:ft=(l=ft)||n.memoizedState!==null,Qn(e,t,n),ft=l;break;default:Qn(e,t,n)}}function Jd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ri(e)}catch(n){He(t,t.return,n)}}}function Pd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ri(e)}catch(n){He(t,t.return,n)}}function s_(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Qd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Qd),t;default:throw Error(s(435,e.tag))}}function _s(e,t){var n=s_(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var a=__.bind(null,e,l);l.then(a,a)}})}function kt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],i=e,d=t,p=d;e:for(;p!==null;){switch(p.tag){case 27:if(Dl(p.type)){Ze=p.stateNode,At=!1;break e}break;case 5:Ze=p.stateNode,At=!1;break e;case 3:case 4:Ze=p.stateNode.containerInfo,At=!0;break e}p=p.return}if(Ze===null)throw Error(s(160));Zd(i,d,a),Ze=null,At=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Wd(t,e),t=t.sibling}var mn=null;function Wd(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kt(t,e),Dt(e),l&4&&(Nl(3,e,e.return),nr(3,e),Nl(5,e,e.return));break;case 1:kt(t,e),Dt(e),l&512&&(ft||n===null||Nn(n,n.return)),l&64&&$n&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=mn;if(kt(t,e),Dt(e),l&512&&(ft||n===null||Nn(n,n.return)),l&4){var i=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(l){case"title":i=a.getElementsByTagName("title")[0],(!i||i[Qt]||i[ie]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(l),a.head.insertBefore(i,a.querySelector("head > title"))),xt(i,l,n),i[ie]=e,Pe(i),l=i;break e;case"link":var d=Wm("link","href",a).get(l+(n.href||""));if(d){for(var p=0;p<d.length;p++)if(i=d[p],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(p,1);break t}}i=a.createElement(l),xt(i,l,n),a.head.appendChild(i);break;case"meta":if(d=Wm("meta","content",a).get(l+(n.content||""))){for(p=0;p<d.length;p++)if(i=d[p],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(p,1);break t}}i=a.createElement(l),xt(i,l,n),a.head.appendChild(i);break;default:throw Error(s(468,l))}i[ie]=e,Pe(i),l=i}e.stateNode=l}else eh(a,e.type,e.stateNode);else e.stateNode=Pm(a,l,e.memoizedProps);else i!==l?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,l===null?eh(a,e.type,e.stateNode):Pm(a,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Mo(e,e.memoizedProps,n.memoizedProps)}break;case 27:kt(t,e),Dt(e),l&512&&(ft||n===null||Nn(n,n.return)),n!==null&&l&4&&Mo(e,e.memoizedProps,n.memoizedProps);break;case 5:if(kt(t,e),Dt(e),l&512&&(ft||n===null||Nn(n,n.return)),e.flags&32){a=e.stateNode;try{fl(a,"")}catch(ne){He(e,e.return,ne)}}l&4&&e.stateNode!=null&&(a=e.memoizedProps,Mo(e,a,n!==null?n.memoizedProps:a)),l&1024&&(Ao=!0);break;case 6:if(kt(t,e),Dt(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(ne){He(e,e.return,ne)}}break;case 3:if(Ds=null,a=mn,mn=As(t.containerInfo),kt(t,e),mn=a,Dt(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{ri(t.containerInfo)}catch(ne){He(e,e.return,ne)}Ao&&(Ao=!1,em(e));break;case 4:l=mn,mn=As(e.stateNode.containerInfo),kt(t,e),Dt(e),mn=l;break;case 12:kt(t,e),Dt(e);break;case 31:kt(t,e),Dt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,_s(e,l)));break;case 13:kt(t,e),Dt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(bs=Nt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,_s(e,l)));break;case 22:a=e.memoizedState!==null;var x=n!==null&&n.memoizedState!==null,j=$n,B=ft;if($n=j||a,ft=B||x,kt(t,e),ft=B,$n=j,Dt(e),l&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||x||$n||ft||fa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){x=n=t;try{if(i=x.stateNode,a)d=i.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{p=x.stateNode;var V=x.memoizedProps.style,A=V!=null&&V.hasOwnProperty("display")?V.display:null;p.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(ne){He(x,x.return,ne)}}}else if(t.tag===6){if(n===null){x=t;try{x.stateNode.nodeValue=a?"":x.memoizedProps}catch(ne){He(x,x.return,ne)}}}else if(t.tag===18){if(n===null){x=t;try{var C=x.stateNode;a?qm(C,!0):qm(x.stateNode,!1)}catch(ne){He(x,x.return,ne)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,_s(e,n))));break;case 19:kt(t,e),Dt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,_s(e,l)));break;case 30:break;case 21:break;default:kt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Kd(l)){n=l;break}l=l.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var a=n.stateNode,i=Ro(e);ps(e,i,a);break;case 5:var d=n.stateNode;n.flags&32&&(fl(d,""),n.flags&=-33);var p=Ro(e);ps(e,p,d);break;case 3:case 4:var x=n.stateNode.containerInfo,j=Ro(e);jo(e,j,x);break;default:throw Error(s(161))}}catch(B){He(e,e.return,B)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function em(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;em(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function In(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Id(e,t.alternate,t),t=t.sibling}function fa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Nl(4,t,t.return),fa(t);break;case 1:Nn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&qd(t,t.return,n),fa(t);break;case 27:dr(t.stateNode);case 26:case 5:Nn(t,t.return),fa(t);break;case 22:t.memoizedState===null&&fa(t);break;case 30:fa(t);break;default:fa(t)}e=e.sibling}}function Fn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,a=e,i=t,d=i.flags;switch(i.tag){case 0:case 11:case 15:Fn(a,i,n),nr(4,i);break;case 1:if(Fn(a,i,n),l=i,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(j){He(l,l.return,j)}if(l=i,a=l.updateQueue,a!==null){var p=l.stateNode;try{var x=a.shared.hiddenCallbacks;if(x!==null)for(a.shared.hiddenCallbacks=null,a=0;a<x.length;a++)kf(x[a],p)}catch(j){He(l,l.return,j)}}n&&d&64&&Yd(i),lr(i,i.return);break;case 27:$d(i);case 26:case 5:Fn(a,i,n),n&&l===null&&d&4&&Xd(i),lr(i,i.return);break;case 12:Fn(a,i,n);break;case 31:Fn(a,i,n),n&&d&4&&Jd(a,i);break;case 13:Fn(a,i,n),n&&d&4&&Pd(a,i);break;case 22:i.memoizedState===null&&Fn(a,i,n),lr(i,i.return);break;case 30:break;default:Fn(a,i,n)}t=t.sibling}}function ko(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&qi(n))}function Do(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&qi(e))}function hn(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)tm(e,t,n,l),t=t.sibling}function tm(e,t,n,l){var a=t.flags;switch(t.tag){case 0:case 11:case 15:hn(e,t,n,l),a&2048&&nr(9,t);break;case 1:hn(e,t,n,l);break;case 3:hn(e,t,n,l),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&qi(e)));break;case 12:if(a&2048){hn(e,t,n,l),e=t.stateNode;try{var i=t.memoizedProps,d=i.id,p=i.onPostCommit;typeof p=="function"&&p(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){He(t,t.return,x)}}else hn(e,t,n,l);break;case 31:hn(e,t,n,l);break;case 13:hn(e,t,n,l);break;case 23:break;case 22:i=t.stateNode,d=t.alternate,t.memoizedState!==null?i._visibility&2?hn(e,t,n,l):ar(e,t):i._visibility&2?hn(e,t,n,l):(i._visibility|=2,Fa(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),a&2048&&ko(d,t);break;case 24:hn(e,t,n,l),a&2048&&Do(t.alternate,t);break;default:hn(e,t,n,l)}}function Fa(e,t,n,l,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,d=t,p=n,x=l,j=d.flags;switch(d.tag){case 0:case 11:case 15:Fa(i,d,p,x,a),nr(8,d);break;case 23:break;case 22:var B=d.stateNode;d.memoizedState!==null?B._visibility&2?Fa(i,d,p,x,a):ar(i,d):(B._visibility|=2,Fa(i,d,p,x,a)),a&&j&2048&&ko(d.alternate,d);break;case 24:Fa(i,d,p,x,a),a&&j&2048&&Do(d.alternate,d);break;default:Fa(i,d,p,x,a)}t=t.sibling}}function ar(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,a=l.flags;switch(l.tag){case 22:ar(n,l),a&2048&&ko(l.alternate,l);break;case 24:ar(n,l),a&2048&&Do(l.alternate,l);break;default:ar(n,l)}t=t.sibling}}var ir=8192;function Za(e,t,n){if(e.subtreeFlags&ir)for(e=e.child;e!==null;)nm(e,t,n),e=e.sibling}function nm(e,t,n){switch(e.tag){case 26:Za(e,t,n),e.flags&ir&&e.memoizedState!==null&&Q_(n,mn,e.memoizedState,e.memoizedProps);break;case 5:Za(e,t,n);break;case 3:case 4:var l=mn;mn=As(e.stateNode.containerInfo),Za(e,t,n),mn=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=ir,ir=16777216,Za(e,t,n),ir=l):Za(e,t,n));break;default:Za(e,t,n)}}function lm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function rr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];ht=l,im(l,e)}lm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)am(e),e=e.sibling}function am(e){switch(e.tag){case 0:case 11:case 15:rr(e),e.flags&2048&&Nl(9,e,e.return);break;case 3:rr(e);break;case 12:rr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,gs(e)):rr(e);break;default:rr(e)}}function gs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];ht=l,im(l,e)}lm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Nl(8,t,t.return),gs(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,gs(t));break;default:gs(t)}e=e.sibling}}function im(e,t){for(;ht!==null;){var n=ht;switch(n.tag){case 0:case 11:case 15:Nl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:qi(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,ht=l;else e:for(n=e;ht!==null;){l=ht;var a=l.sibling,i=l.return;if(Fd(l),l===n){ht=null;break e}if(a!==null){a.return=i,ht=a;break e}ht=i}}}var c_={getCacheForType:function(e){var t=yt(ct),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return yt(ct).controller.signal}},o_=typeof WeakMap=="function"?WeakMap:Map,ze=0,Xe=null,Ne=null,Me=0,Ue=0,Gt=null,Tl=!1,Ja=!1,Oo=!1,Zn=0,nt=0,Ml=0,da=0,Co=0,Vt=0,Pa=0,sr=null,Ot=null,zo=!1,bs=0,rm=0,ys=1/0,vs=null,Rl=null,dt=0,jl=null,Wa=null,Jn=0,Bo=0,Lo=null,sm=null,cr=0,Uo=null;function Yt(){return(ze&2)!==0&&Me!==0?Me&-Me:O.T!==null?Xo():vi()}function cm(){if(Vt===0)if((Me&536870912)===0||je){var e=va;va<<=1,(va&3932160)===0&&(va=262144),Vt=e}else Vt=536870912;return e=Ut.current,e!==null&&(e.flags|=32),Vt}function Ct(e,t,n){(e===Xe&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(ei(e,0),Al(e,Me,Vt,!1)),$t(e,n),((ze&2)===0||e!==Xe)&&(e===Xe&&((ze&2)===0&&(da|=n),nt===4&&Al(e,Me,Vt,!1)),Tn(e))}function om(e,t,n){if((ze&6)!==0)throw Error(s(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||il(e,t),a=l?d_(e,t):Go(e,t,!0),i=l;do{if(a===0){Ja&&!l&&Al(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!u_(n)){a=Go(e,t,!1),i=!1;continue}if(a===2){if(i=t,e.errorRecoveryDisabledLanes&i)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var p=e;a=sr;var x=p.current.memoizedState.isDehydrated;if(x&&(ei(p,d).flags|=256),d=Go(p,d,!1),d!==2){if(Oo&&!x){p.errorRecoveryDisabledLanes|=i,da|=i,a=4;break e}i=Ot,Ot=a,i!==null&&(Ot===null?Ot=i:Ot.push.apply(Ot,i))}a=d}if(i=!1,a!==2)continue}}if(a===1){ei(e,0),Al(e,t,0,!0);break}e:{switch(l=e,i=a,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Al(l,t,Vt,!Tl);break e;case 2:Ot=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(a=bs+300-Nt(),10<a)){if(Al(l,t,Vt,!Tl),We(l,0,!0)!==0)break e;Jn=t,l.timeoutHandle=Gm(um.bind(null,l,n,Ot,vs,zo,t,Vt,da,Pa,Tl,i,"Throttled",-0,0),a);break e}um(l,n,Ot,vs,zo,t,Vt,da,Pa,Tl,i,null,-0,0)}}break}while(!0);Tn(e)}function um(e,t,n,l,a,i,d,p,x,j,B,V,A,C){if(e.timeoutHandle=-1,V=t.subtreeFlags,V&8192||(V&16785408)===16785408){V={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:on},nm(t,i,V);var ne=(i&62914560)===i?bs-Nt():(i&4194048)===i?rm-Nt():0;if(ne=I_(V,ne),ne!==null){Jn=i,e.cancelPendingCommit=ne(bm.bind(null,e,t,i,n,l,a,d,p,x,B,V,null,A,C)),Al(e,i,d,!j);return}}bm(e,t,i,n,l,a,d,p,x)}function u_(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],i=a.getSnapshot;a=a.value;try{if(!Bt(i(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Al(e,t,n,l){t&=~Co,t&=~da,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var a=t;0<a;){var i=31-rt(a),d=1<<i;l[i]=-1,a&=~d}n!==0&&sn(e,n,t)}function xs(){return(ze&6)===0?(or(0),!1):!0}function Ho(){if(Ne!==null){if(Ue===0)var e=Ne.return;else e=Ne,Gn=la=null,eo(e),Xa=null,Ki=0,e=Ne;for(;e!==null;)Vd(e.alternate,e),e=e.return;Ne=null}}function ei(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,A_(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Jn=0,Ho(),Xe=e,Ne=n=Un(e.current,null),Me=t,Ue=0,Gt=null,Tl=!1,Ja=il(e,t),Oo=!1,Pa=Vt=Co=da=Ml=nt=0,Ot=sr=null,zo=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var a=31-rt(l),i=1<<a;t|=e[a],l&=~i}return Zn=t,Yr(),n}function fm(e,t){ve=null,O.H=Wi,t===qa||t===Zr?(t=Mf(),Ue=3):t===Yc?(t=Mf(),Ue=4):Ue=t===go?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Gt=t,Ne===null&&(nt=1,us(e,Zt(t,e.current)))}function dm(){var e=Ut.current;return e===null?!0:(Me&4194048)===Me?en===null:(Me&62914560)===Me||(Me&536870912)!==0?e===en:!1}function mm(){var e=O.H;return O.H=Wi,e===null?Wi:e}function hm(){var e=O.A;return O.A=c_,e}function Ss(){nt=4,Tl||(Me&4194048)!==Me&&Ut.current!==null||(Ja=!0),(Ml&134217727)===0&&(da&134217727)===0||Xe===null||Al(Xe,Me,Vt,!1)}function Go(e,t,n){var l=ze;ze|=2;var a=mm(),i=hm();(Xe!==e||Me!==t)&&(vs=null,ei(e,t)),t=!1;var d=nt;e:do try{if(Ue!==0&&Ne!==null){var p=Ne,x=Gt;switch(Ue){case 8:Ho(),d=6;break e;case 3:case 2:case 9:case 6:Ut.current===null&&(t=!0);var j=Ue;if(Ue=0,Gt=null,ti(e,p,x,j),n&&Ja){d=0;break e}break;default:j=Ue,Ue=0,Gt=null,ti(e,p,x,j)}}f_(),d=nt;break}catch(B){fm(e,B)}while(!0);return t&&e.shellSuspendCounter++,Gn=la=null,ze=l,O.H=a,O.A=i,Ne===null&&(Xe=null,Me=0,Yr()),d}function f_(){for(;Ne!==null;)pm(Ne)}function d_(e,t){var n=ze;ze|=2;var l=mm(),a=hm();Xe!==e||Me!==t?(vs=null,ys=Nt()+500,ei(e,t)):Ja=il(e,t);e:do try{if(Ue!==0&&Ne!==null){t=Ne;var i=Gt;t:switch(Ue){case 1:Ue=0,Gt=null,ti(e,t,i,1);break;case 2:case 9:if(Nf(i)){Ue=0,Gt=null,_m(t);break}t=function(){Ue!==2&&Ue!==9||Xe!==e||(Ue=7),Tn(e)},i.then(t,t);break e;case 3:Ue=7;break e;case 4:Ue=5;break e;case 7:Nf(i)?(Ue=0,Gt=null,_m(t)):(Ue=0,Gt=null,ti(e,t,i,7));break;case 5:var d=null;switch(Ne.tag){case 26:d=Ne.memoizedState;case 5:case 27:var p=Ne;if(d?th(d):p.stateNode.complete){Ue=0,Gt=null;var x=p.sibling;if(x!==null)Ne=x;else{var j=p.return;j!==null?(Ne=j,Es(j)):Ne=null}break t}}Ue=0,Gt=null,ti(e,t,i,5);break;case 6:Ue=0,Gt=null,ti(e,t,i,6);break;case 8:Ho(),nt=6;break e;default:throw Error(s(462))}}m_();break}catch(B){fm(e,B)}while(!0);return Gn=la=null,O.H=l,O.A=a,ze=n,Ne!==null?0:(Xe=null,Me=0,Yr(),nt)}function m_(){for(;Ne!==null&&!_i();)pm(Ne)}function pm(e){var t=Hd(e.alternate,e,Zn);e.memoizedProps=e.pendingProps,t===null?Es(e):Ne=t}function _m(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Od(n,t,t.pendingProps,t.type,void 0,Me);break;case 11:t=Od(n,t,t.pendingProps,t.type.render,t.ref,Me);break;case 5:eo(t);default:Vd(n,t),t=Ne=hf(t,Zn),t=Hd(n,t,Zn)}e.memoizedProps=e.pendingProps,t===null?Es(e):Ne=t}function ti(e,t,n,l){Gn=la=null,eo(t),Xa=null,Ki=0;var a=t.return;try{if(t_(e,a,t,n,Me)){nt=1,us(e,Zt(n,e.current)),Ne=null;return}}catch(i){if(a!==null)throw Ne=a,i;nt=1,us(e,Zt(n,e.current)),Ne=null;return}t.flags&32768?(je||l===1?e=!0:Ja||(Me&536870912)!==0?e=!1:(Tl=e=!0,(l===2||l===9||l===3||l===6)&&(l=Ut.current,l!==null&&l.tag===13&&(l.flags|=16384))),gm(t,e)):Es(t)}function Es(e){var t=e;do{if((t.flags&32768)!==0){gm(t,Tl);return}e=t.return;var n=a_(t.alternate,t,Zn);if(n!==null){Ne=n;return}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);nt===0&&(nt=5)}function gm(e,t){do{var n=i_(e.alternate,e);if(n!==null){n.flags&=32767,Ne=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ne=e;return}Ne=e=n}while(e!==null);nt=6,Ne=null}function bm(e,t,n,l,a,i,d,p,x){e.cancelPendingCommit=null;do ws();while(dt!==0);if((ze&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=Mc,yi(e,n,i,d,p,x),e===Xe&&(Ne=Xe=null,Me=0),Wa=t,jl=e,Jn=n,Bo=i,Lo=a,sm=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,g_(Yl,function(){return Em(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,a=H.p,H.p=2,d=ze,ze|=4;try{r_(e,t,n)}finally{ze=d,H.p=a,O.T=l}}dt=1,ym(),vm(),xm()}}function ym(){if(dt===1){dt=0;var e=jl,t=Wa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=O.T,O.T=null;var l=H.p;H.p=2;var a=ze;ze|=4;try{Wd(t,e);var i=Po,d=af(e.containerInfo),p=i.focusedElem,x=i.selectionRange;if(d!==p&&p&&p.ownerDocument&&lf(p.ownerDocument.documentElement,p)){if(x!==null&&Sc(p)){var j=x.start,B=x.end;if(B===void 0&&(B=j),"selectionStart"in p)p.selectionStart=j,p.selectionEnd=Math.min(B,p.value.length);else{var V=p.ownerDocument||document,A=V&&V.defaultView||window;if(A.getSelection){var C=A.getSelection(),ne=p.textContent.length,me=Math.min(x.start,ne),qe=x.end===void 0?me:Math.min(x.end,ne);!C.extend&&me>qe&&(d=qe,qe=me,me=d);var T=nf(p,me),w=nf(p,qe);if(T&&w&&(C.rangeCount!==1||C.anchorNode!==T.node||C.anchorOffset!==T.offset||C.focusNode!==w.node||C.focusOffset!==w.offset)){var R=V.createRange();R.setStart(T.node,T.offset),C.removeAllRanges(),me>qe?(C.addRange(R),C.extend(w.node,w.offset)):(R.setEnd(w.node,w.offset),C.addRange(R))}}}}for(V=[],C=p;C=C.parentNode;)C.nodeType===1&&V.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<V.length;p++){var G=V[p];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}Bs=!!Jo,Po=Jo=null}finally{ze=a,H.p=l,O.T=n}}e.current=t,dt=2}}function vm(){if(dt===2){dt=0;var e=jl,t=Wa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=O.T,O.T=null;var l=H.p;H.p=2;var a=ze;ze|=4;try{Id(e,t.alternate,t)}finally{ze=a,H.p=l,O.T=n}}dt=3}}function xm(){if(dt===4||dt===3){dt=0,jr();var e=jl,t=Wa,n=Jn,l=sm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?dt=5:(dt=0,Wa=jl=null,Sm(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Rl=null),gn(n),t=t.stateNode,Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(St,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=O.T,a=H.p,H.p=2,O.T=null;try{for(var i=e.onRecoverableError,d=0;d<l.length;d++){var p=l[d];i(p.value,{componentStack:p.stack})}}finally{O.T=t,H.p=a}}(Jn&3)!==0&&ws(),Tn(e),a=e.pendingLanes,(n&261930)!==0&&(a&42)!==0?e===Uo?cr++:(cr=0,Uo=e):cr=0,or(0)}}function Sm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,qi(t)))}function ws(){return ym(),vm(),xm(),Em()}function Em(){if(dt!==5)return!1;var e=jl,t=Bo;Bo=0;var n=gn(Jn),l=O.T,a=H.p;try{H.p=32>n?32:n,O.T=null,n=Lo,Lo=null;var i=jl,d=Jn;if(dt=0,Wa=jl=null,Jn=0,(ze&6)!==0)throw Error(s(331));var p=ze;if(ze|=4,am(i.current),tm(i,i.current,d,n),ze=p,or(0,!1),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(St,i)}catch{}return!0}finally{H.p=a,O.T=l,Sm(e,t)}}function wm(e,t,n){t=Zt(n,t),t=_o(e.stateNode,t,2),e=Sl(e,t,2),e!==null&&($t(e,2),Tn(e))}function He(e,t,n){if(e.tag===3)wm(e,e,n);else for(;t!==null;){if(t.tag===3){wm(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Rl===null||!Rl.has(l))){e=Zt(n,e),n=Nd(2),l=Sl(t,n,2),l!==null&&(Td(n,l,t,e),$t(l,2),Tn(l));break}}t=t.return}}function Vo(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new o_;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(n)||(Oo=!0,a.add(n),e=h_.bind(null,e,t,n),t.then(e,e))}function h_(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Xe===e&&(Me&n)===n&&(nt===4||nt===3&&(Me&62914560)===Me&&300>Nt()-bs?(ze&2)===0&&ei(e,0):Co|=n,Pa===Me&&(Pa=0)),Tn(e)}function Nm(e,t){t===0&&(t=Sa()),e=ea(e,t),e!==null&&($t(e,t),Tn(e))}function p_(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nm(e,n)}function __(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(t),Nm(e,n)}function g_(e,t){return pi(e,t)}var Ns=null,ni=null,Yo=!1,Ts=!1,qo=!1,kl=0;function Tn(e){e!==ni&&e.next===null&&(ni===null?Ns=ni=e:ni=ni.next=e),Ts=!0,Yo||(Yo=!0,y_())}function or(e,t){if(!qo&&Ts){qo=!0;do for(var n=!1,l=Ns;l!==null;){if(e!==0){var a=l.pendingLanes;if(a===0)var i=0;else{var d=l.suspendedLanes,p=l.pingedLanes;i=(1<<31-rt(42|e)+1)-1,i&=a&~(d&~p),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,jm(l,i))}else i=Me,i=We(l,l===Xe?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||il(l,i)||(n=!0,jm(l,i));l=l.next}while(n);qo=!1}}function b_(){Tm()}function Tm(){Ts=Yo=!1;var e=0;kl!==0&&j_()&&(e=kl);for(var t=Nt(),n=null,l=Ns;l!==null;){var a=l.next,i=Mm(l,t);i===0?(l.next=null,n===null?Ns=a:n.next=a,a===null&&(ni=n)):(n=l,(e!==0||(i&3)!==0)&&(Ts=!0)),l=a}dt!==0&&dt!==5||or(e),kl!==0&&(kl=0)}function Mm(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var d=31-rt(i),p=1<<d,x=a[d];x===-1?((p&n)===0||(p&l)!==0)&&(a[d]=xa(p,t)):x<=t&&(e.expiredLanes|=p),i&=~p}if(t=Xe,n=Me,n=We(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Mn(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||il(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&Mn(l),gn(n)){case 2:case 8:n=bi;break;case 32:n=Yl;break;case 268435456:n=jn;break;default:n=Yl}return l=Rm.bind(null,e),n=pi(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&Mn(l),e.callbackPriority=2,e.callbackNode=null,2}function Rm(e,t){if(dt!==0&&dt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ws()&&e.callbackNode!==n)return null;var l=Me;return l=We(e,e===Xe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(om(e,l,t),Mm(e,Nt()),e.callbackNode!=null&&e.callbackNode===n?Rm.bind(null,e):null)}function jm(e,t){if(ws())return null;om(e,t,!0)}function y_(){k_(function(){(ze&6)!==0?pi(gi,b_):Tm()})}function Xo(){if(kl===0){var e=Va;e===0&&(e=al,al<<=1,(al&261888)===0&&(al=256)),kl=e}return kl}function Am(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ql(""+e)}function km(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function v_(e,t,n,l,a){if(t==="submit"&&n&&n.stateNode===a){var i=Am((a[mt]||null).action),d=l.submitter;d&&(t=(t=d[mt]||null)?Am(t.formAction):d.getAttribute("formAction"),t!==null&&(i=t,d=null));var p=new ka("action","action",null,l,a);e.push({event:p,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(kl!==0){var x=d?km(a,d):new FormData(a);oo(n,{pending:!0,data:x,method:a.method,action:i},null,x)}}else typeof i=="function"&&(p.preventDefault(),x=d?km(a,d):new FormData(a),oo(n,{pending:!0,data:x,method:a.method,action:i},i,x))},currentTarget:a}]})}}for(var Ko=0;Ko<Tc.length;Ko++){var $o=Tc[Ko],x_=$o.toLowerCase(),S_=$o[0].toUpperCase()+$o.slice(1);dn(x_,"on"+S_)}dn(cf,"onAnimationEnd"),dn(of,"onAnimationIteration"),dn(uf,"onAnimationStart"),dn("dblclick","onDoubleClick"),dn("focusin","onFocus"),dn("focusout","onBlur"),dn(Up,"onTransitionRun"),dn(Hp,"onTransitionStart"),dn(Gp,"onTransitionCancel"),dn(ff,"onTransitionEnd"),Cn("onMouseEnter",["mouseout","mouseover"]),Cn("onMouseLeave",["mouseout","mouseover"]),Cn("onPointerEnter",["pointerout","pointerover"]),Cn("onPointerLeave",["pointerout","pointerover"]),st("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),st("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),st("onBeforeInput",["compositionend","keypress","textInput","paste"]),st("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ur));function Dm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],a=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var d=l.length-1;0<=d;d--){var p=l[d],x=p.instance,j=p.currentTarget;if(p=p.listener,x!==i&&a.isPropagationStopped())break e;i=p,a.currentTarget=j;try{i(a)}catch(B){Vr(B)}a.currentTarget=null,i=x}else for(d=0;d<l.length;d++){if(p=l[d],x=p.instance,j=p.currentTarget,p=p.listener,x!==i&&a.isPropagationStopped())break e;i=p,a.currentTarget=j;try{i(a)}catch(B){Vr(B)}a.currentTarget=null,i=x}}}}function Te(e,t){var n=t[xi];n===void 0&&(n=t[xi]=new Set);var l=e+"__bubble";n.has(l)||(Om(t,e,2,!1),n.add(l))}function Qo(e,t,n){var l=0;t&&(l|=4),Om(n,e,l,t)}var Ms="_reactListening"+Math.random().toString(36).slice(2);function Io(e){if(!e[Ms]){e[Ms]=!0,Ea.forEach(function(n){n!=="selectionchange"&&(E_.has(n)||Qo(n,!1,e),Qo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ms]||(t[Ms]=!0,Qo("selectionchange",!1,t))}}function Om(e,t,n,l){switch(ch(t)){case 2:var a=J_;break;case 8:a=P_;break;default:a=ou}n=a.bind(null,t,n,e),a=void 0,!Bn||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Fo(e,t,n,l,a){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var d=l.tag;if(d===3||d===4){var p=l.stateNode.containerInfo;if(p===a)break;if(d===4)for(d=l.return;d!==null;){var x=d.tag;if((x===3||x===4)&&d.stateNode.containerInfo===a)return;d=d.return}for(;p!==null;){if(d=Q(p),d===null)return;if(x=d.tag,x===5||x===6||x===26||x===27){l=i=d;continue e}p=p.parentNode}}l=l.return}Cr(function(){var j=i,B=Ai(n),V=[];e:{var A=df.get(e);if(A!==void 0){var C=ka,ne=e;switch(e){case"keypress":if(ja(n)===0)break e;case"keydown":case"keyup":C=_c;break;case"focusin":ne="focus",C=Y;break;case"focusout":ne="blur",C=Y;break;case"beforeblur":case"afterblur":C=Y;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Br;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=y;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=bc;break;case cf:case of:case uf:C=he;break;case ff:C=xp;break;case"scroll":case"scrollend":C=mc;break;case"wheel":C=Ep;break;case"copy":case"cut":case"paste":C=It;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Ur;break;case"toggle":case"beforetoggle":C=Np}var me=(t&4)!==0,qe=!me&&(e==="scroll"||e==="scrollend"),T=me?A!==null?A+"Capture":null:A;me=[];for(var w=j,R;w!==null;){var G=w;if(R=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||R===null||T===null||(G=Il(w,T),G!=null&&me.push(fr(w,G,R))),qe)break;w=w.return}0<me.length&&(A=new C(A,ne,null,n,B),V.push({event:A,listeners:me}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",A&&n!==ji&&(ne=n.relatedTarget||n.fromElement)&&(Q(ne)||ne[cl]))break e;if((C||A)&&(A=B.window===B?B:(A=B.ownerDocument)?A.defaultView||A.parentWindow:window,C?(ne=n.relatedTarget||n.toElement,C=j,ne=ne?Q(ne):null,ne!==null&&(qe=m(ne),me=ne.tag,ne!==qe||me!==5&&me!==27&&me!==6)&&(ne=null)):(C=null,ne=j),C!==ne)){if(me=Br,G="onMouseLeave",T="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(me=Ur,G="onPointerLeave",T="onPointerEnter",w="pointer"),qe=C==null?A:Je(C),R=ne==null?A:Je(ne),A=new me(G,w+"leave",C,n,B),A.target=qe,A.relatedTarget=R,G=null,Q(B)===j&&(me=new me(T,w+"enter",ne,n,B),me.target=R,me.relatedTarget=qe,G=me),qe=G,C&&ne)t:{for(me=w_,T=C,w=ne,R=0,G=T;G;G=me(G))R++;G=0;for(var oe=w;oe;oe=me(oe))G++;for(;0<R-G;)T=me(T),R--;for(;0<G-R;)w=me(w),G--;for(;R--;){if(T===w||w!==null&&T===w.alternate){me=T;break t}T=me(T),w=me(w)}me=null}else me=null;C!==null&&Cm(V,A,C,me,!1),ne!==null&&qe!==null&&Cm(V,qe,ne,me,!0)}}e:{if(A=j?Je(j):window,C=A.nodeName&&A.nodeName.toLowerCase(),C==="select"||C==="input"&&A.type==="file")var Oe=Zu;else if(Iu(A))if(Ju)Oe=zp;else{Oe=Op;var re=Dp}else C=A.nodeName,!C||C.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?j&&$l(j.elementType)&&(Oe=Zu):Oe=Cp;if(Oe&&(Oe=Oe(e,j))){Fu(V,Oe,n,B);break e}re&&re(e,A,j),e==="focusout"&&j&&A.type==="number"&&j.memoizedProps.value!=null&&vn(A,"number",A.value)}switch(re=j?Je(j):window,e){case"focusin":(Iu(re)||re.contentEditable==="true")&&(Oa=re,Ec=j,Gi=null);break;case"focusout":Gi=Ec=Oa=null;break;case"mousedown":wc=!0;break;case"contextmenu":case"mouseup":case"dragend":wc=!1,rf(V,n,B);break;case"selectionchange":if(Lp)break;case"keydown":case"keyup":rf(V,n,B)}var Se;if(yc)e:{switch(e){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else Da?$u(e,n)&&(Re="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Re="onCompositionStart");Re&&(qu&&n.locale!=="ko"&&(Da||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&Da&&(Se=Di()):(xn=B,Ma="value"in xn?xn.value:xn.textContent,Da=!0)),re=Rs(j,Re),0<re.length&&(Re=new pl(Re,e,null,n,B),V.push({event:Re,listeners:re}),Se?Re.data=Se:(Se=Qu(n),Se!==null&&(Re.data=Se)))),(Se=Mp?Rp(e,n):jp(e,n))&&(Re=Rs(j,"onBeforeInput"),0<Re.length&&(re=new pl("onBeforeInput","beforeinput",null,n,B),V.push({event:re,listeners:Re}),re.data=Se)),v_(V,e,j,n,B)}Dm(V,t)})}function fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Rs(e,t){for(var n=t+"Capture",l=[];e!==null;){var a=e,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=Il(e,n),a!=null&&l.unshift(fr(e,a,i)),a=Il(e,t),a!=null&&l.push(fr(e,a,i))),e.tag===3)return l;e=e.return}return[]}function w_(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Cm(e,t,n,l,a){for(var i=t._reactName,d=[];n!==null&&n!==l;){var p=n,x=p.alternate,j=p.stateNode;if(p=p.tag,x!==null&&x===l)break;p!==5&&p!==26&&p!==27||j===null||(x=j,a?(j=Il(n,i),j!=null&&d.unshift(fr(n,j,x))):a||(j=Il(n,i),j!=null&&d.push(fr(n,j,x)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var N_=/\r\n?/g,T_=/\u0000|\uFFFD/g;function zm(e){return(typeof e=="string"?e:""+e).replace(N_,`
`).replace(T_,"")}function Bm(e,t){return t=zm(t),zm(e)===t}function Ye(e,t,n,l,a,i){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||fl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&fl(e,""+l);break;case"className":yn(e,"class",l);break;case"tabIndex":yn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":yn(e,n,l);break;case"style":Ri(e,l,i);break;case"data":if(t!=="object"){yn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Ql(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Ye(e,t,"name",a.name,a,null),Ye(e,t,"formEncType",a.formEncType,a,null),Ye(e,t,"formMethod",a.formMethod,a,null),Ye(e,t,"formTarget",a.formTarget,a,null)):(Ye(e,t,"encType",a.encType,a,null),Ye(e,t,"method",a.method,a,null),Ye(e,t,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Ql(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=on);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=Ql(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":Te("beforetoggle",e),Te("toggle",e),wa(e,"popover",l);break;case"xlinkActuate":cn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":cn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":cn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":cn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":cn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":cn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":cn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":cn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":cn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":wa(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=dc.get(n)||n,wa(e,n,l))}}function Zo(e,t,n,l,a,i){switch(n){case"style":Ri(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof l=="string"?fl(e,l):(typeof l=="number"||typeof l=="bigint")&&fl(e,""+l);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"onClick":l!=null&&(e.onclick=on);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ar.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),i=e[mt]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,a),typeof l=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,a);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):wa(e,n,l)}}}function xt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var l=!1,a=!1,i;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ye(e,t,i,d,n,null)}}a&&Ye(e,t,"srcSet",n.srcSet,n,null),l&&Ye(e,t,"src",n.src,n,null);return;case"input":Te("invalid",e);var p=i=d=a=null,x=null,j=null;for(l in n)if(n.hasOwnProperty(l)){var B=n[l];if(B!=null)switch(l){case"name":a=B;break;case"type":d=B;break;case"checked":x=B;break;case"defaultChecked":j=B;break;case"value":i=B;break;case"defaultValue":p=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,t));break;default:Ye(e,t,l,B,n,null)}}wi(e,i,p,x,j,d,a,!1);return;case"select":Te("invalid",e),l=d=i=null;for(a in n)if(n.hasOwnProperty(a)&&(p=n[a],p!=null))switch(a){case"value":i=p;break;case"defaultValue":d=p;break;case"multiple":l=p;default:Ye(e,t,a,p,n,null)}t=i,n=d,e.multiple=!!l,t!=null?zn(e,!!l,t,!1):n!=null&&zn(e,!!l,n,!0);return;case"textarea":Te("invalid",e),i=a=l=null;for(d in n)if(n.hasOwnProperty(d)&&(p=n[d],p!=null))switch(d){case"value":l=p;break;case"defaultValue":a=p;break;case"children":i=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(s(91));break;default:Ye(e,t,d,p,n,null)}Ti(e,l,a,i);return;case"option":for(x in n)if(n.hasOwnProperty(x)&&(l=n[x],l!=null))switch(x){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ye(e,t,x,l,n,null)}return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(l=0;l<ur.length;l++)Te(ur[l],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in n)if(n.hasOwnProperty(j)&&(l=n[j],l!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ye(e,t,j,l,n,null)}return;default:if($l(t)){for(B in n)n.hasOwnProperty(B)&&(l=n[B],l!==void 0&&Zo(e,t,B,l,n,void 0));return}}for(p in n)n.hasOwnProperty(p)&&(l=n[p],l!=null&&Ye(e,t,p,l,n,null))}function M_(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,d=null,p=null,x=null,j=null,B=null;for(C in n){var V=n[C];if(n.hasOwnProperty(C)&&V!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":x=V;default:l.hasOwnProperty(C)||Ye(e,t,C,null,l,V)}}for(var A in l){var C=l[A];if(V=n[A],l.hasOwnProperty(A)&&(C!=null||V!=null))switch(A){case"type":i=C;break;case"name":a=C;break;case"checked":j=C;break;case"defaultChecked":B=C;break;case"value":d=C;break;case"defaultValue":p=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(137,t));break;default:C!==V&&Ye(e,t,A,C,l,V)}}et(e,d,p,x,j,B,i,a);return;case"select":C=d=p=A=null;for(i in n)if(x=n[i],n.hasOwnProperty(i)&&x!=null)switch(i){case"value":break;case"multiple":C=x;default:l.hasOwnProperty(i)||Ye(e,t,i,null,l,x)}for(a in l)if(i=l[a],x=n[a],l.hasOwnProperty(a)&&(i!=null||x!=null))switch(a){case"value":A=i;break;case"defaultValue":p=i;break;case"multiple":d=i;default:i!==x&&Ye(e,t,a,i,l,x)}t=p,n=d,l=C,A!=null?zn(e,!!n,A,!1):!!l!=!!n&&(t!=null?zn(e,!!n,t,!0):zn(e,!!n,n?[]:"",!1));return;case"textarea":C=A=null;for(p in n)if(a=n[p],n.hasOwnProperty(p)&&a!=null&&!l.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:Ye(e,t,p,null,l,a)}for(d in l)if(a=l[d],i=n[d],l.hasOwnProperty(d)&&(a!=null||i!=null))switch(d){case"value":A=a;break;case"defaultValue":C=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(s(91));break;default:a!==i&&Ye(e,t,d,a,l,i)}Ni(e,A,C);return;case"option":for(var ne in n)if(A=n[ne],n.hasOwnProperty(ne)&&A!=null&&!l.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Ye(e,t,ne,null,l,A)}for(x in l)if(A=l[x],C=n[x],l.hasOwnProperty(x)&&A!==C&&(A!=null||C!=null))switch(x){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:Ye(e,t,x,A,l,C)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in n)A=n[me],n.hasOwnProperty(me)&&A!=null&&!l.hasOwnProperty(me)&&Ye(e,t,me,null,l,A);for(j in l)if(A=l[j],C=n[j],l.hasOwnProperty(j)&&A!==C&&(A!=null||C!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(137,t));break;default:Ye(e,t,j,A,l,C)}return;default:if($l(t)){for(var qe in n)A=n[qe],n.hasOwnProperty(qe)&&A!==void 0&&!l.hasOwnProperty(qe)&&Zo(e,t,qe,void 0,l,A);for(B in l)A=l[B],C=n[B],!l.hasOwnProperty(B)||A===C||A===void 0&&C===void 0||Zo(e,t,B,A,l,C);return}}for(var T in n)A=n[T],n.hasOwnProperty(T)&&A!=null&&!l.hasOwnProperty(T)&&Ye(e,t,T,null,l,A);for(V in l)A=l[V],C=n[V],!l.hasOwnProperty(V)||A===C||A==null&&C==null||Ye(e,t,V,A,l,C)}function Lm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function R_(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var a=n[l],i=a.transferSize,d=a.initiatorType,p=a.duration;if(i&&p&&Lm(d)){for(d=0,p=a.responseEnd,l+=1;l<n.length;l++){var x=n[l],j=x.startTime;if(j>p)break;var B=x.transferSize,V=x.initiatorType;B&&Lm(V)&&(x=x.responseEnd,d+=B*(x<p?1:(p-j)/(x-j)))}if(--l,t+=8*(i+d)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Jo=null,Po=null;function js(e){return e.nodeType===9?e:e.ownerDocument}function Um(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Wo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var eu=null;function j_(){var e=window.event;return e&&e.type==="popstate"?e===eu?!1:(eu=e,!0):(eu=null,!1)}var Gm=typeof setTimeout=="function"?setTimeout:void 0,A_=typeof clearTimeout=="function"?clearTimeout:void 0,Vm=typeof Promise=="function"?Promise:void 0,k_=typeof queueMicrotask=="function"?queueMicrotask:typeof Vm<"u"?function(e){return Vm.resolve(null).then(e).catch(D_)}:Gm;function D_(e){setTimeout(function(){throw e})}function Dl(e){return e==="head"}function Ym(e,t){var n=t,l=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(a),ri(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")dr(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,dr(n);for(var i=n.firstChild;i;){var d=i.nextSibling,p=i.nodeName;i[Qt]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=d}}else n==="body"&&dr(e.ownerDocument.body);n=a}while(n);ri(t)}function qm(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function tu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":tu(n),Xl(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function O_(e,t,n,l){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Qt])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=tn(e.nextSibling),e===null)break}return null}function C_(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=tn(e.nextSibling),e===null))return null;return e}function Xm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=tn(e.nextSibling),e===null))return null;return e}function nu(e){return e.data==="$?"||e.data==="$~"}function lu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function z_(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var au=null;function Km(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return tn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function $m(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Qm(e,t,n){switch(t=js(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function dr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Xl(e)}var nn=new Map,Im=new Set;function As(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Pn=H.d;H.d={f:B_,r:L_,D:U_,C:H_,L:G_,m:V_,X:q_,S:Y_,M:X_};function B_(){var e=Pn.f(),t=xs();return e||t}function L_(e){var t=bn(e);t!==null&&t.tag===5&&t.type==="form"?fd(t):Pn.r(e)}var li=typeof document>"u"?null:document;function Fm(e,t,n){var l=li;if(l&&typeof t=="string"&&t){var a=lt(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Im.has(a)||(Im.add(a),e={rel:e,crossOrigin:n,href:t},l.querySelector(a)===null&&(t=l.createElement("link"),xt(t,"link",e),Pe(t),l.head.appendChild(t)))}}function U_(e){Pn.D(e),Fm("dns-prefetch",e,null)}function H_(e,t){Pn.C(e,t),Fm("preconnect",e,t)}function G_(e,t,n){Pn.L(e,t,n);var l=li;if(l&&e&&t){var a='link[rel="preload"][as="'+lt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+lt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+lt(n.imageSizes)+'"]')):a+='[href="'+lt(e)+'"]';var i=a;switch(t){case"style":i=ai(e);break;case"script":i=ii(e)}nn.has(i)||(e=M({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),nn.set(i,e),l.querySelector(a)!==null||t==="style"&&l.querySelector(mr(i))||t==="script"&&l.querySelector(hr(i))||(t=l.createElement("link"),xt(t,"link",e),Pe(t),l.head.appendChild(t)))}}function V_(e,t){Pn.m(e,t);var n=li;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+lt(l)+'"][href="'+lt(e)+'"]',i=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=ii(e)}if(!nn.has(i)&&(e=M({rel:"modulepreload",href:e},t),nn.set(i,e),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(hr(i)))return}l=n.createElement("link"),xt(l,"link",e),Pe(l),n.head.appendChild(l)}}}function Y_(e,t,n){Pn.S(e,t,n);var l=li;if(l&&e){var a=On(l).hoistableStyles,i=ai(e);t=t||"default";var d=a.get(i);if(!d){var p={loading:0,preload:null};if(d=l.querySelector(mr(i)))p.loading=5;else{e=M({rel:"stylesheet",href:e,"data-precedence":t},n),(n=nn.get(i))&&iu(e,n);var x=d=l.createElement("link");Pe(x),xt(x,"link",e),x._p=new Promise(function(j,B){x.onload=j,x.onerror=B}),x.addEventListener("load",function(){p.loading|=1}),x.addEventListener("error",function(){p.loading|=2}),p.loading|=4,ks(d,t,l)}d={type:"stylesheet",instance:d,count:1,state:p},a.set(i,d)}}}function q_(e,t){Pn.X(e,t);var n=li;if(n&&e){var l=On(n).hoistableScripts,a=ii(e),i=l.get(a);i||(i=n.querySelector(hr(a)),i||(e=M({src:e,async:!0},t),(t=nn.get(a))&&ru(e,t),i=n.createElement("script"),Pe(i),xt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function X_(e,t){Pn.M(e,t);var n=li;if(n&&e){var l=On(n).hoistableScripts,a=ii(e),i=l.get(a);i||(i=n.querySelector(hr(a)),i||(e=M({src:e,async:!0,type:"module"},t),(t=nn.get(a))&&ru(e,t),i=n.createElement("script"),Pe(i),xt(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function Zm(e,t,n,l){var a=(a=F.current)?As(a):null;if(!a)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ai(n.href),n=On(a).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ai(n.href);var i=On(a).hoistableStyles,d=i.get(e);if(d||(a=a.ownerDocument||a,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,d),(i=a.querySelector(mr(e)))&&!i._p&&(d.instance=i,d.state.loading=5),nn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},nn.set(e,n),i||K_(a,e,n,d.state))),t&&l===null)throw Error(s(528,""));return d}if(t&&l!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ii(n),n=On(a).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ai(e){return'href="'+lt(e)+'"'}function mr(e){return'link[rel="stylesheet"]['+e+"]"}function Jm(e){return M({},e,{"data-precedence":e.precedence,precedence:null})}function K_(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),xt(t,"link",n),Pe(t),e.head.appendChild(t))}function ii(e){return'[src="'+lt(e)+'"]'}function hr(e){return"script[async]"+e}function Pm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+lt(n.href)+'"]');if(l)return t.instance=l,Pe(l),l;var a=M({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Pe(l),xt(l,"style",a),ks(l,n.precedence,e),t.instance=l;case"stylesheet":a=ai(n.href);var i=e.querySelector(mr(a));if(i)return t.state.loading|=4,t.instance=i,Pe(i),i;l=Jm(n),(a=nn.get(a))&&iu(l,a),i=(e.ownerDocument||e).createElement("link"),Pe(i);var d=i;return d._p=new Promise(function(p,x){d.onload=p,d.onerror=x}),xt(i,"link",l),t.state.loading|=4,ks(i,n.precedence,e),t.instance=i;case"script":return i=ii(n.src),(a=e.querySelector(hr(i)))?(t.instance=a,Pe(a),a):(l=n,(a=nn.get(i))&&(l=M({},n),ru(l,a)),e=e.ownerDocument||e,a=e.createElement("script"),Pe(a),xt(a,"link",l),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,ks(l,n.precedence,e));return t.instance}function ks(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,i=a,d=0;d<l.length;d++){var p=l[d];if(p.dataset.precedence===t)i=p;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function iu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ru(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ds=null;function Wm(e,t,n){if(Ds===null){var l=new Map,a=Ds=new Map;a.set(n,l)}else a=Ds,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var i=n[a];if(!(i[Qt]||i[ie]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var d=i.getAttribute(t)||"";d=e+d;var p=l.get(d);p?p.push(i):l.set(d,[i])}}return l}function eh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function $_(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function th(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Q_(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=ai(l.href),i=t.querySelector(mr(a));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Os.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,Pe(i);return}i=t.ownerDocument||t,l=Jm(l),(a=nn.get(a))&&iu(l,a),i=i.createElement("link"),Pe(i);var d=i;d._p=new Promise(function(p,x){d.onload=p,d.onerror=x}),xt(i,"link",l),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Os.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var su=0;function I_(e,t){return e.stylesheets&&e.count===0&&zs(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&zs(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&su===0&&(su=62500*R_());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&zs(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>su?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function Os(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)zs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Cs=null;function zs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Cs=new Map,t.forEach(F_,e),Cs=null,Os.call(e))}function F_(e,t){if(!(t.state.loading&4)){var n=Cs.get(e);if(n)var l=n.get(null);else{n=new Map,Cs.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var d=a[i];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),l=d)}l&&n.set(null,l)}a=t.instance,d=a.getAttribute("data-precedence"),i=n.get(d)||l,i===l&&n.set(null,a),n.set(d,a),this.count++,l=Os.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),i?i.parentNode.insertBefore(a,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var pr={$$typeof:ce,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function Z_(e,t,n,l,a,i,d,p,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dn(0),this.hiddenUpdates=Dn(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function nh(e,t,n,l,a,i,d,p,x,j,B,V){return e=new Z_(e,t,n,d,x,j,B,V,p),t=1,i===!0&&(t|=24),i=Lt(3,null,null,t),e.current=i,i.stateNode=e,t=Hc(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:n,cache:t},qc(i),e}function lh(e){return e?(e=Ba,e):Ba}function ah(e,t,n,l,a,i){a=lh(a),l.context===null?l.context=a:l.pendingContext=a,l=xl(t),l.payload={element:n},i=i===void 0?null:i,i!==null&&(l.callback=i),n=Sl(e,l,t),n!==null&&(Ct(n,e,t),Qi(n,e,t))}function ih(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cu(e,t){ih(e,t),(e=e.alternate)&&ih(e,t)}function rh(e){if(e.tag===13||e.tag===31){var t=ea(e,67108864);t!==null&&Ct(t,e,67108864),cu(e,67108864)}}function sh(e){if(e.tag===13||e.tag===31){var t=Yt();t=_n(t);var n=ea(e,t);n!==null&&Ct(n,e,t),cu(e,t)}}var Bs=!0;function J_(e,t,n,l){var a=O.T;O.T=null;var i=H.p;try{H.p=2,ou(e,t,n,l)}finally{H.p=i,O.T=a}}function P_(e,t,n,l){var a=O.T;O.T=null;var i=H.p;try{H.p=8,ou(e,t,n,l)}finally{H.p=i,O.T=a}}function ou(e,t,n,l){if(Bs){var a=uu(l);if(a===null)Fo(e,t,l,Ls,n),oh(e,l);else if(eg(a,e,t,n,l))l.stopPropagation();else if(oh(e,l),t&4&&-1<W_.indexOf(e)){for(;a!==null;){var i=bn(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var d=zt(i.pendingLanes);if(d!==0){var p=i;for(p.pendingLanes|=2,p.entangledLanes|=2;d;){var x=1<<31-rt(d);p.entanglements[1]|=x,d&=~x}Tn(i),(ze&6)===0&&(ys=Nt()+500,or(0))}}break;case 31:case 13:p=ea(i,2),p!==null&&Ct(p,i,2),xs(),cu(i,2)}if(i=uu(l),i===null&&Fo(e,t,l,Ls,n),i===a)break;a=i}a!==null&&l.stopPropagation()}else Fo(e,t,l,null,n)}}function uu(e){return e=Ai(e),fu(e)}var Ls=null;function fu(e){if(Ls=null,e=Q(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=_(t),e!==null)return e;e=null}else if(n===31){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ls=e,null}function ch(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ya()){case gi:return 2;case bi:return 8;case Yl:case Rn:return 32;case jn:return 268435456;default:return 32}default:return 32}}var du=!1,Ol=null,Cl=null,zl=null,_r=new Map,gr=new Map,Bl=[],W_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function oh(e,t){switch(e){case"focusin":case"focusout":Ol=null;break;case"dragenter":case"dragleave":Cl=null;break;case"mouseover":case"mouseout":zl=null;break;case"pointerover":case"pointerout":_r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gr.delete(t.pointerId)}}function br(e,t,n,l,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:i,targetContainers:[a]},t!==null&&(t=bn(t),t!==null&&rh(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function eg(e,t,n,l,a){switch(t){case"focusin":return Ol=br(Ol,e,t,n,l,a),!0;case"dragenter":return Cl=br(Cl,e,t,n,l,a),!0;case"mouseover":return zl=br(zl,e,t,n,l,a),!0;case"pointerover":var i=a.pointerId;return _r.set(i,br(_r.get(i)||null,e,t,n,l,a)),!0;case"gotpointercapture":return i=a.pointerId,gr.set(i,br(gr.get(i)||null,e,t,n,l,a)),!0}return!1}function uh(e){var t=Q(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=_(n),t!==null){e.blockedOn=t,sl(e.priority,function(){sh(n)});return}}else if(t===31){if(t=g(n),t!==null){e.blockedOn=t,sl(e.priority,function(){sh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Us(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=uu(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);ji=l,n.target.dispatchEvent(l),ji=null}else return t=bn(n),t!==null&&rh(t),e.blockedOn=n,!1;t.shift()}return!0}function fh(e,t,n){Us(e)&&n.delete(t)}function tg(){du=!1,Ol!==null&&Us(Ol)&&(Ol=null),Cl!==null&&Us(Cl)&&(Cl=null),zl!==null&&Us(zl)&&(zl=null),_r.forEach(fh),gr.forEach(fh)}function Hs(e,t){e.blockedOn===t&&(e.blockedOn=null,du||(du=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,tg)))}var Gs=null;function dh(e){Gs!==e&&(Gs=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){Gs===e&&(Gs=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],a=e[t+2];if(typeof l!="function"){if(fu(l||n)===null)continue;break}var i=bn(n);i!==null&&(e.splice(t,3),t-=3,oo(i,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function ri(e){function t(x){return Hs(x,e)}Ol!==null&&Hs(Ol,e),Cl!==null&&Hs(Cl,e),zl!==null&&Hs(zl,e),_r.forEach(t),gr.forEach(t);for(var n=0;n<Bl.length;n++){var l=Bl[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Bl.length&&(n=Bl[0],n.blockedOn===null);)uh(n),n.blockedOn===null&&Bl.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],i=n[l+1],d=a[mt]||null;if(typeof i=="function")d||dh(n);else if(d){var p=null;if(i&&i.hasAttribute("formAction")){if(a=i,d=i[mt]||null)p=d.formAction;else if(fu(a)!==null)continue}else p=d.action;typeof p=="function"?n[l+1]=p:(n.splice(l,3),l-=3),dh(n)}}}function mh(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(d){return a=d})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function mu(e){this._internalRoot=e}Vs.prototype.render=mu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,l=Yt();ah(n,l,e,t,null,null)},Vs.prototype.unmount=mu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ah(e.current,2,null,e,null,null),xs(),t[cl]=null}};function Vs(e){this._internalRoot=e}Vs.prototype.unstable_scheduleHydration=function(e){if(e){var t=vi();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bl.length&&t!==0&&t<Bl[n].priority;n++);Bl.splice(n,0,e),n===0&&uh(e)}};var hh=r.version;if(hh!=="19.2.7")throw Error(s(527,hh,"19.2.7"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=b(t),e=e!==null?E(e):null,e=e===null?null:e.stateNode,e};var ng={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ys=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ys.isDisabled&&Ys.supportsFiber)try{St=Ys.inject(ng),Be=Ys}catch{}}return vr.createRoot=function(e,t){if(!o(e))throw Error(s(299));var n=!1,l="",a=xd,i=Sd,d=Ed;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=nh(e,1,!1,null,null,n,l,null,a,i,d,mh),e[cl]=t.current,Io(e),new mu(t)},vr.hydrateRoot=function(e,t,n){if(!o(e))throw Error(s(299));var l=!1,a="",i=xd,d=Sd,p=Ed,x=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError),n.formState!==void 0&&(x=n.formState)),t=nh(e,1,!0,t,n??null,l,a,x,i,d,p,mh),t.context=lh(null),n=t.current,l=Yt(),l=_n(l),a=xl(l),a.callback=null,Sl(n,a,l),n=l,t.current.lanes=n,$t(t,n),Tn(t),e[cl]=t.current,Io(e),new Vs(t)},vr.version="19.2.7",vr}var wh;function hg(){if(wh)return _u.exports;wh=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(r){console.error(r)}}return c(),_u.exports=mg(),_u.exports}var pg=hg();const _g=sp(pg),Nh=c=>{let r;const f=new Set,s=(b,E)=>{const M=typeof b=="function"?b(r):b;if(!Object.is(M,r)){const D=r;r=E??(typeof M!="object"||M===null)?M:Object.assign({},r,M),f.forEach(I=>I(r,D))}},o=()=>r,g={setState:s,getState:o,getInitialState:()=>v,subscribe:b=>(f.add(b),()=>f.delete(b))},v=r=c(s,o,g);return g},gg=(c=>c?Nh(c):Nh),bg=c=>c;function yg(c,r=bg){const f=Nr.useSyncExternalStore(c.subscribe,Nr.useCallback(()=>r(c.getState()),[c,r]),Nr.useCallback(()=>r(c.getInitialState()),[c,r]));return Nr.useDebugValue(f),f}const Th=c=>{const r=gg(c),f=s=>yg(r,s);return Object.assign(f,r),f},vg=(c=>c?Th(c):Th);function xg(){const c=new Uint8Array(16);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(c);else for(let f=0;f<c.length;f+=1)c[f]=Math.floor(Math.random()*256);let r="";for(const f of c)r+=f.toString(16).padStart(2,"0");return r}const zu="pkp.user",Bu="pkp.savedDevices",Lu="pkp.ideDrafts",Uu="pkp.ideSettings",Mr="Prototype Version 0.6.7";function Ws(c){try{const r=localStorage.getItem(c);return r?JSON.parse(r):null}catch{return null}}function ec(c,r){try{localStorage.setItem(c,JSON.stringify(r))}catch{}}function Sg(){const c=Ws(zu);return c&&typeof c.username=="string"&&typeof c.userID=="string"?c:null}function Mh(c){ec(zu,c)}function Hu(){return Ws(Bu)??[]}function tc(c){ec(Bu,c)}function Eg(){tc([])}function wg(){try{localStorage.removeItem(zu),localStorage.removeItem(Bu),localStorage.removeItem(Lu),localStorage.removeItem(Uu)}catch{}}function vu(){var c;return((c=Ws(Lu))==null?void 0:c.filter(r=>r.path&&typeof r.content=="string"))??[]}function xu(c){ec(Lu,c)}function Rh(){const c=Ws(Uu)??{};return{clearTerminalOnRun:!!c.clearTerminalOnRun,simplifiedErrors:c.simplifiedErrors!==!1}}function Ng(c){ec(Uu,c)}function Su(c){const r=Hu(),f=r.findIndex(s=>s.deviceID===c.deviceID);return f>=0?r[f]=c:r.push(c),tc(r),r}function Tg(c){const r=Hu().filter(f=>f.deviceID!==c);return tc(r),r}const Au="b8e06067-62ad-41ba-9231-206ae80ab551",Mg="f897177b-aee8-4767-8ecc-cc694fd5fce0",Rg="f897177b-aee8-4767-8ecc-cc694fd5fce1",Eu=20,jg=12,Ag=new TextEncoder,kg=new TextDecoder;function Dg(c){return new Promise(r=>setTimeout(r,c))}function nc(){return typeof navigator<"u"&&"bluetooth"in navigator}function ku(c){return c?c.startsWith("PicoW-")?c.slice(6):c:"Pico"}async function Og(){if(!nc())throw new Error("Web Bluetooth er ikke tilgængelig i denne browser.");return navigator.bluetooth.requestDevice({filters:[{services:[Au]},{namePrefix:"PicoW-"}],optionalServices:[Au]})}async function cp(){if(!nc()||!navigator.bluetooth.getDevices)return[];try{return await navigator.bluetooth.getDevices()}catch{return[]}}class Cg{constructor(){de(this,"device",null);de(this,"writeChar",null);de(this,"notifyChar",null);de(this,"buffer","");de(this,"writeQueue",Promise.resolve());de(this,"disconnectNotified",!1);de(this,"onLine",()=>{});de(this,"onDisconnect",()=>{});de(this,"handleNotification",r=>{const f=r.target;if(!(f!=null&&f.value))return;this.buffer+=kg.decode(f.value.buffer);let s=this.buffer.indexOf(`
`);for(;s>=0;){const o=this.buffer.slice(0,s).trim();this.buffer=this.buffer.slice(s+1),o&&this.onLine(o),s=this.buffer.indexOf(`
`)}});de(this,"handleDisconnected",()=>{var r;this.disconnectNotified||(this.disconnectNotified=!0,(r=this.device)==null||r.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.writeChar=null,this.notifyChar=null,this.onDisconnect())})}get connected(){var r,f;return!!((f=(r=this.device)==null?void 0:r.gatt)!=null&&f.connected)}async connect(r){var o;this.device&&this.device!==r&&this.device.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.device=r,this.buffer="",this.disconnectNotified=!1,r.removeEventListener("gattserverdisconnected",this.handleDisconnected),r.addEventListener("gattserverdisconnected",this.handleDisconnected);const f=await((o=r.gatt)==null?void 0:o.connect());if(!f)throw new Error("Kunne ikke åbne Bluetooth-forbindelsen.");const s=await f.getPrimaryService(Au);this.writeChar=await s.getCharacteristic(Mg),this.notifyChar=await s.getCharacteristic(Rg),await this.notifyChar.startNotifications(),this.notifyChar.addEventListener("characteristicvaluechanged",this.handleNotification)}writeLine(r){const f=this.writeQueue.then(()=>this.doWrite(r));return this.writeQueue=f.catch(()=>{}),f}async doWrite(r){if(!this.writeChar)throw new Error("Ingen forbindelse.");const f=Ag.encode(`${r}
`),o=this.writeChar.properties.writeWithoutResponse&&typeof this.writeChar.writeValueWithoutResponse=="function"?this.writeChar.writeValueWithoutResponse.bind(this.writeChar):this.writeChar.writeValue.bind(this.writeChar);for(let m=0;m<f.length;m+=Eu){const _=f.slice(m,m+Eu);await o(_),m+Eu<f.length&&await Dg(jg)}}disconnect(){var f;const r=this.device;(f=r==null?void 0:r.gatt)!=null&&f.connected?r.gatt.disconnect():this.handleDisconnected()}}class zg{constructor(r,f){de(this,"send");de(this,"onMessage");de(this,"inActive",!1);de(this,"inExpectedTotal",0);de(this,"inStreamId",0);de(this,"inParts",new Map);de(this,"inProgress",null);de(this,"outPendingLines",null);de(this,"outWaitingAck",!1);de(this,"outStreamId",0);de(this,"outNextStreamId",1);de(this,"outCache",new Map);de(this,"outProgress",null);this.send=r,this.onMessage=f}reset(){this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear(),this.inProgress=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outStreamId=0,this.outCache.clear(),this.outProgress=null}handleLine(r){var s;if(r.startsWith("prep,")){const o=r.split(","),m=o.length>=2&&/^\d+$/.test(o[1])?parseInt(o[1],10):null,_=o.length>=3&&/^\d+$/.test(o[2])?parseInt(o[2],10):0;m!==null&&m>0&&(this.inActive=!0,this.inExpectedTotal=m,this.inStreamId=_,this.inParts.clear(),this.send(_>0?`ack:prep,${_}`:"ack:prep"));return}if(r==="ack:prep"||r===`ack:prep,${this.outStreamId}`){this.flushOutbound();return}if(r.startsWith("miss,")){const o=r.split(",");if(o.length>=3&&/^\d+$/.test(o[1])&&/^\d+$/.test(o[2])){const m=parseInt(o[1],10),_=parseInt(o[2],10),g=this.outCache.get(_);m===this.outStreamId&&g&&this.send(g)}return}const f=this.parseNumbered(r);if(f){const{idx:o,payload:m}=f;if(!this.inActive){this.onMessage(m);return}this.inParts.has(o)||(this.inParts.set(o,m),(s=this.inProgress)==null||s.call(this,this.inParts.size,this.inExpectedTotal));let _=0;for(let g=1;g<=this.inExpectedTotal;g+=1)if(!this.inParts.has(g)){_=g;break}if(_>0&&this.inStreamId>0&&o>_&&this.send(`miss,${this.inStreamId},${_}`),this.inParts.size>=this.inExpectedTotal){for(let g=1;g<=this.inExpectedTotal;g+=1){const v=this.inParts.get(g);v!==void 0&&this.onMessage(v)}this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear()}return}this.onMessage(r)}setInboundProgress(r){this.inProgress=r}async sendReliable(r,f){const s=r.length===0?[""]:r;this.outPendingLines=[...s],this.outWaitingAck=!0,this.outProgress=f??null,this.outStreamId=this.outNextStreamId,this.outNextStreamId+=1,this.outCache.clear(),await this.send(`prep,${s.length},${this.outStreamId}`)}async flushOutbound(){var f;if(!this.outWaitingAck||this.outPendingLines===null){this.outWaitingAck=!1,this.outProgress=null;return}const r=this.outPendingLines.length;for(let s=0;s<r;s+=1){const o=this.outPendingLines[s],m=`${s+1}-${o}`;this.outCache.set(s+1,m),await this.send(m),(f=this.outProgress)==null||f.call(this,s+1,r,o)}this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null}parseNumbered(r){const f=r.indexOf("-");if(f<=0)return null;const s=r.slice(0,f);if(!/^\d+$/.test(s))return null;const o=parseInt(s,10);return o<1?null:{idx:o,payload:r.slice(f+1)}}}const fi=11,Rr=31,Bg=2,Lg=60,ci=4,oi=40;function Ug(c,r){return Math.max(14,Math.min(56,Math.min(c,r)*.05))}function op(c,r,f=fi,s=Rr){const o=Ug(c,r),m=Math.max(1,c-2*o),_=Math.max(1,r-2*o);return{areaW:c,areaH:r,cols:f,rows:s,margin:o,stepX:m/Math.max(1,f-1),stepY:_/Math.max(1,s-1)}}function up(c,r){return r.margin+c/2*r.stepX}function fp(c,r){const f=r.margin+c/2*r.stepY;return r.areaH-f}function Tr(c,r){return c.centerX2===null||c.centerY2===null||c.spanX===null||c.spanY===null?null:{cx:up(c.centerX2,r),cy:fp(c.centerY2,r),width:c.spanX*r.stepX,height:c.spanY*r.stepY}}function Hg(c){const r=[];for(let f=0;f<c.cols;f+=1)for(let s=0;s<c.rows;s+=1)r.push({x:c.margin+f*c.stepX,y:c.areaH-(c.margin+s*c.stepY)});return r}function $s(c,r,f,s,o){const m=(v,b,E,M)=>{const D=b%2,I=M*2;let Z=D,le=1/0;for(let L=D;L<=I;L+=2){const U=Math.abs(E(L)-v);U<le&&(le=U,Z=L)}return Math.max(b,Math.min(I-b,Z))},_=m(c,f,v=>up(v,o),o.cols-1),g=m(r,s,v=>fp(v,o),o.rows-1);return{centerX2:_,centerY2:g}}const pa=6e3,Gg=15,Fs=[32,64,128,192],Vg=pa*4,Yg=3500,qg=8e3,Xg=2,Kg=pa,$g=pa*8;function wu(c){return new Promise(r=>setTimeout(r,c))}function si(c){if(c!=null&&c.aborted)throw new DOMException("BLE file read cancelled","AbortError")}function jh(c){return c instanceof DOMException&&c.name==="AbortError"}function Ul(c){return c.replace(/[\r\n,]/g," ").trim()}class Qg{constructor(r={}){de(this,"transport",new Cg);de(this,"stream");de(this,"events");de(this,"waiters",[]);de(this,"collectingLayout",!1);de(this,"layoutBuffer",[]);de(this,"layoutResolve",null);de(this,"collectingLines",!1);de(this,"lineBuffer",[]);de(this,"lineResolve",null);de(this,"lineReject",null);de(this,"lineCollectId",0);de(this,"controlPumpActive",!1);de(this,"pendingButtons",[]);de(this,"pendingSliders",new Map);de(this,"pendingToggles",new Map);de(this,"expectingDisconnect",!1);de(this,"busy",!1);de(this,"fsCapabilities",null);this.events=r,this.stream=new zg(f=>this.transport.writeLine(f),f=>this.onDeviceMessage(f)),this.transport.onLine=f=>this.stream.handleLine(f),this.transport.onDisconnect=()=>this.handleDisconnect()}get device(){return this.transport.device}get deviceName(){var r;return ku((r=this.transport.device)==null?void 0:r.name)}get connected(){return this.transport.connected}setBusy(r){if(this.busy=r,r){this.pendingButtons=[],this.pendingSliders.clear(),this.pendingToggles.clear();return}this.pumpControls()}log(r,f){var s,o;(o=(s=this.events).onLog)==null||o.call(s,r,f)}progress(r,f){var s,o;(o=(s=this.events).onProgress)==null||o.call(s,r,f)}onDeviceMessage(r){var s,o;if(r==="disconnect"){this.log("warning","Enheden afbrød forbindelsen."),this.expectingDisconnect=!0,this.transport.disconnect();return}if(this.collectingLines){if(r==="__END__"){const m=this.lineBuffer;this.lineBuffer=[],this.collectingLines=!1,(s=this.lineResolve)==null||s.call(this,m),this.lineResolve=null;return}this.lineBuffer.push(r);return}if(this.collectingLayout){if(r==="__END__"){const m=this.layoutBuffer;this.layoutBuffer=[],this.collectingLayout=!1,(o=this.layoutResolve)==null||o.call(this,m),this.layoutResolve=null;return}!r.startsWith("ACK")&&!r.startsWith("ERR")&&!r.startsWith("#VERSION")?this.layoutBuffer.push(r):r.startsWith("#VERSION")&&this.layoutBuffer.push(r);return}r.startsWith("ERR")?this.log("error",r):r.startsWith("radar,")?this.handleRadarLine(r):r.startsWith("text,")?this.handleTextLine(r):r.startsWith("toggle_state,")?this.handleToggleStateLine(r):r.startsWith("ACK")||r==="LAYOUT_SAVED"||r.startsWith("READY")?this.log("success",r):this.log("info",`rx: ${r}`);const f=this.waiters.findIndex(m=>m.match(r));if(f>=0){const m=this.waiters[f];this.waiters.splice(f,1),clearTimeout(m.timer),m.resolve(r)}}waitFor(r,f,s){return new Promise((o,m)=>{const _=setTimeout(()=>{const g=this.waiters.findIndex(v=>v.timer===_);g>=0&&this.waiters.splice(g,1),m(new Error(`Timeout: ${s}`))},f);this.waiters.push({match:r,resolve:o,reject:m,timer:_})})}async collectLines(r,f,s,o,m){si(o);const _=this.lineCollectId+1;this.lineCollectId=_,this.collectingLines=!0,this.lineBuffer=[],this.stream.setInboundProgress(m??null);const g=new Promise((v,b)=>{let E=!1;const M=()=>this.lineCollectId===_,D=()=>{E=!0,M()&&(this.lineReject=null,this.stream.setInboundProgress(null)),o==null||o.removeEventListener("abort",Z)},I=U=>{E||(clearTimeout(le),M()&&(this.collectingLines=!1,this.lineBuffer=[],this.lineResolve=null),D(),b(U))},Z=()=>{I(new DOMException("BLE file read cancelled","AbortError"))},le=setTimeout(()=>{M()&&I(new Error(`Timeout: ${s}`))},f);this.lineResolve=v,this.lineReject=I;const L=this.lineResolve;this.lineResolve=U=>{M()&&(clearTimeout(le),D(),L==null||L(U))},o==null||o.addEventListener("abort",Z,{once:!0})});return await this.transport.writeLine(r),g}async exchange(r,f,s,o=3){let m;for(let _=1;_<=o;_+=1)try{return await this.transport.writeLine(r),await this.waitFor(f,pa,s)}catch(g){m=g,this.log("warning",`${s}: forsøg ${_}/${o} mislykkedes`)}throw m instanceof Error?m:new Error(`Failed: ${s}`)}async connect(r){this.expectingDisconnect=!1,this.stream.reset(),this.progress(5,"Forbinder til Bluetooth..."),await this.transport.connect(r)}async runHandshake(r){var le;await wu(350),this.progress(18,"Klargør forbindelse..."),this.progress(26,"Sender HELLO..."),await this.exchange("HELLO",L=>L==="ACK:HELLO","HELLO"),this.progress(34,"Forbindelse bekræftet"),this.progress(44,"Spørger om ejerskab...");const f=await this.exchange("who_are_you",L=>L==="unowned"||L.startsWith("owned,"),"who_are_you");if(this.progress(56,"Ejerskab modtaget"),f==="unowned")return{kind:"unowned"};const s=f.split(","),o=s[1]??"",m=s[2]!==void 0&&parseInt(s[2],10)||0,_=s[3]!==void 0?parseInt(s[3],10)===1:!0,g=s[4]!==void 0?parseInt(s[4],10)===1:!1,v=((le=s[5])==null?void 0:le.trim())||void 0;await this.exchange("ACK:ownership",L=>L==="READY:permission","ACK:ownership",1),this.progress(66,"Anmoder om adgang...");const b=await this.exchange(`request_permission,${r.userID},${Ul(r.username)}`,L=>L.startsWith("perm,"),"request_permission");this.progress(76,"Adgang vurderet");const E=b.split(",").filter(L=>/^\d+$/.test(L)),M=E.length>=1?parseInt(E[E.length-2]??"0",10):0,D=E.length>=1?parseInt(E[E.length-1]??"0",10):0;if(M===0)return this.expectingDisconnect=!0,{kind:"denied"};const I=r.userID===o,Z=D===1||I;return await this.transport.writeLine("ACK:permission"),{kind:"owned",ownerID:o,ownerName:v,iconID:m,canEdit:Z,isOwnedByMe:I,canOthersConnect:_,canOthersEdit:g}}async create(r,f,s,o,m,_){const g=s?1:0,v=s&&o?1:0;await this.exchange(`create,${r.userID},${Ul(r.username)},${f},${g},${v},${m},${_}`,b=>b==="ACK:create","create")}async updateDeviceSettings(r,f,s,o,m,_){const g=f?1:0,v=f&&s?1:0;await this.exchange(`settings_update,${r},${g},${v},${o},${m},${Ul(_??"")}`,b=>b==="ACK:settings_update","settings_update",3)}async requestLayout(){this.progress(84,"Henter kontrolpanel..."),this.collectingLayout=!0,this.layoutBuffer=[];const r=new Promise((s,o)=>{this.layoutResolve=s;const m=setTimeout(()=>{this.collectingLayout&&(this.collectingLayout=!1,this.layoutResolve=null,o(new Error("Timeout: layout")))},pa*2),_=this.layoutResolve;this.layoutResolve=g=>{clearTimeout(m),_==null||_(g)}});await this.transport.writeLine("request"),this.progress(92,"Modtager kontrolpanel...");const f=await r;return this.progress(100,"Klar"),f}async saveLayout(r){await this.exchange("update",o=>o==="ACK:update","update",3).catch(()=>{this.log("warning","ACK:update udeblev (fortsætter).")});const f=r.map(o=>{const m=g=>g===null?"n":String(g),_=`update,${o.type},${o.name},${m(o.centerX2)},${m(o.centerY2)},${m(o.spanX)},${m(o.spanY)},${o.rotation}`;return o.type==="slider"?`${_},${o.sliderMin??0},${o.sliderMax??100},${o.sliderRecenter??"none"}`:o.type==="toggle"?`${_},${o.toggleInitial?1:0}`:o.type==="radar"?[_,o.radarMinAngle??0,o.radarMaxAngle??180,o.radarMaxDistance??200,o.radarFadeMs??1200].join(","):_});f.push("__END__");const s=this.waitFor(o=>o==="LAYOUT_SAVED",pa*2,"LAYOUT_SAVED");await this.stream.sendReliable(f),await s}async listFiles(r="/"){return(await this.collectLines(`fs_list,${Ul(r)}`,pa*3,"fs_list")).filter(s=>s.startsWith("fs_entry,")).map(s=>{const[,o,m,_]=s.split(","),g=o==="file"||o==="dir"?o:"unknown",v=parseInt(_??"",10),b=m||"/";return{name:b.split("/").filter(Boolean).pop()??b,path:b,type:g,...Number.isFinite(v)&&v>=0?{size:v}:{}}})}handleRadarLine(r){var _,g,v;const f=r.split(",");if(f.length<4)return;const s=(_=f[1])==null?void 0:_.trim(),o=parseFloat(f[2]??""),m=parseFloat(f[3]??"");!s||!Number.isFinite(o)||!Number.isFinite(m)||((v=(g=this.events).onRadar)==null||v.call(g,s,o,m),this.log("info",`rx: ${r}`))}handleTextLine(r){var g,v;const f=r.indexOf(","),s=f>=0?r.indexOf(",",f+1):-1;if(f<0||s<0)return;const o=r.slice(f+1,s),m=r.slice(s+1),_=o==null?void 0:o.trim();_&&((v=(g=this.events).onText)==null||v.call(g,_,m),this.log("info",`rx: ${r}`))}handleToggleStateLine(r){var m,_,g;const f=r.split(",");if(f.length<3)return;const s=(m=f[1])==null?void 0:m.trim(),o=parseInt(f[2]??"",10);!s||!Number.isFinite(o)||((g=(_=this.events).onToggleState)==null||g.call(_,s,o===1),this.log("info",`rx: ${r}`))}async readText(r,f,s){f==null||f(4,"Validerer Picoens Bluetooth-filsystem...");const o=await this.getFilesystemCapabilities(s);if(o.streamRead)try{return await this.readTextStream(r,o,f,s)}catch(m){if(s!=null&&s.aborted||jh(m)||!o.pageRead)throw m;this.log("warning",m instanceof Error?`fs_read_stream fejlede; bruger paged read: ${m.message}`:"fs_read_stream fejlede; bruger paged read")}return this.readTextPaged(r,f,s)}async getFilesystemCapabilities(r){if(this.fsCapabilities)return this.fsCapabilities;const f=await this.collectLines("fs_capabilities",Kg,"fs_capabilities",r),s=f.find(E=>E.startsWith("ERR"));if(s)throw new Error(s);const o=f.find(E=>E.startsWith("fs_capabilities,"));if(!o)throw new Error("Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.");const m=o.split(","),_=new Map;for(let E=1;E<m.length-1;E+=2)_.set(m[E],m[E+1]);const g=parseInt(_.get("max_page")??"",10),v=parseInt(_.get("stream_chunk")??"",10),b={version:_.get("version")||void 0,pageRead:_.get("page_read")==="1",maxPageSize:Number.isFinite(g)&&g>0?g:32,streamRead:_.get("stream_read")==="1",streamChunkSize:Number.isFinite(v)&&v>0?v:128};if(!b.pageRead&&!b.streamRead)throw new Error("Picoens Bluetooth-runtime meldte, at file-read ikke er understøttet.");return this.fsCapabilities=b,b}async readTextPaged(r,f,s){const o=await this.getFilesystemCapabilities(s);let m=0,_=Ig(o.maxPageSize),g=0,v=null,b="";const E=`Indlæser ${Ah(r)}...`;si(s),f==null||f(5,E);for(let M=0;M<512;M+=1){si(s),g===0&&(f==null||f(7,E));const I=await this.readPageWithRetry(r,g,m,_,s),Z=I.lines;m=I.nextPageSizeIndex,_=I.maxPageSizeIndex,si(s);const le=Z.find(P=>P.startsWith("ERR"));if(le)throw new Error(le);const L=Z.find(P=>P.startsWith("fs_page,"));if(!L)throw new Error("ERR: fs_read_page missing data");const[,U,pe,ce,Ee=""]=L.split(",",5);if(U!==r)throw new Error("ERR: fs_read_page stale data");const ue=parseInt(pe??"",10),we=parseInt(ce??"",10);if(!Number.isFinite(ue)||ue!==g||!Number.isFinite(we))throw new Error("ERR: fs_read_page invalid data");v=we,b+=Ee,g+=Math.floor(Ee.length/2);const ee=v>0?8+Math.min(87,Math.round(g/v*87)):95;if(f==null||f(ee,E),g>=v||Ee.length===0)return f==null||f(100,"Fil indlæst fra Pico"),new TextDecoder().decode(kh(b))}throw new Error("ERR: fs_read_page too many pages")}async readPageWithRetry(r,f,s,o,m){let _,g=Math.min(s,o);for(;g>=0;){const v=Fs[g],b=g===0?Xg:1,E=g===0?qg:Yg;for(let M=1;M<=b;M+=1){si(m);try{return{lines:await this.collectLines(`fs_read_page,${Ul(r)},${f},${v}`,E,`fs_read_page ${f}`,m),nextPageSizeIndex:Math.min(g+1,o),maxPageSizeIndex:o}}catch(D){if(m!=null&&m.aborted||jh(D))throw D;if(_=D,M<b||g>0){const Z=g>0&&M>=b?Fs[g-1]:v;this.log("warning",`fs_read_page ${f} (${v} bytes) fejlede; prøver ${Z} bytes`),await wu(80+M*80)}}}if(g===0)break;o=Math.max(0,g-1),g=o}throw _ instanceof Error?_:new Error(`Timeout: fs_read_page ${f}`)}async readTextStream(r,f,s,o){const m=`Indlæser ${Ah(r)}...`,_=Math.max(16,Math.min(192,f.streamChunkSize||128));s==null||s(5,m);const g=await this.collectLines(`fs_read_stream,${Ul(r)},${_}`,$g,`fs_read_stream ${r}`,o,(ee,P)=>{const ge=8+Math.round(Math.min(ee,P)/Math.max(1,P)*87);s==null||s(Math.min(95,ge),m)});si(o);const v=g.find(ee=>ee.startsWith("ERR"));if(v)throw new Error(v);const b=g.find(ee=>ee.startsWith("fs_stream_begin,")),E=g.find(ee=>ee.startsWith("fs_stream_end,"));if(!b||!E)throw new Error("ERR: fs_read_stream missing metadata");const[,M,D]=b.split(",",4),[,I,Z,le]=E.split(",",4),L=parseInt(D??"",10),U=parseInt(Z??"",10),pe=parseInt(le??"",10);if(M!==r||I!==r||!Number.isFinite(L)||L!==U||!Number.isFinite(pe))throw new Error("ERR: fs_read_stream invalid metadata");let ce=0,Ee="";for(const ee of g){if(!ee.startsWith("fs_stream_chunk,"))continue;const[,P,ge=""]=ee.split(",",3),_e=parseInt(P??"",10);if(!Number.isFinite(_e)||_e!==ce||ge.length%2!==0)throw new Error("ERR: fs_read_stream invalid chunk");Ee+=ge,ce+=Math.floor(ge.length/2)}if(ce!==L)throw new Error("ERR: fs_read_stream size mismatch");const ue=kh(Ee);if(Fg(ue)!==pe)throw new Error("ERR: fs_read_stream checksum mismatch");return s==null||s(100,"Fil indlæst fra Pico"),new TextDecoder().decode(ue)}async writeText(r,f,s){s==null||s(5,"Klargør BLE-overførsel..."),await this.exchange(`fs_write_begin,${Ul(r)}`,b=>b==="ACK:fs_write_begin","fs_write_begin",2),s==null||s(18,"Pico er klar til filen...");const o=new TextEncoder().encode(f),m=[...o].map(b=>b.toString(16).padStart(2,"0")).join(""),_=[];for(let b=0;b<m.length;b+=160)_.push(`fs_write_chunk,${m.slice(b,b+160)}`);_.push("fs_write_end");const g=this.waitFor(b=>b==="ACK:fs_write_done"||b.startsWith("ERR"),Vg,"fs_write_done");s==null||s(o.length===0?85:18,o.length===0?"Sender tom fil via Bluetooth...":`Sender 0/${o.length} bytes via Bluetooth...`),await this.stream.sendReliable(_,(b,E,M)=>{if(!M.startsWith("fs_write_chunk,"))return;const D=Math.min(o.length,b*80),I=18+Math.round(b/Math.max(1,E-1)*67);s==null||s(Math.min(85,I),`Sender ${D}/${o.length} bytes via Bluetooth...`)});const v=await g;if(v.startsWith("ERR"))throw new Error(v);s==null||s(100,"Gemt på Pico")}async deleteFile(r){const f=await this.exchange(`fs_delete,${Ul(r)}`,s=>s==="ACK:fs_delete"||s.startsWith("ERR"),"fs_delete",2);if(f.startsWith("ERR"))throw new Error(f)}async restart(){await this.exchange("restart",r=>r==="ACK:restart"||r.startsWith("ERR"),"restart",1).catch(()=>{}),this.expectingDisconnect=!0}enqueueButton(r){this.busy||(this.pendingButtons.push(`button,${r}`),this.pumpControls())}enqueueSlider(r,f){this.busy||(this.pendingSliders.set(r,`slider,${r}:${f}`),this.pumpControls())}enqueueToggle(r,f){this.busy||(this.pendingToggles.set(r,`toggle,${r}:${f?1:0}`),this.pumpControls())}pumpControls(){this.controlPumpActive||this.busy||!this.transport.connected||(this.controlPumpActive=!0,this.drainControls())}async drainControls(){try{for(;!this.busy&&this.transport.connected;){const r=this.nextControlLine();if(!r)break;await this.transport.writeLine(r),this.log("info",`tx: ${r}`),await wu(Gg)}}catch(r){this.log("error",r instanceof Error?r.message:"Kunne ikke sende kommando."),this.handleDisconnect()}finally{this.controlPumpActive=!1,!this.busy&&this.transport.connected&&this.hasPendingControls()&&this.pumpControls()}}nextControlLine(){const r=this.pendingButtons.shift();if(r)return r;const f=this.pendingSliders.entries().next();if(!f.done){const[o,m]=f.value;return this.pendingSliders.delete(o),m}const s=this.pendingToggles.entries().next();if(!s.done){const[o,m]=s.value;return this.pendingToggles.delete(o),m}return null}hasPendingControls(){return this.pendingButtons.length>0||this.pendingSliders.size>0||this.pendingToggles.size>0}async disconnect(){if(!this.transport.connected){this.handleDisconnect();return}this.expectingDisconnect=!0;try{await this.exchange("disconnect",r=>r==="ACK:disconnect","disconnect",1)}catch{}this.transport.disconnect()}handleDisconnect(){var r,f,s;for(const o of this.waiters)clearTimeout(o.timer),o.reject(new Error("Forbindelsen blev afbrudt."));this.waiters=[],this.collectingLayout=!1,this.layoutResolve=null,(r=this.lineReject)==null||r.call(this,new Error("Forbindelsen blev afbrudt.")),this.collectingLines=!1,this.lineResolve=null,this.lineReject=null,this.fsCapabilities=null,this.stream.reset(),(s=(f=this.events).onDisconnect)==null||s.call(f)}}function Ig(c){let r=0;for(let f=0;f<Fs.length;f+=1)Fs[f]<=c&&(r=f);return r}function Ah(c){return c.replace(/\\/g,"/").replace(/^\/+/,"")||c}function Fg(c){let r=0;for(const f of c)r=r+f>>>0;return r}function kh(c){const r=new Uint8Array(Math.floor(c.length/2));for(let f=0;f<r.length;f+=1)r[f]=parseInt(c.slice(f*2,f*2+2),16);return r}function Dh(c){const r=(f,s)=>Number.isFinite(f)?Math.max(Bg,Math.min(Lg,f)):s;for(const f of c){const s=f.trim();if(s.startsWith("#GRID,")){const o=s.split(","),m=r(parseInt(o[1],10),fi),_=r(parseInt(o[2],10),Rr);return{cols:m,rows:_}}}return{cols:fi,rows:Rr}}function Oh(c){const r=new Map;for(const f of c){const s=f.trim();if(!s||s.startsWith("#VERSION")||s==="__END__")continue;const o=s.split(",");if(o.length<7)continue;const[m,_,g,v,b,E,M,D,I,Z,le]=o;if(m!=="button"&&m!=="slider"&&m!=="toggle"&&m!=="radar"&&m!=="text"||r.has(_))continue;const L=_e=>{if(_e==="n")return null;const ye=parseInt(_e,10);return Number.isNaN(ye)?null:ye},U=parseInt(M,10)||0,pe=D!==void 0?parseInt(D,10):0,ce=I!==void 0?parseInt(I,10):100,Ee=["none","bottom","middle","top"].includes(Z??"")?Z:"none",ue=D!==void 0?parseInt(D,10)===1:!1,we=D!==void 0?parseFloat(D):0,ee=I!==void 0?parseFloat(I):180,P=Z!==void 0?parseFloat(Z):200,ge=le!==void 0?parseInt(le,10):1200;r.set(_,{type:m,name:_,centerX2:L(g),centerY2:L(v),spanX:L(b),spanY:L(E),rotation:[0,90,180,270].includes(U)?U:0,...m==="slider"?{sliderMin:Number.isFinite(pe)?pe:0,sliderMax:Number.isFinite(ce)?ce:100,sliderRecenter:Ee}:{},...m==="toggle"?{toggleInitial:ue}:{},...m==="radar"?{radarMinAngle:Number.isFinite(we)?we:0,radarMaxAngle:Number.isFinite(ee)?ee:180,radarMaxDistance:Number.isFinite(P)&&P>0?P:200,radarFadeMs:Number.isFinite(ge)&&ge>0?ge:1200}:{}})}return[...r.values()]}let te=null,xr=null,Ch=0,Wn=!1;function Zg(){return new Date().toLocaleTimeString("da-DK",{hour12:!1})}function zh(c){return new Promise(r=>setTimeout(r,c))}function Jg(c){return Object.fromEntries(c.filter(r=>r.type==="toggle").map(r=>[r.name,!!r.toggleInitial]))}function Bh(c,r){const f=Jg(c);for(const s of c)s.type==="toggle"&&r[s.name]!==void 0&&(f[s.name]=r[s.name]);return f}const W=vg((c,r)=>{function f(o,m){c(_=>({logs:[{level:o,message:m,time:Zg()},..._.logs].slice(0,200)}))}function s(o){xr&&clearTimeout(xr),Ch+=1,c({toast:{message:o,id:Ch}}),xr=setTimeout(()=>c({toast:null}),4500)}return te=new Qg({onProgress:(o,m)=>c({progress:{value:o,label:m}}),onLog:(o,m)=>f(o,m),onRadar:(o,m,_)=>{const g=Date.now(),v={id:`${g}-${Math.random().toString(36).slice(2)}`,angle:m,distance:_,createdAt:g};c(b=>{const E=b.layout.find(I=>I.type==="radar"&&I.name===o),M=(E==null?void 0:E.radarFadeMs)??1200,D=b.radarPings[o]??[];return{radarPings:{...b.radarPings,[o]:[...D.filter(I=>g-I.createdAt<=M),v].slice(-80)}}})},onText:(o,m)=>{c(_=>({textValues:{..._.textValues,[o]:m}}))},onToggleState:(o,m)=>{c(_=>({toggleValues:{..._.toggleValues,[o]:m}}))},onDisconnect:()=>{const{screen:o,active:m,picoIdeOrigin:_}=r();if(Wn){Wn=!1;return}if(o==="control"||o==="connection"||o==="create"||o==="ide"&&_==="control"){const g=m?{deviceID:m.deviceID,deviceName:m.deviceName,deviceIconID:m.iconID,canOthersConnect:m.canOthersConnect,canOthersEdit:m.canOthersEdit,isOwnedByMe:m.isOwnedByMe,ownerName:m.ownerName}:null;c({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connectionLost:g})}}}),{screen:"splash",splashTarget:null,user:null,savedDevices:[],connecting:null,progress:{value:0,label:""},toast:null,confirmDialog:null,connectionLost:null,active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},logs:[],sideMenuOpen:!1,debuggerOpen:!1,menuPage:null,editMode:!1,dashboardPage:"mine",picoIdeOrigin:"dashboard",init:()=>{const o=Sg(),m=Hu();c({user:o,savedDevices:m,splashTarget:o?"dashboard":"intro"})},finishSplash:()=>{const o=r().splashTarget;c({screen:o??"intro"})},createUser:o=>{const m=o.trim();if(!m)return;const _={username:m,userID:xg()};Mh(_),c({user:_,screen:"dashboard"})},findDevice:async()=>{try{const o=await Og();await r().connectToDevice(o)}catch(o){o instanceof Error&&o.name!=="NotFoundError"&&f("error",o.message)}},connectToDevice:async(o,m)=>{const _=r().user;if(!(!_||!te)){Wn=!1,c({screen:"connection",connecting:{name:ku(o.name)||(m==null?void 0:m.deviceName)||"Pico",iconID:(m==null?void 0:m.deviceIconID)??0},progress:{value:0,label:"Forbinder..."}});try{await te.connect(o);const g=await te.runHandshake(_),v=o.id,b=ku(o.name)||(m==null?void 0:m.deviceName)||"Pico";if(g.kind==="denied"){f("warning","Adgang nægtet (privat enhed)."),s("Adgang nægtet — denne enhed er privat."),c({screen:"dashboard",connecting:null}),await te.disconnect();return}if(g.kind==="unowned"){c({active:{deviceID:v,deviceName:b,iconID:0,canEdit:!0,canOthersConnect:!1,canOthersEdit:!1,isOwnedByMe:!0,ownerName:_.username,gridCols:fi,gridRows:Rr},screen:"create"});return}const E={deviceID:v,deviceName:b,deviceIconID:g.iconID,canOthersConnect:g.canOthersConnect,canOthersEdit:g.canOthersEdit,isOwnedByMe:g.isOwnedByMe,ownerName:g.isOwnedByMe?_.username:g.ownerName??(m==null?void 0:m.ownerName)};c({savedDevices:Su(E)});const M=await te.requestLayout(),D=Dh(M),I=Oh(M);c({layout:I,sliderValues:{},toggleValues:Bh(I,r().toggleValues),radarPings:{},textValues:{},active:{deviceID:v,deviceName:b,iconID:g.iconID,canEdit:g.canEdit,canOthersConnect:g.canOthersConnect,canOthersEdit:g.canOthersEdit,isOwnedByMe:g.isOwnedByMe,ownerName:g.isOwnedByMe?_.username:g.ownerName??(m==null?void 0:m.ownerName),gridCols:D.cols,gridRows:D.rows},screen:"control",connecting:null,connectionLost:null})}catch(g){const v=g instanceof Error?g.message:"Forbindelsen mislykkedes.";f("error",v),s("Forbindelsen mislykkedes."),c({screen:"dashboard",connecting:null}),await te.disconnect().catch(()=>{})}}},finishCreate:async(o,m,_,g,v)=>{const{user:b,active:E}=r();if(!(!b||!E||!te))try{te.setBusy(!0),await te.create(b,o,m,_,g,v),te.setBusy(!1);const M={deviceID:E.deviceID,deviceName:E.deviceName,deviceIconID:o,canOthersConnect:m,canOthersEdit:m&&_,isOwnedByMe:!0,ownerName:b.username};c({savedDevices:Su(M)});const D=await te.requestLayout(),I=Dh(D),Z=Oh(D);c({layout:Z,sliderValues:{},toggleValues:Bh(Z,r().toggleValues),radarPings:{},textValues:{},active:{...E,iconID:o,canEdit:!0,canOthersConnect:m,canOthersEdit:m&&_,ownerName:b.username,gridCols:I.cols,gridRows:I.rows},screen:"control"})}catch(M){te.setBusy(!1);const D=M instanceof Error?M.message:"Oprettelse mislykkedes.";f("error",D),s("Oprettelse mislykkedes."),c({screen:"dashboard"}),await te.disconnect().catch(()=>{})}},saveDeviceSettings:async(o,m,_,g,v)=>{const{active:b,user:E}=r();if(!(!b||!te||!b.isOwnedByMe))try{te.setBusy(!0),await te.updateDeviceSettings(o,m,_,g,v,E==null?void 0:E.username);const M={...b,iconID:o,canEdit:!0,canOthersConnect:m,canOthersEdit:m&&_,ownerName:(E==null?void 0:E.username)??b.ownerName,gridCols:g,gridRows:v},D={deviceID:b.deviceID,deviceName:b.deviceName,deviceIconID:o,canOthersConnect:m,canOthersEdit:m&&_,isOwnedByMe:!0,ownerName:(E==null?void 0:E.username)??b.ownerName};c({active:M,savedDevices:Su(D)}),s("Enhedsindstillinger gemt.")}catch(M){f("error",M instanceof Error?M.message:"Kunne ikke gemme enhedsindstillinger."),s("Kunne ikke gemme enhedsindstillinger.")}finally{te.setBusy(!1)}},cancelCreate:async()=>{te&&await te.disconnect().catch(()=>{}),c({screen:"dashboard",active:null,connecting:null})},disconnect:async()=>{Wn=!0,te&&await te.disconnect().catch(()=>{}),Wn=!1,c({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connectionLost:null})},removeSavedDevice:o=>{c({savedDevices:Tg(o)})},clearSavedDevices:()=>{Eg(),c({savedDevices:[]}),s("Gemte enheder ryddet.")},resetApplicationData:async()=>{Wn=!0,te!=null&&te.connected&&await te.disconnect().catch(()=>{}),wg(),window.location.reload()},updateUsername:o=>{const m=r().user,_=o.trim();if(!m||!_)return;const g={...m,username:_};Mh(g),c(v=>{var E;const b=v.savedDevices.map(M=>M.isOwnedByMe?{...M,ownerName:_}:M);return tc(b),{user:g,active:(E=v.active)!=null&&E.isOwnedByMe?{...v.active,ownerName:_}:v.active,savedDevices:b}}),s("Brugernavn gemt.")},openPicoIde:()=>{const o=r().screen==="control"&&!!(te!=null&&te.connected);c(m=>({screen:"ide",picoIdeOrigin:o?"control":"dashboard",active:o?m.active:null,layout:o?m.layout:[],sliderValues:o?m.sliderValues:{},toggleValues:o?m.toggleValues:{},radarPings:o?m.radarPings:{},textValues:o?m.textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null}))},closePicoIde:()=>{const{picoIdeOrigin:o,active:m}=r();c({screen:o==="control"&&m&&(te!=null&&te.connected)?"control":"dashboard",sideMenuOpen:!1,menuPage:null,picoIdeOrigin:"dashboard"})},isBleConnected:()=>!!(te!=null&&te.connected),bleListFiles:async()=>te!=null&&te.connected?te.listFiles("/"):[],bleReadText:async(o,m,_)=>{if(!(te!=null&&te.connected))throw new Error("Ingen BLE-forbindelse.");return te.readText(o,m,_)},bleWriteText:async(o,m,_)=>{if(!(te!=null&&te.connected))throw new Error("Ingen BLE-forbindelse.");await te.writeText(o,m,_)},bleDeleteFile:async o=>{if(!(te!=null&&te.connected))throw new Error("Ingen BLE-forbindelse.");await te.deleteFile(o)},bleRestart:async()=>{te!=null&&te.connected&&await te.restart()},bleRestartAndReconnect:async(o="control")=>{const{active:m}=r();if(!(te!=null&&te.connected)||!m)return!1;const _={deviceID:m.deviceID,deviceName:m.deviceName,deviceIconID:m.iconID,canOthersConnect:m.canOthersConnect,canOthersEdit:m.canOthersEdit,isOwnedByMe:m.isOwnedByMe,ownerName:m.ownerName};Wn=!0,f("info","Genstarter Pico og forsøger automatisk genforbindelse...");try{await te.restart()}catch{}c({progress:{value:15,label:"Venter på Pico genstart..."},connecting:{name:_.deviceName,iconID:_.deviceIconID}});for(let g=0;g<12&&(te!=null&&te.connected);g+=1)await zh(250);te!=null&&te.connected||(Wn=!1);for(let g=1;g<=8;g+=1){await zh(g===1?1200:850);try{const b=(await cp()).find(E=>E.id===_.deviceID);if(!b){c({progress:{value:Math.min(88,20+g*8),label:"Venter på browser-tilladelse..."}});continue}return c({progress:{value:Math.min(92,24+g*8),label:`Genforbinder (${g}/8)...`}}),await r().connectToDevice(b,_),o==="ide"&&c(E=>({screen:"ide",picoIdeOrigin:"control",active:E.active,layout:E.layout,sliderValues:E.sliderValues,toggleValues:E.toggleValues,radarPings:E.radarPings,textValues:E.textValues,editMode:!1,sideMenuOpen:!1,menuPage:null})),s("Pico genforbundet."),!0}catch(v){f("warning",v instanceof Error?v.message:"Genforbindelse mislykkedes.")}}return s("Kunne ikke genforbinde automatisk. Vælg Picoen igen."),Wn=!1,c({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:_}),!1},reconnectLostDevice:async()=>{var m;const o=r().connectionLost;if(o){c({connectionLost:null});try{if((m=navigator.bluetooth)!=null&&m.getDevices){const g=(await navigator.bluetooth.getDevices()).find(v=>v.id===o.deviceID);if(g){await r().connectToDevice(g,o);return}}}catch{}f("info","Genforbind: vælg enheden i browserens liste."),await r().findDevice()}},dismissConnectionLost:()=>c({connectionLost:null}),sendButton:o=>te==null?void 0:te.enqueueButton(o),sendSlider:(o,m)=>{c(_=>({sliderValues:{..._.sliderValues,[o]:m}})),te==null||te.enqueueSlider(o,m)},sendToggle:(o,m)=>{c(_=>({toggleValues:{..._.toggleValues,[o]:m}})),te==null||te.enqueueToggle(o,m)},saveLayout:async o=>{if(te)try{te.setBusy(!0),await te.saveLayout(o),c({layout:o,editMode:!1})}catch(m){f("error",m instanceof Error?m.message:"Kunne ikke gemme layout.")}finally{te.setBusy(!1)}},setEditMode:o=>c({editMode:o,sideMenuOpen:!1,menuPage:null}),setDashboardPage:o=>c({dashboardPage:o}),toggleSideMenu:o=>c(m=>({sideMenuOpen:o??!m.sideMenuOpen})),toggleDebugger:o=>c(m=>({debuggerOpen:o??!m.debuggerOpen,sideMenuOpen:!1,menuPage:null})),openMenuPage:o=>c({menuPage:o,sideMenuOpen:!1}),closeMenuPage:()=>c({menuPage:null}),clearLogs:()=>c({logs:[]}),log:(o,m)=>f(o,m),askConfirm:o=>c({confirmDialog:o}),closeConfirm:()=>c({confirmDialog:null}),showToast:o=>s(o),dismissToast:()=>{xr&&clearTimeout(xr),c({toast:null})}}}),lc="./",dp=[{id:0,label:"Raspberry Pi"},{id:1,label:"Sumo robot"},{id:2,label:"LED / lys"},{id:3,label:"Lineal + blyant"},{id:4,label:"Bil"},{id:5,label:"Tank"},{id:6,label:"Robotarm"},{id:7,label:"Bi"},{id:8,label:"Palet"},{id:9,label:"Afstandssensor"},{id:10,label:"Søg"},{id:11,label:"Alarm"}];function mi(c){const r=c>=0&&c<dp.length?c:0;return`${lc}device-icons/${r}.png`}const Pg=`${lc}art/logo.png`,Wg=`${lc}art/Teknologiskolen_logo.png`,eb=`${lc}art/logo_teknologiskolen_white.png`,tb={menu:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]}),user:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),settings:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),info:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),u.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),help:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),u.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),debugger:u.jsx(u.Fragment,{children:u.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),edit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),u.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),picoIde:u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),u.jsx("path",{d:"M8 9l-3 3 3 3"}),u.jsx("path",{d:"M16 9l3 3-3 3"}),u.jsx("line",{x1:"13",y1:"8",x2:"11",y2:"16"})]}),exit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),plus:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),delete:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),u.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),power:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),u.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),save:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),u.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),u.jsx("polyline",{points:"7 3 7 8 15 8"})]}),upload:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),u.jsx("polyline",{points:"17 8 12 3 7 8"}),u.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),refresh:u.jsxs(u.Fragment,{children:[u.jsx("polyline",{points:"23 4 23 10 17 10"}),u.jsx("polyline",{points:"1 20 1 14 7 14"}),u.jsx("path",{d:"M3.5 9a9 9 0 0 1 14.9-3.4L23 10"}),u.jsx("path",{d:"M20.5 15a9 9 0 0 1-14.9 3.4L1 14"})]}),package:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),u.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),u.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),back:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),u.jsx("polyline",{points:"12 19 5 12 12 5"})]})};function jt({name:c,size:r=24,className:f}){return u.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:f,"aria-hidden":"true",children:tb[c]})}const nb=1850,lb=450;function ab(){const c=W(s=>s.splashTarget),r=W(s=>s.finishSplash),f=c?"splash-screen-animation splash-ready":"splash-pending";return X.useEffect(()=>{if(!c)return;const o=window.matchMedia("(prefers-reduced-motion: reduce)").matches?lb:nb,m=window.setTimeout(r,o);return()=>window.clearTimeout(m)},[r,c]),u.jsxs("div",{className:`screen splash-screen ${f}`,"aria-label":"Teknologiskolen starter",children:[u.jsx("div",{className:"splash-white-cover"}),u.jsx("div",{className:"splash-red-field"}),u.jsx("div",{className:"splash-brand","aria-hidden":"true",children:u.jsx("div",{className:"splash-mark splash-logo-shell",children:u.jsx("img",{className:"splash-logo",src:Pg,alt:""})})}),u.jsx("span",{className:"sr-only",children:"Teknologiskolen"})]})}function Lh(){const c=W(o=>o.createUser),[r,f]=X.useState(""),s=r.length>0;return u.jsxs("div",{className:"screen intro",children:[u.jsxs("div",{className:"intro-header",children:[u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"}),u.jsx("img",{className:"intro-header-image",src:Wg,alt:"Teknologiskolen"}),u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"})]}),u.jsxs("div",{className:"intro-body",children:[u.jsx("p",{children:"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Find selv på et navn, du vil vises som i appen. Det er ikke et login, og navnet gemmes kun i denne browser."}),u.jsxs("div",{className:`field ${s?"filled":""}`,children:[u.jsx("input",{id:"username",value:r,onChange:o=>f(o.target.value),maxLength:32,autoComplete:"off",placeholder:"Find på et navn"}),u.jsx("label",{htmlFor:"username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!s,onClick:()=>c(r),children:"Fortsæt"})]}),u.jsx("span",{className:"version",children:Mr})]})}function Gu({title:c,onMenu:r}){return u.jsx("header",{className:"topbar",children:u.jsxs("div",{className:"topbar-inner",children:[u.jsx("h1",{children:c}),u.jsx("button",{className:"iconbtn",type:"button",onClick:r,"aria-label":"Menu",children:u.jsx(jt,{name:"menu"})})]})})}function pt({title:c,onClose:r,children:f,closeVariant:s="plain"}){const o=s==="circle",m=X.useRef(!1);return u.jsx("div",{className:"modal-root",onPointerDown:_=>{m.current=_.target===_.currentTarget},onClick:_=>{_.target===_.currentTarget&&m.current&&r(),m.current=!1},children:u.jsxs("div",{className:"modal",onClick:_=>_.stopPropagation(),children:[u.jsxs("div",{className:"modal-head",children:[u.jsx("h3",{children:c}),u.jsx("button",{className:`iconbtn ${o?"modal-close-circle":""}`,type:"button",onClick:r,"aria-label":"Luk",children:u.jsx(jt,{name:o?"delete":"close",size:o?30:24})})]}),f]})})}function Uh(){const c=W(D=>D.savedDevices),r=W(D=>D.toggleSideMenu),f=W(D=>D.findDevice),s=W(D=>D.removeSavedDevice),o=W(D=>D.askConfirm),m=W(D=>D.dashboardPage),_=W(D=>D.setDashboardPage),g=sb(),[v,b]=X.useState(null),E=nc(),M=c.filter(D=>m==="mine"?D.isOwnedByMe:!D.isOwnedByMe);return u.jsxs("div",{className:"screen dashboard-screen",children:[u.jsx(Gu,{title:"Hovedmenu",onMenu:()=>r()}),u.jsxs("div",{className:"content dash-content",children:[!E&&u.jsx("div",{className:"notice",children:"Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På Android: brug Chrome."}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:m==="mine"?"active":"",onClick:()=>_("mine"),children:"Mine Enheder"}),u.jsx("button",{type:"button",className:m==="andre"?"active":"",onClick:()=>_("andre"),children:"Andre Enheder"})]}),u.jsx("div",{className:"panel panel-white device-list",children:M.length===0?u.jsx("div",{className:"device-list-empty",children:m==="mine"?"Ingen enheder endnu. Tryk på + for at finde en enhed.":"Ingen andre enheder gemt."}):M.map(D=>u.jsx(ib,{device:D,disabled:!E,onConnect:()=>g(D),onSettings:()=>b(D)},D.deviceID))})]}),u.jsx("button",{className:"fab",type:"button",onClick:()=>f(),disabled:!E,"aria-label":"Find enhed",children:u.jsx(jt,{name:"plus",size:30})}),u.jsx("span",{className:"version",children:Mr}),v&&u.jsx(pt,{title:"Enhedsindstillinger",onClose:()=>b(null),children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("div",{className:"saved-device-head",children:[u.jsx("img",{src:mi(v.deviceIconID),alt:""}),u.jsx("strong",{children:v.deviceName})]}),u.jsx(qs,{label:"Gemte indstillinger",value:"Denne browser"}),u.jsx(qs,{label:"Ejer",value:rb(v)}),u.jsx(qs,{label:"Offentlig",value:v.canOthersConnect?"Ja":"Nej"}),u.jsx(qs,{label:"Andre må redigere",value:v.canOthersEdit?"Ja":"Nej"}),u.jsx("div",{className:"notice",children:"Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!E,onClick:()=>{const D=v;b(null),g(D)},children:"Forbind"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>o({title:"Glem enhed",message:`Vil du fjerne ${v.deviceName} fra gemte enheder?`,confirmLabel:"Glem",onConfirm:()=>{s(v.deviceID),b(null)}}),children:"Glem enhed"})]})})]})}function ib({device:c,disabled:r,onConnect:f,onSettings:s}){return u.jsxs("div",{className:"device-tile-wrap",children:[u.jsxs("button",{className:"device-tile",type:"button",onClick:f,disabled:r,children:[u.jsx("img",{className:"device-tile-icon",src:mi(c.deviceIconID),alt:""}),u.jsx("span",{className:"device-tile-name",children:c.deviceName})]}),u.jsx("button",{className:"device-tile-del",type:"button",onClick:s,"aria-label":"Enhedsindstillinger",children:u.jsx(jt,{name:"settings"})})]})}function qs({label:c,value:r}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:c}),u.jsx("strong",{children:r})]})}function rb(c){var r;return c.isOwnedByMe?"Dig":((r=c.ownerName)==null?void 0:r.trim())||"Anden bruger"}function sb(){const c=W(s=>s.connectToDevice),r=W(s=>s.findDevice),f=W(s=>s.log);return async s=>{const m=(await cp()).find(_=>_.id===s.deviceID);m?await c(m,s):(f("info","Genforbind: vælg enheden i browserens liste."),await r())}}function cb(){const c=W(f=>f.connecting),r=W(f=>f.progress);return u.jsxs("div",{className:"screen connection",children:[u.jsx("div",{className:"device-icon-pick",children:u.jsx("img",{src:mi((c==null?void 0:c.iconID)??0),alt:""})}),u.jsxs("h2",{style:{margin:0,color:"var(--red)"},children:["Forbinder til ",(c==null?void 0:c.name)??"enhed"]}),u.jsx("div",{className:"spinner"}),u.jsxs("div",{style:{width:"100%"},children:[u.jsx("div",{className:"progress-track",children:u.jsx("div",{className:"progress-fill",style:{width:`${r.value}%`}})}),u.jsx("p",{style:{color:"var(--muted)",fontWeight:600,marginTop:12},children:r.label})]})]})}function mp({selected:c,onSelect:r,onClose:f}){return u.jsx(pt,{title:"Vælg Enhedens Ikon",onClose:f,children:u.jsx("div",{className:"icon-grid",children:dp.map(s=>u.jsx("button",{type:"button",className:`icon-tile ${s.id===c?"selected":""}`,onClick:()=>{r(s.id),f()},"aria-label":s.label,children:u.jsx("img",{src:mi(s.id),alt:""})},s.id))})})}function ob(){const c=W(pe=>pe.finishCreate),r=W(pe=>pe.cancelCreate),[f,s]=X.useState(0),[o,m]=X.useState(!1),[_,g]=X.useState(!1),[v,b]=X.useState(!1),[E,M]=X.useState(fi),[D,I]=X.useState(Rr),[Z,le]=X.useState(!1),L=pe=>Number.isFinite(pe)?Math.max(ci,Math.min(oi,Math.round(pe))):fi;async function U(){le(!0),await c(f,_,_&&v,L(E),L(D))}return u.jsxs("div",{className:"screen",children:[u.jsx("header",{className:"topbar",children:u.jsx("h1",{children:"Opret Enhed"})}),u.jsxs("div",{className:"content create-body",children:[u.jsxs("button",{type:"button",className:"device-icon-pick",onClick:()=>m(!0),"aria-label":"Vælg ikon",children:[u.jsx("img",{src:mi(f),alt:""}),u.jsx("span",{className:"badge",children:u.jsx(jt,{name:"plus",size:22})})]}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:_?"":"active",onClick:()=>g(!1),children:"Privat"}),u.jsx("button",{type:"button",className:_?"active":"",onClick:()=>g(!0),children:"Offentlig"})]}),_&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:v?"":"active",onClick:()=>b(!1),children:"Nej"}),u.jsx("button",{type:"button",className:v?"active":"",onClick:()=>b(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter (kolonner × rækker)"}),u.jsxs("div",{className:"row",style:{width:"100%"},children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"cols",children:"Kolonner"}),u.jsx("input",{id:"cols",type:"number",min:ci,max:oi,value:Number.isNaN(E)?"":E,onChange:pe=>M(parseInt(pe.target.value,10)),onBlur:()=>M(L(E))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"rows",children:"Rækker"}),u.jsx("input",{id:"rows",type:"number",min:ci,max:oi,value:Number.isNaN(D)?"":D,onChange:pe=>I(parseInt(pe.target.value,10)),onBlur:()=>I(L(D))})]})]}),u.jsxs("div",{className:"row",style:{marginTop:"auto",width:"100%"},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>r(),disabled:Z,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:U,disabled:Z,children:Z?"Opretter...":"Opret"})]})]}),o&&u.jsx(mp,{selected:f,onSelect:s,onClose:()=>m(!1)}),u.jsx("span",{className:"version",children:Mr})]})}const di=8;function Qs(c){return Math.max(5,Math.min(22,c))}function Zs(c,r,f){const s=Math.max(1,c.length),o=(r-di*2)/(s*.58),m=(f-di*2)*.48;return Qs(Math.min(o,m))}function ub(c,r,f,s,o){const m=c.trim().split(/\s+/).filter(Boolean),_=Math.max(1,c.replace(/\s+/g,"").length+Math.max(0,m.length-1)*1.6),g=o?Qs(Math.min(r/4.6,f/4.6,12)):0,v=o?g+di:di;if(s){const M=Math.max(1,f-v*2);return{fontSize:Qs(Math.min(r*.48,M/(_*1.04))),endFontSize:g,centerInset:o?{top:v,bottom:v}:{}}}const b=Math.max(1,r-v*4.2);return{fontSize:Qs(Math.min(f*.42,b/(_*.58))),endFontSize:g,centerInset:o?{left:v*2.1,right:v*2.1}:{}}}function fb({control:c,rect:r,disabled:f,latestValue:s,toggleValue:o,radarPings:m=[],textValue:_,onButton:g,onSlider:v,onToggle:b}){const E={left:r.cx,top:r.cy,width:r.width,height:r.height};if(c.type==="button")return u.jsx("div",{className:"control",style:E,children:u.jsx("button",{className:"control-button",type:"button",disabled:f,style:{width:"100%",height:"100%",fontSize:Zs(c.name,r.width,r.height)},onPointerDown:M=>{f||(M.preventDefault(),g(c.name))},children:c.name})});if(c.type==="toggle"){const M=!!o;return u.jsx("div",{className:"control",style:E,children:u.jsx("button",{className:`control-toggle ${M?"on":""}`,type:"button",disabled:f,"aria-pressed":M,style:{width:"100%",height:"100%",fontSize:Zs(c.name,r.width,r.height)},onPointerDown:D=>{f||(D.preventDefault(),b(c.name,!M))},children:u.jsx("span",{children:c.name})})})}return c.type==="radar"?u.jsx("div",{className:"control",style:E,children:u.jsx(pp,{control:c,pings:m,width:r.width,height:r.height})}):c.type==="text"?u.jsx("div",{className:"control",style:E,children:u.jsx(hp,{message:_??c.name,width:r.width,height:r.height})}):u.jsx("div",{className:"control",style:E,children:u.jsx(Eb,{control:c,disabled:f,latestValue:s,onSlider:v,width:r.width,height:r.height})})}function db(c,r,f){const s=c.trim()||" ",m=s.split(/\s+/).filter(Boolean).reduce((M,D)=>Math.max(M,D.length),1),_=Math.max(1,Math.ceil(s.length/Math.max(1,Math.floor(m*1.9)))),g=Math.max(1,r-di*3),v=Math.max(1,f-di*3),b=g/(m*.58),E=v/(_*1.16);return Math.max(7,Math.min(24,b,E))}function hp({message:c,width:r,height:f}){const s=c.trim()||"...";return u.jsx("div",{className:"control-text",style:{width:"100%",height:"100%",fontSize:db(s,r,f)},children:u.jsx("span",{children:s})})}function pp({control:c,pings:r,width:f,height:s,preview:o=!1}){const[,m]=X.useState(0),_=Math.max(120,c.radarFadeMs??1200),g=c.radarMinAngle??0,v=c.radarMaxAngle??180,b=Kt(g),E=Kt(v),M=Math.abs(v-g)>=360||b===E&&g!==v,D=Math.max(1,c.radarMaxDistance??200),I=Date.now(),Z=r[r.length-1],le=c.rotation,L=Kt(b+le),U=Kt(E+le),pe=yb(b,E),ce=((Z==null?void 0:Z.angle)??pe)+le,Ee=o?[{id:"preview",angle:pe,distance:D*.62,createdAt:I}]:r.filter(O=>I-O.createdAt<=_),ue=!M,we=Math.max(8,Math.min(12,Math.min(f,s)*.16)),ee=0,P=0,ge=1,_e=M?{x:-1.12,y:-1.12,width:2.24,height:2.24}:pb(L,U),ye=M?"":mb(ee,P,ge,L,U),se=Yh(g),Ge=Yh(v),Ae=ue?gb(L,U,_e,f,s,se,Ge,we):null;X.useEffect(()=>{if(o||r.length===0)return;const O=window.setInterval(()=>m(H=>H+1),120);return()=>window.clearInterval(O)},[_,r.length,o]);const Ie=an(ee,P,ge,ce);return u.jsxs("div",{className:"control-radar",style:{width:"100%",height:"100%"},children:[u.jsxs("svg",{width:f,height:s,viewBox:`${_e.x} ${_e.y} ${_e.width} ${_e.height}`,preserveAspectRatio:"none","aria-hidden":"true",children:[M?u.jsx("circle",{className:"radar-sector-fill",cx:ee,cy:P,r:ge}):u.jsx("path",{className:"radar-sector-fill",d:ye}),[.25,.5,.75,1].map(O=>M?u.jsx("circle",{className:"radar-ring",cx:ee,cy:P,r:ge*O},O):u.jsx("path",{className:"radar-ring",d:hb(ee,P,ge*O,L,U)},O)),!M&&u.jsx(Hh,{cx:ee,cy:P,radius:ge,angle:L}),!M&&u.jsx(Hh,{cx:ee,cy:P,radius:ge,angle:U}),u.jsx("line",{className:"radar-sweep",x1:ee,y1:P,x2:Ie.x,y2:Ie.y}),Ee.map(O=>{const H=o?0:I-O.createdAt,ae=Math.max(0,1-H/_),xe=Math.max(0,Math.min(D,O.distance)),fe=an(ee,P,ge*(xe/D),O.angle+le);return u.jsx("circle",{className:"radar-ping",cx:fe.x,cy:fe.y,r:Math.max(.025,Math.min(_e.width,_e.height)*.025),opacity:ae},O.id)})]}),ue&&Ae&&u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"radar-angle-label",style:{left:Ae.min.x,top:Ae.min.y,fontSize:we},children:se}),u.jsx("span",{className:"radar-angle-label",style:{left:Ae.max.x,top:Ae.max.y,fontSize:we},children:Ge})]})]})}function Hh({cx:c,cy:r,radius:f,angle:s}){const o=an(c,r,f,s);return u.jsx("line",{className:"radar-boundary",x1:c,y1:r,x2:o.x,y2:o.y})}function an(c,r,f,s){const o=(Kt(s)-90)*Math.PI/180;return{x:c+Math.cos(o)*f,y:r+Math.sin(o)*f}}function mb(c,r,f,s,o){const m=an(c,r,f,s),_=an(c,r,f,o),g=Vu(s,o)>180?1:0;return`M ${c} ${r} L ${m.x} ${m.y} A ${f} ${f} 0 ${g} 1 ${_.x} ${_.y} Z`}function hb(c,r,f,s,o){const m=an(c,r,f,s),_=an(c,r,f,o),g=Vu(s,o)>180?1:0;return`M ${m.x} ${m.y} A ${f} ${f} 0 ${g} 1 ${_.x} ${_.y}`}function Vu(c,r){const f=Kt(c),s=Kt(r),o=s>=f?s-f:360-f+s;return o===0?360:o}function pb(c,r){const f=[{x:0,y:0},an(0,0,1,c),an(0,0,1,r)];for(const E of[0,90,180,270])_b(E,c,r)&&f.push(an(0,0,1,E));const s=Math.min(...f.map(E=>E.x)),o=Math.max(...f.map(E=>E.x)),m=Math.min(...f.map(E=>E.y)),_=Math.max(...f.map(E=>E.y)),g=Math.max(.1,o-s),v=Math.max(.1,_-m),b=Math.max(g,v)*.24;return{x:s-b,y:m-b,width:g+b*2,height:v+b*2}}function _b(c,r,f){const s=Kt(r),o=Kt(c),m=Vu(r,f),_=Kt(o-s);return _>=0&&_<=m}function gb(c,r,f,s,o,m,_,g){const b=an(0,0,1.1,c),E=an(0,0,1.1,r);return{min:Gh(b,f,s,o,m,g),max:Gh(E,f,s,o,_,g)}}function bb(c,r,f,s){return{x:(c.x-r.x)/r.width*f,y:(c.y-r.y)/r.height*s}}function Gh(c,r,f,s,o,m){const _=bb(c,r,f,s),g=Math.max(10,o.length*m*.62),v=m,b=7;return{x:Vh(_.x,g/2+b,Math.max(g/2+b,f-g/2-b)),y:Vh(_.y,v/2+b,Math.max(v/2+b,s-v/2-b))}}function Vh(c,r,f){return Math.max(r,Math.min(f,c))}function Yh(c){return`${Math.round(c)}`}function Kt(c){return Number.isFinite(c)?(c%360+360)%360:0}function yb(c,r){const f=Kt(c),s=Kt(r),o=s>=f?s-f:360-f+s;return Kt(f+o/2)}function vb(c,r){if(!r)return c;const f=c.trim().split(/\s+/).filter(Boolean);return u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",lineHeight:1.02,textAlign:"center",gap:"0.42em"},children:f.map((s,o)=>u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[...s].map((m,_)=>u.jsx("span",{children:m},`${m}-${_}`))},`${s}-${o}`))})}function xb(c){const r={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},f=4;return c===0?{low:{...r,left:f,top:0,bottom:0},high:{...r,right:f,top:0,bottom:0}}:c===180?{low:{...r,right:f,top:0,bottom:0},high:{...r,left:f,top:0,bottom:0}}:c===90?{low:{...r,bottom:f,left:0,right:0},high:{...r,top:f,left:0,right:0}}:{low:{...r,top:f,left:0,right:0},high:{...r,bottom:f,left:0,right:0}}}function Sb({name:c,vertical:r,rotation:f,color:s,fontSize:o,endFontSize:m,centerInset:_,lowLabel:g,highLabel:v,showEnds:b}){const E=b?xb(f):null;return u.jsxs("div",{style:{position:"absolute",inset:0,color:s},children:[u.jsx("div",{style:{position:"absolute",inset:0,..._,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:o,textAlign:"center",pointerEvents:"none"},children:vb(c,r)}),E&&u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{...E.low,fontWeight:800,fontSize:m},children:g}),u.jsx("div",{style:{...E.high,fontWeight:800,fontSize:m},children:v})]})]})}function _p({name:c,rotation:r,width:f,height:s,value:o,showEnds:m=!1,fillColor:_="var(--red)",lowLabel:g="0",highLabel:v="100"}){const b=r===90||r===270,{fontSize:E,endFontSize:M,centerInset:D}=ub(c,f,s,b,m);let I,Z;r===0?(I={left:0,top:0,bottom:0,width:`${o}%`},Z={left:0,top:0}):r===180?(I={right:0,top:0,bottom:0,width:`${o}%`},Z={right:0,top:0}):r===90?(I={left:0,right:0,bottom:0,height:`${o}%`},Z={left:0,bottom:0}):(I={left:0,right:0,top:0,height:`${o}%`},Z={left:0,top:0});const le=L=>u.jsx(Sb,{name:c,vertical:b,rotation:r,color:L,fontSize:E,endFontSize:M,centerInset:D,lowLabel:g,highLabel:v,showEnds:m});return u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{position:"absolute",left:0,top:0,width:`${f}px`,height:`${s}px`},children:le("var(--red)")}),u.jsx("div",{style:{position:"absolute",background:_,overflow:"hidden",...I},children:u.jsx("div",{style:{position:"absolute",width:`${f}px`,height:`${s}px`,...Z},children:le("var(--white)")})})]})}function Eb({control:c,disabled:r,latestValue:f,onSlider:s,width:o,height:m}){const _=X.useRef(null),g=c.sliderMin??0,v=c.sliderMax??100,[b,E]=X.useState(()=>f===void 0?qh(c.sliderRecenter??"none"):Xh(f,g,v)),M=X.useRef(null),D=c.rotation;X.useEffect(()=>{f!==void 0&&(E(Xh(f,g,v)),M.current=f)},[f,g,v]);function I(U){const pe=_.current;if(!pe)return 0;const ce=pe.getBoundingClientRect();let Ee;return D===0?Ee=(U.clientX-ce.left)/ce.width:D===180?Ee=1-(U.clientX-ce.left)/ce.width:D===90?Ee=1-(U.clientY-ce.top)/ce.height:Ee=(U.clientY-ce.top)/ce.height,Math.max(0,Math.min(1,Ee))}function Z(U){r||le(I(U))}function le(U){const pe=Math.round(U*100),ce=Math.round(g+(v-g)*U);E(pe),ce!==M.current&&(M.current=ce,s(c.name,ce))}function L(){const U=c.sliderRecenter??"none";r||U==="none"||le(qh(U)/100)}return u.jsx("div",{ref:_,className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",touchAction:"none"},onPointerDown:U=>{r||(U.preventDefault(),U.currentTarget.setPointerCapture(U.pointerId),Z(U))},onPointerMove:U=>{U.buttons!==0&&Z(U)},onPointerUp:L,onPointerCancel:L,onLostPointerCapture:L,children:u.jsx(_p,{name:c.name,rotation:D,width:o,height:m,value:b,showEnds:!0,lowLabel:String(g),highLabel:String(v)})})}function qh(c){return c==="bottom"?0:c==="top"?100:c==="middle"?50:0}function Xh(c,r,f){return f===r?0:Math.max(0,Math.min(100,Math.round((c-r)/(f-r)*100)))}const wb={button:"Knapper",slider:"Slidere",toggle:"Toggleknapper",radar:"Radar",text:"Tekstfelter"},Nb=["button","slider","toggle","radar","text"];function Tb({unplaced:c,onAdd:r,onClose:f}){const s=X.useMemo(()=>Nb.filter(g=>c.some(v=>v.type===g)),[c]),[o,m]=X.useState(s[0]??"button"),_=c.filter(g=>g.type===o);return X.useEffect(()=>{s.length>0&&!s.includes(o)&&m(s[0])},[s,o]),u.jsxs(pt,{title:"Tilføj kontrol",onClose:f,children:[s.length>1&&u.jsx("div",{className:"segmented add-modal-tabs",children:s.map(g=>u.jsx("button",{type:"button",className:o===g?"active":"",onClick:()=>m(g),children:wb[g]},g))}),u.jsx("div",{className:"add-lists",children:s.length===0?u.jsx("div",{className:"device-list-empty",children:"Alle kontroller er allerede placeret."}):_.map(g=>u.jsxs("button",{type:"button",className:"add-entry",onClick:()=>r(g.name),children:[u.jsx("span",{children:g.name}),u.jsx("span",{className:"iconbtn",children:u.jsx(jt,{name:"plus",size:22})})]},g.name))})]})}function gp(c){const[r,f]=X.useState({w:0,h:0}),s=X.useRef(null),o=X.useRef(null);return X.useLayoutEffect(()=>{var v;const m=c.current;if(s.current===m)return;if((v=o.current)==null||v.disconnect(),o.current=null,s.current=m,!m){f(b=>b.w===0&&b.h===0?b:{w:0,h:0});return}const _=()=>{const b={w:m.clientWidth,h:m.clientHeight};f(E=>E.w===b.w&&E.h===b.h?E:b)};_();const g=new ResizeObserver(_);g.observe(m),o.current=g}),X.useEffect(()=>()=>{var m;(m=o.current)==null||m.disconnect(),o.current=null,s.current=null},[]),r}function ui(c){return c.centerX2!==null&&c.centerY2!==null&&c.spanX!==null&&c.spanY!==null}const Kh=4,$h=5;function Qh(c){if(!ui(c))return null;const r=c.centerX2/2,f=c.centerY2/2;return{x0:r-c.spanX/2,x1:r+c.spanX/2,y0:f-c.spanY/2,y1:f+c.spanY/2}}function Mb(c,r,f=.02){return c.x0<r.x1-f&&r.x0<c.x1-f&&c.y0<r.y1-f&&r.y0<c.y1-f}function Ih(c,r){const f=Tr(c,r);if(!f||c.spanX===null||c.spanY===null)return c;const s=$s(f.cx,f.cy,c.spanX,c.spanY,r);return{...c,centerX2:s.centerX2,centerY2:s.centerY2}}function Fh(c,r){return Math.max(1,Math.min(r.cols-1,c))}function Zh(c,r){return Math.max(1,Math.min(r.rows-1,c))}function Rb(){const c=W(k=>k.layout),r=W(k=>k.active),f=W(k=>k.saveLayout),s=W(k=>k.setEditMode),o=W(k=>k.askConfirm),m=!!(r!=null&&r.canEdit),[_,g]=X.useState(()=>c.map(k=>({...k}))),[v,b]=X.useState(null),[E,M]=X.useState(!1),[D,I]=X.useState(null),[Z,le]=X.useState(null),[L,U]=X.useState(!1),pe=X.useRef(null),ce=gp(pe),Ee=ce.w>0&&ce.h>0,ue=op(ce.w,ce.h,r==null?void 0:r.gridCols,r==null?void 0:r.gridRows),we=X.useMemo(()=>Ee?Hg(ue):[],[ue,Ee]),ee=_.filter(ui),P=_.filter(k=>!ui(k)),ge=X.useMemo(()=>{const k=new Set;for(let $=0;$<ee.length;$+=1)for(let F=$+1;F<ee.length;F+=1){const K=Qh(ee[$]),Ke=Qh(ee[F]);K&&Ke&&Mb(K,Ke)&&(k.add(ee[$].name),k.add(ee[F].name))}return k},[ee]),_e=ge.size>0,ye=_.find(k=>k.name===v)??null,se=X.useMemo(()=>Jh(_)!==Jh(c),[_,c]),Ge=X.useMemo(()=>{if(!D||!Z)return null;const k=_.find(K=>K.name===D);if(!k||k.spanX===null||k.spanY===null)return null;const $=$s(Z.cx,Z.cy,k.spanX,k.spanY,ue),F=Tr({...k,centerX2:$.centerX2,centerY2:$.centerY2},ue);return F?{name:k.name,rect:F}:null},[_,D,Z,ue]);function Ae(k,$){g(F=>F.map(K=>K.name===k?$(K):K))}function Ie(k,$){k.stopPropagation(),b($.name);const F=Tr($,ue);F&&(I($.name),le({cx:F.cx,cy:F.cy}),k.currentTarget.setPointerCapture(k.pointerId))}function O(k){if(!D)return;const $=pe.current;if(!$)return;const F=$.getBoundingClientRect(),K=$.clientWidth/F.width,Ke=$.clientHeight/F.height;le({cx:Math.max(0,Math.min($.clientWidth,(k.clientX-F.left)*K)),cy:Math.max(0,Math.min($.clientHeight,(k.clientY-F.top)*Ke))})}function H(){if(D&&Z){const k=_.find($=>$.name===D);if(k&&k.spanX!==null&&k.spanY!==null){const $=$s(Z.cx,Z.cy,k.spanX,k.spanY,ue);Ae(D,F=>({...F,centerX2:$.centerX2,centerY2:$.centerY2}))}}I(null),le(null)}function ae(k){Ae(k,$=>$.spanX===null||$.spanY===null?{...$,rotation:($.rotation+270)%360}:Ih({...$,rotation:($.rotation+270)%360,spanX:Fh($.spanY,ue),spanY:Zh($.spanX,ue)},ue))}function xe(k,$,F){Ae(k,K=>{if(K.spanX===null||K.spanY===null)return K;const Ke=$==="x"?Fh(K.spanX+F,ue):K.spanX,Le=$==="y"?Zh(K.spanY+F,ue):K.spanY;return Ih({...K,spanX:Ke,spanY:Le},ue)})}function fe(k){Ae(k,$=>({...$,centerX2:null,centerY2:null,spanX:null,spanY:null,rotation:0})),b(null)}function S(k){M(!1);const $=_.find(K=>K.name===k);if(!$)return;const F=$s(ue.areaW/2,ue.areaH/2,Kh,$h,ue);Ae(k,()=>({...$,spanX:Kh,spanY:$h,rotation:0,centerX2:F.centerX2,centerY2:F.centerY2})),b(k)}async function z(){_e||(U(!0),await f(_),U(!1))}function J(){if(!se){s(!1);return}o({title:"Kassér ændringer",message:"Vil du forlade redigering og kassere dine layout-ændringer?",confirmLabel:"Kassér",onConfirm:()=>s(!1)})}return u.jsxs("div",{className:"edit-view",children:[u.jsx("div",{className:"edit-band edit-toolbar-band",children:ye&&ui(ye)?u.jsxs("div",{className:"edit-toolbar",onPointerDown:k=>k.stopPropagation(),children:[u.jsx(Sr,{label:"⟲",title:"Roter",onClick:()=>ae(ye.name)}),u.jsx(Sr,{label:"W−",title:"Gør smallere",onClick:()=>xe(ye.name,"x",-1),disabled:ye.spanX===null||ye.spanX<=1}),u.jsx(Sr,{label:"W+",title:"Gør bredere",onClick:()=>xe(ye.name,"x",1),disabled:ye.spanX===null||ye.spanX>=ue.cols-1}),u.jsx(Sr,{label:"H−",title:"Gør lavere",onClick:()=>xe(ye.name,"y",-1),disabled:ye.spanY===null||ye.spanY<=1}),u.jsx(Sr,{label:"H+",title:"Gør højere",onClick:()=>xe(ye.name,"y",1),disabled:ye.spanY===null||ye.spanY>=ue.rows-1}),u.jsx("button",{className:"iconbtn",style:{color:"var(--red)"},onClick:()=>fe(ye.name),"aria-label":"Slet",children:u.jsx(jt,{name:"delete",size:24})})]}):u.jsx("span",{className:"edit-hint",children:"Vælg en kontrol for at redigere"})}),u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:"controls-area",ref:pe,style:{touchAction:"none"},onPointerMove:O,onPointerUp:H,onPointerDown:()=>b(null),children:Ee&&u.jsxs(u.Fragment,{children:[u.jsx("svg",{width:ue.areaW,height:ue.areaH,style:{position:"absolute",inset:0,pointerEvents:"none"},children:we.map((k,$)=>u.jsx("circle",{cx:k.x,cy:k.y,r:2.5,fill:"rgba(198,80,78,0.45)"},$))}),Ge&&u.jsx("div",{className:"snap-preview",style:{left:Ge.rect.cx,top:Ge.rect.cy,width:Ge.rect.width,height:Ge.rect.height}}),ee.map(k=>{const $=D===k.name&&Z,F=Tr(k,ue);if(!F)return null;const K=$?Z.cx:F.cx,Ke=$?Z.cy:F.cy,Le={left:K,top:Ke,width:F.width,height:F.height,outline:v===k.name?"3px solid var(--text)":"none",outlineOffset:2};return u.jsx("div",{className:`control ${ge.has(k.name)?"colliding":""}`,style:Le,onPointerDown:rn=>Ie(rn,k),children:k.type==="button"?u.jsx("div",{className:"control-button",style:{width:"100%",height:"100%",display:"grid",placeItems:"center",fontWeight:800,fontSize:Zs(k.name,F.width,F.height)},children:k.name}):k.type==="toggle"?u.jsx("div",{className:"control-toggle on",style:{width:"100%",height:"100%",fontSize:Zs(k.name,F.width,F.height)},children:u.jsx("span",{children:k.name})}):k.type==="radar"?u.jsx(pp,{control:k,pings:[],width:F.width,height:F.height,preview:!0}):k.type==="text"?u.jsx(hp,{message:k.name,width:F.width,height:F.height}):u.jsx("div",{className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:u.jsx(_p,{name:k.name,rotation:k.rotation,width:F.width,height:F.height,value:50,showEnds:!0,lowLabel:String(k.sliderMin??0),highLabel:String(k.sliderMax??100),fillColor:ge.has(k.name)?"var(--disabled)":"var(--red)"})})},k.name)}),m&&u.jsx("button",{type:"button",className:"fab",style:{width:52,height:52,right:12,bottom:12},onPointerDown:k=>k.stopPropagation(),onClick:()=>M(!0),"aria-label":"Tilføj kontrol",children:u.jsx(jt,{name:"plus",size:24})}),L&&u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})]})})}),u.jsxs("div",{className:"edit-band edit-actions-band",children:[u.jsx("button",{className:"btn btn-outline",style:{flex:1},type:"button",onClick:J,disabled:L,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary",style:{flex:1},type:"button",onClick:z,disabled:_e||L,children:L?"Gemmer...":"Gem"})]}),E&&u.jsx(Tb,{unplaced:P,onAdd:S,onClose:()=>M(!1)})]})}function Jh(c){return JSON.stringify(c.map(r=>({type:r.type,name:r.name,centerX2:r.centerX2,centerY2:r.centerY2,spanX:r.spanX,spanY:r.spanY,rotation:r.rotation})))}function Sr({label:c,title:r,disabled:f,onClick:s}){return u.jsx("button",{type:"button","aria-label":r,title:r,disabled:f,onClick:s,style:{minWidth:38,height:38,borderRadius:12,background:f?"var(--grey)":"var(--red)",color:"var(--white)",fontWeight:800,fontSize:14,padding:"0 8px"},children:c})}function jb(){const c=W(L=>L.layout),r=W(L=>L.editMode),f=W(L=>L.active),s=W(L=>L.sliderValues),o=W(L=>L.toggleValues),m=W(L=>L.radarPings),_=W(L=>L.textValues),g=W(L=>L.toggleSideMenu),v=W(L=>L.sendButton),b=W(L=>L.sendSlider),E=W(L=>L.sendToggle),M=X.useRef(null),D=gp(M),I=op(D.w,D.h,f==null?void 0:f.gridCols,f==null?void 0:f.gridRows),Z=D.w>0&&D.h>0,le=c.filter(ui);return u.jsxs("div",{className:"screen control-screen",children:[u.jsx(Gu,{title:"Kontrol Panel",onMenu:()=>g()}),r?u.jsx(Rb,{}):u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:"controls-area",ref:M,children:Z?le.map(L=>{const U=Tr(L,I);return U?u.jsx(fb,{control:L,rect:U,disabled:!1,latestValue:L.type==="slider"?s[L.name]:void 0,toggleValue:L.type==="toggle"?o[L.name]:void 0,radarPings:L.type==="radar"?m[L.name]:void 0,textValue:L.type==="text"?_[L.name]:void 0,onButton:v,onSlider:b,onToggle:E},L.name):null}):u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})})})]})}const Ab="",kb="",Ph="",ha="";function Nu(c){return new Promise(r=>setTimeout(r,c))}class Db{constructor(r){this.transport=r}async interrupt(){await this.transport.write(Ph),await Nu(80),await this.transport.write(Ph)}async friendlyRepl(){await this.transport.write(kb)}async softReset(){await this.transport.write(ha)}async stop(){await this.interrupt(),await this.friendlyRepl().catch(()=>{})}async runFile(r){await this.interrupt(),await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(`exec(open(${JSON.stringify(r)}).read())`)}async enterRawRepl(r=2500){if(await this.interrupt(),await Nu(80),await this.transport.write(`\r
`),await Nu(40),!(await this.collectUntil(async()=>{await this.transport.write(Ab)},s=>s.includes("raw REPL")||s.includes("raw REPL; CTRL-B to exit"),r)).includes("raw REPL"))throw new Error("Kunne ikke skifte til MicroPython raw REPL.")}async exec(r,f=6e3){await this.enterRawRepl();const s=await this.collectUntil(async()=>{await this.transport.write(r),r.endsWith(`
`)||await this.transport.write(`
`),await this.transport.write(ha)},o=>o.includes(`${ha}${ha}`)||o.includes(`${ha}>`),f);return await this.friendlyRepl().catch(()=>{}),Ob(s)}collectUntil(r,f,s){return new Promise((o,m)=>{let _="",g=null;const v=setTimeout(()=>{g==null||g(),m(new Error("Timeout ved USB REPL kommando."))},s);g=this.transport.addDataListener(b=>{_+=b,f(_)&&(clearTimeout(v),g==null||g(),o(_))}),r().catch(b=>{clearTimeout(v),g==null||g(),m(b instanceof Error?b:new Error("USB REPL kommando fejlede."))})})}}function Ob(c){const r=c.indexOf("OK"),f=c.indexOf(ha,r>=0?r:0),s=f>=0?c.indexOf(ha,f+1):-1;if(r<0||f<0)return{output:c.trim(),error:"",raw:c};const o=c.slice(r+2,f).replace(/^\r?\n/,"").trimEnd(),m=s>=0?c.slice(f+1,s).trim():"";return{output:o,error:m,raw:c}}const Cb=[{version:"MicroPython v1.28.0",date:"2026-04-06",stamp:"20260406",tag:"v1.28.0"},{version:"MicroPython v1.27.0",date:"2025-12-09",stamp:"20251209",tag:"v1.27.0"},{version:"MicroPython v1.26.1",date:"2025-09-11",stamp:"20250911",tag:"v1.26.1"},{version:"MicroPython v1.26.0",date:"2025-08-09",stamp:"20250809",tag:"v1.26.0"},{version:"MicroPython v1.25.0",date:"2025-04-15",stamp:"20250415",tag:"v1.25.0"},{version:"MicroPython v1.24.1",date:"2024-11-29",stamp:"20241129",tag:"v1.24.1"},{version:"MicroPython v1.24.0",date:"2024-10-25",stamp:"20241025",tag:"v1.24.0"},{version:"MicroPython v1.23.0",date:"2024-06-02",stamp:"20240602",tag:"v1.23.0"},{version:"MicroPython v1.22.2",date:"2024-02-22",stamp:"20240222",tag:"v1.22.2"},{version:"MicroPython v1.22.1",date:"2024-01-05",stamp:"20240105",tag:"v1.22.1"}],zb=[{board:"Raspberry Pi Pico",firmwareName:"RPI_PICO"},{board:"Raspberry Pi Pico W",firmwareName:"RPI_PICO_W"}],Hl=zb.flatMap(({board:c,firmwareName:r})=>Cb.map(({version:f,date:s,stamp:o,tag:m})=>{const _=`${r}-${o}-${m}.uf2`;return{board:c,version:f,date:s,fileName:_,url:`https://micropython.org/resources/firmware/${_}`}})),Tu=512;function el(c){return JSON.stringify(c)}function Bb(c){return`bytes.fromhex(${JSON.stringify([...c].map(r=>r.toString(16).padStart(2,"0")).join(""))})`}function Lb(c,r){return`${c==="/"?"":c.replace(/\/$/,"")}/${r}`}class Ub{constructor(r){this.repl=r}async list(r="/"){const f=`
import os
base = ${el(r)}
for name in os.listdir(base):
    p = (${el(r)}.rstrip('/') + '/' + name) if ${el(r)} != '/' else '/' + name
    try:
        st = os.stat(p)
        mode = st[0]
        kind = 'dir' if (mode & 0x4000) else 'file'
        size = st[6]
    except Exception:
        kind = 'unknown'
        size = -1
    print(name + '\\t' + kind + '\\t' + str(size))
`,s=await this.repl.exec(f);if(s.error)throw new Error(s.error);return s.output.split(/\r?\n/).map(o=>o.trim()).filter(Boolean).map(o=>{const[m,_,g]=o.split("	"),v=_==="dir"||_==="file"?_:"unknown",b=parseInt(g??"",10);return{name:m,path:Lb(r,m),type:v,...Number.isFinite(b)&&b>=0?{size:b}:{}}})}async readText(r){const f=`
import sys
with open(${el(r)}, 'rb') as f:
    while True:
        b = f.read(${Tu})
        if not b:
            break
        print(b.hex())
`,s=await this.repl.exec(f,1e4);if(s.error)throw new Error(s.error);const o=s.output.replace(/\s+/g,"");return new TextDecoder().decode(Hb(o))}async writeText(r,f,s){const o=new TextEncoder().encode(f);if(s==null||s(5,"Klargør fil..."),await this.repl.exec(`open(${el(r)}, 'wb').close()`),o.length===0){s==null||s(100,"Gemt på Pico");return}for(let m=0;m<o.length;m+=Tu){const _=o.slice(m,m+Tu),g=`
with open(${el(r)}, 'ab') as f:
    f.write(${Bb(_)})
`,v=await this.repl.exec(g,1e4);if(v.error)throw new Error(v.error);const b=Math.min(m+_.length,o.length);s==null||s(10+Math.round(b/o.length*85),`Gemmer ${b}/${o.length} bytes...`)}s==null||s(100,"Gemt på Pico")}async replaceTextSafely(r,f,s,o={}){const m=`${r}.tmp`;if(await this.writeText(m,f,(g,v)=>s==null?void 0:s(Math.min(70,g*.7),v)),s==null||s(78,"Verificerer fil..."),await this.readText(m)!==f)throw await this.delete(m).catch(()=>{}),new Error(`Verificering fejlede for ${r}.`);if(s==null||s(88,"Udskifter fil..."),o.createBackup){const g=await this.nextBackupPath(r).catch(()=>`${r}.backup`);await this.rename(r,g).catch(()=>{})}else await this.delete(r).catch(()=>{});await this.rename(m,r),s==null||s(100,"Installeret på Pico")}async delete(r){const f=await this.repl.exec(`
import os
os.remove(${el(r)})
`);if(f.error)throw new Error(f.error)}async nextBackupPath(r){const f=await this.list("/"),s=new Set(f.map(M=>M.path.toLowerCase())),o=r.replace(/\\/g,"/"),m=o.lastIndexOf("/"),_=m>=0?o.slice(0,m+1):"/",g=m>=0?o.slice(m+1):o.replace(/^\/+/,""),v=g.lastIndexOf("."),b=v>0?g.slice(0,v):g,E=v>0?g.slice(v):"";for(let M=1;M<1e3;M+=1){const D=`${_}${b}_backup${M}${E}`;if(!s.has(D.toLowerCase()))return D}return`${_}${b}_backup${Date.now()}${E}`}async rename(r,f){const s=await this.repl.exec(`
import os
os.rename(${el(r)}, ${el(f)})
`);if(s.error)throw new Error(s.error)}}function Hb(c){const r=new Uint8Array(Math.floor(c.length/2));for(let f=0;f<r.length;f+=1)r[f]=parseInt(c.slice(f*2,f*2+2),16);return r}const Gb=`import ubluetooth\r
import utime as time\r
from micropython import const\r
import struct
import os
import ubinascii
import machine
\r
__version__ = '0.6.0'\r
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
ALLOWED_COMMAND_TYPES  = ["button", "slider", "toggle", "radar", "text"]
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
      - 'who_are_you'                    -> 'unowned' | 'owned,<ownerID>,<iconID>,<canConnect>,<canEdit>,<ownerName>'\r
      - 'ACK:ownership'                  -> 'READY:permission'
      - 'request_permission,<id>,<name>' -> 'perm,<canConnect>,<canEdit>'\r
                                            (denies + disconnects if private)\r
      - 'ACK:permission'                 -> (handshake complete)\r
      - 'create,<ownerID>,<ownerName>,<iconID>,<canConnect>,<canEdit>' -> 'ACK:create'\r
\r
    Layout streaming:\r
      - 'request'  -> device streams '#VERSION,1', control lines, '__END__'\r
      - 'update'   -> 'ACK:update', then app streams 'update,...' lines + '__END__';\r
                      device saves and replies 'ACK: ...' + 'LAYOUT_SAVED'\r
\r
    Control commands (fire-and-forget, routed to on_button/on_slider/on_toggle;
    on_write is still available as a raw fallback):
      - 'button,<NAME>' / 'slider,<NAME>:<VALUE>' / 'toggle,<NAME>:<0|1>'

    Telemetry (device -> app, optional from main.py):
      - 'radar,<NAME>,<ANGLE_DEGREES>,<DISTANCE_CM>'
      - 'text,<NAME>,<MESSAGE>'
      - 'toggle_state,<NAME>,<0|1>'
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
    def __init__(self, base_controls=None, device_base_name="Device", callbacks=None):
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
        self.grid_cols = 11\r
        self.grid_rows = 31\r
\r
        # ---- Session flags\r
        self._session_can_edit = False\r
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
        # ---- Callbacks for app-level logic
        self._on_write_callback = None
        self._on_button_callback = None
        self._on_slider_callback = None
        self._on_toggle_callback = None
        self._on_connect_callback = None
        self._on_disconnect_callback = None
        self._auto_bind_main_callbacks(callbacks)

        # ---- Start up
        self._register_services()
        self.load_settings_from_file()
        self.load_layout_from_file()
        self._advertise()
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
        """Build a list of control dicts from tuples like [("button","A"),("slider","B")]."""
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
            if ctrl_type == "slider":
                ctrl["min"] = 0
                ctrl["max"] = 100
                ctrl["recenter"] = "none"
                if len(spec) >= 4:\r
                    try:\r
                        ctrl["min"] = int(spec[2])\r
                        ctrl["max"] = int(spec[3])\r
                    except:\r
                        ctrl["min"] = 0\r
                        ctrl["max"] = 100\r
                if ctrl["max"] == ctrl["min"]:\r
                    ctrl["max"] = ctrl["min"] + 1\r
                if len(spec) >= 5 and spec[4] in SLIDER_RECENTER_MODES:
                    ctrl["recenter"] = spec[4]
            elif ctrl_type == "toggle":
                ctrl["initial"] = 0
                if len(spec) >= 3:
                    try:
                        ctrl["initial"] = 1 if int(spec[2]) == 1 else 0
                    except:
                        ctrl["initial"] = 0
            elif ctrl_type == "radar":
                ctrl["minAngle"] = 0
                ctrl["maxAngle"] = 180
                ctrl["maxDistance"] = 200
                ctrl["fadeMs"] = 1200
                if len(spec) >= 4:
                    try:
                        ctrl["minAngle"] = int(float(spec[2]))
                        ctrl["maxAngle"] = int(float(spec[3]))
                    except:
                        ctrl["minAngle"] = 0
                        ctrl["maxAngle"] = 180
                if len(spec) >= 5:
                    try:
                        ctrl["maxDistance"] = max(1, int(float(spec[4])))
                    except:
                        ctrl["maxDistance"] = 200
                if len(spec) >= 6:
                    try:
                        ctrl["fadeMs"] = max(120, int(float(spec[5])))
                    except:
                        ctrl["fadeMs"] = 1200
            result.append(ctrl)
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
           canOthersConnect,<0/1> / canOthersEdit,<0/1>\r
        """\r
        try:\r
            with open(self._settings_file, "r") as f:\r
                lines = [l.strip() for l in f.readlines() if l.strip()]\r
\r
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
        except Exception as e:\r
            print("Settings not found or invalid. Using defaults. Err:", e)\r
            self.owner_id = None\r
            self.owner_name = None\r
            self.icon_id = 0\r
            self.can_others_connect = 0\r
            self.can_others_edit = 0\r
            self.save_settings_to_file("", "", 0, 0, 0)\r
\r
    def save_settings_to_file(self, owner_id, owner_name, icon_id, can_connect, can_edit,\r
                              grid_cols=None, grid_rows=None):\r
        # Enforce rule: if connect==0 => edit==0\r
        if not can_connect:\r
            can_edit = 0\r
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
                f.write("gridCols,{}\\n".format(grid_cols))\r
                f.write("gridRows,{}\\n".format(grid_rows))\r
            self.owner_id = owner_id if owner_id else None\r
            self.owner_name = owner_name if owner_name else None\r
            self.icon_id = int(icon_id)\r
            self.can_others_connect = 1 if can_connect else 0\r
            self.can_others_edit = 1 if can_edit else 0\r
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
                    if ctrl["type"] == "slider":
                        mn = ctrl.get("min", 0)
                        mx = ctrl.get("max", 100)
                        recenter = ctrl.get("recenter", "none")
                        f.write("{},{},{},{},{},{},{},{},{},{}\\n".format(
                            ctrl['type'], ctrl['name'], x, y, w, h, r, mn, mx, recenter))
                    elif ctrl["type"] == "toggle":
                        initial = 1 if ctrl.get("initial", 0) == 1 else 0
                        f.write("{},{},{},{},{},{},{},{}\\n".format(
                            ctrl['type'], ctrl['name'], x, y, w, h, r, initial))
                    elif ctrl["type"] == "radar":
                        f.write("{},{},{},{},{},{},{},{},{},{},{}\\n".format(
                            ctrl['type'], ctrl['name'], x, y, w, h, r,
                            ctrl.get("minAngle", 0),
                            ctrl.get("maxAngle", 180),
                            ctrl.get("maxDistance", 200),
                            ctrl.get("fadeMs", 1200)))
                    else:
                        f.write("{},{},{},{},{},{},{}\\n".format(ctrl['type'], ctrl['name'], x, y, w, h, r))
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
                if ctrl_type == "slider":
                    override["min"] = 0
                    override["max"] = 100
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
                        if parts[9] in SLIDER_RECENTER_MODES:
                            override["recenter"] = parts[9]
                elif ctrl_type == "toggle":
                    override["initial"] = 0
                    if len(parts) >= 8:
                        try:
                            override["initial"] = 1 if int(float(parts[7])) == 1 else 0
                        except:
                            override["initial"] = 0
                elif ctrl_type == "radar":
                    override["minAngle"] = 0
                    override["maxAngle"] = 180
                    override["maxDistance"] = 200
                    override["fadeMs"] = 1200
                    if len(parts) >= 11:
                        try:
                            override["minAngle"] = int(float(parts[7]))
                            override["maxAngle"] = int(float(parts[8]))
                            override["maxDistance"] = max(1, int(float(parts[9])))
                            override["fadeMs"] = max(120, int(float(parts[10])))
                        except:
                            override["minAngle"] = 0
                            override["maxAngle"] = 180
                            override["maxDistance"] = 200
                            override["fadeMs"] = 1200
                overrides[name] = override
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
    def send_with_retry(self, msg, max_attempts=3, chunk_size=20, chunk_gap_ms=3):
        """Send an important protocol message, retrying on failure."""
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
        if msg == "ack:prep" or msg == "ack:prep,{}".format(self._out_reliable_stream_id):
            self._flush_pending_reliable_stream()
            return
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
        elif msg == "request":
            self.send_layout_to_web()
\r
        elif msg.startswith("fs_list"):
            self._handle_fs_list(msg)

        elif msg == "fs_capabilities":
            self._handle_fs_capabilities()

        elif msg.startswith("fs_read_stream,"):
            self._handle_fs_read_stream(msg)

        elif msg.startswith("fs_read_page,"):
            self._handle_fs_read_page(msg)
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
                self._send_reliable_stream(["owned,{},{},{},{},{}".format(\r
                    self.owner_id,\r
                    int(self.icon_id),\r
                    int(self.can_others_connect),\r
                    int(self.can_others_edit),\r
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
                        self.grid_cols,\r
                        self.grid_rows,\r
                    )\r
                self._session_can_edit = True\r
                self._session_is_owner = True\r
                self._send_reliable_stream(["perm,1,1"])\r
            else:\r
                self._session_is_owner = False\r
                if self.can_others_connect == 1:\r
                    self._session_can_edit = True if self.can_others_edit == 1 else False\r
                    self._send_reliable_stream(["perm,1,{}".format(1 if self._session_can_edit else 0)])\r
                else:\r
                    self._session_can_edit = False\r
                    self._send_reliable_stream(["perm,0,0"])\r
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
            # create,<ownerID>,<ownerName>,<iconID>,<canConnect>,<canEdit>[,<cols>,<rows>]\r
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
\r
            grid_cols = self.grid_cols\r
            grid_rows = self.grid_rows\r
            if len(parts) >= 8:\r
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
\r
            self.save_settings_to_file(owner_id, owner_name, icon_id, can_connect, can_edit,\r
                                       grid_cols, grid_rows)\r
            self._session_can_edit = True\r
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
            try:\r
                grid_cols = int(parts[4])\r
            except:\r
                grid_cols = self.grid_cols\r
            try:\r
                grid_rows = int(parts[5])\r
            except:\r
                grid_rows = self.grid_rows\r
            owner_name = self.owner_name or ""\r
            if len(parts) >= 7:\r
                owner_name = self._protocol_field(parts[6]) or owner_name\r
\r
            if can_connect == 0:\r
                can_edit = 0\r
\r
            self.save_settings_to_file(\r
                self.owner_id or "",\r
                owner_name,\r
                icon_id,\r
                can_connect,\r
                can_edit,\r
                grid_cols,\r
                grid_rows,\r
            )\r
            try:\r
                self._advertise()\r
            except Exception:\r
                pass\r
            self._send_reliable_stream(["ACK:settings_update"])\r
\r
        else:
            self._dispatch_app_command(msg)

    def _number_value(self, value):
        try:
            n = float(value)
            if n == int(n):
                return int(n)
            return n
        except:
            return value

    def _auto_bind_main_callback(self, function_name, callback_attr, callbacks=None):
        try:
            callback = None
            if callbacks:
                callback = callbacks.get(function_name)
            if callable(callback):
                setattr(self, callback_attr, callback)
        except Exception as e:
            print("Auto callback binding failed for", function_name, e)

    def _auto_bind_main_callbacks(self, callbacks=None):
        """Bind callbacks passed from main.py with callbacks=globals()."""
        self._auto_bind_main_callback("on_write", "_on_write_callback", callbacks)
        self._auto_bind_main_callback("on_button", "_on_button_callback", callbacks)
        self._auto_bind_main_callback("on_slider", "_on_slider_callback", callbacks)
        self._auto_bind_main_callback("on_toggle", "_on_toggle_callback", callbacks)
        self._auto_bind_main_callback("on_connect", "_on_connect_callback", callbacks)
        self._auto_bind_main_callback("on_disconnect", "_on_disconnect_callback", callbacks)

    def _dispatch_app_command(self, msg):
        """Route app controls to friendly callbacks, with on_write as a raw fallback."""
        try:
            command_type, payload = msg.split(",", 1)
        except:
            print("Unknown app message:", msg)
            if self._on_write_callback:
                try:
                    self._on_write_callback(msg)
                except Exception as e:
                    print("Write callback error:", e)
            return

        try:
            if command_type == "button":
                if self._on_button_callback:
                    self._on_button_callback(payload)
                    return

            elif command_type == "slider":
                try:
                    name, value_s = payload.split(":", 1)
                except:
                    print("Bad slider payload:", payload)
                    return
                if self._on_slider_callback:
                    self._on_slider_callback(name, self._number_value(value_s))
                    return

            elif command_type == "toggle":
                try:
                    name, value_s = payload.split(":", 1)
                except:
                    print("Bad toggle payload:", payload)
                    return
                if self._on_toggle_callback:
                    self._on_toggle_callback(name, int(float(value_s)) == 1)
                    return

        except Exception as e:
            print("Control callback error:", e)
            return

        if self._on_write_callback:
            try:
                self._on_write_callback(msg)
            except Exception as e:
                print("Write callback error:", e)
        else:
            print("Unhandled app command:", msg)
\r
    def send_layout_to_web(self):
        """Build and send layout payload once per request, ending with '__END__'."""
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
            if ctrl["type"] == "slider":
                mn = ctrl.get("min", 0)
                mx = ctrl.get("max", 100)
                recenter = ctrl.get("recenter", "none")
                lines.append("{},{},{},{},{},{},{},{},{},{}".format(
                    ctrl['type'], ctrl['name'], x, y, w, h, r, mn, mx, recenter))
            elif ctrl["type"] == "toggle":
                initial = 1 if ctrl.get("initial", 0) == 1 else 0
                lines.append("{},{},{},{},{},{},{},{}".format(
                    ctrl['type'], ctrl['name'], x, y, w, h, r, initial))
            elif ctrl["type"] == "radar":
                lines.append("{},{},{},{},{},{},{},{},{},{},{}".format(
                    ctrl['type'], ctrl['name'], x, y, w, h, r,
                    ctrl.get("minAngle", 0),
                    ctrl.get("maxAngle", 180),
                    ctrl.get("maxDistance", 200),
                    ctrl.get("fadeMs", 1200)))
            else:
                lines.append("{},{},{},{},{},{},{}".format(ctrl['type'], ctrl['name'], x, y, w, h, r))
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
                if ctrl_type == "slider" and len(parts) >= 10:
                    try:
                        override["min"] = int(float(parts[7]))
                        override["max"] = int(float(parts[8]))\r
                    except:\r
                        pass\r
                    if parts[9] in SLIDER_RECENTER_MODES:\r
                        override["recenter"] = parts[9]\r
                    if override.get("max") == override.get("min"):
                        override["max"] = override["min"] + 1
                elif ctrl_type == "toggle" and len(parts) >= 8:
                    try:
                        override["initial"] = 1 if int(float(parts[7])) == 1 else 0
                    except:
                        override["initial"] = 0
                elif ctrl_type == "radar" and len(parts) >= 11:
                    try:
                        override["minAngle"] = int(float(parts[7]))
                        override["maxAngle"] = int(float(parts[8]))
                        override["maxDistance"] = max(1, int(float(parts[9])))
                        override["fadeMs"] = max(120, int(float(parts[10])))
                    except:
                        pass
                overrides[name] = override
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
    def _handle_fs_list(self, msg):
        parts = msg.split(",", 1)
        base = self._clean_fs_path(parts[1] if len(parts) > 1 else "/")
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
        except Exception as e:
            self._send_reliable_stream(["ERR: fs_list failed {}".format(e), "__END__"])

    def _handle_fs_capabilities(self):
        self._send_reliable_stream([
            "fs_capabilities,version,{},page_read,1,max_page,192,stream_read,1,stream_chunk,128".format(__version__),
            "__END__",
        ])

    def _handle_fs_read_stream(self, msg):
        parts = msg.split(",", 2)
        if len(parts) < 2:
            self._send_reliable_stream(["ERR: Bad fs_read_stream", "__END__"])
            return
        path = self._clean_fs_path(parts[1])
        if not path:
            self._send_reliable_stream(["ERR: Bad path", "__END__"])
            return
        try:
            chunk_size = 128
            if len(parts) >= 3:
                chunk_size = max(16, min(192, int(parts[2])))
        except:
            self._send_reliable_stream(["ERR: Bad fs_read_stream chunk", "__END__"])
            return
        try:
            open_path = self._path_for_open(path)
            total = os.stat(open_path)[6]
            checksum = 0
            offset = 0
            lines = ["fs_stream_begin,{},{},{}".format(path, total, chunk_size)]
            with open(open_path, "rb") as f:
                while True:
                    chunk = f.read(chunk_size)
                    if not chunk:
                        break
                    for b in chunk:
                        checksum = (checksum + b) & 0xFFFFFFFF
                    hex_data = ubinascii.hexlify(chunk).decode()
                    lines.append("fs_stream_chunk,{},{}".format(offset, hex_data))
                    offset += len(chunk)
            lines.append("fs_stream_end,{},{},{}".format(path, total, checksum))
            lines.append("__END__")
            self._send_reliable_stream(lines)
        except Exception as e:
            self._send_reliable_stream(["ERR: fs_read_stream failed {}".format(e), "__END__"])

    def _handle_fs_read_page(self, msg):
        parts = msg.split(",", 3)
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
        if not self._session_can_edit:\r
            self._send_reliable_stream(["ERR: Edit not permitted"])\r
            return\r
        path = self._clean_fs_path(msg.split(",", 1)[1])\r
        if not path:\r
            self._send_reliable_stream(["ERR: Bad path"])\r
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
    def _finish_file_write(self):
        try:
            try:
                os.remove(self._file_write_path)
            except:
                pass
            os.rename(self._file_write_tmp, self._file_write_path)
            self._send_reliable_stream(["ACK:fs_write_done"])\r
        except Exception as e:\r
            self._send_reliable_stream(["ERR: fs_write_end failed {}".format(e)])\r
        finally:\r
            self._expecting_file_write = False\r
            self._file_write_path = None\r
            self._file_write_tmp = None\r
\r
    def _handle_fs_delete(self, msg):
        if not self._session_can_edit:
            self._send_reliable_stream(["ERR: Edit not permitted"])
            return
        path = self._clean_fs_path(msg.split(",", 1)[1])\r
        if path in ("/BLEPeripheral.py", "/main.py"):\r
            self._send_reliable_stream(["ERR: Protected runtime file"])\r
            return\r
        try:\r
            os.remove(self._path_for_open(path))\r
            self._send_reliable_stream(["ACK:fs_delete"])\r
        except Exception as e:
            self._send_reliable_stream(["ERR: fs_delete failed {}".format(e)])

    # -------------------- External hooks --------------------
    def send_radar(self, name, angle, distance_cm):
        """Send one radar telemetry sample to the app: radar,<NAME>,<ANGLE>,<DISTANCE_CM>."""
        if not self.connected:
            return
        try:
            clean_name = self._protocol_field(name)
            angle_value = int(float(angle))
            distance_value = round(float(distance_cm), 1)
            self.send_with_retry(
                "radar,{},{},{}\\n".format(clean_name, angle_value, distance_value),
                max_attempts=1,
            )
        except Exception as e:
            print("send_radar failed:", e)

    def send_toggle_state(self, name, value):
        """Send current toggle state to the app: toggle_state,<NAME>,<0|1>."""
        if not self.connected:
            return
        try:
            clean_name = self._protocol_field(name)
            state = 1 if value else 0
            self.send_with_retry(
                "toggle_state,{},{:d}\\n".format(clean_name, state),
                max_attempts=1,
            )
        except Exception as e:
            print("send_toggle_state failed:", e)

    def send_text(self, name, message):
        """Send text to the app: text,<NAME>,<MESSAGE>."""
        if not self.connected:
            return
        try:
            clean_name = self._protocol_field(name)
            clean_message = str(message).replace("\\r", " ").replace("\\n", " ").strip()
            self.send_with_retry(
                "text,{},{}\\n".format(clean_name, clean_message),
                max_attempts=1,
            )
        except Exception as e:
            print("send_text failed:", e)

    def on_write(self, callback):
        self._on_write_callback = callback

    def on_button(self, callback):
        self._on_button_callback = callback

    def on_slider(self, callback):
        self._on_slider_callback = callback

    def on_toggle(self, callback):
        self._on_toggle_callback = callback

    def on_connect(self, callback):
        self._on_connect_callback = callback
\r
    def on_disconnect(self, callback):\r
        self._on_disconnect_callback = callback\r
`,Vb=`from machine import Pin, time_pulse_us\r
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
`,qb=`import utime as time
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

# Appen viser to knapper og en slider.
BluetoothControls = (
    ('button', 'TAEND'),
    ('button', 'SLUK'),
    ('slider', 'LYS', 0, 100, 'none'),
)


def on_button(name):
    """Kører når der trykkes på en knap i appen."""

    if name == 'TAEND':
        neopixels.fill(FARVE)
        neopixels.show()
        print('Lyset er tændt')

    elif name == 'SLUK':
        neopixels.clear()
        neopixels.show()
        print('Lyset er slukket')


def on_slider(name, value):
    """Kører når slideren flyttes i appen."""

    if name == 'LYS':
        # Appen sender 0-100. NeoPixel-biblioteket bruger 1-255.
        lysstyrke = int(1 + (int(value) / 100) * 254)

        neopixels.brightness(lysstyrke)
        neopixels.fill(FARVE)
        neopixels.show()

        print('Lysstyrke:', value)


def on_disconnect():
    """Sluk lyset når appen mister forbindelsen."""
    neopixels.clear()
    neopixels.show()


# callbacks=globals() betyder:
# "Brug funktionerne ovenfor, når appen sender noget."
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name='NeoPixel', callbacks=globals())


while True:
    # Programmet skal blive ved med at køre, så appen kan sende kommandoer.
    time.sleep_ms(100)
`,Xb=`# PicoFly.py
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
`,Kb=`import machine\r
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
        self.initPCA()`,$b=`from machine import Pin\r
import utime as time\r
from BLEPeripheral import BLEPeripheral\r
from hcsr04 import HCSR04\r
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
\r
\r
def on_toggle(name, value):
    """Reager på toggle-knapper fra appen."""
    global scan_enabled

    # SCAN-knappen i appen tænder eller slukker radaren.
    if name == 'SCAN':
        scan_enabled = bool(value)
        ble.send_toggle_state('SCAN', scan_enabled)
        print('Scan ->', scan_enabled)
    else:\r
        print('Unknown toggle:', name)\r
\r
\r
def on_connect():
    global scan_enabled, scan_angle, scan_direction

    # Start altid en ny forbindelse med scanning slukket og servoen i midten.
    led.on()
    scan_enabled = False
    scan_angle = SERVO_MIN
    scan_direction = 1
    board.servoWrite(1, 90)\r
    ble.send_toggle_state('SCAN', False)\r
    print('BLE client connected')\r
\r
\r
def on_disconnect():
    global scan_enabled, scan_angle, scan_direction

    # Når appen afbryder, stopper scanningen og servoen sættes i midten.
    led.off()
    scan_enabled = False
    scan_angle = SERVO_MIN
    scan_direction = 1\r
    board.servoWrite(1, 90)\r
    ble.send_toggle_state('SCAN', False)\r
    print('BLE client disconnected')\r


# callbacks=globals() gør, at BLEPeripheral kan finde on_toggle osv.
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name='Radar', callbacks=globals())


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
        scan_direction = -1\r
    elif scan_angle <= SERVO_MIN:\r
        scan_angle = SERVO_MIN\r
        scan_direction = 1\r
`,Qb=`from machine import Pin
import utime as time
from BLEPeripheral import BLEPeripheral


# Appen viser kun et tekstfelt.
BluetoothControls = (
    ('text', 'BESKED'),
)


# LED'en viser, om appen er forbundet.
led = Pin('LED', Pin.OUT)
led.off()


def on_connect():
    """Send den første besked når appen forbinder."""
    led.on()
    ble.send_text('BESKED', 'Hej fra Picoen')
    print('BLE client connected')


def on_disconnect():
    """Sluk LED'en når appen mister forbindelsen."""
    led.off()
    print('BLE client disconnected')


ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name='SendTekst', callbacks=globals())

counter = 0

while True:
    # Send en ny besked med jævne mellemrum, så tekstfeltet er let at teste.
    if ble.connected:
        counter += 1
        ble.send_text('BESKED', 'Besked nummer {}'.format(counter))
        time.sleep_ms(2000)
    else:
        time.sleep_ms(100)
`,Ib=`from machine import Pin\r
import utime as time\r
from BLEPeripheral import BLEPeripheral\r
import PicoRobotics\r
\r
\r
# Simpelt tank-styringsprogram til en robotbil med to motorer.
# Hver slider sender -100..100 og går tilbage til 0, når den slippes.
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
def on_connect():
    # Når appen forbinder, tænder LED'en.
    led.on()
    print('BLE client connected')


def on_disconnect():
    # Når appen afbryder, slukker LED'en og begge motorer stoppes.
    led.off()
    board.motorOff(1)
    board.motorOff(2)
    print('BLE client disconnected')


# callbacks=globals() gør, at BLEPeripheral kan finde on_slider osv.
ble = BLEPeripheral(base_controls=BluetoothControls, device_base_name='TankBil', callbacks=globals())
\r
\r
while True:
    # BLE-funktionerne styrer bilen. Hold programmet i gang og giv CPU-tid
    # til Bluetooth.
    time.sleep_ms(100)
`,Er=[{id:"program:onboard-led",path:"/main.py",label:"NeoPixel lys (main.py)",description:"Startprogram til NeoPixel med tænd/sluk-knapper og lysstyrke-slider.",kind:"program",content:qb},{id:"program:send-text",path:"/main.py",label:"Send tekst (main.py)",description:"Startprogram med kun et tekstfelt, hvor Picoen sender beskeder til kontrolpanelet.",kind:"program",content:Qb},{id:"program:tank-control",path:"/main.py",label:"Robotbil med tankstyring (main.py)",description:"Startprogram til robotbil med to motor-slidere.",kind:"program",content:Ib},{id:"program:radar-control",path:"/main.py",label:"Radar med afstandssensor (main.py)",description:"Startprogram til radar med servo, afstandssensor og scan-toggle.",kind:"program",content:$b},{id:"library:ble-peripheral",path:"/BLEPeripheral.py",label:"BLEPeripheral.py",description:"Bluetooth-biblioteket der får Picoen til at tale med appen.",kind:"library",content:Gb},{id:"library:pico-robotics",path:"/PicoRobotics.py",label:"PicoRobotics.py",description:"Bibliotek til Kitronik Pico Robotics Board.",kind:"library",content:Kb},{id:"library:pico-fly",path:"/PicoFly.py",label:"PicoFly.py",description:"Bibliotek til PicoFly-board med motorer og servoer.",kind:"library",content:Xb},{id:"library:hcsr04",path:"/hcsr04.py",label:"hcsr04.py",description:"Bibliotek til HC-SR04 ultralyds-afstandssensor.",kind:"library",content:Vb},{id:"library:neopixel",path:"/neopixel.py",label:"neopixel.py",description:"Bibliotek til NeoPixel LED-strips og LED-ringe.",kind:"library",content:Yb}],Fb=11914;function Zb(){return typeof navigator<"u"&&"serial"in navigator&&!!navigator.serial}function Jb(){return Zb()?{supported:!0,message:"USB-udvikling er tilgængelig i denne browser."}:{supported:!1,message:"USB-udvikling kræver en computer med Chrome, Edge eller Chromebook."}}class Pb{constructor(r={}){de(this,"port",null);de(this,"reader",null);de(this,"writer",null);de(this,"readLoopDone",null);de(this,"readLoopActive",!1);de(this,"disconnecting",!1);de(this,"buffer","");de(this,"events");de(this,"dataListeners",new Set);this.events=r}get connected(){return!!this.port&&!!this.writer}get info(){var r;return((r=this.port)==null?void 0:r.getInfo())??null}async requestAndConnect(){if(!navigator.serial)throw new Error("Web Serial er ikke tilgængelig i denne browser.");const r=await navigator.serial.requestPort({filters:[{usbVendorId:Fb}]});await this.openPort(r)}async connectKnownPort(r){await this.openPort(r)}async disconnect(){var v,b;const r=this.connected||!!this.port||!!this.reader,f=this.port,s=this.reader,o=this.writer,m=this.readLoopDone,_=s==null?void 0:s.closed.catch(()=>{}),g=o==null?void 0:o.closed.catch(()=>{});this.disconnecting=!0,this.readLoopActive=!1;try{await(s==null?void 0:s.cancel())}catch{}m&&await m.catch(()=>{}),await _;try{s==null||s.releaseLock()}catch{}this.reader===s&&(this.reader=null);try{await(o==null?void 0:o.close()),await g}catch{try{await(o==null?void 0:o.abort("disconnect"))}catch{}}try{o==null||o.releaseLock()}catch{}this.writer===o&&(this.writer=null),f&&await f.close(),this.port===f&&(this.port=null),this.buffer="",this.readLoopDone===m&&(this.readLoopDone=null),this.disconnecting=!1,r&&((b=(v=this.events).onDisconnect)==null||b.call(v))}async write(r){if(!this.writer)throw new Error("Ingen USB-forbindelse.");await this.writer.write(new TextEncoder().encode(r))}async writeLine(r){await this.write(`${r}\r
`)}addDataListener(r){return this.dataListeners.add(r),()=>this.dataListeners.delete(r)}async openPort(r){var s,o,m;if(await this.disconnect().catch(()=>{}),await r.open({baudRate:115200,bufferSize:4096}),this.port=r,this.writer=((s=r.writable)==null?void 0:s.getWriter())??null,!this.writer||!r.readable)throw new Error("USB-porten kunne ikke åbnes til læsning og skrivning.");const f=r.getInfo();(m=(o=this.events).onLog)==null||m.call(o,"success",`USB-forbindelse oprettet (${Wb(f)}).`),this.readLoopDone=this.startReadLoop(r)}async startReadLoop(r){var o,m,_;this.readLoopActive=!0;const f=new TextDecoder;this.reader=((o=r.readable)==null?void 0:o.getReader())??null;const s=this.reader;if(s)try{for(;this.readLoopActive;){const{value:g,done:v}=await s.read();if(v)break;g&&this.consumeText(f.decode(g,{stream:!0}))}}catch(g){this.readLoopActive&&((_=(m=this.events).onLog)==null||_.call(m,"error",g instanceof Error?g.message:"USB-læsning stoppede."))}finally{try{s.releaseLock()}catch{}this.reader===s&&(this.reader=null),this.readLoopActive&&!this.disconnecting&&this.port===r&&this.closeAfterUnexpectedReadEnd(r)}}async closeAfterUnexpectedReadEnd(r){var m,_;const f=this.connected||this.port===r;this.disconnecting=!0,this.readLoopActive=!1;const s=this.writer,o=s==null?void 0:s.closed.catch(()=>{});try{await(s==null?void 0:s.close()),await o}catch{try{await(s==null?void 0:s.abort("disconnect"))}catch{}}try{s==null||s.releaseLock()}catch{}this.writer===s&&(this.writer=null);try{await r.close()}catch{}this.port===r&&(this.port=null),this.buffer="",this.readLoopDone=null,this.disconnecting=!1,f&&((_=(m=this.events).onDisconnect)==null||_.call(m))}consumeText(r){var f,s,o,m;(s=(f=this.events).onData)==null||s.call(f,r);for(const _ of this.dataListeners)_(r);for(this.buffer+=r;this.buffer.includes(`
`);){const _=this.buffer.indexOf(`
`),g=this.buffer.slice(0,_).replace(/\r$/,"");this.buffer=this.buffer.slice(_+1),(m=(o=this.events).onLine)==null||m.call(o,g)}}}function Wb(c){const r=c.usbVendorId!==void 0?`VID ${c.usbVendorId.toString(16).padStart(4,"0")}`:"ukendt VID",f=c.usbProductId!==void 0?`PID ${c.usbProductId.toString(16).padStart(4,"0")}`:"ukendt PID";return`${r}, ${f}`}const e0=15e3,Wh=64*1024,ep=1e5,t0=new URL("/micropython/micropython.mjs",window.location.origin).toString(),n0=new Set(["bluetooth","machine","network","PicoRobotics","rp2","ubluetooth"]);let l0=0;async function a0(c,r={}){const f=typeof r=="number"?r:r.timeoutMs??e0,s=typeof r=="number"?void 0:r.onOutput,o=typeof r=="number"?void 0:r.signal,m=bp(c);if(m.some(v=>v.level==="error"))return{ok:!1,output:"",error:"",issues:m,timedOut:!1,unavailable:!1};const _=++l0,g=new Worker(new URL(""+new URL("offlineMicroPython.worker-CDShyJ6y.js",import.meta.url).href,import.meta.url));return new Promise(v=>{let b=!1;const E=()=>{M({ok:!1,output:"",error:"",issues:m,timedOut:!1,unavailable:!1})},M=I=>{b||(b=!0,window.clearTimeout(D),o==null||o.removeEventListener("abort",E),g.terminate(),v(I))};if(o!=null&&o.aborted){E();return}o==null||o.addEventListener("abort",E,{once:!0});const D=window.setTimeout(()=>{M({ok:!1,output:"",error:"Offline MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:m,timedOut:!0,unavailable:!1})},f);g.onmessage=I=>{const Z=I.data;if(!(Z.id!==_||Z.type==="ready")){if(Z.type==="stdout"){s==null||s(Z.text);return}if(Z.type==="unavailable"){M({ok:!1,output:"",error:Z.error,issues:m,timedOut:!1,unavailable:!0});return}M({ok:Z.ok,output:Z.output,error:Z.error,issues:m,timedOut:!1,unavailable:!1})}},g.onerror=I=>{M({ok:!1,output:"",error:I.message||"Offline MicroPython fejlede i browser-worker.",issues:m,timedOut:!1,unavailable:!1})},g.postMessage({type:"run",id:_,code:c,runtimeUrl:t0})})}function bp(c){const r=[],f=new Blob([c]).size;f>Wh&&r.push({level:"error",text:`Koden er ${f} bytes. Offline MicroPython kører kun små programmer op til ${Wh} bytes.`});const s=c.split(/\r?\n/);for(let o=0;o<s.length;o+=1){const m=o+1,_=Js(s[o]).trim();if(!_)continue;const g=i0(_);g&&n0.has(g)&&r.push({level:"error",line:m,text:`${g} virker kun på Picoen. Forbind en Pico for at køre denne kode.`}),/^while\s+True\s*:/.test(_)&&!r0(s,o)&&r.push({level:"error",line:m,text:"Uendelige while True-løkker køres ikke offline. Forbind en Pico, eller tilføj en tydelig break."});const v=_.match(/\brange\(\s*(-?\d+)\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\)/);v&&s0(v)>ep&&r.push({level:"error",line:m,text:`range(...) er for stor til offline kørsel. Brug højst ${ep} gentagelser.`})}for(const o of c0(s))r.push({level:"warning",text:`Funktionen ${o} ser rekursiv ud. Hvis den ikke stopper, afbryder offline MicroPython efter få sekunder.`});return r}function Js(c){let r=null;for(let f=0;f<c.length;f+=1){const s=c[f];if((s==='"'||s==="'")&&c[f-1]!=="\\"&&(r=r===s?null:r??s),s==="#"&&!r)return c.slice(0,f)}return c}function i0(c){const r=c.match(/^import\s+([A-Za-z_]\w*)/);if(r)return r[1];const f=c.match(/^from\s+([A-Za-z_]\w*)\s+import\b/);return(f==null?void 0:f[1])??null}function r0(c,r){const f=Ps(c[r]);for(let s=r+1;s<c.length;s+=1){const o=c[s];if(!o.trim())continue;if(Ps(o)<=f)return!1;if(/\b(break|return|raise)\b/.test(Js(o)))return!0}return!1}function Ps(c){const r=c.match(/^\s*/);return(r==null?void 0:r[0].replace(/\t/g,"    ").length)??0}function s0(c){const r=Number(c[1]),f=c[2]===void 0?void 0:Number(c[2]),s=c[3]===void 0?1:Number(c[3]);if(s===0)return Number.POSITIVE_INFINITY;const _=(f===void 0?r:f)-(f===void 0?0:r);return _>0&&s<0||_<0&&s>0?0:Math.ceil(Math.abs(_/s))}function c0(c){const r=new Set;for(let f=0;f<c.length;f+=1){const s=Js(c[f]).trim().match(/^def\s+([A-Za-z_]\w*)\s*\(/);if(!s)continue;const o=s[1],m=Ps(c[f]);for(let _=f+1;_<c.length;_+=1){if(!c[_].trim())continue;if(Ps(c[_])<=m)break;if(new RegExp(`\\b${o}\\s*\\(`).test(Js(c[_]))){r.add(o);break}}}return[...r]}const o0=/^(for|if|while|def|class|elif|else|try|except|finally|with)\b/;function u0(c,r){var b;const f=c.trim(),s=r.split(/\r?\n/),o=f0(f),m=o?s[o-1]??"":"",_=d0(s,o),g=f.split(/\r?\n/).filter(Boolean).at(-1)??"",v=g.match(/NameError:\s+name ['"](.+?)['"] (?:isn't|is not) defined/);if(v)return{simple:`Python kender ikke navnet ${v[1]}${o?` på linje ${o}`:""}.`,technical:f,line:o};if(/ZeroDivisionError/.test(g))return{simple:`Kan ikke dividere med 0${o?` på linje ${o}`:""}.`,technical:f,line:o};if(/IndentationError/.test(g))return{simple:`Mangler indrykning${o?` på linje ${o}`:""}.`,technical:f,line:o};if(/ImportError|ModuleNotFoundError/.test(g)){const E=(b=g.match(/['"](.+?)['"]/))==null?void 0:b[1];return{simple:`Python kan ikke finde modulet${E?` ${E}`:""}.`,technical:f,line:o}}if(/SyntaxError/.test(g)){const E=Du(m,o)??Du(_.text,_.line)??m0(s,o);return E?{simple:`Mangler måske : efter linje ${E.line}.`,technical:f,line:E.line}:o&&_.text.trim().endsWith(":")&&m.trim()&&!/^\s+/.test(m)?{simple:`Mangler måske indrykning på linje ${o}.`,technical:f,line:o}:p0(m)?{simple:`Tekst mangler måske citationstegn${o?` på linje ${o}`:""}.`,technical:f,line:o}:h0(m)?{simple:`Tekst mangler måske et afsluttende citationstegn${o?` på linje ${o}`:""}.`,technical:f,line:o}:_0(m)?{simple:`Mangler måske en afsluttende parentes${o?` på linje ${o}`:""}.`,technical:f,line:o}:g0(m)?{simple:`Der er måske en parentes for meget${o?` på linje ${o}`:""}.`,technical:f,line:o}:{simple:`Python fandt en syntaksfejl${o?` omkring linje ${o}`:""}.`,technical:f,line:o}}return/TypeError/.test(g)?{simple:`En værdi har den forkerte type${o?` på linje ${o}`:""}.`,technical:f,line:o}:/IndexError/.test(g)?{simple:`Listen har ikke et element på den plads${o?` på linje ${o}`:""}.`,technical:f,line:o}:/KeyError/.test(g)?{simple:`Ordbogen mangler den nøgle${o?` på linje ${o}`:""}.`,technical:f,line:o}:/AttributeError/.test(g)?{simple:`Den ting har ikke den kommando${o?` på linje ${o}`:""}.`,technical:f,line:o}:/ValueError/.test(g)?{simple:`Værdien passer ikke her${o?` på linje ${o}`:""}.`,technical:f,line:o}:{simple:`Python fandt en fejl${o?` omkring linje ${o}`:""}.`,technical:f,line:o}}function f0(c){var o;const f=(o=[...c.matchAll(/line\s+(\d+)/g)].at(-1))==null?void 0:o[1];if(!f)return;const s=parseInt(f,10);return Number.isFinite(s)&&s>0?s:void 0}function d0(c,r){if(!r)return{text:""};for(let f=r-2;f>=0;f-=1){const s=c[f]??"";if(s.trim())return{line:f+1,text:s}}return{text:""}}function Du(c,r){if(!r)return null;const f=c.trim();return!o0.test(f)||f.endsWith(":")?null:{line:r}}function m0(c,r){const f=r?Math.min(c.length,r):c.length,s=Math.max(0,f-4);for(let o=f-1;o>=s;o-=1){const m=Du(c[o]??"",o+1);if(m)return m}return null}function h0(c){const r=(c.match(/'/g)??[]).length,f=(c.match(/"/g)??[]).length;return r%2===1||f%2===1}function p0(c){var s,o;const f=(o=(s=c.trim().match(/^print\((.+)\)$/))==null?void 0:s[1])==null?void 0:o.trim();return!f||/['"]/.test(f)?!1:/\s/.test(f)&&/[a-zA-ZæøåÆØÅ]/.test(f)}function _0(c){return yp(c)>0}function g0(c){return yp(c)<0}function yp(c){let r=0,f=null;for(let s=0;s<c.length;s+=1){const o=c[s];if((o==='"'||o==="'")&&c[s-1]!=="\\"){f=f===o?null:f??o;continue}f||((o==="("||o==="["||o==="{")&&(r+=1),(o===")"||o==="]"||o==="}")&&(r-=1))}return r}const Ou="/min_kode.py",vp=`print('Hej fra Pico Kontrol Panel')
`,tp=0;function Xt(c,r){return`${c}:${r}`}function b0(){const c=W(h=>h.toggleSideMenu),r=W(h=>h.askConfirm),f=W(h=>h.picoIdeOrigin),s=W(h=>h.active),o=W(h=>h.isBleConnected),m=W(h=>h.bleListFiles),_=W(h=>h.bleReadText),g=W(h=>h.bleWriteText),v=W(h=>h.bleDeleteFile),b=W(h=>h.bleRestartAndReconnect),[E,M]=X.useState(!1),[D,I]=X.useState(!1),[Z,le]=X.useState([]),[L,U]=X.useState(!1),[pe,ce]=X.useState([]),[Ee,ue]=X.useState(null),[we,ee]=X.useState(()=>Ru(vu())),[P,ge]=X.useState(Ou),[_e,ye]=X.useState("local"),[se,Ge]=X.useState(()=>{var h;return((h=Ru(vu()).find(y=>y.path===Ou))==null?void 0:h.content)??vp}),[Ae,Ie]=X.useState([]),[O,H]=X.useState(!1),[ae,xe]=X.useState(""),[fe,S]=X.useState(""),[z,J]=X.useState(null),[k,$]=X.useState(!1),[F,K]=X.useState(null),[Ke,Le]=X.useState(!1),[rn,Gl]=X.useState({}),[hi,_a]=X.useState(!1),[tl,ga]=X.useState(0),[nl,ac]=X.useState(()=>{var h,y;return((h=Hl.find(N=>N.board==="Raspberry Pi Pico W"))==null?void 0:h.board)??((y=Hl[0])==null?void 0:y.board)??""}),[Vl,ba]=X.useState(()=>{var h,y;return((h=Hl.find(N=>N.board==="Raspberry Pi Pico W"))==null?void 0:h.version)??((y=Hl[0])==null?void 0:y.version)??""}),[pi,Mn]=X.useState(!1),[_i,jr]=X.useState({top:0,left:0}),[Nt,ya]=X.useState(!1),[gi,bi]=X.useState(!1),[Yl,Rn]=X.useState(!0),[jn,ll]=X.useState({}),[ql,St]=X.useState({}),[Be,_t]=X.useState(null),[rt,ic]=X.useState(()=>Rh().clearTerminalOnRun),[An,rc]=X.useState(()=>Rh().simplifiedErrors),[al,va]=X.useState(()=>typeof window<"u"&&window.innerWidth<tp),kn=X.useRef(null),zt=X.useRef(null),We=X.useRef(null),il=X.useRef(null),xa=X.useRef(null),Sa=X.useRef(null),Dn=X.useRef(!1),$t=X.useRef(!1),yi=X.useRef(null),sn=X.useRef(null),rl=X.useRef(null),pn=X.useRef(0),_n=X.useRef(null),gn=X.useRef(null),vi=X.useRef(null),sl=X.useRef(null),Tt=Jb(),ie=f==="control"&&!!s&&o(),mt=ie?(s==null?void 0:s.deviceID)??"ble":null,cl=Math.max(1,se.split(`
`).length),xi=new Blob([se]).size,sc=_e==="pico"?"Picoen":"browseren",cc=X.useMemo(()=>[...new Set(Hl.map(h=>h.board))],[]),ol=X.useMemo(()=>Hl.filter(h=>h.board===nl),[nl]),Qt=Hl.find(h=>h.board===nl&&h.version===Vl)??ol[0]??Hl[0],Xl=X.useMemo(()=>{const h=new Pb({onLine:y=>{$t.current||Dn.current&&y.trim()&&!y.includes(">>>")&&!y.includes("raw REPL")&&Q("info",y)},onLog:Q,onDisconnect:()=>{M(!1),ya(!1),Dn.current=!1,Si(),Q("warning","USB-forbindelse lukket.")}});return kn.current=h,h},[]);function Q(h,y){le(N=>[...N.slice(-140),{level:h,text:y}])}function bn(h,y=se,N="error"){const Y=u0(h,y);le(q=>[...q.slice(-140),{level:N,text:Y.simple,technical:Y.technical}])}function Je(h,y,N=_e){ge(h),ye(N),Ge(y),St(Y=>({...Y,[Xt(N,h)]:y}))}function On(h,y="pico"){ge(h),ye(y),Ge(""),_t(null),jr({top:0,left:0})}function Pe(h,y=(N=>(N=xa.current)==null?void 0:N.selectionStart)()??h.length){Ge(h),St(Y=>({...Y,[Xt(_e,P)]:h})),fn(h,y)}function Ea(h,y=_e){St(N=>{const Y=Xt(y,h);if(!(Y in N))return N;const q={...N};return delete q[Y],q})}function Ar(){return jn[P]===se}function st(h,y){ll(N=>({...N,[h]:y}))}function Cn(h,y){st(h,y),St(N=>({...N,[Xt("pico",h)]:y})),_e==="pico"&&P===h&&Ge(y)}function Si(){ce([]),Ie([]),ll({}),St({}),_t(null),ge(h=>{const y=Ru(vu());if(y.find(q=>q.path===h))return h;const Y=y[0];return ye("local"),Ge(Y.content),Y.path})}function gt(h){ul(),K({value:100,label:h}),sl.current=window.setTimeout(()=>{sl.current=null,K(null)},900)}function ul(){sl.current!==null&&(window.clearTimeout(sl.current),sl.current=null)}function oc(){return F?u.jsxs("div",{className:"ide-task-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(F.value),children:[u.jsxs("div",{children:[u.jsx("span",{children:F.label}),u.jsxs("strong",{children:[Math.round(F.value),"%"]}),F.cancellable&&u.jsx("button",{className:"ide-task-cancel",type:"button",onClick:wa,"aria-label":"Stop handling",title:"Stop",children:u.jsx(jt,{name:"delete",size:18})})]}),u.jsx("i",{style:{width:`${Math.max(2,Math.min(100,F.value))}%`}})]}):null}function wa(){sn.current&&yn("Stopper læsning...",!0,!0)}function yn(h="Stopper læsning...",y=!1,N=!1){var Y;ul(),gn.current=null,pn.current+=1,(Y=sn.current)==null||Y.abort(),sn.current=null,_n.current=null,ue(null),U(!1),K(y?{value:(F==null?void 0:F.value)??0,label:h,cancellable:!1}:null),N&&Q("warning","Stopper BLE-læsning efter den aktuelle datapakke.")}function cn(h){var y;if(!(_n.current===h||gn.current===h)){if(gn.current=h,rl.current){pn.current+=1,(y=sn.current)==null||y.abort(),sn.current=null,_n.current=null,On(h),ue(h),U(!0),ul(),K({value:2,label:`Skifter til ${ke(h)}...`,cancellable:!0});return}Mt()}}function Mt(){if(rl.current)return;const h=gn.current;if(!h)return;gn.current=null;const y=pn.current+1;pn.current=y;const N=new AbortController;sn.current=N,_n.current=h,On(h),ue(h),U(!0),ul(),K({value:12,label:`Indlæser ${ke(h)}...`,cancellable:!0});const Y=(async()=>{try{const q=await _(h,(he,De)=>{pn.current===y&&K({value:he,label:De,cancellable:!0})},N.signal);if(N.signal.aborted||pn.current!==y)return;Je(h,q,"pico"),st(h,q),gt("Fil indlæst")}catch(q){if(pn.current!==y)return;x0(q)||N.signal.aborted?Q("info",`Stoppede læsning af ${ke(h)}.`):(K(null),Q("error",q instanceof Error?q.message:"BLE læsning fejlede."))}})();rl.current=Y,Y.finally(()=>{if(rl.current!==Y)return;rl.current=null,sn.current===N&&(sn.current=null),_n.current===h&&(_n.current=null),!!gn.current||(ue(null),U(!1),N.signal.aborted&&K(null)),Mt()})}async function Kl(h){const y=$t.current;$t.current=!0;try{return await h()}finally{$t.current=y}}X.useEffect(()=>{if(!Yl)return;const h=Sa.current;h&&(h.scrollTop=h.scrollHeight)},[Z,Yl]),X.useEffect(()=>{Ng({clearTerminalOnRun:rt,simplifiedErrors:An})},[rt,An]),X.useEffect(()=>{var h;ol.some(y=>y.version===Vl)||ba(((h=ol[0])==null?void 0:h.version)??"")},[ol,Vl]),X.useEffect(()=>{const h=()=>va(window.innerWidth<tp);return h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),X.useEffect(()=>{const h=()=>{const y=kn.current;zt.current=null,We.current=null,kn.current=null,y==null||y.disconnect().catch(()=>{})};return window.addEventListener("pagehide",h),()=>{ul(),window.removeEventListener("pagehide",h),h()}},[]),X.useEffect(()=>{const h=y=>{!(y.ctrlKey||y.metaKey)||y.key.toLowerCase()!=="s"||(y.preventDefault(),!L&&P.trim()&&!al&&!k&&!z&&!O&&Mi())};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[_e,ie,L,E,se,P,al,k,z,O]);function Ei(h,y,N){ee(Y=>{const q=j0(Y,h,y,N);return xu(q),q})}const Na=z0(pe,we,ql);X.useEffect(()=>{ie&&et()},[ie]),X.useEffect(()=>{const h=vi.current;h&&h!==mt&&Si(),vi.current=mt},[mt]);async function kr(){if(Tt.supported){I(!0);try{await Xl.requestAndConnect();const h=new Db(Xl);zt.current=h,We.current=new Ub(h),M(!0),ga(0),await h.interrupt(),await Ta(h),Q("success","Sendte stop-signal til Pico REPL."),await wi(We.current),await Ni(We.current)}catch(h){Q("error",h instanceof Error?h.message:"USB-forbindelse mislykkedes.");try{await Xl.disconnect()}catch(y){Q("error",y instanceof Error?`USB-porten kunne ikke lukkes: ${y.message}`:"USB-porten kunne ikke lukkes.");return}ga(y=>{const N=y+1;return N>=3&&(Q("info","USB-forbindelsen er mislykkedes flere gange. Hvis Picoen er i BOOTSEL eller mangler MicroPython, kan du bruge MicroPython-download."),_a(!0)),N}),M(!1)}finally{I(!1)}}}async function Ta(h){const y=await h.exec(`import sys
print(sys.implementation.name)
`,4e3);if(y.error||!y.output.toLowerCase().includes("micropython"))throw new Error("MicroPython blev ikke fundet på Picoen.")}async function uc(){var h;try{await((h=kn.current)==null?void 0:h.disconnect()),zt.current=null,We.current=null,M(!1),Si()}catch(y){Q("error",y instanceof Error?`USB-porten kunne ikke lukkes: ${y.message}`:"USB-porten kunne ikke lukkes.")}}async function lt(h){const y=We.current;if(y){U(!0),$t.current=!0;try{await h(y)}catch(N){K(null),Q("error",N instanceof Error?N.message:"USB filhandling fejlede.")}finally{$t.current=!1,U(!1)}}}async function et(h=!0){if(ie){U(!0);try{const y=await m();ce(y),h&&Q("success",`Indlæste ${y.length} filer fra Pico via Bluetooth.`)}catch(y){Q("error",y instanceof Error?y.message:"BLE filhandling fejlede.")}finally{U(!1)}return}await wi(We.current,h)}async function wi(h,y=!0){if(h){U(!0);try{const N=await Kl(()=>h.list("/"));ce(N),y&&Q("success",`Indlæste ${N.length} filer fra Pico.`)}catch(N){Q("error",N instanceof Error?N.message:"USB filhandling fejlede.")}finally{U(!1)}}}async function vn(){if(ie){U(!0),K({value:4,label:"Tjekker biblioteker på Pico via Bluetooth..."});try{const h=await zn((y,N)=>K({value:y,label:N}));Ie(h),gt("Fil-tjek færdigt")}catch(h){K(null),Q("error",h instanceof Error?h.message:"BLE runtime check fejlede.")}finally{U(!1)}return}await Ni(We.current)}async function zn(h){const y=[],N=Er.filter(q=>q.kind==="library"&&!ma(q));let Y=0;for(const q of Er){if(q.kind==="program"){y.push({...q,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}if(ma(q)){y.push({...q,status:"unknown",detail:"Opdateres via USB"});continue}try{const he=Y/Math.max(1,N.length)*100,De=100/Math.max(1,N.length);Q("info",`Tjekker ${q.label} på Pico via Bluetooth...`),h==null||h(Math.min(95,he),`Tjekker ${q.label} på Pico...`);const It=await _(q.path,(pl,Fe)=>{h==null||h(Math.min(95,he+pl/100*De),`${q.label}: ${Fe}`)}),Sn=Xs(It)===Xs(q.content);y.push({...q,status:Sn?"ok":"outdated",detail:Sn?"Matcher appens version":"Kan installeres via Bluetooth"})}catch{y.push({...q,status:"missing",detail:"Mangler på Pico"})}finally{Y+=1}}return h==null||h(100,"Fil-tjek færdigt"),y}async function Ni(h){if(h){U(!0);try{const y=await Kl(()=>Ti(h)),N=y;Ie(N)}catch(y){Q("error",y instanceof Error?y.message:"Runtime check fejlede.")}finally{U(!1)}}}async function Ti(h){if(!h)return[];const y=[];for(const N of Er){if(N.kind==="program"){y.push({...N,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}try{const Y=await h.readText(N.path),q=Xs(Y)===Xs(N.content);y.push({...N,status:q?"ok":"outdated",detail:q?"Matcher appens version":"Matcher ikke appens version"})}catch{y.push({...N,status:"missing",detail:"Mangler på Pico"})}}return y}async function fl(h=P){if(ie){cn(h);return}ue(h),await lt(async y=>{K({value:12,label:`Indlæser ${ke(h)}...`});const N=await y.readText(h);Je(h,N,"pico"),st(h,N),gt("Fil indlæst")}),ue(null)}function fc(){$(!0)}async function Mi(){if(_e==="pico"){if(!E&&!ie){Q("error","Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.");return}await $l();return}Ri()}function Ri(){Ei(P,se,!1),ye("local"),St(h=>({...h,[Xt("local",P)]:se})),$(!1),Q("success",`Gemte ${ke(P)} lokalt.`)}async function $l(){if($(!1),K({value:0,label:"Starter gemning..."}),ie){U(!0);try{return await g(P,se,(y,N)=>K({value:y,label:N})),st(P,se),ye("pico"),St(y=>({...y,[Xt("pico",P)]:se})),gt("Gemt på Pico via Bluetooth"),Q("success",`Gemte ${ke(P)} på Pico via Bluetooth.`),Ks(P)&&(Mn(!0),Q("warning","main.py er gemt. Genstart Picoen for at køre den nye version.")),await et(!1),!0}catch(y){return K(null),Q("error",y instanceof Error?y.message:"BLE gem fejlede."),!1}finally{U(!1)}}if(!We.current)return K(null),!1;let h=!1;return await lt(async y=>{Bn(P,"pico")?await y.replaceTextSafely(P,se,(N,Y)=>K({value:N,label:Y})):await y.writeText(P,se,(N,Y)=>K({value:N,label:Y})),st(P,se),ye("pico"),St(N=>({...N,[Xt("pico",P)]:se})),gt("Gemt på Pico via USB"),Q("success",`Gemte ${P}.`),await et(),await vn(),h=!0}),h}function dc(){const h=new Blob([se],{type:"text/plain;charset=utf-8"}),y=URL.createObjectURL(h),N=document.createElement("a");N.href=y,N.download=ke(P),N.click(),URL.revokeObjectURL(y),$(!1),Q("success",`Downloadede ${ke(P)}.`)}async function Dr(h){U(!0),Mn(!1),K({value:10,label:"Genstarter Pico..."});try{await b(h)?(gt("Pico genforbundet"),Q("success",h==="control"?"Pico genforbundet. Åbner kontrolpanelet.":"Pico genforbundet til Kodeværkstedet."),h==="ide"&&await et()):(K(null),Q("warning","Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet."))}catch(y){K(null),Q("error",y instanceof Error?y.message:"Genstart/genforbindelse mislykkedes.")}finally{U(!1)}}function Ql(h){const y=h??{path:P,source:_e},N=y.source==="pico"?"Pico":"browser";J(null),r({title:"Slet fil",message:`Vil du slette ${ke(y.path)} fra ${N}?`,confirmLabel:"Slet",onConfirm:()=>{on(y)}})}async function on(h){const y=h.path,N=h.source,Y=y===P&&N===_e;if(N==="local"){const q=we.filter(he=>he.path!==y);ee(q),xu(q),Y&&Je(y,"","local"),Ea(y,"local"),Q("warning",`Slettede ${ke(y)} fra browseren.`);return}if(ie){U(!0);try{await v(y),ll(q=>{const he={...q};return delete he[y],he}),Y&&Je(y,"","pico"),Ea(y,"pico"),Q("warning",`Slettede ${ke(y)} på Pico via Bluetooth.`),await et()}catch(q){Q("error",q instanceof Error?q.message:"BLE sletning fejlede.")}finally{U(!1)}return}if(!We.current){Q("error","Ingen Pico-forbindelse. Kan ikke slette Pico-filen.");return}await lt(async q=>{await q.delete(y),ll(he=>{const De={...he};return delete De[y],De}),Q("warning",`Slettede ${y}.`),Y&&Je(y,"","pico"),Ea(y,"pico"),await et(),await vn()})}async function ji(h){if(!h)return;const y=y0(h.name);if(!y){Q("error","Kun .py, .txt, .json og .csv kan importeres.");return}if(h.size>128*1024){Q("error","Filen er for stor til Pico-værkstedet.");return}const N=await h.text();if(_e==="local"){Ei(y,N,!0),Je(y,N,"local"),Q("success",`Importerede ${ke(y)} i browseren.`);return}if(!E&&!ie){Q("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(ie&&ma({path:y})){Q("error","BLEPeripheral.py kan ikke importeres over Bluetooth, mens den holder forbindelsen i gang. Brug USB i stedet.");return}if(K({value:0,label:"Uploader fil til Pico..."}),ie){U(!0);try{await g(y,N,(q,he)=>K({value:q,label:he})),st(y,N),Je(y,N,"pico"),gt("Fil uploadet til Pico"),Q("success",`Importerede ${ke(y)} på Pico via Bluetooth.`),await et()}catch(q){K(null),Q("error",q instanceof Error?q.message:"Kunne ikke importere filen til Pico.")}finally{U(!1)}return}if(!We.current){K(null),Q("error","Ingen Pico-forbindelse. Kan ikke importere filen til Pico.");return}await lt(async q=>{Bn(y,"pico")?await q.replaceTextSafely(y,N,(he,De)=>K({value:he,label:De})):await q.writeText(y,N,(he,De)=>K({value:he,label:De})),st(y,N),Je(y,N,"pico"),gt("Fil uploadet til Pico"),Q("success",`Importerede ${ke(y)} på Pico.`),await et(),await vn()})}async function Ai(){xe(""),H(!0)}function dl(){const h=np(ae);if(!h)return;const y=_e;if(Bn(h,y)){Q("error",`Der findes allerede en fil med navnet ${ke(h)} i ${y==="pico"?"Pico":"browseren"}.`);return}if(y==="local"){Ei(h,"",!1),Je(h,"","local"),H(!1),Q("success",`Oprettede ${ke(h)} i browseren.`);return}ml(h)}async function ml(h){if(!E&&!ie){Q("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(H(!1),K({value:0,label:"Opretter fil på Pico..."}),ie){U(!0);try{await g(h,"",(y,N)=>K({value:y,label:N})),st(h,""),Je(h,"","pico"),gt("Fil oprettet på Pico"),Q("success",`Oprettede ${ke(h)} på Pico via Bluetooth.`),await et()}catch(y){K(null),Q("error",y instanceof Error?y.message:"Kunne ikke oprette fil på Pico.")}finally{U(!1)}return}if(!We.current){K(null),Q("error","Ingen Pico-forbindelse. Kan ikke oprette Pico-filen.");return}await lt(async y=>{await y.writeText(h,"",(N,Y)=>K({value:N,label:Y})),st(h,""),Je(h,"","pico"),gt("Fil oprettet på Pico"),Q("success",`Oprettede ${ke(h)} på Pico.`),await et()})}function Or(h){h.type==="file"&&(J(h),S(v0(h.path)))}async function ki(h){if(!z||z.source!=="pico")return;const y=z.path;if(J(null),K({value:0,label:"Gendanner version..."}),ie){U(!0);try{const N=await _(h.path);await g(y,N,(Y,q)=>K({value:Y,label:q})),st(y,N),Je(y,N,"pico"),gt("Version gendannet"),await et(!1)}catch(N){K(null),Q("error",N instanceof Error?N.message:"Kunne ikke gendanne versionen.")}finally{U(!1)}return}We.current&&await lt(async N=>{await N.replaceTextSafely(y,await N.readText(h.path),(q,he)=>K({value:q,label:he}));const Y=await N.readText(y);st(y,Y),Je(y,Y,"pico"),gt("Version gendannet"),await et()})}function Cr(h){r({title:"Slet version",message:`Vil du slette ${ke(h.path)} fra Pico?`,confirmLabel:"Slet",onConfirm:()=>{Il(h)}})}async function Il(h){if(ie){U(!0);try{await v(h.path),await et(!1),J(y=>y&&{...y,versions:y.versions.filter(N=>N.path!==h.path)})}catch(y){Q("error",y instanceof Error?y.message:"Kunne ikke slette versionen.")}finally{U(!1)}return}We.current&&await lt(async y=>{await y.delete(h.path),await et(!1),J(N=>N&&{...N,versions:N.versions.filter(Y=>Y.path!==h.path)})})}async function un(){if(!z)return;const h=z,y=Mu(fe,wr(h.path));if(!y||y===h.path)return;if(Bn(y,h.source)){Q("error",`Der findes allerede en fil med navnet ${ke(y)}.`);return}const N=h.source==="local",Y=h.source==="pico";if(ie&&Y&&(Ks(h.path)||Ks(y))){Q("error","main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.");return}U(!0);try{if(Y)if(ie){const q=jn[h.path]??await _(h.path);await g(y,q,(he,De)=>K({value:he,label:De})),await v(h.path),ll(he=>({...ip(he,h.path,y),[y]:q}))}else We.current&&(await Kl(()=>We.current.rename(h.path,y)),ll(q=>ip(q,h.path,y)));N&&ee(q=>{const he=q.map(De=>De.path===h.path?{...De,path:y,updatedAt:Date.now()}:De);return xu(he),he}),P===h.path&&_e===h.source&&ge(y),St(q=>U0(q,h.source,h.path,y)),J(null),S(""),Q("success",`Omdøbte ${ke(h.path)} til ${ke(y)}.`),Y&&await et()}catch(q){Q("error",q instanceof Error?q.message:"Kunne ikke omdøbe filen.")}finally{K(null),U(!1)}}function Bn(h,y){return y==="pico"?pe.some(N=>N.path===h):we.some(N=>N.path===h)}async function Fl(h){if(!Bn(h,"pico"))return;const y=O0(h,pe),N=jn[h]??await _(h);await g(y,N)}function xn(h){if(h.type!=="file"){ie&&yn(void 0,!1),ge(h.path),ye(h.source);return}if(ie&&ma(h)){Q("warning","BLEPeripheral.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.");return}if(h.source==="local"){ie&&yn(void 0,!1);const N=we.find(Y=>Y.path===h.path);Je(h.path,ql[Xt("local",h.path)]??(N==null?void 0:N.content)??"","local");return}const y=Xt("pico",h.path);if(Object.prototype.hasOwnProperty.call(ql,y)){ie&&yn(void 0,!1),Je(h.path,ql[y],"pico");return}if(Object.prototype.hasOwnProperty.call(jn,h.path)){ie&&yn(void 0,!1),Je(h.path,jn[h.path],"pico");return}fl(h.path)}async function Ma(){if(!(!E&&!ie)){U(!0),K({value:4,label:ie?"Tjekker biblioteker på Pico via Bluetooth...":"Tjekker biblioteker på Pico..."}),Q("info",ie?"Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...":"Tjekker om Picoens biblioteker er opdaterede før installation...");try{const h=Ae.length>0?Ae:ie?await zn((N,Y)=>K({value:N,label:Y})):await Kl(()=>Ti(We.current));Ie(h);const y={};h.forEach(N=>{y[N.id]=!1}),Gl(y),Le(!0),K(null)}catch(h){K(null),Q("error",h instanceof Error?h.message:"Fil-tjek før installation fejlede.")}finally{U(!1)}}}async function Ra(){if(Le(!1),ie){U(!0);try{const y=(Ae.length>0?Ae:Er.map(Y=>({...Y,status:"unknown",detail:"Ikke tjekket"}))).filter(Y=>rn[Y.id]&&!ma(Y));if(y.length===0){Q("info","Ingen filer valgt til installation.");return}let N=null;K({value:0,label:"Starter installation..."});for(const[Y,q]of y.entries()){Q("info",`Installerer ${q.label} via Bluetooth...`);const he=Y/y.length*100,De=100/y.length;await Fl(q.path),await g(q.path,q.content,(It,Sn)=>{K({value:Math.min(99,he+It/100*De),label:`${q.label}: ${Sn}`})}),Cn(q.path,q.content),Q("success",`Installerede ${q.label}.`),q.kind==="library"&&(N=q),Ks(q.path)&&Mn(!0)}gt("Installation færdig"),await et(!1),await vn(),N&&Di(N)}catch(h){K(null),Q("error",h instanceof Error?h.message:"BLE installation fejlede.")}finally{U(!1)}return}await lt(async h=>{const N=(Ae.length>0?Ae:Er.map(q=>({...q,status:"unknown",detail:"Ikke tjekket"}))).filter(q=>rn[q.id]);if(N.length===0){Q("info","Ingen filer valgt til installation.");return}let Y=null;K({value:0,label:"Starter installation..."});for(const[q,he]of N.entries()){Q("info",`Installerer ${he.label}...`);const De=q/N.length*100,It=100/N.length;await h.replaceTextSafely(he.path,he.content,(Sn,pl)=>{K({value:Math.min(99,De+Sn/100*It),label:`${he.label}: ${pl}`})},{createBackup:!0}),Cn(he.path,he.content),Q("success",`Installerede ${he.label}.`),he.kind==="library"&&(Y=he)}gt("Installation færdig"),await et(!1),await vn(),Y&&Di(Y)})}function Di(h){Je(h.path,h.content,"pico"),st(h.path,h.content),Q("info",`Åbnede ${h.label} i editoren.`)}function ja(h,y){Gl(N=>{if(h.kind!=="program")return{...N,[h.id]:y};const Y={...N};for(const q of Ae)q.kind==="program"&&(Y[q.id]=!1);return Y[h.id]=y,Y})}async function Aa(){if(Oi(),ie&&_e==="pico"){Q("warning","Bluetooth holder forbindelsen åben, så koden kan ikke køres direkte her. Gem filen, og genstart Picoen for at køre den.");return}if(_e==="local"){await zr();return}const h=zt.current;if(!h){Q("error",`${ke(P)} er gemt på Picoen, men der er ingen USB-forbindelse til Pico REPL.`);return}if(P.endsWith(".py")){if(!Ar()&&(Q("info",`${ke(P)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`),!await $l())){Q("error","Pico-forbindelsen blev afbrudt under gemning.");return}if(L)return;ya(!0),Dn.current=!0,Rn(!0);try{await h.runFile(P),Q("success",`Kører ${ke(P)}. Brug Stop for at afbryde.`)}catch(y){ya(!1),Dn.current=!1,Q("error",y instanceof Error?y.message:"Kunne ikke starte koden.")}return}U(!0);try{const y=await h.exec(se,2e4);y.output.trim()&&Q("info",y.output),y.error.trim()&&bn(y.error,se),!y.output.trim()&&!y.error.trim()&&Q("success","Koden kørte uden output.")}catch(y){Q("error",y instanceof Error?y.message:"Kunne ikke køre koden.")}finally{U(!1)}}async function zr(){const h=bp(se);if(h.some(N=>N.level==="error")){for(const N of h){const Y=N.line?`Linje ${N.line}: `:"";Q(N.level==="error"?"error":"warning",`${Y}${N.text}`)}return}const y=new AbortController;yi.current=y,U(!0),bi(!0),Rn(!0),Q("info",E?"Starter offline MicroPython for browser-filen.":"Starter offline MicroPython. Forbind Pico med USB for at køre på selve Picoen.");try{const N=[],Y=await a0(se,{signal:y.signal,onOutput:De=>{N.push(De)}});for(const De of Y.issues){const It=De.line?`Linje ${De.line}: `:"";Q(De.level==="error"?"error":"warning",`${It}${De.text}`)}const q=[...N,Y.output].filter(Boolean).join(`
`).trim();!Y.error.trim()&&S0(q)?bn(q,se):(q&&Q("info",q),Y.error.trim()&&bn(Y.error,se,Y.unavailable?"warning":"error")),Y.ok&&!q&&!Y.error.trim()&&Q("success","Offline MicroPython kørte uden output.")}finally{yi.current=null,bi(!1),U(!1)}}async function Et(){var y;if(gi){(y=yi.current)==null||y.abort(),Q("warning","Stoppede offline MicroPython."),Rn(!0);return}const h=zt.current;if(h)try{await h.stop(),Q("warning","Stoppede koden på Pico.")}catch(N){Q("error",N instanceof Error?N.message:"Kunne ikke stoppe koden.")}finally{ya(!1),Dn.current=!1,Rn(!0)}}function Ln(){const h=Sa.current;if(!h)return;const y=h.scrollHeight-h.scrollTop-h.clientHeight<12;Rn(y)}function ka(){le([]),Rn(!0)}function hl(h,y,N){return N.length===0?null:u.jsxs("div",{className:"ide-install-group",children:[u.jsxs("div",{className:"ide-install-group-head",children:[u.jsx("h3",{children:h}),u.jsx("p",{children:y})]}),N.map(Y=>{const q=ie&&ma(Y);return u.jsxs("label",{className:`ide-install-row ${q?"disabled":""}`,children:[u.jsx("input",{type:"checkbox",checked:!!rn[Y.id],disabled:q,onChange:he=>ja(Y,he.target.checked)}),u.jsxs("span",{children:[u.jsxs("strong",{children:[mc(Y),Y.kind==="library"&&u.jsx("em",{className:`ide-install-status status-${Y.status}`,children:q?"USB":C0(Y.status)})]}),u.jsx("small",{children:Y.description})]})]},Y.id)})]})}function mc(h){return h.kind==="program"?h.label.replace(/\s*\(main\.py\)$/i,""):h.label}function Oi(){rt&&le([]),Rn(!0)}function Ci(h,y){const N=h.indexOf(`
`,y);return N===-1?h.length:N}function fn(h,y){const N=N0(h,y);if(!N||N.query.length<1){_t(null);return}const Y=N.query.toLowerCase(),q=w0.filter(De=>De.label.toLowerCase().startsWith(Y)).slice(0,8),he=T0(xa.current,y);_t(q.length>0&&he?{items:q,selected:0,start:N.start,end:y,position:he}:null)}function Zl(h=Be==null?void 0:Be.items[Be.selected]){if(!h||!Be)return;const y=se.slice(0,Be.start)+h.insert+se.slice(Be.end),N=Be.start+h.insert.length-(h.insert.endsWith("()")?1:0);Ge(y),St(Y=>({...Y,[Xt(_e,P)]:y})),_t(null),window.requestAnimationFrame(()=>{const Y=xa.current;Y&&(Y.focus(),Y.selectionStart=N,Y.selectionEnd=N,fn(y,N))})}function Br(h){if((h.ctrlKey||h.metaKey)&&h.key.toLowerCase()==="s"){h.preventDefault(),!L&&P.trim()&&Mi();return}if(Be){if(h.key==="ArrowDown"){h.preventDefault(),_t(Fe=>Fe&&{...Fe,selected:(Fe.selected+1)%Fe.items.length});return}if(h.key==="ArrowUp"){h.preventDefault(),_t(Fe=>Fe&&{...Fe,selected:(Fe.selected-1+Fe.items.length)%Fe.items.length});return}if(h.key==="Enter"||h.key==="Tab"){h.preventDefault(),Zl();return}if(h.key==="Escape"){h.preventDefault(),_t(null);return}}if(h.key!=="Tab")return;h.preventDefault();const y=h.currentTarget,N=y.selectionStart,Y=y.selectionEnd,q="    ";if(h.shiftKey){const Fe=se.lastIndexOf(`
`,N-1)+1,Lr=N===Y?Ci(se,N):Y,hc=se.slice(Fe,Lr);let zi=0,Jl=0;const pc=hc.replace(/(^|\n)( {1,4}|\t)/g,(Yu,Ur,gc,bc)=>{const Hr=gc.length;return Fe+bc<N&&(zi+=Hr),Jl+=Hr,Ur});if(Jl===0)return;const _c=se.slice(0,Fe)+pc+se.slice(Lr);Pe(_c,Math.max(Fe,N-zi)),window.requestAnimationFrame(()=>{y.selectionStart=Math.max(Fe,N-zi),y.selectionEnd=N===Y?y.selectionStart:Math.max(y.selectionStart,Y-Jl)});return}if(N===Y){const Fe=se.slice(0,N)+q+se.slice(Y);Pe(Fe,N+q.length),window.requestAnimationFrame(()=>{y.selectionStart=N+q.length,y.selectionEnd=N+q.length});return}const he=se.lastIndexOf(`
`,N-1)+1,It=se.slice(he,Y).replace(/^/gm,q),Sn=It.split(`
`).length,pl=se.slice(0,he)+It+se.slice(Y);Pe(pl,N+q.length),window.requestAnimationFrame(()=>{y.selectionStart=N+q.length,y.selectionEnd=Y+Sn*q.length})}return u.jsxs("div",{className:"screen ide-screen",children:[u.jsx(Gu,{title:"Pico Kodeværksted",onMenu:()=>c()}),al?u.jsx("div",{className:"ide-size-gate",role:"dialog","aria-modal":"true","aria-labelledby":"ide-size-title",children:u.jsxs("div",{className:"ide-size-gate-panel",children:[u.jsx("h2",{id:"ide-size-title",children:"Brug en bærbar for at bruge Kodeværkstedet"}),u.jsx("p",{children:"Denne skærm er for lille, så du skal åbne Kodeværkstedet på en bærbar eller en større skærm."})]})}):u.jsxs("div",{className:"ide-layout",children:[u.jsxs("section",{className:"ide-panel ide-files-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Filer"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:Ai,"aria-label":"Ny fil",title:"Ny fil",children:u.jsx(jt,{name:"plus",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>{var h;return(h=il.current)==null?void 0:h.click()},"aria-label":"Importer fil",title:"Importer fil",children:u.jsx(jt,{name:"upload",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>et(),disabled:!E&&!ie||L,"aria-label":"Opdater filer",title:"Opdater filer",children:u.jsx(jt,{name:"refresh",size:20})})]})]}),u.jsx("div",{className:"ide-file-list",children:Na.length===0?u.jsx("button",{type:"button",disabled:!0,children:"Ingen filer læst"}):Na.map(h=>{if(h.kind==="separator")return u.jsx("div",{className:"ide-file-separator",children:u.jsx("span",{children:h.label})},h.id);const y=ie&&ma(h),N=ql[Xt(h.source,h.path)],Y=N!==void 0&&N!==A0(h,we,jn);return u.jsxs("div",{className:`ide-file-row ${P===h.path&&_e===h.source?"active":""} ${y?"protected":""}`,children:[u.jsxs("button",{type:"button",onClick:()=>xn(h),disabled:y,title:y?"Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her":void 0,children:[u.jsx("span",{children:h.name}),u.jsxs("small",{title:Y?"Ikke gemte ændringer":"Ingen ikke gemte ændringer",children:[h.versions.length>0&&u.jsx("span",{className:"ide-file-version-count",title:`${h.versions.length} versioner`,"aria-label":`${h.versions.length} versioner`,children:h.versions.length}),u.jsx("i",{className:`ide-file-dirty-dot ${Y?"dirty":"clean"}`,"aria-hidden":"true"})]})]}),u.jsx("button",{className:"ide-file-actions",type:"button",onClick:()=>Or(h),disabled:h.type!=="file"||L||y,"aria-label":`Filvalg for ${h.name}`,title:y?"Holder Bluetooth-forbindelsen i gang og kan ikke ændres her":"Filvalg",children:u.jsx(jt,{name:"settings",size:16})})]},`${h.source}:${h.path}`)})})]}),u.jsxs("section",{className:"ide-panel ide-status-panel",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"ide-status-head",children:[u.jsx("h2",{children:ie?"Forbundet Pico":"USB udvikling"}),!ie&&u.jsx("span",{className:`ide-usb-status ${Tt.supported?"available":"unavailable"}`,title:Tt.message,"data-tooltip":Tt.message,role:"img","aria-label":Tt.message,tabIndex:0,children:"!"})]}),ie&&u.jsxs("p",{children:[(s==null?void 0:s.deviceName)??"Pico"," er forbundet via Bluetooth."]})]}),!ie&&u.jsxs("div",{className:"ide-actions",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:E?uc:kr,disabled:!Tt.supported||D,children:D?"Forbinder...":E?"Afbryd USB":"Forbind USB"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Ma,disabled:!E||ie||L,children:"Installer"})]}),ie&&u.jsxs("div",{className:"ide-actions",children:[u.jsxs("button",{className:"btn btn-primary ide-connection-state",type:"button",disabled:!0,children:[u.jsx(jt,{name:"power",size:22}),"Bluetooth forbundet"]}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Ma,disabled:L,children:"Installer"})]}),u.jsx("div",{className:"ide-runtime",children:u.jsxs("div",{className:`ide-mini-actions ${ie?"single":""}`,children:[u.jsx("button",{className:"btn btn-outline",type:"button",onClick:vn,disabled:!E&&!ie||L,children:"Tjek filer"}),!ie&&u.jsx("button",{className:"btn btn-outline ide-disconnect-btn",type:"button",onClick:()=>_a(!0),children:"MicroPython"})]})})]}),u.jsxs("section",{className:"ide-panel ide-editor-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("div",{className:"ide-editor-title",children:u.jsxs("h2",{children:[ke(P),u.jsxs("small",{children:[xi," bytes"]})]})}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Aa,disabled:L,children:"Kør"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Et,disabled:!gi&&(!E||!Nt),children:"Stop"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:fc,disabled:L||!P.trim(),children:"Gem"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Ql(),disabled:L||!P.trim(),children:"Slet"})]})]}),oc(),u.jsxs("div",{className:"ide-editor-wrap",children:[u.jsx("div",{className:"ide-line-numbers","aria-hidden":"true",style:{transform:`translateY(${-_i.top}px)`},children:Array.from({length:cl},(h,y)=>u.jsx("span",{children:y+1},y))}),u.jsx("pre",{className:"ide-highlight","aria-hidden":"true",style:{transform:`translate(${-_i.left}px, ${-_i.top}px)`},children:R0(se)}),u.jsx("textarea",{ref:xa,className:"ide-editor",value:se,onChange:h=>Pe(h.target.value,h.target.selectionStart),onKeyDown:Br,onKeyUp:h=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(h.key)||fn(h.currentTarget.value,h.currentTarget.selectionStart)},onClick:h=>fn(h.currentTarget.value,h.currentTarget.selectionStart),onScroll:h=>{jr({top:h.currentTarget.scrollTop,left:h.currentTarget.scrollLeft}),Be&&fn(h.currentTarget.value,h.currentTarget.selectionStart)},spellCheck:!1}),Be&&u.jsx("div",{className:"ide-autocomplete",role:"listbox","aria-label":"Kodeforslag",style:{left:Be.position.left,top:Be.position.top},children:Be.items.map((h,y)=>u.jsx("button",{className:y===Be.selected?"active":"",type:"button",onMouseDown:N=>{N.preventDefault(),Zl(h)},role:"option","aria-selected":y===Be.selected,children:h.label},h.label))}),Ee&&u.jsxs("div",{className:"ide-editor-loading",role:"status","aria-live":"polite",children:[u.jsx("span",{className:"spinner","aria-hidden":"true"}),u.jsxs("strong",{children:["Indlæser ",ke(Ee),"..."]})]})]})]}),u.jsxs("section",{className:"ide-panel ide-terminal-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Terminal"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${An?"":"active"}`,type:"button",onClick:()=>rc(h=>!h),"aria-label":An?"Tekniske fejl er slået fra":"Tekniske fejl er slået til","aria-pressed":!An,title:An?"Vis originale tekniske fejl":"Viser originale tekniske fejl",children:"Teknisk"}),u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${rt?"active":""}`,type:"button",onClick:()=>ic(h=>!h),"aria-pressed":rt,title:rt?"Terminalen ryddes, hver gang du trykker Kør":"Terminalen beholder tekst, når du trykker Kør",children:"Ryd ved Kør"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:ka,disabled:Z.length===0,children:"Ryd"})]})]}),u.jsx("div",{className:"ide-terminal","aria-live":"polite",ref:Sa,onScroll:Ln,children:Z.length===0?u.jsx("div",{className:"term-line",children:"Ingen terminaldata endnu."}):Z.map((h,y)=>u.jsx("div",{className:`term-line term-${h.level}`,children:h.technical&&!An?h.technical:h.text},`${y}-${h.text}`))})]})]}),u.jsx("input",{ref:il,type:"file",accept:".py,.txt,.json,.csv",className:"sr-only",onChange:h=>{var y;ji((y=h.target.files)==null?void 0:y[0]),h.currentTarget.value=""}}),k&&u.jsx(pt,{title:"Gem fil",onClose:()=>$(!1),children:u.jsxs("div",{className:"ide-save-options",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Ri,children:"Gem i browser"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>void $l(),disabled:!E&&!ie||L,children:"Gem på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:dc,children:"Download til computer"})]})}),Ke&&u.jsx(pt,{title:"Installer filer",onClose:()=>Le(!1),children:u.jsxs("div",{className:"ide-install-list",children:[u.jsx("p",{className:"ide-install-note",children:"Vælg et startprogram og de biblioteker dit projekt bruger. Ingen filer er valgt på forhånd."}),u.jsxs("div",{className:"ide-install-grid",children:[hl("Startprogrammer (main.py)","Starter automatisk på Picoen.",Ae.filter(h=>h.kind==="program")),hl("Biblioteker","Ekstra Python-filer som dine programmer kan importere.",Ae.filter(h=>h.kind==="library"))]}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Ra,disabled:L,children:"Installer valgte"})]})}),pi&&u.jsx(pt,{title:"main.py er gemt",onClose:()=>Mn(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:"Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>void Dr("control"),disabled:L,children:"Genstart og åbn kontrolpanel"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void Dr("ide"),disabled:L,children:"Genstart og bliv i Kodeværksted"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>Mn(!1),disabled:L,children:"Senere"})]})}),hi&&u.jsx(pt,{title:"Installer MicroPython",onClose:()=>_a(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:"Hvis Picoen er helt frisk, skal MicroPython først lægges på den."}),u.jsxs("ol",{className:"micropython-steps",children:[u.jsx("li",{children:"Hold BOOTSEL-knappen nede."}),u.jsx("li",{children:"Sæt Picoen i USB, og slip derefter BOOTSEL."}),u.jsx("li",{children:"Vælg Pico-model og MicroPython-version herunder, og download UF2-filen."}),u.jsxs("li",{children:["Kopier UF2-filen til drevet ",u.jsx("strong",{children:"RPI-RP2"})]})]}),u.jsxs("div",{className:"micropython-selects",children:[u.jsx("label",{htmlFor:"micropython-board",children:"Pico-model"}),u.jsx("select",{id:"micropython-board",value:nl,onChange:h=>ac(h.target.value),children:cc.map(h=>u.jsx("option",{value:h,children:h},h))}),u.jsx("label",{htmlFor:"micropython-version",children:"MicroPython-version"}),u.jsx("select",{id:"micropython-version",value:(Qt==null?void 0:Qt.version)??Vl,onChange:h=>ba(h.target.value),children:ol.map(h=>u.jsxs("option",{value:h.version,children:[h.version," (",h.date,")"]},`${h.board}:${h.version}:${h.date}`))})]}),Qt&&u.jsx("a",{className:"btn btn-primary btn-block",href:Qt.url,download:Qt.fileName,children:"Download UF2"}),u.jsx("a",{className:"btn btn-outline btn-block",href:"https://www.raspberrypi.com/documentation/microcontrollers/micropython.html",target:"_blank",rel:"noreferrer",children:"Se vejledning"})]})}),O&&u.jsx(pt,{title:"Ny Python-fil",onClose:()=>H(!1),children:u.jsxs("form",{className:"ide-new-file-form",onSubmit:h=>{h.preventDefault(),dl()},children:[u.jsx("label",{htmlFor:"new-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"new-pico-file",value:ae,onChange:h=>xe(h.target.value),autoFocus:!0,placeholder:"test"}),u.jsx("span",{children:".py"})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen tilføjer .py automatisk og opretter filen i ",sc,"."]}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:!np(ae),children:"Opret"})]})}),z&&u.jsx(pt,{title:ke(z.path),onClose:()=>J(null),children:u.jsxs("div",{className:"ide-file-action-modal",children:[u.jsxs("form",{className:"ide-file-rename-form",onSubmit:h=>{h.preventDefault(),un()},children:[u.jsx("label",{htmlFor:"rename-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"rename-pico-file",value:fe,onChange:h=>S(h.target.value),placeholder:"min_kode"}),u.jsxs("span",{children:[".",wr(z.path)]})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen beholder filendelsen .",wr(z.path)," automatisk."]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!Mu(fe,wr(z.path))||Mu(fe,wr(z.path))===z.path||L,children:"Gem navn"})]}),u.jsx("div",{className:"ide-file-action-buttons",children:u.jsx("button",{className:"btn btn-outline btn-danger btn-block",type:"button",onClick:()=>Ql(z),disabled:L,children:"Slet"})}),u.jsxs("section",{className:"ide-version-history",children:[u.jsx("h4",{children:"Versioner"}),z.source!=="pico"?u.jsx("p",{children:"Versioner gemmes kun for filer på Picoen."}):z.versions.length===0?u.jsx("p",{children:"Ingen tidligere versioner endnu."}):u.jsx("div",{className:"ide-version-list",children:z.versions.map(h=>u.jsxs("div",{className:"ide-version-row",children:[u.jsx("span",{children:ke(h.path)}),u.jsx("small",{children:h.size!==void 0?`${h.size} bytes`:"Gemt på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>void ki(h),disabled:L,children:"Gendan"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Cr(h),disabled:L,children:"Slet"})]},h.path))})]})]})})]})}function np(c){var f;const r=(f=c.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:f.replace(/\.py$/i,"").replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^_+|_+$/g,"");return r?`/${r}.py`:""}function y0(c){const r=c.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop(),f=r==null?void 0:r.match(/^(.+)\.(py|txt|json|csv)$/i);if(!f)return"";const s=f[1].replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^_+|_+$/g,"");return s?`/${s}.${f[2].toLowerCase()}`:""}function Mu(c,r="py"){const f=c.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop();if(!f)return"";const s=f.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);if(!s)return"";const o=s[1].replace(/[^a-zA-Z0-9_-]/g,"_").replace(/^_+|_+$/g,""),m=r.replace(/^\./,"").toLowerCase(),_=(s[2]??(m||"py")).toLowerCase();return o?`/${o}.${_}`:""}function v0(c){return ke(c).replace(/\.(py|txt|json|csv)$/i,"")}function wr(c){var s;const r=ke(c).match(/\.([a-z0-9]+)$/i),f=(s=r==null?void 0:r[1])==null?void 0:s.toLowerCase();return f&&["py","txt","json","csv"].includes(f)?f:"py"}function Xs(c){return c.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}function ke(c){return c.split("/").filter(Boolean).pop()??c}function Ks(c){return c.replace(/\\/g,"/").toLowerCase()==="/main.py"}function x0(c){return c instanceof DOMException&&c.name==="AbortError"}function S0(c){return/Traceback \(most recent call last\):/.test(c)||/\b(?:SyntaxError|NameError|TypeError|ValueError|IndentationError|ImportError|ModuleNotFoundError|ZeroDivisionError|IndexError|KeyError|AttributeError):/.test(c)}function ma(c){return E0(c)}function E0(c){return c.path.replace(/\\/g,"/").toLowerCase()==="/bleperipheral.py"}const w0=[...["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"].map(c=>({label:c,insert:`${c}${["for","if","while","def","class","elif","else","try","except","finally","with"].includes(c)?" ":""}`})),...["abs","all","any","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","exec","filter","float","getattr","hasattr","hash","hex","id","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","open","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","zip"].map(c=>({label:`${c}()`,insert:`${c}()`})),{label:"for i in range():",insert:"for i in range():"},{label:"while True:",insert:"while True:"},{label:"if True:",insert:"if True:"},{label:"time",insert:"time"},{label:"time.",insert:"time."},{label:"time.sleep",insert:"time.sleep"},{label:"time.sleep()",insert:"time.sleep()"},{label:"time.sleep_ms()",insert:"time.sleep_ms()"},{label:"time.ticks_ms()",insert:"time.ticks_ms()"},{label:"time.ticks_diff()",insert:"time.ticks_diff()"},{label:"machine",insert:"machine"},{label:"machine.",insert:"machine."},{label:"machine.Pin",insert:"machine.Pin"},{label:"machine.PWM",insert:"machine.PWM"},{label:"machine.ADC",insert:"machine.ADC"},{label:"machine.I2C",insert:"machine.I2C"},{label:"machine.SPI",insert:"machine.SPI"},{label:"machine.reset()",insert:"machine.reset()"},{label:"Pin()",insert:"Pin()"},{label:"PWM()",insert:"PWM()"},{label:"ADC()",insert:"ADC()"},{label:"I2C()",insert:"I2C()"},{label:"SPI()",insert:"SPI()"},{label:"Pin.OUT",insert:"Pin.OUT"},{label:"Pin.IN",insert:"Pin.IN"},{label:"Pin.PULL_UP",insert:"Pin.PULL_UP"},{label:"import time",insert:"import time"},{label:"import machine",insert:"import machine"},{label:"from machine import Pin",insert:"from machine import Pin"},{label:"from machine import Pin, PWM",insert:"from machine import Pin, PWM"},{label:"BLEPeripheral",insert:"BLEPeripheral"},{label:"PicoRobotics",insert:"PicoRobotics"},{label:"NeoPixel",insert:"NeoPixel"},{label:"ValueError",insert:"ValueError"},{label:"TypeError",insert:"TypeError"},{label:"OSError",insert:"OSError"},{label:"Exception",insert:"Exception"}];function N0(c,r){const s=c.slice(0,r).match(/[A-Za-z_][A-Za-z0-9_.]*$/);return!s||s.index===void 0?null:{query:s[0],start:s.index}}function T0(c,r){if(!c)return null;const f=c.parentElement;if(!f)return null;const s=window.getComputedStyle(c),o=document.createElement("div"),m=document.createElement("span"),_=f.getBoundingClientRect();o.style.position="absolute",o.style.visibility="hidden",o.style.pointerEvents="none",o.style.whiteSpace="pre-wrap",o.style.overflowWrap="break-word",o.style.boxSizing=s.boxSizing,o.style.width=`${c.clientWidth}px`,o.style.padding=s.padding,o.style.border=s.border,o.style.font=s.font,o.style.lineHeight=s.lineHeight,o.style.letterSpacing=s.letterSpacing,o.style.tabSize=s.tabSize,o.style.left=`${c.offsetLeft-c.scrollLeft}px`,o.style.top=`${c.offsetTop-c.scrollTop}px`,o.textContent=c.value.slice(0,r),m.textContent=c.value.slice(r,r+1)||" ",o.appendChild(m),f.appendChild(o);const g=m.getBoundingClientRect();o.remove();const v=M0(g.left-_.left,8,Math.max(8,f.clientWidth-296)),b=g.bottom-_.top+6,E=b+218>f.clientHeight?Math.max(8,g.top-_.top-218):b;return{left:v,top:E}}function M0(c,r,f){return Math.max(r,Math.min(f,c))}function R0(c){const r=/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,f=/(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm,s=[];return c.split(/(\r?\n)/).forEach((o,m)=>{if(o===`
`||o===`\r
`){s.push(u.jsx("br",{},`br-${m}`));return}let _=0;[...o.matchAll(f)].forEach((v,b)=>{const E=v.index??0;E>_&&s.push(...lp(o.slice(_,E),r,`${m}-${b}-plain`));const M=v[0],D=M.startsWith("#")?"tok-comment":M.startsWith('"')||M.startsWith("'")?"tok-string":/^\d/.test(M)?"tok-number":"tok-builtin";s.push(u.jsx("span",{className:D,children:M},`${m}-${b}-token`)),_=E+M.length}),_<o.length&&s.push(...lp(o.slice(_),r,`${m}-tail`))}),s.length?s:" "}function lp(c,r,f){const s=[];let o=0;const m=new RegExp(r.source,"g");return[...c.matchAll(m)].forEach((_,g)=>{const v=_.index??0;v>o&&s.push(u.jsx("span",{children:c.slice(o,v)},`${f}-${g}-plain`)),s.push(u.jsx("span",{className:"tok-keyword",children:_[0]},`${f}-${g}-keyword`)),o=v+_[0].length}),o<c.length&&s.push(u.jsx("span",{children:c.slice(o)},`${f}-plain-end`)),s}function Ru(c){return c.length>0?c:[{path:Ou,content:vp,uploaded:!1,updatedAt:Date.now()}]}function j0(c,r,f,s){const o=c.filter(m=>m.path!==r);return[{path:r,content:f,uploaded:s,updatedAt:Date.now()},...o].sort((m,_)=>_.updatedAt-m.updatedAt)}function A0(c,r,f){var s;return c.source==="pico"?f[c.path]:(s=r.find(o=>o.path===c.path))==null?void 0:s.content}function Is(c){const r=c.replace(/\\/g,"/"),f=r.lastIndexOf("/"),s=f>=0?r.slice(0,f+1):"",m=(f>=0?r.slice(f+1):r).match(/^(.+)_backup(\d+)(\.[^.]+)$/i);return m?{originalPath:`${s}${m[1]}${m[3]}`,index:parseInt(m[2],10)}:null}function k0(c){return Is(c)!==null}function D0(c){const r=new Map;for(const f of c){const s=Is(f.path);if(!s)continue;const o=r.get(s.originalPath)??[];o.push(f),r.set(s.originalPath,o)}for(const f of r.values())f.sort((s,o)=>{var m,_;return(((m=Is(o.path))==null?void 0:m.index)??0)-(((_=Is(s.path))==null?void 0:_.index)??0)});return r}function O0(c,r){const f=c.replace(/\\/g,"/"),s=f.lastIndexOf("/"),o=s>=0?f.slice(0,s+1):"/",m=s>=0?f.slice(s+1):f.replace(/^\/+/,""),_=m.lastIndexOf("."),g=_>0?m.slice(0,_):m,v=_>0?m.slice(_):"",b=new Set(r.map(E=>E.path.toLowerCase()));for(let E=1;E<1e3;E+=1){const M=`${o}${g}_backup${E}${v}`;if(!b.has(M.toLowerCase()))return M}return`${o}${g}_backup${Date.now()}${v}`}function C0(c){return c==="ok"?"Nyeste":c==="outdated"?"Opdater":c==="missing"?"Mangler":"Ikke tjekket"}function z0(c,r,f){const s=new Map,o=D0(c);for(const b of c)k0(b.path)||s.set(Xt("pico",b.path),{kind:"file",name:b.name,path:b.path,type:b.type,size:b.size,source:"pico",uploaded:!0,versions:o.get(b.path)??[]});for(const b of r)s.set(Xt("local",b.path),{kind:"file",name:ke(b.path),path:b.path,type:"file",source:"local",uploaded:!1,versions:[]});for(const b of Object.keys(f)){const[E,...M]=b.split(":"),D=M.join(":");if(E!=="local"&&E!=="pico"||!D)continue;const I=s.get(b);if(I){s.set(b,I);continue}s.set(b,{kind:"file",name:ke(D),path:D,type:"file",source:E,uploaded:!1,versions:E==="pico"?o.get(D)??[]:[]})}const m=[...s.values()].sort(L0),_=m.filter(b=>b.source==="pico"),g=m.filter(b=>b.source==="local"),v=[];return _.length>0&&v.push({kind:"separator",id:"pico-files",label:"Pico"},..._),g.length>0&&v.push({kind:"separator",id:"browser-files",label:"Browser"},...g),v}const B0=new Map([["main.py",0],["devicesettings.txt",1],["layout.txt",2],["bleperipheral.py",3],["picofly.py",4],["picorobotics.py",5],["neopixel.py",6],["hcsr04.py",7]]);function L0(c,r){const f=ap(c.path),s=ap(r.path);return f===null&&s===null?c.name.localeCompare(r.name,"da"):f===null?-1:s===null?1:f-s}function ap(c){var f;const r=(f=c.replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:f.toLowerCase();return r?B0.get(r)??null:null}function ip(c,r,f){if(!(r in c))return c;const s={...c,[f]:c[r]};return delete s[r],s}function U0(c,r,f,s){const o=`${r}:${f}`;if(!(o in c))return c;const m={...c,[`${r}:${s}`]:c[o]};return delete m[o],m}function H0({open:c}){const r=W(U=>U.screen),f=W(U=>U.active),s=W(U=>U.toggleSideMenu),o=W(U=>U.toggleDebugger),m=W(U=>U.setEditMode),_=W(U=>U.openMenuPage),g=W(U=>U.disconnect),v=W(U=>U.openPicoIde),b=W(U=>U.closePicoIde),E=W(U=>U.picoIdeOrigin),M=r==="dashboard",D=r==="control",I=r==="ide",Z=D&&!!(f!=null&&f.canEdit),le=E==="control",L=E==="control"?"Kontrol Panel":"Hovedmenu";return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:`scrim ${c?"open":"closing"}`,onClick:()=>s(!1)}),u.jsxs("nav",{className:`sidemenu sidemenu-${r} ${c?"open":"closing"}`,"aria-label":"Sidemenu",children:[M&&u.jsxs(u.Fragment,{children:[u.jsx(qt,{label:"Bruger",icon:"user",onClick:()=>_("user-settings")}),u.jsx(qt,{label:"Indstillinger",icon:"settings",onClick:()=>_("application-settings")}),u.jsx(qt,{label:"Kodeværksted",icon:"picoIde",onClick:v}),u.jsx(ju,{}),u.jsx(qt,{label:"Om appen",icon:"info",onClick:()=>_("application-about")}),u.jsx(qt,{label:"Hjælp",icon:"help",onClick:()=>_("application-help")}),u.jsx(qt,{label:"Fejlfinding",icon:"debugger",onClick:()=>o(!0)})]}),D&&u.jsxs(u.Fragment,{children:[u.jsx(qt,{label:"Indstillinger",icon:"settings",onClick:()=>_("device-settings")}),u.jsx(qt,{label:"Rediger",icon:"edit",onClick:()=>m(!0),disabled:!Z}),u.jsx(qt,{label:"Kodeværksted",icon:"picoIde",onClick:v}),u.jsx(ju,{}),u.jsx(qt,{label:"Hjælp",icon:"help",onClick:()=>_("device-help")}),u.jsx(qt,{label:"Fejlfinding",icon:"debugger",onClick:()=>o(!0)})]}),I&&u.jsxs(u.Fragment,{children:[u.jsx(qt,{label:L,icon:"back",onClick:b}),u.jsx(ju,{})]}),u.jsx("div",{className:"spacer"}),(D||I&&le)&&u.jsx(qt,{label:"Forlad",icon:"exit",onClick:()=>g()})]})]})}function qt({label:c,icon:r,disabled:f,onClick:s}){return u.jsxs("button",{className:"iconbtn",type:"button",onClick:s,disabled:f,"aria-label":c,children:[u.jsx(jt,{name:r}),u.jsx("span",{children:c})]})}function ju(){return u.jsxs("a",{className:"iconbtn sidemenu-link",href:"https://www.teknologiskolen.dk/",target:"_blank",rel:"noreferrer","aria-label":"Teknologiskolen",children:[u.jsx("img",{src:eb,alt:""}),u.jsx("span",{children:"Teknologiskolen"})]})}const G0={error:"term-error",success:"term-success",warning:"term-warning",info:""},rp={error:"[FEJL] ",success:"[SUCCES] ",warning:"[ADVARSEL] ",info:""};function V0(){const c=new Date,r=f=>String(f).padStart(2,"0");return`${r(c.getDate())}-${r(c.getMonth()+1)}-${c.getFullYear()}-${r(c.getHours())}-${r(c.getMinutes())}`}function Y0(){const c=W(o=>o.logs),r=W(o=>o.clearLogs),f=W(o=>o.toggleDebugger);function s(){const o=[...c].reverse().map(v=>`${v.time} ${rp[v.level]}${v.message}`).join(`
`),m=new Blob([o],{type:"text/plain"}),_=URL.createObjectURL(m),g=document.createElement("a");g.href=_,g.download=`${V0()}.txt`,g.click(),URL.revokeObjectURL(_)}return u.jsxs(pt,{title:"Fejlfinding",onClose:()=>f(!1),closeVariant:"circle",children:[u.jsx("div",{className:"terminal",children:c.length===0?u.jsx("div",{className:"term-line",children:"Ingen log endnu."}):c.map((o,m)=>u.jsxs("div",{className:`term-line ${G0[o.level]}`,children:[o.time," ",rp[o.level],o.message]},`${o.time}-${m}`))}),u.jsxs("div",{className:"row",style:{marginTop:14},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:r,children:"Ryd"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:s,children:"Gem logfil"})]})]})}function q0(){const c=W(H=>H.menuPage),r=W(H=>H.closeMenuPage),f=W(H=>H.user),s=W(H=>H.active),o=W(H=>H.layout),m=W(H=>H.sliderValues),_=W(H=>H.savedDevices),g=W(H=>H.updateUsername),v=W(H=>H.clearSavedDevices),b=W(H=>H.resetApplicationData),E=W(H=>H.saveDeviceSettings),M=W(H=>H.setEditMode),D=W(H=>H.askConfirm),[I,Z]=X.useState((f==null?void 0:f.username)??""),[le,L]=X.useState((s==null?void 0:s.iconID)??0),[U,pe]=X.useState(!1),[ce,Ee]=X.useState((s==null?void 0:s.canOthersConnect)??!1),[ue,we]=X.useState((s==null?void 0:s.canOthersEdit)??!1),[ee,P]=X.useState((s==null?void 0:s.gridCols)??11),[ge,_e]=X.useState((s==null?void 0:s.gridRows)??31),[ye,se]=X.useState(!1);X.useEffect(()=>{c==="user-settings"&&Z((f==null?void 0:f.username)??"")},[c,f==null?void 0:f.username]),X.useEffect(()=>{c==="device-settings"&&s&&(L(s.iconID),Ee(s.canOthersConnect),we(s.canOthersEdit),P(s.gridCols),_e(s.gridRows))},[s,c]);const Ge=(H,ae)=>Number.isFinite(H)?Math.max(ci,Math.min(oi,Math.round(H))):ae,Ae=(f==null?void 0:f.username)??"",Ie=I.trim(),O=Ie.length>0&&Ie!==Ae;if(!c)return null;if(c==="user-settings")return u.jsx(pt,{title:"Brugerindstillinger",onClose:r,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(ln,{label:"GUID",value:(f==null?void 0:f.userID)??"Ukendt"}),u.jsxs("div",{className:`field ${I.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-username",value:I,onChange:H=>Z(H.target.value),maxLength:24,autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>g(I),disabled:!O,children:"Gem nyt brugernavn"}),u.jsx("button",{className:"btn btn-outline btn-block btn-danger",type:"button",onClick:()=>D({title:"Start forfra",message:"Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.",confirmLabel:"Slet alt",onConfirm:()=>{b()}}),children:"Slet brugerdata"})]})});if(c==="application-settings")return u.jsx(pt,{title:"Applikationsindstillinger",onClose:r,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(ln,{label:"Version",value:Mr}),u.jsx(ln,{label:"Bluetooth",value:nc()?"Tilgængelig":"Ikke tilgængelig"}),u.jsx(ln,{label:"Gemte enheder",value:String(_.length)}),u.jsx("div",{className:"notice",children:"Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne tilladelsen i browserens site- eller Bluetooth-indstillinger."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>D({title:"Ryd gemte enheder",message:"Vil du fjerne alle gemte enheder fra denne browser?",confirmLabel:"Ryd",onConfirm:v}),disabled:_.length===0,children:"Ryd gemte enheder"})]})});if(c==="application-about")return u.jsx(pt,{title:"Om appen",onClose:r,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Pico Kontrol Panel er lavet til at bygge og fjernstyre sjove eller seje Raspberry Pi Pico W-projekter."}),u.jsx(ln,{label:"Udvikler",value:"Christian Bröchner Rasmussen"}),u.jsx(ln,{label:"Version",value:Mr})]})});if(c==="application-help")return u.jsx(pt,{title:"Hjælp til applikationen",onClose:r,children:u.jsxs("div",{className:"settings-stack prose help-lesson",children:[u.jsxs("div",{className:"help-lesson-card",children:[u.jsx("strong",{children:"Komplet undervisningsforløb"}),u.jsx("p",{children:"Linket åbner Teknologiskolens guide til Pico Kontrol Panel. Her kan du lære hele arbejdsgangen: browseropsætning, Kodeværkstedet, MicroPython, USB-installation, Bluetooth-forbindelse, kontrolpaneler og trådløs kodeudvikling."})]}),u.jsxs("div",{className:"help-lesson-list","aria-label":"Undervisningsforløbet indeholder",children:[u.jsx("span",{children:"Trin-for-trin opsætning"}),u.jsx("span",{children:"Øvelser til kode og kontrolpanel"}),u.jsx("span",{children:"Projektforslag med Pico W"})]}),u.jsx("p",{className:"help-lesson-destination",children:"Du sendes til materialer.teknologiskolen.dk i en ny fane."}),u.jsx("a",{className:"btn btn-primary btn-block",href:"https://materialer.teknologiskolen.dk/lessons/fjernstyring-af-raspberry-pi-pico-w",target:"_blank",rel:"noreferrer",children:"Åbn komplet undervisningsforløb"})]})});if(c==="device-settings"){const H=o.filter(fe=>fe.type==="slider"),ae=!!(s!=null&&s.isOwnedByMe);async function xe(fe=!1){if(!s||!ae)return;const S=Ge(ee,s.gridCols),z=Ge(ge,s.gridRows),J=X0(o,S,z);if(J&&!fe){D({title:"Gitter kan påvirke layout",message:`Det nuværende layout bruger op til ${J.requiredCols} kolonner og ${J.requiredRows} rækker. Det nye gitter er ${S} × ${z}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,confirmLabel:"Gem alligevel",onConfirm:()=>{xe(!0)}});return}se(!0),await E(le,ce,ce&&ue,S,z),P(S),_e(z),se(!1)}return u.jsx(pt,{title:"Enhedsindstillinger",onClose:r,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(ln,{label:"Navn",value:(s==null?void 0:s.deviceName)??"Ukendt"}),u.jsx(ln,{label:"Ejer",value:$0(s)}),ae?u.jsxs(u.Fragment,{children:[u.jsx("button",{className:"device-icon-pick settings-icon-pick",type:"button",onClick:()=>pe(!0),children:u.jsx("img",{src:mi(le),alt:""})}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:ce?"":"active",onClick:()=>Ee(!1),children:"Privat"}),u.jsx("button",{type:"button",className:ce?"active":"",onClick:()=>Ee(!0),children:"Offentlig"})]}),ce&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:ue?"":"active",onClick:()=>we(!1),children:"Nej"}),u.jsx("button",{type:"button",className:ue?"active":"",onClick:()=>we(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter"}),u.jsxs("div",{className:"row",children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-cols",children:"Kolonner"}),u.jsx("input",{id:"device-cols",type:"number",min:ci,max:oi,value:Number.isNaN(ee)?"":ee,onChange:fe=>P(parseInt(fe.target.value,10)),onBlur:()=>P(Ge(ee,(s==null?void 0:s.gridCols)??11))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-rows",children:"Rækker"}),u.jsx("input",{id:"device-rows",type:"number",min:ci,max:oi,value:Number.isNaN(ge)?"":ge,onChange:fe=>_e(parseInt(fe.target.value,10)),onBlur:()=>_e(Ge(ge,(s==null?void 0:s.gridRows)??31))})]})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>xe(),disabled:ye,children:ye?"Gemmer...":"Gem enhedsindstillinger"})]}):u.jsxs(u.Fragment,{children:[u.jsx(ln,{label:"Ikon ID",value:String((s==null?void 0:s.iconID)??0)}),u.jsx(ln,{label:"Redigering",value:s!=null&&s.canEdit?"Tilladt":"Ikke tilladt"}),u.jsx(ln,{label:"Gitter",value:`${(s==null?void 0:s.gridCols)??0} × ${(s==null?void 0:s.gridRows)??0}`})]}),u.jsx(ln,{label:"Kontroller",value:String(o.length)}),H.length>0&&u.jsxs("div",{className:"settings-section",children:[u.jsx("h4",{children:"Slidere"}),H.map(fe=>u.jsxs("div",{className:"slider-meta",children:[u.jsx("strong",{children:fe.name}),u.jsxs("span",{children:[fe.sliderMin??0," til ",fe.sliderMax??100]}),u.jsxs("span",{children:["Retur: ",K0(fe.sliderRecenter??"none")]}),u.jsxs("span",{children:["Seneste værdi: ",m[fe.name]??"Ikke brugt"]})]},fe.name))]}),U&&u.jsx(mp,{selected:le,onSelect:L,onClose:()=>pe(!1)})]})})}return u.jsx(pt,{title:"Hjælp til enheden",onClose:r,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Knapper sender en kommando med deres navn, når de trykkes."}),u.jsx("p",{children:"Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse."}),u.jsx("p",{children:"Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen."}),(s==null?void 0:s.canEdit)&&u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>M(!0),children:"Rediger layout"})]})})}function X0(c,r,f){let s=0,o=0;for(const m of c)ui(m)&&(s=Math.max(s,Math.ceil((m.centerX2+m.spanX)/2)+1),o=Math.max(o,Math.ceil((m.centerY2+m.spanY)/2)+1));return r<s||f<o?{requiredCols:s,requiredRows:o}:null}function K0(c){return c==="bottom"?"bund":c==="middle"?"midte":c==="top"?"top":"ingen"}function $0(c){var r;return c?c.isOwnedByMe?"Dig":((r=c.ownerName)==null?void 0:r.trim())||"Anden bruger":"Ukendt"}function ln({label:c,value:r}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:c}),u.jsx("strong",{children:r})]})}function Q0(){const c=W(s=>s.confirmDialog),r=W(s=>s.closeConfirm);if(!c)return null;function f(){c==null||c.onConfirm(),r()}return u.jsx(pt,{title:c.title,onClose:r,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:c.message}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:r,children:c.cancelLabel??"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:f,children:c.confirmLabel??"Fortsæt"})]})]})})}function I0(){const c=W(s=>s.connectionLost),r=W(s=>s.reconnectLostDevice),f=W(s=>s.dismissConnectionLost);return c?u.jsx(pt,{title:"Forbindelse afbrudt",onClose:f,children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("p",{className:"confirm-message",children:["Forbindelsen til ",c.deviceName," blev afbrudt. Tjek at Picoen har strøm og er tæt nok på."]}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:f,children:"Luk"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>r(),children:"Genforbind"})]})]})}):null}function F0(){const c=W(f=>f.toast),r=W(f=>f.dismissToast);return c?u.jsx("div",{className:"toast",role:"alert",onClick:r,children:c.message},c.id):null}function Z0(){const c=W(g=>g.screen),r=W(g=>g.splashTarget),f=W(g=>g.init),s=W(g=>g.sideMenuOpen),o=W(g=>g.debuggerOpen),[m,_]=X.useState(!1);return X.useEffect(()=>{f()},[f]),X.useEffect(()=>{if(s){_(!0);return}const g=setTimeout(()=>_(!1),140);return()=>clearTimeout(g)},[s]),u.jsxs("div",{className:"app",children:[c==="splash"&&r==="intro"&&u.jsx(Lh,{}),c==="splash"&&r==="dashboard"&&u.jsx(Uh,{}),c==="splash"&&u.jsx(ab,{}),c==="intro"&&u.jsx(Lh,{}),c==="dashboard"&&u.jsx(Uh,{}),c==="connection"&&u.jsx(cb,{}),c==="create"&&u.jsx(ob,{}),c==="control"&&u.jsx(jb,{}),c==="ide"&&u.jsx(b0,{}),m&&u.jsx(H0,{open:s}),u.jsx(q0,{}),u.jsx(I0,{}),u.jsx(Q0,{}),o&&u.jsx(Y0,{}),u.jsx(F0,{})]})}function J0(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{const c=new URL("sw.js",window.location.href);navigator.serviceWorker.register(c,{scope:"./"}).catch(r=>{console.warn("Service worker registration failed:",r)})})}J0();_g.createRoot(document.getElementById("root")).render(u.jsx(Nr.StrictMode,{children:u.jsx(Z0,{})}));
