var A2=Object.defineProperty;var C2=(i,l,o)=>l in i?A2(i,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[l]=o;var be=(i,l,o)=>C2(i,typeof l!="symbol"?l+"":l,o);(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const _ of h.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&s(_)}).observe(document,{childList:!0,subtree:!0});function o(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(d){if(d.ep)return;d.ep=!0;const h=o(d);fetch(d.href,h)}})();function Ch(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Td={exports:{}},hs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function D2(){if(gm)return hs;gm=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function o(s,d,h){var _=null;if(h!==void 0&&(_=""+h),d.key!==void 0&&(_=""+d.key),"key"in d){h={};for(var m in d)m!=="key"&&(h[m]=d[m])}else h=d;return d=h.ref,{$$typeof:i,type:s,key:_,ref:d!==void 0?d:null,props:h}}return hs.Fragment=l,hs.jsx=o,hs.jsxs=o,hs}var _m;function O2(){return _m||(_m=1,Td.exports=D2()),Td.exports}var u=O2(),Md={exports:{}},ze={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function L2(){if(vm)return ze;vm=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),_=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),E=Symbol.iterator;function D(T){return T===null||typeof T!="object"?null:(T=E&&T[E]||T["@@iterator"],typeof T=="function"?T:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,H={};function F(T,$,le){this.props=T,this.context=$,this.refs=H,this.updater=le||O}F.prototype.isReactComponent={},F.prototype.setState=function(T,$){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,$,"setState")},F.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function L(){}L.prototype=F.prototype;function re(T,$,le){this.props=T,this.context=$,this.refs=H,this.updater=le||O}var q=re.prototype=new L;q.constructor=re,G(q,F.prototype),q.isPureReactComponent=!0;var ce=Array.isArray;function ge(){}var te={H:null,A:null,T:null,S:null},pe=Object.prototype.hasOwnProperty;function ye(T,$,le){var ae=le.ref;return{$$typeof:i,type:T,key:$,ref:ae!==void 0?ae:null,props:le}}function Be(T,$){return ye(T.type,$,T.props)}function ne(T){return typeof T=="object"&&T!==null&&T.$$typeof===i}function Pe(T){var $={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(le){return $[le]})}var we=/\/+/g;function Qe(T,$){return typeof T=="object"&&T!==null&&T.key!=null?Pe(""+T.key):$.toString(36)}function Z(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(ge,ge):(T.status="pending",T.then(function($){T.status==="pending"&&(T.status="fulfilled",T.value=$)},function($){T.status==="pending"&&(T.status="rejected",T.reason=$)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function R(T,$,le,ae,Se){var xe=typeof T;(xe==="undefined"||xe==="boolean")&&(T=null);var de=!1;if(T===null)de=!0;else switch(xe){case"bigint":case"string":case"number":de=!0;break;case"object":switch(T.$$typeof){case i:case l:de=!0;break;case k:return de=T._init,R(de(T._payload),$,le,ae,Se)}}if(de)return Se=Se(T),de=ae===""?"."+Qe(T,0):ae,ce(Se)?(le="",de!=null&&(le=de.replace(we,"$&/")+"/"),R(Se,$,le,"",function(Ct){return Ct})):Se!=null&&(ne(Se)&&(Se=Be(Se,le+(Se.key==null||T&&T.key===Se.key?"":(""+Se.key).replace(we,"$&/")+"/")+de)),$.push(Se)),1;de=0;var Fe=ae===""?".":ae+":";if(ce(T))for(var Ye=0;Ye<T.length;Ye++)ae=T[Ye],xe=Fe+Qe(ae,Ye),de+=R(ae,$,le,xe,Se);else if(Ye=D(T),typeof Ye=="function")for(T=Ye.call(T),Ye=0;!(ae=T.next()).done;)ae=ae.value,xe=Fe+Qe(ae,Ye++),de+=R(ae,$,le,xe,Se);else if(xe==="object"){if(typeof T.then=="function")return R(Z(T),$,le,ae,Se);throw $=String(T),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return de}function W(T,$,le){if(T==null)return T;var ae=[],Se=0;return R(T,ae,"","",function(xe){return $.call(le,xe,Se++)}),ae}function me(T){if(T._status===-1){var $=T._result;$=$(),$.then(function(le){(T._status===0||T._status===-1)&&(T._status=1,T._result=le)},function(le){(T._status===0||T._status===-1)&&(T._status=2,T._result=le)}),T._status===-1&&(T._status=0,T._result=$)}if(T._status===1)return T._result.default;throw T._result}var Re=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},_e={map:W,forEach:function(T,$,le){W(T,function(){$.apply(this,arguments)},le)},count:function(T){var $=0;return W(T,function(){$++}),$},toArray:function(T){return W(T,function($){return $})||[]},only:function(T){if(!ne(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return ze.Activity=x,ze.Children=_e,ze.Component=F,ze.Fragment=o,ze.Profiler=d,ze.PureComponent=re,ze.StrictMode=s,ze.Suspense=v,ze.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=te,ze.__COMPILER_RUNTIME={__proto__:null,c:function(T){return te.H.useMemoCache(T)}},ze.cache=function(T){return function(){return T.apply(null,arguments)}},ze.cacheSignal=function(){return null},ze.cloneElement=function(T,$,le){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var ae=G({},T.props),Se=T.key;if($!=null)for(xe in $.key!==void 0&&(Se=""+$.key),$)!pe.call($,xe)||xe==="key"||xe==="__self"||xe==="__source"||xe==="ref"&&$.ref===void 0||(ae[xe]=$[xe]);var xe=arguments.length-2;if(xe===1)ae.children=le;else if(1<xe){for(var de=Array(xe),Fe=0;Fe<xe;Fe++)de[Fe]=arguments[Fe+2];ae.children=de}return ye(T.type,Se,ae)},ze.createContext=function(T){return T={$$typeof:_,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:h,_context:T},T},ze.createElement=function(T,$,le){var ae,Se={},xe=null;if($!=null)for(ae in $.key!==void 0&&(xe=""+$.key),$)pe.call($,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(Se[ae]=$[ae]);var de=arguments.length-2;if(de===1)Se.children=le;else if(1<de){for(var Fe=Array(de),Ye=0;Ye<de;Ye++)Fe[Ye]=arguments[Ye+2];Se.children=Fe}if(T&&T.defaultProps)for(ae in de=T.defaultProps,de)Se[ae]===void 0&&(Se[ae]=de[ae]);return ye(T,xe,Se)},ze.createRef=function(){return{current:null}},ze.forwardRef=function(T){return{$$typeof:m,render:T}},ze.isValidElement=ne,ze.lazy=function(T){return{$$typeof:k,_payload:{_status:-1,_result:T},_init:me}},ze.memo=function(T,$){return{$$typeof:b,type:T,compare:$===void 0?null:$}},ze.startTransition=function(T){var $=te.T,le={};te.T=le;try{var ae=T(),Se=te.S;Se!==null&&Se(le,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(ge,Re)}catch(xe){Re(xe)}finally{$!==null&&le.types!==null&&($.types=le.types),te.T=$}},ze.unstable_useCacheRefresh=function(){return te.H.useCacheRefresh()},ze.use=function(T){return te.H.use(T)},ze.useActionState=function(T,$,le){return te.H.useActionState(T,$,le)},ze.useCallback=function(T,$){return te.H.useCallback(T,$)},ze.useContext=function(T){return te.H.useContext(T)},ze.useDebugValue=function(){},ze.useDeferredValue=function(T,$){return te.H.useDeferredValue(T,$)},ze.useEffect=function(T,$){return te.H.useEffect(T,$)},ze.useEffectEvent=function(T){return te.H.useEffectEvent(T)},ze.useId=function(){return te.H.useId()},ze.useImperativeHandle=function(T,$,le){return te.H.useImperativeHandle(T,$,le)},ze.useInsertionEffect=function(T,$){return te.H.useInsertionEffect(T,$)},ze.useLayoutEffect=function(T,$){return te.H.useLayoutEffect(T,$)},ze.useMemo=function(T,$){return te.H.useMemo(T,$)},ze.useOptimistic=function(T,$){return te.H.useOptimistic(T,$)},ze.useReducer=function(T,$,le){return te.H.useReducer(T,$,le)},ze.useRef=function(T){return te.H.useRef(T)},ze.useState=function(T){return te.H.useState(T)},ze.useSyncExternalStore=function(T,$,le){return te.H.useSyncExternalStore(T,$,le)},ze.useTransition=function(){return te.H.useTransition()},ze.version="19.2.7",ze}var bm;function af(){return bm||(bm=1,Md.exports=L2()),Md.exports}var N=af();const xs=Ch(N);var Nd={exports:{}},ps={},jd={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function B2(){return ym||(ym=1,(function(i){function l(R,W){var me=R.length;R.push(W);e:for(;0<me;){var Re=me-1>>>1,_e=R[Re];if(0<d(_e,W))R[Re]=W,R[me]=_e,me=Re;else break e}}function o(R){return R.length===0?null:R[0]}function s(R){if(R.length===0)return null;var W=R[0],me=R.pop();if(me!==W){R[0]=me;e:for(var Re=0,_e=R.length,T=_e>>>1;Re<T;){var $=2*(Re+1)-1,le=R[$],ae=$+1,Se=R[ae];if(0>d(le,me))ae<_e&&0>d(Se,le)?(R[Re]=Se,R[ae]=me,Re=ae):(R[Re]=le,R[$]=me,Re=$);else if(ae<_e&&0>d(Se,me))R[Re]=Se,R[ae]=me,Re=ae;else break e}}return W}function d(R,W){var me=R.sortIndex-W.sortIndex;return me!==0?me:R.id-W.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;i.unstable_now=function(){return h.now()}}else{var _=Date,m=_.now();i.unstable_now=function(){return _.now()-m}}var v=[],b=[],k=1,x=null,E=3,D=!1,O=!1,G=!1,H=!1,F=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;function q(R){for(var W=o(b);W!==null;){if(W.callback===null)s(b);else if(W.startTime<=R)s(b),W.sortIndex=W.expirationTime,l(v,W);else break;W=o(b)}}function ce(R){if(G=!1,q(R),!O)if(o(v)!==null)O=!0,ge||(ge=!0,Pe());else{var W=o(b);W!==null&&Z(ce,W.startTime-R)}}var ge=!1,te=-1,pe=5,ye=-1;function Be(){return H?!0:!(i.unstable_now()-ye<pe)}function ne(){if(H=!1,ge){var R=i.unstable_now();ye=R;var W=!0;try{e:{O=!1,G&&(G=!1,L(te),te=-1),D=!0;var me=E;try{t:{for(q(R),x=o(v);x!==null&&!(x.expirationTime>R&&Be());){var Re=x.callback;if(typeof Re=="function"){x.callback=null,E=x.priorityLevel;var _e=Re(x.expirationTime<=R);if(R=i.unstable_now(),typeof _e=="function"){x.callback=_e,q(R),W=!0;break t}x===o(v)&&s(v),q(R)}else s(v);x=o(v)}if(x!==null)W=!0;else{var T=o(b);T!==null&&Z(ce,T.startTime-R),W=!1}}break e}finally{x=null,E=me,D=!1}W=void 0}}finally{W?Pe():ge=!1}}}var Pe;if(typeof re=="function")Pe=function(){re(ne)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,Qe=we.port2;we.port1.onmessage=ne,Pe=function(){Qe.postMessage(null)}}else Pe=function(){F(ne,0)};function Z(R,W){te=F(function(){R(i.unstable_now())},W)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(R){R.callback=null},i.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pe=0<R?Math.floor(1e3/R):5},i.unstable_getCurrentPriorityLevel=function(){return E},i.unstable_next=function(R){switch(E){case 1:case 2:case 3:var W=3;break;default:W=E}var me=E;E=W;try{return R()}finally{E=me}},i.unstable_requestPaint=function(){H=!0},i.unstable_runWithPriority=function(R,W){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var me=E;E=R;try{return W()}finally{E=me}},i.unstable_scheduleCallback=function(R,W,me){var Re=i.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?Re+me:Re):me=Re,R){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=me+_e,R={id:k++,callback:W,priorityLevel:R,startTime:me,expirationTime:_e,sortIndex:-1},me>Re?(R.sortIndex=me,l(b,R),o(v)===null&&R===o(b)&&(G?(L(te),te=-1):G=!0,Z(ce,me-Re))):(R.sortIndex=_e,l(v,R),O||D||(O=!0,ge||(ge=!0,Pe()))),R},i.unstable_shouldYield=Be,i.unstable_wrapCallback=function(R){var W=E;return function(){var me=E;E=W;try{return R.apply(this,arguments)}finally{E=me}}}})(Rd)),Rd}var wm;function z2(){return wm||(wm=1,jd.exports=B2()),jd.exports}var Ad={exports:{}},nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function U2(){if(xm)return nn;xm=1;var i=af();function l(v){var b="https://react.dev/errors/"+v;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)b+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+v+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var s={d:{f:o,r:function(){throw Error(l(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(v,b,k){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:x==null?null:""+x,children:v,containerInfo:b,implementation:k}}var _=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,b){if(v==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,nn.createPortal=function(v,b){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(l(299));return h(v,b,null,k)},nn.flushSync=function(v){var b=_.T,k=s.p;try{if(_.T=null,s.p=2,v)return v()}finally{_.T=b,s.p=k,s.d.f()}},nn.preconnect=function(v,b){typeof v=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,s.d.C(v,b))},nn.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},nn.preinit=function(v,b){if(typeof v=="string"&&b&&typeof b.as=="string"){var k=b.as,x=m(k,b.crossOrigin),E=typeof b.integrity=="string"?b.integrity:void 0,D=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;k==="style"?s.d.S(v,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:x,integrity:E,fetchPriority:D}):k==="script"&&s.d.X(v,{crossOrigin:x,integrity:E,fetchPriority:D,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},nn.preinitModule=function(v,b){if(typeof v=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var k=m(b.as,b.crossOrigin);s.d.M(v,{crossOrigin:k,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&s.d.M(v)},nn.preload=function(v,b){if(typeof v=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var k=b.as,x=m(k,b.crossOrigin);s.d.L(v,k,{crossOrigin:x,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},nn.preloadModule=function(v,b){if(typeof v=="string")if(b){var k=m(b.as,b.crossOrigin);s.d.m(v,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:k,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else s.d.m(v)},nn.requestFormReset=function(v){s.d.r(v)},nn.unstable_batchedUpdates=function(v,b){return v(b)},nn.useFormState=function(v,b,k){return _.H.useFormState(v,b,k)},nn.useFormStatus=function(){return _.H.useHostTransitionStatus()},nn.version="19.2.7",nn}var km;function Dh(){if(km)return Ad.exports;km=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),Ad.exports=U2(),Ad.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function q2(){if(Sm)return ps;Sm=1;var i=z2(),l=af(),o=Dh();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(h(e)!==e)throw Error(s(188))}function b(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var c=a.alternate;if(c===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===c.child){for(c=a.child;c;){if(c===n)return v(a),e;if(c===r)return v(a),t;c=c.sibling}throw Error(s(188))}if(n.return!==r.return)n=a,r=c;else{for(var p=!1,y=a.child;y;){if(y===n){p=!0,n=a,r=c;break}if(y===r){p=!0,r=a,n=c;break}y=y.sibling}if(!p){for(y=c.child;y;){if(y===n){p=!0,n=c,r=a;break}if(y===r){p=!0,r=c,n=a;break}y=y.sibling}if(!p)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function k(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=k(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,E=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),re=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),ye=Symbol.for("react.activity"),Be=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function Pe(e){return e===null||typeof e!="object"?null:(e=ne&&e[ne]||e["@@iterator"],typeof e=="function"?e:null)}var we=Symbol.for("react.client.reference");function Qe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===we?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case F:return"Profiler";case H:return"StrictMode";case ce:return"Suspense";case ge:return"SuspenseList";case ye:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case O:return"Portal";case re:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case te:return t=e.displayName||null,t!==null?t:Qe(e.type)||"Memo";case pe:t=e._payload,e=e._init;try{return Qe(e(t))}catch{}}return null}var Z=Array.isArray,R=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},Re=[],_e=-1;function T(e){return{current:e}}function $(e){0>_e||(e.current=Re[_e],Re[_e]=null,_e--)}function le(e,t){_e++,Re[_e]=e.current,e.current=t}var ae=T(null),Se=T(null),xe=T(null),de=T(null);function Fe(e,t){switch(le(xe,t),le(Se,e),le(ae,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?q1(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=q1(t),e=H1(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(ae),le(ae,e)}function Ye(){$(ae),$(Se),$(xe)}function Ct(e){e.memoizedState!==null&&le(de,e);var t=ae.current,n=H1(t,e.type);t!==n&&(le(Se,e),le(ae,n))}function Me(e){Se.current===e&&($(ae),$(Se)),de.current===e&&($(de),us._currentValue=me)}var se,P;function J(e){if(se===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);se=t&&t[1]||"",P=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+se+e+P}var ie=!1;function Oe(e,t){if(!e||ie)return"";ie=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(I){var U=I}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(I){U=I}e.call(Q.prototype)}}else{try{throw Error()}catch(I){U=I}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(I){if(I&&U&&typeof I.stack=="string")return[I.stack,U.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),p=c[0],y=c[1];if(p&&y){var S=p.split(`
`),z=y.split(`
`);for(a=r=0;r<S.length&&!S[r].includes("DetermineComponentFrameRoot");)r++;for(;a<z.length&&!z[a].includes("DetermineComponentFrameRoot");)a++;if(r===S.length||a===z.length)for(r=S.length-1,a=z.length-1;1<=r&&0<=a&&S[r]!==z[a];)a--;for(;1<=r&&0<=a;r--,a--)if(S[r]!==z[a]){if(r!==1||a!==1)do if(r--,a--,0>a||S[r]!==z[a]){var Y=`
`+S[r].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=r&&0<=a);break}}}finally{ie=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?J(n):""}function Ge(e,t){switch(e.tag){case 26:case 27:case 5:return J(e.type);case 16:return J("Lazy");case 13:return e.child!==t&&t!==null?J("Suspense Fallback"):J("Suspense");case 19:return J("SuspenseList");case 0:case 15:return Oe(e.type,!1);case 11:return Oe(e.type.render,!1);case 1:return Oe(e.type,!0);case 31:return J("Activity");default:return""}}function Ve(e){try{var t="",n=null;do t+=Ge(e,n),n=e,e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ce=Object.prototype.hasOwnProperty,Le=i.unstable_scheduleCallback,xt=i.unstable_cancelCallback,fn=i.unstable_shouldYield,kn=i.unstable_requestPaint,Nt=i.unstable_now,xr=i.unstable_getCurrentPriorityLevel,In=i.unstable_ImmediatePriority,Sn=i.unstable_UserBlockingPriority,sr=i.unstable_NormalPriority,En=i.unstable_LowPriority,Kt=i.unstable_IdlePriority,Ur=i.log,kr=i.unstable_setDisableYieldValue,or=null,zt=null;function Qt(e){if(typeof Ur=="function"&&kr(e),zt&&typeof zt.setStrictMode=="function")try{zt.setStrictMode(or,e)}catch{}}var $e=Math.clz32?Math.clz32:Pn,Wt=Math.log,Tn=Math.LN2;function Pn(e){return e>>>=0,e===0?32:31-(Wt(e)/Tn|0)|0}var cr=256,Fn=262144,ur=4194304;function Mn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var a=0,c=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var y=r&134217727;return y!==0?(r=y&~c,r!==0?a=Mn(r):(p&=y,p!==0?a=Mn(p):n||(n=y&~e,n!==0&&(a=Mn(n))))):(y=r&~c,y!==0?a=Mn(y):p!==0?a=Mn(p):n||(n=r&~e,n!==0&&(a=Mn(n)))),a===0?0:t!==0&&t!==a&&(t&c)===0&&(c=a&-a,n=t&-t,c>=n||c===32&&(n&4194048)!==0)?t:a}function ln(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function mn(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function an(){var e=ur;return ur<<=1,(ur&62914560)===0&&(ur=4194304),e}function ee(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function he(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function We(e,t,n,r,a,c){var p=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var y=e.entanglements,S=e.expirationTimes,z=e.hiddenUpdates;for(n=p&~n;0<n;){var Y=31-$e(n),Q=1<<Y;y[Y]=0,S[Y]=-1;var U=z[Y];if(U!==null)for(z[Y]=null,Y=0;Y<U.length;Y++){var I=U[Y];I!==null&&(I.lane&=-536870913)}n&=~Q}r!==0&&nt(e,r,0),c!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=c&~(p&~t))}function nt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-$e(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function kt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$e(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}function Gn(e,t){var n=t&-t;return n=(n&42)!==0?1:sn(n),(n&(e.suspendedLanes|t))!==0?0:n}function sn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function on(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Sr(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:cm(e.type))}function $n(e,t){var n=W.p;try{return W.p=e,t()}finally{W.p=n}}var Er=Math.random().toString(36).slice(2),jt="__reactFiber$"+Er,Jt="__reactProps$"+Er,dr="__reactContainer$"+Er,Yn="__reactEvents$"+Er,bt="__reactListeners$"+Er,Cs="__reactHandles$"+Er,fr="__reactResources$"+Er,qr="__reactMarker$"+Er;function Ql(e){delete e[jt],delete e[Jt],delete e[Yn],delete e[bt],delete e[Cs]}function mr(e){var t=e[jt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dr]||n[jt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Y1(e);e!==null;){if(n=e[jt])return n;e=Y1(e)}return t}e=n,n=e.parentNode}return null}function hr(e){if(e=e[jt]||e[dr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Xn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function pr(e){var t=e[fr];return t||(t=e[fr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function st(e){e[qr]=!0}var Tr=new Set,ol={};function Ft(e,t){Nn(e,t),Nn(e+"Capture",t)}function Nn(e,t){for(ol[e]=t,e=0;e<t.length;e++)Tr.add(t[e])}var Wl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mr={},Ti={};function Nr(e){return Ce.call(Ti,e)?!0:Ce.call(Mr,e)?!1:Wl.test(e)?Ti[e]=!0:(Mr[e]=!0,!1)}function jr(e,t,n){if(Nr(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Kn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function en(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+r)}}function Ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ga(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zl(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,c=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(p){n=""+p,c.call(this,p)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(p){n=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cl(e){if(!e._valueTracker){var t=ga(e)?"checked":"value";e._valueTracker=Zl(e,t,""+e[t])}}function Jl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ga(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function gr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ul=/[\n"\\]/g;function ve(e){return e.replace(ul,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ei(e,t,n,r,a,c,p,y){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ut(t)):e.value!==""+Ut(t)&&(e.value=""+Ut(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?_a(e,p,Ut(t)):n!=null?_a(e,p,Ut(n)):r!=null&&e.removeAttribute("value"),a==null&&c!=null&&(e.defaultChecked=!!c),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+Ut(y):e.removeAttribute("name")}function Ds(e,t,n,r,a,c,p,y){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||t!=null)){cl(e);return}n=n!=null?""+Ut(n):"",t=t!=null?""+Ut(t):n,y||t===e.value||(e.value=t),e.defaultValue=t}r=r??a,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=y?e.checked:!!r,e.defaultChecked=!!r,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),cl(e)}function _a(e,t,n){t==="number"&&gr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function dl(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Os(e,t,n){if(t!=null&&(t=""+Ut(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ut(n):""}function fl(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(Z(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n==null&&(n=""),t=n}n=Ut(t),e.defaultValue=n,r=e.textContent,r===n&&r!==""&&r!==null&&(e.value=r),cl(e)}function jn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var va=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rn(e,t,n){var r=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,n):typeof n!="number"||n===0||va.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Mi(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Rn(e,a,r)}else for(var c in t)t.hasOwnProperty(c)&&Rn(e,c,t[c])}function cn(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ec=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tc=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ti(e){return Tc.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function An(){}var V=null;function ba(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ml=null,hl=null;function pl(e){var t=hr(e);if(t&&(e=t.stateNode)){var n=e[Jt]||null;e:switch(e=t.stateNode,t.type){case"input":if(ei(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ve(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Jt]||null;if(!a)throw Error(s(90));ei(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Jl(r)}break e;case"textarea":Os(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&dl(e,!!n.multiple,t,!1)}}}var Ni=!1;function ya(e,t,n){if(Ni)return e(t,n);Ni=!0;try{var r=e(t);return r}finally{if(Ni=!1,(ml!==null||hl!==null)&&(Uo(),ml&&(t=ml,e=hl,hl=ml=null,pl(t),e)))for(t=0;t<e.length;t++)pl(e[t])}}function Rr(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Jt]||null;if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ji=!1;if(rt)try{var Ar={};Object.defineProperty(Ar,"passive",{get:function(){ji=!0}}),window.addEventListener("test",Ar,Ar),window.removeEventListener("test",Ar,Ar)}catch{ji=!1}var hn=null,wa=null,Ri=null;function Ls(){if(Ri)return Ri;var e,t=wa,n=t.length,r,a="value"in hn?hn.value:hn.textContent,c=a.length;for(e=0;e<n&&t[e]===a[e];e++);var p=n-e;for(r=1;r<=p&&t[n-r]===a[c-r];r++);return Ri=a.slice(e,1<r?1-r:void 0)}function ni(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ai(){return!0}function xa(){return!1}function St(e){function t(n,r,a,c,p){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(n=e[y],this[y]=n?n(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ai:xa,this.isPropagationStopped=xa,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ai)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ai)},persist:function(){},isPersistent:Ai}),t}var tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ci=St(tn),Et=x({},tn,{view:0,detail:0}),Bs=St(Et),ri,yt,_r,Di=x({},Et,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_r&&(_r&&e.type==="mousemove"?(ri=e.screenX-_r.screenX,yt=e.screenY-_r.screenY):yt=ri=0,_r=e),ri)},movementY:function(e){return"movementY"in e?e.movementY:yt}}),zs=St(Di),li=x({},Di,{dataTransfer:0}),Mc=St(li),Us=x({},Et,{relatedTarget:0}),gl=St(Us),_l=x({},tn,{animationName:0,elapsedTime:0,pseudoElement:0}),qs=St(_l),ka=x({},tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nc=St(ka),jc=x({},tn,{data:0}),Hs=St(jc),pn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sa={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sa[e])?!!t[e]:!1}function Oi(){return Hr}var Vs=x({},Et,{key:function(e){if(e.key){var t=pn[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ni(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gt[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oi,charCode:function(e){return e.type==="keypress"?ni(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ni(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Is=St(Vs),Rc=x({},Di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ps=St(Rc),Ac=x({},Et,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oi}),Fs=St(Ac),Gs=x({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ea=St(Gs),Cc=x({},Di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$s=St(Cc),Ys=x({},tn,{newState:0,oldState:0}),Xs=St(Ys),Dc=[9,13,27,32],Ta=rt&&"CompositionEvent"in window,vl=null;rt&&"documentMode"in document&&(vl=document.documentMode);var Ma=rt&&"TextEvent"in window&&!vl,Ks=rt&&(!Ta||vl&&8<vl&&11>=vl),Qs=" ",Ws=!1;function Zs(e,t){switch(e){case"keyup":return Dc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Js(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bl=!1;function Oc(e,t){switch(e){case"compositionend":return Js(t);case"keypress":return t.which!==32?null:(Ws=!0,Qs);case"textInput":return e=t.data,e===Qs&&Ws?null:e;default:return null}}function Lc(e,t){if(bl)return e==="compositionend"||!Ta&&Zs(e,t)?(e=Ls(),Ri=wa=hn=null,bl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ks&&t.locale!=="ko"?null:t.data;default:return null}}var Bc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bc[e.type]:t==="textarea"}function Na(e,t,n,r){ml?hl?hl.push(r):hl=[r]:ml=r,t=Go(t,"onChange"),0<t.length&&(n=new Ci("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ii=null,ai=null;function yl(e){D1(e,0)}function si(e){var t=Xn(e);if(Jl(t))return e}function ja(e,t){if(e==="change")return t}var to=!1;if(rt){var Li;if(rt){var Ra="oninput"in document;if(!Ra){var no=document.createElement("div");no.setAttribute("oninput","return;"),Ra=typeof no.oninput=="function"}Li=Ra}else Li=!1;to=Li&&(!document.documentMode||9<document.documentMode)}function Aa(){ii&&(ii.detachEvent("onpropertychange",ro),ai=ii=null)}function ro(e){if(e.propertyName==="value"&&si(ai)){var t=[];Na(t,ai,e,ba(e)),ya(yl,t)}}function zc(e,t,n){e==="focusin"?(Aa(),ii=t,ai=n,ii.attachEvent("onpropertychange",ro)):e==="focusout"&&Aa()}function Uc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return si(ai)}function qc(e,t){if(e==="click")return si(t)}function Hc(e,t){if(e==="input"||e==="change")return si(t)}function Vc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var un=typeof Object.is=="function"?Object.is:Vc;function Vr(e,t){if(un(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Ce.call(t,a)||!un(e[a],t[a]))return!1}return!0}function Cn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ca(e,t){var n=Cn(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cn(n)}}function lo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function io(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=gr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=gr(e.document)}return t}function oi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Da=rt&&"documentMode"in document&&11>=document.documentMode,Ir=null,Bi=null,Qn=null,ci=!1;function Oa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ci||Ir==null||Ir!==gr(r)||(r=Ir,"selectionStart"in r&&oi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qn&&Vr(Qn,r)||(Qn=r,r=Go(Bi,"onSelect"),0<r.length&&(t=new Ci("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ir)))}function Pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wl={animationend:Pr("Animation","AnimationEnd"),animationiteration:Pr("Animation","AnimationIteration"),animationstart:Pr("Animation","AnimationStart"),transitionrun:Pr("Transition","TransitionRun"),transitionstart:Pr("Transition","TransitionStart"),transitioncancel:Pr("Transition","TransitionCancel"),transitionend:Pr("Transition","TransitionEnd")},La={},f={};rt&&(f=document.createElement("div").style,"AnimationEvent"in window||(delete wl.animationend.animation,delete wl.animationiteration.animation,delete wl.animationstart.animation),"TransitionEvent"in window||delete wl.transitionend.transition);function g(e){if(La[e])return La[e];if(!wl[e])return e;var t=wl[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in f)return La[e]=t[n];return e}var w=g("animationend"),j=g("animationiteration"),C=g("animationstart"),X=g("transitionrun"),fe=g("transitionstart"),De=g("transitioncancel"),Ee=g("transitionend"),qe=new Map,ot="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ot.push("scrollEnd");function ht(e,t){qe.set(e,t),Ft(t,[e])}var Ue=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},et=[],gn=0,Dn=0;function _n(){for(var e=gn,t=Dn=gn=0;t<e;){var n=et[t];et[t++]=null;var r=et[t];et[t++]=null;var a=et[t];et[t++]=null;var c=et[t];if(et[t++]=null,r!==null&&a!==null){var p=r.pending;p===null?a.next=a:(a.next=p.next,p.next=a),r.pending=a}c!==0&&ui(n,a,c)}}function vr(e,t,n,r){et[gn++]=e,et[gn++]=t,et[gn++]=n,et[gn++]=r,Dn|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Cr(e,t,n,r){return vr(e,t,n,r),xl(e)}function Dr(e,t){return vr(e,null,null,t),xl(e)}function ui(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var a=!1,c=e.return;c!==null;)c.childLanes|=n,r=c.alternate,r!==null&&(r.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(a=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,a&&t!==null&&(a=31-$e(n),e=c.hiddenUpdates,r=e[a],r===null?e[a]=[t]:r.push(t),t.lane=n|536870912),c):null}function xl(e){if(50<rs)throw rs=0,Qu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Wn={};function ao(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(e,t,n,r){return new ao(e,t,n,r)}function Ic(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fr(e,t){var n=e.alternate;return n===null?(n=On(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function pf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function so(e,t,n,r,a,c){var p=0;if(r=e,typeof e=="function")Ic(e)&&(p=1);else if(typeof e=="string")p=b2(e,n,ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ye:return e=On(31,n,t,a),e.elementType=ye,e.lanes=c,e;case G:return di(n.children,a,c,t);case H:p=8,a|=24;break;case F:return e=On(12,n,t,a|2),e.elementType=F,e.lanes=c,e;case ce:return e=On(13,n,t,a),e.elementType=ce,e.lanes=c,e;case ge:return e=On(19,n,t,a),e.elementType=ge,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case re:p=10;break e;case L:p=9;break e;case q:p=11;break e;case te:p=14;break e;case pe:p=16,r=null;break e}p=29,n=Error(s(130,e===null?"null":typeof e,"")),r=null}return t=On(p,n,t,a),t.elementType=e,t.type=r,t.lanes=c,t}function di(e,t,n,r){return e=On(7,e,r,t),e.lanes=n,e}function Pc(e,t,n){return e=On(6,e,null,t),e.lanes=n,e}function gf(e){var t=On(18,null,null,0);return t.stateNode=e,t}function Fc(e,t,n){return t=On(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var _f=new WeakMap;function Zn(e,t){if(typeof e=="object"&&e!==null){var n=_f.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ve(t)},_f.set(e,t),t)}return{value:e,source:t,stack:Ve(t)}}var zi=[],Ui=0,oo=null,Ba=0,Jn=[],er=0,kl=null,Or=1,Lr="";function Gr(e,t){zi[Ui++]=Ba,zi[Ui++]=oo,oo=e,Ba=t}function vf(e,t,n){Jn[er++]=Or,Jn[er++]=Lr,Jn[er++]=kl,kl=e;var r=Or;e=Lr;var a=32-$e(r)-1;r&=~(1<<a),n+=1;var c=32-$e(t)+a;if(30<c){var p=a-a%5;c=(r&(1<<p)-1).toString(32),r>>=p,a-=p,Or=1<<32-$e(t)+a|n<<a|r,Lr=c+e}else Or=1<<c|n<<a|r,Lr=e}function Gc(e){e.return!==null&&(Gr(e,1),vf(e,1,0))}function $c(e){for(;e===oo;)oo=zi[--Ui],zi[Ui]=null,Ba=zi[--Ui],zi[Ui]=null;for(;e===kl;)kl=Jn[--er],Jn[er]=null,Lr=Jn[--er],Jn[er]=null,Or=Jn[--er],Jn[er]=null}function bf(e,t){Jn[er++]=Or,Jn[er++]=Lr,Jn[er++]=kl,Or=t.id,Lr=t.overflow,kl=e}var Gt=null,_t=null,tt=!1,Sl=null,tr=!1,Yc=Error(s(519));function El(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw za(Zn(t,e)),Yc}function yf(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[jt]=e,t[Jt]=r,n){case"dialog":Ke("cancel",t),Ke("close",t);break;case"iframe":case"object":case"embed":Ke("load",t);break;case"video":case"audio":for(n=0;n<is.length;n++)Ke(is[n],t);break;case"source":Ke("error",t);break;case"img":case"image":case"link":Ke("error",t),Ke("load",t);break;case"details":Ke("toggle",t);break;case"input":Ke("invalid",t),Ds(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ke("invalid",t);break;case"textarea":Ke("invalid",t),fl(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||r.suppressHydrationWarning===!0||z1(t.textContent,n)?(r.popover!=null&&(Ke("beforetoggle",t),Ke("toggle",t)),r.onScroll!=null&&Ke("scroll",t),r.onScrollEnd!=null&&Ke("scrollend",t),r.onClick!=null&&(t.onclick=An),t=!0):t=!1,t||El(e,!0)}function wf(e){for(Gt=e.return;Gt;)switch(Gt.tag){case 5:case 31:case 13:tr=!1;return;case 27:case 3:tr=!0;return;default:Gt=Gt.return}}function qi(e){if(e!==Gt)return!1;if(!tt)return wf(e),tt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||dd(e.type,e.memoizedProps)),n=!n),n&&_t&&El(e),wf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));_t=$1(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));_t=$1(e)}else t===27?(t=_t,ql(e.type)?(e=gd,gd=null,_t=e):_t=t):_t=Gt?rr(e.stateNode.nextSibling):null;return!0}function fi(){_t=Gt=null,tt=!1}function Xc(){var e=Sl;return e!==null&&(wn===null?wn=e:wn.push.apply(wn,e),Sl=null),e}function za(e){Sl===null?Sl=[e]:Sl.push(e)}var Kc=T(null),mi=null,$r=null;function Tl(e,t,n){le(Kc,t._currentValue),t._currentValue=n}function Yr(e){e._currentValue=Kc.current,$(Kc)}function Qc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Wc(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var c=a.dependencies;if(c!==null){var p=a.child;c=c.firstContext;e:for(;c!==null;){var y=c;c=a;for(var S=0;S<t.length;S++)if(y.context===t[S]){c.lanes|=n,y=c.alternate,y!==null&&(y.lanes|=n),Qc(c.return,n,e),r||(p=null);break e}c=y.next}}else if(a.tag===18){if(p=a.return,p===null)throw Error(s(341));p.lanes|=n,c=p.alternate,c!==null&&(c.lanes|=n),Qc(p,n,e),p=null}else p=a.child;if(p!==null)p.return=a;else for(p=a;p!==null;){if(p===e){p=null;break}if(a=p.sibling,a!==null){a.return=p.return,p=a;break}p=p.return}a=p}}function Hi(e,t,n,r){e=null;for(var a=t,c=!1;a!==null;){if(!c){if((a.flags&524288)!==0)c=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var p=a.alternate;if(p===null)throw Error(s(387));if(p=p.memoizedProps,p!==null){var y=a.type;un(a.pendingProps.value,p.value)||(e!==null?e.push(y):e=[y])}}else if(a===de.current){if(p=a.alternate,p===null)throw Error(s(387));p.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(us):e=[us])}a=a.return}e!==null&&Wc(t,e,n,r),t.flags|=262144}function co(e){for(e=e.firstContext;e!==null;){if(!un(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hi(e){mi=e,$r=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $t(e){return xf(mi,e)}function uo(e,t){return mi===null&&hi(e),xf(e,t)}function xf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},$r===null){if(e===null)throw Error(s(308));$r=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $r=$r.next=t;return n}var pp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},gp=i.unstable_scheduleCallback,_p=i.unstable_NormalPriority,Dt={$$typeof:re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zc(){return{controller:new pp,data:new Map,refCount:0}}function Ua(e){e.refCount--,e.refCount===0&&gp(_p,function(){e.controller.abort()})}var qa=null,Jc=0,Vi=0,Ii=null;function vp(e,t){if(qa===null){var n=qa=[];Jc=0,Vi=nd(),Ii={status:"pending",value:void 0,then:function(r){n.push(r)}}}return Jc++,t.then(kf,kf),t}function kf(){if(--Jc===0&&qa!==null){Ii!==null&&(Ii.status="fulfilled");var e=qa;qa=null,Vi=0,Ii=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function bp(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(r.status="rejected",r.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),r}var Sf=R.S;R.S=function(e,t){s1=Nt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&vp(e,t),Sf!==null&&Sf(e,t)};var pi=T(null);function eu(){var e=pi.current;return e!==null?e:pt.pooledCache}function fo(e,t){t===null?le(pi,pi.current):le(pi,t.pool)}function Ef(){var e=eu();return e===null?null:{parent:Dt._currentValue,pool:e}}var Pi=Error(s(460)),tu=Error(s(474)),mo=Error(s(542)),ho={then:function(){}};function Tf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Mf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(An,An),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,jf(e),e;default:if(typeof t.status=="string")t.then(An,An);else{if(e=pt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=r}},function(r){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,jf(e),e}throw _i=t,Pi}}function gi(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(_i=n,Pi):n}}var _i=null;function Nf(){if(_i===null)throw Error(s(459));var e=_i;return _i=null,e}function jf(e){if(e===Pi||e===mo)throw Error(s(483))}var Fi=null,Ha=0;function po(e){var t=Ha;return Ha+=1,Fi===null&&(Fi=[]),Mf(Fi,e,t)}function Va(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function go(e,t){throw t.$$typeof===E?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Rf(e){function t(A,M){if(e){var B=A.deletions;B===null?(A.deletions=[M],A.flags|=16):B.push(M)}}function n(A,M){if(!e)return null;for(;M!==null;)t(A,M),M=M.sibling;return null}function r(A){for(var M=new Map;A!==null;)A.key!==null?M.set(A.key,A):M.set(A.index,A),A=A.sibling;return M}function a(A,M){return A=Fr(A,M),A.index=0,A.sibling=null,A}function c(A,M,B){return A.index=B,e?(B=A.alternate,B!==null?(B=B.index,B<M?(A.flags|=67108866,M):B):(A.flags|=67108866,M)):(A.flags|=1048576,M)}function p(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function y(A,M,B,K){return M===null||M.tag!==6?(M=Pc(B,A.mode,K),M.return=A,M):(M=a(M,B),M.return=A,M)}function S(A,M,B,K){var Ne=B.type;return Ne===G?Y(A,M,B.props.children,K,B.key):M!==null&&(M.elementType===Ne||typeof Ne=="object"&&Ne!==null&&Ne.$$typeof===pe&&gi(Ne)===M.type)?(M=a(M,B.props),Va(M,B),M.return=A,M):(M=so(B.type,B.key,B.props,null,A.mode,K),Va(M,B),M.return=A,M)}function z(A,M,B,K){return M===null||M.tag!==4||M.stateNode.containerInfo!==B.containerInfo||M.stateNode.implementation!==B.implementation?(M=Fc(B,A.mode,K),M.return=A,M):(M=a(M,B.children||[]),M.return=A,M)}function Y(A,M,B,K,Ne){return M===null||M.tag!==7?(M=di(B,A.mode,K,Ne),M.return=A,M):(M=a(M,B),M.return=A,M)}function Q(A,M,B){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=Pc(""+M,A.mode,B),M.return=A,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case D:return B=so(M.type,M.key,M.props,null,A.mode,B),Va(B,M),B.return=A,B;case O:return M=Fc(M,A.mode,B),M.return=A,M;case pe:return M=gi(M),Q(A,M,B)}if(Z(M)||Pe(M))return M=di(M,A.mode,B,null),M.return=A,M;if(typeof M.then=="function")return Q(A,po(M),B);if(M.$$typeof===re)return Q(A,uo(A,M),B);go(A,M)}return null}function U(A,M,B,K){var Ne=M!==null?M.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return Ne!==null?null:y(A,M,""+B,K);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case D:return B.key===Ne?S(A,M,B,K):null;case O:return B.key===Ne?z(A,M,B,K):null;case pe:return B=gi(B),U(A,M,B,K)}if(Z(B)||Pe(B))return Ne!==null?null:Y(A,M,B,K,null);if(typeof B.then=="function")return U(A,M,po(B),K);if(B.$$typeof===re)return U(A,M,uo(A,B),K);go(A,B)}return null}function I(A,M,B,K,Ne){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return A=A.get(B)||null,y(M,A,""+K,Ne);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case D:return A=A.get(K.key===null?B:K.key)||null,S(M,A,K,Ne);case O:return A=A.get(K.key===null?B:K.key)||null,z(M,A,K,Ne);case pe:return K=gi(K),I(A,M,B,K,Ne)}if(Z(K)||Pe(K))return A=A.get(B)||null,Y(M,A,K,Ne,null);if(typeof K.then=="function")return I(A,M,B,po(K),Ne);if(K.$$typeof===re)return I(A,M,B,uo(M,K),Ne);go(M,K)}return null}function ke(A,M,B,K){for(var Ne=null,lt=null,Te=M,Ie=M=0,Je=null;Te!==null&&Ie<B.length;Ie++){Te.index>Ie?(Je=Te,Te=null):Je=Te.sibling;var it=U(A,Te,B[Ie],K);if(it===null){Te===null&&(Te=Je);break}e&&Te&&it.alternate===null&&t(A,Te),M=c(it,M,Ie),lt===null?Ne=it:lt.sibling=it,lt=it,Te=Je}if(Ie===B.length)return n(A,Te),tt&&Gr(A,Ie),Ne;if(Te===null){for(;Ie<B.length;Ie++)Te=Q(A,B[Ie],K),Te!==null&&(M=c(Te,M,Ie),lt===null?Ne=Te:lt.sibling=Te,lt=Te);return tt&&Gr(A,Ie),Ne}for(Te=r(Te);Ie<B.length;Ie++)Je=I(Te,A,Ie,B[Ie],K),Je!==null&&(e&&Je.alternate!==null&&Te.delete(Je.key===null?Ie:Je.key),M=c(Je,M,Ie),lt===null?Ne=Je:lt.sibling=Je,lt=Je);return e&&Te.forEach(function(Fl){return t(A,Fl)}),tt&&Gr(A,Ie),Ne}function je(A,M,B,K){if(B==null)throw Error(s(151));for(var Ne=null,lt=null,Te=M,Ie=M=0,Je=null,it=B.next();Te!==null&&!it.done;Ie++,it=B.next()){Te.index>Ie?(Je=Te,Te=null):Je=Te.sibling;var Fl=U(A,Te,it.value,K);if(Fl===null){Te===null&&(Te=Je);break}e&&Te&&Fl.alternate===null&&t(A,Te),M=c(Fl,M,Ie),lt===null?Ne=Fl:lt.sibling=Fl,lt=Fl,Te=Je}if(it.done)return n(A,Te),tt&&Gr(A,Ie),Ne;if(Te===null){for(;!it.done;Ie++,it=B.next())it=Q(A,it.value,K),it!==null&&(M=c(it,M,Ie),lt===null?Ne=it:lt.sibling=it,lt=it);return tt&&Gr(A,Ie),Ne}for(Te=r(Te);!it.done;Ie++,it=B.next())it=I(Te,A,Ie,it.value,K),it!==null&&(e&&it.alternate!==null&&Te.delete(it.key===null?Ie:it.key),M=c(it,M,Ie),lt===null?Ne=it:lt.sibling=it,lt=it);return e&&Te.forEach(function(R2){return t(A,R2)}),tt&&Gr(A,Ie),Ne}function mt(A,M,B,K){if(typeof B=="object"&&B!==null&&B.type===G&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case D:e:{for(var Ne=B.key;M!==null;){if(M.key===Ne){if(Ne=B.type,Ne===G){if(M.tag===7){n(A,M.sibling),K=a(M,B.props.children),K.return=A,A=K;break e}}else if(M.elementType===Ne||typeof Ne=="object"&&Ne!==null&&Ne.$$typeof===pe&&gi(Ne)===M.type){n(A,M.sibling),K=a(M,B.props),Va(K,B),K.return=A,A=K;break e}n(A,M);break}else t(A,M);M=M.sibling}B.type===G?(K=di(B.props.children,A.mode,K,B.key),K.return=A,A=K):(K=so(B.type,B.key,B.props,null,A.mode,K),Va(K,B),K.return=A,A=K)}return p(A);case O:e:{for(Ne=B.key;M!==null;){if(M.key===Ne)if(M.tag===4&&M.stateNode.containerInfo===B.containerInfo&&M.stateNode.implementation===B.implementation){n(A,M.sibling),K=a(M,B.children||[]),K.return=A,A=K;break e}else{n(A,M);break}else t(A,M);M=M.sibling}K=Fc(B,A.mode,K),K.return=A,A=K}return p(A);case pe:return B=gi(B),mt(A,M,B,K)}if(Z(B))return ke(A,M,B,K);if(Pe(B)){if(Ne=Pe(B),typeof Ne!="function")throw Error(s(150));return B=Ne.call(B),je(A,M,B,K)}if(typeof B.then=="function")return mt(A,M,po(B),K);if(B.$$typeof===re)return mt(A,M,uo(A,B),K);go(A,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,M!==null&&M.tag===6?(n(A,M.sibling),K=a(M,B),K.return=A,A=K):(n(A,M),K=Pc(B,A.mode,K),K.return=A,A=K),p(A)):n(A,M)}return function(A,M,B,K){try{Ha=0;var Ne=mt(A,M,B,K);return Fi=null,Ne}catch(Te){if(Te===Pi||Te===mo)throw Te;var lt=On(29,Te,null,A.mode);return lt.lanes=K,lt.return=A,lt}finally{}}}var vi=Rf(!0),Af=Rf(!1),Ml=!1;function nu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ru(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Nl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function jl(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(at&2)!==0){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=xl(e),ui(e,null,n),t}return vr(e,r,t,n),xl(e)}function Ia(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,kt(e,n)}}function lu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?a=c=p:c=c.next=p,n=n.next}while(n!==null);c===null?a=c=t:c=c.next=t}else a=c=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var iu=!1;function Pa(){if(iu){var e=Ii;if(e!==null)throw e}}function Fa(e,t,n,r){iu=!1;var a=e.updateQueue;Ml=!1;var c=a.firstBaseUpdate,p=a.lastBaseUpdate,y=a.shared.pending;if(y!==null){a.shared.pending=null;var S=y,z=S.next;S.next=null,p===null?c=z:p.next=z,p=S;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,y=Y.lastBaseUpdate,y!==p&&(y===null?Y.firstBaseUpdate=z:y.next=z,Y.lastBaseUpdate=S))}if(c!==null){var Q=a.baseState;p=0,Y=z=S=null,y=c;do{var U=y.lane&-536870913,I=U!==y.lane;if(I?(Ze&U)===U:(r&U)===U){U!==0&&U===Vi&&(iu=!0),Y!==null&&(Y=Y.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var ke=e,je=y;U=t;var mt=n;switch(je.tag){case 1:if(ke=je.payload,typeof ke=="function"){Q=ke.call(mt,Q,U);break e}Q=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=je.payload,U=typeof ke=="function"?ke.call(mt,Q,U):ke,U==null)break e;Q=x({},Q,U);break e;case 2:Ml=!0}}U=y.callback,U!==null&&(e.flags|=64,I&&(e.flags|=8192),I=a.callbacks,I===null?a.callbacks=[U]:I.push(U))}else I={lane:U,tag:y.tag,payload:y.payload,callback:y.callback,next:null},Y===null?(z=Y=I,S=Q):Y=Y.next=I,p|=U;if(y=y.next,y===null){if(y=a.shared.pending,y===null)break;I=y,y=I.next,I.next=null,a.lastBaseUpdate=I,a.shared.pending=null}}while(!0);Y===null&&(S=Q),a.baseState=S,a.firstBaseUpdate=z,a.lastBaseUpdate=Y,c===null&&(a.shared.lanes=0),Ol|=p,e.lanes=p,e.memoizedState=Q}}function Cf(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Df(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Cf(n[e],t)}var Gi=T(null),_o=T(0);function Of(e,t){e=nl,le(_o,e),le(Gi,t),nl=e|t.baseLanes}function au(){le(_o,nl),le(Gi,Gi.current)}function su(){nl=_o.current,$(Gi),$(_o)}var Ln=T(null),nr=null;function Rl(e){var t=e.alternate;le(Rt,Rt.current&1),le(Ln,e),nr===null&&(t===null||Gi.current!==null||t.memoizedState!==null)&&(nr=e)}function ou(e){le(Rt,Rt.current),le(Ln,e),nr===null&&(nr=e)}function Lf(e){e.tag===22?(le(Rt,Rt.current),le(Ln,e),nr===null&&(nr=e)):Al()}function Al(){le(Rt,Rt.current),le(Ln,Ln.current)}function Bn(e){$(Ln),nr===e&&(nr=null),$(Rt)}var Rt=T(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||hd(n)||pd(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xr=0,He=null,dt=null,Ot=null,bo=!1,$i=!1,bi=!1,yo=0,Ga=0,Yi=null,yp=0;function Tt(){throw Error(s(321))}function cu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!un(e[n],t[n]))return!1;return!0}function uu(e,t,n,r,a,c){return Xr=c,He=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?v0:Eu,bi=!1,c=n(r,a),bi=!1,$i&&(c=zf(t,n,r,a)),Bf(e),c}function Bf(e){R.H=Xa;var t=dt!==null&&dt.next!==null;if(Xr=0,Ot=dt=He=null,bo=!1,Ga=0,Yi=null,t)throw Error(s(300));e===null||Lt||(e=e.dependencies,e!==null&&co(e)&&(Lt=!0))}function zf(e,t,n,r){He=e;var a=0;do{if($i&&(Yi=null),Ga=0,$i=!1,25<=a)throw Error(s(301));if(a+=1,Ot=dt=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}R.H=b0,c=t(n,r)}while($i);return c}function wp(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?$a(t):t,e=e.useState()[0],(dt!==null?dt.memoizedState:null)!==e&&(He.flags|=1024),t}function du(){var e=yo!==0;return yo=0,e}function fu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function mu(e){if(bo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bo=!1}Xr=0,Ot=dt=He=null,$i=!1,Ga=yo=0,Yi=null}function dn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?He.memoizedState=Ot=e:Ot=Ot.next=e,Ot}function At(){if(dt===null){var e=He.alternate;e=e!==null?e.memoizedState:null}else e=dt.next;var t=Ot===null?He.memoizedState:Ot.next;if(t!==null)Ot=t,dt=e;else{if(e===null)throw He.alternate===null?Error(s(467)):Error(s(310));dt=e,e={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},Ot===null?He.memoizedState=Ot=e:Ot=Ot.next=e}return Ot}function wo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $a(e){var t=Ga;return Ga+=1,Yi===null&&(Yi=[]),e=Mf(Yi,e,t),t=He,(Ot===null?t.memoizedState:Ot.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?v0:Eu),e}function xo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $a(e);if(e.$$typeof===re)return $t(e)}throw Error(s(438,String(e)))}function hu(e){var t=null,n=He.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=He.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=wo(),He.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=Be;return t.index++,n}function Kr(e,t){return typeof t=="function"?t(e):t}function ko(e){var t=At();return pu(t,dt,e)}function pu(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var a=e.baseQueue,c=r.pending;if(c!==null){if(a!==null){var p=a.next;a.next=c.next,c.next=p}t.baseQueue=a=c,r.pending=null}if(c=e.baseState,a===null)e.memoizedState=c;else{t=a.next;var y=p=null,S=null,z=t,Y=!1;do{var Q=z.lane&-536870913;if(Q!==z.lane?(Ze&Q)===Q:(Xr&Q)===Q){var U=z.revertLane;if(U===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),Q===Vi&&(Y=!0);else if((Xr&U)===U){z=z.next,U===Vi&&(Y=!0);continue}else Q={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},S===null?(y=S=Q,p=c):S=S.next=Q,He.lanes|=U,Ol|=U;Q=z.action,bi&&n(c,Q),c=z.hasEagerState?z.eagerState:n(c,Q)}else U={lane:Q,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},S===null?(y=S=U,p=c):S=S.next=U,He.lanes|=Q,Ol|=Q;z=z.next}while(z!==null&&z!==t);if(S===null?p=c:S.next=y,!un(c,e.memoizedState)&&(Lt=!0,Y&&(n=Ii,n!==null)))throw n;e.memoizedState=c,e.baseState=p,e.baseQueue=S,r.lastRenderedState=c}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function gu(e){var t=At(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,c=t.memoizedState;if(a!==null){n.pending=null;var p=a=a.next;do c=e(c,p.action),p=p.next;while(p!==a);un(c,t.memoizedState)||(Lt=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,r]}function Uf(e,t,n){var r=He,a=At(),c=tt;if(c){if(n===void 0)throw Error(s(407));n=n()}else n=t();var p=!un((dt||a).memoizedState,n);if(p&&(a.memoizedState=n,Lt=!0),a=a.queue,bu(Vf.bind(null,r,a,e),[e]),a.getSnapshot!==t||p||Ot!==null&&Ot.memoizedState.tag&1){if(r.flags|=2048,Xi(9,{destroy:void 0},Hf.bind(null,r,a,n,t),null),pt===null)throw Error(s(349));c||(Xr&127)!==0||qf(r,t,n)}return n}function qf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=He.updateQueue,t===null?(t=wo(),He.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hf(e,t,n,r){t.value=n,t.getSnapshot=r,If(t)&&Pf(e)}function Vf(e,t,n){return n(function(){If(t)&&Pf(e)})}function If(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!un(e,n)}catch{return!0}}function Pf(e){var t=Dr(e,2);t!==null&&xn(t,e,2)}function _u(e){var t=dn();if(typeof e=="function"){var n=e;if(e=n(),bi){Qt(!0);try{n()}finally{Qt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kr,lastRenderedState:e},t}function Ff(e,t,n,r){return e.baseState=n,pu(e,dt,typeof r=="function"?r:Kr)}function xp(e,t,n,r,a){if(To(e))throw Error(s(485));if(e=t.action,e!==null){var c={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};R.T!==null?n(!0):c.isTransition=!1,r(c),n=t.pending,n===null?(c.next=t.pending=c,Gf(t,c)):(c.next=n.next,t.pending=n.next=c)}}function Gf(e,t){var n=t.action,r=t.payload,a=e.state;if(t.isTransition){var c=R.T,p={};R.T=p;try{var y=n(a,r),S=R.S;S!==null&&S(p,y),$f(e,t,y)}catch(z){vu(e,t,z)}finally{c!==null&&p.types!==null&&(c.types=p.types),R.T=c}}else try{c=n(a,r),$f(e,t,c)}catch(z){vu(e,t,z)}}function $f(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){Yf(e,t,r)},function(r){return vu(e,t,r)}):Yf(e,t,n)}function Yf(e,t,n){t.status="fulfilled",t.value=n,Xf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Gf(e,n)))}function vu(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=n,Xf(t),t=t.next;while(t!==r)}e.action=null}function Xf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Kf(e,t){return t}function Qf(e,t){if(tt){var n=pt.formState;if(n!==null){e:{var r=He;if(tt){if(_t){t:{for(var a=_t,c=tr;a.nodeType!==8;){if(!c){a=null;break t}if(a=rr(a.nextSibling),a===null){a=null;break t}}c=a.data,a=c==="F!"||c==="F"?a:null}if(a){_t=rr(a.nextSibling),r=a.data==="F!";break e}}El(r)}r=!1}r&&(t=n[0])}}return n=dn(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kf,lastRenderedState:t},n.queue=r,n=p0.bind(null,He,r),r.dispatch=n,r=_u(!1),c=Su.bind(null,He,!1,r.queue),r=dn(),a={state:t,dispatch:null,action:e,pending:null},r.queue=a,n=xp.bind(null,He,a,c,n),a.dispatch=n,r.memoizedState=e,[t,n,!1]}function Wf(e){var t=At();return Zf(t,dt,e)}function Zf(e,t,n){if(t=pu(e,t,Kf)[0],e=ko(Kr)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=$a(t)}catch(p){throw p===Pi?mo:p}else r=t;t=At();var a=t.queue,c=a.dispatch;return n!==t.memoizedState&&(He.flags|=2048,Xi(9,{destroy:void 0},kp.bind(null,a,n),null)),[r,c,e]}function kp(e,t){e.action=t}function Jf(e){var t=At(),n=dt;if(n!==null)return Zf(t,n,e);At(),t=t.memoizedState,n=At();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Xi(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=He.updateQueue,t===null&&(t=wo(),He.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function e0(){return At().memoizedState}function So(e,t,n,r){var a=dn();He.flags|=e,a.memoizedState=Xi(1|t,{destroy:void 0},n,r===void 0?null:r)}function Eo(e,t,n,r){var a=At();r=r===void 0?null:r;var c=a.memoizedState.inst;dt!==null&&r!==null&&cu(r,dt.memoizedState.deps)?a.memoizedState=Xi(t,c,n,r):(He.flags|=e,a.memoizedState=Xi(1|t,c,n,r))}function t0(e,t){So(8390656,8,e,t)}function bu(e,t){Eo(2048,8,e,t)}function Sp(e){He.flags|=4;var t=He.updateQueue;if(t===null)t=wo(),He.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function n0(e){var t=At().memoizedState;return Sp({ref:t,nextImpl:e}),function(){if((at&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function r0(e,t){return Eo(4,2,e,t)}function l0(e,t){return Eo(4,4,e,t)}function i0(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function a0(e,t,n){n=n!=null?n.concat([e]):null,Eo(4,4,i0.bind(null,t,e),n)}function yu(){}function s0(e,t){var n=At();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&cu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function o0(e,t){var n=At();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&cu(t,r[1]))return r[0];if(r=e(),bi){Qt(!0);try{e()}finally{Qt(!1)}}return n.memoizedState=[r,t],r}function wu(e,t,n){return n===void 0||(Xr&1073741824)!==0&&(Ze&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=c1(),He.lanes|=e,Ol|=e,n)}function c0(e,t,n,r){return un(n,t)?n:Gi.current!==null?(e=wu(e,n,r),un(e,t)||(Lt=!0),e):(Xr&42)===0||(Xr&1073741824)!==0&&(Ze&261930)===0?(Lt=!0,e.memoizedState=n):(e=c1(),He.lanes|=e,Ol|=e,t)}function u0(e,t,n,r,a){var c=W.p;W.p=c!==0&&8>c?c:8;var p=R.T,y={};R.T=y,Su(e,!1,t,n);try{var S=a(),z=R.S;if(z!==null&&z(y,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var Y=bp(S,r);Ya(e,t,Y,qn(e))}else Ya(e,t,r,qn(e))}catch(Q){Ya(e,t,{then:function(){},status:"rejected",reason:Q},qn())}finally{W.p=c,p!==null&&y.types!==null&&(p.types=y.types),R.T=p}}function Ep(){}function xu(e,t,n,r){if(e.tag!==5)throw Error(s(476));var a=d0(e).queue;u0(e,a,t,me,n===null?Ep:function(){return f0(e),n(r)})}function d0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kr,lastRenderedState:me},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kr,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function f0(e){var t=d0(e);t.next===null&&(t=e.alternate.memoizedState),Ya(e,t.next.queue,{},qn())}function ku(){return $t(us)}function m0(){return At().memoizedState}function h0(){return At().memoizedState}function Tp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=qn();e=Nl(n);var r=jl(t,e,n);r!==null&&(xn(r,t,n),Ia(r,t,n)),t={cache:Zc()},e.payload=t;return}t=t.return}}function Mp(e,t,n){var r=qn();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},To(e)?g0(t,n):(n=Cr(e,t,n,r),n!==null&&(xn(n,e,r),_0(n,t,r)))}function p0(e,t,n){var r=qn();Ya(e,t,n,r)}function Ya(e,t,n,r){var a={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(To(e))g0(t,a);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var p=t.lastRenderedState,y=c(p,n);if(a.hasEagerState=!0,a.eagerState=y,un(y,p))return vr(e,t,a,0),pt===null&&_n(),!1}catch{}finally{}if(n=Cr(e,t,a,r),n!==null)return xn(n,e,r),_0(n,t,r),!0}return!1}function Su(e,t,n,r){if(r={lane:2,revertLane:nd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},To(e)){if(t)throw Error(s(479))}else t=Cr(e,n,r,2),t!==null&&xn(t,e,2)}function To(e){var t=e.alternate;return e===He||t!==null&&t===He}function g0(e,t){$i=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _0(e,t,n){if((n&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,kt(e,n)}}var Xa={readContext:$t,use:xo,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useLayoutEffect:Tt,useInsertionEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useSyncExternalStore:Tt,useId:Tt,useHostTransitionStatus:Tt,useFormState:Tt,useActionState:Tt,useOptimistic:Tt,useMemoCache:Tt,useCacheRefresh:Tt};Xa.useEffectEvent=Tt;var v0={readContext:$t,use:xo,useCallback:function(e,t){return dn().memoizedState=[e,t===void 0?null:t],e},useContext:$t,useEffect:t0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,So(4194308,4,i0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return So(4194308,4,e,t)},useInsertionEffect:function(e,t){So(4,2,e,t)},useMemo:function(e,t){var n=dn();t=t===void 0?null:t;var r=e();if(bi){Qt(!0);try{e()}finally{Qt(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=dn();if(n!==void 0){var a=n(t);if(bi){Qt(!0);try{n(t)}finally{Qt(!1)}}}else a=t;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=Mp.bind(null,He,e),[r.memoizedState,e]},useRef:function(e){var t=dn();return e={current:e},t.memoizedState=e},useState:function(e){e=_u(e);var t=e.queue,n=p0.bind(null,He,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:yu,useDeferredValue:function(e,t){var n=dn();return wu(n,e,t)},useTransition:function(){var e=_u(!1);return e=u0.bind(null,He,e.queue,!0,!1),dn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=He,a=dn();if(tt){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),pt===null)throw Error(s(349));(Ze&127)!==0||qf(r,t,n)}a.memoizedState=n;var c={value:n,getSnapshot:t};return a.queue=c,t0(Vf.bind(null,r,c,e),[e]),r.flags|=2048,Xi(9,{destroy:void 0},Hf.bind(null,r,c,n,t),null),n},useId:function(){var e=dn(),t=pt.identifierPrefix;if(tt){var n=Lr,r=Or;n=(r&~(1<<32-$e(r)-1)).toString(32)+n,t="_"+t+"R_"+n,n=yo++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=yp++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ku,useFormState:Qf,useActionState:Qf,useOptimistic:function(e){var t=dn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Su.bind(null,He,!0,n),n.dispatch=t,[e,t]},useMemoCache:hu,useCacheRefresh:function(){return dn().memoizedState=Tp.bind(null,He)},useEffectEvent:function(e){var t=dn(),n={impl:e};return t.memoizedState=n,function(){if((at&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Eu={readContext:$t,use:xo,useCallback:s0,useContext:$t,useEffect:bu,useImperativeHandle:a0,useInsertionEffect:r0,useLayoutEffect:l0,useMemo:o0,useReducer:ko,useRef:e0,useState:function(){return ko(Kr)},useDebugValue:yu,useDeferredValue:function(e,t){var n=At();return c0(n,dt.memoizedState,e,t)},useTransition:function(){var e=ko(Kr)[0],t=At().memoizedState;return[typeof e=="boolean"?e:$a(e),t]},useSyncExternalStore:Uf,useId:m0,useHostTransitionStatus:ku,useFormState:Wf,useActionState:Wf,useOptimistic:function(e,t){var n=At();return Ff(n,dt,e,t)},useMemoCache:hu,useCacheRefresh:h0};Eu.useEffectEvent=n0;var b0={readContext:$t,use:xo,useCallback:s0,useContext:$t,useEffect:bu,useImperativeHandle:a0,useInsertionEffect:r0,useLayoutEffect:l0,useMemo:o0,useReducer:gu,useRef:e0,useState:function(){return gu(Kr)},useDebugValue:yu,useDeferredValue:function(e,t){var n=At();return dt===null?wu(n,e,t):c0(n,dt.memoizedState,e,t)},useTransition:function(){var e=gu(Kr)[0],t=At().memoizedState;return[typeof e=="boolean"?e:$a(e),t]},useSyncExternalStore:Uf,useId:m0,useHostTransitionStatus:ku,useFormState:Jf,useActionState:Jf,useOptimistic:function(e,t){var n=At();return dt!==null?Ff(n,dt,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:hu,useCacheRefresh:h0};b0.useEffectEvent=n0;function Tu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:x({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mu={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=qn(),a=Nl(r);a.payload=t,n!=null&&(a.callback=n),t=jl(e,a,r),t!==null&&(xn(t,e,r),Ia(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=qn(),a=Nl(r);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=jl(e,a,r),t!==null&&(xn(t,e,r),Ia(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=qn(),r=Nl(n);r.tag=2,t!=null&&(r.callback=t),t=jl(e,r,n),t!==null&&(xn(t,e,n),Ia(t,e,n))}};function y0(e,t,n,r,a,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,c,p):t.prototype&&t.prototype.isPureReactComponent?!Vr(n,r)||!Vr(a,c):!0}function w0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Mu.enqueueReplaceState(t,t.state,null)}function yi(e,t){var n=t;if("ref"in t){n={};for(var r in t)r!=="ref"&&(n[r]=t[r])}if(e=e.defaultProps){n===t&&(n=x({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function x0(e){Ue(e)}function k0(e){console.error(e)}function S0(e){Ue(e)}function Mo(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function E0(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Nu(e,t,n){return n=Nl(n),n.tag=3,n.payload={element:null},n.callback=function(){Mo(e,t)},n}function T0(e){return e=Nl(e),e.tag=3,e}function M0(e,t,n,r){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var c=r.value;e.payload=function(){return a(c)},e.callback=function(){E0(t,n,r)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){E0(t,n,r),typeof a!="function"&&(Ll===null?Ll=new Set([this]):Ll.add(this));var y=r.stack;this.componentDidCatch(r.value,{componentStack:y!==null?y:""})})}function Np(e,t,n,r,a){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=n.alternate,t!==null&&Hi(t,n,a,!0),n=Ln.current,n!==null){switch(n.tag){case 31:case 13:return nr===null?qo():n.alternate===null&&Mt===0&&(Mt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ho?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ju(e,r,a)),!1;case 22:return n.flags|=65536,r===ho?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ju(e,r,a)),!1}throw Error(s(435,n.tag))}return Ju(e,r,a),qo(),!1}if(tt)return t=Ln.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Yc&&(e=Error(s(422),{cause:r}),za(Zn(e,n)))):(r!==Yc&&(t=Error(s(423),{cause:r}),za(Zn(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Zn(r,n),a=Nu(e.stateNode,r,a),lu(e,a),Mt!==4&&(Mt=2)),!1;var c=Error(s(520),{cause:r});if(c=Zn(c,n),ns===null?ns=[c]:ns.push(c),Mt!==4&&(Mt=2),t===null)return!0;r=Zn(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Nu(n.stateNode,r,e),lu(n,e),!1;case 1:if(t=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Ll===null||!Ll.has(c))))return n.flags|=65536,a&=-a,n.lanes|=a,a=T0(a),M0(a,e,n,r),lu(n,a),!1}n=n.return}while(n!==null);return!1}var ju=Error(s(461)),Lt=!1;function Yt(e,t,n,r){t.child=e===null?Af(t,null,n,r):vi(t,e.child,n,r)}function N0(e,t,n,r,a){n=n.render;var c=t.ref;if("ref"in r){var p={};for(var y in r)y!=="ref"&&(p[y]=r[y])}else p=r;return hi(t),r=uu(e,t,n,p,c,a),y=du(),e!==null&&!Lt?(fu(e,t,a),Qr(e,t,a)):(tt&&y&&Gc(t),t.flags|=1,Yt(e,t,r,a),t.child)}function j0(e,t,n,r,a){if(e===null){var c=n.type;return typeof c=="function"&&!Ic(c)&&c.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=c,R0(e,t,c,r,a)):(e=so(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!zu(e,a)){var p=c.memoizedProps;if(n=n.compare,n=n!==null?n:Vr,n(p,r)&&e.ref===t.ref)return Qr(e,t,a)}return t.flags|=1,e=Fr(c,r),e.ref=t.ref,e.return=t,t.child=e}function R0(e,t,n,r,a){if(e!==null){var c=e.memoizedProps;if(Vr(c,r)&&e.ref===t.ref)if(Lt=!1,t.pendingProps=r=c,zu(e,a))(e.flags&131072)!==0&&(Lt=!0);else return t.lanes=e.lanes,Qr(e,t,a)}return Ru(e,t,n,r,a)}function A0(e,t,n,r){var a=r.children,c=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((t.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(r=t.child=e.child,a=0;r!==null;)a=a|r.lanes|r.childLanes,r=r.sibling;r=a&~c}else r=0,t.child=null;return C0(e,t,c,n,r)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&fo(t,c!==null?c.cachePool:null),c!==null?Of(t,c):au(),Lf(t);else return r=t.lanes=536870912,C0(e,t,c!==null?c.baseLanes|n:n,n,r)}else c!==null?(fo(t,c.cachePool),Of(t,c),Al(),t.memoizedState=null):(e!==null&&fo(t,null),au(),Al());return Yt(e,t,a,n),t.child}function Ka(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function C0(e,t,n,r,a){var c=eu();return c=c===null?null:{parent:Dt._currentValue,pool:c},t.memoizedState={baseLanes:n,cachePool:c},e!==null&&fo(t,null),au(),Lf(t),e!==null&&Hi(e,t,r,!0),t.childLanes=a,null}function No(e,t){return t=Ro({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function D0(e,t,n){return vi(t,e.child,null,n),e=No(t,t.pendingProps),e.flags|=2,Bn(t),t.memoizedState=null,e}function jp(e,t,n){var r=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(tt){if(r.mode==="hidden")return e=No(t,r),t.lanes=536870912,Ka(null,e);if(ou(t),(e=_t)?(e=G1(e,tr),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:kl!==null?{id:Or,overflow:Lr}:null,retryLane:536870912,hydrationErrors:null},n=gf(e),n.return=t,t.child=n,Gt=t,_t=null)):e=null,e===null)throw El(t);return t.lanes=536870912,null}return No(t,r)}var c=e.memoizedState;if(c!==null){var p=c.dehydrated;if(ou(t),a)if(t.flags&256)t.flags&=-257,t=D0(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Lt||Hi(e,t,n,!1),a=(n&e.childLanes)!==0,Lt||a){if(r=pt,r!==null&&(p=Gn(r,n),p!==0&&p!==c.retryLane))throw c.retryLane=p,Dr(e,p),xn(r,e,p),ju;qo(),t=D0(e,t,n)}else e=c.treeContext,_t=rr(p.nextSibling),Gt=t,tt=!0,Sl=null,tr=!1,e!==null&&bf(t,e),t=No(t,r),t.flags|=4096;return t}return e=Fr(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function jo(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ru(e,t,n,r,a){return hi(t),n=uu(e,t,n,r,void 0,a),r=du(),e!==null&&!Lt?(fu(e,t,a),Qr(e,t,a)):(tt&&r&&Gc(t),t.flags|=1,Yt(e,t,n,a),t.child)}function O0(e,t,n,r,a,c){return hi(t),t.updateQueue=null,n=zf(t,r,n,a),Bf(e),r=du(),e!==null&&!Lt?(fu(e,t,c),Qr(e,t,c)):(tt&&r&&Gc(t),t.flags|=1,Yt(e,t,n,c),t.child)}function L0(e,t,n,r,a){if(hi(t),t.stateNode===null){var c=Wn,p=n.contextType;typeof p=="object"&&p!==null&&(c=$t(p)),c=new n(r,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Mu,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=r,c.state=t.memoizedState,c.refs={},nu(t),p=n.contextType,c.context=typeof p=="object"&&p!==null?$t(p):Wn,c.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Tu(t,n,p,r),c.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&Mu.enqueueReplaceState(c,c.state,null),Fa(t,r,c,a),Pa(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){c=t.stateNode;var y=t.memoizedProps,S=yi(n,y);c.props=S;var z=c.context,Y=n.contextType;p=Wn,typeof Y=="object"&&Y!==null&&(p=$t(Y));var Q=n.getDerivedStateFromProps;Y=typeof Q=="function"||typeof c.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,Y||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y||z!==p)&&w0(t,c,r,p),Ml=!1;var U=t.memoizedState;c.state=U,Fa(t,r,c,a),Pa(),z=t.memoizedState,y||U!==z||Ml?(typeof Q=="function"&&(Tu(t,n,Q,r),z=t.memoizedState),(S=Ml||y0(t,n,S,r,U,z,p))?(Y||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=z),c.props=r,c.state=z,c.context=p,r=S):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{c=t.stateNode,ru(e,t),p=t.memoizedProps,Y=yi(n,p),c.props=Y,Q=t.pendingProps,U=c.context,z=n.contextType,S=Wn,typeof z=="object"&&z!==null&&(S=$t(z)),y=n.getDerivedStateFromProps,(z=typeof y=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==Q||U!==S)&&w0(t,c,r,S),Ml=!1,U=t.memoizedState,c.state=U,Fa(t,r,c,a),Pa();var I=t.memoizedState;p!==Q||U!==I||Ml||e!==null&&e.dependencies!==null&&co(e.dependencies)?(typeof y=="function"&&(Tu(t,n,y,r),I=t.memoizedState),(Y=Ml||y0(t,n,Y,r,U,I,S)||e!==null&&e.dependencies!==null&&co(e.dependencies))?(z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,I,S),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,I,S)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=I),c.props=r,c.state=I,c.context=S,r=Y):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),r=!1)}return c=r,jo(e,t),r=(t.flags&128)!==0,c||r?(c=t.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&r?(t.child=vi(t,e.child,null,a),t.child=vi(t,null,n,a)):Yt(e,t,n,a),t.memoizedState=c.state,e=t.child):e=Qr(e,t,a),e}function B0(e,t,n,r){return fi(),t.flags|=256,Yt(e,t,n,r),t.child}var Au={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cu(e){return{baseLanes:e,cachePool:Ef()}}function Du(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Un),e}function z0(e,t,n){var r=t.pendingProps,a=!1,c=(t.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(Rt.current&2)!==0),p&&(a=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(tt){if(a?Rl(t):Al(),(e=_t)?(e=G1(e,tr),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:kl!==null?{id:Or,overflow:Lr}:null,retryLane:536870912,hydrationErrors:null},n=gf(e),n.return=t,t.child=n,Gt=t,_t=null)):e=null,e===null)throw El(t);return pd(e)?t.lanes=32:t.lanes=536870912,null}var y=r.children;return r=r.fallback,a?(Al(),a=t.mode,y=Ro({mode:"hidden",children:y},a),r=di(r,a,n,null),y.return=t,r.return=t,y.sibling=r,t.child=y,r=t.child,r.memoizedState=Cu(n),r.childLanes=Du(e,p,n),t.memoizedState=Au,Ka(null,r)):(Rl(t),Ou(t,y))}var S=e.memoizedState;if(S!==null&&(y=S.dehydrated,y!==null)){if(c)t.flags&256?(Rl(t),t.flags&=-257,t=Lu(e,t,n)):t.memoizedState!==null?(Al(),t.child=e.child,t.flags|=128,t=null):(Al(),y=r.fallback,a=t.mode,r=Ro({mode:"visible",children:r.children},a),y=di(y,a,n,null),y.flags|=2,r.return=t,y.return=t,r.sibling=y,t.child=r,vi(t,e.child,null,n),r=t.child,r.memoizedState=Cu(n),r.childLanes=Du(e,p,n),t.memoizedState=Au,t=Ka(null,r));else if(Rl(t),pd(y)){if(p=y.nextSibling&&y.nextSibling.dataset,p)var z=p.dgst;p=z,r=Error(s(419)),r.stack="",r.digest=p,za({value:r,source:null,stack:null}),t=Lu(e,t,n)}else if(Lt||Hi(e,t,n,!1),p=(n&e.childLanes)!==0,Lt||p){if(p=pt,p!==null&&(r=Gn(p,n),r!==0&&r!==S.retryLane))throw S.retryLane=r,Dr(e,r),xn(p,e,r),ju;hd(y)||qo(),t=Lu(e,t,n)}else hd(y)?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,_t=rr(y.nextSibling),Gt=t,tt=!0,Sl=null,tr=!1,e!==null&&bf(t,e),t=Ou(t,r.children),t.flags|=4096);return t}return a?(Al(),y=r.fallback,a=t.mode,S=e.child,z=S.sibling,r=Fr(S,{mode:"hidden",children:r.children}),r.subtreeFlags=S.subtreeFlags&65011712,z!==null?y=Fr(z,y):(y=di(y,a,n,null),y.flags|=2),y.return=t,r.return=t,r.sibling=y,t.child=r,Ka(null,r),r=t.child,y=e.child.memoizedState,y===null?y=Cu(n):(a=y.cachePool,a!==null?(S=Dt._currentValue,a=a.parent!==S?{parent:S,pool:S}:a):a=Ef(),y={baseLanes:y.baseLanes|n,cachePool:a}),r.memoizedState=y,r.childLanes=Du(e,p,n),t.memoizedState=Au,Ka(e.child,r)):(Rl(t),n=e.child,e=n.sibling,n=Fr(n,{mode:"visible",children:r.children}),n.return=t,n.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=n,t.memoizedState=null,n)}function Ou(e,t){return t=Ro({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ro(e,t){return e=On(22,e,null,t),e.lanes=0,e}function Lu(e,t,n){return vi(t,e.child,null,n),e=Ou(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function U0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qc(e.return,t,n)}function Bu(e,t,n,r,a,c){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a,treeForkCount:c}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=r,p.tail=n,p.tailMode=a,p.treeForkCount=c)}function q0(e,t,n){var r=t.pendingProps,a=r.revealOrder,c=r.tail;r=r.children;var p=Rt.current,y=(p&2)!==0;if(y?(p=p&1|2,t.flags|=128):p&=1,le(Rt,p),Yt(e,t,r,n),r=tt?Ba:0,!y&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&U0(e,n,t);else if(e.tag===19)U0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Bu(t,!1,a,n,c,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&vo(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Bu(t,!0,n,null,c,r);break;case"together":Bu(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Qr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ol|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Hi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Fr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Fr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function zu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&co(e)))}function Rp(e,t,n){switch(t.tag){case 3:Fe(t,t.stateNode.containerInfo),Tl(t,Dt,e.memoizedState.cache),fi();break;case 27:case 5:Ct(t);break;case 4:Fe(t,t.stateNode.containerInfo);break;case 10:Tl(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ou(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(Rl(t),t.flags|=128,null):(n&t.child.childLanes)!==0?z0(e,t,n):(Rl(t),e=Qr(e,t,n),e!==null?e.sibling:null);Rl(t);break;case 19:var a=(e.flags&128)!==0;if(r=(n&t.childLanes)!==0,r||(Hi(e,t,n,!1),r=(n&t.childLanes)!==0),a){if(r)return q0(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),le(Rt,Rt.current),r)break;return null;case 22:return t.lanes=0,A0(e,t,n,t.pendingProps);case 24:Tl(t,Dt,e.memoizedState.cache)}return Qr(e,t,n)}function H0(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Lt=!0;else{if(!zu(e,n)&&(t.flags&128)===0)return Lt=!1,Rp(e,t,n);Lt=(e.flags&131072)!==0}else Lt=!1,tt&&(t.flags&1048576)!==0&&vf(t,Ba,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=gi(t.elementType),t.type=e,typeof e=="function")Ic(e)?(r=yi(e,r),t.tag=1,t=L0(null,t,e,r,n)):(t.tag=0,t=Ru(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===q){t.tag=11,t=N0(null,t,e,r,n);break e}else if(a===te){t.tag=14,t=j0(null,t,e,r,n);break e}}throw t=Qe(e)||e,Error(s(306,t,""))}}return t;case 0:return Ru(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=yi(r,t.pendingProps),L0(e,t,r,a,n);case 3:e:{if(Fe(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var c=t.memoizedState;a=c.element,ru(e,t),Fa(t,r,null,n);var p=t.memoizedState;if(r=p.cache,Tl(t,Dt,r),r!==c.cache&&Wc(t,[Dt],n,!0),Pa(),r=p.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=B0(e,t,r,n);break e}else if(r!==a){a=Zn(Error(s(424)),t),za(a),t=B0(e,t,r,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(_t=rr(e.firstChild),Gt=t,tt=!0,Sl=null,tr=!0,n=Af(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(fi(),r===a){t=Qr(e,t,n);break e}Yt(e,t,r,n)}t=t.child}return t;case 26:return jo(e,t),e===null?(n=W1(t.type,null,t.pendingProps,null))?t.memoizedState=n:tt||(n=t.type,e=t.pendingProps,r=$o(xe.current).createElement(n),r[jt]=t,r[Jt]=e,Xt(r,n,e),st(r),t.stateNode=r):t.memoizedState=W1(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ct(t),e===null&&tt&&(r=t.stateNode=X1(t.type,t.pendingProps,xe.current),Gt=t,tr=!0,a=_t,ql(t.type)?(gd=a,_t=rr(r.firstChild)):_t=a),Yt(e,t,t.pendingProps.children,n),jo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&tt&&((a=r=_t)&&(r=a2(r,t.type,t.pendingProps,tr),r!==null?(t.stateNode=r,Gt=t,_t=rr(r.firstChild),tr=!1,a=!0):a=!1),a||El(t)),Ct(t),a=t.type,c=t.pendingProps,p=e!==null?e.memoizedProps:null,r=c.children,dd(a,c)?r=null:p!==null&&dd(a,p)&&(t.flags|=32),t.memoizedState!==null&&(a=uu(e,t,wp,null,null,n),us._currentValue=a),jo(e,t),Yt(e,t,r,n),t.child;case 6:return e===null&&tt&&((e=n=_t)&&(n=s2(n,t.pendingProps,tr),n!==null?(t.stateNode=n,Gt=t,_t=null,e=!0):e=!1),e||El(t)),null;case 13:return z0(e,t,n);case 4:return Fe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vi(t,null,r,n):Yt(e,t,r,n),t.child;case 11:return N0(e,t,t.type,t.pendingProps,n);case 7:return Yt(e,t,t.pendingProps,n),t.child;case 8:return Yt(e,t,t.pendingProps.children,n),t.child;case 12:return Yt(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Tl(t,t.type,r.value),Yt(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,hi(t),a=$t(a),r=r(a),t.flags|=1,Yt(e,t,r,n),t.child;case 14:return j0(e,t,t.type,t.pendingProps,n);case 15:return R0(e,t,t.type,t.pendingProps,n);case 19:return q0(e,t,n);case 31:return jp(e,t,n);case 22:return A0(e,t,n,t.pendingProps);case 24:return hi(t),r=$t(Dt),e===null?(a=eu(),a===null&&(a=pt,c=Zc(),a.pooledCache=c,c.refCount++,c!==null&&(a.pooledCacheLanes|=n),a=c),t.memoizedState={parent:r,cache:a},nu(t),Tl(t,Dt,a)):((e.lanes&n)!==0&&(ru(e,t),Fa(t,null,null,n),Pa()),a=e.memoizedState,c=t.memoizedState,a.parent!==r?(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Tl(t,Dt,r)):(r=c.cache,Tl(t,Dt,r),r!==a.cache&&Wc(t,[Dt],n,!0))),Yt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Wr(e){e.flags|=4}function Uu(e,t,n,r,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(m1())e.flags|=8192;else throw _i=ho,tu}else e.flags&=-16777217}function V0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!nm(t))if(m1())e.flags|=8192;else throw _i=ho,tu}function Ao(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?an():536870912,e.lanes|=t,Zi|=t)}function Qa(e,t){if(!tt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function vt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&65011712,r|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ap(e,t,n){var r=t.pendingProps;switch($c(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(t),null;case 1:return vt(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Yr(Dt),Ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(qi(t)?Wr(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Xc())),vt(t),null;case 26:var a=t.type,c=t.memoizedState;return e===null?(Wr(t),c!==null?(vt(t),V0(t,c)):(vt(t),Uu(t,a,null,r,n))):c?c!==e.memoizedState?(Wr(t),vt(t),V0(t,c)):(vt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==r&&Wr(t),vt(t),Uu(t,a,e,r,n)),null;case 27:if(Me(t),n=xe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Wr(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return vt(t),null}e=ae.current,qi(t)?yf(t):(e=X1(a,r,n),t.stateNode=e,Wr(t))}return vt(t),null;case 5:if(Me(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Wr(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return vt(t),null}if(c=ae.current,qi(t))yf(t);else{var p=$o(xe.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?p.createElement("select",{is:r.is}):p.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?p.createElement(a,{is:r.is}):p.createElement(a)}}c[jt]=t,c[Jt]=r;e:for(p=t.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}t.stateNode=c;e:switch(Xt(c,a,r),a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Wr(t)}}return vt(t),Uu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Wr(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(e=xe.current,qi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Gt,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[jt]=t,e=!!(e.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||z1(e.nodeValue,n)),e||El(t,!0)}else e=$o(e).createTextNode(r),e[jt]=t,t.stateNode=e}return vt(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=qi(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[jt]=t}else fi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;vt(t),e=!1}else n=Xc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Bn(t),t):(Bn(t),null);if((t.flags&128)!==0)throw Error(s(558))}return vt(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(s(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(s(317));a[jt]=t}else fi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;vt(t),a=!1}else a=Xc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Bn(t),t):(Bn(t),null)}return Bn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ao(t,t.updateQueue),vt(t),null);case 4:return Ye(),e===null&&ad(t.stateNode.containerInfo),vt(t),null;case 10:return Yr(t.type),vt(t),null;case 19:if($(Rt),r=t.memoizedState,r===null)return vt(t),null;if(a=(t.flags&128)!==0,c=r.rendering,c===null)if(a)Qa(r,!1);else{if(Mt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=vo(e),c!==null){for(t.flags|=128,Qa(r,!1),e=c.updateQueue,t.updateQueue=e,Ao(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)pf(n,e),n=n.sibling;return le(Rt,Rt.current&1|2),tt&&Gr(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Nt()>Bo&&(t.flags|=128,a=!0,Qa(r,!1),t.lanes=4194304)}else{if(!a)if(e=vo(c),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ao(t,e),Qa(r,!0),r.tail===null&&r.tailMode==="hidden"&&!c.alternate&&!tt)return vt(t),null}else 2*Nt()-r.renderingStartTime>Bo&&n!==536870912&&(t.flags|=128,a=!0,Qa(r,!1),t.lanes=4194304);r.isBackwards?(c.sibling=t.child,t.child=c):(e=r.last,e!==null?e.sibling=c:t.child=c,r.last=c)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Nt(),e.sibling=null,n=Rt.current,le(Rt,a?n&1|2:n&1),tt&&Gr(t,r.treeForkCount),e):(vt(t),null);case 22:case 23:return Bn(t),su(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(n&536870912)!==0&&(t.flags&128)===0&&(vt(t),t.subtreeFlags&6&&(t.flags|=8192)):vt(t),n=t.updateQueue,n!==null&&Ao(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&$(pi),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Yr(Dt),vt(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Cp(e,t){switch($c(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yr(Dt),Ye(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Me(t),null;case 31:if(t.memoizedState!==null){if(Bn(t),t.alternate===null)throw Error(s(340));fi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Bn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));fi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(Rt),null;case 4:return Ye(),null;case 10:return Yr(t.type),null;case 22:case 23:return Bn(t),su(),e!==null&&$(pi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Yr(Dt),null;case 25:return null;default:return null}}function I0(e,t){switch($c(t),t.tag){case 3:Yr(Dt),Ye();break;case 26:case 27:case 5:Me(t);break;case 4:Ye();break;case 31:t.memoizedState!==null&&Bn(t);break;case 13:Bn(t);break;case 19:$(Rt);break;case 10:Yr(t.type);break;case 22:case 23:Bn(t),su(),e!==null&&$(pi);break;case 24:Yr(Dt)}}function Wa(e,t){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var a=r.next;n=a;do{if((n.tag&e)===e){r=void 0;var c=n.create,p=n.inst;r=c(),p.destroy=r}n=n.next}while(n!==a)}}catch(y){ut(t,t.return,y)}}function Cl(e,t,n){try{var r=t.updateQueue,a=r!==null?r.lastEffect:null;if(a!==null){var c=a.next;r=c;do{if((r.tag&e)===e){var p=r.inst,y=p.destroy;if(y!==void 0){p.destroy=void 0,a=t;var S=n,z=y;try{z()}catch(Y){ut(a,S,Y)}}}r=r.next}while(r!==c)}}catch(Y){ut(t,t.return,Y)}}function P0(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Df(t,n)}catch(r){ut(e,e.return,r)}}}function F0(e,t,n){n.props=yi(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){ut(e,t,r)}}function Za(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n=="function"?e.refCleanup=n(r):n.current=r}}catch(a){ut(e,t,a)}}function Br(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(a){ut(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){ut(e,t,a)}else n.current=null}function G0(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(a){ut(e,e.return,a)}}function qu(e,t,n){try{var r=e.stateNode;e2(r,e.type,n,t),r[Jt]=t}catch(a){ut(e,e.return,a)}}function $0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ql(e.type)||e.tag===4}function Hu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ql(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=An));else if(r!==4&&(r===27&&ql(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Vu(e,t,n),e=e.sibling;e!==null;)Vu(e,t,n),e=e.sibling}function Co(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&ql(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Co(e,t,n),e=e.sibling;e!==null;)Co(e,t,n),e=e.sibling}function Y0(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Xt(t,r,n),t[jt]=e,t[Jt]=n}catch(c){ut(e,e.return,c)}}var Zr=!1,Bt=!1,Iu=!1,X0=typeof WeakSet=="function"?WeakSet:Set,Vt=null;function Dp(e,t){if(e=e.containerInfo,cd=Jo,e=io(e),oi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,c=r.focusNode;r=r.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var p=0,y=-1,S=-1,z=0,Y=0,Q=e,U=null;t:for(;;){for(var I;Q!==n||a!==0&&Q.nodeType!==3||(y=p+a),Q!==c||r!==0&&Q.nodeType!==3||(S=p+r),Q.nodeType===3&&(p+=Q.nodeValue.length),(I=Q.firstChild)!==null;)U=Q,Q=I;for(;;){if(Q===e)break t;if(U===n&&++z===a&&(y=p),U===c&&++Y===r&&(S=p),(I=Q.nextSibling)!==null)break;Q=U,U=Q.parentNode}Q=I}n=y===-1||S===-1?null:{start:y,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(ud={focusedElem:e,selectionRange:n},Jo=!1,Vt=t;Vt!==null;)if(t=Vt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Vt=e;else for(;Vt!==null;){switch(t=Vt,c=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=t,a=c.memoizedProps,c=c.memoizedState,r=n.stateNode;try{var ke=yi(n.type,a);e=r.getSnapshotBeforeUpdate(ke,c),r.__reactInternalSnapshotBeforeUpdate=e}catch(je){ut(n,n.return,je)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)md(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":md(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Vt=e;break}Vt=t.return}}function K0(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:el(e,n),r&4&&Wa(5,n);break;case 1:if(el(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(p){ut(n,n.return,p)}else{var a=yi(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){ut(n,n.return,p)}}r&64&&P0(n),r&512&&Za(n,n.return);break;case 3:if(el(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Df(e,t)}catch(p){ut(n,n.return,p)}}break;case 27:t===null&&r&4&&Y0(n);case 26:case 5:el(e,n),t===null&&r&4&&G0(n),r&512&&Za(n,n.return);break;case 12:el(e,n);break;case 31:el(e,n),r&4&&Z0(e,n);break;case 13:el(e,n),r&4&&J0(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ip.bind(null,n),o2(e,n))));break;case 22:if(r=n.memoizedState!==null||Zr,!r){t=t!==null&&t.memoizedState!==null||Bt,a=Zr;var c=Bt;Zr=r,(Bt=t)&&!c?tl(e,n,(n.subtreeFlags&8772)!==0):el(e,n),Zr=a,Bt=c}break;case 30:break;default:el(e,n)}}function Q0(e){var t=e.alternate;t!==null&&(e.alternate=null,Q0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ql(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var wt=null,vn=!1;function Jr(e,t,n){for(n=n.child;n!==null;)W0(e,t,n),n=n.sibling}function W0(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(or,n)}catch{}switch(n.tag){case 26:Bt||Br(n,t),Jr(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Bt||Br(n,t);var r=wt,a=vn;ql(n.type)&&(wt=n.stateNode,vn=!1),Jr(e,t,n),ss(n.stateNode),wt=r,vn=a;break;case 5:Bt||Br(n,t);case 6:if(r=wt,a=vn,wt=null,Jr(e,t,n),wt=r,vn=a,wt!==null)if(vn)try{(wt.nodeType===9?wt.body:wt.nodeName==="HTML"?wt.ownerDocument.body:wt).removeChild(n.stateNode)}catch(c){ut(n,t,c)}else try{wt.removeChild(n.stateNode)}catch(c){ut(n,t,c)}break;case 18:wt!==null&&(vn?(e=wt,P1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),aa(e)):P1(wt,n.stateNode));break;case 4:r=wt,a=vn,wt=n.stateNode.containerInfo,vn=!0,Jr(e,t,n),wt=r,vn=a;break;case 0:case 11:case 14:case 15:Cl(2,n,t),Bt||Cl(4,n,t),Jr(e,t,n);break;case 1:Bt||(Br(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"&&F0(n,t,r)),Jr(e,t,n);break;case 21:Jr(e,t,n);break;case 22:Bt=(r=Bt)||n.memoizedState!==null,Jr(e,t,n),Bt=r;break;default:Jr(e,t,n)}}function Z0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{aa(e)}catch(n){ut(t,t.return,n)}}}function J0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{aa(e)}catch(n){ut(t,t.return,n)}}function Op(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new X0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new X0),t;default:throw Error(s(435,e.tag))}}function Do(e,t){var n=Op(e);t.forEach(function(r){if(!n.has(r)){n.add(r);var a=Pp.bind(null,e,r);r.then(a,a)}})}function bn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],c=e,p=t,y=p;e:for(;y!==null;){switch(y.tag){case 27:if(ql(y.type)){wt=y.stateNode,vn=!1;break e}break;case 5:wt=y.stateNode,vn=!1;break e;case 3:case 4:wt=y.stateNode.containerInfo,vn=!0;break e}y=y.return}if(wt===null)throw Error(s(160));W0(c,p,a),wt=null,vn=!1,c=a.alternate,c!==null&&(c.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)e1(t,e),t=t.sibling}var br=null;function e1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bn(t,e),yn(e),r&4&&(Cl(3,e,e.return),Wa(3,e),Cl(5,e,e.return));break;case 1:bn(t,e),yn(e),r&512&&(Bt||n===null||Br(n,n.return)),r&64&&Zr&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=br;if(bn(t,e),yn(e),r&512&&(Bt||n===null||Br(n,n.return)),r&4){var c=n!==null?n.memoizedState:null;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){e:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(r){case"title":c=a.getElementsByTagName("title")[0],(!c||c[qr]||c[jt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=a.createElement(r),a.head.insertBefore(c,a.querySelector("head > title"))),Xt(c,r,n),c[jt]=e,st(c),r=c;break e;case"link":var p=em("link","href",a).get(r+(n.href||""));if(p){for(var y=0;y<p.length;y++)if(c=p[y],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(y,1);break t}}c=a.createElement(r),Xt(c,r,n),a.head.appendChild(c);break;case"meta":if(p=em("meta","content",a).get(r+(n.content||""))){for(y=0;y<p.length;y++)if(c=p[y],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(y,1);break t}}c=a.createElement(r),Xt(c,r,n),a.head.appendChild(c);break;default:throw Error(s(468,r))}c[jt]=e,st(c),r=c}e.stateNode=r}else tm(a,e.type,e.stateNode);else e.stateNode=J1(a,r,e.memoizedProps);else c!==r?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,r===null?tm(a,e.type,e.stateNode):J1(a,r,e.memoizedProps)):r===null&&e.stateNode!==null&&qu(e,e.memoizedProps,n.memoizedProps)}break;case 27:bn(t,e),yn(e),r&512&&(Bt||n===null||Br(n,n.return)),n!==null&&r&4&&qu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(bn(t,e),yn(e),r&512&&(Bt||n===null||Br(n,n.return)),e.flags&32){a=e.stateNode;try{jn(a,"")}catch(ke){ut(e,e.return,ke)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,qu(e,a,n!==null?n.memoizedProps:a)),r&1024&&(Iu=!0);break;case 6:if(bn(t,e),yn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(ke){ut(e,e.return,ke)}}break;case 3:if(Ko=null,a=br,br=Yo(t.containerInfo),bn(t,e),br=a,yn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{aa(t.containerInfo)}catch(ke){ut(e,e.return,ke)}Iu&&(Iu=!1,t1(e));break;case 4:r=br,br=Yo(e.stateNode.containerInfo),bn(t,e),yn(e),br=r;break;case 12:bn(t,e),yn(e);break;case 31:bn(t,e),yn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Do(e,r)));break;case 13:bn(t,e),yn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Lo=Nt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Do(e,r)));break;case 22:a=e.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,z=Zr,Y=Bt;if(Zr=z||a,Bt=Y||S,bn(t,e),Bt=Y,Zr=z,yn(e),r&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||S||Zr||Bt||wi(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){S=n=t;try{if(c=S.stateNode,a)p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{y=S.stateNode;var Q=S.memoizedProps.style,U=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;y.style.display=U==null||typeof U=="boolean"?"":(""+U).trim()}}catch(ke){ut(S,S.return,ke)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=a?"":S.memoizedProps}catch(ke){ut(S,S.return,ke)}}}else if(t.tag===18){if(n===null){S=t;try{var I=S.stateNode;a?F1(I,!0):F1(S.stateNode,!1)}catch(ke){ut(S,S.return,ke)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Do(e,n))));break;case 19:bn(t,e),yn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Do(e,r)));break;case 30:break;case 21:break;default:bn(t,e),yn(e)}}function yn(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if($0(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var a=n.stateNode,c=Hu(e);Co(e,c,a);break;case 5:var p=n.stateNode;n.flags&32&&(jn(p,""),n.flags&=-33);var y=Hu(e);Co(e,y,p);break;case 3:case 4:var S=n.stateNode.containerInfo,z=Hu(e);Vu(e,z,S);break;default:throw Error(s(161))}}catch(Y){ut(e,e.return,Y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function t1(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;t1(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function el(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)K0(e,t.alternate,t),t=t.sibling}function wi(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Cl(4,t,t.return),wi(t);break;case 1:Br(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&F0(t,t.return,n),wi(t);break;case 27:ss(t.stateNode);case 26:case 5:Br(t,t.return),wi(t);break;case 22:t.memoizedState===null&&wi(t);break;case 30:wi(t);break;default:wi(t)}e=e.sibling}}function tl(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,a=e,c=t,p=c.flags;switch(c.tag){case 0:case 11:case 15:tl(a,c,n),Wa(4,c);break;case 1:if(tl(a,c,n),r=c,a=r.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(z){ut(r,r.return,z)}if(r=c,a=r.updateQueue,a!==null){var y=r.stateNode;try{var S=a.shared.hiddenCallbacks;if(S!==null)for(a.shared.hiddenCallbacks=null,a=0;a<S.length;a++)Cf(S[a],y)}catch(z){ut(r,r.return,z)}}n&&p&64&&P0(c),Za(c,c.return);break;case 27:Y0(c);case 26:case 5:tl(a,c,n),n&&r===null&&p&4&&G0(c),Za(c,c.return);break;case 12:tl(a,c,n);break;case 31:tl(a,c,n),n&&p&4&&Z0(a,c);break;case 13:tl(a,c,n),n&&p&4&&J0(a,c);break;case 22:c.memoizedState===null&&tl(a,c,n),Za(c,c.return);break;case 30:break;default:tl(a,c,n)}t=t.sibling}}function Pu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ua(n))}function Fu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ua(e))}function yr(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)n1(e,t,n,r),t=t.sibling}function n1(e,t,n,r){var a=t.flags;switch(t.tag){case 0:case 11:case 15:yr(e,t,n,r),a&2048&&Wa(9,t);break;case 1:yr(e,t,n,r);break;case 3:yr(e,t,n,r),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ua(e)));break;case 12:if(a&2048){yr(e,t,n,r),e=t.stateNode;try{var c=t.memoizedProps,p=c.id,y=c.onPostCommit;typeof y=="function"&&y(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){ut(t,t.return,S)}}else yr(e,t,n,r);break;case 31:yr(e,t,n,r);break;case 13:yr(e,t,n,r);break;case 23:break;case 22:c=t.stateNode,p=t.alternate,t.memoizedState!==null?c._visibility&2?yr(e,t,n,r):Ja(e,t):c._visibility&2?yr(e,t,n,r):(c._visibility|=2,Ki(e,t,n,r,(t.subtreeFlags&10256)!==0||!1)),a&2048&&Pu(p,t);break;case 24:yr(e,t,n,r),a&2048&&Fu(t.alternate,t);break;default:yr(e,t,n,r)}}function Ki(e,t,n,r,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var c=e,p=t,y=n,S=r,z=p.flags;switch(p.tag){case 0:case 11:case 15:Ki(c,p,y,S,a),Wa(8,p);break;case 23:break;case 22:var Y=p.stateNode;p.memoizedState!==null?Y._visibility&2?Ki(c,p,y,S,a):Ja(c,p):(Y._visibility|=2,Ki(c,p,y,S,a)),a&&z&2048&&Pu(p.alternate,p);break;case 24:Ki(c,p,y,S,a),a&&z&2048&&Fu(p.alternate,p);break;default:Ki(c,p,y,S,a)}t=t.sibling}}function Ja(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,a=r.flags;switch(r.tag){case 22:Ja(n,r),a&2048&&Pu(r.alternate,r);break;case 24:Ja(n,r),a&2048&&Fu(r.alternate,r);break;default:Ja(n,r)}t=t.sibling}}var es=8192;function Qi(e,t,n){if(e.subtreeFlags&es)for(e=e.child;e!==null;)r1(e,t,n),e=e.sibling}function r1(e,t,n){switch(e.tag){case 26:Qi(e,t,n),e.flags&es&&e.memoizedState!==null&&y2(n,br,e.memoizedState,e.memoizedProps);break;case 5:Qi(e,t,n);break;case 3:case 4:var r=br;br=Yo(e.stateNode.containerInfo),Qi(e,t,n),br=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=es,es=16777216,Qi(e,t,n),es=r):Qi(e,t,n));break;default:Qi(e,t,n)}}function l1(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ts(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Vt=r,a1(r,e)}l1(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)i1(e),e=e.sibling}function i1(e){switch(e.tag){case 0:case 11:case 15:ts(e),e.flags&2048&&Cl(9,e,e.return);break;case 3:ts(e);break;case 12:ts(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Oo(e)):ts(e);break;default:ts(e)}}function Oo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Vt=r,a1(r,e)}l1(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Cl(8,t,t.return),Oo(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Oo(t));break;default:Oo(t)}e=e.sibling}}function a1(e,t){for(;Vt!==null;){var n=Vt;switch(n.tag){case 0:case 11:case 15:Cl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ua(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Vt=r;else e:for(n=e;Vt!==null;){r=Vt;var a=r.sibling,c=r.return;if(Q0(r),r===n){Vt=null;break e}if(a!==null){a.return=c,Vt=a;break e}Vt=c}}}var Lp={getCacheForType:function(e){var t=$t(Dt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return $t(Dt).controller.signal}},Bp=typeof WeakMap=="function"?WeakMap:Map,at=0,pt=null,Xe=null,Ze=0,ct=0,zn=null,Dl=!1,Wi=!1,Gu=!1,nl=0,Mt=0,Ol=0,xi=0,$u=0,Un=0,Zi=0,ns=null,wn=null,Yu=!1,Lo=0,s1=0,Bo=1/0,zo=null,Ll=null,qt=0,Bl=null,Ji=null,rl=0,Xu=0,Ku=null,o1=null,rs=0,Qu=null;function qn(){return(at&2)!==0&&Ze!==0?Ze&-Ze:R.T!==null?nd():Sr()}function c1(){if(Un===0)if((Ze&536870912)===0||tt){var e=Fn;Fn<<=1,(Fn&3932160)===0&&(Fn=262144),Un=e}else Un=536870912;return e=Ln.current,e!==null&&(e.flags|=32),Un}function xn(e,t,n){(e===pt&&(ct===2||ct===9)||e.cancelPendingCommit!==null)&&(ea(e,0),zl(e,Ze,Un,!1)),he(e,n),((at&2)===0||e!==pt)&&(e===pt&&((at&2)===0&&(xi|=n),Mt===4&&zl(e,Ze,Un,!1)),zr(e))}function u1(e,t,n){if((at&6)!==0)throw Error(s(327));var r=!n&&(t&127)===0&&(t&e.expiredLanes)===0||ln(e,t),a=r?qp(e,t):Zu(e,t,!0),c=r;do{if(a===0){Wi&&!r&&zl(e,t,0,!1);break}else{if(n=e.current.alternate,c&&!zp(n)){a=Zu(e,t,!1),c=!1;continue}if(a===2){if(c=t,e.errorRecoveryDisabledLanes&c)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var y=e;a=ns;var S=y.current.memoizedState.isDehydrated;if(S&&(ea(y,p).flags|=256),p=Zu(y,p,!1),p!==2){if(Gu&&!S){y.errorRecoveryDisabledLanes|=c,xi|=c,a=4;break e}c=wn,wn=a,c!==null&&(wn===null?wn=c:wn.push.apply(wn,c))}a=p}if(c=!1,a!==2)continue}}if(a===1){ea(e,0),zl(e,t,0,!0);break}e:{switch(r=e,c=a,c){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:zl(r,t,Un,!Dl);break e;case 2:wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(a=Lo+300-Nt(),10<a)){if(zl(r,t,Un,!Dl),Zt(r,0,!0)!==0)break e;rl=t,r.timeoutHandle=V1(d1.bind(null,r,n,wn,zo,Yu,t,Un,xi,Zi,Dl,c,"Throttled",-0,0),a);break e}d1(r,n,wn,zo,Yu,t,Un,xi,Zi,Dl,c,null,-0,0)}}break}while(!0);zr(e)}function d1(e,t,n,r,a,c,p,y,S,z,Y,Q,U,I){if(e.timeoutHandle=-1,Q=t.subtreeFlags,Q&8192||(Q&16785408)===16785408){Q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:An},r1(t,c,Q);var ke=(c&62914560)===c?Lo-Nt():(c&4194048)===c?s1-Nt():0;if(ke=w2(Q,ke),ke!==null){rl=c,e.cancelPendingCommit=ke(b1.bind(null,e,t,c,n,r,a,p,y,S,Y,Q,null,U,I)),zl(e,c,p,!z);return}}b1(e,t,c,n,r,a,p,y,S)}function zp(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var a=n[r],c=a.getSnapshot;a=a.value;try{if(!un(c(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zl(e,t,n,r){t&=~$u,t&=~xi,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var a=t;0<a;){var c=31-$e(a),p=1<<c;r[c]=-1,a&=~p}n!==0&&nt(e,n,t)}function Uo(){return(at&6)===0?(ls(0),!1):!0}function Wu(){if(Xe!==null){if(ct===0)var e=Xe.return;else e=Xe,$r=mi=null,mu(e),Fi=null,Ha=0,e=Xe;for(;e!==null;)I0(e.alternate,e),e=e.return;Xe=null}}function ea(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,r2(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),rl=0,Wu(),pt=e,Xe=n=Fr(e.current,null),Ze=t,ct=0,zn=null,Dl=!1,Wi=ln(e,t),Gu=!1,Zi=Un=$u=xi=Ol=Mt=0,wn=ns=null,Yu=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var a=31-$e(r),c=1<<a;t|=e[a],r&=~c}return nl=t,_n(),n}function f1(e,t){He=null,R.H=Xa,t===Pi||t===mo?(t=Nf(),ct=3):t===tu?(t=Nf(),ct=4):ct=t===ju?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,zn=t,Xe===null&&(Mt=1,Mo(e,Zn(t,e.current)))}function m1(){var e=Ln.current;return e===null?!0:(Ze&4194048)===Ze?nr===null:(Ze&62914560)===Ze||(Ze&536870912)!==0?e===nr:!1}function h1(){var e=R.H;return R.H=Xa,e===null?Xa:e}function p1(){var e=R.A;return R.A=Lp,e}function qo(){Mt=4,Dl||(Ze&4194048)!==Ze&&Ln.current!==null||(Wi=!0),(Ol&134217727)===0&&(xi&134217727)===0||pt===null||zl(pt,Ze,Un,!1)}function Zu(e,t,n){var r=at;at|=2;var a=h1(),c=p1();(pt!==e||Ze!==t)&&(zo=null,ea(e,t)),t=!1;var p=Mt;e:do try{if(ct!==0&&Xe!==null){var y=Xe,S=zn;switch(ct){case 8:Wu(),p=6;break e;case 3:case 2:case 9:case 6:Ln.current===null&&(t=!0);var z=ct;if(ct=0,zn=null,ta(e,y,S,z),n&&Wi){p=0;break e}break;default:z=ct,ct=0,zn=null,ta(e,y,S,z)}}Up(),p=Mt;break}catch(Y){f1(e,Y)}while(!0);return t&&e.shellSuspendCounter++,$r=mi=null,at=r,R.H=a,R.A=c,Xe===null&&(pt=null,Ze=0,_n()),p}function Up(){for(;Xe!==null;)g1(Xe)}function qp(e,t){var n=at;at|=2;var r=h1(),a=p1();pt!==e||Ze!==t?(zo=null,Bo=Nt()+500,ea(e,t)):Wi=ln(e,t);e:do try{if(ct!==0&&Xe!==null){t=Xe;var c=zn;t:switch(ct){case 1:ct=0,zn=null,ta(e,t,c,1);break;case 2:case 9:if(Tf(c)){ct=0,zn=null,_1(t);break}t=function(){ct!==2&&ct!==9||pt!==e||(ct=7),zr(e)},c.then(t,t);break e;case 3:ct=7;break e;case 4:ct=5;break e;case 7:Tf(c)?(ct=0,zn=null,_1(t)):(ct=0,zn=null,ta(e,t,c,7));break;case 5:var p=null;switch(Xe.tag){case 26:p=Xe.memoizedState;case 5:case 27:var y=Xe;if(p?nm(p):y.stateNode.complete){ct=0,zn=null;var S=y.sibling;if(S!==null)Xe=S;else{var z=y.return;z!==null?(Xe=z,Ho(z)):Xe=null}break t}}ct=0,zn=null,ta(e,t,c,5);break;case 6:ct=0,zn=null,ta(e,t,c,6);break;case 8:Wu(),Mt=6;break e;default:throw Error(s(462))}}Hp();break}catch(Y){f1(e,Y)}while(!0);return $r=mi=null,R.H=r,R.A=a,at=n,Xe!==null?0:(pt=null,Ze=0,_n(),Mt)}function Hp(){for(;Xe!==null&&!fn();)g1(Xe)}function g1(e){var t=H0(e.alternate,e,nl);e.memoizedProps=e.pendingProps,t===null?Ho(e):Xe=t}function _1(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=O0(n,t,t.pendingProps,t.type,void 0,Ze);break;case 11:t=O0(n,t,t.pendingProps,t.type.render,t.ref,Ze);break;case 5:mu(t);default:I0(n,t),t=Xe=pf(t,nl),t=H0(n,t,nl)}e.memoizedProps=e.pendingProps,t===null?Ho(e):Xe=t}function ta(e,t,n,r){$r=mi=null,mu(t),Fi=null,Ha=0;var a=t.return;try{if(Np(e,a,t,n,Ze)){Mt=1,Mo(e,Zn(n,e.current)),Xe=null;return}}catch(c){if(a!==null)throw Xe=a,c;Mt=1,Mo(e,Zn(n,e.current)),Xe=null;return}t.flags&32768?(tt||r===1?e=!0:Wi||(Ze&536870912)!==0?e=!1:(Dl=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ln.current,r!==null&&r.tag===13&&(r.flags|=16384))),v1(t,e)):Ho(t)}function Ho(e){var t=e;do{if((t.flags&32768)!==0){v1(t,Dl);return}e=t.return;var n=Ap(t.alternate,t,nl);if(n!==null){Xe=n;return}if(t=t.sibling,t!==null){Xe=t;return}Xe=t=e}while(t!==null);Mt===0&&(Mt=5)}function v1(e,t){do{var n=Cp(e.alternate,e);if(n!==null){n.flags&=32767,Xe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Xe=e;return}Xe=e=n}while(e!==null);Mt=6,Xe=null}function b1(e,t,n,r,a,c,p,y,S){e.cancelPendingCommit=null;do Vo();while(qt!==0);if((at&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(c=t.lanes|t.childLanes,c|=Dn,We(e,n,c,p,y,S),e===pt&&(Xe=pt=null,Ze=0),Ji=t,Bl=e,rl=n,Xu=c,Ku=a,o1=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Fp(sr,function(){return S1(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=R.T,R.T=null,a=W.p,W.p=2,p=at,at|=4;try{Dp(e,t,n)}finally{at=p,W.p=a,R.T=r}}qt=1,y1(),w1(),x1()}}function y1(){if(qt===1){qt=0;var e=Bl,t=Ji,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=R.T,R.T=null;var r=W.p;W.p=2;var a=at;at|=4;try{e1(t,e);var c=ud,p=io(e.containerInfo),y=c.focusedElem,S=c.selectionRange;if(p!==y&&y&&y.ownerDocument&&lo(y.ownerDocument.documentElement,y)){if(S!==null&&oi(y)){var z=S.start,Y=S.end;if(Y===void 0&&(Y=z),"selectionStart"in y)y.selectionStart=z,y.selectionEnd=Math.min(Y,y.value.length);else{var Q=y.ownerDocument||document,U=Q&&Q.defaultView||window;if(U.getSelection){var I=U.getSelection(),ke=y.textContent.length,je=Math.min(S.start,ke),mt=S.end===void 0?je:Math.min(S.end,ke);!I.extend&&je>mt&&(p=mt,mt=je,je=p);var A=Ca(y,je),M=Ca(y,mt);if(A&&M&&(I.rangeCount!==1||I.anchorNode!==A.node||I.anchorOffset!==A.offset||I.focusNode!==M.node||I.focusOffset!==M.offset)){var B=Q.createRange();B.setStart(A.node,A.offset),I.removeAllRanges(),je>mt?(I.addRange(B),I.extend(M.node,M.offset)):(B.setEnd(M.node,M.offset),I.addRange(B))}}}}for(Q=[],I=y;I=I.parentNode;)I.nodeType===1&&Q.push({element:I,left:I.scrollLeft,top:I.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<Q.length;y++){var K=Q[y];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}Jo=!!cd,ud=cd=null}finally{at=a,W.p=r,R.T=n}}e.current=t,qt=2}}function w1(){if(qt===2){qt=0;var e=Bl,t=Ji,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=R.T,R.T=null;var r=W.p;W.p=2;var a=at;at|=4;try{K0(e,t.alternate,t)}finally{at=a,W.p=r,R.T=n}}qt=3}}function x1(){if(qt===4||qt===3){qt=0,kn();var e=Bl,t=Ji,n=rl,r=o1;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?qt=5:(qt=0,Ji=Bl=null,k1(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Ll=null),on(n),t=t.stateNode,zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(or,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=R.T,a=W.p,W.p=2,R.T=null;try{for(var c=e.onRecoverableError,p=0;p<r.length;p++){var y=r[p];c(y.value,{componentStack:y.stack})}}finally{R.T=t,W.p=a}}(rl&3)!==0&&Vo(),zr(e),a=e.pendingLanes,(n&261930)!==0&&(a&42)!==0?e===Qu?rs++:(rs=0,Qu=e):rs=0,ls(0)}}function k1(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ua(t)))}function Vo(){return y1(),w1(),x1(),S1()}function S1(){if(qt!==5)return!1;var e=Bl,t=Xu;Xu=0;var n=on(rl),r=R.T,a=W.p;try{W.p=32>n?32:n,R.T=null,n=Ku,Ku=null;var c=Bl,p=rl;if(qt=0,Ji=Bl=null,rl=0,(at&6)!==0)throw Error(s(331));var y=at;if(at|=4,i1(c.current),n1(c,c.current,p,n),at=y,ls(0,!1),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(or,c)}catch{}return!0}finally{W.p=a,R.T=r,k1(e,t)}}function E1(e,t,n){t=Zn(n,t),t=Nu(e.stateNode,t,2),e=jl(e,t,2),e!==null&&(he(e,2),zr(e))}function ut(e,t,n){if(e.tag===3)E1(e,e,n);else for(;t!==null;){if(t.tag===3){E1(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ll===null||!Ll.has(r))){e=Zn(n,e),n=T0(2),r=jl(t,n,2),r!==null&&(M0(n,r,t,e),he(r,2),zr(r));break}}t=t.return}}function Ju(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bp;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(Gu=!0,a.add(n),e=Vp.bind(null,e,t,n),t.then(e,e))}function Vp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,pt===e&&(Ze&n)===n&&(Mt===4||Mt===3&&(Ze&62914560)===Ze&&300>Nt()-Lo?(at&2)===0&&ea(e,0):$u|=n,Zi===Ze&&(Zi=0)),zr(e)}function T1(e,t){t===0&&(t=an()),e=Dr(e,t),e!==null&&(he(e,t),zr(e))}function Ip(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),T1(e,n)}function Pp(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),T1(e,n)}function Fp(e,t){return Le(e,t)}var Io=null,na=null,ed=!1,Po=!1,td=!1,Ul=0;function zr(e){e!==na&&e.next===null&&(na===null?Io=na=e:na=na.next=e),Po=!0,ed||(ed=!0,$p())}function ls(e,t){if(!td&&Po){td=!0;do for(var n=!1,r=Io;r!==null;){if(e!==0){var a=r.pendingLanes;if(a===0)var c=0;else{var p=r.suspendedLanes,y=r.pingedLanes;c=(1<<31-$e(42|e)+1)-1,c&=a&~(p&~y),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,R1(r,c))}else c=Ze,c=Zt(r,r===pt?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||ln(r,c)||(n=!0,R1(r,c));r=r.next}while(n);td=!1}}function Gp(){M1()}function M1(){Po=ed=!1;var e=0;Ul!==0&&n2()&&(e=Ul);for(var t=Nt(),n=null,r=Io;r!==null;){var a=r.next,c=N1(r,t);c===0?(r.next=null,n===null?Io=a:n.next=a,a===null&&(na=n)):(n=r,(e!==0||(c&3)!==0)&&(Po=!0)),r=a}qt!==0&&qt!==5||ls(e),Ul!==0&&(Ul=0)}function N1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var p=31-$e(c),y=1<<p,S=a[p];S===-1?((y&n)===0||(y&r)!==0)&&(a[p]=mn(y,t)):S<=t&&(e.expiredLanes|=y),c&=~y}if(t=pt,n=Ze,n=Zt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(ct===2||ct===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&xt(r),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ln(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&xt(r),on(n)){case 2:case 8:n=Sn;break;case 32:n=sr;break;case 268435456:n=Kt;break;default:n=sr}return r=j1.bind(null,e),n=Le(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&xt(r),e.callbackPriority=2,e.callbackNode=null,2}function j1(e,t){if(qt!==0&&qt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Vo()&&e.callbackNode!==n)return null;var r=Ze;return r=Zt(e,e===pt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(u1(e,r,t),N1(e,Nt()),e.callbackNode!=null&&e.callbackNode===n?j1.bind(null,e):null)}function R1(e,t){if(Vo())return null;u1(e,t,!0)}function $p(){l2(function(){(at&6)!==0?Le(In,Gp):M1()})}function nd(){if(Ul===0){var e=Vi;e===0&&(e=cr,cr<<=1,(cr&261888)===0&&(cr=256)),Ul=e}return Ul}function A1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ti(""+e)}function C1(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Yp(e,t,n,r,a){if(t==="submit"&&n&&n.stateNode===a){var c=A1((a[Jt]||null).action),p=r.submitter;p&&(t=(t=p[Jt]||null)?A1(t.formAction):p.getAttribute("formAction"),t!==null&&(c=t,p=null));var y=new Ci("action","action",null,r,a);e.push({event:y,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ul!==0){var S=p?C1(a,p):new FormData(a);xu(n,{pending:!0,data:S,method:a.method,action:c},null,S)}}else typeof c=="function"&&(y.preventDefault(),S=p?C1(a,p):new FormData(a),xu(n,{pending:!0,data:S,method:a.method,action:c},c,S))},currentTarget:a}]})}}for(var rd=0;rd<ot.length;rd++){var ld=ot[rd],Xp=ld.toLowerCase(),Kp=ld[0].toUpperCase()+ld.slice(1);ht(Xp,"on"+Kp)}ht(w,"onAnimationEnd"),ht(j,"onAnimationIteration"),ht(C,"onAnimationStart"),ht("dblclick","onDoubleClick"),ht("focusin","onFocus"),ht("focusout","onBlur"),ht(X,"onTransitionRun"),ht(fe,"onTransitionStart"),ht(De,"onTransitionCancel"),ht(Ee,"onTransitionEnd"),Nn("onMouseEnter",["mouseout","mouseover"]),Nn("onMouseLeave",["mouseout","mouseover"]),Nn("onPointerEnter",["pointerout","pointerover"]),Nn("onPointerLeave",["pointerout","pointerover"]),Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(is));function D1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var c=void 0;if(t)for(var p=r.length-1;0<=p;p--){var y=r[p],S=y.instance,z=y.currentTarget;if(y=y.listener,S!==c&&a.isPropagationStopped())break e;c=y,a.currentTarget=z;try{c(a)}catch(Y){Ue(Y)}a.currentTarget=null,c=S}else for(p=0;p<r.length;p++){if(y=r[p],S=y.instance,z=y.currentTarget,y=y.listener,S!==c&&a.isPropagationStopped())break e;c=y,a.currentTarget=z;try{c(a)}catch(Y){Ue(Y)}a.currentTarget=null,c=S}}}}function Ke(e,t){var n=t[Yn];n===void 0&&(n=t[Yn]=new Set);var r=e+"__bubble";n.has(r)||(O1(t,e,2,!1),n.add(r))}function id(e,t,n){var r=0;t&&(r|=4),O1(n,e,r,t)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function ad(e){if(!e[Fo]){e[Fo]=!0,Tr.forEach(function(n){n!=="selectionchange"&&(Qp.has(n)||id(n,!1,e),id(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fo]||(t[Fo]=!0,id("selectionchange",!1,t))}}function O1(e,t,n,r){switch(cm(t)){case 2:var a=S2;break;case 8:a=E2;break;default:a=wd}n=a.bind(null,t,n,e),a=void 0,!ji||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function sd(e,t,n,r,a){var c=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var p=r.tag;if(p===3||p===4){var y=r.stateNode.containerInfo;if(y===a)break;if(p===4)for(p=r.return;p!==null;){var S=p.tag;if((S===3||S===4)&&p.stateNode.containerInfo===a)return;p=p.return}for(;y!==null;){if(p=mr(y),p===null)return;if(S=p.tag,S===5||S===6||S===26||S===27){r=c=p;continue e}y=y.parentNode}}r=r.return}ya(function(){var z=c,Y=ba(n),Q=[];e:{var U=qe.get(e);if(U!==void 0){var I=Ci,ke=e;switch(e){case"keypress":if(ni(n)===0)break e;case"keydown":case"keyup":I=Is;break;case"focusin":ke="focus",I=gl;break;case"focusout":ke="blur",I=gl;break;case"beforeblur":case"afterblur":I=gl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=Mc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=Fs;break;case w:case j:case C:I=qs;break;case Ee:I=Ea;break;case"scroll":case"scrollend":I=Bs;break;case"wheel":I=$s;break;case"copy":case"cut":case"paste":I=Nc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Ps;break;case"toggle":case"beforetoggle":I=Xs}var je=(t&4)!==0,mt=!je&&(e==="scroll"||e==="scrollend"),A=je?U!==null?U+"Capture":null:U;je=[];for(var M=z,B;M!==null;){var K=M;if(B=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||B===null||A===null||(K=Rr(M,A),K!=null&&je.push(as(M,K,B))),mt)break;M=M.return}0<je.length&&(U=new I(U,ke,null,n,Y),Q.push({event:U,listeners:je}))}}if((t&7)===0){e:{if(U=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",U&&n!==V&&(ke=n.relatedTarget||n.fromElement)&&(mr(ke)||ke[dr]))break e;if((I||U)&&(U=Y.window===Y?Y:(U=Y.ownerDocument)?U.defaultView||U.parentWindow:window,I?(ke=n.relatedTarget||n.toElement,I=z,ke=ke?mr(ke):null,ke!==null&&(mt=h(ke),je=ke.tag,ke!==mt||je!==5&&je!==27&&je!==6)&&(ke=null)):(I=null,ke=z),I!==ke)){if(je=zs,K="onMouseLeave",A="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(je=Ps,K="onPointerLeave",A="onPointerEnter",M="pointer"),mt=I==null?U:Xn(I),B=ke==null?U:Xn(ke),U=new je(K,M+"leave",I,n,Y),U.target=mt,U.relatedTarget=B,K=null,mr(Y)===z&&(je=new je(A,M+"enter",ke,n,Y),je.target=B,je.relatedTarget=mt,K=je),mt=K,I&&ke)t:{for(je=Wp,A=I,M=ke,B=0,K=A;K;K=je(K))B++;K=0;for(var Ne=M;Ne;Ne=je(Ne))K++;for(;0<B-K;)A=je(A),B--;for(;0<K-B;)M=je(M),K--;for(;B--;){if(A===M||M!==null&&A===M.alternate){je=A;break t}A=je(A),M=je(M)}je=null}else je=null;I!==null&&L1(Q,U,I,je,!1),ke!==null&&mt!==null&&L1(Q,mt,ke,je,!0)}}e:{if(U=z?Xn(z):window,I=U.nodeName&&U.nodeName.toLowerCase(),I==="select"||I==="input"&&U.type==="file")var lt=ja;else if(eo(U))if(to)lt=Hc;else{lt=Uc;var Te=zc}else I=U.nodeName,!I||I.toLowerCase()!=="input"||U.type!=="checkbox"&&U.type!=="radio"?z&&cn(z.elementType)&&(lt=ja):lt=qc;if(lt&&(lt=lt(e,z))){Na(Q,lt,n,Y);break e}Te&&Te(e,U,z),e==="focusout"&&z&&U.type==="number"&&z.memoizedProps.value!=null&&_a(U,"number",U.value)}switch(Te=z?Xn(z):window,e){case"focusin":(eo(Te)||Te.contentEditable==="true")&&(Ir=Te,Bi=z,Qn=null);break;case"focusout":Qn=Bi=Ir=null;break;case"mousedown":ci=!0;break;case"contextmenu":case"mouseup":case"dragend":ci=!1,Oa(Q,n,Y);break;case"selectionchange":if(Da)break;case"keydown":case"keyup":Oa(Q,n,Y)}var Ie;if(Ta)e:{switch(e){case"compositionstart":var Je="onCompositionStart";break e;case"compositionend":Je="onCompositionEnd";break e;case"compositionupdate":Je="onCompositionUpdate";break e}Je=void 0}else bl?Zs(e,n)&&(Je="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Je="onCompositionStart");Je&&(Ks&&n.locale!=="ko"&&(bl||Je!=="onCompositionStart"?Je==="onCompositionEnd"&&bl&&(Ie=Ls()):(hn=Y,wa="value"in hn?hn.value:hn.textContent,bl=!0)),Te=Go(z,Je),0<Te.length&&(Je=new Hs(Je,e,null,n,Y),Q.push({event:Je,listeners:Te}),Ie?Je.data=Ie:(Ie=Js(n),Ie!==null&&(Je.data=Ie)))),(Ie=Ma?Oc(e,n):Lc(e,n))&&(Je=Go(z,"onBeforeInput"),0<Je.length&&(Te=new Hs("onBeforeInput","beforeinput",null,n,Y),Q.push({event:Te,listeners:Je}),Te.data=Ie)),Yp(Q,e,z,n,Y)}D1(Q,t)})}function as(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Go(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,c=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||c===null||(a=Rr(e,n),a!=null&&r.unshift(as(e,a,c)),a=Rr(e,t),a!=null&&r.push(as(e,a,c))),e.tag===3)return r;e=e.return}return[]}function Wp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function L1(e,t,n,r,a){for(var c=t._reactName,p=[];n!==null&&n!==r;){var y=n,S=y.alternate,z=y.stateNode;if(y=y.tag,S!==null&&S===r)break;y!==5&&y!==26&&y!==27||z===null||(S=z,a?(z=Rr(n,c),z!=null&&p.unshift(as(n,z,S))):a||(z=Rr(n,c),z!=null&&p.push(as(n,z,S)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var Zp=/\r\n?/g,Jp=/\u0000|\uFFFD/g;function B1(e){return(typeof e=="string"?e:""+e).replace(Zp,`
`).replace(Jp,"")}function z1(e,t){return t=B1(t),B1(e)===t}function ft(e,t,n,r,a,c){switch(n){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||jn(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&jn(e,""+r);break;case"className":Kn(e,"class",r);break;case"tabIndex":Kn(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Kn(e,n,r);break;case"style":Mi(e,r,c);break;case"data":if(t!=="object"){Kn(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=ti(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(t!=="input"&&ft(e,t,"name",a.name,a,null),ft(e,t,"formEncType",a.formEncType,a,null),ft(e,t,"formMethod",a.formMethod,a,null),ft(e,t,"formTarget",a.formTarget,a,null)):(ft(e,t,"encType",a.encType,a,null),ft(e,t,"method",a.method,a,null),ft(e,t,"target",a.target,a,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=ti(""+r),e.setAttribute(n,r);break;case"onClick":r!=null&&(e.onclick=An);break;case"onScroll":r!=null&&Ke("scroll",e);break;case"onScrollEnd":r!=null&&Ke("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}n=ti(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":r===!0?e.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Ke("beforetoggle",e),Ke("toggle",e),jr(e,"popover",r);break;case"xlinkActuate":en(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":en(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":en(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":en(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":en(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":en(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":en(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":en(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":en(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":jr(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Ec.get(n)||n,jr(e,n,r))}}function od(e,t,n,r,a,c){switch(n){case"style":Mi(e,r,c);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof r=="string"?jn(e,r):(typeof r=="number"||typeof r=="bigint")&&jn(e,""+r);break;case"onScroll":r!=null&&Ke("scroll",e);break;case"onScrollEnd":r!=null&&Ke("scrollend",e);break;case"onClick":r!=null&&(e.onclick=An);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ol.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),c=e[Jt]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(t,c,a),typeof r=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break e}n in e?e[n]=r:r===!0?e.setAttribute(n,""):jr(e,n,r)}}}function Xt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ke("error",e),Ke("load",e);var r=!1,a=!1,c;for(c in n)if(n.hasOwnProperty(c)){var p=n[c];if(p!=null)switch(c){case"src":r=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ft(e,t,c,p,n,null)}}a&&ft(e,t,"srcSet",n.srcSet,n,null),r&&ft(e,t,"src",n.src,n,null);return;case"input":Ke("invalid",e);var y=c=p=a=null,S=null,z=null;for(r in n)if(n.hasOwnProperty(r)){var Y=n[r];if(Y!=null)switch(r){case"name":a=Y;break;case"type":p=Y;break;case"checked":S=Y;break;case"defaultChecked":z=Y;break;case"value":c=Y;break;case"defaultValue":y=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,t));break;default:ft(e,t,r,Y,n,null)}}Ds(e,c,y,S,z,p,a,!1);return;case"select":Ke("invalid",e),r=p=c=null;for(a in n)if(n.hasOwnProperty(a)&&(y=n[a],y!=null))switch(a){case"value":c=y;break;case"defaultValue":p=y;break;case"multiple":r=y;default:ft(e,t,a,y,n,null)}t=c,n=p,e.multiple=!!r,t!=null?dl(e,!!r,t,!1):n!=null&&dl(e,!!r,n,!0);return;case"textarea":Ke("invalid",e),c=a=r=null;for(p in n)if(n.hasOwnProperty(p)&&(y=n[p],y!=null))switch(p){case"value":r=y;break;case"defaultValue":a=y;break;case"children":c=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(s(91));break;default:ft(e,t,p,y,n,null)}fl(e,r,a,c);return;case"option":for(S in n)if(n.hasOwnProperty(S)&&(r=n[S],r!=null))switch(S){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:ft(e,t,S,r,n,null)}return;case"dialog":Ke("beforetoggle",e),Ke("toggle",e),Ke("cancel",e),Ke("close",e);break;case"iframe":case"object":Ke("load",e);break;case"video":case"audio":for(r=0;r<is.length;r++)Ke(is[r],e);break;case"image":Ke("error",e),Ke("load",e);break;case"details":Ke("toggle",e);break;case"embed":case"source":case"link":Ke("error",e),Ke("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in n)if(n.hasOwnProperty(z)&&(r=n[z],r!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ft(e,t,z,r,n,null)}return;default:if(cn(t)){for(Y in n)n.hasOwnProperty(Y)&&(r=n[Y],r!==void 0&&od(e,t,Y,r,n,void 0));return}}for(y in n)n.hasOwnProperty(y)&&(r=n[y],r!=null&&ft(e,t,y,r,n,null))}function e2(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,c=null,p=null,y=null,S=null,z=null,Y=null;for(I in n){var Q=n[I];if(n.hasOwnProperty(I)&&Q!=null)switch(I){case"checked":break;case"value":break;case"defaultValue":S=Q;default:r.hasOwnProperty(I)||ft(e,t,I,null,r,Q)}}for(var U in r){var I=r[U];if(Q=n[U],r.hasOwnProperty(U)&&(I!=null||Q!=null))switch(U){case"type":c=I;break;case"name":a=I;break;case"checked":z=I;break;case"defaultChecked":Y=I;break;case"value":p=I;break;case"defaultValue":y=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(s(137,t));break;default:I!==Q&&ft(e,t,U,I,r,Q)}}ei(e,p,y,S,z,Y,c,a);return;case"select":I=p=y=U=null;for(c in n)if(S=n[c],n.hasOwnProperty(c)&&S!=null)switch(c){case"value":break;case"multiple":I=S;default:r.hasOwnProperty(c)||ft(e,t,c,null,r,S)}for(a in r)if(c=r[a],S=n[a],r.hasOwnProperty(a)&&(c!=null||S!=null))switch(a){case"value":U=c;break;case"defaultValue":y=c;break;case"multiple":p=c;default:c!==S&&ft(e,t,a,c,r,S)}t=y,n=p,r=I,U!=null?dl(e,!!n,U,!1):!!r!=!!n&&(t!=null?dl(e,!!n,t,!0):dl(e,!!n,n?[]:"",!1));return;case"textarea":I=U=null;for(y in n)if(a=n[y],n.hasOwnProperty(y)&&a!=null&&!r.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:ft(e,t,y,null,r,a)}for(p in r)if(a=r[p],c=n[p],r.hasOwnProperty(p)&&(a!=null||c!=null))switch(p){case"value":U=a;break;case"defaultValue":I=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(s(91));break;default:a!==c&&ft(e,t,p,a,r,c)}Os(e,U,I);return;case"option":for(var ke in n)if(U=n[ke],n.hasOwnProperty(ke)&&U!=null&&!r.hasOwnProperty(ke))switch(ke){case"selected":e.selected=!1;break;default:ft(e,t,ke,null,r,U)}for(S in r)if(U=r[S],I=n[S],r.hasOwnProperty(S)&&U!==I&&(U!=null||I!=null))switch(S){case"selected":e.selected=U&&typeof U!="function"&&typeof U!="symbol";break;default:ft(e,t,S,U,r,I)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var je in n)U=n[je],n.hasOwnProperty(je)&&U!=null&&!r.hasOwnProperty(je)&&ft(e,t,je,null,r,U);for(z in r)if(U=r[z],I=n[z],r.hasOwnProperty(z)&&U!==I&&(U!=null||I!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(s(137,t));break;default:ft(e,t,z,U,r,I)}return;default:if(cn(t)){for(var mt in n)U=n[mt],n.hasOwnProperty(mt)&&U!==void 0&&!r.hasOwnProperty(mt)&&od(e,t,mt,void 0,r,U);for(Y in r)U=r[Y],I=n[Y],!r.hasOwnProperty(Y)||U===I||U===void 0&&I===void 0||od(e,t,Y,U,r,I);return}}for(var A in n)U=n[A],n.hasOwnProperty(A)&&U!=null&&!r.hasOwnProperty(A)&&ft(e,t,A,null,r,U);for(Q in r)U=r[Q],I=n[Q],!r.hasOwnProperty(Q)||U===I||U==null&&I==null||ft(e,t,Q,U,r,I)}function U1(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function t2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var a=n[r],c=a.transferSize,p=a.initiatorType,y=a.duration;if(c&&y&&U1(p)){for(p=0,y=a.responseEnd,r+=1;r<n.length;r++){var S=n[r],z=S.startTime;if(z>y)break;var Y=S.transferSize,Q=S.initiatorType;Y&&U1(Q)&&(S=S.responseEnd,p+=Y*(S<y?1:(y-z)/(S-z)))}if(--r,t+=8*(c+p)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var cd=null,ud=null;function $o(e){return e.nodeType===9?e:e.ownerDocument}function q1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function H1(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function dd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fd=null;function n2(){var e=window.event;return e&&e.type==="popstate"?e===fd?!1:(fd=e,!0):(fd=null,!1)}var V1=typeof setTimeout=="function"?setTimeout:void 0,r2=typeof clearTimeout=="function"?clearTimeout:void 0,I1=typeof Promise=="function"?Promise:void 0,l2=typeof queueMicrotask=="function"?queueMicrotask:typeof I1<"u"?function(e){return I1.resolve(null).then(e).catch(i2)}:V1;function i2(e){setTimeout(function(){throw e})}function ql(e){return e==="head"}function P1(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(r===0){e.removeChild(a),aa(t);return}r--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")r++;else if(n==="html")ss(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ss(n);for(var c=n.firstChild;c;){var p=c.nextSibling,y=c.nodeName;c[qr]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=p}}else n==="body"&&ss(e.ownerDocument.body);n=a}while(n);aa(t)}function F1(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=r}while(n)}function md(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":md(n),Ql(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function a2(e,t,n,r){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[qr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=rr(e.nextSibling),e===null)break}return null}function s2(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=rr(e.nextSibling),e===null))return null;return e}function G1(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=rr(e.nextSibling),e===null))return null;return e}function hd(e){return e.data==="$?"||e.data==="$~"}function pd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function o2(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function rr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var gd=null;function $1(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return rr(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Y1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function X1(e,t,n){switch(t=$o(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ss(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ql(e)}var lr=new Map,K1=new Set;function Yo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ll=W.d;W.d={f:c2,r:u2,D:d2,C:f2,L:m2,m:h2,X:g2,S:p2,M:_2};function c2(){var e=ll.f(),t=Uo();return e||t}function u2(e){var t=hr(e);t!==null&&t.tag===5&&t.type==="form"?f0(t):ll.r(e)}var ra=typeof document>"u"?null:document;function Q1(e,t,n){var r=ra;if(r&&typeof t=="string"&&t){var a=ve(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),K1.has(a)||(K1.add(a),e={rel:e,crossOrigin:n,href:t},r.querySelector(a)===null&&(t=r.createElement("link"),Xt(t,"link",e),st(t),r.head.appendChild(t)))}}function d2(e){ll.D(e),Q1("dns-prefetch",e,null)}function f2(e,t){ll.C(e,t),Q1("preconnect",e,t)}function m2(e,t,n){ll.L(e,t,n);var r=ra;if(r&&e&&t){var a='link[rel="preload"][as="'+ve(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+ve(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+ve(n.imageSizes)+'"]')):a+='[href="'+ve(e)+'"]';var c=a;switch(t){case"style":c=la(e);break;case"script":c=ia(e)}lr.has(c)||(e=x({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),lr.set(c,e),r.querySelector(a)!==null||t==="style"&&r.querySelector(os(c))||t==="script"&&r.querySelector(cs(c))||(t=r.createElement("link"),Xt(t,"link",e),st(t),r.head.appendChild(t)))}}function h2(e,t){ll.m(e,t);var n=ra;if(n&&e){var r=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+ve(r)+'"][href="'+ve(e)+'"]',c=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=ia(e)}if(!lr.has(c)&&(e=x({rel:"modulepreload",href:e},t),lr.set(c,e),n.querySelector(a)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(cs(c)))return}r=n.createElement("link"),Xt(r,"link",e),st(r),n.head.appendChild(r)}}}function p2(e,t,n){ll.S(e,t,n);var r=ra;if(r&&e){var a=pr(r).hoistableStyles,c=la(e);t=t||"default";var p=a.get(c);if(!p){var y={loading:0,preload:null};if(p=r.querySelector(os(c)))y.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},n),(n=lr.get(c))&&_d(e,n);var S=p=r.createElement("link");st(S),Xt(S,"link",e),S._p=new Promise(function(z,Y){S.onload=z,S.onerror=Y}),S.addEventListener("load",function(){y.loading|=1}),S.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Xo(p,t,r)}p={type:"stylesheet",instance:p,count:1,state:y},a.set(c,p)}}}function g2(e,t){ll.X(e,t);var n=ra;if(n&&e){var r=pr(n).hoistableScripts,a=ia(e),c=r.get(a);c||(c=n.querySelector(cs(a)),c||(e=x({src:e,async:!0},t),(t=lr.get(a))&&vd(e,t),c=n.createElement("script"),st(c),Xt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(a,c))}}function _2(e,t){ll.M(e,t);var n=ra;if(n&&e){var r=pr(n).hoistableScripts,a=ia(e),c=r.get(a);c||(c=n.querySelector(cs(a)),c||(e=x({src:e,async:!0,type:"module"},t),(t=lr.get(a))&&vd(e,t),c=n.createElement("script"),st(c),Xt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(a,c))}}function W1(e,t,n,r){var a=(a=xe.current)?Yo(a):null;if(!a)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=la(n.href),n=pr(a).hoistableStyles,r=n.get(t),r||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=la(n.href);var c=pr(a).hoistableStyles,p=c.get(e);if(p||(a=a.ownerDocument||a,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,p),(c=a.querySelector(os(e)))&&!c._p&&(p.instance=c,p.state.loading=5),lr.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},lr.set(e,n),c||v2(a,e,n,p.state))),t&&r===null)throw Error(s(528,""));return p}if(t&&r!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ia(n),n=pr(a).hoistableScripts,r=n.get(t),r||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function la(e){return'href="'+ve(e)+'"'}function os(e){return'link[rel="stylesheet"]['+e+"]"}function Z1(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function v2(e,t,n,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),Xt(t,"link",n),st(t),e.head.appendChild(t))}function ia(e){return'[src="'+ve(e)+'"]'}function cs(e){return"script[async]"+e}function J1(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+ve(n.href)+'"]');if(r)return t.instance=r,st(r),r;var a=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),st(r),Xt(r,"style",a),Xo(r,n.precedence,e),t.instance=r;case"stylesheet":a=la(n.href);var c=e.querySelector(os(a));if(c)return t.state.loading|=4,t.instance=c,st(c),c;r=Z1(n),(a=lr.get(a))&&_d(r,a),c=(e.ownerDocument||e).createElement("link"),st(c);var p=c;return p._p=new Promise(function(y,S){p.onload=y,p.onerror=S}),Xt(c,"link",r),t.state.loading|=4,Xo(c,n.precedence,e),t.instance=c;case"script":return c=ia(n.src),(a=e.querySelector(cs(c)))?(t.instance=a,st(a),a):(r=n,(a=lr.get(c))&&(r=x({},n),vd(r,a)),e=e.ownerDocument||e,a=e.createElement("script"),st(a),Xt(a,"link",r),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,Xo(r,n.precedence,e));return t.instance}function Xo(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,c=a,p=0;p<r.length;p++){var y=r[p];if(y.dataset.precedence===t)c=y;else if(c!==a)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function _d(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function vd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ko=null;function em(e,t,n){if(Ko===null){var r=new Map,a=Ko=new Map;a.set(n,r)}else a=Ko,r=a.get(n),r||(r=new Map,a.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var c=n[a];if(!(c[qr]||c[jt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(t)||"";p=e+p;var y=r.get(p);y?y.push(c):r.set(p,[c])}}return r}function tm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function b2(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function nm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function y2(e,t,n,r){if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=la(r.href),c=t.querySelector(os(a));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Qo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=c,st(c);return}c=t.ownerDocument||t,r=Z1(r),(a=lr.get(a))&&_d(r,a),c=c.createElement("link"),st(c);var p=c;p._p=new Promise(function(y,S){p.onload=y,p.onerror=S}),Xt(c,"link",r),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Qo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var bd=0;function w2(e,t){return e.stylesheets&&e.count===0&&Zo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Zo(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+t);0<e.imgBytes&&bd===0&&(bd=62500*t2());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zo(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>bd?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(a)}}:null}function Qo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wo=null;function Zo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wo=new Map,t.forEach(x2,e),Wo=null,Qo.call(e))}function x2(e,t){if(!(t.state.loading&4)){var n=Wo.get(e);if(n)var r=n.get(null);else{n=new Map,Wo.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<a.length;c++){var p=a[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),r=p)}r&&n.set(null,r)}a=t.instance,p=a.getAttribute("data-precedence"),c=n.get(p)||r,c===r&&n.set(null,a),n.set(p,a),this.count++,r=Qo.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),c?c.parentNode.insertBefore(a,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var us={$$typeof:re,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function k2(e,t,n,r,a,c,p,y,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ee(0),this.hiddenUpdates=ee(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function rm(e,t,n,r,a,c,p,y,S,z,Y,Q){return e=new k2(e,t,n,p,S,z,Y,Q,y),t=1,c===!0&&(t|=24),c=On(3,null,null,t),e.current=c,c.stateNode=e,t=Zc(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:r,isDehydrated:n,cache:t},nu(c),e}function lm(e){return e?(e=Wn,e):Wn}function im(e,t,n,r,a,c){a=lm(a),r.context===null?r.context=a:r.pendingContext=a,r=Nl(t),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=jl(e,r,t),n!==null&&(xn(n,e,t),Ia(n,e,t))}function am(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yd(e,t){am(e,t),(e=e.alternate)&&am(e,t)}function sm(e){if(e.tag===13||e.tag===31){var t=Dr(e,67108864);t!==null&&xn(t,e,67108864),yd(e,67108864)}}function om(e){if(e.tag===13||e.tag===31){var t=qn();t=sn(t);var n=Dr(e,t);n!==null&&xn(n,e,t),yd(e,t)}}var Jo=!0;function S2(e,t,n,r){var a=R.T;R.T=null;var c=W.p;try{W.p=2,wd(e,t,n,r)}finally{W.p=c,R.T=a}}function E2(e,t,n,r){var a=R.T;R.T=null;var c=W.p;try{W.p=8,wd(e,t,n,r)}finally{W.p=c,R.T=a}}function wd(e,t,n,r){if(Jo){var a=xd(r);if(a===null)sd(e,t,r,ec,n),um(e,r);else if(M2(a,e,t,n,r))r.stopPropagation();else if(um(e,r),t&4&&-1<T2.indexOf(e)){for(;a!==null;){var c=hr(a);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=Mn(c.pendingLanes);if(p!==0){var y=c;for(y.pendingLanes|=2,y.entangledLanes|=2;p;){var S=1<<31-$e(p);y.entanglements[1]|=S,p&=~S}zr(c),(at&6)===0&&(Bo=Nt()+500,ls(0))}}break;case 31:case 13:y=Dr(c,2),y!==null&&xn(y,c,2),Uo(),yd(c,2)}if(c=xd(r),c===null&&sd(e,t,r,ec,n),c===a)break;a=c}a!==null&&r.stopPropagation()}else sd(e,t,r,null,n)}}function xd(e){return e=ba(e),kd(e)}var ec=null;function kd(e){if(ec=null,e=mr(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=_(t),e!==null)return e;e=null}else if(n===31){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ec=e,null}function cm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xr()){case In:return 2;case Sn:return 8;case sr:case En:return 32;case Kt:return 268435456;default:return 32}default:return 32}}var Sd=!1,Hl=null,Vl=null,Il=null,ds=new Map,fs=new Map,Pl=[],T2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function um(e,t){switch(e){case"focusin":case"focusout":Hl=null;break;case"dragenter":case"dragleave":Vl=null;break;case"mouseover":case"mouseout":Il=null;break;case"pointerover":case"pointerout":ds.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fs.delete(t.pointerId)}}function ms(e,t,n,r,a,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:c,targetContainers:[a]},t!==null&&(t=hr(t),t!==null&&sm(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function M2(e,t,n,r,a){switch(t){case"focusin":return Hl=ms(Hl,e,t,n,r,a),!0;case"dragenter":return Vl=ms(Vl,e,t,n,r,a),!0;case"mouseover":return Il=ms(Il,e,t,n,r,a),!0;case"pointerover":var c=a.pointerId;return ds.set(c,ms(ds.get(c)||null,e,t,n,r,a)),!0;case"gotpointercapture":return c=a.pointerId,fs.set(c,ms(fs.get(c)||null,e,t,n,r,a)),!0}return!1}function dm(e){var t=mr(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=_(n),t!==null){e.blockedOn=t,$n(e.priority,function(){om(n)});return}}else if(t===31){if(t=m(n),t!==null){e.blockedOn=t,$n(e.priority,function(){om(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xd(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);V=r,n.target.dispatchEvent(r),V=null}else return t=hr(n),t!==null&&sm(t),e.blockedOn=n,!1;t.shift()}return!0}function fm(e,t,n){tc(e)&&n.delete(t)}function N2(){Sd=!1,Hl!==null&&tc(Hl)&&(Hl=null),Vl!==null&&tc(Vl)&&(Vl=null),Il!==null&&tc(Il)&&(Il=null),ds.forEach(fm),fs.forEach(fm)}function nc(e,t){e.blockedOn===t&&(e.blockedOn=null,Sd||(Sd=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,N2)))}var rc=null;function mm(e){rc!==e&&(rc=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){rc===e&&(rc=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],a=e[t+2];if(typeof r!="function"){if(kd(r||n)===null)continue;break}var c=hr(n);c!==null&&(e.splice(t,3),t-=3,xu(c,{pending:!0,data:a,method:n.method,action:r},r,a))}}))}function aa(e){function t(S){return nc(S,e)}Hl!==null&&nc(Hl,e),Vl!==null&&nc(Vl,e),Il!==null&&nc(Il,e),ds.forEach(t),fs.forEach(t);for(var n=0;n<Pl.length;n++){var r=Pl[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Pl.length&&(n=Pl[0],n.blockedOn===null);)dm(n),n.blockedOn===null&&Pl.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var a=n[r],c=n[r+1],p=a[Jt]||null;if(typeof c=="function")p||mm(n);else if(p){var y=null;if(c&&c.hasAttribute("formAction")){if(a=c,p=c[Jt]||null)y=p.formAction;else if(kd(a)!==null)continue}else y=p.action;typeof y=="function"?n[r+1]=y:(n.splice(r,3),r-=3),mm(n)}}}function hm(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return a=p})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Ed(e){this._internalRoot=e}lc.prototype.render=Ed.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,r=qn();im(n,r,e,t,null,null)},lc.prototype.unmount=Ed.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;im(e.current,2,null,e,null,null),Uo(),t[dr]=null}};function lc(e){this._internalRoot=e}lc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sr();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pl.length&&t!==0&&t<Pl[n].priority;n++);Pl.splice(n,0,e),n===0&&dm(e)}};var pm=l.version;if(pm!=="19.2.7")throw Error(s(527,pm,"19.2.7"));W.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=b(t),e=e!==null?k(e):null,e=e===null?null:e.stateNode,e};var j2={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{or=ic.inject(j2),zt=ic}catch{}}return ps.createRoot=function(e,t){if(!d(e))throw Error(s(299));var n=!1,r="",a=x0,c=k0,p=S0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError)),t=rm(e,1,!1,null,null,n,r,null,a,c,p,hm),e[dr]=t.current,ad(e),new Ed(t)},ps.hydrateRoot=function(e,t,n){if(!d(e))throw Error(s(299));var r=!1,a="",c=x0,p=k0,y=S0,S=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.formState!==void 0&&(S=n.formState)),t=rm(e,1,!0,t,n??null,r,a,S,c,p,y,hm),t.context=lm(null),n=t.current,r=qn(),r=sn(r),a=Nl(r),a.callback=null,jl(n,a,r),n=r,t.current.lanes=n,he(t,n),zr(t),e[dr]=t.current,ad(e),new lc(t)},ps.version="19.2.7",ps}var Em;function H2(){if(Em)return Nd.exports;Em=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),Nd.exports=q2(),Nd.exports}var V2=H2();const I2=Ch(V2),Tm=i=>{let l;const o=new Set,s=(b,k)=>{const x=typeof b=="function"?b(l):b;if(!Object.is(x,l)){const E=l;l=k??(typeof x!="object"||x===null)?x:Object.assign({},l,x),o.forEach(D=>D(l,E))}},d=()=>l,m={setState:s,getState:d,getInitialState:()=>v,subscribe:b=>(o.add(b),()=>o.delete(b))},v=l=i(s,d,m);return m},P2=(i=>i?Tm(i):Tm),F2=i=>i;function G2(i,l=F2){const o=xs.useSyncExternalStore(i.subscribe,xs.useCallback(()=>l(i.getState()),[i,l]),xs.useCallback(()=>l(i.getInitialState()),[i,l]));return xs.useDebugValue(o),o}const Mm=i=>{const l=P2(i),o=s=>G2(l,s);return Object.assign(o,l),o},$2=(i=>i?Mm(i):Mm);function Y2(){const i=new Uint8Array(16);if(typeof crypto<"u"&&crypto.getRandomValues)crypto.getRandomValues(i);else for(let o=0;o<i.length;o+=1)i[o]=Math.floor(Math.random()*256);let l="";for(const o of i)l+=o.toString(16).padStart(2,"0");return l}const sf="pkp.user",of="pkp.savedDevices",cf="pkp.ideDrafts",uf="pkp.ideSettings",Ms="Prototype Version 0.6.7";function wc(i){try{const l=localStorage.getItem(i);return l?JSON.parse(l):null}catch{return null}}function xc(i,l){try{localStorage.setItem(i,JSON.stringify(l))}catch{}}function X2(){const i=wc(sf);return i&&typeof i.username=="string"&&typeof i.userID=="string"?i:null}function Cd(i){xc(sf,i)}function gc(){return K2(wc(of)??[])}function Oh(i,l){return i.deviceID===l.deviceID?!0:!!i.ownerID&&i.ownerID===l.ownerID&&!!i.deviceName&&!!l.deviceName&&i.deviceName.toLowerCase()===l.deviceName.toLowerCase()}function K2(i){const l=[];for(const o of i){const s=l.findIndex(d=>Oh(d,o));s>=0?l[s]=o:l.push(o)}return l}function da(i){xc(of,i)}function Q2(){da([])}function W2(){try{localStorage.removeItem(sf),localStorage.removeItem(of),localStorage.removeItem(cf),localStorage.removeItem(uf)}catch{}}function ac(){var i;return((i=wc(cf))==null?void 0:i.filter(l=>l.path&&typeof l.content=="string"))??[]}function sa(i){xc(cf,i)}function Nm(){const i=wc(uf)??{};return{clearTerminalOnRun:!!i.clearTerminalOnRun,simplifiedErrors:i.simplifiedErrors!==!1}}function Z2(i){xc(uf,i)}function Dd(i){const l=gc().filter(o=>!Oh(o,i));return l.push(i),da(l),l}function J2(i){const l=gc().filter(o=>o.deviceID!==i);return da(l),l}const dc="b8e06067-62ad-41ba-9231-206ae80ab551",eg="f897177b-aee8-4767-8ecc-cc694fd5fce0",tg="f897177b-aee8-4767-8ecc-cc694fd5fce1",Od=20,ng=12,rg=new TextEncoder;function lg(i){return new Promise(l=>setTimeout(l,i))}function kc(){return typeof navigator<"u"&&"bluetooth"in navigator}function ig(i){return i?i.startsWith("PicoW-")?i.slice(6):i:"Pico"}async function ag(i){if(!kc())throw new Error("Web Bluetooth er ikke tilgængelig i denne browser.");const l=i?[{services:[dc],name:`PicoW-${i}`}]:[{services:[dc]},{namePrefix:"PicoW-"}];return navigator.bluetooth.requestDevice({filters:l,optionalServices:[dc]})}async function Lh(){if(!kc()||!navigator.bluetooth.getDevices)return[];try{return await navigator.bluetooth.getDevices()}catch{return[]}}class sg{constructor(){be(this,"device",null);be(this,"writeChar",null);be(this,"notifyChar",null);be(this,"buffer","");be(this,"decoder",new TextDecoder);be(this,"writeQueue",Promise.resolve());be(this,"disconnectNotified",!1);be(this,"onLine",()=>{});be(this,"onDisconnect",()=>{});be(this,"handleNotification",l=>{const o=l.target;if(!(o!=null&&o.value))return;this.buffer+=this.decoder.decode(o.value.buffer,{stream:!0});let s=this.buffer.indexOf(`
`);for(;s>=0;){const d=this.buffer.slice(0,s).trim();this.buffer=this.buffer.slice(s+1),d&&this.onLine(d),s=this.buffer.indexOf(`
`)}});be(this,"handleDisconnected",()=>{var l;this.disconnectNotified||(this.disconnectNotified=!0,(l=this.device)==null||l.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.writeChar=null,this.notifyChar=null,this.onDisconnect())})}get connected(){var l,o;return!!((o=(l=this.device)==null?void 0:l.gatt)!=null&&o.connected)}async connect(l){var d;this.device&&this.device!==l&&this.device.removeEventListener("gattserverdisconnected",this.handleDisconnected),this.device=l,this.buffer="",this.decoder=new TextDecoder,this.disconnectNotified=!1,l.removeEventListener("gattserverdisconnected",this.handleDisconnected),l.addEventListener("gattserverdisconnected",this.handleDisconnected);const o=await((d=l.gatt)==null?void 0:d.connect());if(!o)throw new Error("Kunne ikke åbne Bluetooth-forbindelsen.");const s=await o.getPrimaryService(dc);this.writeChar=await s.getCharacteristic(eg),this.notifyChar=await s.getCharacteristic(tg),await this.notifyChar.startNotifications(),this.notifyChar.addEventListener("characteristicvaluechanged",this.handleNotification)}writeLine(l){const o=this.writeQueue.then(()=>this.doWrite(l));return this.writeQueue=o.catch(()=>{}),o}async doWrite(l){if(!this.writeChar)throw new Error("Ingen forbindelse.");const o=rg.encode(`${l}
`),d=this.writeChar.properties.writeWithoutResponse&&typeof this.writeChar.writeValueWithoutResponse=="function"?this.writeChar.writeValueWithoutResponse.bind(this.writeChar):this.writeChar.writeValue.bind(this.writeChar);for(let h=0;h<o.length;h+=Od){const _=o.slice(h,h+Od);await d(_),h+Od<o.length&&await lg(ng)}}disconnect(){var o;const l=this.device;(o=l==null?void 0:l.gatt)!=null&&o.connected?l.gatt.disconnect():this.handleDisconnected()}}class og{constructor(l,o){be(this,"send");be(this,"onMessage");be(this,"inActive",!1);be(this,"inExpectedTotal",0);be(this,"inStreamId",0);be(this,"inParts",new Map);be(this,"inProgress",null);be(this,"outPendingLines",null);be(this,"outWaitingAck",!1);be(this,"outStreamId",0);be(this,"outNextStreamId",1);be(this,"outCache",new Map);be(this,"outProgress",null);be(this,"outResolve",null);be(this,"outReject",null);this.send=l,this.onMessage=o}reset(){this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear(),this.inProgress=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outStreamId=0,this.outCache.clear(),this.outProgress=null,this.outResolve=null,this.outReject=null}handleLine(l){var s;if(l.startsWith("prep,")){const d=l.split(","),h=d.length>=2&&/^\d+$/.test(d[1])?parseInt(d[1],10):null,_=d.length>=3&&/^\d+$/.test(d[2])?parseInt(d[2],10):0;h!==null&&h>0&&(this.inActive=!0,this.inExpectedTotal=h,this.inStreamId=_,this.inParts.clear(),this.send(_>0?`ack:prep,${_}`:"ack:prep"));return}if(l==="ack:prep"||l===`ack:prep,${this.outStreamId}`){this.flushOutbound();return}if(l.startsWith("miss,")){const d=l.split(",");if(d.length>=3&&/^\d+$/.test(d[1])&&/^\d+$/.test(d[2])){const h=parseInt(d[1],10),_=parseInt(d[2],10),m=this.outCache.get(_);h===this.outStreamId&&m&&this.send(m)}return}const o=this.parseNumbered(l);if(o){const{idx:d,payload:h}=o;if(!this.inActive){this.onMessage(h);return}this.inParts.has(d)||(this.inParts.set(d,h),(s=this.inProgress)==null||s.call(this,this.inParts.size,this.inExpectedTotal));let _=0;for(let m=1;m<=this.inExpectedTotal;m+=1)if(!this.inParts.has(m)){_=m;break}if(_>0&&this.inStreamId>0&&d>_&&this.send(`miss,${this.inStreamId},${_}`),this.inParts.size>=this.inExpectedTotal){for(let m=1;m<=this.inExpectedTotal;m+=1){const v=this.inParts.get(m);v!==void 0&&this.onMessage(v)}this.inActive=!1,this.inExpectedTotal=0,this.inStreamId=0,this.inParts.clear()}return}this.onMessage(l)}setInboundProgress(l){this.inProgress=l}async sendReliable(l,o){if(this.outPendingLines!==null||this.outWaitingAck)throw new Error("Reliable stream is already sending.");const s=l.length===0?[""]:l;this.outPendingLines=[...s],this.outWaitingAck=!0,this.outProgress=o??null,this.outStreamId=this.outNextStreamId,this.outNextStreamId+=1,this.outCache.clear();const d=new Promise((h,_)=>{this.outResolve=h,this.outReject=_});try{await this.send(`prep,${s.length},${this.outStreamId}`)}catch(h){throw this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null,h}await d}async flushOutbound(){var l,o,s,d;if(!this.outWaitingAck||this.outPendingLines===null){this.outWaitingAck=!1,this.outProgress=null,(l=this.outResolve)==null||l.call(this),this.outResolve=null,this.outReject=null;return}try{const h=this.outPendingLines.length;for(let _=0;_<h;_+=1){const m=this.outPendingLines[_],v=`${_+1}-${m}`;this.outCache.set(_+1,v),await this.send(v),(o=this.outProgress)==null||o.call(this,_+1,h,m)}(s=this.outResolve)==null||s.call(this)}catch(h){(d=this.outReject)==null||d.call(this,h)}finally{this.outResolve=null,this.outReject=null,this.outPendingLines=null,this.outWaitingAck=!1,this.outProgress=null}}parseNumbered(l){const o=l.indexOf("-");if(o<=0)return null;const s=l.slice(0,o);if(!/^\d+$/.test(s))return null;const d=parseInt(s,10);return d<1?null:{idx:d,payload:l.slice(o+1)}}}const ha=11,Ns=31,cg=2,ug=60,fa=4,ma=60;function dg(i,l){return Math.max(14,Math.min(56,Math.min(i,l)*.05))}function Bh(i,l,o=ha,s=Ns){const d=dg(i,l),h=Math.max(1,i-2*d),_=Math.max(1,l-2*d);return{areaW:i,areaH:l,cols:o,rows:s,margin:d,stepX:h/Math.max(1,o-1),stepY:_/Math.max(1,s-1)}}function zh(i,l){return l.margin+i/2*l.stepX}function Uh(i,l){const o=l.margin+i/2*l.stepY;return l.areaH-o}function ks(i,l){return i.centerX2===null||i.centerY2===null||i.spanX===null||i.spanY===null?null:{cx:zh(i.centerX2,l),cy:Uh(i.centerY2,l),width:i.spanX*l.stepX,height:i.spanY*l.stepY}}function fg(i){const l=[];for(let o=0;o<i.cols;o+=1)for(let s=0;s<i.rows;s+=1)l.push({x:i.margin+o*i.stepX,y:i.areaH-(i.margin+s*i.stepY)});return l}function Ld(i,l,o,s,d){const h=(v,b,k,x)=>{const E=b%2,D=x*2;let O=E,G=1/0;for(let H=E;H<=D;H+=2){const F=Math.abs(k(H)-v);F<G&&(G=F,O=H)}return Math.max(b,Math.min(D-b,O))},_=h(i,o,v=>zh(v,d),d.cols-1),m=h(l,s,v=>Uh(v,d),d.rows-1);return{centerX2:_,centerY2:m}}const Si=6e3,mg=15,hg=650,jm=2,Rm="",_c=[32,64,128,192],pg=Si*10,gg=3500,_g=8e3,vg=2,bg=Si,yg=Si*8;function Bd(i){return new Promise(l=>setTimeout(l,i))}function oa(i){if(i!=null&&i.aborted)throw new DOMException("BLE file read cancelled","AbortError")}function wg(i){return i instanceof DOMException&&i.name==="AbortError"}function Gl(i){return i.replace(/[\r\n,]/g," ").trim()}function Am(i){return i.replace(/[\r\n,]/g,"").trim()}class xg{constructor(l={}){be(this,"transport",new sg);be(this,"stream");be(this,"events");be(this,"waiters",[]);be(this,"collectingLayout",!1);be(this,"layoutBuffer",[]);be(this,"layoutResolve",null);be(this,"collectingLines",!1);be(this,"lineBuffer",[]);be(this,"lineResolve",null);be(this,"lineReject",null);be(this,"lineCollectId",0);be(this,"controlPumpActive",!1);be(this,"pendingButtons",[]);be(this,"pendingSliders",new Map);be(this,"pendingToggles",[]);be(this,"pendingJoysticks",new Map);be(this,"pendingDpads",[]);be(this,"expectingDisconnect",!1);be(this,"disconnectMessage",null);be(this,"busy",!1);be(this,"fsCapabilities",null);be(this,"vsendNextId",1);be(this,"vsendLastProcessedId",null);this.events=l,this.stream=new og(o=>this.transport.writeLine(o),o=>this.onDeviceMessage(o)),this.transport.onLine=o=>this.stream.handleLine(o),this.transport.onDisconnect=()=>this.handleDisconnect()}get device(){return this.transport.device}get deviceName(){var l;return ig((l=this.transport.device)==null?void 0:l.name)}get connected(){return this.transport.connected}setBusy(l){if(this.busy=l,l){this.pendingButtons=[],this.pendingSliders.clear(),this.pendingToggles=[],this.pendingJoysticks.clear(),this.pendingDpads=[];return}this.pumpControls()}log(l,o){var s,d;(d=(s=this.events).onLog)==null||d.call(s,l,o)}progress(l,o){var s,d;(d=(s=this.events).onProgress)==null||d.call(s,l,o)}onDeviceMessage(l){var s,d;if(l==="disconnect"||l==="disconnect_private"){const h=l==="disconnect_private"?"Du blev afbrudt, fordi enheden er privat, og andre brugere ikke må forbinde.":"Enheden afbrød forbindelsen.";this.disconnectMessage=h,this.log("warning",h),this.expectingDisconnect=!0,this.transport.disconnect();return}if(this.collectingLines){if(l==="__END__"){const h=this.lineBuffer;this.lineBuffer=[],this.collectingLines=!1,(s=this.lineResolve)==null||s.call(this,h),this.lineResolve=null;return}this.lineBuffer.push(l);return}if(this.collectingLayout){if(l==="__END__"){const h=this.layoutBuffer;this.layoutBuffer=[],this.collectingLayout=!1,(d=this.layoutResolve)==null||d.call(this,h),this.layoutResolve=null;return}!l.startsWith("ACK")&&!l.startsWith("ERR")&&!l.startsWith("#VERSION")?this.layoutBuffer.push(l):l.startsWith("#VERSION")&&this.layoutBuffer.push(l);return}if(l.startsWith("vsend,")){const h=l.slice(6),_=h.indexOf(","),m=_>=0?h.slice(0,_):h,v=_>=0?h.slice(_+1):"";if(/^\d+$/.test(m)){const b=parseInt(m,10);this.transport.writeLine(`ack:vsend,${b}`),b!==this.vsendLastProcessedId&&(this.vsendLastProcessedId=b,this.onDeviceMessage(v))}return}l.startsWith("ERR")?this.log("error",l):l.startsWith("radar,")?this.handleRadarLine(l):l.startsWith("text,")?this.handleTextLine(l):l.startsWith("toggle_state,")?this.handleToggleStateLine(l):l.startsWith("slider_state,")?this.handleSliderStateLine(l):l.startsWith("plot_clear,")?this.handlePlotClearLine(l):l.startsWith("plot,")?this.handlePlotLine(l):l.startsWith("ACK")||l==="LAYOUT_SAVED"||l.startsWith("READY")?this.log("success",l):this.log("info",`rx: ${l}`);const o=this.waiters.findIndex(h=>h.match(l));if(o>=0){const h=this.waiters[o];this.waiters.splice(o,1),clearTimeout(h.timer),h.resolve(l)}}waitFor(l,o,s){return new Promise((d,h)=>{const _=setTimeout(()=>{const m=this.waiters.findIndex(v=>v.timer===_);m>=0&&this.waiters.splice(m,1),h(new Error(`Timeout: ${s}`))},o);this.waiters.push({match:l,resolve:d,reject:h,timer:_})})}async collectLines(l,o,s,d,h){oa(d);const _=this.lineCollectId+1;this.lineCollectId=_,this.collectingLines=!0,this.lineBuffer=[],this.stream.setInboundProgress(h??null);const m=new Promise((v,b)=>{let k=!1;const x=()=>this.lineCollectId===_,E=()=>{k=!0,x()&&(this.lineReject=null,this.stream.setInboundProgress(null)),d==null||d.removeEventListener("abort",O)},D=F=>{k||(clearTimeout(G),x()&&(this.collectingLines=!1,this.lineBuffer=[],this.lineResolve=null),E(),b(F))},O=()=>{D(new DOMException("BLE file read cancelled","AbortError"))},G=setTimeout(()=>{x()&&D(new Error(`Timeout: ${s}`))},o);this.lineResolve=v,this.lineReject=D;const H=this.lineResolve;this.lineResolve=F=>{x()&&(clearTimeout(G),E(),H==null||H(F))},d==null||d.addEventListener("abort",O,{once:!0})});return await this.transport.writeLine(l),m}async exchange(l,o,s,d=3){let h;for(let _=1;_<=d;_+=1)try{return await this.transport.writeLine(l),await this.waitFor(o,Si,s)}catch(m){h=m,this.log("warning",`${s}: forsøg ${_}/${d} mislykkedes`)}throw h instanceof Error?h:new Error(`Failed: ${s}`)}async connect(l){this.expectingDisconnect=!1,this.stream.reset(),this.progress(5,"Forbinder til Bluetooth..."),await this.transport.connect(l)}async runHandshake(l){var q,ce,ge,te;await Bd(350),this.progress(18,"Klargør forbindelse..."),this.progress(26,"Sender HELLO..."),await this.exchange("HELLO",pe=>pe==="ACK:HELLO","HELLO"),this.progress(34,"Forbindelse bekræftet"),this.progress(44,"Spørger om ejerskab...");const o=await this.exchange("who_are_you",pe=>pe==="unowned"||pe.startsWith("unowned,")||pe.startsWith("owned,"),"who_are_you");if(this.progress(56,"Ejerskab modtaget"),o==="unowned"||o.startsWith("unowned,"))return{kind:"unowned",deviceName:((q=o.split(",")[1])==null?void 0:q.trim())||void 0};const s=o.split(","),d=s[1]??"",h=((ce=s[2])==null?void 0:ce.trim())??"",_=s[3]!==void 0?parseInt(s[3],10)===1:!0,m=s[4]!==void 0?parseInt(s[4],10)===1:!1,v=s.length>=7,b=v?parseInt(s[5]??"0",10)===1:m,k=((ge=s[v?6:5])==null?void 0:ge.trim())||void 0,x=((te=s[v?7:6])==null?void 0:te.trim())||void 0;await this.exchange("ACK:ownership",pe=>pe==="READY:permission","ACK:ownership",1),this.progress(66,"Anmoder om adgang...");const E=await this.exchange(`request_permission,${l.userID},${Gl(l.username)}`,pe=>pe.startsWith("perm,"),"request_permission");this.progress(76,"Adgang vurderet");const D=E.split(",").filter(pe=>/^\d+$/.test(pe)),O=D.length>=1?parseInt(D[0]??"0",10):0,G=D.length>=2?parseInt(D[1]??"0",10):0,H=D.length>=3?parseInt(D[2]??"0",10):G;if(O===0)return this.expectingDisconnect=!0,this.disconnectMessage="Du kan ikke forbinde, fordi enheden er privat, og andre brugere ikke må forbinde.",{kind:"denied",ownerName:k,canOthersConnect:_};const F=l.userID===d,L=G===1||F,re=H===1||F;return await this.transport.writeLine("ACK:permission"),{kind:"owned",ownerID:d,ownerName:k,deviceName:x,icon:h,canEdit:L,canEditCode:re,isOwnedByMe:F,canOthersConnect:_,canOthersEdit:m,canOthersEditCode:b}}async create(l,o,s,d,h,_,m){const v=s?1:0,b=s&&d?1:0,k=s&&h?1:0;await this.exchange(`create,${l.userID},${Gl(l.username)},${Am(o)},${v},${b},${k},${_},${m}`,x=>x==="ACK:create","create")}async updateDeviceSettings(l,o,s,d,h,_,m){const v=o?1:0,b=o&&s?1:0,k=o&&d?1:0;await this.exchange(`settings_update,${Am(l)},${v},${b},${k},${h},${_},${Gl(m??"")}`,x=>x==="ACK:settings_update","settings_update",3)}async requestLayout(){this.progress(84,"Henter kontrolpanel..."),this.collectingLayout=!0,this.layoutBuffer=[];const l=new Promise((s,d)=>{this.layoutResolve=s;const h=setTimeout(()=>{this.collectingLayout&&(this.collectingLayout=!1,this.layoutResolve=null,d(new Error("Timeout: layout")))},Si*2),_=this.layoutResolve;this.layoutResolve=m=>{clearTimeout(h),_==null||_(m)}});await this.transport.writeLine("request"),this.progress(92,"Modtager kontrolpanel...");const o=await l;return this.progress(100,"Klar"),o}async saveLayout(l){await this.exchange("update",d=>d==="ACK:update","update",3).catch(()=>{this.log("warning","ACK:update udeblev (fortsætter).")});const o=l.map(d=>{const h=m=>m===null?"n":String(m),_=`update,${d.type},${d.name},${h(d.centerX2)},${h(d.centerY2)},${h(d.spanX)},${h(d.spanY)},${d.rotation}`;return d.type==="slider"?`${_},${d.sliderMin??0},${d.sliderMax??100},${d.sliderRecenter??"none"}`:d.type==="toggle"?`${_},${d.toggleInitial?1:0}`:d.type==="radar"?[_,d.radarMinAngle??0,d.radarMaxAngle??180,d.radarMaxDistance??200,d.radarFadeMs??1200].join(","):d.type==="joystick"?[_,d.joystickXMin??-100,d.joystickXMax??100,d.joystickYMin??-100,d.joystickYMax??100,d.joystickXRecenter??"middle",d.joystickYRecenter??"middle"].join(","):d.type==="plot"?[_,d.plotMin??0,d.plotMax??100,d.plotHistory??30,d.plotStyle??"line",d.plotXAxis??"labels",d.plotYAxis??"range",d.plotLabelMaxPercent??24].join(","):_});o.push("__END__");const s=this.waitFor(d=>d==="LAYOUT_SAVED",Si*2,"LAYOUT_SAVED");await this.stream.sendReliable(o),await s}async listFiles(l="/"){return(await this.collectLines(`fs_list,${Gl(l)}`,Si*3,"fs_list")).filter(s=>s.startsWith("fs_entry,")).map(s=>{const[,d,h,_]=s.split(","),m=d==="file"||d==="dir"?d:"unknown",v=parseInt(_??"",10),b=h||"/";return{name:b.split("/").filter(Boolean).pop()??b,path:b,type:m,...Number.isFinite(v)&&v>=0?{size:v}:{}}})}handleRadarLine(l){var _,m,v;const o=l.split(",");if(o.length<4)return;const s=(_=o[1])==null?void 0:_.trim(),d=parseFloat(o[2]??""),h=parseFloat(o[3]??"");!s||!Number.isFinite(d)||!Number.isFinite(h)||((v=(m=this.events).onRadar)==null||v.call(m,s,d,h),this.log("info",`rx: ${l}`))}handleTextLine(l){var v,b;const o=l.indexOf(","),s=o>=0?l.indexOf(",",o+1):-1;if(o<0||s<0)return;const d=l.slice(o+1,s),h=l.slice(s+1),_=d==null?void 0:d.trim();if(!_)return;const m=h.split(Rm).join(`
`);(b=(v=this.events).onText)==null||b.call(v,_,m),this.log("info",`rx: ${l}`)}handleToggleStateLine(l){var h,_,m;const o=l.split(",");if(o.length<3)return;const s=(h=o[1])==null?void 0:h.trim(),d=parseInt(o[2]??"",10);!s||!Number.isFinite(d)||((m=(_=this.events).onToggleState)==null||m.call(_,s,d===1),this.log("info",`rx: ${l}`))}handleSliderStateLine(l){var h,_,m;const o=l.split(",");if(o.length<3)return;const s=(h=o[1])==null?void 0:h.trim(),d=parseFloat(o[2]??"");!s||!Number.isFinite(d)||((m=(_=this.events).onSliderState)==null||m.call(_,s,d),this.log("info",`rx: ${l}`))}handlePlotLine(l){var _,m,v;const o=l.split(",");if(o.length<3)return;const s=(_=o[1])==null?void 0:_.trim(),d=parseFloat(o[2]??"");if(!s||!Number.isFinite(d))return;const h=o.slice(3).join(",").split(Rm).join(`
`).trim()||void 0;(v=(m=this.events).onPlot)==null||v.call(m,s,d,h),this.log("info",`rx: ${l}`)}handlePlotClearLine(l){var d,h,_;const o=l.split(",");if(o.length<2)return;const s=(d=o[1])==null?void 0:d.trim();s&&((_=(h=this.events).onPlotClear)==null||_.call(h,s),this.log("info",`rx: ${l}`))}async readText(l,o,s){o==null||o(4,"Validerer Picoens Bluetooth-filsystem...");const d=await this.getFilesystemCapabilities(s);return d.pageRead?this.readTextPaged(l,o,s):this.readTextStream(l,d,o,s)}async getFilesystemCapabilities(l){if(this.fsCapabilities)return this.fsCapabilities;const o=await this.collectLines("fs_capabilities",bg,"fs_capabilities",l),s=o.find(k=>k.startsWith("ERR"));if(s)throw new Error(s);const d=o.find(k=>k.startsWith("fs_capabilities,"));if(!d)throw new Error("Kunne ikke validere Picoens Bluetooth-filsystem. Runtime sendte ikke fs_capabilities.");const h=d.split(","),_=new Map;for(let k=1;k<h.length-1;k+=2)_.set(h[k],h[k+1]);const m=parseInt(_.get("max_page")??"",10),v=parseInt(_.get("stream_chunk")??"",10),b={version:_.get("version")||void 0,pageRead:_.get("page_read")==="1",maxPageSize:Number.isFinite(m)&&m>0?m:32,streamRead:_.get("stream_read")==="1",streamChunkSize:Number.isFinite(v)&&v>0?v:128};if(!b.pageRead&&!b.streamRead)throw new Error("Picoens Bluetooth-runtime meldte, at file-read ikke er understøttet.");return this.fsCapabilities=b,b}async readTextPaged(l,o,s){const d=await this.getFilesystemCapabilities(s);let h=0,_=kg(d.maxPageSize),m=0,v=null,b="";const k=`Indlæser ${zd(l)}...`;oa(s),o==null||o(5,k);for(let x=0;x<512;x+=1){oa(s),m===0&&(o==null||o(7,k));const D=await this.readPageWithRetry(l,m,h,_,s),O=D.lines;h=D.nextPageSizeIndex,_=D.maxPageSizeIndex,oa(s);const G=O.find(pe=>pe.startsWith("ERR"));if(G)throw new Error(G);const H=O.find(pe=>pe.startsWith("fs_page,"));if(!H)throw new Error("ERR: fs_read_page missing data");const[,F,L,re,q=""]=H.split(",",5);if(F!==l)throw new Error("ERR: fs_read_page stale data");const ce=parseInt(L??"",10),ge=parseInt(re??"",10);if(!Number.isFinite(ce)||ce!==m||!Number.isFinite(ge))throw new Error("ERR: fs_read_page invalid data");v=ge,b+=q,m+=Math.floor(q.length/2);const te=v>0?8+Math.min(87,Math.round(m/v*87)):95;if(o==null||o(te,k),m>=v||q.length===0)return o==null||o(100,"Fil indlæst fra Pico"),new TextDecoder().decode(Dm(b))}throw new Error("ERR: fs_read_page too many pages")}async readPageWithRetry(l,o,s,d,h){let _,m=Math.min(s,d);for(;m>=0;){const v=_c[m],b=m===0?vg:1,k=m===0?_g:gg;for(let x=1;x<=b;x+=1){oa(h);try{return{lines:await this.collectLines(`fs_read_page,${Gl(l)},${o},${v}`,k,`fs_read_page ${o}`,h),nextPageSizeIndex:Math.min(m+1,d),maxPageSizeIndex:d}}catch(E){if(h!=null&&h.aborted||wg(E))throw E;if(_=E,x<b||m>0){const O=m>0&&x>=b?_c[m-1]:v;this.log("warning",`fs_read_page ${o} (${v} bytes) fejlede; prøver ${O} bytes`),await Bd(80+x*80)}}}if(m===0)break;d=Math.max(0,m-1),m=d}throw _ instanceof Error?_:new Error(`Timeout: fs_read_page ${o}`)}async readTextStream(l,o,s,d){const h=`Indlæser ${zd(l)}...`,_=Math.max(16,Math.min(192,o.streamChunkSize||128));s==null||s(5,h);const m=await this.collectLines(`fs_read_stream,${Gl(l)},${_}`,yg,`fs_read_stream ${l}`,d,(te,pe)=>{const ye=8+Math.round(Math.min(te,pe)/Math.max(1,pe)*87);s==null||s(Math.min(95,ye),h)});oa(d);const v=m.find(te=>te.startsWith("ERR"));if(v)throw new Error(v);const b=m.find(te=>te.startsWith("fs_stream_begin,")),k=m.find(te=>te.startsWith("fs_stream_end,"));if(!b||!k)throw new Error("ERR: fs_read_stream missing metadata");const[,x,E]=b.split(",",4),[,D,O,G]=k.split(",",4),H=parseInt(E??"",10),F=parseInt(O??"",10),L=parseInt(G??"",10);if(x!==l||D!==l||!Number.isFinite(H)||H!==F||!Number.isFinite(L))throw new Error("ERR: fs_read_stream invalid metadata");let re=0,q="";for(const te of m){if(!te.startsWith("fs_stream_chunk,"))continue;const[,pe,ye=""]=te.split(",",3),Be=parseInt(pe??"",10);if(!Number.isFinite(Be)||Be!==re||ye.length%2!==0)throw new Error("ERR: fs_read_stream invalid chunk");q+=ye,re+=Math.floor(ye.length/2)}if(re!==H)throw new Error("ERR: fs_read_stream size mismatch");const ce=Dm(q);if(Cm(ce)!==L)throw new Error("ERR: fs_read_stream checksum mismatch");return s==null||s(100,"Fil indlæst fra Pico"),new TextDecoder().decode(ce)}async writeText(l,o,s){s==null||s(5,"Klargør BLE-overførsel..."),await this.exchange(`fs_write_begin,${Gl(l)}`,k=>k==="ACK:fs_write_begin","fs_write_begin",2),s==null||s(18,"Pico er klar til filen...");const d=new TextEncoder().encode(o),h=[...d].map(k=>k.toString(16).padStart(2,"0")).join(""),_=[];for(let k=0;k<h.length;k+=160)_.push(`fs_write_chunk,${h.slice(k,k+160)}`);_.push("fs_write_end");const m=Cm(d),v=this.waitFor(k=>k==="ACK:fs_write_done"||k.startsWith("ACK:fs_write_done,")||k.startsWith("ERR"),pg,"fs_write_done");s==null||s(d.length===0?85:18,d.length===0?"Sender tom fil via Bluetooth...":`Sender 0/${d.length} bytes via Bluetooth...`),await this.stream.sendReliable(_,(k,x,E)=>{if(!E.startsWith("fs_write_chunk,"))return;const D=Math.min(d.length,k*80),O=18+Math.round(k/Math.max(1,x-1)*67);s==null||s(Math.min(85,O),`Sender ${D}/${d.length} bytes via Bluetooth...`)}),s==null||s(90,"Verificerer BLE-fil...");const b=await v;if(b.startsWith("ERR"))throw new Error(b);if(b.startsWith("ACK:fs_write_done,")){const[,k,x]=b.split(",",3),E=parseInt(k??"",10),D=parseInt(x??"",10);if(E!==d.length||D!==m)throw new Error(`ERR: BLE-verificering fejlede for ${zd(l)}.`)}s==null||s(100,"Gemt på Pico")}async deleteFile(l){const o=await this.exchange(`fs_delete,${Gl(l)}`,s=>s==="ACK:fs_delete"||s.startsWith("ERR"),"fs_delete",2);if(o.startsWith("ERR"))throw new Error(o)}async restart(){await this.exchange("restart",l=>l==="ACK:restart"||l.startsWith("ERR"),"restart",1).catch(()=>{}),this.expectingDisconnect=!0}enqueueButton(l,o){this.busy||(this.pendingButtons.push(`button,${l}:${o?"down":"up"}`),this.pumpControls())}enqueueSlider(l,o){this.busy||(this.pendingSliders.set(l,`slider,${l}:${o}`),this.pumpControls())}enqueueToggle(l,o){this.busy||(this.pendingToggles.push(`toggle,${l}:${o?1:0}`),this.pumpControls())}enqueueJoystick(l,o,s){this.busy||(this.pendingJoysticks.set(l,`joystick,${l}:${Math.round(o)},${Math.round(s)}`),this.pumpControls())}enqueueDpad(l,o,s){this.busy||(this.pendingDpads.push(`dpad,${l}:${o},${s?"down":"up"}`),this.pumpControls())}pumpControls(){this.controlPumpActive||this.busy||!this.transport.connected||(this.controlPumpActive=!0,this.drainControls())}async drainControls(){try{for(;!this.busy&&this.transport.connected;){const l=this.nextControlLine();if(!l)break;l.secure?await this.sendSecureControl(l.line):(await this.transport.writeLine(l.line),this.log("info",`tx: ${l.line}`)),await Bd(mg)}}catch(l){this.log("error",l instanceof Error?l.message:"Kunne ikke sende kommando."),this.handleDisconnect()}finally{this.controlPumpActive=!1,!this.busy&&this.transport.connected&&this.hasPendingControls()&&this.pumpControls()}}async sendSecureControl(l){for(let o=1;o<=jm;o+=1){if(!this.transport.connected)return;const s=this.vsendNextId;this.vsendNextId+=1,await this.transport.writeLine(`vsend,${s},${l}`),this.log("info",`tx: ${l}`);try{await this.waitFor(d=>d===`ack:vsend,${s}`,hg,`vsend:${l}`);return}catch{this.log("warning",`Ingen bekræftelse for: ${l} (forsøg ${o}/${jm})`)}}}nextControlLine(){const l=this.pendingButtons.shift();if(l)return{line:l,secure:!0};const o=this.pendingDpads.shift();if(o)return{line:o,secure:!1};const s=this.pendingSliders.entries().next();if(!s.done){const[_,m]=s.value;return this.pendingSliders.delete(_),{line:m,secure:!1}}const d=this.pendingToggles.shift();if(d)return{line:d,secure:!0};const h=this.pendingJoysticks.entries().next();if(!h.done){const[_,m]=h.value;return this.pendingJoysticks.delete(_),{line:m,secure:!1}}return null}hasPendingControls(){return this.pendingButtons.length>0||this.pendingDpads.length>0||this.pendingSliders.size>0||this.pendingToggles.length>0||this.pendingJoysticks.size>0}async disconnect(){if(!this.transport.connected){this.handleDisconnect();return}this.expectingDisconnect=!0;try{await this.exchange("disconnect",l=>l==="ACK:disconnect","disconnect",1)}catch{}this.transport.disconnect()}handleDisconnect(){var o,s,d;for(const h of this.waiters)clearTimeout(h.timer),h.reject(new Error("Forbindelsen blev afbrudt."));this.waiters=[],this.collectingLayout=!1,this.layoutResolve=null,(o=this.lineReject)==null||o.call(this,new Error("Forbindelsen blev afbrudt.")),this.collectingLines=!1,this.lineResolve=null,this.lineReject=null,this.fsCapabilities=null,this.stream.reset(),this.vsendNextId=1,this.vsendLastProcessedId=null;const l=this.disconnectMessage??void 0;this.disconnectMessage=null,(d=(s=this.events).onDisconnect)==null||d.call(s,l)}}function kg(i){let l=0;for(let o=0;o<_c.length;o+=1)_c[o]<=i&&(l=o);return l}function zd(i){return i.replace(/\\/g,"/").replace(/^\/+/,"")||i}function Cm(i){let l=0;for(const o of i)l=l+o>>>0;return l}function Dm(i){const l=new Uint8Array(Math.floor(i.length/2));for(let o=0;o<l.length;o+=1)l[o]=parseInt(i.slice(o*2,o*2+2),16);return l}function Om(i){const l=(o,s)=>Number.isFinite(o)?Math.max(cg,Math.min(ug,o)):s;for(const o of i){const s=o.trim();if(s.startsWith("#GRID,")){const d=s.split(","),h=l(parseInt(d[1],10),ha),_=l(parseInt(d[2],10),Ns);return{cols:h,rows:_}}}return{cols:ha,rows:Ns}}function Lm(i){const l=new Map;for(const o of i){const s=o.trim();if(!s||s.startsWith("#VERSION")||s==="__END__")continue;const d=s.split(",");if(d.length<7)continue;const[h,_,m,v,b,k,x,E,D,O,G,H,F,L]=d;if(h!=="button"&&h!=="slider"&&h!=="toggle"&&h!=="radar"&&h!=="text"&&h!=="joystick"&&h!=="dpad"&&h!=="plot"||l.has(_))continue;const re=ae=>{if(ae==="n")return null;const Se=parseInt(ae,10);return Number.isNaN(Se)?null:Se},q=parseInt(x,10)||0,ce=E!==void 0?parseInt(E,10):0,ge=D!==void 0?parseInt(D,10):100,te=["none","bottom","middle","top"].includes(O??"")?O:"none",pe=E!==void 0?parseInt(E,10)===1:!1,ye=E!==void 0?parseFloat(E):0,Be=D!==void 0?parseFloat(D):180,ne=O!==void 0?parseFloat(O):200,Pe=G!==void 0?parseInt(G,10):1200,we=(ae,Se)=>["none","bottom","middle","top"].includes(ae??"")?ae:Se,Qe=E!==void 0?parseInt(E,10):-100,Z=D!==void 0?parseInt(D,10):100,R=O!==void 0?parseInt(O,10):-100,W=G!==void 0?parseInt(G,10):100,me=E!==void 0?parseFloat(E):0,Re=D!==void 0?parseFloat(D):100,_e=O!==void 0?parseInt(O,10):30,T=G==="bar"?"bar":G==="dot"?"dot":"line",$=(ae,Se)=>["range","labels","none"].includes(ae??"")?ae:Se,le=L!==void 0?parseFloat(L):24;l.set(_,{type:h,name:_,centerX2:re(m),centerY2:re(v),spanX:re(b),spanY:re(k),rotation:[0,90,180,270].includes(q)?q:0,...h==="slider"?{sliderMin:Number.isFinite(ce)?ce:0,sliderMax:Number.isFinite(ge)?ge:100,sliderRecenter:te}:{},...h==="toggle"?{toggleInitial:pe}:{},...h==="radar"?{radarMinAngle:Number.isFinite(ye)?ye:0,radarMaxAngle:Number.isFinite(Be)?Be:180,radarMaxDistance:Number.isFinite(ne)&&ne>0?ne:200,radarFadeMs:Number.isFinite(Pe)&&Pe>0?Pe:1200}:{},...h==="joystick"?{joystickXMin:Number.isFinite(Qe)?Qe:-100,joystickXMax:Number.isFinite(Z)&&Z!==Qe?Z:100,joystickYMin:Number.isFinite(R)?R:-100,joystickYMax:Number.isFinite(W)&&W!==R?W:100,joystickXRecenter:we(H,"middle"),joystickYRecenter:we(F,"middle")}:{},...h==="plot"?{plotMin:Number.isFinite(me)?me:0,plotMax:Number.isFinite(Re)&&Re!==me?Re:me+100,plotHistory:Number.isFinite(_e)&&_e>1?_e:30,plotStyle:T,plotXAxis:$(H,"labels"),plotYAxis:$(F,"range"),plotLabelMaxPercent:Number.isFinite(le)?Math.max(8,Math.min(45,le)):24}:{}})}return[...l.values()]}const Sg=[{slug:"grommet-icons:raspberry",label:"Raspberry Pi",keywords:["raspberry pi","raspberry"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M8.087 0a.67.67 0 0 0-.399.165c-.363-.14-.717-.19-1.032.096c-.486-.063-.643.067-.762.22c-.107-.003-.8-.11-1.117.364c-.798-.095-1.049.47-.763.994c-.163.253-.332.5.048.981c-.134.268-.05.558.267.91c-.084.376.081.641.376.848c-.055.515.472.815.629.922c.06.3.187.584.79.74c.099.447.46.525.811.619c-1.159.673-2.153 1.558-2.146 3.733l-.17.303c-1.328.808-2.524 3.406-.654 5.518c.122.66.326 1.134.508 1.66c.273 2.117 2.054 3.11 2.523 3.227c.688.524 1.422 1.02 2.413 1.369c.935.964 1.946 1.331 3.005 1.331s2.07-.367 3.005-1.331c.992-.348 1.725-.845 2.413-1.37c.47-.117 2.25-1.11 2.523-3.226c.182-.526.386-1 .508-1.66c1.87-2.112.674-4.71-.655-5.518l-.169-.303c.007-2.175-.987-3.06-2.146-3.733c.35-.094.712-.172.812-.619c.602-.156.729-.44.79-.74c.157-.107.683-.407.628-.922c.295-.207.46-.472.376-.848c.318-.352.402-.642.267-.91c.38-.48.212-.728.049-.98c.285-.526.034-1.09-.763-.995c-.318-.474-1.01-.367-1.117-.365c-.12-.152-.277-.282-.763-.22c-.315-.284-.669-.235-1.032-.095A.67.67 0 0 0 16.742 0c-.232-.007-.43.134-.643.202c-.523-.17-.641.061-.898.156c-.569-.12-.742.143-1.015.42l-.32-.007c-.858.506-1.282 1.535-1.452 1.535S11.82 1.277 10.961.771l-.319.006C10.37.501 10.196.238 9.627.358C9.37.263 9.252.031 8.73.202C8.516.134 8.318-.007 8.087 0m.03.609c.436.161.663.37.9.575c.08-.108.202-.188.052-.45c.31.18.544.39.717.625c.191-.122.112-.287.113-.441c.322.262.528.54.778.812c.05-.037.093-.162.132-.358c.768.744 1.852 2.62.279 3.365C9.749 3.633 8.15 2.83 6.38 2.228c2.277 1.174 3.602 2.123 4.327 2.932c-.371 1.49-2.31 1.56-3.019 1.518c.145-.068.266-.15.31-.275c-.179-.127-.81-.013-1.25-.26c.17-.036.249-.069.328-.194c-.416-.132-.864-.248-1.128-.468c.143.002.275.033.46-.095c-.372-.201-.77-.36-1.078-.668c.193-.004.4-.002.46-.073a4.2 4.2 0 0 1-.867-.704c.27.033.382.006.448-.04c-.258-.265-.583-.487-.739-.812c.2.069.383.093.515-.008c-.088-.198-.464-.314-.68-.776c.211.02.436.046.48 0c-.097-.398-.264-.622-.429-.854c.451-.007 1.134.001 1.103-.037l-.279-.285c.44-.118.892.02 1.219.122c.147-.115-.004-.263-.183-.413q.56.076 1.019.255C7.56.945 7.289.799 7.159.65c.578.11.825.263 1.068.417c.177-.169.01-.312-.11-.46m8.594 0c-.12.147-.287.29-.11.46c.244-.155.49-.308 1.068-.418c-.13.148-.401.294-.238.442a4.4 4.4 0 0 1 1.02-.255c-.18.15-.33.298-.184.413c.328-.102.779-.24 1.22-.122l-.28.285c-.03.038.652.03 1.103.037c-.165.232-.331.456-.43.854c.045.046.27.02.48 0c-.215.462-.591.578-.679.776c.132.101.315.077.515.008c-.155.325-.48.547-.738.811c.065.047.178.074.447.041a4.2 4.2 0 0 1-.866.704c.06.07.267.069.46.073c-.31.307-.706.467-1.079.668c.186.128.318.097.46.095c-.264.22-.711.336-1.127.468c.079.125.158.158.327.193c-.44.248-1.071.134-1.249.26c.043.125.164.208.31.276c-.71.041-2.648-.029-3.02-1.518c.726-.81 2.05-1.758 4.328-2.932c-1.772.602-3.37 1.405-4.708 2.509c-1.574-.744-.49-2.62.278-3.365c.04.196.082.32.133.358c.25-.272.455-.55.777-.812c0 .154-.078.32.114.441c.172-.235.406-.446.716-.624c-.15.26-.027.341.053.45c.236-.207.463-.415.899-.576M12.414 6.77c1.359 0 2.492.923 2.494 1.466c.004.68-.994 1.38-2.476 1.398h-.036c-1.482-.018-2.48-.717-2.476-1.398c.003-.543 1.136-1.466 2.494-1.466m-3.813.447h.084q.331 0 .677.059c.777.13-3.72 4.058-3.79 3.182c-.062-2.003 1.278-3.213 3.03-3.241m7.542 0h.084c1.751.028 3.091 1.238 3.03 3.24c-.07.877-4.567-3.05-3.791-3.181q.346-.059.677-.06m-6.825 2.5c.259-.002.521.036.777.122c1.363.458 2.052 2.053 1.54 3.56c-.513 1.509-2.034 2.36-3.398 1.903c-1.363-.458-2.052-2.053-1.54-3.56c.417-1.226 1.498-2.017 2.62-2.025m6.193 0c1.122.008 2.204.8 2.62 2.024c.513 1.508-.176 3.103-1.54 3.56c-1.364.459-2.885-.393-3.398-1.901c-.512-1.508.177-3.103 1.54-3.56c.256-.087.519-.125.778-.123M5.33 11.4c1.062.015.273 5.052-.69 4.624c-1.092-.879-1.444-3.451.582-4.608a.4.4 0 0 1 .082-.014zm14.168 0l.027.002a.4.4 0 0 1 .081.014c2.026 1.157 1.675 3.73.582 4.608c-.963.428-1.752-4.609-.69-4.624m-7.084 3.482a2.8 2.8 0 0 1 1.874.7c.52.47.822 1.14.818 1.811c0 .66-.295 1.313-.8 1.778a2.88 2.88 0 0 1-1.892.739a2.88 2.88 0 0 1-1.892-.739a2.45 2.45 0 0 1-.8-1.778a2.46 2.46 0 0 1 .818-1.81a2.8 2.8 0 0 1 1.874-.7M6.148 16.2c.703-.014 1.568.541 2.268 1.353c.78.94 1.136 2.593.485 3.08c-.617.372-2.115.218-3.178-1.31c-.718-1.282-.624-2.587-.12-2.97q.248-.149.545-.153m12.465 0h.067c.197.004.38.052.546.153c.503.383.597 1.688-.12 2.97c-1.064 1.528-2.562 1.682-3.178 1.31c-.652-.487-.297-2.14.484-3.08c.678-.787 1.51-1.333 2.201-1.353m-6.199 4.504c1.09-.012 2.71.447 2.69 1.032c.017.405-1.312 1.574-2.667 1.516h-.045c-1.356.058-2.685-1.11-2.667-1.516c-.02-.585 1.6-1.044 2.69-1.032"/></svg>'},{slug:"material-symbols:robot",label:"Robot",keywords:["robot"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.413 11.413Q11 10.825 11 10t-.587-1.412T9 8t-1.412.588T7 10t.588 1.413T9 12t1.413-.587m6 0Q17 10.825 17 10t-.587-1.412T15 8t-1.412.588T13 10t.588 1.413T15 12t1.413-.587M9 21v-4h2v4zm4 0v-4h2v4zm-8 0q-.825 0-1.412-.587T3 19V9q0-2.5 1.75-4.25T9 3h6q2.5 0 4.25 1.75T21 9v10q0 .825-.587 1.413T19 21h-2v-4q0-.825-.587-1.412T15 15H9q-.825 0-1.412.588T7 17v4z"/></svg>'},{slug:"material-symbols:robot-outline",label:"Robot Outline",keywords:["robot"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V9q0-2.5 1.75-4.25T9 3h6q2.5 0 4.25 1.75T21 9v10q0 .825-.587 1.413T19 21zm0-2h14V9q0-1.65-1.175-2.825T15 5H9Q7.35 5 6.175 6.175T5 9zm2.588-7.587Q7 10.825 7 10t.588-1.412T9 8t1.413.588T11 10t-.587 1.413T9 12t-1.412-.587m6 0Q13 10.825 13 10t.588-1.412T15 8t1.413.588T17 10t-.587 1.413T15 12t-1.412-.587M7 19v-2q0-.825.588-1.412T9 15h6q.825 0 1.413.588T17 17v2h-2v-2h-2v2h-2v-2H9v2zm-2 0h14z"/></svg>'},{slug:"mdi:robot",label:"Robot",keywords:["robot"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5A2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"/></svg>'},{slug:"mdi:raspberry-pi",label:"Raspberry Pi",keywords:["raspberry pi"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20 8h2v2h-2zM4 5h16a2 2 0 0 1 2 2h-3v2H5v4h3v3h11v1h3a2 2 0 0 1-2 2h-4v1h-2v-1h-3v1H7v-1H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m15 10H9v-5h10v1h3v2h-3zm-6-3v2h2v-2zM5 6v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm2 0v2h1V6zm5 8h2v2h-2z"/></svg>'},{slug:"mdi:chip",label:"Chip",keywords:["chip"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6 4h12v1h3v2h-3v2h3v2h-3v2h3v2h-3v2h3v2h-3v1H6v-1H3v-2h3v-2H3v-2h3v-2H3V9h3V7H3V5h3zm5 11v3h1v-3zm2 0v3h1v-3zm2 0v3h1v-3z"/></svg>'},{slug:"mingcute:chip-fill",label:"Chip Fill",keywords:["chip"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M15 2a1 1 0 0 1 1 1v1h1a3 3 0 0 1 3 3v1h1a1 1 0 1 1 0 2h-1v4h1a1 1 0 1 1 0 2h-1v1a3 3 0 0 1-3 3h-1v1a1 1 0 1 1-2 0v-1h-4v1a1 1 0 1 1-2 0v-1H7a3 3 0 0 1-3-3v-1H3a1 1 0 1 1 0-2h1v-4H3a1 1 0 0 1 0-2h1V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 2 0v1h4V3a1 1 0 0 1 1-1m-1 6h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2m0 2v4h-4v-4z"/></g></svg>'},{slug:"mingcute:chip-line",label:"Chip Line",keywords:["chip"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M15 2a1 1 0 0 1 1 1v1h1a3 3 0 0 1 3 3v1h1a1 1 0 1 1 0 2h-1v4h1a1 1 0 1 1 0 2h-1v1a3 3 0 0 1-3 3h-1v1a1 1 0 1 1-2 0v-1h-4v1a1 1 0 1 1-2 0v-1H7a3 3 0 0 1-3-3v-1H3a1 1 0 1 1 0-2h1v-4H3a1 1 0 0 1 0-2h1V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 2 0v1h4V3a1 1 0 0 1 1-1m2 4H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1m-3 2a2 2 0 0 1 1.995 1.85L16 10v4a2 2 0 0 1-1.85 1.995L14 16h-4a2 2 0 0 1-1.995-1.85L8 14v-4a2 2 0 0 1 1.85-1.995L10 8zm0 2h-4v4h4z"/></g></svg>'},{slug:"solar:cpu-bold",label:"Cpu Bold",keywords:["cpu"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M9.181 10.181c.053-.053.148-.119.45-.16c.323-.043.761-.044 1.439-.044h1.86c.678 0 1.116.001 1.438.045c.303.04.398.106.45.16c.054.052.12.147.16.45c.044.322.045.76.045 1.438v1.86c0 .678-.001 1.116-.045 1.438c-.04.303-.106.398-.16.45c-.052.054-.147.12-.45.16c-.322.044-.76.045-1.438.045h-1.86c-.678 0-1.116-.001-1.438-.045c-.303-.04-.398-.106-.45-.16c-.054-.052-.12-.147-.16-.45c-.044-.322-.045-.76-.045-1.438v-1.86c0-.678.001-1.116.045-1.438c.04-.303.106-.398.16-.45"/><path fill="currentColor" fill-rule="evenodd" d="M12 3c.385 0 .698.312.698.698v2.79q.764.001 1.395.017V3.698a.698.698 0 0 1 1.395 0v2.79a1 1 0 0 1-.008.108c.936.115 1.585.353 2.078.846s.731 1.142.846 2.078a1 1 0 0 1 .108-.008h2.79a.698.698 0 0 1 0 1.395h-2.807q.017.63.017 1.395h2.79a.698.698 0 0 1 0 1.396h-2.79q-.001.764-.017 1.395h2.807a.698.698 0 0 1 0 1.395h-2.79a1 1 0 0 1-.108-.008c-.115.936-.353 1.585-.846 2.078s-1.142.731-2.078.846q.009.053.008.108v2.79a.698.698 0 0 1-1.395 0v-2.807q-.63.017-1.395.017v2.79a.698.698 0 0 1-1.396 0v-2.79a56 56 0 0 1-1.395-.017v2.807a.698.698 0 0 1-1.395 0v-2.79q0-.056.008-.108c-.936-.115-1.585-.353-2.078-.846s-.731-1.142-.846-2.078a1 1 0 0 1-.108.008h-2.79a.698.698 0 0 1 0-1.395h2.807a56 56 0 0 1-.017-1.395h-2.79a.698.698 0 0 1 0-1.396h2.79q.001-.764.017-1.395H2.698a.698.698 0 0 1 0-1.395h2.79q.056 0 .108.008c.115-.936.353-1.585.846-2.078s1.142-.731 2.078-.846a1 1 0 0 1-.008-.108v-2.79a.698.698 0 0 1 1.395 0v2.807q.63-.017 1.395-.017v-2.79c0-.386.313-.698.698-.698m-.976 5.581c-.619 0-1.152 0-1.578.058c-.458.061-.896.2-1.252.555c-.355.356-.494.794-.555 1.252c-.058.427-.058.96-.058 1.578v1.952c0 .619 0 1.151.058 1.578c.061.458.2.896.555 1.252c.356.355.794.494 1.252.555c.426.058.96.058 1.578.058h1.952c.619 0 1.151 0 1.578-.058c.458-.061.896-.2 1.252-.555c.355-.356.494-.794.555-1.252c.058-.427.058-.96.058-1.578v-1.952c0-.619 0-1.151-.058-1.578c-.061-.458-.2-.896-.555-1.252c-.356-.355-.794-.494-1.252-.555c-.427-.058-.96-.058-1.578-.058z" clip-rule="evenodd"/></svg>'},{slug:"solar:cpu-bold-duotone",label:"Cpu Bold Duotone",keywords:["cpu"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 3c.385 0 .698.312.698.698v2.79q.764.001 1.395.017V3.698a.698.698 0 0 1 1.395 0v2.79a1 1 0 0 1-.008.108c.936.115 1.585.353 2.078.846s.731 1.142.846 2.078a1 1 0 0 1 .108-.008h2.79a.698.698 0 0 1 0 1.395h-2.807q.017.63.017 1.395h2.79a.698.698 0 0 1 0 1.396h-2.79q-.001.764-.017 1.395h2.807a.698.698 0 0 1 0 1.395h-2.79a1 1 0 0 1-.108-.008c-.115.936-.353 1.585-.846 2.078s-1.142.731-2.078.846q.009.053.008.108v2.79a.698.698 0 0 1-1.395 0v-2.807q-.63.017-1.395.017v2.79a.698.698 0 0 1-1.396 0v-2.79a56 56 0 0 1-1.395-.017v2.807a.698.698 0 0 1-1.395 0v-2.79q0-.056.008-.108c-.936-.115-1.585-.353-2.078-.846s-.731-1.142-.846-2.078a1 1 0 0 1-.108.008h-2.79a.698.698 0 0 1 0-1.395h2.807a56 56 0 0 1-.017-1.395h-2.79a.698.698 0 0 1 0-1.396h2.79q.001-.764.017-1.395H2.698a.698.698 0 0 1 0-1.395h2.79q.056 0 .108.008c.115-.936.353-1.585.846-2.078s1.142-.731 2.078-.846a1 1 0 0 1-.008-.108v-2.79a.698.698 0 0 1 1.395 0v2.807q.63-.017 1.395-.017v-2.79c0-.386.313-.698.698-.698m-.976 5.581c-.619 0-1.152 0-1.578.058c-.458.061-.896.2-1.252.555c-.355.356-.494.794-.555 1.252c-.058.427-.058.96-.058 1.578v1.952c0 .619 0 1.151.058 1.578c.061.458.2.896.555 1.252c.356.355.794.494 1.252.555c.426.058.96.058 1.578.058h1.952c.619 0 1.151 0 1.578-.058c.458-.061.896-.2 1.252-.555c.355-.356.494-.794.555-1.252c.058-.427.058-.96.058-1.578v-1.952c0-.619 0-1.151-.058-1.578c-.061-.458-.2-.896-.555-1.252c-.356-.355-.794-.494-1.252-.555c-.427-.058-.96-.058-1.578-.058z" clip-rule="evenodd"/><path fill="currentColor" d="M9.18 10.18c.054-.052.149-.118.451-.159c.323-.043.761-.044 1.439-.044h1.86c.678 0 1.116.001 1.438.044c.303.041.398.107.45.16c.054.053.12.148.16.45c.044.323.045.761.045 1.439v1.86c0 .678-.001 1.116-.045 1.438c-.04.303-.106.398-.16.45c-.052.054-.147.12-.45.16c-.322.044-.76.045-1.438.045h-1.86c-.678 0-1.116-.001-1.439-.045c-.302-.04-.397-.106-.45-.16c-.053-.052-.119-.147-.16-.45c-.043-.322-.044-.76-.044-1.438v-1.86c0-.678.001-1.116.044-1.438c.041-.303.107-.398.16-.451" opacity=".5"/></svg>'},{slug:"solar:cpu-broken",label:"Cpu Broken",keywords:["cpu"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" d="M17 14c0 1.414 0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44h-4c-1.414 0-2.121 0-2.56-.44C7 16.122 7 15.415 7 14v-4c0-1.414 0-2.121.44-2.56C7.878 7 8.585 7 10 7h4c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56"/><path d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12Z"/><path stroke-linecap="round" d="M4 12H2m20 0h-2M4 9H2m20 0h-2M4 15H2m20 0h-2m-8 5v2m0-20v2M9 20v2M9 2v2m6 16v2m0-20v2"/></g></svg>'},{slug:"tabler:circuit-bulb",label:"Circuit Bulb",keywords:["circuit"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12h5m10 0h5M7 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0m1.5-3.5l7 7m0-7l-7 7"/></svg>'},{slug:"tabler:circuit-cell",label:"Circuit Cell",keywords:["circuit"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12h8m4 0h8M10 5v14m4-10v6"/></svg>'},{slug:"ph:head-circuit",label:"Head Circuit",keywords:["circuit"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M192.5 171.47a88.34 88.34 0 0 0 31.5-69.54c-1-45.71-37.61-83.4-83.24-85.8A88 88 0 0 0 48 102l-22.45 43.18c-.09.18-.18.36-.26.54a16 16 0 0 0 7.55 20.62l.25.11L56 176.94V208a16 16 0 0 0 16 16h48a8 8 0 0 0 0-16H72v-36.19a8 8 0 0 0-4.67-7.28L40 152l23.07-44.34A7.9 7.9 0 0 0 64 104a72 72 0 0 1 56-70.21v15.59a24 24 0 1 0 16 0V32c1.3 0 2.6 0 3.9.1A72.26 72.26 0 0 1 203.84 80H184a8 8 0 0 0-6.15 2.88l-25.51 30.62a24.06 24.06 0 1 0 12.28 10.25L187.75 96h19.79q.36 3.12.44 6.3a72.26 72.26 0 0 1-28.78 59.3a8 8 0 0 0-3.14 7.39l8 64a8 8 0 0 0 7.93 7a8 8 0 0 0 1-.06a8 8 0 0 0 6.95-8.93ZM128 80a8 8 0 1 1 8-8a8 8 0 0 1-8 8m16 64a8 8 0 1 1 8-8a8 8 0 0 1-8 8"/></svg>'},{slug:"lucide:microchip",label:"Microchip",keywords:["microchip"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 12h4m-4 5h4M10 7h4m4 5h2m-2 6h2M18 6h2M4 12h2m-2 6h2M4 6h2"/><rect x="6" y="2" rx="2"/></g></svg>'},{slug:"ri:sensor-fill",label:"Sensor Fill",keywords:["sensor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6 8v2h12V8h-3V2h2v4h5v2h-2v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V2h2v6zm7-6v6h-2V2z"/></svg>'},{slug:"ri:sensor-line",label:"Sensor Line",keywords:["sensor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6 8v11h12V8h-3V2h2v4h5v2h-2v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V2h2v6zm7-6v6h-2V2z"/></svg>'},{slug:"material-symbols:door-sensor",label:"Door Sensor",keywords:["sensor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M9 21q-.825 0-1.412-.587T7 19v-2h5q.825 0 1.413-.587T14 15t-.587-1.412T12 13H7V5q0-.825.588-1.412T9 3h6q.825 0 1.413.588T17 5v14q0 .825-.587 1.413T15 21zm-4-5q-.425 0-.712-.288T4 15t.288-.712T5 14h7q.425 0 .713.288T13 15t-.288.713T12 16zm7.713-6.288Q13 9.425 13 9t-.288-.712T12 8t-.712.288T11 9t.288.713T12 10t.713-.288m6.575-1Q19 8.426 19 8V4q0-.425.288-.712T20 3t.713.288T21 4v4q0 .425-.288.713T20 9t-.712-.288"/></svg>'},{slug:"mdi:motor",label:"Motor",keywords:["motor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 4v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"/></svg>'},{slug:"mdi:motor-outline",label:"Motor Outline",keywords:["motor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8 10h8v8h-5l-2-2H7v-5m0-7v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"/></svg>'},{slug:"mdi:motor-off",label:"Motor Off",keywords:["motor"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3.78 2.5L21.5 20.22l-1.27 1.28L18 19.27V20h-8l-2-2H5v-3H3v3H1v-8h2v3h2v-3l1.87-1.86L2.5 3.77zM20 9v3h-2V8h-6V6h3V4H7.82l15 15H23V9z"/></svg>'},{slug:"mdi:engine",label:"Engine",keywords:["engine"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 4v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"/></svg>'},{slug:"mdi:engine-outline",label:"Engine Outline",keywords:["engine"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8 10h8v8h-5l-2-2H7v-5m0-7v2h3v2H7l-2 2v3H3v-3H1v8h2v-3h2v3h3l2 2h8v-4h2v3h3V9h-3v3h-2V8h-6V6h3V4z"/></svg>'},{slug:"tabler:engine",label:"Engine",keywords:["engine"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10v6m9-11v3m-2-3h4m-9 8H3m3-3h2l2-2h3.382a1 1 0 0 1 .894.553l1.448 2.894a1 1 0 0 0 .894.553H18v-2h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2v-2h-3v2a1 1 0 0 1-1 1h-3.465a1 1 0 0 1-.832-.445L8 16H6z"/></svg>'},{slug:"mdi:car",label:"Car",keywords:["car"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m5 11l1.5-4.5h11L19 11m-1.5 5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-11 0A1.5 1.5 0 0 1 5 14.5A1.5 1.5 0 0 1 6.5 13A1.5 1.5 0 0 1 8 14.5A1.5 1.5 0 0 1 6.5 16M18.92 6c-.2-.58-.76-1-1.42-1h-11c-.66 0-1.22.42-1.42 1L3 12v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8z"/></svg>'},{slug:"mdi:car-outline",label:"Car Outline",keywords:["car"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18.9 6c-.2-.6-.8-1-1.4-1h-11c-.7 0-1.2.4-1.4 1L3 12v8c0 .5.5 1 1 1h1c.6 0 1-.5 1-1v-1h12v1c0 .5.5 1 1 1h1c.5 0 1-.5 1-1v-8zM6.8 7h10.3l1.1 3H5.8zM19 17H5v-5h14zM7.5 13c.8 0 1.5.7 1.5 1.5S8.3 16 7.5 16S6 15.3 6 14.5S6.7 13 7.5 13m9 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5"/></svg>'},{slug:"tabler:car",label:"Car",keywords:["car"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"/><path d="M5 17H3v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0H9m-6-6h15m-6 0V6"/></g></svg>'},{slug:"mdi:tank",label:"Tank",keywords:["tank"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20 12H4v-1h2l1-5h5l1 5h7zm-6.78-5l.4 2H22V7zM22 16a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3M6 16a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1m7 0a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1m7 0a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1"/></svg>'},{slug:"tabler:tank",label:"Tank",keywords:["tank"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 15a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3m4-3l1-5h5l3 5m6-3h-7.8"/></svg>'},{slug:"mingcute:tank-fill",label:"Tank Fill",keywords:["tank"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M7 7a3 3 0 0 1 3-3h1.53a5 5 0 0 1 4.584 3H20a1 1 0 1 1 0 2h-3.418l.285 2h.633a4.5 4.5 0 1 1 0 9h-11a4.5 4.5 0 1 1 0-9H7z"/></g></svg>'},{slug:"mdi:truck",label:"Truck",keywords:["truck"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18 18.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m1.5-9l1.96 2.5H17V9.5m-11 9A1.5 1.5 0 0 1 4.5 17A1.5 1.5 0 0 1 6 15.5A1.5 1.5 0 0 1 7.5 17A1.5 1.5 0 0 1 6 18.5M20 8h-3V4H3c-1.11 0-2 .89-2 2v11h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-5z"/></svg>'},{slug:"mdi:truck-outline",label:"Truck Outline",keywords:["truck"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5m1.5-9H17V12h4.46zM6 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M20 8l3 4v5h-2c0 1.66-1.34 3-3 3s-3-1.34-3-3H9c0 1.66-1.34 3-3 3s-3-1.34-3-3H1V6c0-1.11.89-2 2-2h14v4zM3 6v9h.76c.55-.61 1.35-1 2.24-1s1.69.39 2.24 1H15V6z"/></svg>'},{slug:"tabler:truck",label:"Truck",keywords:["truck"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"/><path d="M5 17H3V6a1 1 0 0 1 1-1h9v12m-4 0h6m4 0h2v-6h-8m0-5h5l3 5"/></g></svg>'},{slug:"material-symbols:rocket",label:"Rocket",keywords:["rocket"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 22v-5.925q0-.5.238-.95T4.9 14.4l1.1-.725q.175 2.1.55 3.575t1.175 3.275zm5.225-2q-.875-1.65-1.3-3.5T7.5 12.675q0-3.125 1.238-5.887T12 2.6q2.025 1.425 3.263 4.188t1.237 5.887q0 1.95-.425 3.788T14.775 20zm4.188-7.587Q14 11.825 14 11t-.587-1.412T12 9t-1.412.588T10 11t.588 1.413T12 13t1.413-.587M20 22l-3.725-1.475q.8-1.8 1.175-3.275t.55-3.575l1.1.725q.425.275.663.725t.237.95z"/></svg>'},{slug:"material-symbols:rocket-outline",label:"Rocket Outline",keywords:["rocket"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m6 19.05l1.975-.8q-.25-.725-.462-1.475t-.338-1.5l-1.175.8zM10 18h4q.45-1 .725-2.437T15 12.625q0-2.475-.825-4.687T12 4.525q-1.35 1.2-2.175 3.413T9 12.625q0 1.5.275 2.938T10 18m.588-5.587Q10 11.825 10 11t.588-1.412T12 9t1.413.588T14 11t-.587 1.413T12 13t-1.412-.587M18 19.05v-2.975l-1.175-.8q-.125.75-.337 1.5t-.463 1.475zM12 1.975q2.475 1.8 3.738 4.575T17 13l2.1 1.4q.425.275.663.725t.237.95V22l-4.975-2h-6.05L4 22v-5.925q0-.5.238-.95T4.9 14.4L7 13q0-3.675 1.263-6.45T12 1.975"/></svg>'},{slug:"material-symbols:rocket-outline-rounded",label:"Rocket Outline Rounded",keywords:["rocket"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7.975 18.25q-.25-.725-.462-1.475t-.338-1.5l-1.175.8v2.975zM11.65 4.875q-1.2 1.275-1.925 3.363T9 12.625q0 1.5.275 2.938T10 18h4q.45-1 .725-2.437T15 12.625q0-2.3-.725-4.387T12.35 4.875q-.075-.075-.162-.112T12 4.725t-.187.038t-.163.112M12 13q-.825 0-1.412-.587T10 11t.588-1.412T12 9t1.413.588T14 11t-.587 1.413T12 13m4.025 5.25l1.975.8v-2.975l-1.175-.8q-.125.75-.337 1.5t-.463 1.475M12.775 2.6q2.1 1.8 3.163 4.425T17 13l2.1 1.4q.425.275.663.725t.237.95v4.45q0 .525-.437.825t-.938.1l-3.6-1.45h-6.05l-3.6 1.45q-.5.2-.937-.1T4 20.525v-4.45q0-.5.238-.95T4.9 14.4L7 13q0-3.35 1.063-5.975T11.224 2.6q.175-.125.375-.2t.4-.075t.4.075t.375.2"/></svg>'},{slug:"material-symbols:drone",label:"Drone",keywords:["drone"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q0-1.875 1.025-3.363t2.65-2.162L7.425 12H4V6H1V4h8v2H6v4h1.2L7 8h10l-.2 2H18V6h-3V4h8.025v2h-3v6H16.6l-.25 2.475q1.625.675 2.638 2.163T20 20h-2q0-1.65-1.175-2.825T14 16h-4q-1.65 0-2.825 1.175T6 20z"/></svg>'},{slug:"material-symbols:drone-outline",label:"Drone Outline",keywords:["drone"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q0-1.875 1.025-3.363t2.65-2.162L7.425 12H4V6H1V4h8v2H6v4h1.2L7 8h10l-.2 2H18V6h-3V4h8.025v2h-3v6H16.6l-.25 2.475q1.625.675 2.638 2.163T20 20h-2q0-1.65-1.175-2.825T14 16h-4q-1.65 0-2.825 1.175T6 20zm5.625-6h4.725l.425-4H9.2zm0 0h4.725z"/></svg>'},{slug:"material-symbols:drone-outline-rounded",label:"Drone Outline Rounded",keywords:["drone"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10 16q-1.425 0-2.475.85T6.125 19q-.125.425-.413.713T5 20t-.7-.3t-.2-.7q.275-1.55 1.225-2.75t2.35-1.775L7.425 12H5q-.425 0-.713-.288T4 11V6H2q-.425 0-.712-.288T1 5t.288-.712T2 4h6q.425 0 .713.288T9 5t-.288.713T8 6H6v4h1.2l-.075-.9q-.05-.45.238-.775T8.1 8h7.8q.45 0 .738.325t.237.775l-.075.9H18V6h-2q-.425 0-.712-.288T15 5t.288-.712T16 4h6.025q.425 0 .713.288t.287.712t-.287.713t-.713.287h-2v5q0 .425-.287.713t-.713.287H16.6l-.25 2.475q1.4.575 2.35 1.775T19.925 19q.075.4-.212.7T19 20t-.712-.288t-.413-.712q-.35-1.3-1.412-2.15T14 16zm-.375-2h4.725l.425-4H9.2zm0 0h4.725z"/></svg>'},{slug:"material-symbols:gamepad",label:"Gamepad",keywords:["gamepad"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.5l-3-3V2h6v5.5zm4.5 4.5l-3-3l3-3H22v6zM2 15V9h5.5l3 3l-3 3zm7 7v-5.5l3-3l3 3V22z"/></svg>'},{slug:"material-symbols:gamepad-outline",label:"Gamepad Outline",keywords:["gamepad"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.5l-3-3V2h6v5.5zm4.5 4.5l-3-3l3-3H22v6zM2 15V9h5.5l3 3l-3 3zm7 7v-5.5l3-3l3 3V22zm3-14.35l1-1V4h-2v2.65zM4 13h2.65l1-1l-1-1H4zm7 7h2v-2.65l-1-1l-1 1zm6.35-7H20v-2h-2.65l-1 1z"/></svg>'},{slug:"material-symbols:gamepad-outline-rounded",label:"Gamepad Outline Rounded",keywords:["gamepad"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m11.3 9.8l-2-2q-.15-.15-.225-.337T9 7.075V3q0-.425.288-.712T10 2h4q.425 0 .713.288T15 3v4.075q0 .2-.075.388T14.7 7.8l-2 2q-.15.15-.325.213t-.375.062t-.375-.062T11.3 9.8m2.9 2.9q-.15-.15-.212-.325T13.925 12t.063-.375t.212-.325l2-2q.15-.15.338-.225T16.925 9H21q.425 0 .713.288T22 10v4q0 .425-.288.713T21 15h-4.075q-.2 0-.387-.075T16.2 14.7zM2 14v-4q0-.425.288-.712T3 9h4.075q.2 0 .388.075T7.8 9.3l2 2q.15.15.213.325t.062.375t-.062.375t-.213.325l-2 2q-.15.15-.337.225T7.075 15H3q-.425 0-.712-.288T2 14m7 7v-4.075q0-.2.075-.387T9.3 16.2l2-2q.15-.15.325-.212t.375-.063t.375.063t.325.212l2 2q.15.15.225.338t.075.387V21q0 .425-.288.713T14 22h-4q-.425 0-.712-.288T9 21m3-13.35l1-1V4h-2v2.65zM4 13h2.65l1-1l-1-1H4zm7 7h2v-2.65l-1-1l-1 1zm6.35-7H20v-2h-2.65l-1 1z"/></svg>'},{slug:"material-symbols:joystick",label:"Joystick",keywords:["joystick"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 8.275V7.85q-1.1-.325-1.8-1.237T8.5 4.5q0-1.45 1.025-2.475T12 1t2.475 1.025T15.5 4.5q0 1.2-.7 2.113T13 7.85v.425l7 4.025q.475.275.738.738T21 14.05v1.9q0 .55-.262 1.013T20 17.7l-7 4.025Q12.525 22 12 22t-1-.275L4 17.7q-.475-.275-.737-.737T3 15.95v-1.9q0-.55.263-1.012T4 12.3zM6.8 13l5.2 3l5.2-3l-4.2-2.425V14h-2v-3.425z"/></svg>'},{slug:"material-symbols:joystick-outline",label:"Joystick Outline",keywords:["joystick"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m6.8 13l5.2 3l5.2-3l-4.2-2.425V14h-2v-3.425zM11 8.275V7.85q-1.1-.325-1.8-1.238T8.5 4.5q0-1.45 1.025-2.475T12 1t2.475 1.025T15.5 4.5q0 1.2-.7 2.113T13 7.85v.425l7 4.025q.475.275.738.738T21 14.05v1.9q0 .55-.262 1.013T20 17.7l-7 4.025Q12.525 22 12 22t-1-.275L4 17.7q-.475-.275-.737-.737T3 15.95v-1.9q0-.55.263-1.012T4 12.3zm0 9.45l-6-3.45v1.675L12 20l7-4.05v-1.675l-6 3.45Q12.525 18 12 18t-1-.275m2.063-12.163q.437-.437.437-1.062t-.437-1.062T12 3t-1.062.438T10.5 4.5t.438 1.063T12 6t1.063-.437M12 20"/></svg>'},{slug:"material-symbols:joystick-outline-sharp",label:"Joystick Outline Sharp",keywords:["joystick"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 8.275V7.85q-1.1-.325-1.8-1.237T8.5 4.5q0-1.45 1.025-2.475T12 1t2.475 1.025T15.5 4.5q0 1.2-.7 2.113T13 7.85v.425l8 4.6v4.25l-8 4.6Q12.525 22 12 22t-1-.275l-8-4.6v-4.25zm-6 6v1.675L12 20l7-4.05v-1.675L12 18.3zm8.063-8.712q.437-.438.437-1.063t-.437-1.062T12 3t-1.062.438T10.5 4.5t.438 1.063T12 6t1.063-.437M6.8 13l5.2 3l5.2-3l-4.2-2.425V14h-2v-3.425z"/></svg>'},{slug:"mdi:battery",label:"Battery",keywords:["battery"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16.67 4H15V2H9v2H7.33A1.33 1.33 0 0 0 6 5.33v15.34C6 21.4 6.6 22 7.33 22h9.34A1.33 1.33 0 0 0 18 20.67V5.33C18 4.6 17.4 4 16.67 4"/></svg>'},{slug:"mdi:battery-outline",label:"Battery Outline",keywords:["battery"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M16 20H8V6h8m.67-2H15V2H9v2H7.33A1.33 1.33 0 0 0 6 5.33v15.34C6 21.4 6.6 22 7.33 22h9.34A1.33 1.33 0 0 0 18 20.67V5.33C18 4.6 17.4 4 16.67 4"/></svg>'},{slug:"tabler:battery",label:"Battery",keywords:["battery"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 7h11a2 2 0 0 1 2 2v.5a.5.5 0 0 0 .5.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5a.5.5 0 0 0-.5.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2"/></svg>'},{slug:"material-symbols:bolt",label:"Bolt",keywords:["bolt"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m8 22l1-7H4l9-13h2l-1 8h6L10 22z"/></svg>'},{slug:"material-symbols:bolt-outline",label:"Bolt Outline",keywords:["bolt"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m10.55 18.2l5.175-6.2h-4l.725-5.675L7.825 13H11.3zM8 22l1-7H4l9-13h2l-1 8h6L10 22zm3.775-9.75"/></svg>'},{slug:"material-symbols:bolt-outline-rounded",label:"Bolt Outline Rounded",keywords:["bolt"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m10.55 18.2l5.175-6.2h-4l.725-5.675L7.825 13H11.3zM9 15H5.9q-.6 0-.888-.537t.063-1.038l7.475-10.75q.25-.35.65-.487t.825.012t.625.525t.15.8L14 10h3.875q.65 0 .913.575t-.163 1.075L10.4 21.5q-.275.325-.675.425t-.775-.075t-.587-.537t-.163-.788zm2.775-2.75"/></svg>'},{slug:"material-symbols:bluetooth",label:"Bluetooth",keywords:["bluetooth"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 22v-7.6L6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5L11 9.6V2h1l5.7 5.7l-4.3 4.3l4.3 4.3L12 22zm2-12.4l1.9-1.9L13 5.85zm0 8.55l1.9-1.85l-1.9-1.9z"/></svg>'},{slug:"material-symbols:bluetooth-rounded",label:"Bluetooth Rounded",keywords:["bluetooth"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 20.575V14.4l-3.9 3.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275L11 9.6V3.425q0-.45.3-.737T12 2.4q.2 0 .375.075t.325.225L17 7q.15.15.213.325t.062.375t-.062.375T17 8.4L13.4 12l3.6 3.6q.15.15.213.325t.062.375t-.062.375T17 17l-4.3 4.3q-.15.15-.325.225T12 21.6q-.4 0-.7-.288t-.3-.737M13 9.6l1.9-1.9L13 5.85zm0 8.55l1.9-1.85l-1.9-1.9z"/></svg>'},{slug:"mdi:bluetooth",label:"Bluetooth",keywords:["bluetooth"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14.88 16.29L13 18.17v-3.76m0-8.58l1.88 1.88L13 9.58m4.71-1.87L12 2h-1v7.58L6.41 5L5 6.41L10.59 12L5 17.58L6.41 19L11 14.41V22h1l5.71-5.71l-4.3-4.29z"/></svg>'},{slug:"material-symbols:wifi",label:"Wifi",keywords:["wifi"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.225 20.275Q9.5 19.55 9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21t-1.775-.725M6.35 15.35l-2.1-2.15q1.475-1.475 3.463-2.337T12 10t4.288.875t3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725T12 13t-3.1.625t-2.55 1.725M2.1 11.1L0 9q2.3-2.35 5.375-3.675T12 4t6.625 1.325T24 9l-2.1 2.1q-1.925-1.925-4.462-3.012T12 7T6.563 8.088T2.1 11.1"/></svg>'},{slug:"material-symbols:wifi-rounded",label:"Wifi Rounded",keywords:["wifi"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.225 20.275Q9.5 19.55 9.5 18.5t.725-1.775T12 16t1.775.725t.725 1.775t-.725 1.775T12 21t-1.775-.725m5.338-9.675q1.687.6 3.062 1.65q.5.375.513.988T18.7 14.3q-.425.425-1.05.438t-1.125-.338q-.95-.65-2.1-1.025T12 13t-2.425.375t-2.1 1.025q-.5.35-1.125.325t-1.05-.45q-.425-.45-.425-1.062t.5-.988q1.375-1.05 3.063-1.638T12 10t3.563.6m2.324-5.575q2.763 1.025 4.963 2.9q.5.425.525 1.05t-.425 1.075q-.425.425-1.05.438t-1.125-.388q-1.8-1.475-4.037-2.287T12 7t-4.737.813T3.225 10.1q-.5.4-1.125.388t-1.05-.438Q.6 9.6.625 8.975t.525-1.05q2.2-1.875 4.963-2.9T12 4t5.888 1.025"/></svg>'},{slug:"material-symbols:wifi-sharp",label:"Wifi Sharp",keywords:["wifi"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m6.35 15.35l-2.1-2.15q1.55-1.55 3.55-2.375T12 10t4.213.838t3.537 2.412l-2.1 2.1q-1.125-1.125-2.588-1.737T12 13t-3.062.613T6.35 15.35M2.1 11.1L0 9q2.375-2.425 5.488-3.713T12 4t6.513 1.288T24 9l-2.1 2.1q-1.975-1.975-4.538-3.037T12 7T6.637 8.063T2.1 11.1M12 21l-3.525-3.55q.7-.7 1.613-1.075T12 16t1.913.375t1.612 1.075z"/></svg>'},{slug:"mdi:antenna",label:"Antenna",keywords:["antenna"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 7.5c.69 0 1.27.23 1.76.7s.74 1.07.74 1.8q0 1.575-1.5 2.28V21h-2v-8.72Q9.5 11.575 9.5 10c0-.73.26-1.33.74-1.8s1.07-.7 1.76-.7m4.69-2.2c1.25 1.25 1.92 2.81 2.01 4.7c0 1.8-.67 3.38-2.01 4.72L15.5 13.5c1-.91 1.5-2.08 1.5-3.5c0-1.33-.5-2.5-1.5-3.5zM6.09 4.08C4.5 5.67 3.7 7.64 3.7 10s.8 4.3 2.39 5.89l-1.17 1.22C3 15.08 2 12.7 2 10s1-5.06 2.92-7.09zm12.99-1.17C21 4.94 22 7.3 22 10c0 2.8-1 5.17-2.92 7.11l-1.17-1.22C19.5 14.3 20.3 12.33 20.3 10s-.8-4.33-2.39-5.92zM7.31 5.3L8.5 6.5C7.5 7.42 7 8.58 7 10c0 1.33.5 2.5 1.5 3.5l-1.19 1.22C5.97 13.38 5.3 11.8 5.3 10s.67-3.36 2.01-4.7"/></svg>'},{slug:"tabler:antenna",label:"Antenna",keywords:["antenna"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 4v8m-4-7.5v7M12 5v16M8 5.5v5M4 6v4m16-2H4"/></svg>'},{slug:"lucide:antenna",label:"Antenna",keywords:["antenna"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12L7 2m0 10l5-10m0 10l5-10m0 10l5-10M4.5 7h15M12 16v6"/></svg>'},{slug:"mdi:led-outline",label:"Led Outline",keywords:["led"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4m0 2a2 2 0 0 1 2 2v5h-4v-5a2 2 0 0 1 2-2"/></svg>'},{slug:"mdi:led-on",label:"Led On",keywords:["led"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11 0v4h2V0zm7.3 2.29l-3.06 3l1.4 1.42l3.06-3zm-12.59 0L4.29 3.71l3 3l1.42-1.42zM12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4M2 9v2h4V9zm16 0v2h4V9z"/></svg>'},{slug:"mdi:led-off",label:"Led Off",keywords:["led"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6a4 4 0 0 0-4 4v6H6v2h3v5h2v-5h2v5h2v-5h3v-2h-2v-6a4 4 0 0 0-4-4"/></svg>'},{slug:"tabler:bulb",label:"Bulb",keywords:["bulb"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h1m8-9v1m8 8h1M5.6 5.6l.7.7m12.1-.7l-.7.7M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0-1 3a2 2 0 0 1-4 0a3.5 3.5 0 0 0-1-3m.7 1h4.6"/></svg>'},{slug:"tabler:bulb-filled",label:"Bulb Filled",keywords:["bulb"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 11a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm8-9a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1m9 9a1 1 0 0 1 .117 1.993L21 13h-1a1 1 0 0 1-.117-1.993L20 11zM4.893 4.893a1 1 0 0 1 1.32-.083l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7a1 1 0 0 1 0-1.414m12.8 0a1 1 0 0 1 1.497 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094zM14 18a1 1 0 0 1 1 1a3 3 0 0 1-6 0a1 1 0 0 1 .883-.993L10 18zM12 6a6 6 0 0 1 3.6 10.8a1 1 0 0 1-.471.192L15 17H9a1 1 0 0 1-.6-.2A6 6 0 0 1 12 6"/></svg>'},{slug:"mingcute:bulb-fill",label:"Bulb Fill",keywords:["bulb"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M13 20a1 1 0 0 1 .117 1.993L13 22h-2a1 1 0 0 1-.117-1.993L11 20zM12 2c4.41 0 8 3.543 8 7.933c0 3.006-1.522 5.196-2.78 6.494l-.284.283l-.27.252l-.252.22l-.33.27l-.328.244c-.241.17-.403.419-.55.678l-.205.364c-.238.41-.517.762-1.108.762h-3.786c-.59 0-.87-.351-1.108-.762l-.118-.208c-.172-.312-.348-.63-.637-.834l-.232-.171l-.199-.155l-.227-.188l-.252-.22l-.27-.252l-.285-.283C5.522 15.129 4 12.939 4 9.933C4 5.543 7.59 2 12 2m1.707 4.293a1 1 0 0 0-1.32-.083l-.094.083L10.3 8.286a1.01 1.01 0 0 0-.084 1.333l.084.095L11.586 11l-1.293 1.293a1 1 0 0 0 1.32 1.497l.094-.083l1.993-1.993a1.01 1.01 0 0 0 .084-1.333l-.084-.095L12.414 9l1.293-1.293a1 1 0 0 0 0-1.414"/></g></svg>'},{slug:"ph:x-light",label:"X Light",keywords:["light"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M204.24 195.76a6 6 0 1 1-8.48 8.48L128 136.49l-67.76 67.75a6 6 0 0 1-8.48-8.48L119.51 128L51.76 60.24a6 6 0 0 1 8.48-8.48L128 119.51l67.76-67.75a6 6 0 0 1 8.48 8.48L136.49 128Z"/></svg>'},{slug:"ph:at-light",label:"At Light",keywords:["light"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M128 26a102 102 0 0 0 0 204c21.13 0 43.31-6.35 59.32-17a6 6 0 0 0-6.65-10c-13.9 9.25-34.09 15-52.67 15a90 90 0 1 1 90-90c0 29.58-13.78 34-22 34s-22-4.42-22-34V88a6 6 0 0 0-12 0v9a46 46 0 1 0 4.34 56.32C171.76 166.6 182 174 196 174c21.29 0 34-17.2 34-46A102.12 102.12 0 0 0 128 26m0 136a34 34 0 1 1 34-34a34 34 0 0 1-34 34"/></svg>'},{slug:"ph:pi-light",label:"Pi Light",keywords:["light"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M230 172a34 34 0 0 1-68 0V70H94v130a6 6 0 0 1-12 0V70H72a42 42 0 0 0-42 42a6 6 0 0 1-12 0a54.06 54.06 0 0 1 54-54h152a6 6 0 0 1 0 12h-50v102a22 22 0 0 0 44 0a6 6 0 0 1 12 0"/></svg>'},{slug:"mdi:lamp",label:"Lamp",keywords:["lamp"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8 2h8l4 12H4zm3 13h2v5h5v2H6v-2h5z"/></svg>'},{slug:"mdi:lamp-outline",label:"Lamp Outline",keywords:["lamp"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m14.56 4l2.67 8H6.78l2.66-8zM16 2H8L4 14h16zm-5 13h2v5h5v2H6v-2h5z"/></svg>'},{slug:"solar:lamp-bold",label:"Lamp Bold",keywords:["lamp"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M6.667 3.151c-.786.775-1.09 1.948-1.699 4.294l-.084.324c-.828 3.189-1.242 4.783-.49 5.903q.112.168.247.319C5.536 15 7.183 15 10.477 15h.779v6.25h-2.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25V15h.78c1.32 0 2.374 0 3.223-.065l-.003.065v2a.75.75 0 1 0 1.5 0v-2.318c.468-.15.83-.369 1.116-.691q.135-.15.247-.32c.752-1.12.338-2.713-.49-5.902l-.084-.324c-.609-2.346-.913-3.519-1.7-4.294a4 4 0 0 0-.756-.585C15.64 2 14.429 2 12.007 2c-2.424 0-3.635 0-4.583.566a4 4 0 0 0-.757.585"/></svg>'},{slug:"mdi:flash",label:"Flash",keywords:["flash"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>'},{slug:"mdi:flash-outline",label:"Flash Outline",keywords:["flash"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 2h10l-3.5 7H17l-7 13v-8H7zm2 2v8h3v2.66L14 11h-3.76l3.52-7z"/></svg>'},{slug:"mingcute:flash-fill",label:"Flash Fill",keywords:["flash"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M13.232 1.36c.632-.758 1.863-.24 1.763.742L14.289 9H20a1 1 0 0 1 .768 1.64l-10 12c-.632.758-1.863.24-1.763-.742L9.711 15H4a1 1 0 0 1-.768-1.64z"/></g></svg>'},{slug:"mdi:temperature",label:"Temperature",keywords:["temperature"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15 13V5a3 3 0 0 0-6 0v8a5 5 0 1 0 6 0m-3-9a1 1 0 0 1 1 1v3h-2V5a1 1 0 0 1 1-1"/></svg>'},{slug:"solar:temperature-bold",label:"Temperature Bold",keywords:["temperature"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M17.5 16.5a5.5 5.5 0 1 1-8.939-4.293c.264-.211.439-.521.439-.86V5a3 3 0 1 1 6 0v6.348c0 .338.175.648.439.86A5.49 5.49 0 0 1 17.5 16.5M12 4.25a.75.75 0 0 1 .75.75v8.38c0 .437.297.808.658 1.054a2.5 2.5 0 1 1-2.816 0c.36-.246.658-.617.658-1.054V5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/></svg>'},{slug:"solar:temperature-bold-duotone",label:"Temperature Bold Duotone",keywords:["temperature"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 16.5a5.5 5.5 0 1 1-8.939-4.293c.264-.211.439-.521.439-.86V5a3 3 0 1 1 6 0v6.348c0 .338.175.648.439.86A5.49 5.49 0 0 1 17.5 16.5" opacity=".5"/><path fill="currentColor" d="M12.75 5a.75.75 0 0 0-1.5 0v8.38c0 .437-.297.808-.658 1.054a2.5 2.5 0 1 0 2.816 0c-.36-.246-.658-.617-.658-1.054z"/></svg>'},{slug:"material-symbols:thermometer",label:"Thermometer",keywords:["thermometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-2.075 0-3.537-1.463T7 16q0-1.2.525-2.238T9 12V6q0-1.25.875-2.125T12 3t2.125.875T15 6v6q.95.725 1.475 1.763T17 16q0 2.075-1.463 3.538T12 21m-1-11h2V6q0-.425-.288-.712T12 5t-.712.288T11 6z"/></svg>'},{slug:"material-symbols:thermometer-outline",label:"Thermometer Outline",keywords:["thermometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-2.075 0-3.537-1.463T7 16q0-1.2.525-2.238T9 12V6q0-1.25.875-2.125T12 3t2.125.875T15 6v6q.95.725 1.475 1.763T17 16q0 2.075-1.463 3.538T12 21m0-2q1.25 0 2.125-.875T15 16q0-.725-.312-1.35T13.8 13.6L13 13V6q0-.425-.288-.712T12 5t-.712.288T11 6v7l-.8.6q-.575.425-.888 1.05T9 16q0 1.25.875 2.125T12 19m0-3"/></svg>'},{slug:"mdi:thermometer",label:"Thermometer",keywords:["thermometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15 13V5a3 3 0 0 0-6 0v8a5 5 0 1 0 6 0m-3-9a1 1 0 0 1 1 1v3h-2V5a1 1 0 0 1 1-1"/></svg>'},{slug:"mdi:gauge",label:"Gauge",keywords:["gauge"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8c0 2.4-1 4.5-2.7 6c-1.4-1.3-3.3-2-5.3-2s-3.8.7-5.3 2C5 16.5 4 14.4 4 12a8 8 0 0 1 8-8m2 1.89c-.38.01-.74.26-.9.65l-1.29 3.23l-.1.23c-.71.13-1.3.6-1.57 1.26c-.41 1.03.09 2.19 1.12 2.6s2.19-.09 2.6-1.12c.26-.66.14-1.42-.29-1.98l.1-.26l1.29-3.21l.01-.03c.2-.51-.05-1.09-.56-1.3c-.13-.05-.26-.07-.41-.07M10 6a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M7 9a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m10 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"/></svg>'},{slug:"tabler:gauge",label:"Gauge",keywords:["gauge"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"/><path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m2.41-1.41L16 8m-9 4a5 5 0 0 1 5-5"/></g></svg>'},{slug:"tabler:gauge-filled",label:"Gauge Filled",keywords:["gauge"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34m-.293 3.953a1 1 0 0 0-1.414 0l-2.59 2.59l-.083.094l-.068.1a2 2 0 0 0-2.547 1.774L10 12l.005.15a2 2 0 1 0 3.917-.701a1 1 0 0 0 .195-.152l2.59-2.59l.083-.094a1 1 0 0 0-.083-1.32M12 6a6 6 0 0 0-6 6a1 1 0 0 0 2 0a4 4 0 0 1 4-4a1 1 0 0 0 0-2"/></svg>'},{slug:"mdi:speedometer",label:"Speedometer",keywords:["speedometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16a3 3 0 0 1-3-3c0-1.12.61-2.1 1.5-2.61l9.71-5.62l-5.53 9.58c-.5.98-1.51 1.65-2.68 1.65m0-13c1.81 0 3.5.5 4.97 1.32l-2.1 1.21C14 5.19 13 5 12 5a8 8 0 0 0-8 8c0 2.21.89 4.21 2.34 5.65h.01c.39.39.39 1.02 0 1.41s-1.03.39-1.42.01A9.97 9.97 0 0 1 2 13A10 10 0 0 1 12 3m10 10c0 2.76-1.12 5.26-2.93 7.07c-.39.38-1.02.38-1.41-.01a.996.996 0 0 1 0-1.41A7.95 7.95 0 0 0 20 13c0-1-.19-2-.54-2.9L20.67 8C21.5 9.5 22 11.18 22 13"/></svg>'},{slug:"ph:speedometer",label:"Speedometer",keywords:["speedometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="m114.34 154.34l96-96a8 8 0 0 1 11.32 11.32l-96 96a8 8 0 0 1-11.32-11.32M128 88a63.9 63.9 0 0 1 20.44 3.33a8 8 0 1 0 5.11-15.16a80 80 0 0 0-105.06 84.71a8 8 0 0 0 7.94 7.12c.29 0 .59 0 .89-.05a8 8 0 0 0 7.07-8.83A65 65 0 0 1 64 152a64.07 64.07 0 0 1 64-64m99.74 13a8 8 0 0 0-14.24 7.3a96.27 96.27 0 0 1 5 75.71l-181.1-.07A96.24 96.24 0 0 1 128 56h.88a95 95 0 0 1 42.82 10.5a8 8 0 1 0 7.3-14.23a112 112 0 0 0-156.66 137A16.07 16.07 0 0 0 37.46 200h181.07a16 16 0 0 0 15.11-10.71a112.35 112.35 0 0 0-5.9-88.3Z"/></svg>'},{slug:"ph:speedometer-bold",label:"Speedometer Bold",keywords:["speedometer"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="m119.51 143.51l88-88a12 12 0 1 1 17 17l-88 88a12 12 0 1 1-17-17m14.23-43.2a12 12 0 1 0 2.62-23.85A75 75 0 0 0 128 76a76.08 76.08 0 0 0-76 76a12 12 0 0 0 24 0a52.06 52.06 0 0 1 52-52a55 55 0 0 1 5.74.31m101.54 7.5a12 12 0 0 0-22.19 9.19a92.47 92.47 0 0 1 2.58 63H40.34A92.23 92.23 0 0 1 128 60h.84a91.4 91.4 0 0 1 34.2 6.91a12 12 0 0 0 9.14-22.19A116.07 116.07 0 0 0 18.57 190.58A20.09 20.09 0 0 0 37.46 204h181.07a20.06 20.06 0 0 0 18.88-13.38a116.4 116.4 0 0 0-2.13-82.81"/></svg>'},{slug:"material-symbols:radar",label:"Radar",keywords:["radar"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8.1 21.213q-1.825-.788-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22t-3.9-.788M12 20q1.4 0 2.638-.437t2.262-1.238L15.475 16.9q-.725.525-1.612.813T12 18q-2.5 0-4.25-1.75T6 12t1.75-4.25T12 6t4.25 1.75T18 12q0 .975-.3 1.875t-.825 1.625l1.425 1.425q.8-1.025 1.25-2.275T20 12q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-4q.55 0 1.063-.137t.962-.413L12.5 13.925q-.125.05-.25.063T12 14q-.825 0-1.412-.587T10 12t.588-1.412T12 10t1.413.588T14 12q0 .15-.012.288t-.063.262l1.5 1.5q.275-.45.425-.962T16 12q0-1.65-1.175-2.825T12 8T9.175 9.175T8 12t1.175 2.825T12 16"/></svg>'},{slug:"mdi:radar",label:"Radar",keywords:["radar"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m19.07 4.93l-1.41 1.41A8 8 0 0 1 20 12a8 8 0 0 1-8 8a8 8 0 0 1-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12a6 6 0 0 0 6 6a6 6 0 0 0 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12a4 4 0 0 1-4 4a4 4 0 0 1-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.74-.4-1.38-1-1.72V2h-1A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-2.76-1.12-5.26-2.93-7.07"/></svg>'},{slug:"solar:radar-bold",label:"Radar Bold",keywords:["radar"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-8.642-5.07a5.2 5.2 0 0 0-2.232-.107a.75.75 0 0 1-.252-1.478a6.749 6.749 0 1 1-4.519 2.953c.453-.69 1.358-.733 1.92-.279l4.197 3.398a.75.75 0 1 1-.944 1.166L7.49 9.313a5.249 5.249 0 1 0 5.87-2.384" clip-rule="evenodd"/></svg>'},{slug:"mdi:compass",label:"Compass",keywords:["compass"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14.19 14.19L6 18l3.81-8.19L18 6m-6-4A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 8.9a1.1 1.1 0 0 0-1.1 1.1a1.1 1.1 0 0 0 1.1 1.1a1.1 1.1 0 0 0 1.1-1.1a1.1 1.1 0 0 0-1.1-1.1"/></svg>'},{slug:"mdi:compass-outline",label:"Compass Outline",keywords:["compass"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m7 17l3.2-6.8L17 7l-3.2 6.8zm5-5.9a.9.9 0 0 0-.9.9a.9.9 0 0 0 .9.9a.9.9 0 0 0 .9-.9a.9.9 0 0 0-.9-.9M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"/></svg>'},{slug:"solar:compass-bold",label:"Compass Bold",keywords:["compass"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1.956-7.905c-.193.17-.44.268-.932.465c-2.31.924-3.465 1.386-4.124.938a1.5 1.5 0 0 1-.398-.398c-.448-.66.014-1.814.938-4.124c.197-.493.295-.74.465-.933q.065-.073.139-.138c.193-.17.44-.268.932-.465c2.31-.924 3.464-1.386 4.124-.938a1.5 1.5 0 0 1 .398.398c.448.66-.014 1.814-.938 4.124c-.197.493-.295.739-.465.932q-.065.075-.139.139" clip-rule="evenodd"/></svg>'},{slug:"tabler:map-pin",label:"Map Pin",keywords:["map-pin"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0"/><path d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0"/></g></svg>'},{slug:"tabler:map-pin-filled",label:"Map Pin Filled",keywords:["map-pin"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21l-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135l-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6"/></svg>'},{slug:"mingcute:map-pin-fill",label:"Map Pin Fill",keywords:["map-pin"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M7 7a5 5 0 1 1 6 4.9V17a1 1 0 1 1-2 0v-5.1A5 5 0 0 1 7 7m2.489 9.1a1 1 0 0 1-.838 1.14c-1.278.195-2.293.489-2.96.815c-.335.164-.534.313-.637.422l-.021.023c.033.039.09.096.19.169c.28.207.749.435 1.418.644C7.968 19.728 9.863 20 12 20s4.032-.272 5.359-.687c.67-.209 1.138-.437 1.418-.644c.1-.073.157-.13.19-.169l-.021-.023c-.103-.109-.302-.258-.637-.422c-.667-.326-1.682-.62-2.96-.815a1 1 0 1 1 .301-1.977c1.388.21 2.622.547 3.539.996c.457.224.884.5 1.208.842c.33.347.603.82.603 1.399c0 .811-.524 1.4-1.034 1.777c-.53.392-1.233.702-2.01.945c-1.57.49-3.674.778-5.956.778s-4.387-.288-5.955-.778c-.778-.243-1.48-.553-2.01-.945C3.524 19.9 3 19.311 3 18.5c0-.58.273-1.052.603-1.4c.325-.342.751-.617 1.208-.84c.917-.45 2.152-.786 3.538-.997a1 1 0 0 1 1.14.838Z"/></g></svg>'},{slug:"mdi:ruler",label:"Ruler",keywords:["ruler"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m1.39 18.36l1.77-1.76L4.58 18l1.06-1.05l-1.42-1.41l1.42-1.42l2.47 2.48l1.06-1.06l-2.47-2.48l1.41-1.41l1.42 1.41L10.59 12l-1.42-1.41l1.42-1.42l2.47 2.48l1.06-1.06l-2.47-2.48l1.41-1.41l1.41 1.41l1.07-1.06l-1.42-1.41l1.42-1.42L18 6.7l1.07-1.06l-2.47-2.48l1.76-1.77l4.25 4.25L5.64 22.61z"/></svg>'},{slug:"solar:ruler-bold",label:"Ruler Bold",keywords:["ruler"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 15.616c0 .847.682 1.529 2.045 2.892l1.447 1.447C6.855 21.318 7.537 22 8.384 22s1.53-.682 2.893-2.045l8.678-8.678C21.318 9.913 22 9.23 22 8.384s-.682-1.529-2.045-2.892l-1.447-1.447C17.145 2.682 16.463 2 15.616 2c-.754 0-1.376.54-2.464 1.618q.045.033.085.073l1.415 1.415a.75.75 0 1 1-1.061 1.06l-1.414-1.414a1 1 0 0 1-.074-.086L11.03 5.739q.045.033.086.074l2.121 2.121a.75.75 0 1 1-1.06 1.06l-2.122-2.12a1 1 0 0 1-.074-.087L8.91 7.86q.044.033.086.074l1.414 1.414a.75.75 0 0 1-1.06 1.06L7.933 8.996a1 1 0 0 1-.074-.086L6.787 9.98q.046.033.086.074l2.122 2.122a.75.75 0 0 1-1.061 1.06l-2.121-2.121a1 1 0 0 1-.074-.086l-1.073 1.073q.045.032.086.074l1.414 1.414a.75.75 0 0 1-1.06 1.06L3.69 13.238a1 1 0 0 1-.073-.085C2.539 14.24 2 14.862 2 15.616"/></svg>'},{slug:"solar:ruler-bold-duotone",label:"Ruler Bold Duotone",keywords:["ruler"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 15.616c0 .847.682 1.529 2.045 2.892l1.447 1.447C6.855 21.318 7.537 22 8.384 22s1.53-.682 2.893-2.045l8.678-8.678C21.318 9.913 22 9.23 22 8.384s-.682-1.529-2.045-2.892l-1.447-1.447C17.145 2.682 16.463 2 15.616 2c-.754 0-1.376.54-2.464 1.618l-1.05 1.048l-1.072 1.073l-1.05 1.048L8.91 7.86L7.86 8.909L6.788 9.98L5.74 11.03l-1.073 1.073l-1.048 1.049C2.539 14.24 2 14.862 2 15.616" opacity=".5"/><path fill="currentColor" d="M13.238 3.691a1 1 0 0 0-.086-.073l-1.049 1.048q.033.045.074.086l1.414 1.414a.75.75 0 0 0 1.06-1.06zm-2.122 2.122a1 1 0 0 0-.086-.074L9.982 6.787q.033.045.074.086l2.121 2.122a.75.75 0 0 0 1.06-1.061zM8.995 7.934a1 1 0 0 0-.086-.074L7.86 8.908q.033.046.074.087l1.415 1.414a.75.75 0 1 0 1.06-1.06zm-2.121 2.121a1 1 0 0 0-.086-.074L5.739 11.03q.033.045.074.086l2.121 2.121a.75.75 0 1 0 1.061-1.06zm-2.122 2.122a1 1 0 0 0-.086-.075l-1.048 1.05q.033.045.074.085l1.414 1.414a.75.75 0 1 0 1.06-1.06z"/></svg>'},{slug:"material-symbols:settings",label:"Settings",keywords:["settings"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5"/></svg>'},{slug:"material-symbols:settings-outline",label:"Settings Outline",keywords:["settings"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zM11 20h1.975l.35-2.65q.775-.2 1.438-.587t1.212-.938l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.737T17.5 12t-.05-.787t-.175-.738l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.962t-1.438-.588L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.963t1.437.587zm1.05-4.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5M12 12"/></svg>'},{slug:"material-symbols:settings-outline-rounded",label:"Settings Outline Rounded",keywords:["settings"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.825 22q-.675 0-1.162-.45t-.588-1.1L8.85 18.8q-.325-.125-.612-.3t-.563-.375l-1.55.65q-.625.275-1.25.05t-.975-.8l-1.175-2.05q-.35-.575-.2-1.225t.675-1.075l1.325-1Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337l-1.325-1Q2.675 9.9 2.525 9.25t.2-1.225L3.9 5.975q.35-.575.975-.8t1.25.05l1.55.65q.275-.2.575-.375t.6-.3l.225-1.65q.1-.65.588-1.1T10.825 2h2.35q.675 0 1.163.45t.587 1.1l.225 1.65q.325.125.613.3t.562.375l1.55-.65q.625-.275 1.25-.05t.975.8l1.175 2.05q.35.575.2 1.225t-.675 1.075l-1.325 1q.025.175.025.338v.674q0 .163-.05.338l1.325 1q.525.425.675 1.075t-.2 1.225l-1.2 2.05q-.35.575-.975.8t-1.25-.05l-1.5-.65q-.275.2-.575.375t-.6.3l-.225 1.65q-.1.65-.587 1.1t-1.163.45zM11 20h1.975l.35-2.65q.775-.2 1.438-.587t1.212-.938l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.737T17.5 12t-.05-.787t-.175-.738l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.962t-1.438-.588L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.963t1.437.587zm1.05-4.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.487 1.025T8.55 12t1.013 2.475T12.05 15.5M12 12"/></svg>'},{slug:"tabler:tool",label:"Tool",keywords:["tool"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10h3V7L6.5 3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1-3 3l-6-6a6 6 0 0 1-8-8z"/></svg>'},{slug:"mingcute:tool-fill",label:"Tool Fill",keywords:["tool"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M7.527 2.657a7.001 7.001 0 0 1 8.26 9.347l4.599 3.893a3.3 3.3 0 1 1-4.651 4.65l-3.891-4.597a7.001 7.001 0 0 1-9.35-8.26a1.01 1.01 0 0 1 1.72-.432l3.045 3.307l2.297-.845l.847-2.3l-3.309-3.04a1.01 1.01 0 0 1 .433-1.723"/></g></svg>'},{slug:"mingcute:tool-line",label:"Tool Line",keywords:["tool"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M6.798 2.884a7.002 7.002 0 0 1 9.294 8.565l4.394 3.718a3.76 3.76 0 1 1-5.3 5.3l-3.717-4.394a7.002 7.002 0 0 1-8.565-9.295c.358-.894 1.48-1.007 2.063-.373L8.17 9.883l1.446-.288l.29-1.449l-3.48-3.198c-.634-.583-.522-1.706.373-2.064ZM8.805 4.42l2.763 2.54c.322.296.466.738.38 1.165l-.47 2.354a1.25 1.25 0 0 1-.982.981l-2.35.467a1.25 1.25 0 0 1-1.164-.38L4.438 8.785a5.002 5.002 0 0 0 6.804 5.25a1.26 1.26 0 0 1 1.422.355l4.05 4.786a1.76 1.76 0 1 0 2.48-2.48l-4.785-4.05a1.26 1.26 0 0 1-.355-1.422a5 5 0 0 0-5.25-6.804Z"/></g></svg>'},{slug:"mdi:wrench",label:"Wrench",keywords:["wrench"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9c-2-2-5-2.4-7.4-1.3L9 6L6 9L1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4"/></svg>'},{slug:"mdi:wrench-outline",label:"Wrench Outline",keywords:["wrench"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m22.61 19l-9.08-9.09c.93-2.34.47-5.1-1.44-7C9.79.61 6.21.4 3.66 2.26L7.5 6.11L6.08 7.5L2.25 3.69C.39 6.23.6 9.82 2.9 12.11c1.86 1.86 4.57 2.35 6.89 1.48l9.11 9.11c.39.39 1.02.39 1.41 0l2.3-2.3c.39-.4.39-1.01 0-1.4m-3 1.59l-9.46-9.46c-.61.45-1.29.72-2 .82c-1.36.2-2.79-.21-3.83-1.25C3.37 9.76 2.93 8.5 3 7.26l3.09 3.09l4.24-4.24L7.24 3c1.26-.05 2.49.39 3.44 1.33a4.47 4.47 0 0 1 1.24 3.96a4.35 4.35 0 0 1-.88 1.96l9.46 9.45z"/></svg>'},{slug:"ri:wrench-fill",label:"Wrench Fill",keywords:["wrench"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19.249 6.872a1 1 0 0 1 1.645.36a7.001 7.001 0 0 1-8.912 9.037l-4.013 4.013a3 3 0 1 1-4.243-4.243l4.013-4.013a7 7 0 0 1 9.025-8.917a1 1 0 0 1 .36 1.645L14.768 7.11a1.5 1.5 0 0 0 2.121 2.122z"/></svg>'},{slug:"mdi:screwdriver",label:"Screwdriver",keywords:["screwdriver"],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M18 1.83c-.5 0-1 .17-1.41.58L8 11l1.5 1.5L6 16H4l-2 4l2 2l4-2v-2l3.5-3.5L13 16l8.59-8.59c.62-.91.78-2.04 0-2.82l-2.18-2.18A1.95 1.95 0 0 0 18 1.83M18 4l2 2l-7 7l-2-2z"/></svg>'}],df="./",fc=Sg.map(i=>({slug:i.slug,label:i.label,keywords:i.keywords,svg:i.svg})),Eg=Object.fromEntries(fc.map(i=>[i.slug,i.svg])),Kl="grommet-icons:raspberry";function js(i){return`data:image/svg+xml,${encodeURIComponent(i)}`}function ff(i){return Eg[i]??null}const Tg=`${df}art/logo.png`,Mg=`${df}art/Teknologiskolen_logo.png`,Ng=`${df}art/logo_teknologiskolen_white.png`,jg={menu:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"}),u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"})]}),user:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),settings:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),info:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),u.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),help:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),u.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),debugger:u.jsx(u.Fragment,{children:u.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})}),edit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),u.jsx("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),picoIde:u.jsxs(u.Fragment,{children:[u.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),u.jsx("path",{d:"M8 9l-3 3 3 3"}),u.jsx("path",{d:"M16 9l3 3-3 3"}),u.jsx("line",{x1:"13",y1:"8",x2:"11",y2:"16"})]}),exit:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),plus:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),delete:u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),u.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),power:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M18.36 6.64a9 9 0 1 1-12.73 0"}),u.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"12"})]}),save:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),u.jsx("polyline",{points:"17 21 17 13 7 13 7 21"}),u.jsx("polyline",{points:"7 3 7 8 15 8"})]}),upload:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),u.jsx("polyline",{points:"17 8 12 3 7 8"}),u.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),refresh:u.jsxs(u.Fragment,{children:[u.jsx("polyline",{points:"23 4 23 10 17 10"}),u.jsx("polyline",{points:"1 20 1 14 7 14"}),u.jsx("path",{d:"M3.5 9a9 9 0 0 1 14.9-3.4L23 10"}),u.jsx("path",{d:"M20.5 15a9 9 0 0 1-14.9 3.4L1 14"})]}),package:u.jsxs(u.Fragment,{children:[u.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),u.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),u.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),back:u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),u.jsx("polyline",{points:"12 19 5 12 12 5"})]}),chevronLeft:u.jsx("polyline",{points:"15 6 9 12 15 18"}),chevronRight:u.jsx("polyline",{points:"9 6 15 12 9 18"})};function Pt({name:i,size:l=24,className:o}){return u.jsx("svg",{width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:o,"aria-hidden":"true",children:jg[i]})}let ue=null,gs=null,Bm=0,il=!1;function Rg(){return new Date().toLocaleTimeString("da-DK",{hour12:!1})}function zm(i){return new Promise(l=>setTimeout(l,i))}function Ud(i,l){const o=l.userID.toLowerCase();return i.map(s=>{if(!s.ownerID)return s;const d=s.ownerID.toLowerCase()===o;return{...s,isOwnedByMe:d,ownerName:d?l.username:s.ownerName}})}function qd(i,l,o=!1){return(l==null?void 0:l.deviceName)||"Pico"}function Ag(i){return Object.fromEntries(i.filter(l=>l.type==="toggle").map(l=>[l.name,!!l.toggleInitial]))}function Um(i,l){const o=Ag(i);for(const s of i)s.type==="toggle"&&l[s.name]!==void 0&&(o[s.name]=l[s.name]);return o}const oe=$2((i,l)=>{function o(m,v){i(b=>({logs:[{level:m,message:v,time:Rg()},...b.logs].slice(0,200)}))}function s(m){gs&&clearTimeout(gs),Bm+=1,i({toast:{message:m,id:Bm}}),gs=setTimeout(()=>i({toast:null}),4500)}function d(m=null){i({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},plotSeries:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:m})}function h(m){return{deviceID:m.deviceID,deviceName:m.deviceName,ownerID:m.ownerID,deviceIcon:m.icon,canOthersConnect:m.canOthersConnect,canOthersEdit:m.canOthersEdit,canOthersEditCode:m.canOthersEditCode,isOwnedByMe:m.isOwnedByMe,ownerName:m.ownerName}}function _(m){const{screen:v,active:b,picoIdeOrigin:k}=l();if(il){il=!1;return}m&&(o("warning",m),s(m)),(v==="control"||v==="connection"||v==="create"||v==="ide"&&k==="control")&&d(b?h(b):null)}return ue=new xg({onProgress:(m,v)=>i({progress:{value:m,label:v}}),onLog:(m,v)=>o(m,v),onRadar:(m,v,b)=>{const k=Date.now(),x={id:`${k}-${Math.random().toString(36).slice(2)}`,angle:v,distance:b,createdAt:k};i(E=>{const D=E.layout.find(H=>H.type==="radar"&&H.name===m),O=(D==null?void 0:D.radarFadeMs)??1200,G=E.radarPings[m]??[];return{radarPings:{...E.radarPings,[m]:[...G.filter(H=>k-H.createdAt<=O),x].slice(-80)}}})},onText:(m,v)=>{i(b=>({textValues:{...b.textValues,[m]:v}}))},onToggleState:(m,v)=>{i(b=>({toggleValues:{...b.toggleValues,[m]:v}}))},onSliderState:(m,v)=>{i(b=>({sliderValues:{...b.sliderValues,[m]:v}}))},onPlot:(m,v,b)=>{const k=Date.now(),x={id:`${k}-${Math.random().toString(36).slice(2)}`,value:v,createdAt:k,label:b};i(E=>{const D=E.plotSeries[m]??[];return{plotSeries:{...E.plotSeries,[m]:[...D,x].slice(-1e3)}}})},onPlotClear:m=>{i(v=>({plotSeries:{...v.plotSeries,[m]:[]}}))},onDisconnect:m=>_(m)}),{screen:"splash",splashTarget:null,user:null,savedDevices:[],connecting:null,progress:{value:0,label:""},toast:null,confirmDialog:null,connectionLost:null,active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},plotSeries:{},logs:[],sideMenuOpen:!1,debuggerOpen:!1,menuPage:null,editMode:!1,dashboardPage:"mine",picoIdeOrigin:"dashboard",init:()=>{const m=X2(),v=m?Ud(gc(),m):gc();m&&da(v),i({user:m,savedDevices:v,splashTarget:m?"dashboard":"intro"})},finishSplash:()=>{const m=l().splashTarget;i({screen:m??"intro"})},createUser:m=>{const v=m.trim();if(!v)return;const b={username:v,userID:Y2()};Cd(b),i({user:b,screen:"dashboard"})},findDevice:async m=>{try{const v=await ag(m==null?void 0:m.deviceName);await l().connectToDevice(v,m,!0)}catch(v){v instanceof Error&&v.name!=="NotFoundError"&&o("error",v.message)}},connectToDevice:async(m,v,b,k)=>{var D,O,G;const x=l().user;if(!x||!ue)return!1;il=!1;const E=l().savedDevices.find(H=>H.deviceID===m.id)??v;i({screen:"connection",connecting:{name:qd(m,E,b),icon:(E==null?void 0:E.deviceIcon)??Kl},progress:{value:0,label:"Forbinder..."},sliderValues:{},radarPings:{},textValues:{},plotSeries:{}});try{await ue.connect(m);const H=await ue.runHandshake(x),F=m.id,L=(H.kind==="owned"||H.kind==="unowned")&&((D=H.deviceName)==null?void 0:D.trim())||qd(m,E,b);if(i(te=>te.connecting?{connecting:{...te.connecting,name:L}}:{}),H.kind==="denied"){const pe=`Du kan ikke forbinde, fordi ${((O=H.ownerName)==null?void 0:O.trim())||((G=E==null?void 0:E.ownerName)==null?void 0:G.trim())||"ejeren"} ejer enheden og ikke tillader besøgende at forbinde.`;return o("warning",pe),s(pe),i({screen:"dashboard",connecting:null}),await ue.disconnect(),!0}if(H.kind==="unowned")return i({active:{deviceID:F,deviceName:L,ownerID:x.userID,icon:Kl,canEdit:!0,canEditCode:!0,canOthersConnect:!1,canOthersEdit:!1,canOthersEditCode:!1,isOwnedByMe:!0,ownerName:x.username,gridCols:ha,gridRows:Ns},screen:"create"}),!0;const re={deviceID:F,deviceName:L,ownerID:H.ownerID,deviceIcon:H.icon||(E==null?void 0:E.deviceIcon)||Kl,canOthersConnect:H.canOthersConnect,canOthersEdit:H.canOthersEdit,canOthersEditCode:H.canOthersEditCode,isOwnedByMe:H.isOwnedByMe,ownerName:H.isOwnedByMe?x.username:H.ownerName??(E==null?void 0:E.ownerName)};i({savedDevices:Dd(re)});const q=await ue.requestLayout(),ce=Om(q),ge=Lm(q);return i({layout:ge,toggleValues:Um(ge,l().toggleValues),active:{deviceID:F,deviceName:L,ownerID:H.ownerID,icon:H.icon||(E==null?void 0:E.deviceIcon)||Kl,canEdit:H.canEdit,canEditCode:H.canEditCode,canOthersConnect:H.canOthersConnect,canOthersEdit:H.canOthersEdit,canOthersEditCode:H.canOthersEditCode,isOwnedByMe:H.isOwnedByMe,ownerName:H.isOwnedByMe?x.username:H.ownerName??(E==null?void 0:E.ownerName),gridCols:ce.cols,gridRows:ce.rows},screen:"control",connecting:null,connectionLost:null}),!0}catch(H){const F=H instanceof Error?H.message:"Forbindelsen mislykkedes.";return k!=null&&k.silent?o("info",F):(o("error",F),s("Forbindelsen mislykkedes.")),i({screen:"dashboard",connecting:null}),await ue.disconnect().catch(()=>{}),!1}},finishCreate:async(m,v,b,k,x,E)=>{const{user:D,active:O}=l();if(!(!D||!O||!ue))try{ue.setBusy(!0),await ue.create(D,m,v,b,k,x,E),ue.setBusy(!1);const G={deviceID:O.deviceID,deviceName:O.deviceName,ownerID:D.userID,deviceIcon:m,canOthersConnect:v,canOthersEdit:v&&b,canOthersEditCode:v&&k,isOwnedByMe:!0,ownerName:D.username};i({savedDevices:Dd(G)});const H=await ue.requestLayout(),F=Om(H),L=Lm(H);i({layout:L,toggleValues:Um(L,l().toggleValues),active:{...O,ownerID:D.userID,icon:m,canEdit:!0,canEditCode:!0,canOthersConnect:v,canOthersEdit:v&&b,canOthersEditCode:v&&k,ownerName:D.username,gridCols:F.cols,gridRows:F.rows},screen:"control"})}catch(G){ue.setBusy(!1);const H=G instanceof Error?G.message:"Oprettelse mislykkedes.";o("error",H),s("Oprettelse mislykkedes."),i({screen:"dashboard"}),await ue.disconnect().catch(()=>{})}},saveDeviceSettings:async(m,v,b,k,x,E)=>{const{active:D,user:O}=l();if(!(!D||!ue||!D.isOwnedByMe))try{ue.setBusy(!0),await ue.updateDeviceSettings(m,v,b,k,x,E,O==null?void 0:O.username);const G={...D,icon:m,canEdit:!0,canEditCode:!0,canOthersConnect:v,canOthersEdit:v&&b,canOthersEditCode:v&&k,ownerName:(O==null?void 0:O.username)??D.ownerName,gridCols:x,gridRows:E},H={deviceID:D.deviceID,deviceName:D.deviceName,ownerID:D.ownerID??(O==null?void 0:O.userID),deviceIcon:m,canOthersConnect:v,canOthersEdit:v&&b,canOthersEditCode:v&&k,isOwnedByMe:!0,ownerName:(O==null?void 0:O.username)??D.ownerName};i({active:G,savedDevices:Dd(H)}),s("Enhedsindstillinger gemt.")}catch(G){o("error",G instanceof Error?G.message:"Kunne ikke gemme enhedsindstillinger."),s("Kunne ikke gemme enhedsindstillinger.")}finally{ue.setBusy(!1)}},cancelCreate:async()=>{ue&&await ue.disconnect().catch(()=>{}),i({screen:"dashboard",active:null,connecting:null})},disconnect:async()=>{il=!0,d(null),ue&&await ue.disconnect().catch(()=>{}),il=!1},removeSavedDevice:m=>{i({savedDevices:J2(m)})},clearSavedDevices:()=>{Q2(),i({savedDevices:[]}),s("Gemte enheder ryddet.")},resetApplicationData:async()=>{il=!0,ue!=null&&ue.connected&&await ue.disconnect().catch(()=>{}),W2(),window.location.reload()},updateUsername:m=>{const v=l().user,b=m.trim();if(!v||!b)return;const k={...v,username:b};Cd(k),i(x=>{var D;const E=Ud(x.savedDevices,k);return da(E),{user:k,active:(D=x.active)!=null&&D.isOwnedByMe?{...x.active,ownerName:b}:x.active,savedDevices:E}}),s("Brugernavn gemt.")},createOwnerPairingCode:()=>{const m=l().user;return m?Cg(m):null},applyOwnerPairingCode:m=>{var b;const v=Dg(m,(b=l().user)==null?void 0:b.username);return v?(Cd(v),i(k=>{var E,D,O;const x=Ud(k.savedDevices,v);return da(x),{user:v,active:((D=(E=k.active)==null?void 0:E.ownerID)==null?void 0:D.toLowerCase())===v.userID.toLowerCase()||(O=k.active)!=null&&O.isOwnedByMe?{...k.active,isOwnedByMe:!0,ownerID:v.userID,ownerName:v.username}:k.active,savedDevices:x}}),s("Ejerkoden er gemt. Denne browser bruger nu samme ejer-GUID."),!0):(s("Ejerkoden kunne ikke læses."),!1)},openPicoIde:()=>{const m=l().screen==="control"&&!!(ue!=null&&ue.connected),v=l().active;if(m&&v&&!v.isOwnedByMe&&!v.canEditCode){s("Ejeren tillader ikke, at gæster åbner Kodeværkstedet på denne enhed."),o("warning","Kodeværkstedet er blokeret, fordi ejeren ikke tillader gæster at redigere kode."),i({sideMenuOpen:!1});return}i(b=>({screen:"ide",picoIdeOrigin:m?"control":"dashboard",active:m?b.active:null,layout:m?b.layout:[],sliderValues:m?b.sliderValues:{},toggleValues:m?b.toggleValues:{},radarPings:m?b.radarPings:{},textValues:m?b.textValues:{},plotSeries:m?b.plotSeries:{},editMode:!1,sideMenuOpen:!1,menuPage:null}))},closePicoIde:()=>{const{picoIdeOrigin:m,active:v}=l();i({screen:m==="control"&&v&&(ue!=null&&ue.connected)?"control":"dashboard",sideMenuOpen:!1,menuPage:null,picoIdeOrigin:"dashboard"})},isBleConnected:()=>!!(ue!=null&&ue.connected),bleListFiles:async()=>ue!=null&&ue.connected?ue.listFiles("/"):[],bleReadText:async(m,v,b)=>{if(!(ue!=null&&ue.connected))throw new Error("Ingen BLE-forbindelse.");return ue.readText(m,v,b)},bleWriteText:async(m,v,b)=>{if(!(ue!=null&&ue.connected))throw new Error("Ingen BLE-forbindelse.");await ue.writeText(m,v,b)},bleDeleteFile:async m=>{if(!(ue!=null&&ue.connected))throw new Error("Ingen BLE-forbindelse.");await ue.deleteFile(m)},bleRestart:async()=>{ue!=null&&ue.connected&&await ue.restart()},bleRestartAndReconnect:async(m="control")=>{const{active:v}=l();if(!(ue!=null&&ue.connected)||!v)return!1;const b={deviceID:v.deviceID,deviceName:v.deviceName,ownerID:v.ownerID,deviceIcon:v.icon,canOthersConnect:v.canOthersConnect,canOthersEdit:v.canOthersEdit,canOthersEditCode:v.canOthersEditCode,isOwnedByMe:v.isOwnedByMe,ownerName:v.ownerName};il=!0,o("info","Genstarter Pico og forsøger automatisk genforbindelse...");try{await ue.restart()}catch{}i({progress:{value:15,label:"Venter på Pico genstart..."},connecting:{name:b.deviceName,icon:b.deviceIcon}});for(let k=0;k<12&&(ue!=null&&ue.connected);k+=1)await zm(250);ue!=null&&ue.connected||(il=!1);for(let k=1;k<=8;k+=1){await zm(k===1?1200:850);try{const E=(await Lh()).find(O=>O.id===b.deviceID);if(!E){i({progress:{value:Math.min(88,20+k*8),label:"Venter på browser-tilladelse..."}});continue}if(i({progress:{value:Math.min(92,24+k*8),label:`Genforbinder (${k}/8)...`}}),!await l().connectToDevice(E,b,void 0,{silent:!0}))continue;return m==="ide"&&i(O=>({screen:"ide",picoIdeOrigin:"control",active:O.active,layout:O.layout,sliderValues:O.sliderValues,toggleValues:O.toggleValues,radarPings:O.radarPings,textValues:O.textValues,plotSeries:O.plotSeries,editMode:!1,sideMenuOpen:!1,menuPage:null})),s("Pico genforbundet."),!0}catch(x){o("warning",x instanceof Error?x.message:"Genforbindelse mislykkedes.")}}return s("Kunne ikke genforbinde automatisk. Vælg Picoen igen."),il=!1,i({screen:"dashboard",active:null,layout:[],sliderValues:{},toggleValues:{},radarPings:{},textValues:{},plotSeries:{},editMode:!1,sideMenuOpen:!1,menuPage:null,connecting:null,connectionLost:b}),!1},reconnectLostDevice:async()=>{var v;const m=l().connectionLost;if(m){i({connectionLost:null});try{if((v=navigator.bluetooth)!=null&&v.getDevices){const k=(await navigator.bluetooth.getDevices()).find(x=>x.id===m.deviceID);if(k&&await l().connectToDevice(k,m,void 0,{silent:!0}))return}}catch{}o("info",`Genforbind: åbner enhedsvælger for ${m.deviceName}.`),await l().findDevice(m)}},dismissConnectionLost:()=>i({connectionLost:null}),sendButton:(m,v)=>ue==null?void 0:ue.enqueueButton(m,v),sendSlider:(m,v)=>{i(b=>({sliderValues:{...b.sliderValues,[m]:v}})),ue==null||ue.enqueueSlider(m,v)},sendToggle:(m,v)=>{i(b=>({toggleValues:{...b.toggleValues,[m]:v}})),ue==null||ue.enqueueToggle(m,v)},sendJoystick:(m,v,b)=>ue==null?void 0:ue.enqueueJoystick(m,v,b),sendDpad:(m,v,b)=>ue==null?void 0:ue.enqueueDpad(m,v,b),saveLayout:async m=>{if(ue)try{ue.setBusy(!0),await ue.saveLayout(m),i({layout:m,editMode:!1})}catch(v){o("error",v instanceof Error?v.message:"Kunne ikke gemme layout.")}finally{ue.setBusy(!1)}},setEditMode:m=>i({editMode:m,sideMenuOpen:!1,menuPage:null}),setDashboardPage:m=>i({dashboardPage:m}),toggleSideMenu:m=>i(v=>({sideMenuOpen:m??!v.sideMenuOpen})),toggleDebugger:m=>i(v=>({debuggerOpen:m??!v.debuggerOpen,sideMenuOpen:!1,menuPage:null})),openMenuPage:m=>i({menuPage:m,sideMenuOpen:!1}),closeMenuPage:()=>i({menuPage:null}),clearLogs:()=>i({logs:[]}),log:(m,v)=>o(m,v),askConfirm:m=>i({confirmDialog:m}),closeConfirm:()=>i({confirmDialog:null}),showToast:m=>s(m),dismissToast:()=>{gs&&clearTimeout(gs),i({toast:null})}}}),Kd="PKP-EJER";function Cg(i){var s;const l=i.userID.toLowerCase(),o=((s=l.match(/.{1,4}/g))==null?void 0:s.join("-"))??l;return`${Kd}-${o}-${qh(l)}`}function Dg(i,l="Ejer"){const o=i.trim().toUpperCase().replace(/\s+/g,"-");if(!o.startsWith(`${Kd}-`))return null;const s=o.slice(Kd.length+1).split("-").filter(Boolean),d=s.pop()??"",h=s.join("").toLowerCase();return!/^[a-f0-9]{32}$/.test(h)||d!==qh(h)?null:{userID:h,username:l.trim()||"Ejer"}}function qh(i){let l=2166136261;for(const o of i.toLowerCase())l^=o.charCodeAt(0),l=Math.imul(l,16777619)>>>0;return(l%65536).toString(16).toUpperCase().padStart(4,"0")}const Og=1850,Lg=450;function Bg(){const i=oe(s=>s.splashTarget),l=oe(s=>s.finishSplash),o=i?"splash-screen-animation splash-ready":"splash-pending";return N.useEffect(()=>{if(!i)return;const d=window.matchMedia("(prefers-reduced-motion: reduce)").matches?Lg:Og,h=window.setTimeout(l,d);return()=>window.clearTimeout(h)},[l,i]),u.jsxs("div",{className:`screen splash-screen ${o}`,"aria-label":"Teknologiskolen starter",children:[u.jsx("div",{className:"splash-white-cover"}),u.jsx("div",{className:"splash-red-field"}),u.jsx("div",{className:"splash-brand","aria-hidden":"true",children:u.jsx("div",{className:"splash-mark splash-logo-shell",children:u.jsx("img",{className:"splash-logo",src:Tg,alt:""})})}),u.jsx("span",{className:"sr-only",children:"Teknologiskolen"})]})}function qm(){const i=oe(d=>d.createUser),[l,o]=N.useState(""),s=l.length>0;return u.jsxs("div",{className:"screen intro",children:[u.jsxs("div",{className:"intro-header",children:[u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"}),u.jsx("img",{className:"intro-header-image",src:Mg,alt:"Teknologiskolen"}),u.jsx("span",{className:"intro-header-fill","aria-hidden":"true"})]}),u.jsxs("div",{className:"intro-body",children:[u.jsx("p",{children:"Velkommen til Teknologiskolens Bluetooth-styringsapplikation til Raspberry Pi. Find selv på et navn, du vil vises som i appen. Det er ikke et login, og navnet gemmes kun i denne browser."}),u.jsxs("div",{className:`field ${s?"filled":""}`,children:[u.jsx("input",{id:"username",value:l,onChange:d=>o(d.target.value),maxLength:32,autoComplete:"off","aria-label":"Brugernavn"}),u.jsx("label",{htmlFor:"username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!s,onClick:()=>i(l),children:"Fortsæt"})]}),u.jsx("span",{className:"version",children:Ms})]})}function mf({title:i,onMenu:l}){return u.jsx("header",{className:"topbar",children:u.jsxs("div",{className:"topbar-inner",children:[u.jsx("h1",{children:i}),u.jsx("button",{className:"iconbtn",type:"button",onClick:l,"aria-label":"Menu",children:u.jsx(Pt,{name:"menu"})})]})})}var Hh=Dh();function Ht({title:i,onClose:l,children:o,closeVariant:s="plain"}){const d=s==="circle",h=N.useRef(!1);return Hh.createPortal(u.jsx("div",{className:"modal-root",onPointerDown:_=>{h.current=_.target===_.currentTarget},onClick:_=>{_.target===_.currentTarget&&h.current&&l(),h.current=!1},children:u.jsxs("div",{className:"modal",onClick:_=>_.stopPropagation(),children:[u.jsxs("div",{className:"modal-head",children:[u.jsx("h3",{children:i}),u.jsx("button",{className:`iconbtn ${d?"modal-close-circle":""}`,type:"button",onClick:l,"aria-label":"Luk",children:u.jsx(Pt,{name:d?"delete":"close",size:d?30:24})})]}),u.jsx("div",{className:"modal-body",children:o})]})}),document.body)}const hf="https://api.iconify.design",zg=["tabler","lucide","ph","material-symbols","solar","mingcute","ri","mdi"],Vh="pkp.iconcache.";function Ug(i){const[l,...o]=i.split(":");return`${hf}/${l}/${encodeURIComponent(o.join(":"))}.svg`}function Ih(i){try{return localStorage.getItem(Vh+i)}catch{return null}}function Ph(i,l){try{localStorage.setItem(Vh+i,l)}catch{}}function qg(i){return i.replace(/\s(width|height)="[^"]*"/g,"").trim()}async function Fh(i){const l=Ih(i);if(l)return l;const[o,...s]=i.split(":"),d=s.join(":");if(!o||!d)return null;try{const h=await fetch(`${hf}/${o}/${encodeURIComponent(d)}.svg`);if(!h.ok)return null;const _=await h.text();return _.startsWith("<svg")?qg(_):null}catch{return null}}async function Gh(i,l=120){var _;const o=i.trim();if(!o)return{icons:[],total:0};const s=`${hf}/search?query=${encodeURIComponent(o)}&limit=${l}&prefixes=${zg.join(",")}`,d=await fetch(s);if(!d.ok)throw new Error(`Iconify search failed (${d.status})`);const h=await d.json();return{icons:h.icons??[],total:h.total??((_=h.icons)==null?void 0:_.length)??0}}const Hg=["robot","sensor","motor","raspberry pi","led","battery","bluetooth","car","rocket","gamepad","gauge","radar","compass","temperature","wifi","antenna","gear","bolt","lightbulb","joystick","drone","circuit","chip","servo","wheel","magnet","speaker","camera","flask"];function Hm(i){const l=[...i];for(let o=l.length-1;o>0;o--){const s=Math.floor(Math.random()*(o+1));[l[o],l[s]]=[l[s],l[o]]}return l}const Vg=8,Ig=20;async function Pg(i=120){const l=Hm(Hg).slice(0,Vg),o=await Promise.all(l.map(_=>Gh(_,Ig).catch(()=>({icons:[],total:0})))),s=new Set,d=[];for(const _ of o)for(const m of _.icons)s.has(m)||(s.add(m),d.push(m));const h=Hm(d).slice(0,i);return{icons:h,total:h.length}}const Qd=js(ff(Kl)??"");function Vm(i){if(!i)return Qd;const l=ff(i);if(l)return js(l);const o=Ih(i);return o?js(o):null}function As({slug:i,className:l,alt:o=""}){const[s,d]=N.useState(()=>Vm(i)??Qd);return N.useEffect(()=>{const h=Vm(i);if(h){d(h);return}if(d(Qd),!i||typeof navigator<"u"&&!navigator.onLine)return;let _=!1;return Fh(i).then(m=>{_||!m||(Ph(i,m),d(js(m)))}),()=>{_=!0}},[i]),u.jsx("img",{className:l,src:s,alt:o})}function Im(){const i=oe(E=>E.savedDevices),l=oe(E=>E.toggleSideMenu),o=oe(E=>E.findDevice),s=oe(E=>E.removeSavedDevice),d=oe(E=>E.askConfirm),h=oe(E=>E.dashboardPage),_=oe(E=>E.setDashboardPage),m=Yg(),[v,b]=N.useState(null),k=kc(),x=i.filter(E=>h==="mine"?E.isOwnedByMe:!E.isOwnedByMe).sort($g);return u.jsxs("div",{className:"screen dashboard-screen",children:[u.jsx(mf,{title:"Hovedmenu",onMenu:()=>l()}),u.jsxs("div",{className:"content dash-content",children:[!k&&u.jsx("div",{className:"notice",children:"Web Bluetooth er ikke tilgængelig her. På iPhone/iPad: åbn siden i Bluefy-browseren. På Android: brug Chrome."}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:h==="mine"?"active":"",onClick:()=>_("mine"),children:"Mine Enheder"}),u.jsx("button",{type:"button",className:h==="andre"?"active":"",onClick:()=>_("andre"),children:"Andre Enheder"})]}),u.jsx("div",{className:"panel panel-white device-list",children:x.length===0?u.jsx("div",{className:"device-list-empty",children:h==="mine"?"Ingen enheder endnu. Tryk på + for at finde en enhed.":"Ingen andre enheder gemt."}):x.map(E=>u.jsx(Fg,{device:E,disabled:!k,onConnect:()=>m(E),onSettings:()=>b(E)},E.deviceID))})]}),u.jsx("button",{className:"fab",type:"button",onClick:()=>o(),disabled:!k,"aria-label":"Find enhed",children:u.jsx(Pt,{name:"plus",size:30})}),u.jsx("span",{className:"version",children:Ms}),v&&u.jsx(Ht,{title:"Enhedsindstillinger",onClose:()=>b(null),children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("div",{className:"saved-device-head",children:[u.jsx(As,{slug:v.deviceIcon}),u.jsx("strong",{children:v.deviceName})]}),u.jsx(_s,{label:"Gemte indstillinger",value:"Denne browser"}),u.jsx(_s,{label:"Ejer",value:Gg(v)}),u.jsx(_s,{label:"Offentlig",value:v.canOthersConnect?"Ja":"Nej"}),u.jsx(_s,{label:"Andre må redigere layout",value:v.canOthersEdit?"Ja":"Nej"}),u.jsx(_s,{label:"Andre må redigere kode",value:v.canOthersEditCode?"Ja":"Nej"}),u.jsx("div",{className:"notice",children:"Forbind til enheden for at ændre de indstillinger, der er gemt på Picoen."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",disabled:!k,onClick:()=>{const E=v;b(null),m(E)},children:"Forbind"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>d({title:"Glem enhed",message:`Vil du fjerne ${v.deviceName} fra gemte enheder?`,confirmLabel:"Glem",onConfirm:()=>{s(v.deviceID),b(null)}}),children:"Glem enhed"})]})})]})}function Fg({device:i,disabled:l,onConnect:o,onSettings:s}){return u.jsxs("div",{className:"device-tile-wrap",children:[u.jsxs("button",{className:"device-tile",type:"button",onClick:o,disabled:l,children:[u.jsx(As,{className:"device-tile-icon",slug:i.deviceIcon}),u.jsx("span",{className:"device-tile-name",children:i.deviceName})]}),u.jsx("button",{className:"device-tile-del",type:"button",onClick:s,"aria-label":"Enhedsindstillinger",children:u.jsx(Pt,{name:"settings"})})]})}function _s({label:i,value:l}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:i}),u.jsx("strong",{children:l})]})}function Gg(i){var l;return i.isOwnedByMe?"Dig":((l=i.ownerName)==null?void 0:l.trim())||"Anden bruger"}function $g(i,l){return i.deviceName.localeCompare(l.deviceName,"da",{sensitivity:"base"})}function Yg(){const i=oe(s=>s.connectToDevice),l=oe(s=>s.findDevice),o=oe(s=>s.log);return async s=>{const h=(await Lh()).find(_=>_.id===s.deviceID);h&&await i(h,s,void 0,{silent:!0})||(o("info",`Genforbind: åbner enhedsvælger for ${s.deviceName}.`),await l(s))}}function Xg(){const i=oe(o=>o.connecting),l=oe(o=>o.progress);return u.jsxs("div",{className:"screen connection",children:[u.jsx("div",{className:"device-icon-pick",children:u.jsx(As,{slug:i==null?void 0:i.icon})}),u.jsxs("h2",{style:{margin:0,color:"var(--red)"},children:["Forbinder til ",(i==null?void 0:i.name)??"enhed"]}),u.jsx("div",{className:"spinner"}),u.jsxs("div",{style:{width:"100%"},children:[u.jsx("div",{className:"progress-track",children:u.jsx("div",{className:"progress-fill",style:{width:`${l.value}%`}})}),u.jsx("p",{style:{color:"var(--muted)",fontWeight:600,marginTop:12},children:l.label})]})]})}const Pm=24;function Kg(){const[i,l]=N.useState(1),o=N.useRef(null),s=N.useCallback(d=>{var m;if((m=o.current)==null||m.disconnect(),o.current=null,!d)return;const h=()=>{const v=getComputedStyle(d).gridTemplateColumns,b=v&&v!=="none"?v.split(" ").filter(Boolean).length:1;l(k=>k===b?k:Math.max(1,b))};h();const _=new ResizeObserver(h);_.observe(d),o.current=_},[]);return N.useEffect(()=>()=>{var d;return(d=o.current)==null?void 0:d.disconnect()},[]),[i,s]}function Qg(i,l,o){const s=Math.min(Math.max(o,1),l);let d=i-Math.floor(s/2);return d=Math.max(0,Math.min(d,l-s)),Array.from({length:s},(h,_)=>d+_)}function $h({selected:i,onSelect:l,onClose:o}){const[s,d]=N.useState("library"),[h,_]=Kg(),m=N.useMemo(()=>h*Math.max(1,Math.round(Pm/h)),[h]),[v,b]=N.useState(()=>{const R=i?fc.findIndex(W=>W.slug===i):-1;return R>=0?Math.floor(R/Pm):0}),[k,x]=N.useState(""),[E,D]=N.useState([]),[O,G]=N.useState(0),[H,F]=N.useState(!1),[L,re]=N.useState(null),[q,ce]=N.useState(!1),[ge,te]=N.useState(typeof navigator>"u"?!0:navigator.onLine);N.useEffect(()=>{const R=()=>te(navigator.onLine);return window.addEventListener("online",R),window.addEventListener("offline",R),()=>{window.removeEventListener("online",R),window.removeEventListener("offline",R)}},[]);function pe(R){l(R),o(),ff(R)||Fh(R).then(W=>{W&&Ph(R,W)})}async function ye(R){if(!ge){re("Du er offline. Vælg fra «Bibliotek», eller find flere ikoner når du er online.");return}F(!0),re(null),ce(!0);try{const W=R==="random"?await Pg():await Gh(k);D(W.icons),G(0),W.icons.length===0&&re("Ingen ikoner fundet. Prøv et andet ord.")}catch{re("Kunne ikke hente ikoner. Tjek din internetforbindelse."),D([])}finally{F(!1)}}const Be=Math.ceil(fc.length/m),ne=N.useMemo(()=>fc.slice(v*m,v*m+m),[v,m]),Pe=Math.ceil(E.length/m),we=N.useMemo(()=>E.slice(O*m,O*m+m),[E,O,m]),Qe=ge&&!H&&!L&&we.length>0;N.useEffect(()=>{b(R=>Math.min(R,Math.max(0,Be-1)))},[Be]),N.useEffect(()=>{G(R=>Math.min(R,Math.max(0,Pe-1)))},[Pe]);const Z=N.useRef(null);return N.useEffect(()=>{var R;(R=Z.current)==null||R.scrollTo({top:0})},[s,v,O]),u.jsx(Ht,{title:"Vælg et ikon",onClose:o,children:u.jsxs("div",{className:"icon-picker",children:[u.jsxs("div",{className:"icon-picker-head",children:[u.jsxs("div",{className:"icon-tabs",role:"tablist",children:[u.jsx("button",{type:"button",role:"tab","aria-selected":s==="library",className:s==="library"?"active":"",onClick:()=>d("library"),children:"Bibliotek"}),u.jsx("button",{type:"button",role:"tab","aria-selected":s==="search",className:s==="search"?"active":"",onClick:()=>d("search"),children:"Søg online"})]}),s==="library"?u.jsx("p",{className:"icon-picker-caption",children:"Tryk på et ikon for at vælge det."}):u.jsxs("form",{className:"icon-search",onSubmit:R=>{R.preventDefault(),ye("query")},children:[u.jsx("input",{type:"search",value:k,placeholder:"Søg (fx robot, bil, sensor)",onChange:R=>x(R.target.value),disabled:!ge,"aria-label":"Søg efter ikon",autoFocus:!0}),u.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!ge||H,children:"Søg"}),u.jsx("button",{type:"button",className:"btn icon-dice",onClick:()=>void ye("random"),disabled:!ge||H,title:"Vis tilfældige ikoner","aria-label":"Vis tilfældige ikoner",children:u.jsx(Gm,{})})]})]}),u.jsxs("div",{className:"icon-picker-body",ref:Z,children:[s==="library"&&u.jsx("div",{className:"icon-grid",ref:_,children:ne.map(R=>u.jsx(Fm,{src:js(R.svg),label:R.label,selected:R.slug===i,onClick:()=>pe(R.slug)},R.slug))}),s==="search"&&u.jsxs(u.Fragment,{children:[!ge&&u.jsx("p",{className:"icon-hint",children:"Du er offline. Vælg fra «Bibliotek», eller find flere ikoner når du er online."}),ge&&H&&u.jsx("p",{className:"icon-hint",children:"Henter ikoner…"}),ge&&!H&&L&&u.jsx("p",{className:"icon-hint icon-hint-error",children:L}),ge&&!H&&!L&&!q&&u.jsxs("p",{className:"icon-hint",children:["Skriv et ord og tryk ",u.jsx("strong",{children:"Søg"})," - eller tryk"," ",u.jsx("span",{className:"icon-hint-dice","aria-hidden":"true",children:u.jsx(Gm,{})})," ","for tilfældige ikoner."]}),Qe&&u.jsx("div",{className:"icon-grid",ref:_,children:we.map(R=>u.jsx(Fm,{src:Ug(R),label:R,selected:R===i,onClick:()=>pe(R)},R))})]})]}),u.jsxs("div",{className:"icon-picker-foot",children:[s==="library"&&u.jsx(Ym,{current:v,total:Be,onGo:b}),s==="search"&&Qe&&u.jsx(Ym,{current:O,total:Pe,onGo:G})]})]})})}function Fm({src:i,label:l,selected:o,onClick:s}){return u.jsxs("button",{type:"button",className:`icon-tile ${o?"selected":""}`,onClick:s,"aria-label":l,"aria-pressed":o,title:l,children:[u.jsx("img",{src:i,alt:"",loading:"lazy"}),o&&u.jsx("span",{className:"icon-tile-check","aria-hidden":"true",children:"✓"})]})}function Gm(){return u.jsxs("svg",{className:"dice-glyph",viewBox:"0 0 24 24",width:22,height:22,"aria-hidden":"true",fill:"currentColor",children:[u.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"4",ry:"4",fill:"none",stroke:"currentColor",strokeWidth:"2"}),u.jsx("circle",{cx:"8",cy:"8",r:"1.7"}),u.jsx("circle",{cx:"16",cy:"8",r:"1.7"}),u.jsx("circle",{cx:"12",cy:"12",r:"1.7"}),u.jsx("circle",{cx:"8",cy:"16",r:"1.7"}),u.jsx("circle",{cx:"16",cy:"16",r:"1.7"})]})}const $m=48;function Ym({current:i,total:l,onGo:o}){const s=N.useRef(null),[d,h]=N.useState(7);return N.useLayoutEffect(()=>{const _=s.current;if(!_)return;const m=()=>{const b=_.clientWidth-2*$m;h(Math.max(1,Math.floor(b/$m)))};m();const v=new ResizeObserver(m);return v.observe(_),()=>v.disconnect()},[]),l<=1?null:u.jsxs("div",{className:"icon-pager",ref:s,children:[u.jsx("button",{type:"button",className:"icon-pager-arrow",onClick:()=>o(Math.max(0,i-1)),disabled:i===0,"aria-label":"Forrige side",children:u.jsx(Pt,{name:"back",size:20})}),Qg(i,l,d).map(_=>u.jsx("button",{type:"button",className:`icon-pager-num ${_===i?"active":""}`,onClick:()=>o(_),"aria-label":`Side ${_+1}`,"aria-current":_===i?"page":void 0,children:_+1},_)),u.jsx("button",{type:"button",className:"icon-pager-arrow",onClick:()=>o(Math.min(l-1,i+1)),disabled:i===l-1,"aria-label":"Næste side",children:u.jsx(Pt,{name:"back",size:20,className:"flip-x"})})]})}function Wg(){const i=oe(q=>q.finishCreate),l=oe(q=>q.cancelCreate),[o,s]=N.useState(Kl),[d,h]=N.useState(!1),[_,m]=N.useState(!1),[v,b]=N.useState(!1),[k,x]=N.useState(!1),[E,D]=N.useState(ha),[O,G]=N.useState(Ns),[H,F]=N.useState(!1),L=q=>Number.isFinite(q)?Math.max(fa,Math.min(ma,Math.round(q))):ha;async function re(){F(!0),await i(o,_,_&&v,_&&k,L(E),L(O))}return u.jsxs("div",{className:"screen",children:[u.jsx("header",{className:"topbar",children:u.jsx("h1",{children:"Opret Enhed"})}),u.jsxs("div",{className:"content create-body",children:[u.jsxs("button",{type:"button",className:"device-icon-pick",onClick:()=>h(!0),"aria-label":"Vælg ikon",children:[u.jsx(As,{slug:o}),u.jsx("span",{className:"badge",children:u.jsx(Pt,{name:"plus",size:22})})]}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:_?"":"active",onClick:()=>m(!1),children:"Privat"}),u.jsx("button",{type:"button",className:_?"active":"",onClick:()=>m(!0),children:"Offentlig"})]}),_&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:v?"":"active",onClick:()=>b(!1),children:"Nej"}),u.jsx("button",{type:"button",className:v?"active":"",onClick:()=>b(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:k?"":"active",onClick:()=>x(!1),children:"Nej"}),u.jsx("button",{type:"button",className:k?"active":"",onClick:()=>x(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter (kolonner × rækker)"}),u.jsxs("div",{className:"row",style:{width:"100%"},children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"cols",children:"Kolonner"}),u.jsx("input",{id:"cols",type:"number",min:fa,max:ma,value:Number.isNaN(E)?"":E,onChange:q=>D(parseInt(q.target.value,10)),onBlur:()=>D(L(E))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"rows",children:"Rækker"}),u.jsx("input",{id:"rows",type:"number",min:fa,max:ma,value:Number.isNaN(O)?"":O,onChange:q=>G(parseInt(q.target.value,10)),onBlur:()=>G(L(O))})]})]}),u.jsxs("div",{className:"row",style:{marginTop:"auto",width:"100%"},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>l(),disabled:H,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:re,disabled:H,children:H?"Opretter...":"Opret"})]})]}),d&&u.jsx($h,{selected:o,onSelect:s,onClose:()=>h(!1)}),u.jsx("span",{className:"version",children:Ms})]})}const pa=8;function mc(i){return Math.max(5,Math.min(22,i))}function Zg(i,l,o){const s=Math.max(1,i.length),d=(l-pa*2)/(s*.58),h=(o-pa*2)*.48;return mc(Math.min(d,h))}function Ei(i,l,o){switch(o){case 90:return{x:-l,y:i};case 180:return{x:-i,y:-l};case 270:return{x:l,y:-i};default:return{x:i,y:l}}}function vc(i){return(360-i)%360}function Jg(i,l,o,s){const d=s===90||s===270;return Zg(i,d?o:l,d?l:o)}function bc({name:i,width:l,height:o,rotation:s}){return u.jsx("span",{style:{display:"inline-block",fontWeight:800,fontSize:Jg(i,l,o,s),transform:s?`rotate(${s}deg)`:void 0,whiteSpace:s===90||s===270?"nowrap":void 0},children:i})}function e_(i,l,o,s,d){const h=i.trim().split(/\s+/).filter(Boolean),_=Math.max(1,i.replace(/\s+/g,"").length+Math.max(0,h.length-1)*1.6),m=d?mc(Math.min(l/4.6,o/4.6,12)):0,v=d?m+pa:pa;if(s){const x=Math.max(1,o-v*2);return{fontSize:mc(Math.min(l*.48,x/(_*1.04))),endFontSize:m,centerInset:d?{top:v,bottom:v}:{}}}const b=Math.max(1,l-v*4.2);return{fontSize:mc(Math.min(o*.42,b/(_*.58))),endFontSize:m,centerInset:d?{left:v*2.1,right:v*2.1}:{}}}function t_({control:i,rect:l,disabled:o,orientation:s,latestValue:d,toggleValue:h,radarPings:_=[],textValue:m,plotPoints:v=[],onButton:b,onSlider:k,onToggle:x,onJoystick:E,onDpad:D}){const O=N.useRef(!1),[G,H]=N.useState(!1),F={left:l.cx,top:l.cy,width:l.width,height:l.height};if(i.type==="button"){const L=()=>{o||!O.current||(O.current=!1,H(!1),b(i.name,!1))};return u.jsx("div",{className:"control",style:F,children:u.jsx("button",{className:`control-button ${G?"pressed":""}`,type:"button",disabled:o,style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},onPointerDown:re=>{var q,ce;o||(re.preventDefault(),(ce=(q=re.currentTarget).setPointerCapture)==null||ce.call(q,re.pointerId),O.current=!0,H(!0),b(i.name,!0))},onPointerUp:re=>{var q,ce;re.preventDefault(),(ce=(q=re.currentTarget).releasePointerCapture)==null||ce.call(q,re.pointerId),L()},onPointerCancel:L,onLostPointerCapture:L,children:u.jsx(bc,{name:i.name,width:l.width,height:l.height,rotation:s})})})}if(i.type==="toggle"){const L=!!h;return u.jsx("div",{className:"control",style:F,children:u.jsx("button",{className:`control-toggle ${L?"on":""}`,type:"button",disabled:o,"aria-pressed":L,style:{width:"100%",height:"100%"},onPointerDown:re=>{o||(re.preventDefault(),x(i.name,!L))},children:u.jsx(bc,{name:i.name,width:l.width,height:l.height,rotation:s})})})}return i.type==="radar"?u.jsx("div",{className:"control",style:F,children:u.jsx(Xh,{control:i,pings:_,width:l.width,height:l.height,rotation:s})}):i.type==="text"?u.jsx("div",{className:"control",style:F,children:u.jsx(Yh,{message:m??i.name,width:l.width,height:l.height,rotation:s})}):i.type==="plot"?u.jsx("div",{className:"control",style:F,children:u.jsx(Qh,{control:i,points:v,width:l.width,height:l.height,rotation:s})}):i.type==="joystick"?u.jsx("div",{className:"control",style:F,children:u.jsx(E_,{control:i,disabled:o,orientation:s,onJoystick:E,width:l.width,height:l.height})}):i.type==="dpad"?u.jsx("div",{className:"control",style:F,children:u.jsx(D_,{control:i,disabled:o,orientation:s,onDpad:D})}):u.jsx("div",{className:"control",style:F,children:u.jsx(S_,{control:i,disabled:o,orientation:s,latestValue:d,onSlider:k,width:l.width,height:l.height})})}function n_(i,l,o){const d=(i.trim()||" ").split(`
`),h=d.reduce((E,D)=>D.split(/\s+/).filter(Boolean).reduce((G,H)=>Math.max(G,H.length),E),1),_=Math.max(1,Math.floor(h*1.9)),m=Math.max(d.length,d.reduce((E,D)=>E+Math.max(1,Math.ceil(Math.max(1,D.trim().length)/_)),0)),v=Math.max(1,l-pa*3),b=Math.max(1,o-pa*3),k=v/(h*.58),x=b/(m*1.16);return Math.max(7,Math.min(24,k,x))}function Yh({message:i,width:l,height:o,rotation:s=0}){const d=i.trim()||"...",h=s===90||s===270,_=n_(d,h?o:l,h?l:o);return u.jsx("div",{className:"control-text",style:{width:"100%",height:"100%",fontSize:_},children:u.jsx("span",{style:{transform:s?`rotate(${s}deg)`:void 0},children:d})})}function Xh({control:i,pings:l,width:o,height:s,rotation:d=0,preview:h=!1}){const[,_]=N.useState(0),m=Math.max(120,i.radarFadeMs??1200),v=i.radarMinAngle??0,b=i.radarMaxAngle??180,k=rn(v),x=rn(b),E=Math.abs(b-v)>=360||k===x&&v!==b,D=Math.max(1,i.radarMaxDistance??200),O=Date.now(),G=l[l.length-1],H=d,F=rn(k+H),L=rn(x+H),re=f_(k,x),q=((G==null?void 0:G.angle)??re)+H,ce=h?[{id:"preview",angle:re,distance:D*.62,createdAt:O}]:l.filter(_e=>O-_e.createdAt<=m),ge=!E,te=Math.max(8,Math.min(12,Math.min(o,s)*.16)),pe=Math.max(7,te*.85),ye=0,Be=0,ne=1,Pe=o_(E,F,L,H,D),we=E?{x:-1.12,y:-1.12,width:2.24,height:2.24}:c_(F,L,Pe.map(_e=>_e.point)),Qe=E?"":r_(ye,Be,ne,F,L),Z=Wm(v),R=Wm(b),W=ge?d_(F,L,we,o,s,Z,R,te):null,me=Pe.map(_e=>{const T=Kh(_e.point,we,o,s);return{key:_e.key,value:_e.value,x:T.x,y:T.y}});N.useEffect(()=>{if(h||l.length===0)return;const _e=window.setInterval(()=>_(T=>T+1),120);return()=>window.clearInterval(_e)},[m,l.length,h]);const Re=Vn(ye,Be,ne,q);return u.jsxs("div",{className:"control-radar",style:{width:"100%",height:"100%"},children:[u.jsxs("svg",{width:o,height:s,viewBox:`${we.x} ${we.y} ${we.width} ${we.height}`,preserveAspectRatio:"none","aria-hidden":"true",children:[E?u.jsx("circle",{className:"radar-sector-fill",cx:ye,cy:Be,r:ne}):u.jsx("path",{className:"radar-sector-fill",d:Qe}),[.25,.5,.75,1].map(_e=>E?u.jsx("circle",{className:"radar-ring",cx:ye,cy:Be,r:ne*_e},_e):u.jsx("path",{className:"radar-ring",d:l_(ye,Be,ne*_e,F,L)},_e)),!E&&u.jsx(Xm,{cx:ye,cy:Be,radius:ne,angle:F}),!E&&u.jsx(Xm,{cx:ye,cy:Be,radius:ne,angle:L}),u.jsx("line",{className:"radar-sweep",x1:ye,y1:Be,x2:Re.x,y2:Re.y}),ce.map(_e=>{const T=h?0:O-_e.createdAt,$=Math.max(0,1-T/m),le=Math.max(0,Math.min(D,_e.distance)),ae=Vn(ye,Be,ne*(le/D),_e.angle+H);return u.jsx("circle",{className:"radar-ping",cx:ae.x,cy:ae.y,r:Math.max(.025,Math.min(we.width,we.height)*.025),opacity:$},_e.id)})]}),ge&&W&&u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"radar-angle-label",style:{left:W.min.x,top:W.min.y,fontSize:te},children:Z}),u.jsx("span",{className:"radar-angle-label",style:{left:W.max.x,top:W.max.y,fontSize:te},children:R})]}),me.map(_e=>u.jsx("span",{className:"radar-range-label",style:{left:_e.x,top:_e.y,fontSize:pe},children:_e.value},_e.key))]})}function Xm({cx:i,cy:l,radius:o,angle:s}){const d=Vn(i,l,o,s);return u.jsx("line",{className:"radar-boundary",x1:i,y1:l,x2:d.x,y2:d.y})}function Vn(i,l,o,s){const d=(rn(s)-90)*Math.PI/180;return{x:i+Math.cos(d)*o,y:l+Math.sin(d)*o}}function r_(i,l,o,s,d){const h=Vn(i,l,o,s),_=Vn(i,l,o,d),m=Sc(s,d)>180?1:0;return`M ${i} ${l} L ${h.x} ${h.y} A ${o} ${o} 0 ${m} 1 ${_.x} ${_.y} Z`}function l_(i,l,o,s,d){const h=Vn(i,l,o,s),_=Vn(i,l,o,d),m=Sc(s,d)>180?1:0;return`M ${h.x} ${h.y} A ${o} ${o} 0 ${m} 1 ${_.x} ${_.y}`}function Sc(i,l){const o=rn(i),s=rn(l),d=s>=o?s-o:360-o+s;return d===0?360:d}const sc=[.25,.5,.75,1],i_=.1,a_=.85,s_=55;function o_(i,l,o,s,d){const h=(v,b,k)=>({key:`${v}-${b}`,value:Math.round(d*b),point:Vn(0,0,b,k)});if(i){const v=rn(180+s);return sc.map(b=>h("full",b,v))}const _=360-Sc(l,o);if(_<s_){const v=rn(o+_/2);return sc.map(b=>h("mid",b,v))}const m=(v,b,k)=>{const x=Math.asin(Math.min(a_,i_/b))*180/Math.PI;return rn(v+k*x)};return[...sc.map(v=>h("min",v,m(l,v,-1))),...sc.map(v=>h("max",v,m(o,v,1)))]}function c_(i,l,o=[]){const s=[{x:0,y:0},Vn(0,0,1,i),Vn(0,0,1,l),...o];for(const x of[0,90,180,270])u_(x,i,l)&&s.push(Vn(0,0,1,x));const d=Math.min(...s.map(x=>x.x)),h=Math.max(...s.map(x=>x.x)),_=Math.min(...s.map(x=>x.y)),m=Math.max(...s.map(x=>x.y)),v=Math.max(.1,h-d),b=Math.max(.1,m-_),k=Math.max(v,b)*.24;return{x:d-k,y:_-k,width:v+k*2,height:b+k*2}}function u_(i,l,o){const s=rn(l),d=rn(i),h=Sc(l,o),_=rn(d-s);return _>=0&&_<=h}function d_(i,l,o,s,d,h,_,m){const b=Vn(0,0,1.1,i),k=Vn(0,0,1.1,l);return{min:Km(b,o,s,d,h,m),max:Km(k,o,s,d,_,m)}}function Kh(i,l,o,s){return{x:(i.x-l.x)/l.width*o,y:(i.y-l.y)/l.height*s}}function Km(i,l,o,s,d,h){const _=Kh(i,l,o,s),m=Math.max(10,d.length*h*.62),v=h,b=7;return{x:Qm(_.x,m/2+b,Math.max(m/2+b,o-m/2-b)),y:Qm(_.y,v/2+b,Math.max(v/2+b,s-v/2-b))}}function Qm(i,l,o){return Math.max(l,Math.min(o,i))}function Wm(i){return`${Math.round(i)}`}function rn(i){return Number.isFinite(i)?(i%360+360)%360:0}function f_(i,l){const o=rn(i),s=rn(l),d=s>=o?s-o:360-o+s;return rn(o+d/2)}function vs(i){return Number.isInteger(i)?String(i):i.toFixed(1)}function Wd(i,l){return Math.max(l,i.length*l*.58)}function Zm(i,l,o){if(Wd(i,l)<=o)return i;const s=Math.max(1,Math.floor(o/Math.max(1,l*.58))-3);return s<=1?i.slice(0,1):`${i.slice(0,s)}...`}function Jm(i,l){return i.label?i.label:l}const m_=3;function Ss(i){return i.split(`
`).map(l=>l.trim()).slice(0,m_)}function h_(i){const l=i.label?Ss(i.label)[0]:"";return l||new Date(i.createdAt).toLocaleTimeString("da-DK",{hour:"2-digit",minute:"2-digit"})}function p_({anchorRect:i,timeText:l,valueText:o}){const s=N.useRef(null),[d,h]=N.useState(null);return N.useLayoutEffect(()=>{const _=s.current;if(!_)return;const m=()=>{const{width:v,height:b}=_.getBoundingClientRect(),k=8,x=window.innerWidth,E=window.innerHeight,D=i.top,O=E-i.bottom,H=D>=b+k||D>=O?Math.max(4,i.top-b-k):Math.min(E-b-4,i.bottom+k),F=i.left+i.width/2,L=Math.max(4,Math.min(x-v-4,F-v/2));h({left:L,top:H})};return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[i]),Hh.createPortal(u.jsxs("div",{ref:s,className:"plot-tooltip",style:{left:(d==null?void 0:d.left)??i.left,top:(d==null?void 0:d.top)??i.top,visibility:d?"visible":"hidden"},children:[u.jsxs("div",{className:"plot-tooltip-row",children:["Tid ",l]}),u.jsx("div",{className:"plot-tooltip-row",children:o})]}),document.body)}const Hd="pkp:plot-popup-open";let g_=0;const __=18;function v_(i){if(i<=0)return[];if(i<=5)return Array.from({length:i},(o,s)=>s);const l=new Set([0,i-1]);return l.add(Math.round((i-1)/2)),i>=10&&(l.add(Math.round((i-1)/4)),l.add(Math.round((i-1)*3/4))),[...l].sort((o,s)=>o-s)}function b_(i,l){return i<=0||l==="none"?[]:l==="labels"?Array.from({length:i},(o,s)=>s):i===1?[0]:[0,i-1]}function y_(i,l){const o=Date.now();return Array.from({length:i},(s,d)=>{const h=d/Math.max(1,i-1),_=l==="bar"?.15+.7*Math.abs(Math.sin(h*Math.PI*1.4)):l==="dot"?.5+.35*Math.sin(d*2.3)*Math.cos(d*.7):.5+.4*Math.sin(h*Math.PI*2.2);return{id:`demo-${d}`,value:_,createdAt:o}})}function Qh({control:i,points:l,width:o,height:s,preview:d=!1,rotation:h=0}){const _=h===90||h===270,m=_?s:o,v=_?o:s,b=i.plotMin??0,k=i.plotMax??100,x=k>b?k-b:1,E=Math.max(2,i.plotHistory??30),D=i.plotStyle==="bar"?"bar":i.plotStyle==="dot"?"dot":"line",O=i.plotXAxis??"labels",G=i.plotYAxis??"range",H=Math.max(8,Math.min(45,i.plotLabelMaxPercent??24)),F=d?y_(E,D):l,[L,re]=N.useState(null),q=N.useRef(new Map),[ce,ge]=N.useState(null),[te,pe]=N.useState(null),ye=N.useMemo(()=>g_+=1,[]),Be=N.useMemo(()=>typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches,[]);N.useEffect(()=>{ce!=null&&window.dispatchEvent(new CustomEvent(Hd,{detail:ye}))},[ce,ye]),N.useEffect(()=>{const ee=he=>{he.detail!==ye&&ge(null)};return window.addEventListener(Hd,ee),()=>window.removeEventListener(Hd,ee)},[ye]),N.useLayoutEffect(()=>{if(!ce){pe(null);return}const ee=q.current.get(ce);if(!ee){pe(null);return}const he=()=>pe(ee.getBoundingClientRect());return he(),window.addEventListener("resize",he),window.addEventListener("scroll",he,!0),()=>{window.removeEventListener("resize",he),window.removeEventListener("scroll",he,!0)}},[ce]),N.useEffect(()=>{if(!Be||!ce)return;const ee=()=>ge(null);return window.addEventListener("click",ee),()=>window.removeEventListener("click",ee)},[Be,ce]),N.useEffect(()=>{ge(null)},[L]);function ne(ee){return he=>{he?q.current.set(ee,he):q.current.delete(ee)}}function Pe(ee){return Be?{onClick:he=>{he.stopPropagation(),ge(We=>We===ee?null:ee)}}:{onPointerEnter:()=>ge(ee),onPointerLeave:()=>ge(he=>he===ee?null:he)}}const we=Math.max(1,Math.min(m,v)),Qe=Math.max(8,Math.min(13,we*.14)),Z=Math.max(6,Math.min(10,Qe*.72)),R=Math.max(6,Math.min(10,Qe*.74)),W=Math.max(6,Math.min(16,we*.12)),me=Math.max(3,we*.035),Re=Math.max(2,we*.02),_e=Math.max(18,m*(H/100)),T=Math.max(18,v*(H/100)),$=Z*1.15,le=R*1.15,ae=G==="range"?[vs(b),vs(k)]:G==="labels"?F.map(ee=>vs(ee.value)):[],Se=ae.length>0?Math.min(_e,Math.max(...ae.flatMap(ee=>Ss(ee)).map(ee=>Wd(ee,R)))+4):0,xe=Se>0?Re+Se+me:W,de=W+Qe*1.45,Fe=Math.max(xe+1,m-W),Ye=Math.max(1,Fe-xe),Ct=Math.max(1.5,Math.min(3.4,we*.045)),Me=Math.max(Ct+1,Math.min(we*.09,Ct*2)),se=F.length>1?Math.max(Ct*2,Math.min(14,Ye*.045)):0,P=Math.max(1,Ye-se*2),J=Math.max(1,Math.min(F.length,E)),ie=F.length>J,Oe=!d;let Ge=F.length;if(ie&&L){const ee=F.findIndex(he=>he.id===L);ee>=0&&(Ge=ee+1)}const Ve=Math.max(0,Ge-J),Ce=ie?F.slice(Ve,Ge):F,Le=ie&&Ve>0,xt=ie&&Ge<F.length,fn=ce?Ce.find(ee=>ee.id===ce):void 0,kn=()=>{Ve<=0||re(F[Ge-2].id)},Nt=()=>{if(Ge>=F.length)return;const ee=Ge;re(ee>=F.length-1?null:F[ee].id)},xr=b_(Ce.length,O),Sn=xr.map(ee=>Jm(Ce[ee],ee===Ce.length-1?"nu":`${ee+1}`)).map(ee=>Ss(ee)),sr=Sn.length>0?Math.max(1,...Sn.map(ee=>ee.length)):1,En=O!=="labels"?1/0:D==="bar"?P/Math.max(1,Ce.length):P/Math.max(1,Ce.length-1);let Kt=sr;for(;Kt>1&&Kt*$>En;)Kt-=1;const Ur=Sn.length>0?Math.min(T,Math.max(...Sn.flat().map(ee=>Wd(ee,Z)))+8):0,kr=Math.max(3,Z*.48),or=Math.max(4,Z*.6),zt=Math.max(kr+or+Z,kr+or+Ur+(Kt-1)*$),Qt=Math.max(1,v-de-zt),$e=de+Qt,Wt=ee=>{const he=Math.max(0,Math.min(1,(ee-b)/x));return de+(1-he)*Qt},Tn=ee=>Ce.length>1?xe+se+ee/(Ce.length-1)*P:xe+Ye/2,Pn=Ce.length>0?P/Ce.length:P,cr=Math.max(1,Pn*.62),Fn=ee=>Ce.length>1?xe+se+ee*Pn+Pn/2:xe+Ye/2,ur=ee=>D==="bar"?Fn(ee):Tn(ee),Mn=Math.max(3,Math.min(5,we*.035)),Zt=Ce.map((ee,he)=>({x:Tn(he),y:Wt(ee.value)})),ln=G==="labels"?v_(Ce.length):[],mn=(ee,he,We)=>{const nt=Ss(he);return u.jsxs("g",{children:[u.jsx("line",{className:"plot-axis-tick",x1:xe-kr,y1:We,x2:xe,y2:We}),nt.map((kt,Gn)=>{const sn=We+(Gn-(nt.length-1)/2)*le;return u.jsx("text",{className:"plot-y-axis-label",x:xe-me,y:sn,fontSize:R,textAnchor:"end",dominantBaseline:"middle",children:Zm(kt,R,_e)},Gn)})]},ee)},an=u.jsxs("div",{className:"control-plot",style:{width:"100%",height:"100%"},children:[u.jsxs("svg",{width:m,height:v,viewBox:`0 0 ${m} ${v}`,"aria-hidden":"true",children:[[.25,.5,.75].map(ee=>u.jsx("line",{className:"plot-grid-line",x1:xe,y1:de+ee*Qt,x2:Fe,y2:de+ee*Qt},ee)),u.jsx("line",{className:"plot-axis-line",x1:xe,y1:$e,x2:Fe,y2:$e}),u.jsx("line",{className:"plot-axis-line",x1:xe,y1:de,x2:xe,y2:$e}),G==="range"&&ae.map((ee,he)=>mn(`${ee}-${he}`,ee,he===0?$e:de)),G==="labels"&&ln.map(ee=>{const he=Ce[ee];return mn(`y-${he.id}`,vs(he.value),Wt(he.value))}),xr.map(ee=>{const he=Ce[ee],We=ur(ee),nt=$e+kr+or,kt=Jm(he,ee===Ce.length-1?"nu":`${ee+1}`),Gn=Ss(kt).slice(0,Kt);return u.jsxs("g",{children:[u.jsx("line",{className:"plot-axis-tick",x1:We,y1:$e,x2:We,y2:$e+kr}),Gn.map((sn,on)=>{const Sr=We+on*$;return u.jsx("text",{className:"plot-axis-tick-label",x:Sr,y:nt,fontSize:Z,textAnchor:"end",dominantBaseline:"middle",transform:`rotate(-90 ${Sr} ${nt})`,children:Zm(sn,Z,T)},on)})]},`x-${he.id}`)}),D==="bar"?Ce.map((ee,he)=>{const We=Ce.length>1?xe+se+he*Pn+(Pn-cr)/2:xe+(Ye-cr)/2,nt=!xt&&he===Ce.length-1,kt=ee.value===0&&b===0,Gn=Math.max(0,$e-Wt(ee.value)),sn=kt?Mn:Gn,on=$e-sn,Sr=Math.max(Gn,__),$n=$e-Sr;return u.jsxs("g",{children:[u.jsx("rect",{className:`plot-bar ${nt?"latest":""} ${kt?"zero":""}`,x:We,y:on,width:cr,height:sn}),u.jsx("rect",{ref:ne(ee.id),className:"plot-bar-hit",x:We,y:$n,width:cr,height:Sr,...Pe(ee.id)})]},ee.id)}):u.jsxs(u.Fragment,{children:[D==="line"&&Zt.length>1&&u.jsx("polyline",{className:"plot-line",points:Zt.map(ee=>`${ee.x},${ee.y}`).join(" ")}),Zt.map((ee,he)=>{const We=Ce[he],nt=!xt&&he===Zt.length-1;return u.jsxs("g",{children:[u.jsx("circle",{className:`plot-dot ${nt?"latest":""}`,cx:ee.x,cy:ee.y,r:nt?Me:Ct}),u.jsx("circle",{ref:ne(We.id),className:"plot-dot-hit",cx:ee.x,cy:ee.y,r:Math.max(Me,9),...Pe(We.id)})]},We.id)})]})]}),u.jsx("span",{className:"plot-name-label",style:{fontSize:Qe,left:xe+6,maxWidth:Math.max(20,m-xe-14-(Oe?68:0))},children:i.name}),Oe&&u.jsxs("div",{className:"plot-page-controls",children:[u.jsx("button",{type:"button",className:"plot-page-btn",disabled:!Le,onClick:kn,"aria-label":`${i.name}: vis ældre data`,children:u.jsx(Pt,{name:"chevronLeft",size:18})}),u.jsx("button",{type:"button",className:"plot-page-btn",disabled:!xt,onClick:Nt,"aria-label":`${i.name}: vis nyere data`,children:u.jsx(Pt,{name:"chevronRight",size:18})})]}),fn&&te&&u.jsx(p_,{anchorRect:te,timeText:h_(fn),valueText:`${i.name} ${vs(fn.value)}`})]});return h?u.jsx("div",{style:{width:o,height:s,position:"relative"},children:u.jsx("div",{style:{position:"absolute",left:"50%",top:"50%",width:m,height:v,transform:`translate(-50%, -50%) rotate(${h}deg)`},children:an})}):an}function w_(i,l){if(!l)return i;const o=i.trim().split(/\s+/).filter(Boolean);return u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",lineHeight:1.02,textAlign:"center",gap:"0.42em"},children:o.map((s,d)=>u.jsx("span",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[...s].map((h,_)=>u.jsx("span",{children:h},`${h}-${_}`))},`${s}-${d}`))})}function x_(i){const l={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},o=4;return i===0?{low:{...l,left:o,top:0,bottom:0},high:{...l,right:o,top:0,bottom:0}}:i===180?{low:{...l,right:o,top:0,bottom:0},high:{...l,left:o,top:0,bottom:0}}:i===90?{low:{...l,bottom:o,left:0,right:0},high:{...l,top:o,left:0,right:0}}:{low:{...l,top:o,left:0,right:0},high:{...l,bottom:o,left:0,right:0}}}function k_({name:i,vertical:l,rotation:o,color:s,fontSize:d,endFontSize:h,centerInset:_,lowLabel:m,highLabel:v,showEnds:b}){const k=b?x_(o):null;return u.jsxs("div",{style:{position:"absolute",inset:0,color:s},children:[u.jsx("div",{style:{position:"absolute",inset:0,..._,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:d,textAlign:"center",pointerEvents:"none"},children:w_(i,l)}),k&&u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{...k.low,fontWeight:800,fontSize:h},children:m}),u.jsx("div",{style:{...k.high,fontWeight:800,fontSize:h},children:v})]})]})}function Wh({name:i,rotation:l,width:o,height:s,value:d,showEnds:h=!1,fillColor:_="var(--red)",lowLabel:m="0",highLabel:v="100"}){const b=l===90||l===270,{fontSize:k,endFontSize:x,centerInset:E}=e_(i,o,s,b,h);let D,O;l===0?(D={left:0,top:0,bottom:0,width:`${d}%`},O={left:0,top:0}):l===180?(D={right:0,top:0,bottom:0,width:`${d}%`},O={right:0,top:0}):l===90?(D={left:0,right:0,bottom:0,height:`${d}%`},O={left:0,bottom:0}):(D={left:0,right:0,top:0,height:`${d}%`},O={left:0,top:0});const G=H=>u.jsx(k_,{name:i,vertical:b,rotation:l,color:H,fontSize:k,endFontSize:x,centerInset:E,lowLabel:m,highLabel:v,showEnds:h});return u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{position:"absolute",left:0,top:0,width:`${o}px`,height:`${s}px`},children:G("var(--red)")}),u.jsx("div",{style:{position:"absolute",background:_,overflow:"hidden",...D},children:u.jsx("div",{style:{position:"absolute",width:`${o}px`,height:`${s}px`,...O},children:G("var(--white)")})})]})}function S_({control:i,disabled:l,orientation:o,latestValue:s,onSlider:d,width:h,height:_}){const m=N.useRef(null),v=i.sliderMin??0,b=i.sliderMax??100,[k,x]=N.useState(()=>s===void 0?eh(i.sliderRecenter??"none"):th(s,v,b)),E=N.useRef(null),D=o;N.useEffect(()=>{s!==void 0&&(x(th(s,v,b)),E.current=s)},[s,v,b]);function O(L){const re=m.current;if(!re)return 0;const q=re.getBoundingClientRect();let ce;return D===0?ce=(L.clientX-q.left)/q.width:D===180?ce=1-(L.clientX-q.left)/q.width:D===90?ce=1-(L.clientY-q.top)/q.height:ce=(L.clientY-q.top)/q.height,Math.max(0,Math.min(1,ce))}function G(L){l||H(O(L))}function H(L){const re=Math.round(L*100),q=Math.round(v+(b-v)*L);x(re),q!==E.current&&(E.current=q,d(i.name,q))}function F(){const L=i.sliderRecenter??"none";l||L==="none"||H(eh(L)/100)}return u.jsx("div",{ref:m,className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",touchAction:"none"},onPointerDown:L=>{l||(L.preventDefault(),L.currentTarget.setPointerCapture(L.pointerId),G(L))},onPointerMove:L=>{L.buttons!==0&&G(L)},onPointerUp:F,onPointerCancel:F,onLostPointerCapture:F,children:u.jsx(Wh,{name:i.name,rotation:D,width:h,height:_,value:k,showEnds:!0,lowLabel:String(v),highLabel:String(b)})})}function eh(i){return i==="bottom"?0:i==="top"?100:i==="middle"?50:0}function th(i,l,o){return o===l?0:Math.max(0,Math.min(100,Math.round((i-l)/(o-l)*100)))}function nh(i,l,o){return Math.round(l+(o-l)*(i+1)/2)}function rh(i,l){return i==="bottom"?l?1:-1:i==="top"?l?-1:1:0}function lh(i){return{nx:rh(i.joystickXRecenter,!1),ny:rh(i.joystickYRecenter,!0)}}function Zh(i,l){const o=Math.min(i,l),s=Math.max(6,o*.16),d=Math.max(1,o/2-s-2);return{knobRadius:s,reach:d}}function Jh({control:i,width:l,height:o,pos:s,rotation:d=0,dragging:h=!1}){const{knobRadius:_,reach:m}=Zh(l,o),v=Math.max(7,Math.min(14,_*.62)),b=Math.max(7,Math.min(12,Math.min(l,o)*.1)),k=[{key:"xmax",value:i.joystickXMax??100,lx:1,ly:0},{key:"xmin",value:i.joystickXMin??-100,lx:-1,ly:0},{key:"ymax",value:i.joystickYMax??100,lx:0,ly:-1},{key:"ymin",value:i.joystickYMin??-100,lx:0,ly:1}];return u.jsxs("div",{className:"control-joystick",style:{width:"100%",height:"100%",position:"relative"},children:[u.jsx("div",{className:"joystick-oval",style:{position:"absolute",left:"50%",top:"50%",width:m*2,height:m*2,transform:"translate(-50%, -50%)"}}),k.map(x=>{const E=Ei(x.lx,x.ly,d);return u.jsx("span",{className:"joystick-edge-label",style:{position:"absolute",left:"50%",top:"50%",fontSize:b,transform:`translate(-50%, -50%) translate(${E.x*m}px, ${E.y*m}px) rotate(${d}deg)`},children:x.value},x.key)}),u.jsx("div",{className:"joystick-knob",style:{position:"absolute",left:"50%",top:"50%",width:_*2,height:_*2,fontSize:v,transform:`translate(calc(-50% + ${s.nx*m}px), calc(-50% + ${s.ny*m}px))`,transition:h?"none":"transform 0.12s ease-out"},children:u.jsx("span",{style:{display:"inline-block",transform:d?`rotate(${d}deg)`:void 0,whiteSpace:d===90||d===270?"nowrap":void 0},children:i.name})})]})}function E_({control:i,disabled:l,orientation:o,onJoystick:s,width:d,height:h}){const _=o,m=N.useRef(null),[v,b]=N.useState(()=>{const re=lh(i),q=Ei(re.nx,re.ny,_);return{nx:q.x,ny:q.y}}),k=N.useRef(!1),x=N.useRef(null),E=i.joystickXMin??-100,D=i.joystickXMax??100,O=i.joystickYMin??-100,G=i.joystickYMax??100;function H(re,q){const ce=Ei(re,q,vc(_)),ge=nh(ce.x,E,D),te=nh(-ce.y,O,G);(!x.current||x.current.x!==ge||x.current.y!==te)&&(x.current={x:ge,y:te},s(i.name,ge,te))}function F(re){const q=m.current;if(!q)return;const ce=q.getBoundingClientRect(),{reach:ge}=Zh(ce.width,ce.height);let te=(re.clientX-(ce.left+ce.width/2))/ge,pe=(re.clientY-(ce.top+ce.height/2))/ge;const ye=Math.hypot(te,pe);ye>1&&(te/=ye,pe/=ye),b({nx:te,ny:pe}),H(te,pe)}function L(){const re=i.joystickXRecenter??"middle",q=i.joystickYRecenter??"middle";if(re==="none"&&q==="none")return;const ce=Ei(v.nx,v.ny,vc(_)),ge=lh(i),te={x:re==="none"?ce.x:ge.nx,y:q==="none"?ce.y:ge.ny},pe=Ei(te.x,te.y,_),ye={nx:pe.x,ny:pe.y};k.current=!1,b(ye),H(ye.nx,ye.ny)}return u.jsx("div",{ref:m,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:re=>{l||(re.preventDefault(),re.currentTarget.setPointerCapture(re.pointerId),k.current=!0,F(re))},onPointerMove:re=>{l||!k.current||re.buttons===0||F(re)},onPointerUp:L,onPointerCancel:L,onLostPointerCapture:L,children:u.jsx(Jh,{control:i,width:d,height:h,pos:v,rotation:_,dragging:k.current})})}const T_=[{direction:"up",rotate:0},{direction:"right",rotate:90},{direction:"down",rotate:180},{direction:"left",rotate:270}],M_="M 34 30 L 34 15 Q 34 8 41 8 L 59 8 Q 66 8 66 15 L 66 30 L 50 46 L 34 30 Z",N_=.1,j_={up:"OP",down:"NED",left:"VENSTRE",right:"HØJRE"},R_={up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]},A_=[{pos:"up",x:50,y:23},{pos:"right",x:78,y:50},{pos:"down",x:50,y:77},{pos:"left",x:22,y:50}];function Zd(i,l){return Math.hypot(i,l)<N_?null:Math.abs(i)>=Math.abs(l)?i>0?"right":"left":l>0?"down":"up"}function C_(i,l){const[o,s]=R_[i],d=Ei(o,s,vc(l));return Zd(d.x,d.y)??i}function ep({control:i,active:l=null,rotation:o=0}){return u.jsx("div",{className:"control-dpad",style:{width:"100%",height:"100%"},children:u.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet",children:[T_.map(s=>u.jsx("path",{className:`dpad-arm ${l===s.direction?"active":""}`,transform:`rotate(${s.rotate} 50 50)`,d:M_},s.direction)),A_.map(s=>u.jsx("text",{className:`dpad-label ${l===s.pos?"active":""}`,x:s.x,y:s.y,textAnchor:"middle",dominantBaseline:"central",transform:o?`rotate(${o} ${s.x} ${s.y})`:void 0,children:j_[C_(s.pos,o)]},s.pos))]})})}function D_({control:i,disabled:l,orientation:o,onDpad:s}){const d=N.useRef(null),h=N.useRef(null),_=N.useRef(!1),[m,v]=N.useState(null);function b(D){const O=d.current;if(!O)return{screen:null,logical:null};const G=O.getBoundingClientRect(),H=Math.min(G.width,G.height)/2,F=(D.clientX-(G.left+G.width/2))/H,L=(D.clientY-(G.top+G.height/2))/H,re=Zd(F,L),q=Ei(F,L,vc(o)),ce=Zd(q.x,q.y);return{screen:re,logical:ce}}function k(D){const O=d.current;if(!O)return!1;const G=O.getBoundingClientRect(),H=(D.clientX-G.left)/G.width,F=(D.clientY-G.top)/G.height;return H>=0&&H<=1&&F>=0&&F<=1}function x(D){D.logical!==h.current&&(h.current&&s(i.name,h.current,!1),h.current=D.logical,D.logical&&s(i.name,D.logical,!0)),v(D.screen)}function E(){_.current=!1,x({screen:null,logical:null})}return u.jsx("div",{ref:d,style:{width:"100%",height:"100%",touchAction:"none"},onPointerDown:D=>{l||!k(D)||(D.preventDefault(),D.currentTarget.setPointerCapture(D.pointerId),_.current=!0,x(b(D)))},onPointerMove:D=>{l||!_.current||D.buttons===0||x(b(D))},onPointerUp:E,onPointerCancel:E,onLostPointerCapture:E,children:u.jsx(ep,{control:i,active:m,rotation:o})})}const O_={button:"Knapper",slider:"Slidere",toggle:"Toggleknapper",radar:"Radar",text:"Tekstfelter",joystick:"Joysticks",dpad:"Dpads",plot:"Grafer"},L_=["button","slider","toggle","radar","text","joystick","dpad","plot"];function B_({unplaced:i,onAdd:l,onClose:o}){const s=N.useMemo(()=>L_.filter(m=>i.some(v=>v.type===m)),[i]),[d,h]=N.useState(s[0]??"button"),_=i.filter(m=>m.type===d);return N.useEffect(()=>{s.length>0&&!s.includes(d)&&h(s[0])},[s,d]),u.jsxs(Ht,{title:"Tilføj kontrol",onClose:o,children:[s.length>1&&u.jsx("div",{className:"segmented add-modal-tabs",children:s.map(m=>u.jsx("button",{type:"button",className:d===m?"active":"",onClick:()=>h(m),children:O_[m]},m))}),u.jsx("div",{className:"add-lists",children:s.length===0?u.jsx("div",{className:"device-list-empty",children:"Alle kontroller er allerede placeret."}):_.map(m=>u.jsxs("button",{type:"button",className:"add-entry",onClick:()=>l(m.name),children:[u.jsx("span",{children:m.name}),u.jsx("span",{className:"iconbtn",children:u.jsx(Pt,{name:"plus",size:22})})]},m.name))})]})}function tp(i){const[l,o]=N.useState({w:0,h:0}),s=N.useRef(null),d=N.useRef(null);return N.useLayoutEffect(()=>{var v;const h=i.current;if(s.current===h)return;if((v=d.current)==null||v.disconnect(),d.current=null,s.current=h,!h){o(b=>b.w===0&&b.h===0?b:{w:0,h:0});return}const _=()=>{const b={w:h.clientWidth,h:h.clientHeight};o(k=>k.w===b.w&&k.h===b.h?k:b)};_();const m=new ResizeObserver(_);m.observe(h),d.current=m}),N.useEffect(()=>()=>{var h;(h=d.current)==null||h.disconnect(),d.current=null,s.current=null},[]),l}function Rs(i){return i.centerX2!==null&&i.centerY2!==null&&i.spanX!==null&&i.spanY!==null}const z_=4,U_=5;function q_(i){return i==="joystick"||i==="dpad"?{spanX:6,spanY:6}:i==="plot"?{spanX:7,spanY:4}:{spanX:z_,spanY:U_}}function Vd(i){if(!Rs(i))return null;const l=i.centerX2/2,o=i.centerY2/2;return{x0:l-i.spanX/2,x1:l+i.spanX/2,y0:o-i.spanY/2,y1:o+i.spanY/2}}function np(i,l,o=.02){return i.x0<l.x1-o&&l.x0<i.x1-o&&i.y0<l.y1-o&&l.y0<i.y1-o}function H_(i,l,o){const s=(o.cols-1)*2,d=(o.rows-1)*2,h=[];for(let _=l;_<=d-l;_+=2)for(let m=i;m<=s-i;m+=2)h.push({centerX2:m,centerY2:_});return h}function ih(i,l,o,s){const d=H_(i,l,s).filter(h=>{const _={x0:h.centerX2/2-i/2,x1:h.centerX2/2+i/2,y0:h.centerY2/2-l/2,y1:h.centerY2/2+l/2};return!o.some(m=>np(_,m))});return d.length===0?null:d[Math.floor(Math.random()*d.length)]}function V_(i,l){return(i-l.margin)/l.stepX}function I_(i,l){return(l.areaH-i-l.margin)/l.stepY}function Id(i,l,o,s,d,h){if(i.spanX===null||i.spanY===null||i.centerX2===null||i.centerY2===null)return i;if(l==="left"||l==="right"){const b=Math.round(V_(s,h));if(l==="right"){const D=Math.max(o+1,Math.min(h.cols-1,b))-o;return{...i,spanX:D,centerX2:o*2+D}}const k=Math.min(o-1,Math.max(0,b)),x=o-k;return{...i,spanX:x,centerX2:o*2-x}}const _=Math.round(I_(d,h));if(l==="top"){const k=Math.max(o+1,Math.min(h.rows-1,_))-o;return{...i,spanY:k,centerY2:o*2+k}}const m=Math.min(o-1,Math.max(0,_)),v=o-m;return{...i,spanY:v,centerY2:o*2-v}}function P_(){const i=oe(P=>P.layout),l=oe(P=>P.active),o=oe(P=>P.saveLayout),s=oe(P=>P.setEditMode),d=oe(P=>P.askConfirm),h=!!(l!=null&&l.canEdit),[_,m]=N.useState(()=>i.map(P=>({...P}))),[v,b]=N.useState(null),[k,x]=N.useState(!1),[E,D]=N.useState(null),[O,G]=N.useState(null),[H,F]=N.useState(null),[L,re]=N.useState(!1),[q,ce]=N.useState(!1),ge=N.useRef(null),te=N.useRef(null),pe=N.useRef(null),ye=tp(te),Be=ye.w>0&&ye.h>0,ne=Bh(ye.w,ye.h,l==null?void 0:l.gridCols,l==null?void 0:l.gridRows),Pe=N.useMemo(()=>Be?fg(ne):[],[ne,Be]),we=_.filter(Rs),Qe=_.filter(P=>!Rs(P)),Z=N.useMemo(()=>{const P=new Set;for(let J=0;J<we.length;J+=1)for(let ie=J+1;ie<we.length;ie+=1){const Oe=Vd(we[J]),Ge=Vd(we[ie]);Oe&&Ge&&np(Oe,Ge)&&(P.add(we[J].name),P.add(we[ie].name))}return P},[we]),R=Z.size>0,W=N.useMemo(()=>ah(_)!==ah(i),[_,i]),me=N.useMemo(()=>{if(!E||!O)return null;const P=_.find(Oe=>Oe.name===E);if(!P||P.spanX===null||P.spanY===null)return null;const J=Ld(O.cx,O.cy,P.spanX,P.spanY,ne),ie=ks({...P,centerX2:J.centerX2,centerY2:J.centerY2},ne);return ie?{name:P.name,rect:ie}:null},[_,E,O,ne]);function Re(P,J){m(ie=>ie.map(Oe=>Oe.name===P?J(Oe):Oe))}function _e(P){const J=te.current;if(!J)return{x:0,y:0};const ie=J.getBoundingClientRect(),Oe=J.clientWidth/ie.width,Ge=J.clientHeight/ie.height;return{x:Math.max(0,Math.min(J.clientWidth,(P.clientX-ie.left)*Oe)),y:Math.max(0,Math.min(J.clientHeight,(P.clientY-ie.top)*Ge))}}function T(P){var xt;const J=te.current;if(!J)return{cx:0,cy:0};const ie=J.getBoundingClientRect(),Oe=J.clientWidth/ie.width,Ge=J.clientHeight/ie.height,Ve=(xt=ge.current)==null?void 0:xt.getBoundingClientRect(),Ce=Ve?Math.max(Ve.left,Math.min(Ve.right,P.clientX)):P.clientX,Le=Ve?Math.max(Ve.top,Math.min(Ve.bottom,P.clientY)):P.clientY;return{cx:(Ce-ie.left)*Oe,cy:(Le-ie.top)*Ge}}function $(P,J){P.stopPropagation(),b(J.name);const ie=ks(J,ne);ie&&(D(J.name),G({cx:ie.cx,cy:ie.cy}),P.currentTarget.setPointerCapture(P.pointerId))}function le(P){const J=pe.current,ie=te.current;if(!J||!ie||!E)return!1;const Oe=_.find(Kt=>Kt.name===E),Ge=Oe?ks(Oe,ne):null;if(!Ge)return!1;const Ve=ie.getBoundingClientRect(),Ce=Ve.width/ie.clientWidth,Le=Ve.height/ie.clientHeight,xt=Ve.left+P.cx*Ce,fn=Ve.top+P.cy*Le,kn=Ge.width*Ce/2,Nt=Ge.height*Le/2,xr=xt-kn,In=xt+kn,Sn=fn-Nt,sr=fn+Nt,En=J.getBoundingClientRect();return xr<En.right&&En.left<In&&Sn<En.bottom&&En.top<sr}function ae(P){if(E){const J=T(P);re(le(J)),G(J);return}if(H){const{x:J,y:ie}=_e(P);Re(H.name,Oe=>{if(H.kind==="side")return Id(Oe,H.side,H.fixedWhole,J,ie,ne);const Ge=Id(Oe,H.sideX,H.fixedWholeX,J,ie,ne);return Id(Ge,H.sideY,H.fixedWholeY,J,ie,ne)})}}function Se(){if(E&&O)if(le(O))Ye(E);else{const P=_.find(J=>J.name===E);if(P&&P.spanX!==null&&P.spanY!==null){const J=Ld(O.cx,O.cy,P.spanX,P.spanY,ne);Re(E,ie=>({...ie,centerX2:J.centerX2,centerY2:J.centerY2}))}}D(null),G(null),F(null),re(!1)}function xe(P){return{leftWhole:(P.centerX2-P.spanX)/2,rightWhole:(P.centerX2+P.spanX)/2,bottomWhole:(P.centerY2-P.spanY)/2,topWhole:(P.centerY2+P.spanY)/2}}function de(P,J,ie){if(P.stopPropagation(),J.centerX2===null||J.centerY2===null||J.spanX===null||J.spanY===null)return;const{leftWhole:Oe,rightWhole:Ge,bottomWhole:Ve,topWhole:Ce}=xe(J),Le=ie==="right"?Oe:ie==="left"?Ge:ie==="top"?Ve:Ce;b(J.name),F({kind:"side",name:J.name,side:ie,fixedWhole:Le}),P.currentTarget.setPointerCapture(P.pointerId)}function Fe(P,J,ie,Oe){if(P.stopPropagation(),J.centerX2===null||J.centerY2===null||J.spanX===null||J.spanY===null)return;const{leftWhole:Ge,rightWhole:Ve,bottomWhole:Ce,topWhole:Le}=xe(J);b(J.name),F({kind:"corner",name:J.name,sideX:ie,sideY:Oe,fixedWholeX:ie==="right"?Ge:Ve,fixedWholeY:Oe==="top"?Ce:Le}),P.currentTarget.setPointerCapture(P.pointerId)}function Ye(P){Re(P,J=>({...J,centerX2:null,centerY2:null,spanX:null,spanY:null,rotation:0})),b(null)}function Ct(P){x(!1);const J=_.find(xt=>xt.name===P);if(!J)return;const{spanX:ie,spanY:Oe}=q_(J.type),Ge=we.map(Vd).filter(xt=>xt!==null);let Ve=ie,Ce=Oe,Le=ih(Ve,Ce,Ge,ne);for(;!Le&&(Ve>2||Ce>2);)Ve=Math.max(2,Ve-1),Ce=Math.max(2,Ce-1),Le=ih(Ve,Ce,Ge,ne);Le||(Ve=ie,Ce=Oe,Le=Ld(ne.areaW/2,ne.areaH/2,Ve,Ce,ne)),Re(P,()=>({...J,spanX:Ve,spanY:Ce,rotation:0,centerX2:Le.centerX2,centerY2:Le.centerY2})),b(P)}async function Me(){R||(ce(!0),await o(_),ce(!1))}function se(){if(!W){s(!1);return}d({title:"Kassér ændringer",message:"Vil du forlade redigering og kassere dine layout-ændringer?",confirmLabel:"Kassér",onConfirm:()=>s(!1)})}return u.jsxs("div",{className:"edit-view",ref:ge,children:[u.jsxs("div",{className:"edit-band edit-toolbar-band",children:[h&&u.jsx("button",{type:"button",className:"btn btn-outline edit-toolbar-btn",onClick:()=>x(!0),"aria-label":"Tilføj kontrol",children:"Tilføj"}),u.jsx("button",{ref:pe,type:"button",className:`btn btn-outline edit-toolbar-btn edit-trash ${L?"over":""} ${E?"dragging":""}`,disabled:!v,onClick:()=>v&&Ye(v),"aria-label":"Slet valgt element",title:"Vælg et element, og tryk her for at slette det - eller træk et element hertil",children:"Slet"})]}),u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:`controls-area ${E?"dragging":""}`,ref:te,style:{touchAction:"none"},onPointerMove:ae,onPointerUp:Se,onPointerDown:()=>b(null),children:Be&&u.jsxs(u.Fragment,{children:[u.jsx("svg",{width:ne.areaW,height:ne.areaH,style:{position:"absolute",inset:0,pointerEvents:"none"},children:Pe.map((P,J)=>u.jsx("circle",{cx:P.x,cy:P.y,r:2.5,fill:"rgba(198,80,78,0.45)"},J))}),me&&!L&&u.jsx("div",{className:"snap-preview",style:{left:me.rect.cx,top:me.rect.cy,width:me.rect.width,height:me.rect.height}}),we.map(P=>{const J=E===P.name&&O,ie=ks(P,ne);if(!ie)return null;const Oe=J?O.cx:ie.cx,Ge=J?O.cy:ie.cy,Ve=v===P.name,Ce={left:Oe,top:Ge,width:ie.width,height:ie.height,outline:Ve?"3px solid var(--text)":"none",outlineOffset:2,zIndex:Ve?2:1};return u.jsxs("div",{className:`control ${Z.has(P.name)?"colliding":""} ${J&&L?"control-deleting":""}`,style:Ce,onPointerDown:Le=>$(Le,P),children:[P.type==="button"?u.jsx("div",{className:"control-button",style:{width:"100%",height:"100%",display:"grid",placeItems:"center"},children:u.jsx(bc,{name:P.name,width:ie.width,height:ie.height,rotation:P.rotation})}):P.type==="toggle"?u.jsx("div",{className:"control-toggle on",style:{width:"100%",height:"100%"},children:u.jsx(bc,{name:P.name,width:ie.width,height:ie.height,rotation:P.rotation})}):P.type==="radar"?u.jsx(Xh,{control:P,pings:[],width:ie.width,height:ie.height,preview:!0}):P.type==="plot"?u.jsx(Qh,{control:P,points:[],width:ie.width,height:ie.height,preview:!0}):P.type==="text"?u.jsx(Yh,{message:P.name,width:ie.width,height:ie.height,rotation:P.rotation}):P.type==="joystick"?u.jsx(Jh,{control:P,width:ie.width,height:ie.height,pos:{nx:0,ny:0}}):P.type==="dpad"?u.jsx(ep,{control:P}):u.jsx("div",{className:"control-slider",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:u.jsx(Wh,{name:P.name,rotation:P.rotation,width:ie.width,height:ie.height,value:50,showEnds:!0,lowLabel:String(P.sliderMin??0),highLabel:String(P.sliderMax??100),fillColor:Z.has(P.name)?"var(--disabled)":"var(--red)"})}),Ve&&u.jsxs(u.Fragment,{children:[u.jsx("button",{type:"button",className:"edit-handle edit-handle-top","aria-label":"Ændr højde foroven",onPointerDown:Le=>de(Le,P,"top")}),u.jsx("button",{type:"button",className:"edit-handle edit-handle-bottom","aria-label":"Ændr højde forneden",onPointerDown:Le=>de(Le,P,"bottom")}),u.jsx("button",{type:"button",className:"edit-handle edit-handle-left","aria-label":"Ændr bredde til venstre",onPointerDown:Le=>de(Le,P,"left")}),u.jsx("button",{type:"button",className:"edit-handle edit-handle-right","aria-label":"Ændr bredde til højre",onPointerDown:Le=>de(Le,P,"right")}),u.jsx("button",{type:"button",className:"edit-corner-handle edit-corner-tl","aria-label":"Skalér fra øverste venstre hjørne",onPointerDown:Le=>Fe(Le,P,"left","top")}),u.jsx("button",{type:"button",className:"edit-corner-handle edit-corner-tr","aria-label":"Skalér fra øverste højre hjørne",onPointerDown:Le=>Fe(Le,P,"right","top")}),u.jsx("button",{type:"button",className:"edit-corner-handle edit-corner-bl","aria-label":"Skalér fra nederste venstre hjørne",onPointerDown:Le=>Fe(Le,P,"left","bottom")}),u.jsx("button",{type:"button",className:"edit-corner-handle edit-corner-br","aria-label":"Skalér fra nederste højre hjørne",onPointerDown:Le=>Fe(Le,P,"right","bottom")})]})]},P.name)}),q&&u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})]})})}),u.jsxs("div",{className:"edit-band edit-actions-band",children:[u.jsx("button",{className:"btn btn-outline",style:{flex:1},type:"button",onClick:se,disabled:q,children:"Annuller"}),u.jsx("button",{className:"btn btn-primary",style:{flex:1},type:"button",onClick:Me,disabled:R||q,children:q?"Gemmer...":"Gem"})]}),k&&u.jsx(B_,{unplaced:Qe,onAdd:Ct,onClose:()=>x(!1)})]})}function ah(i){return JSON.stringify(i.map(l=>({type:l.type,name:l.name,centerX2:l.centerX2,centerY2:l.centerY2,spanX:l.spanX,spanY:l.spanY,rotation:l.rotation})))}const sh=22;function F_(i,l){if(i==null||l==null)return null;const o=Math.abs(i),s=Math.abs(l);return o<sh&&s<sh?null:s>o?l>0?270:90:i>=0?0:180}function G_(){var l,o;if(typeof window>"u")return 0;const i=(o=(l=window.screen)==null?void 0:l.orientation)==null?void 0:o.angle;return typeof i=="number"?(i%360+360)%360:0}function $_(i){const l=(Math.round(i/90)*90%360+360)%360;return l===90||l===180||l===270?l:0}function Y_(i=!0){const[l,o]=N.useState(0);return N.useEffect(()=>{var E;if(!i||typeof window>"u"){o(0);return}let s=0,d=!1;const h=()=>{d=!0},_=D=>{if(!d){s!==0&&(s=0,o(0));return}const O=F_(D.beta,D.gamma);if(O==null)return;const G=$_(O-G_());G!==s&&(s=G,o(G))},m=(E=window.screen)==null?void 0:E.orientation;m==null||m.addEventListener("change",h),window.addEventListener("orientationchange",h);let v=!1;const b=()=>{v||(v=!0,window.addEventListener("deviceorientation",_))},k=DeviceOrientationEvent.requestPermission;let x=null;if(typeof k=="function"){const D=()=>{k().then(O=>{O==="granted"&&b()}).catch(()=>{}),x==null||x()};window.addEventListener("pointerdown",D,{once:!0}),x=()=>window.removeEventListener("pointerdown",D)}else b();return()=>{window.removeEventListener("deviceorientation",_),m==null||m.removeEventListener("change",h),window.removeEventListener("orientationchange",h),x==null||x(),o(0)}},[i]),l}function X_(){const i=oe(q=>q.layout),l=oe(q=>q.editMode),o=oe(q=>q.active),s=oe(q=>q.sliderValues),d=oe(q=>q.toggleValues),h=oe(q=>q.radarPings),_=oe(q=>q.textValues),m=oe(q=>q.plotSeries),v=oe(q=>q.toggleSideMenu),b=oe(q=>q.sendButton),k=oe(q=>q.sendSlider),x=oe(q=>q.sendToggle),E=oe(q=>q.sendJoystick),D=oe(q=>q.sendDpad),O=N.useRef(null),G=tp(O),H=Bh(G.w,G.h,o==null?void 0:o.gridCols,o==null?void 0:o.gridRows),F=G.w>0&&G.h>0,L=Y_(!l),re=i.filter(Rs);return u.jsxs("div",{className:"screen control-screen",children:[u.jsx(mf,{title:"Pico Kontrol Panel",onMenu:()=>v()}),l?u.jsx(P_,{}):u.jsx("div",{className:"controls-area-wrap",children:u.jsx("div",{className:"controls-area",ref:O,onContextMenu:q=>q.preventDefault(),onPointerDown:q=>{q.target===q.currentTarget&&q.preventDefault()},children:F?re.map(q=>{const ce=ks(q,H);return ce?u.jsx(t_,{control:q,rect:ce,disabled:!1,orientation:L,latestValue:q.type==="slider"?s[q.name]:void 0,toggleValue:q.type==="toggle"?d[q.name]:void 0,radarPings:q.type==="radar"?h[q.name]:void 0,textValue:q.type==="text"?_[q.name]:void 0,plotPoints:q.type==="plot"?m[q.name]:void 0,onButton:b,onSlider:k,onToggle:x,onJoystick:E,onDpad:D},q.name):null}):u.jsx("div",{className:"overlay",children:u.jsx("div",{className:"spinner"})})})})]})}const K_="",oh="",ch="",ki="";function bs(i){return new Promise(l=>setTimeout(l,i))}class Q_{constructor(l){this.transport=l}async interrupt(){await this.transport.write(ch),await bs(80),await this.transport.write(ch)}async friendlyRepl(){await this.transport.write(oh)}async softReset(){await this.transport.write(ki)}async stop(){await this.interrupt(),await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(`try:
    ble.shutdown()
except Exception:
    pass
`).catch(()=>{})}async runFile(l,o){await this.interrupt(),await this.waitForFriendlyPrompt().catch(async()=>{await this.friendlyRepl().catch(()=>{}),await bs(180)}),await bs(120),o==null||o(),await this.transport.writeLine(`import builtins as _pkp_builtins; exec(_pkp_builtins.open(${JSON.stringify(l)}).read())`)}async sendFriendlyLine(l){await this.friendlyRepl().catch(()=>{}),await this.transport.writeLine(l)}async sendProgramInput(l){await this.transport.writeLine(l)}async enterRawRepl(l=2500){if(await this.interrupt(),await bs(80),await this.transport.write(`\r
`),await bs(40),!(await this.collectUntil(async()=>{await this.transport.write(K_)},s=>s.includes("raw REPL")||s.includes("raw REPL; CTRL-B to exit"),l)).includes("raw REPL"))throw new Error("Kunne ikke skifte til MicroPython raw REPL.")}async exec(l,o=6e3){await this.enterRawRepl();const s=await this.collectUntil(async()=>{await this.transport.write(l),l.endsWith(`
`)||await this.transport.write(`
`),await this.transport.write(ki)},d=>d.includes(`${ki}${ki}`)||d.includes(`${ki}>`),o);return await this.friendlyRepl().catch(()=>{}),W_(s)}collectUntil(l,o,s){return new Promise((d,h)=>{let _="",m=null;const v=setTimeout(()=>{m==null||m(),h(new Error("Timeout ved USB REPL kommando."))},s);m=this.transport.addDataListener(b=>{_+=b,o(_)&&(clearTimeout(v),m==null||m(),d(_))}),l().catch(b=>{clearTimeout(v),m==null||m(),h(b instanceof Error?b:new Error("USB REPL kommando fejlede."))})})}async waitForFriendlyPrompt(l=1600){await this.collectUntil(async()=>{await this.transport.write(oh)},o=>/(^|\r?\n)>>> ?$/.test(o),l)}}function W_(i){const l=i.indexOf("OK"),o=i.indexOf(ki,l>=0?l:0),s=o>=0?i.indexOf(ki,o+1):-1;if(l<0||o<0)return{output:i.trim(),error:"",raw:i};const d=i.slice(l+2,o).replace(/^\r?\n/,"").trimEnd(),h=s>=0?i.slice(o+1,s).trim():"";return{output:d,error:h,raw:i}}const Z_=[{version:"MicroPython v1.28.0",date:"2026-04-06",stamp:"20260406",tag:"v1.28.0"},{version:"MicroPython v1.27.0",date:"2025-12-09",stamp:"20251209",tag:"v1.27.0"},{version:"MicroPython v1.26.1",date:"2025-09-11",stamp:"20250911",tag:"v1.26.1"},{version:"MicroPython v1.26.0",date:"2025-08-09",stamp:"20250809",tag:"v1.26.0"},{version:"MicroPython v1.25.0",date:"2025-04-15",stamp:"20250415",tag:"v1.25.0"},{version:"MicroPython v1.24.1",date:"2024-11-29",stamp:"20241129",tag:"v1.24.1"},{version:"MicroPython v1.24.0",date:"2024-10-25",stamp:"20241025",tag:"v1.24.0"},{version:"MicroPython v1.23.0",date:"2024-06-02",stamp:"20240602",tag:"v1.23.0"},{version:"MicroPython v1.22.2",date:"2024-02-22",stamp:"20240222",tag:"v1.22.2"},{version:"MicroPython v1.22.1",date:"2024-01-05",stamp:"20240105",tag:"v1.22.1"}],J_=[{board:"Raspberry Pi Pico",firmwareName:"RPI_PICO"},{board:"Raspberry Pi Pico W",firmwareName:"RPI_PICO_W"}],$l=J_.flatMap(({board:i,firmwareName:l})=>Z_.map(({version:o,date:s,stamp:d,tag:h})=>{const _=`${l}-${d}-${h}.uf2`;return{board:i,version:o,date:s,fileName:_,url:`https://micropython.org/resources/firmware/${_}`}})),Pd=512,Fd=`import builtins as _pkp_builtins
`;function al(i){return JSON.stringify(i)}function ev(i){return`bytes.fromhex(${JSON.stringify([...i].map(l=>l.toString(16).padStart(2,"0")).join(""))})`}function tv(i,l){return`${i==="/"?"":i.replace(/\/$/,"")}/${l}`}class nv{constructor(l){this.repl=l}async list(l="/"){const o=`
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
`,s=await this.repl.exec(o);if(s.error)throw new Error(s.error);return s.output.split(/\r?\n/).map(d=>d.trim()).filter(Boolean).map(d=>{const[h,_,m]=d.split("	"),v=_==="dir"||_==="file"?_:"unknown",b=parseInt(m??"",10);return{name:h,path:tv(l,h),type:v,...Number.isFinite(b)&&b>=0?{size:b}:{}}})}async readText(l){const o=`
import sys
${Fd}with _pkp_builtins.open(${al(l)}, 'rb') as f:
    while True:
        b = f.read(${Pd})
        if not b:
            break
        print(b.hex())
`,s=await this.repl.exec(o,1e4);if(s.error)throw new Error(s.error);const d=s.output.replace(/\s+/g,"");return new TextDecoder().decode(rv(d))}async writeText(l,o,s){const d=new TextEncoder().encode(o);if(s==null||s(5,"Klargør fil..."),await this.repl.exec(`${Fd}_pkp_builtins.open(${al(l)}, 'wb').close()`),d.length===0){s==null||s(100,"Gemt på Pico");return}for(let h=0;h<d.length;h+=Pd){const _=d.slice(h,h+Pd),m=`
${Fd}with _pkp_builtins.open(${al(l)}, 'ab') as f:
    f.write(${ev(_)})
`,v=await this.repl.exec(m,1e4);if(v.error)throw new Error(v.error);const b=Math.min(h+_.length,d.length);s==null||s(10+Math.round(b/d.length*85),`Gemmer ${b}/${d.length} bytes...`)}s==null||s(100,"Gemt på Pico")}async replaceTextSafely(l,o,s,d={}){const h=`${l}.tmp`;if(await this.writeText(h,o,(v,b)=>s==null?void 0:s(Math.min(70,v*.7),b)),s==null||s(78,"Verificerer fil..."),await this.readText(h)!==o)throw await this.delete(h).catch(()=>{}),new Error(`Verificering fejlede for ${l}.`);s==null||s(88,"Udskifter fil...");let m=!!d.createBackup;if(m){const v=await this.readText(l).catch(()=>null);m=v!==null&&v!==o}if(m){const v=await this.nextBackupPath(l).catch(()=>`${l}.backup`);await this.rename(l,v).catch(()=>{})}else await this.delete(l).catch(()=>{});await this.rename(h,l),s==null||s(100,"Installeret på Pico")}async delete(l){const o=await this.repl.exec(`
import os
os.remove(${al(l)})
`);if(o.error)throw new Error(o.error)}async nextBackupPath(l){const o=await this.list("/"),s=new Set(o.map(x=>x.path.toLowerCase())),d=l.replace(/\\/g,"/"),h=d.lastIndexOf("/"),_=h>=0?d.slice(0,h+1):"/",m=h>=0?d.slice(h+1):d.replace(/^\/+/,""),v=m.lastIndexOf("."),b=v>0?m.slice(0,v):m,k=v>0?m.slice(v):"";for(let x=1;x<1e3;x+=1){const E=`${_}${b}_backup${x}${k}`;if(!s.has(E.toLowerCase()))return E}return`${_}${b}_backup${Date.now()}${k}`}async rename(l,o){const s=await this.repl.exec(`
import os
os.rename(${al(l)}, ${al(o)})
`);if(s.error)throw new Error(s.error)}}function rv(i){const l=new Uint8Array(Math.floor(i.length/2));for(let o=0;o<l.length;o+=1)l[o]=parseInt(i.slice(o*2,o*2+2),16);return l}const lv=`from machine import Pin                    # Giver adgang til pins på Pico W, fx LED'en\r
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
`,iv=`import ubluetooth\r
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
# Retry budget for a "secure" (acknowledged) send - see _send_secure and the\r
# doc's "Verified send" section. This blocks main.py's own loop rather than a\r
# UI a student is staring at, so it can afford to be more patient than a\r
# per-attempt handshake step would need to be; real BLE jitter (OS scheduling,\r
# background-tab throttling) is why HANDSHAKE_TIMEOUT-style waits elsewhere in\r
# this protocol are already generous rather than aggressive.\r
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
        # ---- Verified send ("vsend,<id>,<payload>" / "ack:vsend,<id>"; see\r
        # the doc's "Verified send" section). Used symmetrically: this device\r
        # is a sender (secure=True on send_text/etc.) and a receiver (acked\r
        # button/toggle commands from the app), each with its own id state.\r
        # _in_irq is not connection-scoped (not reset in _reset_protocol_state\r
        # - see _ble_irq's own try/finally instead).\r
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
        # Marks the whole synchronous call chain below - including\r
        # on_connect/on_button/on_slider/on_toggle/on_joystick/on_dpad, all\r
        # invoked from here - as "inside the BLE callback". A secure=True\r
        # send blocks polling for an ack that can only arrive via another\r
        # call to this same callback, which can't happen while this one is\r
        # still on the stack; _send_secure checks this flag to fail fast\r
        # with a friendly message instead of always timing out silently.\r
        # See the doc's "Verified send" section.\r
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
        if msg.startswith("ack:vsend,"):\r
            # An ack for one of THIS device's own secure sends (see\r
            # _send_secure). Independent of the vsend branch below, which is\r
            # this device acting as a RECEIVER of the app's secure sends.\r
            id_str = msg[len("ack:vsend,"):]\r
            if id_str.isdigit():\r
                self._vsend_ack_id = int(id_str)\r
            return\r
\r
        if msg.startswith("vsend,"):\r
            # A secure send FROM the app (e.g. an acked button/toggle\r
            # command). Ack immediately - even a duplicate - then dispatch\r
            # the inner payload exactly like an ordinary line, skipping it\r
            # only if it's a retry of the id already processed (see the\r
            # doc's "Verified send" section for why one last-processed id is\r
            # enough: the sender never has more than one vsend outstanding\r
            # per direction at a time).\r
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
        """Blocks the calling code until the app confirms it received \`line\`,\r
        or every attempt is exhausted; returns True/False. See send_text's\r
        docstring and the doc's "Verified send" section.\r
\r
        Only safe to call from the main loop. on_connect/on_button/on_slider/\r
        on_toggle/on_joystick/on_dpad all run inside the BLE callback itself\r
        (see _ble_irq), which can't receive the ack this polls for while it's\r
        still running - calling from there always fails fast below instead of\r
        silently spinning through the whole timeout budget.\r
        """\r
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
        """Send one radar telemetry sample to the app: radar,<NAME>,<ANGLE>,<DISTANCE_CM>.\r
        secure=True waits for the app to confirm receipt - see send_text's\r
        docstring. Avoid it on a fast-repeating sweep: it blocks the main loop\r
        briefly on every call, and a sweep supersedes its own old readings\r
        anyway."""\r
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
        """Send current toggle state to the app: toggle_state,<NAME>,<0|1>.\r
        secure=True waits for the app to confirm receipt - see send_text's docstring."""\r
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
        """Send current slider state to the app: slider_state,<NAME>,<VALUE>.\r
        secure=True waits for the app to confirm receipt - see send_text's docstring."""\r
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
        """Appends one sample to a plot control's history (never coalesced,\r
        unlike send_text/send_radar/send_toggle_state - see the doc). "\\\\n" in\r
        label becomes a line break in the app's axis label (up to 3 lines).\r
        secure=True waits for the app to confirm receipt - see send_text's\r
        docstring. Do NOT use it in a bulk-history resend loop (e.g. the\r
        Graphs example's reconnect resend): waiting for confirmation on every\r
        one of e.g. 100 old points would make the resend far slower for no\r
        benefit, since a lost old point isn't worth retrying like a live\r
        alert would be."""\r
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
        """Clears a plot control's history in the app: plot_clear,<NAME>.\r
        secure=True waits for the app to confirm receipt - see send_text's docstring."""\r
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
        """Sends text,<NAME>,<MESSAGE>. "\\\\n" in message becomes a line break.\r
\r
        secure=True blocks the main loop until the app confirms receipt (a\r
        few retries with a short wait each - see the doc's "Verified send"\r
        section) instead of firing-and-forgetting, and returns True/False.\r
        Only call this from the main loop - never from on_connect/on_button/\r
        on_slider/on_toggle/on_joystick/on_dpad. Those callbacks run inside\r
        the BLE callback itself, which can't deliver the confirmation this\r
        waits for while it's still running; calling it from there always\r
        fails fast with a printed warning instead of hanging."""\r
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
`,av=`from machine import Pin, time_pulse_us\r
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
        return cms`,sv=`import array, time\r
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
`,ov=`from machine import Pin\r
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
`,cv=`from machine import Pin                    # Giver adgang til pins på Pico W, fx LED'en\r
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
`,uv=`from machine import Pin\r
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
`,dv=`from machine import Pin\r
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
`,fv=`# PicoFly.py
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
`,mv=`import machine\r
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
        self.initPCA()`,hv=`from machine import Pin\r
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
`,pv=`from machine import Pin
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
`,gv=`from machine import Pin, PWM, ADC\r
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
`,_v=`from machine import Pin\r
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
`,ca=[{id:"program:send-text",path:"/main.py",label:"Send tekst (main.py)",description:"Startprogram med kun et tekstfelt, hvor Picoen sender beskeder til kontrolpanelet.",kind:"program",difficulty:"Nem",content:pv},{id:"program:neopixel-led",path:"/main.py",label:"NeoPixel lys (main.py)",description:"Startprogram til NeoPixel med hold-knap og lysstyrke-slider.",kind:"program",difficulty:"Nem",content:dv},{id:"program:tank-control",path:"/main.py",label:"Robotbil med tankstyring (main.py)",description:"Startprogram til robotbil med to motor-slidere.",kind:"program",difficulty:"Mellem",content:_v},{id:"program:dpad-control",path:"/main.py",label:"Robotbil med D-pad (main.py)",description:"Startprogram til robotbil styret med fire retningsknapper og fart-slider.",kind:"program",difficulty:"Mellem",content:ov},{id:"program:joystick-control",path:"/main.py",label:"Robotbil med joystick (main.py)",description:"Startprogram til robotbil styret med joystick og fart-slider.",kind:"program",difficulty:"Mellem",content:uv},{id:"program:radar-control",path:"/main.py",label:"Radar med afstandssensor (main.py)",description:"Startprogram til radar med servo, afstandssensor og scan-toggle.",kind:"program",difficulty:"Svær",content:hv},{id:"program:api-weather",path:"/main.py",label:"Vejr fra internettet (main.py)",description:"Startprogram der henter vejr fra et API over Wi-Fi og viser det i tekstfelter. Husk at skrive dit Wi-Fi navn og kodeord ind i main.py.",kind:"program",difficulty:"Svær",content:lv},{id:"program:graphs",path:"/main.py",label:"Vejrgrafer fra internettet (main.py)",description:"Startprogram der henter vejr fra et API og tegner temperatur og nedbør som grafer over tid. Husk at skrive dit Wi-Fi navn og kodeord ind i main.py.",kind:"program",difficulty:"Svær",content:cv},{id:"program:smart-home",path:"/main.py",label:"SmartHome alarmstation (main.py)",description:"Startprogram til alarmstation med dør-servo, keypad, PIR, vandsensor, buzzer og NeoPixel.",kind:"program",difficulty:"Svær",content:gv},{id:"library:pico-bluetooth",path:"/PicoBluetooth.py",label:"PicoBluetooth.py",description:"Bluetooth-biblioteket der får Picoen til at tale med appen.",kind:"library",content:iv},{id:"library:pico-robotics",path:"/PicoRobotics.py",label:"PicoRobotics.py",description:"Bibliotek til Kitronik Pico Robotics Board.",kind:"library",content:mv},{id:"library:pico-fly",path:"/PicoFly.py",label:"PicoFly.py",description:"Bibliotek til PicoFly-board med motorer og servoer.",kind:"library",content:fv},{id:"library:hcsr04",path:"/hcsr04.py",label:"hcsr04.py",description:"Bibliotek til HC-SR04 ultralyds-afstandssensor.",kind:"library",content:av},{id:"library:neopixel",path:"/neopixel.py",label:"neopixel.py",description:"Bibliotek til NeoPixel LED-strips og LED-ringe.",kind:"library",content:sv}],vv=11914;function bv(){return typeof navigator<"u"&&"serial"in navigator&&!!navigator.serial}function yv(){return bv()?{supported:!0,message:"USB-udvikling er tilgængelig i denne browser."}:{supported:!1,message:"USB-udvikling kræver en computer med Chrome, Edge eller Chromebook."}}class wv{constructor(l={}){be(this,"port",null);be(this,"reader",null);be(this,"writer",null);be(this,"readLoopDone",null);be(this,"readLoopActive",!1);be(this,"disconnecting",!1);be(this,"buffer","");be(this,"events");be(this,"dataListeners",new Set);this.events=l}get connected(){return!!this.port&&!!this.writer}get info(){var l;return((l=this.port)==null?void 0:l.getInfo())??null}async requestAndConnect(){if(!navigator.serial)throw new Error("Web Serial er ikke tilgængelig i denne browser.");const l=await navigator.serial.requestPort({filters:[{usbVendorId:vv}]});await this.openPort(l)}async connectKnownPort(l){await this.openPort(l)}async disconnect(){var v,b;const l=this.connected||!!this.port||!!this.reader,o=this.port,s=this.reader,d=this.writer,h=this.readLoopDone,_=s==null?void 0:s.closed.catch(()=>{}),m=d==null?void 0:d.closed.catch(()=>{});this.disconnecting=!0,this.readLoopActive=!1;try{await(s==null?void 0:s.cancel())}catch{}h&&await h.catch(()=>{}),await _;try{s==null||s.releaseLock()}catch{}this.reader===s&&(this.reader=null);try{await(d==null?void 0:d.close()),await m}catch{try{await(d==null?void 0:d.abort("disconnect"))}catch{}}try{d==null||d.releaseLock()}catch{}this.writer===d&&(this.writer=null),o&&await o.close(),this.port===o&&(this.port=null),this.buffer="",this.readLoopDone===h&&(this.readLoopDone=null),this.disconnecting=!1,l&&((b=(v=this.events).onDisconnect)==null||b.call(v))}async write(l){if(!this.writer)throw new Error("Ingen USB-forbindelse.");await this.writer.write(new TextEncoder().encode(l))}async writeLine(l){await this.write(`${l}\r
`)}addDataListener(l){return this.dataListeners.add(l),()=>this.dataListeners.delete(l)}async openPort(l){var s,d,h;if(await this.disconnect().catch(()=>{}),await l.open({baudRate:115200,bufferSize:4096}),this.port=l,this.writer=((s=l.writable)==null?void 0:s.getWriter())??null,!this.writer||!l.readable)throw new Error("USB-porten kunne ikke åbnes til læsning og skrivning.");const o=l.getInfo();(h=(d=this.events).onLog)==null||h.call(d,"success",`USB-forbindelse oprettet (${xv(o)}).`),this.readLoopDone=this.startReadLoop(l)}async startReadLoop(l){var d,h,_;this.readLoopActive=!0;const o=new TextDecoder;this.reader=((d=l.readable)==null?void 0:d.getReader())??null;const s=this.reader;if(s)try{for(;this.readLoopActive;){const{value:m,done:v}=await s.read();if(v)break;m&&this.consumeText(o.decode(m,{stream:!0}))}}catch(m){this.readLoopActive&&((_=(h=this.events).onLog)==null||_.call(h,"error",m instanceof Error?m.message:"USB-læsning stoppede."))}finally{try{s.releaseLock()}catch{}this.reader===s&&(this.reader=null),this.readLoopActive&&!this.disconnecting&&this.port===l&&this.closeAfterUnexpectedReadEnd(l)}}async closeAfterUnexpectedReadEnd(l){var h,_;const o=this.connected||this.port===l;this.disconnecting=!0,this.readLoopActive=!1;const s=this.writer,d=s==null?void 0:s.closed.catch(()=>{});try{await(s==null?void 0:s.close()),await d}catch{try{await(s==null?void 0:s.abort("disconnect"))}catch{}}try{s==null||s.releaseLock()}catch{}this.writer===s&&(this.writer=null);try{await l.close()}catch{}this.port===l&&(this.port=null),this.buffer="",this.readLoopDone=null,this.disconnecting=!1,o&&((_=(h=this.events).onDisconnect)==null||_.call(h))}consumeText(l){var o,s,d,h;(s=(o=this.events).onData)==null||s.call(o,l);for(const _ of this.dataListeners)_(l);for(this.buffer+=l;this.buffer.includes(`
`);){const _=this.buffer.indexOf(`
`),m=this.buffer.slice(0,_).replace(/\r$/,"");this.buffer=this.buffer.slice(_+1),(h=(d=this.events).onLine)==null||h.call(d,m)}}}function xv(i){const l=i.usbVendorId!==void 0?`VID ${i.usbVendorId.toString(16).padStart(4,"0")}`:"ukendt VID",o=i.usbProductId!==void 0?`PID ${i.usbProductId.toString(16).padStart(4,"0")}`:"ukendt PID";return`${l}, ${o}`}const rp=15e3,uh=64*1024,dh=1e5,lp=new URL("/micropython/micropython.mjs",window.location.origin).toString(),kv=64*1024,fh=8;function ip(){return typeof SharedArrayBuffer<"u"&&globalThis.crossOriginIsolated===!0}function Sv(){return ip()?new SharedArrayBuffer(kv):null}function Ev(i,l){const o=new Int32Array(i,0,2),s=new Uint8Array(i),d=i.byteLength-fh,h=new TextEncoder().encode(l+`
`);let _=Atomics.load(o,0);for(const m of h)s[fh+_%d]=m,_+=1;Atomics.store(o,0,_),Atomics.notify(o,0)}const Tv=new Set(["bluetooth","machine","network","PicoRobotics","rp2","ubluetooth"]);class Mv{constructor(){be(this,"worker",null);be(this,"pending",null);be(this,"nextId",0)}send(l,o={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython-terminalen er optaget. Stop den, eller vent på at kommandoen bliver færdig.",timedOut:!1,unavailable:!1});const s=++this.nextId,d=o.timeoutMs??rp,h=this.ensureWorker();return new Promise(_=>{const m=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython-terminalen stoppede, fordi kommandoen tog for lang tid. Tjek for uendelige løkker.",timedOut:!0,unavailable:!1}),this.restartWorker()},d);this.pending={id:s,timer:m,onOutput:o.onOutput,resolve:_},h.postMessage({type:"run",id:s,code:jv(l),runtimeUrl:lp})})}reset(){this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),this.restartWorker()}dispose(){var l;this.finish({ok:!1,output:"",error:"",timedOut:!1,unavailable:!1}),(l=this.worker)==null||l.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const l=new Worker(new URL(""+new URL("offlineMicroPython.worker-B_-Tbi7X.js",import.meta.url).href,import.meta.url),{type:"module"});return l.onmessage=o=>this.handleMessage(o.data),l.onerror=o=>{this.finish({ok:!1,output:"",error:o.message||"Browser-MicroPython-terminalen fejlede i browser-worker.",timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=l,l}handleMessage(l){var s;const o=this.pending;if(!(!o||l.id!==o.id||l.type==="ready")){if(l.type==="stdout"){(s=o.onOutput)==null||s.call(o,l.text);return}if(l.type!=="stdin-wait"){if(l.type==="unavailable"){this.finish({ok:!1,output:"",error:l.error,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:l.ok,output:l.output,error:l.error,timedOut:!1,unavailable:!1})}}}finish(l){const o=this.pending;o&&(window.clearTimeout(o.timer),this.pending=null,o.resolve(l))}restartWorker(){var l;(l=this.worker)==null||l.terminate(),this.worker=null}}class Nv{constructor(){be(this,"worker",null);be(this,"pending",null);be(this,"nextId",0);be(this,"stdinSab",null)}run(l,o={}){if(this.pending)return Promise.resolve({ok:!1,output:"",error:"Browser-MicroPython kører allerede kode. Stop den først.",issues:[],timedOut:!1,unavailable:!1});const s=typeof o=="number"?o:o.timeoutMs===null?null:o.timeoutMs??rp,d=typeof o=="number"?void 0:o.onOutput,h=typeof o=="number"?void 0:o.onWaitingForInput,_=typeof o=="number"?void 0:o.signal,m=Jd(l,{allowInput:!0});if(m.some(x=>x.level==="error"))return Promise.resolve({ok:!1,output:"",error:"",issues:m,timedOut:!1,unavailable:!1});const v=++this.nextId,b=this.ensureWorker(),k=Sv();return this.stdinSab=k,new Promise(x=>{const E=H=>this.finish(H),D=()=>{this.restartWorker(),E({ok:!1,output:"",error:"",issues:m,timedOut:!1,unavailable:!1})},O=s===null?null:window.setTimeout(()=>{E({ok:!1,output:"",error:"Browser-MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:m,timedOut:!0,unavailable:!1}),this.restartWorker()},s);if(this.pending={id:v,timer:O,timeoutMs:s,issues:m,onOutput:d,onWaitingForInput:h,signal:_,abort:D,resolve:x},_!=null&&_.aborted){D();return}_==null||_.addEventListener("abort",D,{once:!0});const G={type:"run",id:v,code:l,runtimeUrl:lp,interactive:!0,sab:k??void 0};b.postMessage(G)})}sendInput(l){const o=this.pending;!o||!this.stdinSab||(this.refreshTimeout(o),Ev(this.stdinSab,l))}stop(){const l=this.pending;l&&(this.restartWorker(),this.finish({ok:!1,output:"",error:"Browser-MicroPython blev stoppet.",issues:l.issues,timedOut:!1,unavailable:!1}))}dispose(){var l;this.finish({ok:!1,output:"",error:"",issues:[],timedOut:!1,unavailable:!1}),(l=this.worker)==null||l.terminate(),this.worker=null}ensureWorker(){if(this.worker)return this.worker;const l=new Worker(new URL(""+new URL("offlineMicroPython.worker-B_-Tbi7X.js",import.meta.url).href,import.meta.url),{type:"module"});return l.onmessage=o=>this.handleMessage(o.data),l.onerror=o=>{const s=this.pending;this.finish({ok:!1,output:"",error:o.message||"Offline MicroPython fejlede i browser-worker.",issues:(s==null?void 0:s.issues)??[],timedOut:!1,unavailable:!1}),this.restartWorker()},this.worker=l,l}handleMessage(l){var s,d;const o=this.pending;if(!(!o||l.id!==o.id||l.type==="ready")){if(l.type==="stdout"){this.refreshTimeout(o),(s=o.onOutput)==null||s.call(o,l.text);return}if(l.type==="stdin-wait"){l.waiting&&this.refreshTimeout(o),(d=o.onWaitingForInput)==null||d.call(o,l.waiting);return}if(l.type==="unavailable"){this.finish({ok:!1,output:"",error:l.error,issues:o.issues,timedOut:!1,unavailable:!0}),this.restartWorker();return}this.finish({ok:l.ok,output:l.output,error:l.error,issues:o.issues,timedOut:!1,unavailable:!1}),this.restartWorker()}}finish(l){var s,d;const o=this.pending;o&&(o.timer!==null&&window.clearTimeout(o.timer),(s=o.signal)==null||s.removeEventListener("abort",o.abort),this.pending=null,(d=o.onWaitingForInput)==null||d.call(o,!1),o.resolve(l))}refreshTimeout(l){l.timeoutMs!==null&&(l.timer!==null&&window.clearTimeout(l.timer),l.timer=window.setTimeout(()=>{this.finish({ok:!1,output:"",error:"Browser-MicroPython stoppede, fordi koden tog for lang tid. Tjek for uendelige løkker.",issues:l.issues,timedOut:!0,unavailable:!1}),this.restartWorker()},l.timeoutMs))}restartWorker(){var l;(l=this.worker)==null||l.terminate(),this.worker=null,this.stdinSab=null}}function jv(i){const l=JSON.stringify(i);return["try:",`    __pico_repl_value = eval(${l})`,"    if __pico_repl_value is not None:","        print(repr(__pico_repl_value))","except SyntaxError:",`    exec(${l})`,"finally:","    try:","        del __pico_repl_value","    except Exception:","        pass"].join(`
`)}function Jd(i,l={}){const o=[],s=new Blob([i]).size;s>uh&&o.push({level:"error",text:`Koden er ${s} bytes. Offline MicroPython kører kun små programmer op til ${uh} bytes.`});const d=i.split(/\r?\n/);for(let h=0;h<d.length;h+=1){const _=h+1,m=yc(d[h]).trim();if(!m)continue;const v=Av(m);v&&Tv.has(v)&&o.push({level:"error",line:_,text:`${v} virker kun på Picoen. Forbind en Pico for at køre denne kode.`}),!l.allowInput&&Rv(d[h])&&o.push({level:"error",line:_,text:"input() virker i hele programmer. Skriv programmet i editoren og tryk Kør, eller kør filen på Pico via USB."});const b=m.match(/\brange\(\s*(-?\d+)\s*(?:,\s*(-?\d+)\s*)?(?:,\s*(-?\d+)\s*)?\)/);b&&Cv(b)>dh&&o.push({level:"error",line:_,text:`range(...) er for stor til offline kørsel. Brug højst ${dh} gentagelser.`})}for(const h of Dv(d))o.push({level:"warning",text:`Funktionen ${h} ser rekursiv ud. Hvis den ikke stopper, afbryder offline MicroPython efter få sekunder.`});return o}function yc(i){let l=null;for(let o=0;o<i.length;o+=1){const s=i[o];if((s==='"'||s==="'")&&i[o-1]!=="\\"&&(l=l===s?null:l??s),s==="#"&&!l)return i.slice(0,o)}return i}function Rv(i){const l=yc(i);let o=null;for(let s=0;s<l.length;s+=1){const d=l[s];if((d==='"'||d==="'")&&l[s-1]!=="\\"){o=o===d?null:o??d;continue}if(!o&&!(!mh(l[s-1])||l.slice(s,s+5)!=="input")&&mh(l[s+5])&&l.slice(s+5).trimStart().startsWith("("))return!0}return!1}function mh(i){return!i||!/[A-Za-z0-9_]/.test(i)}function Av(i){const l=i.match(/^import\s+([A-Za-z_]\w*)/);if(l)return l[1];const o=i.match(/^from\s+([A-Za-z_]\w*)\s+import\b/);return(o==null?void 0:o[1])??null}function hh(i){const l=i.match(/^\s*/);return(l==null?void 0:l[0].replace(/\t/g,"    ").length)??0}function Cv(i){const l=Number(i[1]),o=i[2]===void 0?void 0:Number(i[2]),s=i[3]===void 0?1:Number(i[3]);if(s===0)return Number.POSITIVE_INFINITY;const _=(o===void 0?l:o)-(o===void 0?0:l);return _>0&&s<0||_<0&&s>0?0:Math.ceil(Math.abs(_/s))}function Dv(i){const l=new Set;for(let o=0;o<i.length;o+=1){const s=yc(i[o]).trim().match(/^def\s+([A-Za-z_]\w*)\s*\(/);if(!s)continue;const d=s[1],h=hh(i[o]);for(let _=o+1;_<i.length;_+=1){if(!i[_].trim())continue;if(hh(i[_])<=h)break;if(new RegExp(`\\b${d}\\s*\\(`).test(yc(i[_]))){l.add(d);break}}}return[...l]}const Ov=/^(for|if|while|def|class|elif|else|try|except|finally|with)\b/;function Lv(i,l){var k;const o=i.trim(),s=l.split(/\r?\n/),d=Bv(o),h=d?s[d-1]??"":"",_=zv(s,d),m=o.split(/\r?\n/).filter(Boolean).at(-1)??"";if(/KeyboardInterrupt/.test(m))return{simple:"Programmet blev stoppet.",technical:o,line:d};if(/MemoryError/.test(m))return{simple:`Picoen eller browserens MicroPython løb tør for hukommelse${d?` omkring linje ${d}`:""}.`,technical:o,line:d};if(/RecursionError/.test(m))return{simple:`En funktion kalder sig selv for mange gange${d?` omkring linje ${d}`:""}.`,technical:o,line:d};const v=m.match(/UnboundLocalError:\s+local variable ['"](.+?)['"]/);if(v)return{simple:`Variablen ${v[1]} bruges inde i en funktion, før den har fået en værdi${d?` på linje ${d}`:""}.`,technical:o,line:d};const b=m.match(/NameError:\s+name ['"](.+?)['"] (?:isn't|is not) defined/);if(b)return{simple:Vv(h,b[1])?`Teksten ${b[1]} mangler måske citationstegn${d?` på linje ${d}`:""}.`:`Python kender ikke navnet ${b[1]}${d?` på linje ${d}`:""}.`,technical:o,line:d};if(/ZeroDivisionError/.test(m))return{simple:`Kan ikke dividere med 0${d?` på linje ${d}`:""}.`,technical:o,line:d};if(/IndentationError:\s+unexpected indent/.test(m))return{simple:`Der er for meget indrykning${d?` på linje ${d}`:""}.`,technical:o,line:d};if(/IndentationError/.test(m))return{simple:`Mangler indrykning${d?` på linje ${d}`:""}.`,technical:o,line:d};if(/ImportError|ModuleNotFoundError/.test(m)){const x=(k=m.match(/['"](.+?)['"]/))==null?void 0:k[1];return{simple:`Python kan ikke finde modulet${x?` ${x}`:""}.`,technical:o,line:d}}if(/OSError/.test(m))return/ENOENT|No such file|Errno\s+2/.test(m)?{simple:`Python kan ikke finde filen${d?` på linje ${d}`:""}.`,technical:o,line:d}:/EACCES|permission|denied/i.test(m)?{simple:`Python har ikke adgang til filen eller enheden${d?` på linje ${d}`:""}.`,technical:o,line:d}:{simple:`Der opstod en fejl med en fil eller en enhed${d?` omkring linje ${d}`:""}.`,technical:o,line:d};if(/SyntaxError/.test(m)){if(/invalid syntax/.test(m)&&_.text.trim().endsWith(","))return{simple:`Linje ${_.line??d} slutter med komma. Tjek om der mangler noget efter kommaet.`,technical:o,line:_.line??d};const x=ef(h,d)??ef(_.text,_.line)??Uv(s,d);return x?{simple:`Mangler måske : efter linje ${x.line}.`,technical:o,line:x.line}:d&&_.text.trim().endsWith(":")&&h.trim()&&!/^\s+/.test(h)?{simple:`Mangler måske indrykning på linje ${d}.`,technical:o,line:d}:Hv(h)?{simple:`Tekst mangler måske citationstegn${d?` på linje ${d}`:""}.`,technical:o,line:d}:qv(h)?{simple:`Tekst mangler måske et afsluttende citationstegn${d?` på linje ${d}`:""}.`,technical:o,line:d}:Iv(h)?{simple:`Mangler måske en afsluttende parentes${d?` på linje ${d}`:""}.`,technical:o,line:d}:Pv(h)?{simple:`Der er måske en parentes for meget${d?` på linje ${d}`:""}.`,technical:o,line:d}:{simple:`Python fandt en syntaksfejl${d?` omkring linje ${d}`:""}.`,technical:o,line:d}}return/TypeError/.test(m)?/takes .* positional arguments? but .* given/.test(m)||/function takes/.test(m)?{simple:`En funktion får for mange eller for få værdier${d?` på linje ${d}`:""}.`,technical:o,line:d}:/unsupported operand type/.test(m)?{simple:`To værdier kan ikke bruges sammen på den måde${d?` på linje ${d}`:""}.`,technical:o,line:d}:/not callable/.test(m)?{simple:`Der bliver brugt parenteser efter noget, som ikke er en funktion${d?` på linje ${d}`:""}.`,technical:o,line:d}:{simple:`En værdi har den forkerte type${d?` på linje ${d}`:""}.`,technical:o,line:d}:/IndexError/.test(m)?{simple:`Listen har ikke et element på den plads${d?` på linje ${d}`:""}.`,technical:o,line:d}:/KeyError/.test(m)?{simple:`Ordbogen mangler den nøgle${d?` på linje ${d}`:""}.`,technical:o,line:d}:/AttributeError/.test(m)?{simple:`Den ting har ikke den kommando${d?` på linje ${d}`:""}.`,technical:o,line:d}:/ValueError/.test(m)?/invalid literal for int/.test(m)?{simple:`Teksten kan ikke laves om til et heltal${d?` på linje ${d}`:""}.`,technical:o,line:d}:{simple:`Værdien passer ikke her${d?` på linje ${d}`:""}.`,technical:o,line:d}:{simple:`Python fandt en fejl${d?` omkring linje ${d}`:""}.`,technical:o,line:d}}function Bv(i){var d;const o=(d=[...i.matchAll(/line\s+(\d+)/g)].at(-1))==null?void 0:d[1];if(!o)return;const s=parseInt(o,10);return Number.isFinite(s)&&s>0?s:void 0}function zv(i,l){if(!l)return{text:""};for(let o=l-2;o>=0;o-=1){const s=i[o]??"";if(s.trim())return{line:o+1,text:s}}return{text:""}}function ef(i,l){if(!l)return null;const o=i.trim();return!Ov.test(o)||o.endsWith(":")?null:{line:l}}function Uv(i,l){const o=l?Math.min(i.length,l):i.length,s=Math.max(0,o-4);for(let d=o-1;d>=s;d-=1){const h=ef(i[d]??"",d+1);if(h)return h}return null}function qv(i){const l=(i.match(/'/g)??[]).length,o=(i.match(/"/g)??[]).length;return l%2===1||o%2===1}function Hv(i){var s,d;const o=(d=(s=i.trim().match(/^print\((.+)\)$/))==null?void 0:s[1])==null?void 0:d.trim();return!o||/['"]/.test(o)?!1:/\s/.test(o)&&/[a-zA-ZæøåÆØÅ]/.test(o)}function Vv(i,l){const o=i.trim();return!!l&&/[A-Za-zæøåÆØÅ]/.test(l)&&(o.startsWith("print(")||o.includes(`= ${l}`))}function Iv(i){return ap(i)>0}function Pv(i){return ap(i)<0}function ap(i){let l=0,o=null;for(let s=0;s<i.length;s+=1){const d=i[s];if((d==='"'||d==="'")&&i[s-1]!=="\\"){o=o===d?null:o??d;continue}o||((d==="("||d==="["||d==="{")&&(l+=1),(d===")"||d==="]"||d==="}")&&(l-=1))}return l}const tf="/min_kode.py",sp=`print('Hej fra Pico Kontrol Panel')
`,Fv=500,Gv=1200,ys="Backup-filnavne er reserveret til versionshistorik. Vælg et andet navn.";function It(i,l){return`${i}:${l}`}function ph(i){return new Promise(l=>window.setTimeout(l,i))}function $v(){const i=oe(f=>f.toggleSideMenu),l=oe(f=>f.askConfirm),o=oe(f=>f.picoIdeOrigin),s=oe(f=>f.active),d=oe(f=>f.isBleConnected),h=oe(f=>f.bleListFiles),_=oe(f=>f.bleReadText),m=oe(f=>f.bleWriteText),v=oe(f=>f.bleDeleteFile),b=oe(f=>f.bleRestartAndReconnect),k=oe(f=>f.progress),[x,E]=N.useState(!1),[D,O]=N.useState(!1),[G,H]=N.useState([]),[F,L]=N.useState(!1),[re,q]=N.useState(!1),[ce,ge]=N.useState([]),[te,pe]=N.useState(null),[ye,Be]=N.useState(()=>cc(ac())),[ne,Pe]=N.useState(tf),[we,Qe]=N.useState("local"),[Z,R]=N.useState(()=>{var f;return((f=cc(ac()).find(g=>g.path===tf))==null?void 0:f.content)??sp}),[W,me]=N.useState([]),[Re,_e]=N.useState(!1),[T,$]=N.useState(""),[le,ae]=N.useState(""),[Se,xe]=N.useState(""),[de,Fe]=N.useState(null),[Ye,Ct]=N.useState(!1),[Me,se]=N.useState(null),[P,J]=N.useState(!1),[ie,Oe]=N.useState({}),[Ge,Ve]=N.useState(!1),[Ce,Le]=N.useState(0),[xt,fn]=N.useState(()=>{var f,g;return((f=$l.find(w=>w.board==="Raspberry Pi Pico W"))==null?void 0:f.board)??((g=$l[0])==null?void 0:g.board)??""}),[kn,Nt]=N.useState(()=>{var f,g;return((f=$l.find(w=>w.board==="Raspberry Pi Pico W"))==null?void 0:f.version)??((g=$l[0])==null?void 0:g.version)??""}),[xr,In]=N.useState(null),[Sn,sr]=N.useState({top:0,left:0}),[En,Kt]=N.useState(!1),[Ur,kr]=N.useState(!1),[or,zt]=N.useState(!1),[Qt,$e]=N.useState(!0),[Wt,Tn]=N.useState(""),[Pn,cr]=N.useState([]),[Fn,ur]=N.useState(null),[Mn,Zt]=N.useState(!1),[ln,mn]=N.useState({}),[an,ee]=N.useState({}),[he,We]=N.useState(null),[nt,kt]=N.useState(null),[Gn,sn]=N.useState(""),[on,Sr]=N.useState(()=>Nm().clearTerminalOnRun),[$n,Er]=N.useState(()=>Nm().simplifiedErrors),[jt,Jt]=N.useState(()=>typeof navigator<"u"?wh(navigator):!1),dr=N.useRef(null),Yn=N.useRef(null),bt=N.useRef(null),Cs=N.useRef(null),fr=N.useRef(null),qr=N.useRef(null),Ql=N.useRef(null),mr=N.useRef(null),hr=N.useRef(null),Xn=N.useRef(null),pr=N.useRef(null),st=N.useRef(!1),Tr=N.useRef(!1),ol=N.useRef(!1),Ft=N.useRef(""),Nn=N.useRef(null),Wl=N.useRef(null),Mr=N.useRef(null),Ti=N.useRef(null),Nr=N.useRef(null),jr=N.useRef(null),Kn=N.useRef(0),en=N.useRef(null),Ut=N.useRef(null),ga=N.useRef(null),Zl=N.useRef(null),cl=N.useRef([]),Jl=N.useRef([]),gr=N.useRef(null),ul=yv(),ve=o==="control"&&!!s&&d(),ei=ve?(s==null?void 0:s.deviceID)??"ble":null,Ds=Math.max(1,Z.split(`
`).length),_a=new Blob([Z]).size,dl=we==="pico"?"Picoen":"browseren",Os=N.useMemo(()=>[...new Set($l.map(f=>f.board))],[]),fl=N.useMemo(()=>$l.filter(f=>f.board===xt),[xt]),jn=$l.find(f=>f.board===xt&&f.version===kn)??fl[0]??$l[0],va=F||!!te||En||Ur,Rn=we==="pico",Mi=Rn?En:Ur,cn=Rn&&En&&x&&!ve||!Rn&&Ur&&!!Mr.current&&or,Ec=Mn||Mi&&!cn,Tc=cn?"stdin":">>>",ti=cn?Rn?"Input til kørende Pico-kode":"Input til kørende Browser-MicroPython":Rn?"Pico MicroPython":"Browser-MicroPython",An=N.useMemo(()=>{const f=new wv({onData:g=>{Tr.current||!st.current||(Ft.current=(Ft.current+g).slice(-240),/(^|\r?\n)>>> ?$/.test(Ft.current)&&Ni())},onLine:g=>{if(Tr.current)return;const w=g.trimEnd();if(ol.current&&w.trim()){V("info",w);return}if(st.current&&ml(w)){Ni();return}st.current&&w.trim()&&!hl(w)&&!w.includes("raw REPL")&&V("info",w)},onLog:V,onDisconnect:()=>{E(!1),Kt(!1),Zt(!1),st.current=!1,ol.current=!1,pl(),Ft.current="",ri(),V("warning","USB-forbindelse lukket.")}});return dr.current=f,f},[]);function V(f,g){H(w=>[...w.slice(-140),{level:f,text:g}])}function ba(f){H(g=>[...g.slice(-140),{level:"info",text:f,variant:"input"}])}function ml(f){return f.trim()===">>>"}function hl(f){return f.trimStart().startsWith(">>> import builtins as _pkp_builtins; exec(")}function pl(){Nn.current!==null&&(window.clearTimeout(Nn.current),Nn.current=null)}function Ni(){!st.current||Nn.current!==null||(Nn.current=window.setTimeout(()=>{Nn.current=null,st.current&&(Kt(!1),st.current=!1,Ft.current="",V("success","Pico-koden er færdig."),ya())},0))}function ya(){const f=bt.current;f&&Sa(f,!1)}function Rr(f,g=Z,w="error"){const j=Lv(f,g);H(C=>[...C.slice(-140),{level:w,text:j.simple,technical:j.technical}])}function rt(f,g,w=we){Pe(f),Qe(w),R(g),ee(j=>({...j,[It(w,f)]:g})),Ar()}function ji(f,g="pico"){Pe(f),Qe(g),R(""),We(null),sr({top:0,left:0}),Ar()}function Ar(){cl.current=[],Jl.current=[],gr.current=null}function hn(){const f=fr.current;return{content:Z,selectionStart:(f==null?void 0:f.selectionStart)??Z.length,selectionEnd:(f==null?void 0:f.selectionEnd)??(f==null?void 0:f.selectionStart)??Z.length}}function wa(f){const g=cl.current,w=g.at(-1);(w==null?void 0:w.content)===f.content&&w.selectionStart===f.selectionStart&&w.selectionEnd===f.selectionEnd||(g.push(f),g.length>Fv&&g.shift(),Jl.current=[])}function Ri(f,g){let w=0;const j=Math.min(f.length,g.length);for(;w<j&&f[w]===g[w];)w+=1;let C=f.length,X=g.length;for(;C>w&&X>w&&f[C-1]===g[X-1];)C-=1,X-=1;const fe=f.slice(w,C),De=g.slice(w,X),Ee=De&&!fe?"insert":fe&&!De?"delete":"replace",qe=De.at(-1)??"";return{kind:Ee,boundaryAfter:Ee==="insert"&&/[\s.,:;()[\]{}'"`+\-*/%=<>!?]/.test(qe)}}function Ls(f,g){if(g!=="typing")return gr.current=null,!0;const w=Date.now(),j=Ri(Z,f),C=gr.current,X=C!==null&&C.path===ne&&C.source===we&&C.kind===j.kind&&C.kind!=="replace"&&!C.boundaryAfter&&w-C.at<=Gv;return gr.current={path:ne,source:we,kind:j.kind,at:w,boundaryAfter:j.boundaryAfter},!X}function ni(f){R(f.content),ee(g=>({...g,[It(we,ne)]:f.content})),sn(""),We(null),window.requestAnimationFrame(()=>{const g=fr.current;g&&(g.focus(),g.selectionStart=Math.min(f.selectionStart,f.content.length),g.selectionEnd=Math.min(f.selectionEnd,f.content.length))})}function Ai(){const f=cl.current.pop();return f?(gr.current=null,Jl.current.push(hn()),ni(f),!0):!1}function xa(){const f=Jl.current.pop();return f?(gr.current=null,cl.current.push(hn()),ni(f),!0):!1}function St(f,g=(X=>(X=fr.current)==null?void 0:X.selectionStart)()??f.length,w=hn(),j=g,C="programmatic"){w&&f!==Z&&Ls(f,C)&&wa(w),R(f),ee(fe=>({...fe,[It(we,ne)]:f})),sn(""),Da(f,g),window.requestAnimationFrame(()=>{const fe=fr.current;fe&&(fe.selectionStart=Math.min(g,f.length),fe.selectionEnd=Math.min(j,f.length))})}function tn(f,g=we){ee(w=>{const j=It(g,f);if(!(j in w))return w;const C={...w};return delete C[j],C})}function Ci(){return ln[ne]===Z}function Et(f,g){mn(w=>({...w,[f]:g}))}function Bs(f,g){Et(f,g),ee(w=>({...w,[It("pico",f)]:g})),we==="pico"&&ne===f&&R(g)}function ri(){ge([]),me([]),mn({}),ee({}),We(null),Pe(f=>{const g=cc(ac());if(g.find(C=>C.path===f))return f;const j=g[0];return Qe("local"),R(j.content),Ar(),j.path})}function yt(f){_r(),se({value:100,label:f}),Zl.current=window.setTimeout(()=>{Zl.current=null,se(null)},900)}function _r(){Zl.current!==null&&(window.clearTimeout(Zl.current),Zl.current=null)}function Di(){return Me?u.jsxs("div",{className:"ide-task-progress",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(Me.value),children:[u.jsxs("div",{children:[u.jsx("span",{children:Me.label}),u.jsxs("strong",{children:[Math.round(Me.value),"%"]}),Me.cancellable&&u.jsx("button",{className:"ide-task-cancel",type:"button",onClick:zs,"aria-label":"Stop handling",title:"Stop",children:u.jsx(Pt,{name:"delete",size:18})})]}),u.jsx("b",{"aria-hidden":"true",children:u.jsx("i",{style:{width:`${Math.max(2,Math.min(100,Me.value))}%`}})})]}):null}function zs(){Nr.current&&li("Stopper læsning...",!0,!0)}function li(f="Stopper læsning...",g=!1,w=!1){var j;_r(),Ut.current=null,Kn.current+=1,(j=Nr.current)==null||j.abort(),Nr.current=null,en.current=null,pe(null),L(!1),se(g?{value:(Me==null?void 0:Me.value)??0,label:f,cancellable:!1}:null),w&&V("warning","Stopper BLE-læsning efter den aktuelle datapakke.")}function Mc(f){var g;if(!(en.current===f||Ut.current===f)){if(Ut.current=f,jr.current){Kn.current+=1,(g=Nr.current)==null||g.abort(),Nr.current=null,en.current=null,ji(f),pe(f),L(!0),_r(),se({value:2,label:`Skifter til ${Ae(f)}...`,cancellable:!0});return}Us()}}function Us(){if(jr.current)return;const f=Ut.current;if(!f)return;Ut.current=null;const g=Kn.current+1;Kn.current=g;const w=new AbortController;Nr.current=w,en.current=f,ji(f),pe(f),L(!0),_r(),se({value:12,label:`Indlæser ${Ae(f)}...`,cancellable:!0});const j=(async()=>{try{const C=await _(f,(X,fe)=>{Kn.current===g&&se({value:X,label:fe,cancellable:!0})},w.signal);if(w.signal.aborted||Kn.current!==g)return;rt(f,C,"pico"),Et(f,C),yt("Fil indlæst")}catch(C){if(Kn.current!==g)return;Wv(C)||w.signal.aborted?V("info",`Stoppede læsning af ${Ae(f)}.`):(se(null),V("error",C instanceof Error?C.message:"BLE læsning fejlede."))}})();jr.current=j,j.finally(()=>{if(jr.current!==j)return;jr.current=null,Nr.current===w&&(Nr.current=null),en.current===f&&(en.current=null),!!Ut.current||(pe(null),L(!1),w.signal.aborted&&se(null)),Us()})}async function gl(f){const g=Tr.current;Tr.current=!0;try{return await f()}finally{Tr.current=g}}N.useEffect(()=>{if(!Qt)return;const f=hr.current;f&&(f.scrollTop=f.scrollHeight)},[G,Qt]),N.useEffect(()=>{Z2({clearTerminalOnRun:on,simplifiedErrors:$n})},[on,$n]),N.useEffect(()=>{var f;fl.some(g=>g.version===kn)||Nt(((f=fl[0])==null?void 0:f.version)??"")},[fl,kn]),N.useEffect(()=>{Jt(wh(navigator))},[]),N.useEffect(()=>{const f=()=>{const g=dr.current;Yn.current=null,bt.current=null,dr.current=null,g==null||g.disconnect().catch(()=>{})};return window.addEventListener("pagehide",f),()=>{var g,w;_r(),(g=Wl.current)==null||g.dispose(),Wl.current=null,(w=Mr.current)==null||w.dispose(),Mr.current=null,window.removeEventListener("pagehide",f),f()}},[]),N.useEffect(()=>{const f=g=>{!(g.ctrlKey||g.metaKey)||g.key.toLowerCase()!=="s"||(g.preventDefault(),!F&&ne.trim()&&!jt&&!Ye&&!de&&!Re&&Fs())};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[we,ve,F,x,Z,ne,jt,Ye,de,Re]);function _l(f,g,w){Be(j=>{const C=$d(j,f,g,w);return sa(C),C})}function qs(f,g){Be(w=>{const j=w.find(Ee=>Ee.path===f),X=an[It("local",f)]??(j==null?void 0:j.content),fe=X!==void 0&&Yl(X)!==Yl(g)?$d(w,ub(f,hc(w)),X,!1):w,De=$d(fe,f,g,!1);return sa(De),De}),ee(w=>({...w,[It("local",f)]:g})),we==="local"&&ne===f&&(R(g),sn(""),We(null),Ar())}const ka=mb(ce,ye,an,x||ve);N.useEffect(()=>{if(!ve)return;const f={cancelled:!1};return(async()=>{for(let g=0;g<6&&!f.cancelled;g+=1)try{const w=await h();if(f.cancelled)return;ge(w),V("success",`Indlæste ${w.length} filer fra Pico via Bluetooth.`);return}catch(w){if(f.cancelled)return;g===5?V("error",w instanceof Error?w.message:"BLE filhandling fejlede."):await ph(1500)}})(),()=>{f.cancelled=!0}},[s,ve]),N.useEffect(()=>{const f=ga.current;f&&f!==ei&&ri(),ga.current=ei},[ei]);async function Nc(){if(ul.supported){O(!0);try{await An.requestAndConnect();const f=new Q_(An);Yn.current=f,bt.current=new nv(f),E(!0),Le(0),await f.interrupt(),await jc(f),V("success","Sendte stop-signal til Pico-terminalen."),await Sa(bt.current),await Vs(bt.current)}catch(f){V("error",f instanceof Error?f.message:"USB-forbindelse mislykkedes.");try{await An.disconnect()}catch(g){V("error",g instanceof Error?`USB-porten kunne ikke lukkes: ${g.message}`:"USB-porten kunne ikke lukkes.");return}Le(g=>{const w=g+1;return w>=3&&(V("info","USB-forbindelsen er mislykkedes flere gange. Hvis Picoen er i BOOTSEL eller mangler MicroPython, kan du bruge MicroPython-download."),Ve(!0)),w}),E(!1)}finally{O(!1)}}}async function jc(f){const g=await f.exec(`import sys
print(sys.implementation.name)
`,4e3);if(g.error||!g.output.toLowerCase().includes("micropython"))throw new Error("MicroPython blev ikke fundet på Picoen.")}async function Hs(){var f;try{await((f=dr.current)==null?void 0:f.disconnect()),Yn.current=null,bt.current=null,E(!1),ri()}catch(g){V("error",g instanceof Error?`USB-porten kunne ikke lukkes: ${g.message}`:"USB-porten kunne ikke lukkes.")}}async function pn(f){const g=bt.current;if(g){L(!0),Tr.current=!0;try{await f(g)}catch(w){se(null),V("error",w instanceof Error?w.message:"USB filhandling fejlede.")}finally{Tr.current=!1,L(!1)}}}async function gt(f=!0){if(ve){L(!0);try{const g=await h();ge(g),f&&V("success",`Indlæste ${g.length} filer fra Pico via Bluetooth.`)}catch(g){V("error",g instanceof Error?g.message:"BLE filhandling fejlede.")}finally{L(!1)}return}await Sa(bt.current,f)}async function Sa(f,g=!0){if(f){L(!0);try{const w=await gl(()=>f.list("/"));ge(w),g&&V("success",`Indlæste ${w.length} filer fra Pico.`)}catch(w){V("error",w instanceof Error?w.message:"USB filhandling fejlede.")}finally{L(!1)}}}async function Hr(){if(ve){L(!0),se({value:4,label:"Tjekker biblioteker på Pico via Bluetooth..."});try{const f=await Oi((g,w)=>se({value:g,label:w}));me(f),yt("Fil-tjek færdigt")}catch(f){se(null),V("error",f instanceof Error?f.message:"BLE runtime check fejlede.")}finally{L(!1)}return}await Vs(bt.current)}async function Oi(f){const g=[],w=await _h(()=>h()).catch(()=>null),j=ca.filter(X=>X.kind==="library"&&!sl(X));let C=0;for(const X of ca){if(X.kind==="program"){g.push({...X,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}if(sl(X)){g.push({...X,status:"unknown",detail:"Opdateres via USB"});continue}try{const fe=C/Math.max(1,j.length)*100,De=100/Math.max(1,j.length);V("info",`Tjekker ${X.label} på Pico via Bluetooth...`),f==null||f(Math.min(95,fe),`Tjekker ${X.label} på Pico...`);const Ee=await _(X.path,(ot,ht)=>{f==null||f(Math.min(95,fe+ot/100*De),`${X.label}: ${ht}`)}),qe=Yl(Ee)===Yl(X.content);g.push({...X,status:qe?"ok":"outdated",detail:qe?"Matcher appens version":"Kan installeres via Bluetooth"})}catch(fe){g.push(vh(X,fe,w))}finally{C+=1}}return f==null||f(100,"Fil-tjek færdigt"),g}async function Vs(f){if(f){L(!0);try{const g=await gl(()=>Is(f)),w=g;me(w)}catch(g){V("error",g instanceof Error?g.message:"Runtime check fejlede.")}finally{L(!1)}}}async function Is(f){if(!f)return[];const g=[],w=await _h(()=>f.list("/")).catch(()=>null);for(const j of ca){if(j.kind==="program"){g.push({...j,status:"unknown",detail:"Startprogram kan vælges til installation"});continue}try{const C=await f.readText(j.path),X=Yl(C)===Yl(j.content);g.push({...j,status:X?"ok":"outdated",detail:X?"Matcher appens version":"Matcher ikke appens version"})}catch(C){g.push(vh(j,C,w))}}return g}async function Rc(f=ne){if(ve){Mc(f);return}pe(f),await pn(async g=>{se({value:12,label:`Indlæser ${Ae(f)}...`});const w=await Ps(g,f);rt(f,w,"pico"),Et(f,w),yt("Fil indlæst")}),pe(null)}async function Ps(f,g){var w;try{return await f.readText(g)}catch(j){await((w=Yn.current)==null?void 0:w.stop().catch(()=>{})),await ph(120);try{return await f.readText(g)}catch{throw j}}}function Ac(){Ct(!0)}async function Fs(){if(we==="pico"){if(!x&&!ve){V("error","Ingen Pico-forbindelse. Brug Gem for at vælge en anden placering.");return}await Ea();return}Gs()}function Gs(){if(Xl(ne)){V("error",ys);return}_l(ne,Z,!1),Qe("local"),ee(f=>({...f,[It("local",ne)]:Z})),Ct(!1),V("success",`Gemte ${Ae(ne)} lokalt.`)}async function Ea(){if(Ct(!1),Xl(ne))return se(null),V("error",ys),!1;if(se({value:0,label:"Starter gemning..."}),ve){L(!0);try{return await m(ne,Z,(g,w)=>se({value:g,label:w})),Et(ne,Z),Qe("pico"),ee(g=>({...g,[It("pico",ne)]:Z})),yt("Gemt på Pico via Bluetooth"),V("success",`Gemte ${Ae(ne)} på Pico via Bluetooth.`),oc(ne)&&(In("saved"),V("warning","main.py er gemt. Genstart Picoen for at køre den nye version.")),await gt(!1),!0}catch(g){return se(null),V("error",g instanceof Error?g.message:"BLE gem fejlede."),!1}finally{L(!1)}}if(!bt.current)return se(null),!1;let f=!1;return await pn(async g=>{yl(ne,"pico")?await g.replaceTextSafely(ne,Z,(w,j)=>se({value:w,label:j})):await g.writeText(ne,Z,(w,j)=>se({value:w,label:j})),Et(ne,Z),Qe("pico"),ee(w=>({...w,[It("pico",ne)]:Z})),yt("Gemt på Pico via USB"),V("success",`Gemte ${ne}.`),await gt(),await Hr(),f=!0}),f}function Cc(){$s(Ae(ne),Z),Ct(!1),V("success",`Downloadede ${Ae(ne)}.`)}function $s(f,g){const w=new Blob([g],{type:"text/plain;charset=utf-8"}),j=URL.createObjectURL(w),C=document.createElement("a");C.href=j,C.download=f,C.click(),URL.revokeObjectURL(j)}async function Ys(f){L(!0),f==="ide"&&q(!0),In(null),se({value:10,label:"Genstarter Pico..."});try{await b(f)?(yt("Pico genforbundet"),V("success",f==="control"?"Pico genforbundet. Åbner kontrolpanelet.":"Pico genforbundet til Kodeværkstedet.")):(se(null),V("warning","Automatisk genforbindelse lykkedes ikke. Vælg Picoen fra dashboardet."))}catch(g){se(null),V("error",g instanceof Error?g.message:"Genstart/genforbindelse mislykkedes.")}finally{L(!1),q(!1)}}function Xs(f){var X,fe;const g=f??{path:ne,source:we},w=g.source==="pico"?"Pico":"browser",j=(f==null?void 0:f.versions.length)??(g.source==="pico"?((X=ua(ce).get(g.path))==null?void 0:X.length)??0:((fe=ua(hc(ye)).get(g.path))==null?void 0:fe.length)??0),C=j>0?` Det sletter også filens versionshistorik (${j} gemte versioner).`:"";Fe(null),l({title:"Slet fil",message:`Vil du slette ${Ae(g.path)} fra ${w}?${C}`,confirmLabel:"Slet",onConfirm:()=>{Ks(g)}})}function Dc(){l({title:"Nulstil enhed",message:"Vil du nulstille Picoens enhedsindstillinger? Det sletter DeviceSettings.txt, så Picoen kan oprettes som en ny enhed igen. Kodefiler og startprogram bliver ikke slettet.",confirmLabel:"Nulstil",onConfirm:()=>{Ta()}})}async function Ta(){if(!bt.current){V("error","Forbind Picoen med USB først.");return}await pn(async f=>{await f.delete("/DeviceSettings.txt").catch(g=>{const w=g instanceof Error?g.message:"";if(!/ENOENT|No such file|not found/i.test(w))throw g}),mn(g=>{const w={...g};return delete w["/DeviceSettings.txt"],w}),tn("/DeviceSettings.txt","pico"),V("success","DeviceSettings.txt er nulstillet. Afbryd og forbind Picoen igen, hvis kontrolpanelet allerede var åbent."),await gt()})}function vl(f,g,w){const j=ka.filter(fe=>fe.kind==="file"&&fe.type==="file"),C=j.findIndex(fe=>fe.path===f&&fe.source===g);if(C===-1)return null;const X=fe=>!!fe&&!(fe.path===f&&fe.source===g)&&!(fe.source===g&&w.has(fe.path))&&!(ve&&sl(fe));for(const fe of[!0,!1])for(let De=1;De<j.length;De+=1){const Ee=j[C+De];if(X(Ee)&&(!fe||Ee.source===g))return Ee;const qe=j[C-De];if(X(qe)&&(!fe||qe.source===g))return qe}return null}function Ma(f){if(f){si(f);return}const g=cc(ac())[0];rt(g.path,an[It("local",g.path)]??g.content,"local")}async function Ks(f){const g=f.path,w=f.source,j=g===ne&&w===we;if(w==="local"){const Ee=ua(hc(ye)).get(g)??[],qe=new Set([g,...Ee.map(et=>et.path)]),ot=j?vl(g,w,qe):null,ht=ye.filter(et=>!qe.has(et.path));Be(ht),sa(ht);for(const et of qe)tn(et,"local");j&&Ma(ot);const Ue=Ee.length>0?` og ${Ee.length} gemte versioner`:"";V("warning",`Slettede ${Ae(g)}${Ue} fra browseren.`);return}const C=ua(ce).get(g)??[],X=[g,...C.map(Ee=>Ee.path)],fe=j?vl(g,w,new Set(X)):null;if(ve){L(!0);try{for(const qe of X)await v(qe);mn(qe=>{const ot={...qe};for(const ht of X)delete ot[ht];return ot});for(const qe of X)tn(qe,"pico");const Ee=C.length>0?` og ${C.length} gemte versioner`:"";V("warning",`Slettede ${Ae(g)}${Ee} på Pico via Bluetooth.`),await gt(),j&&Ma(fe)}catch(Ee){V("error",Ee instanceof Error?Ee.message:"BLE sletning fejlede.")}finally{L(!1)}return}if(!bt.current){V("error","Ingen Pico-forbindelse. Kan ikke slette Pico-filen.");return}let De=!1;await pn(async Ee=>{for(const ot of X)await Ee.delete(ot);mn(ot=>{const ht={...ot};for(const Ue of X)delete ht[Ue];return ht});const qe=C.length>0?` og ${C.length} gemte versioner`:"";V("warning",`Slettede ${g}${qe}.`);for(const ot of X)tn(ot,"pico");await gt(),await Hr(),De=!0}),De&&j&&Ma(fe)}async function Qs(f){if(!f)return;const g=Yv(f.name);if(!g){V("error","Kun .py, .txt, .json og .csv kan importeres.");return}if(Xl(g)){V("error",ys);return}if(f.size>128*1024){V("error","Filen er for stor til Pico-værkstedet.");return}const w=await f.text();if(we==="local"){_l(g,w,!0),rt(g,w,"local"),V("success",`Importerede ${Ae(g)} i browseren.`);return}if(!x&&!ve){V("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(ve&&sl({path:g})){V("error","PicoBluetooth.py kan ikke importeres over Bluetooth, mens den holder forbindelsen i gang. Brug USB i stedet.");return}if(se({value:0,label:"Uploader fil til Pico..."}),ve){L(!0);try{await m(g,w,(C,X)=>se({value:C,label:X})),Et(g,w),rt(g,w,"pico"),yt("Fil uploadet til Pico"),V("success",`Importerede ${Ae(g)} på Pico via Bluetooth.`),await gt()}catch(C){se(null),V("error",C instanceof Error?C.message:"Kunne ikke importere filen til Pico.")}finally{L(!1)}return}if(!bt.current){se(null),V("error","Ingen Pico-forbindelse. Kan ikke importere filen til Pico.");return}await pn(async C=>{yl(g,"pico")?await C.replaceTextSafely(g,w,(X,fe)=>se({value:X,label:fe})):await C.writeText(g,w,(X,fe)=>se({value:X,label:fe})),Et(g,w),rt(g,w,"pico"),yt("Fil uploadet til Pico"),V("success",`Importerede ${Ae(g)} på Pico.`),await gt(),await Hr()})}async function Ws(){$(""),ae(""),_e(!0)}function Zs(){const f=gh(T,le);if(!f)return;if(Xl(f)){V("error",ys);return}const g=we;if(yl(f,g)){V("error",`Der findes allerede en fil med navnet ${Ae(f)} i ${g==="pico"?"Pico":"browseren"}.`);return}if(g==="local"){_l(f,"",!1),rt(f,"","local"),_e(!1),V("success",`Oprettede ${Ae(f)} i browseren.`);return}Js(f)}async function Js(f){if(!x&&!ve){V("error","Ingen Pico-forbindelse. Vælg en browser-fil først, eller forbind Picoen.");return}if(_e(!1),se({value:0,label:"Opretter fil på Pico..."}),ve){L(!0);try{await m(f,"",(g,w)=>se({value:g,label:w})),Et(f,""),rt(f,"","pico"),yt("Fil oprettet på Pico"),V("success",`Oprettede ${Ae(f)} på Pico via Bluetooth.`),await gt()}catch(g){se(null),V("error",g instanceof Error?g.message:"Kunne ikke oprette fil på Pico.")}finally{L(!1)}return}if(!bt.current){se(null),V("error","Ingen Pico-forbindelse. Kan ikke oprette Pico-filen.");return}await pn(async g=>{await g.writeText(f,"",(w,j)=>se({value:w,label:j})),Et(f,""),rt(f,"","pico"),yt("Fil oprettet på Pico"),V("success",`Oprettede ${Ae(f)} på Pico.`),await gt()})}function bl(f){f.type==="file"&&(Fe(f),xe(Xv(f.path)))}async function Oc(f){if(!de)return;const g=de.path;if(Fe(null),de.source==="local"){const w=ye.find(j=>j.path===f.path);if(!w){V("error","Kunne ikke finde versionen i browseren.");return}qs(g,w.content),rt(g,w.content,"local"),V("success",`Gendannede ${Ae(f.path)} i browseren.`);return}if(se({value:0,label:"Gendanner version..."}),ve){L(!0);try{const w=await _(f.path);await m(g,w,(j,C)=>se({value:j,label:C})),Et(g,w),rt(g,w,"pico"),yt("Version gendannet"),await gt(!1)}catch(w){se(null),V("error",w instanceof Error?w.message:"Kunne ikke gendanne versionen.")}finally{L(!1)}return}bt.current&&await pn(async w=>{await w.replaceTextSafely(g,await w.readText(f.path),(C,X)=>se({value:C,label:X}));const j=await w.readText(g);Et(g,j),rt(g,j,"pico"),yt("Version gendannet"),await gt()})}function Lc(f){const g=(de==null?void 0:de.source)==="local"?"browseren":"Pico";l({title:"Slet version",message:`Vil du slette ${Ae(f.path)} fra ${g}?`,confirmLabel:"Slet",onConfirm:()=>{Bc(f)}})}async function Bc(f){if((de==null?void 0:de.source)==="local"){const g=ye.filter(w=>w.path!==f.path);Be(g),sa(g),tn(f.path,"local"),Fe(w=>w&&{...w,versions:w.versions.filter(j=>j.path!==f.path)}),V("warning",`Slettede ${Ae(f.path)} fra browserens versionshistorik.`);return}if(ve){L(!0);try{await v(f.path),await gt(!1),Fe(g=>g&&{...g,versions:g.versions.filter(w=>w.path!==f.path)})}catch(g){V("error",g instanceof Error?g.message:"Kunne ikke slette versionen.")}finally{L(!1)}return}bt.current&&await pn(async g=>{await g.delete(f.path),await gt(!1),Fe(w=>w&&{...w,versions:w.versions.filter(j=>j.path!==f.path)})})}async function eo(){var w;if(!de)return;const f=de,g=db(f.path,j=>yl(j,f.source));if(!g){V("error",`Kunne ikke finde et ledigt filnavn til en kopi af ${Ae(f.path)}.`);return}if(f.source==="local"){const j=an[It("local",f.path)]??((w=ye.find(C=>C.path===f.path))==null?void 0:w.content)??"";_l(g,j,!1),rt(g,j,"local"),Fe(null),V("success",`Duplikerede ${Ae(f.path)} til ${Ae(g)} i browseren.`);return}if(Fe(null),se({value:0,label:"Duplikerer fil..."}),ve){L(!0);try{const j=ln[f.path]??await _(f.path);await m(g,j,(C,X)=>se({value:C,label:X})),Et(g,j),rt(g,j,"pico"),yt("Fil duplikeret"),await gt(!1),V("success",`Duplikerede ${Ae(f.path)} til ${Ae(g)} på Pico via Bluetooth.`)}catch(j){se(null),V("error",j instanceof Error?j.message:"Kunne ikke duplikere filen.")}finally{L(!1)}return}if(!bt.current){se(null),V("error","Ingen Pico-forbindelse. Kan ikke duplikere Pico-filen.");return}await pn(async j=>{const C=await j.readText(f.path);await j.writeText(g,C,(X,fe)=>se({value:X,label:fe})),Et(g,C),rt(g,C,"pico"),yt("Fil duplikeret"),await gt(!1),V("success",`Duplikerede ${Ae(f.path)} til ${Ae(g)} på Pico.`)})}function Na(f){Be(g=>{const w=g.filter(j=>j.path!==f);return sa(w),w}),tn(f,"local")}async function ii(){var fe;if(!de)return;const f=de,g=f.path,w=f.source,j=w==="pico"?"local":"pico",C=j==="pico"?"Pico":"browseren";if(yl(g,j)){V("error",`Der findes allerede en fil med navnet ${Ae(g)} i ${C}.`);return}if(ve&&sl({path:g})){V("error","PicoBluetooth.py holder Bluetooth-forbindelsen i gang og kan ikke flyttes over Bluetooth.");return}if(j==="pico"&&!x&&!ve){V("error","Ingen Pico-forbindelse. Kan ikke flytte filen til Pico.");return}const X=ne===g&&we===w;if(Fe(null),se({value:0,label:`Flytter fil til ${C}...`}),w==="local"){const De=an[It("local",g)]??((fe=ye.find(Ee=>Ee.path===g))==null?void 0:fe.content)??"";if(ve){L(!0);try{await m(g,De,(Ee,qe)=>se({value:Ee,label:qe})),Et(g,De),Na(g),X&&rt(g,De,"pico"),yt("Fil flyttet til Pico"),V("success",`Flyttede ${Ae(g)} fra browseren til Pico via Bluetooth.`),await gt()}catch(Ee){se(null),V("error",Ee instanceof Error?Ee.message:"Kunne ikke flytte filen til Pico.")}finally{L(!1)}return}if(!bt.current){se(null),V("error","Ingen Pico-forbindelse. Kan ikke flytte filen til Pico.");return}await pn(async Ee=>{await Ee.writeText(g,De,(qe,ot)=>se({value:qe,label:ot})),Et(g,De),Na(g),X&&rt(g,De,"pico"),yt("Fil flyttet til Pico"),V("success",`Flyttede ${Ae(g)} fra browseren til Pico.`),await gt(),await Hr()});return}if(ve){L(!0);try{const De=ln[g]??await _(g);_l(g,De,!1),await v(g),mn(Ee=>{const qe={...Ee};return delete qe[g],qe}),tn(g,"pico"),X&&rt(g,De,"local"),yt("Fil flyttet til browseren"),V("success",`Flyttede ${Ae(g)} fra Pico til browseren via Bluetooth.`),await gt()}catch(De){se(null),V("error",De instanceof Error?De.message:"Kunne ikke flytte filen til browseren.")}finally{L(!1)}return}if(!bt.current){se(null),V("error","Ingen Pico-forbindelse. Kan ikke flytte Pico-filen.");return}await pn(async De=>{const Ee=await De.readText(g);_l(g,Ee,!1),await De.delete(g),mn(qe=>{const ot={...qe};return delete ot[g],ot}),tn(g,"pico"),X&&rt(g,Ee,"local"),yt("Fil flyttet til browseren"),V("success",`Flyttede ${Ae(g)} fra Pico til browseren.`),await gt(),await Hr()})}async function ai(){if(!de)return;const f=de,g=Gd(Se,ws(f.path));if(!g||g===f.path)return;if(Xl(g)){V("error",ys);return}if(yl(g,f.source)){V("error",`Der findes allerede en fil med navnet ${Ae(g)}.`);return}const w=f.source==="local",j=f.source==="pico";if(ve&&j&&(oc(f.path)||oc(g))){V("error","main.py kan redigeres over Bluetooth, men ikke omdøbes. Gem den som main.py.");return}L(!0);try{if(j)if(ve){const C=ln[f.path]??await _(f.path);await m(g,C,(X,fe)=>se({value:X,label:fe})),await v(f.path),mn(X=>({...Mh(X,f.path,g),[g]:C}))}else bt.current&&(await gl(()=>bt.current.rename(f.path,g)),mn(C=>Mh(C,f.path,g)));w&&Be(C=>{const X=C.map(fe=>fe.path===f.path?{...fe,path:g,updatedAt:Date.now()}:fe);return sa(X),X}),ne===f.path&&we===f.source&&Pe(g),ee(C=>gb(C,f.source,f.path,g)),Fe(null),xe(""),V("success",`Omdøbte ${Ae(f.path)} til ${Ae(g)}.`),j&&await gt()}catch(C){V("error",C instanceof Error?C.message:"Kunne ikke omdøbe filen.")}finally{se(null),L(!1)}}function yl(f,g){return g==="pico"?ce.some(w=>w.path===f):ye.some(w=>w.path===f)}function si(f){if(f.type!=="file"){ve&&li(void 0,!1),Pe(f.path),Qe(f.source);return}if(ve&&sl(f)){V("warning","PicoBluetooth.py holder Bluetooth-forbindelsen i gang og kan ikke åbnes her.");return}if(f.source==="local"){ve&&li(void 0,!1);const w=ye.find(j=>j.path===f.path);rt(f.path,an[It("local",f.path)]??(w==null?void 0:w.content)??"","local");return}const g=It("pico",f.path);if(Object.prototype.hasOwnProperty.call(an,g)){ve&&li(void 0,!1),rt(f.path,an[g],"pico");return}if(Object.prototype.hasOwnProperty.call(ln,f.path)){ve&&li(void 0,!1),rt(f.path,ln[f.path],"pico");return}Rc(f.path)}async function ja(){if(!x&&!ve){const f=bh();me(f),Oe(yh(f)),J(!0),se(null);return}L(!0),se({value:4,label:ve?"Tjekker biblioteker på Pico via Bluetooth...":"Tjekker biblioteker på Pico..."}),V("info",ve?"Tjekker om Picoens biblioteker er opdaterede via Bluetooth før installation...":"Tjekker om Picoens biblioteker er opdaterede før installation...");try{const f=W.length>0?W:ve?await Oi((g,w)=>se({value:g,label:w})):await gl(()=>Is(bt.current));me(f),Oe(yh(f)),J(!0),se(null)}catch(f){se(null),V("error",f instanceof Error?f.message:"Fil-tjek før installation fejlede.")}finally{L(!1)}}async function to(){if(J(!1),ve){L(!0);try{const g=(W.length>0?W:ca.map(j=>({...j,status:"unknown",detail:"Ikke tjekket"}))).filter(j=>ie[j.id]&&!sl(j));if(g.length===0){V("info","Ingen filer valgt til installation.");return}let w=null;se({value:0,label:"Starter installation..."});for(const[j,C]of g.entries()){V("info",`Installerer ${C.label} via Bluetooth...`);const X=j/g.length*100,fe=100/g.length;await m(C.path,C.content,(De,Ee)=>{se({value:Math.min(99,X+De/100*fe),label:`${C.label}: ${Ee}`})}),Bs(C.path,C.content),V("success",`Installerede ${C.label}.`),C.kind==="library"&&(w=C),oc(C.path)&&In("saved")}yt("Installation færdig"),await gt(!1),await Hr(),w&&Aa(w)}catch(f){se(null),V("error",f instanceof Error?f.message:"BLE installation fejlede.")}finally{L(!1)}return}await pn(async f=>{const w=(W.length>0?W:ca.map(C=>({...C,status:"unknown",detail:"Ikke tjekket"}))).filter(C=>ie[C.id]);if(w.length===0){V("info","Ingen filer valgt til installation.");return}let j=null;se({value:0,label:"Starter installation..."});for(const[C,X]of w.entries()){V("info",`Installerer ${X.label}...`);const fe=C/w.length*100,De=100/w.length,Ee=await f.readText(X.path).catch(()=>null);Ee!==null&&Yl(Ee)===Yl(X.content)?(se({value:Math.min(99,fe+De),label:`${X.label}: Allerede nyeste version`}),V("info",`${X.label} findes allerede i samme version.`)):(await f.replaceTextSafely(X.path,X.content,(qe,ot)=>{se({value:Math.min(99,fe+qe/100*De),label:`${X.label}: ${ot}`})},{createBackup:!0}),V("success",`Installerede ${X.label}.`)),Bs(X.path,X.content),X.kind==="library"&&(j=X)}yt("Installation færdig"),await gt(!1),await Hr(),j&&Aa(j)})}function Li(){return(W.length>0?W:bh()).filter(g=>ie[g.id])}function Ra(){const f=Li();if(f.length===0){V("info","Ingen filer valgt.");return}for(const g of f)qs(g.path,g.content);J(!1),V("success",`Gemte ${f.length} filer i browseren.`)}function no(){const f=Li();if(f.length===0){V("info","Ingen filer valgt.");return}f.forEach((g,w)=>{window.setTimeout(()=>{$s(Ae(g.path),g.content)},w*120)}),J(!1),V("success",`Starter download af ${f.length} filer.`)}function Aa(f){rt(f.path,f.content,"pico"),Et(f.path,f.content),V("info",`Åbnede ${f.label} i editoren.`)}function ro(f,g){Oe(w=>{if(f.kind!=="program")return{...w,[f.id]:g};const j={...w};for(const C of W)C.kind==="program"&&(j[C.id]=!1);return j[f.id]=g,j})}async function zc(){if(io(),ve&&we==="pico"){V("warning","Bluetooth holder forbindelsen åben, så koden kan ikke køres direkte her. Gem filen, og genstart Picoen for at køre den.");return}if(we==="local"){await Uc();return}const f=Yn.current;if(!f){V("error",`${Ae(ne)} er gemt på Picoen, men der er ingen USB-forbindelse til Pico-terminalen.`);return}if(ne.endsWith(".py")){if(!Ci()&&(V("info",`${Ae(ne)} har ikke gemte ændringer. Gemmer på Picoen før kørsel...`),!await Ea())){V("error","Pico-forbindelsen blev afbrudt under gemning.");return}if(F)return;pl(),Ft.current="",$e(!0);try{await f.runFile(ne,()=>{pl(),Ft.current="",ol.current=!1,Kt(!0),st.current=!0}),V("success",`Kører ${Ae(ne)}. Brug Stop for at afbryde.`)}catch(g){Kt(!1),st.current=!1,pl(),Ft.current="",V("error",g instanceof Error?g.message:"Kunne ikke starte koden.")}return}L(!0);try{const g=await f.exec(Z,2e4);g.output.trim()&&V("info",g.output),g.error.trim()&&Rr(g.error,Z),!g.output.trim()&&!g.error.trim()&&V("success","Koden kørte uden output.")}catch(g){V("error",g instanceof Error?g.message:"Kunne ikke køre koden.")}finally{L(!1)}}async function Uc(){const f=Jd(Z,{allowInput:!0});if(f.some(j=>j.level==="error")){for(const j of f){const C=j.line?`Linje ${j.line}: `:"";V(j.level==="error"?"error":"warning",`${C}${j.text}`)}return}/\binput\s*\(/.test(Z)&&!ip()&&V("warning","input() i browseren kræver at siden genindlæses. Opdater siden (F5) og prøv igen.");const g=new AbortController;Ti.current=g;const w=new Nv;Mr.current=w,L(!0),kr(!0),zt(!1),$e(!0),V("info",x?"Starter Browser-MicroPython for browser-filen.":"Starter Browser-MicroPython. Forbind Pico med USB for at køre på selve Picoen.");try{const j=[],C=await w.run(Z,{timeoutMs:null,signal:g.signal,onOutput:Ee=>{j.push(Ee),V("info",Ee)},onWaitingForInput:zt});for(const Ee of C.issues){const qe=Ee.line?`Linje ${Ee.line}: `:"";V(Ee.level==="error"?"error":"warning",`${qe}${Ee.text}`)}const X=[...j,C.output].filter(Boolean).join(`
`).trim(),fe=C.output.trim();!C.error.trim()&&Zv(X)?Rr(X,Z):(fe&&V("info",fe),C.error.trim()&&Rr(C.error,Z,C.unavailable?"warning":"error")),C.ok&&!X&&!C.error.trim()&&V("success","Browser-MicroPython kørte uden output.")}finally{Ti.current=null,Mr.current=null,w.dispose(),kr(!1),zt(!1),L(!1)}}async function qc(){var g,w,j;if(Ur){(g=Ti.current)==null||g.abort(),(w=Mr.current)==null||w.stop(),V("warning","Stoppede Browser-MicroPython."),$e(!0);return}if(!Rn&&Mn){(j=Wl.current)==null||j.reset(),Zt(!1),V("warning","Stoppede Browser-MicroPython-terminalen. Variablerne i browser-terminalen blev nulstillet."),$e(!0);return}const f=Yn.current;if(f)try{await f.stop(),V("warning","Stoppede koden på Pico.")}catch(C){V("error",C instanceof Error?C.message:"Kunne ikke stoppe koden.")}finally{Kt(!1),st.current=!1,pl(),Ft.current="",$e(!0),ya()}}function Hc(){const f=hr.current;if(!f)return;const g=f.scrollHeight-f.scrollTop-f.clientHeight<12;$e(g)}function Vc(){H([]),$e(!0)}function un(){window.requestAnimationFrame(()=>{const f=hr.current;f&&(f.scrollTop=f.scrollHeight)})}async function Vr(){const f=cn?Wt:Wt.trimEnd();if(cn){if(!Rn){const j=Mr.current;if(!j){V("warning","Browser-MicroPython kører ikke lige nu."),Cn();return}Tn(""),$e(!0),ba(f),j.sendInput(f),Cn();return}const w=Yn.current;if(!w){V("warning","Pico-terminalen er ikke forbundet."),Cn();return}Tn(""),$e(!0);try{await w.sendProgramInput(f)}catch(j){V("error",j instanceof Error?j.message:"Kunne ikke sende input til Pico-koden.")}finally{Cn()}return}if(!f.trim())return;if(cr(w=>(w.at(-1)===f?w:[...w,f]).slice(-80)),ur(null),kt(null),Mi){V("warning",Rn?"Tryk Stop, før du skriver i Pico-terminalen.":"Stop offline MicroPython, før du skriver i browser-terminalen."),Cn();return}if(!Rn){const w=Jd(f);if(w.some(C=>C.level==="error")){for(const C of w){const X=C.line?"Linje "+C.line+": ":"";V(C.level==="error"?"error":"warning",X+C.text)}Cn();return}const j=Wl.current??new Mv;Wl.current=j,Tn(""),Zt(!0),$e(!0),V("info",">>> "+f);try{let C=!1;const X=await j.send(f,{timeoutMs:15e3,onOutput:De=>{C=!0,V("info",De)}}),fe=X.output.trim();fe&&!C&&V("info",fe),X.error.trim()&&Rr(X.error,f,X.unavailable?"warning":"error")}catch(C){V("error",C instanceof Error?C.message:"Browser-MicroPython-terminalen fejlede.")}finally{Zt(!1),Cn()}return}if(ve){V("warning","Terminalen bruger USB Serial. Bluetooth-forbindelsen kan vise filer, men kan ikke modtage frie terminalkommandoer."),Cn();return}const g=Yn.current;if(!x||!g){V("warning","Forbind en microcontroller med USB for at skrive i MicroPython-terminalen."),Cn();return}Tn(""),Zt(!0),$e(!0),ol.current=!0,V("info",">>> "+f);try{await g.sendFriendlyLine(f)}catch(w){ol.current=!1,V("error",w instanceof Error?w.message:"Kunne ikke sende kommando til MicroPython REPL.")}finally{Zt(!1),Cn()}}function Cn(){window.requestAnimationFrame(()=>{const f=Xn.current;if(!f||f.disabled)return;f.focus();const g=f.value.length;f.selectionStart=g,f.selectionEnd=g})}function Ca(f,g,w){if(w.length===0)return null;const j=x||ve;return u.jsxs("div",{className:"ide-install-group",children:[u.jsxs("div",{className:"ide-install-group-head",children:[u.jsx("h3",{children:f}),u.jsx("p",{children:g})]}),u.jsx("div",{className:"ide-install-scroll",children:w.map(C=>{const X=ve&&sl(C);return u.jsxs("label",{className:`ide-install-row ${X?"disabled":""}`,children:[u.jsx("input",{type:"checkbox",checked:!!ie[C.id],disabled:X,onChange:fe=>ro(C,fe.target.checked)}),u.jsxs("span",{children:[u.jsxs("strong",{children:[lo(C),j&&C.kind==="library"&&u.jsx("em",{className:`ide-install-status status-${C.status}`,children:X?"USB":fb(C.status)})]}),u.jsx("small",{children:C.description})]})]},C.id)})})]})}function lo(f){return f.kind==="program"?f.label.replace(/\s*\(main\.py\)$/i,""):f.label}function io(){on&&H([]),$e(!0)}function oi(f,g){const w=f.indexOf(`
`,g);return w===-1?f.length:w}function Da(f,g){if(kh(f,g)){We(null);return}const w=rf(f,g);if(!w||w.query.length<1){We(null);return}const j=xh(f,g,!0).slice(0,8),C=Sh(fr.current,w.start,j.length);j.length>0&&C?(We({items:j,selected:0,start:w.start,end:g,position:C}),Qn(mr.current,0)):We(null)}function Ir(f,g){if(kh(f,g)){kt(null);return}const w=rf(f,g);if(!w||w.query.length<1){kt(null);return}const j=xh(f,g,!1).slice(0,8),C=Sh(Xn.current,w.start,j.length);j.length>0&&C?(kt({items:j,selected:0,start:w.start,end:g,position:C}),Qn(pr.current,0)):kt(null)}function Bi(f){const g=f.value.slice(f.selectionStart,f.selectionEnd);sn(ib(g)?g:"")}function Qn(f,g){window.requestAnimationFrame(()=>{const w=f==null?void 0:f.querySelector(`[data-autocomplete-index="${g}"]`);w==null||w.scrollIntoView({block:"nearest"})})}function ci(f=he==null?void 0:he.items[he.selected]){if(!f||!he)return;const g=hn(),w=Z.slice(0,he.start)+f.insert+Z.slice(he.end),j=he.start+f.insert.length-(f.insert.endsWith("()")?1:0);We(null),St(w,j,g),window.requestAnimationFrame(()=>{const C=fr.current;C&&C.focus()})}function Oa(f=nt==null?void 0:nt.items[nt.selected]){if(!f||!nt)return;const g=Wt.slice(0,nt.start)+f.insert+Wt.slice(nt.end),w=nt.start+f.insert.length-(f.insert.endsWith("()")?1:0);Tn(g),kt(null),window.requestAnimationFrame(()=>{const j=Xn.current;j&&(j.focus(),j.selectionStart=w,j.selectionEnd=w)})}function Pr(f){const g=fr.current;if(!g)return!1;const w=g.selectionStart,j=g.selectionEnd,C={content:Z,selectionStart:w,selectionEnd:j},X=Z.lastIndexOf(`
`,w-1)+1,fe=j>w&&Z[j-1]===`
`?j-1:j,De=oi(Z,fe),Ee=De<Z.length?De+1:De,qe=Z.slice(X,Ee);if(f<0){if(X===0)return!1;const Dn=Z.lastIndexOf(`
`,X-2)+1,_n=Z.slice(Dn,X),vr=Z.slice(0,Dn)+qe+_n+Z.slice(Ee),Cr=-_n.length;return St(vr,w+Cr,C,j+Cr),!0}if(Ee>=Z.length)return!1;const ot=oi(Z,Ee),ht=ot<Z.length?ot+1:ot,Ue=Z.slice(Ee,ht),et=Z.slice(0,X)+Ue+qe+Z.slice(ht),gn=Ue.length;return St(et,w+gn,C,j+gn),!0}function wl(f){var ht;if(va){(f.key==="Enter"||f.key==="Tab"||(f.ctrlKey||f.metaKey)&&["z","y","s"].includes(f.key.toLowerCase()))&&f.preventDefault();return}if((f.ctrlKey||f.metaKey)&&f.key.toLowerCase()==="z"){f.preventDefault(),(f.shiftKey?xa():Ai())&&We(null);return}if((f.ctrlKey||f.metaKey)&&f.key.toLowerCase()==="y"){f.preventDefault(),xa()&&We(null);return}if((f.ctrlKey||f.metaKey)&&f.key.toLowerCase()==="s"){f.preventDefault(),!F&&ne.trim()&&Fs();return}if(f.altKey&&!f.ctrlKey&&!f.metaKey&&(f.key==="ArrowUp"||f.key==="ArrowDown")){f.preventDefault(),Pr(f.key==="ArrowUp"?-1:1)&&We(null);return}if(he){if(f.key==="ArrowDown"){f.preventDefault(),We(Ue=>{if(!Ue)return Ue;const et=(Ue.selected+1)%Ue.items.length;return Qn(mr.current,et),{...Ue,selected:et}});return}if(f.key==="ArrowUp"){f.preventDefault(),We(Ue=>{if(!Ue)return Ue;const et=(Ue.selected-1+Ue.items.length)%Ue.items.length;return Qn(mr.current,et),{...Ue,selected:et}});return}if(f.key==="Tab"){f.preventDefault(),ci();return}if(f.key==="Enter"){if(!(he.items[he.selected]&&dp(he.items[he.selected],Z.slice(he.start,he.end)))){f.preventDefault(),ci();return}We(null)}if(f.key==="Escape"){f.preventDefault(),We(null);return}}if(f.key==="Enter"){f.preventDefault();const Ue=f.currentTarget,et=Ue.selectionStart,gn=Ue.selectionEnd,Dn={content:Z,selectionStart:et,selectionEnd:gn},_n=Z.lastIndexOf(`
`,et-1)+1,vr=Z.slice(_n,et),Cr=((ht=vr.match(/^[ \t]*/))==null?void 0:ht[0])??"",Dr=vr.trimEnd().endsWith(":")?"    ":"",ui=`
${Cr}${Dr}`,xl=Z.slice(0,et)+ui+Z.slice(gn),Wn=et+ui.length;St(xl,Wn,Dn),window.requestAnimationFrame(()=>{Ue.selectionStart=Wn,Ue.selectionEnd=Wn});return}if(f.key!=="Tab")return;f.preventDefault();const g=f.currentTarget,w=g.selectionStart,j=g.selectionEnd,C={content:Z,selectionStart:w,selectionEnd:j},X="    ";if(f.shiftKey){const Ue=Z.lastIndexOf(`
`,w-1)+1,et=w===j?oi(Z,w):j,gn=Z.slice(Ue,et);let Dn=0,_n=0;const vr=gn.replace(/(^|\n)( {1,4}|\t)/g,(Dr,ui,xl,Wn)=>{const ao=xl.length;return Ue+Wn<w&&(Dn+=ao),_n+=ao,ui});if(_n===0)return;const Cr=Z.slice(0,Ue)+vr+Z.slice(et);St(Cr,Math.max(Ue,w-Dn),C,w===j?Math.max(Ue,w-Dn):Math.max(Ue,j-_n)),window.requestAnimationFrame(()=>{g.selectionStart=Math.max(Ue,w-Dn),g.selectionEnd=w===j?g.selectionStart:Math.max(g.selectionStart,j-_n)});return}if(w===j){const Ue=Z.slice(0,w)+X+Z.slice(j);St(Ue,w+X.length,C),window.requestAnimationFrame(()=>{g.selectionStart=w+X.length,g.selectionEnd=w+X.length});return}const fe=Z.lastIndexOf(`
`,w-1)+1,Ee=Z.slice(fe,j).replace(/^/gm,X),qe=Ee.split(`
`).length,ot=Z.slice(0,fe)+Ee+Z.slice(j);St(ot,w+X.length,C,j+qe*X.length),window.requestAnimationFrame(()=>{g.selectionStart=w+X.length,g.selectionEnd=j+qe*X.length})}function La(f){if(cn){f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),Vr());return}if(nt){if(f.key==="ArrowDown"){f.preventDefault(),kt(g=>{if(!g)return g;const w=(g.selected+1)%g.items.length;return Qn(pr.current,w),{...g,selected:w}});return}if(f.key==="ArrowUp"){f.preventDefault(),kt(g=>{if(!g)return g;const w=(g.selected-1+g.items.length)%g.items.length;return Qn(pr.current,w),{...g,selected:w}});return}if(f.key==="Enter"||f.key==="Tab"){f.preventDefault(),Oa();return}if(f.key==="Escape"){f.preventDefault(),kt(null);return}}if(f.key==="Tab"){f.preventDefault();const g=f.currentTarget,w=g.selectionStart,j=g.selectionEnd,C="    ",X=Wt.slice(0,w)+C+Wt.slice(j),fe=w+C.length;Tn(X),ur(null),kt(null),window.requestAnimationFrame(()=>{g.selectionStart=fe,g.selectionEnd=fe});return}if(f.key==="ArrowUp"||f.key==="ArrowDown"){if(!(f.key==="ArrowUp"?f.currentTarget.selectionStart===0&&f.currentTarget.selectionEnd===0:f.currentTarget.selectionStart===Wt.length&&f.currentTarget.selectionEnd===Wt.length)||Pn.length===0)return;f.preventDefault();const w=f.key==="ArrowUp"?Fn===null?Pn.length-1:Math.max(0,Fn-1):Fn===null||Fn+1>=Pn.length?null:Fn+1;ur(w);const j=w===null?"":Pn[w]??"";Tn(j),kt(null),$e(!0),window.requestAnimationFrame(()=>{const C=Xn.current;C&&(C.selectionStart=j.length,C.selectionEnd=j.length,un())});return}f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),Vr())}return u.jsxs("div",{className:"screen ide-screen",children:[u.jsx(mf,{title:"Pico Kodeværksted",onMenu:()=>i()}),jt?u.jsx("div",{className:"ide-size-gate",role:"dialog","aria-modal":"true","aria-labelledby":"ide-size-title",children:u.jsxs("div",{className:"ide-size-gate-panel",children:[u.jsx("h2",{id:"ide-size-title",children:"Brug en bærbar for at bruge Kodeværkstedet"}),u.jsx("p",{children:"Denne skærm er for lille, så du skal åbne Kodeværkstedet på en bærbar eller en større skærm."})]})}):u.jsxs("div",{className:"ide-layout",children:[u.jsxs("section",{className:"ide-panel ide-files-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Filer"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:Ws,"aria-label":"Ny fil",title:"Ny fil",children:u.jsx(Pt,{name:"plus",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>{var f;return(f=Cs.current)==null?void 0:f.click()},"aria-label":"Importer fil",title:"Importer fil",children:u.jsx(Pt,{name:"upload",size:20})}),u.jsx("button",{className:"btn btn-outline ide-tool-btn",type:"button",onClick:()=>gt(),disabled:!x&&!ve||F,"aria-label":"Opdater filer",title:"Opdater filer",children:u.jsx(Pt,{name:"refresh",size:20})})]})]}),u.jsx("div",{className:"ide-file-list",children:ka.length===0?u.jsx("button",{type:"button",disabled:!0,children:"Ingen filer læst"}):ka.map(f=>{if(f.kind==="separator"){const C=f.id==="pico-files"&&!x&&!ve;return u.jsxs(N.Fragment,{children:[u.jsx("div",{className:`ide-file-separator ${f.id==="browser-files"?"browser-section":""}`,children:u.jsx("span",{children:f.label})}),C&&u.jsx("div",{className:"ide-file-disconnected",role:"status",children:"Ikke forbundet"})]},f.id)}const g=ve&&sl(f),w=an[It(f.source,f.path)],j=w!==void 0&&w!==cb(f,ye,ln);return u.jsxs("div",{className:`ide-file-row ${ne===f.path&&we===f.source?"active":""} ${g?"protected":""}`,children:[u.jsxs("button",{type:"button",onClick:()=>si(f),disabled:g,title:g?"Holder Bluetooth-forbindelsen i gang og kan ikke åbnes her":void 0,children:[u.jsx("span",{children:f.name}),u.jsxs("small",{title:j?"Ikke gemte ændringer":"Ingen ikke gemte ændringer",children:[f.versions.length>0&&u.jsx("em",{className:"ide-file-version-count",title:`${f.versions.length} gemte versioner i historikken`,children:f.versions.length}),u.jsx("i",{className:`ide-file-dirty-dot ${j?"dirty":"clean"}`,"aria-hidden":"true"})]})]}),u.jsx("button",{className:"ide-file-actions",type:"button",onClick:()=>bl(f),disabled:f.type!=="file"||F||g,"aria-label":`Filvalg for ${f.name}`,title:g?"Holder Bluetooth-forbindelsen i gang og kan ikke ændres her":"Filvalg",children:u.jsx(Pt,{name:"settings",size:16})})]},`${f.source}:${f.path}`)})})]}),u.jsxs("section",{className:"ide-panel ide-status-panel",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"ide-status-head",children:[u.jsx("h2",{children:ve?"Forbundet Pico":"USB udvikling"}),!ve&&u.jsx("span",{className:`ide-usb-status ${ul.supported?"available":"unavailable"}`,title:ul.message,"data-tooltip":ul.message,role:"img","aria-label":ul.message,tabIndex:0,children:"!"})]}),ve&&u.jsxs("p",{children:[(s==null?void 0:s.deviceName)??"Pico"," er forbundet via Bluetooth."]})]}),!ve&&u.jsxs("div",{className:"ide-actions",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:x?Hs:Nc,disabled:!ul.supported||D,children:D?"Forbinder...":x?"Afbryd USB":"Forbind USB"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:ja,disabled:ve||F,children:"Download"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:Dc,disabled:!x||F,children:"Nulstil enhed"})]}),ve&&u.jsxs("div",{className:"ide-actions",children:[u.jsxs("button",{className:"btn btn-primary ide-connection-state",type:"button",disabled:!0,children:[u.jsx(Pt,{name:"power",size:22}),"Bluetooth forbundet"]}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:ja,disabled:F,children:"Startprogrammer og biblioteker"})]}),!ve&&u.jsx("div",{className:"ide-runtime",children:u.jsx("div",{className:"ide-mini-actions single",children:u.jsx("button",{className:"btn btn-outline ide-disconnect-btn",type:"button",onClick:()=>Ve(!0),children:"MicroPython"})})})]}),u.jsxs("section",{className:"ide-panel ide-editor-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("div",{className:"ide-editor-title",children:u.jsxs("h2",{children:[Ae(ne),u.jsxs("small",{children:[_a," bytes"]})]})}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:"btn btn-outline",type:"button",onClick:zc,disabled:F,children:"Kør"}),ve&&we==="pico"?u.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>In("manual"),disabled:F,children:"Genstart"}):u.jsx("button",{className:"btn btn-outline",type:"button",onClick:qc,disabled:!Ur&&!(!Rn&&Mn)&&(!x||!En),children:"Stop"}),u.jsx("button",{className:"btn btn-primary",type:"button",onClick:Ac,disabled:F||!ne.trim(),children:"Gem"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Xs(),disabled:F||!ne.trim(),children:"Slet"})]})]}),Di(),u.jsxs("div",{className:"ide-editor-wrap",children:[u.jsx("div",{ref:Ql,className:"ide-line-numbers","aria-hidden":"true",style:{transform:`translateY(${-Sn.top}px)`},children:Array.from({length:Ds},(f,g)=>u.jsx("span",{children:g+1},g))}),u.jsx("pre",{ref:qr,className:"ide-highlight","aria-hidden":"true",style:{transform:`translate(${-Sn.left}px, ${-Sn.top}px)`},children:ob(Z,Gn)}),u.jsx("textarea",{ref:fr,className:"ide-editor",value:Z,onChange:f=>St(f.target.value,f.target.selectionStart,hn(),f.target.selectionEnd,"typing"),onKeyDown:wl,onKeyUp:f=>{["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(f.key)||Da(f.currentTarget.value,f.currentTarget.selectionStart)},onClick:f=>{We(null),Bi(f.currentTarget)},onSelect:f=>Bi(f.currentTarget),onScroll:f=>{const{scrollTop:g,scrollLeft:w}=f.currentTarget;Ql.current&&(Ql.current.style.transform=`translateY(${-g}px)`),qr.current&&(qr.current.style.transform=`translate(${-w}px, ${-g}px)`),sr({top:g,left:w}),he&&Da(f.currentTarget.value,f.currentTarget.selectionStart)},readOnly:va,"aria-busy":va,spellCheck:!1}),he&&u.jsx("div",{ref:mr,className:`ide-autocomplete placement-${he.position.placement}`,role:"listbox","aria-label":"Kodeforslag",style:{left:he.position.left,top:he.position.top,maxHeight:he.position.maxHeight},children:(he.position.placement==="above"?he.items.map((f,g)=>({item:f,index:g})).reverse():he.items.map((f,g)=>({item:f,index:g}))).map(({item:f,index:g})=>u.jsx("button",{className:g===he.selected?"active":"",type:"button","data-autocomplete-index":g,onMouseDown:w=>{w.preventDefault(),ci(f)},role:"option","aria-selected":g===he.selected,children:f.label},f.label))}),te&&u.jsxs("div",{className:"ide-editor-loading",role:"status","aria-live":"polite",children:[u.jsx("span",{className:"spinner","aria-hidden":"true"}),u.jsxs("strong",{children:["Indlæser ",Ae(te),"..."]})]})]})]}),u.jsxs("section",{className:"ide-panel ide-terminal-panel",children:[u.jsxs("div",{className:"ide-panel-head",children:[u.jsx("h2",{children:"Terminal"}),u.jsxs("div",{className:"ide-mini-actions",children:[u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${$n?"":"active"}`,type:"button",onClick:()=>Er(f=>!f),"aria-label":$n?"Tekniske fejl er slået fra":"Tekniske fejl er slået til","aria-pressed":!$n,title:$n?"Vis originale tekniske fejl":"Viser originale tekniske fejl",children:"Teknisk"}),u.jsx("button",{className:`btn btn-outline ide-terminal-toggle ${on?"active":""}`,type:"button",onClick:()=>Sr(f=>!f),"aria-pressed":on,title:on?"Terminalen ryddes, hver gang du trykker Kør":"Terminalen beholder tekst, når du trykker Kør",children:"Ryd ved Kør"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Vc,disabled:G.length===0,children:"Ryd"})]})]}),u.jsxs("div",{className:"ide-terminal","aria-live":"polite",ref:hr,onScroll:Hc,onClick:()=>{var f;return(f=Xn.current)==null?void 0:f.focus()},children:[G.length===0?u.jsx("div",{className:"term-line",children:"Ingen terminaldata endnu."}):G.map((f,g)=>u.jsx("div",{className:`term-line ${f.variant==="input"?"term-input-echo":`term-${f.level}`}`,children:f.technical&&!$n?f.technical:f.text},`${g}-${f.text}`)),u.jsxs("form",{className:`ide-terminal-command ${Mi&&!cn?"locked":""} ${cn?"stdin":""}`,onSubmit:f=>{f.preventDefault(),Vr()},children:[u.jsx("span",{"aria-hidden":"true",children:Tc}),u.jsx("textarea",{ref:Xn,value:Wt,onChange:f=>{Tn(f.target.value),ur(null),cn?kt(null):Ir(f.target.value,f.target.selectionStart)},onKeyDown:La,onKeyUp:f=>{cn||["ArrowUp","ArrowDown","Enter","Tab","Escape"].includes(f.key)||Ir(f.currentTarget.value,f.currentTarget.selectionStart)},onClick:()=>kt(null),disabled:Ec,placeholder:ti,"aria-label":cn?"Input til kørende Pico-kode":"MicroPython-terminalkommando",title:ti,rows:Math.max(1,Wt.split(`
`).length)})]}),nt&&u.jsx("div",{ref:pr,className:`ide-autocomplete ide-repl-autocomplete placement-${nt.position.placement}`,role:"listbox","aria-label":"Terminalforslag",style:{left:nt.position.left,top:nt.position.top,maxHeight:nt.position.maxHeight},children:(nt.position.placement==="above"?nt.items.map((f,g)=>({item:f,index:g})).reverse():nt.items.map((f,g)=>({item:f,index:g}))).map(({item:f,index:g})=>u.jsx("button",{className:g===nt.selected?"active":"",type:"button","data-autocomplete-index":g,onMouseDown:w=>{w.preventDefault(),Oa(f)},role:"option","aria-selected":g===nt.selected,children:f.label},f.label))})]})]})]}),re&&u.jsx("div",{className:"ide-restart-overlay",role:"alert","aria-live":"assertive",children:u.jsxs("div",{className:"ide-restart-overlay-panel",children:[u.jsx("div",{className:"spinner"}),u.jsx("p",{children:k.label||"Genstarter Pico..."})]})}),u.jsx("input",{ref:Cs,type:"file",accept:".py,.txt,.json,.csv",className:"sr-only",onChange:f=>{var g;Qs((g=f.target.files)==null?void 0:g[0]),f.currentTarget.value=""}}),Ye&&u.jsx(Ht,{title:"Gem fil",onClose:()=>Ct(!1),children:u.jsxs("div",{className:"ide-save-options",children:[u.jsx("button",{className:"btn btn-primary",type:"button",onClick:()=>void Ea(),disabled:!x&&!ve||F,children:"Gem filen på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Cc,children:"Download filen til computer"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:Gs,children:"Gem filen i browseren"})]})}),P&&u.jsx(Ht,{title:"Startprogrammer og biblioteker",onClose:()=>J(!1),children:u.jsxs("div",{className:"ide-install-list",children:[u.jsx("p",{className:"ide-install-note",children:x||ve?"Vælg et startprogram og de biblioteker dit projekt bruger. Installer lægger filerne på Picoen.":"Du er ikke forbundet til en Pico. Du kan gemme filerne i browseren eller downloade dem til computeren, men de virker først på Picoen, når de er installeret der."}),u.jsxs("div",{className:"ide-install-grid",children:[Ca("Startprogrammer (main.py)","Starter automatisk på Picoen.",W.filter(f=>f.kind==="program")),Ca("Biblioteker","Ekstra Python-filer som dine programmer kan importere.",W.filter(f=>f.kind==="library"))]}),u.jsxs("div",{className:"ide-install-actions",children:[(x||ve)&&u.jsx("button",{className:"btn btn-primary",type:"button",onClick:to,disabled:F,children:"Installer på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:no,disabled:F,children:"Download til computer"}),u.jsx("button",{className:x||ve?"btn btn-outline":"btn btn-primary",type:"button",onClick:Ra,disabled:F,children:"Gem i browseren"})]})]})}),xr&&u.jsx(Ht,{title:xr==="saved"?"main.py er gemt":"Genstart Pico",onClose:()=>In(null),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:xr==="saved"?"Picoen kører stadig den gamle kode. Genstart Picoen for at anvende den nye main.py. Appen forsøger automatisk at genforbinde bagefter.":"Picoen genstarter og kører main.py forfra. Appen forsøger automatisk at genforbinde bagefter."}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>void Ys("control"),disabled:F,children:"Genstart og åbn kontrolpanel"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void Ys("ide"),disabled:F,children:"Genstart og bliv i Kodeværksted"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>In(null),disabled:F,children:"Senere"})]})}),Ge&&u.jsx(Ht,{title:"Installer MicroPython",onClose:()=>Ve(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:"Hvis Picoen er helt frisk, skal MicroPython først lægges på den."}),u.jsxs("ol",{className:"micropython-steps",children:[u.jsx("li",{children:"Hold BOOTSEL-knappen nede."}),u.jsx("li",{children:"Sæt Picoen i USB, og slip derefter BOOTSEL."}),u.jsx("li",{children:"Vælg Pico-model og MicroPython-version herunder, og download UF2-filen."}),u.jsxs("li",{children:["Kopier UF2-filen til drevet ",u.jsx("strong",{children:"RPI-RP2"})]})]}),u.jsxs("div",{className:"micropython-selects",children:[u.jsx("label",{htmlFor:"micropython-board",children:"Pico-model"}),u.jsx("select",{id:"micropython-board",value:xt,onChange:f=>fn(f.target.value),children:Os.map(f=>u.jsx("option",{value:f,children:f},f))}),u.jsx("label",{htmlFor:"micropython-version",children:"MicroPython-version"}),u.jsx("select",{id:"micropython-version",value:(jn==null?void 0:jn.version)??kn,onChange:f=>Nt(f.target.value),children:fl.map(f=>u.jsxs("option",{value:f.version,children:[f.version," (",f.date,")"]},`${f.board}:${f.version}:${f.date}`))})]}),jn&&u.jsx("a",{className:"btn btn-primary btn-block",href:jn.url,download:jn.fileName,children:"Download UF2"}),u.jsx("a",{className:"btn btn-outline btn-block",href:"https://www.raspberrypi.com/documentation/microcontrollers/micropython.html",target:"_blank",rel:"noreferrer",children:"Se vejledning"})]})}),Re&&u.jsx(Ht,{title:"Ny Python-fil",onClose:()=>_e(!1),children:u.jsxs("form",{className:"ide-new-file-form",onSubmit:f=>{f.preventDefault(),Zs()},children:[u.jsx("label",{htmlFor:"new-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"new-pico-file",value:T,onChange:f=>$(f.target.value),autoFocus:!0,placeholder:"test"}),u.jsx("span",{className:"ide-new-file-dot",children:"."}),u.jsx("input",{id:"new-pico-file-ext",className:"ide-new-file-ext",value:le,onChange:f=>ae(op(f.target.value)),placeholder:"py",size:Math.max(2,le.length||2),"aria-label":"Filendelse"})]}),u.jsxs("p",{children:["Skriv navnet og evt. din egen filendelse (standard er .py). Filen oprettes i ",dl,"."]}),u.jsx("button",{className:"btn btn-primary",type:"submit",disabled:!gh(T,le),children:"Opret"})]})}),de&&u.jsx(Ht,{title:Ae(de.path),onClose:()=>Fe(null),children:u.jsxs("div",{className:"ide-file-action-modal",children:[u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:"Placering"}),u.jsx("strong",{children:de.source==="pico"?"Pico":"Browser"})]}),u.jsxs("form",{className:"ide-file-rename-form",onSubmit:f=>{f.preventDefault(),ai()},children:[u.jsx("label",{htmlFor:"rename-pico-file",children:"Filnavn"}),u.jsxs("div",{className:"ide-new-file-row",children:[u.jsx("input",{id:"rename-pico-file",value:Se,onChange:f=>xe(f.target.value),placeholder:"min_kode"}),u.jsxs("span",{children:[".",ws(de.path)]})]}),u.jsxs("p",{children:["Skriv kun navnet. Appen beholder filendelsen .",ws(de.path)," automatisk."]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"submit",disabled:!Gd(Se,ws(de.path))||Gd(Se,ws(de.path))===de.path||F,children:"Gem navn"})]}),u.jsxs("div",{className:"ide-file-action-buttons",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void ii(),disabled:F||de.source==="local"&&!x&&!ve,children:de.source==="pico"?"Flyt til browser":"Flyt til Pico"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void eo(),disabled:F,children:"Dupliker"}),u.jsx("button",{className:"btn btn-outline btn-danger btn-block",type:"button",onClick:()=>Xs(de),disabled:F,children:"Slet"})]}),u.jsxs("section",{className:"ide-version-history",children:[u.jsx("h4",{children:"Versionshistorik"}),de.versions.length===0?u.jsx("p",{children:"Versionshistorik: 0 gemte versioner."}):u.jsx("div",{className:"ide-version-list",children:de.versions.map(f=>u.jsxs("div",{className:"ide-version-row",children:[u.jsx("span",{children:Ae(f.path)}),u.jsx("small",{children:f.size!==void 0?`${f.size} bytes`:"Gemt på Pico"}),u.jsx("button",{className:"btn btn-outline",type:"button",onClick:()=>void Oc(f),disabled:F,children:"Gendan"}),u.jsx("button",{className:"btn btn-outline btn-danger",type:"button",onClick:()=>Lc(f),disabled:F,children:"Slet"})]},f.path))})]})]})})]})}function gh(i,l=""){var d;const o=(d=i.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:d.replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,""),s=op(l)||"py";return o?`/${o}.${s}`:""}function op(i){return i.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()}function Yv(i){const l=i.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop(),o=l==null?void 0:l.match(/^(.+)\.(py|txt|json|csv)$/i);if(!o)return"";const s=cp(o[1]);return s?`/${s}.${o[2].toLowerCase()}`:""}function Gd(i,l="py"){const o=i.trim().replace(/\\/g,"/").split("/").filter(Boolean).pop();if(!o)return"";const s=o.match(/^(.+?)(?:\.(py|txt|json|csv))?$/i);if(!s)return"";const d=cp(s[1]),h=l.replace(/^\./,"").toLowerCase(),_=(s[2]??(h||"py")).toLowerCase();return d?`/${d}.${_}`:""}function Xv(i){return Ae(i).replace(/\.(py|txt|json|csv)$/i,"")}function cp(i){return i.replace(/[^\p{L}\p{N}_-]/gu,"_").replace(/^_+|_+$/g,"")}function ws(i){var s;const l=Ae(i).match(/\.([a-z0-9]+)$/i),o=(s=l==null?void 0:l[1])==null?void 0:s.toLowerCase();return o&&["py","txt","json","csv"].includes(o)?o:"py"}function Yl(i){return i.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd()}function up(i){return`/${i.replace(/\\/g,"/").replace(/^\/+/,"")}`.toLowerCase()}async function _h(i){const l=await i();return new Set(l.map(o=>up(o.path)))}function Kv(i){return i instanceof Error?i.message:String(i??"")}function Qv(i){return/ENOENT|No such file|not found/i.test(Kv(i))}function vh(i,l,o){const s=(o==null?void 0:o.has(up(i.path)))??!1;return!s&&Qv(l)?{...i,status:"missing",detail:"Mangler på Pico"}:{...i,status:"unknown",detail:s?"Filen findes, men kunne ikke læses. Stop koden eller genstart Picoen og tjek igen.":"Kunne ikke tjekkes. Stop koden eller genstart Picoen og tjek igen."}}function bh(){return ca.map(i=>({...i,status:"unknown",detail:"Kan gemmes uden Pico. Forbind en Pico for at installere."}))}function yh(i){const l={};return i.forEach(o=>{l[o.id]=!1}),l}function Ae(i){return i.split("/").filter(Boolean).pop()??i}function oc(i){return i.replace(/\\/g,"/").toLowerCase()==="/main.py"}function wh(i){const l=i.userAgent||"",o=i.platform||"",s=i.maxTouchPoints||0,d=/Android.*Mobile|iPhone|iPod|Windows Phone|Mobile Safari/i.test(l),h=/Macintosh/i.test(o)&&s>1;return d&&!h}function Wv(i){return i instanceof DOMException&&i.name==="AbortError"}function Zv(i){return/Traceback \(most recent call last\):/.test(i)||/\b(?:SyntaxError|NameError|TypeError|ValueError|IndentationError|ImportError|ModuleNotFoundError|ZeroDivisionError|IndexError|KeyError|AttributeError):/.test(i)}function sl(i){return Jv(i)}function Jv(i){return i.path.replace(/\\/g,"/").toLowerCase()==="/picobluetooth.py"}const nf=[...["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"].map(i=>({label:i,insert:`${i}${["for","if","while","def","class","elif","else","try","except","finally","with"].includes(i)?" ":""}`})),...["abs","all","any","bin","bool","bytearray","bytes","callable","chr","dict","dir","divmod","enumerate","eval","exec","filter","float","getattr","hasattr","hash","hex","id","input","int","isinstance","issubclass","iter","len","list","map","max","min","next","object","oct","open","ord","pow","print","range","repr","reversed","round","set","setattr","slice","sorted","str","sum","super","tuple","type","zip"].map(i=>({label:`${i}()`,insert:`${i}()`})),{label:"for i in range():",insert:"for i in range():"},{label:"while True:",insert:"while True:"},{label:"if True:",insert:"if True:"},{label:"time",insert:"time"},{label:"time.",insert:"time."},{label:"time.sleep",insert:"time.sleep"},{label:"time.sleep()",insert:"time.sleep()"},{label:"time.sleep_ms()",insert:"time.sleep_ms()"},{label:"time.ticks_ms()",insert:"time.ticks_ms()"},{label:"time.ticks_diff()",insert:"time.ticks_diff()"},{label:"time.sleep_us()",insert:"time.sleep_us()"},{label:"time.ticks_us()",insert:"time.ticks_us()"},{label:"machine",insert:"machine"},{label:"machine.",insert:"machine."},{label:"machine.Pin",insert:"machine.Pin"},{label:"machine.PWM",insert:"machine.PWM"},{label:"machine.ADC",insert:"machine.ADC"},{label:"machine.I2C",insert:"machine.I2C"},{label:"machine.SPI",insert:"machine.SPI"},{label:"machine.Timer",insert:"machine.Timer"},{label:"machine.UART",insert:"machine.UART"},{label:"machine.reset()",insert:"machine.reset()"},{label:"machine.freq()",insert:"machine.freq()"},{label:"Pin()",insert:"Pin()"},{label:"PWM()",insert:"PWM()"},{label:"ADC()",insert:"ADC()"},{label:"I2C()",insert:"I2C()"},{label:"SPI()",insert:"SPI()"},{label:"Timer()",insert:"Timer()"},{label:"UART()",insert:"UART()"},{label:"Pin.OUT",insert:"Pin.OUT"},{label:"Pin.IN",insert:"Pin.IN"},{label:"Pin.PULL_UP",insert:"Pin.PULL_UP"},{label:"Pin.PULL_DOWN",insert:"Pin.PULL_DOWN"},{label:"Pin.IRQ_FALLING",insert:"Pin.IRQ_FALLING"},{label:"Pin.IRQ_RISING",insert:"Pin.IRQ_RISING"},{label:"import time",insert:"import time"},{label:"import utime as time",insert:"import utime as time"},{label:"import machine",insert:"import machine"},{label:"import random",insert:"import random"},{label:"import os",insert:"import os"},{label:"import sys",insert:"import sys"},{label:"from machine import Pin",insert:"from machine import Pin"},{label:"from machine import Pin, PWM",insert:"from machine import Pin, PWM"},{label:"from machine import Pin, PWM, ADC",insert:"from machine import Pin, PWM, ADC"},{label:"PicoBluetooth",insert:"PicoBluetooth"},{label:"PicoRobotics",insert:"PicoRobotics"},{label:"NeoPixel",insert:"NeoPixel"},{label:"HCSR04",insert:"HCSR04"},{label:"ble.send_toggle_state()",insert:"ble.send_toggle_state()"},{label:"ble.send_slider_state()",insert:"ble.send_slider_state()"},{label:"ble.send_radar()",insert:"ble.send_radar()"},{label:"ble.send_text()",insert:"ble.send_text()"},{label:"ble.send_plot()",insert:"ble.send_plot()"},{label:"on_button(name, is_down):",insert:"on_button(name, is_down):"},{label:"on_slider(name, value):",insert:"on_slider(name, value):"},{label:"on_toggle(name, value):",insert:"on_toggle(name, value):"},{label:"on_connect():",insert:"on_connect():"},{label:"on_disconnect():",insert:"on_disconnect():"},{label:"ValueError",insert:"ValueError"},{label:"TypeError",insert:"TypeError"},{label:"OSError",insert:"OSError"},{label:"Exception",insert:"Exception"}];function xh(i,l,o){const s=rf(i,l);if(!s)return[];const d=eb(i,s.start,l),h=s.query.toLowerCase(),_=d.beforeToken.toLowerCase(),m=d.linePrefix.toLowerCase(),v=o?[...nf,...nb(i)]:nf;return rb(v).filter(k=>{const x=k.label.toLowerCase(),E=k.insert.toLowerCase();return E===h||x===h||dp(k,s.query)?!1:d.importLine?tb(k,d)?x.startsWith(m)||E.startsWith(m)||x.startsWith(h)||E.startsWith(h):!1:_.endsWith(".")&&!E.includes(".")?!1:!!(E.startsWith(h)||x.startsWith(h))})}function eb(i,l,o){const s=i.lastIndexOf(`
`,l-1)+1,d=i.slice(s,o),h=i.slice(s,l),_=/^\s*(?:import|from)\s+[\w.,\s]*$/i.test(d),m=/^\s*from\s+\w+(?:\.\w+)*\s+import\s+/i.test(d);return{linePrefix:d,beforeToken:h,importLine:_,fromImportLine:m}}function tb(i,l){return l.fromImportLine?!i.insert.includes("(")&&!i.insert.startsWith("import "):i.insert.startsWith("import ")||i.insert.startsWith("from ")?!0:/^[A-Za-z_][A-Za-z0-9_]*$/.test(i.insert)}function nb(i){const l=new Set,o=[/\bdef\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/g,/\bclass\s+([A-Za-z_][A-Za-z0-9_]*)\b/g,/(?:^|[^\w.])([A-Za-z_][A-Za-z0-9_]*)\s*=/g,/\bfor\s+([A-Za-z_][A-Za-z0-9_]*)\s+in\b/g,/\b([A-Za-z_][A-Za-z0-9_]*)\.([A-Za-z_][A-Za-z0-9_]*)\s*\(/g];for(const s of o)for(const d of i.matchAll(s))d[1]&&l.add(d[1]),d[2]&&l.add(d[2]);return[...l].filter(s=>s.length>1&&!lb.has(s)).sort((s,d)=>s.localeCompare(d,"da")).map(s=>({label:s,insert:s}))}function rb(i){const l=new Set,o=[];for(const s of i){const d=s.insert.toLowerCase();l.has(d)||(l.add(d),o.push(s))}return o}const lb=new Set(nf.map(i=>i.insert.replace(/[().: ]+$/g,"")));function rf(i,l){const s=i.slice(0,l).match(/[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_.]*$/);return!s||s.index===void 0?null:{query:s[0],start:s.index}}function kh(i,l){const o=i.lastIndexOf(`
`,Math.max(0,l-1))+1;let s=null,d=null,h=!1;for(let _=0;_<l;_+=1){const m=i[_],v=i.slice(_,_+3);if(d){v===d.repeat(3)&&(d=null,_+=2);continue}if(s){if(h){h=!1;continue}if(m==="\\"){h=!0;continue}m===s&&(s=null),m===`
`&&(s=null);continue}if(m==="#"){const b=i.indexOf(`
`,_),k=b===-1?i.length:b;if(l<=k&&_>=o)return!0;_=k;continue}if(v==='"""'||v==="'''"){d=m,_+=2;continue}(m==='"'||m==="'")&&(s=m)}return s!==null||d!==null}function dp(i,l){const o=i.insert.trim();return!/[().]/.test(o)&&o.toLowerCase()===l.toLowerCase()}function ib(i){return/^[A-Za-zÆØÅæøå_][A-Za-zÆØÅæøå0-9_]*$/.test(i)}function Sh(i,l,o){if(!i)return null;const s=i.closest(".ide-terminal")??i.parentElement;if(!s)return null;const d=window.getComputedStyle(i),h=document.createElement("div"),_=document.createElement("span"),m=s.getBoundingClientRect(),v=i.getBoundingClientRect();h.style.position="absolute",h.style.visibility="hidden",h.style.pointerEvents="none",h.style.whiteSpace="pre-wrap",h.style.overflowWrap="break-word",h.style.wordBreak=d.wordBreak,h.style.boxSizing=d.boxSizing,h.style.width=`${i.getBoundingClientRect().width}px`,h.style.padding=d.padding,h.style.border=d.border,h.style.font=d.font,h.style.lineHeight=d.lineHeight,h.style.letterSpacing=d.letterSpacing,h.style.tabSize=d.tabSize,h.style.fontVariantLigatures=d.fontVariantLigatures,h.style.scrollbarGutter=d.scrollbarGutter,h.style.left=`${v.left-m.left-i.scrollLeft}px`,h.style.top=`${v.top-m.top-i.scrollTop}px`,h.textContent=i.value.slice(0,l),_.textContent=i.value.slice(l,l+1)||" ",h.appendChild(_),s.appendChild(h);const b=_.getBoundingClientRect();h.remove();const k=34,x=14,E=Math.min(210,Math.max(k+x,o*k+x)),D=ab(b.left-m.left,8,Math.max(8,s.clientWidth-296)),O=b.top-m.top+s.scrollTop,G=b.bottom-m.top+s.scrollTop+10,H=s.scrollTop+s.clientHeight-G-8,F=O-s.scrollTop-8,L=s.scrollTop+s.clientHeight,re=H>=Math.min(E,k*2)||H>=F?"below":"above",q=Math.max(k+x,Math.min(E,re==="below"?H:F)),ce=re==="below"?Math.min(G,L-q-8):Math.max(s.scrollTop+8,O-q-8);return{left:D,top:ce,maxHeight:q,placement:re}}function ab(i,l,o){return Math.max(l,Math.min(o,i))}function sb(i){const l=[];let o=null,s=null,d=!1,h=0,_=0;const m=(v,b)=>{v>h&&l.push({text:i.slice(h,v),isTriple:b}),h=v};for(;_<i.length;){const v=i[_],b=i.slice(_,_+3);if(s){if(b===s.repeat(3)){_+=3,s=null,m(_,!0);continue}_+=1;continue}if(o){d?d=!1:v==="\\"?d=!0:(v===o||v===`
`)&&(o=null),_+=1;continue}if(v==="#"){const k=i.indexOf(`
`,_);_=k===-1?i.length:k;continue}if(b==='"""'||b==="'''"){m(_,!1),s=v,_+=3;continue}(v==='"'||v==="'")&&(o=v),_+=1}return m(i.length,s!==null),l}function ob(i,l=""){const o=/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,s=/(#.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b(?:print|range|len|str|int|float|bool|list|dict|set|tuple|sum|min|max|abs|round)\b)/gm,d=[];let h=0;function _(m,v){m.split(/(\r?\n)/).forEach(b=>{if(b===`
`||b===`\r
`){d.push(u.jsx("br",{},`br-${h++}`));return}b!==""&&v(b,`part-${h++}`)})}return sb(i).forEach(m=>{if(m.isTriple){_(m.text,(v,b)=>{d.push(...Es(v,l,b,"tok-string"))});return}_(m.text,(v,b)=>{let k=0;[...v.matchAll(s)].forEach((E,D)=>{const O=E.index??0;O>k&&d.push(...Eh(v.slice(k,O),o,`${b}-${D}-plain`,l));const G=E[0],H=G.startsWith("#")?"tok-comment":G.startsWith('"')||G.startsWith("'")?"tok-string":/^\d/.test(G)?"tok-number":"tok-builtin";d.push(...Es(G,l,`${b}-${D}-token`,H)),k=O+G.length}),k<v.length&&d.push(...Eh(v.slice(k),o,`${b}-tail`,l))})}),d.length?d:" "}function Eh(i,l,o,s=""){const d=[];let h=0;const _=new RegExp(l.source,"g");return[...i.matchAll(_)].forEach((m,v)=>{const b=m.index??0;b>h&&d.push(...Es(i.slice(h,b),s,`${o}-${v}-plain`)),d.push(...Es(m[0],s,`${o}-${v}-keyword`,"tok-keyword")),h=b+m[0].length}),h<i.length&&d.push(...Es(i.slice(h),s,`${o}-plain-end`)),d}function Es(i,l,o,s=""){if(!l)return[u.jsx("span",{className:s||void 0,children:i},o)];const d=[],h=l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),_=new RegExp(`(?<![A-Za-zÆØÅæøå0-9_])(${h})(?![A-Za-zÆØÅæøå0-9_])`,"g");let m=0;return[...i.matchAll(_)].forEach((v,b)=>{const k=v.index??0;k>m&&d.push(u.jsx("span",{className:s||void 0,children:i.slice(m,k)},`${o}-${b}-before`)),d.push(u.jsx("span",{className:`${s} tok-match`.trim(),children:v[0]},`${o}-${b}-match`)),m=k+v[0].length}),m<i.length&&d.push(u.jsx("span",{className:s||void 0,children:i.slice(m)},`${o}-after`)),d.length?d:[u.jsx("span",{className:s||void 0,children:i},o)]}function cc(i){return i.length>0?i:[{path:tf,content:sp,uploaded:!1,updatedAt:Date.now()}]}function $d(i,l,o,s){const d=i.filter(h=>h.path!==l);return[{path:l,content:o,uploaded:s,updatedAt:Date.now()},...d].sort((h,_)=>_.updatedAt-h.updatedAt)}function hc(i){return i.map(l=>({name:Ae(l.path),path:l.path,type:"file",size:new Blob([l.content]).size}))}function cb(i,l,o){var s;return i.source==="pico"?o[i.path]:(s=l.find(d=>d.path===i.path))==null?void 0:s.content}function pc(i){const l=i.replace(/\\/g,"/"),o=l.lastIndexOf("/"),s=o>=0?l.slice(0,o+1):"",h=(o>=0?l.slice(o+1):l).match(/^(.+)_backup(\d+)(\.[^.]+)$/i);return h?{originalPath:`${s}${h[1]}${h[3]}`,index:parseInt(h[2],10)}:null}function Xl(i){return pc(i)!==null}function ua(i){const l=new Map;for(const o of i){const s=pc(o.path);if(!s)continue;const d=l.get(s.originalPath)??[];d.push(o),l.set(s.originalPath,d)}for(const o of l.values())o.sort((s,d)=>{var h,_;return(((h=pc(d.path))==null?void 0:h.index)??0)-(((_=pc(s.path))==null?void 0:_.index)??0)});return l}function ub(i,l){const o=i.replace(/\\/g,"/"),s=o.lastIndexOf("/"),d=s>=0?o.slice(0,s+1):"/",h=s>=0?o.slice(s+1):o.replace(/^\/+/,""),_=h.lastIndexOf("."),m=_>0?h.slice(0,_):h,v=_>0?h.slice(_):"",b=new Set(l.map(k=>k.path.toLowerCase()));for(let k=1;k<1e3;k+=1){const x=`${d}${m}_backup${k}${v}`;if(!b.has(x.toLowerCase()))return x}return`${d}${m}_backup${Date.now()}${v}`}function db(i,l){const o=i.replace(/\\/g,"/"),s=o.lastIndexOf("/"),d=s>=0?o.slice(0,s+1):"/",h=s>=0?o.slice(s+1):o.replace(/^\/+/,""),_=h.lastIndexOf("."),m=_>0?h.slice(0,_):h,v=_>0?h.slice(_):"";for(let b=1;b<1e3;b+=1){const k=b===1?"_kopi":`_kopi${b}`,x=`${d}${m}${k}${v}`;if(!l(x)&&!Xl(x))return x}return`${d}${m}_kopi${Date.now()}${v}`}function fb(i){return i==="ok"?"Nyeste":i==="outdated"?"Opdater":i==="missing"?"Mangler":"Ikke tjekket"}function mb(i,l,o,s){const d=new Map,h=ua(i),_=ua(hc(l));for(const x of i)Xl(x.path)||d.set(It("pico",x.path),{kind:"file",name:x.name,path:x.path,type:x.type,size:x.size,source:"pico",uploaded:!0,versions:h.get(x.path)??[]});for(const x of l)Xl(x.path)||d.set(It("local",x.path),{kind:"file",name:Ae(x.path),path:x.path,type:"file",source:"local",uploaded:!1,versions:_.get(x.path)??[]});for(const x of Object.keys(o)){const[E,...D]=x.split(":"),O=D.join(":");if(E!=="local"&&E!=="pico"||!O)continue;const G=d.get(x);if(G){d.set(x,G);continue}d.set(x,{kind:"file",name:Ae(O),path:O,type:"file",source:E,uploaded:!1,versions:E==="pico"?h.get(O)??[]:_.get(O)??[]})}const m=[...d.values()].sort(pb),v=m.filter(x=>x.source==="pico"),b=m.filter(x=>x.source==="local"),k=[];return v.length>0||s?k.push({kind:"separator",id:"pico-files",label:s?"Pico":"Microcontroller"},...v):k.push({kind:"separator",id:"pico-files",label:"Microcontroller"}),b.length>0&&k.push({kind:"separator",id:"browser-files",label:"Browser"},...b),k}const hb=new Map([["main.py",0],["devicesettings.txt",1],["layout.txt",2],["picobluetooth.py",3],["picofly.py",4],["picorobotics.py",5],["neopixel.py",6],["hcsr04.py",7]]);function pb(i,l){const o=Th(i.path),s=Th(l.path);return o===null&&s===null?i.name.localeCompare(l.name,"da"):o===null?-1:s===null?1:o-s}function Th(i){var o;const l=(o=i.replace(/\\/g,"/").split("/").filter(Boolean).pop())==null?void 0:o.toLowerCase();return l?hb.get(l)??null:null}function Mh(i,l,o){if(!(l in i))return i;const s={...i,[o]:i[l]};return delete s[l],s}function gb(i,l,o,s){const d=`${l}:${o}`;if(!(d in i))return i;const h={...i,[`${l}:${s}`]:i[d]};return delete h[d],h}function _b({open:i}){const l=oe(L=>L.screen),o=oe(L=>L.active),s=oe(L=>L.toggleSideMenu),d=oe(L=>L.toggleDebugger),h=oe(L=>L.setEditMode),_=oe(L=>L.openMenuPage),m=oe(L=>L.disconnect),v=oe(L=>L.openPicoIde),b=oe(L=>L.closePicoIde),k=oe(L=>L.picoIdeOrigin),x=l==="dashboard",E=l==="control",D=l==="ide",O=E&&!!(o!=null&&o.canEdit),G=!E||!!(o!=null&&o.isOwnedByMe)||!!(o!=null&&o.canEditCode),H=k==="control",F=k==="control"?"Pico Kontrol Panel":"Hovedmenu";return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:`scrim ${i?"open":"closing"}`,onClick:()=>s(!1)}),u.jsxs("nav",{className:`sidemenu sidemenu-${l} ${i?"open":"closing"}`,"aria-label":"Sidemenu",children:[x&&u.jsxs(u.Fragment,{children:[u.jsx(Hn,{label:"Bruger",icon:"user",onClick:()=>_("user-settings")}),u.jsx(Hn,{label:"Indstillinger",icon:"settings",onClick:()=>_("application-settings")}),u.jsx(Hn,{label:"Kodeværksted",icon:"picoIde",onClick:v,disabled:!G}),u.jsx(Yd,{}),u.jsx(Hn,{label:"Om appen",icon:"info",onClick:()=>_("application-about")}),u.jsx(Hn,{label:"Hjælp",icon:"help",onClick:()=>_("application-help")}),u.jsx(Hn,{label:"Fejlfinding",icon:"debugger",onClick:()=>d(!0)})]}),E&&u.jsxs(u.Fragment,{children:[u.jsx(Hn,{label:"Indstillinger",icon:"settings",onClick:()=>_("device-settings")}),u.jsx(Hn,{label:"Rediger",icon:"edit",onClick:()=>h(!0),disabled:!O}),u.jsx(Hn,{label:"Kodeværksted",icon:"picoIde",onClick:v,disabled:!G}),u.jsx(Yd,{}),u.jsx(Hn,{label:"Hjælp",icon:"help",onClick:()=>_("device-help")}),u.jsx(Hn,{label:"Fejlfinding",icon:"debugger",onClick:()=>d(!0)})]}),D&&u.jsxs(u.Fragment,{children:[u.jsx(Hn,{label:F,icon:"back",onClick:b}),u.jsx(Yd,{})]}),u.jsx("div",{className:"spacer"}),(E||D&&H)&&u.jsx(Hn,{label:"Forlad",icon:"exit",onClick:()=>m()})]})]})}function Hn({label:i,icon:l,disabled:o,onClick:s}){return u.jsxs("button",{className:"iconbtn",type:"button",onClick:s,disabled:o,"aria-label":i,children:[u.jsx(Pt,{name:l}),u.jsx("span",{children:i})]})}function Yd(){return u.jsxs("a",{className:"iconbtn sidemenu-link",href:"https://www.teknologiskolen.dk/",target:"_blank",rel:"noreferrer","aria-label":"Teknologiskolen",children:[u.jsx("img",{src:Ng,alt:""}),u.jsx("span",{children:"Teknologiskolen"})]})}const vb={error:"term-error",success:"term-success",warning:"term-warning",info:""},Nh={error:"[FEJL] ",success:"[SUCCES] ",warning:"[ADVARSEL] ",info:""};function bb(){const i=new Date,l=o=>String(o).padStart(2,"0");return`${l(i.getDate())}-${l(i.getMonth()+1)}-${i.getFullYear()}-${l(i.getHours())}-${l(i.getMinutes())}`}function yb(){const i=oe(d=>d.logs),l=oe(d=>d.clearLogs),o=oe(d=>d.toggleDebugger);function s(){const d=[...i].reverse().map(v=>`${v.time} ${Nh[v.level]}${v.message}`).join(`
`),h=new Blob([d],{type:"text/plain"}),_=URL.createObjectURL(h),m=document.createElement("a");m.href=_,m.download=`${bb()}.txt`,m.click(),URL.revokeObjectURL(_)}return u.jsxs(Ht,{title:"Fejlfinding",onClose:()=>o(!1),closeVariant:"circle",children:[u.jsx("div",{className:"terminal",children:i.length===0?u.jsx("div",{className:"term-line",children:"Ingen log endnu."}):i.map((d,h)=>u.jsxs("div",{className:`term-line ${vb[d.level]}`,children:[d.time," ",Nh[d.level],d.message]},`${d.time}-${h}`))}),u.jsxs("div",{className:"row",style:{marginTop:14},children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:l,children:"Ryd"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:s,children:"Gem logfil"})]})]})}const fp=4,ar=fp*4+17,jh=80,wb=20,xb=30660;function kb(i){const l=new TextEncoder().encode(i);if(l.length>76)throw new Error("QR-koden er for lang.");const o=Rh(!1),s=Rh(!1);Sb(o,s);const d=Tb(l),h=jb(d,wb);return Mb(o,s,[...d,...h]),Nb(o,s),o}function Rh(i){return Array.from({length:ar},()=>Array.from({length:ar},()=>i))}function ir(i,l,o,s,d,h=!0){i[s][o]=d,h&&(l[s][o]=!0)}function Sb(i,l){Xd(i,l,0,0),Xd(i,l,ar-7,0),Xd(i,l,0,ar-7);for(let o=0;o<ar;o+=1)l[6][o]||ir(i,l,o,6,o%2===0),l[o][6]||ir(i,l,6,o,o%2===0);Eb(i,l,26,26),ir(i,l,8,fp*4+9,!0)}function Xd(i,l,o,s){for(let d=-1;d<=7;d+=1)for(let h=-1;h<=7;h+=1){const _=o+h,m=s+d;if(_<0||m<0||_>=ar||m>=ar)continue;const v=h>=0&&h<=6&&d>=0&&d<=6&&(h===0||h===6||d===0||d===6||h>=2&&h<=4&&d>=2&&d<=4);ir(i,l,_,m,v)}}function Eb(i,l,o,s){for(let d=-2;d<=2;d+=1)for(let h=-2;h<=2;h+=1)l[s+d][o+h]||ir(i,l,o+h,s+d,Math.max(Math.abs(h),Math.abs(d))!==1)}function Tb(i){const l=[];uc(l,4,4),uc(l,i.length,8);for(const s of i)uc(l,s,8);for(uc(l,0,Math.min(4,jh*8-l.length));l.length%8!==0;)l.push(0);const o=[];for(let s=0;s<l.length;s+=8)o.push(l.slice(s,s+8).reduce((d,h)=>d<<1|h,0));for(let s=236;o.length<jh;s=s===236?17:236)o.push(s);return o}function uc(i,l,o){for(let s=o-1;s>=0;s-=1)i.push(l>>>s&1)}function Mb(i,l,o){const s=o.flatMap(_=>Array.from({length:8},(m,v)=>_>>>7-v&1));let d=0,h=!0;for(let _=ar-1;_>=1;_-=2){_===6&&(_-=1);for(let m=0;m<ar;m+=1){const v=h?ar-1-m:m;for(let b=0;b<2;b+=1){const k=_-b;if(l[v][k])continue;const x=d<s.length?s[d]===1:!1;i[v][k]=x!==((k+v)%2===0),d+=1}}h=!h}}function Nb(i,l){const o=s=>(xb>>>s&1)!==0;for(let s=0;s<=5;s+=1)ir(i,l,8,s,o(s));ir(i,l,8,7,o(6)),ir(i,l,8,8,o(7)),ir(i,l,7,8,o(8));for(let s=9;s<15;s+=1)ir(i,l,14-s,8,o(s));for(let s=0;s<8;s+=1)ir(i,l,ar-1-s,8,o(s));for(let s=8;s<15;s+=1)ir(i,l,8,ar-15+s,o(s))}const Ts=new Array(512),lf=new Array(256);let Ah=!1;function mp(){if(Ah)return;let i=1;for(let l=0;l<255;l+=1)Ts[l]=i,lf[i]=l,i<<=1,i&256&&(i^=285);for(let l=255;l<512;l+=1)Ts[l]=Ts[l-255];Ah=!0}function hp(i,l){return i===0||l===0?0:Ts[lf[i]+lf[l]]}function jb(i,l){mp();const o=Rb(l),s=Array.from({length:l},()=>0);for(const d of i){const h=d^s.shift();s.push(0);for(let _=0;_<l;_+=1)s[_]^=hp(o[_],h)}return s}function Rb(i){mp();let l=[1];for(let o=0;o<i;o+=1){const s=Array.from({length:l.length+1},()=>0);for(let d=0;d<l.length;d+=1)s[d]^=hp(l[d],Ts[o]),s[d+1]^=l[d];l=s}return l.slice(1)}function Ab(){const i=oe(Me=>Me.menuPage),l=oe(Me=>Me.closeMenuPage),o=oe(Me=>Me.user),s=oe(Me=>Me.active),d=oe(Me=>Me.layout),h=oe(Me=>Me.savedDevices),_=oe(Me=>Me.updateUsername),m=oe(Me=>Me.createOwnerPairingCode),v=oe(Me=>Me.applyOwnerPairingCode),b=oe(Me=>Me.clearSavedDevices),k=oe(Me=>Me.resetApplicationData),x=oe(Me=>Me.saveDeviceSettings),E=oe(Me=>Me.setEditMode),D=oe(Me=>Me.askConfirm),[O,G]=N.useState((o==null?void 0:o.username)??""),[H,F]=N.useState(!1),[L,re]=N.useState(""),[q,ce]=N.useState(""),[ge,te]=N.useState(!1),[pe,ye]=N.useState(""),Be=N.useRef(null),[ne,Pe]=N.useState((s==null?void 0:s.icon)??Kl),[we,Qe]=N.useState(!1),[Z,R]=N.useState((s==null?void 0:s.canOthersConnect)??!1),[W,me]=N.useState((s==null?void 0:s.canOthersEdit)??!1),[Re,_e]=N.useState((s==null?void 0:s.canOthersEditCode)??!1),[T,$]=N.useState((s==null?void 0:s.gridCols)??11),[le,ae]=N.useState((s==null?void 0:s.gridRows)??31),[Se,xe]=N.useState(!1);N.useEffect(()=>{i==="user-settings"&&(G((o==null?void 0:o.username)??""),ce(""),ye(""),te(!1))},[i,o==null?void 0:o.username]),N.useEffect(()=>{i==="device-settings"&&s&&(Pe(s.icon),R(s.canOthersConnect),me(s.canOthersEdit),_e(s.canOthersEditCode),$(s.gridCols),ae(s.gridRows))},[s,i]),N.useEffect(()=>{if(!ge)return;let Me=!1,se=null,P=0;async function J(){var Oe;const ie=window.BarcodeDetector;if(!ie||!((Oe=navigator.mediaDevices)!=null&&Oe.getUserMedia)){ye("Denne browser kan ikke scanne QR-koder. Skriv ejerkoden i stedet."),te(!1);return}try{se=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}});const Ge=Be.current;if(!Ge)return;Ge.srcObject=se,await Ge.play();const Ve=new ie({formats:["qr_code"]}),Ce=async()=>{var Le;if(!Me){try{const fn=(Le=(await Ve.detect(Ge)).find(kn=>kn.rawValue))==null?void 0:Le.rawValue;if(fn){ce(fn),v(fn)&&F(!1),te(!1);return}}catch{}P=window.requestAnimationFrame(Ce)}};P=window.requestAnimationFrame(Ce)}catch{ye("Kameraet kunne ikke åbnes. Skriv ejerkoden i stedet."),te(!1)}}return J(),()=>{Me=!0,P&&window.cancelAnimationFrame(P),se==null||se.getTracks().forEach(ie=>ie.stop())}},[v,ge]);const de=(Me,se)=>Number.isFinite(Me)?Math.max(fa,Math.min(ma,Math.round(Me))):se,Fe=(o==null?void 0:o.username)??"",Ye=O.trim(),Ct=Ye.length>0&&Ye!==Fe;if(!i)return null;if(i==="user-settings"){let Me=function(){const J=m();J&&(re(J),ce(""),F(!0))},se=function(){v(q)&&(ce(""),F(!1))};async function P(){var J;try{await((J=navigator.clipboard)==null?void 0:J.writeText(L))}catch{}}return u.jsxs(u.Fragment,{children:[u.jsx(Ht,{title:"Brugerindstillinger",onClose:l,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(wr,{label:"GUID",value:(o==null?void 0:o.userID)??"Ukendt"}),u.jsxs("div",{className:`field ${O.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-username",value:O,onChange:J=>G(J.target.value),maxLength:24,autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-username",children:"Brugernavn"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>_(O),disabled:!Ct,children:"Gem nyt brugernavn"}),u.jsx("div",{className:"notice",children:"Ejerkode bruges, hvis den samme person skal forbinde fra flere browsere eller telefoner."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:Me,children:"Ejerkode"}),u.jsx("button",{className:"btn btn-outline btn-block btn-danger",type:"button",onClick:()=>D({title:"Start forfra",message:"Vil du slette brugeroplysninger og gemte enheder fra denne browser? Siden genindlæses bagefter.",confirmLabel:"Slet alt",onConfirm:()=>{k()}}),children:"Slet brugerdata"})]})}),H&&u.jsx(Ht,{title:"Del ejerkode",onClose:()=>F(!1),children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(Db,{code:L}),u.jsx("code",{className:"owner-code-text",children:L}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>void P(),children:"Kopiér ejerkode"}),u.jsxs("div",{className:`field ${q.trim()?"filled":""}`,children:[u.jsx("input",{id:"settings-owner-code",value:q,onChange:J=>ce(J.target.value),autoComplete:"off",placeholder:""}),u.jsx("label",{htmlFor:"settings-owner-code",children:"Skriv ejerkode"})]}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:se,disabled:!q.trim(),children:"Brug ejerkode i denne browser"}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>te(J=>!J),children:ge?"Stop scanning":"Scan QR-kode"}),pe&&u.jsx("div",{className:"notice",children:pe}),ge&&u.jsx("video",{className:"owner-code-video",ref:Be,muted:!0,playsInline:!0})]})})]})}if(i==="application-settings")return u.jsx(Ht,{title:"Applikationsindstillinger",onClose:l,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(wr,{label:"Version",value:Ms}),u.jsx(wr,{label:"Bluetooth",value:kc()?"Tilgængelig":"Ikke tilgængelig"}),u.jsx(wr,{label:"Gemte enheder",value:String(h.length)}),u.jsx("div",{className:"notice",children:"Bluetooth-tilladelser styres af browseren. Hvis du vil glemme en parret Pico helt, skal du fjerne tilladelsen i browserens site- eller Bluetooth-indstillinger."}),u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:()=>D({title:"Ryd gemte enheder",message:"Vil du fjerne alle gemte enheder fra denne browser?",confirmLabel:"Ryd",onConfirm:b}),disabled:h.length===0,children:"Ryd gemte enheder"})]})});if(i==="application-about")return u.jsx(Ht,{title:"Om appen",onClose:l,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Pico Kontrol Panel er lavet til at bygge og fjernstyre sjove eller seje Raspberry Pi Pico W-projekter."}),u.jsx(wr,{label:"Udvikler",value:"Christian Bröchner Rasmussen"}),u.jsx(wr,{label:"Version",value:Ms})]})});if(i==="application-help")return u.jsx(Ht,{title:"Hjælp til applikationen",onClose:l,children:u.jsxs("div",{className:"settings-stack prose help-lesson",children:[u.jsxs("div",{className:"help-lesson-card",children:[u.jsx("strong",{children:"Komplet undervisningsforløb"}),u.jsx("p",{children:"Linket åbner Teknologiskolens guide til Pico Kontrol Panel. Her kan du lære hele arbejdsgangen: browseropsætning, Kodeværkstedet, MicroPython, USB-installation, Bluetooth-forbindelse, kontrolpaneler og trådløs kodeudvikling."})]}),u.jsxs("div",{className:"help-lesson-list","aria-label":"Undervisningsforløbet indeholder",children:[u.jsx("span",{children:"Trin-for-trin opsætning"}),u.jsx("span",{children:"Øvelser til kode og kontrolpanel"}),u.jsx("span",{children:"Projektforslag med Pico W"})]}),u.jsx("p",{className:"help-lesson-destination",children:"Du sendes til materialer.teknologiskolen.dk i en ny fane."}),u.jsx("a",{className:"btn btn-primary btn-block",href:"https://materialer.teknologiskolen.dk/lessons/fjernstyring-af-raspberry-pi-pico-w",target:"_blank",rel:"noreferrer",children:"Åbn komplet undervisningsforløb"})]})});if(i==="device-settings"){const Me=!!(s!=null&&s.isOwnedByMe);async function se(P=!1){if(!s||!Me)return;const J=de(T,s.gridCols),ie=de(le,s.gridRows),Oe=Cb(d,J,ie);if(Oe&&!P){D({title:"Gitter kan påvirke layout",message:`Det nuværende layout bruger op til ${Oe.requiredCols} kolonner og ${Oe.requiredRows} rækker. Det nye gitter er ${J} × ${ie}, så nogle kontroller kan ende udenfor eller skulle flyttes i redigering.`,confirmLabel:"Gem alligevel",onConfirm:()=>{se(!0)}});return}xe(!0),await x(ne,Z,Z&&W,Z&&Re,J,ie),$(J),ae(ie),xe(!1),l()}return u.jsxs(Ht,{title:"Enhedsindstillinger",onClose:l,children:[u.jsxs("div",{className:"device-settings-modal",children:[u.jsx("div",{className:"device-settings-scroll",children:u.jsxs("div",{className:"settings-stack",children:[u.jsx(wr,{label:"Navn",value:(s==null?void 0:s.deviceName)??"Ukendt"}),u.jsx(wr,{label:"Ejer",value:Ob(s)}),Me?u.jsxs(u.Fragment,{children:[u.jsxs("button",{className:"device-icon-pick settings-icon-pick",type:"button",onClick:()=>Qe(!0),"aria-label":"Vælg ikon",children:[u.jsx(As,{slug:ne}),u.jsx("span",{className:"badge",children:u.jsx(Pt,{name:"plus",size:22})})]}),u.jsx("p",{className:"prompt",children:"Må andre forbinde til- og bruge denne enhed?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:Z?"":"active",onClick:()=>R(!1),children:"Privat"}),u.jsx("button",{type:"button",className:Z?"active":"",onClick:()=>R(!0),children:"Offentlig"})]}),Z&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"prompt",children:"Må andre redigere layoutet?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:W?"":"active",onClick:()=>me(!1),children:"Nej"}),u.jsx("button",{type:"button",className:W?"active":"",onClick:()=>me(!0),children:"Ja"})]}),u.jsx("p",{className:"prompt",children:"Må andre redigere koden?"}),u.jsxs("div",{className:"segmented",children:[u.jsx("button",{type:"button",className:Re?"":"active",onClick:()=>_e(!1),children:"Nej"}),u.jsx("button",{type:"button",className:Re?"active":"",onClick:()=>_e(!0),children:"Ja"})]})]}),u.jsx("p",{className:"prompt",children:"Kontrolpanelets gitter"}),u.jsxs("div",{className:"row",children:[u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-cols",children:"Kolonner"}),u.jsx("input",{id:"device-cols",type:"number",min:fa,max:ma,value:Number.isNaN(T)?"":T,onChange:P=>$(parseInt(P.target.value,10)),onBlur:()=>$(de(T,(s==null?void 0:s.gridCols)??11))})]}),u.jsxs("div",{className:"grid-field",children:[u.jsx("label",{htmlFor:"device-rows",children:"Rækker"}),u.jsx("input",{id:"device-rows",type:"number",min:fa,max:ma,value:Number.isNaN(le)?"":le,onChange:P=>ae(parseInt(P.target.value,10)),onBlur:()=>ae(de(le,(s==null?void 0:s.gridRows)??31))})]})]})]}):u.jsxs(u.Fragment,{children:[u.jsx(wr,{label:"Ikon",value:(s==null?void 0:s.icon)??Kl}),u.jsx(wr,{label:"Redigering",value:s!=null&&s.canEdit?"Tilladt":"Ikke tilladt"}),u.jsx(wr,{label:"Gitter",value:`${(s==null?void 0:s.gridCols)??0} × ${(s==null?void 0:s.gridRows)??0}`})]})]})}),Me&&u.jsx("div",{className:"device-settings-foot",children:u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>se(),disabled:Se,children:Se?"Gemmer...":"Gem enhedsindstillinger"})})]}),we&&u.jsx($h,{selected:ne,onSelect:Pe,onClose:()=>Qe(!1)})]})}return u.jsx(Ht,{title:"Hjælp til enheden",onClose:l,children:u.jsxs("div",{className:"settings-stack prose",children:[u.jsx("p",{children:"Knapper sender en kommando med deres navn, når de trykkes."}),u.jsx("p",{children:"Slidere sender værdien fra den firmware-definerede skala. Appen ændrer kun placering og størrelse."}),u.jsx("p",{children:"Hvis redigering er tilladt, kan du åbne redigering fra menuen og gemme layoutet tilbage på Picoen."}),(s==null?void 0:s.canEdit)&&u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>E(!0),children:"Rediger layout"})]})})}function Cb(i,l,o){let s=0,d=0;for(const h of i)Rs(h)&&(s=Math.max(s,Math.ceil((h.centerX2+h.spanX)/2)+1),d=Math.max(d,Math.ceil((h.centerY2+h.spanY)/2)+1));return l<s||o<d?{requiredCols:s,requiredRows:d}:null}function Db({code:i}){const l=N.useMemo(()=>kb(i),[i]),o=l.length;return u.jsxs("svg",{className:"owner-code-qr",viewBox:`0 0 ${o+8} ${o+8}`,role:"img","aria-label":"QR-kode til ejerkode",children:[u.jsx("rect",{width:o+8,height:o+8,fill:"white"}),l.map((s,d)=>s.map((h,_)=>h?u.jsx("rect",{x:_+4,y:d+4,width:"1",height:"1",fill:"currentColor"},`${_}-${d}`):null))]})}function Ob(i){var l;return i?i.isOwnedByMe?"Dig":((l=i.ownerName)==null?void 0:l.trim())||"Anden bruger":"Ukendt"}function wr({label:i,value:l}){return u.jsxs("div",{className:"settings-row",children:[u.jsx("span",{children:i}),u.jsx("strong",{children:l})]})}function Lb(){const i=oe(s=>s.confirmDialog),l=oe(s=>s.closeConfirm);if(!i)return null;function o(){i==null||i.onConfirm(),l()}return u.jsx(Ht,{title:i.title,onClose:l,children:u.jsxs("div",{className:"settings-stack",children:[u.jsx("p",{className:"confirm-message",children:i.message}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:l,children:i.cancelLabel??"Annuller"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:o,children:i.confirmLabel??"Fortsæt"})]})]})})}function Bb(){const i=oe(s=>s.connectionLost),l=oe(s=>s.reconnectLostDevice),o=oe(s=>s.dismissConnectionLost);return i?u.jsx(Ht,{title:"Forbindelse afbrudt",onClose:o,children:u.jsxs("div",{className:"settings-stack",children:[u.jsxs("p",{className:"confirm-message",children:["Forbindelsen til ",i.deviceName," blev afbrudt. Tjek at Picoen har strøm og er tæt nok på."]}),u.jsxs("div",{className:"row",children:[u.jsx("button",{className:"btn btn-outline btn-block",type:"button",onClick:o,children:"Luk"}),u.jsx("button",{className:"btn btn-primary btn-block",type:"button",onClick:()=>l(),children:"Genforbind"})]})]})}):null}function zb(){const i=oe(o=>o.toast),l=oe(o=>o.dismissToast);return i?u.jsx("div",{className:"toast",role:"alert",onClick:l,children:i.message},i.id):null}function Ub(){const i=oe(m=>m.screen),l=oe(m=>m.splashTarget),o=oe(m=>m.init),s=oe(m=>m.sideMenuOpen),d=oe(m=>m.debuggerOpen),[h,_]=N.useState(!1);return N.useEffect(()=>{o()},[o]),N.useEffect(()=>{if(s){_(!0);return}const m=setTimeout(()=>_(!1),140);return()=>clearTimeout(m)},[s]),u.jsxs("div",{className:"app",children:[i==="splash"&&l==="intro"&&u.jsx(qm,{}),i==="splash"&&l==="dashboard"&&u.jsx(Im,{}),i==="splash"&&u.jsx(Bg,{}),i==="intro"&&u.jsx(qm,{}),i==="dashboard"&&u.jsx(Im,{}),i==="connection"&&u.jsx(Xg,{}),i==="create"&&u.jsx(Wg,{}),i==="control"&&u.jsx(X_,{}),i==="ide"&&u.jsx($v,{}),h&&u.jsx(_b,{open:s}),u.jsx(Ab,{}),u.jsx(Bb,{}),u.jsx(Lb,{}),d&&u.jsx(yb,{}),u.jsx(zb,{})]})}function qb(){if(!("serviceWorker"in navigator))return;window.addEventListener("load",()=>{const l=new URL("sw.js",window.location.href);navigator.serviceWorker.register(l,{scope:"./"}).catch(o=>{console.warn("Service worker registration failed:",o)})});let i=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{i||window.crossOriginIsolated||(i=!0,window.location.reload())})}qb();I2.createRoot(document.getElementById("root")).render(u.jsx(xs.StrictMode,{children:u.jsx(Ub,{})}));
